<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៨៥ — អរូបឈាន ៤ & និរោធសមាបត្តិ', 'GATHA 85 — 4 FORMLESS ABSORPTIONS & NIRODHA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('អរូបឈាន ៤ ពិស្តារ ៖ កម្រិតសមាធិអរូបី & និរោធសមាបត្តិ', 'The 4 Formless Absorptions (Arūpa Jhāna) & Nirodha Samāpatti') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('អរូបឈាន សំដៅលើកម្រិតនៃសមាធិដ៏ជ្រាលជ្រៅបំផុតហួសពីរូបធាតុ ដែលអ្នកបដិបត្តិបានឆ្លងផុតរូបឈានទាំង ៤ ដោយការលះបង់នូវការកំណត់លើរូបកាយទាំងស្រុង ហើយយកអារម្មណ៍អរូបិយដ៏បរិសុទ្ធ គ្មានទីបញ្ចប់ មកធ្វើជាអារម្មណ៍តម្កល់ចិត្ត។ នៅក្នុងអនុបទសូត្រ (MN 111) ព្រះសម្មាសម្ពុទ្ធទ្រង់បានកោតសរសើរព្រះសារីបុត្ត ដែលបានចូលកាន់អរូបឈានម្តងមួយៗ និងពិចារណាឃើញការកើតរលត់នៃចេតសិកក្នុងឈាននីមួយៗ រហូតដល់សម្រេច «សញ្ញាវេទយិតនិរោធ» (និរោធសមាបត្តិ) ដែលជារដ្ឋនៃសេចក្តីស្ងប់រំលត់វេទនានិងសញ្ញាទាំងស្រុង។', 'Arūpa Jhānas designate the four formless meditative absorptions that transcend physical materiality entirely. Having perfected the four Rūpa Jhānas, the meditator withdraws awareness from all bodily forms, anchoring consciousness upon boundless, non-material dimensions: Infinite Space, Infinite Consciousness, Nothingness, and Neither-Perception-Nor-Non-Perception. In the Anupada Sutta (MN 111), the Buddha praised Ven. Sāriputta for systematically analyzing mental factors within each formless state before entering Nirodha Samāpatti, where feeling and perception totally cease.') }}
    </p>

    <!-- Pali Gatha Box from Anupada Sutta (MN 111) -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«សព្វសោ រូបសញ្ញានំ សមតិក្កមា បដិឃសញ្ញានំ អត្ថង្គមា នានត្តសញ្ញានំ អមនសិការា អនន្តោ អាកាសោតិ អាកាសានញ្ចាយតនំ ឧបសម្បជ្ជ វិហរតិ។»', '"With the complete transcending of perceptions of form, with the disappearance of sensory impact, with non-attention to perceptions of diversity, aware that \'space is infinite,\' one enters and dwells in the dimension of infinite space." — Majjhima Nikāya 111') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— អនុបទសូត្រ ឧបរិបណ្ណាសក មជ្ឈិមនិកាយ', '— Anupada Sutta, Majjhima Nikāya') }}
      </p>
    </div>

    <!-- The 4 Formless Absorptions Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🌌</span>
        <span>{{ t('អរូបឈានទាំង ៤ កម្រិតពិស្តារ', 'The 4 Formless Absorptions') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="a in arupas"
          :key="a.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                  {{ a.num }}
                </span>
                <div>
                  <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">{{ t(a.titleKm, a.titleEn) }}</h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ a.pali }}</p>
                </div>
              </div>
              <span class="text-3xl">{{ a.icon }}</span>
            </div>

            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(a.descKm, a.descEn) }}
            </p>
          </div>

          <!-- Object of focus -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2.5 rounded-lg bg-stone-500/5 border border-stone-500/15">
              <span class="font-bold text-amber-700 dark:text-amber-300 block mb-0.5">
                🎯 {{ t('អារម្មណ៍តម្កល់ចិត្ត ៖', 'Meditation Object:') }}
              </span>
              <span class="text-stone-600 dark:text-stone-400">{{ t(a.objectKm, a.objectEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Nirodha Samapatti Section -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🪷</span>
        <span>{{ t('និរោធសមាបត្តិ ៖ កំពូលនៃការរំលត់សញ្ញានិងវេទនា', 'Nirodha Samāpatti — The Cessation of Feeling & Perception') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('និរោធសមាបត្តិ (សញ្ញាវេទយិតនិរោធ) គឺជាការចូលកាន់សមាធិកំពូលខ្ពស់បំផុត ដែលអាចសម្រេចបានតែព្រះអនាគាមី និងព្រះអរហន្ត ដែលបានឈានដល់អរូបឈានទី ៤ ប៉ុណ្ណោះ។ ពេលចូលកាន់សមាបត្តិនេះ ដំណើរការផ្លូវចិត្ត (ចិត្ត និងចេតសិក), ដង្ហើមចេញចូល (កាយសង្ខារ) និងការនិយាយគិត (វចីសង្ខារ) ត្រូវបានរលត់ស្ងប់ទាំងស្រុង ដោយនៅសល់តែអាយុសង្ខារ និងកម្តៅនៃរាងកាយប៉ុណ្ណោះ។ នេះជាការភ្លក្សរសជាតិនៃព្រះនិព្វានក្នុងបច្ចុប្បន្នជាតិ រយៈពេលរហូតដល់ ៧ ថ្ងៃ។', 'Nirodha Samāpatti (the cessation of perception and feeling) is the ultimate meditative summit, accessible exclusively to Non-Returners (Anāgāmī) and Arahants who have mastered the eighth absorption. In this state, mental events (Citta and Cetasika), verbal formations, and physical respiration cease completely; only bodily warmth and life faculty remain. The saint rests in an experiential foretaste of Nibbāna for up to seven days.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const arupas = [
  {
    id: 1,
    num: '១',
    titleKm: 'អាកាសានញ្ចាយតនៈ (អាកាសគ្មានទីបំផុត)',
    titleEn: 'Dimension of Infinite Space',
    pali: 'Ākāsānañcāyatana — អនន្តោ អាកាសោ',
    icon: '🌌',
    descKm: 'ការដកចិត្តចេញពីរូបភាពខាងក្រៅទាំងអស់ រួចយក «លំហអាកាសដ៏ធំល្វឹងល្វើយគ្មានទីបញ្ចប់» មកធ្វើជាអារម្មណ៍សមាធិ។ ចិត្តមានអារម្មណ៍ស្រាលស្រឡះ ដូចអណ្តែតកណ្តាលលំហគ្មានព្រំដែន។',
    descEn: 'Withdrawing awareness from all physical boundaries and forms, focusing single-mindedly on boundless, infinite space.',
    objectKm: 'លំហអាកាសទទេស្អាត ដែលគ្មានរូបរាង គ្មានពណ៌ និងគ្មានព្រំដែនកំណត់។',
    objectEn: 'Pure unobstructed spatial expanse devoid of material form or boundary.',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'វិញ្ញាណញ្ចាយតនៈ (វិញ្ញាណគ្មានទីបំផុត)',
    titleEn: 'Dimension of Infinite Consciousness',
    pali: 'Viññāṇañcāyatana — អនន្តំ វិញ្ញាណំ',
    icon: '🔮',
    descKm: 'ការលះបង់នូវអារម្មណ៍លំហអាកាស រួចងាកមកយក «វិញ្ញាណដែលដឹងលំហអាកាសនោះ» មកធ្វើជាអារម្មណ៍វិញ។ ចិត្តសង្កេតឃើញថា វិញ្ញាណនេះក៏ធំធេងគ្មានទីបញ្ចប់ដែរ។',
    descEn: 'Surpassing the contemplation of external space, the mind shifts inward to observe the sheer consciousness that perceived space, realizing consciousness itself is infinite.',
    objectKm: 'វិញ្ញាណដឹងអារម្មណ៍ដ៏ភ្លឺថ្លា ដែលផ្សាយចេញទៅគ្រប់ទិសគ្មានទីកំណត់។',
    objectEn: 'Luminous bare awareness radiating boundlessly in all directions.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'អាកិញ្ចញ្ញាយតនៈ (ភាពគ្មានអ្វីបន្តិចសោះ)',
    titleEn: 'Dimension of Nothingness',
    pali: 'Ākiñcaññāyatana — នត្ថិ កិញ្ចិ',
    icon: '🌑',
    descKm: 'ការលះបង់វិញ្ញាណ រួចតម្កល់ចិត្តលើ «ភាពទទេស្អាត គ្មានអ្វីសូម្បីតែបន្តិចបន្តួច» (នត្ថិ កិញ្ចិ)។ ចិត្តស្ងប់ស្ងាត់ជ្រាលជ្រៅ ផុតចាកការជាប់ជំពាក់នឹងរូប និងវិញ្ញាណ។',
    descEn: 'Transcending infinite consciousness, awareness focuses upon the absence or voidness of everything: "There is nothing at all."',
    objectKm: 'សភាពទទេស្អាត គ្មានវត្តមាននៃអ្វីមួយសូម្បីតែបន្តិចបន្តួចក្នុងចិត្ត។',
    objectEn: 'The absolute absence of phenomena; pure emptiness and non-presence.',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'នេវសញ្ញានាសញ្ញាយតនៈ (មានសញ្ញាក៏មិនមែន អត់ក៏មិនមែន)',
    titleEn: 'Neither-Perception-Nor-Non-Perception',
    pali: 'Nevasaññānāsaññāyatana — សញ្ញាដ៏ល្អិតសុខុមបំផុត',
    icon: '✨',
    descKm: 'កំពូលនៃលោកិយឈាន ៖ សញ្ញាក្នុងចិត្តមានសភាពល្អិតសុខុមដល់ថ្នាក់ និយាយថា «មានសញ្ញា» ក៏មិនត្រូវ ព្រោះវាស្ទើរតែរលត់ទាំងស្រុង តែបើនិយាយថា «គ្មានសញ្ញា» ក៏មិនត្រូវ ព្រោះនៅសល់ដានសញ្ញាបន្តិចបន្តួច។',
    descEn: 'The subtle pinnacle of mundane absorption: perception is so refined and transparent that one cannot say perception exists, nor can one say it is entirely absent.',
    objectKm: 'សភាពចិត្តដែលស្ទើរតែរលត់ស្ងាត់ទាំងស្រុង រង់ចាំតែការសម្រេចនិរោធសមាបត្តិ។',
    objectEn: 'The subtlest gossamer residue of perception resting on the threshold of cessation.',
  },
]
</script>
