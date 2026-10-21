<script setup>
import { ref } from 'vue'

const activeTab = ref('compass') // 'compass' | 'sequence' | 'benefits'
const selectedDirection = ref(0)
const isPulsing = ref(false)

const directions = [
  {
    nameKm: 'ទិសបូព៌ា (ខាងកើត)',
    namePali: 'Puratthimāya disāya',
    short: 'កើត',
    angle: 0,
    gatha: 'Sabbe sattā puratthimāya disāya averā hontu, abyāpajjhā hontu, anīghā hontu, sukhī attānaṁ pariharantu.',
    kmTranslation: 'សូមឱ្យសព្វសត្វទាំងឡាយក្នុងទិសខាងកើត កុំមានពៀរនឹងគ្នា កុំមានសេចក្តីបៀតបៀនគ្នា កុំមានសេចក្តីទុក្ខកាយទុក្ខចិត្ត សូមបានដល់នូវសេចក្តីសុខ ថែរក្សាខ្លួនឱ្យបានសុខរៀងៗខ្លួនចុះ។',
    beings: 'មនុស្ស ទេវតា ព្រាហ្មណ៍ និងសព្វសត្វក្នុងទិសបូព៌ា'
  },
  {
    nameKm: 'ទិសអាគ្នេយ៍ (កើតត្បូង)',
    namePali: 'Puratthimāya anudisāya',
    short: 'អាគ្នេយ៍',
    angle: 45,
    gatha: 'Sabbe sattā puratthimāya anudisāya averā hontu, abyāpajjhā hontu...',
    kmTranslation: 'សូមឱ្យសព្វសត្វទាំងអស់ក្នុងទិសអាគ្នេយ៍ បានរួចផុតចាកទុក្ខភ័យទាំងពួង និងមានសន្តិភាពក្នុងចិត្ត។',
    beings: 'សត្វលោកតូចធំក្នុងទិសអាគ្នេយ៍'
  },
  {
    nameKm: 'ទិសទក្ខិណ (ខាងត្បូង)',
    namePali: 'Dakkhiṇāya disāya',
    short: 'ត្បូង',
    angle: 90,
    gatha: 'Sabbe sattā dakkhiṇāya disāya averā hontu, abyāpajjhā hontu, anīghā hontu, sukhī attānaṁ pariharantu.',
    kmTranslation: 'សូមឱ្យសព្វសត្វទាំងឡាយក្នុងទិសខាងត្បូង កុំមានសត្រូវ កុំមានកំហឹងក្រោធ មានក្តីស្រឡាញ់រាប់អានគ្នាទៅវិញទៅមក។',
    beings: 'សត្វលោកទាំងអស់ក្នុងទិសខាងត្បូង'
  },
  {
    nameKm: 'ទិសនិរតី (លិចត្បូង)',
    namePali: 'Dakkhiṇāya anudisāya',
    short: 'និរតី',
    angle: 135,
    gatha: 'Sabbe sattā dakkhiṇāya anudisāya averā hontu...',
    kmTranslation: 'សូមឱ្យសព្វសត្វទាំងឡាយក្នុងទិសនិរតី បានជួបប្រទះនូវសេចក្តីសុខស្ងប់ គ្មានការរំខានបៀតបៀន។',
    beings: 'សត្វលោកទាំងអស់ក្នុងទិសនិរតី'
  },
  {
    nameKm: 'ទិសបស្ចិម (ខាងលិច)',
    namePali: 'Pacchimāya disāya',
    short: 'លិច',
    angle: 180,
    gatha: 'Sabbe sattā pacchimāya disāya averā hontu, abyāpajjhā hontu, anīghā hontu, sukhī attānaṁ pariharantu.',
    kmTranslation: 'សូមឱ្យសព្វសត្វទាំងឡាយក្នុងទិសខាងលិច មានចិត្តជ្រះថ្លា ផុតចាកទុក្ខសោក រួចផុតពីគ្រោះកាចទាំងពួង។',
    beings: 'សត្វលោកទាំងអស់ក្នុងទិសខាងលិច'
  },
  {
    nameKm: 'ទិសពាយព្យ (លិចជើង)',
    namePali: 'Pacchimāya anudisāya',
    short: 'ពាយព្យ',
    angle: 225,
    gatha: 'Sabbe sattā pacchimāya anudisāya averā hontu...',
    kmTranslation: 'សូមឱ្យសព្វសត្វទាំងឡាយក្នុងទិសពាយព្យ មានសុខភាពល្អបរិបូរណ៍ មានសេចក្តីក្សេមក្សាន្ត។',
    beings: 'សត្វលោកទាំងអស់ក្នុងទិសពាយព្យ'
  },
  {
    nameKm: 'ទិសឧត្តរ (ខាងជើង)',
    namePali: 'Uttarāya disāya',
    short: 'ជើង',
    angle: 270,
    gatha: 'Sabbe sattā uttarāya disāya averā hontu, abyāpajjhā hontu, anīghā hontu, sukhī attānaṁ pariharantu.',
    kmTranslation: 'សូមឱ្យសព្វសត្វទាំងឡាយក្នុងទិសខាងជើង បានជួបតែសេចក្តីចម្រើន ផុតចាកការចងពៀរវេរា។',
    beings: 'សត្វលោកទាំងអស់ក្នុងទិសខាងជើង'
  },
  {
    nameKm: 'ទិសឦសាន (កើតជើង)',
    namePali: 'Uttarāya anudisāya',
    short: 'ឦសាន',
    angle: 315,
    gatha: 'Sabbe sattā uttarāya anudisāya averā hontu...',
    kmTranslation: 'សូមឱ្យសព្វសត្វទាំងឡាយក្នុងទិសឦសាន មានចិត្តត្រជាក់ដូចទឹកអម្រឹត រួមរស់ដោយសុខសាន្ត។',
    beings: 'សត្វលោកទាំងអស់ក្នុងទិសឦសាន'
  },
  {
    nameKm: 'ទិសខាងលើ (អាកាស)',
    namePali: 'Uparimāya disāya',
    short: 'លើ',
    angle: null,
    gatha: 'Sabbe sattā uparimāya disāya averā hontu, abyāpajjhā hontu, anīghā hontu, sukhī attānaṁ pariharantu.',
    kmTranslation: 'សូមឱ្យទេវតា ព្រហ្ម និងសត្វទាំងឡាយដែលឋិតនៅនាទីខាងលើ អាកាស និងស្ថានសួគ៌ បានដល់នូវបរមសុខជានិច្ចនិរន្តរ៍។',
    beings: 'ទេវតា ៦ ជាន់, រូបព្រហ្ម ១៦ ជាន់, អរូបព្រហ្ម ៤ ជាន់'
  },
  {
    nameKm: 'ទិសខាងក្រោម (បឋវី/ក្រោមដី)',
    namePali: 'Heṭṭhimāya disāya',
    short: 'ក្រោម',
    angle: null,
    gatha: 'Sabbe sattā heṭṭhimāya disāya averā hontu, abyāpajjhā hontu, anīghā hontu, sukhī attānaṁ pariharantu.',
    kmTranslation: 'សូមឱ្យសត្វទាំងឡាយដែលកំពុងរងទុក្ខក្នុងអបាយភូមិ នរក ប្រេត តិរច្ឆាន អសុរកាយ បានធូរស្រាលចាកទុក្ខវេទនា និងបានសុខ។',
    beings: 'សត្វនរក ប្រេត អសុរកាយ នាគ គ្រុឌ និងសត្វក្រោមដី'
  }
]

const sequenceSteps = [
  {
    step: 1,
    titleKm: '១. ផ្សាយដល់ខ្លួនឯងជាមុន (Attā)',
    pali: 'Ahaṁ sukhito homi, niddukkho homi, avero homi...',
    desc: 'មុននឹងស្រឡាញ់អ្នកដទៃ យើងត្រូវចេះស្រឡាញ់ និងអភ័យទោសឱ្យខ្លួនឯងជាមុនសិន។ បើខ្លួនឯងនៅតែក្តៅក្រហាយ មិនអាចចែករំលែកសេចក្តីសុខដល់អ្នកណាបានឡើយ។',
    phrase: '«សូមឱ្យខ្ញុំបានដល់នូវសេចក្តីសុខ ផុតចាកទុក្ខភ័យ កុំឱ្យមានពៀរ កុំឱ្យមានទុក្ខកាយទុក្ខចិត្ត សូមថែរក្សាខ្លួនឱ្យបានសុខជានិច្ច។»'
  },
  {
    step: 2,
    titleKm: '២. ផ្សាយដល់មនុស្សជាទីស្រឡាញ់ (Piya)',
    pali: 'Mātāpitu, ācariya, mitta...',
    desc: 'ផ្សាយដល់មាតាបិតា គ្រូឧបជ្ឈាយ៍ ញាតិសន្តាន និងមិត្តសម្លាញ់ដែលតែងតែជួយយកអាសា និងមានគុណបំណាច់ចំពោះយើង។',
    phrase: '«សូមឱ្យមាតាបិតា គ្រូបាអាចារ្យ និងមនុស្សជាទីស្រឡាញ់របស់ខ្ញុំ បានជួបប្រទះនូវសេចក្តីសុខ សុខភាពល្អ អាយុយឺនយូរ។»'
  },
  {
    step: 3,
    titleKm: '៣. ផ្សាយដល់មនុស្សកណ្តាលៗ (Majjhatta)',
    pali: 'Majjhatta puggala',
    desc: 'មនុស្សដែលយើងមិនស្គាល់ មិនស្រឡាញ់ ហើយក៏មិនស្អប់ (ដូចជាអ្នកដើរកាត់ផ្លូវ មនុស្សជុំវិញ)។ បណ្តុះចិត្តស្មើគ្នាចំពោះសត្វលោក។',
    phrase: '«សូមឱ្យមនុស្សទាំងអស់ដែលខ្ញុំបានជួបប្រទះ ទោះស្គាល់ក្តី មិនស្គាល់ក្តី បានជួបតែសេចក្តីសុខក្សេមក្សាន្ត។»'
  },
  {
    step: 4,
    titleKm: '៤. ផ្សាយដល់សត្រូវ ឬអ្នកដែលយើងធ្លាប់ខឹង (Verī - បំបែករបងចិត្ត!)',
    pali: 'Verī puggala / Sīmasambheda',
    desc: '⚠️ ចំណុចរបត់ធំបំផុតនៃមេត្តា! អភ័យទោសឱ្យអ្នកដែលធ្លាប់ធ្វើបាបយើង ធ្លាប់កុហក ឬប្រមាថយើង ដោយពិចារណាថាគេក៏ជាជនរងគ្រោះនៃកិលេសដែរ។',
    phrase: '«ខ្ញុំសូមអភ័យទោសចំពោះរាល់កំហុសទាំងអស់។ សូមឱ្យអ្នកដែលធ្លាប់មានពៀរនឹងខ្ញុំ បានរួចចាកសេចក្តីវង្វេង និងមានសេចក្តីសុខ។»'
  },
  {
    step: 5,
    titleKm: '៥. ផ្សាយដល់សព្វសត្វទាំងអស់គ្មានព្រំដែន (Sabbe Sattā)',
    pali: 'Sabbe sattā averā hontu...',
    desc: 'បំបែករបងចិត្ត (សីមាសម្ភេទ) ស្រឡាញ់សព្វសត្វទាំងអស់ក្នុងត្រៃភពស្មើៗគ្នា ដូចមាតាថែរក្សាកូនបង្កើតតែមួយគត់របស់ខ្លួន។',
    phrase: '«សូមឱ្យសព្វសត្វទាំងពួង គ្មានការបៀតបៀនគ្នា គ្មានការរើសអើង បានសេចក្តីស្ងប់សុខគ្រប់ៗគ្នា។»'
  }
]

const blessings = [
  { no: 1, pali: 'Sukhaṁ supati', km: 'ដេកលក់ជាសុខ', desc: 'គេងលក់ស្រួល គ្មានការរវើរវាយ គ្មានការតានតឹងក្នុងខួរក្បាល។' },
  { no: 2, pali: 'Sukhaṁ paṭibujjhati', km: 'ភ្ញាក់ឡើងជាសុខ', desc: 'ភ្ញាក់ឡើងដោយស្រស់ស្រាយ រីករាយ មិនមួម៉ៅ ឬធុញថប់។' },
  { no: 3, pali: 'Na pāpakaṁ supinaṁ passati', km: 'មិនយល់សប្តិអាក្រក់', desc: 'មិនដែលយល់សប្តិឃើញខ្មោចព្រាយ ឬការកាប់សម្លាប់ភ័យតក់ស្លុតឡើយ។' },
  { no: 4, pali: 'Manussānaṁ piyo hoti', km: 'ជាទីស្រឡាញ់នៃមនុស្សទាំងឡាយ', desc: 'មនុស្សជុំវិញខ្លួនតែងតែអាណិត ស្រឡាញ់ រាប់អាន និងចង់នៅក្បែរ។' },
  { no: 5, pali: 'Amanussānaṁ piyo hoti', km: 'ជាទីស្រឡាញ់នៃពួកអមនុស្ស', desc: 'ទេវតា ខ្មោច ព្រាយ បិសាច តែងតែជ្រះថ្លា មិនហ៊ានបៀតបៀនឡើយ។' },
  { no: 6, pali: 'Devatā rakkhanti', km: 'ទេវតាតែងតែតាមថែរក្សា', desc: 'មានទេវតាការពារដូចម្តាយថែរក្សាកូន ទៅណាមកណាមានសុវត្ថិភាព។' },
  { no: 7, pali: 'Nāsso aggi vā visaṁ vā satthaṁ vā kamati', km: 'ភ្លើង ពិស និងអាវុធមិនអាចបៀតបៀន', desc: 'កម្លាំងមេត្តាការពារមិនឱ្យគ្រោះថ្នាក់ពីភ្លើង ថ្នាំពុល ឬអាវុធមកប៉ះពាល់បាន។' },
  { no: 8, pali: 'Tuvaṭaṁ cittaṁ samādhiyati', km: 'ចិត្តឆាប់បានតម្កល់មាំក្នុងសមាធិ', desc: 'ពេលអង្គុយសមាធិ ចិត្តឆាប់ស្ងប់មូល មិនរាយមាយ។' },
  { no: 9, pali: 'Mukhavaṇṇo vippasīdati', km: 'សម្បុរមុខស្រស់ថ្លា ស្អាតបរិសុទ្ធ', desc: 'ទឹកមុខមានសិរីសួស្តី ភ្លឺថ្លាចេញពីខាងក្នុង មិនបាច់តុបតែងច្រើន។' },
  { no: 10, pali: 'Asammūḷho kālaṁ karoti', km: 'មិនវង្វេងស្មារតីពេលស្លាប់', desc: 'ពេលជិតផុតដង្ហើម មានសតិដឹងខ្លួនច្បាស់ មិនស្លន់ស្លោ ទៅកាន់សុគតិភព។' },
  { no: 11, pali: 'Brahmalokūpago hoti', km: 'កើតក្នុងព្រហ្មលោក', desc: 'បើមិនទាន់សម្រេចមគ្គផលទេ អានុភាពមេត្តានឹងនាំបដិសន្ធិទៅកើតក្នុងព្រហ្មលោក។' }
]

function triggerRadiate() {
  isPulsing.value = true
  playMettaBell()
  setTimeout(() => {
    isPulsing.value = false
  }, 3000)
}

function playMettaBell() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!AudioContext) return
    const ctx = new AudioContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(528, ctx.currentTime)
    gain.gain.setValueAtTime(0.4, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.5)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 3.5)
  } catch (e) {
    console.log(e)
  }
}
</script>

<template>
  <div class="w-full space-y-6 sm:space-y-8">
    <!-- Header -->
    <header class="text-center space-y-3">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-800 dark:text-rose-300 border border-rose-500/20">
        <span>🕊️</span>
        <span>ករណីយមេត្តសូត្រ • Universal Loving-Kindness</span>
      </div>

      <h1 class="text-2xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-rose-800 via-pink-700 to-amber-800 dark:from-rose-200 dark:via-pink-200 dark:to-amber-300 bg-clip-text text-transparent leading-snug">
        មេត្តាភាវនា ១០ ទិស និងអានិសង្ស ១១ ប្រការ
      </h1>

      <p class="text-xs sm:text-base text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
        ការផ្សាយរស្មីមេត្តាធំធេងគ្របដណ្តប់សព្វសត្វក្នុងលោកធាតុគ្មានព្រំដែន គ្មានពៀរវេរា ដើម្បីបណ្តុះបេះដូងត្រជាក់ និងសម្រេចអានិសង្សដ៏អស្ចារ្យ។
      </p>

      <!-- View Switcher Tabs -->
      <div class="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-2">
        <button
          @click="activeTab = 'compass'"
          :class="[
            'px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition',
            activeTab === 'compass'
              ? 'bg-rose-600 text-white shadow-sm'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
          ]"
        >
          🧭 រ៉ាដា ១០ ទិស
        </button>

        <button
          @click="activeTab = 'sequence'"
          :class="[
            'px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition',
            activeTab === 'sequence'
              ? 'bg-rose-600 text-white shadow-sm'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
          ]"
        >
          🪜 ៥ ដំណាក់កាល
        </button>

        <button
          @click="activeTab = 'benefits'"
          :class="[
            'px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition',
            activeTab === 'benefits'
              ? 'bg-rose-600 text-white shadow-sm'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
          ]"
        >
          ✨ អានិសង្ស ១១
        </button>
      </div>
    </header>

    <!-- TAB 1: 10 DIRECTIONS RADAR COMPASS -->
    <section v-if="activeTab === 'compass'" class="space-y-6">
      <div class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-sm space-y-5">
        <div class="text-center space-y-0.5">
          <h2 class="text-base sm:text-xl font-bold text-stone-900 dark:text-stone-100">
            រ៉ាដាផ្សាយមេត្តាទៅកាន់ទិសទាំង ១០
          </h2>
          <p class="text-[11px] sm:text-xs text-stone-500">ចុចជ្រើសរើសទិស ដើម្បីបញ្ជូនរលកមេត្តាចិត្ត និងសូត្រគាថា</p>
        </div>

        <!-- Direction Buttons Grid (2 cols mobile, 5 cols desktop) -->
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-2">
          <button
            v-for="(d, idx) in directions"
            :key="idx"
            @click="selectedDirection = idx; triggerRadiate()"
            :class="[
              'p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border text-center transition-all duration-150 flex flex-col items-center justify-center gap-0.5',
              selectedDirection === idx
                ? 'bg-rose-500/10 border-rose-500 text-rose-700 dark:text-rose-300 ring-2 ring-rose-500/50 shadow-xs scale-102 font-bold'
                : 'bg-stone-50 dark:bg-stone-800/50 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-100'
            ]"
          >
            <span class="text-xs font-bold">{{ d.short }}</span>
            <span class="text-[10px] sm:text-[11px] truncate max-w-full text-stone-500">{{ d.nameKm.split(' ')[0] }}</span>
          </button>
        </div>

        <!-- Radiate Animation Visualizer Card -->
        <div class="relative overflow-hidden p-4 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-rose-500/10 via-pink-500/5 to-transparent border border-rose-500/20 text-center space-y-3 sm:space-y-4">
          <!-- Pulsing Rings -->
          <div
            v-if="isPulsing"
            class="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div class="w-40 h-40 sm:w-60 sm:h-60 rounded-full bg-rose-500/20 animate-ping"></div>
          </div>

          <div class="space-y-0.5 relative z-10">
            <span class="text-3xl animate-bounce inline-block">💖</span>
            <h3 class="text-lg sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
              {{ directions[selectedDirection].nameKm }}
            </h3>
            <p class="text-[11px] sm:text-xs font-mono text-rose-600 dark:text-rose-400 italic">
              {{ directions[selectedDirection].namePali }}
            </p>
          </div>

          <!-- Pali Gatha -->
          <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm border border-stone-200/60 dark:border-stone-700/60 max-w-xl mx-auto space-y-1.5 text-left sm:text-center">
            <p class="text-xs sm:text-sm font-serif italic text-stone-800 dark:text-stone-200 font-semibold leading-relaxed">
              « {{ directions[selectedDirection].gatha }} »
            </p>
            <p class="text-[11px] sm:text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              {{ directions[selectedDirection].kmTranslation }}
            </p>
          </div>

          <!-- Addressed Beings -->
          <div class="text-[11px] sm:text-xs text-stone-500 flex items-center justify-center gap-1 flex-wrap">
            <span>គ្របដណ្តប់លើ៖</span>
            <strong class="text-stone-800 dark:text-stone-200 font-medium">{{ directions[selectedDirection].beings }}</strong>
          </div>

          <!-- Trigger Button -->
          <button
            @click="triggerRadiate"
            class="w-full sm:w-auto px-6 py-2.5 rounded-xl sm:rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-medium text-xs sm:text-sm shadow-sm transition active:scale-95 inline-flex items-center justify-center gap-1.5"
          >
            <span>🕊️</span>
            <span>ផ្សាយមេត្តាឥឡូវនេះ (Radiate Metta)</span>
          </button>
        </div>
      </div>
    </section>

    <!-- TAB 2: 5 SEQUENCE STEPS -->
    <section v-if="activeTab === 'sequence'" class="space-y-4">
      <div class="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-3.5 sm:p-4 text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
        <strong>💡 គោលការណ៍បំបែករបងចិត្ត (Sīmasambheda)៖</strong> ការចម្រើនមេត្តាត្រូវតែធ្វើតាមលំដាប់លំដោយ មិនអាចរំលងបានឡើយ។ ការផ្សាយដល់សត្រូវគឺជាដំណាក់កាលខ្ពស់បំផុត ដែលអាចរំលាយគំនុំ និងរារាំងមិនឱ្យចិត្តបង្កើតអកុសល។
      </div>

      <div class="grid grid-cols-1 gap-3 sm:gap-4">
        <div
          v-for="st in sequenceSteps"
          :key="st.step"
          class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2.5"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h3 class="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <span class="w-5 h-5 rounded-md bg-rose-500/15 text-rose-700 dark:text-rose-400 flex items-center justify-center text-xs font-bold">
                {{ st.step }}
              </span>
              <span>{{ st.titleKm }}</span>
            </h3>
            <span class="text-[11px] font-mono text-stone-400 italic">{{ st.pali }}</span>
          </div>

          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ st.desc }}
          </p>

          <div class="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-100 dark:border-stone-800 text-xs text-rose-800 dark:text-rose-300 italic font-serif leading-relaxed">
            {{ st.phrase }}
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 3: 11 BLESSINGS -->
    <section v-if="activeTab === 'benefits'" class="space-y-4">
      <div class="text-center space-y-0.5">
        <h2 class="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
          អានិសង្ស ១១ ប្រការនៃការចម្រើនមេត្តា
        </h2>
        <p class="text-xs text-stone-500">ស្រង់ចេញពី គម្ពីរអង្គុត្តរនិកាយ ឯកាទសកនិបាត (AN 11.16)</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div
          v-for="b in blessings"
          :key="b.no"
          class="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1.5 hover:border-rose-500/40 transition"
        >
          <div class="flex items-center justify-between">
            <span class="w-6 h-6 rounded-lg bg-rose-500/10 text-rose-700 dark:text-rose-400 flex items-center justify-center font-bold text-xs">
              {{ b.no }}
            </span>
            <span class="text-[10px] font-mono text-stone-400 italic">{{ b.pali }}</span>
          </div>

          <h3 class="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100">
            {{ b.km }}
          </h3>

          <p class="text-[11px] sm:text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
            {{ b.desc }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
