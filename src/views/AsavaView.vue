<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៨៧ — អាសវធម៌ ៤ & មាគ៌ាខីណាស្រព', 'GATHA 87 — 4 CANKERS (ĀSAVA) & FREEDOM') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('អាសវធម៌ ៤ ៖ កិលេសជ្រាបស្រពូនចិត្ត & មាគ៌ានៃព្រះខីណាស្រព', 'The 4 Cankers (Āsava) & The Path of the Taintless Arahant') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('អាសវធម៌ សំដៅលើកិលេសដ៏ល្អិតជ្រៅដែលហូរជ្រាប ឬត្រាំសម្ងំក្នុងសន្តានចិត្តរបស់សត្វលោក ដូចជាមេស្រា ឬទឹកថ្នាំដែលជ្រាបជ្រៅទៅក្នុងសាច់ក្រណាត់។ ពាក្យថា «អាសវៈ» មានន័យថា ធម៌ដែលហូរចេញតាមទ្វារទាំង ៦ ឬធម៌ដែលត្រាំដេកយូរអង្វែងក្នុងវដ្តសង្សារ។ កាលណាព្រះយោគាវចរបានផ្តាច់ឫសគល់នៃអាសវៈទាំង ៤ នេះបានដោយអរហត្តមគ្គ ទើបទទួលបានព្រះនាមដ៏ឧត្តមថា «ព្រះខីណាស្រព» (អ្នកមានអាសវៈអស់ហើយ) គឺព្រះអរហន្តដ៏បរិសុទ្ធ។ នៅក្នុងសព្វាសវសូត្រ (MN 2) ព្រះសម្មាសម្ពុទ្ធទ្រង់បានសម្តែងនូវវិធីបំបាត់អាសវៈ ៧ យ៉ាងយ៉ាងក្បោះក្បាយ។', 'Āsava designates the deep fermentations, pollutions, or cankers that leak into consciousness, saturating the mind like yeast in wine. Deriving from the root for "flowing out" or "fermenting," āsavas perpetuate rebirth across the endless cycles of Saṃsāra. When a practitioner completely eradicates these four root taints through the Path of Arahantship, they attain the revered title of Khīṇāsava—the Taintless One. In the Sabbāsava Sutta (MN 2), the Buddha expounds seven practical methods for abandoning and drying up all cankers.') }}
    </p>

    <!-- Pali Gatha Box from Sabbasava Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«អាសវានំ ខយា អនាសវំ ចេតោវិមុត្តិំ បញ្ញាវិមុត្តិំ ទិដ្ឋេវ ធម្មេ សយំ អភិញ្ញា សច្ឆិកត្វា ឧបសម្បជ្ជ វិហរតីតិ។»', '"Through the destruction of cankers, entering and dwelling in taintless liberation of mind and liberation by wisdom, having realized it directly for oneself in this very life." — Dīgha Nikāya') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— សព្វាសវសូត្រ មជ្ឈិមនិកាយ មូលបណ្ណាសក', '— Sabbāsava Sutta, Majjhima Nikāya') }}
      </p>
    </div>

    <!-- The 4 Asavas Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🏺</span>
        <span>{{ t('អាសវធម៌ទាំង ៤ ប្រការពិស្តារ', 'The 4 Influxes / Cankers') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="a in asavas"
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

          <!-- Eradication Path -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
              <span class="font-bold text-emerald-700 dark:text-emerald-300 block mb-0.5">
                ✂️ {{ t('កម្ចាត់ផ្តាច់ដោយ ៖', 'Uprooted by:') }}
              </span>
              <span class="text-stone-600 dark:text-stone-400">{{ t(a.uprootKm, a.uprootEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 7 Ways to Destroy Asavas (Sabbasava Sutta) -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🛡️</span>
        <span>{{ t('វិធីកម្ចាត់អាសវៈ ៧ យ៉ាង (សព្វាសវសូត្រ MN 2)', 'The 7 Methods for Abandoning All Cankers (MN 2)') }}</span>
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-xs">
        <div v-for="m in methods" :key="m.id" class="p-3 rounded-lg border bg-stone-500/5" :style="{ borderColor: 'var(--border)' }">
          <span class="font-bold text-amber-700 dark:text-amber-300 block mb-1">{{ m.num }}. {{ t(m.titleKm, m.titleEn) }}</span>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed">{{ t(m.descKm, m.descEn) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const asavas = [
  {
    id: 1,
    num: '១',
    titleKm: 'កាមាសវៈ (អាសវៈគឺកាម)',
    titleEn: 'Kāmāsava (Canker of Sensuality)',
    pali: 'Kāmāsava — កាមតណ្ហាជ្រាបជ្រៅ',
    icon: '🌸',
    descKm: 'ការត្រាំស្រពោន និងហូរជ្រាបដោយកាមគុណទាំង ៥ គឺការស្រេកឃ្លានក្នុងរូប សំឡេង ក្លិន រស និងសម្ផស្សកាយ ដែលទាញចិត្តឱ្យជាប់ក្នុងកាមភព។',
    descEn: 'The deep intoxicating influx of sensual craving, seeking gratification through eye, ear, nose, tongue, and body.',
    uprootKm: 'លះបង់ដោយ អនាគាមិមគ្គ (ចំពោះកាមរាគកម្រិតរួញ) និង អរហត្តមគ្គ (ផ្តាច់ឫសគល់ទាំងស្រុង)។',
    uprootEn: 'Attenuated by Anāgāmī Path and uprooted utterly by the Arahant Path.',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'ភវាសវៈ (អាសវៈគឺភព)',
    titleEn: 'Bhavāsava (Canker of Becoming / Existence)',
    pali: 'Bhavāsava — សេចក្តីចង់មានចង់កើត',
    icon: '🔄',
    descKm: 'ការត្រាំស្រពោនដោយសេចក្តីប្រាថ្នាចង់បានភពថ្មី ចង់កើតក្នុងរូបភព អរូបភព ឬចង់ឱ្យអត្តារស់នៅជាអមតៈក្នុងស្ថានសួគ៌។',
    descEn: 'The deep canker of craving for continued existence, becoming, and immortal rebirth in higher heavenly realms.',
    uprootKm: 'លះបង់ផ្តាច់ឫសគល់ទាំងស្រុងដោយ អរហត្តមគ្គ។',
    uprootEn: 'Severed completely and irreversibly by the Path of Arahantship.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'ទិដ្ឋាសវៈ (អាសវៈគឺទិដ្ឋិ)',
    titleEn: 'Diṭṭhāsava (Canker of Wrong Views)',
    pali: 'Diṭṭhāsava — គំនិតយល់ខុសត្រាំចិត្ត',
    icon: '🌪️',
    descKm: 'ការត្រាំស្រពោនដោយគំនិតយល់ខុស មានសស្សតទិដ្ឋិ (យល់ថាទៀង) ឧច្ឆេទទិដ្ឋិ (យល់ថាដាច់សូន្យ) និងការប្រកាន់ថាមានតួខ្លួនអញទៀងទាត់។',
    descEn: 'The canker of speculative, distorted views, eternalism, nihilism, and identity convictions.',
    uprootKm: 'លះបង់ផ្តាច់ឫសគល់បានយ៉ាងដាច់ស្រេចតាំងពី សោតាបត្តិមគ្គ (ថ្នាក់ដំបូង)។',
    uprootEn: 'Fully and definitively eliminated at the very first breakthrough: Sotāpanna Path.',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'អវិជ្ជាសវៈ (អាសវៈគឺអវិជ្ជា)',
    titleEn: 'Avijjāsava (Canker of Ignorance)',
    pali: 'Avijjāsava — ភាពងងឹតល្ងង់មិនដឹងការពិត',
    icon: '🌑',
    descKm: 'ការត្រាំស្រពោនដោយភាពងងឹតអវិជ្ជា មិនយល់ច្បាស់នូវអរិយសច្ច ៤ មិនស្គាល់អតីត អនាគត និងបដិច្ចសមុប្បាទ។ នេះជាប្រភពមេនៃទុក្ខទាំងអស់។',
    descEn: 'The root taint of fundamental ignorance—failing to see the Four Noble Truths and Dependent Origination as they truly are.',
    uprootKm: 'លះបង់ផ្តាច់ឫសគល់ទាំងស្រុងដោយ អរហត្តមគ្គ ព្រមទាំងត្រាស់ដឹងសច្ចធម៌។',
    uprootEn: 'Decisively extinguished by the light of the Arahant Path.',
  },
]

const methods = [
  { id: 1, num: '១', titleKm: 'ទស្សនា (ការឃើញ)', titleEn: 'Seeing (Dassana)', descKm: 'កម្ចាត់ដោយការឃើញច្បាស់នូវអរិយសច្ច ៤ លះទិដ្ឋិខុស។', descEn: 'Eradicated by insight into the Four Noble Truths, removing views.' },
  { id: 2, num: '២', titleKm: 'សំវរៈ (ការសង្រួម)', titleEn: 'Restraint (Saṃvara)', descKm: 'កម្ចាត់ដោយការគ្រប់គ្រងឥន្ទ្រិយទាំង ៦ ភ្នែក ត្រចៀក ច្រមុះ... មិនឱ្យកិលេសចូល។', descEn: 'Guarding the six sense doors against defilements.' },
  { id: 3, num: '៣', titleKm: 'បដិសេវនា (ការប្រើប្រាស់)', titleEn: 'Using (Paṭisevanā)', descKm: 'ពិចារណាត្រឹមត្រូវពេលប្រើចីវរ បិណ្ឌបាត សេនាសនៈ ថ្នាំកែរោគ។', descEn: 'Mindful consumption of food, clothing, shelter, and medicines.' },
  { id: 4, num: '៤', titleKm: 'អធិវាសនា (ការអត់ធន់)', titleEn: 'Enduring (Adhivāsanā)', descKm: 'អត់ទ្រាំនឹងកម្តៅ ត្រជាក់ ស្រេក ឃ្លាន និងពាក្យតិះដៀល។', descEn: 'Patient forbearance toward cold, heat, hunger, and harsh speech.' },
  { id: 5, num: '៥', titleKm: 'បរិវជ្ជនា (ការចៀសវាង)', titleEn: 'Avoiding (Parivajjanā)', descKm: 'ចៀសវាងសត្វកាច សត្វសាហាវ ផ្លូវគ្រោះថ្នាក់ និងមិត្តអាក្រក់។', descEn: 'Steering clear of dangerous beasts, perilous places, and bad company.' },
  { id: 6, num: '៦', titleKm: 'វិនោទនា (ការបន្ទោបង់)', titleEn: 'Dispelling (Vinodanā)', descKm: 'កម្ចាត់គំនិតកាម គំនិតព្យាបាទ គំនិតបៀតបៀនមិនឱ្យនៅយូរ។', descEn: 'Promptly expelling thoughts of lust, ill will, and harm.' },
  { id: 7, num: '៧', titleKm: 'ភាវនា (ការចម្រើន)', titleEn: 'Developing (Bhāvanā)', descKm: 'ចម្រើនពោជ្ឈង្គ ៧ និងអរិយមគ្គមានអង្គ ៨ ឱ្យពេញបរិបូណ៌។', descEn: 'Cultivating the 7 Factors of Enlightenment to perfection.' },
]
</script>
