<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៩៨ — អនត្តលក្ខណសូត្រ', 'GATHA 98 — ANATTALAKKHAṆA SUTTA (SN 22.59)') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('អនត្តលក្ខណសូត្រ ៖ ធម្មទេសនាដែលនាំឱ្យបញ្ចវគ្គីយ៍សម្រេចព្រះអរហន្ត', 'Anattalakkhaṇa Sutta: The Discourse on Non-Self & The First Arahants') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('អនត្តលក្ខណសូត្រ គឺជាព្រះធម្មទេសនាទីពីររបស់ព្រះសម្មាសម្ពុទ្ធ ដែលទ្រង់បានសម្តែងប្រោសបញ្ចវគ្គីយ៍ទាំង ៥ អង្គ នៅព្រៃឥសិបតនមិគទាយវ័ន ក្រោយបឋមទេសនាបាន ៥ ថ្ងៃ។ នៅក្នុងព្រះសូត្រដ៏ជ្រាលជ្រៅនេះ ព្រះពុទ្ធបានវិភាគបំបែកខន្ធទាំង ៥ (រូប វេទនា សញ្ញា សង្ខារ វិញ្ញាណ) ដោយទ្រង់បានបង្ហាញភស្តុតាងជាក់ស្តែងថា ខន្ធទាំងពួងមិនមែនជា «អត្តា» (មិនមែនជារបស់យើង មិនមែនជាខ្លួនយើង) ឡើយ ព្រោះបើយើងជាម្ចាស់ពិតប្រាកដ យើងច្បាស់ជាអាចបញ្ជាកុំឱ្យចាស់ កុំឱ្យឈឺ និងកុំឱ្យស្លាប់បាន។ ក្រោយពេលចប់ធម្មទេសនា ព្រះបញ្ចវគ្គីយ៍ទាំង ៥ អង្គបានសម្រេចជាព្រះអរហន្តទាំងអស់ ធ្វើឱ្យមានព្រះអរហន្ត ៦ អង្គកើតឡើងដំបូងបង្អស់ក្នុងលោក។', 'The Anattalakkhaṇa Sutta is the Second Discourse of the Buddha, delivered to the five ascetics at the Deer Park five days after the first sermon. In this monumental teaching, the Buddha systematically deconstructed the Five Aggregates (form, feeling, perception, mental formations, and consciousness), demonstrating empirically that none of them can be identified as a "Self" (Attā). If the body or mind were truly our own, we could command them never to age, sicken, or die. Upon hearing this discourse, the minds of all five ascetics were completely liberated from all defilements, bringing into existence the first six Arahants in human history.') }}
    </p>

    <!-- Pali Gatha Box from Anattalakkhana Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«រូបំ ភិក្ខវេ អនត្តា... វេទនា អនត្តា... សញ្ញា អនត្តា... សង្ខារា អនត្តា... វិញ្ញាណំ អនត្តា។ នេតំ មម, នេសោហមស្មិ, ន មេសោ អត្តាតិ។»', '"Form, monks, is non-self... feeling is non-self... perception is non-self... volitional formations are non-self... consciousness is non-self. This is not mine, this I am not, this is not my self." — Saṃyutta Nikāya 22.59') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— អនត្តលក្ខណសូត្រ ខន្ធសំយុត្ត ខន្ធវារវគ្គ', '— Anattalakkhaṇa Sutta, Khandha Saṃyutta, Khandhavāravagga') }}
      </p>
    </div>

    <!-- The 3 Analytical Questions Grid -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🔍</span>
        <span>{{ t('សំណួរពិចារណា ៣ ដំណាក់កាលដែលនាំឱ្យត្រាស់ដឹង', 'The 3-Step Inquiry That Liberates Consciousness') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="q in questions" :key="q.id" class="card-paper p-5 rounded-xl border flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                {{ q.num }}
              </span>
              <span class="text-2xl">{{ q.icon }}</span>
            </div>
            <h4 class="font-bold text-base mt-3" :style="{ color: 'var(--ink)' }">{{ t(q.titleKm, q.titleEn) }}</h4>
            <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(q.descKm, q.descEn) }}
            </p>
          </div>
          <div class="mt-4 pt-3 border-t text-xs font-bold text-amber-700 dark:text-amber-300">
            👉 {{ t(q.answerKm, q.answerEn) }}
          </div>
        </div>
      </div>
    </div>

    <!-- The 3 Mantras of Detachment -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🗡️</span>
        <span>{{ t('ដាវកាត់ផ្តាច់ចំណងឧបាទានទាំង ៣ (នេតំ មម...)', 'The 3 Blades of Detachment: Dismantling the Illusion') }}</span>
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 text-xs">
        <div class="p-3.5 rounded-xl border bg-stone-500/5" :style="{ borderColor: 'var(--border)' }">
          <span class="font-mono font-bold text-amber-700 dark:text-amber-300 block mb-1">១. នេតំ មម (Netam mama)</span>
          <p class="text-stone-600 dark:text-stone-400"><strong>នុ៎ះមិនមែនជារបស់យើង ៖</strong> {{ t('កម្ចាត់ «តណ្ហា» និងការប្រកាន់កម្មសិទ្ធិ។', 'Uproots craving (Taṇhā) and the illusion of ownership.') }}</p>
        </div>
        <div class="p-3.5 rounded-xl border bg-stone-500/5" :style="{ borderColor: 'var(--border)' }">
          <span class="font-mono font-bold text-amber-700 dark:text-amber-300 block mb-1">២. នេសោហមស្មិ (Nesohamasmi)</span>
          <p class="text-stone-600 dark:text-stone-400"><strong>យើងមិនមែនជានុ៎ះ ៖</strong> {{ t('កម្ចាត់ «មានៈ» និងការប្រកាន់អួតអាងលើខ្លួនឯង។', 'Uproots conceit (Māna) and personal self-inflation.') }}</p>
        </div>
        <div class="p-3.5 rounded-xl border bg-stone-500/5" :style="{ borderColor: 'var(--border)' }">
          <span class="font-mono font-bold text-amber-700 dark:text-amber-300 block mb-1">៣. ន មេសោ អត្តា (Na meso attā)</span>
          <p class="text-stone-600 dark:text-stone-400"><strong>នុ៎ះមិនមែនជាខ្លួនយើង ៖</strong> {{ t('កម្ចាត់ «ទិដ្ឋិ» និងជំនឿថាមានព្រលឹងអមតៈ។', 'Uproots wrong view (Diṭṭhi) and the belief in an eternal soul.') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const questions = [
  {
    id: 1,
    num: '១',
    icon: '⏳',
    titleKm: 'ទៀង ឬ មិនទៀង?',
    titleEn: 'Is It Permanent or Impermanent?',
    descKm: 'ព្រះពុទ្ធសួរថា ៖ «រូប វេទនា សញ្ញា សង្ខារ វិញ្ញាណ ទៀងទាត់ ឬមិនទៀងទាត់?» ព្រះបញ្ចវគ្គីយ៍ឆ្លើយថា ៖ «មិនទៀងទាត់ ព្រះអង្គ!»',
    descEn: 'The Buddha asked: "Is form, feeling, perception, formations, or consciousness permanent or impermanent?" They answered: "Impermanent, Venerable Sir."',
    answerKm: 'អនិច្ចំ — មិនទៀងទាត់ កើតឡើងហើយរលត់ទៅជាធម្មតា',
    answerEn: 'Anicca: Arising and ceasing relentlessly',
  },
  {
    id: 2,
    num: '២',
    icon: '⚡',
    titleKm: 'ជាទុក្ខ ឬ ជាសុខ?',
    titleEn: 'Is It Suffering or Happiness?',
    descKm: 'ព្រះពុទ្ធសួរថា ៖ «ចុះរបស់ណាដែលមិនទៀង ប្រែប្រួលជាធម្មតា តើរបស់នោះជាទុក្ខ ឬជាសុខ?» ព្រះបញ្ចវគ្គីយ៍ឆ្លើយថា ៖ «ជាទុក្ខ ព្រះអង្គ!»',
    descEn: 'The Buddha asked: "Is that which is impermanent and subject to change suffering or happiness?" They answered: "Suffering, Venerable Sir."',
    answerKm: 'ទុក្ខំ — ជាទុក្ខ ព្រោះត្រូវបែកបាក់ និងទ្រាំទ្របានដោយកម្រ',
    answerEn: 'Dukkha: Unsatisfactory because it cannot be sustained',
  },
  {
    id: 3,
    num: '៣',
    icon: '🕊️',
    titleKm: 'គួរឬទេដែលប្រកាន់ថា «ជារបស់យើង»?',
    titleEn: 'Fit to be Regarded as "Self"?',
    descKm: 'ព្រះពុទ្ធសួរថា ៖ «ចុះរបស់ណាដែលមិនទៀង ជាទុក្ខ ប្រែប្រួលជាធម្មតា តើគួរសមទេបើកំណត់ថា នុ៎ះជារបស់យើង យើងជានុ៎ះ នុ៎ះជាខ្លួនយើង?» ព្រះបញ្ចវគ្គីយ៍ឆ្លើយថា ៖ «មិនគួរសមទាល់តែសោះ ព្រះអង្គ!»',
    descEn: 'The Buddha asked: "Is it fitting to regard that which is impermanent and suffering as: \'This is mine, this I am, this is my self\'?" They answered: "Certainly not, Venerable Sir."',
    answerKm: 'អនត្តា — មិនមែនតួខ្លួន មិនមែនរបស់អញឡើយ',
    answerEn: 'Anattā: Impersonal, conditioned, and empty of a core self',
  },
]
</script>
