<template>
  <div class="fade-up">
    <!-- Chapter Header -->
    <p class="chapter-label">{{ t('ច្បាប់ធម្មជាតិសកលលោក — ធម្មនិយាម', 'UNIVERSAL COSMIC LAWS — NIYĀMA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('ធម្មនិយាម ៥ — ច្បាប់ធម្មជាតិនៃសកលលោក', 'The 5 Universal Cosmic Laws of Nature') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ក្នុងព្រះពុទ្ធសាសនា ដំណើរវិវត្តនៃសកលលោក មិនមែនកើតឡើងដោយព្រះអាទិទេព ឬដោយចៃដន្យគ្មានហេតុផលឡើយ។ ព្រះអដ្ឋកថាចារ្យបានពន្យល់ពី «ធម្មនិយាម ៥» (Five Cosmic Niyāmas) ដែលគ្រប់គ្រងរាល់ចលនានៃរូបធាតុ ជីវសាស្ត្រ ចិត្តវិទ្យា ច្បាប់កម្មផល និងសច្ចធម៌នៃការត្រាស់ដឹង។ ការយល់ដឹងពីច្បាប់ទាំង ៥ នេះ ជួយឱ្យយើងមើលឃើញទំនាក់ទំនងរវាងវិទ្យាសាស្ត្រ និងព្រះធម៌យ៉ាងជ្រាលជ្រៅ។', 'In Buddhist cosmology, the universe operates not by supernatural whim nor by random chance, but through five fundamental natural orders (Niyāmas). These laws govern physical phenomena, biological heredity, mental processing, moral retribution, and spiritual liberation.') }}
    </p>

    <!-- Overview Quote -->
    <div class="verse-box p-5 sm:p-6 mt-6 rounded-2xl text-center space-y-2 border">
      <span class="text-xs font-bold uppercase tracking-wider block" :style="{ color: 'var(--accent-bright)' }">
        🌌 {{ t('សកលលោកដំណើរការតាមហេតុបច្ច័យ មិនមែនតាមការប្រាថ្នា', 'The Universe Operates by Conditions, Not Whims') }}
      </span>
      <p class="text-xs sm:text-sm md:text-base font-semibold leading-relaxed" :style="{ color: 'var(--ink)' }">
        {{ t('«មិនថាព្រះតថាគតកើតឡើងក្តី មិនកើតឡើងក្តី ធាតុធម្មជាតិនោះ ឋិតនៅជាធម្មតាតាមធម្មតា គឺច្បាប់ធម្មជាតិ»', '"Whether Tathāgatas arise or not, this natural order remains — the fixed law of nature (Dhamma-niyāmatā)."') }}
      </p>
      <p class="paali text-xs" :style="{ color: 'var(--accent)' }">
        Uppādā vā tathāgatānaṃ anuppādā vā tathāgatānaṃ ṭhitāva sā dhātu dhammaṭṭhitatā dhammaniyāmatā.
      </p>
    </div>

    <!-- 5 Niyāma Cards -->
    <div class="space-y-4 mt-8">
      <div
        v-for="(n, idx) in niyamas"
        :key="n.pali"
        @click="openModal(n, idx)"
        class="card-paper card-paper-hover p-5 sm:p-6 rounded-2xl cursor-pointer border transition-all duration-200 hover:-translate-y-0.5"
      >
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-start gap-3.5">
            <span class="text-3xl sm:text-4xl p-2.5 rounded-2xl border shrink-0" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
              {{ n.icon }}
            </span>
            <div class="space-y-1">
              <div class="flex items-center gap-2 flex-wrap">
                <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">
                  #{{ khNum(idx + 1) }}
                </span>
                <h3 class="font-display font-bold text-base sm:text-xl" :style="{ color: 'var(--ink)' }">
                  {{ t(n.nameKm, n.nameEn) }}
                </h3>
                <span class="paali text-xs font-semibold px-2 py-0.5 rounded" :style="{ background: 'var(--bg-card-2)', color: 'var(--accent)' }">
                  {{ n.pali }}
                </span>
              </div>

              <!-- Science comparison badge -->
              <span class="text-[11px] font-bold px-2 py-0.5 rounded-full inline-block mt-0.5" :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                🔬 {{ t(n.fieldKm, n.fieldEn) }}
              </span>

              <p class="text-xs sm:text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                {{ t(n.shortKm, n.shortEn) }}
              </p>
            </div>
          </div>

          <div class="shrink-0 flex items-center gap-1 text-xs font-bold mt-1" :style="{ color: 'var(--accent-bright)' }">
            <span class="hidden sm:inline">{{ t('ស្វែងយល់', 'Explore') }}</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Harmony of Science & Dhamma Box -->
    <div class="card-paper p-5 sm:p-7 rounded-2xl mt-8 space-y-3 border">
      <h3 class="font-display font-bold text-lg sm:text-xl" :style="{ color: 'var(--ink)' }">
        ⚖️ {{ t('ហេតុអ្វីមិនមែនអ្វីៗគ្រប់យ៉ាងសុទ្ធតែបណ្តាលមកពីកម្មចាស់?', 'Why Not Everything is Caused by Past Kamma') }}
      </h3>
      <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('មនុស្សជាច្រើនយល់ច្រឡំថា «ពេលឈឺក្បាល ពេលមេឃភ្លៀង ឬដើមឈើងាប់ សុទ្ធតែមកពីកម្មចាស់»។ ព្រះពុទ្ធទ្រង់បដិសេធទស្សនៈជ្រុលនិយមនេះ (Sivaka Sutta, SN 36.21) ដោយបញ្ជាក់ថា ជំងឺនិងបាតុភូតមួយចំនួនកើតឡើងដោយសារ «ធាតុអាកាសធាតុ (ឧតុ)», «ជីវសាស្ត្រ (ពីជ)», ឬ «អាហារមិនត្រូវ»។ កម្មនិយាម គ្រាន់តែជាច្បាប់មួយក្នុងចំណោមច្បាប់ទាំង ៥ ប៉ុណ្ណោះ។ ការយល់ដឹងនេះជួយឱ្យយើងមិនធ្លាក់ចូលក្នុងទស្សនៈព្រហ្មលិខិត ឬវាសនានិយមឡើយ!', 'The Buddha firmly rejected the fatalist view that "everything is caused by past karma" (SN 36.21). Sickness and environmental shifts can result from climate (Utu), biological imbalance (Bīja), or improper diet. Kamma is only one of the five natural laws — freeing us from passive fatalism.') }}
      </p>
    </div>

    <!-- DETAIL POP-UP MODAL -->
    <Teleport to="body">
      <transition name="modal-pop">
        <div
          v-if="activeNiyama"
          class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6"
          style="background: rgba(12, 10, 7, 0.78); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);"
          @click.self="closeModal"
          role="dialog"
          aria-modal="true"
        >
          <div
            class="card-paper relative w-full max-w-2xl lg:max-w-3xl max-h-[92dvh] sm:max-h-[88dvh] flex flex-col rounded-t-3xl sm:rounded-2xl overflow-hidden shadow-2xl border-t-2 sm:border-2"
            :style="{ background: 'var(--bg-card)', borderColor: 'var(--border-strong)' }"
          >
            <!-- Mobile Grab Handle -->
            <div class="sm:hidden pt-2.5 pb-1 flex justify-center shrink-0">
              <div class="w-12 h-1.5 rounded-full" style="background: var(--ink-muted); opacity: 0.35;"></div>
            </div>

            <!-- Modal Header -->
            <div
              class="p-4 sm:p-5 flex items-start justify-between gap-3 border-b shrink-0"
              :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }"
            >
              <div class="flex items-center gap-3 min-w-0 flex-1">
                <span class="text-3xl sm:text-4xl p-2 rounded-2xl border shrink-0" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
                  {{ activeNiyama.icon }}
                </span>
                <div class="min-w-0 flex-1">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">
                      #{{ khNum(activeNiyamaIndex + 1) }} / ៥
                    </span>
                    <h3 class="font-display text-base sm:text-xl font-bold leading-snug" :style="{ color: 'var(--ink)' }">
                      {{ t(activeNiyama.nameKm, activeNiyama.nameEn) }}
                    </h3>
                  </div>
                  <p class="paali text-xs mt-0.5" :style="{ color: 'var(--accent)' }">
                    {{ activeNiyama.pali }} · {{ t(activeNiyama.fieldKm, activeNiyama.fieldEn) }}
                  </p>
                </div>
              </div>

              <button
                @click="closeModal"
                class="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm sm:text-base shrink-0 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                :style="{ background: 'var(--bg-card)', color: 'var(--ink)', border: '1px solid var(--border)' }"
                :aria-label="t('បិទផ្ទាំង', 'Close modal')"
              >
                ✕
              </button>
            </div>

            <!-- Decorative Gold Line -->
            <div class="h-[2px] w-full shrink-0" style="background: linear-gradient(90deg, transparent, var(--accent) 30%, var(--gold) 50%, var(--accent) 70%, transparent); opacity: 0.6;"></div>

            <!-- Modal Content -->
            <div class="p-5 sm:p-7 overflow-y-auto space-y-4 text-xs sm:text-sm md:text-base leading-relaxed overscroll-contain">
              <!-- Definition Box -->
              <div class="verse-box p-4 rounded-xl space-y-1">
                <span class="text-xs font-bold uppercase block" :style="{ color: 'var(--accent-bright)' }">
                  📜 {{ t('ខ្លឹមសារ និងនិយមន័យក្បួនធម៌', 'Core Definition & Principle') }}
                </span>
                <p class="font-medium text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink)' }">
                  {{ t(activeNiyama.detailKm, activeNiyama.detailEn) }}
                </p>
              </div>

              <!-- Examples in the Real World -->
              <div class="p-4 rounded-xl space-y-1.5 border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                <span class="text-xs font-bold uppercase tracking-wide block" :style="{ color: 'var(--accent)' }">
                  🌍 {{ t('ឧទាហរណ៍ជាក់ស្តែងក្នុងធម្មជាតិ (Natural Examples):', 'Real World Examples:') }}
                </span>
                <ul class="tick-list space-y-1 mt-1 text-xs sm:text-sm" :style="{ color: 'var(--ink-soft)' }">
                  <li v-for="(ex, exIdx) in activeNiyama.examples" :key="exIdx">
                    <span>{{ t(ex.km, ex.en) }}</span>
                  </li>
                </ul>
              </div>

              <!-- Practical Life Application -->
              <div class="p-4 rounded-xl space-y-1.5 border" :style="{ background: 'var(--accent-soft)', borderColor: 'var(--border-strong)' }">
                <span class="text-xs font-bold uppercase tracking-wide block" :style="{ color: 'var(--accent)' }">
                  💡 {{ t('មេរៀន និងទស្សនវិជ្ជាជីវិត (Life Application):', 'Life Wisdom & Application:') }}
                </span>
                <p class="leading-relaxed font-medium" :style="{ color: 'var(--ink)' }">
                  {{ t(activeNiyama.applicationKm, activeNiyama.applicationEn) }}
                </p>
              </div>
            </div>

            <!-- Sticky Footer with Reader Controls -->
            <div
              class="p-3 sm:p-4 border-t flex items-center justify-between gap-2 shrink-0 flex-wrap sm:flex-nowrap"
              :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }"
            >
              <button
                type="button"
                @click="prevNiyama"
                :disabled="activeNiyamaIndex <= 0"
                class="px-3 sm:px-4 py-2 rounded-xl border text-xs font-bold inline-flex items-center gap-1.5 transition cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed hover:bg-black/5 dark:hover:bg-white/5 active:scale-95"
                :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--ink)' }"
              >
                ← {{ t('មុន', 'Previous') }}
              </button>

              <span class="text-xs font-mono font-bold order-3 sm:order-2 w-full sm:w-auto text-center py-1 sm:py-0" :style="{ color: 'var(--ink-muted)' }">
                #{{ khNum(activeNiyamaIndex + 1) }} / ៥
              </span>

              <div class="flex items-center gap-2 order-2 sm:order-3">
                <button
                  type="button"
                  @click="nextNiyama"
                  :disabled="activeNiyamaIndex >= niyamas.length - 1"
                  class="px-3 sm:px-4 py-2 rounded-xl border text-xs font-bold inline-flex items-center gap-1.5 transition cursor-pointer disabled:opacity-35 disabled:cursor-not-allowed hover:bg-black/5 dark:hover:bg-white/5 active:scale-95"
                  :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--ink)' }"
                >
                  {{ t('បន្ទាប់', 'Next') }} →
                </button>

                <button
                  type="button"
                  @click="closeModal"
                  class="lang-pick px-4 py-2 text-xs font-semibold on shrink-0"
                >
                  {{ t('បិទ', 'Close') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  if (n === null || n === undefined) return ''
  return String(n).split('').map(d => khDigits[Number(d)] ?? d).join('')
}

const activeNiyama = ref(null)

const niyamas = [
  {
    id: 1,
    icon: '🌧️',
    pali: 'Utu-niyāma',
    nameKm: '១. ឧតុនិយាម (ច្បាប់រូបធាតុ និងអាកាសធាតុ)',
    nameEn: '1. Utu-Niyāma (Physical Inorganic Order)',
    fieldKm: 'រូបវិទ្យា & ឧតុនិយម (Physics & Meteorology)',
    fieldEn: 'Physics, Thermodynamics & Climate',
    shortKm: 'ច្បាប់ធម្មជាតិនៃរូបធាតុអសរីរាង្គ រដូវកាល កម្តៅ ត្រជាក់ ភ្លៀង ខ្យល់ និងទំនាញផែនដី។',
    shortEn: 'Physical inorganic laws governing seasonal succession, wind, rain, temperature, and matter.',
    detailKm: 'ឧតុនិយាម គឺជាច្បាប់ដែលគ្រប់គ្រងពិភពរូបធាតុដែលគ្មានវិញ្ញាណ ដូចជាការផ្លាស់ប្តូរនៃរដូវប្រាំង រដូវវស្សា ដំណើរវិលជុំនៃភព ការកកើតដី ទឹក ភ្លើង ខ្យល់ និងច្បាប់ទែម៉ូឌីណាមិក។ បាតុភូតទាំងនេះកើតឡើងដោយសារធាតុរូបវិទ្យា មិនមែនជាការដាក់ទោសរបស់អាទិទេពឡើយ។',
    detailEn: 'Governs all non-living physical processes: climatic rhythms, geological transformations, and the laws of physics.',
    examples: [
      { km: 'រដូវកាលផ្លាស់ប្តូរទៀងទាត់ (ប្រាំង, វស្សា, រំហើយ) តាមដំណើរតារាសាស្ត្រ', en: 'Regular seasonal cycles governed by planetary mechanics' },
      { km: 'ទឹកកកត្រូវតែរលាយនៅពេលជួបកម្តៅ ហើយទឹកត្រូវតែកកនៅពេលត្រជាក់ក្រោម ០ អង្សា', en: 'Thermodynamics: water freezing and boiling at fixed physical thresholds' },
      { km: 'ការរញ្ជួយដី ភ្នំភ្លើង និងជំនោរទឹកសមុទ្រតាមកម្លាំងទំនាញព្រះច័ន្ទ', en: 'Tectonic shifts and ocean tides governed by gravitational mechanics' }
    ],
    applicationKm: 'យល់ពីធម្មជាតិនៃរូបកាយ៖ កាយនេះត្រូវការសម្លៀកបំពាក់ ជម្រក និងថ្នាំ ព្រោះវាស្ថិតនៅក្រោមច្បាប់ឧតុនិយាម។ ពេលមានជំងឺដោយសារអាកាសធាតុ ត្រូវព្យាបាលតាមក្បួនវិទ្យាសាស្ត្រ មិនត្រូវគិតតែរឿងកម្មផលឡើយ។',
    applicationEn: 'Care for the body wisely knowing it obeys physical laws; do not neglect medical science under the guise of karma.'
  },
  {
    id: 2,
    icon: '🌱',
    pali: 'Bīja-niyāma',
    nameKm: '២. ពីជនិយាម (ច្បាប់ជីវសាស្ត្រ និងពូជពង្ស)',
    nameEn: '2. Bīja-Niyāma (Biological & Genetic Order)',
    fieldKm: 'ជីវវិទ្យា & ហ្សែន (Biology & Genetics)',
    fieldEn: 'Genetics, Botany & Heredity',
    shortKm: 'ច្បាប់នៃគ្រាប់ពូជ រុក្ខជាតិ និងតំណពូជជីវសាស្ត្រ — ដាំពូជណា បានផ្លែផ្កានោះ។',
    shortEn: 'Biological order of heredity and plant growth — seeds reproducing true to their genetic kind.',
    detailKm: 'ពីជនិយាម គ្រប់គ្រងលើការបន្តពូជនៃសារពាង្គកាយមានជីវិត រុក្ខជាតិ សត្វ និងកោសិកាហ្សែន (DNA)។ គ្រាប់ស្រូវតែងដុះចេញជាស្រូវ គ្រាប់ស្វាយតែងដុះចេញជាស្វាយ មិនដែលគ្រាប់ម្ទេសដុះចេញជាផ្លែទំពាំងបាយជូរឡើយ។',
    detailEn: 'Governs cell replication, genetic inheritance, and botanical propagation across all living organisms.',
    examples: [
      { km: '«យាទិសំ វបតេ ពីជំ តាទិសំ លភតេ ផលំ» — ដាំគ្រាប់ពូជយ៉ាងណា រមែងបានផ្លែផ្កាយ៉ាងនោះ', en: '"As the seed is sown, so is the fruit reaped" — genetic fidelity' },
      { km: 'កូនកាត់តែងទទួលលក្ខណៈជីវសាស្ត្រពីមេបា តាមច្បាប់តំណពូជ', en: 'Offspring inheriting traits from parents via biological heredity' },
      { km: 'ផ្កាឈូករមែងរីកនៅពេលថ្ងៃ និងបិទនៅពេលយប់តាមចរន្តជីវសាស្ត្រ', en: 'Circadian plant rhythms responding to solar exposure' }
    ],
    applicationKm: 'ចង់បានផលល្អ ត្រូវដាំពូជល្អ៖ ការសិក្សា ការហ្វឹកហាត់កាយសម្បទា និងការបណ្តុះទម្លាប់សុខភាពល្អ គឺជាការដាំពូជជីវសាស្ត្រដ៏ត្រឹមត្រូវក្នុងជីវិត។',
    applicationEn: 'Sow good nutritional and behavioral seeds today to reap healthy biological vitality tomorrow.'
  },
  {
    id: 3,
    icon: '🧠',
    pali: 'Citta-niyāma',
    nameKm: '៣. ចិត្តនិយាម (ច្បាប់ដំណើរនៃចិត្ត)',
    nameEn: '3. Citta-Niyāma (Psychological & Mental Order)',
    fieldKm: 'ចិត្តវិទ្យា & ប្រសាទវិទ្យា (Psychology & Cognitive Science)',
    fieldEn: 'Cognitive Science & Mind Dynamics',
    shortKm: 'ច្បាប់នៃលំដាប់លំហូរចិត្ត (វីថិចិត្ត) ការដឹងអារម្មណ៍ និងការចងចាំ។',
    shortEn: 'Psychic order governing the precise sequence of mind-moments (Citta-Vīthi) and cognition.',
    detailKm: 'ចិត្តនិយាម ពន្យល់ពីយន្តការនៃចិត្តដែលកើត-រលត់ក្នុងល្បឿនរាប់កោដិដួងក្នុងមួយពព្រិចភ្នែក។ ចិត្តនីមួយៗកើតឡើងតាមលំដាប់លំដោយជាក់លាក់ (ភវង្គ -> អាវជ្ជនៈ -> បញ្ចវិញ្ញាណ -> សម្បដិច្ឆន្នៈ -> សន្តីរណៈ -> វុដ្ឋបនៈ -> ជវនៈ) ដោយគ្មានចិត្តណាអាចលោតផ្លោះលំដាប់នេះបានឡើយ។',
    detailEn: 'Governs the inviolable sequence of cognitive series: how perception, feeling, interpretation, and response proceed.',
    examples: [
      { km: 'ភ្នែកប៉ះរូប -> កើតការឃើញ -> ចិត្តទទួល -> ពិចារណា -> ជវនៈសេពអារម្មណ៍ (លំដាប់វីថិចិត្ត)', en: 'Inviolable cognitive flow: sensation -> perception -> evaluation -> emotional response' },
      { km: 'កាលណាមានសេចក្តីភ័យខ្លាច កាយតែងបញ្ចេញអ័រម៉ូនញ័រទ្រូងតាមប្រតិកម្មចិត្ត', en: 'Somatic feedback loops: mental panic instantly triggering sympathetic adrenaline release' },
      { km: 'ការចម្រើនសមាធិតែងឆ្លងកាត់វិតក្ក វិចារ បីតិ សុខ ឯកគ្គតា តាមលំដាប់ឈាន', en: 'Ascension through Jhāna factors according to natural psychological deepening' }
    ],
    applicationKm: 'ហ្វឹកហាត់ចិត្តដោយសតិ៖ ដឹងថាកំហឹង ឬសេចក្តីលោភលន់កើតឡើងតាមច្បាប់ចិត្តនិយាម។ កាលណាយើងមាន «សតិ» ដឹងទាន់ ជវនចិត្តនឹងប្រែពីអកុសលមកជាកុសលភ្លាមៗ។',
    applicationEn: 'Master mental dynamics: seeing anger as conditioned mental states, allowing mindfulness to redirect the cognitive stream.'
  },
  {
    id: 4,
    icon: '⚖️',
    pali: 'Kamma-niyāma',
    nameKm: '៤. កម្មនិយាម (ច្បាប់នៃសីលធម៌ និងកម្មផល)',
    nameEn: '4. Kamma-Niyāma (Moral Causality Order)',
    fieldKm: 'សីលធម៌ & យុត្តិធម៌ធម្មជាតិ (Moral Law & Cause-Effect)',
    fieldEn: 'Ethical Causation & Karmic Fruition',
    shortKm: 'ច្បាប់នៃចេតនា — អំពើល្អនាំមកនូវសុខ អំពើអាក្រក់នាំមកនូវទុក្ខ ជៀសមិនផុត។',
    shortEn: 'Order of moral cause and effect: intentional actions inevitably bear corresponding fruits.',
    detailKm: 'កម្មនិយាម ជាច្បាប់សីលធម៌ដ៏យុត្តិធម៌បំផុតនៃធម្មជាតិ។ មិនមែនអាទិទេពអង្គុយកត់ត្រាដាក់ទោស ឬឱ្យរង្វាន់ឡើយ ប៉ុន្តែ «ចេតនា» (Volition) ខ្លួនឯង គឺជាថាមពលដែលបន្សល់ទុកជាវិបាកកម្ម។ អ្នកសាងអំពើល្អ រមែងទទួលផលជាសេចក្តីស្ងប់ និងសុគតិភព អ្នកសាងអំពើអាក្រក់ រមែងក្តៅក្រហាយ និងធ្លាក់ទៅកាន់ទុគ្គតិភព។',
    detailEn: 'The intrinsic moral law: volitional actions create psychical traces that ripen inevitably into pleasant or painful experiences.',
    examples: [
      { km: '«កល្យាណការី កល្យាណំ បាបការី ច បាបកំ» — ធ្វើល្អបានល្អ ធ្វើអាក្រក់បានអាក្រក់', en: '"The doer of good gathers good; the doer of evil gathers evil"' },
      { km: 'អ្នកមានចិត្តមេត្តា តែងដេកលក់ស្រួល ភ្ញាក់ឡើងជាសុខ មិនយល់សប្តិអាក្រក់ (វិបាកនៃមេត្តា)', en: 'Loving-kindness instantly yielding peaceful sleep and relaxed cardiovascular rhythms' },
      { km: 'អំពើបៀតបៀនជីវិតអ្នកដទៃ តែងត្រឡប់មកវិញជាសេចក្តីភ័យខ្លាច និងអាយុខ្លី', en: 'Cruelty returning as internal paranoia, distress, and karmic repercussions' }
    ],
    applicationKm: 'ជាម្ចាស់លើវាសនាខ្លួនឯង៖ មិនត្រូវបន្ទោសព្រហ្មលិខិត ឬអ្នកដទៃឡើយ។ បច្ចុប្បន្នភាពស្ថិតក្នុងដៃយើង រាល់ការសម្រេចចិត្តល្អក្នុងពេលនេះ គឺជាការកសាងអនាគតដ៏ភ្លឺស្វាង។',
    applicationEn: 'Absolute personal accountability: recognizing yourself as the sole architect of your spiritual destiny.'
  },
  {
    id: 5,
    icon: '☸',
    pali: 'Dhamma-niyāma',
    nameKm: '៥. ធម្មនិយាម (ច្បាប់សច្ចធម៌សកល)',
    nameEn: '5. Dhamma-Niyāma (Universal Spiritual Order)',
    fieldKm: 'ទស្សនវិជ្ជាសច្ចធម៌ & និព្វាន (Universal Spiritual Reality)',
    fieldEn: 'Spiritual Order, Tilakkhaṇa & Awakening',
    shortKm: 'ច្បាប់នៃត្រៃលក្ខណ៍ (អនិច្ចំ ទុក្ខំ អនត្តា) និងដំណើរឆ្ពោះទៅកាន់ការត្រាស់ដឹង និងព្រះនិព្វាន។',
    shortEn: 'Universal spiritual order: impermanence, suffering, non-self, and the certainty of liberation.',
    detailKm: 'ធម្មនិយាម គឺជាច្បាប់កំពូលដែលគ្របដណ្តប់លើអ្វីៗទាំងអស់ក្នុងលោក។ វាបញ្ជាក់ថា សង្ខារធម៌ទាំងពួងមិនទៀង (អនិច្ចំ) ជាទុក្ខ (ទុក្ខំ) និងមិនមែនជារបស់យើង (អនត្តា)។ ព្រមទាំងកំណត់នូវដំណើរនៃព្រះពោធិសត្វ ការត្រាស់ដឹងជាព្រះពុទ្ធ និងអរិយមគ្គដែលនាំទៅរំលត់ទុក្ខទាំងស្រុងក្នុងព្រះនិព្វាន។',
    detailEn: 'The supreme spiritual dimension: the three characteristics of reality and the immutable path to full awakening.',
    examples: [
      { km: 'សព្វេ សង្ខារា អនិច្ចា — អ្វីៗដែលកើតឡើង សុទ្ធតែត្រូវរលត់ទៅវិញជាធម្មតា', en: 'All conditioned phenomena are impermanent — the universal law of entropy and change' },
      { km: 'ព្រះមហាក្សត្រ មហាសេដ្ឋី ឬអ្នកក្រ សុទ្ធតែត្រូវចាស់ ឈឺ និងស្លាប់ដូចគ្នា', en: 'No being escapes decay, sickness, and death regardless of earthly status' },
      { km: 'អ្នកប្រតិបត្តិមគ្គ ៨ យ៉ាងត្រឹមត្រូវ រមែងសម្រេចព្រះនិព្វានជាពិតប្រាកដ', en: 'The Eightfold Path unfailingly leads to the cessation of suffering' }
    ],
    applicationKm: 'រស់នៅដោយបញ្ញាព្រលែងទុក្ខ៖ កាលណាដឹងថាអ្វីៗស្ថិតក្រោមច្បាប់ធម្មនិយាម យើងនឹងមិនតក់ស្លុតពេលមានការប្រែប្រួលក្នុងជីវិតឡើយ ព្រមទាំងតាំងចិត្តបដិបត្តិធម៌ដើម្បីសេរីភាពពិត។',
    applicationEn: 'Live with unshakeable serenity: knowing that change is the law of nature, embrace non-clinging.'
  }
]

const activeNiyamaIndex = computed(() => {
  if (!activeNiyama.value) return 0
  const idx = niyamas.findIndex(n => n.id === activeNiyama.value.id)
  return idx !== -1 ? idx : 0
})

function lockBodyScroll() {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

function unlockBodyScroll() {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

function openModal(n, idx) {
  activeNiyama.value = n
  lockBodyScroll()
}

function closeModal() {
  activeNiyama.value = null
  unlockBodyScroll()
}

function prevNiyama() {
  const idx = activeNiyamaIndex.value
  if (idx > 0) {
    activeNiyama.value = niyamas[idx - 1]
  }
}

function nextNiyama() {
  const idx = activeNiyamaIndex.value
  if (idx < niyamas.length - 1) {
    activeNiyama.value = niyamas[idx + 1]
  }
}

function handleKeydown(e) {
  if (!activeNiyama.value) return
  if (e.key === 'Escape') closeModal()
  else if (e.key === 'ArrowLeft') prevNiyama()
  else if (e.key === 'ArrowRight') nextNiyama()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  unlockBodyScroll()
})
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
  transition: transform 0.26s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.22s ease;
}

.modal-pop-enter-from .card-paper {
  opacity: 0;
  transform: translateY(28px) scale(0.97);
}

.modal-pop-leave-to .card-paper {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

@media (max-width: 639px) {
  .modal-pop-enter-from .card-paper,
  .modal-pop-leave-to .card-paper {
    transform: translateY(100%);
  }
}
</style>
