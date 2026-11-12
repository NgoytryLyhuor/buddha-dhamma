import { DHAMMA_KNOWLEDGE_BASE } from './dhammaKnowledge.js'

const DEFAULT_BOT_TOKEN = Buffer.from('OTE4MzYyNzgxNzpBQUhOcUg2M3A3dzdZZk43TzVDeXM1ZndFeUtrcFNmcV9KMA==', 'base64').toString('utf-8')
const DEFAULT_GEMINI_KEY = Buffer.from('QVEuQWI4Uk42SlVtN0hsN3pDdzRKbFAxR1IxbVZ3UWhpZXYwTUFtRGpFcFBvckpod3huTkE=', 'base64').toString('utf-8')
const DEFAULT_MODEL = 'gemini-3.8-flash'
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

async function sendTelegramMessage(token, chatId, text, extra = {}) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`
  const chunks = splitText(text, 4000)

  for (const chunk of chunks) {
    try {
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: chunk,
          parse_mode: 'Markdown',
          ...extra
        })
      })
    } catch {
      // Fallback without parse_mode if markdown fails
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: chunk,
          ...extra
        })
      })
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

function splitText(str, maxLen = 4000) {
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
  const modelsToTry = [
    preferredModel,
    'gemini-3.8-flash',
    'gemini-3.5-flash',
    'gemini-flash-latest'
  ].filter((m, idx, arr) => m && arr.indexOf(m) === idx)

  const systemInstruction = `
អ្នកគឺជា «បណ្ឌិតព្រះធម៌ថេរវាទ» (Buddha Dhamma Companion) ប្រចាំគេហទំព័រ buddha-dhamma.vercel.app និង TikTok @escape_the_matrix។

ភារកិច្ចរបស់អ្នក៖
១. ពន្យល់និងឆ្លើយនូវរាល់សំណួរធម៌ទាំងអស់ ដោយផ្អែកលើគម្ពីរព្រះត្រៃបិដក (ព្រះវិន័យ ព្រះសូត្រ ព្រះអភិធម្ម) អដ្ឋកថា វិសុទ្ធិមគ្គ និងទិន្នន័យព្រះធម៌ផ្លូវការខាងក្រោម។
២. ភាសា និងអក្ខរាវិរុទ្ធ៖ ប្រើប្រាស់ភាសាខ្មែរផ្លូវការ ថ្លៃថ្នូរ ត្រឹមត្រូវ ១០០% តាមវចនានុក្រមសម្តេចព្រះសង្ឃរាជ ជួន ណាត ព្រមទាំងបាលីត្រឹមត្រូវ។ គ្មានពាក្យកម្ចីថៃ ឬអក្សរថៃឡើយ។
៣. គោលការណ៍ឆ្លើយ៖ 
   - ឆ្លើយចំចំណុច ងាយយល់ មានជម្រៅចិត្តវិទ្យាព្រះពុទ្ធសាសនាជាក់ស្តែង។
   - បំបែកជាចំណុចៗ (Bullet points) ងាយស្រួលអានលើទូរស័ព្ទ។
   - លើកយកពុទ្ធវចនៈ ឬបាលីបញ្ជាក់នៅពេលចាំបាច់។
   - បើសំណួរណាដែលមិនមានក្នុងព្រះធម៌ ឬជាការទស្សន៍ទាយរឿងលោកិយអរូបិយ ត្រូវពន្យល់ដោយមេត្តា និងតម្រង់ទៅរកសច្ចធម៌ (អរិយសច្ច ៤ ឬ ត្រៃលក្ខណ៍)។
៤. បញ្ចប់ដោយពាក្យសព្ទសាធុការ ឬពុទ្ធោវាទខ្លីដ៏មានអត្ថន័យ។

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
          temperature: 0.3,
          topP: 0.9,
          maxOutputTokens: 2048
        }
      }

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) {
        const errorText = await res.text()
        lastError = new Error(`Gemini [${model}] error [${res.status}]: ${errorText}`)
        // If 503 or 429, try next model in fallback list
        if (res.status === 503 || res.status === 429 || res.status === 404) {
          continue
        }
        throw lastError
      }

      const data = await res.json()
      const answer = data.candidates?.[0]?.content?.parts?.[0]?.text
      if (answer) {
        return answer
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

    // Setup webhook on Telegram
    if (setup !== undefined) {
      try {
        const webhookUrl = `${PRODUCTION_WEBHOOK_URL}`
        const setRes = await fetch(`https://api.telegram.org/bot${token}/setWebhook`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            url: webhookUrl,
            allowed_updates: ['message']
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

    // Check webhook info & bot identity
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
      website: 'https://buddha-dhamma.vercel.app',
      help: 'Visit /api/telegram?setup=1 to bind Telegram webhook, or /api/telegram?info=1 to view bot status.'
    })
  }

  // POST Request: Incoming Telegram Webhook update
  if (req.method === 'POST') {
    try {
      const update = req.body || {}
      const message = update.message || update.edited_message

      if (!message || !message.text) {
        return res.status(200).json({ ok: true, note: 'No text message to process' })
      }

      const chatId = message.chat.id
      const text = message.text.trim()
      const userFirstName = message.from?.first_name || 'អ្នកស្វែងរកធម៌'

      // Command: /start
      if (text === '/start' || text.startsWith('/start ')) {
        const welcomeText = `សូមនមស្ការ និងចម្រើនពរ ${userFirstName}! ☸️🙏

ខ្ញុំគឺជា **Buddha Dhamma Bot** (បណ្ណាល័យព្រះធម៌ឆ្លាតវៃ) ដែលដំណើរការដោយ **Gemini 3 Flash** នៃគេហទំព័រ [buddha-dhamma.vercel.app](https://buddha-dhamma.vercel.app)។

លោកអ្នកអាចសាកសួរនូវរាល់ចម្ងល់អំពីព្រះធម៌បានគ្រប់ពេលវេលា ដូចជា៖
• **អភិធម្មបិដក៖** ចិត្ត ៨៩/១២១, ចេតសិក ៥២, រូប ២៨, និព្វាន
• **បដិច្ចសមុប្បាទ ១២៖** ខ្សែសង្វាក់នៃទុក្ខ និងចំណុចកាត់ផ្តាច់
• **ព្រះត្រៃបិដក៖** វិន័យ, សូត្រ, អភិធម្ម, បច្ច័យ ២៤
• **ការបដិបត្តិធម៌៖** អានាបានស្សតិ, សតិបដ្ឋាន ៤, វិធីរំលត់ទុក្ខផ្លូវចិត្ត

👉 *សូមសរសេរសំណួររបស់លោកអ្នកផ្ញើមកទីនេះបានភ្លាមៗ!*`

        await sendTelegramMessage(token, chatId, welcomeText)
        return res.status(200).json({ ok: true })
      }

      // Command: /help
      if (text === '/help') {
        const helpText = `💡 **របៀបសាកសួរព្រះធម៌ជាមួយ Bot:**

លោកអ្នកអាចសួរសំណួរជាភាសាខ្មែរបានដោយសេរី ឧទាហរណ៍ដូចជា៖
១. «តើចិត្ត និងចេតសិក ខុសគ្នាយ៉ាងណា?»
២. «តើបដិច្ចសមុប្បាទមានប៉ុន្មានអង្គ ហើយកាត់ផ្តាច់ត្រង់ណា?»
៣. «តើអ្វីជាអនិច្ចំ ទុក្ខំ អនត្តា?»
៤. «តើទោសៈ និងកំហឹង កើតមកពីចេតសិកអ្វីខ្លះ?»
៥. «តើត្រូវចម្រើនមេត្តាភាវនាយ៉ាងដូចម្តេច?»

គេហទំព័រយោង៖ [buddha-dhamma.vercel.app](https://buddha-dhamma.vercel.app) 🙏`

        await sendTelegramMessage(token, chatId, helpText)
        return res.status(200).json({ ok: true })
      }

      // Command: /about
      if (text === '/about') {
        const aboutText = `☸️ **អំពី Buddha Dhamma Bot**

• Bot នេះត្រូវបានបង្កើតឡើងដើម្បីផ្តល់នូវចំណេះដឹងព្រះធម៌ពិតប្រាកដតាមគម្ពីរព្រះត្រៃបិដកថេរវាទ។
• ដំណើរការដោយ៖ **Gemini 3.8 Flash** & **Vercel Serverless (24/7)**
• ទិន្នន័យយោង៖ [buddha-dhamma.vercel.app](https://buddha-dhamma.vercel.app)
• គ្រប់គ្រងដោយ៖ សហគមន៍ Buddha Dhamma 🇰🇭`

        await sendTelegramMessage(token, chatId, aboutText)
        return res.status(200).json({ ok: true })
      }

      // Indicate typing status to Telegram user
      await sendChatAction(token, chatId, 'typing')

      // Query Gemini with canonical Dhamma grounding
      try {
        const answer = await askGemini(apiKey, model, text)
        await sendTelegramMessage(token, chatId, answer)
      } catch (geminiError) {
        console.error('Gemini error:', geminiError)
        await sendTelegramMessage(
          token,
          chatId,
          `សូមអភ័យទោស ប្រព័ន្ធកំពុងមមាញឹកបន្តិច៖ ${geminiError.message || 'សូមព្យាយាមម្តងទៀតនៅបន្តិចទៀត'}`
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
