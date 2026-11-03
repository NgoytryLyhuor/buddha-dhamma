<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៦២ — ឧបោសថសីល (សីល ៨) & សីល ១០', 'GATHA 62 — UPOSATHA 8 & 10 PRECEPTS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ឧបោសថសីល (សីល ៨) & សីល ១០ ៖ ការរស់នៅដូចព្រះអរហន្ត', 'Uposatha 8 & 10 Precepts: Living Like the Arahants') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ពាក្យថា «ឧបោសថ» មកពីពាក្យបាលីថា ឧប (ជិត, ចូលទៅ) + វសថ (ការរស់នៅ) មានន័យថា ការចូលទៅរស់នៅយ៉ាងបរិសុទ្ធស្អាតស្អំ ដូចជាព្រះអរហន្ត រយៈពេល ១ ថ្ងៃ ១ យប់ ក្នុងថ្ងៃសីល (៨ កើត/រោច និង ១៥ កើត/រោច)។ ព្រះសម្មាសម្ពុទ្ធទ្រង់សម្ដែងក្នុងវិសាខូបោសថសូត្រ (AN 8.43) ថា បុគ្គលដែលរក្សាឧបោសថសីល (សីល ៨) បានបរិសុទ្ធ ១ ថ្ងៃ ១ យប់ នឹងទទួលបានអានិសង្សធំធេងក្រៃលែង លើសលុបជាងការគ្រងរាជ្យលើមហានគរទាំង ១៦ ក្នុងជម្ពូទ្វីបទៅទៀត។', 'Uposatha derives from Upa (near) + Vasatha (dwelling), signifying entering into holy communion to live in pure emulation of the enlightened Arahants for one full day and night on lunar observance days. In the Visākhuposatha Sutta (AN 8.43), the Buddha taught that observing the Eight Uposatha Precepts yields spiritual merit far outshining sovereign lordship over all sixteen great kingdoms of ancient India.') }}
    </p>

    <!-- The 8 Uposatha Precepts Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>📿</span>
        <span>{{ t('សិក្ខាបទទាំង ៨ នៃឧបោសថសីល (ក្បួនរស់នៅស្អាតស្អំ)', 'The 8 Precepts of the Holy Uposatha') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div
          v-for="(p, idx) in uposathaEight"
          :key="p.pali"
          class="card-paper p-4 sm:p-5 rounded-xl border flex flex-col justify-between"
          :style="{ borderLeftColor: p.isSpecial ? '#d97706' : 'var(--border)' }"
          :class="{ 'border-l-4': p.isSpecial }"
        >
          <div>
            <div class="flex items-center justify-between pb-2 border-b" :style="{ borderColor: 'var(--border)' }">
              <span class="text-xs font-mono font-bold uppercase text-amber-500">ខទី {{ idx + 1 }} · {{ p.pali }}</span>
              <span class="text-2xl">{{ p.icon }}</span>
            </div>
            <h4 class="font-display text-base font-bold mt-2" :style="{ color: 'var(--ink)' }">
              {{ t(p.km, p.en) }}
            </h4>
            <p class="text-xs mt-1.5 text-stone-500 leading-relaxed">
              {{ t(p.descKm, p.descEn) }}
            </p>
          </div>

          <div v-if="p.diffNote" class="mt-3 p-2 rounded bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-700 dark:text-amber-300 font-medium">
            💡 {{ t(p.diffNoteKm, p.diffNoteEn) }}
          </div>
        </div>
      </div>
    </div>

    <!-- Comparison: Sila 5 vs Sila 8 vs Sila 10 -->
    <div class="card-paper p-6 md:p-8 rounded-2xl border mt-8 border-t-4" :style="{ borderTopColor: 'var(--accent)' }">
      <p class="chapter-label">{{ t('ការប្រៀបធៀបសីល', 'PRECEPT COMPARISON') }}</p>
      <h3 class="font-display text-xl font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
        {{ t('ភាពខុសគ្នារវាង សីល ៥, សីល ៨, និង សីល ១០ (សាមណេរ)', 'Differences: 5 Precepts vs 8 Precepts vs 10 Precepts') }}
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-5">
        <div class="p-4 rounded-xl border text-center" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-2xl">🏡</span>
          <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">សីល ៥ (និច្ចសីល)</h4>
          <p class="text-xs text-amber-500 font-bold mt-0.5">សម្រាប់គ្រហស្ថទូទៅ</p>
          <p class="text-xs mt-2 text-stone-500 leading-relaxed">
            រក្សាជារៀងរាល់ថ្ងៃ ដើម្បីការពារកុំឱ្យធ្លាក់នរក។ អនុញ្ញាតឱ្យសេពកាមគុណជាមួយប្តីប្រពន្ធស្របច្បាប់ និងហូបចុកពេលល្ងាចបាន។
          </p>
        </div>

        <div class="p-4 rounded-xl border text-center bg-amber-500/5 border-amber-500/30">
          <span class="text-2xl">📿</span>
          <h4 class="font-bold text-sm mt-1 text-amber-600 dark:text-amber-400">សីល ៨ (ឧបោសថសីល)</h4>
          <p class="text-xs text-amber-500 font-bold mt-0.5">សម្រាប់ថ្ងៃសីល (១ ថ្ងៃ ១ យប់)</p>
          <p class="text-xs mt-2 text-stone-500 leading-relaxed">
            លើកកម្ពស់ចិត្តឱ្យស្មើនឹងព្រះអរហន្ត ៖ តមការសេពមេថុនដាច់ខាត, តមអាហារពេលរសៀល, មិនលាបម្សៅក្រអូប, មិនដេកពូកខ្ពស់។
          </p>
        </div>

        <div class="p-4 rounded-xl border text-center" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-2xl">🟤</span>
          <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">សីល ១០ (សាមណេរសីល)</h4>
          <p class="text-xs text-amber-500 font-bold mt-0.5">សម្រាប់កូននេនបួស</p>
          <p class="text-xs mt-2 text-stone-500 leading-relaxed">
            បំបែកខទី ៧ នៃសីល ៨ ជាពីរ (មិនរាំច្រៀង ១, មិនលាបម្សៅ ១) និងបន្ថែមខទី ១០ គឺ <strong>«មិនទទួល ឬកាន់កាប់លុយកាក់មាសប្រាក់»</strong>។
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const uposathaEight = [
  {
    icon: '🕊️',
    pali: 'Pāṇātipātā',
    km: '១. វៀរចាកការសម្លាប់ជីវិតសត្វ',
    en: '1. Abstaining from Taking Life',
    descKm: 'មិនសម្លាប់ មិនវាយដំ មិនធ្វើបាបសត្វមានជីវិត ទាំងមនុស្ស ទាំងសត្វតិរច្ឆាន ដោយចិត្តមេត្តា។',
    descEn: 'Refraining from killing or harming any living creature, abiding with a heart full of compassion.',
    isSpecial: false
  },
  {
    icon: '🤝',
    pali: 'Adinnādānā',
    km: '២. វៀរចាកការលួចទ្រព្យគេ',
    en: '2. Abstaining from Taking What is Not Given',
    descKm: 'មិនលួច មិនប្លន់ មិនកេងបន្លំទ្រព្យសម្បត្តិរបស់អ្នកដទៃដែលគេមិនបានឱ្យ។',
    descEn: 'Refraining from stealing, robbery, fraud, or taking possession of what belongs to others.',
    isSpecial: false
  },
  {
    icon: '🚫',
    pali: 'Abrahmacariyā',
    km: '៣. វៀរចាកការសេពមេថុន (ព្រហ្មចរិយវត្ត)',
    en: '3. Abstaining from All Sexual Activity',
    descKm: 'តមការរួមដំណេក ការសេពមេថុនដាច់ខាត ទោះបីជាប្តីប្រពន្ធខ្លួនឯងក៏ដោយ រយៈពេល ១ ថ្ងៃ ១ យប់។',
    descEn: 'Strict celibacy for 24 hours, refraining entirely from sexual relations even with one’s spouse.',
    isSpecial: true,
    diffNoteKm: 'ខុសពីសីល ៥ (កាមេសុមិច្ឆាចារា ដែលហាមតែការក្បត់ចិត្ត តែនៅរួមដំណេកជាមួយប្តីប្រពន្ធបាន)។ ក្នុងសីល ៨ ត្រូវតមទាំងស្រុង!',
    diffNoteEn: 'Differs from 5 precepts: in 8 precepts, celibacy is total (Abrahmacariya).'
  },
  {
    icon: '🗣️',
    pali: 'Musāvādā',
    km: '៤. វៀរចាកការនិយាយកុហក',
    en: '4. Abstaining from False Speech',
    descKm: 'មិននិយាយពាក្យមិនពិត មិនបោកប្រាស់ និយាយតែពាក្យសច្ចៈ និងពាក្យមានប្រយោជន៍។',
    descEn: 'Refraining from lying, deception, exaggerations; speaking words of truth and harmony.',
    isSpecial: false
  },
  {
    icon: '🍷',
    pali: 'Surāmerayamajja',
    km: '៥. វៀរចាកការសេពគ្រឿងស្រវឹង',
    en: '5. Abstaining from Intoxicants',
    descKm: 'មិនសេពគ្រឿងស្រវឹង ស្រា បៀរ ថ្នាំញៀន ដែលនាំឱ្យបាត់បង់ស្មារតី និងសេចក្តីប្រមាទ។',
    descEn: 'Refraining from wine, liquor, and drugs that cloud the mind and foster heedlessness.',
    isSpecial: false
  },
  {
    icon: '🍲',
    pali: 'Vikālabhojanā',
    km: '៦. វៀរចាកការបរិភោគអាហារពេលរសៀល',
    en: '6. Abstaining from Afternoon Meals',
    descKm: 'មិនបរិភោគអាហារទំពាស៊ី ចាប់ពីថ្ងៃត្រង់ (ម៉ោង ១២ ថ្ងៃត្រង់) រហូតដល់ព្រលឹមថ្ងៃស្អែក (ឆាន់តែទឹកអដ្ឋបានបាន)។',
    descEn: 'Refraining from consuming solid food from solar noon until dawn the following morning.',
    isSpecial: true,
    diffNoteKm: 'ជួយឱ្យរាងកាយស្រាលស្រឡះ មិនឆ្អល់ពោះ កាត់បន្ថយចំណង់កាមគុណ និងងាយស្រួលសមាធិ។',
    diffNoteEn: 'Lightens the physical body, subdues sensuality, and facilitates deep meditation.'
  },
  {
    icon: '💃',
    pali: 'Naccagītavādita...',
    km: '៧. វៀរចាកការរាំ ច្រៀង ប្រគំតន្ត្រី & លាបគ្រឿងក្រអូប',
    en: '7. Abstaining from Shows, Perfumes & Beautification',
    descKm: 'មិនរាំ មិនច្រៀង មិនលេងតន្ត្រី មិនមើលល្ខោន និងមិនតុបតែងកាយដោយផ្កាកម្រង ម្សៅ ទឹកអប់ គ្រឿងក្រអូប។',
    descEn: 'Refraining from dancing, singing, music, theatrical entertainment, perfumes, cosmetics, and garlands.',
    isSpecial: true,
    diffNoteKm: 'ដើម្បីដកចិត្តចេញពីការជាប់ជំពាក់លើសម្រស់ក្លែងក្លាយខាងក្រៅ មកផ្តោតលើភាពស្អាតនៃចិត្ត។',
    diffNoteEn: 'Shifts attention away from artificial bodily vanity onto inward mental purification.'
  },
  {
    icon: '🛏️',
    pali: 'Uccāsayanamahāsayanā',
    km: '៨. វៀរចាកការដេកលើពូកកម្រាលខ្ពស់ប្រណីត',
    en: '8. Abstaining from High and Luxurious Beds',
    descKm: 'មិនដេកលើគ្រែ ឬពូកកម្រាលដ៏ខ្ពស់ទន់ជ្រុលដែលនាំឱ្យកើតសេចក្តីស្រណុកភ្លេចខ្លួន (ដេកលើកន្ទេល ឬកម្រាលសាមញ្ញ)។',
    descEn: 'Refraining from sleeping on high, opulent, feather-filled mattresses that arouse lust and indulgence.',
    isSpecial: true,
    diffNoteKm: 'បណ្តុះការរស់នៅសាមញ្ញ ដូចព្រះអរហន្តដែលគង់នៅក្រោមម្លប់ឈើ ឬលើកម្រាលស្មៅ។',
    diffNoteEn: 'Emulates the simplicity of enlightened sages resting humbly upon simple mats.'
  }
]
</script>
