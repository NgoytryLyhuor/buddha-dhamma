<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>⛓️ {{ t('អង្គុត្តរនិកាយ ទសកនិបាត · សំយោជនសូត្រ (AN 10.13)', 'Aṅguttara Nikāya 10.13 · Saṁyojana Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('សំយោជនៈ ១០ និងអរិយបុគ្គល ៤ ថ្នាក់', 'The 10 Fetters & 4 Stages of Awakening') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'សំយោជនៈ គឺជាច្រវាក់ផ្លូវចិត្ត ១០ ខ្សែ ដែលចងក្រៀកសត្វលោកឱ្យជាប់ក្នុងវាលវដ្តសង្សារ។ ការកាត់ផ្តាច់ច្រវាក់ទាំងនេះតាមលំដាប់លំដោយ គឺជាដំណើរវិវត្តរបស់អរិយបុគ្គលទាំង ៤ ថ្នាក់៖ សោតាបន្ន (កាត់ ៣), សកទាគាមី (សម្រាល ២), អនាគាមី (កាត់ដាច់ ៥), និងព្រះអរហន្ត (កាត់ផ្តាច់ទាំង ១០ សម្រេចព្រះនិព្វាន)។',
            'Saṁyojanas are the 10 cognitive shackles chaining sentient beings to the wheel of Saṃsāra. Progressively severing these chains marks the 4 transcendental stages of awakening: Stream-Enterer (cuts 3), Once-Returner (attenuates 2), Non-Returner (cuts lower 5), and Arahant (shatters all 10, entering Unconditioned Nibbāna).'
          ) }}
        </p>
      </div>
    </section>

    <!-- 4 Stages Progress Visual -->
    <div class="card-paper p-5 border space-y-3" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
      <div class="text-center max-w-lg mx-auto space-y-1">
        <span class="text-xs font-bold uppercase tracking-wider" :style="{ color: 'var(--accent)' }">
          {{ t('កម្រិតនៃការកាត់ផ្តាច់ច្រវាក់សំយោជនៈ', 'Chains Severed by the 4 Noble Stages') }}
        </span>
        <h3 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
          {{ t('ដំណើរឆ្ពោះទៅកាន់សេរីភាពពេញលេញនៃចិត្ត', 'The Evolutionary Ascent to Ultimate Freedom') }}
        </h3>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
        <div v-for="(stage, sIdx) in ariyaStages" :key="stage.id"
             class="p-3.5 rounded-xl border text-center space-y-1.5"
             :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <div class="flex items-center justify-between text-xs font-mono">
            <span class="px-2 py-0.5 rounded-full font-bold"
                  :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
              {{ t('ថ្នាក់ទី', 'Stage') }} {{ khNum(sIdx + 1) }}
            </span>
            <span>{{ stage.icon }}</span>
          </div>
          <h4 class="font-bold text-xs sm:text-sm pt-1" :style="{ color: 'var(--ink)' }">
            {{ t(stage.titleK, stage.titleE) }}
          </h4>
          <span class="text-[11px] font-mono block" :style="{ color: 'var(--accent)' }">{{ stage.pali }}</span>
          <div class="p-1.5 rounded-lg text-[11px] font-semibold"
               :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-soft)' }">
            {{ t(stage.severedK, stage.severedE) }}
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

    <!-- TAB 1: 10 Fetters In Detail -->
    <section v-if="activeTab === 'fetters'" class="space-y-4">
      <!-- Filter: Lower vs Higher -->
      <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none touch-pan-x">
        <button
          @click="selectedGroup = 'all'"
          class="lang-pick px-2.5 py-1 text-xs shrink-0 whitespace-nowrap"
          :class="selectedGroup === 'all' ? 'on' : ''"
        >
          {{ t('ទាំងអស់ (១០)', 'All 10') }}
        </button>
        <button
          @click="selectedGroup = 'lower'"
          class="lang-pick px-2.5 py-1 text-xs shrink-0 whitespace-nowrap"
          :class="selectedGroup === 'lower' ? 'on' : ''"
        >
          {{ t('ឱរម្ភាគិយសំយោជនៈ (ថ្នាក់ទាប ៥)', 'Lower 5 Fetters') }}
        </button>
        <button
          @click="selectedGroup = 'higher'"
          class="lang-pick px-2.5 py-1 text-xs shrink-0 whitespace-nowrap"
          :class="selectedGroup === 'higher' ? 'on' : ''"
        >
          {{ t('ឧទ្ធម្ភាគិយសំយោជនៈ (ថ្នាក់ខ្ពស់ ៥)', 'Higher 5 Fetters') }}
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(f, idx) in filteredFetters"
          :key="f.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ f.icon }}
              </span>
              <div class="flex flex-col items-end gap-1">
                <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                      :style="{
                        background: f.isLower ? '#fee2e2' : 'var(--accent-soft)',
                        color: f.isLower ? '#dc2626' : 'var(--accent)'
                      }">
                  {{ f.isLower ? t('ថ្នាក់ទាប', 'Lower') : t('ថ្នាក់ខ្ពស់', 'Higher') }} #{{ khNum(idx + 1) }}
                </span>
                <span class="text-[11px] font-mono" :style="{ color: 'var(--ink-faint)' }">
                  {{ t(f.severedByK, f.severedByE) }}
                </span>
              </div>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-0.5" :style="{ color: 'var(--ink)' }">
              {{ t(f.titleK, f.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-3" :style="{ color: 'var(--accent)' }">
              {{ f.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(f.shortDescK, f.shortDescE) }}
            </p>

            <div class="p-3 rounded-xl mb-4 text-xs space-y-1" :style="{ background: 'var(--bg-card-2)' }">
              <strong :style="{ color: 'var(--accent)' }">{{ t('ការចងក្រៀកក្នុងចិត្ត៖', 'Mental Bondage:') }}</strong>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(f.bondageK, f.bondageE) }}</p>
            </div>
          </div>

          <div>
            <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold"
                 :style="{ borderColor: 'var(--border)', color: 'var(--accent)' }">
              <span>{{ t('អានវិធីកម្ចាត់ និងការវិភាគគម្ពីរ', 'View Eradication Method') }}</span>
              <button
                type="button"
                @click="toggleExpand(f.id)"
                class="lang-pick px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1"
                :class="expandedId === f.id ? 'on' : ''"
              >
                <span>{{ expandedId === f.id ? t('បិទ ▲', 'Hide ▲') : t('អានលម្អិត ▼', 'Read More ▼') }}</span>
              </button>
            </div>

            <!-- Slide-down Inline Expansion -->
            <transition name="slide-down">
              <div v-if="expandedId === f.id" class="pt-4 border-t mt-3 space-y-4 text-xs sm:text-sm leading-relaxed" :style="{ borderColor: 'var(--border)' }">
                <!-- Sutta Verse -->
                <div class="p-3.5 rounded-xl border-l-4 font-serif text-xs leading-relaxed"
                     :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
                  <p class="italic mb-1 font-bold">« {{ f.canonicalPali }} »</p>
                  <p class="text-xs opacity-80">— {{ t(f.canonicalK, f.canonicalE) }}</p>
                </div>

                <!-- Detailed Exposition -->
                <div class="space-y-1.5">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>📖</span>
                    <span>{{ t('អត្ថន័យ និងយន្តការនៃការចងក្រៀក', 'Doctrinal Nature & Mechanism') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(f.fullDescK, f.fullDescE) }}
                  </p>
                </div>

                <!-- Method to Sever this Fetter -->
                <div class="p-3.5 rounded-xl border space-y-1.5"
                     :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>⚔️</span>
                    <span>{{ t('វិធីកម្ចាត់ដោយវិបស្សនាបញ្ញា', 'Vipassanā Eradication Strategy') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
                    {{ t(f.eradicationK, f.eradicationE) }}
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

    <!-- TAB 2: 4 Stages of Awakening Breakdown -->
    <section v-if="activeTab === 'stages'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="st in ariyaStages" :key="st.id"
             class="card-paper p-5 border space-y-3 flex flex-col justify-between"
             :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-3xl">{{ st.icon }}</span>
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                    :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                {{ st.pali }}
              </span>
            </div>
            <h3 class="font-bold text-base sm:text-lg" :style="{ color: 'var(--ink)' }">
              {{ t(st.titleK, st.titleE) }}
            </h3>
            <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
              {{ t(st.fullDescK, st.fullDescE) }}
            </p>
          </div>

          <div class="space-y-2 pt-2 border-t" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2.5 rounded-lg text-xs" :style="{ background: 'var(--bg-card-2)' }">
              <strong class="block mb-0.5" :style="{ color: 'var(--accent)' }">
                ✂️ {{ t('សំយោជនៈដែលកាត់ផ្តាច់៖', 'Fetters Severed:') }}
              </strong>
              <span :style="{ color: 'var(--ink)' }">{{ t(st.severedK, st.severedE) }}</span>
            </div>
            <div class="p-2.5 rounded-lg text-xs" :style="{ background: 'var(--accent-soft)' }">
              <strong class="block mb-0.5" :style="{ color: 'var(--accent)' }">
                ⏳ {{ t('ដំណើរទៅកាន់ព្រះនិព្វាន៖', 'Path to Nibbāna:') }}
              </strong>
              <span :style="{ color: 'var(--ink)' }">{{ t(st.rebirthK, st.rebirthE) }}</span>
            </div>
          </div>
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

const activeTab = ref('fetters')
const selectedGroup = ref('all')
const expandedId = ref(null)
function toggleExpand(id) { expandedId.value = expandedId.value === id ? null : id }

const tabs = [
  { id: 'fetters', icon: '⛓️', titleK: 'សំយោជនៈទាំង ១០', titleE: 'The 10 Fetters' },
  { id: 'stages', icon: '👑', titleK: 'អរិយបុគ្គល ៤ ថ្នាក់', titleE: '4 Noble Stages' }
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

const fettersList = [
  {
    id: 'sakkayaditthi',
    isLower: true,
    icon: '👤',
    titleK: '១. សក្កាយទិដ្ឋិ (ប្រកាន់តួខ្លួន)',
    titleE: '1. Identity View (Sakkāyadiṭṭhi)',
    pali: 'Sakkāya-diṭṭhi',
    severedByK: 'កាត់ដាច់ដោយ សោតាបត្តិមគ្គ',
    severedByE: 'Uprooted by Sotāpatti-magga',
    shortDescK: 'ការយល់ច្រឡំថាមាន «ខ្លួន អញ ឬព្រលឹង» នៅក្នុងខន្ធ ៥ ណាមួយ ឬខន្ធ ៥ ជាខ្លួន។',
    shortDescE: 'The persistent delusion that an abiding self, soul, or ego exists within or owns the 5 Aggregates.',
    bondageK: 'ចងចិត្តឱ្យមានអំនួត ការភ័យខ្លាចបាត់បង់ និងការប្រកាន់បក្សពួក។',
    bondageE: 'Chains the mind to fear of annihilation, defensive egotism, and existential anxiety.',
    canonicalPali: 'Dasayimāni bhikkhave saṁyojanāni... sakkāyadiṭṭhi vicikicchā...',
    canonicalK: 'ម្នាលភិក្ខុទាំងឡាយ សំយោជនៈនេះមាន ១០ ប្រការ គឺ សក្កាយទិដ្ឋិ វិចិកិច្ឆា...',
    canonicalE: 'Monks, there are these 10 fetters: identity view, skeptical doubt, clinging to rites...',
    fullDescK: 'សក្កាយទិដ្ឋិ គឺជាឬសគល់នៃសង្សារវដ្ត។ ដរាបណានៅគិតថាមាន «អញ» ដរាបនោះនៅតែមានការឈឺចាប់ ពេលត្រូវគេជេរ ឬមានការភ័យខ្លាចពេលជិតស្លាប់។ ព្រះសោតាបន្នបានទម្លាយទិដ្ឋិនេះ ដោយឃើញថាខន្ធ ៥ គ្រាន់តែជារូប និងនាមដែលកើតរលត់ គ្មាន «អញ» ក្នុងនោះឡើយ។',
    fullDescE: 'Identity View is the root pivot of Samsara. As long as “I” is presumed, pain from insult and terror of death are inevitable. A Stream-Enterer pierces this by perceiving the 5 Aggregates as empty impersonal processes.',
    eradicationK: 'ចម្រើនវិបស្សនាបំបែករូបកាយ និងចិត្តជាធាតុតូចៗ ឃើញការកើតរលត់រហូតរលាយសញ្ញាថាជាខ្លួនឯង។',
    eradicationE: 'Dissect bodily and mental phenomena through Vipassanā until the perception of a unified entity collapses.'
  },
  {
    id: 'vicikiccha',
    isLower: true,
    icon: '❓',
    titleK: '២. វិចិកិច្ឆា (សេចក្ដីសង្ស័យ)',
    titleE: '2. Skeptical Doubt (Vicikicchā)',
    pali: 'Vicikicchā',
    severedByK: 'កាត់ដាច់ដោយ សោតាបត្តិមគ្គ',
    severedByE: 'Uprooted by Sotāpatti-magga',
    shortDescK: 'សេចក្ដីសង្ស័យ ៨ ប្រការ លើព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ សិក្ខា អតីត អនាគត និងបដិច្ចសមុប្បាទ។',
    shortDescE: 'Paralyzing spiritual doubt regarding the Buddha, Dhamma, Saṅgha, Training, and Causality.',
    bondageK: 'ធ្វើឱ្យរារែក មិនហ៊ានបដិបត្តិធម៌ពេញលេញ ដូចមនុស្សឈរនៅផ្លូវបំបែកក្នុងព្រៃងងឹត។',
    bondageE: 'Paralyzes spiritual conviction, leaving the seeker stranded at an obscure crossroads.',
    canonicalPali: 'Kathaṁkathā vinodano, satthari dhamme ca kaṅkhā pahīyati...',
    canonicalK: 'ការកម្ចាត់បង់នូវសេចក្ដីសង្ស័យចំពោះព្រះសាស្តា និងព្រះធម៌...',
    canonicalE: 'Dispelling all perplexity, all doubt regarding the Teacher and the Dhamma is abandoned...',
    fullDescK: 'ព្រះសោតាបន្នបានឃើញព្រះនិព្វានដោយផ្ទាល់ភ្នែក ដូច្នេះសេចក្ដីសង្ស័យលើព្រះរតនត្រ័យត្រូវរលត់ទាំងស្រុង ១០០%។ លោកដឹងច្បាស់ថាព្រះពុទ្ធពិតជាមាន ព្រះធម៌ពិតជានាំឱ្យរួចទុក្ខ និងកម្មផលពិតជាមានពិតប្រាកដ។',
    fullDescE: 'Having directly tasted Nibbāna, a Stream-Enterer eliminates doubt completely. They know from direct empiricism that the Dhamma delivers freedom, rendering doubt impossible.',
    eradicationK: 'ការសិក្សាព្រះធម៌ឱ្យយល់ហេតុផល និងការបដិបត្តិវិបស្សនារហូតឃើញសភាវធម៌ជាក់ស្តែង។',
    eradicationE: 'Systematic Dhamma study confirmed by direct experiential insight into the nature of sensations.'
  },
  {
    id: 'silabbataparamasa',
    isLower: true,
    icon: '🕯️',
    titleK: '៣. សីលព្វតបរាមាសៈ (ការស្ទាបអង្អែលសីលវ័ត)',
    titleE: '3. Clinging to Rites & Rituals (Sīlabbataparāmāsa)',
    pali: 'Sīlabbata-parāmāsa',
    severedByK: 'កាត់ដាច់ដោយ សោតាបត្តិមគ្គ',
    severedByE: 'Uprooted by Sotāpatti-magga',
    shortDescK: 'ការជឿខុសថា គ្រាន់តែធ្វើពិធីកម្ម ងូតទឹកលាងបាប ឬធ្វើតម្រាប់តាមសត្វឆ្កែសត្វគោ អាចជួយឱ្យរួចផុតទុក្ខបាន។',
    shortDescE: 'Superstitious belief that outer rituals, ceremonies, or animal penances alone produce spiritual purification.',
    bondageK: 'ចងមនុស្សឱ្យជាប់នឹងអបិយជំនឿ អាគមអូមអាម និងពិធីកម្មគ្មានប្រាជ្ញា។',
    bondageE: 'Enslaves seekers to magical thinking, incantations, and superstitious rituals devoid of wisdom.',
    canonicalPali: 'Na sīlamattena na vatamattena, bāhusaccena vā pana...',
    canonicalK: 'មិនមែនត្រឹមតែសីល មិនមែនត្រឹមតែវ័ត ឬការចេះដឹងច្រើនដែលអាចសម្រេចបានឡើយ... (ធម្មបទ)',
    canonicalE: 'Not by mere precepts, vows, or vast learning does one attain liberation (Dhammapada).',
    fullDescK: 'ព្រះសោតាបន្នយល់ច្បាស់ថា មានតែការចម្រើនអរិយអដ្ឋង្គិកមគ្គ (សីល សមាធិ បញ្ញា) ប៉ុណ្ណោះ ទើបអាចលាងជម្រះចិត្តបាន។ ការបន់ស្រន់ ស្រោចទឹកមន្ត ឬសែនព្រេន មិនអាចជួយកម្ចាត់កិលេសបានឡើយ។',
    fullDescE: 'Stream-Enterers recognize that only mental purification through the Noble Eightfold Path cleanses the heart. External ablutions and sacrificial rituals cannot extinguish greed or hatred.',
    eradicationK: 'យល់ច្បាស់ពីច្បាប់កម្មផល និងដឹងថាចិត្តបរិសុទ្ធកើតចេញពីការលះកិលេស មិនមែនពិធីកម្មខាងក្រៅ។',
    eradicationE: 'Grounded in Karma and mental training, knowing liberation is an internal psychological work.'
  },
  {
    id: 'kamaraga',
    isLower: true,
    icon: '🌸',
    titleK: '៤. កាមរាគៈ (តម្រេកក្នុងកាម)',
    titleE: '4. Sensual Lust (Kāmarāga)',
    pali: 'Kāmarāga',
    severedByK: 'សម្រាលដោយ សកទាគាមី / កាត់ផ្តាច់ដោយ អនាគាមី',
    severedByE: 'Weakened by Sakadāgāmī / Severed by Anāgāmī',
    shortDescK: 'ការជាប់ជំពាក់ ស្រេកឃ្លាន និងត្រេកត្រអាលលើកាមគុណ ៥ (រូប សំឡេង ក្លិន រស ផោដ្ឋព្វ)។',
    shortDescE: 'Craving and obsessive attachment to sensual pleasures: sights, sounds, smells, tastes, and tactile delights.',
    bondageK: 'ទាញចិត្តឱ្យដេញតាមចំណង់ផ្លូវភេទ សម្ភារៈប្រណីត និងការកម្សាន្តឥតឈប់ឈរ។',
    bondageE: 'Drives compulsive pursuit of sexual gratification, material indulgence, and sensory stimulation.',
    canonicalPali: 'Kāmārāgapahānāya asubhabhāvanā bhāvetabbā...',
    canonicalK: 'ដើម្បីលះបង់នូវកាមរាគៈ គប្បីចម្រើនអសុភភាវនា...',
    canonicalE: 'For the eradication of sensual lust, contemplation of foulness and the body should be developed...',
    fullDescK: 'ព្រះសកទាគាមី ធ្វើឱ្យកាមរាគៈចុះខ្សោយយ៉ាងខ្លាំង។ រីឯព្រះអនាគាមី បានកាត់ផ្តាច់កាមរាគៈទាំងស្រុង ១០០% លែងមានចំណង់ផ្លូវភេទ ឬការជាប់ជំពាក់លើរូបស្អាត រសជាតិឆ្ងាញ់ទៀតហើយ។',
    fullDescE: 'Once-Returners greatly attenuate sensual craving; Non-Returners uproot it entirely, living in sublime sensory detachment without sexual desire.',
    eradicationK: 'ចម្រើនអសុភភាវនា និងពិចារណាទោសនៃកាមគុណ រហូតចិត្តស្ងប់ក្នុងអនាគាមិមគ្គ។',
    eradicationE: 'Deep cultivation of Asubha meditation penetrating the impermanence and peril of sensory chasing.'
  },
  {
    id: 'patigha',
    isLower: true,
    icon: '🔥',
    titleK: '៥. បដិឃៈ / ព្យាបាទ (កំហឹង ទោសៈ)',
    titleE: '5. Ill Will / Aversion (Paṭigha)',
    pali: 'Paṭigha / Byāpāda',
    severedByK: 'សម្រាលដោយ សកទាគាមី / កាត់ផ្តាច់ដោយ អនាគាមី',
    severedByE: 'Weakened by Sakadāgāmī / Severed by Anāgāmī',
    shortDescK: 'សេចក្ដីថ្នាំងថ្នាក់ចិត្ត គំនុំ ខឹងក្រោធ មួរម៉ៅ ឬការមិនពេញចិត្តចំពោះមនុស្ស និងកាលៈទេសៈ។',
    shortDescE: 'Hostility, anger, resentment, irritation, and ill will toward people and circumstances.',
    bondageK: 'ដុតកម្ដៅចិត្តឱ្យក្ដៅក្រហាយ ងាយផ្ទុះកំហឹង និងបង្កជម្លោះក្នុងសង្គម។',
    bondageE: 'Burns the heart with rage, inciting violence, grudge-holding, and relational discord.',
    canonicalPali: 'Byāpādappahānāya mettā bhāvetabbā...',
    canonicalK: 'ដើម្បីលះបង់នូវព្យាបាទ គប្បីចម្រើនមេត្តាភាវនា...',
    canonicalE: 'For the eradication of ill will, boundless loving-kindness should be cultivated...',
    fullDescK: 'ព្រះអនាគាមី គ្មានកំហឹងសូម្បីតែបន្តិចឡើយ។ ទោះបីមានគេយកដាវមកកាត់សាច់ ឬជេរប្រមាថ ក៏ចិត្តរបស់លោកនៅតែពោរពេញដោយក្តីមេត្តាឥតប្រែប្រួល។ ភ្លើងទោសៈត្រូវបានរំលត់ជាស្ថាពរ។',
    fullDescE: 'A Non-Returner is utterly incapable of anger. Even if dismembered with a two-handled saw, their heart radiates unwavering compassion without an atom of irritation.',
    eradicationK: 'ចម្រើនមេត្តាព្រហ្មវិហារ និងពិនិត្យឃើញអនត្តា គ្មានបុគ្គលណាជាសត្រូវពិតឡើយ។',
    eradicationE: 'Mastery of Mettā meditation coupled with insight into non-self, realizing there is no enemy to resent.'
  },
  {
    id: 'ruparaga',
    isLower: false,
    icon: '🎨',
    titleK: '៦. រូបរាគៈ (តម្រេកក្នុងរូបភព/រូបជ្ឈាន)',
    titleE: '6. Attachment to Form Realms (Rūparāga)',
    pali: 'Rūparāga',
    severedByK: 'កាត់ផ្តាច់ដោយ អរហត្តមគ្គ',
    severedByE: 'Uprooted by Arahatta-magga',
    shortDescK: 'ការជាប់ជំពាក់លើសេចក្ដីសុខស្ងប់នៃរូបជ្ឈាន ៤ ឬការប្រាថ្នាទៅកើតក្នុងរូបព្រហ្មលោក។',
    shortDescE: 'Subtle desire for the luminous peace of fine-material Jhānas or rebirth in Brahma realms.',
    bondageK: 'ចងចិត្តឱ្យជាប់នឹងសេចក្ដីសុខនៃសមាធិ មិនព្រមឈានទៅរកព្រះនិព្វានពិត។',
    bondageE: 'Hooks the advanced meditator onto the bliss of deep absorption, stalling full awakening.',
    canonicalPali: 'Rūparāgo arūparāgo māno uddhaccaṁ avijjā...',
    canonicalK: 'រូបរាគៈ អរូបរាគៈ មានៈ ឧទ្ធច្ចៈ អវិជ្ជា ជាឧទ្ធម្ភាគិយសំយោជនៈ ៥...',
    canonicalE: 'Attachment to form, attachment to the formless, conceit, restlessness, ignorance...',
    fullDescK: 'នេះជាសំយោជនៈជាន់ខ្ពស់។ ព្រះអនាគាមីលែងជាប់ជំពាក់នឹងកាមលោកិយហើយ តែនៅជាប់ជំពាក់នឹងសុខនៃឈាន។ ព្រះអរហន្តទើបអាចកាត់ផ្តាច់ការជាប់ជំពាក់លើឈាននេះបាន។',
    fullDescE: 'A subtle spiritual snare. Non-Returners are free from coarse worldly desires, but remain enchanted by deep meditative states until Arahantship shatters this final attachment.',
    eradicationK: 'ពិចារណាថា សូម្បីសុខនៃឈានក៏ជារបស់សង្ខតធម៌ (កើតរលត់) មិនមែនជាទីពឹងអមតៈឡើយ។',
    eradicationE: 'Perceiving that even lofty Jhānic states are conditioned, impermanent, and unsatisfactory.'
  },
  {
    id: 'aruparaga',
    icon: '🌌',
    titleK: '៧. អរូបរាគៈ (តម្រេកក្នុងអរូបភព/អរូបជ្ឈាន)',
    titleE: '7. Attachment to Formless Realms (Arūparāga)',
    pali: 'Arūparāga',
    severedByK: 'កាត់ផ្តាច់ដោយ អរហត្តមគ្គ',
    severedByE: 'Uprooted by Arahatta-magga',
    shortDescK: 'ការជាប់ជំពាក់លើសភាពស្ងប់ស្ងាត់ឥតរូបរាង នៃអរូបជ្ឈាន ៤ (អាកាស, វិញ្ញាណ, អាកិញ្ចញ្ញ, នេវសញ្ញា)។',
    shortDescE: 'Attachment to the formless meditative absorptions: Infinite Space, Infinite Consciousness, Nothingness.',
    bondageK: 'ចងចិត្តឱ្យលង់ក្នុងសភាពស្ងាត់ជ្រងំគ្មានរូប ដែលមានអាយុរាប់ម៉ឺនកប្ប។',
    bondageE: 'Enslaves consciousness to disembodied formless realms lasting tens of thousands of cosmic cycles.',
    canonicalPali: 'Arūpabhavūpapattiyā chandamūlakaṁ saṁyojanaṁ...',
    canonicalK: 'សំយោជនៈដែលមានបំណងកើតក្នុងអរូបភពជាឬសគល់...',
    canonicalE: 'The fetter rooted in desire for formless realms and formless equanimity...',
    fullDescK: 'អរូបជ្ឈានមានសេចក្ដីស្ងប់ជ្រៅណាស់ រហូតដល់អ្នកបដិបត្តិអាចច្រឡំថាជាព្រះនិព្វាន។ ព្រះពុទ្ធបានបង្រៀនឱ្យទម្លាយការជាប់ជំពាក់នេះ ដើម្បីឈានទៅរកអសង្ខតធាតុពិត។',
    fullDescE: 'Formless absorption is so quiet it easily masquerades as Nibbāna. Only the supreme wisdom of the Arahant dismantles this sublime attachment.',
    eradicationK: 'វិបស្សនាលើនាមធម៌ដ៏ល្អិតល្អន់នៃអរូបជ្ឈាន ឃើញថាវានៅតែជាសង្ខារធម៌។',
    eradicationE: 'Vipassanā dissection of subtle mental factors in formless states, exposing them as conditioned.'
  },
  {
    id: 'mana',
    icon: '👑',
    titleK: '៨. មានៈ (អំនួតប្រៀបធៀបខ្លួនឯង)',
    titleE: '8. Conceit / Ego-Measurement (Māna)',
    pali: 'Māna',
    severedByK: 'កាត់ផ្តាច់ដោយ អរហត្តមគ្គ',
    severedByE: 'Uprooted by Arahatta-magga',
    shortDescK: 'ការប្រៀបធៀបខ្លួនឯងនឹងអ្នកដទៃ (គិតថាខ្លួន «ប្រសើរជាងគេ», «ស្មើគេ», ឬ «អន់ជាងគេ»)។',
    shortDescE: 'The subtle reflex to measure oneself against others: “I am better”, “I am equal”, or “I am inferior”.',
    bondageK: 'បង្កើតនូវអស្មិមានៈ (សេចក្ដីសំគាល់ថាមានអញ) និងភាពតានតឹងក្នុងការប្រកួតប្រជែង។',
    bondageE: 'Maintains the deep-seated reflex of ego-comparison and subtle social ranking anxiety.',
    canonicalPali: 'Seyyo’hamasmīti vā, sadiso’hamasmīti vā, hīno’hamasmīti vā...',
    canonicalK: 'ការប្រកាន់ថា អញប្រសើរជាងគេ អញស្មើនឹងគេ ឬអញថោកទាបជាងគេ នេះជាមានៈ...',
    canonicalE: 'Thinking: “I am superior”, “I am equal”, or “I am inferior”—this is conceit (AN 6.49)...',
    fullDescK: 'សូម្បីតែព្រះអនាគាមី ក៏នៅសល់មានៈតិចតួចដែរ គឺនៅមានអារម្មណ៍ថា «មានអញកំពុងបដិបត្តិ»។ លុះត្រាតែសម្រេចជាព្រះអរហន្ត ទើបមានៈនេះត្រូវរលាយសាបសូន្យទាំងស្រុង គ្មានការប្រៀបធៀបទៀតឡើយ។',
    fullDescE: 'Even Non-Returners retain a subtle scent of “I am”. Only the flash of Arahatta-magga obliterates this residual ego-construction forever.',
    eradicationK: 'ចម្រើនអនត្តានុបស្សនាកម្រិតកំពូល រហូតដល់លែងមានអ្នកណាសម្រាប់ប្រៀបធៀបទៀត។',
    eradicationE: 'Highest Anattā contemplation dissolving the very observer-observed dichotomy.'
  },
  {
    id: 'uddhacca',
    icon: '🌀',
    titleK: '៩. ឧទ្ធច្ចៈ (សេចក្ដីរំជើបរំជួលចិត្តល្អិត)',
    titleE: '9. Subtle Restlessness (Uddhacca)',
    pali: 'Uddhacca',
    severedByK: 'កាត់ផ្តាច់ដោយ អរហត្តមគ្គ',
    severedByE: 'Uprooted by Arahatta-magga',
    shortDescK: 'ភាពរំជើបរំជួល ឬរលកផ្លូវចិត្តដ៏ល្អិតល្អន់បំផុត ដែលមិនទាន់ស្ងប់ស្ងាត់ស្មើនឹងព្រះនិព្វាន។',
    shortDescE: 'The final, microscopic shimmer of mental restlessness or vibration before complete stillness.',
    bondageK: 'រារាំងចិត្តមិនឱ្យសម្រេចសន្តិភាពកំពូល ធ្វើឱ្យនៅមានចលនាផ្លូវចិត្តតិចតួច។',
    bondageE: 'Prevents the mind from entering absolute unconditioned equilibrium, preserving a faint cognitive ripple.',
    canonicalPali: 'Uddhaccassa pahānāya samatho bhāvetabbo...',
    canonicalK: 'ដើម្បីលះបង់នូវឧទ្ធច្ចៈ គប្បីចម្រើនសមថៈ និងសតិដ៏ល្អិត...',
    canonicalE: 'For the complete eradication of restlessness, supreme calm and poise must be matured...',
    fullDescK: 'ឧទ្ធច្ចៈរបស់ព្រះអរិយៈ មិនមែនជាការរវើរវាយដូចមនុស្សសាមញ្ញទេ តែជារលកតិចតួចនៃចិត្តដែលនៅមានសេសសល់។ ព្រះអរហន្តទើបមានចិត្តស្ងប់ស្ងាត់ ១០០% ដូចផ្ទៃទឹកគ្មានខ្យល់។',
    fullDescE: 'Noble restlessness is not gross daydreaming, but the faintest micro-tremor of intentionality. An Arahant’s consciousness becomes as motionless as a lamp flame in a windless vault.',
    eradicationK: 'ការតម្កល់ចិត្តក្នុងអារម្មណ៍ព្រះនិព្វាន រហូតរលត់រាល់រលកនៃការកម្រើកផ្លូវចិត្ត។',
    eradicationE: 'Resting in the unconditioned element until every cognitive ripple subsides into stillness.'
  },
  {
    id: 'avijja',
    icon: '🌑',
    titleK: '១០. អវិជ្ជា (ភាពល្ងង់ខ្លៅមិនស្គាល់សច្ចធម៌)',
    titleE: '10. Fundamental Ignorance (Avijjā)',
    pali: 'Avijjā',
    severedByK: 'កាត់ផ្តាច់ដោយ អរហត្តមគ្គ',
    severedByE: 'Uprooted by Arahatta-magga',
    shortDescK: 'ការមិនដឹងច្បាស់នូវអរិយសច្ច ៤ បដិច្ចសមុប្បាទ អតីត អនាគត និងច្បាប់ធម្មជាតិទាំងពួង។',
    shortDescE: 'The primal blindness: not discerning the 4 Noble Truths and the conditioned nature of reality.',
    bondageK: 'ជាមេទ័ពធំនៃកិលេសទាំងអស់ និងជាឫសគល់ដំបូងបង្អស់នៃខ្សែចង្វាក់បដិច្ចសមុប្បាទ។',
    bondageE: 'The supreme commander of all defilements and the primal link of Dependent Origination.',
    canonicalPali: 'Avijjānīvaraṇānaṁ sattānaṁ taṇhāsaṁyojanānaṁ...',
    canonicalK: 'ពួកសត្វដែលមានអវិជ្ជាជារនាំងបាំងមុខ មានតណ្ហាជាចំណងចងក្រៀក...',
    canonicalE: 'Beings hindered by ignorance, fettered by craving, wandering through endless Saṃsāra...',
    fullDescK: 'អវិជ្ជា គឺជាអ័ព្ទខ្មៅងងឹតដែលបិទភ្នែកមនុស្សលោក។ ពេលព្រះអរហន្តសម្រេចអរហត្តមគ្គ អវិជ្ជានេះត្រូវបំផ្លាញដូចពន្លឺព្រះអាទិត្យរំលាយអ័ព្ទ។ អវិជ្ជាអស់ វិជ្ជាកើតឡើង ទុក្ខរលត់ ភពថ្មីត្រូវបានបញ្ចប់។',
    fullDescE: 'Ignorance is the cosmic blindfold. When Arahatta-magga strikes, Avijjā vanishes like morning mist beneath blazing sunlight. Ignorance ceases, Wisdom dawns, suffering is extinguished forever.',
    eradicationK: 'អរហត្តមគ្គញាណ ដែលជាបញ្ញាកំពូលបំភ្លឺសច្ចធម៌ ៤ យ៉ាងបរិបូណ៌។',
    eradicationE: 'The supreme lightning bolt of Arahatta-magga, revealing reality in full, unvarnished luminosity.'
  }
]

const ariyaStages = [
  {
    id: 'sotapanna',
    icon: '🌊',
    titleK: '១. ព្រះសោតាបន្ន (អ្នកចូលកាន់ខ្សែទឹក)',
    titleE: '1. Sotāpanna (Stream-Enterer)',
    pali: 'Sotāpanna',
    severedK: 'កាត់ផ្តាច់សំយោជនៈ ៣ ដំបូង (សក្កាយទិដ្ឋិ, វិចិកិច្ឆា, សីលព្វតបរាមាសៈ)',
    severedE: 'Cuts first 3 fetters: Identity View, Doubt, Clinging to Rites',
    rebirthK: 'កើតយ៉ាងច្រើនបំផុតត្រឹម ៧ ជាតិ ក្នុងមនុស្ស និងសួគ៌ (រួចផុតពីអបាយភូមិ ៤)',
    rebirthE: 'Maximum 7 rebirths in human/deva realms; closed doors to hells forever.',
    fullDescK: 'ជាការបោះជំហានចូលទៅក្នុងខ្សែទឹកនៃព្រះនិព្វាន។ ព្រះសោតាបន្នមានសីល ៥ បរិសុទ្ធ មិនមានការប្រកាន់តួខ្លួនជាខ្លឹមសារ និងមានជំនឿមិនញាប់ញ័រលើព្រះពុទ្ធសាសនា។',
    fullDescE: 'Has entered the immutable stream flowing to Nibbāna. Endowed with spotless 5 Precepts and unbreakable faith in the Triple Gem.'
  },
  {
    id: 'sakadagami',
    icon: '🌅',
    titleK: '២. ព្រះសកទាគាមី (អ្នកត្រឡប់មកវិញម្តងទៀត)',
    titleE: '2. Sakadāgāmī (Once-Returner)',
    pali: 'Sakadāgāmī',
    severedK: 'សម្រាលកាមរាគៈ និងបដិឃៈ (កំហឹង និងចំណង់ផ្លូវភេទចុះខ្សោយខ្លាំង)',
    severedE: 'Significantly weakens Sensual Lust (4) and Ill Will (5)',
    rebirthK: 'ត្រឡប់មកកើតក្នុងមនុស្សលោកនេះតែម្តងគត់ រួចនឹងសម្រេចព្រះនិព្វាន',
    rebirthE: 'Returns to this human world only once more before attaining final liberation.',
    fullDescK: 'កាមរាគៈ និងកំហឹងរបស់ព្រះសកទាគាមី មានសភាពស្តើងដូចស្លាបសត្វល្អិត។ លោកស្ទើរតែលែងមានអារម្មណ៍មួរម៉ៅ ឬទាមទារសេចក្ដីសុខពីកាមគុណទៀតហើយ។',
    fullDescE: 'Anger and lust are reduced to faint wisps like insect wings. The mind is profoundly composed and serene in mundane interactions.'
  },
  {
    id: 'anagami',
    icon: '🕊️',
    titleK: '៣. ព្រះអនាគាមី (អ្នកលែងត្រឡប់មកវិញ)',
    titleE: '3. Anāgāmī (Non-Returner)',
    pali: 'Anāgāmī',
    severedK: 'កាត់ផ្តាច់ឱរម្ភាគិយសំយោជនៈ ៥ ទាំងស្រុង (គ្មានកាមរាគ គ្មានកំហឹងសោះឡើយ)',
    severedE: 'Permanently severs lower 5 fetters (Zero lust, Zero anger)',
    rebirthK: 'មិនត្រឡប់មកកាន់មនុស្សលោកឡើយ ទៅកើតក្នុងឋានសុទ្ធាវាសព្រហ្ម ហើយបរិនិព្វាននៅទីនោះ',
    rebirthE: 'Never returns to human realm; reborn in Pure Abodes (Suddhāvāsa) to attain Nibbāna.',
    fullDescK: 'ព្រះអនាគាមីគ្មានចំណង់ផ្លូវភេទ និងគ្មានកំហឹងសូម្បីមួយដំណក់។ ពេលរលត់ខន្ធ លោកនឹងទៅកើតក្នុងព្រហ្មលោកជាន់សុទ្ធាវាស ៥ ជាន់ ហើយសម្រេចព្រះអរហន្តនៅទីនោះតែម្តង។',
    fullDescE: 'Completely free from sensory cravings and irritation. Upon passing away, ascends to the Pure Abodes, attaining final cessation without returning.'
  },
  {
    id: 'arahant',
    icon: '👑',
    titleK: '៤. ព្រះអរហន្ត (អ្នកឆ្ងាយចាកកិលេស)',
    titleE: '4. Arahant (The Fully Liberated)',
    pali: 'Arahant',
    severedK: 'កាត់ផ្តាច់សំយោជនៈទាំង ១០ យ៉ាងបរិបូណ៌ (រួមទាំង រូបរាគ អរូបរាគ មានៈ ឧទ្ធច្ច អវិជ្ជា)',
    severedE: 'Shatters all 10 fetters including subtle conceit, restlessness, and ignorance',
    rebirthK: 'អស់ជាតិ អស់ភព ចប់ព្រហ្មចរិយធម៌ បរិនិព្វាន មិនត្រឡប់មកកើតក្នុងលោកទៀតឡើយ',
    rebirthE: 'Rebirth ended, holy life fulfilled, done is what had to be done—Parinibbāna.',
    fullDescK: 'ជាកំពូលនៃមនុស្ស និងទេវតា។ ព្រះអរហន្តបានដកឬសគល់នៃអវិជ្ជា និងតណ្ហាទាំងអស់ គ្មានសល់កិលេសសូម្បីតែមួយធូលី។ ចិត្តរបស់លោកជាបរិសុទ្ធិ អមតៈ ស្ងប់ស្ងាត់ចាកទុក្ខទាំងពួង។',
    fullDescE: 'The supreme pinnacle of spiritual evolution. All taints uprooted; the burden dropped; true peace realized; Saṃsāra broken forever.'
  }
]

const filteredFetters = computed(() => {
  if (selectedGroup.value === 'lower') return fettersList.filter(f => f.isLower)
  if (selectedGroup.value === 'higher') return fettersList.filter(f => !f.isLower)
  return fettersList
})



function handleKeydown(e) {
  if (e.key === 'Escape' && selectedFetter.value) {
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
