<template>
  <div class="fade-up">
    <!-- Header -->
    <header class="text-center max-w-2xl mx-auto">
      <p class="chapter-label">{{ t('ចក្រវាឡវិទ្យា & ដើមកំណើតមនុស្សជាតិក្នុងព្រះត្រៃបិដក', 'Buddhist Cosmology & Origin of Society') }}</p>
      <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
        {{ t('កប្ប ចក្រវាឡ & អគ្គញ្ញសូត្រ', 'Cosmic Kalpas, Universes & Aggañña Sutta') }}
      </h2>
      <div class="ornament mt-4">&#9784;</div>
      <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ស្វែងយល់ពីមាត្រាពេលវេលាដ៏មហិមាក្នុងពុទ្ធសាសនា វដ្តនៃការកើតរលាយនៃចក្រវាឡ មហាវិនាសកម្មទាំង ៣ និងការវិវត្តនៃមនុស្សជាតិ និងរបៀបរបបសង្គមក្នុងអគ្គញ្ញសូត្រ។', 'Explore cosmic time scales (Kalpas), universal dissolution cycles, the 7 suns destruction, and the evolutionary origins of human society in the Aggañña Sutta.') }}
      </p>

      <!-- Section Pills -->
      <div class="flex items-center gap-1.5 sm:gap-2 mt-6 flex-wrap justify-center">
        <button
          v-for="sec in sections"
          :key="sec.id"
          @click="activeSection = sec.id"
          class="lang-pick px-3.5 py-1.5 text-xs font-semibold"
          :class="activeSection === sec.id ? 'on' : ''"
        >
          <span>{{ sec.icon }}</span>
          <span>{{ t(sec.km, sec.en) }}</span>
        </button>
      </div>
    </header>

    <!-- Quick Stat Highlights -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-6">
      <div class="card-paper p-3 text-center">
        <span class="text-xl block">⏳</span>
        <strong class="text-xs sm:text-sm block mt-1" :style="{ color: 'var(--ink)' }">{{ t('មហាកប្ប', 'Mahā-kappa') }}</strong>
        <span class="text-[10px] sm:text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('៤ អសង្ខេយ្យកប្ប', '4 cosmic epochs') }}</span>
      </div>
      <div class="card-paper p-3 text-center">
        <span class="text-xl block">☀️</span>
        <strong class="text-xs sm:text-sm block mt-1" :style="{ color: 'var(--ink)' }">{{ t('ព្រះអាទិត្យ ៧', '7 Cosmic Suns') }}</strong>
        <span class="text-[10px] sm:text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('វិនាសកម្មដោយភ្លើង', 'Universal fire apocalypse') }}</span>
      </div>
      <div class="card-paper p-3 text-center">
        <span class="text-xl block">🌱</span>
        <strong class="text-xs sm:text-sm block mt-1" :style="{ color: 'var(--ink)' }">{{ t('អគ្គញ្ញសូត្រ', 'Aggañña Sutta') }}</strong>
        <span class="text-[10px] sm:text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('ដើមកំណើតសង្គម', 'Genesis of society & state') }}</span>
      </div>
      <div class="card-paper p-3 text-center">
        <span class="text-xl block">🪷</span>
        <strong class="text-xs sm:text-sm block mt-1" :style="{ color: 'var(--ink)' }">{{ t('ភទ្ទកប្ប', 'Bhadda-kappa') }}</strong>
        <span class="text-[10px] sm:text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('ព្រះពុទ្ធ ៥ ព្រះអង្គ', '5 Buddhas (Our era)') }}</span>
      </div>
    </div>

    <!-- SECTION 1: THE FOUR PHASES OF A MAHAKAPPA -->
    <section v-if="activeSection === 'timeline' || activeSection === 'all'" class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">🔄</span>
          <h3 class="font-display text-lg sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
            {{ t('ដំណាក់កាលទាំង ៤ នៃមហាកប្ប (៤ អសង្ខេយ្យកប្ប)', 'The 4 Cosmic Epochs of a Mahā-kappa') }}
          </h3>
        </div>
        <span class="paali text-xs" :style="{ color: 'var(--accent)' }">Abhidhamma & Sutta</span>
      </div>
      <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ចក្រវាឡមិនមែនកើតឡើងម្តងហើយចប់នោះឡើយ តែវិលវល់ក្នុងវដ្តដ៏មហិមា ៤ ដំណាក់កាល ហៅថា មហាកប្ប ១ ដែលមាន ៦៤ អន្តរកប្ប។', 'Universes expand, contract, collapse, and recreate in a ceaseless cyclic rhythm of 4 Asaṅkhyeyya-kappas.') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div
          v-for="(phase, idx) in mahakappaPhases"
          :key="idx"
          class="card-paper p-4 sm:p-5 space-y-2 relative overflow-hidden"
        >
          <div class="flex items-center justify-between">
            <span class="text-2xl">{{ phase.icon }}</span>
            <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">
              #{{ phase.num }}
            </span>
          </div>
          <h4 class="font-display font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
            {{ t(phase.titleKm, phase.titleEn) }}
          </h4>
          <span class="paali text-[11px] block" :style="{ color: 'var(--accent)' }">{{ phase.pali }}</span>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t(phase.descKm, phase.descEn) }}
          </p>
          <div class="text-[11px] pt-2" :style="{ borderTop: '1px solid var(--border)', color: 'var(--ink-muted)' }">
            <strong>{{ t('ស្ថានភាព៖ ', 'Status: ') }}</strong>{{ t(phase.statusKm, phase.statusEn) }}
          </div>
        </div>
      </div>

      <!-- Two Analogies of Kalpa Duration -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
        <div class="card-paper p-4 sm:p-5 space-y-2" :style="{ background: 'var(--bg-card-2)' }">
          <div class="flex items-center gap-2">
            <span class="text-xl">🏔️</span>
            <h4 class="font-display font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
              {{ t('ឧបមាទី ១៖ ភ្នំថ្ម ១ យោជន៍ (Granite Mountain)', 'Analogy 1: The 16km Solid Granite Mountain') }}
            </h4>
          </div>
          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ភ្នំថ្មតាន់មួយដុំ មានបណ្តោយ ១ យោជន៍ ទទឹង ១ យោជន៍ កម្ពស់ ១ យោជន៍ (ប្រមាណ ១៦ គីឡូម៉ែត្រ)។ រៀងរាល់ ១០០ ឆ្នាំម្តង មានទេវតាយកសំពត់កាសីស្តើងដូចផ្សែងមកបោសភ្នំនោះម្តង។ បោសរហូតដល់ភ្នំថ្មដ៏មហិមានោះសឹករាបស្មើរនឹងដី ក៏កប្បមួយនៅមិនទាន់ចប់នៅឡើយ!', 'A solid block of granite mountain, 1 yojana high, long, and wide (approx. 16 km). Every 100 years, a celestial being strokes it gently with a sheer silk cloth. Even when that mountain is worn down completely flat, a single Kalpa has still not elapsed!') }}
          </p>
          <span class="paali text-[11px] block" :style="{ color: 'var(--ink-muted)' }">Samyutta Nikāya SN 15.5</span>
        </div>

        <div class="card-paper p-4 sm:p-5 space-y-2" :style="{ background: 'var(--bg-card-2)' }">
          <div class="flex items-center gap-2">
            <span class="text-xl">🌰</span>
            <h4 class="font-display font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
              {{ t('ឧបមាទី ២៖ ក្រុងគ្រាប់ស្ពៃដែក (Mustard Seed City)', 'Analogy 2: The Fortress of Mustard Seeds') }}
            </h4>
          </div>
          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('បន្ទាយដែកមួយ មានកម្ពស់ ១ យោជន៍ ទទឹង ១ យោជន៍ ផ្ទុកទៅដោយគ្រាប់ស្ពៃដ៏តូចៗយ៉ាងណែនណាន់តាន់តាប់។ រៀងរាល់ ១០០ ឆ្នាំម្តង យកគ្រាប់ស្ពៃចេញមួយគ្រាប់។ ទោះបីជាគ្រាប់ស្ពៃរាប់ពាន់លានគ្រាប់នោះអស់រលីងពីបន្ទាយ ក៏កប្បមួយនៅមិនទាន់ចប់នៅឡើយ!', 'An iron city wall, 1 yojana long, wide, and high, packed solid with minuscule mustard seeds. Once every 100 years, someone removes one seed. All those seeds would be exhausted before a single Mahā-kappa is ended!') }}
          </p>
          <span class="paali text-[11px] block" :style="{ color: 'var(--ink-muted)' }">Samyutta Nikāya SN 15.6</span>
        </div>
      </div>
    </section>

    <!-- SECTION 2: THE 3 UNIVERSAL DESTRUCTIONS -->
    <section v-if="activeSection === 'destruction' || activeSection === 'all'" class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">💥</span>
          <h3 class="font-display text-lg sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
            {{ t('មហាវិនាសកម្មទាំង ៣ នៃលោកធាតុ (Universal Destructions)', 'The 3 Elements of Cosmic Dissolution') }}
          </h3>
        </div>
      </div>
      <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('នៅចុងបញ្ចប់នៃកប្ប លោកធាតុនឹងត្រូវបំផ្លាញទៅតាមអំណាចនៃកិលេសដែលក្រាស់ក្នុងចិត្តសត្វលោក (លោភៈ ទោសៈ ឬមោហៈ)៖', 'The mode of universal dissolution corresponds to the dominant mental defilement of beings in that cosmic era:') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div class="card-paper p-4 sm:p-5 space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🔥</span>
            <div>
              <h4 class="font-display font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
                {{ t('វិនាសដោយភ្លើង (តេជោ)', 'Destroyed by Fire (Tejo)') }}
              </h4>
              <span class="paali text-[11px]" :style="{ color: 'var(--accent-bright)' }">{{ t('កើតឡើងពី៖ លោភៈ (Greed)', 'Caused by: Greed (Lobha)') }}</span>
            </div>
          </div>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('នៅពេលសត្វលោកសម្បូរដោយការលោភលន់ហួសហេតុ ព្រះអាទិត្យ ៧ ដួងនឹងរះឡើងជាបន្តបន្ទាប់ បង្កើតជាភ្លើងឆេះបំផ្លាញតាំងពីស្ថាននរក រហូតដល់ស្ថានព្រហ្មជាន់ទី ១ (បឋមជ្ឈាន)។', 'When greed dominates beings, 7 suns emerge sequentially, incinerating everything from the lowest hell up to the 1st Jhana Brahma realms.') }}
          </p>
          <div class="text-[11px] font-medium" :style="{ color: 'var(--accent)' }">
            {{ t('ឆេះដល់៖ ព្រហ្មលោកជាន់ទី ១-៣', 'Burns up to: 1st Jhana Brahma realms') }}
          </div>
        </div>

        <div class="card-paper p-4 sm:p-5 space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🌊</span>
            <div>
              <h4 class="font-display font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
                {{ t('វិនាសដោយទឹក (អាបោ)', 'Destroyed by Acidic Water (Āpo)') }}
              </h4>
              <span class="paali text-[11px]" :style="{ color: 'var(--accent)' }">{{ t('កើតឡើងពី៖ ទោសៈ (Anger)', 'Caused by: Hatred (Dosa)') }}</span>
            </div>
          </div>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('នៅពេលសត្វលោកក្រាស់ដោយគំនុំ កំហឹង និងការកាប់សម្លាប់គ្នា មហាមេឃនឹងបង្អុរទឹកអាស៊ីតដ៏ពុលខ្លាំង រលាយភ្នំព្រះសុមេរុ និងចក្រវាឡ រហូតដល់ស្ថានព្រហ្មទុតិយជ្ឈាន (អាភស្សរា)។', 'When hatred and violence dominate, toxic acidic rain dissolves Mount Meru and realms up to the 2nd Jhana Brahma realm (Ābhassara).') }}
          </p>
          <div class="text-[11px] font-medium" :style="{ color: 'var(--accent)' }">
            {{ t('រលាយដល់៖ ព្រហ្មលោកជាន់ទី ៤-៦', 'Dissolves up to: 2nd Jhana Brahma realms') }}
          </div>
        </div>

        <div class="card-paper p-4 sm:p-5 space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🌪️</span>
            <div>
              <h4 class="font-display font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
                {{ t('វិនាសដោយខ្យល់ (វាយោ)', 'Destroyed by Cosmic Wind (Vāyo)') }}
              </h4>
              <span class="paali text-[11px]" :style="{ color: 'var(--ink-muted)' }">{{ t('កើតឡើងពី៖ មោហៈ (Delusion)', 'Caused by: Delusion (Moha)') }}</span>
            </div>
          </div>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('នៅពេលសត្វលោកវង្វេងងងឹតស្លុប មិនស្គាល់ខុសត្រូវ ខ្យល់ព្យុះកំបុតត្បូងដ៏កាចសាហាវនឹងបក់បោកកម្ទេចផែនដី ភ្នំ និងចក្រវាឡ រហូតដល់ស្ថានព្រហ្មតតិយជ្ឈាន (សុភកិណ្ហា)។', 'When ignorance and blind delusion dominate, cosmic whirlwinds batter and tear the cosmos apart up to the 3rd Jhana Brahma realms (Subhakiṇhā).') }}
          </p>
          <div class="text-[11px] font-medium" :style="{ color: 'var(--accent)' }">
            {{ t('បក់កម្ទេចដល់៖ ព្រហ្មលោកជាន់ទី ៧-៩', 'Destroys up to: 3rd Jhana Brahma realms') }}
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: SURIYA SUTTA (7 SUNS) -->
    <section v-if="activeSection === 'suns' || activeSection === 'all'" class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">☀️</span>
          <h3 class="font-display text-lg sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
            {{ t('សុរិយសូត្រ៖ ព្រះអាទិត្យទាំង ៧ ដួង (Sattasuriya Sutta)', 'The 7 Suns of World Dissolution') }}
          </h3>
        </div>
        <span class="paali text-xs" :style="{ color: 'var(--accent)' }">Aṅguttara Nikāya AN 7.66</span>
      </div>
      <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រះពុទ្ធបានសម្តែងដំណើរនៃការឆេះបំផ្លាញនៃភពផែនដី តាមលំដាប់លំដោយនៃការរះឡើងនៃព្រះអាទិត្យ ៧ ដួង ដើម្បីរំឭកសាវ័កអំពីភាពមិនទៀងនៃសង្ខារលោក៖', 'The Buddha described step-by-step how the emergence of 7 suns evaporates all waters and consumes Mount Meru in flames to remind us of Anicca:') }}
      </p>

      <div class="space-y-2.5">
        <div
          v-for="sun in sevenSuns"
          :key="sun.num"
          class="card-paper p-3.5 sm:p-4 flex items-start gap-3"
        >
          <span class="sutra-num font-bold text-xs shrink-0 mt-0.5" :style="{ color: 'var(--accent-bright)' }">
            #{{ sun.num }}
          </span>
          <div class="space-y-0.5">
            <h4 class="font-display font-bold text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
              {{ t(sun.titleKm, sun.titleEn) }}
            </h4>
            <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(sun.descKm, sun.descEn) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: AGGANNA SUTTA (Origin of Society) -->
    <section v-if="activeSection === 'agganna' || activeSection === 'all'" class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">🌱</span>
          <h3 class="font-display text-lg sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
            {{ t('អគ្គញ្ញសូត្រ៖ ដើមកំណើតមនុស្សជាតិ និងរបៀបរបបសង្គម (Aggañña Sutta)', 'Aggañña Sutta: Genesis of Society & Democracy') }}
          </h3>
        </div>
        <span class="paali text-xs" :style="{ color: 'var(--accent)' }">Dīgha Nikāya DN 27</span>
      </div>
      <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រះពុទ្ធបានបដិសេធទ្រឹស្តីព្រាហ្មណ៍ដែលថា «ព្រះព្រហ្មជាអ្នកបង្កើតមនុស្ស និងបែងចែកវណ្ណៈ»។ ផ្ទុយទៅវិញ ព្រះអង្គបានពន្យល់ពីការវិវត្តនៃសង្គមមនុស្សដែលកើតឡើងដោយកម្លាំងកម្ម និងតណ្ហា៖', 'The Buddha dismantled the Brahmin myth of divine creation. Instead, he presented an evolutionary explanation where human physical coarsement, private property, and elected kingship arose through greed:') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div
          v-for="stage in aggannaStages"
          :key="stage.step"
          class="card-paper p-4 sm:p-5 space-y-2"
        >
          <div class="flex items-center justify-between">
            <span class="text-2xl">{{ stage.icon }}</span>
            <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">
              {{ t('ដំណាក់កាលទី ' + stage.step, 'Stage ' + stage.step) }}
            </span>
          </div>

          <h4 class="font-display font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
            {{ t(stage.titleKm, stage.titleEn) }}
          </h4>

          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t(stage.descKm, stage.descEn) }}
          </p>

          <div class="verse-box p-3 rounded-xl text-xs space-y-0.5 mt-2">
            <strong class="block" :style="{ color: 'var(--accent-bright)' }">💡 {{ t('ខ្លឹមសារទស្សនវិជ្ជា៖', 'Philosophical Insight:') }}</strong>
            <p :style="{ color: 'var(--ink)' }">{{ t(stage.insightKm, stage.insightEn) }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeSection = ref('timeline')

const sections = [
  { id: 'timeline', icon: '⏳', km: 'មហាកប្ប ៤ ដំណាក់កាល', en: '4 Mahā-kappa Epochs' },
  { id: 'destruction', icon: '💥', km: 'មហាវិនាសកម្មទាំង ៣', en: '3 Universal Destructions' },
  { id: 'agganna', icon: '🌱', km: 'អគ្គញ្ញសូត្រ (កំណើតមនុស្ស)', en: 'Aggañña Sutta (Human Origins)' },
  { id: 'types', icon: '🪷', km: 'ប្រភេទនៃកប្ប', en: 'Classification of Kalpas' },
  { id: 'all', icon: '📜', km: 'បង្ហាញទាំងអស់', en: 'Show All' }
]

const mahakappaPhases = [
  {
    num: '១',
    icon: '🔥',
    titleKm: 'សំវដ្តកប្ប (កាលរលាយ)',
    titleEn: 'Saṃvaṭṭa-kappa (Dissolution)',
    pali: 'Saṃvaṭṭa-kappa',
    descKm: 'កាលវេលាដែលចក្រវាឡកំពុងត្រូវភ្លើង ទឹកអាស៊ីត ឬខ្យល់បំផ្លាញខ្ទេចខ្ទី។ គ្រប់រូបធាតុទាំងអស់រលាយបាត់បង់រូបរាង។',
    descEn: 'The period of dissolution when the cosmic system is incinerated, dissolved, or shattered.',
    statusKm: 'កំពុងរលាយបាត់បង់រូប',
    statusEn: 'Actively dissolving'
  },
  {
    num: '២',
    icon: '🌌',
    titleKm: 'សំវដ្តដ្ឋាយីកប្ប (កាលទទេស្អាត)',
    titleEn: 'Saṃvaṭṭaṭṭhāyī (Void Darkness)',
    pali: 'Saṃvaṭṭaṭṭhāyī-kappa',
    descKm: 'កាលវេលាដែលចក្រវាឡត្រូវរលាយអស់ គ្មានសល់អ្វីទាំងអស់ មានតែភាពងងឹតសូន្យសុង និងលំហទទេអាកាសដ៏ធំល្វឹងល្វើយ។',
    descEn: 'The cosmic resting state: an immense void of utter silence and darkness after destruction.',
    statusKm: 'លំហទទេស្អាត គ្មានភពផែនដី',
    statusEn: 'Cosmic void emptiness'
  },
  {
    num: '៣',
    icon: '✨',
    titleKm: 'វិវដ្តកប្ប (កាលកកើតឡើងវិញ)',
    titleEn: 'Vivaṭṭa-kappa (Reconstitution)',
    pali: 'Vivaṭṭa-kappa',
    descKm: 'មហាមេឃបង្អុរទឹកភ្លៀងធំបង្កើតជាទឹកកកក កកើតជាដី ភ្នំ និងចក្រវាឡឡើងវិញជាបណ្តើរៗ។',
    descEn: 'Cosmic clouds condense, primordial water solidifies into earth crust, realms and stars reform.',
    statusKm: 'កំពុងវិវត្តកកើតឡើងវិញ',
    statusEn: 'Reconstituting matter'
  },
  {
    num: '៤',
    icon: '🌍',
    titleKm: 'វិវដ្តដ្ឋាយីកប្ប (កាលតាំងនៅ)',
    titleEn: 'Vivaṭṭaṭṭhāyī (Habitable Era)',
    pali: 'Vivaṭṭaṭṭhāyī-kappa',
    descKm: 'កាលវេលាដែលភពផែនដីមានសត្វលោក និងមនុស្សរស់នៅប្រកបដោយស្ថិរភាព (ជាសម័យដែលយើងកំពុងរស់នៅសព្វថ្ងៃ)។',
    descEn: 'The stable habitable epoch where life thrives, civilizations rise, and Buddhas appear.',
    statusKm: 'សម័យកាលបច្ចុប្បន្នរបស់យើង',
    statusEn: 'Our current habitable era'
  }
]

const sevenSuns = [
  { num: '១', titleKm: 'ព្រះអាទិត្យទី ១', titleEn: 'First Sun', descKm: 'កម្ដៅឡើងខ្ពស់ គ្មានភ្លៀងធ្លាក់ រុក្ខជាតិតូចតាច ស្មៅ និងព្រៃឈើស្លាប់ក្រៀមស្វិត។', descEn: 'Severe drought, no rain; grass and vegetation wither away.' },
  { num: '២', titleKm: 'ព្រះអាទិត្យទី ២', titleEn: 'Second Sun', descKm: 'ព្រះអាទិត្យទី ២ រះឡើង គ្មានយប់ថ្ងៃ ស្ទឹង អូរ បឹងតូចៗ រីងស្ងួតអស់គ្មានសល់។', descEn: 'Day and night vanish; streams, small rivulets, and ponds evaporate.' },
  { num: '៣', titleKm: 'ព្រះអាទិត្យទី ៣', titleEn: 'Third Sun', descKm: 'មហានទីទាំង ៥ (គង្គា យមុនា សរភូ អចិរវតី មហី) រីងស្ងួតគ្មានសល់ទឹកមួយតំណក់។', descEn: 'The 5 great continental rivers dry up completely.' },
  { num: '៤', titleKm: 'ព្រះអាទិត្យទី ៤', titleEn: 'Fourth Sun', descKm: 'បឹងធំៗនៅជើងភ្នំហិមពាន្ត រួមទាំងបឹងអនោតត្ត រីងហួតហែងគ្មានសល់។', descEn: 'The great glacial lakes in the Himalayas dry up completely.' },
  { num: '៥', titleKm: 'ព្រះអាទិត្យទី ៥', titleEn: 'Fifth Sun', descKm: 'មហាសមុទ្រទាំងឡាយរីងស្ងួតជាបណ្តើរៗ រហូតសល់ទឹកមិនដល់មួយថ្នាំងដៃ។', descEn: 'The great oceans evaporate until not enough water wets a knuckle.' },
  { num: '៦', titleKm: 'ព្រះអាទិត្យទី ៦', titleEn: 'Sixth Sun', descKm: 'ផែនដី និងភ្នំព្រះសុមេរុ ចាប់ផ្តើមហុយផ្សែងខ្មួលខ្មាញ់ដូចគុកភ្លើងជាងស្មូនឆ្នាំង។', descEn: 'The earth crust and Mount Meru belch smoke like a kiln.' },
  { num: '៧', titleKm: 'ព្រះអាទិត្យទី ៧', titleEn: 'Seventh Sun', descKm: 'ផែនដីផ្ទុះឆេះជាសន្លឹកភ្លើងដ៏មហិមា កម្ទេចចក្រវាឡរាប់លាន ឆេះរាលដល់ព្រហ្មលោក! ផេះក៏គ្មានសល់!', descEn: 'The universe erupts into an inferno reaching the Brahma realm; zero ash remains!' }
]

const aggannaStages = [
  {
    step: '១',
    icon: '✨',
    titleKm: 'ពន្លឺស្វ័យប្រវត្តិនៃពួកព្រហ្ម (Self-Luminous Beings)',
    titleEn: 'Luminous Mind-Made Brahma Beings',
    pali: 'Sayamppabhā antalikkhacarā',
    descKm: 'ក្នុងកាលដែលផែនដីកកើតឡើងវិញ សត្វពីស្ថានអាភស្សរព្រហ្មបានចុះមកកើតលើផែនដី។ ពួកគេមានរូបកាយថ្លា មានពន្លឺរស្មីចេញពីរាងកាយ ហោះហើរក្នុងលំហអាកាស និងស៊ីបីតិ (សេចក្តីរីករាយ) ជាអាហារ គ្មានភេទប្រុសស្រីឡើយ។',
    descEn: 'Brahma beings descend from the radiant Ābhassara realm, floating through space with self-luminous bodies, nourished by sheer meditative bliss, genderless and free from hunger.',
    insightKm: 'មនុស្សដំបូងមិនមែនបង្កើតឡើងពីដីឥដ្ឋដោយព្រះអាទិទេពឡើយ តែជាការផ្លាស់ប្តូររូបភាពពីពួកព្រហ្ម។',
    insightEn: 'Human origins trace back to refined meditative beings descending from higher mental realms.'
  },
  {
    step: '២',
    icon: '🍯',
    titleKm: 'ការភ្លក់រសផែនដី & កំណើតនៃតណ្ហា (Tasting the Earth Sap)',
    titleEn: 'Tasting the Sweet Primordial Earth',
    pali: 'Rasapathavī pāturahosi',
    descKm: 'ផែនដីមានជាតិរសផ្អែមក្រអូបដូចទឹកឃ្មុំសុទ្ធ។ ព្រហ្មមួយអង្គមានចិត្តចង់ដឹង ក៏យកចុងម្រាមដៃទៅជ្រលក់ភ្លក់រសផែនដី។ រសជាតិនោះបានជ្រួតជ្រាបតាមសរសៃប្រសាទ កើតជាតណ្ហា (ការជាប់ជំពាក់ចិត្ត)។ ព្រហ្មឯទៀតក៏នាំគ្នាភ្លក់តាម។',
    descEn: 'The earth crust condenses with a sweet, fragrant essence resembling pure honey. Driven by curiosity, a being tastes it with a fingertip. Craving penetrates their consciousness, and others follow.',
    insightKm: 'តណ្ហា (សេចក្តីស្រេកឃ្លាន) គឺជាចំណុចចាប់ផ្តើមនៃការធ្លាក់ចុះនៃចិត្ត និងរូបកាយ។',
    insightEn: 'Sensory craving (Taṇhā) initiates the degradation of physical form and consciousness.'
  },
  {
    step: '៣',
    icon: '🌑',
    titleKm: 'ការបាត់បង់រស្មី & ការកើតព្រះអាទិត្យ-ព្រះចន្ទ (Loss of Radiance)',
    titleEn: 'Loss of Luminance & Dawn of Sun/Moon',
    pali: 'Suriya-Candimā pāturhesuṃ',
    descKm: 'នៅពេលតណ្ហាកាន់តែក្រាស់ រស្មីក្នុងខ្លួនរបស់ពួកគេក៏រលត់បាត់ទៅ ធ្វើឱ្យពិភពលោកធ្លាក់ក្នុងភាពងងឹត។ ដោយសារកម្មនៃសត្វលោក ព្រះចន្ទ ព្រះអាទិត្យ ផ្កាយ យប់ថ្ងៃ និងរដូវកាលក៏ចាប់ផ្តើមកើតឡើង។ រូបកាយចាប់ផ្តើមគ្រើមទៅៗ។',
    descEn: 'As craving solidifies, their inner radiance vanishes into darkness. In response to collective karma, the sun, moon, constellations, day, night, and seasons become manifest. Bodies become coarse.',
    insightKm: 'រូបរាងកាយផ្លាស់ប្តូរទៅតាមចំណីអាហារ និងគុណភាពនៃចិត្តគំនិត។',
    insightEn: 'Gross food transforms radiant subtle bodies into dense biological matter.'
  },
  {
    step: '៤',
    icon: '👥',
    titleKm: 'ការកើតភេទប្រុស-ស្រី & គ្រួសារ (Emergence of Gender & Sex)',
    titleEn: 'Gender Differentiation & Attraction',
    pali: 'Itthiliṅgañca purisaliṅgañca',
    descKm: 'រូបកាយរបស់មនុស្សចាប់ផ្តើមបែកចែកច្បាស់លាស់៖ អ្នកខ្លះមានលក្ខណៈជាស្ត្រី អ្នកខ្លះជាបុរស។ នៅពេលសម្លឹងមើលគ្នាយូរៗទៅ ក៏កើតតម្រេកកាមគុណ រួចរួមមេត្រីជាមួយគ្នា។ មនុស្សដទៃទៀតឃើញហើយ បានតិះដៀល និងគប់ដីដាក់ ទើបពួកគេនាំគ្នាសង់ផ្ទះបាំងដើម្បីលាក់បាំង។',
    descEn: 'Physical characteristics diverge into male and female faculties. Prolonged gaze sparks sexual desire, leading to cohabitation. Disapproving onlookers mock them, prompting them to build houses for privacy.',
    insightKm: 'ស្ថាប័នគ្រួសារ និងលំនៅឋានដំបូង កើតឡើងពីសេចក្តីអៀនខ្មាស និងតណ្ហាកាមគុណ។',
    insightEn: 'The institution of domestic housing evolved directly to conceal sexual intimacy.'
  },
  {
    step: '៥',
    icon: '🌾',
    titleKm: 'ការប្រមូលស្តុកស្រូវ & កម្មសិទ្ធិឯកជន (Hoarding & Private Property)',
    titleEn: 'Hoarding Wild Rice & Private Property',
    pali: 'Sālimaggahuṃ sannidhiṃ kariṃsu',
    descKm: 'ដើមឡើយ ស្រូវសាលីដុះឯកឯង គ្មានកន្ទក់ គ្មានអង្កាម ច្រូតពេលព្រឹក ល្ងាចដុះឡើងវិញ។ ក្រោយមក មានមនុស្សខ្ជិល ចាប់ផ្តើមច្រូតស្រូវស្តុកទុកច្រើនថ្ងៃ។ ស្រូវក៏ចាប់ផ្តើមមានអង្កាម និងឈប់ដុះឡើងវិញឯកឯង។ មនុស្សក៏នាំគ្នាបោះបង្គោលព្រំដែនដី ចែកស្រែគ្នាជាកម្មសិទ្ធិឯកជន។',
    descEn: 'Originally, fragrant hull-less rice grew spontaneously. An indolent person began hoarding portions for multiple days. The wild rice ceased auto-regrowing. Consequently, humans erected fences to demarcate private land.',
    insightKm: 'ភាពខ្ជិលច្រអូស និងការស្តុកទុក បានបង្កើតឱ្យមានកម្មសិទ្ធិឯកជន និងការខ្វះខាតធនធាន។',
    insightEn: 'Hoarding created scarcity, which birthed the concept of private property and land boundaries.'
  },
  {
    step: '៦',
    icon: '👑',
    titleKm: 'ការលួច & ការបោះឆ្នោតជ្រើសរើសមេដឹកនាំ «មហាសម្មត» (Social Contract)',
    titleEn: 'The First Democratic Social Contract (Mahāsammata)',
    pali: 'Mahājana-sammato ti Mahāsammato',
    descKm: 'នៅពេលមានដីស្រែរៀងៗខ្លួន មនុស្សម្នាក់បានលួចស្រូវរបស់អ្នកដទៃ បង្កឱ្យមានការឈ្លោះប្រកែក និងហិង្សា។ មនុស្សទាំងអស់ក៏បានប្រជុំគ្នា បោះឆ្នោតជ្រើសរើសបុរសម្នាក់ដែលមានប្រាជ្ញា រូបសម្បត្តិល្អ និងយុត្តិធម៌ ឱ្យធ្វើជាអ្នកកាត់សេចក្តី និងការពារច្បាប់ ដោយប្រជាជនព្រមបង់ចំណែកស្រូវជាពន្ធ (ស្តេចមហាសម្មត)។',
    descEn: 'Boundary violations sparked theft, deceit, and violence. The community assembled and democratically elected the wisest, most righteous individual to enforce justice and resolve disputes, compensated with a portion of their rice harvest (King Mahāsammata).',
    insightKm: 'ប្រភពដើមនៃរដ្ឋ និងស្តេច គឺកើតចេញពីការព្រមព្រៀងគ្នារបស់ប្រជាជន (Social Contract) មិនមែនកើតពីទេវតាប្រទានឡើយ។',
    insightEn: 'The State and governance originate from a popular democratic social contract, not divine right!'
  }
]
</script>
