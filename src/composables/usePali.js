import { ref } from 'vue'

const KEY = 'bd_pali'

const saved = localStorage.getItem(KEY)
const showPali = ref(saved === 'off' ? false : true)

function applyPali() {
  const html = document.documentElement
  html.setAttribute('data-pali', showPali.value ? 'on' : 'off')
}

applyPali()

function setShowPali(next) {
  showPali.value = !!next
  localStorage.setItem(KEY, showPali.value ? 'on' : 'off')
  applyPali()
}

export function usePali() {
  return { showPali, setShowPali }
}
