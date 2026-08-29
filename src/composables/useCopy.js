import { ref, onBeforeUnmount } from 'vue'

let clearTimer = null

export function useCopy() {
  const copied = ref(false)

  function copyText(text) {
    if (!text) return
    const done = () => {
      if (clearTimer) clearTimeout(clearTimer)
      copied.value = true
      clearTimer = setTimeout(() => { copied.value = false }, 1600)
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallback(text, done))
    } else {
      fallback(text, done)
    }
  }

  onBeforeUnmount(() => { if (clearTimer) clearTimeout(clearTimer) })

  return { copied, copyText }
}

function fallback(text, done) {
  try {
    const ta = document.createElement('textarea')
    ta.value = text
    ta.style.position = 'fixed'
    ta.style.top = '-1000px'
    ta.style.opacity = '0'
    document.body.appendChild(ta)
    ta.focus()
    ta.select()
    try { document.execCommand('copy') } catch (e) { /* ignore */ }
    document.body.removeChild(ta)
    done()
  } catch (e) { /* ignore */ }
}
