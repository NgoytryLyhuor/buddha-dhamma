<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('ធម៌ ៣៧ — មាគ៌ាឆ្ពោះទៅកាន់ការត្រាស់ដឹង', '37 DHAMMAS — THE PATHWAY TO AWAKENING') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('ពោធិបក្ខិយធម៌ ៣៧ ប្រការ', 'The 37 Factors of Awakening') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ពោធិបក្ខិយធម៌ មានន័យថា «ធម៌ដែលជាចំណែកនៃការត្រាស់ដឹង»។ ក្នុងមហាបរិនិព្វានសូត្រ ព្រះសម្មាសម្ពុទ្ធទ្រង់បានផ្តាំផ្ញើចំពោះព្រះសង្ឃសាវកទាំងអស់ថា ធម៌ទាំង ៣៧ ប្រការនេះ គឺជាខ្លឹមសារសំខាន់បំផុតនៃសេចក្តីបង្រៀនរបស់ព្រះអង្គ ដែលត្រូវរៀនសូត្រ ចងចាំ បដិបត្តិ និងផ្សព្វផ្សាយបន្ត ដើម្បីជាប្រយោជន៍ និងសេចក្តីសុខដល់មនុស្សនិងទេវតា។', 'Bodhipakkhiya-dhammas means "qualities that lead to enlightenment". In the Mahāparinibbāna Sutta, the Buddha exhorted the assembly of monks that these thirty-seven factors constitute the heart of his teaching, which should be mastered, cultivated, and preserved for the welfare and happiness of all beings.') }}
    </p>

    <!-- 7 Groups Summary Banner -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
      <div v-for="g in groups" :key="g.id"
        class="card-paper p-4 text-center cursor-pointer transition hover:border-amber-600"
        :class="activeGroup === g.id ? 'border-2' : ''"
        :style="activeGroup === g.id ? { borderColor: 'var(--accent-bright)' } : {}"
        @click="activeGroup = g.id">
        <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ g.count }}</span>
        <p class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t(g.km, g.en) }}</p>
        <p class="text-[10px] mt-1 tracking-wider uppercase" :style="{ color: 'var(--ink-muted)' }">{{ g.pl }}</p>
      </div>
      <div class="card-paper p-4 text-center cursor-pointer transition hover:border-amber-600"
        :class="activeGroup === 'all' ? 'border-2' : ''"
        :style="activeGroup === 'all' ? { borderColor: 'var(--accent-bright)' } : {}"
        @click="activeGroup = 'all'">
        <span class="sutra-num" :style="{ color: 'var(--accent)' }">៣៧</span>
        <p class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t('ទាំងអស់', 'View All 37') }}</p>
        <p class="text-[10px] mt-1 tracking-wider uppercase" :style="{ color: 'var(--ink-muted)' }">BODHIPAKKHIYA</p>
      </div>
    </div>

    <!-- Group 1: 4 Satipaṭṭhāna -->
    <div v-if="activeGroup === 'all' || activeGroup === 'satipatthana'" class="card-paper p-6 md:p-8 mt-8">
      <div class="flex items-center justify-between gap-3">
        <div>
          <p class="chapter-label">SATIPAṬṬHĀNA — 4</p>
          <h3 class="font-display text-xl mt-1" :style="{ color: 'var(--ink)' }">{{ t('១. សតិបដ្ឋាន ៤ — ការតម្កល់ស្មារតី', '1. Four Foundations of Mindfulness') }}</h3>
        </div>
        <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">៤</span>
      </div>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ផ្លូវតែមួយគត់ (ឯកាយនោ មគ្គោ) សម្រាប់ជម្រះចិត្តឱ្យបរិសុទ្ធ រំលត់ទុក្ខសោក និងសម្រេចព្រះនិព្វាន។', 'The direct path for the purification of beings, the overcoming of sorrow, and the realization of Nibbāna.') }}
      </p>
      <div class="grid md:grid-cols-2 gap-4 mt-5">
        <div v-for="item in satipatthana" :key="item.pl" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="paali">{{ item.pl }}</span>
          <h4 class="font-bold text-base mt-1" :style="{ color: 'var(--ink)' }">{{ t(item.km, item.en) }}</h4>
          <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(item.descKm, item.descEn) }}</p>
        </div>
      </div>
    </div>

    <!-- Group 2: 4 Sammappadhāna -->
    <div v-if="activeGroup === 'all' || activeGroup === 'sammappadhana'" class="card-paper p-6 md:p-8 mt-8">
      <div class="flex items-center justify-between gap-3">
        <div>
          <p class="chapter-label">SAMMAPPADHĀNA — 4</p>
          <h3 class="font-display text-xl mt-1" :style="{ color: 'var(--ink)' }">{{ t('២. សម្មប្បធាន ៤ — សេចក្តីព្យាយាមប្រពៃ', '2. Four Right Strivings / Exertions') }}</h3>
        </div>
        <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">៤</span>
      </div>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
        {{ t('សេចក្តីព្យាយាមត្រឹមត្រូវ ៤ យ៉ាងក្នុងការគ្រប់គ្រងអំពើល្អនិងអាក្រក់ក្នុងចិត្ត។', 'Right exertion in abandoning defilements and fostering wholesome mental states.') }}
      </p>
      <div class="grid md:grid-cols-2 gap-4 mt-5">
        <div v-for="item in sammappadhana" :key="item.pl" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="paali">{{ item.pl }}</span>
          <h4 class="font-bold text-base mt-1" :style="{ color: 'var(--ink)' }">{{ t(item.km, item.en) }}</h4>
          <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(item.descKm, item.descEn) }}</p>
        </div>
      </div>
    </div>

    <!-- Group 3: 4 Iddhipāda -->
    <div v-if="activeGroup === 'all' || activeGroup === 'iddhipada'" class="card-paper p-6 md:p-8 mt-8">
      <div class="flex items-center justify-between gap-3">
        <div>
          <p class="chapter-label">IDDHIPĀDA — 4</p>
          <h3 class="font-display text-xl mt-1" :style="{ color: 'var(--ink)' }">{{ t('៣. ឥទ្ធិបាទ ៤ — មូលដ្ឋាននៃសេចក្តីសម្រេច', '3. Four Bases of Spiritual Power') }}</h3>
        </div>
        <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">៤</span>
      </div>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ធម៌ ៤ យ៉ាងដែលនាំឱ្យសម្រេចរាល់កិច្ចការទាំងផ្លូវលោក និងផ្លូវធម៌ រហូតដល់អភិញ្ញា និងការត្រាស់ដឹង។', 'Four mental qualities that form the launchpad for achieving any noble worldly or spiritual attainment.') }}
      </p>
      <div class="grid md:grid-cols-2 gap-4 mt-5">
        <div v-for="item in iddhipada" :key="item.pl" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="paali">{{ item.pl }}</span>
          <h4 class="font-bold text-base mt-1" :style="{ color: 'var(--ink)' }">{{ t(item.km, item.en) }}</h4>
          <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(item.descKm, item.descEn) }}</p>
        </div>
      </div>
    </div>

    <!-- Group 4 & 5: 5 Indriya & 5 Bala -->
    <div v-if="activeGroup === 'all' || activeGroup === 'indriya_bala'" class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">INDRIYA & BALA — 5 + 5</p>
      <h3 class="font-display text-xl mt-1" :style="{ color: 'var(--ink)' }">{{ t('៤ & ៥. ឥន្ទ្រិយ ៥ និង ពល ៥ — អំណាច និងកម្លាំងចិត្ត', '4 & 5. Five Spiritual Faculties & Five Powers') }}</h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ឥន្ទ្រិយជាធំក្នុងការដឹកនាំចិត្ត ហើយពេលចម្រើនរឹងមាំក្លាយជាពល (កម្លាំង) ដែលកិលេសមិនអាចបំបាក់បាន។ គប្បីថ្លឹងឱ្យស្មើគ្នា៖ សទ្ធាស្មើនឹងបញ្ញា, វិរិយៈស្មើនឹងសមាធិ, ដោយមានសតិជាអ្នកត្រួតពិនិត្យ។', 'The faculties guide the mind; when mature, they become unshakable powers (bala). Balance faith with wisdom, and energy with concentration, safeguarded by mindfulness.') }}
      </p>
      <div class="grid md:grid-cols-5 gap-3 mt-5">
        <div v-for="item in indriyaBala" :key="item.pl" class="p-4 rounded-sm text-center" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="paali">{{ item.pl }}</span>
          <h4 class="font-bold text-base mt-2" :style="{ color: 'var(--ink)' }">{{ t(item.km, item.en) }}</h4>
          <p class="text-xs mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(item.descKm, item.descEn) }}</p>
        </div>
      </div>
    </div>

    <!-- Group 6: 7 Bojjhaṅga -->
    <div v-if="activeGroup === 'all' || activeGroup === 'bojjhanga'" class="card-paper p-6 md:p-8 mt-8">
      <div class="flex items-center justify-between gap-3">
        <div>
          <p class="chapter-label">BOJJHAṄGA — 7</p>
          <h3 class="font-display text-xl mt-1" :style="{ color: 'var(--ink)' }">{{ t('៦. ពោជ្ឈង្គ ៧ — អង្គនៃការត្រាស់ដឹង', '6. Seven Factors of Enlightenment') }}</h3>
        </div>
        <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">៧</span>
      </div>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
        {{ t('គុណធម៌ ៧ យ៉ាងដែលកើតឡើងក្នុងពេលចម្រើនវិបស្សនា ដែលនាំទៅរកការទម្លុះទម្លាយអវិជ្ជា និងសម្រេចព្រះនិព្វាន។', 'Seven wholesome mental qualities that mature in vipassanā, directly leading to awakening.') }}
      </p>
      <div class="grid md:grid-cols-3 gap-3 mt-5">
        <div v-for="item in bojjhanga" :key="item.pl" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="paali">{{ item.pl }}</span>
          <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t(item.km, item.en) }}</h4>
          <p class="text-xs mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(item.descKm, item.descEn) }}</p>
        </div>
      </div>
    </div>

    <!-- Group 7: 8 Magga -->
    <div v-if="activeGroup === 'all' || activeGroup === 'magga'" class="card-paper p-6 md:p-8 mt-8">
      <div class="flex items-center justify-between gap-3">
        <div>
          <p class="chapter-label">ARIYA AṬṬHAṄGIKA MAGGA — 8</p>
          <h3 class="font-display text-xl mt-1" :style="{ color: 'var(--ink)' }">{{ t('៧. អរិយអដ្ឋង្គិកមគ្គ ៨ — មាគ៌ាដ៏ប្រសើរ ៨ ប្រការ', '7. The Noble Eightfold Path') }}</h3>
        </div>
        <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">៨</span>
      </div>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
        {{ t('សច្ចធម៌ទី ៤ ក្នុងអរិយសច្ចទាំង ៤ — ជាផ្លូវកណ្តាល (មជ្ឈិមាបដិបទា) ប្រមូលផ្តុំក្នុងត្រៃសិក្ខា គឺ សីល សមាធិ និងបញ្ញា។', 'The Fourth Noble Truth — the Middle Way consisting of virtue (sīla), concentration (samādhi), and wisdom (paññā).') }}
      </p>
      <div class="grid md:grid-cols-4 gap-3 mt-5">
        <div v-for="item in magga" :key="item.pl" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <div class="flex items-baseline justify-between gap-2">
            <span class="paali">{{ item.pl }}</span>
            <span class="text-[10px] font-bold uppercase" :style="{ color: 'var(--accent)' }">{{ item.group }}</span>
          </div>
          <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t(item.km, item.en) }}</h4>
          <p class="text-xs mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(item.descKm, item.descEn) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeGroup = ref('all')

const groups = [
  { id: 'satipatthana', km: 'សតិបដ្ឋាន ៤', en: '4 Satipaṭṭhāna', pl: 'Satipaṭṭhāna', count: '៤' },
  { id: 'sammappadhana', km: 'សម្មប្បធាន ៤', en: '4 Sammappadhāna', pl: 'Sammappadhāna', count: '៤' },
  { id: 'iddhipada', km: 'ឥទ្ធិបាទ ៤', en: '4 Iddhipāda', pl: 'Iddhipāda', count: '៤' },
  { id: 'indriya_bala', km: 'ឥន្ទ្រិយ & ពល', en: '5 Indriya & Bala', pl: 'Indriya / Bala', count: '១០' },
  { id: 'bojjhanga', km: 'ពោជ្ឈង្គ ៧', en: '7 Bojjhaṅga', pl: 'Bojjhaṅga', count: '៧' },
  { id: 'magga', km: 'អដ្ឋង្គិកមគ្គ ៨', en: '8 Noble Path', pl: 'Magga', count: '៨' },
]

const satipatthana = [
  {
    pl: 'Kāyānupassanā',
    km: 'កាយានុបស្សនា (ពិចារណាកាយក្នុងកាយ)',
    en: 'Contemplation of the Body',
    descKm: 'ដឹងច្បាស់នូវដង្ហើមចេញចូល (អានាបានសតិ), ឥរិយាបថទាំង ៤ (ដើរ ឈរ អង្គុយ ដេក), សម្បជញ្ញៈ និងធាតុទាំង ៤ ថាមិនមែនជាខ្លួនយើង។',
    descEn: 'Mindfulness of breathing, the four postures, clear comprehension of actions, anatomical parts, and the four physical elements.',
  },
  {
    pl: 'Vedanānupassanā',
    km: 'វេទនានុបស្សនា (ពិចារណាវេទនាក្នុងវេទនា)',
    en: 'Contemplation of Feelings',
    descKm: 'ដឹងច្បាស់នូវអារម្មណ៍សុខ ទុក្ខ ឬកណ្តាល (មិនសុខមិនទុក្ខ) ដែលកើតឡើងហើយរលត់ទៅវិញ មិនជាប់ជំពាក់។',
    descEn: 'Awareness of pleasant, unpleasant, or neutral sensations as they arise and pass away without clinging.',
  },
  {
    pl: 'Cittānupassanā',
    km: 'ចិត្តានុបស្សនា (ពិចារណាចិត្តក្នុងចិត្ត)',
    en: 'Contemplation of Consciousness',
    descKm: 'ដឹងស្គាល់សភាពចិត្តរបស់ខ្លួន៖ ចិត្តមានរាគៈ ឬគ្មានរាគៈ, មានទោសៈ ឬគ្មានទោសៈ, ចិត្តស្ងប់ ឬរាយមាយ។',
    descEn: 'Observing the state of mind: with lust or without, with anger or without, concentrated or distracted.',
  },
  {
    pl: 'Dhammānupassanā',
    km: 'ធម្មានុបស្សនា (ពិចារណាធម៌ក្នុងធម៌)',
    en: 'Contemplation of Mental Phenomena',
    descKm: 'ពិចារណាឃើញនីវរណៈ ៥, ខន្ធ ៥, អាយតនៈ ១២, ពោជ្ឈង្គ ៧ និងអរិយសច្ច ៤ តាមសភាវៈពិត។',
    descEn: 'Insight into the 5 hindrances, 5 aggregates, 12 sense bases, 7 awakening factors, and the 4 Noble Truths.',
  },
]

const sammappadhana = [
  {
    pl: 'Saṃvara-ppadhāna',
    km: 'សំវរប្បធាន (ព្យាយាមប្រយ័ត្ន)',
    en: 'Restraint (Preventing Evil)',
    descKm: 'ព្យាយាមប្រយ័ត្នបិទបាំងទ្វារឥន្ទ្រិយ មិនឱ្យអកុសលធម៌ថ្មីៗកើតឡើងក្នុងចិត្ត។',
    descEn: 'Guarding the sense doors to prevent unarisen unwholesome states from entering.',
  },
  {
    pl: 'Pahāna-ppadhāna',
    km: 'បហានប្បធាន (ព្យាយាមលះបង់)',
    en: 'Abandoning (Overcoming Evil)',
    descKm: 'ព្យាយាមលះបង់នូវអកុសលធម៌ទាំងឡាយណាដែលបានកើតឡើងហើយ ឱ្យរលាយបាត់ទៅ។',
    descEn: 'Making energetic effort to banish and eradicate unwholesome states already arisen.',
  },
  {
    pl: 'Bhāvanā-ppadhāna',
    km: 'ភាវនាប្បធាន (ព្យាយាមចម្រើន)',
    en: 'Cultivating (Developing Good)',
    descKm: 'ព្យាយាមញ៉ាំងកុសលធម៌ថ្មីៗដែលមិនទាន់កើត ឱ្យកើតឡើងពេញលេញក្នុងចិត្ត។',
    descEn: 'Striving to generate wholesome qualities (such as mindfulness and wisdom) not yet arisen.',
  },
  {
    pl: 'Anurakkhanā-ppadhāna',
    km: 'អនុរក្ខនាប្បធាន (ព្យាយាមរក្សាទុក)',
    en: 'Maintaining (Protecting Good)',
    descKm: 'ព្យាយាមថែរក្សាកុសលធម៌ដែលបានកើតឡើងហើយ កុំឱ្យសាបសូន្យ និងឱ្យកាន់តែចម្រើនឡើងទ្វេដង។',
    descEn: 'Nurturing, safeguarding, and bringing already arisen wholesome qualities to full perfection.',
  },
]

const iddhipada = [
  {
    pl: 'Chanda',
    km: 'ឆន្ទៈ — សេចក្តីពេញចិត្តស្រឡាញ់',
    en: 'Enthusiastic Desire',
    descKm: 'មានសេចក្តីស្រឡាញ់ ពេញចិត្តជ្រាលជ្រៅក្នុងការបដិបត្តិ និងការបំពេញអំពើល្អ។',
    descEn: 'Wholesome zeal, inspiration, and love for cultivating Dhamma practice.',
  },
  {
    pl: 'Viriya',
    km: 'វិរិយៈ — សេចក្តីព្យាយាមស្វាហាប់',
    en: 'Persistent Energy',
    descKm: 'ការប្រឹងប្រែងឥតរាថយ ទោះជួបឧបសគ្គក៏មិនបោះបង់ចោល។',
    descEn: 'Courageous perseverance and strenuous energy that never surrenders.',
  },
  {
    pl: 'Citta',
    km: 'ចិត្តៈ — ការយកចិត្តទុកដាក់ខ្ពស់',
    en: 'Hearted Dedication',
    descKm: 'ការតម្កល់ចិត្តមុតមាំ ផ្ចង់គំនិតលើគោលដៅ មិនរវើរវាយ។',
    descEn: 'Wholehearted dedication, single-minded focus, and mental absorption on the task.',
  },
  {
    pl: 'Vīmaṃsā',
    km: 'វីមំសា — ការត្រិះរិះពិចារណាដោយបញ្ញា',
    en: 'Discerning Investigation',
    descKm: 'ការពិចារណាស្វែងរកហេតុផល ពិនិត្យកែកំហុស និងប្រើប្រាជ្ញាក្នុងការដោះស្រាយ។',
    descEn: 'Keen discernment, testing cause and effect, and intelligent adjustment.',
  },
]

const indriyaBala = [
  { pl: 'Saddhā', km: 'សទ្ធា', en: 'Faith / Conviction', descKm: 'ជឿជាក់លើព្រះរតនត្រ័យ និងច្បាប់កម្មផល។', descEn: 'Confidence in Awakening and kamma.' },
  { pl: 'Viriya', km: 'វិរិយៈ', en: 'Energy / Courage', descKm: 'កម្លាំងព្យាយាមក្នុងការប្រព្រឹត្តល្អ។', descEn: 'Unyielding exertion in wholesome deeds.' },
  { pl: 'Sati', km: 'សតិ', en: 'Mindfulness', descKm: 'ការរលឹកដឹងខ្លួនជានិច្ចក្នុងបច្ចុប្បន្ន។', descEn: 'Lucid presence of mind in each moment.' },
  { pl: 'Samādhi', km: 'សមាធិ', en: 'Concentration', descKm: 'ការតម្កល់ចិត្តមូលស្ងប់តែមួយ។', descEn: 'Unified, unscattered focus of mind.' },
  { pl: 'Paññā', km: 'បញ្ញា', en: 'Wisdom / Insight', descKm: 'ការយល់ឃើញសច្ចធម៌ និងអនិច្ចំ ទុក្ខំ អនត្តា។', descEn: 'Direct penetration into impermanence and truth.' },
]

const bojjhanga = [
  { pl: 'Sati Sambojjhaṅga', km: 'សតិសម្ពោជ្ឈង្គ', en: 'Mindfulness Factor', descKm: 'សតិរលឹកដឹងច្បាស់គ្រប់សភាវធម៌។', descEn: 'Mindfulness anchoring the mind.' },
  { pl: 'Dhammavicaya', km: 'ធម្មវិចយសម្ពោជ្ឈង្គ', en: 'Dhamma Investigation', descKm: 'ការពិចារណាវែកញែកស្វែងយល់សច្ចធម៌។', descEn: 'Analytical investigation of reality.' },
  { pl: 'Viriya Sambojjhaṅga', km: 'វិរិយសម្ពោជ្ឈង្គ', en: 'Energy Factor', descKm: 'កម្លាំងព្យាយាមដ៏មុតស្រួច។', descEn: 'Aroused effort driving insight.' },
  { pl: 'Pīti Sambojjhaṅga', km: 'បីតិសម្ពោជ្ឈង្គ', en: 'Spiritual Joy', descKm: 'សេចក្តីឆ្អែតកាយឆ្អែតចិត្តស្អាតស្អំ។', descEn: 'Unhindered, pure spiritual rapture.' },
  { pl: 'Passaddhi', km: 'បស្សទ្ធិសម្ពោជ្ឈង្គ', en: 'Tranquility', descKm: 'សេចក្តីស្ងប់រម្ងាប់នៃកាយនិងចិត្ត។', descEn: 'Serene calmness of body and mental factors.' },
  { pl: 'Samādhi Sambojjhaṅga', km: 'សមាធិសម្ពោជ្ឈង្គ', en: 'Concentration Factor', descKm: 'ការតម្កល់ចិត្តស្ងប់ជ្រៅឥតញាប់ញ័រ។', descEn: 'Deep, stable absorption on the object.' },
  { pl: 'Upekkhā Sambojjhaṅga', km: 'ឧបេក្ខាសម្ពោជ្ឈង្គ', en: 'Equanimity Factor', descKm: 'ចិត្តរាបស្មើជាកណ្តាលមិនលម្អៀង។', descEn: 'Profound balance observing all without attachment.' },
]

const magga = [
  { pl: 'Sammā-diṭṭhi', km: 'សម្មាទិដ្ឋិ (ការយល់ត្រូវ)', en: 'Right View', group: 'Paññā', descKm: 'យល់ឃើញអរិយសច្ច ៤ និងច្បាប់កម្មផល។', descEn: 'Insight into the 4 Noble Truths and kamma.' },
  { pl: 'Sammā-saṅkappa', km: 'សម្មាសង្កប្ប (ការត្រិះរិះត្រូវ)', en: 'Right Resolve', group: 'Paññā', descKm: 'គិតចាកកាម, គិតមិនព្យាបាទ, គិតមិនបៀតបៀន។', descEn: 'Thoughts of renunciation, goodwill, and non-harm.' },
  { pl: 'Sammā-vācā', km: 'សម្មាវាចា (សម្តីត្រូវ)', en: 'Right Speech', group: 'Sīla', descKm: 'វៀរចាកការកុហក, ញុះញង់, ជេរប្រមាថ, ឥតប្រយោជន៍។', descEn: 'Refraining from lying, slander, harsh talk, and idle chatter.' },
  { pl: 'Sammā-kammanta', km: 'សម្មាកម្មន្ត (ការងារត្រូវ)', en: 'Right Action', group: 'Sīla', descKm: 'វៀរចាកការសម្លាប់, លួចទ្រព្យ, ខុសក្នុងកាម។', descEn: 'Refraining from killing, stealing, and sexual misconduct.' },
  { pl: 'Sammā-ājīva', km: 'សម្មាអាជីវ (ចិញ្ចឹមជីវិតត្រូវ)', en: 'Right Livelihood', group: 'Sīla', descKm: 'ប្រកបរបររកស៊ីសុចរិត មិនបៀតបៀនសត្វនិងមនុស្ស។', descEn: 'Earning an honest livelihood free of harm and fraud.' },
  { pl: 'Sammā-vāyāma', km: 'សម្មាវាយាម (ព្យាយាមត្រូវ)', en: 'Right Effort', group: 'Samādhi', descKm: 'ព្យាយាមលះបាបចាស់ ការពារបាបថ្មី ចម្រើនបុណ្យ។', descEn: 'The four right exertions guarding the mind.' },
  { pl: 'Sammā-sati', km: 'សម្មាសតិ (រលឹកដឹងត្រូវ)', en: 'Right Mindfulness', group: 'Samādhi', descKm: 'រលឹកដឹងតាមកាយ វេទនា ចិត្ត ធម៌ (សតិបដ្ឋាន ៤)។', descEn: 'Mindful observation anchored in the 4 foundations.' },
  { pl: 'Sammā-samādhi', km: 'សម្មាសមាធិ (តម្កល់ចិត្តត្រូវ)', en: 'Right Concentration', group: 'Samādhi', descKm: 'ការសម្រេចឈានទាំង ៤ បរិសុទ្ធឥតកិលេស។', descEn: 'Unified absorption passing through the four jhānas.' },
]
</script>
