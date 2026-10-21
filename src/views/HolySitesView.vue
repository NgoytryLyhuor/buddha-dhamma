<script setup>
import { ref } from 'vue'

const activeSiteId = ref('lumbini')

const sites = [
  {
    id: 'lumbini',
    tag: 'ទីកន្លែងប្រសូត',
    tagEn: 'Birthplace',
    nameKm: '១. សួនឧទ្យានលុម្ពិនី (Lumbinī)',
    titlePali: 'Jātibhūmi',
    location: 'ស្រុករូប៉ាន់ដេហ៊ី (Rupandehi), ប្រទេសនេប៉ាល់ (Nepal)',
    significance: 'ជាទីកន្លែងដែលព្រះពោធិសត្វសិទ្ធត្ថរាជកុមារ ទ្រង់ប្រសូតចាកឧទរព្រះមាតា ក្រោមម្លប់ដើមរាំងភ្នំ (សាលព្រឹក្ស) នាថ្ងៃពេញបូណ៌មីខែវិសាខ។',
    keyMoments: [
      'ព្រះនាងសិរិមហាមាយា ទ្រង់ឈោងដៃតោងមែកសាលព្រឹក្ស ហើយប្រសូតព្រះរាជបុត្រដោយសុវត្ថិភាព',
      'ពេលប្រសូតភ្លាម ព្រះពោធិសត្វទ្រង់យាងបាន ៧ ជំហាន ដោយមានផ្កាឈូកទ្រទ្រង់គ្រប់ជំហាន',
      'ទ្រង់លើកព្រះហស្តស្តាំចង្អុលទៅលើអាកាស ហើយបន្លឺសីហនាទថា៖ «អគ្គោហមស្មិ លោកស្ស... យើងជាបុគ្គលប្រសើរបំផុតក្នុងលោក! នេះជាជាតិចុងក្រោយរបស់យើង ភពថ្មីទៀតលែងមានហើយ!»',
      'ទេវតានិងព្រហ្មទាំងឡាយបានមកប្រោះព្រំទឹកកុសល និងថ្វាយការសរសើរ'
    ],
    archaeology: [
      'សសរថ្មព្រះបាទអសោក (Ashoka Pillar) កសាងឡើងក្នុងសតវត្សទី ៣ មុន គ.ស. មានចារឹកអក្សរព្រាហ្មីបញ្ជាក់ថា «ទីនេះជាកន្លែងដែលព្រះពុទ្ធសក្យមុនីបានប្រសូត»',
      'ប្រាសាទមាយាទេវី (Māyādevī Temple) ដែលរក្សាទុកនូវថ្មដានៃស្នាមព្រះបាទ',
      'ស្រះស្រង់បុរាណ បុស្ការិណី (Pushkarini Pond) ជាកន្លែងដែលព្រះនាងមាយាទេវីទ្រង់ស្រង់ទឹកមុនពេលប្រសូត'
    ],
    reflection: 'ការនឹកដល់លុម្ពិនី គឺរំឭកយើងថា មនុស្សគ្រប់រូបសុទ្ធតែមានសក្តានុពលក្នុងការអភិវឌ្ឍខ្លួនពីមនុស្សសាមញ្ញ រហូតដល់ក្លាយជាព្រះពុទ្ធបាន។',
    gatha: 'Yato kho bhagavā jāto, lumbinīye manorame; Sakyānaṁ nandivaḍḍhano, vandāmi taṁ mahāvanaṁ.',
    gathaKm: 'ព្រះដ៏មានព្រះភាគ ទ្រង់ប្រសូតនាទីណា គឺក្នុងសួនឧទ្យានលុម្ពិនីដ៏គួរជាទីរីករាយ ដើម្បីចម្រើនសេចក្តីសុខដល់ពួកសក្យៈ ខ្ញុំសូមថ្វាយបង្គំនូវព្រៃធំនោះដោយគោរព។'
  },
  {
    id: 'bodhgaya',
    tag: 'ទីកន្លែងត្រាស់ដឹង',
    tagEn: 'Enlightenment',
    nameKm: '២. ពុទ្ធគយា និងដើមពោធិព្រឹក្ស (Bodh Gayā)',
    titlePali: 'Bodhi-maṇḍala',
    location: 'ស្រុកគយា (Gaya), រដ្ឋពិហារ (Bihar), ប្រទេសឥណ្ឌា',
    significance: 'ជាបេះដូងនៃពុទ្ធសាសនពិភពលោក! ទីកន្លែងដែលព្រះសមណគោតម ទ្រង់គង់លើវជិរាសនបល្ល័ង្ក ក្រោមដើមពោធិព្រឹក្ស ក្បែរឆ្នេរស្ទឹងនេរញ្ជរា ផ្ចាញ់មារ និងសម្រេចព្រះសម្មាសម្ពោធិញាណ។',
    keyMoments: [
      'ទ្រង់បានតាំងសច្ចាធិដ្ឋានដ៏មាំទាំថា៖ «ទោះបីជាសាច់ ស្បែក និងឈាមក្នុងកាយនេះរីងស្ងួតសល់តែឆ្អឹងក៏ដោយ បើមិនទាន់បានត្រាស់ដឹងទេ យើងនឹងមិនក្រោកចាកបល្ល័ង្កនេះឡើយ!»',
      'ពេលព្រលប់៖ ផ្ចាញ់ក្រុងមារ និងទ័ពមារទាំងអស់ដោយបារមី ៣០ គត់ ដោយយកព្រះធរណីធ្វើជាសាក្សី',
      'យាមទី ១ នៃរាត្រី៖ សម្រេច បុព្វេនិវាសានុស្សតិញាណ (ដឹងជាតិអតីតកាល)',
      'យាមទី ២ នៃរាត្រី៖ សម្រេច ទិព្វចក្ខុញាណ (ឃើញការកើតស្លាប់នៃសត្វលោកតាមកម្ម)',
      'យាមទី ៣ នៃរាត្រី៖ សម្រេច អាសវក្ខយញាណ (កម្ចាត់កិលេសអាសវៈទាំងស្រុង ត្រាស់ដឹងអរិយសច្ច ៤ និងបដិច្ចសមុប្បាទ) ក្លាយជាព្រះសម្មាសម្ពុទ្ធ'
    ],
    archaeology: [
      'មហាពោធិវិហារ (Mahābodhi Temple) កំពូលស្រួចខ្ពស់ត្រដែតបេតិកភណ្ឌពិភពលោក UNESCO',
      'ដើមពោធិព្រឹក្ស (Bodhi Tree) ដែលដុះតពូជពីដើមដើមដំបូងបង្អស់',
      'វជិរាសនបល្ល័ង្កថ្ម (Vajrāsana / Diamond Throne) ដែលព្រះបាទអសោកបានកសាងតម្កល់ត្រង់ចំណុចត្រាស់ដឹង',
      'ទីកន្លែងសត្តសត្តាហៈ ទាំង ៧ សប្តាហ៍ដែលព្រះអង្គសោយវិមុត្តិសុខ (ដូចជា ស្រះមុចលិន្ទ វិហាររតនឃរៈ...)'
    ],
    reflection: 'ការនឹកដល់ពុទ្ធគយា បណ្តុះសទ្ធា និងការតស៊ូព្យាយាម ថាមិនមានឧបសគ្គ ឬកិលេសណាមួយដែលមិនអាចយកឈ្នះបានដោយកម្លាំងបញ្ញា និងបារមីឡើយ។',
    gatha: 'Bodhirukkhamhi āsīno, sabba-māra-parājayo; Patto sabbaññutaṁ satthā, vande taṁ bodhi-maṇḍalaṁ.',
    gathaKm: 'ព្រះសាស្តា ទ្រង់គង់ក្រោមម្លប់ដើមពោធិព្រឹក្ស ផ្ចាញ់មារទាំងអស់ឱ្យបរាជ័យ ហើយបានដល់នូវសព្វញ្ញុតញ្ញាណ ខ្ញុំសូមថ្វាយបង្គំនូវពោធិមណ្ឌលនោះដោយសិរសា។'
  },
  {
    id: 'sarnath',
    tag: 'ទីកន្លែងសម្តែងបឋមទេសនា',
    tagEn: 'First Sermon',
    nameKm: '៣. ឥសិបតនមិគទាយវ័ន សារនាថ (Sārnāth)',
    titlePali: 'Dhammacakkappavattana-ṭhāna',
    location: 'ក្រុងពារាណសី (Varanasi), រដ្ឋឧត្តរប្រទេស (Uttar Pradesh), ឥណ្ឌា',
    significance: 'ទីកន្លែងដែលព្រះពុទ្ធទ្រង់បង្វិលកង់ព្រះធម៌ (សម្តែងធម្មចក្កប្បវត្តនសូត្រ) ដល់បញ្ចវគ្គិយភិក្ខុទាំង ៥ អង្គ និងជាកន្លែងដែលព្រះរតនត្រ័យ (ព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ) បង្កើតឡើងពេញលេញជាលើកដំបូង។',
    keyMoments: [
      'សម្តែងធម៌ទេសនាដំបូងបង្អស់ នាថ្ងៃពេញបូណ៌មីខែអាសាឡ្ហ (បុណ្យអាសាឡ្ហបូជា)',
      'បដិសេធនូវផ្លូវជ្រុលនិយមទាំងពីរ៖ កាមសុខល្លិកានុយោគ (ការបណ្តោយតាមកាម) និង អត្តកិលមថានុយោគ (ការធ្វើទុក្ខកាយ)',
      'ប្រកាសនូវ «មជ្ឈិមាបដិបទា» (ផ្លូវកណ្តាល គឺអរិយមគ្គប្រកបដោយអង្គ ៨)',
      'លោកអយ្យកោណ្ឌញ្ញ សម្រេចជាព្រះសោតាបន្ន (ព្រះសង្ឃអង្គដំបូង) ហើយព្រះអង្គបន្លឺថា «អញ្ញាសិ វត ភោ កោណ្ឌញ្ញោ»',
      'ប៉ុន្មានថ្ងៃក្រោយមក ទ្រង់សម្តែង «អនត្តលក្ខណសូត្រ» ធ្វើឱ្យព្រះភិក្ខុទាំង ៥ សម្រេចជាព្រះអរហន្ត'
    ],
    archaeology: [
      'ធម្មេកស្ទូប (Dhamek Stupa) ស្ទូបថ្មធំមហិមាដែលសាងសង់លើទីតាំងសម្តែងធម្មចក្កប្បវត្តនសូត្រ',
      'ធម្មរាជិកស្ទូប (Dharmarājikā Stupa) និងវិហារបុរាណមូលស្វន្ធកុដិ',
      'ក្បាលសសរតោថ្មអសោក (Ashoka Lion Capital) ដែលបច្ចុប្បន្នជានិមិត្តសញ្ញាជាតិផ្លូវការនៃប្រទេសឥណ្ឌា'
    ],
    reflection: 'ការនឹកដល់សារនាថ រំឭកយើងឱ្យស្រឡាញ់ និងគោរពព្រះធម៌ ដែលជាពន្លឺបំភ្លឺផ្លូវកណ្តាលក្នុងជីវិត ជៀសវាងការជ្រុលនិយម។',
    gatha: 'Dhammacakkaṁ pavattento, isipatane migadāye; Aññāsi koṇḍaññatthero, vandāmi dhamma-desanaṁ.',
    gathaKm: 'ព្រះអង្គទ្រង់បង្វិលកង់ព្រះធម៌ ក្នុងព្រៃឥសិបតនមិគទាយវ័ន ព្រះថេរកោណ្ឌញ្ញបានត្រាស់ដឹង ខ្ញុំសូមថ្វាយបង្គំនូវទីកន្លែងសម្តែងធម៌នោះដោយគោរព។'
  },
  {
    id: 'kushinagar',
    tag: 'ទីកន្លែងចូលបរិនិព្វាន',
    tagEn: 'Mahāparinibbāna',
    nameKm: '៤. សាលវ័នឧទ្យាន កុសិនារា (Kushinagar)',
    titlePali: 'Parinibbāna-ṭhāna',
    location: 'ស្រុកកុសិនគរ (Kushinagar), រដ្ឋឧត្តរប្រទេស (Uttar Pradesh), ឥណ្ឌា',
    significance: 'ទីកន្លែងដែលព្រះសម្មាសម្ពុទ្ធទ្រង់ដាក់ព្រះជន្មាយុសង្ខារ និងចូលកាន់ព្រះបរិនិព្វាន (អនុបាទិសេសនិព្វានធាតុ) នៅចន្លោះដើមសាលព្រឹក្សទាំងគូ នាថ្ងៃពេញបូណ៌មីខែវិសាខ។',
    keyMoments: [
      'ព្រះអង្គទ្រង់ផ្ទុំផ្អៀងទៅខាងស្តាំ (សីហសេយ្យាសន៍) ដោយបែរព្រះភក្ត្រទៅទិសឧត្តរ',
      'ផ្កាសាលព្រឹក្សបានរីកក្រអូបស្គុះស្គាយ និងរោយផ្កាធ្លាក់ចុះមកបូជាព្រះសព',
      'ទ្រង់បានបំបួស «ព្រះសុភទ្ទបរិព្វាជក» ជាសាវ័កចុងក្រោយបង្អស់ដែលសម្រេចព្រះអរហន្តទាន់ព្រះពុទ្ធ',
      'ទ្រង់ត្រាស់ឱវាទចុងក្រោយ (បច្ឆិមវាចា) ថា៖ «ហន្ទ ទានិ ភិក្ខវេ អាមន្តយាមិ វោ, វយធម្មា សង្ខារា, អប្បមាទេន សម្បាទេថ» (ម្នាលភិក្ខុទាំងឡាយ សង្ខារទាំងឡាយមានការសាបរលាបទៅវិញជាធម្មតា ចូរអ្នកទាំងឡាយញ៉ាំងកិច្ចការឱ្យសម្រេចដោយសេចក្តីមិនប្រមាទចុះ!)'
    ],
    archaeology: [
      'ព្រះបរិនិព្វានស្ទូប និងវិហារ (Parinirvana Stupa & Temple) តម្កល់ព្រះពុទ្ធបដិមាចូលនិព្វានថ្មភក់ប្រវែង ៦.១ ម៉ែត្រដ៏ពិសិដ្ឋ',
      'រាមភារស្ទូប (Ramabhar Stupa / មុកុដពន្ធនចេតិយ) ជាទីតាំងដែលថ្វាយព្រះភ្លើងព្រះបរមសពព្រះពុទ្ធ',
      'ទីតាំងបែងចែកព្រះបរមសារីរិកធាតុ ដោយព្រាហ្មណ៍ឈ្មោះ «ទ្រោណៈ» ជា ៨ ចំណែកដល់ស្តេចនៃនគរទាំង ៨'
    ],
    reflection: 'ការនឹកដល់កុសិនារា នាំឱ្យកើត «ធម្មសង្វេគ» យ៉ាងជ្រាលជ្រៅ ដឹងថាទោះបីជាព្រះពុទ្ធក៏គង់តែត្រូវចូលបរិនិព្វាន ដូច្នេះជីវិតយើងខ្លីណាស់ កុំប្រមាទក្នុងការសាងអំពើល្អ។',
    gatha: 'Kusinārāyaṁ yamaka-sālānamantare; Nibbānaṁ patto sambuddho, vandāmi santipadaṁ.',
    gathaKm: 'ព្រះសម្មាសម្ពុទ្ធ ទ្រង់ដល់នូវព្រះនិព្វាន នៅចន្លោះដើមសាលព្រឹក្សទាំងគូ ក្នុងក្រុងកុសិនារា ខ្ញុំសូមថ្វាយបង្គំនូវទីឋាននៃសន្តិសុខដ៏បរិសុទ្ធនោះ។'
  }
]

const currentSite = ref(sites[0])

function setSite(s) {
  currentSite.value = s
  activeSiteId.value = s.id
}
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 py-8 space-y-10">
    <!-- Header -->
    <header class="text-center space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20">
        <span>🏛️</span>
        <span>សង្វេជនីយដ្ឋាន ៤ កន្លែង • Sacred Pilgrimage Sites</span>
      </div>

      <h1 class="text-3xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-amber-800 via-rose-700 to-amber-900 dark:from-amber-200 dark:via-rose-200 dark:to-amber-400 bg-clip-text text-transparent">
        ទីសក្ការៈបូជាសំខាន់ទាំង ៤ និងព្រះសារីរិកធាតុ
      </h1>

      <p class="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-3xl mx-auto leading-relaxed">
        ទីកន្លែងពិសិដ្ឋទាំង ៤ ក្នុងព្រះពុទ្ធសាសនា ដែលព្រះសម្មាសម្ពុទ្ធទ្រង់បានផ្តាំផ្ញើក្នុង **មហាបរិនិព្វានសូត្រ** ថា ពុទ្ធសាសនិកដែលមានសទ្ធាគួរទៅទស្សនា និងរឭកឃើញដោយស្មារតីសង្វេគ។
      </p>

      <!-- Site Selector Tabs -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3">
        <button
          v-for="s in sites"
          :key="s.id"
          @click="setSite(s)"
          :class="[
            'p-3.5 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center gap-1',
            activeSiteId === s.id
              ? 'bg-amber-600 text-white shadow-amber-600/30 shadow-md border-transparent scale-105'
              : 'bg-stone-50 dark:bg-stone-800/60 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100'
          ]"
        >
          <span class="text-xs font-bold">{{ s.tag }}</span>
          <span class="text-[11px] opacity-80 truncate max-w-full">{{ s.nameKm.split(' ')[1] }}</span>
        </button>
      </div>
    </header>

    <!-- ACTIVE SITE DETAILED CARD -->
    <div class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-9 shadow-sm space-y-8 animate-in fade-in duration-200">
      <!-- Title & Location -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 dark:border-stone-800 pb-5">
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-md text-xs font-bold bg-amber-500/15 text-amber-800 dark:text-amber-300">
              {{ currentSite.tag }}
            </span>
            <span class="text-xs font-mono text-stone-400 italic">({{ currentSite.titlePali }})</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
            {{ currentSite.nameKm }}
          </h2>
          <p class="text-xs text-stone-500 flex items-center gap-1">
            <span>📍 ទីតាំងបច្ចុប្បន្ន៖</span>
            <strong>{{ currentSite.location }}</strong>
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800 max-w-xs text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
          {{ currentSite.significance }}
        </div>
      </div>

      <!-- Key Historical Events -->
      <div class="space-y-3">
        <h3 class="text-base font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <span>⚡</span>
          <span>ព្រឹត្តិការណ៍ជាប្រវត្តិសាស្ត្រសំខាន់ៗដែលបានកើតឡើង៖</span>
        </h3>
        <div class="grid grid-cols-1 gap-2.5">
          <div
            v-for="(evt, idx) in currentSite.keyMoments"
            :key="idx"
            class="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-100 dark:border-stone-800 flex items-start gap-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed"
          >
            <span class="w-5 h-5 rounded-full bg-amber-500/15 text-amber-800 dark:text-amber-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
              {{ idx + 1 }}
            </span>
            <span>{{ evt }}</span>
          </div>
        </div>
      </div>

      <!-- Archaeology & Relics -->
      <div class="space-y-3">
        <h3 class="text-base font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <span>🏺</span>
          <span>បុរាណវត្ថុ និងទីសក្ការៈសំខាន់ៗដែលនៅសល់ដល់សព្វថ្ងៃ៖</span>
        </h3>
        <ul class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <li
            v-for="(arch, idx) in currentSite.archaeology"
            :key="idx"
            class="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/15 text-xs text-stone-700 dark:text-stone-300 leading-relaxed space-y-1"
          >
            <span class="text-amber-700 dark:text-amber-400 font-bold block">✦ ភស្តុតាងទី {{ idx + 1 }}</span>
            <span>{{ arch }}</span>
          </li>
        </ul>
      </div>

      <!-- Reflection & Aspiration -->
      <div class="p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-stone-800/60 dark:to-stone-800/40 border border-amber-200/60 dark:border-amber-900/40 space-y-3">
        <div class="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-400">
          <span>🧘</span>
          <span>ការពិចារណាខាងផ្លូវស្មារតី (Saṁvega Reflection):</span>
        </div>
        <p class="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
          {{ currentSite.reflection }}
        </p>

        <!-- Pilgrimage Gāthā -->
        <div class="pt-2 border-t border-amber-200/40 dark:border-stone-700/60 space-y-1">
          <p class="text-xs font-serif italic text-amber-900 dark:text-amber-300 font-semibold">
            « {{ currentSite.gatha }} »
          </p>
          <p class="text-[11px] text-stone-600 dark:text-stone-400">
            {{ currentSite.gathaKm }}
          </p>
        </div>
      </div>
    </div>

    <!-- THE DIVISION OF THE BUDDHA'S RELICS -->
    <div class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-5">
      <div class="space-y-1">
        <h3 class="text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <span>✨</span>
          <span>ការបែងចែកព្រះបរមសារីរិកធាតុ (Drona's Relic Distribution)</span>
        </h3>
        <p class="text-xs text-stone-500">បន្ទាប់ពីថ្វាយព្រះភ្លើងព្រះបរមសពនាទីក្រុងកុសិនារា</p>
      </div>

      <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
        ស្តេចនៃនគរទាំង ៨ ក្នុងជម្ពូទ្វីប បានលើកទ័ពមកដើម្បីដណ្តើមយកព្រះបរមសារីរិកធាតុ។ គ្រានោះ <strong>ទ្រោណព្រាហ្មណ៍</strong> បានឈានជើងមកសម្របសម្រួល និងបែងចែកព្រះសារីរិកធាតុជា ៨ ចំណែកស្មើៗគ្នា ដោយសន្តិវិធី៖
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div class="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800">
          <strong class="text-stone-900 dark:text-stone-100 block">១. ព្រះបាទអជាតសត្តុ</strong>
          <span class="text-stone-500">នគរមគធៈ (រាជគ្រឹះ)</span>
        </div>
        <div class="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800">
          <strong class="text-stone-900 dark:text-stone-100 block">២. ពួកលិច្ឆវី</strong>
          <span class="text-stone-500">នគរវេសាលី</span>
        </div>
        <div class="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800">
          <strong class="text-stone-900 dark:text-stone-100 block">៣. ពួកសក្យៈ</strong>
          <span class="text-stone-500">នគរកបិលវត្ថុ</span>
        </div>
        <div class="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800">
          <strong class="text-stone-900 dark:text-stone-100 block">៤. ពួកថូលី</strong>
          <span class="text-stone-500">នគរអល្លកប្បៈ</span>
        </div>
        <div class="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800">
          <strong class="text-stone-900 dark:text-stone-100 block">៥. ពួកកោឡិយៈ</strong>
          <span class="text-stone-500">នគររាមគ្រាម</span>
        </div>
        <div class="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800">
          <strong class="text-stone-900 dark:text-stone-100 block">៦. ពួកព្រាហ្មណ៍</strong>
          <span class="text-stone-500">វេដ្ឋទីបកនគរ</span>
        </div>
        <div class="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800">
          <strong class="text-stone-900 dark:text-stone-100 block">៧. ពួកមល្លៈ</strong>
          <span class="text-stone-500">នគរបាវ៉ា</span>
        </div>
        <div class="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-100 dark:border-stone-800">
          <strong class="text-stone-900 dark:text-stone-100 block">៨. ពួកមល្លៈ</strong>
          <span class="text-stone-500">នគរកុសិនារា</span>
        </div>
      </div>
    </div>
  </div>
</template>
