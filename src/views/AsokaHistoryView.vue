<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🏛️ {{ t('មហាវង្ស & សិលាចារឹកអសោក · ប្រវត្តិសាស្ត្រពុទ្ធសាសនា', 'Mahāvaṁsa & Asoka Rock Edicts · Buddhist History') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('ព្រះបាទធម្មាសោក និងការផ្សាយធម៌មកសុវណ្ណភូមិ', 'Emperor Asoka & The Mission to Suvaṇṇabhūmi') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ប្រវត្តិសាស្ត្រដ៏អស្ចារ្យនៃការផ្លាស់ប្ដូរចិត្តរបស់ស្ដេចចក្រពត្តិឥណ្ឌា ពី «ចណ្ឌាសោក» (ស្ដេចកាចសាហាវបង្ហូរឈាម) មកជា «ធម្មាសោក» (ស្ដេចធម៌សន្តិភាព)។ ព្រះអង្គបានឧបត្ថម្ភសង្គាយនាលើកទី ៣ និងបានចាត់បញ្ជូនគណៈបេសកកម្មផ្សាយធម៌ ៩ ខ្សែ ពិសេសព្រះថេរៈ សោណៈ និងឧត្តរៈ មកកាន់ដែនដីសុវណ្ណភូមិ (រួមទាំងកម្ពុជា) ដែលជាឫសគល់នៃពុទ្ធសាសនាខ្មែររហូតមកដល់សព្វថ្ងៃ។',
            'The dramatic conversion of Emperor Asoka from "Caṇḍāsoka" (The Fierce Conqueror) to "Dhammāsoka" (The Righteous Monarch). Sponsoring the 3rd Buddhist Council, he dispatched 9 historic Dhamma missions across the ancient world—most notably Venerables Soṇa and Uttara to Suvaṇṇabhūmi (Southeast Asia/Cambodia)—founding the heritage of Khmer Theravāda Buddhism.'
          ) }}
        </p>
      </div>
    </section>

    <!-- Key Timeline Stages -->
    <section class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Stage 1 -->
        <div class="card-paper p-6 space-y-3 border flex flex-col justify-between"
             :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-3xl p-3 rounded-2xl" :style="{ background: 'var(--bg-card-2)' }">⚔️</span>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold text-red-600 bg-red-100 dark:bg-red-950/40">
                ដំណាក់កាលទី ១
              </span>
            </div>
            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ t('សង្គ្រាមកាលិង្គ & ការភ្ញាក់រលឹក', 'The Kalinga War & Awakening') }}
            </h3>
            <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
              {{ t(
                'ក្នុងសង្គ្រាមដណ្ដើមរដ្ឋកាលិង្គ មនុស្សជាង ១០០,០០០ នាក់ត្រូវស្លាប់ និង ១៥០,០០០ នាក់ត្រូវនិរទេស។ ឃើញទិដ្ឋភាពបង្ហូរឈាមដ៏រន្ធត់ ព្រះបាទអសោកកើតសេចក្តីសង្វេគតក់ស្លុតក្នុងព្រះទ័យយ៉ាងខ្លាំង។ ពេលបានជួបសាមណេរ និគ្រោធ ឃើញឫរិយាបថស្ងប់ថ្លៃថ្នូរ ព្រះអង្គក៏បានលះបង់សង្គ្រាមទាំងស្រុង ហើយចូលសុំសិទ្ធិជ្រកក្រោមម្លប់ព្រះពុទ្ធសាសនា។',
                'Witnessing over 100,000 casualties in the brutal conquest of Kalinga, Asoka was stricken with profound remorse. Encountering the serene novice Nigrodha, the Emperor renounced military conquest forever, turning to the conquest by Dhamma (Dharma-vijaya).'
              ) }}
            </p>
          </div>
        </div>

        <!-- Stage 2 -->
        <div class="card-paper p-6 space-y-3 border flex flex-col justify-between"
             :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-3xl p-3 rounded-2xl" :style="{ background: 'var(--bg-card-2)' }">📜</span>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold text-amber-600 bg-amber-100 dark:bg-amber-950/40">
                ដំណាក់កាលទី ២
              </span>
            </div>
            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ t('សង្គាយនាទី ៣ & សិលាចារឹកធម៌', 'The 3rd Council & Edicts') }}
            </h3>
            <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
              {{ t(
                'ព្រះបាទធម្មាសោក បានឧបត្ថម្ភការធ្វើសង្គាយនាព្រះត្រៃបិដកលើកទី ៣ នៅក្រុងបាដលីបុត្ត ដឹកនាំដោយព្រះមោគ្គលីបុត្តតិស្សត្ថេរ ដើម្បីជម្រះសាសនាឱ្យបរិសុទ្ធ។ ព្រះអង្គបានចារឹកធម៌លើសសរថ្មរាប់ពាន់កន្លែង ទូទាំងទ្វីប បង្កើតមន្ទីរពេទ្យព្យាបាលមនុស្សនិងសត្វ ជីកអណ្តូងទឹក និងដាំដើមឈើម្លប់តាមផ្លូវ។',
                'Asoka sponsored the 3rd Buddhist Council at Pāṭaliputta under Moggaliputta Tissa Thera to purge corrupt doctrines. He erected famous Ashoka Pillars inscribed with universal ethics, established state-funded medical dispensaries for humans and animals, and planted shade groves along roads.'
              ) }}
            </p>
          </div>
        </div>

        <!-- Stage 3 -->
        <div class="card-paper p-6 space-y-3 border flex flex-col justify-between"
             :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="text-3xl p-3 rounded-2xl" :style="{ background: 'var(--bg-card-2)' }">🌏</span>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-950/40">
                ដំណាក់កាលទី ៣
              </span>
            </div>
            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ t('បេសកកម្មមកសុវណ្ណភូមិ (ខ្មែរ)', 'Mission to Suvaṇṇabhūmi') }}
            </h3>
            <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
              {{ t(
                'ព្រះអង្គបានបញ្ជូនគណៈបេសកកម្មផ្សាយធម៌ ៩ ខ្សែ ទៅកាន់ពិភពលោក។ ក្នុងនោះ ខ្សែទី ៨ ដឹកនាំដោយព្រះសោណត្ថេរ និងព្រះឧត្តរត្ថេរ ត្រូវបានចាត់មកកាន់ដែនដី «សុវណ្ណភូមិ» (អាស៊ីអាគ្នេយ៍/កម្ពុជា) បានប្រោសប្រជាជនឱ្យជ្រះថ្លាក្នុងរតនត្រ័យ រក្សាសីល ៥ ដែលជាគ្រឹះវប្បធម៌ និងអត្តសញ្ញាណជាតិខ្មែរជាង ២ ពាន់ឆ្នាំ។',
                'Nine missionary delegations were dispatched across the known world. The 8th delegation, led by Elders Soṇa and Uttara, arrived in Suvaṇṇabhūmi (Southeast Asia/Cambodia), transmitting Theravāda texts, the 5 Precepts, and compassion as the cultural soul of the region for millennia.'
              ) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Historic Moral Quote -->
    <section class="card-paper p-6 sm:p-8 space-y-3 border text-center max-w-2xl mx-auto"
             :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
      <span class="text-3xl">🏛️</span>
      <h3 class="text-lg font-bold font-serif" :style="{ color: 'var(--ink)' }">
        {{ t('សិលាចារឹកលេខ ១៣ របស់ព្រះបាទធម្មាសោក', 'Rock Edict XIII of Emperor Asoka') }}
      </h3>
      <p class="text-xs sm:text-sm leading-relaxed italic font-serif" :style="{ color: 'var(--ink-muted)' }">
        {{ t(
          '« ជ័យជម្នះពិតប្រាកដតែមួយគត់ មិនមែនជាការយកឈ្នះដោយកម្លាំងអាវុធ និងការសម្លាប់បង្ហូរឈាមឡើយ តែជាជ័យជម្នះដោយធម៌ (ធម្មវិជ័យ) គឺការយកឈ្នះចិត្តមនុស្សដោយសេចក្តីល្អ មេត្តា និងសេចក្តីស្ងប់។ »',
          '"The only true conquest is the conquest through Dhamma (Dharma-vijaya)—winning human hearts through truth, justice, moral kindness, and universal peace, not by the sword."'
        ) }}
      </p>
    </section>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>
