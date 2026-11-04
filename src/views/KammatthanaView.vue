<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៥៤ — កម្មដ្ឋាន ៤០ & ចរិត ៦', 'GATHA 54 — 40 MEDITATION SUBJECTS & 6 TEMPERAMENTS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('កម្មដ្ឋាន ៤០ & ក្បួនជ្រើសរើសធម៌តាមចរិតទាំង ៦', 'The 40 Kammaṭṭhāna & Matching the 6 Temperaments') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('នៅក្នុងគម្ពីរវិសុទ្ធិមគ្គ (Visuddhimagga) ព្រះពុទ្ធសាសនាបានចងក្រង «កម្មដ្ឋាន ៤០ ប្រការ» ដែលជាអារម្មណ៍សម្រាប់ហ្វឹកហាត់ចិត្តឱ្យស្ងប់ស្ងាត់ (សមថកម្មដ្ឋាន) និងឈានទៅកាន់វិបស្សនា។ មូលហេតុដែលកម្មដ្ឋានមានរហូតដល់ ៤០ ប្រការ ពីព្រោះមនុស្សម្នាក់ៗមាន «ចរិត ៦ យ៉ាង» ខុសៗគ្នា។ ប្រៀបដូចជាគ្រូពេទ្យដ៏ចំណានដែលត្រូវផ្តល់ថ្នាំឱ្យត្រូវនឹងជំងឺ ព្រះសម្មាសម្ពុទ្ធទ្រង់ប្រទានកម្មដ្ឋានខុសៗគ្នាទៅតាមចរិត ដើម្បីឱ្យចិត្តឆាប់ស្ងប់ និងសម្រេចឈាន។', 'In the Visuddhimagga, Theravada Buddhism codified the 40 Kammaṭṭhānas (Meditation Subjects) for cultivating mental tranquility (Samatha) leading to insight. The canon enumerates forty distinct objects because human beings possess Six Classical Temperaments (Carita). Just as an expert physician prescribes tailored remedies for specific ailments, the Buddha prescribed specific meditation objects tailored to each personality type to swiftly still the restless mind and attain Jhāna.') }}
    </p>

    <!-- Main Navigation Tabs -->
    <div class="flex items-center gap-2 mt-8 flex-wrap">
      <button
        type="button"
        @click="activeTab = 'carita'"
        class="h-10 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center gap-2"
        :style="activeTab === 'carita'
          ? { background: 'var(--accent)', color: 'var(--accent-ink, #ffffff)', borderColor: 'var(--accent)' }
          : { background: 'var(--bg-card)', color: 'var(--ink-muted)', borderColor: 'var(--border)' }"
      >
        <span>🎯</span>
        <span>{{ t('ក្បួនរើសធម៌តាម «ចរិតទាំង ៦»', 'The 6 Temperaments') }}</span>
      </button>

      <button
        type="button"
        @click="activeTab = 'forty'"
        class="h-10 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center gap-2"
        :style="activeTab === 'forty'
          ? { background: 'var(--accent)', color: 'var(--accent-ink, #ffffff)', borderColor: 'var(--accent)' }
          : { background: 'var(--bg-card)', color: 'var(--ink-muted)', borderColor: 'var(--border)' }"
      >
        <span>🧘</span>
        <span>{{ t('បញ្ជីកម្មដ្ឋានទាំង ៤០ ប្រការ', 'The 40 Subjects List') }}</span>
      </button>
    </div>

    <!-- TAB 1: MATCHING THE 6 TEMPERAMENTS (CARITA) -->
    <div v-if="activeTab === 'carita'" class="mt-6 space-y-4">
      <div class="p-4 rounded-xl border bg-amber-500/5 border-amber-500/20 text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        💡 <strong>{{ t('គោលការណ៍គ្រឹះ ៖ ', 'Core Principle : ') }}</strong>
        {{ t('បើយើងយកកម្មដ្ឋានខុសពីចរិតមកបដិបត្តិ ចិត្តនឹងមិនងាយស្ងប់ឡើយ (ដូចជាមនុស្សឆាប់ខឹង បែរជាទៅអង្គុយសម្លឹងខ្មោចអសុភ នាំឱ្យរឹតតែភ័យនិងខឹង)។ ដូច្នេះ ត្រូវដឹងពីចរិតរបស់ខ្លួនឯងជាមុន ៖', 'Practicing an object unsuitable for one’s temperament yields frustration. Identify your dominant tendency below to adopt the correct antidote:') }}
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div
          v-for="c in caritaList"
          :key="c.id"
          class="card-paper p-5 sm:p-6 rounded-xl border border-l-4 transition-all"
          :style="{ borderLeftColor: c.color }"
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <span class="text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white" :style="{ background: c.color }">
                {{ c.pali }}
              </span>
              <h3 class="font-display text-lg sm:text-xl font-bold mt-2" :style="{ color: 'var(--ink)' }">
                {{ t(c.km, c.en) }}
              </h3>
            </div>
            <span class="text-3xl shrink-0">{{ c.icon }}</span>
          </div>

          <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(c.characteristicsKm, c.characteristicsEn) }}
          </p>

          <!-- Recommended Meditation -->
          <div class="mt-3.5 p-3 rounded-xl border bg-[var(--bg-card-2)] border-[var(--border)]">
            <p class="text-xs font-bold text-amber-500 flex items-center gap-1.5">
              <span>💊</span>
              <span>{{ t('កម្មដ្ឋានឱសថដែលត្រូវបដិបត្តិ ៖', 'Prescribed Meditation Antidotes :') }}</span>
            </p>
            <p class="text-xs mt-1.5 font-bold" :style="{ color: 'var(--ink)' }">
              {{ t(c.antidoteKm, c.antidoteEn) }}
            </p>
            <p class="text-[11px] mt-1 text-stone-500 leading-relaxed">
              {{ t(c.reasonKm, c.reasonEn) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 2: THE COMPLETE 40 KAMMATTHANA BREAKDOWN -->
    <div v-else class="mt-6 space-y-4">
      <div
        v-for="grp in fortyGroups"
        :key="grp.titleKm"
        class="card-paper p-5 sm:p-6 rounded-xl border"
      >
        <div class="flex items-center justify-between flex-wrap gap-2 pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="text-2xl">{{ grp.icon }}</span>
            <h3 class="font-display text-base sm:text-lg font-bold" :style="{ color: 'var(--ink)' }">
              {{ t(grp.titleKm, grp.titleEn) }}
            </h3>
          </div>
          <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400">
            {{ grp.count }} កម្មដ្ឋាន
          </span>
        </div>

        <p class="text-xs sm:text-sm mt-2.5 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(grp.descKm, grp.descEn) }}
        </p>

        <!-- Items Badges -->
        <div class="flex flex-wrap gap-2 mt-3.5">
          <span
            v-for="item in grp.items"
            :key="item.pali"
            class="text-xs px-2.5 py-1 rounded-lg border font-medium"
            :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)', color: 'var(--ink)' }"
          >
            {{ t(item.km, item.en) }} <span class="text-[10px] opacity-60 font-mono">({{ item.pali }})</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeTab = ref('carita')

const caritaList = [
  {
    id: 'raga',
    color: '#ec4899',
    icon: '🌸',
    pali: 'Rāga-carita',
    km: '១. រាគចរិត (មនុស្សជាប់ជំពាក់សម្រស់ & សេចក្តីស្រណុក)',
    en: '1. Lustful / Greedy Temperament (Rāga-carita)',
    characteristicsKm: 'មនុស្សដែលស្រឡាញ់ភាពស្អាត ចូលចិត្តរបស់ល្អៗ សម្រស់ស្រស់ស្អាត អាហារឆ្ងាញ់ ពាក្យពិរោះ និងជាប់ជំពាក់ក្នុងកាមគុណ។',
    characteristicsEn: 'Obsessed with aesthetic perfection, sensory beauty, luxurious comforts, fragrant objects, and physical attraction.',
    antidoteKm: 'អសុភ ១០ (ការពិចារណាសាកសព) & កាយគតាសតិ (អាការៈ ៣២)',
    antidoteEn: '10 Asubha (Cemetary contemplations) & 32 Body Parts',
    reasonKm: 'ដើម្បីទម្លាយការវង្វេងថា រូបរាងកាយស្អាត ឱ្យឃើញសភាពពិតថាសុទ្ធតែជារបស់មិនស្អាត ស្អុយរលួយ។',
    reasonEn: 'Shatters the illusion of bodily glamour by exposing organic decay, repulsive fluids, and impermanence.'
  },
  {
    id: 'dosa',
    color: '#ef4444',
    icon: '🔥',
    pali: 'Dosa-carita',
    km: '២. ទោសចរិត (មនុស្សឆាប់ខឹង & មួម៉ៅ)',
    en: '2. Hateful / Angry Temperament (Dosa-carita)',
    characteristicsKm: 'មនុស្សដែលឆាប់មួម៉ៅ ក្តៅក្រហាយ រកកំហុសអ្នកដទៃ ចិត្តឆេវឆាវ និងឆាប់អន់ចិត្ត។',
    characteristicsEn: 'Prone to irritation, hot temper, fault-finding, impatience, grudges, and impulsive hostility.',
    antidoteKm: 'ព្រហ្មវិហារ ៤ (មេត្តា ករុណា មុទិតា ឧបេក្ខា) & កសិណពណ៌ ៤ (ខៀវ លឿង ក្រហម ស)',
    antidoteEn: '4 Brahmavihāra (Metta, Karuna, Mudita, Upekkha) & 4 Color Kasiṇas',
    reasonKm: 'មេត្តាធម៌ជាទឹកត្រជាក់រំលត់ភ្លើងកំហុស រីឯកសិណពណ៌ជួយឱ្យចិត្តទន់ភ្លន់ស្ងប់ស្អាត។',
    reasonEn: 'Loving-kindness extinguishes the burning fire of aversion; soothing color discs calm agitated optic nerves.'
  },
  {
    id: 'moha',
    color: '#6b7280',
    icon: '🌫️',
    pali: 'Moha-carita',
    km: '៣. មោហចរិត (មនុស្សល្ងង់ខ្លៅ ងងឹតងងុល & វង្វេង)',
    en: '3. Deluded / Confused Temperament (Moha-carita)',
    characteristicsKm: 'មនុស្សដែលងងុយដេកច្រើន គិតអ្វីមិនសូវយល់ គ្មានគោលដៅ ងាយភាន់ច្រឡំ និងសង្ស័យច្រើន។',
    characteristicsEn: 'Sluggish, mentally clouded, dull, lethargic, prone to confusion, sleepiness, and chronic hesitation.',
    antidoteKm: 'អានាបានសតិ (ដង្ហើមចេញចូល) & ការសាកសួររៀនសូត្រធម៌',
    antidoteEn: 'Ānāpānasati (Mindfulness of Breathing) & Dhamma study',
    reasonKm: 'ចលនាដង្ហើមចេញចូលជាក់ស្តែង ជួយដាស់ចិត្តដែលងងុយឱ្យមានសតិរលាស់ឡើងវិញ។',
    reasonEn: 'The concrete rhythm of breath provides an unmistakable tactile focus that cuts through mental fog.'
  },
  {
    id: 'vitakka',
    color: '#8b5cf6',
    icon: '🌪️',
    pali: 'Vitakka-carita',
    km: '៤. វិតក្កចរិត (មនុស្សគិតច្រើន រវើរវាយ & ស្ត្រេស)',
    en: '4. Speculative / Overthinking Temperament (Vitakka-carita)',
    characteristicsKm: 'មនុស្សដែលចូលចិត្តគិតរឿងនេះរឿងនោះមិនឈប់ គិតរឿងអនាគត ភ័យព្រួយ និងមិនអាចផ្តោតអារម្មណ៍បាន។',
    characteristicsEn: 'Hyperactive inner monologue, incessant daydreaming, anxiety, scattered focus, and speculative analysis.',
    antidoteKm: 'អានាបានសតិ (ដង្ហើមចេញចូល) & កសិណដី (បឋវីកសិណ)',
    antidoteEn: 'Ānāpānasati (Breath Counting) & Earth Kasiṇa',
    reasonKm: 'ការរាប់ដង្ហើម និងការតម្កល់ចិត្តលើដី ជួយទាញចិត្តដែលរវើរវាយឱ្យនៅនឹងមួយកន្លែង។',
    reasonEn: 'Breath counting anchors runaway thoughts; the solid earth element provides unyielding ground.'
  },
  {
    id: 'saddha',
    color: '#3b82f6',
    icon: '💎',
    pali: 'Saddhā-carita',
    km: '៥. សទ្ធាចរិត (មនុស្សមានជំនឿ & ជ្រះថ្លាខ្ពស់)',
    en: '5. Devout / Faithful Temperament (Saddhā-carita)',
    characteristicsKm: 'មនុស្សដែលចូលចិត្តធ្វើបុណ្យ គោរពបូជា មានចិត្តទន់ភ្លន់ ជ្រះថ្លាងាយ ប៉ុន្តើងាយចាញ់បោកគេបើខ្វះបញ្ញា។',
    characteristicsEn: 'Naturally pious, generous, devotional, warmhearted, but easily swayed if unchecked by discernment.',
    antidoteKm: 'អនុស្សតិ ៦ ខាងដើម (ពុទ្ធានុស្សតិ, ធម្មានុស្សតិ, សង្ឃានុស្សតិ, សីល, ចាគ, ទេវតា)',
    antidoteEn: 'First 6 Recollections (Buddha, Dhamma, Sangha, Sīla, Cāga, Devatā)',
    reasonKm: 'ការរឭកដល់គុណព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ ជួយបំប៉នសទ្ធាឱ្យរឹងមាំលើមាគ៌ាត្រឹមត្រូវ។',
    reasonEn: 'Anchors natural devotion to the sublime qualities of the Triple Gem rather than external superstition.'
  },
  {
    id: 'buddhi',
    color: '#10b981',
    icon: '💡',
    pali: 'Buddhi-carita',
    km: '៦. ពុទ្ធិចរិត (មនុស្សឆ្លាត ចូលចិត្តវិភាគ & សច្ចភាព)',
    en: '6. Intellectual / Discerning Temperament (Buddhi-carita)',
    characteristicsKm: 'មនុស្សដែលចូលចិត្តស្វែងរកហេតុផល មិនងាយជឿអ្នកណា មានប្រាជ្ញាវាងវៃ និងចូលចិត្តការស្រាវជ្រាវ។',
    characteristicsEn: 'Intellectually keen, skeptical of blind belief, inquiring into causation, analyzing reality.',
    antidoteKm: 'មរណានុស្សតិ (សេចក្តីស្លាប់), ឧបសមានុស្សតិ (ព្រះនិព្វាន), ចតុធាតុវវត្ថាន (ធាតុ ៤)',
    antidoteEn: 'Maraṇānussati (Death), Upasamānussati (Nibbāna), 4 Elements Analysis',
    reasonKm: 'កម្មដ្ឋានជ្រៅៗទាំងនេះ ឆ្លើយតបនឹងកម្រិតប្រាជ្ញារបស់គេ ជួយឱ្យយល់សច្ចធម៌លឿនបំផុត។',
    reasonEn: 'Deep philosophical objects engage keen analytical minds, driving them directly into insight.'
  }
]

const fortyGroups = [
  {
    icon: '⚪',
    titleKm: 'កសិណ ១០ (Kasiṇa 10)',
    titleEn: '10 Kasiṇas (Meditation Discs)',
    count: '១០',
    descKm: 'ការសម្លឹងផ្ទាំងរង្វង់ជាអារម្មណ៍ ដើម្បីបង្កើតនិមិត្ត (ឧគ្គហនិមិត្ត & បដិភាគនិមិត្ត) ឈានទៅកាន់រូបឈាន ៤។',
    descEn: 'Visual meditation objects used to cultivate concentration culminating in the 4 Fine-Material Jhānas.',
    items: [
      { km: 'កសិណដី', en: 'Earth', pali: 'Paṭhavī' },
      { km: 'កសិណទឹក', en: 'Water', pali: 'Āpo' },
      { km: 'កសិណភ្លើង', en: 'Fire', pali: 'Tejo' },
      { km: 'កសិណខ្យល់', en: 'Air', pali: 'Vāyo' },
      { km: 'កសិណពណ៌ខៀវ', en: 'Blue', pali: 'Nīla' },
      { km: 'កសិណពណ៌លឿង', en: 'Yellow', pali: 'Pīta' },
      { km: 'កសិណពណ៌ក្រហម', en: 'Red', pali: 'Lohita' },
      { km: 'កសិណពណ៌ស', en: 'White', pali: 'Odāta' },
      { km: 'កសិណពន្លឺ', en: 'Light', pali: 'Āloka' },
      { km: 'កសិណអាកាសទទេ', en: 'Space', pali: 'Ākāsa' }
    ]
  },
  {
    icon: '💀',
    titleKm: 'អសុភ ១០ (Asubha 10)',
    titleEn: '10 Asubha (Stages of Corpse Decay)',
    count: '១០',
    descKm: 'ការពិចារណាសាកសពក្នុងដំណាក់កាលរលួយផ្សេងៗ ដើម្បីកម្ចាត់តណ្ហារាគៈ និងការជាប់ជំពាក់លើសម្រស់។',
    descEn: 'Stages of decomposition purifying the mind of lust, vain attachment to physical form.',
    items: [
      { km: 'សាកសពហើមប៉ោង', en: 'Swollen', pali: 'Uddhumātaka' },
      { km: 'សាកសពឡើងខៀវជាំ', en: 'Discolored', pali: 'Vinīlaka' },
      { km: 'សាកសពមានខ្ទុះហូរ', en: 'Festering', pali: 'Vipubbaka' },
      { km: 'សាកសពដាច់កណ្តាល', en: 'Fissured', pali: 'Vicchiddaka' },
      { km: 'សាកសពត្រូវសត្វខាំស៊ី', en: 'Gnawed', pali: 'Vikkhāyitaka' },
      { km: 'សាកសពរាត់រាយ', en: 'Scattered', pali: 'Vikkhittaka' },
      { km: 'សាកសពត្រូវគេកាប់ជាកង់', en: 'Hacked', pali: 'Hatavikkhittaka' },
      { km: 'សាកសពប្រឡាក់ឈាម', en: 'Bleeding', pali: 'Lohitaka' },
      { km: 'សាកសពដង្កូវជញ្ជុំ', en: 'Worm-infested', pali: 'Puḷuvaka' },
      { km: 'ឆ្អឹងសាកសព', en: 'Skeleton', pali: 'Aṭṭhika' }
    ]
  },
  {
    icon: '📿',
    titleKm: 'អនុស្សតិ ១០ (Anussati 10)',
    titleEn: '10 Recollections',
    count: '១០',
    descKm: 'ការរឭកដល់គុណព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ សីល បរិច្ចាគ ទេវតា សេចក្តីស្លាប់ កាយ ដង្ហើម និងព្រះនិព្វាន។',
    descEn: 'Continuous inspiring recollections strengthening faith, tranquil contemplation, and mindfulness.',
    items: [
      { km: 'ពុទ្ធានុស្សតិ', en: 'Buddha', pali: 'Buddhānussati' },
      { km: 'ធម្មានុស្សតិ', en: 'Dhamma', pali: 'Dhammānussati' },
      { km: 'សង្ឃានុស្សតិ', en: 'Sangha', pali: 'Saṅghānussati' },
      { km: 'សីលានុស្សតិ', en: 'Virtue', pali: 'Sīlānussati' },
      { km: 'ចាគានុស្សតិ', en: 'Generosity', pali: 'Cāgānussati' },
      { km: 'ទេវតានុស្សតិ', en: 'Deities', pali: 'Devatānussati' },
      { km: 'មរណានុស្សតិ', en: 'Death', pali: 'Maraṇānussati' },
      { km: 'កាយគតាសតិ', en: 'Body', pali: 'Kāyagatāsati' },
      { km: 'អានាបានសតិ', en: 'Breathing', pali: 'Ānāpānasati' },
      { km: 'ឧបសមានុស្សតិ', en: 'Peace (Nibbāna)', pali: 'Upasamānussati' }
    ]
  },
  {
    icon: '🕊️',
    titleKm: 'ព្រហ្មវិហារ ៤ & អារុប្ប ៤',
    titleEn: '4 Divine Abodes & 4 Immaterial Spheres',
    count: '៨',
    descKm: 'ការផ្សាយចិត្តគ្មានព្រំដែនទៅកាន់សត្វលោកទាំងពួង និងការតម្កល់ចិត្តក្នុងអរូបឈានដ៏ជ្រាលជ្រៅ។',
    descEn: 'Boundless universal virtues and formless absorptions transcending physical perception.',
    items: [
      { km: 'មេត្តា', en: 'Loving-kindness', pali: 'Mettā' },
      { km: 'ករុណា', en: 'Compassion', pali: 'Karuṇā' },
      { km: 'មុទិតា', en: 'Altruistic Joy', pali: 'Muditā' },
      { km: 'ឧបេក្ខា', en: 'Equanimity', pali: 'Upekkhā' },
      { km: 'អាកាសានញ្ចាយតនៈ', en: 'Infinite Space', pali: 'Ākāsānañcāyatana' },
      { km: 'វិញ្ញាណញ្ចាយតនៈ', en: 'Infinite Consciousness', pali: 'Viññāṇañcāyatana' },
      { km: 'អាកិញ្ចញ្ញាយតនៈ', en: 'Nothingness', pali: 'Ākiñcaññāyatana' },
      { km: 'នេវសញ្ញានាសញ្ញាយតនៈ', en: 'Neither Perception Nor Non-Perception', pali: 'Nevasaññānāsaññāyatana' }
    ]
  },
  {
    icon: '🥣',
    titleKm: 'អាហារេបដិកូលសញ្ញា & ចតុធាតុវវត្ថាន',
    titleEn: 'Repulsiveness of Food & 4 Elements Analysis',
    count: '២',
    descKm: 'ការពិចារណាលើអាហារ និងការញែកវិភាគធាតុទាំង ៤ ក្នុងរាងកាយ (ដី ទឹក ភ្លើង ខ្យល់) មិនឱ្យវង្វេងក្នុងអត្តា។',
    descEn: 'Contemplation on the biological nature of food and resolution of the body into the 4 physical elements.',
    items: [
      { km: 'អាហារេបដិកូលសញ្ញា (ពិចារណាអាហារ)', en: 'Repulsiveness of Food', pali: 'Āhārepaṭikūlasaññā' },
      { km: 'ចតុធាតុវវត្ថាន (វិភាគធាតុទាំង ៤)', en: '4 Physical Elements Analysis', pali: 'Catudhātuvavatthāna' }
    ]
  }
]
</script>
