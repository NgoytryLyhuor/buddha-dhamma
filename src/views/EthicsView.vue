<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ០៥ — សីល បារមី និងធម៌គ្រហស្ថ', 'GATHA 05 — ETHICS, PERFECTIONS & LAY DHAMMA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('សីលជាគ្រឹះ បារមីជាជណ្តើរ', 'Conduct is the Foundation, Perfections the Stairs') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('សីល (សេចក្តីវិន័យនៃកាយវាចា) គឺជាច្បាប់ហ្វឹកហាត់ឲ្យកាយ វាចា ចិត្ត បរិសុទ្ធ។ ដូចផ្ទះត្រូវការគ្រឹះ ផ្លូវធម៌ត្រូវការសីលជាមុនសិន ទើបសមាធិ (ការតម្កល់ចិត្ត) បញ្ញា (ប្រាជ្ញា) កើតឡើងបាន។', 'Sīla is the training that keeps body, speech and mind pure. As a house needs a foundation, the path needs virtue first — only then can concentration and wisdom grow.') }}
    </p>

    <!-- 5 precepts -->
    <div id="sila" class="card-paper p-6 md:p-8 mt-8 scroll-mt-24">
      <p class="chapter-label">PAÑCASĪLA</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('បញ្ចសីល ៥', 'The Five Precepts') }}</h3>
      <div class="grid md:grid-cols-5 gap-3 mt-5">
        <div v-for="(s, i) in precepts" :key="s.en" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="sutra-num">{{ '១២៣៤៥'[i] }}</span>
          <p class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t(s.km, s.en) }}</p>
          <p class="text-[11px] mt-1" :style="{ color: 'var(--ink-muted)' }">{{ s.pl }}</p>
        </div>
      </div>
      <p class="text-xs mt-4" :style="{ color: 'var(--ink-muted)' }">{{ t('ពាក្យបញ្ចប់ថា «សិក្ខាបទំ សមាទិយាមិ» មានន័យថា «ខ្ញុំសូមសមាទាននូវសិក្ខាបទ»។', 'Each ends with "sikkhāpadaṃ samādiyāmi" — "I undertake this training rule."') }}</p>
    </div>

    <!-- 10 parami -->
    <div id="parami" class="card-paper p-6 md:p-8 mt-8 scroll-mt-24">
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

    <!-- 4 Brahmavihāra -->
    <div id="brahmavihara" class="card-paper p-6 md:p-8 mt-8 scroll-mt-24">
      <p class="chapter-label">BRAHMAVIHĀRA — 4</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ព្រហ្មវិហារធម៌ ៤ — វិហារធម៌ដ៏ប្រសើរ', 'The Four Sublime States (Brahmavihāra)') }}</h3>
      <p class="text-sm mt-2" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ធម៌សម្រាប់ចិត្តដ៏ប្រសើរ ៤ ប្រការ ដែលធ្វើឲ្យចិត្តត្រជាក់ គ្មានការច្រណែន មិនមានពៀរ និងរស់នៅជាមួយមនុស្សជុំវិញខ្លួនប្រកបដោយសេចក្តីសុខ។', 'Four boundless mental qualities: radiating goodwill, compassion, sympathetic joy, and unshakable balance to all living beings.') }}
      </p>
      <div class="grid md:grid-cols-4 gap-4 mt-5">
        <div v-for="(b, i) in brahmavihara" :key="b.en" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <div class="flex items-center justify-between">
            <span class="paali">{{ b.pl }}</span>
            <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
          </div>
          <p class="font-bold text-base mt-2" :style="{ color: 'var(--ink)' }">{{ t(b.km, b.en) }}</p>
          <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(b.kmBody, b.enBody) }}</p>
          <div class="mt-3 pt-2 text-[11px]" :style="{ borderTop: '1px dashed var(--border)', color: 'var(--ink-muted)' }">
            <strong :style="{ color: 'var(--accent)' }">{{ t('សត្រូវជិត៖ ', 'Near enemy: ') }}</strong>{{ t(b.kmEnemy, b.enEnemy) }}
          </div>
        </div>
      </div>
    </div>

    <!-- Lay Dhamma: Gharāvāsa & Diṭṭhadhammikattha -->
    <div id="lay-dhamma" class="card-paper p-6 md:p-8 mt-8 scroll-mt-24">
      <p class="chapter-label">GIHI DHAMMA — ធម៌គ្រហស្ថ</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ធម៌សម្រាប់គ្រហស្ថ — គ្រួសារ និងការកសាងទ្រព្យ', 'Lay Dhamma — Family Harmony & Prosperity') }}</h3>
      <p class="text-sm mt-2" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ព្រះពុទ្ធទ្រង់មិនត្រឹមតែបង្រៀនផ្លូវរំលត់ទុក្ខប៉ុណ្ណោះទេ តែទ្រង់បានប្រទានឱវាទយ៉ាងច្បាស់លាស់សម្រាប់អ្នកផ្ទះ ក្នុងការរស់នៅឲ្យមានសុភមង្គល និងចម្រើនទ្រព្យសម្បត្តិដោយសុចរិត។', 'The Buddha gave practical guidance for lay householders to cultivate harmonious homes, stable wealth, and blameless success in the present life.') }}
      </p>

      <!-- Gharāvāsa-dhamma 4 -->
      <div class="mt-6">
        <h4 class="font-bold text-sm tracking-wide uppercase" :style="{ color: 'var(--accent)' }">
          {{ t('១. ឃរាវាសធម៌ ៤ — ធម៌សម្រាប់ការគ្រប់គ្រងផ្ទះ និងគ្រួសារ', '1. Gharāvāsa-dhamma 4 — Virtues for Harmonious Family Life') }}
        </h4>
        <div class="grid md:grid-cols-4 gap-3 mt-3">
          <div v-for="g in gharavasa" :key="g.en" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
            <span class="paali">{{ g.pl }}</span>
            <p class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t(g.km, g.en) }}</p>
            <p class="text-xs mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(g.kmBody, g.enBody) }}</p>
          </div>
        </div>
      </div>

      <!-- Diṭṭhadhammikattha 4 -->
      <div class="mt-6 pt-5" :style="{ borderTop: '1px solid var(--border)' }">
        <h4 class="font-bold text-sm tracking-wide uppercase" :style="{ color: 'var(--accent)' }">
          {{ t('២. ទិដ្ឋធម្មិកត្ថធម៌ ៤ — ធម៌នាំឲ្យចម្រើនទ្រព្យក្នុងបច្ចុប្បន្ន (ឧ អា ក ស)', '2. Diṭṭhadhammikattha 4 — Four Principles for Present Prosperity (U-Ā-Ka-Sa)') }}
        </h4>
        <div class="grid md:grid-cols-4 gap-3 mt-3">
          <div v-for="d in ditthadhamma" :key="d.en" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
            <span class="paali">{{ d.pl }}</span>
            <p class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t(d.km, d.en) }}</p>
            <p class="text-xs mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(d.kmBody, d.enBody) }}</p>
          </div>
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

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  return String(n).split('').map(d => khDigits[Number(d)]).join('')
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
  { pl: 'Nekkhamma', km: 'នេក្ខម្ម', en: 'Renunciation', kmBody: 'លះបង់តណ្ហា ចេញពីផ្ទះ', enBody: 'letting go of craving' },
  { pl: 'Paññā', km: 'បញ្ញា', en: 'Wisdom', kmBody: 'យល់ពិតយល់ត្រូវ', enBody: 'seeing things as they are' },
  { pl: 'Viriya', km: 'វិរិយៈ', en: 'Energy', kmBody: 'ព្យាយាមឥតឈប់', enBody: 'strenuous effort' },
  { pl: 'Khantī', km: 'ខន្តី', en: 'Patience', kmBody: 'អត់ឱនទ្រាំទ្រ', enBody: 'endurance and forbearance' },
  { pl: 'Sacca', km: 'សច្ចៈ', en: 'Truthfulness', kmBody: 'ស្មោះត្រង់ពាក្យពិត', enBody: 'honesty in word and deed' },
  { pl: 'Adhiṭṭhāna', km: 'អធិដ្ឋាន', en: 'Determination', kmBody: 'តាំងចិត្តរឹងមាំ ចំពោះអំពើល្អ', enBody: 'resolute commitment' },
  { pl: 'Mettā', km: 'មេត្តា', en: 'Loving-kindness', kmBody: 'រាប់អានសត្វទាំងអស់', enBody: 'well-wishing toward all' },
  { pl: 'Upekkhā', km: 'ឧបេក្ខា', en: 'Equanimity', kmBody: 'ចិត្តរាបស្មើក្នុងសុខទុក្ខ', enBody: 'steadiness amid gain and loss' },
]

const brahmavihara = [
  {
    pl: 'Mettā',
    km: 'មេត្តា — សេចក្តីស្រឡាញ់រាប់អាន',
    en: 'Loving-Kindness',
    kmBody: 'បំណងល្អ បរិសុទ្ធ ប្រាថ្នាឲ្យសត្វទាំងពួងបានសេចក្តីសុខ មិនចងគំនុំ។',
    enBody: 'Pure goodwill wishing all living beings happiness and peace without hatred.',
    kmEnemy: 'រាគៈ ឬសេចក្តីស្នេហាក្នុងកាម (ជាប់ជំពាក់)',
    enEnemy: 'Selfish affection or lustful attachment',
  },
  {
    pl: 'Karuṇā',
    km: 'ករុណា — សេចក្តីអាណិតអាសូរ',
    en: 'Compassion',
    kmBody: 'ចិត្តរំជួលឈឺឆ្អាល ប្រាថ្នាជួយស្រោចស្រង់សត្វដែលកំពុងរងទុក្ខឲ្យរួចផុតពីទុក្ខ។',
    enBody: 'Deep empathy desiring to alleviate the pain and hardship of suffering beings.',
    kmEnemy: 'សេចក្តីសោកសៅ ទុក្ខសោក (ទោមនស្ស)',
    enEnemy: 'Paralyzing sorrow or pitying grief',
  },
  {
    pl: 'Muditā',
    km: 'មុទិតា — សេចក្តីត្រេកអរចំពោះអ្នកដទៃ',
    en: 'Sympathetic Joy',
    kmBody: 'រីករាយស្មោះសរ ពេលឃើញអ្នកដទៃបានសុខ ជោគជ័យ ឬធ្វើអំពើល្អ គ្មានចិត្តច្រណែន។',
    enBody: 'Heartfelt joy at the happiness, success, and virtue of others, free from envy.',
    kmEnemy: 'ការសើចសប្បាយត្រេកអរជ្រុល ឬរំភើបបែបកាមគុណ',
    enEnemy: 'Frivolous exultation or giddy excitement',
  },
  {
    pl: 'Upekkhā',
    km: 'ឧបេក្ខា — ការតម្កល់ចិត្តជាកណ្តាល',
    en: 'Equanimity',
    kmBody: 'ចិត្តរាបស្មើ មិនលម្អៀងដោយស្រឡាញ់ឬស្អប់ យល់ច្បាស់ថាសត្វលោកមានកម្មជារបស់ខ្លួន។',
    enBody: 'Unshakable balance, free from bias, understanding beings are heirs to their deeds.',
    kmEnemy: 'អញ្ញាណុបេក្ខា (ការព្រងើយកន្តើយដោយល្ងង់ខ្លៅ)',
    enEnemy: 'Cold apathy or callous indifference',
  },
]

const gharavasa = [
  {
    pl: 'Sacca',
    km: 'សច្ចៈ — ភាពស្មោះត្រង់',
    en: 'Truthfulness',
    kmBody: 'ស្មោះត្រង់ ទៀងត្រង់ ពិតប្រាកដចំពោះគ្នា មិនភូតភរ មិនក្បត់ទំនុកចិត្ត។',
    enBody: 'Honesty, integrity, and fidelity in speech and commitment to the family.',
  },
  {
    pl: 'Dama',
    km: 'ទមៈ — ការទូន្មានចិត្ត',
    en: 'Self-Control',
    kmBody: 'ចេះទប់ចិត្ត កែសម្រួលចរិត បន្សុទ្ធគំនិត និងរៀនរស់នៅសម្របសម្រួលជាមួយគ្នា។',
    enBody: 'Taming impulses, curbing temper, adapting to others, and training character.',
  },
  {
    pl: 'Khantī',
    km: 'ខន្តី — ការអត់ធន់',
    en: 'Patience',
    kmBody: 'អត់ធន់នឹងការនឿយហត់ ការងារ ឧបសគ្គ និងពាក្យសម្តីប៉ះទង្គិចគ្នា។',
    enBody: 'Endurance in hardships, facing challenges together without giving up or exploding.',
  },
  {
    pl: 'Cāga',
    km: 'ចាគៈ — ការលះបង់',
    en: 'Generosity & Sharing',
    kmBody: 'ការលះបង់ប្រយោជន៍ផ្ទាល់ខ្លួន ចែករំលែកទ្រព្យ និងអធ្យាស្រ័យលើកលែងទោសឲ្យគ្នា។',
    enBody: 'Selfless giving, sharing resources, and forgiving mistakes with a generous heart.',
  },
]

const ditthadhamma = [
  {
    pl: 'Uṭṭhāna-sampadā',
    km: 'ឧដ្ឋានសម្បទា — ឧស្សាហ៍ស្វាហាប់',
    en: 'Diligence in Work',
    kmBody: 'ព្យាយាមក្នុងការងារ ស្វែងរកចំណេះដឹង ជំនាញ និងបង្កើតទ្រព្យដោយសុចរិត។',
    enBody: 'Hard work, energetic skill, and initiative in honorable occupations.',
  },
  {
    pl: 'Ārakkha-sampadā',
    km: 'អារក្ខសម្បទា — ការថែរក្សាទ្រព្យ',
    en: 'Safeguarding Wealth',
    kmBody: 'ចេះថែរក្សាទ្រព្យដែលរកបាន មិនឲ្យបាត់បង់ដោយភ្លើង ទឹក ចោរ ឬជនទុច្ចរិត។',
    enBody: 'Protecting hard-earned wealth from hazards, waste, fraud, and misjudgment.',
  },
  {
    pl: 'Kalyāṇamittatā',
    km: 'កល្យាណមិត្តតា — សេពគប់មិត្តល្អ',
    en: 'Good Associates',
    kmBody: 'ជ្រើសរើសមិត្តភក្តិ និងដៃគូដែលមានសីល មានបញ្ញា និងចេះជួយណែនាំផ្លូវល្អ។',
    enBody: 'Associating with virtuous, wise friends who encourage moral and practical growth.',
  },
  {
    pl: 'Samajīvitā',
    km: 'សមជីវិតា — ការរស់នៅសមរម្យ',
    en: 'Balanced Living',
    kmBody: 'ចេះថ្លឹងថ្លែងចំណូលនិងចំណាយ មិនចាយវាយខ្ជះខ្ជាយ មិនកំណាញ់ស្វិតស្វាញជ្រុល។',
    enBody: 'Living within one\'s means: neither extravagant waste nor miserly stinginess.',
  },
]

const quotes = [
  { km: 'អក្កោធេន ជិនេ កោធំ — ឈ្នះអ្នកខឹង ដោយមិនខឹង។', en: 'Conquer anger by non-anger.', pl: 'Dhammapada 223' },
  { km: 'វេរមណី សីលំ — សីល គឺការកាន់ចិត្តឲ្យរួចពីអាក្រក់។', en: 'Virtue is refraining, guarding the heart from harm.', pl: 'Abhidhamma in Daily Life' },
  { km: 'កម្មស្សកោម្ហិ កម្មទាយាទោម្ហិ — សត្វលោកជាអ្នកមានកម្មជារបស់ខ្លួន ជាអ្នកទទួលកេរដំណែលរបស់កម្ម។', en: 'Beings are the owners of their kamma.', pl: 'AN 5.57' },
]
</script>