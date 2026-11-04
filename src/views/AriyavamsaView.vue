<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>📜 {{ t('អង្គុត្តរនិកាយ ចតុក្កនិបាត · អរិយវង្សសូត្រ (AN 4.28)', 'Aṅguttara Nikāya 4.28 · Ariyavaṁsa Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('អរិយវង្សធម៌ ៤ ៖ វង្សត្រកូលនៃព្រះអរិយបុគ្គល', 'Ariyavaṁsa 4: Heritage of the Noble Lineage') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'អរិយវង្ស គឺជាប្រពៃណី និងគុណធម៌ដ៏បរិសុទ្ធ ៤ យ៉ាង (សន្តោសលើចីវរ, សន្តោសលើបិណ្ឌបាត, សន្តោសលើសេនាសនៈ, និងសេចក្ដីរីករាយក្នុងការចម្រើនភាវនា) ដែលព្រះអរិយបុគ្គលគ្រប់ជំនាន់បានប្រកាន់ខ្ជាប់។ ព្រះបាទអសោកមហារាជ ធ្លាប់បានចារឹកលើសិលាចារឹក បង្គាប់ឱ្យព្រះសង្ឃគ្រប់អង្គត្រូវតែរៀនសូត្រសូត្រនេះជាកាតព្វកិច្ច។',
            'Ariyavaṁsa represents the 4 ancient, pristine virtues of the Noble Ones: contentment with modest clothing, food, and lodging, coupled with delight in meditative cultivation. Emperor Asoka historically inscribed this very sutta in his Bhabru Edict, urging the entire monastic order to study it continuously.'
          ) }}
        </p>
      </div>
    </section>

    <!-- Emperor Asoka Edict Callout -->
    <div class="card-paper p-4 border" :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
      <div class="flex items-start gap-3">
        <span class="text-2xl shrink-0">🏛️</span>
        <div class="text-xs sm:text-sm space-y-1">
          <strong class="font-bold" :style="{ color: 'var(--accent)' }">
            {{ t('សិលាចារឹកព្រះបាទអសោកមហារាជ (Bhabru Rock Edict)', 'Emperor Asoka’s Historic Mandate') }}
          </strong>
          <p :style="{ color: 'var(--ink)' }">
            {{ t(
              '«អរិយវង្សសូត្រ» គឺជាសូត្រមួយក្នុងចំណោមសូត្រមួយចំនួនតូច ដែលព្រះបាទអសោកបានបញ្ជាក់ឈ្មោះលើផ្ទាំងថ្មដោយផ្ទាល់ ដោយទ្រង់មានបន្ទូលថា «ដើម្បីឱ្យព្រះសទ្ធម្មឋិតថេរជាយូរអង្វែង ភិក្ខុ ភិក្ខុនី និងឧបាសក ឧបាសិកា ត្រូវតែស្តាប់ និងទន្ទេញធម៌នេះរឿយៗ»។',
              'The Ariyavaṁsa Sutta is one of the rare discourses explicitly named by Emperor Asoka in rock edicts, declaring: “That the True Dhamma may endure long, let monastics and lay followers listen to and recite this discourse again and again.”'
            ) }}
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

    <!-- TAB 1: 4 Ariyavamsa Cards -->
    <section v-if="activeTab === 'virtues'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(item, idx) in ariyavamsaList"
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
                {{ t('វង្សទី', 'Lineage') }} {{ khNum(idx + 1) }}
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
                💡 {{ t('គន្លឹះអនុវត្ត៖', 'Practice Essence:') }}
              </span>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(item.essenceK, item.essenceE) }}</p>
            </div>
          </div>

          <div>
            <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold"
                 :style="{ borderColor: 'var(--border)', color: 'var(--accent)' }">
              <span>{{ t('អានព្រះពុទ្ធវចនៈ និងការពន្យល់', 'Read Sutta & Exposition') }}</span>
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
                <!-- Canonical Sutta Verse -->
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
                    <span>{{ t('អត្ថន័យ និងការមិនលើកតម្កើងខ្លួន', 'Noble Attitude & Non-Conceit') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(item.fullDescK, item.fullDescE) }}
                  </p>
                </div>

                <!-- The Danger of False Contentment -->
                <div class="p-3.5 rounded-xl border space-y-1.5"
                     :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>🛡️</span>
                    <span>{{ t('ការមិនលើកតម្កើងខ្លួន មិនបន្ទាបអ្នកដទៃ', 'Neither Exalting Oneself nor Disparaging Others') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
                    {{ t(item.nonConceitK, item.nonConceitE) }}
                  </p>
                </div>

                <!-- Practical Everyday Living -->
                <div class="p-3.5 rounded-xl space-y-1.5" :style="{ background: 'var(--bg-card-2)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>💡</span>
                    <span>{{ t('ការអនុវត្តជាក់ស្ដែងសម្រាប់គ្រហស្ថ', 'Lay Practitioner Application') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
                    {{ t(item.layApplicationK, item.layApplicationE) }}
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

    <!-- TAB 2: Modern Minimalism vs Consumerism -->
    <section v-if="activeTab === 'minimalism'" class="card-paper p-6 space-y-5">
      <div class="max-w-2xl mx-auto space-y-2 text-center">
        <span class="text-3xl">🌿</span>
        <h2 class="text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('អរិយវង្សធម៌ ៖ ឱសថព្យាបាលជំងឺសម្ភារនិយម', 'Ariyavaṁsa: Antidote to Modern Consumerism') }}
        </h2>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ក្នុងយុគសម័យដែលមនុស្សរត់តាមម៉ូដ សម្ភារប្រណីត និងការប្រៀបធៀបខ្លួនឯងលើបណ្តាញសង្គម អរិយវង្សធម៌ផ្ដល់នូវទស្សនវិជ្ជាសាមញ្ញនិយម (Minimalism) ដ៏ជ្រាលជ្រៅបំផុត៖',
            'In an era plagued by fast fashion, conspicuous luxury, and toxic social media status games, the Ariyavaṁsa virtues provide the ultimate spiritual minimalism:'
          ) }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto pt-2">
        <div v-for="(m, mIdx) in modernContrasts" :key="mIdx"
             class="p-4 rounded-xl border space-y-2"
             :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="text-2xl">{{ m.icon }}</span>
            <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">
              {{ t(m.titleK, m.titleE) }}
            </h4>
          </div>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(m.descK, m.descE) }}
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

const activeTab = ref('virtues')
const expandedId = ref(null)
function toggleExpand(id) { expandedId.value = expandedId.value === id ? null : id }

const tabs = [
  { id: 'virtues', icon: '📜', titleK: 'អរិយវង្សទាំង ៤', titleE: '4 Noble Virtues' },
  { id: 'minimalism', icon: '🌿', titleK: 'សាមញ្ញនិយម', titleE: 'Spiritual Minimalism' }
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

const ariyavamsaList = [
  {
    id: 'civara',
    icon: '👘',
    titleK: '១. ចីវរសន្តោស (សន្តោសលើសម្លៀកបំពាក់)',
    titleE: '1. Contentment with Any Robe / Clothing',
    pali: 'Cīvara-santuṭṭhi',
    shortDescK: 'ត្រេកអរពេញចិត្តនឹងចីវរ ឬសម្លៀកបំពាក់តាមដែលមាន មិនស្វែងរកដោយអនេសនៈ (វិធីខុសច្បាប់) និងមិនអួតអាងលើសម្រស់សម្លៀកបំពាក់។',
    shortDescE: 'Contentment with whatever modest clothing is obtained, seeking it righteously without vain luxury, vanity, or covetousness.',
    essenceK: 'ស្លៀកពាក់ដើម្បីការពារកម្តៅ រងារ និងសត្វល្អិត មិនមែនដើម្បីអួតបង្ហាញទ្រព្យសម្បត្តិឡើយ។',
    essenceE: 'Wear clothes for thermal protection and decency, not for ostentatious status flexing.',
    suttaPali: 'Idha bhikkhave bhikkhu santuṭṭho hoti itarītarena cīvarena...',
    suttaK: 'ម្នាលភិក្ខុទាំងឡាយ ភិក្ខុក្នុងសាសនានេះ ជាអ្នកសន្តោសដោយចីវរតាមមានតាមបាន...',
    suttaE: 'Here, monks, a monk is content with any kind of robe, praising contentment with robes.',
    fullDescK: 'ព្រះសម្មាសម្ពុទ្ធទ្រង់សរសើរអ្នកដែលមិនរើសចីវរប្រណីត។ បើបានចីវរសំពត់បង្សុកូល (សំពត់រើសពីគំនរសម្រាម) ក៏ស្លៀកបាន បើបានចីវរល្អពីទាយក ក៏ទទួលដោយមិនជាប់ជំពាក់។ សំខាន់បំផុតគឺ «មិនលើកតម្កើងខ្លួនថាអញស្លៀកសាមញ្ញ ហើយមើលងាយអ្នកស្លៀកប្រណីតឡើយ»។',
    fullDescE: 'The Buddha praised non-attachment to attire. Rag-robes from charnel grounds or fine silk offered by householders are received with identical equanimity. Crucially, the practitioner never boasts about their austerity while despising others.',
    nonConceitK: 'ការសន្តោសពិត មិនបង្កើតមានៈ (Ego) ឡើយ។ អ្នកខ្លះស្លៀកពាក់កញ្ចាស់ដើម្បីឱ្យគេសរសើរថាជាអ្នកធម៌ នោះមិនមែនជាអរិយវង្សទេ។',
    nonConceitE: 'Authentic contentment generates zero conceit. Wearing tattered clothes merely to project faux holiness violates the Noble Lineage.',
    layApplicationK: 'ឈប់ដេញតាមម៉ូដ Fast Fashion ទិញសម្លៀកបំពាក់ព្រោះតែភាពចាំបាច់ និងភាពសមរម្យ មិនមែនទិញព្រោះតែចង់បង្អួតអ្នកដទៃ។',
    layApplicationE: 'Exit the treadmill of fast fashion; purchase apparel for durability, utility, and modesty rather than social media validation.'
  },
  {
    id: 'pindapata',
    icon: '🍲',
    titleK: '២. បិណ្ឌបាតសន្តោស (សន្តោសលើអាហារ)',
    titleE: '2. Contentment with Any Almsfood',
    pali: 'Piṇḍapāta-santuṭṭhi',
    shortDescK: 'ត្រេកអរនឹងចង្ហាន់ ឬអាហារដែលខ្លួនទទួលបាន ទោះឆ្ងាញ់ ឬមិនសូវឆ្ងាញ់ បរិភោគដើម្បីទ្រទ្រង់ជីវិត មិនមែនបរិភោគដើម្បីស្រវឹង។',
    shortDescE: 'Contentment with whatever wholesome food is received, consuming it like medicine to sustain the body, free from gluttony.',
    essenceK: 'បរិភោគដូចគេលាបប្រេងលើកង់រទេះ ដើម្បីឱ្យរទេះរត់ទៅមុខបាន មិនមែនបរិភោគដើម្បីលេងសើចឡើយ។',
    essenceE: 'Eat as one applies axle-grease to a wagon—merely to keep the wheels turning, not for sensual entertainment.',
    suttaPali: 'Santuṭṭho hoti itarītarena piṇḍapātena, piṇḍapātasantuṭṭhiyā ca vaṇṇavādī...',
    suttaK: 'ជាអ្នកសន្តោសដោយបិណ្ឌបាតតាមមានតាមបាន និងជាអ្នកពោលសរសើរគុណនៃបិណ្ឌបាតសន្តោស...',
    suttaE: 'He is content with any kind of almsfood, speaking in praise of contentment with food.',
    fullDescK: 'អាហារគ្រាន់តែជាថ្នាំបំបាត់ការស្រេកឃ្លាន។ ព្រះអរិយៈបរិភោគអាហារដោយមានសតិសម្បជញ្ញៈ មិនរើសអើងអាហារថោក ឬថ្លៃឡើយ។ ទ្រង់មិនខឹងសម្បារកាលបើចង្ហាន់មិនត្រូវមាត់ ហើយក៏មិនភ្លើតភ្លើនកាលបើបានអាហារឆ្ងាញ់ពិសារដែរ។',
    fullDescE: 'Food is strictly medicine to alleviate the disease of hunger. Noble disciples eat mindfully without complaining about plain food or being seduced by delicacies, remaining balanced in taste.',
    nonConceitK: 'មិនត្អូញត្អែរចំពោះអ្នកផ្ដល់អាហារ និងមិនអួតអាងថាខ្លួនបរិភោគតិចជាងគេ។',
    nonConceitE: 'Never grumbles to food donors, nor brags about extreme fasting regimes to claim superior holiness.',
    layApplicationK: 'ជៀសវាងការខ្ជះខ្ជាយអាហារ បរិភោគអាហារសុខភាពសាមញ្ញ មិនចាំបាច់ចំណាយប្រាក់ច្រើនលើភោជនីយដ្ឋានប្រណីតដើម្បីតែថតរូបបង្អួតគេ។',
    layApplicationE: 'Prevent food waste; embrace simple, nutritious meals without squandering fortunes on luxury dining solely for photo clout.'
  },
  {
    id: 'senasana',
    icon: '🛖',
    titleK: '៣. សេនាសនសន្តោស (សន្តោសលើទីស្នាក់នៅ)',
    titleE: '3. Contentment with Any Lodging / Shelter',
    pali: 'Senāsana-santuṭṭhi',
    shortDescK: 'ត្រេកអរនឹងទីស្នាក់នៅ ផ្ទះ ឬកុដិ តាមដែលមាន ទោះជាក្រោមម្លប់ឈើ រូងភ្នំ ឬបន្ទប់តូច មិនទាមទារភាពប្រណីតហួសហេតុ។',
    shortDescE: 'Contentment with whatever shelter is provided—whether a cave, tree root, or modest cottage—without demanding opulent luxuries.',
    essenceK: 'ផ្ទះគ្រាន់តែជាកន្លែងការពារខ្យល់ ភ្លៀង កម្តៅថ្ងៃ និងជាទីស្ងប់សម្រាប់ការចម្រើនធម៌។',
    essenceE: 'Shelter is simply protection against rain, heat, and beasts—a sanctuary for spiritual reflection.',
    suttaPali: 'Santuṭṭho hoti itarītarena senāsanena, senāsanasantuṭṭhiyā ca vaṇṇavādī...',
    suttaK: 'ជាអ្នកសន្តោសដោយសេនាសនៈតាមមានតាមបាន និងជាអ្នកពោលសរសើរគុណនៃសេនាសនសន្តោស...',
    suttaE: 'He is content with any kind of lodging, praising contentment with simple shelter.',
    fullDescK: 'ព្រះពុទ្ធបានប្រសូតក្រោមម្លប់ឈើ ត្រាស់ដឹងក្រោមម្លប់ឈើ និងបរិនិព្វានក្រោមម្លប់ឈើ។ ទីស្នាក់នៅធំទ្រសុកទ្រសាយច្រើនតែនាំមកនូវការថែទាំ ទុក្ខកង្វល់ និងការប្រកាន់កម្មសិទ្ធិ។ ការសន្តោសលើទីស្នាក់នៅ ធ្វើឱ្យចិត្តស្រាល គ្មានការព្រួយបារម្ភ។',
    fullDescE: 'The Buddha was born under a tree, awakened under a tree, and attained Parinibbāna under twin trees. Mansions bring maintenance anxiety and defensive territoriality. Contentment with simple shelter yields unburdened freedom.',
    nonConceitK: 'ទោះស្នាក់នៅក្នុងកុដិប្រណីត ឬរូងភ្នំ ក៏មិនមានការប្រៀបធៀប ឬអំនួតក្នុងចិត្ត។',
    nonConceitE: 'Whether lodging in a donation-built pavilion or a damp forest cave, mental poise remains unaffected.',
    layApplicationK: 'រស់នៅក្នុងគេហដ្ឋានសមរម្យតាមលទ្ធភាព កុំជាប់បំណុលវ័ណ្ឌកដោយសារតែចង់ទិញវីឡាធំៗដើម្បីតែអួតអ្នកជិតខាង។',
    layApplicationE: 'Live within your means; avoid crushing mortgage debt chased merely to match the ostentatious suburban mansions of neighbors.'
  },
  {
    id: 'bhavana',
    icon: '🧘',
    titleK: '៤. ភាវនារាមតា និង បហានារាមតា',
    titleE: '4. Delighting in Meditation & Relinquishment',
    pali: 'Bhāvanārāmatā & Pahānārāmatā',
    shortDescK: 'សេចក្ដីរីករាយក្នុងការចម្រើនកុសលធម៌ (ភាវនា) និងការរីករាយក្នុងការលះបង់នូវអកុសលកិលេស (បហានៈ) ដោយមិនខ្ជះខ្ជាយពេលវេលា។',
    shortDescE: 'Delighting in the cultivation of wholesome mental states and delighting in the abandonment of defilements—the crown of Ariyavaṁsa.',
    essenceK: '៣ ប្រការខាងលើជាការកាត់បន្ថយតម្រូវការខាងក្រៅ រីឯប្រការទី ៤ នេះជាការបំពេញថាមពលខាងក្នុងដ៏ពិតប្រាកដ។',
    essenceE: 'The first 3 virtues minimize external material baggage; this 4th virtue fuels internal spiritual awakening.',
    suttaPali: 'Bhāvanārāmo hoti bhāvanārato, pahānārāmo hoti pahānarato...',
    suttaK: 'ជាអ្នកមានសេចក្ដីរីករាយក្នុងការចម្រើនភាវនា ត្រេកអរក្នុងការចម្រើនភាវនា មានសេចក្ដីរីករាយក្នុងការលះបង់...',
    suttaE: 'He delights in meditation, delights in development; he delights in abandoning defilements, cultivating purity.',
    fullDescK: 'អរិយវង្សធម៌ ៣ ដំបូងគ្រាន់តែជាមធ្យោបាយកាត់បន្ថយកិច្ចការខាងក្រៅប៉ុណ្ណោះ។ ពេលមិនបាច់ខ្វល់រឿងខោអាវ ម្ហូប និងផ្ទះ យើងសល់ពេលវេលាដ៏ច្រើនដើម្បីចម្រើនភាវនា។ បើគ្រាន់តែសន្តោសលើរបស់របរតែខ្ជិលមិនព្រមភាវនា ក៏មិនអាចក្លាយជាព្រះអរិយៈបានឡើយ។ ដូច្នេះហើយ ទើបប្រការទី ៤ នេះជាបេះដូងនៃអរិយវង្ស។',
    fullDescE: 'The first 3 virtues clear mundane distraction. When clothing, food, and housing are simple, immense cognitive bandwidth is liberated. But simplicity without active mental cultivation is sterile. Hence, meditation and letting go form the beating heart of the Ariyavaṁsa.',
    nonConceitK: 'ពេលសម្រេចសមាធិ ឬវិបស្សនា មិនអួតអាង មិនមើលងាយអ្នកដទៃ គឺកាន់តែបន្ទាបខ្លួន និងមានមេត្តា។',
    nonConceitE: 'Attaining deep stillness never produces spiritual arrogance; it fosters profound humility and compassion.',
    layApplicationK: 'ឆ្លៀតពេលវេលារាល់ថ្ងៃយ៉ាងហោចណាស់ ១៥-៣០ នាទី អង្គុយសមាធិ ឬស្តាប់ធម៌ ជាជាងចំណាយពេលអូសទូរសព្ទឥតប្រយោជន៍។',
    layApplicationE: 'Dedicate 15 to 30 minutes daily to meditation and Dhamma study, protecting this sanctuary from digital doomscrolling.'
  }
]

const modernContrasts = [
  {
    icon: '🛍️',
    titleK: 'សម្លៀកបំពាក់ ៖ សាមញ្ញ vs ម៉ូដទាន់សម័យ',
    titleE: 'Clothing: Utility vs Fast Fashion',
    descK: 'អរិយវង្សបង្រៀនឱ្យមើលតម្លៃសម្លៀកបំពាក់ត្រង់ការប្រើប្រាស់ មិនមែនលើស្លាកយីហោ (Brand) ដើម្បីទាក់ទាញការសរសើរឡើយ។',
    descE: 'Ariyavaṁsa measures garments by comfort and utility, not by luxury logos flaunted for fleeting validation.'
  },
  {
    icon: '🍽️',
    titleK: 'អាហារ ៖ ជីវជាតិ vs ការស៊ីផឹកហ៊ឺហា',
    titleE: 'Food: Nourishment vs Indulgence',
    descK: 'បរិភោគដើម្បីសុខភាព និងកម្លាំងបំពេញការងារ មិនមែនចំណាយទ្រព្យសម្បត្តិហួសហេតុលើការញ៉ាំផឹកអួតគ្នានោះទេ។',
    descE: 'Consuming food for bodily wellness and sustained energy, rather than social status displays and wasteful banquets.'
  },
  {
    icon: '🏡',
    titleK: 'លំនៅដ្ឋាន ៖ ភាពស្ងប់ vs វិមានប្រណីត',
    titleE: 'Shelter: Peace vs McMansions',
    descK: 'ផ្ទះតូចតែមានសន្តិភាព គ្មានបំណុល ប្រសើរជាងវិមានធំទ្រសុកទ្រសាយតែពោរពេញដោយភាពតានតឹង និងការឈ្លោះប្រកែក។',
    descE: 'A modest, debt-free home filled with serenity is infinitely superior to an opulent palace burdened by anxiety.'
  },
  {
    icon: '🧘',
    titleK: 'ចិត្ត ៖ ការចម្រើនសតិ vs ការកម្សាន្តឥតព្រំដែន',
    titleE: 'Mind: Contemplation vs Entertainment',
    descK: 'ការចំណាយពេលស្វែងរកសេចក្ដីសុខពីខាងក្នុង តាមរយៈសមាធិ ជាជាងដេញតាមការកម្សាន្តខាងក្រៅដែលមិនចេះឆ្អែតឆ្អន់។',
    descE: 'Cultivating inner peace through meditation, instead of being addicted to endless dopamine hits from entertainment.'
  }
]



function handleKeydown(e) {
  if (e.key === 'Escape' && selectedVirtue.value) {
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
