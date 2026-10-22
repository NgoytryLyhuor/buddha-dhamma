<script setup>
import { inject, ref, computed } from 'vue'

const currentLocale = inject('locale', ref('km'))
function t(km, en) {
  return currentLocale.value === 'en' ? (en || km) : km
}

const activeFilter = ref('all') // 'all' or by visuddhi
const searchQuery = ref('')
const selectedNana = ref(null)
const showUpakkilesaModal = ref(false)

// 7 Visuddhi groupings for the 16 Ñāṇas
const visuddhiList = [
  { id: 'all', km: 'ទាំងអស់ (១៦ ញាណ)', en: 'All 16' },
  { id: 'ditthi', km: 'ទិដ្ឋិវិសុទ្ធិ (ញាណទី ១)', en: 'Diṭṭhi Visuddhi' },
  { id: 'kankha', km: 'កង្ខាវិតរណវិសុទ្ធិ (ញាណទី ២)', en: 'Kaṅkhāvitaraṇa' },
  { id: 'maggamagga', km: 'មគ្គាមគ្គញាណទស្សនវិសុទ្ធិ (ញាណទី ៣ - ៤ ខ្ចី)', en: 'Maggāmagga' },
  { id: 'patipada', km: 'បដិបទាញាណទស្សនវិសុទ្ធិ (ញាណទី ៤ ចាស់ - ១២)', en: 'Paṭipadā' },
  { id: 'nanadassana', km: 'ញាណទស្សនវិសុទ្ធិ (ញាណទី ១៣ - ១៦)', en: 'Ñāṇadassana' }
]

// Master 16 Ñāṇas Dataset
const nanas = [
  {
    step: 1,
    pali: 'Nāmarūpapariccheda-ñāṇa',
    km: 'នាមរូបបរិច្ឆេទញាណ',
    titleEn: 'Knowledge of Discerning Mentality & Materiality',
    visuddhi: 'ditthi',
    visuddhiKm: 'ទិដ្ឋិវិសុទ្ធិ (សេចក្តីបរិសុទ្ធនៃការយល់ឃើញ)',
    levelKm: 'កម្រិតបឋម (ចាប់ផ្តើមញែកដឹងសភាវៈពិត)',
    summary: 'បញ្ញាកំណត់ញែកដាច់ស្រឡះរវាង «នាម» (ចិត្ត ចេតសិក ដែលជាអ្នកដឹងអារម្មណ៍) និង «រូប» (រូបធម៌ដែលមិនដឹងអារម្មណ៍)។',
    characteristics: [
      'ឃើញច្បាស់ថា គ្មានតួខ្លួន «អញ» ឬ «គេ» ឡើយ គឺមានតែធម៌ពីរមុខគត់គឺ រូប និង នាម',
      'ពេលលើកជើង៖ កាយវិការ និងទម្ងន់ធ្ងន់ស្រាលជារូប ចំណែកចិត្តដែលដឹងការបោះជំហានជានាម',
      'ពេលឃើញរូប៖ ភ្នែក និងពន្លឺជារូប ចក្ខុវិញ្ញាណដែលដឹងជានាម',
      'កម្ចាត់សក្កាយទិដ្ឋិ (ការយល់ថារូបកាយជារបស់អញ) ក្នុងកម្រិតបញ្ញាចាប់ផ្តើម'
    ],
    experience: 'អ្នកបដិបត្តិលែងគិតថា «អញឈឺ» ឬ «អញកំពុងដើរ» គឺឃើញច្បាស់ថាកាយជារូបធាតុដែលកំពុងរងទុក្ខវេទនា ហើយចិត្តគ្រាន់តែជាអ្នកដឹងសភាវៈនោះប៉ុណ្ណោះ។',
    danger: 'ការគិតពិចារណាតាមការចងចាំ (សញ្ញា/សញ្ចេតនា) ជំនួសឱ្យការឃើញផ្ទាល់ដោយសតិបច្ចុប្បន្ន។',
    advice: 'បន្តតាមដានដឹងទាន់នូវរាល់ចលនាកាយ និងអារម្មណ៍ដែលកើតឡើងក្នុងពេលបច្ចុប្បន្ន ដោយឥតប្រកាន់មាំ។'
  },
  {
    step: 2,
    pali: 'Paccayapariggaha-ñāṇa',
    km: 'បច្ចយបរិគ្គហញាណ',
    titleEn: 'Knowledge of Discerning Cause and Condition',
    visuddhi: 'kankha',
    visuddhiKm: 'កង្ខាវិតរណវិសុទ្ធិ (សេចក្តីបរិសុទ្ធដោយឆ្លងផុតសេចក្តីសង្ស័យ)',
    levelKm: 'កម្រិតបឋម (យល់ច្បាស់ច្បាប់ហេតុផល)',
    summary: 'បញ្ញាកំណត់ដឹងហេតុនិងបច្ច័យដែលតាក់តែងឱ្យនាមនិងរូបកើតឡើង យល់ច្បាស់ពីបដិច្ចសមុប្បាទ។',
    characteristics: [
      'ដឹងច្បាស់ថានាមនិងរូបមិនមែនកើតឡើងដោយចៃដន្យ ឬកើតពីព្រះអាទិទេពបង្កើតឡើយ',
      'រូបកើតពីបច្ច័យ ៤ គឺ៖ កម្ម ចិត្ត ឧតុ អាហារ',
      'នាមកើតពីបច្ច័យ៖ មានទ្វារ មានអារម្មណ៍ មានផស្សៈ ទើបកើតវិញ្ញាណ និងវេទនា',
      'កម្ចាត់សេចក្តីសង្ស័យទាំង ១៦ យ៉ាងក្នុងកាលទាំង ៣ (អតីត បច្ចុប្បន្ន អនាគត)'
    ],
    experience: 'អ្នកបដិបត្តិឃើញទំនាក់ទំនងច្បាស់៖ «ព្រោះមានចេតនាចង់ឈាន ទើបជើងបោះជំហានទៅមុខ», «ព្រោះមានក្លិនមកប៉ះច្រមុះ ទើបឃានវិញ្ញាណដឹងក្លិនកើតឡើង»។',
    danger: 'ធ្លាក់ចូលក្នុងការគិតពិចារណាវិភាគទ្រឹស្តីច្រើនពេក (អភិធម្មចិន្តា) រហូតភ្លេចកំណត់ដឹងអារម្មណ៍បច្ចុប្បន្ន។',
    advice: 'គ្រាន់តែកត់សម្គាល់ឃើញហេតុនិងផលដែលលេចឡើងនៅចំពោះមុខ ហើយវិលត្រឡប់មករកការដឹងទាន់ដង្ហើម ឬកាយវិការវិញ។'
  },
  {
    step: 3,
    pali: 'Sammasana-ñāṇa',
    km: 'សម្មសនញាណ',
    titleEn: 'Knowledge of Comprehension (The Three Marks)',
    visuddhi: 'maggamagga',
    visuddhiKm: 'មគ្គាមគ្គញាណទស្សនវិសុទ្ធិ',
    levelKm: 'កម្រិតមធ្យម (ពិចារណាត្រៃលក្ខណ៍)',
    summary: 'បញ្ញាលើកយកនាមធម៌ និងរូបធម៌មកពិចារណាដោយភាពជា អនិច្ចំ (មិនទៀង) ទុក្ខំ (ជាទុក្ខទ្រាំបានពិបាក) និង អនត្តា (មិនមែនជារបស់ខ្លួន)។',
    characteristics: [
      'ពិចារណានាមរូបតាមកាលទាំង ៣ (អតីត បច្ចុប្បន្ន អនាគត) និងតាមទិដ្ឋភាព ១១ យ៉ាង',
      'ឃើញការប្រែប្រួលនៃអារម្មណ៍ វេទនា កាយវិការ មិននៅនឹងនឡើយ',
      'ចាប់ផ្តើមឃើញទុក្ខវេទនាក្នុងរាងកាយយ៉ាងច្បាស់ (កាលណានៅស្ងៀមយូរ ទុក្ខវេទនាលេចធ្លោឡើង)',
      'យល់ច្បាស់ថាគ្មានរបស់ណាមួយឋិតថេរឡើយ'
    ],
    experience: 'អ្នកបដិបត្តិអង្គុយសមាធិឃើញការឈឺចុកចាប់កើនឡើង ក៏ពិចារណាឃើញថា ទុក្ខវេទនាក៏កើតហើយរលត់ ចិត្តដែលដឹងក៏ប្រែប្រួល គ្មានអ្វីស្ថិតស្ថេរ។',
    danger: 'ការប្រើប្រាស់ការគិតត្រិះរិះ (Thinking/Reasoning) ច្រើនជាងការមើលឃើញដោយផ្ទាល់ (Direct Seeing)។',
    advice: 'ផ្តោតអារម្មណ៍ឱ្យមូល កុំបង្ខំគិត ទុកឱ្យបញ្ញាឃើញសភាវធម៌តាមការពិត។'
  },
  {
    step: 4,
    pali: 'Udayabbaya-ñāṇa',
    km: 'ឧទយព្វយញាណ',
    titleEn: 'Knowledge of Arising and Passing Away',
    visuddhi: 'maggamagga',
    visuddhiKm: 'មគ្គាមគ្គញាណទស្សនវិសុទ្ធិ & បដិបទា',
    levelKm: 'កម្រិតចំណុចរបត់ធំ! (កន្លែងកើតវិបស្សនូបក្កិលេស)',
    summary: 'បញ្ញាឃើញច្បាស់នូវការកើតឡើងភ្លាម និងរលត់ទៅវិញភ្លាមៗនៃនាមនិងរូបយ៉ាងលឿនរហ័សបំផុត។',
    characteristics: [
      'ឃើញ «ឧទយ» (ការកើតឡើង) និង «វយ» (ការរលត់បាត់ទៅ) នៃរូបនាមច្បាស់ដូចខ្សែទឹកហូរ ឬអណ្តាតភ្លើងទៀន',
      'សតិ និងសមាធិមុតស្រួចខ្លាំងបំផុត ស្ទើរតែដឹងទាន់រាល់ខណៈចិត្ត',
      'ក្នុងដំណាក់កាលខ្ចី (តរុណឧទយព្វយ) នឹងកើត **វិបស្សនូបក្កិលេស ១០** (ពន្លឺរស្មី បីតិជ្រាលជ្រៅ សេចក្តីសុខហួសប្រមាណ)',
      'ពេលឆ្លងផុតឧបក្កិលេសហើយ ទើបឡើងដល់ «ពលវឧទយព្វយ» ឃើញតែកើតរលត់សុទ្ធសាធ'
    ],
    experience: 'អ្នកបដិបត្តិឃើញពន្លឺភ្លឺចិញ្ចែងចាចក្នុងបន្ទប់ ឬក្នុងចិត្ត (ឱភាស) មានបីតិរោមក្រោក ស្រាលកាយដូចហោះ (បីតិ) មានសេចក្តីស្ងប់សុខក្រៃលែងដែលមិនធ្លាប់ជួបក្នុងជីវិត។',
    danger: '⚠️ គ្រោះថ្នាក់បំផុត! យល់ច្រឡំថាពន្លឺ និងសេចក្តីសុខនោះជា «ព្រះនិព្វាន» ឬគិតថាខ្លួនបានត្រាស់ដឹងជាព្រះអរិយបុគ្គល ហើយជាប់ជំពាក់នឹងសេចក្តីសុខនោះ។',
    advice: 'ត្រូវដឹងថា ពន្លឺ សុខ បីតិ សុទ្ធតែជាសង្ខារធម៌មិនទៀងទាត់! កំណត់ដឹង «ពន្លឺហ្ន៎ៗ», «សុខហ្ន៎ៗ» ហើយរំលងវាទៅមុខទៀត។'
  },
  {
    step: 5,
    pali: 'Bhaṅga-ñāṇa',
    km: 'ភង្គញាណ',
    titleEn: 'Knowledge of Dissolution',
    visuddhi: 'patipada',
    visuddhiKm: 'បដិបទាញាណទស្សនវិសុទ្ធិ',
    levelKm: 'កម្រិតជាន់ខ្ពស់ (ឃើញតែការបែកធ្លាយរលត់សូន្យ)',
    summary: 'បញ្ញាលែងឃើញការកើតឡើងទៀតហើយ គឺឃើញតែ «ការបែកធ្លាយ ការរលត់សូន្យបាត់ទៅ» នៃនាមរូបប៉ុណ្ណោះ។',
    characteristics: [
      'ចិត្តលែងចាប់អារម្មណ៍លើរូបរាង ឬសណ្ឋាន (បញ្ញត្តិ) គឺឃើញតែការរលត់ៗៗៗ ឥតឈប់ឈរ',
      'អារម្មណ៍ដែលមកប៉ះភ្នែក ត្រចៀក ឬចិត្ត គ្រាន់តែលេចឡើងភ្លាម ក៏បែកធ្លាយរលត់ភ្លាម',
      'ចិត្តដែលជាអ្នកដឹង ក៏រលត់ទៅជាមួយអារម្មណ៍ដែលត្រូវដឹងដែរ (ទាំងគូៗ)',
      'ឃើញពិភពលោកទាំងមូលដូចជាពពុះទឹក ឬផេះធ្យូងដែលកំពុងរលាយសាបសូន្យ'
    ],
    experience: 'ពេលកំណត់ដឹងដង្ហើម ឬការបោះជំហាន មិនឃើញដង្ហើមវែងខ្លីទេ ឃើញតែការរលត់បាត់ៗ។ ឃើញរាងកាយដូចជាកំពុងរលួយបែកធ្លាយទៅក្នុងភាពទទេស្អាត។',
    danger: 'អាចកើតសេចក្តីធុញថប់ ឬវិលមុខដោយសារឃើញការបែកធ្លាយលឿនពេក។',
    advice: 'រក្សាចិត្តឱ្យនឹងធឹង កុំភ័យតក់ស្លុត តាមដឹងការរលត់នោះដោយចិត្តឧបេក្ខា។'
  },
  {
    step: 6,
    pali: 'Bhaya-ñāṇa',
    km: 'ភយញាណ',
    titleEn: 'Knowledge of Terror / Fearfulness',
    visuddhi: 'patipada',
    visuddhiKm: 'បដិបទាញាណទស្សនវិសុទ្ធិ',
    levelKm: 'កម្រិតជាន់ខ្ពស់ (ឃើញភាពគួរឱ្យភ័យខ្លាច)',
    summary: 'បញ្ញាឃើញច្បាស់ថាសង្ខារធម៌ទាំងឡាយដែលតែងតែរលត់បែកធ្លាយឥតឈប់ឈរនោះ គឺជាសភាវៈគួរឱ្យភ័យខ្លាចបំផុត។',
    characteristics: [
      'យល់ឃើញថារូបកាយ និងចិត្តនេះ មិនមែនជាទីពឹងពិតប្រាកដឡើយ ព្រោះតែងតែរលត់ទៅជាធម្មតា',
      'ភពទាំង ៣១ (កាមភព រូបភព អរូបភព) ប្រៀបដូចផ្ទះដែលកំពុងត្រូវភ្លើងឆេះ',
      'មិនមែនជាការភ័យខ្លាចបែបកិលេស (ទោសៈ) ទេ តែជាការភ័យខ្លាចដោយបញ្ញាយល់ឃើញការពិត',
      'បាត់បង់ការជឿជាក់លើវត្ថុខាងក្រៅទាំងស្រុង'
    ],
    experience: 'អ្នកបដិបត្តិមានអារម្មណ៍ស្រៀវក្នុងចិត្ត ឃើញថាសូម្បីតែជីវិតរបស់ខ្លួន ក៏ប្រៀបដូចឈរលើមាត់ជ្រោះដែលត្រៀមនឹងបាក់រលំគ្រប់វិនាទី។',
    danger: 'ច្រឡំការភ័យខ្លាចនៃបញ្ញានេះ ទៅជាការថប់បារម្ភបែបជំងឺផ្លូវចិត្ត (Panic/Anxiety) ហើយចង់ឈប់បដិបត្តិ។',
    advice: 'ត្រូវចាំថា នេះជាសញ្ញាល្អនៃបញ្ញាដែលកំពុងដោះខ្លួនចេញពីការយល់ច្រឡំ។ ចូរតាំងចិត្តក្លាហានបន្តទៀត។'
  },
  {
    step: 7,
    pali: 'Ādīnava-ñāṇa',
    km: 'អាទីនវញាណ',
    titleEn: 'Knowledge of Danger',
    visuddhi: 'patipada',
    visuddhiKm: 'បដិបទាញាណទស្សនវិសុទ្ធិ',
    levelKm: 'កម្រិតជាន់ខ្ពស់ (ឃើញទោសនៃសង្ខារ)',
    summary: 'បញ្ញាឃើញទោស និងគ្រោះថ្នាក់នៃនាមរូបសង្ខារ ថាមិនមានសារៈខ្លឹមសារបន្តិចសោះឡើយ។',
    characteristics: [
      'ឃើញថាសង្ខារធម៌ទាំងអស់ពោរពេញដោយទោស ទុក្ខទោស និងវិបត្តិ',
      'ការកើត ការចាស់ ការឈឺ ការស្លាប់ សុទ្ធតែជាទោសដែលចៀសមិនផុត',
      'ឃើញច្បាស់ថា គ្មានសេចក្តីសុខណាមួយក្នុងលោកដែលជាសុខពិតប្រាកដឡើយ (សុខទាំងអស់បង្កប់ទុក្ខ)',
      'ចិត្តចាប់ផ្តើមរអា មិនចង់កើតក្នុងភពណាមួយទៀតឡើយ'
    ],
    experience: 'ធ្លាប់គិតថា ទ្រព្យសម្បត្តិ កិត្តិយស គ្រួសារ ជាទីពឹងកក់ក្តៅ តែពេលនេះបញ្ញាឆ្លុះបញ្ចាំងឃើញថា សុទ្ធតែជារបស់នាំមកនូវសេចក្តីព្រួយបារម្ភ និងសេចក្តីទុក្ខ។',
    danger: 'ការធ្លាក់ទឹកចិត្ត អស់សង្ឃឹមនឹងជីវិត (Depression) ប្រសិនបើខ្វះសទ្ធា និងការណែនាំពីគ្រូ។',
    advice: 'កុំទន់ជ្រាយ! ព្រះពុទ្ធឱ្យឃើញទោសដើម្បីស្វែងរក «ផ្លូវចេញ» គឺព្រះនិព្វាន មិនមែនឱ្យអស់សង្ឃឹមឡើយ។'
  },
  {
    step: 8,
    pali: 'Nibbidā-ñāṇa',
    km: 'និព្វិទាញាណ',
    titleEn: 'Knowledge of Disenchantment',
    visuddhi: 'patipada',
    visuddhiKm: 'បដិបទាញាណទស្សនវិសុទ្ធិ',
    levelKm: 'កម្រិតជាន់ខ្ពស់ (សេចក្តីធុញទ្រាន់សង្ខារ)',
    summary: 'បញ្ញាធុញទ្រាន់ ណាយចិត្ត លែងជាប់ជំពាក់នឹងរូប សំឡេង ក្លិន រស ឬភពណាមួយឡើយ។',
    characteristics: [
      '«និព្វិន្ទតិ» ធុញទ្រាន់នឹងរូប ធុញទ្រាន់នឹងវេទនា សញ្ញា សង្ខារ វិញ្ញាណ',
      'ចិត្តមិនរីករាយនឹងកាមគុណ ឬការកម្សាន្តក្នុងលោកទៀតឡើយ (ដូចកូនសត្វដែលចង់រួចពីទ្រុង)',
      'លែងមានការត្រេកអរនឹងរឿងលោកិយ តែមិនមែនជាការខឹងស្អប់ទេ គឺណាយចិត្តបែបស្ងប់ស្ងាត់',
      'ជាស្ពានចម្លងឆ្ពោះទៅកាន់ការលះបង់ (វិរាគៈ)'
    ],
    experience: 'អ្នកបដិបត្តិនឹកឃើញអាហារឆ្ងាញ់ៗ កន្លែងកម្សាន្ត ឬទ្រព្យសម្បត្តិ ក៏លែងមានអារម្មណ៍រំភើប គឺមានតែការណាយចិត្ត ចង់តែអង្គុយស្ងប់ស្ងាត់ចម្រើនធម៌។',
    danger: 'ការគិតថាខ្លួនឯងលែងមានអារម្មណ៍ ឬក្លាយជាមនុស្សគ្មានបេះដូង។',
    advice: 'នេះជាសេចក្តីធុញទ្រាន់ដ៏ពិសិដ្ឋ (ធម្មនិព្វិទា) ដែលកាត់ផ្តាច់ចំណងតណ្ហា។ ចូររក្សាចិត្តស្ងប់ និងតស៊ូទៅមុខ។'
  },
  {
    step: 9,
    pali: 'Muñcitukamyatā-ñāṇa',
    km: 'មុញ្ចិតុកម្យតាញាណ',
    titleEn: 'Knowledge of Desire for Deliverance',
    visuddhi: 'patipada',
    visuddhiKm: 'បដិបទាញាណទស្សនវិសុទ្ធិ',
    levelKm: 'កម្រិតជាន់ខ្ពស់ (បំណងចង់រួចផុត)',
    summary: 'បញ្ញាកើតសេចក្តីប្រាថ្នាយ៉ាងខ្លាំងក្លាក្នុងការដោះខ្លួនឱ្យរួចផុតចាកគុកនៃសង្ខារវដ្ត។',
    characteristics: [
      'ប្រៀបដូចសត្វត្រីដែលជាប់ក្នុងសំណាញ់ ចង់តែលោតចេញទៅក្នុងទឹកថ្លាវិញ',
      'ប្រៀបដូចសត្វស្លាបដែលជាប់ក្នុងទ្រុង ឬបុរសដែលធ្លាក់ក្នុងរណ្តៅភក់ជ្រៅ ចង់តែឡើងលើគោក',
      'មានបំណងតែមួយគត់គឺ៖ ធ្វើដូចម្តេចទើបរួចផុតចាកគំនរទុក្ខ និងការកើតរលត់នេះ?',
      'ជំរុញឱ្យកើតសេចក្តីព្យាយាមទ្វេដង'
    ],
    experience: 'មានបំណងរើបម្រាស់ចេញពីវដ្តសង្ខារយ៉ាងមុតមាំ លែងខ្វល់ពីរឿងផ្ទាល់ខ្លួន ខិតខំកំណត់ដឹងអារម្មណ៍គ្រប់ដង្ហើមចេញចូល។',
    danger: 'ការកើតសេចក្តីអន្ទះអន្ទែងចង់បានមគ្គផលលឿនពេក (អភិជ្ឈា) ដែលធ្វើឱ្យបាត់បង់សមាធិ។',
    advice: 'កុំបង្ខំចិត្ត! កិច្ចការរបស់អ្នកគឺត្រឹមតែកំណត់ដឹង មិនមែនជាអ្នកបង្កើតព្រះនិព្វានឡើយ។ ព្រះនិព្វាននឹងប្រាកដឡើងដោយឯកឯងពេលបញ្ញាពេញលេញ។'
  },
  {
    step: 10,
    pali: 'Paṭisaṅkhā-ñāṇa',
    km: 'បដិសង្ខាញាណ',
    titleEn: 'Knowledge of Re-observation',
    visuddhi: 'patipada',
    visuddhiKm: 'បដិបទាញាណទស្សនវិសុទ្ធិ',
    levelKm: 'កម្រិតជាន់ខ្ពស់ (ពិនិត្យឡើងវិញយ៉ាងដិតដល់)',
    summary: 'បញ្ញាត្រឡប់មកពិនិត្យមើលត្រៃលក្ខណ៍នៃនាមរូបជាថ្មីម្តងទៀត ដោយបញ្ញាមុតស្រួចជាទីបំផុត ដើម្បីស្វែងរកផ្លូវរំដោះខ្លួន។',
    characteristics: [
      'ពិចារណាអនិច្ចំ ទុក្ខំ អនត្តា លើកនេះកាន់តែច្បាស់ និងស៊ីជម្រៅជាងកាលនៅសម្មសនញាណរាប់រយដង',
      'ឃើញច្បាស់ថាក្នុងនាមរូបគ្មានកន្លែងណាដែលអាចឱ្យតោងទាមបានសូម្បីតែបន្តិចបន្តួច',
      'ទុក្ខវេទនាលើរាងកាយអាចលេចឡើងខ្លាំងក្លាជាថ្មី តែចិត្តរឹងមាំដូចថ្មដា មិនរំជើបរំជួល',
      'រៀបចំចិត្តឱ្យចូលដល់ «សង្ខារុបេក្ខាញាណ»'
    ],
    experience: 'ការឈឺចុកចាប់ពេញរាងកាយអាចកើតឡើងសាជាថ្មី ប៉ុន្តែអ្នកបដិបត្តិកំណត់ដឹងដោយភាពក្លាហាន ឃើញការឈឺ និងចិត្តដឹងញែកដាច់ពីគ្នា មិនច្រឡូកច្រឡំ។',
    danger: 'ការចុះចាញ់នឹងទុក្ខវេទនាដែលផុសឡើងខ្លាំង។',
    advice: 'អត់ធន់ជាទីបំផុត! ជិតដល់ច្រកចេញហើយ កុំបោះបង់ការកំណត់ដឹងឱ្យសោះ។'
  },
  {
    step: 11,
    pali: 'Saṅkhārupekkhā-ñāṇa',
    km: 'សង្ខារុបេក្ខាញាណ',
    titleEn: 'Knowledge of Equanimity towards Formations',
    visuddhi: 'patipada',
    visuddhiKm: 'បដិបទាញាណទស្សនវិសុទ្ធិ',
    levelKm: 'កំពូលនៃលោកិយវិបស្សនា! (ក្បែរដល់មគ្គផល)',
    summary: 'បញ្ញាតម្កល់ចិត្តជាកណ្តាល (ឧបេក្ខា) មិនត្រេកអរ មិនខឹងស្អប់ចំពោះសង្ខារធម៌ទាំងពួង។ ចិត្តស្ងប់បរិសុទ្ធបំផុត។',
    characteristics: [
      'លែងភ័យខ្លាច (ដូចក្នុងភយញាណ) និងលែងធុញទ្រាន់អន្ទះអន្ទែង (ដូចក្នុងនិព្វិទាញាណ)',
      'ចិត្តស្មើចំពោះអារម្មណ៍ទាំងអស់ ទោះល្អ ឬអាក្រក់ ស្រួល ឬឈឺចាប់',
      'ប្រៀបដូចបុរសដែលលែងលះប្រពន្ធដាច់ស្រឡះហើយ ទោះនាងធ្វើអ្វីក៏លែងខ្វល់ខ្វាយ',
      'សមាធិ និងបញ្ញាដើរស្មើគ្នាដោយរលូន ឥតបាច់ប្រឹងប្រែងខ្លាំង (អនាភោគ)'
    ],
    experience: 'ការកំណត់ដឹងប្រព្រឹត្តទៅដោយស្វ័យប្រវត្តិ ស្រួលស្រាល ស្ងប់ស្ងៀម អង្គុយសមាធិរាប់ម៉ោងដូចមួយពព្រិចភ្នែក ចិត្តមិនរវើរវាយសូម្បីមួយដំណក់។',
    danger: 'ការស្កប់ស្កល់នឹងសេចក្តីស្ងប់ឧបេក្ខានេះ ហើយឈប់បន្តដំណើរ។',
    advice: 'គ្រាន់តែបន្តដឹងទាន់ដោយស្ងៀមស្ងាត់ មិនបាច់ធ្វើអ្វីទាំងអស់ ទុកឱ្យធម្មជាតិធម៌បំពេញកិច្ចរបស់វា។'
  },
  {
    step: 12,
    pali: 'Anuloma-ñāṇa',
    km: 'អនុលោមញាណ',
    titleEn: 'Knowledge of Conformity / Adaptation',
    visuddhi: 'patipada',
    visuddhiKm: 'បដិបទាញាណទស្សនវិសុទ្ធិ (ខណៈចុងក្រោយ)',
    levelKm: 'ស្ពានចម្លង (កើតឡើង ២ ឬ ៣ ខណៈចិត្តប៉ុណ្ណោះ)',
    summary: 'បញ្ញាសម្របខ្លួនឱ្យស្របគ្នារវាងសច្ចធម៌នៃសង្ខារខាងក្រោម និងអរិយសច្ច ៤ នៃព្រះនិព្វានខាងលើ។',
    characteristics: [
      'កើតឡើងក្នុង «មគ្គវិថី» (វិថីចិត្តត្រាស់ដឹង)',
      'កើតឡើងតែ ២ ឬ ៣ ខណៈចិត្តប៉ុណ្ណោះ គឺ បរិកម្ម ឧបចារ អនុលោម',
      'ជាការឃើញត្រៃលក្ខណ៍ជាលើកចុងក្រោយបង្អស់នៃសង្ខារធម៌',
      'បញ្ជូនអារម្មណ៍បន្តទៅឱ្យ «គោត្រភូញាណ»'
    ],
    experience: 'កើតឡើងលឿនបំផុតក្នុងចិត្ត មិនអាចកត់សម្គាល់ដោយការគិតបានឡើយ គឺកើតឡើងដោយកម្លាំងសមាធិ និងបញ្ញាដែលទុំជោរពេញទំហឹង។',
    danger: 'គ្មាន (ព្រោះជាដំណើរស្វ័យប្រវត្តិនៃមគ្គវិថី)។',
    advice: 'សតិ និងសមាធិកំពុងដំណើរការដោយស្វ័យប្រវត្តិ។'
  },
  {
    step: 13,
    pali: 'Gotrabhū-ñāṇa',
    km: 'គោត្រភូញាណ',
    titleEn: 'Knowledge of Change of Lineage',
    visuddhi: 'nanadassana',
    visuddhiKm: 'ញាណទស្សនវិសុទ្ធិ (ចំណុចឆ្លងកាត់)',
    levelKm: 'កាត់ផ្តាច់ពូជបុថុជ្ជន ក្លាយជាពូជព្រះអរិយៈ',
    summary: 'បញ្ញាកាត់ផ្តាច់ពូជបុថុជ្ជន ហើយឈានជើងចូលកាន់ពូជពង្សនៃព្រះអរិយបុគ្គល ដោយចាប់យកព្រះនិព្វានជាអារម្មណ៍ជាលើកដំបូង! (តែមិនទាន់កាត់ផ្តាច់កិលេសនៅឡើយ)។',
    characteristics: [
      'កើតឡើងតែ ១ ខណៈចិត្តគត់!',
      'ប្រៀបដូចបុរសដែលលោតឆ្លងអូរទឹក ជើងម្ខាងផុតពីច្រាំងលោកិយ តែមិនទាន់ជាន់ដល់ច្រាំងម្ខាងទៀត',
      'លែងយកសង្ខារធម៌ជាអារម្មណ៍ទៀតហើយ គឺចាប់យក «ព្រះនិព្វាន» ជាអារម្មណ៍ជាលើកដំបូងបង្អស់ក្នុងសង្សារវដ្ត',
      'ជាចំណុចព្រំប្រទល់រវាង លោកិយ និង លោកុត្តរៈ'
    ],
    experience: 'សង្ខារធម៌ទាំងអស់រលត់បាត់ស្រមោលមួយរំពេច គ្មានរូប គ្មានសំឡេង គ្មានដង្ហើម គឺជួបប្រទះនូវសភាវៈស្ងប់ស្ងាត់បរិសុទ្ធដែលមិនធ្លាប់ស្គាល់។',
    danger: 'គ្មាន។',
    advice: 'ជាខណៈចិត្តដ៏អស្ចារ្យដែលមិនអាចត្រឡប់ថយក្រោយបានឡើយ។'
  },
  {
    step: 14,
    pali: 'Magga-ñāṇa',
    km: 'មគ្គញាណ (សោតាបត្តិមគ្គ...)',
    titleEn: 'Knowledge of the Noble Path',
    visuddhi: 'nanadassana',
    visuddhiKm: 'ញាណទស្សនវិសុទ្ធិ',
    levelKm: 'លោកុត្តរៈ (កម្ចាត់កិលេសជាស្ថាពរ)',
    summary: 'បញ្ញាក្នុងអរិយមគ្គ កម្ចាត់កិលេស និងសញ្ញោជនៈឱ្យជ្រះស្រឡះជាស្ថាពរ មិនកើតឡើងវិញឡើយ។',
    characteristics: [
      'កើតឡើងតែ ១ ខណៈចិត្តគត់ក្នុងជីវិត (ចំពោះមគ្គនីមួយៗ)!',
      'បំពេញកិច្ចក្នុងអរិយសច្ចទាំង ៤ ក្នុងខណៈតែមួយ៖ កំណត់ដឹងទុក្ខ (បរិញ្ញា), លះបង់សមុទ័យ (បហានៈ), ធ្វើឱ្យជាក់ច្បាស់នូវនិរោធ (សច្ឆិកិរិយា), និងចម្រើនមគ្គ (ភាវនា)',
      'សោតាបត្តិមគ្គ កម្ចាត់សញ្ញោជនៈ ៣ ដំបូង (សក្កាយទិដ្ឋិ, វិចិកិច្ឆា, សីលព្វតបរាមាស) ដាច់ស្រឡះ',
      'បិទទ្វារអបាយភូមិទាំង ៤ ជាអមតៈ មិនអាចធ្លាក់នរក ប្រេត តិរច្ឆានទៀតឡើយ'
    ],
    experience: 'ប្រៀបដូចរន្ទះបាញ់កម្ទេចភ្នំកិលេសឱ្យរលាយជាផេះផង់មួយរំពេច ផ្លាស់ប្តូរជីវិត និងធម្មជាតិខាងក្នុងទាំងស្រុង ក្លាយជាព្រះអរិយបុគ្គលពិតប្រាកដ។',
    danger: 'គ្មាន។',
    advice: 'កំពូលនៃគោលដៅជីវិតក្នុងព្រះពុទ្ធសាសនា។'
  },
  {
    step: 15,
    pali: 'Phala-ñāṇa',
    km: 'ផលញាណ (សោតាបត្តិផល...)',
    titleEn: 'Knowledge of the Noble Fruition',
    visuddhi: 'nanadassana',
    visuddhiKm: 'ញាណទស្សនវិសុទ្ធិ',
    levelKm: 'លោកុត្តរវិបាក (សោយសន្តិសុខព្រះនិព្វាន)',
    summary: 'បញ្ញាសោយផលនៃសេចក្តីស្ងប់បរមសុខនៃព្រះនិព្វានភ្លាមៗ តៗពីមគ្គញាណដោយគ្មានចន្លោះពេល (អកាលិកោ)។',
    characteristics: [
      'កើតឡើង ២ ឬ ៣ ខណៈចិត្តភ្លាមៗបន្ទាប់ពីមគ្គញាណរលត់ទៅ',
      'ជាវិបាកចិត្តកម្រិតលោកុត្តរៈ សោយអារម្មណ៍ព្រះនិព្វានជាសុខស្ងប់បំផុត',
      'ព្រះអរិយបុគ្គលអាចចូលសមាបត្តិនេះសាជាថ្មី (ផលសមាបត្តិ) អង្គុយសោយសុខនិព្វានរាប់ម៉ោង ឬរាប់ថ្ងៃបានតាមប្រាថ្នា',
      'សន្តិភាពខាងក្នុងដែលមិនអាចប្រៀបផ្ទឹមនឹងសុខណាមួយក្នុងលោកិយបានឡើយ'
    ],
    experience: 'ចិត្តសោយនូវភាពស្ងប់រម្ងាប់ផុតចាកកិលេស គ្មានការកើតរលត់នៃនាមរូប ជាបរមសុខ (និព្វានំ បរមំ សុខំ)។',
    danger: 'គ្មាន។',
    advice: 'ជាផលកុសលដ៏ខ្ពង់ខ្ពស់នៃការខិតខំបដិបត្តិ។'
  },
  {
    step: 16,
    pali: 'Paccavekkhaṇa-ñāṇa',
    km: 'បច្ចវេក្ខណញាណ',
    titleEn: 'Knowledge of Retrospection / Reviewing',
    visuddhi: 'nanadassana',
    visuddhiKm: 'ញាណទស្សនវិសុទ្ធិ',
    levelKm: 'ការត្រួតពិនិត្យឡើងវិញ',
    summary: 'បញ្ញាពិចារណាឡើងវិញនូវមគ្គ ផល និព្វាន កិលេសដែលបានលះរួច និងកិលេសដែលនៅសេសសល់។',
    characteristics: [
      'កើតឡើងបន្ទាប់ពីចេញពីផលសមាបត្តិ ត្រឡប់មករកវិថីចិត្តធម្មតាវិញ',
      'ពិចារណា ៥ យ៉ាង (បច្ចវេក្ខណ៍ ៥):',
      '១. ពិចារណាមគ្គដែលខ្លួនទើបបានសម្រេច',
      '២. ពិចារណាផលដែលខ្លួនទើបបានសោយ',
      '៣. ពិចារណាព្រះនិព្វានដែលខ្លួនបានឃើញច្បាស់',
      '៤. ពិចារណាកិលេសដែលបានកម្ចាត់រួចហើយ',
      '៥. ពិចារណាកិលេសដែលនៅសេសសល់ (សម្រាប់ព្រះសោតាបន្ន សកទាគាមី អនាកាមី ចំណែកព្រះអរហន្តពិចារណាថាលែងមានកិលេសសេសសល់ទៀតហើយ)'
    ],
    experience: 'ព្រះអរិយបុគ្គលដឹងច្បាស់ក្នុងចិត្តខ្លួនឯងដោយឥតសង្ស័យថា៖ «ជាតិកំណើតក្នុងអបាយភូមិបានកាត់ផ្តាច់ហើយ សេចក្តីសង្ស័យក្នុងព្រះរតនត្រ័យរលត់ហើយ សីលបរិសុទ្ធហើយ»។',
    danger: 'គ្មាន។',
    advice: 'បន្តចម្រើនវិបស្សនាបន្ថែមទៀត ដើម្បីឈានទៅសម្រេចមគ្គជាន់ខ្ពស់បន្តបន្ទាប់ រហូតដល់អរហត្តផល។'
  }
]

// 10 Vipassanūpakkilesa (Corruptions of Insight)
const upakkilesas = [
  { no: 1, pali: 'Obhāsa', km: 'ឱភាស', desc: 'ពន្លឺភ្លឺចិញ្ចាចចេញពីរាងកាយ ឬក្នុងចិត្ត ភ្លឺជាងអគ្គិសនី យល់ច្រឡំថាជាព្រះនិព្វាន' },
  { no: 2, pali: 'Ñāṇa', km: 'ញាណ', desc: 'បញ្ញាយល់ធម៌លឿនភ្លែតៗ ពិចារណាធម៌ស្ទាត់ជំនាញ គិតថាខ្លួនចេះដឹងអស់ហើយ' },
  { no: 3, pali: 'Pīti', km: 'បីតិ', desc: 'សេចក្តីឆ្អែតចិត្ត កាយស្រាលហោះ ទឹកភ្នែកហូរ រោមក្រោក រំភើបជ្រាលជ្រៅ' },
  { no: 4, pali: 'Passaddhi', km: 'បស្សទ្ធិ', desc: 'សេចក្តីស្ងប់ស្ងាត់កាយចិត្ត គ្មានការឈឺចុកចាប់ ស្ងប់រហូតដល់មិនចង់កម្រើក' },
  { no: 5, pali: 'Sukha', km: 'សុខ', desc: 'សេចក្តីសុខដ៏មហិមា ស្រួលខ្លួនរកពាក្យថ្លែងពុំបាន ជាប់ចិត្តនឹងសុខនោះ' },
  { no: 6, pali: 'Adhimokkha', km: 'អធិមោក្ខ', desc: 'សទ្ធាជឿជាក់ខ្លាំងក្លាឥតខ្ចោះលើព្រះពុទ្ធ ចង់ដើរបបួលមនុស្សជុំវិញឱ្យមកបួសទាំងអស់' },
  { no: 7, pali: 'Paggaha', km: 'បគ្គហៈ', desc: 'សេចក្តីព្យាយាមខ្លាំងក្លា មិនងងុយដេក មិនឃ្លានបាយ អង្គុយសមាធិពេញមួយយប់មិនហត់' },
  { no: 8, pali: 'Upaṭṭhāna', km: 'ឧបដ្ឋាន', desc: 'សតិមុតស្រួច រឭកឃើញរឿងរ៉ាវអតីតកាល ឬដឹងទាន់រាល់ចលនាល្អិតៗ' },
  { no: 9, pali: 'Upekkhā', km: 'ឧបេក្ខា', desc: 'ចិត្តស្ងប់ព្រងើយកណ្តើយ លែងរំជើបរំជួលចំពោះរឿងអ្វីទាំងអស់' },
  { no: 10, pali: 'Nikanti', km: 'និកន្តិ', desc: '⚠️ មេគ្រោះថ្នាក់បំផុត! សេចក្តីត្រេកអរស្រឡាញ់ជាប់ចិត្តស្ងាត់ៗលើអារម្មណ៍ទាំង ៩ ខាងលើ ដោយយល់ច្រឡំថាខ្លួនត្រាស់ដឹងហើយ' }
]

const filteredNanas = computed(() => {
  return nanas.filter(n => {
    if (activeFilter.value !== 'all' && n.visuddhi !== activeFilter.value) {
      return false
    }
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase().trim()
      const matchPali = n.pali.toLowerCase().includes(q)
      const matchKm = n.km.toLowerCase().includes(q)
      const matchSum = n.summary.toLowerCase().includes(q)
      if (!matchPali && !matchKm && !matchSum) return false
    }
    return true
  })
})

function openNanaModal(nana) {
  selectedNana.value = nana
}

function closeModal() {
  selectedNana.value = null
}
</script>

<template>
  <div class="fade-up">
    <!-- Header -->
    <header class="text-center max-w-2xl mx-auto">
      <p class="chapter-label">{{ t('វិសុទ្ធិមគ្គ • Visuddhimagga Pathway', 'Visuddhimagga Pathway') }}</p>
      <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
        {{ t('វិបស្សនាញាណ ១៦ ដំណាក់កាល', 'The 16 Stages of Insight (Soḷasa Ñāṇa)') }}
      </h2>
      <div class="ornament mt-4">&#9784;</div>
      <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ផែនទីបង្ហាញផ្លូវនៃការវិវត្តនៃបញ្ញា (The 16 Stages of Insight / Soḷasa Ñāṇa) ចាប់តាំងពីការចាប់ផ្តើមញែកដឹងនាមនិងរូប រហូតដល់ការកម្ចាត់កិលេស និងសម្រេចព្រះនិព្វាន។', 'The classic map of spiritual insight from the initial discernment of mentality and materiality to the eradication of defilements and realization of Nibbāna.') }}
      </p>

      <div class="mt-5 flex justify-center">
        <button
          @click="showUpakkilesaModal = true"
          class="lang-pick px-4 py-2 text-xs font-semibold"
        >
          ⚠️ {{ t('អន្ទាក់វិបស្សនូបក្កិលេស ១០ យ៉ាង', '10 Vipassanūpakkilesa Traps') }}
        </button>
      </div>
    </header>

    <!-- Filter & Search Bar -->
    <div class="card-paper p-4 sm:p-5 mt-6">
      <div class="relative w-full">
        <span class="absolute inset-y-0 left-3 flex items-center text-xs" :style="{ color: 'var(--ink-muted)' }">🔍</span>
        <input
          v-model="searchQuery"
          type="text"
          :placeholder="t('ស្វែងរកតាមឈ្មោះញាណបាលី ខ្មែរ ឬអត្ថន័យ...', 'Search by Pali, Khmer or meaning...')"
          class="w-full pl-8 pr-8 py-2 rounded-xl text-xs sm:text-sm focus:outline-none transition"
          :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)', color: 'var(--ink)' }"
        />
        <button
          v-if="searchQuery"
          @click="searchQuery = ''"
          class="absolute inset-y-0 right-3 flex items-center text-xs"
          :style="{ color: 'var(--ink-muted)' }"
        >
          ✕
        </button>
      </div>

      <!-- Visuddhi Tabs (Uniform height, touch scroll) -->
      <div class="flex items-center gap-2 mt-4 overflow-x-auto pb-2 pt-1 scrollbar-none touch-pan-x sm:flex-wrap -mx-2 px-2 sm:mx-0 sm:px-0">
        <button
          v-for="v in visuddhiList"
          :key="v.id"
          @click="activeFilter = v.id"
          class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center"
          :class="activeFilter === v.id ? 'on' : ''"
        >
          {{ t(v.km, v.en) }}
        </button>
      </div>
    </div>

    <!-- Stepper / Grid of the 16 Ñāṇas -->
    <div class="mt-6 space-y-3">
      <div class="flex items-center justify-between text-xs" :style="{ color: 'var(--ink-muted)' }">
        <span>{{ t('បង្ហាញ ' + filteredNanas.length + ' នៃ ១៦ ញាណ', 'Showing ' + filteredNanas.length + ' of 16 Ñāṇas') }}</span>
        <span>{{ t('ចុចលើផ្ទាំងនីមួយៗដើម្បីពិនិត្យលម្អិត', 'Click any card for full details') }}</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <div
          v-for="nana in filteredNanas"
          :key="nana.step"
          @click="openNanaModal(nana)"
          class="card-paper card-paper-hover p-4 sm:p-5 cursor-pointer flex flex-col justify-between h-full"
        >
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="sutra-num font-bold text-sm" :style="{ color: 'var(--accent-bright)' }">
                #{{ nana.step }}
              </span>
              <span class="text-[11px] px-2 py-0.5 rounded font-medium" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)', color: 'var(--ink-muted)' }">
                {{ nana.visuddhiKm.split(' ')[0] }}
              </span>
            </div>

            <h3 class="font-display text-base sm:text-lg font-bold" :style="{ color: 'var(--ink)' }">
              {{ nana.km }}
            </h3>

            <p class="paali text-xs" :style="{ color: 'var(--accent)' }">
              {{ nana.pali }}
            </p>

            <p class="text-xs leading-relaxed line-clamp-2" :style="{ color: 'var(--ink-soft)' }">
              {{ nana.summary }}
            </p>
          </div>

          <div class="pt-3 mt-3 flex items-center justify-between text-xs" :style="{ borderTop: '1px solid var(--border)' }">
            <span class="text-[11px] truncate max-w-[200px]" :style="{ color: 'var(--ink-muted)' }">{{ nana.levelKm }}</span>
            <span class="font-semibold" :style="{ color: 'var(--accent-bright)' }">
              {{ t('លម្អិត →', 'Details →') }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- POP-UP MODAL: ÑĀṆA INSPECTOR -->
    <Teleport to="body">
      <div
        v-if="selectedNana"
        class="menu-backdrop fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
        @click.self="closeModal"
      >
        <div
          class="card-paper relative w-full max-w-2xl max-h-[88vh] sm:max-h-[90vh] flex flex-col rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl"
          :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }"
        >
          <!-- Modal Header -->
          <div class="p-4 sm:p-5 flex items-center justify-between border-b shrink-0" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }">
            <div>
              <div class="flex items-center gap-2">
                <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">
                  {{ t('ញាណទី ' + selectedNana.step, 'Stage ' + selectedNana.step) }}
                </span>
                <span class="text-[11px]" :style="{ color: 'var(--ink-muted)' }">
                  {{ selectedNana.visuddhiKm }}
                </span>
              </div>
              <h3 class="font-display text-lg sm:text-xl font-bold mt-0.5" :style="{ color: 'var(--ink)' }">
                {{ selectedNana.km }}
              </h3>
              <p class="paali text-xs" :style="{ color: 'var(--accent)' }">{{ selectedNana.pali }}</p>
            </div>
            <button
              @click="closeModal"
              class="w-8 h-8 rounded-full flex items-center justify-center transition text-sm"
              :style="{ background: 'var(--bg-card)', color: 'var(--ink-soft)', border: '1px solid var(--border)' }"
            >
              ✕
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
            <!-- Summary -->
            <div class="verse-box p-4 rounded-xl leading-relaxed">
              <strong class="block mb-1 font-bold" :style="{ color: 'var(--accent-bright)' }">
                📖 {{ t('ខ្លឹមសារសង្ខេប៖', 'Summary:') }}
              </strong>
              <p :style="{ color: 'var(--ink)' }">{{ selectedNana.summary }}</p>
            </div>

            <!-- Characteristics -->
            <div class="space-y-2">
              <h4 class="font-display font-bold text-sm flex items-center gap-1.5" :style="{ color: 'var(--ink)' }">
                <span>🔍</span>
                <span>{{ t('លក្ខណៈសំគាល់នៃបញ្ញាក្នុងដំណាក់កាលនេះ៖', 'Key Characteristics of Insight:') }}</span>
              </h4>
              <ul class="space-y-1.5 pl-1">
                <li
                  v-for="(c, idx) in selectedNana.characteristics"
                  :key="idx"
                  class="flex items-start gap-2 text-xs leading-relaxed"
                  :style="{ color: 'var(--ink-soft)' }"
                >
                  <span class="sutra-num font-bold mt-0.5" :style="{ color: 'var(--accent-bright)' }">✓</span>
                  <span>{{ c }}</span>
                </li>
              </ul>
            </div>

            <!-- Experience -->
            <div class="space-y-1.5">
              <h4 class="font-display font-bold text-sm flex items-center gap-1.5" :style="{ color: 'var(--ink)' }">
                <span>🧘</span>
                <span>{{ t('ការប្រាកដឡើងក្នុងចិត្តពេលអង្គុយសមាធិ៖', 'Meditative Experience:') }}</span>
              </h4>
              <p class="text-xs p-3.5 rounded-xl leading-relaxed" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)', color: 'var(--ink-soft)' }">
                {{ selectedNana.experience }}
              </p>
            </div>

            <!-- Danger / Trap -->
            <div class="space-y-1.5">
              <h4 class="font-display font-bold text-sm flex items-center gap-1.5" :style="{ color: 'var(--accent-bright)' }">
                <span>⚠️</span>
                <span>{{ t('គ្រោះថ្នាក់ ឬការភាន់ច្រឡំដែលអាចកើតមាន៖', 'Dangers or Pitfalls:') }}</span>
              </h4>
              <p class="text-xs p-3.5 rounded-xl leading-relaxed" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)', color: 'var(--ink-soft)' }">
                {{ selectedNana.danger }}
              </p>
            </div>

            <!-- Advice -->
            <div class="space-y-1.5">
              <h4 class="font-display font-bold text-sm flex items-center gap-1.5" :style="{ color: 'var(--ink)' }">
                <span>💡</span>
                <span>{{ t('ការណែនាំពីព្រះគ្រូវិបស្សនា (Advice):', 'Meditation Master Advice:') }}</span>
              </h4>
              <p class="text-xs p-3.5 rounded-xl leading-relaxed" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)', color: 'var(--ink-soft)' }">
                {{ selectedNana.advice }}
              </p>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="p-4 border-t flex justify-end shrink-0" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }">
            <button
              @click="closeModal"
              class="lang-pick px-5 py-2 text-xs font-semibold on"
            >
              {{ t('យល់ហើយ (បិទ)', 'Understood (Close)') }}
            </button>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- POP-UP MODAL: 10 VIPASSANŪPAKKILESA -->
    <Teleport to="body">
      <div
        v-if="showUpakkilesaModal"
        class="menu-backdrop fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
        @click.self="showUpakkilesaModal = false"
      >
        <div
          class="card-paper relative w-full max-w-2xl max-h-[88vh] sm:max-h-[90vh] flex flex-col rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl"
          :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }"
        >
          <!-- Modal Header -->
          <div class="p-4 sm:p-5 flex items-center justify-between border-b shrink-0" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }">
            <div>
              <h3 class="font-display text-base sm:text-xl font-bold flex items-center gap-1.5" :style="{ color: 'var(--ink)' }">
                <span>⚠️</span>
                <span>{{ t('វិបស្សនូបក្កិលេស ១០ យ៉ាង', '10 Vipassanūpakkilesa Corruptions') }}</span>
              </h3>
              <p class="text-xs mt-0.5" :style="{ color: 'var(--ink-muted)' }">
                {{ t('កើតឡើងក្នុងដំណាក់កាល ឧទយព្វយញាណ (ញាណទី ៤ ខ្ចី)', 'Occurring in tender Udayabbaya-ñāṇa (Stage 4)') }}
              </p>
            </div>
            <button
              @click="showUpakkilesaModal = false"
              class="w-8 h-8 rounded-full flex items-center justify-center transition text-sm"
              :style="{ background: 'var(--bg-card)', color: 'var(--ink-soft)', border: '1px solid var(--border)' }"
            >
              ✕
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-5 sm:p-6 overflow-y-auto space-y-3 text-xs sm:text-sm">
            <div class="verse-box p-3.5 rounded-xl leading-relaxed text-xs">
              <strong>{{ t('ចំណាំសំខាន់៖', 'Important Note:') }}</strong>
              {{ t('វិបស្សនូបក្កិលេស មិនមែនជាបាបធម៌ឡើយ! សុទ្ធតែជាសភាវៈល្អ តែវាជា «គ្រឿងសៅហ្មងនៃវិបស្សនា» ព្រោះអ្នកបដិបត្តិតែងតែយល់ច្រឡំថាពន្លឺ និងសុខនោះជាព្រះនិព្វាន។', 'Vipassanūpakkilesa are not unwholesome states, but corruptions of insight because the meditator mistakes brilliant light and bliss for Nibbāna.') }}
            </div>

            <div class="space-y-2">
              <div
                v-for="u in upakkilesas"
                :key="u.no"
                class="p-3 rounded-xl flex items-start gap-2.5 text-xs leading-relaxed"
                :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }"
              >
                <span class="sutra-num font-bold text-xs shrink-0 mt-0.5" :style="{ color: 'var(--accent-bright)' }">
                  {{ u.no }}.
                </span>
                <div class="space-y-0.5">
                  <div class="flex items-center gap-1.5 flex-wrap">
                    <strong class="font-bold" :style="{ color: 'var(--ink)' }">{{ u.km }}</strong>
                    <span class="paali text-[11px]" :style="{ color: 'var(--ink-muted)' }">({{ u.pali }})</span>
                  </div>
                  <p :style="{ color: 'var(--ink-soft)' }">{{ u.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="p-4 border-t flex justify-end shrink-0" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }">
            <button
              @click="showUpakkilesaModal = false"
              class="lang-pick px-5 py-2 text-xs font-semibold on"
            >
              {{ t('បិទផ្ទាំង', 'Close') }}
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>
