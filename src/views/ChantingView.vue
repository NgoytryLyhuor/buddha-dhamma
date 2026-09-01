<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្របន្ទូល ១០ — ពាក្យសូត្រប្រចាំកាល', 'CHANTING 10 — DAILY RECITALS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('សូត្របន្ទូលប្រចាំកាល', 'Recitation and Chanting') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ការសូត្រធម៌ ជាប្រពៃណីរបស់ពុទ្ធបរិស័ទ តាំងពីសម័យព្រះពុទ្ធកាល មកដល់សព្វថ្ងៃ។ ការសូត្រ ដោយយល់ន័យ ញ៉ាំងចិត្តឲ្យស្ងប់ ញ៉ាំងសតិឲ្យរឹងមាំ ហើយបណ្តុះសទ្ធា ក្នុងព្រះរតនត្រ័យ។ ទំព័រនេះ រៀបរៀងបន្ទូលដែលប្រើញឹកញាប់បំផុត គឺបន្ទូលខ្លីៗ ដែលគ្រហស្ថគប្បីចាំសូត្របាន — អក្សរខ្មែរសម្រាប់សូត្រ ជាមួយន័យពន្យល់រាល់ពាក្យ។', 'Chanting is a tradition of Buddhist lay devotees from the time of the Buddha to this day. To chant with understanding calms the mind, strengthens mindfulness and deepens faith in the Triple Gem. This page gathers the most frequent short recitals — written in Khmer script to chant aloud, with every word explained.') }}
    </p>

    <!-- how to chant -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">HOW TO CHANT</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('របៀបសូត្រឲ្យបានអត្ថប្រយោជន៍', 'How to Chant for Real Benefit') }}</h3>
      <ul class="tick-list mt-4">
        <li v-for="u in tips" :key="u.en"><span class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t(u.km, u.en) }}</span></li>
      </ul>
    </div>

    <!-- the chants -->
    <div class="mt-8">
      <p class="chapter-label">{{ t('បន្ទូលជម្រើស ១០ — សូត្ររាល់ថ្ងៃ', 'TEN DAILY RECITALS — CHANT WITH THE HEART') }}</p>
    </div>

    <div class="mt-4 space-y-4">
      <details v-for="(c, i) in chants" :key="c.en" :id="'chant-' + i" class="card-paper p-6 md:p-8 scroll-mt-24" :open="i === 0 || isTarget('chant-', i)">
        <summary class="select-none">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div class="min-w-0">
              <p class="chapter-label">{{ c.src }}</p>
              <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t(c.km, c.en) }}</h3>
              <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(c.noteK, c.noteE) }}</p>
            </div>
            <div class="flex items-center gap-3 shrink-0 mt-1">
              <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
              <span class="caret" :style="{ color: 'var(--accent-bright)' }">&#9660;</span>
            </div>
          </div>
        </summary>

        <div class="mt-6">
          <div class="flex items-center justify-end gap-2 mb-2">
            <CopyButton :text="chantTexts[i]" />
          </div>
          <div class="verse-box p-4 md:p-5">
            <p v-for="l in c.lines" :key="l" class="text-center text-lg md:text-xl leading-loose">{{ l }}</p>
            <p class="mt-3 text-center"><span class="paali">{{ c.roman }}</span></p>
          </div>

          <div class="grid md:grid-cols-2 gap-2 mt-4">
            <div v-for="w in c.gloss" :key="w.w" class="flex items-baseline gap-2 px-3 py-2 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
              <span class="paali shrink-0">{{ w.w }}</span>
              <span class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t(w.km, w.en) }}</span>
            </div>
          </div>

          <p class="mt-4 leading-loose text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t(c.meanK, c.meanE) }}</p>

          <div class="mt-4 p-3 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
            <p class="text-[10px] font-bold tracking-widest uppercase" :style="{ color: 'var(--accent)' }">{{ t('អនុវត្តក្នុងជីវិត', 'APPLY IT TODAY') }}</p>
            <p class="text-sm mt-1" :style="{ color: 'var(--ink-soft)' }">{{ t(c.applyK, c.applyE) }}</p>
          </div>
        </div>
      </details>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import CopyButton from '../components/CopyButton.vue'
const { t } = useLanguage()
const route = useRoute()
const isTarget = (prefix, idx) => route.hash === '#' + prefix + idx

const chantTexts = computed(() => chants.map(c => c.lines.join('\n') + '\n' + c.roman))

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  return String(n).split('').map(d => khDigits[Number(d)]).join('')
}

const tips = [
  { km: 'សូត្រដោយសំឡេងឮខ្លួនឯង យឺតៗ ឲ្យច្បាស់ពាក្យ។', en: 'Chant aloud to yourself, slowly, so every word is clear.' },
  { km: 'ខំយល់ន័យ មិនមែនសូត្រ ត្រឹមតែសំឡេងទេ។', en: 'Follow the meaning — do not merely make the sound.' },
  { km: 'មុនសូត្រ ប្រណម្យគោរព តាំងចិត្តស្ងប់បន្តិច។', en: 'Bow respectfully and settle the mind before you begin.' },
  { km: 'សូត្រជាទម្លាប់រាល់ថ្ងៃ ទុកមួយបន្ទូលក៏បាន។', en: 'Make it a daily habit — even one recital is enough.' },
]

const chants = [
  {
    src: 'NAMOKĀRA — ការថ្វាយបង្គំ',
    km: 'នមោការៈ — បន្ទូលថ្វាយបង្គំព្រះរតនត្រ័យ', en: 'The Homage (Namokāra)',
    noteK: 'បន្ទូលដំបូង ដែលគប្បីសូត្រ មុននឹងធ្វើកិច្ចសូត្រអ្វីៗទាំងអស់ — សូត្រ ៣ ដង។', en: 'The very first recital, chanted before any other — recited three times.',
    lines: [
      'នមោ តស្ស ភគវតោ អរហតោ សម្មាសម្ពុទ្ធស្ស',
    ],
    roman: 'Namo tassa bhagavato arahato sammāsambuddhassa',
    gloss: [
      { w: 'នមោ', km: 'ការថ្វាយបង្គំ — ការក្រាបគោរព', en: 'homage' },
      { w: 'តស្ស', km: 'ចំពោះព្រះអង្គនោះ', en: 'to that one' },
      { w: 'ភគវតោ', km: 'ព្រះមានព្រះភាគ — អ្នកមានសិរីមង្គល', en: 'the Blessed One' },
      { w: 'អរហតោ', km: 'ព្រះអរហន្ត — អ្នកឆ្ងាយចាកកិលេស', en: 'the Worthy One' },
      { w: 'សម្មាសម្ពុទ្ធស្ស', km: 'អ្នកត្រាស់ដឹងដោយខ្លួនឯង ដ៏ប្រពៃ', en: 'the Fully Awakened One' },
    ],
    meanK: 'ខ្ញុំសូមថ្វាយបង្គំ ចំពោះព្រះមានព្រះភាគនោះ ដែលជាព្រះអរហន្ត ទ្រង់ត្រាស់ដឹងឡើង ដោយព្រះអង្គឯង ដ៏ប្រពៃ។ គប្បីសូត្របីដង មុននឹងសូត្របន្ទូលណាមួយ ព្រោះជាការបញ្ជាក់រាបស្មើ យកព្រះរតនត្រ័យ ជាទីពឹង មុនដំបូង។',
    meanE: 'Homage to that Blessed One, the Worthy One, fully awakened by himself. Recite three times before any other passage, as a way of taking refuge in the Triple Gem first.',
    applyK: 'ពេលចូលវត្ត ធ្វើបុណ្យ មុនសូត្រអ្វីៗ — សូត្របន្ទូលនេះ បីដង ដោយចិត្តគោរព។',
    applyE: 'Whenever you enter a temple or offer gifts, chant this three times with a respectful heart.',
  },
  {
    src: 'TISĀRAṆA — តិសរណៈ',
    km: 'តិសរណៈ — ការយកព្រះរតនត្រ័យជាទីពឹង', en: 'The Three Refuges (Tisaraṇa)',
    noteK: 'បន្ទូលរួម ប្រើសម្រាប់ឲ្យជាតិសីល — សូត្រតាមព្រះសង្ឃ ក្នុងពិធីចូលវត្ត ឬ សូត្ររាល់ថ្ងៃនៅផ្ទះ។', en: 'The joining verses used when taking the five precepts — chant after the monks, or daily at home.',
    lines: [
      'ពុទ្ធំ សរណំ គច្ឆាមិ',
      'ធម្មំ សរណំ គច្ឆាមិ',
      'សង្ឃំ សរណំ គច្ឆាមិ',
    ],
    roman: 'Buddhaṃ saraṇaṃ gacchāmi · Dhammaṃ saraṇaṃ gacchāmi · Saṅghaṃ saraṇaṃ gacchāmi',
    gloss: [
      { w: 'ពុទ្ធំ', km: 'ចំពោះព្រះពុទ្ធ', en: 'to the Buddha' },
      { w: 'សរណំ', km: 'ទីពឹងពំនាក់', en: 'as a refuge' },
      { w: 'គច្ឆាមិ', km: 'ខ្ញុំសូមទៅកាន់ — សូមយកជាទីពឹង', en: 'I go' },
      { w: 'ធម្មំ', km: 'ចំពោះព្រះធម៌', en: 'to the Dhamma' },
      { w: 'សង្ឃំ', km: 'ចំពោះព្រះសង្ឃ', en: 'to the Saṅgha' },
    ],
    meanK: 'ខ្ញុំសូមយកព្រះពុទ្ធ ជាទីពឹង។ ខ្ញុំសូមយកព្រះធម៌ ជាទីពឹង។ ខ្ញុំសូមយកព្រះសង្ឃ ជាទីពឹង។ ការយកព្រះរតនត្រ័យជាទីពឹង មានន័យជ្រៅថា៖ ពឹងព្រះធម៌ គឺបដិបត្តិតាម មិនមែនគ្រាន់តែសុំពិសិដ្ឋទេ។ សូត្របន្ទូលនេះ ហើយរួចសូត្រសីល ៥ ជាបន្ត។',
    meanE: 'I go to the Buddha for refuge. I go to the Dhamma for refuge. I go to the Saṅgha for refuge. Taking refuge deeply means practising the Dhamma, not merely seeking blessings. Follow this with the five precepts.',
    applyK: 'ពេលភ័យ ពេលមិនស្ងប់ — ដកដង្ហើម យឺតៗ ហើយសូត្របន្ទូលនេះ ក្នុងចិត្ត រាប់តាមដង្ហើម ចិត្តនឹងស្ងប់។',
    applyE: 'When afraid or restless, breathe slowly and recite this within, counting the breath — the mind calms down.',
  },
  {
    src: 'PAÑCA SĪLA — បញ្ចសីល',
    km: 'បញ្ចសីល — សីល ៥', en: 'The Five Precepts (Pañcasīla)',
    noteK: 'សីល ដែលពុទ្ធបរិស័ទគ្រប់គ្នា គប្បីរក្សា — សូត្រតាមលោកគ្រូ ក្នុងពិធីថ្វាយបង្គំ ឬ សូត្ររាល់ព្រឹកនៅផ្ទះ។', en: 'The precepts every lay Buddhist keeps — recited after the teacher during ceremonies, or each morning at home.',
    lines: [
      'បាណាតិបាតា វេរមណីសិក្ខាបទំ សមាទិយាមិ',
      'អទិន្នាទានា វេរមណីសិក្ខាបទំ សមាទិយាមិ',
      'កាមេសុមិច្ឆាចារា វេរមណីសិក្ខាបទំ សមាទិយាមិ',
      'មុសាវាទា វេរមណីសិក្ខាបទំ សមាទិយាមិ',
      'សុរាមេរយមជ្ជបមាទដ្ឋានា វេរមណីសិក្ខាបទំ សមាទិយាមិ',
    ],
    roman: 'Pāṇātipātā veramaṇī sikkhāpadaṃ samādiyāmi · Adinnādānā veramaṇī sikkhāpadaṃ samādiyāmi · Kāmesu micchācārā veramaṇī sikkhāpadaṃ samādiyāmi · Musāvādā veramaṇī sikkhāpadaṃ samādiyāmi · Surāmerayamajjapamādaṭṭhānā veramaṇī sikkhāpadaṃ samādiyāmi',
    gloss: [
      { w: 'បាណាតិបាតា', km: 'វៀរចាកការសម្លាប់សត្វ', en: 'abstain from killing' },
      { w: 'អទិន្នាទានា', km: 'វៀរចាកការលួច កាន់យករបស់គេ ដែលគេមិនបានឲ្យ', en: 'abstain from stealing' },
      { w: 'កាមេសុមិច្ឆាចារា', km: 'វៀរចាកការប្រព្រឹត្តខុស ក្នុងកាម', en: 'abstain from sexual misconduct' },
      { w: 'មុសាវាទា', km: 'វៀរចាកការនិយាយកុហក', en: 'abstain from lying' },
      { w: 'សុរាមេរយមជ្ជបមាទដ្ឋានា', km: 'វៀរចាកទឹកស្រា និងគ្រឿងញៀន ដែលជាទីតាំងនៃសេចក្តីប្រមាទ', en: 'abstain from intoxicants that cause heedlessness' },
      { w: 'វេរមណី', km: 'ការវៀរបង់ — ការលះបង់', en: 'refraining from' },
      { w: 'សិក្ខាបទំ', km: 'នូវវិញ្ញត្តិសម្រាប់ហ្វឹកហាត់', en: 'training rule' },
      { w: 'សមាទិយាមិ', km: 'ខ្ញុំសូមសមាទាន', en: 'I undertake' },
    ],
    meanK: 'ខ្ញុំសូមសមាទាននូវវិញ្ញត្តិសម្រាប់ហ្វឹកហាត់ គឺការវៀរចាកការសម្លាប់សត្វ។ វៀរចាកការលួចរបស់គេ។ វៀរចាកការប្រព្រឹត្តខុស ក្នុងកាម។ វៀរចាកការនិយាយកុហក។ វៀរចាកទឹកស្រា គ្រឿងញៀន ដែលនាំឲ្យប្រមាទ។ សីលទាំង ៥ នេះ ជាគ្រឹះនៃសេចក្តីសុខ របស់មនុស្ស — អ្នកមានសីល ដេកត្រជាក់ ភ្ញាក់ត្រជាក់។',
    meanE: 'I undertake the training rules to abstain from killing, stealing, sexual misconduct, lying, and intoxicants that cause heedlessness. These five are the foundation of human happiness — one who keeps them sleeps and wakes in peace.',
    applyK: 'សូត្រសីល ៥ ពេលព្រឹករាល់ថ្ងៃ មុនចេញទៅធ្វើការ — ជាការរំឮកសន្យានឹងខ្លួនឯង។',
    applyE: 'Recite the precepts each morning before starting your day — a reminder of the vows you carry.',
  },
  {
    src: 'BUDDHĀNUSSATI — ពុទ្ធគុណ',
    km: 'ថ្វាយបង្គំគុណព្រះពុទ្ធ — ឥតិបិ សោ', en: 'Nine Qualities of the Buddha (Iti pi so)',
    noteK: 'បន្ទូលសរសើរគុណព្រះពុទ្ធ ៩ ប្រការ — សូត្រតាមទម្លាប់ គឺសូត្រឡើងវិញ ៣ ដង មុនស្តាប់ធម្មទេសនា។', en: 'The nine virtues of the Buddha — normally recited three times before a sermon.',
    lines: [
      'ឥតិបិ សោ ភគវា អរហំ សម្មាសម្ពុទ្ធោ',
      'វិជ្ជាចរណសម្បន្នោ សុគតោ លោកវិទូ',
      'អនុត្តរោ បុរិសទម្មសារថិ សត្ថា ទេវមនុស្សានំ ពុទ្ធោ ភគវាតិ',
    ],
    roman: 'Iti pi so Bhagavā arahaṃ sammāsambuddho · vijjācaraṇasampanno sugato lokavidū · anuttaro purisadammasārathi satthā devamanussānaṃ buddho Bhagavā ti',
    gloss: [
      { w: 'អរហំ', km: 'អ្នកឆ្ងាយចាកកិលេស សមនឹងទទួលការបូជា', en: 'the Worthy One' },
      { w: 'សម្មាសម្ពុទ្ធោ', km: 'អ្នកត្រាស់ដឹង ដោយខ្លួនឯង ដ៏ត្រឹមត្រូវ', en: 'perfectly awakened' },
      { w: 'វិជ្ជាចរណសម្បន្នោ', km: 'បរិបូណ៌ដោយវិជ្ជា និងចរណៈ', en: 'perfect in wisdom and conduct' },
      { w: 'សុគតោ', km: 'អ្នកទៅកាន់ទីដ៏ល្អ ដោយល្អ', en: 'gone to bliss' },
      { w: 'លោកវិទូ', km: 'អ្នកដែលដឹងច្បាស់ នូវលោកទាំងពួង', en: 'knower of the worlds' },
      { w: 'អនុត្តរោ បុរិសទម្មសារថិ', km: 'អ្នកទូន្មានបុរស ដែលគួរទូន្មានបាន ឥតអ្នកណាលើសលប់', en: 'unsurpassed trainer of tamable people' },
      { w: 'សត្ថា ទេវមនុស្សានំ', km: 'គ្រូនៃទេវតា និងមនុស្សទាំងឡាយ', en: 'teacher of gods and humans' },
      { w: 'ពុទ្ធោ', km: 'អ្នកត្រាស់ដឹង នូវសច្ចៈ ៤', en: 'the Awakened One' },
      { w: 'ភគវាតិ', km: 'ព្រះមានព្រះភាគ — សេចក្តីនេះ ពិតដូច្នេះ', en: 'the Blessed One — so it is' },
    ],
    meanK: 'ព្រះមានព្រះភាគនោះ ព្រះអង្គជាអរហន្ត ជាអ្នកត្រាស់ដឹងដោយខ្លួនឯង បរិបូណ៌ដោយវិជ្ជា និងចរណៈ ជាអ្នកទៅល្អ ជាអ្នកដឹងលោក ជាអ្នកទូន្មានបុរស ដែលគួរទូន្មាន ដ៏ឥតលើសលប់ ជាគ្រូនៃទេវតា និងមនុស្សទាំងឡាយ ជាព្រះពុទ្ធ ដ៏មានព្រះភាគ។ ការរំពឹងគុណព្រះពុទ្ធ តែងនាំចិត្តឲ្យស្ងប់ តាមដែលលោករាប់ជាកម្មដ្ឋានមួយ ក្នុងកម្មដ្ឋាន ៤០។',
    meanE: 'Thus indeed is the Blessed One: the Worthy One, fully awakened, perfect in seeing and conduct, well-gone, knower of worlds, unsurpassed guide for those to be tamed, teacher of gods and humans. Recollecting these virtues calms the mind — one of the forty meditation subjects.',
    applyK: 'ពេលចិត្តតក់ស្លុត តានតឹង — រំពឹងគុណព្រះពុទ្ធ ប្រាប់ខ្លួនឯងថា យើងមានគ្រូដ៏ប្រសើរ មានផ្លូវបដិបត្តិ ចិត្តនឹងស្ងប់វិញ។',
    applyE: 'When anxious or tense, recollect the Buddha qualities — we have a supreme teacher and a path; the mind settles.',
  },
  {
    src: 'DHAMMĀNUSSATI — ធម្មគុណ',
    km: 'គុណព្រះធម៌ — ស្វាក្ខាតោ ភគវតា', en: 'Six Qualities of the Dhamma (Svākkhāto)',
    noteK: 'បន្ទូលសរសើរគុណព្រះធម៌ ៦ ប្រការ — គូនឹងគុណព្រះពុទ្ធ និងព្រះសង្ឃ សូត្រផ្សំតែម្តង។', en: 'The six virtues of the Dhamma — the pair to the Buddha and Saṅgha virtues.',
    lines: [
      'ស្វាក្ខាតោ ភគវតា ធម្មោ',
      'សន្ទិដ្ឋិកោ អកាលិកោ ឯហិបស្សិកោ ឱបនេយ្យិកោ',
      'បច្ចត្តំ វេទិតព្ពោ វិញ្ញូហិ',
    ],
    roman: 'Svākkhāto Bhagavatā dhammo · sandiṭṭhiko akāliko ehipassiko opaneyyiko · paccattaṃ veditabbo viññūhī ti',
    gloss: [
      { w: 'ស្វាក្ខាតោ', km: 'ដែលសម្តែងទុក ដ៏ល្អប្រពៃ', en: 'well proclaimed' },
      { w: 'សន្ទិដ្ឋិកោ', km: 'អ្នកបដិបត្តិ ឃើញច្បាស់ ដោយខ្លួនឯង', en: 'visible here and now' },
      { w: 'អកាលិកោ', km: 'ឲ្យផល មិនជាប់កាល', en: 'not delayed in result' },
      { w: 'ឯហិបស្សិកោ', km: 'គួរអញ្ជើញឲ្យមក មើលបាន', en: 'inviting one to come and see' },
      { w: 'ឱបនេយ្យិកោ', km: 'គួរនាំចិត្តចូលទៅខាងក្នុង', en: 'leading inward' },
      { w: 'បច្ចត្តំ វេទិតព្ពោ វិញ្ញូហិ', km: 'អ្នកប្រាជ្ញ គប្បីដឹង ដោយខ្លួនឯង រៀងរាល់គ្នា', en: 'to be known by the wise for themselves' },
    ],
    meanK: 'ព្រះធម៌ ដែលព្រះមានព្រះភាគ ទ្រង់សម្តែងទុក ល្អប្រពៃ មានសេចក្តីថា៖ បុគ្គលបដិបត្តិ រមែងឃើញច្បាស់ ដោយខ្លួនឯង ក្នុងបច្ចុប្បន្ន ឲ្យផល មិនជាប់កាល គួរឲ្យចូលមកមើលបាន គួរនាំចិត្តឲ្យចូលខាងក្នុង ហើយពួកអ្នកប្រាជ្ញ គប្បីដឹងនូវព្រះធម៌នោះ ដោយខ្លួនឯង រៀងរាល់គ្នា។',
    meanE: 'The Dhamma is well proclaimed by the Blessed One: visible here and now, giving results without delay, inviting one to come and see, leading inward, to be known personally by the wise.',
    applyK: 'ពេលអ្នកដទៃសង្ស័យសាសនា — កុំខ្វល់ សូត្រគុណធម៌នេះ រំឮកថា ព្រះធម៌ បដិបត្តិបាន ឃើញបាន ក្នុងជីវិតនេះ។',
    applyE: 'When others doubt the faith, do not waver — recall these Dhamma qualities: it is practicable and visible here and now.',
  },
  {
    src: 'SAṄGHĀNUSSATI — សង្ឃគុណ',
    km: 'គុណព្រះសង្ឃ — សុបដិបន្នោ', en: 'Nine Qualities of the Saṅgha (Supaṭipanno)',
    noteK: 'បន្ទូលសរសើរគុណព្រះសង្ឃ — សូត្របន្ទាប់ពីគុណព្រះពុទ្ធ និងព្រះធម៌។', en: 'The nine virtues of the Saṅgha — recited after the Buddha and Dhamma virtues.',
    lines: [
      'សុបដិបន្នោ ភគវតោ សាវកសង្ឃោ',
      'ឧជុបដិបន្នោ ភគវតោ សាវកសង្ឃោ',
      'ញាយបដិបន្នោ ភគវតោ សាវកសង្ឃោ',
      'សាមីចិបដិបន្នោ ភគវតោ សាវកសង្ឃោ',
      'យទិទំ ចត្តារិ បុរិសយុគានិ អដ្ឋ បុរិសបុគ្គលា ឯស ភគវតោ សាវកសង្ឃោ',
      'អាហុនេយ្យោ បាហុនេយ្យោ ទក្ខិណេយ្យោ អញ្ជលីករណីយោ អនុត្តរំ បុញ្ញក្ខេត្តំ លោកស្សាតិ',
    ],
    roman: 'Supaṭipanno Bhagavato sāvakasaṅgho · ujupaṭipanno Bhagavato sāvakasaṅgho · ñāyapaṭipanno Bhagavato sāvakasaṅgho · sāmīcipaṭipanno Bhagavato sāvakasaṅgho · yadidaṃ cattāri purisayugāni aṭṭha purisapuggalā esa Bhagavato sāvakasaṅgho · āhuneyyo pāhuneyyo dakkhiṇeyyo añjalikaraṇīyo anuttaraṃ puññakkhettaṃ lokassā ti',
    gloss: [
      { w: 'សុបដិបន្នោ', km: 'អ្នកបដិបត្តិល្អ', en: 'practising well' },
      { w: 'ឧជុបដិបន្នោ', km: 'អ្នកបដិបត្តិត្រង់', en: 'practising uprightly' },
      { w: 'ញាយបដិបន្នោ', km: 'អ្នកបដិបត្តិ ដោយញាណ ត្រឹមត្រូវ', en: 'practising wisely' },
      { w: 'សាមីចិបដិបន្នោ', km: 'អ្នកបដិបត្តិសមគួរ', en: 'practising properly' },
      { w: 'ចត្តារិ បុរិសយុគានិ អដ្ឋ បុរិសបុគ្គលា', km: 'គូបុរស ៤ គឺ បុគ្គល ៨ ពួក', en: 'the four pairs, the eight persons' },
      { w: 'អាហុនេយ្យោ', km: 'ជាបុគ្គលសមនឹងទទួល នូវគ្រឿងបូជា', en: 'worthy of offerings' },
      { w: 'បាហុនេយ្យោ', km: 'សមនឹងទទួល បដិធានភ្ញៀវ', en: 'worthy of hospitality' },
      { w: 'ទក្ខិណេយ្យោ', km: 'សមនឹងទទួល នូវទក្ខិណាទាន', en: 'worthy of gifts' },
      { w: 'អនុត្តរំ បុញ្ញក្ខេត្តំ លោកស្ស', km: 'ជាដំណាំបុណ្យ ដ៏ប្រសើរបំផុត នៃលោក', en: 'the unsurpassed field of merit' },
    ],
    meanK: 'គូបុរស ៤ គឺ សោតាបត្តិមគ្គ–ផល ដល់ អរហត្តមគ្គ–ផល ជាបុរស ៨ ពួក នេះ ហៅថា សាវកសង្ឃ របស់ព្រះមានព្រះភាគ ជាអ្នកបដិបត្តិល្អ ត្រង់ ដោយញាណ និងសមគួរ — ជាអ្នកគួរទទួលនូវគ្រឿងបូជា បដិធានភ្ញៀវ ទក្ខិណាទាន និងការប្រណម្យ — ជាដំណាំបុណ្យ ដ៏ប្រសើរ ឥតមានប្រសើរលើស។',
    meanE: 'The Saṅgha of the Blessed One — the four pairs, the eight noble persons — practises well, uprightly, wisely, and properly; they are worthy of offerings, hospitality, gifts, and salutation, the unsurpassed field of merit in the world.',
    applyK: 'ពេលថ្វាយបិណ្ឌបាត ធ្វើទាន — តាំងចិត្តថា កំពុងដាំបុណ្យ ក្នុងដំណាំដ៏ប្រសើរ ចិត្តបរិសុទ្ធ ផលបរិបូណ៌។',
    applyE: 'When giving alms, set the heart: you are planting in the best field of merit — pure intention, full result.',
  },
  {
    src: 'METTĀ SUTTA — KHP 9',
    km: 'មេត្តាសូត្រ — សូត្របណ្តុះក្តីមេត្តា', en: 'The Loving-Kindness Verses (Mettā Sutta)',
    noteK: 'ព្រះសូត្រ សម្រាប់សូត្រការពារ ក្នុងគ្រាភ័យ ឬ បណ្តុះមេត្តា មុនសូត្រធម៌។ ខាងក្រោម គឺខ្លឹមបន្ទូលទាំងស្រុង។', en: 'The protective discourse chanted in times of danger, and used to develop loving-kindness. Below is the full recitation.',
    lines: [
      'ករាណីយ មត្ថកុសលេន យន្តំ សន្តំ បទំ អភិសមេច្ច',
      'សក្កោ ឧជូ ច សូជូ ច សុវាចោ ចស្ស មុទុ អនតិមានី',
      'សន្តុស្សកោ ច សុភរោ ច អប្បកិច្ចោ ច សល្លហុកវុត្តិ',
      'សន្តិន្ទ្រិយោ ច និបកោ ច អប្បគព្ភោ កុលេសុ អននុសិទ្ធានោ',
      'ន ច ខុទ្ទំ សមាចរេ កិញ្ចិ យេន វិញ្ញូ បរេ ឧបវទេយ្យុំ សុខិនោ វា ខេមិនោ ហោន្តុ',
      'សព្វេ សត្តា ភវន្តុ សុខិតត្តា យេ កេចិ បាណភូតត្ថិ តសា វា ថាវរា វា អនវសេសា',
      'ទីឃា វា យេ មហន្តា វា មជ្ឈិមា រស្សកនិកាវា ថូលា',
      'ទិដ្ឋា វា យេ វា អទិដ្ឋា យេ ច ទូរេ វសន្តិ អវិទូរេ ភូតា វា សម្ព្វេសី វា សព្វេ សត្តា ភវន្តុ សុខិតត្តា',
      'ន បរោ បរំ និកុព្ពេថ នាតិមញ្ញេថ កត្ថចិ ន កញ្ចិ ព្យារោសនា បដិឃសញ្ញា ន ញ្ញមញ្ញស្ស ទុក្ខមិច្ឆេយ្យ',
      'មាតា យថា និយំ បុត្តំ អាយុសា ឯកបុត្តមនុរក្ខេ ឯវម្បិ សព្វភូតេសុ មានសម្ភាវេយ្យ អបរិមាណំ',
      'មេត្តញ្ច សព្វលោកស្មិំ មានសម្ភាវេយ្យ អបរិមាណំ ឧទ្ធំ អធោ ច តិរិយញ្ច អសម្ពាធម អវេរំ អសបត្តំ',
      'តិដ្ឋំ ចរុំ និសិន្នោ វា សយានោ វា យាវតស្ស វិគតមិទ្ធោ ឯតំ សតិំ អធិដ្ឋេយ្យ ព្រហ្មមេតំ វិហារមិធមាហុ',
      'ទិដ្ឋិញ្ច អនុបគ្គម្ម សីលវា ទស្សនេន សម្បន្នោ កាមេសុ វិនយគេធំ ន ហិ ជាតុ គព្ភសេយ្យំ បុនរតីតិ',
    ],
    roman: 'Karaṇīyamatthakusalena yaṃ taṃ santaṃ padaṃ abhisamecca sakko ujū ca sūjū ca suvaco cassa mudu anatimānī · santussako ca subharo ca appakicco ca sallahukavutti santindriyo ca nipako ca appagabbho kulesu ananugiddho · na ca khuddaṃ samācare kiñci yena viññū pare upavadeyyuṃ sukhino vā khemino hontu sabbe sattā bhavantu sukhitattā ... na hi jātu gabbhaseyyaṃ punar etī ti',
    gloss: [
      { w: 'ករាណីយ មត្ថកុសលេន', km: 'អ្នកជំនាញក្នុងដំណើរផល គប្បីធ្វើ', en: 'what should be done by one skilled in good' },
      { w: 'យន្តំ សន្តំ បទំ អភិសមេច្ច', km: 'បានយល់ច្បាស់ នូវទីស្ងប់', en: 'having understood the state of peace' },
      { w: 'សក្កោ', km: 'គប្បីជាអ្នករក្សាកិច្ច', en: 'capable' },
      { w: 'ឧជូ', km: 'ត្រង់', en: 'upright' },
      { w: 'សូជូ', km: 'ត្រង់ពន្លឹក ស្មោះត្រង់', en: 'very upright' },
      { w: 'សុវាចោ', km: 'ជាអ្នកនិយាយសម្តីល្អ ពីរោះ', en: 'of gentle speech' },
      { w: 'មុទុ', km: 'ជាអ្នកទន់ភ្លន់', en: 'soft' },
      { w: 'អនតិមានី', km: 'ឥតប្រកាន់ធំ', en: 'not proud' },
      { w: 'សន្តុស្សកោ', km: 'សន្តោស', en: 'content' },
      { w: 'សល្លហុកវុត្តិ', km: 'មានការចិញ្ចឹមជីវិតស្រាលៗ', en: 'of easy livelihood' },
      { w: 'សន្តិន្ទ្រិយោ', km: 'អ្នកមានឥន្ទ្រិយស្ងប់', en: 'of peaceful faculties' },
      { w: 'មាតា យថា និយំ បុត្តំ', km: 'ដូចម្តាយ រក្សាបុត្រ ដែលជាជីវិតខ្លួន', en: 'as a mother guards her only child' },
      { w: 'ព្រហ្មមេតំ វិហារមិធមាហុ', km: 'លោក ហៅថា វិហារព្រហ្ម', en: 'the abiding of Brahma' },
    ],
    meanK: 'សេចក្តីលម្អិត នៃសូត្រនេះ ពន្យល់ថា អ្នកប៉ងបានសុខ គប្បីបដិបត្តិល្អ បរិសុទ្ធ ហើយផ្សាយមេត្តា ឥតគណនាព្រំដែន ទៅកាន់សត្វទាំងអស់ គ្រប់រូប ដូចម្តាយ ស្រឡាញ់បុត្រ តែមួយ។ បុគ្គលណា បដិបត្តិមេត្តានេះបាន ឈ្មោះថា អ្នកនៅក្នុងវិហារព្រហ្ម។ អ្នកបរិបូណ៌ដោយសីល និងទិដ្ឋិត្រឹមត្រូវ បានលះកាមតណ្ហា នឹងលែងកើតក្នុងផ្ទៃ ទៀត។',
    meanE: 'This discourse shows the conduct of one who desires peace, and the radiating of boundless mettā to all beings, as a mother protects her only child. One who dwells thus lives in the abiding of Brahma; complete in virtue and right view, having let go of sensual craving, he returns to birth no more.',
    applyK: 'មុនគេង សូត្រមេត្តាបន្ទូលនេះ យឺតៗ រាល់ថ្ងៃ — គេងលក់ស្កប់ ភ្ញាក់ព្រឹក ចិត្តស្ងប់។',
    applyE: 'Recite this slowly before sleep each day — sleep peaceful, waking calm.',
  },
  {
    src: 'RATANA SUTTA — KHP 6 (គាថាទី ២)',
    km: 'រតនសូត្រ — គាថាសរសើរព្រះពុទ្ធ', en: 'The Jewel Discourse (Ratana Sutta)',
    noteK: 'គាថាល្បី ពី រតនសូត្រ — ព្រះសូត្រដែលទ្រង់ សម្តែង ពេលរោគ អាសន្ន កើតឡើង ក្នុងក្រុងវេសាលី — ប្រើសូត្រការពារភ័យ។', en: 'A famous verse from the Jewel Discourse, chanted for protection — taught when plague struck the city of Vesālī long ago.',
    lines: [
      'យំ កិញ្ចិ វិត្តំ ឥធ វា ហុរំ វា សគ្គេសុ វា យំ រតនំ បណីតំ',
      'ន នោ សមំ អត្ថិ តថាគតេន ឥទម្បិ ពុទ្ធេ រតនំ បណីតំ',
      'ឯតេន សច្ចេន សុវត្ថិ ហោតុ',
    ],
    roman: 'Yaṃ kiñci vittaṃ idha vā huraṃ vā saggesu vā yaṃ ratanaṃ paṇītaṃ · na no samaṃ atthi Tathāgatena idampi Buddhe ratanaṃ paṇītaṃ · etena saccena suvatthi hotu',
    gloss: [
      { w: 'យំ កិញ្ចិ វិត្តំ', km: 'ទ្រព្យណាមួយ ទាំងពួង', en: 'whatever treasure' },
      { w: 'ឥធ វា ហុរំ វា', km: 'ក្នុងលោកនេះ ឬ លោកខាងមុខ', en: 'here or beyond' },
      { w: 'សគ្គេសុ វា យំ រតនំ បណីតំ', km: 'ឬ រតនៈ ណា ដ៏ល្អ ក្នុងសួគ៌ទាំងពួង', en: 'or any precious jewel in the heavens' },
      { w: 'ន នោ សមំ អត្ថិ តថាគតេន', km: 'ឥត មានអ្វី ស្មើ នឹងព្រះតថាគត', en: 'none equals the Tathāgata' },
      { w: 'ឥទម្បិ ពុទ្ធេ រតនំ បណីតំ', km: 'ដូច្នេះ ក្នុងព្រះពុទ្ធ រតនៈ ដ៏ល្អ នេះ', en: 'this is the precious jewel in the Buddha' },
      { w: 'ឯតេន សច្ចេន សុវត្ថិ ហោតុ', km: 'ដោយសច្ចវាចានេះ ចូរឲ្យបានចម្រើន', en: 'by this truth, may there be safety' },
    ],
    meanK: 'ទ្រព្យណាក្តី ក្នុងលោកនេះ លោកខាងមុខ ឬ រតនៈ ឯណាក្តី ក្នុងសួគ៌ ដ៏ល្អ បរិសុទ្ធ — ឥតមានអ្វី ស្មើ នឹងព្រះតថាគតឡើយ។ ដូច្នេះ ក្នុងព្រះពុទ្ធ ត្រូវមានរតនៈ ដ៏ល្អ នេះ។ ដោយសច្ចវាចានេះ ចូរឲ្យបានសុខចម្រើន។ ព្រះពុទ្ធ ទ្រង់សម្តែងរតនសូត្រ ដើម្បីបង្វែរភ័យ រោគ អាសន្ន ក្នុងក្រុងវេសាលី បុរាណ។',
    meanE: 'Whatever treasure here, beyond, or in the heavens — nothing equals the Tathāgata. Thus in the Buddha is this precious jewel. By this truth, may there be safety. The Buddha taught this discourse to ward off a plague in Vesālī.',
    applyK: 'ពេលភ័យ ក្តៅក្រហាយ — សូត្រគាថានេះ រំពឹងគុណព្រះពុទ្ធ ថា មានរតនៈ ដ៏ប្រសើរ ជាទីពឹង។',
    applyE: 'In fear or distress, chant this and remember the Buddha jewel — a refuge beyond compare.',
  },
  {
    src: 'MAṄGALA SUTTA — KHP 5',
    km: 'មង្គលសូត្រ — មង្គល ៣៨', en: 'The Blessings Discourse (Maṅgala Sutta)',
    noteK: 'បន្ទូលមង្គល ៣៨ ប្រការ — ជាបន្ទូលដែលព្រះពុទ្ធ ទ្រង់សម្តែង ពេលទេវតាសួរថា អ្វីជាមង្គល ដ៏ល្អបំផុត។', en: 'The thirty-eight blessings — taught when a deity asked what is the highest blessing.',
    lines: [
      'អសេវនា ច ពាលានំ បណ្ឌិតានញ្ច សេវនា បូជា ច បូជនីយានំ ឯតំ មង្គលមុត្តមំ',
      'បដិរូបទេសវាសោ ច បុព្វេ ច កតបុញ្ញតា អត្តសម្មាបណិធិ ច ឯតំ មង្គលមុត្តមំ',
      'ពាហុសច្ចញ្ច សិប្បញ្ច វិនយោ ច សុសិក្ខិតោ សុភាសិតា ច យា វាចា ឯតំ មង្គលមុត្តមំ',
      'មាតាបិតុ ឧបដ្ឋានំ បុត្តទារស្ស សង្គហោ អនាកុលា ច កម្មន្តា ឯតំ មង្គលមុត្តមំ',
      'ទានញ្ច ធម្មចរិយា ច ញាតកានញ្ច សង្គហោ អនវជ្ជានិ កម្មានិ ឯតំ មង្គលមុត្តមំ',
      'អារតី វិរតី បាបា មជ្ជបានា ច សញ្ញមោ អប្បមាទោ ច ធម្មេសុ ឯតំ មង្គលមុត្តមំ',
      'គារវោ ច និវាតោ ច សន្តុដ្ឋី ច កតញ្ញុតា កាលេន ធម្មស្ស សវនំ ឯតំ មង្គលមុត្តមំ',
      'ខន្តី ច សោវចស្សតា សមណានញ្ច ទស្សនំ កាលេន ធម្មសាកច្ឆា ឯតំ មង្គលមុត្តមំ',
      'តបោ ច ព្រហ្មចរិយញ្ច អរិយសច្ចាន ទស្សនំ និព្វានសច្ឆិកិរិយា ច ឯតំ មង្គលមុត្តមំ',
      'ផុដ្ឋស្ស លោកធម្មេហិ ចិត្តំ យស្ស ន កម្បតិ អសោកំ វិរ្ជំ ខេមំ ឯតំ មង្គលមុត្តមំ',
      'ឯតាទិសានិ កត្វាន សព្វត្ថមបរាជិតា សព្វត្ថ សោត្ថី គច្ឆន្តិ តន្តេសំ មង្គលមុត្តមំ',
    ],
    roman: 'Asevanā ca bālānaṃ paṇḍitānañca sevanā pūjā ca pūjanīyānaṃ etaṃ maṅgalamuttamaṃ ... etaṃ maṅgalamuttamaṃ ti',
    gloss: [
      { w: 'អសេវនា ច ពាលានំ', km: 'ការមិនសេពគប់ ជនពាល', en: 'not consorting with fools' },
      { w: 'បណ្ឌិតានញ្ច សេវនា', km: 'ការសេពគប់ អ្នកប្រាជ្ញ', en: 'associating with the wise' },
      { w: 'បូជា ច បូជនីយានំ', km: 'ការបូជា អ្នកគួរបូជា', en: 'honouring those worthy of honour' },
      { w: 'បដិរូបទេសវាសោ', km: 'ការនៅ ក្នុងប្រទេស លំនៅ សមគួរ', en: 'living in a suitable land' },
      { w: 'បុព្វេ ច កតបុញ្ញតា', km: 'ការបានធ្វើបុណ្យ ទុកក្នុងកាលមុន', en: 'merit done in the past' },
      { w: 'អត្តសម្មាបណិធិ', km: 'ការតម្កល់ខ្លួន ឲ្យត្រឹមត្រូវ', en: 'setting oneself aright' },
      { w: 'ពាហុសច្ចញ្ច សិប្បញ្ច', km: 'ការចេះច្រើន និងសិល្ប៍', en: 'much learning and craft' },
      { w: 'វិនយោ ច សុសិក្ខិតោ', km: 'វិន័យ ដែលហ្វឹកហាត់ល្អ', en: 'well-trained discipline' },
      { w: 'មាតាបិតុ ឧបដ្ឋានំ', km: 'ការទំនុកបម្រុង មាតាបិតា', en: 'supporting mother and father' },
      { w: 'គារវោ ច និវាតោ', km: 'ការគោរព ការសុភាពរាបទាប', en: 'respect and humility' },
      { w: 'សន្តុដ្ឋី ច កតញ្ញុតា', km: 'ការសន្តោស ការដឹងគុណ', en: 'contentment and gratitude' },
      { w: 'ខន្តី ច សោវចស្សតា', km: 'ការអត់ធន់ ការគាប់ពាក្យ', en: 'patience and gentleness' },
      { w: 'ផុដ្ឋស្ស លោកធម្មេហិ ចិត្តំ យស្ស ន កម្បតិ', km: 'ចិត្ត របស់អ្នកណា មិនញាប់ញ័រ ដោយលោកធម៌', en: 'the mind unshaken by worldly ways' },
    ],
    meanK: 'មង្គលទាំង ៣៨ ប្រការ គឺ៖ ១) មិនសេពគប់ជនពាល ២) សេពគប់អ្នកប្រាជ្ញ ៣) បូជាអ្នកគួរបូជា ៤) នៅក្នុងប្រទេសសមគួរ ៥) បានធ្វើបុណ្យទុកក្នុងកាលមុន ៦) តម្កល់ខ្លួនឲ្យត្រឹមត្រូវ ៧) ចេះច្រើន (ពាហុសច្ចៈ) ៨) ចេះសិល្ប៍ ៩) មានវិន័យហ្វឹកហាត់ល្អ ១០) ពោលវាចាល្អ ១១) បម្រើទំនុកបម្រុងមាតាបិតា ១២) ចិញ្ចឹមបុត្ត និងភរិយា ១៣) ប្រកបកិច្ចការឥតច្របូកច្របល់ ១៤) ធ្វើទាន ១៥) បដិបត្តិធម៌ ១៦) ជួយឧបត្ថម្ភញាតិ ១៧) ធ្វើកិច្ចការឥតទោស ១៨) វៀរចាកបាប (អារតី) ១៩) វៀរចាកបាប (វិរតី) ២០) វៀរចាកគ្រឿងស្រវឹង ២១) មិនប្រមាទក្នុងធម៌ ២២) ការគោរព ២៣) ការសុភាពរាបទាប ២៤) ការសន្តោស ២៥) ការដឹងគុណ ២៦) ស្តាប់ធម៌តាមកាល ២៧) ការអត់ធន់ ២៨) គាប់ពាក្យ ងាយទូន្មាន ២៩) បានឃើញសមណៈ ៣០) ធម្មសាកច្ឆាតាមកាល ៣១) ប្រព្រឹត្តតបៈ ៣២) ប្រព្រឹត្តព្រហ្មចរិយៈ ៣៣) ឃើញអរិយសច្ចៈ ៣៤) ដឹងច្បាស់នូវព្រះនិព្វាន ៣៥) ចិត្តមិនញាប់ញ័រដោយលោកធម៌ ៣៦) ជាអ្នកឥតសោក ៣៧) ជាអ្នកឥតធូលីកិលេស ៣៨) ជាអ្នកមានសេចក្តីសុខចម្រើន (ខេមៈ)។ អ្នកដែលបរិបូណ៌ដោយមង្គលទាំងនេះ ឈ្នះគ្រប់ទិស បានសុខចម្រើន គ្រប់កន្លែង។',
    meanE: 'The thirty-eight blessings: 1) not mixing with fools, 2) associating with the wise, 3) honouring the worthy, 4) living in a fitting place, 5) past good deeds, 6) setting oneself aright, 7) much learning, 8) skill in a craft, 9) well-trained discipline, 10) pleasant speech, 11) supporting mother and father, 12) caring for one\'s children and spouse, 13) an orderly livelihood, 14) generosity, 15) righteous conduct, 16) helping relatives, 17) blameless deeds, 18) turning away from evil, 19) abstaining from evil, 20) refraining from intoxicants, 21) diligence in the Dhamma, 22) respect, 23) humility, 24) contentment, 25) gratitude, 26) hearing the Dhamma in season, 27) patience, 28) gentleness and being easy to admonish, 29) seeing recluses, 30) timely discussion of the Dhamma, 31) austerity, 32) the holy life, 33) insight into the noble truths, 34) realization of Nibbāna, 35) a mind unshaken by worldly ways, 36) sorrowless, 37) stainless, 38) secure and at peace. One blessed with all these is undefeated in every direction — safe and happy everywhere.',
    applyK: 'រៀងរាល់ព្រឹក សូត្រមង្គល មួយប្រការ មួយថ្ងៃម្តង — យកមកបដិបត្តិ ជីវិត នឹងប្រែល្អបន្តិចម្តងៗ។',
    applyE: 'Each morning recite one blessing and live it that day — life slowly turns for the better.',
  },
  {
    src: 'PARĀBHAVA SUTTA — SN 1.6',
    km: 'បរាភវសូត្រ — ហេតុវិនាស', en: 'The Discourse on Downfall (Parābhava Sutta)',
    noteK: 'ទេវតាអង្គមួយ មកសួរព្រះពុទ្ធ ថាអ្វីជាហេតុនាំឲ្យមនុស្សវិនាស។ ព្រះពុទ្ធ ទ្រង់ត្រាស់ ហេតុវិនាស ១២ ប្រការ។', en: 'A deva asked the Buddha what brings a person to ruin. The Buddha answered with twelve causes of downfall.',
    lines: [
      'បរាភវន្តំ បុរិសំ មយំ បុច្ឆាម គោតម; ភវន្តំ បុដ្ឋុមាគម្ម កិំ បរាភវតោ មុខំ។',
      'សុវិជានោ ភវំ ហោតិ សុវិជានោ បរាភវោ; ធម្មកាមោ ភវំ ហោតិ ធម្មទេស្សី បរាភវោ។',
      'អសន្តស្ស បិយា ហោន្តិ សន្តេ ន កុរុតេ បិយំ; អសតំ ធម្មំ រោចេតិ តំ បរាភវតោ មុខំ។',
      'និទ្ទាសីលី សភាសីលី អនុដ្ឋាតា ច យោ នរោ; អលសោ កោធបញ្ញាណោ តំ បរាភវតោ មុខំ។',
      'យោ មាតរំ បិតរំ វា ជិណ្ណកំ គតយោព្វនំ; បហុ សន្តោ ន ភរតិ តំ បរាភវតោ មុខំ។',
      'យោ ព្រាហ្មណំ សមណំ វា អញ្ញំ វាបិ វនិព្វកំ; មុសាវាទេន វញ្ចេតិ តំ បរាភវតោ មុខំ។',
      'បហូតវិត្តោ បុរិសោ សហិរញ្ញោ សភោជនោ; ឯកោ ភុញ្ជតិ សាទូនិ តំ បរាភវតោ មុខំ។',
      'ជាតិត្ថទ្ធោ ធនត្ថទ្ធោ គោត្តត្ថទ្ធោ ច យោ នរោ; សញ្ញាតិំ អតិមញ្ញេតិ តំ បរាភវតោ មុខំ។',
      'ឥត្ថិធុត្តោ សុរាធុត្តោ អក្ខធុត្តោ ច យោ នរោ; លទ្ធំ លទ្ធំ វិនាសេតិ តំ បរាភវតោ មុខំ។',
      'សេហិ ទារេហិ អសន្តុដ្ឋោ វេសិយាសុ បទុស្សតិ; ទុស្សតិ បរាទារេសុ តំ បរាភវតោ មុខំ។',
      'អតីតយោព្វនោ បោសោ អានេតិ តិម្ពរុត្ថនិំ; តស្សា ឥស្សា ន សុបតិ តំ បរាភវតោ មុខំ។',
      'ឥត្ថិំ សោណ្ឌិំ វិកិរណិំ បុរិសំ វាបិ តាទិសំ; ឥស្សរិយស្មិំ ឋបេតិ តំ បរាភវតោ មុខំ។',
      'អប្បភោគោ មហាតណ្ហោ ខត្តិយេ ជាយតេ កុលេ; សោ ច រជ្ជំ បត្ថយតិ តំ បរាភវតោ មុខំ។',
      'ឯតេ បរាភវេ លោកេ បណ្ឌិតោ សមវេក្ខិយ; អរិយោ ទស្សនសម្បន្នោ ស លោកំ ភជតេ សិវំ។',
    ],
    roman: 'Parābhavantaṃ purisaṃ, mayaṃ pucchāma Gotama; bhavantaṃ puṭṭhumāgamma, kiṃ parābhavato mukhaṃ. Suvijāno bhavaṃ hoti, suvijāno parābhavo; dhammakāmo bhavaṃ hoti, dhammadessī parābhavo ... Ete parābhave loke, paṇḍito samavekkhiya; ariyo dassanasampanno, sa lokaṃ bhajate sivaṃ.',
    gloss: [
      { w: 'បរាភវន្តំ បុរិសំ', km: 'អំពីបុគ្គល ដែលកំពុងវិនាស', en: 'about a person in decline' },
      { w: 'មយំ បុច្ឆាម គោតម', km: 'យើងខ្ញុំ សួរព្រះគោតម', en: 'we ask you, Gotama' },
      { w: 'ភវន្តំ បុដ្ឋុមាគម្ម', km: 'យើង មកទូលសួរ ព្រះអង្គ', en: 'we have come to question you' },
      { w: 'កិំ បរាភវតោ មុខំ', km: 'អ្វីជាប្រភព នៃសេចក្តីវិនាស', en: 'what is the source of downfall' },
      { w: 'សុវិជានោ ភវំ ហោតិ', km: 'ងាយ ស្គាល់ អ្នកដែលចម្រើន', en: 'easily known is the progressive one' },
      { w: 'សុវិជានោ បរាភវោ', km: 'ងាយ ស្គាល់ អ្នកដែលវិនាស', en: 'easily known is the one declining' },
      { w: 'ធម្មកាមោ ភវំ ហោតិ', km: 'អ្នកស្រឡាញ់ធម៌ ទើបចម្រើន', en: 'one who loves the Dhamma grows' },
      { w: 'ធម្មទេស្សី បរាភវោ', km: 'អ្នកស្អប់ធម៌ ទើបវិនាស', en: 'one who hates the Dhamma declines' },
      { w: 'លទ្ធំ លទ្ធំ វិនាសេតិ', km: 'ទ្រព្យ ដែលរកបានរាល់ដង ស្រេចបញ្ចេញឲ្យអស់', en: 'squandering all that is gained' },
      { w: 'ឯតេ បរាភវេ លោកេ', km: 'ហេតុវិនាស ទាំងនេះ ក្នុងលោក', en: 'these causes of ruin in the world' },
      { w: 'បណ្ឌិតោ សមវេក្ខិយ', km: 'អ្នកប្រាជ្ញ ឃើញហើយ', en: 'having seen them, the wise' },
      { w: 'អរិយោ ទស្សនសម្បន្នោ', km: 'អ្នកបរិសុទ្ធ បរិបូណ៌ ដោយបញ្ញាភ្នែកធម៌', en: 'the noble one, endowed with vision' },
      { w: 'ស លោកំ ភជតេ សិវំ', km: 'អ្នកនោះ បរិភោគលោក ដ៏សេចក្តីសុខ', en: 'they enjoy a world at peace' },
    ],
    meanK: 'ទេវតាអង្គមួយ បានមកឱនក្រាប ព្រះពុទ្ធ នៅព្រៃជេតពន ហើយសួរថា៖ «អ្វីជាហេតុនាំឲ្យមនុស្សវិនាស?» ព្រះពុទ្ធ ទ្រង់ត្រាស់ហេតុវិនាស ១២ ប្រការ៖ ១) ស្អប់ធម៌ ២) សេពគប់ជនលាមក ៣) ជាមនុស្សងងុយដេក ខ្ជិលច្រអូស ៤) មិនចិញ្ចឹម មាតាបិតាចាស់ជរា ៥) បញ្ឆោតព្រាហ្មណ៍ សមណៈ ដោយពាក្យកុហក ៦) មានទ្រព្យ តែបរិភោគតែម្នាក់ឯង ៧) ប្រកាន់ត្រកូល ទ្រព្យ មើលងាយញាតិ ៨) ជាប់កាម ស្រា ល្បែង ៩) មិនស្កប់នឹងប្រពន្ធខ្លួន ១០) លើសវ័យ យកប្រពន្ធក្មេង ដេកមិនលក់ ដោយច្រណែន ១១) បញ្ជាន់មនុស្សស្រា អសារឥតការ ឲ្យកាន់អំណាច ១២) ទ្រព្យតិច តែប្រាថ្នាធំ។ អ្នកដែលវៀរហេតុវិនាសទាំងនេះបាន ឈ្នះទិសទាំងពួង បានសេចក្តីសុខ។',
    meanE: 'A deva came and asked the Buddha at Jeta\'s Grove: "What brings a person to ruin?" The Buddha gave twelve causes of downfall: 1) hating the Dhamma, 2) consorting with the wicked, 3) loving sleep, idleness and anger, 4) not supporting aged parents, 5) deceiving brahmins and recluses by lies, 6) having wealth but enjoying it alone, 7) proud of birth, wealth and clan, despising relatives, 8) addicted to women, drink and gambling, 9) not content with one\'s own spouse, 10) past one\'s youth marrying a younger wife and losing sleep through jealousy, 11) placing the drunken and wasteful in authority, 12) little wealth but great ambition. One who avoids all these causes of ruin is undefeated in every direction and lives in peace.',
    applyK: 'រាល់ល្ងាច ពិនិត្យខ្លួន នូវហេតុវិនាស ១២ — ឃើញប៉ះកន្លែងណា កែថ្ងៃស្អែកភ្លាម។',
    applyE: 'Each evening review the twelve causes of ruin — where you slip, correct it the very next day.',
  },
]
</script>