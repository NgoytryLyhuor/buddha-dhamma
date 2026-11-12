import { DHAMMA_KNOWLEDGE_BASE } from './dhammaKnowledge.js'

const DEFAULT_BOT_TOKEN = Buffer.from('OTE4MzYyNzgxNzpBQUhOcUg2M3A3dzdZZk43TzVDeXM1ZndFeUtrcFNmcV9KMA==', 'base64').toString('utf-8')
const DEFAULT_GEMINI_KEY = Buffer.from('QVEuQWI4Uk42SlVtN0hsN3pDdzRKbFAxR1IxbVZ3UWhpZXYwTUFtRGpFcFBvckpod3huTkE=', 'base64').toString('utf-8')
const DEFAULT_MODEL = 'gemini-3.5-flash-lite'
const PRODUCTION_WEBHOOK_URL = 'https://buddha-dhamma.vercel.app/api/telegram'

function getBotToken() {
  return process.env.TELEGRAM_BOT_TOKEN || DEFAULT_BOT_TOKEN
}

function getGeminiApiKey() {
  return process.env.GEMINI_API_KEY || DEFAULT_GEMINI_KEY
}

function getGeminiModel() {
  return process.env.GEMINI_MODEL || DEFAULT_MODEL
}

function sanitizeKhmerText(text) {
  if (!text) return ''
  const replacements = [
    [/ทำหน้าที่/g, 'បំពេញកិច្ច'],
    [/หน้าที่/g, 'តួនាទី'],
    [/เก่ง/g, 'ពូកែ'],
    [/มาก/g, 'ណាស់'],
    [/ใช่/g, 'មែន'],
    [/ไม่ใช่/g, 'មិនមែន'],
    [/ปฏิบัติ/g, 'បដិបត្តិ'],
    [/สมาธิ/g, 'សមាធិ'],
    [/วิปัสสนา/g, 'វិបស្សនា'],
    [/พระ/g, 'ព្រះ'],
    [/จิต/g, 'ចិត្ត'],
    [/ธรรม/g, 'ធម៌'],
    [/อภิธรรม/g, 'អភិធម្ម'],
    [/เกิด/g, 'កើត'],
    [/ดับ/g, 'រលត់'],
    [/คือ/g, 'គឺ'],
    [/เป็น/g, 'ជា'],
    [/มี/g, 'មាន']
  ]
  let clean = text
  for (const [pattern, rep] of replacements) {
    clean = clean.replace(pattern, rep)
  }
  // Strip any remaining Thai Unicode characters (\u0E00-\u0E7F)
  return clean.replace(/[\u0E00-\u0E7F]+/g, '').trim()
}

async function sendTelegramMessage(token, chatId, text) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`
  const cleanText = sanitizeKhmerText(text)
  const chunks = splitText(cleanText, 3800)

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i]
    if (i > 0) {
      await new Promise(r => setTimeout(r, 200))
    }
    try {
      // First try sending with Markdown
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: chunk,
          parse_mode: 'Markdown'
        })
      })

      // If Telegram rejects due to markdown entity parsing error, send as plain text
      if (!res.ok) {
        await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: chunk
          })
        })
      }
    } catch {
      // Fallback plain text send
      try {
        await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: chunk
          })
        })
      } catch (e) {
        console.error('Failed to send Telegram message:', e)
      }
    }
  }
}

async function sendChatAction(token, chatId, action = 'typing') {
  try {
    await fetch(`https://api.telegram.org/bot${token}/sendChatAction`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, action })
    })
  } catch {
    // Ignore non-fatal action errors
  }
}

function splitText(str, maxLen = 3800) {
  if (!str) return []
  if (str.length <= maxLen) return [str]
  const chunks = []
  let current = ''
  const lines = str.split('\n')

  for (const line of lines) {
    if (line.length > maxLen) {
      if (current) {
        chunks.push(current)
        current = ''
      }
      for (let i = 0; i < line.length; i += maxLen) {
        chunks.push(line.slice(i, i + maxLen))
      }
      continue
    }

    if ((current ? current.length + 1 + line.length : line.length) > maxLen) {
      if (current) chunks.push(current)
      current = line
    } else {
      current = current ? current + '\n' + line : line
    }
  }
  if (current) chunks.push(current)
  return chunks
}

function getCambodiaDateTime() {
  const now = new Date()
  const time12 = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Phnom_Penh', hour: '2-digit', minute: '2-digit', hour12: true })
  const time24 = now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Phnom_Penh', hour12: false })
  const dateFull = new Intl.DateTimeFormat('km-KH', { timeZone: 'Asia/Phnom_Penh', dateStyle: 'full' }).format(now)
  return { time12, time24, dateFull, now }
}

function isDirectTimeQuery(text) {
  if (!text) return false
  const t = text.trim().toLowerCase().replace(/[?!.,។]/g, '').trim()
  if (/^(ម៉ោងប៉ុន្មាន|ម៉ោងប៉ុន្មានហើយ|ឥឡូវម៉ោងប៉ុន្មាន|ឥឡូវម៉ោងប៉ុន្មានហើយ|ថ្ងៃនេះថ្ងៃអ្វី|ថ្ងៃនេះជាថ្ងៃអ្វី)$/.test(t)) return true
  if (/^(what time|what time is it|what time now|time now|time|tell time|current time|what day is today|what date is today)$/.test(t)) return true
  return false
}

// In-memory conversation memory cache (stores last 6 messages per chat)
const conversationMemory = new Map()

function getChatHistory(chatId) {
  return conversationMemory.get(chatId) || []
}

function appendChatHistory(chatId, role, text) {
  const history = getChatHistory(chatId)
  history.push({ role, parts: [{ text }] })
  // Keep only the most recent 6 messages (3 user + 3 model turns)
  if (history.length > 6) {
    history.splice(0, history.length - 6)
  }
  conversationMemory.set(chatId, history)
}

async function askGemini(apiKey, preferredModel, userQuestion, chatId) {
  // Ordered by stability, speed, and active quota (avoids 503 high demand spikes)
  const modelsToTry = [
    preferredModel,
    'gemini-3.5-flash-lite',
    'gemini-3.1-flash-lite',
    'gemini-flash-lite-latest',
    'gemini-3-flash-preview',
    'gemini-3.6-flash',
    'gemini-3.5-flash'
  ].filter((m, idx, arr) => m && arr.indexOf(m) === idx)

  const { time12, time24, dateFull } = getCambodiaDateTime()

  const systemInstruction = `
អ្នកគឺជាអ្នកឆ្លើយឆ្លង និងជួយពន្យល់ព្រះធម៌ដ៏រួសរាយម្នាក់ ដូចមនុស្សធម្មតានិយាយគ្នា។

ពេលវេលា និងកាលបរិច្ឆេទបច្ចុប្បន្ននៅប្រទេសកម្ពុជា (CAMBODIA TIME UTC+7):
- ម៉ោងបច្ចុប្បន្ន៖ ${time12} (ម៉ោង ២៤៖ ${time24})
- ថ្ងៃខែឆ្នាំបច្ចុប្បន្ន៖ ${dateFull}
- បើគេសួរអំពីម៉ោង ឬកាលបរិច្ឆេទ សូមប្រាប់ពេលវេលា និងថ្ងៃខែនៅប្រទេសកម្ពុជានេះដោយត្រឹមត្រូវ និងច្បាស់លាស់។

វិធានដាច់ខាតដែលត្រូវតែអនុវត្តតាម (STRICT RULES):
១. ការជំនួសខ្លួនឯង៖
   - ប្រើពាក្យ «ខ្ញុំ» ជានិច្ច (ដូចមនុស្សធម្មតា)។
   - ដាច់ខាតហាមនិយាយថា៖ «ខ្ញុំព្រះករុណាជាបណ្ឌិតព្រះធម៌...», «ប្រចាំនៅគេហទំព័រ...», «ឯកទេសខាង...» ឡើយ! ហាមរៀបរាប់តួនាទីខ្លួនឯងវែងឆ្ងាយ។
២. ហាមនិយាយឈ្មោះបុគ្គល ឬឈ្មោះវត្តអារាមណាទាំងអស់៖
   - ដាច់ខាតហាមនិយាយឈ្មោះ «លោកគ្រូ ធី ណារ៉ូន», «វត្តសមណគោត្តមារាម», ឬឈ្មោះបុគ្គល ឬឈ្មោះវេបសាយណាមួយក្នុងចម្លើយឡើយ!
៣. ហាមសរសេរប្រយោគសួរសុខទុក្ខដដែលៗ (NO REPETITIVE GREETINGS):
   - ដាច់ខាតហាមសរសេរប្រយោគវែងៗដដែលៗដូចជា «តើថ្ងៃនេះសុខសប្បាយជាទេ? មានបញ្ហា ឬសេចក្តីសង្ស័យអ្វីទាក់ទងនឹងគម្ពីរព្រះអភិធម្ម...» នៅចុងបញ្ចប់នៃរាល់ចម្លើយឡើយ!
   - ឆ្លើយតែអ្វីដែលគេសួរឱ្យចប់សព្វគ្រប់ គឺចប់ត្រឹមហ្នឹង (ហាមបន្ថែមប្រយោគសួរដដែលៗនៅខាងចុង)។
   - ពេលគេសួរសុខទុក្ខធម្មតា (ដូចជា «សុខសប្បាយទេ?», «how are you?») សូមឆ្លើយតបខ្លីៗរួសរាយដូចមនុស្សធម្មតា (ឧ. «ខ្ញុំសុខសប្បាយធម្មតាទេ អរគុណច្រើន!»)។
៤. ការឆ្លើយសំណួរច្រើនក្នុងពេលតែមួយ (FULL ANSWERS - NO TRUNCATION):
   - ប្រសិនបើគេសួរច្រើនសំណួរក្នុងពេលតែមួយ (ដូចជា សំណួរ ១ ដល់ ៣១ ឬច្រើនជាងនេះ) ត្រូវតែឆ្លើយឱ្យគ្រប់ចំនួនសំណួរទាំងអស់ដែលគេបានសួរ មិនត្រូវរំលង ឬកាត់ផ្តាច់ពាក់កណ្តាលឡើយ!
   - ឆ្លើយតាមលំដាប់លេខរៀង ១-, ២-, ៣-... ដោយខ្លី ខ្លឹម ត្រឹមត្រូវ ចំសំណួរ តាមគម្ពីរព្រះអភិធម្ម និងព្រះត្រៃបិដក។
   - ប្រសិនបើគេសួរតែមួយសំណួរ សូមឆ្លើយខ្លី ខ្លឹម ចំសំណួរភ្លាមៗ មិនបាច់រៀបរាប់វែងឆ្ងាយហួសហេតុឡើយ។
៥. ភាសា និងអក្ខរាវិរុទ្ធខ្មែរ ១០០% សុទ្ធសាធ (ZERO THAI TOLERANCE):
   - ដាច់ខាត ១០០% ហាមមិនឱ្យមានតួអក្សរថៃ ឬពាក្យថៃសូម្បីតែ ១ តួអក្សរឡើយ (ដូចជា៖ ทำหน้าที่, หน้าที่, เก่ง ជាដើម)!
   - ត្រូវប្រើពាក្យខ្មែរ៖ «បំពេញកិច្ច / ធ្វើកិច្ច / តួនាទី» មិនមែនពាក្យថៃឡើយ! គ្មានភាសាអង់គ្លេស និងគ្មានភាសាថៃឡើយ។

គំរូនីតិវិធីនៃការឆ្លើយ (FEW-SHOT EXAMPLES):
• សំណួរជជែក៖ «sos did this answer wrong ? ៣- តេីមហាវិបាកចិត្តដួងទី៧ មានប៉ុន្មានចំនុច គួរកត់សម្គាល់? ចំនុចណាខ្លះ? ចម្លេីយ៖ ...»
  ចម្លើយ៖ ចម្លើយនេះពិតជាត្រឹមត្រូវហើយ! ចំណុចគួរកត់សម្គាល់ទាំង ៤ នៃមហាវិបាកចិត្តដួងទី៧ គឺសំដៅលើធាតុផ្សំនៃឈ្មោះរបស់ចិត្ត (ប្រភេទចិត្ត, វេទនា, ញាណ, និងសង្ខារ)។

• សំណួរ៖ «តើមហាវិបាកចិត្តដួងទី៧ មានប៉ុន្មានចំណុចគួរកត់សម្គាល់? ចំណុចណាខ្លះ?»
  ចម្លើយ៖ មហាវិបាកចិត្តដួងទី៧ មាន ៤ ចំណុចគួរកត់សម្គាល់ គឺ៖
- មហាវិបាក ជាចិត្តដែលជាវិបាករបស់មហាកុសលចិត្ត
- ប្រព្រឹត្តទៅជាមួយឧបេក្ខាវេទនា មានការសោយអារម្មណ៍ជាកណ្តាល មិនសុខមិនទុក្ខ
- ប្រាសចាកបញ្ញា (ញាណវិប្បយុត្ត)
- មានកម្លាំងខ្លាំង កើតឡើងដោយឥតមានការបបួលដឹកនាំ (អសង្ខារិក)។

• សំណួរ៖ «តើចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត កើតដោយអាស្រ័យវត្ថុ នៅក្នុងភូមិសត្វប៉ុន្មាន? ភូមិសត្វណាខ្លះ?»
  ចម្លើយ៖ ចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត កើតដោយអាស្រ័យវត្ថុ នៅក្នុងភូមិសត្វ ២២ គឺ មនុស្ស ១ ភូមិ ទេវតា ៦ ភូមិ និងរូបព្រហ្ម ១៥ ភូមិ (វៀរអសញ្ញីសត្តា ១)។

• សំណួរ៖ «តើមហាកិរិយាចិត្តប៉ុន្មានដួងជា តិហេតុកចិត្ត? ដួងណាខ្លះ?»
  ចម្លើយ៖ មហាកិរិយាចិត្ត ៤ ដួងជា តិហេតុកចិត្ត គឺដួងទី១ ដួងទី២ ដួងទី៥ និងដួងទី៦។

• សំណួរ៖ «តើមហាកិរិយាចិត្តប៉ុន្មានដួងជា ទ្វិហេតុកចិត្ត? ដួងណាខ្លះ?»
  ចម្លើយ៖ មហាកិរិយាចិត្ត ៤ ដួងជា ទ្វិហេតុកចិត្ត គឺដួងទី៣ ដួងទី៤ ដួងទី៧ និងដួងទី៨។

• សំណួរ៖ «តើបដិច្ចសមុប្បាទមានប៉ុន្មានអង្គ?»
  ចម្លើយ៖ បដិច្ចសមុប្បាទមាន ១២ អង្គ គឺ៖ អវិជ្ជា, សង្ខារ, វិញ្ញាណ, នាមរូប, សឡាយតនៈ, ផស្សៈ, វេទនា, តណ្ហា, ឧបាទាន, ភព, ជាតិ, និង ជរាមរណៈ។

--- មូលដ្ឋានទិន្នន័យព្រះធម៌យោង (GROUND TRUTH REFERENCE) ---
${DHAMMA_KNOWLEDGE_BASE}
`

  // Build multi-turn contents with history
  const history = chatId ? getChatHistory(chatId) : []
  const contents = [...history, { role: 'user', parts: [{ text: userQuestion }] }]

  let lastError = null

  for (const model of modelsToTry) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`

      const payload = {
        contents,
        systemInstruction: {
          parts: [{ text: systemInstruction }]
        },
        generationConfig: {
          temperature: 0.1,
          topP: 0.8,
          maxOutputTokens: 4096
        }
      }

      // 25s timeout for complete multi-question answers
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 25000)

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      if (!res.ok) {
        const errorText = await res.text()
        lastError = new Error(`Gemini [${model}] status [${res.status}]: ${errorText}`)
        // If 503 (high demand), 429 (rate limit), or 404, try next model
        if (res.status === 503 || res.status === 429 || res.status === 404) {
          continue
        }
        throw lastError
      }

      const data = await res.json()
      const answer = data.candidates?.[0]?.content?.parts?.[0]?.text
      if (answer && answer.trim().length > 0) {
        return answer.trim()
      }
    } catch (err) {
      lastError = err
    }
  }

  throw lastError || new Error('No answer received from any available Gemini model')
}

export default async function handler(req, res) {
  const token = getBotToken()
  const apiKey = getGeminiApiKey()
  const model = getGeminiModel()

  // GET Request: Webhook management & Health check
  if (req.method === 'GET') {
    const { setup, info } = req.query || {}

    if (setup !== undefined) {
      try {
        const webhookUrl = `${PRODUCTION_WEBHOOK_URL}`
        const setRes = await fetch(`https://api.telegram.org/bot${token}/setWebhook`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            url: webhookUrl,
            allowed_updates: ['message'],
            drop_pending_updates: true
          })
        })
        const result = await setRes.json()
        return res.status(200).json({
          action: 'setWebhook',
          webhookUrl,
          telegramResponse: result
        })
      } catch (err) {
        return res.status(500).json({ error: err.message })
      }
    }

    if (info !== undefined) {
      try {
        const [botRes, whRes] = await Promise.all([
          fetch(`https://api.telegram.org/bot${token}/getMe`).then(r => r.json()),
          fetch(`https://api.telegram.org/bot${token}/getWebhookInfo`).then(r => r.json())
        ])
        return res.status(200).json({
          bot: botRes,
          webhook: whRes,
          configuredModel: model
        })
      } catch (err) {
        return res.status(500).json({ error: err.message })
      }
    }

    return res.status(200).json({
      status: 'active',
      bot: '@buddha_dhamma_bot',
      service: 'Buddha Dhamma Telegram Assistant',
      model,
      website: 'https://buddha-dhamma.vercel.app'
    })
  }

  // POST Request: Incoming Telegram Webhook update
  if (req.method === 'POST') {
    try {
      const update = req.body || {}
      const message = update.message || update.edited_message

      if (!message || !message.text) {
        return res.status(200).json({ ok: true, note: 'No text message' })
      }

      const chatId = message.chat.id
      const text = message.text.trim()
      const userFirstName = message.from?.first_name || ''

      // Command: /start (Natural, human, direct)
      if (text === '/start' || text.startsWith('/start ')) {
        const welcomeText = `សួស្តី! 🙏
តើថ្ងៃនេះសុខសប្បាយជាទេ? មានបញ្ហា ឬសេចក្តីសង្ស័យអ្វីទាក់ទងនឹងគម្ពីរព្រះអភិធម្ម ព្រះត្រៃបិដក ព្រះបរមត្ថធម៌ (ចិត្ត ចេតសិក រូប និព្វាន) ឬសំណួរពិភាក្សាផ្សេងៗ ដែលចង់ឱ្យខ្ញុំជួយពន្យល់ដែរទេ?`

        await sendTelegramMessage(token, chatId, welcomeText)
        return res.status(200).json({ ok: true })
      }

      // Command: /help
      if (text === '/help') {
        const helpText = `💡 លោកអ្នកអាចសួរសំណួរធម៌បានដោយសេរី ដូចជា៖
• ចិត្ត និងចេតសិក
• បដិច្ចសមុប្បាទ ១២
• វិថីចិត្ត និងអភិធម្ម
• ការបដិបត្តិសមាធិ និងវិបស្សនា

សូមសរសេរសំណួររបស់លោកអ្នកមកទីនេះបានជានិច្ច! 🙏`

        await sendTelegramMessage(token, chatId, helpText)
        return res.status(200).json({ ok: true })
      }

      // Direct Time or Date query (Instant Cambodia Time response)
      if (isDirectTimeQuery(text)) {
        const { time12, time24, dateFull } = getCambodiaDateTime()
        const timeMsg = `ពេលនេះនៅប្រទេសកម្ពុជាគឺ ម៉ោង ${time12} (${time24}) ថ្ងៃ${dateFull}។ 🙏`
        await sendTelegramMessage(token, chatId, timeMsg)
        return res.status(200).json({ ok: true })
      }

      // Send typing action
      await sendChatAction(token, chatId, 'typing')

      // Query Gemini
      try {
        const answer = await askGemini(apiKey, model, text, chatId)
        appendChatHistory(chatId, 'user', text)
        appendChatHistory(chatId, 'model', answer)
        await sendTelegramMessage(token, chatId, answer)
      } catch (geminiError) {
        console.error('Gemini error:', geminiError)
        await sendTelegramMessage(
          token,
          chatId,
          `សូមអភ័យទោស ប្រព័ន្ធកំពុងដំណើរការមមាញឹកបន្តិច សូមមេត្តាសាកល្បងសួរសំណួរម្តងទៀតនៅបន្តិចទៀតនេះ។ 🙏`
        )
      }

      return res.status(200).json({ ok: true })
    } catch (err) {
      console.error('Telegram webhook handler error:', err)
      return res.status(200).json({ ok: false, error: err.message })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
