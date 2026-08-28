import { ref } from 'vue'

const KEY = 'bd_motion'

const saved = localStorage.getItem(KEY)
const motion = ref(saved === 'off' ? 'off' : 'on')

function applyMotion() {
  const html = document.documentElement
  if (motion.value === 'off') html.classList.add('motion-off')
  else html.classList.remove('motion-off')
}

applyMotion()

function setMotion(next) {
  motion.value = next === 'off' ? 'off' : 'on'
  localStorage.setItem(KEY, motion.value)
  applyMotion()
}

export function useMotion() {
  return { motion, setMotion }
}
