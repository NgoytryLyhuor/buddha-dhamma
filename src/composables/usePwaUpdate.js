import { ref, computed } from 'vue'
import { registerSW } from 'virtual:pwa-register'

const needRefresh = ref(false)
let updateSW = null
let started = false

// What's-new notes shown in the update toast whenever a new version is ready.
// The newest entry (index 0) is displayed. Keep entries bilingual (km / en).
const changelog = [
  {
    km: 'បន្ថែមសំណួរ-ចម្លើយចេតសិកថ្មី (មុទុតា កម្មញ្ញតា បាគុញ្ញតា ឧជុកតា វិរតិ) និងយកចេញការរាប់ថយថ្ងៃបុណ្យនៅទំព័រដើម។',
    en: 'Added new cetasika Q&A (Mudutā, Kammaññatā, Pāguññatā, Ujukatā, Virati) and removed the festival countdown from the home screen.',
  },
]

const latestNote = computed(() => (changelog.length ? changelog[0] : null))

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

  return { needRefresh, reload, latestNote }
}

export { usePwaUpdate }
