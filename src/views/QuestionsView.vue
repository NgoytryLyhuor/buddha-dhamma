<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សំណួរ–ចម្លើយ ២០ — សួរតាមដែលអ្នកជួប', 'Q&A 20 — QUESTIONS PEOPLE REALLY ASK') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('សំណួរ និង ចម្លើយ', 'Questions and Warm Answers') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('មនុស្សដែលចាប់ផ្តើមរៀនធម៌ តែងមានសំណួរច្រើនក្នុងចិត្ត។ សំណួរខ្លះសាមញ្ញ ខ្លះជ្រៅ ប៉ុន្តែព្រះពុទ្ធបានឆ្លើយទុកហើយ គ្រប់សំណួរ។ ទំព័រនេះប្រមូលសំណួរដែលគេសួរញឹកញាប់ មករៀបចម្លើយខ្លីៗ ងាយយល់ ភ្ជាប់ជាមួយគាថា ឬសូត្រ សម្រាប់អានបន្ថែម។', 'People beginning the Dhamma carry many questions in their hearts. Some are simple, some deep — but the Buddha answered them all. This page gathers the questions asked most often, with short clear answers that point back to a verse or sutta for further reading.') }}
    </p>

    <div class="mt-8">
      <p class="chapter-label">{{ t('សំណួរ ២០ — ចុចដើម្បីបើកមើល', 'TWENTY QUESTIONS — TAP TO OPEN') }}</p>
    </div>
    <div class="mt-4 space-y-4">
      <details v-for="(qa, i) in qas" :key="qa.en" class="card-paper p-6 md:p-8" :open="i === 0">
        <summary class="select-none">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <h3 class="font-display text-lg md:text-xl leading-snug min-w-0" :style="{ color: 'var(--ink)' }">
              <span class="sutra-num mr-2 align-middle" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
              {{ t(qa.qK, qa.qE) }}
            </h3>
            <span class="caret shrink-0 mt-1" :style="{ color: 'var(--accent-bright)' }">&#9660;</span>
          </div>
        </summary>

        <div class="mt-5">
          <p class="leading-loose text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t(qa.aK, qa.aE) }}</p>
          <div class="mt-4 p-3 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
            <p class="text-[10px] font-bold tracking-widest uppercase" :style="{ color: 'var(--accent)' }">{{ t('អត្ថន័យ', 'THE MEANING') }}</p>
            <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(qa.mK, qa.mE) }}</p>
          </div>
          <p class="mt-4 pt-3 text-xs" :style="{ color: 'var(--ink-muted)', borderTop: '1px dashed var(--border)' }">
            {{ t('អានបន្ថែម', 'Read further') }} &#8594; <RouterLink class="paali" :style="{ color: 'var(--accent)' }" :to="qa.to">{{ qa.tie }}</RouterLink>
          </p>
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

const qas = [
  {
    qK: 'ព្រះពុទ្ធ ជាព្រះ (ដូចទេវតា) ដែរឬទេ?', qE: 'Is the Buddha a god?',
    aK: 'មិនមែនទេ។ ព្រះពុទ្ធជាមនុស្ស — កើតក្នុងផ្ទៃ ចេញបួស ត្រាស់ដឹង ដោយការព្យាយាម ក្នុងប្រវត្តិពិត។ ព្រះអង្គមិនដែលឲ្យអ្នកណាបួងសួងសុំអ្វី ពីព្រះអង្គទេ — ព្រះអង្គប្រគល់ផ្លូវបដិបត្តិ ឲ្យអ្នករាល់គ្នាដើរដោយខ្លួនឯង។',
    aE: 'No. The Buddha was a human being — born, renounced the world, and awakened through his own effort in real history. He never told anyone to worship him; instead he gave a path to walk oneself.',
    mK: 'ព្រះពុទ្ធ មិនមែនជាព្រះដែលសុំឲ្យបានទេ — ទ្រង់ជាគ្រូដែលបង្ហាញផ្លូវ ឲ្យយើងដើរដោយខ្លួនឯង។',
    mE: 'The Buddha is not a god you ask things from — he is a teacher who shows a path you walk yourself.',
    tie: 'ជីវប្រវត្តិព្រះពុទ្ធ · /life', to: '/life#ev-the-great-renunciation',
  },
  {
    qK: 'បើគ្មានខ្លួន តើអ្នកណាដែលដើរលើផ្លូវអរិយមគ្គ?', qE: 'If there is no self, then who walks the path?',
    aK: 'ព្រះពុទ្ធ មិនបានសម្តែងថាគ្មានខ្លួន ជាដាច់ខាតទេ — ព្រះអង្គសម្តែងថា គ្មានខ្លួនដែលគ្រប់គ្រងបាន ឥតប្រែប្រួល ដូចមនុស្សច្រើនសន្មតនោះទេ។ បុគ្គលបដិបត្តិពិតជាមាន បញ្ញាកើតឡើងពិតមែន — គ្រាន់តែអ្វីៗទាំងនោះកើតហើយរលត់ រាល់ខណៈ ឥតមានអ្នកណាម្នាក់គ្រប់គ្រង ឋិតនៅឡើយ។',
    aE: 'The Buddha did not teach, absolutely, that there is no self — he taught that there is no fixed, controllable, unchanging self as people imagine. A practising person truly exists; wisdom truly arises — they simply arise and pass each moment with no permanent master inside.',
    mK: 'មិនមែន «គ្មានខ្ញុំ» ទេ — គឺ «គ្មានខ្លួនដែលថេរ គ្រប់គ្រងបាន» ទើបពិត។',
    mE: 'It is not “there is no me” — the truth is “there is no permanent, controllable self.”',
    tie: 'អនត្តា · /glossary', to: '/glossary#term-anatta',
  },
  {
    qK: 'ហេតុអ្វី មនុស្សអាក្រក់ ច្រើនតែបានសម្បត្តិ?', qE: 'Why do bad people so often prosper?',
    aK: 'ផលកម្ម មិនចាំបាច់ឲ្យផល ក្នុងឆាកជីវិតនេះភ្លាមនោះទេ — ដូចគ្រាប់ស្រូវដែលគេសាបក្នុងដី ត្រូវការកាលវេលា ទើបលូតលាស់។ កម្មអាចឲ្យផលក្នុងជាតិនេះ ជាតិមុខ ឬក្នុងកាលសមគួរ។ មនុស្សដែលឃើញតែសម្បត្តិសព្វថ្ងៃ អាចនឹងមិនដឹងពីទុក្ខដែលរង់ចាំ ក្នុងកាលខាងមុខក៏បាន។',
    aE: 'Kamma, like a seed, needs its own season; the result does not always show in this lifetime. A deed can ripen here, in another life, or whenever conditions are ready. Looking only at todays wealth may hide the suffering that ripens later.',
    mK: 'អ្នកដែលធ្វើល្អ មិនតែងបានល្អមួយរំពេច — តែគ្រាប់ល្អ មិនដែលខាត វាត្រូវការពេលតែប៉ុណ្ណោះ។',
    mE: 'The good do not always prosper at once — but a good seed is never lost; it only needs its time.',
    tie: 'កម្ម និងផល · /kamma', to: '/kamma#kusala-akusala',
  },
  {
    qK: 'តើកម្ម ជាវាសនាដែលមិនអាចប្រែបាន?', qE: 'Is kamma a fate that cannot change?',
    aK: 'មិនមែនវាសនាទេ។ កម្មជាច្បាប់ហេតុ–ផល មានការកែប្រែបាន — អំពើអាក្រក់ដែលបានធ្វើ អាចរំងាប់បាន ដោយសេចក្តីល្អ កាន់សីល ហើយបដិបត្តិដោយខ្នះខ្នែង។ ពិសេសលើសពីនេះ អ្នកដូចអង្គុលីមាលៈ ដែលធ្លាប់សម្លាប់មនុស្សច្រើន ក៏បានកែខ្លួន ដល់អរហត្ត បានដែរ។',
    aE: 'Not fate. Kamma is the law of cause and effect and it can change: evil done can be calmed by goodness, virtue and urgent practice. Even Angulimāla, who had killed so many, turned his life around to arahantship.',
    mK: 'អនាគត មិនជាប់មុខឲ្យកន្លង — សព្វថ្ងៃនេះ យើងអាចជ្រើសរើស បាន។',
    mE: 'The future is not fixed by the past — this moment you still get to choose.',
    tie: 'សីល និងបារមី · /ethics', to: '/ethics#parami',
  },
  {
    qK: 'ខ្ញុំចាប់ផ្តើមសមាធិ ដូចម្តេច?', qE: 'How do I start meditation?',
    aK: 'ចាប់ផ្តើមពីរបៀបសាមញ្ញ ៖ អង្គុយស្ងាត់ ដាក់កាយឲ្យត្រង់ ដកដង្ហើមយឺតៗ តាមធម្មតា — រាប់ទី ១ ដល់ ១០ នៅចុងផុតសំដង្ហើម។ ពេលចិត្តរអាក់រអួល ទាញមករកដង្ហើមវិញ — កុំខឹងនឹងចិត្តខ្លួនឯង។ ធ្វើ ១០ នាទីរាល់ថ្ងៃ ល្អជាងមួយម៉ោង ម្តងកម្រៗ។',
    aE: 'Begin very simply: sit quietly, keep the body straight and the breath natural — count from one to ten at the end of each out-breath. When the mind wanders, gently return it to the breath; do not scold yourself. Ten minutes daily beats one long hour now and then.',
    mK: 'សមាធិ មិនមែន បង្ខំចិត្ត ឲ្យស្ងៀម ទេ — គឺរៀនត្រឡប់មករកដង្ហើម វិញ ម្តងហើយម្តងទៀត។',
    mE: 'Meditation is not forcing the mind to be still — it is learning, again and again, to come back to the breath.',
    tie: 'សមាធិ · /meditation', to: '/meditation#patipada',
  },
  {
    qK: 'សត្វចិញ្ចឹម ដែលស្លាប់ទៅ កើតឯណា?', qE: 'Where does a beloved pet go after it dies?',
    aK: 'យើងមិនអាចបញ្ជាក់កន្លែងកំណើតពិតប្រាកដ បានទេ។ តែតាមគោលធម៌ — សត្វគ្រប់ប្រភេទ ដឹងវិញ្ញាណជាតិ មានតែកម្ម គឺអំពើល្អ-អាក្រក់របស់វា ដែលកំណត់កំណើតបន្ទាប់។ អ្វីដែលយើងធ្វើបាន គឺនៅក្នុងពេលវានៅមានជីវិត — ផ្សាយមេត្តាឲ្យវា រាល់ថ្ងៃ។',
    aE: 'We cannot say the exact destiny with certainty. But the teaching holds that mental rebirth follows ones own deeds, for every kind of being. What we can do is fill its life with care — and radiate mettā its way every day.',
    mK: 'រឿងសំខាន់ មិនមែន «ទៅណា» តែ «យើងបានឲ្យក្តីស្រឡាញ់វាប៉ុណ្ណា» ក្នុងពេលវានៅជាមួយយើង។',
    mE: 'What matters is not “where it went” but how much love we gave it while it was with us.',
    tie: 'សព្វេ សត្តា · /gathas',     to: '/gathas#gatha-7',
  },
  {
    qK: 'បើគ្មានខ្លួន តើអ្វីដែលកើតជាថ្មី?', qE: 'If there is no self, what is it that is reborn?',
    aK: 'មិនមែនមានអ្នកដូចគ្នា ទេ — តែមានដំណើរការជាបន្តៗ ទៅវិញ។ ដូចភ្លើងដែលបន្តពីចង្កៀងមួយ ទៅចង្កៀងមួយទៀត — ឥតមានអណ្តាតភ្លើងណា ដូចគ្នា តែពន្លឺនៅបន្តបាន។ ចិត្តដែលកើតថ្មី កើតពីហេតុចាស់ ក្នុងខណៈដែលចិត្តកន្លងទៅ — តែឥតមានខ្លួនថេរណាមួយ ឆ្លងទៅនោះទេ។',
    aE: 'It is not the same person continuing, yet a continuation truly happens. Like a flame passing from one lamp to another — no single flame is the same, but the light continues. A fresh stream of mind arises from causes, holding no gap with what went before.',
    mK: 'ដូចភ្លើង ឆេះពីចង្កៀងមួយ ទៅមួយ — ឥតមានអណ្តាតភ្លើងណាតែមួយ តែពន្លឺនៅតែបន្ត។',
    mE: 'Like a flame passing from lamp to lamp — no single flame is the same, yet the light carries on.',
    tie: 'អនត្តា · /glossary', to: '/glossary#term-anatta',
  },
  {
    qK: 'ហេតុអ្វី អ្នកតាមផ្ទះ គប្បីវៀរស្រា និងគ្រឿងញៀន?', qE: 'Why should lay people avoid alcohol and drugs?',
    aK: 'ព្រោះវានាំឲ្យប្រមាទ — ប្រមាទជាទ្វារនៃសេចក្តីវិនាស។ អ្នកដែលស្រវឹង អាចធ្វើអាក្រក់គ្រប់បែប ដែលធ្លាប់ខ្លាច — ព្រោះសតិស្លាប់ទៅ។ សីលទី ៥ មិនមែនបង្ខំ ទេ — គឺការពារខ្លួនឯង ឲ្យសតិនៅដដែល។',
    aE: 'Because intoxication destroys heedfulness — and heedlessness is the doorway to ruin. A drunk person can do things they would fear when sober, because mindfulness has gone. The fifth precept is not force; it is a shield that keeps your mindfulness alive.',
    mK: 'ស្រាមិនមែន «បាប» ឥតហេតុទេ — វាចាប់ដៃសតិឲ្យស្លាប់ ហើយបើកទ្វារឲ្យបាបផ្សេងៗ ចូលមក។',
    mE: 'Alcohol is not “sin” for its own sake — it kills mindfulness and opens the door to other wrongs.',
    tie: 'ស្វាក្ខាតោ · /chanting', to: '/chanting#chant-2',
  },
  {
    qK: 'ធ្វើទាន បានផលពិត ឬក៏មេត្តា?', qE: 'Does giving truly bear fruit, or is it just kindness?',
    aK: 'ទាំងពីរយ៉ាង។ កាលព្រះពុទ្ធបានសម្តែងក្នុងសូត្រច្រើនថា ទានដោយចិត្តបរិសុទ្ធ ឲ្យផលសុខ ក្នុងខ្លួនអ្នកឲ្យ ទាំងខាងក្រោយនេះ និងក្នុងកាលខាងមុខ ដូចគ្រាប់ដែលទុកយកផ្លែ។ ហើយក្នុងជីវិតប្រចាំថ្ងៃ ការឲ្យក៏ត្រជាក់ចិត្តអ្នកឲ្យ និងជួយបន្ថយលោភៈ ទៀត។',
    aE: 'Both. Many suttas teach that a gift given with pure heart bears its fruit for the giver in this life and beyond, like a seed saved for its harvest. And in everyday life, giving cools the heart and loosens greed right here and now.',
    mK: 'ធ្វើទាន គឺសាបគ្រាប់ល្អ ក្នុងចិត្តខ្លួនឯង — ផល មិនដែលខាត សូម្បី ក្នុងថ្ងៃនេះ ក៏ចាប់ផ្តើមត្រជាក់ចិត្ត។',
    mE: 'Giving plants a good seed in your own heart — the fruit is never lost, and even today it starts cooling the mind.',
    tie: 'ទាន · /ethics', to: '/ethics#parami',
  },
  {
    qK: 'ព្រះពុទ្ធ ឲ្យគោរពបូជាព្រះពុទ្ធរូប ឬទេ?', qE: 'Did the Buddha ask people to worship his statue?',
    aK: 'ព្រះអង្គមិនបានបង្គាប់ឲ្យគោរពរូបបដិមា ទេ — ព្រះអង្គសម្តែងឲ្យបូជា ដោយការបដិបត្តិធម៌។ រូបសំណាកជាគ្រឿងរំឮក ដល់គុណព្រះអង្គ — ដូចទង់ជាតិ រំឮកដល់ជាតិ។ ការបូជាដ៏ល្អបំផុត គឺមិនធ្វើអាក្រក់ទាំងអស់។',
    aE: 'He did not command worship of images — he taught honouring through practising the Dhamma. A statue is a sign to remember his qualities, like a flag reminds us of our country. The highest offering is simply to do no evil.',
    mK: 'រូបព្រះ គ្រាន់តែជា គ្រឿងរំឮក — ការបូជាប្រសើរ បំផុត គឺ បដិបត្តិធម៌ មិនធ្វើអាក្រក់។',
    mE: 'A Buddha image is only a reminder — the highest offering is to practise the Dhamma and do no evil.',
    tie: 'គាថាព្រះធម៌ · /gathas', to: '/gathas#gatha-1',
  },
  {
    qK: 'ហេតុអ្វី ត្រូវទៅវត្ត ហើយថ្វាយស្បៀងដល់ព្រះសង្ឃ?', qE: 'Why go to the pagoda and offer food to the monks?',
    aK: 'ទៅវត្ត ស្តាប់ធម៌ ជាការបណ្តុះបញ្ញា — ហើយការថ្វាយស្បៀង ជាការគាំទ្រព្រះសង្ឃ ដែលបានបួសលះប្រយោជន៍ខ្លួន ដើម្បីសិក្សា និងការពារព្រះពុទ្ធសាសនា ។ ទាន គឺបញ្ចាំឲ្យអ្នកដទៃ អាចបដិបត្តិបាន — ទាំងផលដល់អ្នកឲ្យ និងជាការជួយលោក ។',
    aE: 'Going to the pagoda to hear the Dhamma plants wisdom. Offering food supports the monks, who have given up their own ease to study and guard the Dhamma. Giving enables others to practise — it helps the world and brings fruit to the giver.',
    mK: 'ទៅវត្ត គឺទៅដើម្បីរៀនធម៌ — ថ្វាយស្បៀង គឺជួយអ្នកបដិបត្តិ ឲ្យបន្តបដិបត្តិបាន។',
    mE: 'Go to the pagoda to learn the Dhamma; offer food to keep the practitioners practice alive.',
    tie: 'សីល និងបារមី · /ethics', to: '/ethics#sila',
  },
  {
    qK: '៤ សប្តាហ៍ បន្ទាប់ពីអ្នកស្លាប់ តើអ្នកស្លាប់ អាចមកយកបុណ្យ បានដែរឬទេ?', qE: 'Can the dead come and receive the merit we dedicate to them?',
    aK: 'តាមព្រះធម៌ ការជូនបុណ្យ ជួយបាន ក្នុងករណីដែលញាតិដែលស្លាប់ ដើរកើតជាប្រេត (ពួកសត្វដែលរង់ចាំ) ។ ផល មិនមែនទៅដល់ គ្រប់ទីកន្លែង ស្វ័យប្រវត្តិ ទេ — ប៉ុន្តែ បុណ្យដែលយើងធ្វើ មានអំណាចជួយ ក្នុងចំណែកដែលសមគួរ ។ អ្វីដែលប្រាកដ គឺបុណ្យនោះ ប្រទានដល់យើងដែលនៅរស់ — ជួយរំលឹក និងប្រោសសង្គ្រោះចិត្តខ្លួនឯង ។',
    aE: 'The Dhamma says merit can reach the departed when they are born as petas, beings waiting for help. It does not automatically reach every realm — but merit made in faith does help where it is fitting. What is certain is that it blesses the living too: it reminds us and heals our own hearts.',
    mK: 'តាម ព្រះធម៌ បុណ្យដែលយើងធ្វើ អាចជួយដល់ញាតិ ដែលកើតជាប្រេត — ហើយតែងប្រទានឲ្យចិត្តយើងដែលនៅរស់ ។',
    mE: 'Merit dedicated in faith can reach a departed relative born as a peta — and always blesses the heart of the one who gives.',
    tie: 'កម្ម និងផល · /kamma', to: '/kamma#31-plane',
  },
  {
    qK: 'អ្វីទៅ ជាព្រះវស្សា (ចូលវស្សា)?', qE: 'What is Buddhist Lent (the rainy-season retreat)?',
    aK: 'ព្រះវស្សា គឺរដូវប្រតិបត្តិ ៣ ខែ ពីថ្ងៃចូលវស្សា នៅខែអស្សុជ ដល់ថ្ងៃចេញវស្សា — ព្រះសង្ឃ គង់នៅក្នុងវត្ត មិនចេញដំណើរយប់ឡើយ សម្រាប់សិក្សា និងបដិបត្តិឲ្យម៉ឺងម៉ាត់ ។ តាមផ្ទះ ទម្លាប់ ច្រើន កាន់សីល ៨ នៅថ្ងៃសីល ក្នុងរដូវនេះ ។',
    aE: 'Vassa is a three-month rainy-season retreat, from entering-lent to leaving-lent. Monks remain in one place, avoiding night travel, to study and practise more strictly. Lay people often keep the eight precepts on sabbath days during this season.',
    mK: 'វស្សា ជាពេលផ្អាកដើរ ដើម្បីឧស្សាហ៍សិក្សា និងបដិបត្តិ — ជាសព្វថ្ងៃ ដែលយើងបណ្តុះសីល ។',
    mE: 'Vassa is a held pause for diligent study and practice — a season of growing in virtue.',
    tie: 'របៀបវិញ្ញាណ · /meditation', to: '/meditation#patipada',
  },
  {
    qK: 'ហេតុអ្វី ខ្ញុំខឹងលឿនម្ល៉េះ? តើធ្វើដូចម្តេច ឲ្យឈប់ខឹង?', qE: 'Why do I get angry so quickly? How do I stop?',
    aK: 'កំហឹងច្រើនកើតពីសេចក្តីប្រកាន់ខ្លួន និងការសន្មតថា គេធ្វើអាក្រក់លើខ្លួន។ ដើម្បីឈប់ខឹង — ដកដង្ហើមវែងៗ មួយ ឬបីដង មុននិយាយ បន្ទាប់មកផ្សាយមេត្តា រំឮកថាមនុស្សទាំងអស់ រងទុក្ខដូចគ្នា។ កំហឹងដូចឈើក្តៅ ដែលអ្នកកាន់ឲ្យគប់អ្នកដទៃ — អ្នកខ្លួនឯងទេ ដែលរលាកមុនគេ។',
    aE: 'Anger mostly grows from clinging to self and from assuming others slight us. To stop: take three long breaths before speaking, then send mettā, remembering that everyone suffers. Anger is like a hot coal you pick up to throw at someone — you burn your own hand first.',
    mK: 'កំហឹង តែង ដុត អ្នក ខឹង មុន អ្នក ដទៃ — សតិ និង មេត្តា ជា ទឹក រំងាប់ ភ្លើង នេះ ។',
    mE: 'Anger always burns the angry one first — mindfulness and mettā are the water that cools that fire.',
    tie: 'មេត្តា · /gathas',     to: '/gathas#gatha-7',
  },
  {
    qK: 'ស្ត្រី អាចត្រាស់ដឹង បានដែរឬទេ?', qE: 'Can women attain enlightenment?',
    aK: 'អាចបានមែន។ ព្រះពុទ្ធបានសម្តែងថា ស្ត្រីអាចដល់អរហត្តបាន — ព្រះនាងមហាបជាបតីគោតមី និងភិក្ខុនីជាច្រើន រួមទាំងកិសាគោតមី បានត្រាស់ដឹងដោយខ្លួនឯង។ ការត្រាស់ដឹងអាស្រ័យលើចិត្ត និងការបដិបត្តិ — មិនអាស្រ័យលើភេទ ឡើយ។',
    aE: 'Yes, fully. The Buddha taught that women can attain arahantship — Queen Mahāpajāpatī Gotamī and many bhikkhunīs, including Kisāgotamī, awakened on their own. Awakening depends on the heart and practice, not on gender.',
    mK: 'ការ ត្រាស់ ដឹង វាស់ ដោយ ចិត្ត ដែល បដិបត្តិ — មិន មែន ដោយ ភេទ ឡើយ ។',
    mE: 'Awakening is measured by a practised heart, never by gender.',
    tie: 'រឿង កិសាគោតមី · /stories', to: '/stories#story-1',
  },
  {
    qK: 'ហេតុអ្វី ត្រូវសូត្រមន្ត ហើយត្រូវជ្រកនឹងរតនត្រ័យ?', qE: 'Why chant, and why take refuge in the Triple Gem?',
    aK: 'ការសូត្រមន្ត មិនមែនសូត្រស៊ីទេ — ជាការប្រមូលចិត្ត ឲ្យនៅក្នុងពាក្យល្អពិសិដ្ឋ។ ការជ្រកនឹងរតនត្រ័យ (ព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ) គឺថាមានគ្រូ និងផ្លូវ — ដូចកូនដែលជ្រកលើឪពុកម្តាយ ដើម្បីសិក្សា មិនមែនដើម្បីពឹងវាសនាទេ។',
    aE: 'Chanting is not magic — it gathers the mind into good and sacred words, calming it. Taking refuge in the Buddha, Dhamma and Saṅgha means trusting that there is a teacher and a path — like a child resting on its parents in order to learn, not to hand over fate.',
    mK: 'សូត្រ គឺ ប្រមូល ចិត្ត ជ្រក រតនត្រ័យ គឺ ទទួល យក ផ្លូវ — មិន មែន សុំ អព្ភូតហេតុ ទេ ។',
    mE: 'Chanting gathers the mind; taking refuge is accepting the path — it is not asking for miracles.',
    tie: 'ការសូត្រ មន្ត · /chanting', to: '/chanting#chant-1',
  },
  {
    qK: 'ហេតុអ្វី យើងច្រូចទឹក ប្រោសប្រទាន (ចាក់ទឹកឧទ្ទិសបុណ្យ)?', qE: 'Why do we pour water during the merit-dedication ceremony?',
    aK: 'ការច្រូចទឹកដល់ដី ជាទម្លាប់ចាស់ពីសម័យព្រះពុទ្ធ — រំឮកថា បុណ្យដែលយើងឧទ្ទិស ដូចទឹកហូរទៅរកទីទាប គឺទៅដល់អ្នកដែលត្រូវការ ហើយមិនអាចឲ្យមកវិញបានឡើយ។ ជាគ្រឿងសម្គាល់សទ្ធា (ជំនឿ) ដែលមិនច្រណែន ចេះផ្សាយបុណ្យដល់អ្នកដទៃ។',
    aE: 'Pouring water onto the ground is an ancient custom from the Buddhas time. It reminds us that dedicated merit, like water finding low ground, flows to those in need and can never be taken back. It is a sign of a faith without envy, sharing merit with others.',
    mK: 'ច្រូច ទឹក រំឮក ថា បុណ្យ ហូរ ទៅ រក អ្នក ត្រូវ ការ ដូច ទឹក ទៅ រក ទី ទាប — ជា សទ្ធា ដែល សប្បុរស ។',
    mE: 'Pouring water is a reminder that merit flows to those in need, as water finds low ground — a generous faith.',
    tie: 'កម្ម និងផល · /kamma', to: '/kamma#31-plane',
  },
  {
    qK: 'តើនិព្វាន ជាអ្វី?', qE: 'What is Nibbāna?',
    aK: 'និព្វាន ជាសេចក្តីរលត់នៃលោភៈ ទោសៈ មោហៈ — ជាសេចក្តីស្ងប់ដ៏ប្រសើរ ដែលឈប់កើតទុក្ខ ដោយឥតបន្សល់។ មិនមែនជាកន្លែង ពុំមែនជានគរ ពុំមែនជាសេចក្តីវិនាស — តែជាសេចក្តីស្ងប់ ដែលមនុស្សទៅដល់បាន ដោយការបដិបត្តិ។ ព្រះពុទ្ធសម្តែងថា មិនអាចពន្យល់ដោយពាក្យបានច្បាស់ទេ — ព្រោះជាអ្វីដែលត្រូវដឹងដោយខ្លួនឯង។',
    aE: 'Nibbāna is the ending of greed, hatred and delusion — a supreme peace in which suffering ceases without remainder. It is not a place, not a city, not annihilation, but a peace reachable through practice. The Buddha said it cannot be fully explained in words — it is something to be known for oneself.',
    mK: 'និព្វាន មិនមែន «ទៅណា» តែជា «រលត់» នៃ កិលេស — ជា ស្ងប់ ដែល ដឹង ដោយ ខ្លួន ឯង ។',
    mE: 'Nibbāna is not a “where to go” but the ceasing of defilements — a peace known by oneself.',
    tie: 'អារិយសច្ចៈ · /core#dukkha', to: '/core#dukkha',
  },
  {
    qK: 'អ្នកតាមផ្ទះ អាចដល់និព្វាន បានដែរឬទេ?', qE: 'Can a lay person attain Nibbāna?',
    aK: 'អាចបាន។ មានឧបាសក ឧបាសិកា ជាច្រើនក្នុងសម័យព្រះពុទ្ធ ដូចជាអ្នកទំនុកបម្រុង ឬព្រះបាទពិម្ពិសារ ដែលបានដល់សោតាបត្តិ ខណៈនៅតែរក្សាផ្ទះ។ បើអាចកាន់សីលបានតឹងរឹង និងបដិបត្តិបានពេញពេល — អ្នកតាមផ្ទះអាចទៅដល់អនាគាមិ តែអរហត្ត តែងត្រូវការទៅបួស (ភិក្ខុ ភិក្ខុនី)។',
    aE: 'Yes. Many lay disciples in the Buddha’s time, like King Bimbisāra and devoted donors, attained stream-entry while keeping their homes. With strict virtue and full-time practice, a lay person can go far, to non-returning; full arahantship however is traditionally attained while ordained.',
    mK: 'អ្នក តាម ផ្ទះ អាច ដល់ ច្រក ចូល ផ្លូវ (សោតាបត្តិ) បាន ក្នុង ជីវិត នេះ — អរហត្ត តែង ត្រូវ បួស ។',
    mE: 'A lay person can reach stream-entry in this very life — full arahantship is traditionally reached while ordained.',
    tie: 'សីល និងបារមី · /ethics#sila', to: '/ethics#sila',
  },
  {
    qK: 'ហេតុអ្វី ពុទ្ធសាសនាហាមសម្លាប់ តែអនុញ្ញាតឲ្យស៊ីសាច់?', qE: 'Why does Buddhism forbid killing but allow eating meat?',
    aK: 'សីលទី ១ ហាមការនាំជីវិតណាមួយឲ្យអស់ — ការសម្លាប់ដោយផ្ទាល់ ជាទង្វើធ្ងន់។ ប៉ុន្តែព្រះពុទ្ធមិនបានបង្គាប់ ឲ្យអ្នកតាមផ្ទះបរិភោគបួស ទេ — ព្រះអង្គអនុញ្ញាតសាច់ដែលមិនឃើញ មិនឮ មិនប្រាកដថាសម្លាប់ ដោយប្រយោជន៍ខ្លួន ដែលហៅថា «សាច់បរិសុទ្ធតាមវិធីបី (តិកោដិបរិសុទ្ធ)»។ អ្នកណាជ្រើសបួស ក៏ជាទង្វើមេត្តាដ៏ល្អដែរ។',
    aE: 'The first precept forbids taking any life — killing directly is grave. Yet the Buddha did not command lay people to be vegetarian. He allowed meat that is not seen, heard, or suspected to have been killed for oneself — the “threefold purity.” Anyone who chooses vegetarianism also makes a fine act of compassion.',
    mK: 'សីល វាស់ នៅ ទង្វើ ពិត ប្រាកដ — សាច់ ដែល បរិសុទ្ធ តាម តិកោដិ អាច បរិភោគ បាន; ការ បួស ជា មេត្តា បន្ថែម ។',
    mE: 'Precepts judge the actual deed — meat pure by the threefold criterion is allowed; vegetarianism is an extra kindness.',
    tie: 'កម្ម និងផល · /kamma#kusala-akusala', to: '/kamma#kusala-akusala',
  },
]
</script>