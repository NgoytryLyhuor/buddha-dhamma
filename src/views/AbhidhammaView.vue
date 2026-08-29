<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('មេរៀន ០៣ — ព្រះអភិធម្ម', 'GATHA 03 — ABHIDHAMMA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('អភិធម្មៈ វិទ្យានៃចិត្តនិងរូប', 'Abhidhamma: The Science of Mind & Matter') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('អភិ ប្រែថា ពិសេស ឬជ្រៅ; ធម្ម គឺធម៌។ អភិធម្ម គឺធម៌ដ៏ជ្រៅផុតពីសុត្តន្តធម៌ទូទៅ — វិភាគពិភពនៃសេចក្តីពិតដាច់ខាត ទៅជា បរមត្ថធម៌ (សច្ចៈដាច់ខាត) ៤ គឺ ចិត្ត ចេតសិក រូប និព្វាន។', 'Abhi means higher or deeper; Dhamma is the teaching. Abhidhamma is the deeper design of reality — it analyses the world of ultimate truths into four paramattha dhammas: Citta, Cetasika, Rūpa and Nibbāna.') }}
    </p>

    <!-- 4 ultimate realities -->
    <div class="grid md:grid-cols-2 gap-4 mt-8">
      <div v-for="(u, i) in ultimates" :key="u.en"
        class="card-paper card-paper-hover p-5"
        :style="u.n === '1' && i === 3 ? { borderColor: 'var(--gold)' } : {}">
        <div class="flex items-center justify-between">
          <span class="paali">{{ u.paali }}</span>
          <span class="font-display text-2xl" :style="{ color: 'var(--accent-bright)' }">{{ u.n }}</span>
        </div>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t(u.km, u.en) }}</h3>
        <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(u.kmBody, u.enBody) }}</p>
      </div>
    </div>

    <!-- Citta accordion -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">CITTA — 89</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ចិត្ត ៨៩ បែកខ្នែង', 'The 89 Citta in Detail') }}</h3>
      <div class="mt-5 space-y-3">
        <details v-for="g in cittaDetail" :key="g.en" class="rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <summary class="flex items-center justify-between px-4 py-3 cursor-pointer list-none" :style="{ color: 'var(--ink)' }">
            <span class="font-bold">{{ t(g.km, g.en) }}</span>
            <span class="flex items-center gap-2">
              <span class="paali">{{ g.n }}</span>
              <span class="caret" :style="{ color: 'var(--accent-bright)' }">&#9660;</span>
            </span>
          </summary>
          <div class="px-4 pb-4">
            <p class="text-xs mb-3" :style="{ color: 'var(--ink-muted)' }">{{ t(g.kmBody, g.enBody) }}</p>
            <div v-for="(sub, si) in g.subs" :key="sub.en" class="mb-3">
              <p class="flex items-center gap-2 flex-wrap text-xs font-bold" :style="{ color: 'var(--accent)' }">
                <span>{{ khNum(si + 1) }})</span>
                <span>{{ t(sub.km, sub.en) }}</span>
                <span class="paali">{{ sub.n }}</span>
                <span class="text-[10px] font-normal" :style="{ color: 'var(--ink-muted)' }">{{ sub.factor }}</span>
              </p>
              <ol v-if="sub.items" class="mt-1.5 space-y-1.5">
                <li v-for="(it, ii) in sub.items" :key="sub.en + ii" class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                  <p class="flex gap-2">
                    <span class="shrink-0" :style="{ color: 'var(--ink-faint)' }">{{ khNum(ii + 1) }}.</span>
                    <span>{{ t(it.kh, it.en) }}</span>
                  </p>
                  <p v-if="it.plain" class="mt-0.5 pl-5 text-[11px] italic" :style="{ color: 'var(--ink-muted)' }">{{ it.plain }}</p>
                </li>
              </ol>
              <p v-if="sub.note" class="text-[11px] italic mt-1" :style="{ color: 'var(--ink-muted)' }">{{ t(sub.note.km, sub.note.en) }}</p>
            </div>
          </div>
        </details>
      </div>
    </div>

    <!-- Cetasika breakdown -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">CETASIKA — 52</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ចេតសិក ៥២ ជាបួនពួក', '52 Mental Factors in Four Groups') }}</h3>
      <div class="grid md:grid-cols-2 gap-6 mt-5">
        <div>
          <div v-for="cf in cetasikaGroups.slice(0, 2)" :key="cf.en" class="mb-4">
            <p class="font-bold" :style="{ color: 'var(--accent)' }">{{ t(cf.km, cf.en) }} <span class="paali ml-1">{{ cf.n }}</span></p>
            <div class="flex flex-wrap gap-2 mt-2">
              <span v-for="c in cf.list" :key="c.kh" class="text-xs px-2.5 py-1 rounded-sm" :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--ink-soft)' }">{{ c.kh }} · {{ c.pl }}</span>
            </div>
          </div>
        </div>
        <div>
          <div v-for="cf in cetasikaGroups.slice(2)" :key="cf.en" class="mb-4">
            <p class="font-bold" :style="{ color: cf.color }">{{ t(cf.km, cf.en) }} <span class="paali ml-1">{{ cf.n }}</span></p>
            <div class="flex flex-wrap gap-2 mt-2">
              <span v-for="c in cf.list" :key="c.kh" class="text-xs px-2.5 py-1 rounded-sm" :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--ink-soft)' }">{{ c.kh }} · {{ c.pl }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="chart-box mt-2"><canvas ref="chartRef"></canvas></div>
    </div>

    <!-- Rupa -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">RŪPA — 28</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('រូប ២៨ កណ្តាលគឺមហាភូត ៤', '28 Rūpa — 4 Great Elements & 24 Derived') }}</h3>
      <div class="grid md:grid-cols-2 gap-6 mt-5">
        <div>
          <p class="font-bold" :style="{ color: 'var(--accent)' }">{{ t('មហាភូតរូប ៤', '4 Great Elements') }}</p>
          <div class="flex flex-wrap gap-2 mt-3">
            <span v-for="c in rupaGreat" :key="c.kh" class="text-xs px-2.5 py-1 rounded-sm" :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--ink-soft)' }">{{ c.kh }} · {{ c.pl }}</span>
          </div>
        </div>
        <div>
          <p class="font-bold" :style="{ color: 'var(--accent)' }">{{ t('ឧបាទាយរូប ២៤', '24 Derived Rūpa') }}</p>
          <p class="text-xs mt-2 mb-3" :style="{ color: 'var(--ink-muted)' }">{{ t('បច្ចវត្ថុ (ទ្វារទទួលអារម្មណ៍) ៥ · អារម្មណ៍ ៤ · ភេទ ២ · ហទយវត្ថុ (គ្រឹះចិត្ត) ១ · ជីវិតិន្រ្ទិយ (ជីវិតក្នុងកាយ) ១ អាហារ ១ អាកាស ១ វិញ្ញត្តិ ២ វិការ ៣ លក្ខណៈ ៤ ។', '5 sense organs, 4 objects, 2 sex, heart-base, life faculty, nutriment, space, 2 intimations, 3 transformations, 4 marks.') }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="c in rupaDerived" :key="c.kh" class="text-xs px-2.5 py-1 rounded-sm" :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--ink-soft)' }">{{ c.kh }} · {{ c.pl }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Dependent origination -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">PAṬICCASAMUPPĀDA</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('បដិច្ចសមុប្បាទ ១២ ខ្សែ', 'Dependent Origination — 12 Links') }}</h3>
      <p class="text-sm mt-2" :style="{ color: 'var(--ink-muted)' }">{{ t('វដ្ដសង្សារកើតឡើងដោយសង្កាត់នៃខ្សែនីមួយៗ៖', 'The round of rebirth spins because of this chain:') }}</p>
      <div class="grid md:grid-cols-3 gap-2 mt-4">
        <div v-for="(l, i) in links" :key="l.pl"
          class="flex items-start gap-2 p-3 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="sutra-num">{{ '១២៣៤៥៦៧៨៩'[i] || (i === 9 ? '១០' : i === 10 ? '១១' : '១២') }}</span>
          <div>
            <p class="text-sm font-bold" :style="{ color: 'var(--ink)' }">{{ t(l.kh, l.pl) }}</p>
            <p class="text-[11px]" :style="{ color: 'var(--ink-muted)' }">{{ t(l.note, l.en_note) }}</p>
          </div>
        </div>
      </div>
      <div class="verse-box p-3 mt-5">
        <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t('អវិជ្ជារលត់ ទើបសង្ខាររលត់ … ជរាមរណៈរលត់ ។ ការរលត់បណ្តាលទៅតាមលំដាប់តែងយ៉ាងនេះ។', 'With the cessation of ignorance, formations cease … birth, ageing and death all cease. Thus the whole mass of suffering ceases.') }}</p>
      </div>
    </div>

    <!-- 7 books -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">SAPTAPAKARAṆA</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('គម្ពីរ ៧ ក្បាលរបស់អភិធម្មបិដក', 'The 7 Books of the Abhidhamma Pitaka') }}</h3>
      <div class="grid md:grid-cols-2 gap-3 mt-5">
        <div v-for="(b, i) in books" :key="b.pl" class="flex gap-3 p-3 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="sutra-num">{{ '១២៣៤៥៦៧'[i] }}</span>
          <div>
            <p class="text-sm font-bold" :style="{ color: 'var(--ink)' }">{{ t(b.kh, b.pl) }}</p>
            <p class="text-[11px]" :style="{ color: 'var(--ink-muted)' }">{{ t(b.note, b.en_note) }}</p>
          </div>
        </div>
      </div>
      <p class="text-xs mt-4" :style="{ color: 'var(--ink-muted)' }">{{ t('លើសពីនេះ បដ្ឋាន (គម្ពីរទី ៧) ពន្យល់បច្ច័យ ២៤ ប្រភេទ ដែលភ្ជាប់ធម៌នីមួយៗទៅគ្នា ជាមុលគ្រឹះនៃបញ្ញាវិភាគ។', 'Beyond these, the Paṭṭhāna (book 7) details the 24 conditional relations linking all phenomena — the foundation of analytical wisdom.') }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { Chart, registerables } from 'chart.js'
import { useTheme } from '../composables/useTheme'
import { useLanguage } from '../composables/useLanguage'

Chart.register(...registerables)
const { theme, getChartColors } = useTheme()
const { t, lang } = useLanguage()

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  return String(n).split('').map(d => khDigits[Number(d)]).join('')
}

const ultimates = [
  { paali: 'CITTA', n: '89', km: 'ចិត្ត', en: 'Consciousness', kmBody: 'ចិត្តដែលដឹងអារម្មណ៍ កើតរលត់រៀងរាល់ខណៈ រាប់មិនអស់។', enBody: 'the moment of knowing an object, arising and passing every instant.' },
  { paali: 'CETASIKA', n: '52', km: 'ចេតសិក', en: 'Mental Factors', kmBody: 'ធម៌កើតព្រមជាមួយចិត្ត ដែលធ្វើឲ្យចិត្តល្អ អាក្រក់ ឬ កណ្តាល។', enBody: 'factors that accompany citta and colour it good, bad or neutral.' },
  { paali: 'RŪPA', n: '28', km: 'រូប', en: 'Matter', kmBody: 'រូបធាតុមិនដឹងអារម្មណ៍ តែកើតដោយបច្ច័យរបស់ខ្លួន។', enBody: 'physical phenomena that do not experience anything, yet arise by conditions.' },
  { paali: 'NIBBĀNA', n: '1', km: 'និព្វាន', en: 'Nibbāna', kmBody: 'អសង្ខតធម៌ តែមួយគត់ អត់ជាតិ អត់ជរា អត់មរណៈ។', enBody: 'the one unconditioned reality — no birth, no ageing, no death.' },
]

const cittaDetail = [
  {
    km: 'អកុសលចិត្ត', en: 'Unwholesome roots', n: '12',
    kmBody: 'កើតពីឫសអាក្រក់ទាំងបី។', enBody: 'rooted in the three unwholesome roots — 8 + 2 + 2.',
    subs: [
      {
        km: 'លោភមូល', en: 'Greed-rooted', n: '8', factor: 'សោមនស្ស/ឧបេក្ខា × ទិដ្ឋិសម្បយុត្ត/វិប្បយុត្ត × អសង្ខារិក/សសង្ខារិក = ២×២×២', items: [
          { kh: 'សោមនស្សសហគត (សប្បាយ) ទិដ្ឋិសម្បយុត្ត (យល់ខុស) អសង្ខារិក (កើតដោយខ្លួនឯង)', en: 'joy + wrong-view, unprompted', plain: 'ចិត្តលោភ សប្បាយ យល់ខុស កើតដោយខ្លួនឯង' },
          { kh: 'សោមនស្សសហគត (សប្បាយ) ទិដ្ឋិសម្បយុត្ត (យល់ខុស) សសង្ខារិក', en: 'joy + wrong-view, prompted', plain: 'ចិត្តលោភ សប្បាយ យល់ខុស កើតព្រោះគេញុះញង់' },
          { kh: 'សោមនស្សសហគត (សប្បាយ) ទិដ្ឋិវិប្បយុត្ត អសង្ខារិក (កើតដោយខ្លួនឯង)', en: 'joy, no wrong-view, unprompted', plain: 'ចិត្តលោភ សប្បាយ ឥតការយល់ខុស កើតដោយខ្លួនឯង' },
          { kh: 'សោមនស្សសហគត (សប្បាយ) ទិដ្ឋិវិប្បយុត្ត សសង្ខារិក', en: 'joy, no wrong-view, prompted', plain: 'ចិត្តលោភ សប្បាយ ឥតការយល់ខុស កើតព្រោះគេញុះញង់' },
          { kh: 'ឧបេក្ខាសហគត ទិដ្ឋិសម្បយុត្ត (យល់ខុស) អសង្ខារិក (កើតដោយខ្លួនឯង)', en: 'equanimity + wrong-view, unprompted', plain: 'ចិត្តលោភ អារម្មណ៍រាបស្មើ យល់ខុស កើតដោយខ្លួនឯង' },
          { kh: 'ឧបេក្ខាសហគត ទិដ្ឋិសម្បយុត្ត (យល់ខុស) សសង្ខារិក', en: 'equanimity + wrong-view, prompted', plain: 'ចិត្តលោភ អារម្មណ៍រាបស្មើ យល់ខុស កើតព្រោះគេញុះញង់' },
          { kh: 'ឧបេក្ខាសហគត ទិដ្ឋិវិប្បយុត្ត អសង្ខារិក (កើតដោយខ្លួនឯង)', en: 'equanimity, no wrong-view, unprompted', plain: 'ចិត្តលោភ អារម្មណ៍រាបស្មើ ឥតការយល់ខុស កើតដោយខ្លួនឯង' },
          { kh: 'ឧបេក្ខាសហគត ទិដ្ឋិវិប្បយុត្ត សសង្ខារិក', en: 'equanimity, no wrong-view, prompted', plain: 'ចិត្តលោភ អារម្មណ៍រាបស្មើ ឥតការយល់ខុស កើតព្រោះគេញុះញង់' },
        ]
      },
      {
        km: 'ទោសមូល', en: 'Aversion-rooted', n: '2', items: [
          { kh: 'ទោមនស្សសហគត បដិឃសម្បយុត្ត អសង្ខារិក', en: 'displeasure + aversion, unprompted', plain: 'ចិត្តក្រោធ មិនសប្បាយ កើតដោយខ្លួនឯង' },
          { kh: 'ទោមនស្សសហគត បដិឃសម្បយុត្ត សសង្ខារិក', en: 'displeasure + aversion, prompted', plain: 'ចិត្តក្រោធ មិនសប្បាយ កើតព្រោះគេញុះញង់' },
        ]
      },
      {
        km: 'មោហមូល', en: 'Delusion-rooted', n: '2', items: [
          { kh: 'ឧបេក្ខាសហគត វិចិកិច្ឆា (សង្ស័យស្ទាក់ស្ទើរ) សម្បយុត្ត', en: 'equanimity + sceptical doubt', plain: 'ចិត្តសង្ស័យច្របូកច្របល់ អារម្មណ៍រាបស្មើ' },
          { kh: 'ឧបេក្ខាសហគត ឧទ្ធច្ច (ចិត្តរាយមាយ) សម្បយុត្ត', en: 'equanimity + restlessness', plain: 'ចិត្តរាយមាយមិនស្ងប់ អារម្មណ៍រាបស្មើ' },
        ]
      },
    ]
  },
  {
    km: 'អហេតុកចិត្ត', en: 'Rootless', n: '18',
    kmBody: 'មានបីពួកគឺ វិបាកអកុសល (ផលមកពីអំពើអាក្រក់) ៧ · វិបាកកុសល (ផលមកពីអំពើល្អ) ៨ · កិរិយា (ចិត្តឥតឲ្យផល) ៣។', enBody: 'three classes — 7 unwholesome resultants, 8 wholesome resultants, 3 functionals.',
    subs: [
      {
        km: 'វិបាកអកុសល', en: 'Unwholesome resultants', n: '7', items: [
          { kh: 'ឧបេក្ខាសហគត ចក្ខុវិញ្ញាណចិត្ត', en: 'eye-consciousness', plain: 'ចិត្តដឹងអ្វីដែលឃើញដោយភ្នែក' },
          { kh: 'ឧបេក្ខាសហគត សោតវិញ្ញាណចិត្ត', en: 'ear-consciousness', plain: 'ចិត្តដឹងអ្វីដែលឮដោយត្រចៀក' },
          { kh: 'ឧបេក្ខាសហគត ឃានវិញ្ញាណចិត្ត', en: 'nose-consciousness', plain: 'ចិត្តដឹងក្លិនដោយច្រមុះ' },
          { kh: 'ឧបេក្ខាសហគត ជីវ្ហាវិញ្ញាណចិត្ត', en: 'tongue-consciousness', plain: 'ចិត្តដឹងរសដោយអណ្ដាត' },
          { kh: 'ឧបេក្ខាសហគត កាយវិញ្ញាណចិត្ត', en: 'body-consciousness', plain: 'ចិត្តដឹងការប៉ះដោយកាយ' },
          { kh: 'ឧបេក្ខាសហគត សម្បដិច្ឆនចិត្ត', en: 'receiving-consciousness', plain: 'ចិត្តទទួលយកអារម្មណ៍ដែលមកដល់' },
          { kh: 'ទោមនស្សសហគត សន្តីរណចិត្ត', en: 'investigating, with displeasure', plain: 'ចិត្តពិនិត្យអារម្មណ៍ នឹកមិនសប្បាយ' },
        ]
      },
      {
        km: 'វិបាកកុសល', en: 'Wholesome resultants', n: '8', items: [
          { kh: 'ឧបេក្ខាសហគត ចក្ខុវិញ្ញាណចិត្ត', en: 'eye-consciousness', plain: 'ចិត្តដឹងអ្វីដែលឃើញដោយភ្នែក' },
          { kh: 'ឧបេក្ខាសហគត សោតវិញ្ញាណចិត្ត', en: 'ear-consciousness', plain: 'ចិត្តដឹងអ្វីដែលឮដោយត្រចៀក' },
          { kh: 'ឧបេក្ខាសហគត ឃានវិញ្ញាណចិត្ត', en: 'nose-consciousness', plain: 'ចិត្តដឹងក្លិនដោយច្រមុះ' },
          { kh: 'ឧបេក្ខាសហគត ជីវ្ហាវិញ្ញាណចិត្ត', en: 'tongue-consciousness', plain: 'ចិត្តដឹងរសដោយអណ្ដាត' },
          { kh: 'សុខសហគត កាយវិញ្ញាណចិត្ត', en: 'body-consciousness, with pleasure', plain: 'ចិត្តដឹងការប៉ះដោយកាយ មានអារម្មណ៍ស្រួលសប្បាយ' },
          { kh: 'ឧបេក្ខាសហគត សម្បដិច្ឆនចិត្ត', en: 'receiving-consciousness', plain: 'ចិត្តទទួលយកអារម្មណ៍ដែលមកដល់' },
          { kh: 'ឧបេក្ខាសហគត សន្តីរណចិត្ត', en: 'investigating, with equanimity', plain: 'ចិត្តពិនិត្យអារម្មណ៍ អារម្មណ៍រាបស្មើ' },
          { kh: 'ឧបេក្ខាសហគត តទារម្មណសន្តីរណចិត្ត', en: 'investigating as registering (tadārammaṇa)', plain: 'ចិត្តពិនិត្យតាមដានអារម្មណ៍ម្ដងទៀត (តទារម្មណ៍)' },
        ]
      },
      {
        km: 'កិរិយាចិត្ត', en: 'Functionals (inoperative)', n: '3', items: [
          { kh: 'ឧបេក្ខាសហគត បញ្ចទ្វារាវជ្ជនចិត្ត', en: 'five-door adverting', plain: 'ចិត្តបង្វែរទៅរកអារម្មណ៍តាមទ្វារទាំងប្រាំ' },
          { kh: 'ឧបេក្ខាសហគត មនោទ្វារាវជ្ជនចិត្ត', en: 'mind-door adverting', plain: 'ចិត្តបង្វែរទៅរកអារម្មណ៍តាមទ្វារចិត្ត (មនសិការ)' },
          { kh: 'សោមនស្សសហគត ហសិតុប្បាទចិត្ត', en: 'smile-producing', plain: 'ចិត្តបង្កើតសេចក្ដីញញឹម កើតក្នុងព្រះអរហន្តប៉ុណ្ណោះ' },
        ]
      },
    ]
  },
  {
    km: 'កាមសោភណចិត្ត', en: 'Sense-sphere beautiful', n: '24',
    kmBody: 'ចិត្តល្អក្នុងលោកនៃកាម (ទ្វារទទួលទាំង ៥) ៨+៨+៨ — ទាំងបីពួកមានរូបមន្ត (រចនាសម្ព័ន្ធ) ដូចគ្នា។', enBody: 'beautiful sense-sphere consciousness, 8+8+8 — all three share the same pattern.',
    subs: [
      {
        km: 'មហាកុសល', en: 'Great wholesome', n: '8', factor: '២ ដួងនៃសោមនស្ស/ឧបេក្ខា × ២ នៃទិដ្ឋិសម្បយុត្ត/វិប្បយុត្ត × ២ នៃអសង្ខារិក/សសង្ខារិក', items: [
          { kh: 'សោមនស្សសហគត (សប្បាយ) ទិដ្ឋិសម្បយុត្ត (យល់ខុស) អសង្ខារិក (កើតដោយខ្លួនឯង)', en: 'joy + wisdom, unprompted', plain: 'ចិត្តល្អ សប្បាយ មានបញ្ញា កើតដោយខ្លួនឯង' },
          { kh: 'សោមនស្សសហគត (សប្បាយ) ទិដ្ឋិសម្បយុត្ត (យល់ខុស) សសង្ខារិក', en: 'joy + wisdom, prompted', plain: 'ចិត្តល្អ សប្បាយ មានបញ្ញា កើតព្រោះគេញុះញង់' },
          { kh: 'សោមនស្សសហគត (សប្បាយ) ទិដ្ឋិវិប្បយុត្ត អសង្ខារិក (កើតដោយខ្លួនឯង)', en: 'joy without wisdom, unprompted', plain: 'ចិត្តល្អ សប្បាយ ឥតបញ្ញា កើតដោយខ្លួនឯង' },
          { kh: 'សោមនស្សសហគត (សប្បាយ) ទិដ្ឋិវិប្បយុត្ត សសង្ខារិក', en: 'joy without wisdom, prompted', plain: 'ចិត្តល្អ សប្បាយ ឥតបញ្ញា កើតព្រោះគេញុះញង់' },
          { kh: 'ឧបេក្ខាសហគត ទិដ្ឋិសម្បយុត្ត (យល់ខុស) អសង្ខារិក (កើតដោយខ្លួនឯង)', en: 'equanimity + wisdom, unprompted', plain: 'ចិត្តល្អ អារម្មណ៍រាបស្មើ មានបញ្ញា កើតដោយខ្លួនឯង' },
          { kh: 'ឧបេក្ខាសហគត ទិដ្ឋិសម្បយុត្ត (យល់ខុស) សសង្ខារិក', en: 'equanimity + wisdom, prompted', plain: 'ចិត្តល្អ អារម្មណ៍រាបស្មើ មានបញ្ញា កើតព្រោះគេញុះញង់' },
          { kh: 'ឧបេក្ខាសហគត ទិដ្ឋិវិប្បយុត្ត អសង្ខារិក (កើតដោយខ្លួនឯង)', en: 'equanimity without wisdom, unprompted', plain: 'ចិត្តល្អ អារម្មណ៍រាបស្មើ ឥតបញ្ញា កើតដោយខ្លួនឯង' },
          { kh: 'ឧបេក្ខាសហគត ទិដ្ឋិវិប្បយុត្ត សសង្ខារិក', en: 'equanimity without wisdom, prompted', plain: 'ចិត្តល្អ អារម្មណ៍រាបស្មើ ឥតបញ្ញា កើតព្រោះគេញុះញង់' },
        ]
      },
      {
        km: 'មហាវិបាក', en: 'Great resultants', n: '8', items: [],
        note: { km: 'ឈ្មោះ និងរូបមន្ត ៨ ដួង ដូចពួកមហាកុសលខាងលើ ប៉ុន្តែជាប្រភេទវិបាកនៃកុសល។', en: 'Same 8 names and pattern as the great wholesome above, but as their resultants.' }
      },
      {
        km: 'មហាកិរិយា', en: 'Great functionals', n: '8', items: [],
        note: { km: 'ឈ្មោះ ៨ ដួង ដូចគ្នា ប៉ុន្តែជាកិរិយាចិត្តដែលកើតចំពោះព្រះអរហន្តតែប៉ុណ្ណោះ។', en: 'Same 8 names, but functional — occurring only in the Arahant.' }
      },
    ]
  },
  {
    km: 'រូបាវចរចិត្ត', en: 'Fine-material', n: '15',
    kmBody: 'ឈានរូប ៥ ដួង គុណ ៣ ពួក (៥+៥+៥)។', enBody: 'five fine-material jhānas × three classes (5+5+5).',
    subs: [
      {
        km: 'កុសល ៥', en: '5 wholesome', n: '5', items: [
          { kh: 'បឋមជ្ឈានចិត្ត', en: '1st jhāna (vitakka·vicāra·pīti·sukha·ekaggatā)', plain: 'ឈានទី១ — ចិត្តស្ងប់ជ្រៅ មានការគិតពិចារណា រីករាយ ស្រួលសប្បាយ និងមូលចិត្ត' },
          { kh: 'ទុតិយជ្ឈានចិត្ត', en: '2nd jhāna (vicāra·pīti·sukha·ekaggatā)', plain: 'ឈានទី២ — ចិត្តស្ងប់ជ្រៅ លែងគិត នៅសល់រីករាយ ស្រួលសប្បាយ មូលចិត្ត' },
          { kh: 'តតិយជ្ឈានចិត្ត', en: '3rd jhāna (pīti·sukha·ekaggatā)', plain: 'ឈានទី៣ — ចិត្តស្ងប់ជ្រៅ លែងរីករាយ នៅសល់ស្រួលសប្បាយ មូលចិត្ត' },
          { kh: 'ចតុត្ថជ្ឈានចិត្ត', en: '4th jhāna (sukha·ekaggatā)', plain: 'ឈានទី៤ — ចិត្តស្ងប់ជ្រៅ លែងរំភើប មូលចិត្ត' },
          { kh: 'បញ្ចមជ្ឈានចិត្ត', en: '5th jhāna (upekkhā·ekaggatā)', plain: 'ឈានទី៥ — ចិត្តស្ងប់ជ្រៅ អារម្មណ៍រាបស្មើ មូលចិត្ត' },
        ]
      },
      { km: 'វិបាក ៥', en: '5 resultants', n: '5', items: [], note: { km: 'ឈ្មោះដូចពួកកុសលខាងលើ តែជាវិបាកនៃឈានកុសល។', en: 'Same 5 jhānas as resultants of the wholesome.' } },
      { km: 'កិរិយា ៥', en: '5 functionals', n: '5', items: [], note: { km: 'ឈ្មោះដូចគ្នា តែកើតចំពោះព្រះអរហន្ត ក្នុងឈានសមាបត្តិ។', en: 'Same 5, arising only in the Arahant in jhāna attainment.' } },
    ]
  },
  {
    km: 'អរូបាវចរចិត្ត', en: 'Formless', n: '12',
    kmBody: 'ឈានអរូប ៤ គុណ ៣ ពួក (៤+៤+៤)។', enBody: 'four formless spheres × three classes (4+4+4).',
    subs: [
      {
        km: 'កុសល ៤', en: '4 wholesome', n: '4', items: [
          { kh: 'អាកាសានញ្ចាយតនៈ', en: 'base of infinite space', plain: 'កន្លែងនៃលំហអាកាសឥតកំណត់' },
          { kh: 'វិញ្ញាណញ្ចាយតនៈ', en: 'base of infinite consciousness', plain: 'កន្លែងនៃវិញ្ញាណឥតកំណត់' },
          { kh: 'អាកិញ្ចញ្ញាយតនៈ', en: 'base of nothingness', plain: 'កន្លែងនៃការដឹងថា គ្មានអ្វីសោះ' },
          { kh: 'នេវសញ្ញានាសញ្ញាយតនៈ (កន្លែងឥតមានសញ្ញា ក៏ឥតមិនមានសញ្ញា)', en: 'base of neither-perception-nor-non-perception', plain: 'កន្លែងដែលឥតមានសញ្ញា ក៏ឥតមិនមានសញ្ញា' },
        ]
      },
      { km: 'វិបាក ៤', en: '4 resultants', n: '4', items: [], note: { km: 'អាយតនៈ ៤ ដូចខាងលើ ជាវិបាក។', en: 'The same 4 spheres as resultants.' } },
      { km: 'កិរិយា ៤', en: '4 functionals', n: '4', items: [], note: { km: 'អាយតនៈ ៤ ដូចគ្នា ចំពោះព្រះអរហន្ត។', en: 'The same 4 spheres, only for the Arahant.' } },
    ]
  },
  {
    km: 'លោកុត្តរចិត្ត', en: 'Supramundane', n: '8',
    kmBody: 'មគ្គ ៤ និង ផល ៤ (៤+៤)។', enBody: 'four paths and four fruitions (4+4).',
    subs: [
      {
        km: 'មគ្គ ៤', en: '4 Paths', n: '4', items: [
          { kh: 'សោតាបត្តិមគ្គ', en: 'stream-entry path', plain: 'ផ្លូវចូលទន្លេសួស្ដី — លំអាងលោកកើតដំបូង កាត់កិលេសធំៗ' },
          { kh: 'សកទាគាមីមគ្គ', en: 'once-returner path', plain: 'ផ្លូវរបស់អ្នក ដែលត្រឡប់មកកើតក្នុងលោកតែម្ដងទៀតប៉ុណ្ណោះ' },
          { kh: 'អនាគាមីមគ្គ', en: 'non-returner path', plain: 'ផ្លូវរបស់អ្នក ដែលមិនត្រឡប់មកលោកនេះទៀត' },
          { kh: 'អរហត្តមគ្គ', en: 'arahant path', plain: 'ផ្លូវរបស់ព្រះអរហន្ត — រំលត់កិលេសទាំងអស់' },
        ]
      },
      {
        km: 'ផល ៤', en: '4 Fruitions', n: '4', items: [
          { kh: 'សោតាបត្តិផល', en: 'stream-entry fruition', plain: 'ផល ដែលស្រេចពីផ្លូវចូលទន្លេសួស្ដី' },
          { kh: 'សកទាគាមីផល', en: 'once-returner fruition', plain: 'ផល ដែលស្រេចពីផ្លូវរបស់អ្នកត្រឡប់មកម្ដងទៀត' },
          { kh: 'អនាគាមីផល', en: 'non-returner fruition', plain: 'ផល ដែលស្រេចពីផ្លូវរបស់អ្នកមិនត្រឡប់មកទៀត' },
          { kh: 'អរហត្តផល', en: 'arahant fruition', plain: 'ផល ដែលស្រេចពីផ្លូវព្រះអរហន្ត' },
        ]
      },
    ]
  },
]

const cetasikaGroups = [
  {
    km: 'សព្វចេតសិក', en: '7 Universals', n: '7', color: 'var(--sage)',
    list: [
      { kh: 'ផស្សៈ', pl: 'phassa · contact' }, { kh: 'វេទនា', pl: 'vedanā · feeling' },
      { kh: 'សញ្ញា', pl: 'saññā · perception' }, { kh: 'ចេតនា', pl: 'cetanā · volition' },
      { kh: 'ឯកគ្គតា (ចិត្តតម្កល់មួយ)', pl: 'ekaggatā · one-pointedness' }, { kh: 'ជីវិតិន្រ្ទិយ', pl: 'jīvitindriya · life faculty' },
      { kh: 'មនសិការ', pl: 'manasikāra · attention' },
    ]
  },
  {
    km: 'បកិណ្ណកចេតសិក', en: '6 Occasionals', n: '6', color: 'var(--sage)',
    list: [
      { kh: 'វិតក្កៈ', pl: 'vitakka · applied thought' }, { kh: 'វិចារៈ', pl: 'vicāra · sustained thought' },
      { kh: 'វីរិយៈ', pl: 'viriya · effort' }, { kh: 'បីតិ', pl: 'pīti · joy' },
      { kh: 'ឆន្ទៈ', pl: 'chanda · desire to act' }, { kh: 'អធិមោក្ខៈ', pl: 'adhimokkha · decision' },
    ]
  },
  {
    km: 'អកុសលចេតសិក', en: '14 Unwholesome', n: '14', color: 'var(--red)',
    list: [
      { kh: 'មោហៈ', pl: 'moha' }, { kh: 'អហិរិក', pl: 'ahirika' }, { kh: 'អនោត្តប្បៈ', pl: 'anottappa' },
      { kh: 'ឧទ្ធច្ចៈ', pl: 'uddhacca' }, { kh: 'លោភៈ', pl: 'lobha' }, { kh: 'ទិដ្ឋិ', pl: 'diṭṭhi' },
      { kh: 'មានៈ', pl: 'māna' }, { kh: 'ទោសៈ', pl: 'dosa' }, { kh: 'ឥស្សា', pl: 'issā' },
      { kh: 'មច្ឆរិយៈ', pl: 'macchariya' }, { kh: 'កុក្កុច្ចៈ', pl: 'kukkucca' },
      { kh: 'ថីនៈ', pl: 'thīna' }, { kh: 'មិទ្ធៈ', pl: 'middha' }, { kh: 'វិចិកិច្ឆា', pl: 'vicikicchā' },
    ]
  },
  {
    km: 'សោភណចេតសិក', en: '25 Beautiful', n: '25', color: 'var(--blue)',
    list: [
      { kh: 'សទ្ធា', pl: 'saddhā' }, { kh: 'សតិ', pl: 'sati' }, { kh: 'ហិរិ', pl: 'hiri' },
      { kh: 'ឱត្តប្បៈ', pl: 'ottappa' }, { kh: 'អលោភៈ', pl: 'alobha' }, { kh: 'អទោសៈ', pl: 'adosa' },
      { kh: 'តត្តមជ្ឈត្តតា', pl: 'tatramajjhattatā' }, { kh: 'កាយបស្សទ្ធិ', pl: 'kāyapassaddhi' },
      { kh: 'ចិត្តបស្សទ្ធិ', pl: 'cittapassaddhi' }, { kh: 'កាយលហុតា', pl: 'kāyalahutā' },
      { kh: 'ចិត្តលហុតា', pl: 'cittalahutā' }, { kh: 'កាយមុទុតា', pl: 'kāyamudutā' },
      { kh: 'ចិត្តមុទុតា', pl: 'cittamudutā' }, { kh: 'កាយកម្មញ្ញតា', pl: 'kāyakammaññatā' },
      { kh: 'ចិត្តកម្មញ្ញតា', pl: 'cittakammaññatā' }, { kh: 'កាយបាគញ្ញតា', pl: 'kāyapāguññatā' },
      { kh: 'ចិត្តបាគញ្ញតា', pl: 'cittapāguññatā' }, { kh: 'កាយុជ្ជុកតា', pl: 'kāyujjukatā' },
      { kh: 'ចិត្តុជ្ជុកតា', pl: 'cittujjukatā' }, { kh: 'សម្មាវាចា', pl: 'sammā-vācā' },
      { kh: 'សម្មាកម្មន្តៈ', pl: 'sammā-kammanta' }, { kh: 'សម្មាអាជីវៈ', pl: 'sammā-ājīva' },
      { kh: 'ករុណា', pl: 'karuṇā' }, { kh: 'មុទិតា', pl: 'muditā' }, { kh: 'បញ្ញា', pl: 'paññā' },
    ]
  },
]

const rupaGreat = [
  { kh: 'បថវី', pl: 'earth' }, { kh: 'អាបោ', pl: 'water' },
  { kh: 'តេជោ', pl: 'fire' }, { kh: 'វាយោ', pl: 'air' },
]

const rupaDerived = [
  { kh: 'ចក្ខុ', pl: 'eye' }, { kh: 'សោតៈ', pl: 'ear' }, { kh: 'ឃានៈ', pl: 'nose' },
  { kh: 'ជីវ្ហា', pl: 'tongue' }, { kh: 'កាយៈ', pl: 'body' }, { kh: 'រូបអារម្មណ៍', pl: 'visible' },
  { kh: 'សទ្ទៈ', pl: 'sound' }, { kh: 'គន្ធារម្មណ៍', pl: 'smell' }, { kh: 'រសារម្មណ៍', pl: 'taste' },
  { kh: 'ឥត្ថិភាវរូប', pl: 'femaleness' }, { kh: 'បុរិសភាវរូប', pl: 'maleness' },
  { kh: 'ហទយវត្ថុ (ទីតាំងចិត្ត)', pl: 'heart-base' }, { kh: 'ជីវិតិន្រ្ទិយរូប (កម្លាំងជីវិត)', pl: 'life faculty' },
  { kh: 'កពលីការាហារ (អាហារ)', pl: 'nutrition' }, { kh: 'អាកាសធាតុ', pl: 'space' },
  { kh: 'កាយវិញ្ញត្តិ', pl: 'bodily intimation' }, { kh: 'វចីវិញ្ញត្តិ', pl: 'verbal intimation' },
  { kh: 'លហុតា (ស្រាល) · មុទុតា (ទន់) · កម្មញ្ញតា (ប្រើបាន)', pl: 'light, soft, wieldy' },
  { kh: 'ឧបចយៈ (កើត) · សន្តតិ (បន្ត) · ជរតា (ចាស់) · អនិច្ចតា (មិនទៀង)', pl: 'originating, continuity, decay, impermanence' },
]

const links = [
  { kh: 'អវិជ្ជា', pl: 'Ignorance', note: 'មិនយល់សច្ចៈ (សេចក្តីពិត ៤)', en_note: 'not seeing the truths' },
  { kh: 'សង្ខារ', pl: 'Formations', note: 'កម្មបណ្តាល (ធ្វើឲ្យកើតដោយកម្ម)', en_note: 'kamma-volitions' },
  { kh: 'វិញ្ញាណ', pl: 'Consciousness', note: 'បដិសន្ធិ', en_note: 'rebirth linking' },
  { kh: 'នាមរូប', pl: 'Name & Form', note: 'ចិត្តកម្មរូប', en_note: 'mind & matter' },
  { kh: 'សឡាយតនៈ', pl: 'Six Bases', note: 'អាយតនៈ ៦ (ទ្វារទទួល ៦)', en_note: 'six sense doors' },
  { kh: 'ផស្សៈ', pl: 'Contact', note: 'ប៉ះអារម្មណ៍', en_note: 'sense impression' },
  { kh: 'វេទនា', pl: 'Feeling', note: 'សុខ ទុក្ខ', en_note: 'pleasant, painful' },
  { kh: 'តណ្ហា', pl: 'Craving', note: 'ប្រាថ្នាអារម្មណ៍', en_note: 'thirst for objects' },
  { kh: 'ឧបាទាន', pl: 'Clinging', note: 'កាន់តឹងមាំ', en_note: 'grasping firmly' },
  { kh: 'ភវៈ', pl: 'Becoming', note: 'បង្កើតជាតិ', en_note: 'existence' },
  { kh: 'ជាតិ', pl: 'Birth', note: 'កើតក្នុងភូមិ', en_note: 'rebirth in a realm' },
  { kh: 'ជរាមរណៈ', pl: 'Ageing & Death', note: 'វិនាសរលត់', en_note: 'decay and ending' },
]

const books = [
  { kh: 'ធម្មសង្គណី', pl: 'Dhammasaṅgaṇī', note: 'រាយបទធម៌ទាំងអស់', en_note: 'classification of dhammas' },
  { kh: 'វិភង្គ', pl: 'Vibhaṅga', note: 'គណនាការវិភាគ', en_note: 'the book of analysis' },
  { kh: 'ធាតុកថា', pl: 'Dhātukathā', note: 'ពន្យល់អំពីធាតុ', en_note: 'discourse on elements' },
  { kh: 'បុគ្គលបញ្ញត្តិ', pl: 'Puggalapaññatti', note: 'កំណត់បុគ្គល', en_note: 'designation of persons' },
  { kh: 'កថាវត្ថុ', pl: 'Kathāvatthu', note: 'វិវាទដោះស្រាយ', en_note: 'points of controversy' },
  { kh: 'យមក', pl: 'Yamaka', note: 'សំនួរគូមិនដាច់', en_note: 'the book of pairs' },
  { kh: 'បដ្ឋាន', pl: 'Paṭṭhāna', note: 'បច្ច័យ ២៤ ភ្ជាប់គ្នា', en_note: 'the great book of conditions' },
]

const chartRef = ref(null)
let chartInstance = null

function renderChart() {
  if (chartInstance) chartInstance.destroy()
  if (!chartRef.value) return
  const cc = getChartColors()
  chartInstance = new Chart(chartRef.value, {
    type: 'bar',
    data: {
      labels: [t('សព្វ ៧', 'Universals 7'), t('បកិណ្ណក ៦', 'Occasionals 6'), t('អកុសល ១៤', 'Unwholesome 14'), t('សោភណ ២៥', 'Beautiful 25')],
      datasets: [{ data: [7, 6, 14, 25], backgroundColor: ['#5f7d35', '#93a96b', '#a03a28', '#335f88'], borderRadius: 2 }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, title: { display: true, text: t('ចេតសិក ៥២', '52 Cetasika by group'), color: cc.legend, font: { size: 13 } } },
      scales: { y: { beginAtZero: true, ticks: { color: cc.legend, stepSize: 5 }, grid: { color: 'rgba(150,130,90,0.12)' } }, x: { ticks: { color: cc.legend }, grid: { display: false } } }
    }
  })
}

onMounted(renderChart)
watch([theme, lang], renderChart)
</script>