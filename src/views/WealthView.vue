<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៥១ — ទ្រព្យសម្បត្តិធម៌ & ទិដ្ឋធម្មិកត្ថ ៤', 'GATHA 51 — BUDDHIST WEALTH & SUCCESS DHAMMA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ទ្រព្យសម្បត្តិធម៌ & មាគ៌ាសេដ្ឋកិច្ចពុទ្ធសាសនា', 'Buddhist Wealth, Prosperity & Financial Ethics') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ព្រះពុទ្ធសាសនាមិនដែលបដិសេធ ឬហាមឃាត់គ្រហស្ថមិនឱ្យមានទ្រព្យសម្បត្តិស្តុកស្តម្ភឡើយ។ ព្រះសម្មាសម្ពុទ្ធទ្រង់សរសើរគ្រហស្ថដែលមានទ្រព្យច្រើនដែលរកបានមកដោយសុចរិត (ធម្មិយលទ្ធ) និងចេះប្រើប្រាស់ទ្រព្យនោះដើម្បីបង្កើតសេចក្តីសុខដល់ខ្លួនឯង គ្រួសារ និងសង្គមជាតិ។ ក្នុងទ្យឃជាណុសូត្រ (AN 8.54) ព្រះអង្គបានប្រទាន «ទិដ្ឋធម្មិកត្ថធម៌ ៤» គឺធម៌ដែលនាំឱ្យសម្រេចប្រយោជន៍ និងមានទ្រព្យក្នុងបច្ចុប្បន្នជាតិ។', 'Buddhism never frowns upon legitimate material wealth for lay disciples. The Buddha praised wealth acquired through righteous diligence (Dhammiya-laddha) when utilized to bring genuine joy to oneself, family, and society. In the Dīghajāṇu Sutta (AN 8.54), the Blessed One revealed the Four Conditions for Worldly Prosperity (Diṭṭhadhammikattha-saṁvattanikā Dhammā).') }}
    </p>

    <!-- Main Navigation Tabs -->
    <div class="flex items-center gap-2 mt-8 flex-wrap">
      <button
        type="button"
        @click="activeTab = 'dighajanu'"
        class="h-10 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center gap-2"
        :style="activeTab === 'dighajanu'
          ? { background: 'var(--accent)', color: 'var(--accent-ink, #ffffff)', borderColor: 'var(--accent)' }
          : { background: 'var(--bg-card)', color: 'var(--ink-muted)', borderColor: 'var(--border)' }"
      >
        <span>🌟</span>
        <span>{{ t('ទិដ្ឋធម្មិកត្ថ ៤ (ធម៌នាំឱ្យមាន)', '4 Keys to Wealth') }}</span>
      </button>

      <button
        type="button"
        @click="activeTab = 'allocation'"
        class="h-10 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center gap-2"
        :style="activeTab === 'allocation'
          ? { background: 'var(--accent)', color: 'var(--accent-ink, #ffffff)', borderColor: 'var(--accent)' }
          : { background: 'var(--bg-card)', color: 'var(--ink-muted)', borderColor: 'var(--border)' }"
      >
        <span>📊</span>
        <span>{{ t('ក្បួនបែងចែកទ្រព្យ ៤ ភាគ', '4 Quarters Allocation') }}</span>
      </button>

      <button
        type="button"
        @click="activeTab = 'sukha'"
        class="h-10 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center gap-2"
        :style="activeTab === 'sukha'
          ? { background: 'var(--accent)', color: 'var(--accent-ink, #ffffff)', borderColor: 'var(--accent)' }
          : { background: 'var(--bg-card)', color: 'var(--ink-muted)', borderColor: 'var(--border)' }"
      >
        <span>😊</span>
        <span>{{ t('សុខ ៤ របស់គ្រហស្ថ & របរហាមឃាត់', '4 Joys & 5 Barred Trades') }}</span>
      </button>
    </div>

    <!-- TAB 1: 4 CONDITIONS FOR WEALTH (DIGHAJANU SUTTA) -->
    <div v-if="activeTab === 'dighajanu'" class="mt-6 space-y-4">
      <div
        v-for="(item, idx) in dighajanuItems"
        :key="item.pali"
        class="card-paper p-5 sm:p-6 rounded-xl border border-l-4 transition-all"
        :style="{ borderLeftColor: item.color }"
      >
        <div class="flex items-start justify-between gap-3">
          <div>
            <span class="text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white" :style="{ background: item.color }">
              {{ item.pali }}
            </span>
            <h3 class="font-display text-lg sm:text-xl font-bold mt-2" :style="{ color: 'var(--ink)' }">
              {{ idx + 1 }}. {{ t(item.km, item.en) }}
            </h3>
            <p class="text-xs sm:text-sm mt-1" :style="{ color: item.color }">
              {{ t(item.subtitleKm, item.subtitleEn) }}
            </p>
          </div>
          <span class="text-3xl shrink-0">{{ item.icon }}</span>
        </div>

        <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
          {{ t(item.descKm, item.descEn) }}
        </p>

        <div class="mt-3 p-3 rounded-lg border text-xs leading-relaxed" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <strong class="text-amber-500">{{ t('ការអនុវត្តជាក់ស្តែង ៖ ', 'Actionable Practice : ') }}</strong>
          <span :style="{ color: 'var(--ink-muted)' }">{{ t(item.actionKm, item.actionEn) }}</span>
        </div>
      </div>
    </div>

    <!-- TAB 2: 4-QUARTERS WEALTH ALLOCATION FORMULA -->
    <div v-else-if="activeTab === 'allocation'" class="mt-6 space-y-6">
      <div class="card-paper p-6 md:p-8 rounded-xl border">
        <p class="chapter-label">{{ t('រូបមន្តហិរញ្ញវត្ថុពុទ្ធសាសនា', 'BUDDHIST FINANCIAL BLUEPRINT') }}</p>
        <h3 class="font-display text-xl sm:text-2xl font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
          {{ t('ក្បួនបែងចែកចំណូលជា ៤ ភាគ (សិង្គាលកសូត្រ)', 'The 4-Quarters Wealth Allocation (Sigālovāda Sutta)') }}
        </h3>
        <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ក្នុងគម្ពីរសិង្គាលកសូត្រ ព្រះសម្មាសម្ពុទ្ធបានបង្រៀនរូបមន្តបែងចែកចំណូលដែលរកបានមកជា ៤ ភាគស្មើៗគ្នា (២៥% ម្នាក់) ៖', 'In the Sigālovāda Sutta, the Buddha presented an elegant ratio for managing earned income across four equal quarters:') }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div class="p-4 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <div class="flex items-center justify-between">
              <span class="font-mono font-bold text-lg text-amber-500">ភាគទី ១ (២៥%)</span>
              <span class="text-2xl">🍲</span>
            </div>
            <h4 class="font-bold text-sm mt-2" :style="{ color: 'var(--ink)' }">{{ t('ចាយវាយសម្រាប់ការរស់នៅប្រចាំថ្ងៃ', 'Daily Subsistence & Consumption') }}</h4>
            <p class="text-xs mt-1.5 text-stone-500 leading-relaxed">
              {{ t('ចិញ្ចឹមជីវិតខ្លួនឯង មាតាបិតា បុត្រភរិយា និងធ្វើបុណ្យទានបន្តិចបន្តួច។', 'Personal nourishment, supporting parents, spouse, children, and minor charity.') }}
            </p>
          </div>

          <div class="p-4 rounded-xl border border-sky-500/30 bg-sky-500/5 sm:col-span-1 sm:row-span-2 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between">
                <span class="font-mono font-bold text-lg text-sky-500">ភាគទី ២ & ៣ (៥០%)</span>
                <span class="text-2xl">💼</span>
              </div>
              <h4 class="font-bold text-sm mt-2" :style="{ color: 'var(--ink)' }">{{ t('បណ្តាក់ទុនពង្រីកការងាររកស៊ី (Investment)', 'Reinvest in Enterprise & Business') }}</h4>
              <p class="text-xs mt-2 text-stone-500 leading-relaxed">
                {{ t('យកទៅពង្រីកមុខរបរ បង្កើតផលិតភាព និងពង្រីកដើមទុន។ ព្រះពុទ្ធឱ្យតម្លៃខ្ពស់បំផុតលើការបណ្តាក់ទុន (៥០% នៃចំណូលសរុប) ដើម្បីកុំឱ្យធ្លាក់ខ្លួនក្រ។', 'Invest back into work, farming, or business. The Buddha allocated half the entire income to productive capital growth to prevent impoverishment.') }}
              </p>
            </div>
            <div class="mt-4 p-2.5 rounded bg-[var(--bg-card)] border border-[var(--border)] text-[11px] font-mono text-sky-600 dark:text-sky-400">
              ទ្វីហិ កម្មំ បយោជយេ (វិនិយោគ ២ ភាគក្នុងមុខរបរ)
            </div>
          </div>

          <div class="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div class="flex items-center justify-between">
              <span class="font-mono font-bold text-lg text-emerald-500">ភាគទី ៤ (២៥%)</span>
              <span class="text-2xl">🏦</span>
            </div>
            <h4 class="font-bold text-sm mt-2" :style="{ color: 'var(--ink)' }">{{ t('សន្សំទុកសម្រាប់គ្រាមានអាសន្ន', 'Emergency Reserve Fund') }}</h4>
            <p class="text-xs mt-1.5 text-stone-500 leading-relaxed">
              {{ t('តម្កល់ទុកកុំប៉ះពាល់ សម្រាប់គ្រាមានជម្ងឺឈឺថ្កាត់ គ្រោះធម្មជាតិ ឬអន្តរាយផ្សេងៗ។', 'Kept securely untouched for sickness, sudden calamities, famine, or state emergencies.') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 3: 4 JOYS OF LAY LIFE & 5 PROHIBITED TRADES -->
    <div v-else class="mt-6 space-y-6">
      <!-- 4 Sukha of Lay Disciples -->
      <div class="card-paper p-6 md:p-8 rounded-xl border">
        <p class="chapter-label">{{ t('សុខ ៤ យ៉ាង', 'THE 4 JOYS OF A HOUSEHOLDER') }}</p>
        <h3 class="font-display text-xl font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
          {{ t('សុខ ៤ យ៉ាងរបស់គ្រហស្ថ (អនណសូត្រ AN 4.62)', 'The 4 Types of Happiness for a Householder (Anaṇa Sutta)') }}
        </h3>
        <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ព្រះសម្មាសម្ពុទ្ធទ្រង់សម្ដែងប្រាប់អនាថបិណ្ឌិកសេដ្ឋីនូវសុខដ៏បរិសុទ្ធ ៤ យ៉ាង ៖', 'The Buddha instructed the wealthy merchant Anāthapiṇḍika on the 4 genuine blisses:') }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
          <div v-for="s in householderSukkha" :key="s.pali" class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <span class="text-xs font-mono font-bold text-amber-500">{{ s.pali }}</span>
            <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t(s.km, s.en) }}</h4>
            <p class="text-xs mt-1 text-stone-500 leading-relaxed">{{ t(s.descKm, s.descEn) }}</p>
          </div>
        </div>
      </div>

      <!-- 5 Prohibited Trades (Micchā Vāṇijjā) -->
      <div class="card-paper p-6 md:p-8 rounded-xl border border-rose-500/30">
        <div class="flex items-center gap-2">
          <span class="text-rose-500 text-lg">⚠️</span>
          <p class="chapter-label text-rose-500 m-0">{{ t('របររកស៊ីហាមឃាត់', 'BARRED LIVELIHOODS') }}</p>
        </div>
        <h3 class="font-display text-xl font-bold mt-2" :style="{ color: 'var(--ink)' }">
          {{ t('មិច្ឆាពាណិជ្ជ ៥ យ៉ាងដែលឧបាសកមិនត្រូវប្រកប', 'The 5 Wrong Livelihoods to Avoid (AN 5.177)') }}
        </h3>
        <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ទោះបីជាបានប្រាក់កាសច្រើនយ៉ាងណាក្តី ពុទ្ធសាសនិកមិនគប្បីប្រកបរបររកស៊ីទាំង ៥ នេះឡើយ ព្រោះជាបាបកម្មធ្ងន់ធ្ងរ ៖', 'Though potentially lucrative, lay practitioners must refrain from these five unethical businesses:') }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-5 gap-3 mt-4 text-center">
          <div v-for="b in barredTrades" :key="b.pali" class="p-3 rounded-lg border bg-rose-500/5 border-rose-500/20">
            <span class="text-2xl">{{ b.icon }}</span>
            <p class="font-bold text-xs mt-1 text-rose-600 dark:text-rose-400">{{ t(b.km, b.en) }}</p>
            <p class="text-[10px] font-mono text-stone-500">{{ b.pali }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeTab = ref('dighajanu')

const dighajanuItems = [
  {
    pali: 'Uṭṭhāna-sampadā',
    icon: '⚡',
    color: '#d97706',
    km: 'ឧដ្ឋានសម្បទា (ភាពឧស្សាហ៍ព្យាយាមស្វែងរក)',
    en: 'Diligence in Earning (Uṭṭhāna-sampadā)',
    subtitleKm: 'ភាពស្ទាត់ជំនាញ និងភាពសកម្មមិនខ្ជិលច្រអូស',
    subtitleEn: 'Energy, skillfulness, and active competence',
    descKm: 'ការប្រឹងប្រែងធ្វើការងារ ឬប្រកបមុខរបរដោយប៉ិនប្រសប់ មិនខ្ជិលច្រអូស មិនខ្លាចនឿយហត់ និងចេះកែច្នៃបង្កើតឱកាសថ្មីៗក្នុងមុខរបរដោយសុចរិត។',
    descEn: 'Mastery in one’s craft, farming, commerce, or profession; industrious execution without procrastination or negligence.',
    actionKm: 'បង្កើនជំនាញឯកទេស, ភ្ញាក់ពីព្រលឹមធ្វើការងារ, រៀនសូត្របច្ចេកវិទ្យាថ្មីៗ។',
    actionEn: 'Master specialized skills, work actively with diligence, adapt to new modern tools.'
  },
  {
    pali: 'Ārakkha-sampadā',
    icon: '🛡️',
    color: '#0284c7',
    km: 'អារក្ខសម្បទា (ការចេះថែរក្សាការពារទ្រព្យ)',
    en: 'Protection of Wealth (Ārakkha-sampadā)',
    subtitleKm: 'ការការពារមិនឱ្យទ្រព្យធ្លាយបាត់បង់ដោយឥតប្រយោជន៍',
    subtitleEn: 'Safeguarding earned assets against ruin and loss',
    descKm: 'ទ្រព្យដែលរកបានមកដោយញើសឈាម ត្រូវចេះថែរក្សាការពារកុំឱ្យបាត់បង់ដោយសារ ភ្លើងឆេះ ទឹកជំនន់ ចោរលួច ស្តេចរឹបអូស ឬកូនចៅទុរជនបំផ្លាញ។',
    descEn: 'Protecting rightfully acquired assets from confiscation, thieves, fire, flood, and prodigal heirs.',
    actionKm: 'ចេះគ្រប់គ្រងហានិភ័យ, មិនទុកទ្រព្យនៅកន្លែងគ្រោះថ្នាក់, ចៀសវាងការឆបោក។',
    actionEn: 'Implement risk management, secure savings, avoid speculative scams.'
  },
  {
    pali: 'Kalyāṇamittatā',
    icon: '🤝',
    color: '#10b981',
    km: 'កល្យាណមិត្តតា (ការសេពគប់មិត្តល្អ)',
    en: 'Noble Friendship (Kalyāṇamittatā)',
    subtitleKm: 'ការជ្រើសរើសដៃគូ និងមិត្តភក្តិដែលនាំផ្លូវត្រូវ',
    subtitleEn: 'Surrounding oneself with virtuous and wise peers',
    descKm: 'ការសេពគប់មិត្តដែលមានសទ្ធា សីល ចាគៈ និងបញ្ញា។ មិត្តល្អតែងណែនាំការងាររកស៊ីត្រឹមត្រូវ មិននាំគ្នាទៅផឹកស៊ី លេងល្បែង ឬសេពគ្រឿងញៀនដែលនាំឱ្យវិនាសទ្រព្យ។',
    descEn: 'Associating with peers endowed with conviction, virtue, generosity, and wisdom who encourage productive growth.',
    actionKm: 'ដើរឱ្យឆ្ងាយពីមិត្តស៊ីផឹកលេងល្បែង, សេពគប់សហគ្រិន និងមនុស្សមានសីលធម៌ខ្ពស់។',
    actionEn: 'Distance from reckless acquaintances, associate with ethical mentors and productive minds.'
  },
  {
    pali: 'Samajīvitā',
    icon: '⚖️',
    color: '#9333ea',
    km: 'សមជីវិតា (ការរស់នៅសមរម្យតាមលទ្ធភាព)',
    en: 'Balanced Livelihood (Samajīvitā)',
    subtitleKm: 'ការចាយវាយមិនឱ្យលើសចំណូល មិនកំណាញ់ពេក មិនខ្ជះខ្ជាយពេក',
    subtitleEn: 'Living within means; neither prodigal nor miserly',
    descKm: 'ការដឹងចំណូល និងចំណាយច្បាស់លាស់ មិនចាយវាយហួសពីអ្វីដែលរកបាន (មិនបង្កើតបំណុលអាក្រក់) ហើយក៏មិនកំណាញ់ស្វិតស្វាញដល់ថ្នាក់មិនហ៊ានហូបចុកនោះដែរ។',
    descEn: 'Living balanced without excessive luxury that drains capital, nor extreme ascetic stinginess that brings misery.',
    actionKm: 'កត់ត្រាចំណូលចំណាយប្រចាំខែ, មិនខ្ចីលុយទិញសម្ភារនិយមអួតគេ, ចាយវាយឱ្យសមរម្យ។',
    actionEn: 'Track monthly cashflow, avoid debt for vanity luxuries, spend proportionally.'
  }
]

const householderSukkha = [
  {
    pali: 'Atthi-sukha',
    km: 'អត្ថិសុខ (សុខកើតពីការមានទ្រព្យ)',
    en: 'Bliss of Ownership (Atthi-sukha)',
    descKm: 'សេចក្តីសុខស្ងប់ចិត្តដែលដឹងថាខ្លួនមានទ្រព្យសម្បត្តិស្របច្បាប់រកបានមកដោយសុចរិត។',
    descEn: 'The profound satisfaction knowing that one possesses righteous wealth earned lawfully.'
  },
  {
    pali: 'Bhoga-sukha',
    km: 'ភោគសុខ (សុខកើតពីការប្រើប្រាស់ទ្រព្យ)',
    en: 'Bliss of Enjoyment (Bhoga-sukha)',
    descKm: 'សេចក្តីសុខក្នុងការយកទ្រព្យទៅចិញ្ចឹមជីវិតខ្លួនឯង គ្រួសារ និងធ្វើបុណ្យទានជួយសង្គម។',
    descEn: 'The joy of actively utilizing wealth for comfort, generosity, and meritorious deeds.'
  },
  {
    pali: 'Anaṇa-sukha',
    km: 'អនណសុខ (សុខកើតពីការគ្មានបំណុល)',
    en: 'Bliss of Debtlessness (Anaṇa-sukha)',
    descKm: 'សេចក្តីសុខដែលមិនជំពាក់បំណុលគេ មិនបាច់ភ័យខ្លាចម្ចាស់បំណុលតាមទារ។',
    descEn: 'The immense mental relief of not owing a single coin or obligation to anyone.'
  },
  {
    pali: 'Anavajja-sukha',
    km: 'អនវជ្ជសុខ (សុខកើតពីការងារឥតទោស)',
    en: 'Bliss of Blamelessness (Anavajja-sukha)',
    descKm: 'សេចក្តីសុខដ៏កំពូលដែលដឹងថាកាយ វាចា ចិត្ត និងមុខរបររបស់ខ្លួនគ្មានទោសកំហុសបាបឡើយ។',
    descEn: 'The supreme happiness of knowing one’s conduct, livelihood, and thoughts are clean.'
  }
]

const barredTrades = [
  { km: 'ជួញដូរអាវុធ', en: 'Weapons', pali: 'Sattha-vāṇijjā', icon: '🗡️' },
  { km: 'ជួញដូរមនុស្ស (ទាសករ)', en: 'Human Trafficking', pali: 'Satta-vāṇijjā', icon: '⛓️' },
  { km: 'ជួញដូរសត្វសម្រាប់សម្លាប់', en: 'Slaughter Meat', pali: 'Maṁsa-vāṇijjā', icon: '🥩' },
  { km: 'ជួញដូរគ្រឿងស្រវឹង', en: 'Intoxicants', pali: 'Majja-vāṇijjā', icon: '🍷' },
  { km: 'ជួញដូរថ្នាំបំពុល/ថ្នាំញៀន', en: 'Poisons & Drugs', pali: 'Visa-vāṇijjā', icon: '☠️' }
]
</script>
