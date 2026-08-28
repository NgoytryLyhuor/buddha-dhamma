<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('ធម៌បន្ថែម ១៥ — ជីវិតព្រះសង្ឃ', 'EXTRA 15 — MONASTIC LIFE') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('ជីវិតព្រះសង្ឃ និងវិន័យ', 'Monastic Life and the Vinaya') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ព្រះសង្ឃ ជាស្តូបបន្តនៃព្រះពុទ្ធសាសនា ។ សម្រាប់អ្នកកាន់ឧបាសក–ឧបាសិកា ការយល់អំពីការរស់នៅរបស់ព្រះសង្ឃ ជួយឲ្យដឹងពីរបៀបគាំទ្របដិបត្តិ និងចូលរួមធ្វើបុណ្យ ដោយត្រូវតាមផ្លូវធម៌ ។', 'The Saṅgha is the living continuation of the Buddha\u2019s teaching. For lay men and women, understanding how monks live helps one know how to support their practice and take part in merit-making in a proper way.') }}
    </p>

    <!-- the four assemblies -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">CATUPARISĀ — ពុទ្ធបរិស័ទ ៤</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ពុទ្ធបរិស័ទ ៤ ពួក', 'The Four Assemblies') }}</h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('សង្គមអ្នកកាន់ព្រះពុទ្ធសាសនា ចែកជា ៤ ពួក ដែលហៅថា ពុទ្ធបរិស័ទ ។ អ្នកផ្ទះ មានសីល ៥ ជាគ្រឹះ សម្រាប់ដើរតាមបដិបត្តិរបស់ព្រះសង្ឃ ។', 'The community of followers of the Buddha is divided into four assemblies. Lay people keep the five precepts as the foundation, following the practice of the monks.') }}
      </p>
      <ul class="tick-list mt-4">
        <li v-for="(p, i) in parisa" :key="p.pl">
          <div class="flex items-baseline gap-3">
            <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
            <div class="min-w-0">
              <span class="paali">{{ p.pl }}</span>
              <strong class="ml-2" :style="{ color: 'var(--ink)' }">{{ t(p.km, p.en) }}</strong>
              <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(p.kmBody, p.enBody) }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- going forth / ordination -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">PABBAJJĀ &amp; UPASAMPADĀ</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ការចូលបួស និងការឧបសម្បទា', 'Going Forth and Higher Ordination') }}</h3>
      <div class="grid md:grid-cols-2 gap-6 mt-4">
        <div>
          <p class="font-display" :style="{ color: 'var(--accent)' }">{{ t('បព្វជ្ជា', 'Pabbajjā — Going Forth') }}</p>
          <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t('ការចេញបួសជាសាមណេរ ជាជំហានដំបូង ។ អ្នកបួស ដោះកាន់ទ្រព្យធនលោកិយ កាន់សីល ១០ និងសិក្សាធម៌–វិន័យ ក្នុងក្រោមសំណាក់ព្រះឧបជ្ឈាយ៍ ។', 'The first step is leaving home as a novice (sāmaṇera). The one who goes forth sets aside worldly wealth, keeps the ten precepts, and studies the Dhamma and Vinaya under a preceptor.') }}
          </p>
        </div>
        <div>
          <p class="font-display" :style="{ color: 'var(--accent)' }">{{ t('ឧបសម្បទា', 'Upasampadā — Higher Ordination') }}</p>
          <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t('ការទទួលឧបសម្បទា ជាភិក្ខុ ក្នុងសន្និបាតព្រះសង្ឃ ទើបជាព្រះភិក្ខុពេញលក្ខណៈ កាន់វិន័យ ២២៧ សិក្ខាបទ ។ សម្រាប់ភិក្ខុនី មានវិន័យច្រើនជាងនេះ ។', 'Receiving higher ordination as a monk (bhikkhu) happens in an assembly of the Saṅgha; then one keeps the 227 training rules. Nuns have a larger set of rules.') }}
          </p>
        </div>
      </div>
    </div>

    <!-- daily life of a monk -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('វារវត្ត ព្រះសង្ឃ', 'A MONK\u2019S DAILY LIFE') }}</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('សកម្មភាពប្រចាំថ្ងៃ', 'The Daily Activities') }}</h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ជីវិតភិក្ខុ ប្រព្រឹត្តទៅតាមប្រពៃណី ដ៏មានសណ្តាប់ធ្នាប់ មានកាតព្វកិច្ចរាល់ពេល ដើម្បីបដិបត្តិ និងសិក្សា ។', 'A monk\u2019s life follows a steady and orderly tradition, with duties at every time, devoted to practice and study.') }}
      </p>
      <ul class="tick-list mt-4">
        <li v-for="d in daily" :key="d.en">
          <strong :style="{ color: 'var(--ink)' }">{{ t(d.km, d.en) }}</strong>
          <span class="text-sm" :style="{ color: 'var(--ink-muted)' }"> — {{ t(d.kmBody, d.enBody) }}</span>
        </li>
      </ul>
    </div>

    <!-- the vinaya / 227 rules -->
    <div class="grid md:grid-cols-2 gap-6 mt-8">
      <div class="card-paper p-6">
        <p class="chapter-label">PĀTIMOKKHA — ប្រាតិមោក្ខ</p>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t('វិន័យ ២២៧ សិក្ខាបទ', 'The 227 Training Rules') }}</h3>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ភិក្ខុកាន់សីលវិន័យ ២២៧ សិក្ខាបទ ដែលចែកជា ៧ កង រៀងរាល់កន្លះខែ សូត្រក្នុងពិធីឧបោសថ ។', 'A monk keeps 227 training rules in seven groups, recited every half-month at the uposatha.') }}
        </p>
        <ul class="tick-list mt-3 text-sm">
          <li v-for="r in vinaya" :key="r.en">
            <strong :style="{ color: 'var(--ink)' }">{{ t(r.km, r.en) }}</strong>
            <span class="text-xs" :style="{ color: 'var(--ink-muted)' }"> — {{ t(r.kmBody, r.enBody) }}</span>
          </li>
        </ul>
      </div>
      <div class="card-paper p-6">
        <p class="chapter-label">CATURAPARISUDDHI — បរិសុទ្ធិ ៤</p>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t('សីល ៤ ប្រការ របស់ភិក្ខុ', 'The Four Kinds of Purity') }}</h3>
        <ul class="tick-list mt-3 text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          <li>{{ t('បាតិមោក្ខសំវរសីល — កាន់សីលក្នុងប្រាតិមោក្ខ', 'restraint by the pātimokkha') }}</li>
          <li>{{ t('ឥន្ទ្រិយសំវរសីល — សង្កត់ឥន្ទ្រិយ ៦', 'restraint of the six senses') }}</li>
          <li>{{ t('អាជីវបារិសុទ្ធិសីល — ចិញ្ចឹមជីវិតឲ្យបរិសុទ្ធ', 'purity of livelihood') }}</li>
          <li>{{ t('បច្ចយសន្និស្សិតសីល — បរិភោគបច្ច័យដោយពិចារណា', 'reflection on the use of requisites') }}</li>
        </ul>
        <div class="verse-box p-3 mt-4">
          <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t('វិន័យជាអាយុរបស់សាសនា; ពេលវិន័យនៅ សាសនានៅ។', 'The discipline is the life of the teaching; so long as the Vinaya stands, the Dhamma stands.') }}</p>
        </div>
      </div>
    </div>

    <!-- alms round, expanded -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">PIṆḌAPĀTA — បិណ្ឌបាត</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ការបិណ្ឌបាត និងការពិចារណាអាហារ', 'The Alms Round and Reflection on Food') }}</h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ពេលព្រឹក ព្រះសង្ឃត្រឡប់ទៅភូមិ/ក្រុង ដើម្បីបិណ្ឌបាត ដោយមិនស្រែកហៅ មិនសួរ តែឈរស្ងៀម ទទួលយកតាមសទ្ធារបស់ពុទ្ធបរិស័ទ ។ ភិក្ខុពិចារណាអាហារ ដើម្បីមិនលេងសប្បាយ មិនប្រដាប់កាយ តែដើម្បីទ្រង់ទ្រាយដងខ្លួន ឲ្យបដិបត្តិ និងសម្រេចផ្លូវបាន ។', 'In the morning the monks go into town or village on alms round, without calling out or asking — they stand silently and receive whatever devotees freely offer. The monk reflects on the food: not for pleasure, not for adornment, but only to sustain the body for practice and to attain the path.') }}
      </p>
      <div class="verse-box p-4 mt-4">
        <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">
          {{ t('បច្ចយបរិភោគដោយពិចារណា ថា «ដើម្បីបដិបត្តិ ឲ្យដល់ទីបំផុតនៃទុក្ខ»', 'Reflecting on the requisites: \u201Cfor the practice, to reach the end of suffering.\u201D') }}
        </p>
      </div>
    </div>

    <!-- four requisites -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">CATURAPACCAYĀ — បច្ច័យ ៤</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('បច្ច័យ ៤ របស់ភិក្ខុ', 'The Four Requisites of a Monk') }}</h3>
      <ul class="tick-list mt-4">
        <li v-for="(c, i) in paccaya" :key="c.pl">
          <strong :style="{ color: 'var(--ink)' }">{{ khNum(i + 1) }}. {{ t(c.km, c.en) }}</strong>
          <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(c.kmBody, c.enBody) }}</p>
        </li>
      </ul>
    </div>

    <!-- lay ways to support -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('អ្នកផ្ទះគួរដឹង', 'FOR LAY PEOPLE') }}</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('របៀបធ្វើបុណ្យទាន ឲ្យបានត្រឹមត្រូវ', 'How to Make Meritorious Offerings Properly') }}</h3>
      <ul class="tick-list mt-4">
        <li v-for="g in lohaka" :key="g.en">
          <strong :style="{ color: 'var(--ink)' }">{{ t(g.km, g.en) }}</strong>
          <span class="text-sm" :style="{ color: 'var(--ink-muted)' }"> — {{ t(g.kmBody, g.enBody) }}</span>
        </li>
      </ul>
      <div class="verse-box p-4 mt-5">
        <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">
          {{ t('ទាននោះ ត្រូវឲ្យដោយចិត្តសទ្ធា ដោយដៃខ្លួនឯង ដោយវត្ថុសមស្រប ដល់ជនសមស្រប — នេះហៅថា ទក្ខិណេយ្យទក្ខិណា បុណ្យដ៏ប្រសើរ ។', 'A gift should be given with faith, with one\u2019s own hand, with suitable material, to a suitable recipient — this is called the best of gifts.') }}
        </p>
      </div>
    </div>

    <!-- reflection for monks / daily -->
    <div class="grid md:grid-cols-2 gap-6 mt-8">
      <div class="card-paper p-6">
        <p class="chapter-label">{{ t('ពិចារណាភិក្ខុ', 'THE MONK\u2019S DAILY REFLECTIONS') }}</p>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t('អភិណ្ហបច្ចវេក្ខណៈ', 'The Daily Recollections of a Newly Ordained') }}</h3>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ភិក្ខុរំលឹករាល់ថ្ងៃ នូវសភាពពិតនៃជីវិត ដើម្បីកុំឲ្យចិត្តប្រមាទ និងឲ្យកើតសេចក្តីខ្ពើមក្នុងសង្ខារ ។', 'A monk recollects daily the true nature of life, so the mind is not heedless and disenchantment with formations arises.') }}
        </p>
        <ul class="tick-list mt-3 text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          <li>{{ t('ខ្ញុំមានភេទផ្សេង សភាពមិនទៀង មិនហួសពីសេចក្តីចាស់ឡើយ', 'I am of a nature that ages; I have not gone beyond ageing.') }}</li>
          <li>{{ t('ខ្ញុំមានសភាពឈឺ មិនហួសពីជំងឺ', 'I am subject to sickness, not beyond it.') }}</li>
          <li>{{ t('ខ្ញុំមានសភាពស្លាប់ មិនហួសពីសេចក្តីស្លាប់', 'I am subject to death, not beyond it.') }}</li>
          <li>{{ t('អ្វីៗជាទីស្រឡាញ់ មានការបែកព្រាត់', 'All that is dear must part.') }}</li>
          <li>{{ t('ខ្ញុំជាកម្មសិទ្ធិរបស់កម្ម', 'I am the owner of my deeds.') }}</li>
        </ul>
      </div>
      <div class="card-paper p-6">
        <p class="chapter-label">SANGĀHAVATTHU — សង្គហវត្ថុ ៤</p>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t('គុណជាទីទាក់ទាញចិត្ត ៤', 'The Four Bases of Sympathy') }}</h3>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ព្រះពុទ្ធទ្រង់ប្រៀនប្រដៅសង្គហវត្ថុ ៤ ជាគុណធម៌ ធ្វើឲ្យគ្នានឹងគ្នា ចុះសម្រុង ទាក់ទាញចិត្តឲ្យស្រឡាញ់គ្នា ។', 'The Buddha taught the four bases of sympathy for keeping people in harmony and drawing hearts together in love.') }}
        </p>
        <ul class="tick-list mt-3 text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          <li>{{ t('ទាន — ការឲ្យទ្រព្យដល់អ្នកដទៃ', 'dāna — giving') }}</li>
          <li>{{ t('បេយ្យវច្ចៈ — ពាក្យពិរោះ មានប្រយោជន៍', 'peyyavajja — kind and useful speech') }}</li>
          <li>{{ t('អត្ថចរិយា — ការជួយប្រយោជន៍អ្នកដទៃ', 'atthacariyā — helpfulness') }}</li>
          <li>{{ t('សមានត្តតា — ភាពមិនលើកខ្លួន', 'samānattatā — impartiality') }}</li>
        </ul>
      </div>
    </div>

    <!-- merit expanded -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">PUÑÑAKIRIYĀVATTHU — កុសលកម្ម ៣</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('កុសលកម្ម ៣ យ៉ាង', 'The Three Kinds of Merit') }}</h3>
      <ul class="tick-list mt-4">
        <li v-for="(m, i) in merit" :key="m.pl">
          <strong :style="{ color: 'var(--ink)' }">{{ khNum(i + 1) }}. {{ m.pl }} — {{ t(m.km, m.en) }}</strong>
          <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(m.kmBody, m.enBody) }}</p>
        </li>
      </ul>
      <div class="verse-box p-4 mt-5">
        <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">
          {{ t('សីលបរិសុទ្ធ ធំជាងទាន; ភាវនាចម្រើន ធំជាងសីល; ក្នុងលោក មានតែភាវនា ជាស្នាក់នៅឥតខ្ចោះ សម្រាប់ទៅបន្ត ។', 'Sīla is greater than giving; bhāvanā is greater than sīla. There is nothing like meditation for one\u2019s own welfare here or hereafter.') }}
        </p>
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

const parisa = [
  { pl: 'BHIKKHU', km: 'ភិក្ខុ', en: 'Monks', kmBody: 'ព្រះសង្ឃបរិស័ទ ជាភិក្ខុ ភិក្ខុណី កាន់វិន័យខ្ពង់ខ្ពស់ ។', enBody: 'The order of monks and nuns keeping the higher discipline.' },
  { pl: 'BHIKKHUNĪ', km: 'ភិក្ខុនី', en: 'Nuns', kmBody: 'ភិក្ខុនី ជាស្ត្រីបួស កាន់វិន័យច្រើនជាងភិក្ខុ ។', enBody: 'Ordained women keeping an even larger set of rules.' },
  { pl: 'UPĀSAKA', km: 'ឧបាសក', en: 'Lay men', kmBody: 'បុរសកាច កាន់សីល ៥ ជាអ្នកគាំទ្រព្រះសង្ឃ ។', enBody: 'Lay men who keep the five precepts and support the Saṅgha.' },
  { pl: 'UPĀSIKĀ', km: 'ឧបាសិកា', en: 'Lay women', kmBody: 'ស្ត្រីកាច កាន់សីល ៥ ជាអ្នកគាំទ្រព្រះសង្ឃ ។', enBody: 'Lay women who keep the five precepts and support the Saṅgha.' },
]

const daily = [
  { km: 'ពេលព្រឹក ភ្ញាក់ពីដេក ស្រោចស្រង់ បោសសម្អាត ថ្វាយបង្គំ', en: 'Morning duties', kmBody: 'ភ្ញាក់ពីដេក ស្រោចទឹក បោសសម្អាត ថ្វាយបង្គំព្រះ មុនបិណ្ឌបាត ។', enBody: 'waking, washing, cleaning, and paying homage before the alms round.' },
  { km: 'បិណ្ឌបាត និងបរិភោគអាហារ', en: 'Alms round and meal', kmBody: 'បិណ្ឌបាតប្រមូលអាហារ មុនថ្ងៃត្រង់ ទើបបរិភោគ ។', enBody: 'collecting food by alms round before noon, then eating once a day.' },
  { km: 'បាដិមោក្ខ សូត្រធម៌ បង្រៀនធម៌', en: 'Study and teaching', kmBody: 'សិក្សាធម៌ សូត្របាលី បង្រៀនពុទ្ធបរិស័ទ ។', enBody: 'studying the Dhamma, reciting the Pali, and teaching the lay community.' },
  { km: 'សមាធិ និងវិបស្សនា', en: 'Meditation', kmBody: 'ចម្រើនសមាធិ និងវិបស្សនា ក្នុងសេនាសនៈ ។', enBody: 'developing concentration and insight in the dwelling.' },
  { km: 'ពិធីឧបោសថ រៀងរាល់ ១៥ ថ្ងៃ', en: 'Uposatha observance', kmBody: 'រៀងរាល់កន្លះខែ សូត្របាតិមោក្ខ ក្នុងសន្និបាតសង្ឃ ។', enBody: 'every half-month, reciting the pātimokkha in the assembly.' },
  { km: 'ពេលល្ងាច ថ្វាយបង្គំ ពិចារណាធម៌', en: 'Evening duties', kmBody: 'ពេលល្ងាច ថ្វាយបង្គំ ស្តាប់ធម៌ ពិចារណា ហើយចូលដេកដោយស្ងប់ ។', enBody: 'in the evening, homage, hearing the Dhamma, reflection, and quiet rest.' },
]

const vinaya = [
  { km: 'បារាជិក ៤', en: 'Pārājika (defeat)', kmBody: 'ការដែលធ្វើហើយ ត្រូវចាកចេញពីភិក្ខុ រឿងកាម លួច សម្លាប់ បញ្ឆោត ។', enBody: 'four grave offences that end the monk\u2019s life in the Saṅgha.' },
  { km: 'សង្ឃាទិសេស ១៣', en: 'Saṅghādisesa', kmBody: 'ការដែលត្រូវអង្គសង្ឃបណ្តុះបណ្តាល ឲ្យឃើញកំហុស ។', enBody: 'serious faults requiring the Saṅgha to decide and rehabilitate.' },
  { km: 'អនិយត ២', en: 'Aniyata (undetermined)', kmBody: 'សិក្ខាបទ ដែលប្រែប្រួលតាមកាលៈទេសៈ ។', enBody: 'rules whose penalty depends on the circumstances.' },
  { km: 'និស្សគ្គិយបាចិត្តិយ ៣០', en: 'Nissaggiya pācittiya', kmBody: 'ការដែលត្រូវលះបង់វត្ថុ ហើយខាតកំហុស ។', enBody: 'offences involving forfeiture of an object.' },
  { km: 'បាចិត្តិយ ៩២', en: 'Pācittiya', kmBody: 'ការខុសដែលត្រូវខាតកំហុស ។', enBody: 'offences requiring confession and acknowledgment.' },
  { km: 'បាដិទេសនីយ ៤', en: 'Pāṭidesanīya', kmBody: 'ការខុសដែលត្រូវសារភាព ។', enBody: 'offences to be acknowledged and confessed.' },
  { km: 'សេខិយ ៧៥ និងអតិកត្តិធម៌', en: 'Sekhiya and adhikaraṇa-samathā', kmBody: 'សិក្ខាបទសម្រាប់បដិបត្តិតូចតាច និងការរំលត់ជម្លោះ ។', enBody: 'rules of good conduct and the settling of disputes.' },
]

const paccaya = [
  { pl: 'CĪVARA', km: 'ចីវរ', en: 'Robes', kmBody: 'សំពត់សម្រាប់ស្លៀកដណ្តប់ រក្សាកាយ ឲ្យត្រជាក់ និងកុំឲ្យអាស្រូវ ។', enBody: 'cloth for the body, protecting from heat and shame.' },
  { pl: 'PIṆḌAPĀTA', km: 'បិណ្ឌបាត', en: 'Alms food', kmBody: 'អាហារប្រមូលដោយបិណ្ឌបាត ដើម្បីទ្រង់ទ្រាយដងខ្លួន ។', enBody: 'food gathered on the alms round to sustain the body.' },
  { pl: 'SENĀSANA', km: 'សេនាសនៈ', en: 'Dwelling', kmBody: 'ទីនៅ វត្ត សម្រាប់រស់នៅ បដិបត្តិ សិក្សា ការពារគ្រោះថ្នាក់ ។', enBody: 'a place to live, practice, and study, protected from danger.' },
  { pl: 'BESAJJĀ', km: 'ភេសជ្ជៈ', en: 'Medicine', kmBody: 'ថ្នាំសម្រាប់បន្ធូរបន្ថយជំងឺ ឲ្យរស់នៅបានសម្រាប់បដិបត្តិ ។', enBody: 'medicine for illness, so one may continue the practice.' },
]

const lohaka = [
  { km: 'ឲ្យបាយទានពេលព្រឹក', en: 'Offer morning food', kmBody: 'រៀបចំម្ហូបពីពេលព្រឹក សម្រាប់ព្រះសង្ឃ ព្រមទាំងភាជនៈ ។', enBody: 'Prepare food in the morning for the monks, along with bowls.' },
  { km: 'ឲ្យបច្ច័យ ៤', en: 'Offer the four requisites', kmBody: 'ចីវរ បាយ សេនាសនៈ ថ្នាំ ។', enBody: 'Robes, food, lodging, and medicine.' },
  { km: 'ថែរក្សាវត្តអារាម', en: 'Maintain the temple', kmBody: 'លាងជូត បោសសម្អាត ជួសជុល ទាំងដឹងកាតព្វកិច្ចជនវត្ត ។', enBody: 'Clean, repair, and know one\u2019s duties to the temple.' },
  { km: 'ការពារព្រះសង្ឃ', en: 'Protect the monks', kmBody: 'កាលព្រះសង្ឃមានទុក្ខ ទៅជួយរំលែក ការពារគ្រោះថ្នាក់ ។', enBody: 'Help and guard them when they are in trouble or danger.' },
  { km: 'បណ្តុះសទ្ធាក្នុងកូនចៅ', en: 'Nurture faith in children', kmBody: 'បង្រៀនកូនចៅឲ្យចេះគោរព និងធ្វើបុណ្យតាំងពីតូច ។', enBody: 'Teach children to respect and make merit from a young age.' },
]

const merit = [
  { pl: 'DĀNA', km: 'បុណ្យទាន', en: 'Giving', kmBody: 'ការឲ្យទាន ជាដើមនៃកុសល ឲ្យដោយគោរព ដោយចិត្តស្អាត ។', enBody: 'Giving is the beginning of merit, given with respect and a pure heart.' },
  { pl: 'SĪLA', km: 'សីល', en: 'Virtue', kmBody: 'ការកាន់សីលឲ្យបរិសុទ្ធ ធំជាងទាន ជាគ្រឹះនៃសមាធិ និងបញ្ញា ។', enBody: 'Keeping pure sīla is greater than giving, the foundation of concentration and wisdom.' },
  { pl: 'BHĀVANĀ', km: 'ភាវនា', en: 'Meditation', kmBody: 'ការចម្រើនសមាធិ និងវិបស្សនា ធំជាងសីល នាំឲ្យដល់សេចក្តីស្ងប់ និងបញ្ញា ។', enBody: 'Developing concentration and insight is greatest, leading to peace and wisdom.' },
]
</script>
