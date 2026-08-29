<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('រឿងល្បីៗ ១២ — រឿងព្រះពុទ្ធកាល', 'STORIES 12 — TALES FROM THE BUDDHA TIME') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('រឿងល្បីៗសម័យព្រះពុទ្ធ', 'Beloved Stories from the Buddha Lifetime') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ព្រះពុទ្ធ ទ្រង់សម្តែងធម៌ ដោយរឿងរ៉ាវពិត ដើម្បីឲ្យមនុស្ស ដែលជួប បានឃើញខ្លួនឯង ក្នុងរឿងទាំងនោះ។ រឿងល្អៗ ជាច្រើន មកពីព្រះត្រៃបិដក ដូចជាអង្គុលីមាលៈ និងកិសាគោតមី ហើយរឿងខ្លះមកពីអដ្ឋកថា (សេចក្តីពន្យល់បុរាណ) នៃធម្មបទ ដែលលោកបានរៀបរៀងបន្តពូជមក។', 'The Buddha taught through real stories, so that people who met him could see themselves inside those lives. Many beloved stories come from the Tipiṭaka itself, such as Angulimāla and Kisāgotamī, while others come from the ancient Dhammapada commentary handed down through the tradition.') }}
    </p>

    <!-- the stories -->
    <div class="mt-8">
      <p class="chapter-label">{{ t('រឿងជម្រើស ៩ — ចុចដើម្បីបើកមើល', 'NINE SELECTED STORIES — TAP TO OPEN') }}</p>
    </div>
    <div class="mt-4 space-y-4">
      <details v-for="(s, i) in stories" :key="s.en" :id="'story-' + i" class="card-paper p-6 md:p-8 scroll-mt-24" :open="i === 0 || isTarget('story-', i)">
        <summary class="select-none">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div class="min-w-0">
              <p class="chapter-label">{{ s.src }}</p>
              <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t(s.km, s.en) }}</h3>
              <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(s.noteK, s.noteE) }}</p>
            </div>
            <div class="flex items-center gap-3 shrink-0 mt-1">
              <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
              <span class="caret" :style="{ color: 'var(--accent-bright)' }">&#9660;</span>
            </div>
          </div>
        </summary>

        <div class="mt-5">
          <div class="space-y-3">
            <p v-for="p in s.paras" :key="p.en" class="leading-loose text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t(p.km, p.en) }}</p>
          </div>

          <div class="verse-box p-4 mt-5">
            <p class="text-center text-base md:text-lg leading-loose" :style="{ color: 'var(--ink)' }">{{ s.essenceK }}</p>
            <p class="text-center text-sm mt-1" :style="{ color: 'var(--ink-soft)' }">{{ s.essenceE }}</p>
          </div>

          <div class="mt-4 p-3 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
            <p class="text-[10px] font-bold tracking-widest uppercase" :style="{ color: 'var(--accent)' }">{{ t('មេរៀន', 'THE LESSON') }}</p>
            <p class="text-sm mt-1" :style="{ color: 'var(--ink-soft)' }">{{ t(s.lessonK, s.lessonE) }}</p>
          </div>
        </div>
      </details>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
import { useRoute } from 'vue-router'
const { t } = useLanguage()
const route = useRoute()
const isTarget = (prefix, idx) => route.hash === '#' + prefix + idx

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  return String(n).split('').map(d => khDigits[Number(d)]).join('')
}

const stories = [
  {
    src: 'MN 86 · អង្គុលីមាលសូត្រ',
    km: 'អង្គុលីមាលៈ — ចោរដែលក្លាយជាព្រះអរហន្ត', en: 'Angulimāla, the bandit who became an arahant',
    noteK: 'រឿងការប្រែចិត្តល្បីល្បាញបំផុត ក្នុងព្រះពុទ្ធសាសនា — បង្រៀនថា ធ្វើខុសប៉ុន្មានក៏ដោយ ក៏អាចផ្លាស់ប្តូរបានដែរ។', en: 'The most famous story of transformation in Buddhism — no matter how much wrong one has done, change is still possible.',
    paras: [
      { km: 'អង្គុលីមាលៈ ជាកូនព្រាហ្មណ៍ ទៅសិក្សាឯក្រុងតក្កសិលា។ គ្រូរបស់គាត់ ច្រណែននឹងប្រាជ្ញាគាត់ ក៏បញ្ឆោតឲ្យគាត់នាំម្រាមដៃមនុស្ស ១០០០ មកជូន ទើបអាចបញ្ចប់ការសិក្សា។ អង្គុលីមាលៈ ក៏ក្លាយជាចោរសម្លាប់មនុស្ស ដ៏គួរខ្លាច នៅក្នុងព្រៃតែម្នាក់ឯង រហូតបានម្រាមដៃ ៩៩៩ ចងកជាមាលៃ។', en: 'Angulimāla, a Brahmin youth, studied in Takkasilā. His jealous teacher tricked him into gathering one thousand human fingers as a final tribute. He became a dreaded bandit haunting the woods alone, with 999 fingers strung on a thread.' },
      { km: 'ថ្ងៃមួយ ព្រះពុទ្ធ ទ្រង់យាងចូលព្រៃនោះ ដោយមេត្តា។ អង្គុលីមាលៈ រត់ចេញទៅតាម តែព្រះពុទ្ធ ដើរបន្តិចបន្តួច បែរជាមានព្រះហឫទ័យ កើតជាចំពីមុខគាត់ទៅវិញ។ គាត់ស្រែកថា «ឈប់ទៅ អ្នកបួស (សមណៈ)!» ព្រះពុទ្ធ ទ្រង់តបថា «យើងឈប់ហើយ អង្គុលីមាលៈ — អ្នកឯងទេ ដែលមិនទាន់ឈប់។» សេចក្តីនោះ ចូលទៅក្នុងចិត្តគាត់ គាត់ក៏សុំបួស។', en: 'One day the Buddha, moved by compassion, walked into that forest. Angulimāla ran after him, yet the Buddha, with a gentle pace, stayed ahead. The bandit shouted, "Stop, ascetic!" The Buddha replied, "I have stopped, Angulimāla — you are the one who has not stopped." Those words pierced his heart, and he asked to be ordained.' },
      { km: 'គាត់ឧស្សាហ៍វាងវៀត បណ្តុះសីល សមាធិ បញ្ញា រហូតសម្រេចជាព្រះអរហន្ត។ ស្តេចប្រេនកោសល កាលក្រោយ ដឹងថាគាត់ជាអ្នកបរិសុទ្ធ — ក៏ថ្វាយបង្គំទាំងពីរ។ អ្នកដែលវិលមកល្អ តែងជាទីគោរព របស់លោក។', en: 'He strove diligently, and at last attained arahantship. When King Pasenadi later learned who he was, he honoured the new monk in awe. One who turns to good earns the respect of the world.' },
    ],
    essenceK: 'កិលេស មិនមែនជាវាសនាទេ — មនុស្ស មិនដែលជាប់ជុំនឹងទង្វើណាមួយជារៀងរហូតឡើយ។',
    essenceE: 'Defilements are not destiny — no one is chained forever to the deeds of the past.',
    lessonK: 'កុំវិនិច្ឆ័យមនុស្ស ដោយប្រវត្តិកន្លងទៅ — ឲ្យឱកាសខ្លួនឯង និងអ្នកដទៃ ប្រែក្លាយឲ្យប្រសើរ។',
    lessonE: 'Do not judge a person by an old record — give yourself and others the room to change for the better.',
  },
  {
    src: 'DHP-A · កិសាគោតមី',
    km: 'កិសាគោតមី — អ្នកស្វែងគ្រាប់ម្លញ្ច្រោង', en: 'Kisāgotamī, the mother who carried her dead son',
    noteK: 'រឿងត្រូវបានរៀបរៀងក្នុងអដ្ឋកថាធម្មបទ — បន្ទាប់ពីបាត់បង់កូន នាងបានយល់សច្ចៈ ថា សេចក្តីស្លាប់ ជារឿងគ្រប់គ្នា។', en: 'A story from the Dhammapada commentary — after losing her son, she understood the truth that death touches everyone.',
    paras: [
      { km: 'នាងកិសាគោតមី ជាស្ត្រីក្នុងគ្រួសារក្រ ក្រោយរៀបការ ក៏បានកូនប្រុសមួយ។ កូនធំដឹងក្តី មិនដល់វ័យរៀន ក៏ស្លាប់ទៅ។ នាងមិនព្រមទទួលសេចក្តីពិត ដឹកសពកូន ទៅសួរគ្រប់ផ្ទះថា មានថ្នាំណា ឲ្យកូនខ្ញុំរស់វិញ?', en: 'Kisāgotamī, a poor young woman, finally had a son who reached the age of walking. When he died, she could not accept it. Carrying the little body, she went from door to door asking who had a medicine to revive her boy.' },
      { km: 'អ្នកដំណើរម្នាក់ ប្រាប់នាង ឲ្យទៅសួរព្រះពុទ្ធ។ ព្រះពុទ្ធ ទ្រង់ព្រះត្រាស់ថា ឲ្យនាងរកគ្រាប់ម្លញ្ច្រោង មួយក្តាប់ ពីផ្ទះណា ដែលមិនធ្លាប់មានមនុស្សស្លាប់ សោះ — នោះ នឹងធ្វើជាថ្នាំ។ នាងដើរសួរគ្រប់ផ្ទះ គ្រប់ផ្ទះ សុទ្ធតែធ្លាប់បាត់បង់មនុស្សជាទីស្រឡាញ់។ ទើបនាងយល់ថា សេចក្តីស្លាប់ ជារឿងគ្រប់គ្នា មិនមែនតែនាងទេ។', en: 'A passing stranger told her to see the Buddha. The Buddha asked her to bring a single mustard seed from a house where no one had ever died. She searched every house — in every one, someone had been lost. At last she understood: death is not her story alone.' },
      { km: 'នាងបញ្ចុះសពកូន ហើយត្រឡប់មកស្តាប់ធម៌ ពីព្រះពុទ្ធ — បានដល់សោតាបត្តិផល។ ក្រោយមក នាងបួសជាភិក្ខុនី បដិបត្តិឧស្សាហ៍ បានដល់អរហត្តផល។ នាងត្រូវបានលោក ចងចាំ ជាគំរូនៃអ្នកកន្លងសោក ដោយបញ្ញា។', en: 'She buried her child, returned to hear the Dhamma, and attained the first stage of awakening. She later ordained, and with steady practice reached arahantship — remembered today as one who crossed grief with insight.' },
    ],
    essenceK: 'សេចក្តីស្លាប់ ជារឿងគ្រប់គ្នា — ការដឹងសច្ចៈពិតជាថ្នាំរំងាប់សោក។',
    essenceE: 'Death is everyones story — knowing the truth is the true medicine that stills grief.',
    lessonK: 'ពេលបាត់បង់ កុំគិតថាខ្លួនម្នាក់ឯង — រំពឹងឲ្យឃើញអនិច្ចា ហើយលើកខ្លួនឡើង បដិបត្តិទៀត។',
    lessonE: 'When you lose someone, do not think you are alone — see impermanence, lift yourself, and practise on.',
  },
  {
    src: 'DHP-A · បដាចារា',
    km: 'បដាចារា — បាត់បង់ទាំងអស់ ហើយបានផ្លូវ', en: 'Patācārā, who lost everything and found the path',
    noteK: 'រឿងនៃទុក្ខ ដែលប៉ះគ្រប់បែប នៃជីវិត — តែសតិវិលមកវិញ បាន ពន្លឺ ក៏ភ្លឺទៀត។', en: 'A story of grief that touched every side of life — and how mindfulness, returning, lit the darkness again.',
    paras: [
      { km: 'បដាចារា ជាកូនស្ត្រីអ្នកមាន រត់ចេញពីផ្ទះ ទៅរស់ជាមួយប្តី។ នៅលើផ្លូវត្រឡប់ទៅស្រុក ប្តី ស្លាប់ដោយពស់ខាំ កូនទាំងពីរ ត្រូវទឹកជន់យក នៅចំពោះមុខនាង។ ដល់ផ្ទះវិញ ឃើញឪពុកម្តាយ និងបង ក៏ស្លាប់ដោយភ្លើងឆេះផ្ទះ តាំងពីយប់មុន។', en: 'Patācārā, a rich mans daughter, eloped to live with her husband. On the road back home, her husband died of a snakebite and the river swept away her two children before her eyes. At the family house she found her parents and brother had died in a fire the night before.' },
      { km: 'សោកត្រួតត្រាគ្នា ហួសទ្រាំ នាងឆ្កួតស្មារតី ស្លៀកពាក់មិនពេញ ដើរស្រែករាយមាយ ក្នុងក្រុងសាវត្ថី។ បណ្តាជន ច្រានចោលនាង។ ព្រះពុទ្ធ ទ្រង់យាងទៅរកនាង ព្រះត្រាស់ថា «ប្អូនស្រី ចូរដឹងខ្លួនឡើងទៅ»។ នាង ភ្ញាក់ស្មារតី ស្តាប់ធម៌ តាំងចិត្ត ក៏ដល់សោតាបត្តិផល។', en: 'Grief overwhelmed her reason; she wandered half-clothed through Sāvatthī, and people drove her away. The Buddha came to her and said, "Sister, come back to your senses." She recovered, heard the Dhamma, and attained the first stage of awakening.' },
      { km: 'បន្ទាប់មក នាងបួសជាភិក្ខុនី បដិបត្តិឧស្សាហ៍តម្កើង បានដល់អរហត្តផល — ជាភិក្ខុនីដែលចៅដំបូង ដែលលោកសរសើរ ក្នុងការរក្សាវិន័យ។', en: 'She later ordained as a nun and, with diligent practice, attained arahantship — honoured among the earliest bhikkhunīs for the keeping of the discipline.' },
    ],
    essenceK: 'ទុក្ខធំប៉ុនណា ក៏សតិអាចវិលមកវិញបាន — ការភ្ញាក់ឡើងនោះឯងជាពន្លឺ។',
    essenceE: 'However great the grief, mindfulness can return — that awakening is the light.',
    lessonK: 'បើបាក់បែកអ្វីធ្ងន់ មិនត្រូវលង់ក្នុងសោកជារៀងរហូត — ឲ្យសតិភ្ញាក់ ហើយចាប់ផ្តើមវិញ។',
    lessonE: 'If something crushes you, do not drown in sorrow forever — let mindfulness wake, and begin again.',
  },
  {
    src: 'VESSANTARA JĀTAKA 547',
    km: 'វេស្សន្តរៈ — ព្រះរាជាដ៏លះបង់', en: 'Vessantara, the king who gave everything',
    noteK: 'រឿងជាតកល្បីបំផុត របស់ពុទ្ធបរិស័ទ — គំរូនៃទានបារមី ការឲ្យ ដ៏ប្រសើរ។', en: 'The most beloved of the Jātakas — the perfection of giving shown in living form.',
    paras: [
      { km: 'ព្រះបាទវេស្សន្តរ ជាស្តេចក្រុងសិវី តាំងចិត្តឲ្យទានធំៗ ទៅតាមអ្វីដែលគេសូម។ ថ្ងៃមួយ គេសូមដំរីមង្គល ដែលនាំភ្លៀង ដល់ស្តេចជិតខាង។ រាស្ត្រ ខឹងនឹងព្រះអង្គ ក៏ដេញឲ្យចេញទៅនៅព្រៃ។', en: 'King Vessantara of Sīvī gave great gifts to whoever asked. When he gave the rain-bringing elephant to the neighbouring kingdom, his people, in anger, banished him to the forest.' },
      { km: 'ព្រះអង្គ ព្រះនាងមទ្រី និងបុត្រទាំងពីរ ជាលិ និង កន្ហា ចូលព្រៃ ។ នៅក្នុងព្រៃក៏បន្តឲ្យទាន រហូតដល់ឲ្យបុត្រាបុត្រី ទាំងពីរ ទៅព្រាហ្មណ៍ជូចក។ ក្រោយមក ជូចក បានយកកូនទាំងពីរ ទៅប្រគល់ឲ្យស្តេចជីតា វិញ — ស្តេច យល់នូវចិត្ត វេស្សន្តរ ក៏រាយប៉ាយ ថ្វាយបង្គំ ឲ្យព្រះអង្គ វិលត្រឡប់មកក្រុង វិញ ។', en: 'He entered the forest with Queen Madrī and their children Jālī and Kaṇhā. Giving continued even there, until he granted the children themselves to the Brahmin Jūjaka. The Brahmin later carried them to their grandfather, who ransomed them and, moved by Vessantara heart, invited the king home.' },
    ],
    essenceK: 'អ្នកដែលលះបង់ ដោយឥតជាប់ចិត្ត គឺជាអ្នកដែលមាន ដ៏ធំបំផុត។',
    essenceE: 'One who lets go without clinging is the greatest of all owners.',
    lessonK: 'ធ្វើទាន ឲ្យមិនមែនវាស់ដោយវត្ថុ តែវាស់ដោយចិត្តលះ — ឲ្យដោយចិត្តសប្បាយ ទើបជាទានបរិសុទ្ធ។',
    lessonE: 'Giving is measured not by the object but by the heart that releases it — a joyful gift is the purest gift.',
  },
  {
    src: 'DHP-A · ចូឡបន្ថកៈ',
    km: 'ចូឡបន្ថកៈ — អ្នកយឺត ដែលបានសម្រេច', en: 'Cūḷapanthaka, the slow learner who succeeded',
    noteK: 'រឿងលើកទឹកចិត្ត អ្នកដែលគិតថាខ្លួនខ្សោយ ឬ រៀនយឺត — ជាមេរៀន ជំហានបន្តិចៗ។', en: 'A story to encourage anyone who feels slow or not clever enough — the lesson of small steady steps.',
    paras: [
      { km: 'ចូឡបន្ថកៈ ជាប្អូនរបស់ព្រះមហាបន្ថកៈ។ បន្ទាប់ពីបួស គាត់រៀនគាថាមួយ ប៉ុន្មានខែ ក៏ពុំចាំបាន ព្រោះខ្សោយបញ្ញា។ បងរបស់គាត់ ខកចិត្ត ក៏ប្រាប់ថា គាត់ចេញពីសាសនា ទៅវិញទៅ។', en: 'Cūḷapanthaka, younger brother of Mahāpanthaka, could not memorise a single stanza after months of trying. His elder brother, disappointed, told him to leave the order and go home.' },
      { km: 'ព្រះពុទ្ធ ទ្រង់ប្រគល់ក្រណាត់ស មួយដុំ ឲ្យគាត់ ជូត ហើយរំពឹង មើលឲ្យឃើញ ថាក្រណាត់ កាន់តែសៅម៉ា តាមការប្រើ។ គាត់រំពឹងដល់អនិច្ចានៃក្រណាត់ ក៏ដល់នូវបញ្ញា ត្រាស់ដឹង។ លោកសម្រេច នូវអរហត្តផល ក្នុងថ្ងៃនោះឯង។', en: 'The Buddha gave him a soft white cloth and asked him to wipe with it while watching how it gathered dirt. Reflecting on that cloth, he saw impermanence, and with that insight attained arahantship the very same day.' },
    ],
    essenceK: 'ការព្យាយាមបន្តិចម្តងៗ រាល់ថ្ងៃ ទីបំផុត នឹងដល់គោលដៅ — កុំវាស់ខ្លួន ដោយសមត្ថភាពអ្នកដទៃ។',
    essenceE: 'Patient daily effort, however small, reaches the goal at last — never measure yourself by another measure.',
    lessonK: 'កុំបាក់ទឹកចិត្ត ពេលរៀនយឺត ឬ ពិបាក — ចាប់ផ្តើមតូច ហើយឧស្សាហ៍ ទៀងទាត់ ។',
    lessonE: 'Do not despair when learning comes slowly — begin small and stay steady.',
  },
  {
    src: 'UDĀNA 5.3 · សុប្បពុទ្ធគុដ្ឋិ',
    km: 'សុប្បពុទ្ធគុដ្ឋិ — កាយឃ្លង់ ចិត្តបរិសុទ្ធ', en: 'Suppabuddha the leper, whose heart was clean',
    noteK: 'រឿងបង្រៀនថា រាងកាយ និងស្ថានភាព មិនកំណត់តម្លៃមនុស្ស ទេ — ចិត្ត ជាអ្នកកំណត់។', en: 'A story showing that the body and circumstances do not fix a persons worth — the heart does.',
    paras: [
      { km: 'សុប្បពុទ្ធ ជាអ្នកក្រុងរាជគ្រហៈ កើតរោគឃ្លង់ ទាំងខ្លួន — គេច្រានចោល ពីគ្រប់ផ្ទះ ថាស្អុយ។ ព្រះពុទ្ធ ទ្រង់យាងមកស្នាក់ ក្នុងក្រុង ។ ថ្ងៃមួយ សុប្បពុទ្ធ លបស្តាប់ធម៌ ពីចន្លោះហ្វូងមនុស្ស — ដោយសទ្ធាមាំ បានដល់សោតាបត្តិផល ។', en: 'Suppabuddha, a leper of Rājagaha, was cast out and shunned. When the Buddha came to the city, he slipped into the edge of the crowd to listen — and with strong faith attained the first stage of awakening.' },
      { km: 'ល្ងាចនោះ ក្នុងផ្លូវត្រឡប់មកផ្ទះ គាត់ ត្រូវគោជល់ ស្លាប់ ។ ព្រះសង្ឃ បានក្រាបសួរព្រះពុទ្ធ ថា គាត់ទៅកើតណា ។ ព្រះពុទ្ធ ទ្រង់សម្តែង ក្នុងឧទាន នូវគុណរបស់គាត់ ថា ជាអ្នកបានដល់សោតាបត្តិផល មិនញាប់ញ័រ ចំពោះសេចក្តីស្លាប់ ។', en: 'That evening, on his way home, he was struck and killed by a cow. When the monks asked where he had been reborn, the Buddha spoke of his attainment — one blessed with the first stage of awakening does not tremble at death.' },
    ],
    essenceK: 'តម្លៃរបស់មនុស្ស ឋិតនៅត្រង់ចិត្ត — មិនមែនត្រង់កាយ ស្ថានភាព ឬ មុខមាត់ឡើយ។',
    essenceE: 'A persons worth lives in the heart — never in the body, the condition, or the face.',
    lessonK: 'កុំមើលងាយអ្នកដទៃ ដោយរាងកាយ ឋានៈ — ចិត្តល្អ សទ្ធាមាំ ទើបជាអ្វីដែលសំខាន់។',
    lessonE: 'Do not look down on others because of body or status — a good heart and firm faith are what matter.',
  },
  {
    src: 'MŪGAPAKKHA JĀTAKA 538',
    km: 'តេមិយៈ — ព្រះរាជកុមារធ្វើជាគថ្លង់ មិនចង់ឡើងសោយរាជ្យ', en: 'Temiya, the prince who feigned deafness to avoid the throne',
    noteK: 'ជាតក សម្រាប់ នេក្ខម្មបារមី (ការលះបង់រាជសម្បត្តិ) — រំឮកថា អំណាច និងកិត្តិយស មិនមែនជាសុខពិត ទេ។', en: 'The Jātaka of the renunciation pāramī — a reminder that power and fame are not true happiness.',
    paras: [
      { km: 'ព្រះបាទកាសិរាជ (កាសី) ជាស្តេចក្រុងពារាណសី ទ្រង់បានព្រះរាជបុត្រាមួយ ព្រះនាមតេមិយៈ។ នៅថ្ងៃបរិនាមនាមកម្ម ព្រះរាជបុត្រាតូច ទ្រង់ឃើញអ្នកទើបប្រហារជីវិត ដែលស្តេចបិតា បញ្ជាឲ្យធ្វើទោស។ ដោយរំឮកដល់ជាតិមុន ដែលធ្លាប់ជាស្តេចកាសិរាជ ដ៏ឃោរឃៅ បានធ្លាក់ទៅនរក ទ្រង់ក៏ភ័យស្លន់ស្លោ នឹងរាជ្យ តាំងតែពីក្នុងផ្ទៃពោះ រួចធ្វើជាគថ្លង់ ពិការកាយ មិនព្រមនិយាយ ដើម្បីកុំឲ្យឡើងសោយរាជ្យ។', en: 'King Kāsirāja of Bārāṇasī had a son named Temiya. On the day of his naming ceremony, the young prince saw criminals being punished on his father’s command. Remembering a past life when, as a cruel king, he had fallen into hell, he was filled with dread of the crown. From that moment he feigned deafness, muteness, and a crippled body, unwilling ever to reign.' },
      { km: 'ព្រះបាទកាសិរាជ ទ្រង់សោកស្តាយ ព្រះរាជបុត្រា គថ្លង់ ក៏ប្រឹងសាកល្បង ប៉ុន្មានដង ក៏មិនបានសម្រេច។ ដល់ព្រះរាជបុត្រា អាយុ ១៦ ឆ្នាំ ស្តេច ទ្រង់ទ័លចិត្ត ក៏បញ្ជាឲ្យសុណន្ទ អ្នកបររថ យកព្រះរាជបុត្រា ទៅកប់ក្នុងព្រៃ ដើម្បីឲ្យផុតពីអាម៉ាស់របស់រាជវង្ស។', en: 'King Kāsirāja grieved over a deaf-and-dumb heir. He tested the boy many times, yet never once broke his silence. When the prince turned sixteen, the king gave up. He ordered his charioteer Sunanda to take the boy deep into the forest and bury him, to spare the dynasty its shame.' },
      { km: 'សុណន្ទ ជីករណ្តៅ តែដី មិនចេះជ្រៅឡើយ ព្រោះទេវតា ការពារ។ ព្រះតេមិយៈ ទ្រង់យាយរំលំ ក្លាយជាមនុស្សពេញលក្ខណៈ សម្តែងធ្វើឲ្យសុណន្ទ ភ្ញាក់ផ្អើល។ ទ្រង់ត្រឡប់មកក្រុងវិញ ទទួលរាជ្យ ប៉ុន្តែសោយរាជ្យ ដោយធម៌ ប្រាសចាកអំពើឃោរឃៅ — ក្រោយមក ក៏បួស លះបង់សព្វគ្រប់។', en: 'Sunanda dug and dug, but the earth would not open — the gods protected the prince. Then Temiya revealed himself, whole and strong, astonishing the charioteer. He returned to the city and took the throne, but ruled by righteousness, free of cruelty. In time he gave it all up and went forth as an ascetic.' },
    ],
    essenceK: 'អំណាច និងកិត្តិយស មិនមែនជាទីពឹងពិត ទេ — អ្នកដែលលះបង់ ដោយធម៌ ទើបបានសេចក្តីស្ងប់។',
    essenceE: 'Power and honour are no true refuge — only one who lets go by the Dhamma finds peace.',
    lessonK: 'កុំជាប់ចិត្ត ក្នុងអំណាច ទ្រព្យ ឋានៈ — យើងអាចនៅក្នុងលោក តែមិនជាប់ទាស់ នឹងលោក ដោយបដិបត្តិធម៌។',
    lessonE: 'Do not cling to power, wealth, or status — you can live in the world yet not be bound by it, by walking the Dhamma.',
  },
  {
    src: 'DHP-A · នាឡាគិរី',
    km: 'នាឡាគិរី — ដំរីព្រៃដែលមេត្តារំងាប់បាន', en: 'Nālāgiri, the wild elephant tamed by loving-kindness',
    noteK: 'រឿងល្បី អំពីព្រះចេស្តានៃមេត្តា — ដែលអាចរំងាប់បាន ទាំងដំរីជ្រុល ទាំងអស្សុទ្ទ។', en: 'A well-loved tale of the power of loving-kindness — able to calm a raging elephant without a single harsh word.',
    paras: [
      { km: 'ព្រះទេវទត្ត ច្រណែន នឹងព្រះពុទ្ធ ប្រឹងប្រហារព្រះជន្ម ជាច្រើនដង តែរាល់ដង ពុំបានសម្រេច។ ដងមួយ គាត់លែងដំរីនាឡាគិរី ដែលជាដំរីជ្រុល វង្វេង ទៅរកព្រះពុទ្ធ ដែលទ្រង់យាងបិណ្ឌបាត នៅក្នុងក្រុងរាជគ្រហៈ។', en: 'Devadatta, consumed by jealousy of the Buddha, tried many times to harm him, and always failed. One day he loosed the rampaging bull-elephant Nālāgiri upon the Buddha as he walked for alms through the streets of Rājagaha.' },
      { km: 'ពេលដំរីរត់សំដៅមក បណ្តាជន ភ័យស្លន់ស្លោ រត់គេចបែកខ្ចាត់ខ្ចាយ។ ព្រះពុទ្ធ ទ្រង់ស្ងប់ស្ងៀម ព្រះអង្គសម្តែងនូវព្រះពន្លឺនៃមេត្តា ដោយព្រះទ័យ សព្វពេល។ កូនភ្លុក ដំរីធំ រត់មកដល់ បែរជាស្ងប់ លុតជង្គង់ ថ្វាយបង្គំ ព្រះពុទ្ធ — ដោយកាយ សន្សើម ត្រជាក់ ដោយសន្តានចិត្ត។', en: 'As the elephant thundered toward him, people scattered in panic. The Buddha stood still and stilled, radiating loving-kindness with a mind of boundless good will. The great tusker came charging on, then quietly knelt and paid homage to the Buddha — cooled by the power of his heart.' },
      { km: 'ព្រះពុទ្ធ ទ្រង់លើកព្រះហស្ត ពាល់ក្បាលដំរី ឲ្យស្ងប់ ហើយប្រោសប្រទានធម៌ ដល់អស្សុទ្ទ។ ចាប់ពីពេលនោះមក ដំរីនាឡាគិរី ក៏ស្លូតបូត ស្មោះវិញ — បង្រៀនថា មេត្តា ឈ្នះបាន សូម្បីសេចក្តីក្រោធ ដ៏ធំបំផុត។', en: 'The Buddha raised his hand, soothed the elephant, and offered the Dhamma to the crowd as well. From that day Nālāgiri became gentle and tame — a living lesson that loving-kindness can overcome even the greatest anger.' },
    ],
    essenceK: 'ពាក្យទន់  ឥតសឹកស៊ា អាចរំងាប់បាន នូវចិត្តប្រាសាទ វង្វេង បំផុត។',
    essenceE: 'A gentle word, free of anger, can soothe even the most confused and ferocious heart.',
    lessonK: 'ពេលជួបសេចក្តីក្រោធ ឬ អ្នកដែលប្រឆាំង — កុំប្រឆាំងតប តែឲ្យមេត្តា ស្ងប់ ដើរមុន ទើបបានសេចក្តីសុខ។',
    lessonE: 'When you meet anger or opposition — do not answer with anger; let a calm loving-kindness lead, and peace will follow.',
  },
  {
    src: 'VIN PĀTIMOKKHA · សារីបុត្ត ជួបអស្សជិ',
    km: 'សារីបុត្ត និងមោគ្គល្លាន — ការជួបដែលដុះពន្លឺព្រះពុទ្ធសាសនា', en: 'Sāriputta and Moggallāna — the meeting that kindled the Saṅgha',
    noteK: 'រឿងកំណើតនៃព្រះសង្ឃ ដែលជាអគ្គសាវក ទាំងពីររូប — អំពីបញ្ញា ដែលចេះស្តាប់ និងស្គាល់តម្លៃធម៌។', en: 'The story of the two chief disciples — about wisdom that knows how to listen and recognise the worth of the Dhamma.',
    paras: [
      { km: 'អ្នកត្រាច់ចរណ៍ ឈ្មោះ សារីបុត្ត និងមោគ្គល្លាន ជាសិស្សរបស់សន្ជយៈ បានរស់នៅ ជាមួយគ្នា ហើយសន្យាគ្នាថា អ្នកណាបានដល់នូវសេចក្តីស្លាប់ មិនស្លាប់ (អមតៈ) មុនគេ ត្រូវប្រាប់អ្នកទៀត។ ព្រឹកព្រលឹមថ្ងៃមួយ ក្នុងក្រុងរាជគ្រហៈ សារីបុត្ត បានឃើញព្រះអស្សជិ ជាភិក្ខុបញ្ចវគ្គីយ៍ មួយអង្គ ដែលមានមារយាទ ស្រស់បំព្រង ស្ងប់ស្ងៀម — កើតសទ្ធាក្នុងចិត្ត ជាខ្លាំង។', en: 'Two wanderers, Sāriputta and Moggallāna, were disciples of Sañjaya, and they had promised each other that whichever found the deathless first would tell the other. One morning, in the city of Rājagaha, Sāriputta saw the Venerable Assaji, a monk of the first five disciples, whose calm and graceful deportment filled his heart with faith.' },
      { km: 'សារីបុត្ត ដើរតាម សួរថា ព្រះសាស្តា ជាអ្នកណា ហើយសម្តែងធម៌បែបណា។ ព្រះអស្សជិ ប្រាប់សង្ខេបថា «ព្រះសម្មាសម្ពុទ្ធ ជាសាស្តារបស់ខ្ញុំ ទ្រង់សម្តែងថា វត្តមាន ដែលកើតពីហេតុ ហើយ ដែលព្រះតថាគត សម្តែងហេតុ និងផល របស់វត្តមាន ទាំងនោះ និង ការរលត់ នោះឯង ជារបស់ សមណៈធំបំផុត។» សារីបុត្ត គ្រាន់តែឮ ប៉ុណ្ណោះ ក៏ដល់សោតាបត្តិផល ជាបន្ទាន់។', en: 'Sāriputta approached and asked who the teacher was and what he taught. Assaji replied: “My teacher is the Blessed One, fully awakened. He teaches that what arises dependently, its cause, its ceasing, and the path — all this the Tathāgata has made known.” Hearing no more than this, Sāriputta attained the first stage of awakening on the spot.' },
      { km: 'សារីបុត្ត ត្រឡប់ទៅ ប្រាប់មោគ្គល្លាន — មោគ្គល្លាន ក៏បានដល់សោតាបត្តិផល ដូចគ្នា។ អ្នកទាំងពីរ នាំគ្នាទៅសួរព្រះពុទ្ធ ទទួលបួស បដិបត្តិ ក្រោយមក ក៏ក្លាយជាអគ្គសាវក ទាំងពីរ នៃព្រះពុទ្ធសាសនា — គឺព្រះសារីបុត្ត អ្នកឈ្លាសបញ្ញា និងព្រះមោគ្គល្លាន អ្នកមានឫទ្ធិ។', en: 'Sāriputta returned and told Moggallāna, who likewise attained the first stage. The two friends went together to see the Buddha, were ordained, and in time became the two chief disciples of the dispensation — Sāriputta, foremost in wisdom, and Moggallāna, foremost in psychic powers.' },
    ],
    essenceK: 'រឿងបញ្ញា ដែលចេះស្តាប់ គ្រាន់តែឮពាក្យល្អ បន្តិច ក៏ដឹងថា នេះជាផ្លូវត្រូវ។',
    essenceE: 'A story of wisdom that knows how to listen — a few well-spoken words were enough to reveal the right path.',
    lessonK: 'កុំមើលងាយពាក្យខ្លីនៃធម៌ — ពាក្យមួយ ដែលដល់ចិត្ត អាចបើកផ្លូវ ដល់ការត្រាស់ដឹង។',
    lessonE: 'Do not look down on a short saying of the Dhamma — one word that reaches the heart can open the way to awakening.',
  },
]
</script>