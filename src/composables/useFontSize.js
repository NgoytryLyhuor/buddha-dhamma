import { ref } from 'vue'

const STORAGE_KEY = 'bd_font_size'

const SIZES = [
  { label: 'A', mult: 0.92 },
  { label: 'A', mult: 1 },
  { label: 'A', mult: 1.15 },
  { label: 'A', mult: 1.32 },
]

const saved = Number(localStorage.getItem(STORAGE_KEY))
const index = ref(Number.isFinite(saved) && saved >= 0 && saved < SIZES.length ? saved : 1)

function apply() {
  document.documentElement.style.fontSize = SIZES[index.value].mult * 100 + '%'
}

apply()

function setFontSize(next) {
  if (next < 0 || next >= SIZES.length) return
  index.value = next
  localStorage.setItem(STORAGE_KEY, String(next))
  apply()
}

function increaseFontSize() {
  setFontSize(index.value + 1)
}

function decreaseFontSize() {
  setFontSize(index.value - 1)
}

export function useFontSize() {
  return { fontSizeIndex: index, SIZES, increaseFontSize, decreaseFontSize }
}
