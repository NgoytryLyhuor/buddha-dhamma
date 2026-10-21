<script setup>
import { inject, ref, onBeforeUnmount, watch } from 'vue'

const currentLocale = inject('locale', ref('km'))
function t(km, en) {
  return currentLocale.value === 'en' ? (en || km) : km
}

const activeVithiType = ref('pancadvara')
const currentStepIndex = ref(0)
const isAutoPlaying = ref(false)
const autoPlaySpeed = ref(1500)
let autoPlayTimer = null

// 17 Thought-Moments in Pancadvara Vithi (Atimahantarammaṇa)
const pancadvaraSteps = [
  {
    moment: 1,
    code: 'AT-BHAV',
    pali: 'Atīta Bhavaṅga',
    km: 'អតីតភវង្គ',
    jāti: 'vipāka (វិបាក)',
    functionKm: 'ភវង្គកិច្ច (រក្សាកំណើតជីវិត)',
    desc: 'ខណៈដែលរូបារម្មណ៍ (ពន្លឺ/រូបភាព) ទើបតែមកប៉ះនឹងចក្ខុបសាទ (កែវភ្នែក) ក្នុងខណៈនេះ ចិត្តនៅតែជាភវង្គរក្សាជីវិតនៅឡើយ មិនទាន់ដឹងខ្លួនទេ។',
    insight: 'រូបធម៌មានអាយុស្មើនឹង ១៧ ខណៈចិត្ត។ នេះជាខណៈទី ១ នៃរូប។'
  },
  {
    moment: 2,
    code: 'BHAV-CAL',
    pali: 'Bhavaṅga Calana',
    km: 'ភវង្គចលនៈ',
    jāti: 'vipāka (វិបាក)',
    functionKm: 'ភវង្គកិច្ច (ញាប់ញ័រ)',
    desc: 'ខ្សែទឹកភវង្គចាប់ផ្តើមញាប់ញ័រ ឬរំជើបរំជួល ព្រោះកម្លាំងរលកនៃរូបដែលមកប៉ះទង្គិច។',
    insight: 'ប្រៀបដូចជាផ្លែឈើជ្រុះមកលើមែកឈើ ធ្វើឱ្យមែកឈើចាប់ផ្តើមរញ្ជួយ។'
  },
  {
    moment: 3,
    code: 'BHAV-UPAC',
    pali: 'Bhavaṅgupaccheda',
    km: 'ភវង្គុបច្ឆេទៈ',
    jāti: 'vipāka (វិបាក)',
    functionKm: 'កាត់ផ្តាច់ភវង្គ',
    desc: 'ផ្តាច់ខ្សែទឹក subconscious (ភវង្គ) ទាំងស្រុង ដើម្បីប្តូរទិសដៅមករកដំណើរវិថីចិត្តដឹងអារម្មណ៍ខាងក្រៅ។',
    insight: 'ជាការបញ្ចប់នៃសភាពដេកលក់ ហើយឈានចូលកាន់សភាពភ្ញាក់ដឹងខ្លួន។'
  },
  {
    moment: 4,
    code: 'PAN-AVAJ',
    pali: 'Pañcadvārāvajjana',
    km: 'បញ្ចទ្វារាវជ្ជនៈ',
    jāti: 'kiriya (អហេតុកកិរិយា)',
    functionKm: 'អាវជ្ជនកិច្ច (បើកទ្វារពិចារណាអារម្មណ៍)',
    desc: 'ចិត្តងាកបែរមុខឆ្ពោះទៅកាន់ទ្វារភ្នែក ត្រចៀក ច្រមុះ អណ្តាត ឬកាយ ដើម្បីពិនិត្យមើលអារម្មណ៍ដែលទើបចូលមក។',
    insight: 'ដូចជាអ្នកយាមទ្វារដែលដឹងថាមានភ្ញៀវមកគោះទ្វារ ហើយងាកទៅមើល។'
  },
  {
    moment: 5,
    code: 'CAK-VIN',
    pali: 'Cakkhuviññāṇa (ទ្វិបញ្ចវិញ្ញាណ)',
    km: 'ចក្ខុវិញ្ញាណ (ការឃើញ)',
    jāti: 'vipāka (ផលកម្មអតីត)',
    functionKm: 'ទស្សនកិច្ច (ការឃើញរូប)',
    desc: 'ភ្នែកមើលឃើញរូបពណ៌ពន្លឺដោយផ្ទាល់។ បើជួបរូបល្អ ជាកុសលវិបាក បើជួបរូបអាក្រក់ ជាអកុសលវិបាក។',
    insight: 'ក្នុងខណៈនេះ គ្រាន់តែឃើញសុទ្ធសាធ មិនទាន់មានការស្រឡាញ់ ឬខឹងស្អប់អ្វីទាំងអស់។'
  },
  {
    moment: 6,
    code: 'SAM-PAT',
    pali: 'Sampaṭicchana',
    km: 'សម្បដិច្ឆនៈ',
    jāti: 'vipāka (វិបាក)',
    functionKm: 'សម្បដិច្ឆនកិច្ច (ទទួលអារម្មណ៍)',
    desc: 'ចិត្តទទួលយកនូវរូបភាពដែលចក្ខុវិញ្ញាណទើបតែបានឃើញនោះមកទុក។',
    insight: 'ដូចជាអ្នកបម្រើដែលទទួលកញ្ចប់អំណោយពីដៃភ្ញៀវ។'
  },
  {
    moment: 7,
    code: 'SAN-TIR',
    pali: 'Santīraṇa',
    km: 'សន្តីរណៈ',
    jāti: 'vipāka (វិបាក)',
    functionKm: 'សន្តីរណកិច្ច (ស៊ើបអង្កេតអារម្មណ៍)',
    desc: 'ចិត្តស៊ើបអង្កេត ពិចារណារសជាតិ ឬគុណភាពនៃអារម្មណ៍នោះថា គួរឱ្យពេញចិត្ត មិនពេញចិត្ត ឬកណ្តាលៗ។',
    insight: 'ដូចជាការពិនិត្យមើលថា តើរបស់ក្នុងកញ្ចប់នោះជាអ្វី។'
  },
  {
    moment: 8,
    code: 'VOT-THAB',
    pali: 'Voṭṭhabbana (មនោទ្វារាវជ្ជនៈ)',
    km: 'វុដ្ឋបនៈ (ការកាត់សេចក្តី)',
    jāti: 'kiriya (អហេតុកកិរិយា)',
    functionKm: 'វុដ្ឋបនកិច្ច (កំណត់ផ្លូវកម្ម!)',
    desc: '⚠️ ចំណុចរបត់ផ្លូវបំបែកនៃជីវិត! ចិត្តកាត់សេចក្តីកំណត់ថា តើនឹងឆ្លើយតបចំពោះអារម្មណ៍នេះដោយកុសល ឬអកុសល។',
    insight: 'បើមាន យោនិសោមនសិការ (ពិចារណាត្រូវ) ជវនៈបន្ទាប់នឹងជាបុណ្យ! បើជា អយោនិសោមនសិការ ជវនៈនឹងក្លាយជាបាប (លោភៈ/ទោសៈ)។'
  },
  {
    moment: 9,
    code: 'JAV-1',
    pali: 'Javana 1 (ទិដ្ឋធម្មវេទនីយកម្ម)',
    km: 'ជវនៈទី ១ (តួកម្មបច្ចុប្បន្នជាតិ)',
    jāti: 'Kusala / Akusala (បុណ្យ ឬ បាប)',
    functionKm: 'ជវនកិច្ច (សោយរស និងបង្កើតកម្ម)',
    desc: 'ខណៈដំបូងបង្អស់នៃការបង្កើតកម្ម! បង្កើតផលកម្មឱ្យផលក្នុងជាតិនេះភ្លាមៗ (ទិដ្ឋធម្មវេទនីយកម្ម)។ បើមិនបានឱ្យផលក្នុងជាតិនេះទេ នឹងក្លាយជាអហោសិកម្ម។',
    insight: 'កម្លាំងកម្មខ្សោយជាងគេ ព្រោះទើបតែចាប់ផ្តើម តែជាអ្នកបើកផ្លូវ។'
  },
  {
    moment: 10,
    code: 'JAV-2',
    pali: 'Javana 2',
    km: 'ជវនៈទី ២',
    jāti: 'Kusala / Akusala',
    functionKm: 'ជវនកិច្ច (បង្កើតកម្ម)',
    desc: 'កម្លាំងកម្មកាន់តែខ្លាំងឡើងៗ ដោយសារកម្លាំងនៃជវនៈទី ១ ជួយឧបត្ថម្ភ។ ផ្តល់ផលចាប់ពីជាតិទី ៣ ទៅរហូតដល់ព្រះនិព្វាន។',
    insight: 'ស្ថិតក្នុងចំណោម អបរាបរិយវេទនីយកម្ម។'
  },
  {
    moment: 11,
    code: 'JAV-3',
    pali: 'Javana 3',
    km: 'ជវនៈទី ៣',
    jāti: 'Kusala / Akusala',
    functionKm: 'ជវនកិច្ច',
    desc: 'កម្លាំងកម្មបន្តកើនឡើងជាលំដាប់។',
    insight: 'អបរាបរិយវេទនីយកម្ម។'
  },
  {
    moment: 12,
    code: 'JAV-4',
    pali: 'Javana 4',
    km: 'ជវនៈទី ៤',
    jāti: 'Kusala / Akusala',
    functionKm: 'ជវនកិច្ច (ចំណុចកំពូល)',
    desc: 'ជាខណៈកណ្តាលដែលមានកម្លាំងស្ទុះខ្លាំងក្លាបំផុតក្នុងចំណោមជវនៈទាំង ៧។',
    insight: 'អបរាបរិយវេទនីយកម្ម។'
  },
  {
    moment: 13,
    code: 'JAV-5',
    pali: 'Javana 5',
    km: 'ជវនៈទី ៥',
    jāti: 'Kusala / Akusala',
    functionKm: 'ជវនកិច្ច',
    desc: 'កម្លាំងកម្មបន្តសោយរសអារម្មណ៍យ៉ាងជ្រាលជ្រៅ។',
    insight: 'អបរាបរិយវេទនីយកម្ម។'
  },
  {
    moment: 14,
    code: 'JAV-6',
    pali: 'Javana 6',
    km: 'ជវនៈទី ៦',
    jāti: 'Kusala / Akusala',
    functionKm: 'ជវនកិច្ច',
    desc: 'កម្លាំងកម្មចាប់ផ្តើមថមថយបន្តិចដើម្បីត្រៀមបញ្ចប់។',
    insight: 'អបរាបរិយវេទនីយកម្ម។'
  },
  {
    moment: 15,
    code: 'JAV-7',
    pali: 'Javana 7 (ឧបបជ្ជវេទនីយកម្ម)',
    km: 'ជវនៈទី ៧ (តួកម្មជាតិបន្ទាប់)',
    jāti: 'Kusala / Akusala',
    functionKm: 'ជវនកិច្ច (បញ្ចប់កម្ម)',
    desc: 'ខណៈចុងក្រោយនៃជវនៈ! បង្កើតកម្មដែលនឹង **ផ្តល់ផលក្នុងជាតិទី ២ (ជាតិបន្ទាប់ភ្លាមៗ)**។ បើមិនបានឱ្យផលក្នុងជាតិបន្ទាប់ទេ នឹងក្លាយជាអហោសិកម្ម។',
    insight: 'ដូចជាព្រួញចុងក្រោយដែលបាញ់ចេញពីធ្នូ។'
  },
  {
    moment: 16,
    code: 'TAD-1',
    pali: 'Tadārammaṇa 1',
    km: 'តទារម្មណៈទី ១',
    jāti: 'vipāka (វិបាក)',
    functionKm: 'តទារម្មណកិច្ច (ក្រេបរសអារម្មណ៍សេសសល់)',
    desc: 'ចិត្តដែលសោយរសអារម្មណ៍ដែលនៅសេសសល់ពីជវនៈ (កើតឡើងចំពោះតែអារម្មណ៍ដែលច្បាស់ខ្លាំងប៉ុណ្ណោះ)។',
    insight: 'ដូចជាការលេបទឹកមាត់សោយរសអាហារដែលទើបតែទំពាររួច។'
  },
  {
    moment: 17,
    code: 'TAD-2',
    pali: 'Tadārammaṇa 2',
    km: 'តទារម្មណៈទី ២ (ខណៈទី ១៧)',
    jāti: 'vipāka (វិបាក)',
    functionKm: 'តទារម្មណកិច្ច (បញ្ចប់វិថី)',
    desc: 'ខណៈចុងក្រោយបង្អស់នៃវិថីចិត្ត! ស្របពេលដែលរូបធម៌ដែលកើតតាំងពីខណៈទី ១ ក៏រលត់ទៅវិញព្រមគ្នាក្នុងពេលនេះ។ ចិត្តក៏ធ្លាក់ចុះទៅកាន់ភវង្គវិញ។',
    insight: 'បញ្ចប់ ១ វិថីចិត្ត ហើយរូបារម្មណ៍នោះក៏រលត់សូន្យបាត់ទៅ។'
  }
]

function nextStep() {
  if (currentStepIndex.value < pancadvaraSteps.length - 1) {
    currentStepIndex.value++
  } else {
    currentStepIndex.value = 0
  }
}

function prevStep() {
  if (currentStepIndex.value > 0) {
    currentStepIndex.value--
  } else {
    currentStepIndex.value = pancadvaraSteps.length - 1
  }
}

function toggleAutoPlay() {
  if (isAutoPlaying.value) {
    stopAutoPlay()
  } else {
    startAutoPlay()
  }
}

function startAutoPlay() {
  isAutoPlaying.value = true
  autoPlayTimer = setInterval(() => {
    nextStep()
  }, autoPlaySpeed.value)
}

function stopAutoPlay() {
  isAutoPlaying.value = false
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer)
    autoPlayTimer = null
  }
}

function resetSimulation() {
  stopAutoPlay()
  currentStepIndex.value = 0
}

onBeforeUnmount(() => {
  stopAutoPlay()
})

const currentStep = ref(pancadvaraSteps[0])
watch(currentStepIndex, (newIdx) => {
  currentStep.value = pancadvaraSteps[newIdx]
})
</script>

<template>
  <div class="fade-up">
    <!-- Header -->
    <header class="text-center max-w-2xl mx-auto">
      <p class="chapter-label">{{ t('វិថីសង្គហៈ • Cognitive Series Simulator', 'Abhidhammattha Saṅgaha • Thought-Process') }}</p>
      <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
        {{ t('ដំណើរវិថីចិត្ត តាមទ្វារទាំង ៦', 'The 17-Moment Cognitive Process (Citta Vīthi)') }}
      </h2>
      <div class="ornament mt-4">&#9784;</div>
      <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ស្វែងយល់ពីរបៀបដែលខួរក្បាល និងចិត្តធ្វើការក្នុងល្បឿនពព្រិចភ្នែក (១៧ ខណៈចិត្ត) នៅពេលភ្នែកឃើញរូប ឬត្រចៀកឮសំឡេង និងកន្លែងដែលកម្មត្រូវបានបង្កើតឡើង។', 'Discover how the mind processes sensory experience in 17 lightning thought-moments, and discover precisely where Kamma is actively generated.') }}
      </p>

      <div class="verse-box p-3.5 sm:p-4 mt-5 text-xs sm:text-sm text-center leading-relaxed">
        <strong>⚖️ {{ t('ច្បាប់អាយុកាលរូបនិងចិត្ត៖', 'Law of Lifespan:') }}</strong>
        {{ t('ចិត្តកើតរលត់លឿនជាងរូប ១៧ ដង! ក្នុងខណៈដែលរូបធម៌មួយកើតឡើងហើយរលត់ទៅ ចិត្តត្រូវកើតរលត់រហូតដល់ ១៧ ដង (ខណៈចិត្តទាំង ១៧ នេះឯង)។', 'A material phenomenon lasts for the duration of 17 thought-moments. Within the span of a single physical vibration, 17 mental moments arise and dissolve.') }}
      </div>
    </header>

    <!-- SIMULATOR CONTROLS & TIMELINE -->
    <div class="card-paper p-5 sm:p-7 mt-6 space-y-5">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4" :style="{ borderBottom: '1px solid var(--border)' }">
        <div>
          <span class="paali text-xs uppercase" :style="{ color: 'var(--ink-muted)' }">
            {{ t('ខណៈទី ' + (currentStepIndex + 1) + ' នៃ ១៧', 'Moment ' + (currentStepIndex + 1) + ' of 17') }}
          </span>
          <h3 class="font-display text-lg sm:text-xl font-bold mt-0.5" :style="{ color: 'var(--ink)' }">
            {{ t('ខណៈទី ' + currentStep.moment + '៖ ', 'Moment ' + currentStep.moment + ': ') }}
            <span :style="{ color: 'var(--accent)' }">{{ currentStep.km }}</span>
          </h3>
        </div>

        <!-- Controls -->
        <div class="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-between sm:justify-end">
          <button
            @click="prevStep"
            class="lang-pick px-3 py-1.5 text-xs font-semibold"
          >
            ← {{ t('មុន', 'Prev') }}
          </button>

          <button
            @click="toggleAutoPlay"
            class="lang-pick px-4 py-1.5 text-xs font-semibold on"
          >
            {{ isAutoPlaying ? t('⏸️ ផ្អាក', '⏸️ Pause') : t('▶️ លេងស្វ័យប្រវត្ត', '▶️ Auto-Play') }}
          </button>

          <button
            @click="nextStep"
            class="lang-pick px-3 py-1.5 text-xs font-semibold"
          >
            {{ t('បន្ទាប់', 'Next') }} →
          </button>

          <button
            @click="resetSimulation"
            class="lang-pick px-2.5 py-1.5 text-xs font-semibold"
            title="Reset"
          >
            ↺
          </button>
        </div>
      </div>

      <!-- 17 Moments Ribbon with smooth touch scrolling -->
      <div class="overflow-x-auto pb-2 -mx-2 px-2 scrollbar-none touch-pan-x">
        <div class="flex items-center gap-1.5 min-w-[640px]">
          <button
            v-for="(s, idx) in pancadvaraSteps"
            :key="s.moment"
            @click="currentStepIndex = idx; stopAutoPlay()"
            class="flex-1 py-2 px-1 rounded-xl text-center transition border"
            :style="currentStepIndex === idx 
              ? { background: 'var(--accent)', borderColor: 'var(--accent)', color: '#fff' }
              : (idx >= 8 && idx <= 14)
                ? { background: 'var(--bg-card-2)', borderColor: 'var(--accent-bright)', color: 'var(--ink)' }
                : { background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--ink-muted)' }"
          >
            <span class="block text-[10px] font-mono font-bold leading-none">{{ s.moment }}</span>
            <span class="block text-[10px] truncate mt-0.5 font-medium">{{ s.code }}</span>
          </button>
        </div>
      </div>

      <!-- ACTIVE MOMENT DETAILED INSPECTOR CARD -->
      <div class="card-paper p-5 sm:p-6 space-y-4" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span class="text-[10px] uppercase font-mono tracking-wider" :style="{ color: 'var(--ink-muted)' }">PĀḶI CANONICAL TERM</span>
            <h4 class="font-serif italic text-lg sm:text-xl font-bold" :style="{ color: 'var(--accent-bright)' }">
              {{ currentStep.pali }}
            </h4>
          </div>

          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="text-xs px-2.5 py-1 rounded-lg font-medium" :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--ink)' }">
              {{ t('ជាតិ៖ ', 'Jāti: ') }}{{ currentStep.jāti }}
            </span>
            <span class="text-xs px-2.5 py-1 rounded-lg font-medium" :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--accent)' }">
              {{ t('កិច្ច៖ ', 'Function: ') }}{{ currentStep.functionKm }}
            </span>
          </div>
        </div>

        <div class="space-y-1">
          <span class="text-xs font-bold uppercase tracking-wider block" :style="{ color: 'var(--ink-muted)' }">
            📖 {{ t('សកម្មភាពក្នុងខណៈនេះ៖', 'Activity in this moment:') }}
          </span>
          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink)' }">
            {{ currentStep.desc }}
          </p>
        </div>

        <div class="verse-box p-3.5 rounded-xl text-xs space-y-1">
          <strong class="font-bold flex items-center gap-1.5" :style="{ color: 'var(--accent-bright)' }">
            <span>💡</span>
            <span>{{ t('ការពិចារណាខាងផ្លូវធម៌ (Dhamma Insight):', 'Dhamma Insight:') }}</span>
          </strong>
          <p class="leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ currentStep.insight }}</p>
        </div>
      </div>
    </div>

    <!-- The 3 Crucial Zones Breakdown -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6">
      <div class="card-paper p-4 sm:p-5 space-y-1.5">
        <span class="text-xs font-bold block" :style="{ color: 'var(--accent)' }">
          {{ t('តំបន់ទី ១ (ខណៈ ១ ដល់ ៧)', 'Zone 1: Moments 1 to 7') }}
        </span>
        <h4 class="font-display font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
          {{ t('ការទទួលផលវិបាកចាស់', 'Passive Karmic Ripening') }}
        </h4>
        <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
          {{ t('ភ្នែកឃើញរូប ត្រចៀកឮសំឡេង គឺសុទ្ធតែជា វិបាក ដែលបណ្តាលមកពីកម្មចាស់ពីអតីតជាតិ។ យើងមិនអាចហាមឃាត់ភ្នែកមិនឱ្យឃើញ ឬត្រចៀកមិនឱ្យឮបានឡើយ។', 'Visual and auditory contacts are karmic results (Vipāka) from previous deeds. They are passive reception.') }}
        </p>
      </div>

      <div class="card-paper p-4 sm:p-5 space-y-1.5" :style="{ borderColor: 'var(--accent)' }">
        <span class="text-xs font-bold block" :style="{ color: 'var(--accent-bright)' }">
          {{ t('តំបន់ទី ២ (ខណៈទី ៨: វុដ្ឋបនៈ)', 'Zone 2: Moment 8 (Voṭṭhabbana)') }}
        </span>
        <h4 class="font-display font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
          {{ t('ផ្លូវបំបែកកំណត់ជោគវាសនា!', 'The Critical Crossroads') }}
        </h4>
        <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
          {{ t('ខណៈនេះជាការសម្រេចចិត្ត! បើយើងមាន សតិ និងយោនិសោមនសិការ ដឹងទាន់ នោះចិត្តនឹងមិនខឹង មិនលោភឡើយ។ បើគ្មានសតិទេ ចិត្តនឹងធ្លាក់ទៅក្នុងអកុសលភ្លាម។', 'Decision turning point. With Yoniso Manasikāra and mindfulness, subsequent moments become wholesome; otherwise, greed and anger arise.') }}
        </p>
      </div>

      <div class="card-paper p-4 sm:p-5 space-y-1.5">
        <span class="text-xs font-bold block" :style="{ color: 'var(--accent)' }">
          {{ t('តំបន់ទី ៣ (ខណៈ ៩ ដល់ ១៥: ជវនៈ)', 'Zone 3: Moments 9 to 15 (Javana)') }}
        </span>
        <h4 class="font-display font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
          {{ t('ការបង្កើតកម្មថ្មី (Kamma)', 'Active Kamma Creation') }}
        </h4>
        <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
          {{ t('ជវនៈទាំង ៧ ខណៈនេះហើយជាកន្លែងដែលមនុស្សសាងបុណ្យ ឬសាងបាប! ជវនៈទី ១ ឱ្យផលក្នុងជាតិនេះ ចំណែកជវនៈទី ៧ ឱ្យផលក្នុងជាតិបន្ទាប់ភ្លាមៗ។', 'The 7 Javana flash moments where active volition builds moral or immoral Kamma. The first gives immediate results; the 7th ripens in the subsequent life.') }}
        </p>
      </div>
    </div>
  </div>
</template>
