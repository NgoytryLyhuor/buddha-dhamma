import { ref } from 'vue'

const ONESIGNAL_CDN = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js'
const STORAGE_KEY = 'bd_notif_enabled'

let sdks = null

// OneSignal needs a real UUID app id. Guard against the placeholder.
function isConfigured(appId) {
  return !!appId && appId !== 'REPLACE_WITH_YOUR_ONESIGNAL_APP_ID'
}

function isSupported() {
  return typeof window !== 'undefined'
    && 'serviceWorker' in navigator
    && 'PushManager' in window
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
        safari_web_id: 'web.onesignal.auto.4b51c712-23a7-447d-a673-6f24b07d407b',
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
  const configured = isConfigured(appId)
  const supported = ref(isSupported())

  // Persist desired state so it stays on across refreshes.
  const stored = (() => {
    try { return localStorage.getItem(STORAGE_KEY) === '1' } catch { return false }
  })()
  const enabled = ref(stored)

  const ready = ref(false)
  const permissionDenied = ref(false)

  let checking = false

  async function refresh() {
    if (!configured || !supported.value) return
    if (checking) return
    checking = true
    try {
      const os = await initOneSignal(appId)
      let granted = false
      try { granted = await os.Notifications.isPushEnabled() } catch { /* older API */ }
      if (!granted) {
        const perm = await os.Notifications.permission
        granted = perm === 'granted'
        // Objectively check the browser Permission API as a fallback
        if (!granted && navigator.permissions && navigator.permissions.query) {
          try {
            const st = await navigator.permissions.query({ name: 'notifications' })
            granted = st.state === 'granted'
          } catch { /* unsupported */ }
        }
      }
      ready.value = true
      enabled.value = granted
      permissionDenied.value = !granted && await isDenied()
      if (granted) {
        try { localStorage.setItem(STORAGE_KEY, '1') } catch { /* ignore */ }
      }
    } catch (e) {
      console.warn('OneSignal refresh error:', e)
    } finally {
      checking = false
    }
  }

  async function isDenied() {
    try {
      const perm = await sdks ? sdks.Notifications.permission : Promise.resolve('default')
      if (perm === 'denied') return true
      if (navigator.permissions && navigator.permissions.query) {
        const st = await navigator.permissions.query({ name: 'notifications' })
        return st.state === 'denied'
      }
    } catch { /* ignore */ }
    return false
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
      enabled.value = false
      console.warn('OneSignal enable error:', e)
    }
  }

  async function disable() {
    if (!configured || !supported.value) return
    try {
      const os = await initOneSignal(appId)
      await os.setSubscription(false)
      enabled.value = false
      permissionDenied.value = false
      try { localStorage.setItem(STORAGE_KEY, '0') } catch { /* ignore */ }
    } catch (e) {
      console.warn('OneSignal disable error:', e)
    }
  }

  // Run initial check and re-check when the tab regains focus (user may have
  // re-enabled permission in browser settings).
  if (isSupported()) {
    refresh()
    if (typeof window !== 'undefined') {
      window.addEventListener('focus', () => { if (configured) refresh() })
    }
  }

  return { enabled, ready, supported, configured, permissionDenied, enable, disable, refresh }
}

export { useNotifications }
