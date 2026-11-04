import { ref } from 'vue'

const theme = ref('light')

if (typeof window !== 'undefined') {
  const savedTheme = localStorage.getItem('bd_dhamma_theme')
  if (savedTheme === 'dark' || savedTheme === 'light' || savedTheme === 'sepia') {
    theme.value = savedTheme
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.value = 'dark'
  }
}

function applyTheme(t) {
  if (typeof document === 'undefined') return
  const html = document.documentElement
  html.classList.remove('dark', 'sepia')
  if (t === 'dark') html.classList.add('dark')
  else if (t === 'sepia') html.classList.add('sepia')

  html.style.colorScheme = t === 'dark' ? 'dark' : 'light'
  const tc = document.querySelector('meta[name="theme-color"]')
  if (tc) {
    let color = '#f5efe0'
    if (t === 'dark') color = '#1a140b'
    else if (t === 'sepia') color = '#ebdcb9'
    tc.setAttribute('content', color)
  }
}

applyTheme(theme.value)

function setTheme(t) {
  if (t !== 'light' && t !== 'sepia' && t !== 'dark') return
  theme.value = t
  if (typeof window !== 'undefined') {
    localStorage.setItem('bd_dhamma_theme', t)
  }
  applyTheme(t)
}

function toggleTheme() {
  if (theme.value === 'light') setTheme('sepia')
  else if (theme.value === 'sepia') setTheme('dark')
  else setTheme('light')
}

if (typeof window !== 'undefined' && window.matchMedia) {
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  const onChange = (e) => {
    const s = localStorage.getItem('bd_dhamma_theme')
    if (s === 'dark' || s === 'light' || s === 'sepia') return
    theme.value = e.matches ? 'dark' : 'light'
    applyTheme(theme.value)
  }
  if (mq.addEventListener) mq.addEventListener('change', onChange)
  else if (mq.addListener) mq.addListener(onChange)
}

export function getChartColors() {
  if (typeof document === 'undefined') return { legend: '#5d4c30', border: '#fdf7e7' }
  const isDark = document.documentElement.classList.contains('dark')
  const isSepia = document.documentElement.classList.contains('sepia')
  if (isDark) return { legend: '#d8c9a3', border: '#251f16' }
  if (isSepia) return { legend: '#4b3619', border: '#f4e8cc' }
  return { legend: '#5d4c30', border: '#fdf7e7' }
}

export function useTheme() {
  return { theme, setTheme, toggleTheme, getChartColors }
}
