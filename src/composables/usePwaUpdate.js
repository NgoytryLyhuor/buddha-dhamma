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

function attachWorkerListeners(registration) {
  if (!registration) return

  // 1. If an update is already waiting, trigger immediately!
  if (registration.waiting) {
    needRefresh.value = true
    return
  }

  // 2. If a worker is currently installing, wait for installed state
  if (registration.installing) {
    trackInstalling(registration.installing)
  }

  // 3. Listen for future updates
  registration.addEventListener('updatefound', () => {
    if (registration.installing) {
      trackInstalling(registration.installing)
    }
  })
}

function trackInstalling(worker) {
  if (!worker) return
  worker.addEventListener('statechange', () => {
    if (worker.state === 'installed') {
      if (navigator.serviceWorker && navigator.serviceWorker.controller) {
        needRefresh.value = true
      }
    }
  })
}

function usePwaUpdate() {
  if (!started && typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    started = true
    updateSW = registerSW({
      immediate: true,
      onRegisteredSW(swUrl, registration) {
        swRegistration = registration
        if (registration) {
          attachWorkerListeners(registration)

          // Instant check upon registration
          registration.update().catch(() => {})

          // Ultra-responsive check interval (every 4 seconds)
          setInterval(() => {
            registration.update().catch(() => {})
          }, 4000)

          // Instant check on tab visibility change
          document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
              registration.update().catch(() => {})
            }
          })

          // Instant check on focus and online
          window.addEventListener('focus', () => {
            registration.update().catch(() => {})
          })
          window.addEventListener('online', () => {
            registration.update().catch(() => {})
          })
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
