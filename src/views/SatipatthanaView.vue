<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៧៩ — មហាសតិបដ្ឋាន ៤ ប្រការ', 'GATHA 79 — 4 FOUNDATIONS OF MINDFULNESS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('មហាសតិបដ្ឋាន ៤ ៖ មាគ៌ាតែមួយគត់ដើម្បីរំលត់ទុក្ខ (ឯកាយនោ មគ្គោ)', 'Mahāsatipaṭṭhāna — The Direct Path to Total Purification') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('មហាសតិបដ្ឋាន ៤ គឺជាកំពូលធម៌នៃការបដិបត្តិវិបស្សនាកម្មដ្ឋាន ដែលព្រះសម្មាសម្ពុទ្ធទ្រង់លើកតម្កើងថាជា «ឯកាយនោ មគ្គោ» — មាគ៌ាតែមួយគត់ដែលនាំទៅរកការបរិសុទ្ធនៃសត្វលោក ការឆ្លងផុតទុក្ខសោក ខ្សឹកខ្សួល ការរំលត់ទុក្ខទោមនស្ស ការសម្រេចអរិយមគ្គ និងការធ្វើឱ្យជាក់ច្បាស់នូវព្រះនិព្វាន។ នៅក្នុងមហាសតិបដ្ឋានសូត្រ (DN 22) ព្រះអង្គទ្រង់បង្ហាញទ្វារទាំង ៤ នៃចិត្តវិទ្យាពិសោធន៍ ៖ ការយកសតិតម្កល់លើកាយ (កាយានុបស្សនា), លើវេទនា (វេទនានុបស្សនា), លើចិត្ត (ចិត្តានុបស្សនា), និងលើធម្មារម្មណ៍ (ធម្មានុបស្សនា)។ មិនថាអ្នកស្ថិតក្នុងឥរិយាបថណា ទីកន្លែងណា ក៏អាចចម្រើនសតិបដ្ឋានបានជានិច្ច។', 'Mahāsatipaṭṭhāna represents the direct, empirical foundation of Buddhist Vipassanā meditation, extolled by the Buddha as "Ekāyano Maggo"—the singular direct path for the purification of beings, the overcoming of sorrow and lamentation, the destruction of pain and distress, the attainment of the true method, and the realization of Nibbāna. In the Mahāsatipaṭṭhāna Sutta (DN 22), the Buddha elucidated four systematic observation fields: Contemplation of the Body (Kāyānupassanā), Feelings (Vedanānupassanā), Mind (Cittānupassanā), and Mental Qualities (Dhammānupassanā).') }}
    </p>

    <!-- Pali Gatha Box from Mahāsatipaṭṭhāna Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ឯកាយនោ អយំ ភិក្ខវេ មគ្គោ សត្តានំ វិសុទ្ធិយា សោកបរិទេវានំ សមតិក្កមាយ ទុក្ខទោមនស្សានំ អត្ថង្គមាយ ញាយស្ស អធិគមាយ និព្វានស្ស សច្ឆិកិរិយាយ, យទិទំ ចត្តារោ សតិបដ្ឋានា។»', '"This is the one-way path for the purification of beings, for the overcoming of sorrow and lamentation, for the passing away of pain and distress, for the attainment of the noble method, for the realization of Nibbāna—namely, the four foundations of mindfulness." — Dīgha Nikāya 22') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— មហាសតិបដ្ឋានសូត្រ ទីឃនិកាយ មហាវគ្គ', '— Mahāsatipaṭṭhāna Sutta, Dīgha Nikāya') }}
      </p>
    </div>

    <!-- The 4 Foundations Detailed Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🧘</span>
        <span>{{ t('សសរស្តម្ភទាំង ៤ នៃមហាសតិបដ្ឋាន', 'The 4 Foundations of Mindfulness') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="item in foundations"
          :key="item.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <div class="flex items-center gap-2.5">
                <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                  {{ item.num }}
                </span>
                <div>
                  <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">
                    {{ t(item.titleKm, item.titleEn) }}
                  </h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ item.pali }}</p>
                </div>
              </div>
              <span class="text-3xl">{{ item.icon }}</span>
            </div>

            <!-- Focus and Sections -->
            <div class="mt-3">
              <span class="text-xs font-bold text-amber-700 dark:text-amber-300 block mb-1">
                🎯 {{ t(item.focusKm, item.focusEn) }}
              </span>
              <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                {{ t(item.descKm, item.descEn) }}
              </p>
            </div>

            <!-- Key Exercises Inside -->
            <div class="mt-3 p-3 rounded-lg bg-stone-500/5 border border-stone-500/15 text-xs">
              <strong class="text-stone-700 dark:text-stone-300 block mb-1 font-bold">
                📜 {{ t('ផ្នែកអនុវត្តសំខាន់ៗ ៖', 'Core Practice Modules:') }}
              </strong>
              <ul class="space-y-1 text-stone-600 dark:text-stone-400 list-disc list-inside">
                <li v-for="(sec, idx) in item.sections" :key="idx">{{ t(sec.km, sec.en) }}</li>
              </ul>
            </div>
          </div>

          <!-- Direct Takeaway -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <strong class="text-emerald-700 dark:text-emerald-300 font-bold block mb-0.5">
                💡 {{ t('លទ្ធផលនៃការចម្រើន ៖', 'Meditative Result:') }}
              </strong>
              <span class="text-stone-600 dark:text-stone-300">{{ t(item.resultKm, item.resultEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const foundations = [
  {
    id: 1,
    num: '១',
    titleKm: 'កាយានុបស្សនា (សតិពិនិត្យកាយក្នុងកាយ)',
    titleEn: 'Contemplation of Body (Kāyānupassanā)',
    pali: 'Kāye kāyānupassī viharati — ពិនិត្យឃើញកាយគ្រាន់តែជាកាយ មិនមែនសត្វបុគ្គល',
    icon: '🧘',
    focusKm: 'ផ្ចង់សតិសង្កេតចលនារូបកាយ ដង្ហើម ឥរិយាបថ និងធាតុផ្សំ',
    focusEn: 'Anchoring attention upon physical breath, postures, movements, and bodily constituents',
    descKm: 'ការតាមដានដឹងនូវរូបកាយក្នុងបច្ចុប្បន្នកាល មិនមែនដើម្បីសម្រស់ តែដើម្បីកាត់ផ្តាច់នូវសេចក្តីយល់ច្រឡំថា «រាងកាយនេះជាខ្ញុំ ឬជារបស់ខ្ញុំ»។',
    descEn: 'Observing the body as an objective biological field, deconstructing the illusion that physical form is an eternal, attractive self.',
    sections: [
      { km: 'អានាបានសតិ ៖ ដឹងដង្ហើមចេញចូលវែង ខ្លី ស្ងប់រម្ងាប់', en: 'Ānāpānasati: Mindful awareness of long, short, calming breaths' },
      { km: 'ឥរិយាបថ ៤ ៖ ដើរ ឈរ អង្គុយ ដេក ដឹងខ្លួនច្បាស់', en: '4 Postures: Knowing when walking, standing, sitting, or lying down' },
      { km: 'សម្បជញ្ញៈ ៤ ៖ ឈាន ថយ បត់ដៃ បរិភោគ បត់ជើង ដោយដឹងខ្លួន', en: 'Clear Comprehension: Eating, bending, looking with full clarity' },
      { km: 'បដិកូលមនសិការ & ធាតុ ៤ ៖ សក់ រោម ក្រចក ធ្មេញ ស្បែក ដី ទឹក ភ្លើង ខ្យល់', en: '32 Body parts & 4 Elements: Dissecting body into constituent matter' },
    ],
    resultKm: 'កម្ចាត់សេចក្តីជាប់ជំពាក់ក្នុងរូបកាយ និងរំងាប់កាមរាគៈ។',
    resultEn: 'Destroys bodily infatuation, vanity, and physical attachment.',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'វេទនានុបស្សនា (សតិពិនិត្យវេទនាក្នុងវេទនា)',
    titleEn: 'Contemplation of Feelings (Vedanānupassanā)',
    pali: 'Vedanāsu vedanānupassī viharati — ពិនិត្យឃើញវេទនាគ្រាន់តែជាវេទនា',
    icon: '💓',
    focusKm: 'ដឹងទាន់នូវអារម្មណ៍សុខ ទុក្ខ ឬកណ្តាល ដែលកំពុងកើតឡើង',
    focusEn: 'Discerning pleasant, painful, or neutral feeling tones as they arise and pass',
    descKm: 'នៅពេលអារម្មណ៍សុខកើតឡើង ក៏ដឹងថា «សុខកើតឡើង» ពេលទុក្ខកើតឡើង ក៏ដឹងថា «ទុក្ខកើតឡើង» ដោយមិនលោភនឹងសុខ និងមិនខឹងនឹងទុក្ខឡើយ។',
    descEn: 'Watching feeling-tones objectively without craving pleasant feelings or reacting with aversion to unpleasant sensations.',
    sections: [
      { km: 'សុខវេទនា ៖ អារម្មណ៍ស្រួលកាយ ស្រួលចិត្ត (ទាំងសាមិស និងនិរាមិស)', en: 'Sukha Vedanā: Bodily or mental pleasantness, worldly and spiritual' },
      { km: 'ទុក្ខវេទនា ៖ ការឈឺចុកចាប់ តឹងណែន ក្តៅក្រហាយ', en: 'Dukkha Vedanā: Physical aches, soreness, mental agitation' },
      { km: 'អទុក្ខមសុខវេទនា ៖ អារម្មណ៍កណ្តាល មិនសុខ មិនទុក្ខ', en: 'Neutral: Neither-painful-nor-pleasant baseline sensations' },
    ],
    resultKm: 'កាត់ផ្តាច់នូវតណ្ហា ព្រោះតណ្ហាតែងជាប់ជំពាក់លើវេទនា។',
    resultEn: 'Cuts craving at its root, since craving feeds directly upon feeling tones.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'ចិត្តានុបស្សនា (សតិពិនិត្យចិត្តក្នុងចិត្ត)',
    titleEn: 'Contemplation of Mind (Cittānupassanā)',
    pali: 'Citte cittānupassī viharati — ពិនិត្យឃើញស្ថានភាពចិត្តតាមពិត',
    icon: '🧠',
    focusKm: 'អានស្ថានភាពចិត្តរបស់ខ្លួនឯងរាល់វិនាទីដោយគ្មានការវិនិច្ឆ័យ',
    focusEn: 'Reading internal mental states and moods without self-judgment or denial',
    descKm: 'ពេលចិត្តមានកំហឹង ដឹងថា «ចិត្តមានកំហឹង», ពេលចិត្តស្រឡះ ដឹងថា «ចិត្តស្រឡះ», ពេលចិត្តងងុយ ដឹងថា «ចិត្តងងុយ» មិនក្លែងបន្លំ ឬបន្ទោសខ្លួនឯង។',
    descEn: 'Aware of mind with lust, free from lust; with anger, free from anger; contracted, distracted, concentrated, or scattered.',
    sections: [
      { km: 'ចិត្តមានរាគៈ vs ចិត្តប្រាសចាករាគៈ (លោភៈ)', en: 'Mind with lust vs Mind free from lust' },
      { km: 'ចិត្តមានទោសៈ vs ចិត្តប្រាសចាកទោសៈ (កំហឹង)', en: 'Mind with anger vs Mind free from anger' },
      { km: 'ចិត្តមានមោហៈ vs ចិត្តប្រាសចាកមោហៈ (វង្វេង)', en: 'Mind with delusion vs Mind lucidly awakened' },
      { km: 'ចិត្តរួញថយ (ស្ពឹក) vs ចិត្តរាយមាយ (រវើរវាយ)', en: 'Contracted mind (lethargic) vs Scattered mind (agitated)' },
    ],
    resultKm: 'កម្ចាត់ការភ័ន្តច្រឡំថាគំនិតជា «ខ្ញុំ» និងបង្កើនភាពស្ងប់ស្ងៀម។',
    resultEn: 'Dismantles identifying with thoughts; develops immense internal detachment.',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'ធម្មានុបស្សនា (សតិពិនិត្យធម៌ក្នុងធម៌)',
    titleEn: 'Contemplation of Dhammas (Dhammānupassanā)',
    pali: 'Dhammesu dhammānupassī viharati — ពិនិត្យឃើញច្បាប់ធម្មជាតិ និងការរំលត់កិលេស',
    icon: '🪷',
    focusKm: 'ពិនិត្យបាតុភូតធម៌ ឧបសគ្គផ្លូវចិត្ត និងមាគ៌ាត្រាស់ដឹង',
    focusEn: 'Observing phenomena in terms of hindrances, aggregates, and awakening factors',
    descKm: 'ការតាមសង្កេតដំណើរនៃធម៌ ៥ ជំពូក ថាតើកិលេសកើតឡើងដោយសារអ្វី រលត់ទៅដោយសារអ្វី និងសច្ចធម៌ប្រព្រឹត្តទៅយ៉ាងដូចម្តេច។',
    descEn: 'Tracking the functional emergence and eradication of hindrances, understanding how mental factors condition enlightenment.',
    sections: [
      { km: 'នីវរណធម៌ ៥ ៖ ដឹងវត្តមាន និងការរលត់ទៅនៃឧបសគ្គចិត្ត ៥', en: '5 Hindrances: Noting presence and abandonment of hindrances' },
      { km: 'ខន្ធ ៥ ៖ ដឹងការកើតឡើង និងរលត់ទៅនៃរូប វេទនា សញ្ញា សង្ខារ វិញ្ញាណ', en: '5 Aggregates: Watching arising and dissolution of the 5 heaps' },
      { km: 'អាយតនៈ ១២ ៖ ដឹងការប៉ះគ្នារវាងទ្វារ ៦ និងអារម្មណ៍ ៦', en: '12 Sense Bases: Tracking internal and external sense encounters' },
      { km: 'ពោជ្ឈង្គ ៧ & អរិយសច្ច ៤ ៖ ចម្រើនកត្តាត្រាស់ដឹង និងយល់អរិយសច្ច', en: '7 Factors of Awakening & 4 Truths: Cultivating liberation' },
    ],
    resultKm: 'សម្រេចនូវបញ្ញាវិបស្សនាកំពូល និងឈានទៅដល់ការត្រាស់ដឹង។',
    resultEn: 'Culminates in penetrating enlightenment and the realization of Nibbāna.',
  },
]
</script>
