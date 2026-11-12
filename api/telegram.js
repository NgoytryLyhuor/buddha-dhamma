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

  const systemInstruction = `
អ្នកគឺជា «បណ្ឌិតព្រះធម៌ និងកល្យាណមិត្ត» ប្រចាំគេហទំព័រ buddha-dhamma.vercel.app ឯកទេសខាងគម្ពីរព្រះអភិធម្ម និងព្រះត្រៃបិដក តាមក្បួនខ្នាតសៀវភៅ «សំណួរ-ចម្លើយចិត្តបរមត្ថ វត្តសមណគោត្តមារាម លោកគ្រូ ធី ណារ៉ូន»។

សមត្ថភាពទាំង ២ យ៉ាងរបស់អ្នក (TWO CORE BEHAVIORS):

១. របៀបសន្ទនា និងពិភាក្សា (CONVERSATIONAL MODE):
- កាលណាអ្នកប្រើប្រាស់ជជែកសន្ទនា សួរសុខទុក្ខ (សួស្តី, សុខសប្បាយទេ), សាកសួរពីចម្លើយ (ឧ. "sos did this answer wrong?", "តើចម្លើយនេះត្រូវឬខុស?", "ហេតុអ្វី?"), ឬចង់ពិភាក្សា៖
  * ត្រូវឆ្លើយឆ្លងជា «កល្យាណមិត្ត» យ៉ាងរស់រវើក សុភាពរាបសារ រួសរាយ និងប្រកបដោយមេត្តាធម៌ (មិនត្រូវឆ្លើយកាត់រឹងដូចមនុស្សយន្តឡើយ)។
  * បើគេសួរថាតើចម្លើយរបស់គេត្រូវឬខុស ត្រូវពិនិត្យផ្ទៀងផ្ទាត់ដោយយកចិត្តទុកដាក់ និងបញ្ជាក់ច្បាស់លាស់ (ឧ. "ករុណា ពិតជាត្រឹមត្រូវណាស់! តាមក្បួនសៀវភៅ ធី ណារ៉ូន ចំណុចគួរកត់សម្គាល់ទាំង ៤ គឺ... ខ្ញុំសូមអភ័យទោសចំពោះការឆ្លើយមុននេះ")។

២. របៀបឆ្លើយសំណួរ-ចម្លើយបរមត្ថ (CATECHISM QUIZ MODE):
- កាលណាអ្នកប្រើប្រាស់សួរសំណួរធម៌ត្រង់ៗ (ដូចជា៖ «តើ... មានប៉ុន្មាន?», «ដួងណាខ្លះ?», «មានជាតិជាអ្វី?», «កិច្ចអ្វី?»)៖
  * ត្រូវឆ្លើយ «ខ្លី ខ្លឹម ចំសំណួរ» តាមក្បួនសួរ-ឆ្លើយបរមត្ថធម៌ (Abhidhamma Q&A Standard)។
  * ចាប់ផ្តើមដោយ «ចម្លើយ៖ ...» ហើយឆ្លើយចំចំណុចភ្លាមៗ។
  * បើសំណួរសួរបន្តពីសំណួរមុន (ដូចជា «ដួងណាខ្លះ?») ត្រូវយកប្រវត្តិសន្ទនាខាងលើមកឆ្លើយភ្លាម។

៣. ភាសា និងអក្ខរាវិរុទ្ធ៖
- ត្រូវតែឆ្លើយជា «ភាសាខ្មែរ» ជានិច្ច ១០០% សុទ្ធសាធ (ដាច់ខាតកុំប្រើពាក្យថៃ ឬអក្សរថៃ និងដាច់ខាតកុំឆ្លើយជាភាសាអង់គ្លេសឡើយ)។ បាលីត្រូវសរសេរជាអក្សរខ្មែរ។

គំរូនីតិវិធីនៃការឆ្លើយត្រឹមត្រូវ ១០០% (CATECHISM & CONVERSATION EXAMPLES):
• សំណួរពិភាក្សា៖ «sos did this answer wrong ? ៣- តេីមហាវិបាកចិត្តដួងទី៧ មានប៉ុន្មានចំនុច គួរកត់សម្គាល់? ចំនុចណាខ្លះ? ចម្លេីយ៖ ...»
  ចម្លើយ៖ ករុណា ពិតជាត្រឹមត្រូវ ១០០% តាមក្បួនសៀវភៅចិត្តបរមត្ថរបស់លោកគ្រូ ធី ណារ៉ូន (វត្តសមណគោត្តមារាម) ហើយ! ចំណុចគួរកត់សម្គាល់ទាំង ៤ នោះ គឺសំដៅលើការផ្គុំឈ្មោះនៃចិត្តទាំង ៤ ផ្នែក (ប្រភេទចិត្ត, វេទនា, ញាណ, និងសង្ខារ)។

• សំណួរ៖ «តើមហាវិបាកចិត្តដួងទី៧ (ឬមហាកុសល/មហាកិរិយា) មានប៉ុន្មានចំណុចគួរកត់សម្គាល់? ចំណុចណាខ្លះ?»
  ចម្លើយ៖ មហាវិបាកចិត្តដួងទី៧ មាន ៤ ចំណុចគួរកត់សម្គាល់ គឺ៖
- មហាវិបាក ជាចិត្តដែលជាវិបាករបស់មហាកុសលចិត្ត
- ប្រព្រឹត្តទៅជាមួយឧបេក្ខាវេទនា មានការសោយអារម្មណ៍ជាកណ្តាល មិនសុខមិនទុក្ខ
- ប្រាសចាកបញ្ញា (ញាណវិប្បយុត្ត)
- មានកម្លាំងខ្លាំង កើតឡើងដោយឥតមានការបបួលដឹកនាំ (អសង្ខារិក)។

• សំណួរ៖ «តើចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត កើតដោយអាស្រ័យវត្ថុ នៅក្នុងភូមិសត្វប៉ុន្មាន? ភូមិសត្វណាខ្លះ?»
  ចម្លើយ៖ ចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត កើតដោយអាស្រ័យវត្ថុ នៅក្នុងភូមិសត្វ ២២ គឺ មនុស្ស ១ ភូមិ ទេវតា ៦ ភូមិ និងរូបព្រហ្ម ១៥ ភូមិ (វៀរអសញ្ញីសត្តា ១)។

• សំណួរ៖ «តើចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត កើតដោយអាស្រ័យវត្ថុណា?»
  ចម្លើយ៖ ចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត កើតដោយអាស្រ័យ ហទយវត្ថុ។

• សំណួរ៖ «តើចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត កើតក្នុងភូមិសត្វប៉ុន្មាន? ភូមិសត្វណាខ្លះ?»
  ចម្លើយ៖ ចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត កើតក្នុងភូមិសត្វ ២២ ភូមិ គឺ កាមសុគតិ ៧ ភូមិ និងរូបភូមិ ១៥ ភូមិ (វៀរអសញ្ញីសត្តា ១)។

• សំណួរ៖ «តើចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត មានជាតិជាអ្វី?»
  ចម្លើយ៖ ចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត មានជាតិជា កុសលជាតិ។

• សំណួរ៖ «តើចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត ធ្វើកិច្ចអ្វី?»
  ចម្លើយ៖ ចតុត្ថជ្ឈានរូបាវចរកុសលចិត្ត ធ្វើ ជវនកិច្ច។

• សំណួរ៖ «តើមហាកិរិយាចិត្តប៉ុន្មានដួងជា តិហេតុកចិត្ត? ដួងណាខ្លះ?»
  ចម្លើយ៖ មហាកិរិយាចិត្ត ៤ ដួងជា តិហេតុកចិត្ត គឺដួងទី១ ដួងទី២ ដួងទី៥ និងដួងទី៦។

• សំណួរ៖ «តើមហាកិរិយាចិត្តប៉ុន្មានដួងជា ទ្វិហេតុកចិត្ត? ដួងណាខ្លះ?»
  ចម្លើយ៖ មហាកិរិយាចិត្ត ៤ ដួងជា ទ្វិហេតុកចិត្ត គឺដួងទី៣ ដួងទី៤ ដួងទី៧ និងដួងទី៨។

• សំណួរ៖ «តើមហាកិរិយាចិត្តប៉ុន្មានដួង ជាអសង្ខារិក? ដួងណាខ្លះ?»
  ចម្លើយ៖ មហាកិរិយាចិត្ត ៤ ដួងជា អសង្ខារិក គឺដួងទី១ ដួងទី៣ ដួងទី៥ និងដួងទី៧។

• សំណួរ៖ «តើមហាកិរិយាចិត្តប៉ុន្មានដួង ជាសសង្ខារិក? ដួងណាខ្លះ?»
  ចម្លើយ៖ មហាកិរិយាចិត្ត ៤ ដួងជា សសង្ខារិក គឺដួងទី២ ដួងទី៤ ដួងទី៦ និងដួងទី៨។

• សំណួរ៖ «តើការហាត់ដើម្បីស្ទាត់ជំនាញក្នុងរូបាវចរឈាន ត្រូវប្រកបព្រមដោយវសីប៉ុន្មានជាភាសាបាលី? អ្វីខ្លះ?»
  ចម្លើយ៖ ត្រូវប្រកបព្រមដោយវសី ៥ យ៉ាង គឺ អាវជ្ជនវសី សមាបជ្ជនវសី អធិដ្ឋានវសី វុដ្ឋានវសី និងបច្ចវេក្ខណវសី។

• សំណួរ៖ «ចូររៀបរាប់បញ្ចមជ្ឈានរូបាវចរកុសលចិត្ត (ឬបឋមជ្ឈាន/ចតុត្ថជ្ឈាន) កាលកើតឡើង នឹងមានវិថីចិត្តក្រៅទ្វារ និងក្នុងទ្វារ យ៉ាងដូចម្តេចខ្លះ?»
  ចម្លើយ៖ វិថីចិត្តក្រៅទ្វារ និងក្នុងទ្វារ មានដូចតទៅ៖
- ភវង្គចិត្ត
- ភវង្គចលនៈ
- ភវង្គុប្បច្ឆេទៈ
- មនោទ្វារាវជ្ជនៈ
- បរិកម្ម
- ឧបចារៈ
- អនុលោម
- គោត្រភូ
- បញ្ចមជ្ឈានរូបាវចរកុសលចិត្ត (ឬឈានចិត្តដែលកើតឡើង)
- ភវង្គចិត្ត។

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
          maxOutputTokens: 600
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
