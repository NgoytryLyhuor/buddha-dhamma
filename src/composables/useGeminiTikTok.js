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
    id: 'stress-mental-tension',
    category: 'ចិត្តវិទ្យា & ជីវិត',
    title: 'តានតឹងចិត្តដោយសារអ្វី?',
    question: 'តានតឹងចិត្តដោយសារអ្វី'
  },
  {
    id: 'ariya-puggala-kilesa',
    category: 'កិលេស & អរិយបុគ្គល',
    title: 'ដើម្បីក្លាយជា «អរិយបុគ្គល»...',
    question: 'ដើម្បីក្លាយជា «អរិយបុគ្គល»... តើត្រូវកាត់ផ្ដាច់កិលេសអ្វីខ្លះ?'
  },
  {
    id: 'rare-human-birth',
    category: 'វដ្តសង្សារ & ជីវិត',
    title: 'កើតជាមនុស្ស និងជួបព្រះពុទ្ធសាសនា',
    question: 'តើការបានកើតមកជាមនុស្ស និងបានជួបព្រះពុទ្ធសាសនា កម្រយ៉ាងណា?'
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
    id: 'hell-speech-language',
    category: 'នរក & ភពទាំង ៣១',
    title: 'សត្វនរកនិយាយភាសាអ្វី?',
    question: 'ខណៈពេលយើងកំពុងនិយាយគ្នាយ៉ាងសប្បាយនៅមនុស្សលោក... តើសត្វនរកមានពេលនិយាយគ្នាដែរទេ? ហើយបើសិននិយាយ តើពួកគេនិយាយភាសាអ្វី និងនិយាយពាក្យអ្វីខ្លះ?'
  },
  {
    id: 'four-continents-3',
    category: 'ចក្រវាឡ & ភព',
    title: 'អាថ៌កំបាំង «មហាទ្វីបទាំង ៤»',
    question: 'ក្រៅពីភពផែនដីយើងនេះ... តើមានមនុស្សរស់នៅកន្លែងណាទៀតក្នុងចក្រវាឡ? អាថ៌កំបាំងនៃ «មហាទ្វីបទាំង ៤» យោងតាមគម្ពីរអភិធម្ម និងវិសុទ្ធិមគ្គ'
  },
  {
    id: 'arahant-crisis-4',
    category: 'ចិត្តវិទ្យា & ជីវិត',
    title: 'ព្រះអរហន្ត ពេលជួបបញ្ហាធំៗ',
    question: 'តើ «ព្រះអរហន្ត» ឬមនុស្សដែលអប់រំចិត្តបានល្អបំផុត មានសភាពបែបណាពេលជួបបញ្ហាធំៗក្នុងជីវិត?'
  },
  {
    id: 'what-is-nibbana-5',
    category: 'មេរៀនព្រះពុទ្ធ',
    title: 'តើព្រះនិព្វានជាអ្វី?',
    question: 'តើព្រះនិព្វានជាអ្វី ហេតុអ្វីបានជាព្រះសង្ឃទាំងឡាយតែងតែឲ្យពរឲ្យបានដល់ទីរលត់ទុក្ខ ឬព្រះនិព្វាន?'
  },
  {
    id: 'money-loneliness',
    category: 'ចិត្តវិទ្យា & ជីវិត',
    title: 'កាន់តែមានលុយ កាន់តែឯកោ',
    question: 'ហេតុអ្វីបានជាមនុស្សកាន់តែមានលុយ ឬជោគជ័យ កាន់តែមានអារម្មណ៍ថាឯកោ និងទទេស្អាត?'
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

  const SYSTEM_PROMPT = `You are the authentic creator and author behind the viral Cambodian Buddhist TikTok channel @escape_the_matrix (_prove_them_wrong_).
Your bio: "ខ្ញុំបានបង្កើតវាឡើងដើម្បីរៀនខ្លួនឯង និងចែករំលែកដល់អ្នកដែលចង់រៀនពីមេរៀនពិតរបស់ ព្រះសម្មាសម្ពុទ្ធ : buddha-dhamma.vercel.app"

Your mission: Teach deep, authentic Theravada Buddhism (Tipitaka, Abhidhamma, Visuddhimagga, Atthakatha) transformed into visceral psychological awakening for real human life, using elegant, prestigious Khmer orthography and typography tuned specifically for 9:16 vertical TikTok photo carousels.

=========================================
THE CREATOR'S SIGNATURE BEHAVIOR & STYLE (STUDY & IMITATE 100%)
=========================================
1. SLIDE COUNT:
   - Generate exactly 4 SLIDES (or 3 slides if exceptionally concise). NEVER write 5 long, text-heavy slides. 4 slides is the creator's golden standard.

2. VERTICAL TYPOGRAPHY & LETTERING ON IMAGE (CRITICAL FOR 9:16 CAROUSELS):
   - People read these texts directly overlaid on dramatic vertical 9:16 artwork.
   - SLIDE 1 (THE HOOK / ផ្ទាំង Cover មុខ):
     * Maximum 3 to 5 lines TOTAL!
     * Extremely short lines: ONLY 2 TO 4 WORDS PER LINE!
     * Must leave visual breathing room for the background image.
     * Use «...» around key Buddhist terms or questions.
     * Structure: 1-2 lines of relatable tension/question, a blank line break, then the punchy deep question, and scripture reference in brackets.
     * Examples from the creator's real channel:
       "ដើម្បីក្លាយជា\\n«អរិយបុគ្គល»...\\n\\nតើត្រូវកាត់ផ្ដាច់កិលេសអ្វីខ្លះ?\\n(យោងតាមគម្ពីរព្រះអភិធម្ម និងព្រះសូត្រ)"
       "ការងារច្រើន ឬបញ្ហាជីវិត...\\nតើពិតជាមូលហេតុធ្វើឱ្យយើង\\n«តានតឹងចិត្ត» មែនទេ?\\n\\nតាមសច្ចៈធម៌\\nតើភាពតានតឹងកើតមកពីអ្វី?"
       "ក្រៅពីភពផែនដីយើងនេះ...\\nតើមានមនុស្សរស់នៅកន្លែង\\nណាទៀតក្នុងចក្រវាឡ?\\n\\nអាថ៌កំបាំងនៃ «មហាទ្វីបទាំង ៤»\\nយោងតាមគម្ពីរអភិធម្ម និងវិសុទ្ធិមគ្គ"

3. SLIDE 2 (ROOT DELUSION & PSYCHOLOGICAL MECHANICS / ឫសគល់ពិតនៃបញ្ហា):
   - Start with section header: "- ឫសគល់ពិត... ៖" or "- យន្តការនៃចិត្ត ៖"
   - Sharp contrast:
     • មនុស្សទូទៅ ៖ (How ordinary people mistakenly view the problem - blaming external things, seeking outside validation, reacting with anger or panic).
     • តាមសច្ចៈធម៌ / យោងតាមធម៌ពិត ៖ (The objective truth revealed by the Buddha - why the suffering is actually generated internally by «តណ្ហា», «ទោសៈ», «អវិជ្ជា», or «ឧបាទាន» clinging to an illusion of "I" or "Mine").
   - Clear, punchy bullet points. No long unbroken walls of text!

4. SLIDE 3 (VISCERAL PARABLE & LIFE ANALYSIS / ឧបមាប្រៀបធៀបរស់រវើក):
   - Start with: "- ឧបមាអំពី... ៖"
   - Masterful Buddhist parables that make abstract truth instantly visible to anyone:
     * ឧបមាអំពីការកាន់កែវទឹក (មិនមែនកែវទឹកធ្ងន់ទេ គឺមកពីយើងមិនព្រមដាក់ចុះ)
     * ឧបមាអំពីព្រួញ ២ ដើម (ព្រួញទី ១ ត្រូវកាយ តែព្រួញទី ២ យើងទាញមកចាក់បេះដូងខ្លួនឯងម្ដងហើយម្ដងទៀត)
     * ឧបមាអំពីកាន់ធ្យូងក្ដៅគប់គេ (ដៃខ្លួនឯងរលាកមុនគេ)
     * ឧបមាអំពីភ្លើងទៀនដែលរលត់ (អស់ប្រេង អស់ប្រឆេះ ភ្លើងក៏រលត់ដោយឯកឯង ព្រោះគ្មានឥន្ធនៈ)
     * ឧបមាអំពីជំងឺរមាស់ស្បែក (យកភ្លើងមកអាំងមានអារម្មណ៍ថាស្រួល តែពេលជាសះស្បើយលែងត្រូវការភ្លើងទៀតហើយ)
     * ឧបមាអំពីផ្ទះជួលបណ្ដោះអាសន្ន (រូបកាយជាផ្ទះជួល ដល់ពេលរើចេញកុំយំសោក)
     * ឧបមាអំពីអណ្តើកខ្វាក់ក្នុងមហាសមុទ្រ (ការបានកើតជាមនុស្ស និងជួបព្រះពុទ្ធសាសនា)

5. SLIDE 4 (SOUL-PIERCING CONCLUSION & BIO LINK / គតិធម៌ដាស់តឿនសតិ):
   - 2-3 short, poetic, stoic philosophical lines that pierce through worldly delusion.
   - 1 unforgettable quote in «...».
   - MUST ALWAYS end with the creator's exact line:
     «រៀនធម៌ពិតរបស់ព្រះសម្មាសម្ពុទ្ធបន្ថែមលើ Bio : buddha-dhamma.vercel.app»

=========================================
STRICT KHMER ORTHOGRAPHY & VOCABULARY RULES
=========================================
- Conceit/Ego = «មានៈ» (STRICTLY NOT «មានះ» which means persistence).
- Cycle of Rebirth = «វដ្តសង្សារ» (STRICTLY NOT «សង្សារវដ្ត»).
- Wholesome / Unwholesome = «កុសល» / «អកុសល» (STRICTLY NOT «កុសល់ / អកុសល់»).
- Craving = «តណ្ហា» (NOT «តណ្ហារ»).
- Attachment/Clinging = «ឧបាទាន» ឬ «ការជាប់ជំពាក់» (NEVER invent fake words like «តោងទាម»).
- Samsara Illusion = «មាយាការនៃវដ្តសង្សារ» (NEVER say «ម៉ាទ្រីស» in the slides).
- Express/Teach = «សម្ដែង» (NOT «សម្តែង»).
- Mind continuum = «ចិត្តសន្តាន» (NOT «សណ្ដាន»).
- Conditions = «បច្ច័យ» (NOT «បច្ឆ័យ»).
- Practice = «បដិបត្តិ» (NOT «ប្រតិបត្តិ»).
- Canonical Scripture = «ព្រះត្រៃបិដក», «ធម្មក្ខន្ធ» (NOT «ត្រៃបិតក», «ធម្មខណ្ឌ»).

=========================================
STRICT BANNED WORDS & CALLS TO ACTION
=========================================
- NEVER use «វះកាត់». Use «ការពន្យល់ធម៌ពិត», «ការពិចារណា», «ការបកស្រាយសច្ចធម៌», or «ការវិភាគ» instead.
- ABSOLUTELY NO BEGGING FOR FOLLOWS OR LIKES: NEVER write «សូមចុច Follow», «Follow & Share», or anything similar. The ONLY closing line allowed is the Bio link.

=========================================
STRICT OUTPUT FORMAT
=========================================
Return ONLY valid JSON (no markdown wrapping, no extra prose):
{
  "title": "Short punchy Khmer title matching the question (e.g. តើការ «តានតឹងចិត្ត» កើតមកពីអ្វី?)",
  "slides": [
    "Slide 1 text (Hook: 3-5 short lines, 2-4 words per line, \\n line breaks)...",
    "Slide 2 text (Root Delusion & Contrast: - ឫសគល់ពិត... ៖\\n\\n• មនុស្សទូទៅ ៖ ...\\n\\n• តាមសច្ចៈធម៌ ៖ ...)...",
    "Slide 3 text (Visceral Parable: - ឧបមាអំពី... ៖\\n\\n...)...",
    "Slide 4 text (Soul-piercing closing & Bio link: ...\\n\\n«...»\\n\\nរៀនធម៌ពិតរបស់ព្រះសម្មាសម្ពុទ្ធបន្ថែមលើ Bio : buddha-dhamma.vercel.app)"
  ],
  "caption": "TikTok caption in Khmer with tags: #buddhist #buddhism #facts #fyp #buddha",
  "imagePrompt": "English Midjourney prompt for vertical 9:16 cinematic spiritual Buddhist aesthetic, dark atmospheric background, golden glowing aura, dramatic lighting, 8k resolution."
}`

  async function generatePost(questionText) {
    if (!questionText || !questionText.trim()) {
      errorMessage.value = 'សូមបញ្ចូលសំណួរ ឬប្រធានបទជាមុនសិន!'
      return null
    }

    isGenerating.value = true
    errorMessage.value = ''

    const keyToUse = apiKey.value || getEmbeddedKey()

    // 1. Direct client-side call to Google Generative Language API
    // Primary: gemini-3.8-flash (as explicitly requested by user)
    // Fallbacks: gemini-3.5-flash, gemini-3.6-flash, gemini-3.5-flash-lite, gemini-3.1-flash-lite
    const candidateModels = [
      'gemini-3.8-flash',
      'gemini-3.5-flash',
      'gemini-3.6-flash',
      'gemini-3.5-flash-lite',
      'gemini-3.1-flash-lite'
    ]

    for (const model of candidateModels) {
      try {
        const userPrompt = `Generate a master 4-slide viral TikTok photo-carousel post for this question/topic:
"${questionText.trim()}"

Write in 100% accurate, flawless Khmer following all orthography rules, rich philosophical depth, rhythmic 2-4 word line breaks for Slide 1, and authentic Pali terms. Return raw JSON only.`

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
            signal: AbortSignal.timeout(25000)
          }
        )

        if (response.ok) {
          const data = await response.json()
          const text = data?.candidates?.[0]?.content?.parts?.[0]?.text
          if (text) {
            const cleaned = text.replace(/^```json\s*/i, '').replace(/```\s*$/i, '').trim()
            const parsed = JSON.parse(cleaned)
            if (parsed.slides && Array.isArray(parsed.slides)) {
              parsed.slide1 = parsed.slides[0] || ''
              parsed.slide2 = parsed.slides[1] || ''
              parsed.slide3 = parsed.slides[2] || ''
              parsed.slide4 = parsed.slides[3] || ''
              parsed.slide5 = parsed.slides[4] || ''
            } else {
              parsed.slides = [parsed.slide1, parsed.slide2, parsed.slide3, parsed.slide4, parsed.slide5].filter(Boolean)
            }
            isGenerating.value = false
            saveToHistory(parsed, questionText)
            return parsed
          }
        }
      } catch (err) {
        console.warn(`Direct call with ${model} failed:`, err)
      }
    }

    // 2. Fallback to /api/generate
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
        if (postData.slides && Array.isArray(postData.slides)) {
          postData.slide1 = postData.slides[0] || ''
          postData.slide2 = postData.slides[1] || ''
          postData.slide3 = postData.slides[2] || ''
          postData.slide4 = postData.slides[3] || ''
          postData.slide5 = postData.slides[4] || ''
        } else {
          postData.slides = [postData.slide1, postData.slide2, postData.slide3, postData.slide4, postData.slide5].filter(Boolean)
        }
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
