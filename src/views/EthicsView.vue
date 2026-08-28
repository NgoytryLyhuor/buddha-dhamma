<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ០៥ — សីល និងបារមី', 'GATHA 05 — ETHICS & PERFECTIONS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('សីលជាគ្រឹះ បារមីជាជណ្តើរ', 'Conduct is the Foundation, Perfections the Stairs') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('សីល គឺជាច្បាប់ហ្វឹកហាត់ឲ្យកាយ វាចា ចិត្ត បរិសុទ្ធ។ ដូចផ្ទះត្រូវការគ្រឹះ ផ្លូវធម៌ត្រូវការសីលជាមុនសិន ទើបសមាធិ បញ្ញា កើតឡើងបាន។', 'Sīla is the training that keeps body, speech and mind pure. As a house needs a foundation, the path needs virtue first — only then can concentration and wisdom grow.') }}
    </p>

    <!-- 5 precepts -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">PAÑCASĪLA</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('បញ្ចសីល ៥', 'The Five Precepts') }}</h3>
      <div class="grid md:grid-cols-5 gap-3 mt-5">
        <div v-for="(s, i) in precepts" :key="s.en" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="sutra-num">{{ i + 1 }}</span>
          <p class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t(s.km, s.en) }}</p>
          <p class="text-[11px] mt-1" :style="{ color: 'var(--ink-muted)' }">{{ s.pl }}</p>
        </div>
      </div>
      <p class="text-xs mt-4" :style="{ color: 'var(--ink-muted)' }">{{ t('ពាក្យបញ្ចប់ថា «សិក្ខាបទំ សមាទិយាមិ» មានន័យថា «ខ្ញុំសូមសមាទាននូវសិក្ខាបទ»។', 'Each ends with "sikkhāpadaṃ samādiyāmi" — "I undertake this training rule."') }}</p>
    </div>

    <!-- 10 parami -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">PARAMĪ — 10</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('បារមី ១០', 'The Ten Perfections') }}</h3>
      <p class="text-sm mt-2" :style="{ color: 'var(--ink-muted)' }">{{ t('គុណធម៌ ១០ ដែលព្រះពោធិសត្វបំពេញ ហើយដែលយើងអាចហ្វឹកហាត់បានក្នុងជីវិតប្រចាំថ្ងៃ។', 'Ten virtues the Bodhisatta perfected — and which we too can cultivate daily.') }}</p>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mt-5">
        <div v-for="(p, i) in parami" :key="p.en" class="p-4 rounded-sm text-center" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="paali">{{ p.pl }}</span>
          <p class="sutra-num mt-2" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</p>
          <p class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t(p.km, p.en) }}</p>
          <p class="text-[11px] mt-1" :style="{ color: 'var(--ink-muted)' }">{{ t(p.kmBody, p.enBody) }}</p>
        </div>
      </div>
    </div>

    <!-- ethics quotes -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">SUTTA SĀRASSA</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('គន្ថីសេចក្តីបង្រៀន', 'Words to Remember') }}</h3>
      <div class="space-y-4 mt-5">
        <div v-for="q in quotes" :key="q.en" class="verse-box p-4">
          <p class="text-sm leading-loose" :style="{ color: 'var(--ink-soft)' }">{{ t(q.km, q.en) }}</p>
          <p class="text-[10px] tracking-widest uppercase mt-2" :style="{ color: 'var(--ink-faint)' }">{{ q.pl }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()


function khNum(n) {
  return String(n)
}

const precepts = [
  { km: 'មិនសម្លាប់សត្វ', en: 'No killing', pl: 'pāṇātipātā veramaṇī' },
  { km: 'មិនលួច', en: 'No stealing', pl: 'adinnādānā veramaṇī' },
  { km: 'មិនប្រព្រឹត្តិខុសក្នុងកាម', en: 'No sexual misconduct', pl: 'kāmesu micchācārā veramaṇī' },
  { km: 'មិនភូតភរ', en: 'No lying', pl: 'musāvādā veramaṇī' },
  { km: 'មិនផឹកគ្រឿងស្រវឹង', en: 'No intoxicants', pl: 'surameraya majja pamādaṭṭhānā veramaṇī' },
]

const parami = [
  { pl: 'Dāna', km: 'ទាន', en: 'Giving', kmBody: 'ចែករំលែកដោយសេរី', enBody: 'generosity without strings' },
  { pl: 'Sīla', km: 'សីល', en: 'Virtue', kmBody: 'រក្សាកាយវាចាឲ្យស្អាត', enBody: 'purity of conduct' },
  { pl: 'Nekkhamma', km: 'នេក្ខម្ម', en: 'Renunciation', kmBody: 'លះបង់តណ្ហា', enBody: 'letting go of craving' },
  { pl: 'Paññā', km: 'បញ្ញា', en: 'Wisdom', kmBody: 'យល់ពិតយល់ត្រូវ', enBody: 'seeing things as they are' },
  { pl: 'Viriya', km: 'វិរិយៈ', en: 'Energy', kmBody: 'ព្យាយាមឥតឈប់', enBody: 'strenuous effort' },
  { pl: 'Khantī', km: 'ខន្តី', en: 'Patience', kmBody: 'អត់ឱនទ្រាំទ្រ', enBody: 'endurance and forbearance' },
  { pl: 'Sacca', km: 'សច្ចៈ', en: 'Truthfulness', kmBody: 'ស្មោះត្រង់ពាក្យពិត', enBody: 'honesty in word and deed' },
  { pl: 'Adhiṭṭhāna', km: 'អធិដ្ឋាន', en: 'Determination', kmBody: 'តាំងចិត្តរឹងមាំចំពោះអំពើល្អ', enBody: 'resolute commitment' },
  { pl: 'Mettā', km: 'មេត្តា', en: 'Loving-kindness', kmBody: 'រាប់អានសត្វទាំងអស់', enBody: 'well-wishing toward all' },
  { pl: 'Upekkhā', km: 'ឧបេក្ខា', en: 'Equanimity', kmBody: 'ចិត្តរាបស្មើក្នុងសុខទុក្ខ', enBody: 'steadiness amid gain and loss' },
]

const quotes = [
  { km: 'អក្កោធេន ជិនេ កោធំ — ឈ្នះអ្នកខឹង ដោយមិនខឹង។', en: 'Conquer anger by non-anger.', pl: 'Dhammapada 223' },
  { km: 'វេរមណី សីលំ — សីល គឺការកាន់ចិត្តឲ្យរួចពីអាក្រក់។', en: 'Virtue is refraining, guarding the heart from harm.', pl: 'Abhidhamma in Daily Life' },
  { km: 'កម្មស្សកោម្ហិ កម្មទាយាទោម្ហិ — សត្វលោកជាអ្នកមានកម្មជារបស់ខ្លួន ជាអ្នកទទួលកេរដំណែលរបស់កម្ម។', en: 'Beings are the owners of their kamma.', pl: 'AN 5.57' },
]
</script>