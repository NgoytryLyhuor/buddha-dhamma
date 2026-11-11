<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៩០ — វិសុទ្ធិ ៧ ប្រការ', 'GATHA 90 — 7 STAGES OF PURIFICATION') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('វិសុទ្ធិ ៧ ប្រការ ៖ ឧបមារថ ៧ ផ្លាស់ឆ្ពោះទៅកាន់ព្រះនិព្វាន', 'The 7 Stages of Purification (Visuddhi) & The 7 Relay Chariots') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('វិសុទ្ធិ ៧ ប្រការ គឺជាផែនទីបង្ហាញផ្លូវដ៏ល្បីល្បាញបំផុតនៃការបដិបត្តិធម៌ក្នុងព្រះពុទ្ធសាសនាថេរវាទ ដែលត្រូវបានចងក្រងយ៉ាងក្បោះក្បាយនៅក្នុងគម្ពីរវិសុទ្ធិមគ្គ ដោយផ្អែកលើ «រថវិនីតសូត្រ» (MN 24) គឺការសន្ទនាឆ្លើយឆ្លងគ្នារវាងកំពូលសាវ័កពីរព្រះអង្គ គឺព្រះសារីបុត្ត និងព្រះបុណ្ណមន្តានីបុត្ត។ ព្រះបុណ្ណបានលើកឧបមាថា ដូចព្រះរាជាចង់ធ្វើដំណើរពីក្រុងសាកេតទៅក្រុងសាវត្ថីក្នុងវេលាប្រញាប់ ទ្រង់ត្រូវជិះរថ ៧ ផ្លាស់បន្តគ្នាពីរថមួយទៅរថមួយយ៉ាងណា ការបដិបត្តិធម៌ដើម្បីសម្រេចព្រះនិព្វាន ក៏ត្រូវឆ្លងកាត់ការជម្រះវិសុទ្ធិទាំង ៧ ដំណាក់កាលបន្តបន្ទាប់គ្នាយ៉ាងនោះដែរ។', 'The Seven Stages of Purification (Visuddhi) constitute the definitive spiritual roadmap of Theravada meditation, systematized in the Visuddhimagga based upon the Rathavinīta Sutta (MN 24)—a celebrated dialogue between the Venerable Sāriputta and Venerable Puṇṇa Mantāniputta. Venerable Puṇṇa used the famous parable of King Pasenadi travelling urgently from Sāketa to Sāvatthī using seven relay chariots: each chariot transports the king safely to the next, until the final destination is reached. In identical fashion, each stage of purification purifies the mind to make the subsequent stage possible, culminating in the unconditioned bliss of Nibbāna.') }}
    </p>

    <!-- Pali Gatha Box from Rathavinita Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«សីលវិសុទ្ធិ ខោ អាវុសោ ចិត្តវិសុទ្ធត្ថា, ចិត្តវិសុទ្ធិ ទិដ្ឋិវិសុទ្ធត្ថា... ញាណទស្សនវិសុទ្ធិ អនុបាទាបរិនិព្វានត្ថា។»', '"Virtue purification is for the purpose of mind purification; mind purification for view purification... knowledge and vision purification is for the purpose of total unbinding without clinging." — Majjhima Nikāya 24') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— រថវិនីតសូត្រ មជ្ឈិមនិកាយ មូលបណ្ណាសក', '— Rathavinīta Sutta, Majjhima Nikāya') }}
      </p>
    </div>

    <!-- The 7 Steps Timeline Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🚗</span>
        <span>{{ t('ដំណើរនៃរថទាំង ៧ ផ្លាស់ (វិសុទ្ធិទាំង ៧)', 'The 7 Relay Stages of Purification') }}</span>
      </h3>

      <div class="space-y-3">
        <div
          v-for="s in stages"
          :key="s.id"
          class="card-paper p-4 sm:p-5 rounded-xl border flex flex-col md:flex-row gap-4 items-start md:items-center justify-between"
          :class="s.id === 7 ? 'ring-2 ring-amber-500/50' : ''"
        >
          <div class="flex items-start sm:items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-sm font-mono font-bold shrink-0">
              {{ s.num }}
            </span>
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">{{ t(s.titleKm, s.titleEn) }}</h4>
                <span class="text-xs font-mono text-stone-500">({{ s.pali }})</span>
              </div>
              <p class="text-xs sm:text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                {{ t(s.descKm, s.descEn) }}
              </p>
            </div>
          </div>

          <div class="md:w-56 shrink-0 w-full p-2.5 rounded-lg bg-stone-500/5 border border-stone-500/15 text-xs">
            <span class="font-bold text-amber-700 dark:text-amber-300 block mb-0.5">
              🎯 {{ t('គោលដៅ ៖', 'Target Purpose:') }}
            </span>
            <span class="text-stone-600 dark:text-stone-400">{{ t(s.purposeKm, s.purposeEn) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Summary Box -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🏁</span>
        <span>{{ t('គោលដៅចុងក្រោយ ៖ អនុបាទាបរិនិព្វាន (ការរលត់ទុក្ខដោយមិនប្រកាន់មាំ)', 'The Ultimate Goal: Anupādā Parinibbāna') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រះបុណ្ណបានសង្ខេបយ៉ាងច្បាស់ថា ការប្រតិបត្តិព្រហ្មចរិយធម៌ក្នុងសំណាក់ព្រះសម្មាសម្ពុទ្ធ មិនមែនដើម្បីសីល មិនមែនដើម្បីសមាធិ និងមិនមែនដើម្បីចំណេះដឹងនោះឡើយ គឺដើម្បី «អនុបាទាបរិនិព្វាន» គឺការរលត់ទុក្ខទាំងស្រុងដោយចិត្តមិនប្រកាន់មាំជាប់ជំពាក់នឹងអ្វីទាំងអស់ក្នុងលោក។', 'Ven. Puṇṇa concluded masterfully: the holy life under the Blessed One is not lived merely for virtue, concentration, or theoretical knowledge, but solely for Anupādā Parinibbāna—total, unshakeable unbinding of mind free from every vestige of clinging.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const stages = [
  {
    id: 1,
    num: '១',
    titleKm: 'សីលវិសុទ្ធិ (ភាពបរិសុទ្ធនៃសីល)',
    titleEn: 'Purification of Virtue (Sīla-visuddhi)',
    pali: 'Sīla-visuddhi',
    descKm: 'ការរក្សាសីល ៥ សីល ៨ ឬបាតិមោក្ខសំវរសីល ឱ្យស្អាតបរិសុទ្ធ គ្មានការសៅហ្មង មិនបៀតបៀនដល់អ្នកដទៃ។',
    descEn: 'Flawless moral discipline and ethical integrity, establishing a blameless foundation for mental calm.',
    purposeKm: 'ធ្វើឱ្យចិត្តមិនក្តៅក្រហាយ ត្រៀមចូលកាន់សមាធិ។',
    purposeEn: 'Fosters non-remorse, preparing consciousness for concentration.',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'ចិត្តវិសុទ្ធិ (ភាពបរិសុទ្ធនៃចិត្ត)',
    titleEn: 'Purification of Mind (Citta-visuddhi)',
    pali: 'Citta-visuddhi',
    descKm: 'ការហ្វឹកហាត់ចិត្តឱ្យស្ងប់ស្ងាត់ចាកនីវរណៈ ៥ ដោយឧបចារសមាធិ ឬអប្បនាសមាធិ (រូបឈានទាំង ៤)។',
    descEn: 'Achieving access concentration or absorption (Jhānas), cleansing mind of the five hindrances.',
    purposeKm: 'ធ្វើឱ្យចិត្តនឹងន មានកម្លាំងមុតស្រួចសម្រាប់ចម្រើនបញ្ញា។',
    purposeEn: 'Equips the mind with stillness and power to investigate reality.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'ទិដ្ឋិវិសុទ្ធិ (ភាពបរិសុទ្ធនៃការយល់ឃើញ)',
    titleEn: 'Purification of View (Diṭṭhi-visuddhi)',
    pali: 'Diṭṭhi-visuddhi',
    descKm: 'ការញែកដឹងច្បាស់ថា ជីវិតនេះមានតែ «រូប» (រូបធាតុ) និង «នាម» (ចិត្ត ចេតសិក) ប៉ុណ្ណោះ គ្មានតួខ្លួនអញ ឬព្រលឹងអ្វីឡើយ។',
    descEn: 'Discerning mind (nāma) and matter (rūpa) as distinct impersonal phenomena devoid of a permanent self.',
    purposeKm: 'កម្ចាត់សក្កាយទិដ្ឋិ (ការយល់ថាមានខ្លួនអញ)។',
    purposeEn: 'Dismantles identity view and the belief in an unchanging soul.',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'កង្ខាវិតរណវិសុទ្ធិ (ភាពឆ្លងផុតសេចក្តីសង្ស័យ)',
    titleEn: 'Purification by Overcoming Doubt',
    pali: 'Kaṅkhāvitaraṇa-visuddhi',
    descKm: 'ការយល់ច្បាស់ពីបច្ច័យដែលតាក់តែងនាមនិងរូប តាមគោលបដិច្ចសមុប្បាទ និងកម្មផល ឆ្លងផុតសង្ស័យក្នុងអតីត បច្ចុប្បន្ន អនាគត។',
    descEn: 'Understanding the causal conditions sustaining mentality and materiality, extinguishing doubts across time.',
    purposeKm: 'កម្ចាត់វិចិកិច្ឆា (សេចក្តីសង្ស័យក្នុងធម៌)។',
    purposeEn: 'Uproots skeptical doubt regarding causality and past/future lives.',
  },
  {
    id: 5,
    num: '៥',
    titleKm: 'មគ្គាមគ្គញាណទស្សនវិសុទ្ធិ (ដឹងផ្លូវត្រូវនិងផ្លូវខុស)',
    titleEn: 'Purification by Knowing Path & Non-Path',
    pali: 'Maggāmaggañāṇadassana-visuddhi',
    descKm: 'ការឆ្លងផុតវិបស្សនូបកិលេសទាំង ១០ ដឹងច្បាស់ថាពន្លឺ ឬសេចក្តីសុខមិនមែនជាមគ្គទេ ការពិចារណាត្រៃលក្ខណ៍ទើបជាផ្លូវត្រូវ។',
    descEn: 'Discerning that mystical phenomena (aura, joy, bliss) are not liberation, but continuing insight is the true path.',
    purposeKm: 'មិនវង្វេងជាប់ក្នុងអារម្មណ៍ល្អិតៗនៃសមាធិ។',
    purposeEn: 'Prevents getting trapped in spiritual subtle corruptions.',
  },
  {
    id: 6,
    num: '៦',
    titleKm: 'បដិបទាញាណទស្សនវិសុទ្ធិ (ដឹងនូវដំណើរប្រតិបត្តិ)',
    titleEn: 'Purification by Knowledge of Practice',
    pali: 'Paṭipadāñāṇadassana-visuddhi',
    descKm: 'ការចម្រើនវិបស្សនាញាណទាំង ៩ ថ្នាក់ (ឧទយព្វយញាណ ដល់ អនុលោមញាណ) ឃើញត្រៃលក្ខណ៍យ៉ាងជ្រាលជ្រៅបំផុត។',
    descEn: 'Mastering the nine progressive insight knowledges, perceiving impermanence, suffering, and non-self intimately.',
    purposeKm: 'រៀបចំចិត្តឱ្យចាស់ទុំ ត្រៀមត្រាស់ដឹងលោកុត្តរធម៌។',
    purposeEn: 'Matures insight faculties to the threshold of transcendent breakthrough.',
  },
  {
    id: 7,
    num: '៧',
    titleKm: 'ញាណទស្សនវិសុទ្ធិ (ភាពបរិសុទ្ធនៃញាណទស្សនៈ)',
    titleEn: 'Purification by Knowledge and Vision',
    pali: 'Ñāṇadassana-visuddhi',
    descKm: 'ការសម្រេចលោកុត្តរមគ្គទាំង ៤ (សោតាបត្តិមគ្គ សកទាគាមិមគ្គ អនាគាមិមគ្គ និងអរហត្តមគ្គ) ឃើញព្រះនិព្វានជាអារម្មណ៍ផ្ទាល់។',
    descEn: 'The direct transcendent breakthrough of the Four Noble Paths, directly experiencing Nibbāna and uprooting taints.',
    purposeKm: 'សម្រេចព្រះនិព្វាន រំលត់ទុក្ខក្នុងវដ្តសង្សារទាំងស្រុង។',
    purposeEn: 'Attainment of supreme Nibbāna, ending all rebirth and suffering.',
  },
]
</script>
