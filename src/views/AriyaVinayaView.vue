<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>⚖️ {{ t('អង្គុត្តរនិកាយ ទុកនិបាត · លោកបាលធម៌ (AN 2.9)', 'Aṅguttara Nikāya 2.9 · Lokapāla Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('អរិយវិន័យ vs ច្បាប់លោកីយ (សីលធម៌ចេញពីបេះដូង)', 'The Noble Discipline vs Worldly Law') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ច្បាប់លោកីយគ្រប់គ្រងមនុស្សពីខាងក្រៅ ដោយការគំរាមកំហែងពីគុកច្រវាក់ និងការផាកពិន័យ; ចំណែក «អរិយវិន័យ» ក្នុងព្រះពុទ្ធសាសនា គ្រប់គ្រងមនុស្សពីខាងក្នុង ដោយគុណធម៌ ហិរិ (ការខ្មាសបាប) និង ឱត្តប្បៈ (ការខ្លាចបាប)។ ទោះបីនៅក្នុងបន្ទប់ងងឹតគ្មានកាមេរ៉ាសុវត្ថិភាព ឬគ្មាននរណាមើលឃើញ ក៏អ្នកមានអរិយវិន័យមិនហ៊ានប្រព្រឹត្តអំពើអាក្រក់ឡើយ។',
            'Secular law enforces order externally through police, courts, surveillance, and penalties. The Buddha’s Noble Discipline (Ariya-Vinaya) governs from within through moral conscience (Hiri) and moral dread (Ottappa). Even in a pitch-black room with zero witnesses, one who embodies the Noble Discipline refuses to commit harm.'
          ) }}
        </p>
      </div>
    </section>

    <!-- Side-by-Side Comparison -->
    <section class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Worldly Law -->
        <div class="card-paper p-6 space-y-4 border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-3">
            <span class="text-3xl p-3 rounded-2xl" :style="{ background: 'var(--bg-card-2)' }">🏛️</span>
            <div>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold text-amber-600 bg-amber-100 dark:bg-amber-950/40">
                កម្លាំងខាងក្រៅ
              </span>
              <h3 class="font-bold text-lg font-serif" :style="{ color: 'var(--ink)' }">
                {{ t('ច្បាប់លោកីយ (ច្បាប់រដ្ឋ & បទបញ្ជា)', 'Worldly Law (Secular Legal System)') }}
              </h3>
            </div>
          </div>

          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t('ផ្អែកលើការភ័យខ្លាចការដាក់ទោស ខ្លាចប៉ូលីសចាប់ ខ្លាចបង់ប្រាក់ពិន័យ ឬខ្លាចជាប់ពន្ធនាគារ។', 'Operates on external deterrence: fear of arrest, fines, lawsuits, loss of status, and imprisonment.') }}
          </p>

          <div class="p-4 rounded-2xl border space-y-2 text-xs" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold text-red-500">⚠️ {{ t('ចន្លោះប្រហោងនៃច្បាប់លោកីយ៖', 'Inherent Loopholes:') }}</h4>
            <ul class="list-disc list-inside space-y-1" :style="{ color: 'var(--ink-soft)' }">
              <li>{{ t('ពេលគ្មានភស្តុតាង ឬគ្មានកាមេរ៉ាមើលឃើញ មនុស្សខិលខូចនៅតែលួចធ្វើបាប', 'When unwatched or unrecorded, corrupt individuals commit crimes without hesitation.') }}</li>
              <li>{{ t('អាចជួលមេធាវីពូកែ ឬរកចន្លោះប្រហោងច្បាប់ដើម្បីរួចខ្លួន', 'Can be bypassed through high-priced legal maneuvering or bribery.') }}</li>
              <li>{{ t('មិនអាចគ្រប់គ្រងគំនិតច្រណែន ស្អប់ ឬកំហឹងក្នុងចិត្តបានឡើយ', 'Cannot regulate internal thoughts of malice, greed, envy, or deceit.') }}</li>
            </ul>
          </div>
        </div>

        <!-- Ariya Vinaya -->
        <div class="card-paper p-6 space-y-4 border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-3">
            <span class="text-3xl p-3 rounded-2xl" :style="{ background: 'var(--bg-card-2)' }">💎</span>
            <div>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-950/40">
                កម្លាំងបេះដូងខាងក្នុង
              </span>
              <h3 class="font-bold text-lg font-serif" :style="{ color: 'var(--ink)' }">
                {{ t('អរិយវិន័យ (ច្បាប់សីលធម៌ពុទ្ធសាសនា)', 'The Noble Discipline (Ariya-Vinaya)') }}
              </h3>
            </div>
          </div>

          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t('ផ្អែកលើសតិសម្បជញ្ញៈ ហិរិ (ខ្មាសបាប) និងឱត្តប្បៈ (ខ្លាចបាប) ដែលជាសច្ចធម៌ការពារសន្តិភាពសកលលោក។', 'Grounded in self-respect, moral dignity, conscience (Hiri), and reverence for universal karmic law (Ottappa).') }}
          </p>

          <div class="p-4 rounded-2xl border space-y-2 text-xs" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold text-emerald-600">✨ {{ t('អានុភាពនៃអរិយវិន័យ៖', 'Supreme Power of Moral Conscience:') }}</h4>
            <ul class="list-disc list-inside space-y-1" :style="{ color: 'var(--ink-soft)' }">
              <li>{{ t('ទោះគ្មាននរណាមើលឃើញ ក៏មិនហ៊ានប្រព្រឹត្តអាក្រក់ ព្រោះចិត្តខ្លួនឯងដឹង', 'Even in total solitude, refuses unwholesome deeds because inner awareness is witness.') }}</li>
              <li>{{ t('ច្បាប់កម្មផលគ្មានចន្លោះប្រហោង ធ្វើល្អបានល្អ ធ្វើអាក្រក់បានអាក្រក់ ១០០%', 'The law of karma has zero loopholes; moral actions bear infallible consequences.') }}</li>
              <li>{{ t('កម្ចាត់ឫសគល់នៃបទល្មើសតាំងពីក្នុងគំនិតចិត្ត (កម្ចាត់លោភៈ ទោសៈ)', 'Cleanses the roots of crime directly at the mental level before external manifestation.') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- The 2 Bright Guardians: Hiri & Ottappa -->
    <section class="card-paper p-6 space-y-4 border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
      <div class="text-center max-w-xl mx-auto space-y-2">
        <span class="text-3xl">🕊️</span>
        <h3 class="text-lg font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('លោកបាលធម៌ ៖ ធម៌សរ ពីរប្រការដែលថែរក្សាពិភពលោក', 'Lokapāla Dhamma: The Two Bright Guardians of Civilization') }}
        </h3>
        <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ព្រះពុទ្ធទ្រង់ត្រាស់ថា បើគ្មានធម៌សរ ២ យ៉ាងនេះទេ ពិភពលោកនឹងក្លាយជាព្រៃផ្សៃ មនុស្សនឹងបៀតបៀនគ្នាដូចសត្វធាតុ។ ធម៌ទាំង ២ នោះគឺ៖',
            'The Buddha taught: "Were it not for these two bright guardians, human civilization would collapse into barbarism like beasts in the wild." These two are:'
          ) }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
        <div class="p-4 rounded-2xl border space-y-1.5" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <span class="font-bold text-emerald-600">១. ហិរិ (សេចក្ដីខ្មាសបាប)</span>
          <p :style="{ color: 'var(--ink-muted)' }">
            {{ t('ការខ្មាសអៀនចំពោះខ្លួនឯង មិនហ៊ានធ្វើអំពើថោកទាប ប្រៀបដូចកុលបុត្រដែលស្រឡាញ់ភាពស្អាតស្អំ មិនព្រមយកដៃទៅប៉ះលាមកឡើយ។', 'Moral shame rooted in self-respect; refusing to degrade one’s noble dignity by touching moral filth.') }}
          </p>
        </div>

        <div class="p-4 rounded-2xl border space-y-1.5" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <span class="font-bold text-violet-600">២. ឱត្តប្បៈ (សេចក្ដីខ្លាចបាប)</span>
          <p :style="{ color: 'var(--ink-muted)' }">
            {{ t('ការភ័យខ្លាចចំពោះផលវិបាកនៃកម្មអាក្រក់ ខ្លាចការនិន្ទា និងខ្លាចការរងទុក្ខក្នុងអបាយភូមិ ប្រៀបដូចមនុស្សខ្លាចរលាកដុំដែកកំពុងឆេះក្រហម។', 'Moral dread of consequences, fearing karmic retribution like recoiling from grabbing a red-hot iron ball.') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>
