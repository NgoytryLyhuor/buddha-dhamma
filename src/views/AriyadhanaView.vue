<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៧០ — អរិយទ្រព្យ ៧ ប្រការ', 'GATHA 70 — THE 7 NOBLE TREASURES') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('អរិយទ្រព្យ ៧ ៖ កំពូលទ្រព្យបរិសុទ្ធ តាមឆ្លងភពឆ្លងជាតិ', 'The 7 Noble Treasures (Ariyadhana) — Wealth Across Lifetimes') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('អរិយទ្រព្យ សំដៅលើទ្រព្យសម្បត្តិដ៏ប្រសើរបំផុតខាងផ្លូវចិត្ត ដែលចោរមិនអាចប្លន់បាន ភ្លើងមិនអាចឆេះ ទឹកមិនអាចហូរកាត់ និងស្តេចមិនអាចរឹបអូសបានឡើយ។ ទ្រព្យលោកិយដូចជា មាស ប្រាក់ ដីធ្លី និងឡានទំនើប អាចជួយយើងបានតែមួយជាតិនេះប៉ុណ្ណោះ ពេលស្លាប់ទៅ សូម្បីតែរាងកាយក៏យកទៅមិនបានដែរ។ ប៉ុន្តែអរិយទ្រព្យទាំង ៧ ប្រការនេះ នឹងចាក់ស្រែះក្នុងសន្តានចិត្ត ហើយតាមឆ្លងភពឆ្លងជាតិដូចជាស្រមោលអន្ទោលតាមប្រាណ ធានាថាមិនឱ្យធ្លាក់ទៅកាន់ភាពក្រីក្រក្នុងអបាយភូមិឡើយ។', 'Ariyadhana represents the sublime spiritual wealth that cannot be stolen by thieves, consumed by fire, swept away by floods, or confiscated by corrupt rulers. Mundane riches—gold, bank accounts, luxury estates—can merely cushion physical life until our final breath; at death, we cannot take even our own physical corpse. In contrast, the Seven Noble Treasures anchor firmly into consciousness, accompanying the soul across future lives like an inseparable shadow.') }}
    </p>

    <!-- Pali Gatha Box -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«សទ្ធាធនំ សីលធនំ ហិរិ ឱត្តប្បិយំ ធនំ, សុតធនញ្ច ចាគោ ច បញ្ញា វេ សត្តមំ ធនំ។ យស្ស ឯតា ធនា អត្ថិ ឥត្ថិយា បុរិសស្ស វា, អទលិទ្ទោតិ តំ អាហុ អមោឃំ តស្ស ជីវិតំ។»', '"The treasure of faith, virtue, moral shame, moral dread, sacred learning, generous giving, and wisdom as the seventh wealth: whoever possesses these treasures—man or woman—is declared not poor; their life is truly not in vain." — Aṅguttara Nikāya 7.6') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— ធនសូត្រ អង្គុត្តរនិកាយ សត្តកនិបាត', '— Dhana Sutta, Aṅguttara Nikāya') }}
      </p>
    </div>

    <!-- Comparative Table: Mundane vs Noble Wealth -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>⚖️</span>
        <span>{{ t('ការប្រៀបធៀប ៖ ទ្រព្យលោកិយ vs អរិយទ្រព្យ', 'Comparison: Mundane Wealth vs Noble Wealth') }}</span>
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs">
        <div class="p-3.5 rounded-xl border bg-stone-500/5 border-stone-500/15">
          <strong class="font-bold text-amber-700 dark:text-amber-300 block mb-2">🪙 {{ t('ទ្រព្យលោកិយ (មាស ប្រាក់ ដីធ្លី)', 'Mundane Riches') }}</strong>
          <ul class="space-y-1.5 text-stone-600 dark:text-stone-300 list-disc list-inside">
            <li>{{ t('អាចត្រូវចោរលួច ភ្លើងឆេះ ឬខាតបង់តាមវិបត្តិសេដ្ឋកិច្ច', 'Vulnerable to theft, fire, market crashes.') }}</li>
            <li>{{ t('បង្កើតការព្រួយបារម្ភ ការភ័យខ្លាចបាត់បង់ និងភាពលោភលន់', 'Generates anxiety, greed, fear of loss.') }}</li>
            <li>{{ t('ពេលដាច់ខ្យល់ស្លាប់ ត្រូវបន្សល់ទុកទាំងអស់ យកទៅមិនបានឡើយ', 'Left behind completely upon physical demise.') }}</li>
          </ul>
        </div>
        <div class="p-3.5 rounded-xl border bg-emerald-500/5 border-emerald-500/20">
          <strong class="font-bold text-emerald-700 dark:text-emerald-300 block mb-2">💎 {{ t('អរិយទ្រព្យ (សទ្ធា សីល បញ្ញា...)', 'Noble Spiritual Wealth') }}</strong>
          <ul class="space-y-1.5 text-stone-600 dark:text-stone-300 list-disc list-inside">
            <li>{{ t('ស្ថិតក្នុងចិត្តរឹងមាំ គ្មាននរណាអាចលួចប្លន់បានឡើយ', 'Impervious to theft, decay, or confiscation.') }}</li>
            <li>{{ t('បង្កើតសេចក្តីស្ងប់ សន្តិភាព និងសុវត្ថិភាពផ្លូវចិត្តពិតប្រាកដ', 'Generates deep tranquility and fearlessness.') }}</li>
            <li>{{ t('ឆ្លងភពឆ្លងជាតិជាមួយវិញ្ញាណ និងនាំទៅរកព្រះនិព្វាន', 'Follows the mind across rebirths into liberation.') }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- The 7 Noble Treasures Grid -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>💎</span>
        <span>{{ t('អរិយទ្រព្យទាំង ៧ ប្រការពិស្តារ', 'The 7 Noble Treasures in Detail') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="item in treasures"
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
                  <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">
                    {{ t(item.titleKm, item.titleEn) }}
                  </h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ item.pali }}</p>
                </div>
              </div>
              <span class="text-2xl">{{ item.icon }}</span>
            </div>

            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(item.descKm, item.descEn) }}
            </p>
          </div>

          <!-- Cultivation Tip -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <strong class="font-bold text-amber-700 dark:text-amber-300 block mb-0.5">
                🌱 {{ t('វិធីសន្សំទ្រព្យនេះ ៖', 'How to Amass This Wealth:') }}
              </strong>
              <span class="text-stone-600 dark:text-stone-300">{{ t(item.practiceKm, item.practiceEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const treasures = [
  {
    id: 1,
    num: '១',
    titleKm: 'សទ្ធាធនំ (ទ្រព្យគឺសេចក្តីជឿជាក់ត្រឹមត្រូវ)',
    titleEn: 'Treasure of Faith (Saddhā-dhana)',
    pali: 'Saddhā — ជំនឿប្រកបដោយបញ្ញា លើព្រះពុទ្ធ និងកម្មផល',
    icon: '✨',
    descKm: 'មិនមែនជាជំនឿខ្វាក់ខ្វល់ ឬងប់ងុលនឹងអបិយជំនឿឡើយ តែជាជំនឿរឹងមាំលើការត្រាស់ដឹងរបស់ព្រះពុទ្ធ ជឿជាក់ថាអំពើល្អផ្តល់ផលល្អ អំពើអាក្រក់ផ្តល់ផលអាក្រក់។',
    descEn: 'Not blind credulity, but lucid trust anchored in reason: conviction in the Buddha\'s awakening and the natural moral law of Kamma.',
    practiceKm: 'រឭកគុណព្រះពុទ្ធជារៀងរាល់ថ្ងៃ និងរស់នៅដោយជឿជាក់លើលទ្ធផលនៃអំពើផ្ទាល់ខ្លួន។',
    practiceEn: 'Recollect the Buddha\'s virtues daily and stay anchored in personal moral accountability.',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'សីលធនំ (ទ្រព្យគឺវិន័យ និងសីលធម៌ស្អាត)',
    titleEn: 'Treasure of Moral Virtue (Sīla-dhana)',
    pali: 'Sīla — ការសង្រួមកាយវាចា មិនបៀតបៀនអ្នកដទៃ',
    icon: '🛡️',
    descKm: 'ជាគ្រឿងអលង្ការដ៏វិសេសដែលធ្វើឱ្យអ្នកពាក់មានតម្លៃ គ្មានក្លិនស្អុយនៃទោសកំហុស។ សីល ៥ បរិសុទ្ធ គឺជាប្រភពនៃភាពកក់ក្តៅ និងការមិនមានវិប្បដិសារី។',
    descEn: 'The supreme ornament of human dignity: pure conduct of body and speech that harms no being and leaves no trace of remorse.',
    practiceKm: 'រក្សាសីល ៥ ឱ្យខ្ជាប់ខ្ជួនក្នុងជីវិតការងារ និងទំនាក់ទំនងគ្រួសារជានិច្ច។',
    practiceEn: 'Uphold the five precepts strictly in daily business and family affairs.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'ហិរិធនំ (ទ្រព្យគឺសេចក្តីខ្មាសបាប)',
    titleEn: 'Treasure of Moral Shame (Hiri-dhana)',
    pali: 'Hiri — ការខ្មាសអៀនចំពោះអំពើទុច្ចរិតខាងក្នុង',
    icon: '🪞',
    descKm: 'សេចក្តីខ្មាសអៀនខ្លួនឯង មិនព្រមប្រព្រឹត្តអំពើថោកទាប បោកប្រាស់ ឬអយុត្តិធម៌ សូម្បីតែគ្មាននរណាម្នាក់ដឹង ឬឃើញក៏ដោយ ព្រោះគោរពតម្លៃខ្លួនឯង។',
    descEn: 'Inward self-respect that recoils from committing degraded, deceptive, or cruel deeds even when completely unseen by others.',
    practiceKm: 'ឆ្លុះកញ្ចក់មើលចិត្តខ្លួនឯងមុននឹងធ្វើ ឬនិយាយអ្វីមួយដែលប៉ះពាល់ដល់អ្នកដទៃ។',
    practiceEn: 'Examine your internal motives honestly, rejecting thoughts that compromise honor.',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'ឱត្តប្បធនំ (ទ្រព្យគឺសេចក្តីខ្លាចបាប)',
    titleEn: 'Treasure of Moral Dread (Ottappa-dhana)',
    pali: 'Ottappa — ការភ័យខ្លាចចំពោះផលវិបាកនៃអំពើអាក្រក់',
    icon: '⚡',
    descKm: 'ការភ័យខ្លាចចំពោះទោសទណ្ឌ ផលវិបាកនៃកម្មអាក្រក់ និងការធ្លាក់ចុះក្នុងអបាយភូមិ ដែលជាកម្លាំងរារាំងមិនឱ្យហ៊ានប្រព្រឹត្តអំពើបាប។',
    descEn: 'Wholesome dread of the inevitable karmic consequences, penalties, and suffering resulting from wrongdoing.',
    practiceKm: 'រឭកជានិច្ចថា គ្មានអំពើបាបណាដែលគេចផុតពីកញ្ចក់នៃកម្មផលបានឡើយ។',
    practiceEn: 'Remember that no unwholesome deed escapes the inescapable mirror of karmic fruition.',
  },
  {
    id: 5,
    num: '៥',
    titleKm: 'សុតធនំ (ទ្រព្យគឺការស្តាប់ & ចំណេះដឹងធម៌)',
    titleEn: 'Treasure of Sacred Learning (Suta-dhana)',
    pali: 'Suta — ការចេះដឹង ការស្តាប់ច្រើន និងការចងចាំធម៌',
    icon: '📜',
    descKm: 'ការមានចំណេះដឹងជ្រៅជ្រះទាំងផ្លូវលោក និងផ្លូវធម៌ ការបានស្តាប់បានអានច្រើន ធ្វើឱ្យមានប្រាជ្ញាយល់ដឹងខុសត្រូវ និងមិនងាយចាញ់បោកគេ។',
    descEn: 'Deep learning cultivated through attentive listening, contemplation, and memorization of righteous wisdom.',
    practiceKm: 'អានព្រះត្រៃបិដក ស្តាប់ធម៌ទេសនា និងសាកសួរដេញដោលជាមួយបណ្ឌិត។',
    practiceEn: 'Regularly read scriptures, listen to Dhamma expositions, and reflect deeply.',
  },
  {
    id: 6,
    num: '៦',
    titleKm: 'ចាគធនំ (ទ្រព្យគឺការលះបង់ & ចិត្តទូលាយ)',
    titleEn: 'Treasure of Generous Relinquishment (Cāga-dhana)',
    pali: 'Cāga — ការលះបង់សេចក្តីកំណាញ់ ព្រមទាំងការអភ័យទោស',
    icon: '🤲',
    descKm: 'ចិត្តសប្បុរស ចូលចិត្តជួយសង្គ្រោះអ្នកដទៃ មិនជាប់ជំពាក់នឹងទ្រព្យសម្បត្តិហួសហេតុ និងមានចិត្តទូលាយក្នុងការអភ័យទោសដល់អ្នកដែលធ្លាប់ធ្វើខុស។',
    descEn: 'Liberality of heart: joy in sharing wealth, loosening attachment to possessions, and readily pardoning transgressors.',
    practiceKm: 'ទម្លាប់ឱ្យទានជាប្រចាំ និងរៀនលះបង់កំហឹងគំនុំចេញពីបេះដូង។',
    practiceEn: 'Practice sharing resources regularly and intentionally release grievances.',
  },
  {
    id: 7,
    num: '៧',
    titleKm: 'បញ្ញាធនំ (ទ្រព្យគឺប្រាជ្ញាភ្លឺស្វាង)',
    titleEn: 'Treasure of Transcendent Wisdom (Paññā-dhana)',
    pali: 'Paññā — ការយល់ច្បាស់នូវអនិច្ចំ ទុក្ខំ អនត្តា និងអរិយសច្ច',
    icon: '🪷',
    descKm: 'កំពូលនៃអរិយទ្រព្យទាំងអស់ គឺប្រាជ្ញាដែលយល់ធ្លុះនូវសេចក្តីពិតនៃធម្មជាតិ ដឹងការកើតរលត់ និងជាឧបករណ៍តែមួយគត់ដែលអាចកាត់ផ្តាច់ឫសគល់នៃកិលេសបាន។',
    descEn: 'The supreme crown of all spiritual riches: insight piercing impermanence, suffering, non-self, and the Four Truths, unlocking final liberation.',
    practiceKm: 'ចម្រើនវិបស្សនាកម្មដ្ឋាន ពិនិត្យមើលរូបនិងនាមក្នុងបច្ចុប្បន្នកាលជានិច្ច។',
    practiceEn: 'Cultivate Vipassanā, observing the arising and dissolving of mind and matter.',
  },
]
</script>
