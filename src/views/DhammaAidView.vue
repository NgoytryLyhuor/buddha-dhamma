<script setup>
import { inject, ref, computed } from 'vue'

const currentLocale = inject('locale', ref('km'))
function t(km, en) {
  return currentLocale.value === 'en' ? (en || km) : km
}

const selectedEmotion = ref('anger')
const isTimerRunning = ref(false)
const timerSeconds = ref(180) // 3 minutes
const timerInterval = ref(null)

const emotions = [
  {
    id: 'anger',
    emoji: '🔥',
    titleKm: 'កំហឹង និងក្តៅក្រហាយ',
    titlePali: 'Kodha / Dosa',
    color: 'from-red-500/20 to-orange-500/10 border-red-500/30 text-red-700 dark:text-red-300',
    rootCause: 'កើតចេញពីការមិនបានដូចចិត្ត (បដិឃៈ) ការប្រកាន់តួខ្លួន (សក្កាយទិដ្ឋិ) និងការយល់ថាគេកំពុងប្រមាថយើង។',
    suttaName: 'កកចូបមសូត្រ (ឧបមាដោយរណារ) & កោធនសូត្រ',
    suttaQuote: '«ម្នាលភិក្ខុទាំងឡាយ ទោះបីជាមានចោរព្រៃយកកាំបិតរណារមកអារកាត់អវយវៈធំតូចរបស់អ្នក ក៏អ្នកកុំបណ្តោយឱ្យចិត្តខឹងក្រោធឡើយ... ចូរផ្សាយចិត្តប្រកបដោយមេត្តាធំធេងទៅកាន់សព្វសត្វ។»',
    buddhaWisdom: [
      'កំហឹងប្រៀបដូចការចាប់ធ្យូងកំពុងឆេះដើម្បីគប់ទៅលើអ្នកដទៃ៖ ខ្លួនឯងរលាកដៃមុនគេបង្អស់!',
      'អ្នកដែលយើងខឹង គេមានកម្មជារបស់គេ (កុសល ឬអកុសល) គេមិនអាចរួចផុតពីកម្មឡើយ។ ចុះហេតុអ្វីយើងបង្កើតបាបកម្មមកដុតបំផ្លាញខ្លួនឯង?',
      'រកមើលចំណុចល្អដែលនៅសល់របស់គេ៖ បើគេសម្តីអាក្រក់ តែចិត្តល្អ ឬធ្លាប់ជួយយើង ចូរនឹកឃើញចំណុចនោះ។'
    ],
    antidote: 'មេត្តាភាវនា និង ខន្តី',
    threeMinPractice: [
      { step: 'នាទី ១: បញ្ចេញកម្តៅ', text: 'ដកដង្ហើមចូលជ្រៅៗតាមច្រមុះ ហើយដកដង្ហើមចេញវែងៗតាមមាត់យឺតៗ ៣ ដង។ ស្រមៃថាកម្តៅ និងភាពតឹងណែនកំពុងរសាយចេញពីទ្រូង។' },
      { step: 'នាទី ២: ពិចារណាកម្មផល', text: 'ទន្ទេញក្នុងចិត្តថា៖ «យើងទាំងអស់គ្នាសុទ្ធតែជាអ្នករងទុក្ខក្នុងសង្សារវដ្ត។ គេក៏មានទុក្ខ ខ្ញុំក៏មានទុក្ខ។ ខ្ញុំមិនព្រមយកកំហឹងគេមកធ្វើជាថ្នាំពុលក្នុងចិត្តខ្ញុំឡើយ។»' },
      { step: 'នាទី ៣: ផ្សាយមេត្តា', text: 'តាំងចិត្តថា៖ «សូមឱ្យចិត្តខ្ញុំបានស្ងប់។ សូមឱ្យបុគ្គលនោះបានជួបសេចក្តីសុខ និងផុតចាកសេចក្តីវង្វេង។»' }
    ]
  },
  {
    id: 'grief',
    emoji: '💧',
    titleKm: 'ទុក្ខសោក & បាត់បង់',
    titlePali: 'Soka / Parideva',
    color: 'from-blue-500/20 to-indigo-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300',
    rootCause: 'ការជាប់ជំពាក់នឹងរបស់ដែលមិនទៀង (តណ្ហា និងឧបាទាន) ហើយរំពឹងថារបស់ដែលត្រូវបែកបាក់ មិនឱ្យបែកបាក់។',
    suttaName: 'សល្លដ្ឋសូត្រ (ព្រួញពីរ) & រឿងនាងកីសគោតមី',
    suttaQuote: '«ព្រួញទី ១ គឺទុក្ខវេទនាខាងរាងកាយ ឬការបាត់បង់។ ព្រួញទី ២ គឺសេចក្តីសោកសៅ យំសោកដែលចិត្តបង្កើតឡើងមកបាញ់ដោតខ្លួនឯងបន្ថែម! អ្នកមានប្រាជ្ញារមែងដកព្រួញទី ២ នេះចេញ។»',
    buddhaWisdom: [
      'ដូចព្រះពុទ្ធឱ្យនាងកីសគោតមីដើររកគ្រាប់ស្ពៃក្នុងផ្ទះណាដែលមិនដែលមានមនុស្សស្លាប់៖ គ្មានផ្ទះណាមួយដែលមិនមានការស្លាប់ឡើយ!',
      'ការបែកបាក់ពីមនុស្សជាទីស្រឡាញ់ គឺជារឿងធម្មជាតិនៃសង្ខារលោក («សព្វេហិ មេ បិយេហិ មនាបេហិ នានាភាវោ វិនាភាវោ»)',
      'ទឹកភ្នែកដែលយើងយំសោកក្នុងសង្សារវដ្តនេះ បើប្រមូលមក ច្រើនជាងទឹកក្នុងមហាសមុទ្រទាំង ៤ ទៅទៀត។'
    ],
    antidote: 'អនិច្ចានុបស្សនា និងការឧទ្ទិសកុសល',
    threeMinPractice: [
      { step: 'នាទី ១: ទទួលស្គាល់ទុក្ខ', text: 'កុំបដិសេធទុក្ខសោក។ ដាក់ដៃស្តាំលើដើមទ្រូង ទទួលស្គាល់ថា៖ «នេះជាការឈឺចាប់នៃបេះដូងដែលធ្លាប់ស្រឡាញ់យ៉ាងជ្រាលជ្រៅ។ ខ្ញុំទទួលដឹងវា។»' },
      { step: 'នាទី ២: ដកព្រួញទីពីរ', text: 'ពិចារណាថា៖ «ការយំសោកមិនអាចនាំមនុស្សជាទីស្រឡាញ់ត្រឡប់មកវិញឡើយ។ អ្វីដែលល្អបំផុតដែលខ្ញុំអាចធ្វើបាន គឺការសាងបុណ្យកុសល ហើយឧទ្ទិសជូនគាត់។»' },
      { step: 'នាទី ៣: បង្វែរជាកុសល', text: 'តាំងចិត្តធ្វើទាន រក្សាសីល ឬចម្រើនសមាធិ ហើយផ្សាយផលបុណ្យជូនដល់វិញ្ញាណក្ខន្ធគាត់ឱ្យបានទៅកាន់សុគតិភព។' }
    ]
  },
  {
    id: 'anxiety',
    emoji: '⚡',
    titleKm: 'ភ័យខ្លាច & គិតច្រើន',
    titlePali: 'Bhaya / Uddhacca',
    color: 'from-amber-500/20 to-yellow-500/10 border-amber-500/30 text-amber-800 dark:text-amber-300',
    rootCause: 'ការអណ្តែតចេញពីបច្ចុប្បន្នភាព ទៅបង្កើតរូបភាពអនាគតដ៏អាក្រក់ដែលមិនទាន់កើតឡើង (អយោនិសោមនសិការ)។',
    suttaName: 'ធជគ្គសូត្រ (ការរឭកគុណព្រះរតនត្រ័យបំបាត់ការភ័យខ្លាច)',
    suttaQuote: '«កាលបើពួកអ្នករឭកឃើញនូវគុណនៃតថាគត គុណនៃព្រះធម៌ ឬគុណនៃព្រះសង្ឃហើយ... សេចក្តីភ័យក្តី សេចក្តីតក់ស្លុតក្តី សេចក្តីព្រឺរោមរអើមក្តី នឹងរលត់បាត់ទៅវិញជាប្រាកដ។»',
    buddhaWisdom: [
      '៩០% នៃរឿងដែលយើងភ័យខ្លាច និងព្រួយបារម្ភ គឺមិនដែលកើតឡើងពិតប្រាកដឡើយ! វាគ្រាន់តែជាស្រមោលចិត្ត។',
      'អនាគតមិនទាន់មកដល់ អតីតកាលកន្លងផុតទៅហើយ មានតែខណៈពេលនេះគត់ដែលជាការពិត («អតីតំ នាន្វាគមេយ្យ...»)។',
      'គ្មានព្យុះសង្ឃរាណាដែលបក់បោកមិនចេះចប់នោះទេ ទុក្ខព្រួយនេះក៏នឹងកន្លងផុតទៅដូចគ្នា។'
    ],
    antidote: 'សតិលើដង្ហើមបច្ចុប្បន្ន និង ពុទ្ធានុស្សតិ',
    threeMinPractice: [
      { step: 'នាទី ១: វិធី ៥-៤-៣-២-១', text: 'ក្រឡេកមើលជុំវិញ៖ រកមើលរបស់ ៥ យ៉ាងដែលភ្នែកឃើញ, ប៉ះវត្ថុ ៤ យ៉ាង, ស្តាប់សំឡេង ៣ យ៉ាង, ធុំក្លិន ២ យ៉ាង, និងដឹងរសជាតិ ១ យ៉ាង។ ចិត្តនឹងវិលមករកបច្ចុប្បន្នភ្លាម។' },
      { step: 'នាទី ២: ទម្លាក់យុថ្កា', text: 'ដឹងខ្យល់ចូល... ដឹងខ្យល់ចេញ... មិនបាច់គិតរឿងថ្ងៃស្អែក គ្រាន់តែដឹងដង្ហើមមួយនេះឱ្យច្បាស់លាស់។' },
      { step: 'នាទី ៣: ភាវនាពុទ្ធោ', text: 'ដកដង្ហើមចូលនឹកថា «ពុទ្ធ» ដកដង្ហើមចេញនឹកថា «ធោ»។ យកគុណព្រះពុទ្ធជាទីពឹង ភាពភ័យខ្លាចនឹងរសាយបាត់។' }
    ]
  },
  {
    id: 'loneliness',
    emoji: '🍃',
    titleKm: 'ឯកោ & អស់សង្ឃឹម',
    titlePali: 'Asantuṭṭhi / Domanassa',
    color: 'from-purple-500/20 to-pink-500/10 border-purple-500/30 text-purple-700 dark:text-purple-300',
    rootCause: 'ការស្វែងរកសេចក្តីសុខពីអ្នកដទៃ និងការទាមទារឱ្យគេយល់ពីយើង កាលណាគេមិនយល់ ក៏មានអារម្មណ៍ថាឯកោ។',
    suttaName: 'អត្តទីបសូត្រ (ចូរមានខ្លួនជាកោះ មានខ្លួនជាទីពឹង)',
    suttaQuote: '«ម្នាលភិក្ខុទាំងឡាយ ចូរអ្នកទាំងឡាយមានខ្លួនជាកោះ មានខ្លួនជាទីពឹង កុំមានរបស់ដទៃជាទីពឹងឡើយ ចូរមានធម៌ជាកោះ មានធម៌ជាទីពឹង...»',
    buddhaWisdom: [
      '«អត្តា ហិ អត្តនោ នាថោ» ខ្លួនទីពឹងខ្លួន! អ្នកដទៃមិនអាចជាទីពឹងពិតប្រាកដដល់យើងបានឡើយ។',
      'ភាពស្ងប់ស្ងាត់ (វិវេក) មិនមែនជាភាពឯកោឡើយ តែជាឱកាសមាសសម្រាប់ស្វែងរកសន្តិភាពខាងក្នុង។',
      'ព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ តែងតែគង់នៅជាមួយយើងជានិច្ច រាល់ពេលដែលយើងមានសតិ។'
    ],
    antidote: 'អត្តានុស្សតិ និង កល្យាណមិត្តតា',
    threeMinPractice: [
      { step: 'នាទី ១: ធ្វើជាមិត្តខ្លួនឯង', text: 'ឱបដើមដៃទាំងពីរ ញញឹមតិចៗដាក់ខ្លួនឯង ហើយនិយាយក្នុងចិត្តថា៖ «ខ្ញុំនៅទីនេះជាមួយខ្លួនខ្ញុំ។ ខ្ញុំទទួលយកខ្លួនខ្ញុំដោយក្តីស្រឡាញ់។»' },
      { step: 'នាទី ២: រកទីពឹងខាងក្នុង', text: 'ដឹងថាចិត្តបរិសុទ្ធខាងក្នុងយើង មិនធ្លាប់បាត់បង់ទៅណាឡើយ។ ព្រះធម៌ជាមិត្តដ៏ស្មោះត្រង់បំផុត។' },
      { step: 'នាទី ៣: ផ្សាយក្តីស្រឡាញ់', text: 'ពិចារណាថានៅលើលោកនេះ មានមនុស្សរាប់លាននាក់កំពុងឯកោដូចយើង។ សូមឱ្យពួកគេទាំងអស់គ្នាបានជួបសេចក្តីកក់ក្តៅ និងសេចក្តីស្ងប់។' }
    ]
  },
  {
    id: 'envy',
    emoji: '🌱',
    titleKm: 'ច្រណែន & ប្រៀបធៀប',
    titlePali: 'Issā / Māna',
    color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300',
    rootCause: 'ឥស្សា (ក្តៅក្រហាយពេលឃើញគេបានល្អ) និង មានៈ (ការលើកខ្លួនប្រៀបធៀបថា ប្រសើរជាងគេ ស្មើគេ ឬអន់ជាងគេ)។',
    suttaName: 'ចូឡកម្មវិភង្គសូត្រ (ផលនៃការច្រណែន)',
    suttaQuote: '«បុគ្គលណាមានចិត្តច្រណែន ឃើញគេបានលាភ យស កិត្តិយស ការសរសើរ ក៏កើតក្តៅក្រហាយក្នុងចិត្ត... កាលបើទៅកើតក្នុងជាតិណា រមែងជាមនុស្សមានអានុភាពតិចតួច។»',
    buddhaWisdom: [
      'មនុស្សម្នាក់ៗមានកម្មជារបស់ខ្លួន («កម្មស្សកោម្ហិ»)។ គេបានល្អដោយសារផលបុណ្យចាស់របស់គេ យើងមិនបាច់ច្រណែនឡើយ។',
      'ការច្រណែនគេ មិនបានធ្វើឱ្យគេអន់ថយឡើយ តែវាដុតកម្ទេចសេចក្តីសុខ និងបុណ្យកុសលក្នុងចិត្តយើងផ្ទាល់។',
      'ត្រេកអរនឹងសេចក្តីសុខគេ (មុទិតា) នឹងធ្វើឱ្យយើងទទួលបានចំណែកបុណ្យស្មើនឹងគេដែរ!'
    ],
    antidote: 'មុទិតាភាវនា',
    threeMinPractice: [
      { step: 'នាទី ១: ដឹងទាន់ពិសឥស្សា', text: 'កត់សម្គាល់ឃើញអារម្មណ៍តឹងណែន ឬមិនសប្បាយចិត្តពេលឃើញគេជោគជ័យ។ ទទួលស្គាល់ថា៖ «នេះជាឥស្សា វាជាភ្លើងដុតបំផ្លាញចិត្តខ្ញុំ។»' },
      { step: 'នាទី ២: យល់ពីច្បាប់កម្ម', text: 'ពិចារណាថា៖ «គេបានជោគជ័យដោយសារកម្លាំងញើសឈាម និងបុណ្យបារមីរបស់គេ។ ខ្ញុំសូមអនុមោទនា និងកោតសរសើរ។»' },
      { step: 'នាទី ៣: បណ្តុះមុទិតា', text: 'នឹកឃើញមុខមនុស្សដែលជោគជ័យនោះ ហើយញញឹមក្នុងចិត្ត៖ «សាធុ! សូមឱ្យអ្នកបន្តជោគជ័យ និងមានសេចក្តីសុខកាន់តែច្រើនឡើងៗ។» ភ្លាមនោះ ចិត្តយើងនឹងស្រាលស្រឡះ។' }
    ]
  },
  {
    id: 'craving',
    emoji: '🪤',
    titleKm: 'ជាប់ជំពាក់ & ការញៀន',
    titlePali: 'Kāmacchanda / Taṇhā',
    color: 'from-rose-500/20 to-red-500/10 border-rose-500/30 text-rose-700 dark:text-rose-300',
    rootCause: 'សុភសញ្ញា (ការយល់ថារបស់មិនស្អាត ជារបស់ស្អាត, យល់ថារបស់នាំទុក្ខ ជាសេចក្តីសុខ)។',
    suttaName: 'បោតលិយសូត្រ (ឧបមា ៧ យ៉ាងនៃកាមគុណ)',
    suttaQuote: '«កាមគុណប្រៀបដូចជា៖ គ្រោងឆ្អឹងគ្មានសាច់, ដុំសាច់ដែលសត្វត្មាតដណ្តើមគ្នា, ចន្លុះស្មៅដែលកាន់ច្រាសខ្យល់, រណ្តៅរងើកភ្លើង, ការយល់សប្តិ, របស់ខ្ចីគេ, និងផ្លែឈើលើចុងដើមដែលគេត្រៀមកាប់... សុទ្ធតែទុក្ខច្រើន គ្រោះថ្នាក់ច្រើន។»',
    buddhaWisdom: [
      'តណ្ហាដូចជាការផឹកទឹកអំបិលពេលស្រេកទឹក៖ កាន់តែផឹក កាន់តែស្រេកខ្លាំងឡើងៗ គ្មានថ្ងៃឆ្អែតស្កប់ឡើយ! («នត្ថិ តណ្ហាសមា នទី»)',
      'សេចក្តីសុខពិតប្រាកដមិនមែនកើតពីការបំពេញតណ្ហានោះទេ តែគឺកើតពី «ការរួចផុតផុតចាកចំណង់»។',
      'ពិចារណាឃើញទោសនៃកាមគុណ ថានាំមកនូវការបែកបាក់ និងសេចក្តីហត់នឿយ។'
    ],
    antidote: 'អសុភសញ្ញា និង ឥន្ទ្រិយសំវរៈ',
    threeMinPractice: [
      { step: 'នាទី ១: កុំប្រញាប់ប្រតិកម្ម', text: 'ពេលចំណង់ពុះកញ្ជ្រោលឡើង កុំទាន់អាលធ្វើតាមវា! ទុកពេលឱ្យខ្លួនឯងដកដង្ហើម ៣ នាទីសិន។ ចំណង់ប្រៀបដូចរលកសមុទ្រ វានឹងឡើងដល់កំពូល ហើយស្រកចុះវិញដោយឯកឯង។' },
      { step: 'នាទី ២: មើលឃើញទោស', text: 'សួរខ្លួនឯងថា៖ «ពេលបំពេញចំណង់នេះចប់ហើយ តើខ្ញុំនឹងសប្បាយចិត្ត ឬក៏មានអារម្មណ៍ស្តាយក្រោយ និងបាត់បង់ស្មារតី?»' },
      { step: 'នាទី ៣: ប្តូរអារម្មណ៍', text: 'ក្រោកឈរ ផឹកទឹកត្រជាក់មួយកែវ ឬប្តូរកន្លែងដើរ។ យកឈ្នះចិត្តខ្លួនឯងបានម្តង គឺជាជ័យជម្នះដ៏អស្ចារ្យបំផុត។' }
    ]
  }
]

const currentEmotionData = computed(() => {
  return emotions.find(e => e.id === selectedEmotion.value) || emotions[0]
})

function startTimer() {
  if (isTimerRunning.value) return
  isTimerRunning.value = true
  timerInterval.value = setInterval(() => {
    if (timerSeconds.value > 0) {
      timerSeconds.value--
    } else {
      stopTimer()
      playChime()
    }
  }, 1000)
}

function pauseTimer() {
  isTimerRunning.value = false
  if (timerInterval.value) {
    clearInterval(timerInterval.value)
    timerInterval.value = null
  }
}

function resetTimer() {
  pauseTimer()
  timerSeconds.value = 180
}

function stopTimer() {
  pauseTimer()
}

function formatTimer(sec) {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${m}:${s < 10 ? '0' : ''}${s}`
}

function playChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!AudioContext) return
    const ctx = new AudioContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(528, ctx.currentTime)
    gain.gain.setValueAtTime(0.3, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 3)
  } catch (e) {
    console.log('Audio not supported or blocked', e)
  }
}
</script>

<template>
  <div class="fade-up">
    <!-- Header -->
    <header class="text-center max-w-2xl mx-auto">
      <p class="chapter-label">{{ t('ឱសថធម៌ព្យាបាលចិត្ត • Dhamma First-Aid', 'Dhamma First-Aid for the Mind') }}</p>
      <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
        {{ t('ធម៌សង្គ្រោះអារម្មណ៍ក្នុងជីវិតប្រចាំថ្ងៃ', 'Dhamma First-Aid for Daily Emotions') }}
      </h2>
      <div class="ornament mt-4">&#9784;</div>
      <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ជ្រើសរើសអារម្មណ៍ដែលអ្នកកំពុងជួបប្រទះ ដើម្បីទទួលបានឱវាទព្រះពុទ្ធ និងលំហាត់ចិត្តរំងាប់ទុក្ខ ៣ នាទីបន្ទាន់។', 'Select the emotion you are experiencing to receive Buddha wisdom and an emergency 3-minute mental relief practice.') }}
      </p>
    </header>

    <!-- Emotion Selector Grid -->
    <div class="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mt-6">
      <button
        v-for="e in emotions"
        :key="e.id"
        @click="selectedEmotion = e.id; resetTimer()"
        class="card-paper card-paper-hover p-2.5 sm:p-3 text-center flex flex-col items-center justify-between gap-1 transition h-full min-h-[92px]"
        :style="selectedEmotion === e.id ? { borderColor: 'var(--accent)', background: 'var(--bg-card-2)' } : {}"
      >
        <span class="text-2xl sm:text-3xl">{{ e.emoji }}</span>
        <span class="text-[11px] sm:text-xs font-bold line-clamp-1" :style="{ color: selectedEmotion === e.id ? 'var(--accent)' : 'var(--ink)' }">
          {{ e.titleKm }}
        </span>
        <span class="paali text-[9px] sm:text-[10px] truncate max-w-full" :style="{ color: 'var(--ink-muted)' }">
          {{ e.titlePali.split(' ')[0] }}
        </span>
      </button>
    </div>

    <!-- Active Emotion Detail Card -->
    <div class="card-paper p-5 sm:p-7 mt-6 space-y-5">
      <!-- Title & Antidote -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4" :style="{ borderBottom: '1px solid var(--border)' }">
        <div>
          <div class="flex items-center gap-2">
            <span class="text-2xl sm:text-3xl">{{ currentEmotionData.emoji }}</span>
            <h3 class="font-display text-xl sm:text-2xl font-bold" :style="{ color: 'var(--ink)' }">
              {{ currentEmotionData.titleKm }}
            </h3>
          </div>
          <p class="paali text-xs mt-1" :style="{ color: 'var(--accent)' }">
            {{ t('បាលី៖ ', 'Pāḷi: ') }}{{ currentEmotionData.titlePali }}
          </p>
        </div>

        <div class="px-3.5 py-1.5 rounded-xl text-xs font-semibold self-start sm:self-auto" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)', color: 'var(--ink)' }">
          {{ t('ថ្នាំបន្សាប៖ ', 'Antidote: ') }}<strong :style="{ color: 'var(--accent)' }">{{ currentEmotionData.antidote }}</strong>
        </div>
      </div>

      <!-- Root Cause Analysis -->
      <div class="p-4 rounded-xl space-y-1" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
        <span class="text-xs font-bold uppercase tracking-wider block" :style="{ color: 'var(--accent-bright)' }">
          🔬 {{ t('ឫសគល់នៃអារម្មណ៍នេះតាមក្បួនធម៌៖', 'Root Cause According to Dhamma:') }}
        </span>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
          {{ currentEmotionData.rootCause }}
        </p>
      </div>

      <!-- Sutta Quote -->
      <div class="verse-box p-4 sm:p-5 mt-4 space-y-2">
        <div class="flex items-center gap-1.5 text-xs font-bold" :style="{ color: 'var(--accent)' }">
          <span>📜</span>
          <span>{{ currentEmotionData.suttaName }}</span>
        </div>
        <p class="text-xs sm:text-sm italic font-serif leading-relaxed" :style="{ color: 'var(--ink)' }">
          {{ currentEmotionData.suttaQuote }}
        </p>
      </div>

      <!-- Buddha’s Core Wisdom Keys -->
      <div class="space-y-2.5">
        <h4 class="font-display font-bold text-sm sm:text-base flex items-center gap-2" :style="{ color: 'var(--ink)' }">
          <span>💡</span>
          <span>{{ t('គន្លឹះដោះស្រាយដោយបញ្ញា (Yoniso Manasikāra):', 'Wise Reflection Keys (Yoniso Manasikāra):') }}</span>
        </h4>
        <div class="grid grid-cols-1 gap-2">
          <div
            v-for="(w, idx) in currentEmotionData.buddhaWisdom"
            :key="idx"
            class="flex items-start gap-2.5 p-3 rounded-xl text-xs leading-relaxed"
            :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)', color: 'var(--ink-soft)' }"
          >
            <span class="sutra-num font-bold text-xs shrink-0 mt-0.5" :style="{ color: 'var(--accent-bright)' }">
              {{ idx + 1 }}.
            </span>
            <span>{{ w }}</span>
          </div>
        </div>
      </div>

      <!-- 3-Minute Practice Box with Timer -->
      <div class="card-paper p-5 sm:p-6 space-y-4" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <h4 class="font-display text-base sm:text-lg font-bold flex items-center justify-center sm:justify-start gap-1.5" :style="{ color: 'var(--ink)' }">
              <span>⏱️</span>
              <span>{{ t('លំហាត់ចិត្តសង្គ្រោះបន្ទាន់ ៣ នាទី', '3-Minute Emergency Mindfulness Practice') }}</span>
            </h4>
            <p class="text-xs mt-0.5" :style="{ color: 'var(--ink-muted)' }">
              {{ t('ធ្វើតាមការណែនាំ ៣ ជំហានខាងក្រោម ដើម្បីឱ្យចិត្តវិលមករកសេចក្តីស្ងប់', 'Follow the 3 steps below to calm and steady your mind') }}
            </p>
          </div>

          <!-- Timer Controls -->
          <div class="flex items-center gap-2">
            <span class="text-xl sm:text-2xl font-mono font-bold px-3.5 py-1.5 rounded-xl" :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--accent-bright)' }">
              {{ formatTimer(timerSeconds) }}
            </span>
            <button
              v-if="!isTimerRunning"
              @click="startTimer"
              class="lang-pick px-3.5 py-1.5 text-xs font-semibold on"
            >
              {{ t('ចាប់ផ្តើម', 'Start') }}
            </button>
            <button
              v-else
              @click="pauseTimer"
              class="lang-pick px-3.5 py-1.5 text-xs font-semibold"
            >
              {{ t('ផ្អាក', 'Pause') }}
            </button>
            <button
              @click="resetTimer"
              class="lang-pick px-2.5 py-1.5 text-xs font-semibold"
              title="Reset"
            >
              ↺
            </button>
          </div>
        </div>

        <!-- 3 Steps -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3" :style="{ borderTop: '1px solid var(--border)' }">
          <div
            v-for="(st, idx) in currentEmotionData.threeMinPractice"
            :key="idx"
            class="card-paper p-3.5 space-y-1.5 h-full flex flex-col justify-between"
          >
            <span class="text-xs font-bold block" :style="{ color: 'var(--accent)' }">{{ st.step }}</span>
            <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ st.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
