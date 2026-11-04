<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🌿 {{ t('វិន័យបិដក និងមជ្ឈិមនិកាយ · បច្ចវេក្ខណវិធី', 'Vinaya & Majjhima Nikāya · Mindful Consumption') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('បច្ច័យ ៤ ៖ សិល្បៈនៃការប្រើប្រាស់បច្ច័យដោយមានសតិ', 'The 4 Requisites: The Art of Mindful Consumption') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'បច្ច័យ ៤ (ចីវរ, បិណ្ឌបាត, សេនាសនៈ, គិលានភេសជ្ជៈ) គឺជាតម្រូវការចាំបាច់បំផុតសម្រាប់ការរស់រាននៃជីវិត។ ព្រះពុទ្ធបានបង្រៀននូវ «បច្ចវេក្ខណវិធី» គឺការពិចារណារាល់ពេលប្រើប្រាស់ ដើម្បីកុំឱ្យចិត្តធ្លាក់ចូលក្នុងអំណាចតណ្ហា ស្រវឹងនឹងសម្ភារៈ ឬជំពាក់បំណុលកម្មលោកិយ (ឥណបរិភោគ)។',
            'The 4 Requisites—Clothing, Food, Shelter, and Medicine—are biological necessities for survival. The Buddha instituted the practice of Reflective Consumption (Paccavekkhaṇa) to prevent the mind from falling into consumerist intoxication, sensual obsession, or incurring spiritual debt (Iṇaparibhoga).'
          ) }}
        </p>
      </div>
    </section>

    <!-- The 4 Forms of Consumption Callout -->
    <div class="card-paper p-5 border space-y-3" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
      <div class="text-center max-w-lg mx-auto space-y-1">
        <span class="text-xs font-bold uppercase tracking-wider" :style="{ color: 'var(--accent)' }">
          {{ t('ប្រភេទនៃការបរិភោគ ៤ យ៉ាងក្នុងគម្ពីរអដ្ឋកថា', 'The 4 Modes of Consuming Requisites') }}
        </span>
        <h3 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
          {{ t('តើអ្នកកំពុងប្រើប្រាស់របស់របរក្នុងលក្ខណៈបែបណា?', 'How Are You Consuming Life Requisites?') }}
        </h3>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
        <div v-for="(mode, mIdx) in consumptionModes" :key="mIdx"
             class="p-3.5 rounded-xl border text-center space-y-1"
             :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <span class="text-2xl block mb-1">{{ mode.icon }}</span>
          <h4 class="font-bold text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
            {{ t(mode.titleK, mode.titleE) }}
          </h4>
          <span class="text-[11px] font-mono block" :style="{ color: 'var(--accent)' }">{{ mode.pali }}</span>
          <p class="text-[11px] leading-relaxed pt-1" :style="{ color: 'var(--ink-muted)' }">
            {{ t(mode.descK, mode.descE) }}
          </p>
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

    <!-- TAB 1: 4 Requisites Grid -->
    <section v-if="activeTab === 'requisites'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(item, idx) in requisitesList"
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
                {{ t('បច្ច័យទី', 'Requisite') }} {{ khNum(idx + 1) }}
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

            <!-- Purpose of Reflection -->
            <div class="p-3 rounded-xl mb-4 text-xs space-y-1" :style="{ background: 'var(--bg-card-2)' }">
              <span class="font-bold block" :style="{ color: 'var(--accent)' }">
                🎯 {{ t('គោលបំណងពិតក្នុងការប្រើប្រាស់៖', 'Authentic Purpose:') }}
              </span>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(item.purposeK, item.purposeE) }}</p>
            </div>
          </div>

          <div>
            <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold"
                 :style="{ borderColor: 'var(--border)', color: 'var(--accent)' }">
              <span>{{ t('អានបាលីពិចារណា និងគតិបណ្ឌិត', 'Read Pāli Formula & Wisdom') }}</span>
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
                <!-- Canonical Pāli Formula -->
                <div class="p-3.5 rounded-xl border-l-4 font-serif text-xs leading-relaxed"
                     :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
                  <p class="italic mb-1 font-bold">« {{ item.formulaPali }} »</p>
                  <p class="text-xs opacity-80">— {{ t(item.formulaK, item.formulaE) }}</p>
                </div>

                <!-- Deep Meaning & Meditation -->
                <div class="space-y-1.5">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>📖</span>
                    <span>{{ t('អត្ថន័យ និងការពិចារណាដោយបញ្ញា', 'Wisdom Contemplation') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(item.fullDescK, item.fullDescE) }}
                  </p>
                </div>

                <!-- What to Avoid (Defilements blocked) -->
                <div class="p-3.5 rounded-xl border space-y-1.5"
                     :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 text-red-500">
                    <span>⚠️</span>
                    <span>{{ t('កិលេសដែលត្រូវជៀសវាង', 'Sensual Traps to Avoid') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
                    {{ t(item.trapsK, item.trapsE) }}
                  </p>
                </div>

                <!-- Modern Lay Application -->
                <div class="p-3.5 rounded-xl space-y-1.5" :style="{ background: 'var(--bg-card-2)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>💡</span>
                    <span>{{ t('ការអនុវត្តជាក់ស្ដែងសម្រាប់មនុស្សសម័យថ្មី', 'Everyday Action for Modern Life') }}</span>
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

    <!-- TAB 2: Mindful Living in the Consumer Age -->
    <section v-if="activeTab === 'modern'" class="card-paper p-6 space-y-5">
      <div class="max-w-2xl mx-auto space-y-2 text-center">
        <span class="text-3xl">🧘</span>
        <h2 class="text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('ការអនុវត្តបច្ចវេក្ខណៈក្នុងជីវិតរស់នៅសម័យទំនើប', 'Mindful Reflection in Daily Life') }}
        </h2>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'បច្ចវេក្ខណវិធី មិនមែនសម្រាប់តែព្រះសង្ឃប៉ុណ្ណោះទេ តែជាក្បួនហាត់សតិដ៏អស្ចារ្យសម្រាប់គ្រហស្ថ ជួយឱ្យយើងមិនក្លាយជាទាសករនៃការផ្សាយពាណិជ្ជកម្ម និងការទិញទំនិញឥតប្រយោជន៍៖',
            'Mindful reflection is an indispensable psychological toolkit for modern householders, preventing you from becoming an algorithmic slave to predatory marketing and compulsive shopping:'
          ) }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto pt-2">
        <div v-for="(p, pIdx) in modernReflections" :key="pIdx"
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

const activeTab = ref('requisites')
const expandedId = ref(null)
function toggleExpand(id) { expandedId.value = expandedId.value === id ? null : id }

const tabs = [
  { id: 'requisites', icon: '🌿', titleK: 'បច្ច័យទាំង ៤', titleE: 'The 4 Requisites' },
  { id: 'modern', icon: '🧘', titleK: 'ការរស់នៅដោយមានសតិ', titleE: 'Mindful Living' }
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

const consumptionModes = [
  {
    icon: '🥷',
    titleK: '១. ថេយ្យបរិភោគ',
    titleE: '1. Consumption by Theft',
    pali: 'Theyyaparibhoga',
    descK: 'ការប្រើប្រាស់របស់ទាយកដោយបុគ្គលទុស្សីល (គ្មានសីល) ស្មើនឹងការលួចទ្រព្យគេ។',
    descE: 'An immoral person consuming offerings—morally equivalent to theft.'
  },
  {
    icon: '💳',
    titleK: '២. ឥណបរិភោគ',
    titleE: '2. Consumption as Debt',
    pali: 'Iṇaparibhoga',
    descK: 'ការប្រើប្រាស់របស់របរដោយមិនបានពិចារណាសោះ ស្មើនឹងការជំពាក់បំណុលគេ។',
    descE: 'Consuming heedlessly without mindful reflection—incurring a karmic debt.'
  },
  {
    icon: '📜',
    titleK: '៣. ទាយជ្ជបរិភោគ',
    titleE: '3. Consumption as Heir',
    pali: 'Dāyajjaparibhoga',
    descK: 'ព្រះអរិយបុគ្គលថ្នាក់ទាប (សេក្ខបុគ្គល ៧ ពួក) ប្រើប្រាស់ក្នុងនាមជាកូនចៅមរតកព្រះពុទ្ធ។',
    descE: 'Noble trainees (Sekhas) consuming as legitimate spiritual heirs of the Buddha.'
  },
  {
    icon: '👑',
    titleK: '៤. សាមិបរិភោគ',
    titleE: '4. Consumption as Master',
    pali: 'Sāmiparibhoga',
    descK: 'ព្រះអរហន្តប្រើប្រាស់ដោយចិត្តប្រាសចាកកិលេស ក្នុងនាមជាម្ចាស់លើតណ្ហាទាំងពួង។',
    descE: 'Arahants consuming free from all grasping—sovereign masters of consciousness.'
  }
]

const requisitesList = [
  {
    id: 'civara',
    icon: '👘',
    titleK: '១. ចីវរបច្ច័យ (សម្លៀកបំពាក់)',
    titleE: '1. Clothing & Robes',
    pali: 'Cīvara-paccaya',
    shortDescK: 'សម្លៀកបំពាក់សម្រាប់ការពារកម្តៅ រងារ សត្វល្អិតខាំ និងបិទបាំងសរីរាង្គកាយ មិនមែនដើម្បីអួតសម្រស់ឡើយ។',
    shortDescE: 'Clothing for thermal protection, insect defense, and modest decency—free from vanity and seduction.',
    purposeK: 'ការពាររាងកាយឱ្យមានសុខភាពល្អ ដើម្បីងាយស្រួលក្នុងការបំពេញកុសលធម៌។',
    purposeE: 'Maintains bodily comfort and modesty, facilitating undisturbed spiritual focus.',
    formulaPali: 'Paṭisaṅkhā yoniso cīvaraṁ paṭisevati, yāvadeva sītassa paṭighātāya, uṇhassa paṭighātāya...',
    formulaK: 'បុគ្គលពិចារណាដោយឧបាយប្រាជ្ញាហើយ ទើបប្រើប្រាស់ចីវរ គ្រាន់តែដើម្បីការពារត្រជាក់ ការពារកម្តៅ ការពាររបោម មូស ខ្យល់ ថ្ងៃ និងសត្វលូនក្រាប គ្រាន់តែដើម្បីបិទបាំងអវយវៈកំបាំង...',
    formulaE: 'Reflecting wisely, one uses the robe: solely to ward off cold, heat, mosquitoes, wind, sunburn, and to cover bodily shame...',
    fullDescK: 'មុនពេលស្លៀកពាក់ ឬទិញខោអាវថ្មី ចូររំឭកថា មនុស្សយើងត្រូវការសម្លៀកបំពាក់គ្រាន់តែជាខែលការពាររាងកាយពីធម្មជាតិប៉ុណ្ណោះ។ នៅពេលយើងភ្លេចខ្លួន យើងនឹងចំណាយប្រាក់រាប់ពាន់ដុល្លារដើម្បីទិញតែស្លាកយីហោ (Brand) មកបំប៉នអំនួត (Ego)។',
    fullDescE: 'Before purchasing garments, remind yourself that clothing is biological shielding. Heedless of this, humans squander fortunes on luxury labels merely to feed fragile narcissism.',
    trapsK: 'ការស្លៀកពាក់ដើម្បីបង្អួតទ្រព្យ ការស្លៀកពាក់ទាក់ទាញកាមតណ្ហា ឬការមើលងាយអ្នកស្លៀកពាក់សាមញ្ញ។',
    trapsE: 'Wearing clothes to trigger lust, flaunt elite status, or mock those dressed in humble simplicity.',
    actionK: 'ទិញសម្លៀកបំពាក់ព្រោះតែភាពចាំបាច់ និងភាពធន់ មិនមែនព្រោះតែទាន់ម៉ូដមួយភ្លែតឡើយ។',
    actionE: 'Buy apparel for durability and utility; decline seasonal consumerist trends.'
  },
  {
    id: 'pindapata',
    icon: '🍲',
    titleK: '២. បិណ្ឌបាតបច្ច័យ (អាហារ)',
    titleE: '2. Almsfood & Daily Nutrition',
    pali: 'Piṇḍapāta-paccaya',
    shortDescK: 'អាហារសម្រាប់ទ្រទ្រង់រាងកាយឱ្យរស់រាន មិនមែនសម្រាប់ស្រវឹង លេងសើច ឬបំប៉នសាច់ឱ្យស្អាតសង្ហាឡើយ។',
    shortDescE: 'Nourishment to sustain vitality and alleviate hunger, devoid of gluttony, intoxication, or vanity.',
    purposeK: 'បំបាត់ការស្រេកឃ្លានចាស់ ការពារការស្រេកឃ្លានថ្មី និងទ្រទ្រង់ព្រហ្មចរិយធម៌។',
    purposeE: 'Quiets existing hunger without creating digestive sluggishness, powering ethical vitality.',
    formulaPali: 'Neva davāya na madāya na maṇḍanāya na vibhūsanāya, yāvadeva imassa kāyassa ṭhitiyā...',
    formulaK: 'មិនមែនដើម្បីលេង មិនមែនដើម្បីស្រវឹង មិនមែនដើម្បីលម្អ មិនមែនដើម្បីផាត់ពណ៌ឡើយ គឺគ្រាន់តែដើម្បីឱ្យកាយនេះតាំងនៅបានយូរ...',
    formulaE: 'Not for amusement, not for intoxication, not for physical beauty, but solely for the endurance and sustenance of this body...',
    fullDescK: 'ការបរិភោគដោយមានសតិ គឺជាការដឹងគុណអាហារ និងដឹងកម្រិតល្មម (ភោជនេមត្តញ្ញុតា)។ បរិភោគដូចអ្នកធ្វើដំណើរលាបប្រេងលើកង់រទេះ ឬដូចឪពុកម្តាយបរិភោគសាច់កូនក្នុងវាលខ្សាច់ (បរិភោគដើម្បីតែរស់ មិនមែនដោយតណ្ហា)។',
    fullDescE: 'Mindful eating embodies dietary moderation (Bhojane mattaññutā). Consuming meals like applying axle-grease to a wagon—functional nourishment without sensory clinging.',
    trapsK: 'ការញ៉ាំជោកជាំ (Gluttony), ការស៊ីផឹកខ្ជះខ្ជាយ, និងការញៀនរសជាតិឆ្ងាញ់រហូតបាត់បង់សតិ។',
    trapsE: 'Binge eating, food waste, and sensory addiction that dulls meditation into sluggish food comas.',
    actionK: 'មុនពេលញ៉ាំបាយ ផ្អាក ៣ វិនាទី ដឹងគុណដល់កសិករ និងអ្នកចំអិន រួចញ៉ាំត្រឹមតែឆ្អែត ៨០%។',
    actionE: 'Pause for 3 seconds before eating to express gratitude, eating only until 80% full.'
  },
  {
    id: 'senasana',
    icon: '🛖',
    titleK: '៣. សេនាសនបច្ច័យ (ទីស្នាក់នៅ / ផ្ទះ)',
    titleE: '3. Lodging & Shelter',
    pali: 'Senāsana-paccaya',
    shortDescK: 'កន្លែងស្នាក់នៅសម្រាប់ការពារអាកាសធាតុ កម្តៅ ភ្លៀង ខ្យល់ និងជាទីកំបាំងស្ងាត់សម្រាប់ការសម្រាក និងភាវនា។',
    shortDescE: 'Shelter providing safety against elements, seasonal hazards, and offering seclusion for meditation.',
    purposeK: 'កម្ចាត់គ្រោះថ្នាក់ពីធម្មជាតិ និងបង្កើតបរិយាកាសស្ងប់ស្ងាត់សម្រាប់ចិត្ត។',
    purposeE: 'Wards off natural perils while nurturing a calm sanctuary for mindfulness.',
    formulaPali: 'Yāvadeva utuparissayavinodanapaṭisallānārāmatthaṁ...',
    formulaK: 'គ្រាន់តែដើម្បីកម្ចាត់គ្រោះថ្នាក់ដែលកើតអំពីឧតុ និងដើម្បីសេចក្ដីរីករាយក្នុងការសម្ងំនៅស្ងប់ស្ងាត់...',
    formulaE: 'Solely for dispelling seasonal hazards and for delighting in meditative seclusion...',
    fullDescK: 'ផ្ទះធំពេកនាំមកនូវការបោសសម្អាតច្រើន ការព្រួយបារម្ភពីចោរ និងការចំណាយលើការតុបតែង។ ផ្ទះតូចតែស្អាត មានសន្តិភាព ផ្ដល់នូវសេរីភាពផ្លូវចិត្តច្រើនជាង។',
    fullDescE: 'McMansions generate heavy maintenance stress, security paranoia, and aesthetic competition. A compact, clutter-free dwelling liberates tremendous cognitive energy.',
    trapsK: 'ការជាប់ជំពាក់លើទ្រព្យសម្បត្តិផ្ទះសម្បែង ការប្រកាន់ទឹកដី និងការចំណាយហួសសមត្ថភាព។',
    trapsE: 'Territorial attachment, hoarding material clutter, and crippling debt chased for showy architecture.',
    actionK: 'រៀបចំបន្ទប់គេងឱ្យមានរបៀប រៀបចំកន្លែងស្ងាត់មួយជ្រុងសម្រាប់អង្គុយសមាធិ និងអានសៀវភៅ។',
    actionE: 'Declutter your living quarters; preserve one quiet, unadorned corner dedicated purely to sitting meditation.'
  },
  {
    id: 'bhesajja',
    icon: '💊',
    titleK: '៤. គិលានប្បច្ច័យភេសជ្ជៈ (ថ្នាំសង្កូវ)',
    titleE: '4. Medicinal Requisites',
    pali: 'Gilāna-paccaya-bhesajja',
    shortDescK: 'ឱសថសម្រាប់ព្យាបាលជម្ងឺ រម្ងាប់ទុក្ខវេទនាដែលកើតឡើងក្នុងរាងកាយ ដើម្បីឱ្យកាយមានសុខភាពល្អក្នុងការបដិបត្តិ។',
    shortDescE: 'Medicine and remedies used solely to suppress painful ailments, maintaining physical health for Dhamma work.',
    purposeK: 'បំបាត់ការឈឺចាប់ដែលរារាំងការចម្រើនសមាធិ និងរក្សាអាយុជីវិត។',
    purposeE: 'Alleviates bodily distress so the mind can sustain deep meditation without physical torment.',
    formulaPali: 'Uppannānaṁ veyyābādhikānaṁ vedanānaṁ paṭighātāya, abyāpajjhaparamatāya...',
    formulaK: 'គ្រាន់តែដើម្បីកម្ចាត់នូវវេទនាទាំងឡាយដែលកើតឡើងព្រោះជម្ងឺ និងដើម្បីភាពមិនមានទុក្ខទោមនស្សជាបរម...',
    formulaE: 'Solely for suppressing arising painful physical feelings, and for the utmost freedom from affliction...',
    fullDescK: 'ថ្នាំមិនមែនជាអាហារឆ្ងាញ់ឡើយ តែជាឧបករណ៍ជួយរាងកាយក្នុងគ្រាមានអាសន្ន។ ព្រះពុទ្ធបានបង្រៀនឱ្យមើលឃើញរាងកាយជាអ្នកជម្ងឺរ៉ាំរ៉ៃ ដែលត្រូវការថ្នាំ (អាហារ ទឹក ការសម្រាក) រៀងរាល់ថ្ងៃ។',
    fullDescE: 'Medicines are practical interventions for physiological equilibrium. The Buddha compared the body to an incurable chronic wound requiring daily dressings of food, water, and hygiene.',
    trapsK: 'ការបណ្ដោយខ្លួនឱ្យញៀនថ្នាំបំបាត់ការឈឺចាប់ ឬការភ័យខ្លាចជំងឺរហូតបាត់បង់សតិស្មារតី។',
    trapsE: 'Substance abuse, hypochondriac panic, and seeking escape in pharmaceuticals rather than inner balance.',
    actionK: 'ថែរក្សាសុខភាពដោយការហាត់ប្រាណ ញ៉ាំអាហារល្អ និងប្រើថ្នាំតាមវេជ្ជបញ្ជាដោយសតិស្មារតី។',
    actionE: 'Maintain robust preventive health through exercise, proper sleep, and taking medications conscientiously.'
  }
]

const modernReflections = [
  {
    icon: '🛒',
    titleK: 'ក្បួនពន្យារការទិញទំនិញ ៤៨ ម៉ោង',
    titleE: 'The 48-Hour Purchase Pause',
    descK: 'មុននឹងទិញរបស់អ្វីមួយលើផ្សារអនឡាញ ចូររង់ចាំ ៤៨ ម៉ោងសិន សួរខ្លួនឯងថា «នេះជាតម្រូវការ (Need) ឬជាចំណង់ (Want)?»។',
    descE: 'Before clicking buy online, enforce a 48-hour pause. Interrogate: Is this an essential biological need, or fleeting ego-craving?'
  },
  {
    icon: '🍽️',
    titleK: 'ការទទួលទានអាហារដោយគ្មានទូរសព្ទ',
    titleE: 'Screen-Free Mindful Dining',
    descK: 'ទុកទូរសព្ទឱ្យឆ្ងាយពេលញ៉ាំបាយ ផ្ដោតអារម្មណ៍លើរសជាតិ ទំពារយឺតៗ និងដឹងច្បាស់នូវពេលដែលរាងកាយឆ្អែតល្មម។',
    descE: 'Banish smartphones during meals. Savor textures, chew thoroughly, and register the precise moment the stomach signals sufficiency.'
  },
  {
    icon: '🧹',
    titleK: 'ការលះបង់របស់របរលើសតម្រូវការ (Declutter)',
    titleE: 'Radical Physical Decluttering',
    descK: 'របស់ណាដែលមិនបានប្រើប្រាស់លើសពី ៦ ខែ ចូរបរិច្ចាគទៅជនក្រីក្រ កាត់បន្ថយការប្រមូលផ្តុំទ្រព្យសម្បត្តិ។',
    descE: 'Items untouched for over 6 months should be donated to the needy. Diminish territorial hoarding to liberate mental space.'
  },
  {
    icon: '🧘',
    titleK: 'ការរំឭកគុណមុនពេលចូលគេង',
    titleE: 'Bedtime Requisite Gratitude',
    descK: 'រំឭកថាថ្ងៃនេះយើងមានដំបូលជ្រក មានអាហារញ៉ាំ មានខោអាវស្លៀក និងមានសុខភាពល្អ នោះជាភ័ព្វសំណាងធំធេងណាស់។',
    descE: 'Before sleep, acknowledge that having a roof, food, clothing, and breath today is a monumental cosmic blessing. Sleep in contentment.'
  }
]



function handleKeydown(e) {
  if (e.key === 'Escape' && selectedRequisite.value) {
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
