<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🌳 {{ t('វិសុទ្ធិមគ្គ បញ្ញាបរិច្ឆេទ · ភូមិនិទ្ទេស', 'Visuddhimagga XIV · The 6 Soils of Insight') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('វិបស្សនាភូមិ ៦ ៖ ដែនដីនៃបញ្ញាត្រាស់ដឹង', 'Vipassanā Bhūmi 6: The Six Soils of Insight') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'វិបស្សនាភូមិ គឺជាដែនដី ឬមូលដ្ឋានទ្រឹស្តី ៦ យ៉ាង (ខន្ធ, អាយតនៈ, ធាតុ, ឥន្ទ្រិយ, សច្ចៈ, បដិច្ចសមុប្បាទ) ដែលដើមឈើនៃបញ្ញាត្រូវដុះចាក់ឫសលើដីទាំងនេះ។ បើគ្មានការយល់ដឹងពីភូមិទាំង ៦ នេះទេ បញ្ញាវិបស្សនាមិនអាចដុះលូតលាស់ជាផ្លែផ្កាបានឡើយ ដូចគ្រាប់ពូជដែលគ្មានដី។',
            'Vipassanā-bhūmi denotes the 6 foundational domains of reality—Aggregates, Sense Bases, Elements, Faculties, Truths, and Dependent Origination—upon which the tree of wisdom takes root. In the Visuddhimagga, understanding these 6 soils provides the empirical substrate without which Vipassanā insight cannot flourish.'
          ) }}
        </p>
      </div>
    </section>

    <!-- The Tree of Wisdom Analogy Graphic -->
    <div class="card-paper p-5 border space-y-3" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="space-y-1 text-center sm:text-left">
          <span class="text-xs font-bold uppercase tracking-wider" :style="{ color: 'var(--accent)' }">
            {{ t('ឧបមាដើមឈើនៃបញ្ញា (Visuddhimagga Tree)', 'The Living Tree of Wisdom Metaphor') }}
          </span>
          <h3 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
            {{ t('ដី + ឫស + ដើម + ផ្លែផ្កា នៃដំណើររួចទុក្ខ', 'Soil, Roots, Trunk & Fruit of Liberation') }}
          </h3>
          <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
            {{ t('ដី = ភូមិ ៦ | ឫស = សីលវិសុទ្ធិ & ចិត្តវិសុទ្ធិ | ដើម = វិសុទ្ធិ ៥ បន្តបន្ទាប់ | ផ្លែ = មគ្គផល', 'Soil = 6 Bhūmis | Roots = Sīla & Samādhi | Trunk = 5 Insight Purities | Fruit = Magga & Phala') }}
          </p>
        </div>
        <div class="flex items-center gap-1.5 flex-wrap justify-center shrink-0">
          <div v-for="(b, bIdx) in bhumiList" :key="b.id"
               class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs border cursor-pointer transition-transform hover:scale-110"
               :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)', color: 'var(--accent)' }"
               :title="t(b.titleK, b.titleE)"
               @click="toggleExpand(b.id)">
            {{ khNum(bIdx + 1) }}
          </div>
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

    <!-- TAB 1: 6 Bhūmi Cards Grid -->
    <section v-if="activeTab === 'soils'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(b, idx) in bhumiList"
          :key="b.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ b.icon }}
              </span>
              <span class="text-xs px-2 py-0.5 rounded-full font-mono font-bold"
                    :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                {{ t('ភូមិទី', 'Soil') }} {{ khNum(idx + 1) }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-0.5" :style="{ color: 'var(--ink)' }">
              {{ t(b.titleK, b.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-3" :style="{ color: 'var(--accent)' }">
              {{ b.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(b.shortDescK, b.shortDescE) }}
            </p>

            <!-- Number of Components breakdown -->
            <div class="p-3 rounded-xl mb-4 text-xs space-y-1" :style="{ background: 'var(--bg-card-2)' }">
              <span class="font-bold block" :style="{ color: 'var(--accent)' }">
                📊 {{ t('សមាសភាគសំខាន់ៗ៖', 'Key Components:') }}
              </span>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(b.componentsK, b.componentsE) }}</p>
            </div>
          </div>

          <div>
            <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold"
                 :style="{ borderColor: 'var(--border)', color: 'var(--accent)' }">
              <span>{{ t('អានការពិចារណាក្នុងវិបស្សនា', 'Vipassanā Contemplation') }}</span>
              <button
                type="button"
                @click="toggleExpand(b.id)"
                class="lang-pick px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1"
                :class="expandedId === b.id ? 'on' : ''"
              >
                <span>{{ expandedId === b.id ? t('បិទ ▲', 'Hide ▲') : t('អានលម្អិត ▼', 'Read More ▼') }}</span>
              </button>
            </div>

            <!-- Slide-down Inline Expansion -->
            <SlideDown>
              <div v-if="expandedId === b.id" class="pt-4 border-t mt-3 space-y-4 text-xs sm:text-sm leading-relaxed" :style="{ borderColor: 'var(--border)' }">
                <!-- Visuddhimagga Quote -->
                <div class="p-3.5 rounded-xl border-l-4 font-serif text-xs leading-relaxed"
                     :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
                  <p class="italic mb-1 font-bold">« {{ b.quotePali }} »</p>
                  <p class="text-xs opacity-80">— {{ t(b.quoteK, b.quoteE) }}</p>
                </div>

                <!-- Doctrinal Breakdown -->
                <div class="space-y-1.5">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>📖</span>
                    <span>{{ t('អត្ថន័យ និងការបែងចែកធម៌', 'Doctrinal Breakdown') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(b.fullDescK, b.fullDescE) }}
                  </p>
                </div>

                <!-- How to Contemplate in Vipassanā -->
                <div class="p-3.5 rounded-xl border space-y-1.5"
                     :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>🧘</span>
                    <span>{{ t('វិធីចម្រើនបញ្ញាពិចារណា (វិបស្សនាវិធី)', 'How to Contemplate in Insight Meditation') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
                    {{ t(b.insightMethodK, b.insightMethodE) }}
                  </p>
                </div>

                <!-- Defilement Eradication Purpose -->
                <div class="p-3.5 rounded-xl space-y-1.5" :style="{ background: 'var(--bg-card-2)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>💡</span>
                    <span>{{ t('គោលបំណងកម្ចាត់វិបល្លាស (ការយល់ខុស)', 'Eradication of Distorted Views') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
                    {{ t(b.purposeK, b.purposeE) }}
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
            </SlideDown>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 2: How Yogis Use the Soils -->
    <section v-if="activeTab === 'application'" class="card-paper p-6 space-y-5">
      <div class="max-w-2xl mx-auto space-y-2 text-center">
        <span class="text-3xl">🧘</span>
        <h2 class="text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('របៀបដែលអ្នកចម្រើនវិបស្សនាប្រើប្រាស់ភូមិទាំង ៦', 'How Insight Practitioners Navigate the 6 Soils') }}
        </h2>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'នៅពេលអង្គុយសមាធិ ឬដើរចង្ក្រម អារម្មណ៍ដែលលេចឡើងសុទ្ធតែជាផ្នែកណាមួយនៃភូមិទាំង ៦ នេះ។ ការស្គាល់ភូមិច្បាស់ជួយកុំឱ្យវង្វេងក្នុងគំនិតរវើរវាយ៖',
            'During sitting or walking meditation, every emerging sensation is an inhabitant of these 6 soils. Knowing them clearly prevents conceptual entanglement:'
          ) }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto pt-2">
        <div v-for="(app, aIdx) in yogiApplications" :key="aIdx"
             class="p-4 rounded-xl border space-y-2"
             :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">{{ app.icon }}</span>
            <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">
              {{ t(app.titleK, app.titleE) }}
            </h4>
          </div>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(app.descK, app.descE) }}
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

const activeTab = ref('soils')
const expandedId = ref(null)
function toggleExpand(id) { expandedId.value = expandedId.value === id ? null : id }

const tabs = [
  { id: 'soils', icon: '🌳', titleK: 'ភូមិទាំង ៦', titleE: 'The 6 Soils' },
  { id: 'application', icon: '🧘', titleK: 'ការបដិបត្តិវិបស្សនា', titleE: 'Yogi Application' }
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

const bhumiList = [
  {
    id: 'khandha',
    icon: '📦',
    titleK: '១. បញ្ចក្ខន្ធ (ខន្ធ ៥)',
    titleE: '1. The 5 Aggregates',
    pali: 'Pañcakkhandha',
    shortDescK: 'គំនរធាតុ ៥ យ៉ាងដែលផ្គុំគ្នាជារូបរាង និងចិត្តគំនិត៖ រូប, វេទនា, សញ្ញា, សង្ខារ, វិញ្ញាណ។',
    shortDescE: 'The 5 bundles of physical and mental existence: Material Form, Feeling, Perception, Mental Formations, Consciousness.',
    componentsK: 'រូបក្ខន្ធ (រូបកាយ) + នាមក្ខន្ធ ៤ (វេទនា សញ្ញា សង្ខារ វិញ្ញាណ)។',
    componentsE: 'Material Form (Rūpa) + 4 Mental Aggregates (Nāma).',
    quotePali: 'Khandhā pariccattā ti passanto suvimutto...',
    quoteK: 'អ្នកដែលពិនិត្យឃើញនូវការបែកធ្លាយនៃខន្ធទាំងឡាយ រមែងរួចផុតស្រឡះ... (វិសុទ្ធិមគ្គ)',
    quoteE: 'Seeing the dissolution of aggregates, one is thoroughly liberated.',
    fullDescK: 'ខន្ធ ៥ គឺជាការបំបែករូបរាងកាយ និងចិត្តគំនិតឱ្យទៅជាចំណែកតូចៗ។ មនុស្សយល់ច្រឡំថាមាន «មនុស្ស ឬព្រលឹង» ព្រោះឃើញខន្ធទាំង ៥ ប្រជុំគ្នា។ ដូចរទេះដែលកើតពីកង់ ធ្នឹម និងនឹម ពេលបំបែកចេញពីគ្នា ពាក្យថារទេះក៏រលាយបាត់ យ៉ាងណាមិញ ពេលបំបែកខន្ធ ៥ ពាក្យថា «អញ» ក៏រលាយបាត់ដូចគ្នា។',
    fullDescE: 'The 5 aggregates dissect the illusion of monolithic personhood into functional components. Just as carriage is a designation for wheels and axle assembled together, self is merely a label for the 5 aggregates operating conditionally.',
    delusionK: 'កម្ចាត់ សក្កាយទិដ្ឋិ (ការប្រកាន់ថាខន្ធណាមួយជាខ្លួន ឬខ្លួនមានក្នុងខន្ធ)។',
    delusionE: 'Shatters Identity View (Sakkāya-diṭṭhi), revealing that no aggregate contains a lasting soul.',
    exerciseK: 'ពេលឈឺក្បាល ចូរកុំកំណត់ថា «ខ្ញុំឈឺ» តែចូរកំណត់ថា «រូបបែកខ្ញែក + ទុក្ខវេទនាកំពុងរលត់»។',
    exerciseE: 'When a headache throbs, disengage from “I hurt”; note: “Physical pressure + painful feeling arising and dissolving.”'
  },
  {
    id: 'ayatana',
    icon: '🚪',
    titleK: '២. អាយតនៈ ១២',
    titleE: '2. The 12 Sense Bases',
    pali: 'Dvādasāyatana',
    shortDescK: 'ទ្វារ និងអារម្មណ៍ ១២ ដែលជាច្រកតភ្ជាប់រវាងចិត្ត និងពិភពខាងក្រៅ (ខាងក្នុង ៦ និងខាងក្រៅ ៦)។',
    shortDescE: 'The 12 Sense Bases connecting internal awareness with the external cosmos: 6 Internal Doors + 6 External Objects.',
    componentsK: 'អាយតនៈក្នុង ៦ (ភ្នែក ត្រចៀក ច្រមុះ អណ្ដាត កាយ ចិត្ត) + អាយតនៈក្រៅ ៦ (រូប សំឡេង ក្លិន រស ផោដ្ឋព្វ ធម្មារម្មណ៍)។',
    componentsE: '6 Internal (Eye, Ear, Nose, Tongue, Body, Mind) + 6 External (Form, Sound, Smell, Taste, Touch, Idea).',
    quotePali: 'Āyatanāni vibhajanto dhammasabhāvaṁ jānāti...',
    quoteK: 'ការបែងចែកអាយតនៈ ធ្វើឱ្យយល់ច្បាស់នូវសភាវធម៌...',
    quoteE: 'Analyzing the sense bases discloses the conditioned mechanics of perception.',
    fullDescK: 'អាយតនៈ មានន័យថា ទីប្រជុំកើត ឬរោងចក្រផលិតទុក្ខ។ ទុក្ខទាំងអស់ក្នុងលោក កើតចេញពីការប៉ះទង្គិចគ្នារវាងទ្វារខាងក្នុង និងអារម្មណ៍ខាងក្រៅ។ បើទ្វារភ្នែកបិទ រូបមិនអាចចូលមកដុតចិត្តបានឡើយ។ ការយល់ដឹងពីអាយតនៈ ជួយឱ្យយើងចម្រើន «ឥន្ទ្រិយសំវរៈ» (ការសង្រួមឥន្ទ្រិយ) មិនឱ្យកិលេសហូរចូល។',
    fullDescE: 'Āyatana denotes spheres of operation or arrival. All sensory experience and suffering ignite when internal organs collide with external stimuli. Comprehending bases cultivates Sense Restraint (Indriyasaṁvara), halting defilements at the gates.',
    delusionK: 'កម្ចាត់ និមិត្តសញ្ញា (ការសម្គាល់ថារូបខាងក្រៅស្អាត ឬគួរឱ្យស្រឡាញ់ជាប់ជំពាក់)។',
    delusionE: 'Eradicates deceptive signs that mislabel sensory objects as inherently lovable or despicable.',
    exerciseK: 'ពេលភ្នែកឃើញរូបស្អាត កំណត់ត្រឹមតែ «ឃើញ... ឃើញ...» កុំឱ្យតណ្ហាទាញឱ្យបង្កើតគំនិតបន្ត។',
    exerciseE: 'Upon seeing an attractive object, maintain pure bare awareness: “Seeing... seeing...”, intercepting lust.'
  },
  {
    id: 'dhatu',
    icon: '🧪',
    titleK: '៣. ធាតុ ១៨',
    titleE: '3. The 18 Elements',
    pali: 'Aṭṭhārasadhātu',
    shortDescK: 'សភាវៈពិតដែលទ្រទ្រង់ខ្លួនឯង ១៨ ប្រការ (ទ្វារ ៦ + អារម្មណ៍ ៦ + វិញ្ញាណដឹង ៦)។',
    shortDescE: 'The 18 ultimate elements: 6 sense organs + 6 sense stimuli + 6 corresponding consciousness types.',
    componentsK: 'ចក្ខុធាតុ រូបធាតុ ចក្ខុវិញ្ញាណធាតុ... រហូតដល់ មនោធាតុ ធម្មធាតុ មនោវិញ្ញាណធាតុ។',
    componentsE: 'Eye element, Form element, Eye-consciousness element... through to Mind-consciousness element.',
    quotePali: 'Dhātuso satte passanto nissattasaññaṁ labhati...',
    quoteK: 'ការឃើញសត្វលោកជាធាតុ រមែងកម្ចាត់សញ្ញាថាជាសត្វបុគ្គលចេញបាន...',
    quoteE: 'Seeing beings as elements dissolves the perception of a living person.',
    fullDescK: 'ធាតុ បញ្ជាក់ថា គ្មានអ្នកណាជាម្ចាស់ ឬអ្នកបង្កើតឡើយ។ ភ្នែកជាធាតុម្យ៉ាង រូបជាធាតុម្យ៉ាង ពេលប៉ះគ្នាបង្កើតជាវិញ្ញាណដឹងមួយភ្លែត រួចរលត់ទៅវិញទាំងអស់។ គ្មាន «ព្រលឹងអមតៈ» ណាចូលមកមើល ឬមកស្ដាប់ឡើយ។',
    fullDescE: 'Dhātu conveys impersonal natural properties. An organ and an object collide, generating a brief flash of knowing, then vanish. No central soul oversees sensory reception.',
    delusionK: 'កម្ចាត់ ជីវសញ្ញា (ការយល់ច្រឡំថាមានព្រលឹង ឬជីវិតអមតៈគ្រប់គ្រងរាងកាយ)។',
    delusionE: 'Uproots the illusion of a soul-governor (Jīva-saññā) piloting the biological vessel.',
    exerciseK: 'ពិចារណាថា ពេលឮសំឡេង គឺត្រចៀកប៉ះរលកខ្យល់ បង្កើតសោតវិញ្ញាណ គ្មាន «អញជាអ្នកឮ» ឡើយ។',
    exerciseE: 'When thunder crashes: Sound waves strike eardrum, generating hearing-consciousness; there is no “I” listening.'
  },
  {
    id: 'indriya',
    icon: '👑',
    titleK: '៤. ឥន្ទ្រិយ ២២',
    titleE: '4. The 22 Faculties',
    pali: 'Bāvīsatindriya',
    shortDescK: 'សភាវៈដែលជាធំក្នុងការគ្រប់គ្រងកិច្ចការរៀងៗខ្លួន តាំងពីទ្វារភ្នែក ជីវិត វេទនា រហូតដល់បញ្ញាអរហន្ត។',
    shortDescE: 'The 22 governing principles wielding dominance over specific domains: sensory, vital, affective, and spiritual.',
    componentsK: 'ឥន្ទ្រិយទ្វារ ៦ + ជីវិតិន្ទ្រិយ + ភាវេន្ទ្រិយ ២ + វេទនា ៥ + ពលឥន្ទ្រិយ ៥ + ញាណឥន្ទ្រិយ ៣។',
    componentsE: '6 Sense Faculties + Vitality + 2 Genders + 5 Feelings + 5 Spiritual Faculties + 3 Supernal Knowledges.',
    quotePali: 'Indriyehi va vattate loko...',
    quoteK: 'លោកនេះរមែងប្រព្រឹត្តទៅតាមអំណាចនៃឥន្ទ្រិយទាំងឡាយ...',
    quoteE: 'The entire cosmos turns driven by the dominion of faculties.',
    fullDescK: 'ឥន្ទ្រិយ បង្ហាញពីច្បាប់គ្រប់គ្រងនៃចិត្ត។ ភ្នែកជាធំក្នុងការមើល ច្រមុះជាធំក្នុងការធុំក្លិន សទ្ធាជាធំក្នុងជំនឿ បញ្ញាជាធំក្នុងការយល់ដឹង។ គ្មានអាទិទេពណាបញ្ជាឡើយ គឺឥន្ទ្រិយទាំងនេះគ្រប់គ្រងតាមមុខងាររបស់វា។',
    fullDescE: 'Indriya reveals functional mastery without an overarching dictator. The eye rules seeing; faith rules conviction; wisdom rules comprehension—autonomous systemic harmony.',
    delusionK: 'កម្ចាត់ ឥស្សរទិដ្ឋិ (ការយល់ច្រឡំថាមានអាទិទេពបង្កើត ឬគ្រប់គ្រងជោគវាសនា)។',
    delusionE: 'Overcomes Creationist fatalism, demonstrating that faculties govern experience through natural laws.',
    exerciseK: 'ពិនិត្យមើលឥន្ទ្រិយ ៥ របស់ខ្លួន (សទ្ធា វីរិយៈ សតិ សមាធិ បញ្ញា) ថាតើមានតុល្យភាពហើយឬនៅ។',
    exerciseE: 'Monitor your 5 spiritual faculties daily, balancing faith with wisdom and energy with concentration.'
  },
  {
    id: 'sacca',
    icon: '💎',
    titleK: '៥. អរិយសច្ច ៤',
    titleE: '5. The 4 Noble Truths',
    pali: 'Cattāri Ariyasaccāni',
    shortDescK: 'ការពិតដ៏ខ្ពង់ខ្ពស់ ៤ យ៉ាងដែលមិនប្រែប្រួល៖ ទុក្ខ, សមុទ័យ (ហេតុនៃទុក្ខ), និរោធ (ការរលត់ទុក្ខ), មគ្គ (ផ្លូវរំលត់ទុក្ខ)។',
    shortDescE: 'The 4 immutable Noble Truths discovered by the Buddha: Suffering, Its Origin, Its Cessation, and the Path Leading to Freedom.',
    componentsK: 'ទុក្ខសច្ច (ខន្ធ ៥) + សមុទយសច្ច (តណ្ហា ៣) + និរោធសច្ច (និព្វាន) + មគ្គសច្ច (អដ្ឋង្គិកមគ្គ ៨)។',
    componentsE: 'Dukkha (5 Aggregates) + Samudaya (Taṇhā) + Nirodha (Nibbāna) + Magga (Eightfold Path).',
    quotePali: 'Dukkhañceva paññāpemi, dukkhassa ca nirodhaṁ...',
    quoteK: 'តថាគតសម្តែងតែពីរយ៉ាងប៉ុណ្ណោះ គឺសេចក្ដីទុក្ខ និងការរលត់ទៅនៃទុក្ខ... (មជ្ឈិមនិកាយ)',
    quoteE: 'I teach only two things: suffering and the cessation of suffering.',
    fullDescK: 'អរិយសច្ច ៤ គឺជាបេះដូងនៃពុទ្ធសាសនា។ ធម៌ទាំង ៨៤,០០០ ធម្មក្ខន្ធ សុទ្ធតែសង្ខេបចូលក្នុងសច្ចៈទាំង ៤ នេះ។ កិច្ចក្នុងសច្ចៈទាំង ៤ ខុសគ្នា៖ ទុក្ខត្រូវកំណត់ដឹង (បរិញ្ញេយ្យ), សមុទ័យត្រូវលះបង់ (បហាតព្វ), និរោធត្រូវធ្វើឱ្យជាក់ច្បាស់ (សច្ឆិកាតព្វ), និងមគ្គត្រូវចម្រើន (ភាវេតព្វ)។',
    fullDescE: 'The beating heart of Dhamma. Each truth carries a distinct duty: Suffering must be comprehended; Craving abandoned; Cessation realized; The Path cultivated.',
    delusionK: 'កម្ចាត់ អវិជ្ជា (ភាពល្ងង់ខ្លៅមិនស្គាល់ទុក្ខ និងហេតុនៃទុក្ខ)។',
    delusionE: 'Annihilates Avijjā (fundamental ignorance regarding suffering and its causes).',
    exerciseK: 'រាល់ពេលកើតទុក្ខ សួរខ្លួនឯងភ្លាមថា «តើតណ្ហា ឬការទាមទារមួយណាដែលកំពុងបង្កើតទុក្ខនេះ?»។',
    exerciseE: 'Whenever distressed, interrogate instantly: “Which craving or expectation gave birth to this agony?”'
  },
  {
    id: 'paticca',
    icon: '⛓️',
    titleK: '៦. បដិច្ចសមុប្បាទ ១២',
    titleE: '6. Dependent Origination (12 Links)',
    pali: 'Paṭiccasamuppāda',
    shortDescK: 'ច្បាប់នៃបុព្វហេតុ និងបច្ច័យ ១២ តំណាក់កាល ដែលបង្វិលខ្សែជីវិតក្នុងសង្សារវដ្ត តាំងពីអវិជ្ជា ដល់ជរាមរណៈ។',
    shortDescE: 'The 12-linked cosmic chain of interdependent conditioning that drives the wheel of cyclic wandering: Avijjā to Jarāmaraṇa.',
    componentsK: 'អវិជ្ជា → សង្ខារ → វិញ្ញាណ → នាមរូប → សឡាយតនៈ → ផស្សៈ → វេទនា → តណ្ហា → ឧបាទាន → ភព → ជាតិ → ជរាមរណៈ។',
    componentsE: 'Ignorance → Formations → Consciousness → Name-and-Form → 6 Senses → Contact → Feeling → Craving → Clinging → Existence → Birth → Aging-and-Death.',
    quotePali: 'Yo paṭiccasamuppādaṁ passati so dhammaṁ passati...',
    quoteK: 'អ្នកណាឃើញបដិច្ចសមុប្បាទ អ្នកនោះឈ្មោះថាឃើញព្រះធម៌... (មជ្ឈិមនិកាយ)',
    quoteE: 'Whoever sees Dependent Origination sees the Dhamma.',
    fullDescK: 'បដិច្ចសមុប្បាទ គឺជាកំពូលនៃទស្សនវិជ្ជាពុទ្ធសាសនា។ អ្វីៗទាំងអស់មិនមែនកើតឡើងដោយចៃដន្យ មិនមែនកើតពីព្រះបង្កើតឡើយ គឺកើតឡើងព្រោះមានបច្ច័យតៗគ្នា។ បើចង់រំលត់ទុក្ខ ត្រូវកាត់ខ្សែចង្វាក់ត្រង់ចំណុច «វេទនា → តណ្ហា» កុំឱ្យតណ្ហាកើតឡើង។',
    fullDescE: 'The summit of Buddhist causality. Phenomena arise neither randomly nor by divine decree, but through interconnected conditions. Breaking the link between Feeling and Craving arrests the entire cycle.',
    delusionK: 'កម្ចាត់ អហេតុកទិដ្ឋិ (ការជឿថាអ្វីៗកើតឡើងដោយគ្មានហេតុ) និង វិសមហេតុកទិដ្ឋិ (ការជឿថាព្រះបង្កើត)។',
    delusionE: 'Demolishes non-causality views and theism, replacing superstition with empirical conditionality.',
    exerciseK: 'ពិនិត្យមើលខ្សែចង្វាក់ផ្លូវចិត្ត៖ ភ្នែកឃើញរូប → កើតវេទនាសុខ → កើតតណ្ហាចង់បាន → កើតទុក្ខព្រោះខ្លាចបាត់បង់។',
    exerciseE: 'Track the internal causal chain: Contact → Pleasant feeling → Craving → Grasping → Anxiety over losing it.'
  }
]

const yogiApplications = [
  {
    icon: '🔍',
    titleK: '១. ការកំណត់នាម និងរូប (នាមរូបបរិច្ឆេទ)',
    titleE: '1. Differentiating Mind & Matter',
    descK: 'ប្រើប្រាស់ខន្ធ ៥ និងអាយតនៈ ដើម្បីញែកឱ្យដឹងថាមួយណាជារូប (Matter) មួយណាជានាម (Mind)។',
    descE: 'Utilize Aggregates and Sense Bases to dissect experience into physical matter and cognitive mind.'
  },
  {
    icon: '⚡',
    titleK: '២. ការស្វែងរកហេតុបច្ច័យ (បច្ចយបរិគ្គហៈ)',
    titleE: '2. Discerning Conditions',
    descK: 'ប្រើប្រាស់បដិច្ចសមុប្បាទ និងធាតុ ១៨ ដើម្បីដឹងថា នាមនិងរូបកើតឡើងដោយសារបច្ច័យ មិនមែនកើតឯងៗឡើយ។',
    descE: 'Use Dependent Origination and Elements to comprehend how mind and matter arise from distinct causes.'
  },
  {
    icon: '🌊',
    titleK: '៣. ការពិនិត្យត្រៃលក្ខណ៍ (សម្មសនញាណ)',
    titleE: '3. Penetrating the 3 Characteristics',
    descK: 'ពិចារណាលើភូមិទាំង ៦ ឃើញថា គ្រប់ធម៌ទាំងអស់សុទ្ធតែអនិច្ចំ ទុក្ខំ អនត្តា គ្មានអ្វីគួរជាប់ជំពាក់។',
    descE: 'Contemplate all 6 soils under the light of Anicca, Dukkha, and Anattā, liberating attachment.'
  },
  {
    icon: '🕊️',
    titleK: '៤. ការសម្រេចព្រះនិព្វាន (មគ្គញាណ)',
    titleE: '4. Realization of Nibbāna',
    descK: 'នៅពេលបញ្ញាដុះលូតលាស់ពេញលេញលើដីទាំង ៦ នេះ ចិត្តនឹងទម្លាយអវិជ្ជា សម្រេចព្រះនិព្វានជាទីបំផុត។',
    descE: 'When wisdom matures across these 6 soils, ignorance is uprooted, realizing Nibbāna.'
  }
]



function handleKeydown(e) {
  if (e.key === 'Escape' && selectedBhumi.value) {
    expandedId.value = null
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
