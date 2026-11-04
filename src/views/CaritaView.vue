<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🧠 {{ t('វិសុទ្ធិមគ្គ កម្មដ្ឋានបរិច្ឆេទ', 'Visuddhimagga · Meditation Temperament') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('ចរិត ៦ និងកម្មដ្ឋានសមគួរ', 'The 6 Temperaments & Suitable Meditations') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ចរិត គឺនិស្ស័យ អត្តចរិត ឬលំនោរចិត្តធម្មជាតិរបស់មនុស្សម្នាក់ៗ។ ព្រះអដ្ឋកថាចារ្យបានបែងចែកចរិតមនុស្សជា ៦ ជំពូកធំៗ ក្នុងគម្ពីរវិសុទ្ធិមគ្គ ដើម្បីជាមូលដ្ឋានក្នុងការជ្រើសរើសកម្មដ្ឋានឱ្យត្រូវនឹងនិស្ស័យ កម្ចាត់កិលេសបានចំគោលដៅ ដូចគ្រូពេទ្យផ្សំថ្នាំត្រូវនឹងរោគ។',
            'Carita denotes the intrinsic temperament and mental inclinations of an individual. Classified into 6 major types in the Visuddhimagga, understanding one’s temperament helps match the right meditation subject to eradicate defilements, like a physician prescribing exact medicine for a specific ailment.'
          ) }}
        </p>
      </div>
    </section>

    <!-- Navigation / Sub-Tabs -->
    <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none touch-pan-x">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        class="lang-pick px-3.5 py-1.5 text-xs font-semibold shrink-0 whitespace-nowrap"
        :class="activeTab === tab.id ? 'on' : ''"
      >
        <span>{{ tab.icon }}</span>
        <span>{{ t(tab.titleK, tab.titleE) }}</span>
      </button>
    </div>

    <!-- TAB 1: 6 Carita Cards -->
    <section v-if="activeTab === 'types'" class="space-y-4">
      <!-- Filter Chips -->
      <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none touch-pan-x">
        <button
          @click="selectedFilter = 'all'"
          class="lang-pick px-2.5 py-1 text-xs shrink-0 whitespace-nowrap"
          :class="selectedFilter === 'all' ? 'on' : ''"
        >
          {{ t('ទាំងអស់ (៦)', 'All 6') }}
        </button>
        <button
          v-for="c in caritaList"
          :key="c.id"
          @click="selectedFilter = c.id"
          class="lang-pick px-2.5 py-1 text-xs shrink-0 whitespace-nowrap"
          :class="selectedFilter === c.id ? 'on' : ''"
        >
          {{ c.icon }} {{ t(c.titleK, c.titleE) }}
        </button>
      </div>

      <!-- Grid of Temperaments -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="item in filteredCaritas"
          :key="item.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div class="flex items-start justify-between gap-3 mb-3">
            <div class="flex items-center gap-3">
              <span class="text-3xl p-2.5 rounded-xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ item.icon }}
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-base sm:text-lg" :style="{ color: 'var(--ink)' }">
                    {{ t(item.titleK, item.titleE) }}
                  </h3>
                  <span class="text-xs px-2 py-0.5 rounded-full font-mono font-medium"
                        :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                    {{ item.pali }}
                  </span>
                </div>
                <p class="text-xs font-serif italic mt-0.5" :style="{ color: 'var(--ink-faint)' }">
                  {{ item.meaning }}
                </p>
              </div>
            </div>
          </div>

          <!-- Trait highlights -->
          <div class="space-y-2 text-xs sm:text-sm mb-4" :style="{ color: 'var(--ink-muted)' }">
            <div>
              <strong class="font-semibold" :style="{ color: 'var(--ink)' }">{{ t('លក្ខណៈសម្គាល់៖', 'Key Traits:') }}</strong>
              <p class="line-clamp-2 mt-0.5">{{ t(item.traitsK, item.traitsE) }}</p>
            </div>
            <div>
              <strong class="font-semibold" :style="{ color: 'var(--ink)' }">{{ t('កម្មដ្ឋានជាឱសថកែខៃ៖', 'Curative Meditation:') }}</strong>
              <p class="line-clamp-2 mt-0.5 font-medium" :style="{ color: 'var(--accent)' }">
                {{ t(item.meditationK, item.meditationE) }}
              </p>
            </div>
          </div>

          <!-- Bottom bar -->
          <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold"
               :style="{ borderColor: 'var(--border)', color: 'var(--accent)' }">
            <span>{{ t('មើលការវិភាគពិស្តារ និងសប្បាយ ៧', 'View Deep Analysis & 7 Sappāya →') }}</span>
            <span class="text-base">→</span>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 2: Interactive Assessment Quiz -->
    <section v-if="activeTab === 'quiz'" class="card-paper p-6 space-y-6">
      <div class="text-center max-w-xl mx-auto space-y-2">
        <h2 class="text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('តេស្តស្វែងយល់ពីចរិតផ្ទាល់ខ្លួន', 'Discover Your Dominant Temperament') }}
        </h2>
        <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ឆ្លើយសំណួរទាំង ៦ ខាងក្រោមតាមភាពពិតជាក់ស្ដែង ដើម្បីស្វែងរកចរិតលេចធ្លោបំផុតរបស់អ្នក និងកម្មដ្ឋានដែលសមស្របបំផុត។', 'Answer the 6 reflective questions below honestly to discover your primary inclination and the meditation technique that fits you best.') }}
        </p>
      </div>

      <div class="space-y-4 max-w-2xl mx-auto">
        <div
          v-for="(q, idx) in quizQuestions"
          :key="idx"
          class="p-4 rounded-xl border space-y-3"
          :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }"
        >
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold font-mono"
                  :style="{ background: 'var(--accent)', color: 'var(--bg)' }">
              {{ khNum(idx + 1) }}
            </span>
            <h4 class="font-semibold text-sm" :style="{ color: 'var(--ink)' }">
              {{ t(q.questionK, q.questionE) }}
            </h4>
          </div>

          <div class="grid grid-cols-1 gap-2 pt-1">
            <button
              v-for="opt in q.options"
              :key="opt.caritaId"
              @click="userAnswers[idx] = opt.caritaId"
              class="w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition-all flex items-start gap-2.5"
              :class="userAnswers[idx] === opt.caritaId ? 'ring-2 font-semibold' : 'opacity-85 hover:opacity-100'"
              :style="{
                background: userAnswers[idx] === opt.caritaId ? 'var(--accent-soft)' : 'var(--bg-card)',
                borderColor: userAnswers[idx] === opt.caritaId ? 'var(--accent)' : 'var(--border)',
                color: userAnswers[idx] === opt.caritaId ? 'var(--accent)' : 'var(--ink)'
              }"
            >
              <span class="mt-0.5 text-xs">●</span>
              <span>{{ t(opt.labelK, opt.labelE) }}</span>
            </button>
          </div>
        </div>

        <!-- Quiz Result -->
        <div v-if="allAnswered" class="card-paper p-6 text-center space-y-4 border-2" :style="{ borderColor: 'var(--accent)' }">
          <span class="text-4xl">🎉</span>
          <h3 class="text-xl font-bold font-serif" :style="{ color: 'var(--accent)' }">
            {{ t('លទ្ធផលចរិតចម្បងរបស់អ្នក៖', 'Your Dominant Temperament Result:') }}
          </h3>
          <div v-if="quizResult" class="space-y-2">
            <div class="text-2xl font-bold" :style="{ color: 'var(--ink)' }">
              {{ quizResult.icon }} {{ t(quizResult.titleK, quizResult.titleE) }} ({{ quizResult.pali }})
            </div>
            <p class="text-sm max-w-lg mx-auto" :style="{ color: 'var(--ink-muted)' }">
              {{ t(quizResult.traitsK, quizResult.traitsE) }}
            </p>
            <div class="p-4 rounded-xl mt-4" :style="{ background: 'var(--accent-soft)' }">
              <span class="text-xs uppercase tracking-wider font-bold block mb-1" :style="{ color: 'var(--accent)' }">
                {{ t('កម្មដ្ឋានដែលស័ក្តិសមបំផុតសម្រាប់អ្នក', 'Most Recommended Meditation Subject') }}
              </span>
              <p class="text-sm font-semibold" :style="{ color: 'var(--ink)' }">
                {{ t(quizResult.meditationK, quizResult.meditationE) }}
              </p>
            </div>
            <button
              @click="activeTab = 'types'; selectedFilter = quizResult.id; expandedId = quizResult.id"
              class="lang-pick px-5 py-2 text-xs font-semibold on shrink-0 whitespace-nowrap inline-flex items-center gap-2 mt-2"
            >
              <span>{{ t('អានការណែនាំលម្អិតអំពីចរិតនេះ', 'Read Full Guide for this Temperament') }}</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 3: Visuddhimagga Sappāya (7 Favourable Factors) -->
    <section v-if="activeTab === 'sappaya'" class="space-y-4">
      <div class="card-paper p-6 space-y-3">
        <h2 class="text-lg sm:text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('សប្បាយ ៧ យ៉ាង (Sappāya 7) សម្រាប់អ្នកប្រតិបត្តិ', 'The 7 Favourable Environmental Factors') }}
        </h2>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ព្រះពុទ្ធឃោសាចារ្យបានបង្រៀនក្នុងគម្ពីរវិសុទ្ធិមគ្គថា ដើម្បីឱ្យចិត្តឆាប់ស្ងប់ស្ងាត់និងកើតសមាធិ អ្នកចម្រើនភាវនាត្រូវរៀបចំកត្តាខាងក្រៅ ៧ យ៉ាងឱ្យត្រូវនឹងចរិតរបស់ខ្លួន៖',
            'In the Visuddhimagga, Acariya Buddhaghosa emphasized that for meditation to bear fruit swiftly, the practitioner must align 7 external environmental conditions with their temperament:'
          ) }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(s, sIdx) in sappayaList"
          :key="sIdx"
          class="card-paper p-4 space-y-2 border"
          :style="{ borderColor: 'var(--border)' }"
        >
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">{{ s.icon }}</span>
            <div>
              <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">
                {{ khNum(sIdx + 1) }}. {{ t(s.nameK, s.nameE) }}
              </h4>
              <span class="text-xs font-mono" :style="{ color: 'var(--accent)' }">{{ s.pali }}</span>
            </div>
          </div>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(s.descrK, s.descrE) }}
          </p>
        </div>
      </div>
    </section>

    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  if (n === null || n === undefined) return ''
  return String(n).split('').map(d => khDigits[Number(d)] ?? d).join('')
}

const activeTab = ref('types')
const selectedFilter = ref('all')
const expandedId = ref(null)
function toggleExpand(id) { expandedId.value = expandedId.value === id ? null : id }

const tabs = [
  { id: 'types', icon: '🧠', titleK: 'ចរិតទាំង ៦', titleE: '6 Temperaments' },
  { id: 'quiz', icon: '📝', titleK: 'តេស្តស្វែងយល់ចរិត', titleE: 'Temperament Quiz' },
  { id: 'sappaya', icon: '🏡', titleK: 'សប្បាយ ៧ យ៉ាង', titleE: '7 Sappāya Factors' },
]

// Reader font sizes
const readerFontSizes = [
  { label: 'A', class: 'text-sm' },
  { label: 'A+', class: 'text-base' },
  { label: 'A++', class: 'text-lg' }
]
const readerFontSizeIdx = ref(0)
function toggleReaderFontSize() {
  readerFontSizeIdx.value = (readerFontSizeIdx.value + 1) % readerFontSizes.length
}

const caritaList = [
  {
    id: 'raga',
    icon: '🌸',
    titleK: 'រាគចរិត',
    titleE: 'Lustful Temperament',
    pali: 'Rāgacarita',
    meaning: 'មនុស្សមាននិស្ស័យស្រឡាញ់ភាពល្អិតល្អន់ ជាប់ជំពាក់សម្រស់ និងកាមគុណ',
    traitsK: 'ចូលចិត្តរបស់ស្អាតបាត ក្រអូប ផ្អែមល្ហែម ស្លៀកពាក់មានរបៀប និយាយស្រទន់ ដើរថ្នមៗ តែងខ្លួនយូរ ងាយជាប់ជំពាក់លើរូបរាង កាយវិការ និងអារម្មណ៍រីករាយ។',
    traitsE: 'Attracted to beauty, pleasant scents, sweet tastes, neatness, polite speech, graceful movement; slow to anger but deeply attached to sensual pleasures.',
    meditationK: 'អសុភភាវនា ១០ (ការពិចារណាលើសាកសព និងភាពមិនស្អាត) និងកាយគតាសតិ ៣២ (សក់ រោម ក្រចក ធ្មេញ ស្បែក...)។',
    meditationE: 'Asubha-bhāvanā (10 Foulness subjects) and Kāyagatāsati (Mindfulness of the 32 parts of the body: hair, teeth, skin, etc.).',
    quotePali: 'Rāgassa pahānāya asubhā bhāvetabbā',
    quoteK: 'ដើម្បីលះបង់នូវរាគៈ គប្បីចម្រើនអសុភភាវនា (ឧទាន. ៤)',
    quoteE: 'For the abandoning of lust, foulness should be cultivated (Udāna 4).',
    habitsK: 'ពេលដើរ តែងជាន់ជើងថ្នមៗ ដានជើងពេញកណ្តាល។ ចូលចិត្តអាហារផ្អែមល្មម បរិភោគតិចៗមានរបៀប។ ស្លៀកពាក់ស្អាតមិនឱ្យមានស្នាមជ្រួញ។ បន្ទប់ដេកស្អាតមានផ្កាក្រអូប។',
    habitsE: 'Walks gently with even footprints. Prefers sweet, delicate food eaten in modest portions with etiquette. Garments kept pristine without wrinkles. Living space tidy with flowers.',
    meditationDetailK: 'អសុភ ១០ និង កាយគតាសតិ (កោដ្ឋាស ៣២) ជួយដាស់អារម្មណ៍ឱ្យឃើញការពិតនៃសរីរាង្គកាយ ដែលគ្មានភាពស្អាតជារៀងរហូតឡើយ កម្ចាត់កាមរាគៈដែលបំភាន់ភ្នែក។',
    meditationDetailE: 'Asubha 10 and Kāyagatāsati (32 anatomical components) expose the actual perishable, unglamorous nature of the body, neutralizing lustful fantasies.',
    environment: [
      { k: 'ទីស្នាក់នៅ៖ មិនចាំបាច់តុបតែងប្រណីតពេក កន្លែងរដុប ឬមិនសូវស្រស់ស្អាត ដើម្បីកាត់បន្ថយតម្រេក។', e: 'Dwelling: Simple, unadorned, non-luxurious to diminish sensory delight.' },
      { k: 'អាហារ៖ អាហារសាមញ្ញ មិនបាច់ឆ្ងាញ់ហួសប្រមាណ។', e: 'Food: Modest and plain, avoiding rich gourmet indulgences.' },
      { k: 'គ្រូណែនាំ៖ គ្រូដែលមិនតុបតែងអួតអាង តែមានការបដិបត្តិធម៌ខ្ជាប់ខ្ជួន។', e: 'Teacher: A steadfast practitioner who models austere simplicity.' }
    ],
    practicalK: 'ក្នុងសម័យឌីជីថល នៅពេលឃើញរូបភាពផ្សាយពាណិជ្ជកម្ម ឬបណ្តាញសង្គមដែលដាស់កាមតណ្ហា គប្បីរំឭកខ្លួនឯងថា «របស់ទាំងនេះសុទ្ធតែជារបស់មិនទៀង មិនមែនជាខ្លឹមសាររឹងមាំឡើយ»។',
    practicalE: 'In the digital age when social media triggers desires, immediately remind yourself of impermanence and the inner bodily reality behind filters.'
  },
  {
    id: 'dosa',
    icon: '🔥',
    titleK: 'ទោសចរិត',
    titleE: 'Hateful Temperament',
    pali: 'Dosacarita',
    meaning: 'មនុស្សឆាប់ខឹង ឆាប់ឆួល មួម៉ៅ ចាប់កំហុសអ្នកដទៃ តែជាមនុស្សស្មោះត្រង់',
    traitsK: 'ឆាប់ខឹង ឆាប់មួរម៉ៅ ចូលចិត្តរិះគន់ ចាប់កំហុស និយាយត្រង់ៗគ្មានលាក់លៀម ដើរចុចកែងជើងធ្ងន់ៗ មិនចូលចិត្តរបស់កខ្វក់ ឬភាពរញ៉េរញ៉ៃ។',
    traitsE: 'Prone to anger, quick-tempered, critical, fault-finding, direct and honest, walks with heavy heel pressure, intolerant of untidiness.',
    meditationK: 'មេត្តាភាវនា, ករុណា, មុទិតា, ឧបេក្ខា (ព្រហ្មវិហារ ៤) និងវណ្ណកសិណ ៤ (កសិណពណ៌ខៀវ លឿង ក្រហម ស)។',
    meditationE: 'Mettā (Loving-kindness), Karuṇā, Muditā, Upekkhā (4 Brahmavihāras), and 4 Colour Kasiṇas (Blue, Yellow, Red, White).',
    quotePali: 'Dosassa pahānāya mettā bhāvetabbā',
    quoteK: 'ដើម្បីលះបង់នូវទោសៈ គប្បីចម្រើនមេត្តា (ឧទាន. ៤)',
    quoteE: 'For the abandoning of hatred, loving-kindness should be cultivated (Udāna 4).',
    habitsK: 'ដើរដោយសង្កត់កែងជើងខ្លាំង ដានជើងជ្រៅត្រង់កែង។ បរិភោគអាហារហឹរ ជូរ ឬក្ដៅ ហើយបរិភោគប្រញាប់ប្រញាល់។ មិនអត់ធ្មត់នឹងមនុស្សនិយាយយឺតយ៉ាវ។',
    habitsE: 'Walks heavily digging heels into the ground. Prefers sour, hot, spicy food eaten hastily. Impatient with slow people and delays.',
    meditationDetailK: 'មេត្តាព្រហ្មវិហារ ផ្សាយសេចក្ដីស្រឡាញ់រាប់អានដល់មនុស្ស សត្វ ដោយគ្មានព្រំដែន រួមផ្សំនឹងកសិណពណ៌ថ្លាត្រជាក់ ជួយរំលត់ភ្លើងកំហឹងក្នុងបេះដូង។',
    meditationDetailE: 'Boundless loving-kindness alongside calm color meditations (Blue/White kasiṇa) soothes the fiery irritation in the mind.',
    environment: [
      { k: 'ទីស្នាក់នៅ៖ ទីស្អាតបាត ខ្យល់អាកាសបរិសុទ្ធ ម្លប់ត្រជាក់ មិនមានសំឡេងរំខាន។', e: 'Dwelling: Cool, shaded, tranquil, extremely clean and undisturbed.' },
      { k: 'អាហារ៖ អាហារត្រជាក់ ផ្អែមល្មម បន្លែផ្លែឈើ មិនហឹរមិនក្ដៅ។', e: 'Food: Cool, mildly sweet, soothing vegetables, non-spicy.' },
      { k: 'គ្រូណែនាំ៖ គ្រូដែលមានទឹកមុខញញឹមស្រស់ថ្លា និងពោរពេញដោយក្តីមេត្តា។', e: 'Teacher: A gentle, patient guide who radiates calm benevolence.' }
    ],
    practicalK: 'នៅពេលមានអារម្មណ៍ឆេវឆាវ ឬខឹងនរណាម្នាក់ សូមផ្អាកប្រតិកម្ម ៥ វិនាទី ដកដង្ហើមចូលជ្រៅៗ ហើយផ្សាយមេត្តាថា «សូមឱ្យបុគ្គលនេះបានសុខ ផុតទុក្ខ កុំឱ្យមានពៀរនឹងគ្នា»។',
    practicalE: 'When irritation strikes, pause for 5 seconds, take deep breaths, and mentally send well-wishes: May they be peaceful and free from hostility.'
  },
  {
    id: 'moha',
    icon: '🌫️',
    titleK: 'មោហចរិត',
    titleE: 'Deluded Temperament',
    pali: 'Mohacarita',
    meaning: 'មនុស្សស្ពឹកស្រពន់ វង្វេងវង្វាន់ ងាយសង្ស័យ ឆាប់ងងុយ និងរវើរវាយ',
    traitsK: 'ចិត្តអាប់អួរ ខ្ជិលច្រអូស ស្ពឹកស្រពន់ ងងុយដេកច្រើន សម្រេចចិត្តមិនដាច់ ដើរប៉ះពាល់ជំពប់ជើង បោះបង់គោលដៅងាយៗ គិតអ្វីមិនសូវច្បាស់លាស់។',
    traitsE: 'Sluggish, confused, prone to drowsiness, indecisive, forgetful, clumsy gait, gives up easily, lacks clarity and direction.',
    meditationK: 'អានាបានសតិ (កំណត់ខ្យល់ដង្ហើមចេញចូលឱ្យជាប់), ការរៀនសូត្រធម៌, ការសាកសួរលោកគ្រូ និងការចម្រើនពន្លឺ (អាលោកកសិណ)។',
    meditationE: 'Ānāpānasati (Mindful breathing with focused anchor), Sutta study, Dhamma questioning, and Āloka-kasiṇa (Light meditation).',
    quotePali: 'Mohassa pahānāya paññā bhāvetabbā',
    quoteK: 'ដើម្បីលះបង់នូវមោហៈ គប្បីចម្រើនបញ្ញា និងការរៀនសូត្រ',
    quoteE: 'For the abandoning of delusion, wisdom and inquiry should be cultivated.',
    habitsK: 'ដើរអូសជើង ជើងទាក់នឹងដី។ ពេលបរិភោគអាហារមិនសូវជ្រើសរើស ញ៉ាំច្របូកច្របល់។ ចូលចិត្តកន្លែងងងឹត ឬស្ងាត់ជ្រងំដែលនាំឱ្យងងុយ។',
    habitsE: 'Drags feet carelessly. Eats haphazardly without attention. Craves dark, overly quiet corners that induce sleepiness.',
    meditationDetailK: 'ខ្យល់ដង្ហើមចេញចូល (អានាបានសតិ) ជួយដាស់ស្មារតីឱ្យនៅនឹងច្រមុះ មិនឱ្យលង់ក្នុងសេចក្ដីងងុយ និងការរៀនសួរដេញដោលធម៌ដាស់បញ្ញាឱ្យភ្ញាក់រលឹក។',
    meditationDetailE: 'Focused breath anchor prevents daydreaming, while Light meditation and probing Dhamma dialogue ignite mental alertness.',
    environment: [
      { k: 'ទីស្នាក់នៅ៖ ទីវាលស្រឡះ មានពន្លឺថ្ងៃគ្រប់គ្រាន់ ខ្យល់បក់ល្អ មិនងងឹត។', e: 'Dwelling: Brightly lit, open vistas, well-ventilated, never dim or enclosed.' },
      { k: 'អាហារ៖ អាហារស្រាលៗ មិនឱ្យឆ្អែតជ្រុលពេកនាំឱ្យងងុយ។', e: 'Food: Light, invigorating meals; avoid heavy carb-dense gorging.' },
      { k: 'គ្រូណែនាំ៖ គ្រូដែលពូកែសួរដេញដោល ជម្រុញស្មារតី មិនបណ្តោយឱ្យស្ពឹក។', e: 'Teacher: An energetic teacher who frequently questions and prompts reflection.' }
    ],
    practicalK: 'ពេលមានអារម្មណ៍ខ្ជិល ឬអ័ព្ទគំនិត ចូរក្រោកឈរ ដើរចង្ក្រម លុបមុខដោយទឹកត្រជាក់ ហើយកំណត់ដង្ហើមវែងៗ នាំពន្លឺចូលក្នុងចិត្ត។',
    practicalE: 'When mental fog creeps in, stand up, wash face with cool water, practice walking meditation, and focus on short, bright breaths.'
  },
  {
    id: 'saddha',
    icon: '💎',
    titleK: 'សទ្ធាចរិត',
    titleE: 'Faithful Temperament',
    pali: 'Saddhācarita',
    meaning: 'មនុស្សមានជំនឿមុតមាំ ជ្រះថ្លាងាយ ចូលចិត្តធ្វើបុណ្យ តែងាយចាញ់បោកគេ',
    traitsK: 'ចិត្តទន់ ជ្រះថ្លា ចូលចិត្តបរិច្ចាគទាន គោរពព្រះសង្ឃ និងវត្តអារាម រំភើបងាយ តែបើខ្វះបញ្ញាអាចធ្លាក់ចូលក្នុងជំនឿខ្វាក់ខ្វាក់ (មោឃសទ្ធា)។',
    traitsE: 'Devout, generous, inspired easily by holy symbols and teachings, emotional devotion; risks blind faith if unbalanced by wisdom.',
    meditationK: 'អនុស្សតិ ៦ ជំពូកដំបូង៖ ពុទ្ធានុស្សតិ, ធម្មserviceស្សតិ, សង្ឃានុស្សតិ, សីលានុស្សតិ, ចាគានុស្សតិ, ទេវតានុស្សតិ។',
    meditationE: 'First 6 Anussatis: Buddhānussati, Dhammānussati, Saṅghānussati, Sīlānussati, Cāgānussati, Devatānussati.',
    quotePali: 'Saddhādhanena dhanavā',
    quoteK: 'អ្នកមានទ្រព្យ គឺមានទ្រព្យពោលគឺសទ្ធា',
    quoteE: 'Wealthy is one who possesses the treasure of faith.',
    habitsK: 'ដើរដោយការគោរព ភ្នែកមើលត្រឹមមួយជួរនឹម។ ចូលចិត្តកន្លែងស្ងប់ស្ងាត់មានព្រះពុទ្ធបដិមា។ បរិភោគអាហារដោយសេចក្ដីគោរព និងកោតក្រែង។',
    habitsE: 'Walks reverently with modest gaze. Drawn to sacred shrines and stupas. Consumes meals with deliberate gratitude.',
    meditationDetailK: 'ពុទ្ធានុស្សតិ និងគុណព្រះរតនត្រ័យ ជួយដឹកនាំសេចក្ដីជ្រះថ្លាឱ្យក្លាយជាថាមពលសមាធិដ៏រឹងមាំ ដោយមានបញ្ញាដឹងច្បាស់ពីគុណពិត។',
    meditationDetailE: 'Recollection of the Buddha’s virtues channels emotional devotion directly into concentrated joy and spiritual poise.',
    environment: [
      { k: 'ទីស្នាក់នៅ៖ វត្តអារាម ឬទីកន្លែងដែលមានចេតិយ ព្រះបដិមា នាំឱ្យកើតបីតិ។', e: 'Dwelling: Near stupas, tranquil shrines, clean sanctuaries inspiring serenity.' },
      { k: 'អាហារ៖ អាហារដែលបានមកដោយបរិសុទ្ធ ធ្វើឱ្យចិត្តរីករាយ។', e: 'Food: Clean, honestly acquired food that brings moral contentment.' },
      { k: 'គ្រូណែនាំ៖ គ្រូដែលមានសីលធម៌ខ្ពង់ខ្ពស់ និងបង្ហាត់ឱ្យប្រើបញ្ញាពិចារណា។', e: 'Teacher: An inspiring, morally spotless teacher who emphasizes wisdom.' }
    ],
    practicalK: 'កុំគ្រាន់តែជឿតាមពាក្យគេ ចូរផ្សំសទ្ធាជាមួយនឹងបញ្ញា (ញាណសម្បយុត្ត) ដោយការសិក្សាព្រះធម៌ឱ្យយល់ហេតុផលច្បាស់លាស់។',
    practicalE: 'Balance devotion with critical Dhamma study so that faith becomes grounded in direct insight rather than superstition.'
  },
  {
    id: 'buddhi',
    icon: '💡',
    titleK: 'ពុទ្ធិចរិត (ញាណចរិត)',
    titleE: 'Intellectual Temperament',
    pali: 'Buddhicarita',
    meaning: 'មនុស្សចូលចិត្តពិចារណា វិភាគហេតុផល ស្វែងយល់ការពិត ស្រឡាញ់ចំណេះដឹង',
    traitsK: 'ចូលចិត្តអាន សិក្សាស្រាវជ្រាវ វែកញែករកហេតុផល មិនជឿអ្វីងាយៗ ស្វែងរកការពិតនៃជីវិត មិនសូវជាប់ជំពាក់ផ្លូវអារម្មណ៍ ចូលចិត្តការសន្ទនាធម៌ស៊ីជម្រៅ។',
    traitsE: 'Inquisitive, analytical, loves deep investigation and Dhamma philosophy, tests everything with reason, not easily swayed by emotion.',
    meditationK: 'ចតុធាតុវវត្ថាន (វិភាគធាតុ ៤), មរណានុស្សតិ (រឭកដល់សេចក្ដីស្លាប់), អាហារេបដិកូលសញ្ញា និងអនិច្ចសញ្ញា/ទុក្ខសញ្ញា/អនត្តសញ្ញា។',
    meditationE: 'Dhātuvavatthāna (Analysis of the 4 Elements), Maraṇānussati (Recollection of Death), Āhārepaṭikūlasaññā, and Anicca/Dukkha/Anattā insight.',
    quotePali: 'Paññā lokasmi pajjoto',
    quoteK: 'បញ្ញាជាពន្លឺក្នុងលោក',
    quoteE: 'Wisdom is the guiding light of the world.',
    habitsK: 'ដើរដោយជំហានល្មមៗ ភ្នែកសម្លឹងពិចារណាជុំវិញ។ ពេលបរិភោគ តែងពិចារណាពីជីវជាតិ និងធាតុផ្សំ។ ចូលចិត្តបន្ទប់សៀវភៅ និងទីពិភាក្សាធម៌។',
    habitsE: 'Walks with measured steps, observant. Considers the nutritional and constituent nature of food. Loves study libraries and discussion.',
    meditationDetailK: 'ការពិចារណាធាតុ ៤ (ដី ទឹក ភ្លើង ខ្យល់) និងសេចក្ដីស្លាប់ ផ្ដល់ចំណីដល់គំនិតវិភាគ រហូតទម្លាយការប្រកាន់តួខ្លួន (អនត្តា) បានយ៉ាងរហ័ស។',
    meditationDetailE: 'Dissection of the 4 elements and death mindfulness feeds analytical curiosity until the illusion of self disintegrates into reality.',
    environment: [
      { k: 'ទីស្នាក់នៅ៖ ទីស្ងាត់ជ្រងំ ល្អសម្រាប់ការគិតត្រិះរិះ និងសមាធិស៊ីជម្រៅ។', e: 'Dwelling: Quiet, solitary spaces conductive to deep sustained reflection.' },
      { k: 'អាហារ៖ អាហារបំប៉នសុខភាព មិនច្រើនជ្រុល មិននាំឱ្យរំខានការគិត។', e: 'Food: Wholesome, brain-healthy, moderate meals.' },
      { k: 'គ្រូណែនាំ៖ គ្រូដែលមានចំណេះដឹងជ្រៅជ្រះក្នុងព្រះត្រៃបិដក និងបទពិសោធន៍វិបស្សនា។', e: 'Teacher: A scholar-monk with deep mastery of scripture and vipassanā insight.' }
    ],
    practicalK: 'ប្រយ័ត្នកុំឱ្យការគិតច្រើនក្លាយជាឧបសគ្គរារាំងសមាធិ ចូរទម្លាក់ទ្រឹស្តីចោលសិនក្នុងពេលអង្គុយ ហើយដឹងច្បាស់នូវបច្ចុប្បន្នភាពជាក់ស្ដែង។',
    practicalE: 'Do not let excessive mental commentary block calm presence. Put theories aside during meditation and witness sensations directly.'
  },
  {
    id: 'vitakka',
    icon: '🌀',
    titleK: 'វិតក្កចរិត',
    titleE: 'Speculative Temperament',
    pali: 'Vitakkacarita',
    meaning: 'មនុស្សចូលចិត្តរវើរវាយ គិតរឿងច្រើនគ្មានក្បាលកន្ទុយ ចាប់នេះចាប់នោះមិនចប់',
    traitsK: 'គិតច្រើន គិតឥតប្រយោជន៍ ចិត្តរត់លឿន និយាយច្រើន ចាប់ផ្តើមគម្រោងច្រើនតែធ្វើមិនចប់ ងាយធុញទ្រាន់ ពិបាកផ្ដោតអារម្មណ៍លើយូរអង្វែង។',
    traitsE: 'Overthinking, prone to wandering fantasies, talks excessively, starts many projects without finishing, easily restless and distracted.',
    meditationK: 'អានាបានសតិ (ខ្យល់ដង្ហើមខ្លី និងរាប់ចំនួនដង្ហើម ១ ដល់ ៨), បឋវីកសិណ ឬអាបោកសិណ (កសិណដី ឬទឹក ដើម្បីទប់ចិត្ត)។',
    meditationE: 'Ānāpānasati (short focused breathing with counting cycles 1 to 8), Earth/Water Kasiṇa to firmly anchor scattered attention.',
    quotePali: 'Vitakkūpasame rato',
    quoteK: 'អ្នករីករាយក្នុងការរម្ងាប់នូវវិតក្កៈ (ធម្មបទ. ៣៥០)',
    quoteE: 'One who delights in stilling distracting thoughts attains peace (Dhp 350).',
    habitsK: 'ដើររេរាហ៍ មើលឆ្វេងមើលស្តាំ មិនសូវប្រយ័ត្នជើង។ ពេលញ៉ាំបាយ ដៃកាន់ទូរសព្ទ ឬជជែកគ្នាឥតឈប់។ ផ្លាស់ប្តូរគំនិតញឹកញាប់។',
    habitsE: 'Walks looking around restlessly. Snacks constantly while multitasking or on smartphones. Frequent abrupt shifts in interest.',
    meditationDetailK: 'ការរាប់ដង្ហើមចេញចូល (គណនវិធី) ជាខ្សែចងចិត្តមិនឱ្យរត់ទៅគិតរឿងអតីត ឬអនាគត ទាញចិត្តមកនៅនឹងចំណុចតូចមួយមុខ។',
    meditationDetailE: 'Counting incoming and outgoing breaths acts as a mental tether, preventing mind-wandering into past regrets or future fantasies.',
    environment: [
      { k: 'ទីស្នាក់នៅ៖ បន្ទប់តូច ល្មម មិនមានបង្អួចមើលឃើញទេសភាពធំទូលាយនាំឱ្យរវើរវាយ។', e: 'Dwelling: Compact, enclosed room without broad distracting panoramas.' },
      { k: 'អាហារ៖ អាហារធម្មតា មិនសូវផ្អែមខ្លាំង (ស្ករច្រើនធ្វើឱ្យរំជើបរំជួល)។', e: 'Food: Plain, low sugar to prevent spikes in physical hyperactivity.' },
      { k: 'គ្រូណែនាំ៖ គ្រូដែលមានវិន័យតឹងរ៉ឹង និងកំណត់កិច្ចការច្បាស់លាស់មួយៗ។', e: 'Teacher: A structured, disciplined mentor who assigns strict single tasks.' }
    ],
    practicalK: 'នៅពេលក្បាលពោរពេញដោយការគិតច្រើន ចូរកត់ត្រាអ្វីដែលត្រូវធ្វើលើក្រដាស រួចផ្តោតចិត្តធ្វើរឿងតែមួយគត់ក្នុងពេលតែមួយ (Single-tasking)។',
    practicalE: 'When mental chatter peaks, write tasks on paper and practice disciplined single-tasking with grounding belly breaths.'
  }
]

const filteredCaritas = computed(() => {
  if (selectedFilter.value === 'all') return caritaList
  return caritaList.filter(c => c.id === selectedFilter.value)
})

// Quiz Data
const userAnswers = ref({})
const quizQuestions = [
  {
    questionK: '១. តើឥរិយាបថពេលដើររបស់អ្នកភាគច្រើនដូចម្តេច?',
    questionE: '1. How do you naturally walk most of the time?',
    options: [
      { caritaId: 'raga', labelK: 'ដើរថ្នមៗ មានរបៀប ជើងជាន់ដីស្មើល្អ', labelE: 'Graceful, light, gentle footsteps' },
      { caritaId: 'dosa', labelK: 'ដើរធ្ងន់ៗ ចុចកែងជើង ជំហានលឿនម៉ឺងម៉ាត់', labelE: 'Firm, heavy heel steps, brisk and determined' },
      { caritaId: 'moha', labelK: 'ដើរអូសជើង ងាយជំពប់ ឬមិនសូវដឹងខ្លួន', labelE: 'Dragging feet loosely, somewhat absent-minded' },
      { caritaId: 'vitakka', labelK: 'ដើររេរាហ៍ មើលឆ្វេងស្តាំ មិនសូវស្ងប់ស្ងៀម', labelE: 'Looking around restlessly with wandering gaze' }
    ]
  },
  {
    questionK: '២. ពេលជួបបញ្ហា ឬកំហុសឆ្គងរបស់អ្នកដទៃ តើអ្នកមានប្រតិកម្មបែបណា?',
    questionE: '2. When encountering someone’s mistake, how do you instinctively react?',
    options: [
      { caritaId: 'dosa', labelK: 'ខឹងភ្លាម ចង់និយាយរិះគន់ ឬកែកំហុសភ្លាមៗ', labelE: 'Irritated immediately; urge to correct or criticize' },
      { caritaId: 'buddhi', labelK: 'វិភាគរកមូលហេតុ និងស្វែងយល់ពីឬសគល់នៃបញ្ហា', labelE: 'Analyze the causes and logical roots behind it' },
      { caritaId: 'saddha', labelK: 'អត់ឱន អាណិតអាសូរ និងព្យាយាមជួយដោយចិត្តល្អ', labelE: 'Forgiving, sympathetic, wanting to help kindly' },
      { caritaId: 'moha', labelK: 'វង្វេងស្មារតី មិនដឹងគួរធ្វើអ្វី ឬចង់គេចចេញ', labelE: 'Confused, not knowing what to do, withdrawing' }
    ]
  },
  {
    questionK: '៣. តើអាហារប្រភេទណាដែលត្រូវចិត្តអ្នកបំផុត?',
    questionE: '3. What kind of food appeals to you most?',
    options: [
      { caritaId: 'raga', labelK: 'អាហារផ្អែមល្ហែម ស្អាតបាត មានការរៀបចំតុបតែងល្អ', labelE: 'Sweet, aesthetically pleasing, nicely presented dishes' },
      { caritaId: 'dosa', labelK: 'អាហារហឹរ ជូរ ឬក្ដៅខ្លាំង មានរសជាតិដិត', labelE: 'Spicy, tart, robust flavors eaten quickly' },
      { caritaId: 'buddhi', labelK: 'អាហារសុខភាព សម្បូរជីវជាតិ មានតុល្យភាព', labelE: 'Healthy, nutrient-dense, purposeful nutrition' },
      { caritaId: 'moha', labelK: 'ញ៉ាំអ្វីក៏បាន មិនសូវគិតច្រើន ងាយស្រួលៗ', labelE: 'Anything accessible, simple without much thought' }
    ]
  },
  {
    questionK: '៤. ពេលទំនេរ តើអ្នកចូលចិត្តធ្វើអ្វីជាងគេ?',
    questionE: '4. During leisure time, what do you naturally gravitate toward?',
    options: [
      { caritaId: 'buddhi', labelK: 'អានសៀវភៅ ស្រាវជ្រាវ រៀនអ្វីថ្មីៗស៊ីជម្រៅ', labelE: 'Reading, researching, acquiring deep knowledge' },
      { caritaId: 'vitakka', labelK: 'ស្រមៃគម្រោងថ្មីៗ អូសទូរសព្ទច្រើនមុខក្នុងពេលតែមួយ', labelE: 'Daydreaming new projects, multi-tab browsing' },
      { caritaId: 'saddha', labelK: 'ស្តាប់ធម៌ ទៅវត្ត ធ្វើបុណ្យ ជួបជុំអ្នកមានជំនឿ', labelE: 'Listening to sermons, visiting temples, acts of faith' },
      { caritaId: 'raga', labelK: 'តុបតែងបន្ទប់ ស្តាប់ភ្លេង ឬរីករាយនឹងសិល្បៈ', labelE: 'Decorating home, appreciating art, music, beauty' }
    ]
  },
  {
    questionK: '៥. តើឧបសគ្គផ្លូវចិត្តណាដែលកើតឡើងញឹកញាប់បំផុតក្នុងចិត្តអ្នក?',
    questionE: '5. Which internal mental friction occurs most frequently?',
    options: [
      { caritaId: 'vitakka', labelK: 'គិតច្រើន មិនអាចបិទគំនិតក្នុងក្បាលបាន', labelE: 'Racing thoughts, inability to quiet down mental chatter' },
      { caritaId: 'dosa', labelK: 'មួរម៉ៅ ឆាប់អន់ចិត្ត ឬធុញទ្រាន់នឹងមនុស្សជុំវិញ', labelE: 'Impatience, short fuse, easily annoyed by others' },
      { caritaId: 'raga', labelK: 'ជាប់ជំពាក់លើរបស់ស្អាត សម្រស់ ឬការសរសើរ', labelE: 'Longing for praise, beauty, pleasant sensations' },
      { caritaId: 'moha', labelK: 'ងងុយដេក ស្ពឹកស្រពន់ គិតអ្វីមិនសូវលេចចេញ', labelE: 'Drowsiness, brain fog, lethargic lack of focus' }
    ]
  },
  {
    questionK: '៦. តើអ្នកមានទំនោរជឿលើរឿងរ៉ាវយ៉ាងដូចម្តេច?',
    questionE: '6. How do you approach new beliefs or teachings?',
    options: [
      { caritaId: 'saddha', labelK: 'ជឿដោយងាយពេលឮរឿងល្អ ឬមានការបំផុសគំនិត', labelE: 'Inspire easily and trust good messages readily' },
      { caritaId: 'buddhi', labelK: 'ត្រូវតែសាកសួរ ស្រាវជ្រាវ និងផ្ទៀងផ្ទាត់ហេតុផលសិន', labelE: 'Question, cross-examine, and verify proof first' },
      { caritaId: 'moha', labelK: 'ជឿតាមគេតាមឯង មិនសូវច្បាស់ថាមួយណាត្រូវ', labelE: 'Follow along with the crowd without certainty' },
      { caritaId: 'dosa', labelK: 'សង្ស័យ និងរិះគន់មុននឹងទទួលស្គាល់', labelE: 'Critically skeptical until forced by undeniable logic' }
    ]
  }
]

const allAnswered = computed(() => {
  return Object.keys(userAnswers.value).length === quizQuestions.length
})

const quizResult = computed(() => {
  if (!allAnswered.value) return null
  const counts = {}
  Object.values(userAnswers.value).forEach(id => {
    counts[id] = (counts[id] || 0) + 1
  })
  let maxId = 'raga'
  let maxCount = -1
  Object.entries(counts).forEach(([id, c]) => {
    if (c > maxCount) {
      maxCount = c
      maxId = id
    }
  })
  return caritaList.find(c => c.id === maxId) || caritaList[0]
})

// Sappāya 7
const sappayaList = [
  {
    nameK: 'អាវាសសប្បាយ',
    nameE: 'Favourable Dwelling',
    pali: 'Āvāsasappāya',
    icon: '🏡',
    descrK: 'ទីកន្លែងស្នាក់នៅសមរម្យ មិនចង្អៀតពេក មិនអ៊ូអរ មានសន្តិភាពជួយឱ្យចិត្តស្ងប់។',
    descrE: 'A suitable residence: neither cramped nor noisy, conducive to inner stillness.'
  },
  {
    nameK: 'គោចរសប្បាយ',
    nameE: 'Favourable Village / Vicinity',
    pali: 'Gocarasappāya',
    icon: '🏘️',
    descrK: 'តំបន់ជុំវិញងាយស្រួលស្វែងរកចង្ហាន់ ឬអាហារ មិនឆ្ងាយហួសហេតុ និងគ្មានសត្រូវ។',
    descrE: 'A supportive surrounding area for requisites and alms, safe and accessible.'
  },
  {
    nameK: 'ភស្សសប្បាយ',
    nameE: 'Favourable Conversation',
    pali: 'Bhassasappāya',
    icon: '🗣️',
    descrK: 'ការនិយាយតែពាក្យធម៌ដែលមានប្រយោជន៍ (កថាវត្ថុ ១០) ជៀសវាងតិរច្ឆានកថា។',
    descrE: 'Refined conversation centered on Dhamma virtues, avoiding idle talk.'
  },
  {
    nameK: 'បុគ្គលសប្បាយ',
    nameE: 'Favourable Companions',
    pali: 'Puggalasappāya',
    icon: '👥',
    descrK: 'ការរាប់អានកល្យាណមិត្ត និងគ្រូដែលស្ងប់ស្ងាត់ មានសីល និងប្រាជ្ញា។',
    descrE: 'Associating with noble friends and mentors of serene wisdom and virtue.'
  },
  {
    nameK: 'ភោជនសប្បាយ',
    nameE: 'Favourable Food',
    pali: 'Bhojanasappāya',
    icon: '🍲',
    descrK: 'អាហារសមរម្យត្រូវនឹងរាងកាយ មិនបង្កជំងឺ មិននាំឱ្យងងុយដេក។',
    descrE: 'Wholesome, digestible food agreeable to one’s physical health.'
  },
  {
    nameK: 'ឧតុសប្បាយ',
    nameE: 'Favourable Climate',
    pali: 'Utusappāya',
    icon: '⛅',
    descrK: 'អាកាសធាតុត្រជាក់ល្មម មិនក្តៅពេក មិនរងារពេក ត្រូវនឹងធាតុរាងកាយ។',
    descrE: 'Agreeable climate and temperature that neither overheats nor chills the body.'
  },
  {
    nameK: 'ឥរិយាបថសប្បាយ',
    nameE: 'Favourable Posture',
    pali: 'Iriyāpathasappāya',
    icon: '🧘',
    descrK: 'ឥរិយាបថដើរ ឈរ អង្គុយ ឬដេក ដែលជួយឱ្យចិត្តស្ងប់ និងតម្កល់សមាធិបានយូរ។',
    descrE: 'A balanced posture (sitting, walking, standing) that sustains continuous mindfulness.'
  }
]



function handleKeydown(e) {
  if (e.key === 'Escape' && selectedCarita.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  unlockBodyScroll()
})
</script>
