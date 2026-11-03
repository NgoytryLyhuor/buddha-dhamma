<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៥៩ — ព្រះបារមី ៣០ ទស្ស', 'GATHA 59 — THE 30 PARAMIS OF THE BODHISATTA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ព្រះបារមី ៣០ ទស្ស ៖ មាគ៌ាកសាងបុណ្យដើម្បីត្រាស់ដឹង', 'The 30 Pāramīs: The Supreme Path to Buddhahood') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('បារមី មកពីពាក្យបាលីថា «បរម» ដែលមានន័យថា គុណធម៌ដ៏ខ្ពង់ខ្ពស់បំផុត ដែលព្រះពោធិសត្វបំពេញដើម្បីឆ្លងសង្សារវដ្តទៅកាន់ត្រើយម្ខាង គឺព្រះនិព្វាន។ ព្រះសម្មាសម្ពុទ្ធគ្រប់ព្រះអង្គ មុននឹងបានត្រាស់ដឹងជាសាស្តាចារ្យនៃមនុស្សនិងទេវតា ទ្រង់ត្រូវបំពេញ «បារមី ១០ ប្រការ» ដែលបែងចែកជា ៣ កម្រិត (បារមីធម្មតា, ឧបបារមី, បរមត្ថបារមី) សរុបស្មើនឹង «ព្រះបារមី ៣០ ទស្ស» ដោយចំណាយពេលរាប់សែនកោដិជាតិ (រាប់អសង្ខេយ្យកប្ប)។', 'Pāramī stems from the Pali root "parama", signifying the supreme transcendent spiritual perfections cultivated by a Bodhisatta to cross the ocean of Saṁsāra to Nibbāna. Every Fully Awakened Buddha must fulfill the Ten Perfections across three distinct tiers of self-sacrifice (Basic Pāramī, Intermediate Upapāramī, and Ultimate Paramattha-pāramī), totaling the Thirty Perfections (Samatiṁsa Pāramī) across innumerable aeons.') }}
    </p>

    <!-- 3 Tiers of Sacrifice (កម្រិតទាំង ៣ នៃបារមី) -->
    <div class="card-paper p-6 md:p-8 rounded-2xl border mt-8">
      <p class="chapter-label">{{ t('កម្រិតនៃការលះបង់', 'THE 3 TIERS OF SACRIFICE') }}</p>
      <h3 class="font-display text-xl font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
        {{ t('កម្រិតទាំង ៣ នៃការបំពេញបារមី (១០ x ៣ = ៣០)', 'The 3 Tiers: External, Bodily & Life Sacrifice') }}
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <div class="p-4 rounded-xl border bg-amber-500/5 border-amber-500/20">
          <span class="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">កម្រិតទី ១ (មូលដ្ឋាន)</span>
          <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">បារមីសាមញ្ញ (Pāramī)</h4>
          <p class="text-xs mt-1.5 text-stone-600 dark:text-stone-300 leading-relaxed">
            <strong>ការលះបង់ទ្រព្យសម្បត្តិខាងក្រៅ ៖</strong> លះបង់រាជសម្បត្តិ ប្រាក់កាស មាសប្រាក់ បុត្រ និងភរិយា (ដូចជា ព្រះវេស្សន្តរបរិច្ចាគដំរីស និងកូនទាំងពីរ)។
          </p>
        </div>

        <div class="p-4 rounded-xl border bg-sky-500/5 border-sky-500/20">
          <span class="text-xs font-mono font-bold text-sky-600 dark:text-sky-400">កម្រិតទី ២ (មធ្យម)</span>
          <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">ឧបបារមី (Upapāramī)</h4>
          <p class="text-xs mt-1.5 text-stone-600 dark:text-stone-300 leading-relaxed">
            <strong>ការលះបង់សាច់ឈាម & អវយវៈ ៖</strong> លះបង់សាច់ ឈាម ដៃ ជើង ឬភ្នែករបស់ខ្លួនដើម្បីធម៌ (ដូចជា ព្រះបាទសិវិរាជខ្វេះព្រះនេត្រទាំងសងខាងធ្វើទាន)។
          </p>
        </div>

        <div class="p-4 rounded-xl border bg-emerald-500/5 border-emerald-500/20">
          <span class="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">កម្រិតទី ៣ (កំពូល)</span>
          <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">បរមត្ថបារមី (Paramattha Pāramī)</h4>
          <p class="text-xs mt-1.5 text-stone-600 dark:text-stone-300 leading-relaxed">
            <strong>ការលះបង់ជីវិតខ្លួនឯង ៖</strong> សុខចិត្តលះបង់ជីវិត ឱ្យគេសម្លាប់ ឬលោតចូលភ្លើងដើម្បីរក្សាសច្ចៈ និងសីល (ដូចជា សសបណ្ឌិតលោតចូលគំនរភ្លើង)។
          </p>
        </div>
      </div>
    </div>

    <!-- The 10 Perfections List -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>👑</span>
        <span>{{ t('បញ្ជីព្រះបារមីទាំង ១០ ប្រការ (ទាន សីល នេក្ខម្ម...)', 'The 10 Perfections in Detail') }}</span>
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          v-for="(p, idx) in paramiList"
          :key="p.pali"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between pb-2 border-b" :style="{ borderColor: 'var(--border)' }">
              <span class="text-xs font-mono font-bold uppercase text-amber-500">បារមីទី {{ idx + 1 }} · {{ p.pali }}</span>
              <span class="text-2xl">{{ p.icon }}</span>
            </div>
            <h4 class="font-display text-base font-bold mt-2" :style="{ color: 'var(--ink)' }">
              {{ t(p.km, p.en) }}
            </h4>
            <p class="text-xs mt-1.5 text-stone-500 leading-relaxed">
              {{ t(p.descKm, p.descEn) }}
            </p>
          </div>

          <div class="mt-3 p-2.5 rounded bg-[var(--bg-card-2)] border border-[var(--border)] text-[11px]" :style="{ color: 'var(--ink-soft)' }">
            <strong class="text-amber-500">ឧទាហរណ៍ជាតិ ៖ </strong>
            {{ t(p.storyKm, p.storyEn) }}
          </div>
        </div>
      </div>
    </div>

    <!-- Duration of Paramis (រយៈពេលសន្សំបារមី) -->
    <div class="card-paper p-6 md:p-8 rounded-2xl border mt-8 border-t-4" :style="{ borderTopColor: '#d97706' }">
      <p class="chapter-label">{{ t('ពេលវេលាសន្សំបារមី', 'AEONS OF CULTIVATION') }}</p>
      <h3 class="font-display text-xl font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
        {{ t('រយៈពេលសន្សំបារមីរបស់ព្រះពុទ្ធ ៣ ប្រភេទ', 'The 3 Types of Buddhas & Aeons Required') }}
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-5 text-center">
        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-2xl">💡</span>
          <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">បញ្ញាធិកពុទ្ធ</h4>
          <p class="text-xs font-mono font-bold text-amber-500 mt-1">៤ អសង្ខេយ្យ & ១ សែនកប្ប</p>
          <p class="text-[11px] text-stone-500 mt-1 leading-relaxed">មានបញ្ញាខ្លាំងជាងគេ ដូចជា <strong>ព្រះសមណគោតម</strong> បច្ចុប្បន្ន។</p>
        </div>

        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-2xl">💎</span>
          <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">សទ្ធាធិកពុទ្ធ</h4>
          <p class="text-xs font-mono font-bold text-sky-500 mt-1">៨ អសង្ខេយ្យ & ១ សែនកប្ប</p>
          <p class="text-[11px] text-stone-500 mt-1 leading-relaxed">មានសទ្ធាជ្រះថ្លាខ្លាំងជាងគេ ក្នុងការសន្សំបារមី។</p>
        </div>

        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-2xl">⚡</span>
          <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">វីរិយាធិកពុទ្ធ</h4>
          <p class="text-xs font-mono font-bold text-emerald-500 mt-1">១៦ អសង្ខេយ្យ & ១ សែនកប្ប</p>
          <p class="text-[11px] text-stone-500 mt-1 leading-relaxed">មានសេចក្តីព្យាយាមខ្លាំងបំផុត ដូចជា <strong>ព្រះសិអារ្យមេត្រី</strong>។</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const paramiList = [
  {
    icon: '🎁',
    pali: 'Dāna Pāramī',
    km: '១. ទានបារមី (ការបរិច្ចាគលះបង់)',
    en: '1. Dāna Pāramī (Generosity)',
    descKm: 'ការចែករំលែក ជួយសង្គ្រោះអ្នកដទៃ ដោយមិនស្តាយក្រោយ និងកម្ចាត់សេចក្តីកំណាញ់ស្វិតស្វាញ។',
    descEn: 'Unreserved giving and self-sacrifice dispelling greed and stinginess.',
    storyKm: 'ព្រះវេស្សន្តរ បរិច្ចាគដំរីបច្ច័យនាគេន្ទ្រ និងបុត្រទាំងពីរ',
    storyEn: 'Vessantara donating the rain-bringing elephant and beloved children'
  },
  {
    icon: '🛡️',
    pali: 'Sīla Pāramī',
    km: '២. សីលបារមី (ការរក្សាកាយវាចាឱ្យបរិសុទ្ធ)',
    en: '2. Sīla Pāramī (Moral Purity)',
    descKm: 'ការប្រព្រឹត្តអំពើល្អ វៀរចាកបាបកម្ម មិនបៀតបៀនសត្វដទៃ សូម្បីតែជីវិតត្រូវបាត់បង់។',
    descEn: 'Flawless bodily and verbal restraint guarding ethical vows even at the cost of life.',
    storyKm: 'ស្តេចពស់ភូរិទត្ត សុខចិត្តឱ្យគេធ្វើបាបដោយមិនព្រមបញ្ចេញពិសសម្លាប់ព្រាន',
    storyEn: 'Bhuridatta Naga enduring capture rather than breathing fatal venom upon the hunter'
  },
  {
    icon: '🧘',
    pali: 'Nekkhamma Pāramī',
    km: '៣. នេក្ខម្មបារមី (ការចេញសាងផ្នួស លះកាម)',
    en: '3. Nekkhamma Pāramī (Renunciation)',
    descKm: 'ការលះបង់ចំណងកាមគុណ គេហដ្ឋាន និងទ្រព្យសម្បត្តិ ទៅបួសរស់នៅក្នុងព្រៃស្ងប់ស្ងាត់។',
    descEn: 'Relinquishing sensory pleasures and worldly luxury to dwell in tranquil seclusion.',
    storyKm: 'ព្រះតេមិយៈ ក្លែងធ្វើជាគថ្លង់ខ្វិន ដើម្បីកុំឱ្យឡើងសោយរាជ្យរួចចេញទៅបួស',
    storyEn: 'Temiya pretending to be mute and crippled to avoid the throne and go forth'
  },
  {
    icon: '💡',
    pali: 'Paññā Pāramī',
    km: '៤. បញ្ញាបារមី (ការយល់ដឹងសច្ចភាព)',
    en: '4. Paññā Pāramī (Wisdom)',
    descKm: 'ការស្រាវជ្រាវស្វែងយល់ពីហេតុផល ត្រៃលក្ខណ៍ និងការដោះស្រាយវិបត្តិដោយបញ្ញាវាងវៃ។',
    descEn: 'Penetrative insight into the causal nature of existence and skillful resolution of conflicts.',
    storyKm: 'មហោសថបណ្ឌិត ប្រើបញ្ញាដោះស្រាយប្រស្នាពិបាកៗ និងជួយសង្គ្រោះនគរពីសង្គ្រាម',
    storyEn: 'Mahosadha solving profound riddles and saving kingdoms through brilliant intellect'
  },
  {
    icon: '⚡',
    pali: 'Vīriya Pāramī',
    km: '៥. វីរិយបារមី (សេចក្តីព្យាយាមមុតមាំ)',
    en: '5. Vīriya Pāramī (Energy & Diligence)',
    descKm: 'ការមិនចុះចាញ់ឧបសគ្គ ព្យាយាមឆ្លងកាត់ការលំបាកទោះបីជាសមុទ្រធំល្វឹងល្វើយយ៉ាងណាក្តី។',
    descEn: 'Undaunted courageous perseverance pushing forward through seemingly impossible ordeals.',
    storyKm: 'ព្រះមហាជនក ហែលទឹកកណ្តាលមហាសមុទ្រ ៧ ថ្ងៃ ៧ យប់ មិនព្រមចុះចាញ់',
    storyEn: 'Mahājanaka swimming across the endless storming ocean for 7 days without despair'
  },
  {
    icon: '🪵',
    pali: 'Khantī Pāramī',
    km: '៦. ខន្តីបារមី (ការអត់ធ្មត់សង្កត់ចិត្ត)',
    en: '6. Khantī Pāramī (Patience & Forbearance)',
    descKm: 'ការអត់ទ្រាំនឹងការឈឺចាប់ ពាក្យប្រមាថ និងការធ្វើបាប ដោយមិនខឹងតបតវិញឡើយ។',
    descEn: 'Enduring immense physical agony and insult without a single spark of hatred.',
    storyKm: 'ខន្តិវាទីតាបស ត្រូវស្តេចកាត់ដៃជើងច្រមុះត្រចៀក នៅតែផ្សាយមេត្តាឥតខឹង',
    storyEn: 'Khantivādi ascetic dismembered limb by limb by an enraged king, radiating pure love'
  },
  {
    icon: '🎯',
    pali: 'Sacca Pāramī',
    km: '៧. សច្ចបារមី (ភាពស្មោះត្រង់មិនកុហក)',
    en: '7. Sacca Pāramī (Truthfulness)',
    descKm: 'ការរក្សាពាក្យសត្យ មិនកុហកភូតភរ និយាយយ៉ាងណាធ្វើឱ្យបានយ៉ាងនោះជានិច្ច។',
    descEn: 'Absolute integrity and truthfulness; alignment between thought, speech, and deed.',
    storyKm: 'មហាសុតសោម រក្សាសច្ចវាចា វិលត្រឡប់ទៅឱ្យយក្សកល្មាសបាទសម្លាប់តាមការសន្យា',
    storyEn: 'Mahāsutasoma returning willingly to the man-eating ogre to honor a pledged word'
  },
  {
    icon: '⚓',
    pali: 'Adhiṭṭhāna Pāramī',
    km: '៨. អធិដ្ឋានបារមី (ការតាំងចិត្តយ៉ាងរឹងមាំ)',
    en: '8. Adhiṭṭhāna Pāramī (Firm Determination)',
    descKm: 'ការតាំងចិត្តលើគោលដៅត្រឹមត្រូវ មិនឱ្យរង្គោះរង្គើដោយសារខ្យល់ព្យុះឧបសគ្គណាមួយឡើយ។',
    descEn: 'Unyielding resolution locking the will onto supreme awakening without deflection.',
    storyKm: 'ព្រះនេមិរាជ តាំងចិត្តរក្សាកុសលធម៌ និងការសមាទានសីលយ៉ាងខ្ជាប់ខ្ជួន',
    storyEn: 'King Nemi adhering unflinchingly to moral righteousness and divine contemplation'
  },
  {
    icon: '💚',
    pali: 'Mettā Pāramī',
    km: '៩. មេត្តាបារមី (សេចក្តីស្រឡាញ់រាប់អានទូទៅ)',
    en: '9. Mettā Pāramī (Loving-Kindness)',
    descKm: 'ការស្រឡាញ់រាប់អានសត្វលោកទាំងអស់ ទាំងមិត្ត ទាំងសត្រូវ ដោយចិត្តស្មើគ្នា។',
    descEn: 'Universal benevolence embracing friends, strangers, and lethal enemies with equal tenderness.',
    storyKm: 'សុវណ្ណសាម ផ្សាយមេត្តាដល់សត្វព្រៃទាំងឡាយ ទោះត្រូវស្តេចបាញ់ព្រួញត្រូវក៏មិនខឹង',
    storyEn: 'Suvaṇṇasāma struck by a poison arrow while tending blind parents, expressing pure goodwill'
  },
  {
    icon: '⚖️',
    pali: 'Upekkhā Pāramī',
    km: '១០. ឧបេក្ខាបារមី (ការតម្កល់ចិត្តកណ្តាល)',
    en: '10. Upekkhā Pāramī (Equanimity)',
    descKm: 'ការមិនលម្អៀងដោយការស្រឡាញ់ ឬការស្អប់ ស្ងប់ស្ងាត់ចំពោះមុខសុខនិងទុក្ខ។',
    descEn: 'Perfect balance of mind, unperturbed by pleasure or torment, praise or abuse.',
    storyKm: 'លោមហំសនតាបស ដេកនៅកន្លែងខ្មោច ត្រូវគេជេរប្រមាថ និងសរសើរ ក៏ចិត្តនៅស្មើ',
    storyEn: 'Lomahaṁsa dwelling in charnel grounds, completely unruffled by spit or garlands'
  }
]
</script>
