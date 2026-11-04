<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🛡️ {{ t('កម្មដ្ឋានរក្សា និងការពារចិត្ត ៤ យ៉ាង', 'Caturārakkhā · The 4 Guardian Meditations') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('ចតុរារក្ខធម៌ ៤ ៖ អាវក្រោះការពារចិត្តរបស់អ្នកបដិបត្តិ', 'Caturārakkhā 4: The Four Protective Meditations') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ចតុរារក្ខធម៌ គឺជាកម្មដ្ឋាន ៤ យ៉ាង (ពុទ្ធានុស្សតិ, មេត្តា, អសុភ, មរណានុស្សតិ) ដែលព្រះអដ្ឋកថាចារ្យបានណែនាំឱ្យអ្នកចម្រើនភាវនាគ្រប់រូបចម្រើនជាប្រចាំ ដូចជាអាវក្រោះការពារចិត្តពីសត្រូវខាងក្នុង គឺកិលេសទាំងពួង (ភ័យខ្លាច, កំហឹង, កាមរាគ, និងសេចក្ដីប្រហែស)។',
            'Caturārakkhā denotes the 4 Guardian Meditations—Recollection of the Buddha, Loving-Kindness, Foulness of the Body, and Mindfulness of Death. Cherished in the forest tradition, they form a spiritual armor shielding the mind from internal adversaries: fear, hostility, sensual lust, and heedlessness.'
          ) }}
        </p>
      </div>
    </section>

    <!-- Spiritual Armor Metaphor Visual -->
    <div class="card-paper p-5 border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="space-y-1 text-center sm:text-left">
          <span class="text-xs font-bold uppercase tracking-wider" :style="{ color: 'var(--accent)' }">
            {{ t('ខែលការពារទាំង ៤ ទិស', 'The 4 Quadrants of Inner Shielding') }}
          </span>
          <h3 class="font-bold text-base" :style="{ color: 'var(--ink)' }">
            {{ t('ការពារចិត្តមុននឹងចូលកាន់វិបស្សនាធំ', 'Fortify Your Mind Before Deep Vipassanā') }}
          </h3>
          <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
            {{ t('ព្រះសង្ឃធុតង្គតែងសូត្រ និងចម្រើនធម៌ទាំង ៤ នេះជារៀងរាល់ព្រឹក និងមុនពេលអង្គុយសមាធិ។', 'Forest monks practice these 4 subjects daily upon waking to clear mental obstacles before sitting.') }}
          </p>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <div v-for="(g, gIdx) in guardianList" :key="g.id"
               class="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base border cursor-pointer transition-transform hover:scale-110"
               :style="{ borderColor: 'var(--accent)', background: 'var(--bg-card)' }"
               :title="t(g.titleK, g.titleE)"
               @click="toggleExpand(g.id)">
            {{ g.icon }}
          </div>
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

    <!-- TAB 1: 4 Guardian Cards -->
    <section v-if="activeTab === 'guardians'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(g, idx) in guardianList"
          :key="g.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md cursor-pointer border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
          
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <div class="flex items-center gap-3">
                <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                      :style="{ background: 'var(--bg-card-2)' }">
                  {{ g.icon }}
                </span>
                <div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                          :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                      {{ t('អារក្ខទី', 'Shield') }} {{ khNum(idx + 1) }}
                    </span>
                    <span class="text-xs font-mono font-medium" :style="{ color: 'var(--ink-faint)' }">
                      {{ g.pali }}
                    </span>
                  </div>
                  <h3 class="font-bold text-base sm:text-lg mt-0.5" :style="{ color: 'var(--ink)' }">
                    {{ t(g.titleK, g.titleE) }}
                  </h3>
                </div>
              </div>
            </div>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(g.shortDescK, g.shortDescE) }}
            </p>

            <!-- Enemy Shielded Against -->
            <div class="grid grid-cols-2 gap-2 mb-4 text-xs">
              <div class="p-2.5 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: '#dc2626' }">
                <span class="text-[11px] font-bold block text-red-500">❌ {{ t('កម្ចាត់សត្រូវ៖', 'Conquers:') }}</span>
                <span class="font-medium" :style="{ color: 'var(--ink)' }">{{ t(g.enemyK, g.enemyE) }}</span>
              </div>
              <div class="p-2.5 rounded-xl border" :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
                <span class="text-[11px] font-bold block" :style="{ color: 'var(--accent)' }">✅ {{ t('បង្កើតផល៖', 'Produces:') }}</span>
                <span class="font-medium" :style="{ color: 'var(--ink)' }">{{ t(g.fruitK, g.fruitE) }}</span>
              </div>
            </div>
          </div>

          <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold"
               :style="{ borderColor: 'var(--border)', color: 'var(--accent)' }">
            <span>{{ t('អានបាលី និងវិធីបដិបត្តិលម្អិត', 'View Pāli Formula & Practice →') }}</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 2: 10-Minute Guided Routine -->
    <section v-if="activeTab === 'routine'" class="card-paper p-6 space-y-6">
      <div class="text-center max-w-xl mx-auto space-y-2">
        <span class="text-3xl">⏱️</span>
        <h2 class="text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('កម្មវិធីចម្រើនចតុរារក្ខធម៌ ១០ នាទីរាល់ព្រឹក', 'The 10-Minute Daily Guardian Routine') }}
        </h2>
        <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
          {{ t('បែងចែកពេលវេលា ២-៣ នាទីលើកម្មដ្ឋាននីមួយៗ ដើម្បីរៀបចំចិត្តឱ្យមានថាមពលមុននឹងចាប់ផ្តើមកិច្ចការប្រចាំថ្ងៃ។', 'Spend 2-3 minutes on each guardian subject to armor your mind with clarity, patience, and courage before facing the day.') }}
        </p>
      </div>

      <div class="space-y-4 max-w-2xl mx-auto">
        <div v-for="(step, sIdx) in routineSteps" :key="sIdx"
             class="p-4 rounded-xl border space-y-2.5"
             :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-xl">{{ step.icon }}</span>
              <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">
                {{ khNum(sIdx + 1) }}. {{ t(step.titleK, step.titleE) }}
              </h4>
            </div>
            <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                  :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
              {{ step.time }}
            </span>
          </div>

          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(step.guideK, step.guideE) }}
          </p>

          <div class="p-3 rounded-lg font-serif text-xs italic"
               :style="{ background: 'var(--bg-card)', color: 'var(--accent)' }">
            « {{ t(step.chantK, step.chantE) }} »
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

const activeTab = ref('guardians')
const expandedId = ref(null)
function toggleExpand(id) { expandedId.value = expandedId.value === id ? null : id }

const tabs = [
  { id: 'guardians', icon: '🛡️', titleK: 'អារក្ខធម៌ទាំង ៤', titleE: '4 Guardian Meditations' },
  { id: 'routine', icon: '⏱️', titleK: 'លំហាត់ ១០ នាទី', titleE: '10-Min Routine' }
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

const guardianList = [
  {
    id: 'buddhanussati',
    icon: '☸️',
    titleK: 'ពុទ្ធានុស្សតិ',
    titleE: 'Recollection of the Buddha',
    pali: 'Buddhānussati',
    shortDescK: 'ការរឭកដល់ព្រះគុណទាំង ៩ ប្រការរបស់ព្រះសម្មាសម្ពុទ្ធ (ឥតិបិ សោ ភគវា...) ដើម្បីដាស់សេចក្ដីក្លាហាន និងជ្រះថ្លាក្នុងចិត្ត។',
    shortDescE: 'Recollecting the 9 supreme virtues of the Buddha, instilling fearlessness, joy, and profound spiritual refuge.',
    enemyK: 'សេចក្ដីភ័យខ្លាច, ការតក់ស្លុត, អសន្តិសុខផ្លូវចិត្ត',
    enemyE: 'Fear, existential terror, anxiety, insecurity',
    fruitK: 'សេចក្ដីក្លាហាន, បីតិស្រស់ថ្លា, ជំនឿមុតមាំ',
    fruitE: 'Courage, radiant joy, unshakable faith',
    formulaPali: 'Iti pi so Bhagavā Arahaṁ Sammāsambuddho...',
    formulaK: 'ព្រះដ៏មានព្រះភាគអង្គនោះ ព្រះអង្គទ្រង់ឆ្ងាយចាកកិលេស ទ្រង់ត្រាស់ដឹងដោយព្រះអង្គឯងដ៏ប្រពៃ...',
    formulaE: 'Indeed, the Blessed One is worthy, fully enlightened, endowed with clear vision and conduct...',
    fullDescK: 'ពេលរឭកដល់ព្រះសម្មាសម្ពុទ្ធ ចិត្តនឹងពោរពេញដោយការកោតក្រែង និងសេចក្ដីសុខសាន្ត ដូចមានព្រះអង្គគង់នៅការពារចំពោះមុខ។ ក្នុងគម្ពីរធជគ្គសូត្រ ព្រះពុទ្ធបានបង្រៀនថា បើភិក្ខុទៅនៅក្នុងព្រៃស្ងាត់ ហើយកើតការភ័យខ្លាច រោមក្រោក ចូររឭកដល់ព្រះពុទ្ធ សេចក្ដីភ័យនោះនឹងរលត់បាត់ភ្លាម។',
    fullDescE: 'Recollecting the Buddha’s infinite purity floods the heart with reverent tranquility. In the Dhajagga Sutta, the Buddha instructed monastics gripped by dread in deep forests to recollected the Tathāgata, instantly dissolving all goosebumps and terror.',
    steps: [
      { k: 'អង្គុយឱ្យស្រួល ស្រមៃឃើញព្រះពុទ្ធរូបមាសដ៏ស្ងប់ថ្លា គង់នៅចំពោះមុខ។', e: 'Sit comfortably and visualize a serene, golden Buddha radiating tranquil light.' },
      { k: 'ទន្ទេញគុណនីមួយៗយឺតៗ ដូចជា «អរហំ» (ព្រះអង្គបរិសុទ្ធ គ្មានកិលេស)។', e: 'Recite each virtue slowly: Arahaṁ (pure and taintless), Sammāsambuddho (self-awakened).' },
      { k: 'ស្រូបយកអារម្មណ៍សុខសាន្ត និងការការពារចូលមកក្នុងបេះដូង។', e: 'Breathe in that sublime serenity and sacred protection into your heart.' }
    ],
    benefitsK: 'ជួយបំបាត់ការថប់បារម្ភ (Anxiety) ជួយឱ្យគេងលក់ស្រួល និងកាត់បន្ថយសុបិន្តអាក្រក់។',
    benefitsE: 'Clinically eases anxiety, relieves panic attacks, and cures nightmares.'
  },
  {
    id: 'metta',
    icon: '💖',
    titleK: 'មេត្តាភាវនា',
    titleE: 'Meditation on Loving-Kindness',
    pali: 'Mettā-bhāvanā',
    shortDescK: 'ការផ្សាយចិត្តស្រឡាញ់ រាប់អាន បំណងល្អ និងសេចក្ដីសុខ ដល់ខ្លួនឯង មនុស្សជុំវិញខ្លួន និងសត្វលោកទាំងអស់ឥតព្រំដែន។',
    shortDescE: 'Radiating unconditional friendliness, goodwill, and safety toward oneself, loved ones, neutrals, enemies, and all living beings.',
    enemyK: 'កំហឹង, គំនុំ, ការច្រណែន, ការចងពៀរ',
    enemyE: 'Anger, spite, resentment, malice, hostility',
    fruitK: 'ចិត្តទន់ភ្លន់, មនុស្សស្រឡាញ់រាប់អាន, គេងលក់ស្រួល',
    fruitE: 'Gentle heart, beloved by humans and devas, sound sleep',
    formulaPali: 'Sabbe sattā averā hontu, abyāpajjhā hontu, anīghā hontu, sukhī attānaṁ pariharantu.',
    formulaK: 'សូមឱ្យសត្វទាំងឡាយទាំងពួង កុំមានពៀរនឹងគ្នា កុំមានសេចក្ដីទុក្ខទោមនស្ស រក្សាខ្លួនឱ្យបានសុខគ្រប់កាលកុំបីខាន។',
    formulaE: 'May all beings be free from hostility, free from afflictions, free from anxiety, and take care of themselves happily.',
    fullDescK: 'មេត្តា គឺជាទឹកត្រជាក់សម្រាប់រំលត់ភ្លើងកំហឹង។ នៅពេលយើងមានចិត្តខឹងនរណាម្នាក់ មនុស្សដែលរងគ្រោះដំបូងគេគឺខ្លួនយើង។ ការចម្រើនមេត្តាជួយដោះលែងគំនុំ និងរំលាយរនាំងរវាងយើងនិងអ្នកដទៃ។ ព្រះពុទ្ធបានត្រាស់ពីអានិសង្សមេត្តា ១១ ប្រការ ដូចជា ដេកជាសុខ ភ្ញាក់ជាសុខ មិនយល់សប្តិអាក្រក់ និងជាទីស្រឡាញ់នៃមនុស្សនិងទេវតា។',
    fullDescE: 'Mettā is the cool spring extinguishing the forest fire of anger. Hatred primarily burns the vessel containing it. Cultivating boundless goodwill melts hostility. The Buddha stated 11 blessings of Mettā: sleeping peacefully, waking joyfully, beloved by all, and easy concentration.',
    steps: [
      { k: 'ផ្សាយមេត្តាឱ្យខ្លួនឯងជាមុន៖ «សូមឱ្យខ្ញុំបានសុខ ផុតចាកទុក្ខ និងគ្រោះថ្នាក់»។', e: 'Start with self: May I be peaceful, happy, and free from internal affliction.' },
      { k: 'ផ្សាយដល់ឪពុកម្តាយ គ្រូអាចារ្យ និងអ្នកមានគុណ។', e: 'Extend to parents, revered teachers, and benefactors.' },
      { k: 'ផ្សាយដល់មនុស្សដែលខ្លួនស្អប់ ឬមានជម្លោះ ដោយអធិដ្ឋានឱ្យគាត់បានសុខ។', e: 'Extend towards adversaries, consciously dissolving hostility.' },
      { k: 'ផ្សាយដល់សព្វសត្វក្នុងលោកទាំង ១០ ទិស ដោយគ្មានព្រំដែន។', e: 'Radiate boundlessly across all 10 directions to all living things.' }
    ],
    benefitsK: 'ជួយបន្ថយសម្ពាធឈាម កាត់បន្ថយស្ត្រេស និងធ្វើឱ្យទំនាក់ទំនងក្នុងគ្រួសារ និងកន្លែងធ្វើការមានភាពសុខដុម។',
    benefitsE: 'Lowers blood pressure, reduces physiological stress, and heals interpersonal friction.'
  },
  {
    id: 'asubha',
    icon: '🦴',
    titleK: 'អសុភភាវនា',
    titleE: 'Contemplation of Foulness / Bodily Reality',
    pali: 'Asubha-bhāvanā',
    shortDescK: 'ការពិចារណាលើការពិតនៃសរីរាង្គកាយ (សក់ រោម ក្រចក ធ្មេញ ស្បែក សាច់ ឆ្អឹង...) ដែលមិនស្អាត ដើម្បីរំលត់កាមតណ្ហា។',
    shortDescE: 'Contemplating the anatomical reality and decomposing nature of the body (32 parts, skeleton), subduing sensual obsession.',
    enemyK: 'កាមរាគ, ការឈ្លក់វង្វេងនឹងរូបសម្រស់, ការអួតអាង',
    enemyE: 'Lust, physical infatuation, vanity, narcissism',
    fruitK: 'សេរីភាពផ្លូវភេទ, ការមិនជាប់ជំពាក់, សេចក្ដីស្ងប់ក្នុងកាយ',
    fruitE: 'Sensory sobriety, dispassion, peaceful self-possession',
    formulaPali: 'Atthi imasmiṁ kāye: kesā, lomā, nakhā, dantā, taco...',
    formulaK: 'ក្នុងរាងកាយនេះ មានសក់ រោម ក្រចក ធ្មេញ ស្បែក... សុទ្ធសឹងជារបស់មិនស្អាត មិនទៀងទាត់។',
    formulaE: 'In this very body there are: head hairs, body hairs, nails, teeth, skin... all devoid of intrinsic glamour.',
    fullDescK: 'មនុស្សភាគច្រើនស្រវឹងនឹងស្បែកខាងក្រៅដែលមានកម្រាស់ស្តើងដូចក្រដាស។ បើបកស្បែកចេញ រូបកាយនេះគ្មានអ្វីក្រៅពីដុំសាច់ ឈាម ឆ្អឹង និងកាកសំណល់ឡើយ។ អសុភភាវនាមិនមែនដើម្បីឱ្យស្អប់រាងកាយនោះទេ តែដើម្បីឱ្យដឹងការពិត មិនឱ្យតណ្ហាបោកបញ្ឆោតឱ្យប្រព្រឹត្តខុសកាមេ។',
    fullDescE: 'Humans are intoxicated by the outer paper-thin layer of skin. Peeled away, nothing exists except flesh, sinews, bones, and waste. Asubha does not teach self-hatred, but biological realism to inoculate against toxic infatuation and sexual misconduct.',
    steps: [
      { k: 'ពិចារណាកោដ្ឋាស ៥ ដំបូង៖ សក់ រោម ក្រចក ធ្មេញ ស្បែក។', e: 'Reflect on the first 5 parts: head hair, body hair, nails, teeth, skin.' },
      { k: 'មើលឃើញថាបើមិនលាងសម្អាតតែ ២-៣ ថ្ងៃ របស់ទាំងនេះនឹងធុំក្លិនស្អុយភ្លាម។', e: 'Notice that without constant washing, these parts immediately degenerate into foul odors.' },
      { k: 'ពិចារណាលើគ្រោងឆ្អឹងក្នុងរាងកាយ ដែលមិនមានភេទប្រុស ឬស្រីឡើយ។', e: 'Visualize the underlying skeleton—genderless, neutral, and impermanent.' }
    ],
    benefitsK: 'ជួយកម្ចាត់ការញៀនរឿងអាសអាភាស (Pornography addiction) និងការឈឺចាប់ដោយសារការបែកបាក់ស្នេហា។',
    benefitsE: 'Overcomes compulsive pornography addiction and relieves heartbreak from superficial infatuation.'
  },
  {
    id: 'marananussati',
    icon: '🕯️',
    titleK: 'មរណានុស្សតិ',
    titleE: 'Mindfulness of Death',
    pali: 'Maraṇānussati',
    shortDescK: 'ការរឭកដល់សេចក្ដីស្លាប់ជារៀងរាល់ថ្ងៃ ថាយើងប្រាកដជាត្រូវស្លាប់ មិនដឹងថាថ្ងៃណា ម៉ោងណាឡើយ ដើម្បីកុំឱ្យខ្ជះខ្ជាយពេលវេលា។',
    shortDescE: 'Daily recollection of the certainty of death and uncertainty of life’s timing, eradicating procrastination and complacency.',
    enemyK: 'សេចក្ដីខ្ជិលច្រអូស, ការពន្យារពេល (Procrastination), ការភ្លើតភ្លើនក្នុងវ័យ',
    enemyE: 'Laziness, chronic procrastination, arrogance of youth',
    fruitK: 'សេចក្ដីមិនប្រហែស (អប្បមាទ), ថាមពលព្យាយាម, ការត្រៀមខ្លួន',
    fruitE: 'Appamāda (diligent heedfulness), vigor, readiness',
    formulaPali: 'Addhuvaṁ me jīvitaṁ, dhuvaṁ me maraṇaṁ, avassaṁ mayā maritabbaṁ...',
    formulaK: 'ជីវិតរបស់ខ្ញុំមិនទៀងទាត់ឡើយ សេចក្ដីស្លាប់របស់ខ្ញុំជាការទៀងទាត់ ខ្ញុំប្រាកដជាត្រូវស្លាប់...',
    formulaE: 'My life is uncertain; my death is certain. I will inevitably die; my life culminates in death.',
    fullDescK: 'មរណានុស្សតិ ជាស្តេចនៃកម្មដ្ឋាន។ ដូចដានជើងដំរីធំជាងដានជើងសត្វទាំងពួង មរណានុស្សតិគ្របដណ្តប់លើធម៌កុសលទាំងអស់។ នៅពេលដឹងថាយើងអាចនឹងស្លាប់នៅយប់នេះ យើងនឹងលែងចង់ឈ្លោះគ្នា លែងចង់ច្រណែន ហើយប្រញាប់ប្រញាល់ធ្វើរឿងល្អៗ និងផ្ដល់ក្ដីស្រឡាញ់ដល់មនុស្សជុំវិញខ្លួន។',
    fullDescE: 'Mindfulness of Death is supreme among subjects, just as the elephant’s footprint encompasses all animal tracks. Knowing you might draw your final breath tonight dissolves petty grudges and instills intense urgency to love, forgive, and practice.',
    steps: [
      { k: 'ដកដង្ហើមចូល ហើយរឭកថា «ដង្ហើមនេះអាចជាដង្ហើមចុងក្រោយ»។', e: 'Inhale and reflect: “This breath could be my very last.”' },
      { k: 'ពិចារណាថាមនុស្សគ្រប់រូប មិនថាស្តេច មហាសេដ្ឋី សុទ្ធតែបានស្លាប់អស់។', e: 'Reflect that all kings, empires, and billionaires have dissolved into earth.' },
      { k: 'សួរខ្លួនឯងថា «បើថ្ងៃនេះជាថ្ងៃចុងក្រោយ តើខ្ញុំបានត្រៀមខ្លួនរួចហើយឬនៅ?»។', e: 'Ask: “If today were my final day, am I peaceful and spiritually ready?”' }
    ],
    benefitsK: 'ជួយបំបាត់ការញៀនទូរសព្ទ ការពន្យារពេលធ្វើការងារ និងដាស់ថាមពលឱ្យរស់នៅដោយមានន័យ។',
    benefitsE: 'Cures procrastination, phone doomscrolling, and unlocks fierce intentional living.'
  }
]

const routineSteps = [
  {
    icon: '☸️',
    time: '២ នាទី',
    titleK: '១. ពុទ្ធានុស្សតិ (ដាស់សេចក្ដីជ្រះថ្លា)',
    titleE: '1. Buddhānussati (Awakening Joy & Faith)',
    guideK: 'ផ្ដោតលើគុណព្រះពុទ្ធ «អរហំ» ដើម្បីបណ្តេញការភ័យខ្លាច និងស្រូបយកថាមពលស្ងប់ស្ងាត់។',
    guideE: 'Anchor on the virtue Arahaṁ to dispel morning anxiety and ground yourself in noble refuge.',
    chantK: '«ឥតិបិ សោ ភគវា អរហំ សម្មាសម្ពុទ្ធោ...»',
    chantE: '“Iti pi so Bhagavā Arahaṁ Sammāsambuddho...”'
  },
  {
    icon: '💖',
    time: '៣ នាទី',
    titleK: '២. មេត្តាភាវនា (បើកបេះដូងរាប់អាន)',
    titleE: '2. Mettā (Radiating Good Will)',
    guideK: 'ផ្សាយមេត្តាដល់ខ្លួនឯង ដល់គ្រួសារ និងដល់មនុស្សទាំងអស់ក្នុងពិភពលោក។',
    guideE: 'Radiate boundless kindness to yourself, family, neighbors, and all beings.',
    chantK: '«សូមឱ្យសត្វទាំងពួងបានសុខ កុំមានពៀរវេរា ផុតចាកទុក្ខទាំងអស់គ្នា»',
    chantE: '“May all beings dwell in safety, peace, and freedom from hostility.”'
  },
  {
    icon: '🦴',
    time: '២ នាទី',
    titleK: '៣. អសុភភាវនា (ដាស់តឿនកុំឱ្យវង្វេង)',
    titleE: '3. Asubha (Grounding Bodily Reality)',
    guideK: 'ពិចារណាលើរូបកាយមិនទៀង មិនស្អាត ដើម្បីកាត់បន្ថយតម្រេក និងការប្រកាន់តួខ្លួន។',
    guideE: 'Observe the perishable, unglamorous nature of flesh and bone, releasing sensory cravings.',
    chantK: '«រូបកាយនេះជារបស់មិនទៀង ជារូងនៃរោគ មិនមែនជាខ្ញុំ មិនមែនជារបស់ខ្ញុំ»',
    chantE: '“This body is impermanent, a nest of ailments, not self, not mine.”'
  },
  {
    icon: '🕯️',
    time: '៣ នាទី',
    titleK: '៤. មរណានុស្សតិ (ដាស់សតិប្រញាប់ប្រញាល់)',
    titleE: '4. Maraṇānussati (Igniting Urgency)',
    guideK: 'រំឭកដល់សេចក្ដីស្លាប់ ដើម្បីតាំងចិត្តធ្វើអំពើល្អ និងមិនខ្ជះខ្ជាយម៉ោងពេលថ្ងៃនេះ។',
    guideE: 'Remember death’s certainty to live today with integrity, kindness, and relentless diligence.',
    chantK: '«សេចក្ដីស្លាប់នឹងមកដល់ជាទៀងទាត់ ខ្ញុំនឹងមិនប្រហែសក្នុងថ្ងៃនេះឡើយ»',
    chantE: '“Death is certain, timing uncertain; I shall not squander this precious day.”'
  }
]



function handleKeydown(e) {
  if (e.key === 'Escape' && selectedGuardian.value) {
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
