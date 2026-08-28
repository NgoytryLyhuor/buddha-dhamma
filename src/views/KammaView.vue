<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ០៤ — កម្មផល', 'GATHA 04 — KAMMA & REBIRTH') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('កម្មជាកេរដំណែល ផលជាការត្រឡប់', 'Kamma is the Legacy, Vipāka the Return') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('កម្ម គឺចេតនា គឺស្មារតីគិតហើយធ្វើ។ ព្រះពុទ្ធបរមគ្រូត្រាស់ទេសនាថា៖ «ចេតនាហើយ ដែលតថាគតហៅថាកម្ម»។ ទង្វើល្អឲ្យផលល្អ ទង្វើអាក្រក់ឲ្យផលអាក្រក់ — មិនមែនព្រះជាអ្នកវិនិច្ឆ័យ គឺច្បាប់ធម្មជាតិនៃហេតុផល។', 'Kamma is intention — willing and acting. The Buddha said: «It is volition that I call kamma.» Good deeds ripen as good result, bad deeds as bad — no judge is needed; it is the natural law of cause and effect.') }}
    </p>

    <!-- kusala vs akusala -->
    <div class="grid md:grid-cols-2 gap-6 mt-8">
      <div class="card-paper p-6">
        <p class="chapter-label" style="color: var(--sage)">KUSALA</p>
        <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('កុសលកម្មបថ ១០', '10 Wholesome Courses') }}</h3>
        <ul class="tick-list mt-3">
          <li v-for="k in kusala" :key="k.en">
            <strong :style="{ color: 'var(--ink)' }">{{ t(k.km, k.en) }}</strong>
            <span class="text-xs" :style="{ color: 'var(--ink-muted)' }"> — {{ k.pl }}</span>
          </li>
        </ul>
      </div>
      <div class="card-paper p-6">
        <p class="chapter-label" style="color: var(--red)">AKUSALA</p>
        <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('អកុសលកម្មបថ ១០', '10 Unwholesome Courses') }}</h3>
        <ul class="tick-list mt-3">
          <li v-for="k in akusala" :key="k.en">
            <strong :style="{ color: 'var(--ink)' }">{{ t(k.km, k.en) }}</strong>
            <span class="text-xs" :style="{ color: 'var(--ink-muted)' }"> — {{ k.pl }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- roots -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">MŪLA — 6</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ឫសគល់ ៦ នៃចិត្ត', 'The Six Roots of Mind') }}</h3>
      <div class="grid md:grid-cols-3 gap-4 mt-5">
        <div v-for="r in roots" :key="r.en" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid ' + r.color }">
          <p class="font-display" :style="{ color: r.color }">{{ t(r.km, r.en) }} <span class="text-xs font-bold">{{ r.pl }}</span></p>
          <p class="text-xs mt-2" :style="{ color: 'var(--ink-muted)' }">{{ t(r.kmBody, r.enBody) }}</p>
        </div>
      </div>
    </div>

    <!-- 31 planes -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">BHUMMI — 31</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ភូមិ ៣១ នៃសង្សារ', '31 Planes of Existence') }}</h3>
      <p class="text-sm mt-2" :style="{ color: 'var(--ink-muted)' }">{{ t('កម្មនីមួយៗ នាំសត្វទៅកាន់ភូមិដែលសមនឹងផលរបស់ខ្លួន — ទាំងអាក្រក់ ទាំងល្អ។', 'Every kamma leads beings to the realm its fruit deserves — for good or ill.') }}</p>
      <div class="mt-5 space-y-3">
        <details v-for="g in planes" :key="g.en" class="rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid ' + g.color }">
          <summary class="flex items-center justify-between gap-2 px-4 py-3 cursor-pointer list-none" :style="{ color: 'var(--ink)' }">
            <span class="min-w-0">
              <span class="font-bold" :style="{ color: g.color }">{{ t(g.km, g.en) }}</span>
              <span class="text-xs ml-2" :style="{ color: 'var(--ink-muted)' }">{{ t(g.kmBody, g.enBody) }}</span>
            </span>
            <span class="paali shrink-0">{{ g.n }}</span>
          </summary>
          <div class="px-4 pb-4">
            <p class="text-xs flex gap-2 items-baseline mb-3" :style="{ color: 'var(--ink-muted)' }">
              <span class="font-bold" :style="{ color: 'var(--accent-bright)' }">✦</span>
              <span>{{ t(g.rootK, g.rootE) }}</span>
            </p>
            <ol class="space-y-2">
              <li v-for="(p, i) in g.list" :key="p.en" class="flex gap-2 text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                <span class="shrink-0" :style="{ color: 'var(--ink-faint)' }">{{ khNum(g.base + i + 1) }}.</span>
                <span class="min-w-0">
                  <strong :style="{ color: 'var(--ink)' }">{{ t(p.km, p.en) }}</strong>
                  <span class="ml-1" :style="{ color: 'var(--ink-faint)' }">{{ p.pl }}</span>
                  <br>
                  <span class="text-[11px]" :style="{ color: 'var(--ink-muted)' }">{{ t(p.cK, p.cE) }}</span>
                </span>
              </li>
            </ol>
          </div>
        </details>
      </div>
      <div class="verse-box p-3 mt-5">
        <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t('ឱកាសកើតជាមនុស្សមានតម្លៃណាស់ — បានជួបធម៌ អាចបដិបត្តិ អាចរួចផុតពីវដ្ដ។', 'To be born human and meet the Dhamma is precious — one can practise and escape the round.') }}</p>
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

const kusala = [
  { km: 'បាណាតិបាតា វេរមណី', en: 'Nothing that breathes', pl: 'not killing' },
  { km: 'អទិន្នាទានា វេរមណី', en: 'Nothing that is not given', pl: 'not stealing' },
  { km: 'កាមេសុមិច្ឆាចារា វេរមណី', en: 'Pure in love', pl: 'no sexual misconduct' },
  { km: 'មុសាវាទា វេរមណី', en: 'True in speech', pl: 'not lying' },
  { km: 'បិសុណាវាចា វេរមណី', en: 'Words that unite', pl: 'not slandering' },
  { km: 'ផរុសវាចា វេរមណី', en: 'Gentle words', pl: 'not speaking harshly' },
  { km: 'សម្ផប្បលាបា វេរមណី', en: 'Timely and useful', pl: 'not idle chatter' },
  { km: 'អនភិជ្ឈា វេរមណី', en: 'An open hand', pl: 'non-covetousness' },
  { km: 'អព្យាបាទ វេរមណី', en: 'Goodwill to all', pl: 'non-ill-will' },
  { km: 'សម្មាទិដ្ឋិ', en: 'Right view', pl: 'seeing the truth' },
]

const akusala = [
  { km: 'បាណាតិបាត', en: 'Killing', pl: 'taking breath' },
  { km: 'អទិន្នាទាន', en: 'Stealing', pl: 'taking what is not given' },
  { km: 'កាមេសុមិច្ឆាចារ', en: 'Sexual misconduct', pl: 'wrong in love' },
  { km: 'មុសាវាទ', en: 'Lying', pl: 'false speech' },
  { km: 'បិសុណាវាចា', en: 'Slander', pl: 'divisive speech' },
  { km: 'ផរុសវាចា', en: 'Harsh speech', pl: 'abusive words' },
  { km: 'សម្ផប្បលាប', en: 'Idle chatter', pl: 'gossip, vain talk' },
  { km: 'អភិជ្ឈា', en: 'Covetousness', pl: 'greedy longing' },
  { km: 'ព្យាបាទ', en: 'Ill-will', pl: 'wishing harm' },
  { km: 'មិច្ឆាទិដ្ឋិ', en: 'Wrong view', pl: 'denying the Dhamma' },
]

const roots = [
  { km: 'លោភៈ', en: 'Greed', pl: 'lobha', color: 'var(--red)', kmBody: 'ចង់បាន តោងតាមអារម្មណ៍', enBody: 'clinging desire' },
  { km: 'ទោសៈ', en: 'Aversion', pl: 'dosa', color: 'var(--red)', kmBody: 'ខឹងឆេវឆាវ ស្អប់', enBody: 'anger and hatred' },
  { km: 'មោហៈ', en: 'Delusion', pl: 'moha', color: 'var(--red)', kmBody: 'វង្វេង មិនយល់ពិត', enBody: 'blind confusion' },
  { km: 'អលោភៈ', en: 'Non-greed', pl: 'alobha', color: 'var(--sage)', kmBody: 'ចំណាយដាច់ ថ្វាយចែក', enBody: 'generosity, letting go' },
  { km: 'អទោសៈ', en: 'Non-aversion', pl: 'adosa', color: 'var(--sage)', kmBody: 'មេត្តា អត់ឱន', enBody: 'loving-kindness, patience' },
  { km: 'អមោហៈ', en: 'Non-delusion', pl: 'amoha', color: 'var(--sage)', kmBody: 'បញ្ញាដឹងសេចក្តីពិត', enBody: 'wisdom seeing the truth' },
]

const planes = [
  {
    km: 'អបាយភូមិ', en: '4 Woeful Planes', n: '4', base: 0, color: 'var(--red)',
    kmBody: 'ភូមិអាក្រក់ ជាជម្រករបស់កម្មអកុសល', enBody: 'the unhappy worlds, home of evil kamma',
    rootK: 'ឫសគល់៖ កើតដោយកម្មអកុសល ដែលមានលោភៈ ទោសៈ មោហៈ ជាហេតុដើម។', rootE: 'Root: rebirth by unwholesome deeds rooted in greed, aversion and delusion.',
    list: [
      { km: 'នរក', en: 'Hell', pl: 'niraya', cK: 'កម្មអកុសលធ្ងន់ — សម្លាប់ បៀតបៀន កំហឹងខ្លាំង។', cE: 'heavy evil kamma — killing, cruelty, fierce hatred.' },
      { km: 'តិរច្ឆាន', en: 'Animals', pl: 'tiracchāna', cK: 'កម្មវង្វេងល្ងង់ — ធ្វើអំពើដោយមោហៈ និងកាមមិច្ឆាចារ។', cE: 'deluded conduct — acting on ignorance and sensual excess.' },
      { km: 'ប្រេត', en: 'Ghosts', pl: 'peta', cK: 'កម្មកំណាញ់ស្វិត — លោភៈ មិនចែករំលែក។', cE: 'stingy, grasping kamma — greed with no generosity.' },
      { km: 'អសុរកាយ', en: 'Demons (asuras)', pl: 'asurakāya', cK: 'កម្មអកុសលបន្ទាប់ — ព្យាបាទ ឥស្សា ប្រមាថ។', cE: 'lesser evil kamma — ill-will, envy, arrogance.' },
    ]
  },
  {
    km: 'កាមសុគតិភូមិ', en: '7 Happy Sense Planes', n: '7', base: 4, color: 'var(--accent)',
    kmBody: 'ភូមិល្អក្នុងកាមលោក ជាផលរបស់កុសលកម្ម', enBody: 'the happy sense-sphere worlds, fruit of wholesome deeds',
    rootK: 'ឫសគល់៖ កើតដោយកុសលកម្មកម្រិតផ្សេងៗ — ទាន សីល ភាវនា ដ៏ចម្រើនឡើងរៀងៗខ្លួន។', rootE: 'Root: rebirth by wholesome kamma at growing levels — giving, virtue, meditation.',
    list: [
      { km: 'មនុស្ស', en: 'Humans', pl: 'manussā', cK: 'កុសលកម្មកម្រិតមធ្យម គឺ ទាន និង សីល។', cE: 'moderate wholesome kamma — giving and virtue.' },
      { km: 'ចាតុមហារាជិកា', en: 'Four Great Kings', pl: 'cātummahārājikā', cK: 'សីលរឹងមាំ ជាមួយកុសលខ្ពស់ជាងមនុស្សបន្តិច។', cE: 'firm virtue with somewhat stronger wholesome kamma.' },
      { km: 'តាវតិង្សៈ', en: 'The Thirty-Three', pl: 'tāvatiṃsā', cK: 'កុសលខ្ពស់ថែមទៀត ប្រកបដោយគុណគាប់។', cE: 'yet higher wholesome kamma and gentle virtue.' },
      { km: 'យាមៈ', en: 'Yāma', pl: 'yāmā', cK: 'កុសលស្ងប់ស្ងៀម កាន់តែល្អិតល្អន់។', cE: 'still finer, tranquil wholesome kamma.' },
      { km: 'តុសិតៈ', en: 'Tusita', pl: 'tusitā', cK: 'កុសលដ៏រីករាយ — ស្ថានដែលព្រះពោធិសត្វគង់រង់ចាំ មុននឹងចុះមកកើតជាមនុស្ស។', cE: 'joyful wholesome kamma — the realm where the Bodhisatta waits before his last birth.' },
      { km: 'និម្មាណរតី', en: 'Delighting in Creation', pl: 'nimmānaratī', cK: 'កុសលខ្ពស់ ផ្សំជាមួយសេចក្តីស្ងប់ខាងក្នុង។', cE: 'exalted wholesome kamma with inner serenity.' },
      { km: 'បរនិម្មិតវសវត្តី', en: 'Wielding Power over Others', pl: 'paranimmitavasavattī', cK: 'កុសលដ៏ខ្ពស់បំផុត ក្នុងកាមលោកទាំងមូល។', cE: 'the highest wholesome kamma of the entire sense world.' },
    ]
  },
  {
    km: 'រូបាវចរព្រហ្មភូមិ', en: '16 Fine-material Brahma Planes', n: '16', base: 11, color: 'var(--blue)',
    kmBody: 'ភូមិព្រហ្មដែលនៅមានរូប ជាផលរបស់រូបជ្ឈានកុសល', enBody: 'fine-material realms, fruit of the rūpa-jhānas',
    rootK: 'ឫសគល់៖ កើតដោយរូបជ្ឈានកុសល តាមកម្រិតស្រាល-មធ្យម-ខ្ពស់នៃសមាបត្តិនីមួយៗ។ សុទ្ធាវាស ៥ កើតបានតែចំពោះព្រះអនាគាមីប៉ុណ្ណោះ។', rootE: 'Root: rebirth by the fine-material jhānas at each level of attainment. The 5 Pure Abodes arise only for non-returners.',
    list: [
      { km: 'ព្រហ្មបរិសជ្ជៈ', en: 'Assembly of Brahmā', pl: 'brahmaparisajjā', cK: 'ឈានទី ១ កម្រិតស្រាល។', cE: 'first jhāna, weak attainment.' },
      { km: 'ព្រហ្មបុរោហិតៈ', en: 'Ministers of Brahmā', pl: 'brahmapurohitā', cK: 'ឈានទី ១ កម្រិតកណ្តាល។', cE: 'first jhāna, medium attainment.' },
      { km: 'មហាព្រហ្ម', en: 'Great Brahmā', pl: 'mahābrahmā', cK: 'ឈានទី ១ កម្រិតខ្ពស់។', cE: 'first jhāna, strong attainment.' },
      { km: 'បរិត្តាភា', en: 'Of Little Radiance', pl: 'parittābha', cK: 'ឈានទី ២ កម្រិតស្រាល។', cE: 'second jhāna, weak attainment.' },
      { km: 'អប្បមាណាភា', en: 'Of Immeasurable Radiance', pl: 'appamāṇābha', cK: 'ឈានទី ២ កម្រិតកណ្តាល។', cE: 'second jhāna, medium attainment.' },
      { km: 'អាភស្សរា', en: 'Of Streaming Radiance', pl: 'ābhassarā', cK: 'ឈានទី ២ កម្រិតខ្ពស់។', cE: 'second jhāna, strong attainment.' },
      { km: 'បរិត្តសុភា', en: 'Of Little Beauty', pl: 'parittasubhā', cK: 'ឈានទី ៣ កម្រិតស្រាល។', cE: 'third jhāna, weak attainment.' },
      { km: 'អប្បមាណសុភា', en: 'Of Immeasurable Beauty', pl: 'appamāṇasubhā', cK: 'ឈានទី ៣ កម្រិតកណ្តាល។', cE: 'third jhāna, medium attainment.' },
      { km: 'សុភកិណ្ហៈ', en: 'Of Radiant Beauty', pl: 'subhakiṇha', cK: 'ឈានទី ៣ កម្រិតខ្ពស់។', cE: 'third jhāna, strong attainment.' },
      { km: 'វេហប្ផលៈ', en: 'Of Great Fruit', pl: 'vehapphala', cK: 'ឈានទី ៤ កម្រិតស្រាល ឬ កណ្តាល។', cE: 'fourth jhāna, weak or medium attainment.' },
      { km: 'អសញ្ញសត្ត', en: 'Unconscious Beings', pl: 'asaññasatta', cK: 'ឈានទី ៤ ដោយប្រាថ្នាឲ្យតែរូប ឥតចិត្តគិត។', cE: 'fourth jhāna willed as bare form without consciousness.' },
      { km: 'អវិហា', en: 'Aviha', pl: 'avihā', cK: 'សុទ្ធាវាស៖ កើតបានតែចំពោះព្រះអនាគាមី។', cE: 'Pure Abode — only for non-returners.' },
      { km: 'អតប្បា', en: 'Atappa', pl: 'atappā', cK: 'សុទ្ធាវាស៖ កើតបានតែចំពោះព្រះអនាគាមី។', cE: 'Pure Abode — only for non-returners.' },
      { km: 'សុទស្សៈ', en: 'Sudassa', pl: 'sudassā', cK: 'សុទ្ធាវាស៖ កើតបានតែចំពោះព្រះអនាគាមី។', cE: 'Pure Abode — only for non-returners.' },
      { km: 'សុទស្សី', en: 'Sudassī', pl: 'sudassī', cK: 'សុទ្ធាវាស៖ កើតបានតែចំពោះព្រះអនាគាមី។', cE: 'Pure Abode — only for non-returners.' },
      { km: 'អកនិដ្ឋៈ', en: 'Akaniṭṭha', pl: 'akaniṭṭha', cK: 'សុទ្ធាវាសខ្ពស់បំផុត៖ កើតបានតែចំពោះព្រះអនាគាមី។', cE: 'highest Pure Abode — only for non-returners.' },
    ]
  },
  {
    km: 'អរូបាវចរព្រហ្មភូមិ', en: '4 Formless Brahma Planes', n: '4', base: 27, color: 'var(--purple)',
    kmBody: 'ភូមិព្រហ្មឥតរូប ជាផលរបស់អរូបជ្ឈានកុសល', enBody: 'formless realms, fruit of the arūpa-jhānas',
    rootK: 'ឫសគល់៖ កើតដោយអរូបជ្ឈានកុសល ៤ តាមសមាបត្តិនីមួយៗ។', rootE: 'Root: rebirth by each of the four formless attainments.',
    list: [
      { km: 'អាកាសានញ្ចាយតនៈ', en: 'Base of Infinite Space', pl: 'ākāsānañcāyatana', cK: 'អរូបជ្ឈានទី ១ — ហួសពីកំណត់រូប ឃើញអាកាសឥតដែនកំណត់។', cE: '1st formless jhāna — passing beyond form, seeing space as boundless.' },
      { km: 'វិញ្ញាណញ្ចាយតនៈ', en: 'Base of Infinite Consciousness', pl: 'viññāṇañcāyatana', cK: 'អរូបជ្ឈានទី ២ — ដឹងវិញ្ញាណឥតព្រំដែន។', cE: '2nd formless jhāna — consciousness as boundless.' },
      { km: 'អាកិញ្ចញ្ញាយតនៈ', en: 'Base of Nothingness', pl: 'ākiñcaññāyatana', cK: 'អរូបជ្ឈានទី ៣ — យល់ឃើញថា «គ្មានអ្វីសោះ»។', cE: '3rd formless jhāna — seeing nothing there at all.' },
      { km: 'នេវសញ្ញានាសញ្ញាយតនៈ', en: 'Neither-Perception-Nor-Non-Perception', pl: 'nevasaññānāsaññāyatana', cK: 'អរូបជ្ឈានទី ៤ — ចិត្តដ៏ខ្ពស់បំផុត ក្នុងវដ្ដសង្សារ។', cE: '4th formless jhāna — the sublimest mind within saṃsāra.' },
    ]
  },
]
</script>