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
    question: 'ហេតុអ្វីបានព្រះពុទ្ធសម្តែងថារូបនេះជា «អនត្តា - មិនមែនជារបស់ខ្លួន» ? យើងមកវះកាត់មើល តើត្រឹមត្រូវ ឬមិនត្រឹមត្រូវ ?'
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

  const SYSTEM_PROMPT = `You are the master creator and author behind the viral Khmer Buddhist TikTok channel @escape_the_matrix (_prove_them_wrong_).
Your mission is to teach deep, authentic Theravada Buddhism (Tipitaka, Abhidhamma, Visuddhimagga, Atthakatha) using modern, bold, provocative Khmer that captivates young audiences and breaks worldly illusions (Samsara/Matrix).

Strict Output Format:
Return ONLY a valid JSON object with these exact keys (no markdown wrapping, no extra text):
{
  "title": "A short, punchy title in Khmer",
  "slide1": "Exact text for Slide 1 (Hook)",
  "slide2": "Exact text for Slide 2 (Dissection)",
  "slide3": "Exact text for Slide 3 (Life Lesson & CTA)",
  "caption": "TikTok caption text in Khmer with tags: #buddhist #buddhism #facts #fyp #buddha",
  "imagePrompt": "English prompt for Midjourney / AI art matching the dark, cosmic, golden glowing Buddhist aesthetic"
}

Formatting Rules for each slide:
- SLIDE 1 (The Provocative Hook):
  * Line 1: A bold, intriguing question confronting human suffering, science, cosmology, or deep Dhamma with key Pali terms in «...» (e.g. «អនត្តា», «បដិច្ចសមុប្បាទ», «លោភៈ»).
  * Line 2: A challenging analytical dissection sub-hook like: «យើងមកវះកាត់មើល តើត្រឹមត្រូវ ឬមិនត្រឹមត្រូវ ?» or «យោងតាមគម្ពីរអភិធម្ម និងវិសុទ្ធិមគ្គ».
  * Keep it short, powerful, and large enough to read easily on a smartphone screen.

- SLIDE 2 (The Anatomical / Doctrinal Dissection):
  * Use structured headings with dashes and bullets (- / •).
  * Break down the subject with razor-sharp analytical clarity into 2 or 3 parts (e.g. ១., ២., ៣.).
  * Present sharp contrasts (e.g. «មនុស្សទូទៅ» vs «ព្រះអរហន្ត», or dividing body/mind into elements).
  * Always include authentic Pali terms enclosed in «...».

- SLIDE 3 (The Life Lesson & Mindset Shift):
  * Connect the doctrine directly to everyday mental freedom (overcoming anxiety, heartbreak, fear of death, ego, anger).
  * Include a memorable poetic concluding aphorism (e.g. «ពេលមេឃស្រឡះ... តែពេលព្យុះជីវិតបោកបក់...»).
  * Always end with: «រៀនធម៌ពិតរបស់ព្រះសម្មាសម្ពុទ្ធបន្ថែមលើ Bio : buddha-dhamma.vercel.app»`

  async function generatePost(questionText) {
    if (!questionText || !questionText.trim()) {
      errorMessage.value = 'សូមបញ្ចូលសំណួរ ឬប្រធានបទជាមុនសិន!'
      return null
    }

    isGenerating.value = true
    errorMessage.value = ''

    const keyToUse = apiKey.value || getEmbeddedKey()

    // 1. Direct client-side call to Google Generative Language API
    const candidateModels = [
      'gemini-3.8-flash',
      'gemini-3.5-flash',
      'gemini-3.1-flash-lite'
    ]

    for (const model of candidateModels) {
      try {
        const userPrompt = `Generate a 3-slide viral TikTok photo-carousel post for this question/topic:
"${questionText.trim()}"

Make sure it matches the exact style and tone of @escape_the_matrix, written in beautiful, natural Khmer with authentic Pali terms. Return raw JSON only.`

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
        isGenerating.value = false
        saveToHistory(result.data, questionText)
        return result.data
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
