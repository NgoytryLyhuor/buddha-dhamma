<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៥៣ — អបាយមុខ ៦ ប្រការ', 'GATHA 53 — THE 6 PATHS TO RUIN') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('អបាយមុខ ៦ ៖ ដើមចមនៃសេចក្តីវិនាស និងភាពក្រីក្រ', 'Apāyamukha 6: The Six Portals to Ruin & Poverty') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('«អបាយមុខ» មានន័យថា មាត់ច្រក ឬទ្វារដែលនាំទៅកាន់សេចក្តីវិនាសទ្រព្យសម្បត្តិ កិត្តិយស និងអនាគត។ ក្នុងគម្ពីរសិង្គាលកសូត្រ (DN 31) ព្រះសម្មាសម្ពុទ្ធបានដាស់តឿនសិង្គាលកមាណព កុំឱ្យធ្លាក់ចូលទៅក្នុងអបាយមុខទាំង ៦ នេះ ព្រោះទោះបីជាបុគ្គលនោះមានទ្រព្យស្មើនឹងស្តេច ឬមហាសេដ្ឋីយ៉ាងណាក្តី ក៏គង់នឹងរលាយអស់គ្មានសល់ឡើយ ប្រៀបដូចជាអាងទឹកធំមួយដែលមានទ្វារធ្លាយ ៦ ទិស។', 'Apāyamukha signifies the "mouth of destruction" or the six systemic gateways that drain wealth, ruin family reputation, and dismantle a human being’s future. In the Sigālovāda Sutta (DN 31), the Buddha warned the young Sigāla that indulging in these six vices will drain even a kingdom’s treasury, like an enormous reservoir leaking through six open drainage gates.') }}
    </p>

    <!-- 6 Portals Grid Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <div
        v-for="(item, idx) in apayamukhaList"
        :key="item.id"
        class="card-paper p-5 sm:p-6 rounded-xl border border-l-4 transition-all"
        :style="{ borderLeftColor: item.color }"
      >
        <div class="flex items-start justify-between gap-3">
          <div>
            <span class="text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white" :style="{ background: item.color }">
              ទ្វារទី {{ idx + 1 }} · {{ item.pali }}
            </span>
            <h3 class="font-display text-lg sm:text-xl font-bold mt-2" :style="{ color: 'var(--ink)' }">
              {{ t(item.km, item.en) }}
            </h3>
          </div>
          <span class="text-3xl shrink-0">{{ item.icon }}</span>
        </div>

        <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
          {{ t(item.descKm, item.descEn) }}
        </p>

        <!-- 6 Specific Consequences (ទោស ៦ យ៉ាង) -->
        <div class="mt-4 p-3.5 rounded-xl border bg-rose-500/5 border-rose-500/20">
          <p class="font-bold text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1.5 mb-2">
            <span>⚠️</span>
            <span>{{ t('ទោសជាក់ស្តែង ៦ ប្រការ ៖', 'The 6 Specific Dangers :') }}</span>
          </p>
          <ul class="space-y-1.5 text-xs text-stone-600 dark:text-stone-300">
            <li v-for="(c, cIdx) in item.consequences" :key="cIdx" class="flex items-start gap-1.5">
              <span class="text-rose-500 font-bold">•</span>
              <span>{{ t(c.km, c.en) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- The 6 Excuses of a Lazy Person (លេសទាំង ៦ របស់អ្នកខ្ជិល) -->
    <div class="card-paper p-6 md:p-8 rounded-xl border mt-8 border-t-4" :style="{ borderTopColor: '#f59e0b' }">
      <div class="flex items-center gap-2">
        <span class="text-amber-500 text-xl">😴</span>
        <h3 class="font-display text-xl font-bold" :style="{ color: 'var(--ink)' }">
          {{ t('លេសទាំង ៦ របស់អ្នកខ្ជិលច្រអូសក្នុងការងារ (គាថាសិង្គាលកសូត្រ)', 'The 6 Classic Excuses of the Slothful (Sigālovāda Sutta)') }}
        </h3>
      </div>
      <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ព្រះពុទ្ធទ្រង់បានចង្អុលចំៗនូវលេស ៦ យ៉ាងដែលមនុស្សខ្ជិលចូលចិត្តប្រើដើម្បីគេចវេះពីការងារ ៖', 'The Buddha humorously yet precisely enumerated the six endless excuses used to postpone work:') }}
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 mt-4 text-center">
        <div v-for="ex in lazyExcuses" :key="ex.pali" class="p-3 rounded-lg border bg-amber-500/5 border-amber-500/20">
          <span class="text-2xl">{{ ex.icon }}</span>
          <p class="font-bold text-xs mt-1.5" :style="{ color: 'var(--ink)' }">{{ t(ex.km, ex.en) }}</p>
          <p class="text-[10px] font-mono text-stone-500 mt-0.5">{{ ex.pali }}</p>
        </div>
      </div>

      <div class="mt-4 p-3.5 rounded-xl border bg-[var(--bg-card-2)] border-[var(--border)] text-xs text-center leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        <strong>{{ t('ពុទ្ធឱវាទ ៖ ', 'The Buddha’s Counsel : ') }}</strong>
        {{ t('«អ្នកណាដែលមិនគិតពីត្រជាក់ ឬក្តៅ ប្រឹងប្រែងធ្វើការងារដូចជាកូនប្រុសដ៏រឹងមាំ សេចក្តីសុខរមែងមិនឃ្លាតឆ្ងាយពីអ្នកនោះឡើយ។»', '"One who regards neither cold nor heat more than a blade of grass, doing manful duty, never falls away from happiness."') }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const apayamukhaList = [
  {
    id: 'alcohol',
    color: '#ef4444',
    icon: '🍷',
    pali: 'Surāmerayamajja',
    km: '១. ការសេពគ្រឿងស្រវឹង & គ្រឿងញៀន',
    en: '1. Indulging in Intoxicants & Drugs',
    descKm: 'ការផឹកស្រា បៀរ ជក់ថ្នាំញៀន ដែលធ្វើឱ្យបាត់បង់ស្មារតី សតិសម្បជញ្ញៈ និងនាំឱ្យកើតជម្លោះ។',
    descEn: 'Addiction to alcohol and narcotics that cloud cognitive lucidity and dismantle emotional restraint.',
    consequences: [
      { km: 'ខាតបង់ទ្រព្យសម្បត្តិជាក់ស្តែងក្នុងពេលបច្ចុប្បន្ន', en: 'Immediate dissipation of financial wealth' },
      { km: 'បង្កជម្លោះ ទាស់ទែង និងហិង្សាឥតឈប់ឈរ', en: 'Perpetual brawls, quarrels, and family domestic discord' },
      { km: 'ជាប្រភពនៃរោគាពាធ និងជំងឺរាងកាយរ៉ាំរ៉ៃជាច្រើន', en: 'Primary origin of bodily illnesses and liver/neurological ruin' },
      { km: 'នាំឱ្យបាត់បង់កិត្តិយស និងកេរ្តិ៍ឈ្មោះក្នុងសង្គម', en: 'Loss of public reputation and social honor' },
      { km: 'ធ្វើឱ្យអៀនខ្មាសមិនដឹងអៀនខ្មាស (ហ៊ានស្រាតសម្លៀកបំពាក់)', en: 'Unseemly exposure and disgraceful shameless conduct' },
      { km: 'ធ្វើឱ្យខូចខាតប្រាជ្ញា និងស្មារតីចងចាំចុះខ្សោយ', en: 'Progressive destruction of intelligence and mental sharpness' }
    ]
  },
  {
    id: 'night-wandering',
    color: '#8b5cf6',
    icon: '🌃',
    pali: 'Vikālavisikhācariya',
    km: '២. ការដើរលេងពេលយប់ខុសកាល',
    en: '2. Roaming Streets at Unseasonable Hours',
    descKm: 'ការដើរត្រាច់រង្គៀលលេងតាមផ្លូវ តាមបារ ក្លឹបកម្សាន្ត ក្នុងពេលរាត្រីដែលគេត្រូវសម្រាក។',
    descEn: 'Frequenting nightlife venues, nocturnal bars, and dangerous streets at late unseasonable hours.',
    consequences: [
      { km: 'ខ្លួនឯងគ្មានការការពារ ងាយរងគ្រោះថ្នាក់ឬចោរប្លន់', en: 'Personal vulnerability to mugging, violence, or road accidents' },
      { km: 'ប្រពន្ធកូននៅផ្ទះគ្មានការការពារ មានការភ័យខ្លាច', en: 'Spouse and children at home left unprotected and anxious' },
      { km: 'ទ្រព្យសម្បត្តិក្នុងផ្ទះគ្មានការថែរក្សា ងាយចោរគាស់', en: 'Household property unguarded and susceptible to burglary' },
      { km: 'តែងត្រូវគេសង្ស័យមុនគេពេលមានបទល្មើសកើតឡើង', en: 'Becoming the primary suspect whenever local crimes occur' },
      { km: 'ជួបប្រទះពាក្យចចាមអារ៉ាមមិនល្អ និងការបង្ខូចកេរ្តិ៍ឈ្មោះ', en: 'Target of malicious rumors and neighborhood gossip' },
      { km: 'នាំឱ្យកើតទុក្ខទោស និងបញ្ហាស្មុគស្មាញជាច្រើនជំពូក', en: 'Entangled in endless trouble, fatigue, and disputes' }
    ]
  },
  {
    id: 'entertainment',
    color: '#ec4899',
    icon: '🎪',
    pali: 'Samajjābhicaraṇa',
    km: '៣. ការញៀនដើរមើលល្បែងមហោស្រព',
    en: '3. Obsession with Theatrical Shows & Parties',
    descKm: 'ការវង្វេងវង្វាន់នឹងការរាំច្រៀង ពិធីជប់លៀង និងកម្មវិធីសប្បាយហួសហេតុ ភ្លេចការងាររកស៊ី។',
    descEn: 'Chronic preoccupation with concerts, parties, shows, and shallow entertainment neglecting work.',
    consequences: [
      { km: 'ចិត្តគិតតែពីកន្លែងណាមានការប្រគំតន្ត្រី (គិតតែរឿងសប្បាយ)', en: 'Mind continually consumed by "Where is the concert?"' },
      { km: 'ចិត្តគិតតែពីកន្លែងណាមានការរាំច្រៀង', en: 'Mind continually consumed by "Where is the dance?"' },
      { km: 'ចិត្តគិតតែពីកន្លែងណាមានការសម្តែងល្ខោន', en: 'Mind continually consumed by "Where is the theatre?"' },
      { km: 'ចិត្តគិតតែពីកន្លែងណាមានការប្រគំស្គរ និងតន្ត្រី', en: 'Obsession with songs, drumming, and spectacles' },
      { km: 'ខ្ជះខ្ជាយពេលវេលាធ្វើការងាររកស៊ីចិញ្ចឹមជីវិត', en: 'Immense wastage of productive working hours' },
      { km: 'ចំណាយប្រាក់កាសឥតប្រយោជន៍លើសំបុត្រ និងការផឹកស៊ី', en: 'Severe drain of capital on tickets, luxury outings, and vanity' }
    ]
  },
  {
    id: 'gambling',
    color: '#f97316',
    icon: '🎲',
    pali: 'Jūtappamāda',
    km: '៤. ការញៀនល្បែងស៊ីសងគ្រប់ប្រភេទ',
    en: '4. Addictive Gambling & Betting',
    descKm: 'ការលេងបៀរ បាល់ កាស៊ីណូ ឆ្នោត ឬល្បែងស៊ីសងអនឡាញ ដែលនាំឱ្យអស់ទ្រព្យក្នុងមួយប៉ព្រិចភ្នែក។',
    descEn: 'Compulsive wagering on dice, cards, lotteries, casinos, sports bets, or online gambling games.',
    consequences: [
      { km: 'ឈ្នះគេ នាំឱ្យគេចងគំនុំសងសឹក', en: 'Winning incites hatred, jealousy, and vengeful enmity from losers' },
      { km: 'ចាញ់គេ នាំឱ្យស្តាយទ្រព្យ កើតទុក្ខក្តៅក្រហាយក្នុងចិត្ត', en: 'Losing causes intense regret, sorrow, and mental anguish' },
      { km: 'ទ្រព្យសម្បត្តិហិនហោចរលាយបាត់បង់ជាក់ស្តែង', en: 'Rapid catastrophic annihilation of personal and family wealth' },
      { km: 'ពាក្យសម្តីគ្មានទម្ងន់ គ្មាននរណាជឿទុកចិត្តក្នុងតុលាការ', en: 'Words carry zero credibility; untrusted in public assemblies' },
      { km: 'ត្រូវមិត្តភក្តិ និងញាតិមិត្តមើលងាយ មិនចង់រាប់អាន', en: 'Despised and shunned by respectable relatives and peers' },
      { km: 'គ្មាននរណាចង់លើកកូនស្រីឱ្យធ្វើជាគូស្រករឡើយ', en: 'Rejected by prospective in-laws as an irresponsible partner' }
    ]
  },
  {
    id: 'bad-friends',
    color: '#06b6d4',
    icon: '👥',
    pali: 'Pāpamittatā',
    km: '៥. ការសេពគប់មិត្តអាក្រក់ (មិត្តទុច្ចរិត)',
    en: '5. Association with Corrupt & Evil Friends',
    descKm: 'ការសេពគប់បុគ្គលពាលដែលនាំផ្លូវខុស ដូចជាមិត្តប្រមឹក មិត្តលេងល្បែង និងមិត្តឆបោក។',
    descEn: 'Surrounding oneself with rogue, untrustworthy, addicted, and swindling companions.',
    consequences: [
      { km: 'នាំឱ្យក្លាយជាអ្នកញៀនល្បែងស៊ីសងដូចគេ', en: 'Dragged into addictive gambling and betting circles' },
      { km: 'នាំឱ្យក្លាយជាអ្នកសេពសុរា និងគ្រឿងញៀន', en: 'Coerced into alcoholism and drug consumption' },
      { km: 'នាំឱ្យក្លាយជាមនុស្សដើរលេងយប់ ភ្លេចគ្រួសារ', en: 'Diverted into nocturnal wandering and neglecting duties' },
      { km: 'នាំឱ្យក្លាយជាមនុស្សឆបោក បន្លំទ្រព្យអ្នកដទៃ', en: 'Conditioned into fraudulent scams and deceitful theft' },
      { km: 'នាំឱ្យក្លាយជាមនុស្សប្រើអំពើហិង្សា និងបំពានច្បាប់', en: 'Involved in gang violence and legal prosecution' },
      { km: 'ទីបំផុត នាំឱ្យវិនាសអន្តរាយទាំងខ្លួនឯង និងគ្រួសារ', en: 'Ultimate ruin of career, family honor, and personal life' }
    ]
  },
  {
    id: 'laziness',
    color: '#eab308',
    icon: '🛌',
    pali: 'Ālassānuyoga',
    km: '៦. ការខ្ជិលច្រអូស មិនធ្វើការងារ',
    en: '6. Chronic Habitual Sloth & Laziness',
    descKm: 'ការគេចវេះពីការងារ ចូលចិត្តដេក មិនប្រឹងប្រែងរៀនសូត្រ ឬស្វែងរកចំណូល។',
    descEn: 'Perpetual procrastination, avoidance of hard labor, excessive sleep, and total lack of initiative.',
    consequences: [
      { km: 'ទ្រព្យសម្បត្តិថ្មីៗមិនអាចកើតឡើងបានឡើយ', en: 'New wealth and income cannot be generated' },
      { km: 'ទ្រព្យសម្បត្តិចាស់ៗដែលមានពីមុន រមែងរលាយអស់ទៅ', en: 'Inherited or previously saved wealth steadily evaporates' },
      { km: 'ធ្លាក់ខ្លួនទៅជាអ្នកក្រីក្រ ទ័លច្រក គ្មានអាហារហូបចុក', en: 'Sinks into destitution, poverty, and hunger' },
      { km: 'ក្លាយជាបន្ទុកដល់មាតាបិតា គ្រួសារ និងសង្គម', en: 'Becomes a humiliating burden upon aging parents and family' },
      { km: 'បាត់បង់ឱកាសល្អៗទាំងអស់ក្នុងឆាកជីវិត', en: 'Misses golden career opportunities through negligence' },
      { km: 'រស់នៅក្នុងភាពអាប់ឱន គ្មាននរណាផ្តល់តម្លៃឱ្យឡើយ', en: 'Lives in indignity without respect from peers or society' }
    ]
  }
]

const lazyExcuses = [
  { icon: '❄️', km: '«ត្រជាក់ពេក»', en: '"Too Cold"', pali: 'Atisītaṁ' },
  { icon: '☀️', km: '«ក្តៅពេក»', en: '"Too Hot"', pali: 'Atiuṇhaṁ' },
  { icon: '🌅', km: '«ព្រលឹមពេក»', en: '"Too Early"', pali: 'Atisāyaṁ' },
  { icon: '🌇', km: '«ល្ងាចពេក»', en: '"Too Late"', pali: 'Atipāto' },
  { icon: '🍽️', km: '«ឃ្លានពេក»', en: '"Too Hungry"', pali: 'Chāto\'smi' },
  { icon: '🤰', km: '«ឆ្អែតពេក»', en: '"Too Full"', pali: 'Bhutāvi\'smi' }
]
</script>
