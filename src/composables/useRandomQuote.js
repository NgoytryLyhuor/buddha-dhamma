import { ref, onBeforeUnmount } from 'vue'
import { dhammaQuotes } from '../data/dhammaQuotes'

let clearTimer = null

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

  next()

  return { quote, next, shareText }
}
