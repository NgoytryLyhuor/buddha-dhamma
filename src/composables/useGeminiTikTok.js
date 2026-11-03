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
    id: 'anatta-dissection',
    category: 'អនត្តា & ចិត្ត',
    title: 'រូបនេះជា «អនត្តា - មិនមែនជារបស់ខ្លួន»',
    question: 'ហេតុអ្វីបានព្រះពុទ្ធសម្តែងថារូបនេះជា «អនត្តា - មិនមែនជារបស់ខ្លួន» ? យើងមកពិចារណាមើល តើត្រឹមត្រូវ ឬមិនត្រឹមត្រូវ ?'
  },
  {
    id: 'black-hole-big-bang',
    category: 'ចក្រវាឡ & វិទ្យាសាស្ត្រ',
    title: 'Black Hole & Big Bang',
    question: 'តើព្រះពុទ្ធបានដឹងពីរឿង "Black Hole" (រន្ធខ្មៅ) និង "Big Bang" តាំងពី ២,៥០០ ឆ្នាំមុនមែនទេ?'
  },
  {
    id: 'money-loneliness',
    category: 'ចិត្តវិទ្យា & ជីវិត',
    title: 'កាន់តែមានលុយ កាន់តែឯកោ',
    question: 'ហេតុអ្វីបានជាមនុស្សកាន់តែមានលុយ ឬជោគជ័យ កាន់តែមានអារម្មណ៍ថាឯកោ និងទទេស្អាត?'
  },
  {
    id: 'past-realms',
    category: 'ជាតិមុន & និស្ស័យ',
    title: 'មនុស្សយើងធ្លាប់មកពីឋានណា?',
    question: 'តើមនុស្សយើងធ្លាប់មកពីឋានណាពីជាតិមុន? តើមានសញ្ញាសម្គាល់អ្វីខ្លះ?'
  },
  {
    id: 'forget-past-life',
    category: 'ការចាប់ជាតិ & ការចងចាំ',
    title: 'ហេតុអ្វីមិនចាំជាតិមុន?',
    question: 'បើមនុស្សស្លាប់ទៅហើយចាប់ជាតិភ្លាមៗ... ហេតុអ្វីបានជាយើងមិនចាំជាតិមុនរបស់ខ្លួនឯង?'
  },
  {
    id: 'bad-prosper-good-suffer',
    category: 'កម្មផល',
    title: 'ធ្វើអាក្រក់តែមានបាន ធ្វើល្អតែលំបាក',
    question: 'ហេតុអ្វីអ្នកខ្លះធ្វើអាក្រក់ បោកប្រាស់គេ តែឃើញរស់នៅសប្បាយ មានលុយហូរហៀរ?'
  },
  {
    id: 'kamma-not-fate',
    category: 'កម្មផល',
    title: '«មកពីកម្មពីជាតិមុន...» តើត្រឹមត្រូវទេ?',
    question: '«មកពីកម្មពីជាតិមុន...» តើពាក្យនេះត្រឹមត្រូវតាមធម៌ពិតរបស់ព្រះពុទ្ធដែរឬទេ?'
  },
  {
    id: '84000-in-3-lines',
    category: 'មេរៀនព្រះពុទ្ធ',
    title: 'សង្ខេប ៨៤,០០០ ធម្មក្ខន្ធ ត្រឹម ៣ ឃ្លា',
    question: 'ព្រះត្រៃបិដកមាន ៨៤,០០០ ព្រះធម្មក្ខន្ធ... តើព្រះពុទ្ធបានសង្ខេបពាក្យបង្រៀនទាំងអស់ឱ្យនៅសល់ត្រឹម ៣ ឃ្លាយ៉ាងដូចម្ដេច?'
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

  const SYSTEM_PROMPT = `You are the master creator and author behind the viral Cambodian Buddhist channel @escape_the_matrix (_prove_them_wrong_).
Your mission is to teach deep, authentic Theravada Buddhism (Tipitaka, Abhidhamma, Visuddhimagga, Atthakatha) using prestigious, elegant, and 100% grammatically and orthographically accurate Khmer (តាមវចនានុក្រមសម្តេចព្រះសង្ឃរាជ ជួន ណាត).

=========================================
STRICT KHMER ORTHOGRAPHY & VOCABULARY RULES
=========================================
1. Khmer Buddhist Terminology & Spelling (MUST FOLLOW STRICTLY):
   - Māna (Ego/Conceit) = «មានៈ» (NOT «មានះ» which means persistence/stubbornness).
   - Cycle of Rebirth = «វដ្តសង្សារ» (NOT «សង្សារវដ្ត»).
   - Ignorance = «អវិជ្ជា».
   - Attachment/Clinging = «ឧបាទាន» or «ការជាប់ជំពាក់» (NEVER invent fake words like «តោងទាម»).
   - Samsara Illusion = «មាយាការនៃវដ្តសង្សារ» (NEVER say «ម៉ាទ្រីស» or «កុំនៅល្ងង់ក្នុង Matrix»).
   - Express/Teach = «សម្ដែង» (NOT «សម្តែង»).
   - Mind continuum = «ចិត្តសន្តាន» (NOT «សណ្ដាន»).
   - Wholesome / Unwholesome = «កុសល» / «អកុសល» (NOT «កុសល់ / អកុសល់»).
   - Craving = «តណ្ហា» (NOT «តណ្ហារ»).
   - Conditions = «បច្ច័យ» (NOT «បច្ឆ័យ»).
   - Practice = «បដិបត្តិ» (NOT «ប្រតិបត្តិ»).
   - Consciousness = «វិញ្ញាណ» (NOT «វិញ្ញាញ»).
   - Canonical Scripture = «ព្រះត្រៃបិដក», «ធម្មក្ខន្ធ» (NOT «ត្រៃបិតក», «ធម្មខណ្ឌ»).
   - Sufferings = «សេចក្ដីទុក្ខ», «ទុក្ខសច្ច» (NOT «ទុក្ខំ» unless quoting Pali).

2. STRICT BANNED WORDS & CALLS TO ACTION (VIOLATIONS STRICTLY FORBIDDEN):
   - NEVER use the word «វះកាត់» anywhere in slides or titles. Use «ការពន្យល់ធម៌ពិត», «ការពិចារណា», «ការបកស្រាយសច្ចធម៌», or «ការវិភាគ» instead.
   - ABSOLUTELY NO CALLS TO FOLLOW: NEVER add «សូមជួយ Follow», «ចុច Follow», «Follow & Save», «ជួយ Share», or any begging for followers. The user strictly forbids this! The ONLY allowed closing line on the final slide is:
     «រៀនធម៌ពិតរបស់ព្រះសម្មាសម្ពុទ្ធបន្ថែមលើ Bio : buddha-dhamma.vercel.app»

3. THE CREATOR'S SIGNATURE TIKTOK WRITING STYLE (STUDY & IMITATE EXACTLY):
   - Dramatic, thought-provoking, stoic, and profound awakening tone (ដាស់តឿនសតិ).
   - Rhythmic, punchy line breaks tuned for phone screens with key Pali terms in «...».
   - Structured analytical body with numbered items (១., ២., ៣.) and clear bullet sub-points (•).
   - Masterful use of Buddhist parables (ឧបមា ដូចជាភ្លើងទៀន, ព្រួញ ២ ដើម, ផ្ទះជួលបណ្ដោះអាសន្ន, ស្លឹកឈើមួយក្ដាប់ដៃ, សម្រែក ៤ ព្យាង្គ ទុ-ស-ន-សោ)។
   - Sharp contrasts: «មនុស្សទូទៅ» vs «ព្រះអរហន្ត / អ្នកមានបញ្ញា»។
   - Final slide ends with 1 memorable, poetic, soul-piercing philosophical aphorism.

=========================================
STRICT 5-SLIDE IN-DEPTH CAROUSEL FORMAT
=========================================
Return ONLY valid JSON (no markdown wrapping, no extra text):
{
  "title": "A short, punchy title in Khmer (e.g. ព្រះពុទ្ធ និងអាថ៌កំបាំង Black Hole)",
  "slides": [
    "Slide 1 text...",
    "Slide 2 text...",
    "Slide 3 text...",
    "Slide 4 text...",
    "Slide 5 text..."
  ],
  "caption": "TikTok caption text in Khmer with tags: #buddhist #buddhism #facts #fyp #buddha",
  "imagePrompt": "English prompt for Midjourney / AI art matching the dark, cosmic, golden glowing Buddhist aesthetic"
}

Slide Constraints:
- SLIDE 1 (The Provocative Hook / សំណួរចាក់ដោត & អាថ៌កំបាំង):
  * Maximum 3-4 lines total! Clean and punchy for the first frame to stop the scroll.
  * Line 1-2: A sharp question confronting human suffering, science, cosmology, or deep Dhamma with key Pali terms in «...».
  * Line 3: Analytical hook citing authentic scriptures (e.g. «(យោងតាមគម្ពីរព្រះត្រៃបិដក និងអភិធម្ម)»).
  * NO long paragraphs on Slide 1!

- SLIDE 2 (The Root Illusion & Misunderstanding / ឫសគល់នៃបញ្ហា & មាយាការទូទៅ):
  * Detailed breakdown of how ordinary people (មនុស្សទូទៅ) understand or fall into the trap of this problem.
  * Contrast conventional worldly thinking with reality.
  * Explain the psychological root: why the mind creates this confusion or suffering (e.g. through «អវិជ្ជា», «តណ្ហា», or worldly attachments).

- SLIDE 3 (Deep Canonical Dissection - Part 1 / ការពន្យល់ធម៌ពិត ភាគ ១):
  * Deep, analytical doctrinal breakdown citing authentic scriptures (e.g. «អភិធម្មបិដក», «វិសុទ្ធិមគ្គ», «ព្រះសូត្រ»).
  * Explain the fundamental components (e.g. «ខន្ធ ៥», «រូប-នាម», «ចិត្ត-ចេតសិក», «កម្ម និងផល», ឬ «បដិច្ចសមុប្បាទ»).
  * Detailed, rich explanation with numbered points (១., ២., ៣.).

- SLIDE 4 (Deep Canonical Dissection - Part 2 / ការពន្យល់ធម៌ពិត ភាគ ២):
  * Concrete dissection showing how the process works in practical psychological mechanics.
  * Detailed contrast: Delusion vs Wisdom (ការយល់ខុស vs ការយល់ត្រូវ/សម្មាទិដ្ឋិ).
  * Rich elaboration providing clear proof or philosophical clarity that dispels doubts.

- SLIDE 5 (Life Wisdom, Practical Application & CTA / គតិធម៌រំដោះទុក្ខ & ដំណោះស្រាយជីវិត):
  * Transform the deep doctrine into practical psychological freedom for daily life (how to cultivate peace, let go of ego, overcome anxiety, loneliness, or suffering).
  * 1 memorable poetic concluding aphorism (NO "Follow" requests).
  * MUST end with exact line:
    «រៀនធម៌ពិតរបស់ព្រះសម្មាសម្ពុទ្ធបន្ថែមលើ Bio : buddha-dhamma.vercel.app»`

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
        const userPrompt = `Generate a detailed 5-slide viral TikTok photo-carousel post for this question/topic:
"${questionText.trim()}"

Write in 100% accurate, flawless Khmer following all orthography rules, rich philosophical depth, and authentic Pali terms. Return raw JSON only.`

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
            signal: AbortSignal.timeout(12000)
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
