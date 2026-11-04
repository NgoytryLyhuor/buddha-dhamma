import { ref, onMounted, onUnmounted } from 'vue'

const wakeLockEnabled = ref(false)
const isSupported = ref(false)
let wakeLockSentinel = null

if (typeof window !== 'undefined') {
  isSupported.value = 'wakeLock' in navigator
  const saved = localStorage.getItem('bd_wake_lock')
  if (saved === 'true') {
    wakeLockEnabled.value = true
  }
}

async function requestLock() {
  if (typeof navigator === 'undefined' || !('wakeLock' in navigator)) return
  try {
    wakeLockSentinel = await navigator.wakeLock.request('screen')
    wakeLockSentinel.addEventListener('release', () => {
      wakeLockSentinel = null
    })
  } catch (err) {
    console.warn('Wake Lock request failed:', err)
  }
}

async function releaseLock() {
  if (wakeLockSentinel) {
    try {
      await wakeLockSentinel.release()
    } catch (err) {
      console.warn('Wake Lock release failed:', err)
    }
    wakeLockSentinel = null
  }
}

async function setWakeLock(enabled) {
  wakeLockEnabled.value = enabled
  if (typeof window !== 'undefined') {
    localStorage.setItem('bd_wake_lock', enabled ? 'true' : 'false')
  }
  if (enabled) {
    await requestLock()
  } else {
    await releaseLock()
  }
}

async function toggleWakeLock() {
  await setWakeLock(!wakeLockEnabled.value)
}

// Re-acquire lock when user switches tabs and returns
if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', async () => {
    if (wakeLockEnabled.value && document.visibilityState === 'visible') {
      await requestLock()
    }
  })
}

// Initial activation if enabled on page load
if (wakeLockEnabled.value && typeof document !== 'undefined' && document.visibilityState === 'visible') {
  requestLock()
}

export function useWakeLock() {
  return {
    wakeLockEnabled,
    isSupported,
    setWakeLock,
    toggleWakeLock,
  }
}
