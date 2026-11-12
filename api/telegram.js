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

async function sendTelegramMessage(token, chatId, text) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`
  const chunks = splitText(text, 3800)

  for (const chunk of chunks) {
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
  if (!str || str.length <= maxLen) return [str || '']
  const chunks = []
  let current = ''
  const lines = str.split('\n')

  for (const line of lines) {
    if ((current + '\n' + line).length > maxLen) {
      if (current) chunks.push(current)
      current = line
    } else {
      current = current ? current + '\n' + line : line
    }
  }
  if (current) chunks.push(current)
  return chunks
}

async function askGemini(apiKey, preferredModel, userQuestion) {
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

  const systemInstruction = `
អ្នកគឺជា «បណ្ឌិតព្រះធម៌ថេរវាទ» ឯកទេសខាងគម្ពីរព្រះអភិធម្ម និងព្រះត្រៃបិដក។

វិធានដាច់ខាតក្នុងការឆ្លើយ (CRITICAL ANSWERING RULES):
១. ភាសា៖ ត្រូវតែឆ្លើយជា «ភាសាខ្មែរ» ជានិច្ច ១០០% (ដាច់ខាតកុំឆ្លើយជាភាសាអង់គ្លេសឡើយ)។ បាលីត្រូវសរសេរជាអក្សរខ្មែរ។
២. ក្បួនឆ្លើយ៖ ឆ្លើយ «ខ្លី ខ្លឹម ចំសំណួរ» ដូចក្បួនសួរ-ឆ្លើយបរមត្ថធម៌ (Abhidhamma Q&A Standard)។
   - កុំបកស្រាយវែងអន្លាយ កុំរៀបរាប់រឿងរ៉ាវវែងឆ្ងាយដែលគេមិនបានសួរ។
   - បើសំណួរសួរត្រង់ណា ឆ្លើយចំត្រង់នោះភ្លាមៗ។
   - លើកលែងតែអ្នកសួរប្រើពាក្យថា «ចូរពន្យល់...», «ហេតុអ្វី...», ឬ «សូមលើកឧទាហរណ៍...» ទើបបកស្រាយលម្អិតជាចំណុចៗ។

គំរូនីតិវិធីនៃការឆ្លើយ (FEW-SHOT EXAMPLES):
• សំណួរ៖ «តើចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត មានជាតិជាអ្វី?»
  ចម្លើយ៖ «ចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត មានជាតិជា កុសលជាតិ។»

• សំណួរ៖ «តើចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត កើតដោយអាស្រ័យវត្ថុ ឬកើតដោយមិនអាស្រ័យវត្ថុ?»
  ចម្លើយ៖ «ចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត កើតដោយ អាស្រ័យវត្ថុ (គឺហទយវត្ថុ)។»

• សំណួរ៖ «តើចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត ធ្វើកិច្ចអ្វី?»
  ចម្លើយ៖ «ចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត ធ្វើ ជវនកិច្ច។»

• សំណួរ៖ «តើចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត ប្រកបជាមួយចេតសិកប៉ុន្មាន? អ្វីខ្លះ?»
  ចម្លើយ៖ «ចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត ប្រកបជាមួយចេតសិក ៣២ គឺ៖
- អញ្ញសមានាចេតសិក ១០ (វៀរវិតក្កៈ ១ វិចារៈ ១ បីតិ ១)
- សោភណសាធារណចេតសិក ១៩
- អប្បមញ្ញាចេតសិក ២
- បញ្ញា ១។»

• សំណួរ៖ «តើបដិច្ចសមុប្បាទមានប៉ុន្មានអង្គ?»
  ចម្លើយ៖ «បដិច្ចសមុប្បាទមាន ១២ អង្គ គឺ៖ អវិជ្ជា, សង្ខារ, វិញ្ញាណ, នាមរូប, សឡាយតនៈ, ផស្សៈ, វេទនា, តណ្ហា, ឧបាទាន, ភព, ជាតិ, និង ជរាមរណៈ។»

--- មូលដ្ឋានទិន្នន័យព្រះធម៌យោង (GROUND TRUTH REFERENCE) ---
${DHAMMA_KNOWLEDGE_BASE}
`

  let lastError = null

  for (const model of modelsToTry) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`

      const payload = {
        contents: [
          {
            role: 'user',
            parts: [{ text: userQuestion }]
          }
        ],
        systemInstruction: {
          parts: [{ text: systemInstruction }]
        },
        generationConfig: {
          temperature: 0.2,
          topP: 0.85,
          maxOutputTokens: 1000
        }
      }

      // Fast abort timeout to avoid Telegram 10s webhook drop
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 7500)

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

      // Command: /start (Universal, warm, polite for everyone)
      if (text === '/start' || text.startsWith('/start ')) {
        const welcomeText = `សូមស្វាគមន៍មកកាន់ Buddha Dhamma Bot! 🙏☸️

តើលោកអ្នកមានចម្ងល់ ឬសំណួរអ្វីអំពីព្រះធម៌ដែរទេ? 
សូមសរសេរសំណួរមកទីនេះបាន ខ្ញុំរីករាយនឹងជួយពន្យល់ចែករំលែកតាមគម្ពីរព្រះត្រៃបិដក និងអភិធម្ម។`

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

      // Send typing action
      await sendChatAction(token, chatId, 'typing')

      // Query Gemini
      try {
        const answer = await askGemini(apiKey, model, text)
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
