<template>
  <div>
    <!-- Header (logo + settings only; navigation lives in bottom bar) -->
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
            <!-- Desktop only: clean button to open all 41 pages (Hidden on mobile where bottom nav is used) -->
            <button
              type="button"
              class="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded text-xs font-bold transition cursor-pointer"
              @click="openMenu"
              :class="menuOpen ? 'active' : ''"
              :style="{
                background: menuOpen ? 'var(--accent-soft)' : 'var(--bg-card)',
                color: menuOpen ? 'var(--accent)' : 'var(--ink)',
                border: '1px solid ' + (menuOpen ? 'var(--accent)' : 'var(--border)')
              }"
              :title="t('ម៉ឺនុយទាំងអស់ (៨៤)', 'All Pages (84)')"
              :aria-label="t('ម៉ឺនុយទាំងអស់', 'All Pages')"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              <span>{{ t('ម៉ឺនុយទាំងអស់', 'All Pages') }}</span>
              <span class="text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold"
                :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)' }">
                {{ nav.length }}
              </span>
            </button>

            <!-- Settings icon button (square icon button) -->
            <button ref="settingsBtnRef" class="theme-btn" @click="settingsOpen = !settingsOpen"
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

            <p class="settings-label mt-4">{{ t('ជូនដំណឹង', 'Notifications') }}</p>
            <button class="setting-row" @click="notifEnabled ? disableNotif() : enableNotif()"
              :disabled="!notifSupported || !notifConfigured">
              <span :style="notifEnabled ? { color: 'var(--accent)' } : {}">&#128276;</span>
              <span class="flex-1 min-w-0">
                <span class="block">{{ t(notifEnabled ? 'បានបើកជូនដំណឹង' : 'បើកជូនដំណឹងព្រះធម៌', notifEnabled ? 'Notifications on' : 'Turn on Dhamma notifications') }}</span>
                <span v-if="notifDenied" class="block text-[11px] font-normal" :style="{ color: 'var(--ink-faint)' }">
                  {{ t('គ្មានសិទ្ធិ — បើកក្នុងការកំណត់នៃអ្នករុករក', 'Permission blocked — enable in browser settings') }}
                </span>
              </span>
            </button>
            <p v-if="notifDenied" class="mt-2 text-[11px] leading-relaxed" :style="{ color: 'var(--ink-faint)' }">
              {{ t('បើកវានៅក្នុងការកំណត់ការជូនដំណឹងរបស់កម្មវិធីរុករក (រូបសោ/ខែលនៅខាងដើមអាសយដ្ឋាន) ហើយត្រលប់មកវិញ។', 'Enable it in your browser\u2019s notification settings (the lock/shield icon by the address bar), then come back here.') }}
            </p>
            <button v-if="notifDenied" class="share-btn report mt-2" @click="retryNotif" style="color: var(--accent)">
              {{ t('ខ្ញុំបានកែរួច — ពិនិត្យម្តងទៀត', 'I fixed it — check again') }}
            </button>
            <p class="text-[11px] mt-2 leading-relaxed" :style="{ color: 'var(--ink-faint)' }">
              {{ t('ទទួលសម្ដីព្រះធម៌ប្រចាំថ្ងៃ និងការជូនដំណឹងថ្ងៃបុណ្យ សីល និងការរំឭកថ្ងៃសំខាន់ៗ។ នៅលើ iPhone ត្រូវបន្ថែមទៅអេក្រង់ដើមជាមុនសិន។', 'Daily Dhamma quotes and alerts for festivals, sīl days, and special days. On iPhone, add the app to your Home Screen first.') }}
            </p>

            <button class="setting-row reset-btn mt-4" @click="resetSettings">
              <span>&#8634;</span>
              <span>{{ t('កំណត់ឡើងវិញទាំងអស់', 'Reset all settings') }}</span>
            </button>
            </div>
          </div>
        </transition>



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
        <transition name="page">
          <component :is="Component" :key="route.path" />
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

    <!-- Facebook-style bottom navigation -->
    <nav class="bottom-nav" aria-label="Main navigation">
      <template v-for="tab in bottomTabs" :key="tab.id">
        <router-link v-if="tab.to" :to="tab.to" class="bottom-tab"
          :class="activeTab === tab.id ? 'active' : ''"
          :aria-label="t(tab.km, tab.en)">
          <span class="bottom-tab-ico" aria-hidden="true" v-html="tab.icon"></span>
          <span class="bottom-tab-label">{{ t(tab.km, tab.en) }}</span>
        </router-link>
        <button v-else class="bottom-tab" :class="menuOpen ? 'active' : ''" @click="openMenu"
          :aria-label="t(tab.km, tab.en)">
          <span class="bottom-tab-ico" aria-hidden="true" v-html="tab.icon"></span>
          <span class="bottom-tab-label">{{ t(tab.km, tab.en) }}</span>
        </button>
      </template>
    </nav>

    <!-- All pages sheet (opens from More tab on mobile OR Menu button in header) -->
    <transition name="sheet">
      <div v-if="menuOpen" class="menu-backdrop" @click.self="closeMenu">
        <div class="menu-sheet" role="dialog" aria-modal="true" :aria-label="t('ម៉ឺនុយទំព័រទាំងអស់', 'All pages')">
          <div class="menu-sheet-head">
            <div class="flex items-center gap-2.5 min-w-0">
              <span class="text-xl shrink-0" aria-hidden="true">☸️</span>
              <div class="min-w-0">
                <div class="flex items-center gap-2">
                  <span class="menu-sheet-title">{{ t('ម៉ឺនុយទំព័រទាំងអស់', 'All Pages') }}</span>
                  <span class="text-[11px] px-2 py-0.5 rounded-full font-mono font-bold shrink-0"
                    :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)' }">
                    {{ filteredMenuNav.length }}/{{ nav.length }}
                  </span>
                </div>
                <div class="text-[11px] text-stone-500 dark:text-stone-400 truncate">
                  {{ t('ចុចលើទំព័រណាមួយដើម្បីចូលអានភ្លាមៗ', 'Tap any page to open directly') }}
                </div>
              </div>
            </div>
            <button class="menu-sheet-close" @click="closeMenu" :aria-label="t('បិទ', 'Close')">
              <span class="text-base font-bold leading-none">&#10005;</span>
              <span class="text-xs font-bold">{{ t('បិទ', 'Close') }}</span>
            </button>
          </div>

          <!-- Quick Search Filter in Menu Sheet -->
          <div class="px-3.5 py-2.5 border-b shrink-0" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }">
            <div class="flex items-center gap-2 px-3 py-2 rounded-xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
              <span class="text-sm opacity-60">🔍</span>
              <input
                ref="menuSearchInputRef"
                v-model="menuSearchQuery"
                type="text"
                :placeholder="t('ស្វែងរកក្នុងចំណោម ៨៤ ម៉ឺនុយ (ឧ. សមាធិ, ទ្រព្យធម៌, កម្មដ្ឋាន)...', 'Search 84 pages (e.g. meditation, wealth, kammatthana)...')"
                class="w-full bg-transparent border-none text-xs sm:text-sm focus:outline-none"
                :style="{ color: 'var(--ink)' }"
              />
              <button
                v-if="menuSearchQuery"
                type="button"
                @click="menuSearchQuery = ''"
                class="text-xs px-2 py-1 rounded-md bg-stone-200 dark:bg-stone-700 font-bold opacity-70 hover:opacity-100 cursor-pointer"
                :aria-label="t('សម្អាត', 'Clear')"
              >
                ✕
              </button>
            </div>
          </div>

          <!-- Category filter pills -->
          <div class="menu-category-bar">
            <button
              v-for="cat in menuCategories"
              :key="cat.id"
              type="button"
              class="menu-cat-pill"
              :class="{ 'active': selectedMenuCategory === cat.id }"
              @click="selectedMenuCategory = cat.id"
            >
              <span>{{ t(cat.km, cat.en) }}</span>
              <span class="count">({{ getCategoryCount(cat.id) }})</span>
            </button>
          </div>

          <!-- Card list -->
          <div class="menu-sheet-list">
            <router-link
              v-for="n in filteredMenuNav"
              :key="n.to"
              :to="n.to"
              class="menu-sheet-card"
              :class="{ 'active': routeMeta === n.to }"
              @click="closeMenu"
            >
              <div class="menu-card-badge">
                <span class="menu-card-num">{{ n.num }}</span>
              </div>
              <div class="menu-card-body">
                <div class="menu-card-title">{{ t(n.km, n.en) }}</div>
                <div class="menu-card-sub">{{ t(n.descKm || n.kmShort, n.en) }}</div>
              </div>
              <div class="menu-card-action">
                <span v-if="routeMeta === n.to" class="menu-card-current">
                  ✓ {{ t('កំពុងអាន', 'Active') }}
                </span>
                <span v-else class="menu-card-arrow">›</span>
              </div>
            </router-link>

            <!-- Empty state -->
            <div v-if="filteredMenuNav.length === 0" class="col-span-full py-12 px-4 text-center">
              <div class="text-3xl mb-2">🔍</div>
              <p class="text-sm font-semibold mb-2" :style="{ color: 'var(--ink)' }">
                {{ t('រកមិនឃើញម៉ឺនុយដែលត្រូវនឹងពាក្យស្វែងរកឡើយ', 'No matching pages found') }}
              </p>
              <p class="text-xs text-stone-500 mb-4">
                {{ t('សូមព្យាយាមស្វែងរកពាក្យផ្សេង ឬចុចសម្អាត', 'Try searching for another word or clear filters') }}
              </p>
              <button
                type="button"
                @click="menuSearchQuery = ''; selectedMenuCategory = 'all'"
                class="px-4 py-2 rounded-lg text-xs font-bold cursor-pointer"
                :style="{ background: 'var(--accent)', color: '#fff' }"
              >
                {{ t('បង្ហាញទំព័រទាំងអស់ឡើងវិញ', 'Show all pages') }}
              </button>
            </div>

            <!-- Footer indicator -->
            <div v-if="filteredMenuNav.length > 0" class="col-span-full py-6 text-center text-xs opacity-80">
              <p class="font-medium" :style="{ color: 'var(--ink)' }">
                {{ t('☸️ ព្រះធម៌ ៨៤ ទំព័រ — រៀបចំតាមលំដាប់លំដោយ សម្រាប់សិក្សា និងបដិបត្តិ', '☸️ Buddha Dhamma 84 Pages — Ordered systematically for study & practice') }}
              </p>
              <p v-if="selectedMenuCategory !== 'all' || menuSearchQuery" class="mt-2 text-xs">
                <button
                  type="button"
                  @click="selectedMenuCategory = 'all'; menuSearchQuery = ''"
                  class="font-bold underline cursor-pointer"
                  :style="{ color: 'var(--accent-bright)' }"
                >
                  {{ t('បង្ហាញទំព័រទាំង ៨៤ ឡើងវិញ (ទំព័រ ០១ ដល់ ៨៤)', 'Show all 84 pages (Pages 01 to 84)') }}
                </button>
              </p>
            </div>
          </div>

          <!-- Floating bottom close button for quick thumb access on mobile -->
          <div class="menu-floating-bottom sm:hidden">
            <button
              type="button"
              class="menu-floating-close-btn"
              @click="closeMenu"
              :aria-label="t('បិទម៉ឺនុយ', 'Close Menu')"
            >
              <span>✕</span>
              <span>{{ t('បិទម៉ឺនុយ (៨៤ ទំព័រ)', 'Close Menu (84 Pages)') }}</span>
            </button>
          </div>
        </div>
      </div>
    </transition>

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
import { computed, nextTick, onBeforeUnmount, onErrorCaptured, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTheme } from './composables/useTheme'
import { useLanguage } from './composables/useLanguage'
import { useFontSize } from './composables/useFontSize'
import { useFont } from './composables/useFont'
import { useContrast } from './composables/useContrast'
import { usePwaUpdate } from './composables/usePwaUpdate'
import { saveScroll, clearSavedScroll } from './composables/useReadingProgress'
import { BASE_URL, ONESIGNAL_APP_ID } from './config'
import { useNotifications } from './composables/useNotifications'

const route = useRoute()
const router = useRouter()

function onNavigationDone(to, from) {
  if (!to.hash) {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    nextTick(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    })
  }
}
router.afterEach(onNavigationDone)

const { theme, toggleTheme } = useTheme()
const { lang, t, setLang } = useLanguage()
const { needRefresh, reload } = usePwaUpdate()
const { contrast, toggleContrast } = useContrast()
const { enabled: notifEnabled, supported: notifSupported, configured: notifConfigured, permissionDenied: notifDenied, enable: enableNotif, disable: disableNotif, refresh: refreshNotif } = useNotifications(ONESIGNAL_APP_ID)

function retryNotif() {
  refreshNotif()
}

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

const menuSearchQuery = ref('')
const menuSearchInputRef = ref(null)

const selectedMenuCategory = ref('all')
const menuCategories = [
  { id: 'all', km: 'ទាំងអស់', en: 'All' },
  { id: 'gems', km: '💎 រតនៈ & សំណួរ', en: '💎 Gems & Q&A' },
  { id: 'abhidhamma', km: '🧠 អភិធម្ម', en: '🧠 Abhidhamma' },
  { id: 'practice', km: '🧘 បដិបត្តិ & សមាធិ', en: '🧘 Practice' },
  { id: 'sutta', km: '📜 ព្រះសូត្រ & ធម៌', en: '📜 Suttas' },
  { id: 'life', km: '🪷 ជីវិត & សង្គម', en: '🪷 Life' },
]

const menuCategoryRoutes = {
  gems: ['/tiktok-studio', '/my-gems', '/questions', '/rupa-qa', '/cetasika-qa', '/stories', '/quiz', '/glossary', '/jataka', '/wealth', '/apayamukha', '/similes', '/lay-disciples', '/buddha-guna', '/punnakiriya', '/ariyadhana', '/tilakkhana', '/kalyanamitta', '/triple-gem-guna'],
  abhidhamma: ['/abhidhamma', '/lobha-mula-citta', '/paccaya', '/death-and-rebirth', '/citta-matrix', '/citta-vithi', '/merit-transfer', '/cosmology', '/nibbana', '/sangaha', '/ayatana', '/kammpatha', '/tilakkhana', '/khandha', '/jhana'],
  practice: ['/meditation', '/chanting', '/daily', '/recollections', '/timer', '/anapanasati', '/vipassana-nana', '/metta', '/asubha', '/kammatthana', '/indriya', '/walking-meditation', '/bedtime-dhamma', '/uposatha', '/nivarana', '/buddha-guna', '/punnakiriya', '/mindful-work', '/satipatthana', '/bojjhanga', '/jhana', '/abhinha', '/triple-gem-guna'],
  sutta: ['/core', '/kamma', '/ethics', '/suttas', '/gathas', '/ariya', '/realms', '/bodhipakkhiya', '/magga', '/dhutanga', '/tipitaka', '/barami', '/sangayana', '/mangala', '/ariyadhana', '/kammpatha', '/similes', '/tilakkhana', '/khandha', '/appamada', '/sacca-kicca', '/satipatthana', '/bojjhanga', '/kalyanamitta', '/abhinha'],
  life: ['/', '/life', '/sangha', '/calendar', '/dhamma-aid', '/holy-sites', '/disciples', '/prophecy', '/rajadhamma', '/family', '/ceremonies', '/wealth', '/lokadhamma', '/apayamukha', '/brahmavihara', '/mangala', '/sangahavatthu', '/agati', '/mindful-work', '/katannu', '/lay-disciples', '/appamada', '/kalyanamitta', '/abhinha'],
}

function getCategoryCount(catId) {
  if (catId === 'all') return nav.length
  return (menuCategoryRoutes[catId] || []).length
}

const filteredMenuNav = computed(() => {
  let list = nav
  if (selectedMenuCategory.value !== 'all') {
    const allowed = menuCategoryRoutes[selectedMenuCategory.value] || []
    list = list.filter(n => allowed.includes(n.to))
  }
  const q = menuSearchQuery.value.trim().toLowerCase()
  if (!q) return list
  return list.filter(n => {
    return n.km.toLowerCase().includes(q) ||
      (n.descKm && n.descKm.toLowerCase().includes(q)) ||
      n.kmShort.toLowerCase().includes(q) ||
      n.en.toLowerCase().includes(q) ||
      n.num.toLowerCase().includes(q)
  })
})
const desktopNavRef = ref(null)

function scrollActiveTabIntoView() {
  const el = desktopNavRef.value
  if (!el) return
  const active = el.querySelector('a.active')
  if (!active) return
  const cRect = el.getBoundingClientRect()
  const aRect = active.getBoundingClientRect()
  const currentLeft = el.scrollLeft
  const desiredLeft = currentLeft + (aRect.left - cRect.left) - (cRect.width / 2) + (aRect.width / 2)
  el.scrollTo({ left: desiredLeft, behavior: 'smooth' })
}

function onSettingsGlobalClick(e) {
  if (!settingsOpen.value) return
  if (settingsRef.value && settingsRef.value.contains(e.target)) return
  if (settingsBtnRef.value && settingsBtnRef.value.contains(e.target)) return
  settingsOpen.value = false
}

const nav = [
  { to: '/', km: 'ទំព័រដើម', descKm: 'ពន្លឺព្រះធម៌សម្រាប់ជីវិតរស់នៅ', kmShort: 'ដើម', en: 'Home', num: '០១' },
  { to: '/core', km: 'ធម៌មូលដ្ឋាន', descKm: 'អរិយសច្ច ៤ ឫសគល់ទុក្ខ & មគ្គ ៨', kmShort: 'មូលដ្ឋាន', en: 'Core Teachings', num: '០២' },
  { to: '/abhidhamma', km: 'អភិធម្ម', descKm: 'បរមត្ថធម៌ ៤ & រូបវិទ្យាកង់ទិច', kmShort: 'អភិធម្ម', en: 'Abhidhamma', num: '០៣' },
  { to: '/kamma', km: 'កម្ម និងផល', descKm: 'ច្បាប់កម្មផល & យន្តការអហោសិកម្ម', kmShort: 'កម្មផល', en: 'Kamma & Result', num: '០៤' },
  { to: '/ethics', km: 'សីល និងបារមី', descKm: 'សីល ៥ សីល ៨ & បារមី ១០', kmShort: 'សីល', en: 'Ethics & Perfections', num: '០៥' },
  { to: '/meditation', km: 'សមាធិ', descKm: 'សមថភាវនា & ឈានទាំង ៨ កម្រិត', kmShort: 'សមាធិ', en: 'Meditation & Jhāna', num: '០៦' },
  { to: '/suttas', km: 'ព្រះសូត្រ', descKm: 'ព្រះសូត្រល្បីៗ ១២ & ធម្មចក្ក', kmShort: 'សូត្រ', en: '12 Essential Suttas', num: '០៧' },
  { to: '/life', km: 'ជីវប្រវត្តិ', descKm: 'ព្រះពុទ្ធប្រវត្តិ សិទ្ធត្ថ គោតម', kmShort: 'ជីវិតព្រះពុទ្ធ', en: 'Life of the Buddha', num: '០៨' },
  { to: '/gathas', km: 'គាថាព្រះធម៌', descKm: 'គាថាធម្មបទ & ពិចារណាដាស់តឿន', kmShort: 'គាថា', en: 'Dhamma Gāthā', num: '០៩' },
  { to: '/chanting', km: 'ធម៌សូត្រប្រចាំថ្ងៃ', descKm: 'សូត្របន្ទូល ១២ បទ & ភាសាបាលី', kmShort: 'សូត្រមន្ត', en: 'Daily Chanting', num: '១០' },
  { to: '/glossary', km: 'វចនានុក្រមធម៌', descKm: 'វចនានុក្រមពាក្យគន្លឹះ ខ្មែរ-អង់គ្លេស', kmShort: 'វចនានុក្រម', en: 'Dhamma Glossary', num: '១១' },
  { to: '/stories', km: 'រឿងល្បីៗ', descKm: 'រឿងព្រះពុទ្ធ និងអរហន្ត ១០ រឿង', kmShort: 'រឿង', en: '10 Great Stories', num: '១២' },
  { to: '/questions', km: 'សំណួរ–ចម្លើយ ៤៤', descKm: '៤៤ សំណួរ–ចម្លើយដែលគេសួរញឹកញាប់', kmShort: 'សំណួរ', en: '44 Q&A', num: '១៣' },
  { to: '/rupa-qa', km: 'សំណួររូបបរមត្ថ', descKm: 'រូបបរមត្ថ ២៨ & រូបកលាប', kmShort: 'រូបបរមត្ថ', en: 'Rūpa Paramattha Q&A', num: '១៤' },
  { to: '/cetasika-qa', km: 'សំណួរចេតសិកបរមត្ថ', descKm: 'ចេតសិក ៥២ & ដំណើរផ្លូវចិត្ត', kmShort: 'ចេតសិក', en: 'Cetasika Paramattha Q&A', num: '១៥' },
  { to: '/lobha-mula-citta', km: 'លោភមូលចិត្ត ៨ ដួង', descKm: '១០៩ សំណួរ–ចម្លើយចិត្តបាបលោភៈ', kmShort: 'លោភមូលចិត្ត', en: '8 Lobha Mūla Citta', num: '១៦' },
  { to: '/paccaya', km: 'បដិច្ចសមុប្បាទ', descKm: 'បដិច្ចសមុប្បាទ ១២ & បច្ច័យ ២៤', kmShort: 'បដិច្ចសមុប្បាទ', en: 'Dependent Origination', num: '១៧' },
  { to: '/sangha', km: 'ជីវិតព្រះសង្ឃ', descKm: 'វិន័យសង្ឃ ជីវិតបព្វជិត & បុណ្យទាន', kmShort: 'ព្រះសង្ឃ', en: 'Monastic Life & Sangha', num: '១៨' },
  { to: '/daily', km: 'បដិបត្តិប្រចាំថ្ងៃ', descKm: 'បដិបត្តិធម៌ប្រចាំថ្ងៃ & ពិធីបុណ្យ', kmShort: 'ប្រចាំថ្ងៃ', en: 'Daily Practice', num: '១៩' },
  { to: '/recollections', km: 'អនុស្សតិ', descKm: 'អនុស្សតិ ១០ & ពិចារណាប្រចាំថ្ងៃ', kmShort: 'អនុស្សតិ', en: '10 Recollections', num: '២០' },
  { to: '/ariya', km: 'អរិយបុគ្គល', descKm: 'អរិយបុគ្គល ៨ ពួក សោតាបន្ន-អរហន្ត', kmShort: 'អរិយ', en: '8 Noble Persons', num: '២១' },
  { to: '/calendar', km: 'បដិទិនពុទ្ធសាសនា', descKm: 'កាលវិភាគថ្ងៃសីល & បុណ្យប្រពៃណី', kmShort: 'បដិទិន', en: 'Buddhist Calendar', num: '២២' },
  { to: '/realms', km: 'ស្ថានទាំង ៣១ ភព', descKm: 'អបាយភូមិ ៤ មនុស្ស សួគ៌ ព្រហ្ម', kmShort: '៣១ ភព', en: '31 Cosmic Realms', num: '២៣' },
  { to: '/bodhipakkhiya', km: 'ពោធិបក្ខិយធម៌ ៣៧', descKm: 'ធម៌ជាជំនួយដល់ការត្រាស់ដឹង ៣៧', kmShort: 'ពោធិបក្ខិយ', en: '37 Awakening Factors', num: '២៤' },
  { to: '/timer', km: 'នាឡិកាសមាធិ', descKm: 'កំណត់ពេលភាវនា & សំឡេងកណ្ដឹង', kmShort: 'នាឡិកាសមាធិ', en: 'Meditation Timer', num: '២៥' },
  { to: '/quiz', km: 'ល្បងប្រាជ្ញាធម៌', descKm: 'សំណួរប្រលងចំណេះដឹងព្រះធម៌', kmShort: 'ល្បងប្រាជ្ញា', en: 'Dhamma Quiz Challenge', num: '២៦' },
  { to: '/death-and-rebirth', km: 'ដំណើរនៃការស្លាប់-បដិសន្ធិ', descKm: 'មរណាសន្នវិថី & កម្មឆ្លងជាតិ', kmShort: 'ស្លាប់-បដិសន្ធិ', en: 'Death & Rebirth Process', num: '២៧' },
  { to: '/anapanasati', km: 'អានាបានសតិ ១៦ ដំណាក់កាល', descKm: 'ដង្ហើមចេញចូល ១៦ ដំណាក់កាល', kmShort: 'អានាបានសតិ', en: '16 Steps of Anapanasati', num: '២៨' },
  { to: '/citta-matrix', km: 'ផែនទីចិត្ត និងចេតសិក', descKm: 'តារាងចិត្ត ៨៩/១២១ & ចេតសិក ៥២', kmShort: 'ផែនទីចិត្ត', en: 'Citta & Cetasika Matrix', num: '២៩' },
  { to: '/vipassana-nana', km: 'វិបស្សនាញាណ ១៦ ដំណាក់កាល', descKm: 'លំដាប់ញាណវិបស្សនា ១៦ កម្រិត', kmShort: 'វិបស្សនាញាណ', en: '16 Stages of Vipassanā', num: '៣០' },
  { to: '/dhamma-aid', km: 'ឱសថធម៌សង្គ្រោះអារម្មណ៍', descKm: 'រំងាប់កំហឹង ព្រួយបារម្ភ & ទុក្ខសោក', kmShort: 'សង្គ្រោះអារម្មណ៍', en: 'Dhamma Emotional Aid', num: '៣១' },
  { to: '/metta', km: 'មេត្តាភាវនា ១០ ទិស', descKm: 'ផ្សាយមេត្តាធម៌ទូទាំង ១០ ទិស', kmShort: 'មេត្តា ១០ ទិស', en: 'Mettā 10 Directions', num: '៣២' },
  { to: '/citta-vithi', km: 'ដំណើរវិថីចិត្ត តាមទ្វារទាំង ៦', descKm: 'យន្តការដឹងអារម្មណ៍តាមទ្វារ ៦', kmShort: 'វិថីចិត្ត', en: 'Citta Vīthi Simulator', num: '៣៣' },
  { to: '/magga', km: 'មគ្គ ៨ ជាក់ស្តែងក្នុងជីវិត', descKm: 'អនុវត្តអរិយមគ្គ ៨ ក្នុងជីវិតប្រចាំថ្ងៃ', kmShort: 'មគ្គ ៨', en: 'Noble Eightfold Path', num: '៣៤' },
  { to: '/holy-sites', km: 'ទីសក្ការៈបូជាសំខាន់ទាំង ៤', descKm: 'សង្វេជនីយដ្ឋានទាំង ៤ ក្នុងឥណ្ឌា', kmShort: 'សង្វេជនីយដ្ឋាន', en: '4 Sacred Holy Sites', num: '៣៥' },
  { to: '/disciples', km: 'ព្រះអរហន្តសាវ័ក & ឯតទគ្គៈ', descKm: 'ព្រះសាវ័កឆ្នើម ៤០ អង្គ & អរហន្តី', kmShort: 'អរហន្តសាវ័ក', en: 'Great Disciples & Etadagga', num: '៣៦' },
  { to: '/dhutanga', km: 'ធុតង្គ ១៣ ប្រការ', descKm: 'វត្ថបដិបត្តិដុសខាត់កិលេស ១៣', kmShort: 'ធុតង្គ ១៣', en: '13 Dhutanga Practices', num: '៣៧' },
  { to: '/prophecy', km: 'ពុទ្ធព្យាករណ៍ & ព្រះមេត្រី', descKm: 'អាយុព្រះសាសនា ៥០០០ វស្សា & អនាគត', kmShort: 'ពុទ្ធព្យាករណ៍', en: '5,000-Yr Prophecy & Metteyya', num: '៣៨' },
  { to: '/rajadhamma', km: 'ទសពិធរាជធម៌ ១០', descKm: 'ធម៌ដឹកនាំ ១០ & អបរិហានិយធម៌ ៧', kmShort: 'ទសពិធរាជធម៌', en: '10 Royal Virtues of Leadership', num: '៣៩' },
  { to: '/cosmology', km: 'កប្ប ចក្រវាឡ & អគ្គញ្ញសូត្រ', descKm: 'វដ្តនៃចក្រវាឡ & ដើមកំណើតមនុស្ស', kmShort: 'ចក្រវាឡ', en: 'Cosmology, Kalpas & Origins', num: '៤០' },
  { to: '/merit-transfer', km: 'យន្តការឧទ្ទិសកុសល', descKm: 'ការឧទ្ទិសបុណ្យ & បរទត្តូបជីវីប្រេត', kmShort: 'ឧទ្ទិសបុណ្យ', en: 'Merit Dedication & Pattidāna', num: '៤១' },
  { to: '/my-gems', km: 'កម្រងធម៌រតនៈ & សំណួរពិសេស', descKm: '២៤ ធម៌រតនៈកំពូល & សំណួរពិស្តារ', kmShort: 'ធម៌រតនៈ ២៤', en: '24 Dhamma Gems', num: '៤២' },
  { to: '/tiktok-studio', km: 'TikTok AI Studio', descKm: 'បង្កើត Slide TikTok ស្វ័យប្រវត្តិតាមរយៈ Gemini AI', kmShort: 'TikTok Studio', en: 'TikTok AI Studio', num: '៤៣' },
  { to: '/nibbana', km: 'ព្រះនិព្វានបរមត្ថ', descKm: 'បរមត្ថទី ៤ ទីរំលត់ទុក្ខ & អសង្ខតធម៌', kmShort: 'និព្វាន', en: 'Nibbāna Paramattha', num: '៤៤' },
  { to: '/tipitaka', km: 'ព្រះត្រៃបិដក ១១០ ភាគ', descKm: 'រចនាសម្ព័ន្ធបិដកខ្មែរ វិន័យ សូត្រ អភិធម្ម', kmShort: 'ត្រៃបិដក ១១០', en: '110 Tipitaka Volumes', num: '៤៥' },
  { to: '/jataka', km: 'ទសជាតក (មហាជាតក ១០)', descKm: 'តែ-ជ-សុ-នេ-ម-ភូ-ច-នា-វិ-វេ & បារមី ១០', kmShort: 'ទសជាតក', en: '10 Great Jātakas', num: '៤៦' },
  { to: '/family', km: 'គ្រួសារធម៌ & ទិស ៦', descKm: 'សិង្គាលកសូត្រ ទិស ៦ & សមជីវីធម៌ ៤', kmShort: 'គ្រួសារធម៌', en: 'Family Dhamma & 6 Directions', num: '៤៧' },
  { to: '/sangaha', km: 'អភិធម្មត្ថសង្គហៈ ៩ បរិច្ឆេទ', descKm: 'ក្បួនរៀនអភិធម្មសង្ខេប ៩ ជំពូក ព្រះអនុរុទ្ធ', kmShort: 'សង្គហៈ ៩ បរិច្ឆេទ', en: 'Abhidhammattha Saṅgaha', num: '៤៨' },
  { to: '/asubha', km: 'អាការៈ ៣២ & អសុភ ១០', descKm: 'កាយគតាសតិ តចបញ្ចកៈ & សាកសព ១០', kmShort: 'អាការៈ ៣២', en: '32 Body Parts & 10 Asubha', num: '៤៩' },
  { to: '/ceremonies', km: 'ពិធីបុណ្យខ្មែរ & ក្បួនប្រគេនទាន', descKm: 'កឋិន ភ្ជុំបិណ្ឌ វិសាខ & វិន័យប្រគេនចង្ហាន់-បច្ច័យ', kmShort: 'បុណ្យខ្មែរ', en: 'Khmer Ceremonies & Offerings', num: '៥០' },
  { to: '/wealth', km: 'ទ្រព្យសម្បត្តិធម៌ & ទិដ្ឋធម្មិកត្ថ ៤', descKm: 'ធម៌នាំឱ្យមានបាន ៤ យ៉ាង & ក្បួនបែងចែកទ្រព្យ ៤ ភាគ', kmShort: 'ទ្រព្យធម៌', en: 'Buddhist Wealth & Success', num: '៥១' },
  { to: '/lokadhamma', km: 'លោកធម៌ ៨ ប្រការ', descKm: 'មានលាភ-បាត់លាភ យស-អយស សរសើរ-និន្ទា សុខ-ទុក្ខ', kmShort: 'លោកធម៌ ៨', en: '8 Worldly Winds', num: '៥២' },
  { to: '/apayamukha', km: 'អបាយមុខ ៦ ប្រការ', descKm: 'មាត់ច្រកនៃសេចក្តីវិនាស & លេស ៦ របស់អ្នកខ្ជិល', kmShort: 'អបាយមុខ ៦', en: '6 Paths to Ruin', num: '៥៣' },
  { to: '/kammatthana', km: 'កម្មដ្ឋាន ៤០ & ចរិត ៦', descKm: 'ក្បួនជ្រើសរើសអារម្មណ៍សមាធិឱ្យត្រូវនឹងចរិតទាំង ៦', kmShort: 'កម្មដ្ឋាន ៤០', en: '40 Meditation Subjects', num: '៥៤' },
  { to: '/indriya', km: 'ឥន្ទ្រិយ ៥ & ពល ៥', descKm: 'ក្បួនថ្លឹងសទ្ធា-បញ្ញា សមាធិ-វីរិយៈ ដោយមានសតិជាមេដឹកនាំ', kmShort: 'ឥន្ទ្រិយ ៥', en: '5 Faculties & Powers', num: '៥៥' },
  { to: '/walking-meditation', km: 'ការដើរចង្ក្រម & ឥរិយាបថ ៤', descKm: 'ក្បួនលើក-ឈាន-ដាក់ អានិសង្ស ៥ & សម្បជញ្ញៈ ៤', kmShort: 'ដើរចង្ក្រម', en: 'Walking Meditation', num: '៥៦' },
  { to: '/brahmavihara', km: 'ព្រហ្មវិហារធម៌ ៤ & សត្រូវជិត-ឆ្ងាយ', descKm: 'មេត្តា ករុណា មុទិតា ឧបេក្ខា & កម្ចាត់តណ្ហានិងការច្រណែន', kmShort: 'ព្រហ្មវិហារ ៤', en: '4 Sublime States', num: '៥៧' },
  { to: '/bedtime-dhamma', km: 'ធម៌មុនចូលគេង & សមាធិលើគ្រែ', descKm: 'សំពះព្រះ សុំខមាទោស ផ្សាយមេត្តា អានិសង្ស ១១ & សីហសេយ្យាសន៍', kmShort: 'ធម៌មុនគេង', en: 'Bedtime Dhamma & Sleep', num: '៥៨' },
  { to: '/barami', km: 'ព្រះបារមី ៣០ ទស្ស', descKm: 'បារមី ១០ ក្នុង ៣ កម្រិត ៖ សាមញ្ញ ឧបបារមី បរមត្ថបារមី', kmShort: 'បារមី ៣០', en: '30 Perfections', num: '៥៩' },
  { to: '/ayatana', km: 'អាយតនៈ ១២ & ធាតុ ១៨', descKm: 'ទ្វារ ៦ អារម្មណ៍ ៦ វិញ្ញាណ ៦ & យន្តការកាត់ផ្តាច់តណ្ហា', kmShort: 'អាយតនៈ & ធាតុ', en: '12 Bases & 18 Elements', num: '៦០' },
  { to: '/sangayana', km: 'កិច្ចសង្គាយនាទាំង ៦ លើក', descKm: 'ប្រវត្តិនៃការផ្ទៀងផ្ទាត់ និងចារឹកព្រះត្រៃបិដក ២៥០០ ឆ្នាំ', kmShort: 'សង្គាយនា ៦', en: '6 Buddhist Councils', num: '៦១' },
  { to: '/uposatha', km: 'ឧបោសថសីល (សីល ៨) & សីល ១០', descKm: 'ក្បួនរស់នៅស្អាតដូចព្រះអរហន្ត ១ ថ្ងៃ ១ យប់ & អានិសង្សធំធេង', kmShort: 'ឧបោសថសីល', en: 'Uposatha 8 & 10 Precepts', num: '៦២' },
  { to: '/nivarana', km: 'នីវរណធម៌ ៥ យ៉ាង', descKm: 'ឧបសគ្គរារាំងចិត្តក្នុងសមាធិ ឧបមាទឹក ៥ បែប & វិធីកម្ចាត់', kmShort: 'នីវរណធម៌', en: '5 Hindrances & Antidotes', num: '៦៣' },
  { to: '/buddha-guna', km: 'ពុទ្ធគុណ ៩ ប្រការ (ឥតិបិសោ)', descKm: 'គុណសម្បត្តិ ៩ របស់ព្រះពុទ្ធ អានុភាព & អានិសង្សពុទ្ធានុស្សតិ', kmShort: 'ពុទ្ធគុណ ៩', en: '9 Qualities of the Buddha', num: '៦៤' },
  { to: '/mangala', km: 'មង្គល ៣៨ ប្រការ (មង្គលសូត្រ)', descKm: 'ជណ្តើរជីវិតឆ្ពោះទៅរកសិរីសួស្តី ១០ ថ្នាក់ & ការពារសន្តិភាព', kmShort: 'មង្គល ៣៨', en: '38 Blessings (Mangala)', num: '៦៥' },
  { to: '/sangahavatthu', km: 'សង្គហវត្ថុ ៤ ប្រការ', descKm: 'ធម៌ចងចិត្តមនុស្ស ទាន បិយវាចា អត្ថចរិយា & សមានត្តតា', kmShort: 'សង្គហវត្ថុ ៤', en: '4 Bases of Solidarity', num: '៦៦' },
  { to: '/agati', km: 'អគតិ ៤ យ៉ាង', descKm: 'មាគ៌ាលម្អៀងព្រោះ ស្រឡាញ់ ខឹង ល្ងង់ ខ្លាច & ឧបមាព្រះច័ន្ទ', kmShort: 'អគតិ ៤', en: '4 Corrupt Biases (Agati)', num: '៦៧' },
  { to: '/mindful-work', km: 'ធម៌នៅកន្លែងធ្វើការ & មនុស្សពុល', descKm: 'សតិនៅតុធ្វើការ & ក្បួនទប់ទល់មនុស្សពុល ៥ ប្រភេទក្នុងក្រុម', kmShort: 'ធម៌ការងារ', en: 'Mindful Work & Toxic People', num: '៦៨' },
  { to: '/punnakiriya', km: 'បុណ្យកិរិយាវត្ថុ ១០ ប្រការ', descKm: 'វិធីសាងបុណ្យ ១០ បែប ដោយមិនចាំបាច់មានលុយច្រើន', kmShort: 'បុណ្យកិរិយា ១០', en: '10 Bases of Merit Action', num: '៦៩' },
  { to: '/ariyadhana', km: 'អរិយទ្រព្យ ៧ ប្រការ', descKm: 'កំពូលទ្រព្យបរិសុទ្ធតាមឆ្លងភព សទ្ធា សីល ហិរិ ឱត្តប្បៈ បញ្ញា', kmShort: 'អរិយទ្រព្យ ៧', en: '7 Noble Treasures', num: '៧០' },
  { to: '/katannu', km: 'កតញ្ញូតាធម៌ & គុណមាតាបិតា', descKm: 'ឪពុកម្តាយជាព្រះព្រហ្ម-អរហន្ត & វិធីសងគុណ ៤ បែបឱ្យរួចបំណុល', kmShort: 'កតញ្ញូ & មាតាបិតា', en: 'Filial Piety & Parents', num: '៧១' },
  { to: '/kammpatha', km: 'កុសលកម្មបថ ១០ & អកុសលកម្មបថ', descKm: 'មាគ៌ាកម្មស-កម្មខ្មៅ តាមទ្វារ ៣ ៖ កាយកម្ម ៣ វចីកម្ម ៤ មនោកម្ម ៣', kmShort: 'កម្មបថ ១០', en: '10 Courses of Action', num: '៧២' },
  { to: '/similes', km: 'កំពូលឧបមាធម៌ទាំង ៦ ក្នុងបិដក', descKm: 'ព្រួញពិស ក្បូនឆ្លងទឹក អំបិលមួយក្តាប់ អណ្តើកខ្វាក់ ផ្ទះឆេះ ឈូក ៤ ជាន់', kmShort: 'ឧបមាធម៌ ៦', en: '6 Master Tipitaka Similes', num: '៧៣' },
  { to: '/lay-disciples', km: 'ឧបាសក-ឧបាសិកាឆ្នើមសម័យពុទ្ធកាល', descKm: 'អនាថបិណ្ឌិកសេដ្ឋី នាងវិសាខា គ្រូពេទ្យជីវក & គិហិបតិចិត្ត', kmShort: 'ឧបាសកឆ្នើម', en: 'Great Lay Disciples', num: '៧៤' },
  { to: '/tilakkhana', km: 'ទិលក្ខណៈ ៣ (អនិច្ចំ ទុក្ខំ អនត្តា)', descKm: 'កំពូលសច្ចធម៌នៃធម្មជាតិ ភាពមិនទៀង ទ្រាំបានពិបាក & គ្មានអត្តា', kmShort: 'ទិលក្ខណៈ ៣', en: '3 Universal Characteristics', num: '៧៥' },
  { to: '/khandha', km: 'បញ្ចក្ខន្ធ ៥ & ឧបមាដុំពពុះទឹក', descKm: 'គ្រឿងផ្សំនៃជីវិត រូប វេទនា សញ្ញា សង្ខារ វិញ្ញាណ & ឧបាទានក្ខន្ធ', kmShort: 'បញ្ចក្ខន្ធ ៥', en: '5 Aggregates (Khandha)', num: '៧៦' },
  { to: '/appamada', km: 'អប្បមាទធម៌ & ព្រះបច្ឆិមវាចា', descKm: 'ស្នាមជើងដំរីនៃព្រះធម៌ ៨៤,០០០ ធម្មក្ខន្ធ ផ្លូវមិនស្លាប់ vs ផ្លូវស្លាប់', kmShort: 'អប្បមាទធម៌', en: 'Appamada & Final Words', num: '៧៧' },
  { to: '/sacca-kicca', km: 'អរិយសច្ច ៤ & កិច្ច ១២ ប្រការ', descKm: 'រង្វង់ ៣ នៃពុទ្ធបញ្ញា (តិបរិវដ្តំ) បរិញ្ញេយ្យ បហាតព្វ សច្ឆិកាតព្វ ភាវេតព្វ', kmShort: 'កិច្ច ១២ ប្រការ', en: '4 Truths & 12 Tasks', num: '៧៨' },
  { to: '/satipatthana', km: 'មហាសតិបដ្ឋាន ៤ (ឯកាយនោ)', descKm: 'មាគ៌ាតែមួយគត់ដើម្បីរំលត់ទុក្ខ កាយានុបស្សនា វេទនា ចិត្ត ធម៌', kmShort: 'សតិបដ្ឋាន ៤', en: '4 Foundations of Mindfulness', num: '៧៩' },
  { to: '/bojjhanga', km: 'ពោជ្ឈង្គ ៧ & ឱសថព្យាបាលរោគ', descKm: 'កត្តានៃការត្រាស់ដឹង ៧ សតិ ធម្មវិចយៈ វីរិយៈ បីតិ បស្សទ្ធិ សមាធិ ឧបេក្ខា', kmShort: 'ពោជ្ឈង្គ ៧', en: '7 Factors of Awakening', num: '៨០' },
  { to: '/kalyanamitta', km: 'កល្យាណមិត្ត (មិត្តពិត ៤ vs ក្លែង ៤)', descKm: 'មិត្តល្អជាជីវិតបរិសុទ្ធទាំងមូល & ក្បួនពិនិត្យមនុស្ស ៨ ពួកក្នុងសង្គម', kmShort: 'កល្យាណមិត្ត', en: 'True vs False Friends', num: '៨១' },
  { to: '/jhana', km: 'រូបឈាន ៤ ពិស្តារ & ឧបមា ៤', descKm: 'កម្រិតសមាធិកំពូល ឈានង្គ ៥ ឧបមាសាប៊ូ បឹងទឹក ផ្កាឈូក & សំពត់ស', kmShort: 'រូបឈាន ៤', en: '4 Rupa Jhanas', num: '៨២' },
  { to: '/triple-gem-guna', km: 'ធម្មគុណ ៦ & សង្ឃគុណ ៩', descKm: 'បំពេញកម្រងរតនត្រ័យគុណ ស្វាក្ខាតោ សន្ទិដ្ឋិកោ & សុបដិបន្នោ', kmShort: 'ធម្មគុណ & សង្ឃគុណ', en: 'Dhamma & Sangha Virtues', num: '៨៣' },
  { to: '/abhinha', km: 'អភិណ្ហបច្ចវេក្ខណៈ ៥ យ៉ាង', descKm: 'ធម៌ពិចារណារាល់ថ្ងៃដើម្បីកម្ចាត់ការស្រវឹងវ័យ សុខភាព ជីវិត & កម្មសកតា', kmShort: 'អភិណ្ហបច្ចវេក្ខណៈ', en: '5 Daily Contemplations', num: '៨៤' },
]

const routeMeta = computed(() => route.name === 'home' ? '/' : route.path)

const bottomTabs = [
  { id: 'home', to: '/', km: 'ដើម', en: 'Home', icon: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z"/></svg>' },
  { id: 'dhamma', to: '/core', km: 'ធម៌', en: 'Dhamma', icon: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.5C10.5 4.8 8 4.5 5 4.8c-.8.1-1.2.9-1 1.8v11c-.2.9.2 1.7 1 1.8 3 .3 5.5 0 7-1.8m0-12.1c1.5-1.7 4-2 7-1.7.8.1 1.2.9 1 1.8v11c.2.9-.2 1.7-1 1.8-3 .3-5.5 0-7-1.8m0-12.1v12"/></svg>' },
  { id: 'practice', to: '/meditation', km: 'បដិបត្តិ', en: 'Practice', icon: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-2.5 0-4 1.6-4 3.8 0 1.2.5 2.1 1.2 2.8C6.5 10.3 5 12.4 5 15c0 3 3 5.5 7 5.5s7-2.5 7-5.5c0-2.6-1.5-4.7-4.2-5.4.7-.7 1.2-1.6 1.2-2.8C16 4.6 14.5 3 12 3z"/></svg>' },
  { id: 'learn', to: '/glossary', km: 'សិក្សា', en: 'Learn', icon: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>' },
  { id: 'more', km: 'បន្ថែម', en: 'More', icon: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>' },
]

const tabRoutes = {
  home: ['/'],
  dhamma: ['/core', '/abhidhamma', '/kamma', '/ethics', '/suttas', '/gathas', '/paccaya', '/ariya', '/realms', '/bodhipakkhiya', '/death-and-rebirth', '/citta-vithi', '/magga', '/prophecy', '/rajadhamma', '/cosmology', '/nibbana', '/tipitaka', '/sangaha', '/family', '/ceremonies', '/lokadhamma', '/brahmavihara', '/barami', '/sangayana', '/mangala', '/sangahavatthu', '/agati', '/katannu', '/kammpatha', '/tilakkhana', '/khandha', '/appamada', '/sacca-kicca', '/satipatthana', '/triple-gem-guna'],
  practice: ['/meditation', '/chanting', '/daily', '/recollections', '/sangha', '/calendar', '/timer', '/anapanasati', '/vipassana-nana', '/metta', '/dhutanga', '/merit-transfer', '/asubha', '/kammatthana', '/indriya', '/walking-meditation', '/bedtime-dhamma', '/uposatha', '/nivarana', '/buddha-guna', '/punnakiriya', '/mindful-work', '/satipatthana', '/bojjhanga', '/jhana', '/abhinha', '/triple-gem-guna'],
  learn: ['/tiktok-studio', '/my-gems', '/glossary', '/stories', '/questions', '/life', '/rupa-qa', '/cetasika-qa', '/lobha-mula-citta', '/quiz', '/citta-matrix', '/dhamma-aid', '/holy-sites', '/disciples', '/jataka', '/wealth', '/apayamukha', '/ayatana', '/ariyadhana', '/similes', '/lay-disciples', '/tilakkhana', '/khandha', '/kalyanamitta'],
}

const activeTab = computed(() => {
  const cur = route.name === 'home' ? '/' : route.path
  for (const id in tabRoutes) if (tabRoutes[id].includes(cur)) return id
  return 'more'
})

const menuOpen = ref(false)
function openMenu() {
  menuOpen.value = !menuOpen.value
  menuSearchQuery.value = ''
  selectedMenuCategory.value = 'all'
  if (menuOpen.value) {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      nextTick(() => {
        menuSearchInputRef.value?.focus()
      })
    }
  } else {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = ''
    }
  }
}
function closeMenu() {
  menuOpen.value = false
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

watch(menuOpen, (val) => {
  if (typeof document !== 'undefined') {
    if (val) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

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
  '/rupa-qa': ['/abhidhamma', '/kamma', '/glossary'],
  '/cetasika-qa': ['/abhidhamma', '/rupa-qa', '/glossary'],
  '/lobha-mula-citta': ['/abhidhamma', '/cetasika-qa', '/glossary'],
  '/paccaya': ['/core', '/kamma', '/ariya'],
  '/sangha': ['/daily', '/ethics', '/core'],
  '/daily': ['/ethics', '/meditation', '/recollections'],
  '/recollections': ['/meditation', '/daily', '/chanting'],
  '/ariya': ['/core', '/paccaya', '/meditation', '/stories'],
  '/calendar': ['/daily', '/chanting', '/ethics'],
  '/realms': ['/kamma', '/core', '/abhidhamma'],
  '/bodhipakkhiya': ['/core', '/meditation', '/ariya'],
  '/timer': ['/meditation', '/chanting', '/daily'],
  '/quiz': ['/core', '/abhidhamma', '/questions'],
  '/disciples': ['/ariya', '/life', '/stories', '/sangha'],
  '/dhutanga': ['/sangha', '/meditation', '/ethics', '/daily'],
  '/prophecy': ['/life', '/suttas', '/cosmology', '/kamma'],
  '/rajadhamma': ['/ethics', '/core', '/suttas', '/daily'],
  '/cosmology': ['/realms', '/prophecy', '/kamma', '/suttas'],
  '/merit-transfer': ['/kamma', '/realms', '/daily', '/ethics'],
  '/my-gems': ['/questions', '/suttas', '/core', '/abhidhamma'],
  '/nibbana': ['/abhidhamma', '/core', '/vipassana-nana'],
  '/tipitaka': ['/suttas', '/abhidhamma', '/sangha'],
  '/jataka': ['/stories', '/ethics', '/life'],
  '/family': ['/daily', '/ethics', '/rajadhamma'],
  '/sangaha': ['/abhidhamma', '/citta-matrix', '/paccaya'],
  '/asubha': ['/anapanasati', '/meditation', '/vipassana-nana'],
  '/ceremonies': ['/calendar', '/daily', '/sangha', '/merit-transfer'],
  '/wealth': ['/family', '/ethics', '/apayamukha'],
  '/lokadhamma': ['/core', '/dhamma-aid', '/vipassana-nana'],
  '/apayamukha': ['/wealth', '/ethics', '/family'],
  '/kammatthana': ['/meditation', '/anapanasati', '/indriya'],
  '/indriya': ['/kammatthana', '/meditation', '/bodhipakkhiya'],
  '/walking-meditation': ['/meditation', '/daily', '/anapanasati'],
  '/brahmavihara': ['/metta', '/ethics', '/daily'],
  '/bedtime-dhamma': ['/chanting', '/daily', '/metta'],
  '/barami': ['/core', '/ethics', '/jataka'],
  '/ayatana': ['/abhidhamma', '/citta-vithi', '/paccaya'],
  '/sangayana': ['/tipitaka', '/sangha', '/prophecy'],
  '/uposatha': ['/calendar', '/ceremonies', '/ethics', '/daily'],
  '/nivarana': ['/kammatthana', '/meditation', '/anapanasati'],
  '/buddha-guna': ['/chanting', '/recollections', '/barami'],
  '/mangala': ['/ethics', '/family', '/core'],
  '/sangahavatthu': ['/family', '/rajadhamma', '/mindful-work'],
  '/agati': ['/rajadhamma', '/ethics', '/sangahavatthu'],
  '/mindful-work': ['/sangahavatthu', '/agati', '/dhamma-aid'],
  '/punnakiriya': ['/ethics', '/merit-transfer', '/ariyadhana'],
  '/ariyadhana': ['/wealth', '/punnakiriya', '/kammpatha'],
  '/katannu': ['/family', '/merit-transfer', '/ceremonies'],
  '/kammpatha': ['/kamma', '/ethics', '/ariyadhana'],
  '/similes': ['/suttas', '/stories', '/core'],
  '/lay-disciples': ['/disciples', '/wealth', '/stories'],
  '/tilakkhana': ['/core', '/khandha', '/vipassana-nana'],
  '/khandha': ['/tilakkhana', '/abhidhamma', '/ayatana'],
  '/appamada': ['/core', '/magga', '/prophecy'],
  '/sacca-kicca': ['/core', '/magga', '/vipassana-nana'],
  '/satipatthana': ['/anapanasati', '/vipassana-nana', '/meditation'],
  '/bojjhanga': ['/satipatthana', '/indriya', '/dhamma-aid'],
  '/kalyanamitta': ['/family', '/mangala', '/mindful-work'],
  '/jhana': ['/meditation', '/anapanasati', '/kammatthana'],
  '/triple-gem-guna': ['/buddha-guna', '/chanting', '/recollections'],
  '/abhinha': ['/death-and-rebirth', '/kamma', '/recollections'],
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
  // No need to save scroll offset so pages always start cleanly from the top
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
onMounted(() => {
  clearSavedScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onSettingsGlobalClick)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
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

watch(() => route.path, () => {
  if (settingsOpen.value) settingsOpen.value = false
  if (menuOpen.value) menuOpen.value = false
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
  if (hasError.value) hasError.value = false
})

const siteName = t('ព្រះធម៌ អត្ថបទសម្រាប់ជីវិត', 'Buddha Dhamma — Dhamma for Life')
const descrMap = {
  home: ['ពន្យល់ពាក្យព្រះសម្មាសម្ពុទ្ធ ជាខ្មែរ និងអង់គ្លេស។', 'The Buddha\'s teachings explained in Khmer and English.'],
  core: ['អរិយសច្ច ៤ ឫសគល់នៃទុក្ខ និងវិធីរំលត់កិលេស ផ្លូវ ៨។', 'Four Noble Truths, Roots of Suffering, Extinguishing Defilements, Eightfold Path.'],
  abhidhamma: ['ចិត្ត ចេតសិក រូប ២៨ រូបកលាប និងការប្រៀបធៀបរូបវិទ្យាកង់ទិច។', 'Citta, cetasika, 28 rūpa, rūpa-kalāpa and quantum physics comparison.'],
  kamma: ['កម្ម វិបាក កុសល អកុសល និងយន្តការអហោសិកម្ម ៤ យ៉ាង។', 'Kamma, result, wholesome, unwholesome actions, and 4 Ahosi-kamma mechanisms.'],
  ethics: ['សីល ៥ បារមី ១០ និងការប្រព្រឹត្តល្អ។', 'Five precepts, the ten perfections, and right conduct.'],
  meditation: ['សមាធិ ឈានទាំង ៨ កម្រិត របៀបបដិបត្តិ និងភពកំណើតព្រហ្មលោក។', 'Meditation, 8 Jhānas, attainment steps, and rebirth in Brahma realms.'],
  suttas: ['ព្រះសូត្រ ១២ ដ៏ល្បី ជាមួយភាសាបាលី និងពន្យល់ (ធម្មចក្ក, សឹម្សបា, ចូឡមាលុង្ក្យោវាទ...)។', 'Twelve famous suttas with Pali and explanations (Dhammacakka, Siṃsapā, Cūḷamāluṅkya...).'],
  life: ['ជីវប្រវត្តិព្រះសម្មាសម្ពុទ្ធ ព្រះសិទ្ធត្ថ គោតម។', 'The life of the Buddha, Siddhattha Gotama.'],
  gathas: ['គាថាព្រះធម៌ និងធម្មបទ សម្រាប់ត្រិះរិះ។', 'Verses of Dhamma and the Dhammapada for reflection.'],
  chanting: ['សូត្រ ១០ សម្រាប់សូត្ររាល់ថ្ងៃ ជាមួយភាសាបាលី។', 'Ten daily recitals for chanting with Pali.'],
  glossary: ['វចនានុក្រមពាក្យធម៌ ជាខ្មែរ និងអង់គ្លេស។', 'Glossary of Dhamma terms in Khmer and English.'],
  stories: ['រឿងល្បីៗ ១០ អំពីព្រះពុទ្ធ និងព្រះអរហន្ត (អង្គុលីមាលៈ ព្រះមោគ្គល្លាន...)។', 'Ten famous stories about the Buddha and Arahants (Angulimāla, Moggallāna...).'],
  questions: ['សំណួរ–ចម្លើយ ៤៤ សំណួរដែលគេសួរញឹកញាប់អំពីព្រះធម៌ និងការប្រព្រឹត្ត។', '44 questions and answers about Dhamma and practice.'],
  'my-gems': ['កម្រងសំណួរកំពូល និងធម៌រតនៈពិសេសផ្ទាល់ខ្លួន៖ ភាសា & ការនិយាយរបស់សត្វនរក (ទុ-ស-ន-សោ), និមិរាជជាតក, ដំណើរឆ្លងកាត់នរក ១៦ ឧស្សទនរក មហានរកទាំង ៨ និងយមបាល។', 'Personal collection of top questions & Dhamma gems: Speech & Language in Hell (Du-Sa-Na-So), Nimi Jātaka, Journey Through Hell, 16 Ussada Hells, The 8 Great Hells, and Yamapālas.'],
  'rupa-qa': ['សំណួរ–ចម្លើយ រូបបរមត្ថ ២៨ និងភាគរូបផ្សេងៗ។', 'Rūpa Paramattha Q&A — the 28 rūpas and related parts.'],
  'cetasika-qa': ['សំណួរ–ចម្លើយ ចេតសិកបរមត្ថ ៥២ ផស្ស វេទនា សញ្ញា ចេតនា ឯកគ្គតា។', 'Cetasika Paramattha Q&A — the 52 cetasikas, phassa, vedanā, saññā, cetanā, ekaggatā.'],
  'lobha-mula-citta': ['រំលឹកមេរៀនលោភមូលចិត្ត ៨ ដួង បរមត្ថអភិធម្ម ភាគ ១–៦។', 'Lobha Mūla Citta review — the 8 greed-rooted consciousnesses in Abhidhamma, parts 1–6.'],
  paccaya: ['បដិច្ចសមុប្បាទ ១២ អង្គ និងបច្ច័យ ២៤ នៃគម្ពីរបដ្ឋាន តភ្ជាប់ចិត្ត និងរូប។', '12 links of Dependent Origination and the 24 Paṭṭhāna conditions connecting mind and matter.'],
  sangha: ['ជីវិតព្រះសង្ឃ វិន័យ និងរបៀបធ្វើបុណ្យទាន។', 'Monastic life, the Vinaya, and how to make offerings.'],
  daily: ['បដិបត្តិប្រចាំថ្ងៃ សីល ៥ និងពិធីបុណ្យរាល់ឆ្នាំ។', 'A simple daily practice, the five precepts, and observances.'],
  recollections: ['អនុស្សតិ ១០ និងពិចារណាប្រចាំថ្ងៃ។', 'The ten recollections and daily reflections.'],
  ariya: ['អរិយបុគ្គល ៨ ពួក សោតាបន្ន ដល់ អរហន្ត។', 'The eight noble persons, from stream-enterer to arahant.'],
  'death-and-rebirth': ['ដំណើរនៃការស្លាប់ និងការបដិសន្ធិ យន្តការបញ្ជូនកម្មឆ្លងជាតិ។', 'The death and rebirth process, mechanism of karmic transference across lifetimes.'],
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