<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៨៩ — អនុសយធម៌ ៧', 'GATHA 89 — 7 LATENT TENDENCIES (ANUSAYA)') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('អនុសយធម៌ ៧ ៖ កិលេសដេកសម្ងំក្នុងជម្រៅចិត្ត & ការកម្ចាត់ឫសគល់', 'The 7 Latent Defilements (Anusaya) & Their Root Eradication') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('អនុសយធម៌ សំដៅលើកិលេសដ៏ល្អិតសុខុមបំផុតដែលដេកសម្ងំយ៉ាងស្ងៀមស្ងាត់ក្នុងជម្រៅនៃសន្តានចិត្ត (ភវង្គចិត្ត) រង់ចាំតែពេលមានអារម្មណ៍ខាងក្រៅមកប៉ះទង្គិច វានឹងរើឡើងភ្លាមៗ។ កិលេសក្នុងព្រះពុទ្ធសាសនាមាន ៣ កម្រិត ៖ កម្រិតកម្រើកឡើងតាមកាយវាចា (វីតិក្កមកិលេស គ្រប់គ្រងដោយសីល), កម្រិតអណ្តែតក្នុងគំនិត (បរិយុដ្ឋាកិលេស គ្រប់គ្រងដោយសមាធិ), និងកម្រិតដេកសម្ងំក្នុងជម្រៅចិត្ត (អនុសយកិលេស) ដែលសីលនិងសមាធិមិនអាចកម្ចាត់បានឡើយ គឺទាល់តែចម្រើនបញ្ញាវិបស្សនាញាណរហូតសម្រេចលោកុត្តរមគ្គ ទើបអាចគាស់រំលើងឫសគល់បានទាំងស្រុង។', 'Anusaya denotes the subtle, latent defilements slumbering within the deepest continuum of the mind (Bhavaṅga), ready to ignite whenever provoked by sensory stimuli. Defilements operate on three tiers: gross physical/verbal transgression (Vītikkama, restrained by Sīla), mental obsessions in active thought (Pariyuṭṭhāna, pacified by Samādhi), and latent subterranean tendencies (Anusaya). Neither moral restraint nor tranquil concentration alone can eliminate anusayas; only the transcendent wisdom of the Noble Supramundane Paths can excavate and uproot them forever.') }}
    </p>

    <!-- Pali Gatha Box from Anusaya Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«សត្តយិមេ ភិក្ខវេ អនុសយា។ កតមេ សត្ត? កាមរាគានុសយោ, បដិឃានុសយោ, ទិដ្ឋិយានុសយោ, វិចិកិច្ឆានុសយោ, មានានុសយោ, ភវរាគានុសយោ, អវិជ្ជានុសយោ។»', '"There are, monks, these seven latent tendencies. Which seven? The latent tendency of sensual lust, aversion, views, doubt, conceit, craving for existence, and ignorance." — Aṅguttara Nikāya 7.11') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— អនុសយសូត្រ សត្តកនិបាត អង្គុត្តរនិកាយ', '— Anusaya Sutta, Sattakanipāta, Aṅguttara Nikāya') }}
      </p>
    </div>

    <!-- The 7 Anusayas Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🌋</span>
        <span>{{ t('អនុសយធម៌ទាំង ៧ ប្រការពិស្តារ', 'The 7 Latent Tendencies') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="a in anusayas"
          :key="a.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                  {{ a.num }}
                </span>
                <div>
                  <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">{{ t(a.titleKm, a.titleEn) }}</h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ a.pali }}</p>
                </div>
              </div>
              <span class="text-2xl">{{ a.icon }}</span>
            </div>

            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(a.descKm, a.descEn) }}
            </p>
          </div>

          <!-- Eradication Stage -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
              <span class="font-bold text-emerald-700 dark:text-emerald-300 block mb-0.5">
                ⚡ {{ t('កម្ចាត់ដាច់ស្រឡះដោយ ៖', 'Permanently Eradicated by:') }}
              </span>
              <span class="text-stone-600 dark:text-stone-400">{{ t(a.pathKm, a.pathEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3 Levels of Kilesa Explanatory Note -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🌱</span>
        <span>{{ t('កម្រិតទាំង ៣ នៃកិលេស ៖ គ្រាប់ពូជ ពន្លក និងដើមឈើ', 'The 3 Levels of Defilement: Seed, Sprout & Tree') }}</span>
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 text-xs">
        <div class="p-3 rounded-lg border bg-stone-500/5" :style="{ borderColor: 'var(--border)' }">
          <span class="font-bold text-amber-700 dark:text-amber-300 block mb-1">១. អនុសយកិលេស (គ្រាប់ពូជ)</span>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed">{{ t('ដេកសម្ងំក្នុងដីចិត្ត ដូចគ្រាប់ពូជដែលកប់ក្រោមដី មើលមិនឃើញតែអាចដុះឡើងគ្រប់ពេល។ កម្ចាត់ដោយ បញ្ញា (អរិយមគ្គ)។', 'Latent like dormant seeds buried deep beneath soil. Eradicated solely by Noble Supramundane Wisdom.') }}</p>
        </div>
        <div class="p-3 rounded-lg border bg-stone-500/5" :style="{ borderColor: 'var(--border)' }">
          <span class="font-bold text-amber-700 dark:text-amber-300 block mb-1">២. បរិយុដ្ឋានកិលេស (ពន្លក)</span>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed">{{ t('កម្រើកឡើងក្នុងគំនិត ជាការគិតលោភ ខឹង ច្រណែន ឬស្អប់ខ្ពើម។ គ្រប់គ្រងនិងរម្ងាប់ដោយ សមាធិ។', 'Active obsessive mental thoughts of desire, irritation, or envy. Pacified and restrained by Samādhi.') }}</p>
        </div>
        <div class="p-3 rounded-lg border bg-stone-500/5" :style="{ borderColor: 'var(--border)' }">
          <span class="font-bold text-amber-700 dark:text-amber-300 block mb-1">៣. វីតិក្កមកិលេស (ដើមឈើធំ)</span>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed">{{ t('ផ្ទុះចេញមកក្រៅជាទង្វើ ឬពាក្យសម្តី ដូចជាការសម្លាប់ លួច បោកប្រាស់ ឬជេរប្រទេច។ ទប់ស្កាត់ដោយ សីល។', 'Gross outward misconduct bursting into speech and bodily action. Restrained through moral virtue (Sīla).') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const anusayas = [
  {
    id: 1,
    num: '១',
    titleKm: 'កាមរាគានុស័យ (កិលេសកាមដេកសម្ងំ)',
    titleEn: 'Kāmarāgānusaya (Sensual Lust)',
    pali: 'Kāmarāgānusaya — កាមរាគដេកសម្ងំ',
    icon: '🌹',
    descKm: 'ទំនោរដេកសម្ងំក្នុងការត្រេកត្រអាលនឹងរូប រស សំឡេង ក្លិន និងសម្ផស្សកាយ ធ្វើឱ្យចិត្តងាយរំភើបនិងជាប់ជំពាក់។',
    descEn: 'The dormant tendency toward sensual passion and bodily delight, ready to awaken with enticing stimuli.',
    pathKm: 'អនាគាមិមគ្គ (កម្ចាត់ដាច់ស្រឡះ មិនវិលត្រឡប់មកកាមភពឡើយ)។',
    pathEn: 'Uprooted completely by the Anāgāmī Path (Non-Returner).',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'បដិឃានុស័យ (កិលេសខឹងថ្នាំងថ្នាក់ដេកសម្ងំ)',
    titleEn: 'Paṭighānusaya (Aversion / Ill Will)',
    pali: 'Paṭighānusaya — ទោសៈដេកសម្ងំ',
    icon: '⚡',
    descKm: 'ទំនោរដេកសម្ងំនៃកំហឹង ការមិនពេញចិត្ត ការថ្នាំងថ្នាក់ និងការស្អប់ខ្ពើម ដែលងាយនឹងផ្ទុះឡើងពេលជួបរឿងមិនសមបំណង។',
    descEn: 'The latent seed of anger, irritability, and aversion, ready to flare into rage upon frustration.',
    pathKm: 'អនាគាមិមគ្គ (កម្ចាត់ទោសៈនិងបដិឃៈបានទាំងស្រុង ចិត្តពោរពេញដោយមេត្តាឥតព្រំដែន)។',
    pathEn: 'Decisively abolished by the Anāgāmī Path, replacing aversion with unconditional mettā.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'ទិដ្ឋិយានុស័យ (កិលេសយល់ខុសដេកសម្ងំ)',
    titleEn: 'Diṭṭhānusaya (Wrong Views)',
    pali: 'Diṭṭhānusaya — មិច្ឆាទិដ្ឋិដេកសម្ងំ',
    icon: '🧭',
    descKm: 'ទំនោរដេកសម្ងំក្នុងការយល់ខុស ប្រកាន់ថាមានខ្លួនអញជានិរន្តរ៍ ឬស្លាប់ទៅសូន្យ មិនជឿកម្មផល។',
    descEn: 'The dormant proclivity to cling to speculative dogmas, skepticism toward kamma, or self-illusion.',
    pathKm: 'សោតាបត្តិមគ្គ (កម្ចាត់ដាច់ស្រឡះតាំងពីការសម្រេចធម៌ថ្នាក់ដំបូង មិនដែលយល់ខុសទៀតឡើយ)។',
    pathEn: 'Permanently shattered at the very first stream-entry: Sotāpatti Path.',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'វិចិកិច្ឆានុស័យ (កិលេសសង្ស័យស្ទាក់ស្ទើរដេកសម្ងំ)',
    titleEn: 'Vicikicchānusaya (Skeptical Doubt)',
    pali: 'Vicikicchānusaya — សង្ស័យស្ទាក់ស្ទើរដេកសម្ងំ',
    icon: '❓',
    descKm: 'ទំនោរដេកសម្ងំនៃសេចក្តីសង្ស័យក្នុងព្រះរតនត្រ័យ ក្នុងអតីតជាតិ អនាគតជាតិ និងបដិច្ចសមុប្បាទ។',
    descEn: 'The subterranean doubt questioning the Buddha, Dhamma, Saṅgha, past/future lives, and causation.',
    pathKm: 'សោតាបត្តិមគ្គ (កម្ចាត់ដាច់ស្រឡះ ក្លាយជាអ្នកមានសទ្ធាមាំមួនឥតកក្រើក)។',
    pathEn: 'Utterly dismantled by the Sotāpatti Path, establishing unshakable conviction in the Dhamma.',
  },
  {
    id: 5,
    num: '៥',
    titleKm: 'មានានុស័យ (កិលេសប្រកាន់ខ្លួនដេកសម្ងំ)',
    titleEn: 'Mānānusaya (Conceit / Pride)',
    pali: 'Mānānusaya — ការប្រៀបធៀបខ្លួនដេកសម្ងំ',
    icon: '👑',
    descKm: 'ទំនោរដេកសម្ងំក្នុងការប្រៀបធៀបថា «អញប្រសើរជាងគេ អញស្មើគេ ឬអញអន់ជាងគេ» ដែលជាឫសគល់នៃអំនួត។',
    descEn: 'The stubborn latent presumption of identity: measuring oneself as superior, equal, or inferior.',
    pathKm: 'អរហត្តមគ្គ (កម្ចាត់ដាច់ស្រឡះ ផុតចាកការប្រៀបធៀប និងមោទនភាពទាំងពួង)។',
    pathEn: 'Severed once and for all by the Arahant Path, dissolving all self-referential pride.',
  },
  {
    id: 6,
    num: '៦',
    titleKm: 'ភវរាគានុស័យ (កិលេសជាប់ចិត្តនឹងភពដេកសម្ងំ)',
    titleEn: 'Bhavarāgānusaya (Craving for Existence)',
    pali: 'Bhavarāgānusaya — ជាប់ជំពាក់នឹងភព',
    icon: '🌀',
    descKm: 'ទំនោរដេកសម្ងំក្នុងការស្រឡាញ់ជីវិត ចង់កើតក្នុងរូបភព ឬអរូបភពដ៏ខ្ពង់ខ្ពស់។',
    descEn: 'The subtle latent hunger for ongoing existence in fine-material or immaterial celestial realms.',
    pathKm: 'អរហត្តមគ្គ (កម្ចាត់ដាច់ស្រឡះ បញ្ចប់ការកើតក្នុងភពទាំងពួង)។',
    pathEn: 'Extinguished completely by the Arahant Path, closing the doors to further becoming.',
  },
  {
    id: 7,
    num: '៧',
    titleKm: 'អវិជ្ជានុស័យ (កិលេសងងឹតល្ងង់ដេកសម្ងំ)',
    titleEn: 'Avijjānusaya (Latent Ignorance)',
    pali: 'Avijjānusaya — អវិជ្ជាឫសគល់នៃទុក្ខ',
    icon: '🌑',
    descKm: 'ទំនោរដេកសម្ងំនៃភាពល្ងង់មិនដឹងការពិត មិនដឹងទុក្ខ មិនដឹងហេតុនៃទុក្ខ ដែលជាឫសគល់នៃវដ្តសង្សារ។',
    descEn: 'The primordial subterranean blindness obscuring the Four Noble Truths—the master seed of all Saṃsāra.',
    pathKm: 'អរហត្តមគ្គ (កម្ចាត់ដាច់ស្រឡះ ភ្លឺស្វាងដោយវិជ្ជា ៣ និងអភិញ្ញា ៦)។',
    pathEn: 'Definitively shattered by the light of the Arahant Path, bringing supreme omniscience of liberation.',
  },
]
</script>
