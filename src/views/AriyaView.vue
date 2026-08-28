<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('ធម៌បន្ថែម ១៨ — អរិយបុគ្គល', 'EXTRA 18 — THE NOBLE PERSONS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('អរិយបុគ្គល ៨ ពួក', 'The Eight Noble Persons') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('អរិយបុគ្គល គឺបុគ្គលដ៏ខ្ពង់ខ្ពស់ អ្នកដែលបានសម្រេច នូវមគ្គ (ផ្លូវ) និងផល ក្នុងព្រះពុទ្ធសាសនា ។ តាមការសម្រេចនោះ មាន ៤ ថ្នាក់ គឺ សោតាបន្ន សកទាគាមី អនាគាមី អរហន្ត ។ ពេលរាប់ទាំងអ្នកកំពុងប្រតិបត្តិ ដើម្បីសម្រេចផលនីមួយៗ ក៏មាន ៨ ពួក ចែកជា ៤ គូ ។', 'A noble person (ariya-puggala) is a lofty one who has attained the path (magga) and its fruit (phala) in Buddhism. There are four levels of attainment: the stream-enterer (sotāpanna), once-returner (sakadāgāmī), non-returner (anāgāmī), and the arahant. Counting also those who are practising to attain each fruit, there are eight persons in four pairs.') }}
    </p>

    <!-- four stages overview -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('ថ្នាក់ ៤ យ៉ាង', 'THE FOUR LEVELS') }}</p>
      <div v-for="(s, i) in stages" :key="s.pl" class="mt-5 pb-5" :style="{ borderBottom: i < stages.length - 1 ? '1px solid var(--border)' : 'none' }">
        <div class="flex flex-wrap items-center gap-3">
          <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
          <div class="flex-1 min-w-0">
            <span class="paali">{{ s.pl }}</span>
            <strong class="ml-2" :style="{ color: 'var(--ink)' }">{{ t(s.km, s.en) }}</strong>
          </div>
        </div>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(s.kmBody, s.enBody) }}</p>
        <p class="chapter-label mt-4" :style="{ color: 'var(--accent)' }">{{ t('សញ្ញយោជនៈ ដែលកាត់បាន', 'FETTERS ABANDONED') }}</p>
        <ul class="tick-list mt-3 text-sm" :style="{ color: 'var(--ink-muted)' }">
          <li v-for="f in s.fetters" :key="f.en">{{ t(f.km, f.en) }}</li>
        </ul>
      </div>
    </div>

    <!-- the ten fetters -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">SAṄYOJANĀ — សញ្ញយោជនៈ ១០</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ចំណង ១០ ដែលចងសត្វនឹងវដ្តសង្សារ', 'The Ten Fetters that Bind to the Round of Rebirth') }}</h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('សញ្ញយោជនៈ ប្រែថា ចំណង ។ សត្វត្រូវចំណង ១០ ចងជាប់ ឥតផុតពីការកើត–ស្លាប់ ។ អរិយបុគ្គល កាត់ចំណងទាំងនោះចេញ ម្តងម្តងៗ តាមថ្នាក់របស់ខ្លួន។', 'Saṅyojana means a fetter or bond. Beings are bound by these ten and cannot escape rebirth. The noble persons cut these bonds one by one, according to their level.') }}
      </p>
      <ul class="tick-list mt-4">
        <li v-for="(y, i) in fetters10" :key="y.pl">
          <div class="flex items-baseline gap-3">
            <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
            <div class="min-w-0">
              <span class="paali">{{ y.pl }}</span>
              <strong class="ml-2" :style="{ color: 'var(--ink)' }">{{ t(y.km, y.en) }}</strong>
              <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(y.kmBody, y.enBody) }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- four pairs / eight persons -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('បុគ្គល ៨ ពួក ក្នុង ៤ គូ', 'EIGHT PERSONS IN FOUR PAIRS') }}</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('បដិបណ្នក និង ផលបុគ្គល', 'The Path-treaders and the Fruit-attainers') }}</h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រះពុទ្ធទ្រង់ប្រកាសថា អរិយសង្ឃ មានបុគ្គល ៨ ពួក ជា ៤ គូ ។ គូនីមួយៗ មាន បដិបណ្នក (អ្នកកំពុងដើរលើផ្លូវ) មួយ និង ផលដ្ឋ (អ្នកបានផល) មួយ ។ ពេលចំណាំក្នុងចិត្ត រាប់ បដិបណ្នក ៤ និង ផលដ្ឋ ៤ ត្រូវគ្នាជា ៨ ។', 'The Buddha declared that the noble Saṅgha has eight persons in four pairs. Each pair consists of one treading the path (paṭipannaka) and one who has attained the fruit (phalaṭṭha). Reckoning four path-treaders and four fruit-attainers gives eight.') }}
      </p>
      <ul class="tick-list mt-4">
        <li v-for="p in pairs" :key="p.en">
          <strong :style="{ color: 'var(--ink)' }">{{ t(p.km, p.en) }}</strong>
          <span class="text-sm" :style="{ color: 'var(--ink-muted)' }"> — {{ t(p.kmBody, p.enBody) }}</span>
        </li>
      </ul>
      <div class="verse-box p-4 mt-5">
        <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">
          {{ t('អរិយសង្ឃ ជាបុគ្គល ៨ ពួក ជា ទក្ខិណេយ្យបុគ្គល ជាទីគោរពបូជា ជាទីធ្វើបុណ្យ ជាទីអញ្ជើញផ្សំបាតដៃ ។', 'The noble Saṅgha is the field of merit — worthy of gifts, of respect, of homage.') }}
        </p>
      </div>
    </div>

    <!-- types of stream-enterer -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('អត្តត្ថ សោតាបន្ន', 'THE THREE KINDS OF STREAM-ENTERER') }}</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('សោតាបន្ន ៣ ពួក', 'Three Kinds of Stream-enterer') }}</h3>
      <ul class="tick-list mt-4">
        <li v-for="k in sotapanna_kinds" :key="k.en">
          <strong :style="{ color: 'var(--ink)' }">{{ t(k.km, k.en) }}</strong>
          <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(k.kmBody, k.enBody) }}</p>
        </li>
      </ul>
    </div>

    <!-- magga & phala -->
    <div class="grid md:grid-cols-2 gap-6 mt-8">
      <div class="card-paper p-6">
        <p class="chapter-label">MAGGA — មគ្គ</p>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t('មគ្គញាណ ៤ យ៉ាង', 'The Four Paths') }}</h3>
        <ul class="tick-list mt-4 text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          <li>{{ t('សោតាបត្តិមគ្គ — ផ្លូវនៃអ្នកចូលស្ទឹង', 'Stream-entry path') }}</li>
          <li>{{ t('សកទាគាមីមគ្គ — ផ្លូវនៃអ្នកត្រឡប់មកម្តង', 'Once-returning path') }}</li>
          <li>{{ t('អនាគាមីមគ្គ — ផ្លូវនៃអ្នកមិនត្រឡប់', 'Non-returning path') }}</li>
          <li>{{ t('អរហត្តមគ្គ — ផ្លូវនៃអរហន្ត', 'Arahant path') }}</li>
        </ul>
        <p class="text-sm mt-4 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('មគ្គ ជាការកាត់កិលេស; ផល ជាសភាពដែលកើតតាមមគ្គ ឥតដាច់ពីគ្នា ក្នុងខណៈតែមួយ។', 'The path cuts the defilements; the fruit is the state that immediately follows, inseparable from the path, in a single moment.') }}
        </p>
      </div>
      <div class="card-paper p-6">
        <p class="chapter-label">ANĀGĀMĪ — អនាគាមី</p>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t('ទីកើតរបស់អនាគាមី', 'Where the Non-returner is Reborn') }}</h3>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('អនាគាមី លែងត្រឡប់មកកាមភពទៀត ។ កើតក្នុងព្រហ្មលោក ៥ ជាន់ ដែលហៅថា សុទ្ធាវាស (ភពស្អាត) គឺ អវិហា អតប្បា សុទស្សា សុទស្សី អកនិដ្ឋា ទើបបរិនិព្វាននៅទីនោះ ។', 'A non-returner no longer comes back to the sense realm. One is reborn in one of the five Pure Abodes (suddhāvāsa): Aviha, Atappa, Sudassā, Sudassī, Akaniṭṭhā, and attains Nibbāna there.') }}
        </p>
      </div>
    </div>

    <!-- arahant + verse -->
    <div class="grid md:grid-cols-2 gap-6 mt-8">
      <div class="card-paper p-6">
        <p class="chapter-label">ARAHANT — អរហន្ត</p>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t('វិសេសរបស់អរហន្ត', 'The Distinction of an Arahant') }}</h3>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('អរហន្ត ជាអ្នកអស់អាសវៈ អស់កិលេស អស់សញ្ញយោជនៈ ១០ ឥតកើតទៀត រលត់ទុក្ខទាំងពួង ។ ព្រះអង្គក៏បរិនិព្វាននៅពេលអនិច្ចំកាយរលត់ ។', 'An arahant has exhausted the taints, all defilements, and the ten fetters; there is no more rebirth and all suffering is ended. At the breaking up of the body one is fully extinguished.') }}
        </p>
        <div class="verse-box p-3 mt-4">
          <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t('កើតអស់ហើយ ព្រហ្មវាសអស់ហើយ កិច្ចក្នុងសាសនា ធ្វើស្រេចហើយ ។', 'Birth is ended, the holy life is fulfilled, the task is done.') }}</p>
        </div>
      </div>
      <div class="card-paper p-6">
        <p class="chapter-label">{{ t('សទ្ធាជា', 'FAITH AND SUPPORT') }}</p>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t('សទ្ធាជួយដល់អរិយបុគ្គល', 'Lay Faith and the Noble Persons') }}</h3>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('អ្នកកាន់ព្រះពុទ្ធសាសនា មានសទ្ធាជ្រះថ្លាចំពោះអរិយសង្ឃ ជាទីគោរពបូជា ។ ការមានសទ្ធា កាន់សីល ស្តាប់ធម៌ ជាមូលដ្ឋាននាំទៅរកសេចក្តីចម្រើន និងសេចក្តីបរិសុទ្ធ ទីបំផុតទៅដល់មគ្គ ផល ក្នុងអនាគត ។', 'Devout Buddhists have confidence in the noble Saṅgha as an object of respect and veneration. Having faith, keeping the precepts, and listening to the Dhamma are the foundation of progress and purity, leading in time to the paths and fruits.') }}
        </p>
        <div class="verse-box p-3 mt-3">
          <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t('សទ្ធា ជាទ្រព្យប្រសើរបំផុតរបស់បុគ្គលក្នុងលោកនេះ; សីល ជាទ្រព្យប្រសើរបំផុត ដើម្បីសេចក្តីសុខ ។', 'Faith is the best wealth here; virtue is the best wealth for happiness.') }}</p>
        </div>
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

const stages = [
  {
    pl: 'SOTĀPANNA', km: 'សោតាបន្ន', en: 'Stream-enterer',
    kmBody: 'អ្នកចូលទៅក្នុងស្ទឹងនូវព្រះនិព្វាន ជាលើកដំបូង; បានបំបែកសញ្ញយោជនៈ ៣ មិនធ្លាក់ទៅអបាយ កើតម្តងទៀត ច្រើនបំផុត ៧ ជាតិទៀត។', enBody: 'One who has entered the stream to Nibbāna for the first time; has broken three fetters, will not fall to a lower realm, and is reborn at most seven more times.',
    fetters: [
      { km: 'អត្តវាទុបាទាន គឺសេចក្តីឃើញថាមានខ្លួន', en: 'self-view (sakkāya-diṭṭhi)' },
      { km: 'វិចិកិច្ឆា ការសង្ស័យ', en: 'doubt (vicikicchā)' },
      { km: 'សីលព្វតបរាមាស ការប្រកាន់សីលព្វត', en: 'attachment to rites (sīlabbata-parāmāsa)' },
    ],
  },
  {
    pl: 'SAKADĀGĀMĪ', km: 'សកទាគាមី', en: 'Once-returner',
    kmBody: 'អ្នកដែលបានកាត់ចំណង ៣ ដើម ហើយធ្វើឲ្យរាគៈ ទោសៈ ថយទៅស្តើង; កើតក្នុងកាមភព តែម្តងទៀត ទើបសម្រេចទីបំផុត។', enBody: 'One who has broken the first three fetters and greatly weakened greed and hatred; is reborn in the sense realm only once more before reaching the end.',
    fetters: [
      { km: 'រាគៈ ទោសៈ បន្ថយទៅស្តើង (ឥតដាច់មួយរំពេច)', en: 'greed and hatred reduced to thin (not yet cut)' },
    ],
  },
  {
    pl: 'ANĀGĀMĪ', km: 'អនាគាមី', en: 'Non-returner',
    kmBody: 'អ្នកដែលលះរាគៈ ទោសៈ បានហើយ មិនត្រឡប់មកកាមភពទៀត; កើតក្នុងព្រហ្មលោក ទើបបរិនិព្វាននៅទីនោះ។', enBody: 'One who has abandoned greed and hatred, never returns to the sense realm; is reborn in a Brahmā realm and attains Nibbāna there.',
    fetters: [
      { km: 'កាមរាគៈ សេចក្តីត្រេកត្រអាលក្នុងកាម', en: 'sensual desire (kāma-rāga)' },
      { km: 'បដិឃៈ សេចក្តីខឹងក្រោធ', en: 'ill will (paṭigha)' },
    ],
  },
  {
    pl: 'ARAHANT', km: 'អរហន្ត', en: 'Arahant',
    kmBody: 'អ្នកអស់កិលេស អស់អាសវៈ អស់សញ្ញយោជនៈ ១០ ប្រការ; បានសម្រេចកិច្ចផង ខ្លួន ឥតកើតទៀត ជាទីបំផុតនៃផ្លូវ។', enBody: 'One who has exhausted all defilements, the taints, and the ten fetters; the task is done, there is no more rebirth, the end of the path.',
    fetters: [
      { km: 'រូបរាគៈ អរូបរាគៈ មានះ ឧទ្ធច្ចៈ អវិជ្ជា — រលត់ទាំងអស់', en: 'craving for form, craving for the formless, conceit, restlessness, ignorance — all ceased' },
    ],
  },
]

const fetters10 = [
  { pl: 'SAKKĀYA-DIṬṬHI', km: 'សក្កាយទិដ្ឋិ', en: 'Self-view', kmBody: 'សេចក្តីឃើញថាមានខ្លួន មានរបស់ខ្លួន ក្នុងខន្ធ ៥។', enBody: 'Seeing a self or what belongs to self in the five aggregates.' },
  { pl: 'VICIKICCHĀ', km: 'វិចិកិច្ឆា', en: 'Sceptical doubt', kmBody: 'សេចក្តីសង្ស័យ ក្នុងព្រះពុទ្ធ ធម៌ សង្ឃ និងការបដិបត្តិ។', enBody: 'Doubt about the Buddha, the Dhamma, the Saṅgha, and the practice.' },
  { pl: 'SĪLABBATA-PARĀMĀSA', km: 'សីលព្វតបរាមាស', en: 'Attachment to rites and vows', kmBody: 'សេចក្តីប្រកាន់ថា ការបរិសុទ្ធ កើតពីសីលព្វត តែឯង។', enBody: 'The belief that purity comes from mere rites and observances.' },
  { pl: 'KĀMA-RĀGA', km: 'កាមរាគៈ', en: 'Sensual desire', kmBody: 'សេចក្តីត្រេកត្រអាល ក្នុងរូប សំឡេង ក្លិន រស ផោដ្ឋព្វ។', enBody: 'Craving for sights, sounds, smells, tastes, and touch.' },
  { pl: 'PAṬIGHA', km: 'បដិឃៈ', en: 'Ill will', kmBody: 'សេចក្តីខឹងក្រោធ ក្រៀកក្រញាំ បៀតបៀន។', enBody: 'Anger, aversion, and resentment.' },
  { pl: 'RŪPA-RĀGA', km: 'រូបរាគៈ', en: 'Craving for form', kmBody: 'សេចក្តីត្រេកត្រអាល ក្នុងរូបឈាន និងរូបភព។', enBody: 'Attachment to the fine-material realms and jhānas.' },
  { pl: 'ARŪPA-RĀGA', km: 'អរូបរាគៈ', en: 'Craving for the formless', kmBody: 'សេចក្តីត្រេកត្រអាល ក្នុងអរូបឈាន និងអរូបភព។', enBody: 'Attachment to the formless realms and jhānas.' },
  { pl: 'MĀNA', km: 'មានះ', en: 'Conceit', kmBody: 'សេចក្តីប្រកាន់ថា ខ្លួនប្រសើរ ស្មើ ឬថយជាងអ្នកដទៃ។', enBody: 'Esteeming oneself as better, equal, or worse than others.' },
  { pl: 'UDDHACCA', km: 'ឧទ្ធច្ចៈ', en: 'Restlessness', kmBody: 'សេចក្តីវិលវល់ នៃចិត្ត មិនស្ងប់ ក្នុងអារម្មណ៍។', enBody: 'Mental agitation and lack of calm.' },
  { pl: 'AVIJJĀ', km: 'អវិជ្ជា', en: 'Ignorance', kmBody: 'សេចក្តីមិនដឹងច្បាស់ នូវអរិយសច្ច ៤ ជាឫសគល់នៃចំណងទាំងអស់។', enBody: 'Not knowing the four noble truths — the root of all fetters.' },
]

const pairs = [
  { km: 'គូទី ១ ៖ អ្នកកំពុងប្រតិបត្តិ និងអ្នកបានផល សោតាបន្ន', en: 'Pair 1: the path-treader and the stream-enterer', kmBody: 'បដិបណ្នក ឈ្មោះថា សោតាបត្តិមគ្គ; ផលដ្ឋ ឈ្មោះថា សោតាបត្តិផល។', enBody: 'the path-treader on the stream-entry path; the fruit-attainer with the stream-entry fruit.' },
  { km: 'គូទី ២ ៖ អ្នកកំពុងប្រតិបត្តិ និងអ្នកបានផល សកទាគាមី', en: 'Pair 2: the path-treader and the once-returner', kmBody: 'បដិបណ្នក ឈ្មោះថា សកទាគាមីមគ្គ; ផលដ្ឋ ឈ្មោះថា សកទាគាមីផល។', enBody: 'the path-treader on the once-returning path; the fruit-attainer with the once-returning fruit.' },
  { km: 'គូទី ៣ ៖ អ្នកកំពុងប្រតិបត្តិ និងអ្នកបានផល អនាគាមី', en: 'Pair 3: the path-treader and the non-returner', kmBody: 'បដិបណ្នក ឈ្មោះថា អនាគាមីមគ្គ; ផលដ្ឋ ឈ្មោះថា អនាគាមីផល។', enBody: 'the path-treader on the non-returning path; the fruit-attainer with the non-returning fruit.' },
  { km: 'គូទី ៤ ៖ អ្នកកំពុងប្រតិបត្តិ និងអ្នកបានផល អរហន្ត', en: 'Pair 4: the path-treader and the arahant', kmBody: 'បដិបណ្នក ឈ្មោះថា អរហត្តមគ្គ; ផលដ្ឋ ឈ្មោះថា អរហត្តផល។', enBody: 'the path-treader on the arahant path; the fruit-attainer with the arahant fruit.' },
]

const sotapanna_kinds = [
  { km: 'សត្តក្ខត្តុបរមៈ', en: 'The seven-times-at-most', kmBody: 'កើតក្នុងមនុស្ស និងទេវលោក មិនលើសពី ៧ ជាតិ ទើបបរិនិព្វាន។', enBody: 'Reborn among humans and devas at most seven times before attaining Nibbāna.' },
  { km: 'កោលំកោលៈ', en: 'The family-to-family', kmBody: 'កើតក្នុងត្រកូលល្អ ២ ឬ ៣ ជាតិ ទើបបរិនិព្វាន។', enBody: 'Passing through two or three good families before attaining Nibbāna.' },
  { km: 'ឯកពីជី', en: 'The single-seeder', kmBody: 'កើតក្នុងជាតិមួយទៀត តែម្តង ទើបបរិនិព្វាន។', enBody: 'Reborn only once more, then attains Nibbāna.' },
]
</script>
