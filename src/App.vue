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
            <button class="theme-btn" @click="openSearch" :title="t('ស្វែងរកក្នុងទំព័រ', 'Search the site')" :aria-label="t('ស្វែងរកក្នុងទំព័រ', 'Search the site')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><line x1="16.5" y1="16.5" x2="21" y2="21"></line></svg>
            </button>
            <button class="theme-btn px-3 flex gap-1.5 items-center text-xs font-bold" @click="settingsOpen = !settingsOpen"
              :style="settingsOpen ? { borderColor: 'var(--accent)', color: 'var(--accent)' } : {}"
              :title="t('ការកំណត់', 'Settings')" :aria-label="t('ការកំណត់', 'Settings')">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </button>
          </div>
        </div>

        <!-- Settings dropdown -->
        <transition name="settings">
          <div v-if="settingsOpen" class="relative">
            <div class="settings-panel">
            <p class="settings-label">{{ t('ភាសា', 'Language') }}</p>
            <div class="flex gap-2">
              <button class="lang-pick" :class="lang === 'km' ? 'on' : ''" @click="setLang('km')">ភាសាខ្មែរ</button>
              <button class="lang-pick" :class="lang === 'en' ? 'on' : ''" @click="setLang('en')">English</button>
            </div>

            <p class="settings-label mt-4">{{ t('ផ្ទៃមុខ', 'Appearance') }}</p>
            <button class="setting-row" @click="toggleTheme">
              <span>{{ theme === 'dark' ? '☽' : '☼' }}</span>
              <span>{{ t(theme === 'dark' ? 'ប្តូរទៅភ្លឺ' : 'ប្តូរទៅងងឹត', theme === 'dark' ? 'Switch to light' : 'Switch to dark') }}</span>
            </button>

            <p class="settings-label mt-4">{{ t('ទំហំអក្សរ', 'Font size') }}</p>
            <div class="flex items-center justify-between gap-2">
              <button class="font-btn" @click="decreaseFontSize" :disabled="fontSizeIndex === 0" :title="t('អក្សរតូចជាង', 'Smaller text')">A−</button>
              <div class="settings-dots flex items-center gap-1.5">
                <span v-for="(s, i) in SIZES" :key="i" class="dot" :class="i <= fontSizeIndex ? 'on' : ''"></span>
              </div>
              <button class="font-btn" @click="increaseFontSize" :disabled="fontSizeIndex === SIZES.length - 1" :title="t('អក្សរធំជាង', 'Larger text')">A+</button>
            </div>

            <p class="settings-label mt-4">{{ t('ប្រភេទអក្សរ', 'Font style') }}</p>
            <div class="flex gap-2">
              <button class="lang-pick" :class="font === 'sans' ? 'on' : ''" @click="setFont('sans')">{{ t('សម័យ', 'Sans') }}</button>
              <button class="lang-pick" :class="font === 'serif' ? 'on' : ''" @click="setFont('serif')">{{ t('សេរីហ្វ', 'Serif') }}</button>
            </div>

            <p class="settings-label mt-4">{{ t('គម្លាតបន្ទាត់', 'Line spacing') }}</p>
            <div class="flex gap-2">
              <button class="lang-pick" :class="spacing === 'normal' ? 'on' : ''" @click="setSpacing('normal')">{{ t('ធម្មតា', 'Normal') }}</button>
              <button class="lang-pick" :class="spacing === 'relaxed' ? 'on' : ''" @click="setSpacing('relaxed')">{{ t('ធំទូលាយ', 'Relaxed') }}</button>
            </div>

            <button v-if="canInstall" class="setting-row reset-btn mt-4" @click="installApp">
              <span>&#8681;</span>
              <span>{{ t('ដំឡើងកម្មវិធីលើទូរស័ព្ទ', 'Install this app') }}</span>
            </button>

            <button class="setting-row reset-btn mt-4" @click="resetSettings">
              <span>&#8634;</span>
              <span>{{ t('កំណត់ឡើងវិញទាំងអស់', 'Reset all settings') }}</span>
            </button>
            </div>
          </div>
        </transition>

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

    <transition name="fade">
      <div v-if="!online" class="offline-banner" role="status">
        <span>&#9888;</span>
        {{ t('គ្មានអ៊ីនធឺណិត — នៅប្រើបាន ព្រោះទំព័របានរក្សាទុក', 'Offline — still works because this page is saved.') }}
      </div>
    </transition>

    <!-- Search overlay -->
    <transition name="search-fade">
      <div v-if="searchOpen" class="search-overlay" @click.self="closeSearch">
        <div class="search-panel">
          <div class="flex items-center justify-between gap-3 mb-3">
            <h3 class="font-display text-lg" style="color: var(--ink)">{{ t('ស្វែងរក', 'Search') }}</h3>
            <button class="theme-btn" @click="closeSearch" :title="t('បិទ', 'Close')" :aria-label="t('បិទ', 'Close')">&#10005;</button>
          </div>
          <input ref="searchInput" v-model="query" type="text" autocomplete="off"
            :placeholder="t('វាយពាក្យជាខ្មែរ ឬ អង់គ្លេស…', 'Type in Khmer or English…')"
            :style="{ background: 'var(--bg-card-2)', color: 'var(--ink)', border: '1px solid var(--border-strong)' }"
            @input="onSearchInput" @keydown="onSearchKeydown" />
          <p v-if="query && !results.length" class="text-xs mt-3" style="color: var(--ink-faint)">
            {{ t('រកមិនឃើញ សាកល្បងពាក្យផ្សេងទៀត', 'Nothing found — try another word.') }}
          </p>
          <div class="mt-3 max-h-80 overflow-y-auto -mr-2 pr-2 space-y-1">
            <router-link v-for="(r, i) in results" :key="r.to + r.k" :to="r.to"
              class="block px-3 py-2 rounded-sm transition hover:opacity-80"
              :class="i === activeIndex ? 'search-active' : ''"
              :style="{ background: i === activeIndex ? 'var(--accent-soft)' : 'var(--bg-card-2)' }">
              <span class="block text-sm font-bold" style="color: var(--ink)">{{ r.k }}</span>
              <span class="block text-xs" style="color: var(--ink-faint)">{{ r.e }}</span>
            </router-link>
            <p v-if="!query" class="text-xs px-3 py-2" style="color: var(--ink-faint)">
              {{ t('វាយពាក្យមួយចំនួន ដើម្បីរកទំព័រ', 'Type a few letters to find a page.') }}
            </p>
          </div>
        </div>
      </div>
    </transition>

    <!-- Scroll to top -->
    <transition name="fade">
      <button v-if="showScrollTop"
        class="scroll-top-btn" @click="scrollToTop"
        :title="t('ត្រឡប់ទៅកំពូល', 'Back to top')"
        :aria-label="t('ត្រឡប់ទៅកំពូល', 'Back to top')">
        &#8593;
      </button>
    </transition>

    <!-- New version available toast -->
    <transition name="toast">
      <div v-if="needRefresh" class="update-toast" role="status">
        <span class="update-toast-ico" aria-hidden="true">&#8635;</span>
        <span class="update-toast-txt">
          <span class="update-toast-title">{{ t('បានធ្វើបច្ចុប្បន្នភាព ថ្មី', 'A new version is ready') }}</span>
          <span class="update-toast-sub">{{ t('ចុចដើម្បីធ្វើបច្ចុប្បន្នភាព', 'Tap to update now') }}</span>
        </span>
        <button class="update-toast-btn" @click="reload">{{ t('ធ្វើបច្ចុប្បន្នភាព', 'Refresh') }}</button>
      </div>
    </transition>

    <!-- Main reading column -->
    <main v-if="!hasError" class="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <main v-else class="max-w-4xl mx-auto px-4 py-20 text-center">
      <div class="ornament mb-4 font-display text-3xl" style="color: var(--accent)">&#9784;</div>
      <h1 class="font-display text-xl" style="color: var(--ink)">{{ t('មានបញ្ហាកើតឡើង', 'Something went wrong') }}</h1>
      <p class="text-sm mt-3" style="color: var(--ink-muted)">
        {{ t('សូមសាកល្បងម្តងទៀត ឬត្រឡប់ទៅទំព័រដើម។', 'Please try again or return to the home page.') }}
      </p>
      <div class="flex items-center justify-center gap-3 mt-8">
        <button class="share-btn report" @click="hasError = false" style="border-color: var(--accent); color: var(--accent)">
          {{ t('សាកល្បងម្តងទៀត', 'Try again') }}
        </button>
        <router-link to="/" class="share-btn" @click="hasError = false" style="color: var(--accent)">
          {{ t('ទំព័រដើម', 'Home') }}
        </router-link>
      </div>
    </main>

    <footer class="max-w-4xl mx-auto px-4 pb-10 text-center">
      <div class="footer-share">
        <p class="share-title">{{ t('ចែករំលែក និង ផ្តល់យោបល់', 'Share and Give Feedback') }}</p>
        <div class="share-row">
          <a class="share-btn" :href="shareTelegram" target="_blank" rel="noopener">
            <span class="share-ico" aria-hidden="true">&#9992;</span>
            <span class="share-txt">
              <span class="share-name">Telegram</span>
              <span class="share-sub km">{{ t('ចែករំលែកឱ្យមិត្ត', 'Share with friends') }}</span>
            </span>
          </a>
          <a class="share-btn report" :href="reportUrl" target="_blank" rel="noopener">
            <span class="share-ico" aria-hidden="true">&#9998;</span>
            <span class="share-txt">
              <span class="share-name">{{ t('ចង្អុលពាក្យខ្មែរខុស', 'Report a Khmer Spelling') }}</span>
              <span class="share-sub km">{{ t('ជួយកែពាក្យឱ្យត្រឹមត្រូវ', 'Help fix a mistake') }}</span>
            </span>
          </a>
        </div>
      </div>
      <div class="ornament mt-8">&#9784;</div>
      <p class="text-xs mt-3" :style="{ color: 'var(--ink-faint)' }">
        {{ t('សទ្ធា និងបញ្ញា គឺជាគូគ្មានពីរ — សិក្សាដោយគោរព បដិបត្តិដោយពិចារណា', 'Faith and wisdom go together — study with respect, practise with reflection.') }}
      </p>
      <p class="text-[10px] mt-1 tracking-widest uppercase" :style="{ color: 'var(--ink-faint)' }">Buddha Dhamma &#183; 2026 &#183; v1.0.1</p>
      <p class="text-[10px] mt-3" :style="{ color: 'var(--ink-faint)' }">
        {{ t('បង្កើតឡើងដោយ', 'Developed by') }}
        <a href="https://t.me/ngoytrylyhuor" target="_blank" rel="noopener" style="color: var(--accent)">{{ t('ឧបាសកង៉ុយទ្រី លីហួរ', 'NGOYTRY LYHUOR') }}</a>
      </p>
    </footer>
  </div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onErrorCaptured, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTheme } from './composables/useTheme'
import { useLanguage } from './composables/useLanguage'
import { useFontSize } from './composables/useFontSize'
import { useFont } from './composables/useFont'
import { usePwaUpdate } from './composables/usePwaUpdate'
import { searchIndex } from './data/searchIndex'

const route = useRoute()
const router = useRouter()
const { theme, toggleTheme } = useTheme()
const { lang, t, setLang } = useLanguage()
const { needRefresh, reload } = usePwaUpdate()

const hasError = ref(false)
onErrorCaptured((err) => {
  console.error(err)
  hasError.value = true
  return false
})
const { fontSizeIndex, SIZES, increaseFontSize, decreaseFontSize, spacing, setSpacing } = useFontSize()
const { font, setFont } = useFont()

function resetSettings() {
  ;['bd_lang', 'bd_dhamma_theme', 'bd_font_size', 'bd_font_family', 'bd_spacing']
    .forEach(k => localStorage.removeItem(k))
  location.reload()
}

const settingsOpen = ref(false)

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

const printOpenStates = []
function beforePrint() {
  document.querySelectorAll('main details').forEach(d => {
    printOpenStates.push([d, d.open])
    d.open = true
  })
}
function afterPrint() {
  printOpenStates.forEach(([d, was]) => { d.open = was })
  printOpenStates.length = 0
}
onMounted(() => {
  window.addEventListener('beforeprint', beforePrint)
  window.addEventListener('afterprint', afterPrint)
})
onBeforeUnmount(() => {
  window.removeEventListener('beforeprint', beforePrint)
  window.removeEventListener('afterprint', afterPrint)
})

const online = ref(typeof navigator !== 'undefined' ? navigator.onLine !== false : true)
function updateOnline() { online.value = navigator.onLine !== false }
const installPrompt = ref(null)
const canInstall = computed(() => !!installPrompt.value)
function installApp() {
  if (!installPrompt.value) return
  installPrompt.value.prompt()
  installPrompt.value = null
}
onMounted(() => {
  window.addEventListener('online', updateOnline)
  window.addEventListener('offline', updateOnline)
  const onBeforeInstall = (e) => {
    e.preventDefault()
    installPrompt.value = e
  }
  window.addEventListener('beforeinstallprompt', onBeforeInstall)
  window.addEventListener('appinstalled', () => { installPrompt.value = null })
})

const query = ref('')
const searchOpen = ref(false)
const searchInput = ref(null)
const activeIndex = ref(0)

function openSearch() {
  query.value = ''
  activeIndex.value = 0
  searchOpen.value = true
  nextTick(() => { if (searchInput.value) searchInput.value.focus() })
}
function closeSearch() {
  searchOpen.value = false
}
watch(() => route.path, () => { if (searchOpen.value) searchOpen.value = false; if (settingsOpen.value) settingsOpen.value = false })

const siteName = t('ព្រះធម៌ អត្ថបទសម្រាប់ជីវិត', 'Buddha Dhamma — Dhamma for Life')
const descrMap = {
  home: ['ពន្យល់ពាក្យព្រះសម្មាសម្ពុទ្ធ ជាខ្មែរ និងអង់គ្លេស។', 'The Buddha\'s teachings explained in Khmer and English.'],
  core: ['អរិយសច្ច ៤ ផ្លូវ ៨ អនិច្ចំ ទុក្ខំ អនត្តា។', 'Four Noble Truths, Eightfold Path, anicca, dukkha, anatta.'],
  abhidhamma: ['ចិត្ត ចេតសិក រូប និងនិព្វាន តាមអភិធម្ម។', 'Citta, cetasika, rūpa and nibbāna in the Abhidhamma.'],
  kamma: ['កម្ម វិបាក កុសល អកុសល និងផលនៃកម្ម។', 'Kamma, result, wholesome and unwholesome actions.'],
  ethics: ['សីល ៥ បារមី ១០ និងការប្រព្រឹត្តល្អ។', 'Five precepts, the ten perfections, and right conduct.'],
  meditation: ['សមាធិ អានាបានស្សតិ និងសតិបដ្ឋាន ៤។', 'Meditation, mindfulness of breathing, and the four satipaṭṭhāna.'],
  suttas: ['ព្រះសូត្រ ១០ ដ៏ល្បី ជាមួយភាសាបាលី និងពន្យល់។', 'Ten famous suttas with Pali and explanations.'],
  life: ['ជីវប្រវត្តិព្រះសម្មាសម្ពុទ្ធ ព្រះសិទ្ធត្ថ គោតម។', 'The life of the Buddha, Siddhattha Gotama.'],
  gathas: ['គាថាព្រះធម៌ និងធម្មបទ សម្រាប់ត្រិះរិះ។', 'Verses of Dhamma and the Dhammapada for reflection.'],
  chanting: ['សូត្រ ១០ សម្រាប់សូត្ររាល់ថ្ងៃ ជាមួយភាសាបាលី។', 'Ten daily recitals for chanting with Pali.'],
  glossary: ['វចនានុក្រមពាក្យធម៌ ជាខ្មែរ និងអង់គ្លេស។', 'Glossary of Dhamma terms in Khmer and English.'],
  stories: ['រឿងល្បីៗអំពីព្រះពុទ្ធ និងព្រះអរហន្ត។', 'Famous stories about the Buddha and Arahants.'],
  questions: ['សំណួរ–ចម្លើយ អំពីព្រះធម៌ និងការប្រព្រឹត្ត។', 'Questions and answers about Dhamma and practice.'],
  notfound: ['រកមិនឃើញទំព័រ', 'Page not found'],
}
function syncPageMeta() {
  const meta = route.meta || {}
  const title = meta.titleK ? t(meta.titleK, meta.titleE) : siteName
  document.title = title + ' — ' + t('ព្រះធម៌', 'Buddha Dhamma')
  const pair = descrMap[route.name] || [siteName, siteName]
  const desc = lang.value === 'km' ? pair[0] : pair[1]
  let d = document.querySelector('meta[name="description"]')
  if (d) d.setAttribute('content', desc)
  const html = document.documentElement
  html.setAttribute('lang', lang.value)
  html.setAttribute('dir', 'ltr')
}
watch(() => [route.name, lang.value], syncPageMeta, { immediate: true })

const results = computed(() => {
  const q = query.value.trim().toLowerCase().normalize('NFC')
  if (!q) return []
  return searchIndex.filter(r => (r.k + ' ' + r.e).toLowerCase().normalize('NFC').includes(q)).slice(0, 12)
})

function onSearchInput() {
  activeIndex.value = 0
}

function goToResult(i) {
  const r = results.value[i]
  if (!r) return
  closeSearch()
  router.push(r.to)
}

function onSearchKeydown(e) {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    if (results.value.length) activeIndex.value = (activeIndex.value + 1) % results.value.length
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (results.value.length) activeIndex.value = (activeIndex.value - 1 + results.value.length) % results.value.length
  } else if (e.key === 'Enter') {
    e.preventDefault()
    goToResult(activeIndex.value)
  } else if (e.key === 'Escape') {
    closeSearch()
  }
}

const BASE_URL = 'https://buddha-dhamma.vercel.app'
const shareTelegram = computed(() => 'https://t.me/share/url?url=' + encodeURIComponent(BASE_URL) + '&text=' + encodeURIComponent('ធម៌ល្អៗ សម្រាប់ជីវិត — ' + BASE_URL))
const reportUrl = computed(() => 'https://t.me/share/url?url=' + encodeURIComponent(BASE_URL) + '&text=' + encodeURIComponent('សូមកែពាក្យខ្មែរ ដែលខ្ញុំឃើញហាក់ខុស នៅលើទំព័រ ' + BASE_URL + ' ៖ '))
</script>