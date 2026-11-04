<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៤៧ — គ្រួសារធម៌ & ទិស ៦', 'GATHA 47 — FAMILY DHAMMA & THE SIX DIRECTIONS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('កិច្ចវត្តគ្រួសារធម៌ & ទិសទាំង ៦', 'Family Dhamma & The Six Directions of Society') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ព្រះពុទ្ធសាសនា មិនមែនបង្រៀនឱ្យមនុស្សលោកបោះបង់គ្រួសារ និងភារកិច្ចក្នុងសង្គមឡើយ។ នៅក្នុង «សិង្គាលកសូត្រ» (ទីឃនិកាយ) ព្រះសម្មាសម្ពុទ្ធបានសម្ដែងអំពីក្បួនរស់នៅរបស់គ្រហស្ថ តាមរយៈការប្រៀបធៀបមនុស្សជុំវិញខ្លួនទៅនឹង «ទិសទាំង ៦» ដែលបុគ្គលម្នាក់ៗត្រូវគោរព និងបំពេញកាតព្វកិច្ចឱ្យបានត្រឹមត្រូវ ដើម្បីសេចក្ដីសុខសាន្តនៃគ្រួសារ និងសង្គមជាតិទាំងមូល។', 'Buddhism does not advocate abandoning family or social duties. In the famous Sigālovāda Sutta (Dīgha Nikāya), often hailed as the Layperson\'s Code of Discipline, the Buddha illuminated how to build happy homes and harmonious communities by venerating the Six Directions of human relationships with mutual loyalty and respect.') }}
    </p>

    <!-- The 6 Directions Interactive Grid -->
    <div class="mt-8">
      <p class="chapter-label">{{ t('ទិសទាំង ៦ ក្នុងសង្គមមនុស្ស', 'THE SIX SACRED DIRECTIONS') }}</p>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 mt-3">
        <button
          v-for="(d, idx) in directions"
          :key="d.id"
          type="button"
          @click="selectedDir = idx"
          class="p-3 rounded-xl border text-center transition-all cursor-pointer"
          :style="selectedDir === idx
            ? { background: 'var(--accent)', color: 'var(--accent-ink, #ffffff)', borderColor: 'var(--accent)', transform: 'translateY(-2px)' }
            : { background: 'var(--bg-card-2)', color: 'var(--ink)', borderColor: 'var(--border)' }"
        >
          <div class="text-xl sm:text-2xl mb-1">{{ d.icon }}</div>
          <p class="text-[10px] font-mono font-bold uppercase tracking-wider opacity-80">{{ d.dirKm }}</p>
          <p class="text-xs sm:text-sm font-bold truncate mt-0.5">{{ t(d.targetKm, d.targetEn) }}</p>
        </button>
      </div>
    </div>

    <!-- Active Direction Details Card -->
    <div class="card-paper p-6 md:p-8 mt-6 border-l-4" :style="{ borderLeftColor: 'var(--accent)' }">
      <div class="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-full uppercase" :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)' }">
            {{ currentDirection.dirKm }} · {{ currentDirection.pali }}
          </span>
          <h3 class="font-display text-2xl font-bold mt-2" :style="{ color: 'var(--ink)' }">
            {{ t(currentDirection.targetKm, currentDirection.targetEn) }}
          </h3>
          <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
            {{ t(currentDirection.descKm, currentDirection.descEn) }}
          </p>
        </div>
        <div class="text-4xl">
          {{ currentDirection.icon }}
        </div>
      </div>

      <!-- Mutual Duties Two-column Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <!-- Self to Other -->
        <div class="p-4 sm:p-5 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2 mb-3">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
            <h4 class="font-bold text-xs sm:text-sm uppercase tracking-wider" :style="{ color: 'var(--ink)' }">
              {{ t(`កាតព្វកិច្ចយើងចំពោះ${currentDirection.shortName} (៥ ប្រការ)`, `Your 5 Duties Towards ${currentDirection.targetEn}`) }}
            </h4>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm" :style="{ color: 'var(--ink-soft)' }">
            <li v-for="(duty, i) in currentDirection.dutiesTo" :key="i" class="flex items-start gap-2">
              <span class="text-amber-500 font-bold shrink-0">{{ i + 1 }}.</span>
              <span>{{ t(duty.km, duty.en) }}</span>
            </li>
          </ul>
        </div>

        <!-- Other to Self -->
        <div class="p-4 sm:p-5 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2 mb-3">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <h4 class="font-bold text-xs sm:text-sm uppercase tracking-wider" :style="{ color: 'var(--ink)' }">
              {{ t(`ការឆ្លើយតបរបស់${currentDirection.shortName}មកវិញ (៥ ប្រការ)`, `${currentDirection.targetEn}'s 5 Reciprocal Duties`) }}
            </h4>
          </div>
          <ul class="space-y-2 text-xs sm:text-sm" :style="{ color: 'var(--ink-soft)' }">
            <li v-for="(duty, i) in currentDirection.dutiesFrom" :key="i" class="flex items-start gap-2">
              <span class="text-emerald-500 font-bold shrink-0">{{ i + 1 }}.</span>
              <span>{{ t(duty.km, duty.en) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 4 Samajivi Dhamma for Happy Marriage -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('ជីវិតអាពាហ៍ពិពាហ៍', 'MARITAL HARMONY') }}</p>
      <h3 class="font-display text-xl mt-1.5" :style="{ color: 'var(--ink)' }">
        {{ t('សមជីវីធម៌ ៤ ៖ គ្រឹះនៃសុភមង្គលប្តីប្រពន្ធ', 'Samajīvī Dhamma 4 : Virtues for Lasting Love') }}
      </h3>
      <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ព្រះសម្មាសម្ពុទ្ធសម្ដែងថា ប្តីប្រពន្ធដែលរស់នៅជាមួយគ្នាបានសុខ និងបានជួបគ្នាក្នុងសុគតិភព ត្រូវមានធម៌ ៤ យ៉ាងនេះស្មើគ្នា ៖', 'To live harmoniously in this life and reunite in future auspicious realms, a couple must share these 4 virtues equally:') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-5">
        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="text-amber-500 font-bold">១.</span>
            <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">{{ t('សមសទ្ធា', 'Sama-saddhā') }}</h4>
          </div>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('មានជំនឿ គោលការណ៍ជីវិត និងទស្សនវិស័យស្មើគ្នា ចូលចិត្តធ្វើបុណ្យ និងគោរពព្រះធម៌ដូចគ្នា។', 'Shared faith, spiritual values, and common life vision.') }}
          </p>
        </div>

        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="text-emerald-500 font-bold">២.</span>
            <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">{{ t('សមសីលា', 'Sama-sīla') }}</h4>
          </div>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('មានសីលធម៌ សុជីវធម៌ ស្មោះត្រង់ និងមិនប្រព្រឹត្តអំពើក្បត់ចិត្ត ឬបំផ្លាញកិត្តិយសគ្នា។', 'Equal moral integrity, mutual loyalty, and upright conduct.') }}
          </p>
        </div>

        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="text-sky-500 font-bold">៣.</span>
            <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">{{ t('សមចាគា', 'Sama-cāgā') }}</h4>
          </div>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('មានចិត្តទូលាយ ចេះជួយសង្គ្រោះអ្នកដទៃ មិនកំណាញ់ស្វិតស្វាញ និងចេះចែករំលែក។', 'Equal generosity, open-heartedness, and willingness to share.') }}
          </p>
        </div>

        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="text-purple-500 font-bold">៤.</span>
            <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">{{ t('សមបញ្ញា', 'Sama-paññā') }}</h4>
          </div>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('មានប្រាជ្ញា ចេះយោគយល់ និយាយគ្នាដោយហេតុផល និងមិនយកកំហឹងមកដោះស្រាយបញ្ហា។', 'Equal wisdom, empathy, and ability to communicate with reason.') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Wealth Management: Dighajanu Sutta -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('ការស្វែងរក & គ្រប់គ្រងទ្រព្យ', 'FINANCIAL MASTERY IN BUDDHISM') }}</p>
      <h3 class="font-display text-xl mt-1.5" :style="{ color: 'var(--ink)' }">
        {{ t('ទិឃជាណុសូត្រ ៖ ក្បួនសេដ្ឋីតាមគន្លងព្រះធម៌', 'Dīghajāṇu Sutta : 4 Pillars of Secular Wealth') }}
      </h3>
      <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ព្រះពុទ្ធមិនដែលហាមឃាត់គ្រហស្ថមិនឱ្យក្លាយជាអ្នកមានឡើយ តែទ្រង់បង្រៀនក្បួន ៤ ប្រការដើម្បីបង្កើតទ្រព្យសុចរិត ៖', 'The Buddha never forbade laypeople from acquiring wealth; He taught these four essential principles for righteous prosperity:') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-5">
        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <span class="text-xs font-mono font-bold text-amber-500 uppercase">ក្បួនទី ១</span>
          <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t('ឧដ្ឋាតាសម្បទា', 'Uṭṭhāna-sampadā') }}</h4>
          <p class="text-xs mt-2 leading-relaxed text-stone-500">
            {{ t('ភាពឧស្សាហ៍ព្យាយាម រហ័សរហួន និងជំនាញច្បាស់លាស់ក្នុងមុខរបរ។', 'Diligence, energy, and master skill in one’s trade or profession.') }}
          </p>
        </div>

        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <span class="text-xs font-mono font-bold text-emerald-500 uppercase">ក្បួនទី ២</span>
          <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t('អារក្ខសម្បទា', 'Ārakkha-sampadā') }}</h4>
          <p class="text-xs mt-2 leading-relaxed text-stone-500">
            {{ t('ការចេះរក្សាការពារទ្រព្យសម្បត្តិ មិនឱ្យរលាយដោយភ្លើង ទឹក ចោរ ឬមនុស្សខិលខូច។', 'Careful protection of earnings against loss, fire, and fraud.') }}
          </p>
        </div>

        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <span class="text-xs font-mono font-bold text-sky-500 uppercase">ក្បួនទី ៣</span>
          <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t('កល្យាណមិត្តតា', 'Kalyāṇamittatā') }}</h4>
          <p class="text-xs mt-2 leading-relaxed text-stone-500">
            {{ t('ការសេពគប់មិត្តល្អ មិត្តនាំទៅរកចំណេះដឹង និងជៀសវាងមិត្តបាបនាំឱ្យខាតបង់។', 'Association with virtuous mentors who encourage integrity.') }}
          </p>
        </div>

        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <span class="text-xs font-mono font-bold text-purple-500 uppercase">ក្បួនទី ៤</span>
          <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t('សមជីវិតា', 'Samajīvitā') }}</h4>
          <p class="text-xs mt-2 leading-relaxed text-stone-500">
            {{ t('ការចាត់ចែងចំណូល និងចំណាយឱ្យមានតុល្យភាព មិនខ្ជះខ្ជាយ និងមិនកំណាញ់ពេក។', 'Balanced living — spending wisely within one’s actual income.') }}
          </p>
        </div>
      </div>
    </div>

    <!-- 5 Forbidden Trades (Vaṇijjā 5) -->
    <div class="card-paper p-6 md:p-8 mt-8 border-l-4" :style="{ borderLeftColor: '#ef4444' }">
      <div class="flex items-center gap-2">
        <span class="text-rose-500 text-lg">⚠️</span>
        <p class="chapter-label text-rose-500 m-0">{{ t('សម្មាអាជីវៈ', 'ETHICAL LIVELIHOOD') }}</p>
      </div>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">
        {{ t('វណិជ្ជ ៥ ៖ មុខរបរ ៥ យ៉ាងដែលឧបាសក-ឧបាសិកាមិនត្រូវប្រព្រឹត្ត', 'The 5 Forbidden Trades for Lay Practitioners') }}
      </h3>
      <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ព្រះសម្មាសម្ពុទ្ធហាមឃាត់ពុទ្ធសាសនិកមិនឱ្យរកស៊ីមុខរបរទាំង ៥ នេះ ព្រោះវាជាបាបកម្មធ្ងន់ធ្ងរ និងបំផ្លាញសេចក្តីសុខសត្វលោក ៖', 'These five businesses cause catastrophic suffering and are strictly forbidden for Buddhist lay practitioners:') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mt-4">
        <div v-for="(v, idx) in vanijja" :key="idx" class="p-3.5 rounded-xl border bg-rose-500/5 border-rose-500/20 text-center">
          <span class="text-2xl">{{ v.icon }}</span>
          <h4 class="font-bold text-xs sm:text-sm mt-1.5 text-rose-600 dark:text-rose-400">{{ t(v.km, v.en) }}</h4>
          <p class="text-[11px] text-stone-500 mt-1">{{ t(v.descKm, v.descEn) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const selectedDir = ref(0)
const currentDirection = computed(() => directions[selectedDir.value])

const vanijja = [
  { icon: '⚔️', km: '១. ជួញសព្វាវុធ', en: '1. Trade in Weapons', descKm: 'លក់អាវុធប្រល័យជីវិត កាំភ្លើង គ្រាប់មីន ធ្នូ ឬដាវ។', descEn: 'Manufacturing or trading in instruments of killing.' },
  { icon: '⛓️', km: '២. ជួញមនុស្ស', en: '2. Human Trafficking', descKm: 'ជួញដូរទាសករ ជួញដូរកម្លាំងពលកម្ម ឬពេស្យាចារ។', descEn: 'Slave trade, indentured labor, or prostitution.' },
  { icon: '🥩', km: '៣. ជួញសត្វសម្រាប់សម្លាប់', en: '3. Trade in Animals for Slaughter', descKm: 'ចិញ្ចឹម ឬជួញដូរសត្វដើម្បីបញ្ជូនទៅរោងពិឃាត។', descEn: 'Breeding or trading animals destined for slaughter.' },
  { icon: '🍷', km: '៤. ជួញគ្រឿងស្រវឹង', en: '4. Trade in Intoxicants', descKm: 'ផលិត ឬលក់ស្រា គ្រឿងញៀន ដែលបំផ្លាញសតិមនុស្ស។', descEn: 'Manufacturing or selling alcohol and intoxicants.' },
  { icon: '☠️', km: '៥. ជួញថ្នាំពុល', en: '5. Trade in Poisons', descKm: 'ផលិត ឬលក់ថ្នាំបំពុល ថ្នាំគីមីសម្លាប់មនុស្ស និងសត្វ។', descEn: 'Trading in toxic substances designed to kill.' }
]

const directions = [
  {
    id: 'east',
    dirKm: 'ទិសខាងកើត (បុរត្ថិមទិស)',
    pali: 'MĀTĀ-PITU',
    targetKm: 'មាតាបិតា (ឪពុកម្តាយ)',
    targetEn: 'Parents',
    shortName: 'មាតាបិតា',
    icon: '👨‍👩‍👧',
    descKm: 'ប្រៀបដូចព្រះព្រហ្មក្នុងផ្ទះ ជាអ្នកផ្តល់កំណើត និងចិញ្ចឹមបីបាច់ដំបូងបំផុត។',
    descEn: 'Represented by the East: the rising sun that gives life and warmth.',
    dutiesTo: [
      { km: 'ចិញ្ចឹមបីបាច់ថែរក្សាលោក ឆ្លើយតបនឹងគុណដែលលោកបានចិញ្ចឹមយើង។', en: 'Supporting and caring for them in return for their nurture.' },
      { km: 'ជួយធ្វើការងារ និងកិច្ចការធុរៈផ្សេងៗជំនួសលោក។', en: 'Performing tasks and managing household affairs on their behalf.' },
      { km: 'រក្សាវង្សត្រកូល និងកិត្តិយសគ្រួសារឱ្យបានល្អផូរផង់។', en: 'Preserving the family lineage and honorable reputation.' },
      { km: 'ប្រតិបត្តិខ្លួនឱ្យសមជាអ្នកទទួលកេរមរតកដ៏មានតម្លៃ។', en: 'Conducting oneself worthily to inherit family heritage.' },
      { km: 'ពេលលោកចែកឋានទៅ ធ្វើបុណ្យឧទ្ទិសកុសលជូនលោកជានិច្ច។', en: 'Dedicate meritorious deeds to them after their passing.' }
    ],
    dutiesFrom: [
      { km: 'ហាមឃាត់ និងទូន្មានកូនមិនឱ្យប្រព្រឹត្តអំពើអាក្រក់ ឬបាបកម្ម។', en: 'Restraining children from unwholesome and harmful actions.' },
      { km: 'ដាស់តឿន និងណែនាំកូនឱ្យប្រតិបត្តិស្ថិតក្នុងអំពើល្អ និងកុសល។', en: 'Guiding them towards wholesome habits and noble virtues.' },
      { km: 'ទំនុកបម្រុងឱ្យកូនបានរៀនសូត្រវិជ្ជាជីវៈ និងចំណេះដឹង។', en: 'Educating and training them in practical skills and wisdom.' },
      { km: 'ជួយរៀបចំគូស្រករដែលសមរម្យ និងមានសីលធម៌ល្អ។', en: 'Arranging a suitable, ethical marriage partner at the right time.' },
      { km: 'ប្រគល់ទ្រព្យសម្បត្តិ ឬកេរមរតកឱ្យក្នុងកាលវេលាដ៏សមគួរ។', en: 'Handing over inheritance in due and appropriate season.' }
    ]
  },
  {
    id: 'south',
    dirKm: 'ទិសខាងត្បូង (ទក្ខិណទិស)',
    pali: 'ĀCARIYA',
    targetKm: 'គ្រូអាចារ្យ',
    targetEn: 'Teachers & Mentors',
    shortName: 'គ្រូ',
    icon: '📚',
    descKm: 'អ្នកផ្តល់ពន្លឺចំណេះដឹង និងបណ្តុះប្រាជ្ញាស្មារតី។',
    descEn: 'Represented by the South: those worthy of offerings and reverence.',
    dutiesTo: [
      { km: 'ក្រោកទទួល និងសម្ដែងការគោរពគំនាប់ដោយកាយវិការសមរម្យ។', en: 'Rising to greet them with respectful bodily demeanor.' },
      { km: 'ចូលទៅបម្រើ និងជួយកិច្ចការងារផ្សេងៗ។', en: 'Assisting and serving their needs with sincere humility.' },
      { km: 'យកចិត្តទុកដាក់ស្តាប់ និងរៀនសូត្រដោយគោរព។', en: 'Listening attentively and absorbing their instructions.' },
      { km: 'ជួយផ្គត់ផ្គង់ឧបត្ថម្ភដល់លោកតាមលទ្ធភាព។', en: 'Supporting and providing for their material welfare.' },
      { km: 'រៀនសូត្រក្បួនវិជ្ជាជីវៈដោយការគោរព និងស្មោះត្រង់។', en: 'Mastering the skills and knowledge taught with wholehearted diligence.' }
    ],
    dutiesFrom: [
      { km: 'បង្ហាត់បង្រៀនក្បួនវិជ្ជាឱ្យចេះច្បាស់លាស់ ឥតលាក់លៀម។', en: 'Teaching comprehensive knowledge thoroughly without withholding.' },
      { km: 'បង្ហាត់ឱ្យចេះក្បួនរបៀបរៀបរយ និងសុជីវធម៌ក្នុងការរស់នៅ។', en: 'Instilling good discipline, etiquette, and social character.' },
      { km: 'បង្រៀនឱ្យចេះក្បួនការពារខ្លួនក្នុងគ្រប់វិជ្ជាជីវៈ។', en: 'Equipping students to protect themselves in life and career.' },
      { km: 'សរសើរលើកទឹកចិត្ត និងណែនាំដល់មិត្តភក្តិ ឬអ្នកដទៃ។', en: 'Speaking well of their competence to colleagues and society.' },
      { km: 'ការពារសុវត្ថិភាព និងអនាគតរបស់សិស្សក្នុងគ្រប់ទិសទី។', en: 'Ensuring their safety and success in every sphere.' }
    ]
  },
  {
    id: 'west',
    dirKm: 'ទិសខាងលិច (បច្ឆិមទិស)',
    pali: 'DĀRA',
    targetKm: 'ភរិយា-ស្វាមី (ប្តីប្រពន្ធ)',
    targetEn: 'Spouse & Partner',
    shortName: 'ភរិយា/ស្វាមី',
    icon: '💍',
    descKm: 'ដៃគូជីវិតដែលរួមសុខទុក្ខ និងសាងអនាគតជាមួយគ្នា។',
    descEn: 'Represented by the West: mutual harmony and sacred commitment.',
    dutiesTo: [
      { km: 'លើកតម្កើង និងគោរពឱ្យតម្លៃក្នុងនាមជាភរិយា។', en: 'Honoring and treating one’s wife with respect and courtesy.' },
      { km: 'មិនមើលងាយ ឬប្រមាថដល់រូបនាងឡើយ។', en: 'Never looking down upon or speaking contemptuously to her.' },
      { km: 'ស្មោះត្រង់ មិនប្រព្រឹត្តក្បត់ចិត្ត ឬសេពកាមនឹងស្រីដទៃ។', en: 'Remaining faithful and never engaging in infidelity.' },
      { km: 'ប្រគល់សិទ្ធិអំណាចក្នុងការចាត់ចែងផ្ទះសម្បែង។', en: 'Entrusting household governance and finances to her care.' },
      { km: 'ផ្តល់គ្រឿងអលង្ការ សម្លៀកបំពាក់ និងអំណោយតាមសមគួរ។', en: 'Providing ornaments, attire, and gifts on fitting occasions.' }
    ],
    dutiesFrom: [
      { km: 'ចាត់ចែងការងារក្នុងផ្ទះសម្បែងឱ្យមានរបៀបរៀបរយ។', en: 'Organizing and managing household chores skillfully.' },
      { km: 'រាក់ទាក់ និងសង្គ្រោះញាតិទាំងសងខាងដោយស្មើភាព។', en: 'Welcoming and treating relatives of both sides with equal warmth.' },
      { km: 'ស្មោះត្រង់ចំពោះស្វាមី មិនប្រព្រឹត្តក្បត់ចិត្ត។', en: 'Being faithful and fiercely loyal to her husband.' },
      { km: 'ចេះថែរក្សាការពារទ្រព្យសម្បត្តិដែលស្វាមីរកបាន។', en: 'Safeguarding and preserving the family’s wealth and earnings.' },
      { km: 'ឧស្សាហ៍ព្យាយាម មិនខ្ជិលច្រអូសក្នុងកិច្ចការគ្រួសារ។', en: 'Energetic, diligent, and active in all household duties.' }
    ]
  },
  {
    id: 'north',
    dirKm: 'ទិសខាងជើង (ឧត្តរទិស)',
    pali: 'MITTA',
    targetKm: 'មិត្តសម្លាញ់ & សហការី',
    targetEn: 'Friends & Associates',
    shortName: 'មិត្ត',
    icon: '🤝',
    descKm: 'អ្នកជួយដាស់តឿន និងឈរជាមួយគ្នាក្នុងគ្រាអាសន្ន។',
    descEn: 'Represented by the North: overcome perils together with mutual aid.',
    dutiesTo: [
      { km: 'ចេះចែករំលែក និងជួយឧបត្ថម្ភដល់មិត្ត (ទាន)។', en: 'Sharing possessions and offering generous help.' },
      { km: 'និយាយពាក្យពីរោះ ផ្អែមល្ហែម និងលើកទឹកចិត្ត (បិយវាចា)។', en: 'Speaking with gentle, kind, and encouraging words.' },
      { km: 'ធ្វើអំពើដែលជាប្រយោជន៍ដល់មិត្ត (អត្ថចរិយា)។', en: 'Acting for their true welfare and benefit.' },
      { km: 'ដាក់ខ្លួនស្មើគ្នា មិនអួតអាងលើមិត្ត (សមានត្តតា)។', en: 'Treating them as equals with humility and respect.' },
      { km: 'មានចិត្តស្មោះត្រង់ មិនកុហកបោកប្រាស់។', en: 'Being honest, dependable, and true in all situations.' }
    ],
    dutiesFrom: [
      { km: 'ជួយការពារមិត្តក្នុងគ្រាដែលមិត្តធ្វេសប្រហែស ឬស្រវឹង។', en: 'Protecting the friend when they are heedless or vulnerable.' },
      { km: 'ជួយការពារទ្រព្យសម្បត្តិរបស់មិត្តមិនឱ្យបាត់បង់។', en: 'Safeguarding their property and belongings when in danger.' },
      { km: 'ជាទីពឹងពាក់ និងជម្រកកក់ក្តៅក្នុងគ្រាមានភ័យអាសន្ន។', en: 'Being a reliable sanctuary and refuge in moments of crisis.' },
      { km: 'មិនបោះបង់មិត្តចោលក្នុងគ្រាក្រីក្រ ឬមានទុក្ខលំបាក។', en: 'Standing by them faithfully during hardship and poverty.' },
      { km: 'រាប់អាន និងផ្តល់កិត្តិយសដល់កូនចៅញាតិមិត្តរបស់មិត្ត។', en: 'Showing honor and kindness to their descendants and family.' }
    ]
  },
  {
    id: 'nadir',
    dirKm: 'ទិសខាងក្រោម (ហេដ្ឋិមទិស)',
    pali: 'DĀSA-KAMMAKARA',
    targetKm: 'កូនឈ្នួល / កម្មករ / បុគ្គលិក',
    targetEn: 'Workers & Employees',
    shortName: 'បុគ្គលិក',
    icon: '🛠️',
    descKm: 'អ្នករួមចំណែកកសាងការងារ និងអាជីវកម្មឱ្យរីកចម្រើន។',
    descEn: 'Represented by the Nadir: the solid ground supporting social welfare.',
    dutiesTo: [
      { km: 'ចាត់ចែងការងារឱ្យសមស្របតាមកម្លាំង និងសមត្ថភាព។', en: 'Assigning work tailored appropriately to their strength.' },
      { km: 'ផ្តល់ប្រាក់ខែ អាហារ និងអត្ថប្រយោជន៍ឱ្យសមរម្យ។', en: 'Providing just wages, nourishing food, and fair benefits.' },
      { km: 'មើលថែ និងជួយព្យាបាលពេលមានជំងឺឈឺស្កាត់។', en: 'Caring for them attentively in times of illness.' },
      { km: 'ចែករំលែកចំណីអាហារ ឬរង្វាន់ពិសេសពេលមានឱកាស។', en: 'Sharing delicious food, bonuses, and special rewards.' },
      { km: 'ផ្តល់ពេលវេលាសម្រាក និងថ្ងៃឈប់សម្រាកសមរម្យ។', en: 'Granting adequate rest hours and reasonable leave.' }
    ],
    dutiesFrom: [
      { km: 'ក្រោកមកបំពេញការងារមុនចៅហ្វាយនាយ។', en: 'Arriving for duty punctually before the employer.' },
      { km: 'ឈប់សម្រាកក្រោយចៅហ្វាយនាយ (ពិនិត្យការងារឱ្យស្រេច)។', en: 'Finishing duties responsibly before taking rest.' },
      { km: 'កាន់យកតែអ្វីដែលចៅហ្វាយប្រគល់ឱ្យ (មិនលួចឆក់)។', en: 'Taking strictly what is given, upholding absolute honesty.' },
      { km: 'បំពេញការងារដោយផ្ចិតផ្ចង់ និងមានគុណភាពខ្ពស់។', en: 'Performing work with diligence, craft, and excellence.' },
      { km: 'នាំយកកេរ្តិ៍ឈ្មោះល្អរបស់ចៅហ្វាយទៅផ្សាយសរសើរ។', en: 'Speaking well of the employer’s good qualities and praise.' }
    ]
  },
  {
    id: 'zenith',
    dirKm: 'ទិសខាងលើ (ឧបរិមទិស)',
    pali: 'SAMAṆA-BRĀHMAṆA',
    targetKm: 'សមណព្រាហ្មណ៍ (ព្រះសង្ឃ)',
    targetEn: 'Monastics & Spiritual Guides',
    shortName: 'ព្រះសង្ឃ',
    icon: '☸️',
    descKm: 'អ្នកនាំផ្លូវចិត្ត ដឹកនាំសត្វលោកឱ្យស្គាល់បុណ្យបាប និងរួចទុក្ខ។',
    descEn: 'Represented by the Zenith: spiritual beacons illuminating the upward path.',
    dutiesTo: [
      { km: 'ប្រព្រឹត្តចំពោះលោកដោយមេត្តាកាយកម្ម (កាយវិការគោរព)។', en: 'Approaching them with loving-kindness in deeds.' },
      { km: 'ប្រព្រឹត្តចំពោះលោកដោយមេត្តាវចីកម្ម (ពាក្យសម្តីសមរម្យ)។', en: 'Speaking to them with reverent, respectful words.' },
      { km: 'ប្រព្រឹត្តចំពោះលោកដោយមេត្តាមនោកម្ម (ចិត្តជ្រះថ្លា)។', en: 'Holding pure thoughts of loving-kindness and veneration.' },
      { km: 'បើកទ្វារផ្ទះស្វាគមន៍លោកដោយរីករាយ។', en: 'Keeping household doors open and welcoming to monastics.' },
      { km: 'ផ្គត់ផ្គង់បច្ច័យ ៤ (ចង្ហាន់ ចីវរ ទីសេនាសនៈ ថ្នាំពេទ្យ)។', en: 'Supplying the 4 requisites: food, robes, lodging, medicine.' }
    ],
    dutiesFrom: [
      { km: 'ហាមឃាត់ និងដាស់តឿនទាយកមិនឱ្យប្រព្រឹត្តអំពើបាប។', en: 'Preventing and warning laypeople away from unwholesome deeds.' },
      { km: 'ដឹកនាំឱ្យតម្កល់នៅក្នុងអំពើកុសល និងសីលធម៌។', en: 'Establishing them firmly in wholesome deeds and virtue.' },
      { km: 'មានចិត្តមេត្តាប្រាថ្នាល្អចំពោះទាយកជានិច្ច។', en: 'Cultivating pure benevolence and goodwill toward them.' },
      { km: 'សម្ដែងធម៌ដែលទាយកមិនធ្លាប់បានឮពីមុនមក។', en: 'Teaching them sublime Dhamma they have never heard before.' },
      { km: 'បំភ្លឺធម៌ដែលធ្លាប់ឮឱ្យកាន់តែជ្រះស្រឡះ និងចង្អុលផ្លូវទៅកាន់សួគ៌។', en: 'Clarifying doubts and pointing the true path to heaven and Nibbāna.' }
    ]
  }
]
</script>
