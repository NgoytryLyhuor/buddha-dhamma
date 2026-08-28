<template>
  <div class="text-center py-16 md:py-24">
    <div class="ornament mb-6">&#9784;</div>
    <h1 class="font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">404</h1>
    <p class="font-display text-xl mt-2" :style="{ color: 'var(--ink-soft)' }">{{ khTitle }}</p>
    <p class="text-sm mt-3" :style="{ color: 'var(--ink-muted)' }">{{ msg }}</p>
    <router-link to="/" class="share-btn report mt-8" :style="{ borderColor: 'var(--accent)', color: 'var(--accent)' }">
      {{ t('ត្រឡប់ទៅទំព័រដើម', 'Back to Home') }}
    </router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()

const khTitle = computed(() => t('រកមិនឃើញទំព័រ', 'Page not found'))
const msg = computed(() => t('សូមទោស ទំព័រដែលអ្នកស្វែងរក មិនមានទេ។', 'Sorry, the page you are looking for does not exist.'))
</script>
