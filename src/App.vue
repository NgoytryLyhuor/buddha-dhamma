<template>
  <div>
    <!-- Header (logo + settings only; navigation lives in bottom bar) -->
    <header
      class="sticky top-0 z-50 h-14 sm:h-16 transition-transform duration-300 ease-out"
      :class="{ '-translate-y-full': zenMode && isChromeHidden }"
      :style="{ background: 'var(--bg-nav)', borderBottom: '1px solid var(--border)' }"
    >
      <div class="w-full max-w-4xl mx-auto px-4 h-full flex flex-col justify-center relative">
        <div class="flex items-center justify-between gap-3 h-full">
        <router-link to="/" class="flex items-center gap-2 sm:gap-2.5 group min-w-0 my-auto" style="color: var(--ink)">
          <span class="logo-ico leading-none shrink-0 flex items-center" :style="{ color: 'var(--accent-bright)' }">&#9784;</span>
          <span class="block min-w-0">
            <span class="block truncate font-display logo-title leading-tight">{{ t('ព្រះធម៌', 'Buddha Dhamma') }}</span>
            <span class="hidden sm:block logo-sub tracking-[0.3em] uppercase truncate" :style="{ color: 'var(--ink-faint)' }">{{ t('ពន្យល់ពាក្យព្រះសម្មាសម្ពុទ្ធ', 'The Words of the Buddha') }}</span>
          </span>
        </router-link>

        <div class="flex items-center gap-2 my-auto">
          <!-- Desktop only: clean button to open all pages -->
          <button
            type="button"
            class="hidden lg:inline-flex items-center gap-2 px-3.5 py-1.5 rounded text-xs font-bold transition cursor-pointer my-auto"
            @click="openMenu"
            :class="menuOpen ? 'active' : ''"
            :style="{
              background: menuOpen ? 'var(--accent-soft)' : 'var(--bg-card)',
              color: menuOpen ? 'var(--accent)' : 'var(--ink)',
              border: '1px solid ' + (menuOpen ? 'var(--accent)' : 'var(--border)')
            }"
            :title="t('ម៉ឺនុយទាំងអស់', 'All Pages')"
            :aria-label="t('ម៉ឺនុយទាំងអស់', 'All Pages')"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            <span>{{ t('ម៉ឺនុយទាំងអស់', 'All Pages') }}</span>
            <span class="text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold"
              :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)' }">
              {{ nav.length }}
            </span>
          </button>

          <!-- Settings icon button (perfectly centered on mobile and desktop) -->
          <button ref="settingsBtnRef" class="theme-btn shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl my-auto flex items-center justify-center cursor-pointer" @click="settingsOpen = !settingsOpen"
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
            <div class="grid grid-cols-3 gap-1.5">
              <button
                type="button"
                class="lang-pick text-xs px-2 py-2 inline-flex items-center justify-center gap-1 shrink-0"
                :class="theme === 'light' ? 'on' : ''"
                @click="setTheme('light')"
              >
                <span>☼</span>
                <span>{{ t('ពន្លឺថ្ងៃ', 'Light') }}</span>
              </button>
              <button
                type="button"
                class="lang-pick text-xs px-2 py-2 inline-flex items-center justify-center gap-1 shrink-0"
                :class="theme === 'sepia' ? 'on' : ''"
                @click="setTheme('sepia')"
              >
                <span>📜</span>
                <span>{{ t('ស្លឹករឹត', 'Sepia') }}</span>
              </button>
              <button
                type="button"
                class="lang-pick text-xs px-2 py-2 inline-flex items-center justify-center gap-1 shrink-0"
                :class="theme === 'dark' ? 'on' : ''"
                @click="setTheme('dark')"
              >
                <span>☽</span>
                <span>{{ t('រាត្រី', 'Dark') }}</span>
              </button>
            </div>

            <button class="setting-row mt-2" @click="toggleContrast">
              <span>AA</span>
              <span>{{ t(contrast ? 'ប្តូរទៅពណ៌ធម្មតា' : 'ប្តូរទៅពណ៌ខ្លាំង (ផ្ទុយខ្ពស់)', contrast ? 'Switch to normal contrast' : 'Switch to high contrast') }}</span>
            </button>

            <!-- READING EXPERIENCE: WAKE LOCK & ZEN FOCUS MODE -->
            <p class="settings-label mt-4">{{ t('បទពិសោធន៍អាន', 'Reading Experience') }}</p>
            <div class="space-y-1.5">
              <!-- Feature 1: Wake Lock -->
              <button
                type="button"
                class="setting-row"
                @click="toggleWakeLock"
                :disabled="!wakeLockSupported"
                :title="t('រក្សាអេក្រង់ភ្លឺពេលអាន', 'Keep Screen Awake')"
              >
                <span :style="wakeLockEnabled ? { color: 'var(--accent)' } : {}">💡</span>
                <span class="flex-1 min-w-0 text-left">
                  <span class="block">{{ t('រក្សាអេក្រង់ភ្លឺពេលអាន', 'Keep Screen Awake') }}</span>
                  <span class="block text-[10px] opacity-75 font-normal" :style="{ color: 'var(--ink-muted)' }">
                    {{ wakeLockSupported ? (wakeLockEnabled ? t('បើក — អេក្រង់មិនរលត់ឡើយ', 'Enabled — screen stays on') : t('បិទ — រលត់តាមទូរស័ព្ទ', 'Disabled — normal screen timeout')) : t('មិនគាំទ្រលើ Browser នេះ', 'Not supported') }}
                  </span>
                </span>
                <span class="dot" :class="wakeLockEnabled ? 'on' : ''"></span>
              </button>

              <!-- Feature 2: Zen Mode -->
              <button
                type="button"
                class="setting-row"
                @click="toggleZenMode"
                :title="t('របៀបស្ងប់ចិត្ត', 'Zen Focus Mode')"
              >
                <span :style="zenMode ? { color: 'var(--accent)' } : {}">🧘</span>
                <span class="flex-1 min-w-0 text-left">
                  <span class="block">{{ t('របៀបស្ងប់ចិត្ត (Zen Mode)', 'Zen Focus Mode') }}</span>
                  <span class="block text-[10px] opacity-75 font-normal" :style="{ color: 'var(--ink-muted)' }">
                    {{ zenMode ? t('បើក — លាក់របារបញ្ជាពេល Scroll អាន', 'Enabled — auto-hides navigation on scroll') : t('បិទ — បង្ហាញរបារបញ្ជាជាប់', 'Disabled — bars always visible') }}
                  </span>
                </span>
                <span class="dot" :class="zenMode ? 'on' : ''"></span>
              </button>
            </div>


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

    <!-- Redesigned Modern Buddhist Footer -->
    <footer class="max-w-4xl mx-auto px-4 pb-14 text-center">
      <div class="card-paper p-4 sm:p-6 rounded-2xl border shadow-sm relative overflow-hidden" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
        <!-- Decorative Gold Hairline -->
        <div class="absolute top-0 left-0 right-0 h-[2px]" style="background: linear-gradient(90deg, transparent, var(--accent) 30%, var(--gold) 50%, var(--accent) 70%, transparent); opacity: 0.7;"></div>

        <!-- Top Header & Sacred Verse -->
        <div class="flex flex-col items-center">
          <span class="w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-xs border"
            :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)', color: 'var(--accent)' }" aria-hidden="true">
            ☸️
          </span>
          <h3 class="font-display text-base sm:text-lg font-bold mt-2" :style="{ color: 'var(--ink)' }">
            {{ t('ចែករំលែក និង ចូលរួមចំណែក', 'Share and Contribute') }}
          </h3>
          <p class="text-[11px] sm:text-xs mt-0.5 paali font-serif italic" :style="{ color: 'var(--accent)' }">
            « សព្វទានំ ធម្មទានំ ជិនាតិ — ការឱ្យធម្មទាន ឈ្នះអស់ទានទាំងពួង »
          </p>
        </div>

        <!-- 3 Modern Action Cards: 3 compact columns on mobile, beautiful tiles on tablet/desktop -->
        <div class="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
          <!-- Button 1: Telegram Share -->
          <a
            :href="shareTelegram"
            target="_blank"
            rel="noopener"
            class="footer-tile group flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl border transition active:scale-95"
            :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }"
            :title="t('ចែករំលែកតាម Telegram', 'Share on Telegram')"
          >
            <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 group-hover:scale-110 transition-transform">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </div>
            <span class="font-bold text-[11px] sm:text-xs mt-1.5 truncate group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors" :style="{ color: 'var(--ink)' }">
              Telegram
            </span>
            <span class="text-[10px] hidden sm:block truncate mt-0.5" :style="{ color: 'var(--ink-muted)' }">
              {{ t('ចែករំលែកឱ្យមិត្ត', 'Share with friends') }}
            </span>
          </a>

          <!-- Button 2: Report Spelling -->
          <a
            :href="reportUrl"
            target="_blank"
            rel="noopener"
            class="footer-tile group flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl border transition active:scale-95"
            :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }"
            :title="t('ចង្អុលពាក្យខុស', 'Report Spelling')"
          >
            <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 group-hover:scale-110 transition-transform">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
            <span class="font-bold text-[11px] sm:text-xs mt-1.5 truncate group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" :style="{ color: 'var(--ink)' }">
              {{ t('កែពាក្យខុស', 'Typo Report') }}
            </span>
            <span class="text-[10px] hidden sm:block truncate mt-0.5" :style="{ color: 'var(--ink-muted)' }">
              {{ t('ជួយកែឱ្យត្រឹមត្រូវ', 'Help fix spelling') }}
            </span>
          </a>

          <!-- Button 3: Send Feedback -->
          <button
            type="button"
            @click="openFeedback"
            class="footer-tile group flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl border transition active:scale-95 cursor-pointer"
            :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }"
            :title="t('ផ្តល់យោបល់', 'Send Feedback')"
          >
            <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
              <svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <span class="font-bold text-[11px] sm:text-xs mt-1.5 truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" :style="{ color: 'var(--ink)' }">
              {{ t('ផ្តល់យោបល់', 'Feedback') }}
            </span>
            <span class="text-[10px] hidden sm:block truncate mt-0.5" :style="{ color: 'var(--ink-muted)' }">
              {{ t('ផ្ញើសារទៅអ្នកអភិវឌ្ឍ', 'Message developer') }}
            </span>
          </button>
        </div>

        <!-- Footer Bottom Note -->
        <div class="mt-4 pt-3 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px]" :style="{ borderColor: 'var(--border)', color: 'var(--ink-muted)' }">
          <span>{{ t('បោះពុម្ពផ្សាយជាធម្មទាន ដើម្បីសេចក្តីស្ងប់សុខនៃមនុស្សជាតិ', 'Published as Dhamma Dana for the peace of humanity') }}</span>
          <span class="paali font-semibold" :style="{ color: 'var(--accent)' }">សព្វេ សត្តា សុខិតា ហោន្តុ</span>
        </div>
      </div>
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
                :placeholder="t('ស្វែងរកក្នុងចំណោម ' + khNum(nav.length) + ' ម៉ឺនុយ (ឧ. សមាធិ, ទ្រព្យធម៌, កម្មដ្ឋាន)...', 'Search ' + nav.length + ' pages (e.g. meditation, wealth, kammatthana)...')"
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
          <div ref="menuSheetListRef" class="menu-sheet-list">
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
                :style="{ background: 'var(--accent)', color: 'var(--accent-ink, #ffffff)' }"
              >
                {{ t('បង្ហាញទំព័រទាំងអស់ឡើងវិញ', 'Show all pages') }}
              </button>
            </div>

            <!-- Footer indicator -->
            <div v-if="filteredMenuNav.length > 0" class="col-span-full py-6 text-center text-xs opacity-80">
              <p class="font-medium" :style="{ color: 'var(--ink)' }">
                {{ t('☸️ ព្រះធម៌ ' + khNum(nav.length) + ' ទំព័រ — រៀបចំតាមលំដាប់លំដោយ សម្រាប់សិក្សា និងបដិបត្តិ', '☸️ Buddha Dhamma ' + nav.length + ' Pages — Ordered systematically for study & practice') }}
              </p>
              <p v-if="selectedMenuCategory !== 'all' || menuSearchQuery" class="mt-2 text-xs">
                <button
                  type="button"
                  @click="selectedMenuCategory = 'all'; menuSearchQuery = ''"
                  class="font-bold underline cursor-pointer"
                  :style="{ color: 'var(--accent-bright)' }"
                >
                  {{ t('បង្ហាញទំព័រទាំង ' + khNum(nav.length) + ' ឡើងវិញ (ទំព័រ ០១ ដល់ ' + khNum(nav.length) + ')', 'Show all ' + nav.length + ' pages (Pages 01 to ' + nav.length + ')') }}
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
              <span>{{ t('បិទម៉ឺនុយ (' + khNum(nav.length) + ' ទំព័រ)', 'Close Menu (' + nav.length + ' Pages)') }}</span>
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


    <!-- Floating Zen Mode Indicator Pill -->
    <transition name="fade">
      <button
        v-if="zenMode && isChromeHidden"
        @click="revealChrome"
        class="fixed top-3 right-3 z-40 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-md border inline-flex items-center gap-1.5 transition active:scale-95 cursor-pointer"
        :style="{ background: 'var(--bg-card)', borderColor: 'var(--accent)', color: 'var(--accent)' }"
        :title="t('ចុចដើម្បីបង្ហាញរបារបញ្ជា', 'Tap to reveal navigation')"
      >
        <span>🧘</span>
        <span class="text-[11px]">{{ t('ស្ងប់ចិត្ត', 'Zen') }}</span>
      </button>
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
import { useWakeLock } from './composables/useWakeLock'
import { useZenMode } from './composables/useZenMode'
import { saveScroll, clearSavedScroll } from './composables/useReadingProgress'
import { BASE_URL } from './config'

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
const { theme, setTheme, toggleTheme } = useTheme()
const { wakeLockEnabled, isSupported: wakeLockSupported, toggleWakeLock } = useWakeLock()
const { zenMode, isChromeHidden, toggleZenMode, revealChrome } = useZenMode()
const { lang, t, setLang } = useLanguage()
const { needRefresh, reload, checkForUpdate } = usePwaUpdate()
const { contrast, toggleContrast } = useContrast()

router.afterEach((to, from) => {
  onNavigationDone(to, from)
  checkForUpdate()
})

const hasError = ref(false)
onErrorCaptured((err) => {
  console.error(err)
  hasError.value = true
  return false
})
const { fontSizeIndex, SIZES, increaseFontSize, decreaseFontSize, spacing, setSpacing } = useFontSize()
const { font, setFont } = useFont()

function resetSettings() {
  ;['bd_lang', 'bd_dhamma_theme', 'bd_font_size', 'bd_font_family', 'bd_spacing', 'bd_contrast', 'bd_install_dismissed', 'bd_wake_lock', 'bd_zen_mode', 'bd_mindfulness_bell']
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
  gems: ['/tiktok-studio', '/my-gems', '/questions', '/rupa-qa', '/cetasika-qa', '/stories', '/quiz', '/glossary', '/jataka', '/wealth', '/apayamukha', '/similes', '/lay-disciples', '/buddha-guna', '/punnakiriya', '/ariyadhana', '/tilakkhana', '/kalyanamitta', '/triple-gem-guna', '/vessantara', '/kalama-sutta', '/six-speeches', '/dhamma-hearing', '/gahi-sukha', '/sappurisa', '/paticcasamuppada', '/carita', '/cakka', '/devaduta', '/caturarakkha', '/mitta', '/samyojana'],
  abhidhamma: ['/abhidhamma', '/lobha-mula-citta', '/paccaya', '/death-and-rebirth', '/citta-matrix', '/citta-vithi', '/merit-transfer', '/cosmology', '/nibbana', '/sangaha', '/ayatana', '/kammpatha', '/jhana', '/arupa-jhana', '/vipassanupakkilesa', '/asava', '/anusaya', '/upadana', '/anattalakkhana', '/paticcasamuppada', '/dhatu', '/niyama', '/maranasanna', '/vipassana-bhumi', '/samyojana'],
  practice: ['/meditation', '/chanting', '/daily', '/recollections', '/timer', '/anapanasati', '/vipassana-nana', '/metta', '/asubha', '/kammatthana', '/indriya', '/walking-meditation', '/bedtime-dhamma', '/uposatha', '/nivarana', '/buddha-guna', '/punnakiriya', '/mindful-work', '/satipatthana', '/bojjhanga', '/jhana', '/abhinha', '/triple-gem-guna', '/arupa-jhana', '/vipassanupakkilesa', '/uposatha-types', '/visuddhi', '/sammappadhana', '/iddhipada', '/metta-sutta', '/carita', '/caturarakkha', '/vimokkha', '/ariyavamsa', '/yonisomanasikara', '/paccaya-requisites'],
  sutta: ['/core', '/kamma', '/ethics', '/suttas', '/gathas', '/ariya', '/realms', '/bodhipakkhiya', '/magga', '/dhutanga', '/tipitaka', '/barami', '/sangayana', '/mangala', '/ariyadhana', '/kammpatha', '/similes', '/tilakkhana', '/khandha', '/appamada', '/sacca-kicca', '/satipatthana', '/bojjhanga', '/kalyanamitta', '/abhinha', '/kalama-sutta', '/six-speeches', '/dhammacakka', '/anattalakkhana', '/sanghadana', '/metta-sutta', '/visuddhi', '/vessantara', '/cakka', '/devaduta', '/abhinna', '/dasabala', '/vuddhi', '/ditthi', '/garuka-kamma', '/mitta'],
  life: ['/', '/life', '/sangha', '/calendar', '/dhamma-aid', '/holy-sites', '/disciples', '/prophecy', '/rajadhamma', '/family', '/ceremonies', '/wealth', '/lokadhamma', '/apayamukha', '/brahmavihara', '/mangala', '/sangahavatthu', '/agati', '/mindful-work', '/katannu', '/lay-disciples', '/appamada', '/kalyanamitta', '/abhinha', '/uposatha-types', '/sanghadana', '/gahi-sukha', '/macchariya', '/sappurisa', '/six-speeches', '/iddhipada', '/carita', '/cakka', '/devaduta', '/caturarakkha', '/ariyavamsa', '/vuddhi', '/yonisomanasikara', '/ditthi', '/garuka-kamma', '/mitta', '/paccaya-requisites', '/samyojana'],
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
  { to: '/arupa-jhana', km: 'អរូបឈាន ៤ & និរោធសមាបត្តិ', descKm: 'កម្រិតសមាធិអរូបី ៤ & ការរំលត់វេទនានិងសញ្ញា ៧ ថ្ងៃ', kmShort: 'អរូបឈាន', en: '4 Formless Absorptions & Nirodha', num: '៨៥' },
  { to: '/vipassanupakkilesa', km: 'វិបស្សនូបកិលេស ១០ យ៉ាង', descKm: 'ឧបសគ្គបញ្ឆោតភ្នែកក្នុងវិបស្សនា ឱភាស ញាណ បីតិ ឧបេក្ខា & និកន្តិ', kmShort: 'វិបស្សនូបកិលេស', en: '10 Corruptions of Insight', num: '៨៦' },
  { to: '/asava', km: 'អាសវធម៌ ៤ & មាគ៌ាខីណាស្រព', descKm: 'កិលេសជ្រាបស្រពូនចិត្ត កាមាសវៈ ភវាសវៈ & វិធីកម្ចាត់ ៧ យ៉ាង', kmShort: 'អាសវធម៌ ៤', en: '4 Cankers & Khīṇāsava', num: '៨៧' },
  { to: '/uposatha-types', km: 'ឧបោសថ ៣ ប្រភេទ (អរិយឧបោសថ)', descKm: 'គោបាលក និគ្គន្ថ & អរិយឧបោសថ លាងចិត្តដោយអនុស្សតិ ៥', kmShort: 'ឧបោសថ ៣ ប្រភេទ', en: '3 Types of Uposatha', num: '៨៨' },
  { to: '/anusaya', km: 'អនុសយធម៌ ៧ (កិលេសដេកសម្ងំ)', descKm: 'កិលេសដេកសម្ងំក្នុងជម្រៅចិត្ត & ការកម្ចាត់ឫសគល់ដោយអរិយមគ្គ', kmShort: 'អនុសយធម៌ ៧', en: '7 Latent Tendencies', num: '៨៩' },
  { to: '/visuddhi', km: 'វិសុទ្ធិ ៧ ប្រការ (រថ ៧ ផ្លាស់)', descKm: 'ដំណើរនៃរថទាំង ៧ ផ្លាស់ ពីសីលវិសុទ្ធិ ដល់ អនុបាទាបរិនិព្វាន', kmShort: 'វិសុទ្ធិ ៧', en: '7 Stages of Purification', num: '៩០' },
  { to: '/vessantara', km: 'ព្រះវេស្សន្តរ & មហាទាន ៥ យ៉ាង', descKm: 'កំពូលទានបារមី ទ្រព្យ អវយវៈ ជីវិត បុត្រ & ភរិយាបរិច្ចាគ', kmShort: 'ព្រះវេស្សន្តរ & មហាទាន', en: 'Vessantara & 5 Great Gifts', num: '៩១' },
  { to: '/kalama-sutta', km: 'កាលាមសូត្រ & ជំនឿ ១០ យ៉ាង', descKm: 'ធម្មនុញ្ញនៃសេរីភាពបញ្ញា & ជំនឿ ១០ យ៉ាងដែលកុំទាន់អាលជឿ', kmShort: 'កាលាមសូត្រ', en: 'Kālāma Sutta & Free Inquiry', num: '៩២' },
  { to: '/sammappadhana', km: 'សម្មប្បធាន ៤ (ព្យាយាមត្រូវ ៤)', descKm: 'កម្លាំងព្យាយាមត្រូវទាំង ៤ ការពារ លះបង់ បណ្តុះ & ថែរក្សាកុសល', kmShort: 'សម្មប្បធាន ៤', en: '4 Right Strivings', num: '៩៣' },
  { to: '/iddhipada', km: 'ឥទ្ធិបាទ ៤ (ក្បួនសម្រេចជោគជ័យ)', descKm: 'មាគ៌ាសម្រេចជោគជ័យដ៏អស្ចារ្យ ឆន្ទៈ វីរិយៈ ចិត្តៈ & វិមំសា', kmShort: 'ឥទ្ធិបាទ ៤', en: '4 Bases of Success', num: '៩៤' },
  { to: '/metta-sutta', km: 'មេត្តាសូត្រ & អានិសង្ស ១១ យ៉ាង', descKm: 'ស្រឡាញ់សត្វលោកដូចម្តាយថ្នាក់ថ្នមកូន & អានិសង្សមេត្តា ១១ យ៉ាង', kmShort: 'មេត្តាសូត្រ & អានិសង្ស', en: 'Mettā Sutta & 11 Blessings', num: '៩៥' },
  { to: '/six-speeches', km: 'វាចា ៦ ប្រភេទរបស់ព្រះពុទ្ធ', descKm: 'សិល្បៈនៃការជ្រើសរើសពាក្យសំដី & ឧបមាទារកស្លាក់គ្រួស', kmShort: 'វាចា ៦ ប្រភេទ', en: '6 Classes of Speech', num: '៩៦' },
  { to: '/dhammacakka', km: 'ធម្មចក្កប្បវត្តនសូត្រ (បឋមទេសនា)', descKm: 'បង្វិលកង់ធម៌ កម្ចាត់ផ្លូវជ្រុល ២ មាគ៌ាកណ្តាល & សច្ចៈ ១២ អាការៈ', kmShort: 'ធម្មចក្កប្បវត្តនសូត្រ', en: 'First Discourse (Dhammacakka)', num: '៩៧' },
  { to: '/anattalakkhana', km: 'អនត្តលក្ខណសូត្រ (អរហន្ត ៦ អង្គ)', descKm: 'ធម្មទេសនារំលាយអត្តា ខន្ធ ៥ អនត្តា & ព្រះអរហន្ត ៦ អង្គដំបូង', kmShort: 'អនត្តលក្ខណសូត្រ', en: 'Anattalakkhaṇa Sutta (Non-Self)', num: '៩៨' },
  { to: '/sanghadana', km: 'សង្ឃទាន vs បុគ្គលិកទាន', descKm: 'ទក្ខិណវិភង្គសូត្រ សង្ឃទាន ៧ ប្រភេទ & អានិសង្សលើសលប់', kmShort: 'សង្ឃទាន & បុគ្គលិកទាន', en: 'Saṅghadāna & Individual Offerings', num: '៩៩' },
  { to: '/upadana', km: 'ឧបាទាន ៤ យ៉ាង (ចំណងតោងទាម)', descKm: 'ចំណងតោងទាម ៤ ជាន់ក្នុងសង្សារវដ្ត កាម ទិដ្ឋិ សីលព្វត & អត្តវាទ', kmShort: 'ឧបាទាន ៤', en: '4 Clingings (Upādāna)', num: '១០០' },
  { to: '/dhamma-hearing', km: 'អានិសង្សនៃការស្តាប់ធម៌ ៥ យ៉ាង', descKm: 'ធម្មស្សវនសូត្រ សិល្បៈស្តាប់ឱ្យភ្លឺបញ្ញា & ឧបមាឆ្នាំង ៣ ប្រភេទ', kmShort: 'អានិសង្សស្តាប់ធម៌ ៥', en: '5 Blessings of Hearing Dhamma', num: '១០១' },
  { to: '/gahi-sukha', km: 'សុខ ៤ យ៉ាងរបស់គ្រហស្ថ', descKm: 'អត្ថិសុខ ភោគសុខ អនណសុខ & អនវជ្ជសុខ (សុខឥតទោស)', kmShort: 'សុខ ៤ គ្រហស្ថ', en: '4 Happinesses of Householders', num: '១០២' },
  { to: '/macchariya', km: 'មច្ឆរិយៈ ៥ យ៉ាង (ភាពកំណាញ់ ៥)', descKm: 'ភាពកំណាញ់ស្វិតស្វាញ ៥ បែប អាវាស កុល លាភ វណ្ណ & ធម្មមច្ឆរិយៈ', kmShort: 'មច្ឆរិយៈ ៥', en: '5 Kinds of Stinginess', num: '១០៣' },
  { to: '/sappurisa', km: 'សប្បុរិសធម៌ ៧ (មនុស្សថ្លៃថ្នូរ)', descKm: 'គុណធម៌នៃមនុស្សថ្លៃថ្នូរ ស្គាល់ហេតុ ផល ខ្លួន ប្រមាណ កាល សង្គម & មនុស្ស', kmShort: 'សប្បុរិសធម៌ ៧', en: '7 Qualities of a Noble Person', num: '១០៤' },
  { to: '/paticcasamuppada', km: 'បដិច្ចសមុប្បាទ ១២ (ខ្សែចង្វាក់នៃទុក្ខ)', descKm: 'ច្បាប់នៃបុព្វហេតុបច្ច័យ ១២ តំណាក់កាល អវិជ្ជាដល់ជរាមរណៈ & វដ្ត ៣', kmShort: 'បដិច្ចសមុប្បាទ ១២', en: '12 Links of Dependent Origination', num: '១០៥' },
  { to: '/dhatu', km: 'ធាតុ ១៨ នៃសភាវពិត', descKm: 'ធាតុ ១៨ ចែកជាទ្វារ ៦ អារម្មណ៍ ៦ & វិញ្ញាណដឹង ៦ រំលាយសញ្ញាថាជាខ្លួន', kmShort: 'ធាតុ ១៨', en: '18 Elements of Reality', num: '១០៦' },
  { to: '/niyama', km: 'ធម្មនិយាម ៥ (ច្បាប់ចក្រវាល)', descKm: 'ច្បាប់ធម្មជាតិ ៥ យ៉ាង ឧតុ ពីជ ចិត្ត កម្ម & ធម្មនិយាម កម្ចាត់ជំនឿអាទិទេព', kmShort: 'ធម្មនិយាម ៥', en: '5 Universal Cosmic Laws', num: '១០៧' },
  { to: '/carita', km: 'ចរិត ៦ & កម្មដ្ឋានសមគួរ', descKm: 'វិសុទ្ធិមគ្គ និស្ស័យចិត្ត ៦ បែប រាគ ទោស មោហ សទ្ធា ពុទ្ធិ វិតក្ក & សប្បាយ ៧', kmShort: 'ចរិត ៦ & កម្មដ្ឋាន', en: '6 Temperaments & Suitable Meditations', num: '១០៨' },
  { to: '/cakka', km: 'ចក្ក ៤ (កង់នៃភាពចម្រើន)', descKm: 'កង់រទេះជីវិត ៤ បដិរូបទេសវាសៈ សេពគប់សប្បុរស តម្កល់ខ្លួនត្រូវ & បុញ្ញតា', kmShort: 'ចក្ក ៤', en: '4 Wheels of Prosperity', num: '១០៩' },
  { to: '/maranasanna', km: 'មរណាសន្នកាល & និមិត្ត ៣', descKm: 'ខណៈចិត្តចុងក្រោយមុនស្លាប់ មរណាសន្នវីថិ កម្ម កម្មនិមិត្ត គតិនិមិត្ត & ការថែទាំ', kmShort: 'មរណាសន្នកាល', en: 'Death-Proxy Process & 3 Signs', num: '១១០' },
  { to: '/devaduta', km: 'ទេវទូត ៥ (សារដាស់តឿនសតិ)', descKm: 'ទេវទូតសូត្រ ទារក មនុស្សចាស់ ឈឺ អ្នកទោស & សាកសព សាលាក្តីយមរាជ', kmShort: 'ទេវទូត ៥', en: '5 Divine Messengers', num: '១១១' },
  { to: '/abhinna', km: 'អភិញ្ញា ៦ & វិជ្ជា ៣', descKm: 'ញាណអស្ចារ្យ ៦ ឫទ្ធិ ទិព្វសោត ចេតោ បុព្វេ ទិព្វចក្ខុ & អាសវក្ខយញាណ', kmShort: 'អភិញ្ញា ៦ & វិជ្ជា ៣', en: '6 Supernormal Knowledges', num: '១១២' },
  { to: '/dasabala', km: 'ទសពលញាណ ១០ (កម្លាំងព្រះពុទ្ធ)', descKm: 'មហាសីហនាទសូត្រ កម្លាំងប្រាជ្ញាកំពូល ១០ យ៉ាង & ចតុវេសារជ្ជញាណ ៤', kmShort: 'ទសពលញាណ ១០', en: '10 Powers of a Buddha', num: '១១៣' },
  { to: '/caturarakkha', km: 'ចតុរារក្ខធម៌ ៤ (អាវក្រោះការពារចិត្ត)', descKm: 'អាវក្រោះចិត្ត ៤ ទិស ពុទ្ធានុស្សតិ មេត្តា អសុភ & មរណានុស្សតិ ១០ នាទី', kmShort: 'ចតុរារក្ខធម៌ ៤', en: '4 Guardian Meditations', num: '១១៤' },
  { to: '/vimokkha', km: 'វិមោក្ខ ៣ (ទ្វាររួចផុតទុក្ខ)', descKm: 'ទ្វារ ៣ ឆ្ពោះទៅនិព្វាន សុញ្ញតៈ អនិមិត្តៈ អប្បណិហិតៈ & អដ្ឋវិមោក្ខ ៨', kmShort: 'វិមោក្ខ ៣', en: '3 Gateways to Liberation', num: '១១៥' },
  { to: '/vipassana-bhumi', km: 'វិបស្សនាភូមិ ៦ (ដីនៃបញ្ញា)', descKm: 'ដីនៃបញ្ញាត្រាស់ដឹង ខន្ធ អាយតនៈ ធាតុ ឥន្ទ្រិយ សច្ចៈ & បដិច្ចសមុប្បាទ', kmShort: 'វិបស្សនាភូមិ ៦', en: '6 Soils of Insight', num: '១១៦' },
  { to: '/ariyavamsa', km: 'អរិយវង្សធម៌ ៤ (វង្សព្រះអរិយៈ)', descKm: 'សិលាចារឹកព្រះបាទអសោក សន្តោសចីវរ បិណ្ឌបាត សេនាសនៈ & ភាវនារាមតា', kmShort: 'អរិយវង្សធម៌ ៤', en: '4 Noble Lineage Virtues', num: '១១៧' },
  { to: '/vuddhi', km: 'វុឌ្ឍិធម៌ ៤ (ចម្រើនបញ្ញា)', descKm: 'កត្តាចម្រើនបញ្ញា ៤ សេពគប់សប្បុរស ស្តាប់ធម៌ យោនិសោមនសិការ & បដិបត្តិ', kmShort: 'វុឌ្ឍិធម៌ ៤', en: '4 Factors of Spiritual Growth', num: '១១៨' },
  { to: '/yonisomanasikara', km: 'យោនិសោមនសិការៈ (គិតដល់ឫសគល់)', descKm: 'សិល្បៈនៃការគិតត្រូវ ៤ បែប កែប្រែទុក្ខផ្លូវចិត្តឱ្យទៅជាប្រាជ្ញាក្នុងជីវិត', kmShort: 'យោនិសោមនសិការៈ', en: 'Wise Attention & Reframing', num: '១១៩' },
  { to: '/ditthi', km: 'សម្មាទិដ្ឋិ ១០ & មិច្ឆាទិដ្ឋិ ៣', descKm: 'ទសវត្ថុកសម្មាទិដ្ឋិ ១០ ជំនឿត្រឹមត្រូវ vs នត្ថិក អហេតុក & អកិរិយទិដ្ឋិពុល', kmShort: 'សម្មាទិដ្ឋិ & មិច្ឆាទិដ្ឋិ', en: '10 Right Views & 3 Wrong Views', num: '១២០' },
  { to: '/garuka-kamma', km: 'គរុកម្ម ៥ & កម្ម ៤ ជាន់', descKm: 'បញ្ចអនន្តរិយកម្ម ៥ ទម្លាក់ទៅអវីចី & លំដាប់ជួរអាទិភាពនៃការផ្ដល់ផល ៤ ជាន់', kmShort: 'គរុកម្ម & កម្ម ៤ ជាន់', en: '5 Heinous Crimes & Karmic Order', num: '១២១' },
  { to: '/mitta', km: 'មិត្ត ៨ ជំពូក (៤ ពិត & ៤ ក្លែងក្លាយ)', descKm: 'សិង្គាលកសូត្រ កល្យាណមិត្ត ៤ ពួក vs អមិត្តពាក់ស្រោមមុខ ៤ ពួក', kmShort: 'មិត្ត ៨ ជំពូក', en: '4 True Friends & 4 False Friends', num: '១២២' },
  { to: '/paccaya-requisites', km: 'បច្ច័យ ៤ & បច្ចវេក្ខណវិធី', descKm: 'សិល្បៈប្រើប្រាស់បច្ច័យ ៤ ដោយមានសតិ ចីវរ បិណ្ឌបាត សេនាសនៈ & ភេសជ្ជៈ', kmShort: 'បច្ច័យ ៤ & បច្ចវេក្ខណៈ', en: '4 Requisites & Mindful Use', num: '១២៣' },
  { to: '/samyojana', km: 'សំយោជនៈ ១០ & អរិយបុគ្គល ៤', descKm: 'ច្រវាក់ចងចិត្ត ១០ ខ្សែ & ការកាត់ផ្តាច់តាមលំដាប់ សោតាបន្ន ដល់ ព្រះអរហន្ត', kmShort: 'សំយោជនៈ ១០', en: '10 Fetters & 4 Noble Stages', num: '១២៤' },
  { to: '/akusala-mula', km: 'អកុសលមូល ៣ & កុសលមូល ៣', descKm: 'មូលសូត្រ ឫសគល់នៃទុក្ខទាំង ៣ (លោភៈ ទោសៈ មោហៈ) & ឫសកុសល ៣ ព្រមទាំងឱសថ', kmShort: 'អកុសលមូល & កុសលមូល', en: '3 Unwholesome & 3 Wholesome Roots', num: '១២៥' },
  { to: '/aghatapativinaya', km: 'វិធីរម្ងាប់កំហឹង ៥ យ៉ាង (អាឃាតបដិវិន័យ)', descKm: 'អាឃាតបដិវិនយសូត្រ មេត្តា ករុណា ឧបេក្ខា មិនខ្វល់ & កម្មសកតា ឧបមាទឹកស្នាមជើងគោ', kmShort: 'វិធីរម្ងាប់កំហឹង ៥', en: '5 Ways of Subduing Resentment', num: '១២៦' },
  { to: '/ahara', km: 'អាហារ ៤ យ៉ាងដែលចិញ្ចឹមសត្វលោក', descKm: 'បុត្តមំសសូត្រ កវឡិង្ការាហារ ផស្សាហារ មនោសញ្ចេតនាហារ វិញ្ញាណាហារ & អាហារចិត្ត', kmShort: 'អាហារ ៤ យ៉ាង', en: '4 Nutriments Sustaining All Life', num: '១២៧' },
  { to: '/paramattha-sacca', km: 'សម្មុតិសច្ចៈ & បរមត្ថសច្ចៈ', descKm: 'មិលិន្ទប្បញ្ហា ឧបមារទេះ ការពិតតាមការសន្មត vs ធាតុពិត ៤ ដោះស្រាយចម្ងល់ធម៌', kmShort: 'សម្មុតិសច្ចៈ & បរមត្ថ', en: 'Conventional vs Ultimate Truth', num: '១២៨' },
  { to: '/puggala-4', km: 'បុគ្គល ៤ ជំពូកក្នុងលោក (ងងឹតទៅពន្លឺ)', descKm: 'បុគ្គលសូត្រ ងងឹតទៅងងឹត ងងឹតទៅភ្លឺ ភ្លឺទៅងងឹត & ភ្លឺទៅភ្លឺ កសាងវាសនាដោយខ្លួនឯង', kmShort: 'បុគ្គល ៤ ជំពូក', en: '4 Types of Persons (Dark to Light)', num: '១២៩' },
  { to: '/vitakkasanthana', km: 'វិធីរម្ងាប់គំនិតអាក្រក់ ៥ យ៉ាង', descKm: 'វិតក្កសណ្ឋានសូត្រ ក្បួនរំលត់គំនិតអវិជ្ជមាន គិតច្រើន (Overthinking) តាម ៥ ជំហាន', kmShort: 'រម្ងាប់គំនិតអាក្រក់ ៥', en: '5 Steps to Stop Intrusive Thoughts', num: '១៣០' },
  { to: '/natha-dhamma', km: 'ធម៌ជាទីពឹង ១០ ប្រការ (នាថករណធម៌)', descKm: 'នាថករណសូត្រ ខ្លួនជាទីពឹងខ្លួន គុណធម៌ ១០ យ៉ាងដើម្បីពឹងលើខ្លួនឯងបានរឹងមាំ', kmShort: 'ធម៌ជាទីពឹង ១០', en: '10 Virtues of True Self-Reliance', num: '១៣១' },
  { to: '/kusala-kammapatha', km: 'កុសលកម្មបថ ១០ ប្រការ', descKm: 'ចុន្ទកសូត្រ មាគ៌ាកុសលពេញលេញ កាយកម្ម ៣ វចីកម្ម ៤ មនោកម្ម ៣ សេចក្ដីសុខគ្រប់ទិស', kmShort: 'កុសលកម្មបថ ១០', en: '10 Wholesome Courses of Action', num: '១៣២' },
  { to: '/vipallasa', km: 'វិបល្លាស ១២ (ការភ័ន្តច្រឡំនៃចិត្ត)', descKm: 'វិបល្លាសសូត្រ មិនទៀងថាទៀង ទុក្ខថាសុខ មិនមែនខ្លួនថាជាខ្លួន & សញ្ញា ចិត្ត ទិដ្ឋិ', kmShort: 'វិបល្លាស ១២', en: '12 Cognitive Distortions (Vipallāsa)', num: '១៣៣' },
  { to: '/sangha-vinaya-lay', km: 'វិន័យសង្ឃបឋមសម្រាប់គ្រហស្ថ', descKm: 'មហាវគ្គ & ចុល្លវគ្គ ម៉ោងឆាន់ចង្ហាន់ ភេសជ្ជៈ ៤ ប្រព័ន្ធកប្បិយការក & សុជីវធម៌', kmShort: 'វិន័យសង្ឃសម្រាប់គ្រហស្ថ', en: 'Lay Guide to Monastic Vinaya', num: '១៣៤' },
  { to: '/sampajanna', km: 'សម្បជញ្ញៈ ៤ ប្រការក្នុងជីវិតការងារ', descKm: 'វិសុទ្ធិមគ្គ សាត្ថកៈ សប្បាយៈ គោចរៈ & អសម្មោហសម្បជញ្ញៈ សតិក្នុងការងារប្រចាំថ្ងៃ', kmShort: 'សម្បជញ្ញៈ ៤ ក្នុងការងារ', en: '4 Clear Comprehensions in Daily Life', num: '១៣៥' },
  { to: '/dana-types', km: 'ទាន ៣ ជំពូក & បុណ្យ ៣ ជាន់', descKm: 'ឥតិវុត្តក អាមិសទាន អភ័យទាន & ធម្មទានឈ្នះអស់ទាន ចេតនា ៣ កាលឱ្យមានផលធំ', kmShort: 'ទាន ៣ ជំពូក', en: '3 Forms of Giving: Material, Safety & Truth', num: '១៣៦' },
  { to: '/puja-symbolism', km: 'អត្ថន័យគ្រឿងសក្ការៈបូជា (ផ្កា ទៀន ធូប ទឹក)', descKm: 'ផ្កាឈូកតំណាងអនិច្ចំ ទៀនតំណាងបញ្ញា ធូបតំណាងសីល & ទឹកស្អាតតំណាងចិត្តស្ងប់', kmShort: 'អត្ថន័យគ្រឿងបូជា', en: 'Symbolism of Buddhist Offerings', num: '១៣៧' },
  { to: '/vedana', km: 'វេទនា ៥ & វិជ្ជាគ្រប់គ្រងអារម្មណ៍', descKm: 'វេទនាសំយុត្ត សុខ ទុក្ខ សោមនស្ស ទោមនស្ស & ឧបេក្ខា កាត់ផ្ដាច់ច្រវាក់តណ្ហានិងទុក្ខ', kmShort: 'វេទនា ៥ & អារម្មណ៍', en: 'Vedanā 5 & Emotional Mastery', num: '១៣៨' },
  { to: '/ariya-vinaya', km: 'អរិយវិន័យ vs ច្បាប់លោកីយ', descKm: 'លោកបាលធម៌ ហិរិ ឱត្តប្បៈ សីលធម៌ចេញពីបេះដូងខាងក្នុង គ្មានចន្លោះប្រហោង', kmShort: 'អរិយវិន័យ vs ច្បាប់លោកីយ', en: 'Noble Discipline vs Worldly Law', num: '១៣៩' },
  { to: '/asoka-history', km: 'ព្រះបាទធម្មាសោក & ដែនដីសុវណ្ណភូមិ', descKm: 'មហាវង្ស សង្គ្រាមកាលិង្គ សង្គាយនាទី ៣ សិលាចារឹក & ព្រះថេរៈ សោណៈ ឧត្តរៈ មកខ្មែរ', kmShort: 'ព្រះបាទអសោក & សុវណ្ណភូមិ', en: 'Emperor Asoka & Mission to Suvaṇṇabhūmi', num: '១៤០' },
  { to: '/sukha-levels', km: 'សុខ ៤ ថ្នាក់ក្នុងព្រះពុទ្ធសាសនា', descKm: 'ពហុវេទនិយសូត្រ កាមសុខ សមាធិសុខ វិបស្សនាសុខ & និព្វានសុខកំពូលផុតទុក្ខ', kmShort: 'សុខ ៤ ថ្នាក់', en: '4 Ascending Stages of Happiness', num: '១៤១' },
  { to: '/saupadisesa-nibbana', km: 'ព្រះនិព្វាន ២ យ៉ាង (សឧបាទិសេស & អនុបាទិសេស)', descKm: 'និព្វានធាតុសូត្រ កិលេសបរិនិព្វាន vs ខន្ធបរិនិព្វាន & ឧបមាអណ្ដាតភ្លើងរលត់', kmShort: 'ព្រះនិព្វាន ២ យ៉ាង', en: 'Two Nibbāna Realities', num: '១៤២' },
  { to: '/catummaharajika', km: 'ចាតុម្មហារាជិកា & មហារាជ ៤ ទិស', descKm: 'អាដានាដិយសូត្រ ធតរដ្ឋ វិរុឡ្ហក វិរូបក្ខ វេស្សវ័ណ & គុណធម៌ដែលទេវតាថែរក្សា', kmShort: 'ចាតុម្មហារាជិកា ៤ ទិស', en: '4 Heavenly Kings (Cātummahārājikā)', num: '១៤៣' },
  { to: '/citta-daily', km: 'កុសលចិត្ត & អកុសលចិត្តប្រចាំថ្ងៃ', descKm: 'ធម្មសង្គណី កញ្ចក់ឆ្លុះចិត្ត ៣ វិនាទី & ៨ ស្ថានភាពជាក់ស្ដែងបង្វែរពិសទៅជាកុសល', kmShort: 'កុសល & អកុសលប្រចាំថ្ងៃ', en: 'Daily Wholesome vs Unwholesome Mind States', num: '១៤៤' },
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
  dhamma: ['/core', '/abhidhamma', '/kamma', '/ethics', '/suttas', '/gathas', '/paccaya', '/ariya', '/realms', '/bodhipakkhiya', '/death-and-rebirth', '/citta-vithi', '/magga', '/prophecy', '/rajadhamma', '/cosmology', '/nibbana', '/tipitaka', '/sangaha', '/family', '/ceremonies', '/lokadhamma', '/brahmavihara', '/barami', '/sangayana', '/mangala', '/sangahavatthu', '/agati', '/katannu', '/kammpatha', '/tilakkhana', '/khandha', '/appamada', '/sacca-kicca', '/asava', '/anusaya', '/upadana', '/visuddhi', '/dhammacakka', '/anattalakkhana', '/vessantara', '/paticcasamuppada', '/dhatu', '/niyama', '/maranasanna', '/abhinna', '/dasabala', '/vimokkha', '/vipassana-bhumi', '/ditthi', '/garuka-kamma', '/samyojana', '/akusala-mula', '/ahara', '/paramattha-sacca', '/puggala-4', '/kusala-kammapatha', '/vipallasa', '/ariya-vinaya', '/asoka-history', '/sukha-levels', '/saupadisesa-nibbana', '/catummaharajika'],
  practice: ['/meditation', '/chanting', '/daily', '/recollections', '/sangha', '/calendar', '/timer', '/anapanasati', '/vipassana-nana', '/metta', '/dhutanga', '/merit-transfer', '/asubha', '/kammatthana', '/indriya', '/walking-meditation', '/bedtime-dhamma', '/uposatha', '/nivarana', '/buddha-guna', '/punnakiriya', '/mindful-work', '/satipatthana', '/bojjhanga', '/jhana', '/abhinha', '/triple-gem-guna', '/arupa-jhana', '/vipassanupakkilesa', '/uposatha-types', '/sammappadhana', '/iddhipada', '/metta-sutta', '/dhamma-hearing', '/carita', '/caturarakkha', '/ariyavamsa', '/paccaya-requisites', '/aghatapativinaya', '/vitakkasanthana', '/natha-dhamma', '/sangha-vinaya-lay', '/sampajanna', '/dana-types', '/puja-symbolism', '/vedana', '/citta-daily'],
  learn: ['/tiktok-studio', '/my-gems', '/glossary', '/stories', '/questions', '/life', '/rupa-qa', '/cetasika-qa', '/lobha-mula-citta', '/quiz', '/citta-matrix', '/dhamma-aid', '/holy-sites', '/disciples', '/jataka', '/wealth', '/apayamukha', '/ayatana', '/ariyadhana', '/similes', '/lay-disciples', '/kalyanamitta', '/kalama-sutta', '/six-speeches', '/sanghadana', '/gahi-sukha', '/macchariya', '/sappurisa', '/cakka', '/devaduta', '/vuddhi', '/yonisomanasikara', '/mitta'],
}

const activeTab = computed(() => {
  const cur = route.name === 'home' ? '/' : route.path
  for (const id in tabRoutes) if (tabRoutes[id].includes(cur)) return id
  return 'more'
})

const menuOpen = ref(false)
const menuSheetListRef = ref(null)

function scrollToActiveMenuItem() {
  nextTick(() => {
    const doScroll = () => {
      const listEl = menuSheetListRef.value
      if (!listEl) return
      const activeEl = listEl.querySelector('.menu-sheet-card.active')
      if (activeEl) {
        if (typeof activeEl.scrollIntoView === 'function') {
          activeEl.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'smooth' })
        } else {
          const listRect = listEl.getBoundingClientRect()
          const activeRect = activeEl.getBoundingClientRect()
          const offset = (activeRect.top - listRect.top) + listEl.scrollTop - (listRect.height / 2) + (activeRect.height / 2)
          listEl.scrollTo({ top: Math.max(0, offset), behavior: 'smooth' })
        }
      }
    }
    doScroll()
    requestAnimationFrame(doScroll)
    setTimeout(doScroll, 120)
    setTimeout(doScroll, 260)
  })
}

function openMenu() {
  menuOpen.value = !menuOpen.value
  menuSearchQuery.value = ''
  selectedMenuCategory.value = 'all'
  if (menuOpen.value) {
    scrollToActiveMenuItem()
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      nextTick(() => {
        menuSearchInputRef.value?.focus({ preventScroll: true })
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
      scrollToActiveMenuItem()
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
  '/arupa-jhana': ['/jhana', '/meditation', '/vipassana-nana'],
  '/vipassanupakkilesa': ['/vipassana-nana', '/visuddhi', '/kammatthana'],
  '/asava': ['/anusaya', '/upadana', '/core'],
  '/uposatha-types': ['/uposatha', '/ceremonies', '/daily'],
  '/anusaya': ['/asava', '/cetasika-qa', '/core'],
  '/visuddhi': ['/vipassanupakkilesa', '/vipassana-nana', '/magga'],
  '/vessantara': ['/jataka', '/barami', '/stories'],
  '/kalama-sutta': ['/suttas', '/core', '/questions'],
  '/sammappadhana': ['/bodhipakkhiya', '/magga', '/appamada'],
  '/iddhipada': ['/bodhipakkhiya', '/sammappadhana', '/indriya'],
  '/metta-sutta': ['/metta', '/brahmavihara', '/chanting'],
  '/six-speeches': ['/suttas', '/kalyanamitta', '/mindful-work'],
  '/dhammacakka': ['/suttas', '/core', '/sacca-kicca'],
  '/anattalakkhana': ['/suttas', '/tilakkhana', '/khandha'],
  '/sanghadana': ['/ceremonies', '/sangha', '/merit-transfer'],
  '/upadana': ['/paccaya', '/khandha', '/core'],
  '/dhamma-hearing': ['/suttas', '/chanting', '/punnakiriya'],
  '/gahi-sukha': ['/wealth', '/family', '/ethics'],
  '/macchariya': ['/cetasika-qa', '/punnakiriya', '/brahmavihara'],
  '/sappurisa': ['/rajadhamma', '/mindful-work', '/kalyanamitta'],
  '/paticcasamuppada': ['/paccaya', '/core', '/vipassana-bhumi'],
  '/dhatu': ['/ayatana', '/khandha', '/vipassana-bhumi'],
  '/niyama': ['/kamma', '/cosmology', '/paccaya'],
  '/carita': ['/kammatthana', '/meditation', '/asubha'],
  '/cakka': ['/sappurisa', '/gahi-sukha', '/kalyanamitta'],
  '/maranasanna': ['/death-and-rebirth', '/citta-vithi', '/merit-transfer'],
  '/devaduta': ['/asubha', '/maranasanna', '/suttas'],
  '/abhinna': ['/jhana', '/arupa-jhana', '/vipassana-nana'],
  '/dasabala': ['/buddha-guna', '/abhinna', '/suttas'],
  '/caturarakkha': ['/meditation', '/metta', '/asubha'],
  '/vimokkha': ['/tilakkhana', '/nibbana', '/vipassana-nana'],
  '/vipassana-bhumi': ['/khandha', '/ayatana', '/dhatu'],
  '/ariyavamsa': ['/dhutanga', '/paccaya-requisites', '/mindful-work'],
  '/vuddhi': ['/sappurisa', '/suttas', '/yonisomanasikara'],
  '/yonisomanasikara': ['/vuddhi', '/mindful-work', '/core'],
  '/ditthi': ['/kamma', '/core', '/kalama-sutta'],
  '/garuka-kamma': ['/kamma', '/maranasanna', '/disciples'],
  '/mitta': ['/kalyanamitta', '/sappurisa', '/family'],
  '/paccaya-requisites': ['/ariyavamsa', '/dhutanga', '/ceremonies'],
  '/samyojana': ['/ariya', '/magga', '/nibbana'],
  '/death-and-rebirth': ['/maranasanna', '/citta-vithi', '/merit-transfer'],
  '/anapanasati': ['/meditation', '/satipatthana', '/walking-meditation'],
  '/citta-matrix': ['/abhidhamma', '/cetasika-qa', '/citta-vithi'],
  '/vipassana-nana': ['/vipassana-bhumi', '/vimokkha', '/tilakkhana'],
  '/dhamma-aid': ['/questions', '/kamma', '/daily'],
  '/metta': ['/metta-sutta', '/caturarakkha', '/brahmavihara'],
  '/citta-vithi': ['/citta-matrix', '/abhidhamma', '/maranasanna'],
  '/magga': ['/core', '/bodhipakkhiya', '/visuddhi'],
  '/holy-sites': ['/life', '/asoka-history', '/ceremonies'],
  '/tiktok-studio': ['/my-gems', '/stories', '/gathas'],
  '/akusala-mula': ['/lobha-mula-citta', '/kamma', '/anusaya'],
  '/aghatapativinaya': ['/vitakkasanthana', '/metta', '/brahmavihara'],
  '/ahara': ['/paccaya', '/khandha', '/vedana'],
  '/paramattha-sacca': ['/abhidhamma', '/core', '/vipallasa'],
  '/puggala-4': ['/ariya', '/sappurisa', '/kamma'],
  '/vitakkasanthana': ['/aghatapativinaya', '/anapanasati', '/meditation'],
  '/natha-dhamma': ['/appamada', '/ariyadhana', '/core'],
  '/kusala-kammapatha': ['/kamma', '/ethics', '/sampajanna'],
  '/vipallasa': ['/paramattha-sacca', '/tilakkhana', '/ditthi'],
  '/sangha-vinaya-lay': ['/sangha', '/ariya-vinaya', '/ethics'],
  '/sampajanna': ['/satipatthana', '/mindful-work', '/kusala-kammapatha'],
  '/dana-types': ['/sanghadana', '/punnakiriya', '/barami'],
  '/puja-symbolism': ['/chanting', '/ceremonies', '/dana-types'],
  '/vedana': ['/khandha', '/satipatthana', '/sukha-levels'],
  '/ariya-vinaya': ['/sangha-vinaya-lay', '/ethics', '/rajadhamma'],
  '/asoka-history': ['/holy-sites', '/sangayana', '/tipitaka'],
  '/sukha-levels': ['/gahi-sukha', '/vedana', '/jhana'],
  '/saupadisesa-nibbana': ['/nibbana', '/ariya', '/core'],
  '/catummaharajika': ['/realms', '/cosmology', '/devaduta'],
  '/citta-daily': ['/citta-matrix', '/daily', '/akusala-mula'],
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

const onBeforeInstall = (e) => {
  e.preventDefault()
  installPrompt.value = e
}
const onAppInstalled = () => {
  installPrompt.value = null
  installChecked.value = true
  closeInstallPrompt()
}

// Consolidated Lifecycle Hooks
onMounted(() => {
  clearSavedScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('click', onSettingsGlobalClick)
  window.addEventListener('beforeprint', beforePrint)
  window.addEventListener('afterprint', afterPrint)
  window.addEventListener('online', updateOnline)
  window.addEventListener('offline', updateOnline)
  window.addEventListener('beforeinstallprompt', onBeforeInstall)
  window.addEventListener('appinstalled', onAppInstalled)
  installTimer = setTimeout(openInstallPrompt, 1500)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('click', onSettingsGlobalClick)
  window.removeEventListener('beforeprint', beforePrint)
  window.removeEventListener('afterprint', afterPrint)
  window.removeEventListener('online', updateOnline)
  window.removeEventListener('offline', updateOnline)
  window.removeEventListener('beforeinstallprompt', onBeforeInstall)
  window.removeEventListener('appinstalled', onAppInstalled)
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
  calendar: ['បដិទិនពុទ្ធសាសនា គណនាថ្ងៃសីល ឧបោសថ និងបុណ្យប្រពៃណីខ្មែរ។', 'Buddhist calendar, calculating lunar Uposatha observance days and holy festivals.'],
  realms: ['ស្ថានទាំង ៣១ ភព អបាយភូមិ ៤ មនុស្សលោក សួគ៌ ៦ ជាន់ និងព្រហ្មលោក ២០ ជាន់។', 'The 31 realms of existence: 4 woeful states, human realm, 6 heavenly deva realms, and 20 brahma worlds.'],
  bodhipakkhiya: ['ពោធិបក្ខិយធម៌ ៣៧ ប្រការ ធម៌ជាជំនួយដល់ការត្រាស់ដឹង និងការសម្រេចព្រះនិព្វាន។', 'The 37 factors of awakening leading to spiritual enlightenment and liberation.'],
  timer: ['នាឡិកាកំណត់ពេលសមាធិ និងសំឡេងកណ្ដឹងរំឭកសតិ។', 'Meditation timer with mindfulness bell sounds and peaceful interval alerts.'],
  quiz: ['ល្បងប្រាជ្ញាធម៌ សំណួរពហុជ្រើសរើសវាស់កម្រិតចំណេះដឹងព្រះពុទ្ធសាសនា។', 'Dhamma Quiz Challenge — interactive tests to evaluate your knowledge of Buddhist teachings.'],
  anapanasati: ['អានាបានសតិ ១៦ ដំណាក់កាល វិធីចម្រើនសមាធិតាមដង្ហើមចេញចូលតាមពុទ្ធវចនៈ។', 'The 16 steps of Ānāpānasati: breath mindfulness meditation according to the suttas.'],
  'citta-matrix': ['តារាងផែនទីចិត្ត ៨៩/១២១ និងចេតសិក ៥២ ក្នុងអភិធម្មបិដក។', 'Interactive Citta & Cetasika Matrix: 89/121 consciousnesses and 52 mental factors.'],
  'vipassana-nana': ['វិបស្សនាញាណ ១៦ ដំណាក់កាល ដំណើរនៃការចម្រើនបញ្ញាឃើញសច្ចធម៌។', 'The 16 stages of Vipassanā-ñāṇa insight knowledge leading to enlightenment.'],
  'dhamma-aid': ['ជំនួយសង្គ្រោះផ្លូវចិត្តតាមធម៌ ឱសថព្យាបាលទុក្ខព្រួយ វិបត្តិ និងការបាក់ទឹកចិត្ត។', 'Dhamma First Aid — Buddhist psychological guidance for emotional crisis, grief, and anxiety.'],
  metta: ['មេត្តាភាវនា វិធីផ្សាយសេចក្តីស្រឡាញ់រាប់អានដល់សត្វលោកឥតព្រំដែន។', 'Mettā-bhāvanā: Cultivating and radiating unconditional loving-kindness to all beings.'],
  'citta-vithi': ['ចិត្តវិថី ដំណើរនៃការកើតឡើងនៃចិត្តតាមទ្វារទាំង ៦ ក្នុងអភិធម្ម។', 'Citta Vīthi: The cognitive series and mental process through the 6 sense doors.'],
  magga: ['អរិយអដ្ឋង្គិកមគ្គ មគ្គ ៨ ជាក់ស្តែងក្នុងជីវិតសម័យថ្មី និងតារាងតាមដានការបដិបត្តិ។', 'The Practical Noble Eightfold Path in modern daily life with a habit tracker.'],
  'holy-sites': ['ពុទ្ធស្ថានសំខាន់ៗ ទីកន្លែងប្រសូត ត្រាស់ដឹង បឋមទេសនា និងបរិនិព្វាន។', 'Sacred Buddhist pilgrimage sites: Lumbini, Bodh Gaya, Sarnath, and Kusinara.'],
  prophecy: ['ពុទ្ធទំនាយ និងអនាគតកាលនៃព្រះពុទ្ធសាសនា ៥០០០ ព្រះវស្សា។', 'Buddhist prophecies and the 5,000-year dispensation of the Sasana.'],
  rajadhamma: ['រាជធម៌ ១០ ប្រការ គុណធម៌ និងក្បួនដឹកនាំសម្រាប់មេដឹកនាំប្រកបដោយទសពិធរាជធម៌។', 'Dasa Rājadhamma: The 10 virtues of righteous leadership and ethical governance.'],
  dhutanga: ['ធុតង្គ ១៣ ប្រការ វត្ថុបដិបត្តិដើម្បីកម្ចាត់កិលេស និងភាពសាមញ្ញនៃជីវិតបព្វជិត។', 'The 13 Dhutaṅga ascetic practices for purifying defilements and cultivating contentment.'],
  disciples: ['ព្រះអសីតិមហាសាវក ៨០ អង្គ កំពូលសាវកឆ្នើមផ្នែកនានារបស់ព្រះសម្មាសម្ពុទ្ធ។', 'The Great Disciples of the Buddha: 80 foremost Arahants and their spiritual masteries.'],
  cosmology: ['ចក្រវាឡវិទ្យាពុទ្ធសាសនា រចនាសម្ព័ន្ធភពផែនដី ភ្នំព្រះសុមេរុ និងមហាកប្ប។', 'Buddhist cosmology: Structure of universes, Mount Sumeru, and cycles of cosmic aeons (kappa).'],
  nibbana: ['ព្រះនិព្វាន សច្ចធម៌កំពូល ភាពរលត់ទុក្ខ និងកិលេសទាំងពួង។', 'Nibbāna: The ultimate reality, unconditioned peace, and complete cessation of suffering.'],
  'merit-transfer': ['ការឧទ្ទិសកុសល បុណ្យទានដល់ញាតិដែលចែកឋាន និងយន្តការទទួលបុណ្យក្នុងបរលោក។', 'Pattidāna: Dedication of merits to deceased relatives and karmic receptivity in the afterlife.'],
  tipitaka: ['ព្រះត្រៃបិដក រចនាសម្ព័ន្ធគម្ពីរវិន័យ សុត្តន្ត និងអភិធម្ម ៤៥ ០០០ ធម្មក្ខន្ធ។', 'The Pāli Tipiṭaka: Structure of Vinaya, Sutta, and Abhidhamma Pitakas (45,000 teachings).'],
  asubha: ['អសុភកម្មដ្ឋាន ១០ វិធីពិចារណារូបរាងកាយដើម្បីរំលត់កាមរាគៈ។', 'Asubha-kammatthāna: 10 foulness contemplations for dismantling sensual lust.'],
  sangaha: ['អភិធម្មត្ថសង្គហៈ សេចក្តីសង្ខេបបរមត្ថធម៌ ៤ យ៉ាងងាយយល់។', 'Abhidhammattha Saṅgaha: Concise compendium of the 4 ultimate realities.'],
  family: ['ធម៌សម្រាប់គ្រួសារ កាតព្វកិច្ចឪពុកម្តាយ កូន ស្វាមី ភរិយា និងសុភមង្គលក្នុងផ្ទះ។', 'Dhamma for family life: Duties of parents, children, spouses, and domestic harmony.'],
  ceremonies: ['ពិធីបុណ្យ និងទំនៀមទម្លាប់ព្រះពុទ្ធសាសនាខ្មែរ ពិសាខបូជា មាឃបូជា ភ្ជុំបិណ្ឌ។', 'Buddhist rituals and traditional Cambodian ceremonies: Visak Bochea, Meak Bochea, Pchum Ben.'],
  lokadhamma: ['លោកធម៌ ៨ ប្រការ ធម៌ប្រចាំលោក ធម៌ឡើងនិងធម៌ចុះក្នុងជីវិត។', 'Aṭṭha Lokadhamma: The 8 worldly conditions (gain/loss, status/disgrace, praise/blame, pleasure/pain).'],
  brahmavihara: ['ព្រហ្មវិហារធម៌ ៤ មេត្តា ករុណា មុទិតា ឧបេក្ខា ធម៌របស់ព្រហ្ម។', 'Brahmavihāra: The 4 sublime abodes (loving-kindness, compassion, sympathetic joy, equanimity).'],
  barami: ['បារមី ១០ ប្រការ គុណធម៌ដ៏ឧត្តមសម្រាប់បំពេញឆ្ពោះទៅកាន់ការត្រាស់ដឹង។', 'The 10 Pāramīs: Perfections cultivated by Bodhisattas on the path to awakening.'],
  kammatthana: ['កម្មដ្ឋាន ៤០ ប្រការ វិធានការហ្វឹកហាត់ចិត្តក្នុងគម្ពីរវិសុទ្ធិមគ្គ។', 'The 40 Kammatthāna meditation subjects from the Visuddhimagga.'],
  indriya: ['ឥន្ទ្រិយ ៥ ប្រការ សទ្ធា វីរិយៈ សតិ សមាធិ បញ្ញា និងការរក្សាតុល្យភាព។', 'The 5 Spiritual Faculties (Indriya): Faith, energy, mindfulness, concentration, and wisdom.'],
  sangayana: ['ការសង្គាយនាព្រះត្រៃបិដកទាំង ៦ លើក ប្រវត្តិការពារ និងផ្ទៀងផ្ទាត់ពុទ្ធវចនៈ។', 'The 6 Buddhist Councils: Historical preservation and recitation of the Tipiṭaka.'],
  jataka: ['ជាតក ៥៥០ រឿង រឿងរ៉ាវអតីតជាតិរបស់ព្រះពោធិសត្វសន្សំបារមី។', 'Jātaka Tales: 550 stories of the Bodhisatta\'s past lives cultivating perfections.'],
  wealth: ['ទ្រព្យសម្បត្តិ និងធម៌រក្សាទ្រព្យ វិធីរកស៊ី និងគ្រប់គ្រងហិរញ្ញវត្ថុតាមផ្លូវធម៌។', 'Right Wealth: Buddhist principles of righteous livelihood, savings, and financial mastery.'],
  apayamukha: ['អបាយមុខ ៦ ប្រការ ផ្លូវនៃសេចក្តីវិនាស និងការខាតបង់ទ្រព្យសម្បត្តិ។', 'Apāyamukha: The 6 causes of ruin and financial dissipation.'],
  ayatana: ['អាយតនៈ ១២ ប្រការ ទ្វារទទួលអារម្មណ៍ខាងក្នុង និងអារម្មណ៍ខាងក្រៅ។', 'The 12 Āyatanas: Internal and external sense bases shaping perception.'],
  ariyadhana: ['អរិយទ្រព្យ ៧ ប្រការ ទ្រព្យដ៏ប្រសើរជាប់តាមខ្លួនឆ្លងភពឆ្លងជាតិ។', 'Ariya Dhana: The 7 Noble Treasures that accompany consciousness across lifetimes.'],
  similes: ['ឧបមាក្នុងព្រះពុទ្ធសាសនា ពាក្យប្រៀបធៀបដាស់សតិក្នុងព្រះត្រៃបិដក។', 'Famous Buddhist Similes: Powerful metaphors and parables from the suttas.'],
  'lay-disciples': ['ឧបាសក និងឧបាសិកាគំរូ កំពូលឧបាសកឧបាសិកាក្នុងសម័យពុទ្ធកាល។', 'Foremost Lay Disciples: Eminent upasakas and upasikas of the Buddha’s time.'],
  'walking-meditation': ['ចង្ក្រមភាវនា វិធីដើរសមាធិ និងអត្ថប្រយោជន៍ដល់សុខភាពផ្លូវចិត្តនិងកាយ។', 'Walking Meditation (Caṅkama): Technique, mindfulness in motion, and health benefits.'],
  'bedtime-dhamma': ['ធម៌រំឭកមុនចូលគេង វិធីរៀបចំចិត្តឱ្យស្ងប់គេងលក់ស្រួលគ្មានសុបិន្តអាក្រក់។', 'Bedtime Dhamma: Mindful reflections and chants for peaceful sleep and relaxation.'],
  uposatha: ['ឧបោសថសីល សីល ៨ វិធីសមាទាន និងអានិសង្សនៃថ្ងៃសីល។', 'Uposatha Sīla: The Eight Precepts observance, rituals, and spiritual blessings.'],
  nivarana: ['នីវរណធម៌ ៥ ប្រការ គ្រឿងរារាំងចិត្តមិនឱ្យកើតសមាធិ និងបញ្ញា។', 'Nīvaraṇa: The 5 mental hindrances obstructing calm and meditative absorption.'],
  mangala: ['មង្គល ៣៨ ប្រការ មង្គលសូត្រ ធម៌នាំមកនូវសិរីសួស្តី និងសេចក្តីចម្រើនក្នុងជីវិត។', 'The 38 Blessings (Maṅgala Sutta): Timeless principles for worldly prosperity and peace.'],
  sangahavatthu: ['សង្គហវត្ថុ ៤ ប្រការ ធម៌សម្រាប់ចងចិត្តមនុស្ស និងសាមគ្គីភាពក្នុងសង្គម។', 'Saṅgahavatthu: The 4 bases of social harmony, generosity, and community cohesion.'],
  agati: ['អគតិ ៤ ប្រការ ផ្លូវលំអៀងដែលនាំឱ្យបាត់បង់យុត្តិធម៌ និងកិត្តិយស។', 'The 4 Agatis: Unjust biases (desire, hatred, delusion, fear) compromising integrity.'],
  katannu: ['កតញ្ញូតាធម៌ គុណធម៌ដឹងគុណ និងតបស្នងសងគុណមាតាបិតា និងអ្នកមានគុណ។', 'Kataññū: The virtue of gratitude and honoring parents, teachers, and benefactors.'],
  kammpatha: ['កម្មបថ ១០ ប្រការ ផ្លូវនៃការសាងអំពើល្អនិងអាក្រក់តាមកាយ វាចា ចិត្ត។', 'Kammapatha: The 10 wholesome and unwholesome courses of action in deed, word, and thought.'],
  'buddha-guna': ['ព្រះពុទ្ធគុណ ៩ ប្រការ ឥតិបិ សោ ភគវា អត្ថន័យ និងការរឭកគុណ។', 'The 9 Supreme Virtues of the Buddha (Iti pi so Bhagavā) and their meditative contemplation.'],
  punnakiriya: ['បុញ្ញកិរិយាវត្ថុ ១០ ប្រការ មូលដ្ឋាននៃការធ្វើបុណ្យ និងសន្សំពូជកុសល។', 'Puññakiriyavatthu: The 10 grounds for making merit in daily life.'],
  'mindful-work': ['ធម៌ក្នុងការងារ ការចម្រើនសតិ និងភាពស្មោះត្រង់ក្នុងអាជីពការងារ។', 'Mindfulness at Work: Cultivating focus, ethics, and emotional balance in the workplace.'],
  satipatthana: ['មហាសតិបដ្ឋានសូត្រ សតិបដ្ឋាន ៤ កាយ វេទនា ចិត្ត ធម៌ មាគ៌ាតែមួយគត់។', 'Mahāsatipaṭṭhāna Sutta: The 4 foundations of mindfulness—the direct path to liberation.'],
  bojjhanga: ['ពោជ្ឈង្គ ៧ ប្រការ អង្គនៃការត្រាស់ដឹង និងធម៌ព្យាបាលរោគផ្លូវចិត្ត។', 'Bojjhaṅga: The 7 factors of enlightenment that purify the mind and dispel afflictions.'],
  tilakkhana: ['ត្រៃលក្ខណ៍ ៣ ប្រការ អនិច្ចំ ទុក្ខំ អនត្តា សច្ចធម៌ធម្មជាតិនៃសង្ខារលោក។', 'Tilakkhaṇa: The 3 universal characteristics of all phenomena—impermanence, suffering, and non-self.'],
  khandha: ['បញ្ចក្ខន្ធ ខន្ធ ៥ រូប វេទនា សញ្ញា សង្ខារ វិញ្ញាណ ធាតុផ្សំនៃជីវិត។', 'The 5 Aggregates (Pañcakkhandha): Form, feeling, perception, mental formations, and consciousness.'],
  appamada: ['អប្បមាទធម៌ សេចក្តីមិនធ្វេសប្រហែស បណ្តាំចុងក្រោយរបស់ព្រះសម្មាសម្ពុទ្ធ។', 'Appamāda: Non-negligence, heedfulness—the Buddha’s final parting advice to humanity.'],
  'sacca-kicca': ['កិច្ចក្នុងអរិយសច្ច ៤ បរិញ្ញេយ្យ បហាតព្វ សច្ឆិកាតព្វ ភាវេតព្វ។', 'The 12 Tasks of the Four Noble Truths: What must be understood, abandoned, realized, and cultivated.'],
  'triple-gem-guna': ['គុណនៃព្រះរតនត្រ័យ ព្រះពុទ្ធគុណ ព្រះធម្មគុណ ព្រះសង្ឃគុណ ទីពឹងកំពូល។', 'The Virtues of the Triple Gem: The supreme refuge of the Buddha, Dhamma, and Sangha.'],
  jhana: ['រូបឈានទាំង ៤ វិតក្ក វិចារ បីតិ សុខ ឯកគ្គតា ថ្នាក់នៃសមាធិកំពូល។', 'The 4 Rūpa-Jhānas: Meditative absorptions, jhanic factors, and emotional bliss.'],
  abhinha: ['អភិណ្ហបច្ចវេក្ខណៈ ៥ ប្រការ ការពិចារណាជាប្រចាំអំពីជរា ព្យាធិ មរណៈ ព្រាត់ប្រាស និងកម្ម។', 'Abhiṇha-paccavekkhana: The 5 daily contemplations on aging, illness, death, separation, and kamma.'],
  asava: ['អាសវធម៌ ៤ ប្រការ គ្រឿងត្រាំងំកិលេសដែលជ្រាបចូលក្នុងចិត្តសត្វលោក។', 'Āsava: The 4 mental taints and intoxicating pollutions of the defiled mind.'],
  anusaya: ['អនុសយធម៌ ៧ ប្រការ កិលេសដែលដេកសម្ងំក្នុងសន្តានចិត្តរង់ចាំឱកាសរើឡើង។', 'Anusaya: The 7 latent tendencies and deep subconscious roots of unwholesome behavior.'],
  upadana: ['ឧបាទាន ៤ ប្រការ ការតោងស្អិតជាប់ជំពាក់ដែលនាំឱ្យកើតទុក្ខក្នុងវដ្តសង្សារ។', 'Upādāna: The 4 clingings and attachments fueling rebirth and suffering.'],
  visuddhi: ['វិសុទ្ធិ ៧ ប្រការ ដំណាក់កាលបរិសុទ្ធទាំង ៧ ឆ្ពោះទៅកាន់ព្រះនិព្វាន។', 'Visuddhi: The 7 stages of purification leading systematically to final release.'],
  dhammacakka: ['ធម្មចក្កប្បវត្តនសូត្រ ព្រះធម្មទេសនាដំបូងបង្អស់របស់ព្រះសម្មាសម្ពុទ្ធ។', 'Dhammacakkappavattana Sutta: The Buddha\'s first sermon setting in motion the Wheel of Dhamma.'],
  anattalakkhana: ['អនត្តលក្ខណសូត្រ ព្រះសូត្រស្តីពីភាពមិនមែនជារបស់ខ្លួន នាំឱ្យបញ្ចវគ្គីយ៍សម្រេចអរហត្ត។', 'Anattalakkhaṇa Sutta: The discourse on non-self that awakened the first five disciples to Arahantship.'],
  'arupa-jhana': ['អរូបឈាន ៤ កម្រិត អាកាសានញ្ចាយតនៈ វិញ្ញាណញ្ចាយតនៈ អាកិញ្ចញ្ញាយតនៈ នេវសញ្ញានាសញ្ញាយតនៈ។', 'The 4 Arūpa-Jhānas: Formless meditative absorptions beyond physical matter.'],
  vipassanupakkilesa: ['ឧបក្កិលេសនៃវិបស្សនា ១០ ប្រការ គ្រឿងសៅហ្មងដែលបំភាន់ចិត្តអ្នកចម្រើនភាវនា។', 'Vipassanūpakkilesa: The 10 corruptions of insight that deceive meditators on the path.'],
  'uposatha-types': ['ឧបោសថ ៣ បែប គោបាលកុបោសថ និគណ្ឋុបោសថ និងអរិយុបោសថ។', 'The 3 types of Uposatha: The cowherd\'s, the Nigaṇṭha\'s, and the Noble Disciple’s observance.'],
  sammappadhana: ['សម្មប្បធាន ៤ ប្រការ ព្យាយាមប្រុងប្រយ័ត្ន លះបង់ ចម្រើន និងរក្សាកុសលធម៌។', 'Sammappadhāna: The 4 supreme efforts to prevent, abandon, cultivate, and maintain wholesome states.'],
  iddhipada: ['ឥទ្ធិបាទ ៤ ប្រការ ឆន្ទ វីរិយៈ ចិត្ត វីមំសា មូលដ្ឋាននៃភាពជោគជ័យគ្រប់កិច្ចការ។', 'Iddhipāda: The 4 bases of spiritual power and accomplishment in all endeavors.'],
  vessantara: ['វេស្សន្តរជាតក មហាជាតកចុងក្រោយរបស់ព្រះពោធិសត្វ បំពេញទានបារមីកំពូល។', 'Vessantara Jātaka: The epic final lifetime of the Bodhisatta perfecting supreme generosity.'],
  'metta-sutta': ['ករណីយមេត្តសូត្រ ព្រះសូត្រស្តីពីការផ្សាយមេត្តា និងការរស់នៅដោយសុខសាន្ត។', 'Karaṇīyametta Sutta: The discourse on universal loving-kindness and fearlessness.'],
  'kalama-sutta': ['កាឡាមសូត្រ ធម្មនុញ្ញនៃសេរីភាពនៃការគិត និងការពិចារណាដោយបញ្ញាផ្ទាល់ខ្លួន។', 'Kālāma Sutta: The Buddha\'s charter on critical thinking and empirical verification.'],
  'six-speeches': ['វាចា ៦ យ៉ាង លក្ខណៈនៃពាក្យសម្តីដែលព្រះពុទ្ធជ្រើសរើសមានបន្ទូល និងមិនមានបន្ទូល។', 'The 6 types of speech: The Buddha’s criteria for truthful, beneficial, and timely words.'],
  sanghadana: ['សង្ឃទាន របៀបវារៈ និងអានិសង្សដ៏ធំធេងនៃការថ្វាយទានដល់ព្រះសង្ឃ។', 'Saṅghadāna: The rituals, spirit, and boundless spiritual fruition of offerings to the community of monks.'],
  'dhamma-hearing': ['អានិសង្សនៃការស្តាប់ធម៌ ៥ ប្រការ ការស្ដាប់ដើម្បីកើតបញ្ញា និងជ្រះថ្លាក្នុងចិត្ត។', 'The 5 blessings of listening to the Dhamma: Gaining new knowledge, clarifying doubts, and uplifting the heart.'],
  'gahi-sukha': ['ឃហដ្ឋសុខ សុខ ៤ យ៉ាងរបស់គ្រហស្ថ អត្ថិសុខ ភោគសុខ អនណសុខ អនវជ្ជសុខ។', 'Gahi-sukha: The 4 kinds of worldly happiness available to laypeople (possession, wealth, debtlessness, blamelessness).'],
  macchariya: ['មច្ឆរិយៈ ៥ ប្រការ សេចក្តីកំណាញ់ស្វិតស្វាញដែលបិទបាំងចិត្តមិនឱ្យរីកចម្រើន។', 'Macchariya: The 5 stinginesses (dwellings, families, gains, beauty, Dhamma) that contract the human heart.'],
  sappurisa: ['សប្បុរិសធម៌ ៧ ប្រការ គុណធម៌នៃមនុស្សថ្លៃថ្នូរ ស្គាល់ហេតុ ផល ខ្លួន ប្រមាណ កាល សង្គម និងបុគ្គល។', 'Sappurisa-dhamma: The 7 qualities of a genuinely noble and wise person.'],
  paticcasamuppada: ['បដិច្ចសមុប្បាទ ១២ អង្គ យន្តការនៃហេតុនិងផលដែលបង្វិលសត្វលោកក្នុងវដ្តសង្សារ។', 'Paṭiccasamuppāda: The 12 links of dependent origination sustaining the wheel of rebirth.'],
  dhatu: ['ធាតុ ១៨ ប្រការ ធាតុវិភាគដើម្បីបំបែកជំនឿលើ «តួខ្លួន» ឬ «អត្តា»។', 'Dhātu 18: Analysis of the 18 sensory elements dispelling the illusion of a permanent self.'],
  niyama: ['និយាម ៥ ប្រការ ច្បាប់ធម្មជាតិនៃចក្រវាឡ ឧតុ ពីជ ចិត្ត កម្ម និងធម្មនិយាម។', 'Niyāma: The 5 natural cosmic laws governing temperature, genetics, mind, kamma, and phenomena.'],
  carita: ['ចរិត ៦ ប្រការ រាគ ទោស មោហ សទ្ធា ពុទ្ធិ វិតក្ក និងកម្មដ្ឋានព្យាបាល។', 'Carita: The 6 psychological temperaments and their tailored meditation remedies.'],
  cakka: ['ចក្ក ៤ ប្រការ កង់នៃភាពចម្រើនរុងរឿង និងជោគជ័យក្នុងជីវិតទាំងផ្លូវលោកនិងផ្លូវធម៌។', 'Cakka 4: The four wheels of prosperity driving sustainable success in mundane and spiritual life.'],
  maranasanna: ['មរណាសន្នវិថី ដំណើរផ្លូវចិត្តពេលជិតស្លាប់ កម្ម និមិត្ត និងគតិនិមិត្ត។', 'Maraṇāsanna-vīthi: Mind at the threshold of death, karmic visions, and rebirth destinations.'],
  devaduta: ['ទេវទូត ៥ ព្រះអង្គ ក្មេងទារក មនុស្សចាស់ មនុស្សឈឺ អ្នកទោស និងសាកសព។', 'The 5 Devadūtas: Divine messengers of mortality awakening beings to spiritual urgency.'],
  abhinna: ['អភិញ្ញា ៦ ប្រការ អភិនិហារផ្លូវចិត្ត និងវិជ្ជា ៣ របស់ព្រះអរហន្ត។', 'Abhiññā: The 6 supernormal knowledges and transcendental masteries attained through meditation.'],
  dasabala: ['ទសពលញាណ ញាណដឹងកំពូលទាំង ១០ របស់ព្រះសម្មាសម្ពុទ្ធ។', 'Dasabala-ñāṇa: The 10 supreme intellectual powers unique to a Fully Awakened Buddha.'],
  caturarakkha: ['ចតុរារក្ខធម៌ ធម៌ការពារចិត្តទាំង ៤ ពុទ្ធានុស្សតិ មេត្តា អសុភ និងមរណានុស្សតិ។', 'Caturārakkha: The 4 Guardian Meditations shielding the mind from mental defilements.'],
  vimokkha: ['វិមោក្ខ ៣ ប្រការ ទ្វាររំដោះទុក្ខ សុញ្ញត អនិមិត្ត និងអប្បណិហិត។', 'Vimokkha: The 3 doors of liberation—emptiness, signlessness, and desirelessness.'],
  'vipassana-bhumi': ['វិបស្សនាភូមិ ៦ មូលដ្ឋានដីសម្រាប់ចម្រើនបញ្ញាវិបស្សនា។', 'Vipassanā-bhūmi: The 6 fertile domains for cultivating genuine insight wisdom.'],
  ariyavamsa: ['អរិយវង្ស ៤ ប្រការ ប្រពៃណីរបស់ព្រះអរិយៈ ការសន្តោសក្នុងបច្ច័យ ៤ និងសេចក្តីរីករាយក្នុងការភាវនា។', 'Ariyavaṁsa: The 4 noble traditions—contentment with requisites and delight in meditation.'],
  vuddhi: ['វុឌ្ឍិធម៌ ៤ ប្រការ ធម៌នាំមកនូវការចម្រើនប្រាជ្ញា សេពគប់សប្បុរស ស្ដាប់ធម៌ ពិចារណា និងបដិបត្តិតាម។', 'Vuḍḍhi-dhamma: The 4 factors fostering spiritual and intellectual wisdom.'],
  yonisomanasikara: ['យោនិសោមនសិការ ការធ្វើទុកក្នុងចិត្តដោយឧបាយប្រាជ្ញាត្រឹមត្រូវ។', 'Yonisomanasikāra: Wise attention—the root conditioning factor for liberating wisdom.'],
  ditthi: ['ទិដ្ឋិ ៦២ ប្រការ ការយល់ឃើញខុសដែលចងសត្វក្នុងសង្សារវដ្ត។', 'Diṭṭhi 62: The net of 62 wrong views examined in the Brahmajāla Sutta.'],
  'garuka-kamma': ['គរុកម្ម កម្មធ្ងន់បំផុតទាំងអនន្តរិយកម្ម និងមហគ្គតកុសល។', 'Garuka Kamma: Weighty karmic actions dictating immediate next-life rebirth.'],
  mitta: ['មិត្តពិត និងមិត្តក្លែងក្លាយ ៤ ពួក ការរាប់អានមនុស្សតាមពុទ្ធោវាទសិង្គាលកសូត្រ។', 'True and False Friends: The Buddha\'s guidance on relationships from the Sigālovāda Sutta.'],
  'paccaya-requisites': ['បច្ច័យ ៤ របស់បព្វជិត ជីវរ បិណ្ឌបាត សេនាសនៈ និងគិលានភេសជ្ជៈ។', 'The 4 Monastic Requisites: Robes, almsfood, dwelling, and medical medicines.'],
  samyojana: ['សំយោជនៈ ១០ ប្រការ ចំណងទាំង ១០ ដែលចងសត្វលោកមិនឱ្យរួចផុតពីវដ្តទុក្ខ។', 'Saṁyojana: The 10 spiritual fetters binding consciousness to cyclical rebirth.'],
  'akusala-mula': ['អកុសលមូល ៣ ឫសគល់បាប លោភៈ ទោសៈ មោហៈ និងវិធីផ្តាច់ឫស។', 'Akusala Mūla: The 3 unwholesome roots—greed, hatred, and delusion—and how to eradicate them.'],
  aghatapativinaya: ['វិធីរម្ងាប់កំហឹង ៥ យ៉ាង យន្តការផ្លូវចិត្តរំលត់គំនុំ និងការចងពៀរ។', '5 Ways of Subduing Resentment (Āghātapaṭivinaya): Techniques for dissolving inner bitterness.'],
  ahara: ['អាហារ ៤ យ៉ាងដែលចិញ្ចឹមសត្វលោក កវឡិង្ការាហារ ផស្សាហារ មនោសញ្ចេតនាហារ និងវិញ្ញាណាហារ។', 'The 4 Nutriments sustaining all sentient life: Physical food, contact, mental volition, and consciousness.'],
  'paramattha-sacca': ['សម្មុតិសច្ចៈ & បរមត្ថសច្ចៈ សច្ចធម៌នៃពាក្យសន្មត និងសច្ចធម៌ពិតនៃធម្មជាតិ។', 'Conventional vs Ultimate Truth: Distinguishing language conventions from ultimate experiential realities.'],
  'puggala-4': ['បុគ្គល ៤ ជំពូកក្នុងលោក ងងឹតមកងងឹតទៅ ងងឹតមកភ្លឺទៅ ភ្លឺមកងងឹតទៅ និងភ្លឺមកភ្លឺទៅ។', '4 Types of Persons: Traversing darkness to darkness, darkness to light, light to darkness, and light to light.'],
  vitakkasanthana: ['វិធីរម្ងាប់គំនិតអាក្រក់ ៥ យ៉ាង ជំហានបណ្តេញគំនិតរំខាន និងអវិជ្ជាតាមព្រះសូត្រ។', 'Vitakkasaṇṭhāna: 5 steps to halt intrusive negative thoughts from the Majjhima Nikāya.'],
  'natha-dhamma': ['ធម៌ជាទីពឹង ១០ ប្រការ គុណធម៌សម្រាប់ពឹងពាក់ខ្លួនឯងជាទីពឹងពិតប្រាកដ។', 'Nāthakaraṇa-dhamma: 10 virtues of genuine self-reliance taught by the Buddha.'],
  'kusala-kammapatha': ['កុសលកម្មបថ ១០ ប្រការ ផ្លូវនៃការសាងអំពើល្អបរិសុទ្ធ នាំឱ្យកើតក្នុងសុគតិភព។', '10 Wholesome Courses of Action: Ethical deeds in body, speech, and mind ensuring peaceful rebirth.'],
  vipallasa: ['វិបល្លាស ១២ ការភ័ន្តច្រឡំក្នុងការសម្គាល់ ការគិត និងការយល់ឃើញ។', 'Vipallāsa: 12 cognitive distortions mistaking impermanent, painful, non-self, and impure phenomena.'],
  'sangha-vinaya-lay': ['វិន័យសង្ឃបឋមសម្រាប់គ្រហស្ថ ការស្វែងយល់ដើម្បីជៀសវាងការធ្វើឱ្យព្រះសង្ឃដាច់វិន័យ។', 'Lay Guide to Monastic Vinaya: Understanding rules to protect monastics and offer proper support.'],
  sampajanna: ['សម្បជញ្ញៈ ៤ ប្រការ សេចក្តីដឹងខ្លួនច្បាស់ក្នុងការងារ និងការរស់នៅប្រចាំថ្ងៃ។', 'Sampajañña: 4 types of clear comprehension in daily actions, purposeful work, and reflection.'],
  'dana-types': ['ទាន ៣ ជំពូក អាមិសទាន អភយទាន ធម្មទាន និងបុណ្យ ៣ ជាន់។', '3 Forms of Giving: Material charity, gift of fearlessness, and the supreme gift of truth (Dhamma).'],
  'puja-symbolism': ['អត្ថន័យគ្រឿងសក្ការៈបូជា ផ្កា ធូប ទៀន និងទឹកបូជាចំពោះព្រះរតនត្រ័យ។', 'Symbolism of Buddhist Offerings: Profound meanings of flowers, incense, candles, and water.'],
  vedana: ['វេទនា ៥ ប្រការ សុខ ទុក្ខ សោមនស្ស ទោមនស្ស ឧបេក្ខា និងវិជ្ជាគ្រប់គ្រងអារម្មណ៍។', 'Vedanā 5: Sensory and emotional feelings, psychological mastery, and emotional regulation.'],
  'ariya-vinaya': ['អរិយវិន័យ vs ច្បាប់លោកីយ ភាពខុសគ្នារវាងការគ្រប់គ្រងកាយវាចាខាងក្រៅ និងការលាងជម្រះចិត្តខាងក្នុង។', 'Noble Discipline vs Worldly Law: Outer legal coercion vs inner voluntary transformation.'],
  'asoka-history': ['ព្រះបាទធម្មាសោក & ដែនដីសុវណ្ណភូមិ ប្រវត្តិផ្សព្វផ្សាយព្រះពុទ្ធសាសនាមកកាន់អាស៊ីអាគ្នេយ៍។', 'Emperor Asoka & Mission to Suvaṇṇabhūmi: Historic spread of Theravāda Buddhism to Southeast Asia.'],
  'sukha-levels': ['សុខ ៤ ថ្នាក់ក្នុងព្រះពុទ្ធសាសនា កាមសុខ ឈានសុខ វិបស្សនាសុខ និងនិព្វានសុខ។', '4 Ascending Stages of Happiness: Sensory delight, meditative absorption, insight joy, and Nibbānic bliss.'],
  'saupadisesa-nibbana': ['ព្រះនិព្វាន ២ យ៉ាង សឧបាទិសេសនិព្វាន និងអនុបាទិសេសនិព្វាន។', 'Two Nibbāna Realities: Liberation with residue (living Arahant) and liberation without residue (Parinibbāna).'],
  catummaharajika: ['ចាតុម្មហារាជិកា & មហារាជ ៤ ទិស ភពសួគ៌ជាន់ទី ១ និងទេវរាជការពារលោក។', 'Cātummahārājikā: The realm of the Four Heavenly Kings protecting the cardinal directions.'],
  'citta-daily': ['កុសលចិត្ត & អកុសលចិត្តប្រចាំថ្ងៃ ការសង្កេតចិត្តល្អ និងចិត្តអាក្រក់ក្នុងសកម្មភាពរស់នៅ។', 'Daily Mind States: Distinguishing wholesome vs unwholesome consciousness in everyday life.'],
  kalyanamitta: ['កល្យាណមិត្ត មិត្តល្អ ៤ ពួក និងមិត្តបាប ៤ ពួក តាមគម្ពីរសិង្គាលកសូត្រ។', 'Kalyāṇamitta: The 4 true noble friends vs 4 false deceptive friends in the Sigālovāda Sutta.'],
  'tiktok-studio': ['TikTok AI Studio ឧបករណ៍បង្កើតស្លាយវីដេអូព្រះធម៌សម្រាប់បណ្តាញសង្គម។', 'TikTok AI Studio: AI-powered Buddhist wisdom slide generator for video creators.'],
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