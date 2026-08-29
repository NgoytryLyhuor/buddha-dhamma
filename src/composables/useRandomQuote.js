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

// How many recently-shown quotes to hold back from "Another", so the same one
// does not come back again and again. Kept comfortably below the pool size.
const RECENT = Math.min(20, Math.max(1, Math.floor(dhammaQuotes.length / 3)))

export function useRandomQuote() {
  const quote = ref(null)
  const recent = [] // most-recent indices, newest last

  function pick() {
    const pool = []
    const relax = recent.length >= dhammaQuotes.length - 1
    for (let i = 0; i < dhammaQuotes.length; i++) {
      if (relax || !recent.includes(i)) pool.push(i)
    }
    const i = pool[Math.floor(Math.random() * pool.length)]

    recent.push(i)
    if (recent.length > RECENT) recent.shift()
    return i
  }

  function next() {
    const i = pick()
    quote.value = dhammaQuotes[i]
  }

  function shareText() {
    const q = quote.value
    if (!q) return ''
    return `${q.en}\n${q.km}\n— ${q.source}`
  }

  onBeforeUnmount(() => { if (clearTimer) clearTimeout(clearTimer) })

  // Start with the day's quote; seed the recent list so "Another" never shows
  // today's quote again right away.
  const today = dayIndex()
  recent.push(today)
  quote.value = dhammaQuotes[today]

  return { quote, next, shareText }
}
