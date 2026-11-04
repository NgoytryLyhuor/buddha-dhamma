<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🌱 {{ t('អង្គុត្តរនិកាយ ចតុក្កនិបាត · វុឌ្ឍិសូត្រ (AN 4.248)', 'Aṅguttara Nikāya 4.248 · Vuddhi Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('វុឌ្ឍិធម៌ ៤ ៖ កត្តា ៤ យ៉ាងនៃការចម្រើនបញ្ញា', 'Vuddhi 4: Four Factors of Spiritual Growth') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'វុឌ្ឍិធម៌ គឺជាធម៌ជាដែនបង្កើត និងចម្រើននូវបញ្ញា ៤ ប្រការ (សេពគប់សប្បុរស, ស្តាប់ព្រះសទ្ធម្ម, ពិចារណាដោយឧបាយប្រាជ្ញា, និងការបដិបត្តិធម៌សមគួរដល់ធម៌)។ ធម៌ទាំង ៤ នេះ ក៏ត្រូវបានគេស្គាល់ថាជា «អង្គនៃសោតាបត្តិផល» (Sotāpattiyaṅga) ដែលជាខ្សែច្រវាក់នាំសត្វលោកឱ្យសម្រេចមគ្គផលដំបូងបង្អស់។',
            'Vuddhidhamma denotes the 4 indispensable conditions for cultivating noble wisdom: Associating with the Wise, Listening to True Dhamma, Wise Reflection, and Authentic Practice. In the Saṁyutta Nikāya, these exact four factors form the Sotāpattiyaṅgas—the royal road culminating in Stream-Entry.'
          ) }}
        </p>
      </div>
    </section>

    <!-- The 4-Step Pipeline Visual -->
    <div class="card-paper p-5 border space-y-3" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
      <div class="text-center max-w-lg mx-auto space-y-1">
        <span class="text-xs font-bold uppercase tracking-wider" :style="{ color: 'var(--accent)' }">
          {{ t('ខ្សែច្រវាក់នៃការចម្រើនបញ្ញា ៤ ដំណាក់កាល', 'The 4-Stage Pipeline of Wisdom') }}
        </span>
        <h3 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
          {{ t('ពីការជួបគ្រូល្អ រហូតដល់ការសម្រេចមគ្គផល', 'From Finding a Mentor to Ultimate Awakening') }}
        </h3>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
        <div v-for="(v, idx) in vuddhiList" :key="v.id"
             class="p-3.5 rounded-xl border text-center space-y-1.5 cursor-pointer transition-all hover:shadow-md"
             :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }"
             @click="toggleExpand(v.id)">
          <div class="flex items-center justify-between text-xs font-mono">
            <span class="px-2 py-0.5 rounded-full font-bold"
                  :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
              {{ t('ជំហានទី', 'Step') }} {{ khNum(idx + 1) }}
            </span>
            <span>{{ v.icon }}</span>
          </div>
          <h4 class="font-bold text-xs sm:text-sm pt-1" :style="{ color: 'var(--ink)' }">
            {{ t(v.titleK, v.titleE) }}
          </h4>
          <span class="text-[11px] font-mono block" :style="{ color: 'var(--accent)' }">{{ v.pali }}</span>
        </div>
      </div>
    </div>

    <!-- Navigation Sub-Tabs -->
    <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none touch-pan-x">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        class="lang-pick px-3.5 py-1.5 text-xs font-semibold shrink-0 whitespace-nowrap"
        :class="activeTab === tab.id ? 'on' : ''"
      >
        <span>{{ tab.icon }}</span>
        <span>{{ t(tab.titleK, tab.titleE) }}</span>
      </button>
    </div>

    <!-- TAB 1: 4 Vuddhi Cards -->
    <section v-if="activeTab === 'factors'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(item, idx) in vuddhiList"
          :key="item.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ item.icon }}
              </span>
              <span class="text-xs px-2 py-0.5 rounded-full font-mono font-bold"
                    :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                {{ t('ធម៌ទី', 'Factor') }} {{ khNum(idx + 1) }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-0.5" :style="{ color: 'var(--ink)' }">
              {{ t(item.titleK, item.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-3" :style="{ color: 'var(--accent)' }">
              {{ item.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(item.shortDescK, item.shortDescE) }}
            </p>

            <div class="p-3 rounded-xl mb-4 text-xs space-y-1" :style="{ background: 'var(--bg-card-2)' }">
              <span class="font-bold block" :style="{ color: 'var(--accent)' }">
                🎯 {{ t('សារៈសំខាន់ក្នុងការប្រតិបត្តិ៖', 'Practical Significance:') }}
              </span>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(item.significanceK, item.significanceE) }}</p>
            </div>
          </div>

          <div>
            <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold"
                 :style="{ borderColor: 'var(--border)', color: 'var(--accent)' }">
              <span>{{ t('អានការពន្យល់គម្ពីរពិស្តារ', 'Read Detailed Sutta Analysis') }}</span>
              <button
                type="button"
                @click="toggleExpand(item.id)"
                class="lang-pick px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1"
                :class="expandedId === item.id ? 'on' : ''"
              >
                <span>{{ expandedId === item.id ? t('បិទ ▲', 'Hide ▲') : t('អានលម្អិត ▼', 'Read More ▼') }}</span>
              </button>
            </div>

            <!-- Slide-down Inline Expansion -->
            <transition name="slide-down">
              <div v-if="expandedId === item.id" class="pt-4 border-t mt-3 space-y-4 text-xs sm:text-sm leading-relaxed" :style="{ borderColor: 'var(--border)' }">
                <!-- Sutta Passage -->
                <div class="p-3.5 rounded-xl border-l-4 font-serif text-xs leading-relaxed"
                     :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
                  <p class="italic mb-1 font-bold">« {{ item.suttaPali }} »</p>
                  <p class="text-xs opacity-80">— {{ t(item.suttaK, item.suttaE) }}</p>
                </div>

                <!-- Detailed Exposition -->
                <div class="space-y-1.5">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>📖</span>
                    <span>{{ t('អត្ថន័យ និងយន្តការនៃកត្តានីមួយៗ', 'Detailed Exposition') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(item.fullDescK, item.fullDescE) }}
                  </p>
                </div>

                <!-- Traps and Caveats -->
                <div class="p-3.5 rounded-xl border space-y-1.5"
                     :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>⚠️</span>
                    <span>{{ t('កំហុសឆ្គងដែលគួរជៀសវាង', 'Common Pitfalls to Avoid') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
                    {{ t(item.pitfallK, item.pitfallE) }}
                  </p>
                </div>

                <!-- Modern Practical Action -->
                <div class="p-3.5 rounded-xl space-y-1.5" :style="{ background: 'var(--bg-card-2)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>💡</span>
                    <span>{{ t('ការអនុវត្តជាក់ស្ដែងក្នុងជីវិតបច្ចុប្បន្ន', 'Modern Practical Action') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
                    {{ t(item.actionK, item.actionE) }}
                  </p>
                </div>

                <button
                  type="button"
                  @click="expandedId = null"
                  class="w-full py-1.5 rounded-lg text-center text-xs opacity-70 hover:opacity-100 cursor-pointer"
                  :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)' }"
                >
                  {{ t('បិទព័ត៌មានលម្អិត ▲', 'Close Details ▲') }}
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 2: Stream-Entry (Sotāpanna) Connection -->
    <section v-if="activeTab === 'sotapanna'" class="card-paper p-6 space-y-5">
      <div class="max-w-2xl mx-auto space-y-2 text-center">
        <span class="text-3xl">🌊</span>
        <h2 class="text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('ពីវុឌ្ឍិធម៌ ទៅកាន់ការសម្រេចសោតាបត្តិផល', 'From Vuddhi Factors to Stream-Entry') }}
        </h2>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ក្នុងសំយុត្តនិកាយ ព្រះសារីបុត្តត្ថេរបានឆ្លើយនឹងសំណួររបស់ព្រះពុទ្ធថា ធម៌ទាំង ៤ នេះហើយ គឺជា «អង្គនៃសោតាបត្តិផល» (Sotāpattiyaṅga)។ បុគ្គលណាដែលបដិបត្តិគ្រប់ទាំង ៤ ដំណាក់កាលនេះ នឹងបានសម្រេចជាព្រះសោតាបន្ន រួចផុតពីអបាយភូមិជាដាច់ខាត៖',
            'In the Saṁyutta Nikāya, Venerable Sāriputta confirmed to the Buddha that these 4 factors constitute the Sotāpattiyaṅgas. One who fulfills this 4-step sequence cuts off rebirth in lower realms forever:'
          ) }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto pt-2">
        <div v-for="(p, pIdx) in sotapannaBenefits" :key="pIdx"
             class="p-4 rounded-xl border space-y-2"
             :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="text-2xl">{{ p.icon }}</span>
            <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">
              {{ t(p.titleK, p.titleE) }}
            </h4>
          </div>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(p.descK, p.descE) }}
          </p>
        </div>
      </div>
    </section>

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

const activeTab = ref('factors')
const expandedId = ref(null)
function toggleExpand(id) { expandedId.value = expandedId.value === id ? null : id }

const tabs = [
  { id: 'factors', icon: '🌱', titleK: 'វុឌ្ឍិធម៌ទាំង ៤', titleE: '4 Growth Factors' },
  { id: 'sotapanna', icon: '🌊', titleK: 'ផ្លូវនៃសោតាបន្ន', titleE: 'Stream-Entry Path' }
]

// Reader font sizes
const readerFontSizes = [
  { label: 'A', class: 'text-sm' },
  { label: 'A+', class: 'text-base' },
  { label: 'A++', class: 'text-lg' }
]
const readerFontSizeIdx = ref(0)
function toggleReaderFontSize() {
  readerFontSizeIdx.value = (readerFontSizeIdx.value + 1) % readerFontSizes.length
}

const vuddhiList = [
  {
    id: 'sappurisa',
    icon: '🤝',
    titleK: '១. សប្បុរិសសំសេវៈ (សេពគប់សប្បុរស)',
    titleE: '1. Associating with Noble Persons',
    pali: 'Sappurisasaṁseva',
    shortDescK: 'ការចូលទៅជិត សេពគប់ និងរៀនសូត្រពីកល្យាណមិត្ត គ្រូអាចារ្យ ឬបុគ្គលដែលមានសីលធម៌ និងបញ្ញាត្រឹមត្រូវ។',
    shortDescE: 'Associating with virtuous, noble teachers and trustworthy companions who guide one away from wrongdoing.',
    significanceK: 'ជាជំហានដំបូងបង្អស់។ បើគ្មានគ្រូល្អ ឬមិត្តល្អទេ យើងគ្មានផ្លូវស្គាល់ព្រះធម៌ដ៏ត្រឹមត្រូវឡើយ។',
    significanceE: 'The irreplaceable first step. Without noble mentors, access to authentic Dhamma is impossible.',
    suttaPali: 'Cattārome bhikkhave dhammā paññāvuddhiyā saṁvattanti...',
    suttaK: 'ម្នាលភិក្ខុទាំងឡាយ ធម៌ ៤ យ៉ាងនេះ រមែងប្រព្រឹត្តទៅដើម្បីការចម្រើននៃបញ្ញា...',
    suttaE: 'Monks, these four qualities lead to the growth of noble wisdom: Association with good people...',
    fullDescK: 'សប្បុរស មិនសំដៅលើតែព្រះសង្ឃប៉ុណ្ណោះទេ តែសំដៅលើមនុស្សណាដែលមានសីល ៥ បរិសុទ្ធ មិនកុហក មិនបោកប្រាស់ និងមានចិត្តមេត្តា។ ការនៅក្បែរមនុស្សបែបនេះ ធ្វើឱ្យយើងស្រូបយកទម្លាប់ល្អ និងគំនិតស្អាតស្អំដោយមិនដឹងខ្លួន ដូចក្រដាសខ្ចប់ផ្កាក្រអូប។',
    fullDescE: 'Sappurisa encompasses anyone grounded in virtue, honesty, and compassion. Proximity to such beings subliminally infuses integrity into one’s heart, like parchment wrapped around fragrant sandalwood.',
    pitfallK: 'ការសេពគប់មនុស្សដែលគ្រាន់តែចេះទ្រឹស្តីច្រើន តែមានចរិតឆ្មើងឆ្មៃ ចូលចិត្តឈ្លោះប្រកែក ឬប្រើសាសនាដើម្បីផលប្រយោជន៍ផ្ទាល់ខ្លួន។',
    pitfallE: 'Falling for charismatic talkers who possess encyclopedic theory but harbor spiritual arrogance and mercenary motives.',
    actionK: 'ជ្រើសរើសតាមដាន (Follow) គ្រូធម៌ ឬបញ្ញវន្តដែលបង្រៀនឱ្យមានសតិ និងលះបង់ការឈ្លោះប្រកែកលើបណ្តាញសង្គម។',
    actionE: 'Curate your social feeds to follow authentic teachers who model mindfulness and humility rather than controversy.'
  },
  {
    id: 'saddhamma',
    icon: '🎧',
    titleK: '២. សទ្ធម្មស្សវណៈ (ស្តាប់ព្រះសទ្ធម្ម)',
    titleE: '2. Listening Attentively to True Dhamma',
    pali: 'Saddhammassavana',
    shortDescK: 'ការស្តាប់ អាន និងសិក្សាស្វែងយល់នូវពាក្យបង្រៀនពិតរបស់ព្រះសម្មាសម្ពុទ្ធ ដោយយកចិត្តទុកដាក់ និងផ្ចិតផ្ចង់។',
    shortDescE: 'Listening to, reading, and absorbing the authentic teachings of the Buddha with sincere openness and respect.',
    significanceK: 'ផ្លាស់ប្តូរការយល់ច្រឡំ (មិច្ឆាទិដ្ឋិ) មកជាការយល់ត្រូវ (សម្មាទិដ្ឋិ) តាមរយៈការទទួលព័ត៌មានត្រឹមត្រូវ។',
    significanceE: 'Converts ignorance into Right View by receiving pristine, uncorrupted spiritual principles.',
    suttaPali: 'Saddhammassavanaṁ paññāvuddhiyā saṁvattati...',
    suttaK: 'ការស្តាប់នូវព្រះសទ្ធម្ម រមែងប្រព្រឹត្តទៅដើម្បីការចម្រើននៃបញ្ញា...',
    suttaE: 'Listening to the True Dhamma leads to the cultivation of wisdom...',
    fullDescK: 'ការស្តាប់ធម៌ ផ្ដល់នូវអានិសង្ស ៥ ប្រការ៖ បានឮអ្វីដែលមិនធ្លាប់ឮ, ធ្វើឱ្យអ្វីដែលធ្លាប់ឮកាន់តែច្បាស់, កម្ចាត់សេចក្ដីសង្ស័យ, ធ្វើការយល់ឃើញឱ្យត្រង់, និងធ្វើឱ្យចិត្តជ្រះថ្លា។ បើគ្មានការស្តាប់ធម៌ទេ មនុស្សនឹងដើរតាមតែការស្មាន និងជំនឿខ្វាក់ខ្វាក់។',
    fullDescE: 'Listening to Dhamma delivers 5 blessings: hearing what is novel, clarifying former doubts, dispelling confusion, straightening views, and uplifting the heart. Without hearing the Word, one relies merely on speculation.',
    pitfallK: 'ស្តាប់តែដើម្បីប្រកែក ស្តាប់ដើម្បីចាប់កំហុសគ្រូ ឬស្តាប់ហើយទុកចោល មិនព្រមយកមកគិតត្រិះរិះ។',
    pitfallE: 'Listening merely to debate, find fault with the speaker, or stockpiling intellectual trivia without contemplation.',
    actionK: 'ស្តាប់ព្រះធម៌ ឬអានព្រះត្រៃបិដកយ៉ាងហោចណាស់ ១០-១៥ នាទីក្នុងមួយថ្ងៃ ដោយស្មារតីបើកចំហ។',
    actionE: 'Dedicate 10-15 minutes daily to direct Sutta study with focused, uninterrupted attentiveness.'
  },
  {
    id: 'yoniso',
    icon: '💡',
    titleK: '៣. យោនិសោមនសិការៈ (ការពិចារណាដោយឧបាយប្រាជ្ញា)',
    titleE: '3. Wise Reflection (Yonisomanasikāra)',
    pali: 'Yonisomanasikāra',
    shortDescK: 'ការយកធម៌ដែលបានស្តាប់មកត្រិះរិះ ពិចារណាដល់ឫសគល់ វែកញែករកហេតុផល និងមើលឃើញត្រៃលក្ខណ៍ក្នុងជីវិតពិត។',
    shortDescE: 'Reflecting deeply to the root causes, analyzing sensations and events through the lens of impermanence and non-self.',
    significanceK: 'ជាស្ពានចម្លងពី «ចំណេះដឹងពីការស្តាប់» (សុតមយបញ្ញា) ទៅជា «ចំណេះដឹងពីការគិត» (ចិន្តាមយបញ្ញា)។',
    significanceE: 'The vital bridge transforming borrowed book knowledge into personal, deeply digested cognitive clarity.',
    suttaPali: 'Yonisomanasikāro paññāvuddhiyā saṁvattati...',
    suttaK: 'ការធ្វើទុកក្នុងចិត្តដោយឧបាយប្រាជ្ញា រមែងប្រព្រឹត្តទៅដើម្បីការចម្រើននៃបញ្ញា...',
    suttaE: 'Wise attention leads directly to the explosion of liberating wisdom...',
    fullDescK: 'យោនិសោមនសិការៈ គឺសិល្បៈនៃការគិតត្រូវ។ មនុស្សជាច្រើនកើតទុក្ខ មិនមែនព្រោះតែកាលៈទេសៈខាងក្រៅទេ តែព្រោះតែគិតខុស (អយោនិសោមនសិការៈ)។ ពេលជួបរឿងអាក្រក់ បើចេះគិតថា «នេះជាផលនៃកម្ម ជាធម្មតារបស់លោក» ចិត្តនឹងស្ងប់ មិនកើតទោសៈឡើយ។',
    fullDescE: 'The art of wise perspective. Suffering stems not from outer events, but from unwise attention (Ayoniso). Framing difficulties through Karma and impermanence immediately dissolves resentment into philosophical calm.',
    pitfallK: 'ការគិតច្រើនរវើរវាយគ្មានគោលដៅ (Overthinking) ដែលមិនមែនជាការស្វែងយល់ហេតុផលពិត។',
    pitfallE: 'Confusing anxious overthinking and rumination with genuine root-level Dhamma inquiry.',
    actionK: 'រាល់ពេលជួបអារម្មណ៍ខឹង ឬច្រណែន ចូរសួរខ្លួនឯងថា «តើអារម្មណ៍នេះជារបស់ទៀងឬ? តើខឹងនេះចំណេញអ្វី?»។',
    actionE: 'When resentment arises, immediately question: “Is this mental flare permanent? What does burning myself achieve?”'
  },
  {
    id: 'patipatti',
    icon: '🧘',
    titleK: '៤. ធម្មានុធម្មបដិបត្តិ (ការបដិបត្តិធម៌សមគួរដល់ធម៌)',
    titleE: '4. Practicing Dhamma in Accord with Dhamma',
    pali: 'Dhammānudhammapaṭipatti',
    shortDescK: 'ការយកធម៌មកអនុវត្តជាក់ស្ដែងលើកាយ វាចា ចិត្ត តាមរយៈការរក្សាសីល សមាធិ និងវិបស្សនា រហូតសម្រេចមគ្គផល។',
    shortDescE: 'Putting teachings into rigorous embodied practice: living the precepts, purifying the mind, and walking the Eightfold Path.',
    significanceK: 'ជាគោលដៅចុងក្រោយ បង្កើតជា «ភាវនាមយបញ្ញា» (បញ្ញាដែលកើតពីការដឹងផ្ទាល់) ដែលអាចរំលត់កិលេសបាន។',
    significanceE: 'The ultimate culmination: experiential insight (Bhāvanāmayā-paññā) that decisively severs defilements.',
    suttaPali: 'Dhammānudhammapaṭipatti paññāvuddhiyā saṁvattati...',
    suttaK: 'ការបដិបត្តិធម៌សមគួរដល់ធម៌ រមែងប្រព្រឹត្តទៅដើម្បីការចម្រើននៃបញ្ញា...',
    suttaE: 'Practicing the Dhamma in accordance with the Dhamma leads to the supreme growth of wisdom.',
    fullDescK: 'ទោះបីជាសេពគប់គ្រូល្អ ស្តាប់ធម៌ច្រើន និងចេះគិតយ៉ាងណា បើមិនព្រមអង្គុយសមាធិ មិនព្រមសង្រួមសីល ធានាថានឹងមិនអាចសម្រេចធម៌បានឡើយ ដូចអ្នកអានរូបមន្តថ្នាំតែមិនព្រមលេបថ្នាំ។ ការបដិបត្តិសមគួរដល់ធម៌ គឺការដើរលើផ្លូវអរិយមគ្គទាំង ៨ អង្គ ដោយស្មោះត្រង់។',
    fullDescE: 'Even with the greatest teacher, audio library, and philosophy, without embodied sitting, ethical restraint, and mindfulness, no awakening can dawn—like reading medical prescriptions without swallowing pills. Authentic practice fulfills the Noble Eightfold Path.',
    pitfallK: 'ការចង់បានលទ្ធផលលឿនពេក បដិបត្តិតែពេលមានទុក្ខ ឬបដិបត្តិដោយមានលោភៈចង់បានឫទ្ធិអំណាច។',
    pitfallE: 'Practicing only during acute heartbreak, rushing for instant enlightenment, or meditating out of spiritual greed.',
    actionK: 'តាំងចិត្តរក្សាសីល ៥ ឱ្យបរិសុទ្ធជារៀងរាល់ថ្ងៃ និងចម្រើនសតិដឹងកាយដឹងចិត្តក្នុងរាល់ឥរិយាបថ។',
    actionE: 'Hold the 5 Precepts impeccably and anchor mindful awareness in every bodily posture throughout the day.'
  }
]

const sotapannaBenefits = [
  {
    icon: '🛡️',
    titleK: '១. រួចផុតពីអបាយភូមិ ៤ ជាអមតៈ',
    titleE: '1. Immunity from Lower Realms',
    descK: 'ព្រះសោតាបន្ននឹងមិនធ្លាក់ទៅកើតក្នុងនរក ប្រេត អសុរកាយ ឬតិរច្ឆានឡើយ ដោយអំណាចនៃសីលបរិសុទ្ធ។',
    descE: 'Permanent immunity from rebirth in hells, ghost spheres, or animal realms through unbroken virtue.'
  },
  {
    icon: '⏳',
    titleK: '២. កើតយ៉ាងច្រើនបំផុតត្រឹម ៧ ជាតិ',
    titleE: '2. Maximum 7 Lifetimes to Full Nibbāna',
    descK: 'នឹងវិលវល់ក្នុងឋានមនុស្ស និងសួគ៌យ៉ាងច្រើនបំផុត ៧ ជាតិប៉ុណ្ណោះ នឹងត្រូវសម្រេចជាព្រះអរហន្តជាមិនខាន។',
    descE: 'Bound to attain final Arahantship in at most seven rebirths in human and celestial spheres.'
  },
  {
    icon: '💎',
    titleK: '៣. សេចក្ដីជឿជាក់មិនញាប់ញ័រលើព្រះរតនត្រ័យ',
    titleE: '3. Unshakable Devotion to Triple Gem',
    descK: 'មានសទ្ធាមុតមាំលែងងាករេលើព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ គ្មានអ្នកណាអាចទាញឱ្យទៅជឿអាទិទេពផ្សេងបានឡើយ។',
    descE: 'Unshakable, experiential confidence in the Buddha, Dhamma, and Saṅgha—never swayed by superstition.'
  },
  {
    icon: '⚔️',
    titleK: '៤. កាត់ផ្តាច់សំយោជនៈ ៣ ដំបូង',
    titleE: '4. Cutting the First 3 Fetters',
    descK: 'លះបង់ដាច់ស្រឡះនូវ សក្កាយទិដ្ឋិ (ប្រកាន់តួខ្លួន), វិចិកិច្ឆា (សង្ស័យ), និងសីលព្វតបរាមាសៈ (ជឿលើពិធីកម្មខុស)។',
    descE: 'Permanently uproots Identity View (Sakkāyadiṭṭhi), Skeptical Doubt (Vicikicchā), and Clinging to Rites (Sīlabbataparāmāsa).'
  }
]



function handleKeydown(e) {
  if (e.key === 'Escape' && selectedVuddhi.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  unlockBodyScroll()
})
</script>
