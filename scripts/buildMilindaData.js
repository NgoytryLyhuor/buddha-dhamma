import fs from 'fs';
import path from 'path';

const sourcePath = 'C:/Users/85596/.gemini/antigravity/brain/f0c12d5e-f814-4eb2-b964-441de715853a/.user_uploaded/media_1794478744911_aabc4ff5.txt';
let raw = fs.readFileSync(sourcePath, 'utf8').replace(/\r\n/g, '\n');

// 1. Remove trailing prompt artifacts
raw = raw.replace(/\s*please help amke pdf\s*$/i, '');

// 2. Remove AI conversational filler blocks
const fillerPatterns = [
  /ខាងលើនេះគឺជាសំណួរ និងចម្លើយលម្អិតពី បញ្ហាទី ១ ដល់ទី ២៣[^?？]*[?？]/g,
  /តើអ្នកចង់ឱ្យខ្ញុំបន្តរៀបចំសំណួរ និងចម្លើយលម្អិតពី បញ្ហាទី ៥១ ដល់ទី ៨៥[^?？]*[?？]/g,
  /យើងបានបញ្ចប់ ភាគទី ២ និងភាគទី ៣[^?？]*[?？]/g,
  /យើងបានបញ្ចប់ ភាគទី ៤៖ មេណ្ឌកប្បញ្ហា[^?？]*[?？]/g,
  /នៅសល់តែ ២៧ ឧបមាចុងក្រោយ[^?？]*[?？]/g,
  /សេចក្តីផ្ទៀងផ្ទាត់ចំនួនបញ្ហាទាំង ២៦២[\s\S]*$/g
];

for (const pat of fillerPatterns) {
  raw = raw.replace(pat, '\n');
}

// 3. Clean up mashed lines
raw = raw.replace(/([^\n])(ភាគទី [០-៩]+៖)/g, '$1\n$2');
raw = raw.replace(/([^\n])(វគ្គទី [០-៩]+៖)/g, '$1\n$2');
raw = raw.replace(/([^\n])(សំណួរ\s*\()/g, '$1\n$2');
raw = raw.replace(/([^\n])(ចម្លើយ\s*\()/g, '$1\n$2');
raw = raw.replace(/([^\n])(\(ក្រោយពីបានស្តាប់)/g, '$1\n$2');

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
const toKh = (n) => String(n).split('').map(d => khDigits[Number(d)]).join('');
const toAr = (str) => String(str).replace(/[០-៩]/g, d => khDigits.indexOf(d));

// Insert newline before sequential problem numbers 1..245
let cursor = 0;
for (let i = 1; i <= 245; i++) {
  const kh = toKh(i);
  let found = -1;
  let searchPos = cursor;
  while (true) {
    const idx = raw.indexOf(`${kh}. `, searchPos);
    if (idx === -1) break;
    const prevChar = idx > 0 ? raw[idx - 1] : '\n';
    if (!khDigits.includes(prevChar)) {
      const slice = raw.slice(idx, idx + 350);
      if (slice.includes('សំណួរ')) {
        found = idx;
        break;
      }
    }
    searchPos = idx + 1;
  }
  if (found !== -1) {
    if (found > 0 && raw[found - 1] !== '\n') {
      raw = raw.slice(0, found) + '\n' + raw.slice(found);
      cursor = found + 2;
    } else {
      cursor = found + 1;
    }
  }
}

const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);

function normalizeQuotes(str) {
  return str.replace(/'([^']+)'/g, '‘$1’');
}

function cleanPartTitle(rawLine) {
  let s = rawLine.trim();
  s = s.replace(/\s*—\s*$/, '');
  s = s.replace(/\s*\(តចប់[^)]*\)/g, '');
  s = s.replace(/\(Anumānapañha\s*—\s*/g, '(');
  s = s.replace(/\(Dhutaṅgakathā\s*—\s*/g, '(');
  s = s.replace(/\(Opammakathāpañha\s*—\s*/g, '(');
  s = s.replace('បញ្ហាទី ១៧៩ ដល់ទី ២១៨', 'បញ្ហាទី ១៧៩ ដល់ទី ២៤៥');
  return s.trim();
}

function cleanChapterTitle(rawLine) {
  let s = rawLine.trim();
  if (s.includes('វគ្គទី ៥៖ ពុទ្ធវគ្គ') && s.includes('៤៨ ដល់ទី ៥០')) {
    return 'វគ្គទី ៥៖ ពុទ្ធវគ្គ (បញ្ហាទី ៤៨ ដល់ទី ៥៧)';
  }
  if (s.includes('វគ្គទី ៥៖ ពុទ្ធវគ្គ') && s.includes('តចប់')) {
    return null;
  }
  s = s.replace(/\s*—\s*បញ្ចប់គម្ពីរមិលិន្ទប្បញ្ហា/, '');
  return s.trim();
}

// Extract similes from title or answer
function extractSimile(title, aSpeaker) {
  const m1 = title.match(/ឧបមា[^\s)—,]+/);
  if (m1) return m1[0];
  const m2 = aSpeaker.match(/ឧបមា[^\s)—,]+/);
  if (m2) return m2[0];
  return '';
}

// Extract structured sublist if answer has `១. ... ២. ...`
function parseAnswer(body) {
  const firstMatch = body.match(/^(.*?៖\s*|\s*«[^»]*?៖\s*)(១\.\s+[\s\S]+)$/);
  if (firstMatch && /២\.\s/.test(firstMatch[2])) {
    const intro = firstMatch[1].trim();
    let listPart = firstMatch[2].trim();
    let outro = '';
    const lastPeriodQuote = listPart.lastIndexOf('។ ');
    if (lastPeriodQuote !== -1) {
      const after = listPart.slice(lastPeriodQuote + 2).trim();
      if (after && !/^[០-៩]+\./.test(after)) {
        outro = after;
        listPart = listPart.slice(0, lastPeriodQuote + 1).trim();
      }
    }

    const listItems = [];
    let remaining = listPart;
    for (let n = 1; n <= 25; n++) {
      const currTag = `${toKh(n)}. `;
      const nextTag = `${toKh(n + 1)}. `;
      if (!remaining.startsWith(currTag)) break;

      const nextIdx = remaining.indexOf(nextTag, currTag.length);
      if (nextIdx !== -1) {
        let itemText = remaining.slice(currTag.length, nextIdx).trim();
        itemText = itemText.replace(/[,;]\s*និង\s*$/, '').replace(/[,;]\s*$/, '').trim();
        listItems.push({ num: toKh(n), text: itemText });
        remaining = remaining.slice(nextIdx);
      } else {
        let itemText = remaining.slice(currTag.length).trim();
        listItems.push({ num: toKh(n), text: itemText });
        remaining = '';
        break;
      }
    }

    if (listItems.length >= 2 && !remaining) {
      return {
        intro,
        listItems,
        outro,
        hasList: true
      };
    }
  }

  return {
    intro: body,
    listItems: [],
    outro: '',
    hasList: false
  };
}

const partsMeta = [
  { id: 2, titleK: 'ភាគទី ២៖ លក្ខណប្បញ្ហា', titleE: 'Part 2: Lakkhaṇapañhā (Characteristics & Non-Self)', range: 'បញ្ហាទី ១ ដល់ទី ៣៧' },
  { id: 3, titleK: 'ភាគទី ៣៖ វិមតិច្ឆេទនប្បញ្ហា', titleE: 'Part 3: Vimaticchedanapañhā (Severing Doubts)', range: 'បញ្ហាទី ៣៨ ដល់ទី ៨៥' },
  { id: 4, titleK: 'ភាគទី ៤៖ មេណ្ឌកប្បញ្ហា', titleE: 'Part 4: Meṇḍakapañhā (Apparent Contradictions Resolved)', range: 'បញ្ហាទី ៨៦ ដល់ទី ១៦៧' },
  { id: 5, titleK: 'ភាគទី ៥៖ អនុមានប្បញ្ហា', titleE: 'Part 5: Anumānapañhā (Inference of the Buddha)', range: 'បញ្ហាទី ១៦៨' },
  { id: 6, titleK: 'ភាគទី ៦៖ ធុតង្គកថា', titleE: 'Part 6: Dhutaṅgakathā (The 13 Ascetic Practices)', range: 'បញ្ហាទី ១៦៩ ដល់ទី ១៧៨' },
  { id: 7, titleK: 'ភាគទី ៧៖ ឱបម្មកថាប្បញ្ហា', titleE: 'Part 7: Opammakathāpañha (Similes & Wisdom of Nature)', range: 'បញ្ហាទី ១៧៩ ដល់ទី ២៤៥' },
];

const allProblems = [];
let currentPartObj = partsMeta[0];
let currentChapterName = 'វគ្គទី ១៖ មហាវគ្គ (បញ្ហាទី ១ ដល់ទី ១៤)';
let epilogueText = '';

let i = 0;
while (i < lines.length) {
  const line = lines[i];

  if (line.startsWith('ភាគទី')) {
    const cleaned = cleanPartTitle(line);
    const m = cleaned.match(/ភាគទី\s*([០-៩]+)/);
    if (m) {
      const pNum = Number(toAr(m[1]));
      const foundMeta = partsMeta.find(p => p.id === pNum);
      if (foundMeta) currentPartObj = foundMeta;
    }
    i++;
    continue;
  }

  if (line.startsWith('វគ្គទី')) {
    const cleaned = cleanChapterTitle(line);
    if (cleaned) {
      currentChapterName = cleaned;
    }
    i++;
    continue;
  }

  if (line.startsWith('(ក្រោយពីបានស្តាប់')) {
    epilogueText = line.replace(/^\(/, '').replace(/\)។$/, '។');
    i++;
    continue;
  }

  if (/^[០-៩]+\.\s/.test(line)) {
    const titleLine = normalizeQuotes(line);
    const qLine = normalizeQuotes(lines[i + 1] || '');
    const aLine = normalizeQuotes(lines[i + 2] || '');

    const dotIdx = titleLine.indexOf('. ');
    const numKh = titleLine.slice(0, dotIdx).trim();
    const id = Number(toAr(numKh));
    const title = titleLine.slice(dotIdx + 2).trim();

    // Speaker Q
    let qSpeaker = 'សំណួរ (ព្រះបាទមិលិន្ទ)៖';
    let qBody = qLine;
    const qColon = qLine.indexOf('៖');
    if (qColon !== -1) {
      qSpeaker = qLine.slice(0, qColon + 1).trim();
      qBody = qLine.slice(qColon + 1).trim();
    }

    // Speaker A
    let aSpeaker = 'ចម្លើយ (ព្រះនាគសេន)៖';
    let aBody = aLine;
    const aColon = aLine.indexOf('៖');
    if (aColon !== -1) {
      aSpeaker = aLine.slice(0, aColon + 1).trim();
      aBody = aLine.slice(aColon + 1).trim();
    }

    const parsedA = parseAnswer(aBody);
    const simile = extractSimile(title, aSpeaker);

    allProblems.push({
      id,
      numKh,
      title,
      partId: currentPartObj.id,
      partTitleK: currentPartObj.titleK,
      partTitleE: currentPartObj.titleE,
      chapter: currentChapterName,
      qSpeaker,
      q: qBody,
      aSpeaker,
      a: aBody,
      parsedA,
      simile
    });

    i += 3;
    continue;
  }

  i++;
}

console.log('Total extracted problems:', allProblems.length);

const outputContent = `// គម្ពីរមិលិន្ទប្បញ្ហា — ២៤៥ កម្រងមេរៀន សំណួរ–ចម្លើយ ព្រះបាទមិលិន្ទ និងព្រះនាគសេន
// Milindapañhā 245 Question-and-Answer Lessons Database

export const milindaParts = ${JSON.stringify(partsMeta, null, 2)};

export const milindaEpilogue = ${JSON.stringify(epilogueText)};

export const milindaLessons = ${JSON.stringify(allProblems, null, 2)};
`;

fs.writeFileSync('src/data/milindaQaData.js', outputContent, 'utf8');
console.log('Successfully wrote src/data/milindaQaData.js! Size:', outputContent.length, 'bytes');

