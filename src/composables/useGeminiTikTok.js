import { ref } from 'vue'

const getEmbeddedKey = () => {
  try {
    return atob('QVEuQWI4Uk42S0J0ZmF0TGJtMTkyMVlvc1FNOUJUNzBINFc1aWJPTF9KSExPcDZnSDBmM0E=')
  } catch {
    return ''
  }
}

const STORAGE_KEY = 'buddha_gemini_api_key'
const SAVED_POSTS_KEY = 'buddha_tiktok_saved_posts'
const AUTH_KEY = 'buddha_studio_auth'
const STUDIO_PIN = '5503'

export const PRESET_QUESTIONS = [
  {
    id: 'sin-100-years-boat-stone',
    category: 'កម្មផល & មិលិន្ទប្បញ្ហា #៦៥',
    title: 'ធ្វើបាប ១០០ ឆ្នាំ តែបានទៅសួគ៌...',
    question: 'ធ្វើបាប ១០០ ឆ្នាំ តែនឹកឃើញបុណ្យមុនស្លាប់បានទៅឋានសួគ៌... តើច្បាប់កម្មផលយុត្តិធម៌ត្រង់ណា? ឧបមាដុំថ្ម ១០០ ដុំ និងទូក (មិលិន្ទប្បញ្ហា #៦៥)'
  },
  {
    id: 'sin-known-vs-unknown',
    category: 'កម្មផល & មិលិន្ទប្បញ្ហា #៦៦',
    title: 'ធ្វើបាបដោយ «ដឹង» vs «មិនដឹង»',
    question: 'រវាងអ្នកធ្វើបាបដោយ «ដឹង» និងអ្នកធ្វើបាបដោយ «មិនដឹង» តើមួយណាទទួលទោសបាបធ្ងន់ជាង? ឧបមាដុំដែកភ្លើង (មិលិន្ទប្បញ្ហា #៦៦)'
  },
  {
    id: 'two-arrows-arahant-pain',
    category: 'ចិត្តវិទ្យា & មិលិន្ទប្បញ្ហា #៤៣',
    title: 'ព្រះអរហន្ត ត្រូវ «ព្រួញតែ ១ ដើម»',
    question: 'ហេតុអ្វីមនុស្សទូទៅត្រូវ «ព្រួញ ២ ដើម» ពេលជួបទុក្ខ... តែព្រះអរហន្តត្រូវព្រួញតែ «១ ដើម»? (មិលិន្ទប្បញ្ហា #៤៣)'
  },
  {
    id: 'sunnakappa-alien-civilization',
    category: 'ចក្រវាឡ & សុញ្ញកប្ប',
    title: 'បច្ចេកវិទ្យាលើសផែនដី តែមិនស្គាល់ព្រះពុទ្ធ',
    question: 'តើអាចមានអារ្យធម៌ដែលមានបច្ចេកវិទ្យាទំនើបជាងផែនដី... តែមិនដែលស្គាល់ពាក្យថា «ព្រះពុទ្ធ» ដែរឬទេ? អាថ៌កំបាំងនៃ សុញ្ញកប្ប'
  },
  {
    id: 'list-10-topics',
    category: '💡 ប្រធានបទផ្ទុះ Views',
    title: 'ណែនាំ ៦-១០ ប្រធានបទផ្ទុះ Views',
    question: 'សូមជួយរាយឈ្មោះ ៦ ទៅ ១០ ប្រធានបទថ្មីៗដែលត្រូវនឹងរូបមន្តផ្ទុះ Views សម្រាប់ឱ្យខ្ញុំជ្រើសរើស'
  },
  {
    id: 'stress-mental-tension',
    category: 'ចិត្តវិទ្យា & ជីវិត',
    title: 'តានតឹងចិត្តដោយសារអ្វី?',
    question: 'តានតឹងចិត្តដោយសារអ្វី'
  },
  {
    id: 'who-causes-suffering',
    category: 'អនត្តា & ចិត្ត',
    title: 'អ្នកដទៃធ្វើឱ្យកើតទុក្ខ ឬចិត្តឯង?',
    question: 'យើងតែងតែប្រកាន់ថា អ្នកនេះ អ្នកនោះធ្វើឲ្យយើងកើតទុក្ខ... តាមសច្ចៈធម៌ តើទុក្ខកើតមកពីអ្វី?'
  },
  {
    id: 'kamma-no-doer',
    category: 'កម្មផល & អនត្តា',
    title: 'កម្មមាន អ្នកធ្វើកម្មមិនមាន',
    question: 'កម្មមាន អ្នកធ្វើកម្មមិនមាន ផលមាន អ្នកទទួលផលមិនមាន តើមានន័យដូចម្ដេច?'
  },
  {
    id: 'hell-speech-du-sa-na-so',
    category: 'នរក & កម្មផល',
    title: 'សម្រែក «ទុ-ស-ន-សោ» ក្នុងខ្ទះដែក',
    question: 'តើសត្វនរកស្តាយក្រោយនូវអ្វីដែលពួកគេបានធ្វើទេ? ហើយសម្រែក ៤ ព្យាង្គ «ទុ-ស-ន-សោ» មានអត្ថន័យដូចម្ដេច?'
  },
  {
    id: 'four-continents-3',
    category: 'ចក្រវាឡ & ភព',
    title: 'អាថ៌កំបាំង «មហាទ្វីបទាំង ៤»',
    question: 'ក្រៅពីភពផែនដីយើងនេះ... តើមានមនុស្សរស់នៅកន្លែងណាទៀតក្នុងចក្រវាឡ? អាថ៌កំបាំងនៃ «មហាទ្វីបទាំង ៤» យោងតាមគម្ពីរអភិធម្ម និងវិសុទ្ធិមគ្គ'
  },
  {
    id: 'what-is-nibbana-5',
    category: 'មេរៀនព្រះពុទ្ធ',
    title: 'តើព្រះនិព្វានជាអ្វី?',
    question: 'តើព្រះនិព្វានជាអ្វី ហេតុអ្វីបានជាព្រះសង្ឃទាំងឡាយតែងតែឲ្យពរឲ្យបានដល់ទីរលត់ទុក្ខ ឬព្រះនិព្វាន?'
  },
  {
    id: 'black-hole-big-bang',
    category: 'ចក្រវាឡ & វិទ្យាសាស្ត្រ',
    title: 'Black Hole & Big Bang',
    question: 'តើព្រះពុទ្ធបានដឹងពីរឿង "Black Hole" (រន្ធខ្មៅ) និង "Big Bang" តាំងពី ២,៥០០ ឆ្នាំមុនមែនទេ?'
  }
]

export function useGeminiTikTok() {
  const apiKey = ref(
    localStorage.getItem(STORAGE_KEY) ||
    import.meta.env.VITE_GEMINI_API_KEY ||
    getEmbeddedKey()
  )
  const isGenerating = ref(false)
  const errorMessage = ref('')
  const toastMessage = ref('')

  // Authentication State with PIN 5503
  const isAuthenticated = ref(
    sessionStorage.getItem(AUTH_KEY) === STUDIO_PIN ||
    localStorage.getItem(AUTH_KEY) === STUDIO_PIN
  )

  function verifyPin(inputPin, remember = true) {
    if ((inputPin || '').trim() === STUDIO_PIN) {
      isAuthenticated.value = true
      sessionStorage.setItem(AUTH_KEY, STUDIO_PIN)
      if (remember) {
        localStorage.setItem(AUTH_KEY, STUDIO_PIN)
      }
      setApiKey(getEmbeddedKey())
      return true
    }
    return false
  }

  function logout() {
    isAuthenticated.value = false
    sessionStorage.removeItem(AUTH_KEY)
    localStorage.removeItem(AUTH_KEY)
  }

  function setApiKey(key) {
    const k = key ? key.trim() : getEmbeddedKey()
    apiKey.value = k
    if (k && k !== getEmbeddedKey()) {
      localStorage.setItem(STORAGE_KEY, k)
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  function showToast(msg) {
    toastMessage.value = msg
    setTimeout(() => {
      toastMessage.value = ''
    }, 2500)
  }

  async function copyToClipboard(text, label = 'ចម្លងបានជោគជ័យ') {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = text
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }
      showToast(`✅ ${label}`)
    } catch (e) {
      console.error('Clipboard copy failed:', e)
      showToast('❌ បរាជ័យក្នុងការចម្លង')
    }
  }

  const SYSTEM_PROMPT = `You are the personal AI Buddhist Content Strategist, Scholar, and Ghostwriter for លីហួរ (Lyhuor), the creator behind the viral Cambodian Buddhist TikTok channel @escape_the_matrix (_prove_them_wrong_).
Bio: "ខ្ញុំបានបង្កើតវាឡើងដើម្បីរៀនខ្លួនឯង និងចែករំលែកដល់អ្នកដែលចង់រៀនពីមេរៀនពិតរបស់ ព្រះសម្មាសម្ពុទ្ធ : buddha-dhamma.vercel.app"

=========================================
THE WINNING VIRAL FORMULA (5K - 12.6K VIEWS SECRETS)
=========================================
1. IDENTITY & TONE:
   - Always address the creator respectfully and warmly as "លីហួរ" (Lyhuor).
   - Tone: Prestigious, intellectually deep, stoic, cinematic, and authoritative in Theravada Buddhist philosophy (Tipitaka, Abhidhamma, Visuddhimagga, Milindapañhā).
   - Connect ancient Dhamma directly with modern existential questions, astrophysics (universes, alien civilizations, Sunnakappa), neuroscience/psychology, and visceral suffering in daily life.

2. THE 5-SLIDE CAROUSEL STRUCTURE (EXACTLY 5 SLIDES, 3:4 RATIO):
   - SLIDE 1: ក្របមុខទាក់ទាញ (Hook Cover)
     * Maximum 3 to 5 lines total, 2 to 4 words per line, rhythmic line breaks.
     * High curiosity question starting with «តើ...», «ហេតុអ្វី...», or «បើ...».
     * Parenthetical canonical teaser that sparks intense FOMO, e.g. "(ចម្លើយពីគម្ពីរមិលិន្ទប្បញ្ហា ដែលមនុស្ស ៩៩% គិតខុស!)".
     * Dedicated Midjourney/Flux English prompt (vertical 3:4 aspect ratio, cinematic ancient Buddhist/Greek-Bactrian art, golden light, clean dark negative space for typography, no text).

   - SLIDE 2: ចម្ងល់របស់មនុស្សទូទៅ ឬចម្ងល់ព្រះបាទមិលិន្ទ (The Common Logic / The Paradox)
     * Present how ordinary people misunderstand the issue (worldly logic) OR how King Milinda questioned Ven. Nāgasena.
     * Dedicated Midjourney/Flux English prompt (3:4, dramatic cinematic portrait/scene, chiaroscuro shadows, no text).

   - SLIDE 3: ចម្លើយដ៏ភ្ញាក់ផ្អើល & ឧបមារស់រវើក (The Shocking Answer & Visceral Simile)
     * State the surprising counter-intuitive Buddhist answer.
     * Anchor it in a vivid physical simile (e.g. ឧបមាដុំដែកភ្លើង, ឧបមាដុំថ្ម ១០០ ដុំលើទូក, ឧបមាព្រួញ ២ ដើម, ឧបមាការកាន់កែវទឹក, ឧបមាអុជទៀនបន្ត).
     * Dedicated Midjourney/Flux English prompt (3:4, macro or symbolic cinematic depiction of the simile, warm glowing embers/golden boat/river, no text).

   - SLIDE 4: ហេតុផលស៊ីជម្រៅតាមក្បួនអភិធម្ម/ព្រះធម៌ (The Deep Mechanism / Real Truth)
     * Explain the psychological and canonical mechanics behind the simile (មោហៈ, អាសន្នកម្ម, ទុក្ខផ្លូវកាយ vs ទុក្ខផ្លូវចិត្ត, វដ្តសង្សារ, ច្បាប់កម្មផល).
     * Dedicated Midjourney/Flux English prompt (3:4, surreal conceptual art, glowing golden aura vs shadows, no text).

   - SLIDE 5: មេរៀនជីវិត និងសំណួរចុងបញ្ចប់ (Takeaway & CTA)
     * Piercing philosophical takeaway applied to modern life.
     * Engaging open-ended question to ignite comments (e.g. "តើអ្នកយល់យ៉ាងណាដែរចំពោះចំណុចនេះ? 👇").
     * Dedicated Midjourney/Flux English prompt (3:4, serene golden sunrise, Buddha silhouette, tranquil lotus, uplifting spiritual atmosphere, no text).

3. TIKTOK CAPTION (COPY-PASTE):
   - Hook line + short curiosity summary + emojis (🔥⚖️, 🚣‍♂️🪨, 🏹💔, 🌌🛸) + "អូសមើលដល់ចប់ 👉"
   - Viral Cambodian hashtags: #ព្រះពុទ្ធសាសនា #ទស្សនវិជ្ជាជីវិត #មិលិន្ទប្បញ្ហា #ច្បាប់កម្មផល #ចំណេះដឹងទូទៅ #អប់រំចិត្ត #buddhism #philosophy #khmercontent #fyp

4. TOPIC LISTING MODE (When asked to suggest or list topics):
   - If the user asks for ideas or "list 5 to 10 content title", output 5 to 10 structured topics:
     * Numbered list
     * ប្រធានបទ
     * ចំណងជើងក្របមុខ (Hook)
     * ខ្លឹមសារស្នូល (Core Insight & Simile)
     * Canonical reference (e.g. មិលិន្ទប្បញ្ហា #...)
     * End with: "លីហួរ អាចរើសលេខណាមួយដែលពេញចិត្ត ហើយប្រាប់ខ្ញុំមក ខ្ញុំនឹងរៀបចំអត្ថបទទាំង ៥ ស្លាយ និង Prompt រូបភាព 3:4 ជូនភ្លាម!"

5. STRICT KHMER ORTHOGRAPHY:
   - «មានៈ» (ego) not «មានះ»
   - «វដ្តសង្សារ» not «សង្សារវដ្ត»
   - «កុសល» / «អកុសល» (not «កុសល់»)
   - «តណ្ហា» (not «តណ្ហារ»)
   - «ឧបាទាន»
   - «សម្ដែង» (not «សម្តែង»)
   - «ចិត្តសន្តាន» (not «សណ្ដាន»)
   - «បច្ច័យ»
   - «បដិបត្តិ»
   - ZERO Thai characters.

=========================================
STRICT JSON OUTPUT FORMAT
=========================================
Return ONLY valid JSON (no markdown wrapping, no extra prose outside the JSON):
{
  "type": "carousel",
  "title": "Short title matching the topic",
  "intro": "លីហួរ នេះជាគម្រោងអត្ថបទសម្រាប់ TikTok Carousel ចំនួន ៥ ស្លាយ និង Prompt បង្កើតរូបភាព (ខ្នាត 3:4) ដែលរៀបចំតាមរចនាបថពន្លឺមាសនិងទស្សនវិជ្ជាបុរាណ ដើម្បីឱ្យស៊ីគ្នានឹងគណនីរបស់ លីហួរ៖",
  "slides": [
    "Slide 1 text (Hook: 3-5 short lines, 2-4 words per line, \\n line breaks)...",
    "Slide 2 text (The Common Logic / Paradox)...",
    "Slide 3 text (Visceral Parable & Answer)...",
    "Slide 4 text (Deep Abhidhamma/Truth Mechanism)...",
    "Slide 5 text (Life Takeaway & CTA)..."
  ],
  "slideTitles": [
    "ស្លាយទី ១៖ ក្របមុខទាក់ទាញ (Hook Cover)",
    "ស្លាយទី ២៖ ចម្ងល់របស់មនុស្សទូទៅ (The Common Logic)",
    "ស្លាយទី ៣៖ ចម្លើយដ៏ភ្ញាក់ផ្អើល (ឧបមា...)",
    "ស្លាយទី ៤៖ ហេតុផលស៊ីជម្រៅ (The Real Justice)",
    "ស្លាយទី ៥៖ មេរៀនជីវិត និងសំណួរចុងបញ្ចប់ (Takeaway & CTA)"
  ],
  "imagePrompts": [
    "Cinematic ancient Buddhist philosophical art, ... vertical 3:4 aspect ratio, clean dark negative space, no text",
    "Dramatic cinematic portrait ... vertical 3:4 aspect ratio, no text",
    "Symbolic cinematic art ... vertical 3:4 aspect ratio, no text",
    "Mystical Buddhist conceptual illustration ... vertical 3:4 aspect ratio, no text",
    "Serene golden sunrise ... vertical 3:4 aspect ratio, no text"
  ],
  "imagePrompt": "Primary prompt (Slide 1)",
  "caption": "TikTok caption in Khmer with emojis and tags...",
  "fullScript": "Complete formatted script text including all 5 slides, per-slide image prompts, and caption for 1-click full copy",
  "outro": "តើ លីហួរ ចង់កែសម្រួលពាក្យពេចន៍ត្រង់ស្លាយណាមួយ ឬចង់រៀបចំប្រធានបទបន្ទាប់ទៀតដែរឬទេ?",
  "topics": []
}`

  function buildFullScript(data) {
    if (data.fullScript && data.fullScript.trim().length > 100) {
      return data.fullScript.trim()
    }
    let out = ''
    if (data.intro) out += `${data.intro}\n\n`

    if (data.topics && Array.isArray(data.topics) && data.topics.length > 0 && (!data.caption || data.topics.length > 3)) {
      data.topics.forEach((t, idx) => {
        out += `${idx + 1}. ប្រធានបទ៖ ${t.title || t.hook || ''}\n`
        if (t.hook && t.hook !== t.title) out += `ចំណងជើងក្របមុខ (Hook)៖ ${t.hook}\n`
        if (t.summary) out += `ខ្លឹមសារស្នូល៖ ${t.summary}\n`
        if (t.reference) out += `(យោង៖ ${t.reference})\n`
        out += '\n'
      })
      if (data.outro) out += `${data.outro}\n`
      return out.trim()
    }

    const slides = data.slides || []
    const prompts = data.imagePrompts || []
    const titles = data.slideTitles || [
      'ស្លាយទី ១៖ ក្របមុខទាក់ទាញ (Hook Cover)',
      'ស្លាយទី ២៖ ចម្ងល់របស់មនុស្សទូទៅ (The Common Logic)',
      'ស្លាយទី ៣៖ ចម្លើយដ៏ភ្ញាក់ផ្អើល (ឧបមា)',
      'ស្លាយទី ៤៖ ហេតុផលស៊ីជម្រៅ (The Real Justice)',
      'ស្លាយទី ៥៖ មេរៀនជីវិត និងសំណួរចុងបញ្ចប់ (Takeaway & CTA)'
    ]

    slides.forEach((s, idx) => {
      out += `${titles[idx] || `ស្លាយទី ${idx + 1}`} ៖\n`
      out += `អក្សរដាក់លើរូបភាព៖\n\n${s}\n\n`
      if (prompts[idx]) {
        out += `Image Prompt (3:4):\n${prompts[idx]}\n\n`
      }
    })

    if (data.caption) {
      out += `Caption សម្រាប់ផុសលើ TikTok (Copy-Paste) ៖\n${data.caption}\n\n`
    }
    if (data.outro) {
      out += `${data.outro}\n`
    }
    return out.trim()
  }

  async function generatePost(questionText) {
    if (!questionText || !questionText.trim()) {
      errorMessage.value = 'សូមបញ្ចូលសំណួរ ឬប្រធានបទជាមុនសិន!'
      return null
    }

    isGenerating.value = true
    errorMessage.value = ''

    const keyToUse = apiKey.value || getEmbeddedKey()

    // Candidate models with primary 3.8 and robust official fallbacks
    const candidateModels = [
      'gemini-3.8-flash',
      'gemini-2.5-flash',
      'gemini-2.0-flash',
      'gemini-1.5-flash',
      'gemini-1.5-pro'
    ]

    for (const model of candidateModels) {
      try {
        const userPrompt = `You are responding directly to លីហួរ (Lyhuor) for this request:
"${questionText.trim()}"

Follow all creator guidelines:
- If asked for a post/topic: Create the 5-slide TikTok carousel with 5 dedicated 3:4 image prompts and caption.
- If asked for topic ideas: Provide 6 to 10 viral curiosity-gap titles with hook, core substance, and canonical reference.
Return strictly valid JSON only.`

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${keyToUse}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
              systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
              generationConfig: {
                temperature: 0.7,
                responseMimeType: 'application/json'
              }
            }),
            signal: AbortSignal.timeout(28000)
          }
        )

        if (response.ok) {
          const data = await response.json()
          const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
          if (text) {
            const cleaned = text.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim()
            const parsed = JSON.parse(cleaned)

            if (parsed.topics && Array.isArray(parsed.topics) && parsed.topics.length > 0) {
              if (!parsed.slides || parsed.slides.length === 0) {
                parsed.slides = parsed.topics.map((t, idx) => {
                  let s = `${idx + 1}. ${t.title || t.hook || ''}\n\n`
                  if (t.hook && t.hook !== t.title) s += `«${t.hook.replace(/^«|»$/g, '')}»\n\n`
                  if (t.summary) s += `ខ្លឹមសារស្នូល៖ ${t.summary}\n\n`
                  if (t.reference) s += `(យោង៖ ${t.reference})`
                  return s.trim()
                })
                parsed.slideTitles = parsed.topics.map((t, idx) => `ប្រធានបទទី ${idx + 1}`)
              }
            }

            if (parsed.slides && Array.isArray(parsed.slides)) {
              parsed.slide1 = parsed.slides[0] || ''
              parsed.slide2 = parsed.slides[1] || ''
              parsed.slide3 = parsed.slides[2] || ''
              parsed.slide4 = parsed.slides[3] || ''
              parsed.slide5 = parsed.slides[4] || ''
            } else {
              parsed.slides = [parsed.slide1, parsed.slide2, parsed.slide3, parsed.slide4, parsed.slide5].filter(Boolean)
            }

            if (!parsed.imagePrompts && parsed.imagePrompt) {
              parsed.imagePrompts = [parsed.imagePrompt, parsed.imagePrompt, parsed.imagePrompt, parsed.imagePrompt, parsed.imagePrompt]
            } else if (parsed.imagePrompts && Array.isArray(parsed.imagePrompts) && !parsed.imagePrompt) {
              parsed.imagePrompt = parsed.imagePrompts[0] || ''
            }

            parsed.fullScript = buildFullScript(parsed)

            isGenerating.value = false
            saveToHistory(parsed, questionText)
            return parsed
          }
        }
      } catch (err) {
        console.warn(`Direct call with ${model} failed:`, err)
      }
    }

    // Fallback to /api/generate
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: questionText.trim(),
          apiKey: keyToUse
        }),
        signal: AbortSignal.timeout(30000)
      })

      const result = await response.json()
      if (response.ok && result.success && result.data) {
        const postData = result.data
        if (postData.topics && Array.isArray(postData.topics) && postData.topics.length > 0) {
          if (!postData.slides || postData.slides.length === 0) {
            postData.slides = postData.topics.map((t, idx) => {
              let s = `${idx + 1}. ${t.title || t.hook || ''}\n\n`
              if (t.hook && t.hook !== t.title) s += `«${t.hook.replace(/^«|»$/g, '')}»\n\n`
              if (t.summary) s += `ខ្លឹមសារស្នូល៖ ${t.summary}\n\n`
              if (t.reference) s += `(យោង៖ ${t.reference})`
              return s.trim()
            })
            postData.slideTitles = postData.topics.map((t, idx) => `ប្រធានបទទី ${idx + 1}`)
          }
        }

        if (postData.slides && Array.isArray(postData.slides)) {
          postData.slide1 = postData.slides[0] || ''
          postData.slide2 = postData.slides[1] || ''
          postData.slide3 = postData.slides[2] || ''
          postData.slide4 = postData.slides[3] || ''
          postData.slide5 = postData.slides[4] || ''
        } else {
          postData.slides = [postData.slide1, postData.slide2, postData.slide3, postData.slide4, postData.slide5].filter(Boolean)
        }

        if (!postData.imagePrompts && postData.imagePrompt) {
          postData.imagePrompts = [postData.imagePrompt, postData.imagePrompt, postData.imagePrompt, postData.imagePrompt, postData.imagePrompt]
        } else if (postData.imagePrompts && Array.isArray(postData.imagePrompts) && !postData.imagePrompt) {
          postData.imagePrompt = postData.imagePrompts[0] || ''
        }

        postData.fullScript = buildFullScript(postData)

        isGenerating.value = false
        saveToHistory(postData, questionText)
        return postData
      } else {
        throw new Error(result.error || 'បរាជ័យក្នុងការបង្កើតមាតិកា')
      }
    } catch (err) {
      console.error('All generation attempts failed:', err)
      errorMessage.value =
        err.message ||
        'មិនអាចភ្ជាប់ទៅកាន់ Gemini API បានទេ។'
      isGenerating.value = false
      return null
    }
  }

  function getSavedPosts() {
    try {
      const raw = localStorage.getItem(SAVED_POSTS_KEY)
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  }

  function saveToHistory(post, originalQuestion) {
    try {
      const existing = getSavedPosts()
      const newEntry = {
        id: 'post-' + Date.now(),
        createdAt: new Date().toISOString(),
        originalQuestion,
        ...post
      }
      existing.unshift(newEntry)
      const trimmed = existing.slice(0, 50)
      localStorage.setItem(SAVED_POSTS_KEY, JSON.stringify(trimmed))
    } catch (e) {
      console.warn('Failed to save to history:', e)
    }
  }

  return {
    apiKey,
    setApiKey,
    isGenerating,
    errorMessage,
    toastMessage,
    showToast,
    copyToClipboard,
    generatePost,
    getSavedPosts,
    isAuthenticated,
    verifyPin,
    logout
  }
}
