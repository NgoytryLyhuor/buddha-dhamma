<template>
  <div class="fade-up">
    <!-- Header -->
    <header class="text-center max-w-2xl mx-auto">
      <p class="chapter-label">{{ t('វិសុទ្ធិមគ្គ • ក្បួនដុសខាត់កិលេស', 'Visuddhimagga • Ascetic Purification') }}</p>
      <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
        {{ t('ធុតង្គ ១៣ ប្រការ ជាក់ស្តែង', 'The 13 Ascetic Dhutaṅga Practices') }}
      </h2>
      <div class="ornament mt-4">&#9784;</div>
      <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
        {{ t('«ធុតង្គ» (ធុត = កម្ចាត់/រលាស់ចោល + អង្គ = គុណធម៌) គឺជាក្បួនបដិបត្តិដុសខាត់កម្ចាត់កិលេស ភាពលោភលន់ និងការជាប់ជំពាក់ក្នុងផាសុកភាពខាងសាច់ឈាម ដែលព្រះអរហន្តខ្សែព្រៃតែងសមាទានដើម្បីឈានទៅដល់ការត្រាស់ដឹង។', 'Dhutaṅga means practices that shake off and scour away defilements of craving, luxury, and indolence. Explore the 13 classical ascetic rules recorded in the Visuddhimagga.') }}
      </p>

      <!-- Group Filter Tabs -->
      <div class="flex items-center gap-1.5 sm:gap-2 mt-6 flex-wrap justify-center">
        <button
          v-for="grp in groups"
          :key="grp.id"
          @click="activeGroup = grp.id"
          class="lang-pick px-3.5 py-1.5 text-xs font-semibold"
          :class="activeGroup === grp.id ? 'on' : ''"
        >
          <span>{{ grp.icon }}</span>
          <span>{{ t(grp.km, grp.en) }}</span>
          <span class="text-[10px] opacity-75 ml-0.5">({{ getGroupCount(grp.id) }})</span>
        </button>
      </div>
    </header>

    <!-- Essential Quote Box -->
    <div class="verse-box p-4 sm:p-5 mt-6">
      <p class="font-serif italic text-xs sm:text-sm md:text-base leading-relaxed text-center" :style="{ color: 'var(--ink)' }">
        {{ t('«ធុតង្គ មិនមែនជាការធ្វើទារុណកម្មខ្លួនឯង (អត្តកិលមថានុយោគ) ឡើយ ប៉ុន្តែជាឧបាយប្រាជ្ញាដើម្បីបង្ហាត់ចិត្តកុំឱ្យលោភលន់ ស្គាល់សេចក្តីសន្តោស និងរស់នៅដោយសេរីភាពផុតចាកការជាប់ជំពាក់»', '«Dhutaṅga is not self-mortification, but a skilful training of mind to shed greed, cultivate noble contentment, and abide in boundless spiritual freedom.»') }}
      </p>
      <p class="text-[11px] sm:text-xs mt-1.5 text-center font-mono" :style="{ color: 'var(--ink-muted)' }">
        — គម្ពីរវិសុទ្ធិមគ្គ (Visuddhimagga, Dhutaṅganiddesa)
      </p>
    </div>

    <!-- 3 Summary Stat Pillars -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
      <div class="card-paper p-4 text-center space-y-1">
        <span class="text-2xl">👘</span>
        <h4 class="font-display font-bold text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">{{ t('ចីវរបដិសំយុត្ត (២)', 'Robe Practices (2)') }}</h4>
        <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('សំពត់គងធូលី & ជីវរ ៣ ផ្ទាំង', 'Rag robes & triple robes') }}</p>
      </div>

      <div class="card-paper p-4 text-center space-y-1">
        <span class="text-2xl">🥣</span>
        <h4 class="font-display font-bold text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">{{ t('បិណ្ឌបាតបដិសំយុត្ត (៥)', 'Alms & Food Practices (5)') }}</h4>
        <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('ឆាន់មួយពេល & ឆាន់ក្នុងបាត្រ', 'Single meal & bowl-only') }}</p>
      </div>

      <div class="card-paper p-4 text-center space-y-1">
        <span class="text-2xl">⛺</span>
        <h4 class="font-display font-bold text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">{{ t('សេនាសនបដិសំយុត្ត (៦)', 'Lodging & Posture (6)') }}</h4>
        <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('គល់ឈើ ទីវាល & មិនដេក (នេសជ្ជិក)', 'Forest trees & non-lying posture') }}</p>
      </div>
    </div>

    <!-- Dhutanga Cards Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mt-6">
      <div
        v-for="dhut in filteredDhutangas"
        :key="dhut.id"
        @click="openModal(dhut)"
        class="card-paper card-paper-hover p-4 sm:p-5 cursor-pointer flex flex-col justify-between space-y-3"
      >
        <div class="space-y-2">
          <div class="flex items-center justify-between gap-2">
            <span class="text-2xl">{{ dhut.icon }}</span>
            <div class="flex items-center gap-1.5">
              <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">
                #{{ dhut.num }}
              </span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded uppercase" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)', color: 'var(--ink-muted)' }">
                {{ t(dhut.groupKm, dhut.groupEn) }}
              </span>
            </div>
          </div>

          <div>
            <h3 class="font-display text-base sm:text-lg font-bold" :style="{ color: 'var(--ink)' }">
              {{ t(dhut.nameKm, dhut.nameEn) }}
            </h3>
            <p class="paali text-xs mt-0.5" :style="{ color: 'var(--accent)' }">
              {{ dhut.pali }}
            </p>
          </div>

          <p class="text-xs leading-relaxed line-clamp-2" :style="{ color: 'var(--ink-soft)' }">
            {{ t(dhut.summaryKm, dhut.summaryEn) }}
          </p>
        </div>

        <div class="pt-2 flex items-center justify-between text-xs" :style="{ borderTop: '1px solid var(--border)' }">
          <span class="text-[11px] truncate max-w-[170px]" :style="{ color: 'var(--ink-muted)' }">
            {{ t('បំបាត់៖ ', 'Scours: ') }}{{ t(dhut.kilesaKm, dhut.kilesaEn) }}
          </span>
          <span class="font-bold" :style="{ color: 'var(--accent-bright)' }">
            {{ t('លម្អិត', 'Details') }} →
          </span>
        </div>
      </div>
    </div>

    <!-- POP-UP MODAL -->
    <Teleport to="body">
      <div
        v-if="selectedDhutanga"
        class="menu-backdrop fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
        @click.self="closeModal"
      >
        <div
          class="card-paper relative w-full max-w-2xl max-h-[88vh] sm:max-h-[90vh] flex flex-col rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl"
          :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }"
        >
          <!-- Header -->
          <div
            class="p-4 sm:p-5 flex items-center justify-between gap-3 border-b shrink-0"
            :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }"
          >
            <div class="flex items-center gap-2.5">
              <span class="text-3xl">{{ selectedDhutanga.icon }}</span>
              <div>
                <div class="flex items-center gap-2">
                  <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">
                    #{{ selectedDhutanga.num }}
                  </span>
                  <h3 class="font-display text-base sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
                    {{ t(selectedDhutanga.nameKm, selectedDhutanga.nameEn) }}
                  </h3>
                </div>
                <p class="paali text-xs" :style="{ color: 'var(--accent)' }">
                  {{ selectedDhutanga.pali }}
                </p>
              </div>
            </div>

            <button
              @click="closeModal"
              class="w-8 h-8 rounded-full flex items-center justify-center transition text-sm"
              :style="{ background: 'var(--bg-card)', color: 'var(--ink-soft)', border: '1px solid var(--border)' }"
            >
              ✕
            </button>
          </div>

          <!-- Content -->
          <div class="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed">
            <!-- Definition Box -->
            <div class="verse-box p-4 rounded-xl space-y-1">
              <span class="text-xs font-bold uppercase block" :style="{ color: 'var(--accent-bright)' }">
                📜 {{ t('និយមន័យ និងខ្លឹមសារក្បួនធុតង្គ', 'Definition & Vinaya Rule') }}
              </span>
              <p class="font-medium" :style="{ color: 'var(--ink)' }">
                {{ t(selectedDhutanga.detailKm, selectedDhutanga.detailEn) }}
              </p>
            </div>

            <!-- Pali Vow of Determination -->
            <div class="p-3.5 sm:p-4 rounded-xl space-y-1" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
              <span class="text-xs font-bold uppercase block" :style="{ color: 'var(--accent)' }">
                🗣️ {{ t('ពាក្យសច្ចាសមាទានជាបាលី (Pāli Undertaking Vow)', 'Undertaking Formula') }}
              </span>
              <p class="paali font-semibold text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
                «{{ selectedDhutanga.undertakingPali }}»
              </p>
              <p class="text-xs mt-0.5" :style="{ color: 'var(--ink-soft)' }">
                {{ t(selectedDhutanga.undertakingKm, selectedDhutanga.undertakingEn) }}
              </p>
            </div>

            <!-- 3 Levels of Practice -->
            <div class="space-y-2">
              <h4 class="font-display font-bold flex items-center gap-2 text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
                <span>⚖️</span>
                <span>{{ t('កម្រិតបដិបត្តិទាំង ៣ ថ្នាក់ (3 Grades of Practice):', 'The 3 Grades of Observance:') }}</span>
              </h4>

              <div class="grid grid-cols-1 gap-2">
                <div class="p-3 rounded-xl" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
                  <span class="text-xs font-bold block" :style="{ color: 'var(--accent-bright)' }">
                    🔥 ១. ថ្នាក់ឧក្រឹដ្ឋ (Strict / Superior):
                  </span>
                  <p class="text-xs mt-0.5" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(selectedDhutanga.strictKm, selectedDhutanga.strictEn) }}
                  </p>
                </div>

                <div class="p-3 rounded-xl" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
                  <span class="text-xs font-bold block" :style="{ color: 'var(--accent)' }">
                    ⚡ ២. ថ្នាក់មធ្យម (Medium):
                  </span>
                  <p class="text-xs mt-0.5" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(selectedDhutanga.mediumKm, selectedDhutanga.mediumEn) }}
                  </p>
                </div>

                <div class="p-3 rounded-xl" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
                  <span class="text-xs font-bold block" :style="{ color: 'var(--ink-muted)' }">
                    🌿 ៣. ថ្នាក់ស្រាល (Mild / Permissible):
                  </span>
                  <p class="text-xs mt-0.5" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(selectedDhutanga.mildKm, selectedDhutanga.mildEn) }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Defilements Eliminated & Spiritual Benefits -->
            <div class="p-3.5 sm:p-4 rounded-xl space-y-1" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
              <span class="text-xs font-bold uppercase block" :style="{ color: 'var(--accent)' }">
                ✨ {{ t('អានិសង្ស និងកិលេសដែលត្រូវកម្ចាត់ចេញ (Spiritual Benefits):', 'Benefits & Purification:') }}
              </span>
              <p :style="{ color: 'var(--ink-soft)' }">
                {{ t(selectedDhutanga.benefitsKm, selectedDhutanga.benefitsEn) }}
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div
            class="p-4 border-t flex justify-end shrink-0"
            :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }"
          >
            <button
              @click="closeModal"
              class="lang-pick px-5 py-2 text-xs font-semibold on"
            >
              {{ t('បិទផ្ទាំង', 'Close') }}
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeGroup = ref('all')
const selectedDhutanga = ref(null)

const groups = [
  { id: 'all', km: 'ទាំងអស់ ១៣', en: 'All 13', icon: '☸' },
  { id: 'robe', km: 'ចីវរ (២)', en: 'Robes (2)', icon: '👘' },
  { id: 'food', km: 'បិណ្ឌបាត/អាហារ (៥)', en: 'Food (5)', icon: '🥣' },
  { id: 'lodging', km: 'សេនាសនៈ/ទីគង់ (៦)', en: 'Lodging (6)', icon: '🌲' },
]

const dhutangas = [
  {
    id: 'dh1',
    num: 1,
    group: 'robe',
    groupKm: 'ចីវរ',
    groupEn: 'Robes',
    nameKm: 'បង្សុកូលិកធុតង្គ (ការស្លៀកពាក់តែសំពត់បង្សុកូល)',
    nameEn: 'Pāṃsukūlik’aṅga (Refuse-rag-wearer’s Practice)',
    pali: 'Pāṃsukūlik’aṅga',
    icon: '🧵',
    levelsSummaryKm: 'ថ្នាក់៖ ឧក្រឹដ្ឋ • មធ្យម • ស្រាល',
    levelsSummaryEn: '3 Grades: Strict, Medium, Mild',
    shortKm: 'បដិសេធចីវរដែលគ្រហស្ថប្រគេន ស្លៀកតែសំពត់គងធូលីដែលគេបោះចោលតាមព្រៃស្មសាន គំនរសម្រាម ឬតាមផ្លូវ។',
    shortEn: 'Rejecting householder garments and using only rag-cloth gathered from cemeteries, rubbish heaps, or roadside.',
    purposeKm: 'កម្ចាត់សេចក្តីស្រឡាញ់ជាប់ជំពាក់លើសំលៀកបំពាក់ល្អៗ និងភាពខ្មាសអៀនឥតប្រយោជន៍។',
    purposeEn: 'Destroys attachment to fashionable clothes, vanity, and pride.',
    detailKm: 'ភិក្ខុកាត់ និងដេរសំពត់ដែលគេបោះចោលដោយខ្លួនឯង ជ្រលក់ពណ៌ដោយសំបកឈើ មិនទទួលស្បង់ចីវរដែលទាយកទាយិកាប្រគេនដោយផ្ទាល់ដៃឡើយ។',
    detailEn: 'The monk gathers discarded rags, washes, sews, and dyes them with natural tree bark.',
    undertakingPali: 'Gahapatidānacīvaraṃ paṭikkhipāmi, paṃsukūlik’aṅgaṃ samādiyāmi.',
    undertakingKm: '«ខ្ញុំព្រះករុណា សូមបដិសេធនូវចីវរដែលគ្រហស្ថប្រគេន, សូមសមាទាននូវអង្គនៃភិក្ខុអ្នកទ្រទ្រង់នូវសំពត់បង្សុកូលជាវត្ត»។',
    undertakingEn: '«I refuse garments given by householders; I undertake the refuse-rag-wearer’s practice.»',
    strictKm: 'រើសតែសំពត់ដែលគេចោលលើគំនរខ្មោចក្នុងព្រៃស្មសានប៉ុណ្ណោះ។',
    strictEn: 'Takes rags only from charnel grounds and decomposing corpses.',
    mediumKm: 'រើសសំពត់ដែលគេទម្លាក់ចោលក្បែរវត្ត ឬតាមផ្លូវដើរ។',
    mediumEn: 'Takes rags dropped near monasteries or along walking pathways.',
    mildKm: 'ទទួលសំពត់ដែលគេទម្លាក់នៅជើង ហើយពោលថា «សំពត់នេះសម្រាប់បង្សុកូល»។',
    mildEn: 'Accepts cloth discarded at one’s feet with the intention of it being refuse cloth.',
    benefitsKm: 'មានសេចក្តីសន្តោសប្រពៃ មិនព្រួយបារម្ភរឿងចោរលួចចីវរ មិនមានការប្រកាន់វណ្ណៈ មានជីវិតរស់នៅស្រាលដូចសត្វស្លាប។',
    benefitsEn: 'Eliminates fear of robbery, brings serene contentment, and keeps life light as a bird.'
  },
  {
    id: 'dh2',
    num: 2,
    group: 'robe',
    groupKm: 'ចីវរ',
    groupEn: 'Robes',
    nameKm: 'តេចីវរិកធុតង្គ (ការប្រើស្បង់ជីវរតែ ៣ ផ្ទាំង)',
    nameEn: 'Tecīvarik’aṅga (Triple-robe-wearer’s Practice)',
    pali: 'Tecīvarik’aṅga',
    icon: '👘',
    levelsSummaryKm: 'ថ្នាក់៖ ឧក្រឹដ្ឋ • មធ្យម • ស្រាល',
    levelsSummaryEn: '3 Grades: Strict, Medium, Mild',
    shortKm: 'ប្រើប្រាស់ និងរក្សាទុកស្បង់ជីវរត្រឹមតែ ៣ ផ្ទាំងគត់ (ស្បង់ សង្ឃាដី និងចីវរ) មិនមានផ្ទាំងទី ៤ ឡើយ។',
    shortEn: 'Possessing and keeping only three robes (inner, upper, outer cloak) with zero surplus cloth.',
    purposeKm: 'កម្ចាត់ការសន្សំទុកទ្រព្យសម្បត្តិ ធ្វើឱ្យជីវិតមានបន្ទុកតិចតួចបំផុត ទៅណាមកណាមានតែត្រៃចីវរជាប់ខ្លួន។',
    purposeEn: 'Uproots the desire to accumulate belongings, living like a bird whose only luggage is its wings.',
    detailKm: 'ភិក្ខុអ្នកកាន់ធុតង្គនេះ ត្រូវរក្សាស្បង់ ៣ ផ្ទាំង (សង្ឃាដី ២ ជាន់, ឧត្តរាសង្គ ១ ជាន់, អន្តរវាសក ១ ជាន់) ឱ្យនៅជាមួយខ្លួនជានិច្ច មិនឱ្យដាច់រាត្រីឆ្ងាយពីចីវរឡើយ។',
    detailEn: 'The monk carries only the outer double-layered cloak, upper robe, and inner loin cloth.',
    undertakingPali: 'Catutthacīvaraṃ paṭikkhipāmi, tecīvarik’aṅgaṃ samādiyāmi.',
    undertakingKm: '«ខ្ញុំព្រះករុណា សូមបដិសេធនូវចីវរទី ៤, សូមសមាទាននូវអង្គនៃភិក្ខុអ្នកទ្រទ្រង់នូវត្រៃចីវរជាវត្ត»។',
    undertakingEn: '«I refuse a fourth robe; I undertake the triple-robe-wearer’s practice.»',
    strictKm: 'ពេលបោកគក់ចីវរមួយផ្ទាំង ត្រូវស្លៀកពាក់ផ្ទាំងផ្សេងទៀតនៅនឹងកាយ មិនឱ្យចាកចីវរឡើយ។',
    strictEn: 'Washes one robe while wearing another; never leaves robes beyond arm’s reach.',
    mediumKm: 'អាចទុកចីវរក្នុងបន្ទប់គង់នៅបាន តែមិនឱ្យហួសព្រំប្រទល់វត្ត។',
    mediumEn: 'May keep robes within the living quarters of the precinct.',
    mildKm: 'អាចទុកចីវរក្នុងព្រំដែនអារាមដែលបានកំណត់។',
    mildEn: 'May leave robes inside the monastery boundary.',
    benefitsKm: 'ចិត្តស្ងប់ផុតពីការខ្វល់ខ្វាយថែរក្សា មានបន្ទុកស្រាល ទៅកាន់ទិសទាំង ៤ ដោយឥតមានកង្វល់។',
    benefitsEn: 'Unburdened wandering; free from the worry of protecting wardrobe possessions.'
  },
  {
    id: 'dh3',
    num: 3,
    group: 'food',
    groupKm: 'បិណ្ឌបាត/អាហារ',
    groupEn: 'Food',
    nameKm: 'បិណ្ឌបាតិកធុតង្គ (ការឆាន់តែអាហារបិណ្ឌបាត)',
    nameEn: 'Piṇḍapātik’aṅga (Alms-food-eater’s Practice)',
    pali: 'Piṇḍapātik’aṅga',
    icon: '🥣',
    levelsSummaryKm: 'ថ្នាក់៖ ឧក្រឹដ្ឋ • មធ្យម • ស្រាល',
    levelsSummaryEn: '3 Grades: Strict, Medium, Mild',
    shortKm: 'ឆាន់តែអាហារដែលបានមកពីការដើរបិណ្ឌបាតដោយផ្ទាល់ មិនទទួលការនិមន្តឆាន់តាមផ្ទះ ឬចង្ហាន់ដែលគេយកមកវត្ត។',
    shortEn: 'Eating only food received in the alms-bowl on daily alms rounds, rejecting feast invitations.',
    purposeKm: 'កម្ចាត់ការជាប់ជំពាក់នឹងរសអាហារឆ្ងាញ់ៗ និងការរើសអើងម្ចាស់ទាន។',
    purposeEn: 'Destroys food greed, pride, and favoritism toward wealthy donors.',
    detailKm: 'ភិក្ខុអ្នកសមាទានធុតង្គនេះ បដិសេធភត្តទាំង ១៤ យ៉ាង (ដូចជា សង្ឃភត្ត, ឧទ្ទេសភត្ត, និមន្តនភត្ត, សលាកភត្ត...) ទទួលតែអាហារដែលធ្លាក់ក្នុងបាត្រពេលដើរស្រឡះ។',
    detailEn: 'Refuses special invitations, food tickets, and dining appointments; relies wholly on morning rounds.',
    undertakingPali: 'Atirekalābhaṃ paṭikkhipāmi, piṇḍapātik’aṅgaṃ samādiyāmi.',
    undertakingKm: '«ខ្ញុំព្រះករុណា សូមបដិសេធនូវលាភដ៏លើសលប់, សូមសមាទាននូវអង្គនៃភិក្ខុអ្នកត្រាច់ទៅបិណ្ឌបាតជាវត្ត»។',
    undertakingEn: '«I refuse extra gains; I undertake the alms-food-eater’s practice.»',
    strictKm: 'ឆាន់តែចង្ហាន់ដែលបានមកពីការបិណ្ឌបាតតាមផ្លូវគត់ មិនទទួលចង្ហាន់ដែលគេយកមកប្រគេនតាមក្រោយឡើយ។',
    strictEn: 'Eats only what falls into the bowl during walking; accepts nothing delivered afterwards.',
    mediumKm: 'អាចទទួលចង្ហាន់ដែលគេយកមកប្រគេនខណៈកំពុងឈរបិណ្ឌបាត។',
    mediumEn: 'Accepts food delivered while standing on the road.',
    mildKm: 'អាចទទួលចង្ហាន់ដែលគេកំណត់យកមកប្រគេនក្នុងវត្តនាពេលព្រឹក។',
    mildEn: 'Accepts food delivered early morning directly to the monastery.',
    benefitsKm: 'ចិញ្ចឹមជីវិតដោយបរិសុទ្ធ មិនពឹងផ្អែកលើការផ្គាប់ចិត្តអ្នកមាន មិនមានការរំខានដល់ទាយក។',
    benefitsEn: 'Pure livelihood independent of pleasing patrons; true freedom of spirit.'
  },
  {
    id: 'dh4',
    num: 4,
    group: 'food',
    groupKm: 'បិណ្ឌបាត/អាហារ',
    groupEn: 'Food',
    nameKm: 'សបទានចារិកធុតង្គ (ការបិណ្ឌបាតតាមលំដាប់ផ្ទះ)',
    nameEn: 'Sapadānacārik’aṅga (House-to-house Wanderer)',
    pali: 'Sapadānacārik’aṅga',
    icon: '🏘️',
    levelsSummaryKm: 'ថ្នាក់៖ ឧក្រឹដ្ឋ • មធ្យម • ស្រាល',
    levelsSummaryEn: '3 Grades: Strict, Medium, Mild',
    shortKm: 'ដើរបិណ្ឌបាតតាមលំដាប់ផ្ទះមិនឱ្យរំលង មិនរើសផ្ទះអ្នកមាន មិនរំលងផ្ទះអ្នកក្រីក្រឡើយ។',
    shortEn: 'Moving from house to house in unbroken succession without skipping poor homes for wealthy ones.',
    purposeKm: 'កម្ចាត់សេចក្តីរើសអើងវណ្ណៈ មើលងាយអ្នកក្រ និងការលោភលន់ចង់បានម្ហូបឆ្ងាញ់។',
    purposeEn: 'Crushes class bias, contempt for the impoverished, and desire for gourmet treats.',
    detailKm: 'ពេលដើរបិណ្ឌបាត ចូលតាមលំដាប់ផ្ទះមួយទៅផ្ទះមួយ ទោះផ្ទះនោះមិនដាក់បាយ ឬដាក់តែកន្ទក់ ក៏ទទួលដោយមេត្តាចិត្តស្មើគ្នា។',
    detailEn: 'Walks with eyes downcast, accepting whatever dry rice or gruel is placed, giving equal blessing to all.',
    undertakingPali: 'Loluppacāraṃ paṭikkhipāmi, sapadānacārik’aṅgaṃ samādiyāmi.',
    undertakingKm: '«ខ្ញុំព្រះករុណា សូមបដិសេធនូវការត្រាច់ទៅតាមការលោភលន់, សូមសមាទាននូវអង្គនៃភិក្ខុអ្នកត្រាច់ទៅតាមលំដាប់ច្រកជាវត្ត»។',
    undertakingEn: '«I refuse roaming out of greed; I undertake the house-to-house wanderer’s practice.»',
    strictKm: 'ដើរតាមលំដាប់ផ្ទះឥតរំលង បើផ្ទះណាគ្មានមនុស្ស ក៏ឈរបន្តិចទើបដើរទៅផ្ទះបន្ទាប់។',
    strictEn: 'Never skips any house under any circumstance, standing patiently before each door.',
    mediumKm: 'អាចរំលងផ្ទះដែលមានគ្រោះថ្នាក់ (ដូចជា ឆ្កែកាច ឬមនុស្សស្រវឹង)។',
    mediumEn: 'May skip houses posing danger such as fierce hounds or intoxicated people.',
    mildKm: 'អាចរំលងផ្ទះដែលធ្លាប់ដឹងច្បាស់ថាមិនដែលធ្វើបុណ្យ។',
    mildEn: 'May bypass houses known never to offer alms.',
    benefitsKm: 'មានមេត្តាចិត្តស្មើគ្នាចំពោះសត្វលោកទាំងពួង បំបាត់មានះ និងមិនលម្អៀង។',
    benefitsEn: 'Unconditioned loving-kindness toward all societal strata, eradicating vanity.'
  },
  {
    id: 'dh5',
    num: 5,
    group: 'food',
    groupKm: 'បិណ្ឌបាត/អាហារ',
    groupEn: 'Food',
    nameKm: 'ឯកាសនិកធុតង្គ (ការឆាន់មួយកន្លែង/មួយពេលក្នុងមួយថ្ងៃ)',
    nameEn: 'Ekāsanik’aṅga (One-session-eater’s Practice)',
    pali: 'Ekāsanik’aṅga',
    icon: '🧘',
    levelsSummaryKm: 'ថ្នាក់៖ ឧក្រឹដ្ឋ • មធ្យម • ស្រាល',
    levelsSummaryEn: '3 Grades: Strict, Medium, Mild',
    shortKm: 'ឆាន់អាហារត្រឹមតែមួយកន្លែងគត់ក្នុងមួយថ្ងៃ កាលណាក្រោកចាកអាសនៈហើយ មិនឆាន់អាហារបន្ថែមឡើយ។',
    shortEn: 'Eating in only one sitting per day; once standing up from the seat, eating terminates entirely.',
    purposeKm: 'កម្ចាត់ការជាប់ជំពាក់នឹងការស៊ីផឹកច្រើនដង និងការខ្ជះខ្ជាយពេលវេលា។',
    purposeEn: 'Overcomes oral obsession, lethargy, and wasted hours of snacking.',
    detailKm: 'ភិក្ខុអង្គុយឆាន់ត្រឹមមួយកន្លែង ពេលណាដែលក្រោកឈរឡើង ឬរំកិលចេញពីកន្លែងឆាន់ ទោះបីមិនទាន់ឆ្អែត ក៏ត្រូវបញ្ឈប់ការឆាន់ត្រឹមនោះភ្លាម។',
    detailEn: 'Once the seated meal commences, getting up or stepping away marks the absolute end of meals for the day.',
    undertakingPali: 'Nānāsanabhojanaṃ paṭikkhipāmi, ekāsanik’aṅgaṃ samādiyāmi.',
    undertakingKm: '«ខ្ញុំព្រះករុណា សូមបដិសេធនូវការឆាន់ក្នុងអាសនៈផ្សេងៗ, សូមសមាទាននូវអង្គនៃភិក្ខុអ្នកឆាន់ក្នុងអាសនៈតែមួយជាវត្ត»។',
    undertakingEn: '«I refuse dining in different seats; I undertake the one-session-eater’s practice.»',
    strictKm: 'ពេលដាក់ដៃលើអាហារដំបូងហើយ មិនទទួលអាហារបន្ថែមទៀតឡើយ ឆាន់ចប់ក្រោកឡើងភ្លាម។',
    strictEn: 'Takes nothing more once hands touch the bowl; rises the instant the meal ends.',
    mediumKm: 'អាចទទួលអាហារបន្ថែមបាន ដរាបណានៅអង្គុយលើអាសនៈដដែល។',
    mediumEn: 'May accept more food as long as one remains seated in the same spot.',
    mildKm: 'អាចប្តូរទីតាំងឆាន់បាន ប្រសិនបើមានឧបសគ្គចាំបាច់។',
    mildEn: 'May adjust seating slightly if unforeseen hindrance arises.',
    benefitsKm: 'រាងកាយស្រាលស្រឡះ មិនងាយកើតរោគ មិនងងុយដេក មានពេលវេលាច្រើនសម្រាប់ចម្រើនភាវនា។',
    benefitsEn: 'Physical lightness, freedom from ailments, minimal torpor, and abundant meditation time.'
  },
  {
    id: 'dh6',
    num: 6,
    group: 'food',
    groupKm: 'បិណ្ឌបាត/អាហារ',
    groupEn: 'Food',
    nameKm: 'បត្តបិណ្ឌិកធុតង្គ (ការឆាន់តែក្នុងបាត្រមួយ)',
    nameEn: 'Pattapiṇḍik’aṅga (Bowl-only-eater’s Practice)',
    pali: 'Pattapiṇḍik’aṅga',
    icon: '🥣',
    levelsSummaryKm: 'ថ្នាក់៖ ឧក្រឹដ្ឋ • មធ្យម • ស្រាល',
    levelsSummaryEn: '3 Grades: Strict, Medium, Mild',
    shortKm: 'ដាក់ម្ហូប បាយ និងបង្អែមចូលក្នុងបាត្រតែមួយ ឆាន់ដោយឥតប្រើចាន កែវ ឬថាសដទៃឡើយ។',
    shortEn: 'Eating all items mixed inside the alms-bowl alone, refusing plates, saucers, and side dishes.',
    purposeKm: 'កម្ចាត់តណ្ហាក្នុងរសជាតិឆ្ងាញ់ ការជាប់ជំពាក់នឹងរូបរាង និងពណ៌នៃម្ហូប។',
    purposeEn: 'Destroys gourmet cravings, visual attachment to fancy dining presentations.',
    detailKm: 'មិនប្រើចានច្រើន ដាក់អាហារទាំងអស់ចូលក្នុងបាត្រ ពិចារណាថាអាហារជាបច្ច័យចិញ្ចឹមរាងកាយដើម្បីបដិបត្តិធម៌ មិនមែនដើម្បីលេងសើចឡើយ។',
    detailEn: 'Views food objectively as nutritional fuel rather than entertainment for sensory delight.',
    undertakingPali: 'Dutiyakabhājanaṃ paṭikkhipāmi, pattapiṇḍik’aṅgaṃ samādiyāmi.',
    undertakingKm: '«ខ្ញុំព្រះករុណា សូមបដិសេធនូវភាជន៍ទីពីរ, សូមសមាទាននូវអង្គនៃភិក្ខុអ្នកឆាន់អាហារក្នុងបាត្រជាវត្ត»។',
    undertakingEn: '«I refuse a second container; I undertake the bowl-only-eater’s practice.»',
    strictKm: 'មិនឱ្យបំបែកម្ហូប ឬបង្អែមឡើយ ច្របល់ចូលគ្នាក្នុងបាត្រទាំងអស់។',
    strictEn: 'Mixes all foods inside the bowl; refuses separate dessert tasting.',
    mediumKm: 'អាចញែកម្ហូបក្នុងបាត្រដោយមិនបាច់ច្របល់ចូលគ្នា។',
    mediumEn: 'Keeps food items separate inside the bowl without stirring together.',
    mildKm: 'អាចប្រើស្លាបព្រា ឬដៃរើសញ៉ាំតាមចំណូលចិត្តក្នុងបាត្រ។',
    mildEn: 'Selects items inside the bowl with fingers or spoon freely.',
    benefitsKm: 'លះបង់ភាពរើសអើងរសជាតិ ដឹងគុណនៃអាហារ មិនខាតពេលលាងចានកែវច្រើន។',
    benefitsEn: 'Liberation from taste fixation; profound gratitude for simple nourishment.'
  },
  {
    id: 'dh7',
    num: 7,
    group: 'food',
    groupKm: 'បិណ្ឌបាត/អាហារ',
    groupEn: 'Food',
    nameKm: 'ខលុបច្ឆាភត្តិកធុតង្គ (ការមិនទទួលអាហារបន្ថែមក្រោយពេលឆាន់)',
    nameEn: 'Khalupacchābhattik’aṅga (Refuser of Later Food)',
    pali: 'Khalupacchābhattik’aṅga',
    icon: '✋',
    levelsSummaryKm: 'ថ្នាក់៖ ឧក្រឹដ្ឋ • មធ្យម • ស្រាល',
    levelsSummaryEn: '3 Grades: Strict, Medium, Mild',
    shortKm: 'កាលណាបានបដិសេធចង្ហាន់ដែលគេយកមកប្រគេនម្តងហើយ មិនទទួលចង្ហាន់អ្វីបន្ថែមទៀតឡើយ។',
    shortEn: 'Once signaling that one has taken enough food, refusing any additional offerings thereafter.',
    purposeKm: 'កម្ចាត់ការឆាន់ហួសប្រមាណ និងសេចក្តីលោភលន់ចង់ភ្លក់ម្ហូបដែលមកដល់ក្រោយ។',
    purposeEn: 'Curbs gluttony and the lingering greed for subsequent arriving courses.',
    detailKm: 'ពេលកំពុងឆាន់ បើមានគេយកម្ហូបឆ្ងាញ់មកប្រគេនបន្ថែម ហើយខ្លួនបានបន្លឺពាក្យ ឬធ្វើកាយវិការថា «ល្មមហើយ» គឺមិនអាចទទួលម្ហូបអ្វីទៀតឡើយរហូតដល់ថ្ងៃស្អែក។',
    detailEn: 'Saying "enough" or gesturing completion seals the meal, preventing second helpings.',
    undertakingPali: 'Additional-bhojanaṃ paṭikkhipāmi, khalupacchābhattik’aṅgaṃ samādiyāmi.',
    undertakingKm: '«ខ្ញុំព្រះករុណា សូមបដិសេធនូវភត្តដែលគេនាំមកប្រគេនក្រោយ, សូមសមាទាននូវខលុបច្ឆាភត្តិកធុតង្គជាវត្ត»។',
    undertakingEn: '«I refuse food offered after signaling completion; I undertake this practice.»',
    strictKm: 'ឈប់ឆាន់ភ្លាមៗពេលបន្លឺពាក្យបដិសេធលើកដំបូង។',
    strictEn: 'Ceases eating immediately upon signaling the first refusal.',
    mediumKm: 'អាចឆាន់អាហារដែលកំពុងមានក្នុងបាត្រឱ្យអស់ តែមិនទទួលបន្ថែម។',
    mediumEn: 'Finishes whatever remains inside the bowl, taking no additions.',
    mildKm: 'អាចឆាន់បន្តរហូតដល់ក្រោកពីកន្លែង។',
    mildEn: 'May continue finishing current portion until rising.',
    benefitsKm: 'ពោះមិនតឹងណែនពេក មិនដកដង្ហើមថប់ ចិត្តស្ងប់ស្រួលតាំងសមាធិ មិនរវើយរវាយ។',
    benefitsEn: 'Prevents indigestion and sluggishness; sharpens meditation awareness.'
  },
  {
    id: 'dh8',
    num: 8,
    group: 'lodging',
    groupKm: 'សេនាសនៈ',
    groupEn: 'Lodging',
    nameKm: 'អារញ្ញិកធុតង្គ (ការគង់នៅក្នុងព្រៃស្ងាត់)',
    nameEn: 'Āraññik’aṅga (Forest-dweller’s Practice)',
    pali: 'Āraññik’aṅga',
    icon: '🌲',
    levelsSummaryKm: 'ថ្នាក់៖ ឧក្រឹដ្ឋ • មធ្យម • ស្រាល',
    levelsSummaryEn: '3 Grades: Strict, Medium, Mild',
    shortKm: 'រស់នៅតែក្នុងព្រៃជ្រៅស្ងាត់ ដែលនៅឆ្ងាយពីភូមិមនុស្សយ៉ាងតិច ៥០០ ធ្នូ (ប្រហែល ១ គីឡូម៉ែត្រ)។',
    shortEn: 'Dwelling exclusively in remote wilderness at least 500 bow-lengths (approx. 1 km) from the nearest settlement.',
    purposeKm: 'កម្ចាត់ការជាប់ជំពាក់នឹងភាពអ៊ូអរក្នុងទីក្រុង និងសំឡេងរំខាននៃសង្គមមនុស្ស។',
    purposeEn: 'Escapes urban distractions, social drama, and sensory agitation.',
    detailKm: 'មិនស្នាក់នៅក្នុងវត្តក្បែរភូមិ គង់នៅក្នុងព្រៃស្ងប់ស្ងាត់ មានសត្វព្រៃជាមិត្ត ស្តាប់តែសូរសំឡេងធម្មជាតិ ចម្រើនសមាធិឥតមានការរំខាន។',
    detailEn: 'Lives amidst wild elements, befriending wilderness creatures, soaking in pristine solitude.',
    undertakingPali: 'Gāmanta-senāsanaṃ paṭikkhipāmi, āraññik’aṅgaṃ samādiyāmi.',
    undertakingKm: '«ខ្ញុំព្រះករុណា សូមបដិសេធនូវទីសេនាសនៈក្បែរភូមិ, សូមសមាទាននូវអង្គនៃភិក្ខុអ្នកនៅក្នុងព្រៃជាវត្ត»។',
    undertakingEn: '«I refuse village dwellings; I undertake the forest-dweller’s practice.»',
    strictKm: 'រស់នៅក្នុងព្រៃជ្រៅជានិច្ច ពេលព្រះអាទិត្យរះត្រូវតែនៅក្នុងព្រៃ។',
    strictEn: 'Dawn must invariably find the monk secluded inside the forest wilderness.',
    mediumKm: 'អាចចូលមករកគ្រូពេទ្យក្នុងភូមិពេលមានជំងឺធ្ងន់។',
    mediumEn: 'May enter settlements temporarily during acute medical emergencies.',
    mildKm: 'អាចចូលភូមិដើម្បីរៀនធម៌ពេលថ្ងៃ ហើយត្រឡប់ទៅព្រៃពេលល្ងាច។',
    mildEn: 'May visit town to study Dhamma, returning to the woods before twilight.',
    benefitsKm: 'ចិត្តស្ងប់លឿន មិនខ្វល់រឿងលោកិយ ងាយសម្រេចឈាន និងវិបស្សនាញាណ។',
    benefitsEn: 'Rapid mental tranquility; effortless absorption in Jhānas away from worldly clamor.'
  },
  {
    id: 'dh9',
    num: 9,
    group: 'lodging',
    groupKm: 'សេនាសនៈ',
    groupEn: 'Lodging',
    nameKm: 'រុក្ខមូលិកធុតង្គ (ការគង់នៅក្រោមម្លប់ឈើ)',
    nameEn: 'Rukkhamūlik’aṅga (Tree-root-dweller’s Practice)',
    pali: 'Rukkhamūlik’aṅga',
    icon: '🌳',
    levelsSummaryKm: 'ថ្នាក់៖ ឧក្រឹដ្ឋ • មធ្យម • ស្រាល',
    levelsSummaryEn: '3 Grades: Strict, Medium, Mild',
    shortKm: 'គង់នៅតែក្រោមម្លប់ឈើធម្មជាតិ មិនស្នាក់នៅក្រោមដំបូលផ្ទះ វិហារ ឬកុដិឡើយ។',
    shortEn: 'Dwelling at the foot of trees, refusing roofs, cabins, huts, or monasteries.',
    purposeKm: 'កម្ចាត់ការជាប់ជំពាក់នឹងផ្ទះសម្បែងល្អៗ និងការកសាងកុដិស្កឹមស្កៃ។',
    purposeEn: 'Destroys building attachment, interior decorating desires, and real estate clinging.',
    detailKm: 'ជ្រើសរើសដើមឈើណាដែលមានម្លប់ត្រជាក់ គ្មានសត្វកាច ឬសំបុកស្រមោច បោសសម្អាតជើងឈើ ហើយអង្គុយចម្រើនសមណធម៌។',
    detailEn: 'Finds a solitary shady tree, sweeps the base, and sits calmly beneath its foliage.',
    undertakingPali: 'Channaṃ paṭikkhipāmi, rukkhamūlik’aṅgaṃ samādiyāmi.',
    undertakingKm: '«ខ្ញុំព្រះករុណា សូមបដិសេធនូវទីសេនាសនៈដែលមានដំបូលបិទបាំង, សូមសមាទាននូវរុក្ខមូលិកធុតង្គជាវត្ត»។',
    undertakingEn: '«I refuse roofed shelter; I undertake the tree-root-dweller’s practice.»',
    strictKm: 'មិនជ្រើសរើសដើមឈើឡើយ ជួបដើមឈើណាគង់ក្រោមដើមឈើនោះ។',
    strictEn: 'Takes whatever tree is encountered without fuss or aesthetic pickiness.',
    mediumKm: 'អាចជ្រើសរើសដើមឈើដែលមានម្លប់ស្រឡះល្អ។',
    mediumEn: 'Chooses trees with comfortable shade away from falling branches.',
    mildKm: 'អាចបាំងស្លឹកត្នោតបន្តិចបន្តួចការពារទឹកភ្លៀង។',
    mildEn: 'May arrange a small palm-frond screen against blowing drizzle.',
    benefitsKm: 'រំឭកដល់ព្រះសម្មាសម្ពុទ្ធដែលទ្រង់ត្រាស់ដឹងក្រោមដើមពោធិព្រឹក្ស និងបរិនិព្វានក្រោមដើមរាំងទាំងគូ។',
    benefitsEn: 'Emulates the Master who was born, awakened, and passed away beneath trees.'
  },
  {
    id: 'dh10',
    num: 10,
    group: 'lodging',
    groupKm: 'សេនាសនៈ',
    groupEn: 'Lodging',
    nameKm: 'អព្ភោកាសិកធុតង្គ (ការគង់នៅទីវាលស្រឡះ)',
    nameEn: 'Abbhokāsik’aṅga (Open-air-dweller’s Practice)',
    pali: 'Abbhokāsik’aṅga',
    icon: '🌌',
    levelsSummaryKm: 'ថ្នាក់៖ ឧក្រឹដ្ឋ • មធ្យម • ស្រាល',
    levelsSummaryEn: '3 Grades: Strict, Medium, Mild',
    shortKm: 'គង់នៅទីវាលស្រឡះក្រោមពន្លឺព្រះចន្ទ និងផ្កាយ មិននៅក្រោមដំបូល និងមិននៅក្រោមម្លប់ឈើឡើយ។',
    shortEn: 'Dwelling in the open air beneath stars and sky, refusing both roofs and tree shade.',
    purposeKm: 'កម្ចាត់សេចក្តីខ្ជិលច្រអូស ភាពងងុយដេក និងការស្រឡាញ់ស្បែកកាយ។',
    purposeEn: 'Vanquishes sluggishness, torpor, and body-pampering.',
    detailKm: 'គង់នៅទីវាល មានមេឃជាដំបូល មានផែនដីជាកម្រាល ចិត្តទូលាយដូចលំហអាកាស។ ពេលភ្លៀងអាចចូលជ្រកក្នុងរោងបាន តែភ្លៀងរាំងត្រូវចេញមកវិញភ្លាម។',
    detailEn: 'Sky as roof, earth as floor; mind as boundless as infinite space.',
    undertakingPali: 'Channañca rukkhamūlañca paṭikkhipāmi, abbhokāsik’aṅgaṃ samādiyāmi.',
    undertakingKm: '«ខ្ញុំព្រះករុណា សូមបដិសេធនូវទីមានដំបូល និងម្លប់ឈើ, សូមសមាទាននូវអង្គនៃភិក្ខុអ្នកនៅទីវាលស្រឡះជាវត្ត»។',
    undertakingEn: '«I refuse both roofed dwellings and tree roots; I undertake the open-air-dweller’s practice.»',
    strictKm: 'មិនចូលក្នុងកន្លែងបាំងសូម្បីតែពេលមានភ្លៀងធ្លាក់ (ប្រើឆ័ត្រចីវរ)។',
    strictEn: 'Endures weather under a simple cloth shelter without entering structures.',
    mediumKm: 'អាចចូលជ្រកកន្លែងមានដំបូលពេលភ្លៀងខ្លាំង រួចចេញមកវិញពេលរាំង។',
    mediumEn: 'Enters a shed during heavy cloudbursts, exiting once the rain ceases.',
    mildKm: 'អាចស្នាក់នៅក្បែរជញ្ជាំងអាគារបាន។',
    mildEn: 'May camp near outer walls of buildings.',
    benefitsKm: 'ចិត្តរហ័សរហួន គ្មានការងងុយដេក ឃើញច្បាស់នូវធម្មជាតិនៃខ្យល់ កម្តៅ និងពន្លឺ។',
    benefitsEn: 'Unrivaled alertness, freedom from confinement, panoramic contemplation of nature.'
  },
  {
    id: 'dh11',
    num: 11,
    group: 'lodging',
    groupKm: 'សេនាសនៈ',
    groupEn: 'Lodging',
    nameKm: 'សោសានិកធុតង្គ (ការគង់នៅក្នុងព្រៃស្មសាន)',
    nameEn: 'Sosānik’aṅga (Charnel-ground-dweller’s Practice)',
    pali: 'Sosānik’aṅga',
    icon: '💀',
    levelsSummaryKm: 'ថ្នាក់៖ ឧក្រឹដ្ឋ • មធ្យម • ស្រាល',
    levelsSummaryEn: '3 Grades: Strict, Medium, Mild',
    shortKm: 'គង់ស្នាក់នៅក្នុងព្រៃស្មសានដែលមានខ្មោចគេបោះចោល ឬកន្លែងដុតសព។',
    shortEn: 'Dwelling in or adjacent to charnel grounds where corpses are burned or decompose.',
    purposeKm: 'កម្ចាត់សេចក្តីភ័យខ្លាចចំពោះសេចក្តីស្លាប់ និងការជាប់ជំពាក់ក្នុងរូបរាងកាយថាស្អាត។',
    purposeEn: 'Destroys fear of death, ghost dread, and bodily lust through raw confrontation with decay.',
    detailKm: 'ស្នាក់នៅក្បែរគំនរឆ្អឹង និងក្លិនស្អុយនៃសព ដើម្បីពិចារណាអសុភកម្មដ្ឋាន និងមរណានុស្សតិ ឃើញច្បាស់ថាកាយនេះមិនយូរឡើយនឹងក្លាយជាបែបនេះដូចគ្នា។',
    detailEn: 'Meditates beside skeletal remains and charnel fires, internalizing bodily impermanence.',
    undertakingPali: 'Asosānaṃ paṭikkhipāmi, sosānik’aṅgaṃ samādiyāmi.',
    undertakingKm: '«ខ្ញុំព្រះករុណា សូមបដិសេធនូវទីមិនមែនព្រៃស្មសាន, សូមសមាទាននូវសោសានិកធុតង្គជាវត្ត»។',
    undertakingEn: '«I refuse non-charnel sites; I undertake the charnel-ground-dweller’s practice.»',
    strictKm: 'ស្នាក់នៅកន្លែងដែលគេតែងតែដុតសព ឬបោះសពចោលជាប្រចាំ។',
    strictEn: 'Lives where corpses are actively cremated, decomposed, and scavenged.',
    mediumKm: 'ស្នាក់នៅព្រៃស្មសានដែលធ្លាប់មានការដុតសពពីមុន។',
    mediumEn: 'Lives in a cemetery ground used historically.',
    mildKm: 'ស្នាក់នៅក្បែរព្រំប្រទល់នៃព្រៃស្មសាន។',
    mildEn: 'Camps near the perimeter edge of cemetery grounds.',
    benefitsKm: 'លែងភ័យខ្លាចសេចក្តីស្លាប់ បំបាត់កាមរាគយ៉ាងឆាប់រហ័ស មានសតិដឹងខ្លួនគ្រប់ខណៈ។',
    benefitsEn: 'Fearlessness in the face of death; instantaneous evaporation of sensual lust.'
  },
  {
    id: 'dh12',
    num: 12,
    group: 'lodging',
    groupKm: 'សេនាសនៈ',
    groupEn: 'Lodging',
    nameKm: 'យថាសន្ថតិកធុតង្គ (ការគង់តាមកន្លែងដែលគេចាត់ចែងឱ្យ)',
    nameEn: 'Yathāsanthatik’aṅga (Any-bed-user’s Practice)',
    pali: 'Yathāsanthatik’aṅga',
    icon: '🛏️',
    levelsSummaryKm: 'ថ្នាក់៖ ឧក្រឹដ្ឋ • មធ្យម • ស្រាល',
    levelsSummaryEn: '3 Grades: Strict, Medium, Mild',
    shortKm: 'សន្តោសនឹងទីកន្លែងដែលគេចាត់ចែងឱ្យ មិនរអ៊ូរទាំ មិនទាមទារកន្លែងល្អជាងគេ។',
    shortEn: 'Content with whatever lodging or mat is assigned, without requesting upgrades.',
    purposeKm: 'កម្ចាត់សេចក្តីលោភលន់ចង់បានកន្លែងស្រួល និងការទាស់ចិត្តនឹងទីកន្លែងអាក្រក់។',
    purposeEn: 'Uproots entitlement, grumbling, and demanding preferential treatment.',
    detailKm: 'ពេលចូលទៅដល់អារាម អាចារ្យ ឬអ្នកចាត់ចែងឱ្យកន្លែងណា ក៏ស្នាក់នៅកន្លែងនោះដោយរីករាយ ទោះជាកន្លែងចង្អៀត ហុយធូលី ឬជិតបង្គន់ក៏ដោយ។',
    detailEn: 'Accepts the worst corner or dusty mat without an ounce of irritation.',
    undertakingPali: 'Senāsanaloluppaṃ paṭikkhipāmi, yathāsanthatik’aṅgaṃ samādiyāmi.',
    undertakingKm: '«ខ្ញុំព្រះករុណា សូមបដិសេធនូវការលោភលន់ក្នុងទីសេនាសនៈ, សូមសមាទាននូវយថាសន្ថតិកធុតង្គជាវត្ត»។',
    undertakingEn: '«I refuse greed for comfortable lodgings; I undertake this practice.»',
    strictKm: 'មិនសូម្បីតែសួរថាកន្លែងណាស្រួល គេចង្អុលកន្លែងណាចូលកន្លែងនោះភ្លាម។',
    strictEn: 'Takes the allocated spot instantly without inquiring about conditions.',
    mediumKm: 'អាចជួសជុល ឬបោសសម្អាតកន្លែងនោះឱ្យស្អាតបាន។',
    mediumEn: 'Sweeps and cleans the assigned spot without asking to move.',
    mildKm: 'អាចផ្លាស់ប្តូរបាន ប្រសិនបើកន្លែងនោះមានគ្រោះថ្នាក់ពិតប្រាកដ។',
    mildEn: 'May relocate if the allocated space proves genuinely hazardous.',
    benefitsKm: 'មិនមានទំនាស់ជាមួយមិត្តសព្រហ្មចារី ចិត្តស្ងប់ស្រួល គ្មានការប្រៀបធៀប។',
    benefitsEn: 'Zero friction with peers; profound peace of mind free of status comparison.'
  },
  {
    id: 'dh13',
    num: 13,
    group: 'lodging',
    groupKm: 'សេនាសនៈ & វីរិយៈ',
    groupEn: 'Lodging & Energy',
    nameKm: 'នេសជ្ជិកធុតង្គ (ការមិនដេក — ឥរិយាបថ ៣ ដើរ ឈរ អង្គុយ)',
    nameEn: 'Nesajjik’aṅga (The Sitter’s Practice / Non-recliner)',
    pali: 'Nesajjik’aṅga',
    icon: '⚡',
    levelsSummaryKm: 'ថ្នាក់៖ ឧក្រឹដ្ឋ • មធ្យម • ស្រាល',
    levelsSummaryEn: '3 Grades: Strict, Medium, Mild',
    shortKm: 'បដិសេធឥរិយាបថដេកផ្អៀងខ្នងទាំងស្រុង រស់នៅតែក្នុងឥរិយាបថ ៣ (ដើរ ឈរ អង្គុយ) សូម្បីតែពេលគេងក៏អង្គុយផ្អែក។',
    shortEn: 'Rejecting the reclining posture completely; living in only three postures (sitting, standing, walking).',
    purposeKm: 'កម្ចាត់មហាសត្រូវធំ «ថីនមិទ្ធៈ» (សេចក្តីងងុយដេក និងខ្ជិលច្រអូស) ដាស់សតិឱ្យភ្ញាក់រលឹក ២៤ ម៉ោង។',
    purposeEn: 'Shatters sloth, torpor, and body-slumber, keeping mindfulness razor-sharp day and night.',
    detailKm: 'ជាធុតង្គដ៏ល្បីល្បាញបំផុតដែលព្រះមហាកស្សប និងព្រះអនុរុទ្ធបានកាន់អស់ជាច្រើនទសវត្សរ៍។ ពេលនឿយហត់ អាចអង្គុយផ្អែកជញ្ជាំង ឬខ្សែក្រវាត់ តែខ្នងមិនដែលប៉ះកម្រាលឡើយ។',
    detailEn: 'The legendary practice of Kassapa and Anuruddha; sleep is taken sitting upright in deep meditation.',
    undertakingPali: 'Seyyaṃ paṭikkhipāmi, nesajjik’aṅgaṃ samādiyāmi.',
    undertakingKm: '«ខ្ញុំព្រះករុណា សូមបដិសេធនូវការដេក, សូមសមាទាននូវអង្គនៃភិក្ខុអ្នកកាន់ការអង្គុយជាវត្ត»។',
    undertakingEn: '«I refuse lying down; I undertake the sitter’s practice.»',
    strictKm: 'មិនប្រើខ្នើយ មិនផ្អែកជញ្ជាំង អង្គុយតម្កល់កាយឱ្យត្រង់ជានិច្ច។',
    strictEn: 'Never leans against walls, cushions, or backrests; sits upright independently.',
    mediumKm: 'អាចផ្អែកខ្នងនឹងជញ្ជាំង ឬដើមឈើពេលងងុយខ្លាំង។',
    mediumEn: 'May lean back against walls, trees, or meditation straps.',
    mildKm: 'អាចប្រើពូក ឬខ្នើយកល់ខ្នងក្នុងឥរិយាបថអង្គុយ។',
    mildEn: 'May use back supports and cushions while maintaining the seated posture.',
    benefitsKm: 'កម្ចាត់មោហៈ និងសេចក្តីងងុយដេក ចិត្តមិនរួញរា ងាយសម្រេចឈាន និងវិបស្សនាញាណយ៉ាងឆាប់រហ័ស។',
    benefitsEn: 'Decimates mental dullness; transforms night into an unbroken crucible of awakening.'
  }
]

const getGroupCount = (groupId) => {
  if (groupId === 'all') return dhutangas.length
  return dhutangas.filter(d => d.group === groupId).length
}

const filteredDhutangas = computed(() => {
  if (activeGroup.value === 'all') return dhutangas
  return dhutangas.filter(d => d.group === activeGroup.value)
})

function openModal(dh) {
  selectedDhutanga.value = dh
}

function closeModal() {
  selectedDhutanga.value = null
}
</script>

<style scoped>
.modal-pop-enter-active,
.modal-pop-leave-active {
  transition: opacity 0.22s ease;
}

.modal-pop-enter-from,
.modal-pop-leave-to {
  opacity: 0;
}

.modal-pop-enter-active .card-paper,
.modal-pop-leave-active .card-paper {
  transition: transform 0.24s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.22s ease;
}

.modal-pop-enter-from .card-paper,
.modal-pop-leave-to .card-paper {
  opacity: 0;
  transform: translateY(20px);
}

.modal-pop-enter-to .card-paper,
.modal-pop-leave-from .card-paper {
  opacity: 1;
  transform: translateY(0);
}
</style>
