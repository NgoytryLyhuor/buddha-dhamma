<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🕯️ {{ t('អភិធម្ម និងវិសុទ្ធិមគ្គ · មរណាសន្នវីថិ', 'Abhidhamma & Visuddhimagga · Death Mental Process') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('មរណាសន្នកាល និងនិមិត្ត ៣ យ៉ាង', 'The Death-Proxy Process & 3 Karmic Signs') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'មរណាសន្នកាល គឺជាខណៈចិត្តចុងក្រោយបំផុតនៃជីវិតមុនពេលបែកធ្លាយខន្ធ។ នៅពេលនោះ ចិត្តនឹងចាប់យកអារម្មណ៍ជា កម្ម, កម្មនិមិត្ត ឬគតិនិមិត្ត មកធ្វើជាអារម្មណ៍នៃមរណាសន្នជវនៈ មុនពេលចុតេចិត្តរលត់ ហើយបដិសន្ធិចិត្តកើតឡើងបន្តក្នុងភពថ្មីភ្លាមៗដោយគ្មានចន្លោះពេលឡើយ។',
            'Maraṇāsannakāla is the final cognitive threshold before the dissolution of the aggregates. The mind apprehends one of three karmic objects—Kamma, Kamma-nimitta, or Gati-nimitta—fueling the final Javana consciousness moments before Cuticitta extinguishes and Paṭisandhicitta links instantly into the next rebirth.'
          ) }}
        </p>
      </div>
    </section>

    <!-- Visual Pathway Diagram of the Dying Process -->
    <div class="card-paper p-5 border space-y-3" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
      <h3 class="font-bold text-sm sm:text-base flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🔄</span>
        <span>{{ t('ដំណើរវិវត្តនៃខ្សែចិត្តពេលជិតស្លាប់ (មរណាសន្នវីថិ)', 'Cognitive Pathway at the Moment of Death') }}</span>
      </h3>
      
      <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
        <div v-for="(step, sIdx) in processSteps" :key="sIdx"
             class="p-3 rounded-xl border space-y-1.5"
             :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                  :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
              {{ t('ជំហានទី', 'Step') }} {{ khNum(sIdx + 1) }}
            </span>
            <span class="text-base">{{ step.icon }}</span>
          </div>
          <h4 class="font-bold text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
            {{ t(step.titleK, step.titleE) }}
          </h4>
          <p class="text-[11px] leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(step.descK, step.descE) }}
          </p>
        </div>
      </div>
    </div>

    <!-- Navigation Sub-Tabs -->
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

    <!-- TAB 1: 3 Signs Appearing at Death -->
    <section v-if="activeTab === 'signs'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="(sign, sIdx) in signsList"
          :key="sign.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ sign.icon }}
              </span>
              <span class="text-xs px-2 py-0.5 rounded-full font-mono font-semibold"
                    :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                {{ sign.pali }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ khNum(sIdx + 1) }}. {{ t(sign.titleK, sign.titleE) }}
            </h3>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(sign.shortDescK, sign.shortDescE) }}
            </p>

            <!-- Examples -->
            <div class="p-3 rounded-xl mb-4 text-xs space-y-1.5" :style="{ background: 'var(--bg-card-2)' }">
              <div class="font-semibold" :style="{ color: 'var(--accent)' }">
                {{ t('ឧទាហរណ៍ជាក់ស្ដែង៖', 'Concrete Examples:') }}
              </div>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(sign.examplesK, sign.examplesE) }}</p>
            </div>
          </div>

          <div>
            <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold"
                 :style="{ borderColor: 'var(--border)', color: 'var(--accent)' }">
              <span>{{ t('អានការពន្យល់លម្អិត', 'Read In-Depth Explanation') }}</span>
              <button
                type="button"
                @click="toggleExpand(sign.id)"
                class="lang-pick px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1"
                :class="expandedId === sign.id ? 'on' : ''"
              >
                <span>{{ expandedId === sign.id ? t('បិទ ▲', 'Hide ▲') : t('អានលម្អិត ▼', 'Read More ▼') }}</span>
              </button>
            </div>

            <!-- Slide-down Inline Expansion -->
            <transition name="slide-down">
              <div v-if="expandedId === sign.id" class="pt-4 border-t mt-3 space-y-4 text-xs sm:text-sm leading-relaxed" :style="{ borderColor: 'var(--border)' }">
                <!-- Sutta/Abhidhamma Quote -->
                <div class="p-3.5 rounded-xl border-l-4 font-serif text-xs leading-relaxed"
                     :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
                  <p class="italic mb-1 font-bold">« {{ sign.quotePali }} »</p>
                  <p class="text-xs opacity-80">— {{ t(sign.quoteK, sign.quoteE) }}</p>
                </div>

                <!-- Detailed Explanation -->
                <div class="space-y-1.5">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>📖</span>
                    <span>{{ t('ការពន្យល់តាមគម្ពីរអភិធម្មត្ថសង្គហៈ', 'Abhidhammattha Saṅgaha Exposition') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(sign.fullDescK, sign.fullDescE) }}
                  </p>
                </div>

                <!-- Two Variations: Wholesome vs Unwholesome Signs -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div class="p-3 rounded-xl border space-y-1"
                       :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--accent)' }">
                    <span class="text-xs font-bold flex items-center gap-1.5" :style="{ color: 'var(--accent)' }">
                      <span>✨</span>
                      <span>{{ t('ករណីជាកុសល (ទៅកាន់សុគតិ)', 'Wholesome Sign (Higher Realms)') }}</span>
                    </span>
                    <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
                      {{ t(sign.wholesomeK, sign.wholesomeE) }}
                    </p>
                  </div>

                  <div class="p-3 rounded-xl border space-y-1"
                       :style="{ background: 'var(--bg-card-2)', borderColor: '#dc2626' }">
                    <span class="text-xs font-bold flex items-center gap-1.5" :style="{ color: '#dc2626' }">
                      <span>⚠️</span>
                      <span>{{ t('ករណីជាអកុសល (ធ្លាក់ទុគ្គតិ)', 'Unwholesome Sign (Lower Realms)') }}</span>
                    </span>
                    <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
                      {{ t(sign.unwholesomeK, sign.unwholesomeE) }}
                    </p>
                  </div>
                </div>

                <!-- Attendant Intervention Method -->
                <div class="p-3.5 rounded-xl space-y-1.5" :style="{ background: 'var(--bg-card-2)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>💡</span>
                    <span>{{ t('វិធីជួយកែខៃអារម្មណ៍អ្នកជម្ងឺពេលឃើញនិមិត្តអាក្រក់', 'Remedial Action for Unwholesome Signs') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(sign.remedyK, sign.remedyE) }}
                  </p>
                </div>

                <button
                  type="button"
                  @click="expandedId = null"
                  class="w-full py-1.5 rounded-lg text-center text-xs opacity-70 hover:opacity-100 cursor-pointer"
                  :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)' }"
                >
                  {{ t('បិទព័ត៌មានលម្អិត ▲', 'Close Details ▲') }}
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 2: Guide for Relatives & Caregivers -->
    <section v-if="activeTab === 'care'" class="space-y-4">
      <div class="card-paper p-6 space-y-3">
        <h2 class="text-lg sm:text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('កាតព្វកិច្ចកូនចៅ និងអ្នកថែទាំអ្នកជម្ងឺជិតស្លាប់', 'Palliative & Spiritual Care for the Dying') }}
        </h2>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'នៅពេលបុគ្គលម្នាក់ជិតផុតដង្ហើម ទឹកចិត្តរបស់អ្នកនៅក្បែរមានឥទ្ធិពលយ៉ាងខ្លាំងលើអារម្មណ៍ចុងក្រោយរបស់អ្នកជម្ងឺ។ ព្រះពុទ្ធសាសនាបានផ្ដល់ការណែនាំយ៉ាងជាក់លាក់ដើម្បីជួយដឹកនាំចិត្តអ្នកជម្ងឺទៅកាន់សុគតិភព៖',
            'When someone approaches their final breath, the atmosphere and mental states of those present directly impact the dying mind. Buddhism outlines precise compassionate protocols to foster a serene, wholesome transition:'
          ) }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="(rule, rIdx) in careRules" :key="rIdx"
             class="card-paper p-4 border space-y-2"
             :style="{ borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">{{ rule.icon }}</span>
            <h4 class="font-bold text-sm" :style="{ color: rule.isDo ? 'var(--accent)' : '#dc2626' }">
              {{ rule.isDo ? '✅' : '❌' }} {{ t(rule.titleK, rule.titleE) }}
            </h4>
          </div>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(rule.descK, rule.descE) }}
          </p>
        </div>
      </div>
    </section>

    <!-- TAB 3: Daily Preparation (Maranānussati) -->
    <section v-if="activeTab === 'prep'" class="card-paper p-6 space-y-5">
      <div class="max-w-2xl mx-auto space-y-3 text-center">
        <span class="text-4xl">🧘</span>
        <h2 class="text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('ការត្រៀមខ្លួនរាល់ថ្ងៃ ដោយមរណានុស្សតិ', 'Daily Preparation via Mindfulness of Death') }}
        </h2>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ព្រះសម្មាសម្ពុទ្ធទ្រង់ត្រាស់ថា អ្នកដែលចម្រើនមរណានុស្សតិរាល់ថ្ងៃ នឹងមិនមានការភ័យតក់ស្លុត ឬសោកស្ដាយឡើយ នៅពេលមរណៈមកដល់ ដូចមនុស្សដែលបានរៀបចំវ៉ាលីសរួចរាល់មុនពេលចេញដំណើរ។',
            'The Buddha taught that those who cultivate Mindfulness of Death daily encounter the final threshold without terror or remorse, like a traveler whose luggage has already been impeccably packed.'
          ) }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-2">
        <div v-for="(p, pIdx) in prepPillars" :key="pIdx"
             class="p-4 rounded-xl border text-center space-y-2"
             :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-3xl block">{{ p.icon }}</span>
          <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">
            {{ t(p.titleK, p.titleE) }}
          </h4>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(p.descK, p.descE) }}
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

const activeTab = ref('signs')
const expandedId = ref(null)
function toggleExpand(id) { expandedId.value = expandedId.value === id ? null : id }

const tabs = [
  { id: 'signs', icon: '🕯️', titleK: 'និមិត្តទាំង ៣', titleE: '3 Karmic Signs' },
  { id: 'care', icon: '🤝', titleK: 'ការថែទាំអ្នកជិតស្លាប់', titleE: 'Palliative Care' },
  { id: 'prep', icon: '🧘', titleK: 'ការត្រៀមខ្លួនរាល់ថ្ងៃ', titleE: 'Daily Preparation' }
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

const processSteps = [
  {
    icon: '⚡',
    titleK: '១. អារម្មណ៍ចូលតាមទ្វារ',
    titleE: '1. Object at Sense Door',
    descK: 'កម្ម កម្មនិមិត្ត ឬគតិនិមិត្ត លេចឡើងក្នុងមនោទ្វារ ឬបញ្ចទ្វាររបស់អ្នកជម្ងឺ។',
    descE: 'Past action, symbols, or future destination enters the mind door.'
  },
  {
    icon: '🧠',
    titleK: '២. មរណាសន្នជវនៈ ៥ ខណៈ',
    titleE: '2. Five Javana Moments',
    descK: 'ជវនចិត្តរត់តែ ៥ ខណៈប៉ុណ្ណោះ (ធម្មតា ៧ ខណៈ) ដោយកម្លាំងខ្សោយ។',
    descE: 'Only 5 weak Javana moments run instead of the standard 7.'
  },
  {
    icon: '🔚',
    titleK: '៣. ចុតេចិត្តរលត់',
    titleE: '3. Cuticitta Cessation',
    descK: 'ចិត្តចុងក្រោយនៃភពចាស់រលត់ទៅ ជាការបញ្ចប់ជាផ្លូវការនៃជាតិនេះ។',
    descE: 'The final consciousness of this life ceases irrevocably.'
  },
  {
    icon: '🌱',
    titleK: '៤. បដិសន្ធិចិត្តកើតភ្លាម',
    titleE: '4. Immediate Paṭisandhi',
    descK: 'បដិសន្ធិចិត្តកើតឡើងតភ្ជាប់ក្នុងភពថ្មីភ្លាមៗ គ្មានចន្លោះពេលមួយសរសៃសក់ឡើយ។',
    descE: 'Rebirth linking consciousness arises instantly in the next realm.'
  }
]

const signsList = [
  {
    id: 'kamma',
    icon: '📜',
    titleK: 'កម្មអារម្មណ៍ (Kamma)',
    titleE: 'Kamma (Past Action Object)',
    pali: 'Kammārammaṇa',
    shortDescK: 'ការនឹកឃើញឡើងវិញនូវអំពើល្អ ឬអំពើអាក្រក់ដែលខ្លួនធ្លាប់បានធ្វើក្នុងអតីតកាល ដូចជាខ្សែវីដេអូបញ្ចាំងឡើងវិញ។',
    shortDescE: 'Direct mental replay of past intentional deeds—acts of charity, moral courage, or past hurtful transgressions.',
    examplesK: 'នឹកឃើញកាលដែលខ្លួនបានធ្វើបុណ្យកឋិនសាងព្រះវិហារ ឬនឹកឃើញកាលដែលខ្លួនបានឈ្លោះប្រកែក កុហក ឬធ្វើបាបអ្នកដទៃ។',
    examplesE: 'Vivid memories of building shelters, offerings, or memories of fights, deceit, and regrets replaying in the heart.',
    quotePali: 'Kammaṁ satte vibhajati yadidaṁ hīnappaṇītatāya',
    quoteK: 'កម្មរមែងចាត់ចែងសត្វលោក ឱ្យថោកទាប ឬខ្ពង់ខ្ពស់ (មជ្ឈិមនិកាយ)',
    quoteE: 'Kamma differentiates beings into coarse and refined states (Majjhima Nikāya).',
    fullDescK: 'កម្មអារម្មណ៍ សំដៅលើចេតនាដែលធ្លាប់បានប្រព្រឹត្ត មិនថាក្នុងជាតិនេះ ឬជាតិមុនៗឡើយ។ នៅពេលរាងកាយចុះខ្សោយ ការចងចាំជ្រៅៗនឹងផុសចេញមកដោយឯកឯង។ បើជាកុសលកម្ម ចិត្តនឹងត្រេកអរ ញញឹមស្ងប់។ បើជាអកុសលកម្ម ចិត្តនឹងតក់ស្លុត ភ័យខ្លាច ស្រែកថ្ងូរ ឬយំស្រក់ទឹកភ្នែក។',
    fullDescE: 'Kamma as object refers to volition previously exercised. As physical faculties dim, deep sub-conscious memories surface. If wholesome, the face softens with peace. If unwholesome, remorse and agitation grip the mind.',
    wholesomeK: 'នឹកឃើញអំពើល្អ ការជួយសង្គ្រោះអ្នកដទៃ ការរក្សាសីលយ៉ាងបរិសុទ្ធ នាំឱ្យចិត្តស្រស់ថ្លា ទៅកាន់ទេវលោក ឬមនុស្សលោក។',
    wholesomeE: 'Remembrance of selfless giving and moral shielding generates radiant joy, leading to heavenly or noble human rebirth.',
    unwholesomeK: 'នឹកឃើញអំពើបាបដែលធ្លាប់បៀតបៀនគេ នាំឱ្យចិត្តក្ដៅក្រហាយ វិប្បដិសារី អាចទាញទម្លាក់ទៅកាន់អបាយភូមិ ៤។',
    unwholesomeE: 'Remembrance of harm and malice provokes intense inner burning, pulling consciousness toward distressed states.',
    remedyK: 'កូនចៅត្រូវទន្ទេញរំឭកពីបុណ្យកុសលដែលគាត់ធ្លាប់បានធ្វើកន្លងមក ប្រាប់គាត់កុំឱ្យបារម្ភពីរឿងផ្ទះសម្បែង ឬទ្រព្យសម្បត្តិ។',
    remedyE: 'Family members must gently recount the patient’s past merits, assuring them that worldly duties are fully resolved.'
  },
  {
    id: 'kamma-nimitta',
    icon: '🔔',
    titleK: 'កម្មនិមិត្ត (Kamma-nimitta)',
    titleE: 'Kamma-nimitta (Sign of the Action)',
    pali: 'Kammanimitta',
    shortDescK: 'វត្ថុ ឧបករណ៍ មនុស្ស ឬរូបភាពដែលទាក់ទងនឹងអំពើល្អ ឬអាក្រក់ដែលខ្លួនធ្លាប់បានធ្វើ។',
    shortDescE: 'Objects, instruments, people, or symbols intrinsically tied to past wholesome or unwholesome actions.',
    examplesK: 'ឃើញផ្កា ធូប ទៀន ព្រះពុទ្ធរូប វត្តអារាម ព្រះសង្ឃ ឬឃើញអាវុធ សំណាញ់ ឡានបុក ទីកន្លែងជម្លោះ។',
    examplesE: 'Seeing monks, incense, lotus flowers, scriptures; or conversely nets, knives, accident sites, or stolen money.',
    quotePali: 'Citte saṅkiliṭṭhe duggati pāṭikaṅkhā',
    quoteK: 'កាលបើចិត្តសៅហ្មងហើយ ទុគ្គតិជាទីសង្ឃឹមទុក (មជ្ឈិមនិកាយ)',
    quoteE: 'When the mind is defiled, an unhappy rebirth is to be expected (Majjhima Nikāya).',
    fullDescK: 'កម្មនិមិត្ត អាចលេចឡើងតាមភ្នែក ត្រចៀក ឬក្នុងចិត្ត។ អ្នកជម្ងឺអាចឮសំឡេងសូត្រធម៌ ធុំក្លិនក្រអូបផ្កាឈើ ឬឃើញព្រះសង្ឃនិមន្តមកដល់។ ផ្ទុយទៅវិញ អ្នកដែលធ្លាប់សម្លាប់សត្វ អាចស្រែកថាឃើញសត្វមកខាំ ឬឃើញកាំបិត និងឈាម។ និមិត្តទាំងនេះជាកញ្ចក់ឆ្លុះបង្ហាញពីសភាពចិត្តរបស់អ្នកជម្ងឺ។',
    fullDescE: 'Kamma-nimitta manifests visually, auditorily, or mentally. A practitioner may smell sweet jasmine or hear distant chanting. A hunter or butcher may hallucinate animals attacking or bloody instruments.',
    wholesomeK: 'ឃើញស្បង់ចីវរ ផ្កាឈូក ប្រាសាទវត្ត សំឡេងសូត្របរិត្ត បង្កើតសោមនស្ស ឆ្ពោះទៅកាន់ភពខ្ពង់ខ្ពស់។',
    wholesomeE: 'Visualizing monastic robes, lotus petals, and soothing Dhamma chants evokes gladness, steering rebirth upward.',
    unwholesomeK: 'ឃើញកាំបិត អាវុធ ឈាម ការប្រយុទ្ធគ្នា ឬការភ័យខ្លាច ធ្វើឱ្យចិត្តរន្ធត់ ឆ្ពោះទៅរកភពទាប។',
    unwholesomeE: 'Hallucinating weapons, violence, and terror contracts the dying mind in fear, pulling it down.',
    remedyK: 'យកផ្កាស្រស់ ឬរូបព្រះពុទ្ធមកដាក់ឱ្យគាត់មើល បើកសំឡេងសូត្រធម៌ស្រាលៗ និងនិមន្តព្រះសង្ឃមកឱ្យគាត់បានថ្វាយបង្គំ។',
    remedyE: 'Place fragrant flowers and a serene Buddha image in their field of vision; play soft chants to replace distressing images.'
  },
  {
    id: 'gati-nimitta',
    icon: '🚪',
    titleK: 'គតិនិមិត្ត (Gati-nimitta)',
    titleE: 'Gati-nimitta (Sign of Destiny)',
    pali: 'Gatinimitta',
    shortDescK: 'ទេសភាព ទីកន្លែង ឬទិដ្ឋភាពនៃភពថ្មីដែលខ្លួននឹងត្រូវទៅកើតបន្ទាប់ពីស្លាប់។',
    shortDescE: 'Visions or sensory impressions of the future destination where rebirth is about to take place.',
    examplesK: 'ឃើញវិមានកែវ សួនផ្កាសួគ៌ ពន្លឺភ្លឺថ្លា ឬឃើញភ្លើងឆេះ ព្រៃងងឹត រណ្ដៅជ្រៅ សត្វចម្លែកកាចសាហាវ។',
    examplesE: 'Glimpses of celestial mansions, radiant light, gentle gardens vs flaming pits, dark abysses, and monstrous beasts.',
    quotePali: 'Citte asaṅkiliṭṭhe sugati pāṭikaṅkhā',
    quoteK: 'កាលបើចិត្តមិនសៅហ្មងហើយ សុគតិជាទីសង្ឃឹមទុក (មជ្ឈិមនិកាយ)',
    quoteE: 'When the mind is undefiled, a blissful rebirth is to be expected (Majjhima Nikāya).',
    fullDescK: 'គតិនិមិត្ត គឺជាសញ្ញានៃភពថ្មី។ ក្នុងគម្ពីរអដ្ឋកថា មានរឿងរ៉ាវរបស់ឧបាសក ធម្មិកៈ ដែលពេលជិតស្លាប់ គាត់បានឃើញរថទេវតាចុះមកទទួល។ រីឯអ្នកដែលត្រូវធ្លាក់នរក តែងឃើញឆ្កែខ្មៅធំៗដេញខាំ ឬឃើញភ្លើងនរកឆេះក្រហមច្រាល។ បើអ្នកនៅក្បែរដឹងទាន់ អាចជួយកែខៃគតិនិមិត្តនេះបាន។',
    fullDescE: 'Gati-nimitta reveals the impending realm. Suttas recount lay practitioners like Dhammika seeing celestial chariots approaching, while those heading to purgatory see black dogs or fires. Alert relatives can still intervene to redirect vision.',
    wholesomeK: 'ឃើញទេវតា ពន្លឺពណ៌មាស វិមានទិព្វ ឬម្តាយឪពុកមានទឹកមុខញញឹម ទៅកើតក្នុងឋានសួគ៌ ឬគ្រួសារល្អ។',
    wholesomeE: 'Perceiving radiant beings, serene golden light, or smiling ancestors indicates an impending heavenly or noble rebirth.',
    unwholesomeK: 'ឃើញរណ្ដៅភ្លើង ដែកក្ដៅ ទីងងឹតសូន្យសុង ឬមនុស្សកាន់លំពែង ត្រូវទៅកើតក្នុងនរក ឬប្រេត។',
    unwholesomeE: 'Perceiving pits of fire, jagged iron, dark mists, or fierce entities foreshadows suffering realms.',
    remedyK: 'ដូចរឿងសោណត្ថេរ ដែលឪពុកឃើញឆ្កែនរកដេញខាំ ព្រះថេរបានយកផ្កាមកប្រគេនព្រះសង្ឃក្នុងនាមឪពុក ធ្វើឱ្យនិមិត្តប្រែជាវិមានសួគ៌ភ្លាមៗ។',
    remedyE: 'Like Venerable Soṇa whose dying father saw hellhounds, the monk quickly made offerings to the Saṅgha in his father’s name, converting the sign to a celestial palace.'
  }
]

const careRules = [
  {
    isDo: true,
    icon: '🌸',
    titleK: 'រៀបចំបន្ទប់ឱ្យស្អាត និងស្ងប់ស្ងាត់',
    titleE: 'Clean, Quiet & Serene Atmosphere',
    descK: 'បើកបង្អួចឱ្យមានខ្យល់បរិសុទ្ធ ជៀសវាងសំឡេងរំខាន ឬក្លិនមិនល្អ។ ដាក់រូបព្រះ ឬផ្កាក្នុងគំហើញ។',
    descE: 'Ensure fresh airflow, tranquil silence, and a gentle Buddha image or flowers in sight.'
  },
  {
    isDo: true,
    icon: '🗣️',
    titleK: 'និយាយរំឭកតែរឿងកុសល និងគុណធម៌',
    titleE: 'Whisper Wholesome Merits in the Ear',
    descK: 'ខ្សឹបប្រាប់ត្រចៀកគាត់ថ្នមៗ ពីបុណ្យទាន ការជួយកូនចៅ និងការកសាងប្រយោជន៍ដែលគាត់បានធ្វើ។',
    descE: 'Gently remind them of their lifetime charities, kind deeds, and noble contributions.'
  },
  {
    isDo: false,
    icon: '😭',
    titleK: 'កុំយំសោក ឬបង្ហាញការតក់ស្លុតនៅចំពោះមុខ',
    titleE: 'Do Not Weep or Create Panic at Bedside',
    descK: 'ការយំស្រែកអន្ទះអន្ទែង ធ្វើឱ្យអ្នកជម្ងឺកើតសេចក្ដីអាឡោះអាល័យ និងភ័យខ្លាច នាំឱ្យចិត្តសៅហ្មង។',
    descE: 'Frantic wailing pulls the dying person into agonizing attachment and despair, clouding their mind.'
  },
  {
    isDo: false,
    icon: '💰',
    titleK: 'កុំលើកយករឿងជម្លោះទ្រព្យសម្បត្តិមកនិយាយ',
    titleE: 'Never Argue Over Inheritance or Debt',
    descK: 'ការឈ្លោះប្រកែកគ្នារឿងមរតក ឬបំណុលនៅមុខអ្នកជម្ងឺ នឹងដុតកម្ដៅចិត្តគាត់ឱ្យកើតទោសៈធ្ងន់ធ្ងរ។',
    descE: 'Arguing over wills, wealth, or debts triggers burning anger and distress in the dying person.'
  }
]

const prepPillars = [
  {
    icon: '🧘',
    titleK: 'ចម្រើនមរណានុស្សតិ',
    titleE: 'Mindfulness of Death',
    descK: 'រំឭកខ្លួនឯងរាល់ព្រឹកថា «ជីវិតមិនទៀង សេចក្ដីស្លាប់ជាការទៀងទាត់» ដើម្បីកុំឱ្យប្រហែស។',
    descE: 'Remind yourself daily: Life is uncertain; death is certain. Live with urgent moral care.'
  },
  {
    icon: '🕊️',
    titleK: 'ការអភ័យទោស និងលះបង់គំនុំ',
    titleE: 'Radical Forgiveness',
    descK: 'អត់ទោសឱ្យអ្នកដទៃ និងសុំទោសចំពោះកំហុសខ្លួន កុំទុកគំនុំឱ្យក្លាយជាបន្ទុកក្នុងចិត្ត។',
    descE: 'Resolve all resentments and seek forgiveness promptly so no karmic baggage weighs down the heart.'
  },
  {
    icon: '📦',
    titleK: 'កាត់បន្ថយការជាប់ជំពាក់លើទ្រព្យ',
    titleE: 'Non-Attachment to Possessions',
    descK: 'យល់ច្បាស់ថាគ្មានវត្ថុណា ឬមនុស្សណាអាចយកតាមខ្លួនបានឡើយ មានតែបុណ្យនិងបាបប៉ុណ្ណោះ។',
    descE: 'Know deeply that not a single penny or title follows after death—only karma accompanies the stream.'
  }
]



function handleKeydown(e) {
  if (e.key === 'Escape' && selectedSign.value) {
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
