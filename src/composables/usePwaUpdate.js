import { ref } from 'vue'
import { registerSW } from 'virtual:pwa-register'

const needRefresh = ref(false)
let updateSW = null
let started = false
let swRegistration = null

function checkForUpdate() {
  if (swRegistration && typeof swRegistration.update === 'function') {
    swRegistration.update().catch(() => {})
  }
}

function usePwaUpdate() {
  if (!started) {
    started = true
    updateSW = registerSW({
      immediate: true,
      onRegisteredSW(swUrl, registration) {
        swRegistration = registration
        if (registration) {
          // 1. If an update is already waiting to activate, trigger toast immediately!
          if (registration.waiting) {
            needRefresh.value = true
          }

          // 2. Check for update immediately upon registration
          registration.update().catch(() => {})

          // 3. Fast periodic check every 10 seconds while the website is active
          setInterval(() => {
            registration.update().catch(() => {})
          }, 10000)

          // 4. Instant check when tab regains focus or visibility
          if (typeof document !== 'undefined') {
            document.addEventListener('visibilitychange', () => {
              if (document.visibilityState === 'visible') {
                registration.update().catch(() => {})
              }
            })
          }
          if (typeof window !== 'undefined') {
            window.addEventListener('focus', () => {
              registration.update().catch(() => {})
            })
            window.addEventListener('online', () => {
              registration.update().catch(() => {})
            })
          }
        }
      },
      onNeedRefresh() {
        needRefresh.value = true
      },
      onOfflineReady() {
        console.log('App ready to work offline')
      },
    })
  }

  function reload() {
    if (updateSW) {
      updateSW(true)
    } else {
      window.location.reload()
    }
  }

  return { needRefresh, reload, checkForUpdate }
}

export { usePwaUpdate, checkForUpdate }
