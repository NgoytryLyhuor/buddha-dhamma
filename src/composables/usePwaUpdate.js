import { ref } from 'vue'
import { registerSW } from 'virtual:pwa-register'

const needRefresh = ref(false)
let updateSW = null
let started = false

function usePwaUpdate() {
  if (!started) {
    started = true
    updateSW = registerSW({
      immediate: true,
      onRegisteredSW(swUrl) {
        console.log('Service worker registered:', swUrl)
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
    if (updateSW) updateSW(true)
  }

  return { needRefresh, reload }
}

export { usePwaUpdate }
