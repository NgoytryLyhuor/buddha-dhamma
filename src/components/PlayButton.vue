<template>
  <button
    class="play-btn"
    type="button"
    :class="active ? 'on' : ''"
    :title="t(active ? 'ឈប់ស្តាប់' : 'ស្តាប់បន្ទូល', active ? 'Stop' : 'Listen')"
    :aria-label="t(active ? 'ឈប់ស្តាប់' : 'ស្តាប់បន្ទូល', active ? 'Stop' : 'Listen')"
    @click.stop="toggleSpeech(text, lang)"
  >
    <span v-if="active" class="play-stop" aria-hidden="true">&#9632;</span>
    <svg v-else width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
  </button>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
import { useSpeech } from '../composables/useSpeech'

const props = defineProps({
  text: { type: String, default: '' },
  lang: { type: String, default: 'pi' },
})
const { t } = useLanguage()
const { speaking, toggleSpeech } = useSpeech()

const active = speaking
</script>
