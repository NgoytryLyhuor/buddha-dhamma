import { ref } from 'vue'

const KEY = 'bd_font_family'

const saved = localStorage.getItem(KEY)
const font = ref(saved === 'serif' ? 'serif' : 'sans')

function applyFont() {
  const html = document.documentElement
  if (font.value === 'serif') html.classList.add('font-serif')
  else html.classList.remove('font-serif')
}

applyFont()

function setFont(next) {
  font.value = next === 'serif' ? 'serif' : 'sans'
  localStorage.setItem(KEY, font.value)
  applyFont()
}

export function useFont() {
  return { font, setFont }
}
