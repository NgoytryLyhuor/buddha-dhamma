<template>
  <div>
    <!-- Top navigation (no sidebar — horizontal scripture header) -->
    <header class="sticky top-0 z-50" :style="{ background: 'var(--bg-nav)', borderBottom: '1px solid var(--border)' }">
      <div class="max-w-4xl mx-auto px-4 pt-2.5">
        <div class="flex items-center justify-between gap-3">
          <router-link to="/" class="flex items-center gap-2 group min-w-0" style="color: var(--ink)">
            <span class="logo-ico leading-none shrink-0" :style="{ color: 'var(--accent-bright)' }">&#9784;</span>
            <span class="block min-w-0">
              <span class="block truncate font-display logo-title leading-tight">{{ t('ព្រះធម៌', 'Buddha Dhamma') }}</span>
              <span class="hidden sm:block logo-sub tracking-[0.3em] uppercase truncate" :style="{ color: 'var(--ink-faint)' }">{{ t('ពន្យល់ពាក្យព្រះសម្មាសម្ពុទ្ធ', 'The Words of the Buddha') }}</span>
            </span>
          </router-link>

          <div class="flex items-center gap-2">
            <button ref="settingsBtnRef" class="theme-btn px-2.5 flex gap-1.5 items-center font-bold" @click="settingsOpen = !settingsOpen"
              :style="settingsOpen ? { borderColor: 'var(--accent)', color: 'var(--accent)' } : {}"
              :title="t('ការកំណត់', 'Settings')" :aria-label="t('ការកំណត់', 'Settings')">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </button>
          </div>
        </div>

        <!-- Settings dropdown -->
        <transition name="settings">
          <div v-if="settingsOpen" ref="settingsRef" class="relative">
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
            <button class="setting-row" @click="toggleContrast">
              <span>AA</span>
              <span>{{ t(contrast ? 'ប្តូរទៅពណ៌ធម្មតា' : 'ប្តូរទៅពណ៌ខ្លាំង (ផ្ទុយខ្ពស់)', contrast ? 'Switch to normal contrast' : 'Switch to high contrast') }}</span>
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
          <div class="topnav-inner flex flex-wrap items-center justify-center gap-x-1 gap-y-0.5 text-[12px] font-bold">
            <router-link v-for="n in nav" :key="n.to" :to="n.to"
              class="px-2.5 py-2 flex items-center gap-1.5 transition hover:opacity-80"
              :style="routeMeta === n.to ? { color: 'var(--accent)' } : { color: 'var(--ink-soft)' }">
              <span :style="{ color: 'var(--accent-bright)' }">{{ n.num }}</span>{{ t(n.km, n.en) }}
            </router-link>
          </div>
          <div class="dhammascroll mt-px"></div>
        </nav>

        <!-- Mobile horizontal pill nav (scrollable, NOT bottom tabs) -->
        <nav class="mobile-nav mt-2 pb-2">
          <div class="flex gap-1.5 overflow-x-auto pb-1" style="-webkit-overflow-scrolling: touch">
            <router-link v-for="n in nav" :key="n.to" :to="n.to"
              class="nav-pill flex items-center gap-1.5 shrink-0"
              :class="routeMeta === n.to ? 'active' : ''">
              <span :style="{ color: 'var(--accent-bright)' }">{{ n.num }}</span>{{ t(n.kmShort, n.en) }}
            </router-link>
          </div>
        </nav>
      </div>
    </header>

    <!-- Reading progress bar -->
    <div class="progress-bar" aria-hidden="true">
      <div class="progress-bar-fill" :style="{ width: progress + '%' }"></div>
    </div>

    <transition name="fade">
      <div v-if="!online" class="offline-banner" role="status">
        <span>&#9888;</span>
        {{ t('គ្មានអ៊ីនធឺណិត — នៅប្រើបាន ព្រោះទំព័របានរក្សាទុក', 'Offline — still works because this page is saved.') }}
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

      <!-- Related pages -->
      <nav v-if="relatedList && relatedList.length" class="related-box mt-10">
        <p class="chapter-label">{{ t('ទំព័រពាក់ព័ន្ធ', 'RELATED PAGES') }}</p>
        <div class="flex flex-wrap gap-2 mt-3">
          <router-link v-for="r in relatedList" :key="r.to" :to="r.to" class="related-pill">
            <span class="related-num" :style="{ color: 'var(--accent-bright)' }">{{ r.num }}</span>
            {{ t(r.km, r.en) }}
          </router-link>
        </div>
      </nav>

      <!-- Prev / Next page navigation -->
      <nav v-if="pageNav && pageNav.total > 1" class="pn-nav" aria-label="Page navigation">
        <router-link v-if="pageNav.prev" :to="pageNav.prev.to" class="pn-link pn-prev">
          <span class="pn-arrow" aria-hidden="true">&#8592;</span>
          <span class="pn-txt">
            <span class="pn-label">{{ t('មុន', 'Previous') }}</span>
            <span class="pn-name">{{ pageNav.prev.num }} {{ t(pageNav.prev.km, pageNav.prev.en) }}</span>
          </span>
        </router-link>
        <span v-else class="pn-link pn-prev pn-empty" aria-hidden="true"></span>

        <router-link v-if="pageNav.next" :to="pageNav.next.to" class="pn-link pn-next">
          <span class="pn-txt">
            <span class="pn-label">{{ t('បន្ទាប់', 'Next') }}</span>
            <span class="pn-name">{{ pageNav.next.num }} {{ t(pageNav.next.km, pageNav.next.en) }}</span>
          </span>
          <span class="pn-arrow" aria-hidden="true">&#8594;</span>
        </router-link>
        <span v-else class="pn-link pn-next pn-empty" aria-hidden="true"></span>
      </nav>
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
          <button class="share-btn report" @click="openFeedback">
            <span class="share-ico" aria-hidden="true">&#9993;</span>
            <span class="share-txt">
              <span class="share-name">{{ t('ផ្តល់យោបល់', 'Send Feedback') }}</span>
              <span class="share-sub km">{{ t('ផ្ញើសារទៅអ្នកអភិវឌ្ឍ', 'Send a message to the developer') }}</span>
            </span>
          </button>
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

    <!-- Install / download prompt -->
    <transition name="fade">
      <div v-if="showInstallPrompt" class="install-backdrop" role="dialog" aria-modal="true" :aria-label="t('ដំឡើងកម្មវិធី', 'Install the app')">
        <div class="install-card" @click.stop>
          <button class="install-close" @click="closeInstallPrompt" :aria-label="t('បិទ', 'Close')">&#10005;</button>
          <div class="install-ico" aria-hidden="true">&#9784;</div>
          <h3 class="install-title">{{ t('ដំឡើងកម្មវិធី', 'Install the app') }}</h3>
          <p class="install-text">
            {{ t(installHelp
              ? 'ប្រើម៉ឺនុយរបស់កម្មវិធីរុករក "បន្ថែមទៅអេក្រង់ដើម" ដើម្បីអានក្រៅបណ្តាញ។'
              : 'ដំឡើងកម្មវិធីដើម្បីអានព្រះធម៌សូម្បីតែគ្មានអ៊ីនធឺណិត និងចូលប្រើលឿនជាងមុន។',
              installHelp
                ? 'Use your browser menu > "Add to Home Screen" to read offline.'
                : 'Install the app to read the Dhamma even without internet and open it faster.') }}
          </p>
          <button class="install-btn" @click="installApp">
            {{ t('ទាញយក / ដំឡើង', 'Download / Install') }}
          </button>
          <label class="install-dontagain">
            <input type="checkbox" v-model="installChecked">
            <span>{{ t('កុំបង្ហាញម្តងទៀត', "Don't show this again") }}</span>
          </label>
        </div>
      </div>
    </transition>

    <!-- Feedback modal -->
    <transition name="fade">
      <div v-if="feedbackOpen" class="install-backdrop" role="dialog" aria-modal="true" @click.self="closeFeedback" :aria-label="t('ផ្តល់យោបល់', 'Send feedback')">
        <div class="install-card feedback-card" @click.stop>
          <button class="install-close" @click="closeFeedback" :aria-label="t('បិទ', 'Close')">&#10005;</button>
          <div class="install-ico" aria-hidden="true">&#9993;</div>
          <h3 class="install-title">{{ t('ផ្តល់យោបល់ ដល់អ្នកអភិវឌ្ឍ', 'Send feedback to the developer') }}</h3>
          <p class="install-text">{{ t('សរសេរសាររបស់អ្នក គឺនឹងបើក Telegram ដើម្បីផ្ញើ ។', 'Write your message; it will open Telegram to send it.') }}</p>
          <textarea v-model="feedbackMsg" rows="4" class="feedback-area"
            :placeholder="t('វាយយោបល់ ឬ បញ្ហានៅទីនេះ…', 'Type your feedback or issue here…')"
            :style="{ background: 'var(--bg-input)', color: 'var(--ink)', border: '1px solid var(--border-strong)' }"></textarea>
          <button class="install-btn" :disabled="!feedbackMsg.trim()" @click="sendFeedback">
            {{ t('ផ្ញើតាម Telegram', 'Send via Telegram') }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onErrorCaptured, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from './composables/useTheme'
import { useLanguage } from './composables/useLanguage'
import { useFontSize } from './composables/useFontSize'
import { useFont } from './composables/useFont'
import { useContrast } from './composables/useContrast'
import { usePwaUpdate } from './composables/usePwaUpdate'
import { saveScroll, clearSavedScroll } from './composables/useReadingProgress'

const route = useRoute()
const { theme, toggleTheme } = useTheme()
const { lang, t, setLang } = useLanguage()
const { needRefresh, reload } = usePwaUpdate()
const { contrast, toggleContrast } = useContrast()

const hasError = ref(false)
onErrorCaptured((err) => {
  console.error(err)
  hasError.value = true
  return false
})
const { fontSizeIndex, SIZES, increaseFontSize, decreaseFontSize, spacing, setSpacing } = useFontSize()
const { font, setFont } = useFont()

function resetSettings() {
  ;['bd_lang', 'bd_dhamma_theme', 'bd_font_size', 'bd_font_family', 'bd_spacing', 'bd_contrast', 'bd_install_dismissed']
    .forEach(k => localStorage.removeItem(k))
  clearSavedScroll()
  location.reload()
}

const settingsOpen = ref(false)
const settingsRef = ref(null)
const settingsBtnRef = ref(null)

function onSettingsGlobalClick(e) {
  if (!settingsOpen.value) return
  if (settingsRef.value && settingsRef.value.contains(e.target)) return
  if (settingsBtnRef.value && settingsBtnRef.value.contains(e.target)) return
  settingsOpen.value = false
}

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
  { to: '/paccaya', km: 'បដិច្ចសមុប្បាទ', kmShort: 'បដិច្ចសមុប្បាទ', en: 'Origination', num: '១៤' },
  { to: '/sangha', km: 'ជីវិតព្រះសង្ឃ', kmShort: 'ព្រះសង្ឃ', en: 'Monastic', num: '១៥' },
  { to: '/daily', km: 'បដិបត្តិប្រចាំថ្ងៃ', kmShort: 'ប្រចាំថ្ងៃ', en: 'Daily', num: '១៦' },
  { to: '/recollections', km: 'អនុស្សតិ', kmShort: 'អនុស្សតិ', en: 'Recollections', num: '១៧' },
  { to: '/ariya', km: 'អរិយបុគ្គល', kmShort: 'អរិយ', en: 'Noble Ones', num: '១៨' },
]

const routeMeta = computed(() => route.name === 'home' ? '/' : route.path)

const pageNav = computed(() => {
  const cur = route.name === 'home' ? '/' : route.path
  const idx = nav.findIndex(n => n.to === cur)
  if (idx === -1) return { total: 0, prev: null, next: null }
  return {
    total: nav.length,
    prev: idx > 0 ? nav[idx - 1] : null,
    next: idx < nav.length - 1 ? nav[idx + 1] : null,
  }
})

const related = {
  '/': ['/core', '/gathas', '/questions'],
  '/core': ['/meditation', '/kamma', '/ariya'],
  '/abhidhamma': ['/meditation', '/core', '/glossary'],
  '/kamma': ['/core', '/ethics', '/questions'],
  '/ethics': ['/daily', '/sangha', '/kamma'],
  '/meditation': ['/chanting', '/recollections', '/daily'],
  '/suttas': ['/gathas', '/glossary', '/stories'],
  '/life': ['/stories', '/core', '/gathas'],
  '/gathas': ['/chanting', '/suttas', '/stories'],
  '/chanting': ['/gathas', '/daily', '/meditation'],
  '/glossary': ['/core', '/abhidhamma', '/suttas'],
  '/stories': ['/life', '/gathas', '/ariya'],
  '/questions': ['/core', '/daily', '/ethics'],
  '/paccaya': ['/core', '/kamma', '/ariya'],
  '/sangha': ['/daily', '/ethics', '/core'],
  '/daily': ['/ethics', '/meditation', '/recollections'],
  '/recollections': ['/meditation', '/daily', '/chanting'],
  '/ariya': ['/core', '/paccaya', '/meditation', '/stories'],
}

const relatedList = computed(() => {
  const cur = route.name === 'home' ? '/' : route.path
  const paths = (related[cur] || []).slice(0, 4)
  return paths.map(p => nav.find(n => n.to === p)).filter(Boolean)
})

const showScrollTop = ref(false)
const progress = ref(0)
let saveTimer = null
const onScroll = () => {
  showScrollTop.value = window.scrollY > 400
  const doc = document.documentElement
  const max = doc.scrollHeight - window.innerHeight
  progress.value = max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0
  if (saveTimer) return
  saveTimer = setTimeout(() => {
    saveScroll(route.path, window.scrollY || 0)
    saveTimer = null
  }, 400)
}
const onSaveOnExit = () => {
  saveScroll(route.path, window.scrollY || 0)
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('pagehide', onSaveOnExit)
  document.addEventListener('click', onSettingsGlobalClick)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('pagehide', onSaveOnExit)
  document.removeEventListener('click', onSettingsGlobalClick)
})

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
const isStandalone = ref(
  typeof navigator !== 'undefined'
    && ((typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(display-mode: standalone)').matches)
      || navigator.standalone === true)
)
const installDismissed = ref(localStorage.getItem('bd_install_dismissed') === '1')
const installChecked = ref(false)
const installHelp = ref(false)
const showInstallPrompt = ref(false)
let installTimer = null

function openInstallPrompt() {
  if (isStandalone.value || installDismissed.value) return
  showInstallPrompt.value = true
}
function installApp() {
  if (installPrompt.value) {
    const p = installPrompt.value
    p.prompt()
    p.userChoice.then((choice) => {
      if (choice.outcome === 'accepted') {
        installPrompt.value = null
        installChecked.value = true
        closeInstallPrompt()
      }
    })
  } else {
    installHelp.value = true
  }
}
function closeInstallPrompt() {
  if (installChecked.value) localStorage.setItem('bd_install_dismissed', '1')
  showInstallPrompt.value = false
  installHelp.value = false
}
onMounted(() => {
  window.addEventListener('online', updateOnline)
  window.addEventListener('offline', updateOnline)
  const onBeforeInstall = (e) => {
    e.preventDefault()
    installPrompt.value = e
  }
  window.addEventListener('beforeinstallprompt', onBeforeInstall)
  window.addEventListener('appinstalled', () => {
    installPrompt.value = null
    installChecked.value = true
    closeInstallPrompt()
  })
  installTimer = setTimeout(openInstallPrompt, 1500)
})
onBeforeUnmount(() => {
  if (installTimer) clearTimeout(installTimer)
})

watch(() => route.path, () => { if (settingsOpen.value) settingsOpen.value = false })

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
  paccaya: ['បដិច្ចសមុប្បាទ ច្រវាក់ ១២ នៃហេតុនិងផល។', 'Dependent origination — the twelve links of cause and effect.'],
  sangha: ['ជីវិតព្រះសង្ឃ វិន័យ និងរបៀបធ្វើបុណ្យទាន។', 'Monastic life, the Vinaya, and how to make offerings.'],
  daily: ['បដិបត្តិប្រចាំថ្ងៃ សីល ៥ និងពិធីបុណ្យរាល់ឆ្នាំ។', 'A simple daily practice, the five precepts, and observances.'],
  recollections: ['អនុស្សតិ ១០ និងពិចារណាប្រចាំថ្ងៃ។', 'The ten recollections and daily reflections.'],
  ariya: ['អរិយបុគ្គល ៨ ពួក សោតាបន្ន ដល់ អរហន្ត។', 'The eight noble persons, from stream-enterer to arahant.'],
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

const BASE_URL = 'https://buddha-dhamma.vercel.app'
const shareTelegram = computed(() => 'https://t.me/share/url?url=' + encodeURIComponent(BASE_URL) + '&text=' + encodeURIComponent('ធម៌ល្អៗ សម្រាប់ជីវិត — ' + BASE_URL))
const reportUrl = computed(() => 'https://t.me/share/url?url=' + encodeURIComponent(BASE_URL) + '&text=' + encodeURIComponent('សូមកែពាក្យខ្មែរ ដែលខ្ញុំឃើញហាក់ខុស នៅលើទំព័រ ' + BASE_URL + ' ៖ '))

const feedbackOpen = ref(false)
const feedbackMsg = ref('')

function openFeedback() {
  feedbackMsg.value = ''
  feedbackOpen.value = true
}
function closeFeedback() {
  feedbackOpen.value = false
  feedbackMsg.value = ''
}
function sendFeedback() {
  const msg = feedbackMsg.value.trim()
  if (!msg) return
  const url = 'https://t.me/share/url?url=' + encodeURIComponent(BASE_URL)
    + '&text=' + encodeURIComponent('យោបល់ / Feedback: ' + msg)
  window.open(url, '_blank', 'noopener')
  closeFeedback()
}
</script>