<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('ធម៌បន្ថែម ១៨ — អរិយបុគ្គល', 'EXTRA 18 — THE NOBLE PERSONS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('អរិយបុគ្គល ៨ ពួក', 'The Eight Noble Persons') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('អរិយបុគ្គល គឺបុគ្គលដ៏ខ្ពង់ខ្ពស់ អ្នកដែលបានសម្រេចមគ្គ–ផល ក្នុងព្រះពុទ្ធសាសនា ។ មាន ៨ ពួក តាមសមណញ្ញនិច្ចប្រការ គឺ សោតាបន្ន សកទាគាម៉ អនាគាមី អរហន្ត និង អ្នកកំពុងប្រតិបត្តិ (បដិបណ្នក) រៀងរាល់ផលនីមួយៗ។', 'A noble person (ariya-puggala) is a lofty one who has attained a path and its fruit. There are eight kinds: the stream-enterer, once-returner, non-returner, and arahant, each together with the one who is practising to attain it (paṭipannaka).') }}
    </p>

    <!-- four fruit stages -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('ស្នាដៃ ៤ យ៉ាង', 'THE FOUR STAGES') }}</p>
      <div v-for="(s, i) in stages" :key="s.pl" class="mt-5 pb-5" :style="{ borderBottom: i < stages.length - 1 ? '1px solid var(--border)' : 'none' }">
        <div class="flex flex-wrap items-center gap-3">
          <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ '១២៣៤'[i] }}</span>
          <div class="flex-1 min-w-0">
            <span class="paali">{{ s.pl }}</span>
            <strong class="ml-2" :style="{ color: 'var(--ink)' }">{{ t(s.km, s.en) }}</strong>
          </div>
        </div>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(s.kmBody, s.enBody) }}</p>
        <ul class="tick-list mt-3 text-sm" :style="{ color: 'var(--ink-muted)' }">
          <li v-for="f in s.fetters" :key="f.en">{{ t(f.km, f.en) }}</li>
        </ul>
      </div>
    </div>

    <!-- the four pairs -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('ពួក ៨ វិញ្ញាណ', 'THE FOUR PAIRS') }}</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('៨ បុគ្គល ក្នុង ៤ គូ', 'Eight Persons in Four Pairs') }}</h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('អរិយសង្ឃ ប្រកាសថា មានបុគ្គល ៨ ពួក ជា ៤ គូ៖ អ្នកកំពុងតាំងនៅក្នុងផ្លូវ និងអ្នកបានផល នៃផលនីមួយៗ។', 'The noble Saṅgha is declared to have eight persons in four pairs: one treading the path and one who has attained the fruit, for each fruit.') }}
      </p>
      <ul class="tick-list mt-4">
        <li v-for="p in pairs" :key="p.en">
          <strong :style="{ color: 'var(--ink)' }">{{ t(p.km, p.en) }}</strong>
        </li>
      </ul>
    </div>

    <!-- who can it be -->
    <div class="grid md:grid-cols-2 gap-6 mt-8">
      <div class="card-paper p-6">
        <p class="chapter-label">{{ t('អរហន្ត', 'THE ARAHANT') }}</p>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t('វិសេសរបស់អរហន្ត', 'The Distinction of an Arahant') }}</h3>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('អរហន្ត ជាអ្នកអស់ហើយនូវអាសវៈ អស់កិលេស មិនកើតទៀត រលត់ទុក្ខទាំងពួង។', 'An arahant has exhausted the taints, has no more defilements, is not reborn, and has ended all suffering.') }}
        </p>
        <div class="verse-box p-3 mt-4">
          <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t('កើតអស់ហើយ ព្រហ្មអស់ហើយ កិច្ចក្នុងសាសនា ធ្វើស្រេចហើយ។', 'Birth is ended, the holy life is fulfilled, the task is done.') }}</p>
        </div>
      </div>
      <div class="card-paper p-6">
        <p class="chapter-label">{{ t('សទ្ធាជា', 'FAITH AND SUPPORT') }}</p>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t('សទ្ធាជួយដល់អរិយបុគ្គល', 'Lay Faith and the Noble Persons') }}</h3>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('អ្នកកាន់ព្រះពុទ្ធសាសនា មានសទ្ធាជ្រះថ្លាចំពោះអរិយសង្ឃ ជាទីគោរពបូជា ។ ការមានសទ្ធា កាន់សីល ស្តាប់ធម៌ ជាមូលដ្ឋាននាំទៅរកសេចក្តីចម្រើន និងសេចក្តីបរិសុទ្ធ ។', 'Devout Buddhists have confidence in the noble Saṅgha as an object of respect and veneration. Having faith, keeping the precepts, and listening to the Dhamma are the foundation that leads to progress and purity.') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()

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
    kmBody: 'អ្នកដែលកើតក្នុងកាមភព តែម្តងទៀត ទើបសម្រេចទីបំផុត; កាត់បន្ថយនូវរាគៈ ទោសៈ ដល់ទៅបន្ថយអស់មួយភាគធំ។', enBody: 'One who is reborn in the sense realm only once more before reaching the end; greed and hatred are greatly weakened.',
    fetters: [
      { km: 'រាគៈ ទោសៈ ថយទៅស្តើង', en: 'greed and hatred reduced to thin' },
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
    kmBody: 'អ្នកអស់កិលេស អស់អាសវៈ ឥតយោជនៈ ១០ ប្រការ; បានសម្រេចកិច្ចផង ខ្លួន ឥតកើតទៀត ជាទីបំផុតនៃផ្លូវ ។', enBody: 'One who has exhausted all defilements and all ten fetters; the task is done, there is no more rebirth, the end of the path.',
    fetters: [
      { km: 'រូបរាគៈ អរូបរាគៈ មានះ ឧទ្ធច្ចៈ អវិជ្ជា — រលត់ទាំងអស់', en: 'craving for form, craving for the formless, conceit, restlessness, ignorance — all ceased' },
    ],
  },
]

const pairs = [
  { km: 'គូទី ១ ៖ អ្នកកំពុងប្រតិបត្តិ និងអ្នកបានផល សោតាបន្ន', en: 'Pair 1: the path-treader and the stream-enterer' },
  { km: 'គូទី ២ ៖ អ្នកកំពុងប្រតិបត្តិ និងអ្នកបានផល សកទាគាមី', en: 'Pair 2: the path-treader and the once-returner' },
  { km: 'គូទី ៣ ៖ អ្នកកំពុងប្រតិបត្តិ និងអ្នកបានផល អនាគាមី', en: 'Pair 3: the path-treader and the non-returner' },
  { km: 'គូទី ៤ ៖ អ្នកកំពុងប្រតិបត្តិ និងអ្នកបានផល អរហន្ត', en: 'Pair 4: the path-treader and the arahant' },
]
</script>
