<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ០២ — ធម៌មូលដ្ឋាន', 'GATHA 02 — CORE TEACHINGS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('អរិយសច្ចៈ ៤ (សេចក្តីពិតដ៏ថ្លៃថ្នូរ ៤ យ៉ាង)', 'The Four Noble Truths') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ធម៌ទាំងអស់របស់ព្រះសម្មាសម្ពុទ្ធ មានមូលដ្ឋានលើអរិយសច្ចៈ ៤ គឺដូចជាគ្រូពេទ្យពិនិត្យជំងឺ៖ (១) ដឹងជំងឺ (២) ដឹងហេតុ (៣) ដឹងការជាសះស្បើយ (៤) ដឹងថ្នាំ ។', 'All the teachings of the Buddha rest on the Four Noble Truths — like the method of a physician: (1) know the disease, (2) know its cause, (3) know the cure, (4) know the medicine.') }}
    </p>

    <!-- 4 Noble Truths -->
    <div class="grid md:grid-cols-2 gap-4 mt-8">
      <div v-for="(tr, i) in truths" :key="tr.en" class="card-paper card-paper-hover p-5">
        <div class="flex items-center gap-3">
          <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ '១២៣៤'[i] }}</span>
          <div>
            <h3 class="font-display text-base" :style="{ color: 'var(--ink)' }">{{ t(tr.km, tr.en) }}</h3>
            <span class="paali">{{ tr.paali }}</span>
          </div>
        </div>
        <p class="text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(tr.kmBody, tr.enBody) }}</p>
      </div>
    </div>

    <!-- 8-fold path -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('មគ្គ ៨', 'THE EIGHTFOLD PATH') }}</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('មាគ៌ាប្រពៃ ៨ យ៉ាង (អរិយដ្ឋង្គិកមគ្គ) ចែកជាបីពួក', 'The Noble Eightfold Path in Three Groups') }}</h3>
      <div class="grid md:grid-cols-3 gap-5 mt-5">
        <div v-for="g in pathGroups" :key="g.en" class="rounded-sm p-4" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <p class="font-display" :style="{ color: 'var(--accent)' }">{{ t(g.km, g.en) }}</p>
          <ul class="tick-list mt-3">
            <li v-for="p in g.items" :key="p.en">
              <strong :style="{ color: 'var(--ink)' }">{{ t(p.km, p.en) }}</strong>
              <br>
              <span class="text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t(p.kmBody, p.enBody) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 3 marks + 5 aggregates -->
    <div class="grid lg:grid-cols-2 gap-6 mt-8">
      <div class="card-paper p-6">
        <p class="chapter-label">TILAKKHANA</p>
        <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ត្រៃលក្ខណ៍', 'Three Marks of Existence') }}</h3>
        <div v-for="m in marks" :key="m.en" class="mt-4 pb-4" :style="{ borderBottom: '1px solid var(--border)' }">
          <p class="font-display" :style="{ color: 'var(--accent)' }">{{ m.paali }} <span class="text-sm font-bold" :style="{ color: 'var(--ink)' }">— {{ t(m.km, m.en) }}</span></p>
          <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(m.kmBody, m.enBody) }}</p>
        </div>
      </div>

      <div class="card-paper p-6">
        <p class="chapter-label">PANCAKKHANDHĀ</p>
        <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ខន្ធ ៥', 'The Five Aggregates') }}</h3>
        <p class="text-sm mt-2" :style="{ color: 'var(--ink-muted)' }">{{ t('អ្វីដែលយើងហៅថា «ខ្លួនយើង» គឺប្រជុំនៃខន្ធ ៥ (ក្រុមរបស់ដែលតាក់តែងរូប-ចិត្ត) ដែលប្រែប្រួលរាល់ខណៈ។', 'What we call "my self" is a flux of five aggregates changing every moment.') }}</p>
        <ul class="tick-list mt-4">
          <li v-for="a in aggregates" :key="a.en">
            <strong :style="{ color: 'var(--ink)' }">{{ t(a.km, a.en) }}</strong>
            <span class="text-xs" :style="{ color: 'var(--ink-muted)' }"> — {{ t(a.kmBody, a.enBody) }}</span>
          </li>
        </ul>
        <div class="verse-box p-3 mt-4">
          <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t('អ្វីៗទាំងអស់ (សព្វវត្ថុ) មិនមែនជាខ្លួន មិនមែនរបស់ខ្លួន។', 'All these things are not "I", not "mine".') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()

const truths = [
  { paali: 'DUKKHA', km: 'ទុក្ខ', en: 'Suffering', kmBody: 'កើត ចាស់ ស្លាប់ (ជាតិ ជរា មរណៈ) សោកស្តាយ ខ្សឹកខ្សួល ឈឺចាប់ ចង្អៀតចង្អល់; បែកព្រាត់ពីអ្វីដែលស្រឡាញ់; ជួបជុំជាមួយអ្វីដែលស្អប់; ចង់បានមិនបាន — សរុប ការប្រកាន់ខន្ធ ៥ ជាទុក្ខ។', enBody: 'Birth, ageing, death; sorrow, lamentation, pain, grief, despair; separation from the loved, union with the hated, not getting what one wants — in short, clinging to the five aggregates is suffering.' },
  { paali: 'SAMUDAYA', km: 'សមុទយៈ', en: 'Origin', kmBody: 'ហេតុនៃទុក្ខ គឺតណ្ហា (សេចក្តីប្រាថ្នាស្រេកឃ្លាន) ៣ យ៉ាង ៖ កាមតណ្ហា (ចង់បានកាម) ភវតណ្ហា (ចង់កើតទៀត) វិភវតណ្ហា (ចង់រលត់)។', enBody: 'The cause of suffering is craving — thirst for sense pleasures, for existence, and for non-existence.' },
  { paali: 'NIRODHA', km: 'និរោធៈ', en: 'Cessation', kmBody: 'កាលណាតណ្ហារលត់ មន្ទិល (សេចក្តីកខ្វក់របស់ចិត្ត) ក៏អស់ ទើបដល់និព្វាន ដែលមិនកើត មិនចាស់ មិនស្លាប់។', enBody: 'The utter fading of craving leads to Nibbāna — the unborn, unageing, undying.' },
  { paali: 'MAGGA', km: 'មគ្គៈ', en: 'Path', kmBody: 'ផ្លូវដែលនាំទៅរកទីកណ្តាល មិនបណ្តោយ មិនខំហួស — គឺអរិយដ្ឋង្គិកមគ្គ ទាំង ៨។', enBody: 'The middle way between indulgence and austerity — the Noble Eightfold Path.' },
]

const pathGroups = [
  {
    km: 'បញ្ញា', en: 'Wisdom',
    items: [
      { km: 'សម្មាទិដ្ឋិ', en: 'Right View', kmBody: 'យល់ឃើញត្រឹមត្រូវ — យល់ច្បាស់នូវទុក្ខ ហេតុ ការរលត់ មគ្គ។', enBody: 'Seeing the four truths aright.' },
      { km: 'សម្មាសង្កប្បៈ', en: 'Right Intention', kmBody: 'ចេតនាត្រឹមត្រូវ — គិតចេញពីទុក្ខ មិនគិតបៀតបៀន។', enBody: 'Resolve for renunciation, goodwill, harmlessness.' },
    ]
  },
  {
    km: 'សីល', en: 'Conduct',
    items: [
      { km: 'សម្មាវាចា', en: 'Right Speech', kmBody: 'មិននិយាយកុហក ញុះញង់ ជេរ ពាក្យឥតប្រយោជន៍។', enBody: 'No lying, slander, harsh or idle speech.' },
      { km: 'សម្មាកម្មន្តៈ', en: 'Right Action', kmBody: 'មិនសម្លាប់ មិនលួច មិនប្រព្រឹត្តិខុសក្នុងកាម។', enBody: 'No killing, stealing, sexual misconduct.' },
      { km: 'សម្មាអាជីវៈ', en: 'Right Livelihood', kmBody: 'ចិញ្ចឹមជីវិតដោយផ្លូវសុច្ចរិត។', enBody: 'Earning by a harmless, honest trade.' },
    ]
  },
  {
    km: 'សមាធិ', en: 'Concentration',
    items: [
      { km: 'សម្មាវាយាមៈ', en: 'Right Effort', kmBody: 'បង្កើតកុសល លះបង់អកុសល។', enBody: 'Cultivating the good, abandoning the bad.' },
      { km: 'សម្មាសតិ', en: 'Right Mindfulness', kmBody: 'ដឹងខ្លួនលើកាយ លើអារម្មណ៍ (វេទនា) លើគំនិត និងលើអ្វីដែលកើតក្នុងចិត្ត (ធម៌)។', enBody: 'Mindful of body, feeling, mind, dhammas.' },
      { km: 'សម្មាសមាធិ', en: 'Right Concentration', kmBody: 'ដាក់ចិត្តឲ្យស្ងប់ នៅនឹងអារម្មណ៍តែមួយ ឥតរាយមាយ។', enBody: 'Unifying the mind in one-pointed steadiness.' },
    ]
  },
]

const marks = [
  { paali: 'ANICCAṂ', km: 'អនិច្ចំ', en: 'Impermanence', kmBody: 'មិនទៀង — សង្ខារទាំងអស់ កើត រលត់ ប្រែប្រួលមិនឈប់។', enBody: 'All formations arise, cease, and change without pause.' },
  { paali: 'DUKKHAṂ', km: 'ទុក្ខំ', en: 'Suffering', kmBody: 'ជាទុក្ខ — អ្វីដែលមិនទៀង រមែងជាទីតាំងនៃទុក្ខ។', enBody: 'Whatever is impermanent is unsatisfactory.' },
  { paali: 'ANATTĀ', km: 'អនត្តា', en: 'Non-self', kmBody: 'គ្មានខ្លួន — គ្មានខ្លួន គ្មានរបស់ខ្លួន នៅក្នុងសង្ខារទាំងឡាយ។', enBody: 'In all formations, there is no lasting "I" to own.' },
]

const aggregates = [
  { km: 'រូប', en: 'Form', kmBody: 'កាយ និង វត្ថុផ្សេងៗ', enBody: 'body and materiality' },
  { km: 'វេទនា', en: 'Feeling', kmBody: 'សុខ ទុក្ខ និងអារម្មណ៍មិនល្អមិនអាក្រក់ (អព្យាក្រឹត)', enBody: 'pleasant, painful, neutral' },
  { km: 'សញ្ញា', en: 'Perception', kmBody: 'ចំណាំសម្គាល់អារម្មណ៍', enBody: 'marking and recognition' },
  { km: 'សង្ខារ', en: 'Formations', kmBody: 'ការគិតប្រុងប្រាប់ (ចេតនា) និងគំនិតផ្សំផ្គុំផ្សេងៗ', enBody: 'volitions and mental fabrications' },
  { km: 'វិញ្ញាណ', en: 'Consciousness', kmBody: 'ការដឹងអារម្មណ៍', enBody: 'bare knowing of an object' },
]
</script>