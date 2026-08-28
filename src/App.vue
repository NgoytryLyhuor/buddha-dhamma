<template>
  <div>
    <!-- Top navigation (no sidebar — horizontal scripture header) -->
    <header class="sticky top-0 z-50" :style="{ background: 'var(--bg-nav)', borderBottom: '1px solid var(--border)' }">
      <div class="max-w-6xl mx-auto px-4 pt-3">
        <div class="flex items-center justify-between gap-3">
          <router-link to="/" class="flex items-center gap-2 group min-w-0" style="color: var(--ink)">
            <span class="text-2xl leading-none shrink-0" :style="{ color: 'var(--accent-bright)' }">&#9784;</span>
            <span class="block min-w-0">
              <span class="block truncate font-display text-lg leading-tight">{{ t('ព្រះធម៌', 'Buddha Dhamma') }}</span>
              <span class="hidden sm:block text-[9px] tracking-[0.3em] uppercase truncate" :style="{ color: 'var(--ink-faint)' }">{{ t('ពន្យល់ពាក្យព្រះសម្មាសម្ពុទ្ធ', 'The Words of the Buddha') }}</span>
            </span>
          </router-link>

          <div class="flex items-center gap-2">
            <button class="theme-btn" @click="toggleTheme" :title="t('ប្តូរផ្ទៃ', 'Toggle theme')">
              {{ theme === 'dark' ? '☽' : '☼' }}
            </button>
            <button class="theme-btn px-3 flex gap-1 items-center text-xs font-bold" @click="toggleLang">
              <span :style="{ color: lang === 'km' ? 'var(--accent)' : 'var(--ink-muted)' }">KM</span>
              <span :style="{ color: 'var(--ink-faint)' }">/</span>
              <span :style="{ color: lang === 'en' ? 'var(--accent)' : 'var(--ink-muted)' }">EN</span>
            </button>
          </div>
        </div>

        <!-- Desktop horizontal nav -->
        <nav class="desktop-nav overflow-x-auto mt-2 -mb-px">
          <div class="topnav-inner flex gap-1 text-[13px] font-bold">
            <router-link v-for="n in nav" :key="n.to" :to="n.to"
              class="px-3 py-2.5 flex items-center gap-1.5 transition hover:opacity-80"
              :style="routeMeta === n.to ? { color: 'var(--accent)' } : { color: 'var(--ink-soft)' }">
              <span :style="{ color: 'var(--accent-bright)' }">{{ n.num }}</span>{{ t(n.km, n.en) }}
            </router-link>
          </div>
          <div class="dhammascroll mt-px"></div>
        </nav>

        <!-- Mobile horizontal pill nav (scrollable, NOT bottom tabs) -->
        <nav class="mobile-nav mt-3 pb-2">
          <div class="flex gap-2 overflow-x-auto pb-1" style="-webkit-overflow-scrolling: touch">
            <router-link v-for="n in nav" :key="n.to" :to="n.to"
              class="nav-pill flex items-center gap-1.5 shrink-0"
              :class="routeMeta === n.to ? 'active' : ''">
              <span :style="{ color: 'var(--accent-bright)' }">{{ n.num }}</span>{{ t(n.kmShort, n.en) }}
            </router-link>
          </div>
        </nav>
      </div>
    </header>

    <!-- Main reading column -->
    <main class="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <router-view />
    </main>

    <footer class="max-w-4xl mx-auto px-4 pb-10 text-center">
      <div class="ornament">&#9784;</div>
      <p class="text-xs mt-3" :style="{ color: 'var(--ink-faint)' }">
        {{ t('សទ្ធា និងបញ្ញា គឺជាគូគ្មានពីរ — សិក្សាដោយគោរព បដិបត្តិដោយពិចារណា', 'Faith and wisdom go together — study with respect, practise with reflection.') }}
      </p>
      <p class="text-[10px] mt-1 tracking-widest uppercase" :style="{ color: 'var(--ink-faint)' }">Buddha Dhamma &#183; 2026</p>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from './composables/useTheme'
import { useLanguage } from './composables/useLanguage'

const route = useRoute()
const { theme, toggleTheme } = useTheme()
const { lang, t, toggleLang } = useLanguage()

const nav = [
  { to: '/', km: 'ទំព័រដើម', kmShort: 'ដើម', en: 'Home', num: '១' },
  { to: '/core', km: 'ធម៌មូលដ្ឋាន', kmShort: 'មូលដ្ឋាន', en: 'Core', num: '២' },
  { to: '/abhidhamma', km: 'អភិធម្ម', kmShort: 'អភិធម្ម', en: 'Abhidhamma', num: '៣' },
  { to: '/kamma', km: 'កម្ម និងផល', kmShort: 'កម្មផល', en: 'Kamma', num: '៤' },
  { to: '/ethics', km: 'សីល និងបារមី', kmShort: 'សីល', en: 'Ethics', num: '៥' },
  { to: '/meditation', km: 'សមាធិ', kmShort: 'សមាធិ', en: 'Meditation', num: '៦' },
  { to: '/suttas', km: 'ព្រះសូត្រ', kmShort: 'សូត្រ', en: 'Suttas', num: '៧' },
  { to: '/life', km: 'ជីវប្រវត្តិ', kmShort: 'ជីវិតព្រះពុទ្ធ', en: 'Life', num: '៨' },
  { to: '/gathas', km: 'គាថាព្រះធម៌', kmShort: 'គាថា', en: 'Gāthā', num: '៩' },
]

const routeMeta = computed(() => route.name === 'home' ? '/' : route.path)
</script>