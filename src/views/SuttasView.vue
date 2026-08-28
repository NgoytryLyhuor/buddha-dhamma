<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ០៧ — ព្រះសូត្រ', 'GATHA 07 — SUTTAS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('ព្រះធម្មទេសនាដ៏ល្បីល្បាញ', 'Famous Discourses Explained') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ក្នុងព្រះសុត្តន្តបិដក មានសូត្ររាប់ពាន់។ នៅទីនេះ ជ្រើសរើសសូត្រសំខាន់ៗ មកពន្យល់ដោយសង្ខេប ដើម្បីឲ្យអ្នកអានចាប់ផ្តើមយល់។', 'The Sutta Pitaka holds thousands of discourses. Here we select key suttas and explain them briefly, so you can begin to understand.') }}
    </p>

    <div class="mt-8 space-y-6">
      <article v-for="(s, i) in suttas" :key="s.en" class="card-paper p-6 md:p-8">
        <div class="flex items-start justify-between gap-3 flex-wrap">
          <span class="chapter-label">{{ s.ref }}</span>
          <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
        </div>
        <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t(s.km, s.en) }}</h3>
        <p class="text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">{{ s.paali }}</p>

        <p class="text-sm mt-4 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(s.kmBody, s.enBody) }}</p>

        <div class="verse-box p-4 mt-4">
          <p class="text-sm italic" :style="{ color: 'var(--ink-muted)' }">{{ s.raw }}</p>
          <p class="text-sm mt-1 font-bold" :style="{ color: 'var(--ink-soft)' }">{{ t(s.kmVerse, s.enVerse) }}</p>
        </div>

        <div class="flex flex-wrap gap-2 mt-4">
          <span v-for="tag in s.tags" :key="tag" class="paali">{{ tag }}</span>
        </div>
      </article>
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

const suttas = [
  {
    ref: 'SN 56.11', paali: 'DHAMMA·CAKKAPPAVATTANA',
    km: 'ធម្មចក្កប្បវត្តនសូត្រ', en: 'Setting the Wheel of Dhamma in Motion',
    kmBody: 'ព្រះធម្មទេសនាដំបូង ប្រកាសអរិយសច្ចៈ ៤ និងផ្លូវកណ្តាល។ ព្រះពុទ្ធទ្រង់ត្រាស់ទេសនាដល់ពួកបញ្ចវគ្គិយ (កុណ្ឌញ្ញ, វប្ប, ភទ្ទិយ, មហានាម, អស្សជិ) នៅឥសិបតនមិគទាយវ័ន។', enBody: 'The first sermon proclaiming the Four Noble Truths and the Middle Way, given to the five ascetics at Isipatana.',
    raw: 'អប្បវាទតោ ច ខោ អាយស្មន្តោ ឯកេន អត្ថេន សក្តគ្គី, អត្តកិលមថានុយោគោ អត្តកិលមថវិនយោ ។',
    kmVerse: '«បណ្ឌិតមិនគួរជាប់ក្នុងរឿងត្រេកត្រអាល ក៏មិនគួរធ្វើទុក្ខដាក់ខ្លួន — គួរដើរតាមផ្លូវកណ្តាល»', enVerse: '"One should not indulge in sensual pleasures, nor torment the self — walk the Middle Way."',
    tags: ['First Sermon', '4 Noble Truths', '8-fold Path'],
  },
  {
    ref: 'SN 22.59', paali: 'ANATTALAKKHAṆA',
    km: 'អនត្តលក្ខណសូត្រ', en: 'The Characteristic of Not-Self',
    kmBody: 'ត្រាស់ទេសនាដល់ពួកបញ្ចវគ្គិយ ក្រោយពីធម្មចក្ក។ ពន្យល់ថា ខន្ធ ៥ ទាំងអស់ មានរូប វេទនា សញ្ញា សង្ខារ វិញ្ញាណ សុទ្ធតែជាអនត្តា។ ពេលឮចប់ កុណ្ឌញ្ញក៏បានសំរេចសោតាបត្តិផល។', enBody: 'Preached to the five ascetics: all five aggregates are not-self. At the end, Kondañña attained the first stage of awakening.',
    raw: 'រូបំ អនត្តា … វេទនា អនត្តា … វិញ្ញាណំ អនត្តា ។',
    kmVerse: '«រូប វេទនា សញ្ញា សង្ខារ វិញ្ញាណ សុទ្ធតែមិនមែនជាខ្លួន»', enVerse: '"Form, feeling, perception, formations, consciousness — all are not-self."',
    tags: ['Not-Self', '5 Aggregates'],
  },
  {
    ref: 'Khp 9 · Sn 1.8', paali: 'METTĀ',
    km: 'មេត្តាសូត្រ', en: 'The Discourse on Loving-Kindness',
    kmBody: 'ពន្យល់ពីការបាចសាយសេចក្តីស្រឡាញ់រាប់អាន ដល់សត្វទាំងអស់ ដោយមិនរើសមុខ — ដូចម្តាយការពារកូនតែមួយ។', enBody: 'Radiating boundless goodwill to all beings, as a mother protects her only child.',
    raw: 'មាតា យថា និយំ បុត្តំ អាយុសា ឯកបុត្តមនុរក្ខេ ឯវម្បិ សព្វភូតេសុ មានសម្ភាវេយ្យ អបរិមាណំ ។',
    kmVerse: '«ដូចម្តាយមួយជីវិតរក្សាបុត្រ យ៉ាងណា ចូរអ្នកបាចសាយចិត្តសប្បុរសដល់សត្វទាំងអស់»', enVerse: '"Even as a mother guards her only child with her life, so let one cultivate a boundless heart toward all beings."',
    tags: ['Goodwill', '11 Benefits'],
  },
  {
    ref: 'Khp 5 · Sn 2.4', paali: 'MAṄGALA',
    km: 'មង្គលសូត្រ', en: 'The Discourse on Blessings',
    kmBody: 'ឆ្លើយសំនួរទេវតាថា «អ្វីជាសេចក្តីសួស្តីដ៏ខ្ពស់?» មានមង្គល ៣៨ ប្រការ ចាប់ពីមិនបបោសអ្នកល្ងង់ ដល់ចិត្តមិនរវើយ។', enBody: 'Answered to a deva: "What is the highest blessing?" — thirty-eight blessings from avoiding fools to an unshaken mind.',
    raw: 'អសេវនា ច ពាលានំ បណ្ឌិតានញ្ច សេវនា បូជា ច បូជនីយានំ ឯតំ មង្គលមុត្តមំ ។',
    kmVerse: '«ការមិនផ្គរជាមួយអ្នកល្ងង់ ការផ្គរជាមួយអ្នកប្រាជ្ញ ការបូជាចំពោះអ្នកគួរបូជា — នេះជាមង្គលដ៏ខ្ពស់»', enVerse: '"Not consorting with fools, consorting with the wise, honouring those worthy of honour — this is the highest blessing."',
    tags: ['38 Blessings', 'Devata Question'],
  },
  {
    ref: 'Khp 6 · Sn 2.1', paali: 'RATANA',
    km: 'រតនសូត្រ', en: 'The Discourse on Gems',
    kmBody: 'សរសើរព្រះរតនត្រ័យ (ពុទ្ធ ធម្ម សង្ឃ) ជាកំណប់ដ៏វិសេសបំផុត ក្នុងគ្រាដែលទីក្រុងវេសាលីស្តោកគ្រោក។', enBody: 'Praises the Three Jewels — Buddha, Dhamma, Sangha — as the supreme treasure, recited during a famine and plague in Vesāli.',
    raw: 'យំ កិញ្ចិ វិត្តមិធ វា ហុរម្ហិវា សគ្គេសុ វា យំ រតនំ បណីតំ ន នោ សមំ អត្ថិ តថាគតេន ។',
    kmVerse: '«ទ្រព្យណា ទេវៈណា ក្នុងលោកនេះ ឬលោកខាងមុខ គ្មានទេវៈណា ស្មើនឹងព្រះតថាគតឡើយ»', enVerse: '"Whatever treasure there is here or beyond, none equals the Tathāgata."',
    tags: ['Three Jewels', 'Protection Sutta'],
  },
  {
    ref: 'AN 3.65', paali: 'KĀLĀMA',
    km: 'កាលាមសូត្រ', en: 'The Discourse to the Kālāmas',
    kmBody: 'ព្រះពុទ្ធត្រាស់ទេសនាដល់ពួកកាលាម កុំទទួលជឿសំដែង កុំជឿតែប្រវត្តិ តែគួរដឹងដោយខ្លួនឯងថា អំពើណានាំទុក្ខ លះចេញ; អំពើណានាំសុខ បដិបត្តិ។', enBody: 'To the Kālāmas: do not accept on mere hearsay or tradition — know for yourself what leads to harm and abandon it, what leads to good and pursue it.',
    raw: 'មាយំ សុត្តេន … មា បរំបរស្ស … មា សមណោ នោ គរុ … យទា តុម្ហេ អត្តនាវ ជានេថ អប្បេតេ ធម្មា អកុសលា សាវជ្ជា វិញ្ញុគរហិតា តទា ត្វេ បជហេថ ។',
    kmVerse: '«ពេលដឹងដោយខ្លួនឯងថា ធម៌ទាំងនេះអកុសល មានទោស បណ្ឌិតតិះដៀល ទើបអ្នកលះបង់»', enVerse: '"When you know for yourselves that these things are unwholesome, blameworthy, condemned by the wise — then abandon them."',
    tags: ['Free Inquiry', 'Verify the Teachings'],
  },
]
</script>