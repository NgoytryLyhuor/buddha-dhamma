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
  <div class="fade-up">
    <!-- Header -->
    <header class="text-center max-w-2xl mx-auto">
      <p class="chapter-label">{{ t('ករណីយមេត្តសូត្រ • Universal Loving-Kindness', 'Mettā Sutta • Universal Loving-Kindness') }}</p>
      <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
        {{ t('មេត្តាភាវនា ១០ ទិស និងអានិសង្ស ១១ ប្រការ', '10 Directions Mettā & 11 Blessings') }}
      </h2>
      <div class="ornament mt-4">&#9784;</div>
      <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ការផ្សាយរស្មីមេត្តាធំធេងគ្របដណ្តប់សព្វសត្វក្នុងលោកធាតុគ្មានព្រំដែន គ្មានពៀរវេរា ដើម្បីបណ្តុះបេះដូងត្រជាក់ និងសម្រេចអានិសង្សដ៏អស្ចារ្យ។', 'Radiating boundless loving-kindness to all beings in every direction without boundary or ill-will, cooling the heart and cultivating the 11 supreme blessings.') }}
      </p>

      <!-- View Switcher Tabs -->
      <div class="flex items-center gap-1.5 sm:gap-2 mt-6 flex-wrap justify-center">
        <button
          @click="activeTab = 'compass'"
          class="lang-pick px-3.5 py-1.5 text-xs font-semibold"
          :class="activeTab === 'compass' ? 'on' : ''"
        >
          🧭 {{ t('រ៉ាដា ១០ ទិស', '10 Directions Compass') }}
        </button>
        <button
          @click="activeTab = 'sequence'"
          class="lang-pick px-3.5 py-1.5 text-xs font-semibold"
          :class="activeTab === 'sequence' ? 'on' : ''"
        >
          🪜 {{ t('៥ ដំណាក់កាល', '5 Stages of Mettā') }}
        </button>
        <button
          @click="activeTab = 'benefits'"
          class="lang-pick px-3.5 py-1.5 text-xs font-semibold"
          :class="activeTab === 'benefits' ? 'on' : ''"
        >
          ✨ {{ t('អានិសង្ស ១១', '11 Blessings') }}
        </button>
      </div>
    </header>

    <!-- TAB 1: 10 DIRECTIONS RADAR COMPASS -->
    <section v-if="activeTab === 'compass'" class="mt-6 space-y-6">
      <div class="card-paper p-5 sm:p-7 space-y-5">
        <div class="text-center space-y-1">
          <h3 class="font-display text-base sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
            {{ t('រ៉ាដាផ្សាយមេត្តាទៅកាន់ទិសទាំង ១០', 'Radiating Mettā to the 10 Directions') }}
          </h3>
          <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
            {{ t('ចុចជ្រើសរើសទិស ដើម្បីបញ្ជូនរលកមេត្តាចិត្ត និងសូត្រគាថា', 'Click a direction to radiate goodwill and chant the protective gāthā') }}
          </p>
        </div>

        <!-- Direction Buttons Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-2">
          <button
            v-for="d in directions"
            :key="d.id"
            @click="selectedDirection = d.id; triggerRadiate()"
            class="card-paper card-paper-hover p-3 text-center transition"
            :style="selectedDirection === d.id ? { borderColor: 'var(--accent)', background: 'var(--bg-card-2)' } : {}"
          >
            <span class="text-xl block">{{ d.icon }}</span>
            <strong class="text-xs block mt-1" :style="{ color: selectedDirection === d.id ? 'var(--accent)' : 'var(--ink)' }">
              {{ d.nameKm }}
            </strong>
            <span class="paali text-[10px]" :style="{ color: 'var(--ink-muted)' }">{{ d.pali }}</span>
          </button>
        </div>

        <!-- Active Direction Radiator Box -->
        <div class="card-paper p-5 sm:p-7 text-center relative overflow-hidden" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <div
            v-if="isPulsing"
            class="absolute inset-0 bg-rose-500/10 animate-ping rounded-2xl pointer-events-none"
          ></div>

          <div class="relative z-10 space-y-4 max-w-xl mx-auto">
            <span class="text-4xl block">{{ currentDirectionData.icon }}</span>

            <div>
              <span class="paali text-xs uppercase" :style="{ color: 'var(--accent)' }">{{ currentDirectionData.pali }}</span>
              <h3 class="font-display text-xl sm:text-2xl font-bold mt-0.5" :style="{ color: 'var(--ink)' }">
                {{ currentDirectionData.nameKm }}
              </h3>
              <p class="text-xs mt-1" :style="{ color: 'var(--ink-muted)' }">
                {{ t('សត្វលោកដែលរស់នៅ៖ ', 'Inhabiting Beings: ') }}<strong>{{ currentDirectionData.beings }}</strong>
              </p>
            </div>

            <!-- Pali Gāthā -->
            <div class="verse-box p-4 rounded-xl space-y-2">
              <p class="paali font-serif italic text-sm sm:text-base font-bold leading-relaxed" :style="{ color: 'var(--accent-bright)' }">
                « {{ currentDirectionData.gathaPali }} »
              </p>
              <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink)' }">
                {{ currentDirectionData.gathaKm }}
              </p>
            </div>

            <!-- Action Button -->
            <button
              @click="triggerRadiate"
              class="lang-pick px-6 py-2.5 text-xs sm:text-sm font-semibold on shadow-md inline-flex items-center gap-2"
            >
              <span>🔔</span>
              <span>{{ isPulsing ? t('កំពុងផ្សាយរលកមេត្តា...', 'Radiating Metta Pulse...') : t('បញ្ជូនរលកមេត្តា & វាយជួង', 'Send Metta Pulse & Bell') }}</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 2: 5 STAGES OF METTĀ MEDITATION -->
    <section v-if="activeTab === 'sequence'" class="mt-6 space-y-4">
      <div class="card-paper p-4 sm:p-5">
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
          💡 <strong>{{ t('ក្បួនបដិបត្តិត្រឹមត្រូវ៖', 'Proper Order of Practice:') }}</strong>
          {{ t('ព្រះពុទ្ធទ្រង់សម្តែងឱ្យចាប់ផ្តើមផ្សាយមេត្តាចំពោះខ្លួនឯងមុនគេបង្អស់ ព្រោះមនុស្សដែលមិនទាន់ស្រឡាញ់ខ្លួនឯង មិនអាចស្រឡាញ់អ្នកដទៃដោយបរិសុទ្ធឡើយ។ បន្ទាប់មកទើបបន្តទៅកាន់មនុស្សជាទីស្រឡាញ់ មនុស្សកណ្តាលៗ និងចុងក្រោយគឺសត្រូវ។', 'The Visuddhimagga instructs us to radiate loving-kindness to oneself first, then to beloved friends, neutral persons, and lastly to enemies without discrimination.') }}
        </p>
      </div>

      <div class="space-y-3">
        <div
          v-for="st in sequenceStages"
          :key="st.step"
          class="card-paper p-4 sm:p-5 flex flex-col sm:flex-row items-start gap-4"
        >
          <span class="sutra-num font-bold text-lg px-3 py-1 rounded-xl shrink-0" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)', color: 'var(--accent-bright)' }">
            {{ st.step }}
          </span>

          <div class="space-y-1.5 flex-1">
            <div class="flex items-center gap-2 flex-wrap">
              <h3 class="font-display text-base font-bold" :style="{ color: 'var(--ink)' }">
                {{ st.titleKm }}
              </h3>
              <span class="paali text-xs" :style="{ color: 'var(--ink-muted)' }">({{ st.target }})</span>
            </div>

            <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ st.desc }}
            </p>

            <div class="p-3 rounded-xl text-xs space-y-1 mt-2" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
              <strong class="block" :style="{ color: 'var(--accent-bright)' }">
                💬 {{ t('ពាក្យភាវនាក្នុងចិត្ត៖', 'Inner Chanting Formula:') }}
              </strong>
              <p class="paali italic" :style="{ color: 'var(--ink)' }">{{ st.formulaPali }}</p>
              <p :style="{ color: 'var(--ink-soft)' }">{{ st.formulaKm }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 3: 11 BENEFITS OF METTĀ -->
    <section v-if="activeTab === 'benefits'" class="mt-6 space-y-4">
      <div class="verse-box p-4 rounded-xl text-center">
        <p class="text-xs sm:text-sm font-semibold" :style="{ color: 'var(--ink)' }">
          {{ t('«ម្នាលភិក្ខុទាំងឡាយ កាលបើមេត្តាចេតោវិមុត្តិ ដែលបុគ្គលបានសន្សំ បានចម្រើន បានធ្វើឱ្យច្រើនហើយ រមែងសង្ឃឹមទុកនូវអានិសង្ស ១១ ប្រការនេះឯង...»', '«When the mind deliverance through loving-kindness is cultivated, frequently practiced, and well established, 11 blessings can be expected...»') }}
        </p>
        <span class="text-[11px] block mt-1" :style="{ color: 'var(--ink-muted)' }">— មេត្តសូត្រ អង្គុត្តរនិកាយ ឯកាទសកនិបាត</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div
          v-for="b in benefits"
          :key="b.no"
          class="card-paper card-paper-hover p-4 flex items-start gap-3"
        >
          <span class="sutra-num font-bold text-sm px-2.5 py-1 rounded-lg shrink-0" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)', color: 'var(--accent-bright)' }">
            {{ b.no }}
          </span>
          <div class="space-y-1">
            <h4 class="font-display font-bold text-sm" :style="{ color: 'var(--ink)' }">
              {{ b.km }}
            </h4>
            <p class="paali text-[11px]" :style="{ color: 'var(--ink-muted)' }">{{ b.pali }}</p>
            <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ b.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
