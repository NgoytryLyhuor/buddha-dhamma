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
        <div class="mt-4 p-3 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
          <p class="text-[10px] font-bold tracking-widest uppercase" :style="{ color: 'var(--accent)' }">{{ t('អត្ថន័យ', 'THE MEANING') }}</p>
          <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(qa.mK, qa.mE) }}</p>
        </div>
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
    mK: 'ព្រះពុទ្ធ មិនមែនជាព្រះ ដែលសុំឲ្យបាន ទេ — ទ្រង់ជាគ្រូ ដែលបង្ហាញផ្លូវ ឲ្យយើង ដើរដោយខ្លួនឯង។',
    mE: 'The Buddha is not a god you ask things from — he is a teacher who shows a path you walk yourself.',
    tie: 'ជីវប្រវត្តិព្រះពុទ្ធ · /life', href: BASE + '/life',
  },
  {
    qK: 'បើគ្មានខ្លួន តើអ្នកណា ដែលដើរលើផ្លូវអរិយមគ្គ?', qE: 'If there is no self, then who walks the path?',
    aK: 'ព្រះពុទ្ធ មិនបានសម្តែង ថាគ្មានខ្លួន ជាដាច់ខាត — ព្រះអង្គ សម្តែងថា គ្មានខ្លួន ដែលគ្រប់គ្រងបាន ឥតប្រែប្រួល ដូចមនុស្ស ច្រើន សន្មត នោះទេ ។ បុគ្គលបដិបត្តិ មានពិត បញ្ញា កើតឡើង មានពិត — គ្រាន់តែអ្វីៗ ទាំងនោះ កើតហើយរលត់ រាល់ខណៈ ឥតមានអ្នក ណា មួយ គ្រប់គ្រង ឋិតនៅ ឡើយ ។',
    aE: 'The Buddha did not teach, absolutely, that there is no self — he taught that there is no fixed, controllable, unchanging self as people imagine. A practising person truly exists; wisdom truly arises — they simply arise and pass each moment with no permanent master inside.',
    mK: 'មិនមែន «គ្មានខ្ញុំ» ទេ — គឺ «គ្មានខ្លួន ដែលថេរ គ្រប់គ្រងបាន» ទើបពិត។',
    mE: 'It is not “there is no me” — the truth is “there is no permanent, controllable self.”',
    tie: 'អនត្តា · /glossary', href: BASE + '/glossary',
  },
  {
    qK: 'ហេតុអ្វី មនុស្សអាក្រក់ ច្រើនតែ បានសម្បត្តិ?', qE: 'Why do bad people so often prosper?',
    aK: 'ផលកម្ម មិនចាំបាច់ ឲ្យផល ក្នុងឆាកជីវិត នេះភ្លាមនោះទេ — ដូចគ្រាប់ស្រូវ ដែលគេសាប ក្នុងដី ត្រូវការ កាលវេលា ទើបលូតលាស់ ។ កម្ម អាច ឲ្យផល ក្នុងជាតិនេះ ជាតិមុខ ឬ ក្នុងកាល សមគួរ ។ មនុស្ស ដែល ឃើញតែ សម្បត្តិសព្វថ្ងៃ អាច មិន ដឹង ទុក្ខ ដែល រង់ចាំ ក្នុង កាល មុខ ក៏ ថា បាន ។',
    aE: 'Kamma, like a seed, needs its own season; the result does not always show in this lifetime. A deed can ripen here, in another life, or whenever conditions are ready. Looking only at todays wealth may hide the suffering that ripens later.',
    mK: 'អ្នកដែលធ្វើល្អ មិនតែងបានល្អមួយរំពេច — តែគ្រាប់ល្អ មិនដែលខាត វាត្រូវការពេលតែប៉ុណ្ណោះ។',
    mE: 'The good do not always prosper at once — but a good seed is never lost; it only needs its time.',
    tie: 'កម្ម និងផល · /kamma', href: BASE + '/kamma',
  },
  {
    qK: 'តើកម្ម ជាវាសនា ដែល មិនអាច ប្រែបាន?', qE: 'Is kamma a fate that cannot change?',
    aK: 'មិនមែន វាសនា ទេ ។ កម្ម ជាច្បាប់ ហេតុ–ផល មាន ការកែប្រែ បាន — អំពើអាក្រក់ ដែល បានធ្វើ អាច រំងាប់ បាន ដោយ ការសង្កេត ល្អ សីល ហើយ បដិបត្តិ ពិសេស អ្នក ដូចអង្គុលីមាលៈ ធ្លាប់ សម្លាប់ មនុស្ស ច្រើន ក៏ បាន កែ ខ្លួន ដល់ អរហត្ត បាន ដែរ ។',
    aE: 'Not fate. Kamma is the law of cause and effect and it can change: evil done can be calmed by goodness, virtue and urgent practice. Even Angulimāla, who had killed so many, turned his life around to arahantship.',
    mK: 'អនាគត មិនជាប់មុខឲ្យកន្លង — សព្វថ្ងៃនេះ យើងអាចជ្រើសរើស បាន។',
    mE: 'The future is not fixed by the past — this moment you still get to choose.',
    tie: 'សីល និងបារមី · /ethics', href: BASE + '/ethics',
  },
  {
    qK: 'ខ្ញុំ ចាប់ផ្តើម សមាធិ ដូចម្តេច?', qE: 'How do I start meditation?',
    aK: 'តាំង ពី របៀប សាមញ្ញ ៖ ស្ងាត់ បន្ថយ កាយ ឲ្យ ត្រង់ ដកដង្ហើម យឺតៗ តាមធម្មតា — រាប់ ទី ១ ដល់ ១០ នៅ ចុង ផុត សំ ដង្ហើម ។ ពេល ចិត្ត រអាក់រអួល ទៅ ទាញ មក រក ដង្ហើម វិញ — កុំ ខឹង នឹង ចិត្ត ខ្លួនឯង ។ ធ្វើ ១០ នាទី រាល់ ថ្ងៃ ល្អ ជាង មួយ ម៉ោង ម្តង កម្រ ៗ ។',
    aE: 'Begin very simply: sit quietly, keep the body straight and the breath natural — count from one to ten at the end of each out-breath. When the mind wanders, gently return it to the breath; do not scold yourself. Ten minutes daily beats one long hour now and then.',
    mK: 'សមាធិ មិនមែន បង្ខំចិត្ត ឲ្យស្ងៀម ទេ — គឺរៀនត្រឡប់មករកដង្ហើម វិញ ម្តងហើយម្តងទៀត។',
    mE: 'Meditation is not forcing the mind to be still — it is learning, again and again, to come back to the breath.',
    tie: 'សមាធិ · /meditation', href: BASE + '/meditation',
  },
  {
    qK: 'សត្វចិញ្ចឹម ដែលស្លាប់ទៅ កើតឯណា?', qE: 'Where does a beloved pet go after it dies?',
    aK: 'យើង មិនអាច បញ្ជាក់ កន្លែង កំណើត ពិតប្រាកដ បាន ទេ ។ តែ តាម គោលធម៌ — សត្វ គ្រប់ ប្រភេទ ដឹង វិញ្ញាណ ជាតិ មាន តែ កម្ម គឺ អំពើ ល្អ-អាក្រក់ របស់ វា កំណត់ កំណើត បន្ទាប់ ។ អ្វី ដែល យើង ធ្វើ បាន គឺ នៅ ក្នុង ពេល វាងាយ មានជីវិត — ផ្សាយ មេត្តា ឲ្យ វា រាល់ ថ្ងៃ ។',
    aE: 'We cannot say the exact destiny with certainty. But the teaching holds that mental rebirth follows ones own deeds, for every kind of being. What we can do is fill its life with care — and radiate mettā its way every day.',
    mK: 'រឿងសំខាន់ មិនមែន «ទៅណា» តែ «យើងបានឲ្យក្តីស្រឡាញ់វាប៉ុណ្ណា» ក្នុងពេលវានៅជាមួយយើង។',
    mE: 'What matters is not “where it went” but how much love we gave it while it was with us.',
    tie: 'សព្វេ សត្តា · /gathas', href: BASE + '/gathas',
  },
  {
    qK: 'បើ គ្មាន ខ្លួន តើ អ្វី ដែល កើត ជាថ្មី?', qE: 'If there is no self, what is it that is reborn?',
    aK: 'មិន មែន មាន អ្នក ដូច គ្នា ទេ — តែ មាន ដំណើរ ការ ជាបន្តៗ ទៅ វិញ ។ ដូច ភ្លើង ដែល បន្ត ពី ចង្កៀង មួយ ទៅ ចង្កៀង មួយ ទៀត — ឥត មាន អណ្តាត ភ្លើង ណា ដូច គ្នា តែ ពន្លឺ នៅ បន្ត បាន ។ ចិត្ត ដែល កើត ថ្មី កើត ពី ហេតុ ចាស់ បែប ជា ខ្លួន កន្លង ទៅ — តែ ឥត មាន ខ្លួន ថេរ ណា មួយ ឆ្លង ទៅ ។',
    aE: 'It is not the same person continuing, yet a continuation truly happens. Like a flame passing from one lamp to another — no single flame is the same, but the light continues. A fresh stream of mind arises from causes, holding no gap with what went before.',
    mK: 'ដូចភ្លើង ឆេះពីចង្កៀងមួយ ទៅមួយ — ឥតមានអណ្តាតភ្លើងណាតែមួយ តែពន្លឺនៅតែបន្ត។',
    mE: 'Like a flame passing from lamp to lamp — no single flame is the same, yet the light carries on.',
    tie: 'អនត្តា · /glossary', href: BASE + '/glossary',
  },
  {
    qK: 'ហេតុអ្វី អ្នក តាម ផ្ទះ គប្បី វៀរ ស្រា និង គ្រឿង ញៀន?', qE: 'Why should lay people avoid alcohol and drugs?',
    aK: 'ព្រោះ វា នាំ ឲ្យ ប្រមាទ — ប្រមាទ គឺ ទ្វារ នៃ សេចក្តី វិនាស ។ អ្នក ដែល ស្រវឹង អាច ធ្វើ អាក្រក់ គ្រប់ បែប ដដែល ធ្លាប់ ខ្លាច — ព្រោះ សតិ ស្លាប់ ទៅ ។ សីល ទី ៥ មិនមែន បង្ខំ ទេ — គឺ ការពារ ខ្លួន ឯង ឲ្យ សតិ នៅ ដដែល ។',
    aE: 'Because intoxication destroys heedfulness — and heedlessness is the doorway to ruin. A drunk person can do things they would fear when sober, because mindfulness has gone. The fifth precept is not force; it is a shield that keeps your mindfulness alive.',
    mK: 'ស្រា មិនមែន «បាប» ឥតហេតុទេ — វាចាប់ដៃសតិ ឲ្យស្លាប់ ហើយបើកទ្វារឲ្យបាប ផ្សេងៗ ចូលមក។',
    mE: 'Alcohol is not “sin” for its own sake — it kills mindfulness and opens the door to other wrongs.',
    tie: 'ស្វាក្ខាតោ · /chanting', href: BASE + '/chanting',
  },
  {
    qK: 'ធ្វើ ទាន បាន ផល ពិត ឬ មេត្តា?', qE: 'Does giving truly bear fruit, or is it just kindness?',
    aK: 'ទាំង ពីរ យ៉ាង ។ កាល ព្រះ ពុទ្ធ បាន សម្តែង ក្នុង សូត្រ ច្រើន ថា ទាន ដោយ ចិត្ត បរិសុទ្ធ ឲ្យ ផល សុខ ក្នុង ខ្លួន អ្នក ឲ្យ ទាំង ខាង ក្រៅ នេះ និង ក្នុង កាល មុខ ដូច គ្រាប់ ដែល ទុក យក ផ្លែ ។ ហើយ ក្នុង ជីវិត ប្រចាំ ថ្ងៃ ការ ឲ្យ ក៏ ត្រជាក់ ចិត្ត អ្នក ឲ្យ មិន អស់ លោភៈ ទៀត ។',
    aE: 'Both. Many suttas teach that a gift given with pure heart bears its fruit for the giver in this life and beyond, like a seed saved for its harvest. And in everyday life, giving cools the heart and loosens greed right here and now.',
    mK: 'ធ្វើទាន គឺសាបគ្រាប់ល្អ ក្នុងចិត្តខ្លួនឯង — ផល មិនដែលខាត សូម្បី ក្នុងថ្ងៃនេះ ក៏ចាប់ផ្តើមត្រជាក់ចិត្ត។',
    mE: 'Giving plants a good seed in your own heart — the fruit is never lost, and even today it starts cooling the mind.',
    tie: 'ទាន · /ethics', href: BASE + '/ethics',
  },
  {
    qK: 'ព្រះពុទ្ធ ឲ្យ គោរព បូជា ព្រះពុទ្ធរូប ឬទេ?', qE: 'Did the Buddha ask people to worship his statue?',
    aK: 'ព្រះអង្គ មិន បាន បង្គាប់ ឲ្យ គោរព រូប បដិមា ទេ — ព្រះអង្គ សម្តែង ឲ្យ បូជា ដោយ ការ បដិបត្តិ ធម៌ ។ រូបសំណាក ជា គ្រឿង រំឮក ដល់ គុណ ព្រះអង្គ — ដូច ទង់ ជាតិ រំឮក ដល់ ជាតិ ។ ការ បូជា ដ៏ ល្អ បំផុត គឺ មិន ធ្វើ អាក្រក់ ទាំងអស់ ។',
    aE: 'He did not command worship of images — he taught honouring through practising the Dhamma. A statue is a sign to remember his qualities, like a flag reminds us of our country. The highest offering is simply to do no evil.',
    mK: 'រូបព្រះ គ្រាន់តែជា គ្រឿងរំឮក — ការបូជាប្រសើរ បំផុត គឺ បដិបត្តិធម៌ មិនធ្វើអាក្រក់។',
    mE: 'A Buddha image is only a reminder — the highest offering is to practise the Dhamma and do no evil.',
    tie: 'គាថាព្រះធម៌ · /gathas', href: BASE + '/gathas',
  },
  {
    qK: 'ហេតុអ្វី ត្រូវទៅវត្ត ហើយថ្វាយស្បៀងដល់ព្រះសង្ឃ?', qE: 'Why go to the pagoda and offer food to the monks?',
    aK: 'ទៅវត្ត ស្តាប់ធម៌ ជាការបណ្តុះបញ្ញា — ហើយការថ្វាយស្បៀង ជាការគាំទ្រព្រះសង្ឃ ដែលបានបួសលះប្រយោជន៍ខ្លួន ដើម្បីសិក្សា និងការពារព្រះពុទ្ធសាសនា ។ ទាន គឺបញ្ចាំឲ្យអ្នកដទៃ អាចបដិបត្តិបាន — ទាំងផលដល់អ្នកឲ្យ និងជាការជួយលោក ។',
    aE: 'Going to the pagoda to hear the Dhamma plants wisdom. Offering food supports the monks, who have given up their own ease to study and guard the Dhamma. Giving enables others to practise — it helps the world and brings fruit to the giver.',
    mK: 'ទៅវត្ត គឺទៅដើម្បីរៀនធម៌ — ថ្វាយស្បៀង គឺជួយអ្នកបដិបត្តិ ឲ្យបន្តបដិបត្តិបាន។',
    mE: 'Go to the pagoda to learn the Dhamma; offer food to keep the practitioners practice alive.',
    tie: 'សីល និងបារមី · /ethics', href: BASE + '/ethics',
  },
  {
    qK: '៤ សប្តាហ៍ បន្ទាប់ពីអ្នកស្លាប់ តើអ្នកស្លាប់ អាចមកយកបុណ្យ បានដែរឬទេ?', qE: 'Can the dead come and receive the merit we dedicate to them?',
    aK: 'តាមព្រះធម៌ ការជូនបុណ្យ ជួយបាន ក្នុងករណីដែលញាតិដែលស្លាប់ ដើរកើតជាប្រេត (ពួកសត្វដែលរង់ចាំ) ។ ផល មិនមែនទៅដល់ គ្រប់ទីកន្លែង ស្វ័យប្រវត្តិ ទេ — ប៉ុន្តែ បុណ្យដែលយើងធ្វើ មានអំណាចជួយ ក្នុងចំណែកដែលសមគួរ ។ អ្វីដែលប្រាកដ គឺបុណ្យនោះ ប្រទានដល់យើងដែលនៅរស់ — ជួយរំលឹក និងប្រោសសង្គ្រោះចិត្តខ្លួនឯង ។',
    aE: 'The Dhamma says merit can reach the departed when they are born as petas, beings waiting for help. It does not automatically reach every realm — but merit made in faith does help where it is fitting. What is certain is that it blesses the living too: it reminds us and heals our own hearts.',
    mK: 'តាម ព្រះធម៌ បុណ្យដែលយើងធ្វើ អាចជួយដល់ញាតិ ដែលកើតជាប្រេត — ហើយតែងប្រទានឲ្យចិត្តយើងដែលនៅរស់ ។',
    mE: 'Merit dedicated in faith can reach a departed relative born as a peta — and always blesses the heart of the one who gives.',
    tie: 'កម្ម និងផល · /kamma', href: BASE + '/kamma',
  },
  {
    qK: 'អ្វីទៅ ជាព្រះវស្សា (ចូលវស្សា)?', qE: 'What is Buddhist Lent (the rainy-season retreat)?',
    aK: 'ព្រះវស្សា គឺរដូវប្រតិបត្តិ ៣ ខែ ពីថ្ងៃចូលវស្សា នៅខែអស្សុជ ដល់ថ្ងៃចេញវស្សា — ព្រះសង្ឃ គង់នៅក្នុងវត្ត មិនចេញដំណើរយប់ឡើយ សម្រាប់សិក្សា និងបដិបត្តិឲ្យម៉ឺងម៉ាត់ ។ តាមផ្ទះ ទម្លាប់ ច្រើន កាន់សីល ៨ នៅថ្ងៃសីល ក្នុងរដូវនេះ ។',
    aE: 'Vassa is a three-month rainy-season retreat, from entering-lent to leaving-lent. Monks remain in one place, avoiding night travel, to study and practise more strictly. Lay people often keep the eight precepts on sabbath days during this season.',
    mK: 'វស្សា ជាពេលផ្អាកដើរ ដើម្បីឧស្សាហ៍សិក្សា និងបដិបត្តិ — ជាសព្វថ្ងៃ ដែលយើងបណ្តុះសីល ។',
    mE: 'Vassa is a held pause for diligent study and practice — a season of growing in virtue.',
    tie: 'របៀបវិញ្ញាណ · /meditation', href: BASE + '/meditation',
  },
  {
    qK: 'ហេតុអ្វី ខ្ញុំ ខឹង លឿន ម្ល៉េះ? តើ ធ្វើ ដូចម្តេច ឲ្យ ឈប់ ខឹង?', qE: 'Why do I get angry so quickly? How do I stop?',
    aK: 'កំហឹង ច្រើន កើត ពី សេចក្តី ប្រកាន់ ខ្លួន និង ការ សន្មត ថា គេ ធ្វើ អាក្រក់ លើ ខ្លួន ។ ដើម្បី ឈប់ ខឹង — ដកដង្ហើម វែងៗ មួយ បី ដង មុន និយាយ បន្ត មេត្តា រំឮក ថា មនុស្ស ទាំងអស់ រង់ចាំ បាក់ បែក ដូច គ្នា ។ កំហឹង ដូច ឈើ ក្តៅ ដែល អ្នក កាន់ ឲ្យ គប់ អ្នក ដទៃ — អ្នក ខ្លួន ឯង ទេ ដែល រលាក មុន គេ ។',
    aE: 'Anger mostly grows from clinging to self and from assuming others slight us. To stop: take three long breaths before speaking, then send mettā, remembering that everyone suffers. Anger is like a hot coal you pick up to throw at someone — you burn your own hand first.',
    mK: 'កំហឹង តែង ដុត អ្នក ខឹង មុន អ្នក ដទៃ — សតិ និង មេត្តា ជា ទឹក រំងាប់ ភ្លើង នេះ ។',
    mE: 'Anger always burns the angry one first — mindfulness and mettā are the water that cools that fire.',
    tie: 'មេត្តា · /gathas', href: BASE + '/gathas',
  },
  {
    qK: 'ស្ត្រី អាច ត្រាស់ដឹង បាន ដែរ ឬទេ?', qE: 'Can women attain enlightenment?',
    aK: 'អាច បាន មែន ។ ព្រះពុទ្ធ បាន សម្តែង ឲ្យ ស្ត្រី អាច ដល់ អរហត្ត បាន — ព្រះនាង មហាបជាបតី គោតមី និង ភិក្ខុនី ជាច្រើន រួម ទាំង កិសាគោតមី បាន ត្រាស់ ដឹង ដោយ ខ្លួន ឯង ។ ការ ត្រាស់ ដឹង អាស្រ័យ លើ ចិត្ត និង ការ បដិបត្តិ — មិន អាស្រ័យ លើ ភេទ ឡើយ ។',
    aE: 'Yes, fully. The Buddha taught that women can attain arahantship — Queen Mahāpajāpatī Gotamī and many bhikkhunīs, including Kisāgotamī, awakened on their own. Awakening depends on the heart and practice, not on gender.',
    mK: 'ការ ត្រាស់ ដឹង វាស់ ដោយ ចិត្ត ដែល បដិបត្តិ — មិន មែន ដោយ ភេទ ឡើយ ។',
    mE: 'Awakening is measured by a practised heart, never by gender.',
    tie: 'រឿង កិសាគោតមី · /stories', href: BASE + '/stories',
  },
  {
    qK: 'ហេតុអ្វី ត្រូវ សូត្រ មន្ត ហើយ ត្រូវ ជ្រក នឹង រតនត្រ័យ?', qE: 'Why chant, and why take refuge in the Triple Gem?',
    aK: 'ការ សូត្រ មន្ត មិន មែន សូត្រ ស៊ី ការ ប្រមូល ចិត្ត ឲ្យ នៅ ក្នុង ពាក្យ ល្អ ពិសិដ្ឋ ។ ការ ជ្រក នឹង ព្រះ ធ្មប្បី ថា មាន គ្រូ និង ផ្លូវ — ដូច កូន ដែល ជ្រក លើ ឪពុក ម្តាយ ដើម្បី សិក្សា មិន មែន ដើម្បី ពឹង វាសនា ទេ ។',
    aE: 'Chanting is not magic — it gathers the mind into good and sacred words, calming it. Taking refuge in the Buddha, Dhamma and Saṅgha means trusting that there is a teacher and a path — like a child resting on its parents in order to learn, not to hand over fate.',
    mK: 'សូត្រ គឺ ប្រមូល ចិត្ត ជ្រក រតនត្រ័យ គឺ ទទួល យក ផ្លូវ — មិន មែន សុំ អព្ភូតហេតុ ទេ ។',
    mE: 'Chanting gathers the mind; taking refuge is accepting the path — it is not asking for miracles.',
    tie: 'ការសូត្រ មន្ត · /chanting', href: BASE + '/chanting',
  },
  {
    qK: 'ហេតុអ្វី យើង ច្រូច ទឹក ប្រោស ប្រទាន (ចាក់ទឹក ឧទ្ទិស បុណ្យ)?', qE: 'Why do we pour water during the merit-dedication ceremony?',
    aK: 'ការ ច្រូច ទឹក ដល់ ដី ជា ទម្លាប់ ចាស់ ពី សម័យ ព្រះពុទ្ធ — រំឮក ថា បុណ្យ ដែល យើង ឧទ្ទិស ដូច ទឹក ហូរ ទៅ រក ទី ទាប គឺ ដល់ អ្នក ដែល ត្រូវ ការ ហើយ មិន អាច ឲ្យ មក វិញ បាន ឡើយ ។ ជា គ្រឿង សម្គាល់ សទ្ធា ដែល មិន ច្រណែន ផ្សាយ បុណ្យ ដល់ អ្នក ដទៃ ។',
    aE: 'Pouring water onto the ground is an ancient custom from the Buddhas time. It reminds us that dedicated merit, like water finding low ground, flows to those in need and can never be taken back. It is a sign of a faith without envy, sharing merit with others.',
    mK: 'ច្រូច ទឹក រំឮក ថា បុណ្យ ហូរ ទៅ រក អ្នក ត្រូវ ការ ដូច ទឹក ទៅ រក ទី ទាប — ជា សទ្ធា ដែល សប្បុរស ។',
    mE: 'Pouring water is a reminder that merit flows to those in need, as water finds low ground — a generous faith.',
    tie: 'កម្ម និងផល · /kamma', href: BASE + '/kamma',
  },
]
</script>