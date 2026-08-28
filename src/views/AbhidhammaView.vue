<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ០៣ — ព្រះអភិធម្ម', 'GATHA 03 — ABHIDHAMMA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('អភិធម្មៈ វិទ្យានៃចិត្តនិងរូប', 'Abhidhamma: The Science of Mind & Matter') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('អភិ ប្រែថា ពិសេស ឬជ្រាលជ្រៅ; ធម្ម គឺធម៌។ អភិធម្ម គឺធម៌ដ៏ជ្រាលជ្រៅផុតពីសុទ្ធាន្តធម៌ទូទៅ — វិភាគពិភពនៃសេចក្តីពិតដាច់ខាត ទៅជា បរមត្ថធម៌ ៤ គឺ ចិត្ត ចេតសិក រូប និព្វាន។', 'Abhi means higher or deeper; Dhamma is the teaching. Abhidhamma is the deeper design of reality — it analyses the world of ultimate truths into four paramattha dhammas: Citta, Cetasika, Rūpa and Nibbāna.') }}
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
              <span :style="{ color: 'var(--accent-bright)' }">&#9662;</span>
            </span>
          </summary>
          <div class="px-4 pb-4">
            <p class="text-xs mb-3" :style="{ color: 'var(--ink-muted)' }">{{ t(g.kmBody, g.enBody) }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="c in g.chips" :key="c" class="text-xs px-2.5 py-1 rounded-sm" :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--ink-soft)' }">{{ c }}</span>
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
          <universal>
          </universal>
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
          <p class="text-xs mt-2 mb-3" :style="{ color: 'var(--ink-muted)' }">{{ t('បច្ចវត្ថុ ៥ អារម្មណ៍ ៤ ភេទ ២ ហទយ ១ ជីវិតិន្រ្ទិយ ១ អាហារ ១ អាកាស ១ វិញ្ញត្តិ ២ វិការ ៣ លក្ខណៈ ៤ ។', '5 sense organs, 4 objects, 2 sex, heart-base, life faculty, nutriment, space, 2 intimations, 3 transformations, 4 marks.') }}</p>
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
            <p class="text-[11px]" :style="{ color: 'var(--ink-muted)' }">{{ l.note }}</p>
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
            <p class="text-[11px]" :style="{ color: 'var(--ink-muted)' }">{{ b.note }}</p>
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

const ultimates = [
  { paali: 'CITTA', n: '89', km: 'ចិត្ត', en: 'Consciousness', kmBody: 'ចិត្តដែលដឹងអារម្មណ៍ កើតរលត់រៀងរាល់ខណៈ រាប់មិនអស់។', enBody: 'the moment of knowing an object, arising and passing every instant.' },
  { paali: 'CETASIKA', n: '52', km: 'ចេតសិក', en: 'Mental Factors', kmBody: 'ធម៌ប្រចាំចិត្ត ជាគ្រឿងតាកបែងសភាពល្អ អាក្រក់ កណ្តាល។', enBody: 'factors that accompany citta and colour it good, bad or neutral.' },
  { paali: 'RŪPA', n: '28', km: 'រូប', en: 'Matter', kmBody: 'រូបធាតុមិនដឹងអារម្មណ៍ តែកើតដោយបច្ច័យរបស់ខ្លួន។', enBody: 'physical phenomena that do not experience anything, yet arise by conditions.' },
  { paali: 'NIBBĀNA', n: '1', km: 'និព្វាន', en: 'Nibbāna', kmBody: 'អសង្ខតធម៌ តែមួយគត់ អត់ជាតិ អត់ជរា អត់មរណៈ។', enBody: 'the one unconditioned reality — no birth, no ageing, no death.' },
]

const cittaDetail = [
  { km: 'អកុសលចិត្ត', en: 'Unwholesome roots', n: '12', kmBody: 'កើតពីលោភៈ ទោសៈ មោហៈ។', enBody: 'rooted in greed, aversion, delusion.', chips: ['លោភមូល ៨ (8)', 'ទោសមូល ២ (2)', 'មោហមូល ២ (2)'] },
  { km: 'អហេតុកចិត្ត', en: 'Rootless', n: '18', kmBody: 'មិនមានឫសល្អឬអាក្រក់។', enBody: 'without wholesome or unwholesome roots.', chips: ['កុសលវិបាក ៧ (7)', 'អកុសលវិបាក ៧ (7)', 'កិរិយាចិត្ត ៤ (4)'] },
  { km: 'កាមសោភណចិត្ត', en: 'Sense-sphere beautiful', n: '24', kmBody: 'ចិត្តស្រស់ស្អាតក្នុងកាមលោក។', enBody: 'beautiful consciousness of the sense world.', chips: ['មហាកុសល ៨ (8)', 'មហាវិបាក ៨ (8)', 'មហាកិរិយា ៨ (8)'] },
  { km: 'រូបាវចរចិត្ត', en: 'Fine-material', n: '15', kmBody: 'ចិត្តឈានទាំង ៥ ដួងៗ គុណ ៣។', enBody: 'five rūpa-jhānas × kusala/vipāka/kiriya.', chips: ['កុសល ៥ (5)', 'វិបាក ៥ (5)', 'កិរិយា ៥ (5)'] },
  { km: 'អរូបាវចរចិត្ត', en: 'Formless', n: '12', kmBody: 'ឈានអរូប ៤ គឺ អាកាសានញ្ចាយតនៈ វិញ្ញាណញ្ចាយតនៈ អាកិញ្ចញ្ញាយតនៈ នេវសញ្ញានាសញ្ញាយតនៈ។', enBody: 'four arūpa spheres × three.', chips: ['កុសល ៤ (4)', 'វិបាក ៤ (4)', 'កិរិយា ៤ (4)'] },
  { km: 'លោកុត្តរចិត្ត', en: 'Supramundane', n: '8', kmBody: 'ចិត្តដែលផុតចាកលោក។', enBody: 'transcending the world.', chips: ['សោតាបត្តិមគ្គ· ផល', 'សកទាគាមីមគ្គ· ផល', 'អនាគាមីមគ្គ· ផល', 'អរហត្តមគ្គ· ផល'] },
]

const cetasikaGroups = [
  {
    km: 'សព្វចេតសិក', en: '7 Universals', n: '7', color: 'var(--sage)',
    list: [
      { kh: 'ផស្សៈ', pl: 'phassa · contact' }, { kh: 'វេទនា', pl: 'vedanā · feeling' },
      { kh: 'សញ្ញា', pl: 'saññā · perception' }, { kh: 'ចេតនា', pl: 'cetanā · volition' },
      { kh: 'ឯកគ្គតា', pl: 'ekaggatā · one-pointedness' }, { kh: 'ជីវិតិន្រ្ទិយ', pl: 'jīvitindriya · life faculty' },
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
  { kh: 'បឋវី', pl: 'earth' }, { kh: 'អាបោ', pl: 'water' },
  { kh: 'តេជោ', pl: 'fire' }, { kh: 'វាយោ', pl: 'air' },
]

const rupaDerived = [
  { kh: 'ចក្ខុ', pl: 'eye' }, { kh: 'សោតៈ', pl: 'ear' }, { kh: 'ឃានៈ', pl: 'nose' },
  { kh: 'ជីវ្ហា', pl: 'tongue' }, { kh: 'កាយៈ', pl: 'body' }, { kh: 'រូបអារម្មណ៍', pl: 'visible' },
  { kh: 'សទ្ទៈ', pl: 'sound' }, { kh: 'គន្ធារម្មណ៍', pl: 'smell' }, { kh: 'រសារម្មណ៍', pl: 'taste' },
  { kh: 'ឥត្ថិភាវរូប', pl: 'femaleness' }, { kh: 'បុរិសភាវរូប', pl: 'maleness' },
  { kh: 'ហទយវត្ថុ', pl: 'heart-base' }, { kh: 'ជីវិតិន្រ្ទិយរូប', pl: 'life faculty' },
  { kh: 'កពលីការាហារ', pl: 'nutrition' }, { kh: 'អាកាសធាតុ', pl: 'space' },
  { kh: 'កាយវិញ្ញត្តិ', pl: 'bodily intimation' }, { kh: 'វចីវិញ្ញត្តិ', pl: 'verbal intimation' },
  { kh: 'លហុតា· មុទុតា· កម្មញ្ញតា', pl: 'light, soft, wieldy' },
  { kh: 'ឧបចយៈ· សន្តតិ· ជរតា· អនិច្ចតា', pl: 'originating, continuity, decay, impermanence' },
]

const links = [
  { kh: 'អវិជ្ជា', pl: 'Ignorance', note: 'មិនយល់សច្ចៈ', en_note: 'not seeing the truths' },
  { kh: 'សង្ខារ', pl: 'Formations', note: 'កម្មបណ្តាល', en_note: 'kamma-volitions' },
  { kh: 'វិញ្ញាណ', pl: 'Consciousness', note: 'បដិសន្ធិ', en_note: 'rebirth linking' },
  { kh: 'នាមរូប', pl: 'Name & Form', note: 'ចិត្តកម្មរូប', en_note: 'mind & matter' },
  { kh: 'សឡាយតនៈ', pl: 'Six Bases', note: 'អាយតនៈ ៦', en_note: 'six sense doors' },
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