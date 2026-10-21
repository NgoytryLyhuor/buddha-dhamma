<script setup>
import { ref, computed, onMounted } from 'vue'

const activeGroup = ref('all') // 'all', 'panna', 'sila', 'samadhi'
const selectedFactor = ref(null)

const completedTasks = ref({})

onMounted(() => {
  try {
    const saved = localStorage.getItem('bd_magga_checklist')
    if (saved) {
      completedTasks.value = JSON.parse(saved)
    }
  } catch (e) {
    console.error(e)
  }
})

function toggleTask(id) {
  completedTasks.value[id] = !completedTasks.value[id]
  try {
    localStorage.setItem('bd_magga_checklist', JSON.stringify(completedTasks.value))
  } catch (e) {
    console.error(e)
  }
}

function resetChecklist() {
  completedTasks.value = {}
  try {
    localStorage.removeItem('bd_magga_checklist')
  } catch (e) {
    console.error(e)
  }
}

// 8 Factors Master Data
const maggaFactors = [
  {
    step: 1,
    id: 'samma-ditthi',
    pali: 'Sammā-diṭṭhi',
    km: 'សម្មាទិដ្ឋិ (ការយល់ឃើញត្រូវ)',
    group: 'panna',
    groupKm: 'បញ្ញាសិក្ខា',
    groupColor: 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/20',
    summary: 'ការយល់ច្បាស់នូវច្បាប់កម្មផល (កម្មស្សកតាបញ្ញា) និងការយល់ឃើញនូវអរិយសច្ចទាំង ៤ (ទុក្ខ សមុទ័យ និរោធ មគ្គ)។',
    canonicalDefinition: '«ម្នាលភិក្ខុទាំងឡាយ តើសម្មាទិដ្ឋិជាអ្វី? គឺការដឹងច្បាស់ក្នុងទុក្ខ ការដឹងច្បាស់ក្នុងហេតុដែលនាំឱ្យកើតទុក្ខ ការដឹងច្បាស់ក្នុងសេចក្តីរលត់ទុក្ខ និងការដឹងច្បាស់ក្នុងផ្លូវប្រតិបត្តិដើម្បីរលត់ទុក្ខ។» (មហាសតិបដ្ឋានសូត្រ)',
    modernApplication: [
      'មិនជឿលើអបិយជំនឿ អាគមអូមអាម ហោរាសាស្ត្រ ឬការបន់ស្រន់ព្រះអាទិទេព',
      'ជឿជាក់យ៉ាងមុតមាំលើសកម្មភាពខ្លួនឯង (អំពើល្អផ្តល់ផលល្អ អំពើអាក្រក់ផ្តល់ផលអាក្រក់)',
      'យល់ដឹងពីសច្ចធម៌នៃជីវិតថា គ្មានអ្វីស្ថិតស្ថេររហូតទេ ទុក្ខលំបាកថ្ងៃនេះគង់នឹងកន្លងផុត'
    ],
    dailyChecklist: [
      { id: 't1_1', text: 'រំឭកខ្លួនឯងថា រាល់រឿងដែលកើតឡើងចំពោះខ្ញុំ សុទ្ធតែអាស្រ័យលើហេតុនិងផល' },
      { id: 't1_2', text: 'ពិចារណាឃើញអនិច្ចលក្ខណៈ (ភាពមិនទៀង) នៃអារម្មណ៍ល្អ ឬមិនល្អយ៉ាងហោច ១ ដងក្នុងថ្ងៃនេះ' }
    ]
  },
  {
    step: 2,
    id: 'samma-sankappa',
    pali: 'Sammā-saṅkappa',
    km: 'សម្មាសង្កប្បៈ (ការគិតត្រិះរិះត្រូវ)',
    group: 'panna',
    groupKm: 'បញ្ញាសិក្ខា',
    groupColor: 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/20',
    summary: 'ការគិតលះបង់ចំណង់កាមគុណ (នេក្ខម្មសង្កប្ប) ការគិតមិនព្យាបាទ (អព្យាបាទសង្កប្ប) និងការគិតមិនបៀតបៀនគេ (អវិហិង្សាសង្កប្ប)។',
    canonicalDefinition: '«សេចក្តីត្រិះរិះក្នុងការចេញចាកកាម ១ សេចក្តីត្រិះរិះក្នុងការមិនចងពៀរ ១ សេចក្តីត្រិះរិះក្នុងការមិនបៀតបៀន ១ នេះហៅថាសម្មាសង្កប្បៈ។»',
    modernApplication: [
      'កាត់បន្ថយការចង់បានសម្ភារៈនិយមហួសប្រមាណ និងការប្រកួតប្រជែងបង្អួតគ្នាលើបណ្តាញសង្គម',
      'ពេលមានអ្នកធ្វើឱ្យខឹង មិនគិតរកវិធីសងសឹក ឬផ្ចាញ់ផ្ចាលគេឡើយ',
      'មានចិត្តអាណិតអាសូរដល់មនុស្ស និងសត្វជុំវិញខ្លួន'
    ],
    dailyChecklist: [
      { id: 't2_1', text: 'លះបង់ការគិតចង់ទិញរបស់ដែលមិនចាំបាច់ ឬចំណង់ដែលនាំឱ្យខាតបង់' },
      { id: 't2_2', text: 'មិនគិតចងគំនុំ ឬប្រាថ្នាអាក្រក់លើអ្នកដែលធ្វើឱ្យយើងទាស់ចិត្ត' }
    ]
  },
  {
    step: 3,
    id: 'samma-vaca',
    pali: 'Sammā-vācā',
    km: 'សម្មាវាចា (ការនិយាយស្តីត្រូវ)',
    group: 'sila',
    groupKm: 'សីលសិក្ខា',
    groupColor: 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/20',
    summary: 'វៀរចាកការនិយាយកុហក (មុសាវាទ) វៀរចាកការនិយាយញុះញង់ (បិសុណាវាចា) វៀរចាកពាក្យទ្រគោះបោះបោក (ផរុសវាចា) និងវៀរចាកពាក្យឥតប្រយោជន៍ (សម្ផប្បលាប)។',
    canonicalDefinition: '«ការវៀរចាកការពោលពាក្យមិនពិត ការវៀរចាកការពោលពាក្យញុះញង់បំបែកបំបាក់ ការវៀរចាកការពោលពាក្យអាក្រក់កាចសាហាវ និងការវៀរចាកការពោលពាក្យឥតប្រយោជន៍ នេះហៅថាសម្មាវាចា។»',
    modernApplication: [
      'មិនចែករំលែកព័ត៌មានមិនពិត (Fake News) ឬព័ត៌មានមិនទាន់ច្បាស់ការណ៍លើ Facebook/Telegram',
      'មិនខមិន (Comment) បែបជេរប្រមាថ បញ្ចើចបញ្ចើ ឬ Bullying លើអ៊ីនធឺណិត',
      'កាត់បន្ថយការជជែករឿងអត់ប្រយោជន៍ និយាយដើមគេ ឬរឿងតារាដែលគ្មានខ្លឹមសារដល់ជីវិត'
    ],
    dailyChecklist: [
      { id: 't3_1', text: 'និយាយតែពាក្យពិត ផ្អែមល្ហែម និងមានប្រយោជន៍ដល់អ្នកស្តាប់' },
      { id: 't3_2', text: 'មិននិយាយដើម ឬនិយាយរឿងដែលនាំឱ្យគេបែកបាក់សាមគ្គីគ្នា' }
    ]
  },
  {
    step: 4,
    id: 'samma-kammanta',
    pali: 'Sammā-kammanta',
    km: 'សម្មាកម្មន្តៈ (ការប្រព្រឹត្តការងារត្រូវ)',
    group: 'sila',
    groupKm: 'សីលសិក្ខា',
    groupColor: 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/20',
    summary: 'វៀរចាកការសម្លាប់សត្វ (បាណាតិបាត) វៀរចាកការលួចប្លន់ទ្រព្យគេ (អទិន្នាទាន) និងវៀរចាកការប្រព្រឹត្តខុសក្នុងកាម (កាមេសុ មិច្ឆាចារ)។',
    canonicalDefinition: '«ការវៀរចាកការកាត់ផ្តាច់ជីវិតសត្វ ការវៀរចាកការកាន់យកទ្រព្យដែលគេមិនបានឱ្យ និងការវៀរចាកការប្រព្រឹត្តខុសក្នុងកាមទាំងឡាយ នេះហៅថាសម្មាកម្មន្តៈ។»',
    modernApplication: [
      'មិនបៀតបៀនសត្វល្អិត សត្វចិញ្ចឹម ឬជីវិតមនុស្សណាម្នាក់ឡើយ',
      'គោរពកម្មសិទ្ធិបញ្ញា មិនលួចចម្លងកូដ ស្នាដៃ ឬទាញយកទិន្នន័យគេដោយគ្មានការអនុញ្ញាត (Piracy)',
      'ស្មោះត្រង់នឹងគូស្រករ មិនក្បត់ចិត្ត មិនប្រព្រឹត្តអំពើផិតក្បត់'
    ],
    dailyChecklist: [
      { id: 't4_1', text: 'រក្សាកាយវិការឱ្យស្អាតស្អំ មិនបៀតបៀនជីវិតសត្វណាឡើយ' },
      { id: 't4_2', text: 'មិនយករបស់គេសូម្បីតែប៊ិចមួយដើម ឬក្រដាសមួយសន្លឹកដោយគ្មានការអនុញ្ញាត' }
    ]
  },
  {
    step: 5,
    id: 'samma-ajiva',
    pali: 'Sammā-ājīva',
    km: 'សម្មាអាជីវៈ (ការចិញ្ចឹមជីវិតត្រូវ)',
    group: 'sila',
    groupKm: 'សីលសិក្ខា',
    groupColor: 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/20',
    summary: 'ការប្រកបមុខរបររកស៊ីចិញ្ចឹមជីវិតដោយសុចរិត មិនបៀតបៀនគេ និងវៀរចាកជំនួញខុសច្បាប់ធម៌ទាំង ៥ យ៉ាង (មិច្ឆាវាណិជ្ជ ៥)។',
    canonicalDefinition: '«អរិយសាវ័កក្នុងសាសនានេះ លះបង់នូវមិច្ឆាអាជីវៈ ហើយចិញ្ចឹមជីវិតដោយសម្មាអាជីវៈ នេះហៅថាសម្មាអាជីវៈ។» ជំនួញ ៥ យ៉ាងដែលត្រូវវៀរ៖ ១. ជួញដូរអាវុធ, ២. ជួញដូរមនុស្ស, ៣. ជួញដូរសត្វសម្រាប់សម្លាប់, ៤. ជួញដូរគ្រឿងស្រវឹង/គ្រឿងញៀន, ៥. ជួញដូរថ្នាំពិស។',
    modernApplication: [
      'មិនធ្វើការងារ ឬវិនិយោគលើល្បែងស៊ីសង (Online Gambling/Scams)',
      'រកស៊ីដោយស្មោះត្រង់ មិនភូតកុហកគុណភាពទំនិញ មិនកោរជញ្ជក់ប្រាក់ចំណេញហួសហេតុ',
      'មិនចិញ្ចឹមជីវិតដោយការទារការប្រាក់កាប់កប់ ឬការជម្រិតទារប្រាក់ពីអ្នកទន់ខ្សោយ'
    ],
    dailyChecklist: [
      { id: 't5_1', text: 'ប្រកបការងាររកស៊ីប្រចាំថ្ងៃដោយភាពស្មោះត្រង់ មិនបោកប្រាស់អតិថិជន' },
      { id: 't5_2', text: 'លុយកាក់ដែលរកបានមក សុទ្ធតែជាញើសឈាមស្អាតស្អំស្របច្បាប់ធម៌' }
    ]
  },
  {
    step: 6,
    id: 'samma-vayama',
    pali: 'Sammā-vāyāma',
    km: 'សម្មាវាយាមៈ (ការព្យាយាមត្រូវ)',
    group: 'samadhi',
    groupKm: 'សមាធិសិក្ខា',
    groupColor: 'bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border-indigo-500/20',
    summary: 'ការប្រឹងប្រែង ៤ យ៉ាង (សម្មប្បធាន ៤)៖ ការពារបាបថ្មី, លះបង់បាបចាស់, បង្កើតបុណ្យថ្មី, និងថែរក្សាបុណ្យចាស់ឱ្យរីកចម្រើន។',
    canonicalDefinition: '«សង្វរប្បធាន (ព្យាយាមរារាំងបាបដែលមិនទាន់កើត) ១, បហានប្បធាន (ព្យាយាមលះបង់បាបដែលកើតហើយ) ១, ភាវនាប្បធាន (ព្យាយាមបង្កើតកុសលដែលមិនទាន់កើត) ១, អនុរក្ខនាប្បធាន (ព្យាយាមរក្សាកុសលដែលកើតហើយ) ១។»',
    modernApplication: [
      'ដាក់ព្រំដែនខ្លួនឯងមិនឱ្យចូលមើលវេបសាយ ឬមាតិកាដែលនាំឱ្យកើតរាគៈ/កំហឹង (ការពារបាប)',
      'កាលណាដឹងថាខ្លួនឯងមានទម្លាប់ខ្ជិល ឬទម្លាប់ខឹង ត្រូវប្រឹងប្រែងកាត់បន្ថយបន្តិចម្តងៗ (លះបាប)',
      'ឆ្លៀតពេលអានសៀវភៅធម៌ ស្តាប់ធម៌ និងធ្វើបុណ្យជាប្រចាំ (បង្កើតបុណ្យ)'
    ],
    dailyChecklist: [
      { id: 't6_1', text: 'កាត់បន្ថយការចុចមើលទូរស័ព្ទគ្មានគោលដៅ (Doomscrolling) យ៉ាងហោច ៣០ នាទី' },
      { id: 't6_2', text: 'ប្រឹងប្រែងរក្សាទម្លាប់ល្អឱ្យបានទៀងទាត់ ទោះបីជាមានអារម្មណ៍ខ្ជិលក៏ដោយ' }
    ]
  },
  {
    step: 7,
    id: 'samma-sati',
    pali: 'Sammā-sati',
    km: 'សម្មាសតិ (ការរឭកដឹងត្រូវ)',
    group: 'samadhi',
    groupKm: 'សមាធិសិក្ខា',
    groupColor: 'bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border-indigo-500/20',
    summary: 'ការមានស្មារតីដឹងទាន់នូវរាល់សភាវធម៌ទាំង ៤ (សតិប្បដ្ឋាន ៤)៖ ដឹងកាយ ដឹងវេទនា ដឹងចិត្ត និងដឹងធម៌។',
    canonicalDefinition: '«ភិក្ខុក្នុងសាសនានេះ ពិចារណាឃើញកាយក្នុងកាយ ពិចារណាឃើញវេទនាក្នុងវេទនា ពិចារណាឃើញចិត្តក្នុងចិត្ត ពិចារណាឃើញធម៌ក្នុងធម៌ មានសេចក្តីព្យាយាម មានសម្បជញ្ញៈ មានសតិ កម្ចាត់អភិជ្ឈានិងទោមនស្សក្នុងលោកចេញ នេះហៅថាសម្មាសតិ។»',
    modernApplication: [
      'ទទួលទានអាហារដោយដឹងខ្លួន (Mindful Eating) មិនមែនញ៉ាំបណ្តើរមើលទូរស័ព្ទបណ្តើរឡើយ',
      'ពេលដើរទៅធ្វើការ ដឹងទាន់នូវការបោះជំហាន និងដង្ហើមចេញចូល',
      'ដកដង្ហើមវែងៗ ៣ ដង និងតាំងស្មារតីសិន មុននឹងឆ្លើយតបអ៊ីមែល ឬសារដែលមានជម្លោះ'
    ],
    dailyChecklist: [
      { id: 't7_1', text: 'ហូបបាយយ៉ាងហោច ១ ពេលដោយមានសតិដឹងរសជាតិ មិនមើលទូរស័ព្ទ' },
      { id: 't7_2', text: 'ដឹងទាន់អារម្មណ៍ខ្លួនឯងនៅពេលខឹង ឬសប្បាយ ថា «អារម្មណ៍កើតហើយគង់រលត់»' }
    ]
  },
  {
    step: 8,
    id: 'samma-samadhi',
    pali: 'Sammā-samādhi',
    km: 'សម្មាសមាធិ (ការតម្កល់ចិត្តមាំត្រូវ)',
    group: 'samadhi',
    groupKm: 'សមាធិសិក្ខា',
    groupColor: 'bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border-indigo-500/20',
    summary: 'ការតម្កល់ចិត្តមូលលើអារម្មណ៍កុសលតែមួយ ស្ងប់ចាកនីវរណៈ ឈានចូលកាន់បឋមជ្ឈាន ទុតិយជ្ឈាន តតិយជ្ឈាន និងចតុត្ថជ្ឈាន។',
    canonicalDefinition: '«ភិក្ខុក្នុងសាសនានេះ ស្ងាត់ចាកកាមទាំងឡាយ ស្ងាត់ចាកអកុសលធម៌ទាំងឡាយ ចូលកាន់បឋមជ្ឈាន... រហូតដល់ចតុត្ថជ្ឈាន ដែលមានតែឧបេក្ខានិងសតិដ៏បរិសុទ្ធ នេះហៅថាសម្មាសមាធិ។»',
    modernApplication: [
      'ចំណាយពេលយ៉ាងហោច ១៥ ទៅ ៣០ នាទីក្នុងមួយថ្ងៃ អង្គុយស្ងប់ស្ងាត់ចម្រើនអានាបានសតិ',
      'បណ្តុះសមត្ថភាពផ្ចង់អារម្មណ៍ធ្វើការងារម្តងមួយមុខ (Deep Work) មិនបណ្តោយឱ្យចិត្តរាយមាយ',
      'ចិត្តនឹងធឹង មិនរំជើបរំជួលចំពោះការសរសើរ ឬការនិន្ទាពីអ្នកដទៃ'
    ],
    dailyChecklist: [
      { id: 't8_1', text: 'អង្គុយសមាធិដកដង្ហើមស្ងប់ស្ងាត់យ៉ាងហោច ១៥ នាទីថ្ងៃនេះ' },
      { id: 't8_2', text: 'រក្សាចិត្តឱ្យស្ងប់នឹងនរនៅចំពោះមុខបញ្ហាស្មុគស្មាញ' }
    ]
  }
]

const totalTasks = computed(() => {
  return maggaFactors.reduce((acc, f) => acc + f.dailyChecklist.length, 0)
})

const completedCount = computed(() => {
  return Object.values(completedTasks.value).filter(Boolean).length
})

const progressPercent = computed(() => {
  if (totalTasks.value === 0) return 0
  return Math.round((completedCount.value / totalTasks.value) * 100)
})

const filteredFactors = computed(() => {
  if (activeGroup.value === 'all') return maggaFactors
  return maggaFactors.filter(f => f.group === activeGroup.value)
})

function openFactorModal(f) {
  selectedFactor.value = f
}

function closeModal() {
  selectedFactor.value = null
}
</script>

<template>
  <div class="w-full space-y-6 sm:space-y-8">
    <!-- Header -->
    <header class="text-center space-y-3">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20">
        <span>☸️</span>
        <span>អរិយអដ្ឋង្គិកមគ្គ • The Noble Eightfold Path</span>
      </div>

      <h1 class="text-2xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-800 via-rose-700 to-amber-900 dark:from-amber-200 dark:via-rose-200 dark:to-amber-400 bg-clip-text text-transparent leading-snug">
        មគ្គ ៨ ជាក់ស្តែងក្នុងជីវិតសម័យថ្មី
      </h1>

      <p class="text-xs sm:text-base text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
        បំប្លែងមាគ៌ាដ៏ឧត្តមទាំង ៨ របស់ព្រះសម្មាសម្ពុទ្ធ ឱ្យក្លាយជា **ផែនការសកម្មភាព និងទម្លាប់រស់នៅប្រចាំថ្ងៃ** ក្នុងសង្គមសម័យទំនើប ជាមួយតារាងតាមដានការបដិបត្តិ។
      </p>

      <!-- 3 Trainings Legend Tabs -->
      <div class="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 pt-2">
        <button
          @click="activeGroup = 'all'"
          :class="[
            'px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition border',
            activeGroup === 'all'
              ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 border-transparent shadow-xs'
              : 'bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-700'
          ]"
        >
          អង្គមគ្គទាំង ៨
        </button>

        <button
          @click="activeGroup = 'panna'"
          :class="[
            'px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition border',
            activeGroup === 'panna'
              ? 'bg-amber-600 text-white border-transparent shadow-xs'
              : 'bg-amber-50 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-900/40'
          ]"
        >
          ១. បញ្ញាសិក្ខា
        </button>

        <button
          @click="activeGroup = 'sila'"
          :class="[
            'px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition border',
            activeGroup === 'sila'
              ? 'bg-emerald-600 text-white border-transparent shadow-xs'
              : 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/40'
          ]"
        >
          ២. សីលសិក្ខា
        </button>

        <button
          @click="activeGroup = 'samadhi'"
          :class="[
            'px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition border',
            activeGroup === 'samadhi'
              ? 'bg-indigo-600 text-white border-transparent shadow-xs'
              : 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-800 dark:text-indigo-300 border-indigo-200 dark:border-indigo-900/40'
          ]"
        >
          ៣. សមាធិសិក្ខា
        </button>
      </div>
    </header>

    <!-- DAILY PROGRESS TRACKER CARD -->
    <div class="bg-gradient-to-r from-amber-500/10 via-rose-500/5 to-amber-500/10 border border-amber-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm space-y-3 sm:space-y-4">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
        <div>
          <h2 class="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
            <span>📋</span>
            <span>ការតាមដានការបដិបត្តិមគ្គ ៨ ថ្ងៃនេះ (Daily Checklist)</span>
          </h2>
          <p class="text-[11px] sm:text-xs text-stone-500 mt-0.5">ធីកប្រអប់នីមួយៗពេលអ្នកបានអនុវត្តរួចរាល់ក្នុងថ្ងៃនេះ</p>
        </div>

        <div class="flex items-center gap-2.5 self-end sm:self-auto">
          <span class="text-xs sm:text-sm font-bold text-amber-700 dark:text-amber-400 font-mono">
            {{ completedCount }} / {{ totalTasks }} ({{ progressPercent }}%)
          </span>
          <button
            v-if="completedCount > 0"
            @click="resetChecklist"
            class="text-[11px] sm:text-xs text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 underline"
          >
            កំណត់ឡើងវិញ
          </button>
        </div>
      </div>

      <!-- Progress bar -->
      <div class="w-full h-2.5 rounded-full bg-stone-200 dark:bg-stone-800 overflow-hidden">
        <div
          class="h-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-300 rounded-full"
          :style="{ width: progressPercent + '%' }"
        ></div>
      </div>
    </div>

    <!-- 8 FACTORS GRID -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
      <div
        v-for="factor in filteredFactors"
        :key="factor.id"
        class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm space-y-4 flex flex-col justify-between"
      >
        <div class="space-y-3">
          <!-- Header of card -->
          <div class="flex items-start justify-between gap-2">
            <div class="space-y-0.5">
              <div class="flex items-center gap-1.5">
                <span class="w-5 h-5 rounded-md bg-amber-500/15 text-amber-800 dark:text-amber-300 flex items-center justify-center font-bold text-[11px]">
                  {{ factor.step }}
                </span>
                <span :class="['text-[10px] font-semibold px-2 py-0.5 rounded-full border', factor.groupColor]">
                  {{ factor.groupKm }}
                </span>
              </div>
              <h3 class="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
                {{ factor.km }}
              </h3>
              <p class="text-[11px] font-mono text-stone-400 italic">{{ factor.pali }}</p>
            </div>

            <button
              @click="openFactorModal(factor)"
              class="px-2 py-1 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 text-[11px] hover:bg-stone-200 transition font-medium shrink-0"
            >
              ពុទ្ធវចនៈ 📖
            </button>
          </div>

          <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ factor.summary }}
          </p>

          <!-- Modern Life Tips -->
          <div class="space-y-1.5 pt-2 border-t border-stone-100 dark:border-stone-800">
            <span class="text-[11px] font-bold text-stone-500 block uppercase tracking-wider">🌟 អនុវត្តក្នុងជីវិតសម័យថ្មី៖</span>
            <ul class="space-y-1">
              <li
                v-for="(tip, idx) in factor.modernApplication"
                :key="idx"
                class="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300 leading-relaxed"
              >
                <span class="text-amber-600 mt-0.5">✦</span>
                <span>{{ tip }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Daily Checklist for this factor -->
        <div class="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-100 dark:border-stone-800 space-y-2">
          <span class="text-[11px] font-bold text-stone-500 block">កិច្ចបដិបត្តិប្រចាំថ្ងៃ៖</span>
          <div
            v-for="task in factor.dailyChecklist"
            :key="task.id"
            @click="toggleTask(task.id)"
            class="flex items-start gap-2 cursor-pointer select-none group"
          >
            <div
              :class="[
                'w-4 h-4 rounded border mt-0.5 flex items-center justify-center transition shrink-0',
                completedTasks[task.id]
                  ? 'bg-amber-600 border-amber-600 text-white'
                  : 'border-stone-300 dark:border-stone-600 group-hover:border-amber-500'
              ]"
            >
              <span v-if="completedTasks[task.id]" class="text-[10px] leading-none">✓</span>
            </div>
            <span
              :class="[
                'text-xs transition leading-relaxed',
                completedTasks[task.id]
                  ? 'line-through text-stone-400 dark:text-stone-500'
                  : 'text-stone-700 dark:text-stone-300'
              ]"
            >
              {{ task.text }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- POP-UP MODAL: SUTTA DEFINITION INSPECTOR (Bottom-sheet on mobile) -->
    <Teleport to="body">
      <div
        v-if="selectedFactor"
        class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-stone-950/70 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <div class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-t-3xl sm:rounded-3xl max-w-2xl w-full max-h-[85vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl p-4 sm:p-7 space-y-5 animate-in fade-in duration-200">
          <div class="flex items-start justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-3">
            <div class="space-y-0.5">
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-700 dark:text-amber-400">
                អង្គទី {{ selectedFactor.step }} នៃអរិយមគ្គ
              </span>
              <h3 class="text-lg sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                {{ selectedFactor.km }}
              </h3>
              <p class="text-xs font-mono italic text-stone-400">{{ selectedFactor.pali }}</p>
            </div>
            <button
              @click="closeModal"
              class="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 flex items-center justify-center transition shrink-0"
            >
              ✕
            </button>
          </div>

          <div class="space-y-3.5 text-xs sm:text-sm">
            <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
              <span class="text-[10px] sm:text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider block">📜 ពុទ្ធវចនៈពីព្រះត្រៃបិដក៖</span>
              <p class="text-stone-800 dark:text-stone-200 italic font-serif leading-relaxed">
                {{ selectedFactor.canonicalDefinition }}
              </p>
            </div>

            <div class="space-y-2">
              <h4 class="font-bold text-stone-900 dark:text-stone-100">ការអនុវត្តលម្អិតក្នុងសម័យបច្ចុប្បន្ន៖</h4>
              <ul class="space-y-1.5">
                <li
                  v-for="(tip, idx) in selectedFactor.modernApplication"
                  :key="idx"
                  class="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300 leading-relaxed"
                >
                  <span class="text-amber-600 mt-0.5">✦</span>
                  <span>{{ tip }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="pt-2 flex justify-end">
            <button
              @click="closeModal"
              class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:text-stone-900 text-xs sm:text-sm font-medium transition"
            >
              យល់ហើយ (Close)
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
