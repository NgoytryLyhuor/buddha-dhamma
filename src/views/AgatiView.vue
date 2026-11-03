<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៦៧ — អគតិ ៤ យ៉ាង', 'GATHA 67 — THE 4 CORRUPT BIASES') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('អគតិ ៤ ៖ មាគ៌ាលម្អៀង & ឫសគល់នៃភាពអយុត្តិធម៌ក្នុងសង្គម', 'The 4 Biases (Agati) — Roots of Injustice & Partiality') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('អគតិ សំដៅលើផ្លូវខុស ឬការប្រព្រឹត្តលម្អៀង ដែលបំផ្លាញសេចក្តីពិត យុត្តិធម៌ និងទំនុកចិត្តក្នុងសង្គមមនុស្ស។ នៅក្នុងអគតិសូត្រ (AN 4.19) ព្រះសម្មាសម្ពុទ្ធទ្រង់ត្រាស់បង្ហាញថា អំពើអយុត្តិធម៌ ការកាត់ក្តីមិនត្រឹមត្រូវ និងការសម្រេចចិត្តខុសឆ្គងរបស់អ្នកដឹកនាំ ឬបុគ្គលទូទៅ តែងកើតចេញពីប្រភព ៤ យ៉ាង ៖ លម្អៀងព្រោះស្រឡាញ់ (ឆន្ទាគតិ), លម្អៀងព្រោះខឹង (ទោសាគតិ), លម្អៀងព្រោះល្ងង់ (មោហាគតិ), និងលម្អៀងព្រោះខ្លាច (ភយាគតិ)។ បុគ្គលដែលធ្លាក់ក្នុងអគតិ យសសក្តិ និងកិត្តិយសនឹងស្រុតចុះដូចព្រះច័ន្ទក្នុងរនោច។', 'Agati refers to the four prejudice-driven courses of conduct that pervert truth, equity, and ethical justice. In the Agati Sutta (AN 4.19), the Buddha demonstrated that corrupted judgments, nepotism, and systemic unfairness spring invariably from four biases: bias through desire/favoritism (Chandāgati), bias through hatred/ill-will (Dosāgati), bias through delusion/ignorance (Mohāgati), and bias through fear/intimidation (Bhayāgati). Whoever swerves into these corruptions sees their reputation wither away like the moon in the dark fortnight.') }}
    </p>

    <!-- Pali Gatha Box -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ឆន្ទា ទោសា ភយា មោហា យោ ធម្មំ អតិវត្តតិ, និហីយតិ តស្ស យសោ កាឡបក្ខេវ ចន្ទិមា។ ឆន្ទា ទោសា ភយា មោហា យោ ធម្មំ នាតិវត្តតិ, អាបូរតិ តស្ស យសោ សុក្កបក្ខេវ ចន្ទិមា។»', '"Whoever violates justice through desire, hatred, fear, or delusion—their honor wanes like the moon in the dark fortnight. Whoever does not transgress justice through desire, hatred, fear, or delusion—their honor waxes like the moon in the bright fortnight." — Aṅguttara Nikāya 4.19') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— អគតិសូត្រ អង្គុត្តរនិកាយ ចតុក្កនិបាត', '— Agati Sutta, Aṅguttara Nikāya') }}
      </p>
    </div>

    <!-- The Moon Simile Card -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🌕</span>
        <span>{{ t('ឧបមាព្រះច័ន្ទខ្នើត និងព្រះច័ន្ទរនោច', 'The Simile of the Waxing & Waning Moon') }}</span>
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 text-xs sm:text-sm">
        <div class="p-4 rounded-xl border bg-rose-500/5 border-rose-500/20">
          <div class="flex items-center gap-2 font-bold text-rose-600 dark:text-rose-400 mb-1">
            <span>🌑</span>
            <span>{{ t('អ្នកប្រព្រឹត្តលម្អៀង (កាឡបក្ខេវ ចន្ទិមា)', 'One Guided by Bias') }}</span>
          </div>
          <p class="text-stone-600 dark:text-stone-300 leading-relaxed text-xs">
            {{ t('បុគ្គលដែលកាត់ក្តី ឬធ្វើការដោយលម្អៀង យសសក្តិ ទ្រព្យ និងការគោរពពីអ្នកដទៃ នឹងរលាយបាត់បន្តិចម្តងៗ រហូតដល់ងងឹតសូន្យឈឹង ដូចព្រះច័ន្ទក្នុងរនោច។', 'Their credibility, honor, and influence diminish progressively until enveloped in darkness, like the moon waning into the new moon.') }}
          </p>
        </div>
        <div class="p-4 rounded-xl border bg-emerald-500/5 border-emerald-500/20">
          <div class="flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-400 mb-1">
            <span>🌕</span>
            <span>{{ t('អ្នកប្រកាន់យុត្តិធម៌ (សុក្កបក្ខេវ ចន្ទិមា)', 'One Free from Bias') }}</span>
          </div>
          <p class="text-stone-600 dark:text-stone-300 leading-relaxed text-xs">
            {{ t('បុគ្គលដែលតម្កល់លើសច្ចធម៌ មិនចុះញ៉មនឹងសម្ពាធ យសសក្តិ និងកិត្តិសព្ទនឹងរីកចម្រើនត្រដែតឡើង ដូចព្រះច័ន្ទពេញបូណ៌មី។', 'Their virtue, respect, and enduring legacy expand steadily, radiating bright clarity like the glorious full moon.') }}
          </p>
        </div>
      </div>
    </div>

    <!-- The 4 Agati Explanations -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>⚖️</span>
        <span>{{ t('អគតិទាំង ៤ ប្រការ & វិធីបង្ការ', 'The 4 Biases & Preventive Strategies') }}</span>
      </h3>

      <div
        v-for="item in biases"
        :key="item.id"
        class="card-paper p-5 rounded-xl border flex flex-col justify-between"
      >
        <div>
          <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
            <div class="flex items-center gap-2.5">
              <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                {{ item.num }}
              </span>
              <div>
                <h4 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
                  {{ t(item.nameKm, item.nameEn) }}
                </h4>
                <p class="text-[11px] font-mono text-stone-500">{{ item.pali }}</p>
              </div>
            </div>
            <span class="text-2xl">{{ item.icon }}</span>
          </div>

          <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t(item.descKm, item.descEn) }}
          </p>

          <!-- Danger in society -->
          <div class="mt-3 p-3 rounded-lg bg-rose-500/5 border border-rose-500/20 text-xs">
            <strong class="text-rose-600 dark:text-rose-400 block mb-1 font-bold">
              ⚠️ {{ t('គ្រោះថ្នាក់ក្នុងសង្គម & ការងារ ៖', 'Social & Organizational Peril:') }}
            </strong>
            <p class="text-stone-600 dark:text-stone-300 leading-relaxed">{{ t(item.dangerKm, item.dangerEn) }}</p>
          </div>
        </div>

        <!-- Antidote -->
        <div class="mt-3 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
          <div class="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <strong class="font-bold text-emerald-700 dark:text-emerald-300 block mb-0.5">
              🛡️ {{ t('ឱសថកម្ចាត់ (គុណធម៌ប្រឆាំង) ៖', 'Ethical Antidote:') }}
            </strong>
            <span class="text-stone-600 dark:text-stone-300">{{ t(item.antidoteKm, item.antidoteEn) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const biases = [
  {
    id: 1,
    num: '១',
    nameKm: 'ឆន្ទាគតិ (លម្អៀងព្រោះសេចក្តីស្រឡាញ់ & ផលប្រយោជន៍)',
    nameEn: 'Bias through Favoritism (Chandāgati)',
    pali: 'Chandāgati — ការលម្អៀងដោយសារការពេញចិត្ត បក្ខពួក ឬលាភសក្ការៈ',
    icon: '❤️',
    descKm: 'ការសម្រេចចិត្តឱ្យមនុស្សជាទីស្រឡាញ់ បងប្អូន សាច់ញាតិ ឬអ្នកដែលសូកប៉ាន់ មានប្រៀបលើអ្នកដទៃ ទោះបីជាអ្នកនោះធ្វើខុស ឬគ្មានសមត្ថភាពក៏ដោយ។',
    descEn: 'Giving unfair advantage to favorites, close relatives, cronies, or bribe-givers, shielding their wrongs and ignoring more deserving candidates.',
    dangerKm: 'បង្កើតបក្ខពួកនិយម បំផ្លាញអ្នកមានសមត្ថភាពពិតប្រាកដ និងធ្វើឱ្យស្ថាប័នបាត់បង់តុល្យភាព។',
    dangerEn: 'Breeds nepotism and cronyism, discourages genuine talent, and degrades organizational integrity.',
    antidoteKm: 'ចម្រើនឧបេក្ខា (ការតម្កល់ចិត្តជាកណ្តាល), ប្រកាន់ខ្ជាប់គោលការណ៍ច្បាប់ និងសមត្ថភាពពិតជាធំ។',
    antidoteEn: 'Cultivate Upekkhā (equanimity), establish clear transparent criteria, and evaluate by merits alone.',
  },
  {
    id: 2,
    num: '២',
    nameKm: 'ទោសាគតិ (លម្អៀងព្រោះការខឹងស្អប់ & គំនុំ)',
    nameEn: 'Bias through Hostility (Dosāgati)',
    pali: 'Dosāgati — ការលម្អៀងដោយសារកំហឹង ការមិនពេញចិត្ត ឬគំនុំផ្ទាល់ខ្លួន',
    icon: '😠',
    descKm: 'ការដាក់ទណ្ឌកម្ម ធ្វើបាប ឬកាត់សេចក្តីទម្លាក់កំហុសលើអ្នកដទៃ ដោយសារតែខ្លួនមិនចូលចិត្ត ឬធ្លាប់មានជម្លោះជាមួយគេពីមុន ទោះបីគេធ្វើត្រូវក៏ដោយ។',
    descEn: 'Inflicting harsh penalties, denying fairness, or framing individuals simply because of personal dislike, rivalry, or old grudges.',
    dangerKm: 'បង្កើតការរើសអើង អំពើអយុត្តិធម៌ និងការសងសឹកគ្នាទៅវិញទៅមកមិនចេះចប់។',
    dangerEn: 'Spurs victimization, deep-seated resentment, and endless cycles of retaliatory conflict.',
    antidoteKm: 'ចម្រើនមេត្តាធម៌ (ការរំលត់កំហឹង), បែងចែករឿងបុគ្គល និងរឿងការងារឱ្យដាច់ពីគ្នា។',
    antidoteEn: 'Develop loving-kindness (Mettā), strictly decouple personal grievances from official duty.',
  },
  {
    id: 3,
    num: '៣',
    nameKm: 'មោហាគតិ (លម្អៀងព្រោះភាពល្ងង់ខ្លៅ & ខ្វះព័ត៌មាន)',
    nameEn: 'Bias through Delusion (Mohāgati)',
    pali: 'Mohāgati — ការលម្អៀងដោយសារភាពវង្វេង ឆោតល្ងង់ និងការមិនយល់ច្បាស់',
    icon: '🌫️',
    descKm: 'ការសម្រេចចិត្តខុសព្រោះមិនបានស្រាវជ្រាវការពិតឱ្យបានច្បាស់ ឆាប់ជឿពាក្យចចាមអារ៉ាម មិនចេះវិភាគទិន្នន័យ ឬខ្វះចំណេះដឹងក្នុងកិច្ចការនោះ។',
    descEn: 'Making erroneous verdicts through gullibility, failing to investigate facts, rushing to premature judgment on baseless rumors.',
    dangerKm: 'ធ្វើឱ្យជនស្លូតត្រង់ត្រូវរងគ្រោះដោយអយុត្តិធម៌ ខណៈដែលជនខិលខូចរួចខ្លួន។',
    dangerEn: 'Allows malicious actors to exploit misinformation while the innocent suffer wrongful harm.',
    antidoteKm: 'ចម្រើនបញ្ញា និងយោនិសោមនសិការ (ការពិចារណាដោយឧបាយប្រាជ្ញា ផ្ទៀងផ្ទាត់ភស្តុតាងឱ្យហ្មត់ចត់)។',
    antidoteEn: 'Exercise Yoniso Manasikāra (thorough analytical investigation), verify hard evidence before ruling.',
  },
  {
    id: 4,
    num: '៤',
    nameKm: 'ភយាគតិ (លម្អៀងព្រោះការភ័យខ្លាច & សម្ពាធ)',
    nameEn: 'Bias through Fear (Bhayāgati)',
    pali: 'Bhayāgati — ការលម្អៀងដោយសារខ្លាចអំណាច ខ្លាចបាត់បង់តំណែង ឬខ្លាចគ្រោះថ្នាក់',
    icon: '😨',
    descKm: 'ការមិនហ៊ាននិយាយការពិត មិនហ៊ានការពារយុត្តិធម៌ ដោយសារតែខ្លាចអំណាចរបស់អ្នកមានឥទ្ធិពល ឬខ្លាចបាត់បង់ផលប្រយោជន៍ផ្ទាល់ខ្លួន។',
    descEn: 'Abandoning justice and shielding wrongdoing due to fear of reprisal, loss of position, or intimidation from powerful figures.',
    dangerKm: 'ធ្វើឱ្យច្បាប់និងយុត្តិធម៌ក្លាយជាឧបករណ៍របស់អ្នកមានអំណាច ហើយសង្គមបាត់បង់សណ្តាប់ធ្នាប់។',
    dangerEn: 'Subverts the rule of law into an instrument of tyranny, destroying public faith in justice systems.',
    antidoteKm: 'បណ្តុះសេចក្តីក្លាហានខាងសីលធម៌ (ហិរិ-ឱត្តប្បៈ) និងមានស្មារតីទទួលខុសត្រូវខ្ពស់ចំពោះប្រវត្តិសាស្ត្រ។',
    antidoteEn: 'Strengthen moral courage, honor conscience, and place integrity above transitory comfort.',
  },
]
</script>
