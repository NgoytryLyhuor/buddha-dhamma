<template>
  <div class="fade-up pb-8">
    <!-- Header Badge & Title -->
    <div class="flex items-center gap-2 flex-wrap mb-2">
      <span class="h-7 px-3 rounded-full text-[11px] font-bold tracking-wider uppercase inline-flex items-center gap-1.5 shrink-0"
        :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)', border: '1px solid var(--accent)' }">
        <span>👑</span>
        <span>{{ t('ទំព័រពិសេសផ្ទាល់ខ្លួន · MY GEMS', 'PERSONAL SANCTUARY · MY TOP GEMS') }}</span>
      </span>
      <span class="h-7 px-2.5 text-xs font-mono font-bold rounded-full inline-flex items-center justify-center shrink-0"
        :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)', border: '1px solid var(--border)' }">
        {{ filteredGems.length }} / {{ gems.length }}
      </span>
    </div>

    <h2 class="mt-2 font-display text-2xl sm:text-3xl md:text-4xl leading-snug break-words" :style="{ color: 'var(--ink)' }">
      {{ t('កម្រងសំណួរកំពូល & ធម៌រតនៈផ្ទាល់ខ្លួន', 'My Top Questions & Dhamma Gems') }}
    </h2>
    <div class="ornament mt-3 sm:mt-4">&#9784;</div>
    <p class="mt-4 sm:mt-5 drop-cap leading-loose text-sm sm:text-base" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ទំព័រពិសេសនេះត្រូវបានបង្កើតឡើងសម្រាប់កត់ត្រា និងផ្ទុកនូវរាល់កំពូលសំណួរ-ចម្លើយដ៏ស៊ីជម្រៅបំផុត ដែលជាពន្លឺបញ្ញាជាក់ស្តែងក្នុងជីវិត។ រាល់ពេលដែលលោកអ្នកត្រូវការគន្លឹះដោះស្រាយទុក្ខ ពិចារណាធម៌ជ្រៅ ឬចង់រំឭកការត្រាស់ដឹងរបស់ព្រះពុទ្ធ លោកអ្នកអាចចូលមកកាន់ទំព័រនេះភ្លាមៗ។', 'This dedicated page gathers your personal collection of profound questions and masterclass Dhamma answers. Whenever life brings confusion or sorrow, or whenever you seek the Buddha’s acute wisdom on karma, consciousness, and the end of suffering, these gems are here for you.') }}
    </p>

    <!-- Search & Filter Controls (STRICTLY EQUAL HEIGHT CONTROLS) -->
    <div class="card-paper p-3.5 sm:p-5 md:p-6 mt-6 sm:mt-8">
      <div class="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3">
        <!-- Search Input (EQUAL HEIGHT h-10 = 40px) -->
        <div class="flex items-center gap-2 px-3 h-10 rounded-lg border flex-1 min-w-0"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }">
          <span class="text-sm opacity-60 shrink-0">🔍</span>
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="t('ស្វែងរកក្នុងសំណួរកំពូល (ព្រួញ, ឈាន, កម្ម, កូដ)...', 'Search top gems (arrow, jhana, kamma, coding)...')"
            class="w-full bg-transparent border-none text-xs sm:text-sm focus:outline-none"
            :style="{ color: 'var(--ink)' }"
          />
          <button v-if="searchQuery" type="button" @click="searchQuery = ''" class="text-xs opacity-50 hover:opacity-100 p-1 shrink-0">✕</button>
        </div>

        <!-- Controls: Expand/Collapse All (EQUAL HEIGHT h-10 = 40px, 50% width on mobile) -->
        <div class="grid grid-cols-2 sm:flex sm:items-center gap-2 shrink-0">
          <button
            type="button"
            class="h-10 px-3 text-xs font-semibold rounded-lg border transition cursor-pointer inline-flex items-center justify-center gap-1.5"
            :style="{ background: 'var(--bg-card)', color: 'var(--ink)', borderColor: 'var(--border)' }"
            @click="toggleAll(true)"
          >
            <span>📂</span>
            <span>{{ t('បើកទាំងអស់', 'Expand All') }}</span>
          </button>
          <button
            type="button"
            class="h-10 px-3 text-xs font-semibold rounded-lg border transition cursor-pointer inline-flex items-center justify-center gap-1.5"
            :style="{ background: 'var(--bg-card)', color: 'var(--ink)', borderColor: 'var(--border)' }"
            @click="toggleAll(false)"
          >
            <span>📁</span>
            <span>{{ t('បិទទាំងអស់', 'Collapse All') }}</span>
          </button>
        </div>
      </div>

      <!-- Category Filter Pills (EQUAL HEIGHT h-8 = 32px, Smooth Touch Momentum Scroll) -->
      <div class="flex items-center gap-2 overflow-x-auto pb-1 mt-3.5 scrollbar-none text-xs touch-pan-x"
        style="-webkit-overflow-scrolling: touch;">
        <button
          v-for="cat in categories"
          :key="cat.id"
          type="button"
          @click="activeCategory = cat.id"
          class="h-8 px-3 rounded-full font-semibold whitespace-nowrap transition cursor-pointer shrink-0 inline-flex items-center justify-center"
          :style="{
            background: activeCategory === cat.id ? 'var(--accent)' : 'var(--bg-card)',
            color: activeCategory === cat.id ? '#ffffff' : 'var(--ink-muted)',
            border: '1px solid ' + (activeCategory === cat.id ? 'var(--accent)' : 'var(--border)')
          }"
        >
          {{ t(cat.km, cat.en) }}
        </button>
      </div>
    </div>

    <!-- Quick Jump Horizontal TOC (EQUAL HEIGHT h-7 = 28px) -->
    <div class="mt-4 sm:mt-6 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs touch-pan-x"
      style="-webkit-overflow-scrolling: touch;">
      <span class="text-[11px] font-bold uppercase tracking-wider shrink-0 text-stone-400">
        {{ t('លោតទៅ ៖', 'Jump to:') }}
      </span>
      <a
        v-for="(gem, idx) in gems"
        :key="gem.id"
        :href="'#' + gem.id"
        class="h-7 px-2.5 text-xs rounded-md border shrink-0 transition inline-flex items-center justify-center font-medium"
        :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)', color: 'var(--ink)' }"
      >
        <span class="font-bold mr-1" :style="{ color: 'var(--accent-bright)' }">#{{ idx + 1 }}</span>
        <span>{{ t(gem.shortKm, gem.shortEn) }}</span>
      </a>
    </div>

    <!-- Gems List -->
    <div class="mt-6 space-y-5 sm:space-y-6">
      <div
        v-for="gem in filteredGems"
        :key="gem.id"
        :id="gem.id"
        class="card-paper p-4 sm:p-6 md:p-8 scroll-mt-24 transition relative"
        :style="gem.featured ? { border: '1.5px solid var(--accent)', boxShadow: '0 4px 20px var(--halo)' } : {}"
      >
        <!-- Top Gem Ribbon/Badge Row (RESPONSIVE 1-LINE HEADER WITH EQUAL HEIGHT h-8 BUTTONS) -->
        <div class="flex items-center justify-between gap-2 pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
          <!-- Left: Gem Number & Category -->
          <div class="flex items-center gap-1.5 flex-wrap min-w-0">
            <span class="sutra-num font-mono text-xs sm:text-sm font-bold shrink-0" :style="{ color: 'var(--accent-bright)' }">
              GEM {{ khNum(gem.num) }}
            </span>
            <span class="h-6 px-2 rounded-full text-[10px] font-semibold inline-flex items-center justify-center shrink-0"
              :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)', border: '1px solid var(--border)' }">
              {{ t(gem.categoryKm, gem.categoryEn) }}
            </span>
          </div>

          <!-- Right: Unified Action Buttons with EXACT SAME HEIGHT (h-8 = 32px) -->
          <div class="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              class="h-8 px-2.5 text-xs rounded-lg border transition inline-flex items-center justify-center gap-1 cursor-pointer font-medium"
              :style="{
                background: 'var(--bg-card)',
                borderColor: copiedId === gem.id ? 'var(--sage, #2e7d32)' : 'var(--border)',
                color: copiedId === gem.id ? 'var(--sage, #2e7d32)' : 'var(--ink-muted)'
              }"
              @click.stop="copyGem(gem)"
              :title="t('ចម្លងសំណួរ-ចម្លើយនេះ', 'Copy this Gem')"
            >
              <span v-if="copiedId === gem.id" class="font-bold">✓ {{ t('បានចម្លង', 'Copied') }}</span>
              <span v-else class="inline-flex items-center gap-1">📋 <span>{{ t('ចម្លង', 'Copy') }}</span></span>
            </button>

            <button
              type="button"
              class="h-8 px-2.5 text-xs rounded-lg border transition inline-flex items-center justify-center gap-1 cursor-pointer font-medium"
              :style="{
                background: gem.open ? 'var(--accent-soft)' : 'var(--bg-card-2)',
                borderColor: gem.open ? 'var(--accent)' : 'var(--border)',
                color: gem.open ? 'var(--accent)' : 'var(--ink-muted)'
              }"
              @click.stop="gem.open = !gem.open"
              :aria-label="gem.open ? t('បិទ', 'Collapse') : t('បើក', 'Expand')"
            >
              <span>{{ gem.open ? t('បិទ', 'Close') : t('អាន', 'Read') }}</span>
              <span class="text-[9px] transition-transform duration-200" :class="{ 'rotate-180': gem.open }">▼</span>
            </button>
          </div>
        </div>

        <!-- Sub-header Row (Featured badge + Canonical Reference) -->
        <div v-if="gem.featured || gem.ref" class="mt-2.5 flex items-center gap-2 flex-wrap text-xs">
          <span v-if="gem.featured" class="h-5 px-2 rounded text-[10px] font-bold uppercase tracking-widest inline-flex items-center gap-1 shrink-0"
            :style="{ background: 'var(--accent)', color: '#fff' }">
            <span>⭐</span>
            <span>{{ t('រតនៈគ្រងកំពូល', 'CROWN GEM') }}</span>
          </span>
          <span v-if="gem.ref" class="text-[11px] font-mono shrink-0" :style="{ color: 'var(--accent)' }">
            {{ gem.ref }}
          </span>
        </div>

        <!-- Question Title (Clickable card header) -->
        <div class="mt-3 cursor-pointer select-none group" @click="gem.open = !gem.open">
          <div class="flex items-start justify-between gap-2">
            <h3 class="font-display text-lg sm:text-xl md:text-2xl leading-snug break-words flex-1 min-w-0 group-hover:text-amber-600 transition"
              :style="{ color: 'var(--ink)' }">
              {{ t(gem.questionKm, gem.questionEn) }}
            </h3>
            <span class="caret shrink-0 mt-1 text-xs transition-transform duration-200"
              :class="{ 'rotate-180': gem.open }"
              :style="{ color: 'var(--accent-bright)' }">
              &#9660;
            </span>
          </div>
          <p v-if="gem.paliQuote" class="paali text-[11px] mt-1.5 inline-block break-words" :style="{ color: 'var(--accent-bright)' }">
            {{ gem.paliQuote }}
          </p>
        </div>

        <!-- Collapsible Content -->
        <transition name="fade">
          <div v-if="gem.open" class="mt-5 pt-4 border-t space-y-5" :style="{ borderColor: 'var(--border)' }">
            <!-- Key Takeaway Box -->
            <div class="p-3.5 sm:p-4 rounded-xl" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--accent)' }">
              <p class="text-[11px] font-bold tracking-widest uppercase flex items-center gap-1.5" :style="{ color: 'var(--accent)' }">
                <span>💡</span>
                <span>{{ t('ខ្លឹមសារសង្ខេបជាគន្លឹះ (ESSENCE)', 'KEY DHAMMA TAKEAWAY') }}</span>
              </p>
              <p class="text-sm sm:text-base mt-2 font-medium leading-relaxed break-words" :style="{ color: 'var(--ink)' }">
                {{ t(gem.essenceKm, gem.essenceEn) }}
              </p>
            </div>

            <!-- Deep Breakdown Sections -->
            <div class="space-y-4">
              <div
                v-for="(sec, sIdx) in gem.sections"
                :key="sIdx"
                class="p-3.5 sm:p-5 rounded-xl border transition"
                :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }"
              >
                <h4 class="font-display text-base sm:text-lg flex items-start gap-2 break-words" :style="{ color: 'var(--ink)' }">
                  <span class="h-5 px-1.5 rounded text-xs font-bold shrink-0 mt-0.5 inline-flex items-center justify-center"
                    :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                    {{ sIdx + 1 }}
                  </span>
                  <span>{{ t(sec.titleKm, sec.titleEn) }}</span>
                </h4>

                <div class="mt-3 text-xs sm:text-sm md:text-base leading-loose whitespace-pre-line break-words" :style="{ color: 'var(--ink-soft)' }">
                  {{ t(sec.contentKm, sec.contentEn) }}
                </div>

                <!-- Sub-points / List -->
                <ul v-if="sec.points && sec.points.length" class="tick-list mt-3.5 space-y-2">
                  <li v-for="(p, pIdx) in sec.points" :key="pIdx" class="text-xs sm:text-sm leading-relaxed break-words">
                    <strong v-if="p.boldKm" :style="{ color: 'var(--ink)' }">{{ t(p.boldKm, p.boldEn) }} ៖ </strong>
                    <span :style="{ color: 'var(--ink-muted)' }">{{ t(p.km, p.en) }}</span>
                  </li>
                </ul>

                <!-- Quote / Note -->
                <div v-if="sec.quoteKm" class="mt-3.5 p-3 rounded-lg text-xs sm:text-sm italic leading-relaxed break-words"
                  :style="{ background: 'var(--bg-card)', borderLeft: '3px solid var(--accent)', color: 'var(--ink-soft)' }">
                  {{ t(sec.quoteKm, sec.quoteEn) }}
                </div>
              </div>
            </div>

            <!-- Practical Life Application -->
            <div v-if="gem.practicalKm" class="p-3.5 sm:p-4 rounded-xl border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
              <p class="text-[11px] font-bold tracking-widest uppercase flex items-center gap-1.5" :style="{ color: 'var(--sage, #2e7d32)' }">
                <span>🌱</span>
                <span>{{ t('មេរៀនជីវិតជាក់ស្តែង (PRACTICAL APPLICATION)', 'PRACTICAL APPLICATION IN DAILY LIFE') }}</span>
              </p>
              <p class="text-xs sm:text-sm md:text-base mt-2 leading-loose break-words" :style="{ color: 'var(--ink-soft)' }">
                {{ t(gem.practicalKm, gem.practicalEn) }}
              </p>
            </div>

            <!-- Cross Navigation Links (EQUAL HEIGHT h-7 = 28px) -->
            <div v-if="gem.links && gem.links.length" class="pt-3 border-t flex flex-wrap items-center gap-2 text-xs" :style="{ borderColor: 'var(--border)' }">
              <span class="text-stone-400 font-semibold shrink-0">{{ t('ជំពូកពាក់ព័ន្ធ ៖', 'Related:') }}</span>
              <router-link
                v-for="l in gem.links"
                :key="l.to"
                :to="l.to"
                class="h-7 px-2.5 rounded-md transition underline font-medium inline-flex items-center justify-center shrink-0"
                :style="{ background: 'var(--bg-card-2)', color: 'var(--accent)', border: '1px solid var(--border)' }"
              >
                {{ t(l.km, l.en) }} &#8594;
              </router-link>
            </div>
          </div>
        </transition>
      </div>

      <!-- Empty State -->
      <div v-if="filteredGems.length === 0" class="card-paper p-8 sm:p-10 text-center">
        <p class="text-3xl">🔍</p>
        <h3 class="font-display text-lg mt-3" :style="{ color: 'var(--ink)' }">
          {{ t('រកមិនឃើញសំណួរដែលត្រូវនឹងពាក្យស្វែងរកឡើយ', 'No matching questions found') }}
        </h3>
        <p class="text-xs mt-2" :style="{ color: 'var(--ink-muted)' }">
          {{ t('សូមសាកល្បងវាយពាក្យផ្សេង ដូចជា «ព្រួញ», «កម្ម», «អភិធម្ម», «ឈាន» ឬចុច «ទាំងអស់»', 'Try searching for other keywords like "arrow", "kamma", "paccaya", "jhana", or select "All".') }}
        </p>
        <button
          type="button"
          class="h-9 px-4 mt-4 rounded-lg text-xs font-bold inline-flex items-center justify-center transition cursor-pointer"
          :style="{ background: 'var(--accent)', color: '#fff' }"
          @click="searchQuery = ''; activeCategory = 'all'"
        >
          {{ t('សម្អាតការស្វែងរក', 'Reset Search') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  return String(n).split('').map(d => khDigits[Number(d)]).join('')
}

const searchQuery = ref('')
const activeCategory = ref('all')
const copiedId = ref(null)

const categories = [
  { id: 'all', km: 'ទាំងអស់ (៩)', en: 'All (9)' },
  { id: 'arrow', km: '🎯 ឧបមាព្រួញ & ទស្សនវិជ្ជា', en: '🎯 Arrow & Pragmatism' },
  { id: 'abhidhamma', km: '🧠 អភិធម្ម & បដ្ឋាន', en: '🧠 Abhidhamma & Paṭṭhāna' },
  { id: 'kamma', km: '⚖️ កម្មផល & អហោសិកម្ម', en: '⚖️ Kamma & Ahosi' },
  { id: 'meditation', km: '🧘 សមាធិ & ឈាន', en: '🧘 Meditation & Jhāna' },
  { id: 'science', km: '🔬 វិទ្យាសាស្ត្រ & កូដ', en: '🔬 Science & Coding' },
]

function toggleAll(openState) {
  gems.value.forEach(g => { g.open = openState })
}

function copyGem(gem) {
  const text = `${gem.questionKm}\n\n[ខ្លឹមសារគន្លឹះ]: ${gem.essenceKm}\n\n[មេរៀនជីវិត]: ${gem.practicalKm || ''}\n\nប្រភព៖ ព្រះធម៌ (Buddha Dhamma) - ${window.location.origin}/my-gems#${gem.id}`
  navigator.clipboard.writeText(text).then(() => {
    copiedId.value = gem.id
    setTimeout(() => {
      if (copiedId.value === gem.id) copiedId.value = null
    }, 2000)
  })
}

const gems = ref([
  // GEM 1: Crown Jewel - The Parable of the Poisoned Arrow
  {
    id: 'arrow-parable',
    num: 1,
    featured: true,
    open: true,
    category: 'arrow',
    categoryKm: '🎯 ឧបមាព្រួញ & ទស្សនវិជ្ជាជាក់ស្តែង',
    categoryEn: '🎯 Arrow & Buddhist Pragmatism',
    ref: 'MN 63 (មជ្ឈិមនិកាយ មជ្ឈិមបណ្ណាសក)',
    paliQuote: 'Seyyathāpi, māluṅkyaputta, puriso sallena viddho assa savisena gāḷhena...',
    questionKm: 'ឧបមាព្រួញបាញ់ (ចូឡមាលុង្ក្យោវាទសូត្រ)៖ ហេតុអ្វីបានជាព្រះពុទ្ធមិនព្រមឆ្លើយបញ្ហាអព្យាក្រឹត្យទាំង ១០ ហើយដាស់តឿនឱ្យប្រញាប់ដកព្រួញពិសជាបន្ទាន់?',
    questionEn: 'The Parable of the Poisoned Arrow (Cūḷamāluṅkya Sutta MN 63): Why did the Buddha refuse the 10 speculative questions and urge immediate extraction of the arrow?',
    shortKm: 'ឧបមាព្រួញបំពុលពិស (MN 63)',
    shortEn: 'Poisoned Arrow (MN 63)',
    essenceKm: 'មនុស្សយើងកំពុងត្រូវ «ព្រួញនៃសេចក្តីទុក្ខ ជរា និងមរណៈ» បាញ់ចំទ្រូងក្នុងបច្ចុប្បន្ន។ អ្វីដែលសំខាន់បំផុត មិនមែនជារឿងចង់ដឹងថា «យើងចាប់ផ្តើមកើតពីកាលណា ឬចក្រវាឡទៀងឬមិនទៀង» នោះទេ ប៉ុន្តែគឺត្រូវដឹងថា «តើត្រូវរំលត់ទុក្ខ និងបញ្ចប់វដ្តនេះនៅជាតិនេះដោយរបៀបណា?»។',
    essenceEn: 'Humanity is pierced in the chest right now by the poisoned arrow of suffering, aging, and death. The supreme task is not speculating on cosmic origins, but knowing how to extract the arrow and extinguish suffering right here in this life.',
    practicalKm: 'យើងច្រើនតែចំណាយពេលពេញមួយជីវិត ឈ្លោះប្រកែកគ្នាលើរឿងទ្រឹស្តីនយោបាយ ទស្សនវិជ្ជា ជំនឿអរូបី ឬការរិះគន់អ្នកដទៃ (ដូចបុរសដែលចង់ដឹងឈ្មោះអ្នកបាញ់) ប៉ុន្តែបែរជាមើលរំលងព្រួញនៃ «កំហឹង ស្ត្រេស ការព្រួយបារម្ភ និងសេចក្តីស្លាប់» ដែលកំពុងដោតជាប់ទ្រូងខ្លួនឯងរាល់ថ្ងៃ។ ភាពវៃឆ្លាតពិតប្រាកដ គឺការឈប់ខ្ជះខ្ជាយថាមពលជាមួយសំណួរដែលគ្មានចម្លើយ ហើយងាកមកដកព្រួញនៃកំហឹង និងភាពលោភលន់ចេញពីចិត្តក្នុងបច្ចុប្បន្នខណៈវិញ!',
    practicalEn: 'We squander precious lifetimes arguing over politics, abstract metaphysics, or criticizing others (like demanding the archer’s clan), while ignoring the poisoned arrows of anger, anxiety, stress, and mortality lodged in our own chest. True wisdom is dropping insoluble debates to extract defilement from the heart this very moment.',
    links: [
      { to: '/suttas#sutta-culamalunkya', km: 'អានចូឡមាលុង្ក្យោវាទសូត្រពេញ', en: 'Full Cūḷamāluṅkya Sutta' },
      { to: '/core#roots-of-suffering', km: 'ឫសគល់នៃទុក្ខ និងវិធីរំលត់', en: 'Roots of Suffering' },
      { to: '/questions', km: 'សំណួរ–ចម្លើយ ២៩', en: 'Q&A 29' },
    ],
    sections: [
      {
        titleKm: '១. ដើមហេតុនៃរឿង ៖ ការគំរាមសឹករបស់ព្រះមាលុង្ក្យបុត្ត',
        titleEn: '1. Background: Venerable Māluṅkyaputta’s Threat to Disrobe',
        contentKm: 'ព្រះភិក្ខុមួយអង្គព្រះនាម មាលុង្ក្យបុត្ត បានចូលទៅពួនសម្ងំគិតតែម្នាក់ឯង ហើយកើតសេចក្តីមិនពេញចិត្តនឹងព្រះពុទ្ធ ដោយសារព្រះអង្គមិនព្រមឆ្លើយនូវ «បញ្ហាអព្យាក្រឹត្យទាំង ១០» (អព្យាកតបញ្ហា — The 10 Unanswered Questions)។\nព្រះមាលុង្ក្យបុត្តបានដើរទៅគាល់ព្រះពុទ្ធ ហើយទូលគំរាមត្រង់ៗថា៖ «បពិត្រព្រះអង្គដ៏ចម្រើន! ប្រសិនបើព្រះអង្គមិនព្រមបកស្រាយបញ្ហាទាំងនេះឱ្យខ្ញុំព្រះអង្គបានដឹងច្បាស់ទេ ខ្ញុំព្រះអង្គនឹងលាចាកសិក្ខាបទ ទៅជាគ្រហស្ថវិញភ្លាម!»',
        contentEn: 'Ven. Māluṅkyaputta went into solitary reflection and grew resentful because the Blessed One had left the 10 speculative metaphysical dilemmas undeclared. He approached the Buddha and delivered an ultimatum: if the Buddha would not resolve these 10 issues, he would abandon the monastic training and return to lay life immediately.',
        points: [
          { boldKm: 'សំណួរ ១–២ (កាលអាកាស)', boldEn: 'Questions 1–2', km: 'តើលោក (ចក្រវាឡ) ទៀងទាត់ (កើតរហូត) ឬមិនទៀងទាត់?', en: 'Is the cosmos eternal or not eternal?' },
          { boldKm: 'សំណួរ ៣–៤ (ព្រំដែន)', boldEn: 'Questions 3–4', km: 'តើលោកមានទីបញ្ចប់ (មានព្រំដែន) ឬគ្មានទីបញ្ចប់?', en: 'Is the cosmos finite or infinite?' },
          { boldKm: 'សំណួរ ៥–៦ (ព្រលឹង និងរូប)', boldEn: 'Questions 5–6', km: 'តើជីវិត/ព្រលឹង (ជីវៈ) និងរូបកាយ ជារបស់តែមួយ ឬជារបស់ផ្សេងគ្នា?', en: 'Are the life-principle (jīva) and the body identical, or distinct?' },
          { boldKm: 'សំណួរ ៧–១០ (ជីវិតក្រោយស្លាប់)', boldEn: 'Questions 7–10', km: 'តើតថាគត (ព្រះពុទ្ធ) ស្លាប់ទៅ នៅមាន ឬលែងមាន, មានផងមិនមានផង, ឬមិនមែនមានមិនមែនមិនមាន?', en: 'Does the Tathāgata exist after death, not exist, both, or neither?' },
        ]
      },
      {
        titleKm: '២. ឧបមាព្រួញបំពុលពិស (The Parable of the Poisoned Arrow)',
        titleEn: '2. The Parable of the Poisoned Arrow',
        contentKm: 'ឮដូច្នេះ ព្រះសម្មាសម្ពុទ្ធមិនបានខឹង ឬព្យាយាមឆ្លើយសំណួរទាំងនោះឡើយ ប៉ុន្តែព្រះអង្គបានសួរតបវិញថា៖ «ម្នាលមាលុង្ក្យបុត្ត! កាលពីអ្នកមកបួស តើតថាគតធ្លាប់សន្យានឹងអ្នកថា បើអ្នកមកបួស តថាគតនឹងប្រាប់រឿងចក្រវាឡទាំងនោះដែរឬទេ?» ព្រះមាលុង្ក្យបុត្តទូលថា៖ «មិនដែលទេ ព្រះអង្គ»។ ពេលនោះ ព្រះពុទ្ធបានលើកឧបមាដ៏ល្បីល្បាញនេះឡើង៖\n\n«ឧបមាថា មានបុរសម្នាក់ត្រូវព្រួញបាញ់ចំទ្រូងយ៉ាងធ្ងន់ធ្ងរ ហើយព្រួញនោះជា ព្រួញដែលគេជ្រលក់ពិសយ៉ាងក្រាស់ (សល្លំ សវិសំ)។ ញាតិមិត្តបានប្រញាប់ទៅជួល គ្រូពេទ្យវះកាត់ (សល្លកត្ត) ដ៏ពូកែម្នាក់មកសង្គ្រោះ។ ពេលគ្រូពេទ្យទាញកាំបិតរៀបនឹងវះកាត់ដកព្រួញចេញ ស្រាប់តែបុរសរងគ្រោះស្រែកឃាត់ថា៖\n\n— "ឈប់សិន! កុំអាលដកព្រួញ! ខ្ញុំមិនទាន់ឱ្យដកទេ លុះត្រាតែខ្ញុំដឹងសិនថា អ្នកដែលបាញ់ខ្ញុំជាវណ្ណៈក្សត្រ ព្រាហ្មណ៍ ឈ្មួញ ឬចណ្ឌាល? ឈ្មោះអ្វី? មកពីស្រុកណា? មាឌខ្ពស់ ឬទាប? សម្បុរខ្មៅ ស ឬលឿង?"\n— "មិនតែប៉ុណ្ណោះ ខ្ញុំត្រូវដឹងសិនថា ធ្នូនោះធ្វើពីឈើអ្វី? ខ្សែធ្នូធ្វើពីសរសៃអ្វី? ព្រួញនោះធ្វើពីឬស្សី ឬឈើខ្លឹម? រោមស្លាបដែលស៊កកន្ទុយព្រួញជារោមសត្វត្មាត សត្វកុក ឬសត្វក្ងោក? ហើយផ្លែព្រួញនោះធ្វើពីដែកអ្វី?"\n\nព្រះពុទ្ធត្រាស់សួរថា៖ «ម្នាលមាលុង្ក្យបុត្ត! តើបុរសនោះអាចដឹងចម្លើយទាំងអស់នោះមុនពេលស្លាប់ដែរឬទេ?» ព្រះមាលុង្ក្យបុត្តទូលតបថា៖ «មិនអាចទេ ព្រះអង្គ! បុរសនោះច្បាស់ជាដាច់ខ្យល់ស្លាប់ដោយសារពិសព្រួញ មុននឹងដឹងចម្លើយអស់ទាំងនោះជាក់ជាមិនខាន»។',
        contentEn: 'The Buddha did not react with anger, nor did he validate the metaphysical detour. He asked: "Did I ever say to you: Come, live the holy life under me, and I will declare to you whether the world is eternal?" — "No, venerable sir." Then the Buddha delivered the immortal parable: A man pierced by a heavily poisoned arrow has a skilled surgeon brought by anxious relatives. Yet the victim shouts: "I will not let this arrow be drawn out until I know if the shooter was a noble, brahmin, merchant, or outcaste; his name, village, height, complexion; what wood the bow was, what fiber the string, whether the shaft was bamboo or wood, what feather was used, and what iron forged the point!" That man would perish from the poison long before knowing any of it.',
      },
      {
        titleKm: '៣. ខ្លឹមសារពិតដែលព្រះពុទ្ធចង់ដាស់តឿន',
        titleEn: '3. What the Buddha Was Awakening Us To',
        contentKm: 'ព្រះពុទ្ធបានបកស្រាយការប្រៀបធៀបនេះយ៉ាងស៊ីជម្រៅចំពោះដំណើរជីវិតមនុស្ស៖',
        contentEn: 'The Blessed One decoded the metaphor with piercing precision for all existential seekers:',
        points: [
          { boldKm: 'ព្រួញបំពុលពិស', boldEn: 'Poisoned Arrow', km: 'គឺ «សេចក្តីទុក្ខ» ដែលកំពុងដោតជាប់ទ្រូងរបស់សត្វលោកគ្រប់រូប រួមមាន៖ ជាតិ (ការកើត), ជរា (ភាពចាស់), ព្យាធិ (ជំងឺឈឺកាត់), មរណៈ (សេចក្តីស្លាប់), ព្រមទាំងសោកៈ និងការខូចចិត្ត។', en: 'Is suffering itself — birth, aging, illness, death, sorrow, lamentation, and despair lodged in the hearts of living beings.' },
          { boldKm: 'គ្រូពេទ្យវះកាត់', boldEn: 'The Surgeon', km: 'គឺ ព្រះសម្មាសម្ពុទ្ធ និង ព្រះធម៌ ដែលមានជំនាញក្នុងការកម្ចាត់ពិសទុក្ខ។', en: 'Is the Buddha and the Dhamma, uniquely equipped to heal existential wounding.' },
          { boldKm: 'ការវះកាត់ដកព្រួញ', boldEn: 'The Surgery', km: 'គឺ ការបដិបត្តិកម្ចាត់កិលេស និងរំលត់ទុក្ខក្នុងបច្ចុប្បន្នខណៈ។', en: 'Is the direct practice of eradicating defilements and neutralizing sorrow here and now.' },
          { boldKm: 'សំណួរអត់ប្រយោជន៍', boldEn: 'Foolish Distractions', km: 'គឺ ការដែលមនុស្សអង្គុយជជែកវែកញែករឿងអរូបីឥតប្រយោជន៍ដូចជា «តើជាតិមុនអញជាអ្វី? ចក្រវាឡចាប់ផ្តើមពីពេលណា? ស្លាប់ទៅព្រលឹងទៅណា? ហេតុអ្វីព្រះបង្កើតលោក?»។', en: 'Is endless debating over cosmic origins, past identity, or abstract speculative theories that solve zero actual pain.' },
        ],
        quoteKm: '«ម្នាលមាលុង្ក្យបុត្ត! ទោះបីជាលោកនេះទៀងក្តី មិនទៀងក្តី... សេចក្តីចាស់ សេចក្តីស្លាប់ និងសេចក្តីទុក្ខសោក ក៏នៅតែកំពុងកើតមានជាក់ស្តែងនៅចំពោះមុខអ្នកដដែល។ អ្វីដែលតថាគតបង្រៀន គឺការបង្ហាញនូវវិធីរំលត់ទុក្ខចំពោះមុខនេះឯង!»',
        quoteEn: '"Whether the world is eternal or not, Māluṅkyaputta, there is birth, there is aging, there is death, there are sorrow, lamentation, pain, grief, and despair — the cessation of which I declare here and now!"'
      },
      {
        titleKm: '៤. ហេតុអ្វីព្រះពុទ្ធមិនព្រមបកស្រាយរឿងទាំងនោះ? (អព្យាកតវត្ថុ)',
        titleEn: '4. Why the Buddha Refused to Answer (Abyākata-vatthu)',
        contentKm: 'ព្រះពុទ្ធបានប្រកាសយ៉ាងច្បាស់ពីហេតុផលដែលព្រះអង្គមិនឆ្លើយសំណួរទស្សនវិជ្ជាទាំង ១០ នោះ ពីព្រោះសំណួរទាំងនោះ៖',
        contentEn: 'The Buddha explicitly declared why these 10 metaphysical issues were set aside as Abyākata-vatthu:',
        points: [
          { boldKm: 'ន អត្ថសំហិតំ', boldEn: 'Na Atthasaṃhitaṃ', km: 'មិននាំមកនូវប្រយោជន៍ដល់ការរស់នៅ និងការដោះស្រាយទុក្ខជាក់ស្តែងឡើយ។', en: 'Not beneficial — does not conduce to spiritual welfare.' },
          { boldKm: 'ន អាទិព្រហ្មចរិយកំ', boldEn: 'Nādibrahmacariyakaṃ', km: 'មិនមែនជាគោលការណ៍គ្រឹះនៃការប្រតិបត្តិដើម្បីភាពបរិសុទ្ធនៃចិត្តឡើយ។', en: 'Not fundamental to the holy life or mental purification.' },
          { boldKm: 'មិននាំទៅរក', boldEn: 'Does Not Lead To', km: 'សេចក្តីនឿយណាយ (និព្វិទា), ការប្រាសចាករាគៈ (វិរាគៈ), ការរលត់ទុក្ខ (និរោធៈ), ភាពស្ងប់ស្ងាត់ (ឧបសមៈ), ការដឹងច្បាស់ (អភិញ្ញា), ការត្រាស់ដឹង (សម្ពោធិ), និង ព្រះនិព្វាន ឡើយ។', en: 'Disenchantment, dispassion, cessation, peace, direct knowledge, awakening, and Nibbāna.' },
        ]
      },
      {
        titleKm: '៥. អ្វីដែលព្រះពុទ្ធបានបង្រៀន (ព្យាកតវត្ថុ) ៖ អរិយសច្ច ៤',
        titleEn: '5. What the Buddha Taught: The Four Noble Truths',
        contentKm: 'ផ្ទុយពីសំណួរស្មានៗខាងលើ អ្វីដែលព្រះពុទ្ធបានលាតត្រដាង បង្រៀន និងបញ្ជាក់យ៉ាងច្បាស់លាស់ គឺ «អរិយសច្ច ៤» តែប៉ុណ្ណោះ ដែលប្រៀបដូចជាវេជ្ជសាស្ត្រសង្គ្រោះជីវិតបន្ទាន់៖',
        contentEn: 'In contrast to idle speculation, the Buddha systematically laid bare the Four Noble Truths as an urgent emergency medical protocol:',
        points: [
          { boldKm: 'ទុក្ខអរិយសច្ច', boldEn: '1. Dukkha (Suffering)', km: 'នេះជាសេចក្តីទុក្ខ (ដឹងច្បាស់ថាខ្លួនកំពុងត្រូវព្រួញបាញ់)។', en: 'Recognizing that the poisoned arrow is lodged in our chest.' },
          { boldKm: 'សមុទយអរិយសច្ច', boldEn: '2. Samudaya (Origin)', km: 'នេះជាហេតុនាំឱ្យកើតទុក្ខ គឺតណ្ហា (ដឹងពីសារធាតុពិសដែលជ្រាបក្នុងចរន្តឈាម)។', en: 'Identifying the toxic venom coursing through the blood — Craving (taṇhā).' },
          { boldKm: 'និរោធអរិយសច្ច', boldEn: '3. Nirodha (Cessation)', km: 'នេះជាទីរំលត់ទុក្ខ គឺព្រះនិព្វាន (ការដកព្រួញចេញ និងជាសះស្បើយពីពិសទាំងស្រុង)។', en: 'Extracting the shaft and neutralizing the venom completely — Nibbāna.' },
          { boldKm: 'មគ្គអរិយសច្ច', boldEn: '4. Magga (The Path)', km: 'នេះជាមាគ៌ានាំទៅរកការរំលត់ទុក្ខ គឺអរិយអដ្ឋង្គិកមគ្គ (វិធីសាស្ត្រវះកាត់ និងថ្នាំព្យាបាលមុខរបួស)។', en: 'The surgical procedure and healing regimen — the Noble Eightfold Path.' },
        ]
      }
    ]
  },

  // GEM 2: Roots of Suffering and Eradication
  {
    id: 'roots-suffering',
    num: 2,
    open: false,
    category: 'arrow',
    categoryKm: '🌱 ឫសគល់ទុក្ខ & ត្រៃសិក្ខា',
    categoryEn: '🌱 Roots of Suffering & Tisikkhā',
    questionKm: 'តើអ្វីជាឫសគល់ពិតនៃទុក្ខ ហើយតើព្រះពុទ្ធសាសនាមានវិធីសាស្ត្រកម្ចាត់កិលេស ៣ ថ្នាក់យ៉ាងដូចម្តេច?',
    questionEn: 'What are the true root causes of suffering, and what is the 3-tiered method for eradicating defilements?',
    shortKm: 'ឫសគល់ទុក្ខ & កម្ចាត់កិលេស',
    shortEn: 'Roots of Suffering & Tisikkhā',
    essenceKm: 'ទុក្ខមិនមែនកើតឡើងដោយចៃដន្យ ឬអាទិទេពបង្កើតទេ ប៉ុន្តែមានឫសគល់ពីខ្សែសង្វាក់នៃ តណ្ហា ៣, ឧបាទាន, អវិជ្ជា និងអកុសលមូល ៣។ ការកម្ចាត់ត្រូវធ្វើតាម ត្រៃសិក្ខា ៣ ថ្នាក់៖ សីល (រំងាប់កិលេសក្រៅ), សមាធិ (រំងាប់កិលេសកណ្តាល), និង បញ្ញា (កាត់ផ្តាច់ឫសកិលេសដេកសម្ងំឱ្យរលត់សូន្យ)។',
    essenceEn: 'Suffering arises via the causal chain of 3 Cravings, Clinging, Ignorance, and 3 Unwholesome Roots. Eradication proceeds through Tisikkhā: Sīla for gross bodily actions, Samādhi for mental hindrances, and Paññā to permanently uproot latent tendencies (anusaya).',
    practicalKm: 'កុំទន្ទឹងរង់ចាំកម្ចាត់កិលេសជ្រៅ បើកិលេសតាមកាយវាចានៅមិនទាន់ទប់បាន។ ចាប់ផ្តើមពីការកាន់សីល ៥ ឱ្យបរិសុទ្ធជាប្រចាំថ្ងៃ បន្តមកធ្វើចិត្តឱ្យស្ងប់ដោយសមាធិ ១០-១៥ នាទីរាល់ព្រឹក/ល្ងាច រួចចម្រើនសតិដឹងកាយចិត្តក្នុងបច្ចុប្បន្នដើម្បីបង្កើតបញ្ញាពិត។',
    practicalEn: 'Never expect to eradicate deep defilements if outward conduct is unrestrained. Ground your life in the 5 precepts, steady the mind with daily meditation, and cultivate bare awareness to blossom liberating insight.',
    links: [
      { to: '/core#roots-of-suffering', km: 'ជំពូកធម៌មូលដ្ឋាន', en: 'Core Teachings' },
      { to: '/ethics#sila', km: 'សីល ៥ បរិសុទ្ធ', en: 'The Five Precepts' },
    ],
    sections: [
      {
        titleKm: '១. ខ្សែសង្វាក់ឫសគល់នៃទុក្ខ',
        titleEn: '1. The Causal Chain of Suffering',
        contentKm: 'ទុក្ខកើតចេញពីខ្សែសង្វាក់នៃធម៌អកុសលដែលជំរុញគ្នាទៅវិញទៅមក៖',
        contentEn: 'Suffering stems from an interconnected psychological chain:',
        points: [
          { boldKm: 'តណ្ហា ៣ (Craving)', boldEn: '3 Cravings', km: 'កាមតណ្ហា (ស្រេកឃ្លានកាមគុណ ៥), ភវតណ្ហា (ស្រេកឃ្លានចង់មាន ចង់កើត ចង់អមតៈ), វិភវតណ្ហា (ស្រេកឃ្លានចង់ឱ្យវិនាស ចង់ឱ្យដាច់សូន្យ)។', en: 'Sensual craving (kāma), craving for existence/becoming (bhava), craving for annihilation/non-existence (vibhava).' },
          { boldKm: 'ឧបាទាន ៤ (Clinging)', boldEn: '4 Clingings', km: 'ការតោងប្រកាន់ជាប់យ៉ាងស្អិតរមួតលើកាម លើទស្សនៈខុស លើពិធីសក្ការៈខុស និងលើការប្រកាន់ថាមានតួខ្លួនអញ (អត្តវាទុបាទាន)។', en: 'Clinging to sensuality, speculative views, wrong rites/rituals, and the doctrine of an abiding self.' },
          { boldKm: 'អវិជ្ជា (Ignorance)', boldEn: 'Avijjā', km: 'ការមិនដឹងពិតក្នុងអរិយសច្ច ៤ មិនស្គាល់អតីត អនាគត និងច្បាប់បដិច្ចសមុប្បាទ។', en: 'Fundamental blindness to the Four Noble Truths and Dependent Origination.' },
          { boldKm: 'អកុសលមូល ៣ (Roots)', boldEn: '3 Roots', km: 'លោភៈ (ការចង់បាន), ទោសៈ (ការខឹងទាស់ចិត្ត), មោហៈ (ការវង្វេងភ័ន្តច្រឡំ)។', en: 'Greed (lobha), hatred/aversion (dosa), and delusion (moha).' },
        ]
      },
      {
        titleKm: '២. វិធីរំលត់កិលេស ៣ ថ្នាក់ តាមត្រៃសិក្ខា',
        titleEn: '2. The 3-Tiered Eradication via Tisikkhā',
        contentKm: 'កិលេសមាន ៣ កម្រិត ដូច្នេះព្រះពុទ្ធបានរៀបចំឱសថព្យាបាល ៣ ថ្នាក់យ៉ាងត្រូវក្បួន៖',
        contentEn: 'Defilements manifest in 3 strata, addressed systematically by the Buddha:',
        points: [
          { boldKm: 'កិលេសគ្រោតគ្រាត (វីតិក្កមកិលេស)', boldEn: 'Gross Tier (Vītikkama)', km: 'កិលេសដែលបែកចេញមកក្រៅតាមកាយ និងវាចា (ដូចជាសម្លាប់ លួច កុហក ជេរប្រមាថ) -> រំងាប់ និងទប់ស្កាត់ដោយ «សីល» (Adhisīla-sikkhā)។', en: 'Manifested through bodily and verbal wrongdoing -> restrained by Morality (Sīla).' },
          { boldKm: 'កិលេសកម្រិតមធ្យម (បរិយុដ្ឋាកិលេស)', boldEn: 'Intermediate Tier (Pariyuṭṭhāna)', km: 'កិលេសដែលផុសអណ្តែតរំខានក្នុងចិត្ត គឺនីវរណធម៌ ៥ (កាមច្ឆន្ទៈ ព្យាបាទ ថីនមិទ្ធ ឧទ្ធច្ចកុក្កុច្ច វិចិកិច្ឆា) -> រំងាប់ឱ្យស្ងប់ស្ងៀមដោយ «សមាធិ» (Adhicitta-sikkhā / ឈាន) ដូចថ្មសង្កត់ស្មៅ។', en: 'Mental hindrances boiling in thoughts -> pacified and suppressed by Concentration (Samādhi/Jhāna).' },
          { boldKm: 'កិលេសដេកសម្ងំ (អនុសយកិលេស)', boldEn: 'Latent Tier (Anusaya)', km: 'កិលេសដែលដេកសម្ងំនៅបាតចិត្តយ៉ាងជ្រៅ (កាមរាគានុសយ, បដិឃានុសយ, ទិដ្ឋានុសយ, អវិជ្ជានុសយ...) -> មិនអាចកាត់ដោយសីល ឬសមាធិបានទេ គឺត្រូវកាត់ផ្តាច់ជាស្ថាពរដោយ «បញ្ញា» (Adhipaññā-sikkhā គឺវិបស្សនាឈានដល់លោកុត្តរមគ្គ)។', en: 'Subconscious dormant tendencies -> eradicated forever only by Wisdom (Paññā/Vipassanā realizing the Noble Paths).' },
        ]
      }
    ]
  },

  // GEM 3: 24 Conditions connecting Mind and Matter
  {
    id: 'patthana-24',
    num: 3,
    open: false,
    category: 'abhidhamma',
    categoryKm: '🧠 អភិធម្ម & បដ្ឋាន',
    categoryEn: '🧠 Abhidhamma & Paṭṭhāna',
    ref: 'គម្ពីរបដ្ឋាន (អភិធម្មបិដក គម្ពីរទី ៧)',
    questionKm: 'យោងតាមគម្ពីរអភិធម្ម (គម្ពីរបដ្ឋាន) តើបច្ច័យទាំង ២៤ មានតួនាទីតភ្ជាប់ចិត្ត និងរូបយ៉ាងដូចម្ដេចខ្លះ ដោយគ្មានព្រលឹងអត្តា?',
    questionEn: 'According to Paṭṭhāna, how do the 24 causal conditions link mind and matter without an immortal soul?',
    shortKm: 'បច្ច័យ ២៤ តភ្ជាប់ចិត្ត និងរូប',
    shortEn: '24 Conditions Linking Mind & Matter',
    essenceKm: 'នៅក្នុងគម្ពីរបដ្ឋាន បច្ច័យទាំង ២៤ ដើរតួជាបណ្តាញស្ថាបត្យកម្មដែលពន្យល់ពីរបៀបដែលនាម (ចិត្ត+ចេតសិក) និងរូប (កាយ+វត្ថុ) ធ្វើអន្តរកម្ម ពឹងពាក់ និងរុញច្រានគ្នាគ្រប់វិនាទី។ គ្មានព្រលឹងអមតៈឡើយ ប៉ុន្តែប្រៀបដូចជាមនុស្សខ្វាក់ (ចិត្ត) ជិះលើស្មាមនុស្សពិការជើង (រូប) សហការគ្នាធ្វើដំណើរ។',
    essenceEn: 'In the Paṭṭhāna, the 24 conditions form an intricate network showing how mind (nāma) and matter (rūpa) dynamically interact without an eternal soul — illustrated by the blind man (mind) carrying the lame man (matter).',
    practicalKm: 'ពេលខឹង មុខឡើងក្រហម បេះដូងលោតញាប់ (ចិត្តជាបច្ច័យដល់រូប)។ ពេលរាងកាយឈឺ ឬអាកាសធាតុក្តៅ ចិត្តកើតមួរម៉ៅ (រូបជាបច្ច័យដល់ចិត្ត)។ យល់ពីបច្ច័យទាំងនេះ ជួយឱ្យយើងលែងប្រកាន់ថា «ខ្ញុំខឹង ឬខ្ញុំឈឺ» តែជាដំណើរការអន្តរកម្មនៃធាតុហេតុផលសុទ្ធសាធ!',
    practicalEn: 'When angry, the face flushes (mind conditions matter); when sick or exhausted, the mind grows irritable (matter conditions mind). Seeing this dissolves the illusion of an ego "I am angry", revealing pure causal dynamics.',
    links: [
      { to: '/paccaya#patthana-24', km: 'តារាងបច្ច័យទាំង ២៤ ពេញលេញ', en: 'Full 24 Conditions Table' },
      { to: '/abhidhamma#rupa-kalapa', km: 'រូបកលាប និងរូបវិទ្យា', en: 'Rūpa-kalāpa' },
    ],
    sections: [
      {
        titleKm: '១. ទិសដៅអន្តរកម្មទាំង ៤ រវាងនាម និងរូប',
        titleEn: '1. The 4 Interactive Directions Between Mind and Body',
        contentKm: 'បច្ច័យទាំង ២៤ បង្កើតទំនាក់ទំនង ៤ ទម្រង់រវាងចិត្ត និងរូបកាយ៖',
        contentEn: 'The 24 conditions govern four distinct pathways of interaction:',
        points: [
          { boldKm: '១. នាមជាបច្ច័យដល់រូប (Mind -> Body)', boldEn: '1. Mind Conditions Body', km: 'ចិត្ត និងចេតសិកបញ្ជាឱ្យកើត «ចិត្តជរូប» ដូចជាការដើរ ឈរ អង្គុយ ដេក ការនិយាយស្តី កាយវិការញញឹម ឬការយំ (បច្ច័យដូចជា ហេតុបច្ច័យ, កម្មបច្ច័យ, បច្ឆាជាតបច្ច័យ)។', en: 'Mind and mental factors generate mind-born matter (cittaja-rūpa) causing walking, posture, speech, smiles, and tears.' },
          { boldKm: '២. រូបជាបច្ច័យដល់នាម (Body -> Mind)', boldEn: '2. Body Conditions Mind', km: 'វត្ថុរូប ៦ (ភ្នែក ត្រចៀក ច្រមុះ អណ្តាត កាយ បេះដូង) ជាទីតាំងឱ្យវិញ្ញាណកើត ហើយអារម្មណ៍រូប ៥ (ពណ៌ សំឡេង ក្លិន រស ផោដ្ឋព្វ) ស្រូបទាញចិត្តឱ្យដឹង (បុរេជាតបច្ច័យ, និស្សយបច្ច័យ, អារម្មណបច្ច័យ)។', en: 'The 6 sense bases and physical objects provide physical base and stimuli for consciousness to arise.' },
          { boldKm: '៣. នាម និងរូបកើតព្រមគ្នាជ្រោមជ្រែងគ្នា (Co-Arising)', boldEn: '3. Simultaneous Co-Arising', km: 'ក្នុងខណៈបដិសន្ធិចិត្តចាប់កំណើត នាមក្ខន្ធ និងកលលរូបកើតឡើងដំណាលគ្នា ពឹងពាក់គ្នាទៅវិញទៅមក (សហជាតបច្ច័យ, អញ្ញមញ្ញបច្ច័យ) ដូចកំណាត់ឈើពីរផ្អែកគ្នា។', en: 'At rebirth conception, consciousness and physical material co-arise and lean on one another like two standing sheaves.' },
          { boldKm: '៤. នាមជាបច្ច័យដល់នាម (Mind -> Mind)', boldEn: '4. Mind Conditions Mind', km: 'ចិត្តមុនរលត់ បញ្ជូនថាមពលឱ្យចិត្តបន្ទាប់កើតឡើងបន្តគ្មានចន្លោះ (អនន្តរបច្ច័យ, សមនន្តរបច្ច័យ) បង្កើតជាខ្សែទឹកហូរនៃចិត្តសន្តាន។', en: 'A preceding mind moment ceases and instantly conditions the succeeding one without gap.' },
        ]
      },
      {
        titleKm: '២. ឧបមាមនុស្សខ្វាក់ និងមនុស្សពិការជើង (អដ្ឋកថា)',
        titleEn: '2. The Blind Man and the Lame Man (Commentary)',
        contentKm: 'នៅក្នុងគម្ពីរអដ្ឋកថា បានលើកឧបមាដ៏អស្ចារ្យ ៖\n— រូបធម៌ (រូបកាយ) ប្រៀបដូចជា «មនុស្សពិការជើង ដែលមានភ្នែកភ្លឺច្បាស់» (មានភ្នែកមើលឃើញ តែគ្មានកម្លាំងចិត្តដើរខ្លួនឯងបាន)។\n— នាមធម៌ (ចិត្ត) ប្រៀបដូចជា «មនុស្សខ្វាក់ភ្នែក ដែលមានកម្លាំងជើងខ្លាំងពូកែ» (មានថាមពលគិត និងបញ្ជា តែត្រូវការរូបជាទ្វារដឹងពិភពលោក)។\n\nកាលបើបុគ្គលទាំងពីរនៅដាច់ដោយឡែកពីគ្នា គ្មានអ្នកណាអាចធ្វើដំណើរទៅមុខរួចឡើយ។ ប៉ុន្តែនៅពេលដែល មនុស្សខ្វាក់ (ចិត្ត) ព្រមឱ្យមនុស្សពិការជើង (រូប) ជិះលើស្មា រួចមនុស្សពិការជើងចង្អុលបង្ហាញផ្លូវ ហើយមនុស្សខ្វាក់បោះជំហានដើរ — អ្នកទាំងពីរក៏អាចធ្វើដំណើរឆ្លងកាត់ព្រៃដ៏វែងឆ្ងាយរហូតដល់គោលដៅបានដោយសុវត្ថិភាព។ នេះជាដំណើររួមគ្នានៃចិត្ត និងរូប!',
        contentEn: 'The Commentary explains: Body is like a sharp-eyed lame man (has senses, but cannot move on its own). Mind is like a blind man with strong legs (has motive power, but needs physical bases). When separated, neither can travel. But when the blind man (mind) carries the lame man (body) on his shoulders, and the lame man directs the way while the blind man walks, they travel across the wilderness safely. So do mind and matter journey through existence together.'
      }
    ]
  },

  // GEM 4: Karmic Transference Across Lifetimes Without Attā
  {
    id: 'kamma-transference',
    num: 4,
    open: false,
    category: 'kamma',
    categoryKm: '⚖️ កម្មផល & វិញ្ញាណ',
    categoryEn: '⚖️ Kamma & Rebirth Process',
    ref: 'គម្ពីរអភិធម្ម & មិលិន្ទបបញ្ហា',
    questionKm: 'ប្រសិនបើចិត្តកើតរលត់រាល់ខណៈ ហើយគ្មានព្រលឹងអត្តា តើកម្ម និងផលកម្មអាចបញ្ជូនឆ្លងជាតិពីជាតិមួយទៅជាតិមួយទៀតដោយរបៀបណា?',
    questionEn: 'If the mind arises and perishes each moment without a permanent soul, how does karma transmit across lifetimes?',
    shortKm: 'បញ្ជូនកម្មឆ្លងជាតិ ដោយគ្មានព្រលឹង',
    shortEn: 'Karmic Transference Without Soul',
    essenceKm: 'ថាមពលកម្មមិនមែនរក្សាទុកក្នុងធុង ឬព្រលឹងអមតៈទេ ប៉ុន្តែវាត្រូវបានចម្លង និងផ្ទេរបន្តឥតដាច់តាមរយៈ «ខ្សែទឹកហូរនៃចិត្តសន្តាន» (Citta-santāna) ដោយកម្លាំង អនន្តរបច្ច័យ និង នានាក្ខណិកកម្មបច្ច័យ។ ពេលស្លាប់ ចុតិចិត្តរលត់ បញ្ឆេះបដិសន្ធិចិត្តក្នុងភពថ្មីភ្លាមមួយរំពេច ដូចភ្លើងទៀនមួយអុជបន្តលើទៀនមួយទៀត («ន ច សោ ន ច អញ្ញោ» — មិនមែនបុគ្គលដដែល តែមិនមែនជាអ្នកដទៃ)។',
    essenceEn: 'Karma is not held in an external container or immortal soul; it is continually transmitted along the mental stream (Citta-santāna) via Anantara-paccaya. Death-consciousness ceases and instantly sparks rebirth-consciousness in the next realm, like lighting a second candle from the first («Na ca so na ca añño»).',
    practicalKm: 'កុំគិតថាស្លាប់ទៅគឺចប់ ឬមានព្រលឹងហោះចូលក្នុងខ្លួនថ្មី។ អ្វីដែលអ្នកគិត និយាយ និងធ្វើថ្ងៃនេះ កំពុងសរសេរកូដទិន្នន័យ (Karmic Data) ចូលទៅក្នុងខ្សែចិត្តសន្តាន ដែលនឹងកំណត់រូបរាង ឋានៈ និងចរិតរបស់អ្នកក្នុងថ្ងៃស្អែក និងជាតិក្រោយ!',
    practicalEn: 'Death is not total annihilation, nor does a ghostly soul migrate. What you think, say, and do right now is coding kammic data into your mental continuum, which programs your future character, tendencies, and destination.',
    links: [
      { to: '/death-and-rebirth#kamma-transference', km: 'ដំណើរនៃការស្លាប់-បដិសន្ធិ', en: 'Death & Rebirth Process' },
      { to: '/kamma#kusala-akusala', km: 'កម្ម និងផល', en: 'Kamma & Result' },
    ],
    sections: [
      {
        titleKm: '១. យន្តការបញ្ជូនទិន្នន័យតាមចិត្តសន្តាន',
        titleEn: '1. Data Replication along the Mental Continuum',
        contentKm: 'នៅក្នុងគម្ពីរអភិធម្ម ចិត្តកើតរលត់យ៉ាងលឿនបំផុត (១៧ ខណៈរូប = ១ ខណៈចិត្ត, រាប់ពាន់កោដិដងក្នុងមួយខ្ទាត់ម្រាមដៃ)។ ទោះបីចិត្តនីមួយៗរលត់ទៅក៏ដោយ ប៉ុន្តែមុននឹងរលត់ វាបានផ្ទេររាល់ព័ត៌មាន បទពិសោធន៍ និស្ស័យ និងថាមពលកម្មទាំងអស់ ទៅឱ្យចិត្តបន្ទាប់ដោយគ្មានចន្លោះសូម្បីមួយមីក្រូវិនាទី តាមរយៈ៖',
        contentEn: 'Consciousness flashes into and out of existence billions of times per snap of fingers. While each moment perishes, it hands off its accumulated impressions, habits, and kammic momentum to the next moment without any gap through:',
        points: [
          { boldKm: 'អនន្តរបច្ច័យ (Anantara-paccaya)', boldEn: 'Proximity Condition', km: 'កម្លាំងដែលធានាថា ចិត្តដួងទី ២ ត្រូវតែកើតឡើងភ្លាមបន្ទាប់ពីចិត្តដួងទី ១ រលត់ ដោយគ្មានអ្វីអាចមកជ្រៀតជ្រែកចន្លោះកណ្តាលបានឡើយ។', en: 'Ensures the next mental state arises immediately upon the cessation of the previous, with zero interval.' },
          { boldKm: 'នានាក្ខណិកកម្មបច្ច័យ (Nānākkhaṇika-kamma)', boldEn: 'Asynchronous Kamma Condition', km: 'ចេតនាក្នុងអតីតកាលដែលបានសាងរួច ទោះបីរលត់បាត់រូបវន្តទៅហើយក្តី ក៏បានបន្សល់ទុកនូវ «សក្តានុពលកម្ម» ដេកសម្ងំក្នុងខ្សែចិត្តសន្តាន រង់ចាំឱ្យផលនៅពេលជួបបច្ច័យគាំទ្រគ្រប់គ្រាន់។', en: 'The kammic potential of past volition embedded in the mental stream, awaiting fertile conditions to mature.' },
        ]
      },
      {
        titleKm: '២. ឧបមាភ្លើងទៀន និងទឹកដោះគោ (គម្ពីរមិលិន្ទបបញ្ហា)',
        titleEn: '2. The Metaphor of the Flame and Milk (Milindapañhā)',
        contentKm: 'ព្រះបាទមិលិន្ទបានសួរព្រះនាគសេនថា៖ «ប្រសិនបើគ្មានព្រលឹង តើអ្នកណាកើតក្នុងជាតិថ្មី?» ព្រះនាគសេនបានលើកឧបមា ២ យ៉ាង៖\n\n១. ឧបមាភ្លើងទៀន៖ បុរសម្នាក់យកភ្លើងពីទៀនទី ១ មកអុជលើទៀនទី ២។ តើភ្លើងនៅលើទៀនទី ២ ជាភ្លើងតែមួយនឹងទៀនទី ១ ដែរឬទេ? មិនមែនជាភ្លើងតែមួយទេ ពីព្រោះទៀនទី ១ ក៏នៅឆេះ ទៀនទី ២ ក៏ឆេះ ប៉ុន្តែបើគ្មានភ្លើងពីទៀនទី ១ ទេ ភ្លើងលើទៀនទី ២ ក៏មិនអាចកើតមានបានឡើយ។ យ៉ាងណាមិញ បដិសន្ធិចិត្តក្នុងភពថ្មី កើតចេញពីកម្លាំងនៃចុតិចិត្ត (ចិត្តស្លាប់) ក្នុងជាតិចាស់។\n\n២. ឧបមាទឹកដោះគោ៖ ទឹកដោះស្រស់ប្រែទៅជាទឹកដោះជូរ ប្រែទៅជាប៊័រ ប្រែទៅជាខ្លាញ់រាវ។ តើខ្លាញ់រាវជាទឹកដោះស្រស់ដែរឬទេ? មិនមែនទេ ប៉ុន្តែបើគ្មានទឹកដោះស្រស់ ក៏គ្មានខ្លាញ់រាវនោះដែរ។ យ៉ាងណាមិញ ជាតិថ្មីមិនមែនជាមនុស្សដដែល តែជាផលហូរចេញពីខ្សែជីវិតចាស់ («ន ច សោ ន ច អញ្ញោ»)។',
        contentEn: 'Ven. Nāgasena explained to King Milinda: One candle flame lights a second candle. Is the second flame identical to the first? No, yet without the first, the second cannot exist. Likewise, milk turns to curds, curds to butter, butter to ghee. Ghee is not milk, yet emerges entirely from it. Thus rebirth is "neither the same person, nor an entirely different one" (Na ca so na ca añño).'
      }
    ]
  },

  // GEM 5: The 4 Mechanisms of Ahosi-kamma
  {
    id: 'ahosi-kamma',
    num: 5,
    open: false,
    category: 'kamma',
    categoryKm: '⚖️ កម្មផល & អហោសិកម្ម',
    categoryEn: '⚖️ Kamma & Ahosi-Kamma',
    ref: 'គម្ពីរអភិធម្មត្ថសង្គហៈ & អដ្ឋកថា',
    questionKm: 'យោងតាមគម្ពីរអភិធម្ម តើកម្មដែលបានសាងរួចហើយ អាចក្លាយជា «អហោសិកម្ម» (កម្មដែលអត់ផល ឬលុបចោល) ដោយយន្តការបែបណាខ្លះ?',
    questionEn: 'According to Abhidhamma, through what 4 mechanisms does committed karma become "Ahosi-kamma" (defunct/lapsed)?',
    shortKm: 'យន្តការ ៤ នៃអហោសិកម្ម',
    shortEn: '4 Mechanisms of Ahosi-Kamma',
    essenceKm: 'អហោសិកម្ម មិនមែនជាការលុបលាងបាបដោយព្រះអាទិទេពទេ ប៉ុន្តែជាកម្មដែលបានសាងរួចហើយ តែបាត់បង់សក្តានុពលក្នុងការឱ្យផល ដោយសារ៖ (១) ផុតកាលកំណត់ជវនចិត្ត (២) ត្រូវកាត់ផ្តាច់ដោយឧបឃាតកកម្ម (៣) រារាំងដោយសម្បត្តិ ៤ និង (៤) រលត់សូន្យទាំងស្រុងនៅពេលចូលបរិនិព្វាន។',
    essenceEn: 'Ahosi-kamma is not divine absolution; it is karma that has lost its ripening window through: (1) Javana window expiration, (2) Destructive severance (Upaghātaka), (3) Buffering by the 4 Favorable Endowments, or (4) Total cessation at Parinibbāna.',
    practicalKm: 'យើងមិនអាចលុបបាបចាស់ចោលតាមចិត្តចង់បានទេ ប៉ុន្តែយើងអាចបង្កើត «សម្បត្តិ ៤» (សីលធម៌ល្អ គំនិតវៃឆ្លាត ការរស់នៅកន្លែងល្អ) និងសាងបុណ្យកុសលធំៗជាប្រចាំ ដើម្បីពន្យារ ឬបន្សាបបាបចាស់កុំឱ្យមានឱកាសឱ្យផល ដូចជាការចាក់ទឹកបរិសុទ្ធមួយពាងធំចូលទៅក្នុងចានអំបិល!',
    practicalEn: 'We cannot erase past demerit at will, but by cultivating the 4 endowments (noble virtue, wise effort, good environment) and pouring abundant merit into our lives, we dilute past misdeeds like dumping a bowl of salt into a vast river.',
    links: [
      { to: '/kamma#ahosi-kamma', km: 'យន្តការអហោសិកម្ម ៤ ពេញលេញ', en: 'Full Ahosi-Kamma Section' },
      { to: '/kamma#kusala-akusala', km: 'កុសល និងអកុសលកម្មបថ', en: 'Courses of Kamma' },
    ],
    sections: [
      {
        titleKm: 'យន្តការទាំង ៤ ដែលធ្វើឱ្យកម្មក្លាយជាអហោសិកម្ម',
        titleEn: 'The 4 Distinct Operational Mechanisms',
        contentKm: 'នៅក្នុងគម្ពីរអភិធម្ម កម្មប្រែជាអហោសិកម្មតាមយន្តការជាក់លាក់ ៤ យ៉ាង៖',
        contentEn: 'The Abhidhamma outlines four distinct operational mechanisms:',
        points: [
          { boldKm: '១. ការផុតកាលកំណត់នៃជវនចិត្ត (Window Expiration)', boldEn: '1. Window Expiration', km: 'ទិដ្ឋធម្មវេទនីយកម្ម (ជវនៈទី ១) បើមិនឱ្យផលក្នុងជាតិនេះ នឹងរលត់ជាអហោសិកម្មពេលស្លាប់។ ឧបបជ្ជវេទនីយកម្ម (ជវនៈទី ៧) បើមិនឱ្យផលក្នុងជាតិទី ២ នឹងរលត់ជាអហោសិកម្មចាប់ពីជាតិទី ៣ ទៅ។', en: '1st javana kamma expires if unripened in this life; 7th javana kamma expires after the immediately following life.' },
          { boldKm: '២. ការកាត់ផ្តាច់ដោយឧបឃាតកកម្ម (Destructive Severance)', boldEn: '2. Upaghātaka Severance', km: 'នៅពេលឧបឃាតកកម្ម (កម្មធ្ងន់ណាមួយ) ចូលមកកាត់ផ្តាច់ជីវិតភ្លាមៗ ធ្វើឱ្យកម្មចាស់ៗដទៃទៀតដែលកំពុងរង់ចាំឱ្យផលលើរូបកាយនោះ ត្រូវបាត់បង់ឱកាស ហើយរលត់ទៅជាអហោសិកម្ម។', en: 'A powerful destructive karma terminates life abruptly, nullifying other pending karmas bound to that specific physical body.' },
          { boldKm: '៣. ការរារាំងដោយសម្បត្តិ ៤ (Favorable Buffering)', boldEn: '3. Favorable Buffering', km: 'គតិសម្បត្តិ (កើតក្នុងសុគតិភព), ឧបធិសម្បត្តិ (រូបកាយស្អាតល្អ), កាលសម្បត្តិ (កើតក្នុងសម័យសំបូរសប្បាយ), បយោគសម្បត្តិ (មានសេចក្តីព្យាយាម និងបញ្ញា) ដើរតួជារបាំងរារាំងបាបកម្មតូចតាចមិនឱ្យមានឱកាសជ្រៀតចូលផ្តល់ផលបានឡើយ។', en: 'The 4 endowments (favorable rebirth, sound body, good era, diligent effort) buffer and prevent minor demerits from maturing.' },
          { boldKm: '៤. ការរលត់សូន្យទាំងស្រុងពេលចូលបរិនិព្វាន (Parinibbāna)', boldEn: '4. Final Cessation at Parinibbāna', km: 'នៅពេលព្រះអរហន្តចូលអនុបាទិសេសបរិនិព្វាន ខ្សែទឹកនៃចិត្តសន្តាន និងបញ្ចក្ខន្ធត្រូវរលត់សូន្យទាំងស្រុង គ្មានបច្ច័យទ្រទ្រង់ទៀតឡើយ។ រាល់កម្មទាំងអស់ (ទាំងអបរាបរិយវេទនីយកម្ម) ក៏ត្រូវរលត់ក្លាយជាអហោសិកម្មព្រមគ្នា ដូចគ្រាប់ពូជដែលត្រូវភ្លើងដុតខ្លោច។', en: 'When an Arahant enters Anupādisesa-Parinibbāna, all aggregates cease; all remaining unripened kamma incinerates into Ahosi-kamma forever like roasted seeds.' },
        ]
      }
    ]
  },

  // GEM 6: Why Ven. Mahāmoggallāna Could Not Escape Past Matricide Karma
  {
    id: 'moggallana-kamma',
    num: 6,
    open: false,
    category: 'kamma',
    categoryKm: '📖 រឿងអរហន្ត & កម្មចាស់',
    categoryEn: '📖 Arahant Stories & Unescapable Kamma',
    ref: 'ធម្មបទដ្ឋកថា (រឿងព្រះមោគ្គល្លានត្ថេរ)',
    questionKm: 'យោងតាមគម្ពីរធម្មបទដ្ឋកថា ហេតុអ្វីបានជាព្រះមោគ្គល្លានមានឫទ្ធិអស្ចារ្យ នៅតែមិនអាចគេចផុតពីកម្មចាស់សម្លាប់ម្តាយឪពុក ហើយហេតុអ្វីកម្មនោះមិនទាន់ក្លាយជាអហោសិកម្មមុនបរិនិព្វាន?',
    questionEn: 'Why could Ven. Mahāmoggallāna, foremost in psychic powers, not escape past matricide karma, and why was it not ahosi-kamma before Parinibbāna?',
    shortKm: 'ព្រះមោគ្គល្លាន និងកម្មចាស់',
    shortEn: 'Ven. Moggallāna & Matricide Kamma',
    essenceKm: 'គ្មានឫទ្ធិណាធំជាងកម្លាំងកម្មឡើយ! កម្មសម្លាប់ឪពុកម្តាយជា គរុកម្ម ដែលមានសន្ទុះខ្លាំងក្លាបំផុត។ ដោយសារជាតិនេះជា «អន្តិមសរីរៈ» (ជាតិចុងក្រោយ) គឺជាឱកាសចុងក្រោយ (Last Chance) របស់កម្ម ដូច្នេះកម្មត្រូវតែសម្រុកឱ្យផលលើរូបកាយមុនពេលលោកបរិនិព្វាន។ ទុក្ខកើតតែលើរូបកាយ តែចិត្តអរហន្តលោកមិនរងទុក្ខឡើយ។',
    essenceEn: 'No psychic power surpasses kamma! Matricide is Garuka-kamma. Because this was his final life (Antimasarīra), it was kamma’s ultimate window to ripen before Parinibbāna dissolved the aggregates forever. The physical body suffered broken bones, but the awakened mind was wholly untouched.',
    practicalKm: 'ទោះជាព្រះអរហន្តអគ្គសាវកមានឫទ្ធិហោះលើមេឃ ក៏នៅតែមិនអាចគេចផុតពីច្បាប់កម្មបានឡើយ។ ដូច្នេះ ចូរយើងកុំមើលស្រាលបាបកម្មសូម្បីបន្តិចបន្តួច ហើយកុំបាក់ទឹកចិត្តពេលជួបទុក្ខលំបាក ត្រូវដឹងថានោះជាការសងកម្មចាស់ឱ្យអស់ ដោយចិត្តអត់ធន់ និងស្ងប់ស្ងប់។',
    practicalEn: 'Even the chief disciple foremost in psychic power could not violate the law of kamma. Never underestimate the gravity of deeds, and face life’s hardships with patient endurance, knowing it settles old accounts.',
    links: [
      { to: '/stories#story-moggallana', km: 'អានរឿងព្រះមហាមោគ្គល្លានពេញលេញ', en: 'Full Moggallāna Story' },
      { to: '/kamma#ahosi-kamma', km: 'យន្តការអហោសិកម្ម', en: 'Ahosi-Kamma' },
    ],
    sections: [
      {
        titleKm: 'មូលហេតុ ៣ យ៉ាងដែលលោកមិនអាចគេចផុតពីកម្ម',
        titleEn: '3 Reasons Why He Could Not Escape',
        contentKm: 'ធម្មបទដ្ឋកថាពន្យល់ពីដំណើររឿងយ៉ាងក្បោះក្បាយ៖',
        contentEn: 'The Dhammapada Commentary provides a comprehensive explanation:',
        points: [
          { boldKm: '១. កម្លាំងកម្មធំជាងកម្លាំងឫទ្ធិ (Kamma > Iddhi)', boldEn: '1. Kamma Overrides Psychic Power', km: 'កម្មសម្លាប់ម្តាយឪពុកជា «គរុកម្ម» (អនន្តរិយកម្ម)។ លើកទី ១ និងទី ២ ព្រះមោគ្គល្លានប្រើឫទ្ធិហោះគេចផុតតាមរន្ធសោ និងលើអាកាស។ ប៉ុន្តែដល់លើកទី ៣ កម្លាំងកម្មបច្ច័យបានចូលមកគ្របសង្កត់ ធ្វើឱ្យឫទ្ធិគាំងស្ទះ មិនអាចចូលឈានបាន លោកក៏យល់ច្បាស់ពីផលកម្ម ហើយព្រមទទួលការវាយប្រហារដោយស្ងប់ស្ងៀម (ធម្មបទគាថា ១២៧ ៖ គ្មានទីណាគេចផុតពីផលកម្មបានឡើយ)។', en: 'Matricide is Garuka-kamma. He escaped twice via iddhi, but on the 3rd attempt, kammic momentum jammed his faculties, making jhāna inaccessible; he submitted peacefully to vipāka.' },
          { boldKm: '២. ឱកាសចុងក្រោយ (Last Chance) នៃអបរាបរិយវេទនីយកម្ម', boldEn: '2. The Final Window for Maturation', km: 'ហេតុអ្វីមិនទាន់ជាអហោសិកម្ម? ព្រោះជាតិនេះជា «អន្តិមសរីរៈ» (ជាតិចុងក្រោយ) របស់លោក។ បើលោកចូលបរិនិព្វានទៅ កម្មនេះនឹងត្រូវរលត់ជាអហោសិកម្មដោយស្វ័យប្រវត្តិ ដូច្នេះកម្មចាស់ត្រូវតែសម្រុកឱ្យផលលើរូបកាយក្នុងជាតិនេះជាដាច់ខាត។ ពួកចោរ ៥០០ នាក់បានវាយកម្ទេចឆ្អឹងលោកឱ្យម៉ដ្ឋដូចគ្រាប់ល្ង។', en: 'Because this was his final life before Parinibbāna, unripened residual kamma seized its very last opportunity to exhaust its charge upon his physical aggregates.' },
          { boldKm: '៣. ទុក្ខកើតលើរូបកាយ តែចិត្តអរហន្តមិនរងទុក្ខ (Mind Untouched)', boldEn: '3. Physical Pain vs Mental Equanimity', km: 'ការឈឺចាប់ និងការបែកបាក់កើតឡើងតែលើ «រូបក្ខន្ធ» ប៉ុណ្ណោះ ចំណែកចិត្តរបស់លោកជាព្រះអរហន្ត ស្ថិតក្នុងឧបេក្ខាដ៏បរិសុទ្ធ ឥតមានសេចក្តីភ័យខ្លាច ខឹង ឬរងទុក្ខផ្លូវចិត្តឡើយ។ បន្ទាប់ពីទទួលផលកម្មចប់ លោកបានតាំងឈានផ្ចុំឆ្អឹងឡើងវិញ ហោះទៅគាល់ព្រះពុទ្ធដើម្បីលាចូលបរិនិព្វាន។', en: 'Pain shattered the physical body, but his purified arahant mind remained established in unshakable equanimity, untouched by fear or resentment.' },
        ]
      }
    ]
  },

  // GEM 7: The Buddha, Coding Logic, Mechanics, & Siṃsapā Sutta
  {
    id: 'coding-simsapa',
    num: 7,
    open: false,
    category: 'science',
    categoryKm: '🔬 វិទ្យាសាស្ត្រ & កូដ',
    categoryEn: '🔬 Science, Logic & Omniscience',
    ref: 'SN 56.31 (សឹម្សបាសូត្រ)',
    questionKm: 'តើព្រះពុទ្ធអាចយល់ពី Logic នៃការសរសេរកូដ (Coding) និងការបង្កើតម៉ូតូ ឡាន ដែរឬទេ ហើយហេតុអ្វីព្រះអង្គមិនបង្កើត ឬមិនបង្រៀនតាំងពី ២,៦០០ ឆ្នាំមុន?',
    questionEn: 'Could the Buddha understand programming logic, coding, and car mechanics, and why did he not invent them 2,600 years ago?',
    shortKm: 'ព្រះពុទ្ធ & Logic កូដ / យានយន្ត',
    shortEn: 'Buddha & Coding Logic / Machines',
    essenceKm: 'តាមគោលការណ៍ ព្រះពុទ្ធយល់ដឹងទាំងអស់យ៉ាងធ្លុះធ្លាយ ព្រោះ Logic កូដគ្រាន់តែជាទម្រង់នៃ «បច្ច័យ» (Idappaccayatā) ហើយយានយន្តគ្រាន់តែជា «រូបធម៌» (Rūpa)។ ប៉ុន្តែយោងតាម «សឹម្សបាសូត្រ» ព្រះពុទ្ធដឹងដូចស្លឹកឈើក្នុងព្រៃ តែបង្រៀនត្រឹមស្លឹកឈើមួយក្តាប់ដៃ (អរិយសច្ច ៤) ពីព្រោះបច្ចេកវិទ្យាលោកិយមិនអាចរំលត់ទុក្ខផ្លូវចិត្ត ឬបញ្ចប់ការស្លាប់បានឡើយ។',
    essenceEn: 'In principle, the Buddha understood all these: code logic is Idappaccayatā (conditionality) and mechanics is Rūpa (matter). Per the Siṃsapā Sutta (SN 56.31), what the Buddha knew was like the leaves of a forest, but he taught only a handful (Four Noble Truths) because secular technology cannot eliminate existential sorrow or death.',
    practicalKm: 'ទោះបីបច្ចេកវិទ្យា ស្មាតហ្វូន ឡានទំនើប ឬ AI រីកចម្រើនយ៉ាងណា ក៏មិនអាចដោះស្រាយទុក្ខនៃការព្រួយបារម្ភ ជំងឺ ឬសេចក្តីស្លាប់បានឡើយ។ កុំវង្វេងនឹងភាពងាយស្រួលខាងក្រៅ រហូតភ្លេចចម្រើនសតិ និងភាពបរិសុទ្ធនៃចិត្តខាងក្នុង!',
    practicalEn: 'Even with supercars, AI, and hyper-connectivity, humans remain subject to aging, grief, anxiety, and death. Never let outer technological wonders obscure inner spiritual liberation.',
    links: [
      { to: '/suttas#sutta-simsapa', km: 'អានសឹម្សបាសូត្រ (ស្លឹកឈើមួយក្តាប់ដៃ)', en: 'Siṃsapā Sutta' },
      { to: '/questions', km: 'សំណួរ–ចម្លើយទី ២៦', en: 'Q&A 26' },
    ],
    sections: [
      {
        titleKm: '១. Logic កូដ និងគ្រឿងយន្ត ក្នុងក្រសែញាណព្រះពុទ្ធ',
        titleEn: '1. Programming Logic & Mechanics Under the Buddha’s Wisdom',
        contentKm: 'ការវិភាគតាមទ្រឹស្តីព្រះពុទ្ធសាសនាបង្ហាញថា៖',
        contentEn: 'A Buddhist doctrinal analysis reveals:',
        points: [
          { boldKm: 'Logic នៃការសរសេរកូដ (Coding & Algorithms)', boldEn: 'Programming Logic', km: 'គ្រឹះនៃកូដកុំព្យូទ័រ (Conditional Branches IF/ELSE, LOOPS, State Machines, Functions) គឺជាទម្រង់រូបវន្ត និងនិមិត្តសញ្ញានៃច្បាប់ «បច្ច័យ» (Idappaccayatā — «កាលបើហេតុនេះមាន ផលនេះក៏មាន...»)។ ព្រះពុទ្ធមានព្រះសព្វញ្ញុតញាណ អាចផ្ចង់ដឹងស្ថាបត្យកម្មទិន្នន័យបានជ្រៅជាងអ្នកវិទ្យាសាស្ត្រកុំព្យូទ័រទៅទៀត។', en: 'Algorithms and conditional logic are symbolic expressions of Idappaccayatā (Causal Conditionality). With supreme omniscience, the Buddha comprehended systemic architectures at the deepest level.' },
          { boldKm: 'ការបង្កើតម៉ូតូ ឡាន (Mechanics & Physics)', boldEn: 'Automobile Mechanics', km: 'គ្រឿងយន្តដំណើរការដោយកម្លាំងកម្ដៅ ចំហេះ ខ្យល់ និងលោហៈធាតុ ដែលសុទ្ធតែជា «រូបធម៌» (Rūpa) ស្ថិតក្រោមច្បាប់នៃមហាភូតរូប ៤ (ដី ទឹក ភ្លើង ខ្យល់) និងឧតុនិយាម (Utu-niyāma) ដែលព្រះពុទ្ធបានបំបែកធ្លុះធ្លាយដល់កម្រិតរូបកលាប។', en: 'Thermodynamics, pistons, and combustion are purely physical phenomena (Rūpa) governed by the 4 Great Elements and Utu-niyāma, which the Buddha analyzed down to subatomic Rūpa-kalāpa.' },
        ]
      },
      {
        titleKm: '២. ហេតុអ្វីមិនបង្កើតតាំងពី ២,៦០០ ឆ្នាំមុន? (សឹម្សបាសូត្រ)',
        titleEn: '2. Why Not Teach or Invent Them? (Siṃsapā Sutta SN 56.31)',
        contentKm: 'ព្រះពុទ្ធបានចាប់ស្លឹកឈើសឹម្សបាមួយក្តាប់ដៃ ហើយត្រាស់ថា៖ ចំណេះដឹងដែលតថាគតដឹង មានច្រើនដូចស្លឹកឈើទាំងអស់ក្នុងព្រៃ តែអ្វីដែលតថាគតបង្រៀន មានត្រឹមស្លឹកឈើមួយក្តាប់ដៃប៉ុណ្ណោះ។ ហេតុអ្វី?\n\n— ពីព្រោះចំណេះដឹងលោកិយទាំងនោះ «ន អត្ថសំហិតំ» មិននាំមកនូវប្រយោជន៍ដល់ការរំលត់ទុក្ខផ្លូវចិត្ត មិននាំទៅរកការអស់កិលេស មិននាំទៅរកសេចក្តីស្ងប់ និងព្រះនិព្វានឡើយ។\n— បច្ចេកវិទ្យាអាចជួយឱ្យមនុស្សធ្វើដំណើរបានលឿនជាងមុន តែមិនអាចជួយឱ្យមនុស្សរួចផុតពីការកើត ចាស់ ឈឺ ស្លាប់បានឡើយ។ ព្រះពុទ្ធមិនខ្ជះខ្ជាយពេលវេលានៃការត្រាស់ដឹងលើរបស់ដែលគ្រាន់តែជាគ្រឿងបម្រើកាមគុណក្នុងសង្សារវដ្តឡើយ។',
        contentEn: 'The Buddha gathered a handful of fallen leaves and declared: What I know is like all leaves in the forest, but what I teach is only a handful. Why? Because mundane inventions do not lead to disenchantment, the ending of craving, inner stillness, or Nibbāna. Cars transport the body faster, but cannot prevent it from growing old, sick, or dying. The Buddha would not divert his dispensation to transient devices that only stimulate sensual attachment.'
      }
    ]
  },

  // GEM 8: Rūpa-kalāpa and Quantum Physics
  {
    id: 'rupa-quantum',
    num: 8,
    open: false,
    category: 'science',
    categoryKm: '🔬 វិទ្យាសាស្ត្រ & អភិធម្ម',
    categoryEn: '🔬 Abhidhamma & Quantum Physics',
    ref: 'អភិធម្មបិដក (វិភង្គអដ្ឋកថា & គម្ពីរអភិធម្មត្ថសង្គហៈ)',
    questionKm: 'យោងតាមគម្ពីរអភិធម្ម តើរូបកលាប (Rūpa-kalāpa) មានដំណើរការយ៉ាងដូចម្ដេច ហើយស្រដៀងគ្នានឹងទ្រឹស្តីរូបវិទ្យាកង់ទិច (Quantum Physics) យ៉ាងណាខ្លះ?',
    questionEn: 'According to Abhidhamma, how do Rūpa-kalāpa operate, and how do they correspond to Quantum / Subatomic Physics?',
    shortKm: 'រូបកលាប & រូបវិទ្យាកង់ទិច',
    shortEn: 'Rūpa-kalāpa & Quantum Physics',
    essenceKm: 'នៅក្នុងគម្ពីរអភិធម្ម រូបធាតុគ្មានភាពរឹងមាំ ឬនៅនឹងមួយកន្លែងឡើយ ប៉ុន្តែជាកញ្ចប់រលកថាមពលតូចៗហៅថា «រូបកលាប» ដែលកើតរលត់រាប់ពាន់កោដិដងក្នុងមួយវិនាទី (អាយុកាល ១៧ ខណៈចិត្ត)។ កញ្ចប់តូចបំផុតគឺ សុទ្ធដ្ឋកកលាប (ធាតុ ៨)។ ចំណុចស្រដៀងគ្នានឹង Quantum Physics រួមមាន៖ គ្មានដុំរឹងពិត (99.9999999% ជាចន្លោះទទេ), កើតរលត់ដូច Quantum Fluctuations, កម្លាំង Cohesion ដូច Strong Nuclear Force, និងឥទ្ធិពលចិត្តជរូប ដូច Observer Effect។',
    essenceEn: 'Matter possesses no static core; it exists in subatomic clusters called Rūpa-kalāpa flashing in and out billions of times per second (17 mind-moments lifespan). Parallels to Quantum Physics: 99.9999999% empty space with subatomic wave-packets, quantum fluctuations, cohesive binding forces, and mind-born matter mirroring the Observer Effect.',
    practicalKm: 'រូបកាយរបស់យើងមើលទៅហាក់ដូចជារឹងមាំ និងជារបស់ «អញ» តែតាមពិតជាភាគល្អិតបរមាណូដែលកំពុងរំញ័រ និងរលត់រាល់វិនាទី។ ការយល់ពីរូបកលាបជួយកម្ចាត់ការប្រកាន់តួខ្លួន (សក្កាយទិដ្ឋិ) ធ្វើឱ្យចិត្តលែងតោងទាម ឬភ័យខ្លាចចំពោះការប្រែប្រួលនៃរាងកាយ។',
    practicalEn: 'Our physical body appears solid and seems like "me", but is in truth microscopic vibrations dissolving every microsecond. Realizing this uproots ego-identification (sakkāya-diṭṭhi), freeing the heart from clutching at the transient body.',
    links: [
      { to: '/abhidhamma#rupa-kalapa', km: 'ជំពូកអភិធម្ម ៖ រូបកលាបពេញលេញ', en: 'Abhidhamma Rūpa-kalāpa' },
      { to: '/questions', km: 'សំណួរ–ចម្លើយទី ២៧', en: 'Q&A 27' },
    ],
    sections: [
      {
        titleKm: '១. មាត្រដ្ឋានបំបែករូបល្អិតបំផុតក្នុងគម្ពីរអភិធម្ម',
        titleEn: '1. The Subatomic Resolution Scale in Abhidhamma',
        contentKm: 'វិភង្គអដ្ឋកថា បង្ហាញពីការបំបែកទំហំរូបធាតុជាដំណាក់កាល ៖\n— ធូលីកង់រទេះ (រថរេណុ) -> ធូលីក្នុងពន្លឺថ្ងៃ (តជ្ជារី) -> អណុ (Aṇu) -> បរមាណូ (Paramāṇu) -> រូបកលាប (Rūpa-kalāpa)។\n\nកញ្ចប់រូបល្អិតបំផុតដែលមិនអាចបំបែកបានតទៅទៀត គឺ «សុទ្ធដ្ឋកកលាប» (Pure Octad) មានធាតុ ៨ ជាប់ស្អិតរមួត ៖\n១. បឋវី (ធាតុដី - ភាពរឹង/ទន់, ម៉ាស់)\n២. អាបោ (ធាតុទឹក - ភាពស្អិតរមួត, ការស្រូបទាញ)\n៣. តេជោ (ធាតុភ្លើង - កម្ដៅ/ថាមពល)\n៤. វាយោ (ធាតុខ្យល់ - ចលនា/សម្ពាធ/រំញ័រ)\n៥. វណ្ណៈ (ពណ៌)\n៦. គន្ធៈ (ក្លិន)\n៧. រស (រសជាតិ)\n៨. ឱជា (ជីវជាតិ/សារធាតុចិញ្ចឹម)។\n\nអាយុកាលនៃរូបកលាបមួយមានត្រឹមតែ ១៧ ខណៈចិត្តប៉ុណ្ណោះ រួចក៏រលត់បាត់ទៅ ហើយរូបថ្មីក៏កើតឡើងជំនួសភ្លាមៗ។',
        contentEn: 'The Vibhaṅga Commentary maps matter: Chariot wheel dust -> speck in sunbeam -> Aṇu -> Paramāṇu -> Rūpa-kalāpa. The indivisible minimal unit is the Pure Octad (Suddhaṭṭhaka): Earth (mass/solidity), Water (cohesive binding), Fire (thermal energy), Wind (oscillation/motion), Color, Odor, Taste, and Nutrition. Its lifespan is exactly 17 mind-moments before dissolving.'
      },
      {
        titleKm: '២. ការប្រៀបធៀប ៤ ចំណុចជាមួយ Quantum Physics',
        titleEn: '2. Four Key Parallels with Quantum Physics',
        contentKm: 'ភាពស្រដៀងគ្នារវាងទ្រឹស្តីព្រះពុទ្ធ និងរូបវិទ្យាទំនើប៖',
        contentEn: 'Remarkable convergences between ancient Dhamma insight and modern physics:',
        points: [
          { boldKm: '១. គ្មានដុំរឹងពិតប្រាកដ (Empty Space & Waves)', boldEn: '1. No Solid Particles', km: 'រូបវិទ្យាបញ្ជាក់ថា អាតូមមានចន្លោះទទេ 99.9999999% ហើយភាគល្អិត subatomic គ្រាន់តែជារលកថាមពល (Wave-packets)។ អភិធម្មសម្តែងថា គ្មានរូបធាតុណានៅនឹងថ្កល់ទេ មានតែការប្រជុំនៃធាតុ ៨ ក្នុងរូបកលាប។', en: 'Atoms are 99.9999999% empty space, with subatomic entities behaving as wave-packets, mirroring Rūpa-kalāpa.' },
          { boldKm: '២. ការកើតរលត់រាប់កោដិដង (Fluctuations)', boldEn: '2. Instant Arising-Passing', km: 'Quantum Fluctuations កើតរលត់ក្នុងកម្រិត 10⁻²³ វិនាទី។ អភិធម្មសម្តែងថារូបកលាបកើតរលត់រាប់ពាន់កោដិដងក្នុងមួយខ្ទាត់ម្រាមដៃ។', en: 'Quantum fluctuations flashing in and out mirror the 17 mind-moment lifespan of Rūpa-kalāpa.' },
          { boldKm: '៣. កម្លាំងស្រូបទាញ និងថាមពល (Binding Forces)', boldEn: '3. Binding Forces', km: 'ធាតុទឹក (អាបោ) ត្រូវគ្នានឹង Strong Nuclear Force, ធាតុភ្លើង (តេជោ) ត្រូវគ្នានឹង Thermal Energy, ធាតុខ្យល់ (វាយោ) ត្រូវគ្នានឹង Kinetic Oscillation។', en: 'Water element corresponds to Strong Nuclear Force, Fire to thermal energy, and Wind to kinetic oscillation.' },
          { boldKm: '៤. ឥទ្ធិពលចិត្តលើរូប (Observer Effect)', boldEn: '4. Mind Affecting Matter', km: 'ក្នុង Quantum អ្នកសង្កេតការណ៍មានឥទ្ធិពលលើលទ្ធផលពិសោធន៍ (Observer Effect)។ អភិធម្មសម្តែងថា ចិត្តបង្កើត «ចិត្តជរូប» គ្រប់វិនាទី។', en: 'The Observer Effect echoes cittaja-rūpa (matter continuously generated and conditioned by mental states).' },
        ]
      }
    ]
  },

  // GEM 9: The 8 Jhānas, 3 Nimittas, Brahma Realms, & Crucial Warning
  {
    id: 'jhana-mastery',
    num: 9,
    open: false,
    category: 'meditation',
    categoryKm: '🧘 សមាធិ & ឈាន',
    categoryEn: '🧘 Meditation & The 8 Jhānas',
    ref: 'វិសុទ្ធិមគ្គ (សមថនិទ្ទេស) & គម្ពីរអភិធម្ម',
    questionKm: 'តើពាក្យថា «ឈាន» (Jhāna) មានន័យដូចម្ដេច មានប៉ុន្មានកម្រិត របៀបបដិបត្តិ និងពេលស្លាប់ទៅតើទៅកើតនៅឯណា?',
    questionEn: 'What does "Jhāna" mean, how many levels exist, how is it attained, and where is one reborn upon death?',
    shortKm: 'ឈានទាំង ៨ & ភពព្រហ្មលោក',
    shortEn: '8 Jhānas & Brahma Realms',
    essenceKm: '«ឈាន» (Jhāna) គឺជាសមាធិកម្រិតខ្ពស់បំផុត (អប្បនាសមាធិ) មានន័យ ២ យ៉ាង៖ ឈាយតិ (ការសញ្ជឹងគិតផ្ដោតអារម្មណ៍) និង ឈាបេតិ (ការដុតកម្ទេចនីវរណធម៌ ៥)។ មាន ៨ កម្រិត (រូបឈាន ៤ និងអរូបឈាន ៤)។ ពេលស្លាប់ទៅជាគរុកម្មបុណ្យ នាំឱ្យទៅកើតនៅ «ឋានព្រហ្មលោក» (រូបព្រហ្ម ១៦ ជាន់ និងអរូបព្រហ្ម ៤ ជាន់ អាយុរាប់ម៉ឺនមហាកប្ប)។ ប៉ុន្តែព្រះពុទ្ធដាស់តឿនថា ឈានគ្រាន់តែជាសមថៈ «ថ្មសង្កត់ស្មៅ» ត្រូវយកឈានមកចម្រើន «វិបស្សនាបញ្ញា» ទើបសម្រេចព្រះនិព្វានបាន។',
    essenceEn: 'Jhāna is full absorption (appanā-samādhi) bearing two meanings: Jhāyati (steadfast focus) and Jhāpeti (incinerating hindrances). There are 8 levels (4 Form & 4 Formless). Post-mortem destiny: immediate rebirth in the 20 Brahma realms. The Buddha warned that Jhāna is merely "a stone on grass"; one must harness its stillness to cultivate Vipassanā insight to realize Nibbāna.',
    practicalKm: 'សមាធិ និងឈានជាឧបករណ៍ផ្តល់ថាមពលស្ងប់ និងភាពភ្លឺថ្លាដល់ចិត្ត។ កុំបដិបត្តិតែដើម្បីភាពស្រណុកសុខស្រួល ឬចង់បានឫទ្ធិអំណាច តែចូរយកចិត្តដែលស្ងប់មាំនោះ មកពិនិត្យមើលការពិតនៃកាយនិងចិត្ត (មិនទៀង ជាទុក្ខ មិនមែនជារបស់យើង) ដើម្បីរំលត់ទុក្ខពិតប្រាកដ!',
    practicalEn: 'Samādhi and Jhāna are power plants of inner clarity. Never meditate merely for serene bliss or mystic powers; turn that concentrated stillness inward to observe impermanence, suffering, and non-self to attain final liberation.',
    links: [
      { to: '/meditation#jhana-deep', km: 'មេរៀនឈានទាំង ៨ ពេញលេញ', en: 'Full 8 Jhānas Masterclass' },
      { to: '/realms#brahma-realms', km: 'ឋានព្រហ្មទាំង ២០ ជាន់', en: '20 Brahma Realms' },
      { to: '/questions', km: 'សំណួរ–ចម្លើយទី ២៨', en: 'Q&A 28' },
    ],
    sections: [
      {
        titleKm: '១. អត្ថន័យពិតនៃពាក្យ «ឈាន» (Jhāna)',
        titleEn: '1. True Etymology of Jhāna',
        contentKm: 'ពាក្យបាលីថា «ឈាន» (Jhāna) ក្លាយមកពីធាតុ ២ សំខាន់ ៖\n— ឈាយតិ (ការសញ្ជឹងគិត) ៖ ការផ្ដោតចិត្តអារម្មណ៍យ៉ាងមុតស្រួច មូលមាំលើអារម្មណ៍កម្មដ្ឋានតែមួយ (ដូចជាដង្ហើម ឬកសិណ) មិនឱ្យរសាត់អណ្តែត។\n— ឈាបេតិ (ការដុតកម្ទេច) ៖ ការដុតកម្ទេចនូវរាល់កិលេសរារាំងចិត្ត គឺ នីវរណធម៌ទាំង ៥ (កាមច្ឆន្ទៈ ព្យាបាទ ថីនមិទ្ធ ឧទ្ធច្ចកុក្កុច្ច វិចិកិច្ឆា) ឱ្យស្ងប់រលត់ទាំងស្រុង។',
        contentEn: 'The Pali term Jhāna derives from two roots: Jhāyati (to steadfastly contemplate a meditation object) and Jhāpeti (to incinerate and burn up the five mental hindrances).'
      },
      {
        titleKm: '២. កម្រិតឈានទាំង ៨ (សមាបត្តិ ៨)',
        titleEn: '2. The Eight Levels of Jhāna (Aṭṭha Samāpatti)',
        contentKm: 'បែងចែកជា រូបឈាន ៤ និង អរូបឈាន ៤ ៖',
        contentEn: 'Divided into 4 Form Jhānas and 4 Formless Jhānas:',
        points: [
          { boldKm: 'បឋមជ្ឈាន (រូបឈានទី ១)', boldEn: '1st Form Jhāna', km: 'មានអង្គ ៥ ៖ វិតក្ក (លើកចិត្តរកអារម្មណ៍), វិចារ (ស្ទាបអង្អែលអារម្មណ៍), បីតិ (សេចក្តីឆ្អែតកាយចិត្ត), សុខ (សេចក្តីស្រួលស្ងប់), ឯកគ្គតា (ចិត្តមូលលើអារម្មណ៍តែមួយ)។', en: '5 factors: Initial application (vitakka), sustained application (vicāra), rapture (pīti), bliss (sukha), one-pointedness (ekaggatā).' },
          { boldKm: 'ទុតិយជ្ឈាន (រូបឈានទី ២)', boldEn: '2nd Form Jhāna', km: 'លះបង់ វិតក្ក និង វិចារ ចោល នៅសល់តែ បីតិ + សុខ + ឯកគ្គតា (ចិត្តស្ងប់ជ្រៅ និងថ្លាថ្លៃជាងមុន)។', en: 'Discards thought and examination; consists of rapture, bliss, and one-pointedness.' },
          { boldKm: 'តតិយជ្ឈាន (រូបឈានទី ៣)', boldEn: '3rd Form Jhāna', km: 'លះបង់ បីតិ (ភាពរំភើបញាប់ញ័រ) ចោល នៅសល់តែ សុខ + ឯកគ្គតា តម្កល់ក្នុងសតិនិងឧបេក្ខាដ៏ត្រជាក់។', en: 'Discards thrilling rapture; rests in quiet bodily bliss and equanimous mindfulness.' },
          { boldKm: 'ចតុត្ថជ្ឈាន (រូបឈានទី ៤)', boldEn: '4th Form Jhāna', km: 'លះបង់ សុខ និង ទុក្ខ ចោលទាំងស្រុង នៅសល់តែ ឧបេក្ខា + ឯកគ្គតា ខ្យល់ដង្ហើមចូលចេញរលត់ឈឹង (អស្សាសបស្សាសា និរុទ្ធា) ចិត្តបរិសុទ្ធថ្លាឈ្វេង។', en: 'Drops bodily pleasure and pain; pure equanimity and one-pointedness; breathing temporarily ceases.' },
          { boldKm: 'អរូបឈានទាំង ៤', boldEn: '4 Formless Jhānas', km: 'អាកាសានញ្ចាយតនៈ (អាកាសគ្មានទីបំផុត) -> វិញ្ញាណញ្ចាយតនៈ (វិញ្ញាណគ្មានទីបំផុត) -> អាកិញ្ចញ្ញាយតនៈ (គ្មានអ្វីសូម្បីបន្តិចបន្តួច) -> នេវសញ្ញានាសញ្ញាយតនៈ (មានសញ្ញាក៏មិនមែន គ្មានសញ្ញាក៏មិនមែន)។', en: 'Infinite Space -> Infinite Consciousness -> Nothingness -> Neither-Perception-Nor-Non-Perception.' },
        ]
      },
      {
        titleKm: '៣. ពេលស្លាប់ទៅ តើទៅកើតនៅឯណា?',
        titleEn: '3. Where Is One Reborn Upon Death?',
        contentKm: 'ឈានជា «មហគ្គតកុសល» ឬ «គរុកម្មបុណ្យ» (កម្មធ្ងន់ផ្នែកល្អ)។ ប្រសិនបើអ្នកសម្រេចឈានមិនឱ្យឈានសាបសូន្យមុនពេលស្លាប់ទេ កម្លាំងឈាននឹងបាញ់វិញ្ញាណឱ្យទៅកើតនៅ «ឋានព្រហ្មលោក» ភ្លាមមួយរំពេច ដោយមិនបាច់ឆ្លងកាត់ឋានសួគ៌ ឬឋានមនុស្សឡើយ ៖\n— រូបឈាន ៤ នាំឱ្យកើតក្នុង រូបព្រហ្ម ១៦ ជាន់ (អាយុរាប់រយកប្ប ដល់ ៥០០ មហាកប្ប)\n— អរូបឈាន ៤ នាំឱ្យកើតក្នុង អរូបព្រហ្ម ៤ ជាន់ (មានតែចិត្ត គ្មានរូបកាយ អាយុរហូតដល់ ៨៤,០០០ មហាកប្ប)។',
        contentEn: 'Jhāna constitutes Mahaggata-kusala (Garuka wholesome kamma). If sustained uncorrupted at death, it ensures immediate rebirth in the Brahma realms: Form Jhānas lead to the 16 Form Brahma planes; Formless Jhānas lead to the 4 Formless planes (living purely as mind without physical matter up to 84,000 Mahākappas).'
      },
      {
        titleKm: '៤. ការដាស់តឿនដ៏សំខាន់របស់ព្រះពុទ្ធ',
        titleEn: '4. The Buddha’s Vital Warning: Stone on Grass',
        contentKm: 'ទោះបីជាឈានមានសេចក្តីស្ងប់សុខ និងអាយុវែងក្នុងឋានព្រហ្មយ៉ាងណាក៏ដោយ ព្រះសម្មាសម្ពុទ្ធតែងដាស់តឿនថា ៖\n១. ឈានគ្រាន់តែជា «ថ្មសង្កត់ស្មៅ» (សង្កត់កិលេសឱ្យស្ងប់មួយគ្រា ប៉ុន្តែឫសគល់នៃកិលេសនៅតែមានដដែល)។\n២. បើចេះតែត្រេកត្រអាលលើឈាន ពេលអស់បុណ្យពីឋានព្រហ្ម ក៏នៅតែអាចធ្លាក់មកកើតជាមនុស្ស សត្វ ឬធ្លាក់នរកបានដដែល។\n៣. ដូច្នេះ ព្រះពុទ្ធបង្គាប់ឱ្យយក «ភាពស្ងប់មាំនៃឈាន» មកធ្វើជាគ្រឹះ រួចបង្វែរចិត្តមកចម្រើន «វិបស្សនាញាណ» (ពិនិត្យរូប-នាម ឱ្យឃើញអនិច្ចំ ទុក្ខំ អនត្តា) ទើបអាចកាត់ឫសកិលេស និងសម្រេចព្រះនិព្វានជាស្ថាពរ!',
        contentEn: 'The Buddha emphatically warned: (1) Jhāna is merely "a stone suppressing grass" — hindrances are dormant, but latent roots (anusaya) remain intact. (2) When life in the Brahma world expires, one can still plunge back into human realms, animals, or hells. (3) Therefore, harness the laser clarity of Jhāna as a launching pad for Vipassanā insight (contemplating anicca, dukkha, anattā) to eradicate defilements forever and attain Nibbāna.'
      }
    ]
  }
])

const filteredGems = computed(() => {
  let list = gems.value

  if (activeCategory.value !== 'all') {
    list = list.filter(g => g.category === activeCategory.value)
  }

  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return list

  return list.filter(g => {
    return g.questionKm.toLowerCase().includes(q) ||
      g.questionEn.toLowerCase().includes(q) ||
      g.essenceKm.toLowerCase().includes(q) ||
      g.shortKm.toLowerCase().includes(q) ||
      (g.ref && g.ref.toLowerCase().includes(q)) ||
      (g.categoryKm && g.categoryKm.toLowerCase().includes(q))
  })
})
</script>
