<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៩៧ — ធម្មចក្កប្បវត្តនសូត្រ', 'GATHA 97 — FIRST DISCOURSE (SN 56.11)') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ធម្មចក្កប្បវត្តនសូត្រ ៖ បឋមទេសនាបង្វិលកង់ធម៌ & មជ្ឈិមាបដិបទា', 'Dhammacakkappavattana Sutta: The First Turning of the Wheel of Dhamma') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ធម្មចក្កប្បវត្តនសូត្រ គឺជាព្រះធម្មទេសនាដំបូងបង្អស់ (បឋមទេសនា) របស់ព្រះសម្មាសម្ពុទ្ធ ដែលទ្រង់បានសម្តែងប្រោសបញ្ចវគ្គីយ៍ទាំង ៥ អង្គ នៅព្រៃឥសិបតនមិគទាយវ័ន ជិតក្រុងពារាណសី ក្នុងថ្ងៃពេញបូណ៌មីខែអាសាឡ្ហ (ថ្ងៃអាសាឡ្ហបូជា)។ ក្នុងព្រះសូត្រជាប្រវត្តិសាស្ត្រនេះ ព្រះពុទ្ធបានប្រកាសបដិសេធនូវចុងបំផុត ២ យ៉ាងដែលជាផ្លូវខុស ហើយបានប្រកាសនូវ «មជ្ឈិមាបដិបទា» (មាគ៌ាកណ្តាល) គឺអរិយមគ្គមានអង្គ ៨ ព្រមទាំងការបង្វិលកង់នៃចតុរារិយសច្ច ៣ ជុំ ១២ អាការៈ ដែលធ្វើឱ្យព្រះកោណ្ឌញ្ញៈបានសម្រេចធម្មចក្ខុ និងធ្វើឱ្យផែនដីនិងទេវលោកទាំងមូលកក្រើករំពើក។', 'The Dhammacakkappavattana Sutta is the historic First Discourse of the Buddha, delivered to the group of five ascetics at the Deer Park in Isipatana near Benares on the full moon day of Āsāḷha. In this monumental sermon, the Buddha rejected the two extremes of sensual self-indulgence and harsh self-mortification, unveiling the Middle Way (Majjhimā Paṭipadā)—the Noble Eightfold Path. By setting in motion the Wheel of the Four Noble Truths through three rounds and twelve modes, Venerable Koṇḍañña realized the pristine Eye of Dhamma, giving birth to the Noble Saṅgha on earth.') }}
    </p>

    <!-- Pali Gatha Box from Dhammacakka Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ទ្វេមេ ភិក្ខវេ អន្តា បព្វជិតេន ន សេវិតព្វា... ឯតេ តេ ភិក្ខវេ ឧភោ អន្តេ អនុបគម្ម មជ្ឈិមា បដិបទា តថាគតេន អភិសម្ពុទ្ធា ចក្ខុករណី ញាណករណី ឧបសview... និព្វានាយ សំវត្តតិ។»', '"There are two extremes, monks, which should not be pursued by one who has gone forth... Avoiding both these extremes, the Tathāgata has realized the Middle Way, which gives vision, gives knowledge, and leads to peace, direct knowledge, awakening, and Nibbāna." — Saṃyutta Nikāya 56.11') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— ធម្មចក្កប្បវត្តនសូត្រ សច្ចសំយុត្ត មហាវារវគ្គ', '— Dhammacakkappavattana Sutta, Sacca Saṃyutta, Mahāvāravagga') }}
      </p>
    </div>

    <!-- The 2 Extremes & The Middle Way -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>☸️</span>
        <span>{{ t('ចុងបំផុត ២ យ៉ាងដែលត្រូវចៀសវាង & មាគ៌ាកណ្តាល', 'The 2 Extremes to Avoid & The Noble Middle Way') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Extreme 1 -->
        <div class="card-paper p-5 rounded-xl border border-rose-500/25 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between pb-3 border-b border-rose-500/20">
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-700 dark:text-rose-300">ចុងទី ១ (ជ្រុល)</span>
              <span class="text-2xl">🍷</span>
            </div>
            <h4 class="font-bold text-base mt-2" :style="{ color: 'var(--ink)' }">{{ t('កាមសុខល្លិកានុយោគ', 'Sensual Indulgence') }}</h4>
            <p class="text-[11px] font-mono text-stone-500">Kāmasukhallikānuyoga</p>
            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t('ការជ្រមុជខ្លួនក្នុងកាមគុណ ៥ ការស្រេកឃ្លានសេចក្តីសុខខាងរូបកាយ។ ព្រះពុទ្ធត្រាស់ថា ៖ ជាផ្លូវថោកទាប ជារឿងអ្នកស្រុក មិនមែនជាផ្លូវរបស់អរិយៈ មិននាំឱ្យផុតទុក្ខ។', 'The devotion to sensual pleasures. Denounced as low, vulgar, common, ignoble, and spiritually useless.') }}
            </p>
          </div>
          <div class="mt-4 pt-3 border-t text-xs text-rose-600 dark:text-rose-400 font-bold">
            🚫 {{ t('គប្បីចៀសវាងជាដាច់ខាត', 'Must be avoided') }}
          </div>
        </div>

        <!-- Middle Path -->
        <div class="card-paper p-5 rounded-xl border-2 border-amber-500/50 flex flex-col justify-between ring-2 ring-amber-500/20">
          <div>
            <div class="flex items-center justify-between pb-3 border-b border-amber-500/30">
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300">មាគ៌ាកណ្តាល</span>
              <span class="text-2xl">🪷</span>
            </div>
            <h4 class="font-bold text-base mt-2" :style="{ color: 'var(--ink)' }">{{ t('មជ្ឈិមាបដិបទា (អដ្ឋង្គិកមគ្គ)', 'The Middle Path (8-Fold Path)') }}</h4>
            <p class="text-[11px] font-mono text-stone-500">Majjhimā Paṭipadā</p>
            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t('មាគ៌ាកណ្តាលមានអង្គ ៨ (សីល សមាធិ បញ្ញា) ដែលមិនតឹងពេក មិនធូរពេក នាំឱ្យកើតបញ្ញាចក្ខុ សេចក្តីស្ងប់រម្ងាប់ និងការត្រាស់ដឹងព្រះនិព្វាន។', 'The Middle Way consisting of the Noble Eightfold Path: harmonious equilibrium giving rise to direct vision, wisdom, peace, and Nibbāna.') }}
            </p>
          </div>
          <div class="mt-4 pt-3 border-t text-xs text-amber-600 dark:text-amber-400 font-bold">
            🌟 {{ t('មាគ៌ាតែមួយគត់ឆ្ពោះទៅនិព្វាន', 'The Sole Path to Liberation') }}
          </div>
        </div>

        <!-- Extreme 2 -->
        <div class="card-paper p-5 rounded-xl border border-rose-500/25 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between pb-3 border-b border-rose-500/20">
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-700 dark:text-rose-300">ចុងទី ២ (ជ្រុល)</span>
              <span class="text-2xl">⛓️</span>
            </div>
            <h4 class="font-bold text-base mt-2" :style="{ color: 'var(--ink)' }">{{ t('អត្តកិលមថានុយោគ', 'Self-Mortification') }}</h4>
            <p class="text-[11px] font-mono text-stone-500">Attakilamathānuyoga</p>
            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t('ការធ្វើទុក្ខបុកម្នេញលើរូបកាយខ្លួនឯងឱ្យឈឺចាប់ (ដូចជាការអត់អាហារ ការឈរជើងមួយ ការដេកលើបន្លា)។ ព្រះពុទ្ធត្រាស់ថា ៖ នាំមកតែទុក្ខ មិនមែនជាផ្លូវអរិយៈឡើយ។', 'The devotion to self-torment and mortification. Denounced as painful, ignoble, and spiritually futile.') }}
            </p>
          </div>
          <div class="mt-4 pt-3 border-t text-xs text-rose-600 dark:text-rose-400 font-bold">
            🚫 {{ t('គប្បីចៀសវាងជាដាច់ខាត', 'Must be avoided') }}
          </div>
        </div>
      </div>
    </div>

    <!-- The 12 Aspects of the 4 Noble Truths -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🔄</span>
        <span>{{ t('វដ្ត ៣ អាការៈ ១២ នៃអរិយសច្ច (តិបរិវដ្ដំ ទ្វាទសាការំ)', 'The 3 Rounds & 12 Modes of the Four Noble Truths') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រះពុទ្ធទ្រង់ត្រាស់ដឹងនូវសច្ចធម៌នីមួយៗតាម ៣ ជុំ ៖ (១) សច្ចញាណ — ដឹងថានេះជាសច្ចៈពិត (២) កិច្ចញាណ — ដឹងថាតើត្រូវធ្វើកិច្ចអ្វីចំពោះសច្ចៈនោះ (ទុក្ខត្រូវកំណត់ដឹង, សមុទ័យត្រូវលះ, និរោធត្រូវធ្វើឱ្យជាក់ច្បាស់, មគ្គត្រូវចម្រើន) និង (៣) កតញាណ — ដឹងថាកិច្ចនោះខ្លួនបានធ្វើរួចរាល់សព្វគ្រប់ហើយ។ ៣ ជុំ x ៤ សច្ចៈ = ១២ អាការៈ ទើបទ្រង់ប្រកាសថាបានត្រាស់ដឹងបរិបូណ៌។', 'Enlightenment unfolded through three knowledges across all four truths: (1) Sacca Ñāṇa: knowing what each truth is; (2) Kicca Ñāṇa: knowing the duty associated with each (Suffering to be comprehended, Origin to be abandoned, Cessation to be realized, Path to be developed); and (3) Kata Ñāṇa: knowing that the duty has been fully accomplished. 3 knowledges × 4 truths = 12 modes, culminating in supreme Buddhahood.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>
