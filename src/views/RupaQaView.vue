<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សំណួរ–ចម្លើយ រូបបរមត្ថ ភាគ ៣៣ — ឱឡារិករូប និង សុខុមរូប', 'RŪPA PARAMATTHA PART 33 — GROSS & SUBTLE MATTER') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('ឱឡារិករូប និង សុខុមរូប', 'Oḷārika-rūpa & Sukhuma-rūpa') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ក្នុងរូប ២៨ ប្រភេទ ត្រូវបានចែកជា រូបក្រាស (ឱឡារិករូប) ១២ និង រូបម៉ត់ (សុខុមរូប) ១៦។ ទំព័រនេះប្រមូលសំណួរ-ចម្លើយ តាមគម្រោងរៀនរូបបរមត្ថ ភាគ ៣៣ ដើម្បីជួយប្រឡង និងរំឭកឡើងវិញ។', 'Of the 28 kinds of matter, twelve are gross (oḷārika) and sixteen are subtle (sukhuma). This page gathers the question-and-answers of Rūpa Paramattha part 33, for review and examination.') }}
    </p>

    <div class="mt-8 space-y-4">
      <details v-for="(qa, i) in qas" :key="i" class="card-paper p-6 md:p-8" :open="i === 0">
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
          <div class="mt-2 p-3 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
            <p class="text-[10px] font-bold tracking-widest uppercase" :style="{ color: 'var(--accent)' }">{{ t('ចម្លើយ', 'THE ANSWER') }}</p>
            <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(qa.aK, qa.aE) }}</p>
          </div>
        </div>
      </details>
    </div>

    <h2 class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ឥន្រ្ទិយរូប និង អនិន្រ្ទិយរូប', 'Indriya-rūpa & Anindriya-rūpa') }}
    </h2>
    <p class="mt-3 leading-loose text-sm" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ឥន្រ្ទិយរូប (រូបជាឥន្រ្ទិយៈ) មាន ៨ គឺ បសាទរូប ៥ ភាវរូប ២ ជីវិតរូប ១។ អនិន្រ្ទិយរូប (រូបដែលមិនមែនឥន្រ្ទិយៈ) មាន ២០។ រួមគ្នាជារូប ២៨ ទាំងអស់។', 'Indriya-rūpa (faculty matter) numbers 8: 5 sensitives, 2 sex-rūpas and life-faculty. Anindriya-rūpa (non-faculty matter) numbers 20. Together they make up all 28 rūpas.') }}
    </p>

    <div class="mt-6 space-y-4">
      <details v-for="(qa, i) in anindriyaQas" :key="i" class="card-paper p-6 md:p-8">
        <summary class="select-none">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <h3 class="font-display text-lg md:text-xl leading-snug min-w-0" :style="{ color: 'var(--ink)' }">
              <span class="sutra-num mr-2 align-middle" :style="{ color: 'var(--accent-bright)' }">{{ khNum(qas.length + i + 1) }}</span>
              {{ t(qa.qK, qa.qE) }}
            </h3>
            <span class="caret shrink-0 mt-1" :style="{ color: 'var(--accent-bright)' }">&#9660;</span>
          </div>
        </summary>

        <div class="mt-5">
          <div class="mt-2 p-3 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
            <p class="text-[10px] font-bold tracking-widest uppercase" :style="{ color: 'var(--accent)' }">{{ t('ចម្លើយ', 'THE ANSWER') }}</p>
            <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(qa.aK, qa.aE) }}</p>
          </div>
        </div>
      </details>
    </div>

    <h2 class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('វត្ថុរូប និង អវត្ថុរូប', 'Vatthu-rūpa & Avatthu-rūpa') }}
    </h2>
    <p class="mt-3 leading-loose text-sm" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ដោយវត្ថុ រូប ២៨ ចែកជា វត្ថុរូប ៦ និង អវត្ថុរូប ២២។ វត្ថុរូប គឺរូបដែលជាទីអាស្រ័យនៃចិត្តចេតសិកកើតឡើង។', 'By way of physical base, the 28 rūpas divide into 6 vatthu-rūpas (bases) and 22 avatthu-rūpas (non-bases). Vatthu-rūpa is matter that serves as the base for consciousness and mental factors.') }}
    </p>

    <div class="mt-6 space-y-4">
      <details v-for="(qa, i) in vatthuQas" :key="i" class="card-paper p-6 md:p-8">
        <summary class="select-none">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <h3 class="font-display text-lg md:text-xl leading-snug min-w-0" :style="{ color: 'var(--ink)' }">
              <span class="sutra-num mr-2 align-middle" :style="{ color: 'var(--accent-bright)' }">{{ khNum(qas.length + anindriyaQas.length + i + 1) }}</span>
              {{ t(qa.qK, qa.qE) }}
            </h3>
            <span class="caret shrink-0 mt-1" :style="{ color: 'var(--accent-bright)' }">&#9660;</span>
          </div>
        </summary>

        <div class="mt-5">
          <div class="mt-2 p-3 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
            <p class="text-[10px] font-bold tracking-widest uppercase" :style="{ color: 'var(--accent)' }">{{ t('ចម្លើយ', 'THE ANSWER') }}</p>
            <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(qa.aK, qa.aE) }}</p>
          </div>
        </div>
      </details>
    </div>

    <h2 class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('អជ្ឈត្តិករូប និង ពាហិររូប', 'Ajjhattika-rūpa & Bāhira-rūpa') }}
    </h2>
    <p class="mt-3 leading-loose text-sm" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ដោយរូបសំខាន់ រូប ២៨ ចែកជា អជ្ឈត្តិករូប ៥ (បសាទរូប ៥) និង ពាហិររូប ២៣។', 'By important and less-important matter, the 28 rūpas divide into 5 ajjhattika-rūpas (internal, the 5 sensitives) and 23 bāhira-rūpas (external).') }}
    </p>

    <div class="mt-6 space-y-4">
      <details v-for="(qa, i) in ajjhattikaQas" :key="i" class="card-paper p-6 md:p-8">
        <summary class="select-none">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <h3 class="font-display text-lg md:text-xl leading-snug min-w-0" :style="{ color: 'var(--ink)' }">
              <span class="sutra-num mr-2 align-middle" :style="{ color: 'var(--accent-bright)' }">{{ khNum(qas.length + anindriyaQas.length + vatthuQas.length + i + 1) }}</span>
              {{ t(qa.qK, qa.qE) }}
            </h3>
            <span class="caret shrink-0 mt-1" :style="{ color: 'var(--accent-bright)' }">&#9660;</span>
          </div>
        </summary>

        <div class="mt-5">
          <div class="mt-2 p-3 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
            <p class="text-[10px] font-bold tracking-widest uppercase" :style="{ color: 'var(--accent)' }">{{ t('ចម្លើយ', 'THE ANSWER') }}</p>
            <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(qa.aK, qa.aE) }}</p>
          </div>
        </div>
      </details>
    </div>

    <h2 class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ទ្វាររូប និង អទ្វាររូប', 'Dvāra-rūpa & Advāra-rūpa') }}
    </h2>
    <p class="mt-3 leading-loose text-sm" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ដោយទ្វារ រូប ២៨ ចែកជា ទ្វាររូប ៧ (បសាទរូប ៥ + វិញ្ញត្តិរូប ២) និង អទ្វាររូប ២១។', 'By way of door, the 28 rūpas divide into 7 dvāra-rūpas (5 sensitives + 2 intimations) and 21 advāra-rūpas.') }}
    </p>

    <div class="mt-6 space-y-4">
      <details v-for="(qa, i) in dvaraQas" :key="i" class="card-paper p-6 md:p-8">
        <summary class="select-none">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <h3 class="font-display text-lg md:text-xl leading-snug min-w-0" :style="{ color: 'var(--ink)' }">
              <span class="sutra-num mr-2 align-middle" :style="{ color: 'var(--accent-bright)' }">{{ khNum(qas.length + anindriyaQas.length + vatthuQas.length + ajjhattikaQas.length + i + 1) }}</span>
              {{ t(qa.qK, qa.qE) }}
            </h3>
            <span class="caret shrink-0 mt-1" :style="{ color: 'var(--accent-bright)' }">&#9660;</span>
          </div>
        </summary>

        <div class="mt-5">
          <div class="mt-2 p-3 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
            <p class="text-[10px] font-bold tracking-widest uppercase" :style="{ color: 'var(--accent)' }">{{ t('ចម្លើយ', 'THE ANSWER') }}</p>
            <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(qa.aK, qa.aE) }}</p>
          </div>
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
    qK: 'ដោយឱឡារិករូប តើរូប ២៨ ចែកជាប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'By oḷārika (gross) matter, into how many kinds are the 28 rūpas divided? What are they?',
    aK: 'ចែកជា ២ យ៉ាង គឺ ឱឡារិករូប (រូបគ្រោតគ្រាត) ១២ និង សុខុមរូប (រូបម៉ត់ចត់) ១៦។',
    aE: 'Into 2 kinds: oḷārika-rūpa (gross matter) 12, and sukhuma-rūpa (subtle matter) 16.',
  },
  {
    qK: 'តើឱឡារិករូប មានន័យដូចម្តេច?',
    qE: 'What does oḷārika-rūpa mean?',
    aK: 'ឱឡារិករូប គឺរូបដែលគ្រោតគ្រាត ងាយយល់ ជិតបញ្ញា និងអាចប៉ះទង្គិចគ្នាបាន (សប្បដិឃរូប) គឺបានដល់ បសាទរូប ៥ និង វិសយរូប ៧។',
    aE: 'Oḷārika-rūpa is coarse matter that is easy to understand, near to wisdom, and impinging (sappatigha) — namely the 5 sensitive rūpas and the 7 sense-object rūpas.',
  },
  {
    qK: 'តើឱឡារិករូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas, and which, are oḷārika?',
    aK: 'មាន ១២ គឺ បសាទរូប ៥ (ចក្ខុ សោត ឃាន ជិវ្ហា កាយ) និង វិសយរូប ៧ (រូប សទ្ទ គន្ធា រស ផោដ្ឋព្វៈ [បឋវី តេជោ វាយោ])។',
    aE: 'Twelve: the 5 sensitives (eye, ear, nose, tongue, body) and the 7 sense-objects (colour, sound, odour, taste, tangibility — earth, fire, air).',
  },
  {
    qK: 'តើឱឡារិករូប ជាសភាវរូប ឬអសភាវរូប?',
    qE: 'Is oḷārika-rūpa sabhāva-rūpa or asabhāva-rūpa?',
    aK: 'ជាសភាវរូប ទាំងអស់ ១២ (រូបដែលមានសភាពពិត ដោយខ្លួនឯង = និប្ផន្នរូប) ពុំមែនអសភាវរូបឡើយ។',
    aE: 'All 12 are sabhāva-rūpa (concretely produced matter with its own intrinsic nature); none is asabhāva-rūpa.',
  },
  {
    qK: 'តើសភាវរូបប៉ុន្មាន ជាឱឡារិករូប? រូបណាខ្លះ?',
    qE: 'How many sabhāva-rūpas are oḷārika? Which are they?',
    aK: 'មាន ១២ គឺ បសាទរូប ៥ និង វិសយរូប ៧ សុទ្ធតែជាសភាវរូប។',
    aE: 'All 12 (the 5 sensitives and the 7 sense objects) — every oḷārika rūpa is a sabhāva-rūpa.',
  },
  {
    qK: 'តើអសភាវរូបជាឱឡារិករូបដែរឬទេ?',
    qE: 'Are asabhāva-rūpas also oḷārika?',
    aK: 'មិនមែនទេ។ អសភាវរូប ១០ ទាំងអស់ជាសុខុមរូប ពុំមានមួយណា ជាឱឡារិករូបឡើយ។',
    aE: 'No. The 10 asabhāva-rūpas are all sukhuma; none of them is oḷārika.',
  },
  {
    qK: 'តើឱឡារិករូប ជាមហាភូតរូប ឬឧបាទាយរូប?',
    qE: 'Is oḷārika-rūpa mahābhūta-rūpa or upādāya-rūpa?',
    aK: 'មានទាំងពីរបែប ៖ បឋវី តេជោ វាយោ (ជាផោដ្ឋព្វ) ជាមហាភូតរូប ហើយបសាទរូប ៥ ជាមួយ រូប សទ្ទ គន្ធា រស ជាឧបាទាយរូប។',
    aE: 'Both kinds: earth, fire and air (as tangibility) are mahābhūta-rūpa; the 5 sensitives with colour, sound, odour and taste are upādāya-rūpa.',
  },
  {
    qK: 'តើឱឡារិករូបប៉ុន្មាន ជាមហាភូតរូប? រូបណាខ្លះ?',
    qE: 'How many oḷārika are mahābhūta-rūpa? Which are they?',
    aK: 'មាន ៣ គឺ បឋវី តេជោ វាយោ (ដែលរួមជាផោដ្ឋព្វារម្មណ៍)។',
    aE: 'Three: earth (paṭhavī), fire (tejo) and air (vāyo), which together form the tangible object.',
  },
  {
    qK: 'តើឧបាទាយរូបប៉ុន្មាន ជាឱឡារិករូប? រូបណាខ្លះ?',
    qE: 'How many upādāya-rūpas are oḷārika? Which are they?',
    aK: 'មាន ៩ គឺ បសាទរូប ៥ និង វិសយរូប ៤ (រូប សទ្ទ គន្ធា រស)។',
    aE: 'Nine: the 5 sensitives and the 4 sense-objects (colour, sound, odour, taste).',
  },
  {
    qK: 'តើឱឡារិករូប ចាត់ជាបរមត្ថធម៌ណា?',
    qE: 'To which paramattha-dhamma does oḷārika-rūpa belong?',
    aK: 'ចាត់ជា រូបបរមត្ថធម៌ (មួយក្នុងបរមត្ថធម៌ ៤ គឺ ចិត្ត ចេតសិក រូប និព្វាន)។',
    aE: 'It belongs to the rūpa-paramattha — one of the 4 ultimate realities (citta, cetasika, rūpa, nibbāna).',
  },
  {
    qK: 'តើវិសយរូបប៉ុន្មាន ជាឱឡារិករូប? រូបណាខ្លះ?',
    qE: 'How many visaya-rūpas are oḷārika? Which are they?',
    aK: 'វិសយរូប ៧ ទាំងអស់ជាឱឡារិករូប គឺ រូប សទ្ទ គន្ធា រស ផោដ្ឋព្វៈ (បឋវី តេជោ វាយោ)។',
    aE: 'All 7 sense-object rūpas are oḷārika: colour, sound, odour, taste and tangibility (earth, fire, air).',
  },
  {
    qK: 'តើមហាភូតរូបប៉ុន្មាន មិនមែនជាឱឡារិករូប? រូបណាខ្លះ?',
    qE: 'How many mahābhūta-rūpas are NOT oḷārika? Which are they?',
    aK: 'មាន ១ គឺ អាបោ (ធាតុទឹក) ដែលជាសុខុមរូប។',
    aE: 'One: āpo (the water element, cohesion), which is a sukhuma-rūpa.',
  },
  {
    qK: 'តើឱឡារិករូប ជាអកុសលធម៌ ឬកុសលធម៌?',
    qE: 'Is oḷārika-rūpa an akusala or kusala dhamma?',
    aK: 'មិនមែនទាំងពីរទេ ។ រូបទាំងអស់ជាអព្យាកតធម៌ (ធម៌មិនកំណត់ល្អ-អាក្រក់) ព្រោះរូបពុំមានចេតនាល្អ ឬអាក្រក់ឡើយ។',
    aE: 'Neither. All rūpas are abyākata (morally indeterminate), since matter has no wholesome or unwholesome volition.',
  },
  {
    qK: 'តើឱឡារិករូបប៉ុន្មាន ជាអព្យាកតធម៌? រូបណាខ្លះ?',
    qE: 'How many oḷārika are abyākata-dhamma? Which are they?',
    aK: 'ទាំង ១២ ជាអព្យាកតធម៌ ព្រោះរូបគ្រប់ប្រភេទលោកិយ សុទ្ធតែអព្យាកត។',
    aE: 'All 12 are abyākata-dhamma, because every mundane rūpa is morally indeterminate.',
  },
  {
    qK: 'តើឱឡារិករូប ជារូបធម៌ ឬអរូបធម៌?',
    qE: 'Is oḷārika-rūpa a rūpa-dhamma or an arūpa-dhamma?',
    aK: 'ជារូបធម៌ (ធម៌ជារូប/វត្ថុ) ពុំមែនអរូបធម៌ឡើយ ព្រោះជារូបបរមត្ថ។',
    aE: 'It is rūpa-dhamma (material dhamma), not arūpa-dhamma, because it is material ultimate reality.',
  },
  {
    qK: 'តើឱឡារិករូបប៉ុន្មាន ជាវិស័យរបស់ចក្ខុវិញ្ញាណ? រូបណាខ្លះ?',
    qE: 'How many oḷārika are the object of eye-consciousness? Which are they?',
    aK: 'មាន ១ គឺ រូបារម្មណ៍ (វណ្ណៈ/ពណ៌ ទាំងឡាយ) ដែលជាអារម្មណ៍របស់ចក្ខុវិញ្ញាណ។',
    aE: 'One: colour (rūpārammaṇa, visible object), which is the object of eye-consciousness.',
  },
  {
    qK: 'តើឱឡារិករូប ជាបរមត្ថធម៌ ឬបញ្ញត្តិ?',
    qE: 'Is oḷārika-rūpa paramattha or paññatti (concept)?',
    aK: 'ជាបរមត្ថធម៌ (សច្ចៈដាច់ខាត) ពុំមែនបញ្ញត្តិឡើយ ព្រោះឱឡារិករូបទាំង ១២ សុទ្ធតែជាសភាវរូប/និប្ផន្នរូប។',
    aE: 'It is paramattha (ultimate reality), not paññatti, because all 12 oḷārika rūpas are concretely produced matter.',
  },
  {
    qK: 'តើឱឡារិករូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍អ្វីខ្លះ?',
    qE: 'Acting as object, how many ārammaṇas can oḷārika-rūpa yield? Which are they?',
    aK: 'បានអារម្មណ៍ ៥ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ (អារម្មណ៍ទាំង ៥ ជាវិស័យញ្ញាណ ៥)។',
    aE: 'Five: colour, sound, odour, taste and tangibility — the five sense-objects of the five sense-consciousnesses.',
  },
  {
    qK: 'តើឱឡារិករូប ជាអារម្មណ៍ឲ្យចិត្តប្រព្រឹត្តតាមទ្វារបានប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'As object, through how many doors can oḷārika-rūpa let consciousness proceed? Which doors?',
    aK: 'បាន ៥ ទ្វារ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជិវ្ហាទ្វារ កាយទ្វារ (បញ្ចទ្វារ) ដែលជាទ្វារញ្ញាណ ៥។',
    aE: 'Through 5 doors: eye, ear, nose, tongue and body — the five sense-doors (pañcadvāra).',
  },
  {
    qK: 'តើឱឡារិករូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈអ្វីខ្លះ?',
    qE: 'Acting as āyatana (base), how many āyatanas does oḷārika-rūpa yield? Which are they?',
    aK: 'បានអាយតនៈ ១០ គឺ ខាងក្នុង ៥ (ចក្ខាយតនៈ សោតាយតនៈ ឃានាយតនៈ ជិវ្ហាយតនៈ កាយាយតនៈ) និង ខាងក្រៅ ៥ (រូបាយតនៈ សទ្ទាយតនៈ គន្ធាយតនៈ រសាយតនៈ ផោដ្ឋព្វាយតនៈ)។',
    aE: 'Ten: 5 internal bases (eye, ear, nose, tongue, body) and 5 external bases (colour, sound, odour, taste, tangibility).',
  },
  {
    qK: 'តើចក្ខុបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When eye-sensitivity acts as an āyatana, what is it called?',
    aK: 'ហៅថា ចក្ខាយតនៈ (អាយតនៈ គឺភ្នែក)។',
    aE: 'It is called cakkhāyatana (the eye-base).',
  },
  {
    qK: 'តើសោតបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When ear-sensitivity acts as an āyatana, what is it called?',
    aK: 'ហៅថា សោតាយតនៈ (អាយតនៈ គឺត្រចៀក)។',
    aE: 'It is called sotāyatana (the ear-base).',
  },
  {
    qK: 'តើឃានបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When nose-sensitivity acts as an āyatana, what is it called?',
    aK: 'ហៅថា ឃានាយតនៈ (អាយតនៈ គឺច្រមុះ)។',
    aE: 'It is called ghānāyatana (the nose-base).',
  },
  {
    qK: 'តើជិវ្ហាបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When tongue-sensitivity acts as an āyatana, what is it called?',
    aK: 'ហៅថា ជិវ្ហាយតនៈ (អាយតនៈ គឺអណ្តាត)។',
    aE: 'It is called jivhāyatana (the tongue-base).',
  },
  {
    qK: 'តើកាយបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When body-sensitivity acts as an āyatana, what is it called?',
    aK: 'ហៅថា កាយាយតនៈ (អាយតនៈ គឺកាយ)។',
    aE: 'It is called kāyāyatana (the body-base).',
  },
  {
    qK: 'តើមហាភូតរូប ៣ (វៀរអាបោ) បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When the 3 great essentials (excluding āpo) act as an āyatana, what is it called?',
    aK: 'ហៅថា ផោដ្ឋព្វាយតនៈ (អាយតនៈ គឺដែលត្រូវពាល់/ប៉ះ) ព្រោះបឋវី តេជោ វាយោ ប្រមូលជាផោដ្ឋព្វៈ។',
    aE: 'Phottabba-āyatana (the tangible base), because earth, fire and air together are the tangible object.',
  },
  {
    qK: 'តើវិសយរូប ៤ បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'When the 4 sense-objects act as āyatana, how many āyatanas do they yield? Which?',
    aK: 'បាន ៤ គឺ រូបាយតនៈ សទ្ទាយតនៈ គន្ធាយតនៈ រសាយតនៈ (សម្រាប់ រូប សទ្ទ គន្ធា រស)។',
    aE: 'Four: rūpa-, sadda-, gandha- and rasa-āyatana (colour, sound, odour and taste bases).',
  },
  {
    qK: 'តើឱឡារិករូប ជាអាយតនៈខាងក្នុង ឬអាយតនៈខាងក្រៅ?',
    qE: 'Is oḷārika-rūpa an internal or an external āyatana?',
    aK: 'មានទាំងពីរបែប ៖ បសាទរូប ៥ ជាអាយតនៈខាងក្នុង ហើយវិសយរូប ៧ ជាអាយតនៈខាងក្រៅ។',
    aE: 'Both: the 5 sensitives are internal bases, and the 7 sense-objects are external bases.',
  },
  {
    qK: 'តើឱឡារិករូបប៉ុន្មាន ជាអាយតនៈខាងក្នុង? រូបណាខ្លះ?',
    qE: 'How many oḷārika are internal āyatana? Which are they?',
    aK: 'មាន ៥ គឺ បសាទរូប ៥ (ចក្ខុ សោត ឃាន ជិវ្ហា កាយ) ជាអាយតនៈខាងក្នុង។',
    aE: 'Five: the 5 sensitives (eye, ear, nose, tongue, body), which are the internal bases.',
  },
  {
    qK: 'តើឱឡារិករូបប៉ុន្មាន ជាអាយតនៈខាងក្រៅ? រូបណាខ្លះ?',
    qE: 'How many oḷārika are external āyatana? Which are they?',
    aK: 'មាន ៧ គឺ រូប សទ្ទ គន្ធា រស ផោដ្ឋព្វៈ (បឋវី តេជោ វាយោ) ជាអាយតនៈខាងក្រៅ។',
    aE: 'Seven: colour, sound, odour, taste and tangibility (earth, fire, air), which are the external bases.',
  },
  {
    qK: 'តើសុខុមរូប មានន័យដូចម្តេច?',
    qE: 'What does sukhuma-rūpa mean?',
    aK: 'សុខុមរូប គឺរូបម៉ត់ចត់ ឆ្ងាយពីការយល់ងាយ និងមិនប៉ះទង្គិចគ្នា (អប្បដិឃរូប) គឺរូប ១៦ ដែលនៅសេសពីឱឡារិករូប។',
    aE: 'Sukhuma-rūpa is subtle matter that is far from easy understanding and non-impinging (appatigha) — the 16 rūpas other than the oḷārika ones.',
  },
  {
    qK: 'តើសុខុមរូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas, and which, are sukhuma?',
    aK: 'មាន ១៦ គឺ អាបោ ១ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ លក្ខណរូប ៤។',
    aE: 'Sixteen: water (1), sex (2), heart-base (1), life-faculty (1), nutriment (1), space (1), intimations (2), mutable (3) and characteristic rūpas (4).',
  },
  {
    qK: 'តើសុខុមរូប ជាសភាវរូប ឬអសភាវរូប?',
    qE: 'Is sukhuma-rūpa sabhāva-rūpa or asabhāva-rūpa?',
    aK: 'មានទាំងពីរបែប ៖ សភាវរូប ៦ និង អសភាវរូប ១០ ក្នុងចំណោមសុខុមរូប ១៦។',
    aE: 'Both: of the 16 subtlerūpas, 6 are sabhāva-rūpa and 10 are asabhāva-rūpa.',
  },
  {
    qK: 'តើសុខុមរូបប៉ុន្មាន ជាសភាវរូប? រូបណាខ្លះ?',
    qE: 'How many sukhuma are sabhāva-rūpa? Which are they?',
    aK: 'មាន ៦ គឺ អាបោ ១ ភាវរូប ២ (ឥត្ថិភាវ បុរិសភាវ) ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១។',
    aE: 'Six: water, 2 sex-rūpas (femininity, masculinity), heart-base, life-faculty and nutriment.',
  },
  {
    qK: 'តើសុខុមរូបប៉ុន្មាន ជាអសភាវរូប? រូបណាខ្លះ?',
    qE: 'How many sukhuma are asabhāva-rūpa? Which are they?',
    aK: 'មាន ១០ គឺ បរិច្ឆេទរូប ១ (អាកាស) វិញ្ញត្តិរូប ២ វិការរូប ៣ លក្ខណរូប ៤។',
    aE: 'Ten: space (1), intimations (2), mutable rūpas (3) and characteristic rūpas (4).',
  },
  {
    qK: 'តើសុខុមរូប ជាមហាភូតរូប ឬឧបាទាយរូប?',
    qE: 'Is sukhuma-rūpa mahābhūta-rūpa or upādāya-rūpa?',
    aK: 'ភាគច្រើនជាឧបាទាយរូប ៖ ក្នុងសុខុមរូប ១៦ មានតែអាបោ ១ ប៉ុណ្ណោះដែលជាមហាភូតរូប នៅសល់ ១៥ ជាឧបាទាយរូប។',
    aE: 'Mostly upādāya-rūpa: of the 16, only water (āpo) is a mahābhūta, the other 15 are derived (upādāya).',
  },
  {
    qK: 'តើសុខុមរូបប៉ុន្មាន ជាមហាភូតរូប? រូបណាខ្លះ?',
    qE: 'How many sukhuma are mahābhūta-rūpa? Which are they?',
    aK: 'មាន ១ គឺ អាបោ (ធាតុទឹក)។',
    aE: 'One: āpo (the water element).',
  },
  {
    qK: 'តើសុខុមរូបប៉ុន្មាន ជាឧបាទាយរូប? រូបណាខ្លះ?',
    qE: 'How many sukhuma are upādāya-rūpa? Which are they?',
    aK: 'មាន ១៥ គឺ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ លក្ខណរូប ៤។',
    aE: 'Fifteen: the remaining sukhuma rūpas other than āpo — sex (2), heart-base, life-faculty, nutriment, space, intimations (2), mutable (3) and characteristic (4).',
  },
  {
    qK: 'តើសុខុមរូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍អ្វីខ្លះ?',
    qE: 'Acting as object, how many ārammaṇas does sukhuma-rūpa yield? Which are they?',
    aK: 'បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍ (អារម្មណ៍របស់មនោវិញ្ញាណ) ព្រោះសុខុមរូបមិនមែនអារម្មណ៍ញ្ញាណ ៥ ទេ។',
    aE: 'One: dhammārammaṇa (the object of mind-consciousness), since subtle rūpas are not objects of the 5 sense-consciousnesses.',
  },
  {
    qK: 'តើអាបោ ១ បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'When water-element alone acts as object, how many ārammaṇas does it yield? Which?',
    aK: 'បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍ (ព្រោះអាបោមិនជាផោដ្ឋព្វារម្មណ៍នៃកាយទេ)។',
    aE: 'One: dhammārammaṇa (for water is not the tangible object of the body).',
  },
  {
    qK: 'តើភាវរូប ២ បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'When the 2 sex-rūpas act as objects, how many ārammaṇas do they yield? Which?',
    aK: 'បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍ (ទាំងឥត្ថិភាវ និងបុរិសភាវ)។',
    aE: 'One: dhammārammaṇa (both femininity and masculinity).',
  },
  {
    qK: 'តើហទយរូប ១ បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'When heart-base acts as object, how many ārammaṇas does it yield? Which?',
    aK: 'បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍។',
    aE: 'One: dhammārammaṇa (mind-object).',
  },
  {
    qK: 'តើជីវិតរូប ១ បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'When life-faculty acts as object, how many ārammaṇas does it yield? Which?',
    aK: 'បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍។',
    aE: 'One: dhammārammaṇa (mind-object).',
  },
  {
    qK: 'តើអាហាររូប ១ បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'When nutriment acts as object, how many ārammaṇas does it yield? Which?',
    aK: 'បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍ (អូជា/អាហាររូប)។',
    aE: 'One: dhammārammaṇa (ojā, nutrient essence).',
  },
  {
    qK: 'តើអសភាវរូប ១០ បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'When the 10 asabhāva-rūpas act as objects, how many ārammaṇas do they yield? Which?',
    aK: 'បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍ (អាកាស វិញ្ញត្តិ ២ វិការ ៣ លក្ខណ ៤)។',
    aE: 'One: dhammārammaṇa (space, 2 intimations, 3 mutable, 4 characteristic rūpas).',
  },
  {
    qK: 'តើសុខុមរូបប៉ុន្មាន ជាធម្មារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many sukhuma are dhammārammaṇa? Which are they?',
    aK: 'សុខុមរូប ១៦ ទាំងអស់ ជាធម្មារម្មណ៍។',
    aE: 'All 16 sukhuma rūpas are dhammārammaṇa (objects of mind-consciousness).',
  },
  {
    qK: 'តើសុខុមរូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈអ្វីខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas does sukhuma-rūpa yield? Which?',
    aK: 'បានអាយតនៈ ១ គឺ ធម្មាយតនៈ (អាយតនៈ គឺធម៌ជាអារម្មណ៍នៃមនោ) ព្រោះសុខុមរូបទាំងអស់ ប្រមូលក្នុងធម្មាយតនៈ។',
    aE: 'One: dhammāyatana (the mind-object base), because all subtle rūpas are included in it.',
  },
  {
    qK: 'តើសុខុមរូប ជាអាយតនៈខាងក្នុង ឬជាអាយតនៈខាងក្រៅ?',
    qE: 'Is sukhuma-rūpa an internal or an external āyatana?',
    aK: 'ជាអាយតនៈខាងក្រៅ (ធម្មាយតនៈ) ពុំមែនខាងក្នុងឡើយ ព្រោះអាយតនៈខាងក្នុងជាបសាទរូប ៥ ដែលជាឱឡារិករូប។',
    aE: 'External (dhammāyatana), never internal, for the internal bases are the 5 sensitives, which are oḷārika.',
  },
  {
    qK: 'តើសុខុមរូបប៉ុន្មាន ជាអាយតនៈខាងក្នុង? រូបណាខ្លះ?',
    qE: 'How many sukhuma are internal āyatana? Which are they?',
    aK: 'គ្មាន (សូន្យ) សោះ ព្រោះសុខុមរូបទាំងអស់ជាអាយតនៈខាងក្រៅ។',
    aE: 'None (zero), because all subtle rūpas are external bases.',
  },
  {
    qK: 'តើសុខុមរូបប៉ុន្មាន ជាអាយតនៈខាងក្រៅ? រូបណាខ្លះ?',
    qE: 'How many sukhuma are external āyatana? Which are they?',
    aK: 'សុខុមរូប ១៦ ទាំងអស់ ជាអាយតនៈខាងក្រៅ (ធម្មាយតនៈ)។',
    aE: 'All 16 sukhuma rūpas are external (included in the dhammāyatana).',
  },
  {
    qK: 'តើអាបោ ១ ចាត់ជាអាយតនៈបានប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Into how many āyatanas is the water-element classified? Which?',
    aK: 'ចាត់បាន ១ គឺ ធម្មាយតនៈ។',
    aE: 'One: dhammāyatana (mind-object base).',
  },
  {
    qK: 'តើភាវរូប ២ ចាត់ជាអាយតនៈបានប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Into how many āyatanas are the 2 sex-rūpas classified? Which?',
    aK: 'ចាត់បាន ១ គឺ ធម្មាយតនៈ (ឥត្ថិភាវ និងបុរិសភាវ)។',
    aE: 'One: dhammāyatana (femininity and masculinity).',
  },
  {
    qK: 'តើហទយរូប ១ ចាត់ជាអាយតនៈបានប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Into how many āyatanas is the heart-base classified? Which?',
    aK: 'ចាត់បាន ១ គឺ ធម្មាយតនៈ។',
    aE: 'One: dhammāyatana.',
  },
  {
    qK: 'តើជីវិតរូប ១ ចាត់ជាអាយតនៈបានប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Into how many āyatanas is the life-faculty classified? Which?',
    aK: 'ចាត់បាន ១ គឺ ធម្មាយតនៈ។',
    aE: 'One: dhammāyatana.',
  },
  {
    qK: 'តើអាហាររូប ១ ចាត់ជាអាយតនៈបានប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Into how many āyatanas is nutriment classified? Which?',
    aK: 'ចាត់បាន ១ គឺ ធម្មាយតនៈ (អូជា/អាហាររូប)។',
    aE: 'One: dhammāyatana (ojā, nutrient essence).',
  },
  {
    qK: 'តើអសភាវរូប ១០ ចាត់ជាអាយតនៈបានប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Into how many āyatanas are the 10 asabhāva-rūpas classified? Which?',
    aK: 'ចាត់បាន ១ គឺ ធម្មាយតនៈ (អាកាស វិញ្ញត្តិ ២ វិការ ៣ លក្ខណ ៤)។',
    aE: 'One: dhammāyatana (space, 2 intimations, 3 mutable, 4 characteristic rūpas).',
  },
  {
    qK: 'តើសុខុមរូបប៉ុន្មាន ជាធម្មាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many sukhuma are dhammāyatana? Which are they?',
    aK: 'សុខុមរូប ១៦ ទាំងអស់ ជាធម្មាយតនៈ។',
    aE: 'All 16 sukhuma rūpas are included in the dhammāyatana.',
  },
  {
    qK: 'តើឱឡារិករូប និងសុខុមរូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'Together how many rūpas do oḷārika and sukhuma cover? Which are they?',
    aK: 'រួមគ្នាបានដល់រូប ២៨ ទាំងអស់ គឺ ឱឡារិករូប ១២ + សុខុមរូប ១៦ = ២៨។',
    aE: 'Together they cover all 28 rūpas: 12 gross + 16 subtle = 28.',
  },
  {
    qK: 'តើសុខុមរូប ជារូបធម៌ ឬអរូបធម៌?',
    qE: 'Is sukhuma-rūpa a rūpa-dhamma or an arūpa-dhamma?',
    aK: 'ជារូបធម៌ (រូបបរមត្ថ) វៀរតែអសភាវរូប ១០ ជាគុណរូបរបស់រូប មិនមែនអរូបធម៌ឡើយ។',
    aE: 'It is rūpa-dhamma (rūpa-paramattha); the 10 asabhāva are qualities of matter, never arūpa-dhamma.',
  },
  {
    qK: 'តើឱឡារិករូប និងសុខុមរូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do oḷārika and sukhuma yield together? Which?',
    aK: 'រួមបានអារម្មណ៍ ៦ គឺ វិសយារម្មណ៍ ៥ (រូប សទ្ទ គន្ធា រស ផោដ្ឋព្វៈ) និង ធម្មារម្មណ៍ ១។',
    aE: 'Six in total: the 5 sense-objects (colour, sound, odour, taste, tangibility) and the dhammārammaṇa.',
  },
  {
    qK: 'តើឱឡារិករូប និងសុខុមរូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do oḷārika and sukhuma yield together? Which?',
    aK: 'រួមបានអាយតនៈ ១១ គឺ ឱឡារិករូប ១០ (អាយតនៈខាងក្នុង ៥ + ខាងក្រៅ ៥) និង សុខុមរូប ១ (ធម្មាយតនៈ)។',
    aE: 'Eleven in total: 10 from oḷārika (5 internal + 5 external) and 1 from sukhuma (dhammāyatana).',
  },
]

const anindriyaQas = [
  {
    qK: 'តើអនិន្រ្ទិយរូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas does anindriya-rūpa (non-faculty matter) comprise? Which?',
    aK: 'អនិន្រ្ទិយរូប បានដល់រូប ២០ គឺ មហាភូតរូប ៤ វិសយរូប ៤ ហទយរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Anindriya-rūpa comprises 20 rūpas: the 4 great essentials, 4 sense-object rūpas, heart-base (1), nutriment (1), element-space (1), intimations (2), mutable rūpas (3) and characteristic rūpas (4).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូប ជាសភាវរូប ឬអសភាវរូប?',
    qE: 'Is anindriya-rūpa sabhāva-rūpa (with own nature) or asabhāva-rūpa (without own nature)?',
    aK: 'អនិន្រ្ទិយរូប ជាសភាវរូបផង និងជាអសភាវរូបផង។',
    aE: 'It is both sabhāva-rūpa and asabhāva-rūpa.',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាសភាវរូប? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are sabhāva-rūpa? Which?',
    aK: 'អនិន្រ្ទិយរូប ១០ ជាសភាវរូប គឺ មហាភូតរូប ៤ វិសយរូប ៤ ហទយរូប ១ និង អាហាររូប ១។',
    aE: 'Ten: the 4 great essentials, 4 sense-object rūpas, heart-base and nutriment (10).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាអសភាវរូប? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are asabhāva-rūpa? Which?',
    aK: 'អនិន្រ្ទិយរូប ១០ ជាអសភាវរូប គឺ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Ten: element-space (1), intimations (2), mutable rūpas (3) and characteristic rūpas (4).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូប ជាមហាភូតរូប ឬឧបាទាយរូប?',
    qE: 'Is anindriya-rūpa mahābhūta-rūpa (primary) or upādāya-rūpa (derived)?',
    aK: 'អនិន្រ្ទិយរូប ជាមហាភូតរូបផង និងជាឧបាទាយរូបផង។',
    aE: 'It is both mahābhūta-rūpa and upādāya-rūpa.',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាមហាភូតរូប? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are mahābhūta-rūpa? Which?',
    aK: 'អនិន្រ្ទិយរូប ៤ ជាមហាភូតរូប គឺ បឋវីរូប ១ អាបោរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'Four: earth, water, fire and air (the 4 great essentials).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាឧបាទាយរូប? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are upādāya-rūpa? Which?',
    aK: 'អនិន្រ្ទិយរូប ១៦ ជាឧបាទាយរូប គឺ វិសយរូប ៤ ហទយរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Sixteen: 4 sense-object rūpas, heart-base, nutriment, element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍អ្វីខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do anindriya-rūpas yield? Which?',
    aK: 'អនិន្រ្ទិយរូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'Six: the visible object, sound, odour, taste, tangibility and dhammārammaṇa.',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជារូបារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are rūpārammaṇa (visible object)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១ ជារូបារម្មណ៍ គឺ វណ្ណរូប ១។',
    aE: 'One: colour (vaṇṇa-rūpa).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាសទ្ទារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are saddārammaṇa (sound)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១ ជាសទ្ទារម្មណ៍ គឺ សទ្ទរូប ១។',
    aE: 'One: sound (sadda-rūpa).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាគន្ធារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are gandhārammaṇa (odour)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១ ជាគន្ធារម្មណ៍ គឺ គន្ធរូប ១។',
    aE: 'One: odour (gandha-rūpa).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជារសារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are rasārammaṇa (taste)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១ ជារសារម្មណ៍ គឺ រសរូប ១។',
    aE: 'One: taste (rasa-rūpa).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាផោដ្ឋព្វារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are phoṭṭhabbārammaṇa (tangibility)? Which?',
    aK: 'អនិន្រ្ទិយរូប ៣ ជាផោដ្ឋព្វារម្មណ៍ គឺ បឋវីរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'Three: earth, fire and air (the tangible great essentials).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាធម្មារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are dhammārammaṇa (mind-object)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១៣ ជាធម្មារម្មណ៍ គឺ អាបោ ១ ហទយរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Thirteen: water (1), heart-base, nutriment, element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈអ្វីខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do anindriya-rūpas yield? Which?',
    aK: 'អនិន្រ្ទិយរូប បើដើរតួជាអាយតនៈ បានអាយតនៈ ៦ គឺ រូបាយតនៈ សទ្ទាយតនៈ គន្ធាយតនៈ រសាយតនៈ ផោដ្ឋព្វាយតនៈ និង ធម្មាយតនៈ។',
    aE: 'Six: the visible, sound, odour, taste, tangible and mind-object bases.',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូប ជាអាយតនៈខាងក្នុង ឬជាអាយតនៈខាងក្រៅ?',
    qE: 'Is anindriya-rūpa an internal or an external āyatana?',
    aK: 'អនិន្រ្ទិយរូប ជាអាយតនៈខាងក្រៅ។',
    aE: 'Anindriya-rūpa is an external āyatana.',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាអាយតនៈខាងក្នុង? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are internal āyatanas? Which?',
    aK: 'អនិន្រ្ទិយរូប មិនមែនជាអាយតនៈខាងក្នុងទេ។',
    aE: 'None; anindriya-rūpa is never an internal āyatana.',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាអាយតនៈខាងក្រៅ? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are external āyatanas? Which?',
    aK: 'អនិន្រ្ទិយរូប ២០ ជាអាយតនៈខាងក្រៅ គឺ មហាភូតរូប ៤ វិសយរូប ៤ ហទយរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'All 20: the 4 great essentials, 4 sense-object rūpas, heart-base, nutriment, element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជារូបាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are the visible base (rūpāyatana)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១ ជារូបាយតនៈ គឺ វណ្ណរូប ១។',
    aE: 'One: colour (vaṇṇa-rūpa).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាសទ្ទាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are the sound base (saddāyatana)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១ ជាសទ្ទាយតនៈ គឺ សទ្ទរូប ១។',
    aE: 'One: sound (sadda-rūpa).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាគន្ធាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are the odour base (gandhāyatana)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១ ជាគន្ធាយតនៈ គឺ គន្ធរូប ១។',
    aE: 'One: odour (gandha-rūpa).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជារសាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are the taste base (rasāyatana)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១ ជារសាយតនៈ គឺ រសរូប ១។',
    aE: 'One: taste (rasa-rūpa).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាផោដ្ឋព្វាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are the tangible base (phoṭṭhabbāyatana)? Which?',
    aK: 'អនិន្រ្ទិយរូប ៣ ជាផោដ្ឋព្វាយតនៈ គឺ បឋវីរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'Three: earth, fire and air (the tangible great essentials).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាធម្មាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are the mind-object base (dhammāyatana)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១៣ ជាធម្មាយតនៈ គឺ អាបោ ១ ហទយរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Thirteen: water (1), heart-base, nutriment, element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើឥន្រ្ទិយរូប និងអនិន្រ្ទិយរូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'Together, how many rūpas do indriya-rūpa and anindriya-rūpa comprise? Which?',
    aK: 'ឥន្រ្ទិយរូប និងអនិន្រ្ទិយរូប បានដល់រូប ២៨ គឺ មហាភូតរូប ៤ បសាទរូប ៥ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Together they comprise all 28 rūpas: 4 great essentials, 5 sensitives, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើឥន្រ្ទិយរូប និងអនិន្រ្ទិយរូប ចាត់ជាបរមត្ថធម៌មួយណា?',
    qE: 'To which paramattha-dhamma do indriya-rūpa and anindriya-rūpa belong?',
    aK: 'ឥន្រ្ទិយរូប និងអនិន្រ្ទិយរូប ចាត់ជា រូបបរមត្ថធម៌។',
    aE: 'They belong to rūpa-paramattha (matter).',
  },
  {
    qK: 'តើឥន្រ្ទិយរូប និងអនិន្រ្ទិយរូប ជារូបធម៌ ឬអរូបធម៌?',
    qE: 'Are indriya-rūpa and anindriya-rūpa rūpa-dhamma or arūpa-dhamma?',
    aK: 'ឥន្រ្ទិយរូប និងអនិន្រ្ទិយរូប ចាត់ជារូបធម៌។',
    aE: 'They are rūpa-dhamma (matter), never arūpa-dhamma.',
  },
  {
    qK: 'តើឥន្រ្ទិយរូប និងអនិន្រ្ទិយរូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do indriya-rūpa and anindriya-rūpa yield together? Which?',
    aK: 'ឥន្រ្ទិយរូប និងអនិន្រ្ទិយរូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'Six in total: the visible object, sound, odour, taste, tangibility and dhammārammaṇa.',
  },
  {
    qK: 'តើឥន្ទ្រិយរូប និងអនិន្រ្ទិយរូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do indriya-rūpa and anindriya-rūpa yield together? Which?',
    aK: 'ឥន្ទ្រិយរូប និងអនិន្រ្ទិយរូប បើដើរតួជាអាយតនៈ បានអាយតនៈ ១១ គឺ អាយតនៈខាងក្នុង ៥ (បសាទ ៥) និង អាយតនៈខាងក្រៅ ៥ (វិសយ ៥) ហើយក៏រាប់បញ្ចូលធម្មាយតនៈទៀត។',
    aE: 'Eleven in total: 5 internal sense-bases (the 5 sensitives), 5 external sense-object bases (colour, sound, odour, taste, tangibility) and the dhammāyatana.',
  },
]

const vatthuQas = [
  {
    qK: 'ដោយវត្ថុ តើរូប ២៨ ចែកជាប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'By way of physical base, into how many kinds are the 28 rūpas divided? Which?',
    aK: 'ដោយវត្ថុ រូប ២៨ ចែកជា ២ យ៉ាង គឺ វត្ថុរូប និង អវត្ថុរូប។',
    aE: 'By way of physical base, the 28 rūpas divide into 2 kinds: vatthu-rūpa (base matter) and avatthu-rūpa (non-base matter).',
  },
  {
    qK: 'តើវត្ថុរូប មានន័យដូចម្តេច?',
    qE: 'What does vatthu-rūpa (base matter) mean?',
    aK: 'វត្ថុរូប មានន័យថា រូបដែលជាវត្ថុ ឬរូបដែលជាទីអាស្រ័យរបស់ចិត្តចេតសិកកើតឡើង។',
    aE: 'Vatthu-rūpa means matter that serves as the physical base upon which consciousness and mental factors arise.',
  },
  {
    qK: 'តើវត្ថុរូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas does vatthu-rūpa comprise? Which?',
    aK: 'វត្ថុរូប បានដល់រូប ៦ គឺ ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប កាយបសាទរូប និង ហទយរូប។',
    aE: 'Vatthu-rūpa comprises 6 rūpas: eye, ear, nose, tongue and body-sensitives, and the heart-base.',
  },
  {
    qK: 'តើវត្ថុរូបប៉ុន្មានជាសភាវរូប? រូបណាខ្លះ?',
    qE: 'How many vatthu-rūpas are sabhāva-rūpa? Which?',
    aK: 'វត្ថុរូប ៦ ជាសភាវរូប គឺ ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប កាយបសាទរូប និង ហទយរូប។',
    aE: 'All 6 vatthu-rūpas are sabhāva-rūpa: the 5 sensitives and the heart-base.',
  },
  {
    qK: 'តើសភាវរូបប៉ុន្មានជាវត្ថុរូប? រូបណាខ្លះ?',
    qE: 'How many sabhāva-rūpas are vatthu-rūpa? Which?',
    aK: 'សភាវរូប ៦ ជាវត្ថុរូប គឺ ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប កាយបសាទរូប និង ហទយរូប។',
    aE: 'Six sabhāva-rūpas are vatthu-rūpa: the 5 sensitives and the heart-base.',
  },
  {
    qK: 'តើអសភាវរូប ជាវត្ថុរូបដែរឬទេ?',
    qE: 'Is asabhāva-rūpa (matter without own nature) also vatthu-rūpa?',
    aK: 'អសភាវរូប មិនមែនជាវត្ថុរូបទេ។',
    aE: 'No; asabhāva-rūpa is never vatthu-rūpa.',
  },
  {
    qK: 'តើចក្ខុបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះដូចម្តេច?',
    qE: 'When the eye-sensitivy serves as a base, what is it called?',
    aK: 'ចក្ខុបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះថា ចក្ខុវត្ថុ។',
    aE: 'The eye-sensitivy as base is called cakkhu-vatthu (eye-base).',
  },
  {
    qK: 'តើសោតបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះដូចម្តេច?',
    qE: 'When the ear-sensitivy serves as a base, what is it called?',
    aK: 'សោតបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះថា សោតវត្ថុ។',
    aE: 'The ear-sensitivy as base is called sota-vatthu (ear-base).',
  },
  {
    qK: 'តើឃានបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះដូចម្តេច?',
    qE: 'When the nose-sensitivy serves as a base, what is it called?',
    aK: 'ឃានបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះថា ឃានវត្ថុ។',
    aE: 'The nose-sensitivy as base is called ghāna-vatthu (nose-base).',
  },
  {
    qK: 'តើជិវ្ហាបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះដូចម្តេច?',
    qE: 'When the tongue-sensitivy serves as a base, what is it called?',
    aK: 'ជិវ្ហាបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះថា ជិវ្ហាវត្ថុ។',
    aE: 'The tongue-sensitivy as base is called jivhā-vatthu (tongue-base).',
  },
  {
    qK: 'តើកាយបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះដូចម្តេច?',
    qE: 'When the body-sensitivy serves as a base, what is it called?',
    aK: 'កាយបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះថា កាយវត្ថុ។',
    aE: 'The body-sensitivy as base is called kāya-vatthu (body-base).',
  },
  {
    qK: 'តើហទយរូប បើដើរតួជាវត្ថុ មានឈ្មោះដូចម្តេច?',
    qE: 'When the heart-base serves as a base, what is it called?',
    aK: 'ហទយរូប បើដើរតួជាវត្ថុ មានឈ្មោះថា ហទយវត្ថុ។',
    aE: 'The heart-base is called hadaya-vatthu.',
  },
  {
    qK: 'តើមហាភូតរូប ៤ ជាវត្ថុរូបដែរឬទេ?',
    qE: 'Are the 4 great essentials also vatthu-rūpa?',
    aK: 'មហាភូតរូប ៤ មិនមែនជាវត្ថុរូបទេ។',
    aE: 'No; the 4 great essentials are not vatthu-rūpa.',
  },
  {
    qK: 'តើវត្ថុរូបប៉ុន្មានជាឧបាទាយរូប? រូបណាខ្លះ?',
    qE: 'How many vatthu-rūpas are upādāya-rūpa? Which?',
    aK: 'វត្ថុរូប ៦ ជាឧបាទាយរូប គឺ ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប កាយបសាទរូប និង ហទយរូប។',
    aE: 'All 6 vatthu-rūpas are upādāya-rūpa: the 5 sensitives and the heart-base.',
  },
  {
    qK: 'តើឧបាទាយរូបប៉ុន្មានជាវត្ថុរូប? រូបណាខ្លះ?',
    qE: 'How many upādāya-rūpas are vatthu-rūpa? Which?',
    aK: 'ឧបាទាយរូប ៦ ជាវត្ថុរូប គឺ ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប កាយបសាទរូប និង ហទយរូប។',
    aE: 'Six upādāya-rūpas are vatthu-rūpa: the 5 sensitives and the heart-base.',
  },
  {
    qK: 'តើវត្ថុរូប ៦ បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do the 6 vatthu-rūpas yield? Which?',
    aK: 'វត្ថុរូប ៦ បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍។',
    aE: 'One: the dhammārammaṇa (mind-object).',
  },
  {
    qK: 'តើវត្ថុរូប ៦ ដើរតួជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបានប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'Through how many doors do the 6 vatthu-rūpas serve as objects for consciousness? Which?',
    aK: 'វត្ថុរូប ៦ ដើរតួជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបាន ១ គឺ មនោទ្វារ។',
    aE: 'One: the mind-door (mano-dvāra).',
  },
  {
    qK: 'តើវត្ថុរូប ៦ បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do the 6 vatthu-rūpas yield? Which?',
    aK: 'វត្ថុរូប ៦ បើដើរតួជាអាយតនៈ បានអាយតនៈ ៦ គឺ បសាទរូប ៥ ជាអាយតនៈ ៥ (ចក្ខ្វាយតនៈ សោតាយតនៈ ឃានាយតនៈ ជិវ្ហាយតនៈ កាយាយតនៈ) និង ហទយរូប ជាអាយតនៈ ១ (ធម្មាយតនៈ)។',
    aE: 'Six: the 5 sensitives are 5 āyatanas (eye, ear, nose, tongue and body-bases) and the heart-base is included in the dhammāyatana.',
  },
  {
    qK: 'តើវត្ថុរូប ៦ ចាត់ជាអាយតនៈខាងក្នុង ឬអាយតនៈខាងក្រៅ?',
    qE: 'Are the 6 vatthu-rūpas internal or external āyatanas?',
    aK: 'វត្ថុរូប ៦ ចាត់ជាអាយតនៈខាងក្នុងផង និងជាអាយតនៈខាងក្រៅផង។',
    aE: 'They are partly internal and partly external ayatanas: the 5 sensitives are internal, and the heart-base (in dhammāyatana) is external.',
  },
  {
    qK: 'តើអវត្ថុរូប មានន័យដូចម្តេច?',
    qE: 'What does avatthu-rūpa (non-base matter) mean?',
    aK: 'អវត្ថុរូប មានន័យថា រូបដែលមិនមែនជាវត្ថុ ឬរូបដែលមិនមែនជាទីអាស្រ័យរបស់ចិត្តចេតសិកកើតឡើងទេ។',
    aE: 'Avatthu-rūpa means matter that is not a base, that is not the support upon which consciousness and mental factors arise.',
  },
  {
    qK: 'តើអវត្ថុរូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas does avatthu-rūpa comprise? Which?',
    aK: 'អវត្ថុរូប បានដល់រូប ២២ គឺ មហាភូតរូប ៤ វិសយរូប ៤ ភាវរូប ២ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Avatthu-rūpa comprises 22 rūpas: 4 great essentials, 4 sense-object rūpas, 2 sex-rūpas, life-faculty, nutriment, element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើសភាវរូបប៉ុន្មានជាអវត្ថុរូប? សភាវរូបណាខ្លះ?',
    qE: 'How many sabhāva-rūpas are avatthu-rūpa? Which?',
    aK: 'សភាវរូប ១២ ជាអវត្ថុរូប គឺ មហាភូតរូប ៤ វិសយរូប ៤ ភាវរូប ២ ជីវិតរូប ១ និង អាហាររូប ១។',
    aE: 'Twelve sabhāva-rūpas are avatthu-rūpa: 4 great essentials, 4 sense-object rūpas, 2 sex-rūpas, life-faculty and nutriment.',
  },
  {
    qK: 'តើអសភាវរូបប៉ុន្មានជាអវត្ថុរូប? អសភាវរូបណាខ្លះ?',
    qE: 'How many asabhāva-rūpas are avatthu-rūpa? Which?',
    aK: 'អសភាវរូប ១០ ជាអវត្ថុរូប គឺ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Ten asabhāva-rūpas are avatthu-rūpa: element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើមហាភូតរូប ៤ ជាអវត្ថុរូបដែរឬទេ?',
    qE: 'Are the 4 great essentials also avatthu-rūpa?',
    aK: 'មហាភូតរូប ៤ ជាអវត្ថុរូប។',
    aE: 'Yes; the 4 great essentials are avatthu-rūpa.',
  },
  {
    qK: 'តើមហាភូតរូបប៉ុន្មាន ជាអវត្ថុរូប? រូបណាខ្លះ?',
    qE: 'How many great essentials are avatthu-rūpa? Which?',
    aK: 'មហាភូតរូប ៤ ជាអវត្ថុរូប គឺ បឋវីរូប ១ អាបោរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'All 4 great essentials are avatthu-rūpa: earth, water, fire and air.',
  },
  {
    qK: 'តើឧបាទាយរូបប៉ុន្មានជាអវត្ថុរូប? រូបណាខ្លះ?',
    qE: 'How many upādāya-rūpas are avatthu-rūpa? Which?',
    aK: 'ឧបាទាយរូប ១៨ ជាអវត្ថុរូប គឺ វិសយរូប ៤ ភាវរូប ២ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Eighteen upādāya-rūpas are avatthu-rūpa: 4 sense-object rūpas, 2 sex-rūpas, life-faculty, nutriment, element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើអវត្ថុរូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍អ្វីខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do avatthu-rūpas yield? Which?',
    aK: 'អវត្ថុរូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'Six: the visible object, sound, odour, taste, tangibility and dhammārammaṇa.',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជារូបារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are rūpārammaṇa? Which?',
    aK: 'អវត្ថុរូប ១ ជារូបារម្មណ៍ គឺ វណ្ណរូប ១។',
    aE: 'One: colour (vaṇṇa-rūpa).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាសទ្ទារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are saddārammaṇa? Which?',
    aK: 'អវត្ថុរូប ១ ជាសទ្ទារម្មណ៍ គឺ សទ្ទរូប ១។',
    aE: 'One: sound (sadda-rūpa).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាគន្ធារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are gandhārammaṇa? Which?',
    aK: 'អវត្ថុរូប ១ ជាគន្ធារម្មណ៍ គឺ គន្ធរូប ១។',
    aE: 'One: odour (gandha-rūpa).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជារសារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are rasārammaṇa? Which?',
    aK: 'អវត្ថុរូប ១ ជារសារម្មណ៍ គឺ រសរូប ១។',
    aE: 'One: taste (rasa-rūpa).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាផោដ្ឋព្វារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are phoṭṭhabbārammaṇa? Which?',
    aK: 'អវត្ថុរូប ៣ ជាផោដ្ឋព្វារម្មណ៍ គឺ បឋវីរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'Three: earth, fire and air (the tangible great essentials).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាធម្មារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are dhammārammaṇa? Which?',
    aK: 'អវត្ថុរូប ៩ ជាធម្មារម្មណ៍ គឺ អាបោ ១ ភាវរូប ២ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Nine: water (1), 2 sex-rūpas, life-faculty, nutriment, element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើអវត្ថុរូប ជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបានប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'Through how many doors do avatthu-rūpas serve as objects for consciousness? Which?',
    aK: 'អវត្ថុរូប ជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបាន ៥ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជិវ្ហាទ្វារ និង កាយទ្វារ។',
    aE: 'Five: the eye, ear, nose, tongue and body-doors (the sense-organ doors through which the sense-object rūpas are cognised).',
  },
  {
    qK: 'តើអវត្ថុរូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do avatthu-rūpas yield? Which?',
    aK: 'អវត្ថុរូប បើដើរតួជាអាយតនៈ បានអាយតនៈ ៦ គឺ រូបាយតនៈ សទ្ទាយតនៈ គន្ធាយតនៈ រសាយតនៈ ផោដ្ឋព្វាយតនៈ និង ធម្មាយតនៈ។',
    aE: 'Six: the visible, sound, odour, taste and tangible bases, and the dhammāyatana.',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាអាយតនៈខាងក្នុង? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are internal āyatanas? Which?',
    aK: 'អវត្ថុរូប មិនមានជាអាយតនៈខាងក្នុងទេ។',
    aE: 'None; avatthu-rūpa is never an internal āyatana.',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាអាយតនៈខាងក្រៅ? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are external āyatanas? Which?',
    aK: 'អវត្ថុរូប ២២ ជាអាយតនៈខាងក្រៅ គឺ វិសយរូប ៥ (រូប សទ្ទ គន្ធា រស ផោដ្ឋព្វៈ) និង អ្វីដែលសង្គ្រោះក្នុងធម្មាយតនៈ។',
    aE: 'All 22 are external ayatanas: the 5 sense-object bases (colour, sound, odour, taste, tangibility) and those comprised in the dhammāyatana.',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជារូបាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are the visible base? Which?',
    aK: 'អវត្ថុរូប ១ ជារូបាយតនៈ គឺ វណ្ណរូប ១។',
    aE: 'One: colour (vaṇṇa-rūpa).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាសទ្ទាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are the sound base? Which?',
    aK: 'អវត្ថុរូប ១ ជាសទ្ទាយតនៈ គឺ សទ្ទរូប ១។',
    aE: 'One: sound (sadda-rūpa).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាគន្ធាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are the odour base? Which?',
    aK: 'អវត្ថុរូប ១ ជាគន្ធាយតនៈ គឺ គន្ធរូប ១។',
    aE: 'One: odour (gandha-rūpa).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជារសាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are the taste base? Which?',
    aK: 'អវត្ថុរូប ១ ជារសាយតនៈ គឺ រសរូប ១។',
    aE: 'One: taste (rasa-rūpa).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាផោដ្ឋព្វាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are the tangible base? Which?',
    aK: 'អវត្ថុរូប ៣ ជាផោដ្ឋព្វាយតនៈ គឺ បឋវីរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'Three: earth, fire and air (the tangible great essentials).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាធម្មាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are the mind-object base? Which?',
    aK: 'អវត្ថុរូប ១៦ ជាធម្មាយតនៈ គឺ អាបោ ១ ភាវរូប ២ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Sixteen: water (1), 2 sex-rūpas, life-faculty, nutriment, element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើវត្ថុរូប និងអវត្ថុរូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'Together, how many rūpas do vatthu-rūpa and avatthu-rūpa comprise? Which?',
    aK: 'វត្ថុរូប និងអវត្ថុរូប បានដល់រូប ២៨ គឺ មហាភូតរូប ៤ បសាទរូប ៥ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Together they comprise all 28 rūpas: 4 great essentials, 5 sensitives, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 2 intimations, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើវត្ថុរូប និងអវត្ថុរូប ចាត់ជាបរមត្ថធម៌មួយណា?',
    qE: 'To which paramattha-dhamma do vatthu-rūpa and avatthu-rūpa belong?',
    aK: 'វត្ថុរូប និងអវត្ថុរូប ចាត់ជា រូបបរមត្ថធម៌។',
    aE: 'They belong to rūpa-paramattha (matter).',
  },
  {
    qK: 'តើវត្ថុរូប និងអវត្ថុរូប ចាត់ជារូបធម៌ ឬអរូបធម៌?',
    qE: 'Are vatthu-rūpa and avatthu-rūpa rūpa-dhamma or arūpa-dhamma?',
    aK: 'វត្ថុរូប និងអវត្ថុរូប ចាត់ជារូបធម៌។',
    aE: 'They are rūpa-dhamma (matter), never arūpa-dhamma.',
  },
  {
    qK: 'តើវត្ថុរូប និងអវត្ថុរូប ចាត់ជាអកុសលធម៌ ឬកុសលធម៌?',
    qE: 'Are vatthu-rūpa and avatthu-rūpa akusala or kusala dhamma?',
    aK: 'វត្ថុរូប និងអវត្ថុរូប មិនមែនជាទាំងកុសល ទាំងអកុសលទេ គឺចាត់ជាអព្យាកតធម៌។',
    aE: 'Neither; matter (rūpa) is abyākata (indeterminate) dhamma, not kusala or akusala.',
  },
  {
    qK: 'តើវត្ថុរូប និងអវត្ថុរូប ចាត់ជាខន្ធអ្វី?',
    qE: 'To which khandha do vatthu-rūpa and avatthu-rūpa belong?',
    aK: 'វត្ថុរូប និងអវត្ថុរូប ចាត់ជារូបក្ខន្ធ។',
    aE: 'They belong to the rūpakkhandha (aggregate of matter).',
  },
  {
    qK: 'តើវត្ថុរូប និងអវត្ថុរូប បើដើរតួជាអារម្មណ៍ បានដល់អារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do vatthu-rūpa and avatthu-rūpa yield together? Which?',
    aK: 'វត្ថុរូប និងអវត្ថុរូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'Six in total: the visible object, sound, odour, taste, tangibility and dhammārammaṇa.',
  },
  {
    qK: 'តើវត្ថុរូប និងអវត្ថុរូប បើដើរតួជាអាយតនៈ បានដល់អាយតនៈប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do vatthu-rūpa and avatthu-rūpa yield together? Which?',
    aK: 'វត្ថុរូប និងអវត្ថុរូប បើដើរតួជាអាយតនៈ បានអាយតនៈ ១១ គឺ អាយតនៈខាងក្នុង ៥ (បសាទរូប ៥) និង អាយតនៈខាងក្រៅ ៥ (វិសយរូប ៥) ហើយក៏រាប់បញ្ចូលធម្មាយតនៈទៀត។',
    aE: 'Eleven in total: 5 internal sense-bases (the 5 sensitives), 5 external sense-object bases (colour, sound, odour, taste, tangibility) and the dhammāyatana.',
  },
]

const ajjhattikaQas = [
  {
    qK: 'តើរូប ២៨ ចែកជាប៉ុន្មានប្រភេទធំៗ? អ្វីខ្លះ?',
    qE: 'Into how many main classes are the 28 rūpas divided? Which?',
    aK: 'រូប ២៨ ចែកជា ២ ប្រភេទធំៗ គឺ មហាភូតរូប ៤ និង ឧបាទាយរូប ២៤។',
    aE: 'The 28 rūpas divide into 2 main classes: 4 mahābhūta-rūpas (great essentials) and 24 upādāya-rūpas (derived matter).',
  },
  {
    qK: 'តើរូប ២៨ ចែកជាប៉ុន្មានពួក? ពួកអ្វីខ្លះ?',
    qE: 'Into how many groups are the 28 rūpas divided? Which?',
    aK: 'រូប ២៨ ចែកជា ១១ ពួក គឺ មហាភូតរូប ៤ បសាទរូប ៥ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'The 28 rūpas divide into 11 groups: 4 great essentials, 5 sensitives, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 2 intimations, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើមហាភូតរូប មានន័យដូចម្តេច?',
    qE: 'What does mahābhūta-rūpa mean?',
    aK: 'មហាភូតរូប មានន័យថា រូបដែលមានពិតធំ ទីជាអាស្រ័យនៃឧបាទាយរូប។',
    aE: 'Mahābhūta-rūpa means the great, primary matter that serves as the support of the derived (upādāya) rūpas.',
  },
  {
    qK: 'តើមហាភូតរូប មានរូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas are the great essentials? Which?',
    aK: 'មហាភូតរូប មានរូប ៤ គឺ បឋវី អាបោ តេជោ និង វាយោ។',
    aE: 'There are 4 great essentials: earth (pathavī), water (āpo), fire (tejo) and air (vāyo).',
  },
  {
    qK: 'តើឧបាទាយរូប មានន័យដូចម្តេច?',
    qE: 'What does upādāya-rūpa mean?',
    aK: 'ឧបាទាយរូប មានន័យថា រូបដែលកើតអាស្រ័យនឹងមហាភូតរូប ៤។',
    aE: 'Upādāya-rūpa means matter that arises dependent upon the 4 great essentials.',
  },
  {
    qK: 'តើឧបាទាយរូប មានរូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas are the derived matter? Which?',
    aK: 'ឧបាទាយរូប មានរូប ២៤ គឺ បសាទរូប ៥ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'There are 24 upādāya-rūpas: 5 sensitives, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 2 intimations, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើរូបប៉ុន្មាននៅក្នុងកាយសត្វមានវិញ្ញាណ ដែលមានអវយវៈគ្រប់គ្រាន់ ក្នុងម្នាក់ៗ?',
    qE: 'How many rūpas are in the body of a sentient being with complete faculties?',
    aK: 'នៅក្នុងកាយសត្វមានវិញ្ញាណ ដែលមានអវយវៈគ្រប់គ្រាន់ ក្នុងម្នាក់ៗ មានរូប ២៧។',
    aE: 'In the body of a sentient being with complete faculties there are 27 rūpas.',
  },
  {
    qK: 'តើរូបប៉ុន្មាននៅក្រៅកាយសត្វ ជាវត្ថុមិនមានវិញ្ញាណអាស្រ័យ? រូបណាខ្លះ?',
    qE: 'How many rūpas are outside the body, in non-sentient objects? Which?',
    aK: 'នៅក្រៅកាយសត្វ ជាវត្ថុមិនមានវិញ្ញាណអាស្រ័យ មានរូប ៨ គឺ អវិនិព្ភោគរូប ៨ មាន មហាភូតរូប ៤ វិសយរូប ៣ (វៀរសទ្ទ) និង អាហាររូប ១។',
    aE: 'In non-sentient external objects there are 8 rūpas, the inseparable (avinibbhoga) rūpas: 4 great essentials, 3 sense-object rūpas (excluding sound) and nutriment.',
  },
  {
    qK: 'តើរូបប៉ុន្មានកើតអាស្រ័យមហាភូតរូប ៤? រូបណាខ្លះ?',
    qE: 'How many rūpas arise dependent on the 4 great essentials? Which?',
    aK: 'ឧបាទាយរូប ២៤ កើតអាស្រ័យមហាភូតរូប ៤ គឺ បសាទរូប ៥ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'All 24 upādāya-rūpas arise dependent on the 4 great essentials: the 5 sensitives, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 2 intimations, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើរូប ២៨ មានឈ្មោះហៅតែមួយ ប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'Under how many single names are the 28 rūpas called? Which?',
    aK: 'រូប ២៨ មានឈ្មោះហៅតែមួយ ៨ យ៉ាង គឺ អហេតុកៈ សប្បច្ចយៈ សាសវៈ សង្ខតៈ លោកិយៈ កាមាវចរៈ អានារម្មណៈ និង អប្បហាតព្វៈ។',
    aE: 'The 28 rūpas are collectively called by 8 names: ahetuka, sappaccaya, sāsava, saṅkhata, lokiya, kāmāvacara, anārammaṇa and appahātabba.',
  },
  {
    qK: 'ហេតុអ្វីបានជារូប ២៨ មានឈ្មោះថា អហេតុកៈ?',
    qE: 'Why are the 28 rūpas called ahetuka (rootless)?',
    aK: 'បានជារូប ២៨ មានឈ្មោះថា អហេតុកៈ ព្រោះ រូប ២៨ មិនមានហេតុ ៦ ណាមួយកើតរួមជាមួយ។',
    aE: 'They are called ahetuka because no one of the 6 roots (lobha, dosa, moha, alobha, adosa, amoha) arises together with rūpa.',
  },
  {
    qK: 'ហេតុអ្វីបានជារូប ២៨ មានឈ្មោះថា សប្បច្ចយៈ?',
    qE: 'Why are the 28 rūpas called sappaccaya (conditioned)?',
    aK: 'បានជារូប ២៨ មានឈ្មោះថា សប្បច្ចយៈ ព្រោះ រូប ២៨ ជារូបដែលកើតពីសមុដ្ឋាន ៤ មានកម្មសមុដ្ឋានជាដើម។',
    aE: 'They are called sappaccaya because they arise from the 4 origins (samuṭṭhāna), beginning with kamma-originating rūpa.',
  },
  {
    qK: 'ហេតុអ្វីបានជារូប ២៨ មានឈ្មោះថា សាសវៈ?',
    qE: 'Why are the 28 rūpas called sāsava (with taints)?',
    aK: 'បានជារូប ២៨ មានឈ្មោះថា សាសវៈ ព្រោះ រូប ២៨ ប្រព្រឹត្តទៅជាមួយអាសវៈ គឺ ជាអារម្មណ៍ឱ្យអាសវធម៌។',
    aE: 'They are called sāsava because they go along with the taints (āsava), serving as objects for the taint-dhammas.',
  },
  {
    qK: 'ហេតុអ្វីបានជារូប ២៨ មានឈ្មោះថា សង្ខតៈ?',
    qE: 'Why are the 28 rūpas called saṅkhata (conditioned/compounded)?',
    aK: 'បានជារូប ២៨ មានឈ្មោះថា សង្ខតៈ ព្រោះ រូប ២៨ ជាធម៌ដែលមានបច្ច័យផ្សេងៗតាក់តែងឡើង ដូចជាក្នុងហេតុជិតរបស់រូបនីមួយៗជាដើម។',
    aE: 'They are called saṅkhata because they are dhammas fashioned by various conditions, as by the proximate causes of each rūpa.',
  },
  {
    qK: 'ហេតុអ្វីបានជារូប ២៨ មានឈ្មោះថា លោកិយៈ?',
    qE: 'Why are the 28 rūpas called lokiya (worldly)?',
    aK: 'បានជារូប ២៨ មានឈ្មោះថា លោកិយៈ ព្រោះ ជាធម៌សង្គ្រោះចូលក្នុងសង្ខារលោក នៃឧបាទានក្ខន្ធ មានការបែកធ្លាយជានិច្ច។',
    aE: 'They are called lokiya because they are comprised in the saṅkhāra-loka of the aggregates that are ever subject to breaking apart.',
  },
  {
    qK: 'ហេតុអ្វីបានជារូប ២៨ មានឈ្មោះថា កាមាវចរៈ?',
    qE: 'Why are the 28 rūpas called kāmāvacara (sense-sphere)?',
    aK: 'បានជារូប ២៨ មានឈ្មោះថា កាមាវចរៈ ព្រោះ ជាទីត្រាច់ទៅនៃកាមតណ្ហា។',
    aE: 'They are called kāmāvacara because they are the roaming-ground of sensual craving (kāma-taṇhā).',
  },
  {
    qK: 'ហេតុអ្វីបានជារូប ២៨ មានឈ្មោះថា អានារម្មណៈ?',
    qE: 'Why are the 28 rūpas called anārammaṇa (without object)?',
    aK: 'បានជារូប ២៨ មានឈ្មោះថា អានារម្មណៈ ព្រោះ ជាធម៌ដែលមិនដឹងអារម្មណ៍។',
    aE: 'They are called anārammaṇa because matter does not cognise any object.',
  },
  {
    qK: 'ហេតុអ្វីបានជារូប ២៨ មានឈ្មោះថា អប្បហាតព្វៈ?',
    qE: 'Why are the 28 rūpas called appahātabba (not to be abandoned)?',
    aK: 'បានជារូប ២៨ មានឈ្មោះថា អប្បហាតព្វៈ ព្រោះ ជាធម៌ដែលមិនត្រូវលះដោយតទង្គប្បហាន។',
    aE: 'They are called appahātabba because they are not to be abandoned by the abandoning of substitution of opposites (tadaṅga-pahāna).',
  },
  {
    qK: 'តើរូប ២៨ មានប៉ុន្មានគូ?',
    qE: 'How many pairs (kolāpa/duka) do the 28 rūpas have?',
    aK: 'រូប ២៨ មាន ១១ គូ។',
    aE: 'The 28 rūpas have 11 pairs (dukas).',
  },
  {
    qK: 'បើចែកដោយរូបសំខាន់ និងមិនសូវសំខាន់ តើរូប ២៨ ចែកជាប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'Divided by important and less-important matter, into how many kinds are the 28 rūpas divided? Which?',
    aK: 'បើចែកដោយរូបសំខាន់ និងមិនសូវសំខាន់ រូប ២៨ ចែកជា ២ យ៉ាង គឺ អជ្ឈត្តិករូប និង ពាហិររូប។',
    aE: 'Divided by important and less-important matter, the 28 rūpas divide into 2 kinds: ajjhattika-rūpa (internal) and bāhira-rūpa (external).',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប មានន័យដូចម្តេច?',
    qE: 'What does ajjhattika-rūpa mean?',
    aK: 'អជ្ឈត្តិករូប មានន័យថា រូបខាងក្នុង ឬរូបសំខាន់។',
    aE: 'Ajjhattika-rūpa means internal matter, or important matter.',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas does ajjhattika-rūpa comprise? Which?',
    aK: 'អជ្ឈត្តិករូប បានដល់រូប ៥ គឺ បសាទរូប ៥ មាន ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប និង កាយបសាទរូប។',
    aE: 'Ajjhattika-rūpa comprises 5 rūpas: the 5 sensitives (eye, ear, nose, tongue and body).',
  },
  {
    qK: 'ហេតុអ្វីបានជាចាត់បសាទរូប ៥ ជាអជ្ឈត្តិករូប?',
    qE: 'Why are the 5 sensitives classed as ajjhattika-rūpa?',
    aK: 'បានជាចាត់បសាទរូប ៥ ជាអជ្ឈត្តិករូប ព្រោះ ជារូបដែលប្រើប្រាស់បានច្រើន មានប្រយោជន៍ច្រើន ជារូបសំខាន់ ជាទីអាស្រ័យនៃចិត្តទាំងឡាយផង និងទីប្រព្រឹត្តទៅនៃចិត្តចេតសិកដឹងអារម្មណ៍ទាំងឡាយផង។',
    aE: 'Because the 5 sensitives are much used, very useful, important matter that is both the support of consciousness and the sphere through which consciousness and mental factors cognise objects.',
  },
  {
    qK: 'បើមិនបសាទរូប ៥ ទេ រាងកាយសត្វនៅបញ្ចវោការភូមិ ដូចជាអង្កត់ឧស រកប្រយោជន៍គ្មាន មែនដែរឬទេ?',
    qE: 'Without the 5 sensitives, is the body of a sentient being in the five-sense-sphere like a useless lump of wood?',
    aK: 'បើមិនបសាទរូប ៥ ទេ រាងកាយសត្វនៅបញ្ចវោការភូមិ ដូចជាអង្កត់ឧស រកប្រយោជន៍គ្មាន គឺពិតជាត្រឹមត្រូវណាស់។',
    aE: 'Yes, that is quite correct: without the 5 sensitives the body of a being in the five-sense-sphere would be utterly useless, like a lump of wood.',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប ជាសភាវរូប ឬអសភាវរូប?',
    qE: 'Is ajjhattika-rūpa sabhāva-rūpa or asabhāva-rūpa?',
    aK: 'អជ្ឈត្តិករូប ជាសភាវរូប។',
    aE: 'Ajjhattika-rūpa is sabhāva-rūpa.',
  },
  {
    qK: 'តើសភាវរូបប៉ុន្មានជាអជ្ឈត្តិករូប? រូបណាខ្លះ?',
    qE: 'How many sabhāva-rūpas are ajjhattika-rūpa? Which?',
    aK: 'សភាវរូប ៥ ជាអជ្ឈត្តិករូប គឺ បសាទរូប ៥ មាន ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប និង កាយបសាទរូប។',
    aE: 'Five sabhāva-rūpas are ajjhattika-rūpa: the 5 sensitives.',
  },
  {
    qK: 'តើអសភាវរូប ជាអជ្ឈត្តិករូបដែរឬទេ?',
    qE: 'Is asabhāva-rūpa also ajjhattika-rūpa?',
    aK: 'អសភាវរូប មិនមែនជាអជ្ឈត្តិករូបទេ។',
    aE: 'No; asabhāva-rūpa is never ajjhattika-rūpa.',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប ជាមហាភូតរូប ឬឧបាទាយរូប?',
    qE: 'Is ajjhattika-rūpa mahābhūta-rūpa or upādāya-rūpa?',
    aK: 'អជ្ឈត្តិករូប ជាឧបាទាយរូប។',
    aE: 'Ajjhattika-rūpa is upādāya-rūpa (derived matter).',
  },
  {
    qK: 'តើមហាភូតរូប ជាអជ្ឈត្តិករូបដែរឬទេ?',
    qE: 'Is mahābhūta-rūpa also ajjhattika-rūpa?',
    aK: 'មហាភូតរូប មិនមែនជាអជ្ឈត្តិករូបទេ។',
    aE: 'No; the great essentials are not ajjhattika-rūpa.',
  },
  {
    qK: 'តើឧបាទាយរូបប៉ុន្មាន ជាអជ្ឈត្តិករូប? រូបណាខ្លះ?',
    qE: 'How many upādāya-rūpas are ajjhattika-rūpa? Which?',
    aK: 'ឧបាទាយរូប ៥ ជាអជ្ឈត្តិករូប គឺ បសាទរូប ៥ មាន ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប និង កាយបសាទរូប។',
    aE: 'Five upādāya-rūpas are ajjhattika-rūpa: the 5 sensitives.',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do ajjhattika-rūpas yield? Which?',
    aK: 'អជ្ឈត្តិករូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍។',
    aE: 'One: the dhammārammaṇa (mind-object).',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប ជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបានប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'Through how many doors do ajjhattika-rūpas serve as objects for consciousness? Which?',
    aK: 'អជ្ឈត្តិករូប ជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបាន ១ គឺ មនោទ្វារ។',
    aE: 'One: the mind-door (mano-dvāra).',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do ajjhattika-rūpas yield? Which?',
    aK: 'អជ្ឈត្តិករូប បើដើរតួជាអាយតនៈ បានអាយតនៈ ៥ គឺ ចក្ខ្វាយតនៈ សោតាយតនៈ ឃានាយតនៈ ជិវ្ហាយតនៈ និង កាយាយតនៈ។',
    aE: 'Five: the eye, ear, nose, tongue and body sense-bases.',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប ជាអាយតនៈខាងក្នុង ឬអាយតនៈខាងក្រៅ?',
    qE: 'Are ajjhattika-rūpas internal or external āyatanas?',
    aK: 'អជ្ឈត្តិករូប ជាអាយតនៈខាងក្នុង។',
    aE: 'They are internal āyatanas.',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប ជារូបធម៌ ឬនាមធម៌?',
    qE: 'Are ajjhattika-rūpas rūpa-dhamma or nāma-dhamma?',
    aK: 'អជ្ឈត្តិករូប ជារូបធម៌។',
    aE: 'They are rūpa-dhamma (matter).',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប ចាត់ជាខន្ធអ្វី?',
    qE: 'To which khandha do ajjhattika-rūpas belong?',
    aK: 'អជ្ឈត្តិករូប ចាត់ជារូបក្ខន្ធ។',
    aE: 'They belong to the rūpakkhandha (aggregate of matter).',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប ជាអកុសលធម៌ ឬកុសលធម៌?',
    qE: 'Are ajjhattika-rūpas akusala or kusala dhamma?',
    aK: 'អជ្ឈត្តិករូប មិនមែនជាទាំងកុសល ទាំងអកុសលទេ គឺជាអព្យាកតធម៌។',
    aE: 'Neither; matter is abyākata (indeterminate) dhamma, not kusala or akusala.',
  },
  {
    qK: 'តើពាហិររូប មានន័យដូចម្តេច?',
    qE: 'What does bāhira-rūpa mean?',
    aK: 'ពាហិររូប មានន័យថា រូបខាងក្រៅ ឬរូបមិនសូវសំខាន់។',
    aE: 'Bāhira-rūpa means external matter, or less-important matter.',
  },
  {
    qK: 'តើពាហិររូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas does bāhira-rūpa comprise? Which?',
    aK: 'ពាហិររូប បានដល់រូប ២៣ គឺ មហាភូតរូប ៤ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Bāhira-rūpa comprises 23 rūpas: 4 great essentials, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 2 intimations, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើពាហិររូប ជាសភាវរូប ឬអសភាវរូប?',
    qE: 'Is bāhira-rūpa sabhāva-rūpa or asabhāva-rūpa?',
    aK: 'ពាហិររូប ជាសភាវរូបផង និងជាអសភាវរូបផង។',
    aE: 'Bāhira-rūpa is both sabhāva-rūpa and asabhāva-rūpa.',
  },
  {
    qK: 'តើសភាវរូបប៉ុន្មាន ជាពាហិររូប? រូបណាខ្លះ?',
    qE: 'How many sabhāva-rūpas are bāhira-rūpa? Which?',
    aK: 'សភាវរូប ១៣ ជាពាហិររូប គឺ មហាភូតរូប ៤ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ និង អាហាររូប ១។',
    aE: 'Thirteen sabhāva-rūpas are bāhira-rūpa: 4 great essentials, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty and nutriment.',
  },
  {
    qK: 'តើអសភាវរូបប៉ុន្មាន ជាពាហិររូប? រូបណាខ្លះ?',
    qE: 'How many asabhāva-rūpas are bāhira-rūpa? Which?',
    aK: 'អសភាវរូប ១០ ជាពាហិររូប គឺ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Ten asabhāva-rūpas are bāhira-rūpa: element-space, 2 intimations, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើពាហិររូប ជាមហាភូតរូប ឬឧបាទាយរូប?',
    qE: 'Is bāhira-rūpa mahābhūta-rūpa or upādāya-rūpa?',
    aK: 'ពាហិររូប ជាមហាភូតរូបផង និងជាឧបាទាយរូបផង។',
    aE: 'Bāhira-rūpa is both mahābhūta-rūpa and upādāya-rūpa.',
  },
  {
    qK: 'តើមហាភូតរូបប៉ុន្មានជាពាហិររូប? រូបណាខ្លះ?',
    qE: 'How many great essentials are bāhira-rūpa? Which?',
    aK: 'មហាភូតរូប ៤ ជាពាហិររូប គឺ បឋវីរូប ១ អាបោរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'All 4 great essentials are bāhira-rūpa: earth, water, fire and air.',
  },
  {
    qK: 'តើឧបាទាយរូបប៉ុន្មានជាពាហិររូប? រូបណាខ្លះ?',
    qE: 'How many upādāya-rūpas are bāhira-rūpa? Which?',
    aK: 'ឧបាទាយរូប ១៩ ជាពាហិររូប គឺ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Nineteen upādāya-rūpas are bāhira-rūpa: 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 2 intimations, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើពាហិររូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do bāhira-rūpas yield? Which?',
    aK: 'ពាហិររូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'Six: the visible object, sound, odour, taste, tangibility and dhammārammaṇa.',
  },
  {
    qK: 'តើពាហិររូប ជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបានប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'Through how many doors do bāhira-rūpas serve as objects for consciousness? Which?',
    aK: 'ពាហិររូប ជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបាន ៥ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជិវ្ហាទ្វារ និង កាយទ្វារ។',
    aE: 'Five: the eye, ear, nose, tongue and body-doors (the sense-organ doors through which the sense-object rūpas are cognised).',
  },
  {
    qK: 'តើពាហិររូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do bāhira-rūpas yield? Which?',
    aK: 'ពាហិររូប បើដើរតួជាអាយតនៈ បានអាយតនៈ ៦ គឺ រូបាយតនៈ សទ្ទាយតនៈ គន្ធាយតនៈ រសាយតនៈ ផោដ្ឋព្វាយតនៈ និង ធម្មាយតនៈ។',
    aE: 'Six: the visible, sound, odour, taste and tangible bases, and the dhammāyatana.',
  },
  {
    qK: 'តើពាហិររូប ជាអាយតនៈខាងក្នុង ឬអាយតនៈខាងក្រៅ?',
    qE: 'Are bāhira-rūpas internal or external āyatanas?',
    aK: 'ពាហិររូប ជាអាយតនៈខាងក្រៅ។',
    aE: 'They are external āyatanas.',
  },
  {
    qK: 'តើពាហិររូប ជារូបធម៌ ឬនាមធម៌?',
    qE: 'Are bāhira-rūpas rūpa-dhamma or nāma-dhamma?',
    aK: 'ពាហិររូប ជារូបធម៌។',
    aE: 'They are rūpa-dhamma (matter).',
  },
  {
    qK: 'តើពាហិររូប ជាអកុសលធម៌ ឬកុសលធម៌?',
    qE: 'Are bāhira-rūpas akusala or kusala dhamma?',
    aK: 'ពាហិររូប មិនមែនជាទាំងកុសល ទាំងអកុសលទេ គឺជាអព្យាកតធម៌។',
    aE: 'Neither; matter is abyākata (indeterminate) dhamma.',
  },
  {
    qK: 'តើពាហិររូប ចាត់ជាខន្ធអ្វី?',
    qE: 'To which khandha do bāhira-rūpas belong?',
    aK: 'ពាហិររូប ចាត់ជារូបក្ខន្ធ។',
    aE: 'They belong to the rūpakkhandha (aggregate of matter).',
  },
]

const dvaraQas = [
  {
    qK: 'ដោយទ្វារ តើរូប ២៨ ចែកជាប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'By way of door, into how many kinds are the 28 rūpas divided? Which?',
    aK: 'ដោយទ្វារ រូប ២៨ ចែកជា ២ យ៉ាង គឺ ទ្វាររូប និង អទ្វាររូប។',
    aE: 'By way of door, the 28 rūpas divide into 2 kinds: dvāra-rūpa (door matter) and advāra-rūpa (non-door matter).',
  },
  {
    qK: 'តើទ្វាររូប មានន័យដូចម្តេច?',
    qE: 'What does dvāra-rūpa (door matter) mean?',
    aK: 'ទ្វាររូប មានន័យថា រូបដែលជាទ្វារ ឬជាទ្វារនៃចិត្តចេតសិកកើតឡើង និងសម្រេចកម្ម។',
    aE: 'Dvāra-rūpa means matter that serves as a door through which consciousness and mental factors arise and through which deeds are accomplished.',
  },
  {
    qK: 'តើទ្វាររូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas does dvāra-rūpa comprise? Which?',
    aK: 'ទ្វាររូប បានដល់រូប ៧ គឺ បសាទរូប ៥ (ចក្ខុ សោត ឃាន ជិវ្ហា កាយ) និង វិញ្ញត្តិរូប ២ (កាយវិញ្ញត្តិ វចីវិញ្ញត្តិ)។',
    aE: 'Dvāra-rūpa comprises 7 rūpas: the 5 sensitives (eye, ear, nose, tongue, body) and the 2 intimations (bodily and verbal).',
  },
  {
    qK: 'តើទ្វាររូប ជាសភាវរូប ឬអសភាវរូប?',
    qE: 'Is dvāra-rūpa sabhāva-rūpa or asabhāva-rūpa?',
    aK: 'ទ្វាររូប ជាសភាវរូបផង និងជាអសភាវរូបផង។',
    aE: 'Dvāra-rūpa is both sabhāva-rūpa and asabhāva-rūpa.',
  },
  {
    qK: 'តើសភាវរូបប៉ុន្មាន ជាទ្វាររូប? រូបណាខ្លះ?',
    qE: 'How many sabhāva-rūpas are dvāra-rūpa? Which?',
    aK: 'សភាវរូប ៥ ជាទ្វាររូប គឺ បសាទរូប ៥ មាន ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប និង កាយបសាទរូប។',
    aE: 'Five sabhāva-rūpas are dvāra-rūpa: the 5 sensitives.',
  },
  {
    qK: 'តើអសភាវរូបប៉ុន្មាន ជាទ្វាររូប? រូបណាខ្លះ?',
    qE: 'How many asabhāva-rūpas are dvāra-rūpa? Which?',
    aK: 'អសភាវរូប ២ ជាទ្វាររូប គឺ កាយវិញ្ញត្តិរូប និង វចីវិញ្ញត្តិរូប។',
    aE: 'Two asabhāva-rūpas are dvāra-rūpa: bodily intimation and verbal intimation.',
  },
  {
    qK: 'តើទ្វាររូប ជាមហាភូតរូប ឬឧបាទាយរូប?',
    qE: 'Is dvāra-rūpa mahābhūta-rūpa or upādāya-rūpa?',
    aK: 'ទ្វាររូប ជាឧបាទាយរូប។',
    aE: 'Dvāra-rūpa is upādāya-rūpa (derived matter).',
  },
  {
    qK: 'តើមហាភូតរូប ៤ ជាទ្វាររូបដែរឬទេ?',
    qE: 'Are the 4 great essentials also dvāra-rūpa?',
    aK: 'មហាភូតរូប ៤ មិនមែនជាទ្វាររូបទេ។',
    aE: 'No; the 4 great essentials are not dvāra-rūpa.',
  },
  {
    qK: 'តើឧបាទាយរូបប៉ុន្មានជាទ្វាររូប? រូបណាខ្លះ?',
    qE: 'How many upādāya-rūpas are dvāra-rūpa? Which?',
    aK: 'ឧបាទាយរូប ៧ ជាទ្វាររូប គឺ បសាទរូប ៥ និង វិញ្ញត្តិរូប ២។',
    aE: 'Seven upādāya-rūpas are dvāra-rūpa: the 5 sensitives and the 2 intimations.',
  },
  {
    qK: 'តើចក្ខុបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះដូចម្តេច?',
    qE: 'When the eye-sensitivy serves as a door, what is it called?',
    aK: 'ចក្ខុបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះថា ចក្ខុទ្វារ។',
    aE: 'The eye-sensitivy as door is called cakkhu-dvāra (eye-door).',
  },
  {
    qK: 'តើសោតបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះដូចម្តេច?',
    qE: 'When the ear-sensitivy serves as a door, what is it called?',
    aK: 'សោតបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះថា សោតទ្វារ។',
    aE: 'The ear-sensitivy as door is called sota-dvāra (ear-door).',
  },
  {
    qK: 'តើឃានបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះដូចម្តេច?',
    qE: 'When the nose-sensitivy serves as a door, what is it called?',
    aK: 'ឃានបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះថា ឃានទ្វារ។',
    aE: 'The nose-sensitivy as door is called ghāna-dvāra (nose-door).',
  },
  {
    qK: 'តើជិវ្ហាបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះដូចម្តេច?',
    qE: 'When the tongue-sensitivy serves as a door, what is it called?',
    aK: 'ជិវ្ហាបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះថា ជិវ្ហាទ្វារ។',
    aE: 'The tongue-sensitivy as door is called jivhā-dvāra (tongue-door).',
  },
  {
    qK: 'តើកាយបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះដូចម្តេច?',
    qE: 'When the body-sensitivy serves as a door, what is it called?',
    aK: 'កាយបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះថា កាយទ្វារ។',
    aE: 'The body-sensitivy as door is called kāya-dvāra (body-door).',
  },
  {
    qK: 'តើកាយវិញ្ញត្តិរូប បើដើរតួជាទ្វារ មានឈ្មោះដូចម្តេច?',
    qE: 'When bodily intimation serves as a door, what is it called?',
    aK: 'កាយវិញ្ញត្តិរូប បើដើរតួជាទ្វារ មានឈ្មោះថា កាយទ្វារ។',
    aE: 'Bodily intimation as door is called kāya-dvāra (door of bodily action).',
  },
  {
    qK: 'តើវចីវិញ្ញត្តិរូប បើដើរតួជាទ្វារ មានឈ្មោះដូចម្តេច?',
    qE: 'When verbal intimation serves as a door, what is it called?',
    aK: 'វចីវិញ្ញត្តិរូប បើដើរតួជាទ្វារ មានឈ្មោះថា វចីទ្វារ។',
    aE: 'Verbal intimation as door is called vacī-dvāra (door of verbal action).',
  },
  {
    qK: 'តើទ្វាររូប ជាបរមត្ថធម៌ ឬបញ្ញត្តិ?',
    qE: 'Is dvāra-rūpa paramattha-dhamma or paññatti (concept)?',
    aK: 'ទ្វាររូប ជាបរមត្ថធម៌ (រូបបរមត្ថ) គឺជាភាពពិត មិនមែនបញ្ញត្តិឡើយ។',
    aE: 'Dvāra-rūpa is paramattha-dhamma (rūpa-paramattha), real existence, not a concept (paññatti).',
  },
  {
    qK: 'តើទ្វាររូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍អ្វីខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do dvāra-rūpas yield? Which?',
    aK: 'ទ្វាររូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍។',
    aE: 'One: the dhammārammaṇa (mind-object).',
  },
  {
    qK: 'តើទ្វាររូប ជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបានប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'Through how many doors do dvāra-rūpas serve as organs for consciousness? Which?',
    aK: 'ទ្វាររូប ជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបាន ៥ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជិវ្ហាទ្វារ និង កាយទ្វារ។',
    aE: 'Through 5 doors: the eye, ear, nose, tongue and body-doors.',
  },
  {
    qK: 'តើទ្វាររូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈអ្វីខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do dvāra-rūpas yield? Which?',
    aK: 'ទ្វាររូប បើដើរតួជាអាយតនៈ បានអាយតនៈ ៥ គឺ ចក្ខ្វាយតនៈ សោតាយតនៈ ឃានាយតនៈ ជិវ្ហាយតនៈ និង កាយាយតនៈ។',
    aE: 'Five: the eye, ear, nose, tongue and body sense-bases.',
  },
  {
    qK: 'តើចក្ខុបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When the eye-sensitivy serves as an āyatana, what is it called?',
    aK: 'ចក្ខុបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះថា ចក្ខ្វាយតនៈ។',
    aE: 'It is called cakkhāyatana (eye-base).',
  },
  {
    qK: 'តើសោតបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When the ear-sensitivy serves as an āyatana, what is it called?',
    aK: 'សោតបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះថា សោតាយតនៈ។',
    aE: 'It is called sotāyatana (ear-base).',
  },
  {
    qK: 'តើឃានបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When the nose-sensitivy serves as an āyatana, what is it called?',
    aK: 'ឃានបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះថា ឃានាយតនៈ។',
    aE: 'It is called ghānāyatana (nose-base).',
  },
  {
    qK: 'តើជិវ្ហាបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When the tongue-sensitivy serves as an āyatana, what is it called?',
    aK: 'ជិវ្ហាបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះថា ជិវ្ហាយតនៈ។',
    aE: 'It is called jivhāyatana (tongue-base).',
  },
  {
    qK: 'តើកាយបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When the body-sensitivy serves as an āyatana, what is it called?',
    aK: 'កាយបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះថា កាយាយតនៈ។',
    aE: 'It is called kāyāyatana (body-base).',
  },
  {
    qK: 'តើកាយវិញ្ញត្តិរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When bodily intimation serves as an āyatana, what is it called?',
    aK: 'កាយវិញ្ញត្តិរូប មិនមែនជាអាយតនៈទេ ព្រោះវិញ្ញត្តិរូបមិនរាប់បញ្ចូលក្នុងអាយតនៈ ១២ ទេ។',
    aE: 'Bodily intimation is not an āyatana, for the viññatti-rūpas are not counted among the 12 āyatanas.',
  },
  {
    qK: 'តើវចីវិញ្ញត្តិរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When verbal intimation serves as an āyatana, what is it called?',
    aK: 'វចីវិញ្ញត្តិរូប មិនមែនជាអាយតនៈទេ ព្រោះវិញ្ញត្តិរូបមិនរាប់បញ្ចូលក្នុងអាយតនៈ ១២ ទេ។',
    aE: 'Verbal intimation is not an āyatana, for the viññatti-rūpas are not counted among the 12 āyatanas.',
  },
  {
    qK: 'តើទ្វាររូប ជាអាយតនៈខាងក្នុង ឬអាយតនៈខាងក្រៅ?',
    qE: 'Are dvāra-rūpas internal or external āyatanas?',
    aK: 'ទ្វាររូប ដែលជាអាយតនៈ ជាអាយតនៈខាងក្នុង។',
    aE: 'The dvāra-rūpas that are āyatanas are internal āyatanas.',
  },
  {
    qK: 'តើទ្វាររូបប៉ុន្មានជាអាយតនៈខាងក្នុង? រូបណាខ្លះ?',
    qE: 'How many dvāra-rūpas are internal āyatanas? Which?',
    aK: 'ទ្វាររូប ៥ ជាអាយតនៈខាងក្នុង គឺ បសាទរូប ៥ មាន ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប និង កាយបសាទរូប។',
    aE: 'Five dvāra-rūpas are internal āyatanas: the 5 sensitives.',
  },
  {
    qK: 'តើទ្វាររូបប៉ុន្មានជាអាយតនៈខាងក្រៅ? រូបណាខ្លះ?',
    qE: 'How many dvāra-rūpas are external āyatanas? Which?',
    aK: 'ទ្វាររូប មិនមានជាអាយតនៈខាងក្រៅទេ គឺវិញ្ញត្តិរូប ២ មិនរាប់បញ្ចូលជាអាយតនៈឡើយ។',
    aE: 'None; the dvāra-rūpas are never external āyatanas — the 2 intimations are not counted as āyatanas at all.',
  },
  {
    qK: 'តើអទ្វាររូប មានន័យដូចម្តេច?',
    qE: 'What does advāra-rūpa (non-door matter) mean?',
    aK: 'អទ្វាររូប មានន័យថា រូបដែលមិនមែនជាទ្វារ ឬរូបដែលមិនមែនជាទ្វារនៃចិត្តចេតសិក និងនៃកម្មឡើយ។',
    aE: 'Advāra-rūpa means matter that is not a door, not a door of consciousness and mental factors nor of kamma.',
  },
  {
    qK: 'តើអទ្វាររូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas does advāra-rūpa comprise? Which?',
    aK: 'អទ្វាររូប បានដល់រូប ២១ គឺ មហាភូតរូប ៤ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Advāra-rūpa comprises 21 rūpas: 4 great essentials, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើអទ្វាររូប ជាសភាវរូប ឬអសភាវរូប?',
    qE: 'Is advāra-rūpa sabhāva-rūpa or asabhāva-rūpa?',
    aK: 'អទ្វាររូប ជាសភាវរូបផង និងជាអសភាវរូបផង។',
    aE: 'Advāra-rūpa is both sabhāva-rūpa and asabhāva-rūpa.',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាសភាវរូប? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are sabhāva-rūpa? Which?',
    aK: 'អទ្វាររូប ១៣ ជាសភាវរូប គឺ មហាភូតរូប ៤ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ និង អាហាររូប ១។',
    aE: 'Thirteen advāra-rūpas are sabhāva-rūpa: 4 great essentials, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty and nutriment.',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាអសភាវរូប? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are asabhāva-rūpa? Which?',
    aK: 'អទ្វាររូប ៨ ជាអសភាវរូប គឺ បរិច្ឆេទរូប ១ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Eight advāra-rūpas are asabhāva-rūpa: element-space, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើអទ្វាររូប ជាមហាភូតរូប ឬឧបាទាយរូប?',
    qE: 'Is advāra-rūpa mahābhūta-rūpa or upādāya-rūpa?',
    aK: 'អទ្វាររូប ជាមហាភូតរូបផង និងជាឧបាទាយរូបផង។',
    aE: 'Advāra-rūpa is both mahābhūta-rūpa and upādāya-rūpa.',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាមហាភូតរូប? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are mahābhūta-rūpa? Which?',
    aK: 'អទ្វាររូប ៤ ជាមហាភូតរូប គឺ បឋវីរូប ១ អាបោរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'Four advāra-rūpas are mahābhūta-rūpa: earth, water, fire and air.',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាឧបាទាយរូប? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are upādāya-rūpa? Which?',
    aK: 'អទ្វាររូប ១៧ ជាឧបាទាយរូប គឺ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Seventeen advāra-rūpas are upādāya-rūpa: 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើអទ្វាររូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍អ្វីខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do advāra-rūpas yield? Which?',
    aK: 'អទ្វាររូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'Six: the visible object, sound, odour, taste, tangibility and dhammārammaṇa.',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជារូបារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are rūpārammaṇa? Which?',
    aK: 'អទ្វាររូប ១ ជារូបារម្មណ៍ គឺ វណ្ណរូប ១។',
    aE: 'One: colour (vaṇṇa-rūpa).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាសទ្ទារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are saddārammaṇa? Which?',
    aK: 'អទ្វាររូប ១ ជាសទ្ទារម្មណ៍ គឺ សទ្ទរូប ១។',
    aE: 'One: sound (sadda-rūpa).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាគន្ធារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are gandhārammaṇa? Which?',
    aK: 'អទ្វាររូប ១ ជាគន្ធារម្មណ៍ គឺ គន្ធរូប ១។',
    aE: 'One: odour (gandha-rūpa).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជារសារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are rasārammaṇa? Which?',
    aK: 'អទ្វាររូប ១ ជារសារម្មណ៍ គឺ រសរូប ១។',
    aE: 'One: taste (rasa-rūpa).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាផោដ្ឋព្វារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are phoṭṭhabbārammaṇa? Which?',
    aK: 'អទ្វាររូប ៣ ជាផោដ្ឋព្វារម្មណ៍ គឺ បឋវីរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'Three: earth, fire and air (the tangible great essentials).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាធម្មារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are dhammārammaṇa? Which?',
    aK: 'អទ្វាររូប ១៤ ជាធម្មារម្មណ៍ គឺ អាបោ ១ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Fourteen: water (1), 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើអទ្វាររូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈអ្វីខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do advāra-rūpas yield? Which?',
    aK: 'អទ្វាររូប បើដើរតួជាអាយតនៈ បានអាយតនៈ ៦ គឺ រូបាយតនៈ សទ្ទាយតនៈ គន្ធាយតនៈ រសាយតនៈ ផោដ្ឋព្វាយតនៈ និង ធម្មាយតនៈ។',
    aE: 'Six: the visible, sound, odour, taste and tangible bases, and the dhammāyatana.',
  },
  {
    qK: 'តើអទ្វាររូប ជាអាយតនៈខាងក្នុង ឬជាអាយតនៈខាងក្រៅ?',
    qE: 'Are advāra-rūpas internal or external āyatanas?',
    aK: 'អទ្វាររូប ជាអាយតនៈខាងក្រៅ។',
    aE: 'They are external āyatanas.',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាអាយតនៈខាងក្នុង? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are internal āyatanas? Which?',
    aK: 'អទ្វាររូប មិនមានជាអាយតនៈខាងក្នុងទេ។',
    aE: 'None; advāra-rūpa is never an internal āyatana.',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាអាយតនៈខាងក្រៅ? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are external āyatanas? Which?',
    aK: 'អទ្វាររូប ២១ ជាអាយតនៈខាងក្រៅ គឺ វិសយរូប ៥ (រូប សទ្ទ គន្ធា រស ផោដ្ឋព្វៈ) និង អ្វីដែលសង្គ្រោះក្នុងធម្មាយតនៈ។',
    aE: 'All 21 are external āyatanas: the 5 sense-object bases (colour, sound, odour, taste, tangibility) and those comprised in the dhammāyatana.',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជារូបាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are the visible base? Which?',
    aK: 'អទ្វាររូប ១ ជារូបាយតនៈ គឺ វណ្ណរូប ១។',
    aE: 'One: colour (vaṇṇa-rūpa).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាសទ្ទាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are the sound base? Which?',
    aK: 'អទ្វាររូប ១ ជាសទ្ទាយតនៈ គឺ សទ្ទរូប ១។',
    aE: 'One: sound (sadda-rūpa).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាគន្ធាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are the odour base? Which?',
    aK: 'អទ្វាររូប ១ ជាគន្ធាយតនៈ គឺ គន្ធរូប ១។',
    aE: 'One: odour (gandha-rūpa).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជារសាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are the taste base? Which?',
    aK: 'អទ្វាររូប ១ ជារសាយតនៈ គឺ រសរូប ១។',
    aE: 'One: taste (rasa-rūpa).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាផោដ្ឋព្វាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are the tangible base? Which?',
    aK: 'អទ្វាររូប ៣ ជាផោដ្ឋព្វាយតនៈ គឺ បឋវីរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'Three: earth, fire and air (the tangible great essentials).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាធម្មាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are the mind-object base? Which?',
    aK: 'អទ្វាររូប ១៤ ជាធម្មាយតនៈ គឺ អាបោ ១ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Fourteen: water (1), 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើទ្វាររូប និងអទ្វាររូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'Together, how many rūpas do dvāra-rūpa and advāra-rūpa comprise? Which?',
    aK: 'ទ្វាររូប និងអទ្វាររូប បានដល់រូប ២៨ គឺ មហាភូតរូប ៤ បសាទរូប ៥ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Together they comprise all 28 rūpas: 4 great essentials, 5 sensitives, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 2 intimations, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើទ្វាររូប និងអទ្វាររូប ចាត់ជាបរមត្ថធម៌មួយណា?',
    qE: 'To which paramattha-dhamma do dvāra-rūpa and advāra-rūpa belong?',
    aK: 'ទ្វាររូប និងអទ្វាររូប ចាត់ជា រូបបរមត្ថធម៌។',
    aE: 'They belong to rūpa-paramattha (matter).',
  },
  {
    qK: 'តើទ្វាររូប និងអទ្វាររូប ជារូបធម៌ ឬអរូបធម៌?',
    qE: 'Are dvāra-rūpa and advāra-rūpa rūpa-dhamma or arūpa-dhamma?',
    aK: 'ទ្វាររូប និងអទ្វាររូប ចាត់ជារូបធម៌។',
    aE: 'They are rūpa-dhamma (matter), never arūpa-dhamma.',
  },
  {
    qK: 'តើទ្វាររូប និងអទ្វាររូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do dvāra-rūpa and advāra-rūpa yield together? Which?',
    aK: 'ទ្វាររូប និងអទ្វាររូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'Six in total: the visible object, sound, odour, taste, tangibility and dhammārammaṇa.',
  },
  {
    qK: 'តើទ្វាររូប និងអទ្វាររូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do dvāra-rūpa and advāra-rūpa yield together? Which?',
    aK: 'ទ្វាររូប និងអទ្វាររូប បើដើរតួជាអាយតនៈ បានអាយតនៈ ១១ គឺ អាយតនៈខាងក្នុង ៥ (បសាទ ៥) និង អាយតនៈខាងក្រៅ ៥ (វិសយ ៥) ហើយក៏រាប់បញ្ចូលធម្មាយតនៈទៀត។',
    aE: 'Eleven in total: 5 internal sense-bases (the 5 sensitives), 5 external sense-object bases (colour, sound, odour, taste, tangibility) and the dhammāyatana.',
  },
]
</script>
