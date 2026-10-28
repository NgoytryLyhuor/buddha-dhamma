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
  { id: 'all', km: 'ទាំងអស់ (២៤)', en: 'All (24)' },
  { id: 'death', km: '💀 មរណាសន្ន & បដិសន្ធិ', en: '💀 Death & Rebirth' },
  { id: 'kurudhamma', km: '📜 កុរុធម្ម & សីលធម៌', en: '📜 Kurudhamma & Morality' },
  { id: 'cosmology', km: '⏳ អាយុកាល & ចក្កវត្តិសូត្រ', en: '⏳ Lifespan & Cakkavatti Sutta' },
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
  },

  // GEM 10: Human Lifespan Evolution: 10 Years to Asaṅkheyya & The Great Reversal (DN 26)
  {
    id: 'lifespan-evolution',
    num: 10,
    open: false,
    category: 'cosmology',
    categoryKm: '⏳ អាយុកាល & ចក្កវត្តិសីហនាទសូត្រ',
    categoryEn: '⏳ Lifespan Evolution (DN 26)',
    ref: 'ទីឃនិកាយ បាដិកវគ្គ ចក្កវត្តិសីហនាទសូត្រ (DN 26 / ព្រះត្រៃបិដកភាគ ១៩)',
    paliQuote: 'កុសលានំ ធម្មានំ សមាទានហេតុ សោ វឌ្ឍតិ អាយុនាបិ វណ្ណេនបិ (ព្រោះតែការសមាទានកុសលធម៌ រមែងចម្រើនឡើងទាំងអាយុ ទាំងសម្បុរកាយ)',
    questionKm: 'យោងតាមចក្កវត្តិសីហនាទសូត្រ តើអាយុកាលមនុស្សជាតិវិវត្តពី ១០ ឆ្នាំ ឡើងទៅដល់ «អសង្ខេយ្យឆ្នាំ» ហើយធ្លាក់មកវិញដោយសារបច្ច័យធម៌អ្វីខ្លះ?',
    questionEn: 'According to the Cakkavatti-sīhanāda Sutta, how does human lifespan evolve from 10 years up to Asaṅkheyya and descend again through psychophysical laws?',
    shortKm: 'អាយុមនុស្ស ១០ ឆ្នាំ ទៅ អសង្ខេយ្យឆ្នាំ',
    shortEn: 'Lifespan: 10 Years to Asaṅkheyya',
    essenceKm: 'ដំណើរវិវត្តនៃអាយុកាលមនុស្សជាតិពី ១០ ឆ្នាំ រហូតដល់ អសង្ខេយ្យឆ្នាំ (Asaṅkheyya) ក្នុងចក្កវត្តិសីហនាទសូត្រ (DN 26) គឺជាការលាតត្រដាងនូវ «ច្បាប់រូបវិទ្យាផ្លូវចិត្ត (Psychophysical Evolution)» ដែលបង្ហាញថា កាយសម្បទា សុខភាព អាយុ និងបរិស្ថានផែនដី វិវត្តស្របគ្នាទាំងស្រុងជាមួយនឹង «កម្រិតនៃការលាងជម្រះកិលេស និងការបន្ថែមសីលធម៌ម្តងមួយជំហាន»។ ពេលមនុស្សលះបង់ការសម្លាប់ អាយុកើនដល់ ២០ ឆ្នាំ, លះបង់ការលួច ឡើងដល់ ៤០ ឆ្នាំ, រហូតដល់កុសលកម្មបថ ១០ ពេញលេញ ឡើងដល់ ៨០,០០០ ឆ្នាំ (សម័យព្រះសិរិអារ្យមេត្រី) និងឡើងដល់អសង្ខេយ្យឆ្នាំ (កាយមានពន្លឺដូចទេវតា ហោះហើរបាន)។ ប៉ុន្តែពេលរស់នៅយូរពេក កើតសេចក្តីប្រមាទ (Pamāda) ភ្លេចស្លាប់ កិលេសរើឡើងវិញ ក៏ធ្លាក់មកវិញជាវដ្តចក្រ!',
    essenceEn: 'The evolution of human lifespan from 10 years to Asaṅkheyya (Incalculable) in the Cakkavatti-sīhanāda Sutta (DN 26) reveals the ultimate Buddhist psychophysical law: lifespan, biological radiance, and environmental ecology are direct physical projections of collective moral consciousness. As humanity progressively abandons killing (->20 yrs), stealing (->40 yrs), sexual misconduct (->80 yrs), through to full 10 wholesome actions (->80,000 yrs, the Metteyya Buddha era) and pure luminous states (Asaṅkheyya years). Eventually, extreme longevity breeds heedlessness (pamāda) and the illusion of immortality, sparking moral decay and plunging lifespan back down in an eternal cosmic cycle.',
    practicalKm: 'អាយុជីវិត និងបរិស្ថានជុំវិញខ្លួនយើងក្នុងបច្ចុប្បន្ន មិនមែនកើតឡើងដោយចៃដន្យឡើយ តែជាកញ្ចក់ឆ្លុះបញ្ចាំងពីគុណភាពចិត្ត។ ការរក្សាសីល ការពោលពាក្យសច្ចៈ ការមានមេត្តា និងការដឹងគុណ មិនត្រឹមតែជាកុសលផ្លូវចិត្តប៉ុណ្ណោះទេ តែជាថាមពលជីវសាស្រ្តពិតប្រាកដដែលជួយកាត់បន្ថយស្ត្រេស បង្កើនអាយុយឺនយូរ និងធ្វើឱ្យសង្គមរស់នៅប្រកបដោយសន្តិភាព!',
    practicalEn: 'Our biological lifespan and environment are not random accidents; they are direct physical reflections of mental purity. Cultivating ethics, truthfulness, loving-kindness, and gratitude is not merely moral virtue — it is biological preservation that lowers stress, prolongs life, and restores harmonious living to society.',
    links: [
      { to: '/questions', km: 'សំណួរ–ចម្លើយ ៣០', en: 'Q&A 30' },
      { to: '/suttas', km: 'ព្រះសូត្រទាំងឡាយ', en: 'All Suttas' },
      { to: '/kamma', km: 'ច្បាប់កម្មផល', en: 'Kamma & Rebirth' },
      { to: '/realms', km: 'ភពទាំង ៣១ ជាន់', en: '31 Planes of Existence' }
    ],
    sections: [
      {
        titleKm: '១. ចំណុចចាប់ផ្តើមនៃការធ្លាក់ចុះ និងយុគអន្តរកប្ប (អាយុ ១០ ឆ្នាំ)',
        titleEn: '1. The Downward Spiral & The 7-Day Slaughter Era (10-Year Lifespan)',
        contentKm: 'ព្រះសម្មាសម្ពុទ្ធសម្តែងថា ការធ្លាក់ចុះនៃអាយុកាលមនុស្សជាតិកើតចេញពី «ភាពក្រីក្រ និងការមិនចែករំលែកទ្រព្យ» ៖\n១. ស្តេចមិនបានចែកទ្រព្យដល់អ្នកខ្វះខាត បង្កឱ្យកើតទុគ៌តភាព (ភាពក្រីក្រ)។\n២. ភាពក្រីក្រនាំឱ្យកើត អទិន្នាទាន (ការលួចប្លន់) -> នាំឱ្យមានការប្រហារជីវិត និងការប្រើអាវុធ -> នាំឱ្យកើត បាណាតិបាត (ការកាប់សម្លាប់) -> មុសាវាទ (ភូតភរ) -> បិសុណាវាចា (ញុះញង់) -> កាមេសុ មិច្ឆាចារ (ផិតក្បត់) -> ផរុសវាចា (ជេរប្រទេច) -> សម្ផប្បលាប (ពាក្យឥតប្រយោជន៍) -> អភិជ្ឈានិងព្យាបាទ (លោភលន់និងគុំកួន) -> មិច្ឆាទិដ្ឋិ (ការមិនជឿកម្មផល) -> ការមិនគោរពមាតាបិតា សមណព្រាហ្មណ៍ និងចាស់ទុំ។\n\nអាយុកាលមនុស្សបានធ្លាក់ចុះពី ៨០,០០០ ឆ្នាំ រហូតដល់ត្រឹម «១០ ឆ្នាំ» ៖\n— ក្មេងស្រីអាយុ ៥ ឆ្នាំមានគភ៌ និងរៀបការ\n— រសជាតិអាហារល្អៗ (ទឹកដោះថ្លា ទឹកឃ្មុំ ស្ករអំពៅ ស្រូវសាលី) រលាយបាត់អស់ សល់តែស្មៅកណ្ដាស់ (កុទ្រូសកៈ) ធ្វើជាអាហារកំពូល\n— មនុស្សលែងស្គាល់ម្តាយ ឪពុក មីងមា បងប្អូន ប្រព្រឹត្តកាមរុករានដូចសត្វពាហនៈ\n— កើត «សត្ថន្តរកប្ប» (ចម្បាំងកាប់សម្លាប់គ្នា) រយៈពេល ៧ ថ្ងៃ ដោយឃើញមុខគ្នាសុទ្ធតែជាសត្វម្រឹគដែលត្រូវសម្លាប់!',
        contentEn: 'The downward spiral began with poverty: (1) Rulers failed to distribute wealth to the destitute, generating extreme inequality. (2) Poverty led to theft, weapons, killing, falsehood, slander, sexual misconduct, harsh speech, idle talk, covetousness, ill-will, false views, and filial disrespect. Human lifespan degenerated from 80,000 years down to just 10 years: girls married at age 5; fine flavours (ghee, honey, cane-sugar) vanished, replaced by wild grass as staple food; family incestuous chaos became unchecked; and the 7-day "Sword Interval" (satthantara-kappa) erupted where people perceived each other as wild game to be slaughtered.',
        quoteKm: '«ក្នុងកាលនោះ មនុស្សទាំងឡាយរមែងកើតសេចក្តីសំគាល់ក្នុងគ្នានិងគ្នា ថាជាម្រឹគ ហើយកាន់យកគ្រឿងសាស្ត្រាវុធដ៏មុតថ្លា សម្លាប់គ្នានិងគ្នាទៅវិញទៅមក...» — (ចក្កវត្តិសីហនាទសូត្រ)',
        quoteEn: '"At that time, they will see one another as wild beasts; taking up sharp weapons, they will butcher one another..." — (DN 26)'
      },
      {
        titleKm: '២. របត់ភ្ញាក់រលឹក និងដំណាក់កាលវិវត្តឡើងវិញទាំង ១៣ (ពី ១០ ឆ្នាំ ដល់ អសង្ខេយ្យឆ្នាំ)',
        titleEn: '2. The Turning Point & The 13 Ascending Stages (10 to Asaṅkheyya Years)',
        contentKm: 'មនុស្សមួយចំនួនបានរត់គេចខ្លួនទៅពួនក្នុងរូងភ្នំ ជ្រលងជ្រោះ ក្រហែងថ្ម រយៈពេល ៧ ថ្ងៃ។ ផុត ៧ ថ្ងៃ ចេញមកឃើញគ្នាឱបយំ អរអរ សង្វេគចិត្ត ហើយប្តេជ្ញាថា៖ «យើងលែងកាប់សម្លាប់គ្នាទៀតហើយ យើងត្រូវសមាទានកុសលធម៌!» ហើយការវិវត្តឡើងវិញក៏ចាប់ផ្តើមជា ១៣ ដំណាក់កាល ៖',
        contentEn: 'A remnant escaped into mountain clefts and caves for 7 days. Emerging and embracing each other with profound remorse (saṃvega), they resolved: "Let us slaughter no more; let us practice wholesome virtues!" Thus began the 13-stage upward evolution:',
        points: [
          { boldKm: 'ដំណាក់កាលទី ១ (១០ -> ២០ ឆ្នាំ)', boldEn: 'Stage 1 (10 -> 20 Yrs)', km: 'សមាទាន «បាណាតិបាតា វេរមណី» (វៀរចាកការសម្លាប់ជីវិត) -> កាយវិការទន់ភ្លន់ គ្មានការភ័យខ្លាច កោសិកាស្ងប់ កូនចៅមានអាយុវែងទ្វេដងឡើងដល់ ២០ ឆ្នាំ។', en: 'Renouncing killing (Pāṇātipātā veramaṇī) -> Fear subsides, biological cellular repair begins; lifespan doubles to 20 years.' },
          { boldKm: 'ដំណាក់កាលទី ២ (២០ -> ៤០ ឆ្នាំ)', boldEn: 'Stage 2 (20 -> 40 Yrs)', km: 'សមាទាន «អទិន្នាទានា វេរមណី» (វៀរចាកការលួចប្លន់) -> សង្គមមានសុវត្ថិភាពលើទ្រព្យសម្បត្តិ បាត់ការភ័យខ្លាចពីចោរកម្ម កូនចៅមានអាយុឡើងដល់ ៤០ ឆ្នាំ។', en: 'Renouncing stealing (Adinnādānā veramaṇī) -> Economic security and peaceful sleep; lifespan climbs to 40 years.' },
          { boldKm: 'ដំណាក់កាលទី ៣ (៤០ -> ៨០ ឆ្នាំ)', boldEn: 'Stage 3 (40 -> 80 Yrs)', km: 'សមាទាន «កាមេសុ មិច្ឆាចារា វេរមណី» (វៀរចាកការផិតក្បត់ ប្រព្រឹត្តខុសក្នុងកាម) -> គ្រួសាររឹងមាំ សីលធម៌សង្គមខ្ពស់ កាយសម្បទារឹងប៉ឹង កូនចៅមានអាយុឡើងដល់ ៨០ ឆ្នាំ។', en: 'Renouncing sexual misconduct (Kāmesu micchācārā veramaṇī) -> Sacred family bonds, sound genetics; lifespan reaches 80 years.' },
          { boldKm: 'ដំណាក់កាលទី ៤ (៨០ -> ១៦០ ឆ្នាំ)', boldEn: 'Stage 4 (80 -> 160 Yrs)', km: 'សមាទាន «មុសាវាទា វេរមណី» (វៀរចាកការកុហក ភូតភរ) -> សង្គមមានសច្ចធម៌ ទំនុកចិត្តគ្នាទៅវិញទៅមក គ្មានការបោកប្រាស់ កូនចៅមានអាយុឡើងដល់ ១៦០ ឆ្នាំ។', en: 'Renouncing falsehood (Musāvādā veramaṇī) -> Absolute social trust; biological lifespan advances to 160 years.' },
          { boldKm: 'ដំណាក់កាលទី ៥ (១៦០ -> ៣២០ ឆ្នាំ)', boldEn: 'Stage 5 (160 -> 320 Yrs)', km: 'សមាទាន «បិសុណាវាចាយ វេរមណី» (វៀរចាកការនិយាយញុះញង់ បំបែកបំបាក់) -> សាមគ្គីភាពជាតិខ្ពស់ គ្មានបក្ខពួកនិយម គ្មានសង្គ្រាមត្រជាក់ កូនចៅមានអាយុឡើងដល់ ៣២០ ឆ្នាំ។', en: 'Renouncing divisive speech (Pisuṇāvācā veramaṇī) -> Harmonious social cohesion; lifespan reaches 320 years.' },
          { boldKm: 'ដំណាក់កាលទី ៦ (៣២០ -> ៦៤០ ឆ្នាំ)', boldEn: 'Stage 6 (320 -> 640 Yrs)', km: 'សមាទាន «ផរុសវាចាយ វេរមណី» (វៀរចាកពាក្យទ្រគោះ ជេរប្រទេច) -> ពោលតែពាក្យពិរោះ ផ្អែមល្ហែម សំឡេងពិរោះដូចសត្វករវិក គ្មានស្ត្រេស កូនចៅមានអាយុឡើងដល់ ៦៤០ ឆ្នាំ។', en: 'Renouncing harsh speech (Pharusāvācā veramaṇī) -> Gentle speech like the karavīka bird, zero cortisol stress; lifespan doubles to 640 years.' },
          { boldKm: 'ដំណាក់កាលទី ៧ (៦៤០ -> ២,០០០ ឆ្នាំ)', boldEn: 'Stage 7 (640 -> 2,000 Yrs)', km: 'សមាទាន «សម្ផប្បលាបា វេរមណី» (វៀរចាកការនិយាយឥតប្រយោជន៍ រោយរាយ) -> និយាយតែធម៌ ចិត្តផ្ដោតលើការភាវនា សមាធិ កូនចៅមានអាយុឡើងដល់ ២,០០០ ឆ្នាំ។', en: 'Renouncing idle chatter (Samphappalāpā veramaṇī) -> Mind dedicated to Dhamma contemplation and samādhi; lifespan jumps to 2,000 years.' },
          { boldKm: 'ដំណាក់កាលទី ៨ (២,០០០ -> ៤,០០០ ឆ្នាំ)', boldEn: 'Stage 8 (2,000 -> 4,000 Yrs)', km: 'លះបង់ «អភិជ្ឈា» (ការសម្លឹងចង់បានទ្រព្យអ្នកដទៃ) -> មានសន្តោសគតិ ពេញចិត្តនឹងអ្វីដែលខ្លួនមាន ចិត្តមិនក្តៅក្រហាយ កូនចៅមានអាយុឡើងដល់ ៤,០០០ ឆ្នាំ។', en: 'Eradicating covetousness (Anabhijjhā) -> Profound contentment and tranquility; lifespan extends to 4,000 years.' },
          { boldKm: 'ដំណាក់កាលទី ៩ (៤,០០០ -> ៨,០០០ ឆ្នាំ)', boldEn: 'Stage 9 (4,000 -> 8,000 Yrs)', km: 'លះបង់ «ព្យាបាទ» (គំនិតគុំកួន ចងពៀរ) -> បំពេញព្រហ្មវិហារធម៌ និងមេត្តាចិត្ត រស្មីមេត្តាគ្របដណ្តប់ សូម្បីសត្វព្រៃកាចសាហាវក៏ស្លូតបូត កូនចៅមានអាយុឡើងដល់ ៨,០០០ ឆ្នាំ។', en: 'Eradicating ill-will (Abyāpāda) -> Radiating boundless loving-kindness; wild beasts turn gentle; lifespan rises to 8,000 years.' },
          { boldKm: 'ដំណាក់កាលទី ១០ (៨,០០០ -> ២០,០០០ ឆ្នាំ)', boldEn: 'Stage 10 (8,000 -> 20,000 Yrs)', km: 'បង្កើត «សម្មាទិដ្ឋិ» (ការយល់ត្រូវតាមច្បាប់កម្មផល) -> ធម្មជាតិ ទឹក ដី ខ្យល់ ក្លាយជាបរិសុទ្ធ គ្មានជាតិពុល កូនចៅមានអាយុឡើងដល់ ២០,០០០ ឆ្នាំ។', en: 'Cultivating Right View (Sammādiṭṭhi) -> Clear comprehension of kamma, planetary ecology is purified; lifespan reaches 20,000 years.' },
          { boldKm: 'ដំណាក់កាលទី ១១ (២០,០០០ -> ៤០,០០០ ឆ្នាំ)', boldEn: 'Stage 11 (20,000 -> 40,000 Yrs)', km: 'បំពេញ «មាតាបិតុឧបដ្ឋាន & កុលជេដ្ឋាបចាយនធម៌» (ដឹងគុណមាតាបិតា គោរពព្រះសង្ឃ និងចាស់ទុំ) -> កូនចៅមានអាយុឡើងដល់ ៤០,០០០ ឆ្នាំ (សម័យព្រះពុទ្ធកកុសន្ធោ)។', en: 'Filial piety & honoring spiritual elders -> Lifespan expands to 40,000 years (era of Kakusandha Buddha).' },
          { boldKm: 'ដំណាក់កាលទី ១២ (៤០,០០០ -> ៨០,០០០ ឆ្នាំ)', boldEn: 'Stage 12 (40,000 -> 80,000 Yrs)', km: 'បំពេញ «កុសលកម្មបថ ១០ ពេញលេញ» -> ផែនដីរាបស្មើដូចស្គរ មានដើមកល្បព្រឹក្ស គ្មានជំងឺរាតត្បាត មានតែជំងឺ ៣ យ៉ាងប៉ុណ្ណោះគឺ ឃ្លាន ស្រេក និងចាស់ជរា។ ស្រ្តីអាយុ ៥០០ ឆ្នាំទើបរៀបការ។ សម័យនេះ ព្រះសិរិអារ្យមេត្រី (Metteyya Buddha) នឹងត្រាស់ដឹង! កូនចៅមានអាយុ ៨០,០០០ ឆ្នាំ។', en: 'Full 10 Wholesome Actions (Kusala Kammapatha) -> Earth becomes smooth like a drum, wish-fulfilling trees flourish, only 3 mild ailments exist (hunger, thirst, aging). Women marry at age 500. Era of Metteyya Buddha; lifespan reaches 80,000 years.' },
          { boldKm: 'ដំណាក់កាលទី ១៣ (ឡើងដល់ «អសង្ខេយ្យឆ្នាំ»)', boldEn: 'Stage 13 (Ascending to Asaṅkheyya)', km: 'ចិត្តបរិសុទ្ធស្អាតស្អំដល់កម្រិតកំពូល -> កាយសម្បទាមានពន្លឺរស្មីចាំងផ្លេក ដូចទេវតា អាចហោះហើរលើអាកាសបាន បរិភោគបីតិជាអាហារ (បីតិភក្ខា) រស់នៅរាប់សិបសែនលានឆ្នាំ គ្មានទុក្ខព្រួយ រហូតដល់មិនអាចរាប់បាន (អសង្ខេយ្យ Asaṅkheyya)។', en: 'Supreme Mental Purity -> Translucent radiant bodies like Devas, ability to levitate, feeding on spiritual joy (pīti-bhakkhā), living for incalculable cosmic eons (Asaṅkheyya).' }
        ]
      },
      {
        titleKm: '៣. វដ្តត្រឡប់មកវិញ ៖ វិបត្តិនៃសេចក្តីប្រមាទ (Pamāda) និងការធ្លាក់ចុះសារជាថ្មី',
        titleEn: '3. The Great Reversal: The Crisis of Heedlessness (Pamāda) & Moral Decay',
        contentKm: 'សំណួរសួរថា ៖ ហេតុអ្វីបានជាមនុស្សអាយុវែងដល់អសង្ខេយ្យឆ្នាំហើយ មិននៅស្ថិតស្ថេររហូត បែរជាធ្លាក់ចុះមកវិញ?\n\nព្រះសម្មាសម្ពុទ្ធបានលាតត្រដាងការពិតថា ៖\n១. ពេលមនុស្សរស់នៅរាប់លានឆ្នាំយូរពេក ក៏ចាប់ផ្តើម «ភ្លេចខ្លួន និងកើតសេចក្តីប្រមាទ (Pamāda)»។\n២. មនុស្សលែងឃើញ ជាតិ ជរា ព្យាធិ មរណៈ ក៏គិតស្មានថារូបកាយ និងជីវិតនេះជា «អមតៈ (Immortality Illusion)»។\n៣. ពេលគិតថាខ្លួនមិនចេះស្លាប់ មនុស្សក៏លែងខ្វល់ខ្វាយធ្វើបុណ្យកុសល លែងចម្រើនសតិ បណ្តោយឱ្យតណ្ហានិងសេចក្តីលោភលន់ជ្រៀតចូលជាថ្មី។\n៤. ការលោភលន់លើរបស់របរ និងអាហារបង្កឱ្យមានការបែងចែកព្រំប្រទល់ និងកម្មសិទ្ធិ -> នាំឱ្យមានការលួចប្លន់ -> កុហក -> កាប់សម្លាប់... កិលេសរើឡើងវិញជាលំដាប់ ធ្វើឱ្យអាយុកាលមនុស្សធ្លាក់ចុះពីអសង្ខេយ្យ មក ៨០,០០០ ឆ្នាំ មក ៤០,០០០ ឆ្នាំ មក ១,០០០ ឆ្នាំ មក ១០០ ឆ្នាំ (សម័យព្រះសមណគោតម) និងធ្លាក់ទៅ ១០ ឆ្នាំសារជាថ្មី វិលវល់ឥតឈប់ឈរ!',
        contentEn: 'Why did extreme longevity not persist forever? The Buddha revealed the psycho-spiritual pitfall: (1) Living for incalculable millions of years bred deep heedlessness (pamāda). (2) Without visible aging, illness, or death, beings fell into the grand illusion of immortality. (3) Assuming they were immortal, they ceased cultivating mindfulness and virtue, allowing latent greed (taṇhā) to re-emerge. (4) Covetous hoarding sparked ownership boundaries, theft, falsehood, weapons, and bloodshed. As defilements resurfaced, lifespan tumbled from Asaṅkheyya back to 80,000, 40,000, 1,000, 100 years (our Gotama Buddha era), and down to 10 years again in an endless cosmic cycle.'
      },
      {
        titleKm: '៤. សច្ចធម៌វិទ្យាសាស្ត្រចិត្ត ៖ កាយនិងចិត្តជាកញ្ចក់ឆ្លុះគ្នា (Psychosomatic Causality)',
        titleEn: '4. Psychosomatic Reality: The Mind Governs Biology and the Cosmos',
        contentKm: 'ចក្កវត្តិសីហនាទសូត្រ បានបង្ហាញនូវច្បាប់ធម្មជាតិដ៏ជ្រាលជ្រៅបំផុត ៣ ប្រការ ៖\n១. ចិត្តនិយាម កំណត់ រូបនិយាម ៖ កោសិកា សម្បុរ និងអាយុកាលរបស់រូបកាយ (ចិត្តជរូប) ប្រែប្រួលទៅតាមថាមពលនៃចិត្ត។ កាលណាស្អប់ គុំកួន សម្លាប់ កោសិកាបំផ្លាញខ្លួនឯង។ កាលណាមានមេត្តា សីល និងសច្ចៈ កោសិកាបង្កើតថាមពលជីវិតដ៏បរិសុទ្ធ។\n២. បុគ្គលនិយាម បង្កើត ឧតុជរូប (បរិស្ថានផែនដី) ៖ ផែនដីមានជីជាតិ រាបស្មើ ទឹកថ្លា ខ្យល់បរិសុទ្ធ ឬរងគ្រោះដោយគ្រោះរាំងស្ងួត និងការបំពុល គឺកើតចេញពីកម្លាំងកម្មរួម (Communal Kamma) របស់មនុស្ស។\n៣. គ្មានអាទិទេពណាដាក់ទណ្ឌកម្ម ៖ អាយុខ្លីឬវែង មិនមែនជាការដាក់ទណ្ឌកម្ម ឬប្រទានពរពីព្រះឡើយ តែជាលទ្ធផលសុទ្ធសាធនៃ «ច្បាប់ហេតុនិងផល»។ ចង់ឱ្យពិភពលោកស្រស់បំព្រង និងមានអាយុយឺនយូរ ត្រូវចាប់ផ្តើមពីការសម្អាតចិត្ត និងសមាទានសីលក្នុងបច្ចុប្បន្ន!',
        contentEn: 'The sutta illuminates 3 profound Buddhist natural laws: (1) Citta-niyāma governs Rūpa-niyāma: biological cells, radiance, and longevity are physically configured by mental states (cittaja-rūpa). Hatred and slaughter trigger cellular breakdown; virtue and mettā generate radiant longevity. (2) Collective morality shapes planetary climate and botany (Utu-niyāma & kamma-niyāma). (3) No divine entity punishes or rewards: longevity is the natural deterministic fruit of moral evolution. To heal biology and ecology, one must purify the mind and uphold ethics today.'
      }
    ]
  },

  // GEM 11: Kurudhamma Jātaka (Jātaka No. 276) - 11 Precept Keepers & Ending the Kaliṅga Drought
  {
    id: 'kurudhamma-jataka',
    num: 11,
    open: false,
    category: 'kurudhamma',
    categoryKm: '📜 កុរុធម្មជាតក & សីល ៥',
    categoryEn: '📜 Kurudhamma Jātaka & Precepts',
    ref: 'ខុទ្ទកនិកាយ ជាតក កុរុធម្មជាតក (ជាតកលេខ ២៧៦ / ព្រះត្រៃបិដកភាគ ៥៩)',
    paliQuote: 'ធម្មំ ចរេ សុចរិតំ ន តំ ទុច្ចរិតំ ចរេ · ធម្មចារី សុខំ សេតិ អស្មឹ លោកេ បរម្ហិ ច (បុគ្គលគប្បីប្រព្រឹត្តធម៌ឱ្យសុចរិត កុំប្រព្រឹត្តទុច្ចរិតឡើយ អ្នកប្រព្រឹត្តធម៌រមែងដេកជាសុខ ទាំងក្នុងលោកនេះ ទាំងក្នុងលោកបរលោក)',
    questionKm: 'យោងតាមកុរុធម្មជាតក តើសីលធម៌របស់ស្តេច និងប្រជាជននៅដែនដីកុរុ មានភាពម៉ត់ចត់ និងបរិសុទ្ធយ៉ាងណាខ្លះ រហូតដល់នគរកលិង្គរដ្ឋដែលកំពុងរាំងស្ងួត ត្រូវបញ្ជូនបេសកជនមកចម្លងយក «កុរុធម្ម» នេះទៅប្រតិបត្តិ?',
    questionEn: 'According to the Kurudhamma Jātaka (No. 276), how scrupulously pure was the morality of the king and 11 citizens of Kuru, leading drought-stricken Kaliṅga to send envoys to inscribe it on golden plates?',
    shortKm: 'កុរុធម្មជាតក & សីលបរិសុទ្ធ ១១ រូប',
    shortEn: 'Kurudhamma Jātaka: 11 Pure Precept Keepers',
    essenceKm: 'នៅក្នុងកុរុធម្មជាតក (ជាតកលេខ ២៧៦) «កុរុធម្ម» គឺជាការរក្សាសីល ៥ ដ៏បរិសុទ្ធស្អាតបំផុតរបស់ស្តេច និងប្រជាជនដែនកុរុ ដែលប្រុងប្រយ័ត្ន និងស្អប់ខ្ពើមអំពើបាបដល់កម្រិតកំពូល រហូតសូម្បីតែការសង្ស័យនឹងកំហុសដ៏ល្អិតល្អោច (កុក្កុច្ចៈ) ក៏ចាត់ទុកថាជាកំហុស និងមានសេចក្តីសោកស្តាយក្រៀមក្រំ។ ពេលនគរកលិង្គរដ្ឋរងគ្រោះរាំងស្ងួតធ្ងន់ធ្ងរ ព្រះរាជាកលិង្គរាជបានសុំដំរីមង្គលអញ្ជនវសភៈ តែភ្លៀងនៅតែមិនធ្លាក់។ ទើបដឹងការពិតថា ភ្លៀងធ្លាក់ដោយសារ «កម្លាំងសីលកុរុធម្ម» ហើយបានចាត់រាជទូតមកចារឹកកុរុធម្មលើបន្ទះមាស (សុវណ្ណបដ្ត)។ ពេលមនុស្សទូទាំងនគរកលិង្គរដ្ឋសមាទានសីល ៥ ព្រមគ្នា ភ្លៀងមេឃធំបានបង្អុរចុះមកភ្លាម រំលត់គ្រោះទុរភិក្សទាំងស្រុង!',
    essenceEn: 'In Kurudhamma Jātaka (No. 276), "Kurudhamma" represents the immaculate observance of the 5 Precepts by the King and 11 citizens of Kuru, characterized by extreme moral vigilance where even the slightest micro-doubt (kukkucca) caused deep self-reproach. When Kaliṅga suffered severe drought, their king requested Kuru’s auspicious rain-elephant, but rain never fell. Realizing rain was produced solely by Kuru’s moral integrity, envoys were sent to transcribe the Kurudhamma onto golden plates. When the entire Kaliṅga kingdom resolved to uphold the 5 Precepts, torrential rains immediately poured forth, eradicating famine forever.',
    practicalKm: 'សីលមិនមែនគ្រាន់តែជាការមិនសម្លាប់ ឬមិនលួចខាងក្រៅប៉ុណ្ណោះទេ តែជា «សេចក្តីស្អាតស្អំនៃមនសិការ»។ ការមានសតិប្រុងប្រយ័ត្នចំពោះគំនិតលោភលន់ លំអៀង ឬការធ្វេសប្រហែសសូម្បីបន្តិចបន្តួច គឺជាគ្រឹះនៃមហាកុសល ដែលអាចផ្លាស់ប្តូរជីវិត គ្រួសារ និងសង្គមជាតិទាំងមូល!',
    practicalEn: 'Precepts are not merely external mechanical restraints against killing or stealing, but an immaculate inward clarity of conscience. Vigilance against microscopic greed, bias, or negligence builds spiritual power capable of transforming destiny, family harmony, and national wellbeing.',
    links: [
      { to: '/questions', km: 'សំណួរ–ចម្លើយ ៣១', en: 'Q&A 31' },
      { to: '/ethics', km: 'សីលធម៌ & សីល ៥', en: 'Ethics & 5 Precepts' },
      { to: '/stories', km: 'រឿងល្បីៗសម័យពុទ្ធកាល', en: 'Famous Stories' },
      { to: '/my-gems#sila-weather-physics', km: 'យន្តការអភិធម្ម និងធាតុអាកាស', en: 'Abhidhamma Weather Physics' }
    ],
    sections: [
      {
        titleKm: '១. ហេតុការណ៍ដែលនាំឱ្យកលិង្គរដ្ឋចម្លង «កុរុធម្ម»',
        titleEn: '1. The Drought in Kaliṅga & The Elephant Misconception',
        contentKm: '— គ្រោះទុរភិក្សនៅកលិង្គរដ្ឋ ៖ នគរកលិង្គរដ្ឋបានរងគ្រោះរាំងស្ងួតយ៉ាងធ្ងន់ធ្ងរ ភ្លៀងមិនធ្លាក់អស់ជាច្រើនឆ្នាំ បង្កជាទុរភិក្ស អត់បាយស្លាប់ និងជំងឺរាតត្បាតពេញនគរ។\n— ការសុំដំរីមង្គលមិនបានផល ៖ ព្រះបាទកលិង្គរាជបានដឹងថា ព្រះបាទធនញ្ជ័យកោរព្យៈ (ព្រះពោធិសត្វ ស្តេចនៃដែនដីកុរុ) មានដំរីទិព្វឈ្មោះ «អញ្ជនវសភៈ» ដែលទៅដល់ទីណា ទីនោះតែងមានភ្លៀងធ្លាក់។ ស្តេចកលិង្គរដ្ឋបានចាត់ព្រាហ្មណ៍ទៅសុំដំរី ហើយស្តេចកុរុក៏បានប្រទានឱ្យដោយមិនស្តាយស្រណោះ។ ប៉ុន្តែពេលយកដំរីមកដល់ ភ្លៀងនៅតែមិនធ្លាក់ដដែល។\n— ការរកឃើញការពិត ៖ ស្តេចកលិង្គរាជបានពិចារណាទើបដឹងថា ហេតុដែលធ្វើឱ្យដែនដីកុរុមានភ្លៀងធ្លាក់ទៀងទាត់តាមរដូវកាល មិនមែនមកពីដំរីស ឬឫទ្ធិអំណាចខាងក្រៅឡើយ ប៉ុន្តែមកពី «កម្លាំងសីលធម៌កុរុធម្ម» របស់ព្រះរាជា និងប្រជាជននៅទីនោះ។ ព្រះអង្គក៏បានចាត់រាជទូត និងអាមាត្យឱ្យទៅចារឹកកុរុធម្មនេះលើបន្ទះមាស (សុវណ្ណបដ្ត) ដើម្បីយកមកប្រតិបត្តិ។',
        contentEn: '— Famine in Kaliṅga: Severe protracted drought struck the kingdom of Kaliṅga; crops withered, people starved, and pestilence ran rampant.\n— Rain Elephant Request Fails: Hearing that King Dhanañjaya Koravya of Kuru possessed an auspicious state elephant named "Añjanavasabha" credited with bringing rain, the King of Kaliṅga dispatched Brahmins to plead for it. The generous Bodhisatta gifted the elephant immediately. Yet in Kaliṅga, not a single raindrop fell.\n— The Realization: King Kaliṅga discerned that nature’s seasonal harmony derived not from an external creature, but from Kuru’s immaculate moral purity ("Kurudhamma"). He dispatched high royal envoys to inscribe this code onto golden plates (suvaṇṇapaṭṭa) to institute it throughout Kaliṅga.'
      },
      {
        titleKm: '២. ភាពបរិសុទ្ធ និងការប្រុងប្រយ័ត្នរបស់បុគ្គលទាំង ១១ រូប (Kukkucca)',
        titleEn: '2. The 11 Citizens & Their Microscopic Moral Conscience (Kukkucca)',
        contentKm: 'ពេលរាជទូតទៅដល់ មនុស្សទាំង ១១ នាក់នៅដែនដីកុរុ គ្មាននរណាម្នាក់ហ៊ានអះអាងថាសីលរបស់ខ្លួនបរិសុទ្ធពេញលេញឡើយ ព្រោះម្នាក់ៗសុទ្ធតែមាន «ការសង្ស័យនឹងកំហុសដ៏ល្អិតល្អោច» (កុក្កុច្ចៈ) របស់ខ្លួន ៖',
        contentEn: 'When Kaliṅga’s envoys arrived, none of the 11 individuals dared claim their precepts were flawless, each distressed by subtle micro-doubts (kukkucca):',
        points: [
          { boldKm: '១. ព្រះមហាក្សត្រ (ធនញ្ជ័យ)', boldEn: '1. The King (Bodhisatta)', km: 'ក្នុងពិធីបាញ់ព្រួញកម្សាន្ត ព្រួញមួយបានធ្លាក់ចុះទៅក្នុងទឹកបឹង។ ព្រះអង្គសង្ស័យថា «តើព្រួញនោះបានមុតត្រូវត្រី ឬអណ្តើកក្នុងទឹកស្លាប់ដែរឬទេ?» (ខ្លាចដាច់សីលទី ១)។', en: 'During archery recreation, an arrow fell into a lake; he agonized whether it might have injured a fish or turtle underwater (fearing a breach of the 1st precept).' },
          { boldKm: '២. ព្រះរាជមាតា', boldEn: '2. The Queen Mother', km: 'ទទួលកម្រងផ្កា ២ មួយល្អជាង មួយទៀតអន់ជាង។ ព្រះនាងយកផ្កាល្អទៅឱ្យកូនប្រសារច្បង រួចសង្ស័យថា «ខ្លួនមានចិត្តលម្អៀង ស្រឡាញ់មិនស្មើគ្នា»។', en: 'Received two flower garlands of slightly unequal quality; giving the finer one to the elder daughter-in-law, she grieved fearing partiality and bias.' },
          { boldKm: '៣. ព្រះអគ្គមហេសី', boldEn: '3. The Chief Queen', km: 'សម្លឹងមើលព្រះអនុជស្វាមី (ប្អូនថ្លៃ) ដោយក្តីរាប់អាន ស្រាប់តែមានអារម្មណ៍ភ្លែតមួយគិតថាប្អូនថ្លៃសង្ហា ព្រះនាងភ័យស្លន់ស្លោសង្ស័យថា «តើខ្លួនមានចិត្តកាមរាគក្បត់ស្វាមីឬទេ?» (ខ្លាចដាច់សីលទី ៣)។', en: 'Looking warmly at her brother-in-law, a fleeting impression of his handsome grace passed her mind; she was horrified fearing subtle lust or disloyalty (3rd precept).' },
          { boldKm: '៤. ព្រះឧបរាជ (ប្អូនស្តេច)', boldEn: '4. The Viceroy', km: 'យប់មួយយាងទៅគាល់ស្តេច ឃើញស្តេចលក់ មិនហ៊ានដាស់ ក៏គិតក្នុងចិត្តថា «បើបងអញសុគត អញនឹងបានឡើងគ្រងរាជ្យ»។ ពេលដឹងខ្លួន ព្រះអង្គស្តាយក្រោយយ៉ាងខ្លាំងដែលកើតចិត្តលោភរាជសម្បត្តិ។', en: 'Visiting the sleeping king late at night, the thought arose: "If my brother dies, the kingdom becomes mine." He immediately recoiled in shame at harbor ambition.' },
          { boldKm: '៥. ព្រាហ្មណ៍បុរោហិត', boldEn: '5. The Royal Chaplain', km: 'ពេលព្រះរាជាប្រទានរាជរថជាទាន លោកសប្បាយចិត្តដើរជុំវិញរថ រួចសង្ស័យថា «ខ្លួនជាអ្នកបួស បែរជាមានចិត្តជាប់ជំពាក់នឹងទ្រព្យសម្បត្តិលោកិយ»។', en: 'Given a royal chariot by the king, he admired it joyfully by circling it, then reproached himself for harboring worldly attachment as a religious ascetic.' },
          { boldKm: '៦. អាមាត្យវាស់ដី (រជ្ជុកាហកៈ)', boldEn: '6. The Land Surveyor', km: 'ពេលកាន់ខ្សែវាស់ដីស្រែឱ្យរដ្ឋ បង្គោលខ្សែចំរន្ធក្តាម។ គាត់គិតថា «បើបោះបង្គោលចំ ខ្លាចមុតក្តាម (ខុសសីលទី១) បើវាងទៅមុខ រដ្ឋខាត បើថយក្រោយ រាស្ត្រខាត (ខុសសីលទី២)»។', en: 'Measuring royal fields, his survey peg aligned with a crab hole; he was paralyzed whether planting it might kill the crab, while shifting it forward harmed the state and backward harmed the farmer.' },
          { boldKm: '៧. នាយសារថី (អ្នកបររថ)', boldEn: '7. The Charioteer', km: 'ពេលភ្លៀងធ្លាក់ខ្លាំង គាត់លើកแสែគោះខ្នងសេះបន្តិចដើម្បីឱ្យរត់លឿនគេចភ្លៀង រួចសោកស្តាយថា «សេះប្រឹងរត់យ៉ាងនេះហើយ ហេតុអ្វីខ្លួននៅធ្វើឱ្យវាឈឺចាប់ទៀត?»។', en: 'In sudden rain, he tapped his horses with a whip to urge them home quickly, then suffered deep regret for inflicting unnecessary discomfort on willing beasts.' },
          { boldKm: '៨. សេដ្ឋីប្រចាំនគរ', boldEn: '8. The Royal Merchant', km: 'ពេលច្រូតស្រូវ គាត់បេះកួរស្រូវ ២-៣ កួរមកចងកណ្តាប់ រួចភ័យសង្ស័យថា «ស្រូវនេះមិនទាន់បង់ពន្ធជូនព្រះរាជាផង ហេតុអ្វីខ្លួនហ៊ានបេះមុន?» (ខ្លាចខុសសីលលួចទ្រព្យ)។', en: 'Harvesting his fields, he plucked a few stalks of rice to tie a sheaf, then panicked fearing theft because the king’s tithe had not yet been assessed.' },
          { boldKm: '៩. អាមាត្យអ្នកវាស់ស្រូវ (ទោណមាបកៈ)', boldEn: '9. The Grain Measurer', km: 'ពេលវាស់ស្រូវពន្ធរដ្ឋ ភ្លៀងចាប់ផ្តើមស្រក់ គាត់ប្រញាប់បោសស្រូវគរទុក រួចសង្ស័យថា «តើស្រូវដែលបោសនោះ មានផ្នែកណាដែលមិនមែនជារបស់រដ្ឋ ធ្លាក់ចូលទៅដែរឬទេ?»។', en: 'Measuring royal grain taxes during sudden drizzle, he swept grain into piles hurriedly, then doubted whether any grains had been wrongly credited to either party.' },
          { boldKm: '១០. នាយឆ្មាំទ្វារនគរ', boldEn: '10. The City Gatekeeper', km: 'ដល់ម៉ោងបិទទ្វារ មានស្ត្រីក្រីក្រម្នាក់ចេញមកយឺត គាត់ចាប់ទាញដៃនាងឱ្យប្រញាប់ចេញ រួចសង្ស័យថា «តើការចាប់ដៃនោះ បណ្តាលមកពីចិត្តខឹង ឬចិត្តស្រឡាញ់កាមគុណ?»។', en: 'Closing the city gate at nightfall, a poor woman lingered; he gripped her arm to usher her out, then tormented himself wondering whether anger or lust motivated his touch.' },
          { boldKm: '១១. ស្រីពេស្យា (វណ្ណទាសី)', boldEn: '11. The Courtesan', km: 'ព្រះឥន្ទ្រក្លែងខ្លួនយកមាស ១ ពាន់កក់នាងឱ្យរង់ចាំ ៣ ឆ្នាំ។ នាងអត់បាយយ៉ាងណា ក៏មិនទទួលប្រុសផ្សេង។ ផុត ៣ ឆ្នាំ មានប្រុសថ្មីហុចលុយ នាងបម្រុងទទួល ក៏សង្ស័យថា «តើផុត ៣ ឆ្នាំពេញលេញតាមម៉ោងឬនៅ?» ហើយដកដៃមកវិញភ្លាម។', en: 'Sakka tested her with 1,000 gold coins to remain faithful for 3 years; despite acute poverty, she turned away all suitors. At 3 years, another man offered coins; she stretched her hand, then recoiled doubting if the exact hour of the contract had elapsed.' }
        ]
      },
      {
        titleKm: '៣. អានុភាពនៃកុរុធម្មលើធម្មជាតិ និងការបង្អុរភ្លៀងនៅកលិង្គរដ្ឋ',
        titleEn: '3. The Inscription on Golden Plates & Torrential Rain in Kaliṅga',
        contentKm: 'តាមពិតទៅ សីលរបស់មនុស្សទាំង ១១ រូបខាងលើ មិនមានការដាច់រលាត់សូម្បីតែបន្តិចឡើយ ព្រោះចេតនាប្រព្រឹត្តអាក្រក់មិនមាននោះទេ ប៉ុន្តែមនសិការរបស់ពួកគេបរិសុទ្ធខ្លាំងពេក រហូតដល់មិនព្រមឱ្យមានស្រមោលនៃកិលេសសូម្បីតែមួយចំណុចក្នុងចិត្ត។\n\nពេលរាជទូតកលិង្គរដ្ឋបានកត់ត្រានូវចរិយាវត្ត និងការប្រុងប្រយ័ត្ននៃកុរុធម្មទាំងនេះលើបន្ទះមាស ហើយយកទៅថ្វាយព្រះបាទកលិង្គរាជ ៖\n១. ព្រះរាជា មន្ត្រី និងប្រជានុរាស្ត្រនៃកលិង្គរដ្ឋ បានព្រមព្រៀងគ្នាសមាទាន និងរក្សាសីល ៥ ឱ្យបានម៉ត់ចត់តាមគំរូនៃដែនដីកុរុ។\n២. ដោយសារអានុភាពនៃ «សច្ចវាចា និងកុសលសីលធម៌រួម (សាធារណកម្ម)» របស់មនុស្សទូទាំងនគរ ធាតុអាកាសដែលធ្លាប់តែក្តៅហួតហែង ក៏ស្រាប់តែកើតមានពពកខ្មៅដេរដាស ហើយ ភ្លៀងមេឃដ៏ធំបានបង្អុរចុះមកពេញនគរកលិង្គរដ្ឋ ធ្វើឱ្យដីធ្លីមានជីជាតិ ដំណាំដុះលូតលាស់ និងរំលត់គ្រោះទុរភិក្សទាំងស្រុង!',
        contentEn: 'In truth, not a single one of the 11 individuals had broken their precepts in the slightest, as intentional evil (cetanā) was entirely absent; their conscience was simply so crystalline that even the shadow of defilement disturbed them.\n\nWhen the Kaliṅga envoys inscribed these 5 precepts and mental attitudes onto sheets of pure gold and delivered them to King Kaliṅga:\n(1) The King, nobility, and populace unanimously undertook and scrupulously observed the Kurudhamma 5 Precepts.\n(2) Through the immense power of collective truthfulness and moral virtue (Sādhāraṇa-kusala-kamma), the scorched skies gathered dense dark clouds, and a massive downpour (kālavassa) inundated Kaliṅga, reviving agriculture, refilling reservoirs, and dissolving the famine completely.'
      },
      {
        titleKm: '៤. មេរៀនទស្សនវិជ្ជា ៖ មនសិការបរិសុទ្ធ & ថាមពលនៃសច្ចវាចា',
        titleEn: '4. Philosophical Lessons: Conscience & The Potency of Collective Truth',
        contentKm: 'រឿងរ៉ាវនេះបញ្ជាក់នូវសច្ចធម៌ ៣ យ៉ាង ៖\n១. សីលមិនមែនជាទម្រង់ខាងក្រៅ ៖ សីលពិតប្រាកដគឺ «ចេតនា និងមនសិការខាងក្នុង»។ សូម្បីតែគំនិតលំអៀង លោភលន់ ឬធ្វេសប្រហែស ក៏ត្រូវដឹងខ្លួនភ្លាម។\n២. វត្ថុទិព្វមិនស្មើនឹងសីល ៖ ដំរីសទិព្វមិនអាចបង្អុរភ្លៀងបានទេ ប្រសិនបើមនុស្សក្នុងនគរគ្មានសីលធម៌។ កម្លាំងសីលធម៌រួមជាអ្នកកំណត់ជោគវាសនាធម្មជាតិ។\n៣. សច្ចកិរិយា ៖ ការពោលពាក្យពិត និងការរក្សាសច្ចៈ មានថាមពលអស្ចារ្យដែលអាចរំញ័រដល់ធាតុទាំង ៤ ក្នុងធម្មជាតិ!',
        contentEn: 'This Jātaka demonstrates 3 profound truths: (1) Precepts are not mere ritualistic outer motions; true sīla is internal mental purity (cetanā). (2) External amulets or sacred elephants cannot override collective negative karma; authentic moral integrity is the only real foundation of environmental harmony. (3) The Declaration of Truth (Saccakiriya) rooted in unblemished morality wields an undeniable physical influence upon the natural elements.'
      }
    ]
  },

  // GEM 12: Abhidhamma & Weather Physics: How Sīla 5 Governs Utu-niyāma & Rain Formation
  {
    id: 'sila-weather-physics',
    num: 12,
    open: false,
    category: 'science',
    categoryKm: '🔬 វិទ្យាសាស្ត្រ & ធាតុអាកាស',
    categoryEn: '🔬 Science & Weather Physics',
    ref: 'គម្ពីរអភិធម្ម, វិសុទ្ធិមគ្គ & អធម្មិកសូត្រ (AN 4.70 / ព្រះត្រៃបិដកភាគ ៤២)',
    paliQuote: 'ធម្មេ ឋិតា ហោន្តិ... សម្មា ទេវោ វស្សតិ (កាលណាមនុស្សស្ថិតនៅក្នុងធម៌ ភ្លៀងរមែងបង្អុរចុះមកត្រូវតាមកាលវេលា)',
    questionKm: 'យោងតាមគម្ពីរអភិធម្ម និងធម្មនិយាម តើកម្លាំងសីលធម៌របស់មនុស្ស (សីល ៥) មានដំណើរការយ៉ាងដូចម្ដេច ក្នុងការជះឥទ្ធិពលលើធាតុទឹក និងធាតុខ្យល់ បង្កើតជាពពក និងភ្លៀងធ្លាក់តាមរដូវកាល?',
    questionEn: 'According to the Abhidhamma and Dhamma-niyāma, how does human moral power (5 Precepts) physically influence wind and water elements to generate clouds and timely rain (Kālavassa)?',
    shortKm: 'អភិធម្ម & យន្តការសីលបង្កបង្កើតភ្លៀង',
    shortEn: 'Abhidhamma: How Sīla Generates Rain',
    essenceKm: 'ទំនាក់ទំនងរវាងសីល ៥ និងធាតុអាកាស ដំណើរការតាមរយៈចំណងរវាង «កម្មនិយាម (ច្បាប់កម្មផល)» និង «ឧតុនិយាម (ច្បាប់រូបវិទ្យា/សីតុណ្ហភាព)» ដោយមាន «សាធារណកម្ម (កម្មរួមរបស់សត្វលោក)» ជាអ្នកកំណត់តុល្យភាពនៃមហាភូតរូបទាំង ៤។ ពិភពលោក និងបរិស្ថានខាងក្រៅ (ពាហិររូប / ឧតុជរូប) គឺជា «ឧបភោគសម្បត្តិ» ដែលធម្មជាតិរៀបចំឡើងឱ្យត្រូវនឹងផលវិបាកកម្មរបស់សត្វលោក។ កាលណាមនុស្សទូទាំងនគរមានសីល ៥ បរិសុទ្ធ៖ កម្ដៅនៃទោសៈរលត់ -> តេជោធាតុមានតុល្យភាព -> អាបោធាតុរំហួតនិងចងក្រងភាគល្អិតជាពពកក្រាស់ -> វាយោធាតុរុញក្បួនពពកក្នុងល្បឿនស្មើល្អគ្មានព្យុះ -> កើតជា «កាលវស្ស» (ភ្លៀងធ្លាក់ត្រូវតាមរដូវកាល ទឹកថ្លាត្រជាក់ គ្មានជាតិពុល) ដូចដែលព្រះពុទ្ធបានបញ្ជាក់ក្នុងអធម្មិកសូត្រ (AN 4.70)!',
    essenceEn: 'The connection between the 5 Precepts and weather operates through the bridge connecting Kamma-niyāma (moral causality) and Utu-niyāma (physical thermodynamics), mediated by Collective Karma (Sādhāraṇa-kamma) configuring the 4 Great Elements. External matter (Bāhira-rūpa / Utuja-rūpa) is the ecological habitat (Upabhoga-sampatti) manifesting beings’ collective karmic fruits. When society observes pure ethics: hatred subsides -> Tejo thermal energy stabilizes -> Āpo cohesion binds vapor into dense clouds -> Vāyo propulsion steers rainclouds steadily without hurricanes -> resulting in Kālavassa (timely pure rain nourishing all life), precisely as proclaimed in the Adhammika Sutta (AN 4.70).',
    practicalKm: 'បរិស្ថាន និងធាតុអាកាសជុំវិញខ្លួនយើង មិនមែននៅដាច់ដោយឡែកពីចិត្តឡើយ។ ភាពស្ងប់ក្នុងចិត្ត ការរក្សាសីល និងមេត្តា បង្កើត «ចិត្តជរូប» ដ៏ត្រជាក់សាយភាយក្នុងលំហ ដែលជួយបន្សាបកម្ដៅ និងការបំពុលបរិស្ថាន។ ចង់កែប្រែធម្មជាតិ និងអាកាសធាតុ ត្រូវចាប់ផ្តើមកែប្រែចិត្តគំនិត និងរបៀបរស់នៅប្រកបដោយសីលធម៌ជាមុនសិន!',
    practicalEn: 'The planetary climate and atmosphere are not disconnected from the human mind. Inner peace, ethics, and mettā project cooling cittaja-rūpa radiation into physical space, neutralizing environmental psychic heat pollution. To heal nature and the climate, humanity must first heal its own moral conscience.',
    links: [
      { to: '/questions', km: 'សំណួរ–ចម្លើយ ៣២', en: 'Q&A 32' },
      { to: '/my-gems#kurudhamma-jataka', km: 'កុរុធម្មជាតក & សីល ១១ រូប', en: 'Kurudhamma Jātaka' },
      { to: '/abhidhamma#rupa-kalapa', km: 'រូបកលាប & អភិធម្ម', en: 'Rūpa-kalāpa' },
      { to: '/kamma', km: 'ច្បាប់កម្មផល & សាធារណកម្ម', en: 'Kamma & Collective Destiny' }
    ],
    sections: [
      {
        titleKm: '១. យន្តការអភិធម្ម ៖ របៀបដែល «កម្ម» បញ្ជា «រូបធាតុខាងក្រៅ»',
        titleEn: '1. The Abhidhamma Mechanism: How Karma Commands External Matter',
        contentKm: 'នៅក្នុងគម្ពីរអភិធម្ម រូបធាតុទាំងអស់ត្រូវបានបែងចែកជាពីរផ្នែក ៖\n— អជ្ឈត្តិករូប (រូបខាងក្នុង) ៖ រូបកាយ សរីរាង្គ និងកោសិការបស់ភាវៈរស់ ដែលកើតឡើងពីបច្ច័យ ៤ គឺ កម្ម ចិត្ត ឧតុ និងអាហារ។\n— ពាហិររូប (រូបខាងក្រៅ) ៖ ភ្នំ ដើមឈើ ទន្លេ ពពក ខ្យល់ និងទឹកភ្លៀង ដែលកើតឡើងពីបច្ច័យតែមួយគត់គឺ «ឧតុ» (Utuja-rūpa — សីតុណ្ហភាព និងថាមពលកម្ដៅនៃតេជោធាតុ)។\n\nចំណុចគន្លឹះស្ថិតនៅត្រង់ថា «តេជោធាតុនៃឧតុខាងក្រៅ មិនដំណើរការដោយចៃដន្យឡើយ» ប៉ុន្តែវាស្ថិតនៅក្រោមឥទ្ធិពលចម្បងនៃ «សាធារណកម្ម» (Collective Karma)។ ពិភពលោក និងបរិស្ថានខាងក្រៅ គឺជា «ឧបភោគសម្បត្តិ» ដែលធម្មជាតិរៀបចំឡើងឱ្យសមស្របទៅនឹងផលវិបាកកម្មរបស់សត្វលោកដែលរស់នៅក្នុងតំបន់នោះ ៖\n— កាលណាសត្វលោកមានអកុសលច្រើន បរិស្ថាននឹងប្រែជាកាចសាហាវ ក្តៅហួតហែង ដើម្បីផ្ដល់ផលវិបាកជាទុក្ខ។\n— កាលណាសត្វលោកមានសីលធម៌បរិសុទ្ធ បរិស្ថាននឹងកែសម្រួលធាតុអាកាសឱ្យមានតុល្យភាពល្អឥតខ្ចោះ ដើម្បីផ្ដល់ផលវិបាកជាសេចក្ដីសុខ។',
        contentEn: 'In Abhidhamma, matter is classified into two domains:\n— Ajjhattika-rūpa (Internal Matter): Organs, flesh, and cells of living beings, generated by 4 conditions: Kamma, Citta, Utu, and Āhāra.\n— Bāhira-rūpa (External Matter): Mountains, rivers, oceans, clouds, winds, and rain, produced solely by Utu (Utuja-rūpa — temperature/thermal energy of Tejo-dhātu).\n\nCrucially, external thermal energy does not operate in a vacuum: it is directly governed by Collective Karma (Sādhāraṇa-kamma). The external environment serves as the "experiential habitat" (Upabhoga-sampatti) harmonized with the collective moral fruits of its inhabitants: rampant vice turns nature abrasive and drought-ridden, while collective virtue adjusts cosmic physics toward flourishing harmony.'
      },
      {
        titleKm: '២. ដំណើរការនៃមហាភូតរូប ៤ ក្នុងការបង្កបង្កើតពពក និងទឹកភ្លៀង',
        titleEn: '2. The 4 Great Elements in Cloud Physics & Rain Formation',
        contentKm: 'នៅពេលមនុស្សទូទាំងសង្គមប្រកាន់ខ្ជាប់នូវសីល ៥ ចិត្តគំនិតរបស់ពួកគេពោរពេញដោយ អលោភៈ (មិនលោភលន់), អទោសៈ (មេត្តាចិត្ត), និង អមោហៈ (បញ្ញា)។ ថាមពលនៃចិត្តបរិសុទ្ធនេះ ជះឥទ្ធិពលផ្ទាល់ដល់តុល្យភាពនៃធាតុទាំង ៤ ៖\n\n[កុសលចិត្ត / សីល ៥] -> [ស្ងប់រម្ងាប់កម្ដៅកិលេស] -> [តេជោធាតុមានតុល្យភាព (ឧតុនិយាម)]\n                                                  |\n               [វាយោធាតុបក់ត្រូវទិស + អាបោធាតុប្រមូលផ្តុំកក]\n                                                  |\n                        [កើតពពក និងភ្លៀងតាមរដូវកាល (កាលវស្ស)]',
        contentEn: 'When society adheres to the 5 Precepts, minds abound with non-greed (alobha), loving-kindness (adosa), and wisdom (amoha). This moral radiation systematically recalibrates the 4 Great Elements:\n\n[Moral Mind / Sīla 5] -> [Extinguishes psychic fire] -> [Tejo-dhātu thermodynamic balance]\n                                                  |\n               [Vāyo smooth propulsion + Āpo cohesive cloud clustering]\n                                                  |\n                        [Dense rainclouds & seasonal downpour (Kālavassa)]',
        points: [
          { boldKm: 'តេជោធាតុ (ធាតុភ្លើង / កម្ដៅ)', boldEn: 'Tejo-dhātu (Thermal Energy)', km: 'ទោសៈ (កំហឹង គំនុំ ការកាប់សម្លាប់ រំលោភសីលទី១) មានលក្ខណៈក្តៅក្រហាយ ដូចភ្លើង។ ពេលមនុស្សឈប់សម្លាប់ និងមានមេត្តា កម្ដៅនៃអកុសលរលត់ ធ្វើឱ្យតេជោធាតុក្នុងបរិយាកាសស្ថិតក្នុងកម្រិតលំនឹង មិនរាំងស្ងួត និងមិនកកស្ទះ។', en: 'Hatred and slaughter emit scorching psychic heat. Renouncing killing and radiating loving-kindness cools atmospheric Tejo into thermal equilibrium, preventing blistering droughts.' },
          { boldKm: 'អាបោធាតុ (ធាតុទឹក / ការប្រមូលផ្តុំ)', boldEn: 'Āpo-dhātu (Cohesion / Water)', km: 'អាបោធាតុមានតួនាទី «ពន្ធនលក្ខណៈ» (ស្រូបទាញ និងភ្ជាប់ភាគល្អិតធាតុឱ្យនៅជុំគ្នា)។ កាលណាតេជោធាតុមានកម្តៅល្មម អាបោធាតុក្នុងសមុទ្រ និងដី នឹងរំហួតឡើងដោយរលូន រួចស្រូបទាញភាគល្អិតចំហាយទឹកឱ្យកកផ្តុំគ្នា បង្កើតជាដុំពពក (Megha) ដ៏ក្រាស់ឃ្មឹក។', en: 'Governed by cohesion (bandhana-lakkhaṇa), balanced heat allows smooth ocean evaporation, binding water particles into dense, luminous cloud banks (megha).' },
          { boldKm: 'វាយោធាតុ (ធាតុខ្យល់ / ចលនា)', boldEn: 'Vāyo-dhātu (Kinetic Motion / Wind)', km: 'វាយោធាតុមានតួនាទី «សមុទីរណលក្ខណៈ» (ការរុញច្រាន និងចលនា)។ ក្រោមឥទ្ធិពលនៃកុសលកម្ម ខ្យល់បក់ក្នុងល្បឿនថេរ និងមានរបៀបរៀបរយ មិនបង្កជាព្យុះកំបុតត្បូងបំផ្លាញពពកឡើយ ហើយរុញក្បួនពពកពីសមុទ្រមកកាន់ដីគោកយ៉ាងទៀងទាត់។', en: 'Governed by propulsion (samudīraṇa-lakkhaṇa), wholesome kamma guides winds at steady, measured velocities without destructive hurricanes, escorting rainclouds inland.' },
          { boldKm: 'ការធ្លាក់ចុះនៃទឹកភ្លៀង (Kālavassa)', boldEn: 'Kālavassa (Timely Seasonal Rain)', km: 'នៅពេលពពកមកដល់ដីគោក វាយោធាតុបន្ថយល្បឿន អាបោធាតុផ្តុំទម្ងន់ធ្ងន់ជាងមុន រួចធ្លាក់ចុះមកក្រោមដោយទំនាញនៃបឋវីធាតុ បង្កើតជា «កាលវស្ស» (ភ្លៀងធ្លាក់ត្រូវតាមរដូវកាល) មានដំណក់ទឹកថ្លាត្រជាក់ គ្មានជាតិអាស៊ីត។', en: 'Upon reaching agricultural lands, wind eases, cohesive water droplets coalesce, and gravity brings forth Kālavassa: pristine, nutrient-rich rainwater nourishing the earth.' }
        ]
      },
      {
        titleKm: '៣. ការបញ្ជាក់ក្នុង «អធម្មិកសូត្រ» (Aṅguttara Nikāya 4.70)',
        titleEn: '3. Canonical Evidence: The Adhammika Sutta (AN 4.70)',
        contentKm: 'នៅក្នុង អធម្មិកសូត្រ (ចតុក្កនិបាត ព្រះត្រៃបិដក) ព្រះសម្មាសម្ពុទ្ធបានបង្ហាញពីខ្សែសង្វាក់តភ្ជាប់រវាងចិត្តមនុស្ស និងធាតុអាកាសយ៉ាងលម្អិត ៖\n\n— ពេលមនុស្សប្រព្រឹត្តអសីលធម៌ (អធម្មិកា ហោន្តិ) ៖\n១. ព្រះចន្ទ និងព្រះអាទិត្យ ធ្វើដំណើរខុសគន្លង (វិសមំ វត្តន្តិ)។\n២. ផ្កាយ និងនក្ខត្តឫក្ស ដំណើរការមិនប្រក្រតី។\n៣. ធាតុខ្យល់បក់បោកខុសប្រក្រតី បង្កជាខ្យល់ព្យុះធំៗ និងធូលីហុយពេញមេឃ។\n៤. ទេវតា និងធម្មជាតិកើតសេចក្ដីក្តៅក្រហាយ ធ្វើឱ្យ ភ្លៀងមិនធ្លាក់ត្រូវតាមរដូវកាល (ន សម្មា ទេវោ វស្សតិ) បង្កជាគ្រោះរាំងស្ងួត និងទុរភិក្ស។\n\n— ពេលមនុស្សមានសីលធម៌បរិសុទ្ធ (ធម្មិកា ហោន្តិ) ៖\n១. ព្រះចន្ទ ព្រះអាទិត្យ និងផ្កាយ ធ្វើដំណើរស្របតាមគន្លងទៀងទាត់។\n២. ធាតុខ្យល់បក់ស្រាលស្រទន់ និងស្មើល្អ (សមា វាយន្តិ)។\n៣. ពពកប្រមូលផ្តុំត្រូវតាមពេលវេលា ហើយ ភ្លៀងធ្លាក់ត្រូវតាមរដូវកាល (សម្មា ទេវោ វស្សតិ) ធ្វើឱ្យដំណាំកសិកម្មដុះលូតលាស់ ដីធ្លីមានជីជាតិ និងមនុស្សគ្មានរោគាពាធ។',
        contentEn: 'In the Adhammika Sutta (AN 4.70), the Buddha outlined the cosmic cascade linking collective ethics with the physical universe:\n— When rulers and people are corrupt (adhammikā):\n1. The sun and moon course erratically (visamaṃ vattanti).\n2. Constellations and stars drift out of seasonal alignment.\n3. Winds blow turbulently, kicking up harsh storms and cosmic dust.\n4. Devas and nature spirits are agitated; rain does not fall in due season (na sammā devo vassati), triggering droughts and mass famine.\n\n— When rulers and people cultivate righteousness (dhammikā):\n1. Sun, moon, and stars course in harmonious rhythm.\n2. Winds blow gently and evenly (samā vāyanti).\n3. Clouds gather on schedule and rain pours seasonably (sammā devo vassati), causing bountiful crops and eradicating disease.'
      },
      {
        titleKm: '៤. ថាមពលនៃ «ចិត្តជរូប» ជះឥទ្ធិពលលើលំហជុំវិញ (វិសុទ្ធិមគ្គ)',
        titleEn: '4. Mind-Born Radiance: Cittaja-Rūpa Decontaminating Environmental Space',
        contentKm: 'យោងតាមគម្ពីរវិសុទ្ធិមគ្គ រាល់ពេលដែលបុគ្គលម្នាក់ៗរក្សាសីល និងចម្រើនមេត្តាភាវនា ចិត្តនោះបង្កើតនូវ «ចិត្តជរូប» (រូបដែលកើតអំពីចិត្ត) ដែលមានរលកធាតុត្រជាក់ និងសុខដុមរមនា។\n\nនៅពេលមនុស្សរាប់លាននាក់នៅក្នុងប្រទេសមួយ (ដូចជានៅដែនដីកុរុ ឬកលិង្គរដ្ឋ) រក្សាសីល ៥ ព្រមៗគ្នា រលកថាមពលនៃចិត្តស្ងប់នេះ បានសាយភាយគ្របដណ្តប់បរិយាកាសផែនដីទាំងមូល។ កម្លាំងនេះបានទៅបន្សាប «វិទ្យុសកម្មនៃកម្ដៅកិលេស» ក្នុងលំហអាកាស ជួយសម្រួលឱ្យឧតុនិយាមនៃធម្មជាតិ ដំណើរការទៅតាមគន្លងតុល្យភាពដើមរបស់វាដោយស្វ័យប្រវត្តិ។',
        contentEn: 'According to the Visuddhimagga, whenever an individual maintains pure virtue and cultivates mettā, consciousness generates Cittaja-rūpa (mind-born subtle matter) radiating cooling, harmonious subatomic vibrational waves.\n\nWhen millions of citizens collectively observe the 5 Precepts simultaneously (as in Kuru and Kaliṅga), these soothing vibrational waves saturate the regional atmosphere. This psychic de-escalation neutralizes the thermodynamic friction of greed and hatred in the skies, allowing planetary Utu-niyāma to restore its natural equilibrium effortlessly.'
      }
    ]
  },

  // GEM 13: Full 5-Stage Process of Death (Maraṇāsanna) & Instant Rebirth (Paṭisandhi-citta)
  {
    id: 'death-rebirth-process',
    num: 13,
    open: false,
    category: 'death',
    categoryKm: '💀 មរណាសន្នសម័យ & បដិសន្ធិ',
    categoryEn: '💀 Death Process & Rebirth',
    ref: 'គម្ពីរអភិធម្មត្ថសង្គហៈ (វិថីសង្គហៈ) & វិសុទ្ធិមគ្គ (មរណានុស្សតិនិទ្ទេស)',
    paliQuote: 'ចុតិ ចេតនា បដិសន្ធិ... អនន្តរា បដិសន្ធិ ភវតិ (ខណៈចុតិចិត្តរលត់ផុតទៅភ្លាម បដិសន្ធិចិត្តក៏កើតឡើងតគ្នាភ្លាម ដោយគ្មានចន្លោះពេលឡើយ)',
    questionKm: 'យោងតាមគម្ពីរអភិធម្ម និងវិសុទ្ធិមគ្គ តើដំណើរការនៃពេលដែលមនុស្សម្នាក់ស្លាប់ (មរណាសន្នសម័យ) និងការតភ្ជាប់ជាតិថ្មី មានដំណើរការយ៉ាងលម្អិតដូចម្ដេចខ្លះ?',
    questionEn: 'According to the Abhidhamma and Visuddhimagga, what is the exact physical and psychological step-by-step process during death (Maraṇāsanna) and instant rebirth?',
    shortKm: 'ដំណើរការពេលស្លាប់ ៥ ដំណាក់កាល & បដិសន្ធិ',
    shortEn: '5 Stages of Death & Instant Rebirth',
    essenceKm: 'ដំណើរការនៃពេលមនុស្សស្លាប់ (មរណាសន្នសម័យ) ក្នុងអភិធម្ម មិនមែនជាការរលត់បាត់ដោយចៃដន្យឡើយ តែឆ្លងកាត់ ៥ ដំណាក់កាលធំៗ ៖ (១) ធាតុទាំង ៤ រលំដួលជាលំដាប់ (ដី ទឹក ភ្លើង ខ្យល់) -> (២) វិញ្ញាណដកថយពីទ្វារទាំង ៥ មកប្រមូលផ្តុំនៅមនោទ្វារត្រង់បេះដូង -> (៣) និមិត្ត ៣ យ៉ាងបង្ហាញខ្លួនជាខ្សែភាពយន្តចុងក្រោយ (កម្ម, កម្មនិមិត្ត, គតនិមិត្ត) -> (៤) មរណាសន្នវិថីដំណើរការ ជវនចិត្ត ៥ ខណៈ កំណត់អារម្មណ៍ចុងក្រោយ រួចចុតិចិត្តកើតឡើងកាត់ផ្តាច់រូបកាយចាស់ -> (៥) គ្មានអន្តរភព (គ្មានការរង់ចាំ ៧ ឬ ៤៩ ថ្ងៃក្នុងថេរវាទ) បដិសន្ធិចិត្តកើតឡើងក្នុងភពថ្មីភ្លាមៗ មួយរំពេចបន្ទាប់ពីចុតិចិត្តរលត់ ប្រៀបដូចត្រាដែកដក់លើដីឥដ្ឋ ឬភ្លើងទៀនអុជបន្តគ្នា!',
    essenceEn: 'The death process (Maraṇāsanna-samaya) according to Abhidhamma unfolds in 5 precise sequential stages: (1) Physical dissolution of the 4 elements (Earth, Water, Fire, Wind); (2) Sensory shutdown across the 5 outer doors, converging entirely into the Mind Door at the heart base; (3) The emergence of 3 Death Visions (Kamma, Kamma-nimitta, Gati-nimitta); (4) Maraṇāsanna-vīthi with 5 Javana mind-moments determining the dying mental state, culminating in Cuti-citta severing physical life; (5) Instantaneous rebirth (Paṭisandhi-citta) in the next destination with zero time gap — no 7-day or 49-day intermediate limbo (no Bardo in Theravāda), analogous to a seal impressed on clay or flame lighting flame.',
    practicalKm: 'ការរៀនដឹងពីដំណើរការពេលស្លាប់ ជួយឱ្យយើងមិនភ័យខ្លាច មិនភ័ន្តច្រឡំ និងដឹងពីរបៀបត្រៀមខ្លួន ៖ (១) ហ្វឹកហាត់ចម្រើនសតិក្នុងបច្ចុប្បន្ន ព្រោះជវនចិត្តពេលស្លាប់មានត្រឹមតែ ៥ ខណៈ ចិត្តទន់ខ្សោយណាស់ ត្រូវពឹងលើទម្លាប់សតិចាស់ (២) ធ្វើបុណ្យ និងរក្សាសីលជាប្រចាំ ដើម្បីឱ្យ «កម្មនិមិត្តល្អ» លេចឡើងពេលជិតស្លាប់ (៣) សម្រាប់សាច់ញាតិ ចូរបង្កើតបរិយាកាសស្ងប់ស្ងាត់ រំលឹកបុណ្យកុសល បើកធម៌ ឬពោលពាក្យសច្ចៈផ្អែមល្ហែម កុំយំសោកក្បែរអ្នកជំងឺ ដែលនាំឱ្យគេកើតទោសៈ ឬជាប់ជំពាក់អាឡោះអាល័យ!',
    practicalEn: 'Understanding the death process removes terror and confusion, providing actionable preparation: (1) Cultivate continuous mindfulness now, as the 5 weak Javana moments at death cannot improvise and must rely on lifelong habits; (2) Live virtuously so bright Kamma-nimittas arise naturally; (3) Loved ones should maintain calm, chant Dhamma softly, and recount good deeds, avoiding crying which incites grief, clinging, or anger in the dying mind.',
    links: [
      { to: '/questions', km: 'សំណួរ–ចម្លើយ ៣៣', en: 'Q&A 33' },
      { to: '/death-and-rebirth', km: 'មរណាសន្នវិថី & បដិសន្ធិពិស្តារ', en: 'Death & Rebirth Deep Dive' },
      { to: '/realms', km: 'ភពទាំង ៣១ ជាន់', en: '31 Planes of Existence' },
      { to: '/citta-vithi', km: 'ដំណើរវិថីចិត្ត ១៧ ខណៈ', en: 'Citta Vīthi Matrix' }
    ],
    sections: [
      {
        titleKm: '១. ការរលំដួលនៃរូបធាតុទាំង ៤ ក្នុងរាងកាយ (Physical Dissolution)',
        titleEn: '1. Dissolution of the 4 Physical Elements (Mahābhūta-rūpa)',
        contentKm: 'នៅពេលកម្លាំងកម្មចាស់ជិតអស់ ហើយជីវិតិន្ទ្រិយ (កម្លាំងទ្រទ្រង់ជីវិត) ចាប់ផ្តើមចុះខ្សោយ មហាភូតរូបទាំង ៤ ចាប់ផ្តើមរលាយលំនឹងជាបន្តបន្ទាប់ ៖',
        contentEn: 'As the past life-sustaining karmic force nears exhaustion and jīvitindriya (vital vitality) diminishes, the four physical elements systematically collapse:',
        points: [
          { boldKm: 'បឋវីធាតុចុះខ្សោយ (ធាតុដី)', boldEn: 'Earth Element (Pathavī) Fails', km: 'សាច់ ដុំសាច់ និងឆ្អឹងបាត់បង់ភាពរឹងមាំ។ មនុស្សមានអារម្មណ៍ថាខ្លួនធ្ងន់ដូចភ្នំសង្កត់ លើកដៃជើងមិនរួច មានអារម្មណ៍ដូចកំពុងលិចចុះទៅក្នុងដី ឬកប់ជ្រៅទៅក្នុងពូក។', en: 'Muscles and bones lose structural cohesion; the body feels overwhelmingly heavy as though crushed by a mountain, unable to lift limbs, feeling swallowed into the bed.' },
          { boldKm: 'អាបោធាតុចុះខ្សោយ (ធាតុទឹក)', boldEn: 'Water Element (Āpo) Fails', km: 'ការគ្រប់គ្រងសារធាតុរាវក្នុងខ្លួនចាប់ផ្តើមបាត់បង់។ មាត់ បំពង់ក ច្រមុះស្ងួតហួតហែង ស្រេកទឹកខ្លាំង ភ្នែកស្រអាប់ ខ្លះបែកញើសស្អិត ឬលេចទឹកនោមលាមកដោយមិនដឹងខ្លួន។', en: 'Fluid regulation fails; lips, mouth, throat, and nostrils become parched with acute thirst; eyes glaze over; cold clammy sweat breaks out; sphincters involuntarily relax.' },
          { boldKm: 'តេជោធាតុចុះខ្សោយ (ធាតុភ្លើង / កម្ដៅ)', boldEn: 'Fire Element (Tejo) Fails', km: 'កម្ដៅក្នុងរាងកាយចាប់ផ្តើមរលត់ថយក្រោយ។ រាងកាយត្រជាក់ចាប់ពីចុងជើង ចុងដៃ ឡើងមកលើជាលំដាប់ ដោយនៅសល់កម្ដៅចុងក្រោយត្រង់តំបន់បេះដូង (ហទយវត្ថុ)។', en: 'Thermal energy recedes inward; limbs turn icy cold progressing from toes and fingers upward, with the final vestige of warmth localized around the heart base (hadaya-vatthu).' },
          { boldKm: 'វាយោធាតុចុះខ្សោយ (ធាតុខ្យល់)', boldEn: 'Wind Element (Vāyo) Fails', km: 'ចលនាដង្ហើមចាប់ផ្តើមរអាក់រអួល។ ការដកដង្ហើមចូលកាន់តែខ្លី ដង្ហើមចេញកាន់តែវែង និងពិបាក ដង្ហើមមានសំឡេងក្អកៗ ឬដង្ហក់ខ្លាំង (ខ្យល់កាត់កាយ) រហូតដល់ដង្ហើមចេញចុងក្រោយផុតទៅ។', en: 'Respiratory motion destabilizes; inhalations become brief and shallow while exhalations become prolonged and labored (death rattle/agonal respiration) until the final breath ceases.' }
        ]
      },
      {
        titleKm: '២. វិញ្ញាណដកថយពីទ្វារទាំង ៥ មកកាន់មនោទ្វារ (Sensory Shutdown)',
        titleEn: '2. Sensory Shutdown & Convergence into the Mind Door (Mano-dvāra)',
        contentKm: 'នៅពេលរាងកាយចុះខ្សោយដល់កម្រិតធ្ងន់ធ្ងរ ៖\n១. ភ្នែក ត្រចៀក ច្រមុះ អណ្តាត និងស្បែកកាយ លែងទទួលយកអារម្មណ៍ខាងក្រៅបានទៀតហើយ (ភ្នែកមើលលែងច្បាស់ ឬងងឹតឈឹង ត្រចៀកឮសំឡេងស្រអាប់ៗពីចម្ងាយ)។\n២. ចិត្តទាំងមូលដកថយចេញពីពិភពខាងក្រៅ ហើយប្រមូលផ្តុំមកធ្វើការនៅកន្លែងតែមួយគត់ គឺ «មនោទ្វារ» (Mind Door) ត្រង់ហទយវត្ថុ (ក្នុងបេះដូង)។\n៣. ក្នុងដំណាក់កាលនេះ ទោះបីជាមនុស្សខាងក្រៅនិយាយ ឬយំយ៉ាងណា អ្នកជំងឺអាចនឹងមិនដឹងឮទៀតឡើយ ព្រោះចិត្តបានបិទទ្វារខាងក្រៅទាំងអស់ ហើយកំពុងដំណើរការពិភពខាងក្នុងយ៉ាងមមាញឹក។',
        contentEn: 'As physical vitality collapses:\n1. Visual, auditory, olfactory, gustatory, and tactile faculties progressively cease processing external sensory stimuli (eyes dim or go dark, voices sound distant and muffled).\n2. Consciousness detaches completely from external horizons, converging strictly into the "Mind Door" (Mano-dvāra) grounded at the heart physical base (hadaya-vatthu).\n3. External speech or sobbing from bystanders may no longer register consciously; the dying person is now fully immersed in the internal experiential drama of memory and karma.'
      },
      {
        titleKm: '៣. ការលេចឡើងនៃ «និមិត្ត ៣ យ៉ាង» នៅមនោទ្វារ (The 3 Death Visions)',
        titleEn: '3. The 3 Death Visions at the Mind Door (Maraṇāsanna-nimitta)',
        contentKm: 'មុនពេលខ្យល់ដង្ហើមដាច់ ក្នុងចិត្តរបស់មនុស្សម្នាក់ៗនឹងបង្ហាញនូវ «ខ្សែភាពយន្តជីវិតចុងក្រោយ» យ៉ាងច្បាស់ក្រឡែត ដោយមិនអាចកុហក ឬគេចវេះបានឡើយ។ និមិត្តណាមួយក្នុងចំណោម ៣ នេះ នឹងលេចឡើង ៖',
        contentEn: 'Before the final breath, the mind projects an unvarnished cinematic replay of life; one of three types of visions inexorably emerges at the Mind Door:',
        points: [
          { boldKm: '១. កម្ម (Kamma — សកម្មភាពអតីតកាល)', boldEn: '1. Kamma (Action Flashback)', km: 'ចិត្តនឹកឃើញទង្វើល្អ ឬអាក្រក់ដែលខ្លួនធ្លាប់បានធ្វើកន្លងមក ដូចជា រូបភាពពេលកំពុងធ្វើបុណ្យ ជួយអ្នកដទៃ ការបួស ឬរូបភាពពេលឈ្លោះប្រកែក កាប់សម្លាប់ លួចទ្រព្យ ឬធ្វើបាបអ្នកដទៃ។', en: 'Flashback of past deeds: mental replay of giving alms, protecting others, ordained life, or memories of violence, theft, cruelty, or betrayal.' },
          { boldKm: '២. កម្មនិមិត្ត (Kamma-nimitta — ឧបករណ៍/សញ្ញានៃទង្វើ)', boldEn: '2. Kamma-nimitta (Instruments of Action)', km: 'មើលឃើញរបស់របរដែលជាប់ពាក់ព័ន្ធនឹងទង្វើនោះ ដូចជា ឃើញផ្កាឈូក កែវភ្នែកព្រះពុទ្ធ ព្រះសង្ឃ សំពត់កាសាវពស្ត្រ (បើធ្វើបុណ្យ) ឬឃើញកាំបិត កាំភ្លើង ដបស្រា ទឹកភ្នែកសត្វដែលខ្លួនធ្លាប់សម្លាប់ (បើធ្វើបាប)។', en: 'Objects and symbols associated with past actions: lotus flowers, Buddha images, monks’ saffron robes, scriptures (if wholesome); or weapons, butcher knives, liquor bottles, butchered animals (if unwholesome).' },
          { boldKm: '៣. គតនិមិត្ត (Gati-nimitta — សញ្ញានៃទីកន្លែងដែលត្រូវទៅកើត)', boldEn: '3. Gati-nimitta (Signs of Next Destination)', km: 'មើលឃើញទិដ្ឋភាពនៃភពថ្មី ដូចជា ប្រាសាទកែវ សួនផ្កា ពន្លឺភ្លឺស្រស់ស្អាត ផ្ទៃមេឃ (ទៅឋានសួគ៌/មនុស្ស) ឬឃើញអណ្តាតភ្លើង ផ្សែងខ្មៅ ជ្រោះជ្រៅ ឆ្កែព្រៃ ឬមនុស្សមុខកាចៗដេញចាប់ (ធ្លាក់នរក/ប្រេត)។', en: 'Visions of the destination awaiting them: celestial mansions, glowing gardens, radiant light, peaceful landscapes (heaven/human realm); or blazing fires, black smoke, chasms, predatory beasts, or terrifying figures (hell/peta realms).' }
        ]
      },
      {
        titleKm: '៤. មរណាសន្នវិថី និងចុតិចិត្ត (The Final Consciousness)',
        titleEn: '4. The Maraṇāsanna Vīthi & Severing Cuti-citta',
        contentKm: 'នៅក្នុងគម្ពីរអភិធម្ម ចិត្តចុងក្រោយដំណើរការយ៉ាងលឿនបំផុតត្រឹមតែប៉ុន្មានរំពេចប៉ុណ្ណោះ ៖\n\n១. ការកម្រើកនៃភវង្គចិត្ត ៖ ភវង្គ (ចរន្តចិត្តក្រោមដឹង) ញ័ររំញើប រួចបើកមនោទ្វារទទួលយករូបនិមិត្តណាមួយខាងលើ។\n\n២. ជវនចិត្ត ៥ ខណៈ (Javana Moments) ៖\n— ធម្មតាក្នុងពេលរស់នៅ ជវនចិត្ត (ចិត្តដែលទទួលដឹងរសជាតិអារម្មណ៍ និងសាងកម្ម) មាន ៧ ខណៈ។\n— ប៉ុន្តែនៅពេលជិតស្លាប់ ដោយសារកម្លាំងបេះដូង និងកាយចុះខ្សោយខ្លាំង ជវនចិត្តដំណើរការបានត្រឹមតែ ៥ ខណៈប៉ុណ្ណោះ។\n— ជវនចិត្តទាំង ៥ នេះហើយ ជាអ្នកកំណត់ អារម្មណ៍ចុងក្រោយ (ស្ងប់ស្ងាត់ ជ្រះថ្លា ភ័យខ្លាច ឬក្តៅក្រហាយ)។\n\n៣. ចុតិចិត្ត (Cuti-citta — ចិត្តចុងក្រោយបង្អស់) ៖\n— ពេលជវនចិត្តរលត់ផុតទៅ ចុតិចិត្តកើតឡើងមួយខណៈ ដើម្បីបំពេញកាតព្វកិច្ច «កាត់ផ្តាច់» ការតភ្ជាប់រវាងចិត្ត និងរូបកាយចាស់នេះជាផ្លូវការ។\n— ពេលចុតិចិត្តរលត់ទៅ រាងកាយក៏ក្លាយទៅជាសាកសព (ធាតុដីគ្មានវិញ្ញាណ)។',
        contentEn: 'In Abhidhamma, the final mental trajectory executes in fleeting micro-moments:\n\n1. Bhavanga Oscillation: The subconscious life-continuum vibrates and subsides, opening the Mind Door to receive the death vision.\n\n2. 5 Javana Moments (Active Karma Processing):\n— In ordinary waking life, the javana cycle comprises 7 moments.\n— Near death, weakened by cardiovascular and biological collapse, the javanas run only 5 moments.\n— These 5 javanas experience the final emotional charge (peace, faith, joy, terror, or agitation) and encode the karmic momentum.\n\n3. Cuti-citta (The Final Cut-Off Consciousness):\n— Immediately succeeding the javana/tadārammaṇa sequence, Cuti-citta arises for a single mind-moment to fulfill the definitive duty of severing the mind-body link of the present life.\n— The moment Cuti-citta dissolves, the body is officially a corpse — lifeless matter devoid of consciousness.'
      },
      {
        titleKm: '៥. ការតភ្ជាប់ជាតិថ្មីភ្លាមៗ (Instant Rebirth / Paṭisandhi-citta)',
        titleEn: '5. Instant Rebirth: No 7 or 49-Day Limbo (Theravāda Reality)',
        contentKm: 'យោងតាមគម្ពីរអភិធម្មថេរវាទ មិនមានព្រលឹងវិញ្ញាណហោះហើរតាក់តេង ឬនៅរង់ចាំ ៧ ថ្ងៃ ឬ ៤៩ ថ្ងៃ (គ្មានអន្តរភព / Bardo) ឡើយ ៖\n\n— ល្បឿននៃការតភ្ជាប់ ៖ មួយខណៈបន្ទាប់ពី ចុតិចិត្ត ក្នុងជាតិនេះរលត់ទៅភ្លាម បដិសន្ធិចិត្ត (Paṭisandhi-citta) នៅក្នុងភពថ្មីនឹងកើតឡើង តកន្ទុយគ្នាភ្លាមៗ ដោយគ្មានចន្លោះពេលសូម្បីតែមួយវិនាទី (អនន្តរបច្ច័យ)។\n\n— ឧបមាប្រៀបធៀប ២ យ៉ាង ៖\n១. ប្រៀបដូចជាត្រាដែលដក់លើដីឥដ្ឋ ៖ ពេលត្រាដែកងើបឡើង ដានស្នាមត្រាក៏កើតលើដីឥដ្ឋស្របគ្នា (មិនមែនលោហៈត្រាហោះទៅនៅនឹងដីឥដ្ឋទេ ប៉ុន្តែដានត្រាកើតពីត្រា)។\n២. ប្រៀបដូចជាពន្លឺភ្លើងនៃទៀនមួយដើមដែលយកទៅអុជបន្តទៀនមួយទៀត ៖ ពន្លឺពីទៀនទីមួយមិនបានហោះទៅទេ ប៉ុន្តែវាជាបច្ច័យធ្វើឱ្យភ្លើងទៀនទីពីរកើតឡើងភ្លាមៗ។\n\n— ប្រសិនបើផលនៃកម្មចុងក្រោយជាកុសល បដិសន្ធិចិត្តនឹងទៅចាប់កំណើតក្នុងផ្ទៃម្តាយជាមនុស្ស ឬផុសឡើងជាទេវតាភ្លាមៗ (ឧបបាតិកកំណើត)។ ប្រសិនបើជាអកុសល វានឹងទៅចាប់កំណើតក្នុងភពសត្វតិរច្ឆាន ប្រេត ឬនរកភ្លាមៗក្នុងពេលនោះឯង!',
        contentEn: 'According to Theravāda Abhidhamma, there is no drifting wandering soul awaiting rebirth for 7 or 49 days (no Antarābhava or Bardo):\n\n— Immediate Contiguity: In the exact micro-moment following the dissolution of Cuti-citta, Rebirth-Linking Consciousness (Paṭisandhi-citta) ignites in the new realm via Anantara-paccaya (Proximity Condition) with zero time interval.\n\n— Two Classical Analogies:\n1. The seal impressed on clay: As the die lifts, the impression appears simultaneously; no physical metal migrates, yet the mark is causally produced by the die.\n2. One candle lighting another: The flame from the first candle does not fly across space, yet it is the direct causal condition igniting the new flame.\n\n— If the concluding karmic momentum is wholesome, rebirth immediately manifests in a human womb or apparitionally as a Deva; if unwholesome, it instantly awakens in animal, ghost (peta), or hell realms.'
      }
    ]
  },

  // GEM 14: Sudden Death (Accidents/Cardiac Arrest), Maraṇāsanna-vīthi & Habitual Karma (SN 55.21)
  {
    id: 'sudden-death-kamma',
    num: 14,
    open: false,
    category: 'death',
    categoryKm: '💀 មរណាសន្នសម័យ & បដិសន្ធិ',
    categoryEn: '💀 Sudden Death & Habitual Kamma',
    ref: 'គម្ពីរអភិធម្ម (វិថីសង្គហៈ) & សំយុត្តនិកាយ មហានាមសូត្រ (SN 55.21 / ព្រះត្រៃបិដកភាគ ៣៧)',
    paliQuote: 'យថា រុក្ខោ បាចីននិន្នោ បាចីនបោណោ បាចីនបព្ភារោ... (ប្រៀបដូចជាដើមឈើដែលទេរទៅទិសខាងកើត ពេលគេកាប់ផ្តាច់គល់ រមែងដួលទៅទិសខាងកើតដូច្នោះដែរ)',
    questionKm: 'យោងតាមគម្ពីរអភិធម្ម ក្នុងករណីមនុស្សស្លាប់ភ្លាមៗមួយរំពេច (ដូចជា គ្រោះថ្នាក់ចរាចរណ៍ ឬគ្រោះថ្នាក់បេះដូងគាំង) តើ «មរណាសន្នវិថី» ដំណើរការទាញយកកម្មយ៉ាងដូចម្ដេច បើគ្មានអ្នកនៅក្បែរជួយរំលឹកធម៌ទាល់តែសោះ?',
    questionEn: 'According to Abhidhamma, in sudden deaths (car crash, cardiac arrest, bullet), how does Maraṇāsanna-vīthi process karma without anyone nearby to remind Dhamma?',
    shortKm: 'ការស្លាប់ភ្លាមៗ & អាចិណ្ណកម្ម (មហានាមសូត្រ)',
    shortEn: 'Sudden Death & Habitual Kamma (SN 55.21)',
    essenceKm: 'ក្នុងករណីស្លាប់ភ្លាមៗមួយរំពេច (គ្រោះថ្នាក់ចរាចរណ៍ ឬគាំងបេះដូង) មរណាសន្នវិថីនៅតែដំណើរការពេញលេញឥតចន្លោះ ពីព្រោះល្បឿននៃការកើតរលត់នៃចិត្តលឿនជាងរូបវន្តរាប់លានដង (មួយខ្ទាត់ម្រាមដៃ ចិត្តកើតរលត់មួយកោដិខណៈ ខណៈមរណាសន្នវិថីត្រូវការតែ ១៧ ខណៈប៉ុណ្ណោះ)។ ពេលគ្មានអ្នកជួយរំលឹក អាសន្នកម្មត្រូវបានរំលង ហើយ «អាចិណ្ណកម្ម» (ទម្លាប់ដែលធ្វើញឹកញាប់បំផុតក្នុងជីវិត) នឹងស្ទុះមកក្ដោបក្ដាប់ចិត្តចុងក្រោយ ១០០% ស្របតាមពុទ្ធដីកាក្នុងមហានាមសូត្រ (SN 55.21) ៖ ប្រៀបដូចដើមឈើដែលទេរទៅទិសណា ពេលកាប់ផ្តាច់រមែងដួលទៅទិសនោះ និងប្រៀបដូចឆ្នាំងប្រេងធ្លាក់ក្នុងទឹក ដុំថ្មធ្លាក់ចុះ តែប្រេងស្រាលរមែងអណ្តែតឡើង!',
    essenceEn: 'In sudden fatalities (instant crash or cardiac arrest), Maraṇāsanna-vīthi still executes flawlessly because consciousness operates millions of times faster than gross physical trauma (one trillion mind-moments per finger-snap, while the death-vīthi takes merely 17 moments). With no external reminders, near-death karma is bypassed, and "Āciṇṇa-kamma" (core habitual karma accumulated over a lifetime) seizes the Mind Door 100% as an instinctual reflex. As the Buddha illustrated to King Mahānāma (SN 55.21): like a tree habitually leaning east falling east when felled, and like a broken pot in deep water where heavy stones sink but buoyant oil ascends to the surface.',
    practicalKm: '«របៀបរស់នៅប្រចាំថ្ងៃ សំខាន់ជាងរបៀបដែលយើងស្លាប់!» កុំរង់ចាំដល់ចាស់ ឬសង្ឃឹមលើអ្នកដទៃមកជួយរំលឹកធម៌នៅមាត់ច្រកមរណៈ។ ការសន្សំទម្លាប់ល្អ ការចម្រើនសតិ ការធ្វើទាន និងការរក្សាចិត្តឱ្យស្ងប់ក្នុងជីវិតប្រចាំថ្ងៃ គឺជា «កញ្ចប់ធានារ៉ាប់រងវិញ្ញាណដ៏មានសុវត្ថិភាពបំផុត» ទោះបីជាត្រូវជួបឧបទ្ទវហេតុភ្លាមៗក្នុងរូបភាពណាក៏ដោយ!',
    practicalEn: 'How we live daily matters infinitely more than how we die! Never postpone virtue or rely on bystanders to whisper chants at the deathbed. Cultivating habitual mindfulness, generosity, and peace today is the ultimate non-negotiable insurance policy for a safe departure, regardless of external circumstances.',
    links: [
      { to: '/questions', km: 'សំណួរ–ចម្លើយ ៣៤', en: 'Q&A 34' },
      { to: '/my-gems#death-rebirth-process', km: 'ដំណើរពេលស្លាប់ ៥ ដំណាក់កាល', en: '5 Stages of Death' },
      { to: '/death-and-rebirth', km: 'មរណាសន្នវិថី & បដិសន្ធិ', en: 'Death & Rebirth Process' },
      { to: '/kamma', km: 'ច្បាប់កម្មផល & អាចិណ្ណកម្ម', en: 'Kamma & Habits' }
    ],
    sections: [
      {
        titleKm: '១. ល្បឿននៃចិត្ត និងពេលវេលារូបវន្ត (Citta vs. Physical Time)',
        titleEn: '1. Speed of Mind vs. Physical Time: Why Seconds Are Eternity',
        contentKm: 'មនុស្សទូទៅតែងគិតថា ការបុកទង្គិចនៃឡាន ឬគ្រាប់កាំភ្លើងកើតឡើងត្រឹមតែ ០.០០១ វិនាទី រហូតដល់រាងកាយខ្ទេចខ្ទី តើចិត្តមានពេលណាទៅបង្កើតវិថីចិត្តទាន់?\n\n— ល្បឿននៃចិត្តតាមអភិធម្ម ៖ ក្នុងរយៈពេលត្រឹមតែ មួយប៉ប្រិចភ្នែក ឬមួយខ្ទាត់ម្រាមដៃ ចិត្តកើតរលត់អស់ចំនួន ១,០០០,០០០,០០០,០០០ (មួយកោដិ ឬមួយទ្រីលាន) ខណៈ!\n— រយៈពេលនៃមរណាសន្នវិថី ៖ វិថីចិត្តចុងក្រោយមុនពេលស្លាប់ ត្រូវការពេលត្រឹមតែ ១៧ ខណៈនៃចិត្ត ប៉ុណ្ណោះ (ចាប់តាំងពីភវង្គញ័រ ជវនចិត្ត ៥ ខណៈ រហូតដល់ចុតិចិត្ត)។\n— ការពិតជាក់ស្តែង ៖ ទោះបីជារថយន្តបុកក្នុងល្បឿន ១៥០ គីឡូម៉ែត្រ/ម៉ោង ឬគ្រាប់កាំភ្លើងបាញ់ធ្លុះក្បាលភ្លាមៗក៏ដោយ ពេលវេលាដ៏ខ្លីនោះនៅតែ «យូរហួសពីគ្រប់គ្រាន់» សម្រាប់ឱ្យចិត្តដំណើរការមរណាសន្នវិថីបានរាប់រយរាប់ពាន់ជុំ មុនពេលចុតិចិត្តរលត់ជាស្ថាពរ។',
        contentEn: 'People often wonder: if a crash or gunshot shatters the body in 0.001 seconds, how could the mind possibly have time to formulate a mental process?\n\n— Abhidhamma Cognitive Speed: Within the blink of an eye or snap of a finger, consciousness arises and dissolves approximately 1,000,000,000,000 (one trillion) moments!\n— Duration of Maraṇāsanna-vīthi: The final mental pathway requires merely 17 mind-moments (from Bhavanga vibration through 5 Javana moments to Cuti-citta).\n— The Scientific Reality: Even if a vehicle crashes at 150 km/h or a bullet strikes instantaneously, that microscopic fraction of a physical second is an immense eternity for mental processing, permitting the Maraṇāsanna-vīthi to execute hundreds or thousands of cycles before Cuti-citta definitively ceases.'
      },
      {
        titleKm: '២. ក្បួនទាញយកកម្មទាំង ៤ ជាន់ (The Kamma Priority Order)',
        titleEn: '2. The 4-Tier Karmic Priority Order in Accidents',
        contentKm: 'នៅពេលមនុស្សស្លាប់ដោយធម្មតា មានកូនចៅនៅក្បែរជួយសូត្រធម៌ នោះហៅថា អាសន្នកម្ម (កម្មរំលឹកនៅមាត់ច្រកមរណៈ)។ ប៉ុន្តែក្នុងករណីគ្រោះថ្នាក់ភ្លាមៗ គ្មាននរណាម្នាក់នៅក្បែរ ច្បាប់កម្មផលដំណើរការតាមលំដាប់អាទិភាព ៤ ថ្នាក់ដូចខាងក្រោម ៖\n\n[១. គរុកម្ម (Garuka)]\n       | (បើគ្មាន)\n[២. អាសន្នកម្ម (Āsanna)]  <-- ត្រូវរំលង ព្រោះគ្មានអ្នកជួយរំលឹក\n       | (បើគ្មាន)\n[៣. អាចិណ្ណកម្ម (Āciṇṇa / Bahula)]  <-- ដើរតួជាអ្នកសម្រេច ១០០%\n       | (បើគ្មាន)\n[៤. កដត្តាកម្ម (Kaṭattā)]',
        contentEn: 'In peaceful hospice deaths with loved ones chanting, Āsanna-kamma (deathbed reminder karma) operates. In sudden violent fatalities where no one is present, nature applies the strict 4-tier karmic sequence:\n\n[1. Garuka-kamma (Weighty Karma)]\n       | (if absent)\n[2. Āsanna-kamma (Near-Death Karma)] <-- Bypassed (no conscious reminder)\n       | (if absent)\n[3. Āciṇṇa-kamma (Habitual Karma)] <-- Decides destiny 100%\n       | (if absent)\n[4. Kaṭattā-kamma (Residual Deeds)]',
        points: [
          { boldKm: 'ថ្នាក់ទី ១ ៖ គរុកម្ម (កម្មធ្ងន់បំផុត)', boldEn: 'Tier 1: Garuka-kamma (Weighty)', km: 'ប្រសិនបើធ្លាប់ធ្វើអនន្តរិយកម្ម (សម្លាប់ឪពុក ម្តាយ ព្រះអរហន្ត ធ្វើឱ្យព្រះពុទ្ធចេញឈាម បំបែកសង្ឃ) ឬសម្រេចឈានសមាបត្តិ កម្មធ្ងន់នេះនឹងស្ទុះមកកាត់មុខគេភ្លាមៗ បង្កើតជានរកនិមិត្ត ឬព្រហ្មលោកនិមិត្ត ដោយមិនបាច់រង់ចាំកម្មផ្សេងឡើយ។', en: 'Anantarika-kamma (matricide, patricide, etc.) or Jhana absorptions supersede all else, projecting hellish or Brahma visions instantly.' },
          { boldKm: 'ថ្នាក់ទី ២ ៖ អាសន្នកម្ម (កម្មជិតស្លាប់)', boldEn: 'Tier 2: Āsanna-kamma (Deathbed)', km: 'ក្នុងករណីគ្រោះថ្នាក់រហ័ស ដំណាក់កាលនេះត្រូវបានរំលងចោល ដោយសារគ្មានសតិដឹងខ្លួនធ្វើបុណ្យ ឬគ្មានអ្នកមកដាស់តឿន។', en: 'Bypassed in sudden trauma since the dying person lacks reflective waking time and no loved ones are present to guide the mind.' },
          { boldKm: 'ថ្នាក់ទី ៣ ៖ អាចិណ្ណកម្ម ឬ ពហុលកម្ម (ទម្លាប់ប្រចាំជីវិត — សំខាន់បំផុត)', boldEn: 'Tier 3: Āciṇṇa-kamma (Core Daily Habit — The Deciding Factor)', km: 'នេះជាអ្នកក្ដោបក្ដាប់ជោគវាសនាទាំងស្រុង! អ្វីដែលបុគ្គលធ្លាប់គិត និយាយ ឬធ្វើជាប្រចាំ (Core Daily Habit) នឹងស្ទុះឡើងមកបង្ហាញខ្លួនក្នុងមនោទ្វារដូចជាប្រតិកម្មរហ័ស (Instinctual Reflex) ៖ អ្នកមានទម្លាប់មេត្តា សីល សមាធិ ចិត្តនឹងស្ងប់ភ្លាម; អ្នកមានទម្លាប់កំហឹង លោភលន់ ល្បែង ស្រវឹង ចិត្តនឹងក្តៅក្រហាយ និងភ័យតក់ស្លុតភ្លាម!', en: 'The master determinant: lifelong ingrained habits leap forward as an instinctual reflex. The habitual meditator/virtuous soul reflexively defaults to peace; the habitually angry, greedy, or addicted mind reflexively spirals into panic and fire.' },
          { boldKm: 'ថ្នាក់ទី ៤ ៖ កដត្តាកម្ម (កម្មស្រាលៗកាលពីអតីត)', boldEn: 'Tier 4: Kaṭattā-kamma (Residual)', km: 'ប្រសិនបើគ្មានទម្លាប់ច្បាស់លាស់ កម្មចាស់ៗដែលធ្លាប់ធ្វើដោយអចេតនាកាលពីជាតិមុន ឬពេលនៅក្មេង នឹងឡើងមកបង្ហាញខ្លួនជំនួស។', en: 'If habitual momentum is inconclusive, past residual deeds from youth or prior lives step in to cast the final vision.' }
        ]
      },
      {
        titleKm: '៣. ឧបមាពុទ្ធដីកាក្នុង «មហានាមសូត្រ» (The Leaning Tree & The Pot of Oil)',
        titleEn: '3. The Buddha’s Two Famous Analogies in the Mahānāma Sutta (SN 55.21)',
        contentKm: 'ស្តេចសក្យរាជ ព្រះនាម មហានាម ធ្លាប់បានចូលទៅទូលសួរព្រះពុទ្ធនូវសំណួរដូចគ្នានេះថា ៖ «បពិត្រព្រះអង្គដ៏ចម្រើន! ទីក្រុងកបិលវត្ថុ សម្បូរទៅដោយមនុស្ស ដំរី សេះ និងរទេះចរាចរណ៍ខ្វាត់ខ្វែង។ ប្រសិនបើខ្ញុំព្រះករុណា ត្រូវដំរីចុះប្រេងរត់ជាន់ ឬត្រូវរទេះបុកស្លាប់ភ្លាមៗមួយរំពេច ដោយមិនទាន់បានតាំងសតិ ឬរំលឹកដល់ព្រះធម៌ តើដំណើរទៅកាន់បរលោករបស់ខ្ញុំព្រះករុណា នឹងទៅជាយ៉ាងណា?»\n\nព្រះសម្មាសម្ពុទ្ធបានត្រាស់លួងលោម និងប្រទានឧបមា ២ យ៉ាង ៖',
        contentEn: 'King Mahānāma of the Sakyans once approached the Buddha with this exact anxiety: "Bhante! Kapilavatthu is crowded with elephants, horses, and speeding carts. If I were suddenly trampled by an enraged elephant or crushed by a cart before I could compose my mindfulness, what would become of my future rebirth?" The Blessed One reassured him with two immortal parables:',
        points: [
          { boldKm: 'ឧបមាដើមឈើទេរ (The Leaning Tree)', boldEn: 'Parable of the Leaning Tree', km: '«មហានាម! ប្រៀបដូចជាដើមឈើមួយដើម ដែលដុះទេរ ផ្អៀង និងទន់ទោរទៅទិសខាងកើតតាំងពីដើមមក។ នៅពេលដែលគេយកពូថៅមកកាប់ផ្តាច់គល់របស់វា តើដើមឈើនោះនឹងដួលរលំទៅទិសណា?» ព្រះបាទមហានាមទូលឆ្លើយថា ៖ «ពិតជាដួលទៅទិសខាងកើត ដែលវាធ្លាប់ទេរទៅនោះឯង ព្រះអង្គ!» ព្រះពុទ្ធត្រាស់ថា ៖ ចិត្តមនុស្សក៏ដូច្នោះដែរ បើពេញមួយជីវិត ចិត្តធ្លាប់តែទោរទន់ទៅរកសីលធម៌ និងសេចក្តីល្អ ទោះបីជាត្រូវស្លាប់ដោយគ្រោះថ្នាក់ភ្លាមៗយ៉ាងណាក៏ដោយ ក៏ ចិត្តចុងក្រោយនឹងដួលរលំទៅកាន់សុគតិភពតាមកម្លាំងទោរទន់នៃទម្លាប់នោះជាមិនខាន!', en: '"Mahānāma, suppose a tree grows leaning, sloping, and inclining toward the east. When cut at the base, which way will it fall?" Mahānāma replied: "It falls in the direction it inclined, Bhante." The Buddha confirmed: "So too, when a mind has long been cultivated in faith, virtue, and wisdom, even if crushed in sudden catastrophe, it inevitably falls toward Sugati (the heavenly realms)."' },
          { boldKm: 'ឧបមាឆ្នាំងប្រេងធ្លាក់ក្នុងទឹក (The Pot of Oil)', boldEn: 'Parable of the Pot of Oil', km: '«ប្រៀបដូចជាបុរសម្នាក់ យកឆ្នាំងដែលផ្ទុកទៅដោយដុំថ្ម និងខ្លាញ់ប្រេង ទៅទម្លាក់ក្នុងបឹងទឹកជ្រៅ រួចវាយបំបែកឆ្នាំងនោះ។ ដុំថ្មនិងអំបែងឆ្នាំងដែលមានទម្ងន់ធ្ងន់ នឹងលិចចុះទៅបាតបឹង រីឯខ្លាញ់ប្រេងដែលស្រាល នឹងអណ្តែតឡើងមកលើផ្ទៃទឹកយ៉ាងណាមិញ កាយសាច់ឈាមដែលគ្រើមនឹងធ្លាក់លើដី រីឯចិត្តដែលបានអប់រំល្អហើយ នឹងអណ្តែតឡើងទៅកាន់ឋានខ្ពស់យ៉ាងនោះឯង។»', en: '"Suppose a man submerges a clay jar filled with stones and ghee in a deep pool and shatters it. The heavy gravel sinks to the muddy floor, but the buoyant ghee rises and floats atop the water. Just so, the coarse flesh drops to earth, but the trained mind ascends to higher realms."' }
        ]
      },
      {
        titleKm: '៤. ការឈឺចាប់ និងការភ័យស្លន់ស្លោពេលបុកទង្គិច (Bodily Pain vs. Mind Door)',
        titleEn: '4. Physical Agony vs. The Mind Door: Living Habits Rule Death',
        contentKm: 'សំណួរសួរថា ៖ ចុះការឈឺចាប់ ឬការតក់ស្លុតពេលបុកទង្គិច អាចទាញចិត្តឱ្យធ្លាក់នរកបានទេ?\n\n១. ទុក្ខវេទនាខាងកាយ (Dukkha-vedanā) ៖ កើតឡើងលើប្រព័ន្ធប្រសាទ និងកាយទ្វារក្នុងកម្រិតរូបធាតុប៉ុណ្ណោះ។\n២. មនោទ្វារវិថីកាត់ផ្តាច់ការឈឺចាប់ ៖ នៅវិនាទីចុងក្រោយ វិញ្ញាណនឹងផ្តាច់ខ្លួនចេញពីកាយវិញ្ញាណទាំងស្រុង ហើយដំណើរការតែលើមនោទ្វារ។\n៣. កម្លាំងនៃទម្លាប់ ៖ ប្រសិនបើបុគ្គលនោះមាន «ទម្លាប់ផ្លូវចិត្តល្អ» មនោទ្វារនឹងរំលងការឈឺចាប់លើដងខ្លួន ហើយស្ទុះទៅចាប់យកនិមិត្តនៃអំពើល្អដែលធ្លាប់ធ្វើភ្លាម។ ផ្ទុយទៅវិញ ប្រសិនបើគ្មានមូលដ្ឋានធម៌ទេ ចិត្តនឹងកើតទោសៈ (តក់ស្លុត ភ័យខ្លាច) ហើយទោសៈនោះនឹងទាញទម្លាក់ទៅកាន់អបាយភូមិ។\n\nសរុបសេចក្តី ៖ ក្នុងទស្សនៈព្រះពុទ្ធសាសនា «របៀបរស់នៅប្រចាំថ្ងៃ សំខាន់ជាងរបៀបដែលយើងស្លាប់»។ ការសន្សំទម្លាប់ល្អ និងការគ្រប់គ្រងចិត្តក្នុងជីវិតបច្ចុប្បន្ន គឺជាការរៀបចំកញ្ចប់ធានារ៉ាប់រងសម្រាប់មរណាសន្នវិថីដ៏មានសុវត្ថិភាពបំផុត ទោះបីជាត្រូវជួបឧបទ្ទវហេតុក្នុងរូបភាពណាក៏ដោយ!',
        contentEn: 'Does physical trauma or instant terror doom the dying mind?\n1. Bodily Pain is physical: Dukkha-vedanā registers purely across the bodily sensory faculty (kāyadvāra).\n2. Sensory Decoupling: In the final moments, consciousness detaches from bodily sensations, operating solely within the Mind Door.\n3. Habit Overrides Trauma: A mind saturated with lifelong mindfulness automatically discards physical pain, locking onto memories of goodness and virtue. Conversely, a mind void of spiritual anchor succumbs to aversion and horror, dragging rebirth into lower realms.\n\nConclusion: In Buddhist psychology, "how you live daily matters far more than how you die." Daily mindfulness and ethical deeds represent the only authentic insurance policy for the death-proximate mind, ensuring peace regardless of external catastrophe.'
      }
    ]
  },

  // GEM 15: Death in Sleep & Coma States (Maraṇāsanna-vīthi, Dream-Visions & Bhavanga)
  {
    id: 'sleep-coma-death',
    num: 15,
    open: false,
    category: 'death',
    categoryKm: '💀 មរណាសន្នសម័យ & បដិសន្ធិ',
    categoryEn: '💀 Death in Sleep & Coma',
    ref: 'គម្ពីរអភិធម្មត្ថសង្គហៈ (វិថីសង្គហៈ) & អដ្ឋកថា',
    paliQuote: 'សុបិនន្តេបិ កម្មំ វិបច្ចតិ... ភវង្គតោ វុដ្ឋាយ មនោទ្វារិកមរណាសន្នវិថី ឧប្បជ្ជតិ (សូម្បីក្នុងដំណេកលក់ ឬសន្លប់ ចិត្តរមែងងើបចេញពីភវង្គ ហើយដំណើរការមរណាសន្នវិថីក្នុងមនោទ្វារយ៉ាងពេញលេញ)',
    questionKm: 'យោងតាមគម្ពីរអភិធម្ម ក្នុងករណីមនុស្សដែលដេកលក់ហើយស្លាប់ទៅតែម្តង (ស្លាប់ទាំងមិនដឹងខ្លួនក្នុងដំណេក) ឬអ្នកជំងឺសន្លប់បាត់ស្មារតីយូរថ្ងៃ (Coma) តើមរណាសន្នវិថីដំណើរការទាញយកអារម្មណ៍ចុងក្រោយយ៉ាងដូចម្ដេច?',
    questionEn: 'According to Abhidhamma, when someone dies peacefully in their sleep or in a prolonged coma, how does Maraṇāsanna-vīthi pull the final object from the subconscious?',
    shortKm: 'ការស្លាប់ក្នុងដំណេក & អ្នកជំងឺសន្លប់ Coma',
    shortEn: 'Death in Sleep & Coma (Subconscious Mind)',
    essenceKm: 'ចំពោះមនុស្សដែលស្លាប់ក្នុងដំណេក ឬសន្លប់បាត់ស្មារតីយូរថ្ងៃ (Coma) រូបកាយខាងក្រៅស្ងប់ស្ងាត់ពិតមែន ប៉ុន្តែ «មនោទ្វារ» ខាងក្នុងនៅតែដំណើរការមរណាសន្នវិថីយ៉ាងពេញលេញ។ ពេលសរីរាង្គកាយឈានដល់ចំណុចគាំង ចិត្តងើបចេញពី «ភវង្គ» (ចរន្តក្រោមដឹង) មកបើកមនោទ្វារ ៖ (១) ករណីស្លាប់ក្នុងដំណេក ៖ ចិត្តចាប់យកអារម្មណ៍តាមរយៈ «សុបិននិមិត្ត (Dream-Vision)» បើជាអ្នកមានបុណ្យ នឹងយល់សប្តិឃើញហោះហើរ ដើរក្នុងសួនផ្កា ឃើញប្រាសាទ ឬព្រះសង្ឃ រួចស្លាប់ក្នុងសេចក្តីជ្រះថ្លា; បើជាអ្នកមានបាប នឹងយល់សប្តិឃើញគេដេញកាប់ ធ្លាក់ជ្រោះ ភ្លើងឆេះ រួចស្លាប់ក្នុងភាពតក់ស្លុត (២) ករណីសន្លប់យូរថ្ងៃ (Coma) ៖ ចិត្តទាញយកអារម្មណ៍តាម «អាសយានុស័យ (Dormant Habitual Forces)» ដែលជាគំនិតបង្កប់ជ្រៅៗដែលធ្លាប់គិតរាប់ពាន់ដងក្នុងជីវិត ផ្ទុះឡើងលើផ្ទៃមនោទ្វារដូចពពុះទឹកពីបាតបឹង (៣) សំឡេងសូត្រធម៌ក្បែរត្រចៀកអ្នកជំងឺ Coma នៅតែអាចជ្រាបចូលតាមរំញ័រសោតបសាទ កាត់ផ្តាច់រូបភាពអាក្រក់ និងប្តូរទៅជាកុសលនិមិត្តបាន!',
    essenceEn: 'When dying during sleep or long-term coma, the physical shell appears passive, yet the inner Mind Door (Mano-dvāra) executes the complete Maraṇāsanna-vīthi without omission. As bodily faculties shut down, consciousness stirs from the Bhavanga (subconscious life-continuum): (1) In sleep fatalities: the final javana operates as a vivid "Dream-Vision" — the virtuous dream of soaring, heavenly gardens, celestial palaces, or monks, dying with joyful calm (kusala-javana); the non-virtuous dream of being hunted, falling off cliffs, or fire, dying in terror (akusala-javana). (2) In comatose states: subconscious forces (Āsayānusaya) accumulated over thousands of life thoughts surface like bubbles from a lake bed to grasp the final object. (3) Soft Dhamma chanting near a coma patient’s ear can still register through residual subtle ear-sensitivity (sota-pasāda), severing traumatic visions and pivoting the mind toward bright kamma-nimittas.',
    practicalKm: 'ការស្លាប់ក្នុងដំណេក ឬពេលសន្លប់ គឺដូចជាការផ្លាស់ប្តូរសម្លៀកបំពាក់ក្នុងបន្ទប់ងងឹត។ ភ្នែកសាច់មើលមិនឃើញ មាត់និយាយមិនចេញ តែ «កម្លាំងកម្ម និងទម្លាប់ចិត្ត» ជាអ្នកកំណត់ទិសដៅយ៉ាងសុក្រឹតបំផុត ៖ (១) មុនចូលគេងរាល់យប់ ចូររំលឹកគុណព្រះពុទ្ធ ចម្រើនមេត្តាភាវនា ព្រោះរាល់ការគេងលក់ អាចជាមាត់ទ្វារនៃមរណាសន្នសម័យ (២) សម្រាប់អ្នកជំងឺ Coma ចូរនៅបន្តសូត្រធម៌ និយាយពាក្យល្អៗ និងរំលឹកបុណ្យកុសលក្បែរត្រចៀកគាត់ កុំគិតថាគាត់មិនដឹងឮឱ្យសោះ!',
    practicalEn: 'Dying in sleep or coma is like changing garments in a dark room: physical senses are dormant, but lifetime karmic habits steer destiny with mathematical precision. (1) Every night before bed, recollect the Triple Gem and radiate mettā, treating sleep as a sacred dry-run for death; (2) For comatose loved ones, continue softly chanting Dhamma and recounting their merits near their ear — never assume they cannot register peaceful auditory vibrations.',
    links: [
      { to: '/questions', km: 'សំណួរ–ចម្លើយ ៣៥', en: 'Q&A 35' },
      { to: '/my-gems#death-rebirth-process', km: 'ដំណើរពេលស្លាប់ ៥ ដំណាក់កាល', en: '5 Stages of Death' },
      { to: '/my-gems#sudden-death-kamma', km: 'ការស្លាប់ភ្លាមៗ & អាចិណ្ណកម្ម', en: 'Sudden Death' },
      { to: '/death-and-rebirth', km: 'មរណាសន្នវិថី & បដិសន្ធិ', en: 'Death & Rebirth Process' }
    ],
    sections: [
      {
        titleKm: '១. ស្ថានភាពចិត្តពេលកំពុងដេកលក់ ឬសន្លប់ (The Bhavanga State)',
        titleEn: '1. Mental State During Sleep & Coma: The Continuous Bhavanga Stream',
        contentKm: 'យោងតាមអភិធម្ម នៅពេលមនុស្សដេកលក់ស្កប់ស្កល់ (គ្មានការយល់សប្តិ) ឬស្ថិតក្នុងសភាពសន្លប់ (Coma) វិញ្ញាណទ្វារទាំង ៥ ខាងក្រៅ (ភ្នែក ត្រចៀក ច្រមុះ អណ្តាត កាយ) ត្រូវគាំងដំណើរការបណ្តោះអាសន្ន។\n\nក្នុងពេលនោះ ចិត្តមិនបានរលត់បាត់ឡើយ ប៉ុន្តែវាធ្លាក់ទៅដំណើរការក្នុងចរន្ត «ភវង្គចិត្ត» (Life-Continuum) ៖\n— ភវង្គចិត្ត គឺជាចរន្តចិត្តដែលហូរភ្ជាប់ជីវិតពីមួយវិនាទីទៅមួយវិនាទីមិនឱ្យដាច់។\n— នៅក្នុងសភាពនេះ ចិត្តមិនដឹងរឿងរ៉ាវពិភពខាងក្រៅទេ ប៉ុន្តែ រក្សាទុកនូវរាល់ទិន្នន័យកម្ម ចរិតលក្ខណៈ និងទម្លាប់ទាំងអស់ដែលមនុស្សធ្លាប់សន្សំមកតាំងពីដើមរៀងមក។',
        contentEn: 'According to Abhidhamma, during deep dreamless sleep or prolonged coma, the 5 external sensory doors (eye, ear, nose, tongue, body) temporarily suspend cognitive processing.\n\nConsciousness does not cease; it lapses continuously into the "Bhavanga-citta" (the subconscious life-continuum):\n— Bhavanga flows incessantly like a subterranean river, bridging life from moment to moment.\n— In this state, consciousness does not register external horizons, yet it faithfully preserves all karmic seeds, dispositions, memories, and latent habits (anusaya) accumulated across life.'
      },
      {
        titleKm: '២. ដំណាក់កាលដំណើរការនៃ «មរណាសន្នវិថីក្នុងមនោទ្វារ»',
        titleEn: '2. Execution of the Mind-Door Death Process (Maraṇāsanna-vīthi)',
        contentKm: 'នៅពេលកោសិការាងកាយ ឈាម ឬបេះដូង (ហទយវត្ថុ) ឈានដល់ចំណុចគាំងលែងដំណើរការ កម្លាំងនៃរូបរលំដួលនេះ បានចូលទៅរំជើបរំជួលខ្សែទឹកភវង្គ បង្កើតចេញជា មរណាសន្នមនោទ្វារវិថី ដូចខាងក្រោម ៖\n\n[អតីតភវង្គ] -> [ភវង្គចលនៈ (ញ័រ)] -> [ភវង្គុបច្ឆេទ (កាត់ផ្តាច់)]\n                                      |\n[មនោទ្វារាវជ្ជនៈ (បើកទ្វារចិត្ត)] <- [ចាប់យក និមិត្ត ពី subconscious]\n                                      |\n[ជវនចិត្ត ៥ ខណៈ] (កុសល ឬ អកុសល កំណត់វាសនា)\n                                      |\n[ចុតិចិត្ត (១ ខណៈ)] (ដាច់ដង្ហើមជាស្ថាពរ)\n                                      |\n[បដិសន្ធិចិត្ត (ភ្លាមៗ)] (ចាប់កំណើតក្នុងភពថ្មី)',
        contentEn: 'When biological tissue, oxygenation, or the physical heart base (hadaya-vatthu) reaches systemic collapse, the shockwaves of physical dissolution destabilize the life-continuum, triggering the Mind-Door Death Pathway:\n\n[Atīta-bhavanga (Past)] -> [Bhavanga-calana (Vibration)] -> [Bhavangupaccheda (Arrest)]\n                                      |\n[Mano-dvārāvajjana (Mind-Door Adverting)] <- [Retrieves object from subconscious]\n                                      |\n[5 Javana Moments] (Wholesome or unwholesome final charge)\n                                      |\n[Cuti-citta (1 moment)] (Official severance of present life)\n                                      |\n[Paṭisandhi-citta (Instant)] (Rebirth in new plane)',
        points: [
          { boldKm: 'ការកាត់ផ្តាច់ភវង្គ', boldEn: 'Bhavanga Severance', km: 'ភវង្គចិត្តញ័ររំញើប (ភវង្គចលនៈ) រួចកាត់ផ្តាច់ចរន្តស្ងប់ស្ងាត់ (ភវង្គុបច្ឆេទ)។', en: 'Subconscious stream vibrates (bhavanga-calana) and arrests its passive flow (bhavangupaccheda).' },
          { boldKm: 'មនោទ្វារាវជ្ជនៈ (បើកទ្វារចិត្ត)', boldEn: 'Mind-Door Adverting', km: 'ចិត្តបើកទ្វារមនោទ្វារឡើង ដើម្បីទទួលយកអារម្មណ៍ចុងក្រោយ។ ដោយសារគ្មានសំឡេង គ្មានរូបភាពពីខាងក្រៅ វានឹងស្ទុះទៅទាញទិន្នន័យពី ជម្រៅនៃកម្មខាងក្នុង មកបង្ហាញភ្លាមៗ។', en: 'Consciousness adverts inward; absent sensory inputs, it locks onto latent karmic imprints rising from the psychic depths.' },
          { boldKm: 'ជវនចិត្ត ៥ ខណៈ', boldEn: '5 Javana Moments', km: 'ចិត្តទទួលដឹង និងមានប្រតិកម្មលើអារម្មណ៍នោះយ៉ាងលឿនបំផុត (កុសល ឬ អកុសល)។', en: 'Consciousness processes and reacts to the vision with emotional intensity (peace, joy, aversion, or terror).' },
          { boldKm: 'ចុតិចិត្ត និង បដិសន្ធិចិត្ត', boldEn: 'Cuti-citta & Paṭisandhi', km: 'ចុតិចិត្តរលត់ បញ្ចប់ជីវិតមនុស្ស រួចបដិសន្ធិចិត្តចាប់កំណើតថ្មីតកន្ទុយគ្នាភ្លាមៗ ដោយគ្មានចន្លោះពេល។', en: 'Cuti-citta ceases, concluding the human life; Paṭisandhi-citta sparks in the subsequent realm with zero time gap.' }
        ]
      },
      {
        titleKm: '៣. ការទាញយកអារម្មណ៍ចុងក្រោយ ៖ សុបិននិមិត្ត & អាសយានុស័យ',
        titleEn: '3. Two Modes of Retrieval: Dream-Visions vs. Dormant Habitual Currents',
        contentKm: 'ក្នុងករណីដេកលក់ ឬសន្លប់ ចិត្តទាញយកអារម្មណ៍ និងនិមិត្តតាមច្រក ២ យ៉ាង ៖',
        contentEn: 'In sleep and comatose demises, the final consciousness captures its object through two distinct avenues:',
        points: [
          { boldKm: 'ក. ករណីស្លាប់ក្នុងដំណេក ៖ ចិត្តចាប់យកតាម «សុបិននិមិត្ត» (Dream-Vision)', boldEn: 'A. Dying in Sleep: The Dream-Vision State', km: 'កម្លាំងនៃ អាចិណ្ណកម្ម (ទម្លាប់ជីវិត) នឹងបង្កើតជាសុបិនចុងក្រោយយ៉ាងរស់រវើក ៖ បើជាអ្នកមានសីលធម៌ គាត់នឹងយល់សប្តិឃើញខ្លួនឯងកំពុងហោះហើរ ដើរក្នុងសួនផ្កា ឃើញប្រាសាទ ឬឃើញព្រះសង្ឃ ចិត្តកើតកុសលជវនៈ រួចដាច់ខ្យល់ស្លាប់ក្នុងដំណេកនោះទៅកាន់សុគតិភព; បើជាអ្នកសន្សំទោសៈ នឹងយល់សប្តិឃើញគេដេញកាប់ ធ្លាក់ជ្រោះ ឬភ្លើងឆេះ កើតអកុសលជវនៈ ធ្លាក់ទៅទុគ្គតិភព។', en: 'Lifelong habit manifests as a vivid final dream: the virtuous dream of levitating, serene gardens, temples, or monks, expiring peacefully into heavenly realms; those steeped in aversion or malice dream of being chased, falling into abysses, or fire, passing in panic into lower destinations.' },
          { boldKm: 'ខ. ករណីសន្លប់យូរថ្ងៃ (Coma) ៖ ចិត្តចាប់យកតាម «អាសយានុស័យ» (Dormant Habitual Forces)', boldEn: 'B. Comatose States: Dormant Subconscious Currents (Āsayānusaya)', km: 'អ្នកជំងឺសន្លប់យូរថ្ងៃ គ្មានការយល់សប្តិដូចមនុស្សធម្មតាឡើយ ប៉ុន្តែអារម្មណ៍ដែលមនុស្សធ្លាប់គិតរាប់ពាន់ដងក្នុងជីវិត (បារម្ភពីកូន ស្អប់នរណាម្នាក់ ឬជ្រះថ្លាក្នុងការធ្វើទាន) មិនដែលបាត់ឡើយ គឺបង្កប់ក្នុងសន្តានចិត្ត (អនុស័យ)។ ពេលកោសិកាខួរក្បាល និងបេះដូងជិតដាច់ខ្យល់ ថាមពលដែលខ្លាំងជាងគេក្នុងជីវិត នឹង ផ្ទុះឡើងមកលើផ្ទៃមនោទ្វារ ដោយស្វ័យប្រវត្តិ ដូចពពុះទឹកផុសពីបាតបឹង។', en: 'Coma patients do not dream normally; however, thoughts rehearsed thousands of times (family anxiety, lingering grudges, or spiritual devotions) dwell deep as latent roots (anusaya). At systemic failure, the single most dominant lifelong psychic current bubbles to the surface of the Mind Door like gas bubbles bursting from a lake bed.' }
        ]
      },
      {
        titleKm: '៤. ការដឹងឮសំឡេងសូត្រធម៌របស់អ្នកជំងឺ Coma (Sota-pasāda Sensitivity)',
        titleEn: '4. Auditory Sensitivity in Coma (Sota-pasāda): Why Chanting Matters',
        contentKm: 'យោងតាមការបកស្រាយក្នុងអដ្ឋកថា ទោះបីជាអ្នកជំងឺ Coma មើលទៅដូចជាសន្លប់បាត់ស្មារតី (Brain-dead / Unresponsive) ក៏ដោយ ៖\n\n១. រំញ័រនៃសោតបសាទ ៖ ក្នុងករណីខ្លះ «សោតបសាទ» (សរសៃវិញ្ញាណត្រចៀក) នៅតែអាចមានសេសសល់រំញ័ររូបធាតុតិចតួច ដែលម៉ាស៊ីនវេជ្ជសាស្ត្រមិនអាចវាស់ដឹង។\n២. ឥទ្ធិពលនៃសំឡេងធម៌ ៖ ប្រសិនបើសាច់ញាតិមកសូត្រធម៌ក្បែរត្រចៀកគាត់ដោយចិត្តស្ងប់ រំញ័រនៃសំឡេងនោះ អាចមានឱកាសជ្រៀតចូលទៅដាស់ សោតទ្វារវិថី បានមួយភ្លែត។\n៣. ការប្តូរនិមិត្តចុងក្រោយ ៖ សំឡេងធម៌នោះ អាចជួយកាត់ផ្តាច់រូបភាពអាក្រក់ក្នុងចិត្តរបស់អ្នកជំងឺ ហើយប្តូរអារម្មណ៍ចុងក្រោយឱ្យក្លាយជា «កុសលកម្មនិមិត្ត» បាននៅវិនាទីចុងក្រោយ!',
        contentEn: 'According to ancient Aṭṭhakathā commentaries, even when a comatose patient appears completely clinically unresponsive:\n1. Residual Auditory Sensitivity: Microscopic physical vibrations across the auditory faculty (sota-pasāda) may persist beyond medical instrumentation.\n2. Penetration of Chanting: Sincere, tranquil Dhamma recitations beside their ear can penetrate the subconscious, momentarily stimulating the auditory gateway (sota-dvāra).\n3. Overriding Nightmarish Visions: The acoustic resonance of Dhamma can shatter harrowing subconscious distress, implanting a bright wholesome Kamma-nimitta at the critical final threshold!'
      }
    ]
  },

  // GEM 16: King Yama, The 5 Devadūta (MN 130), Immediate Hell vs. Trial & The Vemānika-peta Reality
  {
    id: 'king-yama-devaduta',
    num: 16,
    open: false,
    category: 'death',
    categoryKm: '💀 មរណាសន្នសម័យ & យមរាជ',
    categoryEn: '💀 King Yama & 5 Devadūta (MN 130)',
    ref: 'មជ្ឈិមនិកាយ ឧបរិបណ្ណាសក ទេវទូតសូត្រ (MN 130 / ព្រះត្រៃបិដកភាគ ២៩) & គម្ពីរអភិធម្ម',
    paliQuote: 'ន តំ មាត្រា កតំ... ឯវន្តំ ទុក្ខំ វេទយន្តិ (អំពើបាបនេះ មិនមែនម្តាយឪពុកធ្វើឱ្យអ្នកទេ គឺអ្នកធ្វើវាដោយខ្លួនឯង ដូច្នេះមានតែខ្លួនអ្នកទេដែលត្រូវទទួលផល)',
    questionKm: 'យោងតាមគម្ពីរអភិធម្ម និងទេវទូតសូត្រ តើមនុស្សដែលធ្វើបាបស្លាប់ទៅ ត្រូវធ្លាក់នរកភ្លាមៗ ឬត្រូវឆ្លងកាត់ការសាកសួរ និងកាត់ក្តីពីស្តេចយមរាជជាមុនសិន?',
    questionEn: 'According to the Abhidhamma and Devadūta Sutta (MN 130), do sinners fall into hell immediately or undergo interrogation by King Yama first?',
    shortKm: 'ស្តេចយមរាជ & ទេវទូតទាំង ៥ (MN 130)',
    shortEn: 'King Yama & 5 Devadūta (MN 130)',
    essenceKm: 'មនុស្សដែលធ្វើបាបស្លាប់ទៅ មិនមែនសុទ្ធតែត្រូវឆ្លងកាត់ការសាកសួរពីស្តេចយមរាជទាំងអស់នោះទេ គឺចែកជា ២ ករណី ៖ (១) ធ្លាក់នរកភ្លាមៗដោយស្វ័យប្រវត្តិកាត់មុខ មិនឆ្លងកាត់យមរាជឡើយ ចំពោះអ្នកធ្វើ គរុកម្ម (អនន្តរិយកម្ម ៥ ដូចជាសម្លាប់ម្តាយ ឪពុក ព្រះអរហន្ត ធ្វើឱ្យព្រះពុទ្ធចេញឈាម បំបែកសង្ឃ) ឬមាន និយតមិច្ឆាទិដ្ឋិ ដូចដុំដែកធ្ងន់ធ្លាក់ដល់បាតទឹកជ្រៅ (២) ត្រូវនាំទៅជួបស្តេចយមរាជ ចំពោះអ្នកសាងកម្មចម្រុះ (ល្អខ្លះ អាក្រក់ខ្លះ)។ យមរាជមិនមែនជាចៅក្រមកាចសាហាវដែលចាំតែដាក់ទោសមនុស្សទេ ប៉ុន្តែជា «អ្នកព្យាយាមជួយសង្គ្រោះ» ដោយសួរដាស់រំលឹក ទេវទូតទាំង ៥ (ទារក, មនុស្សចាស់, មនុស្សឈឺ, អ្នកទោស, និងសាកសព) ដើម្បីឱ្យនឹកឃើញបុណ្យ។ បើនឹកឃើញបុណ្យភ្លាម នឹងរួចផុតពីនរក ហើយកើតនៅឋានសួគ៌ភ្លាមៗ; លុះត្រាតែនឹកមិនឃើញទាល់តែសោះ ទើបធ្លាក់នរកតាមកម្ម។ តាមពិត យមរាជជា វេមានិកប្រេត (មានបុណ្យនិងបាបចម្រុះគ្នា) ដែលសូម្បីតែព្រះអង្គផ្ទាល់ ក៏ប្រាថ្នារួចផុតពីភពនេះ ដើម្បីបានកើតជាមនុស្ស និងស្តាប់ធម៌ព្រះពុទ្ធដែរ!',
    essenceEn: 'Sinners do not uniformly face King Yama; the Abhidhamma and Devadūta Sutta (MN 130) delineate two distinct categories: (1) Immediate Automatic Plunge into Hell (Bypassing Yama entirely) for perpetrators of Garuka-kamma (the 5 Anantarika heinous crimes) and fixed wrong views (Niyata-micchādiṭṭhi) — sinking like a solid iron boulder straight to the depths of Avīci with zero trial; (2) Escorted to King Yama for beings with mixed karma (both virtues and vices) whose dying thoughts faltered. Yama is not a sadistic torturer, but a benevolent rescuer interrogating them via the 5 Divine Messengers (Newborn, Elderly, Sick, Punished Criminal, and Corpse) to stimulate dormant memories of merit. If merit is recalled, the being is instantly liberated to heaven; only if oblivious across all 5 messengers do they descend to hell. Yama himself is a Vemānika-peta who weary of his grim duties, perpetually longs to obtain human rebirth and attain liberation under a Buddha.',
    practicalKm: 'ចូរកុំរង់ចាំឱ្យដល់ថ្ងៃជួបស្តេចយមរាជទើបខំគិតរកបុណ្យ! ក្នុងជីវិតប្រចាំថ្ងៃ រាល់ពេលឃើញ «ទេវទូតទាំង ៥» (ឃើញកូនក្មេងទារក, ឃើញមនុស្សចាស់ជរា, ឃើញអ្នកជំងឺនៅមន្ទីរពេទ្យ, ឃើញទារុណកម្ម, និងឃើញសាកសពពិធីបុណ្យខ្មោច) ចូររំលឹកដាស់តឿនខ្លួនឯងឱ្យកើត «សង្វេគធម៌» កុំធ្វេសប្រហែស កុំជាប់ជំពាក់នឹងភាពក្មេង ភាពមិនមានរោគ និងជីវិតរស់នៅ ហើយប្រញាប់សន្សំកុសលធម៌ សីល និងភាវនាឱ្យបានពេញលេញ!',
    practicalEn: 'Never wait until standing before King Yama to scramble for memories of good deeds! In daily life, whenever encountering the 5 Divine Messengers (infants, frail elders, hospitalized patients, prisoners, or funeral corpses), arouse instant spiritual urgency (saṃvega): abandon heedlessness, realize impermanence, and hoard virtues, ethics, and meditation today.',
    links: [
      { to: '/questions', km: 'សំណួរ–ចម្លើយ ៣៦', en: 'Q&A 36' },
      { to: '/realms', km: 'ភពទាំង ៣១ ជាន់ & នរក', en: '31 Planes & Hell Realms' },
      { to: '/my-gems#death-rebirth-process', km: 'ដំណើរពេលស្លាប់ ៥ ដំណាក់កាល', en: '5 Stages of Death' },
      { to: '/my-gems#sudden-death-kamma', km: 'ការស្លាប់ភ្លាមៗ & អាចិណ្ណកម្ម', en: 'Sudden Death' }
    ],
    sections: [
      {
        titleKm: '១. ករណីធ្លាក់នរកភ្លាមៗដោយស្វ័យប្រវត្តិ (មិនឆ្លងកាត់យមរាជ)',
        titleEn: '1. Automatic Immediate Plunge to Hell (Bypassing King Yama)',
        contentKm: 'បុគ្គលដែលប្រព្រឹត្តអំពើបាបធ្ងន់ធ្ងរដាច់គេ នឹងត្រូវ ធ្លាក់ចុះទៅកាន់មហានរកភ្លាមៗមួយរំពេច ក្រោយពេលចុតិចិត្តរលត់ ដោយគ្មានការនាំខ្លួនទៅជួបស្តេចយមរាជ ឬមានការសាកសួរដេញដោលអ្វីឡើយ ៖\n\n— អនន្តរិយកម្មទាំង ៥ (គរុកម្ម) ៖ សម្លាប់ម្តាយ, សម្លាប់ឪពុក, សម្លាប់ព្រះអរហន្ត, ធ្វើឱ្យព្រះពុទ្ធចេញឈាម, និងបំបែកសង្ឃឱ្យបែកបាក់គ្នា (ដូចករណីព្រះបាទអជាតសត្តុ ឬព្រះទេវទត្ត)។\n— និយតមិច្ឆាទិដ្ឋិ ៖ ការប្រកាន់ទស្សនៈខុសកម្រិតធ្ងន់ធ្ងរបំផុត (មិនជឿកម្មផល មិនជឿបុណ្យបាប មិនជឿបរលោក) រហូតដល់ដង្ហើមចុងក្រោយ។\n— យន្តការអភិធម្ម ៖ ទម្ងន់នៃកម្មអកុសលទាំងនេះធ្ងន់ធ្ងរខ្លាំងពេក ប្រៀបដូចជាការទម្លាក់ដុំថ្ម ឬដុំដែកដ៏ធំចូលទៅក្នុងទឹកជ្រៅ វានឹងលិចចុះត្រង់ទៅកាន់បាតមហានរក (ដូចជា អវិចីមហានរក) ភ្លាមៗ ដោយគ្មានកម្លាំងណាអាចទប់ ឬរារាំងបានឡើយ។',
        contentEn: 'Beings guilty of heinous transgressions plunge headlong into Great Hell immediately upon the dissolution of Cuti-citta, entirely bypassing King Yama’s hall:\n\n— The 5 Anantarika-kamma (Weightiest Crimes): Matricide, patricide, murdering an Arahant, wounding a Buddha, or creating a schism in the Sangha (e.g., King Ajātasattu or Devadatta).\n— Niyata-micchādiṭṭhi: Fixed extreme nihilistic views (denying moral cause-and-effect, rebirth, and spiritual fruition) maintained up to the last breath.\n— Abhidhamma Mechanism: The sheer gravitational momentum of these unwholesome deeds resembles dropping a solid iron boulder into deep water; it sinks directly and inexorably to the floor of Avīci Hell without interruption or trial.'
      },
      {
        titleKm: '២. ករណីត្រូវនាំខ្លួនទៅជួបស្តេចយមរាជ (ឆ្លងកាត់ការសាកសួរ)',
        titleEn: '2. Escorted to King Yama: Beings with Mixed Karma',
        contentKm: 'ចំពោះបុគ្គលដែល មិនបានធ្វើអនន្តរិយកម្ម ប៉ុន្តែក្នុងមួយជីវិតបានសាងទាំងអំពើល្អខ្លះ និងអំពើអាក្រក់ខ្លះ (កម្មចម្រុះ) ហើយនៅពេលជិតស្លាប់ ចិត្តបែរជាភ្លាត់ទៅចាប់យកអារម្មណ៍អកុសល បណ្តាលឱ្យធ្លាក់ទៅកាន់ យមលោក (ដែនដីរបស់ស្តេចយមរាជ ដែលនៅក្បែរមាត់ទ្វារនរក) ៖\n\n១. នៅពេលស្លាប់ យមបាល (អ្នកយាមនរក) នឹងចាប់ក្រៀកបុគ្គលនោះ នាំយកទៅចំពោះព្រះភក្ត្រនៃ ស្តេចយមរាជ។\n២. យមបាលនឹងទូលរាយការណ៍ថា ៖ «បពិត្រព្រះសម្មតិទេព! បុរសនេះកាលនៅជាមនុស្ស មិនដឹងគុណម្តាយឪពុក មិនគោរពសមណព្រាហ្មណ៍ មិនគោរពចាស់ព្រឹទ្ធាចារ្យ សូមទ្រង់មេត្តាដាក់ទោសដល់បុគ្គលនេះចុះ!»។',
        contentEn: 'Those who did not commit heinous crimes but lived with mixed karma (both virtues and vices), and whose final dying moments slipped into negative impressions, awaken in Yama’s domain (the border realm adjoining hell):\n\n1. Upon death, Yamapālas (hell wardens) seize the being and escort them before King Yama.\n2. The wardens announce: "Lord! This individual in the human realm was disrespectful to parents, ascetics, and elders, and neglected spiritual duties. May your Majesty decree punishment!"'
      },
      {
        titleKm: '៣. តួនាទីពិតរបស់ស្តេចយមរាជ ៖ «អ្នកជួយសង្គ្រោះ មិនមែនអ្នកកាត់ទោសឡើយ»',
        titleEn: '3. King Yama’s True Role: Compassionate Rescuer, Not Punisher',
        contentKm: 'មនុស្សភាគច្រើនយល់ច្រឡំថាស្តេចយមរាជ គឺជាចៅក្រមកាចសាហាវដែលចាំតែដាក់ទោសមនុស្ស។ ប៉ុន្តែនៅក្នុងទេវទូតសូត្រ ព្រះពុទ្ធត្រាស់ថា ស្តេចយមរាជដើរតួជាអ្នកព្យាយាមជួយសង្គ្រោះវិញ្ញាណនោះទៅវិញទេ ៖\n\nស្តេចយមរាជមានចិត្តមេត្តា មិនចង់ឱ្យបុគ្គលនោះធ្លាក់នរកឡើយ ព្រះអង្គក៏ព្យាយាមដេញដោលសួរនាំ ដាស់រំលឹក «ទេវទូតទាំង ៥» ដើម្បីដាស់ស្មារតីឱ្យបុគ្គលនោះ នឹកឃើញបុណ្យ ដែលខ្លួនធ្លាប់បានធ្វើកាលនៅរស់ ៖',
        contentEn: 'Common folklore misunderstands King Yama as a sadistic tormentor. In the Devadūta Sutta, the Buddha clarifies that Yama functions as an advocate seeking to awaken the soul’s latent memories of merit through the 5 Divine Messengers:',
        points: [
          { boldKm: 'ទេវទូតទី ១ (ទារកទើបកើត)', boldEn: '1st Messenger: Newborn Infant', km: '«កាលនៅរស់ តើអ្នកធ្លាប់ឃើញទារកទើបកើត ដេកននៀលក្នុងទឹកមូត្រលាមកខ្លួនឯងដែរទេ? តើអ្នកធ្លាប់គិតទេថា ខ្លួនក៏ធ្លាប់កើតបែបនេះ ហើយគួរខំសាងអំពើល្អ?»', en: '"Did you never see in the world a tender newborn infant lying helpless in its own urine and filth? Did it not occur to you that you too are subject to birth and should cultivate virtue?"' },
          { boldKm: 'ទេវទូតទី ២ (មនុស្សចាស់ជរា)', boldEn: '2nd Messenger: Frail Elderly Person', km: '«តើអ្នកធ្លាប់ឃើញមនុស្សចាស់ជរា ដើរទ្រុឌទ្រោម កាន់ឈើច្រត់ ធ្មេញបាក់ សក់ស្កូវដែរទេ? តើអ្នកធ្លាប់គិតទេថា ខ្លួនក៏គង់នឹងចាស់ទ្រុឌទ្រោមដូចគេ?»', en: '"Did you never see an aged person bent double like a roof-bracket, walking leaning on a stick, with white hair and shattered teeth? Did you not realize aging was inevitable?"' },
          { boldKm: 'ទេវទូតទី ៣ (មនុស្សមានជំងឺធ្ងន់)', boldEn: '3rd Messenger: Gravely Ill Person', km: '«តើអ្នកធ្លាប់ឃើញមនុស្សមានជំងឺធ្ងន់ធ្ងរ ដេកដកដង្ហើមញាប់ ជួយខ្លួនឯងមិនរួចដែរទេ? តើអ្នកធ្លាប់គិតទេថា ខ្លួនក៏មិនអាចគេចផុតពីជំងឺបានឡើយ?»', en: '"Did you never see a sick person bedridden in acute agony, dependent on others for basic survival? Did it not occur to you that you too are subject to illness?"' },
          { boldKm: 'ទេវទូតទី ៤ (អ្នកទោសត្រូវធ្វើទារុណកម្ម)', boldEn: '4th Messenger: Convicted Criminal', km: '«តើអ្នកធ្លាប់ឃើញចោរ ឬអ្នកទោស ត្រូវស្តេចចាប់យកទៅធ្វើទារុណកម្ម កាត់ដៃកាត់ជើងដែរទេ? តើអ្នកធ្លាប់គិតទេថា អំពើអាក្រក់រមែងឱ្យផលជាទុក្ខក្នុងបច្ចុប្បន្ន និងបរលោក?»', en: '"Did you never see criminals seized and subjected to diverse floggings, mutilations, and executions? Did you not realize that evil deeds bear bitter fruit in this world and the next?"' },
          { boldKm: 'ទេវទូតទី ៥ (សាកសពមនុស្សស្លាប់)', boldEn: '5th Messenger: Deceased Corpse', km: '«តើអ្នកធ្លាប់ឃើញសាកសពមនុស្សស្លាប់ ហើមប៉ោង ឡើងខៀវ និងស្អុយរលួយដែរទេ? តើអ្នកធ្លាប់គិតទេថា ខ្លួនក៏គង់នឹងស្លាប់បែបនេះដូចគ្នា?»', en: '"Did you never see a corpse one, two, or three days dead, bloated, discolored, and oozing foul matter? Did it not occur to you that death is inescapable?"' }
        ]
      },
      {
        titleKm: '៤. លទ្ធផលបន្ទាប់ពីការសាកសួរ ៖ រួចផុតទៅសួគ៌ ឬធ្លាក់នរកតាមកម្ម',
        titleEn: '4. The Verdict: Instant Ascent to Heaven vs. Descending to Hell',
        contentKm: '— បើនឹកឃើញបុណ្យភ្លាម -> រួចផុតពីនរក ៖\nប្រសិនបើពេលស្តេចយមរាជសួរដេញដោល ស្រាប់តែបុគ្គលនោះនឹកឃើញកុសលដែលខ្លួនធ្លាប់ធ្វើ (ឧទាហរណ៍ ៖ «កាលនោះ ខ្ញុំធ្លាប់ឃើញមនុស្សចាស់ ខ្ញុំក៏កើតសេចក្តីអាណិត ហើយបានយកបាយទៅប្រគេនលោក និងចែកទាន») ចិត្តរបស់គាត់នឹងប្រែជា សោមនស្សជ្រះថ្លាភ្លាមៗ។ មួយរំពេចនោះ កុសលកម្មដែលលេចឡើង នឹងរំដោះគាត់ចេញពីយមលោក ហើយនាំវិញ្ញាណទៅចាប់កំណើតនៅឋានសួគ៌ភ្លាមៗតែម្តង!\n\n— បើនៅតែនឹកមិនឃើញ -> ធ្លាក់នរកតាមកម្ម ៖\nប្រសិនបើសួររហូតដល់អស់ទេវទូតទាំង ៥ ហើយ បុគ្គលនោះនៅតែស្ងៀម ឆ្លើយថា «ខ្ញុំភ្លេចខ្លួន ខ្ញុំរវល់តែស្រវឹងនិងសប្បាយ មិនបានសាងបុណ្យទេ» ពេលនោះស្តេចយមរាជនឹងអស់លទ្ធភាពជួយ ហើយមានព្រះរាជឱង្ការដោយក្តីអាណិតថា ៖\n«អំពើបាបនេះ មិនមែនម្តាយឪពុក ទេវតា ឬញាតិមិត្តណាបង្ខំឱ្យអ្នកធ្វើឡើយ គឺអ្នកបានធ្វើវាដោយខ្លួនឯង ដូច្នេះមានតែខ្លួនអ្នកប៉ុណ្ណោះ ដែលត្រូវទទួលផលនៃកម្មនោះ»។\nបន្ទាប់មក ស្តេចយមរាជក៏នៅស្ងៀម ហើយពួកយមបាលក៏ចាប់អូសបុគ្គលនោះ យកទៅទម្លាក់ក្នុងរណ្តៅនរក ដើម្បីរងទុក្ខវេទនាតាមទំហំកម្មរៀងៗខ្លួន។',
        contentEn: '— Recalling Merit -> Instant Liberation to Heaven:\nIf during Yama’s interrogation, the being suddenly recalls an act of generosity, compassion, or devotion performed in life (e.g., "Yes! Seeing that elder, I gave alms and revered the Dhamma"), wholesome joy (somanassa) instantly flashes across consciousness. That very moment, the wholesome karma seizes the mind, dissolving the hellish venue and precipitating immediate rebirth into a celestial plane!\n\n— Failing to Recall -> Plunging into Hell:\nIf through all five messengers the soul replies: "I was negligent, heedless, immersed in sensory pleasures; I made no merit," King Yama realizes he can assist no further. With heavy heart, Yama delivers the solemn truth:\n"This bad action was not committed by your mother, father, devas, or friends; you committed it yourself, and you alone must experience its fruit."\nKing Yama then falls silent, and the Yamapālas drag the being to the designated hell fire pit according to their own actions.'
      },
      {
        titleKm: '៥. យមរាជជាអ្នកណាពិតប្រាកដក្នុងគម្ពីរអភិធម្ម? (Vemānika-peta)',
        titleEn: '5. Who is King Yama in Reality? The Vemānika-peta Deity',
        contentKm: 'យោងតាមអដ្ឋកថា អភិធម្ម និងវិមានវត្ថុ ស្តេចយមរាជមិនមែនជាយក្សកំណាច ឬបិសាចនរកឡើយ ប៉ុន្តែជា «វេមានិកប្រេត» (Vemānika-peta) ឬជាទេវតាក្នុងជាន់ចាតុម្មហារាជិកា ដែលមានបុណ្យផង និងបាបចម្រុះគ្នា ៖\n\n១. សោយសម្បត្តិទិព្វ ៖ ពេលខ្លះសោយសម្បត្តិទិព្វក្នុងវិមានកែវដូចទេវតា (ដោយសារបុណ្យដែលធ្លាប់ធ្វើ)។\n២. សោយទុក្ខវេទនា ៖ ពេលខ្លះត្រូវចុះមកអង្គុយស៊ើបសួរក្តី និងឃើញទុក្ខវេទនារបស់សត្វនរក (ជាផលវិបាកកម្ម)។\n៣. បំណងប្រាថ្នារបស់យមរាជ ៖ គម្ពីរបានបញ្ជាក់ថា ព្រះបាទយមរាជតែងតែមានព្រះទ័យនឿយណាយនឹងការងារនេះ ហើយតែងបួងសួងថា «សូមឱ្យអាត្មាអញរួចផុតពីភពនេះ បានទៅកើតជាមនុស្ស បានជួបព្រះពុទ្ធ និងបានស្តាប់ព្រះធម៌ដើម្បីរួចផុតចាកទុក្ខផងចុះ!»',
        contentEn: 'According to Abhidhamma commentaries and the Vimānavatthu, King Yama is neither an evil demon nor a devil; he is a Vemānika-peta (mansion-dwelling spirit) or a deity in the Cātumahārājikā realm of mixed karma:\n\n1. Celestial Bliss: During certain periods, he enjoys divine pleasure in a crystal mansion like a Deva (fruits of generosity).\n2. Karmic Duty: During other periods, he must preside over the sorrowful tribunal, forced to witness the terrifying agony of hell realms (karmic retribution).\n3. King Yama’s Heartfelt Longing: The canon records that King Yama grows utterly weary of witnessing endless samsaric suffering and perpetually prays: "Oh, that I might attain human status, that a Tathāgata might appear in the world, and that I might sit at his feet to listen to the Dhamma and end all suffering!"'
      }
    ]
  },

  // GEM 17: Yamapālas in Hell: Sentient Beings vs. Kamma Projections (Kathāvatthu & Sammohavinodanī)
  {
    id: 'yamapala-nature',
    num: 17,
    open: false,
    category: 'death',
    categoryKm: '💀 មរណាសន្នសម័យ & យមបាល',
    categoryEn: '💀 Yamapālas: Sentient or Illusions?',
    ref: 'គម្ពីរកថាវត្ថុ (ជំពូកទី ២០), វិភង្គអដ្ឋកថា (សម្មោហវិនោទនី) & ទេវទូតសូត្រ',
    paliQuote: 'អត្ថិ និរយេសុ និរយបាលា... ចេតនាសម្បយុត្តា សត្តា ឯវ (ពួកនាយនិរយបាលក្នុងនរកមានពិតប្រាកដ ជាសត្វមានជីវិតប្រកបដោយចេតនាពិតមែន មិនមែនជារូបយន្តឡើយ)',
    questionKm: 'យោងតាមគម្ពីរអភិធម្ម និងវិភង្គអដ្ឋកថា តើ «យមបាល» (ពួកនាយនិរយបាលដែលធ្វើទារុណកម្មសត្វនរក) គឺជាសត្វមានជីវិតពិតប្រាកដ ឬគ្រាន់តែជារូបរាងដែលកើតចេញពីកម្លាំងកម្ម (កម្មជរូប) របស់សត្វនរកផ្ទាល់?',
    questionEn: 'According to Abhidhamma and the Vibhaṅga Commentary (Sammohavinodanī), are Yamapālas (hell wardens) real sentient beings or merely soulless karmic illusions (kammaja-rūpa)?',
    shortKm: 'យមបាលនរក ៖ សត្វមានជីវិត ឬរូបយន្តកម្ម?',
    shortEn: 'Yamapālas: Sentient Beings vs. Kamma Machines',
    essenceKm: 'នៅក្នុងគម្ពីរអភិធម្ម (គម្ពីរកថាវត្ថុ ជំពូក ២០ និងវិភង្គអដ្ឋកថា សម្មោហវិនោទនី) ថេរវាទផ្លូវការបានបញ្ជាក់យ៉ាងម៉ឺងម៉ាត់ថា ពួកនាយនិរយបាល (យមបាល) គឺជា «សត្វមានជីវិតពិតប្រាកដ (Sentient Beings)» មានចិត្ត ចេតសិក និងវិញ្ញាណ មិនមែនជារូបយន្តកម្មគ្មានវិញ្ញាណ (ដូចទស្សនៈនិកាយអន្ធកៈ) ឡើយ។ ពួកគេជាជំពូក «វេមានិកប្រេត» ឬជាបរិវារបស់ស្តេចចាតុម្មហារាជិកា ដែលកាលពីជាតិមុនបានធ្វើបុណ្យខ្លះ តែមានចិត្តសប្បាយរីករាយនឹងការធ្វើបាប និងឃើញអ្នកដទៃឈឺចាប់ (ទោសៈក្រាស់)។ រូបកាយរបស់ពួកគេធន់ទ្រាំនឹងភ្លើងនរកដោយកម្លាំងកម្មវិបាក (ដូចត្រីក្នុងទឹក ដង្កូវក្នុងលាមក) ប៉ុន្តែរាល់ការកាប់ចាក់ធ្វើទារុណកម្មសត្វនរក សុទ្ធតែជា «អកុសលទោសចិត្តធ្ងន់ធ្ងរ» ដែលនឹងទាញទម្លាក់ពួកគេឱ្យក្លាយជាសត្វនរកដែលត្រូវគេកាប់ចាក់វិញ ក្នុងភពបន្ទាប់ដោយចៀសមិនរួចឡើយ!',
    essenceEn: 'In the Abhidhamma (Kathāvatthu ch. 20 and Sammohavinodanī), orthodox Theravāda definitively establishes that Yamapālas (hell wardens) are genuine sentient beings (satta) endowed with mind, mental factors, and volition — rejecting the Andhaka view that they are soulless robotic karmic projections (kammaja-rūpa). They belong to a distinct class of Vemānika-petas or Cātumahārājikā demonic retinues who performed merit but harbored sadistic delight in cruelty and malice. Their bodies are biologically conditioned by kamma-vipāka to endure the extreme heat of hell without suffering (like fish in water or maggots in dung). Crucially, every act of torture they inflict generates fresh, severe unwholesome karma (dosa-mūla-citta), inevitably plunging them into becoming the tortured hell beings in their next existence!',
    practicalKm: 'ការមានចិត្តរីករាយពេលឃើញអ្នកដទៃរងទុក្ខ (Sadism) ការគុំកួន ការធ្វើទារុណកម្មសត្វ ឬការខឹងក្រោធជាប្រចាំ គឺជាគ្រាប់ពូជនៃកម្មដ៏គ្រោះថ្នាក់បំផុត។ ចូរកុំបណ្តោយឱ្យចិត្តជាប់ជំពាក់នឹង «ទោសៈ និងការចង់ឈ្នះចង់ផ្ចាញ់» ព្រោះទោសៈនេះ មិនត្រឹមតែបំផ្លាញអ្នកដទៃប៉ុណ្ណោះទេ ប៉ុន្តែវានឹងបង្កើតជាខ្សែច្រវាក់កម្មចងត្រឡប់មកធ្វើបាបខ្លួនឯងវិញយ៉ាងសាហាវបំផុតក្នុងសង្សារវដ្ត!',
    practicalEn: 'Deriving pleasure from the suffering of others, harbored malice, animal abuse, or chronic anger are lethal karmic seeds. Never indulge anger or vengeance; cruelty does not merely harm the victim, but constructs an unbreakable chain of negative karma that boomerangs back as torment upon oneself in future existences.',
    links: [
      { to: '/questions', km: 'សំណួរ–ចម្លើយ ៣៧', en: 'Q&A 37' },
      { to: '/my-gems#king-yama-devaduta', km: 'ស្តេចយមរាជ & ទេវទូត ៥', en: 'King Yama & 5 Devadūta' },
      { to: '/realms', km: 'ភពទាំង ៣១ ជាន់ & នរក', en: '31 Planes & Hell Realms' },
      { to: '/kamma', km: 'ច្បាប់កម្មផល & វិបាក', en: 'Kamma & Vipāka' }
    ],
    sections: [
      {
        titleKm: '១. ជម្លោះទស្សនវិជ្ជាក្នុងគម្ពីរកថាវត្ថុ (The Great Debate in Kathāvatthu)',
        titleEn: '1. The Great Philosophical Debate in Kathāvatthu (Chapter 20)',
        contentKm: 'នៅក្នុងគម្ពីរកថាវត្ថុ មានការជជែកដេញដោលគ្នាយ៉ាងក្តៅគគុក រវាងនិកាយពុទ្ធសាសនាបុរាណពីរ ៖\n\n— ទស្សនៈរបស់និកាយអន្ធកៈ (Andhaka School) ៖\nនិកាយនេះយល់ថា នៅក្នុងនរក គ្មានសត្វមានជីវិតដទៃក្រៅពីសត្វនរកឡើយ។ ពួកយមបាល ដែកកណ្ដៀវ អាវុធ ឆ្កែនរក និងក្អែកដែក សុទ្ធសឹងតែជា «កម្មជរូប» (Kamma-produced Matter) ឬជារូបយន្តគ្មានចិត្តវិញ្ញាណ (យន្តរូប) ដែលកើតចេញពីកម្មអាក្រក់របស់សត្វនរកផ្ទាល់ ដើម្បីមកធ្វើទារុណកម្មសត្វនរកនោះ (ប្រៀបដូចជាស្រមោល ឬមនុស្សយន្តនៃកម្មផល)។\n\n— ទស្សនៈផ្លូវការរបស់ថេរវាទ (Orthodox Theravāda) ៖\nព្រះអរហន្តមោគ្គល្លីបុត្តតិស្សត្ថេរ បានបដិសេធទស្សនៈខាងលើ ហើយបញ្ជាក់យ៉ាងម៉ឺងម៉ាត់ថា យមបាលគឺជាសត្វមានជីវិតពិតប្រាកដ (អត្ថិ និរយេសុ និរយបាលា)។',
        contentEn: 'In the Kathāvatthu (one of the 7 books of the Abhidhamma Piṭaka), a historic debate unfolded between two early Buddhist schools:\n\n— The Andhaka School View:\nAsserted that there are no sentient beings in hell except the damned hell denizens themselves. They argued that Yamapālas, hell-hounds, iron crows, and cauldrons are merely "Kammaja-rūpa" (matter materialized by the victim’s own negative kamma) — soulless robotic automata designed to execute torture.\n\n— The Orthodox Theravāda Stance:\nVen. Moggaliputtatissa Mahāthera decisively refuted this view, confirming: "Atthi nirayesu nirayapālā" — hell wardens are genuine living, conscious entities (satta).'
      },
      {
        titleKm: '២. ហេតុផលតាមអភិធម្ម ៖ ហេតុអ្វីយមបាលត្រូវតែជា «សត្វមានជីវិត»?',
        titleEn: '2. Abhidhamma Evidence: Why Yamapālas Are Living Sentient Entities',
        contentKm: 'យោងតាមអដ្ឋកថាសម្មោហវិនោទនី និងមជ្ឈិមនិកាយអដ្ឋកថា យមបាលមិនអាចជារូបយន្តគ្មានវិញ្ញាណបានឡើយ ដោយសារកត្តា ២ យ៉ាង ៖',
        contentEn: 'According to the Sammohavinodanī (Vibhaṅga Commentary) and Majjhima Nikāya Aṭṭhakathā, Yamapālas cannot be insentient matter for two fundamental reasons:',
        points: [
          { boldKm: 'ក. មានការប្រាស្រ័យទាក់ទង និងចេតនា (Cetanā & Viññatti)', boldEn: 'A. Volition & Communication (Cetanā & Viññatti)', km: 'ក្នុងទេវទូតសូត្រ ពួកយមបាលបានចាប់ក្រៀកសត្វនរក នាំយកមកថ្វាយស្តេចយមរាជ និយាយទូលរាយការណ៍ និងសួរដេញដោល។ តាមក្បួនអភិធម្ម ការនិយាយស្តី (វចីវិញ្ញត្តិ) និងកាយវិការធ្វើទារុណកម្ម (កាយវិញ្ញត្តិ) កើតចេញពី «ចិត្តជរូប» សុទ្ធសាធ។ បើជារូបយន្តគ្មានវិញ្ញាណ វាមិនអាចមានចេតនាបង្កើតពាក្យសម្តី ចងកំហឹង ឬឆ្លើយឆ្លងប្រកបដោយស្មារតីបានឡើយ។', en: 'In the Devadūta Sutta, Yamapālas physically seize hell denizens, present them before King Yama, deliver verbal reports, and converse. In Abhidhamma, bodily intimation (kāya-viññatti) and vocal intimation (vacī-viññatti) require Cittaja-rūpa animated by conscious intention (cetanā). Non-sentient matter cannot formulate purposeful speech or intentional cruelty.' },
          { boldKm: 'ខ. កំណើត និងប្រភេទនៃភពរបស់យមបាល', boldEn: 'B. Realm & Karmic Heritage of Yamapālas', km: 'ពួកយមបាលជាក្រុមអបាយភូមិពិសេស ស្ថិតក្នុងជំពូក វេមានិកប្រេត (Vemānika-peta) ឬជាពពួកយក្ស/អសុរកាយ ដែលជាបរិវារបស់ស្តេចចាតុម្មហារាជិកា (ដូចជាពួកកុម្ភណ្ឌ)។ ពួកគេបានសាង «កម្មចម្រុះដ៏ចម្លែក» កាលពីនៅជាមនុស្ស គឺបានធ្វើបុណ្យខ្លះ ប៉ុន្តែមានចិត្តចូលចិត្តធ្វើបាបសត្វ មានសេចក្តីសប្បាយរីករាយពេលឃើញអ្នកដទៃឈឺចាប់ ឬមានទោសៈក្រាស់ក្រែល។', en: 'Yamapālas belong to a unique sub-category of the woeful planes: Vemānika-petas or demonic Yakṣa/Kumbhaṇḍa retinues under the Cātumahārājikā devas. They are humans who did some charity, but indulged in sadistic pleasure witnessing torture, animal cruelty, or possessed severe habitual wrath (dosa).' }
        ]
      },
      {
        titleKm: '៣. ចម្ងល់ធំ ៖ ហេតុអ្វីយមបាលមិនរលាកភ្លើងនរក?',
        titleEn: '3. The Great Mystery: Why Aren’t Yamapālas Burned by Hellfire?',
        contentKm: 'ប្រសិនបើពួកគេជាសត្វមានជីវិត តើហេតុអ្វីបានជាពួកគេអាចដើរជាន់កម្រាលដែកដុតក្រហមច្រាល និងកាន់ច្រវាក់ភ្លើងធ្វើទារុណកម្មសត្វនរកបាន ដោយមិនរងទុក្ខវេទនា ឬរលាកខ្លួនឯង?\n\nព្រះអដ្ឋកថាចារ្យបានពន្យល់តាមរយៈ «ធម្មជាតិនៃកម្មវិបាក» ដោយប្រៀបធៀបនឹងសត្វលោកក្នុងធម្មជាតិ ៖',
        contentEn: 'If they are flesh-and-blood living beings, how can they stride barefoot across white-hot iron plates and wield blazing iron chains without suffering agony or burning themselves?\n\nThe ancient commentators resolve this by the law of Karmic Adaptation (Kamma-vipāka), drawing brilliant natural parallels:',
        points: [
          { boldKm: 'ត្រីរស់ក្នុងទឹក', boldEn: 'Fish in Water', km: 'មនុស្សធ្លាក់ចូលទឹកជ្រៅនឹងលង់ស្លាប់ ប៉ុន្តែត្រីរស់នៅ និងហែលក្នុងទឹកយ៉ាងសុខស្រួល។', en: 'Humans submerged in deep oceans drown, yet fish breathe, thrive, and dwell effortlessly.' },
          { boldKm: 'ដង្កូវរស់ក្នុងលាមក', boldEn: 'Maggots in Dung', km: 'មនុស្សខ្ពើមលាមក និងមេរោគ ប៉ុន្តែដង្កូវចាត់ទុកលាមកជាផ្ទះ និងជាអាហារដ៏មានឱជារស។', en: 'Humans find rotting filth repellent, yet maggots regard it as their palace and gourmet banquet.' },
          { boldKm: 'សត្វបក្សីហើរលើមេឃ', boldEn: 'Birds in the Sky', km: 'មនុស្សធ្លាក់ពីលើមេឃនឹងបាក់ឆ្អឹងស្លាប់ ប៉ុន្តែសត្វបក្សីប្រើខ្យល់ដើម្បីហោះហើរយ៉ាងរលូន។', en: 'Humans falling from altitude perish, yet birds master the currents with grace.' },
          { boldKm: 'រូបកាយស៊ាំនឹងភ្លើង', boldEn: 'Immunity to Hellfire', km: 'យ៉ាងណាមិញ រូបកាយ (កម្មជរូប) របស់ពួកយមបាល ត្រូវបានកសាងឡើងដោយអំណាចកម្មពិសេស ដែលធ្វើឱ្យ កោសិការបស់ពួកគេស៊ាំ និងធន់ទ្រាំនឹងកម្ដៅភ្លើងនរក។ ភ្លើងនរកមិនអាចដុតរោលរូបកាយរបស់ពួកគេបានឡើយ ប៉ុន្តែវាដុតកម្ទេចតែរូបកាយរបស់សត្វនរកដែលជាអ្នកមកទទួលទោសប៉ុណ្ណោះ។', en: 'Just so, the physical matter (kammaja-rūpa) of Yamapālas is biologically configured by specific kamma to be impervious to hellfire. The flames cannot scorch their tissues; the fire burns only the condemned beings whose karma makes them vulnerable.' }
        ]
      },
      {
        titleKm: '៤. តើការធ្វើទារុណកម្មសត្វនរក នាំឱ្យយមបាលបាបដែរឬទេ?',
        titleEn: '4. The Karmic Retribution: Do Hell Wardens Incur Demerit?',
        contentKm: 'យោងតាមគម្ពីរអភិធម្ម ៖ បាបយ៉ាងធ្ងន់ធ្ងរ!\n\n១. ទោសចិត្តប្រចាំថ្ងៃ ៖ រាល់ពេលដែលយមបាលយកលំពែងចាក់ យកពូថៅកាប់ ឬច្រកទឹកទង់ដែងក្តៅទៅក្នុងមាត់សត្វនរក ចិត្តរបស់ពួកគេពោរពេញដោយ ទោសចិត្ត (ទោសមូលចិត្ត ប្រកបដោយបដិឃៈ និងទោមនស្ស)។\n២. ការសាងកម្មថ្មី ៖ ពួកគេកំពុងបង្កើត អកុសលកម្មថ្មីៗ ជារៀងរាល់ថ្ងៃឥតឈប់ឈរ។\n៣. ផលវិបាកចុងក្រោយ ៖ ហេតុដូច្នេះហើយ នៅពេលដែលពួកគេអស់អាយុ ឬអស់ផលបុណ្យចាស់ដែលទ្រទ្រង់ក្នុងឋានៈជាយមបាល ថាមពលនៃទោសកម្មដែលបានកាប់ចាក់សត្វនរកទាំងនោះ នឹងទាញទម្លាក់ពួកគេឱ្យ ក្លាយទៅជាសត្វនរកដែលត្រូវគេកាប់ចាក់ធ្វើទារុណកម្មវិញ ក្នុងភពបន្ទាប់ដោយចៀសមិនរួចឡើយ!',
        contentEn: 'According to the Abhidhamma: Demerit of the most catastrophic order!\\n\\n1. Daily Toxic Rage: Every time a Yamapāla impales, hacks, flogs, or pours boiling molten copper down a victim\'s throat, their consciousness is dominated by Dosa-mūla-citta (hatred, aversion, and sadistic cruelty).\\n2. Continuous Fresh Karmic Debt: They are generating horrific new unwholesome karma every single waking moment.\\n3. The Inevitable Karmic Reversal: When their sustaining lifespan or past merit as a warden expires, the immense mountain of cruelty they generated drags them down: they become the helpless hell beings being butchered and boiled in their very next rebirth!'
      }
    ]
  },

  // GEM 18: Hell Denizens Body Mechanics: Why They Don't Die & Instant Regeneration (Abhidhamma & Visuddhimagga)
  {
    id: 'hell-body-regeneration',
    num: 18,
    open: false,
    category: 'death',
    categoryKm: '💀 មរណាសន្នសម័យ & នរក',
    categoryEn: '💀 Hell Body Regeneration',
    ref: 'គម្ពីរព្រះអភិធម្ម, វិសុទ្ធិមគ្គ & ទេវទូតសូត្រ (MN 130)',
    paliQuote: 'ន ច តាវ កាលំ ករោតិ យាវ ន តំ បាបកម្មំ ខីយតិ (សត្វនរកនោះ រមែងមិនធ្វើមរណកាលឡើយ ដរាបណាអំពើបាបអកុសលនោះ មិនទាន់អស់កម្លាំងនៅឡើយ)',
    questionKm: 'យោងតាមគម្ពីរអភិធម្ម និងវិសុទ្ធិមគ្គ តើសត្វនរកដែលត្រូវយមបាលកាប់ចិញ្ច្រាំ ឬដុតរលាយសាច់អស់ ហេតុអ្វីបានជាមិនស្លាប់បាត់បង់ជីវិត ហើយរូបកាយអាចកើតឡើងវិញភ្លាមៗមួយរំពេច (ឱបបាតិកកំណើត) យ៉ាងដូចម្ដេច?',
    questionEn: 'According to Abhidhamma and Visuddhimagga, why don\'t hell denizens die when chopped into pieces or incinerated, and how does their body regenerate instantaneously (Opapātika)?',
    shortKm: 'រូបកាយសត្វនរក ៖ ហេតុអ្វីមិនស្លាប់ & កើតឡើងវិញភ្លាមៗ?',
    shortEn: 'Hell Denizens: Immortal Torture & Instant Regeneration',
    essenceKm: 'នៅក្នុងគម្ពីរព្រះអភិធម្ម និងវិសុទ្ធិមគ្គ មូលហេតុដែលសត្វនរកត្រូវយមបាលកាប់ចិញ្ច្រាំជាកង់ៗ ឬដុតរលាយក្លាយជាផេះហើយ នៅតែមិនស្លាប់បាត់បង់ជីវិត គឺដោយសារតែ «អាយុជីវិតរបស់សត្វនរក មិនបានតោងទាក់លើសរីរាង្គកាយសាច់ឈាមឡើយ ប៉ុន្តែតោងទាក់ទាំងស្រុងលើទម្ងន់នៃអកុសលកម្ម (Kammakkhaya)»។ ពួកគេកើតជា «ឱបបាតិកៈ» ដែលរូបកាយផ្សំឡើងពី កម្មជរូប ១០០%។ រាល់ពេលរូបកាយត្រូវកម្ទេច រូបកលាបៈថ្មីៗ (កាយទសកកលាបៈ ភាវទសកកលាបៈ និងវត្ថុទសកកលាបៈ) ក៏ផុសឡើងជំនួសភ្លាមៗក្នុងល្បឿននៃចលនាចិត្ត (ដូចដុំបារតរាវរត់ផ្គុំគ្នាវិញ)។ សត្វនរកមិនអាចសន្លប់ឡើយ ដោយសារមានកាយបសាទរូបក្រាស់ឃ្មឹកទូទាំងខ្លួន និងទទួលទុក្ខសហគតកាយវិញ្ញាណពេញទំហឹង ១០០% ដោយគ្មានយន្តការកាត់ផ្តាច់ការឈឺចាប់ឡើយ។',
    essenceEn: 'In Abhidhamma and Visuddhimagga, hell denizens do not die despite being chopped to mincemeat or melted to ash because their lifespan does not depend on biological organs, but exclusively on the exhaustion of bad karma (Kammakkhaya). Possessing an instantaneous spontaneous rebirth (Opapātika-yoni), their bodies consist 100% of kamma-born matter (kammaja-rūpa). Whenever incinerated or sliced, new rupa-kalapas (kāya-dasaka, bhāva-dasaka, vatthu-dasaka) precipitate instantly at the speed of thought (like droplet clusters of liquid mercury). Furthermore, hell beings can never lose consciousness or faint: their neural sensitivity (kāya-pasāda-rūpa) is omnipresent and exceptionally dense, continuously sustaining intense painful bodily consciousness (dukkha-sahagata-kāyaviññāṇa) without any shock-numbing relief.',
    practicalKm: 'ច្បាប់នៃកម្ម គឺជាច្បាប់រូបវិទ្យាផ្លូវចិត្តដ៏តឹងរ៉ឹងបំផុត ដែលគ្មានការលើកលែង ឬកាត់បន្ថយទោសដោយចៃដន្យឡើយ។ ការប្រព្រឹត្តអំពើបាបដោយគិតថា «ស្លាប់ទៅចប់រឿង» គឺជាការភាន់ច្រឡំដ៏គ្រោះថ្នាក់បំផុត។ ទុក្ខវេទនាក្នុងអបាយភូមិ គ្មានឱកាសសូម្បីតែសន្លប់មួយវិនាទីឡើយ។ ហេតុនេះ ការមានសេចក្តីស្អប់ខ្ពើម និងខ្លាចរអាក្នុងអំពើបាប (ហិរិ និង ឱត្តប្បៈ) គឺជាខែលការពារជីវិតដ៏ពិសិដ្ឋបំផុតដែលត្រូវរក្សាឱ្យបានរាល់ថ្ងៃ។',
    practicalEn: 'The law of kamma is an exacting psychophysical reality with zero arbitrary pardons. The delusion that death ends all suffering is perilous: hellish suffering permits not even a microsecond of unconscious respite. Cultivating moral shame (hiri) and moral dread of evil (ottappa) remains our paramount daily spiritual armor.',
    links: [
      { to: '/questions', km: 'សំណួរ–ចម្លើយ ៣៨', en: 'Q&A 38' },
      { to: '/my-gems#yamapala-nature', km: 'យមបាលនរក ៖ សត្វមានជីវិត ឬរូបយន្តកម្ម?', en: 'Yamapālas Nature' },
      { to: '/my-gems#king-yama-devaduta', km: 'ស្តេចយមរាជ & ទេវទូត ៥', en: 'King Yama & 5 Devadūta' },
      { to: '/realms', km: 'ភពទាំង ៣១ ជាន់ & នរក', en: '31 Planes & Hell Realms' },
      { to: '/kamma', km: 'ច្បាប់កម្មផល & វិបាក', en: 'Kamma & Vipāka' }
    ],
    sections: [
      {
        titleKm: '១. ហេតុអ្វីបានជាមិនស្លាប់? (អំណាចនៃជីវិតិន្ទ្រិយរូប និងកម្មសេសសល់)',
        titleEn: '1. Why Don\'t They Die? (Lifespan Anchored Exclusively on Kamma)',
        contentKm: 'ដើម្បីយល់ពីរឿងនេះ ត្រូវពិនិត្យមើលភាពខុសគ្នារវាងការស្លាប់របស់មនុស្ស និងការស្លាប់របស់សត្វនរក ៖\n\n— មនុស្សលោកស្លាប់ដោយ «រូបកាយខូចខាត» (Physical Organ Failure) ៖\nជីវិតរបស់មនុស្សពឹងផ្អែកលើបច្ច័យ ៤ គឺ កម្ម ចិត្ត ឧតុ និងអាហារ។ កាលណាបេះដូងត្រូវគេចាក់ធ្លុះ ក្បាលត្រូវកាត់ផ្តាច់ ឬបាត់បង់ឈាមអស់ រូបកាយ (ហទយវត្ថុ និង កាយទ្វារ) មិនអាចទ្រទ្រង់ចរន្តឈាម និងខ្យល់ដង្ហើមបានឡើយ។ ពេលរូបខូច វិញ្ញាណក៏មិនអាចតាំងនៅបាន ទើបដាច់ខ្យល់ស្លាប់។\n\n— សត្វនរកស្លាប់ដោយ «កម្មអស់» តែមួយគត់ (Kammakkhaya) ៖\nនៅក្នុងទេវទូតសូត្រ ព្រះសម្មាសម្ពុទ្ធបានត្រាស់បញ្ជាក់នូវគោលការណ៍ដែកនៃច្បាប់ធម្មជាតិថា ៖ «ន ច តាវ កាលំ ករោតិ យាវ ន តំ បាបកម្មំ ខីយតិ» (សត្វនរកនោះ រមែងមិនធ្វើមរណកាលឡើយ ដរាបណាអំពើបាបអកុសលនោះ មិនទាន់អស់កម្លាំងនៅឡើយ)។\n\nជីវិតិន្ទ្រិយរូប (រូបដែលជាកម្លាំងទ្រទ្រង់ជីវិត) របស់សត្វនរក ត្រូវបានបង្កើតឡើងដោយអំណាចនៃអកុសលចេតនាដ៏ធ្ងន់ធ្ងរ។ គោលដៅនៃភពនរក គឺការសោយទុក្ខវេទនា (វិបាកទុករស្វាទ) ឱ្យសក្តិសមនឹងទោសកំហុស។ ប្រសិនបើកាប់ដាច់ក្បាលហើយស្លាប់បាត់ នោះមានន័យថាការសោយកម្មត្រូវបានកាត់ផ្តាច់ ដែលជាការខុសពីច្បាប់កម្មផល។ ដូច្នេះ ទោះបីជារូបកាយត្រូវរលាយខ្ទេចខ្ទីដល់កម្រិតណាក៏ដោយ ក៏កម្លាំងនៃកម្មអាក្រក់នៅតែចងភ្ជាប់វិញ្ញាណឱ្យជាប់នឹងទីនោះជានិច្ច មិនអាចស្លាប់រួចខ្លួនឡើយ។',
        contentEn: 'To comprehend this, one must contrast human mortality with that of hell beings:\n\n— Humans Die from Physical Organ Failure:\nHuman biological life relies on four contributing factors: Kamma, Mind (Citta), Climate/Temperature (Utu), and Nutrition (Āhāra). When the heart is punctured, the brain destroyed, or blood lost, the biological base (hadaya-vatthu & bodily faculty) fails to sustain circulation and respiration. When the physical substratum shatters, consciousness ceases in that body, causing death.\n\n— Hell Beings Die SOLELY by Exhaustion of Karma (Kammakkhaya):\nIn the Devadūta Sutta (MN 130), the Buddha declares the unbending iron law of existence:\n"Na ca tāva kālaṃ karoti yāva na taṃ pāpakammaṃ khīyati"\n(They do not pass away so long as that evil karma has not been completely exhausted).\n\nThe life-faculty matter (jīvitindriya-rūpa) of hell beings is directly forged and maintained by heinous unwholesome volition. The intrinsic cosmological function of hell is karmic retribution. If decapitation caused final death, their retribution would be cut short—violating the universal conservation of karmic law. Thus, no matter how utterly pulverized or incinerated their anatomy becomes, negative karmic momentum relentlessly anchors their consciousness to that realm.'
      },
      {
        titleKm: '២. យន្តការនៃការបង្កើតរូបកាយឡើងវិញភ្លាមៗ (Instant Opapātika Regeneration)',
        titleEn: '2. The Mechanics of Instantaneous Body Regeneration (Opapātika & Rūpa-Kalāpa)',
        contentKm: 'ដំណើរការដែលរូបកាយសត្វនរកកកើតឡើងវិញមួយរំពេច ត្រូវបានពន្យល់តាមក្បួនបរមត្ថវិជ្ជា ដូចខាងក្រោម ៖',
        contentEn: 'The instantaneous reconstitution of a hell being\'s body is systematically explained in Abhidhamma metaphysics through three principles:',
        points: [
          {
            boldKm: 'ក. ធម្មជាតិនៃ «ឱបបាតិកកំណើត» (Opapātika Yoni)',
            boldEn: 'A. Spontaneous Manifestation (Opapātika Yoni)',
            km: 'សត្វនរកមិនបានកើតចេញពីផ្ទៃម្តាយ ឬពងឡើយ ប៉ុន្តែកើតជា «ឱបបាតិកៈ» (ផុសឡើងពេញរូបរាងភ្លាមៗ)។ រូបកាយរបស់ពួកគេមិនមែនផ្សំឡើងពីកោសិកាជីវសាស្ត្រដែលត្រូវចំណាយពេលលូតលាស់ ឬជួសជុលរបួសដូចស្បែកមនុស្សឡើយ។ ផ្ទុយទៅវិញ គ្រប់រូបធាតុទាំងអស់ក្នុងខ្លួនសត្វនរកសុទ្ធតែជា កម្មជរូប (Rūpa produced by Kamma) ១០០%។',
            en: 'Hell beings are not born from a womb or egg, but appear spontaneously full-grown (opapātika). Their bodies do not consist of cellular organic tissues that require cellular mitosis, healing, or medical grafts like human skin. Instead, 100% of their physical matter is directly generated by Karma (kammaja-rūpa).'
          },
          {
            boldKm: 'ខ. ដំណើរការនៃរូបកលាបៈ (Rūpa-kalāpa Mechanics)',
            boldEn: 'B. Subatomic Matter Clusters (Rūpa-kalāpa Mechanics)',
            km: 'នៅក្នុងអភិធម្ម រូបកើតអំពីកម្ម កើតឡើងរៀងរាល់ «ឧប្បាទខណៈ» (Uppāda-khaṇa) នៃចិត្ត (រាប់ពាន់លានដងក្នុងមួយវិនាទី)។ នៅពេលដែលពូថៅ ឬដាវកាប់កាត់កាយសាច់ដាច់ជាកំណាត់ៗ ឬភ្លើងនរកដុតរលាយដូចទឹក ៖ រូបចាស់ត្រូវបានកម្ទេចរលត់ទៅដោយសារតេជោធាតុ និងវាយោធាតុខាងក្រៅ ប៉ុន្តែខ្សែទឹកនៃ «អកុសលវិបាកចិត្ត» នៅតែហូរបន្តមិនឈប់។ ចិត្តនោះបានបង្គាប់ឱ្យ កម្មជកលាបៈ ថ្មីៗ (មាន កាយទសកកលាបៈ ដែលជាសរសៃប្រសាទទទួលការឈឺចាប់, ភាវទសកកលាបៈ និង វត្ថុទសកកលាបៈ) ផុសឡើងជំនួសកន្លែងចាស់ភ្លាមៗមួយរំពេច។',
            en: 'In Abhidhamma, kamma-produced matter is generated at every arising sub-moment (uppāda-khaṇa) of consciousness (billions of times per second). When demonic axes cleave their limbs or molten fire liquefies their flesh: previous matter disintegrates, yet the torrential continuum of unwholesome resultant consciousness (akusala-vipāka-citta) never stops. That karmic energy commands new kammaja-kalāpas (including kāya-dasaka kalāpas—the very neural pain receptors—along with bhāva-dasaka and vatthu-dasaka) to crystallize instantaneously in place.'
          },
          {
            boldKm: 'គ. ឧបមាក្នុងគម្ពីរអដ្ឋកថា (Liquid Mercury & Sañjīva Wind)',
            boldEn: 'C. Commentarial Analogies (Liquid Mercury & Sañjīva Wind)',
            km: 'ព្រះអដ្ឋកថាចារ្យបានលើកឧបមា ២ យ៉ាង ៖ (១) ឧបមាដុំបារតរាវ ឬដំណក់ទឹក ៖ ដូចជាដុំបារតរាវ ឬដំណក់ទឹកដែលត្រូវគេយកដំបងវាយបំបែកជាភាគល្អិតខ្ចាត់ខ្ចាយ ប៉ុន្តែគ្រាន់តែដកដំបងចេញភ្លាម ដំណក់ទឹកទាំងនោះក៏ស្រូបទាញគ្នារត់មកផ្គុំជាដុំរូបរាងដើមវិញមួយរំពេច (២) ឧបមាដើមចេក ឬស្មៅដែលត្រូវកាប់ ៖ ក្នុងនរកសញ្ជីវៈ (Sañjīva Naraka) ពេលសត្វនរកត្រូវគេកាប់ចិញ្ច្រាំធ្លាក់ជាកង់ៗលើកម្រាលដែក ស្រាប់តែមាន «កម្មជវាត» (ខ្យល់កម្មត្រជាក់ដ៏ចម្លែក) បក់កាត់ពីលើ រូបកាយសាច់ឈាម ឆ្អឹង ក្បាល ដៃជើង ក៏ស្រូបទាញផ្គុំគ្នាវិញភ្លាមៗ ហើយក្រោកឈរស្រែកទ្រហោយំរងទុក្ខបន្តទៀត។',
            en: 'Ancient commentators provide two luminous analogies: (1) Liquid Mercury (Quick-Silver) or Water Droplets: When struck with a rod, mercury shatters into hundreds of micro-droplets, but the instant the force leaves, surface tension immediately fuses them back into a single droplet; (2) Cut Reeds & Sañjīva Wind: In the Sañjīva Hell, as soon as victims are sliced into fragments, a cold karmic wind (kammaja-vāta) sweeps across, causing flesh, bone, and limbs to reconstitute instantly, standing upright to suffer anew.'
          }
        ]
      },
      {
        titleKm: '៣. ការប្រៀបធៀបរូបកាយមនុស្ស និងរូបកាយសត្វនរក',
        titleEn: '3. Comparative Table: Human Body vs. Hell Denizen Body',
        contentKm: 'ភាពខុសគ្នាជាមូលដ្ឋានរវាងរូបកាយមនុស្ស និងរូបកាយសត្វនរក តាមក្បួនព្រះអភិធម្ម ៖',
        contentEn: 'Fundamental contrasts between human physiology and hell denizen embodiment according to Abhidhamma:',
        points: [
          {
            boldKm: 'កំណើត (Yoni)',
            boldEn: 'Mode of Origin (Yoni)',
            km: 'មនុស្សលោក ៖ គព្ភសេយ្យកៈ (កើតក្នុងផ្ទៃម្តាយ មានកោសិកាជីវសាស្ត្រលូតលាស់) | សត្វនរក ៖ ឱបបាតិកៈ (ផុសឡើងពេញរូបរាងភ្លាមៗ គ្មានកោសិកាសាច់ឈាមធម្មជាតិឡើយ)។',
            en: 'Human: Gabbhaseyyaka (womb-born, cellular embryonic development) | Hell Denizen: Opapātika (spontaneous, full-grown manifestation without organic embryonic biology).'
          },
          {
            boldKm: 'បច្ច័យទ្រទ្រង់ (Sustaining Conditions)',
            boldEn: 'Sustaining Conditions',
            km: 'មនុស្សលោក ៖ ពឹងលើបច្ច័យ ៤ (កម្ម, ចិត្ត, ឧតុ, អាហារ) បើខ្វះបាយ ទឹក ឬដាច់ខ្យល់ គឺស្លាប់ | សត្វនរក ៖ កម្មតែមួយមុខគត់ជាអ្នកទ្រទ្រង់ដាច់ខាត (ទោះគ្មានបាយ គ្មានទឹក ត្រូវភ្លើងដុត ក៏មិនស្លាប់)។',
            en: 'Human: 4 generative conditions (Kamma, Citta, Utu, Āhāra)—lack of oxygen, food, or water causes death | Hell Denizen: Exclusively sustained by Kamma (flourishes in hellfire without biological nutrition).'
          },
          {
            boldKm: 'ការជួសជុលរូបកាយ (Regeneration)',
            boldEn: 'Regeneration Speed',
            km: 'មនុស្សលោក ៖ ត្រូវការពេលវេលាព្យាបាល ផឹកថ្នាំ សម្រាក និងកោសិកាលូតលាស់សន្សឹមៗ | សត្វនរក ៖ កើតឡើងវិញភ្លាមៗក្នុងមួយខណៈនៃចិត្ត (មួយប៉ប្រិចភ្នែក)។',
            en: 'Human: Slow biological healing requiring medical care, rest, and scar tissue | Hell Denizen: Instantaneous reconstitution within a single thought-moment (a fraction of a microsecond).'
          },
          {
            boldKm: 'មូលហេតុនៃការស្លាប់ (Cause of Death)',
            boldEn: 'Cause of Mortality',
            km: 'មនុស្សលោក ៖ រូបកាយទ្រុឌទ្រោម, ជំងឺ, ដាច់អាហារ, ឬគ្រោះថ្នាក់បាក់បែកកាយ | សត្វនរក ៖ អស់កម្មបាបតែមួយគត់ (Kammakkhaya) ទើបអាចធ្វើមរណកាលបាន។',
            en: 'Human: Physical injury, organ failure, disease, starvation, aging | Hell Denizen: SOLELY the complete exhaustion of unwholesome karma (Kammakkhaya).'
          }
        ]
      },
      {
        titleKm: '៤. ហេតុអ្វីបានជាមិនសន្លប់ ឬលែងដឹងខ្លួនពេលឈឺខ្លាំង? (Pure Dukkha-Vedanā)',
        titleEn: '4. Why Don\'t Hell Beings Faint or Lose Consciousness? (Pure Dukkha-Vedanā)',
        contentKm: 'មនុស្សលោកពេលជួបការឈឺចាប់ខ្លាំងជ្រុល ប្រព័ន្ធប្រសាទ និងខួរក្បាលនឹងបញ្ជាឱ្យសន្លប់បាត់ស្មារតី (Unconscious/Shock) ដើម្បីការពារចិត្តពីការឈឺចាប់ហួសកម្រិត។ ប៉ុន្តែនៅក្នុងនរក យន្តការនេះត្រូវបានកាត់ផ្តាច់ទាំងស្រុង ៖\n\n១. គ្មានយន្តការកាត់ផ្តាច់ការឈឺចាប់ឡើយ ៖\nនៅក្នុងអភិធម្ម សត្វនរកមាន «កាយបសាទរូប» (កោសិកាសរសៃប្រសាទទទួលដឹងការឈឺចាប់) ក្រាស់ឃ្មឹក និងសព្វសាច់ទូទាំងខ្លួន ចាប់តាំងពីសរសៃសក់រហូតដល់ក្រចកជើង។ គ្មានចំណុចណាមួយដែលស្ពឹក ឬមិនដឹងការឈឺចាប់នោះឡើយ។\n\n២. វិបាកទុក្ខវេទនាកម្រិតអតិបរមា (Pure Dukkha-vedanā) ៖\nចិត្តរបស់សត្វនរក ត្រូវទទួលនូវ «ទុក្ខសហគតកាយវិញ្ញាណ» (វិញ្ញាណដឹងទុក្ខវេទនាដ៏ខ្លាំងក្លា) ជានិច្ច គ្មានចន្លោះទំនេរសម្រាប់ឱ្យចិត្តធ្លាក់ចុះទៅកាន់សេចក្តីស្ងប់ ឬសន្លប់ឡើយ។\n\n៣. រូបកាយកើតឡើងវិញ ដើម្បីបន្តសងកម្ម ៖\nសត្វនរកត្រូវដឹងខ្លួនពេញលេញ ១០០% នូវគ្រប់វិនាទីដែលសាច់ត្រូវរលាក ឆ្អឹងត្រូវកិនបែក ឬក្បាលត្រូវកាត់។ ការកើតរូបរាងថ្មីឡើងវិញ មិនមែនជាការសង្គ្រោះឱ្យរួចខ្លួនឡើយ ប៉ុន្តែជាការ «បង្កើតឧបករណ៍ទទួលទុក្ខថ្មីមួយទៀតភ្លាមៗ» ដើម្បីបន្តសងបំណុលកម្មដែលខ្លួនបានសាង រហូតដល់វិនាទីចុងក្រោយ!',
        contentEn: 'When humans experience unbearable agony, biological pain-shock and neurovascular reflexes trigger fainting or coma to shield the mind from terminal sensory overload. In the hell realms, this protective mechanism is utterly abolished:\n\n1. No Anesthetic Numbness or Shock:\nIn Abhidhamma, hell denizens possess exceptionally dense, hyper-sensitive Kāya-pasāda-rūpa (bodily sentient receptors) suffusing every square millimeter of their anatomy—from the tips of their hair down to their toenails. There is zero sensory numbness.\n\n2. Unmitigated Agonizing Consciousness (Pure Dukkha-vedanā):\nTheir mental continuum is bound to continuous "Dukkha-sahagata-kāyaviññāṇa" (bodily consciousness accompanying excruciating physical pain). There is no opportunity for the mind to lapse into peaceful bhavanga or unconscious shock.\n\n3. Regeneration as Continuous Retribution:\nThey remain 100% conscious through every fraction of a second while being incinerated, crushed, flayed, or decapitated. The instant regeneration of their body is not an act of mercy, but the relentless manufacture of a fresh sensory instrument designed to discharge the precise remaining balance of their negative karmic debt!'
      }
    ]
  },

  // GEM 19: Hell Beings: Inability to Form Kusala, Inefficacy of Prayers, and Transferred Merit (Tipiṭaka & Abhidhamma)
  {
    id: 'hell-merit-prayers',
    num: 19,
    open: false,
    category: 'death',
    categoryKm: '💀 មរណាសន្នសម័យ & នរក',
    categoryEn: '💀 Hell: Prayers & Transferred Merit',
    ref: 'ព្រះត្រៃបិដក, គម្ពីរអភិធម្ម, តិរោកុឌ្ឌសូត្រ (Khp 7) & ពាលបណ្ឌិតសូត្រ (MN 129)',
    paliQuote: 'អត្ថានមេតំ អនវកាសោ យំ អញ្ញោ អញ្ញស្ស បាបកម្មំ បដិហនេយ្យ... អក្ខាតារោ តថាគតា (គ្មានហេតុ គ្មានឱកាសដែលអ្នកដទៃអាចកម្ចាត់បាបកម្មជំនួសអ្នកដទៃបានឡើយ... ព្រះតថាគតទាំងឡាយគ្រាន់តែជាអ្នកចង្អុលបង្ហាញផ្លូវប៉ុណ្ណោះ)',
    questionKm: 'យោងតាមគម្ពីរព្រះត្រៃបិដក និងអភិធម្ម តើសត្វនរកមានឱកាសបង្កើតចិត្តកុសល ឬអាចបួងសួងសុំឱ្យព្រះ ឬទេវតាមកជួយស្រោចស្រង់រំដោះចេញពីរណ្តៅនរកបានដែរឬទេ?',
    questionEn: 'According to the Tipiṭaka and Abhidhamma, can hell beings generate wholesome thoughts (kusala citta), or pray to the Buddha or Devas for divine rescue, or receive dedicated merit?',
    shortKm: 'សត្វនរក ៖ បង្កើតកុសល បួងសួង ឬទទួលបុណ្យបានទេ?',
    shortEn: 'Hell Beings: Kusala, Prayers & Transferred Merit',
    essenceKm: 'យោងតាមគម្ពីរព្រះត្រៃបិដក និងអភិធម្ម នៅក្នុងភពនរក សត្វនរកស្ទើរតែគ្មានឱកាសអាចបង្កើតកុសលចិត្តបានឡើយ ហើយការបួងសួង ឬអង្វរសុំឱ្យព្រះ ឬទេវតាមកជួយស្រោចស្រង់ ក៏គ្មានប្រសិទ្ធភាពសូម្បីតែបន្តិចដែរ ពីព្រោះច្បាប់កម្មផល (កម្មនិយាម) ដំណើរការដោយស្វ័យប្រវត្តិតាមធម្មជាតិ ដោយគ្មានបុគ្គល អាទិទេព ឬព្រះពុទ្ធអង្គណាអាចកែប្រែ ឬលើកលែងទោសជំនួសបានឡើយ។ បុណ្យដែលញាតិឧទ្ទិសទៅពីលោកមនុស្ស ជួយសត្វនរកមិនបានឡើយ (០%) ព្រោះសត្វនរកកំពុងសោយទុក្ខវេទនាខ្លាំង មិនអាចជ្រះថ្លាអនុមោទនាបុណ្យបាន (បុណ្យឧទ្ទិសជួយបានតែពួក បរទត្តូបជីវីប្រេត មួយពួកគត់)។ សត្វនរកអាចរួចផុតពីនរកបានតែតាមផ្លូវមួយគត់ គឺ «ការសោយទុក្ខទាល់តែអស់កម្លាំងកម្មបាប (Kammakkhaya)» រួចទើបអំណាចនៃកុសលកម្មចាស់ៗពីអតីតជាតិ ផុសឡើងមកផ្តល់ផលនាំទៅកើតក្នុងសុគតិភពវិញ។',
    essenceEn: 'According to the Tipiṭaka and Abhidhamma, hell beings have virtually zero opportunity to generate wholesome consciousness (kusala citta), and prayers or pleas to the Buddha or gods have zero efficacy because the law of kamma (kammaniyāma) operates as an immutable natural law beyond arbitrary divine intervention. Dedicated merit from human relatives cannot reach hell denizens (0%) because their minds are engulfed in severe torture, incapable of rejoicing (anumodanā); only Paradattūpajīvī-petas can receive transferred merit. The only escape from hell is the complete karmic exhaustion of that specific unwholesome debt (Kammakkhaya), after which latent past wholesome karma (aparāpariya-vedanīya-kamma) surfaces to propel rebirth into higher realms.',
    practicalKm: 'កុំចាំដល់ធ្លាក់នរកទើបស្រែករកព្រះ ឬសង្ឃឹមឱ្យកូនចៅឧទ្ទិសបុណ្យឱ្យ ព្រោះដល់ពេលនោះគ្មាននរណាអាចជួយបានឡើយ សូម្បីព្រះពុទ្ធក៏មិនអាចកែប្រែកម្មជំនួសយើងបានដែរ។ ឱកាសមាសតែមួយគត់ គឺ «ពេលកំពុងមានជីវិតជាមនុស្ស និងមានស្មារតីពេញលេញ» នេះឯង។ ចូរប្រញាប់ប្រញាល់សាងបុណ្យកុសល រក្សាសីល និងចម្រើនភាវនាឱ្យបានរាល់ថ្ងៃ កុំបណ្តោយឱ្យពេលវេលាកន្លងផុតទៅដោយសេចក្តីធ្វេសប្រហែស (អប្បមាទធម៌)។',
    practicalEn: 'Never defer spiritual vigilance until hellfire engulfs you, assuming prayers or posthumous dedication can rescue you. Not even a Buddha can annul another\'s kamma. The human rebirth is our solitary golden window to cultivate virtues, observe the precepts, and awaken liberating wisdom before the opportunity slips away.',
    links: [
      { to: '/questions', km: 'សំណួរ–ចម្លើយ ៣៩', en: 'Q&A 39' },
      { to: '/my-gems#hell-body-regeneration', km: 'រូបកាយសត្វនរក ៖ ហេតុអ្វីមិនស្លាប់?', en: 'Hell Body Regeneration' },
      { to: '/my-gems#yamapala-nature', km: 'យមបាលនរក ៖ សត្វមានជីវិត ឬរូបយន្តកម្ម?', en: 'Yamapālas Nature' },
      { to: '/merit-transfer', km: 'ពិធីឧទ្ទិសបុណ្យ & បរទត្តូបជីវីប្រេត', en: 'Merit Transfer & Petas' },
      { to: '/realms', km: 'ភពទាំង ៣១ ជាន់ & នរក', en: '31 Planes & Hell Realms' }
    ],
    sections: [
      {
        titleKm: '១. មូលហេតុតាមអភិធម្ម ដែលសត្វនរកមិនអាចបង្កើត «កុសលចិត្ត»',
        titleEn: '1. Abhidhamma Mechanics: Why Kusala Citta Cannot Arise in Hell',
        contentKm: 'នៅក្នុងគម្ពីរអភិធម្ម ចិត្តកើតឡើងអាស្រ័យលើ «អារម្មណ៍» (Ārammaṇa) ដែលមកប៉ះនឹងទ្វារវិញ្ញាណ ៖\n\n— ការជួបប្រទះតែ «អនិដ្ឋារម្មណ៍ជាបរមត្ថ» (Pure Undesirable Objects) ៖\nនៅក្នុងនរក រូបដែលឃើញ (ភ្លើង អាវុធ ឈាម) សំឡេងដែលឮ (សំឡេងស្រែកទ្រហោយំ សំឡេងកាប់ចាក់) និងការប៉ះពាល់កាយ (រលាក មុត ត្រជាក់កក) សុទ្ធសឹងតែជាអារម្មណ៍អាក្រក់បំផុតកម្រិតអតិបរមា។\n\n— ចិត្តត្រូវគ្របដណ្ដប់ដោយ «ទោសមូលចិត្ត» ២៤ ម៉ោង ៖\nនៅពេលជួបតែការឈឺចាប់ខ្លាំង ចិត្តរបស់សត្វនរកដំណើរការតែក្នុងរង្វង់ ទោសមូលចិត្ត ប្រកបដោយទោមនស្សវេទនា និងបដិឃៈ (កំហឹង ការឈឺចាប់ និងការភ័យខ្លាច) ឥតឈប់ឈរ។ គ្មានចន្លោះពេលណាដែលចិត្តអាចស្ងប់ ដើម្បីបង្កើត សតិ (ការដឹងខ្លួន), សទ្ធា (ជំនឿលើអំពើល្អ) ឬ បញ្ញា ដែលជាចេតសិកកុសលបានឡើយ។\n\n— ឧបមាអណ្តើកខ្វាក់ក្នុង «ពាលបណ្ឌិតសូត្រ» (MN 129) ៖\nព្រះពុទ្ធត្រាស់ថា ឱកាសដែលសត្វនរក ឬសត្វតិរច្ឆាន អាចបង្កើតចិត្តល្អដើម្បីបានត្រឡប់មកកើតជាមនុស្សវិញ គឺពិបាកជាង «សត្វអណ្តើកខ្វាក់ភ្នែកទាំងសងខាង ដែលរស់នៅបាតសមុទ្រ ហើយងើបក្បាលឡើងលើផ្ទៃទឹក ១០០ ឆ្នាំម្តង ឱ្យក្បាលរបស់វាលូកចំកណ្តាលប្រហោងនឹមនង្គ័លទោលមួយ ដែលកំពុងអណ្តែតរសាត់ប៉ើងតាមខ្យល់លើមហាសមុទ្រដ៏ធំធេង» ទៅទៀត។',
        contentEn: 'In Abhidhamma epistemology, conscious states arise conditionally upon sensory objects (ārammaṇa) striking the sensory doors:\n\n— Exposure to Pure Aniṭṭhārammaṇa (Horrific Objects):\nIn hell, all visual shapes (raging fire, serrated blades, blood), sounds (agonized shrieks, clanging iron weapons), and bodily tactile contacts (third-degree incineration, arctic freezing) are exclusively and overwhelmingly repulsive (aniṭṭhārammaṇa).\n\n— 24/7 Domination by Dosa-Mūla-Citta (Aversion-Rooted Mind):\nTormented continuously, the mental continuum of hell denizens is locked in aversion-rooted consciousness accompanied by profound anguish (domanassa-vedanā) and psychic resistance (paṭigha). There is no psychological room for wholesome mental factors—such as mindfulness (sati), confidence (saddhā), non-hatred (adosa), or wisdom (paññā)—to germinate.\n\n— The Blind Sea Turtle Simile in Bālapaṇḍita Sutta (MN 129):\nThe Buddha declared that the likelihood of a hell denizen regaining human rebirth through spontaneous wholesome insight is far rarer than a blind sea turtle, surfacing once every 100 years from oceanic depths, randomly threading its head through a single wooden yoke tossed about by winds across the world oceans.'
      },
      {
        titleKm: '២. ហេតុអ្វីបានជាការបួងសួង ឬការអង្វររកជំនួយ គ្មានប្រសិទ្ធភាព?',
        titleEn: '2. Why Prayers and Pleas for Divine Rescue Are Powerless',
        contentKm: 'ការបួងសួង ឬអង្វរករក្នុងនរក មិនអាចជួយសង្គ្រោះបានឡើយ ដោយសារហេតុផល ៣ យ៉ាង ៖',
        contentEn: 'Prayers and supplications in hell yield zero efficacy for three structural reasons:',
        points: [
          {
            boldKm: 'ការស្រែកអង្វរ កើតចេញពីទោសៈ និងតណ្ហា',
            boldEn: 'Pleas Stem from Aversion & Craving, Not Wisdom',
            km: 'សត្វនរកតែងតែលើកដៃសំពះ អង្វរពួកយមបាល និងស្រែកទ្រហោយំសុំឱ្យគេដោះលែង។ ប៉ុន្តែចិត្តដែលកំពុងស្រែកនោះ ជាចិត្តដែលកំពុងរងទុក្ខវេទនា ភ័យខ្លាច និងស្រេកឃ្លានការរួចខ្លួន (តណ្ហា និងទោសៈ) មិនមែនជាការភ្ញាក់រលឹកដឹងកំហុសដោយបញ្ញាឡើយ។',
            en: 'Hell beings constantly wail, clasp their hands, and beg wardens for mercy. Yet that desperate cry arises from sheer physical agony, terror, and frantic craving to escape (taṇhā and dosa)—not genuine moral repentance anchored in liberating wisdom.'
          },
          {
            boldKm: 'ព្រះពុទ្ធមិនមែនជាអ្នកលាងបាប (No Divine Intervention)',
            boldEn: 'The Buddha Is a Guide, Not a Divine Absolver',
            km: 'នៅក្នុងពុទ្ធសាសនាថេរវាទ ព្រះសម្មាសម្ពុទ្ធជា «អក្ខាតារោ» (អ្នកចង្អុលបង្ហាញផ្លូវ) ប៉ុណ្ណោះ ព្រះអង្គមិនមែនជាអ្នកបង្កើតចក្រវាឡ ឬជាអ្នកកាត់ទោសសត្វលោកឡើយ។ សូម្បីតែមហាករុណាទិគុណរបស់ព្រះពុទ្ធធំធេងយ៉ាងណាក៏ដោយ ក៏ព្រះអង្គមិនអាចលូកព្រះហស្តទៅស្រង់ ឬលុបលាងកម្មអកុសលរបស់សត្វណាម្នាក់បានឡើយ ព្រោះគ្មាននរណាម្នាក់ធំជាងច្បាប់កម្មផលនោះទេ។',
            en: 'In Theravāda Buddhism, the Buddha is an "Akkhātāro" (Way-shower: Dhp 276). He is neither a creator deity nor a celestial judge. Despite infinite compassion, the Buddha cannot unilaterally annul another\'s karmic momentum, because no being transcends the universal law of kamma.'
          },
          {
            boldKm: 'ស្តេចយមរាជ ឬទេវតា គ្មានសិទ្ធិលើកលែងទោស',
            boldEn: 'King Yama and Devas Possess Zero Pardon Authority',
            km: 'ដូចដែលបានបញ្ជាក់ក្នុង ទេវទូតសូត្រ ស្តេចយមរាជបានត្រាស់ប្រាប់សត្វនរកត្រង់ៗថា ៖ «អំពើអាក្រក់នេះ អ្នកបានធ្វើវាដោយខ្លួនឯង ម្តាយឪពុក ឬទេវតាមិនបានធ្វើជំនួសអ្នកទេ ដូច្នេះមានតែខ្លួនអ្នកប៉ុណ្ណោះដែលត្រូវទទួលវា»។ គ្មានយន្តការសូកប៉ាន់ ឬការសម្រាលទោសដោយការបួងសួងឡើយ។',
            en: 'In the Devadūta Sutta, King Yama reminds the condemned: "This evil deed was done by you alone—neither parents, friends, nor devas did it for you. You alone must reap its fruit." There is no bribery, judicial discretion, or divine pardon.'
          }
        ]
      },
      {
        titleKm: '៣. ចុះការឧទ្ទិសបុណ្យពីសាច់ញាតិលើលោកមនុស្ស អាចជួយស្រង់បានទេ?',
        titleEn: '3. Can Dedicated Merit from Living Relatives Rescue Hell Beings? (Tirokuḍḍa Sutta)',
        contentKm: 'យោងតាម តិរោកុឌ្ឌសូត្រ (ខុទ្ទកនិកាយ) និងគម្ពីរអភិធម្ម បុណ្យដែលញាតិមិត្តឧទ្ទិសទៅ (បត្តានុប្បទាន) អាចជួយបានតែពួកអបាយភូមិមួយក្រុមតូចប៉ុណ្ណោះ ៖',
        contentEn: 'According to the Tirokuḍḍa Sutta (Khuddakapāṭha 7) and the Abhidhamma commentaries, transferred merit (pattidāna/pattānuppadāna) operates under rigorous conditions:',
        points: [
          {
            boldKm: 'សត្វនរក (Niraya) ៖ ០% មិនអាចទទួលបុណ្យបានដាច់ខាត',
            boldEn: 'Hell Denizens (Niraya): 0% Absolutely Ineligible',
            km: 'កំពុងសោយទុក្ខវេទនាធ្ងន់ធ្ងរខ្លាំង ២៤ ម៉ោង មិនដឹងដំណឹង និងមិនអាចកើតចិត្តជ្រះថ្លាអនុមោទនាបុណ្យបានឡើយ។',
            en: 'Submerged in 24/7 unremitting agony; completely unaware of human rituals and psychologically incapable of generating joyful appreciation (anumodanā-citta).'
          },
          {
            boldKm: 'សត្វតិរច្ឆាន (Tiracchāna) ៖ ០% មិនអាចទទួលបុណ្យបាន',
            boldEn: 'Animals (Tiracchāna): 0% Ineligible',
            km: 'មានមោហៈក្រាស់ មិនស្គាល់អ្វីជាបុណ្យ អ្វីជាកុសល ឬការឧទ្ទិស។',
            en: 'Dominated by dense delusion (moha); lacking conceptual understanding of merit and transference.'
          },
          {
            boldKm: 'អសុរកាយ (Asura) ៖ ០% មិនអាចទទួលបុណ្យបាន',
            boldEn: 'Asuras: 0% Ineligible',
            km: 'ជាប់ជំពាក់នឹងការស្រេកឃ្លាន ការលាក់ខ្លួនក្នុងភាពងងឹត និងការភ័យខ្លាច។',
            en: 'Consumed by nocturnal hiding, gnawing hunger, and terror.'
          },
          {
            boldKm: 'ប្រេតទូទៅ (ភាគច្រើន) ៖ ០% មិនអាចទទួលបុណ្យបាន',
            boldEn: 'General Petas: 0% Ineligible',
            km: 'ដូចជា ខុប្បិបាសិកប្រេត (ឃ្លានជានិច្ច គ្មានពេលគិតរឿងបុណ្យ), និជ្ឈាមតណ្ហិកប្រេត (ភ្លើងឆេះកាយជានិច្ច)។',
            en: 'Classes such as Khuppipāsika (insatiable starvation) and Nijjhāmataṇhika (eternally engulfed in internal flame) are overwhelmed by agony.'
          },
          {
            boldKm: 'បរទត្តូបជីវីប្រេត (តែមួយពួកគត់) ៖ ១០០% អាចទទួលបុណ្យបាន',
            boldEn: 'Paradattūpajīvī Petas (Sole Class): 100% Eligible',
            km: 'ជាប្រេតដែលរស់នៅដោយសារការស៊ីចំណីបុណ្យដែលគេឧទ្ទិសឱ្យ ព្រោះពួកគេដឹងដំណឹង និងមានសមត្ថភាពបង្កើតចិត្ត «អនុមោទនា» (ត្រេកអរនឹងបុណ្យ) បានភ្លាមៗមួយរំពេច។',
            en: 'The singular realm of spirits living on gifts of others; they perceive the dedication, rejoice with pure hearts (anumodanā), and instantly transform their rebirth into celestial bliss.'
          }
        ]
      },
      {
        titleKm: '៤. ករណីលើកលែងដ៏កម្រ ៖ ពន្លឺព្រះពុទ្ធក្នុង «លោកន្តរិកនរក»',
        titleEn: '4. The Singular Cosmic Anomaly: Buddha\'s Light in the Lokantarika Hell',
        contentKm: 'មានករណីតែមួយគត់ដែលសត្វនរកទទួលបានការធូរស្បើយមួយប៉ប្រិចភ្នែក ប៉ុន្តែក៏មិនមែនជាការស្រោចស្រង់ឱ្យរួចពីនរកទាំងស្រុងដែរ ៖\n\n— ទីតាំងលោកន្តរិកនរក ៖ ជាអន្តរនរកដ៏ត្រជាក់សូន្យសុង ស្ថិតនៅចន្លោះចក្រវាឡទាំង ៣ ដែលគ្មានពន្លឺព្រះអាទិត្យ ឬព្រះចន្ទទៅដល់ឡើយ។\n\n— ព្រឹត្តិការណ៍អស្ចារ្យ ៤ លើក ៖ នៅពេលដែលព្រះពោធិសត្វចុះចាប់បដិសន្ធិក្នុងផ្ទៃមាតា, ពេលត្រាស់ដឹង, ពេលបង្វិលកង់ធម៌ (ធម្មចក្កប្បវត្តនសូត្រ), និងពេលបរិនិព្វាន អានុភាពនៃព្រះធម៌ធ្វើឱ្យចក្រវាឡរំជើបរំជួល ហើយមាន រស្មីដ៏ត្រចះត្រចង់មួយភ្លែត ជះទម្លុះចូលទៅក្នុងលោកន្តរិកនរកនោះ។\n\n— ភាពភ្ញាក់ផ្អើលរបស់សត្វនរក ៖ ក្នុងមួយវិនាទីនោះ សត្វនរកដែលតោងជញ្ជាំងចក្រវាឡក្នុងភាពងងឹតស្លុប បានមើលឃើញគ្នាទៅវិញទៅមក ហើយលាន់មាត់ថា ៖ «ឱហ្ន៎! ចម្លែកណាស់ មិនមែនមានតែយើងម្នាក់ឯងទេតើ ដែលនៅទីនេះ ក៏មានសត្វដទៃទៀតរស់នៅទីនេះដែរ!» ប៉ុន្តែមួយភ្លែតក្រោយមក ពន្លឺនោះក៏រលត់បាត់ទៅវិញ ហើយពួកគេក៏បន្តរងទុក្ខដដែល។',
        contentEn: 'There is only one canonical cosmic event where hell beings experience a momentary microsecond of visual clarity, though it does not liberate them:\n\n— The Lokantarika Hell Realm:\nThe abyssal, freezing interstitial voids located between three adjacent world-systems, shrouded in pitch-black darkness unreachable by sun or moon.\n\n— 4 Miraculous Buddha Events:\nAt the Bodhisatta\'s final Conception, Supreme Enlightenment, First Sermon (Dhammacakkappavattana Sutta), and Final Parinibbāna, the entire cosmos vibrates, and an unearthly radiance flashes into Lokantarika for a split second.\n\n— The Transient Shock:\nClinging to the icy outer cosmic walls, the beings momentarily perceive one another and exclaim: "Amazing! Truly, other sentient beings dwell here besides myself!" But the flash dissolves in a heartbeat, and the cold darkness reclaims them.'
      },
      {
        titleKm: '៥. តើសត្វនរកអាចរួចផុតពីនរកដោយរបៀបណា?',
        titleEn: '5. How Do Hell Beings Ultimately Escape? (Kammakkhaya)',
        contentKm: 'សត្វនរកមានច្រកចេញតែមួយគត់ គឺ «ការសោយទុក្ខទាល់តែអស់កម្លាំងនៃកម្មបាប» (យាវ ន តំ បាបកម្មំ ខីយតិ — Kammakkhaya) ៖\n\n១. អស់ថាមពលនៃបាប ៖ នៅពេលដែលទម្ងន់នៃអកុសលកម្មដែលនាំទៅកើតក្នុងនរកនោះ ត្រូវដុតរលាយអស់ថាមពលតាមកាលកំណត់ (រាប់ពាន់ រាប់លាន ឬរាប់កោដិឆ្នាំ)។\n២. កុសលចាស់រើបម្រះឡើង ៖ នៅវិនាទីចុងក្រោយ កុសលកម្មចាស់ៗកាលពីរាប់រយជាតិមុន (អបរាបរិយវេទនីយកម្ម) ដែលធ្លាប់កប់ទុកក្នុងភវង្គចិត្ត នឹងចាប់ផ្តើមមានឱកាសរើបម្រះឡើងមកលើផ្ទៃមនោទ្វារ។\n៣. ការចាប់កំណើតថ្មី ៖ ចុតិចិត្តក្នុងនរករលត់ទៅ ហើយ បដិសន្ធិចិត្តថ្មី ក៏ចាប់កំណើតឡើងក្នុងភពផ្សេង (អាចជាសត្វតិរច្ឆាន ប្រេត ឬមនុស្ស) ទៅតាមកម្លាំងកម្មបន្ទាប់នោះឯង។',
        contentEn: 'Hell denizens have only one escape hatch: the complete exhaustion of that specific unwholesome karmic energy (Kammakkhaya):\n\n1. Karmic Depletion: When the horrific negative momentum that cast them into hell burns through its allotted lifespan (be it thousands, millions, or trillions of cosmic years).\n2. Latent Merit Resurfaces: In the final moments of life in hell, ancient wholesome deeds performed in distant past lifetimes (aparāpariya-vedanīya-kamma), long dormant in the bhavanga continuum, find room to register at the mind-door.\n3. Rebirth into Higher Spheres: The hell death-consciousness (cuti-citta) ceases, immediately followed by patisandhi-citta into another plane (as animal, peta, or human) guided by that next ripened karma.'
      }
    ]
  },

  // GEM 20: The Eight Great Hells in Exhaustive Canonical Detail (Tipiṭaka, Aṭṭhakathā & Visuddhimagga)
  {
    id: 'eight-great-hells',
    num: 20,
    open: false,
    category: 'death',
    categoryKm: '💀 មហានរកទាំង ៨ & អបាយភូមិ',
    categoryEn: '💀 The 8 Great Hells',
    ref: 'ទេវទូតសូត្រ (MN 130), ពាលបណ្ឌិតសូត្រ (MN 129), វិសុទ្ធិមគ្គ & អដ្ឋកថា',
    paliQuote: 'អត្ថិ ភិក្ខវេ មហានិរយោ នាម... ចតុណ្ណំ ទ្វារា សោឡស ឧស្សទនិរយា បរិក្ខិត្តា (ម្នាលភិក្ខុទាំងឡាយ មានមហានរក... មានទ្វារ ៤ និងព័ទ្ធជុំវិញដោយឧស្សទនរក ១៦)',
    questionKm: 'យោងតាមគម្ពីរព្រះត្រៃបិដក និងអដ្ឋកថា តើមហានរកទាំង ៨ ជាន់ មានឈ្មោះអ្វីខ្លះ បរិស្ថាន ទារុណកម្មជាក់ស្តែង កម្មដែលនាំឱ្យធ្លាក់ និងអាយុកាលយ៉ាងដូចម្ដេច?',
    questionEn: 'According to the Tipiṭaka and Commentaries, what are the Eight Great Hells (Mahānaraka), their environments, specific torments, causes (kamma), and lifespans?',
    shortKm: 'មហានរកទាំង ៨ ជាន់ ពិស្តារ',
    shortEn: 'The 8 Great Hells (Mahānaraka)',
    essenceKm: 'យោងតាមគម្ពីរព្រះត្រៃបិដក (ទេវទូតសូត្រ និងពាលបណ្ឌិតសូត្រ) ព្រមទាំងគម្ពីរអដ្ឋកថា និងវិសុទ្ធិមគ្គ មហានរកធំៗមានចំនួន ៨ ជាន់ តម្រៀបជង់លើគ្នាពីលើចុះក្រោមនៅក្នុងផ្ទៃក្រោមនៃជម្ពូទ្វីប (ភពមនុស្ស) ដោយនរកជាន់នីមួយៗមានទំហំធំធេង និងឡោមព័ទ្ធដោយ ឧស្សទនរក (នរកបរិវារ) ចំនួន ១៦ នៅគ្រប់ទិសទាំង ៤។ នរកទាំង ៨ រួមមាន ៖ (១) សញ្ជីវៈ (រស់ឡើងវិញឥតឈប់) (២) កាឡសុត្តៈ (បន្ទាត់ខ្មៅអារកាត់) (៣) សង្ឃាតៈ (ភ្នំដែកកិនសង្កត់) (៤) រោរុវៈ ឬ ជលារោរុវៈ (ភ្លើងឆេះទម្លុះទ្វារទាំង ៩) (៥) មហារោរុវៈ ឬ ធូមារោរុវៈ (ផ្សែងក្តៅពុលដុតរោលក្នុង) (៦) តាបនៈ (ដោតចម្រូងដែកភ្លើង) (៧) មហាតាបនៈ (ធ្លាក់ពីកំពូលភ្នំលើចម្រូងដាវ) (៨) អវិចី (គ្មានចន្លោះទំនេរនៃភ្លើង ទុក្ខ និងពេលវេលា)។ អាយុកាលកើនឡើងជាលំដាប់ពី ១,៦២០,០០០ លានឆ្នាំមនុស្ស ក្នុងជាន់ទី ១ រហូតដល់ ១ អន្តរកប្បពេញ ក្នុងជាន់អវិចី។',
    essenceEn: 'According to the Tipiṭaka (Devadūta Sutta MN 130, Bālapaṇḍita Sutta MN 129), Commentaries, and Visuddhimagga, there are Eight Great Hells (Mahānaraka) stacked vertically beneath the human plane of Jambudīpa, each encircled on all four quadrants by 16 auxiliary Ussada-hells: (1) Sañjīva (Continuous Revival Hell), (2) Kāḷasutta (Black-Line Measuring Hell), (3) Sanghāta (Crushing Iron Mountain Hell), (4) Roruva/Jālaroruva (Blazing Nine-Gate Screaming Hell), (5) Mahāroruva/Dhūmaroruva (Suffocating Toxic Smoke Hell), (6) Tāpana (Impaling Iron Stake Hell), (7) Mahātāpana (Great Escalating Fire & Stake Hell), and (8) Avīci (Uninterrupted Intervalless Hell). Lifespans escalate exponentially from 1.62 million million human years in the first hell to a full Antarakappa in Avīci.',
    practicalKm: 'ការយល់ដឹងពីមហានរកទាំង ៨ មិនមែនជាការបំភិតបំភ័យឡើយ ប៉ុន្តែជាការដាស់តឿនសតិឱ្យស្គាល់ «ច្បាប់រូបវិទ្យាផ្លូវចិត្តនៃកម្ម» យ៉ាងពិតប្រាកដ។ រាល់ពេលដែលចិត្តប្រព្រឹត្តអំពើបាប គឺកំពុងរៀបចំឧបករណ៍ធ្វើទារុណកម្មខ្លួនឯងទៅតាមទម្ងន់នៃទោសៈ លោភៈ និងមោហៈ។ ដូច្នេះ ការរក្សាសីល ៥ បរិសុទ្ធ ការមិនបៀតបៀនជីវិតអ្នកដទៃ និងការមានសេចក្តីស្អប់ខ្ពើមខ្លាចរអាក្នុងបាប (ហិរិ និង ឱត្តប្បៈ) គឺជាស្ពានតែមួយគត់ដែលរារាំងមិនឱ្យធ្លាក់ចុះទៅក្នុងរណ្តៅមហានរកទាំងនេះ។',
    practicalEn: 'Contemplating the 8 Great Hells is not superstitious terror, but sober comprehension of the psychophysical conservation of moral energy. Every unwholesome act manufactures its own precise somatic torture chamber. Cherishing the 5 Precepts, cultivating moral shame (hiri) and moral dread of evil (ottappa) are our sole impenetrable shields against these abysses.',
    links: [
      { to: '/questions', km: 'សំណួរ–ចម្លើយ ៤០', en: 'Q&A 40' },
      { to: '/my-gems#hell-merit-prayers', km: 'សត្វនរក ៖ បួងសួង ឬទទួលបុណ្យបានទេ?', en: 'Hell Merit & Prayers' },
      { to: '/my-gems#hell-body-regeneration', km: 'រូបកាយសត្វនរក ៖ ហេតុអ្វីមិនស្លាប់?', en: 'Hell Body Regeneration' },
      { to: '/my-gems#yamapala-nature', km: 'យមបាលនរក ៖ សត្វមានជីវិត ឬរូបយន្តកម្ម?', en: 'Yamapālas Nature' },
      { to: '/realms', km: 'ភពទាំង ៣១ ជាន់ & នរក', en: '31 Planes & Hell Realms' }
    ],
    sections: [
      {
        titleKm: '១. សញ្ជីវមហានរក (Sañjīva — នរកដែលរស់ឡើងវិញឥតឈប់ឈរ)',
        titleEn: '1. Sañjīva Mahānaraka: The Hell of Continuous Revival',
        contentKm: '— អត្ថន័យ និងបរិស្ថាន ៖ «សញ្ជីវៈ» ប្រែថា ការរស់ឡើងវិញ។ នរកនេះស្ថិតនៅជាន់ខាងលើគេបង្អស់ មានកម្រាលដែកដុតភ្លើងឡើងក្រហមច្រាល និងមានផ្សែងហុយទ្រលោម។\n— ទារុណកម្មជាក់ស្តែង ៖ ពួកយមបាលកាន់ដាវ ពូថៅ និងកាំបិតដែកភ្លើង ដេញកាប់ ច្រាន និងចិញ្ច្រាំសត្វនរកជាកង់ៗធ្លាក់រាយប៉ាយពេញដី។ លុះកាប់រួចហើយ ស្រាប់តែមាន «កម្មជវាត» (ខ្យល់កម្មត្រជាក់) បក់កាត់ពីលើ ឆ្អឹង សាច់ និងឈាមក៏រត់មករកគ្នា បង្កើតជារូបកាយដើមវិញភ្លាមៗ ហើយយមបាលក៏ចាប់កាប់ចិញ្ច្រាំបន្តឥតឈប់ឈរ។\n— កម្មដែលនាំឱ្យធ្លាក់ ៖ អំពើបាណាតិបាតកម្រិតធ្ងន់ (ការកាប់សម្លាប់មនុស្ស និងសត្វជាប្រចាំ ការធ្វើទារុណកម្មសត្វ ការប្រកបរបរជាអ្នកសម្លាប់សត្វ ឬមេដឹកនាំដែលបញ្ជាឱ្យកាប់សម្លាប់គេ)។\n— អាយុកាល ៖ ៥០០ ឆ្នាំនរក (១ ថ្ងៃយប់នរក = ៩ លានឆ្នាំមនុស្ស; សរុបស្មើនឹង ១,៦២០,០០០ លានឆ្នាំមនុស្ស លើលោកយើង)។',
        contentEn: '— Name & Environment: Sañjīva means "reviving". Upper-most hell featuring glowing red-hot iron ground covered in boiling embers and dense smoke.\n— Torment: Wardens brandish blazing swords and axes, butchering victims into fragments. Instantly, an icy karmic wind (kammaja-vāta) sweeps across, fusing flesh and bones back together, only to be hacked apart immediately in an infinite cycle.\n— Karmic Cause: Habitual, heavy killing of living beings (slaughterhouse butchers, animal abusers, murderous tyrants and warlords).\n— Lifespan: 500 hell years (1 hell day/night = 9 million human years; totaling 1.62 million million human years).'
      },
      {
        titleKm: '២. កាឡសុត្តមហានរក (Kāḷasutta — នរកខ្សែបន្ទាត់ខ្មៅ)',
        titleEn: '2. Kāḷasutta Mahānaraka: The Black-Line Measuring Hell',
        contentKm: '— អត្ថន័យ និងបរិស្ថាន ៖ «កាឡសុត្ត» ប្រែថា ខ្សែខ្មៅ។ បរិស្ថានពោរពេញដោយសំឡេងអារឈើ និងកម្ទេចដែកភ្លើងហោះខ្ចាយ។\n— ទារុណកម្មជាក់ស្តែង ៖ ពួកយមបាលចាប់សត្វនរកផ្តួលផ្កាប់មុខ ឬផ្ងារលើកម្រាលដែកភ្លើង រួចយក «ខ្សែបន្ទាត់ដែកខ្មៅដុតភ្លើង» មកវាយគូសវាស់លើរូបកាយសត្វនរកជាបន្ទាត់ៗ (ដូចជាងឈើគូសបន្ទាត់លើឈើ)។ បន្ទាប់មក យមបាលយកពូថៅ រណា និងកាំបិតមុតស្រួច មកអារ ច្រៀក និងកាប់សាច់តាមបន្ទាត់ខ្មៅនោះជាបន្ទះៗ។\n— កម្មដែលនាំឱ្យធ្លាក់ ៖ ការបៀតបៀន ឬប្រមាថដល់អ្នកមានគុណ (ឪពុក ម្តាយ គ្រូអាចារ្យ ព្រះសង្ឃ), ការលួចប្លន់ទ្រព្យសម្បត្តិអ្នកដទៃ (អទិន្នាទាន), និងការក្បត់មិត្តភក្តិដែលធ្លាប់ជួយខ្លួន។\n— អាយុកាល ៖ ១,០០០ ឆ្នាំនរក (១ ថ្ងៃយប់នរក = ៣៦ លានឆ្នាំមនុស្ស; សរុបស្មើនឹង ១២,៩៦០,០០០ លានឆ្នាំមនុស្ស)។',
        contentEn: '— Name & Environment: Kāḷasutta means "black measuring line". Resounds with screeching saws and molten sparks.\n— Torment: Hell wardens pin victims face-down on red-hot iron sheets and snap fiery black cords across their limbs like carpenters snapping chalk lines on lumber. Then they slice, saw, and plane their flesh along the black lines with serrated blades.\n— Karmic Cause: Persecution and abuse of benefactors (parents, teachers, monks), grand theft (adinnādāna), and malicious betrayal of loyal friends.\n— Lifespan: 1,000 hell years (1 hell day/night = 36 million human years; totaling 12.96 million million human years).'
      },
      {
        titleKm: '៣. សង្ឃាតមហានរក (Sanghāta — នរកភ្នំដែកកិនសង្កត់)',
        titleEn: '3. Sanghāta Mahānaraka: The Crushing Iron Mountain Hell',
        contentKm: '— អត្ថន័យ និងបរិស្ថាន ៖ «សង្ឃាតៈ» ប្រែថា ការប្រមូលផ្តុំកិនបំបែក។ ទីនោះមានភ្នំដែកភ្លើងដ៏ធំសម្បើមកំពស់រាប់យោជន៍។\n— ទារុណកម្មជាក់ស្តែង ៖ ភ្នំដែកដែលឆេះក្រហមច្រាល បានរមៀលមកពីទិសទាំង ៤ (កើត លិច ត្បូង ជើង) រត់សំដៅមករកគ្នា។ សត្វនរកត្រូវភ្នំដែកកិនខ្ទេចដូចគ្រាប់ល្ងដែលគេកិនយកប្រេង ឈាមហូរដាលដូចទន្លេ។ ពេលភ្នំរមៀលហួសទៅ រូបកាយក៏កើតឡើងវិញ រួចត្រូវភ្នំពីទិសផ្សេងរមៀលមកកិនសង្កត់បន្តទៀត។\n— កម្មដែលនាំឱ្យធ្លាក់ ៖ ការជិះជាន់សង្កត់សង្កិនអ្នកទន់ខ្សោយ ការប្រើអំណាចផ្តាច់ការធ្វើបាបប្រជារាស្ត្រ ការធ្វើទារុណកម្មសត្វពាហនៈ (ដំរី សេះ គោ ក្របី) ដោយការផ្ទុកទម្ងន់ហួសកម្លាំង ឬវាយដំទារុណកម្ម។\n— អាយុកាល ៖ ២,០០០ ឆ្នាំនរក (១ ថ្ងៃយប់នរក = ១៤៤ លានឆ្នាំមនុស្ស; សរុបស្មើនឹង ១០៣,៦៨០,០០០ លានឆ្នាំមនុស្ស)។',
        contentEn: '— Name & Environment: Sanghāta means "crushing together". Features colossal blazing iron mountains miles high.\n— Torment: Mountains of white-hot iron roll in simultaneously from the four cardinal directions, colliding in the center and pulverizing victims like sesame seeds crushed for oil in an oil press. Rivers of gore flow out; as mountains roll back, the bodies regenerate and are crushed again.\n— Karmic Cause: Tyrannical oppression of the weak, abusing authority to exploit citizens, cruelty to working animals (overloading beasts of burden and mercilessly beating them).\n— Lifespan: 2,000 hell years (1 hell day/night = 144 million human years; totaling 103.68 million million human years).'
      },
      {
        titleKm: '៤. រោរុវមហានរក ឬ ជលារោរុវៈ (Roruva — នរកស្រែកទ្រហោយំដោយភ្លើង)',
        titleEn: '4. Roruva / Jālaroruva Mahānaraka: The Blazing Nine-Gate Screaming Hell',
        contentKm: '— អត្ថន័យ និងបរិស្ថាន ៖ «រោរុវៈ» ប្រែថា ការស្រែកថ្ងូរខ្លាំងៗ។ នរកនេះពោរពេញដោយអណ្តាតភ្លើងឆេះសន្ធោសន្ធៅមិនដែលរលត់។\n— ទារុណកម្មជាក់ស្តែង ៖ សត្វនរកត្រូវគេចាប់ញាត់ចូលទៅក្នុងរណ្តៅផ្កាឈូកដែកភ្លើង។ អណ្តាតភ្លើងដ៏ក្តៅគគុកបាន «ឆេះច្រាលចូលតាមទ្វារទាំង ៩ នៃរាងកាយ» (រន្ធភ្នែក ២ រន្ធត្រចៀក ២ រន្ធច្រមុះ ២ មាត់ ១ ទ្វារលាមក និងទ្វារមូត្រ) ដុតរោលសរីរាង្គខាងក្នុងឱ្យរលាយហូរមកក្រៅ សត្វនរកស្រែកទ្រហោយំយ៉ាងខ្លាំងរំពងពេញលំហអាកាស។\n— កម្មដែលនាំឱ្យធ្លាក់ ៖ ការសេពសុរា និងគ្រឿងញៀនដែលបំផ្លាញស្មារតី ការកុហកបោកប្រាស់បំផ្លាញជីវិតអ្នកដទៃ ការរំលោភសេពសន្ថវៈ (កាមេសុមិច្ឆាចារ)។\n— អាយុកាល ៖ ៤,០០០ ឆ្នាំនរក (១ ថ្ងៃយប់នរក = ៥៧៦ លានឆ្នាំមនុស្ស; សរុបស្មើនឹង ៨២៩,៤៤០,០០០ លានឆ្នាំមនុស្ស)។',
        contentEn: '— Name & Environment: Roruva means "wailing/shrieking". Filled with unquenchable roaring flame.\n— Torment: Victims are forced into hollow red-hot iron lotus pits. Blazing fire bursts inward through all 9 bodily orifices (2 eyes, 2 ears, 2 nostrils, mouth, anus, and urethra), liquefying internal viscera while the condemned emit deafening roars of agony.\n— Karmic Cause: Chronic alcohol and drug addiction destroying moral consciousness, malicious deceit ruining lives, and sexual assault/adultery (kāmesu micchācāra).\n— Lifespan: 4,000 hell years (1 hell day/night = 576 million human years; totaling 829.44 million million human years).'
      },
      {
        titleKm: '៥. មហារោរុវមហានរក ឬ ធូមារោរុវៈ (Mahāroruva — នរកស្រែកទ្រហោយំដោយផ្សែងពុល)',
        titleEn: '5. Mahāroruva / Dhūmaroruva Mahānaraka: The Suffocating Smoke Hell',
        contentKm: '— អត្ថន័យ និងបរិស្ថាន ៖ នរកនេះខុសប្លែកពីនរកដទៃត្រង់ថា «គ្មានអណ្តាតភ្លើងចំហឡើយ ប៉ុន្តែពោរពេញដោយផ្សែងដែកក្តៅហុយទ្រលោម» ដែលមានជាតិពុល និងជាតិអាស៊ីតកាត់យ៉ាងខ្លាំងក្លា។\n— ទារុណកម្មជាក់ស្តែង ៖ ផ្សែងក្តៅពុលបានជ្រាបចូលតាមរន្ធញើស និងច្រមុះ មាត់ ចូលទៅដុតរោលសាច់ ឈាម ឆ្អឹង និងខួរក្បាលពីខាងក្នុង។ ទុក្ខវេទនានេះខ្លាំងជាងរោរុវនរកទ្វេដង សត្វនរកស្ទះដង្ហើម ស្រែកយំលែងចេញសំឡេង បានត្រឹមតែដកដង្ហក់ និងប្រកាច់ននៀលលើកម្រាលដែក។\n— កម្មដែលនាំឱ្យធ្លាក់ ៖ ការលួចប្លន់ទ្រព្យសម្បត្តិព្រះពុទ្ធសាសនា (ទ្រព្យវត្តអារាម ទ្រព្យសង្ឃ) ការកេងប្រវ័ញ្ចទ្រព្យសាធារណៈ ការក្លែងបន្លំបោកប្រាស់សទ្ធាអ្នកមានជំនឿ និងការប្រព្រឹត្តអំពើពុករលួយកម្រិតធ្ងន់។\n— អាយុកាល ៖ ៨,០០០ ឆ្នាំនរក (១ ថ្ងៃយប់នរក = ២,៣០៤ លានឆ្នាំមនុស្ស; សរុបស្មើនឹង ៦,៦៣៥,៥២០,០០០ លានឆ្នាំមនុស្ស)។',
        contentEn: '— Name & Environment: Mahāroruva / Dhūmaroruva means "Great Screaming with Smoke". Instead of open fire, it is choked with thick, scorching, acidic metallic smoke.\n— Torment: Caustic toxic smoke penetrates through every skin pore, nostril, and mouth, corroding marrow, bone, and cerebral tissues from within. Victims suffocate in silence, unable to draw breath to scream, thrashing in blind convulsion.\n— Karmic Cause: Embezzlement of monastic Dhamma property (saṅghika-dhana), grand public corruption, counterfeiting religious relics, exploiting devout believers.\n— Lifespan: 8,000 hell years (1 hell day/night = 2,304 million human years; totaling 6,635.52 million million human years).'
      },
      {
        titleKm: '៦. តាបនមហានរក (Tāpana — នរកដុតរោលលើចម្រូងដែក)',
        titleEn: '6. Tāpana Mahānaraka: The Impaling Iron Stake Hell',
        contentKm: '— អត្ថន័យ និងបរិស្ថាន ៖ «តាបនៈ» ប្រែថា ការធ្វើឱ្យក្តៅក្រហាយ។\n— ទារុណកម្មជាក់ស្តែង ៖ ពួកយមបាលចាប់សត្វនរកលើកដោតលើ «ចម្រូងដែកភ្លើងដ៏ធំសម្បើម» ដោយដោតទម្លុះពីទ្វារក្រោមធ្លុះឡើងលើក្បាល រួចបញ្ឈរចម្រូងដែកនោះលើគំនរភ្លើងដ៏សន្ធោសន្ធៅ។ សាច់សត្វនរកត្រូវភ្លើងដុតខ្លោចរលួយហូរស្រក់ចុះក្រោម ហើយមានឆ្កែនរក និងក្អែកដែកភ្នែកក្រហម ចាំហែកស៊ីសាច់ដែលធ្លាក់នោះ។\n— កម្មដែលនាំឱ្យធ្លាក់ ៖ ការដុតបំផ្លាញព្រៃឈើ បំផ្លាញភូមិឋាន ដុតសម្លាប់សត្វទាំងរស់ ឬការសម្លាប់ជីវិតសត្វដោយការយកទៅស្ងោរ អាំង ឬបំពងទាំងនៅរស់។\n— អាយុកាល ៖ ១៦,០០០ ឆ្នាំនរក (១ ថ្ងៃយប់នរក = ៩,២១៦ លានឆ្នាំមនុស្ស; សរុបស្មើនឹង ៥៣,០៨៤,១៦០,០០០ លានឆ្នាំមនុស្ស)។',
        contentEn: '— Name & Environment: Tāpana means "tormenting heat". Characterized by towering impaling spikes fixed over roaring furnaces.\n— Torment: Wardens impale victims lengthwise on incandescent iron spits—driving through the lower torso and out through the skull—and plant them upright over molten infernos. As roasting flesh drips down, iron-beaked crows and ravenous hell-hounds devour the falling entrails.\n— Karmic Cause: Arson, wildfire clearance incinerating wildlife, cooking, boiling, or frying animals alive.\n— Lifespan: 16,000 hell years (1 hell day/night = 9,216 million human years; totaling 53,084.16 million million human years).'
      },
      {
        titleKm: '៧. មហាតាបនមហានរក (Mahātāpana — នរកដុតរោលដ៏មហិមា)',
        titleEn: '7. Mahātāpana Mahānaraka: The Great Escalating Fire Hell',
        contentKm: '— អត្ថន័យ និងបរិស្ថាន ៖ នរកដែលបង្កើនកម្រិតកម្ដៅ និងការឈឺចាប់លើសតាបននរកជាច្រើនដង ដោយមានភ្នំដែកភ្លើងដុះច្រូងច្រាង។\n— ទារុណកម្មជាក់ស្តែង ៖ ពួកយមបាលកាន់លំពែង និងច្រវាក់ភ្លើង ដេញកាប់ចាក់បង្ខំឱ្យសត្វនរករត់ឡើងទៅលើកំពូលភ្នំដែកដែលកំពុងឆេះក្រហមច្រាល។ លុះឡើងដល់កំពូលភ្នំ ស្រាប់តែមាន «ខ្យល់ព្យុះភ្លើងបក់បោកយ៉ាងខ្លាំង» ផាត់សត្វនរកឱ្យធ្លាក់ចុះមកក្រោមវិញ ដោយធ្លាក់ចំលើចម្រូងដែក ដាវ និងលំពែងភ្លើងដែលដោតច្រូងច្រាងនៅបាតភ្នំ ធ្លុះធ្លាយខ្លួនរាប់កំណាត់។\n— កម្មដែលនាំឱ្យធ្លាក់ ៖ មិច្ឆាទិដ្ឋិធ្ងន់ធ្ងរ (ការប្រកាន់ជំហរបដិសេធបុណ្យបាប បដិសេធផលនៃកម្ម បដិសេធគុណម្តាយឪពុក) និងការដើរបញ្ចុះបញ្ចូលបំផ្លាញជំនឿល្អរបស់អ្នកដទៃឱ្យដើរផ្លូវខុសតាមខ្លួន។\n— អាយុកាល ៖ កន្លះអន្តរកប្ប (Half an Antarakappa) ដែលជាពេលវេលាយូរអង្វែងរាប់ឆ្នាំមនុស្សលែងកើត។',
        contentEn: '— Name & Environment: Mahātāpana means "Great Heat". Dominated by razor-sharp jagged iron cliffs glowing white-hot.\n— Torment: Wardens whip and impale victims, forcing them to scale incandescent iron peaks. Upon reaching the summit, violent firestorms blow them off the precipice to plummet onto hundreds of upward-pointing iron spears and spikes at the base.\n— Karmic Cause: Stubborn pernicious wrong view (niyata-micchā-diṭṭhi: nihilism, denial of kamma, denial of parents\' virtues) and aggressively propagating nihilistic delusions to lead others astray.\n— Lifespan: Half an Antarakappa (an astronomical expanse impossible to calculate in solar years).'
      },
      {
        titleKm: '៨. អវិចីមហានរក (Avīci — នរកដែលគ្មានចន្លោះទំនេរ)',
        titleEn: '8. Avīci Mahānaraka: The Uninterrupted Intervalless Hell',
        contentKm: '— អត្ថន័យ និងបរិស្ថាន ៖ «អវិចី» ប្រែថា គ្មានចន្លោះ (No Interval) គឺ គ្មានចន្លោះទំនេរនៃរូបកាយ គ្មានចន្លោះទំនេរនៃភ្លើង និងគ្មានចន្លោះទំនេរនៃពេលវេលាសម្រាក សូម្បីតែមួយប៉ប្រិចភ្នែក។ នរកនេះមានទំហំធំបំផុត ហ៊ុមព័ទ្ធដោយជញ្ជាំងដែកកម្រាស់ ៩ យោជន៍ ទាំង ៦ ទិស (លើ ក្រោម កើត លិច ត្បូង ជើង)។\n— ទារុណកម្មជាក់ស្តែង ៖ អណ្តាតភ្លើងបាញ់ចេញពីជញ្ជាំងទាំង ៦ ទិស ប៉ះទង្គិចគ្នានៅចំកណ្តាលយ៉ាងសន្ធោសន្ធៅ។ សត្វនរកឈរណែនណាន់តាន់តាប់ដូចគ្រាប់ល្ងដែលគេញាត់ក្នុងបំពង់ឫស្សី គ្មានចន្លោះកម្រើកខ្លួនឡើយ។ សត្វនរកត្រូវភ្លើងដុតទម្លុះពីមុខទៅក្រោយ ពីលើចុះក្រោម ២៤ ម៉ោងជាប់រហូត គ្មានពេលសម្រាកដកដង្ហើមសូម្បីតែមួយវិនាទី (ខុសពីនរក ៧ ខាងលើ ដែលពេលខ្លះនៅមានចន្លោះពេលខ្យល់បក់រស់ឡើងវិញបន្តិច)។\n— កម្មដែលនាំឱ្យធ្លាក់ ៖ អនន្តរិយកម្មទាំង ៥ (សម្លាប់ម្តាយ, សម្លាប់ឪពុក, សម្លាប់ព្រះអរហន្ត, ធ្វើឱ្យព្រះពុទ្ធចេញឈាម, បំបែកសង្ឃ) ដូចជាករណីព្រះទេវទត្ត និងនន្ទមាណព (ដែលចាប់រំលោភព្រះឧប្បលវណ្ណាថេរី)។\n— អាយុកាល ៖ ១ អន្តរកប្បពេញ (1 Full Antarakappa) ពោលគឺរង់ចាំរហូតដល់អាយុកាលមនុស្សលើផែនដីឡើងពី ១០ ឆ្នាំ ដល់អសង្ខេយ្យឆ្នាំ រួចថយចុះមកដល់ ១០ ឆ្នាំវិញ ទើបអាចអស់កម្ម។',
        contentEn: '— Name & Environment: Avīci means "Without Wave/Interval" (A-vīci): zero spatial gap, zero temporal relief, zero temperature relief. Vaulted in a 9-yojana-thick iron cube enclosing all 6 directions.\n— Torment: Roaring flame jets erupt simultaneously from top, bottom, east, west, north, and south walls, colliding in the core. Beings stand packed tight as sesame seeds in a tube, unable to budge. Torment is completely contiguous with zero seconds of respite.\n— Karmic Cause: The 5 Anantarika-kamma (matricide, patricide, murdering an Arahant, wounding a Buddha, causing a schism in the Sangha) and heinous violations like Nanda raping Uppalavaṇṇā Therī.\n— Lifespan: 1 Full Antarakappa (the colossal span required for human lifespan to cycle from 10 years up to Asaṅkheyya and back down to 10 years).'
      },
      {
        titleKm: '៩. តារាងប្រៀបធៀបសង្ខេបមហានរកទាំង ៨ ជាន់',
        titleEn: '9. Summary Comparison Table of the Eight Great Hells',
        contentKm: 'សង្ខេបលក្ខណៈសម្បត្តិនៃមហានរកទាំង ៨ ជាន់ តាមលំដាប់ជាន់ ៖',
        contentEn: 'Overview comparison of the eight great hells:',
        points: [
          { boldKm: '១. សញ្ជីវៈ', boldEn: '1. Sañjīva', km: 'ទារុណកម្ម ៖ កាប់ចិញ្ច្រាំ រស់ឡើងវិញតាមខ្យល់កម្ម | កម្ម ៖ សម្លាប់សត្វច្រើន ធ្វើបាបជីវិត | អាយុ ៖ ៥០០ ឆ្នាំនរក (១,៦២០,០០០ លានឆ្នាំមនុស្ស)។', en: 'Torment: Butchered, revived by karmic wind | Cause: Habitual slaughter | Lifespan: 500 hell yrs (1.62M million human yrs).' },
          { boldKm: '២. កាឡសុត្តៈ', boldEn: '2. Kāḷasutta', km: 'ទារុណកម្ម ៖ គូសបន្ទាត់ខ្មៅ អារច្រៀកតាមខ្សែ | កម្ម ៖ បៀតបៀនអ្នកមានគុណ លួចទ្រព្យ | អាយុ ៖ ១,០០០ ឆ្នាំនរក (១២,៩៦០,០០០ លានឆ្នាំមនុស្ស)។', en: 'Torment: Black lines, sawn into planks | Cause: Abusing parents, grand theft | Lifespan: 1,000 hell yrs (12.96M million human yrs).' },
          { boldKm: '៣. សង្ឃាតៈ', boldEn: '3. Sanghāta', km: 'ទារុណកម្ម ៖ ភ្នំដែកភ្លើងរមៀលកិនសង្កត់ | កម្ម ៖ ជិះជាន់អ្នកទន់ខ្សោយ បង្ខំកម្លាំងសត្វ | អាយុ ៖ ២,០០០ ឆ្នាំនរក (១០៣,៦៨០,០០០ លានឆ្នាំមនុស្ស)។', en: 'Torment: Rolling iron mountains crush | Cause: Oppression, animal abuse | Lifespan: 2,000 hell yrs (103.68M million human yrs).' },
          { boldKm: '៤. រោរុវៈ', boldEn: '4. Roruva', km: 'ទារុណកម្ម ៖ ភ្លើងឆេះទម្លុះទ្វារកាយទាំង ៩ | កម្ម ៖ ស្រវឹងខួប កុហក រំលោភសេពសន្ថវៈ | អាយុ ៖ ៤,០០០ ឆ្នាំនរក (៨២៩,៤៤០,០០០ លានឆ្នាំមនុស្ស)។', en: 'Torment: Fire piercing 9 orifices | Cause: Addiction, deceit, sexual assault | Lifespan: 4,000 hell yrs (829.44M million human yrs).' },
          { boldKm: '៥. មហារោរុវៈ', boldEn: '5. Mahāroruva', km: 'ទារុណកម្ម ៖ ផ្សែងដែកក្តៅពុលចូលដុតសរីរាង្គក្នុង | កម្ម ៖ ប្លន់ទ្រព្យសង្ឃ ក្លែងបន្លំធម៌ ពុករលួយ | អាយុ ៖ ៨,០០០ ឆ្នាំនរក (៦,៦៣៥,៥២០,០០០ លានឆ្នាំមនុស្ស)។', en: 'Torment: Corrosive acidic smoke | Cause: Embezzling temple property, graft | Lifespan: 8,000 hell yrs (6,635.52M million human yrs).' },
          { boldKm: '៦. តាបនៈ', boldEn: '6. Tāpana', km: 'ទារុណកម្ម ៖ ដោតលើចម្រូងដែកភ្លើង អាំងរោល | កម្ម ៖ ដុតព្រៃ ដុតសត្វ ដុតផ្ទះសម្បែង | អាយុ ៖ ១៦,០០០ ឆ្នាំនរក (៥៣,០៨៤,១៦០,០០០ លានឆ្នាំមនុស្ស)។', en: 'Torment: Impaled on blazing spits | Cause: Arson, roasting animals alive | Lifespan: 16,000 hell yrs (53,084.16M million human yrs).' },
          { boldKm: '៧. មហាតាបនៈ', boldEn: '7. Mahātāpana', km: 'ទារុណកម្ម ៖ រត់ឡើងភ្នំភ្លើង ត្រូវខ្យល់បក់ធ្លាក់លើដាវ | កម្ម ៖ មិច្ឆាទិដ្ឋិធ្ងន់ធ្ងរ បដិសេធកម្មផល | អាយុ ៖ កន្លះអន្តរកប្ប (Half an Antarakappa)។', en: 'Torment: Blown from peaks onto spears | Cause: Stubborn nihilism (micchādiṭṭhi) | Lifespan: Half an Antarakappa.' },
          { boldKm: '៨. អវិចី', boldEn: '8. Avīci', km: 'ទារុណកម្ម ៖ ភ្លើងឆេះជាប់គ្នាសព្វទិស គ្មានចន្លោះសម្រាក | កម្ម ៖ អនន្តរិយកម្ម ៥ (សម្លាប់ឪពុកម្តាយ...) | អាយុ ៖ ១ អន្តរកប្បពេញ (1 Full Antarakappa)។', en: 'Torment: Uninterrupted inferno in 6 directions | Cause: 5 Anantarika-kamma | Lifespan: 1 Full Antarakappa.' }
        ]
      }
    ]
  },

  // GEM 21: The Sixteen Ussada (Auxiliary) Hells in Exhaustive Canonical Detail (Tipiṭaka, Nimi Jātaka & Aṭṭhakathā)
  {
    id: 'sixteen-ussada-hells',
    num: 21,
    open: false,
    category: 'death',
    categoryKm: '💀 ឧស្សទនរកទាំង ១៦ ជាន់',
    categoryEn: '💀 The 16 Ussada Hells',
    ref: 'ទេវទូតសូត្រ (MN 130), និមិរាជជាតក (Jātaka 541), ពាលបណ្ឌិតសូត្រ & វិសុទ្ធិមគ្គ',
    paliQuote: 'តស្ស ខោ បន ភិក្ខវេ មហានិរយស្ស... ចតុណ្ណំ ទ្វារា សោឡស ឧស្សទនិរយា បរិក្ខិត្តា (នៅជុំវិញទ្វារទាំង ៤ នៃមហានរកនីមួយៗ មានឧស្សទនរក ១៦ តម្រៀបគ្នាជាបរិវារ)',
    questionKm: 'យោងតាមគម្ពីរព្រះត្រៃបិដក និងអដ្ឋកថា តើ «ឧស្សទនរក» (នរកបរិវារទាំង ១៦ ជាន់) មានឈ្មោះអ្វីខ្លះ ទារុណកម្មជាក់ស្តែង និងកម្មផលដែលនាំឱ្យធ្លាក់យ៉ាងដូចម្ដេច?',
    questionEn: 'According to the Tipiṭaka and Commentaries, what are the Sixteen Ussada (Auxiliary) Hells, their specific torments, and the distinct karmic causes leading to each?',
    shortKm: 'ឧស្សទនរកទាំង ១៦ ជាន់ ពិស្តារ',
    shortEn: 'The 16 Ussada (Auxiliary) Hells',
    essenceKm: 'នៅក្នុងគម្ពីរព្រះត្រៃបិដក (ទេវទូតសូត្រ, ពាលបណ្ឌិតសូត្រ និង និមិរាជជាតក) មហានរកធំៗទាំង ៨ នីមួយៗ មានទ្វារដែក ៤ នៅទិសទាំងបួន ហើយនៅជុំវិញទ្វារនីមួយៗ មាន «ឧស្សទនរក» (នរកបរិវារ) ចំនួន ១៦ ជាន់ តម្រៀបជុំវិញ ដែលជាទីលានធ្វើទារុណកម្មបន្តសម្រាប់សត្វនរកដែលរើខ្លួនចេញពីមហានរកធំ។ នរកទាំង ១៦ រួមមាន ៖ (១) អង្គារកាសុ (រណ្តៅរងើកភ្លើង) (២) កុក្កុលៈ (កម្ទេចផេះក្តៅ) (៣) គូថៈ (ទឹកលាមក & ដង្កូវមាត់ម្ជុល) (៤) អសិបត្តវនៈ (ព្រៃស្លឹកដាវ) (៥) សិម្ពលីវនៈ (ព្រៃដើមរកាបន្លាដែក) (៦) វេតរណី (ស្ទឹងទឹកក្បុងអាស៊ីត) (៧) ថោហរៈ (ភក់ជ្រាំស្អុយក្តៅ) (៨) សត្តិកូលៈ (ចម្រូងលំពែងដែក) (៩) អយោគុឡៈ (ដុំដែកភ្លើងច្រកមាត់) (១០) តម្ពលោហៈ (ទឹកទង់ដែងរលាយពុះ) (១១) លោហកុម្ភី (ថ្លាងដែកពុះ ៦០,០០០ ឆ្នាំ) (១២) យន្តបាសាណៈ (ត្បាល់កិនយន្តថ្ម) (១៣) សុនខៈ (ហ្វូងឆ្កែដែក និងត្មាតដែក) (១៤) ខុរធារៈ (ភ្នំកាំបិតកោរ) (១៥) សីតោទកៈ (ទឹកត្រជាក់កកសូន្យសុង) (១៦) អយោឃរៈ (បន្ទប់ដែកភ្លើងបិទជិត)។',
    essenceEn: 'In the Tipiṭaka (Devadūta Sutta MN 130, Bālapaṇḍita Sutta MN 129, and Nimi Jātaka 541), each of the Eight Great Hells has four iron gates, and surrounding each gate are 16 auxiliary satellite hells (Ussada Naraka) where escaping victims encounter secondary karmic retribution: (1) Aṅgārakāsu (Glowing Coals), (2) Kukkula (Boiling Ash), (3) Gūtha (Filth & Needle Worms), (4) Asipattavana (Sword-Leaf Forest), (5) Simbalīvana (Thorny Silk-Cotton Tree), (6) Vettaraṇī (Caustic Acid River), (7) Thohara (Scalding Putrid Slime), (8) Sattisūla (Iron Spear Spikes), (9) Ayoguḷa (Swallowing Fiery Iron Balls), (10) Tambaloha (Molten Copper Gulping), (11) Lohakumbhī (Giant 60,000-year Boiling Cauldron), (12) Yantapāsāṇa (Crushing Mountain Presses), (13) Sunakha (Iron Dogs & Vultures), (14) Khuradhāra (Razor Blade Mountain), (15) Sītodaka (Sub-zero Glacial Ice), and (16) Ayoghara (Sealed Blazing Iron Vault).',
    practicalKm: 'ឧស្សទនរកទាំង ១៦ បង្ហាញពីលក្ខណៈជាក់លាក់នៃ «កម្មផលសមមូល» (Karmic Retribution Parallels) ៖ អំពើបាបដែលប្រព្រឹត្តបែបណា នឹងបង្កើតជាបរិស្ថានធ្វើទារុណកម្មបែបនោះយ៉ាងសក្តិសម (អ្នកផិតក្បត់ត្រូវឡើងដើមរកា, អ្នកកុហកត្រូវកាត់អណ្តាត, អ្នកលួចលាក់ស៊ីសំណូកត្រូវច្រកដុំដែកភ្លើង)។ ការដឹងច្បាស់ពីទារុណកម្មទាំងនេះ ជួយឱ្យយើងមិនហ៊ានប្រព្រឹត្តអំពើបាប ទោះជាបាបតូចតាចក្នុងទីកំបាំងមុខក៏ដោយ។',
    practicalEn: 'The 16 Ussada hells reveal the exact somatic mirror of moral retribution: the mode of evil dictates the mode of torment (adulterers scale thorny trees, slanderers endure razor mountains, thieves swallow fiery iron). Contemplating this exact psychophysical mirror instills unwavering diligence in avoiding even the slightest hidden transgressions.',
    links: [
      { to: '/questions', km: 'សំណួរ–ចម្លើយ ៤១', en: 'Q&A 41' },
      { to: '/my-gems#eight-great-hells', km: 'មហានរកទាំង ៨ ជាន់', en: 'The 8 Great Hells' },
      { to: '/my-gems#hell-merit-prayers', km: 'សត្វនរក ៖ បួងសួង ឬទទួលបុណ្យបានទេ?', en: 'Hell Merit & Prayers' },
      { to: '/my-gems#hell-body-regeneration', km: 'រូបកាយសត្វនរក ៖ ហេតុអ្វីមិនស្លាប់?', en: 'Hell Body Regeneration' },
      { to: '/realms', km: 'ភពទាំង ៣១ ជាន់ & នរក', en: '31 Planes & Hell Realms' }
    ],
    sections: [
      {
        titleKm: '១. ឧស្សទនរក ជាន់ទី ១ ដល់ ទី ៤ (រណ្តៅរងើកភ្លើង, ផេះក្តៅ, ទឹកលាមក & ព្រៃស្លឹកដាវ)',
        titleEn: '1. Ussada Hells 1 to 4: Fiery Coals, Hot Ashes, Excrement Worms & Sword Forests',
        contentKm: 'ការធ្វើទារុណកម្មនៅតាមទ្វារចេញនៃមហានរក ៖',
        contentEn: 'Torment stations confronting denizens fleeing the four gates of Mahānaraka:',
        points: [
          {
            boldKm: '១. អង្គារកាសុនរក (Aṅgārakāsu — នរករណ្តៅរងើកភ្លើង)',
            boldEn: '1. Aṅgārakāsu (Glowing Coals Pit Hell)',
            km: 'ទារុណកម្ម ៖ រណ្តៅធ្យូងភ្លើងដ៏ធំសម្បើម ជម្រៅរាប់សិបម៉ែត្រ ដុតរោលក្រហមច្រាលគ្មានផ្សែង។ ពេលសត្វនរករត់ចេញពីទ្វារមហានរក ព្រោះស្មានថារួចខ្លួន ក៏ស្រាប់តែធ្លាក់ជើងកប់ក្នុងរណ្តៅរងើកភ្លើងនេះ។ យមបាលយកដំបងដែកភ្លើងវាយសង្កត់ក្បាលឱ្យលិចកប់ក្នុងរងើកភ្លើង ឆេះសាច់បាតជើង ភ្លៅ និងខ្លួនប្រាណរលាយភ្លាមៗ។ | កម្ម ៖ ការបោកប្រាស់បន្លំជញ្ជីង កេងប្រវ័ញ្ចទម្ងន់ទំនិញ ការលួចបន្លំកេងកិបថវិកាសាធារណៈ និងការលួចទ្រព្យអ្នកដទៃដោយកលល្បិចស្ងាត់ៗ។',
            en: 'Torment: Massive pit of white-hot embers without smoke. Fleeing victims sink into burning coals while wardens bludgeon their heads downward, incinerating limbs and flesh instantly. | Karmic Cause: Rigging market scales, fraudulent trade weights, embezzlement of public funds, and clandestine extortion.'
          },
          {
            boldKm: '២. កុក្កុលនរក (Kukkula — នរកកម្ទេចផេះក្តៅ)',
            boldEn: '2. Kukkula (Scalding Ash Pit Hell)',
            km: 'ទារុណកម្ម ៖ រណ្តៅផេះក្តៅហុយផ្សែងទ្រលោម មើលពីលើដូចជាដីរាបស្មើធម្មតា ប៉ុន្តែខាងក្រោមជាកម្ទេចផេះភ្លើងដុតពុះគគ្រុក។ សត្វនរករត់ជាន់លើ ស្រាប់តែស្រុតជើងលិចដល់ក្បាលជង្គង់ ភ្លៅ ឬទ្រូង ផេះក្តៅកាត់រលួយសាច់ស្បែករហូតដល់សល់តែឆ្អឹង។ | កម្ម ៖ ការបំផ្លាញផលប្រយោជន៍អ្នកដទៃ ការលួចដុតបំផ្លាញស្រែចម្ការ ផ្ទះសម្បែង និងការធ្វើឱ្យខូចខាតទ្រព្យសម្បត្តិសាធារណៈ។',
            en: 'Torment: Decpetively flat field of boiling ash. As victims step across, they sink to knees, hips, and chest, corrosive heat sloughing muscle and skin to the bone. | Karmic Cause: Sabotaging livelihoods, arson burning fields, destroying homes, and damaging common infrastructure.'
          },
          {
            boldKm: '៣. គូថនរក (Gūtha — នរកទឹកលាមក & ដង្កូវមាត់ម្ជុល)',
            boldEn: '3. Gūtha (Excrement & Needle-Mouthed Worms Hell)',
            km: 'ទារុណកម្ម ៖ អន្លង់ទឹកលាមកស្អុយគគ្រុកជ្រៅរាប់យោជន៍ ពោរពេញដោយ «ដង្កូវមាត់ដែក» (សូចិមុខបាណៈ) ទំហំប៉ុនដើមត្នោត។ ដង្កូវទាំងនោះមានមាត់ស្រួចដូចម្ជុល ចោះទម្លុះស្បែក ក្បាល ភ្នែក ច្រមុះ ចូលទៅទំពាស៊ីខួរក្បាល ពោះវៀន និងសរីរាង្គក្នុងយ៉ាងវេទនា។ | កម្ម ៖ ការបង្ខូចកេរ្តិ៍ឈ្មោះអ្នកដទៃ ការប្រមាថចាស់ព្រឹទ្ធាចារ្យ ការក្បត់ទំនុកចិត្ត និងការរស់នៅដោយកេងប្រវ័ញ្ចញើសឈាមអ្នកដទៃដោយគ្មានភាពខ្មាសអៀន។',
            en: 'Torment: Vast ocean of putrid feces populated by palm-tree-sized needle-mouthed iron worms (sūcimukha). They bore through skull, eyes, and skin to devour brain, heart, and intestines from inside. | Karmic Cause: Malicious defamation, insulting elders, betraying trust, and shamelessly parasitizing the livelihood of others.'
          },
          {
            boldKm: '៤. អសិបត្តវននរក (Asipattavana — នរកព្រៃស្លឹកដាវ)',
            boldEn: '4. Asipattavana (Sword-Leaf Forest Hell)',
            km: 'ទារុណកម្ម ៖ ព្រៃឈើដ៏ធំសម្បើម មើលពីចម្ងាយដូចជាព្រៃម្លប់ត្រជាក់ ធ្វើឱ្យសត្វនរករត់ចូលទៅជ្រកកោន។ ប៉ុន្តែស្លឹកឈើទាំងអស់សុទ្ធសឹងជា ផ្លែដាវពីរមុខដ៏មុតស្រួច។ ពេលខ្យល់បក់មក ស្លឹកដាវជ្រុះធ្លាក់ដូចគ្រាប់ភ្លៀង កាត់ផ្តាច់ក្បាល ដៃ ជើង ត្រចៀក ច្រមុះធ្លាក់រាយប៉ាយ។ ពេលដួលលើដី ស្មៅដែកមុតស្រួចដោតទម្លុះខ្នងបន្តទៀត។ | កម្ម ៖ ការកាប់ចាក់ប្រហារគ្នា ការធ្វើសង្គ្រាមឈ្លានពាន ការប្រើអាវុធគំរាមកំហែង និងការបំផ្លាញសន្តិភាពសង្គម។',
            en: 'Torment: Forest resembling cool shade that entices victims. Every leaf is a double-edged razor blade. Winds shower blade-rain amputating heads, arms, and ears; fallen victims are impaled by iron razor grass below. | Karmic Cause: Violent assaults, instigating aggressive wars, wielding lethal weapons to terrorize, and destroying social harmony.'
          }
        ]
      },
      {
        titleKm: '២. ឧស្សទនរក ជាន់ទី ៥ ដល់ ទី ៨ (ព្រៃដើមរកា, ស្ទឹងអាស៊ីត, ភក់ជ្រាំ & ចម្រូងលំពែង)',
        titleEn: '2. Ussada Hells 5 to 8: Thorny Trees, Acid Rivers, Boiling Mud & Iron Spears',
        contentKm: 'ការធ្វើទារុណកម្មសម្រាប់កម្មកាមគុណ អំណាចអយុត្តិធម៌ និងការប្រមាញ់ ៖',
        contentEn: 'Torment stations addressing sexual misconduct, judicial corruption, and violent hunting:',
        points: [
          {
            boldKm: '៥. សិម្ពលីវននរក (Simbalīvana — នរកព្រៃដើមរកាបន្លាដែក)',
            boldEn: '5. Simbalīvana (Thorny Silk-Cotton Tree Hell)',
            km: 'ទារុណកម្ម ៖ ព្រៃដើមរកាដែកកម្ពស់ ១ យោជន៍ មានបន្លាដែកភ្លើងដុះច្រូងច្រាងប្រវែង ១៦ ធ្នាប់ (ប្រហែលកន្លះម៉ែត្រ)។ យមបាលកាន់លំពែងដែកភ្លើងចាក់គំរាមពីក្រោយ បង្ខំឱ្យឡើងដើមរកា។ ពេលឡើងទៅ បន្លាងាកចុះក្រោមដោតទម្លុះទ្រូង និងពោះ លុះដល់ចុង ក្អែកដែក និងត្មាតដែកទុំចឹកភ្នែក។ ពេលយមបាលបង្ខំឱ្យចុះមកវិញ បន្លាងាកឡើងលើដោតច្រាសទម្លុះខ្លួនបន្តទៀត។ | កម្ម ៖ អំពើកាមេសុមិច្ឆាចារ (ការផិតក្បត់ប្តីប្រពន្ធ ការលួចលាក់មានសហាយស្មន់ និងការរំលោភបំពានផ្លូវភេទកូនក្រមុំ ឬប្រពន្ធអ្នកដទៃ)។',
            en: 'Torment: 1-yojana tall iron trees covered with foot-long incandescent spikes. Wardens with flaming tridents force victims up; upward climbing bends spikes downward to gore chests; at the top, iron vultures peck out eyes; forced down, thorns bend upward to gore them in reverse. | Karmic Cause: Adultery (kāmesu micchācāra), sexual assault, seducing others\' spouses, and shattering families.'
          },
          {
            boldKm: '៦. វេតរណីនរក ឬ ខារោទកនរក (Vettaraṇī — នរកស្ទឹងទឹកក្បុងអាស៊ីត)',
            boldEn: '6. Vettaraṇī / Khārodaka (Caustic Acid River Hell)',
            km: 'ទារុណកម្ម ៖ ស្ទឹងទឹកក្បុងអាស៊ីតក្តៅពុះ ដែលមានបន្លាផ្តៅដែកដុះទ្រុបទ្រុល និងផ្កាឈូកដែកមុតស្រួចក្នុងទឹក។ សត្វនរកដែលស្រេកទឹកខ្លាំង ស្ទុះលោតចុះទៅ ត្រូវទឹកអាស៊ីតកាត់រលាយសាច់ និងឆ្អឹង ហើយត្រូវបន្លាផ្តៅដែកមុតជាប់ ព្រមទាំងមានយមបាលយកសន្ទូចដែកស្ទូចទាញមកច្រាំងធ្វើទារុណកម្មបន្ត។ | កម្ម ៖ ការជិះជាន់សង្កត់សង្កិនអ្នកទន់ខ្សោយ ការប្រើប្រាស់អំណាចតុលាការដោយអយុត្តិធម៌ និងការកេងប្រវ័ញ្ចយកដីធ្លីអ្នកក្រីក្រ។',
            en: 'Torment: Boiling river of caustic lye/acid fringed with iron ratan cane thorns and razor lotus pads. Parched victims jump in only to have flesh dissolved; wardens dredge them out with iron fishhooks for further flogging. | Karmic Cause: Oppressing the vulnerable, judicial bribery, passing corrupt verdicts, and dispossessing impoverished landowners.'
          },
          {
            boldKm: '៧. ថោហរនរក (Thohara — នរកភក់ជ្រាំស្អុយក្តៅ)',
            boldEn: '7. Thohara (Scalding Putrid Slime Hell)',
            km: 'ទារុណកម្ម ៖ អន្លង់ភក់ល្បាប់ក្តៅពុះក្រហមច្រាល និងមានក្លិនស្អុយអសោចលើសពីសាកសពរាប់ពាន់ដង។ សត្វនរកលិចកប់ក្នុងភក់នោះ ដកដង្ហើមចូលសុទ្ធតែជាតិពុលរលាកសួត និងរលាយសរីរាង្គខាងក្នុង។ | កម្ម ៖ ការលក់ចំណីអាហារពុល ការលាយសារធាតុគ្រោះថ្នាក់ក្នុងអាហារឱ្យគេបរិភោគ និងការប្រកបរបរទុច្ចរិតបំផ្លាញសុខភាពអ្នកដទៃ។',
            en: 'Torment: Vast bog of boiling, putrid slime emitting toxic vapor thousands of times viler than rotting corpses. Inhaled fumes ulcerate lungs and dissolve internal organs. | Karmic Cause: Selling adulterated poisonous food, spiking consumables with deadly chemicals, and greedy commercial practices harming public health.'
          },
          {
            boldKm: '៨. សត្តិកូលនរក (Sattisūla — នរកចម្រូងលំពែងដែក)',
            boldEn: '8. Sattisūla (Iron Spear Spikes Hell)',
            km: 'ទារុណកម្ម ៖ វាលរាបដែលដោតពេញដោយចម្រូងដែក ដាវ និងលំពែងភ្លើងច្រូងច្រាងដូចព្រៃឫស្សី។ ពួកយមបាលចាប់ជើងសត្វនរកបោកបោះទម្លាក់ពីលើអាកាស ឱ្យធ្លាក់មកដោតច្រូងចំចម្រូងលំពែងទាំងនោះធ្លុះធ្លាយខ្លួន។ | កម្ម ៖ ការបាញ់សម្លាប់សត្វព្រៃ ការដាក់អន្ទាក់សម្លាប់សត្វ និងការប្រើឧបាយកលធ្វើបាបមនុស្សស្លូតត្រង់។',
            en: 'Torment: Field bristling with blazing iron spears, javelins, and stakes dense as a bamboo grove. Wardens seize victims by the ankles and fling them high, impaling them through torsos upon descending. | Karmic Cause: Trapping and shooting wildlife, setting snare traps for birds/game, and malicious conspiracies entrapping innocents.'
          }
        ]
      },
      {
        titleKm: '៣. ឧស្សទនរក ជាន់ទី ៩ ដល់ ទី ១២ (ដុំដែកច្រកមាត់, ទឹកទង់ដែង, ថ្លាងដែក ៦០,០០០ ឆ្នាំ & យន្តថ្មកិន)',
        titleEn: '3. Ussada Hells 9 to 12: Molten Balls, Molten Copper, 60,000-Yr Cauldron & Crushing Presses',
        contentKm: 'ការធ្វើទារុណកម្មចំពោះការឆបោកទ្រព្យសង្ឃ ការស្រវឹង និងការគាបសង្កត់ពលកម្ម ៖',
        contentEn: 'Torment stations punishing temple embezzlement, chronic drunkenness, and violent labor exploitation:',
        points: [
          {
            boldKm: '៩. អយោគុឡនរក (Ayoguḷa — នរកដុំដែកភ្លើងច្រកមាត់)',
            boldEn: '9. Ayoguḷa (Red-Hot Iron Ball Swallowing Hell)',
            km: 'ទារុណកម្ម ៖ យមបាលយកដង្កាប់ដែកភ្លើងគាស់ទាញមាត់សត្វនរកឱ្យរបើកធំ រួចយកដុំដែកដុតភ្លើងឡើងក្រហមច្រាលទំហំប៉ុនផ្លែក្រូច ឬផ្លែដូង មកញាត់ចូលក្នុងមាត់។ ដុំដែកនោះរលាយបំពង់ក ឆេះធ្លុះក្រពះ ពោះវៀន ហើយធ្លាក់ចេញតាមទ្វារលាមក។ | កម្ម ៖ ការលួចបន្លំ ឬឆបោកយកលុយកាក់ចំណីអាហាររបស់សង្ឃ ទ្រព្យវត្តអារាម ព្រមទាំងការកុហកភូតភរដើម្បីស៊ីសំណូកសូកប៉ាន់។',
            en: 'Torment: Wardens pry jaws open with tongs and force red-hot iron balls down their throats. The molten mass melts palate, burns through stomach and bowels, exiting through the anus. | Karmic Cause: Embezzling temple funds, misappropriating alms offerings, taking bribes, and feeding luxuriously on stolen monastic wealth.'
          },
          {
            boldKm: '១០. តម្ពលោហនរក (Tambaloha — នរកទឹកទង់ដែងរលាយពុះ)',
            boldEn: '10. Tambaloha (Boiling Molten Copper Hell)',
            km: 'ទារុណកម្ម ៖ ខ្ទះទង់ដែងដ៏ធំសម្បើម ពោរពេញដោយទឹកទង់ដែងរលាយក្តៅពុះគគ្រុក។ យមបាលចាប់សត្វនរកចងផ្កាប់មុខ រួចដងយកទឹកទង់ដែងពុះច្រកចូលមាត់ កាត់ផ្តាច់អណ្តាត បំពង់ក និងរលាយសរីរាង្គខាងក្នុងទាំងអស់។ | កម្ម ៖ ការសេពសុរា គ្រឿងស្រវឹង និងគ្រឿងញៀនជាប្រចាំ ការបំពុលអ្នកដទៃដោយគ្រឿងស្រវឹង និងការបង្ខំឱ្យគេផឹកថ្នាំពុល។',
            en: 'Torment: Vast vats filled with molten liquid copper. Wardens ladles boiling bronze down gaping throats, searing the tongue, dissolving the larynx, and liquefying internal organs. | Karmic Cause: Chronic alcohol and drug intoxication, spiking others\' drinks with intoxicating substances, and poisoning people.'
          },
          {
            boldKm: '១១. លោហកុម្ភីនរក (Lohakumbhī — នរកថ្លាងដែកពុះ ៦០,០០០ ឆ្នាំ)',
            boldEn: '11. Lohakumbhī (The 60,000-Year Giant Boiling Cauldron)',
            km: 'ទារុណកម្ម ៖ ថ្លាងដែកទំហំស្មើនឹងភ្នំ ដែលដុតភ្លើងពុះកញ្ជ្រោល។ សត្វនរកត្រូវទម្លាក់ចុះទៅក្នុងនោះ រមៀលលិចចុះទៅបាតថ្លាងអស់រយៈពេល ៣០,០០០ ឆ្នាំ ទើបអណ្តែតឡើងមកលើផ្ទៃវិញ ៣០,០០០ ឆ្នាំ រួចលិចចុះទៅវិញឥតឈប់ឈរ (ដូចក្នុងរឿងសេដ្ឋីបុត្ត ៤ នាក់ដែលស្រែកពាក្យ «ទុ ស ន សោ»)។ | កម្ម ៖ ការលួចមានសហាយស្មន់ជាមួយប្រពន្ធកូនគេ ការរំលោភបំពានសីលធម៌គ្រួសារ និងការរស់នៅដោយខ្ជះខ្ជាយអួតអាងទ្រព្យសម្បត្តិដោយមិនធ្វើបុណ្យទាន។',
            en: 'Torment: Colossal mountain-sized cauldron of boiling metal. Beings sink to the bottom over 30,000 years, then float back to the boiling surface over 30,000 years (uttering the 4 tragic syllables Du-Sa-Na-So as recounted in the Dhammapada commentary). | Karmic Cause: Seducing married women, dissolute hedonism squandering wealth in sensual misconduct without ever practicing charity.'
          },
          {
            boldKm: '១២. យន្តបាសាណនរក (Yantapāsāṇa — នរកត្បាល់កិនយន្តថ្ម)',
            boldEn: '12. Yantapāsāṇa (Crushing Mountain Presses Hell)',
            km: 'ទារុណកម្ម ៖ មានផ្ទាំងថ្មភ្នំធំៗពីររត់បុកទង្គិចគ្នាយ៉ាងលឿនដូចយន្តត្បាល់កិន។ យមបាលដេញកៀងសត្វនរកឱ្យរត់ចូលចន្លោះផ្ទាំងថ្មនោះ រួចថ្មទាំងពីរក៏រត់មកកិនសង្កត់កម្ទេចសាច់ និងឆ្អឹងឱ្យបែកខ្ទេចខ្ទីដូចកម្ទេចម្សៅ រួចក៏កើតរូបរាងឡើងវិញ ដើម្បីឱ្យគេកិនបន្ត។ | កម្ម ៖ ការវាយដំធ្វើបាបប្រពន្ធកូន ការគាបសង្កត់កេងប្រវ័ញ្ចកម្លាំងពលកម្មអ្នកបម្រើ ឬកម្មករដោយគ្មានក្តីមេត្តា។',
            en: 'Torment: Two immense mountain slabs grinding together like automated millstones. Wardens herd victims between them; the slabs smash together, reducing flesh and bone into pulverized pulp, only to reform for repeated crushing. | Karmic Cause: Domestic violence, savagely beating spouse and children, and mercilessly overworking impoverished laborers without pay or care.'
          }
        ]
      },
      {
        titleKm: '៤. ឧស្សទនរក ជាន់ទី ១៣ ដល់ ទី ១៦ (ហ្វូងឆ្កែដែក, ភ្នំកាំបិតកោរ, ទឹកត្រជាក់កក & បន្ទប់ដែកបិទជិត)',
        titleEn: '4. Ussada Hells 13 to 16: Iron Dogs, Razor Peaks, Glacial Ice & Sealed Chambers',
        contentKm: 'ការធ្វើទារុណកម្មចំពោះពាក្យទ្រគោះបោះបោក ពាក្យញុះញង់ ចិត្តត្រជាក់សាហាវ និងការបង្ខាំងសេរីភាព ៖',
        contentEn: 'Torment stations punishing verbal venom, slander, cold-blooded abandonment, and wrongful imprisonment:',
        points: [
          {
            boldKm: '១៣. សុនខនរក (Sunakha — នរកហ្វូងឆ្កែដែក និងត្មាតដែក)',
            boldEn: '13. Sunakha (Iron Dogs & Vultures Hell)',
            km: 'ទារុណកម្ម ៖ ពោរពេញដោយហ្វូងឆ្កែនរកសម្បុរក្រហម ខ្មៅ ស និងត្មាតដែក ក្អែកដែក ដែលមានចង្កូម និងចំពុះដែកមុតស្រួច។ ពួកវាដេញខាំហែកសាច់ ពោះវៀន និងចឹកភ្នែកសត្វនរកទាំងរស់ សត្វនរករត់ស្រែកយំពេញទីលាន។ | កម្ម ៖ ការជេរប្រមាថសមណព្រាហ្មណ៍ អ្នកមានគុណ ការប្រើសម្តីអាក្រក់ដូចឆ្កែខាំ (ផរុសវាចា) និងការបញ្ចើចបញ្ចើឱ្យគេឈ្លោះប្រកែកគ្នា។',
            en: 'Torment: Ravaged by packs of ferocious red, black, and white hell-hounds alongside iron-beaked crows and vultures. They rip throats open, eviscerate bowels, and tear eyes out alive. | Karmic Cause: Cursing noble recluses and parents, habitually spewing venomous coarse abuse (pharusa-vācā), and barking slander to incite brawls.'
          },
          {
            boldKm: '១៤. ខុរធារនរក (Khuradhāra — នរកភ្នំកាំបិតកោរ)',
            boldEn: '14. Khuradhāra (Razor-Blade Mountain Hell)',
            km: 'ទារុណកម្ម ៖ ភ្នំដែកដែលមានផ្លែកាំបិតកោរមុតស្រួចដុះពេញដូចស្មៅ។ យមបាលបង្ខំសត្វនរកឱ្យរត់ឡើងចុះលើភ្នំនោះ ជើង និងខ្លួនប្រាណត្រូវកាំបិតកាត់ជាបន្ទះៗរហូតដល់សល់តែឆ្អឹងសក្បុស។ | កម្ម ៖ ការកុហកបោកប្រាស់ ភូតភរ ពោលពាក្យញុះញង់បំបែកបំបាក់មិត្តភក្តិ ឬប្តីប្រពន្ធគេឱ្យបែកបាក់គ្នា (បិសុណាវាចា)។',
            en: 'Torment: Mountains blanketed with upward-facing razor blades sharp as scalpels. Wardens force denizens to run barefoot up and down, shearing soles, tendons, and flesh into ribbons until only white bones remain. | Karmic Cause: Deceit, chronic lying, and divisive malicious gossip destroying friendships and marriages (pisuṇa-vācā).'
          },
          {
            boldKm: '១៥. សីតោទកនរក (Sītodaka — នរកទឹកត្រជាក់កកសូន្យសុង)',
            boldEn: '15. Sītodaka (Sub-Zero Glacial Ice Hell)',
            km: 'ទារុណកម្ម ៖ នរកដែលគ្មានកម្ដៅទាល់តែសោះ មានតែទឹកកក និងខ្យល់ត្រជាក់កករាប់រយអង្សាក្រោមសូន្យ។ សត្វនរកធ្លាក់ចូលទៅ រាងកាយឡើងរឹងកំព្រឹស ឆ្អឹងប្រេះស្រួយបែកខ្ញែកជាកម្ទេចដោយសារភាពត្រជាក់ខ្លាំងហួសប្រមាណ។ | កម្ម ៖ ការមានចិត្តត្រជាក់សម្លាប់គេដោយស្ងាត់ៗ ការបោះបង់ចោលកូនតូចៗឱ្យស្លាប់ដោយភាពរងារ ឬការមិនផ្តល់ភាពកក់ក្តៅដល់ឪពុកម្តាយជរា។',
            en: 'Torment: Abyss devoid of all warmth, dominated by howling blizzard gales and liquid nitrogen-level ice. Flesh freezes instantly brittle and shatters like glass under the sub-zero frost. | Karmic Cause: Cold-blooded premeditated murder, abandoning infants in cold wilderness, and neglecting elderly parents in shivering deprivation.'
          },
          {
            boldKm: '១៦. អយោឃរនរក (Ayoghara — នរកបន្ទប់ដែកភ្លើងបិទជិត)',
            boldEn: '16. Ayoghara (Sealed Blazing Iron Vault Hell)',
            km: 'ទារុណកម្ម ៖ បន្ទប់ដែកភ្លើងកម្រាស់រាប់ម៉ែត្រ បិទជិតគ្មានបង្អួច គ្មានទ្វារចេញ។ ភ្លើងឆេះសន្ធោសន្ធៅពីគ្រប់ទិស សត្វនរកត្រូវឃុំឃាំងក្នុងនោះ រងការដុតរោលដោយគ្មានខ្យល់អាកាសបរិសុទ្ធ ស្រែកឱ្យគេជួយក៏គ្មាននរណាឮឡើយ។ | កម្ម ៖ ការចាប់មនុស្ស ឬសត្វបង្ខាំងទុកក្នុងទ្រុង ការចាប់ជំរិត ការធ្វើទារុណកម្មក្នុងគុកងងឹត និងការបំបិទសិទ្ធិសេរីភាពអ្នកដទៃ។',
            en: 'Torment: Thick, hermetically sealed iron chamber without vents, windows, or doors. Roaring heat builds up in the enclosed vault, roasting trapped victims in pure darkness without fresh air. | Karmic Cause: Caging and locking animals in cramped cages, kidnapping for ransom, secret dungeon torture, and tyrannical suppression of human liberty.'
          }
        ]
      }
    ]
  },

  // GEM 22: Sequential Escape Journey Through the 16 Ussada Hells (Tipiṭaka, Devadūta Sutta MN 130 & Abhidhamma)
  {
    id: 'hell-escape-journey',
    num: 22,
    open: false,
    category: 'death',
    categoryKm: '💀 ដំណើរជីវិតឆ្លងកាត់នរក',
    categoryEn: '💀 Journey Through Ussada Hells',
    ref: 'ទេវទូតសូត្រ (MN 130), គម្ពីរអភិធម្ម & វិសុទ្ធិមគ្គ',
    paliQuote: 'តេន ខោ បន សមយេន តស្ស មហានិរយស្ស បុរត្ថិមំ ទ្វារំ អបាភុរតិ... (សម័យនោះ ទ្វារខាងកើតនៃមហានរកនោះក៏របើកឡើង សត្វទាំងនោះក៏ស្ទុះរត់ទៅដោយល្បឿន...)',
    questionKm: 'យោងតាមគម្ពីរព្រះត្រៃបិដក និងអដ្ឋកថា តើដំណើរជីវិតរបស់សត្វនរកដែលរត់ចេញពីមហានរក ត្រូវឆ្លងកាត់ឧស្សទនរកទាំង ១៦ តាមលំដាប់លំដោយយ៉ាងដូចម្ដេច?',
    questionEn: 'According to the Tipiṭaka and Commentaries, how does a hell denizen escaping from the Great Hell journey sequentially through the sixteen Ussada hells?',
    shortKm: 'ដំណើរឆ្លងកាត់ឧស្សទនរក ១៦ តាមលំដាប់',
    shortEn: 'Sequential Journey Through 16 Ussada Hells',
    essenceKm: 'ដំណើរជីវិតរបស់សត្វនរកដែលរត់ចេញពីមហានរក ឆ្លងកាត់ឧស្សទនរកទាំង ១៦ មិនមែនជាការរត់គេចខ្លួនដោយសេរីភាពឡើយ ប៉ុន្តែជា «ដំណើរឆ្លងកាត់អន្ទាក់នៃវិបល្លាស (ការយល់ច្រឡំដែលជំរុញដោយតណ្ហា)» ដោយសត្វនរកតែងតែមើលឃើញទារុណកម្មនៅស្ថានីយបន្ទាប់ ថាជាទីពឹងពាក់ ឬកន្លែងត្រជាក់ជួយសង្គ្រោះជានិច្ច។ ខ្សែសង្វាក់ដំណើរការពី ៖ មហានរកធំ -> គូថនរក (លាមកពុះ + ដង្កូវមាត់ម្ជុល) -> កុក្កុលនរក/អង្គារកាសុ (ស្មានថាដីស្ងួត ជាផេះក្តៅរលួយជើង) -> អសិបត្តវននរក (ស្មានថាម្លប់ត្រជាក់ ជាព្រៃស្លឹកដាវធ្លាក់កាត់ខ្លួន) -> សិម្ពលីវននរក (ត្រូវបង្ខំឡើងចុះដើមរកាបន្លាដែក) -> វេតរណីនទី (ស្មានថាស្ទឹងត្រជាក់ ជាទឹកក្បុងអាស៊ីត) -> ស្ថានីយឯកទេស (ដុំដែកច្រកមាត់ ទឹកទង់ដែង ត្បាល់កិន ភ្នំកាំបិតកោរ...)។ ដំណើរនេះប្រៀបដូចជាការបកស្រទាប់ខ្ទឹមបារាំងនៃកម្មផល រហូតដល់អស់កម្លាំងបាប (Kammakkhaya) ទើបអាចស្លាប់រួចផុតទៅចាប់កំណើតថ្មី។',
    essenceEn: 'The escape journey of a hell being fleeing a Mahānaraka is not a journey to freedom, but a sequential gauntlet through cognitive hallucinations (vipallāsa) engineered by residual craving. Driven by unbearable agony, victims perceive each successive torture station as a haven or sanctuary of relief: Mahānaraka -> Gūtha (boiling feces & needle worms) -> Kukkula/Aṅgārakāsu (mistaken for dry land, melting feet) -> Asipattavana (mistaken for cool shade, sword-leaves decapitating them) -> Simbalīvana (forced up/down thorny iron trees) -> Vettaraṇī (mistaken for fresh stream, scalding acid river) -> Specialized Stations (forced ingestion of red-hot iron balls, molten copper, mountain presses, razor mountains...). This operates as an exacting "onion-skin peeling" of residual karma until final karmic exhaustion (Kammakkhaya).',
    practicalKm: 'ការយល់ខុស (វិបល្លាស) ដែលគិតថា «អ្វីដែលផ្តល់សេចក្តីសុខបណ្តោះអាសន្ន ជាទីពឹងពិតប្រាកដ» គឺជាមេក្លោងដែលទាញសត្វលោកឱ្យធ្លាក់ក្នុងអន្ទាក់តាំងពីលើលោកមនុស្ស រហូតដល់ក្នុងរណ្តៅនរក។ លើលោកមនុស្ស យើងតែងគិតថាលុយកាក់ កាមគុណ និងការសងសឹក នឹងជួយរំដោះទុក្ខ តែធាតុពិតវាជាភ្លើងដែលកំពុងរោលរាល។ ចូរបណ្តុះ «សម្មាទិដ្ឋិ» (ការយល់ត្រូវតាមការពិត) ដើម្បីកុំឱ្យធ្លាក់ចូលក្នុងអន្ទាក់នៃវិបល្លាសផ្លូវចិត្តនេះ។',
    practicalEn: 'The cognitive delusion (vipallāsa) mistaking transient sensory appeasement for genuine refuge traps sentient beings from human life down to the hells. In human life, we assume sensual indulgence, wealth, or revenge bring peace, yet they fuel the blaze. Cultivating Right View (sammā-diṭṭhi) penetrates these cognitive traps before they materialize as physical retribution.',
    links: [
      { to: '/questions', km: 'សំណួរ–ចម្លើយ ៤២', en: 'Q&A 42' },
      { to: '/my-gems#sixteen-ussada-hells', km: 'ឧស្សទនរកទាំង ១៦ ជាន់', en: '16 Ussada Hells' },
      { to: '/my-gems#eight-great-hells', km: 'មហានរកទាំង ៨ ជាន់', en: 'The 8 Great Hells' },
      { to: '/my-gems#hell-body-regeneration', km: 'រូបកាយសត្វនរក ៖ ហេតុអ្វីមិនស្លាប់?', en: 'Hell Body Regeneration' },
      { to: '/realms', km: 'ភពទាំង ៣១ ជាន់ & នរក', en: '31 Planes & Hell Realms' }
    ],
    sections: [
      {
        titleKm: '១. ដំណាក់កាលទ្វារមហានរករបើក និងការរត់ចេញ (The Iron Gate Opens)',
        titleEn: '1. The Iron Gate Opens: The Tragic Stampede and False Relief',
        contentKm: 'នៅក្នុង ទេវទូតសូត្រ ព្រះសម្មាសម្ពុទ្ធបានពិពណ៌នាអំពីការរត់ចេញពីមហានរកយ៉ាងកម្សត់ ៖\n\n— ទ្វារដែករបើកដោយកម្លាំងកម្ម ៖ បន្ទាប់ពីត្រូវភ្លើងមហានរកដុតរោលរាប់រយពាន់លានឆ្នាំ រហូតទាល់តែអកុសលកម្មកម្រិតធ្ងន់ធ្ងរបំផុតចាប់ផ្តើមស្រាលបន្តិច ទ្វារដែកមួយក្នុងចំណោមទ្វារទាំង ៤ ក៏របើកឡើងដោយឯកឯង។\n\n— ការប្រជ្រៀតជាន់គ្នា ៖ សត្វនរករាប់ម៉ឺនកោដិដែលឃើញពន្លឺមាត់ទ្វារ ក៏ប្រញាប់ប្រញាល់រត់សំដៅទៅរកទ្វារនោះ ដោយការជាន់ឈ្លីលើគ្នាយ៉ាងវេទនា។ សត្វខ្លះរត់ទៅមិនទាន់ដល់ផង ទ្វារក៏បិទខ្ទប់មកវិញ ត្រូវរង់ចាំរាប់ពាន់ឆ្នាំទៀតទើបរបើកម្តងទៀត។\n\n— ពេលរត់ផុតមាត់ទ្វារ ៖ កាលណាទ្វាររបើកសាជាថ្មី សត្វនរកដែលរត់ផុតចេញក្រៅមហានរក តែងគិតក្នុងចិត្តថា «អាត្មាអញបានរួចផុតពីសេចក្តីទុក្ខហើយ!» ប៉ុន្តែគ្រាន់តែបោះជំហានផុតមហានរកភ្លាម ពួកគេក៏បានធ្លាក់ចូលទៅក្នុង ខ្សែសង្វាក់នៃឧស្សទនរក ដែលឡោមព័ទ្ធនៅជុំវិញមាត់ទ្វារនោះជាបន្តបន្ទាប់។',
        contentEn: 'In the Devadūta Sutta (MN 130), the Buddha depicts the heart-wrenching scene at the great hell\'s gates:\n\n— Spontaneous Opening by Karma: After undergoing incineration across billions of solar years, when the heaviest core garuka-karma begins to attenuate, one of the four gargantuan iron gates swings open automatically.\n\n— The Desperate Stampede: Millions of charred beings, spotting the distant glimmer, stampede frantically toward the opening, trampling one another. Often before they reach it, the heavy iron gate slams shut, sealing them inside for further thousands of years.\n\n— The False Sense of Liberation: When a gate opens again and beings finally surge across the threshold, they exclaim in sheer joy: "I am finally free from suffering!" Yet the moment their feet hit the ground, they plunge straight into the contiguous gauntlet of auxiliary Ussada hells ringing the perimeter.'
      },
      {
        titleKm: '២. ដំណើរឆ្លងកាត់ឧស្សទនរកជាលំដាប់លំដោយ (The Sequential Stations)',
        titleEn: '2. The Sequential Gauntlet: From Feces to Swords, Acid and Molten Copper',
        contentKm: 'ដំណើរការកាត់ទោសបន្តនេះ ប្រព្រឹត្តទៅជាខ្សែសង្វាក់ជាប្រព័ន្ធ ដូចដែលបានចែងក្នុងគម្ពីរអដ្ឋកថា និងទេវទូតសូត្រ ៖',
        contentEn: 'The systematic sequence of secondary retribution follows an unbroken progression:',
        points: [
          {
            boldKm: 'ជំហានទី ១ ៖ ធ្លាក់ចូល «គូថនរក» (Gūtha-niraya)',
            boldEn: 'Station 1: Gūtha (Boiling Feces & Needle Worms)',
            km: 'គ្រាន់តែជើងជាន់ដីខាងក្រៅភ្លាម សត្វនរកក៏ធ្លាក់ស្រុតចុះទៅក្នុងអន្លង់លាមកដ៏ធំសម្បើម ដែលកំពុងពុះកញ្ជ្រោល និងមានក្លិនស្អុយអសោចក្រៃលែង។ នៅក្នុងនោះ មានពួក ដង្កូវមាត់ដែកស្រួចដូចម្ជុល (សូចិមុខបាណៈ) ទំហំប៉ុនដើមត្នោត នាំគ្នារោមចោះទម្លុះស្បែក សាច់ សរសៃ និងឆ្អឹង ចូលទៅស៊ីខួរក្បាល និងសរីរាង្គក្នុង។',
            en: 'Stepping outside, they plunge neck-deep into an ocean of boiling feces. Needle-mouthed iron worms the size of palm trees bore through skin, skull, and bones to devour marrow and visceral organs from within.'
          },
          {
            boldKm: 'ជំហានទី ២ ៖ រត់បន្តចូល «កុក្កុលនរក & អង្គារកាសុនរក»',
            boldEn: 'Station 2: Kukkula & Aṅgārakāsu (Boiling Ash & Coals Pit)',
            km: 'នៅពេលសត្វនរកប្រឹងវារងើបចេញពីអន្លង់លាមក ឃើញដីរាបស្មើខាងមុខ ស្មានតែដីស្ងួត ក៏ប្រញាប់រត់ជាន់លើ។ ការពិតវាជា រណ្តៅផេះក្តៅ និងរងើកភ្លើង។ ពេលជាន់លើ ជើងទាំងពីរត្រូវភ្លើងឆេះរលួយសាច់ដល់ឆ្អឹង ពេលលើកជើងឡើង សាច់ក៏កើតមកវិញ រួចជាន់លិចឆេះរលួយម្តងទៀតរហូតដល់ផុតរណ្តៅ។',
            en: 'Crawling out of the mire, they spot smooth grey plains ahead, mistaking it for dry relief. It is scalding ash and ember pits: each step dissolves foot tissue to white bone, which regenerates as lifted, only to melt upon the next step.'
          },
          {
            boldKm: 'ជំហានទី ៣ ៖ ស្ទុះចូល «អសិបត្តវននរក» (ព្រៃស្លឹកដាវ)',
            boldEn: 'Station 3: Asipattavana (Sword-Leaf Forest)',
            km: 'ឆ្លងផុតរណ្តៅផេះក្តៅ សត្វនរកមានកាយរោលរាលខ្លាំង ក៏ក្រឡេកឃើញព្រៃឈើពណ៌បៃតងខ្ចី ហាក់ដូចជាមានម្លប់ត្រជាក់ ទើបរត់ប្រញាប់ទៅជ្រកកោន។ ពេលចូលដល់ក្រោមដើមឈើ ខ្យល់កម្មបក់មក ស្លឹកឈើដែលជា ផ្លែដាវពីរមុខមុតស្រួច ក៏ជ្រុះធ្លាក់មកកាត់ក្បាល កាត់ដៃ កាត់ជើង និងដងខ្លួនជាកង់ៗ។ នៅលើដី មានស្មៅដែកមុតស្រួចដោតច្រូងច្រាង ព្រមទាំងមានឆ្កែនរក និងក្អែកដែក ចុះមកហែកស៊ីសាច់ដែលធ្លាក់នោះ។',
            en: 'Charred and blistering, they gaze ahead and see emerald forest canopies promising cooling shade. Rushing in, gusting karmic winds detach double-edged sword leaves that rain down, severing heads, limbs, and torsos while iron hounds tear the fragments.'
          },
          {
            boldKm: 'ជំហានទី ៤ ៖ ត្រូវបង្ខំឱ្យឡើង «សិម្ពលីវននរក» (ព្រៃរកាបន្លាដែក)',
            boldEn: 'Station 4: Simbalīvana (Thorny Iron Trees)',
            km: 'សត្វនរករត់រើបម្រះចេញពីព្រៃស្លឹកដាវ ឃើញព្រៃដើមរកាធំៗ ស្មានតែជាទីសុវត្ថិភាព។ ពួកយមបាលដែលកាន់ដាវ និងលំពែងភ្លើង ក៏ដេញកាប់ចាក់ពីក្រោយ បង្ខំឱ្យសត្វនរកឡើងដើមរកាដែកដែលមាន បន្លាដែកភ្លើងដុះច្រូងច្រាង។ ពេលឡើងទៅ បន្លាងាកចុះក្រោមដោតទម្លុះទ្រូង លុះដល់ចុងឈើ ត្រូវក្អែកដែកចឹកភ្នែក ហើយពេលយមបាលយកលំពែងចាក់បង្ខំឱ្យចុះមកវិញ បន្លាក៏ងាកឡើងលើដោតច្រាសទម្លុះពោះបន្តទៀត។',
            en: 'Fleeing the sword-fall, they encounter colossal silk-cotton trees. Wardens brandishing spears herd them up; thorns bend downward to impale their chests ascending; iron vultures gouge eyes at the top; forced down, thorns point upward to gore them in reverse.'
          },
          {
            boldKm: 'ជំហានទី ៥ ៖ លោតចូល «វេតរណីនទី» (ស្ទឹងទឹកក្បុងអាស៊ីត)',
            boldEn: 'Station 5: Vettaraṇī River (Caustic Acid & Cane Thorns)',
            km: 'ពេលធ្លាក់ចុះពីដើមរកា សត្វនរកស្រេកទឹកខ្លាំង និងក្តៅក្រហាយពេញខ្លួន ស្រាប់តែឃើញស្ទឹងទឹកមួយហូរថ្លាឈ្វេង ក៏ស្ទុះលោតចុះទៅក្នុងទឹកដើម្បីផឹក និងងូតឱ្យត្រជាក់។ តាមពិត ស្ទឹងនោះជា ទឹកក្បុងអាស៊ីតក្តៅពុះគគ្រុក។ រូបកាយត្រូវទឹកអាស៊ីតកាត់រលាយដូចដុំអំបិលត្រូវទឹក ហើយក្នុងស្ទឹងមានបន្លាផ្តៅដែកមុតស្រួចរារាំងមិនឱ្យឡើងគោក។',
            en: 'Parched with terminal thirst, they hear rushing waters and spot a crystal stream. Leaping in to drink, they find it boiling caustic alkaline acid that dissolves flesh like salt in water, while tangled iron ratan thorns prevent escape.'
          },
          {
            boldKm: 'ជំហានទី ៦ ដល់ ១៦ ៖ ស្ថានីយធ្វើទារុណកម្មឯកទេស',
            boldEn: 'Stations 6 to 16: Specialized Karmic Stations',
            km: 'លុះសត្វនរករសាត់តាមស្ទឹងវេតរណី ពួកយមបាលយកសន្ទូចដែកស្ទូចស្រង់មកលើច្រាំង រួចសួរថា ៖ «តើឯងត្រូវការអ្វី?» សត្វនរកឆ្លើយទាំងដង្ហក់ថា ៖ «ខ្ញុំឃ្លានណាស់ ខ្ញុំស្រេកទឹកណាស់!» យមបាលក៏គាស់មាត់ ច្រកដុំដែកដុតក្រហមច្រាល (អយោគុឡៈ) និងទឹកទង់ដែងរលាយពុះ (តម្ពលោហៈ) ដុតរលាយពោះវៀនធ្លាយចេញតាមទ្វារលាមក។ បន្ទាប់មក បញ្ជូនបន្តទៅកាន់ យន្តបាសាណៈ (ត្បាល់កិន), ខុរធារៈ (ភ្នំកាំបិតកោរ), លោហកុម្ភី (ថ្លាងដែកពុះ), សីតោទកៈ (ទឹកកកសូន្យសុង), អយោឃរៈ (បន្ទប់ដែកបិទជិត)... ទៅតាមសំណល់កម្មដែលនៅសេសសល់។',
            en: 'Dredged ashore on iron hooks, wardens ask: "What do you desire?" Victims gasp: "We are starving and parched!" Wardens pry jaws open with red-hot tongs, cramming incandescent iron balls (Ayoguḷa) and molten copper (Tambaloha) down their gullets. Subsequently, based on unexhausted debts, they are routed to Crushing Mountain Presses, Razor Mountains, Lohakumbhī vats, or Glacial Chambers.'
          }
        ]
      },
      {
        titleKm: '៣. យន្តការផ្លូវចិត្តតាមអភិធម្ម ៖ ហេតុអ្វីបានជាសត្វនរករត់ចូលទារុណកម្មទាំងនោះ?',
        titleEn: '3. Abhidhamma Psychology: Hallucinatory Traps Driven by Craving (Vipallāsa)',
        contentKm: 'យន្តការផ្លូវចិត្តដែលនាំឱ្យសត្វនរករត់ចូលអន្ទាក់ទារុណកម្ម ត្រូវបានពន្យល់តាមក្បួនបរមត្ថ ៖\n\n— វិបល្លាសនៃតណ្ហា (The Illusion Driven by Craving) ៖\nនៅក្នុងគម្ពីរអភិធម្ម នៅពេលចិត្តរបស់សត្វលោកត្រូវគ្របដណ្ដប់ដោយទុក្ខវេទនាខ្លាំង កម្លាំងនៃ តណ្ហា នឹងបង្កើតនូវ «រូបភាពបញ្ឆោតភ្នែក» (Hallucination) ភ្លាមៗ ៖ ឃើញរណ្តៅផេះថាជាដីស្ងួត, ឃើញព្រៃដាវថាជាម្លប់ឈើត្រជាក់, និងឃើញទឹកអាស៊ីតពុះថាជាស្ទឹងទឹកថ្លា។ សត្វនរករត់ចូលដោយក្តីសង្ឃឹម តែត្រូវជួបទារុណកម្មធ្ងន់ធ្ងរជាងមុន។\n\n— កម្មក្ខយៈ (ការបកស្រទាប់កម្ម — Layer Peeling) ៖\nដំណើរនៃការឆ្លងកាត់ឧស្សទនរកទាំង ១៦ នេះ គឺដូចជាការបកស្រទាប់ខ្ទឹមបារាំងដូច្នោះដែរ ៖\n១. មហានរក ៖ សម្រាប់ដុតកម្ទេចឫសគល់កម្មធ្ងន់បំផុត (គរុកម្ម / បាបធំៗ)។\n២. ឧស្សទនរកទាំង ១៦ ៖ សម្រាប់ដុតរំលាយកាកសំណល់កម្មរណប (កម្មលម្អិតៗ និងទម្លាប់អាក្រក់បន្ទាប់បន្សំ) ម្តងមួយដំណាក់កាលៗរហូតដល់អស់ថាមពលកម្ម។',
        contentEn: 'Why do hell denizens repeatedly walk into these horrific traps? Abhidhamma explains two profound principles:\n\n— The Cognitive Mirage of Craving (Vipallāsa):\nWhen bodily pain reaches maximum intensity, craving (taṇhā) projects urgent optical hallucinations onto the sense doors: scalding ash appears as a tranquil pathway; falling sword-leaves appear as cooling orchard shade; boiling caustic acid appears as a sparkling brook. In desperation, they dash toward these phantoms, only to trigger fresh horrors.\n\n— The "Onion-Peeling" Mechanics of Karmic Exhaustion:\nThe transition through Mahānaraka and the 16 Ussada stations resembles peeling layers of an onion: the Great Hell incinerates the root Garuka-kamma; the subsequent 16 satellite hells systematically scour away secondary habit energies and auxiliary moral debts.'
      },
      {
        titleKm: '៤. ទីបញ្ចប់នៃដំណើរឆ្លងកាត់ (The Ultimate Karmic Exhaustion / Kammakkhaya)',
        titleEn: '4. The Final Crossing: Exhaustion of Debt and Samsaric Rebirth',
        contentKm: 'សត្វនរកមិនអាចស្លាប់នៅពាក់កណ្តាលទីក្នុងឧស្សទនរកណាមួយឡើយ ដរាបណាអំពើបាបនោះមិនទាន់រលាយអស់ (ន ច តាវ កាលំ ករោតិ យាវ ន តំ បាបកម្មំ ខីយតិ)។\n\nលុះត្រាតែបានឆ្លងកាត់ការរងទុក្ខវេទនាក្នុងឧស្សទនរកទាំងនោះ រហូតដល់ «កម្លាំងអកុសលកម្មត្រូវបានទូទាត់រលត់សូន្យ» (Kammakkhaya) ទើប ចុតិចិត្ត ក្នុងនរកកើតឡើង ហើយសត្វនោះក៏ស្លាប់ចាកផុតពីភពនរក។\n\nពេលនោះ កុសលកម្មចាស់ៗកាលពីរាប់រយជាតិមុន (អបរាបរិយវេទនីយកម្ម) ដែលធ្លាប់កប់ទុកក្នុងភវង្គចិត្ត នឹងមានឱកាសរុញឱ្យវិញ្ញាណទៅចាប់បដិសន្ធិឡើងវិញជាសត្វតិរច្ឆាន ប្រេត ឬមនុស្សពិការ/ក្រីក្រ ដើម្បីបន្តសងកម្មស្រាលៗលើលោកិយ រហូតដល់បានជួបព្រះធម៌ជាថ្មី។',
        contentEn: 'A hell denizen can never perish halfway through any Ussada hell until the debt is paid in full ("Na ca tāva kālaṃ karoti yāva na taṃ pāpakammaṃ khīyati").\n\nOnly when the entire unwholesome momentum has been utterly depleted through experiential suffering (Kammakkhaya) does the hell death-consciousness (cuti-citta) arise. At that juncture, dormant wholesome deeds performed hundreds of lifetimes earlier (aparāpariya-vedanīya-kamma) surface to propel rebirth into the animal kingdom, ghost realm, or as an impoverished human, gradually working through residual ripples until encountering the Dhamma once more.'
      }
    ]
  },

// GEM 23: Nimi Jātaka — King Nimi's Chariot Tour of Hell and Heaven (Jātaka 541)
  {
    id: 'nimi-jataka-tour',
    num: 23,
    open: false,
    category: 'death',
    categoryKm: '📜 និមិរាជជាតក & ទស្សនានរក-សួគ៌',
    categoryEn: '📜 Nimi Jātaka: Tour of Hell & Heaven',
    ref: 'និមិរាជជាតក (ទសជាតក គម្ពីរខុទ្ទកនិកាយ ជាតកលេខ ៥៤១)',
    paliQuote: '«យថា យានំ អយាចិតំ... ន តំ អម្ហាកំ...» (សម្បត្តិដែលកើតពីបុណ្យរបស់អ្នកដទៃ ប្រៀបដូចជារទេះដែលគេខ្ចី វាមិនមែនជារបស់យើងឡើយ... ត្រូវតែសាងកុសលផ្ទាល់ខ្លួន)',
    questionKm: 'យោងតាមនិមិរាជជាតក តើរឿងរ៉ាវដែលព្រះបាទនិមិរាជ ត្រូវព្រះឥន្ទ្រចាត់មាតលីទេវបុត្រឱ្យបររាជរថទិព្វនាំទៅទស្សនានរក និងឧស្សទនរកទាំងឡាយ មានដំណើររឿងយ៉ាងដូចម្ដេច?',
    questionEn: 'According to the Nimi Jātaka (Jātaka 541), what is the story of King Nimi being escorted by the divine charioteer Mātali on the celestial chariot to tour the hells, auxiliary hells, and heavenly realms?',
    shortKm: 'និមិរាជជាតក ៖ ទស្សនានរក និងសួគ៌',
    shortEn: 'Nimi Jātaka: Tour of Hell & Heaven',
    essenceKm: 'នៅក្នុងគម្ពីរខុទ្ទកនិកាយ ជាតក (និមិរាជជាតក — ជាតកទី ៤ ក្នុងទសជាតក ឬមហានិបាតជាតក លេខ ៥៤១) ដំណើររឿងដែលព្រះបាទនិមិរាជ (ព្រះពោធិសត្វ) យាងទស្សនានរក ឧស្សទនរក និងវិមានសួគ៌ គឺជាព្រឹត្តិការណ៍ដ៏ល្បីល្បាញបំផុតមួយក្នុងពុទ្ធសាសនា។ ដោយសារគុណធម៌ សីល ៥ សីល ៨ និងទសពិធរាជធម៌ដ៏បរិសុទ្ធ ព្រះឥន្ទ្របានចាត់មាតលីទេវបុត្រឱ្យបរ «វេជយន្តរថ» ទឹមសេះសិន្ធពទិព្វ ១,០០០ ក្បាល ចុះមកទទួលព្រះអង្គនៅយប់ថ្ងៃពេញបូណ៌មី។ នៅផ្លូវបំបែក ព្រះបាទនិមិរាជបានជ្រើសរើសទស្សនា «ឋាននរក» ជាមុនសិន ដើម្បីឃើញផ្ទាល់ភ្នែកពីផលនៃបាបកម្ម យកទៅដាស់តឿនមនុស្សលោក។ បន្ទាប់ពីទតឃើញទារុណកម្មក្នុងស្ទឹងវេតរណី ហ្វូងក្អែកដែក ព្រៃស្លឹកដាវ ព្រៃរកា និងខ្ទះដែក មាតលីបាននាំព្រះអង្គឡើងទៅទស្សនាវិមានសួគ៌ និងចូលគាល់ព្រះឥន្ទ្រនៅសុធម្មាសភា។ ទោះបីព្រះឥន្ទ្រថ្វាយពាក់កណ្តាលរាជសម្បត្តិទិព្វ ព្រះអង្គបានបដិសេធដោយព្រះរាជឱង្ការប្រវត្តិសាស្ត្រថា «សម្បត្តិទិព្វពីបុណ្យអ្នកដទៃ ប្រៀបដូចជារទេះដែលគេខ្ចី» រួចយាងត្រឡប់មកក្រុងមិថិលាវិញ ដើម្បីទេសនាដាស់តឿនប្រជានុរាស្ត្រ ហើយនៅទីបំផុតបានយាងចេញសាងផ្នួសជាតាបស សម្រេចព្រហ្មលោក។',
    essenceEn: 'In the Khuddaka Nikāya (Nimi Jātaka, the 4th story in the Mahānipāta / 10 Great Jātakas, No. 541), King Nimi (the Bodhisatta) reigning in Mithilā is invited by Sakka (Indra) to Tāvatiṃsa due to his extraordinary moral virtue, charity, and observance of the precepts. Sakka dispatches the divine charioteer Mātali with the Vejayanta chariot drawn by 1,000 celestial steeds on the full-moon night. Reaching the crossroads between Hell and Heaven, King Nimi resolutely chooses to inspect the Hells first to witness the tangible horrors of unwholesome karma to instruct humanity. After surveying Vettaraṇī river, iron dogs/crows, sword-leaf forests, thorny silk-cotton trees, and boiling cauldrons, Mātali ascends to the dazzling mansions of heaven and the Sudhammā Hall. When Sakka offers half of the celestial kingdom, King Nimi famously declines: "Enjoyment born of another’s merit is like a borrowed carriage; I must return to cultivate my own merit." Returning to Mithilā, he preaches to his subjects, later renouncing the throne upon seeing his first gray hair to achieve Brahma realm.',
    practicalKm: 'មេរៀនជីវិតដ៏ឧត្តមពីព្រះបាទនិមិរាជ ៖ «សម្បត្តិដែលកើតពីបុណ្យរបស់អ្នកដទៃ មិនមែនជារបស់យើងឡើយ ដូចជារទេះដែលគេខ្ចី»។ គ្មាននរណាម្នាក់អាចខ្ចីបុណ្យ ឬរស់ពឹងផ្អែកលើការស្រោចស្រង់របស់អ្នកដទៃរហូតបានឡើយ។ យើងត្រូវតែកសាងកុសលផ្ទាល់ខ្លួន (អត្តា ហិ អត្តនោ នាថោ — ខ្លួនជាទីពឹងរបស់ខ្លួន) តាមរយៈទាន សីល និងភាវនា។ លើសពីនេះ ពេលឃើញ «ព្រះកេសាស្កូវមួយសរសៃ» ព្រះអង្គចាត់ទុកជាទេវទូតដាស់តឿនការមិនប្រមាទ មិនឱ្យជាប់ជំពាក់នឹងអំណាចរាជសម្បត្តិឡើយ។',
    practicalEn: 'The profound life takeaway from King Nimi: "Pleasure derived from another’s merit is like a borrowed chariot; it does not truly belong to us." Spiritual attainment and peace cannot be borrowed or outsourced; we must generate our own refuge (Attā hi attano nātho) through giving, ethical discipline, and mental cultivation. Furthermore, treating a single gray hair as a divine messenger of mortality prevented complacency and attachment to worldly power.',
    links: [
      { to: '/questions', km: 'សំណួរ–ចម្លើយ ៤៣', en: 'Q&A 43' },
      { to: '/my-gems#eight-great-hells', km: 'មហានរកទាំង ៨ ជាន់', en: '8 Great Hells' },
      { to: '/my-gems#sixteen-ussada-hells', km: 'ឧស្សទនរកទាំង ១៦ ជាន់', en: '16 Ussada Hells' },
      { to: '/my-gems#hell-escape-journey', km: 'ដំណើរឆ្លងកាត់នរក ១៦ ជាន់', en: 'Journey Through 16 Hells' },
      { to: '/realms', km: 'ស្ថានទាំង ៣១ ភព', en: '31 Realms' }
    ],
    sections: [
      {
        titleKm: '១. មូលហេតុនៃការយាងទៅកាន់បរលោក & រាជរថទិព្វមាតលី',
        titleEn: '1. Why King Nimi Was Invited to the Heavens & The Celestial Chariot',
        contentKm: 'ព្រឹត្តិការណ៍ចាប់ផ្តើមពីគុណធម៌ដ៏អស្ចារ្យរបស់ព្រះបាទនិមិរាជលើលោកមនុស្ស ៖\n\n— គុណធម៌ដ៏លើសលប់របស់ព្រះបាទនិមិរាជ ៖\nព្រះបាទនិមិរាជ គឺជាព្រះពោធិសត្វដែលសោយរាជ្យនៅក្រុងមិថិលា ដែនវិទេហៈ។ ព្រះអង្គជាស្តេចប្រកបដោយទសពិធរាជធម៌ រក្សាសីល ៥ និងសីល ៨ យ៉ាងបរិសុទ្ធ ព្រមទាំងបានសាងរោងទាន ៥ កន្លែង (នៅទ្វារក្រុងទាំង ៤ និងចំកណ្តាលក្រុង) ចែកទានដល់ជនក្រីក្រឥតដាច់។ ប្រជានុរាស្ត្រដែលប្រតិបត្តិតាមការណែនាំរបស់ព្រះអង្គ លុះស្លាប់ទៅបានទៅកើតនៅឋានសួគ៌យ៉ាងកុះករ។\n\n— ទេវតានៅឋានតាវត្តិង្សចង់ជួបព្រះអង្គ ៖\nពួកទេវតាថ្មីៗដែលទើបឡើងមកកើតលើឋានសួគ៌ តែងតែជួបជុំគ្នានៅសុធម្មាសភា ហើយលើកសរសើរគុណធម៌ និងការណែនាំរបស់ព្រះបាទនិមិរាជមិនដាច់ពីមាត់ រហូតដល់កើតចិត្តចង់ជួបព្រះភក្ត្ររបស់ព្រះអង្គផ្ទាល់។\n\n— ព្រះឥន្ទ្រចាត់មាតលីទេវបុត្រឱ្យចុះមកទទួល ៖\nសម្តេចព្រះឥន្ទ្រ (សក្កទេវរាជ) បានចាត់ឱ្យ មាតលីទេវបុត្រ បររាជរថទិព្វឈ្មោះ «វេជយន្តរថ» ដែលទឹមដោយសេះសិន្ធពទិព្វ ១,០០០ ក្បាល ចុះមកកាន់ក្រុងមិថិលានៅយប់ថ្ងៃពេញបូណ៌មី។ ប្រជាជនផ្អើលស្មានថាមានព្រះចន្ទពីររះលើមេឃ ប៉ុន្តែការពិតជារាជរថទិព្វដែលចុះមកអញ្ជើញព្រះមហាក្សត្រឡើងទៅទស្សនាឋានសួគ៌។',
        contentEn: 'The genesis of the celestial invitation rooted in King Nimi’s exemplary virtue:\n\n— Boundless Moral Virtue:\nKing Nimi, the Bodhisatta ruling Mithilā in Videha, reigned with the Ten Royal Virtues (Dasa-rājadhamma), observed the 5 and 8 precepts impeccably, and established 5 great alms-halls (at the four city gates and the royal square). Beings inspired by his guidance were reborn in heavenly realms in immense numbers.\n\n— Acclaim in the Sudhammā Assembly:\nNewly arrived deities in Tāvatiṃsa gathered at the Sudhammā Hall constantly sang King Nimi’s praises, longing to gaze upon his noble countenance.\n\n— Sakka Dispatches Mātali:\nSakka, King of Gods, commanded his charioteer Mātali to harness the divine Vejayanta chariot drawn by 1,000 celestial steeds and descend to Mithilā on the full-moon night. Citizens gasped in wonder, mistaking the radiant chariot for a second moon rising in the night sky.'
      },
      {
        titleKm: '២. សំណួរនៅផ្លូវបំបែក និងការជ្រើសរើសផ្លូវ',
        titleEn: '2. The Crossroads Choice: Hell First or Heaven First?',
        contentKm: 'នៅពេលរាជរថហោះឡើងផុតពីដែនមនុស្សលោក មកដល់ «ផ្លូវបំបែកជាពីរ» មាតលីទេវបុត្របានទូលសួរព្រះបាទនិមិរាជថា ៖\n\n«បពិត្រព្រះសម្មតិទេព! ផ្លូវមួយនាំទៅកាន់ «ឋាននរក» ជាទីសោយទុក្ខវេទនារបស់សត្វដែលសាងបាបកម្ម រីឯផ្លូវមួយទៀតនាំទៅកាន់ «ឋានសួគ៌» ជាទីសោយសម្បត្តិទិព្វរបស់សត្វដែលសាងបុណ្យកុសល។ តើព្រះអង្គសព្វព្រះទ័យយាងទៅទស្សនាទីណាមុន?»\n\nព្រះបាទនិមិរាជបានត្រាស់ឆ្លើយភ្លាមៗថា ៖\n«យើងចង់ឃើញទីកន្លែងទាំងពីរ! ប៉ុន្តែចូរអ្នកបររាជរថនាំយើងទៅមើល «ឋាននរក» ជាមុនសិនចុះ!»\n\nព្រះអង្គជ្រើសរើសទស្សនានរកមុន ព្រោះចង់ឃើញឱ្យច្បាស់ពីផលវិបាកជាក់ស្តែងនៃអំពើអាក្រក់ ដើម្បីយកការណ៍ពិតនោះមកដាស់តឿនប្រជានុរាស្ត្រលើលោកមនុស្សឱ្យភ័យខ្លាចបាប។',
        contentEn: 'Soaring above the human realm, the chariot arrived at a great bifurcation of paths. Mātali posed a monumental inquiry:\n\n"Sire! One path leads to the Hells, where evil-doers reap agonies of their deeds; the other leads to the Heavenly Mansions, where the virtuous enjoy divine fruits. Which realm does Your Majesty wish to behold first?"\n\nKing Nimi responded without hesitation:\n"I wish to see both realms! But turn the chariot toward the Hells first!"\n\nHe deliberately chose Hell first to witness the raw retribution of evil, so that he could report the undeniable truth back to warn the living.'
      },
      {
        titleKm: '៣. ទិដ្ឋភាពនរក និងឧស្សទនរក ដែលមាតលីបានបង្ហាញ',
        titleEn: '3. The Horrific Stations of Hell Revealed by Mātali',
        contentKm: 'មាតលីទេវបុត្របានបររាជរថទិព្វហោះរេរាំងពីលើដែនដីនរក។ ព្រះបាទនិមិរាជទតឃើញទារុណកម្មដ៏រន្ធត់ញាក់សាច់ ក៏ត្រាស់សួរមាតលីអំពីកម្មផលនៃសត្វនរកទាំងនោះម្តងមួយស្ថានីយ ៖',
        contentEn: 'Mātali hovered the glowing chariot above the smoking realms of agony, where King Nimi observed the torments and inquired of their karmic causes:',
        points: [
          {
            boldKm: '១. ស្ទឹងវេតរណី (Vettaraṇី — ស្ទឹងទឹកក្បុងអាស៊ីត)',
            boldEn: '1. Vettaraṇī (Boiling Caustic River)',
            km: 'ទិដ្ឋភាព ៖ សត្វនរកត្រូវទឹកក្បុងអាស៊ីតក្តៅពុះកាត់រលាយសាច់ រួចត្រូវបន្លាផ្តៅដែកមុតស្រួចរារាំងមិនឱ្យឡើងគោក។ | កម្មផល ៖ ជាពួកដែលកាលនៅជាមនុស្ស មានអំណាច ជិះជាន់សង្កត់សង្កិន ប្លន់យកដីធ្លី និងកេងប្រវ័ញ្ចអ្នកទន់ខ្សោយ។',
            en: 'Torment: Beings steeped in boiling caustic acid river fringed by razor iron thorns. | Karmic Cause: Tyrants, oppressors, corrupt land-grabbers, and those abusing authority against the weak.'
          },
          {
            boldKm: '២. ហ្វូងក្អែកដែក និងត្មាតដែក (Kāka/Sunakha)',
            boldEn: '2. Kāka & Sunakha (Iron Crows & Hounds)',
            km: 'ទិដ្ឋភាព ៖ សត្វនរកត្រូវសត្វស្លាបដែក និងឆ្កែនរកដេញខាំហែកស៊ីសាច់ និងចឹកភ្នែកទាំងរស់។ | កម្មផល ៖ ជាពួកកំណាញ់ស្វិតស្វាញ ជេរប្រមាថសមណព្រាហ្មណ៍ អ្នកមានគុណ និងមាតាបិតា។',
            en: 'Torment: Ferocious iron-jawed hounds and iron-beaked crows disemboweling flesh and blinding eyes alive. | Karmic Cause: Stingy misers who insulted recluses, virtuous elders, and parents.'
          },
          {
            boldKm: '៣. កង់រទេះដែកភ្លើងកិនសង្កត់ (Khandha)',
            boldEn: '3. Khandha (Fiery Cartwheel Presses)',
            km: 'ទិដ្ឋភាព ៖ សត្វនរកត្រូវគេចងជាប់នឹងរទេះភ្លើង រួចរមៀលកិនលើកម្រាលដែកឡើងម៉ត់។ | កម្មផល ៖ ជាពួកដែលប្រព្រឹត្តអំពើឆបោក លួចបន្លំជញ្ជីងទម្ងន់ទំនិញ និងក្បត់ទំនុកចិត្តគេ។',
            en: 'Torment: Lashed to flaming iron wagons and crushed under rumbling millwheels into paste. | Karmic Cause: Cheats using dishonest scales, fraudulent merchants, and betrayers of trust.'
          },
          {
            boldKm: '៤. ដុំដែកភ្លើង និងទឹកទង់ដែងច្រកមាត់ (Ayoguḷa & Tambaloha)',
            boldEn: '4. Ayoguḷa & Tambaloha (Molten Iron & Bronze)',
            km: 'ទិដ្ឋភាព ៖ ពួកយមបាលយកដង្កាប់ដែកគាស់មាត់ រួចច្រកដុំដែកដុតក្រហមច្រាល និងទឹកទង់ដែងពុះចូលបំពង់ក ឆេះធ្លាយពោះវៀន។ | កម្មផល ៖ ជាពួកដែលលួចបន្លំទ្រព្យសម្បត្តិសង្ឃ កេងប្រវ័ញ្ចទ្រព្យវត្តអារាម និងសេពសុរាស្រវឹងខួបបំផ្លាញសីលធម៌។',
            en: 'Torment: Jaws pried open with red-hot iron tongs to swallow blazing iron balls and liquid copper. | Karmic Cause: Embezzling monastic assets, temple theft, and chronic drunken debauchery.'
          },
          {
            boldKm: '៥. ព្រៃរកាបន្លាដែក (Simbalīvana)',
            boldEn: '5. Simbalīvana (Thorny Silk-Cotton Forest)',
            km: 'ទិដ្ឋភាព ៖ មនុស្សប្រុសស្រីត្រូវយមបាលយកលំពែងចាក់បង្ខំឱ្យឡើងចុះដើមរកា មានបន្លាដែកភ្លើងវែងមុតដោតទម្លុះទ្រូង និងពោះ។ | កម្មផល ៖ ជាពួកដែលប្រព្រឹត្តអំពើកាមេសុមិច្ឆាចារ (ផិតក្បត់ប្តីប្រពន្ធគេ លួចលាក់មានសហាយស្មន់)។',
            en: 'Torment: Forced up and down blazing 16-inch iron thorns by wardens\' spears. | Karmic Cause: Adultery, marital infidelity, and illicit sexual exploitation.'
          },
          {
            boldKm: '៦. ព្រៃស្លឹកដាវ (Asipattavana)',
            boldEn: '6. Asipattavana (Sword-Leaf Forest)',
            km: 'ទិដ្ឋភាព ៖ ស្លឹកឈើជាផ្លែដាវធ្លាក់មកកាត់ក្បាល ដៃ ជើង ដាច់ជាកង់ៗ។ | កម្មផល ៖ ជាពួកដែលចូលចិត្តកាប់សម្លាប់សត្វ បាញ់សត្វព្រៃ និងបង្កសង្គ្រាមកាប់សម្លាប់មនុស្ស។',
            en: 'Torment: Razor-sharp sword leaves showering down, slicing limbs and heads into shreds. | Karmic Cause: Slaughtering animals, cruel hunting, and instigating wars of slaughter.'
          },
          {
            boldKm: '៧. ខ្ទះដែកលោហកុម្ភី (Lohakumbhī)',
            boldEn: '7. Lohakumbhī (Giant Boiling Metal Vat)',
            km: 'ទិដ្ឋភាព ៖ សត្វនរកត្រូវដាំពុះក្នុងខ្ទះដែកយក្ស រមៀលចុះឡើងរាប់ម៉ឺនឆ្នាំ។ | កម្មផល ៖ ជាពួកដែលប្រព្រឹត្តអំពើអាក្រក់ ប្រមាថអ្នកមានសីលបរិសុទ្ធ។',
            en: 'Torment: Boiling for millennia in mountain-sized vats of swirling molten copper. | Karmic Cause: Chronic evil deeds and blaspheming noble recluses of pure virtue.'
          }
        ]
      },
      {
        titleKm: '៤. ដំណើរយាងទៅកាន់ឋានសួគ៌ និងការជួបជុំទេវតា',
        titleEn: '4. Ascension to the Celestial Mansions & Sudhammā Hall',
        contentKm: 'បន្ទាប់ពីទស្សនានរកចប់ មាតលីទេវបុត្របានបង្វែររាជរថ នាំព្រះបាទនិមិរាជហោះឡើងទៅកាន់ឋានសួគ៌វិញម្តង ៖\n\n— ទស្សនាវិមានកែវ និងវិមានមាស ៖\nមាតលីបានបង្ហាញវិមានទិព្វជាច្រើន (ដូចជា វិមាននាងពិរុឡ្ហកា, វិមាននាងសោណាទិន្នា) និងពន្យល់ពីអានុភាពនៃការធ្វើទាន ការរក្សាសីល និងការកតញ្ញូចំពោះឪពុកម្តាយ ដែលនាំឱ្យទេវតាទាំងនោះទទួលបានសម្បត្តិទិព្វដ៏ត្រកាល។\n\n— ឡើងដល់ឋានតាវត្តិង្ស ៖\nព្រះឥន្ទ្រ និងពពួកទេវតាទាំងអស់បានចេញមកទទួលស្វាគមន៍ព្រះបាទនិមិរាជយ៉ាងកងរំពង។ ព្រះឥន្ទ្របានថ្វាយពាក់កណ្តាលនៃរាជសម្បត្តិទិព្វ និងយាងព្រះអង្គឱ្យគង់នៅសោយសុខលើឋានសួគ៌រហូត។',
        contentEn: 'Concluding the tour of hell, Mātali steered the chariot upward to the celestial realms:\n\n— Heavenly Mansions of Gem and Gold:\nMātali displayed resplendent vimānas (such as Biruḷhakā’s and Soṇadinnā’s mansions), elucidating how devoted generosity, moral precepts, and filial piety generated such radiant celestial habitats.\n\n— Arrival at Tāvatiṃsa:\nSakka and myriads of devas assembled to give a thunderous reception. Sakka offered King Nimi half of the heavenly realm, inviting him to dwell in immortal bliss forever.'
      },
      {
        titleKm: '៥. ការបដិសេធសម្បត្តិទិព្វ និងព្រះរាជឱង្ការជាប្រវត្តិសាស្ត្រ',
        titleEn: '5. The Historic Refusal: "Borrowed Chariot" Royal Utterance',
        contentKm: 'ទោះបីជាសម្បត្តិទិព្វលើឋានសួគ៌ស្រស់ស្អាត និងសុខស្រួលយ៉ាងណាក៏ដោយ ព្រះបាទនិមិរាជបានបដិសេធសំណើរបស់ព្រះឥន្ទ្រ ដោយទ្រង់មានព្រះរាជឱង្ការដ៏មានអត្ថន័យជ្រាលជ្រៅថា ៖\n\n«សម្បត្តិទិព្វដែលកើតពីបុណ្យរបស់អ្នកដទៃ ប្រៀបដូចជា «រទេះដែលគេខ្ចី» វាមិនមែនជារបស់យើងឡើយ។ យើងមិនចង់សោយសុខដោយសារបុណ្យរបស់អ្នកដទៃនោះទេ យើងត្រូវតែត្រឡប់ទៅនគរមនុស្សវិញ ដើម្បីសាងកុសលផ្ទាល់ខ្លួន តាមរយៈទាន សីល និងភាវនា»។\n\nព្រះអង្គបានស្នាក់នៅសម្តែងធម៌ដល់ពួកទេវតាអស់រយៈពេល ៧ ថ្ងៃមនុស្ស រួចក៏បានឱ្យមាតលីទេវបុត្របររាជរថជូនព្រះអង្គត្រឡប់មកកាន់នគរមិថិលាវិញ។',
        contentEn: 'Despite the breathtaking splendors of heaven, King Nimi declined Sakka’s lavish offer with an immortal royal declaration:\n\n"Delights produced by another’s merit are like a borrowed chariot; they do not truly belong to me. I seek no secondhand bliss; I must return to the mortal realm to cultivate my own merits through generosity, virtue, and contemplation."\n\nHe preached the Dhamma to the assembled gods for seven human days before Mātali returned him to Mithilā.'
      },
      {
        titleKm: '៦. ផលវិបាកក្រោយការត្រឡប់មកវិញ (ការទេសនា & ចេញសាងផ្នួស)',
        titleEn: '6. Homecoming: Preaching to Mithilā & Royal Renunciation',
        contentKm: 'ការត្រឡប់មកកាន់នគរមនុស្សបានបង្កើតនូវចលនាសីលធម៌ដ៏ធំធេង ៖\n\n— ការទេសនាដាស់តឿនប្រជានុរាស្ត្រ ៖\nពេលត្រឡប់មកដល់ ប្រជានុរាស្ត្របានជួបជុំគ្នាទទួលព្រះអង្គ។ ព្រះបាទនិមិរាជបានរៀបរាប់យ៉ាងពិស្តារអំពីទារុណកម្មដ៏រន្ធត់ក្នុងនរក និងសេចក្តីសុខដ៏ប្រណីតលើឋានសួគ៌ ដែលព្រះអង្គបានឃើញផ្ទាល់នឹងភ្នែក។ សេចក្តីទេសនានោះ ធ្វើឱ្យមនុស្សគ្រប់គ្នាភ័យខ្លាចបាប ហើយនាំគ្នាសាងតែអំពើល្អ រក្សាសីល និងធ្វើទានពេញទាំងនគរ។\n\n— ការចេញសាងផ្នួស ៖\nនៅពេលព្រះកេសារបស់ព្រះអង្គចាប់ផ្តើមស្កូវមួយសរសៃ (ទេវទូតដាស់រំលឹកសេចក្តីស្លាប់) ព្រះបាទនិមិរាជក៏បានដាក់រាជ្យសម្បត្តិ ប្រគល់ឱ្យព្រះរាជបុត្រ រួចយាងចេញទៅសាងផ្នួសជាតាបសចម្រើនព្រហ្មវិហារធម៌ក្នុងព្រៃមិគទាយវ័ន រហូតដល់អស់ព្រះជន្ម ហើយបានទៅកើតក្នុងព្រហ្មលោក។',
        contentEn: 'King Nimi’s return ignited an empire-wide moral transformation:\n\n— Eyewitness Preaching to the Populace:\nGathering his subjects, King Nimi delivered an electrifying firsthand account of the horrific retributions of hell and the dazzling rewards of heaven. Trembling at the reality of kamma, the entire kingdom embraced virtue, generosity, and the precepts.\n\n— Renunciation on a Single Gray Hair:\nYears later, when the royal barber found his first gray hair, King Nimi recognized it as a Divine Messenger of mortality. He abdicated the throne to his son, entered ascetic monkhood in the Migadāya forest, perfected the Brahmavihāras, and attained the Brahma world upon death.'
      }
    ]
  },
  {
    id: 'hell-speech-language',
    num: 24,
    open: false,
    category: 'death',
    categoryKm: '💀 ភាសា & ការនិយាយរបស់សត្វនរក',
    categoryEn: '💀 Speech & Language of Hell Denizens',
    ref: 'ទេវទូតសូត្រ (MN 130), វិភង្គអដ្ឋកថា (សម្មោហវិនោទនី) & អដ្ឋកថាធម្មបទ',
    paliQuote: '«ទុ. ស. ន. សោ... នត្ថិ អន្តោ កុតោ អន្តោ... បមាទោ មេ មហារាជ អហោសិ» (សម្រែកវិប្បដិសារីជាភាសាមាគធីក្នុងភពនរក)',
    questionKm: 'យោងតាមគម្ពីរព្រះត្រៃបិដក និងអដ្ឋកថា តើសត្វនរកមានពេលនិយាយដែរឬទេ? ពួកគេនិយាយភាសាអ្វី? ហើយតើពួកគេនិយាយពាក្យអ្វីខ្លះ?',
    questionEn: 'According to the Tipiṭaka and Commentaries, do hell denizens have time to speak, which language do they speak, and what do they say?',
    shortKm: 'ភាសា & ការនិយាយរបស់សត្វនរក (ទុ-ស-ន-សោ)',
    shortEn: 'Speech & Language in Hell (Du-Sa-Na-So)',
    essenceKm: 'យោងតាមគម្ពីរព្រះត្រៃបិដក និងអដ្ឋកថា (ទេវទូតសូត្រ, វិភង្គអដ្ឋកថា សម្មោហវិនោទនី, និងអដ្ឋកថាធម្មបទ) សត្វនរកមានពេលវេលាជាក់លាក់ដើម្បីនិយាយ ដូចជាពេលឆ្លើយសារភាពចំពោះស្តេចយមរាជអំពីទេវទូត ៥, ពេលត្រូវសន្ទូចស្ទូចពីស្ទឹងវេតរណីស្រែកសុំទឹក, និងពេលផុសក្បាលផុតមាត់ថ្លាងលោហកុម្ភីមួយប៉ប្រិចភ្នែក។ ពួកគេនិយាយជា «ភាសាមាគធី» (មូលភាសា — ភាសាដើមធម្មជាតិរបស់សត្វលោក ដែលពួកនរក តិរច្ឆាន ប្រេត ក្មេងព្រៃ និងព្រហ្ម យល់និងនិយាយដោយឯកឯងដោយមិនបាច់រៀន)។ ពាក្យសម្តីរបស់ពួកគេ មិនមែនជាការជជែកកម្សាន្តឡើយ តែជាសម្រែកវិប្បដិសារីស្តាយក្រោយ និងសារភាពកំហុស ដូចជាសម្រែក ៤ ព្យាង្គដ៏ល្បីល្បាញ «ទុ-ស-ន-សោ» ក្នុងថ្លាងដែកលោហកុម្ភី។',
    essenceEn: 'According to the Tipiṭaka and Commentaries (Devadūta Sutta MN 130, Vibhaṅga-aṭṭhakathā Sammohavinodanī, and Dhammapada-aṭṭhakathā), hell denizens have distinct occasions to speak: confessing before King Yama regarding the 5 Devadūtas, gasping for water when dredged by hooks from the caustic Vettaraṇī river, and surfacing momentarily at the rim of the boiling Lohakumbhī vat. They speak "Māgadhī" (Mūla-bhāsā — the primordial root language naturally understood and uttered without education by four classes: hell denizens, animals/petas, feral children, and Brahmas). Their speech is never leisure chatter, but agonizing confessions and irrecoverable remorse (vippaṭisāra), immortalized by the four syllables "Du-Sa-Na-So".',
    practicalKm: 'ការស្វែងយល់អំពីរឿងរ៉ាវនេះ ផ្តល់ជាគតិធម៌ដ៏ជ្រាលជ្រៅ ៖ កុំបណ្តោយឱ្យជីវិតធ្លាក់ចូលក្នុងសភាព «ទុ-ស-ន-សោ» ដែលស្តាយក្រោយនៅពេលហួសពេល។ កាលណាមានកាយវិការ សំឡេង និងសេរីភាពក្នុងភពមនុស្ស គប្បីបន្លឺតែពាក្យសច្ចៈ សុភាសិតវាចា មិនប្រព្រឹត្តកាមេសុមិច្ឆាចារ និងប្រញាប់ប្រញាល់សាងទាន រក្សាសីល ចម្រើនភាវនា ព្រោះពេលធ្លាក់នរក សូម្បីតែឱកាសស្រែកពាក្យពេញលេញមួយឃ្លាក៏គ្មានដែរ។',
    practicalEn: 'Contemplating this truth provides profound urgency: never let life degenerate into the futile regret of "Du-Sa-Na-So". While possessing a human body, vocal cords, and moral agency, utter only truthful, wholesome speech (sammā-vācā), abstain from sensual misconduct and greed, and hasten to cultivate generosity, virtue, and mental development before the golden opportunity slips away.',
    sections: [
      {
        titleKm: '១. តើសត្វនរកមានពេលនិយាយដែរឬទេ? (កាលៈទេសៈទាំង ៣ នៃការនិយាយ)',
        titleEn: '1. Do Hell Denizens Have Time to Speak? (The 3 Canonical Occasions)',
        contentKm: 'នៅក្នុងមហានរកជាន់ជ្រៅៗដូចជា អវិចីមហានរក ឬតាបនមហានរក ភ្លើងឆេះរោលរាល និងទារុណកម្មមានសភាពជា «អវិចី» (គ្មានចន្លោះទំនេរ គ្មានការឈប់សម្រាក) ធ្វើឱ្យសត្វនរកស្ទើរតែគ្មានពេលសូម្បីតែដកដង្ហើម ក្រៅពីការបន្លឺសំឡេងស្រែកទ្រហោយំដោយសេចក្តីឈឺចាប់ខ្លោចផ្សា (អដ្ដស្សរ)។ ប៉ុន្តែនៅក្នុងកាលៈទេសៈជាក់លាក់មួយចំនួន សត្វនរកមានឱកាស និងពេលវេលាជាក់លាក់ដើម្បីនិយាយ ៖',
        contentEn: 'In deep Great Hells such as Avīci or Tapana, blazing fires and excruciating tortures are "avīci" (uninterrupted, devoid of intervals), leaving denizens almost no room even to inhale, uttering only continuous piercing shrieks of agony (aṭṭassara). Nevertheless, in specific canonical situations, hell denizens possess definite moments to speak:',
        items: [
          {
            boldKm: 'ក. ពេលជួប និងសាកសួរដោយស្តេចយមរាជ (មុនទម្លាក់ទៅក្នុងនរក)',
            boldEn: 'a. Interrogation by King Yama (Before Being Cast into Hell)',
            km: 'នៅក្នុង «ទេវទូតសូត្រ» (មជ្ឈិមនិកាយ ឧបរិបណ្ណាសក) នៅពេលសត្វនរកទើបស្លាប់ពីមនុស្ស ហើយពួកយមបាលចាប់នាំយកមកកាន់យមរាជដ្ឋាន ស្តេចយមរាជមានព្រះទ័យមេត្តា បានសាកសួរដាស់តឿនសតិអំពី ទេវទូតទាំង ៥ (ទារកទន់ខ្សោយ, មនុស្សចាស់ជរា, មនុស្សមានជំងឺដេកក្នុងលាមកនោម, ចោររងទណ្ឌកម្មកាត់ក្បាល, និងសាកសពហើមស្អុយ)។ សត្វនរកមានស្មារតីពេញលេញ និងឆ្លើយសារភាពត្រង់ៗទាំងរន្ធត់ថា ៖ «បពិត្រព្រះសម្មតិទេព! ខ្ញុំព្រះករុណាភ្លេចខ្លួន ខ្ញុំរវល់តែស្រវឹងនិងសប្បាយ មិនបានសាងអំពើល្អដោយកាយ វាចា ចិត្តឡើយ» (បមាទោ មេ មហារាជ អហោសិ)។',
            en: 'In the Devadūta Sutta (MN 130), when deceased beings are dragged before King Yama by the wardens, King Yama compassionately interrogates them regarding the 5 Divine Messengers (a tender infant, a frail elder, an agonizing sick person in filth, a punished felon, and a bloated corpse). The being retains full consciousness and confesses in terror: "Lord King, I was heedless; lost in intoxication and trivial pleasures, I failed to cultivate good by body, speech, or mind!" (Pamādo me mahārāja ahosi).'
          },
          {
            boldKm: 'ខ. ពេលត្រូវសន្ទូចដែកស្ទូចឡើងពីស្ទឹងទឹកក្បុងវេតរណី',
            boldEn: 'b. Dragged by Iron Fishhooks from the Caustic Vettaraṇī River',
            km: 'នៅពេលសត្វនរករត់ធ្លាក់ទៅក្នុងស្ទឹងវេតរណី ដែលមានទឹកអាស៊ីតក្បុងពុះកញ្ជ្រោល និងដើមឈូកដែកផ្លែដាវមុតស្រួច ពួកយមបាលតែងយកសន្ទូចដែកភ្លើងដ៏ធំមកស្ទូចទាញសត្វនរកឡើងមកលើច្រាំងថ្មដែកដុតក្រហម។ ពួកយមបាលសួរដោយគំរោះគំរើយថា ៖ «តើពួកឯងចង់បានអ្វី?» ពេលនោះ សត្វនរកមានឱកាសនិយាយតបទាំងដង្ហក់ដង្ហោយថា ៖ «បពិត្រលោកម្ចាស់! ពួកយើងស្រេកទឹកណាស់ ពួកយើងឃ្លានណាស់!» ប៉ុន្តែជាលទ្ធផល យមបាលបែរជាយកដង្កាប់គាស់មាត់ ច្រកទឹកទង់ដែងពុះក្រហម និងដុំដែកភ្លើងចូលបំពង់ក។',
            en: 'When denizens escape into the caustic, acid-boiling river Vettaraṇī bristling with sword-blade lotuses, wardens drag them ashore with blazing iron fishhooks onto scorching red-hot iron slabs. The wardens bark: "What do you want?" The gasping denizens plead: "Lord, we are desperately parched! We are starving!" In response, wardens pry open their jaws and pour in boiling molten copper and red-hot iron balls.'
          },
          {
            boldKm: 'គ. ពេលផុសក្បាលផុតមាត់ខ្ទះដែកលោហកុម្ភី (មួយប៉ប្រិចភ្នែក)',
            boldEn: 'c. Surfacing at the Rim of Lohakumbhī (A Fleeting Instant)',
            km: 'នៅក្នុងនរកខ្ទះដែកពុះលោហកុម្ភី សត្វនរកត្រូវពុះរមៀលចុះទៅបាតអស់ ៣០,០០០ ឆ្នាំ និងអណ្តែតឡើងមកលើផ្ទៃវិញអស់ ៣០,០០០ ឆ្នាំ (សរុប ៦០,០០០ ឆ្នាំក្នុងមួយជុំ)។ នៅពេលក្បាលផុសផុតផ្ទៃទឹកទង់ដែងពុះក្នុងរយៈពេលខ្លីមួយប៉ប្រិចភ្នែក ពួកគេមានខ្យល់ដង្ហើមបន្លឺសំឡេងបានត្រឹមតែមួយម៉ាត់ (មួយព្យាង្គ) ប៉ុណ្ណោះ មុនពេលរលកទង់ដែងពុះទាញពន្លិចចុះទៅបាតវិញ។',
            en: 'In the colossal boiling copper vat Lohakumbhī, denizens sink to the bottom over 30,000 years and swirl back up to the surface over another 30,000 years (a 60,000-year cycle). As their heads breach the boiling surface for a fleeting second, they have just enough breath to cry out a single syllable before being pulled down into the depths again.'
          }
        ]
      },
      {
        titleKm: '២. តើសត្វនរកនិយាយភាសាអ្វី? (ភាសាមាគធី / មូលភាសា)',
        titleEn: '2. Which Language Do Hell Denizens Speak? (Māgadhī / Mūla-bhāsā)',
        contentKm: 'យោងតាមគម្ពីរ «វិភង្គអដ្ឋកថា» (សម្មោហវិនោទនី ត្រង់សច្ចវិភង្គនិទ្ទេស) ភាសាដែលសត្វនរកនិយាយប្រាស្រ័យទាក់ទងគ្នា និងនិយាយជាមួយយមបាល គឺ «ភាសាមាគធី» (Māgadhī) ឬហៅម្យ៉ាងទៀតថា «មូលភាសា» (Mūla-bhāsā — ភាសាប្ញសគល់ដើមធម្មជាតិនៃសព្វសត្វ)។\n\nហេតុផលតាមទស្សនៈព្រះអភិធម្ម ៖\nភាសាសម័យបច្ចុប្បន្នដែលមនុស្សយើងប្រើប្រាស់ (ដូចជា ភាសាខ្មែរ អង់គ្លេស ចិន បារាំង បាលី សំស្ក្រឹត...) គឺជា «វោហារសច្ចៈ» ឬភាសាសិប្បនិម្មិត ដែលកើតពីការសន្មត ការបង្រៀន និងការរៀនសូត្រពីបរិស្ថានសង្គម។ កាលណាបុគ្គលម្នាក់ស្លាប់ រូបកាយ និងខួរក្បាលមនុស្សត្រូវបានរលត់បាត់បង់ ការចងចាំនៃភាសាសិប្បនិម្មិតក៏ត្រូវបានកាត់ផ្តាច់។\n\nផ្ទុយទៅវិញ នៅពេលបដិសន្ធិជាសត្វនរក (ឱបបាតិកកំណើត) សំឡេងដែលកើតចេញពីចិត្ត (ចិត្តជរូប) ដោយគ្មានការបង្រៀនពីអ្នកដទៃ នឹងរំញ័រចេញមកតាមសភាពធម្មជាតិដើមនៃសត្វលោក ដែលជា «រលកសំឡេងនៃភាសាមាគធី»។',
        contentEn: 'According to the Vibhaṅga Commentary (Sammohavinodanī, Sacca-vibhaṅga Niddesa), the language spoken by hell denizens among themselves and with the wardens is "Māgadhī", also termed "Mūla-bhāsā" (the primordial root language innate to all sentient beings).\n\nAbhidhamma Philosophical Rationale:\nModern languages spoken by humans (Khmer, English, Chinese, French, Pali, Sanskrit, etc.) are conventional languages (vohāra-sacca) forged by social conventions, imitation, and cultural conditioning. Upon death, the physical vocal apparatus and cultural memory dissolve.\n\nConversely, upon spontaneous rebirth (opapātika) in hell without prior social tutoring, the sounds generated by consciousness (cittaja-sadda) naturally resonate at the fundamental frequency of universal existence — the pure vibratory stream of Māgadhī.',
        items: [
          {
            boldKm: 'ជំពូកសត្វទាំង ៤ ដែលយល់ និងនិយាយភាសាមាគធីដោយធម្មជាតិ (ឥតបាច់រៀន)',
            boldEn: 'The 4 Classes of Beings Who Naturally Understand & Speak Māgadhī Without Tutoring',
            km: 'នៅក្នុងវិភង្គអដ្ឋកថា បានបញ្ជាក់ច្បាស់ថា មានជំពូកសត្វចំនួន ៤ ដែលបន្លឺសំឡេង និងយល់ភាសាមាគធីដោយស្វ័យប្រវត្តិតាមធម្មជាតិ ៖\n១. ពួកសត្វនរក (Niraya) — ស្រែក និងនិយាយឆ្លើយឆ្លងជាភាសាមាគធី។\n២. ពួកតិរច្ឆាន និងប្រេត (Tiracchāna & Peta) — បន្លឺសូរសៀង និងទទួលដឹងរំញ័រនៃមូលភាសា។\n៣. កូនក្មេងតូចដែលកើតក្នុងព្រៃដាច់ស្រយាល — ប្រសិនបើទារកកើតមកហើយត្រូវគេទុកចោលក្នុងព្រៃជ្រៅ ដោយមិនដែលឮមនុស្សចាស់និយាយភាសាអ្វីសោះ ទារកនោះពេលធំឡើងនឹងបន្លឺពាក្យជាភាសាមាគធីដោយឯកឯង។\n៤. ពួកព្រហ្ម (Brahma) — គង់នៅជាន់ព្រហ្មលោក ប្រើប្រាស់រលកសូរសៀងដ៏បរិសុទ្ធនៃភាសាមាគធីដើម។',
            en: 'The Sammohavinodanī explicitly identifies four categories of beings who spontaneously vocalize and comprehend Māgadhī naturally:\n1. Hell Denizens (Niraya) — weeping, shrieking, and answering in pure Māgadhī.\n2. Animals and Petas (Tiracchāna & Peta) — vibrating and responding to root primordial frequencies.\n3. Feral Infants Raised in Total Forest Isolation — an infant abandoned in a deep wilderness, having never heard human speech, will instinctively utter Māgadhī words as its first natural dialect.\n4. Brahmas (Brahma) — dwelling in exalted Brahma realms, conversing in pristine primordial soundwaves.'
          }
        ]
      },
      {
        titleKm: '៣. តើពួកគេនិយាយពាក្យអ្វីខ្លះ? (សម្រែក «ទុ-ស-ន-សោ» ក្នុងថ្លាងលោហកុម្ភី)',
        titleEn: '3. What Do They Say? (The Chilling "Du-Sa-Na-So" Lohakumbhī Syllables)',
        contentKm: 'ពាក្យសម្តីរបស់សត្វនរក មិនមែនជាការសន្ទនាកម្សាន្តឡើយ ប៉ុន្តែជាសម្រែកវិប្បដិសារី (ស្តាយក្រោយរកអ្វីប្រៀបផ្ទឹមពុំបាន) និងការសារភាពកំហុស។ ករណីល្បីល្បាញបំផុតក្នុងពុទ្ធសាសនា គឺរឿងរ៉ាវនៃសម្រែក ៤ ព្យាង្គ «ទុ! ស! ន! សោ!» ដែលកត់ត្រាក្នុង «អដ្ឋកថាធម្មបទ» (រឿងព្រះបាទបសេនទិកោសល) ៖\n\nកាលសម័យពុទ្ធកាល ព្រះបាទបសេនទិកោសល បានឮសំឡេងចម្លែកលាន់ឮយ៉ាងរន្ធត់កណ្តាលអធ្រាត្រថា «ទុ! ស! ន! សោ!» ធ្វើឱ្យព្រះអង្គភ័យតក់ស្លុតជាខ្លាំង រហូតដល់ពួកព្រាហ្មណ៍ទូលណែនាំឱ្យធ្វើពិធីពលិកម្មសម្លាប់មនុស្ស និងសត្វរាប់រយដើម្បីរំដោះគ្រោះ។ ព្រះនាងមល្លិកាទេវីបាននាំព្រះរាជាទៅបង្គំទូលសួរព្រះសម្មាសម្ពុទ្ធ។\n\nព្រះសម្មាសម្ពុទ្ធទ្រង់ត្រាស់សំដែងថា សំឡេងនោះមិនមែនជាគ្រោះថ្នាក់ដល់ព្រះរាជាឡើយ ប៉ុន្តែជា «សំឡេងកូនសេដ្ឋី ៤ នាក់នៅក្រុងពារាណសី» កាលពីសម័យព្រះពុទ្ធកស្សបៈ។ ពួកគេមានទ្រព្យសម្បត្តិមហាសាល ៤០ កោដិក្នុងម្នាក់ៗ ប៉ុន្តែមិនបានធ្វើទាន ឬសាងកុសលអ្វីឡើយ បែរជារួមគំនិតគ្នាប្រព្រឹត្តអំពើកាមេសុមិច្ឆាចារ លួចលាក់សេពកាមជាមួយប្រពន្ធកូនរបស់អ្នកដទៃរហូតដល់អស់ជីវិត។ ពេលធ្លាក់ទៅក្នុងថ្លាងដែកពុះលោហកុម្ភី ពួកគេត្រូវលិចចុះ ៣០,០០០ ឆ្នាំ និងអណ្តែតឡើង ៣០,០០០ ឆ្នាំ។ ពេលផុសក្បាលផុតមាត់ថ្លាងដែកមួយរំពេច ម្នាក់ៗចង់ពោលគាថាដាស់តឿនសត្វលោកមួយចប់ ប៉ុន្តែមានពេលស្រែកបានត្រឹមតែមួយព្យាង្គប៉ុណ្ណោះ ក៏ត្រូវលិចចុះទៅបាតវិញ ៖',
        contentEn: 'Speech in hell is never casual gossip; it is the agonizing shriek of irrecoverable regret (vippaṭisāra) and desperate confession. The most celebrated account in Buddhist literature is the terrifying four-syllable roar "Du! Sa! Na! So!" recorded in the Dhammapada Commentary (The Story of King Pasenadi of Kosala):\n\nDuring the Buddha\'s ministry, King Pasenadi of Kosala was awakened at midnight by four bone-chilling cries echoing through the night: "Du! Sa! Na! So!" Stricken with terror, his court brahmins advised a massive animal-and-human blood sacrifice to avert impending doom. Queen Mallikā intervened and urged the king to seek the Buddha\'s wisdom.\n\nThe Blessed One revealed that the cries posed no threat to the king; they were the voices of four wealthy merchant sons from Bārāṇasī during the dispensation of Kassapa Buddha. Possessing 400 million in gold each, they gave no alms and performed no virtue, instead squandering their fortunes on systematic adultery (kāmesu micchācāra). Born into the giant boiling Lohakumbhī vat, each spent 30,000 years sinking and 30,000 years rising. Surfacing for a fraction of a second, each intended to recite a full verse of warning to mankind, but had only sufficient breath to utter a single opening syllable before the boiling molten bronze dragged them under:',
        items: [
          {
            boldKm: '១. ព្យាង្គ «ទុ» (Dhu) — មកពីពាក្យ «ទុជ្ជីវិតមជីវម្ហ...»',
            boldEn: '1. The Syllable "Du" (Dhu) — From "Dujjīvitaṃ ajīvimha..."',
            km: 'គាថាពេញ ៖ «ទុជ្ជីវិតមជីវម្ហ យេ សន្តា ន ទទាមសេ | វិជ្ជមានេសុ ភោគេសុ ទីបំ នាកម្ហ អត្តនោ»\nអត្ថន័យ ៖ «ពួកយើងបានរស់នៅដោយជីវិតដ៏អាក្រក់ក្រៃលែង! កាលពួកយើងមានជីវិតនៅជាមនុស្ស មានភោគទ្រព្យសម្បត្តិស្ដុកស្ដម្ភ បែរជាមិនបានធ្វើទាន មិនបានកសាងកោះទីពឹងដល់ខ្លួនសោះ បែរជាយកទ្រព្យនោះទៅប្រព្រឹត្តអំពើបាបបំផ្លាញគ្រួសារអ្នកដទៃ!»',
            en: 'Full Verse: "Dujjīvitaṃ ajīvimha, ye santā na dadāmase; Vijjamānesu bhogesu, dīpaṃ nākāmha attano."\nMeaning: "Wretchedly indeed did we live! Possessing ample wealth, we gave no gifts and created no island of refuge for ourselves, but squandered our fortune in vile misconduct!"'
          },
          {
            boldKm: '២. ព្យាង្គ «ស» (Sa) — មកពីពាក្យ «សដ្ឋិ វស្សសហស្សានិ...»',
            boldEn: '2. The Syllable "Sa" — From "Saṭṭhi vassasahassāni..."',
            km: 'គាថាពេញ ៖ «សដ្ឋិ វស្សសហស្សានិ បរិបុណ្ណានិ សព្វសោ | និរយេ បច្ចមានានំ កទា អន្តោ ភវិស្សតិ»\nអត្ថន័យ ៖ «៦០,០០០ ឆ្នាំកន្លងផុតទៅយ៉ាងពេញលេញគ្រប់បែបយ៉ាងហើយ ដែលពួកយើងត្រូវគេដាំស្លក្នុងខ្ទះដែកពុះនេះ! តើកាលណាទើបមានទីបំផុតនៃសេចក្តីទុក្ខវេទនានេះទៅ?»',
            en: 'Full Verse: "Saṭṭhi vassasahassāni, paripunnāni sabbaso; Niraye paccamānānaṃ, kadā anto bhavissati."\nMeaning: "A full sixty thousand years have passed while we are cooked in this hell cauldron! When, oh when, will there ever be an end to this torment?"'
          },
          {
            boldKm: '៣. ព្យាង្គ «ន» (Na) — មកពីពាក្យ «នត្ថិ អន្តោ កុតោ អន្តោ...»',
            boldEn: '3. The Syllable "Na" — From "Natthi anto kuto anto..."',
            km: 'គាថាពេញ ៖ «នត្ថិ អន្តោ កុតោ អន្តោ ន អន្តោ បដិទិស្សតិ | តទា ហិ បកតំ បាបំ មម តុយ្ហញ្ច មារិសា»\nអត្ថន័យ ៖ «គ្មានទីបំផុតឡើយ! តើឱ្យមានទីបំផុតមកពីណា ទីបំផុតមិនប្រាកដឃើញសោះឡើយ! ម្នាលគ្នាយើង ពីព្រោះកាលនោះ ខ្ញុំ និងអ្នកទាំងអស់គ្នា បានសាងអំពើបាបកម្មធ្ងន់ធ្ងរក្រៃលែងពេកណាស់!»',
            en: 'Full Verse: "Natthi anto kuto anto, na anto padissiti; Tadā hi pakataṃ pāpaṃ, mama tuyhañca mārisā."\nMeaning: "There is no end! Whence could there be an end? No end is in sight! For back then, my comrades, you and I wrought heinous, monstrous evil!"'
          },
          {
            boldKm: '៤. ព្យាង្គ «សោ» (So) — មកពីពាក្យ «សោហំ នូន ឥតោ គន្ត្វា...»',
            boldEn: '4. The Syllable "So" — From "Sohaṃ nūna ito gantvā..."',
            km: 'គាថាពេញ ៖ «សោហំ នូន ឥតោ គន្ត្វា យោនឹ លទ្ធាន មានុសឹ | វទញ្ញូ សីលសម្បន្នោ កាហាមិ កុសលំ ពហុំ»\nអត្ថន័យ ៖ «ប្រសិនបើថ្ងៃណាមួយ ខ្ញុំបានរួចផុតពីនរកនេះ ហើយបានទៅកើតក្នុងកំណើតជាមនុស្សវិញ ខ្ញុំនឹងក្លាយជាអ្នកដឹងពាក្យគេ (ជាអ្នកចេះធ្វើទាន) បរិបូណ៌ដោយសីល និងខិតខំសាងកុសលឱ្យបានច្រើនបំផុត!»',
            en: 'Full Verse: "Sohaṃ nūna ito gantvā, yoniṃ laddhāna mānusiṃ; Vadaññū sīlasampanno, kāhāmi kusalaṃ bahuṃ."\nMeaning: "If ever I escape from this abyss and regain human birth, I shall be bountifully generous, endowed with stainless virtue, and perform boundless wholesome deeds!"'
          }
        ]
      },
      {
        titleKm: '៤. គតិធម៌ដាស់តឿនសតិ ៖ កុំរង់ចាំឱ្យដល់ពេលស្រែក «ទុ-ស-ន-សោ»',
        titleEn: '4. Spiritual Exhortation: Never Wait Until the Cry of "Du-Sa-Na-So"',
        contentKm: 'ដំណើររឿង និងការពិតនៃភាសាព្រមទាំងពាក្យសម្តីរបស់សត្វនរក បង្ហាញយ៉ាងច្បាស់ថា ៖\n\n— ការស្តាយក្រោយពេលហួសពេល (វិប្បដិសារី) គ្មានប្រយោជន៍ឡើយ ៖\nពេលដែលធ្លាក់ចូលទៅក្នុងរណ្តៅនរកហើយ សូម្បីតែទ្រព្យសម្បត្តិ ៤០ កោដិ ឬឋានៈបុណ្យស័ក្តិក៏មិនអាចជួយស្រោចស្រង់បានឡើយ។ ការប្រាថ្នាចង់ធ្វើបុណ្យ ធ្វើទាន រក្សាសីល នៅពេលកំពុងពុះក្នុងថ្លាងដែក គឺជាការប្រាថ្នាដែលឥតន័យ ព្រោះបាត់បង់ឱកាសជាមនុស្សទៅហើយ។\n\n— តម្លៃដ៏កម្រនៃកំណើតមនុស្ស (កិច្ឆោ មនុស្សប្បដិលាភោ) ៖\nក្នុងពេលបច្ចុប្បន្នដែលយើងមានជីវិតជាមនុស្ស មានអវយវៈ និងអណ្តាតសម្រាប់និយាយស្តី គប្បីបង្វែរសំឡេង និងសម្តីរបស់យើង ទៅជា «សម្មាវាចា» (វាចាត្រឹមត្រូវ — មិនភូតកុហក មិនញុះញង់ មិនទ្រគោះបោះបោក មិនរោយរាយឥតប្រយោជន៍) និងបន្លឺពាក្យសូត្រធម៌ សរសើរគុណព្រះរតនត្រ័យ និងផ្សាយមេត្តាចិត្ត។\n\n— ប្រញាប់ប្រញាល់សាងកុសល (អប្បមាទេន សម្បាទេថ) ៖\nកុំរង់ចាំដល់ចាស់ កុំរង់ចាំដល់ជិតស្លាប់ ឬរង់ចាំដល់ពេលជួបទេវទូតទាំង ៥ ទើបភ្ញាក់រលឹក។ ត្រូវប្រញាប់សាងទីពឹងដល់ខ្លួនឯង (អត្តទីបា អត្តសរណា) តាមរយៈទាន សីល និងភាវនា ចាប់ពីពេលនេះតទៅ។',
        contentEn: 'The canonical reality of speech and language in hell presents profound warnings:\n\n— Futility of Posthumous Regret (Vippaṭisāra):\nOnce plunging into the abyss of hell, neither 400 million in gold nor high worldly status can deliver salvation. Wishing to practice generosity and guard precepts while boiling in molten copper is utterly futile, for the human opportunity has vanished.\n\n— The Preciousness of Human Existence (Kiccho manussapaṭilābho):\nWhile we possess human rebirth, sound health, and vocal organs, transform your speech into Sammā-vācā (Right Speech — abstaining from lying, slander, harsh words, and idle chatter) and dedicate vocal energy to chanting, praising the Triple Gem, and radiating loving-kindness.\n\n— Urgent Merit Cultivation (Appamādena sampādetha):\nNever postpone virtue until old age, sickness, or the brink of death when King Yama presents the 5 Divine Messengers. Forge your own island of refuge (Attadīpā attasaraṇā) through Dana, Sīla, and Bhāvanā immediately.'
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
