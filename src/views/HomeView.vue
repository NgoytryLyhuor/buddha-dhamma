<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ០១ — ស្វាគមន៍', 'GATHA 01 — WELCOME') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ព្រះធម៌ ជាប្រភពនៃបញ្ញា', 'The Dhamma is the Source of Wisdom') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ព្រះធម៌របស់ព្រះសម្មាសម្ពុទ្ធ គឺជាការបង្រៀនពីការពិតនៃជីវិត ៖ អ្វីជាទុក្ខ (សេចក្តីលំបាក) ហេតុអ្វីទុក្ខកើតឡើង អ្វីជាការរលត់ទុក្ខ និងផ្លូវប្រតិបត្តិឆ្ពោះទៅកាន់សេចក្តីរំលត់ទុក្ខ។ វេបសាយនេះប្រមូលផ្តុំខ្លឹមសារសំខាន់ៗ ចាប់ពីធម៌វិន័យមូលដ្ឋាន រហូតដល់ព្រះអភិធម្មដ៏ជ្រៅ ពន្យល់ជាភាសាសាមញ្ញ ដែលអ្នកអាចសាកល្បងដោយខ្លួនឯងបាន។', 'The Buddha\'s Teaching is the truth of life: what suffering is, why it arises, how it ends, and the path leading to its end. This site gathers the essence — from basic discipline to the profound Abhidhamma — explained in plain words you can verify yourself.') }}
    </p>

    <!-- Three Jewels -->
    <div class="grid md:grid-cols-3 gap-4 mt-8">
      <div v-for="j in jewels" :key="j.en" class="card-paper card-paper-hover p-5 text-center">
        <p class="text-3xl" :style="{ color: 'var(--accent-bright)' }">{{ j.icon }}</p>
        <h3 class="font-display text-lg mt-3" :style="{ color: 'var(--ink)' }">{{ t(j.km, j.en) }}</h3>
        <p class="text-[10px] font-bold tracking-[0.2em] uppercase mt-1" :style="{ color: 'var(--ink-faint)' }">{{ j.paali }}</p>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(j.kmBody, j.enBody) }}</p>
      </div>
    </div>

    <!-- Tipitaka -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('ព្រះត្រៃបិដក', 'THE TRIPITAKA') }}</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ព្រះត្រៃបិដក បីផ្នែក (ធម្មឃ្លាំងបី)', 'Three Baskets of the Teaching') }}</h3>
      <div class="grid md:grid-cols-3 gap-4 mt-5">
        <div v-for="b in baskets" :key="b.en" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="paali">{{ b.paali }}</span>
          <h4 class="font-bold mt-2" :style="{ color: 'var(--ink)' }">{{ t(b.km, b.en) }}</h4>
          <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(b.kmBody, b.enBody) }}</p>
        </div>
      </div>
      <div class="verse-box p-4 mt-5">
        <p class="text-sm leading-loose" :style="{ color: 'var(--ink-soft)' }">{{ t('ក្នុងបីនេះ វិនយបិដក ជាឱវាទឲ្យបុគ្គលរក្សាសីលឲ្យបរិសុទ្ធ; សុត្តន្តបិដក ជាព្រះធម្មទេសនាប្រាំបួនបែបដែលត្រាស់ដឹងតាមហេតុផល; អភិធម្មបិដក ជាការវិភាគចិត្ត ចេតសិក រូប និងនិព្វាន ឲ្យយល់ឃើញសេចក្តីពិតដ៏ជ្រាលជ្រៅ។', 'Of these three, the Vinaya Pitaka disciplines one to purity of conduct; the Sutta Pitaka teaches the ninefold Dhamma by reasoned exposition; the Abhidhamma Pitaka analyses consciousness, mental factors, matter and Nibbāna to reveal the deepest truths.') }}</p>
      </div>
    </div>

    <!-- Numbers -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      <div v-for="s in stats" :key="s.lbl" class="card-paper p-5 text-center">
        <p class="font-display text-3xl" :style="{ color: 'var(--accent)' }">{{ s.n }}</p>
        <p class="text-[10px] font-bold tracking-[0.18em] uppercase mt-2" :style="{ color: 'var(--ink-muted)' }">{{ t(s.lbl, s.lblEn) }}</p>
      </div>
    </div>

    <!-- Chart -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('ចិត្ត ៨៩', '89 CITTA') }}</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ការចែកចិត្តជាបួនពួក', 'Consciousness in Four Classes') }}</h3>
      <div class="grid md:grid-cols-2 gap-6 mt-5 items-center">
        <div class="chart-box"><canvas ref="chartRef"></canvas></div>
        <ul class="tick-list">
          <li v-for="c in cittaGroups" :key="c.en">
            <strong :style="{ color: 'var(--ink)' }">{{ t(c.km, c.en) }}</strong>
            <span class="text-sm" :style="{ color: 'var(--ink-muted)' }"> — {{ t(c.kmBody, c.enBody) }}</span>
            <span class="paali ml-1">{{ c.n }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Explore cards -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      <router-link v-for="c in explore" :key="c.to" :to="c.to"
        class="card-paper card-paper-hover p-4">
        <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ c.num }}</span>
        <p class="font-bold mt-1" :style="{ color: 'var(--ink)' }">{{ t(c.km, c.en) }}</p>
        <p class="text-xs mt-1" :style="{ color: 'var(--ink-muted)' }">{{ t(c.kmBody, c.enBody) }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { Chart, registerables } from 'chart.js'
import { useTheme } from '../composables/useTheme'
import { useLanguage } from '../composables/useLanguage'

Chart.register(...registerables)
const { theme, getChartColors } = useTheme()
const { t, lang } = useLanguage()

const jewels = [
  { icon: '☺', paali: 'BUDDHO', km: 'ព្រះពុទ្ធ', en: 'The Buddha', kmBody: 'ព្រះអង្គជាអ្នកត្រាស់ដឹងសេចក្តីពិត ដោយព្រះបញ្ញារបស់ព្រះអង្គផ្ទាល់។', enBody: 'The Awakened One who realised the truth by his own wisdom.' },
  { icon: '☸', paali: 'DHAMMO', km: 'ព្រះធម៌', en: 'The Dhamma', kmBody: 'ពាក្យបង្រៀនដែលត្រាស់ទេសនា — អ្នកត្រូវពិនិត្យពិចារណា ហើយបដិបត្តិតាម។', enBody: 'The teaching set forth — to be examined, considered, and practised.' },
  { icon: '♭', paali: 'SAMGHO', km: 'ព្រះសង្ឃ', en: 'The Sangha', kmBody: 'សំណាក់បដិបត្តិដ៏ត្រឹមត្រូវ ជាកុលសម្ពន្ធថ្លៃថ្លារបស់អ្នករកធម៌។', enBody: 'The community of noble practitioners — a precious refuge for the seeker.' },
]

const baskets = [
  { paali: 'VINAYA', km: 'វិនយបិដក', en: 'Vinaya Pitaka', kmBody: 'វិន័យសម្រាប់ព្រះសង្ឃ ដើម្បីឲ្យផ្លូវប្រតិបត្តិបរិសុទ្ធ។', enBody: 'Discipline for monastics that keeps the path pure.' },
  { paali: 'SUTTANTA', km: 'សុត្តន្តបិដក', en: 'Sutta Pitaka', kmBody: 'ព្រះធម្មទេសនា ៨៤,០០០ ប្រភេទ ត្រាស់ទេសនាទៅតាមអ្នកស្តាប់។', enBody: 'Thousands of discourses tailored to the hearer.' },
  { paali: 'ABHIDHAMMA', km: 'អភិធម្មបិដក', en: 'Abhidhamma Pitaka', kmBody: 'ទ្រឹស្តីខ្ពស់ជាងគេ វិភាគចិត្ត ចេតសិក រូប និព្វាន។', enBody: 'The higher analysis of mind, mental factors, matter and Nibbāna.' },
]

const stats = [
  { n: '89', lbl: 'ចិត្ត (គំនិត)', lblEn: 'Citta' },
  { n: '52', lbl: 'ចេតសិក (គុណចិត្ត)', lblEn: 'Cetasika' },
  { n: '28', lbl: 'រូប (កាយរូបធាតុ)', lblEn: 'Rūpa' },
  { n: '7', lbl: 'គម្ពីរអភិធម្ម', lblEn: 'Abhidhamma Books' },
]

const cittaGroups = [
  { n: '54', km: 'កាមាវចរចិត្ត (ចិត្តក្នុងលោកអារម្មណ៍ ៥)', en: 'Sense-sphere', kmBody: 'ចិត្តលោកិយកើតក្នុងលោកនៃអារម្មណ៍ទាំងប្រាំ', enBody: 'worldly consciousness bound to the five senses' },
  { n: '15', km: 'រូបាវចរចិត្ត (ចិត្តក្នុងរូបឈាន)', en: 'Fine-material', kmBody: 'ចិត្តក្នុងឈានរូប', enBody: 'consciousness of the five fine-material jhānas' },
  { n: '12', km: 'អរូបាវចរចិត្ត (ចិត្តក្នុងអរូបឈាន)', en: 'Formless', kmBody: 'ចិត្តក្នុងឈានអរូប', enBody: 'consciousness of the four formless spheres' },
  { n: '8', km: 'លោកុត្តរចិត្ត (ចិត្តនៃផ្លូវ-ផល)', en: 'Supramundane', kmBody: 'ចិត្តនៃមគ្គផល', enBody: 'path and fruition consciousness' },
]

const explore = [
  { to: '/core', num: '២', km: 'ធម៌មូលដ្ឋាន', en: 'Core Teachings', kmBody: 'សច្ចៈ ៤ (ការពិត ៤) · មគ្គ ៨ (ផ្លូវ ៨) · ត្រៃលក្ខណ៍ (លក្ខណៈ ៣)', enBody: '4 Truths, 8 Path, 3 Marks' },
  { to: '/abhidhamma', num: '៣', km: 'អភិធម្ម', en: 'Abhidhamma', kmBody: 'ចិត្ត · ចេតសិក (គុណចិត្ត) · រូប · និព្វាន', enBody: 'Citta, Cetasika, Rūpa, Nibbāna' },
  { to: '/kamma', num: '៤', km: 'កម្មផល', en: 'Kamma & Rebirth', kmBody: 'កុសល (ល្អ) · អកុសល (អាក្រក់) · ភូមិ ៣១', enBody: 'Wholesome, unwholesome, 31 planes' },
  { to: '/suttas', num: '៧', km: 'ព្រះសូត្រ', en: 'Suttas', kmBody: 'ធម្មចក្រ (កងចក្រធម៌) · មេត្តា · មង្គល (ចម្រើន)', enBody: 'Dhammacakka, Metta, Mangala' },
]

const chartRef = ref(null)
let chartInstance = null

function renderChart() {
  if (chartInstance) chartInstance.destroy()
  if (!chartRef.value) return
  const cc = getChartColors()
  const km = t('កាមាវចរ', 'Sense') + ' 54'
  const en = t('រូបាវចរ', 'Fine') + ' 15'
  const form = t('អរូបាវចរ', 'Formless') + ' 12'
  const supra = t('លោកុត្តរ', 'Supra') + ' 8'
  chartInstance = new Chart(chartRef.value, {
    type: 'doughnut',
    data: {
      labels: [km, en, form, supra],
      datasets: [{ data: [54, 15, 12, 8], backgroundColor: ['#d98813', '#c99a2e', '#71539b', '#5f7d35'], borderColor: cc.border, borderWidth: 2 }]
    },
    options: {
      responsive: true, maintainAspectRatio: false, cutout: '62%',
      plugins: {
        legend: {
          position: window.innerWidth < 640 ? 'bottom' : 'right',
          labels: { color: cc.legend, padding: 10, font: { size: 11 } }
        }
      }
    }
  })
}

let resizeRaf = null
function onResize() {
  if (resizeRaf) return
  resizeRaf = requestAnimationFrame(() => { resizeRaf = null; renderChart() })
}

onMounted(() => { renderChart(); window.addEventListener('resize', onResize) })
onBeforeUnmount(() => window.removeEventListener('resize', onResize))
watch([theme, lang], renderChart)
</script>