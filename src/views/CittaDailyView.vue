<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🧠 {{ t('ធម្មសង្គណី & អដ្ឋសាលិនី · ចិត្តវិទ្យាពុទ្ធសាសនា', 'Dhammasaṅgaṇī & Atthasālinī · Daily Mind States') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('កុសលចិត្ត និង អកុសលចិត្តក្នុងជីវិតប្រចាំថ្ងៃ', 'Daily Wholesome vs Unwholesome Mind States') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ក្នុងមួយថ្ងៃៗ ចិត្តរបស់យើងកើតរលត់រាប់លានដង ដោយផ្លាស់ប្ដូររវាង «កុសល» (ចិត្តល្អ បុណ្យ ស្រស់ថ្លា) និង «អកុសល» (ចិត្តអាក្រក់ បាប មួម៉ៅ ស្រេកឃ្លាន)។ មេរៀននេះបង្រៀននូវវិធីសាស្ត្រឆ្លុះកញ្ចក់ចិត្តក្នុងរយៈពេល ៣ វិនាទី ដើម្បីដឹងទាន់ចិត្តខ្លួនឯង និងបង្វែរស្ថានការណ៍អវិជ្ជមានក្នុងជីវិត ឱ្យក្លាយជាកុសលធម៌ដ៏មានតម្លៃ។',
            'Throughout the day, our mind oscillates continuously between wholesome states (Kusala: generous, serene, kind) and unwholesome states (Akusala: irritable, greedy, anxious). This practical guide offers a 3-second self-diagnostic tool to immediately catch everyday reactions and reframe daily friction into spiritual strength.'
          ) }}
        </p>
      </div>
    </section>

    <!-- 3-Second Mind Diagnostic Tool -->
    <section class="card-paper p-6 space-y-4 border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
      <div class="text-center max-w-xl mx-auto space-y-2">
        <span class="text-3xl">🪞</span>
        <h3 class="text-lg font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('កញ្ចក់ឆ្លុះចិត្ត ៣ វិនាទី (3-Second Mental Diagnostic)', 'The 3-Second Mental Diagnostic Drill') }}
        </h3>
        <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ពេលមានរឿងរ៉ាវកើតឡើងភ្លាម ចូរឈប់ ១ វិនាទី ហើយសួរខ្លួនឯងនូវ ៣ សំណួរនេះ៖', 'When anything triggers you, pause 1 second and scan these 3 questions:') }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
        <div class="p-4 rounded-2xl border space-y-1.5" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="font-bold text-amber-600">១. តើចិត្តខ្ញុំកំពុងចង់បាន ឬស្អិតជាប់ទេ?</span>
          <p :style="{ color: 'var(--ink-muted)' }">
            {{ t('បើកំពុងចង់បាន ជាប់ជំពាក់ ឬចង់ឈ្នះ នោះជា «លោភៈ» (អកុសលចិត្ត)។', 'If wanting, grasping, or hoarding: it is Lobha (Greed).') }}
          </p>
        </div>

        <div class="p-4 rounded-2xl border space-y-1.5" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="font-bold text-red-500">២. តើចិត្តខ្ញុំកំពុងតានតឹង មួម៉ៅ ឬទាស់ចិត្តទេ?</span>
          <p :style="{ color: 'var(--ink-muted)' }">
            {{ t('បើកំពុងខឹង ធុញទ្រាន់ ច្រណែន ឬស្អប់ នោះជា «ទោសៈ» (អកុសលចិត្ត)។', 'If irritated, tense, complaining, or angry: it is Dosa (Aversion).') }}
          </p>
        </div>

        <div class="p-4 rounded-2xl border space-y-1.5" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="font-bold text-emerald-600">៣. តើខ្ញុំអាចដកដង្ហើម ហើយប្ដូរមកជាមេត្តាបានទេ?</span>
          <p :style="{ color: 'var(--ink-muted)' }">
            {{ t('បើដឹងទាន់ ហើយញញឹម អត់ទោស និងស្ងប់ នោះប្រែជា «កុសលចិត្ត» ភ្លាម!', 'If you recognize it, breathe, and forgive: it shifts to Kusala!') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Everyday Scenario Reframing Cards -->
    <section class="space-y-4">
      <h3 class="text-lg font-bold font-serif px-1" :style="{ color: 'var(--ink)' }">
        {{ t('ឧទាហរណ៍ជាក់ស្ដែង ក្នុងស្ថានភាពរស់នៅប្រចាំថ្ងៃ', '8 Everyday Scenarios: Reactive Poison vs Wise Reframing') }}
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="s in scenarios"
          :key="s.id"
          class="card-paper p-5 transition-all duration-200 border space-y-3"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div class="flex items-center gap-2">
            <span class="text-2xl p-2 rounded-xl" :style="{ background: 'var(--bg-card-2)' }">{{ s.icon }}</span>
            <h4 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">{{ t(s.titleK, s.titleE) }}</h4>
          </div>

          <!-- Unwholesome reaction -->
          <div class="p-3 rounded-xl border-l-4 border-red-500 text-xs space-y-1"
               :style="{ background: 'var(--bg-card-2)' }">
            <span class="font-bold text-red-500">❌ {{ t('ប្រតិកម្មអកុសល (ទម្លាប់ចាស់)៖', 'Reactive Poison (Akusala):') }}</span>
            <p :style="{ color: 'var(--ink-muted)' }">{{ t(s.badK, s.badE) }}</p>
          </div>

          <!-- Wholesome reframe -->
          <div class="p-3 rounded-xl border-l-4 border-emerald-500 text-xs space-y-1 bg-emerald-50/50 dark:bg-emerald-950/20">
            <span class="font-bold text-emerald-600">✅ {{ t('ការបង្វែរជាកុសល (បញ្ញា)៖', 'Wise Reframing (Kusala):') }}</span>
            <p class="text-emerald-950 dark:text-emerald-200">{{ t(s.goodK, s.goodE) }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const scenarios = [
  {
    id: 'traffic',
    icon: '🚗',
    titleK: '១. ពេលស្ទះចរាចរណ៍តាមផ្លូវ',
    titleE: '1. Stuck in Heavy Traffic',
    badK: 'ចុចស៊ីផ្លេញាប់ដៃ ជេរប្រទេចអ្នកបើកបរផ្សេង មួម៉ៅ ក្ដៅក្រហាយក្នុងទ្រូង (ទោសចិត្ត)។',
    badE: 'Honking frantically, cursing other drivers, stewing in rage and elevated blood pressure.',
    goodK: 'ដកដង្ហើមវែងៗ បើកស្ដាប់ធម៌ ឬចម្រើនមេត្តាជូនអ្នករួមដំណើរថា «សូមឱ្យអ្នកទាំងអស់គ្នាបានទៅដល់ផ្ទះដោយសុវត្ថិភាព» (ខន្តី & មេត្តា)។',
    goodE: 'Take slow breaths, listen to a Dhamma lecture, and radiate goodwill: "May all these weary commuters arrive home safely."'
  },
  {
    id: 'social',
    icon: '📱',
    titleK: '២. ឃើញគេបង្ហោះឡានថ្មី ឬផ្ទះវីឡាលើ Facebook',
    titleE: '2. Seeing Luxury Posts on Social Media',
    badK: 'កើតចិត្តច្រណែន គិតថាតូចចិត្តនឹងវាសនាខ្លួន ឬនិយាយដើមគេថា «ប្រហែលរកស៊ីមិនស្អាតស្អំទេមើលទៅ» (ឥស្សា & ទោសៈ)។',
    badE: 'Nursing bitter envy, feeling inferior, gossiping: "I bet their money is ill-gotten anyway!"',
    goodK: 'ត្រេកអរនឹងសំណាងរបស់គេ «សាធុ! សូមឱ្យគេកាន់តែរុងរឿង និងចេះយកទ្រព្យទៅសាងបុណ្យ» ហើយស្កប់ស្កល់នឹងអ្វីដែលខ្លួនមាន (មុទិតា & សន្តុដ្ឋី)។',
    goodE: 'Rejoice with sincere Muditā: "Wonderful! May their fortune flourish and be used for generous deeds," and enjoy your own blessings.'
  },
  {
    id: 'criticism',
    icon: '💼',
    titleK: '៣. ពេលត្រូវមេ ឬមិត្តរួមការងាររិះគន់',
    titleE: '3. Receiving Harsh Criticism at Work',
    badK: 'មុខក្រញូវ អន់ចិត្ត គិតចង់ឈប់ធ្វើការ ឬចងគំនុំរកវិធីសងសឹកវិញ (មានះ & ទោសៈ)។',
    badE: 'Pouting, wounded ego, plotting passive-aggressive retaliation or brooding over resignation.',
    goodK: 'ស្ដាប់ដោយស្ងប់ស្ងៀម ញែកមើលចំណុចត្រូវដើម្បីកែប្រែ «អរគុណដែលបានប្រាប់ចំណុចខ្វះខាត» (សុវចោ & បញ្ញា)។',
    goodE: 'Listen with calm humility: extract the actionable truth to improve, thanking them for revealing your blind spots.'
  },
  {
    id: 'food',
    icon: '🛵',
    titleK: '៤. អ្នកដឹកម្ហូប (Delivery) យកមកយឺត ឬច្រឡំម្ហូប',
    titleE: '4. Food Delivery Arrives Late or Cold',
    badK: 'ស្រែកគំហក ជេរស្ដី មិនឱ្យលុយធីប ឬវាយតម្លៃផ្កាយ ១ បំផ្លាញការងារគេ (ទោសៈ)។',
    badE: 'Shouting at the rider, withholding tip, leaving a venomous 1-star review to ruin their job.',
    goodK: 'គិតអាណិតគេ «មេឃភ្លៀង ផ្លូវពិបាក គេខំប្រឹងជិះម៉ូតូប្រថុយគ្រោះថ្នាក់» ញញឹមទទួលហើយនិយាយពាក្យលើកទឹកចិត្ត (ករុណា & អទោសៈ)។',
    goodE: 'Cultivate empathy: "It’s raining; they risk life in traffic for meager pay." Smile warmly, receive the food, and tip kindly.'
  }
]
</script>
