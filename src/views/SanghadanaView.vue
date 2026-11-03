<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៩៩ — សង្ឃទាន & បុគ្គលិកទាន', 'GATHA 99 — SAṄGHADĀNA & INDIVIDUAL OFFERINGS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('សង្ឃទាន vs បុគ្គលិកទាន ៖ អានិសង្សដ៏លើសលប់នៃទានចំពោះសង្ឃ', 'Saṅghadāna vs Pāṭipuggalikadāna: The Inestimable Merit of Offering to the Order') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('សង្ឃទាន និង បុគ្គលិកទាន គឺជាការបែងចែកប្រភេទនៃការធ្វើទានដ៏សំខាន់បំផុតក្នុងព្រះពុទ្ធសាសនា ដែលមានចែងក្នុង «ទក្ខិណវិភង្គសូត្រ» (MN 142)។ ដំណើររឿងកើតឡើងនៅពេលដែលព្រះមហាបជាបតិគោតមី (ព្រះមាតុច្ឆាដែលបីបាច់ថែរក្សាព្រះសិទ្ធត្ថកាលនៅកុមារ) បានត្បាញសំពត់សាដកយ៉ាងប្រណីតដោយផ្ទាល់ដៃ រួចនាំយកមកប្រគេនព្រះសម្មាសម្ពុទ្ធជាបុគ្គល។ ព្រះពុទ្ធទ្រង់បានបដិសេធមិនទទួលយកចំពោះព្រះអង្គផ្ទាល់ឡើយ តែទ្រង់ត្រាស់បង្គាប់ឱ្យយកទៅ «ប្រគេនដល់សង្ឃ» វិញ ព្រោះការប្រគេនចំពោះសង្ឃមានផលធំធេងលើសលប់ជាងការប្រគេនចំពោះបុគ្គល ទោះបីជាបុគ្គលនោះជាព្រះសម្មាសម្ពុទ្ធក៏ដោយ។', 'Saṅghadāna (offerings made to the monastic Community as a whole) and Pāṭipuggalikadāna (offerings made to specific individuals) are systematically distinguished in the celebrated Dakkhiṇāvibhaṅga Sutta (MN 142). When Mahāpajāpatī Gotamī—the Buddha’s foster mother who raised Him—hand-wove a magnificent pair of robes specifically for the Buddha, the Blessed One urged her: "Give it to the Saṅgha, Gotamī. When you offer it to the Saṅgha, I will be honored, and the Saṅgha will be honored as well." The Buddha revealed that an offering dedicated impersonally to the Noble Order produces merit beyond all mathematical calculation, far transcending any gift to an individual person.') }}
    </p>

    <!-- Pali Gatha Box from Dakkhinavibhanga Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ន ត្វាហំ អានន្ទ កេនចិ បរិយាយេន សង្ឃគតាយ ទក្ខិណាយ បាដិបុគ្គលិកំ ទានំ មហប្ផលតរំ វទាមិ។»', '"In no way, Ānanda, do I say that an offering made to a specific individual ever has greater fruit than an offering dedicated to the Saṅgha." — Majjhima Nikāya 142') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— ទក្ខិណវិភង្គសូត្រ ឧបរិបណ្ណាសក មជ្ឈិមនិកាយ', '— Dakkhiṇāvibhaṅga Sutta, Majjhima Nikāya') }}
      </p>
    </div>

    <!-- The 7 Types of Sanghadana -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🪷</span>
        <span>{{ t('សង្ឃទានទាំង ៧ ប្រភេទពិស្តារ', 'The 7 Tiers of Saṅghadāna') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div
          v-for="s in sanghaTypes"
          :key="s.id"
          class="card-paper p-4 rounded-xl border flex items-start gap-3"
          :class="s.highlight ? 'ring-2 ring-amber-500/50' : ''"
        >
          <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
            {{ s.num }}
          </span>
          <div>
            <h4 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">{{ t(s.titleKm, s.titleEn) }}</h4>
            <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(s.descKm, s.descEn) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- The 14 Individual Offerings Comparison -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>📈</span>
        <span>{{ t('លំដាប់ថ្នាក់នៃបុគ្គលិកទានទាំង ១៤ (ពីសត្វតិរច្ឆានដល់ព្រះពុទ្ធ)', 'The Scale of Individual Merit (Pāṭipuggalikadāna)') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រះពុទ្ធបានត្រាស់រាប់អានិសង្ស ៖ ឱ្យបាយដល់សត្វតិរច្ឆាន ១ ពេល បានអានិសង្ស ១០០ ជាតិ, ឱ្យមនុស្សទុច្ចរិត បាន ១,០០០ ជាតិ, ឱ្យមនុស្សមានសីល បាន ១០០,០០០ ជាតិ, ឱ្យព្រះសោតាបន្ន បានរាប់មិនអស់ រហូតដល់ឱ្យព្រះសម្មាសម្ពុទ្ធ។ ប៉ុន្តែ ទោះបីជាឱ្យទានដល់ព្រះពុទ្ធជាប្រធាន ក៏នៅតែមានផលតិចជាងការធ្វើទានដោយតម្កល់ចិត្តចំពោះ «ព្រះសង្ឃទាំងមូល» (សង្ឃទាន) ដោយមិនរើសមុខឡើយ។', 'The Buddha mapped the trajectory: feeding an animal once yields merit for 100 lifetimes; an immoral person 1,000; a moral person 100,000; up to the Buddha Himself whose fruit is vast. Yet He concluded that even offering to the Buddha personally does not equal the infinite, boundless fruit of a sincere Saṅghadāna made impartially to the Order as a whole without sectarian bias.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const sanghaTypes = [
  {
    id: 1,
    num: '១',
    titleKm: 'ប្រគេនដល់ឧភតោសង្ឃ (ភិក្ខុសង្ឃ & ភិក្ខុនីសង្ឃ) មានព្រះពុទ្ធជាប្រធាន',
    titleEn: 'Offering to Both Orders Headed by the Buddha',
    descKm: 'ការប្រគេនទានដល់ព្រះភិក្ខុសង្ឃ និងភិក្ខុនីសង្ឃទាំងពីរពួក ដោយមានព្រះសម្មាសម្ពុទ្ធទ្រង់គង់ជាអធិបតី។',
    descEn: 'Giving to the dual community of monks and nuns presided over in person by the Supreme Buddha.',
    highlight: false,
  },
  {
    id: 2,
    num: '២',
    titleKm: 'ប្រគេនដល់ឧភតោសង្ឃ ក្រោយកាលព្រះពុទ្ធទ្រង់បរិនិព្វាន',
    titleEn: 'Offering to Both Orders After Parinibbāna',
    descKm: 'ការប្រគេនទានដល់ព្រះភិក្ខុសង្ឃ និងភិក្ខុនីសង្ឃទាំងពីរពួក ក្នុងសម័យកាលក្រោយពុទ្ធបរិនិព្វាន។',
    descEn: 'Giving to the dual assembly of monks and nuns after the Buddha has entered Parinibbāna.',
    highlight: false,
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'ប្រគេនចំពោះភិក្ខុសង្ឃតែម្យ៉ាង',
    titleEn: 'Offering to the Bhikkhu Saṅgha Exclusively',
    descKm: 'ការប្រគេនទានតម្កល់ចិត្តចំពោះអង្គភិក្ខុសង្ឃទាំងមូល ដោយមិនរើសមុខព្រះសង្ឃអង្គណាឡើយ។',
    descEn: 'Giving to the Order of monks without discriminating individual individuals.',
    highlight: false,
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'ប្រគេនចំពោះភិក្ខុនីសង្ឃតែម្យ៉ាង',
    titleEn: 'Offering to the Bhikkhunī Saṅgha Exclusively',
    descKm: 'ការប្រគេនទានតម្កល់ចិត្តចំពោះអង្គភិក្ខុនីសង្ឃទាំងមូលជាសមូហភាព។',
    descEn: 'Giving to the community of nuns as an undivided spiritual body.',
    highlight: false,
  },
  {
    id: 5,
    num: '៥',
    titleKm: 'ប្រគេនដោយសុំភិក្ខុសង្ឃ និងភិក្ខុនីសង្ឃពីសង្ឃ',
    titleEn: 'Offering to Representatives of Both Orders',
    descKm: 'ការសូមអារាធនាព្រះសង្ឃ និងភិក្ខុនីពីសង្ឃតាមចំនួនកំណត់ (ឧ. ២ អង្គ ឬ ៤ អង្គ) ដោយមិនបញ្ចេញឈ្មោះ។',
    descEn: 'Requesting a designated delegation of monks and nuns allocated impartially by the Sangha.',
    highlight: false,
  },
  {
    id: 6,
    num: '៦',
    titleKm: 'ប្រគេនដោយសុំភិក្ខុតាមចំនួនពីសង្ឃ',
    titleEn: 'Offering to Appointed Bhikkhu Delegates',
    descKm: 'ការសូមអារាធនាភិក្ខុតាមចំនួនពីសង្ឃ រួចធ្វើទានដោយគោរពចំពោះសង្ឃ មិនថាលោកជាព្រះថេរៈ ឬនវកៈ។',
    descEn: 'Requesting a quota of monks assigned by the Order, revering them solely as Saṅgha representatives.',
    highlight: false,
  },
  {
    id: 7,
    num: '៧',
    titleKm: 'ប្រគេនដល់គោត្រភូសង្ឃ (សង្ឃដែលមានតែសំពត់កាសាវៈព័ទ្ធក)',
    titleEn: 'Offering to Gotrabhū Monks (Yellow Cloth on Neck)',
    descKm: 'ក្នុងអនាគតកាលដ៏ឆ្ងាយ ពេលព្រះសង្ឃសីលធ្លាក់ចុះ សល់ត្រឹមតែសំពត់លឿងចងកដៃ ឬព័ទ្ធក តែបើទាយកតម្កល់ចិត្តចំពោះព្រះពុទ្ធសាសនា ក៏នៅតែមានផលរាប់មិនអស់! ',
    descEn: 'In degenerate future eras when monastics have fallen from virtue and wear only a yellow strip around the neck: even then, an offering given with mind anchored upon the Triple Gem yields incalculable fruit!',
    highlight: true,
  },
]
</script>
