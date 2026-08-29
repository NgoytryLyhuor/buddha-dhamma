<template>
  <button
    class="copy-btn"
    type="button"
    :title="t('ចម្លង', 'Copy')"
    :aria-label="t('ចម្លង', 'Copy')"
    @click.stop="onCopy"
  >
    <span v-if="copied" class="copy-ok">&#10003;</span>
    <svg v-else width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
  </button>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
import { useCopy } from '../composables/useCopy'

const props = defineProps({
  text: { type: String, default: '' },
})
const { t } = useLanguage()
const { copied, copyText } = useCopy()

function onCopy() {
  copyText(props.text)
}
</script>
