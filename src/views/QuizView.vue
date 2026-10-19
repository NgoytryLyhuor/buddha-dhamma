<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សិក្សា & ល្បងប្រាជ្ញា — សំណួរស្ទង់ចំណេះដឹងធម៌', 'STUDY & QUIZ — DHAMMA KNOWLEDGE TEST') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('ល្បងប្រាជ្ញាព្រះធម៌', 'Dhamma Wisdom Quiz') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ការពិនិត្យស្ទង់ចំណេះដឹងតាមរយៈសំណួរចម្លើយ ជួយរំឭកការចងចាំ ពង្រឹងការយល់ដឹងឱ្យកាន់តែច្បាស់លាស់ និងបណ្តុះបញ្ញាស្មារតី។ សំណួរទាំងអស់ត្រូវបានស្រង់ចេញពីព្រះត្រៃបិដក ធម៌មូលដ្ឋាន ព្រះអភិធម្ម និងពុទ្ធប្រវត្តិ។', 'Testing your understanding through interactive quizzes reinforces recall, deepens conceptual clarity, and sharpens discernment. Questions are curated from the Tipitaka, core doctrines, Abhidhamma, and the life of the Buddha.') }}
    </p>

    <!-- Quiz Categories Filter -->
    <div v-if="!quizStarted || isFinished" class="card-paper p-6 md:p-8 mt-8">
      <h3 class="font-display text-xl" :style="{ color: 'var(--ink)' }">
        {{ t('ជ្រើសរើសផ្នែកដែលចង់សាកល្បង', 'Select a Category') }}
      </h3>
      <p class="text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ជ្រើសរើសផ្នែកណាមួយ ឬសាកល្បងសំណួរចម្រុះទាំងអស់', 'Choose a focused topic or test across all subjects') }}
      </p>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
        <button v-for="cat in categories" :key="cat.id"
          class="p-4 rounded-sm text-left transition hover:border-amber-600"
          :class="selectedCat === cat.id ? 'border-2' : ''"
          :style="{
            background: 'var(--bg-card-2)',
            border: selectedCat === cat.id ? '2px solid var(--accent-bright)' : '1px solid var(--border)'
          }"
          @click="selectedCat = cat.id">
          <span class="text-xl">{{ cat.icon }}</span>
          <p class="font-bold text-sm mt-2" :style="{ color: 'var(--ink)' }">{{ t(cat.km, cat.en) }}</p>
          <p class="text-[11px] mt-1" :style="{ color: 'var(--ink-muted)' }">{{ cat.count }} {{ t('សំណួរ', 'questions') }}</p>
        </button>
      </div>

      <div class="mt-6 text-center">
        <button class="install-btn px-8 py-3 text-base font-bold" @click="startQuiz">
          {{ t('ចាប់ផ្តើមធ្វើតេស្ត', 'Start Quiz') }} &#8594;
        </button>
      </div>
    </div>

    <!-- Active Question Card -->
    <div v-if="quizStarted && !isFinished" class="card-paper p-6 md:p-8 mt-8 max-w-2xl mx-auto">
      <!-- Progress header -->
      <div class="flex items-center justify-between text-xs pb-3" :style="{ borderBottom: '1px solid var(--border)' }">
        <span class="font-bold" :style="{ color: 'var(--accent)' }">
          {{ t('សំណួរទី ', 'Question ') }}{{ khNum(currentIndex + 1) }} / {{ khNum(filteredQuestions.length) }}
        </span>
        <span class="font-bold" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ពិន្ទុ៖ ', 'Score: ') }}{{ khNum(score) }}
        </span>
      </div>

      <!-- Question Text -->
      <div class="my-6">
        <p class="font-display text-xl md:text-2xl leading-snug" :style="{ color: 'var(--ink)' }">
          {{ t(currentQuestion.qKm, currentQuestion.qEn) }}
        </p>
        <p v-if="currentQuestion.paali" class="text-xs paali mt-1.5" :style="{ color: 'var(--accent)' }">
          {{ currentQuestion.paali }}
        </p>
      </div>

      <!-- Choices -->
      <div class="space-y-3">
        <button v-for="(choice, idx) in currentQuestion.choices" :key="idx"
          class="w-full text-left p-4 rounded-sm text-sm transition flex items-center justify-between gap-3"
          :class="getChoiceClass(idx)"
          :style="getChoiceStyle(idx)"
          :disabled="hasAnswered"
          @click="selectAnswer(idx)">
          <div class="flex items-center gap-3">
            <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
              :style="{ background: 'var(--bg-main)', color: 'var(--ink)' }">
              {{ 'កខគឃ'[idx] }}
            </span>
            <span class="font-medium" :style="{ color: 'var(--ink)' }">{{ t(choice.km, choice.en) }}</span>
          </div>

          <span v-if="hasAnswered && idx === currentQuestion.correct" class="text-emerald-600 font-bold text-lg">✓</span>
          <span v-else-if="hasAnswered && selectedAnswer === idx && idx !== currentQuestion.correct" class="text-rose-600 font-bold text-lg">✕</span>
        </button>
      </div>

      <!-- Explanation Box upon answering -->
      <div v-if="hasAnswered" class="mt-6 p-4 rounded-sm animate-fade"
        :style="{
          background: selectedAnswer === currentQuestion.correct ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
          border: '1px solid ' + (selectedAnswer === currentQuestion.correct ? '#10b981' : '#ef4444')
        }">
        <p class="text-xs font-bold uppercase tracking-wider mb-1"
          :style="{ color: selectedAnswer === currentQuestion.correct ? '#059669' : '#dc2626' }">
          {{ selectedAnswer === currentQuestion.correct ? t('ត្រឹមត្រូវ! សាធុ!', 'Correct! Sādhu!') : t('មិនទាន់ត្រឹមត្រូវទេ', 'Not quite right') }}
        </p>
        <p class="text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
          {{ t(currentQuestion.explainKm, currentQuestion.explainEn) }}
        </p>
      </div>

      <!-- Next Button -->
      <div v-if="hasAnswered" class="mt-6 text-right">
        <button class="install-btn px-6 py-2 font-bold text-sm" @click="nextQuestion">
          {{ currentIndex < filteredQuestions.length - 1 ? t('សំណួរបន្ទាប់', 'Next Question') + ' →' : t('មើលលទ្ធផល', 'See Results') + ' ★' }}
        </button>
      </div>
    </div>

    <!-- Final Results Summary Card -->
    <div v-if="isFinished" class="card-paper p-8 mt-8 text-center max-w-lg mx-auto animate-fade">
      <span class="text-4xl">🏆</span>
      <h3 class="font-display text-2xl mt-3" :style="{ color: 'var(--ink)' }">
        {{ t('លទ្ធផលនៃការធ្វើតេស្ត', 'Quiz Results') }}
      </h3>

      <div class="my-6">
        <p class="font-display text-5xl font-light" :style="{ color: 'var(--accent-bright)' }">
          {{ khNum(score) }} / {{ khNum(filteredQuestions.length) }}
        </p>
        <p class="text-sm mt-2 font-bold" :style="{ color: 'var(--ink)' }">
          {{ getResultFeedback() }}
        </p>
      </div>

      <div class="flex items-center justify-center gap-3">
        <button class="install-btn px-6 py-2.5 font-bold text-sm" @click="restartQuiz">
          {{ t('សាកល្បងម្តងទៀត', 'Play Again') }} &#8634;
        </button>
        <button class="font-btn px-4 py-2.5 text-sm" @click="isFinished = false; quizStarted = false">
          {{ t('ប្តូរផ្នែក', 'Change Category') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const selectedCat = ref('all')
const quizStarted = ref(false)
const currentIndex = ref(0)
const selectedAnswer = ref(null)
const hasAnswered = ref(false)
const score = ref(0)
const isFinished = ref(false)

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  return String(n).split('').map(d => khDigits[Number(d)] ?? d).join('')
}

const categories = [
  { id: 'all', icon: '☸', km: 'សំណួរចម្រុះទាំងអស់', en: 'All Categories', count: 16 },
  { id: 'core', icon: '📜', km: 'ធម៌មូលដ្ឋាន', en: 'Core Teachings', count: 5 },
  { id: 'abhidhamma', icon: '🧠', km: 'អភិធម្ម & ចិត្ត', en: 'Abhidhamma & Mind', count: 4 },
  { id: 'ethics', icon: '🌸', km: 'សីល & បារមី', en: 'Ethics & Precepts', count: 4 },
  { id: 'history', icon: '🪷', km: 'ពុទ្ធប្រវត្តិ & បុណ្យ', en: 'Life & Festivals', count: 3 },
]

const questionBank = [
  {
    cat: 'core',
    qKm: 'តើអរិយសច្ច (សេចក្តីពិតដ៏ប្រសើរ) មានប៉ុន្មានយ៉ាង?',
    qEn: 'How many Noble Truths are there in Buddhism?',
    paali: 'Cattāri Ariyasaccāni',
    choices: [
      { km: '២ យ៉ាង (សុខ និង ទុក្ខ)', en: '2 truths (Happiness and Suffering)' },
      { km: '៣ យ៉ាង (អនិច្ចំ ទុក្ខំ អនត្តា)', en: '3 truths (Impermanence, Suffering, Non-self)' },
      { km: '៤ យ៉ាង (ទុក្ខ, សមុទ័យ, និរោធ, មគ្គ)', en: '4 truths (Dukkha, Samudaya, Nirodha, Magga)' },
      { km: '៨ យ៉ាង (អដ្ឋង្គិកមគ្គ ៨)', en: '8 truths (Noble Eightfold Path)' },
    ],
    correct: 2,
    explainKm: 'អរិយសច្ច មាន ៤ គឺ៖ ១) ទុក្ខសច្ច (សេចក្តីលំបាក), ២) សមុទយសច្ច (តណ្ហាជាហេតុនៃទុក្ខ), ៣) និរោធសច្ច (ព្រះនិព្វានជាទីរលត់ទុក្ខ), ៤) មគ្គសច្ច (អរិយអដ្ឋង្គិកមគ្គជាផ្លូវរំលត់ទុក្ខ)។',
    explainEn: 'The Four Noble Truths are: 1) Suffering (Dukkha), 2) Cause of suffering (Craving/Samudaya), 3) Cessation of suffering (Nibbāna/Nirodha), 4) The Path leading to cessation (Magga).',
  },
  {
    cat: 'core',
    qKm: 'តើអ្វីជាឫសគល់ ឬហេតុចម្បងដែលនាំឱ្យកើតទុក្ខ តាមសមុទយសច្ច?',
    qEn: 'According to the Second Noble Truth, what is the primary origin of suffering?',
    paali: 'Dukkhasamudaya',
    choices: [
      { km: 'ភាពក្រីក្រ', en: 'Poverty' },
      { km: 'តណ្ហា (សេចក្តីប្រាថ្នា ស្រេកឃ្លាន ជាប់ជំពាក់)', en: 'Taṇhā (Craving and Clinging)' },
      { km: 'ការមិនបានរៀនសូត្រ', en: 'Lack of education' },
      { km: 'អាកាសធាតុក្តៅត្រជាក់', en: 'Harsh climate' },
    ],
    correct: 1,
    explainKm: 'ព្រះពុទ្ធទ្រង់ត្រាស់ថា តណ្ហា ៣ ប្រការ (កាមតណ្ហា, ភវតណ្ហា, វិភវតណ្ហា) គឺជាអ្នកនាំឱ្យកើតភពថ្មី និងជាហេតុចម្បងនៃទុក្ខទាំងពួង។',
    explainEn: 'The Buddha taught that craving (taṇhā) — sensual craving, craving for existence, and craving for non-existence — is the primary origin of suffering.',
  },
  {
    cat: 'core',
    qKm: 'ត្រៃលក្ខណ៍ (លក្ខណៈ ៣ យ៉ាងនៃសង្ខារធម៌) រួមមានអ្វីខ្លះ?',
    qEn: 'What are the Three Characteristics of conditioned phenomena (Tilakkhaṇa)?',
    paali: 'Tilakkhaṇa',
    choices: [
      { km: 'សទ្ធា, វិរិយៈ, បញ្ញា', en: 'Faith, Energy, Wisdom' },
      { km: 'កាយ, វាចា, ចិត្ត', en: 'Body, Speech, Mind' },
      { km: 'អនិច្ចំ, ទុក្ខំ, អនត្តា', en: 'Anicca (Impermanence), Dukkha (Unsatisfactoriness), Anattā (Non-self)' },
      { km: 'លោភៈ, ទោសៈ, មោហៈ', en: 'Greed, Hatred, Delusion' },
    ],
    correct: 2,
    explainKm: 'ត្រៃលក្ខណ៍ គឺ អនិច្ចំ (មិនទៀង តែងប្រែប្រួល), ទុក្ខំ (ទ្រាំបានដោយកម្រ មិនពេញលេញ), អនត្តា (មិនមែនជារបស់យើង មិនអាចបញ្ជាបាន)។',
    explainEn: 'The Three Characteristics are: Anicca (impermanence), Dukkha (unsatisfactoriness/suffering), and Anattā (non-self/insubstantiality).',
  },
  {
    cat: 'core',
    qKm: 'តើខន្ធ ៥ (បញ្ចក្ខន្ធ) រួមមានអ្វីខ្លះ?',
    qEn: 'What are the Five Aggregates (Pañcakkhandha) that constitute a being?',
    paali: 'Pañcakkhandhā',
    choices: [
      { km: 'រូប, វេទនា, សញ្ញា, សង្ខារ, វិញ្ញាណ', en: 'Rūpa (Form), Vedanā (Feeling), Saññā (Perception), Saṅkhāra (Formations), Viññāṇa (Consciousness)' },
      { km: 'ដី, ទឹក, ភ្លើង, ខ្យល់, អាកាស', en: 'Earth, Water, Fire, Wind, Space' },
      { km: 'ភ្នែក, ច្រមុះ, អណ្តាត, កាយ, ចិត្ត', en: 'Eye, Nose, Tongue, Body, Mind' },
      { km: 'ទាន, សីល, ភាវនា, បារមី, ឈាន', en: 'Dāna, Sīla, Bhāvanā, Pāramī, Jhāna' },
    ],
    correct: 0,
    explainKm: 'មនុស្សនិងសត្វលោក បង្កើតឡើងដោយខន្ធ ៥ គឺ រូប (រូបកាយ) និងនាមធម៌ ៤ យ៉ាង (វេទនា, សញ្ញា, សង្ខារ, វិញ្ញាណ)។',
    explainEn: 'Every living being is an ever-changing composite of five aggregates: physical form (rūpa) and four mental aggregates: feeling, perception, mental formations, and consciousness.',
  },
  {
    cat: 'core',
    qKm: 'តើអរិយអដ្ឋង្គិកមគ្គ (មាគ៌ាមានអង្គ ៨) បែងចែកជាត្រៃសិក្ខា ៣ យ៉ាងណា?',
    qEn: 'How is the Noble Eightfold Path categorized into the Three Trainings (Tisikkhā)?',
    paali: 'Sīla - Samādhi - Paññā',
    choices: [
      { km: 'កាយសិក្ខា, វាចាសិក្ខា, ចិត្តសិក្ខា', en: 'Physical, Verbal, Mental' },
      { km: 'សីល (៣ អង្គ), សមាធិ (៣ អង្គ), បញ្ញា (២ អង្គ)', en: 'Virtue (3 factors), Concentration (3 factors), Wisdom (2 factors)' },
      { km: 'អតីត, បច្ចុប្បន្ន, អនាគត', en: 'Past, Present, Future' },
      { km: 'ទាន, សីល, ភាវនា', en: 'Giving, Morality, Meditation' },
    ],
    correct: 1,
    explainKm: 'បញ្ញា (សម្មាទិដ្ឋិ, សម្មាសង្កប្ប), សីល (សម្មាវាចា, សម្មាកម្មន្ត, សម្មាអាជីវ), សមាធិ (សម្មាវាយាម, សម្មាសតិ, សម្មាសមាធិ)។',
    explainEn: 'Wisdom includes Right View and Resolve; Virtue includes Right Speech, Action, and Livelihood; Concentration includes Right Effort, Mindfulness, and Concentration.',
  },
  {
    cat: 'abhidhamma',
    qKm: 'តាមព្រះអភិធម្ម តើបរមត្ថធម៌ (សច្ចធម៌ពិតដល់ទីបំផុត) មានប៉ុន្មានយ៉ាង?',
    qEn: 'In Abhidhamma, how many Paramattha Dhammas (Ultimate Realities) are there?',
    paali: 'Cattāri Paramatthadhammā',
    choices: [
      { km: '២ យ៉ាង (រូប និង នាម)', en: '2 (Form and Mind)' },
      { km: '៣ យ៉ាង (ព្រះត្រៃបិដក)', en: '3 (The Tipitaka)' },
      { km: '៤ យ៉ាង (ចិត្ត, ចេតសិក, រូប, និព្វាន)', en: '4 (Citta, Cetasika, Rūpa, Nibbāna)' },
      { km: '៥ យ៉ាង (បញ្ចក្ខន្ធ)', en: '5 (The Five Aggregates)' },
    ],
    correct: 2,
    explainKm: 'បរមត្ថធម៌ មាន ៤ គឺ ចិត្ត (ធម្មជាតិដឹងអារម្មណ៍ ៨៩/១២១), ចេតសិក (ធម្មជាតិកើតផ្សំជាមួយចិត្ត ៥២), រូប (ធម្មជាតិប្រែប្រួលបែកធ្លាយ ២៨), និង និព្វាន (ធម្មជាតិផុតចាកកិលេសនិងទុក្ខ)។',
    explainEn: 'The four Paramattha Dhammas are Consciousness (Citta), Mental Factors (Cetasika), Matter (Rūpa), and Nibbāna (the Unconditioned).',
  },
  {
    cat: 'abhidhamma',
    qKm: 'តើចេតសិក (ធម្មជាតិដែលកើតផ្សំជាមួយចិត្ត) មានចំនួនសរុបប៉ុន្មាន?',
    qEn: 'How many Cetasikas (Mental Factors) are classified in the Abhidhamma?',
    paali: 'Dvepaññāsa Cetasikā',
    choices: [
      { km: '២៨ ចេតសិក', en: '28 Cetasikas' },
      { km: '៥២ ចេតសិក', en: '52 Cetasikas' },
      { km: '៨៩ ចេតសិក', en: '89 Cetasikas' },
      { km: '១២១ ចេតសិក', en: '121 Cetasikas' },
    ],
    correct: 1,
    explainKm: 'ចេតសិក មាន ៥២ គឺ អញ្ញសមានចេតសិក ១៣, អកុសលចេតសិក ១៤, និង សោភណចេតសិក ២៥។',
    explainEn: 'There are 52 Cetasikas: 13 ethically variable, 14 unwholesome, and 25 beautiful (sobhana) factors.',
  },
  {
    cat: 'abhidhamma',
    qKm: 'តើអកុសលមូល (ឫសគល់នៃអំពើបាប) មានប៉ុន្មានយ៉ាង?',
    qEn: 'What are the three Unwholesome Roots (Akusala-mūla)?',
    paali: 'Akusalamūla',
    choices: [
      { km: 'លោភៈ, ទោសៈ, មោហៈ', en: 'Lobha (Greed), Dosa (Aversion/Hatred), Moha (Delusion)' },
      { km: 'សេចក្តីខ្ជិល, ងងុយដេក, ច្រណែន', en: 'Sloth, Torpor, Envy' },
      { km: 'អលោភៈ, អទោសៈ, អមោហៈ', en: 'Non-greed, Non-hatred, Non-delusion' },
      { km: 'ភ័យ, ខ្លាច, ស្រឡាញ់', en: 'Fear, Terror, Attachment' },
    ],
    correct: 0,
    explainKm: 'ឫសគល់នៃបាបកម្មទាំងអស់ កើតចេញពី លោភៈ (សេចក្តីជាប់ជំពាក់ចង់បាន), ទោសៈ (កំហឹង គំនុំ ខឹងក្រោធ), និង មោហៈ (ការវង្វេង មិនដឹងការពិត)។',
    explainEn: 'All unwholesome actions originate from the three roots: Greed (Lobha), Hatred/Ill-will (Dosa), and Delusion/Ignorance (Moha).',
  },
  {
    cat: 'abhidhamma',
    qKm: 'តើរូបបរមត្ថ (រូបរូប និងអរូបរូប) ក្នុងព្រះអភិធម្ម មានចំនួនប៉ុន្មាន?',
    qEn: 'How many types of Rūpa (Physical Phenomena) are classified in the Abhidhamma?',
    paali: 'Aṭṭhavīsati Rūpāni',
    choices: [
      { km: '៤ រូប (មហាភូតរូប ៤)', en: '4 Rūpas (The Great Elements)' },
      { km: '១៤ រូប', en: '14 Rūpas' },
      { km: '២៨ រូប (មហាភូតរូប ៤ + ឧបាទាយរូប ២៤)', en: '28 Rūpas (4 Great Elements + 24 Derived Rūpas)' },
      { km: '៥២ រូប', en: '52 Rūpas' },
    ],
    correct: 2,
    explainKm: 'រូប មាន ២៨ គឺ មហាភូតរូប ៤ (ដី, ទឹក, ភ្លើង, ខ្យល់) និង ឧបាទាយរូប ២៤ (ដូចជា ចក្ខុបសាទ, សោតបសាទ, ភាវរូប, ជីវិតរូប, អាហាររូប ជាដើម)។',
    explainEn: 'There are 28 Rūpas: 4 Great Essentials (earth, water, fire, wind) and 24 Derived physical properties.',
  },
  {
    cat: 'ethics',
    qKm: 'តើសិក្ខាបទទី ៣ ក្នុងសីល ៥ (បញ្ចសីល) និង សីល ៨ (ឧបោសថសីល) ខុសគ្នាយ៉ាងដូចម្តេច?',
    qEn: 'How does the 3rd precept differ between the 5 Precepts and the 8 Uposatha Precepts?',
    paali: 'Kāmesu micchācārā vs Abrahmacariyā',
    choices: [
      { km: 'ដូចគ្នាទាំងស្រុង គ្មានអ្វីខុសទេ', en: 'Identical, no difference' },
      { km: 'សីល ៥ វៀរកាមេសុមិច្ឆាចារ (មិនខុសកាម); សីល ៨ វៀរអព្រហ្មចរិយា (តមការរួមភេទទាំងស្រុង)', en: '5 precepts: abstain from adultery/misconduct; 8 precepts: full celibacy (Abrahmacariyā)' },
      { km: 'សីល ៥ មិនឱ្យបរិភោគបាយល្ងាច', en: '5 precepts prohibits evening meals' },
      { km: 'សីល ៨ មិនឱ្យនិយាយស្តី', en: '8 precepts prohibits talking' },
    ],
    correct: 1,
    explainKm: 'ក្នុងសីល ៥ សិក្ខាបទទី ៣ គឺ កាមេសុមិច្ឆាចារា (វៀរចាកការក្បត់ចិត្ត ឬរួមរ័កជាមួយអ្នកដែលមិនមែនជាគូស្រករ); ចំណែកសីល ៨ គឺ អព្រហ្មចរិយា (វៀរចាកការសេពមេថុនទាំងស្រុង ដើម្បីចិត្តស្ងប់បរិសុទ្ធ)។',
    explainEn: 'The 3rd lay precept prohibits sexual misconduct/adultery. On Sīl days, the 8 precepts require complete celibacy (Abrahmacariyā) for spiritual purification.',
  },
  {
    cat: 'ethics',
    qKm: 'តើព្រហ្មវិហារធម៌ ៤ (វិហារធម៌ដ៏ប្រសើរ) រួមមានអ្វីខ្លះ?',
    qEn: 'What are the Four Sublime States (Brahmavihāras)?',
    paali: 'Brahmavihāra',
    choices: [
      { km: 'ទាន, សីល, ភាវនា, បញ្ញា', en: 'Dāna, Sīla, Bhāvanā, Paññā' },
      { km: 'មេត្តា, ករុណា, មុទិតា, ឧបេក្ខា', en: 'Mettā (Kindness), Karuṇā (Compassion), Muditā (Sympathetic Joy), Upekkhā (Equanimity)' },
      { km: 'ខន្តី, សច្ចៈ, អធិដ្ឋាន, វិរិយៈ', en: 'Patience, Truthfulness, Resolve, Energy' },
      { km: 'សតិ, សមាធិ, បញ្ញា, វិមុត្តិ', en: 'Mindfulness, Stillness, Insight, Liberation' },
    ],
    correct: 1,
    explainKm: 'ព្រហ្មវិហារ ៤ គឺ មេត្តា (ប្រាថ្នាឱ្យអ្នកដទៃបានសុខ), ករុណា (អាណិតចង់ស្រោចស្រង់អ្នករងទុក្ខ), មុទិតា (ត្រេកអរចំពោះជោគជ័យអ្នកដទៃ), ឧបេក្ខា (តម្កល់ចិត្តស្មើ យល់ច្បាស់ពីកម្មផល)។',
    explainEn: 'The four Brahmavihāras are Mettā (loving-kindness), Karuṇā (compassion), Muditā (joy in others\' success), and Upekkhā (equanimity).',
  },
  {
    cat: 'ethics',
    qKm: 'តើបារមី (គុណធម៌ដ៏វិសេសដែលព្រះពោធិសត្វបំពេញ) មានចំនួនប៉ុន្មាន?',
    qEn: 'How many Pāramīs (Perfections) are fulfilled by a Bodhisatta to attain Buddhahood?',
    paali: 'Dasa Pāramiyo',
    choices: [
      { km: '៥ បារមី', en: '5 Perfections' },
      { km: '៨ បារមី', en: '8 Perfections' },
      { km: '១០ បារមី (ទាន, សីល, នេក្ខម្ម, បញ្ញា, វិរិយៈ, ខន្តី, សច្ចៈ, អធិដ្ឋាន, មេត្តា, ឧបេក្ខា)', en: '10 Perfections (Dāna, Sīla, Nekkhamma, Paññā, Viriya, Khantī, Sacca, Adhiṭṭhāna, Mettā, Upekkhā)' },
      { km: '៣៨ បារមី', en: '38 Perfections' },
    ],
    correct: 2,
    explainKm: 'បារមី ១០ គឺ ទាន, សីល, នេក្ខម្ម, បញ្ញា, វិរិយៈ, ខន្តី, សច្ចៈ, អធិដ្ឋាន, មេត្តា, ឧបេក្ខា។ បើគុណជា ៣ កម្រិត (បារមី, ឧបបារមី, បរមត្ថបារមី) ស្មើនឹង ៣០ បារមី។',
    explainEn: 'The Ten Perfections are: Giving, Virtue, Renunciation, Wisdom, Energy, Patience, Truthfulness, Determination, Loving-kindness, and Equanimity.',
  },
  {
    cat: 'ethics',
    qKm: 'តើពាក្យថា «ទិដ្ឋធម្មិកត្ថធម៌ ៤» (ធម៌នាំឱ្យមានទ្រព្យសម្បត្តិ និងចម្រើនក្នុងបច្ចុប្បន្ន) សំដៅលើអ្វីខ្លះ (ឧ អា ក ស)?',
    qEn: 'What are the four principles for present prosperity (Diṭṭhadhammikattha - U Ā Ka Sa)?',
    paali: 'Uṭṭhāna - Ārakkha - Kalyāṇa - Sama',
    choices: [
      { km: 'ឧស្សាហ៍, អារក្ខា (ថែរក្សា), កល្យាណមិត្ត (មិត្តល្អ), សមជីវិតា (រស់នៅសមរម្យ)', en: 'Diligence (Uṭṭhāna), Protection (Ārakkha), Good friends (Kalyāṇamitta), Balanced living (Samajīvitā)' },
      { km: 'ឧបាសក, ឧបាសិកា, កុលបុត្ត, សមណេរ', en: 'Devotees and monks' },
      { km: 'ឧត្តម, អាហារ, កុសល, សេចក្តីសុខ', en: 'Nobility, food, merit, joy' },
      { km: 'ឧបេក្ខា, អានាបាន, កុសល, សមាធិ', en: 'Equanimity, breath, merit, absorption' },
    ],
    correct: 0,
    explainKm: 'ព្រះពុទ្ធទ្រង់បង្រៀនអ្នកផ្ទះឱ្យចម្រើនទ្រព្យសម្បត្តិដោយ៖ ១) ឧដ្ឋានសម្បទា (ឧស្សាហ៍), ២) អារក្ខសម្បទា (ចេះរក្សាទ្រព្យ), ៣) កល្យាណមិត្តតា (សេពគប់មិត្តល្អ), ៤) សមជីវិតា (ចាយវាយថ្លឹងថ្លែង)។',
    explainEn: 'The Buddha taught four principles for worldly prosperity: energetic diligence in work, safeguarding wealth, keeping good friends, and balanced living within one\'s means.',
  },
  {
    cat: 'history',
    qKm: 'តើព្រះពុទ្ធទ្រង់សម្តែង «ធម្មចក្កប្បវត្តនសូត្រ» (បឋមទេសនា / ធម៌ដំបូង) នៅឯណា និងចំពោះអ្នកណា?',
    qEn: 'Where and to whom did the Buddha deliver his First Discourse (Dhammacakkappavattana Sutta)?',
    paali: 'Isipatana Migadāya',
    choices: [
      { km: 'នៅក្រោមដើមពោធិ៍ ដល់ព្រះឥន្ទ្រ', en: 'Under the Bodhi tree to Sakka' },
      { km: 'នៅព្រៃឥសិបតនមិគទាយវ័ន ក្រុងពារាណសី ដល់បញ្ចវគ្គិយ', en: 'At the Deer Park in Isipatana near Varanasi to the Five Ascetics' },
      { km: 'នៅវត្តជេតពន ដល់អនាថបិណ្ឌិកសេដ្ឋី', en: 'At Jeta Grove to Anāthapiṇḍika' },
      { km: 'នៅភ្នំគិជ្ឈកូដ ដល់ព្រះសារីបុត្ត', en: 'At Vulture Peak to Sāriputta' },
    ],
    correct: 1,
    explainKm: 'ព្រះពុទ្ធទ្រង់សម្តែងបឋមទេសនា ធម្មចក្កប្បវត្តនសូត្រ នៅព្រៃឥសិបតនមិគទាយវ័ន ក្រុងពារាណសី ដល់បញ្ចវគ្គិយទាំង ៥ អង្គ ក្នុងថ្ងៃពេញបូណ៌មី ខែអាសាឍ (អាសាឡ្ហបូជា)។ ព្រះអញ្ញាកោណ្ឌញ្ញៈ បានសម្រេចសោតាបត្តិផលមុនគេ។',
    explainEn: 'The Buddha proclaimed the First Sermon at the Deer Park in Sārnāth (near Varanasi) to the group of five ascetics on the full moon of Āsāḷha, setting the Wheel of Dhamma in motion.',
  },
  {
    cat: 'history',
    qKm: 'តើពិធីបុណ្យ «វិសាខបូជា» រំឭកដល់ព្រឹត្តិការណ៍ធំៗ ៣ យ៉ាងណាខ្លះ?',
    qEn: 'What three supreme events in the Buddha’s life are commemorated on Vesākha Pūjā?',
    paali: 'Vesākha Pūjā',
    choices: [
      { km: 'ចេញសាងផ្នួស, ផ្ចាញ់មារ, សម្តែងធម៌', en: 'Renunciation, Victory over Māra, Preaching' },
      { km: 'ប្រសូត, ត្រាស់ដឹង, បរិនិព្វាន', en: 'Birth, Enlightenment, and Final Passing (Parinibbāna)' },
      { km: 'ចូលវស្សា, ភ្ជុំបិណ្ឌ, កឋិន', en: 'Vassa, Pchum Ben, Kaṭhina' },
      { km: 'ត្រាស់ដឹង, សម្តែងអភិធម្ម, ដាក់អាយុសង្ខារ', en: 'Awakening, Abhidhamma, Relinquishing life' },
    ],
    correct: 1,
    explainKm: 'វិសាខបូជា ប្រារព្ធឡើងនៅថ្ងៃពេញបូណ៌មី ខែពិសាខ រំឭកដល់ព្រឹត្តិការណ៍អស្ចារ្យ ៣ ដែលកើតឡើងនៅថ្ងៃតែមួយ គឺ ថ្ងៃព្រះពុទ្ធទ្រង់ប្រសូត, ត្រាស់ដឹង, និងយាងចូលបរិនិព្វាន។',
    explainEn: 'Vesak falls on the full moon of May, commemorating the three holiest milestones: the Bodhisatta’s birth, his supreme awakening, and his final Parinibbāna.',
  },
  {
    cat: 'history',
    qKm: 'តើព្រះសម្មាសម្ពុទ្ធទ្រង់បានត្រាស់សម្តែង «ឱវាទបាតិមោក្ខ» នៅថ្ងៃបុណ្យណាមួយ?',
    qEn: 'On which holy day did the Buddha proclaim the fundamental Ovāda Pātimokkha summary?',
    paali: 'Māgha Pūjā',
    choices: [
      { km: 'មាឃបូជា (ពេញបូណ៌មី ខែមាឃ)', en: 'Māgha Pūjā (Full moon of Māgha)' },
      { km: 'វិសាខបូជា', en: 'Vesākha Pūjā' },
      { km: 'ភ្ជុំបិណ្ឌ', en: 'Pchum Ben' },
      { km: 'ចូលឆ្នាំខ្មែរ', en: 'Khmer New Year' },
    ],
    correct: 0,
    explainKm: 'ក្នុងថ្ងៃពេញបូណ៌មី ខែមាឃ (មាឃបូជា) ព្រះសង្ឃអរហន្ត ១,២៥០ អង្គ បាននិមន្តមកជួបជុំគ្នាដោយឥតមានការកោះហៅ ហើយព្រះពុទ្ធទ្រង់ប្រកាសឱវាទបាតិមោក្ខថា៖ «សព្វបាបស្ស អករណំ (ការមិនធ្វើបាបទាំងពួង), កុសលស្សូបសម្បទា (ការបំពេញកុសល), សចិត្តបរិយោទបនំ (ការសម្អាតចិត្តរបស់ខ្លួន)»។',
    explainEn: 'On Māgha Pūjā, 1,250 enlightened monks gathered spontaneously without prior summons, and the Buddha delivered the heart of his dispensation: "Avoid all evil, cultivate the good, purify your mind."',
  },
]

const filteredQuestions = computed(() => {
  if (selectedCat.value === 'all') return questionBank
  return questionBank.filter(q => q.cat === selectedCat.value)
})

const currentQuestion = computed(() => {
  return filteredQuestions.value[currentIndex.value] || filteredQuestions.value[0]
})

function startQuiz() {
  quizStarted.value = true
  currentIndex.value = 0
  score.value = 0
  selectedAnswer.value = null
  hasAnswered.value = false
  isFinished.value = false
}

function selectAnswer(idx) {
  if (hasAnswered.value) return
  selectedAnswer.value = idx
  hasAnswered.value = true
  if (idx === currentQuestion.value.correct) {
    score.value++
  }
}

function nextQuestion() {
  if (currentIndex.value < filteredQuestions.value.length - 1) {
    currentIndex.value++
    selectedAnswer.value = null
    hasAnswered.value = false
  } else {
    isFinished.value = true
  }
}

function restartQuiz() {
  startQuiz()
}

function getChoiceClass(idx) {
  if (!hasAnswered.value) return 'card-paper-hover'
  return ''
}

function getChoiceStyle(idx) {
  if (!hasAnswered.value) {
    return {
      background: 'var(--bg-card-2)',
      border: '1px solid var(--border)',
    }
  }
  if (idx === currentQuestion.value.correct) {
    return {
      background: 'rgba(16, 185, 129, 0.12)',
      border: '2px solid #10b981',
      fontWeight: 'bold',
    }
  }
  if (selectedAnswer.value === idx && idx !== currentQuestion.value.correct) {
    return {
      background: 'rgba(239, 68, 68, 0.12)',
      border: '2px solid #ef4444',
    }
  }
  return {
    background: 'var(--bg-card-2)',
    border: '1px solid var(--border)',
    opacity: 0.6,
  }
}

function getResultFeedback() {
  const total = filteredQuestions.value.length
  const pct = (score.value / total) * 100
  if (pct === 100) return t('អស្ចារ្យណាស់! អ្នកឆ្លើយត្រូវទាំងអស់ ១០០% បរិបូណ៌ដោយបញ្ញា!', 'Perfection! 100% correct, full of Dhamma wisdom!')
  if (pct >= 80) return t('ពូកែណាស់! អ្នកមានការយល់ដឹងជ្រៅជ្រះក្នុងព្រះធម៌។', 'Excellent! You have a profound understanding of the Dhamma.')
  if (pct >= 50) return t('ល្អណាស់! ចំណេះដឹងធម៌របស់អ្នករឹងមាំ បន្តសិក្សាបន្ថែមទៀត។', 'Good effort! Keep studying to deepen your insights.')
  return t('ខិតខំអាននិងរៀនសូត្របន្ថែមទៀត ព្រះធម៌នឹងនាំមកនូវសេចក្តីស្ងប់សុខ!', 'Keep practicing and reading the teachings — every step yields peace!')
}
</script>
