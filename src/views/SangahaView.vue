<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៤៨ — អភិធម្មត្ថសង្គហៈ ៩ បរិច្ឆេទ', 'GATHA 48 — ABHIDHAMMATTHA SANGAHA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('អភិធម្មត្ថសង្គហៈ ៩ បរិច្ឆេទ', 'The Nine Chapters of Abhidhammattha Saṅgaha') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('គម្ពីរ «អភិធម្មត្ថសង្គហៈ» តាក់តែងឡើងដោយព្រះអនុរុទ្ធាចារ្យ (ព្រះមហាថេរជនជាតិឥណ្ឌាខាងត្បូង គង់នៅស្រីលង្កា កាលពីសតវត្សរ៍ទី ១១-១២) គឺជាក្បួនខ្នាតមគ្គុទ្ទេសក៍ដ៏ល្បីល្បាញបំផុតសម្រាប់រៀនសូត្រព្រះអភិធម្ម ៧ គម្ពីរ។ គម្ពីរនេះបានបង្រួញអភិធម្មបិដកដ៏ធំធេង មកជាសង្ខេប ៩ បរិច្ឆេទយ៉ាងច្បាស់លាស់ និងជាកម្មវិធីសិក្សាស្តង់ដារនៅតាមពុទ្ធិកសាលា និងវត្តអារាមខ្មែរគ្រប់ជំនាន់។', 'Composed by Ācariya Anuruddha in the 11th–12th century, the Abhidhammattha Saṅgaha is the undisputed master handbook for understanding the entire 7 books of the Abhidhamma Piṭaka. Synthesizing profound metaphysics into nine systematic chapters, it serves as the foundational curriculum across all Theravada monastic colleges and universities.') }}
    </p>

    <!-- Pariccheda Selector Horizontal Strip -->
    <div class="card-paper p-4 sm:p-5 mt-8">
      <p class="chapter-label text-center">{{ t('ជ្រើសរើសបរិច្ឆេទទាំង ៩', 'SELECT PARICCHEDA') }}</p>
      <div class="grid grid-cols-3 sm:grid-cols-9 gap-1.5 sm:gap-2 mt-3">
        <button
          v-for="(p, idx) in paricchedas"
          :key="p.num"
          type="button"
          @click="selectedIdx = idx"
          class="p-2 sm:p-2.5 rounded-xl border text-center transition-all cursor-pointer shadow-xs"
          :style="selectedIdx === idx
            ? { background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)', transform: 'scale(1.05)' }
            : { background: 'var(--bg-card-2)', color: 'var(--ink)', borderColor: 'var(--border)' }"
        >
          <span class="block font-display text-sm sm:text-base font-bold">{{ p.numKh }}</span>
          <span class="block text-[10px] truncate opacity-80">{{ p.shortTitle }}</span>
        </button>
      </div>
    </div>

    <!-- Active Pariccheda Showcase -->
    <div class="card-paper p-6 md:p-8 mt-6 border-l-4" :style="{ borderLeftColor: currentPariccheda.color }">
      <div class="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <span class="px-2.5 py-1 rounded-full text-xs font-mono font-bold text-white shadow-xs" :style="{ background: currentPariccheda.color }">
            {{ currentPariccheda.num }} · {{ currentPariccheda.pali }}
          </span>
          <h3 class="font-display text-2xl sm:text-3xl font-bold mt-2.5" :style="{ color: 'var(--ink)' }">
            {{ t(currentPariccheda.titleKm, currentPariccheda.titleEn) }}
          </h3>
          <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
            {{ t(currentPariccheda.subtitleKm, currentPariccheda.subtitleEn) }}
          </p>
        </div>
        <div class="text-3xl sm:text-4xl">
          {{ currentPariccheda.icon }}
        </div>
      </div>

      <!-- Core Breakdown -->
      <div class="mt-6 space-y-3">
        <div
          v-for="(item, i) in currentPariccheda.details"
          :key="i"
          class="p-4 rounded-xl border"
          :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }"
        >
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full" :style="{ background: currentPariccheda.color }"></span>
            <h4 class="font-bold text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
              {{ t(item.hKm, item.hEn) }}
            </h4>
          </div>
          <p class="text-xs sm:text-sm mt-1.5 leading-relaxed pl-4" :style="{ color: 'var(--ink-soft)' }">
            {{ t(item.bKm, item.bEn) }}
          </p>
        </div>
      </div>

      <!-- Key Verse Quote / Insight -->
      <div class="mt-6 p-4 rounded-xl border-dashed border" :style="{ borderColor: 'var(--border-strong)', background: 'var(--accent-soft)' }">
        <p class="text-[10px] font-bold tracking-widest uppercase text-amber-500 mb-1">
          {{ t('ខ្លឹមសារសង្ខេបប្រចាំបរិច្ឆេទ', 'CHAPTER ESSENCE') }}
        </p>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink)' }">
          {{ t(currentPariccheda.summaryKm, currentPariccheda.summaryEn) }}
        </p>
      </div>

      <!-- Navigation Arrows -->
      <div class="flex items-center justify-between gap-3 mt-6 pt-4 border-t" :style="{ borderColor: 'var(--border)' }">
        <button
          type="button"
          @click="prevPariccheda"
          class="h-9 px-3 rounded-lg border text-xs font-bold inline-flex items-center gap-1 cursor-pointer"
          :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--ink)' }"
        >
          ← {{ t('បរិច្ឆេទមុន', 'Previous') }}
        </button>
        <span class="text-xs font-mono font-bold" :style="{ color: 'var(--ink-faint)' }">
          {{ selectedIdx + 1 }} / 9
        </span>
        <button
          type="button"
          @click="nextPariccheda"
          class="h-9 px-3 rounded-lg border text-xs font-bold inline-flex items-center gap-1 cursor-pointer"
          :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--ink)' }"
        >
          {{ t('បរិច្ឆេទបន្ទាប់', 'Next') }} →
        </button>
      </div>
    </div>

    <!-- Complete 9 Paricchedas Interactive Directory -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('តារាងបរិច្ឆេទទាំង ៩', 'ALL 9 CHAPTERS DIRECTORY') }}</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-4">
        <div
          v-for="(p, idx) in paricchedas"
          :key="p.num"
          @click="selectedIdx = idx"
          class="p-4 rounded-xl border cursor-pointer transition-all hover:border-amber-500"
          :style="selectedIdx === idx
            ? { background: 'var(--accent-soft)', borderColor: 'var(--accent)' }
            : { background: 'var(--bg-card-2)', borderColor: 'var(--border)' }"
        >
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-md font-mono font-bold text-xs text-white flex items-center justify-center shrink-0" :style="{ background: p.color }">
              {{ p.numKh }}
            </span>
            <strong class="text-xs sm:text-sm font-bold block truncate" :style="{ color: 'var(--ink)' }">
              {{ t(p.titleKm, p.titleEn) }}
            </strong>
          </div>
          <p class="text-[11px] text-stone-500 mt-2 line-clamp-2 leading-relaxed">
            {{ t(p.subtitleKm, p.subtitleEn) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const selectedIdx = ref(0)
const currentPariccheda = computed(() => paricchedas[selectedIdx.value])

function prevPariccheda() {
  selectedIdx.value = (selectedIdx.value - 1 + paricchedas.length) % paricchedas.length
}

function nextPariccheda() {
  selectedIdx.value = (selectedIdx.value + 1) % paricchedas.length
}

const paricchedas = [
  {
    num: 'បរិច្ឆេទទី ១',
    numKh: '១',
    shortTitle: 'ចិត្ត',
    pali: 'CITTA-SANGAHA',
    color: '#d97706',
    icon: '💡',
    titleKm: 'បរិច្ឆេទទី ១ ៖ ចិត្តសង្គហៈ',
    titleEn: 'Chapter 1 : Compendium of Consciousness',
    subtitleKm: 'ការវិភាគចិត្ត ៨៩ ឬ ១២១ ដួង ចែកតាមភូមិ ៤ ជាតិ ៤ និងវេទនា ៥',
    subtitleEn: 'Analysis of 89 or 121 states of consciousness across 4 planes',
    details: [
      { hKm: 'កាមាវចរចិត្ត ៥៤ ដួង', hEn: 'Sense-Sphere Consciousness (54)', bKm: 'ចិត្តដែលត្រាច់ទៅក្នុងកាមារម្មណ៍ (អកុសលចិត្ត ១២, អហេតុកចិត្ត ១៨, កាមាវចរសោភណចិត្ត ២៤)។', bEn: 'Worldly consciousness bound to the senses (12 unwholesome, 18 rootless, 24 beautiful).' },
      { hKm: 'រូបាវចរចិត្ត ១៥ ដួង', hEn: 'Fine-Material Consciousness (15)', bKm: 'ចិត្តដែលកើតឡើងក្នុងរូបឈានទាំង ៥ (កុសល ៥, វិបាក ៥, កិរិយា ៥)។', bEn: 'Sublime consciousness of the 5 fine-material jhānas (5 kusala, 5 vipāka, 5 kiriya).' },
      { hKm: 'អរូបាវចរចិត្ត ១២ ដួង', hEn: 'Formless Consciousness (12)', bKm: 'ចិត្តក្នុងអរូបឈានទាំង ៤ ៖ អាកាសា, វិញ្ញាណញ្ចា, អាកិញ្ចញ្ញា, នេវសញ្ញានាសញ្ញា។', bEn: 'Immaterial consciousness of infinite space, consciousness, nothingness, and neither-perception.' },
      { hKm: 'លោកុត្តរចិត្ត ៨ ឬ ៤០ ដួង', hEn: 'Supramundane Consciousness (8 or 40)', bKm: 'ចិត្តដែលឆ្លងផុតពីត្រៃភព គឺមគ្គចិត្ត ៤ និងផលចិត្ត ៤ (គុណនឹងឈាន ៥ បាន ៤០)។', bEn: 'Transcendent states experiencing Nibbāna: 4 Paths and 4 Fruitions (times 5 jhānas = 40).' }
    ],
    summaryKm: 'ចិត្តជាធម្មជាតិដឹងអារម្មណ៍ បែងចែកតាមកម្រិតនៃភាពបរិសុទ្ធ ពីកាមគុណ រហូតដល់ការរំលត់ទុក្ខក្នុងព្រះនិព្វាន។',
    summaryEn: 'Consciousness is the sheer awareness of an object, classified from crude sensual grasping to transcendent liberation.'
  },
  {
    num: 'បរិច្ឆេទទី ២',
    numKh: '២',
    shortTitle: 'ចេតសិក',
    pali: 'CETASIKA-SANGAHA',
    color: '#0284c7',
    icon: '🧩',
    titleKm: 'បរិច្ឆេទទី ២ ៖ ចេតសិកសង្គហៈ',
    titleEn: 'Chapter 2 : Compendium of Mental Factors',
    subtitleKm: 'ចេតសិក ៥២ យ៉ាងដែលកើតជាមួយចិត្ត និងកែប្រែគុណភាពនៃចិត្ត',
    subtitleEn: 'The 52 mental factors that arise concurrently and flavor consciousness',
    details: [
      { hKm: 'អញ្ញសមានចេតសិក ១៣ ដួង', hEn: 'Ethically Variable Factors (13)', bKm: 'សព្វចិត្តសាធារណៈ ៧ (ផស្សៈ វេទនា សញ្ញា ចេតនា ឯកគ្គតា ជីវិតិន្រ្ទិយ មនសិការ) និងបកិណ្ណកៈ ៦ (វិតក្ក វិចារ អធិមោក្ខ វីរិយៈ បីតិ ឆន្ទៈ)។', bEn: '7 Universals present in every single thought-moment, plus 6 Occasionals.' },
      { hKm: 'អកុសលចេតសិក ១៤ ដួង', hEn: 'Unwholesome Factors (14)', bKm: 'ចេតសិកដែលធ្វើឱ្យចិត្តសៅហ្មង ៖ មោចតុកៈ ៤, លោតិកៈ ៣, ទោចតុកៈ ៤, ថីទុកៈ ២, និងវិចិកិច្ឆា ១។', bEn: 'Defiling factors: Moha group (4), Lobha group (3), Dosa group (4), Sloth-torpor (2), Doubt (1).' },
      { hKm: 'សោភណចេតសិក ២៥ ដួង', hEn: 'Beautiful Factors (25)', bKm: 'ចេតសិកល្អបរិសុទ្ធ ៖ សោភណសាធារណៈ ១៩ (សទ្ធា សតិ ហិរិ ឱត្តប្ប...), វីរតិ ៣, អប្បមញ្ញា ២, និងបញ្ញិន្រ្ទិយ ១។', bEn: 'Wholesome factors: 19 Universals (faith, mindfulness, shame, fear of wrongdoing...), 3 Abstinences, 2 Illimitables, Wisdom.' },
      { hKm: 'សម្បយោគន័យ & សង្គហន័យ', hEn: 'Association & Combination Methods', bKm: 'ក្បួនគណនាថាតើចេតសិកណាខ្លះអាចកើតជាមួយចិត្តណាខ្លះដោយមិនមានការទាស់គ្នា។', bEn: 'Mathematical matrices calculating which mental factors accompany which consciousness.' }
    ],
    summaryKm: 'ចេតសិកជាគ្រឿងលម្អ ឬបំផ្លាញចិត្ត ដូចថ្នាំពណ៌ដែលជ្រលក់ទឹកថ្លាឱ្យប្រែក្លាយជាពណ៌ផ្សេងៗ។',
    summaryEn: 'Mental factors act as dyes flavoring the clear water of bare consciousness.'
  },
  {
    num: 'បរិច្ឆេទទី ៣',
    numKh: '៣',
    shortTitle: 'បកិណ្ណកៈ',
    pali: 'PAKIṆṆAKA-SANGAHA',
    color: '#16a34a',
    icon: '🧭',
    titleKm: 'បរិច្ឆេទទី ៣ ៖ បកិណ្ណកសង្គហៈ',
    titleEn: 'Chapter 3 : Compendium of Miscellaneous Categories',
    subtitleKm: 'ការចាត់ក្រុមចិត្ត និងចេតសិកតាម វេទនា ហេតុ កិច្ច ទ្វារ អារម្មណ៍ វត្ថុ',
    subtitleEn: 'Classifying consciousness by feelings, roots, functions, doors, objects, and bases',
    details: [
      { hKm: 'វេទនាសង្គហៈ (៦ ឬ ៥)', hEn: 'Feelings (5 or 6)', bKm: 'សុខ ទុក្ខ សោមនស្ស ទោមនស្ស និងឧបេក្ខា។', bEn: 'Pleasure, pain, joy, grief, and neutral equanimity.' },
      { hKm: 'ហេតុសង្គហៈ (៦)', hEn: 'Roots (6)', bKm: 'អកុសលហេតុ ៣ (លោភៈ ទោសៈ មោហៈ) និងកុសលហេតុ ៣ (អលោភៈ អទោសៈ អមោហៈ)។', bEn: '3 Unwholesome roots (Greed, Hatred, Delusion) and 3 Wholesome roots.' },
      { hKm: 'កិច្ចសង្គហៈ (១៤)', hEn: 'Functions (14)', bKm: 'មុខងារទាំង ១៤ នៃចិត្ត (បដិសន្ធិ, ភវង្គ, អាវជ្ជនៈ, ទស្សនៈ, សវនៈ... ជវនៈ, តទារម្មណៈ, ចុតិ)។', bEn: '14 cosmic functions performed by consciousness from rebirth to death.' },
      { hKm: 'ទ្វារ ៦, អារម្មណ៍ ៦ & វត្ថុ ៦', hEn: 'Doors, Objects & Bases (6 each)', bKm: 'ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជិវ្ហាទ្វារ កាយទ្វារ មនោទ្វារ និងវត្ថុរូបជាទីតាំងអាស្រ័យនៃចិត្ត។', bEn: 'The 6 sense doors, 6 sense objects, and 6 physical bases supporting consciousness.' }
    ],
    summaryKm: 'វិភាគលើកាតាលីករ និងយន្តការដំណើរការជាក់ស្តែងនៃចិត្តក្នុងការដឹងអារម្មណ៍ជុំវិញខ្លួន។',
    summaryEn: 'Comprehensive breakdown of the structural gears making cognitive perception possible.'
  },
  {
    num: 'បរិច្ឆេទទី ៤',
    numKh: '៤',
    shortTitle: 'វិថី',
    pali: 'VĪTHI-SANGAHA',
    color: '#9333ea',
    icon: '⚡',
    titleKm: 'បរិច្ឆេទទី ៤ ៖ វិថីសង្គហៈ',
    titleEn: 'Chapter 4 : Compendium of Cognitive Processes',
    subtitleKm: 'ដំណើរវិថីចិត្តតាមទ្វារទាំង ៦ ក្នុងល្បឿន ១៧ ខណៈចិត្ត',
    subtitleEn: 'The sequence of thought-moments in sensory and mental cognitive pathways',
    details: [
      { hKm: 'បញ្ចទ្វារវិថី (១៧ ខណៈ)', hEn: 'Five-Door Process (17 Moments)', bKm: 'ពេលរូបប៉ះភ្នែក ៖ អតីតភវង្គ → ភវង្គចលនៈ → ភវង្គុបច្ឆេទ → បញ្ចទ្វារាវជ្ជនៈ → ចក្ខុវិញ្ញាណ → សម្បដិច្ឆន្នៈ → សន្តីរណៈ → វោដ្ឋព្វនៈ → ជវនៈ ៧ ដង → តទារម្មណៈ ២ ដង។', bEn: 'The 17-thought-moment perceptual sequence when light strikes the eye retina.' },
      { hKm: 'ជវនចិត្ត (ពេលវេលាសាងកម្ម)', hEn: 'Javana (Kamma-Forming Moments)', bKm: 'ខណៈ ៧ ដងដែលចិត្តសម្រេចកុសល ឬអកុសល ស្រេចលើការធ្វើ «យោនិសោមនសិការ»។', bEn: 'The 7 active dynamic moments where free will creates wholesome or unwholesome kamma.' },
      { hKm: 'មនោទ្វារវិថី & អប្បនាវិថី', hEn: 'Mind-Door & Absorption Processes', bKm: 'វិថីគិតក្នុងចិត្តសុទ្ធ និងវិថីនៃឈាន អភិញ្ញា និងអរិយមគ្គ។', bEn: 'Direct mental cognition, meditative absorption (jhāna), and path moments.' }
    ],
    summaryKm: 'បង្ហាញពីល្បឿនលឿនដូចផ្លេកបន្ទោរនៃចិត្ត ដែលបង្កើតជាបទពិសោធន៍នៃរូបភាព សំឡេង និងគំនិត។',
    summaryEn: 'Reveals the lightning-fast serial mechanics through which subjective reality is constructed.'
  },
  {
    num: 'បរិច្ឆេទទី ៥',
    numKh: '៥',
    shortTitle: 'វិថីមុត្ត',
    pali: 'VĪTHIMUTTA-SANGAHA',
    color: '#eab308',
    icon: '🔄',
    titleKm: 'បរិច្ឆេទទី ៥ ៖ វិថីមុត្តសង្គហៈ',
    titleEn: 'Chapter 5 : Compendium of Process-Free Consciousness',
    subtitleKm: 'ចិត្តផុតវិថី ៖ ភពទាំង ៣១, កម្ម ១៦ យ៉ាង, មរណាសន្នវិថី និងបដិសន្ធិ',
    subtitleEn: 'Cosmology, the 16 types of kamma, near-death thought processes, and rebirth',
    details: [
      { hKm: 'ភូមិ ៤ & ស្ថាន ៣១ ភព', hEn: '4 Planes of Existence (31 Realms)', bKm: 'កាមភូមិ ១១, រូបភូមិ ១៦, និងអរូបភូមិ ៤ ជាទីកន្លែងដែលសត្វវិលកើតវិលស្លាប់។', bEn: 'The 31 cosmic realms: woeful planes, human world, heavens, and Brahma realms.' },
      { hKm: 'កម្ម ៤ ជំពូក (១៦ ប្រភេទ)', hEn: '16 Classes of Kamma', bKm: 'ចែកតាមកិច្ច (ជនក, ឧបត្ថម្ភក...), តាមលំដាប់ឱ្យផល (គរុកម្ម, អាសន្នកម្ម...), និងតាមកាល (ទិដ្ឋធម្មវេទនីយ...)។', bEn: 'Kamma categorized by function, priority of fruition, and time of ripening.' },
      { hKm: 'មរណាសន្នវិថី & បដិសន្ធិ', hEn: 'Death Process & Rebirth Linking', bKm: 'អារម្មណ៍មុនស្លាប់ (កម្ម, កម្មនិមិត្ត, គតិនិមិត្ត) ដែលទាញទាញវិញ្ញាណឱ្យចាប់កំណើតភ្លាមៗឥតចន្លោះ។', bEn: 'Near-death mental signs (kamma, sign of kamma, sign of destiny) launching instant rebirth.' }
    ],
    summaryKm: 'វិភាគអាថ៌កំបាំងនៃការស្លាប់ និងការឆ្លងភពជាតិ ដោយគ្មានព្រលឹងអមតៈ (Soul) ណាមួយឡើយ គឺមានតែកម្លាំងកម្ម។',
    summaryEn: 'Deconstructs death and transmigration driven purely by karmic causality without an eternal soul.'
  },
  {
    num: 'បរិច្ឆេទទី ៦',
    numKh: '៦',
    shortTitle: 'រូប & និព្វាន',
    pali: 'RŪPA-NIBBĀNA-SANGAHA',
    color: '#0d9488',
    icon: '⚛️',
    titleKm: 'បរិច្ឆេទទី ៦ ៖ រូប និងនិព្វានសង្គហៈ',
    titleEn: 'Chapter 6 : Compendium of Matter and Nibbāna',
    subtitleKm: 'រូបបរមត្ថ ២៨, រូបកលាប ២១, និងព្រះនិព្វានបរមត្ថ',
    subtitleEn: 'The 28 physical phenomena, material clusters (kalāpas), and Nibbāna',
    details: [
      { hKm: 'រូបបរមត្ថ ២៨ យ៉ាង', hEn: '28 Material Realities', bKm: 'មហាភូតរូប ៤ (ដី ទឹក ភ្លើង ខ្យល់) និងឧបាទាយរូប ២៤ (ប្រសាទរូប ៥, គោចររូប ៤, ភាវរូប ២, ជីវិតរូប ១...)។', bEn: '4 Great Elements (solidity, fluidity, temperature, motion) and 24 Derived Physical Phenomena.' },
      { hKm: 'រូបកលាប ២១ ក្រុម', hEn: '21 Material Clusters (Kalāpas)', bKm: 'រូបធាតុដែលកើតឡើងជាបណ្តុំតូចៗល្អិតបំផុត (ដូចជាអាតូម) មានអាយុកាលស្មើ ១៧ ខណៈចិត្ត។', bEn: 'Subatomic particle clusters arising and vanishing with a lifespan of 17 thought-moments.' },
      { hKm: 'ព្រះនិព្វានបរមត្ថ', hEn: 'Nibbāna Paramattha', bKm: 'អសង្ខតធម៌ដែលរលត់ទុក្ខ រលត់តណ្ហា និងជាបរមត្ថទី ៤ ដ៏ស្ងប់ស្ងាត់បំផុត។', bEn: 'The unconditioned fourth ultimate reality beyond space and matter.' }
    ],
    summaryKm: 'រូបវិទ្យា និងទស្សនវិជ្ជារូបធាតុក្នុងពុទ្ធសាសនា ព្រមទាំងគោលដៅចុងក្រោយនៃការរំលត់ទុក្ខ។',
    summaryEn: 'Buddhist subatomic physics and the final goal of transcendent liberation.'
  },
  {
    num: 'បរិច្ឆេទទី ៧',
    numKh: '៧',
    shortTitle: 'សមុច្ចយៈ',
    pali: 'SAMUCCAYA-SANGAHA',
    color: '#f43f5e',
    icon: '📊',
    titleKm: 'បរិច្ឆេទទី ៧ ៖ សមុច្ចយសង្គហៈ',
    titleEn: 'Chapter 7 : Compendium of Categories',
    subtitleKm: 'ការប្រមូលផ្ដុំធម៌ជាក្រុម ៖ អកុសលសង្គហៈ, ពោធិបក្ខិយធម៌ ៣៧, និងសព្វសង្គហៈ',
    subtitleEn: 'Comprehensive groupings of unwholesome factors, 37 aids to enlightenment, and aggregates',
    details: [
      { hKm: 'អកុសលសង្គហៈ (កិលេសធម៌)', hEn: 'Unwholesome Groupings', bKm: 'អាសវៈ ៤, ឱឃៈ ៤ (ជំនន់), យោគៈ ៤, គន្ថៈ ៤ (ចំណង), ឧបាទាន ៤, នីវរណៈ ៦, អនុស័យ ៧, សំយោជនៈ ១០។', bEn: 'Classifications of defilements: Taints, Floods, Yokes, Knots, Clingings, Hindrances, Fetters.' },
      { hKm: 'ពោធិបក្ខិយសង្គហៈ (៣៧ ប្រការ)', hEn: '37 Factors of Awakening', bKm: 'សតិបដ្ឋាន ៤, សម្មប្បធាន ៤, ឥទ្ធិបាទ ៤, ឥន្ទ្រិយ ៥, ពល ៥, ពោជ្ឈង្គ ៧, មគ្គ ៨។', bEn: 'The 37 wings to awakening essential for direct realization of enlightenment.' },
      { hKm: 'សព្វសង្គហៈ (ធម៌ទូទៅ)', hEn: 'Universal Categories', bKm: 'ខន្ធ ៥, ឧបាទានក្ខន្ធ ៥, អាយតនៈ ១២, ធាតុ ១៨, អរិយសច្ច ៤។', bEn: 'The 5 aggregates, 12 sense bases, 18 elements, and 4 Noble Truths.' }
    ],
    summaryKm: 'ប្រមូលចងក្រងកាតាឡុកធម៌ទាំងអស់ ដែលចាំបាច់សម្រាប់ការប្រតិបត្តិ និងការដាស់សតិបញ្ញា។',
    summaryEn: 'Complete categorical matrix mapping all psychological obstacles and aids to enlightenment.'
  },
  {
    num: 'បរិច្ឆេទទី ៨',
    numKh: '៨',
    shortTitle: 'បច្ចយៈ',
    pali: 'PACCAYA-SANGAHA',
    color: '#8b5cf6',
    icon: '🔗',
    titleKm: 'បរិច្ឆេទទី ៨ ៖ បច្ចយសង្គហៈ',
    titleEn: 'Chapter 8 : Compendium of Conditionality',
    subtitleKm: 'បដិច្ចសមុប្បាទ ១២ អង្គ និងបច្ច័យ ២៤ ក្នុងមហាគម្ពីរបដ្ឋាន',
    subtitleEn: 'The 12 links of Dependent Origination and the 24 Conditions of Paṭṭhāna',
    details: [
      { hKm: 'បដិច្ចសមុប្បាទ (១២ អង្គ)', hEn: 'Dependent Origination (12 Links)', bKm: 'អវិជ្ជាបច្ចយា សង្ខារា... ដំណើរតភ្ជាប់នៃហេតុ និងផលឆ្លងភពជាតិទាំង ៣ កាល (អតីត បច្ចុប្បន្ន អនាគត)។', bEn: 'The 12-link nexus connecting past, present, and future lifetimes without a creator.' },
      { hKm: 'បច្ច័យ ២៤ (ក្នុងគម្ពីរបដ្ឋាន)', hEn: '24 Conditional Relations (Paṭṭhāna)', bKm: 'ហេតុបច្ចយោ, អារម្មណ-, អធិបតិ-, អនន្តរ-, សហជាត-, ឧបនិស្សយ-, បុរេជាត-, បច្ឆាជាត-, កម្មបច្ចយោ...។', bEn: 'Root condition, Object, Predominance, Proximity, Co-nascence, Decisive Support, Kamma...' },
      { hKm: 'បញ្ញត្តិ ៦ យ៉ាង', hEn: 'Concepts and Designations (Paññatti)', bKm: 'ការវិភាគលើឈ្មោះ និងពាក្យបញ្ញត្តិដែលមនុស្សលោកសន្មតឡើង ផ្ទុយពីបរមត្ថធម៌ពិត។', bEn: 'Analysis of conventional nominal concepts vs ultimate unassailable realities.' }
    ],
    summaryKm: 'ទស្សនវិជ្ជាកំពូលនៃទំនាក់ទំនងហេតុនិងផល គ្មានវត្ថុណាកើតឡើងដោយចៃដន្យ ឬដោយព្រះអាទិទេពឡើយ។',
    summaryEn: 'The pinnacle of relational philosophy: nothing arises by chance or supernatural decree.'
  },
  {
    num: 'បរិច្ឆេទទី ៩',
    numKh: '៩',
    shortTitle: 'កម្មដ្ឋាន',
    pali: 'KAMMAṬṬHĀNA-SANGAHA',
    color: '#dc2626',
    icon: '🧘',
    titleKm: 'បរិច្ឆេទទី ៩ ៖ កម្មដ្ឋានសង្គហៈ',
    titleEn: 'Chapter 9 : Compendium of Meditation Subjects',
    subtitleKm: 'សមថកម្មដ្ឋាន ៤០, វិបស្សនាកម្មដ្ឋាន, វិសុទ្ធិ ៧ និងវិបស្សនាញាណ ១៦',
    subtitleEn: 'The 40 Samatha meditation subjects, Vipassanā, 7 Purifications, and 16 Stages of Insight',
    details: [
      { hKm: 'សមថកម្មដ្ឋាន ៤០ ប្រការ', hEn: '40 Subjects of Serenity (Samatha)', bKm: 'កសិណ ១០, អសុភ ១០, អនុស្សតិ ១០, អប្បមញ្ញា ៤, អាហារេបដិកូលសញ្ញា ១, ចតុធាតុវវត្ថាន ១, អរូប ៤។', bEn: '10 Kasinas, 10 Foulnesses, 10 Recollections, 4 Immeasurables, 4 Formless absorptions.' },
      { hKm: 'ចរិត ៦ ប្រភេទ', hEn: '6 Psychological Temperaments (Carita)', bKm: 'រាគចរិត, ទោសចរិត, មោហចរិត, សទ្ធាចរិត, ពុទ្ធិចរិត, វិតក្កចរិត និងការរើសកម្មដ្ឋានឱ្យត្រូវនឹងចរិត។', bEn: 'Tailoring specific meditation subjects to greed, hatred, delusion, faith, wisdom, or discursive mind.' },
      { hKm: 'វិសុទ្ធិ ៧ & វិបស្សនាញាណ ១៦', hEn: '7 Purifications & 16 Insight Knowledges', bKm: 'ដំណើរវិបស្សនាពីការបែងចែករូប-នាម រហូតដល់មគ្គញ្ញាណ និងផលញ្ញាណសម្រេចព្រះនិព្វាន។', bEn: 'The progressive ladder from discerning mind-matter to Magga-Phala realization of Nibbāna.' }
    ],
    summaryKm: 'ការអនុវត្តជាក់ស្តែងដើម្បីបំប្លែងទ្រឹស្តីព្រះអភិធម្ម ឱ្យទៅជាបទពិសោធន៍ផ្ទាល់នៃការរំដោះចិត្តរួចទុក្ខ។',
    summaryEn: 'Transforms theoretical Abhidhamma metaphysics into direct experiential meditation and liberation.'
  }
]
</script>
