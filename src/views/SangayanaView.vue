<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៦១ — កិច្ចសង្គាយនាទាំង ៦ លើក', 'GATHA 61 — THE 6 BUDDHIST COUNCILS (SAṄGĀYANĀ)') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ប្រវត្តិកិច្ចសង្គាយនាទាំង ៦ លើក ៖ ការរក្សាការពារព្រះត្រៃបិដក', 'The 6 Great Buddhist Councils: Preservation of the Tipitaka') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ពាក្យថា «សង្គាយនា» មានន័យថា ការសូត្ររួមគ្នា ការផ្ទៀងផ្ទាត់ និងការចងក្រងព្រះធម្មវិន័យឱ្យមានសាមគ្គីភាព និងភាពត្រឹមត្រូវបរិសុទ្ធ។ ក្រោយពីព្រះសម្មាសម្ពុទ្ធទ្រង់ចូលបរិនិព្វានទៅ ព្រះអរហន្តថេរានុត្ថេរៈជាន់ខ្ពស់បានរៀបចំ «កិច្ចសង្គាយនាធំៗចំនួន ៦ លើក» ក្នុងប្រវត្តិសាស្ត្រ ដើម្បីកម្ចាត់សេចក្តីយល់ខុស ការក្លែងបន្លំធម៌ និងដើម្បីចារឹកផ្ទេរពាក្យបង្រៀនរបស់ព្រះពុទ្ធឱ្យគង់វង្សរហូតមកដល់សម័យបច្ចុប្បន្ន។', 'Saṅgāyanā signifies the harmonious "recitation together" and rigorous systematic authentication of the Buddha’s Dhamma-Vinaya. Following the Mahāparinibbāna, enlightened elder Arahants convened Six Historic Buddhist Councils across two millennia to cleanse monastic schisms, refute heresy, preserve the authentic Pali canon, and commit the teaching to written palm leaves and marble stone for future generations.') }}
    </p>

    <!-- Timeline of 6 Councils -->
    <div class="space-y-6 mt-8">
      <div
        v-for="(c, idx) in councils"
        :key="c.num"
        class="card-paper p-6 md:p-8 rounded-2xl border border-l-4 transition-all"
        :style="{ borderLeftColor: c.color }"
      >
        <div class="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold text-white shadow-xs" :style="{ background: c.color }">
                សង្គាយនាលើកទី {{ idx + 1 }}
              </span>
              <span class="text-xs font-mono font-bold" :style="{ color: c.color }">
                {{ c.period }}
              </span>
            </div>
            <h3 class="font-display text-xl sm:text-2xl font-bold mt-2" :style="{ color: 'var(--ink)' }">
              {{ t(c.titleKm, c.titleEn) }}
            </h3>
            <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
              📍 ទីកន្លែង ៖ {{ t(c.locationKm, c.locationEn) }}
            </p>
          </div>
          <span class="text-3xl sm:text-4xl">{{ c.icon }}</span>
        </div>

        <!-- Cause & Key Figures Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-5">
          <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5" :style="{ color: c.color }">
              <span>⚡</span>
              <span>{{ t('មូលហេតុចម្បងនៃការប្រជុំ', 'Historical Catalyst') }}</span>
            </h4>
            <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(c.causeKm, c.causeEn) }}
            </p>
          </div>

          <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5" :style="{ color: 'var(--accent)' }">
              <span>👑</span>
              <span>{{ t('ព្រះប្រធាន & ព្រះមហាក្សត្រឧបត្ថម្ភ', 'Presiding Monks & Royal Patron') }}</span>
            </h4>
            <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(c.leadersKm, c.leadersEn) }}
            </p>
          </div>
        </div>

        <!-- Historic Achievement Outcome -->
        <div class="mt-3.5 p-3.5 rounded-xl border bg-emerald-500/5 border-emerald-500/20 text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
          <strong class="text-emerald-600 dark:text-emerald-400">🏆 {{ t('លទ្ធផលប្រវត្តិសាស្ត្រដ៏អស្ចារ្យ ៖ ', 'Monumental Legacy : ') }}</strong>
          {{ t(c.outcomeKm, c.outcomeEn) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const councils = [
  {
    num: 1,
    color: '#d97706',
    icon: '⛰️',
    period: '៣ ខែក្រោយពុទ្ធបរិនិព្វាន (ព.ស. ១)',
    titleKm: 'សង្គាយនាលើកទី ១ ៖ ចងក្រងព្រះធម៌ និងព្រះវិន័យដំបូង',
    titleEn: '1st Council: The First Compilation of Dhamma & Vinaya',
    locationKm: 'គុហាសត្តបណ្ណ ក្រុងរាជគ្រឹះ (រដ្ឋមគធៈ)',
    locationEn: 'Sattapaṇṇi Cave, Rājagaha (Kingdom of Magadha)',
    causeKm: 'ភិក្ខុចាស់ឈ្មោះសុភទ្ទ បានពោលពាក្យប្រមាថថា ៖ «កាលព្រះពុទ្ធគង់នៅ ទ្រង់ហាមឃាត់ច្រើនពេក ឥឡូវទ្រង់ចូលនិព្វានហើយ ពួកយើងចង់ធ្វើអ្វីក៏បាន!» ធ្វើឱ្យព្រះមហាកស្សបភ្ញាក់ផ្អើល និងកោះប្រជុំភ្លាមៗ។',
    causeEn: 'The old monk Subhadda rejoiced at the Buddha’s passing: "Now we can do whatever we like without being scolded!" Alarmed, Mahākassapa convened the assembly.',
    leadersKm: 'ព្រះមហាកស្សបត្ថេរ (ប្រធាន), ព្រះឧបាលិត្ថេរ (សូត្រវិន័យ), ព្រះអានន្ទត្ថេរ (សូត្រព្រះសូត្រ), ព្រះអរហន្ត ៥០០ អង្គ ក្រោមព្រះរាជូបត្ថម្ភពី ព្រះបាទអជាតសត្រូវ។',
    leadersEn: 'Presided by Ven. Mahākassapa, Upāli recited Vinaya, Ānanda recited Suttas; 500 Arahants patronized by King Ajātasattu.',
    outcomeKm: 'បានចងក្រងព្រះវិន័យ និងព្រះសូត្រជាស្ថាពរ បង្កើតជាគ្រឹះនៃព្រះពុទ្ធសាសនាថេរវាទ ដែលត្រូវសូត្រទន្ទេញចាំមាត់តៗគ្នា។',
    outcomeEn: 'Codified the entire Vinaya and Sutta collections into fixed oral recitation traditions preserved word-for-word.'
  },
  {
    num: 2,
    color: '#0284c7',
    icon: '🌊',
    period: '១០០ ឆ្នាំក្រោយពុទ្ធបរិនិព្វាន (ព.ស. ១០០)',
    titleKm: 'សង្គាយនាលើកទី ២ ៖ បង្ក្រាបការបន្ធូរបន្ថយវិន័យ ១០ យ៉ាង',
    titleEn: '2nd Council: Refuting the 10 Unlawful Vinaya Relaxations',
    locationKm: 'វាលុការាម ក្រុងវេសាលី',
    locationEn: 'Vālukārāma Monastery, Vesālī',
    causeKm: 'ពួកភិក្ខុវជ្ជីបុត្តកៈ បានបន្ធូរបន្ថយវិន័យ ១០ ប្រការដោយចិត្តឯង ដូចជា ៖ ការកាន់កាប់ប្រាក់កាស, ឆាន់អាហារខុសពេល, ទុកអំបិលក្នុងស្នែង...',
    causeEn: 'Vajjiputtaka monks introduced ten lax practices contrary to Vinaya, including accepting money, eating past noon, and storing salt in horn receptacles.',
    leadersKm: 'ព្រះយសកាកណ្ឌកបុត្តត្ថេរ, ព្រះរេវតត្ថេរ, ព្រះសព្វកាមិត្ថេរ ព្រមទាំងព្រះអរហន្ត ៧០០ អង្គ ក្រោមព្រះរាជូបត្ថម្ភពី ព្រះបាទកាលាសោក។',
    leadersEn: 'Led by Ven. Yasa Kākandakaputta, Sabbakāmī, and Revata with 700 Arahants under King Kālāsoka.',
    outcomeKm: 'បានកាត់ក្តីថាវត្ថុទាំង ១០ នោះខុសវិន័យដាច់ខាត ការពារព្រះវិន័យឱ្យបរិសុទ្ធស្អាត។',
    outcomeEn: 'Unanimously rejected the 10 unlawful points, reaffirming strict adherence to the original Vinaya.'
  },
  {
    num: 3,
    color: '#10b981',
    icon: '🏛️',
    period: 'ព.ស. ២៣៥ (សម័យព្រះបាទអសោកមហារាជ)',
    titleKm: 'សង្គាយនាលើកទី ៣ ៖ កម្ចាត់ដេរ្ថីយបន្លំបួស & បញ្ជូនសមណទូត ៩ ខ្សែ',
    titleEn: '3rd Council: Expelling Heretics & The 9 Missionary Missions',
    locationKm: 'វត្តអសោការាម ក្រុងបាដលីបុត្ត',
    locationEn: 'Asokārāma Monastery, Pāṭaliputta',
    causeKm: 'ដោយសារព្រះបាទអសោកគោរពពុទ្ធសាសនាខ្លាំង នាំឱ្យមានពួកដេរ្ថីយក្រៅសាសនាជាង ៦០,០០០ នាក់លួចបន្លំបួសដើម្បីបានលាភសក្ការៈ បង្កឱ្យសង្ឃបែកបាក់។',
    causeEn: 'Massive royal patronage under King Asoka led over 60,000 greedy non-Buddhist ascetics to don saffron robes to enjoy royal alms, causing doctrinal chaos.',
    leadersKm: 'ព្រះមោគ្គលីបុត្តតិស្សត្ថេរ (ប្រធាន) និងព្រះអរហន្ត ១,០០០ អង្គ ក្រោមព្រះរាជូបត្ថម្ភពី ព្រះបាទអសោកមហារាជ។',
    leadersEn: 'Presided by Ven. Moggaliputta Tissa with 1,000 Arahants under Emperor Asoka the Great.',
    outcomeKm: 'ផ្សឹកពួកក្លែងក្លាយ ៦០,០០០ នាក់, បង្កើតគម្ពីរកថាវត្ថុ (ក្នុងអភិធម្ម) និងបញ្ជូនសមណទូត ៩ ខ្សែផ្សាយព្រះពុទ្ធសាសនាទូទាំងពិភពលោក (រួមទាំងមកកាន់សុវណ្ណភូមិ)។',
    outcomeEn: 'Purged 60,000 false monks, codified the Kathāvatthu in Abhidhamma, and launched 9 global missions including Suvaṇṇabhūmi and Sri Lanka.'
  },
  {
    num: 4,
    color: '#9333ea',
    icon: '📜',
    period: 'ព.ស. ៤៣៣ (ស.វ. ទី ១ មុន គ.ស.)',
    titleKm: 'សង្គាយនាលើកទី ៤ ៖ ចារឹកព្រះត្រៃបិដកលើស្លឹករឹតជាប្រវត្តិសាស្ត្រ',
    titleEn: '4th Council: First Inscription of Tipitaka on Palm Leaves',
    locationKm: 'គុហាអាលោកលេណៈ (Aluvihāra) ប្រទេសស្រីលង្កា',
    locationEn: 'Aluvihāra Rock Cave, Matale, Sri Lanka',
    causeKm: 'កើតមានគ្រោះទុរភិក្សទុរគតអត់ឃ្លាន និងសង្គ្រាមធ្ងន់ធ្ងរនៅស្រីលង្កា ព្រះសង្ឃភ័យខ្លាចថាបើភិក្ខុពូកែទន្ទេញស្លាប់អស់ ព្រះត្រៃបិដកនឹងត្រូវបាត់បង់ពីផែនដី។',
    causeEn: 'Famine and civil war in Sri Lanka threatened the lives of oral bhanaka (reciter) monks; the Sangha foresaw the extinction of Dhamma without written records.',
    leadersKm: 'ព្រះមហាហត្ថិរក្ខិតត្ថេរ ព្រមទាំងព្រះអរហន្ត ៥០០ អង្គ ក្រោមព្រះរាជូបត្ថម្ភពី ព្រះបាទវដ្តគាមណីអភ័យ។',
    leadersEn: 'Led by Ven. Mahādhammarakkhita and 500 Arahants under King Vaṭṭagāmaṇī Abhaya.',
    outcomeKm: 'ជាលើកដំបូងបំផុតក្នុងប្រវត្តិសាស្ត្រមនុស្សជាតិ ដែលព្រះត្រៃបិដក និងអដ្ឋកថា ត្រូវបានចារឹកជាអក្សរលើស្លឹករឹត រក្សាបានសុវត្ថិភាពរហូតមកដល់សព្វថ្ងៃ។',
    outcomeEn: 'For the first time in human history, the entire Pali Tipitaka and commentaries were inscribed in writing onto palm leaves.'
  },
  {
    num: 5,
    color: '#eab308',
    icon: '🪨',
    period: 'ឆ្នាំ ១៨៧១ (ព.ស. ២៤១៥)',
    titleKm: 'សង្គាយនាលើកទី ៥ ៖ ចារឹកព្រះត្រៃបិដកលើផ្ទាំងថ្មម៉ាប ៧២៩ ផ្ទាំង',
    titleEn: '5th Council: Inscribing the Canon onto 729 Marble Slabs',
    locationKm: 'វត្តកុថូដ័រ (Kuthodaw) ក្រុងម៉ាន់ដាឡាយ ប្រទេសមីយ៉ាន់ម៉ា',
    locationEn: 'Kuthodaw Pagoda, Mandalay, Myanmar',
    causeKm: 'ដើម្បីការពារព្រះត្រៃបិដកកុំឱ្យខូចខាតដោយសារសត្វល្អិត ស៊ីស្លឹករឹត ឬភ្លើងឆេះ ដោយចារឹកលើថ្មម៉ាបដែលមិនចេះរលួយ។',
    causeEn: 'To preserve the sacred text imperishably against insects, decay, fire, and colonial turmoil by engraving on indestructible marble.',
    leadersKm: 'ព្រះជាគរាភិវង្សត្ថេរ និងព្រះថេរៈ ២,៤០០ អង្គ ក្រោមព្រះរាជូបត្ថម្ភពី ព្រះបាទមិនដុង (King Mindon)។',
    leadersEn: 'Led by Ven. Jāgarābhivaṁsa with 2,400 venerable monks sponsored by King Mindon.',
    outcomeKm: 'ចារឹកព្រះត្រៃបិដកទាំងស្រុងលើផ្ទាំងថ្មម៉ាបចំនួន ៧២៩ ផ្ទាំង ជាប់ឈ្មោះជា «សៀវភៅថ្មធំបំផុតក្នុងលោក» (The World’s Largest Book)។',
    outcomeEn: 'Carved the complete Tipitaka onto 729 massive marble slabs, earning the title "The World’s Largest Book".'
  },
  {
    num: 6,
    color: '#14b8a6',
    icon: '🌏',
    period: 'ឆ្នាំ ១៩៥៤ - ១៩៥៦ (ព.ស. ២៥០០)',
    titleKm: 'សង្គាយនាលើកទី ៦ ៖ មហាសន្និបាតផ្ទៀងផ្ទាត់បិដកអន្តរជាតិ (ពុទ្ធជយន្តី)',
    titleEn: '6th Council: International Theravada Verification Assembly',
    locationKm: 'មហាគុហាសិរីមង្គល (Kaba Aye) ក្រុងយ៉ាំងហ្គោន មីយ៉ាន់ម៉ា',
    locationEn: 'Kaba Aye Maha Pasana Cave, Yangon, Myanmar',
    causeKm: 'ដើម្បីអបអរសាទរគម្រប់ ២,៥០០ ឆ្នាំនៃព្រះពុទ្ធសាសនា (ពុទ្ធជយន្តី) និងដើម្បីផ្ទៀងផ្ទាត់ព្រះត្រៃបិដកនៃគ្រប់ប្រទេសថេរវាទឱ្យដូចគ្នាទាំងស្រុង។',
    causeEn: 'Commemorating 2,500 years of the Buddhist Era (Buddha Jayanti) and unifying textual editions across all Theravada nations.',
    leadersKm: 'ព្រះមហាសីសាយាដោ (Mahasi Sayadaw) និងព្រះសង្ឃជាន់ខ្ពស់ ២,៥០០ អង្គ មកពី ៨ ប្រទេស (មីយ៉ាន់ម៉ា, ខ្មែរ, ថៃ, លង្កា, ឡាវ, ឥណ្ឌា...) ក្រោមការឧបត្ថម្ភពីរដ្ឋាភិបាលលោក អ៊ូនុ (U Nu)។',
    leadersEn: 'Led by Mahasi Sayadaw and Mingun Sayadaw with 2,500 monks from 8 countries (Cambodia, Sri Lanka, Thailand, Laos, India, etc.).',
    outcomeKm: 'សម្រេចបាននូវច្បាប់ព្រះត្រៃបិដកអន្តរជាតិដ៏សុក្រឹតបំផុត (Chaṭṭha Saṅgāyanā Edition) ដែលជាមូលដ្ឋាននៃបិដកឌីជីថលសព្វថ្ងៃ។',
    outcomeEn: 'Produced the universally recognized Chaṭṭha Saṅgāyanā Pali Tipitaka edition that powers global digital Buddhist canons today.'
  }
]
</script>
