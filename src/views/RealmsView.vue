<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('ភូមិ ៣១ — ចក្រវាឡវិទ្យាពុទ្ធសាសនា', 'BHŪMI 31 — BUDDHIST COSMOLOGY') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('ស្ថានទាំង ៣១ ភព នៃសង្សារវដ្ដ', 'The Thirty-One Realms of Existence') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ក្នុងព្រះពុទ្ធសាសនា សត្វលោកទាំងឡាយដែលមិនទាន់អស់កិលេស តែងតែវិលវល់កើតស្លាប់ក្នុងភូមិទាំង ៣១ នេះ ទៅតាមកម្លាំងនៃកម្ម (កុសលកម្ម និងអកុសលកម្ម) ដែលខ្លួនបានសាង។ គ្មានអ្នកណាជាអ្នកបង្កើត ឬកំណត់វាសនាឡើយ គឺកម្មជារបស់ខ្លួន កម្មជាកេរដំណែល។ ការយល់ដឹងពីភូមិទាំង ៣១ ញ៉ាំងឱ្យកើតសេចក្តីសង្វេគ មិនធ្វេសប្រហែសក្នុងជីវិត និងឃើញតម្លៃនៃការបានកើតជាមនុស្ស។', 'In Buddhist cosmology, all unenlightened beings wander through these 31 planes of existence propelled by the force of their kamma (wholesome and unwholesome deeds). No creator determines one’s destiny — beings are owners and heirs of their deeds. Understanding the 31 realms brings spiritual urgency (saṃvega) and reveals the priceless rarity of human life.') }}
    </p>

    <!-- The Blind Turtle Simile Highlight -->
    <div class="card-paper p-6 md:p-8 mt-8" :style="{ borderColor: 'var(--accent)', background: 'var(--accent-soft)' }">
      <div class="flex items-center gap-2">
        <span class="text-xl" :style="{ color: 'var(--accent-bright)' }">🐢</span>
        <p class="chapter-label m-0">CHIGGALA SUTTA — SN 56.48</p>
      </div>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">
        {{ t('មនុស្សត្តភាវោ ទុល្លភោ — ការកើតជាមនុស្សកម្រក្រៃលែង', 'The Rare Opportunity of Human Birth') }}
      </h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រះពុទ្ធទ្រង់ប្រៀបធៀបថា៖ ឧបមាដូចជាមាននឹមនង្គ័លឈើមួយ មានប្រហោងតែមួយ អណ្តែតលើមហាសមុទ្រដ៏ធំល្វឹងល្វើយ ហើយមានសត្វអណ្តើកខ្វាក់មួយ កន្លងទៅ ១០០ ឆ្នាំ ទើបងើបក្បាលឡើងមកម្តង។ ការដែលអណ្តើកខ្វាក់នោះ ងើបក្បាលចំប្រហោងនឹមនង្គ័លដែលរសាត់អណ្តែត គឺជារឿងកម្របំផុតយ៉ាងណា ការដែលសត្វស្លាប់ទៅ ហើយបានត្រឡប់មកកើតជាមនុស្សវិញ គឺរឹតតែកម្រជាងនោះរាប់ពាន់ដង! ដូច្នេះ ពេលបានកើតជាមនុស្សហើយ គប្បីខិតខំសាងកុសល និងបដិបត្តិធម៌។', 'The Buddha gave the famous simile of the blind turtle: suppose a wooden yoke with a single hole floated upon the great ocean, swept by winds, and a blind sea turtle surfaced once every hundred years. The chance of that blind turtle putting its neck through the hole is infinitesimally small — yet returning to a human rebirth is far rarer still! Having gained human form, one must not squander it.') }}
      </p>
    </div>

    <!-- Quick Filter -->
    <div class="flex items-center gap-2 mt-8 overflow-x-auto pb-2">
      <button v-for="cat in categories" :key="cat.id"
        class="lang-pick whitespace-nowrap"
        :class="activeCategory === cat.id ? 'on' : ''"
        @click="activeCategory = cat.id">
        {{ t(cat.km, cat.en) }}
      </button>
    </div>

    <!-- 1. Four Woeful States (Apāya) -->
    <div v-if="activeCategory === 'all' || activeCategory === 'apaya'" class="mt-8 space-y-4">
      <div class="flex items-center gap-2">
        <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">១–៤</span>
        <h3 class="font-display text-2xl" :style="{ color: 'var(--ink)' }">
          {{ t('អបាយភូមិ ៤ (ភពរងទុក្ខវេទនា)', 'The 4 Woeful States (Apāya Bhūmi)') }}
        </h3>
      </div>
      <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ជាទីកន្លែងដែលកើតឡើងដោយអំណាចនៃអកុសលកម្មធ្ងន់ធ្ងរ (លោភៈ ទោសៈ មោហៈ) — គ្មានឱកាសបានសាងបុណ្យកុសលឡើយ។', 'Realms of intense suffering born of heavy unwholesome kamma — lacking opportunities for virtue.') }}
      </p>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div v-for="r in apayaRealms" :key="r.pl" class="card-paper p-5">
          <div class="flex items-baseline justify-between gap-2">
            <span class="paali">{{ r.pl }}</span>
            <span class="text-xs px-2 py-0.5 rounded-full font-bold" :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">{{ t(r.causeKm, r.causeEn) }}</span>
          </div>
          <h4 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t(r.km, r.en) }}</h4>
          <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(r.descKm, r.descEn) }}</p>
          <div class="mt-3 pt-2 text-xs" :style="{ borderTop: '1px dashed var(--border)', color: 'var(--ink-muted)' }">
            <strong>{{ t('ហេតុនៃកម្ម៖ ', 'Kamma cause: ') }}</strong>{{ t(r.kammaKm, r.kammaEn) }}
          </div>
        </div>
      </div>
    </div>

    <!-- 2. Seven Sensuous Blissful Realms (Kāmasugati) -->
    <div v-if="activeCategory === 'all' || activeCategory === 'sugati'" class="mt-12 space-y-4">
      <div class="flex items-center gap-2">
        <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">៥–១១</span>
        <h3 class="font-display text-2xl" :style="{ color: 'var(--ink)' }">
          {{ t('កាមសុគតិភូមិ ៧ (មនុស្ស ១ & ឋានសួគ៌ ៦)', 'The 7 Sensuous Blissful Realms (Kāmasugati)') }}
        </h3>
      </div>
      <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ភពដែលកើតឡើងដោយអំណាចនៃកាមាវចរកុសល គឺការធ្វើទាន រក្សាសីល និងការគោរពប្រតិបត្តិកុសលធម៌។', 'Realms of sensuous happiness attained through moral virtue (sīla), charity (dāna), and goodwill.') }}
      </p>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div v-for="r in sugatiRealms" :key="r.pl" class="card-paper p-5">
          <div class="flex items-baseline justify-between gap-2">
            <span class="paali">{{ r.pl }}</span>
            <span class="text-xs px-2 py-0.5 rounded-full font-medium" :style="{ background: 'var(--bg-card-2)', color: 'var(--accent)' }">{{ t(r.spanKm, r.spanEn) }}</span>
          </div>
          <h4 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t(r.km, r.en) }}</h4>
          <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(r.descKm, r.descEn) }}</p>
          <div class="mt-3 pt-2 text-xs" :style="{ borderTop: '1px dashed var(--border)', color: 'var(--ink-muted)' }">
            <strong>{{ t('គុណធម៌សំខាន់៖ ', 'Key virtue: ') }}</strong>{{ t(r.kammaKm, r.kammaEn) }}
          </div>
        </div>
      </div>
    </div>

    <!-- 3. Sixteen Fine-Material Realms (Rūpāvacara) -->
    <div v-if="activeCategory === 'all' || activeCategory === 'rupa'" class="mt-12 space-y-4">
      <div class="flex items-center gap-2">
        <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">១២–២៧</span>
        <h3 class="font-display text-2xl" :style="{ color: 'var(--ink)' }">
          {{ t('រូបភូមិ ១៦ (ភពនៃរូបព្រហ្ម)', 'The 16 Fine-Material Brahma Realms (Rūpa Bhūmi)') }}
        </h3>
      </div>
      <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ភពនៃព្រហ្មដែលមានរូបកាយដ៏ល្អិតល្អន់ កើតឡើងដោយអំណាចនៃការសម្រេចរូបឈាន (បឋមឈាន ដល់ ចតុត្ថឈាន) រួមទាំងសុទ្ធាវាស ៥ ជាន់សម្រាប់ព្រះអនាគាមី។', 'Fine-material realms achieved through meditative absorptions (jhānas), including the 5 Pure Abodes for Non-Returners.') }}
      </p>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div v-for="r in rupaRealms" :key="r.pl" class="card-paper p-5">
          <div class="flex items-baseline justify-between gap-2">
            <span class="paali">{{ r.pl }}</span>
            <span class="text-xs font-semibold" :style="{ color: 'var(--accent)' }">{{ t(r.jhanaKm, r.jhanaEn) }}</span>
          </div>
          <h4 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t(r.km, r.en) }}</h4>
          <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(r.descKm, r.descEn) }}</p>
        </div>
      </div>
    </div>

    <!-- 4. Four Immaterial Realms (Arūpāvacara) -->
    <div v-if="activeCategory === 'all' || activeCategory === 'arupa'" class="mt-12 space-y-4">
      <div class="flex items-center gap-2">
        <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">២៨–៣១</span>
        <h3 class="font-display text-2xl" :style="{ color: 'var(--ink)' }">
          {{ t('អរូបភូមិ ៤ (ភពនៃអរូបព្រហ្ម)', 'The 4 Immaterial Realms (Arūpa Bhūmi)') }}
        </h3>
      </div>
      <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ភពដែលគ្មានរូបកាយ មានតែចិត្តនិងចេតសិក កើតឡើងដោយអំណាចនៃការសម្រេចអរូបឈានទាំង ៤ មានអាយុកាលវែងរាប់ម៉ឺនមហាកប្ប។', 'Formless realms with mind alone (no physical matter), attained through the four immaterial absorptions.') }}
      </p>

      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div v-for="r in arupaRealms" :key="r.pl" class="card-paper p-5">
          <span class="paali">{{ r.pl }}</span>
          <h4 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t(r.km, r.en) }}</h4>
          <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(r.descKm, r.descEn) }}</p>
          <div class="mt-3 pt-2 text-xs" :style="{ borderTop: '1px dashed var(--border)', color: 'var(--ink-muted)' }">
            <strong>{{ t('អាយុកាល៖ ', 'Lifespan: ') }}</strong>{{ t(r.spanKm, r.spanEn) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeCategory = ref('all')

const categories = [
  { id: 'all', km: 'ទាំងអស់ (៣១ ភព)', en: 'All 31 Realms' },
  { id: 'apaya', km: 'អបាយភូមិ ៤', en: '4 Woeful States' },
  { id: 'sugati', km: 'កាមសុគតិ ៧', en: '7 Sensuous Blissful' },
  { id: 'rupa', km: 'រូបភូមិ ១៦', en: '16 Fine-Material' },
  { id: 'arupa', km: 'អរូបភូមិ ៤', en: '4 Formless' },
]

const apayaRealms = [
  {
    pl: 'Niraya',
    km: 'នរកភូមិ (មហានរក ៨ ជាន់)',
    en: 'Hell Realm (Niraya)',
    causeKm: 'ទោសៈ (កំហឹង ឃោរឃៅ)', causeEn: 'Hatred & Violence',
    descKm: 'ទីកន្លែងដែលសត្វត្រូវរងទុក្ខវេទនាឥតឈប់ឈរដោយភ្លើងនរក អាវុធ និងការធ្វើទណ្ឌកម្ម គ្មានការសម្រាកសូម្បីតែមួយវិនាទី។',
    descEn: 'Realms of relentless, intense torment by fire and punishments, experiencing consequences without a moment of respite.',
    kammaKm: 'ការសម្លាប់សត្វ កំហឹងបំផ្លាញ អំពើឃោរឃៅ និងអនន្តរិយកម្ម (សម្លាប់មាតាបិតា ព្រះអរហន្ត...)។',
    kammaEn: 'Killing, intense cruelty, wrath, and heinous acts (killing parents or arahants).',
  },
  {
    pl: 'Pettivisaya',
    km: 'ប្រេតភូមិ (ពួកប្រេត)',
    en: 'Ghost Realm (Peta)',
    causeKm: 'លោភៈ (កំណាញ់ ជាប់ជំពាក់)', causeEn: 'Greed & Clinging',
    descKm: 'សត្វដែលស្រេកឃ្លានជាប្រចាំ មាត់តូចដូចម្ជុល ពោះធំដូចភ្នំ មិនអាចបរិភោគបាយទឹកបាន រស់នៅរងទុក្ខរាប់រយពាន់ឆ្នាំ។',
    descEn: 'Beings suffering perpetual, agonizing hunger and thirst, often with huge bellies and needle-thin throats.',
    kammaKm: 'កំណាញ់ស្វិតស្វាញ មិនចេះធ្វើទាន លួចបន្លំទ្រព្យអ្នកដទៃ ឬទ្រព្យសង្ឃ ជាប់ជំពាក់ទ្រព្យធនមុនស្លាប់។',
    kammaEn: 'Extreme miserliness, refusing generosity, stealing public or monastic wealth, intense attachment at death.',
  },
  {
    pl: 'Asurakāya',
    km: 'អសុរកាយភូមិ (ពួកអសុរ)',
    en: 'Demon Realm (Asura)',
    causeKm: 'លោភៈ + មោហៈ (អំនួត ឆ្មើងឆ្មៃ)', causeEn: 'Arrogance & Deceit',
    descKm: 'ពួកអសុររងទុក្ខដូចជាប្រេតដែរ តែមានកម្លាំង និងមានកាយវិការកាចសាហាវ លាក់ពួនតាមជ្រលងភ្នំ និងក្រោមបាតសមុទ្រ។',
    descEn: 'Tormented beings similar to ghosts, consumed by jealousy, pride, and constant hostility.',
    kammaKm: 'ការប្រកួតប្រជែងច្រណែន អំនួតកាចសាហាវ និងការបោកប្រាស់អ្នកដទៃ។',
    kammaEn: 'Malicious jealousy, boastful aggression, and deceitful conduct.',
  },
  {
    pl: 'Tiracchānayoni',
    km: 'តិរច្ឆានភូមិ (សត្វតិរច្ឆាន)',
    en: 'Animal Realm (Tiracchāna)',
    causeKm: 'មោហៈ (ល្ងង់ខ្លៅ វង្វេង)', causeEn: 'Delusion & Instinct',
    descKm: 'សត្វតិរច្ឆានដែលរស់នៅជាមួយមនុស្សយើង ត្រូវរងទុក្ខដោយការភ័យខ្លាចការស៊ីសាច់គ្នា ការស្រេកឃ្លាន និងការជិះជាន់។',
    descEn: 'The animal kingdom visible to us, ruled by instinct, fear of predators, hunger, and enslavement.',
    kammaKm: 'ការរស់នៅដោយអវិជ្ជា មិនស្គាល់ខុសត្រូវ វង្វេងក្នុងកាមតណ្ហា និងការស៊ីដេកដូចសត្វ។',
    kammaEn: 'Ignorance, lack of moral conscience, living purely for base sensory appetite and survival.',
  },
]

const sugatiRealms = [
  {
    pl: 'Manussa Loka',
    km: 'មនុស្សភូមិ (ពិភពមនុស្ស)',
    en: 'Human Realm (Manussa)',
    spanKm: 'ប្រហែល ១០០ ឆ្នាំ', spanEn: 'Around 100 years',
    descKm: 'ជាភូមិដ៏ប្រសើរបំផុតសម្រាប់បដិបត្តិធម៌ ព្រោះមានទាំងសុខនិងទុក្ខលាយគ្នា ញ៉ាំងឱ្យកើតបញ្ញា និងជាទីដែលព្រះពុទ្ធគ្រប់ព្រះអង្គទ្រង់ត្រាស់ដឹង។',
    descEn: 'The supreme realm for practicing the Dhamma: balancing joy and suffering, awakening insight. The only realm where Buddhas arise.',
    kammaKm: 'ការរក្សាបញ្ចសីល (សីល ៥) និងកុសលកម្មបថ ១០។',
    kammaEn: 'Observing the Five Precepts and cultivating wholesome human conduct.',
  },
  {
    pl: 'Cātumahārājikā',
    km: 'ចាតុម្មហារាជិកា (ឋានសួគ៌ជាន់ទី ១)',
    en: 'Four Great Kings (Cātumahārājikā)',
    spanKm: '៥០០ ឆ្នាំទិព្វ (៩ លានឆ្នាំមនុស្ស)', spanEn: '500 celestial yrs (9M human yrs)',
    descKm: 'ស្ថានសួគ៌ដែលគ្រប់គ្រងដោយស្តេចមហារាជទាំង ៤ (ធតរដ្ឋ, វិរុឡ្ហក, វិរូបក្ខ, វេស្សវ័ណ) ការពារទិសទាំងបួន។',
    descEn: 'Heavenly realm guarded by the Four Great Guardian Kings protecting the four cardinal directions.',
    kammaKm: 'ការធ្វើទាន សីល និងការទំនុកបម្រុងការពារព្រះពុទ្ធសាសនា។',
    kammaEn: 'Generosity, keeping virtue, and supporting and protecting righteous communities.',
  },
  {
    pl: 'Tāvatiṃsa',
    km: 'តាវត្តិង្ស (ឋានសួគ៌ជាន់ទី ២ — ឋានត្រៃត្រិង្ស)',
    en: 'Realm of the Thirty-Three (Tāvatiṃsa)',
    spanKm: '១,០០០ ឆ្នាំទិព្វ (៣៦ លានឆ្នាំមនុស្ស)', spanEn: '1,000 cel. yrs (36M human yrs)',
    descKm: 'ស្ថានសួគ៌របស់សម្តេចសក្កទេវរាជ (ព្រះឥន្ទ្រ) ជាទីតាំងនៃព្រះចេតិយចូឡាមណី និងជាកន្លែងដែលព្រះពុទ្ធយាងទៅសម្តែងព្រះអភិធម្មប្រោសព្រះមាតា។',
    descEn: 'Heaven governed by Sakka, home of the Cūḷāmaṇī Cetiya, where the Buddha preached Abhidhamma to his mother.',
    kammaKm: 'វត្តបទ ៧ ប្រការ (ចិញ្ចឹមមាតាបិតា, គោរពចាស់ព្រឹទ្ធាចារ្យ, ពោលពាក្យផ្អែមល្ហែម, មិនច្រណែន, មិនខឹង...)។',
    kammaEn: 'The seven vows of Sakka: filial duty to parents, respect for elders, gentle speech, generosity, truthfulness.',
  },
  {
    pl: 'Yāmā',
    km: 'យាមា (ឋានសួគ៌ជាន់ទី ៣)',
    en: 'The Yāmā Devas',
    spanKm: '២,០០០ ឆ្នាំទិព្វ (១៤៤ លានឆ្នាំមនុស្ស)', spanEn: '2,000 cel. yrs (144M human yrs)',
    descKm: 'ស្ថានសួគ៌ដែលផុតចាកទុក្ខកង្វល់ទាំងពួង មានតែសេចក្តីស្ងប់ស្ងាត់និងទិព្វសុខ មិនមានសង្រ្គាមរវាងទេវតានិងអសុរឡើយ។',
    descEn: 'Realm of peaceful divine delight, free from strife and distress, dwelling in effortless happiness.',
    kammaKm: 'ការរក្សាសីលយ៉ាងរឹងមាំ និងការចម្រើនសមាធិបឋម។',
    kammaEn: 'Steadfast moral purity and developing gentle concentration.',
  },
  {
    pl: 'Tusita',
    km: 'តុសិត (ឋានសួគ៌ជាន់ទី ៤)',
    en: 'The Contented Realm (Tusita)',
    spanKm: '៤,០០០ ឆ្នាំទិព្វ (៥៧៦ លានឆ្នាំមនុស្ស)', spanEn: '4,000 cel. yrs (576M human yrs)',
    descKm: 'ភពនៃសេចក្តីរីករាយនិងសន្តោស ជាទីគង់នៅនៃព្រះពោធិសត្វគ្រប់ព្រះអង្គមុននឹងចុះមកប្រសូតក្នុងលោកមនុស្ស (បច្ចុប្បន្នជាទីគង់នៃព្រះសិអារ្យមេត្រី)។',
    descEn: 'The realm of joyful contentment, where Bodhisattas dwell before their final human birth (home of Metteyya Bodhisatta).',
    kammaKm: 'ការបណ្តុះបារមី ១០ ប្រការ និងការពេញចិត្តក្នុងព្រះធម៌។',
    kammaEn: 'Fulfilling the perfections (pāramī) and joy in Dhamma study and practice.',
  },
  {
    pl: 'Nimmānaratī',
    km: 'និម្មានរតី (ឋានសួគ៌ជាន់ទី ៥)',
    en: 'Delighting in Creation (Nimmānaratī)',
    spanKm: '៨,០០០ ឆ្នាំទិព្វ (២,៣០៤ លានឆ្នាំមនុស្ស)', spanEn: '8,000 cel. yrs (2,304M human yrs)',
    descKm: 'ទេវតាដែលត្រេកអរក្នុងការបង្កើតគ្រឿងកាមគុណទិព្វដោយខ្លួនឯងតាមបំណងប្រាថ្នាភ្លាមៗ។',
    descEn: 'Devas who rejoice in creating their own sensory delights at will through mental power.',
    kammaKm: 'កុសលកម្មដ៏ខ្ពង់ខ្ពស់ បរិបូណ៌ដោយទាន និងសីលបរិសុទ្ធ។',
    kammaEn: 'Exceptional wholesome deeds with pure intentions and generous mastery.',
  },
  {
    pl: 'Paranimmitavasavattī',
    km: 'បរនិម្មិតវសវត្តី (ឋានសួគ៌ជាន់ទី ៦ — កំពូលកាមភូមិ)',
    en: 'Wielding Power over Others\' Creations',
    spanKm: '១៦,០០០ ឆ្នាំទិព្វ (៩,២១៦ លានឆ្នាំមនុស្ស)', spanEn: '16,000 cel. yrs (9,216M human yrs)',
    descKm: 'កំពូលនៃឋានសួគ៌កាមភូមិ ជាកន្លែងដែលទេវតាដទៃបង្កើតនូវគ្រឿងទិព្វថ្វាយដើម្បីសោយសុខ។',
    descEn: 'The highest sensuous heaven, enjoying supreme divine pleasures manifested by others.',
    kammaKm: 'ការបំពេញកុសលជាមេដឹកនាំ និងការបរិច្ចាគមហាទាន។',
    kammaEn: 'Noble leadership in virtue, tremendous moral strength and vast generosity.',
  },
]

const rupaRealms = [
  { pl: 'Brahmapārisajjā', km: 'ព្រហ្មបរិសជ្ជា (បរិស័ទព្រហ្ម)', en: 'Retinue of Brahma', jhanaKm: 'បឋមឈាន (កម្រិតទន់)', jhanaEn: '1st Jhāna (minor)', descKm: 'កើតដោយអំណាចបឋមឈានកម្រិតស្រាល ជាបរិវារបស់មហាព្រហ្ម។', descEn: 'Attained through the first jhāna cultivated to a minor degree.' },
  { pl: 'Brahmapurohitā', km: 'ព្រហ្មបុរោហិតា (ទីប្រឹក្សាព្រហ្ម)', en: 'Ministers of Brahma', jhanaKm: 'បឋមឈាន (កម្រិតមធ្យម)', jhanaEn: '1st Jhāna (medium)', descKm: 'កើតដោយបឋមឈានកម្រិតមធ្យម ជាអ្នកបំពេញកិច្ចដូចជាទីប្រឹក្សារបស់មហាព្រហ្ម។', descEn: 'Attained through the first jhāna cultivated to a medium degree.' },
  { pl: 'Mahābrahmā', km: 'មហាព្រហ្ម', en: 'Great Brahmas', jhanaKm: 'បឋមឈាន (កម្រិតឧត្តម)', jhanaEn: '1st Jhāna (superior)', descKm: 'កើតដោយបឋមឈានដ៏ស្ទាត់ជំនាញ មានរស្មីភ្លឺថ្លា និងអាយុកាលវែង។', descEn: 'Attained through the fully perfected first jhāna.' },
  { pl: 'Ābhassarā', km: 'អាភស្សរា (ព្រហ្មមានរស្មីរន្ទាល)', en: 'Radiant Brahmas (Ābhassarā)', jhanaKm: 'ទុតិយឈាន', jhanaEn: '2nd Jhāna', descKm: 'ព្រហ្មដែលមានពន្លឺរស្មីភ្លឺត្រចះត្រចង់ចេញពីរាងកាយ សោយបីតិជាអាហារ។', descEn: 'Brahmas of sparkling radiance who feed on spiritual rapture (pīti).' },
  { pl: 'Subhakiṇhā', km: 'សុភកិណ្ហា (ព្រហ្មមានសិរីរស្មីស្ងប់)', en: 'Steady Glory (Subhakiṇhā)', jhanaKm: 'តតិយឈាន', jhanaEn: '3rd Jhāna', descKm: 'ព្រហ្មដែលសោយសុខដ៏ស្ងប់ស្ងៀមចាកបីតិ បរិបូណ៌ដោយសុខវេទនាដ៏ប្រណីត។', descEn: 'Brahmas experiencing undisturbed, serene happiness free of excitement.' },
  { pl: 'Vehapphala', km: 'វេហប្ផលា (ព្រហ្មមានផលធំទូលាយ)', en: 'Great Fruit (Vehapphala)', jhanaKm: 'ចតុត្ថឈាន', jhanaEn: '4th Jhāna', descKm: 'កើតដោយចតុត្ថឈានដ៏បរិសុទ្ធ មានចិត្តប្រកបដោយឧបេក្ខាដ៏រឹងមាំ។', descEn: 'Attained by ordinary beings who master the fourth jhāna.' },
  { pl: 'Suddhāvāsa (៥ ជាន់)', km: 'សុទ្ធាវាសព្រហ្ម ៥ ជាន់ (អវិហា អតប្បា សុទស្សា សុទស្សី អកនិដ្ឋា)', en: 'The 5 Pure Abodes (Suddhāvāsa)', jhanaKm: 'ចតុត្ថឈាន + អនាគាមិផល', jhanaEn: '4th Jhāna + Anāgāmī', descKm: 'ភពពិសេសសម្រាប់តែព្រះអនាគាមីបុគ្គលប៉ុណ្ណោះ ពួកលោកនឹងសម្រេចអរហត្តផល និងបរិនិព្វាននៅទីនោះ ដោយមិនវិលត្រឡប់មកវិញឡើយ។', descEn: 'Reserved exclusively for Non-Returners (Anāgāmīs) who will realize Arahantship and Parinibbāna there.' },
]

const arupaRealms = [
  { pl: 'Ākāsānañcāyatana', km: 'អាកាសានញ្ចាយតនភូមិ', en: 'Infinite Space', spanKm: '២០,០០០ មហាកប្ប', spanEn: '20,000 Mahākappas', descKm: 'ភពដែលតម្កល់ចិត្តលើអាកាសមិនមានទីបំផុត គ្មានរូបកាយសូម្បីតែបន្តិច។', descEn: 'Attained through dwelling on infinite space; entirely free of physical matter.' },
  { pl: 'Viññāṇañcāyatana', km: 'វិញ្ញាណញ្ចាយតនភូមិ', en: 'Infinite Consciousness', spanKm: '៤០,០០០ មហាកប្ប', spanEn: '40,000 Mahākappas', descKm: 'ភពដែលតម្កល់ចិត្តលើវិញ្ញាណមិនមានទីបំផុត។', descEn: 'Attained through meditation taking boundless consciousness as object.' },
  { pl: 'Ākiñcaññāyatana', km: 'អាកិញ្ចញ្ញាយតនភូមិ', en: 'Nothingness', spanKm: '៦០,០០០ មហាកប្ប', spanEn: '60,000 Mahākappas', descKm: 'ភពដែលតម្កល់ចិត្តលើភាពមិនមានអ្វីសូម្បីបន្តិច (នត្ថិ កិញ្ចិ)។', descEn: 'Attained through meditation on the absence of anything ("there is nothing").' },
  { pl: 'Nevasaññānāsaññāyatana', km: 'នេវសញ្ញានាសញ្ញាយតនភូមិ (ភពកំពូលនៃត្រៃភព)', en: 'Neither Perception Nor Non-Perception', spanKm: '៨៤,០០០ មហាកប្ប', spanEn: '84,000 Mahākappas', descKm: 'កំពូលភពខ្ពស់បំផុតក្នុងលោកទាំងមូល សញ្ញាមានសភាពល្អិតល្អន់រហូតដល់ថាមិនមែនមាន ក៏មិនមែនឥត។', descEn: 'The highest summit of samsāra; perception is so subtle it can neither be said to exist nor not exist.' },
]
</script>
