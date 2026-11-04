<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>⚖️ {{ t('មជ្ឈិមនិកាយ ឧបរិបណ្ណាសក · ទេវទូតសូត្រ', 'Majjhima Nikāya 130 · Devadūta Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('ទេវទូត ៥ ៖ សារដាស់តឿនស្មារតីរបស់ធម្មជាតិ', 'The 5 Divine Messengers: Awakening Calls of Nature') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ទេវទូត មិនមែនជាទេវតាមានស្លាបហោះចុះពីឋានសួគ៌ឡើយ តែជាសញ្ញាការពិតនៃធម្មជាតិ ៥ យ៉ាង (ទារក, មនុស្សចាស់, មនុស្សឈឺ, អ្នកទោស, និងសាកសព) ដែលធម្មជាតិបញ្ជូនមកដាស់តឿនមនុស្សលោកកុំឱ្យភ្លើតភ្លើនក្នុងវ័យ សុខភាព និងជីវិត ហើយត្រូវប្រញាប់ប្រញាល់សាងកុសល។',
            'Divine Messengers are not winged angels from the clouds, but five undeniable natural realities—an infant, an aged person, a sick person, a convict, and a corpse—sent by nature to awaken humanity from intoxication with youth, health, and life before time runs out.'
          ) }}
        </p>
      </div>
    </section>

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

    <!-- TAB 1: 5 Messengers Cards -->
    <section v-if="activeTab === 'messengers'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(m, mIdx) in messengerList"
          :key="m.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ m.icon }}
              </span>
              <span class="text-xs px-2 py-0.5 rounded-full font-mono font-bold"
                    :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                {{ t('ទូតទី', 'Messenger') }} {{ khNum(mIdx + 1) }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ t(m.titleK, m.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-3" :style="{ color: 'var(--accent)' }">
              {{ m.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(m.shortDescK, m.shortDescE) }}
            </p>

            <!-- Awakening Call -->
            <div class="p-3 rounded-xl mb-4 text-xs space-y-1" :style="{ background: 'var(--bg-card-2)' }">
              <div class="font-semibold flex items-center gap-1.5" :style="{ color: 'var(--accent)' }">
                <span>🔔</span>
                <span>{{ t('សារដាស់តឿន៖', 'Awakening Message:') }}</span>
              </div>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(m.warningK, m.warningE) }}</p>
            </div>
          </div>

          <div>
            <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold"
                 :style="{ borderColor: 'var(--border)', color: 'var(--accent)' }">
              <span>{{ t('អានកិច្ចសួរដេញដោលរបស់ព្រះយមរាជ', 'Yama’s Inquiry Sutta') }}</span>
              <button
                type="button"
                @click="toggleExpand(m.id)"
                class="lang-pick px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1"
                :class="expandedId === m.id ? 'on' : ''"
              >
                <span>{{ expandedId === m.id ? t('បិទ ▲', 'Hide ▲') : t('អានលម្អិត ▼', 'Read More ▼') }}</span>
              </button>
            </div>

            <!-- Slide-down Inline Expansion -->
            <transition name="slide-down">
              <div v-if="expandedId === m.id" class="pt-4 border-t mt-3 space-y-4 text-xs sm:text-sm leading-relaxed" :style="{ borderColor: 'var(--border)' }">
                <!-- Canonical Sutta Passage -->
                <div class="p-3.5 rounded-xl border-l-4 font-serif text-xs leading-relaxed"
                     :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
                  <p class="italic mb-1 font-bold">« {{ m.canonicalPali }} »</p>
                  <p class="text-xs opacity-80">— {{ t(m.canonicalK, m.canonicalE) }}</p>
                </div>

                <!-- Detailed Sutta Analysis -->
                <div class="space-y-1.5">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>📖</span>
                    <span>{{ t('ការពន្យល់តាមព្រះសូត្រ', 'Sutta Exposition') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(m.fullTextK, m.fullTextE) }}
                  </p>
                </div>

                <!-- Contemplative Reflection -->
                <div class="p-3.5 rounded-xl border space-y-1.5"
                     :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>🧘</span>
                    <span>{{ t('អារម្មណ៍ពិចារណាដាស់សតិ', 'Contemplation Mantra') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm font-serif italic" :style="{ color: 'var(--ink)' }">
                    {{ t(m.mantraK, m.mantraE) }}
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

    <!-- TAB 2: King Yama Courtroom Dialogue Simulator -->
    <section v-if="activeTab === 'courtroom'" class="card-paper p-6 space-y-6">
      <div class="text-center max-w-xl mx-auto space-y-2">
        <span class="text-3xl">⚖️</span>
        <h2 class="text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('សាលាក្តីព្រះយមរាជ (King Yama’s Interrogation)', 'The Court of King Yama') }}
        </h2>
        <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ជ្រើសរើសទេវទូតណាមួយ ដើម្បីស្ដាប់នូវការសាកសួររបស់ព្រះយមរាជ ចំពោះបុគ្គលដែលបានធ្វេសប្រហែសក្នុងការសាងអំពើល្អកាលនៅរស់។', 'Select any messenger below to reflect on King Yama’s solemn questioning of negligent souls.') }}
        </p>
      </div>

      <!-- Messenger Picker -->
      <div class="flex items-center justify-center gap-2 flex-wrap">
        <button
          v-for="(m, idx) in messengerList"
          :key="m.id"
          @click="selectedCourtIdx = idx"
          class="lang-pick px-3 py-1.5 text-xs font-semibold shrink-0 whitespace-nowrap"
          :class="selectedCourtIdx === idx ? 'on' : ''"
        >
          {{ m.icon }} {{ khNum(idx + 1) }}. {{ t(m.titleK, m.titleE) }}
        </button>
      </div>

      <!-- Dialogue Box -->
      <div class="max-w-2xl mx-auto p-5 rounded-2xl border space-y-4"
           :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
        <!-- Yama's Question -->
        <div class="space-y-1.5">
          <div class="flex items-center gap-2">
            <span class="text-lg">👑</span>
            <span class="text-xs font-bold font-serif uppercase tracking-wider" :style="{ color: 'var(--accent)' }">
              {{ t('ព្រះយមរាជ សួរថា៖', 'King Yama Asks:') }}
            </span>
          </div>
          <div class="p-4 rounded-xl border-l-4 font-serif text-xs sm:text-sm leading-relaxed"
               :style="{ background: 'var(--bg-card)', borderColor: 'var(--accent)', color: 'var(--ink)' }">
            « {{ t(currentCourtroom.questionK, currentCourtroom.questionE) }} »
          </div>
        </div>

        <!-- Negligent soul's confession -->
        <div class="space-y-1.5">
          <div class="flex items-center gap-2">
            <span class="text-lg">👤</span>
            <span class="text-xs font-bold uppercase tracking-wider" :style="{ color: 'var(--ink-muted)' }">
              {{ t('បុគ្គលប្រហែស ឆ្លើយថា៖', 'The Negligent Person Replies:') }}
            </span>
          </div>
          <p class="p-3 rounded-xl text-xs sm:text-sm italic" :style="{ background: 'var(--bg-card)', color: 'var(--ink-soft)' }">
            « {{ t('បពិត្រព្រះអង្គដ៏ចម្រើន ទូលព្រះបង្គំមិនបានធ្វើអំពើល្អឡើយ ព្រោះតែសេចក្ដីធ្វេសប្រហែស (បមាទោ) ភ្លើតភ្លើននឹងជីវិត។', 'Lord, I failed to do good deeds out of sheer negligence, intoxicated by worldly pursuits.') }} »
          </p>
        </div>

        <!-- Yama's Verdict -->
        <div class="space-y-1.5">
          <div class="flex items-center gap-2">
            <span class="text-lg">⚡</span>
            <span class="text-xs font-bold uppercase tracking-wider text-red-500">
              {{ t('សាលក្រមព្រះយមរាជ៖', 'King Yama’s Inevitable Verdict:') }}
            </span>
          </div>
          <div class="p-4 rounded-xl border-l-4 font-serif text-xs sm:text-sm leading-relaxed"
               :style="{ background: 'var(--bg-card)', borderColor: '#dc2626', color: 'var(--ink)' }">
            « {{ t(
              'អំពើអាក្រក់នោះ មិនមែនម្តាយ ឪពុក បងប្អូន មិត្តភក្តិ ឬទេវតាណាធ្វើជំនួសអ្នកឡើយ គឺអ្នកខ្លួនឯងជាអ្នកធ្វើ ដូច្នេះមានតែអ្នកខ្លួនឯងប៉ុណ្ណោះដែលត្រូវរងផលនៃកម្មនេះ!',
              'That evil action was not done by your mother, father, siblings, friends, or deities. It was committed by you alone, and you alone must experience its consequences!'
            ) }} »
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 3: Modern Practical Mindfulness -->
    <section v-if="activeTab === 'practice'" class="card-paper p-6 space-y-4">
      <div class="space-y-2">
        <h2 class="text-lg sm:text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('ការជួបទេវទូតក្នុងជីវិតប្រចាំថ្ងៃសម័យទំនើប', 'Encountering Divine Messengers in Daily Life') }}
        </h2>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'យើងមិនចាំបាច់រង់ចាំដល់ស្លាប់ទើបដឹងខ្លួននោះទេ។ រាល់ពេលដែលយើងដើរកាត់មន្ទីរពេទ្យ ឃើញមនុស្សចាស់ទ្រុឌទ្រោម ឬមើលកញ្ចក់ឃើញសក់ស្កូវដំបូង សុទ្ធតែជាទេវទូតដែលកំពុងផ្ញើសារមកកាន់យើង៖',
            'We need not wait until the deathbed to awaken. Every time we pass a hospital, see an elderly relative, or spot the first gray hair in the mirror, nature’s messengers are delivering urgent telegrams:'
          ) }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div v-for="(act, aIdx) in practicalReflections" :key="aIdx"
             class="p-4 rounded-xl border space-y-2"
             :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">{{ act.icon }}</span>
            <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">
              {{ t(act.titleK, act.titleE) }}
            </h4>
          </div>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(act.descK, act.descE) }}
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

const activeTab = ref('messengers')
const expandedId = ref(null)
function toggleExpand(id) { expandedId.value = expandedId.value === id ? null : id }
const selectedCourtIdx = ref(0)

const tabs = [
  { id: 'messengers', icon: '📜', titleK: 'ទេវទូតទាំង ៥', titleE: 'The 5 Messengers' },
  { id: 'courtroom', icon: '⚖️', titleK: 'សាលាក្តីយមរាជ', titleE: 'Yama’s Inquiry' },
  { id: 'practice', icon: '💡', titleK: 'ការដាស់សតិប្រចាំថ្ងៃ', titleE: 'Daily Awakening' }
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

const messengerList = [
  {
    id: 'infant',
    icon: '👶',
    titleK: 'ទារកទើបនឹងកើត',
    titleE: 'The Helpless Infant',
    pali: 'Paṭhama Devadūta (Jāti)',
    shortDescK: 'ទារកតូចដែលដេកននៀលក្នុងទឹកមូត្រ និងលាមកខ្លួនឯង មិនអាចជួយខ្លួនឯងបាន ពឹងផ្អែកលើអ្នកដទៃទាំងស្រុង។',
    shortDescE: 'A tender newborn infant lying helpless in its own filth, utterly vulnerable and dependent on caregivers.',
    warningK: 'ជាតិទុក្ខ គឺការកើតមកមានសភាពទន់ខ្សោយ អាស្រ័យនឹងទុក្ខវេទនាជាច្រើនតាំងពីដង្ហើមដំបូង។',
    warningE: 'The suffering of birth: life begins in complete helplessness and existential vulnerability.',
    canonicalPali: 'Na tvaṁ addasa manussesu paṭhamaṁ devadūtaṁ pātubhūtaṁ...',
    canonicalK: 'តើអ្នកមិនដែលឃើញទេវទូតទី ១ ដែលលេចឡើងក្នុងចំណោមមនុស្សលោក គឺទារកដេកផ្ងារននៀលក្នុងលាមកមូត្រខ្លួនឯងទេឬ?',
    canonicalE: 'Did you not see the first divine messenger appearing among humans: a tender infant lying on its back in its own mess?',
    fullTextK: 'ទារកតូចជាសញ្ញាដាស់តឿនឱ្យឃើញថា ដំណើរជីវិតមិនមែនចាប់ផ្តើមដោយភាពរុងរឿងនោះទេ គឺចាប់ផ្តើមដោយទុក្ខនៃការប្រសូត ការភ័យខ្លាច និងភាពទន់ខ្សោយ។ យើងធ្លាប់ជាទារកបែបនេះ ហើយបើនៅតែវិលវល់ក្នុងសង្សារវដ្ត យើងនឹងត្រូវកើតបែបនេះរាប់មិនអស់ដងទៀត។',
    fullTextE: 'The infant represents the harsh vulnerability of Jāti (birth). We entered this world weeping and helpless. Until Saṃsāra is broken, this frail beginning repeats endlessly.',
    mantraK: '«សូម្បីរូបកាយយើង ក៏ធ្លាប់ទន់ខ្សោយ និងដេកននៀលក្នុងទុក្ខយ៉ាងនេះដែរ កុំភ្លេចខ្លួនឡើយ»',
    mantraE: '“Even this body of mine began in absolute frailty and dependence; let me not be intoxicated with pride.”',
    questionK: '«ម្នាលបុរសដ៏ចម្រើន តើអ្នកមិនដែលឃើញទារកដេកននៀលក្នុងមូត្រលាមកខ្លួនឯងទេឬ? តើអ្នកមិនធ្លាប់គិតទេឬថា អាត្មាអញក៏មានការកើតជាធម្មតា មិនអាចកន្លងផុតការកើតបានឡើយ គួរតែអាត្មាអញធ្វើអំពើល្អដោយកាយ វាចា ចិត្ត?»',
    questionE: '“Good person, did you not see a tender infant lying in its own filth? Did it not occur to you: ‘I too am subject to birth, not exempt from it; I must do good by body, speech, and mind’?”'
  },
  {
    id: 'elderly',
    icon: '🦯',
    titleK: 'មនុស្សចាស់ជរា',
    titleE: 'The Aged Person',
    pali: 'Dutiya Devadūta (Jarā)',
    shortDescK: 'មនុស្សចាស់ដែលខ្នងកោងដូចបង្កង់ផ្ទះ ដៃកាន់ឈើច្រត់ ដើរញាប់ញ័រ សក់ស្កូវ ធ្មេញបាក់ ស្បែកជ្រីវជ្រួញ ភ្នែកស្រវាំង។',
    shortDescE: 'An elderly person, bent like a rafter, trembling with a cane, toothless, gray-haired, wrinkled, faculties fading.',
    warningK: 'ជរាទុក្ខ គឺភាពចាស់ដែលបំផ្លាញកម្លាំង សម្រស់ និងសតិបញ្ញា គ្មាននរណាម្នាក់អាចគេចផុតឡើយ។',
    warningE: 'The suffering of aging: relentless decay destroys beauty, vitality, and youth without exception.',
    canonicalPali: 'Itthiṁ vā purisaṁ vā jiṇṇaṁ gopānasivaṅkaṁ bhoggaṁ...',
    canonicalK: 'តើអ្នកមិនដែលឃើញមនុស្សចាស់ជរា ខ្នងកោងដូចដំបូល ដៃកាន់ឈើច្រត់ ញាប់ញ័រក្នុងចំណោមមនុស្សទេឬ?',
    canonicalE: 'Did you not see an aged man or woman, bent like a roof-frame, leaning on a stick, trembling as they walk?',
    fullTextK: 'ជរាភាព គឺជាចោរប្លន់យកភាពក្មេងខ្ចី ភាពស្រស់សង្ហា និងកម្លាំងពលំ។ មនុស្សភាគច្រើនភ្លើតភ្លើននឹងយុវវ័យ ដោយគិតថាសេចក្ដីចាស់នៅឆ្ងាយណាស់។ ទេវទូតទី ២ មកដាស់តឿនថា ពេលវេលាកំពុងរំកិលទៅមុខយ៉ាងលឿន កុំចាំដល់ចាស់ទើបស្វែងរកធម៌។',
    fullTextE: 'Aging is the silent thief that strips away youth, sharpness, and beauty. Most people wander intoxicated with youth, blind to the encroaching winter of life.',
    mantraK: '«សេចក្ដីចាស់កំពុងរង់ចាំយើងនៅខាងមុខ សម្រស់និងកម្លាំងនេះមិនស្ថិតស្ថេរឡើយ»',
    mantraE: '“Aging awaits ahead; this vitality and beauty are utterly ephemeral.”',
    questionK: '«ម្នាលបុរសដ៏ចម្រើន តើអ្នកមិនធ្លាប់ឃើញមនុស្សចាស់ខ្នងកោង ដើរញាប់ញ័រទេឬ? តើអ្នកមិនគិតទេឬថា អាត្មាអញក៏មានសេចក្ដីចាស់ជាធម្មតា មិនអាចកន្លងផុតសេចក្ដីចាស់បានឡើយ គួរតែអាត្មាអញប្រញាប់ធ្វើកុសល?»',
    questionE: '“Did you not see an aged person walking with a cane, faculties decayed? Did it not occur to you: ‘I too am subject to aging, not exempt from it; I must urgently do good’?”'
  },
  {
    id: 'sick',
    icon: '🤒',
    titleK: 'មនុស្សមានជម្ងឺធ្ងន់ធ្ងរ',
    titleE: 'The Sick & Afflicted',
    pali: 'Tatiya Devadūta (Byādhi)',
    shortDescK: 'មនុស្សជម្ងឺដេកដួលលើគ្រែ រងទុក្ខវេទនាខ្លាំង មិនអាចក្រោកដោយខ្លួនឯង ត្រូវការគេជួយលើកជួយគ្រាហ៍។',
    shortDescE: 'A person struck by chronic painful sickness, unable to rise, writhing in agony, tended by exhausted relatives.',
    warningK: 'ព្យាធិទុក្ខ គឺរោគាពាធដែលអាចវាយប្រហារជីវិតគ្រប់វិនាទី បំផ្លាញផែនការ និងសេចក្ដីសុខទាំងពួង។',
    warningE: 'The suffering of disease: sudden agony can strike anytime, shattering every illusion of invulnerability.',
    canonicalPali: 'Itthiṁ vā purisaṁ vā ābādhikaṁ dukkhitaṁ bāḷhagilānaṁ...',
    canonicalK: 'តើអ្នកមិនធ្លាប់ឃើញមនុស្សស្រី ឬប្រុសមានជម្ងឺធ្ងន់ ត្រាំត្រែងលើគ្រែក្នុងចំណោមមនុស្សលោកទេឬ?',
    canonicalE: 'Did you not see a sick person, afflicted, grievously ill, stuck in bed and attended by others?',
    fullTextK: 'រោគាពាធ មិនរើសវ័យ មិនរើសអ្នកមាន ឬអ្នកក្រឡើយ។ រាងកាយនេះជាសម្បុកនៃរោគរាប់ពាន់ប្រភេទ។ នៅពេលជម្ងឺចូលមកដល់ ទ្រព្យសម្បត្តិ និងកិត្តិយសទាំងអស់មិនអាចទិញការមិនឈឺចាប់បានឡើយ។ ទេវទូតទី ៣ ដាស់តឿនកុំឱ្យស្រវឹងនឹងភាពគ្មានរោគ។',
    fullTextE: 'Disease is no respecter of wealth, prestige, or age. This biological form is a nest of ailments. When acute pain arrives, all bank accounts fail to purchase immunity.',
    mantraK: '«រូបកាយនេះជារូងនៃរោគ យើងមិនទាន់រួចផុតពីការឈឺចាប់នៅឡើយទេ»',
    mantraE: '“This body is a sanctuary for illnesses; I have not yet transcended bodily affliction.”',
    questionK: '«ម្នាលបុរសដ៏ចម្រើន តើអ្នកមិនធ្លាប់ឃើញមនុស្សឈឺធ្ងន់ដេកលើគ្រែទេឬ? តើអ្នកមិនធ្លាប់គិតទេឬថា អាត្មាអញក៏មានរោគជាធម្មតា មិនកន្លងផុតរោគបានឡើយ គួរតែអាត្មាអញចម្រើនធម៌?»',
    questionE: '“Did you not see a severely ill patient crying in pain? Did it not occur to you: ‘I too am subject to illness; I must cultivate spiritual strength before pain strikes’?”'
  },
  {
    id: 'convict',
    icon: '⛓️',
    titleK: 'អ្នកទោសត្រូវគេធ្វើទណ្ឌកម្ម',
    titleE: 'The Convict in Chains',
    pali: 'Catuttha Devadūta (Kamma-vipāka)',
    shortDescK: 'ចោរ ឬអ្នកប្រព្រឹត្តខុសច្បាប់ ត្រូវគេចាប់ចងច្រវាក់ វាយដំ និងកាត់ទោសយ៉ាងធ្ងន់ធ្ងរចំពោះមុខមហាជន។',
    shortDescE: 'A criminal captured, bound in heavy chains, publicly punished and executed for lawless misdeeds.',
    warningK: 'កម្មវិបាក គឺអំពើអាក្រក់រមែងផ្ដល់ផលយ៉ាងឈឺចាប់ ទាំងក្នុងច្បាប់រដ្ឋ និងច្បាប់នៃកម្មផល។',
    warningE: 'Karmic retributive reality: evil deeds inevitably yield agonizing fruits both in secular law and cosmic justice.',
    canonicalPali: 'Coro āgucārī rājūhi gahito vividhā kammakāraṇā kāriyate...',
    canonicalK: 'តើអ្នកមិនធ្លាប់ឃើញអ្នកទោសត្រូវស្តេចបញ្ជាឱ្យធ្វើទារុណកម្ម និងទទួលទោសទណ្ឌផ្សេងៗទេឬ?',
    canonicalE: 'Did you not see a lawbreaker arrested by kings, subjected to diverse corporal retributions?',
    fullTextK: 'ទិដ្ឋភាពនៃអ្នកទោសត្រូវច្រវាក់ ជាកញ្ចក់ឆ្លុះឱ្យឃើញពីផលនៃអំពើទុច្ចរិត។ ពេលធ្វើបាប មនុស្សច្រើនគិតថានឹងគ្មានអ្នកដឹង គ្មានអ្នកឃើញ តែច្បាប់កម្មផលមិនដែលរំលងនរណាម្នាក់ឡើយ។ ទេវទូតទី ៤ ដាស់តឿនឱ្យមានហិរិ និងឱត្តប្បៈ (សេចក្ដីខ្មាសនិងខ្លាចបាប)។',
    fullTextE: 'The convict in shackles mirrors the immutable nature of karmic recoil. While committing harm, fools imagine concealment, but cosmic law tracks every trace without exemption.',
    mantraK: '«អំពើបាបរមែងតាមសងសឹក គ្មាននរណារត់រួចពីផលនៃកម្មដែលខ្លួនបានសាងឡើយ»',
    mantraE: '“Bad actions never fail to collect their debt; no soul escapes the harvest of its deeds.”',
    questionK: '«ម្នាលបុរសដ៏ចម្រើន តើអ្នកមិនធ្លាប់ឃើញអ្នកទោសត្រូវគេកាត់ទោសច្រវាក់ខ្នោះទេឬ? តើអ្នកមិនធ្លាប់គិតទេឬថា បុគ្គលធ្វើបាបរមែងទទួលទុក្ខយ៉ាងនេះ គួរតែអាត្មាអញវៀរចាកបាប?»',
    questionE: '“Did you not see convicts facing grim retribution for crimes? Did it not occur to you: ‘Evil deeds yield unbearable torment; I must renounce misdeeds forever’?”'
  },
  {
    id: 'corpse',
    icon: '⚰️',
    titleK: 'សាកសពមនុស្សស្លាប់',
    titleE: 'The Decomposing Corpse',
    pali: 'Pañcama Devadūta (Maraṇa)',
    shortDescK: 'សាកសពដែលស្លាប់បាន ១ ថ្ងៃ ២ ថ្ងៃ រលួយប៉ោង ខៀវ ស្អុយ ហើម គ្មានវិញ្ញាណ ត្រូវគេយកទៅបូជា ឬកប់។',
    shortDescE: 'A dead body, cold, blue-black, bloated, decaying, deserted by consciousness, bound for cremation or earth.',
    warningK: 'មរណទុក្ខ គឺជាទីបញ្ចប់នៃជីវិតសម្ភារៈ គ្មានអ្នកណាអាចទាញយកអ្វីតាមខ្លួនបានឡើយក្រៅពីបុណ្យនិងបាប។',
    warningE: 'The final cessation of earthly ambition: every title, vault, and vanity dissolves into cold dust.',
    canonicalPali: 'Itthiṁ vā purisaṁ vā matapetaṁ ekāhamataṁ vā dvīhamataṁ vā...',
    canonicalK: 'តើអ្នកមិនធ្លាប់ឃើញសាកសពស្លាប់បានមួយថ្ងៃ ពីរថ្ងៃ ហើមប៉ោង ខៀវរលួយទេឬ?',
    canonicalE: 'Did you not see a corpse dead for one, two, or three days, bloated, discolored, and decomposing?',
    fullTextK: 'សាកសព គឺជាគ្រូធំដែលបង្រៀននូវអនត្តា (គ្មានខ្លឹមសារអមតៈ) និងអនិច្ចតា (ភាពមិនទៀង)។ ទោះជាស្តេច មហាសេដ្ឋី ឬអ្នកក្រ ទីបញ្ចប់សុទ្ធតែត្រូវដេកស្ងៀមជាដុំសាច់គ្មានតម្លៃ។ ទេវទូតទី ៥ បង្ហាញថាមរណៈអាចមកដល់គ្រប់ពេល ចូរប្រញាប់ធ្វើអំពើល្អមុនពេលដង្ហើមចុងក្រោយរលត់។',
    fullTextE: 'The corpse is the supreme silent preceptor of Anattā (non-self) and Anicca (impermanence). Kings, billionaires, and paupers all dissolve into identical lifeless matter.',
    mantraK: '«សេចក្ដីស្លាប់នឹងមកដល់យើងជាមិនខាន រូបកាយនេះនឹងត្រូវក្លាយជាផេះផង់»',
    mantraE: '“Death will inevitably claim this flesh; this body will reduce to ash and soil.”',
    questionK: '«ម្នាលបុរសដ៏ចម្រើន តើអ្នកមិនធ្លាប់ឃើញសាកសពមនុស្សស្លាប់ហើមប៉ោងទេឬ? តើអ្នកមិនធ្លាប់គិតទេឬថា អាត្មាអញក៏មានសេចក្ដីស្លាប់ជាធម្មតា គួរតែអាត្មាអញខំធ្វើបុណ្យទាន?»',
    questionE: '“Did you not see a cold, decaying corpse? Did it not occur to you: ‘I too am subject to death, unable to escape; I must urgently store meritorious deeds’?”'
  }
]

const currentCourtroom = computed(() => {
  return messengerList[selectedCourtIdx.value]
})

const practicalReflections = [
  {
    icon: '🪞',
    titleK: 'ការមើលកញ្ចក់រាល់ព្រឹក',
    titleE: 'Mirror Meditation',
    descK: 'ពេលឃើញស្នាមជ្រួញ ឬសក់ស្កូវ ចូររឭកដល់ទេវទូតទី ២ ហើយប្រាប់ខ្លួនឯងថាកុំខាតពេលនឹងរឿងឥតប្រយោជន៍។',
    descE: 'When spotting gray hairs or wrinkles, greet the 2nd Messenger and resolve not to waste hours on trivial squabbles.'
  },
  {
    icon: '🏥',
    titleK: 'ពេលទៅមន្ទីរពេទ្យ',
    titleE: 'Hospital Visits',
    descK: 'កុំគ្រាន់តែទៅសួរសុខទុក្ខ ចូរពិចារណាដល់ទេវទូតទី ៣ ថាថ្ងៃណាមួយយើងក៏អាចត្រូវដេកលើគ្រែនោះដែរ។',
    descE: 'Contemplate patients not as strangers, but as your own future condition; cultivate deep compassion and humility.'
  },
  {
    icon: '💐',
    titleK: 'ពេលចូលរួមពិធីបុណ្យសព',
    titleE: 'Funeral Contemplation',
    descK: 'ពិចារណាដល់ទេវទូតទី ៥ ថាយើងនិងអ្នកស្លាប់គ្មានអ្វីខុសគ្នាឡើយ គ្រាន់តែអ្នកស្លាប់ទៅមុន យើងទៅតាមក្រោយ។',
    descE: 'Remember that the deceased is merely an earlier traveler; our own departure date is rapidly approaching.'
  },
  {
    icon: '🕊️',
    titleK: 'ការលះបង់ការភ្លើតភ្លើន',
    titleE: 'Overcoming Intoxication',
    descK: 'លះបង់មទធម៌ ៣ យ៉ាង៖ ស្រវឹងនឹងភាពក្មេង, ស្រវឹងនឹងភាពគ្មានរោគ, និងស្រវឹងនឹងជីវិត។',
    descE: 'Conquer the 3 intoxicating illusions: intoxication with youth, with health, and with continuous living.'
  }
]



function handleKeydown(e) {
  if (e.key === 'Escape' && selectedMessenger.value) {
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
