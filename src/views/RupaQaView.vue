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
</script>
