import { ref } from 'vue'

const lang = ref('km')

function setLang(next) {
  lang.value = next
  localStorage.setItem('bd_lang', next)
}

const savedLang = localStorage.getItem('bd_lang')
if (savedLang === 'km' || savedLang === 'en') lang.value = savedLang

function t(km, en) {
  return lang.value === 'km' ? km : en
}

function toggleLang() {
  setLang(lang.value === 'km' ? 'en' : 'km')
}

export function useLanguage() {
  return { lang, t, setLang, toggleLang }
}