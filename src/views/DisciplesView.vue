<template>
  <div class="fade-up">
    <!-- Header -->
    <header class="text-center max-w-2xl mx-auto">
      <p class="chapter-label">{{ t('អសីតិមហាថេរ & បរិស័ទឆ្នើម ៤ ពួក', 'Asīti Mahāthera & Foremost Disciples') }}</p>
      <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
        {{ t('ព្រះអរហន្តសាវ័កល្បីៗ និងឯតទគ្គៈ', 'The Great Arahant Disciples & Etadagga') }}
      </h2>
      <div class="ornament mt-4">&#9784;</div>
      <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ស្វែងយល់ពីប្រវត្តិ គុណធម៌ដ៏ឧត្តម និងការតាំងសច្ចាពីអតីតជាតិនៃព្រះអគ្គសាវ័ក មហាថេរ ៨០ អង្គ និងឧបាសក-ឧបាសិកាឆ្នើម ដែលព្រះសម្មាសម្ពុទ្ធទ្រង់តែងតាំងជា «ឯតទគ្គៈ» (កំពូលលើសគេក្នុងផ្នែកនីមួយៗ)។', 'Discover the inspiring lives, foremost spiritual achievements (Etadagga), past-life aspirations, and wisdom verses of the supreme disciples of the Buddha.') }}
      </p>

      <!-- Category Filter Pills (Uniform height, touch scroll) -->
      <div class="flex items-center gap-2 mt-6 overflow-x-auto pb-2 pt-1 scrollbar-none touch-pan-x sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="activeCategory = cat.id"
          class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center gap-1.5"
          :class="activeCategory === cat.id ? 'on' : ''"
        >
          <span>{{ cat.icon }}</span>
          <span>{{ t(cat.km, cat.en) }}</span>
          <span class="text-[10px] opacity-75 ml-0.5">({{ getCategoryCount(cat.id) }})</span>
        </button>
      </div>
    </header>

    <!-- Search Input -->
    <div class="card-paper p-3 sm:p-4 mt-6 flex items-center gap-2">
      <span class="text-xs pl-1" :style="{ color: 'var(--ink-muted)' }">🔍</span>
      <input
        v-model="searchQuery"
        type="text"
        :placeholder="t('ស្វែងរកព្រះនាម (ឧទាហរណ៍៖ សារីបុត្ត, សីវលី, អានន្ទ, វិសាខា)...', 'Search disciple name or title...')"
        class="w-full bg-transparent border-none text-xs sm:text-sm focus:outline-none"
        :style="{ color: 'var(--ink)' }"
      />
      <button
        v-if="searchQuery"
        @click="searchQuery = ''"
        class="text-xs px-2 py-1"
        :style="{ color: 'var(--ink-muted)' }"
      >
        ✕
      </button>
    </div>

    <!-- Quick Stats Cards -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-4">
      <div class="card-paper p-3 text-center h-full flex flex-col justify-between items-center">
        <span class="text-xl block">🏆</span>
        <strong class="text-xs sm:text-sm block mt-1" :style="{ color: 'var(--ink)' }">{{ t('ឯតទគ្គៈ', 'Etadagga') }}</strong>
        <span class="text-[10px] sm:text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('កំពូលលើសគេមួយផ្នែក', 'Supreme in each field') }}</span>
      </div>
      <div class="card-paper p-3 text-center h-full flex flex-col justify-between items-center">
        <span class="text-xl block">🌟</span>
        <strong class="text-xs sm:text-sm block mt-1" :style="{ color: 'var(--ink)' }">{{ t('៨០ អង្គ', '80 Mahātheras') }}</strong>
        <span class="text-[10px] sm:text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('អសីតិមហាសាវ័ក', 'Chief elder disciples') }}</span>
      </div>
      <div class="card-paper p-3 text-center h-full flex flex-col justify-between items-center">
        <span class="text-xl block">🪷</span>
        <strong class="text-xs sm:text-sm block mt-1" :style="{ color: 'var(--ink)' }">{{ t('១៣ អង្គ', '13 Bhikkhunīs') }}</strong>
        <span class="text-[10px] sm:text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('ភិក្ខុនីឯតទគ្គៈ', 'Foremost nuns') }}</span>
      </div>
      <div class="card-paper p-3 text-center h-full flex flex-col justify-between items-center">
        <span class="text-xl block">🤝</span>
        <strong class="text-xs sm:text-sm block mt-1" :style="{ color: 'var(--ink)' }">{{ t('២០ រូប', '20 Lay Disciples') }}</strong>
        <span class="text-[10px] sm:text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('ឧបាសក–ឧបាសិកា', 'Foremost Upāsaka') }}</span>
      </div>
    </div>

    <!-- Disciples Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mt-6">
      <div
        v-for="disciple in filteredDisciples"
        :key="disciple.id"
        @click="openModal(disciple)"
        class="card-paper card-paper-hover p-4 sm:p-5 cursor-pointer flex flex-col justify-between space-y-3 h-full"
      >
        <div class="space-y-2">
          <div class="flex items-center justify-between gap-2">
            <span class="text-2xl">{{ disciple.icon }}</span>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)', color: 'var(--accent)' }">
              {{ t(disciple.categoryKm, disciple.categoryEn) }}
            </span>
          </div>

          <div>
            <h3 class="font-display text-base sm:text-lg font-bold" :style="{ color: 'var(--ink)' }">
              {{ t(disciple.nameKm, disciple.nameEn) }}
            </h3>
            <p class="paali text-xs mt-0.5" :style="{ color: 'var(--accent)' }">
              {{ disciple.pali }}
            </p>
          </div>

          <div class="p-2.5 rounded-xl space-y-0.5" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
            <span class="text-[10px] uppercase font-bold block" :style="{ color: 'var(--accent-bright)' }">
              🏆 {{ t('តំណែងឯតទគ្គៈ', 'Etadagga Title') }}
            </span>
            <p class="text-xs font-semibold leading-snug" :style="{ color: 'var(--ink)' }">
              {{ t(disciple.titleKm, disciple.titleEn) }}
            </p>
          </div>

          <p class="text-xs line-clamp-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t(disciple.shortKm, disciple.shortEn) }}
          </p>
        </div>

        <div class="pt-2 flex items-center justify-between text-xs" :style="{ borderTop: '1px solid var(--border)' }">
          <span class="text-[11px] truncate max-w-[170px]" :style="{ color: 'var(--ink-muted)' }">{{ disciple.symbolKey }}</span>
          <span class="font-bold" :style="{ color: 'var(--accent-bright)' }">
            {{ t('មើលប្រវត្តិ', 'Details') }} →
          </span>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredDisciples.length === 0" class="text-center py-12 space-y-2 card-paper p-6 mt-6">
      <span class="text-4xl block">🔍</span>
      <h3 class="font-bold" :style="{ color: 'var(--ink)' }">{{ t('រកមិនឃើញសាវ័កឈ្មោះនេះទេ', 'No disciple found') }}</h3>
      <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('សូមព្យាយាមវាយពាក្យស្វែងរកផ្សេង ឬជ្រើសរើសប្រភេទ «ទាំងអស់»', 'Try another search keyword or select "All"') }}</p>
    </div>

    <!-- POP-UP MODAL -->
    <Teleport to="body">
      <div
        v-if="selectedDisciple"
        class="menu-backdrop fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
        @click.self="closeModal"
      >
        <div
          class="card-paper relative w-full max-w-2xl max-h-[88vh] sm:max-h-[90vh] flex flex-col rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl"
          :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }"
        >
          <!-- Modal Header -->
          <div
            class="p-4 sm:p-5 flex items-center justify-between gap-3 border-b shrink-0"
            :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }"
          >
            <div class="flex items-center gap-2.5">
              <span class="text-3xl">{{ selectedDisciple.icon }}</span>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-display text-lg sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
                    {{ t(selectedDisciple.nameKm, selectedDisciple.nameEn) }}
                  </h3>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded" :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--accent)' }">
                    {{ t(selectedDisciple.categoryKm, selectedDisciple.categoryEn) }}
                  </span>
                </div>
                <p class="paali text-xs" :style="{ color: 'var(--accent)' }">
                  {{ selectedDisciple.pali }}
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

          <!-- Modal Content -->
          <div class="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed">
            <!-- Title Badge Box -->
            <div class="verse-box p-4 rounded-xl space-y-1">
              <span class="text-xs font-bold uppercase tracking-wide block" :style="{ color: 'var(--accent-bright)' }">
                🏆 {{ t('តំណែងឯតទគ្គៈកំពូលក្នុងសាសនា (The Foremost Title)', 'Supreme Foremost Title') }}
              </span>
              <p class="text-sm sm:text-base font-bold" :style="{ color: 'var(--ink)' }">
                {{ t(selectedDisciple.titleKm, selectedDisciple.titleEn) }}
              </p>
              <p class="text-xs mt-1" :style="{ color: 'var(--ink-soft)' }">
                {{ t(selectedDisciple.titleDetailKm, selectedDisciple.titleDetailEn) }}
              </p>
            </div>

            <!-- Past Life Aspiration -->
            <div class="p-3.5 sm:p-4 rounded-xl space-y-1.5" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
              <span class="text-xs font-bold uppercase tracking-wide block" :style="{ color: 'var(--accent)' }">
                ⏳ {{ t('បុព្វប្រណិធាន (Past Life Aspiration & Karmic Cause)', 'Past Life Vow') }}
              </span>
              <p :style="{ color: 'var(--ink-soft)' }">
                {{ t(selectedDisciple.pastVowKm, selectedDisciple.pastVowEn) }}
              </p>
            </div>

            <!-- Key Enlightenment & Life Story -->
            <div class="p-3.5 sm:p-4 rounded-xl space-y-1.5" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
              <span class="text-xs font-bold uppercase tracking-wide block" :style="{ color: 'var(--accent)' }">
                ⚡ {{ t('ដំណើរជីវិត និងការសម្រេចព្រះអរហត្តផល (Enlightenment Story)', 'Life & Awakening') }}
              </span>
              <p :style="{ color: 'var(--ink-soft)' }">
                {{ t(selectedDisciple.awakeningKm, selectedDisciple.awakeningEn) }}
              </p>
            </div>

            <!-- Famous Verse / Gāthā -->
            <div v-if="selectedDisciple.verseKm" class="verse-box p-4 rounded-xl text-center space-y-1">
              <span class="text-xs font-bold block uppercase tracking-wider" :style="{ color: 'var(--accent-bright)' }">
                📜 {{ t('គាថាបំផុសស្មារតី (Theragāthā / Inspired Verse)', 'Inspired Verse') }}
              </span>
              <p class="paali italic text-sm sm:text-base font-semibold mt-1" :style="{ color: 'var(--ink)' }">
                «{{ t(selectedDisciple.verseKm, selectedDisciple.verseEn) }}»
              </p>
            </div>

            <!-- Practical Lesson for Laypeople -->
            <div class="p-3.5 sm:p-4 rounded-xl space-y-1.5" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
              <span class="text-xs font-bold uppercase tracking-wide block" :style="{ color: 'var(--accent)' }">
                💡 {{ t('មេរៀន និងគំរូជីវិតសម្រាប់យើងអនុវត្តតាម (Life Lessons):', 'Practical Life Lessons:') }}
              </span>
              <p :style="{ color: 'var(--ink-soft)' }">
                {{ t(selectedDisciple.lessonKm, selectedDisciple.lessonEn) }}
              </p>
            </div>
          </div>

          <!-- Modal Footer -->
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

const activeCategory = ref('all')
const searchQuery = ref('')
const selectedDisciple = ref(null)

const categories = [
  { id: 'all', km: 'ទាំងអស់', en: 'All', icon: '☸' },
  { id: 'chief-male', km: 'អគ្គសាវ័កឆ្វេងស្តាំ', en: 'Chief Monks', icon: '👑' },
  { id: 'elder-monk', km: 'មហាសាវ័កឯតទគ្គៈ', en: 'Great Elders', icon: '🧘' },
  { id: 'chief-female', km: 'អគ្គសាវិកា & ភិក្ខុនី', en: 'Nuns (Bhikkhunī)', icon: '🪷' },
  { id: 'lay-disciples', km: 'ឧបាសក & ឧបាសិកា', en: 'Lay Disciples', icon: '🤝' },
]

const disciples = [
  {
    id: 'sariputta',
    category: 'chief-male',
    categoryKm: 'អគ្គសាវ័កស្តាំ',
    categoryEn: 'Right Chief Disciple',
    nameKm: 'ព្រះសារីបុត្តត្ថេរ (ព្រះធម្មសេនាបតី)',
    nameEn: 'Ven. Sāriputta Thera',
    pali: 'Dhammasenāpati Sāriputta',
    icon: '🧠',
    symbolKey: 'កំពូលខាងប្រាជ្ញា • Wisdom',
    titleKm: 'ឯតទគ្គៈផ្នែកមានប្រាជ្ញាច្រើនលើសភិក្ខុទាំងពួង (Mahāpaññā)',
    titleEn: 'Foremost in Great Wisdom (Mahāpaññā)',
    titleDetailKm: 'ជាអគ្គសាវ័កស្តាំ និងជាមេទ័ពធម៌ (ធម្មសេនាបតី) ដែលមានប្រាជ្ញាញាណជ្រៅជ្រះអាចវិភាគធម៌អភិធម្មពិស្ដារ និងជួយព្រះពុទ្ធបង្វិលធម្មចក្រ។',
    titleDetailEn: 'General of the Dhamma, second only to the Buddha in analytical insight and preaching.',
    shortKm: 'អគ្គសាវ័កស្តាំ សម្រេចសោតាបន្នដោយស្តាប់គាថាព្រះអស្សជិ «យេ ធម្មា ហេតុប្បភវា...» និងសម្រេចអរហត្តផលខណៈផ្លុំផ្លិតថ្វាយព្រះពុទ្ធក្នុងរូងភ្នំសូករខតា។',
    shortEn: 'Right Chief Disciple, enlightened while fanning the Buddha at Sukarakhata Cave.',
    pastVowKm: 'កាលពី ១ អសង្ខេយ្យ និង ១០០,០០០ កប្បកន្លងទៅ ក្នុងសម័យព្រះពុទ្ធអនោមទស្សី លោកកើតជាតាបសឈ្មោះ សរទៈ បានថ្វាយផ្កាឈូក និងតាំងសច្ចាថា សូមឱ្យបានជាអគ្គសាវ័កស្តាំផ្នែកប្រាជ្ញានៃព្រះពុទ្ធនាអនាគត។',
    pastVowEn: 'Made the aspiration 1 asankhyeyya and 100,000 kalpas ago under Buddha Anomadassi as the hermit Sarada.',
    awakeningKm: 'បានជួបព្រះអស្សជិតេ្ថរៈ ឮធម៌មួយគាថា ក៏បានសម្រេចសោតាបត្តិផល។ ក្រោយមកបួសបាន ១៥ ថ្ងៃ ខណៈពេលឈរកាន់ផ្លិតផ្លុំថ្វាយព្រះពុទ្ធ ដែលកំពុងសម្តែង «ទីឃនខសូត្រ» ប្រោសទីឃនខបរិព្វាជក ព្រះសារីបុត្តបានពិចារណាវេទនានុបស្សនា ក៏បានសម្រេចព្រះអរហត្តផលជាស្ថាពរ។',
    awakeningEn: 'Attained Sotapanna upon hearing Assaji recite "Ye dhamma hetuppabhava...", and Arahantship 15 days later contemplating feeling (Vedanā).',
    verseKm: 'សេចក្តីស្លាប់ អាត្មាមិនត្រេកអរឡើយ ជីវិតរស់នៅ អាត្មាក៏មិនត្រេកអរឡើយ អាត្មារង់ចាំតែកាលវេលាមកដល់ ដូចជាអ្នកស៊ីឈ្នួលរង់ចាំទទួលកម្រៃដូច្នេះឯង។',
    verseEn: 'I delight not in death, I delight not in life; I await my time like a hireling waiting for his wages.',
    lessonKm: 'ការកត្តញ្ញូចំពោះគ្រូ (ព្រះសារីបុត្តតែងគេងបែរក្បាលទៅទិសដែលព្រះអស្សជិគង់នៅជានិច្ច) និងការមិនប្រកាន់ខ្លួន ទោះបីក្មេងតូចប្រាប់ថាស្បង់រយីករយាក ក៏ឱនកាយកែតម្រូវភ្លាមៗ។',
    lessonEn: 'Deep reverence for one’s teachers and humble receptivity to advice, even from a novice.'
  },
  {
    id: 'moggallana',
    category: 'chief-male',
    categoryKm: 'អគ្គសាវ័កឆ្វេង',
    categoryEn: 'Left Chief Disciple',
    nameKm: 'ព្រះមហាមោគ្គល្លានត្ថេរ',
    nameEn: 'Ven. Mahāmoggallāna Thera',
    pali: 'Iddhimantānaṃ Mahāmoggallāna',
    icon: '⚡',
    symbolKey: 'កំពូលខាងឫទ្ធិ • Psychic Power',
    titleKm: 'ឯតទគ្គៈផ្នែកមានឫទ្ធិច្រើនលើសភិក្ខុទាំងពួង (Iddhimanta)',
    titleEn: 'Foremost in Psychic Powers (Iddhimanta)',
    titleDetailKm: 'ជាអគ្គសាវ័កឆ្វេង អាចហោះហើរទៅកាន់ឋានសួគ៌ ឋាននរក ទូន្មាននាគរាជ និងបង្រ្កាបមារានុភាពទាំងពួង។',
    titleDetailEn: 'Left Chief Disciple, unmatched in supernatural faculties and spiritual combat.',
    shortKm: 'មិត្តសម្លាញ់របស់ព្រះសារីបុត្ត បួសបាន ៧ ថ្ងៃ កើតសេចក្តីងងុយដេក (ថីនមិទ្ធៈ) ព្រះពុទ្ធទ្រង់ប្រទានវិធីបំបាត់ងងុយ ៨ យ៉ាង រួចសម្រេចអរហត្តផល។',
    shortEn: 'Master of supernatural powers who conquered sleepiness through 8 practical techniques given by the Buddha.',
    pastVowKm: 'សម័យព្រះពុទ្ធអនោមទស្សី លោកកើតជាសិរីវឌ្ឍនកុដុម្ពិកៈ (មិត្តរបស់សរទតាបស) បានប្រគេនទានដ៏ធំដល់ព្រះសង្ឃ ៧ ថ្ងៃ រួចតាំងចិត្តថា សូមបានជាអគ្គសាវ័កឆ្វេងផ្នែកឫទ្ធិ។',
    pastVowEn: 'Aspirated to become the Left Chief Disciple under Buddha Anomadassi as the wealthy Sirivaddhana.',
    awakeningKm: 'ក្រោយបួសបាន ៧ ថ្ងៃ លោកទៅធ្វើសមាធិក្បែរភូមិកល្លវាលមុត្តគាម ត្រូវថីនមិទ្ធៈគ្របសង្កត់ ព្រះពុទ្ធទ្រង់យាងទៅប្រទានវិធីបំបាត់ងងុយ ៨ ប្រការ (ក្តិចត្រចៀក, យកទឹកលុបមុខ, នឹកពន្លឺ, ចង្ក្រម...) រួចចម្រើនធាតុកម្មដ្ឋាន ក៏សម្រេចព្រះអរហន្ត។',
    awakeningEn: 'Overcame extreme sleepiness with the Buddha’s 8 antidotes, contemplated elements, and achieved full enlightenment.',
    verseKm: 'ព្រៃស្ងាត់ មហាសមុទ្រ ភ្នំថ្មដារ ឬទីវាលក្តី អ្នកមានចិត្តស្ងប់ មានសតិបរិបូណ៌ រមែងរស់នៅជាសុខគ្រប់វេលា។',
    verseEn: 'Whether in the deep forest or rocky hills, the mindful one of peaceful heart abides in bliss.',
    lessonKm: 'កម្មចាស់មិនអាចគេចផុតបានឡើយ៖ ទោះបីជាមានឫទ្ធិខ្លាំងក្លាដល់កម្រិតណាក៏ដោយ ក៏ព្រះមោគ្គល្លានត្រូវទទួលផលកម្មចាស់កាលពីជាតិមុនដែលធ្លាប់វាយសម្លាប់ម្តាយឪពុក ត្រូវពួកចោរព្រៃវាយបាក់ឆ្អឹងខ្ទេចខ្ទីមុនពេលបរិនិព្វាន (អានលម្អិតក្នុង «រឿងល្បីៗ» > ព្រះមហាមោគ្គល្លានត្ថេរ)។',
    lessonEn: 'Even the greatest supernatural powers cannot circumvent past destructive kamma (read full details in Stories > Ven. Mahāmoggallāna).'
  },
  {
    id: 'kassapa',
    category: 'elder-monk',
    categoryKm: 'មហាសាវ័ក',
    categoryEn: 'Great Elder Disciple',
    nameKm: 'ព្រះមហាកស្សបត្ថេរ (បិតាសង្គាយនា)',
    nameEn: 'Ven. Mahākassapa Thera',
    pali: 'Dhutavādānaṃ Mahākassapa',
    icon: '🏔️',
    symbolKey: 'កំពូលខាងធុតង្គ • Asceticism',
    titleKm: 'ឯតទគ្គៈផ្នែកសមាទានធុតង្គ និងប្រៀនប្រដៅធុតង្គ (Dhutavāda)',
    titleEn: 'Foremost in Ascetic Practices (Dhutavāda)',
    titleDetailKm: 'ជាអ្នកកាន់ធុតង្គយ៉ាងតឹងរ៉ឹងបំផុតរហូតដល់អាយុ ១២០ ឆ្នាំ និងជាប្រធានដឹកនាំសង្គាយនាព្រះត្រៃបិដកលើកទី ១។',
    titleDetailEn: 'Leader of the First Buddhist Council and master of strict austerity.',
    shortKm: 'ប្តូរស្បង់ជីវរជាមួយព្រះសម្មាសម្ពុទ្ធ កាន់ធុតង្គយ៉ាងម៉ឺងម៉ាត់ មិនចូលចិត្តទីប្រជុំជន គង់តែក្នុងព្រៃ និងស្មសាន។',
    shortEn: 'Exchanged robes with the Buddha, lived an austere forest life, and preserved the Dhamma after the Parinibbāna.',
    pastVowKm: 'សម័យព្រះពុទ្ធបទុមុត្តរ កាលពី ១០០,០០០ កប្បមុន លោកកើតជាសេដ្ឋីឈ្មោះ វេទេហៈ ឃើញព្រះពុទ្ធទ្រង់តែងតាំងភិក្ខុមួយអង្គជាកំពូលខាងធុតង្គ ក៏តាំងសច្ចាប្រណិធាន។',
    pastVowEn: 'Aspirated under Buddha Padumuttara 100,000 kalpas ago to become foremost in austere practice.',
    awakeningKm: 'បានជួបព្រះពុទ្ធក្រោមដើមពហុបុត្តកនិគ្រោធ ព្រះអង្គទ្រង់ប្រទានឱវាទ ៣ យ៉ាង៖ សង្រួមចិត្តចំពោះភិក្ខុចាស់ក្មេង, ស្តាប់ធម៌ដោយយកចិត្តទុកដាក់, មិនធ្វេសប្រហែសកាយគតាសតិ។ ក្រោយបួសបាន ៨ ថ្ងៃ លោកក៏សម្រេចព្រះអរហត្តផល។',
    awakeningEn: 'Attained full awakening 8 days after ordination upon receiving the Buddha’s 3-point exhortation on reverence and mindfulness.',
    verseKm: 'ផ្កាព្រៃមិនអាចក្រអូបបញ្ច្រាសខ្យល់បានឡើយ ប៉ុន្តែក្លិនក្រអូបនៃសីល និងធុតង្គរបស់សប្បុរស រមែងក្រអូបសព្វទិសានុទិស។',
    verseEn: 'The scent of sandalwood does not travel against the wind, but the fragrance of pure virtue pervades all quarters.',
    lessonKm: 'ភាពសាមញ្ញ មិនលោភលន់ និងភាពរឹងមាំក្នុងការថែរក្សាព្រះធម៌វិន័យឱ្យបរិសុទ្ធដោយមិនលម្អៀង។',
    lessonEn: 'Contentment with simplicity and unwavering integrity in protecting the Dhamma.'
  },
  {
    id: 'ananda',
    category: 'elder-monk',
    categoryKm: 'មហាសាវ័ក',
    categoryEn: 'Great Elder Disciple',
    nameKm: 'ព្រះអានន្ទត្ថេរ (ឃ្លាំងព្រះធម៌)',
    nameEn: 'Ven. Ānanda Thera',
    pali: 'Bahussutānaṃ Ānanda',
    icon: '📜',
    symbolKey: 'កំពូល ៥ ផ្នែក • Dhamma Treasurer',
    titleKm: 'ឯតទគ្គៈ ៥ ផ្នែក៖ ពហុស្សូត, សតិ, គតិ, ធិតិ និងការបម្រើ',
    titleEn: 'Foremost in 5 Areas: Erudition, Mindfulness, Retention, Resolve & Service',
    titleDetailKm: 'ជាព្រះអនុជ និងជាឧបដ្ឋាកផ្ទាល់របស់ព្រះពុទ្ធរយៈពេល ២៥ ឆ្នាំ ចងចាំព្រះធម៌ ៨៤,០០០ ធម្មក្ខន្ធ បានយ៉ាងល្អឥតខ្ចោះ។',
    titleDetailEn: 'Personal attendant of the Buddha for 25 years who memorised the entire Sutta Piṭaka.',
    shortKm: 'សុំពរ ៨ ប្រការមុនទទួលតំណែងជាឧបដ្ឋាក សម្រេចអរហត្តផលក្នុងឥរិយាបថបម្រុងនឹងដេក (ក្បាលមិនទាន់ប៉ះខ្នើយ ជើងផុតពីដី)។',
    shortEn: 'Achieved Arahantship in a unique posture neither lying, sitting, standing, nor walking, right before the 1st Council.',
    pastVowKm: 'សម័យព្រះពុទ្ធបទុមុត្តរ លោកកើតជាព្រះរាជបុត្រឈ្មោះ សុrelativePath បានឃើញព្រះពុទ្ធទ្រង់តែងតាំងភិក្ខុជាឧបដ្ឋាកកំពូល ក៏សាងបុណ្យធំតាំងសច្ចា។',
    pastVowEn: 'Aspirated to become the supreme personal attendant under Buddha Padumuttara.',
    awakeningKm: 'ខណៈដែលខំប្រឹងចម្រើនសមណធម៌ពេញមួយយប់មុនថ្ងៃសង្គាយនា ជិតភ្លឺមានអារម្មណ៍នឿយហត់ ទើបបម្រុងនឹងផ្អៀងកាយដេកលើគ្រែ ខណៈដែលជើងផុតពីដី ក្បាលមិនទាន់ប៉ះខ្នើយ ចិត្តក៏ផុតស្រឡះពីអាសវៈ សម្រេចអរហត្តផលភ្លាមមួយរំពេច!',
    awakeningEn: 'Enlightened in mid-transition between standing and reclining on the eve of the First Council.',
    verseKm: 'ព្រះធម៌ ៨៤,០០០ ធម្មក្ខន្ធ អាត្មាបានរៀនពីព្រះពុទ្ធ ៨២,០០០ និងរៀនពីសិស្សច្បង ២,០០០ ធម៌ទាំងនោះតែងភ្លឺច្បាស់ក្នុងចិត្តអាត្មា។',
    verseEn: '82,000 teachings from the Buddha and 2,000 from the elder brethren: these 84,000 illuminate my consciousness.',
    lessonKm: 'ការបម្រើអ្នកដទៃដោយក្តីស្រឡាញ់ស្មោះស្ម័គ្រ និងការអត់ធន់ខ្ពស់ក្នុងការបំពេញភារកិច្ចឱ្យសម្រេច។',
    lessonEn: 'Selfless devotion to service combined with diligent retention of wisdom.'
  },
  {
    id: 'sivali',
    category: 'elder-monk',
    categoryKm: 'មហាសាវ័ក',
    categoryEn: 'Great Elder Disciple',
    nameKm: 'ព្រះសីវលីត្ថេរ (ព្រះមហាលាភ)',
    nameEn: 'Ven. Sīvalī Thera',
    pali: 'Lābhīnaṃ Sīvalī',
    icon: '🌾',
    symbolKey: 'កំពូលខាងលាភ • Abundant Fortune',
    titleKm: 'ឯតទគ្គៈផ្នែកមានលាភសក្ការៈច្រើនលើសភិក្ខុទាំងពួង (Lābhī)',
    titleEn: 'Foremost in Receiving Offerings and Abundance (Lābhī)',
    titleDetailKm: 'ទោះបីជាយាងទៅក្នុងព្រៃរហោស្ថាន ទីគ្មានមនុស្ស ឬទីណា ក៏ទេវតាតែងតែនិម្មិតចង្ហាន់ និងបច្ច័យបួនមកថ្វាយមិនដែលដាច់។',
    titleDetailEn: 'Whenever monks travelled with him, food and requisites appeared miraculously even in barren wastelands.',
    shortKm: 'នៅក្នុងផ្ទៃម្តាយអស់ ៧ ឆ្នាំ ៧ ខែ ៧ ថ្ងៃ ដោយសារកម្មចាស់ តែសម្រេចអរហត្តផលខណៈពេលកោរសក់បួសជាសាមណេរ។',
    shortEn: 'Due to past wholesome merit of almsgiving honey, he was blessed with inexhaustible offerings wherever he set foot.',
    pastVowKm: 'សម័យព្រះពុទ្ធបទុមុត្តរ លោកកើតជាក្សត្រ បានឃើញភិក្ខុមួយអង្គមានលាភច្រើន ក៏ប្រគេនទាន ៧ ថ្ងៃតាំងចិត្ត។ ក្រោយមកក្នុងសម័យព្រះពុទ្ធវិបស្សី បានទិញទឹកឃ្មុំសុទ្ធតម្លៃ ១,០០០ កហាបណៈ ប្រគេនព្រះសង្ឃ ៦,៨០០,០០០ អង្គ។',
    pastVowEn: 'Offered rare honey curd to Buddha Vipassī and 6.8 million monks, setting the karmic foundation for supreme abundance.',
    awakeningKm: 'កាលបួសជាសាមណេរ អាយុទើបតែ ៧ ថ្ងៃ ព្រះសារីបុត្តកោរសក់ឱ្យ ខណៈកោរប្លកទីមួយ ពិចារណាកេសា (សក់) ដល់សោតាបត្តិផល, ប្លកទីពីរ ដល់សកទាគាមិផល, ប្លកទីបី ដល់អនគាមិផល, ហើយកោរសក់រួច ក៏សម្រេចព្រះអរហន្ត!',
    awakeningEn: 'Attained the 4 stages of awakening step-by-step as his head was being shaved by Sariputta.',
    verseKm: 'លាភសក្ការៈកើតឡើងដោយកម្លាំងបុណ្យដែលបានសាងទុក មិនមែនកើតដោយការសុំ ឬការលោភលន់ឡើយ។',
    verseEn: 'Abundance flows from the reservoir of selfless past giving, never from desperate craving.',
    lessonKm: 'ចង់បានលាភ ត្រូវចេះ «ចែករំលែក និងធ្វើទាន» ជាមុន។ លាភរបស់ព្រះសីវលីកើតពីទឹកឃ្មុំមួយផ្តិលដែលលោកបានលះបង់ដោយសេចក្តីជ្រះថ្លាបំផុត។',
    lessonEn: 'True abundance is the echo of heartfelt generosity planted in past moments.'
  },
  {
    id: 'upali',
    category: 'elder-monk',
    categoryKm: 'មហាសាវ័ក',
    categoryEn: 'Great Elder Disciple',
    nameKm: 'ព្រះឧបាលិត្ថេរ (មគ្គុទ្ទេសក៍វិន័យ)',
    nameEn: 'Ven. Upāli Thera',
    pali: 'Vinayadharānaṃ Upāli',
    icon: '⚖️',
    symbolKey: 'កំពូលខាងវិន័យ • Monastic Discipline',
    titleKm: 'ឯតទគ្គៈផ្នែកចងចាំ និងរក្សាព្រះវិន័យ (Vinayadhara)',
    titleEn: 'Foremost Master of the Vinaya (Vinayadhara)',
    titleDetailKm: 'ពីដើមជាជាងកាត់សក់របស់រាជកុមារសក្យវង្ស តែបានបួសមុនគេ និងជាអ្នកឆ្លើយវិនិច្ឆ័យព្រះវិន័យបិដកក្នុងសង្គាយនាលើកទី ១។',
    titleDetailEn: 'Former court barber who became the supreme authority on monastic law and discipline.',
    shortKm: 'ព្រះរាជកុមារទាំង ៦ អង្គ (រួមទាំងព្រះអនុរុទ្ធ និងព្រះអានន្ទ) បានឱ្យព្រះឧបាលិបួសមុន ដើម្បីបន្ទាបមានះរាជវង្សក្រាបថ្វាយបង្គំអតីតអ្នកបម្រើ។',
    shortEn: 'The Sakyan princes insisted he be ordained first so they could bow to him and crush their royal pride.',
    pastVowKm: 'សម័យព្រះពុទ្ធបទុមុត្តរ លោកកើតជាកុដុម្ពិកៈឈ្មោះ សុជាត បានឃើញព្រះពុទ្ធទ្រង់តាំងភិក្ខុជាកំពូលខាងវិន័យ ក៏បានប្រគេនទានធំតាំងសច្ចា។',
    pastVowEn: 'Aspirated to become the master of Vinaya under Buddha Padumuttara.',
    awakeningKm: 'ក្រោយបួសរួច ព្រះឧបាលិមានបំណងចង់ទៅគង់នៅក្នុងព្រៃស្ងាត់ តែព្រះពុទ្ធទ្រង់ទូន្មានថា គង់នៅជិតព្រះអង្គទើបអាចរៀនសូត្រវិន័យបានជ្រៅជ្រះ។ លោកបានបដិបត្តិតាម ក៏សម្រេចព្រះអរហត្តផល និងជាកំពូលផ្នែកវិន័យ។',
    awakeningEn: 'Advised by the Buddha to stay in the monastic community rather than the deep wilderness to master discipline.',
    verseKm: 'បុគ្គលដែលរក្សាវិន័យស្អាតស្អំ រមែងមិនក្តៅក្រហាយក្នុងចិត្ត ដូចជាអ្នកដំណើរដែលដើរលើផ្លូវរាបស្មើឥតបន្លាដូច្នេះឯង។',
    verseEn: 'One who guards moral discipline walks without anxiety, like a traveler upon a smooth, thornless road.',
    lessonKm: 'ព្រះពុទ្ធសាសនាមិនប្រកាន់វណ្ណៈឡើយ៖ អ្នកកាត់សក់អាចក្លាយជាគ្រូ និងជាទីគោរពរបស់ព្រះមហាក្សត្រ ប្រសិនបើមានសីលធម៌ និងការបដិបត្តិខ្ពង់ខ្ពស់។',
    lessonEn: 'True nobility is measured entirely by conduct and purity of heart, never by social caste.'
  },
  {
    id: 'anuruddha',
    category: 'elder-monk',
    categoryKm: 'មហាសាវ័ក',
    categoryEn: 'Great Elder Disciple',
    nameKm: 'ព្រះអនុរុទ្ធត្ថេរ (ភ្នែកទិព្វ)',
    nameEn: 'Ven. Anuruddha Thera',
    pali: 'Dibbacakkhukānaṃ Anuruddha',
    icon: '👁️',
    symbolKey: 'កំពូលភ្នែកទិព្វ • Divine Eye',
    titleKm: 'ឯតទគ្គៈផ្នែកមានទិព្វចក្ខុញ្ញាណលើសភិក្ខុទាំងពួង (Dibbacakkhu)',
    titleEn: 'Foremost in the Divine Eye (Dibbacakkhu)',
    titleDetailKm: 'អាចមើលឃើញចក្រវាឡរាប់ពាន់ និងការស្លាប់កើតនៃសត្វលោកក្នុងភពទាំង ៣១ យ៉ាងច្បាស់ក្រឡែតដូចគ្រាប់ពុទ្រាក្នុងបាតដៃ។',
    titleDetailEn: 'Possessed panoramic clairvoyance surveying thousands of world systems with effortless clarity.',
    shortKm: 'ព្រះភាតានៃព្រះពុទ្ធ កាលនៅជាកុមារមិនដែលស្គាល់ពាក្យថា «គ្មាន» ឡើយ។ ក្រោយបួស មិនដែលដេកលក់កាលពេលរាត្រី (កាន់នេសជ្ជិកធុតង្គ ៥៥ ឆ្នាំ)។',
    shortEn: 'Cousin of the Buddha who practiced meditation without lying down for 55 years.',
    pastVowKm: 'សម័យព្រះពុទ្ធបទុមុត្តរ លោកកើតជាអ្នកមានឈ្មោះ អន្នភារៈ បានថ្វាយប្រទីបជ្វាលារាប់ពាន់ជុំវិញព្រះចេតិយ ក៏តាំងសច្ចាថា សូមឱ្យបានភ្នែកទិព្វ។',
    pastVowEn: 'Offered thousands of oil lamps around a stūpa in past life, cultivating the cause for divine vision.',
    awakeningKm: 'បានទៅចម្រើនសមណធម៌នៅព្រៃបាចិនវង្ស បានត្រិះរិះមហាបុរិសវិតក្ក ៧ ប្រការ ព្រះពុទ្ធទ្រង់យាងទៅសម្តែងបំពេញបន្ថែមប្រការទី ៨ គឺ «ធម៌នេះសម្រាប់បុគ្គលដែលមិនត្រេកអរក្នុងការពន្យារភព» លោកក៏សម្រេចព្រះអរហន្តភ្លាម។',
    awakeningEn: 'Enlightened upon receiving the 8th thought of a Great Person from the Buddha at Eastern Bamboo Park.',
    verseKm: 'ចិត្តដែលបានស្ងប់ផុតពីកាម រមែងភ្លឺស្វាងលើសពន្លឺព្រះអាទិត្យ ឃើញច្បាស់នូវការកើតរលត់នៃរូបនាមទាំងពួង។',
    verseEn: 'The mind freed from sensual distraction shines brighter than a thousand suns, witnessing the rise and fall of worlds.',
    lessonKm: 'ការតាំងចិត្តដ៏មោះមុត៖ ពេលដែលភ្នែកចាប់ផ្តើមខ្វាក់ គ្រូពេទ្យឱ្យដេកសម្រាក តែលោកសុខចិត្តឱ្យភ្នែកសាច់ខ្វាក់ តែមិនព្រមបោះបង់ការអង្គុយតាំងសមាធិឡើយ រហូតសម្រេចភ្នែកទិព្វដ៏អស្ចារ្យ។',
    lessonEn: 'Uncompromising dedication to inner vision over worldly comfort.'
  },
  {
    id: 'khema',
    category: 'chief-female',
    categoryKm: 'អគ្គសាវិកាស្តាំ',
    categoryEn: 'Right Chief Nun',
    nameKm: 'ព្រះនាងខេមាភិក្ខុនី (អគ្គសាវិកាស្តាំ)',
    nameEn: 'Ven. Khemā Therī',
    pali: 'Mahāpaññānaṃ Khemā',
    icon: '👑',
    symbolKey: 'កំពូលប្រាជ្ញាភិក្ខុនី • Supreme Wisdom',
    titleKm: 'ឯតទគ្គៈផ្នែកមានប្រាជ្ញាច្រើនលើសភិក្ខុនីទាំងពួង (Mahāpaññā)',
    titleEn: 'Foremost Bhikkhunī in Great Wisdom (Mahāpaññā)',
    titleDetailKm: 'ជាអគ្គមហេសីនៃព្រះបាទពិម្ពិសារ ធ្លាប់ស្រឡាញ់រូបសម្រស់ខ្លាំង តែព្រះពុទ្ធទ្រង់និម្មិតរូបស្រីស្អាតឱ្យប្រែជាចាស់ជ្រីវជ្រួញស្លាប់រលួយនៅចំពោះមុខ ធ្វើឱ្យព្រះនាងសម្រេចអរហត្តផលទាំងនៅជាគ្រហស្ថ។',
    titleDetailEn: 'Former queen of King Bimbisāra who attained Arahantship while still in royal garments upon seeing the impermanence of beauty.',
    shortKm: 'អគ្គសាវិកាផ្នែកប្រាជ្ញាស្មើនឹងព្រះសារីបុត្ត ធ្លាប់បានឆ្លើយសំណួរធម៌ដ៏ជ្រាលជ្រៅថ្វាយព្រះបាទបសេនទិកោសលយ៉ាងស្ទាត់ជំនាញ។',
    shortEn: 'Right Chief Nun and master teacher whose theological answers were praised by King Pasenadi and the Buddha.',
    pastVowKm: 'សម័យព្រះពុទ្ធបទុមុត្តរ នាងបានឃើញព្រះពុទ្ធតែងតាំងភិក្ខុនីជាកំពូលប្រាជ្ញា ក៏បានប្រគេនទានធំតាំងសច្ចាថា សូមបានជាអគ្គសាវិកាស្តាំ។',
    pastVowEn: 'Aspirated under Buddha Padumuttara to become the female counterpart to Sāriputta in wisdom.',
    awakeningKm: 'ខណៈពេលកំពុងឈរគយគន់រូបស្រីស្អាតដែលព្រះពុទ្ធនិម្មិត ហើយរូបនោះប្រែជាចាស់ជ្រួញ ដួលស្លាប់ ហើមស្អុយរលួយ ព្រះនាងពិចារណាឃើញកាយនេះមានសភាពដូចគ្នាមិនខុស ក៏បានសម្រេចព្រះអរហត្តផលភ្លាមៗ រួចសុំព្រះរាជាបួសជាភិក្ខុនី។',
    awakeningEn: 'Attained full Arahantship instantly as a laywoman watching an illusory beauty age, die, and decompose before her eyes.',
    verseKm: 'រូបកាយស្អាតនេះ គ្រាន់តែជាថង់ស្បែករុំស្រោបគ្រឿងស្អុយរលួយ បុគ្គលល្ងង់រមែងជាប់ជំពាក់ តែអ្នកមានប្រាជ្ញារមែងលះបង់ដោយដាច់ស្រឡះ។',
    verseEn: 'This attractive form is merely a sack of skin concealing decay; the foolish are trapped by it, but the wise break free.',
    lessonKm: 'កុំវង្វេងនឹងរូបសម្រស់ខាងក្រៅ ព្រោះរូបកាយទាំងអស់ត្រូវតែចាស់ ឈឺ និងស្លាប់ដូចៗគ្នា។',
    lessonEn: 'Freedom begins the moment one pierces through the illusion of physical beauty.'
  },
  {
    id: 'uppalavanna',
    category: 'chief-female',
    categoryKm: 'អគ្គសាវិកាឆ្វេង',
    categoryEn: 'Left Chief Nun',
    nameKm: 'ព្រះនាងឧប្បលវណ្ណាភិក្ខុនី (អគ្គសាវិកាឆ្វេង)',
    nameEn: 'Ven. Uppalavaṇṇā Therī',
    pali: 'Iddhimantīnaṃ Uppalavaṇṇā',
    icon: '🪷',
    symbolKey: 'កំពូលឫទ្ធិភិក្ខុនី • Supreme Psychic Power',
    titleKm: 'ឯតទគ្គៈផ្នែកមានឫទ្ធិច្រើនលើសភិក្ខុនីទាំងពួង (Iddhimantī)',
    titleEn: 'Foremost Bhikkhunī in Psychic Powers (Iddhimantī)',
    titleDetailKm: 'មានសម្បុរកាយដូចផ្កាឈូកខៀវ មានឫទ្ធិអស្ចារ្យស្មើនឹងព្រះមោគ្គល្លាន អាចនិម្មិតរទេះទិព្វ និងកាយរាប់ពាន់បាន។',
    titleDetailEn: 'Left Chief Nun who equalled Moggallāna in supernatural mastery and miraculous transformations.',
    shortKm: 'សម្រេចអរហត្តផលខណៈពេលអុជប្រទីបក្នុងឧបោសថសាលា ហើយយកអណ្តាតភ្លើងមកចម្រើនតេជោកសិណ។',
    shortEn: 'Attained awakening contemplating the flickering flame of an oil lamp, mastering the fire kasina.',
    pastVowKm: 'សម័យព្រះពុទ្ធបទុមុត្តរ នាងបានធ្វើបុណ្យធំ ហើយតាំងសច្ចាថា សូមឱ្យបានជាកំពូលអគ្គសាវិកាឆ្វេងផ្នែកឫទ្ធិ។',
    pastVowEn: 'Aspirated to become the supreme nun in psychic transformation under Buddha Padumuttara.',
    awakeningKm: 'កាលបួសរួច ថ្ងៃមួយដល់វេននាងត្រូវបោសសម្អាតឧបោសថសាលា នាងបានអុជប្រទីប ហើយយកអណ្តាតភ្លើងនៃចង្កៀងមកតម្កល់ចិត្តចម្រើនតេជោកសិណ ពិចារណាការកើតរលត់ ក៏សម្រេចព្រះអរហត្តផលព្រមទាំងបដិសម្ភិទាញាណ ៤។',
    awakeningEn: 'Attained Arahantship with the 4 Analytical Knowledges using the fire kasina of an oil lamp.',
    verseKm: 'ទោះបីជាមារមកបំភ័យក្នុងព្រៃស្ងាត់ ក៏ចិត្តរបស់អាត្មាមិនញាប់ញ័រ ព្រោះអាត្មាបានទម្លុះទម្លាយកងទ័ពមារអស់ហើយ។',
    verseEn: 'Though Māra attempts to terrify me in the dark grove, my mind trembles not; I have shattered all shackles.',
    lessonKm: 'ចិត្តបរិសុទ្ធដែលរួចចាកកិលេស គ្មានអ្វីអាចធ្វើឱ្យសៅហ្មងបានឡើយ ទោះបីត្រូវគេធ្វើបាបខាងសាច់ឈាម ក៏ចិត្តនៅតែដូចទឹកលើស្លឹកឈូក។',
    lessonEn: 'A liberated mind remains untouched by external harm, like water drops sliding off a lotus leaf.'
  },
  {
    id: 'visakha',
    category: 'lay-disciples',
    categoryKm: 'ឧបាសិកាឆ្នើម',
    categoryEn: 'Foremost Laywoman',
    nameKm: 'នាងវិសាខា មហាឧបាសិកា',
    nameEn: 'Visākhā Mahā-upāsikā',
    pali: 'Dāyikānaṃ Visākhā',
    icon: '💎',
    symbolKey: 'កំពូលទាយិកា • Supreme Benefactress',
    titleKm: 'ឯតទគ្គៈផ្នែកជាទាយិកាអ្នកឱ្យទានលើសឧបាសិកាទាំងពួង (Dāyikā)',
    titleEn: 'Foremost Laywoman in Generosity and Patronage (Dāyikā)',
    titleDetailKm: 'សម្រេចសោតាបន្នតាំងពីអាយុ ៧ ឆ្នាំ ជាមាតានៃវត្តបុព្វារាម និងជាអ្នកសុំពរ ៨ ប្រការពីព្រះពុទ្ធដើម្បីទំនុកបម្រុងព្រះសង្ឃមួយជីវិត។',
    titleDetailEn: 'Attained Stream-entry at age seven, constructed the Pubbārāma Monastery, and secured the 8 lifelong boons of giving.',
    shortKm: 'មានគ្រឿងប្រដាប់មហាលតាបសាធនតម្លៃ ៩ កោដិ បានលក់មកសាងវត្តបុព្វារាមថ្វាយព្រះសង្ឃ។',
    shortEn: 'Sold her magnificent Mahālatā ornament worth 90 million gold coins to build the grand monastery for the Sangha.',
    pastVowKm: 'សម័យព្រះពុទ្ធបទុមុត្តរ នាងកើតជាមិត្តរបស់ឧបាសិកាដែលជាទាយិកាកំពូល ក៏បានធ្វើបុណ្យធំតាំងចិត្ត។',
    pastVowEn: 'Aspirated under Buddha Padumuttara to become the foremost female supporter of the Sasana.',
    awakeningKm: 'កាលអាយុ ៧ ឆ្នាំ លោកតារបស់នាង (មេណ្ឌកសេដ្ឋី) បាននាំនាងទៅគាល់ព្រះពុទ្ធ គ្រាន់តែស្តាប់ព្រះធម៌ទេសនាចប់ នាងនិងកុមារី ៥០០ នាក់បានសម្រេចសោតាបត្តិផលព្រមគ្នា។',
    awakeningEn: 'Attained Sotapanna at the tender age of seven upon first hearing the Buddha teach.',
    verseKm: 'ការឱ្យទានដែលកើតចេញពីចិត្តជ្រះថ្លា រមែងតាមជួយទំនុកបម្រុងសត្វលោក ដូចជាកង់រទេះដែលវិលតាមគន្លងជើងគោដូច្នេះឯង។',
    verseEn: 'The fruit of joyful giving follows a person through lifetimes like the wheel following the hoof of the ox.',
    lessonKm: 'ឱវាទ ១០ ប្រការរបស់ឪពុកនាងមុនពេលរៀបការ (កុំនាំភ្លើងក្នុងចេញក្រៅ, កុំនាំភ្លើងក្រៅចូលក្នុង...) ជាគតិបណ្ឌិតដ៏មានតម្លៃបំផុតសម្រាប់សុភមង្គលគ្រួសារ។',
    lessonEn: 'Her father’s 10 wedding maxims (don’t take internal fire outside, etc.) remain a masterclass in domestic harmony.'
  },
  {
    id: 'anathapindika',
    category: 'lay-disciples',
    categoryKm: 'ឧបាសកឆ្នើម',
    categoryEn: 'Foremost Layman',
    nameKm: 'អនាថបិណ្ឌិកសេដ្ឋី (សុទត្ត)',
    nameEn: 'Anāthapiṇḍika (Sudatta)',
    pali: 'Dāyakānaṃ Anāthapiṇḍika',
    icon: '🏰',
    symbolKey: 'កំពូលទាយក • Supreme Benefactor',
    titleKm: 'ឯតទគ្គៈផ្នែកជាទាយកអ្នកឱ្យទានលើសឧបាសកទាំងពួង (Dāyaka)',
    titleEn: 'Foremost Layman in Generosity and Patronage (Dāyaka)',
    titleDetailKm: 'សេដ្ឋីចិត្តធម៌ដែលទិញសួនច្បាររាជកុមារជេត ដោយក្រាលប្រាក់កាក់មាសរាប់លានសន្លឹក ដើម្បីសាងវត្តជេតពនដ៏ល្បីល្បាញបំផុត។',
    titleDetailEn: 'Purchased Jetavana Grove by paving the land with gold coins to build the Buddha’s favorite monastery.',
    shortKm: 'ឈ្មោះដើម «សុទត្ត» តែគេហៅថា អនាថបិណ្ឌិកៈ ព្រោះតែងតែចែកបាយដល់មនុស្សកំព្រា និងអ្នកក្រីក្រឥតល្ហែ។',
    shortEn: 'Known as the Feeder of the Destitute for his relentless daily feeding of orphans, widows, and the poor.',
    pastVowKm: 'សម័យព្រះពុទ្ធបទុមុត្តរ លោកកើតជាសេដ្ឋី បានឃើញព្រះពុទ្ធតែងតាំងឧបាសកជាកំពូលអ្នកឱ្យទាន ក៏តាំងសច្ចាប្រណិធាន។',
    pastVowEn: 'Made the aspiration under Buddha Padumuttara to become the chief lay benefactor.',
    awakeningKm: 'បានទៅក្រុងរាជគ្រឹះ ឮពាក្យថា «ព្រះពុទ្ធបានត្រាស់ដឹងក្នុងលោក» កើតបីតិរំភើបញាប់ញ័រ រួចដើរទៅកាន់ព្រៃសីវវ័នទាំងយប់ងងឹត ជួបព្រះពុទ្ធ ស្តាប់អនុបុព្វិកថា ក៏សម្រេចសោតាបត្តិផលភ្លាម។',
    awakeningEn: 'Walked in faith through a pitch-black charnel ground at night to meet the Buddha, attaining Sotapanna upon hearing his first discourse.',
    verseKm: 'ទ្រព្យសម្បត្តិដែលមិនបានចែករំលែកជាទាន រមែងរលាយសាបសូន្យទៅឥតប្រយោជន៍ តែទ្រព្យដែលបានធ្វើជាទាន រមែងក្លាយជាកំណប់កប់ទុកមិនដែលបាត់បង់។',
    verseEn: 'Wealth hoarded rots into dust; wealth converted into Dhamma generosity becomes an imperishable treasure.',
    lessonKm: 'ចិត្តសទ្ធាមិនរង្គោះរង្គើ៖ ទោះបីជាជួបវិបត្តិសេដ្ឋកិច្ចធ្លាក់ខ្លួនក្រខ្សត់យ៉ាងណា ក៏លោកនៅតែបន្តចែកទានបាយចុងអង្ករជាមួយទឹកជ្រក់ដល់ព្រះសង្ឃ ដោយមិនដែលត្អូញត្អែរឡើយ។',
    lessonEn: 'Steadfast generosity: when bankrupted by tidal floods, he still joyfully offered broken rice congee with unbroken faith.'
  }
]

const getCategoryCount = (catId) => {
  if (catId === 'all') return disciples.length
  return disciples.filter(d => d.category === catId).length
}

const getCategoryBadge = (category) => {
  switch (category) {
    case 'chief-male': return 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/20'
    case 'elder-monk': return 'bg-blue-500/10 text-blue-800 dark:text-blue-300 border-blue-500/20'
    case 'chief-female': return 'bg-rose-500/10 text-rose-800 dark:text-rose-300 border-rose-500/20'
    case 'lay-disciples': return 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-500/20'
    default: return 'bg-stone-500/10 text-stone-700 dark:text-stone-300 border-stone-500/20'
  }
}

const filteredDisciples = computed(() => {
  return disciples.filter(d => {
    const matchesCat = activeCategory.value === 'all' || d.category === activeCategory.value
    const q = searchQuery.value.trim().toLowerCase()
    if (!q) return matchesCat

    const matchesQuery =
      d.nameKm.toLowerCase().includes(q) ||
      d.nameEn.toLowerCase().includes(q) ||
      d.pali.toLowerCase().includes(q) ||
      d.titleKm.toLowerCase().includes(q) ||
      d.shortKm.toLowerCase().includes(q)
    return matchesCat && matchesQuery
  })
})

function openModal(disciple) {
  selectedDisciple.value = disciple
}

function closeModal() {
  selectedDisciple.value = null
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
