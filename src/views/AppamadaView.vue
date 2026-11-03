<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៧៧ — អប្បមាទធម៌ & ព្រះបច្ឆិមវាចា', 'GATHA 77 — HEEDFULNESS & FINAL WORDS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('អប្បមាទធម៌ & ព្រះបច្ឆិមវាចា ៖ ស្នាមជើងដំរីនៃព្រះធម៌ ៨៤,០០០ ធម្មក្ខន្ធ', 'Appamāda (Heedfulness) & The Buddha\'s Last Words') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('អប្បមាទធម៌ សំដៅលើសេចក្តីមិនធ្វេសប្រហែស ការមានស្មារតីភ្ញាក់រឭកជានិច្ច និងការរស់នៅដោយដឹងគុណតម្លៃនៃពេលវេលា។ ព្រះសម្មាសម្ពុទ្ធទ្រង់បានត្រាស់លើកតម្កើងអប្បមាទធម៌ថាជា «កំពូលនៃធម៌ទាំងពួង» ប្រៀបដូចជាស្នាមជើងដំរីដ៏ធំ ដែលអាចដាក់ស្នាមជើងសត្វទាំងអស់ក្នុងព្រៃចូលបាន។ មុនពេលព្រះអង្គទ្រង់បរិនិព្វាននៅក្រោមដើមសាលព្រឹក្សទាំងគូ ព្រះឱស្ឋចុងក្រោយបង្អស់របស់ព្រះអង្គ (ព្រះបច្ឆិមវាចា) មិនបានផ្តាំផ្ញើអ្វីក្រៅពីការដាស់តឿនឱ្យសាវ័កទាំងឡាយ «បំពេញកិច្ចដោយសេចក្តីមិនធ្វេសប្រហែស» នោះឡើយ។', 'Appamāda (heedfulness, vigilance, non-complacency) is proclaimed by the Buddha as the supreme crown among all wholesome virtues. In the discourses, He compared heedfulness to the giant footprint of an elephant, which effortlessly encompasses the footprints of every other forest creature. Moments before attaining Mahāparinibbāna beneath the twin Sal trees at Kusināra, the Buddha\'s final uttered words on earth were neither a metaphysical thesis nor a mystical ritual, but an urgent call: "All conditioned things decay; accomplish your goal with heedfulness!"') }}
    </p>

    <!-- The Buddha's Sacred Final Words (Dīgha Nikāya 16) -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ហន្ទទានិ ភិក្ខវេ អាមន្តយាមិ វោ, វយធម្មា សង្ខារា, អប្បមាទេន សម្បាទេថ។»', '"Now, monks, I declare to you: conditioned things are subject to decay. Strive on diligently with heedfulness!" — Mahāparinibbāna Sutta (DN 16)') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— ព្រះបច្ឆិមវាចា មហាបរិនិព្វានសូត្រ ទីឃនិកាយ មហាវគ្គ', '— The Buddha\'s Final Words, Mahāparinibbāna Sutta') }}
      </p>
    </div>

    <!-- The Elephant Footprint Simile -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🐘</span>
        <span>{{ t('ឧបមាស្នាមជើងដំរី (ហត្ថិបទោបមសូត្រ)', 'The Simile of the Elephant\'s Footprint') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ដូចជាស្នាមជើងនៃសត្វទាំងអស់ដែលដើរលើដី មិនថាតោ ខ្លា រមាំង ឬទន្សាយ សុទ្ធតែអាចដាក់ចុះក្នុងស្នាមជើងដំរីបានទាំងអស់ យ៉ាងណាមិញ ព្រះធម៌ទាំង ៨៤,០០០ ធម្មក្ខន្ធ ទាំងសីល សមាធិ និងបញ្ញា សុទ្ធតែប្រជុំចុះក្នុង «អប្បមាទធម៌» តែមួយគត់នេះ។ បើបុគ្គលណាមានអប្បមាទធម៌ បុគ្គលនោះឈ្មោះថាបានក្តោបក្តាប់ព្រះធម៌ទាំងអស់ហើយ។', 'Just as the footprints of all walking animals—lions, tigers, deer, and birds—fit comfortably within the mighty footprint of an elephant, so too all eighty-four thousand Dhamma teachings, encompassing morality, concentration, and insight, are condensed completely within the single virtue of Appamāda.') }}
      </p>
    </div>

    <!-- Dual Contrast: Appamāda vs Pamāda (Dhammapada 21) -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>⚖️</span>
        <span>{{ t('ផ្លូវរស់ vs ផ្លូវស្លាប់ ក្នុងព្រះធម្មបទ', 'The Path to the Deathless vs The Path to Ruin') }}</span>
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- Appamada -->
        <div class="card-paper p-5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between pb-3 border-b border-emerald-500/20">
              <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">អមតំ បទំ — ផ្លូវមិនស្លាប់</span>
              <span class="text-3xl">🕊️</span>
            </div>
            <h4 class="font-bold text-base mt-3 text-emerald-700 dark:text-emerald-300">
              {{ t('អប្បមាទោ អមតំ បទំ (មិនធ្វេសប្រហែស)', 'Appamādo Amatam Padaṃ (Heedfulness)') }}
            </h4>
            <p class="text-xs sm:text-sm mt-2 leading-relaxed text-stone-600 dark:text-stone-300">
              {{ t('«សេចក្តីមិនធ្វេសប្រហែស ជាផ្លូវនៃសេចក្តីមិនស្លាប់ (ព្រះនិព្វាន) អ្នកមិនធ្វេសប្រហែស ឈ្មោះថាមិនស្លាប់ឡើយ។»', '"Heedfulness is the path to the Deathless (Nibbāna). Those who are heedful do not die; they live in lucid awareness."') }}
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-emerald-500/20 text-xs text-stone-500">
            {{ t('ដឹងខ្លួនជានិច្ច មិនពន្យារពេលធ្វើល្អ រក្សាសតិគ្រប់ឥរិយាបថ។', 'Living mindfully in every breath, seizing each moment for virtue.') }}
          </div>
        </div>

        <!-- Pamada -->
        <div class="card-paper p-5 rounded-xl border border-rose-500/30 bg-rose-500/5 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between pb-3 border-b border-rose-500/20">
              <span class="text-xs font-mono font-bold text-rose-600 dark:text-rose-400">មច្ចុនោ បទំ — ផ្លូវនៃសេចក្តីស្លាប់</span>
              <span class="text-3xl">💀</span>
            </div>
            <h4 class="font-bold text-base mt-3 text-rose-700 dark:text-rose-300">
              {{ t('បមាទោ មច្ចុនោ បទំ (សេចក្តីធ្វេសប្រហែស)', 'Pamādo Maccuno Padaṃ (Complacency)') }}
            </h4>
            <p class="text-xs sm:text-sm mt-2 leading-relaxed text-stone-600 dark:text-stone-300">
              {{ t('«សេចក្តីធ្វេសប្រហែស ជាផ្លូវនៃសេចក្តីស្លាប់ អ្នកដែលធ្វេសប្រហែស ទុកដូចជាមនុស្សដែលស្លាប់ទៅហើយ។»', '"Complacency is the path to death. Those who are complacent and heedless are as if already dead."') }}
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-rose-500/20 text-xs text-stone-500">
            {{ t('គិតថាខ្លួននៅក្មេង ចាំចាស់ចាំសាងបុណ្យ រស់នៅបណ្តែតបណ្តោយតាមកិលេស។', 'Procrastinating practice, intoxicated with youth, health, and life.') }}
          </div>
        </div>
      </div>
    </div>

    <!-- 4 Areas to Apply Appamada in Daily Life -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🌱</span>
        <span>{{ t('ការអនុវត្តអប្បមាទធម៌ ៤ យ៉ាងក្នុងជីវិតរស់នៅ', '4 Domains of Heedfulness in Practical Life') }}</span>
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
        <div class="p-4 rounded-xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
          <strong class="font-bold text-amber-700 dark:text-amber-300 block mb-1">១. មិនធ្វេសប្រហែសក្នុងអាយុសង្ខារ</strong>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed text-xs">
            {{ t('ដឹងថាថ្ងៃស្អែក ឬសេចក្តីស្លាប់ មួយណាមកដល់មុនមិនអាចដឹងឡើយ កុំពន្យារពេលធ្វើអំពើល្អទៅថ្ងៃមុខ។', 'Reflecting that tomorrow or death—no one knows which arrives first. Never defer goodness.') }}
          </p>
        </div>
        <div class="p-4 rounded-xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
          <strong class="font-bold text-amber-700 dark:text-amber-300 block mb-1">២. មិនធ្វេសប្រហែសក្នុងការរក្សាសីល</strong>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed text-xs">
            {{ t('ប្រុងប្រយ័ត្នគ្រប់ពាក្យសំដី និងសកម្មភាព មិនឱ្យបាបកម្មតូចតាចជ្រៀតចូលក្នុងសន្តានចិត្តបានឡើយ។', 'Guarding speech and conduct meticulously against even the subtlest moral compromises.') }}
          </p>
        </div>
        <div class="p-4 rounded-xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
          <strong class="font-bold text-amber-700 dark:text-amber-300 block mb-1">៣. មិនធ្វេសប្រហែសក្នុងការបំពេញការងារ</strong>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed text-xs">
            {{ t('បំពេញភារកិច្ចដោយហ្មត់ចត់ មានការទទួលខុសត្រូវខ្ពស់ មិនខ្ជិលច្រអូស និងមិនបោកប្រាស់អ្នកដទៃ។', 'Executing professional duties with high accountability, thoroughness, and dedicated focus.') }}
          </p>
        </div>
        <div class="p-4 rounded-xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
          <strong class="font-bold text-amber-700 dark:text-amber-300 block mb-1">៤. មិនធ្វេសប្រហែសក្នុងការហ្វឹកហាត់ចិត្ត</strong>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed text-xs">
            {{ t('ឆ្លៀតចម្រើនសមាធិ និងសតិរាល់ថ្ងៃ ដើម្បីកុំឱ្យចិត្តលង់ក្នុងតណ្ហា កំហឹង និងការភ័ន្តច្រឡំ។', 'Cultivating mindfulness and meditation daily, protecting the heart from unwholesome storms.') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>
