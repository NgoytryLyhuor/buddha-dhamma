<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៩២ — កាលាមសូត្រ (កេសមុត្តិសូត្រ)', 'GATHA 92 — THE KĀLĀMA SUTTA (AN 3.65)') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('កាលាមសូត្រ ៖ ធម្មនុញ្ញនៃសេរីភាពបញ្ញា & ជំនឿ ១០ យ៉ាងដែលកុំទាន់អាលជឿ', 'The Kālāma Sutta: Charter of Free Inquiry & 10 Unexamined Beliefs') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('កាលាមសូត្រ (ឬកេសមុត្តិសូត្រ AN 3.65) ត្រូវបានអ្នកប្រាជ្ញទូទាំងពិភពលោកទទួលស្គាល់ថាជា «ធម្មនុញ្ញនៃសេរីភាពខាងបញ្ញា» ដំបូងបង្អស់ក្នុងប្រវត្តិសាស្ត្រមនុស្សជាតិ។ កាលដែលព្រះសម្មាសម្ពុទ្ធទ្រង់យាងទៅដល់និគមកេសមុត្ត ពួកកាលាមគោត្របានចូលទៅគាល់ ហើយទូលសួរដោយក្តីស្រពិចស្រពិលថា ៖ មានសមណព្រាហ្មណ៍ជាច្រើនមកបង្រៀន តែម្នាក់ៗសុទ្ធតែសរសើរតែទ្រឹស្តីខ្លួនឯង និងបន្ទោសទ្រឹស្តីអ្នកដទៃ តើពួកខ្ញុំគួរជឿអ្នកណា? ព្រះសម្មាសម្ពុទ្ធមិនបានបង្ខំឱ្យពួកគេជឿព្រះអង្គឡើយ តែទ្រង់បានត្រាស់សម្តែងនូវក្បួនពិចារណា ១០ យ៉ាងដែលកុំទាន់អាលជឿភ្លាមៗ ហើយត្រូវប្រើបញ្ញាពិសោធដោយខ្លួនឯងជាមុន។', 'The Kālāma Sutta (or Kesamutti Sutta, AN 3.65) is revered worldwide as Buddhism’s Charter of Free Inquiry. When the Buddha arrived in Kesamutta village, the Kālāma clansmen approached Him with genuine bewilderment: countless ascetics had passed through, each exalting their own doctrine while reviling others, leaving the villagers deeply perplexed about whom to believe. The Buddha did not demand blind allegiance. Instead, He delivered ten criteria that one must never accept uncritically, urging listeners to investigate and verify truth through their own experiential insight.') }}
    </p>

    <!-- Pali Gatha Box from Kalama Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ឯថ តុម្ហេ កាលាមា, មា អនុស្សវេន, មា បរម្បរាយ, មា ឥតិកិរាយ, មា បិដកសម្បទានេន, មា តក្កហេតុ, មា នយហេតុ, មា អាការបរិវិតក្កេន, មា ទិដ្ឋិនិជ្ឈានក្ខន្តិយា, មា ភព្វរូបតាយ, មា សមណោ នោ គរូតិ។»', '"Come, Kālāmas, do not go by oral tradition, by lineage of teaching, by hearsay, by scripture, by logical deduction, by inference, by specious reasoning, by fondness for preconceived views, by apparent competence of speaker, or because \'this ascetic is our teacher\'." — Aṅguttara Nikāya 3.65') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— កេសមុត្តិសូត្រ តិកនិបាត អង្គុត្តរនិកាយ', '— Kesamutti Sutta, Tikanipāta, Aṅguttara Nikāya') }}
      </p>
    </div>

    <!-- The 10 Criteria Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>⚖️</span>
        <span>{{ t('ជំនឿទាំង ១០ យ៉ាងដែលកុំទាន់អាលជឿភ្លាមៗ (មា ទាំង ១០)', 'The 10 Criteria of Free Investigation') }}</span>
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5">
        <div
          v-for="item in criteria"
          :key="item.id"
          class="card-paper p-4 rounded-xl border flex items-start gap-3"
        >
          <span class="w-7 h-7 rounded-full bg-rose-500/20 text-rose-700 dark:text-rose-300 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
            {{ item.num }}
          </span>
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <h4 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">{{ t(item.titleKm, item.titleEn) }}</h4>
              <span class="text-[11px] font-mono text-stone-500">({{ item.pali }})</span>
            </div>
            <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(item.descKm, item.descEn) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- The True Test Section -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>💡</span>
        <span>{{ t('ក្បួនវិនិច្ឆ័យពិតប្រាកដ ៖ ពិសោធដោយខ្លួនឯង', 'The Ultimate Benchmark: Direct Personal Verification') }}</span>
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-xs leading-relaxed">
        <div class="p-3.5 rounded-xl border border-rose-500/30 bg-rose-500/5">
          <span class="font-bold text-rose-700 dark:text-rose-300 block mb-1 text-sm">❌ គប្បីលះបង់ចេញកាលណាដឹងថា ៖</span>
          <p class="text-stone-600 dark:text-stone-400">
            {{ t('«កាលណាអ្នកដឹងដោយខ្លួនឯងថា ធម៌ទាំងនេះជាអកុសល ធម៌ទាំងនេះមានទោស អ្នកប្រាជ្ញតែងតិះដៀល កាលបើកាន់យកប្រតិបត្តិហើយ រមែងនាំមកនូវសេចក្តីវិនាសនិងសេចក្តីទុក្ខ នោះអ្នកគប្បីលះបង់ធម៌ទាំងនោះចេញទៅ។»', 'When you know for yourselves: "These things are unwholesome, blameworthy, censured by the wise; undertaken and observed, they lead to harm and suffering"—then you should abandon them.') }}
          </p>
        </div>
        <div class="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
          <span class="font-bold text-emerald-700 dark:text-emerald-300 block mb-1 text-sm">✅ គប្បីប្រកាន់យកប្រតិបត្តិកាលណាដឹងថា ៖</span>
          <p class="text-stone-600 dark:text-stone-400">
            {{ t('«កាលណាអ្នកដឹងដោយខ្លួនឯងថា ធម៌ទាំងនេះជាកុសល ធម៌ទាំងនេះគ្មានទោស អ្នកប្រាជ្ញតែងសរសើរ កាលបើកាន់យកប្រតិបត្តិហើយ រមែងនាំមកនូវប្រយោជន៍និងសេចក្តីសុខ នោះអ្នកគប្បីចូលកាន់និងប្រតិបត្តិនូវធម៌ទាំងនោះចុះ។»', 'When you know for yourselves: "These things are wholesome, blameless, praised by the wise; undertaken and observed, they lead to welfare and happiness"—then you should enter and abide in them.') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const criteria = [
  {
    id: 1,
    num: '១',
    titleKm: 'កុំទាន់ជឿព្រោះឮតៗគ្នា',
    titleEn: 'Not by Oral Tradition',
    pali: 'Mā anussavena',
    descKm: 'កុំអាលជឿដោយសារតែឮពាក្យប្រាប់តៗគ្នាពីមាត់មួយទៅមាត់មួយ ព្រោះពាក្យចចាមអារ៉ាមងាយនឹងក្លែងបន្លំ។',
    descEn: 'Do not accept something merely because it has been passed down orally from generation to generation.',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'កុំទាន់ជឿព្រោះជាប្រពៃណីដូនតា',
    titleEn: 'Not by Ancient Lineage',
    pali: 'Mā paramparāya',
    descKm: 'កុំអាលជឿព្រោះតែទំនៀមទម្លាប់ធ្វើតកូនតចៅយូរមកហើយ ព្រោះទម្លាប់ខ្លះអាចជាការយល់ខុសតាំងពីដើម។',
    descEn: 'Do not accept something solely because of long-standing unbroken customary tradition.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'កុំទាន់ជឿព្រោះការផ្សាយចចាមអារ៉ាម',
    titleEn: 'Not by Rumor / Hearsay',
    pali: 'Mā itikirāya',
    descKm: 'កុំអាលជឿតាមការភ្ញាក់ផ្អើល ឬពាក្យពោលអះអាងថាស័ក្តិសិទ្ធិដោយគ្មានប្រភពច្បាស់លាស់។',
    descEn: 'Do not accept something because of widespread gossip, sensational rumors, or news flashes.',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'កុំទាន់ជឿព្រោះមានក្នុងគម្ពីរ',
    titleEn: 'Not by Scriptural Authority',
    pali: 'Mā piṭakasampadānena',
    descKm: 'កុំអាលជឿគ្រាន់តែដោយសារមានកត់ត្រាក្នុងក្បួនច្បាប់ ឬគម្ពីរបុរាណ ត្រូវពិចារណាខ្លឹមសារធម៌ជាក់ស្តែង។',
    descEn: 'Do not accept something purely because it is written down in sacred scriptures or collections.',
  },
  {
    id: 5,
    num: '៥',
    titleKm: 'កុំទាន់ជឿព្រោះត្រូវតាមតក្កវិជ្ជា',
    titleEn: 'Not by Pure Logic / Deduction',
    pali: 'Mā takkahetu',
    descKm: 'កុំអាលជឿព្រោះការទាញហេតុផលតាមតក្កវិជ្ជា ព្រោះតក្កវិជ្ជាពេលខ្លះស្តាប់ទៅសម តែខុសការពិត។',
    descEn: 'Do not accept something merely through philosophical speculation or deductive rationalization.',
  },
  {
    id: 6,
    num: '៦',
    titleKm: 'កុំទាន់ជឿព្រោះត្រូវតាមក្បួនគិតស្មាន',
    titleEn: 'Not by Inference / Analogy',
    pali: 'Mā nayahetu',
    descKm: 'កុំអាលជឿតាមការស្មាន ឬការប្រៀបធៀបតាមន័យ ព្រោះការសន្និដ្ឋានអាចមានភាពលម្អៀង។',
    descEn: 'Do not accept something simply by theoretical inference or superficial analogies.',
  },
  {
    id: 7,
    num: '៧',
    titleKm: 'កុំទាន់ជឿព្រោះការត្រិះរិះតាមអាការៈ',
    titleEn: 'Not by Specious Reasoning',
    pali: 'Mā ākāraparivitakkena',
    descKm: 'កុំអាលជឿព្រោះតែសម្លឹងឃើញសភាពខាងក្រៅទំនងជាត្រូវ ឬសមហេតុសមផលមួយភ្លែត។',
    descEn: 'Do not accept something based on plausible surface appearances and prima facie plausibility.',
  },
  {
    id: 8,
    num: '៨',
    titleKm: 'កុំទាន់ជឿព្រោះត្រូវនឹងគំនិតខ្លួនចូលចិត្ត',
    titleEn: 'Not by Preconceived Confirmation Bias',
    pali: 'Mā diṭṭhinijjhānakkhantiyā',
    descKm: 'កុំអាលជឿគ្រាន់តែដោយសារគំនិតនោះត្រូវនឹងចំណង់ចំណូលចិត្ត ឬទស្សនៈចាស់របស់ខ្លួន។',
    descEn: 'Do not accept something just because it agrees with one’s own ingrained predispositions.',
  },
  {
    id: 9,
    num: '៩',
    titleKm: 'កុំទាន់ជឿព្រោះអ្នកនិយាយគួរឱ្យទុកចិត្ត',
    titleEn: 'Not by Competence of the Speaker',
    pali: 'Mā bhabbarūpatāya',
    descKm: 'កុំអាលជឿព្រោះតែឃើញរូបរាង កាយវិការ ឬឋានៈរបស់អ្នកនិយាយគួរឱ្យកោតក្រែង។',
    descEn: 'Do not accept something simply because the speaker appears trustworthy, charismatic, or authoritative.',
  },
  {
    id: 10,
    num: '១០',
    titleKm: 'កុំទាន់ជឿព្រោះគិតថាជាគ្រូរបស់យើង',
    titleEn: 'Not by Respect for the Guru',
    pali: 'Mā samaṇo no garūti',
    descKm: 'កុំអាលជឿដោយសារតែការគោរពថា «លោកជាគ្រូរបស់យើង» ដោយមិនហ៊ានត្រិះរិះពិចារណា។',
    descEn: 'Do not accept something out of deference thinking: "This ascetic or monk is our respected master."',
  },
]
</script>
