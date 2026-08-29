import { ref, shallowRef } from 'vue'

const ONESIGNAL_CDN = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js'

let started = false
let sdks = null

// OneSignal needs a real UUID app id. Guard against the placeholder.
function isConfigured(appId) {
  return !!appId && appId !== 'REPLACE_WITH_YOUR_ONESIGNAL_APP_ID'
}

function loadScript() {
  return new Promise((resolve, reject) => {
    if (window.OneSignalDeferred) return resolve()
    const s = document.createElement('script')
    s.src = ONESIGNAL_CDN
    s.async = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('Failed to load OneSignal SDK'))
    document.head.appendChild(s)
  })
}

async function initOneSignal(appId) {
  if (sdks) return sdks
  await loadScript()
  window.OneSignalDeferred = window.OneSignalDeferred || []
  await new Promise((resolve) => {
    window.OneSignalDeferred.push(async function (OneSignal) {
      await OneSignal.init({
        appId,
        serviceWorkerPath: 'push/onesignal/OneSignalSDKWorker.js',
        serviceWorkerParam: { scope: '/push/onesignal/' },
        allowLocalhostAsSecureOrigin: true,
      })
      sdks = OneSignal
      resolve()
    })
  })
  return sdks
}

function useNotifications(appId) {
  const enabled = ref(false)
  const ready = ref(false)
  const supported = ref(
    typeof window !== 'undefined'
      && 'serviceWorker' in navigator
      && 'PushManager' in window
  )
  const permissionDenied = ref(false)
  const configured = isConfigured(appId)

  async function refresh() {
    if (!configured || !supported.value) return
    try {
      const os = await initOneSignal(appId)
      const perm = await os.Notifications.permission
      ready.value = true
      enabled.value = perm === 'granted'
      permissionDenied.value = perm === 'denied'
    } catch (e) {
      console.warn('OneSignal refresh error:', e)
    }
  }

  async function enable() {
    if (!configured || !supported.value) return
    try {
      const os = await initOneSignal(appId)
      await os.Notifications.requestPermission(true)
      permissionDenied.value = false
      await refresh()
    } catch (e) {
      permissionDenied.value = true
      console.warn('OneSignal enable error:', e)
    }
  }

  async function disable() {
    if (!configured || !supported.value) return
    try {
      const os = await initOneSignal(appId)
      await os.setSubscription(false)
      enabled.value = false
    } catch (e) {
      console.warn('OneSignal disable error:', e)
    }
  }

  if (!started) {
    started = true
    refresh()
  }

  return { enabled, ready, supported, configured, permissionDenied, enable, disable, refresh }
}

export { useNotifications }
