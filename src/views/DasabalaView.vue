<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🦁 {{ t('មជ្ឈិមនិកាយ មូលបណ្ណាសក · មហាសីហនាទសូត្រ', 'Majjhima Nikāya 12 · Mahāsīhanāda Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('ទសពលញាណ ១០ ៖ កម្លាំងប្រាជ្ញាកំពូលនៃព្រះសម្មាសម្ពុទ្ធ', 'Dasabala 10: The Ten Intellectual Powers of a Buddha') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ទសពលញាណ គឺជាកម្លាំងប្រាជ្ញាដឹងច្បាស់ ១០ យ៉ាង ដែលជាកម្មសិទ្ធិផ្តាច់មុខរបស់ព្រះសម្មាសម្ពុទ្ធ។ ដោយអាស្រ័យនូវកម្លាំងទាំងនេះហើយ ទើបព្រះអង្គទ្រង់បន្លឺនូវ «សីហនាទ» (សំឡេងស្រែកសន្ធប់ដូចស្តេចរាជសីហ៍) ក្នុងកណ្តាលបរិស័ទទាំង ៨ ដោយឥតមានសេចក្ដីតក់ស្លុត ឬញាប់ញ័រឡើយ។',
            'Dasabala denotes the 10 unique intellectual powers possessed exclusively by a Supremely Enlightened Buddha. Endowed with these faculties, the Tathāgata roars His lion’s roar fearlessly in any assembly and sets rolling the supreme Wheel of Dhamma.'
          ) }}
        </p>
      </div>
    </section>

    <!-- Lion's Roar Accent Banner -->
    <div class="card-paper p-5 border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="space-y-1 text-center sm:text-left">
          <span class="text-xs font-bold uppercase tracking-wider" :style="{ color: 'var(--accent)' }">
            {{ t('សីហនាទ ៖ សំឡេងបន្លឺនៃរាជសីហ៍', 'The Incomparable Lion’s Roar') }}
          </span>
          <h3 class="font-bold text-base" :style="{ color: 'var(--ink)' }">
            {{ t('គ្មាននរណាម្នាក់ក្នុងលោកអាចបង្វែរ ឬទម្លាក់ព្រះពុទ្ធបានឡើយ', 'No One in the Cosmos Can Refute the Tathāgata') }}
          </h3>
          <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
            {{ t('ព្រះអង្គដឹងច្បាស់នូវហេតុ ផល និស្ស័យ និងដំណើរចិត្តរបស់សត្វលោកទាំងអស់ ដោយគ្មានការភាន់ច្រឡំ។', 'The Buddha perceives causes, karmic ripening, and psychological inclinations across all beings with unerring certainty.') }}
          </p>
        </div>
        <div class="flex items-center gap-1.5 flex-wrap justify-center shrink-0">
          <div v-for="(b, bIdx) in dasabalaList" :key="b.id"
               class="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs border cursor-pointer transition-transform hover:scale-110"
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

    <!-- TAB 1: 10 Powers Grid -->
    <section v-if="activeTab === 'powers'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(b, idx) in dasabalaList"
          :key="b.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <div class="flex items-center gap-3">
                <span class="text-2xl p-2.5 rounded-xl flex items-center justify-center shrink-0"
                      :style="{ background: 'var(--bg-card-2)' }">
                  {{ b.icon }}
                </span>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                          :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                      {{ t('កម្លាំងទី', 'Power') }} {{ khNum(idx + 1) }}
                    </span>
                    <span class="text-xs font-mono" :style="{ color: 'var(--ink-faint)' }">
                      {{ b.pali }}
                    </span>
                  </div>
                  <h3 class="font-bold text-base sm:text-lg mt-0.5" :style="{ color: 'var(--ink)' }">
                    {{ t(b.titleK, b.titleE) }}
                  </h3>
                </div>
              </div>
            </div>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(b.shortDescK, b.shortDescE) }}
            </p>

            <div class="p-3 rounded-xl mb-4 text-xs" :style="{ background: 'var(--bg-card-2)' }">
              <strong class="block mb-0.5" :style="{ color: 'var(--accent)' }">{{ t('ការដឹងជាក់ស្ដែង៖', 'Actual Perception:') }}</strong>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(b.applicationK, b.applicationE) }}</p>
            </div>
          </div>

          <div>
            <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold"
                 :style="{ borderColor: 'var(--border)', color: 'var(--accent)' }">
              <span>{{ t('អានអត្ថបទព្រះសូត្រពិស្តារ', 'Read Full Sutta Text') }}</span>
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
                <!-- Canonical Sutta Verse -->
                <div class="p-3.5 rounded-xl border-l-4 font-serif text-xs leading-relaxed"
                     :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
                  <p class="italic mb-1 font-bold">« {{ b.suttaPali }} »</p>
                  <p class="text-xs opacity-80">— {{ t(b.suttaK, b.suttaE) }}</p>
                </div>

                <!-- Detailed Explanation -->
                <div class="space-y-1.5">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>📖</span>
                    <span>{{ t('អត្ថន័យតាមគម្ពីរអដ្ឋកថា', 'Commentarial Deep Meaning') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(b.fullDescK, b.fullDescE) }}
                  </p>
                </div>

                <!-- Teaching Significance -->
                <div class="p-3.5 rounded-xl border space-y-1.5"
                     :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>🌟</span>
                    <span>{{ t('សារៈសំខាន់ក្នុងការប្រោសសត្វលោក', 'Compassionate Teaching Power') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
                    {{ t(b.significanceK, b.significanceE) }}
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

    <!-- TAB 2: Vesārajja 4 (4 Grounds of Self-Confidence) -->
    <section v-if="activeTab === 'vesarajja'" class="space-y-4">
      <div class="card-paper p-6 space-y-3">
        <h2 class="text-lg sm:text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('ចតុវេសារជ្ជញាណ ៤ ៖ ភាពក្លាហានឥតញាប់ញ័រ', 'Catu-Vesārajja: The 4 Grounds of Absolute Self-Confidence') }}
        </h2>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ព្រះពុទ្ធជាម្ចាស់ទ្រង់មានសេចក្ដីក្លាហានឥតភ័យខ្លាចចំពោះមុខសមណៈ ព្រាហ្មណ៍ ទេវតា មារ ឬព្រហ្ម ដោយសារតែព្រះអង្គមានញាណជឿជាក់លើព្រះអង្គឯង ៤ ប្រការ៖',
            'Endowed with these 4 supreme confidences, the Buddha dwells in absolute fearlessness before any recluse, priest, mara, or cosmic deity:'
          ) }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="(v, vIdx) in vesarajjaList" :key="vIdx"
             class="card-paper p-5 border space-y-2.5"
             :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
          <div class="flex items-center gap-3">
            <span class="text-3xl">{{ v.icon }}</span>
            <div>
              <span class="text-xs font-mono font-bold" :style="{ color: 'var(--accent)' }">
                {{ t('វេសារជ្ជៈទី', 'Confidence') }} {{ khNum(vIdx + 1) }}
              </span>
              <h4 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
                {{ t(v.titleK, v.titleE) }}
              </h4>
            </div>
          </div>
          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(v.descK, v.descE) }}
          </p>
          <div class="p-2.5 rounded-lg text-xs italic font-serif"
               :style="{ background: 'var(--accent-soft)', color: 'var(--ink)' }">
            « {{ t(v.challengeK, v.challengeE) }} »
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

const activeTab = ref('powers')
const expandedId = ref(null)
function toggleExpand(id) { expandedId.value = expandedId.value === id ? null : id }

const tabs = [
  { id: 'powers', icon: '🦁', titleK: 'ទសពលញាណទាំង ១០', titleE: 'The 10 Powers' },
  { id: 'vesarajja', icon: '🛡️', titleK: 'ចតុវេសារជ្ជញាណ ៤', titleE: '4 Confidences' }
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

const dasabalaList = [
  {
    id: 'thanathana',
    icon: '⚖️',
    titleK: 'ឋានាឋានញាណ',
    titleE: 'Knowledge of the Possible & Impossible',
    pali: 'Ṭhānāṭhāna-ñāṇa',
    shortDescK: 'ញាណដឹងច្បាស់នូវអ្វីដែលអាចទៅរួច (ឋានៈ) និងអ្វីដែលមិនអាចទៅរួចជាដាច់ខាត (អឋានៈ) តាមសច្ចភាពនៃធម្មជាតិ។',
    shortDescE: 'Unerring knowledge of what is possible and what is strictly impossible according to cosmic law.',
    applicationK: 'ដឹងថា អំពើអាក្រក់មិនអាចផ្ដល់ផលជាសុខបានឡើយ ហើយព្រះពុទ្ធពីរអង្គមិនអាចកើតឡើងដំណាលគ្នាក្នុងចក្រវាលតែមួយឡើយ។',
    applicationE: 'Knowing that bad deeds cannot bear sweet fruits, and two supreme Buddhas cannot co-arise simultaneously in one cosmos.',
    suttaPali: 'Idha tathāgato ṭhānañca ṭhānato aṭṭhānañca aṭṭhānato yathābhūtaṁ pajānāti...',
    suttaK: 'ព្រះតថាគតក្នុងសាសនានេះ រមែងដឹងនូវហេតុថាជាហេតុ និងមិនមែនហេតុថាមិនមែនហេតុ តាមពិត...',
    suttaE: 'Here the Tathāgata understands as it actually is the possible as possible and the impossible as impossible.',
    fullDescK: 'ញាណនេះជាខែលការពារមិនឱ្យធ្លាក់ចូលក្នុងមិច្ឆាទិដ្ឋិ ដូចជាជំនឿថាព្រះអាទិទេពអាចជួយលាងបាបឱ្យមនុស្ស ឬការជឿថាមនុស្សអាចរួចទុក្ខដោយការលោតចូលភ្លើង។ ព្រះពុទ្ធដឹងច្បាស់នូវដែនកំណត់ និងច្បាប់ធម្មជាតិទាំងស្រុង។',
    fullDescE: 'This power immunizes against superstitions like divine sin-forgiveness or self-mortification salvation, establishing the immutable laws of cause and effect.',
    significanceK: 'ជួយឱ្យព្រះពុទ្ធឆ្លើយរាល់សំណួរទស្សនវិជ្ជាបានយ៉ាងឥតទាល់ច្រក និងពន្យល់សច្ចធម៌បានយ៉ាងច្បាស់លាស់។',
    significanceE: 'Empowers the Buddha to resolve metaphysical paradoxes with flawless deductive clarity.'
  },
  {
    id: 'kammavipaka',
    icon: '🔄',
    titleK: 'កម្មវិបាកញាណ',
    titleE: 'Knowledge of the Ripening of Action',
    pali: 'Kammavipāka-ñāṇa',
    shortDescK: 'ញាណដឹងច្បាស់នូវការផ្ដល់ផលនៃកម្ម អតីត អនាគត បច្ចុប្បន្ន តាមហេតុ និងបច្ច័យយ៉ាងល្អិតល្អន់។',
    shortDescE: 'Direct comprehension of the ripening of actions across past, present, and future according to causes and conditions.',
    applicationK: 'ដឹងថាហេតុអ្វីបានជាមនុស្សខ្លះធ្វើល្អតែជួបទុក្ខសិន (កម្មចាស់រារាំង) និងហេតុអ្វីមនុស្សខ្លះធ្វើអាក្រក់តែនៅមានបាន (បុណ្យចាស់មិនទាន់អស់)។',
    applicationE: 'Understanding why good people sometimes face temporary hardship while evil people appear prosperous.',
    suttaPali: 'Atītānāgatapaccuppannānaṁ kammasamādānānaṁ ṭhānaso hetuso vipākaṁ yathābhūtaṁ pajānāti...',
    suttaK: 'រមែងដឹងនូវវិបាកនៃការប្រកាន់យកកម្មទាំងឡាយ ទាំងអតីត អនាគត និងបច្ចុប្បន្ន តាមហេតុ និងបច្ច័យ...',
    suttaE: 'He understands as it actually is the result of past, future, and present karmic volitions by cause and conditions.',
    fullDescK: 'កម្មវិបាក ជារឿងអចិន្តេយ្យ (ហួសពីគំនិតមនុស្សសាមញ្ញ) មានតែព្រះពុទ្ធមួយព្រះអង្គគត់ដែលអាចដឹងខ្សែចង្វាក់នៃកម្មតាំងពីរាប់សែនជាតិយ៉ាងច្បាស់លាស់។',
    fullDescE: 'Karmic mechanics are incomprehensible (acinteyya) to ordinary mortals; only a Buddha traces the multi-lifetime tapestry of volition.',
    significanceK: 'ជួយដោះស្រាយវិប្បដិសារី និងដឹកនាំមនុស្សឱ្យជឿជាក់លើអំពើល្អដោយឥតរារែក។',
    significanceE: 'Installs unwavering ethical conviction that every wholesome deed counts.'
  },
  {
    id: 'sabbatthagamini',
    icon: '🗺️',
    titleK: 'សព្វត្ថគាមិនីបដិបទាញាណ',
    titleE: 'Knowledge of Ways to All Destinations',
    pali: 'Sabbatthagāminī-paṭipadā-ñāṇa',
    shortDescK: 'ញាណដឹងច្បាស់នូវផ្លូវបដិបត្តិដែលនាំទៅកាន់គ្រប់ភពទាំងអស់ តាំងពីនរក រហូតដល់ព្រះនិព្វាន។',
    shortDescE: 'Knowledge of the practices leading to all destinations: lower realms, human, celestial spheres, or Nibbāna.',
    applicationK: 'ដឹងថាការប្រព្រឹត្តបែបណាធ្លាក់នរក ប្រព្រឹត្តបែបណាកើតជាសត្វ ធ្វើទានសីលបែបណាឡើងសួគ៌ និងចម្រើនអដ្ឋង្គិកមគ្គបែបណាសម្រេចនិព្វាន។',
    applicationE: 'Knowing exact roadmaps: cruelty leads to hell; generosity to heaven; the Noble Eightfold Path to liberation.',
    suttaPali: 'Sabbatthagāminiṁ paṭipadaṁ yathābhūtaṁ pajānāti...',
    suttaK: 'រមែងដឹងនូវបដិបទាដែលនាំទៅកាន់ទីទាំងពួង តាមពិត...',
    suttaE: 'He understands as it actually is the way leading to all realms and destinations.',
    fullDescK: 'ដូចអ្នកស្គាល់ផែនទីយ៉ាងច្បាស់ ព្រះពុទ្ធដឹងថារាល់គំនិត និងទង្វើរបស់បុគ្គលម្នាក់ៗកំពុងដឹកនាំពួកគេទៅកាន់ទីណា។',
    fullDescE: 'Like an expert cartographer, the Buddha sees precisely where each behavioral track deposits a traveler.',
    significanceK: 'អាចប្រាប់ផ្លូវកាត់ដ៏ខ្លីបំផុត និងសុវត្ថិភាពបំផុតដល់សត្វលោកដើម្បីរួចផុតទុក្ខ។',
    significanceE: 'Provides the most direct and safest navigational path to emancipation.'
  },
  {
    id: 'anekadhatu',
    icon: '🧪',
    titleK: 'អនេកធាតុនានាធាតុញាណ',
    titleE: 'Knowledge of Many & Diverse Elements',
    pali: 'Anekadhātu-nānādhātu-ñāṇa',
    shortDescK: 'ញាណដឹងច្បាស់នូវធាតុដ៏ច្រើន និងធាតុប្លែកៗគ្នាក្នុងលោក (ធាតុ ១៨, ធាតុ ៤, អាយតនៈ, ឥន្ទ្រិយ)។',
    shortDescE: 'Knowledge of the world composed of manifold and diverse elements: the 18 Dhātus, physical bases, and cosmic forces.',
    applicationK: 'ដឹងច្បាស់ពីធាតុដី ទឹក ភ្លើង ខ្យល់ វិញ្ញាណធាតុ និងអាកាសធាតុ ព្រមទាំងការប្រជុំគ្នានៃធាតុដែលគ្មានព្រលឹងអមតៈ។',
    applicationE: 'Discerning that all physical and mental phenomena are mere combinations of impersonal elements without a master-soul.',
    suttaPali: 'Anekadhātunānādhātulokaṁ yathābhūtaṁ pajānāti...',
    suttaK: 'រមែងដឹងនូវលោកដែលមានធាតុច្រើន និងមានធាតុផ្សេងៗគ្នា តាមពិត...',
    suttaE: 'He understands as it actually is the world with its many and diverse elements.',
    fullDescK: 'ញាណនេះជាមូលដ្ឋាននៃការបង្រៀនអនត្តា (Non-self)។ ពេលពិនិត្យឃើញធាតុបែកខ្ញែកគ្នា មនុស្សនឹងលែងប្រកាន់ថា «នេះជារបស់ខ្ញុំ នេះជាខ្ញុំ»។',
    fullDescE: 'The foundation for deconstructing the illusion of self, revealing reality as dynamic elemental interactions.',
    significanceK: 'ជួយរំលត់អត្តានុទិដ្ឋិ (ការយល់ច្រឡំថាមានខ្លួនឯងរឹងមាំ)។',
    significanceE: 'Dissolves identity view and reification of ego.'
  },
  {
    id: 'nanadhimuttika',
    icon: '🧭',
    titleK: 'នានាធិមុត្តិកញាណ',
    titleE: 'Knowledge of Diverse Dispositions',
    pali: 'Nānādhimuttika-ñāṇa',
    shortDescK: 'ញាណដឹងច្បាស់នូវទំនោរ ចំណង់ ចរិត និងចេតនាប្លែកៗគ្នារបស់សត្វលោក។',
    shortDescE: 'Unerring insight into the diverse inclinations, spiritual aptitudes, and motivations of different individuals.',
    applicationK: 'ដឹងថាបុគ្គលខ្លះមានចំណង់ថោកទាបចូលចិត្តបាប រីឯបុគ្គលខ្លះមានចំណង់ខ្ពង់ខ្ពស់ចូលចិត្តធម៌ មិនអាចប្រៀបធៀបគ្នាបានឡើយ។',
    applicationE: 'Recognizing that beings are drawn to matching environments—the coarse to vice, the noble to virtue.',
    suttaPali: 'Sattānaṁ nānādhimuttikataṁ yathābhūtaṁ pajānāti...',
    suttaK: 'រមែងដឹងនូវអធ្យាស្រ័យផ្សេងៗគ្នារបស់ពួកសត្វ តាមពិត...',
    suttaE: 'He understands as it actually is the diverse inclinations of beings.',
    fullDescK: 'សត្វលោកមានចំណូលចិត្តខុសគ្នា ដូចសត្វបក្សីចូលចិត្តលើមេឃ សត្វត្រីចូលចិត្តក្នុងទឹក។ ព្រះពុទ្ធមិនដែលបង្ខំមនុស្សឱ្យចូលចិត្តរឿងដូចគ្នាឡើយ តែទ្រង់បត់បែនការបង្រៀនឱ្យស្របនឹងទំនោរល្អរបស់ពួកគេ។',
    fullDescE: 'Recognizing natural temperaments, the Buddha never enforced one-size-fits-all dogmas, tailoring pedagogy harmoniously.',
    significanceK: 'ការបង្រៀនចំចំណុច និងធ្វើឱ្យអ្នកស្តាប់មានអារម្មណ៍ជ្រះថ្លាតាមបែបបទរៀងៗខ្លួន។',
    significanceE: 'Ensures personalized, highly resonant communication.'
  },
  {
    id: 'indriyaparopariyatta',
    icon: '🌱',
    titleK: 'ឥន្ទ្រិយបvariableរោបរិយត្តញាណ',
    titleE: 'Knowledge of Maturity of Faculties',
    pali: 'Indriyaparopariyatta-ñāṇa',
    shortDescK: 'ញាណដឹងច្បាស់ពីកម្រិតនៃឥន្ទ្រិយ ៥ (សទ្ធា វីរិយៈ សតិ សមាធិ បញ្ញា) របស់សត្វលោក ថាចាស់ទុំ ឬនៅខ្ចី។',
    shortDescE: 'Knowledge of the spiritual faculties (faith, energy, mindfulness, concentration, wisdom) in others—whether keen or dull.',
    applicationK: 'ដឹងថាពេលណាគួរទេសនាធម៌កម្រិតណា ដូចផ្កាឈូក ៤ ពួក ដែលខ្លះរីកក្នុងថ្ងៃនេះ ខ្លះត្រូវរង់ចាំថ្ងៃស្អែក។',
    applicationE: 'Diagnosing lotus stages: who will blossom today upon hearing one stanza, and who requires patient nurturing.',
    suttaPali: 'Parasattānaṁ parapuggalānaṁ indriyaparopariyattaṁ yathābhūtaṁ pajānāti...',
    suttaK: 'រមែងដឹងនូវការចាស់ និងខ្ចីនៃឥន្ទ្រិយទាំងឡាយ របស់សត្វដទៃ បុគ្គលដទៃ តាមពិត...',
    suttaE: 'He understands as it actually is the state of spiritual faculties in other beings.',
    fullDescK: 'នេះជាញាណដែលធ្វើឱ្យព្រះពុទ្ធជា «បរមគ្រូ» ដ៏ពិតប្រាកដ។ ទ្រង់ដឹងថាពេលណាអង្គុលិមាលទុំជោរ ពេលណាពាហិយៈត្រៀមខ្លួនរួចរាល់ ធ្វើឱ្យការទេសនាមានប្រសិទ្ធភាព ១០០%។',
    fullDescE: 'The supreme badge of pedagogical mastery: knowing the exact second Aṅgulimāla or Bāhiya reached spiritual ripeness.',
    significanceK: 'មិនខាតពេលបង្រៀនធម៌ពិបាកដល់អ្នកមិនទាន់យល់ និងមិនទុកឱ្យអ្នកមាននិស្ស័យខកខានការត្រាស់ដឹង។',
    significanceE: 'Zero wasted effort; perfect timing for spiritual breakthroughs.'
  },
  {
    id: 'jhanavimokkha',
    icon: '🧘',
    titleK: 'ឈានាទិសំកិលេសាទិញាណ',
    titleE: 'Knowledge of Contemplative States',
    pali: 'Jhānavimokkha-ñāṇa',
    shortDescK: 'ញាណដឹងច្បាស់នូវសេចក្ដីសៅហ្មង សេចក្ដីផូរផង់ និងការចូល-ចេញនៃឈាន វិមោក្ខ សមាធិ និងសមាបត្តិ។',
    shortDescE: 'Knowledge of corruption, purification, and emergence regarding Jhānas, liberations, and meditative attainments.',
    applicationK: 'ដឹងថាអ្នកបដិបត្តិកំពុងជាប់ជំពាក់លើឧបក្កិលេសនៃវិបស្សនាណា ឬសមាធិខុស (មិច្ឆាសមាធិ) បែបណា ដើម្បីជួយកែតម្រង់។',
    applicationE: 'Spotting subtle meditative corruptions like light attachment or dullness, guiding yogis into pure insight.',
    suttaPali: 'Jhānavimokkhasamādhisamāpattīnaṁ saṅkilesaṁ vodānaṁ vuṭṭhānaṁ yathābhūtaṁ pajānāti...',
    suttaK: 'រមែងដឹងនូវសេចក្ដីសៅហ្មង សេចក្ដីផូរផង់ និងការចេញ នៃឈាន វិមោក្ខ សមាធិ និងសមាបត្តិ...',
    suttaE: 'He understands as it actually is the defilement, cleansing, and emergence in regards to Jhānas and meditative states.',
    fullDescK: 'សមាធិមានកម្រិតជ្រៅណាស់ បើគ្មានគ្រូណែនាំត្រឹមត្រូវ អ្នកប្រតិបត្តិអាចយល់ច្រឡំថាខ្លួនសម្រេចព្រះនិព្វាន។ ព្រះពុទ្ធដឹងច្បាស់គ្រប់ដំណាក់កាលនៃចិត្តក្នុងសមាធិ។',
    fullDescE: 'Meditative states can be deceiving without an omniscient guide. The Buddha accurately maps every layer of absorption.',
    significanceK: 'ដឹកនាំសាវ័កឱ្យឆ្លងផុតការជាប់ជំពាក់លើសុខនៃឈាន ដើម្បីឈានទៅរកវិបស្សនាពិត។',
    significanceE: 'Prevents meditators from mistaking peaceful absorption for ultimate Nibbāna.'
  },
  {
    id: 'pubbenivasa-bala',
    icon: '⏳',
    titleK: 'បុព្វេនិវាសានុស្សតិញាណ',
    titleE: 'Buddha-Level Past Life Recollection',
    pali: 'Pubbenivāsānussati-ñāṇa',
    shortDescK: 'ញាណរឭកជាតិអតីតកាលរបស់ព្រះអង្គ និងសត្វលោកបានរាប់សែនកប្ប ដោយគ្មានដែនកំណត់ (វិសេសជាងសាវ័ក)។',
    shortDescE: 'Boundless past life recollection spanning infinite cosmic cycles without limitation, vastly exceeding disciples.',
    applicationK: 'ដឹងពីជាតិកំណើតដើមរបស់មនុស្សម្នាក់ៗ ថាធ្លាប់ជាអ្វី ធ្លាប់សាងបារមីជាមួយនរណា ដើម្បីលើកយកមកទេសនា។',
    applicationE: 'Recalling past interactions across eons to explain current karmic bonds and resolve disputes.',
    suttaPali: 'Anekavihitaṁ pubbenivāsaṁ anussarati, seyyathidaṁ ekam pi jātiṁ dve pi jātiyo...',
    suttaK: 'រមែងរឭកនូវជាតិដែលធ្លាប់នៅអាស្រ័យក្នុងកាលមុនជាច្រើនប្រការ...',
    suttaE: 'He recollects his manifold past lives without any spatial or temporal barrier.',
    fullDescK: 'ខណៈដែលព្រះសាវ័ករឭកជាតិបានកំណត់ត្រឹមមួយចំនួន (ដូចព្រះសារីបុត្តរឭកបាន ១ អសង្ខេយ្យ និងមួយសែនកប្ប) ព្រះពុទ្ធអាចរឭកបានគ្មានព្រំដែនឡើយ។',
    fullDescE: 'Disciples recall up to specific limits; the Buddha’s memory stretches back into infinite cosmic origins without restriction.',
    significanceK: 'ជាប្រភពនៃរឿងជាតក ៥៥០ ជាតិ ដែលជាមេរៀនអប់រំសីលធម៌ដ៏អស្ចារ្យ។',
    significanceE: 'The foundation for the 550 Jātaka moral parables.'
  },
  {
    id: 'dibbacakkhu-bala',
    icon: '👁️',
    titleK: 'ចុតូបបាតញាណ (ទិព្វចក្ខុ)',
    titleE: 'Buddha-Level Divine Eye',
    pali: 'Cutūpapāta-ñāṇa',
    shortDescK: 'ភ្នែកទិព្វដ៏បរិសុទ្ធទតឃើញចក្រវាលទាំងអស់ និងការស្លាប់កើតនៃសត្វលោកគ្រប់ទិសទីដោយឥតមានអ្វីបាំងបាន។',
    shortDescE: 'Divine clairvoyance perceiving all cosmic realms and the exact passing and reappearing of all beings.',
    applicationK: 'ទតមើលសត្វលោកដែលត្រូវប្រោសនៅរៀងរាល់ព្រឹកព្រលឹម (ពុទ្ធកិច្ចទី ១) ដើម្បីនិមន្តទៅជួយសង្គ្រោះ។',
    applicationE: 'Surveying the world in the early morning dawn to identify who is ready for spiritual awakening.',
    suttaPali: 'Dibbena cakkhunā visuddhena atikkantamānusakena satte passati cavamāne upapajjamāne...',
    suttaK: 'ដោយចក្ខុទិព្វដ៏បរិសុទ្ធ រមែងឃើញពួកសត្វដែលច្យុត និងចាប់កំណើត...',
    suttaE: 'With the purified divine eye, he sees beings passing away and being reborn according to karma.',
    fullDescK: 'រៀងរាល់ព្រលឹម ព្រះពុទ្ធតែងផ្សាយពន្លឺនៃញាណនេះពេញចក្រវាល ដើម្បីស្វែងរកបុគ្គលណាដែលមានឧបនិស្ស័យត្រូវត្រាស់ដឹង ទោះបីនៅឆ្ងាយរាប់រយយោជន៍ក៏ទ្រង់យាងទៅប្រោសដែរ។',
    fullDescE: 'Every dawn, the Buddha scans the cosmos with this radiant eye, seeking the one soul whose spiritual seed is ripe for liberation.',
    significanceK: 'ការសង្គ្រោះមនុស្សឱ្យរួចផុតពីការធ្លាក់នរក និងការជួបទុក្ខវេទនា។',
    significanceE: 'Active daily compassion in intercepting tragedies.'
  },
  {
    id: 'asavakkhaya-bala',
    icon: '🏆',
    titleK: 'អាសវក្ខយញាណ',
    titleE: 'Supreme Destruction of All Taints',
    pali: 'Āsavakkhaya-ñāṇa',
    shortDescK: 'ញាណដឹងច្បាស់នូវការអស់ទៅនៃអាសវកិលេស និងវាសនា (ទម្លាប់កិលេសសេសសល់) សម្រេចជាព្រះពុទ្ធបរមគ្រូ។',
    shortDescE: 'The complete destruction of all mental taints and habitual impressions (Vāsanā)—Supreme Omniscience.',
    applicationK: 'កម្ចាត់កិលេសទាំងស្រុង ព្រមទាំងលះបង់នូវកិរិយាទម្លាប់ចាស់ៗ (សូម្បីព្រះអរហន្តសាវ័កនៅសល់វាសនាកាយវិការ តែព្រះពុទ្ធលះគ្មានសល់)។',
    applicationE: 'Total eradication of both defilements and behavioral habits, displaying absolute behavioral perfection.',
    suttaPali: 'Āsavānaṁ khayā anāsavaṁ cetovimuttiṁ paññāvimuttiṁ diṭṭheva dhamme sayaṁ abhiññā...',
    suttaK: 'ដោយការអស់ទៅនៃអាសវៈទាំងឡាយ រមែងបានសម្រេចនូវចេតោវិមុត្តិ និងបញ្ញាវិមុត្តិ...',
    suttaE: 'Through the destruction of taints, he dwells in the taintless liberation of mind and wisdom.',
    fullDescK: 'ព្រះពុទ្ធទ្រង់ខុសពីព្រះអរហន្តដទៃ ត្រង់ថាព្រះអង្គបានត្រាស់ដឹងដោយខ្លួនឯងឥតមានគ្រូណែនាំ (សយម្ភូ) និងអាចបង្រៀនអ្នកដទៃឱ្យត្រាស់ដឹងតាមបានយ៉ាងបរិបូណ៌។',
    fullDescE: 'Unlike disciples, the Buddha realized awakening entirely unassisted (Sayambhū) and founded the Sasana for all humanity.',
    significanceK: 'ជាគ្រឹះនៃព្រះពុទ្ធសាសនាទាំងមូលដែលនៅគង់វង្សដល់សព្វថ្ងៃ។',
    significanceE: 'The indestructible cornerstone of the Buddha Dhamma.'
  }
]

const vesarajjaList = [
  {
    icon: '👑',
    titleK: '១. ជឿជាក់ថាព្រះអង្គបានត្រាស់ដឹងពិត',
    titleE: '1. Fully Enlightened (Sammāsambuddha)',
    descK: 'ព្រះអង្គមិនដែលខ្លាចការចោទប្រកាន់ថា «ព្រះអង្គមិនទាន់ត្រាស់ដឹងធម៌ទាំងនេះឡើយ» ព្រោះទ្រង់បានដឹងច្បាស់គ្រប់ធម៌ទាំងអស់។',
    descE: 'Unshakable conviction that He has fully awakened to all truths without omission.',
    challengeK: '«តថាគតមិនឃើញសមណៈ ឬទេវតាណាដែលអាចចោទតថាគតដោយធម៌ថា មិនទាន់ត្រាស់ដឹងឡើយ!»',
    challengeE: '“I see no recluse or deity who can justly accuse me of lacking complete awakening!”'
  },
  {
    icon: '💎',
    titleK: '២. ជឿជាក់ថាព្រះអង្គបានកម្ចាត់អាសវៈអស់ពិត',
    titleE: '2. Taints Completely Destroyed (Khīṇāsava)',
    descK: 'គ្មានអ្នកណាអាចចោទប្រកាន់ថាព្រះអង្គនៅមានកំហឹង លោភលន់ ឬវង្វេងស្មារតីបានឡើយ។',
    descE: 'Total purity: no being can charge the Buddha with lingering lust, malice, or ignorance.',
    challengeK: '«តថាគតមិនឃើញអ្នកណាអាចចោទថា អាសវៈទាំងនេះតថាគតមិនទាន់លះបង់អស់ឡើយ!»',
    challengeE: '“I see no one who can truthfully state that taints remain unextinguished in me!”'
  },
  {
    icon: '🚧',
    titleK: '៣. ជឿជាក់ថាធម៌ជាឧបសគ្គ ពិតជាឧបសគ្គមែន',
    titleE: '3. Obstructions Are Truly Obstructive',
    descK: 'អ្វីដែលព្រះអង្គបានត្រាស់ថាជាអន្តរាយិកធម៌ (ដូចជាកាមគុណ និងអកុសល) ពិតជារារាំងមគ្គផលពិតប្រាកដ។',
    descE: 'What the Buddha proclaimed as spiritual obstructions (sensual lust, ill will) are demonstrably fatal to insight.',
    challengeK: '«ធម៌ណាដែលតថាគតពោលថាជាឧបសគ្គ ធម៌នោះមិនអាចនាំឱ្យមានការរីកចម្រើនផ្លូវចិត្តបានឡើយ!»',
    challengeE: '“Those qualities I declared as perils are unmistakably perilous to liberation!”'
  },
  {
    icon: '🚪',
    titleK: '៤. ជឿជាក់ថាព្រះធម៌នាំចេញចាកទុក្ខពិត',
    titleE: '4. The Dhamma Leads to Complete Freedom',
    descK: 'អ្នកដែលប្រតិបត្តិតាមអរិយមគ្គ ពិតជានឹងបានរួចផុតពីសេចក្ដីទុក្ខទាំងស្រុង មិនដែលខុសបំណងឡើយ។',
    descE: 'Confidence that living by the Dhamma invariably delivers freedom from suffering without fail.',
    challengeK: '«ធម៌ដែលតថាគតសម្តែងហើយ រមែងនាំអ្នកប្រតិបត្តិតាមឱ្យអស់ទុក្ខជាប្រាកដ!»',
    challengeE: '“The Dhamma taught by me leads the practitioner to the complete destruction of suffering!”'
  }
]



function handleKeydown(e) {
  if (e.key === 'Escape' && selectedBala.value) {
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
