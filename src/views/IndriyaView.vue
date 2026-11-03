<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៥៥ — ឥន្ទ្រិយ ៥ & ពល ៥', 'GATHA 55 — 5 SPIRITUAL FACULTIES & 5 POWERS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ក្បួនថ្លឹងឥន្ទ្រិយ ៥ & ពល ៥ ក្នុងសមាធិ', 'Balancing the 5 Spiritual Faculties & Powers') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('នៅក្នុងការពុះពារបដិបត្តិធម៌ «ឥន្ទ្រិយ ៥» (សទ្ធា, វីរិយៈ, សតិ, សមាធិ, បញ្ញា) គឺជាកម្លាំងដឹកនាំដ៏ចម្បងនៃផ្លូវចិត្ត។ កាលណាឥន្ទ្រិយទាំង ៥ ចម្រើនឡើងរហូតដល់មិនញាប់ញ័រដោយកិលេស នោះនឹងប្រែក្លាយទៅជា «ពល ៥» (កម្លាំង ៥)។ អាថ៌កំបាំងដ៏សំខាន់បំផុតសម្រាប់អ្នកចម្រើនសមាធិ គឺ «ក្បួនថ្លឹងឥន្ទ្រិយឱ្យស្មើគ្នា» ពីព្រោះបើឥន្ទ្រិយណាមួយខ្លាំងជ្រុល ឬខ្សោយជ្រុល ចិត្តនឹងធ្លាក់ចូលទៅក្នុងសេចក្តីខ្ជិល រាយមាយ ឬងងឹតងងុលភ្លាមៗ។', 'In Buddhist meditation practice, the Five Spiritual Faculties (Indriya: Saddhā, Vīriya, Sati, Samādhi, Paññā) are the supreme steering forces of consciousness. When mature and unshakeable by defilements, they transform into the Five Powers (Bala). The critical art for every meditator lies in balancing these faculties: if any single faculty dominates or atrophies, the mind inevitably degenerates into restlessness, sluggish torpor, or blind credulity.') }}
    </p>

    <!-- The Master Balance Diagram / Visual Pairs -->
    <div class="card-paper p-6 md:p-8 rounded-2xl border mt-8">
      <div class="text-center max-w-xl mx-auto">
        <span class="text-xs font-mono font-bold uppercase tracking-wider text-amber-500">
          {{ t('គោលការណ៍ថ្លឹងតុល្យភាព (INDRIYA SAMATĀ)', 'THE ART OF EQUILIBRIUM') }}
        </span>
        <h3 class="font-display text-xl sm:text-2xl font-bold mt-1" :style="{ color: 'var(--ink)' }">
          {{ t('គូតុល្យភាពទាំងពីរ & តួនាទី «សតិ» ជាមេដឹកនាំ', 'Two Balancing Pairs & Sati as the Supreme Arbiter') }}
        </h3>
        <p class="text-xs sm:text-sm mt-1.5" :style="{ color: 'var(--ink-muted)' }">
          {{ t('សតិ គឺជាអ្នកត្រួតពិនិត្យតែមួយគត់ដែលត្រូវការគ្រប់ពេលវេលា និងមិនដែលលើសកម្រិតឡើយ។', 'Mindfulness (Sati) is universally needed at all times and can never be in excess.') }}
        </p>
      </div>

      <!-- Sati Central Pill Banner -->
      <div class="mt-6 p-4 rounded-xl border bg-amber-500/10 border-amber-500/30 text-center max-w-lg mx-auto">
        <span class="text-2xl">👑</span>
        <h4 class="font-bold text-sm text-amber-600 dark:text-amber-400 mt-1">
          {{ t('សតិ (Mindfulness) ៖ មេបញ្ជាការកំពូលថ្លឹងតុល្យភាព', 'Sati: The Supreme Harmonizer') }}
        </h4>
        <p class="text-xs mt-1 text-stone-600 dark:text-stone-300 leading-relaxed">
          {{ t('ព្រះពុទ្ធសម្ដែងថា «សតិ សព្វត្ថ បត្ថិយា» (សតិ ត្រូវការក្នុងគ្រប់ទីកន្លែង និងគ្រប់កាល)។ សតិជាអ្នកដឹងថា ឥន្ទ្រិយណាខ្សោយ ដើម្បីបន្ថែម និងដឹងថាឥន្ទ្រិយណាលើស ដើម្បីបន្ថយ។', 'The Buddha declared: "Mindfulness is needed everywhere." Sati observes which faculty is lagging to stimulate it, and which is excessive to moderate it.') }}
        </p>
      </div>

      <!-- The 2 Balancing Scales Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <!-- Scale 1: Saddha vs Panna -->
        <div class="p-5 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
            <span class="font-bold text-xs uppercase tracking-wider text-sky-500">គូតុល្យភាពទី ១ ៖ ចិត្ត & បញ្ញា</span>
            <span class="text-xl">⚖️</span>
          </div>

          <div class="space-y-3 mt-3 text-xs leading-relaxed">
            <div class="p-3 rounded-lg bg-sky-500/5 border border-sky-500/20">
              <strong class="text-sky-600 dark:text-sky-400 block mb-1">១. សទ្ធា (Faith) ស្មើនឹង បញ្ញា (Wisdom)</strong>
              <p :style="{ color: 'var(--ink-soft)' }">
                • <strong>បើសទ្ធាច្រើនពេក ខ្វះបញ្ញា ៖</strong> ក្លាយជាមនុស្សងងឹតងងុល ជឿលើអបិយជំនឿ ឆាប់ចាញ់បោកគេ និងសមាទានខុសផ្លូវ។<br/>
                • <strong>បើបញ្ញាច្រើនពេក ខ្វះសទ្ធា ៖</strong> ក្លាយជាមនុស្សវែកញែកឥតឈប់ឈរ សង្ស័យច្រើន រិះគន់គេ តែខ្លួនឯងមិនព្រមអង្គុយសមាធិ។
              </p>
            </div>
            <p class="text-[11px] text-stone-500 italic">
              {{ t('👉 ដំណោះស្រាយ ៖ ត្រូវមានសទ្ធាជឿជាក់លើព្រះរតនត្រ័យ ព្រមទាំងយកបញ្ញាមកពិចារណាផ្ទៀងផ្ទាត់ហេតុផល។', 'Remedy: Cultivate devotion to the Triple Gem while rigorously examining reality with discerning wisdom.') }}
            </p>
          </div>
        </div>

        <!-- Scale 2: Samadhi vs Viriya -->
        <div class="p-5 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
            <span class="font-bold text-xs uppercase tracking-wider text-emerald-500">គូតុល្យភាពទី ២ ៖ ភាពស្ងប់ & ថាមពល</span>
            <span class="text-xl">⚖️</span>
          </div>

          <div class="space-y-3 mt-3 text-xs leading-relaxed">
            <div class="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
              <strong class="text-emerald-600 dark:text-emerald-400 block mb-1">២. សមាធិ (Concentration) ស្មើនឹង វីរិយៈ (Energy)</strong>
              <p :style="{ color: 'var(--ink-soft)' }">
                • <strong>បើសមាធិច្រើនពេក ខ្វះវីរិយៈ ៖</strong> ចិត្តស្ងប់ហួសហេតុ ធ្លាក់ចូលទៅក្នុងសេចក្តីខ្ជិល ច្រអូស ងងុយដេក (ថីនមិទ្ធ)។<br/>
                • <strong>បើវីរិយៈច្រើនពេក ខ្វះសមាធិ ៖</strong> ចិត្តប្រឹងជ្រុល ក្តៅក្រហាយ រាយមាយ ស្ត្រេស (ឧទ្ធច្ចកុក្កុច្ច) មិនអាចស្ងប់បាន។
              </p>
            </div>
            <p class="text-[11px] text-stone-500 italic">
              {{ t('👉 ដំណោះស្រាយ ៖ ដូចការរឹតខ្សែពិណ មិនឱ្យធូរពេក មិនឱ្យតឹងពេក ទើបប្រគំចេញជាសំឡេងពិរោះ។', 'Remedy: Like tuning lute strings: neither slack nor overly tight produces harmonious melody (Soṇa Sutta).') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- The 5 Indriyas & Balas List -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🛡️</span>
        <span>{{ t('លម្អិតពីឥន្ទ្រិយទាំង ៥ & ពលទាំង ៥', 'Anatomy of the 5 Faculties & Powers') }}</span>
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
        <div
          v-for="item in indriyaList"
          :key="item.pali"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono font-bold uppercase text-amber-500">{{ item.pali }}</span>
              <span class="text-2xl">{{ item.icon }}</span>
            </div>
            <h4 class="font-display text-base font-bold mt-2" :style="{ color: 'var(--ink)' }">
              {{ t(item.km, item.en) }}
            </h4>
            <p class="text-xs mt-1.5 leading-relaxed text-stone-500">
              {{ t(item.descKm, item.descEn) }}
            </p>
          </div>

          <div class="mt-4 pt-3 border-t text-[11px]" :style="{ borderColor: 'var(--border)' }">
            <strong class="text-emerald-600 dark:text-emerald-400">ពល ៥ ៖ </strong>
            <span :style="{ color: 'var(--ink-muted)' }">{{ t(item.powerKm, item.powerEn) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const indriyaList = [
  {
    icon: '💎',
    pali: 'Saddhā',
    km: '១. សទ្ធិន្រ្ទិយ (សេចក្តីជឿជាក់បរិសុទ្ធ)',
    en: '1. Saddhā (Conviction / Faith)',
    descKm: 'សេចក្តីជ្រះថ្លាជឿជាក់យ៉ាងមុតមាំលើការត្រាស់ដឹងរបស់ព្រះពុទ្ធ និងច្បាប់កម្មផល។',
    descEn: 'Unshakable conviction in the Buddha’s awakening, virtue, and moral causality.',
    powerKm: 'មិនញាប់ញ័រដោយសេចក្តីអសទ្ធា ឬមន្ទិលសង្ស័យ។',
    powerEn: 'Unshakable by cynicism, skepticism, or false views.'
  },
  {
    icon: '⚡',
    pali: 'Vīriya',
    km: '២. វីរិយិន្រ្ទិយ (សេចក្តីព្យាយាម)',
    en: '2. Vīriya (Energy / Diligence)',
    descKm: 'ការប្រឹងប្រែងលះបង់អកុសល និងបណ្តុះកុសលធម៌ មិនចុះចាញ់ឧបសគ្គ។',
    descEn: 'Relentless energetic exertion abandoning unwholesome states and sustaining wholesome virtues.',
    powerKm: 'មិនញាប់ញ័រដោយសេចក្តីខ្ជិលច្រអូស ឬការអស់សង្ឃឹម។',
    powerEn: 'Unshakable by sloth, defeatism, or procrastination.'
  },
  {
    icon: '👁️',
    pali: 'Sati',
    km: '៣. សតិន្រ្ទិយ (ការរលឹកដឹងខ្លួន)',
    en: '3. Sati (Mindfulness)',
    descKm: 'ការតម្កល់ចិត្តដឹងនូវកាយ វេទនា ចិត្ត ធម៌ ក្នុងបច្ចុប្បន្នខណៈជានិច្ច។',
    descEn: 'Unwavering present-moment awareness anchored to body, feelings, mind, and dhammas.',
    powerKm: 'មិនញាប់ញ័រដោយសេចក្តីភ្លេចភ្លាំង ឬសេចក្តីធ្វេសប្រហែស។',
    powerEn: 'Unshakable by heedlessness, forgetfulness, or distraction.'
  },
  {
    icon: '🧘',
    pali: 'Samādhi',
    km: '៤. សមាធិន្រ្ទិយ (ការតម្កល់ចិត្តនឹង)',
    en: '4. Samādhi (Concentration)',
    descKm: 'ភាពមូលនៃចិត្តលើអារម្មណ៍កម្មដ្ឋានតែមួយ មិនរាយមាយទៅកាន់កាមគុណ។',
    descEn: 'One-pointed unification of consciousness anchored peacefully to the meditation object.',
    powerKm: 'មិនញាប់ញ័រដោយសេចក្តីរាយមាយ ឬការរសាប់រសល់។',
    powerEn: 'Unshakable by restlessness, agitation, or sensory craving.'
  },
  {
    icon: '💡',
    pali: 'Paññā',
    km: '៥. បញ្ញិន្រ្ទិយ (ការយល់ដឹងសច្ចធម៌)',
    en: '5. Paññā (Wisdom / Discernment)',
    descKm: 'ការយល់ឃើញច្បាស់នូវត្រៃលក្ខណ៍ (អនិច្ចំ ទុក្ខំ អនត្តា) និងអរិយសច្ច ៤។',
    descEn: 'Penetrative insight discerning the Three Marks (Anicca, Dukkha, Anattā) and the 4 Truths.',
    powerKm: 'មិនញាប់ញ័រដោយអវិជ្ជា ឬការភាន់ច្រឡំ។',
    powerEn: 'Unshakable by ignorance, delusion, or existential confusion.'
  }
]
</script>
