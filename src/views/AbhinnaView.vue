<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🔮 {{ t('សាមញ្ញផលសូត្រ · ទីឃនិកាយ សីលក្ខន្ធវគ្គ', 'Dīgha Nikāya · Sāmaññaphala Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('អភិញ្ញា ៦ និង វិជ្ជា ៣', 'Abhiññā 6 & Vijjā 3: Supernormal Knowledges') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'អភិញ្ញា គឺជាញាណដឹងដ៏វិសេសវិសាលហួសពីវិញ្ញាណសាមញ្ញរបស់មនុស្សលោក ដែលកើតចេញពីការតម្កល់ចិត្តក្នុងចតុត្ថជ្ឈានដ៏ស្ងប់ជ្រៅ។ ក្នុងនោះ អភិញ្ញា ៥ ដំបូងជាលោកិយ រីឯអភិញ្ញាទី ៦ (អាសវក្ខយញាណ) ជាលោកុត្តរដ៏កំពូល ដែលរំលត់នូវកិលេសទាំងពួង។',
            'Abhiññā denotes direct supernormal knowledges transcending ordinary human senses, cultivated on the firm bedrock of the 4th Jhāna. While the first 5 are mundane powers (Lokiya), the 6th—Āsavakkhaya-ñāṇa—is the supreme supramundane breakthrough that eradicates all taints, sealing Arahantship.'
          ) }}
        </p>
      </div>
    </section>

    <!-- The True Miracle Notice -->
    <div class="card-paper p-4 border" :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
      <div class="flex items-start gap-3">
        <span class="text-2xl shrink-0">☸️</span>
        <div class="text-xs sm:text-sm space-y-1">
          <strong class="font-bold" :style="{ color: 'var(--accent)' }">
            {{ t('បាដិហារិយដ៏ប្រសើរបំផុត ក្នុងព្រះពុទ្ធសាសនា', 'The Supreme Miracle in Buddhism') }}
          </strong>
          <p :style="{ color: 'var(--ink)' }">
            {{ t(
              'ព្រះសម្មាសម្ពុទ្ធមិនលើកតម្កើងការសម្តែងឫទ្ធិហោះហើរ (ឥទ្ធិបាដិហារិយ៍) ឬការទស្សន៍ទាយចិត្ត (អាទេសនាបាដិហារិយ៍) ឡើយ តែទ្រង់សរសើរ «អនុសាសនីបាដិហារិយ៍» (បាដិហារិយនៃការបង្រៀនឱ្យមនុស្សលះបាបចម្រើនគុណធម៌) ថាជាអព្ភូតហេតុដ៏ពិតប្រាកដ។',
              'The Buddha discouraged vanity in psychic feats or mind-reading. Instead, He proclaimed the Miracle of Instruction (Anusāsanī-pāṭihāriya)—guiding a being to abandon defilements and realize Dhamma—as the only supreme miracle.'
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

    <!-- TAB 1: 6 Abhiññā Cards -->
    <section v-if="activeTab === 'abhinna'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(item, idx) in abhinnaList"
          :key="item.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :class="item.isSupramundane ? 'ring-1' : ''"
          :style="{
            borderColor: item.isSupramundane ? 'var(--accent)' : 'var(--border)',
            background: item.isSupramundane ? 'var(--accent-soft)' : 'var(--bg-card)'
          }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ item.icon }}
              </span>
              <div class="flex flex-col items-end gap-1">
                <span class="text-[11px] font-mono px-2 py-0.5 rounded-full font-bold"
                      :style="{
                        background: item.isSupramundane ? 'var(--accent)' : 'var(--bg-card-2)',
                        color: item.isSupramundane ? '#fff' : 'var(--ink-muted)'
                      }">
                  {{ item.isSupramundane ? t('លោកុត្តរ (កំពូល)', 'Supramundane') : t('លោកិយ', 'Mundane') }}
                </span>
                <span class="text-xs font-mono" :style="{ color: 'var(--ink-faint)' }">
                  #{{ khNum(idx + 1) }}
                </span>
              </div>
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
          </div>

          <div>
            <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold"
                 :style="{ borderColor: 'var(--border)', color: 'var(--accent)' }">
              <span>{{ t('អានវិធីចម្រើន និងព្រះសូត្រ', 'View Method & Sutta') }}</span>
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

                <!-- Detailed Explanation -->
                <div class="space-y-1.5">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>📖</span>
                    <span>{{ t('អត្ថន័យ និងសមត្ថភាពជាក់ស្ដែង', 'Detailed Powers & Mechanics') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(item.fullDescK, item.fullDescE) }}
                  </p>
                </div>

                <!-- Meditation Foundation -->
                <div class="p-3.5 rounded-xl border space-y-1.5"
                     :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>🧘</span>
                    <span>{{ t('មូលដ្ឋានកម្មដ្ឋាន (បាទជ្ឈាន)', 'Meditative Foundation') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
                    {{ t(item.foundationK, item.foundationE) }}
                  </p>
                </div>

                <!-- Warning / Modern Understanding -->
                <div class="p-3.5 rounded-xl space-y-1.5" :style="{ background: 'var(--bg-card-2)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>💡</span>
                    <span>{{ t('ទស្សនៈពុទ្ធសាសនា និងការប្រុងប្រយ័ត្ន', 'Buddhist Perspective & Caveat') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
                    {{ t(item.perspectiveK, item.perspectiveE) }}
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

    <!-- TAB 2: Vijjā 3 (The 3 Ennobling Knowledges) -->
    <section v-if="activeTab === 'vijja'" class="space-y-4">
      <div class="card-paper p-6 space-y-3">
        <h2 class="text-lg sm:text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('វិជ្ជា ៣ ៖ ញាណត្រាស់ដឹងក្នុងរាត្រីពេញបូណ៌មី', 'Te-Vijjā: The 3 Higher Knowledges of Enlightenment') }}
        </h2>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ក្នុងរាត្រីដែលព្រះសិទ្ធត្ថគោតមបានត្រាស់ដឹងជាព្រះសម្មាសម្ពុទ្ធ ក្រោមដើមពោធិព្រឹក្ស ព្រះអង្គបានសម្រេចវិជ្ជា ៣ នេះតាមលំដាប់នៃយាមទាំងបី៖',
            'On the full moon night beneath the Bodhi tree, the ascetic Gotama pierced through ignorance by attaining these 3 supreme knowledges progressively across the three watches of the night:'
          ) }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="(v, vIdx) in vijjaList" :key="vIdx"
             class="card-paper p-5 border space-y-3 flex flex-col justify-between"
             :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                    :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                {{ t(v.watchK, v.watchE) }}
              </span>
              <span class="text-2xl">{{ v.icon }}</span>
            </div>
            <h3 class="font-bold text-base" :style="{ color: 'var(--ink)' }">
              {{ t(v.titleK, v.titleE) }}
            </h3>
            <span class="text-xs font-mono block" :style="{ color: 'var(--accent)' }">{{ v.pali }}</span>
            <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
              {{ t(v.descK, v.descE) }}
            </p>
          </div>

          <div class="p-3 rounded-xl text-xs" :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-soft)' }">
            <strong class="block mb-0.5" :style="{ color: 'var(--ink)' }">{{ t('ការទម្លាយអវិជ្ជា៖', 'Ignorance Shattered:') }}</strong>
            {{ t(v.breakthroughK, v.breakthroughE) }}
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 3: Vinaya & Dangers of Psychic Attachment -->
    <section v-if="activeTab === 'vinaya'" class="card-paper p-6 space-y-5">
      <div class="max-w-2xl mx-auto space-y-3 text-center">
        <span class="text-4xl">⚠️</span>
        <h2 class="text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('វិន័យ និងគ្រោះថ្នាក់នៃការជាប់ជំពាក់លើឫទ្ធិ', 'Vinaya Rules & The Pitfalls of Psychic Powers') }}
        </h2>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ព្រះពុទ្ធសាសនាចាត់ទុកឫទ្ធិគ្រាន់តែជាផលិតផលបន្ទាប់បន្សំនៃសមថភាវនា មិនមែនជាគោលដៅឡើយ។ ព្រះពុទ្ធបានបញ្ញត្តវិន័យយ៉ាងតឹងរ៉ឹងចំពោះការបង្ហាញឫទ្ធិដល់គ្រហស្ថ៖',
            'In Theravāda Buddhism, psychic powers are merely side products of concentration (samatha), never the final goal. The Buddha instituted strict monastic disciplinary precepts regarding displays of psychic powers:'
          ) }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto pt-2">
        <div v-for="(r, rIdx) in vinayaRules" :key="rIdx"
             class="p-4 rounded-xl border space-y-2"
             :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="text-2xl">{{ r.icon }}</span>
            <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">
              {{ t(r.titleK, r.titleE) }}
            </h4>
          </div>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(r.descK, r.descE) }}
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

const activeTab = ref('abhinna')
const expandedId = ref(null)
function toggleExpand(id) { expandedId.value = expandedId.value === id ? null : id }

const tabs = [
  { id: 'abhinna', icon: '🔮', titleK: 'អភិញ្ញា ៦', titleE: 'The 6 Abhiññās' },
  { id: 'vijja', icon: '✨', titleK: 'វិជ្ជា ៣ យប់ត្រាស់ដឹង', titleE: 'The 3 Vijjās' },
  { id: 'vinaya', icon: '⚠️', titleK: 'វិន័យ និងការប្រុងប្រយ័ត្ន', titleE: 'Vinaya & Pitfalls' }
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

const abhinnaList = [
  {
    id: 'iddhi',
    icon: '⚡',
    titleK: 'ឥទ្ធិវិធញាណ (សម្តែងឫទ្ធិ)',
    titleE: 'Psychic Powers / Feats',
    pali: 'Iddhividha-ñāṇa',
    isSupramundane: false,
    shortDescK: 'សមត្ថភាពផ្លូវចិត្តក្នុងការធ្វើរឿងអស្ចារ្យ ដូចជាការដើរកាត់ជញ្ជាំង មុជដី ដើរលើទឹក និម្មិតខ្លួនជាច្រើន ឬហោះលើអាកាស។',
    shortDescE: 'Mastery over physical matter: multiplying forms, walking through walls, diving through solid earth, levitating.',
    suttaPali: 'Eko pi hutvā bahudhā hoti, bahudhā pi hutvā eko hoti...',
    suttaK: 'ម្នាក់ឯងនិម្មិតជាច្រើននាក់ក៏បាន ច្រើននាក់និម្មិតមកតែម្នាក់ឯងក៏បាន ដើរកាត់ជញ្ជាំងដូចដើរកាត់ទីវាលក៏បាន... (សាមញ្ញផលសូត្រ)',
    suttaE: 'Having been one he becomes many; having been many he becomes one; he appears and vanishes; he goes unhindered through walls (DN 2).',
    fullDescK: 'ឥទ្ធិវិធញាណ កើតឡើងដោយសារការទាញយកថាមពលនៃបឋវីកសិណ ឬអាបោកសិណ ផ្សំជាមួយអធិដ្ឋានចិត្តដ៏មុតមាំក្នុងចតុត្ថជ្ឈាន។ ព្រះមហាមោគ្គល្លានត្ថេរ គឺជាឯតទគ្គផ្នែកខាងមានឫទ្ធិច្រើនជាងគេក្នុងចំណោមសាវ័ក។',
    fullDescE: 'Cultivated through Kasina elements combined with resolute mental determination emerging from the 4th Jhana. Venerable Mahāmoggallāna was foremost in psychic mastery.',
    foundationK: 'តម្រូវឱ្យស្ទាត់ជំនាញក្នុងរូបជ្ឈាន ៤ និងកសិណ ១០ រួចចូលចតុត្ថជ្ឈាន មុននឹងចេញមកផ្សាយអធិដ្ឋានចិត្ត។',
    foundationE: 'Requires mastery of the 4 Rūpa Jhānas and 10 Kasiṇas, emerging from the 4th Jhāna to project resolute volition.',
    perspectiveK: 'ឫទ្ធិនេះជាលោកិយ សូម្បីទេវទត្តក៏ធ្លាប់សម្រេចបានដែរ តែដោយសារកិលេសមិនទាន់អស់ ទេវទត្តបានធ្លាក់ចុះហើយបាត់បង់ឫទ្ធិវិញ។ ដូច្នេះកុំយល់ច្រឡំថាអ្នកមានឫទ្ធិជាព្រះអរហន្ត។',
    perspectiveE: 'This power is strictly mundane. Even Devadatta mastered it, but being full of ego, fell from grace and lost it entirely.'
  },
  {
    id: 'dibbasota',
    icon: '👂',
    titleK: 'ទិព្វសោតញាណ (ត្រចៀកទិព្វ)',
    titleE: 'Divine Ear (Clairaudience)',
    pali: 'Dibbasota-ñāṇa',
    isSupramundane: false,
    shortDescK: 'សមត្ថភាពឮសំឡេងពីរយ៉ាង គឺសំឡេងទិព្វរបស់ទេវតា ព្រហ្ម និងសំឡេងមនុស្សលោក មិនថានៅជិត ឬនៅឆ្ងាយរាប់ពាន់គីឡូម៉ែត្រ។',
    shortDescE: 'Supernormal hearing capacity registering sounds of both deities and humans, near or across planetary distances.',
    suttaPali: 'Dibbāya sotadhātuyā visuddhāya atikkantamānusikāya...',
    suttaK: 'ដោយទិព្វសោតធាតុដ៏បរិសុទ្ធ កន្លងហួសត្រចៀកមនុស្សសាមញ្ញ រមែងឮសំឡេងទាំងពីរយ៉ាង គឺសំឡេងទិព្វ និងសំឡេងមនុស្ស...',
    suttaE: 'With the divine ear element, purified and surpassing the human, he hears both sounds: divine and human, distant and near.',
    fullDescK: 'ទិព្វសោតញាណ អនុញ្ញាតឱ្យអ្នកប្រតិបត្តិឮសំឡេងសត្វតិរច្ឆានយំយល់ន័យ ឮការជជែកគ្នារបស់ទេវតា ឬឮសំឡេងខ្សឹបពីចម្ងាយ ដោយការផ្សាយអាកាសកសិណ និងពន្លឺនៃសមាធិ។',
    fullDescE: 'Clairaudience enables comprehension of animal dialects, celestial assemblies, and distant whispers through mental resonance with the subtle space element.',
    foundationK: 'ការផ្ដោតលើអាកាសកសិណ (Space Kasiṇa) និងពង្រីកវិសាលភាពនៃការស្តាប់ក្នុងចតុត្ថជ្ឈាន។',
    foundationE: 'Grounded in the Space Kasiṇa, expanding auditory awareness outwards from the heart base.',
    perspectiveK: 'ការឮសំឡេងច្រើនពេកអាចនាំឱ្យរំខាន ប្រសិនបើគ្មានឧបេក្ខា (ការតម្កល់ចិត្តជាកណ្តាល) រឹងមាំ។',
    perspectiveE: 'Unchecked hearing can overwhelm the mind with sensory noise unless protected by rock-solid equanimity.'
  },
  {
    id: 'cetopariya',
    icon: '🧠',
    titleK: 'ចេតោបរិយញាណ (ដឹងចិត្តអ្នកដទៃ)',
    titleE: 'Mind-Reading (Telepathy)',
    pali: 'Cetopariya-ñāṇa',
    isSupramundane: false,
    shortDescK: 'ការដឹងច្បាស់នូវសភាពចិត្តរបស់អ្នកដទៃ ថាតើចិត្តនោះមានរាគៈ ទោសៈ មោហៈ ឬជាចិត្តស្ងប់ ចិត្តចម្រើន ឬចិត្តរួចផុតទុក្ខ។',
    shortDescE: 'Direct telepathic penetration into another person’s mind: knowing if their mind is lustful, angry, distracted, or liberated.',
    suttaPali: 'Parasattānaṁ parapuggalānaṁ cetasā ceto paricca pajānāti...',
    suttaK: 'រមែងដឹងចិត្តរបស់សត្វដទៃ បុគ្គលដទៃ ដោយចិត្តរបស់ខ្លួន ចិត្តមានរាគៈក៏ដឹង ចិត្តប្រាសចាករាគៈក៏ដឹង...',
    suttaE: 'He directs his mind to telepathy; he discerns with his mind the state of other minds: knowing lust as lust, calm as calm (DN 2).',
    fullDescK: 'ព្រះសម្មាសម្ពុទ្ធតែងប្រើញាណនេះក្នុងការពិនិត្យមើលចរិត និងឧបនិស្ស័យរបស់សត្វលោក ដើម្បីជ្រើសរើសព្រះធម៌ទេសនាឱ្យត្រូវនឹងជំងឺចិត្តរបស់បុគ្គលនោះ ធ្វើឱ្យអ្នកស្តាប់បានត្រាស់ដឹងភ្លាមៗ។',
    fullDescE: 'The Buddha utilized this faculty continuously to diagnose the exact psychological blocks of seekers, prescribing personalized Dhammic remedies on the spot.',
    foundationK: 'ការសង្កេតពណ៌ឈាម និងរស្មីនៃហទយវត្ថុ (បេះដូង) ផ្សំជាមួយការយល់ដឹងពីចេតសិកក្នុងចតុត្ថជ្ឈាន។',
    foundationE: 'Observing subtle radiant hues of the physical heart base coupled with deep Jhana sensitivity.',
    perspectiveK: 'ក្នុងសង្គមសម័យទំនើប ការយល់ចិត្តអ្នកដទៃដោយសេចក្ដីមេត្តា និងការស្តាប់ដោយយកចិត្តទុកដាក់ (Deep Listening) គឺជាទម្រង់ជាក់ស្ដែងនៃញាណនេះ។',
    perspectiveE: 'In everyday life, genuine deep listening and empathetic understanding are practical reflections of this power.'
  },
  {
    id: 'pubbenivasa',
    icon: '⏳',
    titleK: 'បុព្វេនិវាសានុស្សតិ (រឭកជាតិ)',
    titleE: 'Past Life Recollection',
    pali: 'Pubbenivāsānussati-ñāṇa',
    isSupramundane: false,
    shortDescK: 'ការនឹកឃើញនូវជាតិកំណើតក្នុងអតីតកាល មួយជាតិ ដប់ជាតិ រយជាតិ ពាន់ជាតិ ឬរាប់សែនកប្ប ដោយដឹងឈ្មោះ ត្រកូល និងសុខទុក្ខ។',
    shortDescE: 'Remembering innumerable past lifetimes: one, a hundred, thousands of births, knowing former names, families, and experiences.',
    suttaPali: 'So anekavihitaṁ pubbenivāsaṁ anussarati, seyyathidaṁ ekam pi jātiṁ...',
    suttaK: 'រមែងរឭកនូវជាតិដែលធ្លាប់នៅអាស្រ័យក្នុងកាលមុនជាច្រើនប្រការ គឺមួយជាតិក៏បាន ពីរជាតិក៏បាន រយជាតិក៏បាន...',
    suttaE: 'He recollects his manifold past lives: one birth, two births, hundreds of births, with their modes and details.',
    fullDescK: 'ញាណនេះបានបង្ហាញការពិតនៃសង្សារវដ្ត ថាសត្វលោកមិនមែនកើតមកតែមួយជាតិនោះទេ គឺធ្លាប់កើតជាសត្វតិរច្ឆាន ជាទេវតា ជាមនុស្សរាប់មិនអស់ដង។ ការដឹងច្បាស់បែបនេះ ជួយកម្ចាត់សេចក្ដីសង្ស័យលើអតីតកាល (វិចិកិច្ឆា)។',
    fullDescE: 'This knowledge shatters the annihilationist delusion that life ends at the grave, exposing endless rebirth across heavens, hells, and human realms.',
    foundationK: 'ការដកថយខ្សែចងចាំថយក្រោយមួយជំហានម្តងៗ ពីបច្ចុប្បន្ន ទៅកុមារភាព ទៅក្នុងផ្ទៃ រហូតឆ្លងទៅជាតិមុន ក្នុងចតុត្ថជ្ឈាន។',
    foundationE: 'Tracing memories systematically backwards through childhood, womb state, and crossing the death-proxy threshold of previous lives.',
    perspectiveK: 'ការដឹងជាតិអតីត ជួយឱ្យកើតសេចក្ដីនឿយណាយ (និព្វិទា) ក្នុងវដ្តសង្សារ មិនមែនដើម្បីអួតអាងនោះឡើយ។',
    perspectiveE: 'The sole noble purpose of remembering past lives is to cultivate disenchantment (nibbidā) with cyclic wandering.'
  },
  {
    id: 'dibbacakkhu',
    icon: '👁️',
    titleK: 'ទិព្វចក្ខុ / ចុតូបបាតញាណ',
    titleE: 'Divine Eye (Clairvoyance)',
    pali: 'Dibbacakkhu / Cutūpapāta-ñāṇa',
    isSupramundane: false,
    shortDescK: 'ភ្នែកទិព្វមើលឃើញសត្វដែលកំពុងច្យុត (ស្លាប់) និងកើតឡើងក្នុងភពផ្សេងៗ ទៅតាមផលនៃអំពើល្អ និងអំពើអាក្រក់របស់ពួកគេ (កម្មូបគញាណ)។',
    shortDescE: 'Perceiving beings passing away and reappearing according to their karma: seeing the exact celestial or infernal destinies earned.',
    suttaPali: 'Dibbena cakkhunā visuddhena atikkantamānusakena satte passati...',
    suttaK: 'ដោយចក្ខុទិព្វដ៏បរិសុទ្ធ រមែងឃើញពួកសត្វដែលច្យុត និងចាប់កំណើត ថោកទាប ឬឧត្តម មានសម្បុរល្អ ឬអាក្រក់ ទៅតាមកម្ម...',
    suttaE: 'With the divine eye, he sees beings passing away and reappearing, inferior and superior, fair and ugly, fortunate and unfortunate, according to karma.',
    fullDescK: 'ទិព្វចក្ខុ គឺជាការឃើញច្បាប់កម្មផលដោយផ្ទាល់ភ្នែក មិនមែនគ្រាន់តែជាជំនឿឡើយ។ អ្នកសម្រេចញាណនេះឃើញយ៉ាងច្បាស់ថា បុគ្គលដែលធ្វើបាបធ្លាក់នរកយ៉ាងណា និងបុគ្គលធ្វើបុណ្យឡើងសួគ៌យ៉ាងណា។',
    fullDescE: 'The Divine Eye converts theoretical belief in Karma into direct observational empiricism—witnessing the unerring mechanics of moral cause and effect.',
    foundationK: 'ការចម្រើនអាលោកកសិណ (ពន្លឺ) ឬតេជោកសិណ (ភ្លើង) ក្នុងចតុត្ថជ្ឈាន រហូតបង្កើតពន្លឺផ្លូវចិត្តទម្លុះភាពងងឹត។',
    foundationE: 'Grounded in the Light Kasiṇa (Āloka) or Fire Kasiṇa (Tejo), dissolving spatial opacity with concentrated inner illumination.',
    perspectiveK: 'ការឃើញសត្វរងទុក្ខក្នុងនរក បង្កើតនូវករុណា និងការភ័យខ្លាចបាបយ៉ាងជ្រាលជ្រៅ។',
    perspectiveE: 'Directly observing agonizing karmic repercussions installs irreversible moral conscience and profound compassion.'
  },
  {
    id: 'asavakkhaya',
    icon: '🏆',
    titleK: 'អាសវក្ខយញាណ (កម្ចាត់កិលេស)',
    titleE: 'Destruction of All Taints',
    pali: 'Āsavakkhaya-ñāṇa',
    isSupramundane: true,
    shortDescK: 'ញាណដឹងច្បាស់នូវអរិយសច្ច ៤ និងការកម្ចាត់នូវអាសវកិលេសទាំងពួង (កាមាសវៈ, ភវាសវៈ, ទិដ្ឋាសវៈ, អវិជ្ជាសវៈ) សម្រេចជាព្រះអរហន្ត។',
    shortDescE: 'The supreme supramundane knowledge realizing the 4 Noble Truths and permanently extinguishing all mental taints—Arahantship.',
    suttaPali: 'Āsavānaṁ khayā anāsavaṁ cetovimuttiṁ paññāvimuttiṁ...',
    suttaK: 'ដោយការអស់ទៅនៃអាសវៈទាំងឡាយ រមែងបានសម្រេចនូវចេតោវិមុត្តិ និងបញ្ញាវិមុត្តិ ដែលមិនមានអាសវៈ ក្នុងបច្ចុប្បន្ន...',
    suttaE: 'Through the destruction of taints, he enters and dwells in the taintless liberation of mind, liberation by wisdom, realized here and now.',
    fullDescK: 'នេះជាអភិញ្ញាតែមួយគត់ដែលជាលោកុត្តរ (ហួសផុតលោកិយ) និងជាគោលដៅចុងក្រោយនៃព្រះពុទ្ធសាសនា។ អភិញ្ញា ៥ ខាងលើ មិនអាចជួយឱ្យរួចផុតពីការកើតស្លាប់បានទេ តែអាសវក្ខយញាណនេះ បញ្ចប់នូវភពថ្មី ដកឬសគល់នៃទុក្ខ និងសម្រេចព្រះនិព្វាន។',
    fullDescE: 'This is the singular Supramundane Abhiññā and the ultimate culmination of the Buddhist path. The first 5 powers cannot liberate from death; only this knowledge uproots ignorance forever.',
    foundationK: 'វិបស្សនាបញ្ញា ដែលពិចារណាលើអនិច្ចំ ទុក្ខំ អនត្តា នៃបញ្ចក្ខន្ធ រហូតដល់សម្រេចអរហត្តមគ្គ។',
    foundationE: 'Vipassanā insight penetrating Anicca, Dukkha, and Anattā across the 5 Aggregates, culminating in the Arahant Magga.',
    perspectiveK: 'មនុស្សគ្រប់រូប ទោះបីគ្មានឫទ្ធិហោះហើរក៏ដោយ ក៏អាចបដិបត្តិចម្រើនសតិប្បដ្ឋានដើម្បីសម្រេចអាសវក្ខយញាណនេះបានដូចគ្នា។',
    perspectiveE: 'Any seeker, devoid of psychic feats, can practice the 4 Foundations of Mindfulness and realize this liberating breakthrough.'
  }
]

const vijjaList = [
  {
    watchK: 'បឋមយាម (យប់ដំបូង)',
    watchE: '1st Watch of Night',
    icon: '⏳',
    titleK: 'បុព្វេនិវាសានុស្សតិញាណ',
    titleE: 'Knowledge of Past Lives',
    pali: 'Pubbenivāsānussati',
    descK: 'ព្រះពុទ្ធបានរឭកឃើញជាតិកំណើតរាប់សែនកប្បក្នុងអតីតកាល បញ្ជាក់ច្បាស់នូវសង្សារវដ្ត។',
    descE: 'Recollected countless previous lives, validating the reality of Saṃsāra.',
    breakthroughK: 'ទម្លាយសេចក្ដីសង្ស័យចំពោះអតីតកាល (លះសស្សតទិដ្ឋិ និងឧច្ឆេទទិដ្ឋិ)។',
    breakthroughE: 'Shattered doubts regarding the past, breaking eternalism and nihilism.'
  },
  {
    watchK: 'មជ្ឈិមយាម (កណ្តាលអធ្រាត្រ)',
    watchE: '2nd Watch of Night',
    icon: '👁️',
    titleK: 'ចុតូបបាតញាណ (ទិព្វចក្ខុ)',
    titleE: 'Knowledge of Passing Away & Rebirth',
    pali: 'Cutūpapāta-ñāṇa',
    descK: 'ទ្រង់បានទតឃើញសត្វលោកស្លាប់ហើយកើតទៅតាមផលនៃកម្មដែលខ្លួនបានសាង។',
    descE: 'Witnessed the passing and rebirth of beings driven by their karmic seeds.',
    breakthroughK: 'ទម្លាយសេចក្ដីសង្ស័យចំពោះបច្ចុប្បន្ន និងអនាគត ឃើញច្បាប់កម្មផលច្បាស់ដូចថ្ងៃ។',
    breakthroughE: 'Illuminated the cosmic law of Karma as an absolute reality.'
  },
  {
    watchK: 'បច្ឆិមយាម (ជិតភ្លឺ)',
    watchE: '3rd Watch of Night',
    icon: '🌅',
    titleK: 'អាសវក្ខយញាណ',
    titleE: 'Knowledge of Destruction of Taints',
    pali: 'Āsavakkhaya-ñāṇa',
    descK: 'ទ្រង់បានត្រាស់ដឹងនូវអរិយសច្ច ៤ និងបដិច្ចសមុប្បាទ កម្ចាត់អវិជ្ជា សម្រេចជាព្រះពុទ្ធ។',
    descE: 'Realized the 4 Noble Truths and Dependent Origination, attaining Supreme Awakening.',
    breakthroughK: 'ទម្លាយអវិជ្ជាទាំងស្រុង សម្រេចព្រះនិព្វាន មិនត្រឡប់មកកើតក្នុងភពទៀតឡើយ។',
    breakthroughE: 'Completely destroyed ignorance; Saṃsāric rebirth terminated forever.'
  }
]

const vinayaRules = [
  {
    icon: '🚫',
    titleK: 'ហាមអួតឧត្តរិមនុស្សធម៌ដែលគ្មានពិត (បារាជិក)',
    titleE: 'False Claims of Supernormal Powers (Pārājika)',
    descK: 'ភិក្ខុណាដែលគ្មានឈាន គ្មានឫទ្ធិ តែអួតប្រាប់គ្រហស្ថដើម្បីលាភសក្ការៈ ត្រូវដាច់ពីភាពជាសង្ឃភ្លាមៗ។',
    descE: 'Falsely claiming Jhana or psychic attainments for donations or fame results in immediate, irreversible expulsion.'
  },
  {
    icon: '⚖️',
    titleK: 'ហាមប្រាប់ឫទ្ធិពិតដល់គ្រហស្ថ (បាចិត្តិយ)',
    titleE: 'Revealing Actual Attainments to Laypeople (Pācittiya)',
    descK: 'សូម្បីតែមានឈាន ឬឫទ្ធិពិត ក៏ហាមមិនឱ្យប្រាប់ដល់គ្រហស្ថដែរ ដើម្បីជៀសវាងការសរសើរអួតអាង។',
    descE: 'Even when authentic, displaying or revealing psychic powers to laypersons incurs a Pācittiya offense.'
  },
  {
    icon: '🌪️',
    titleK: 'ឫទ្ធិមិនអាចការពារកម្មចាស់បានឡើយ',
    titleE: 'Powers Cannot Override Inevitable Karma',
    descK: 'ដូចព្រះមោគ្គល្លាន ទោះបីមានឫទ្ធិពូកែយ៉ាងណា ក៏នៅតែត្រូវចោរវាយសម្លាប់ព្រោះតែផលនៃកម្មចាស់ដែរ។',
    descE: 'Like Venerable Moggallāna, supreme psychic mastery could not avert the ripening of ancient unwholesome karma.'
  },
  {
    icon: '🧘',
    titleK: 'សេចក្ដីស្ងប់ក្នុងចិត្តជាឫទ្ធិពិត',
    titleE: 'Inner Peace is the True Power',
    descK: 'ការឈ្នះចិត្តខ្លួនឯងមិនឱ្យខឹង មិនឱ្យលោភ មិនឱ្យវង្វេង វិសេសជាងការហោះលើអាកាសទៅទៀត។',
    descE: 'Conquering anger, greed, and ego within one’s heart is infinitely more heroic than flying across the sky.'
  }
]



function handleKeydown(e) {
  if (e.key === 'Escape' && selectedAbhinna.value) {
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
