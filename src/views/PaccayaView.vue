<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('ធម៌បន្ថែម ១៤ — បដិច្ចសមុប្បាទ', 'EXTRA 14 — DEPENDENT ORIGINATION') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('បដិច្ចសមុប្បាទ', 'Paṭiccasamuppāda') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('បដិច្ចសមុប្បាទ ប្រែថា «ការកើតឡើងដោយសារហេតុ» ។ ធម៌នេះពន្យល់ខ្សែទំនាក់ទំនង ១២ អង្គ ដូចជាច្រវាក់ ពន្យល់ថា ទុក្ខកើតឡើងតាមហេតុ ហើយពេលហេតុរលត់ ទុក្ខក៏រលត់។ ព្រះពុទ្ធទ្រង់ត្រាស់ថា «អ្នកណាឃើញបដិច្ចសមុប្បាទ អ្នកនោះឃើញធម៌» ។', 'Paṭiccasamuppāda means "arising by way of conditions". This teaching sets out twelve linked factors, like a chain, explaining that suffering arises from a cause, and when the cause ceases, suffering ceases. The Buddha said: "One who sees dependent origination sees the Dhamma."') }}
    </p>

    <!-- essence -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('គោលសំខាន់', 'THE CORE PRINCIPLE') }}</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ពាក្យត្រាស់សំខាន់', 'A Key Word of the Teaching') }}</h3>
      <div class="verse-box p-4 mt-4">
        <p class="text-center text-base md:text-lg leading-loose">{{ t('អ្វីៗ គឺកើតឡើងដោយសារហេតុ; ពេលហេតុរលត់ អ្វីនោះក៏រលត់ដែរ។', 'Whatever arises is dependently arisen; when its cause ceases, it too ceases.') }}</p>
      </div>
      <p class="text-sm mt-4 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ធម៌នេះ បដិសេធនូវសេចក្តីជឿថា អ្វីៗកើតឡើងដោយចៃដន្យ ដោយជោគវាសនា ដោយព្រះបង្កើត ឬដោយគ្មានហេតុ។ ហើយក៏បដិសេធដែរ នូវសេចក្តីជឿថា មានខ្លួនប្តូរទៅកើតក្នុងភពថ្មី។', 'This teaching rejects the belief that things arise by chance, by fate, by a creator, or without cause. It also rejects the belief that a permanent self migrates into a new life.') }}
      </p>
    </div>

    <!-- forward chain -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">ANULOMA — បដិលោម/អនុលោម</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ខ្សែច្រវាក់ ១២ (កើតទៅមុខ)', 'The Twelve Links (forward — arising)') }}</h3>
      <p class="text-sm mt-2" :style="{ color: 'var(--ink-muted)' }">
        {{ t('អានពីលើចុះក្រោម៖ អវិជ្ជាជាហេតុ នាំឲ្យកើតសង្ខារ … រហូតដល់ជរាមរណៈ។ អ្នកចាប់ផ្តើមគួរយកចិត្តទុកដាក់លើអង្គលេខ ១៣–១២ ដែលជាតណ្ហា ឧបាទាន ភព ជាកន្លែងគេចូលទៅប្រែប្រួលបាន។', 'Read top to bottom: ignorance conditions formations … up to ageing and death. A beginner should pay special attention to links 8–10 — craving, clinging and becoming — to see where change is possible.') }}
      </p>
      <ul class="tick-list mt-4">
        <li v-for="(l, i) in links" :key="l.pl">
          <div class="flex items-baseline gap-3">
            <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
            <div class="min-w-0">
              <span class="paali">{{ l.pl }}</span>
              <strong class="ml-2" :style="{ color: 'var(--ink)' }">{{ t(l.km, l.en) }}</strong>
              <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(l.kmBody, l.enBody) }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- reverse -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">PATILOMA — បដិលោម</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ការរលត់ តាមផ្លូវបញ្ច្រាស', 'Cessation in Reverse Order') }}</h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ពេលអវិជ្ជារលត់ សង្ខាររលត់; ពេលសង្ខាររលត់ វិញ្ញាណរលត់ … រហូតដល់ទុក្ខទាំងមូលរលត់។ នេះជាផ្លូវនៃការអនុវត្តបដិបត្តិ — បញ្ឈប់តណ្ហា និងឧបាទាន ក្នុងបច្ចុប្បន្ន ទើបរលត់ភពអនាគត។', 'When ignorance ceases, formations cease; when formations cease, consciousness ceases … until the whole mass of suffering ceases. This is the path of practice — stop craving and clinging in the present, and the future becoming ceases.') }}
      </p>
      <div class="verse-box p-4 mt-4">
        <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t('វិបស្សនា គឺឃើញការកើត–រលត់ នៃធម៌ទាំងនេះ តាមការពិត ក្នុងកាយ និងចិត្ត។', 'Insight is seeing the arising and ceasing of these factors as they truly are, in body and mind.') }}</p>
      </div>
    </div>

    <!-- how to understand -->
    <div class="grid md:grid-cols-2 gap-6 mt-8">
      <div class="card-paper p-6">
        <p class="chapter-label">{{ t('កំហុសធម្មតា', 'COMMON MISTAKES') }}</p>
        <ul class="tick-list mt-4 text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          <li>{{ t('គិតថា បដិច្ចសមុប្បាទ ជាទ្រឹស្តីសម្រាប់ត្រិះរិះតែប៉ុណ្ណោះ។', 'Thinking it is only a theory for reflection.') }}</li>
          <li>{{ t('ច្រឡំថា អង្គនីមួយៗ កើតពីអង្គមុន ដូចជាយករបស់មួយមកសន្សំលើមួយ។', 'Confusing each link as produced by the previous like piling one object on another.') }}</li>
          <li>{{ t('យល់ថា មានខ្លួនវិលកើតក្នុងភពថ្មី។', 'Believing a self travels into a new life.') }}</li>
        </ul>
      </div>
      <div class="card-paper p-6">
        <p class="chapter-label">{{ t('របៀបយល់ត្រូវ', 'A RIGHT WAY TO UNDERSTAND') }}</p>
        <ul class="tick-list mt-4 text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          <li>{{ t('ឃើញការពិត ក្នុងជីវិតប្រចាំថ្ងៃ៖ ពេលមានវេទនា មានតណ្ហា; ពេលមិនមានវេទនា តណ្ហាមិនកើត។', 'See the truth in daily life: with feeling there is craving; without feeling, craving does not arise.') }}</li>
          <li>{{ t('ឃើញថា អ្វីៗប្រព្រឹត្តទៅដោយហេតុផល ឥតអ្នកបង្កើត ឥតខ្លួន។', 'See everything running by condition, without a creator, without a self.') }}</li>
        </ul>
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

const links = [
  { pl: 'AVIJJĀ', km: 'អវិជ្ជា', en: 'Ignorance', kmBody: 'សេចក្តីមិនដឹងច្បាស់នូវអរិយសច្ចៈ ៤ — ជាឫសគល់នៃច្រវាក់ទាំងមូល។', enBody: 'Not knowing the four noble truths — the root of the whole chain.' },
  { pl: 'SAṄKHĀRĀ', km: 'សង្ខារ', en: 'Formations', kmBody: 'ការសន្សំបង្កើត កាយ វាចា ចិត្ត ដែលកើតពីចេតនា។', enBody: 'Intentional activities of body, speech and mind.' },
  { pl: 'VIÑÑĀṆA', km: 'វិញ្ញាណ', en: 'Consciousness', kmBody: 'ការដឹងអារម្មណ៍ បដិសន្ធិ ក៏ដូចជាការដឹងរាល់ខណៈ។', enBody: 'Knowing of objects — rebirth consciousness and moment-to-moment knowing.' },
  { pl: 'NĀMA-RŪPA', km: 'នាមរូប', en: 'Name and Form', kmBody: 'ចិត្ត (នាម) និងកាយ (រូប) ដែលអាស្រ័យគ្នាទៅវិញទៅមក។', enBody: 'The mental side (name) and body (form) that rely on each other.' },
  { pl: 'SAḶĀYATANA', km: 'សឡាយតនៈ', en: 'Six Sense Bases', kmBody: 'ភ្នែក ត្រចៀក ច្រមុះ អណ្តាត កាយ ចិត្ត។', enBody: 'Eye, ear, nose, tongue, body, and mind.' },
  { pl: 'PHASSA', km: 'ផស្សៈ', en: 'Contact', kmBody: 'ការប្រសព្វគ្នា នៃអារម្មណ៍ ឥន្ទ្រិយ និងវិញ្ញាណ។', enBody: 'The meeting of sense object, sense faculty and consciousness.' },
  { pl: 'VEDANĀ', km: 'វេទនា', en: 'Feeling', kmBody: 'ការទទួលអារម្មណ៍ សុខ ទុក្ខ កណ្តាល។', enBody: 'The experience of pleasant, painful, or neutral feeling.' },
  { pl: 'TAṆHĀ', km: 'តណ្ហា', en: 'Craving', kmBody: 'ប្រាថ្នាកាម ប្រាថ្នាកើត ប្រាថ្នារលត់ — ជាចំណុចដែលគេអត់ធ្មត់បាន។', enBody: 'Thirst for sense pleasures, for existence, for annihilation — the point of restraint.' },
  { pl: 'UPĀDĀNA', km: 'ឧបាទាន', en: 'Clinging', kmBody: 'ការប្រកាន់ជាប់ នូវកាម ទិដ្ឋិ សីលព្វត និងអត្តវាទ។', enBody: 'Grasping at sense objects, views, rites, and a self.' },
  { pl: 'BHAVA', km: 'ភព', en: 'Becoming', kmBody: 'សេចក្តីកើត នៃបដិសន្ធិថ្មី តាមកម្លាំងនៃតណ្ហា និងឧបាទាន។', enBody: 'The arising of new existence driven by craving and clinging.' },
  { pl: 'JĀTI', km: 'ជាតិ', en: 'Birth', kmBody: 'ការចាប់កំណើត ក្នុងភពណាមួយ។', enBody: 'Taking rebirth in some realm.' },
  { pl: 'JARĀ-MARAṆA', km: 'ជរាមរណៈ', en: 'Ageing and Death', kmBody: 'សេចក្តីចាស់ ស្លាប់ សោក ខ្សឹកខ្សួល — ជាទីបញ្ចប់នៃច្រវាក់នេះ។', enBody: 'Ageing, death, sorrow and lamentation — the end of this chain.' },
]
</script>
