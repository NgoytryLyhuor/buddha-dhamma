<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៥២ — លោកធម៌ ៨ ប្រការ', 'GATHA 52 — THE 8 WORLDLY WINDS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('លោកធម៌ ៨ ៖ សិល្បៈនៃការតម្កល់ចិត្តមិនឱ្យញាប់ញ័រ', 'The 8 Worldly Winds (Lokadhamma) & Unshakable Mind') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('«លោកធម៌» សំដៅលើធម្មជាតិប្រចាំលោកដែលសត្វលោកទាំងអស់ មិនថាជាស្តេច មហាសេដ្ឋី ឬអ្នកក្រីក្រឡើយ សុទ្ធតែត្រូវប្រឈមមុខជៀសមិនផុត។ ព្រះសម្មាសម្ពុទ្ធទ្រង់ត្រាស់សម្ដែងក្នុងលោកធម្មសូត្រ (AN 8.5) ថា លោកធម៌មាន ៨ ប្រការ បែងចែកជា ៤ គូ ៖ មានលាភ-បាត់លាភ, មានយស-បាត់យស, មានការសរសើរ-មានការនិន្ទា, មានសុខ-មានទុក្ខ។ បុគ្គលដែលយល់ច្បាស់ពីលោកធម៌ នឹងមានចិត្តរឹងមាំដូចផ្ទាំងថ្មភ្នំ មិនរំជើបរំជួលដោយខ្យល់ព្យុះឡើយ។', 'Lokadhamma represents the eight fluctuating conditions intrinsic to worldly existence that touch every being without exception. In the Lokadhamma Sutta (AN 8.5), the Buddha revealed these as four complementary pairs: Gain and Loss, Fame and Disrepute, Praise and Blame, Pleasure and Pain. One who understands their impermanence stands unshakable like a solid mountain granite in the gale.') }}
    </p>

    <!-- The Verse Quote from Dhammapada 81 -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«សេលោ យថា ឯកឃនោ វាតេន ន សមីរតិ, ឯវំ និន្ទាបសំសាសុ ន សម្មិញ្ជន្តិ បណ្ឌិតា។»', '"Just as a solid mass of rock is not shaken by the wind, even so neither praise nor blame moves the wise." — Dhammapada 81') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— ព្រះធម្មបទ គាថា ៨១', '— Dhammapada Verse 81') }}
      </p>
    </div>

    <!-- 4 Pairs of Lokadhamma Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>⚖️</span>
        <span>{{ t('លោកធម៌ទាំង ៤ គូ (គាប់ចិត្ត vs មិនគាប់ចិត្ត)', 'The 4 Contrasting Pairs of Lokadhamma') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="pair in lokadhammaPairs"
          :key="pair.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <span class="text-xs font-mono font-bold uppercase tracking-wider text-amber-500">{{ pair.pairName }}</span>
              <span class="text-2xl">{{ pair.icon }}</span>
            </div>

            <!-- Positive Side -->
            <div class="mt-3 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
              <div class="flex items-center justify-between">
                <strong class="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  + {{ t(pair.posKm, pair.posEn) }}
                </strong>
                <span class="text-[10px] font-mono text-stone-500">{{ pair.posPali }}</span>
              </div>
              <p class="text-xs mt-1 text-stone-600 dark:text-stone-300 leading-relaxed">
                {{ t(pair.posDescKm, pair.posDescEn) }}
              </p>
            </div>

            <!-- Negative Side -->
            <div class="mt-2.5 p-3 rounded-lg bg-rose-500/5 border border-rose-500/20">
              <div class="flex items-center justify-between">
                <strong class="text-xs sm:text-sm font-bold text-rose-600 dark:text-rose-400">
                  - {{ t(pair.negKm, pair.negEn) }}
                </strong>
                <span class="text-[10px] font-mono text-stone-500">{{ pair.negPali }}</span>
              </div>
              <p class="text-xs mt-1 text-stone-600 dark:text-stone-300 leading-relaxed">
                {{ t(pair.negDescKm, pair.negDescEn) }}
              </p>
            </div>
          </div>

          <!-- Mindful antidote -->
          <div class="mt-3 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)', color: 'var(--ink-muted)' }">
            <span class="text-amber-500 font-bold">💡 {{ t('គន្លឹះដោះស្រាយ ៖ ', 'Antidote : ') }}</span>
            {{ t(pair.antidoteKm, pair.antidoteEn) }}
          </div>
        </div>
      </div>
    </div>

    <!-- Comparison: Worldling vs Noble Disciple -->
    <div class="card-paper p-6 md:p-8 rounded-xl border mt-8">
      <p class="chapter-label">{{ t('ការប្រៀបធៀបផ្លូវចិត្ត', 'PSYCHOLOGICAL REACTION') }}</p>
      <h3 class="font-display text-xl font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
        {{ t('ភាពខុសគ្នារវាង «បុថុជ្ជន» និង «ព្រះអរិយបុគ្គល» ចំពោះលោកធម៌', 'Worldling vs Noble Disciple When Touched by Lokadhamma') }}
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        <div class="p-4 rounded-xl border bg-rose-500/5 border-rose-500/20">
          <h4 class="font-bold text-sm text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
            <span>👤</span>
            <span>{{ t('បុថុជ្ជនមិនបានស្តាប់ធម៌ (Assutavā Puthujjana)', 'Untrained Worldling') }}</span>
          </h4>
          <ul class="space-y-2 mt-3 text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            <li>• <strong>ពេលបានលាភ យស សរសើរ សុខ ៖</strong> កើតសេចក្តីត្រេកត្រអាល ស្រវឹងក្នុងលាភ អួតអាង កើតមានអស្មិមានះ (មើលងាយអ្នកដទៃ)។</li>
            <li>• <strong>ពេលបាត់លាភ អាប់យស និន្ទា ទុក្ខ ៖</strong> កើតសេចក្តីតូចចិត្ត សោកសៅ ខឹងសម្បារ ឬធ្លាក់ទឹកចិត្តរហូតចង់បោះបង់ជីវិត។</li>
            <li>• <strong>លទ្ធផល ៖</strong> ជាប់ជំពាក់ក្នុងសេចក្តីត្រេកអរ (អភិជ្ឈា) និងសេចក្តីថ្នាំងថ្នាក់ (ទោមនស្ស) មិនអាចរួចផុតពីសង្សារវដ្តបានឡើយ។</li>
          </ul>
        </div>

        <div class="p-4 rounded-xl border bg-emerald-500/5 border-emerald-500/20">
          <h4 class="font-bold text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
            <span>🧘</span>
            <span>{{ t('ព្រះអរិយសាវ័កអ្នកមានប្រាជ្ញា (Sutavā Ariyasāvaka)', 'Wise Noble Disciple') }}</span>
          </h4>
          <ul class="space-y-2 mt-3 text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            <li>• <strong>ពិចារណាឃើញតាមពិត ៖</strong> <em>«លោកធម៌ទាំងនេះ មិនទៀងទាត់ (អនិច្ចំ) ជាទុក្ខ (ទុក្ខំ) មានសេចក្តីប្រែប្រួលជាធម្មតា (វិបរិណាមធម្មំ)»</em>។</li>
            <li>• <strong>ពេលកើតឡើង ៖</strong> មិនសប្បាយរហូតដល់ភ្លេចខ្លួន ហើយក៏មិនសោកសៅខូចចិត្តរហូតបាត់បង់សតិ។</li>
            <li>• <strong>លទ្ធផល ៖</strong> ចិត្តមានឧបេក្ខាខ្ពស់ រួចផុតពីចំណងនៃលោកធម៌ ឈានទៅកាន់ព្រះនិព្វានដ៏ស្ងប់ក្សេមក្សាន្ត។</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const lokadhammaPairs = [
  {
    id: 'gain-loss',
    pairName: 'គូទី ១ ៖ លាភ & អលាភ',
    icon: '💰',
    posKm: 'បានលាភ (ទ្រព្យធន & ផលប្រយោជន៍)',
    posEn: 'Gain (Lābha)',
    posPali: 'Lābha',
    posDescKm: 'ការទទួលបានប្រាក់កាស ទ្រព្យសម្បត្តិ ឬផលប្រយោជន៍ហូរចូល។',
    posDescEn: 'Acquisition of wealth, revenue, profits, and material benefits.',
    negKm: 'បាត់បង់លាភ (ខាតបង់ទ្រព្យ)',
    negEn: 'Loss (Alābha)',
    negPali: 'Alābha',
    negDescKm: 'ការខាតបង់ប្រាក់កាស បាត់បង់ទ្រព្យសម្បត្តិ ឬជួបវិបត្តិហិរញ្ញវត្ថុ។',
    negDescEn: 'Financial losses, property destruction, and vanishing capital.',
    antidoteKm: 'ទ្រព្យសម្បត្តិគ្រាន់តែជារបស់ខ្ចីពិភពលោកបណ្តោះអាសន្នប៉ុណ្ណោះ ពេលស្លាប់មិនអាចយកទៅបានឡើយ ក្រៅពីបុណ្យនិងបាប។',
    antidoteEn: 'Wealth is merely a temporary worldly loan; only merits and demerits follow us past mortality.'
  },
  {
    id: 'fame-disrepute',
    pairName: 'គូទី ២ ៖ យស & អយស',
    icon: '👑',
    posKm: 'មានយស (កិត្តិយស & បរិវារ)',
    posEn: 'Fame & Prestige (Yasa)',
    posPali: 'Yasa',
    posDescKm: 'ការឡើងបុណ្យស័ក្តិ មានកេរ្តិ៍ឈ្មោះល្បីល្បាញ មានអ្នកស្គាល់ច្រើន។',
    posDescEn: 'Promotion in rank, elevation of status, fame, and wide following.',
    negKm: 'បាត់យស (ធ្លាក់ស័ក្តិ & អាប់ឱន)',
    negEn: 'Disrepute & Obscurity (Ayasa)',
    negPali: 'Ayasa',
    negDescKm: 'ការធ្លាក់ពីតំណែង បាត់បង់អំណាច គ្មានអ្នកអើពើ។',
    negDescEn: 'Demotion, obscurity, loss of position, being forgotten or abandoned.',
    antidoteKm: 'កិត្តិយស និងតំណែង ប្រៀបដូចជាស្រមោលអណ្តែតលើទឹក មិនមែនជាខ្លឹមសារពិតនៃជីវិតឡើយ។',
    antidoteEn: 'Titles and prestige are ripples on water; moral character is the only genuine sanctuary.'
  },
  {
    id: 'praise-blame',
    pairName: 'គូទី ៣ ៖ សរសើរ & និន្ទា',
    icon: '🗣️',
    posKm: 'ការសរសើរ (ពាក្យលើកតម្កើង)',
    posEn: 'Praise (Pasaṁsā)',
    posPali: 'Pasaṁsā',
    posDescKm: 'ការទទួលបានការកោតសរសើរ ស្ញប់ស្ញែង និងពាក្យពិរោះផ្អែមល្ហែមពីអ្នកដទៃ។',
    posDescEn: 'Receiving approval, praise, flattery, and enthusiastic accolades.',
    negKm: 'ការនិន្ទា (ពាក្យបង្អាប់ & រិះគន់)',
    negEn: 'Blame & Gossip (Nindā)',
    negPali: 'Nindā',
    negDescKm: 'ការត្រូវគេរិះគន់ និន្ទាឈ្នានីស និយាយដើមបង្ខូចឈ្មោះ។',
    negDescEn: 'Facing criticism, slander, gossip, and unfair condemnation.',
    antidoteKm: 'គ្មានមនុស្សណាម្នាក់ក្នុងលោកដែលមិនដែលត្រូវគេនិន្ទាឡើយ សូម្បីតែព្រះពុទ្ធក៏មានគេនិន្ទាដែរ។ សំខាន់គឺមនសិការរបស់យើងស្អាតស្អំ។',
    antidoteEn: 'There has never been anyone completely free from blame, not even the Buddha. What matters is pure conscience.'
  },
  {
    id: 'pleasure-pain',
    pairName: 'គូទី ៤ ៖ សុខ & ទុក្ខ',
    icon: '🎭',
    posKm: 'សេចក្តីសុខ (សុខកាយ សុខចិត្ត)',
    posEn: 'Pleasure (Sukha)',
    posPali: 'Sukha',
    posDescKm: 'អារម្មណ៍ស្រណុកស្រួល ពេញចិត្ត សុខសប្បាយក្នុងជីវិត។',
    posDescEn: 'Physical comfort, bodily health, mental ease, and emotional joy.',
    negKm: 'សេចក្តីទុក្ខ (ទុក្ខវេទនា & ជំងឺ)',
    negEn: 'Pain & Suffering (Dukkha)',
    negPali: 'Dukkha',
    negDescKm: 'ការឈឺចុកចាប់ ជម្ងឺរាងកាយ ឬសេចក្តីខូចចិត្តព្រាត់ប្រាស។',
    negDescEn: 'Bodily agony, chronic disease, bereavement, and mental grief.',
    antidoteKm: 'សុខនិងទុក្ខកើតឡើងហើយរលត់ទៅជាធម្មតា កុំជាប់ជំពាក់នឹងសុខ ហើយកុំត្អូញត្អែរនឹងទុក្ខ ចូរពិនិត្យដោយសតិ។',
    antidoteEn: 'Pleasure and pain arise and dissolve impermanently; observe both mindfully without attachment.'
  }
]
</script>
