<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សំណួរ–ចម្លើយ ៤២ — សួរតាមដែលអ្នកជួប', 'Q&A 42 — QUESTIONS PEOPLE REALLY ASK') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('សំណួរ និង ចម្លើយ', 'Questions and Warm Answers') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('មនុស្សដែលចាប់ផ្តើមរៀនធម៌ តែងមានសំណួរច្រើនក្នុងចិត្ត។ សំណួរខ្លះសាមញ្ញ ខ្លះជ្រៅ ប៉ុន្តែព្រះពុទ្ធបានឆ្លើយទុកហើយ គ្រប់សំណួរ។ ទំព័រនេះប្រមូលសំណួរដែលគេសួរញឹកញាប់ មករៀបចម្លើយខ្លីៗ ងាយយល់ ភ្ជាប់ជាមួយគាថា ឬសូត្រ សម្រាប់អានបន្ថែម។', 'People beginning the Dhamma carry many questions in their hearts. Some are simple, some deep — but the Buddha answered them all. This page gathers the questions asked most often, with short clear answers that point back to a verse or sutta for further reading.') }}
    </p>

    <div class="mt-8">
      <p class="chapter-label">{{ t('សំណួរ ៤២ — ចុចដើម្បីបើកមើល', 'FORTY-TWO QUESTIONS — TAP TO OPEN') }}</p>
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
    tie: 'ជីវិតព្រះសង្ឃ · /sangha', to: '/sangha',
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
  {
    qK: 'តើអ្វីជាឫសគល់នៃទុក្ខ ហើយតើមានវិធីអ្វីខ្លះដើម្បីរំលត់កិលេស?', qE: 'What are the root causes of suffering, and how do we extinguish defilements?',
    aK: 'ទុក្ខកើតចេញពីខ្សែសង្វាក់នៃ តណ្ហា ៣ (កាមតណ្ហា ភវតណ្ហា វិភវតណ្ហា) ឧបាទាន (ការតោងប្រកាន់) និង អវិជ្ជា (ការមិនដឹងពិត) ព្រមទាំងអកុសលមូលទាំង ៣ (លោភៈ ទោសៈ មោហៈ)។ ដើម្បីរំលត់ទុក្ខបាន ត្រូវកម្ចាត់កិលេសតាម ត្រៃសិក្ខា ៣ ថ្នាក់៖ (១) កិលេសគ្រោតគ្រាតតាមកាយ-វាចា រំងាប់ដោយ «សីល» (២) កិលេសកម្រិតមធ្យមក្នុងចិត្ត រំងាប់ដោយ «សមាធិ» (៣) កិលេសដេកសម្ងំនៅបាតចិត្ត កាត់ផ្តាច់ជាស្ថាពរដោយ «បញ្ញា» (វិបស្សនា) រហូតដល់សម្រេចអរហត្តផល។',
    aE: 'Suffering stems from a causal chain of Craving (kāma, bhava, vibhava taṇhā), Clinging (upādāna), deep Ignorance (avijjā), and the three unwholesome roots (greed, hatred, delusion). Eradication proceeds through the Threefold Training (tisikkhā): gross defilements are restrained by Sīla (morality), medium mental hindrances are quieted by Samādhi (concentration), and latent roots (anusaya) are severed forever by Paññā (wisdom/insight).',
    mK: 'សីល រំងាប់កិលេសក្រៅ · សមាធិ រំងាប់កិលេសក្នុង · បញ្ញា កាត់ផ្តាច់ឫសកិលេសឲ្យរលត់សូន្យ។',
    mE: 'Virtue calms outward defilement; concentration calms inner agitation; wisdom cuts the root forever.',
    tie: 'ឫសគល់នៃទុក្ខ និងវិធីរំលត់កិលេស · /core#roots-of-suffering', to: '/core#roots-of-suffering',
  },
  {
    qK: 'យោងតាមគម្ពីរអភិធម្ម (គម្ពីរបដ្ឋាន) តើបច្ច័យទាំង ២៤ មានតួនាទីតភ្ជាប់ចិត្ត និងរូបយ៉ាងដូចម្ដេចខ្លះ?', qE: 'According to the Abhidhamma (Paṭṭhāna), how do the 24 conditions connect mind and matter?',
    aK: 'នៅក្នុងគម្ពីរបដ្ឋាន បច្ច័យទាំង ២៤ ដើរតួជាបណ្តាញស្ថាបត្យកម្មដែលពន្យល់ពីរបៀបដែលនាម (ចិត្ត) និងរូប (កាយ) ធ្វើអន្តរកម្ម ពឹងពាក់ និងរុញច្រានគ្នាគ្រប់វិនាទី ដោយគ្មាន «ព្រលឹង» ឬ «អាទិទេព» ឡើយ។ ទំនាក់ទំនងចែកជា ៤ ទិសដៅ៖ (១) នាមជាបច្ច័យដល់រូប (ចិត្តបង្កើតចិត្តជរូប) (២) រូបជាបច្ច័យដល់នាម (វត្ថុរូប ៦ ជាទីតាំង និងអារម្មណ៍ស្រូបទាញចិត្ត) (៣) នាម និងរូបកើតព្រមគ្នាជ្រោមជ្រែងគ្នា (សហជាតបច្ច័យ ដូចខណៈបដិសន្ធិ) (៤) នាមជាបច្ច័យដល់នាម (ខ្សែទឹកចិត្តហូរឥតដាច់)។ គម្ពីរបានលើកឧបមា មនុស្សខ្វាក់ (ចិត្ត) ជិះលើស្មាមនុស្សពិការជើង (រូប) ដើម្បីសហការគ្នាធ្វើដំណើរទៅដល់ទិសដៅ។',
    aE: 'In the Paṭṭhāna, the 24 conditions form an intricate causal matrix detailing how mind (nāma) and matter (rūpa) interact, sustain, and condition one another moment by moment without an immortal soul. Linkages operate across 4 directions: (1) Mind conditions matter (producing cittaja-rūpa), (2) Matter conditions mind (sense organs and objects serving as bases), (3) Simultaneous co-arising (sahajāta, like at conception), and (4) Mind conditions mind (unbroken stream). The Atthakathā illustrates this via the strong blind man (mind) carrying the sharp-eyed lame man (matter).',
    mK: 'គ្មានព្រលឹងអមតៈទេ — មានតែបណ្តាញតំណភ្ជាប់នៃហេតុ និងផល ដែលផ្ទេរថាមពលរវាងចិត្ត និងកាយគ្រប់វិនាទី។',
    mE: 'No permanent soul exists — only an energetic network of causes and conditions transferring momentum between mind and body.',
    tie: 'បច្ច័យទាំង ២៤ នៃបដ្ឋាន (ចិត្ត & រូប) · /paccaya#patthana-24', to: '/paccaya#patthana-24',
  },
  {
    qK: 'ប្រសិនបើចិត្តកើតរលត់រាល់ខណៈ ហើយគ្មានព្រលឹង តើកម្មអាចបញ្ជូនឆ្លងជាតិដោយរបៀបណា?', qE: 'If the mind arises and perishes each moment without a soul, how does karma transmit across lifetimes?',
    aK: 'ថាមពលកម្មមិនមែនរក្សាទុកក្នុងធុង ឬក្នុងព្រលឹងអមតៈណាមួយឡើយ ប៉ុន្តែវាត្រូវបានចម្លង និងផ្ទេរបន្តឥតដាច់តាមរយៈ «ខ្សែទឹកហូរនៃចិត្តសន្តាន» (Citta-santāna) ដោយកម្លាំងនៃ អនន្តរបច្ច័យ (ផ្ទេរទិន្នន័យពីខណៈចិត្តមួយទៅមួយគ្មានចន្លោះ) និង នានាក្ខណិកកម្មបច្ច័យ (សក្តានុពលកម្មដែលដេកសម្ងំរង់ចាំបច្ច័យផ្តល់ផល)។ នៅពេលស្លាប់ ចុតិចិត្តរលត់ ក៏បញ្ឆេះឱ្យបដិសន្ធិចិត្តក្នុងភពថ្មីកើតឡើងភ្លាមមួយរំពេច ដូចជាការយកភ្លើងទៀនមួយទៅអុជបន្តលើទៀនមួយទៀត («ន ច សោ ន ច អញ្ញោ» — មិនមែនបុគ្គលដដែល តែមិនមែនជាអ្នកដទៃ)។',
    aE: 'Karmic energy is neither stored in an external container nor in an immortal soul; it is continually replicated and transmitted along the mental continuum (Citta-santāna) powered by Proximity Condition (Anantara-paccaya) and Asynchronous Kamma Condition (Nānākkhaṇika-kamma). At death, Cuti-citta ceases and instantly ignites Paṭisandhi-citta in the new realm with zero time gap, like lighting a second candle from the first («Na ca so na ca añño» — neither the same, nor another).',
    mK: 'គ្មានព្រលឹងហោះឆ្លងភព — មានតែកម្លាំងសន្ទុះកម្មនៃចុតិចិត្ត ដែលទៅបញ្ឆេះបដិសន្ធិចិត្តក្នុងភពថ្មីភ្លាមៗ។',
    mE: 'No soul migrates — only the karmic momentum of death-consciousness sparking the next rebirth-consciousness.',
    tie: 'ដំណើរកម្មឆ្លងជាតិ (អភិធម្ម & បដ្ឋាន) · /death-and-rebirth#kamma-transference', to: '/death-and-rebirth#kamma-transference',
  },
  {
    qK: 'យោងតាមគម្ពីរអភិធម្ម តើកម្មដែលបានសាងរួចហើយ អាចក្លាយជា «អហោសិកម្ម» ដោយយន្តការបែបណាខ្លះ?', qE: 'According to Abhidhamma, through what mechanisms does committed kamma become "Ahosi-kamma" (defunct)?',
    aK: 'អហោសិកម្ម មិនមែនជាការលុបលាងបាបដោយព្រះអាទិទេពឡើយ ប៉ុន្តែជាកម្មដែលបានសាងរួចហើយ តែបាត់បង់សក្តានុពលក្នុងការឱ្យផល តាមយន្តការ ៤ យ៉ាង៖ (១) ការផុតកាលកំណត់នៃជវនចិត្ត (ទិដ្ឋធម្មវេទនីយកម្ម ផុតក្នុងជាតិនេះ, ឧបបជ្ជវេទនីយកម្ម ផុតក្នុងជាតិទី ២) (២) ការត្រូវកាត់ផ្តាច់ដោយ «ឧបឃាតកកម្ម» (កម្មធ្ងន់កាត់ផ្តាច់ជីវិត ធ្វើឱ្យកម្មចាស់ៗលែងមានរាងកាយទទួលផល) (៣) ការរារាំងដោយ «សម្បត្តិ ៤» (គតិសម្បត្តិ ឧបធិសម្បត្តិ កាលសម្បត្តិ បយោគសម្បត្តិ ដែលរារាំងបាបមិនឱ្យជ្រៀតចូលបាន ដូចដុំអំបិលក្នុងទឹកទន្លេ) (៤) ការរលត់សូន្យទាំងស្រុងនៅពេល «ចូលបរិនិព្វាន» (អបរាបរិយវេទនីយកម្ម និងកម្មទាំងអស់រលត់ក្លាយជាអហោសិកម្មព្រមគ្នា ដូចគ្រាប់ពូជដែលត្រូវភ្លើងឆេះខ្លោច)។',
    aE: 'Ahosi-kamma is not divine absolution; it is committed karma that has lost its potency to mature through 4 mechanisms: (1) Expiration of the javana window (1st javana expires with this life; 7th javana expires after life 2), (2) Severing by Destructive Karma (Upaghātaka-kamma cutting off the body), (3) Suppression by the 4 Favorable Endowments (Sampatti 4 buffering minor demerits like salt in a river), and (4) Ultimate Neutralization at Parinibbāna (when all remaining kamma burns out forever like roasted seeds).',
    mK: 'កម្មប្រែជាអហោសិកម្មដោយសារ៖ ផុតកាលកំណត់ជវនចិត្ត · ត្រូវឧបឃាតកកម្មផ្តាច់ · រារាំងដោយសម្បត្តិ ៤ · និងរលត់សូន្យទាំងស្រុងពេលចូលបរិនិព្វាន។',
    mE: 'Karma lapses into Ahosi-kamma via: window expiration, destructive severance, favorable buffering, and total cessation at Parinibbāna.',
    tie: 'យន្តការអហោសិកម្ម ៤ ប្រការ · /kamma#ahosi-kamma', to: '/kamma#ahosi-kamma',
  },
  {
    qK: 'យោងតាមគម្ពីរធម្មបទដ្ឋកថា ហេតុអ្វីបានជាព្រះមោគ្គល្លានមានឫទ្ធិអស្ចារ្យ នៅតែមិនអាចគេចផុតពីកម្មចាស់សម្លាប់ឪពុកម្តាយ ហើយហេតុអ្វីកម្មនោះមិនក្លាយជាអហោសិកម្មមុនបរិនិព្វាន?',
    qE: 'Why could Ven. Mahāmoggallāna, foremost in psychic powers, not escape past kamma of killing his parents, and why did it not become ahosi-kamma before Parinibbāna?',
    aK: 'ព្រះមោគ្គល្លានមិនអាចគេចផុតពីពួកចោរ ហើយកម្មនោះមិនទាន់ក្លាយជាអហោសិកម្ម ពីព្រោះ៖ (១) កម្លាំងកម្មធំជាងកម្លាំងឫទ្ធិ៖ កម្មសម្លាប់ម្តាយឪពុកជា «គរុកម្ម» (អនន្តរិយកម្ម) ដែលមានសន្ទុះខ្លាំងក្លាបំផុត។ លើកទី ១ និងទី ២ លោកប្រើឫទ្ធិគេចបាន តែដល់លើកទី ៣ កម្លាំងកម្មបច្ច័យបានចូលមកគ្របសង្កត់ ធ្វើឱ្យឫទ្ធិគាំងស្ទះ មិនអាចចូលឈានបាន លោកក៏ព្រមទទួលផលកម្មស្ងប់ស្ងៀមតាមធម្មបទគាថា ១២៧ («គ្មានទីណាគេចផុតពីផលនៃកម្មឡើយ»)។ (២) ហេតុអ្វីមិនទាន់ជាអហោសិកម្ម? ព្រោះសំណល់កម្ម (កម្មាវសេស) ជា «អបរាបរិយវេទនីយកម្ម» ដែលដេកសម្ងំរង់ចាំឱកាសឱ្យផល ដរាបណារូបខន្ធនៅមាន។ ជាតិនេះជា «អន្តិមសរីរៈ» (ជាតិចុងក្រោយបង្អស់) របស់លោក គឺជាឱកាសចុងក្រោយ (Last Chance) របស់កម្មមុនពេលលោកចូលបរិនិព្វានរលត់ខន្ធអស់ ដូច្នេះកម្មត្រូវតែសម្រុកឱ្យផលលើរូបកាយដោយពួកចោរវាយកម្ទេចឆ្អឹងឱ្យបែកម៉ដ្ឋដូចគ្រាប់ល្ង។ (៣) ទុក្ខកើតតែលើរូបកាយ (រូបក្ខន្ធ) ប៉ុន្តែចិត្តលោកជាអរហន្ត តម្កល់ក្នុងឧបេក្ខា មិនរងទុក្ខឡើយ។ លុះលោកចូលអនុបាទិសេសបរិនិព្វាន ទើបកម្មទាំងអស់រលត់ក្លាយជាអហោសិកម្មជាស្ថាពរ។',
    aE: 'Ven. Mahāmoggallāna could not escape the bandits and the kamma did not lapse into ahosi-kamma beforehand because: (1) Kamma supersedes psychic power: Killing parents is Garuka-kamma (heaviest gravity). He slipped away twice via iddhi, but on the 3rd attempt, kammic momentum overpowered his faculties, preventing entry into jhāna and jamming psychic faculties — he willingly submitted to the ripening vipāka per Dhammapada 127 ("Nowhere can one escape kamma"). (2) Why not Ahosi-kamma yet? The residual charge (kammāvasesa) was Aparāpariya-vedanīya-kamma, which cannot lapse as long as aggregates persist. Because this was his Antimasarīra (final lifetime), it was kamma’s ultimate window before Parinibbāna dissolved the aggregates forever — compelling it to mature on his body with 500 bandits shattering his bones like sesame seeds. (3) Only the physical aggregates endured damage; his purified arahant mind rested in unshakable equanimity. Only upon entering Anupādisesa-Parinibbāna did all remaining unripened kamma permanently extinguish into Ahosi-kamma.',
    mK: 'គ្មានឫទ្ធិណាធំជាងកម្លាំងកម្មឡើយ · អបរាបរិយវេទនីយកម្មត្រូវតែឆ្លៀតឱ្យផលលើជាតិចុងក្រោយ · ទុក្ខមានលើរូបកាយ តែចិត្តអរហន្តមិនរងទុក្ខ។',
    mE: 'No psychic power surpasses kamma; residual unripened kamma seizes the final lifetime to mature; physical pain exists, but the awakened mind is untouched.',
    tie: 'រឿងព្រះមហាមោគ្គល្លានត្ថេរ និងកម្មចាស់ · /stories#story-moggallana',
    to: '/stories#story-moggallana',
  },
  {
    qK: 'តើព្រះពុទ្ធអាចយល់ពី Logic នៃការសរសេរកូដ (Coding) និងការបង្កើតម៉ាស៊ីនឡានដែរឬទេ ហើយហេតុអ្វីព្រះអង្គមិនបង្កើតតាំងពី ២,៦០០ ឆ្នាំមុន?',
    qE: 'Could the Buddha understand programming logic, coding, and automobile mechanics, and why did he not invent them 2,600 years ago?',
    aK: 'តាមគោលការណ៍ ព្រះពុទ្ធអាចដឹង និងយល់បានទាំងអស់យ៉ាងធ្លុះធ្លាយ៖ (១) Logic នៃការសរសេរកូដ (Coding & Algorithm) ដូចជា State Machine, IF/ELSE, LOOPS គ្រាន់តែជាការយកច្បាប់ «បច្ច័យ និងបដិច្ចសមុប្បាទ» (Idappaccayatā / Causal Conditionality) មកសរសេរជានិមិត្តសញ្ញាសន្មត។ ព្រះពុទ្ធមានព្រះសព្វញ្ញុតញាណ (Sabbaññuta-ñāṇa) អាចផ្ចង់ដឹងស្ថាបត្យកម្មទិន្នន័យបានជ្រៅជាងអ្នកបង្កើតទៅទៀត។ (២) ការបង្កើតម៉ូតូ ឡាន (Mechanics & Physics) ដំណើរការដោយកម្លាំងកម្ដៅ ខ្យល់ ភ្លើង និងថាមពល ដែលសុទ្ធតែជា «រូបធម៌» (Rūpa)។ ព្រះពុទ្ធបានវិភាគបំបែករូបធាតុដល់កម្រិតតូចបំផុតគឺ «រូបកលាប» (Rūpa-kalāpa) និងអន្តរកម្មនៃមហាភូតរូប ៤។ (៣) ហេតុអ្វីមិនបង្កើតកាលពី ២,៦០០ ឆ្នាំមុន? យោងតាម «សឹម្សបាសូត្រ» (SN 56.31) ព្រះពុទ្ធប្រៀបធៀបចំណេះដឹងដែលទ្រង់ដឹងដូចស្លឹកឈើក្នុងព្រៃ តែអ្វីដែលយកមកបង្រៀនមានត្រឹមស្លឹកឈើមួយក្តាប់ដៃ (អរិយសច្ច ៤) ពីព្រោះបច្ចេកវិទ្យាលោកិយមិននាំទៅរកការរំលត់ទុក្ខផ្លូវចិត្តឡើយ។ មនុស្សទោះបីមានឡានទំនើប ឬ AI ក៏នៅតែជួបទុក្ខ កើត ចាស់ ឈឺ ស្លាប់ដដែល។ ព្រះពុទ្ធមិនខ្ជះខ្ជាយពេលវេលានៃការត្រាស់ដឹងលើរបស់ដែលគ្រាន់តែជាគ្រឿងបម្រើកាមគុណក្នុងសង្សារវដ្តឡើយ។',
    aE: 'In principle, the Buddha comprehended all these seamlessly: (1) Programming logic (algorithms, state machines, conditional branches IF/ELSE, loops) is simply a physical/symbolic application of Idappaccayatā (Causal Conditionality / Dependent Origination). Endowed with Sabbaññuta-ñāṇa (supreme omniscience), the Buddha could fathom data flows and system logic far deeper than human engineers. (2) Mechanics and vehicles operate via thermodynamics, heat, air, and combustion — all of which are physical phenomena (Rūpa). The Buddha scrutinized physical matter down to Rūpa-kalāpa (subatomic clusters) and the four primary elements (mahābhūta). (3) Why not invent them 2,600 years ago? Per the Siṃsapā Sutta (SN 56.31), the Buddha’s realization was vast like all leaves in the forest, but what he taught was merely a single handful (the Four Noble Truths) — because secular technology cannot eliminate psychological suffering. Even with supercars or advanced AI, human beings remain bound by birth, aging, illness, death, and mental afflictions. The Buddha would not divert his awakening to transient devices that only serve sensual attachment in saṃsāra.',
    mK: 'កូដ និងគ្រឿងយន្តជាទម្រង់នៃបច្ច័យ និងរូបធម៌ · ព្រះពុទ្ធដឹងដូចស្លឹកឈើក្នុងព្រៃ តែបង្រៀនត្រឹមស្លឹកឈើមួយក្តាប់ដៃ ដើម្បីរំលត់ទុក្ខពិតប្រាកដ។',
    mE: 'Code and mechanics are expressions of conditionality and matter; the Buddha knew boundless things like the leaves of a forest, but taught only the handful needed to end suffering.',
    tie: 'សឹម្សបាសូត្រ (ស្លឹកឈើមួយក្តាប់ដៃ) · /suttas#sutta-simsapa',
    to: '/suttas#sutta-simsapa',
  },
  {
    qK: 'យោងតាមគម្ពីរអភិធម្ម តើរូបកលាប (Rūpa-kalāpa) មានដំណើរការយ៉ាងដូចម្ដេច ហើយស្រដៀងគ្នានឹងទ្រឹស្តីរូបវិទ្យាកង់ទិច (Quantum Physics) យ៉ាងណា?',
    qE: 'According to Abhidhamma, how do Rūpa-kalāpa operate, and how do they correspond to Quantum / Subatomic Physics?',
    aK: 'នៅក្នុងគម្ពីរអភិធម្ម គ្មានរូបធាតុណាមួយរឹងមាំ ឬនៅនឹងមួយកន្លែងឡើយ។ ព្រះពុទ្ធបានបំបែករូបរហូតដល់កម្រិតល្អិតបំផុតហៅថា «រូបកលាប» (បណ្តុំរូបធាតុតូចៗដែលកើតរលត់រាប់ពាន់កោដិដងក្នុងមួយវិនាទី)។ កញ្ចប់តូចបំផុតគឺ «សុទ្ធដ្ឋកកលាប» មានធាតុ ៨ ជាប់ស្អិតរមួត (ដី ទឹក ភ្លើង ខ្យល់ + ពណ៌ ក្លិន រស ឱជា)។ ចំណុចស្រដៀងគ្នានឹង Quantum Physics រួមមាន៖ (១) គ្មានដុំរឹងពិតប្រាកដ — អាតូមមានចន្លោះទទេ 99.9999999% ភាគល្អិតជាកញ្ចប់រលកថាមពល (Wave-packets) (២) ការកើតរលត់រាប់កោដិដង/វិនាទី ត្រូវគ្នានឹង Quantum Fluctuations (10⁻²³ s) (៣) កម្លាំងធាតុទឹក (Cohesion) ត្រូវនឹង Strong Nuclear Force, ធាតុភ្លើងត្រូវនឹង Thermal Energy, ធាតុខ្យល់ត្រូវនឹង Kinetic Momentum (៤) ឥទ្ធិពលនៃចិត្តលើរូប (ចិត្តជរូប) ស្រដៀងគ្នានឹង Observer Effect ក្នុង Quantum។ យ៉ាងណាក៏ដោយ រូបវិទ្យាទំនើបសិក្សាខាងក្រៅដើម្បីបង្កើតសម្ភារៈ ចំណែកអភិធម្មបំបែករូបដោយភាវនាមយបញ្ញា ដើម្បីឃើញត្រៃលក្ខណ៍ កម្ចាត់ការប្រកាន់តួខ្លួន (សក្កាយទិដ្ឋិ) និងរំលត់ទុក្ខដល់ព្រះនិព្វាន។',
    aE: 'In the Abhidhamma, physical matter possesses no solid, static core. Matter exists only in microscopic clusters called "Rūpa-kalāpa", vibrating and flashing in and out of existence billions of times per second (17 mind-moments lifespan). The minimal "Pure Octad" (Suddhaṭṭhaka) consists of 8 inseparable properties: mass/solidity, cohesive fluid binding, thermal energy, and kinetic oscillation, combined with color, odor, taste, and nutrition. Parallels to Quantum Physics: (1) No permanent solidity — 99.9999999% empty space with subatomic wave-packets; (2) Incessant arising-passing mirrors quantum fluctuations (10⁻²³ s); (3) Āpo cohesion reflects strong nuclear force, Tejo thermal energy, and Vāyo kinetic oscillation; (4) Mind-born matter (cittaja-rūpa) echoes the Observer Effect. Crucially, physics explores the outer cosmos to build machines, while Buddhism uses meditative insight to pierce the illusion of selfhood (sakkāya-diṭṭhi) and attain Nibbāna.',
    mK: 'រូបកលាបជាកញ្ចប់រលកធាតុដែលកើតរលត់រាប់ពាន់កោដិដង/វិនាទី · វិទ្យាសាស្ត្រដឹងខាងក្រៅដើម្បីបង្កើតសម្ភារៈ · ធម៌ដឹងខាងក្នុងដើម្បីរំលត់ទុក្ខ។',
    mE: 'Rūpa-kalāpas are subatomic wave-packets arising and passing billions of times a second; science uses this to build machines, while Dhamma uses it to end suffering.',
    tie: 'រូបកលាប និងរូបវិទ្យាកង់ទិច · /abhidhamma#rupa-kalapa',
    to: '/abhidhamma#rupa-kalapa',
  },
  {
    qK: 'តើពាក្យថា «ឈាន» (Jhāna) មានន័យដូចម្ដេច មានប៉ុន្មានកម្រិត របៀបបដិបត្តិ និងពេលស្លាប់ទៅតើទៅកើតនៅឯណា?',
    qE: 'What does "Jhāna" mean, how many levels exist, how is it attained, and where is one reborn upon death?',
    aK: '«ឈាន» (Jhāna) ជាសមាធិកម្រិតខ្ពស់បំផុត (អប្បនាសមាធិ) ដែលមានន័យ ២ យ៉ាង៖ ឈាយតិ (ការសញ្ជឹងគិតផ្ដោតលើអារម្មណ៍កម្មដ្ឋានតែមួយ) និង ឈាបេតិ (ការដុតកម្ទេចនីវរណធម៌ ៥ ឱ្យស្ងប់រលត់)។ ឈានមាន ៨ កម្រិត គឺ រូបឈាន ៤ (បឋមជ្ឈាន មានអង្គ ៥, ទុតិយជ្ឈាន លះវិតក្ក-វិចារ, តតិយជ្ឈាន លះបីតិ, ចតុត្ថជ្ឈាន នៅសល់ឧបេក្ខា-ឯកគ្គតា ដង្ហើមរលត់ស្ងប់ឈឹង) និង អរូបឈាន ៤ (អាកាសា, វិញ្ញាណា, អាកិញ្ចញ្ញា, នេវសញ្ញា)។ របៀបបដិបត្តិ៖ តម្កល់សីលបរិសុទ្ធ ជ្រើសរើសកម្មដ្ឋាន (អានាបានសតិ ឬកសិណ) ចម្រើនឆ្លងកាត់ បរិកម្មនិមិត្ត -> ឧគ្គហនិមិត្ត -> បដិភាគនិមិត្ត (ពន្លឺថ្លាឈ្វេងដូចកែវមណី) រួចទម្លាក់ចិត្តចូលក្នុងអប្បនាសមាធិ។ ពេលស្លាប់ទៅ៖ ឈានជាគរុកម្មបុណ្យ បើមិនសាបសូន្យ នឹងបាញ់វិញ្ញាណឱ្យទៅកើតនៅ «ឋានព្រហ្មលោក» ភ្លាមៗ (រូបព្រហ្ម ១៦ ជាន់ និងអរូបព្រហ្ម ៤ ជាន់ អាយុរាប់ម៉ឺនមហាកប្ប)។ ព្រះពុទ្ធដាស់តឿនថា ឈានគ្រាន់តែជាសមថៈ «ថ្មសង្កត់ស្មៅ» មិនទាន់កាត់ឫសកិលេសទេ ត្រូវយកថាមពលស្ងប់នៃឈានមកចម្រើន «វិបស្សនាបញ្ញា» ទើបសម្រេចព្រះនិព្វានបាន។',
    aE: 'Jhāna is full meditative absorption (appanā-samādhi) bearing two etymological meanings: Jhāyati (steadfast contemplation on a single meditation object) and Jhāpeti (incinerating the 5 hindrances). There are 8 Jhānas: 4 Form Jhānas (1st with 5 factors, 2nd dropping thought, 3rd dropping rapture, 4th resting in pure equanimity with breath stilled) and 4 Formless Jhānas (boundless space, boundless consciousness, nothingness, neither-perception-nor-non-perception). Attainment requires: purified virtue, a meditation subject (breath or kasiṇa), progressing through Preparatory, Acquired, and Counterpart Signs (paṭibhāga-nimitta) into full absorption. Post-mortem destiny: Jhāna is heavyweight wholesome kamma (garuka-kusala); if uncorrupted at death, it ensures immediate rebirth in the Brahma realms (16 form tiers or 4 formless tiers, lasting up to 84,000 Mahākappas). The Buddha warned that Jhāna is merely temporary suppression ("a stone on grass"); one must harness its laser-sharp stillness to cultivate Vipassanā insight to uproot latent defilements and realize Nibbāna.',
    mK: 'ឈានជាសមាធិជ្រៅដុតកម្ទេចនីវរណៈ · នាំឱ្យទៅកើតឋានព្រហ្ម · ត្រូវយកឈានជាគ្រឹះចម្រើនវិបស្សនាបញ្ញា ទើបដល់និព្វាន។',
    mE: 'Jhāna is deep absorption that incinerates hindrances and leads to the Brahma realms; use it as a foundation for insight to reach Nibbāna.',
    tie: 'ឈានទាំង ៨ កម្រិត និងភពកំណើត · /meditation#jhana-deep',
    to: '/meditation#jhana-deep',
  },
  {
    qK: 'តើឧបមានៃ «បុរសត្រូវព្រួញបំពុលពិស» ក្នុងចូឡមាលុង្ក្យោវាទសូត្រ មានអត្ថន័យយ៉ាងណា ហើយហេតុអ្វីព្រះពុទ្ធមិនឆ្លើយបញ្ហាអព្យាក្រឹត្យទាំង ១០?',
    qE: 'What is the meaning of the "Parable of the Poisoned Arrow" in the Cūḷamāluṅkya Sutta, and why did the Buddha refuse to answer the 10 speculative questions?',
    aK: 'ព្រះភិក្ខុមាលុង្ក្យបុត្តបានគំរាមលាចាកសិក្ខាបទ ប្រសិនបើព្រះពុទ្ធមិនព្រមបកស្រាយបញ្ហាទស្សនវិជ្ជាអរូបីទាំង ១០ (លោកទៀងឬមិនទៀង, មានទីបញ្ចប់ឬគ្មាន, ព្រលឹងនិងកាយជារបស់តែមួយឬផ្សេងគ្នា, ស្លាប់ទៅនៅមានឬអត់...)។ ព្រះពុទ្ធបានលើកឧបមាថា៖ បុរសម្នាក់ត្រូវព្រួញបំពុលពិសបាញ់ចំទ្រូង ពេលគ្រូពេទ្យរៀបនឹងដកព្រួញ ស្រាប់តែបុរសនោះស្រែកឃាត់ថា «កុំអាលដក! ខ្ញុំត្រូវដឹងសិនថា អ្នកបាញ់ឈ្មោះអី វណ្ណៈណា ធ្នូធ្វើពីឈើអី រោមស្លាបសត្វអី ផ្លែដែកអី...» បុរសនោះច្បាស់ជាស្លាប់មុននឹងដឹងចម្លើយ។ ព្រះពុទ្ធបញ្ជាក់ថា មនុស្សយើងកំពុងត្រូវព្រួញនៃជាតិ ជរា ព្យាធិ និងមរណៈបាញ់ចំទ្រូង ដូច្នេះកិច្ចបន្ទាន់បំផុតគឺការ «ដកព្រួញរំលត់ទុក្ខក្នុងបច្ចុប្បន្ន» មិនមែនការជជែករឿងអរូបីឥតប្រយោជន៍ឡើយ។ ព្រះពុទ្ធមិនឆ្លើយរឿងទាំង ១០ (អព្យាកតវត្ថុ) ពីព្រោះមិននាំមកនូវប្រយោជន៍ (ន អត្ថសំហិតំ) មិនមែនជាគ្រឹះបរិសុទ្ធ និងមិននាំទៅរកព្រះនិព្វាន។ អ្វីដែលព្រះអង្គបង្រៀនគឺ «អរិយសច្ច ៤» ដែលជាវិធីសង្គ្រោះជីវិតជាក់ស្តែង។',
    aE: 'Ven. Māluṅkyaputta threatened to disrobe unless the Buddha answered 10 metaphysical conundrums (whether the cosmos is eternal or finite, whether soul and body are identical, whether the Tathāgata exists after death, etc.). The Buddha responded with the Parable of the Poisoned Arrow: a man shot by a poisoned arrow insists on knowing the archer’s name, caste, bow material, and arrow feather before allowing the surgeon to extract the shaft — he would perish long before receiving those answers. The Buddha proclaimed that humanity is already pierced by the poisoned arrow of birth, aging, illness, death, and mental afflictions; our urgent duty is removing the arrow right now, not speculating on insoluble metaphysical questions. The Buddha set aside those 10 questions (Abyākata-vatthu) because they are unprofitable (na atthasaṃhitaṃ), non-essential to holiness, and do not lead to Nibbāna. Instead, he taught the Four Noble Truths — the emergency surgery for liberating the mind.',
    mK: 'កុំរវល់តែចង់ដឹងឈ្មោះអ្នកបាញ់ រហូតភ្លេចដកព្រួញពិសចេញពីទ្រូង · ព្រះពុទ្ធបង្រៀនឱ្យដកព្រួញទុក្ខក្នុងបច្ចុប្បន្ន មិនមែនវង្វេងក្នុងទ្រឹស្តីស្មានៗឡើយ។',
    mE: 'Do not obsess over the archer’s identity while ignoring the poisoned shaft in your heart; Dhamma is the emergency surgery to extinguish suffering right here and now.',
    tie: 'ឧបមាព្រួញបាញ់ (ចូឡមាលុង្ក្យោវាទសូត្រ) · /my-gems#arrow-parable',
    to: '/my-gems#arrow-parable',
  },
  {
    qK: 'យោងតាមចក្កវត្តិសីហនាទសូត្រ តើអាយុកាលមនុស្សជាតិវិវត្តពី ១០ ឆ្នាំ ឡើងទៅដល់ «អសង្ខេយ្យឆ្នាំ» ហើយធ្លាក់មកវិញដោយសារបច្ច័យធម៌អ្វីខ្លះ?',
    qE: 'According to the Cakkavatti-sīhanāda Sutta, how does human lifespan evolve from 10 years up to Asaṅkheyya and descend again through psychophysical laws?',
    aK: 'នៅក្នុងចក្កវត្តិសីហនាទសូត្រ (DN 26) ព្រះពុទ្ធបានលាតត្រដាងថា អាយុកាល រូបកាយ និងបរិស្ថានរបស់មនុស្ស វិវត្តស្របគ្នាទាំងស្រុងជាមួយនឹងកម្រិតនៃការរក្សាសីលធម៌។ កាលណាកិលេសកើនឡើងដល់កម្រិតសម្លាប់គ្នា (សត្ថន្តរកប្ប) អាយុធ្លាក់ចុះមកត្រឹម ១០ ឆ្នាំ។ ក្រោយពេលមនុស្សភ្ញាក់រលឹក ហើយចាប់ផ្តើមសមាទានសីលម្តងមួយជំហាន៖ លះបង់ការសម្លាប់ (អាយុកើនដល់ ២០ ឆ្នាំ), លះបង់ការលួច (ឡើងដល់ ៤០ ឆ្នាំ), វៀរចាកការកាមេសុ (ឡើងដល់ ៨០ ឆ្នាំ), វៀរមុសាវាទ (ឡើងដល់ ១៦០ ឆ្នាំ)... រហូតដល់បំពេញកុសលកម្មបថ ១០ ពេញលេញ ឡើងដល់ ៨០,០០០ ឆ្នាំ (សម័យព្រះសិរិអារ្យមេត្រី) និងឡើងដល់អសង្ខេយ្យឆ្នាំ (កាយមានពន្លឺដូចទេវតា ហោះហើរបាន)។ ប៉ុន្តែពេលរស់នៅយូរពេក កើតសេចក្តីប្រមាទ (Pamāda) ភ្លេចស្លាប់ គិតស្មានថាខ្លួនជាអមតៈ កិលេសរើឡើងវិញ ក៏ធ្លាក់មកវិញជាវដ្តចក្រ!',
    aE: 'In the Cakkavatti-sīhanāda Sutta (DN 26), the Buddha revealed that biological lifespan, cellular radiance, and ecology directly mirror collective moral consciousness. When defilements peaked in the 7-day slaughter era, lifespan dropped to 10 years. Upon moral awakening, humanity progressively adopted virtues: renouncing killing (lifespan doubled to 20 yrs), renouncing stealing (40 yrs), renouncing sexual misconduct (80 yrs), renouncing lies (160 yrs)... up to full 10 wholesome actions (80,000 yrs, the era of Metteyya Buddha) and pure translucent states (Asaṅkheyya years). Eventually, extreme longevity spawned heedlessness (pamāda) and the illusion of immortality, rekindling defilements and plunging lifespan back down in an ongoing cycle.',
    mK: 'អាយុ សុខភាព និងបរិស្ថាន ជាកញ្ចក់ឆ្លុះបញ្ចាំងពីគុណភាពនៃចិត្ត · សីលនាំឱ្យជីវិតរីកចម្រើន ប្រមាទនាំឱ្យធ្លាក់ចុះ។',
    mE: 'Lifespan, biological health, and planetary ecology mirror mental purity; virtue elevates humanity while heedlessness precipitates decay.',
    tie: 'ដំណើរវិវត្តអាយុកាលមនុស្ស (ចក្កវត្តិសីហនាទសូត្រ) · /my-gems#lifespan-evolution',
    to: '/my-gems#lifespan-evolution',
  },
  {
    qK: 'យោងតាមកុរុធម្មជាតក តើសីលធម៌កុរុធម្មមានភាពម៉ត់ចត់យ៉ាងណា ហើយហេតុអ្វីនគរកលិង្គរដ្ឋត្រូវចម្លងយកទៅប្រតិបត្តិដើម្បីរំលត់គ្រោះរាំងស្ងួត?',
    qE: 'According to Kurudhamma Jātaka, how pure was Kurudhamma and why did drought-stricken Kaliṅga transcribe it on golden plates to end drought?',
    aK: 'នៅក្នុងកុរុធម្មជាតក (ជាតកលេខ ២៧៦) «កុរុធម្ម» គឺជាការរក្សាសីល ៥ ដ៏បរិសុទ្ធស្អាតបំផុតរបស់ស្តេច និងប្រជាជនដែនកុរុ (បុគ្គលទាំង ១១ រូប រួមមានស្តេច មាតា អគ្គមហេសី ឧបរាជ បុរោហិត អាមាត្យវាស់ដី នាយសារថី សេដ្ឋី អាមាត្យវាស់ស្រូវ នាយឆ្មាំទ្វារ និងស្រីពេស្យា) ដែលមានការប្រុងប្រយ័ត្នខ្ពស់ដល់កម្រិតសូម្បីតែការសង្ស័យនឹងកំហុសដ៏ល្អិតល្អោច (កុក្កុច្ចៈ) ក៏ចាត់ទុកជាកំហុស។ ពេលនគរកលិង្គរដ្ឋរាំងស្ងួត ស្តេចកលិង្គបានសុំដំរីមង្គលអញ្ជនវសភៈ តែភ្លៀងនៅតែមិនធ្លាក់។ លុះដឹងថាហេតុពិតមកពី «កម្លាំងសីលធម៌» ស្តេចកលិង្គបានចាត់រាជទូតមកចារឹកកុរុធម្មលើបន្ទះមាស (សុវណ្ណបដ្ត)។ ពេលមនុស្សទូទាំងនគរកលិង្គរដ្ឋសមាទានសីល ៥ ព្រមគ្នា ភ្លៀងមេឃធំបានបង្អុរចុះមកភ្លាម រំលត់គ្រោះរាំងស្ងួតទាំងស្រុង។',
    aE: 'In Kurudhamma Jātaka (No. 276), Kurudhamma represents the immaculate 5 Precepts observed by the King and 11 citizens of Kuru (King, Queen Mother, Chief Queen, Viceroy, Purohita, Surveyor, Charioteer, Banker, Grain Measurer, Gatekeeper, and Courtesan) with supreme conscience where even micro-doubts (kukkucca) caused self-reproach. When Kaliṅga suffered severe drought, requesting Kuru’s rain-elephant brought no rain; realizing virtue was the true cause, Kaliṅga transcribed Kurudhamma onto golden plates. When the entire kingdom upheld the 5 Precepts, massive rains immediately quenched the drought.',
    mK: 'សីលមិនមែនគ្រាន់តែជាច្បាប់ខាងក្រៅទេ តែជាមនសិការស្អាតស្អំដល់កម្រិតល្អិតបំផុត · កម្លាំងសីលរួមអាចរំលត់គ្រោះរាំងស្ងួត និងនាំមកនូវសេចក្តីសុខសាន្តដល់នគរ។',
    mE: 'Precepts are an immaculate inner conscience down to the finest thought; collective virtue can quench droughts and restore prosperity to a nation.',
    tie: 'កុរុធម្មជាតក (ជាតកលេខ ២៧៦) · /my-gems#kurudhamma-jataka',
    to: '/my-gems#kurudhamma-jataka',
  },
  {
    qK: 'យោងតាមគម្ពីរអភិធម្ម និងអធម្មិកសូត្រ តើកម្លាំងសីល ៥ បញ្ជាធាតុអាកាស (ឧតុនិយាម) ឱ្យមានពពក និងភ្លៀងធ្លាក់តាមរដូវកាលយ៉ាងដូចម្ដេច?',
    qE: 'According to Abhidhamma and the Adhammika Sutta, how does the moral power of the 5 Precepts physically govern Utu-niyāma to generate clouds and timely rain?',
    aK: 'ទំនាក់ទំនងរវាងសីល ៥ និងធាតុអាកាស ដំណើរការតាមរយៈចំណងរវាង កម្មនិយាម និង ឧតុនិយាម ដោយមាន សាធារណកម្ម (កម្មរួម) កំណត់តុល្យភាពនៃមហាភូតរូប ៤។ ពាហិររូប (រូបខាងក្រៅ ដូចជាពពក និងភ្លៀង) កើតពីឧតុជរូប ដែលជា «ឧបភោគសម្បត្តិ» សម្រាប់ទទួលវិបាកកម្ម។ កាលណាមនុស្សមានសីល ៥ បរិសុទ្ធ៖ កម្ដៅទោសៈរលត់ -> តេជោធាតុមានតុល្យភាព -> អាបោធាតុរំហួតនិងចងក្រងជាពពកក្រាស់ -> វាយោធាតុរុញក្បួនពពកស្មើល្អគ្មានព្យុះ -> កើតជា «កាលវស្ស» (ភ្លៀងធ្លាក់ត្រូវតាមរដូវ ទឹកថ្លាត្រជាក់ បង្កើតភោគផលកសិកម្ម)។ អធម្មិកសូត្រ (AN 4.70) បញ្ជាក់ថា កាលណាមនុស្សអសីលធម៌ ព្រះអាទិត្យ ព្រះចន្ទ ផ្កាយ ដើរខុសគន្លង ខ្យល់ព្យុះបោកបក់ ភ្លៀងរាំងស្ងួត; ផ្ទុយទៅវិញ កាលណាមនុស្សមានសីលធម៌ ធម្មជាតិដើរទៀងទាត់ ភ្លៀងធ្លាក់ត្រូវរដូវកាល!',
    aE: 'The connection between the 5 Precepts and weather operates through Kamma-niyāma and Utu-niyāma, mediated by Collective Karma. External matter (clouds, rain) is Utuja-rūpa serving as the experiential habitat (Upabhoga-sampatti) for experiencing karmic fruits. Collective virtue quenches psychic heat -> Tejo thermal balance -> Āpo cohesive cloud clustering -> Vāyo smooth propulsion -> Kālavassa (timely, pure seasonal rain). The Adhammika Sutta (AN 4.70) validates that moral degradation causes erratic planetary orbits, storms, and droughts, whereas collective righteousness ensures cosmic order and bountiful rain.',
    mK: 'ចិត្តនិយាម កំណត់ រូបនិយាម · កុសលចិត្ត និងសីល ៥ ធ្វើឱ្យធាតុភ្លើង ខ្យល់ ទឹក មានលំនឹង បង្កជាភ្លៀងកាលវស្សត្រូវតាមរដូវកាល។',
    mE: 'Mental consciousness shapes physical reality; virtue and the 5 Precepts balance heat, wind, and water to bring timely, life-giving rain.',
    tie: 'យន្តការអភិធម្ម និងធាតុអាកាស · /my-gems#sila-weather-physics',
    to: '/my-gems#sila-weather-physics',
  },
  {
    qK: 'យោងតាមគម្ពីរអភិធម្ម និងវិសុទ្ធិមគ្គ តើដំណើរការនៃពេលដែលមនុស្សម្នាក់ស្លាប់ (មរណាសន្នសម័យ) និងការតភ្ជាប់ជាតិថ្មី មានដំណើរការយ៉ាងលម្អិតដូចម្ដេចខ្លះ?',
    qE: 'According to Abhidhamma and Visuddhimagga, what is the exact step-by-step process of death (Maraṇāsanna) and instant rebirth?',
    aK: 'នៅក្នុងគម្ពីរអភិធម្ម និងវិសុទ្ធិមគ្គ ការស្លាប់ឆ្លងកាត់ ៥ ដំណាក់កាលធំៗ ៖ (១) ធាតុទាំង ៤ រលំដួលជាលំដាប់ — ដី (រាងកាយធ្ងន់ដូចភ្នំសង្កត់) -> ទឹក (មាត់បំពង់កស្ងួតហួតហែង បែកញើសស្អិត) -> ភ្លើង (រាងកាយត្រជាក់ពីចុងជើងឡើងលើ នៅសល់កម្ដៅចុងក្រោយត្រង់បេះដូង) -> ខ្យល់ (ដង្ហើមខ្លី ដង្ហក់ខ្យល់កាត់កាយរហូតដល់ដាច់ដង្ហើម) (២) វិញ្ញាណដកថយពីទ្វារទាំង ៥ មកប្រមូលផ្តុំនៅ «មនោទ្វារ» ក្នុងបេះដូង (៣) និមិត្ត ៣ យ៉ាងលេចឡើងនៅមនោទ្វារ — កម្ម (រូបភាពទង្វើកន្លងមក), កម្មនិមិត្ត (ឧបករណ៍/សញ្ញា ដូចជាផ្កាឈូក ព្រះសង្ឃ ឬកាំបិត សត្វយំ), គតនិមិត្ត (សញ្ញាទីកន្លែងថ្មី ដូចជាប្រាសាទកែវ ឬភ្លើងនរក) (៤) មរណាសន្នវិថីដំណើរការ ជវនចិត្ត ៥ ខណៈ (ចុះខ្សោយពី ៧ មក ៥) កំណត់អារម្មណ៍ចុងក្រោយ រួចចុតិចិត្តកើតឡើងកាត់ផ្តាច់រូបកាយចាស់ (៥) គ្មានអន្តរភព (គ្មានការរង់ចាំ ៧ ឬ ៤៩ ថ្ងៃក្នុងថេរវាទ) មួយខណៈបន្ទាប់ពីចុតិចិត្តរលត់ បដិសន្ធិចិត្តកើតឡើងក្នុងភពថ្មីភ្លាមៗ គ្មានចន្លោះពេល ប្រៀបដូចត្រាដក់លើដីឥដ្ឋ ឬភ្លើងទៀនអុជបន្តគ្នា។',
    aE: 'In Abhidhamma and Visuddhimagga, death systematically proceeds in 5 stages: (1) 4 elements collapse sequentially — Earth (body feels crushed), Water (extreme parched throat, cold sweat), Fire (limbs turn icy cold progressing to heart), Wind (ragged agonal breathing ceases); (2) 5 sense doors shut down, converging into the Mind Door at the heart base; (3) 3 Death Visions manifest — Kamma (past deeds), Kamma-nimitta (symbols: lotus/monks vs weapons/slaughtered animals), Gati-nimitta (destinations: celestial mansions vs fires of hell); (4) Maraṇāsanna-vīthi with 5 Javana moments encapsulates the final state, followed by Cuti-citta severing life; (5) Instant rebirth (Paṭisandhi-citta) emerges in the next realm with zero gap (no 7 or 49-day Bardo in Theravāda), like a stamp on clay or one flame lighting another.',
    mK: 'ការស្លាប់ជាការរលំដួលនៃធាតុ ៤ និងការបិទទ្វារវិញ្ញាណ · ជវនចិត្ត ៥ ខណៈ ចាប់យកនិមិត្ត រួចចុតិចិត្តកាត់ផ្តាច់ · បដិសន្ធិចិត្តកើតឡើងក្នុងភពថ្មីភ្លាមៗ គ្មានចន្លោះពេល។',
    mE: 'Death is the orderly collapse of the 4 physical elements and sense faculties; 5 Javana moments grasp the final vision, cuti-citta severs the link, and paṭisandhi-citta arises instantaneously in the next existence.',
    tie: 'ដំណើរការពេលស្លាប់ & បដិសន្ធិចិត្ត · /my-gems#death-rebirth-process',
    to: '/my-gems#death-rebirth-process',
  },
  {
    qK: 'យោងតាមគម្ពីរអភិធម្ម ក្នុងករណីមនុស្សស្លាប់ភ្លាមៗមួយរំពេច (ដូចជា គ្រោះថ្នាក់ចរាចរណ៍ ឬគាំងបេះដូង) តើ «មរណាសន្នវិថី» ដំណើរការទាញយកកម្មយ៉ាងដូចម្ដេច បើគ្មានអ្នកនៅក្បែរជួយរំលឹកធម៌?',
    qE: 'According to Abhidhamma, in sudden deaths (car crash, cardiac arrest), how does Maraṇāsanna-vīthi process karma without anyone nearby to remind Dhamma?',
    aK: 'នៅក្នុងករណីស្លាប់ភ្លាមៗមួយរំពេច (គ្រោះថ្នាក់ចរាចរណ៍ គ្រាប់កាំភ្លើង ឬគាំងបេះដូង) មរណាសន្នវិថីនៅតែដំណើរការពេញលេញឥតចន្លោះ ពីព្រោះល្បឿននៃការកើតរលត់នៃចិត្តលឿនជាងប្រតិកម្មរូបវន្តរាប់លានដង (មួយខ្ទាត់ម្រាមដៃ ចិត្តកើតរលត់មួយកោដិខណៈ ខណៈមរណាសន្នវិថីត្រូវការតែ ១៧ ខណៈប៉ុណ្ណោះ)។ ពេលគ្មានអ្នកជួយរំលឹកធម៌ អាសន្នកម្មត្រូវបានរំលង ហើយ «អាចិណ្ណកម្ម» (ទម្លាប់ដែលធ្វើញឹកញាប់បំផុតក្នុងជីវិត) នឹងស្ទុះមកក្ដោបក្ដាប់ចិត្តចុងក្រោយ ១០០% ដូចជាប្រតិកម្មរហ័ស។ ដូចដែលព្រះពុទ្ធបានត្រាស់លួងលោមស្តេចមហានាម (SN 55.21) ៖ (១) ឧបមាដើមឈើទេរទៅទិសខាងកើត ពេលគេកាប់ផ្តាច់គល់ រមែងដួលទៅទិសខាងកើតដែលវាធ្លាប់ទេរទៅនោះឯង (២) ឧបមាឆ្នាំងប្រេងធ្លាក់ក្នុងទឹក ដុំថ្មធ្ងន់លិចចុះបាត តែប្រេងស្រាលរមែងអណ្តែតឡើង។ ដូច្នេះ របៀបរស់នៅប្រចាំថ្ងៃ សំខាន់ជាងរបៀបដែលយើងស្លាប់!',
    aE: 'In sudden fatalities (instant crash, cardiac arrest), Maraṇāsanna-vīthi executes fully because mental cognition operates millions of times faster than physical trauma (one trillion mind-moments per finger snap, while the death-vīthi takes merely 17 moments). Without deathbed reminders, near-death karma is bypassed, and "Āciṇṇa-kamma" (core habitual karma) takes command 100% as an instinctual reflex. As the Buddha comforted King Mahānāma (SN 55.21): (1) A tree leaning east inevitably falls east when cut; (2) In a broken pot in deep water, heavy stones sink but buoyant oil floats to the top. Thus, how we live daily matters far more than how we die!',
    mK: 'ចិត្តដើរលឿនជាងរូបវន្តរាប់លានដង · ពេលស្លាប់ភ្លាមៗ អាចិណ្ណកម្ម (ទម្លាប់ប្រចាំជីវិត) ក្ដោបក្ដាប់ចិត្តចុងក្រោយ ១០០% ប្រៀបដូចដើមឈើទេរទៅទិសណា រមែងដួលទៅទិសនោះ។',
    mE: 'Consciousness moves millions of times faster than physical trauma; in sudden death, habitual karma (āciṇṇa-kamma) determines the final trajectory, like a leaning tree falling where it inclined.',
    tie: 'ការស្លាប់ភ្លាមៗ & អាចិណ្ណកម្ម (មហានាមសូត្រ) · /my-gems#sudden-death-kamma',
    to: '/my-gems#sudden-death-kamma',
  },
  {
    qK: 'យោងតាមគម្ពីរអភិធម្ម ក្នុងករណីមនុស្សដែលដេកលក់ហើយស្លាប់ទៅតែម្តង (ស្លាប់ក្នុងដំណេក) ឬអ្នកជំងឺសន្លប់បាត់ស្មារតីយូរថ្ងៃ (Coma) តើមរណាសន្នវិថីដំណើរការទាញយកអារម្មណ៍ចុងក្រោយយ៉ាងដូចម្ដេច?',
    qE: 'According to Abhidhamma, when someone dies in their sleep or in a prolonged coma, how does Maraṇāsanna-vīthi process the final mental object?',
    aK: 'នៅក្នុងគម្ពីរអភិធម្ម ទោះបីជាមនុស្សដេកលក់ ឬសន្លប់ Coma ដែលមើលពីក្រៅឃើញស្ងប់ស្ងាត់ក៏ដោយ មនោទ្វារខាងក្នុងនៅតែដំណើរការមរណាសន្នវិថីពេញលេញឥតចន្លោះឡើយ។ ពេលសរីរាង្គកាយឈានដល់ចំណុចគាំង ចិត្តងើបចេញពី «ភវង្គ» (ចរន្តក្រោមដឹង) មកបើកមនោទ្វារ ៖ (១) ករណីស្លាប់ក្នុងដំណេក ៖ ចិត្តចាប់យកតាម «សុបិននិមិត្ត (Dream-Vision)» បើមានបុណ្យ នឹងយល់សប្តិឃើញហោះហើរ ដើរក្នុងសួនផ្កា ប្រាសាទកែវ ឬព្រះសង្ឃ រួចស្លាប់ក្នុងកុសលជវនៈ ទៅកាន់សុគតិភព; បើមានបាប នឹងយល់សប្តិឃើញគេដេញកាប់ ធ្លាក់ជ្រោះ ភ្លើងឆេះ ស្លាប់ក្នុងអកុសលជវនៈ ទៅកាន់ទុគ្គតិភព (២) ករណីសន្លប់យូរថ្ងៃ (Coma) ៖ ចិត្តចាប់យកតាម «អាសយានុស័យ (Dormant Habitual Forces)» ដែលជាគំនិតបង្កប់ជ្រៅៗដែលធ្លាប់គិតរាប់ពាន់ដងក្នុងជីវិត ផ្ទុះឡើងលើផ្ទៃមនោទ្វារដូចពពុះទឹកផុសពីបាតបឹង (៣) សំឡេងសូត្រធម៌ក្បែរត្រចៀកអ្នកជំងឺ Coma នៅតែអាចជ្រាបចូលតាមរំញ័រសោតបសាទ កាត់ផ្តាច់រូបភាពអាក្រក់ និងប្តូរទៅជាកុសលនិមិត្តបាននៅវិនាទីចុងក្រោយ។',
    aE: 'In Abhidhamma, even in sleep or deep coma where the outer body is motionless, the inner Mind Door executes the death-vīthi completely. As bodily organs fail, consciousness stirs from Bhavanga into the Mind Door: (1) In sleep: the mind grasps a vivid Dream-Vision (soaring, heavenly gardens, monks for the virtuous; being hunted, falling off cliffs, fire for the non-virtuous); (2) In coma: lifelong latent currents (Āsayānusaya) held thousands of times bubble to the surface like bubbles from a lake bed; (3) Soft Dhamma chanting near a coma patient’s ear can still register through subtle auditory sensitivity (sota-pasāda), neutralizing nightmares and implanting a wholesome Kamma-nimitta at the threshold.',
    mK: 'ក្នុងដំណេក ឬ Coma ចិត្តដំណើរការក្នុងមនោទ្វារយ៉ាងពេញលេញ · ចាប់យកអារម្មណ៍តាមរយៈសុបិននិមិត្ត ឬថាមពលអនុស័យកិលេស · សំឡេងសូត្រធម៌នៅតែអាចជួយកែប្រែនិមិត្តចុងក្រោយបាន។',
    mE: 'In sleep or coma, the mind executes the death-vīthi through the Mind Door; final impressions manifest via dream-visions or deep latent karmic currents, where soft Dhamma chanting can still pivot the final trajectory.',
    tie: 'ការស្លាប់ក្នុងដំណេក & អ្នកជំងឺ Coma · /my-gems#sleep-coma-death',
    to: '/my-gems#sleep-coma-death',
  },
  {
    qK: 'យោងតាមគម្ពីរអភិធម្ម និងទេវទូតសូត្រ តើមនុស្សដែលធ្វើបាបស្លាប់ទៅ ត្រូវធ្លាក់នរកភ្លាមៗ ឬត្រូវឆ្លងកាត់ការសាកសួរ និងកាត់ក្តីពីស្តេចយមរាជជាមុនសិន?',
    qE: 'According to Abhidhamma and the Devadūta Sutta (MN 130), do sinners plunge into hell immediately or undergo trial by King Yama first?',
    aK: 'យោងតាមគម្ពីរព្រះអភិធម្ម និងទេវទូតសូត្រ (MN 130) ការធ្លាក់នរកចែកជា ២ ករណី ៖ (១) ធ្លាក់នរកភ្លាមៗដោយស្វ័យប្រវត្តិ មិនឆ្លងកាត់យមរាជឡើយ ចំពោះអ្នកធ្វើបាបធ្ងន់ធ្ងរបំផុត (គរុកម្ម ដូចជា អនន្តរិយកម្ម ៥ ឬនិយតមិច្ឆាទិដ្ឋិ) ដូចដុំដែកធ្ងន់ធ្លាក់ចុះដល់បាតទឹកជ្រៅ (២) ត្រូវនាំទៅជួបស្តេចយមរាជ ចំពោះអ្នកសាងកម្មចម្រុះ (ល្អខ្លះ អាក្រក់ខ្លះ)។ យមរាជមិនមែនជាចៅក្រមកាចសាហាវចាំដាក់ទោសទេ តែជា «អ្នកព្យាយាមជួយសង្គ្រោះ» ដោយសួរដាស់រំលឹក ទេវទូតទាំង ៥ (ទារក, មនុស្សចាស់, មនុស្សឈឺ, អ្នកទោស, និងសាកសព) ដើម្បីឱ្យនឹកឃើញបុណ្យ។ បើនឹកឃើញបុណ្យភ្លាម នឹងរួចផុតពីនរក ហើយកើតនៅឋានសួគ៌ភ្លាមៗ; បើនឹកមិនឃើញទាល់តែសោះ ទើបធ្លាក់នរកតាមកម្ម។ តាមពិត យមរាជជា វេមានិកប្រេត ដែលសូម្បីតែព្រះអង្គផ្ទាល់ ក៏បួងសួងចង់រួចផុតពីភពនេះ ដើម្បីបានកើតជាមនុស្ស និងស្តាប់ធម៌ព្រះពុទ្ធដែរ។',
    aE: 'According to Abhidhamma and the Devadūta Sutta (MN 130), rebirth into hell falls into two categories: (1) Immediate Automatic Plunge into Hell (Bypassing Yama) for heinous sinners (Garuka-kamma / 5 Anantarika-kamma or fixed wrong views), sinking like an iron boulder to Avīci; (2) Escorted to King Yama for beings with mixed karma. Yama is a compassionate rescuer, not an executioner, interrogating them via the 5 Divine Messengers (infants, elders, sick, punished criminals, corpses) to awaken memories of merit. Recalling merit sparks instantaneous rebirth in heaven; only when unawakened do they descend to hell. Yama himself is a Vemānika-peta deity who longs to obtain human rebirth and attain liberation under a Buddha.',
    mK: 'អ្នកធ្វើបាបធ្ងន់ (អនន្តរិយកម្ម) ធ្លាក់នរកភ្លាមៗ · អ្នកសាងកម្មចម្រុះ ត្រូវយមរាជសួរដាស់រំលឹកទេវទូតទាំង ៥ · បើនឹកឃើញបុណ្យ រួចផុតទៅសួគ៌ភ្លាម · យមរាជជាអ្នកជួយសង្គ្រោះ មិនមែនអ្នកកាត់ទោសទេ។',
    mE: 'Heinous sinners plunge to hell immediately; those with mixed deeds are interrogated by King Yama via the 5 Divine Messengers; recalling merit sparks immediate ascension to heaven; Yama is a compassionate rescuer, not an executioner.',
    tie: 'ស្តេចយមរាជ & ទេវទូតទាំង ៥ (MN 130) · /my-gems#king-yama-devaduta',
    to: '/my-gems#king-yama-devaduta',
  },
  {
    qK: 'យោងតាមគម្ពីរអភិធម្ម និងវិភង្គអដ្ឋកថា តើ «យមបាល» (ពួកនាយនិរយបាលដែលធ្វើទារុណកម្មសត្វនរក) គឺជាសត្វមានជីវិតពិតប្រាកដ ឬគ្រាន់តែជារូបរាងដែលកើតចេញពីកម្លាំងកម្ម (កម្មជរូប) របស់សត្វនរកផ្ទាល់?',
    qE: 'According to Abhidhamma and the Vibhaṅga Commentary (Sammohavinodanī), are Yamapālas (hell wardens) real sentient beings or merely soulless karmic illusions?',
    aK: 'នៅក្នុងគម្ពីរអភិធម្ម (គម្ពីរកថាវត្ថុ ជំពូក ២០ និងវិភង្គអដ្ឋកថា សម្មោហវិនោទនី) ថេរវាទផ្លូវការបានបញ្ជាក់ថា ពួកយមបាលគឺជា «សត្វមានជីវិតពិតប្រាកដ (Sentient Beings)» មានចិត្ត ចេតសិក និងវិញ្ញាណ មិនមែនជារូបយន្តកម្មគ្មានវិញ្ញាណ (ដូចទស្សនៈនិកាយអន្ធកៈ) ឡើយ។ ពួកគេជាជំពូក «វេមានិកប្រេត» ឬជាបរិវារបស់ស្តេចចាតុម្មហារាជិកា ដែលកាលពីជាតិមុនបានធ្វើបុណ្យខ្លះ តែមានចិត្តសប្បាយរីករាយនឹងការធ្វើបាប និងឃើញអ្នកដទៃឈឺចាប់ (ទោសៈក្រាស់)។ រូបកាយរបស់ពួកគេធន់ទ្រាំនឹងភ្លើងនរកដោយកម្លាំងកម្មវិបាក (ដូចត្រីក្នុងទឹក ដង្កូវក្នុងលាមក) ប៉ុន្តែរាល់ការកាប់ចាក់ធ្វើទារុណកម្មសត្វនរក សុទ្ធតែជា «អកុសលទោសចិត្តធ្ងន់ធ្ងរ» ដែលនឹងទាញទម្លាក់ពួកគេឱ្យក្លាយជាសត្វនរកដែលត្រូវគេកាប់ចាក់វិញ ក្នុងភពបន្ទាប់ដោយចៀសមិនរួចឡើយ។',
    aE: 'In the Abhidhamma (Kathāvatthu ch. 20 and Sammohavinodanī), orthodox Theravāda confirms that Yamapālas are genuine sentient beings endowed with mind and volition — rejecting the Andhaka view that they are soulless robotic karmic projections. They belong to a distinct class of Vemānika-petas or Cātumahārājikā demonic retinues who performed merit but harbored sadistic delight in cruelty and chronic malice. Their bodies are biologically conditioned by kamma-vipāka to endure hellfire without suffering (like fish in water or maggots in dung). Crucially, every act of torture they inflict generates fresh, severe unwholesome karma (dosa-mūla-citta), inevitably plunging them into becoming the tortured hell beings in their next existence.',
    mK: 'យមបាលជាសត្វមានជីវិតពិតប្រាកដ (វេមានិកប្រេត) មានចិត្តនិងចេតនា · ធន់នឹងភ្លើងនរកដោយសារកម្មវិបាកពិសេស · ការធ្វើទារុណកម្មសត្វនរកជាអកុសលទោសចិត្ត ដែលនឹងទាញទម្លាក់យមបាលឱ្យក្លាយជាសត្វនរកវិញក្នុងភពបន្ទាប់។',
    mE: 'Yamapālas are authentic sentient beings (Vemānika-petas) with mind and volition; immune to hellfire via specialized karmic biology; their cruelty accumulates severe demerit that eventually plunges them into being tortured hell beings themselves.',
    tie: 'យមបាលនរក ៖ សត្វមានជីវិត ឬរូបយន្តកម្ម? · /my-gems#yamapala-nature',
    to: '/my-gems#yamapala-nature',
  },  {
    qK: 'យោងតាមគម្ពីរអភិធម្ម និងវិសុទ្ធិមគ្គ តើសត្វនរកដែលត្រូវយមបាលកាប់ចិញ្ច្រាំ ឬដុតរលាយសាច់អស់ ហេតុអ្វីបានជាមិនស្លាប់បាត់បង់ជីវិត ហើយរូបកាយអាចកើតឡើងវិញភ្លាមៗមួយរំពេច (ឱបបាតិកកំណើត) យ៉ាងដូចម្ដេច?',
    qE: 'According to Abhidhamma and Visuddhimagga, why don\'t hell denizens die when chopped into pieces or incinerated, and how does their body regenerate instantaneously (Opapātika)?',
    aK: 'នៅក្នុងគម្ពីរព្រះអភិធម្ម និងវិសុទ្ធិមគ្គ សត្វនរកត្រូវយមបាលកាប់ចិញ្ច្រាំ ឬដុតរលាយក្លាយជាផេះហើយ នៅតែមិនស្លាប់បាត់បង់ជីវិត ពីព្រោះអាយុជីវិតរបស់ពួកគេមិនបានពឹងលើសរីរាង្គកាយសាច់ឈាមឡើយ ប៉ុន្តែពឹងផ្អែកទាំងស្រុងលើ «ការអស់កម្មបាប (Kammakkhaya)» តែមួយគត់ (ដរាបណាកម្មមិនទាន់អស់ មិនអាចស្លាប់បានឡើយ)។ ពួកគេកើតជា «ឱបបាតិកៈ» ដែលរូបកាយផ្សំឡើងពី កម្មជរូប ១០០%។ រាល់ពេលរូបកាយចាស់ត្រូវកម្ទេច រូបកលាបៈថ្មីៗ (កាយទសកកលាបៈជាសរសៃប្រសាទឈឺចាប់ ភាវទសកកលាបៈ និងវត្ថុទសកកលាបៈ) ផុសឡើងជំនួសភ្លាមៗក្នុងល្បឿននៃចលនាចិត្ត (ដូចដុំបារតរាវរត់ផ្គុំគ្នាវិញ)។ សត្វនរកមិនអាចសន្លប់ឡើយ ដោយសារមានកាយបសាទរូបក្រាស់ឃ្មឹកទូទាំងខ្លួន និងទទួលទុក្ខសហគតកាយវិញ្ញាណ ១០០% ដោយគ្មានយន្តការកាត់ផ្តាច់ការឈឺចាប់ឡើយ។',
    aE: 'In Abhidhamma and Visuddhimagga, hell beings do not die despite severe butchering or incineration because their life is not anchored in biological organs, but exclusively in the exhaustion of karma (Kammakkhaya) as proclaimed in MN 130. As spontaneous apparitions (Opapātika-yoni), their bodies consist 100% of kamma-born matter (kammaja-rūpa). Whenever old matter is destroyed, new rupa-kalapas (neural pain receptors and physical faculties) precipitate instantly at thought-speed like liquid mercury coalescing. Furthermore, they can never lose consciousness or faint: their neural sensitivity is omnipresent and dense, experiencing pure excruciating bodily consciousness (dukkha-sahagata-kāyaviññāṇa) without shock-induced relief.',
    mK: 'សត្វនរកស្លាប់ដោយការអស់កម្មបាបតែមួយមុខគត់ (Kammakkhaya) មិនមែនដោយសាររូបកាយខូចខាតឡើយ · រូបកាយជាឱបបាតិកៈ កើតចេញពីកម្មជរូប ១០០% កើតឡើងវិញក្នុងល្បឿននៃចិត្ត (ដូចបារតរាវ) · មិនអាចសន្លប់បានឡើយ ដោយសារទទួលទុក្ខសហគតកាយវិញ្ញាណពេញលេញ ១០០%។',
    mE: 'Hell denizens die SOLELY by karmic exhaustion (Kammakkhaya), not organ damage; their 100% kamma-born body reconstitutes at thought-speed (like quicksilver); cannot lose consciousness due to omnipresent hyper-sensitive pain receptors.',
    tie: 'រូបកាយសត្វនរក ៖ ហេតុអ្វីមិនស្លាប់ & កើតឡើងវិញភ្លាមៗ? · /my-gems#hell-body-regeneration',
    to: '/my-gems#hell-body-regeneration',
  },  {
    qK: 'យោងតាមគម្ពីរព្រះត្រៃបិដក និងអភិធម្ម តើសត្វនរកមានឱកាសបង្កើតចិត្តកុសល ឬអាចបួងសួងសុំឱ្យព្រះ ឬទេវតាមកជួយស្រោចស្រង់រំដោះចេញពីរណ្តៅនរកបានដែរឬទេ?',
    qE: 'According to the Tipiṭaka and Abhidhamma, can hell beings generate wholesome thoughts (kusala citta), or pray to the Buddha or Devas for divine rescue, or receive dedicated merit?',
    aK: 'យោងតាមគម្ពីរព្រះត្រៃបិដក និងអភិធម្ម សត្វនរកស្ទើរតែគ្មានឱកាសអាចបង្កើតកុសលចិត្តបានឡើយ (ព្រោះជួបតែអនិដ្ឋារម្មណ៍ និងទោសចិត្ត ២៤ ម៉ោង) ហើយការបួងសួង ឬអង្វរសុំឱ្យព្រះ ឬទេវតាមកជួយស្រោចស្រង់ ក៏គ្មានប្រសិទ្ធភាពដែរ ព្រោះគ្មាននរណាម្នាក់ធំជាងច្បាប់កម្មផលឡើយ (ព្រះពុទ្ធជាអ្នកចង្អុលផ្លូវ មិនមែនអ្នកលាងបាបឡើយ)។ បុណ្យដែលញាតិឧទ្ទិសទៅពីលោកមនុស្ស ក៏មិនអាចជួយសត្វនរកបានដែរ (០%) ព្រោះពួកគេមិនអាចជ្រះថ្លាអនុមោទនាបាន (បុណ្យឧទ្ទិសជួយបានតែពួកបរទត្តូបជីវីប្រេតមួយពួកគត់)។ សត្វនរកអាចរួចផុតពីនរកបានតែតាមផ្លូវមួយគត់ គឺការសោយទុក្ខទាល់តែអស់កម្លាំងកម្មបាប (Kammakkhaya) ទើបកុសលកម្មចាស់ពីអតីតជាតិ ផុសឡើងនាំទៅកើតក្នុងសុគតិភពវិញ។',
    aE: 'According to the Tipiṭaka and Abhidhamma, hell beings cannot generate wholesome consciousness due to unceasing suffering and aversion-rooted mind (dosa-mūla-citta), and prayers to the Buddha or devas are futile because no entity can override the natural law of kamma (the Buddha is a way-shower, not an absolver of sins). Furthermore, merit dedicated by living relatives cannot reach hell denizens (0%) as they cannot generate joyful appreciation (anumodanā); only Paradattūpajīvī-petas can receive transferred merit. The sole exit from hell is the complete karmic exhaustion of that unwholesome debt (Kammakkhaya), enabling latent past merit to surface.',
    mK: 'សត្វនរកមិនអាចបង្កើតកុសលចិត្តបានឡើយ (ជួបតែទុក្ខវេទនា ២៤ ម៉ោង) · ការបួងសួងអង្វរគ្មានប្រសិទ្ធភាព (ព្រះពុទ្ធមិនមែនអ្នកលុបបាប) · មិនអាចទទួលបុណ្យឧទ្ទិសបានឡើយ (០%) ព្រោះមិនអាចអនុមោទនា · រួចផុតបានតែពេលអស់កម្មបាប (Kammakkhaya) តែមួយគត់។',
    mE: 'Hell beings cannot cultivate wholesome consciousness; prayers are futile as no being annuls kamma; cannot receive dedicated merit (0%); escape occurs solely when negative karma is completely exhausted (Kammakkhaya).',
    tie: 'សត្វនរក ៖ បង្កើតកុសល បួងសួង ឬទទួលបុណ្យបានទេ? · /my-gems#hell-merit-prayers',
    to: '/my-gems#hell-merit-prayers',
  },  {
    qK: 'យោងតាមគម្ពីរព្រះត្រៃបិដក និងអដ្ឋកថា តើមហានរកទាំង ៨ ជាន់ មានឈ្មោះអ្វីខ្លះ បរិស្ថាន ទារុណកម្មជាក់ស្តែង កម្មដែលនាំឱ្យធ្លាក់ និងអាយុកាលយ៉ាងដូចម្ដេច?',
    qE: 'According to the Tipiṭaka and Commentaries, what are the Eight Great Hells (Mahānaraka), their environments, specific torments, causes (kamma), and lifespans?',
    aK: 'យោងតាមគម្ពីរព្រះត្រៃបិដក (ទេវទូតសូត្រ និងពាលបណ្ឌិតសូត្រ) ព្រមទាំងគម្ពីរអដ្ឋកថា និងវិសុទ្ធិមគ្គ មហានរកធំៗមានចំនួន ៨ ជាន់ តម្រៀបជង់លើគ្នាពីលើចុះក្រោមនៅក្នុងផ្ទៃក្រោមនៃជម្ពូទ្វីប (ភពមនុស្ស) ដោយនរកជាន់នីមួយៗមានទំហំធំធេង និងឡោមព័ទ្ធដោយ ឧស្សទនរក (នរកបរិវារ) ចំនួន ១៦ នៅគ្រប់ទិសទាំង ៤ ៖ (១) សញ្ជីវៈ (រស់ឡើងវិញឥតឈប់ឈរតាមខ្យល់កម្ម) (២) កាឡសុត្តៈ (គូសខ្សែបន្ទាត់ខ្មៅអារច្រៀកសាច់) (៣) សង្ឃាតៈ (ភ្នំដែកភ្លើង ៤ ទិសរមៀលកិនសង្កត់) (៤) រោរុវៈ ឬ ជលារោរុវៈ (ភ្លើងឆេះទម្លុះទ្វារកាយទាំង ៩) (៥) មហារោរុវៈ ឬ ធូមារោរុវៈ (ផ្សែងក្តៅពុលជ្រាបដុតសរីរាង្គក្នុង) (៦) តាបនៈ (ដោតចម្រូងដែកភ្លើងអាំងរោល) (៧) មហាតាបនៈ (រត់ឡើងភ្នំភ្លើងត្រូវខ្យល់ផាត់ធ្លាក់លើចម្រូងដាវ) (៨) អវិចី (ភ្លើងឆេះជាប់គ្នាសព្វទិស គ្មានចន្លោះទំនេរនៃទុក្ខ និងពេលវេលា)។ អាយុកាលកើនឡើងពី ១,៦២០,០០០ លានឆ្នាំមនុស្ស ក្នុងជាន់ទី ១ រហូតដល់ ១ អន្តរកប្បពេញ ក្នុងជាន់អវិចី។',
    aE: 'According to the Tipiṭaka (Devadūta Sutta MN 130, Bālapaṇḍita Sutta MN 129), Commentaries, and Visuddhimagga, the Eight Great Hells (Mahānaraka) are vertically stacked beneath the human world, each surrounded by 16 auxiliary Ussada hells: (1) Sañjīva (Continuous Revival Hell), (2) Kāḷasutta (Black-Line Measuring Hell), (3) Sanghāta (Crushing Iron Mountain Hell), (4) Roruva/Jālaroruva (Blazing Nine-Gate Screaming Hell), (5) Mahāroruva/Dhūmaroruva (Suffocating Smoke Hell), (6) Tāpana (Impaling Spits Hell), (7) Mahātāpana (Great Escalating Fire Hell), and (8) Avīci (Uninterrupted Intervalless Hell). Lifespans escalate exponentially from 1.62 million million human years in Sañjīva to an entire Antarakappa in Avīci.',
    mK: 'មហានរក ៨ ជាន់ ៖ សញ្ជីវៈ (រស់ឡើងវិញ) · កាឡសុត្តៈ (ខ្សែបន្ទាត់ខ្មៅ) · សង្ឃាតៈ (ភ្នំកិន) · រោរុវៈ (ភ្លើងទ្វារ ៩) · មហារោរុវៈ (ផ្សែងពុល) · តាបនៈ (ចម្រូងដែក) · មហាតាបនៈ (ធ្លាក់លើដាវ) · អវិចី (គ្មានចន្លោះ) · ព័ទ្ធដោយឧស្សទនរក ១៦ គ្រប់ទិស។',
    mE: 'The 8 Great Hells: Sañjīva (Revival), Kāḷasutta (Black Line), Sanghāta (Crushing), Roruva (Fire in 9 Gates), Mahāroruva (Toxic Smoke), Tāpana (Spikes), Mahātāpana (Spear Fall), Avīci (No Interruption); each ringed by 16 auxiliary Ussada hells.',
    tie: 'មហានរកទាំង ៨ ជាន់ ពិស្តារ · /my-gems#eight-great-hells',
    to: '/my-gems#eight-great-hells',
  },  {
    qK: 'យោងតាមគម្ពីរព្រះត្រៃបិដក និងអដ្ឋកថា តើ «ឧស្សទនរក» (នរកបរិវារទាំង ១៦ ជាន់) មានឈ្មោះអ្វីខ្លះ ទារុណកម្មជាក់ស្តែង និងកម្មផលដែលនាំឱ្យធ្លាក់យ៉ាងដូចម្ដេច?',
    qE: 'According to the Tipiṭaka and Commentaries, what are the Sixteen Ussada (Auxiliary) Hells, their specific torments, and the distinct karmic causes leading to each?',
    aK: 'នៅក្នុងគម្ពីរព្រះត្រៃបិដក (ទេវទូតសូត្រ, ពាលបណ្ឌិតសូត្រ និង និមិរាជជាតក) មហានរកទាំង ៨ នីមួយៗ មានទ្វារ ៤ នៅទិសទាំងបួន ហើយនៅជុំវិញទ្វារនីមួយៗ មាន «ឧស្សទនរក» (នរកបរិវារ) ចំនួន ១៦ ជាន់ ៖ (១) អង្គារកាសុ (រណ្តៅរងើកភ្លើង — កម្មបន្លំជញ្ជីង លួចទ្រព្យ) (២) កុក្កុលៈ (កម្ទេចផេះក្តៅ — កម្មដុតស្រែចម្ការ ផ្ទះ) (៣) គូថៈ (ទឹកលាមក & ដង្កូវមាត់ម្ជុល — កម្មបង្ខូចកេរ្តិ៍ឈ្មោះគេ) (៤) អសិបត្តវនៈ (ព្រៃស្លឹកដាវ — កម្មកាប់ចាក់ ធ្វើសង្គ្រាម) (៥) សិម្ពលីវនៈ (ព្រៃដើមរកាបន្លាដែក — កម្មកាមេសុមិច្ឆាចារ) (៦) វេតរណី (ស្ទឹងទឹកក្បុងអាស៊ីត — កម្មសង្កត់សង្កិន អយុត្តិធម៌តុលាការ) (៧) ថោហរៈ (ភក់ជ្រាំស្អុយក្តៅ — កម្មលក់ចំណីពុល) (៨) សត្តិកូលៈ (ចម្រូងលំពែងដែក — កម្មបាញ់ប្រហារ ដាក់អន្ទាក់សត្វ) (៩) អយោគុឡៈ (ដុំដែកភ្លើងច្រកមាត់ — កម្មលួចបន្លំទ្រព្យសង្ឃ ស៊ីសំណូក) (១០) តម្ពលោហៈ (ទឹកទង់ដែងរលាយ — កម្មស្រវឹងខួប គ្រឿងញៀន) (១១) លោហកុម្ភី (ថ្លាងដែកពុះ ៦០,០០០ ឆ្នាំ — កម្មសហាយស្មន់ ប្រព្រឹត្តកាមខុស) (១២) យន្តបាសាណៈ (ត្បាល់កិនយន្តថ្ម — កម្មវាយដំប្រពន្ធកូន កេងប្រវ័ញ្ចពលកម្ម) (១៣) សុនខៈ (ឆ្កែដែក និងត្មាតដែក — កម្មជេរប្រមាថ ពោលពាក្យអាក្រក់) (១៤) ខុរធារៈ (ភ្នំកាំបិតកោរ — កម្មកុហក ញុះញង់បំបែកគេ) (១៥) សីតោទកៈ (ទឹកត្រជាក់កកសូន្យសុង — កម្មចិត្តត្រជាក់សម្លាប់គេ ចោលកូន) (១៦) អយោឃរៈ (បន្ទប់ដែកភ្លើងបិទជិត — កម្មបង្ខាំងមនុស្សសត្វក្នុងទ្រុង គុកងងឹត)។',
    aE: 'In the Tipiṭaka (Devadūta Sutta MN 130, Nimi Jātaka 541), each of the Eight Great Hells is surrounded on its four gates by 16 auxiliary satellite hells (Ussada Naraka): (1) Aṅgārakāsu (Glowing Coals — fraudulent weights), (2) Kukkula (Boiling Ash — arson & sabotage), (3) Gūtha (Excrement & Needle Worms — defamation), (4) Asipattavana (Sword-Leaf Forest — warfare & weapons), (5) Simbalīvana (Thorny Silk-Cotton Tree — adultery), (6) Vettaraṇī (Caustic Acid River — judicial corruption), (7) Thohara (Scalding Putrid Slime — toxic food), (8) Sattisūla (Iron Spear Spikes — wildlife poaching), (9) Ayoguḷa (Swallowing Iron Balls — temple theft & bribery), (10) Tambaloha (Molten Copper — alcohol/drug addiction), (11) Lohakumbhī (60,000-Yr Boiling Cauldron — sexual misconduct), (12) Yantapāsāṇa (Crushing Mountain Presses — domestic abuse & forced labor), (13) Sunakha (Iron Dogs & Vultures — coarse verbal abuse), (14) Khuradhāra (Razor Blade Mountain — slander & divisive speech), (15) Sītodaka (Sub-zero Glacial Ice — cold-blooded abandonment), and (16) Ayoghara (Sealed Blazing Iron Vault — imprisonment & caging living beings).',
    mK: 'ឧស្សទនរក ១៦ ជាន់ ៖ រណ្តៅរងើកភ្លើង · ផេះក្តៅ · ទឹកលាមក & ដង្កូវមាត់ម្ជុល · ព្រៃស្លឹកដាវ · ដើមរកាបន្លាដែក · ស្ទឹងទឹកក្បុងអាស៊ីត · ភក់ជ្រាំស្អុយ · ចម្រូងលំពែង · ដុំដែកច្រកមាត់ · ទឹកទង់ដែង · ថ្លាងដែកពុះ · ត្បាល់កិនយន្តថ្ម · ឆ្កែដែក · ភ្នំកាំបិតកោរ · ទឹកត្រជាក់កក · បន្ទប់ដែកបិទជិត។',
    mE: 'The 16 Ussada Auxiliary Hells: Coals Pit, Boiling Ash, Excrement Worms, Sword Forest, Thorny Tree, Caustic Acid River, Scalding Slime, Iron Spears, Fiery Iron Balls, Molten Copper, 60,000-Yr Cauldron, Mountain Presses, Iron Dogs, Razor Peaks, Glacial Ice, Sealed Iron Vault.',
    tie: 'ឧស្សទនរកទាំង ១៦ ជាន់ ពិស្តារ · /my-gems#sixteen-ussada-hells',
    to: '/my-gems#sixteen-ussada-hells',
  },  {
    qK: 'យោងតាមគម្ពីរព្រះត្រៃបិដក និងអដ្ឋកថា តើដំណើរជីវិតរបស់សត្វនរកដែលរត់ចេញពីមហានរក ត្រូវឆ្លងកាត់ឧស្សទនរកទាំង ១៦ តាមលំដាប់លំដោយយ៉ាងដូចម្ដេច?',
    qE: 'According to the Tipiṭaka and Commentaries, how does a hell denizen escaping from the Great Hell journey sequentially through the sixteen Ussada hells?',
    aK: 'ដំណើរជីវិតរបស់សត្វនរកដែលរត់ចេញពីមហានរក ឆ្លងកាត់ឧស្សទនរកទាំង ១៦ ជា «ដំណើរឆ្លងកាត់អន្ទាក់នៃវិបល្លាស (ការយល់ច្រឡំដែលជំរុញដោយតណ្ហា)» ដោយសត្វនរកតែងតែមើលឃើញទារុណកម្មនៅស្ថានីយបន្ទាប់ ថាជាទីពឹងពាក់ជានិច្ច ៖ ចេញពីមហានរកធំ -> ធ្លាក់ចូលគូថនរក (លាមកពុះ + ដង្កូវមាត់ម្ជុល) -> កុក្កុលនរក & អង្គារកាសុ (ស្មានថាដីស្ងួត ជាផេះក្តៅរលួយជើង) -> អសិបត្តវននរក (ស្មានថាម្លប់ត្រជាក់ ជាព្រៃស្លឹកដាវធ្លាក់កាត់ខ្លួន) -> សិម្ពលីវននរក (ត្រូវបង្ខំឡើងចុះដើមរកាបន្លាដែក) -> វេតរណីនទី (ស្មានថាស្ទឹងត្រជាក់ ជាទឹកក្បុងអាស៊ីត) -> ស្ថានីយឯកទេស (ដុំដែកច្រកមាត់ ទឹកទង់ដែង ត្បាល់កិន ភ្នំកាំបិតកោរ...)។ ដំណើរនេះប្រៀបដូចជាការបកស្រទាប់ខ្ទឹមបារាំងនៃកម្មផល រហូតដល់អស់កម្លាំងបាប (Kammakkhaya) ទើបអាចស្លាប់រួចផុតទៅចាប់កំណើតថ្មី។',
    aE: 'A hell denizen escaping a Mahānaraka journeys through sequential cognitive hallucinations (vipallāsa) driven by craving, mistaking each new torture station for cooling refuge: Mahānaraka -> Gūtha (boiling feces & needle worms) -> Kukkula/Aṅgārakāsu (mistaken for dry land, melting feet) -> Asipattavana (mistaken for cool shade, sword-leaves decapitating them) -> Simbalīvana (forced up/down thorny iron trees) -> Vettaraṇī (mistaken for fresh stream, scalding acid river) -> Specialized Stations (ingesting red-hot iron balls, molten copper, mountain presses, razor mountains...). This systematic "onion-skin peeling" of residual karma continues until final karmic exhaustion (Kammakkhaya).',
    mK: 'ដំណើរឆ្លងកាត់នរកជាអន្ទាក់វិបល្លាស (ការយល់ច្រឡំ) ៖ មហានរក -> គូថនរក (លាមក) -> កុក្កុលនរក (ផេះក្តៅ) -> អសិបត្តវនៈ (ព្រៃដាវ) -> សិម្ពលីវនៈ (ដើមរកា) -> វេតរណី (ស្ទឹងអាស៊ីត) -> ស្ថានីយឯកទេស (ដែកក្តៅច្រកមាត់...) · បកស្រទាប់កម្មរហូតដល់ Kammakkhaya។',
    mE: 'Sequential journey through hallucinatory traps: Mahānaraka -> Gūtha (feces) -> Kukkula (boiling ash) -> Asipattavana (sword leaves) -> Simbalīvana (thorny tree) -> Vettaraṇī (acid river) -> Specialized Stations (swallowing iron balls...) until final Kammakkhaya.',
    tie: 'ដំណើរឆ្លងកាត់ឧស្សទនរក ១៦ តាមលំដាប់ · /my-gems#hell-escape-journey',
    to: '/my-gems#hell-escape-journey',
  },
]
</script>
