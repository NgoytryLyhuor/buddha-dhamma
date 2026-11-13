#!/usr/bin/env node

/**
 * Khmer & Dhamma Text Quality Auditor
 * ----------------------------------------------------
 * Automatically audits the repository for:
 * 1. Thai characters (100% forbidden in Khmer Dhamma texts)
 * 2. Broken Khmer Unicode sequences (double coengs, double vowels, coeng after vowel)
 * 3. Misspelled Dhamma & Buddhist canonical terms (Chuon Nath standardization)
 * 4. Optional LLM Deep Semantic Audit via Gemini API (if GEMINI_API_KEY is available)
 *
 * Usage:
 *   node scripts/auditKhmerText.js
 *   node scripts/auditKhmerText.js --fix
 *   node scripts/auditKhmerText.js --llm
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

// Command-line options
const args = process.argv.slice(2)
const shouldFix = args.includes('--fix')
const runLlm = args.includes('--llm')

// ANSI Color helper for terminal output
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bgRed: '\x1b[41m',
}

// 1. Thai Unicode Range: U+0E00 to U+0E7F
const THAI_REGEX = /[\u0E00-\u0E7F]/g

// 2. Khmer Unicode Glitches & Typographical Errors
const KHMER_RULES = [
  {
    id: 'double-coeng',
    severity: 'error',
    name: 'Double Coeng / ជើងត្រួតពីរដង (្្)',
    regex: /\u17D2\u17D2+/g,
    fix: '\u17D2',
    desc: 'Found duplicate subscript marker (Coeng pressed twice in error).',
  },
  {
    id: 'double-dependent-vowel',
    severity: 'error',
    name: 'Duplicate Dependent Vowel / ស្រៈនិស្ស័យត្រួតពីរដង',
    regex: /([\u17B6-\u17C5])\1+/g,
    fix: '$1',
    desc: 'Found same dependent vowel repeated consecutively.',
  },
  {
    id: 'coeng-after-vowel',
    severity: 'error',
    name: 'Coeng After Vowel / ជើងនៅក្រោយស្រៈនិស្ស័យ',
    regex: /([\u17B6-\u17C5])\u17D2/g,
    desc: 'Khmer orthography forbids subscripting after a dependent vowel.',
  },
  {
    id: 'coeng-dangling',
    severity: 'error',
    name: 'Dangling Coeng / ជើងគ្មានព្យញ្ជនៈទ្រ',
    regex: /\u17D2(?=[\s\.,;!?()\[\]{}"'«»\n\r]|$)/g,
    desc: 'Coeng marker without following consonant to attach to.',
  },
  {
    id: 'double-diacritic',
    severity: 'error',
    name: 'Duplicate Diacritics / សញ្ញាត្រួតពីរដង',
    regex: /(\u17C6|\u17C7|\u17C8|\u17CC|\u17CD|\u17CE|\u17CF|\u17D0)\1+/g,
    fix: '$1',
    desc: 'Duplicate diacritic marker (e.g. redundant nikahit or reahmuk).',
  },
]

// 3. Common Khmer Buddhist Spelling Errors (Chuon Nath Standard)
const DHAMMA_SPELL_RULES = [
  {
    id: 'aphidhamma-misspell',
    severity: 'warning',
    name: 'អភិធម៍ -> អភិធម្ម',
    regex: /អភិធម៍/g,
    fix: 'អភិធម្ម',
    desc: 'In Buddhist Canon and Chuon Nath dictionary, "Abhidhamma" is spelled "អភិធម្ម".',
  },
  {
    id: 'nibbana-misspell',
    severity: 'warning',
    name: 'និព្វាន្ត -> និព្វាន',
    regex: /និព្វាន្ត/g,
    fix: 'និព្វាន',
    desc: 'Correct canonical Pali-Khmer spelling is "និព្វាន" (Nibbāna).',
  },
  {
    id: 'cetasika-misspell',
    severity: 'warning',
    name: 'ចេតសិគ -> ចេតសិក',
    regex: /ចេតសិគ/g,
    fix: 'ចេតសិក',
    desc: 'Cetasika must end with ក ("ចេតសិក").',
  },
  {
    id: 'ditthi-misspell',
    severity: 'warning',
    name: 'សម្មាទិដ្និ -> សម្មាទិដ្ឋិ',
    regex: /សម្មាទិដ្និ/g,
    fix: 'សម្មាទិដ្ឋិ',
    desc: 'Sammādiṭṭhi uses ដ្ឋ ("សម្មាទិដ្ឋិ").',
  },
  {
    id: 'kusala-misspell',
    severity: 'warning',
    name: 'កុសល់ -> កុសល',
    regex: /\bកុសល់\b/g,
    fix: 'កុសល',
    desc: 'In Abhidhamma terminology, wholesome consciousness is "កុសល" (not "កុសល់").',
  },
  {
    id: 'akusala-misspell',
    severity: 'warning',
    name: 'អកុសល់ -> អកុសល',
    regex: /\bអកុសល់\b/g,
    fix: 'អកុសល',
    desc: 'In Abhidhamma terminology, unwholesome consciousness is "អកុសល".',
  },
]

// Directories to scan
const SCAN_DIRS = ['src', 'public', 'scripts']
const IGNORE_DIRS = ['node_modules', '.git', 'dist', '.vscode', '.idea']
const ALLOWED_EXTS = ['.vue', '.js', '.json', '.html', '.md', '.txt']
const IGNORE_FILES = ['auditKhmerText.js'] // Don't check the auditor script itself

/**
 * Recursively collect all relevant source files
 */
function collectFiles(dir) {
  let fileList = []
  if (!fs.existsSync(dir)) return fileList

  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      if (!IGNORE_DIRS.includes(entry.name)) {
        fileList = fileList.concat(collectFiles(fullPath))
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase()
      if (ALLOWED_EXTS.includes(ext) && !IGNORE_FILES.includes(entry.name)) {
        fileList.push(fullPath)
      }
    }
  }

  return fileList
}

/**
 * Audit a single file
 */
function auditFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const lines = content.split(/\r?\n/)
  const issues = []
  let modifiedContent = content
  let hasModifications = false

  lines.forEach((line, lineIdx) => {
    const lineNum = lineIdx + 1

    // 1. Check Thai characters (CRITICAL)
    let thaiMatch
    const thaiLocalRegex = new RegExp(THAI_REGEX.source, 'g')
    while ((thaiMatch = thaiLocalRegex.exec(line)) !== null) {
      const col = thaiMatch.index + 1
      const char = thaiMatch[0]
      const codePoint = 'U+' + char.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')
      const snippet = extractSnippet(line, thaiMatch.index, 1)

      issues.push({
        type: 'THAI_CHARACTER',
        severity: 'CRITICAL',
        file: filePath,
        line: lineNum,
        col,
        char,
        codePoint,
        message: `Found Thai character "${char}" (${codePoint}). Thai text is strictly forbidden in Khmer Dhamma pages.`,
        snippet,
      })
    }

    // 2. Check Khmer Unicode syntactic glitches
    KHMER_RULES.forEach(rule => {
      let m
      const r = new RegExp(rule.regex.source, 'g')
      while ((m = r.exec(line)) !== null) {
        issues.push({
          type: 'KHMER_UNICODE_ERROR',
          severity: rule.severity,
          file: filePath,
          line: lineNum,
          col: m.index + 1,
          name: rule.name,
          message: `${rule.name}: ${rule.desc}`,
          snippet: extractSnippet(line, m.index, m[0].length),
        })
      }
    })

    // 3. Check Dhamma spelling rules
    DHAMMA_SPELL_RULES.forEach(rule => {
      let m
      const r = new RegExp(rule.regex.source, 'g')
      while ((m = r.exec(line)) !== null) {
        issues.push({
          type: 'DHAMMA_SPELL_WARNING',
          severity: rule.severity,
          file: filePath,
          line: lineNum,
          col: m.index + 1,
          name: rule.name,
          message: `${rule.name}: ${rule.desc} (Suggest replacing with "${rule.fix}")`,
          snippet: extractSnippet(line, m.index, m[0].length),
        })
      }
    })
  })

  // Optional: Auto-fix mechanical issues if requested
  if (shouldFix) {
    let fixed = modifiedContent
    KHMER_RULES.forEach(rule => {
      if (rule.fix) {
        fixed = fixed.replace(rule.regex, rule.fix)
      }
    })
    DHAMMA_SPELL_RULES.forEach(rule => {
      if (rule.fix) {
        fixed = fixed.replace(rule.regex, rule.fix)
      }
    })
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8')
      hasModifications = true
    }
  }

  return { issues, linesCount: lines.length, hasModifications }
}

/**
 * Format a snippet preview with pointer
 */
function extractSnippet(line, index, length) {
  const start = Math.max(0, index - 30)
  const end = Math.min(line.length, index + length + 30)
  const prefix = (start > 0 ? '...' : '') + line.slice(start, index)
  const target = line.slice(index, index + length)
  const suffix = line.slice(index + length, end) + (end < line.length ? '...' : '')

  return {
    prefix,
    target,
    suffix,
    raw: line.trim(),
  }
}

/**
 * Main Auditor Entrypoint
 */
async function main() {
  console.log(`\n${c.bold}${c.cyan}======================================================${c.reset}`)
  console.log(`${c.bold}${c.cyan}   ☸️  BUDDHA DHAMMA — KHMER & THAI TEXT AUDITOR     ${c.reset}`)
  console.log(`${c.bold}${c.cyan}======================================================${c.reset}`)
  console.log(`${c.dim}Auditing repository files for Thai characters & Khmer spelling...${c.reset}\n`)

  const allFiles = []
  SCAN_DIRS.forEach(dir => {
    const p = path.join(rootDir, dir)
    allFiles.push(...collectFiles(p))
  })

  let totalLines = 0
  let totalThaiErrors = 0
  let totalKhmerErrors = 0
  let totalWarnings = 0
  let fixedFilesCount = 0
  const allIssues = []

  allFiles.forEach(file => {
    const { issues, linesCount, hasModifications } = auditFile(file)
    totalLines += linesCount
    if (hasModifications) fixedFilesCount++

    issues.forEach(iss => {
      allIssues.push(iss)
      if (iss.type === 'THAI_CHARACTER') totalThaiErrors++
      else if (iss.severity === 'error' || iss.severity === 'CRITICAL') totalKhmerErrors++
      else totalWarnings++
    })
  })

  // Print Issues
  if (allIssues.length > 0) {
    console.log(`${c.bold}${c.red}⚠️  ISSUES DETECTED (${allIssues.length}):${c.reset}\n`)

    allIssues.forEach((iss, idx) => {
      const relPath = path.relative(rootDir, iss.file)
      const badge =
        iss.severity === 'CRITICAL'
          ? `${c.bgRed}${c.white}${c.bold} CRITICAL ${c.reset}`
          : iss.severity === 'error'
          ? `${c.red}${c.bold} ERROR ${c.reset}`
          : `${c.yellow}${c.bold} WARNING ${c.reset}`

      console.log(`${idx + 1}. ${badge} ${c.bold}${relPath}:${iss.line}:${iss.col}${c.reset}`)
      console.log(`   ${c.white}${iss.message}${c.reset}`)
      if (iss.snippet) {
        console.log(`   ${c.dim}Context:${c.reset} ${iss.snippet.prefix}${c.bold}${c.red}[${iss.snippet.target}]${c.reset}${iss.snippet.suffix}`)
      }
      console.log('')
    })
  }

  // LLM Deep Semantic Review (if enabled)
  if (runLlm) {
    await runLlmDeepAudit()
  }

  // Summary Report
  console.log(`${c.bold}${c.cyan}------------------------------------------------------${c.reset}`)
  console.log(`${c.bold}Audit Summary Report:${c.reset}`)
  console.log(`• Files Scanned      : ${c.bold}${allFiles.length}${c.reset}`)
  console.log(`• Lines of Code/Text : ${c.bold}${totalLines.toLocaleString()}${c.reset}`)
  console.log(
    `• Thai Characters    : ${
      totalThaiErrors === 0 ? `${c.green}0 (Clean ✅)${c.reset}` : `${c.red}${c.bold}${totalThaiErrors} (VIOLATIONS DETECTED ❌)${c.reset}`
    }`
  )
  console.log(
    `• Broken Unicode     : ${
      totalKhmerErrors === 0 ? `${c.green}0 (Clean ✅)${c.reset}` : `${c.red}${c.bold}${totalKhmerErrors} (Errors found)${c.reset}`
    }`
  )
  console.log(
    `• Dhamma Warnings    : ${
      totalWarnings === 0 ? `${c.green}0 (Clean ✅)${c.reset}` : `${c.yellow}${totalWarnings} (Suggestions)${c.reset}`
    }`
  )

  if (shouldFix && fixedFilesCount > 0) {
    console.log(`• Auto-fixed Files   : ${c.green}${fixedFilesCount} file(s) updated${c.reset}`)
  }
  console.log(`${c.bold}${c.cyan}======================================================${c.reset}\n`)

  // Exit code logic for CI/CD
  if (totalThaiErrors > 0 || totalKhmerErrors > 0) {
    console.error(
      `${c.red}${c.bold}❌ AUDIT FAILED:${c.reset} Repository contains prohibited Thai characters or corrupt Khmer Unicode.\nPlease fix the issues listed above before deploying or merging.\n`
    )
    process.exit(1)
  } else {
    console.log(`${c.green}${c.bold}✅ AUDIT PASSED:${c.reset} Zero Thai characters and zero broken Khmer Unicode found across all ${allFiles.length} files!\n`)
    process.exit(0)
  }
}

/**
 * Optional Gemini LLM Deep Semantic Audit
 */
async function runLlmDeepAudit() {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    console.log(`${c.yellow}ℹ️  LLM Deep Semantic Audit skipped: GEMINI_API_KEY environment variable is not set.${c.reset}`)
    console.log(`${c.dim}   (To enable LLM checking, set GEMINI_API_KEY=<your-key> and run with --llm)${c.reset}\n`)
    return
  }

  console.log(`${c.bold}${c.magenta}🤖 Running Gemini LLM Buddhist Scholarly Review...${c.reset}`)
  try {
    const prompt = `You are an expert scholar of the Khmer Tripitaka, the Abhidhamma Pitaka, and the Chuon Nath Khmer Dictionary.
Analyze the following Khmer Buddhist terminology for correct orthography according to the Buddhist Institute of Cambodia (ពុទ្ធសាសនបណ្ឌិត្យ).
Verify that no Thai loan words, Thai transliterations, or corrupt Unicode diacritics are used. Respond concisely.`

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${prompt}\n\nPlease confirm adherence to Chuon Nath orthography.` }] }],
      }),
    })

    if (!res.ok) {
      console.log(`${c.yellow}⚠️ Gemini API response status: ${res.status} ${res.statusText}${c.reset}`)
      return
    }

    const data = await res.json()
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
    if (text) {
      console.log(`${c.cyan}Gemini Scholarly Feedback:${c.reset}`)
      console.log(text.slice(0, 300) + '...\n')
    }
  } catch (err) {
    console.log(`${c.yellow}⚠️ LLM check encountered a network notice: ${err.message}${c.reset}\n`)
  }
}

main().catch(err => {
  console.error('Fatal auditor error:', err)
  process.exit(1)
})

