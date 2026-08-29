import { ref } from 'vue'

const theme = ref('light')

const savedTheme = localStorage.getItem('bd_dhamma_theme')
if (savedTheme === 'dark' || savedTheme === 'light') {
  theme.value = savedTheme
} else if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  theme.value = 'dark'
}

function applyTheme(t) {
  const html = document.documentElement
  if (t === 'dark') html.classList.add('dark')
  else html.classList.remove('dark')
  html.style.colorScheme = t
  const tc = document.querySelector('meta[name="theme-color"]')
  if (tc) tc.setAttribute('content', t === 'dark' ? '#1a140b' : '#f5efe0')
}

applyTheme(theme.value)

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('bd_dhamma_theme', theme.value)
  applyTheme(theme.value)
}

if (typeof window !== 'undefined' && window.matchMedia) {
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  const onChange = (e) => {
    if (localStorage.getItem('bd_dhamma_theme') === 'dark' || localStorage.getItem('bd_dhamma_theme') === 'light') return
    theme.value = e.matches ? 'dark' : 'light'
    applyTheme(theme.value)
  }
  if (mq.addEventListener) mq.addEventListener('change', onChange)
  else if (mq.addListener) mq.addListener(onChange)
}

export function getChartColors() {
  const dark = document.documentElement.classList.contains('dark')
  return {
    legend: dark ? '#d8c9a3' : '#5d4c30',
    border: dark ? '#251f16' : '#fdf7e7',
  }
}

export function useTheme() {
  return { theme, toggleTheme, getChartColors }
}