import { ref, onMounted, onUnmounted } from 'vue'

const zenMode = ref(false)
const isChromeHidden = ref(false)
let lastScrollY = 0
let ticking = false

if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('bd_zen_mode')
  if (saved === 'true') {
    zenMode.value = true
  }
}

function handleScroll() {
  if (typeof window === 'undefined') return
  if (!zenMode.value) {
    if (isChromeHidden.value) isChromeHidden.value = false
    return
  }

  const currentY = Math.max(0, window.scrollY || document.documentElement.scrollTop || 0)
  const delta = currentY - lastScrollY

  if (currentY < 50) {
    // Near the very top, always show bars
    isChromeHidden.value = false
  } else if (delta > 12 && currentY > 80) {
    // Scrolling down -> hide navbar & bottom nav
    isChromeHidden.value = true
  } else if (delta < -16) {
    // Scrolling up -> reveal navbar & bottom nav
    isChromeHidden.value = false
  }

  lastScrollY = currentY
  ticking = false
}

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(handleScroll)
    ticking = true
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('scroll', onScroll, { passive: true })
}

function toggleZenMode() {
  zenMode.value = !zenMode.value
  if (typeof window !== 'undefined') {
    localStorage.setItem('bd_zen_mode', zenMode.value ? 'true' : 'false')
  }
  if (!zenMode.value) {
    isChromeHidden.value = false
  }
}

function revealChrome() {
  isChromeHidden.value = false
}

export function useZenMode() {
  return {
    zenMode,
    isChromeHidden,
    toggleZenMode,
    revealChrome,
  }
}
