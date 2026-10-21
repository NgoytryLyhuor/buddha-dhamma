<template>
  <div>
    <!-- Header (logo + settings only; navigation lives in bottom bar) -->
    <header class="sticky top-0 z-50" :style="{ background: 'var(--bg-nav)', borderBottom: '1px solid var(--border)' }">
      <div class="max-w-6xl mx-auto px-4 pt-2.5">
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

        <!-- Categorized Desktop Navigation (Desktop/laptop only; mobile uses the bottom bar) -->
        <nav class="desktop-nav mt-2" ref="desktopNavContainerRef">
          <div class="desktop-nav-bar flex items-center justify-between gap-1 p-1 rounded-2xl"
            :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
            
            <!-- Home Link -->
            <router-link to="/" class="desktop-nav-item px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 text-xs transition"
              :class="routeMeta === '/' ? 'active' : ''">
              <span>🏠</span>
              <span>{{ t('ទំព័រដើម', 'Home') }}</span>
            </router-link>

            <!-- Category Dropdown Tabs -->
            <div class="flex items-center gap-1 relative">
              <div v-for="cat in desktopCategories" :key="cat.id" class="desktop-cat-wrapper relative"
                @mouseenter="openCatMenu(cat.id)"
                @mouseleave="scheduleCloseCatMenu">
                
                <button
                  type="button"
                  class="desktop-nav-item px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 text-xs transition cursor-pointer"
                  :class="[
                    activeDesktopCat === cat.id ? 'open-cat' : '',
                    isCatCurrentRoute(cat) ? 'active' : ''
                  ]"
                  @click.stop="toggleCatMenu(cat.id)">
                  <span>{{ cat.icon }}</span>
                  <span>{{ t(cat.kmShort, cat.en) }}</span>
                  <span class="text-[10px] px-1.5 py-0.2 rounded-full font-mono opacity-80"
                    :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                    {{ cat.items.length }}
                  </span>
                  <svg class="w-3 h-3 transition-transform duration-200 opacity-60"
                    :class="activeDesktopCat === cat.id ? 'rotate-180' : ''"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>

                <!-- Floating Dropdown Mega Menu -->
                <transition name="dropdown-pop">
                  <div v-if="activeDesktopCat === cat.id"
                    class="desktop-dropdown absolute top-full left-0 z-50 mt-1.5 p-3.5 rounded-2xl shadow-2xl backdrop-blur-md"
                    :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)', minWidth: cat.items.length > 7 ? '540px' : '360px' }"
                    @mouseenter="cancelCloseCatMenu"
                    @mouseleave="scheduleCloseCatMenu">
                    
                    <div class="dropdown-header flex items-center justify-between pb-2 mb-2.5 border-b"
                      :style="{ borderColor: 'var(--border)' }">
                      <span class="font-bold text-xs flex items-center gap-1.5" :style="{ color: 'var(--ink)' }">
                        <span>{{ cat.icon }}</span>
                        <span>{{ t(cat.km, cat.en) }}</span>
                      </span>
                      <span class="text-[11px] font-medium" :style="{ color: 'var(--ink-muted)' }">
                        {{ cat.items.length }} {{ t('ប្រធានបទ', 'topics') }}
                      </span>
                    </div>

                    <div class="dropdown-grid grid gap-1.5" :class="cat.items.length > 7 ? 'grid-cols-2' : 'grid-cols-1'">
                      <router-link
                        v-for="item in cat.items"
                        :key="item.to"
                        :to="item.to"
                        class="dropdown-item p-2 rounded-xl flex items-start gap-2.5 transition text-left"
                        :class="routeMeta === item.to ? 'active-item' : ''"
                        @click="closeAllDesktopMenus">
                        <span class="dropdown-num px-1.5 py-0.5 rounded-md font-bold text-[11px] shrink-0 font-mono"
                          :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)' }">
                          #{{ item.num }}
                        </span>
                        <div class="min-w-0 flex-1">
                          <span class="block font-bold text-xs truncate" :style="{ color: 'var(--ink)' }">
                            {{ t(item.km, item.en) }}
                          </span>
                          <span v-if="item.descKm" class="block text-[10.5px] truncate mt-0.5 opacity-75" :style="{ color: 'var(--ink-muted)' }">
                            {{ t(item.descKm, item.en) }}
                          </span>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </transition>
              </div>
            </div>

            <!-- Quick Search Button on Desktop -->
            <button
              type="button"
              class="desktop-search-pill px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 text-xs transition cursor-pointer hover:opacity-90"
              :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }"
              @click="openDesktopSearch"
              :title="t('ស្វែងរកក្នុងចំណោម ៤១ ម៉ឺនុយ (Ctrl+K)', 'Search 41 topics (Ctrl+K)')">
              <span>🔍</span>
              <span>{{ t('ស្វែងរក (៤១)', 'Search (41)') }}</span>
              <kbd class="hidden xl:inline text-[10px] px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10 font-mono">⌘K</kbd>
            </button>
          </div>
          <div class="dhammascroll mt-1.5"></div>
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

    <!-- Desktop Search Palette Modal (Ctrl+K) -->
    <teleport to="body">
      <transition name="fade">
        <div v-if="desktopSearchOpen" class="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-20 px-4"
          @click.self="closeDesktopSearch">
          <div class="w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)' }">
            
            <!-- Search Header -->
            <div class="p-3.5 border-b flex items-center gap-3" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }">
              <span class="text-lg">🔍</span>
              <input
                ref="desktopSearchInputRef"
                v-model="desktopSearchQuery"
                type="text"
                :placeholder="t('ស្វែងរកក្នុងចំណោម ៤១ ម៉ឺនុយ (ឧ. សមាធិ, កម្ម, ៣៦, អានាបានសតិ)...', 'Type to search 41 topics (e.g., meditation, kamma, 36)...')"
                class="w-full bg-transparent border-none text-sm focus:outline-none"
                :style="{ color: 'var(--ink)' }"
                @keydown.esc="closeDesktopSearch"
              />
              <button
                type="button"
                class="text-xs px-2 py-1 rounded font-mono hover:bg-black/10 dark:hover:bg-white/10"
                :style="{ color: 'var(--ink-muted)' }"
                @click="closeDesktopSearch">
                ESC
              </button>
            </div>

            <!-- Quick Categories filter in Search Modal -->
            <div class="px-3.5 py-2 border-b flex items-center gap-1.5 overflow-x-auto text-xs scrollbar-none" :style="{ borderColor: 'var(--border)' }">
              <button
                type="button"
                class="px-2.5 py-1 rounded-lg font-medium transition cursor-pointer shrink-0"
                :style="selectedSearchCat === 'all' ? { background: 'var(--accent)', color: '#fff' } : { color: 'var(--ink-muted)' }"
                @click="selectedSearchCat = 'all'">
                {{ t('ទាំងអស់ (៤១)', 'All (41)') }}
              </button>
              <button
                v-for="cat in desktopCategories"
                :key="cat.id"
                type="button"
                class="px-2.5 py-1 rounded-lg font-medium transition flex items-center gap-1 cursor-pointer shrink-0"
                :style="selectedSearchCat === cat.id ? { background: 'var(--accent)', color: '#fff' } : { color: 'var(--ink-muted)' }"
                @click="selectedSearchCat = cat.id">
                <span>{{ cat.icon }}</span>
                <span>{{ t(cat.kmShort, cat.en) }}</span>
              </button>
            </div>

            <!-- Results List -->
            <div class="max-h-[55vh] overflow-y-auto p-2 space-y-1">
              <router-link
                v-for="item in filteredDesktopSearchItems"
                :key="item.to"
                :to="item.to"
                class="p-2.5 rounded-xl flex items-center justify-between gap-3 transition hover:scale-[1.005]"
                :class="routeMeta === item.to ? 'active-item' : ''"
                :style="{ background: routeMeta === item.to ? 'var(--accent-soft)' : 'transparent' }"
                @click="closeDesktopSearch">
                <div class="flex items-center gap-3 min-w-0">
                  <span class="px-2 py-1 rounded-lg text-xs font-bold font-mono shrink-0"
                    :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)' }">
                    #{{ item.num }}
                  </span>
                  <div class="min-w-0">
                    <span class="block font-bold text-xs sm:text-sm truncate" :style="{ color: 'var(--ink)' }">
                      {{ t(item.km, item.en) }}
                    </span>
                    <span class="block text-[11px] truncate opacity-75" :style="{ color: 'var(--ink-muted)' }">
                      {{ t(item.catKm, item.catEn) }}
                    </span>
                  </div>
                </div>
                <span class="text-xs shrink-0 font-medium opacity-70" :style="{ color: 'var(--accent)' }">
                  {{ t('ចូលអាន →', 'Read →') }}
                </span>
              </router-link>

              <div v-if="filteredDesktopSearchItems.length === 0" class="p-8 text-center text-xs" :style="{ color: 'var(--ink-muted)' }">
                {{ t('រកមិនឃើញប្រធានបទដែលត្រូវនឹងពាក្យស្វែងរកឡើយ', 'No matching topics found') }}
              </div>
            </div>

            <!-- Footer Tip -->
            <div class="p-2.5 text-center text-[11px] border-t" :style="{ borderColor: 'var(--border)', color: 'var(--ink-faint)', background: 'var(--bg-card-2)' }">
              {{ t('ចុចលើប្រធានបទណាមួយដើម្បីចូលអានភ្លាមៗ ឬចុច ESC ដើម្បីបិទ', 'Click any topic to navigate or press ESC to close') }}
            </div>
          </div>
        </div>
      </transition>
    </teleport>

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

    <!-- All pages sheet (slide-up menu, opens from the More tab) -->
    <transition name="sheet">
      <div v-if="menuOpen" class="menu-backdrop" @click.self="closeMenu">
        <div class="menu-sheet" role="dialog" aria-modal="true" :aria-label="t('ម៉ឺនុយទំព័រទាំងអស់', 'All pages')">
          <div class="menu-sheet-head">
            <span class="menu-sheet-title">{{ t('ម៉ឺនុយទាំងអស់', 'All Pages') }}</span>
            <button class="menu-sheet-close" @click="closeMenu" :aria-label="t('បិទ', 'Close')">&#10005;</button>
          </div>
          <div class="menu-sheet-list">
            <router-link v-for="n in nav" :key="n.to" :to="n.to" class="menu-sheet-item"
              :class="routeMeta === n.to ? 'active' : ''" @click="closeMenu">
              <span class="menu-sheet-num" :style="{ color: 'var(--accent-bright)' }">{{ n.num }}</span>
              <span class="menu-sheet-name">{{ t(n.kmShort, n.en) }}</span>
            </router-link>
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

function onNavigationDone() {
  nextTick(scrollActiveTabIntoView)
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

const desktopNavContainerRef = ref(null)
const activeDesktopCat = ref(null)
const desktopSearchOpen = ref(false)
const desktopSearchQuery = ref('')
const selectedSearchCat = ref('all')
const desktopSearchInputRef = ref(null)
let closeCatTimer = null

const desktopCategories = [
  {
    id: 'dhamma',
    km: 'ព្រះធម៌ & ចក្រវាឡ',
    kmShort: 'ព្រះធម៌',
    en: 'Dhamma & Cosmos',
    icon: '☸️',
    items: [
      { to: '/core', km: 'ធម៌មូលដ្ឋាន', en: 'Core Teachings', num: '២', descKm: 'អរិយសច្ច ៤, ខន្ធ ៥' },
      { to: '/abhidhamma', km: 'អភិធម្ម', en: 'Abhidhamma', num: '៣', descKm: 'បរមត្ថធម៌ ៤ (ចិត្ត ចេតសិក រូប និព្វាន)' },
      { to: '/kamma', km: 'កម្ម និងផល', en: 'Kamma & Result', num: '៤', descKm: 'ច្បាប់នៃកម្ម កម្មបថ ១០ វិបាកកម្ម' },
      { to: '/suttas', km: 'ព្រះសូត្រសំខាន់ៗ', en: 'Key Suttas', num: '៧', descKm: 'ធម្មចក្កប្បវត្តនសូត្រ មង្គលសូត្រ...' },
      { to: '/gathas', km: 'គាថាព្រះធម៌', en: 'Dhamma Gāthā', num: '៩', descKm: 'គាថាភាសិតជ្រាលជ្រៅ និងពុទ្ធឱវាទ' },
      { to: '/paccaya', km: 'បដិច្ចសមុប្បាទ', en: 'Dependent Origination', num: '១៧', descKm: 'អង្គ ១២ នៃខ្សែចង្វាក់បដិច្ចសមុប្បាទ' },
      { to: '/realms', km: 'ស្ថានទាំង ៣១ ភព', en: '31 Realms', num: '២៣', descKm: 'អបាយ ៤, កាម ៧, រូប ១៦, អរូប ៤' },
      { to: '/bodhipakkhiya', km: 'ពោធិបក្ខិយធម៌ ៣៧', en: '37 Awakening Factors', num: '២៤', descKm: 'ធម៌ជាចំណែកនៃការពោធិត្រាស់ដឹង' },
      { to: '/magga', km: 'មគ្គ ៨ ជាក់ស្តែង', en: 'Noble Eightfold Path', num: '៣៤', descKm: 'ផ្លូវកណ្តាលក្នុងការរស់នៅ និងប្រតិបត្តិ' },
      { to: '/prophecy', km: 'ពុទ្ធព្យាករណ៍ ៥០០០ វស្សា', en: '5000-Year Prophecy', num: '៣៨', descKm: 'អន្តរធាន ៥ & ព្រះសិរិអារ្យមេត្រីយ៍' },
      { to: '/cosmology', km: 'កប្ប ចក្រវាឡ & អគ្គញ្ញសូត្រ', en: 'Cosmology & Origins', num: '៤០', descKm: 'វដ្តកប្ប ព្រះអាទិត្យ ៧ & កំណើតសង្គម' },
    ]
  },
  {
    id: 'practice',
    km: 'ការបដិបត្តិ & សមាធិ',
    kmShort: 'ការបដិបត្តិ',
    en: 'Practice & Meditation',
    icon: '🧘',
    items: [
      { to: '/meditation', km: 'សមាធិ (សមថ & វិបស្សនា)', en: 'Meditation Practice', num: '៦', descKm: 'របៀបអង្គុយសមាធិ និងអានិសង្ស' },
      { to: '/chanting', km: 'សូត្រ ១០ (Chanting)', en: 'Daily Chanting', num: '១០', descKm: 'ធម៌សូត្រប្រចាំថ្ងៃ ព្រឹក-ល្ងាច' },
      { to: '/daily', km: 'បដិបត្តិប្រចាំថ្ងៃ', en: 'Daily Practice', num: '១៩', descKm: 'ទម្លាប់សាងកុសលប្រចាំថ្ងៃរបស់ពុទ្ធបរិស័ទ' },
      { to: '/recollections', km: 'អនុស្សតិ ១០', en: 'Recollections', num: '២០', descKm: 'ពុទ្ធានុស្សតិ ធម្មា សង្ឃា ចាគានុស្សតិ...' },
      { to: '/calendar', km: 'បដិទិនពុទ្ធសាសនា', en: 'Buddhist Calendar', num: '២២', descKm: 'ថ្ងៃសីល ថ្ងៃពេញបូណ៌មី និងបុណ្យទាន' },
      { to: '/timer', km: 'នាឡិកាសមាធិ', en: 'Meditation Timer', num: '២៥', descKm: 'នាឡិកាកំណត់ពេលសមាធិ និងសម្លេងជួង' },
      { to: '/anapanasati', km: 'អានាបានសតិ ១៦ ដំណាក់កាល', en: '16 Anapanasati Steps', num: '២៨', descKm: 'វិធីដកដង្ហើមភាវនាតាមពុទ្ធវចនៈ' },
      { to: '/vipassana-nana', km: 'វិបស្សនាញាណ ១៦ ដំណាក់កាល', en: '16 Vipassanā Stages', num: '៣០', descKm: 'ដំណើរផ្លូវចិត្តឈានទៅរកការត្រាស់ដឹង' },
      { to: '/metta', km: 'មេត្តាភាវនា ១០ ទិស', en: 'Metta Bhavana', num: '៣២', descKm: 'ការផ្សាយមេត្តាចិត្តដល់សត្វលោកឥតព្រំដែន' },
      { to: '/dhutanga', km: 'ធុតង្គ ១៣ ប្រការ', en: '13 Ascetic Practices', num: '៣៧', descKm: 'វត្តប្រតិបត្តិដុសខាត់កម្ចាត់កិលេស' },
      { to: '/merit-transfer', km: 'យន្តការឧទ្ទិសកុសល', en: 'Merit Dedication', num: '៤១', descKm: 'បដិទាន & បរទត្តូបជីវីប្រេត ក្នុងបុណ្យភ្ជុំ' },
    ]
  },
  {
    id: 'citta',
    km: 'ចិត្ត & បរមត្ថធម៌',
    kmShort: 'ចិត្ត & បរមត្ថ',
    en: 'Mind & Psychology',
    icon: '🧠',
    items: [
      { to: '/rupa-qa', km: 'សំណួររូបបរមត្ថ ២៨', en: 'Rūpa Paramattha Q&A', num: '១៤', descKm: 'មហាភូតរូប ៤ និងឧបាទាយរូប ២៤' },
      { to: '/cetasika-qa', km: 'សំណួរចេតសិកបរមត្ថ ៥២', en: 'Cetasika Q&A', num: '១៥', descKm: 'អញ្ញសមានចេតសិក អកុសល សោភណៈ' },
      { to: '/lobha-mula-citta', km: 'ចិត្តបរមត្ថ (លោភមូលចិត្ត ៨)', en: 'Citta Paramattha', num: '១៦', descKm: 'ដួងចិត្ត ៨៩/១២១ និងលោភមូលចិត្ត' },
      { to: '/death-and-rebirth', km: 'ដំណើរនៃការស្លាប់-បដិសន្ធិ', en: 'Death & Rebirth', num: '២៧', descKm: 'ចុតិចិត្ត បដិសន្ធិចិត្ត និងនិមិត្ត ៣ យ៉ាង' },
      { to: '/citta-matrix', km: 'ផែនទីចិត្ត និងចេតសិក', en: 'Citta Matrix', num: '២៩', descKm: 'តារាងបន្សំចិត្ត ៨៩ និងចេតសិក ៥២' },
      { to: '/dhamma-aid', km: 'ឱសថធម៌សង្គ្រោះអារម្មណ៍', en: 'Dhamma First-Aid', num: '៣១', descKm: 'ព្យាបាលទុក្ខព្រួយ ថប់បារម្ភ និងកំហឹង' },
      { to: '/citta-vithi', km: 'ដំណើរវិថីចិត្ត តាមទ្វារទាំង ៦', en: 'Citta Vīthi Simulator', num: '៣៣', descKm: 'ចក្ខុទ្វារវិថី សោតទ្វារវិថី មនោទ្វារវិថី' },
    ]
  },
  {
    id: 'life',
    km: 'ជីវិត សីល & សង្គម',
    kmShort: 'ជីវិត & សង្គម',
    en: 'Life & Society',
    icon: '👑',
    items: [
      { to: '/ethics', km: 'សីល និងបារមី', en: 'Ethics & Perfections', num: '៥', descKm: 'សីល ៥, សីល ៨, និងបារមី ១០ ទស្ស' },
      { to: '/life', km: 'ជីវប្រវត្តិព្រះពុទ្ធ', en: 'Life of the Buddha', num: '៨', descKm: 'ប្រសូតិ ត្រាស់ដឹង សម្តែងធម៌ បរិនិព្វាន' },
      { to: '/stories', km: 'រឿងល្បីៗក្នុងពុទ្ធសាសនា', en: 'Dhamma Stories', num: '១២', descKm: 'រឿងអដ្ឋកថា អង្គុលីមាល បដាចារា...' },
      { to: '/sangha', km: 'ជីវិតព្រះសង្ឃ', en: 'Monastic Life', num: '១៨', descKm: 'វិន័យភិក្ខុ ២២៧ សិក្ខាបទ ជីវិតបព្វជិត' },
      { to: '/ariya', km: 'អរិយបុគ្គល ៤ គូ (៨ ពួក)', en: 'Noble Persons', num: '២១', descKm: 'សោតាបន្ន សកទាគាមី អនាគាមី អរហន្ត' },
      { to: '/holy-sites', km: 'ទីសក្ការៈបូជាសំខាន់ទាំង ៤', en: 'Sacred Holy Sites', num: '៣៥', descKm: 'លុម្ពិនី ពុទ្ធគយា សារនាថ កុសិនារា' },
      { to: '/disciples', km: 'ព្រះអរហន្តសាវ័ក & ឯតទគ្គៈ', en: 'Great Disciples', num: '៣៦', descKm: 'អសីតិមហាថេរ ៨០ អង្គ និងបរិស័ទឆ្នើម' },
      { to: '/rajadhamma', km: 'ទសពិធរាជធម៌ ១០', en: 'Buddhist Leadership', num: '៣៩', descKm: 'អបរិហានិយធម៌ ៧ & អភិបាលកិច្ចរដ្ឋ' },
    ]
  },
  {
    id: 'study',
    km: 'សិក្សា & ល្បងប្រាជ្ញា',
    kmShort: 'សិក្សា & សំណួរ',
    en: 'Study & Interactive',
    icon: '📚',
    items: [
      { to: '/glossary', km: 'វចនានុក្រមធម៌', en: 'Dhamma Glossary', num: '១១', descKm: 'ពាក្យគន្លឹះបាលី និងពន្យល់ន័យក្បោះក្បាយ' },
      { to: '/questions', km: 'សំណួរ–ចម្លើយព្រះធម៌', en: 'Dhamma Q&A', num: '១៣', descKm: 'សំណួរចម្ងល់ជីវិត និងចម្លើយតាមព្រះធម៌' },
      { to: '/quiz', km: 'ល្បងប្រាជ្ញាធម៌ (Quiz)', en: 'Dhamma Quiz', num: '២៦', descKm: 'តេស្តចំណេះដឹងព្រះធម៌ និងប្រកួតប្រជែង' },
    ]
  }
]

function openCatMenu(id) {
  if (closeCatTimer) clearTimeout(closeCatTimer)
  activeDesktopCat.value = id
}

function scheduleCloseCatMenu() {
  if (closeCatTimer) clearTimeout(closeCatTimer)
  closeCatTimer = setTimeout(() => {
    activeDesktopCat.value = null
  }, 160)
}

function cancelCloseCatMenu() {
  if (closeCatTimer) clearTimeout(closeCatTimer)
}

function toggleCatMenu(id) {
  activeDesktopCat.value = activeDesktopCat.value === id ? null : id
}

function closeAllDesktopMenus() {
  activeDesktopCat.value = null
}

function isCatCurrentRoute(cat) {
  return cat.items.some(item => item.to === routeMeta.value)
}

function openDesktopSearch() {
  desktopSearchOpen.value = true
  activeDesktopCat.value = null
  nextTick(() => {
    desktopSearchInputRef.value?.focus()
  })
}

function closeDesktopSearch() {
  desktopSearchOpen.value = false
  desktopSearchQuery.value = ''
}

const allSearchableItems = computed(() => {
  const result = []
  // Add Home
  result.push({ to: '/', km: 'ទំព័រដើម', en: 'Home', num: '១', catKm: 'ទំព័រដើម', catEn: 'Home', catId: 'home' })
  desktopCategories.forEach(cat => {
    cat.items.forEach(item => {
      result.push({
        ...item,
        catKm: cat.km,
        catEn: cat.en,
        catId: cat.id
      })
    })
  })
  return result
})

const filteredDesktopSearchItems = computed(() => {
  let list = allSearchableItems.value
  if (selectedSearchCat.value !== 'all') {
    list = list.filter(item => item.catId === selectedSearchCat.value)
  }
  const q = desktopSearchQuery.value.trim().toLowerCase()
  if (!q) return list
  return list.filter(item => {
    return item.km.toLowerCase().includes(q) ||
      item.en.toLowerCase().includes(q) ||
      item.num.toLowerCase().includes(q) ||
      (item.descKm && item.descKm.toLowerCase().includes(q))
  })
})

function onDesktopGlobalClick(e) {
  if (desktopNavContainerRef.value && !desktopNavContainerRef.value.contains(e.target)) {
    activeDesktopCat.value = null
  }
}

function onDesktopKeydown(e) {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    openDesktopSearch()
  } else if (e.key === 'Escape') {
    if (desktopSearchOpen.value) closeDesktopSearch()
    if (activeDesktopCat.value) activeDesktopCat.value = null
  }
}

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
  { to: '/rupa-qa', km: 'សំណួររូបបរមត្ថ', kmShort: 'រូបបរមត្ថ', en: 'Rūpa Q&A', num: '១៤' },
  { to: '/cetasika-qa', km: 'សំណួរចេតសិកបរមត្ថ', kmShort: 'ចេតសិក', en: 'Cetasika Q&A', num: '១៥' },
  { to: '/lobha-mula-citta', km: 'ចិត្តបរមត្ថ', kmShort: 'ចិត្តបរមត្ថ', en: 'Citta Paramattha', num: '១៦' },
  { to: '/paccaya', km: 'បដិច្ចសមុប្បាទ', kmShort: 'បដិច្ចសមុប្បាទ', en: 'Origination', num: '១៧' },
  { to: '/sangha', km: 'ជីវិតព្រះសង្ឃ', kmShort: 'ព្រះសង្ឃ', en: 'Monastic', num: '១៨' },
  { to: '/daily', km: 'បដិបត្តិប្រចាំថ្ងៃ', kmShort: 'ប្រចាំថ្ងៃ', en: 'Daily', num: '១៩' },
  { to: '/recollections', km: 'អនុស្សតិ', kmShort: 'អនុស្សតិ', en: 'Recollections', num: '២០' },
  { to: '/ariya', km: 'អរិយបុគ្គល', kmShort: 'អរិយ', en: 'Noble Ones', num: '២១' },
  { to: '/calendar', km: 'បដិទិនពុទ្ធសាសនា', kmShort: 'បដិទិន', en: 'Calendar', num: '២២' },
  { to: '/realms', km: 'ស្ថានទាំង ៣១ ភព', kmShort: '៣១ ភព', en: '31 Realms', num: '២៣' },
  { to: '/bodhipakkhiya', km: 'ពោធិបក្ខិយធម៌ ៣៧', kmShort: 'ពោធិបក្ខិយ', en: '37 Awakening', num: '២៤' },
  { to: '/timer', km: 'នាឡិកាសមាធិ', kmShort: 'នាឡិកាសមាធិ', en: 'Timer', num: '២៥' },
  { to: '/quiz', km: 'ល្បងប្រាជ្ញាធម៌', kmShort: 'ល្បងប្រាជ្ញា', en: 'Quiz', num: '២៦' },
  { to: '/death-and-rebirth', km: 'ដំណើរនៃការស្លាប់-បដិសន្ធិ', kmShort: 'ស្លាប់-បដិសន្ធិ', en: 'Death & Rebirth', num: '២៧' },
  { to: '/anapanasati', km: 'អានាបានសតិ ១៦ ដំណាក់កាល', kmShort: 'អានាបានសតិ', en: 'Anapanasati', num: '២៨' },
  { to: '/citta-matrix', km: 'ផែនទីចិត្ត និងចេតសិក', kmShort: 'ផែនទីចិត្ត', en: 'Citta Matrix', num: '២៩' },
  { to: '/vipassana-nana', km: 'វិបស្សនាញាណ ១៦ ដំណាក់កាល', kmShort: 'វិបស្សនាញាណ', en: '16 Vipassanā', num: '៣០' },
  { to: '/dhamma-aid', km: 'ឱសថធម៌សង្គ្រោះអារម្មណ៍', kmShort: 'សង្គ្រោះអារម្មណ៍', en: 'Dhamma Aid', num: '៣១' },
  { to: '/metta', km: 'មេត្តាភាវនា ១០ ទិស', kmShort: 'មេត្តា ១០ ទិស', en: 'Mettā 10 Directions', num: '៣២' },
  { to: '/citta-vithi', km: 'ដំណើរវិថីចិត្ត តាមទ្វារទាំង ៦', kmShort: 'វិថីចិត្ត', en: 'Citta Vīthi', num: '៣៣' },
  { to: '/magga', km: 'មគ្គ ៨ ជាក់ស្តែងក្នុងជីវិត', kmShort: 'មគ្គ ៨', en: 'Noble Path', num: '៣៤' },
  { to: '/holy-sites', km: 'ទីសក្ការៈបូជាសំខាន់ទាំង ៤', kmShort: 'សង្វេជនីយដ្ឋាន', en: 'Holy Sites', num: '៣៥' },
  { to: '/disciples', km: 'ព្រះអរហន្តសាវ័ក & ឯតទគ្គៈ', kmShort: 'អរហន្តសាវ័ក', en: 'Great Disciples', num: '៣៦' },
  { to: '/dhutanga', km: 'ធុតង្គ ១៣ ប្រការ', kmShort: 'ធុតង្គ ១៣', en: '13 Dhutanga', num: '៣៧' },
  { to: '/prophecy', km: 'ពុទ្ធព្យាករណ៍ & ព្រះមេត្រី', kmShort: 'ពុទ្ធព្យាករណ៍', en: 'Prophecy & Metteyya', num: '៣៨' },
  { to: '/rajadhamma', km: 'ទសពិធរាជធម៌ ១០', kmShort: 'ទសពិធរាជធម៌', en: 'Leadership & Rajadhamma', num: '៣៩' },
  { to: '/cosmology', km: 'កប្ប ចក្រវាឡ & អគ្គញ្ញសូត្រ', kmShort: 'ចក្រវាឡ', en: 'Cosmology & Origins', num: '៤០' },
  { to: '/merit-transfer', km: 'យន្តការឧទ្ទិសកុសល', kmShort: 'ឧទ្ទិសបុណ្យ', en: 'Merit Dedication', num: '៤១' },
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
  dhamma: ['/core', '/abhidhamma', '/kamma', '/ethics', '/suttas', '/gathas', '/paccaya', '/ariya', '/realms', '/bodhipakkhiya', '/death-and-rebirth', '/citta-vithi', '/magga', '/prophecy', '/rajadhamma', '/cosmology'],
  practice: ['/meditation', '/chanting', '/daily', '/recollections', '/sangha', '/calendar', '/timer', '/anapanasati', '/vipassana-nana', '/metta', '/dhutanga', '/merit-transfer'],
  learn: ['/glossary', '/stories', '/questions', '/life', '/rupa-qa', '/cetasika-qa', '/lobha-mula-citta', '/quiz', '/citta-matrix', '/dhamma-aid', '/holy-sites', '/disciples'],
}

const activeTab = computed(() => {
  const cur = route.name === 'home' ? '/' : route.path
  for (const id in tabRoutes) if (tabRoutes[id].includes(cur)) return id
  return 'more'
})

const menuOpen = ref(false)
function openMenu() { menuOpen.value = !menuOpen.value }
function closeMenu() { menuOpen.value = false }

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
  document.addEventListener('click', onDesktopGlobalClick)
  window.addEventListener('keydown', onDesktopKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('pagehide', onSaveOnExit)
  document.removeEventListener('click', onSettingsGlobalClick)
  document.removeEventListener('click', onDesktopGlobalClick)
  window.removeEventListener('keydown', onDesktopKeydown)
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

watch(() => route.path, () => { if (settingsOpen.value) settingsOpen.value = false; if (menuOpen.value) menuOpen.value = false; if (hasError.value) hasError.value = false })

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
  'rupa-qa': ['សំណួរ–ចម្លើយ រូបបរមត្ថ ២៨ និងភាគរូបផ្សេងៗ។', 'Rūpa Paramattha Q&A — the 28 rūpas and related parts.'],
  'cetasika-qa': ['សំណួរ–ចម្លើយ ចេតសិកបរមត្ថ ៥២ ផស្ស វេទនា សញ្ញា ចេតនា ឯកគ្គតា។', 'Cetasika Paramattha Q&A — the 52 cetasikas, phassa, vedanā, saññā, cetanā, ekaggatā.'],
  'lobha-mula-citta': ['រំលឹកមេរៀនលោភមូលចិត្ត ៨ ដួង បរមត្ថអភិធម្ម ភាគ ១–៦។', 'Lobha Mūla Citta review — the 8 greed-rooted consciousnesses in Abhidhamma, parts 1–6.'],
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