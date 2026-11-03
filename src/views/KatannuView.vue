<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៧១ — កតញ្ញូតាធម៌ & គុណមាតាបិតា', 'GATHA 71 — FILIAL PIETY & PARENTAL REPAYMENT') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('កតញ្ញូតាធម៌ ៖ គុណូបការៈមាតាបិតា & វិធីសងគុណដ៏ឧត្តមបំផុត', 'Filial Piety (Kataññutā) & The Ultimate Repayment to Parents') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('កតញ្ញូតាធម៌ គឺជាធម៌គ្រឹះនៃមនុស្សជាតិ និងជាសញ្ញាសម្គាល់នៃសប្បុរសជនពិតប្រាកដ។ នៅក្នុងពុទ្ធសាសនា ព្រះសម្មាសម្ពុទ្ធទ្រង់លើកតម្កើងមាតាបិតាថាជា «ព្រះព្រហ្ម» ជា «ព្រះគ្រូដើម» និងជា «ព្រះអរហន្តប្រចាំផ្ទះ» របស់កូនៗ ពីព្រោះលោកទាំងពីរមានព្រហ្មវិហារធម៌ពេញបរិបូរណ៍ បានបីបាច់ចិញ្ចឹម បង្ហាត់បង្រៀន និងលះបង់គ្រប់បែបយ៉ាងដើម្បីជីវិតកូន។ ក្នុងកតញ្ញូសូត្រ ព្រះអង្គត្រាស់ថា សូម្បីតែកូនលីឪពុកម្តាយលើស្មាទាំងសងខាងអស់ ១០០ ឆ្នាំ ក៏នៅតែសងគុណលោកមិនទាន់រួចនៅឡើយ លើកលែងតែជួយដាស់លោកឱ្យស្គាល់ធម៌ សីល និងបញ្ញាប៉ុណ្ណោះ។', 'Filial piety (Kataññutā) is the indispensable cornerstone of noble humanity and the singular hallmark of a virtuous person. In Buddhist teaching, parents are revered as the "Brahmās", "First Teachers", and "Living Arahants" of the household, bestowing unconditional metta and tireless sacrifice upon their offspring. In the Kataññū Sutta (AN 2.32), the Buddha declared that even carrying one\'s parents upon one\'s shoulders for a century cannot exhaust the maternal and paternal debt, unless one anchors them firmly in faith, virtue, generosity, and wisdom.') }}
    </p>

    <!-- Pali Gatha Box -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ព្រហ្មាតិ មាតាបិតរោ បុព្វាចរិយាតិ វុច្ចរេ, អាហុនេយ្យា ច បុត្តានំ បជាយ អនុកម្បកា។»', '"Parents are called the Brahmās, the first teachers, and those worthy of veneration by their children, because they have deep compassion for their offspring." — Sabrahmaka Sutta (AN 4.63)') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— សព្រហ្មកសូត្រ អង្គុត្តរនិកាយ ចតុក្កនិបាត', '— Sabrahmaka Sutta, Aṅguttara Nikāya') }}
      </p>
    </div>

    <!-- The 4 Sacred Titles of Parents -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>👑</span>
        <span>{{ t('ឋានៈដ៏ពិសិដ្ឋទាំង ៤ របស់មាតាបិតាក្នុងផ្ទះ', 'The 4 Sacred Household Roles of Parents') }}</span>
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="card-paper p-5 rounded-xl border">
          <div class="flex items-center gap-3">
            <span class="text-3xl">🪷</span>
            <div>
              <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">
                {{ t('១. ជាព្រះព្រហ្មរបស់កូន (Brahmā)', '1. The Brahmās of the Home') }}
              </h4>
              <p class="text-[11px] font-mono text-stone-500">ព្រហ្មាតិ មាតាបិតរោ</p>
            </div>
          </div>
          <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('មានព្រហ្មវិហារធម៌ ៤ ពេញលេញ ៖ មេត្តា (ស្រឡាញ់ស្មោះ), ករុណា (អាណិតជួយពេលកូនឈឺ), មុទិតា (ត្រេកអរពេលកូនជោគជ័យ), និងឧបេក្ខា (ទុកចិត្តពេលកូនរៀបការមានគ្រួសារ)។', 'Endowed with the four divine abodes: loving-kindness when little, compassion in sickness, altruistic joy in success, and equanimity when grown.') }}
          </p>
        </div>

        <div class="card-paper p-5 rounded-xl border">
          <div class="flex items-center gap-3">
            <span class="text-3xl">📖</span>
            <div>
              <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">
                {{ t('២. ជាគ្រូដើមរបស់កូន (Pubbācariya)', '2. The First Teachers') }}
              </h4>
              <p class="text-[11px] font-mono text-stone-500">បុព្វាចរិយាតិ វុច្ចរេ</p>
            </div>
          </div>
          <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ជាគ្រូបង្រៀនទីមួយដែលបង្រៀនកូនឱ្យចេះនិយាយ ចេះញ៉ាំបាយ ចេះដើរ ចេះសំពះ ស្គាល់អំពើល្អនិងអាក្រក់ មុនពេលកូនចូលសាលារៀន។', 'The foundational instructors teaching child speech, walking, nourishment, manners, morality, and discernment long before any school.') }}
          </p>
        </div>

        <div class="card-paper p-5 rounded-xl border">
          <div class="flex items-center gap-3">
            <span class="text-3xl">☀️</span>
            <div>
              <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">
                {{ t('៣. ជាទេវតាដើមរបស់កូន (Pubbadeva)', '3. The First Deities') }}
              </h4>
              <p class="text-[11px] font-mono text-stone-500">បុព្វទេវាតិ</p>
            </div>
          </div>
          <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ជាទេវតាការពារដែលនៅក្បែរកូនជានិច្ច មិនដែលបោះបង់កូនចោលក្នុងគ្រាលំបាក និងតែងតែប្រាថ្នាឱ្យកូនបានជួបតែសេចក្តីសុខ។', 'Guardian guardian spirits watching unceasingly over the child\'s welfare, ready to sacrifice comfort for their safety.') }}
          </p>
        </div>

        <div class="card-paper p-5 rounded-xl border">
          <div class="flex items-center gap-3">
            <span class="text-3xl">🙏</span>
            <div>
              <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">
                {{ t('៤. ជាព្រះអរហន្តរបស់កូន (Āhuneyya)', '4. Worthy of Highest Worship') }}
              </h4>
              <p class="text-[11px] font-mono text-stone-500">អាហុនេយ្យា ច បុត្តានំ</p>
            </div>
          </div>
          <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ជាបុគ្គលគួរដល់ការបូជា គួរទទួលនូវការគោរព គ្រឿងសក្ការៈ និងការបម្រើផ្គត់ផ្គង់ខ្ពស់បំផុតក្នុងគ្រួសារ មិនខុសពីព្រះអរហន្តឡើយ។', 'Worthy of unconditional reverence, care, and supreme offerings within the household like genuine saints.') }}
          </p>
        </div>
      </div>
    </div>

    <!-- The 4 Supreme Ways to Repay Parental Debt (Kataññū Sutta) -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🏆</span>
        <span>{{ t('វិធីសងគុណ ៤ យ៉ាង ដើម្បីឱ្យរួចបំណុលគុណមាតាបិតា', 'The 4 Supreme Ways to Fully Repay Parental Debt') }}</span>
      </h3>
      <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ការផ្គត់ផ្គង់បាយទឹក ផ្ទះសម្បែង និងលុយកាក់ គ្រាន់តែជាការសងគុណខាងរូបកាយប៉ុណ្ណោះ។ ព្រះពុទ្ធទ្រង់ត្រាស់ថា ការសងគុណពិតប្រាកដដែលធ្វើឱ្យរួចបំណុលគុណទាំងស្រុង គឺការជួយស្រោចស្រង់ផ្លូវចិត្តរបស់លោក ៖', 'Providing food, comfortable lodging, and monthly stipends repays only material care. The Buddha revealed that absolute spiritual repayment requires guiding parents to transcendent refuge:') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="item in repayments"
          :key="item.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                {{ item.num }}
              </span>
              <span class="text-2xl">{{ item.icon }}</span>
            </div>

            <div class="mt-3">
              <h4 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
                {{ t(item.titleKm, item.titleEn) }}
              </h4>
              <p class="text-xs mt-1 text-rose-600 dark:text-rose-400 font-medium">
                {{ t(item.problemKm, item.problemEn) }}
              </p>
              <p class="text-xs sm:text-sm mt-2 text-stone-600 dark:text-stone-300 leading-relaxed">
                {{ t(item.solutionKm, item.solutionEn) }}
              </p>
            </div>
          </div>

          <div class="mt-3 pt-3 border-t text-xs text-stone-500 dark:text-stone-400 italic">
            {{ t(item.quoteKm, item.quoteEn) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const repayments = [
  {
    id: 1,
    num: '១',
    titleKm: 'បណ្តុះសទ្ធា (សទ្ធាសម្បទា)',
    titleEn: 'Establish in Faith (Saddhā)',
    problemKm: 'បើមាតាបិតាមិនទាន់មានជំនឿលើព្រះធម៌ ឬងប់ងុលនឹងអបិយជំនឿខុសឆ្គង',
    problemEn: 'If parents lack faith in the Dhamma or are entangled in superstitions',
    solutionKm: 'កូនត្រូវរកវិធីទន់ភ្លន់ នាំលោកឱ្យស្គាល់ព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ និងច្បាប់កម្មផល ឱ្យមានជំនឿរឹងមាំលើអំពើល្អ។',
    solutionEn: 'Gently guide them to understand the Triple Gem and moral causality, instilling unwavering confidence in goodness.',
    quoteKm: '«អស្សទ្ធេ សទ្ធាសម្បទាយ សមាទបេតិ...»',
    quoteEn: 'Inspiring faith where faith is lacking.',
    icon: '✨',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'បណ្តុះសីលធម៌ (សីលសម្បទា)',
    titleEn: 'Establish in Moral Virtue (Sīla)',
    problemKm: 'បើមាតាបិតាមានទម្លាប់ខុសឆ្គង ដូចជាផឹកស្រា លេងល្បែង ឬសម្លាប់សត្វ',
    problemEn: 'If parents indulge in harmful habits like alcohol, gambling, or taking life',
    solutionKm: 'កូនត្រូវជួយរំឭក ដាស់តឿនដោយក្តីគោរព និងលើកទឹកចិត្តឱ្យលោកសមាទានសីល ៥ ឬសីល ៨ ដើម្បីការពារលោកកុំឱ្យធ្លាក់នរក។',
    solutionEn: 'Respectfully encourage them to abandon destructive vices and take refuge in pure precepts, shielding them from rebirth in misery.',
    quoteKm: '«ទុស្សីលេ សីលសម្បទាយ សមាទបេតិ...»',
    quoteEn: 'Anchoring them in moral virtue.',
    icon: '🛡️',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'បណ្តុះចិត្តទូលាយ (ចាគសម្បទា)',
    titleEn: 'Establish in Generosity (Cāga)',
    problemKm: 'បើមាតាបិតាមានចិត្តកំណាញ់ស្វិតស្វាញ មិនហ៊ានចែករំលែកទាន',
    problemEn: 'If parents are overly stingy and anxious about parting with wealth',
    solutionKm: 'កូនត្រូវជួយនាំលោកឱ្យចេះធ្វើទាន រីករាយក្នុងការចែករំលែក និងលះបង់សេចក្តីស្វិតស្វាញ ដើម្បីសន្សំស្បៀងឆ្លងភព។',
    solutionEn: 'Assist them in tasting the joy of sharing and releasing attachments, accumulating wholesome provisions for life hereafter.',
    quoteKm: '«មច្ឆរិយេ ចាគសម្បទាយ សមាទបេតិ...»',
    quoteEn: 'Inspiring generosity where stinginess resides.',
    icon: '🤲',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'បណ្តុះបញ្ញា (បញ្ញាសម្បទា)',
    titleEn: 'Establish in Wisdom (Paññā)',
    problemKm: 'បើមាតាបិតាមានចិត្តវង្វេង ខ្វះការពិចារណា ឬងាយឆេវឆាវ',
    problemEn: 'If parents suffer from mental confusion, anxiety, or ignorance of truth',
    solutionKm: 'កូនត្រូវទិញវិទ្យុធម៌ ជូនសៀវភៅធម៌ ឬបើកធម៌ទេសនាល្អៗឱ្យលោកស្តាប់ជាប្រចាំ ដើម្បីឱ្យចិត្តលោកភ្លឺថ្លា និងស្ងប់ស្ងាត់។',
    solutionEn: 'Provide Dhamma audios, books, and discuss gentle truths so their twilight years are blessed with tranquil, illuminating insight.',
    quoteKm: '«ទុប្បញ្ញេ បញ្ញាសម្បទាយ សមាទបេតិ...»',
    quoteEn: 'Cultivating clear wisdom and peaceful understanding.',
    icon: '🪷',
  },
]
</script>
