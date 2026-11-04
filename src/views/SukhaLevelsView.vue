<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🪜 {{ t('មជ្ឈិមនិកាយ មជ្ឈិមបណ្ណាសក · ពហុវេទនិយសូត្រ (MN 59)', 'Majjhima Nikāya 59 · Bahuvedanīya Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('សុខ ៤ ថ្នាក់ក្នុងព្រះពុទ្ធសាសនា (ពីកាមសុខ ដល់ និព្វាន)', 'The 4 Ascending Stages of Happiness') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'មនុស្សទូទៅស្គាល់តែ «កាមសុខ» គឺសេចក្ដីសុខពីការសោយទ្រព្យសម្បត្តិ ម្ហូបឆ្ងាញ់ និងការកម្សាន្ត ដែលជាសុខជំពាក់និងមិនទៀង។ ព្រះសម្មាសម្ពុទ្ធបានបង្ហាញនូវជណ្ដើរសេចក្ដីសុខ ៤ ថ្នាក់ ដែលកាន់តែខ្ពស់ កាន់តែស្ងប់ និងកាន់តែមានសេរីភាពពិតប្រាកដ រហូតដល់ «និព្វានសុខ» ដែលជាកំពូលសុខផុតទុក្ខ។',
            'Worldly mortals only know sensual pleasure (Kāma-sukha)—tied to wealth, sensory indulgence, and entertainment—which is fleeting and burdened with anxiety. The Buddha mapped out four ascending stages of happiness, each exponentially purer and freer, culminating in the unconditioned bliss of Nibbāna.'
          ) }}
        </p>
      </div>
    </section>

    <!-- 4 Stages Grid -->
    <section class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="s in sukhaStages"
          :key="s.id"
          class="card-paper p-6 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ s.icon }}
              </span>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold"
                    :class="s.badgeClass">
                {{ t(s.stageK, s.stageE) }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ t(s.titleK, s.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-3" :style="{ color: 'var(--accent)' }">
              {{ s.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(s.descK, s.descE) }}
            </p>

            <div class="p-3.5 rounded-2xl border space-y-1.5 text-xs mb-3"
                 :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
              <span class="font-semibold text-amber-600">⚖️ {{ t('លក្ខណៈសម្គាល់៖', 'Key Nature:') }}</span>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(s.natureK, s.natureE) }}</p>
            </div>
          </div>

          <div class="p-3 rounded-xl text-xs font-semibold flex items-center gap-1.5"
               :class="s.footerClass">
            <span>✨ {{ t('កម្រិតសេរីភាព៖ ', 'Freedom Level: ') }}</span>
            <span>{{ t(s.freedomK, s.freedomE) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Dhammapada Verse -->
    <section class="card-paper p-6 sm:p-8 space-y-3 border text-center max-w-2xl mx-auto"
             :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
      <span class="text-3xl">🕊️</span>
      <h3 class="text-lg font-bold font-serif" :style="{ color: 'var(--ink)' }">
        {{ t('ធម្មបទគាថា (Dhammapada Verse 204)', 'Dhammapada Verse 204') }}
      </h3>
      <p class="text-sm font-serif italic text-amber-600 mb-1">
        « អាហរោគ្យបរមា លាភា, សន្តុដ្ឋី បរមំ ធនំ, វិស្សាសបរមា ញាតិ, និព្វានំ បរមំ សុខំ »
      </p>
      <p class="text-xs sm:text-sm leading-relaxed font-serif" :style="{ color: 'var(--ink-muted)' }">
        {{ t(
          '« ការមិនមានរោគ ជាលាភដ៏ឧត្តម, សេចក្ដីស្កប់ស្កល់ ជាទ្រព្យដ៏ប្រសើរ, ភាពស្មោះត្រង់ស្និទ្ធស្នាល ជាញាតិដ៏ខ្ពង់ខ្ពស់, ព្រះនិព្វាន ជាសេចក្ដីសុខដ៏កំពូល។ »',
          '"Health is the supreme gain, contentment the supreme wealth, the trustworthy are the supreme kin, and Nibbāna is the supreme bliss."'
        ) }}
      </p>
    </section>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const sukhaStages = [
  {
    id: 'kamasukha',
    icon: '🛍️',
    stageK: 'ថ្នាក់ទី ១ (សុខកម្រិតបឋម)',
    stageE: 'Stage 1: Sensory Pleasure',
    badgeClass: 'text-amber-600 bg-amber-100 dark:bg-amber-950/40',
    titleK: '១. កាមសុខ (សេចក្ដីសុខពីកាមគុណ ៥)',
    titleE: '1. Kāma-Sukha (Sensual Pleasure)',
    pali: 'Kāmasukhaṁ',
    descK: 'សេចក្ដីសុខដែលកើតពីការឃើញរូបល្អ ឮសំឡេងពិរោះ ធុំក្លិនក្រអូប ញ៉ាំអាហារឆ្ងាញ់ ប៉ះពាល់ទន់ល្មើយ និងការមានលុយទិញសម្ភារៈនិយម។',
    descE: 'Pleasure derived from agreeable sights, sounds, scents, flavors, physical touches, and consumer luxury.',
    natureK: 'ជាសុខពឹងផ្អែកលើវត្ថុខាងក្រៅ មិនទៀងទាត់ កាលណាបាត់បង់ទៅវិញ តែងបន្សល់ទុកនូវក្ដីស្រេកឃ្លាន និងទុក្ខព្រួយ។',
    natureE: 'Fragile and dependent on external conditions; when it fades, burning thirst and grief remain.',
    freedomK: 'សេរីភាពទាប (នៅជាទាសករនៃតណ្ហា)',
    freedomE: 'Low freedom (subject to consumerist craving)',
    footerClass: 'text-amber-600 bg-amber-50 dark:bg-amber-950/30'
  },
  {
    id: 'samadhisukha',
    icon: '🧘',
    stageK: 'ថ្នាក់ទី ២ (សុខផ្លូវចិត្តស្ងប់)',
    stageE: 'Stage 2: Meditative Stillness',
    badgeClass: 'text-emerald-600 bg-emerald-100 dark:bg-emerald-950/40',
    titleK: '២. នេក្ខម្មសុខ / សមាធិសុខ (សុខពីការលះបង់ & សមាធិ)',
    titleE: '2. Samādhi-Sukha (Joy of Stillness & Jhana)',
    pali: 'Nekkhammasukhaṁ / Samādhisukhaṁ',
    descK: 'សេចក្ដីសុខដែលកើតពីការលះបង់កាមគុណ ចូលទៅកាន់សមាធិ (ឈាន) ចិត្តស្ងប់មូលតែមួយ គ្មានការរំខានពីកង្វល់ខាងក្រៅ។',
    descE: 'Joy arising from renouncing sensory turmoil, entering meditative stillness (Jhānas), free from external agitation.',
    natureK: 'ជាសុខដ៏បរិសុទ្ធ ត្រជាក់ មិនបាច់ចំណាយលុយទិញ កើតឡើងពីខាងក្នុងបេះដូងខ្លួនឯងផ្ទាល់។',
    natureE: 'Pure, refreshing bliss independent of wealth, welling up directly from within an uncluttered mind.',
    freedomK: 'សេរីភាពមធ្យម (ផុតពីការរំខាននៃកាមគុណ)',
    freedomE: 'Medium freedom (free from sensory bondage)',
    footerClass: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30'
  },
  {
    id: 'vipassanasukha',
    icon: '💡',
    stageK: 'ថ្នាក់ទី ៣ (សុខនៃពន្លឺបញ្ញា)',
    stageE: 'Stage 3: Insight Wisdom',
    badgeClass: 'text-sky-600 bg-sky-100 dark:bg-sky-950/40',
    titleK: '៣. វិបស្សនាសុខ (សុខពីការឃើញការពិត)',
    titleE: '3. Vipassanā-Sukha (Bliss of Clear Insight)',
    pali: 'Vipassanāsukhaṁ',
    descK: 'សេចក្ដីសុខដែលកើតពីបញ្ញាឃើញច្បាស់នូវធម្មជាតិ មិនតក់ស្លុតនឹងលោកធម៌ ៨ (មានលាភ អស់លាភ មានយស អស់យស និន្ទា សរសើរ សុខ ទុក្ខ)។',
    descE: 'Happiness arising from seeing reality as it is—unshaken by the 8 worldly winds of gain/loss, praise/blame, pleasure/pain.',
    natureK: 'ចិត្តមិនរំជើបរំជួលពេលជួបវិបត្តិជីវិត ចេះរស់នៅជាមួយការពិតដោយស្នាមញញឹមស្ងប់ស្ងៀម។',
    natureE: 'Unshakeable emotional equilibrium during life storms, accepting reality with profound serenity.',
    freedomK: 'សេរីភាពកម្រិតខ្ពស់ (ចិត្តរឹងមាំដូចថ្មភ្នំ)',
    freedomE: 'High freedom (mind unshakeable like bedrock)',
    footerClass: 'text-sky-600 bg-sky-50 dark:bg-sky-950/30'
  },
  {
    id: 'nibbanasukha',
    icon: '🕊️',
    stageK: 'កំពូលនៃសេចក្ដីសុខទាំងអស់',
    stageE: 'Stage 4: Supreme Bliss (Nibbāna)',
    badgeClass: 'text-violet-600 bg-violet-100 dark:bg-violet-950/40',
    titleK: '៤. និព្វានសុខ (សេចក្ដីសុខផុតទុក្ខទាំងស្រុង)',
    titleE: '4. Nibbāna-Sukha (Supreme Unconditioned Peace)',
    pali: 'Nibbānaṁ paramaṁ sukhaṁ',
    descK: 'សេចក្ដីសុខពីការរំលត់អស់នូវភ្លើងតណ្ហា ភ្លើងកំហឹង និងភ្លើងអវិជ្ជាទាំងស្រុង គ្មានការកើត ចាស់ ឈឺ ស្លាប់ទៀតឡើយ។',
    descE: 'Absolute peace arising from the complete extinction of greed, hatred, and delusion—unconditioned, permanent, and deathless.',
    natureK: 'មិនមែនជាវេទនាសុខធម្មតាដែលត្រូវប្រែប្រួលឡើយ តែជា «សន្តិសុខ» (សេចក្ដីស្ងប់ស្ងាត់ដ៏បរិសុទ្ធផុតពីការកើតស្លាប់)។',
    natureE: 'Not merely a temporary feeling-tone, but permanent liberation beyond the cycle of birth and death.',
    freedomK: 'សេរីភាពដាច់ខាត (រំលត់ទុក្ខទាំងស្រុង)',
    freedomE: 'Absolute freedom (complete cessation of suffering)',
    footerClass: 'text-violet-600 bg-violet-50 dark:bg-violet-950/30'
  }
]
</script>
