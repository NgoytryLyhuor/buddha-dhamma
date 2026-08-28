<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ០៧ — ព្រះសូត្រ', 'GATHA 07 — SUTTAS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('ព្រះធម្មទេសនាដ៏ល្បីល្បាញ', 'Famous Discourses Explained') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ក្នុងព្រះសុត្តន្តបិដក មានសូត្ររាប់ពាន់។ នៅទីនេះ ជ្រើសរើសសូត្រសំខាន់ៗ មកពន្យល់យ៉ាងលម្អិត ដើម្បីឲ្យអ្នកអានចាប់ផ្តើមយល់។', 'The Sutta Pitaka holds thousands of discourses. Here we select the key suttas and explain them in detail, so you can begin to understand.') }}
    </p>

    <!-- The five nikayas -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">PIṬAKA — NIKĀYA</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ព្រះសុត្តន្តបិដក មាន ៥ និកាយ', 'The Sutta Piṭaka has Five Nikāyas') }}</h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t('បុរាណវាចារ្យបានចែកព្រះសូត្រទាំងអស់ ជា ៥ កម្រង (និកាយ) តាមប្រវែង និងប្រធាន — នេះជាផែនទី ដើម្បីដឹងថាសូត្រនីមួយៗ មកពីកន្លែងណា។', 'The ancient teachers grouped all the suttas into five collections (nikāyas) by length and theme — use this as a map of where each sutta comes from.') }}</p>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mt-5">
        <div v-for="n in nikayas" :key="n.en" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="paali">{{ n.pl }}</span>
          <p class="font-display text-sm mt-2" :style="{ color: 'var(--ink)' }">{{ t(n.km, n.en) }}</p>
          <p class="text-[11px] mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(n.kmBody, n.enBody) }}</p>
        </div>
      </div>
    </div>

    <!-- how to read -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">HOW TO READ</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('របៀបអានព្រះសូត្រឲ្យបានផល', 'How to Read a Sutta Well') }}</h3>
      <ul class="tick-list mt-4">
        <li v-for="r in howto" :key="r.en"><span class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t(r.km, r.en) }}</span></li>
      </ul>
    </div>

    <!-- sutta list -->
    <div class="mt-8">
      <p class="chapter-label">{{ t('សូត្រជម្រើស ១០ — ចុចដើម្បីបើកមើល', 'TEN SELECTED SUTTAS — TAP TO OPEN') }}</p>
    </div>
    <div class="mt-4 space-y-4">
      <details v-for="(s, i) in suttas" :key="s.en" class="card-paper p-6 md:p-8" :open="i === 0">
        <summary class="select-none">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div class="min-w-0">
              <p class="chapter-label">{{ s.ref }}</p>
              <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t(s.km, s.en) }}</h3>
              <p class="text-sm mt-1 tracking-widest" :style="{ color: 'var(--ink-muted)' }">{{ s.paali }}</p>
            </div>
            <div class="flex items-center gap-3 shrink-0 mt-1">
              <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
              <span class="caret" :style="{ color: 'var(--accent-bright)' }">&#9660;</span>
            </div>
          </div>
        </summary>

        <div class="mt-5">
          <p class="text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            <span class="font-bold" :style="{ color: 'var(--ink-soft)' }">{{ t('បរិបទ', 'Context') }} · </span>{{ t(s.bgK, s.bgE) }}
          </p>

          <ul class="tick-list mt-4">
            <li v-for="p in s.list" :key="p.en"><span class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t(p.km, p.en) }}</span></li>
          </ul>

          <div class="verse-box p-4 mt-4">
            <p v-if="s.raw" class="text-sm italic" :style="{ color: 'var(--ink-muted)' }">{{ s.raw }}</p>
            <p class="text-sm mt-1 font-bold" :style="{ color: 'var(--ink-soft)' }">{{ t(s.kmVerse, s.enVerse) }}</p>
          </div>

          <div class="mt-4 p-3 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
            <p class="text-[10px] font-bold tracking-widest uppercase" :style="{ color: 'var(--accent)' }">{{ t('អនុវត្តក្នុងជីវិត', 'APPLY IT TODAY') }}</p>
            <p class="text-sm mt-1" :style="{ color: 'var(--ink-soft)' }">{{ t(s.applyK, s.applyE) }}</p>
          </div>

          <div class="flex flex-wrap gap-2 mt-4">
            <span v-for="tag in s.tags" :key="tag" class="paali">{{ tag }}</span>
          </div>
        </div>
      </details>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  return String(n).split('').map(d => khDigits[Number(d)]).join('')
}

const nikayas = [
  { pl: 'DĪGHA', km: 'ទីឃនិកាយ', en: 'Dīgha Nikāya', kmBody: 'ព្រះសូត្រវែង ៣៤ សូត្រ', enBody: '34 long discourses' },
  { pl: 'MAJJHIMA', km: 'មជ្ឈិមនិកាយ', en: 'Majjhima Nikāya', kmBody: 'ព្រះសូត្រកណ្តាល ១៥២ សូត្រ', enBody: '152 middle-length discourses' },
  { pl: 'SAṂYUTTA', km: 'សំយុត្តនិកាយ', en: 'Saṃyutta Nikāya', kmBody: 'សូត្រចម្រុះតាមប្រធាន ៥៦ កម្រង', enBody: 'Discourses grouped by topic in 56 chapters' },
  { pl: 'AṄGUTTARA', km: 'អង្គុត្តរនិកាយ', en: 'Aṅguttara Nikāya', kmBody: 'សូត្ររាប់តាមលេខ ពី ១ ដល់ ១១ និបាត', enBody: 'Numerically arranged, ones to elevens' },
  { pl: 'KHUDDAKA', km: 'ខុទ្ទកនិកាយ', en: 'Khuddaka Nikāya', kmBody: 'គម្ពីរតូចៗ — ធម្មបទ ខុទ្ទកបាឋ សុត្តនិបាត ជាដើម', enBody: 'The small collection — Dhp, Khp, Sn and more' },
]

const howto = [
  { km: 'មើលបរិបទជាមុន — តើត្រាស់ទេសនានៅកន្លែងណា ដល់អ្នកណា ក្នុងឱកាសអ្វី?', en: 'Read the context first — where it was taught, to whom, and on what occasion.' },
  { km: 'ប្រៀបធៀបមិនមែនជាសេចក្តីពិតត្រង់ៗទេ — ព្រះសូត្រច្រើនប្រើរូបភាព ដើម្បីឲ្យយល់សេចក្តីជ្រៅ។', en: 'Similes point to meaning — they are not the literal truth, only a lamp for the deeper meaning.' },
  { km: 'សាកល្បងដោយខ្លួនឯង ដូចពួកកាលាម — កុំជឿតែពីឮគេមក។', en: 'Test the teaching yourself, like the Kālāmas — do not believe on hearsay alone.' },
  { km: 'ខ្លឹមសារគឺនៅត្រង់អ្វីដែលវាឲ្យបដិបត្តិ មិនមែនត្រង់តែពាក្យប៉ុណ្ណោះ។', en: 'The heart of a sutta is the instruction it gives you to practise — not only the words.' },
]

const suttas = [
  {
    ref: 'SN 56.11', paali: 'DHAMMA·CAKKAPPAVATTANA',
    km: 'ធម្មចក្កប្បវត្តនសូត្រ', en: 'Setting the Wheel of Dhamma in Motion',
    bgK: 'ក្រោយត្រាស់ដឹងក្រោមដើមពោធិព្រឹក្ស ព្រះពុទ្ធទ្រង់យាងទៅឥសិបតនមិគទាយវ័ន ក្បែរក្រុងពារាណសី ហើយត្រាស់ព្រះធម្មទេសនាដំបូងនេះ ដល់ពួកបញ្ចវគ្គិយ ៥ អង្គ គឺ កុណ្ឌញ្ញៈ វប្បៈ ភទ្ទិយៈ មហានាមៈ អស្សជិៈ។',
    bgE: 'After his awakening beneath the bodhi tree, the Buddha walked to the Deer Park at Isipatana near Benares and gave this first sermon to the five ascetics — Kondañña, Vappa, Bhaddiya, Mahānāma and Assaji.',
    list: [
      { km: 'អន្តៈ ២ ដែលអ្នកបួសមិនគួរប្រព្រឹត្ត៖ ការជាប់ជំពាក់នឹងកាមសុខ និងការធ្វើទុក្ខដាក់ខ្លួនឯង។', en: 'Two extremes a renunciant should avoid: indulgence in sensual pleasures, and self-mortification.' },
      { km: 'ផ្លូវកណ្តាល — មគ្គ ៨ អង្គ ដែលព្រះតថាគតបានត្រាស់ដឹង ហើយបដិបត្តិ។', en: 'The Middle Way — the eightfold path, realized and practised by the Tathāgata.' },
      { km: 'អរិយសច្ច ៤៖ ទុក្ខ សមុទយ និរោធ មគ្គ។', en: 'The Four Noble Truths: suffering, its origin, its cessation, and the path.' },
      { km: 'ដំណកនៃញ្ញាណ ៣ ជុំ (ទ្វាទសាការ ១២)៖ ដឹងសច្ចៈ កិច្ចដែលត្រូវធ្វើ និងកិច្ចដែលបានធ្វើហើយ។', en: 'The three rounds of knowledge (twelve modes): knowing each truth, the task it demands, and the task accomplished.' },
      { km: 'ទេសនាចប់ អញ្ញាកុណ្ឌញ្ញៈ បានសម្រេចសោតាបត្តិផល — ព្រះធម្មចក្រ ក៏បានប្រព្រឹត្តទៅក្នុងលោក។', en: 'At the end, Kondañña attained stream-entry — the wheel of Dhamma had been set rolling.' },
    ],
    raw: 'ទ្វេ ខោ មេ ភិក្ខវេ អន្តា បព្វជិតេន ន សេវិតព្ពា ។ កាមេសុ កាមសុខល្លិកានុយោគោ ហីនោ គម្មោ បុថុជ្ជនិកោ អនរិយោ អនត្ថសំហិតោ; អត្តកិលមថានុយោគោ ទុក្ខោ អនរិយោ អនត្ថសំហិតោ ។',
    kmVerse: '«បណ្ឌិតមិនគួរជាប់ក្នុងរឿងត្រេកត្រអាល ក៏មិនគួរធ្វើទុក្ខដាក់ខ្លួន — គួរដើរតាមផ្លូវកណ្តាល»', enVerse: '"One should not indulge in sensual pleasures, nor torment the self — walk the Middle Way."',
    applyK: 'ក្នុងជីវិតប្រចាំថ្ងៃ៖ កុំបណ្តោយខ្លួនតាមកាម ក៏កុំធ្វើទុក្ខដាក់ខ្លួន — ដើរលើផ្លូវកណ្តាល ដោយថ្នម ស្មើ និងប្រុងប្រយ័ត្ន។', applyE: 'In daily life: neither chase pleasures nor punish yourself — walk the middle way with care and balance.',
    tags: ['First Sermon', '4 Noble Truths', '8-fold Path', 'Middle Way'],
  },
  {
    ref: 'SN 22.59', paali: 'ANATTALAKKHAṆA',
    km: 'អនត្តលក្ខណសូត្រ', en: 'The Characteristic of Not-Self',
    bgK: 'ប្រាំថ្ងៃក្រោយពីធម្មចក្កប្បវត្តនសូត្រ ព្រះពុទ្ធទ្រង់ត្រាស់ព្រះធម្មទេសនាទីពីរនេះ ដល់ពួកបញ្ចវគ្គិយដដែល នៅឥសិបតនមិគទាយវ័ន។',
    bgE: 'Five days after the first sermon, this second discourse was given to the very same five ascetics at Isipatana.',
    list: [
      { km: 'ព្រះពុទ្ធទ្រង់សួរថា «រូបទៀង ឬ មិនទៀង?» — តាមពិត ខន្ធ ៥ សុទ្ធតែមិនទៀង ព្រោះកើត-រលត់រាល់ខណៈ។', en: 'The Buddha asks whether form is permanent or impermanent — truly all five aggregates are impermanent, arising and passing each moment.' },
      { km: '«អ្វីដែលមិនទៀង ជាទុក្ខ មិនសមរាប់ថាជាខ្លួន» — ឃើញដូចនេះ ទើបខ្ពើមឆ្អេះ។', en: 'What is impermanent is suffering and unfit to be seen as self — seeing this, one grows disenchanted.' },
      { km: 'ពិនិត្យខន្ធ ៥ ម្តងមួយៗថា៖ «មិនមែនជារបស់អញ មិនមែនជាអញ មិនមែនជាខ្លួនអញ»។', en: 'Examining each aggregate: this is not mine, this I am not, this is not my self.' },
      { km: 'ខន្ធនីមួយៗ ត្រូវពិនិត្យទាំងអតីត អនាគត បច្ចុប្បន្ន — ខាងក្នុង ឬ ខាងក្រៅ — គ្រោតគ្រាត ឬ ល្អិតល្អន់។', en: 'Each aggregate is examined across past, future and present — within or without — coarse or subtle.' },
      { km: 'គ្មានអ្នកណា ជាម្ចាស់នៃអ្វី ដែលជាអនត្តា បានឡើយ — ពេលទេសនាចប់ លោកអស្សជិ បានអរហត្តផលមុនគេ ហើយទាំង ៥ អង្គ ក៏បានសម្រេច។', en: 'No one is the owner of what is not-self. When the teaching ended, Assaji first, then all five ascetics, attained arahantship.' },
    ],
    raw: 'រូបំ អនត្តា … វេទនា អនត្តា … សញ្ញា អនត្តា … សង្ខារា អនត្តា … វិញ្ញាណំ អនត្តា ។',
    kmVerse: '«រូប វេទនា សញ្ញា សង្ខារ វិញ្ញាណ សុទ្ធតែមិនមែនជាខ្លួន»', enVerse: '"Form, feeling, perception, formations, consciousness — all are not-self."',
    applyK: 'ពេលជាប់ចិត្តនឹងកាយ ឬ អារម្មណ៍ថា «របស់អញ» — រំលឹកថា អ្វីៗនេះកំពុងរលត់ ជួយបន្ធូរការប្រកាន់។', applyE: 'When clinging to your body or feelings as "mine", remember they are already passing away — this loosens the grasp.',
    tags: ['Not-Self', '5 Aggregates', 'First Arahants'],
  },
  {
    ref: 'Khp 9 · Sn 1.8', paali: 'METTĀ',
    km: 'មេត្តាសូត្រ', en: 'The Discourse on Loving-Kindness',
    bgK: 'ភិក្ខុ ៥០០ អង្គ បានទៅតម្កល់ចិត្តធ្វើសមណធម៌ ក្រោមដើមឈើដែលរុក្ខទេវតាមិនពេញចិត្ត — ទេវតាទាំងនោះ បង្កការភ័យបន្លាចឲ្យភិតភ័យរត់ចេញ។ ព្រះពុទ្ធទ្រង់ប្រដៅ ដោយប្រគេនសូត្រមេត្តាបរិត្តនេះ។',
    bgE: 'Five hundred monks went to meditate beneath trees whose devas disliked them and used fear to drive them away. The Buddha taught them this Mettā paritta as protection.',
    list: [
      { km: 'អ្នកដែលចេះអត្ថន័យ និងស្ងប់ក្នុងសីល គួរបណ្តុះចិត្តសប្បុរស ដល់សត្វទាំងអស់។', en: 'One who understands the purpose, and is calm in virtue, should cultivate a kind heart toward all beings.' },
      { km: 'ដូចម្តាយការពារកូនតែមួយ យ៉ាងណា ចូរបណ្តុះចិត្តបរិបូរដល់សត្វទាំងអស់ យ៉ាងនោះ។', en: 'As a mother guards her only child with her life, so let one develop a boundless heart toward all beings.' },
      { km: 'ផ្សាយទៅទិសទាំង ៦ — លើ ក្រោម ជុំវិញ — ដោយឥតសត្រូវ ឥតកំហឹង ឥតព្យាបាទ។', en: 'Radiate to all six directions — above, below, all around — without enmity, anger or ill-will.' },
      { km: 'គួរបួងសួងឲ្យសត្វទាំងឡាយ បានសុខសប្បាយ សុខទាំងកាយ ទាំងចិត្ត។', en: 'Wishing all beings be well — secure, and at ease in body and mind.' },
      { km: 'អ្នកបណ្តុះមេត្តា រមែងបានអនិសង្ស ១១ ប្រការ — គេងលក់ស្រួល ភ្ញាក់រីករាយ មិនសុបិន្តអាក្រក់ ទេវតារាប់អាន មុខភ្លឺថ្លា ស្លាប់មិនភ័ន្តស្មារតី កើតក្នុងព្រហ្មលោក។', en: 'Cultivating mettā brings eleven blessings — sleeping well, waking happy, no bad dreams, dear to humans and devas, a bright face, dying unconfused, rebirth in the Brahma realm.' },
    ],
    raw: 'មាតា យថា និយំ បុត្តំ អាយុសា ឯកបុត្តមនុរក្ខេ ឯវម្បិ សព្វភូតេសុ មានសម្ភាវេយ្យ អបរិមាណំ ។',
    kmVerse: '«ដូចម្តាយមួយជីវិតរក្សាបុត្រ យ៉ាងណា ចូរអ្នកបាចសាយចិត្តសប្បុរសដល់សត្វទាំងអស់»', enVerse: '"Even as a mother guards her only child with her life, so let one cultivate a boundless heart toward all beings."',
    applyK: 'រាល់ព្រឹក ផ្សាយមេត្តាដល់ខ្លួនឯង ក្រុមគ្រួសារ មិត្ត — រួមទាំងអ្នកដែលធ្វើអាក្រក់ដាក់ខ្លួន — រយៈ ២-៣ នាទី។', applyE: 'Each morning, radiate mettā to yourself, your family and friends — even those who have wronged you — for two or three minutes.',
    tags: ['Goodwill', '11 Blessings', 'Paritta'],
  },
  {
    ref: 'Khp 5 · Sn 2.4', paali: 'MAṄGALA',
    km: 'មង្គលសូត្រ', en: 'The Discourse on Blessings',
    bgK: 'ពួកទេវតាកំពុងជជែកគ្នាអំពីមង្គល (សេចក្តីសួស្តី) ថ្ងៃមួយ ទេវតាអង្គមួយ បានមកក្រាបថ្វាយបង្គំព្រះពុទ្ធ រួចសួរថា៖ «អ្វីជាមង្គលដ៏ឧត្តម?»',
    bgE: 'The devas were debating what truly brings good fortune. One night a deva came, bowed to the Buddha, and asked: "What is the highest blessing?"',
    list: [
      { km: 'មង្គលដើមដំបូង៖ មិនសេពគប់អ្នកល្ងង់ រាប់អានអ្នកប្រាជ្ញ បូជាអ្នកគួរបូជា។', en: 'The first blessings: not befriending fools, honouring the wise, and paying respect to those worthy of it.' },
      { km: 'ការរស់នៅប្រទេសសមគួរ កើតព្រះអរិយៈ កន្លងមកបានធ្វើបុណ្យ ញ៉ាំងខ្លួនឯងឲ្យត្រឹមត្រូវ។', en: 'A suitable land, past merit, setting oneself rightly in the way.' },
      { km: 'ការដឹងច្រើន ចេះសិល្បៈ វិន័យដែលហ្វឹកហាត់ល្អ ពាក្យសម្តីស្រស់ស្អាតល្អ។', en: 'Learning, skill in the arts, well-trained discipline, and pleasant speech.' },
      { km: 'ការគោរពបំរើមាតាបិតា ថែរក្សាកូន ប្រពន្ធ ប្រកបការងារឥតច្រឡំ។', en: 'Caring for mother and father, supporting wife and children, and working without confusion.' },
      { km: 'ការឲ្យទាន ការប្រព្រឹត្តធម៌ សេចក្តីលះបង់ វៀរចាកអំពើអាក្រក់ វៀរចាកទឹកស្រា ឧស្សាហ៍ក្នុងធម៌។', en: 'Generosity, righteousness, renunciation, avoiding evil, avoiding strong drink, diligence in the Dhamma.' },
      { km: 'រហូតដល់ចិត្តមិនរវើយ កាលប៉ះពាល់នឹងធម៌លោក — នេះជាមង្គលដ៏ឧត្តម ដែលនាំដល់ព្រះនិព្វាន។', en: 'Up to an unshaken mind when touched by the ways of the world — the supreme blessing that leads to Nibbāna.' },
    ],
    raw: 'អសេវនា ច ពាលានំ បណ្ឌិតានញ្ច សេវនា បូជា ច បូជនីយានំ ឯតំ មង្គលមុត្តមំ ។',
    kmVerse: '«ការមិនផ្គរជាមួយអ្នកល្ងង់ ការផ្គរជាមួយអ្នកប្រាជ្ញ ការបូជាចំពោះអ្នកគួរបូជា — នេះជាមង្គលដ៏ខ្ពស់»', enVerse: '"Not consorting with fools, consorting with the wise, honouring those worthy of honour — this is the highest blessing."',
    applyK: 'ពិនិត្យខ្លួននូវមង្គល ៣៨ ម្តងម្កាល — តើថ្ងៃនេះ យើងកំពុងបោះជំហានលើមង្គលណា?', applyE: 'From time to time check yourself against the 38 blessings — on which blessing are you standing today?',
    tags: ['38 Blessings', 'Devata Question'],
  },
  {
    ref: 'Khp 6 · Sn 2.1', paali: 'RATANA',
    km: 'រតនសូត្រ', en: 'The Discourse on Gems',
    bgK: 'ក្រុងវេសាលី កំពុងរងគ្រោះទុរ្ភិក្ស ឆ្លងរោគ និងការវិនាសត្រកូល ។ ព្រះពុទ្ធទ្រង់ត្រាស់ឲ្យព្រះអានន្ទ សូត្ររតនបរិត្តនេះ ដើម្បីបន្លប់ទុគ្គតិ និងរោគ ។',
    bgE: 'Vesāli was struck by famine, plague and the loss of its leading families. The Buddha had Ānanda recite this Ratana paritta to drive away the calamity and disease.',
    list: [
      { km: 'សរសើរគុណ ព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ — ព្រះរតនៈ ៣ យ៉ាង ជាកំណប់ដ៏វិសេស។', en: 'Honouring the Buddha, the Dhamma and the Sangha — the three supreme gems.' },
      { km: 'ព្រះសង្ឃ ដែលសម្រេចផលទាំងឡាយ ជាអ្នកបង្ហាញផ្លូវ ដែលនាំទៅកាន់ព្រះនិព្វាន។', en: 'The Sangha who attained the fruits — they reveal the path that leads to Nibbāna.' },
      { km: 'ព្រះអរិយៈ ដូចជាព្រះសោតាបន្ន ជាអ្នកឋិតនៅក្នុងសីល ឃើញនិព្វាន ផុតចាកអបាយភូមិ ។', en: 'Noble disciples such as the stream-enterer, established in virtue, who has seen Nibbāna and is beyond the woeful planes.' },
      { km: 'ព្រះអរិយៈ ដែលរួចផុតពីកំណើតម្តងទៀត? — កុសលធម៌ ដែលជាផ្លូវនាំទៅកាន់ភាពមិនកើត ។', en: 'Those who are free from renewed birth — their good qualities are the way to the unborn.' },
      { km: 'រាល់រតនៈក្នុងលោកនេះ លោកខាងមុខ ក្នុងសួគ៌ — គ្មានអ្វីស្មើនឹងព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ ។', en: 'Whatever treasure there is here or beyond, in heavens — none equals the Buddha, the Dhamma, the Sangha.' },
    ],
    raw: 'យំ កិញ្ចិ វិត្តមិធ វា ហុរម្ហិវា សគ្គេសុ វា យំ រតនំ បណីតំ ន នោ សមំ អត្ថិ តថាគតេន ។',
    kmVerse: '«ទ្រព្យណា ទេវៈណា ក្នុងលោកនេះ ឬលោកខាងមុខ គ្មានទេវៈណា ស្មើនឹងព្រះតថាគតឡើយ»', enVerse: '"Whatever treasure there is here or beyond, none equals the Tathāgata."',
    applyK: 'ពេលមានភ័យ ឬ សំណាងអាក្រក់ — រំលឹកគុណរតនត្រ័យ ហើយសូត្ររតនបរិត្ត។', applyE: 'In moments of fear or misfortune, recollect the Three Jewels and recite the Ratana paritta.',
    tags: ['Three Jewels', 'Protection Sutta'],
  },
  {
    ref: 'AN 3.65', paali: 'KĀLĀMA',
    km: 'កាលាមសូត្រ', en: 'The Discourse to the Kālāmas',
    bgK: 'ពួកកាលាមក្នុងក្រុងកេសមុត្តិ បានសួរព្រះពុទ្ធថា សាសនាដទៃ តែងសរសើរតែសាសនាខ្លួន បន្ទាបបន្ទោកសាសនាដទៃ — តើយើងគួរជឿអ្នកណា?',
    bgE: 'The Kālāmas of Kesamutta said every religion praised itself and reviled others — whom should they believe?',
    list: [
      { km: 'កុំជឿភ្លាម ដោយហេតុ ១០ យ៉ាង៖ ឮតាម តៗ មកថា ទំនៀម គម្ពីរ តក្ក ការប៉ាន់ ការត្រិះរិះ ឃើញល្អម្តង រាប់អានគ្រូ ឬ រាប់អានសមណៈរបស់ខ្លួន។', en: 'Do not accept on any of ten grounds: hearsay, tradition, rumour, scripture, logic, inference, careful thought, favourable appearance, respect for a teacher, or because that ascetic is ours.' },
      { km: 'ផ្ទុយទៅវិញ ដឹងដោយខ្លួនឯងថា អំពើណា អកុសល មានទោស អ្នកប្រាជ្ញតិះដៀល — នោះលះបង់ចេញ។', en: 'Instead, know for yourself: whatever conduct is unwholesome, blameworthy, condemned by the wise — abandon it.' },
      { km: 'អំពើណា កុសល ឥតទោស អ្នកប្រាជ្ញសរសើរ — នោះសម្រេច ឲ្យបានមាន។', en: 'Whatever conduct is wholesome, blameless, praised by the wise — undertake it and live it.' },
      { km: 'អ្នកបដិបត្តិដូចនេះ រមែងបានអស្សាស៍ ៤ ប្រការ — ទោះមានបរលោក ឬ គ្មាន ក៏រស់ដោយសេចក្តីស្ងប់ដែរ។', en: 'The practitioner gains four solaces — whether or not there is a next world, one already lives in peace.' },
      { km: 'នេះជាសេចក្តីពន្យល់ ដែលស្របនឹងបញ្ញារបស់ ព្រះអរិយៈ — ព្រះពុទ្ធទ្រង់ត្រាស់ឲ្យពិនិត្យ ដោយវែកញែកដោយខ្លួនឯង។', en: 'This is an explanation in line with the wisdom of the noble ones — the Buddha urges you to investigate it for yourself.' },
    ],
    raw: 'មាយំ សុត្តេន … មា បរំបរស្ស … មា សមណោ នោ គរុ … យទា តុម្ហេ អត្តនាវ ជានេថ អប្បេតេ ធម្មា អកុសលា សាវជ្ជា វិញ្ញុគរហិតា តទា ត្វេ បជហេថ ។',
    kmVerse: '«ពេលដឹងដោយខ្លួនឯងថា ធម៌ទាំងនេះអកុសល មានទោស បណ្ឌិតតិះដៀល ទើបអ្នកលះបង់»', enVerse: '"When you know for yourselves that these things are unwholesome, blameworthy, condemned by the wise — then abandon them."',
    applyK: 'ពេលឮដំណឹង ឬ ការបង្រៀនអ្វី — កុំសន្និដ្ឋានភ្លាម តែពិនិត្យលទ្ធផលពិត ដោយខ្លួនឯង។', applyE: 'On hearing any news or teaching, do not jump to conclusions — test the real outcome for yourself.',
    tags: ['Free Inquiry', 'Verify the Teachings'],
  },
  {
    ref: 'SN 35.28', paali: 'ĀDITTA·PARIYĀYA',
    km: 'អាទិត្តបរិយាយសូត្រ', en: 'The Fire Sermon',
    bgK: 'បន្ទាប់ពីព្រះពុទ្ធបានប្រោស ឧរុវេលកស្សប និងគណៈអ្នកបូជាភ្លើង ១០០០ អង្គ រួច ព្រះអង្គយាងទៅកាន់កយាសីសៈ ហើយត្រាស់ព្រះធម្មទេសនានេះ ដល់ភិក្ខុទាំងអស់នោះ។',
    bgE: 'After converting Uruvela Kassapa and his thousand fire-worshipping ascetics, the Buddha went to Gayāsīsa and taught this sermon to the whole group.',
    list: [
      { km: '«ភិក្ខុទាំងឡាយ អ្វីៗទាំងអស់ កំពុងឆេះ» — ភ្នែក ត្រចៀក ច្រមុះ អណ្តាត កាយ ចិត្ត។', en: '"Monks, all is burning" — the eye, ear, nose, tongue, body and mind.' },
      { km: 'វត្ថុកាម ៦ (រូប សម្លេង ក្លិន រស សម្ផស្ស ធម្មារម្មណ៍) ក៏ឆេះ; វិញ្ញាណ ៦ សម្ផស្ស ៦ និងវេទនាដែលកើតពីសម្ផស្ស ក៏ឆេះទាំងអស់។', en: 'The six sense objects too burn; the six consciousnesses, the six kinds of contact, and the feeling born of contact all burn.' },
      { km: '«ឆេះដោយភ្លើងរាគៈ ភ្លើងទោសៈ ភ្លើងមោហៈ — ភ្លើងកំណើត ចាស់ ស្លាប់ សោក ខ្សឹកខ្សួល ទុក្ខ ស្តាយសង្រេង ចង្អៀតចង្អល់»។', en: 'Burning with the fires of lust, hate and delusion — with birth, aging, death, sorrow, lamentation, pain, grief and despair.' },
      { km: 'ឃើញដូចនេះ ភិក្ខុខ្ពើមឆ្អេះក្នុងភ្នែក វត្ថុកាម វិញ្ញាណ សម្ផស្ស វេទនា; កាលខ្ពើម ក៏ផុតតណ្ហា; ផុតហើយ ក៏រួចផុត។', en: 'Seeing this, the monk grows disenchanted with the eye, forms, consciousness, contact and feeling; disenchanted, he dispassions; dispassioned, he is released.' },
      { km: 'ទេសនាចប់ ភិក្ខុ ១០០០ អង្គទាំងអស់ បានសម្រេចអរហត្តផល។', en: 'When the sermon ended, all one thousand monks attained arahantship.' },
    ],
    raw: 'សព្វំ ភិក្ខវេ អាទិត្តំ ។ កិញ្ច ភិក្ខវេ សព្វំ អាទិត្តំ? ចក្ខុំ អាទិត្តំ រូបា អាទិត្តា ចក្ខុវិញ្ញាណំ អាទិត្តំ … អាទិត្តា រាគេន អាទិត្តា ទោសេន អាទិត្តា មោហេន ។',
    kmVerse: '«អ្វីៗទាំងអស់កំពុងឆេះ — ឆេះដោយភ្លើងរាគៈ ទោសៈ មោហៈ»', enVerse: '"All things are burning — burning with the fires of lust, hatred and delusion."',
    applyK: 'ពេលចិត្តរំជួល ដោយប៉ងប្រាថ្នា ឬ កំហឹង — ដឹងថាភ្លើងកំពុងឆេះ ហើយព្យាយាមពន្លត់។', applyE: 'When craving or anger flames up, recognize that the fire is burning — then work to put it out.',
    tags: ['Burning', '6 Sense Bases', 'Mass Arahantship'],
  },
  {
    ref: 'DN 22', paali: 'MAHĀ·SATIPAṬṬHĀNA',
    km: 'មហាសតិប្បដ្ឋានសូត្រ', en: 'The Great Discourse on Mindfulness',
    bgK: 'ព្រះសូត្រវែង ដែលពន្យល់វិធីបដិបត្តិវិបស្សនា ដោយលម្អិត — ព្រះពុទ្ធទ្រង់ប្រកាសថា នេះជាផ្លូវតែមួយ ដើម្បីសំអាតសត្វ ឈ្នះសេចក្តីសោក និងដល់នូវព្រះនិព្វាន។',
    bgE: 'A detailed manual of insight practice — the Buddha declared it the one direct path for cleansing beings, overcoming sorrow, and realizing Nibbāna.',
    list: [
      { km: 'អេកាយនោ មគ្គោ (ផ្លូវតែមួយ ផ្លូវត្រង់) — បន្សុទ្ធសត្វ កន្លងសោកសង្រេង វិនាសទុក្ខ-ទោមនស្ស បានញាណ សម្រេចនិព្វាន។', en: 'The one direct path — purifying beings, overcoming sorrow and lamentation, destroying pain and grief, attaining knowledge and Nibbāna.' },
      { km: 'កាយានុបស្សនា៖ ដង្ហើម ឥរិយាបថ ៤ សម្បជញ្ញៈ សមាសភាគកាយ ៣២ ធាតុ ៤ និងស្មូនសព ៩ យ៉ាង។', en: 'Contemplation of body: the breath, four postures, clear comprehension, thirty-two parts, four elements, nine charnel-ground contemplations.' },
      { km: 'វេទនានុបស្សនា៖ វេទនា សុខ ទុក្ខ កណ្តាល — ក៏កើត ក៏រលត់ ឃើញច្បាស់។', en: 'Contemplation of feeling: pleasant, painful, neutral feelings — clearly seen as they arise and vanish.' },
      { km: 'ចិត្តានុបស្សនា៖ សភាពចិត្ត — មានរាគៈ ឬ គ្មាន ស្ងប់ ឬ រាយមាយ — ដឹងច្បាស់។', en: 'Contemplation of mind: states with or without lust, steady or scattered — all clearly known.' },
      { km: 'ធម្មានុបស្សនា៖ នីវរណៈ ៥ ខន្ធ ៥ អាយតនៈ ១២ ពោជ្ឈង្គ ៧ អរិយសច្ច ៤ — ដឹងកើត-រលត់។', en: 'Contemplation of dhammas: five hindrances, five aggregates, twelve sense bases, seven awakening factors, Four Noble Truths — watched as they arise and pass.' },
    ],
    raw: 'អេកាយនោ អាយស្មន្តោ មគ្គោ សត្តានំ វិសុទ្ធិយា សោកបរិទេវានំ សមតិក្កមាយ ទុក្ខទោមនស្សានំ អត្ថង្គមាយ ញាយស្ស អធិគមាយ និព្វានស្ស សច្ឆិកិរិយាយ យទិទំ ចត្តារោ សតិប្បដ្ឋានា ។',
    kmVerse: '«ផ្លូវតែមួយ បន្សុទ្ធសត្វ ឈ្នះសោក វិនាសទុក្ខ សម្រេចនិព្វាន — គឺសតិប្បដ្ឋាន ៤»', enVerse: '"The one direct path for the purification of beings … for the realization of Nibbāna — the four foundations of mindfulness."',
    applyK: 'ចាប់ផ្តើមពីសតិដង្ហើម ៥-១០ នាទី រាល់ថ្ងៃ — ដូចដែលរៀបរាប់ក្នុងទំព័រសមាធិ។', applyE: 'Begin with mindfulness of the breath for five to ten minutes daily, as taught on the Meditation page.',
    tags: ['Mindfulness', 'Direct Path', 'Insight Manual'],
  },
  {
    ref: 'DN 31', paali: 'SIGĀLOVĀDA',
    km: 'សិង្គាលោវាទសូត្រ', en: 'Advice to Sigāla (The Lay Code)',
    bgK: 'ក្មួយឈ្មោះសិង្គាលៈ អាយុ ១៥ ឆ្នាំ តែងថ្វាយបង្គំគោរពទិសទាំង ៦ រាល់ព្រឹក តាមប្រពៃណី ដែលឪពុកបង្គាប់។ ព្រះពុទ្ធទ្រង់ប្រែន័យថា ទិសទាំង ៦ ជាឋានៈក្នុងសង្គម ដែលត្រូវគោរព និងបំពេញករណីយកិច្ចទៅវិញទៅមក។',
    bgE: 'Fifteen-year-old Sigāla ritually worshipped the six directions every dawn, as his dying father had bidden. The Buddha reinterpreted them as six social relationships with duties on both sides.',
    list: [
      { km: 'ទិសខាងកើត = មាតាបិតា៖ កូនចិញ្ចឹម បំពេញកិច្ច កាន់ត្រកូល ទទួលមរតក ប្រគេនបុណ្យដល់អ្នកស្លាប់ — ឪពុកម្តាយវិញ រារាំងអំពើអាក្រក់ ប្រដៅឲ្យល្អ បង្រៀនសិប្បកម្ម រៀបការកូន ប្រគល់ទ្រព្យ។', en: 'East = parents: children support them, do their duties, keep the lineage, receive the inheritance, give alms for the departed — parents in turn restrain evil, guide to good, teach a craft, arrange marriage, hand over wealth.' },
      { km: 'ទិសខាងត្បូង = អាចារ្យ៖ ក្រោកបង្ហាញការគោរព បម្រើ ឧស្សាហ៍រៀន — គ្រូវិញ បង្រៀនល្អ ណែនាំវិជ្ជា ការពារ លើកទឹកចិត្ត។', en: 'South = teachers: rise and honour them, serve them, learn eagerly — teachers in turn train well, impart skills, guard their pupils and encourage them.' },
      { km: 'ទិសខាងលិច = ប្រពន្ធ និងកូន៖ គោរព មិនមើលងាយ មិនក្បត់ ប្រគល់សិទ្ធិនៅគ្រប់គ្រង ឲ្យគ្រឿងអលង្កា — ប្រពន្ធវិញ ចាត់ចែងល្អ រាប់អាន មិនក្បត់ រក្សាទ្រព្យ ឧស្សាហ៍។', en: 'West = wife and children: honour them, do not despise or betray them, give authority and ornaments — the wife in turn manages well, is hospitable, faithful, guards wealth and is skilful.' },
      { km: 'ទិសខាងជើង = មិត្ត និងអ្នកជិតខាង៖ ទាន ពាក្យផ្អែមល្ហែម ចេះជួយ រាប់ស្មើ មិនបោះបង់ — មិត្តវិញ ជួយថែរក្សា ការពារ ជំរកពេលវិបត្តិ ជួយសង្រ្គោះ ឲ្យទាន។', en: 'North = friends and neighbours: give, speak kindly, be helpful, impartial and sincere — true friends in turn guard, defend, are a refuge in trouble, assist and give gifts.' },
      { km: 'ទិសក្រោម = អ្នកបម្រើ កម្មករ៖ ចែកការឲ្យសមតាមកម្លាំង ឲ្យបាយ ប្រាក់ឈ្នួល ថែទាំពេលឈឺ ចែកឲ្យហូបផ្អែម ឲ្យសម្រាក — អ្នកបម្រើវិញ ភ្ញាក់ពីព្រលឹម សម្រាកយប់ ទទួលយកកិច្ច ធ្វើការល្អ ទ្រទ្រង់ឈ្មោះ។', en: 'Below = servants and workers: assign work by strength, give food and wages, tend them in sickness, share treats, allow rest — they in turn rise early, retire late, take what is given, work well and keep a good name.' },
      { km: 'ទិសលើ = ព្រះសមណព្រាហ្មណ៍៖ ស្រឡាញ់ដោយកាយ វាចា ចិត្ត ទទួលស្វាគមន៍ បរិច្ចាគ — លោកវិញ រារាំងអាក្រក់ ឲ្យល្អ ផ្សាយមេត្តា បង្រៀនអ្វីដែលមិនទាន់ឮ បើកផ្លូវសួគ៌។', en: 'Above = ascetics and brahmins: honour them in body, speech and mind, welcome and give to them — they in turn restrain evil, guide to good, show loving-kindness, teach what is unheard, and point the way to heaven.' },
      { km: 'លើសពីនេះ ទ្រង់បង្ហាញមិត្តក្លែងក្លាយ ៤ ប្រភេទ (អ្នកចូលចិត្តតែយក អ្នកចេះតែនិយាយ អ្នកលួងលោម អ្នកដឹកនាំតាមផ្លូវវិនាស) និងមិត្តពិតដោយចិត្តសប្បុរស ៤ ប្រភេទ។', en: 'Beyond this, he reveals the four false friends — the taker, the talker, the flatterer, the companion of ruin — and the four true friends who are warm at heart.' },
    ],
    raw: 'បុរត្ថិមា ទិសា មាតាបិតរោ ទក្ខិណា ទិសា អាចរិយា បច្ឆិមា ទិសា បុត្តទារា ឧត្តរា ទិសា មិត្តាមច្ចា ហេដ្ឋិមា ទិសា ទាសកម្មករា ឧបរិមា ទិសា សមណព្រាហ្មណា ។',
    kmVerse: '«ទិសទាំង ៦ ដែលគួរសេពគប់៖ មាតាបិតា អាចារ្យ ប្រពន្ធ-កូន មិត្ត អ្នកបម្រើ-កម្មករ និងសមណព្រាហ្មណ៍»', enVerse: '"The six directions to be honoured: parents, teachers, wife and children, friends, servants and workers, and ascetics and brahmins."',
    applyK: 'ក្នុងគ្រួសារ និងកន្លែងធ្វើការ — សួរខ្លួនឯងថា «តើខ្ញុំកំពុងបំពេញករណីយកិច្ច ចំពោះអ្នកជុំវិញខ្លួនដែរឬទេ?»', applyE: 'In your family and workplace, ask yourself: am I fulfilling my duties toward everyone around me?',
    tags: ['Lay Ethics', '6 Directions', 'Family Duties'],
  },
  {
    ref: 'Sn 1.6', paali: 'PARĀBHAVA',
    km: 'បរាភវសូត្រ', en: 'The Discourse on the Causes of Ruin',
    bgK: 'ទេវតាអង្គមួយ បានសួរព្រះពុទ្ធថា «អ្នកប្រាជ្ញ មិនដែលវិនាស — អ្នកណាវិនាស ដោយហេតុអ្វី?» ព្រះពុទ្ធទ្រង់ឆ្លើយ អំពីហេតុដែលនាំឲ្យមនុស្សវិនាស (បរាភវ)។',
    bgE: 'A deva asked the Buddha: "The wise are never ruined — what causes a person to fall into ruin?" The Buddha answered with the causes of decline.',
    list: [
      { km: 'ស្រឡាញ់តែអ្វីដែលមិនមែនជាធម៌ ប្រាសចាកការគោរពធម៌របស់ព្រះអរិយៈ។', en: 'Loving what is against the Dhamma and caring nothing for the Dhamma of the noble ones.' },
      { km: 'ចូលចិត្តសេពគប់មនុស្សអាក្រក់ មិនស្រឡាញ់មនុស្សល្អ ជឿតាមសេចក្តីបង្រៀនរបស់មនុស្សអាក្រក់។', en: 'The wicked are dear to him, the virtuous are not loved, and he believes the teachings of the bad.' },
      { km: 'ចូលចិត្តដេក ចូលចិត្តសេពគប់ អសកម្ម ខ្ជិលច្រអូស ចេះខឹងងាយ។', en: 'Fond of sleep and company, idle, lazy and quick to anger.' },
      { km: 'មិនបំរើឪពុកម្តាយ ដែលចាស់ជរា កន្លងវ័យក្មេងទៅហើយ។', en: 'Refusing to support father and mother when they are old and past their prime.' },
      { km: 'បោកបញ្ឆោតព្រាហ្មណ៍ សមណៈ ឬអ្នកបួស ដោយពាក្យកុហក។', en: 'Deceiving brahmins, ascetics or other renunciates with lies.' },
      { km: 'មានទ្រព្យ មានមាស មានអាហារច្រើន តែរីករាយសេពគប់តែម្នាក់ឯង។', en: 'Having much wealth, gold and food, but enjoying his luxuries all alone.' },
      { km: 'ប្រកាន់ត្រកូល ទ្រព្យ និងពូជពង្ស មើលងាយញាតិរបស់ខ្លួន។', en: 'Proud of birth, wealth and clan, despising his own relatives.' },
      { km: 'ជាប់កាម ផឹកស្រា ល្បែងស៊ីសង ហើយខ្ជះខ្ជាយចំណូលដែលរកបាន។', en: 'Addicted to women, drink and gambling, squandering all that is earned.' },
      { km: 'មិនស្កប់ស្កល់នឹងប្រពន្ធរបស់ខ្លួន តែតាមរកស្រីសំផឹង និងប្រពន្ធអ្នកដទៃ។', en: 'Not content with his own spouse, but chasing prostitutes and the spouses of others.' },
      { km: 'កន្លងវ័យក្មេងទៅហើយ ទៅរៀបការជាមួយក្មេងជាងខ្លួន ដេកមិនលក់ដោយច្រណែន។', en: 'Past his youth, marrying a far younger wife and unable to sleep from jealousy.' },
      { km: 'បញ្ជាន់ឲ្យស្ត្រីឬបុរសឈ្មក់ អសារឥតការ កាន់តំណែងវិនិច្ឆ័យ។', en: 'Placing in authority a woman or man who is a drunkard and a wastrel.' },
      { km: 'មានទ្រព្យតិច តែសេចក្តីប្រាថ្នាធំ ស្រេកឃ្លានអំណាចភាពជាធំ។', en: 'Having little wealth but great ambition, greedily craving power and rulership.' },
      { km: 'បិទបញ្ចប់៖ ហេតុវិនាសទាំង ១២ នេះ គួរវៀរចាកទាំងអស់ — អ្នកដែលវៀរបាន មិនចាញ់ទិសណាឡើយ។', en: 'In closing: these twelve causes of ruin should all be avoided — one who avoids them is undefeated in every direction.' },
    ],
    raw: '',
    kmVerse: '«បុគ្គលណា ប្រកបនូវហេតុវិនាសទាំងនេះ — បុគ្គលនោះ ឈ្មោះថា អ្នកវិនាស»', enVerse: '"One who pursues these causes is called a person in ruin — abandon them and stand apart."',
    applyK: 'រាល់ល្ងាច សួរខ្លួនឯងថា «ថ្ងៃនេះ ខ្ញុំកំពុងបោះជំហាន លើផ្លូវណា?» — ឃើញវិនាសហើយ កែមកធម៌វិញ។', applyE: 'Each evening ask yourself which of these you might be sliding into — then steer back to the Dhamma.',
    tags: ['Causes of Ruin', 'Lay Advice', 'Devata Question'],
  },
]
</script>