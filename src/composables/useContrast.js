import { ref } from 'vue'

const KEY = 'bd_contrast'

const saved = localStorage.getItem(KEY)
const contrast = ref(saved === 'on')

function applyContrast() {
  const html = document.documentElement
  if (contrast.value) html.classList.add('high-contrast')
  else html.classList.remove('high-contrast')
}

applyContrast()

function toggleContrast() {
  contrast.value = !contrast.value
  localStorage.setItem(KEY, contrast.value ? 'on' : 'off')
  applyContrast()
}

export function useContrast() {
  return { contrast, toggleContrast }
}
