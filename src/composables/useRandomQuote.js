import { ref, onBeforeUnmount } from 'vue'
import { dhammaQuotes } from '../data/dhammaQuotes'

let clearTimer = null

// Deterministic index for a given day, so the first quote of the day is stable
// (a true "quote of the day") while "Another" still swaps freely.
function dayIndex() {
  const now = new Date()
  const seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate()
  return Math.abs(seed) % dhammaQuotes.length
}

export function useRandomQuote() {
  const last = ref(-1)
  const quote = ref(null)

  function pick() {
    let i = Math.floor(Math.random() * dhammaQuotes.length)
    if (dhammaQuotes.length > 1 && i === last.value) {
      i = (i + 1) % dhammaQuotes.length
    }
    last.value = i
    return dhammaQuotes[i]
  }

  function next() {
    quote.value = pick()
  }

  function shareText() {
    const q = quote.value
    if (!q) return ''
    return `${q.en}\n${q.km}\n— ${q.source}`
  }

  onBeforeUnmount(() => { if (clearTimer) clearTimeout(clearTimer) })

  // Start with the day's quote, then let "Another" swap to a random one.
  const today = dayIndex()
  last.value = today
  quote.value = dhammaQuotes[today]

  return { quote, next, shareText }
}
