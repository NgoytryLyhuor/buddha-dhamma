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
            <button class="theme-btn" @click="openSearch" :title="t('ស្វែងរកក្នុងទំព័រ', 'Search the site')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><line x1="16.5" y1="16.5" x2="21" y2="21"></line></svg>
            </button>
            <button class="theme-btn px-3 flex gap-1 items-center text-xs font-bold" @click="toggleLang">
              <span :style="{ color: lang === 'km' ? 'var(--accent)' : 'var(--ink-muted)' }">KM</span>
              <span :style="{ color: 'var(--ink-faint)' }">/</span>
              <span :style="{ color: lang === 'en' ? 'var(--accent)' : 'var(--ink-muted)' }">EN</span>
            </button>
          </div>
        </div>

        <!-- Desktop horizontal nav -->
        <nav class="desktop-nav mt-2 -mb-px">
          <div class="topnav-inner flex flex-wrap items-center justify-center gap-1 text-[13px] font-bold">
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

    <!-- Search overlay -->
    <div v-if="searchOpen" class="search-overlay" @click.self="closeSearch">
      <div class="search-panel">
        <div class="flex items-center justify-between gap-3 mb-3">
          <h3 class="font-display text-lg" style="color: var(--ink)">{{ t('ស្វែងរក', 'Search') }}</h3>
          <button class="theme-btn" @click="closeSearch" :title="t('បិទ', 'Close')">&#10005;</button>
        </div>
        <input ref="searchInput" v-model="query" type="text" autocomplete="off"
          class="w-full px-3 py-2 rounded-sm outline-none"
          :placeholder="t('វាយពាក្យជាខ្មែរ ឬ អង់គ្លេស…', 'Type in Khmer or English…')"
          :style="{ background: 'var(--bg-card-2)', color: 'var(--ink)', border: '1px solid var(--border-strong)' }" />
        <p v-if="query && !results.length" class="text-xs mt-3" style="color: var(--ink-faint)">
          {{ t('រកមិនឃើញ សាកល្បងពាក្យផ្សេងទៀត', 'Nothing found — try another word.') }}
        </p>
        <div class="mt-3 max-h-80 overflow-y-auto -mr-2 pr-2 space-y-1">
          <router-link v-for="r in results" :key="r.to + r.k" :to="r.to"
            class="block px-3 py-2 rounded-sm transition hover:opacity-80" :style="{ background: 'var(--bg-card-2)' }">
            <span class="block text-sm font-bold" style="color: var(--ink)">{{ r.k }}</span>
            <span class="block text-xs" style="color: var(--ink-faint)">{{ r.e }}</span>
          </router-link>
          <p v-if="!query" class="text-xs px-3 py-2" style="color: var(--ink-faint)">
            {{ t('វាយពាក្យមួយចំនួន ដើម្បីរកទំព័រ', 'Type a few letters to find a page.') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Scroll to top -->
    <button v-if="showScrollTop"
      class="scroll-top-btn" @click="scrollToTop"
      :title="t('ត្រឡប់ទៅកំពូល', 'Back to top')"
      :aria-label="t('ត្រឡប់ទៅកំពូល', 'Back to top')">
      &#8593;
    </button>

    <!-- Main reading column -->
    <main class="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <router-view />
    </main>

    <footer class="max-w-4xl mx-auto px-4 pb-10 text-center">
      <div class="footer-share">
        <p class="text-xs font-bold tracking-widest uppercase mb-3" style="color: var(--ink-faint)">
          {{ t('ចែករំលែក និង ផ្តល់យោបល់', 'Share and Give Feedback') }}
        </p>
        <div class="flex items-center justify-center gap-3 flex-wrap">
          <a class="share-btn" :href="shareTelegram" target="_blank" rel="noopener">Telegram</a>
          <a class="share-btn" :href="shareWhatsApp" target="_blank" rel="noopener">WhatsApp</a>
          <a class="share-btn" :href="reportUrl" target="_blank" rel="noopener" style="border-color: var(--accent); color: var(--accent)">
            {{ t('ចង្អុលពាក្យខ្មែរខុស', 'Report a Khmer Spelling') }}
          </a>
        </div>
      </div>
      <div class="ornament mt-8">&#9784;</div>
      <p class="text-xs mt-3" :style="{ color: 'var(--ink-faint)' }">
        {{ t('សទ្ធា និងបញ្ញា គឺជាគូគ្មានពីរ — សិក្សាដោយគោរព បដិបត្តិដោយពិចារណា', 'Faith and wisdom go together — study with respect, practise with reflection.') }}
      </p>
      <p class="text-[10px] mt-1 tracking-widest uppercase" :style="{ color: 'var(--ink-faint)' }">Buddha Dhamma &#183; 2026</p>
    </footer>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from './composables/useTheme'
import { useLanguage } from './composables/useLanguage'
import { searchIndex } from './data/searchIndex'

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
  { to: '/chanting', km: 'សូត្រ ១០', kmShort: 'សូត្រមន្ត', en: 'Chanting', num: '១០' },
  { to: '/glossary', km: 'វចនានុក្រមធម៌', kmShort: 'វចនានុក្រម', en: 'Glossary', num: '១១' },
  { to: '/stories', km: 'រឿងល្បីៗ', kmShort: 'រឿង', en: 'Stories', num: '១២' },
  { to: '/questions', km: 'សំណួរ–ចម្លើយ', kmShort: 'សំណួរ', en: 'Q&A', num: '១៣' },
]

const routeMeta = computed(() => route.name === 'home' ? '/' : route.path)

const showScrollTop = ref(false)
const onScroll = () => {
  showScrollTop.value = window.scrollY > 400
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

const query = ref('')
const searchOpen = ref(false)
const searchInput = ref(null)

function openSearch() {
  query.value = ''
  searchOpen.value = true
  nextTick(() => { if (searchInput.value) searchInput.value.focus() })
}
function closeSearch() {
  searchOpen.value = false
}
watch(() => route.path, () => { if (searchOpen.value) searchOpen.value = false })

const results = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return []
  return searchIndex.filter(r => (r.k + ' ' + r.e).toLowerCase().includes(q)).slice(0, 12)
})

const BASE_URL = 'https://buddha-dhamma.vercel.app'
const shareTelegram = computed(() => 'https://t.me/share/url?url=' + encodeURIComponent(BASE_URL) + '&text=' + encodeURIComponent('ធម៌ល្អៗ សម្រាប់ជីវិត — ' + BASE_URL))
const shareWhatsApp = computed(() => 'https://wa.me/?text=' + encodeURIComponent('ព្រះធម៌ ជាជំនួយជីវិត — ' + BASE_URL))
const reportUrl = computed(() => 'https://t.me/share/url?url=' + encodeURIComponent(BASE_URL) + '&text=' + encodeURIComponent('សូមកែពាក្យខ្មែរ ដែលខ្ញុំឃើញហាក់ខុស នៅលើទំព័រ ' + BASE_URL + ' ៖ '))
</script>