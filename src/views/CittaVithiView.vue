<script setup>
import { ref, onBeforeUnmount, watch } from 'vue'

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
  <div class="w-full space-y-6 sm:space-y-8">
    <!-- Header -->
    <header class="text-center space-y-3">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border border-indigo-500/20">
        <span>⚡</span>
        <span>វិថីសង្គហៈ • Cognitive Series Simulator</span>
      </div>

      <h1 class="text-2xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-800 via-purple-700 to-amber-800 dark:from-indigo-200 dark:via-purple-200 dark:to-amber-300 bg-clip-text text-transparent leading-snug">
        ដំណើរវិថីចិត្ត តាមទ្វារទាំង ៦
      </h1>

      <p class="text-xs sm:text-base text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
        ស្វែងយល់ពីរបៀបដែលខួរក្បាល និងចិត្តធ្វើការក្នុងល្បឿនពព្រិចភ្នែក (១៧ ខណៈចិត្ត) នៅពេលភ្នែកឃើញរូប ឬត្រចៀកឮសំឡេង និងកន្លែងដែលកម្មត្រូវបានបង្កើតឡើង។
      </p>

      <!-- Theory Callout -->
      <div class="p-3.5 sm:p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 max-w-xl mx-auto leading-relaxed text-left sm:text-center">
        <strong>⚖️ ច្បាប់អាយុកាលរូបនិងចិត្ត៖</strong> ចិត្តកើតរលត់លឿនជាងរូប ១៧ ដង! ក្នុងខណៈដែលរូបធម៌មួយកើតឡើងហើយរលត់ទៅ ចិត្តត្រូវកើតរលត់រហូតដល់ ១៧ ដង (ខណៈចិត្តទាំង ១៧ នេះឯង)។
      </div>
    </header>

    <!-- SIMULATOR CONTROLS & TIMELINE -->
    <div class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-sm space-y-5">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
        <div>
          <span class="text-[10px] sm:text-xs text-stone-400 font-mono">ខណៈទី {{ currentStepIndex + 1 }} នៃ ១៧</span>
          <h2 class="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5 flex-wrap">
            <span>ខណៈទី {{ currentStep.moment }}៖</span>
            <span class="text-indigo-600 dark:text-indigo-400">{{ currentStep.km }}</span>
          </h2>
        </div>

        <!-- Controls -->
        <div class="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-between sm:justify-end">
          <button
            @click="prevStep"
            class="px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold hover:bg-stone-200 transition shrink-0"
          >
            ← មុន
          </button>

          <button
            @click="toggleAutoPlay"
            :class="[
              'px-3 sm:px-4 py-1.5 rounded-xl text-xs font-semibold text-white transition flex items-center justify-center gap-1 shrink-0',
              isAutoPlaying ? 'bg-rose-600 hover:bg-rose-500' : 'bg-indigo-600 hover:bg-indigo-500'
            ]"
          >
            <span>{{ isAutoPlaying ? '⏸️ ផ្អាក' : '▶️ លេងស្វ័យប្រវត្ត' }}</span>
          </button>

          <button
            @click="nextStep"
            class="px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold hover:bg-stone-200 transition shrink-0"
          >
            បន្ទាប់ →
          </button>

          <button
            @click="resetSimulation"
            class="p-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 text-xs transition"
            title="ត្រឡប់ទៅដើម"
          >
            ↺
          </button>
        </div>
      </div>

      <!-- 17 Moments Horizontal Ribbon with touch scrolling -->
      <div class="overflow-x-auto pb-2 -mx-2 px-2 scrollbar-none touch-pan-x">
        <div class="flex items-center gap-1.5 min-w-[620px]">
          <button
            v-for="(s, idx) in pancadvaraSteps"
            :key="s.moment"
            @click="currentStepIndex = idx; stopAutoPlay()"
            :class="[
              'flex-1 py-1.5 px-1 rounded-xl text-center transition-all duration-150 border',
              currentStepIndex === idx
                ? 'bg-indigo-600 text-white font-bold shadow-sm scale-105 border-transparent'
                : idx >= 8 && idx <= 14
                  ? 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/30'
                  : 'bg-stone-50 dark:bg-stone-800/60 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-700'
            ]"
          >
            <span class="block text-[10px] font-mono leading-none">{{ s.moment }}</span>
            <span class="block text-[10px] truncate mt-0.5">{{ s.code }}</span>
          </button>
        </div>
      </div>

      <!-- ACTIVE MOMENT DETAILED INSPECTOR CARD -->
      <div class="p-4 sm:p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/80 dark:border-stone-700/80 space-y-4 animate-in fade-in duration-200">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div class="space-y-0.5">
            <span class="text-[10px] font-mono text-stone-400 uppercase">PĀLI TERM</span>
            <h3 class="text-base sm:text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
              {{ currentStep.pali }}
            </h3>
          </div>

          <div class="flex items-center gap-1.5 flex-wrap">
            <span class="text-[11px] font-medium px-2 py-0.5 rounded-lg bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200">
              ជាតិ៖ {{ currentStep.jāti }}
            </span>
            <span class="text-[11px] font-medium px-2 py-0.5 rounded-lg bg-indigo-500/15 text-indigo-700 dark:text-indigo-300">
              កិច្ច៖ {{ currentStep.functionKm }}
            </span>
          </div>
        </div>

        <div class="space-y-1.5">
          <span class="text-[11px] font-bold text-stone-500 block uppercase tracking-wider">📖 សកម្មភាពក្នុងខណៈនេះ៖</span>
          <p class="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
            {{ currentStep.desc }}
          </p>
        </div>

        <div class="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-200 space-y-1">
          <strong class="font-bold flex items-center gap-1.5">
            <span>💡</span>
            <span>ការពិចារណាខាងផ្លូវធម៌ (Dhamma Insight):</span>
          </strong>
          <p class="leading-relaxed">{{ currentStep.insight }}</p>
        </div>
      </div>
    </div>

    <!-- The 3 Crucial Zones Breakdown -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
      <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1.5">
        <span class="text-[11px] font-bold text-blue-600 dark:text-blue-400 block">តំបន់ទី ១ (ខណៈ ១ ដល់ ៧)</span>
        <h3 class="font-bold text-stone-900 dark:text-stone-100 text-sm sm:text-base">ការទទួលផលវិបាកចាស់</h3>
        <p class="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
          ភ្នែកឃើញរូប ត្រចៀកឮសំឡេង គឺសុទ្ធតែជា **វិបាក** ដែលបណ្តាលមកពីកម្មចាស់ពីអតីតជាតិ។ យើងមិនអាចហាមឃាត់ភ្នែកមិនឱ្យឃើញ ឬត្រចៀកមិនឱ្យឮបានឡើយ។
        </p>
      </div>

      <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border-2 border-amber-500/50 space-y-1.5">
        <span class="text-[11px] font-bold text-amber-600 dark:text-amber-400 block">តំបន់ទី ២ (ខណៈទី ៨: វុដ្ឋបនៈ)</span>
        <h3 class="font-bold text-stone-900 dark:text-stone-100 text-sm sm:text-base">ផ្លូវបំបែកកំណត់ជោគវាសនា!</h3>
        <p class="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
          ខណៈនេះជាការសម្រេចចិត្ត! បើយើងមាន **សតិ និងយោនិសោមនសិការ** ដឹងទាន់ នោះចិត្តនឹងមិនខឹង មិនលោភឡើយ។ បើគ្មានសតិទេ ចិត្តនឹងធ្លាក់ទៅក្នុងអកុសលភ្លាម។
        </p>
      </div>

      <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1.5">
        <span class="text-[11px] font-bold text-rose-600 dark:text-rose-400 block">តំបន់ទី ៣ (ខណៈ ៩ ដល់ ១៥: ជវនៈ)</span>
        <h3 class="font-bold text-stone-900 dark:text-stone-100 text-sm sm:text-base">ការបង្កើតកម្មថ្មី (Kamma)</h3>
        <p class="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
          ជវនៈទាំង ៧ ខណៈនេះហើយជាកន្លែងដែលមនុស្សសាងបុណ្យ ឬសាងបាប! ជវនៈទី ១ ឱ្យផលក្នុងជាតិនេះ ចំណែកជវនៈទី ៧ ឱ្យផលក្នុងជាតិបន្ទាប់ភ្លាមៗ។
        </p>
      </div>
    </div>
  </div>
</template>
