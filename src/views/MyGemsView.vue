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
  { id: 'all', km: 'ទាំងអស់ (១៣)', en: 'All (13)' },
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
