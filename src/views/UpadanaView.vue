<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ១០០ — ឧបាទាន ៤ យ៉ាង', 'GATHA 100 — 4 CLINGINGS / ATTACHMENTS (UPĀDĀNA)') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ឧបាទាន ៤ យ៉ាង ៖ ចំណងតោងទាម ៤ ជាន់ក្នុងសង្សារវដ្ត & វិធីកាត់ផ្តាច់', 'The 4 Kinds of Clinging (Upādāna): 4 Chains of Samsara & Freedom') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ឧបាទាន ៤ យ៉ាង សំដៅលើការតោងទាម ចាប់ប្រកាន់យ៉ាងស្អិតរមួត និងការជាប់ជំពាក់យ៉ាងជ្រាលជ្រៅនៃចិត្ត ដែលជាកម្លាំងរុញច្រានដ៏សំខាន់ក្នុងខ្សែសង្វាក់បដិច្ចសមុប្បាទ (តណ្ហាបច្ចយា ឧបាទានំ — ព្រោះតណ្ហាជាបច្ច័យ ទើបកើតមានឧបាទាន)។ ពាក្យថា «ឧបាទាន» ប្រៀបដូចជាភ្លើងដែលតោងទាមនឹងអុស ឬប្រៀបដូចជាស្វាដែលជាប់ស្អិតនឹងជ័រអន្ទាក់ មិនអាចដកខ្លួនរួច។ នៅក្នុងចូឡសីហនាទសូត្រ (MN 11) ព្រះសម្មាសម្ពុទ្ធទ្រង់បានត្រាស់ថា សមណព្រាហ្មណ៍ក្រៅពុទ្ធសាសនា អាចបង្រៀនឱ្យលះបង់ឧបាទានបានត្រឹមតែ ៣ ប្រភេទប៉ុណ្ណោះ គឺមិនអាចបង្រៀនឱ្យលះ «អត្តវាទុបាទាន» (ការតោងទាមថាមានតួខ្លួន) បានឡើយ មានតែការត្រាស់ដឹងក្នុងព្រះពុទ្ធសាសនាទេ ទើបអាចផ្តាច់ឧបាទានទាំង ៤ បានស្អាតបរិសុទ្ធ។', 'Upādāna denotes the four forms of mental clinging, grasping, and intense possessiveness that propel the wheels of Dependent Origination (Taṇhā-paccayā Upādānaṃ: conditioned by craving, clinging arises). The term evokes fire clinging to firewood, or an unwary monkey stuck firmly to a resin trap. In the Cūḷasīhanāda Sutta (MN 11), the Buddha boldly proclaimed that other religious philosophies may manage to abandon three forms of clinging, but fail completely to uproot Attavādupādāna (the clinging to a doctrine of Self). Only the Tathāgata’s pristine Dhamma eradicates all four clingings down to their subterranean roots.') }}
    </p>

    <!-- Pali Gatha Box from Sangiti Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ចត្តារិមាណិ អាវុសោ ឧបាទានានិ។ កតមានិ ចត្តារិ? កាមុបាទានំ, ទិដ្ឋុបាទានំ, សីលព្វតុបាទានំ, អត្តវាទុបាទានំ។»', '"There are, friends, these four clingings. Which four? Clinging to sensuality, clinging to views, clinging to rules and vows, and clinging to a doctrine of self." — Dīgha Nikāya 33') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— សង្គីតិសូត្រ បាដិកវគ្គ ទីឃនិកាយ', '— Saṅgīti Sutta, Pāṭikavagga, Dīgha Nikāya') }}
      </p>
    </div>

    <!-- The 4 Upadanas Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>⛓️</span>
        <span>{{ t('ឧបាទានទាំង ៤ ប្រការពិស្តារ', 'The 4 Clingings Analyzed') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="u in upadanas"
          :key="u.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-rose-500/20 text-rose-700 dark:text-rose-300 flex items-center justify-center text-xs font-mono font-bold">
                  {{ u.num }}
                </span>
                <div>
                  <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">{{ t(u.titleKm, u.titleEn) }}</h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ u.pali }}</p>
                </div>
              </div>
              <span class="text-2xl">{{ u.icon }}</span>
            </div>

            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(u.descKm, u.descEn) }}
            </p>
          </div>

          <!-- Antidote -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
              <span class="font-bold text-emerald-700 dark:text-emerald-300 block mb-0.5">
                🗡️ {{ t('វិធីកាត់ផ្តាច់ ៖', 'Antidote & Solution:') }}
              </span>
              <span class="text-stone-600 dark:text-stone-400">{{ t(u.cureKm, u.cureEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Craving vs Clinging Section -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🔥</span>
        <span>{{ t('ភាពខុសគ្នារវាង «តណ្ហា» និង «ឧបាទាន»', 'Difference Between Craving (Taṇhā) & Clinging (Upādāna)') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រះអដ្ឋកថាចារ្យបានពន្យល់ថា ៖ «តណ្ហា» ដូចជាចោរលាតដៃចង់លួចទ្រព្យ (សេចក្តីស្រេកឃ្លានចង់បាន) ចំណែក «ឧបាទាន» ដូចជាចោរដែលក្តាប់ទ្រព្យនោះជាប់ក្នុងដៃណែនមិនព្រមលែង (ការតោងទាមយ៉ាងរឹងមាំ)។ តណ្ហានាំឱ្យស្វែងរក តែឧបាទានធ្វើឱ្យកើតក្តីប្រចណ្ឌ ក្តីហួងហែង និងការឈឺចាប់ពេលបាត់បង់។', 'Commentators explain: Taṇhā is like a thief extending a hand to grasp a coveted treasure (the burning itch of desire); Upādāna is like the thief clenching the stolen treasure tightly against their chest, refusing to let go (ferocious attachment). Craving propels the search, but clinging produces defensive possessiveness, fear, and agonized suffering upon loss.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const upadanas = [
  {
    id: 1,
    num: '១',
    titleKm: 'កាមុបាទាន (ការតោងទាមកាម)',
    titleEn: 'Kāmupādāna (Clinging to Sensuality)',
    pali: 'Kāmupādāna — ជាប់ជំពាក់ក្នុងកាមគុណ ៥',
    icon: '🌹',
    descKm: 'ការតោងទាម ស្រឡាញ់ ងប់ងុល និងជាប់ជំពាក់យ៉ាងស្អិតក្នុងរូប សំឡេង ក្លិន រស និងសម្ផស្សកាយ រហូតដល់មិនអាចដកចិត្តរួច។',
    descEn: 'Relentless grasping and craving attachment to sensual pleasures, appearances, fragrances, flavors, and bodily contacts.',
    cureKm: 'ពិចារណាអសុភកម្មដ្ឋាន និងទោសនៃកាម ដែលមានសេចក្តីសុខតិច តែមានទុក្ខច្រើន។',
    cureEn: 'Contemplate bodily foulness (Asubha) and the severe drawbacks of sensual desires.',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'ទិដ្ឋុបាទាន (ការតោងទាមគំនិតយល់ឃើញ)',
    titleEn: 'Diṭṭhupādāna (Clinging to Views)',
    pali: 'Diṭṭhupādāna — ប្រកាន់គំនិតទស្សនៈ',
    icon: '🧭',
    descKm: 'ការតោងទាមប្រកាន់គំនិត ជំនឿ ទស្សនវិជ្ជា ឬទ្រឹស្តីរបស់ខ្លួនថា «ត្រូវតែឯង អ្នកដទៃខុសទាំងអស់» ដែលជាហេតុនាំឱ្យមានជម្លោះនិងសង្គ្រាម។',
    descEn: 'Dogmatic attachment to doctrines, ideologies, and opinions: "Only this is true; everything else is false!"',
    cureKm: 'ចម្រើនយោនិសោមនសិការ បើកចិត្តស្តាប់ការពិតតាមធម្មជាតិ និងលះបង់ភាពរឹងរូស។',
    cureEn: 'Cultivate wise reflection, intellectual humility, and non-dogmatic open inquiry.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'សីលព្វតុបាទាន (ការតោងទាមក្បួនវ័ត)',
    titleEn: 'Sīlabbatupādāna (Clinging to Rites & Rituals)',
    pali: 'Sīlabbatupādāna — ប្រកាន់ក្បួនវ័តខុសផ្លូវ',
    icon: '🕯️',
    descKm: 'ការតោងទាមប្រកាន់ពិធីកម្ម អាគមគាថា យ័ន្ត ឬការបួសធ្វើកាយវិការដូចសត្វគោ ដូចឆ្កែ ដោយយល់ច្រឡំថាអាចនាំឱ្យបរិសុទ្ធផុតទុក្ខ។',
    descEn: 'Clinging to superstitious rituals, charms, occult spells, or external ascetic penances believing they bring liberation.',
    cureKm: 'យល់ច្បាស់ពីច្បាប់កម្មផល និងសច្ចធម៌ ថាការរំលត់ទុក្ខសម្រេចដោយការលាងជម្រះចិត្ត មិនមែនដោយពិធីខាងក្រៅឡើយ។',
    cureEn: 'Understand causality clearly: liberation is achieved by purifying the mind, not outward ceremony.',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'អត្តវាទុបាទាន (ការតោងទាមតួខ្លួនអញ)',
    titleEn: 'Attavādupādāna (Clinging to Self-Illusion)',
    pali: 'Attavādupādāna — កំពូលឧបាទាន',
    icon: '👤',
    descKm: 'ការតោងទាមប្រកាន់យ៉ាងរឹងមាំថាមាន «ខ្លួនអញ ជារបស់អញ» ក្នុងខន្ធទាំង ៥។ នេះជាឧបាទានដ៏ធំបំផុត និងពិបាកផ្តាច់បំផុតក្នុងលោក។',
    descEn: 'The supreme delusion of grasping the Five Aggregates as an enduring, autonomous "I", "Me", or "Mine".',
    cureKm: 'ចម្រើនវិបស្សនាបញ្ញា ឃើញច្បាស់នូវលក្ខណៈ «អនត្តា» ថាគ្មានអ្វីជាខ្លួនយើងឡើយ។',
    cureEn: 'Cultivate Vipassanā insight into the truth of Anattā (Non-Self).',
  },
]
</script>
