<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៥៨ — ធម៌មុនចូលគេង & សមាធិលើគ្រែ', 'GATHA 58 — BEDTIME DHAMMA & MINDFUL SLEEP') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ធម៌ថ្វាយបង្គំព្រះមុនចូលគេង & សមាធិលើគ្រែ', 'Bedtime Dhamma Routine & Mindful Sleep Meditation') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ពេលរាត្រីមុនពេលចូលគេង គឺជាពេលវេលាដ៏វិសេសបំផុតដើម្បី «ជម្រះចិត្ត» ពីកង្វល់ ស្ត្រេស និងរឿងរ៉ាវស្មុគស្មាញពេញមួយថ្ងៃ។ ព្រះសម្មាសម្ពុទ្ធទ្រង់បង្រៀនថា ចិត្តដែលចូលដេកទាំងក្តៅក្រហាយ នឹងនាំឱ្យយល់សប្តិអាក្រក់ និងភ្ញាក់ឡើងទាំងហត់នឿយ។ ការចំណាយពេលត្រឹមតែ ៥ ទៅ ១០ នាទី ថ្វាយបង្គំព្រះ សុំខមាទោស ផ្សាយមេត្តា និងដេកសមាធិ នឹងធ្វើឱ្យការគេងប្រែក្លាយជា «ការសន្សំបុណ្យ» ដ៏អស្ចារ្យ។', 'The quiet hours before sleep offer a golden sanctuary to cleanse consciousness from accumulated daytime anxieties, conflicts, and sensory overload. The Buddha warned that falling asleep in agitation produces nightmares and morning exhaustion. Dedicating just 5 to 10 minutes to devotional reverence, seeking forgiveness, universal loving-kindness, and mindful sleep transforms the state of slumber into an engine of spiritual peace.') }}
    </p>

    <!-- 11 Benefits of Metta Before Sleep (AN 11.16) -->
    <div class="card-paper p-6 md:p-8 rounded-2xl border mt-8">
      <div class="flex items-center gap-2">
        <span class="text-amber-500 text-xl">🌙</span>
        <h3 class="font-display text-lg sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
          {{ t('អានិសង្ស ១១ យ៉ាងនៃការផ្សាយមេត្តាមុនគេង (មេត្តាសូត្រ AN 11.16)', '11 Sublime Fruits of Loving-Kindness Before Sleep (AN 11.16)') }}
        </h3>
      </div>
      <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
        {{ t('បុគ្គលដែលផ្សាយមេត្តាមុនពេលគេង រមែងទទួលបានអានិសង្ស ១១ ប្រការនេះជាក់ស្តែង ៖', 'One who radiates boundless loving-kindness prior to sleep reaps eleven profound blessings:') }}
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 mt-5">
        <div v-for="(b, idx) in elevenBenefits" :key="idx" class="p-3 rounded-xl border text-center" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-2xl">{{ b.icon }}</span>
          <p class="font-bold text-xs mt-1.5" :style="{ color: 'var(--ink)' }">{{ b.km }}</p>
          <p class="text-[10px] text-stone-500 mt-0.5">{{ b.en }}</p>
        </div>
      </div>
    </div>

    <!-- 3-Step Nightly Routine -->
    <div class="card-paper p-6 md:p-8 rounded-2xl border mt-8">
      <p class="chapter-label">{{ t('កិច្ចវត្ត ៣ ជំហាន', 'THE 3-STEP NIGHTLY ROUTINE') }}</p>
      <h3 class="font-display text-xl font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
        {{ t('ក្បួនប្រតិបត្តិ ៣ ជំហានមុនទម្លាក់ខ្លួនលើពូក (៥ នាទី)', '3-Step Bedtime Routine Before Sleeping (5 Minutes)') }}
      </h3>

      <div class="space-y-4 mt-5">
        <!-- Step 1 -->
        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center shrink-0">១</span>
            <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">{{ t('ជំហានទី ១ ៖ សំពះព្រះ និងសុំខមាទោស (Forgiveness & Cleansing)', 'Step 1: Homage & Forgiveness') }}</h4>
          </div>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            • អង្គុយសំពះរឭកគុណព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ។<br/>
            • <strong>ការសុំខមាទោស & អហោសិកម្ម ៖</strong> គិតក្នុងចិត្តថា <em>«ថ្ងៃនេះ បើខ្ញុំបានជ្រុលជ្រោះធ្វើឱ្យនរណាឈឺចាប់ដោយកាយ វាចា ចិត្ត សូមអភ័យទោសឱ្យខ្ញុំ។ ហើយបើមាននរណាធ្វើឱ្យខ្ញុំឈឺចាប់ ខ្ញុំក៏លើកលែងទោស និងអហោសិកម្មឱ្យគេទាំងអស់ ដើម្បីកុំឱ្យមានគំនុំជាប់ក្នុងចិត្ត»</em>។
          </p>
        </div>

        <!-- Step 2 -->
        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-full bg-sky-500 text-white text-xs font-bold flex items-center justify-center shrink-0">២</span>
            <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">{{ t('ជំហានទី ២ ៖ បាលីផ្សាយមេត្តាខ្លីមុនគេង (Universal Metta Recitation)', 'Step 2: Universal Metta Chant') }}</h4>
          </div>
          <div class="mt-2 p-3 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] font-serif text-xs leading-loose italic" :style="{ color: 'var(--ink)' }">
            «សព្វេ សត្តា សុខិតា ហោន្តុ និទ្ទុក្ខា អវេរា អព្យាបជ្ឈា អនីឃា សុខី អត្តានំ បរិហរន្តុ។»<br/>
            <span class="not-italic text-[11px] text-amber-600 dark:text-amber-400 font-sans">
              (សូមឱ្យសត្វលោកទាំងពួង បានដល់នូវសេចក្តីសុខ ផុតចាកទុក្ខ គ្មានពៀរ គ្មានការបៀតបៀន គ្មានសេចក្តីលំបាកកាយចិត្ត សូមថែរក្សាខ្លួនឱ្យបានសុខរៀងៗខ្លួនចុះ)
            </span>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center shrink-0">៣</span>
            <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">{{ t('ជំហានទី ៣ ៖ សមាធិលើគ្រែ «សីហសេយ្យាសន៍» (Lion Posture Meditation)', 'Step 3: Lion Posture Meditation') }}</h4>
          </div>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            • <strong>កាយវិការ ៖</strong> ទម្រេតខ្លួនដេកផ្អៀងទៅស្តាំ ដោយដាក់ជើងឆ្វេងលើជើងស្តាំ ដៃស្តាំកល់ក្រោមក្បាល (កាយវិការដេករបស់ព្រះពុទ្ធ និងរាជសីហ៍)។<br/>
            • <strong>ផ្លូវចិត្ត ៖</strong> បិទភ្នែកស្រាលៗ តម្កល់ចិត្តដឹងដង្ហើមចេញចូល <em>«ដកដង្ហើមចូល... ដឹង, ដកដង្ហើមចេញ... ដឹង»</em> ឬកំណត់ពាក្យ <em>«ពុទ្ធោ»</em> រហូតដល់លង់លក់ដោយសន្តិវិធី។
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const elevenBenefits = [
  { icon: '😴', km: '១. គេងលក់ស្រួល', en: 'Sleeps in peace' },
  { icon: '🌅', km: '២. ភ្ញាក់ឡើងជាសុខ', en: 'Wakes up joyful' },
  { icon: '🛡️', km: '៣. មិនយល់សប្តិអាក្រក់', en: 'Zero nightmares' },
  { icon: '❤️', km: '៤. មនុស្សផងគ្នាស្រលាញ់', en: 'Loved by humans' },
  { icon: '🧚', km: '៥. អមនុស្សស្រលាញ់', en: 'Loved by spirits' },
  { icon: '👼', km: '៦. ទេវតាថែរក្សាការពារ', en: 'Guarded by devas' },
  { icon: '🔥', km: '៧. ភ្លើង/អាវុធមិនបៀតបៀន', en: 'Harm-free from poison' },
  { icon: '🧘', km: '៨. ចិត្តឆាប់ស្ងប់ស្ងាត់', en: 'Swift concentration' },
  { icon: '✨', km: '៩. ទឹកមុខស្រស់ថ្លា', en: 'Radiant complexion' },
  { icon: '🕊️', km: '១០. ស្លាប់ដោយមិនវង្វេង', en: 'Dies unconfused' },
  { icon: '👑', km: '១១. ទៅកើតក្នុងព្រហ្មលោក', en: 'Reborn in Brahma plane' }
]
</script>
