<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ១០៣ — មច្ឆរិយៈ ៥ យ៉ាង', 'GATHA 103 — 5 KINDS OF STINGINESS (MACCHARIYA)') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('មច្ឆរិយៈ ៥ យ៉ាង ៖ ភាពកំណាញ់ស្វិតស្វាញ ៥ បែប & វិធីបន្សាបដោយការចែករំលែក', 'The 5 Kinds of Stinginess (Macchariya): 5 Poisons & Antidote of Giving') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('មច្ឆរិយៈ សំដៅលើភាពកំណាញ់ ស្វិតស្វាញ មិនចង់ឱ្យអ្នកដទៃបានចំណែក ឬបានល្អស្មើខ្លួន ដែលជាចេតសិកអកុសលដ៏អាក្រក់មួយប្រភេទបំផ្លាញសេចក្តីស្ងប់ក្នុងចិត្ត។ នៅក្នុងមច្ឆរិយសូត្រ (AN 5.257) ព្រះសម្មាសម្ពុទ្ធទ្រង់បានត្រាស់សម្តែងថា មច្ឆរិយៈមាន ៥ ប្រភេទខុសៗគ្នា។ បុគ្គលដែលពោរពេញដោយមច្ឆរិយៈ មិនត្រឹមតែរស់នៅដោយចិត្តចង្អៀតចង្អល់ ភ័យខ្លាចការបាត់បង់ជានិច្ចប៉ុណ្ណោះទេ ថែមទាំងបង្កើតផលវិបាកនាំឱ្យកើតក្នុងភពប្រេត ឬរងទុក្ខវេទនា។ ការចម្រើនទាន និងការបើកបេះដូងចែករំលែក ទើបជាឱសថបន្សាបជាតិពុលនៃមច្ឆរិយៈបាន។', 'Macchariya designates the bitter, contracted stinginess or possessive jealousy that cannot bear to see others share or prosper in what one has. In the Macchariya Sutta (AN 5.257), the Buddha analyzed five distinct varieties of stinginess. A person bound by macchariya lives in perpetual anxiety, hoarding resources in fear and planting karmic seeds that lead directly toward lower realms of deprivation (Peta loka). The practice of joyful generosity (Dāna) and magnanimous celebration of others\' success is the sole antidote.') }}
    </p>

    <!-- Pali Gatha Box from Macchariya Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«បញ្ចិមានិ ភិក្ខវេ មច្ឆរិយានិ។ កតមានិ បញ្ច? អាវាសមច្ឆរិយំ, កុលមច្ឆរិយំ, លាភមច្ឆរិយំ, វណ្ណមច្ឆរិយំ, ធម្មមច្ឆរិយំ។»', '"There are, monks, these five kinds of stinginess. Which five? Stinginess as to dwellings, stinginess as to families, stinginess as to gains, stinginess as to recognition/praise, and stinginess as to Dhamma." — Aṅguttara Nikāya 5.257') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— មច្ឆរិយសូត្រ បញ្ចកនិបាត អង្គុត្តរនិកាយ', '— Macchariya Sutta, Pañcakanipāta, Aṅguttara Nikāya') }}
      </p>
    </div>

    <!-- The 5 Types of Stinginess Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🔒</span>
        <span>{{ t('មច្ឆរិយៈទាំង ៥ ប្រភេទពិស្តារ', 'The 5 Types of Stinginess Analyzed') }}</span>
      </h3>

      <div class="space-y-3">
        <div
          v-for="m in macchariyas"
          :key="m.id"
          class="card-paper p-4 sm:p-5 rounded-xl border flex flex-col md:flex-row gap-4 items-start md:items-center justify-between"
        >
          <div class="flex items-start sm:items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-rose-500/20 text-rose-700 dark:text-rose-300 flex items-center justify-center text-sm font-mono font-bold shrink-0">
              {{ m.num }}
            </span>
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <span class="text-xl">{{ m.icon }}</span>
                <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">{{ t(m.titleKm, m.titleEn) }}</h4>
                <span class="text-xs font-mono text-stone-500">({{ m.pali }})</span>
              </div>
              <p class="text-xs sm:text-sm mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                {{ t(m.descKm, m.descEn) }}
              </p>
            </div>
          </div>

          <div class="md:w-56 shrink-0 w-full p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-xs">
            <span class="font-bold text-emerald-700 dark:text-emerald-300 block mb-0.5">
              🌿 {{ t('វិធីកម្ចាត់ ៖', 'Liberating Antidote:') }}
            </span>
            <span class="text-stone-600 dark:text-stone-400">{{ t(m.cureKm, m.cureEn) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Dhamma Stinginess Warning Section -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>📖</span>
        <span>{{ t('ទោសធ្ងន់ធ្ងរបំផុត ៖ ធម្មមច្ឆរិយៈ (ការកំណាញ់ធម៌)', 'The Graver Fault: Dhamma Macchariya (Stinginess of Wisdom)') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ក្នុងចំណោមមច្ឆរិយៈទាំង ៥ «ធម្មមច្ឆរិយៈ» មានទោសធ្ងន់ធ្ងរបំផុត។ ការដឹងធម៌ យល់ក្បួនច្បាប់ តែលាក់កំបាំងទុកមិនព្រមចែករំលែក ឬបង្រៀនអ្នកដទៃព្រោះខ្លាចគេពូកែជាងខ្លួន នឹងនាំឱ្យកើតជាមនុស្សល្ងង់ខ្លៅ គ ឬថ្លង់ក្នុងជាតិក្រោយៗ។ ផ្ទុយទៅវិញ ព្រះពុទ្ធទ្រង់លើកតម្កើង «ធម្មទាន» ថាជាកំពូលនៃទានទាំងអស់ (សព្វទានំ ធម្មទានំ ជិនាតិ)។', 'Among the five kinds of stinginess, Dhamma Macchariya carries the gravest karmic danger. Possessing knowledge or deep teachings but withholding them out of fear that others might surpass oneself leads to mental dullness and ignorance across future births. Conversely, the Buddha exalted the Gift of Dhamma as surpassing all worldly gifts: "Sabbadānaṃ dhammadānaṃ jināti" (The gift of Dhamma excels all gifts).') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const macchariyas = [
  {
    id: 1,
    num: '១',
    icon: '🏠',
    titleKm: 'អាវាសមច្ឆរិយៈ (កំណាញ់ទីកន្លែង)',
    titleEn: 'Āvāsa Macchariya (Stinginess of Dwelling)',
    pali: 'Āvāsa-macchariya',
    descKm: 'កំណាញ់វត្តអារាម កុដិ ផ្ទះ ឬកន្លែងស្នាក់នៅ មិនចង់ឱ្យអ្នកដទៃមករស់នៅជាមួយ ឬមកជ្រកកោនឡើយ។',
    descEn: 'Possessiveness over dwellings, monasteries, or rooms, begrudging others the right to lodge or visit.',
    cureKm: 'ចម្រើនចិត្តបើកទូលាយ ចាត់ទុកទីស្នាក់នៅជាកន្លែងចែករំលែក។',
    cureEn: 'Practice hospitable openness, welcoming fellow seekers.',
  },
  {
    id: 2,
    num: '២',
    icon: '👥',
    titleKm: 'កុលមច្ឆរិយៈ (កំណាញ់ត្រកូល ញាតិ)',
    titleEn: 'Kula Macchariya (Stinginess of Families / Patrons)',
    pali: 'Kula-macchariya',
    descKm: 'កំណាញ់ឧបាសកឧបាសិកា ញាតិមិត្ត ឬខ្សែស្រឡាយ មិនចង់ឱ្យគេទៅរាប់អាន ឬធ្វើបុណ្យជាមួយអ្នកដទៃ។',
    descEn: 'Jealous territoriality over supporters, friends, or families, begrudging their generosity to others.',
    cureKm: 'ចម្រើនមុទិតា (ត្រេកអរពេលឃើញគេធ្វើល្អជាមួយអ្នកដទៃ)។',
    cureEn: 'Cultivate sympathetic joy (Muditā) in patrons’ broader generosity.',
  },
  {
    id: 3,
    num: '៣',
    icon: '💰',
    titleKm: 'លាភមច្ឆរិយៈ (កំណាញ់លាភសក្ការៈ)',
    titleEn: 'Lābha Macchariya (Stinginess of Gains / Wealth)',
    pali: 'Lābha-macchariya',
    descKm: 'កំណាញ់ទ្រព្យសម្បត្តិ ម្ហូបអាហារ បច្ច័យ មិនចង់ឱ្យអ្នកដទៃបានលាភស្មើខ្លួន ឬច្រើនជាងខ្លួន។',
    descEn: 'Envious greed regarding material gains, gifts, and donations, wishing others remain empty-handed.',
    cureKm: 'ធ្វើទានដោយរីករាយ យល់ច្បាស់ថាទ្រព្យកើតពីបុណ្យចាស់។',
    cureEn: 'Delight in practicing generous giving without expectation.',
  },
  {
    id: 4,
    num: '៤',
    icon: '👑',
    titleKm: 'វណ្ណមច្ឆរិយៈ (កំណាញ់កិត្តិយស ការសរសើរ)',
    titleEn: 'Vaṇṇa Macchariya (Stinginess of Praise & Beauty)',
    pali: 'Vaṇṇa-macchariya',
    descKm: 'កំណាញ់កិត្តិយស ពណ៌សម្បុរ រូបសម្រស់ ឬពាក្យសរសើរ មិនចង់ឱ្យគេស្អាតជាង ឬល្បីជាងខ្លួន។',
    descEn: 'Resentment of another’s physical beauty, fame, reputation, praise, and public admiration.',
    cureKm: 'លះបង់មានៈ ប្រកាន់ចិត្តរាបទាប សរសើរគុណធម៌របស់អ្នកដទៃ។',
    cureEn: 'Dismantle vanity and praise the genuine virtues of others openly.',
  },
  {
    id: 5,
    num: '៥',
    icon: '📜',
    titleKm: 'ធម្មមច្ឆរិយៈ (កំណាញ់ធម៌ ចំណេះដឹង)',
    titleEn: 'Dhamma Macchariya (Stinginess of Teaching)',
    pali: 'Dhamma-macchariya',
    descKm: 'កំណាញ់ធម៌អាថ៌ វិជ្ជា ចំណេះដឹង លាក់កំបាំងក្បួនច្បាប់ មិនព្រមបង្ហាត់បង្រៀនអ្នកដទៃឱ្យចេះដឹង។',
    descEn: 'Hoarding spiritual insights, sacred scriptures, or specialized skills out of jealousy of being surpassed.',
    cureKm: 'ចែករំលែកចំណេះដឹងដោយឥតគិតកម្រៃ ធ្វើធម្មទាន។',
    cureEn: 'Freely impart Dhamma knowledge with unconditioned benevolence.',
  },
]
</script>
