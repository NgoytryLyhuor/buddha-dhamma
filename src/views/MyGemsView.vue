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
            color: activeCategory === cat.id ? 'var(--accent-ink, #ffffff)' : 'var(--ink-muted)',
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
            :style="{ background: 'var(--accent)', color: 'var(--accent-ink, #ffffff)' }">
            <span>⭐</span>
            <span>{{ t('រតនៈគ្រងកំពូល', 'CROWN GEM') }}</span>
          </span>
          <span v-if="gem.ref" class="text-[11px] font-mono break-words min-w-0" :style="{ color: 'var(--accent)' }">
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
          :style="{ background: 'var(--accent)', color: 'var(--accent-ink, #ffffff)' }"
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

import { myGemsList } from '../data/myGemsData'
const gems = ref(myGemsList)

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
