import { ref } from 'vue'

const bellInterval = ref('off')
const showMindfulToast = ref(false)
const currentQuote = ref({
  km: 'ដកដង្ហើមចូល ខ្ញុំដឹងថាចិត្តស្ងប់ • ដកដង្ហើមចេញ ខ្ញុំញញឹម',
  en: 'Breathing in, I calm body and mind; breathing out, I smile.'
})

const mindfulQuotes = [
  {
    km: 'ដកដង្ហើមចូល ខ្ញុំដឹងថាចិត្តស្ងប់ • ដកដង្ហើមចេញ ខ្ញុំញញឹម',
    en: 'Breathing in, I calm body and mind; breathing out, I smile.'
  },
  {
    km: 'ពេលនេះ ទីនេះ — ស្មារតីដឹងទាន់បច្ចុប្បន្នកាល គឺជាបរមសុខ',
    en: 'Here and now — mindfulness of the present moment brings supreme peace.'
  },
  {
    km: 'ចិត្តជាម្ចាស់ ស្មារតីជានាវា សតិជាអ្នកនាំផ្លូវជីវិត',
    en: 'The mind is chief; mindfulness is the vessel that guides your life.'
  },
  {
    km: 'បញ្ឈប់ការខ្វល់ខ្វាយមួយស្របក់ ដកដង្ហើមវែងៗដោយចិត្តមេត្តា',
    en: 'Pause all worries for a moment; take a deep, gentle breath with loving-kindness.'
  },
  {
    km: 'សេចក្តីស្ងប់ក្នុងចិត្ត គឺជាទ្រព្យសម្បត្តិដ៏ប្រសើរបំផុត',
    en: 'Inner peace is the highest and most noble treasure in existence.'
  }
]

let timerId = null
let toastTimeoutId = null

function playSingingBowlChime() {
  if (typeof window === 'undefined') return
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    if (!AudioCtx) return
    const ctx = new AudioCtx()
    const now = ctx.currentTime

    // Sacred harmonic singing bowl overtone spectrum (432Hz fundamental)
    const partials = [
      { freq: 432, gain: 0.35, decay: 4.8 },
      { freq: 864, gain: 0.16, decay: 3.8 },
      { freq: 1296, gain: 0.08, decay: 2.8 },
      { freq: 2160, gain: 0.04, decay: 1.8 }
    ]

    partials.forEach(({ freq, gain, decay }) => {
      const osc = ctx.createOscillator()
      const gainNode = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, now)

      gainNode.gain.setValueAtTime(gain, now)
      gainNode.gain.exponentialRampToValueAtTime(0.00005, now + decay)

      osc.connect(gainNode)
      gainNode.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + decay)
    })
  } catch (err) {
    console.warn('Mindfulness bell audio playback failed:', err)
  }
}

function triggerMindfulMoment() {
  // Pick random inspiring quote
  const idx = Math.floor(Math.random() * mindfulQuotes.length)
  currentQuote.value = mindfulQuotes[idx]

  playSingingBowlChime()
  showMindfulToast.value = true

  if (toastTimeoutId) clearTimeout(toastTimeoutId)
  toastTimeoutId = setTimeout(() => {
    showMindfulToast.value = false
  }, 6500)
}

function getIntervalMs(interval) {
  switch (interval) {
    case '15m': return 15 * 60 * 1000
    case '30m': return 30 * 60 * 1000
    case '60m': return 60 * 60 * 1000
    default: return 0
  }
}

function restartTimer() {
  if (timerId) {
    clearInterval(timerId)
    timerId = null
  }

  const ms = getIntervalMs(bellInterval.value)
  if (ms > 0 && typeof window !== 'undefined') {
    timerId = setInterval(() => {
      // Only ring when document is visible
      if (document.visibilityState === 'visible') {
        triggerMindfulMoment()
      }
    }, ms)
  }
}

function setBellInterval(val) {
  bellInterval.value = val
  if (typeof window !== 'undefined') {
    localStorage.setItem('bd_mindfulness_bell', val)
  }
  restartTimer()
}

function testChime() {
  triggerMindfulMoment()
}

function dismissToast() {
  showMindfulToast.value = false
  if (toastTimeoutId) clearTimeout(toastTimeoutId)
}

// Initialize from localStorage
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('bd_mindfulness_bell')
  if (saved && ['off', '15m', '30m', '60m'].includes(saved)) {
    bellInterval.value = saved
  }
  restartTimer()
}

export function useMindfulnessBell() {
  return {
    bellInterval,
    showMindfulToast,
    currentQuote,
    setBellInterval,
    testChime,
    dismissToast,
  }
}
