<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៩៣ — សម្មប្បធាន ៤', 'GATHA 93 — 4 RIGHT STRIVINGS (SAMMAPPADHĀNA)') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('សម្មប្បធាន ៤ ៖ កំពូលកម្លាំងព្យាយាមត្រូវ & យន្តការផ្លាស់ប្តូរវាសនា', 'The 4 Right Strivings (Sammappadhāna): Engines of Transformation') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('សម្មប្បធាន ៤ សំដៅលើកិច្ចព្យាយាមដ៏ត្រឹមត្រូវ ៤ ប្រការដែលជាស្នូលកណ្តាលនៃ «សម្មាវាយាមៈ» ក្នុងអរិយមគ្គមានអង្គ ៨ និងជាអង្គធម៌ដ៏សំខាន់ក្នុងពោធិបក្ខិយធម៌ ៣៧ ប្រការ។ ការព្យាយាមក្នុងពុទ្ធសាសនាមិនមែនជាការខំប្រឹងដោយងងឹតងងល់ ឬព្យាយាមក្នុងផ្លូវខុសនោះទេ តែជាការតាំងចិត្តដ៏មុតស្រួចក្នុងការការពារ និងកម្ចាត់អកុសល ព្រមទាំងបង្កើត និងថែរក្សាកុសលធម៌ឱ្យរីកចម្រើនឡើងក្នុងចិត្ត។ បុគ្គលដែលប្រកបដោយសម្មប្បធានទាំង ៤ រមែងមានថាមពលផ្លូវចិត្តរឹងមាំ មិនចាញ់ច្រាបឧបសគ្គជីវិត និងអាចដុតបំផ្លាញកិលេសឱ្យអស់រលីង។', 'Sammappadhāna designates the Four Supreme Efforts that constitute the precise definition of Right Effort (Sammā Vāyāma) in the Noble Eightfold Path, and a pivotal pillar of the 37 Requisites of Enlightenment (Bodhipakkhiyadhamma). Striving in the Dhamma is not blind physical exhaustion, but a radiant, deliberate dynamic of heart: guarding against and eliminating unwholesome states while awakening and perfecting wholesome virtues. One established in these four strivings masters their destiny, conquering inner inertia and paving the runway to spiritual awakening.') }}
    </p>

    <!-- Pali Gatha Box from Sammappadhana Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ចត្តារោ ឥមេ ភិក្ខវេ បធានា។ កតមេ ចត្តារោ? សំវរបធានំ, បហានបធានំ, ភាវនាបធានំ, អនុរក្ខណាបធានំ។»', '"There are, monks, these four right strivings. Which four? The effort to restrain, the effort to abandon, the effort to develop, and the effort to protect." — Aṅguttara Nikāya 4.14') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— សំវរសូត្រ ចតុក្កនិបាត អង្គុត្តរនិកាយ', '— Saṃvara Sutta, Catukkanipāta, Aṅguttara Nikāya') }}
      </p>
    </div>

    <!-- The 4 Strivings Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>⚡</span>
        <span>{{ t('សម្មប្បធានទាំង ៤ ប្រការពិស្តារ', 'The 4 Right Strivings Explained') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="e in efforts"
          :key="e.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
          :class="e.isUnwholesome ? 'border-rose-500/20' : 'border-emerald-500/20'"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <div class="flex items-center gap-2">
                <span
                  class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold"
                  :class="e.isUnwholesome ? 'bg-rose-500/20 text-rose-700 dark:text-rose-300' : 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'"
                >
                  {{ e.num }}
                </span>
                <div>
                  <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">{{ t(e.titleKm, e.titleEn) }}</h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ e.pali }}</p>
                </div>
              </div>
              <span class="text-2xl">{{ e.icon }}</span>
            </div>

            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(e.descKm, e.descEn) }}
            </p>
          </div>

          <!-- Practical Action -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div
              class="p-2.5 rounded-lg border"
              :class="e.isUnwholesome ? 'bg-rose-500/5 border-rose-500/20' : 'bg-emerald-500/5 border-emerald-500/20'"
            >
              <span
                class="font-bold block mb-0.5"
                :class="e.isUnwholesome ? 'text-rose-700 dark:text-rose-300' : 'text-emerald-700 dark:text-emerald-300'"
              >
                🛠️ {{ t('កិច្ចប្រតិបត្តិប្រចាំថ្ងៃ ៖', 'Daily Practice Action:') }}
              </span>
              <span class="text-stone-600 dark:text-stone-400">{{ t(e.actionKm, e.actionEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- The 4-Fold Shield & Garden Model -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🌱</span>
        <span>{{ t('ឧបមាដូចអ្នកថែសួន ៖ ការសម្អាតស្មៅ និងដាំផ្កា', 'The Gardener Analogy: Weeding & Cultivating Blooms') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ចិត្តប្រៀបដូចជាសួនផ្កា ៖ (១) សំវរបធាន ដូចជាការដាក់របងការពារកុំឱ្យគ្រាប់ស្មៅអាក្រក់ហើរចូល (២) បហានបធាន ដូចជាការដកស្មៅចង្រៃដែលដុះឡើងហើយចោល (៣) ភាវនាបធាន ដូចជាការសាបព្រោះគ្រាប់ពូជផ្កាល្អៗ និង (៤) អនុរក្ខណាបធាន ដូចជាការស្រោចទឹក ដាក់ជី ថែរក្សាផ្កាទាំងនោះឱ្យរីកស្រស់បំព្រងជានិច្ច។ បើខ្វះការដកស្មៅ សួននឹងត្រូវបំផ្លាញ; បើខ្វះការដាំផ្កា សួននឹងនៅទទេស្អាតឥតប្រយោជន៍។', 'The human mind resembles a fertile garden: (1) Saṃvara puts up fences to bar weed seeds from blowing in; (2) Pahāna pulls out weeds that have already sprouted; (3) Bhāvanā plants seeds of vibrant blossoms; (4) Anurakkhaṇā waters and nourishes those blossoms to eternal bloom. Without weeding, flowers choke; without planting flowers, the soil lies barren.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const efforts = [
  {
    id: 1,
    num: '១',
    isUnwholesome: true,
    titleKm: 'សំវរបធាន (ព្យាយាមប្រយ័ត្នរារាំង)',
    titleEn: 'Saṃvara-padhāna (Effort to Restrain)',
    pali: 'Saṃvara-padhāna — ការពារអកុសលថ្មី',
    icon: '🛡️',
    descKm: 'ការព្យាយាមប្រយ័ត្នប្រយែង រារាំងមិនឱ្យអកុសលធម៌ដ៏លាមកដែលមិនទាន់កើត កុំឱ្យមានឱកាសកើតឡើងក្នុងចិត្ត ដោយការសង្រួមឥន្ទ្រិយទាំង ៦។',
    descEn: 'The heroic effort of vigilance, guarding the six sense faculties so that unarisen evil and unwholesome states do not gain entry into the heart.',
    actionKm: 'ពេលភ្នែកឃើញរូប ត្រចៀកឮសំឡេង... មិនភ្លេចខ្លួនលង់ក្នុងតណ្ហា ឬកំហឹងឡើយ។',
    actionEn: 'Practicing sensory moderation whenever sights, sounds, or scents arise.',
  },
  {
    id: 2,
    num: '២',
    isUnwholesome: true,
    titleKm: 'បហានបធាន (ព្យាយាមលះបង់ផ្តាច់)',
    titleEn: 'Pahāna-padhāna (Effort to Abandon)',
    pali: 'Pahāna-padhāna — កម្ចាត់អកុសលចាស់',
    icon: '✂️',
    descKm: 'ការព្យាយាមលះបង់ បន្ទោបង់ និងកម្ចាត់ចោលនូវអកុសលធម៌ គំនិតលោភ ខឹង ស្អប់ ដែលបានជ្រុលជ្រួសកើតឡើងក្នុងចិត្តហើយ កុំឱ្យនៅបន្តទៀត។',
    descEn: 'The resolute effort to abandon, dispel, and eradicate unwholesome states of desire, malice, or conceit that have already arisen within.',
    actionKm: 'កាលបើដឹងថាចិត្តកំពុងខឹង ឬលោភ ត្រូវប្រើសតិកាត់ផ្តាច់ភ្លាម កុំបណ្តោយឱ្យឆេះរាលដាល។',
    actionEn: 'Extinguishing flashes of fury or greed promptly using mindfulness.',
  },
  {
    id: 3,
    num: '៣',
    isUnwholesome: false,
    titleKm: 'ភាវនាបធាន (ព្យាយាមបណ្តុះកុសល)',
    titleEn: 'Bhāvanā-padhāna (Effort to Develop)',
    pali: 'Bhāvanā-padhāna — បង្កើតកុសលថ្មី',
    icon: '🌱',
    descKm: 'ការព្យាយាមបណ្តុះបណ្តាល បង្កើតឡើងនូវកុសលធម៌ សទ្ធា សីល សមាធិ បញ្ញា និងពោជ្ឈង្គ ៧ ដែលមិនទាន់មាន ឱ្យមានវត្តមានឡើងក្នុងចិត្ត។',
    descEn: 'The proactive effort to awaken, generate, and cultivate unarisen wholesome states: faith, mindfulness, samādhi, wisdom, and liberation factors.',
    actionKm: 'ឆ្លៀតពេលរៀនធម៌ ធ្វើទាន រក្សាសីល អង្គុយសមាធិ និងធ្វើអំពើល្អថ្មីៗជារៀងរាល់ថ្ងៃ។',
    actionEn: 'Actively carving out daily time for study, generosity, meditation, and virtue.',
  },
  {
    id: 4,
    num: '៤',
    isUnwholesome: false,
    titleKm: 'អនុរក្ខណាបធាន (ព្យាយាមថែរក្សាកុសល)',
    titleEn: 'Anurakkhaṇā-padhāna (Effort to Protect)',
    pali: 'Anurakkhaṇā-padhāna — រក្សាកុសលឱ្យគង់វង្ស',
    icon: '🌳',
    descKm: 'ការព្យាយាមតាមថែរក្សា ការពារកុសលធម៌ និងសមាធិចិត្តដែលកើតឡើងហើយ កុំឱ្យសាបសូន្យទៅវិញ ព្រមទាំងចម្រើនឱ្យធំធាត់ដល់កំពូល។',
    descEn: 'The steadfast effort to protect, maintain, and nourish wholesome states that have already blossomed, bringing them to fullness and maturity.',
    actionKm: 'ថែរក្សាទម្លាប់ល្អឱ្យបានទៀងទាត់ មិនខ្ជិលច្រអូស មិនធ្វេសប្រហែសពេលជីវិតបានសុខ។',
    actionEn: 'Safeguarding good habits consistently, resisting spiritual complacency.',
  },
]
</script>
