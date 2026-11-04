<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🧠 {{ t('សព្វាសវសូត្រ និងអង្គុត្តរនិកាយ · សិល្បៈនៃការគិតត្រូវ', 'Sabbāsava Sutta · The Art of Wise Attention') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('យោនិសោមនសិការៈ ៖ សិល្បៈនៃការគិតដល់ឬសគល់', 'Yonisomanasikāra: The Art of Wise Attention') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'យោនិសោមនសិការៈ គឺការធ្វើទុកក្នុងចិត្តដោយឧបាយប្រាជ្ញា ឬការចេះគិតឱ្យធ្លុះដល់ឬសគល់នៃបញ្ហា។ ព្រះពុទ្ធបានត្រាស់ថា គ្មានធម៌ខាងក្នុងណាមួយដែលមានឧបការៈច្រើនដល់ការកើតឡើងនៃសម្មាទិដ្ឋិ និងការរំលត់កិលេស ដូចយោនិសោមនសិការៈនេះឡើយ។ វាជាកែវភ្នែកប្រាជ្ញាដែលកែប្រែទុក្ខឱ្យទៅជាមេរៀន។',
            'Yonisomanasikāra denotes wise, radical reflection—paying attention to the root causes rather than superficial symptoms. The Buddha declared it the single foremost internal condition for the arising of Right View and the complete eradication of mental defilements. It is the alchemy of wisdom that transmutes crisis into liberation.'
          ) }}
        </p>
      </div>
    </section>

    <!-- Contrast Callout: Wise vs Unwise Attention -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card-paper p-4 border" :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
        <div class="flex items-center gap-2.5 mb-1.5">
          <span class="text-xl">✅</span>
          <h4 class="font-bold text-sm" :style="{ color: 'var(--accent)' }">
            {{ t('យោនិសោមនសិការៈ (ការគិតត្រូវ)', 'Yonisomanasikāra (Wise Attention)') }}
          </h4>
        </div>
        <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink)' }">
          {{ t('គិតដល់ហេតុផល, មើលឃើញត្រៃលក្ខណ៍, មិនបន្ទោសអ្នកដទៃ, ដាស់សតិ និងនាំឱ្យកុសលធម៌ដុះលូតលាស់។', 'Traces events to root causes, discerns impermanence, takes radical responsibility, and sparks wholesome clarity.') }}
        </p>
      </div>

      <div class="card-paper p-4 border" :style="{ background: 'var(--bg-card-2)', borderColor: '#dc2626' }">
        <div class="flex items-center gap-2.5 mb-1.5">
          <span class="text-xl">❌</span>
          <h4 class="font-bold text-sm text-red-500">
            {{ t('អយោនិសោមនសិការៈ (ការគិតខុស)', 'Ayonisomanasikāra (Unwise Attention)') }}
          </h4>
        </div>
        <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('គិតរំឭកពាក្យជេរ, ចងគំនុំ, ស្រមើស្រមៃរឿងអាក្រក់, គិតថាមានអញត្រូវគេធ្វើបាប, នាំឱ្យកិលេសដុតរោល។', 'Ruminates on insults, stokes victim-complexes, catastrophizes the future, and feeds obsessive anxiety.') }}
        </p>
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

    <!-- TAB 1: 4 Modes of Wise Reflection -->
    <section v-if="activeTab === 'modes'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(m, idx) in modesList"
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
                {{ t('វិធីទី', 'Mode') }} {{ khNum(idx + 1) }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-0.5" :style="{ color: 'var(--ink)' }">
              {{ t(m.titleK, m.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-3" :style="{ color: 'var(--accent)' }">
              {{ m.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(m.shortDescK, m.shortDescE) }}
            </p>

            <div class="p-3 rounded-xl mb-4 text-xs space-y-1" :style="{ background: 'var(--bg-card-2)' }">
              <span class="font-bold block" :style="{ color: 'var(--accent)' }">
                💡 {{ t('កែវយឹតប្រាជ្ញា៖', 'Wisdom Prism:') }}
              </span>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(m.prismK, m.prismE) }}</p>
            </div>
          </div>

          <div>
            <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold"
                 :style="{ borderColor: 'var(--border)', color: 'var(--accent)' }">
              <span>{{ t('អានវិធីគិត និងឧទាហរណ៍ជាក់ស្ដែង', 'View Reframing & Examples') }}</span>
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
            <SlideDown>
              <div v-if="expandedId === m.id" class="pt-4 border-t mt-3 space-y-4 text-xs sm:text-sm leading-relaxed" :style="{ borderColor: 'var(--border)' }">
                <!-- Sutta Verse -->
                <div class="p-3.5 rounded-xl border-l-4 font-serif text-xs leading-relaxed"
                     :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
                  <p class="italic mb-1 font-bold">« {{ m.suttaPali }} »</p>
                  <p class="text-xs opacity-80">— {{ t(m.suttaK, m.suttaE) }}</p>
                </div>

                <!-- Detailed Exposition -->
                <div class="space-y-1.5">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>📖</span>
                    <span>{{ t('អត្ថន័យ និងយន្តការផ្លូវចិត្ត', 'Psychological Mechanics') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(m.fullDescK, m.fullDescE) }}
                  </p>
                </div>

                <!-- Practical Real-World Example -->
                <div class="p-3.5 rounded-xl border space-y-1.5"
                     :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>💡</span>
                    <span>{{ t('ឧទាហរណ៍អនុវត្តជាក់ស្ដែង', 'Concrete Real-Life Example') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
                    {{ t(m.exampleK, m.exampleE) }}
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
            </SlideDown>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 2: Practical Cognitive Reframing Toolkit -->
    <section v-if="activeTab === 'toolkit'" class="card-paper p-6 space-y-5">
      <div class="max-w-2xl mx-auto space-y-2 text-center">
        <span class="text-3xl">🧰</span>
        <h2 class="text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('ប្រអប់ឧបករណ៍កែប្រែគំនិតក្នុងស្ថានភាពលំបាក', 'The Cognitive Reframing Toolkit') }}
        </h2>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'នៅពេលជួបព្រឹត្តិការណ៍អាក្រក់ក្នុងជីវិត ចូរប្រើរូបមន្តយោនិសោមនសិការៈខាងក្រោម ដើម្បីប្តូរទិដ្ឋភាពពីការរងទុក្ខ មកជាការស្ងប់ចិត្តវិញភ្លាមៗ៖',
            'When life throws bitter curveballs, utilize these ready-made Buddhist cognitive reframing formulas to neutralize toxicity on the spot:'
          ) }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto pt-2">
        <div v-for="(tool, tIdx) in reframingTools" :key="tIdx"
             class="p-4 rounded-xl border space-y-2"
             :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="text-2xl">{{ tool.icon }}</span>
            <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">
              {{ t(tool.situationK, tool.situationE) }}
            </h4>
          </div>
          <div class="p-2.5 rounded-lg text-xs" :style="{ background: 'var(--bg-card)', color: '#dc2626' }">
            <strong>❌ {{ t('គិតខុស (នាំឱ្យកើតទុក្ខ)៖', 'Ayoniso (Distress):') }}</strong>
            <p class="mt-0.5">{{ t(tool.badThoughtK, tool.badThoughtE) }}</p>
          </div>
          <div class="p-2.5 rounded-lg text-xs border"
               :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)', color: 'var(--ink)' }">
            <strong :style="{ color: 'var(--accent)' }">✅ {{ t('គិតត្រូវ (យោនិសោមនសិការៈ)៖', 'Yoniso (Liberation):') }}</strong>
            <p class="mt-0.5">{{ t(tool.goodThoughtK, tool.goodThoughtE) }}</p>
          </div>
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

const activeTab = ref('modes')
const expandedId = ref(null)
function toggleExpand(id) { expandedId.value = expandedId.value === id ? null : id }

const tabs = [
  { id: 'modes', icon: '🧠', titleK: 'របៀបគិតទាំង ៤', titleE: '4 Reflection Modes' },
  { id: 'toolkit', icon: '🧰', titleK: 'ប្រអប់ឧបករណ៍កែគំនិត', titleE: 'Reframing Toolkit' }
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

const modesList = [
  {
    id: 'uppada-vaya',
    icon: '🌊',
    titleK: '១. ឧប្បាទវយមនសិការៈ (គិតឃើញការកើតរលត់)',
    titleE: '1. Reflecting on Arising & Passing Away',
    pali: 'Uppāda-vaya-manasikāra',
    shortDescK: 'ការពិចារណាឃើញថា អ្វីៗដែលកើតឡើងសុទ្ធតែត្រូវរលត់ទៅវិញជាធម្មតា គ្មានអ្វីនៅឋិតថេរឡើយ។',
    shortDescE: 'Looking through the prism of impermanence: seeing that whatever condition arises must inevitably dissolve.',
    prismK: '«អារម្មណ៍នេះបានកើតឡើងហើយ វាក៏នឹងរលត់ទៅវិញក្នុងពេលឆាប់ៗ»។',
    prismE: '“This intense state arose conditionally; it will inevitably pass away soon.”',
    suttaPali: 'Uppādavayadhammino, uppajjitvā nirujjhanti...',
    suttaK: 'សង្ខារទាំងឡាយមានការកើតឡើង និងការរលត់ទៅជាធម្មតា កាលកើតឡើងហើយរមែងរលត់ទៅវិញ...',
    suttaE: 'Formations are of the nature to arise and vanish; having arisen, they cease; their stilling is true bliss.',
    fullDescK: 'នៅពេលមានអារម្មណ៍ក្រៀមក្រំ ខកចិត្ត ឬឈឺចាប់ មនុស្សភាគច្រើនគិតថា «ការឈឺចាប់នេះនឹងនៅជាអមតៈ»។ យោនិសោមនសិការៈរបៀបនេះ ជួយដាស់សតិឱ្យឃើញថា ទុក្ខវេទនានេះគ្រាន់តែជារលកសមុទ្រ បោកបក់មួយភ្លែតហើយនឹងរលាយបាត់ទៅវិញ មិនចាំបាច់តស៊ូជាមួយវាឡើយ។',
    fullDescE: 'In the depth of grief or anxiety, the deluded mind imagines the pain to be eternal. This mode reminds us that the anguish is merely an ocean wave, peaking and crashing back into stillness. Nothing conditioned can endure.',
    exampleK: 'ពេលត្រូវមិត្តភក្តិបដិសេធ ឬបាត់បង់ការងារ ចូរគិតថា «សូម្បីថ្ងៃនេះជាថ្ងៃភ្លៀង មិនយូរប៉ុន្មានមេឃនឹងស្រឡះឡើងវិញ»។',
    exampleE: 'After facing career rejection, reframe: “Even during torrential rain, the sun is guaranteed to return; this too is temporary.”'
  },
  {
    id: 'kammaphala',
    icon: '⚖️',
    titleK: '២. កម្មផលមនសិការៈ (គិតឃើញកម្មនិងផល)',
    titleE: '2. Reflecting on Karma & Fruit',
    pali: 'Kammaphala-manasikāra',
    shortDescK: 'ការពិចារណាថា គ្រប់ព្រឹត្តិការណ៍ដែលកើតឡើងក្នុងជីវិត មិនមែនជាការចៃដន្យឡើយ តែជាផលនៃហេតុបច្ច័យដែលបានសាង។',
    shortDescE: 'Understanding that experiences are not random cosmic accidents, but the fruit of causes planted in the stream.',
    prismK: '«នេះជាផលនៃកម្មចាស់ដែលត្រូវសង ចូរទទួលដោយស្ងប់ ហើយបង្កើតកម្មថ្មីឱ្យល្អ»។',
    prismE: '“This is the karmic harvest being cleared. Let me pay this debt gracefully without incurring new malice.”',
    suttaPali: 'Kammassakomhi kammadāyādo kammayoni kammabandhu...',
    suttaK: 'អាត្មាអញមានកម្មជារបស់ខ្លួន មានកម្មជាមរតក មានកម្មជាកំណើត មានកម្មជាផៅពង្ស...',
    suttaE: 'I am the owner of my actions, heir to my actions, born of my actions, bound to my actions...',
    fullDescK: 'ពេលជួបមនុស្សអាក្រក់ធ្វើបាប ឬជួបឧបសគ្គ បើគិតខុស យើងនឹងកើតគំនុំ ចង់សងសឹក។ តែបើគិតតាមកម្មផល យើងនឹងយល់ថា «យើងប្រហែលជាធ្លាប់បានបំពានគេកាលពីមុន ឥឡូវកម្មនេះមកដល់ទីបញ្ចប់ហើយ»។ គំនិតនេះជួយកាត់ផ្តាច់ខ្សែពៀរ មិនឱ្យបន្តឆ្លងទៅជាតិក្រោយទៀត។',
    fullDescE: 'When betrayed, the untrained mind schemes revenge. Karmic reflection realizes: “An ancient debt has matured; by not reacting with hatred, the ledger is permanently closed.” This closes the cycle of reciprocal vengeance.',
    exampleK: 'ពេលត្រូវគេកេងប្រវ័ញ្ចប្រាក់កាស ចូរគិតថា «ចាត់ទុកថាជាការសងបំណុលចាស់ អាត្មាអញនឹងរក្សាភាពស្មោះត្រង់បន្តទៀត»។',
    exampleE: 'If scammed financially, resolve: “Let this settle past accounts; I will not compromise my honesty or allow bitterness to poison my soul.”'
  },
  {
    id: 'tilakkhana',
    icon: '🔍',
    titleK: '៣. ត្រៃលក្ខណមនសិការៈ (គិតឃើញអនត្តា)',
    titleE: '3. Reflecting on Non-Self (Tilakkhaṇa)',
    pali: 'Tilakkhaṇa-manasikāra',
    shortDescK: 'ការពិចារណាថា រឿងរ៉ាវ និងរាងកាយនេះ មិនមែនជាកម្មសិទ្ធិរបស់ «ខ្ញុំ» ឡើយ គ្រាន់តែជាធាតុធម្មជាតិប្រជុំគ្នា។',
    shortDescE: 'Deconstructing experience into impersonal elements: seeing that nothing belongs to an “I”, disarming ego wounds.',
    prismK: '«គ្មានអញណាត្រូវខូចខាតឡើយ មានតែធាតុធម្មជាតិកំពុងប្រែប្រួលប៉ុណ្ណោះ»។',
    prismE: '“There is no permanent ‘me’ being disrespected; only impersonal vibrations striking an impersonal ear.”',
    suttaPali: 'N’etaṁ mama, n’eso’hamasmi, na me so attā...',
    suttaK: 'របស់នេះមិនមែនជារបស់ខ្ញុំ ខ្ញុំមិនមែនជារបស់នេះ របស់នេះមិនមែនជាខ្លួនរបស់ខ្ញុំឡើយ...',
    suttaE: 'This is not mine, this I am not, this is not my self (Majjhima Nikāya 22).',
    fullDescK: 'ទុក្ខស្ទើរតែ ៩០% ក្នុងចិត្តមនុស្ស កើតចេញពីពាក្យថា «អញ» (Ego) ដូចជា «គេមិនគោរពអញ, គេមើលងាយអញ, របស់អញ»។ នៅពេលបំបែកមនុស្ស និងសំឡេងឱ្យទៅជាធាតុធម្មជាតិ ពាក្យថាអញក៏រលាយបាត់ កំហឹងនិងការអន់ចិត្តក៏គ្មានកន្លែងតោងទៀតដែរ។',
    fullDescE: '90% of existential anguish is fueled by the bruised ego: “How dare they disrespect ME?” When the conceptual “me” is dissolved into the 5 Aggregates, the insult has no target to hit, passing harmlessly like an arrow through empty space.',
    exampleK: 'ពេលត្រូវគេរិះគន់ចំៗ ចូរពិចារណាថា «សំឡេងគ្រាន់តែជាខ្យល់បក់ប៉ះត្រចៀក ចិត្តកុំបង្កើតតួអញមកឈឺចាប់ធ្វើអ្វី»។',
    exampleE: 'When insulted, observe: “Sound waves are merely impacting ear receptors; the mind need not manufacture an injured victim.”'
  },
  {
    id: 'sacca',
    icon: '💎',
    titleK: '៤. សច្ចមនសិការៈ (គិតតាមអរិយសច្ច ៤)',
    titleE: '4. Reflecting through the 4 Noble Truths',
    pali: 'Sacca-manasikāra',
    shortDescK: 'ការកំណត់ដឹងថា ការឈឺចាប់បច្ចុប្បន្នជា «ទុក្ខសច្ច» ហើយស្វែងរក «តណ្ហា» ណាដែលកំពុងបង្កទុក្ខនេះ ដើម្បីលះបង់វា។',
    shortDescE: 'Diagnosing difficulties via the 4 Noble Truths: identifying the pain, discovering the attached craving, and cutting it.',
    prismK: '«ទុក្ខនេះកើតមកពីការចង់បានរបស់ខ្ញុំ តើខ្ញុំអាចលះបង់ការទាមទារនេះដោយរបៀបណា?»',
    prismE: '“This distress is born from an internal demand; what expectation must I surrender to reclaim peace?”',
    suttaPali: 'Idaṁ dukkhaṁ ti yathābhūtaṁ pajānāti...',
    suttaK: 'រមែងដឹងច្បាស់តាមពិតថា នេះជាទុក្ខ នេះជាហេតុនៃទុក្ខ...',
    suttaE: 'He understands as it actually is: “This is suffering; this is the origin of suffering; this is cessation.”',
    fullDescK: 'នេះជាវិធីគិតបែបវិទ្យាសាស្ត្រ និងជាក់ស្តែងបំផុត។ ជំនួសឱ្យការស្រែកយំ ឬទួញសោក យើងសួរខ្លួនឯងថា «តើទុក្ខនេះកើតចេញពីតណ្ហាណា? តើមកពីខ្ញុំចង់ឱ្យគេស្តាប់បង្គាប់ខ្ញុំឬ? ឬមកពីខ្ញុំចង់ឱ្យអ្វីៗល្អឥតខ្ចោះ?»។ កាលណាឃើញតណ្ហាហើយលះបង់វា ទុក្ខនឹងរលត់ភ្លាម។',
    fullDescE: 'The clinical scientific framework of healing. Instead of useless whining, diagnose: “Which attachment is creating this agony? Am I demanding other people behave identically to my script?” Surrendering the entitlement instantly extinguishes the suffering.',
    exampleK: 'ពេលខឹងកូនមិនព្រមរៀនសូត្រ ចូរពិនិត្យថា «ទុក្ខនេះមកពីការចង់គ្រប់គ្រងគេ ចូរណែនាំដោយមេត្តា តែលះបង់ការរំពឹងទុកហួសហេតុ»។',
    exampleE: 'When frustrated with children, reframe: “My pain is caused by wanting absolute control; guide them with love while releasing tyrannical expectations.”'
  }
]

const reframingTools = [
  {
    icon: '🗣️',
    situationK: 'ពេលត្រូវគេជេរ ឬនិយាយដើមបង្ខូចកេរ្តិ៍ឈ្មោះ',
    situationE: 'When Insulted or Slandered Behind Your Back',
    badThoughtK: '«គេមើលងាយអញ! អញមិនព្រមចាញ់ទេ អញត្រូវតែសងសឹកឱ្យវាដឹងដៃ!»',
    badThoughtE: '“They insulted ME! I won’t take this lying down; they must pay!”',
    goodThoughtK: '«សំឡេងគ្រាន់តែជារលកខ្យល់។ បើអញមិនទទួលយកទេ ពាក្យអាក្រក់នោះនឹងត្រឡប់ទៅរកអ្នកនិយាយវិញ ដូចគេស្តោះទឹកមាត់ឡើងលើមេឃ»។',
    goodThoughtE: '“Words are merely vibrations. If I do not accept the package, it remains with the sender, like spitting against a fierce wind.”'
  },
  {
    icon: '💔',
    situationK: 'ពេលបែកបាក់ស្នេហា ឬត្រូវគេក្បត់ចិត្ត',
    situationE: 'During Heartbreak or Infidelity',
    badThoughtK: '«ជីវិតខ្ញុំចប់ហើយ គ្មាននរណាស្រឡាញ់ខ្ញុំទៀតទេ ខ្ញុំមិនអាចរស់បានឡើយ»',
    badThoughtE: '“My life is ruined; nobody loves me; I cannot survive without them.”',
    goodThoughtK: '«របស់ដែលមិនមែនជារបស់យើង គង់តែបែកបាក់។ នេះជាឱកាសរៀនស្រឡាញ់ខ្លួនឯង និងរៀនរស់ដោយឯករាជ្យដោយគ្មានការជាប់ជំពាក់»។',
    goodThoughtE: '“What was never mine could never be retained. This is an invitation to cultivate unshakeable self-reliance and emotional freedom.”'
  },
  {
    icon: '📉',
    situationK: 'ពេលបរាជ័យក្នុងការប្រឡង ឬការរកស៊ីខាតបង់',
    situationE: 'When Business Fails or Exams Are Lost',
    badThoughtK: '«ខ្ញុំជាមនុស្សអសមត្ថភាព ជាមនុស្សបរាជ័យ គ្មានអនាគតឡើយ»',
    badThoughtE: '“I am a total failure; my future is destroyed; I’m worthless.”',
    goodThoughtK: '«ការខាតបង់ជាធម្មតានៃលោកធម៌ ៨។ ព្រឹត្តិការណ៍នេះគ្រាន់តែជាលទ្ធផលនៃបច្ច័យមួយចំនួន ចូរពិនិត្យមើលកំហុសកែលម្អ ហើយចាប់ផ្តើមថ្មី»។',
    goodThoughtE: '“Loss is natural under the 8 Worldly Winds. This outcome is merely feedback from conditions; adjust the causes and try again with wisdom.”'
  },
  {
    icon: '🤒',
    situationK: 'ពេលធ្លាក់ខ្លួនឈឺ ឬមានជម្ងឺប្រចាំកាយ',
    situationE: 'When Struck by Illness or Chronic Pain',
    badThoughtK: '«ហេតុអ្វីជារូបខ្ញុំ? ហេតុអ្វីខ្ញុំសំណាងអាក្រក់ជាងគេម្ល៉េះ?»',
    badThoughtE: '“Why ME? Why am I cursed with such terrible luck?”',
    goodThoughtK: '«រាងកាយនេះជាសម្បុកនៃរោគ គ្មានរូបកាយណាគេចផុតពីជម្ងឺឡើយ។ រូបកាយអាចឈឺ តែចិត្តកុំឱ្យឈឺតាម ព្យាបាលតាមកាលៈទេសៈ»។',
    goodThoughtE: '“This flesh is nature’s workshop of disease; no living being is immune. The body may suffer pain, but the mind will remain serene.”'
  }
]



function handleKeydown(e) {
  if (e.key === 'Escape' && selectedMode.value) {
    expandedId.value = null
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
