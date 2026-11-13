<template>
  <div class="fade-up pb-12">
    <!-- Header Badge & Meta -->
    <div class="flex items-center gap-2 flex-wrap mb-2">
      <span
        class="h-7 px-3 rounded-full text-[11px] font-bold tracking-wider uppercase inline-flex items-center gap-1.5 shrink-0"
        :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)', border: '1px solid var(--accent)' }"
      >
        <span>☸️</span>
        <span>{{ t('គម្ពីរមិលិន្ទប្បញ្ហា · MILINDAPAÑHĀ', 'MILINDAPAÑHĀ CANON · 245 LESSONS') }}</span>
      </span>
      <span
        class="h-7 px-2.5 text-xs font-mono font-bold rounded-full inline-flex items-center justify-center shrink-0"
        :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)', border: '1px solid var(--border)' }"
      >
        {{ khNum(filteredLessons.length) }} / {{ khNum(lessons.length) }} {{ t('មេរៀន', 'lessons') }}
      </span>
    </div>

    <!-- Page Title -->
    <h2 class="mt-2 font-display text-2xl sm:text-3xl md:text-4xl leading-snug break-words" :style="{ color: 'var(--ink)' }">
      {{ t('កម្រងមេរៀន ២៤៥ បញ្ហា — ព្រះបាទមិលិន្ទ & ព្រះនាគសេន', 'Milindapañhā 245 Q&A Lessons — King Milinda & Ven. Nāgasena') }}
    </h2>
    <div class="ornament mt-3 sm:mt-4">&#9784;</div>

    <!-- Introduction Drop-cap -->
    <p class="mt-4 sm:mt-5 drop-cap leading-loose text-sm sm:text-base" :style="{ color: 'var(--ink-soft)' }">
      {{ t('គម្ពីរមិលិន្ទប្បញ្ហា គឺជាកំពូលកម្រងកត់ត្រានូវរាល់ការជជែកដេញដោល ពិភាក្សា និងដោះស្រាយនូវរាល់ចម្ងល់ព្រះធម៌ដ៏ជ្រាលជ្រៅបំផុត រវាងព្រះបាទមិលិន្ទ (ស្ដេចក្រិច-បាកទ្រា ម៉េណានដឺទី១) និងព្រះនាគសេនត្ថេរ។ តាមរយៈឧបមាជាក់ស្ដែងរាប់រយដូចជា ឧបមារទេះ (អនត្តា), ឧបមាប្រទីប (ការបន្តនៃកម្ម), ឧបមាគ្រាប់ស្វាយ, និងឧបមាធម្មជាតិនានា ធ្វើឱ្យធម៌ដែលជ្រៅក្លាយជាមេរៀនងាយយល់ និងភ្លឺថ្លា។', 'The Milindapañhā is a celebrated Buddhist canonical classic recording the profound philosophical dialogues between King Milinda (the Greco-Bactrian King Menander I) and the enlightened Arhat Venerable Nāgasena. Through hundreds of vivid everyday similes — such as the chariot (Anattā), the flame, the mango seed, and nature — the deepest Dhamma truths become instantly illuminating and accessible.') }}
    </p>

    <!-- PDF Download & Quick Action Banner -->
    <div
      class="card-paper p-4 sm:p-5 mt-6 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4"
      :style="{ background: 'linear-gradient(135deg, var(--accent-soft) 0%, var(--bg-card) 100%)', borderColor: 'var(--border)' }"
    >
      <div class="min-w-0">
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            📄 {{ t('សៀវភៅមេរៀនបោះពុម្ព', 'Official Lesson E-Book') }}
          </span>
          <span class="text-[11px] font-mono opacity-60">A4 · 68 ទំព័រ</span>
        </div>
        <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink)' }">
          {{ t('អ្នកអាចទាញយកឯកសារ PDF មេរៀន ២៤៥ បញ្ហាពេញលេញនេះទុកអានលើទូរសព្ទ ឬបោះពុម្ពជាសៀវភៅបាន។', 'You can download the complete formatted 245-lesson PDF for offline study or printing.') }}
        </p>
      </div>
      <a
        href="/Milindapanha-Khmer-Lesson.pdf"
        download="Milindapanha-Khmer-Lesson.pdf"
        target="_blank"
        rel="noopener"
        class="h-10 px-4 rounded-xl text-xs font-bold shrink-0 transition-all shadow-sm hover:scale-[1.02] inline-flex items-center justify-center gap-2 text-white"
        :style="{ background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)' }"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span>{{ t('ទាញយក PDF (~5.1MB)', 'Download PDF (~5.1MB)') }}</span>
      </a>
    </div>

    <!-- Search & Filter Controls -->
    <div class="card-paper p-3.5 sm:p-5 md:p-6 mt-6">
      <div class="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3">
        <!-- Search Input -->
        <div
          class="flex items-center gap-2 px-3 h-10 rounded-lg border flex-1 min-w-0"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }"
        >
          <span class="text-sm opacity-60 shrink-0">🔍</span>
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="t('ស្វែងរកសំណួរ (រទេះ, ភ្លើង, ស្វាយ, ធុតង្គ, លេខមេរៀន)...', 'Search lessons (chariot, flame, mango, dhutanga, #)...')"
            class="w-full bg-transparent border-none text-xs sm:text-sm focus:outline-none"
            :style="{ color: 'var(--ink)' }"
          />
          <button
            v-if="searchQuery"
            type="button"
            @click="searchQuery = ''"
            class="text-xs opacity-50 hover:opacity-100 p-1 shrink-0"
            :title="t('សម្អាត', 'Clear')"
          >✕</button>
        </div>

        <!-- Controls: Expand/Collapse All -->
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

      <!-- Category Filter Pills -->
      <div
        class="flex items-center gap-2 overflow-x-auto pb-1 mt-3.5 scrollbar-none text-xs touch-pan-x"
        style="-webkit-overflow-scrolling: touch;"
      >
        <button
          v-for="cat in filterCategories"
          :key="cat.id"
          type="button"
          @click="activeCategory = cat.id"
          class="h-8 px-3 rounded-full font-semibold whitespace-nowrap transition cursor-pointer shrink-0 inline-flex items-center justify-center gap-1"
          :style="{
            background: activeCategory === cat.id ? 'var(--accent)' : 'var(--bg-card)',
            color: activeCategory === cat.id ? 'var(--accent-ink, #ffffff)' : 'var(--ink-muted)',
            border: '1px solid ' + (activeCategory === cat.id ? 'var(--accent)' : 'var(--border)')
          }"
        >
          <span>{{ t(cat.km, cat.en) }}</span>
          <span
            class="text-[10px] px-1.5 py-0.2 rounded-full font-mono opacity-80"
            :style="{ background: activeCategory === cat.id ? 'rgba(255,255,255,0.2)' : 'var(--bg-card-2)' }"
          >{{ khNum(cat.count) }}</span>
        </button>
      </div>
    </div>

    <!-- Results feedback -->
    <div v-if="searchQuery" class="mt-4 px-2 flex items-center justify-between text-xs" :style="{ color: 'var(--ink-muted)' }">
      <span>{{ t('លទ្ធផលស្វែងរក ៖ រកឃើញ ' + khNum(filteredLessons.length) + ' មេរៀន', 'Search results: found ' + filteredLessons.length + ' lessons') }}</span>
      <button type="button" @click="searchQuery = ''" class="hover:underline text-amber-600 dark:text-amber-400">
        {{ t('បង្ហាញទាំងអស់ឡើងវិញ', 'Show all') }}
      </button>
    </div>

    <!-- Empty State -->
    <div
      v-if="filteredLessons.length === 0"
      class="card-paper p-8 text-center mt-6 rounded-2xl border"
      :style="{ borderColor: 'var(--border)' }"
    >
      <div class="text-3xl mb-2">🔍</div>
      <p class="font-bold text-sm" :style="{ color: 'var(--ink)' }">
        {{ t('រកមិនឃើញមេរៀនដែលត្រូវនឹងពាក្យស្វែងរកនេះទេ', 'No lessons found matching your search') }}
      </p>
      <p class="text-xs mt-1" :style="{ color: 'var(--ink-muted)' }">
        {{ t('សូមសាកល្បងពាក្យគន្លឹះផ្សេងទៀត ឬចុចប៊ូតុងខាងក្រោមដើម្បីបង្ហាញឡើងវិញ។', 'Try different keywords or reset filters below.') }}
      </p>
      <button
        type="button"
        @click="resetFilters"
        class="mt-4 h-9 px-4 rounded-xl text-xs font-bold transition cursor-pointer"
        :style="{ background: 'var(--accent)', color: 'var(--accent-ink, #ffffff)' }"
      >
        {{ t('កំណត់ឡើងវិញទាំងអស់', 'Reset All Filters') }}
      </button>
    </div>

    <!-- Lesson Cards List -->
    <div class="mt-6 space-y-4">
      <div
        v-for="item in filteredLessons"
        :key="item.id"
        :id="'lesson-' + item.id"
        class="card-paper rounded-2xl border transition-all duration-200 overflow-hidden"
        :style="{ borderColor: 'var(--border)' }"
      >
        <!-- Card Header (Click to toggle) -->
        <button
          type="button"
          class="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3 cursor-pointer select-none transition-colors"
          :style="{ background: openCards[item.id] ? 'var(--bg-card-2)' : 'transparent' }"
          @click="toggleCard(item.id)"
        >
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-2 flex-wrap mb-1.5">
              <!-- Number badge -->
              <span
                class="px-2 py-0.5 rounded-full text-xs font-mono font-bold shrink-0"
                :style="{ background: 'var(--accent)', color: 'var(--accent-ink, #ffffff)' }"
              >
                #{{ khNum(item.id) }}
              </span>

              <!-- Part badge -->
              <span
                class="px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 opacity-75"
                :style="{ background: 'var(--bg-card)', color: 'var(--ink-muted)', border: '1px solid var(--border)' }"
              >
                {{ t(partShortName(item.partId), 'Part ' + item.partId) }}
              </span>

              <!-- Simile badge (if exists) -->
              <span
                v-if="item.simile"
                class="px-2 py-0.5 rounded-full text-[10px] font-bold text-amber-700 dark:text-amber-300 bg-amber-500/10 border border-amber-500/20 shrink-0"
              >
                ✨ {{ item.simile }}
              </span>
            </div>

            <!-- Title -->
            <h3
              class="font-display text-base sm:text-lg font-bold leading-snug"
              :style="{ color: 'var(--ink)' }"
            >
              {{ item.title }}
            </h3>
          </div>

          <!-- Chevron Indicator -->
          <span
            class="text-xs transition-transform duration-200 shrink-0 mt-1 opacity-60"
            :class="{ 'rotate-180': openCards[item.id] }"
          >
            ▼
          </span>
        </button>

        <!-- Card Body (Slide Down Content) -->
        <div v-show="openCards[item.id]" class="p-4 sm:p-5 pt-0 border-t border-dashed" :style="{ borderColor: 'var(--border)' }">
          <!-- Question Box (King Milinda) -->
          <div
            class="mt-4 p-3.5 sm:p-4 rounded-xl border-l-4"
            :style="{ background: 'rgba(14, 116, 144, 0.06)', borderLeftColor: '#0891b2', border: '1px solid rgba(14, 116, 144, 0.15)' }"
          >
            <div class="flex items-center gap-2 text-xs font-bold mb-1.5" :style="{ color: '#0e7490' }">
              <span>👑</span>
              <span>{{ item.qSpeaker }}</span>
            </div>
            <p class="text-sm sm:text-base leading-relaxed font-normal" :style="{ color: 'var(--ink)' }">
              {{ item.q }}
            </p>
          </div>

          <!-- Answer Box (Venerable Nāgasena) -->
          <div
            class="mt-3.5 p-3.5 sm:p-4 rounded-xl border-l-4"
            :style="{ background: 'rgba(217, 119, 6, 0.06)', borderLeftColor: '#d97706', border: '1px solid rgba(217, 119, 6, 0.15)' }"
          >
            <div class="flex items-center gap-2 text-xs font-bold mb-1.5" :style="{ color: '#b45309' }">
              <span>☸️</span>
              <span>{{ item.aSpeaker }}</span>
            </div>

            <!-- Plain answer or parsed list -->
            <div v-if="!item.parsedA.hasList" class="text-sm sm:text-base leading-loose" :style="{ color: 'var(--ink-soft)' }">
              {{ item.a }}
            </div>

            <div v-else class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              <p class="mb-2 leading-loose">{{ item.parsedA.intro }}</p>

              <!-- Structured points list -->
              <div class="space-y-1.5 my-2.5 pl-2 sm:pl-3 border-l-2 border-amber-500/30">
                <div
                  v-for="(sub, sIdx) in item.parsedA.listItems"
                  :key="sIdx"
                  class="flex items-start gap-2 text-xs sm:text-sm leading-relaxed"
                >
                  <span class="font-bold text-amber-700 dark:text-amber-400 shrink-0 min-w-[24px]">
                    {{ sub.num }}.
                  </span>
                  <span>{{ sub.text }}</span>
                </div>
              </div>

              <!-- Outro simile or summary -->
              <p v-if="item.parsedA.outro" class="mt-2 text-xs sm:text-sm leading-relaxed opacity-95">
                {{ item.parsedA.outro }}
              </p>
            </div>
          </div>

          <!-- Card Actions (Copy & Direct Link) -->
          <div class="mt-3 pt-2.5 flex items-center justify-between gap-3 text-xs" :style="{ color: 'var(--ink-muted)' }">
            <span class="text-[11px] opacity-70 truncate">{{ item.chapter }}</span>
            <div class="flex items-center gap-2 shrink-0">
              <CopyButton :text="copyLessonText(item)" />
              <button
                type="button"
                @click="copyDirectLink(item.id)"
                class="hover:underline flex items-center gap-1 text-[11px]"
                :title="t('ចម្លងតំណភ្ជាប់ទៅមេរៀននេះ', 'Copy link to this lesson')"
              >
                <span>🔗</span>
                <span>#{{ khNum(item.id) }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Epilogue Card -->
    <div
      v-if="!searchQuery && activeCategory === 'all'"
      class="card-paper p-5 sm:p-6 mt-10 rounded-2xl border"
      :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }"
    >
      <div class="flex items-center gap-2 text-amber-700 dark:text-amber-300 font-bold text-sm mb-2">
        <span>☸️</span>
        <span>{{ t('សេចក្តីបញ្ចប់នៃគម្ពីរមិលិន្ទប្បញ្ហា', 'Conclusion of the Milindapañhā') }}</span>
      </div>
      <p class="text-xs sm:text-sm leading-loose" :style="{ color: 'var(--ink-soft)' }">
        {{ milindaEpilogue }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useLanguage } from '../composables/useLanguage'
import { useCopy } from '../composables/useCopy'
import CopyButton from '../components/CopyButton.vue'
import { milindaLessons, milindaParts, milindaEpilogue } from '../data/milindaQaData'

const route = useRoute()
const { t } = useLanguage()
const { copyText } = useCopy()

const lessons = milindaLessons
const parts = milindaParts

const khDigitList = '០១២៣៤៥៦៧៨៩'
function khNum(n) {
  return String(n ?? '').replace(/[0-9]/g, d => khDigitList[d] || d)
}
function toArNum(s) {
  return String(s || '').replace(/[០-៩]/g, d => khDigitList.indexOf(d))
}

const searchQuery = ref('')
const activeCategory = ref('all')

const filterCategories = computed(() => [
  { id: 'all', km: 'ទាំងអស់', en: 'All', count: lessons.length },
  { id: '2', km: 'ភាគទី ២៖ លក្ខណប្បញ្ហា', en: 'Part 2', count: lessons.filter(l => l.partId === 2).length },
  { id: '3', km: 'ភាគទី ៣៖ វិមតិច្ឆេទនប្បញ្ហា', en: 'Part 3', count: lessons.filter(l => l.partId === 3).length },
  { id: '4', km: 'ភាគទី ៤៖ មេណ្ឌកប្បញ្ហា', en: 'Part 4', count: lessons.filter(l => l.partId === 4).length },
  { id: '5', km: 'ភាគទី ៥៖ អនុមានប្បញ្ហា', en: 'Part 5', count: lessons.filter(l => l.partId === 5).length },
  { id: '6', km: 'ភាគទី ៦៖ ធុតង្គកថា', en: 'Part 6', count: lessons.filter(l => l.partId === 6).length },
  { id: '7', km: 'ភាគទី ៧៖ ឱបម្មកថាប្បញ្ហា', en: 'Part 7', count: lessons.filter(l => l.partId === 7).length },
  { id: 'similes', km: '✨ មានឧបមាធម៌', en: 'Similes', count: lessons.filter(l => l.simile).length },
])

function partShortName(pId) {
  switch (pId) {
    case 2: return 'ភាគទី ២'
    case 3: return 'ភាគទី ៣'
    case 4: return 'ភាគទី ៤'
    case 5: return 'ភាគទី ៥'
    case 6: return 'ភាគទី ៦'
    case 7: return 'ភាគទី ៧'
    default: return 'ភាគទី ' + pId
  }
}

// Open/collapse state per lesson card ID
const openCards = reactive({})

// Initialize first 3 lessons as open by default
onMounted(() => {
  lessons.slice(0, 3).forEach(l => {
    openCards[l.id] = true
  })

  // If URL has hash like #lesson-15, open that card and scroll to it
  if (route.hash) {
    const m = route.hash.match(/lesson-(\d+)/)
    if (m) {
      const targetId = Number(m[1])
      openCards[targetId] = true
      setTimeout(() => {
        const el = document.getElementById('lesson-' + targetId)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 300)
    }
  }
})

function toggleCard(id) {
  openCards[id] = !openCards[id]
}

function toggleAll(shouldOpen) {
  lessons.forEach(l => {
    openCards[l.id] = shouldOpen
  })
}

function resetFilters() {
  searchQuery.value = ''
  activeCategory.value = 'all'
}

// Filtered lessons
const filteredLessons = computed(() => {
  let list = lessons

  // Category filter
  if (activeCategory.value === 'similes') {
    list = list.filter(l => l.simile)
  } else if (activeCategory.value !== 'all') {
    const pId = Number(activeCategory.value)
    list = list.filter(l => l.partId === pId)
  }

  // Search filter
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return list

  const qAr = toArNum(q)

  return list.filter(item => {
    const idStr = String(item.id)
    const idKh = khNum(item.id)

    return idStr === q ||
      idKh === q ||
      idStr === qAr ||
      item.title.toLowerCase().includes(q) ||
      item.q.toLowerCase().includes(q) ||
      item.a.toLowerCase().includes(q) ||
      (item.simile && item.simile.toLowerCase().includes(q)) ||
      item.chapter.toLowerCase().includes(q) ||
      item.partTitleK.toLowerCase().includes(q)
  })
})

function copyLessonText(item) {
  return `${khNum(item.id)}. ${item.title}\n${item.qSpeaker} ${item.q}\n${item.aSpeaker} ${item.a}`
}

function copyDirectLink(id) {
  if (typeof window !== 'undefined') {
    const url = `${window.location.origin}/milinda-qa#lesson-${id}`
    copyText(url)
  }
}
</script>

<style scoped>
.fade-up {
  animation: fadeIn 0.3s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

