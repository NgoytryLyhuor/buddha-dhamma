<script setup>
import { inject, ref, computed } from 'vue'

const currentLocale = inject('locale', ref('km'))
function t(km, en) {
  return currentLocale.value === 'en' ? (en || km) : km
}

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
  <div class="fade-up">
    <!-- Header -->
    <header class="text-center max-w-2xl mx-auto">
      <p class="chapter-label">{{ t('សង្វេជនីយដ្ឋាន ៤ កន្លែង • Sacred Pilgrimage Sites', 'Sacred Pilgrimage Sites') }}</p>
      <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
        {{ t('ទីសក្ការៈបូជាសំខាន់ទាំង ៤ និងព្រះសារីរិកធាតុ', 'The 4 Sacred Sites & Holy Relics') }}
      </h2>
      <div class="ornament mt-4">&#9784;</div>
      <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ទីកន្លែងពិសិដ្ឋទាំង ៤ ក្នុងព្រះពុទ្ធសាសនា ដែលព្រះសម្មាសម្ពុទ្ធទ្រង់បានផ្តាំផ្ញើក្នុង មហាបរិនិព្វានសូត្រ ថា ពុទ្ធសាសនិកដែលមានសទ្ធាគួរទៅទស្សនា និងរឭកឃើញដោយស្មារតីសង្វេគ។', 'The 4 holy locations sanctified by the Buddha in the Mahāparinibbāna Sutta that inspire deep spiritual urgency (Saṁvega) and faithful devotion.') }}
      </p>

      <!-- Site Selector Tabs -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6">
        <button
          v-for="s in sites"
          :key="s.id"
          @click="setSite(s)"
          class="card-paper card-paper-hover p-3 text-center transition flex flex-col items-center justify-center gap-1 h-full min-h-[58px]"
          :style="activeSiteId === s.id ? { borderColor: 'var(--accent)', background: 'var(--bg-card-2)' } : {}"
        >
          <strong class="text-xs line-clamp-1" :style="{ color: activeSiteId === s.id ? 'var(--accent)' : 'var(--ink)' }">
            {{ s.nameKm.split(' ')[1] || s.nameKm }}
          </strong>
          <span class="paali text-[10px]" :style="{ color: 'var(--ink-muted)' }">{{ s.tag }}</span>
        </button>
      </div>
    </header>

    <!-- ACTIVE SITE MAIN DETAIL CARD -->
    <div class="card-paper p-5 sm:p-7 mt-6 space-y-6">
      <!-- Title & Location -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4" :style="{ borderBottom: '1px solid var(--border)' }">
        <div class="space-y-1">
          <div class="flex items-center gap-2">
            <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">
              {{ currentSite.tag }}
            </span>
            <span class="paali text-xs" :style="{ color: 'var(--ink-muted)' }">({{ currentSite.titlePali }})</span>
          </div>
          <h3 class="font-display text-xl sm:text-2xl font-bold" :style="{ color: 'var(--ink)' }">
            {{ currentSite.nameKm }}
          </h3>
          <p class="text-xs flex items-center gap-1 flex-wrap" :style="{ color: 'var(--ink-muted)' }">
            <span>📍 {{ t('ទីតាំងបច្ចុប្បន្ន៖', 'Present Location:') }}</span>
            <strong :style="{ color: 'var(--ink)' }">{{ currentSite.location }}</strong>
          </p>
        </div>

        <div class="p-3 rounded-xl text-xs leading-relaxed sm:max-w-xs" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)', color: 'var(--ink-soft)' }">
          {{ currentSite.significance }}
        </div>
      </div>

      <!-- Key Historical Events -->
      <div class="space-y-2.5">
        <h4 class="font-display font-bold text-sm sm:text-base flex items-center gap-1.5" :style="{ color: 'var(--ink)' }">
          <span>⚡</span>
          <span>{{ t('ព្រឹត្តិការណ៍ជាប្រវត្តិសាស្ត្រសំខាន់ៗដែលបានកើតឡើង៖', 'Key Historical Events:') }}</span>
        </h4>
        <div class="grid grid-cols-1 gap-2">
          <div
            v-for="(evt, idx) in currentSite.keyMoments"
            :key="idx"
            class="flex items-start gap-2.5 p-3 rounded-xl text-xs leading-relaxed"
            :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)', color: 'var(--ink-soft)' }"
          >
            <span class="sutra-num font-bold text-xs shrink-0 mt-0.5" :style="{ color: 'var(--accent-bright)' }">
              {{ idx + 1 }}.
            </span>
            <span>{{ evt }}</span>
          </div>
        </div>
      </div>

      <!-- Archaeology & Relics -->
      <div class="space-y-2.5">
        <h4 class="font-display font-bold text-sm sm:text-base flex items-center gap-1.5" :style="{ color: 'var(--ink)' }">
          <span>🏺</span>
          <span>{{ t('បុរាណវត្ថុ និងទីសក្ការៈសំខាន់ៗដែលនៅសល់ដល់សព្វថ្ងៃ៖', 'Archaeological Relics & Sacred Monuments:') }}</span>
        </h4>
        <ul class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <li
            v-for="(arch, idx) in currentSite.archaeology"
            :key="idx"
            class="card-paper p-3.5 text-xs leading-relaxed space-y-1 h-full flex flex-col justify-between"
          >
            <span class="font-bold block text-[11px]" :style="{ color: 'var(--accent)' }">✦ {{ t('ភស្តុតាងទី ', 'Evidence ') }}{{ idx + 1 }}</span>
            <span :style="{ color: 'var(--ink-soft)' }">{{ arch }}</span>
          </li>
        </ul>
      </div>

      <!-- Reflection & Aspiration -->
      <div class="verse-box p-5 rounded-2xl space-y-3">
        <div class="flex items-center gap-1.5 text-xs font-bold" :style="{ color: 'var(--accent)' }">
          <span>🧘</span>
          <span>{{ t('ការពិចារណាខាងផ្លូវស្មារតី (Saṁvega Reflection):', 'Spiritual Reflection (Saṁvega):') }}</span>
        </div>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink)' }">
          {{ currentSite.reflection }}
        </p>

        <!-- Pilgrimage Gāthā -->
        <div class="pt-2 space-y-1" :style="{ borderTop: '1px solid var(--border)' }">
          <p class="paali font-serif italic text-xs sm:text-sm font-semibold leading-relaxed" :style="{ color: 'var(--accent-bright)' }">
            « {{ currentSite.gatha }} »
          </p>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ currentSite.gathaKm }}
          </p>
        </div>
      </div>
    </div>

    <!-- THE DIVISION OF THE BUDDHA'S RELICS -->
    <div class="card-paper p-5 sm:p-7 mt-6 space-y-4">
      <div>
        <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
          <span>✨</span>
          <span>{{ t('ការបែងចែកព្រះបរមសារីរិកធាតុ (Drona’s Relic Distribution)', 'Distribution of the Buddha’s Relics') }}</span>
        </h3>
        <p class="text-xs mt-0.5" :style="{ color: 'var(--ink-muted)' }">
          {{ t('បន្ទាប់ពីថ្វាយព្រះភ្លើងព្រះបរមសពនាទីក្រុងកុសិនារា', 'After the cremation of the Buddha’s body in Kushinagar') }}
        </p>
      </div>

      <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ស្តេចនៃនគរទាំង ៨ ក្នុងជម្ពូទ្វីប បានលើកទ័ពមកដើម្បីដណ្តើមយកព្រះបរមសារីរិកធាតុ។ គ្រានោះ ទ្រោណព្រាហ្មណ៍ បានឈានជើងមកសម្របសម្រួល និងបែងចែកព្រះសារីរិកធាតុជា ៨ ចំណែកស្មើៗគ្នា ដោយសន្តិវិធី៖', 'Kings from 8 kingdoms arrived with armies to claim the relics. The wise brahmin Droṇa intervened peacefully to divide the holy relics into 8 equal portions:') }}
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
        <div class="p-3 rounded-xl space-y-0.5" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <strong class="block text-xs" :style="{ color: 'var(--ink)' }">១. ព្រះបាទអជាតសត្តុ</strong>
          <span class="text-[11px]" :style="{ color: 'var(--ink-muted)' }">នគរមគធៈ (រាជគ្រឹះ)</span>
        </div>
        <div class="p-3 rounded-xl space-y-0.5" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <strong class="block text-xs" :style="{ color: 'var(--ink)' }">២. ពួកលិច្ឆវី</strong>
          <span class="text-[11px]" :style="{ color: 'var(--ink-muted)' }">នគរវេសាលី</span>
        </div>
        <div class="p-3 rounded-xl space-y-0.5" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <strong class="block text-xs" :style="{ color: 'var(--ink)' }">៣. ពួកសក្យៈ</strong>
          <span class="text-[11px]" :style="{ color: 'var(--ink-muted)' }">នគរកបិលវត្ថុ</span>
        </div>
        <div class="p-3 rounded-xl space-y-0.5" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <strong class="block text-xs" :style="{ color: 'var(--ink)' }">៤. ពួកថូលី</strong>
          <span class="text-[11px]" :style="{ color: 'var(--ink-muted)' }">នគរអល្លកប្បៈ</span>
        </div>
        <div class="p-3 rounded-xl space-y-0.5" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <strong class="block text-xs" :style="{ color: 'var(--ink)' }">៥. ពួកកោឡិយៈ</strong>
          <span class="text-[11px]" :style="{ color: 'var(--ink-muted)' }">នគររាមគ្រាម</span>
        </div>
        <div class="p-3 rounded-xl space-y-0.5" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <strong class="block text-xs" :style="{ color: 'var(--ink)' }">៦. ពួកព្រាហ្មណ៍</strong>
          <span class="text-[11px]" :style="{ color: 'var(--ink-muted)' }">វេដ្ឋទីបកនគរ</span>
        </div>
        <div class="p-3 rounded-xl space-y-0.5" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <strong class="block text-xs" :style="{ color: 'var(--ink)' }">៧. ពួកមល្លៈ</strong>
          <span class="text-[11px]" :style="{ color: 'var(--ink-muted)' }">នគរបាវ៉ា</span>
        </div>
        <div class="p-3 rounded-xl space-y-0.5" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <strong class="block text-xs" :style="{ color: 'var(--ink)' }">៨. ពួកមល្លៈ</strong>
          <span class="text-[11px]" :style="{ color: 'var(--ink-muted)' }">នគរកុសិនារា</span>
        </div>
      </div>
    </div>
  </div>
</template>
