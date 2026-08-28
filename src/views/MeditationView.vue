<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ០៦ — សមាធិ', 'GATHA 06 — MEDITATION') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('ភាវនា ទូន្មានចិត្ត', 'Bhāvanā: Cultivating the Mind') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ភាវនា ប្រែថា ការធ្វើឲ្យរីកចម្រើន ការហ្វឹកហាត់ចិត្ត។ ចិត្តហ្វឹកហាត់ល្អ នាំមកនូវសុខ; ចិត្តមិនបានហ្វឹកហាត់ នាំមកនូវទុក្ខ។', 'Bhāvanā means making-to-grow — training the mind. A well-trained mind brings happiness; an untrained mind brings suffering.') }}
    </p>

    <!-- Samatha vs Vipassana -->
    <div class="grid md:grid-cols-2 gap-6 mt-8">
      <div class="card-paper p-6">
        <p class="chapter-label" style="color: var(--blue)">SAMATHA</p>
        <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('សមថភាវនា', 'Tranquility Meditation') }}</h3>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t('តម្កល់ចិត្តឲ្យស្ងប់ ចំពោះអារម្មណ៍តែមួយ ផ្តល់សេចក្តីស្ងប់ និងឈាន។', 'Steadies the mind on one object, giving calm and the jhānas.') }}</p>
        <ul class="tick-list mt-3">
          <li v-for="s in samatha" :key="s.en"><strong :style="{ color: 'var(--ink)' }">{{ t(s.km, s.en) }}</strong><span class="text-xs" :style="{ color: 'var(--ink-muted)' }"> — {{ s.pl }}</span></li>
        </ul>
      </div>
      <div class="card-paper p-6">
        <p class="chapter-label" style="color: var(--accent)">VIPASSANĀ</p>
        <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('វិបស្សនាភាវនា', 'Insight Meditation') }}</h3>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t('ឃើញច្បាស់នូវកាយ វេទនា ចិត្ត ធម៌ ថាជាអនិច្ចំ ទុក្ខំ អនត្តា — នាំឲ្យរួចផុត។', 'Clearly sees body, feeling, mind, dhammas as impermanent, unsatisfactory, non-self — leading to liberation.') }}</p>
        <ul class="tick-list mt-3">
          <li v-for="s in vipassana" :key="s.en"><strong :style="{ color: 'var(--ink)' }">{{ t(s.km, s.en) }}</strong><span class="text-xs" :style="{ color: 'var(--ink-muted)' }"> — {{ s.pl }}</span></li>
        </ul>
      </div>
    </div>

    <!-- 4 satipatthana -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">SATIPAṬṬHĀNA</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('សតិបដ្ឋាន ៤', 'The Four Foundations of Mindfulness') }}</h3>
      <div class="grid md:grid-cols-4 gap-3 mt-5">
        <div v-for="(sf, i) in sati" :key="sf.en" class="p-4 rounded-sm text-center" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
          <p class="font-display text-base mt-1" :style="{ color: 'var(--ink)' }">{{ t(sf.km, sf.en) }}</p>
          <p class="text-[11px] mt-1" :style="{ color: 'var(--ink-muted)' }">{{ t(sf.kmBody, sf.enBody) }}</p>
        </div>
      </div>
    </div>

    <!-- 5 hindrances + 7 factors -->
    <div class="grid lg:grid-cols-2 gap-6 mt-8">
      <div class="card-paper p-6">
        <p class="chapter-label" style="color: var(--red)">NĪVARAṆA</p>
        <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('នីវរណៈ ៥', 'Five Hindrances') }}</h3>
        <ul class="tick-list mt-3">
          <li v-for="h in hindrances" :key="h.en">
            <strong :style="{ color: 'var(--ink)' }">{{ t(h.km, h.en) }}</strong>
            <span class="text-xs" :style="{ color: 'var(--ink-muted)' }"> — {{ h.pl }} · {{ t(h.kmBody, h.enBody) }}</span>
          </li>
        </ul>
      </div>
      <div class="card-paper p-6">
        <p class="chapter-label" style="color: var(--sage)">SAMBOJJHAṄGA</p>
        <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ពោជ្ឈង្គ ៧', 'Seven Factors of Awakening') }}</h3>
        <ul class="tick-list mt-3">
          <li v-for="f in factors" :key="f.en">
            <strong :style="{ color: 'var(--ink)' }">{{ t(f.km, f.en) }}</strong>
            <span class="text-xs" :style="{ color: 'var(--ink-muted)' }"> — {{ f.pl }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- practical steps -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">PAṬIPADĀ</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ការចាប់ផ្តើមហាត់សមាធិ', 'How to Begin Sitting') }}</h3>
      <ul class="tick-list mt-4">
        <li v-for="s in steps" :key="s.en">{{ t(s.km, s.en) }}</li>
      </ul>
      <div class="verse-box p-3 mt-5">
        <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t('ភាវិតមានត្តយោ ចិត្តំ សុខា នញ្ឆន្តិ មានុសា — ចិត្តដែលបានហ្វឹកហាត់ល្អ ជាមូល នាំសុខមកឲ្យមនុស្ស។', 'A mind well tamed brings happiness to a human being.') }}</p>
        <p class="text-[10px] tracking-widest uppercase mt-1" :style="{ color: 'var(--ink-faint)' }">Dhammapada 35</p>
      </div>
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

const samatha = [
  { km: 'កម្មដ្ឋាន ៤០', en: '40 Meditation Subjects', pl: 'kammaṭṭhāna' },
  { km: 'ប្រគំដង្ហើមតែម្នាក់ឯង', en: 'Single-minded rest', pl: 'ānāpāna' },
  { km: 'ឈាន ៤', en: 'The Four Jhānas', pl: 'jhāna' },
]

const vipassana = [
  { km: 'វិច្ចិក្ខេធ្យ... សញ្ញា', en: 'Insight into the three marks', pl: 'tilakkhaṇa' },
  { km: 'ដឹងកើតរលត់រៀងរាល់ខណៈ', en: 'Seeing arising & vanishing', pl: 'udayabbaya' },
  { km: 'ខ្វាត់ចេញពីតណ្ហា', en: 'Letting go of clinging', pl: 'nibbidā' },
]

const sati = [
  { km: 'កាយានុបស្សនា', en: 'Contemplating Body', kmBody: 'ដង្ហើម ឥរិយាបថ', enBody: 'breath, postures, body parts' },
  { km: 'វេទនានុបស្សនា', en: 'Contemplating Feeling', kmBody: 'សុខ ទុក្ខ កណ្តាល', enBody: 'pleasant, painful, neutral' },
  { km: 'ចិត្តានុបស្សនា', en: 'Contemplating Mind', kmBody: 'ចិត្តលោភ ឬ ស្ងប់', enBody: 'greedy or free, scattered or calm' },
  { km: 'ធម្មានុបស្សនា', en: 'Contemplating Dhammas', kmBody: 'នីវរណៈ ពោជ្ឈង្គ', enBody: 'hindrances, factors, aggregates' },
]

const hindrances = [
  { km: 'កាមច្ឆន្ទៈ', en: 'Sense Desire', pl: 'kāmacchanda', kmBody: 'ប្រាថ្នាកាម', enBody: 'longing for pleasures' },
  { km: 'ព្យាបាទៈ', en: 'Ill-will', pl: 'byāpāda', kmBody: 'ខឹងស្អប់', enBody: 'resentment' },
  { km: 'ថីនមិទ្ធៈ', en: 'Sloth & Torpor', pl: 'thīnamiddha', kmBody: 'ងងុយដេក', enBody: 'dullness, drowsiness' },
  { km: 'ឧទ្ធច្ចកុក្កុច្ចៈ', en: 'Restlessness & Remorse', pl: 'uddhaccakukkucca', kmBody: 'ចិត្តរាយមាយ', enBody: 'scattered, worried mind' },
  { km: 'វិចិកិច្ឆា', en: 'Sceptical Doubt', pl: 'vicikicchā', kmBody: 'សង្ស័យស្ទាក់ស្ទើរ', enBody: 'hesitation, wavering' },
]

const factors = [
  { km: 'សតិ', en: 'Mindfulness', pl: 'sati' },
  { km: 'ធម្មវិចយៈ', en: 'Investigation', pl: 'dhammavicaya' },
  { km: 'វិរិយៈ', en: 'Energy', pl: 'viriya' },
  { km: 'បីតិ', en: 'Rapture', pl: 'pīti' },
  { km: 'បស្សទ្ធិ', en: 'Tranquility', pl: 'passaddhi' },
  { km: 'សមាធិ', en: 'Concentration', pl: 'samādhi' },
  { km: 'ឧបេក្ខា', en: 'Equanimity', pl: 'upekkhā' },
]

const steps = [
  { km: 'អង្គុយឲ្យផុយ ខ្នងត្រង់ ប្រព្រឹត្តដោយស្រួល', en: 'Sit comfortably with a straight back and relax the body.' },
  { km: 'តម្កល់សតិនៅលើដង្ហើមចូល-ចេញ', en: 'Rest attention on the sensation of breathing in and out.' },
  { km: 'ពេលចិត្តរវើយ កុំខឹងរកខ្លួនឯង — ឃើញហើយដឹង ទើបត្រឡប់មកដង្ហើម', en: 'When the mind wanders, do not scold yourself — notice it and gently return.' },
  { km: 'ហាត់រាល់ថ្ងៃ ៥-១០ នាទី ស្ថិរភាពសំខាន់ជាងច្រើន', en: 'Practise daily for 5–10 minutes; consistency beats duration.' },
  { km: 'យកសតិទៅជាមួយការងារ ការហូប ការដើរ', en: 'Bring mindfulness into work, eating and walking.' },
]
</script>