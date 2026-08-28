import { ref } from 'vue'

const theme = ref('light')

const savedTheme = localStorage.getItem('bd_dhamma_theme')
if (savedTheme === 'dark' || savedTheme === 'light') theme.value = savedTheme

function applyTheme(t) {
  const html = document.documentElement
  if (t === 'dark') html.classList.add('dark')
  else html.classList.remove('dark')
  html.style.colorScheme = t
}

applyTheme(theme.value)

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('bd_dhamma_theme', theme.value)
  applyTheme(theme.value)
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