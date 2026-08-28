<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សំណួរ–ចម្លើយ ១៣ — សួរតាមដែលអ្នកជួប', 'Q&A 13 — QUESTIONS PEOPLE REALLY ASK') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('សំណួរ និង ចម្លើយ', 'Questions and Warm Answers') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('មនុស្ស ដែលចាប់ផ្តើមរៀនធម៌ តែងមានសំណួរ ច្រើន ក្នុងចិត្ត។ សំណួរខ្លះ សាមញ្ញ ខ្លះ ជ្រៅ ប៉ុន្តែ ព្រះពុទ្ធ បានឆ្លើយ ទុកហើយ គ្រប់សំណួរ។ ទំព័រនេះ ប្រមូលសំណួរដែលគេសួរញឹក មករៀបចម្លើយ ខ្លីៗ ងាយយល់ ភ្ជាប់ជាមួយគាថា ឬ សូត្រ សម្រាប់អានបន្ថែម។', 'People beginning the Dhamma carry many questions in their hearts. Some are simple, some deep — but the Buddha answered them all. This page gathers the questions asked most often, with short clear answers that point back to a verse or sutta for further reading.') }}
    </p>

    <div class="mt-8 space-y-4">
      <article v-for="(qa, i) in qas" :key="qa.en" class="card-paper p-6 md:p-8">
        <div class="flex items-start justify-between gap-3 flex-wrap">
          <h3 class="font-display text-lg md:text-xl leading-snug" :style="{ color: 'var(--ink)' }">
            <span class="sutra-num mr-2 align-middle" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
            {{ t(qa.qK, qa.qE) }}
          </h3>
        </div>
        <p class="mt-4 leading-loose text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t(qa.aK, qa.aE) }}</p>
        <p class="mt-4 pt-3 text-xs" :style="{ color: 'var(--ink-muted)', borderTop: '1px dashed var(--border)' }">
          {{ t('អានបន្ថែម', 'Read further') }} &#8594; <a class="paali" :style="{ color: 'var(--accent)' }" :href="qa.href">{{ qa.tie }}</a>
        </p>
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

const BASE = 'https://buddha-dhamma.vercel.app'

const qas = [
  {
    qK: 'ព្រះពុទ្ធ ជាព្រះ ដែរឬទេ?', qE: 'Is the Buddha a god?',
    aK: 'មិនមែនទេ។ ព្រះពុទ្ធ ជាមនុស្ស — កើតក្នុងផ្ទៃ ចេញបួស ត្រាស់ដឹង ដោយការព្យាយាម ក្នុងប្រវត្តិពិត ។ ព្រះអង្គ មិនដែលឲ្យអ្នកណា បួងសួង សុំអ្វី ពីព្រះអង្គទេ — ព្រះអង្គ ប្រគល់ផ្លូវបដិបត្តិ ឲ្យអ្នករាល់គ្នា ដើរដោយខ្លួនឯង ។',
    aE: 'No. The Buddha was a human being — born, renounced the world, and awakened through his own effort in real history. He never told anyone to worship him; instead he gave a path to walk oneself.',
    tie: 'ជីវប្រវត្តិព្រះពុទ្ធ · /life', href: BASE + '/life',
  },
  {
    qK: 'បើគ្មានខ្លួន តើអ្នកណា ដែលដើរលើផ្លូវអរិយមគ្គ?', qE: 'If there is no self, then who walks the path?',
    aK: 'ព្រះពុទ្ធ មិនបានសម្តែង ថាគ្មានខ្លួន ជាដាច់ខាត — ព្រះអង្គ សម្តែងថា គ្មានខ្លួន ដែលគ្រប់គ្រងបាន ឥតប្រែប្រួល ដូចមនុស្ស ច្រើន សន្មត នោះទេ ។ បុគ្គលបដិបត្តិ មានពិត បញ្ញា កើតឡើង មានពិត — គ្រាន់តែអ្វីៗ ទាំងនោះ កើតហើយរលត់ រាល់ខណៈ ឥតមានអ្នក ណា មួយ គ្រប់គ្រង ឋិតនៅ ឡើយ ។',
    aE: 'The Buddha did not teach, absolutely, that there is no self — he taught that there is no fixed, controllable, unchanging self as people imagine. A practising person truly exists; wisdom truly arises — they simply arise and pass each moment with no permanent master inside.',
    tie: 'អនត្តា · /glossary', href: BASE + '/glossary',
  },
  {
    qK: 'ហេតុអ្វី មនុស្សអាក្រក់ ច្រើនតែ បានសម្បត្តិ?', qE: 'Why do bad people so often prosper?',
    aK: 'ផលកម្ម មិនចាំបាច់ ឲ្យផល ក្នុងឆាកជីវិត នេះភ្លាមនោះទេ — ដូចគ្រាប់ស្រូវ ដែលគេសាប ក្នុងដី ត្រូវការ កាលវេលា ទើបលូតលាស់ ។ កម្ម អាច ឲ្យផល ក្នុងជាតិនេះ ជាតិមុខ ឬ ក្នុងកាល សមគួរ ។ មនុស្ស ដែល ឃើញតែ សម្បត្តិសព្វថ្ងៃ អាច មិន ដឹង ទុក្ខ ដែល រង់ចាំ ក្នុង កាល មុខ ក៏ ថា បាន ។',
    aE: 'Kamma, like a seed, needs its own season; the result does not always show in this lifetime. A deed can ripen here, in another life, or whenever conditions are ready. Looking only at todays wealth may hide the suffering that ripens later.',
    tie: 'កម្ម និងផល · /kamma', href: BASE + '/kamma',
  },
  {
    qK: 'តើកម្ម ជាវាសនា ដែល មិនអាច ប្រែបាន?', qE: 'Is kamma a fate that cannot change?',
    aK: 'មិនមែន វាសនា ទេ ។ កម្ម ជាច្បាប់ ហេតុ–ផល មាន ការកែប្រែ បាន — អំពើអាក្រក់ ដែល បានធ្វើ អាច រំងាប់ បាន ដោយ ការសង្កេត ល្អ សីល ហើយ បដិបត្តិ ពិសេស អ្នក ដូចអង្គុលីមាលៈ ធ្លាប់ សម្លាប់ មនុស្ស ច្រើន ក៏ បាន កែ ខ្លួន ដល់ អរហត្ត បាន ដែរ ។',
    aE: 'Not fate. Kamma is the law of cause and effect and it can change: evil done can be calmed by goodness, virtue and urgent practice. Even Angulimāla, who had killed so many, turned his life around to arahantship.',
    tie: 'សីល និងបារមី · /ethics', href: BASE + '/ethics',
  },
  {
    qK: 'ខ្ញុំ ចាប់ផ្តើម សមាធិ ដូចម្តេច?', qE: 'How do I start meditation?',
    aK: 'តាំង ពី របៀប សាមញ្ញ ៖ ស្ងាត់ បន្ថយ កាយ ឲ្យ ត្រង់ ដកដង្ហើម យឺតៗ តាមធម្មតា — រាប់ ទី ១ ដល់ ១០ នៅ ចុង ផុត សំ ដង្ហើម ។ ពេល ចិត្ត រអាក់រអួល ទៅ ទាញ មក រក ដង្ហើម វិញ — កុំ ខឹង នឹង ចិត្ត ខ្លួនឯង ។ ធ្វើ ១០ នាទី រាល់ ថ្ងៃ ល្អ ជាង មួយ ម៉ោង ម្តង កម្រ ៗ ។',
    aE: 'Begin very simply: sit quietly, keep the body straight and the breath natural — count from one to ten at the end of each out-breath. When the mind wanders, gently return it to the breath; do not scold yourself. Ten minutes daily beats one long hour now and then.',
    tie: 'សមាធិ · /meditation', href: BASE + '/meditation',
  },
  {
    qK: 'សត្វចិញ្ចឹម ដែលស្លាប់ទៅ កើតឯណា?', qE: 'Where does a beloved pet go after it dies?',
    aK: 'យើង មិនអាច បញ្ជាក់ កន្លែង កំណើត ពិតប្រាកដ បាន ទេ ។ តែ តាម គោលធម៌ — សត្វ គ្រប់ ប្រភេទ ដឹង វិញ្ញាណ ជាតិ មាន តែ កម្ម គឺ អំពើ ល្អ-អាក្រក់ របស់ វា កំណត់ កំណើត បន្ទាប់ ។ អ្វី ដែល យើង ធ្វើ បាន គឺ នៅ ក្នុង ពេល វាងាយ មានជីវិត — ផ្សាយ មេត្តា ឲ្យ វា រាល់ ថ្ងៃ ។',
    aE: 'We cannot say the exact destiny with certainty. But the teaching holds that mental rebirth follows ones own deeds, for every kind of being. What we can do is fill its life with care — and radiate mettā its way every day.',
    tie: 'សព្វេ សត្តា · /gathas', href: BASE + '/gathas',
  },
  {
    qK: 'បើ គ្មាន ខ្លួន តើ អ្វី ដែល កើត ជាថ្មី?', qE: 'If there is no self, what is it that is reborn?',
    aK: 'មិន មែន មាន អ្នក ដូច គ្នា ទេ — តែ មាន ដំណើរ ការ ជាបន្តៗ ទៅ វិញ ។ ដូច ភ្លើង ដែល បន្ត ពី ចង្កៀង មួយ ទៅ ចង្កៀង មួយ ទៀត — ឥត មាន អណ្តាត ភ្លើង ណា ដូច គ្នា តែ ពន្លឺ នៅ បន្ត បាន ។ ចិត្ត ដែល កើត ថ្មី កើត ពី ហេតុ ចាស់ បែប ជា ខ្លួន កន្លង ទៅ — តែ ឥត មាន ខ្លួន ថេរ ណា មួយ ឆ្លង ទៅ ។',
    aE: 'It is not the same person continuing, yet a continuation truly happens. Like a flame passing from one lamp to another — no single flame is the same, but the light continues. A fresh stream of mind arises from causes, holding no gap with what went before.',
    tie: 'អនត្តា · /glossary', href: BASE + '/glossary',
  },
  {
    qK: 'ហេតុអ្វី អ្នក តាម ផ្ទះ គប្បី វៀរ ស្រា និង គ្រឿង ញៀន?', qE: 'Why should lay people avoid alcohol and drugs?',
    aK: 'ព្រោះ វា នាំ ឲ្យ ប្រមាទ — ប្រមាទ គឺ ទ្វារ នៃ សេចក្តី វិនាស ។ អ្នក ដែល ស្រវឹង អាច ធ្វើ អាក្រក់ គ្រប់ បែប ដដែល ធ្លាប់ ខ្លាច — ព្រោះ សតិ ស្លាប់ ទៅ ។ សីល ទី ៥ មិនមែន បង្ខំ ទេ — គឺ ការពារ ខ្លួន ឯង ឲ្យ សតិ នៅ ដដែល ។',
    aE: 'Because intoxication destroys heedfulness — and heedlessness is the doorway to ruin. A drunk person can do things they would fear when sober, because mindfulness has gone. The fifth precept is not force; it is a shield that keeps your mindfulness alive.',
    tie: 'ស្វាក្ខាតោ · /chanting', href: BASE + '/chanting',
  },
  {
    qK: 'ធ្វើ ទាន បាន ផល ពិត ឬ មេត្តា?', qE: 'Does giving truly bear fruit, or is it just kindness?',
    aK: 'ទាំង ពីរ យ៉ាង ។ កាល ព្រះ ពុទ្ធ បាន សម្តែង ក្នុង សូត្រ ច្រើន ថា ទាន ដោយ ចិត្ត បរិសុទ្ធ ឲ្យ ផល សុខ ក្នុង ខ្លួន អ្នក ឲ្យ ទាំង ខាង ក្រៅ នេះ និង ក្នុង កាល មុខ ដូច គ្រាប់ ដែល ទុក យក ផ្លែ ។ ហើយ ក្នុង ជីវិត ប្រចាំ ថ្ងៃ ការ ឲ្យ ក៏ ត្រជាក់ ចិត្ត អ្នក ឲ្យ មិន អស់ លោភៈ ទៀត ។',
    aE: 'Both. Many suttas teach that a gift given with pure heart bears its fruit for the giver in this life and beyond, like a seed saved for its harvest. And in everyday life, giving cools the heart and loosens greed right here and now.',
    tie: 'ទាន · /ethics', href: BASE + '/ethics',
  },
  {
    qK: 'ព្រះពុទ្ធ ឲ្យ គោរព បូជា ព្រះពុទ្ធរូប ឬទេ?', qE: 'Did the Buddha ask people to worship his statue?',
    aK: 'ព្រះអង្គ មិន បាន បង្គាប់ ឲ្យ គោរព រូប បដិមា ទេ — ព្រះអង្គ សម្តែង ឲ្យ បូជា ដោយ ការ បដិបត្តិ ធម៌ ។ រូបសំណាក ជា គ្រឿង រំឮក ដល់ គុណ ព្រះអង្គ — ដូច ទង់ ជាតិ រំឮក ដល់ ជាតិ ។ ការ បូជា ដ៏ ល្អ បំផុត គឺ មិន ធ្វើ អាក្រក់ ទាំងអស់ ។',
    aE: 'He did not command worship of images — he taught honouring through practising the Dhamma. A statue is a sign to remember his qualities, like a flag reminds us of our country. The highest offering is simply to do no evil.',
    tie: 'គាថាព្រះធម៌ · /gathas', href: BASE + '/gathas',
  },
]
</script>