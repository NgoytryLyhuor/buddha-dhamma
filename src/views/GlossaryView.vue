<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('វចនានុក្រមធម៌ ១១ — ពន្យល់ពាក្យគន្លឹះ', 'GLOSSARY 11 — KEY PALI WORDS IN PLAIN KHMER') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('វចនានុក្រមធម៌ខ្លី', 'A Small Glossary of the Dhamma') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ពាក្យបាលី ជាភាសាដើមនៃព្រះត្រៃបិដក។ ពេលយើងយល់ពាក្យ ដូចជា កម្ម និព្វាន អនិច្ចា ជាភាសាខ្មែរ យើងទើបស្តាប់ធម៌ បានស្គាល់ច្បាស់។ ទំព័រនេះ ប្រមូលពាក្យសំខាន់ៗ មកពន្យល់ ទាំងភាសាខ្មែរ និងអង់គ្លេស ដាក់តាមលំដាប់អក្សរ ឲ្យរកបានងាយ។', 'Pali is the original language of the Tipiṭaka. When we understand words like kamma, nibbāna and anicca in our own Khmer, listening to the Dhamma becomes clear. This page gathers the key words, explains each in Khmer and English, and arranges them alphabetically for easy lookup.') }}
    </p>

    <!-- filter -->
    <div class="card-paper p-5 md:p-6 mt-8">
      <p class="chapter-label">FILTER</p>
      <input
        v-model="q"
        class="w-full mt-3 px-4 py-2.5 text-sm rounded-sm"
        :style="{ background: 'var(--bg-card-2)', color: 'var(--ink)', border: '1px solid var(--border-strong)' }"
        :placeholder="t('ស្វែងរកពាក្យ — ឧ. សទ្ធា បញ្ញា metta', 'Type a word — e.g. saddha panna metta')" />
      <p class="text-xs mt-2" :style="{ color: 'var(--ink-muted)' }">
        {{ t('បានរកឃើញ ' + foundCount + ' ពាក្យ', foundCount + ' terms found') }}
      </p>
    </div>

    <!-- letter groups -->
    <div v-for="g in grouped" :key="g.letter" class="mt-8">
      <p class="chapter-label">{{ g.letter.toUpperCase() }}</p>
      <div class="mt-3 space-y-3">
        <article v-for="it in g.items" :key="it.pl" class="card-paper p-5">
          <div class="flex items-baseline justify-between gap-3 flex-wrap">
            <h3 class="font-display text-lg" :style="{ color: 'var(--ink)' }">
              <span class="paali">{{ it.pl }}</span>
              <span class="ml-2 text-sm" :style="{ color: 'var(--accent)' }">{{ it.km }}</span>
            </h3>
            <span class="text-xs" :style="{ color: 'var(--ink-faint)' }">{{ it.en }}</span>
          </div>
          <p class="mt-2 leading-loose text-sm" :style="{ color: 'var(--ink-soft)' }">{{ it.def }}</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()

const q = ref('')

const terms = [
  { pl: 'anicca', km: 'អនិច្ចា', en: 'impermanence', def: 'សេចក្តីមិនទៀង — អ្វីៗដែលកើត មានធម្មតា កើតហើយរលត់ទៅវិញ មិនឋិតនៅបាន ម្តងណាក៏ដោយ។ កាយ អារម្មណ៍ គំនិត សុទ្ធតែប្រែប្រួល រាល់ខណៈ។' },
  { pl: 'anattā', km: 'អនត្តា', en: 'not-self', def: 'សេចក្តីមិនមែនជាខ្លួន — ក្នុងខន្ធ ៥ គ្មានអ្វីដែលគ្រប់គ្រងបាន គ្មានអ្នកដឹងស្ថិតនៅ ដែលហៅថាខ្លួនយើងពិតប្រាកដឡើយ។' },
  { pl: 'arahant', km: 'អរហន្ត', en: 'worthy one', def: 'អ្នកបានដល់អរហត្តផល — អ្នកដែលអស់កិលេសហើយ រួចផុតពីកំណើត មិនជំពាក់អ្វី ឥតវង្វេង — សមនឹងទទួលការបូជា។' },
  { pl: 'avijjā', km: 'អវិជ្ជា', en: 'ignorance', def: 'សេចក្តីមិនដឹងច្បាស់ នូវសច្ចៈ ៤ — ដូចជាដឹងខុស ថាសុខក្នុងរបស់ ដែលពិតជាទុក្ខ — ជាឫសគល់នៃទុក្ខទាំងពួង។' },
  { pl: 'bhāvanā', km: 'ភាវនា', en: 'mental cultivation', def: 'ការចម្រើន ការបណ្តុះ — ការហ្វឹកហាត់ចិត្តឲ្យល្អ — មាន ២ បែប ៖ សមថភាវនា (ចម្រើនឲ្យស្ងប់) និង វិបស្សនាភាវនា (ចម្រើនបញ្ញា)។' },
  { pl: 'cetanā', km: 'ចេតនា', en: 'intention', def: 'សេចក្តីត្រិះរិះសម្រេច — ព្រះពុទ្ធទ្រង់សម្តែងថា ចេតនាហៅថាកម្ម ព្រោះទង្វើ សុទ្ធតែកើតអំពីចិត្តសម្រេច មុនដំបូង។' },
  { pl: 'dāna', km: 'ទាន', en: 'generosity', def: 'ការឲ្យ ការលះបង់លោភ — ជាទីមួយនៃបារមី ១០ ជាច្រកចូលនៃបុណ្យកុសល។ ការឲ្យដោយចិត្តបរិសុទ្ធ នាំសុខមកដល់ទាំងអ្នកឲ្យ ទាំងអ្នកទទួល។' },
  { pl: 'dukkha', km: 'ទុក្ខ', en: 'suffering, unsatisfactoriness', def: 'សេចក្តីទុក្ខ — មាន ៣ បែប ៖ ទុក្ខទុក្ខតា (ឈឺចាប់ខ្លួន) វិបរិណាមទុក្ខ (ប្រែប្រួល បាត់បង់) សង្ខារទុក្ខ (កើតពីការសន្សំបង្កើត មិនស្ថេរ)។ ទុក្ខ ជាអរិយសច្ចៈ ទីមួយ។' },
  { pl: 'hiri', km: 'ហិរិ', en: 'moral shame', def: 'សេចក្តីខ្មាសបាប — ខ្មាសខ្លួនឯង ក្រែងធ្វើអំពើអាក្រក់ — គូនឹង ឱត្តប្បៈ (ខ្លាចបាប ដោយគោរពអ្នកដទៃ) — លោកហៅថា ធម៌ដែលថែរក្សាលោក។' },
  { pl: 'jhāna', km: 'ឈាន', en: 'absorption', def: 'ការតាំងចិត្តជាប់ ក្នុងអារម្មណ៍តែមួយ មាន ៤ ជាន់ ៖ បឋមឈាន ទុតិយឈាន តតិយឈាន ចតុត្ថឈាន — កើតពីសមាធិដ៏ខ្ពស់ នាំចិត្តឲ្យស្ងប់បរិសុទ្ធ។' },
  { pl: 'kamma', km: 'កម្ម', en: 'action, deed', def: 'ទង្វើ — រួមកាយ វាចា ចិត្ត ដែលកើតពីចេតនា — ល្អ ឬ អាក្រក់ — សត្វកើតបានល្អ-អាក្រក់ ដោយកម្មរបស់ខ្លួន គ្មានអ្នកណាបង្គាប់។' },
  { pl: 'kilesa', km: 'កិលេស', en: 'defilements', def: 'គ្រឿងសៅម៉ា ប្រឡាក់ចិត្ត — ដូចជា លោភៈ ទោសៈ មោហៈ — ជាអ្នកបំផ្លាញបុណ្យ ដែលគប្បីលះ — កិលេស ជាហេតុ នាំឲ្យសត្វវិលវល់ក្នុងសង្សារ។' },
  { pl: 'karuṇā', km: 'ករុណា', en: 'compassion', def: 'សេចក្តីអាណិត អាល័យ ដល់សត្វដែលកំពុងទុក្ខ — ជាប្រធាននៃព្រហ្មវិហារ ៤ គឺ មេត្តា ករុណា មុទិតា ឧបេក្ខា — ផ្ទុយពីវិហិង្សា (បៀតបៀនសត្វ)។' },
  { pl: 'lobha', km: 'លោភៈ', en: 'greed', def: 'សេចក្តីត្រូវការ ចំណង់ ជាប់ប្រឡាក់ក្នុងរបស់ — ជាមូលបាប ៣ រួមជាមួយ ទោសៈ មោហៈ — ផ្ទុយពី អលោភៈ ដែលជាកុសល។' },
  { pl: 'metta', km: 'មេត្តា', en: 'loving-kindness', def: 'សេចក្តីរាប់អាន ស្រឡាញ់ ប្រណី ដល់សត្វទាំងអស់ — ផ្សាយទៅគ្រប់រូប ឥតព្រំដែន — ផ្ទុយពីព្យាបាទ និងពៀវេរ — អ្នកប្រកបមេត្តា ដេកលក់ស្កប់ ភ្ញាក់ព្រឹកត្រជាក់។' },
  { pl: 'muditā', km: 'មុទិតា', en: 'sympathetic joy', def: 'ការត្រេកអរចំពោះសម្បត្តិសុខរបស់អ្នកដទៃ — ផ្ទុយពីច្រណែនឈ្នានីស — ជាធម៌ធ្វើឲ្យចិត្តត្រជាក់ ទោះឃើញគេបានល្អក្តី។' },
  { pl: 'nibbāna', km: 'និព្វាន', en: 'extinction, the deathless', def: 'ការរលត់ទុក្ខ ការរលត់កិលេស — ចេញផុតពីសង្សារ ពីកំណើត និងមរណៈ — ជាសុខប្រសើរបំផុត ដែលព្រះពុទ្ធ ទ្រង់សរសើរ។' },
  { pl: 'paññā', km: 'បញ្ញា', en: 'wisdom, discernment', def: 'សេចក្តីដឹងច្បាស់ — ដឹងសច្ចៈ ដឹងខន្ធ៥ ដឹងកិលេសតាមការពិត — ជាសម្បត្តិ ដែលកំចាត់មោហៈ — ជាចំណេះប្រសើរបំផុត ក្នុងព្រះពុទ្ធសាសនា។' },
  { pl: 'pāramī', km: 'បារមី', en: 'perfections', def: 'គុណធម៌ ១០ សម្រាប់បំពេញ ឲ្យដល់នូវការត្រាស់ដឹង ៖ ទាន សីល នេក្ខម្ម បញ្ញា វិរិយៈ ខន្តិ សច្ចៈ អធិដ្ឋាន មេត្តា ឧបេក្ខា។' },
  { pl: 'saddhā', km: 'សទ្ធា', en: 'faith, confidence', def: 'សេចក្តីជឿ — ជឿការត្រាស់ដឹង ជឿកម្ម និងផលកម្ម — ប្រៀបដូចដៃសម្រាប់ចាប់យកគុណធម៌ — សទ្ធា ដែលសម្គាល់ដោយបញ្ញា។' },
  { pl: 'samādhi', km: 'សមាធិ', en: 'concentration', def: 'ការតាំងចិត្តឲ្យជាប់ ក្នុងអារម្មណ៍តែមួយ ឥតញាប់ញ័រ — ជាមូលដ្ឋាន នាំឲ្យកើតបញ្ញា — ក្នុងមាគ៌ាប្រតិបត្តិ ឈ្មោះថា សម្មាសមាធិ ជាអង្គទី ៨ នៃមគ្គ ៨។' },
  { pl: 'saṃsāra', km: 'សង្សារ', en: 'the round of rebirth', def: 'ការវិលវល់ កើត-ស្លាប់-កើត ទៀត ក្នុងត្រៃភព ទាំង ៣១ ភូមិ — វិលដោយកម្ម និងកិលេស — ឥតដើម ឥតចប់ — ជាទុក្ខ ដែលគួរចេញផុត ដោយនិព្វាន។' },
  { pl: 'sīla', km: 'សីល', en: 'virtue, morality', def: 'ការរក្សាកាយ វាចា ឲ្យល្អ — សីល ៥ សម្រាប់គ្រហស្ថ ជាគ្រឹះនៃសមាធិ និងបញ្ញា — អ្នកមានសីល ដេកត្រជាក់ ភ្ញាក់ត្រជាក់ គ្មានភ័យខ្លាច ក្នុងចិត្ត។' },
  { pl: 'taṇhā', km: 'តណ្ហា', en: 'craving', def: 'សេចក្តីប្រាថ្នា ចំណង់ — ចង់បានកាម ចង់កើត ចង់រលត់ — ជាហេតុ ឲ្យកើតទុក្ខ (សមុទយសច្ចៈ) — ប្រៀបដូចទឹក ដែលហូរចូលក្នុងចិត្ត ឥតឆ្អែត។' },
  { pl: 'upekkhā', km: 'ឧបេក្ខា', en: 'equanimity', def: 'សេចក្តីតាំងនៅ ដោយធម្មតា — មិនញាប់ញ័រ ដោយសុខ ឬ ទុក្ខ លាភ ឬ អលាភ — កើតពីបញ្ញា — ជាទីបំផុត នៃព្រហ្មវិហារ ៤។' },
  { pl: 'viriya', km: 'វីរិយៈ', en: 'energy, effort', def: 'សេចក្តីព្យាយាម ឧស្សាហ៍ — លះអាក្រក់ បានល្អ បំពេញកិច្ចឲ្យសម្រេច — ជាឥន្ទ្រិយ ៥ រួមនឹង សទ្ធា សតិ សមាធិ បញ្ញា។' },
]

const grouped = computed(() => {
  const s = q.value.trim().toLowerCase()
  const filtered = !s ? terms : terms.filter(i =>
    (i.pl + ' ' + i.km + ' ' + i.en).toLowerCase().includes(s))
  const map = {}
  for (const it of filtered) {
    const letter = it.pl[0].toUpperCase()
    ;(map[letter] = map[letter] || []).push(it)
  }
  return Object.keys(map).sort().map(letter => ({ letter, items: map[letter] }))
})

const foundCount = computed(() => grouped.value.reduce((n, g) => n + g.items.length, 0))
</script>