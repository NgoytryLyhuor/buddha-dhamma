import { ref } from 'vue'

const speaking = ref(false)
let currentUtterance = null

export function useSpeech() {

  function pickVoice(lang) {
    if (!('speechSynthesis' in window)) return null
    let voices = []
    try { voices = window.speechSynthesis.getVoices() } catch (e) { voices = [] }
    const wanted = lang.toLowerCase()
    const exact = voices.find(v => v.lang && v.lang.toLowerCase() === wanted)
    if (exact) return exact
    const prefix = wanted.split('-')[0]
    return voices.find(v => v.lang && v.lang.toLowerCase().startsWith(prefix)) || null
  }

  function stop() {
    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.cancel() } catch (e) { /* ignore */ }
    }
    speaking.value = false
    currentUtterance = null
  }

  function speak(text, lang) {
    if (!('speechSynthesis' in window)) return
    stop()
    if (!text) return
    const u = new SpeechSynthesisUtterance(text)
    u.lang = lang || 'pi'
    u.rate = 0.9
    u.pitch = 1
    const voice = pickVoice(lang || 'pi')
    if (voice) u.voice = voice
    currentUtterance = u
    u.onstart = () => { speaking.value = true }
    u.onend = () => { speaking.value = false }
    u.onerror = () => { speaking.value = false }
    window.speechSynthesis.speak(u)
  }

  function toggleSpeech(text, lang) {
    if (speaking.value) {
      stop()
    } else {
      speak(text, lang)
    }
  }

  return { speaking, speak, stop, toggleSpeech }
}
