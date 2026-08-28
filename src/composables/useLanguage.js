import { ref } from 'vue'

const lang = ref('en')

function t(km, en) {
  return en
}

function toggleLang() {
  // The site is English-only; this is kept for API compatibility.
}

export function useLanguage() {
  return { lang, t, toggleLang }
}