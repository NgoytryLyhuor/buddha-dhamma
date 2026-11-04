<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🚪 {{ t('បដិសម្ភិទាមគ្គ និងអភិធម្ម · វិមោក្ខមុខ ៣', 'Paṭisambhidāmagga & Abhidhamma · 3 Deliverance Gateways') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('វិមោក្ខ ៣ ៖ ទ្វារទាំងបីឆ្ពោះទៅកាន់ព្រះនិព្វាន', 'Vimokkha 3: The Three Gateways to Liberation') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'វិមោក្ខ គឺការរួចផុតចាកកិលេស និងទុក្ខទាំងពួង។ ព្រះយោគាវចរដែលនឹងសម្រេចព្រះនិព្វាន រមែងចូលតាមទ្វារណាមួយក្នុងចំណោមទ្វារទាំង ៣ នេះ (សុញ្ញតៈ, អនិមិត្តៈ, អប្បណិហិតៈ) អាស្រ័យលើលក្ខណៈនៃត្រៃលក្ខណ៍ (អនត្តា, អនិច្ចំ, ទុក្ខំ) ដែលខ្លួនបានពិចារណាជ្រៅជ្រះជាងគេ។',
            'Vimokkha denotes the complete deliverance of the mind from mental taints and suffering. Meditators entering Nibbāna pass through one of these 3 experiential doorways—Emptiness, Signlessness, or Wishlessness—depending on which of the 3 Universal Characteristics (Anattā, Anicca, Dukkha) was predominantly penetrated.'
          ) }}
        </p>
      </div>
    </section>

    <!-- Tri-Door Visual Diagram -->
    <div class="card-paper p-5 border space-y-3" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
      <div class="text-center max-w-lg mx-auto space-y-1">
        <span class="text-xs font-bold uppercase tracking-wider" :style="{ color: 'var(--accent)' }">
          {{ t('ការផ្សារភ្ជាប់រវាងត្រៃលក្ខណ៍ និងទ្វារវិមោក្ខ', 'Tilakkhaṇa to Liberation Gateway Mapping') }}
        </span>
        <h3 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
          {{ t('ផ្លូវ ៣ ឆ្ពោះទៅកាន់គោលដៅតែមួយ គឺព្រះនិព្វាន', 'Three Gateways, One Singular Goal: Nibbāna') }}
        </h3>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        <div v-for="(v, idx) in vimokkhaList" :key="v.id"
             class="p-4 rounded-xl border text-center space-y-2 cursor-pointer transition-all hover:shadow-md"
             :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }"
             @click="toggleExpand(v.id)">
          <span class="text-3xl block">{{ v.icon }}</span>
          <div class="font-mono text-xs font-bold" :style="{ color: 'var(--accent)' }">{{ v.pali }}</div>
          <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">{{ t(v.titleK, v.titleE) }}</h4>
          <div class="text-xs font-medium px-2 py-0.5 rounded-full inline-block"
               :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
            {{ t(v.tilakkhanaK, v.tilakkhanaE) }}
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

    <!-- TAB 1: 3 Gateways In-Depth Cards -->
    <section v-if="activeTab === 'gateways'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="(item, idx) in vimokkhaList"
          :key="item.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ item.icon }}
              </span>
              <span class="text-xs px-2 py-0.5 rounded-full font-mono font-bold"
                    :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                {{ t('ទ្វារទី', 'Gate') }} {{ khNum(idx + 1) }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-0.5" :style="{ color: 'var(--ink)' }">
              {{ t(item.titleK, item.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-3" :style="{ color: 'var(--accent)' }">
              {{ item.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(item.shortDescK, item.shortDescE) }}
            </p>

            <div class="p-3 rounded-xl mb-4 text-xs space-y-1" :style="{ background: 'var(--bg-card-2)' }">
              <span class="font-bold block" :style="{ color: 'var(--accent)' }">
                🎯 {{ t('លក្ខណៈពិចារណា៖', 'Contemplation Factor:') }}
              </span>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(item.mechanismK, item.mechanismE) }}</p>
            </div>
          </div>

          <div>
            <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold"
                 :style="{ borderColor: 'var(--border)', color: 'var(--accent)' }">
              <span>{{ t('អានការវិភាគគម្ពីរ និងការអនុវត្ត', 'View Scriptural Analysis') }}</span>
              <button
                type="button"
                @click="toggleExpand(item.id)"
                class="lang-pick px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1"
                :class="expandedId === item.id ? 'on' : ''"
              >
                <span>{{ expandedId === item.id ? t('បិទ ▲', 'Hide ▲') : t('អានលម្អិត ▼', 'Read More ▼') }}</span>
              </button>
            </div>

            <!-- Slide-down Inline Expansion -->
            <SlideDown>
              <div v-if="expandedId === item.id" class="pt-4 border-t mt-3 space-y-4 text-xs sm:text-sm leading-relaxed" :style="{ borderColor: 'var(--border)' }">
                <!-- Canonical Sutta Verse -->
                <div class="p-3.5 rounded-xl border-l-4 font-serif text-xs leading-relaxed"
                     :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
                  <p class="italic mb-1 font-bold">« {{ item.canonicalPali }} »</p>
                  <p class="text-xs opacity-80">— {{ t(item.canonicalK, item.canonicalE) }}</p>
                </div>

                <!-- Detailed Explanation -->
                <div class="space-y-1.5">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>📖</span>
                    <span>{{ t('អត្ថន័យ និងការឆ្លុះបញ្ចាំងបញ្ញា', 'Doctrinal Significance') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(item.fullDescK, item.fullDescE) }}
                  </p>
                </div>

                <!-- Contemplative Method -->
                <div class="p-3.5 rounded-xl border space-y-1.5"
                     :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>🧘</span>
                    <span>{{ t('វិធីចម្រើនក្នុងវិបស្សនា', 'Vipassanā Contemplation Method') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
                    {{ t(item.methodK, item.methodE) }}
                  </p>
                </div>

                <!-- Modern Psychological Healing -->
                <div class="p-3.5 rounded-xl space-y-1.5" :style="{ background: 'var(--bg-card-2)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>💡</span>
                    <span>{{ t('ការអនុវត្តជាក់ស្ដែងដើម្បីរំដោះចិត្តពីទុក្ខប្រចាំថ្ងៃ', 'Dissolving Everyday Suffering') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
                    {{ t(item.modernHealingK, item.modernHealingE) }}
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

    <!-- TAB 2: The 8 Vimokkhas (Aṭṭha Vimokkha) -->
    <section v-if="activeTab === 'eight'" class="space-y-4">
      <div class="card-paper p-6 space-y-3">
        <h2 class="text-lg sm:text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('អដ្ឋវិមោក្ខ ៨ ៖ ការរំដោះចិត្ត ៨ ថ្នាក់តាមលំដាប់ឈាន', 'Aṭṭha Vimokkha: The 8 Meditative Deliverances') }}
        </h2>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ក្រៅពីទ្វារវិមោក្ខទាំង ៣ ព្រះពុទ្ធបានសម្តែងអំពីវិមោក្ខ ៨ យ៉ាង ក្នុងមហានិទានសូត្រ (ទីឃនិកាយ) ដែលជាការរំដោះចិត្តមួយកម្រិតម្តងៗតាមរយៈរូបជ្ឈាន អរូបជ្ឈាន រហូតដល់សញ្ញាវេទយិតនិរោធ៖',
            'In the Mahānidāna Sutta (DN 15), the Buddha delineated the 8 progressive Deliverances traversing Rūpa Jhāna, Arūpa Samāpatti, and culminating in the Cessation of Perception and Feeling (Nirodha-samāpatti):'
          ) }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div v-for="(e, eIdx) in eightVimokkhas" :key="eIdx"
             class="card-paper p-4 border space-y-2"
             :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
          <div class="flex items-center justify-between">
            <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                  :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
              #{{ khNum(eIdx + 1) }}
            </span>
            <span class="text-xl">{{ e.icon }}</span>
          </div>
          <h4 class="font-bold text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
            {{ t(e.titleK, e.titleE) }}
          </h4>
          <span class="text-[11px] font-mono block" :style="{ color: 'var(--accent)' }">{{ e.pali }}</span>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(e.descK, e.descE) }}
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

const activeTab = ref('gateways')
const expandedId = ref(null)
function toggleExpand(id) { expandedId.value = expandedId.value === id ? null : id }

const tabs = [
  { id: 'gateways', icon: '🚪', titleK: 'វិមោក្ខមុខទាំង ៣', titleE: 'The 3 Gateways' },
  { id: 'eight', icon: '🌟', titleK: 'អដ្ឋវិមោក្ខ ៨', titleE: 'The 8 Deliverances' }
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

const vimokkhaList = [
  {
    id: 'sunnata',
    icon: '🌌',
    titleK: 'សុញ្ញតវិមោក្ខ',
    titleE: 'Emptiness Deliverance',
    pali: 'Suññatā-vimokkha',
    tilakkhanaK: 'ឆ្លងតាម អនត្តានុបស្សនា (គ្មានខ្លឹមសារតួខ្លួន)',
    tilakkhanaE: 'Via Anattānupassanā (Non-Self)',
    shortDescK: 'ការរួចផុតទុក្ខដោយការឃើញច្បាស់ថាសង្ខារទាំងពួងសូន្យទទេចាក «តួខ្លួន អត្តា ឬសត្វបុគ្គល» មិនមានម្ចាស់កម្មសិទ្ធិពិតប្រាកដឡើយ។',
    shortDescE: 'Liberation through directly perceiving that all formations are void of an abiding self, soul, ego, or permanent owner.',
    mechanismK: 'កម្ចាត់ អត្តទិដ្ឋិ (ការយល់ច្រឡំថាមានខ្លួនឯង) និង អស្មិមានៈ (អំនួតថាមានអញ)។',
    mechanismE: 'Destroys identity-view (Atta-diṭṭhi) and the deep-seated conceit “I am” (Asmimāna).',
    canonicalPali: 'Suññato lokaṁ avekkhassu, mogharāja sadā sato...',
    canonicalK: 'ម្នាលមោឃរាជ ចូរអ្នកមានសតិ ពិនិត្យមើលលោកនេះថាជាធម្មជាតិសូន្យទទេចុះ... (សុត្តនិបាត)',
    canonicalE: 'Look upon the world as empty, Mogharāja, ever mindful, uprooting the view of self (Sutta Nipāta).',
    fullDescK: 'សុញ្ញតវិមោក្ខ កើតចេញពីបញ្ញាដែលទម្លាយការប្រកាន់ថា «នេះជាខ្ញុំ នេះជារបស់ខ្ញុំ នេះជាខ្លួនរបស់ខ្ញុំ»។ ពេលឃើញរូប វេទនា សញ្ញា សង្ខារ វិញ្ញាណ គ្រាន់តែជាធាតុធម្មជាតិដែលកើតរលត់តាមបច្ច័យ ចិត្តនឹងរបូតចេញពីចំណងទាំងពួង។ ព្រះនិព្វានត្រូវបានហៅថា សុញ្ញតៈ ព្រោះសូន្យចាករាគៈ ទោសៈ មោហៈ។',
    fullDescE: 'Arises when wisdom completely dissolves the delusion of “I”, “mine”, and “myself”. Recognizing the 5 Aggregates as empty elemental flows arising and ceasing by conditionality, consciousness detaches. Nibbāna is called Emptiness because it is utterly void of greed, hatred, and delusion.',
    methodK: 'ផ្ដោតការសង្កេតរាល់អារម្មណ៍ គំនិត និងការឈឺចាប់ ថាគ្រាន់តែជាបាតុភូតធម្មជាតិដែលកើតហើយរលត់ គ្មាន «អ្នកឈឺ» ឬ «អ្នកគិត» នៅពីក្រោយឡើយ។',
    methodE: 'Observe thoughts and physical sensations as impersonal phenomena passing away, devoid of an internal thinker or experiencer.',
    practicalK: 'នៅពេលមានអ្នកណាម្នាក់ជេរ ឬរិះគន់ ចូរពិចារណាថា «សំឡេងគ្រាន់តែជាខ្យល់ប៉ះត្រចៀក គ្មានអញណាត្រូវខូចខាតឡើយ» កំហឹងនឹងរលត់ភ្លាម។',
    practicalE: 'When insulted, reflect: “Words are merely vibrations striking the ear; there is no permanent entity here to be wounded.”'
  },
  {
    id: 'animitta',
    icon: '🌊',
    titleK: 'អនិមិត្តវិមោក្ខ',
    titleE: 'Signless Deliverance',
    pali: 'Animitta-vimokkha',
    tilakkhanaK: 'ឆ្លងតាម អនិច្ចានុបស្សនា (ភាពមិនទៀង)',
    tilakkhanaE: 'Via Aniccānupassanā (Impermanence)',
    shortDescK: 'ការរួចផុតទុក្ខដោយការឃើញច្បាស់ថាសង្ខារទាំងពួងគ្មាន «និមិត្ត ឬសញ្ញាសម្គាល់» ស្ថិតស្ថេរឡើយ គឺរលត់បាត់ស្រមោលរាល់ខណៈ។',
    shortDescE: 'Liberation through perceiving all conditioned phenomena as devoid of lasting signs or stability, dissolving moment by moment.',
    mechanismK: 'កម្ចាត់ និច្ចសញ្ញា (ការសម្គាល់ថារបស់ទាំងឡាយទៀងទាត់ អាចពឹងពាក់បានយូរអង្វែង)។',
    mechanismE: 'Shatters the illusion of permanence (Nicca-saññā) and false sense of security in the transient.',
    canonicalPali: 'Sabbanimittānaṁ amanasikārā animittāya cetovimuttiyā...',
    canonicalK: 'ដោយការមិនធ្វើទុកក្នុងចិត្តនូវនិមិត្តទាំងពួង ទើបបានសម្រេចនូវអនិមិត្តចេតោវិមុត្តិ... (សំយុត្តនិកាយ)',
    canonicalE: 'Through non-attention to all signs, one attains and dwells in signless liberation of mind (Saṁyutta Nikāya).',
    fullDescK: 'អនិមិត្តវិមោក្ខ កើតឡើងនៅពេលយោគាវចរឃើញការកើតរលត់យ៉ាងញាប់ញឹកនៃរូប-នាម រហូតដល់លែងឃើញរូបរាង កាយវិការ ឬទ្រង់ទ្រាយនៃវត្ថុទៀតហើយ គឺឃើញតែលំហូរនៃការបែកធ្លាយរលាយបាត់។ ព្រះនិព្វានត្រូវបានហៅថា អនិមិត្តៈ ព្រោះគ្មាននិមិត្តនៃរូប វេទនា សញ្ញា សង្ខារ វិញ្ញាណ ឡើយ។',
    fullDescE: 'Unfolds when perception penetrates the rapid disintegration of mind and matter so profoundly that gross forms, labels, and appearances dissolve into fluid vanishing. Nibbāna is Signless because it contains no mark of conditioned aggregates.',
    methodK: 'កំណត់ដឹងការរលត់បាត់ (វយលក្ខណៈ) នៃដង្ហើមចេញចូល ឬសំឡេង ឃើញថាវាកើតហើយរលាយទៅជាភាពទទេភ្លាមៗ។',
    methodE: 'Anchor on the cessation and vanishing aspect (Vaya-lakkhaṇa) of sensations, witnessing their instant disappearance into voidness.',
    practicalK: 'នៅពេលជួបការបាត់បង់ទ្រព្យសម្បត្តិ ឬការបែកបាក់ ចូរយល់ថារបស់ទាំងអស់គ្មានស្លាកស្នាមអមតៈឡើយ ការផ្លាស់ប្តូរជាច្បាប់ធម្មជាតិ។',
    practicalE: 'During grief and material loss, recognize that no form bears an eternal warranty; change is nature’s intrinsic truth.'
  },
  {
    id: 'appanihita',
    icon: '🕊️',
    titleK: 'អប្បណិហិតវិមោក្ខ',
    titleE: 'Desireless / Wishless Deliverance',
    pali: 'Appaṇihita-vimokkha',
    tilakkhanaK: 'ឆ្លងតាម ទុក្ខានុបស្សនា (សេចក្ដីទុក្ខ)',
    tilakkhanaE: 'Via Dukkhānupassanā (Unsatisfactoriness)',
    shortDescK: 'ការរួចផុតទុក្ខដោយការឃើញច្បាស់នូវទោសនៃសង្ខារ រហូតអស់សេចក្ដីប្រាថ្នា ចង់បាន ឬទាមទារនូវសេចក្ដីសុខពីភពណាមួយទៀត។',
    shortDescE: 'Liberation through witnessing the suffering inherent in all conditioned existence, quenching all longing and desire.',
    mechanismK: 'កម្ចាត់ សុខសញ្ញា និង តណ្ហា (ការស្រេកឃ្លានចង់បានសេចក្ដីសុខពីលោកិយ)។',
    mechanismE: 'Extinguishes the false perception of pleasure (Sukha-saññā) and all craving (Taṇhā).',
    canonicalPali: 'Taṇhakkhayo virāgo nirodho nibbānaṁ...',
    canonicalK: 'ការអស់ទៅនៃតណ្ហា ការប្រាសចាករាគៈ ការរលត់ទុក្ខ នោះគឺព្រះនិព្វាន... (ឥតិវុត្តកៈ)',
    canonicalE: 'The destruction of craving, dispassion, cessation—this is Nibbāna (Itivuttaka).',
    fullDescK: 'អប្បណិហិតវិមោក្ខ កើតឡើងនៅពេលចិត្តយល់ច្បាស់ថា សូម្បីសុខក្នុងឋានសួគ៌ ឬសុខក្នុងឈាន ក៏នៅតែស្ថិតក្នុងច្បាប់នៃសេចក្ដីទុក្ខ ព្រោះត្រូវប្រែប្រួល។ នៅពេលឃើញទោសនៃភពទាំងពួង ចិត្តក៏ឈប់ប្រាថ្នា (អប្បណិហិត) រលាស់ចោលតណ្ហា ហើយងាកទៅចាប់យកព្រះនិព្វានជាទីស្ងប់ដ៏ពិតប្រាកដ។',
    fullDescE: 'Realized when the seeker recognizes that even celestial or meditative bliss is intrinsically fraught with suffering because of instability. Viewing all realms as burning embers, the heart abandons all striving and craving, resting in the unconditioned calm of Nibbāna.',
    methodK: 'ពិចារណាលើភាពនឿយហត់នៃការដេញតាមចំណង់ និងការកើតទុក្ខដដែលៗក្នុងសង្សារវដ្ត រហូតដល់ចិត្តទម្លាក់បន្ទុកចោល។',
    methodE: 'Contemplate the endless exhaustion of pursuing worldly desires, permitting the mind to lay down all burdens in deep surrender.',
    practicalK: 'ឈប់រំពឹងថាមនុស្សជុំវិញខ្លួន ឬកាលៈទេសៈខាងក្រៅត្រូវតែល្អឥតខ្ចោះដើម្បីឱ្យយើងមានក្ដីសុខ ចូររកសេចក្ដីសុខពីការអស់តម្រូវការ។',
    practicalE: 'Relinquish the demand that external circumstances must be flawless for you to be at peace; discover joy in wanting nothing.'
  }
]

const eightVimokkhas = [
  {
    icon: '👁️',
    titleK: '១. រូបាវចរវិមោក្ខ',
    titleE: '1. Possessing Form, Seeing Form',
    pali: 'Rūpī rūpāni passati',
    descK: 'អ្នកមានរូបជ្ឈានក្នុងខ្លួន ហើយពិចារណាឃើញរូបខាងក្រៅ។',
    descE: 'Possessing internal form Jhana, one contemplates external forms.'
  },
  {
    icon: '🧘',
    titleK: '២. អរូបសញ្ញាវិមោក្ខ',
    titleE: '2. Not Seeing Internal, Seeing External Form',
    pali: 'Ajjhattaṁ arūpasaññī...',
    descK: 'មិនធ្វើទុកក្នុងចិត្តនូវរូបខាងក្នុង តែឃើញរូបខាងក្រៅ។',
    descE: 'Not noting internal form, one observes external forms.'
  },
  {
    icon: '✨',
    titleK: '៣. សុភវិមោក្ខ',
    titleE: '3. Deliverance on the Beautiful',
    pali: 'Subhan’tveva adhimutto',
    descK: 'ការតម្កល់ចិត្តក្នុងអារម្មណ៍ដ៏ល្អបរិសុទ្ធ (កសិណពណ៌ថ្លា)។',
    descE: 'Resolutely absorbed in the pure, radiant beauty of kasina colors.'
  },
  {
    icon: '🌌',
    titleK: '៤. អាកាសានញ្ចាយតនវិមោក្ខ',
    titleE: '4. Boundless Space Deliverance',
    pali: 'Ākāsānañcāyatana',
    descK: 'ការឆ្លងផុតរូបសញ្ញា តម្កល់ចិត្តក្នុងលំហអាកាសគ្មានទីបំផុត។',
    descE: 'Transcending forms, absorbed in infinite, boundless space.'
  },
  {
    icon: '💡',
    titleK: '៥. វិញ្ញាណញ្ចាយតនវិមោក្ខ',
    titleE: '5. Boundless Consciousness Deliverance',
    pali: 'Viññāṇañcāyatana',
    descK: 'ការតម្កល់ចិត្តក្នុងវិញ្ញាណដែលដឹងអាកាសគ្មានទីបំផុត។',
    descE: 'Absorbed in boundless, infinite consciousness.'
  },
  {
    icon: '🌑',
    titleK: '៦. អាកិញ្ចញ្ញាយតនវិមោក្ខ',
    titleE: '6. Nothingness Deliverance',
    pali: 'Ākiñcaññāyatana',
    descK: 'ការតម្កល់ចិត្តក្នុងសភាព «គ្មានអ្វីបន្តិចសោះឡើយ»។',
    descE: 'Absorbed in the perception of sheer nothingness.'
  },
  {
    icon: '🌫️',
    titleK: '៧. នេវសញ្ញានាសញ្ញាយតនវិមោក្ខ',
    titleE: '7. Neither-Perception-Nor-Non-Perception',
    pali: 'Nevasaññānāsaññāyatana',
    descK: 'សភាពចិត្តដ៏ល្អិតក្រៃលែង មិនមែនមានសញ្ញា មិនមែនគ្មានសញ្ញា។',
    descE: 'The subtlest summit of formless absorption.'
  },
  {
    icon: '🛑',
    titleK: '៨. សញ្ញាវេទយិតនិរោធវិមោក្ខ',
    titleE: '8. Cessation of Perception & Feeling',
    pali: 'Saññāvedayitanirodha',
    descK: 'ការរលត់ទាំងស្រុងនៃសញ្ញា និងវេទនា ដោយអានុភាពព្រះអរហន្ត ឬអនាគាមី។',
    descE: 'Total cessation of mental activity experienced by Non-Returners and Arahants.'
  }
]



function handleKeydown(e) {
  if (e.key === 'Escape' && selectedVimokkha.value) {
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
