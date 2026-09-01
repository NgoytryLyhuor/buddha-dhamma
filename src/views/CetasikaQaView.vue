<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សំណួរ–ចម្លើយ ចេតសិកបរមត្ថ — ចិត្ត ចេតសិក អារម្មណ៍ វត្ថុ', 'CETASIKA PARAMATTHA Q&A — MIND, MENTAL FACTORS, OBJECTS, BASES') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('ចេតសិក៥២', 'The 52 Cetasikas') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ចេតសិក គឺធម៌ដែលកើតអាស្រ័យនឹងចិត្ត ប្រកបជាមួយចិត្ត មាន ៥២ ចែកជាបីក្រុមធំ គឺ អញ្ញសមានាចេតសិក ១៣ អកុសលចេតសិក ១៤ និងសោភណចេតសិក ២៥។ ទំព័រនេះប្រមូលសំណួរ-ចម្លើយ តាមគម្រោងរៀនចេតសិកបរមត្ថ ដើម្បីជួយប្រឡង និងរំឭកឡើងវិញ។', 'A cetasika is a mental factor that arises dependent on consciousness and accompanies it; there are 52, divided into three great groups: the 13 aññasamānā (universals and particulars), the 14 unwholesome, and the 25 beautiful. This page gathers the question-and-answers of the Cetasika Paramattha course, for review and examination.') }}
    </p>

    <div class="qa-search card-paper mt-6 p-4 md:p-5">
      <label class="qa-search-label" :style="{ color: 'var(--accent)' }">{{ t('ស្វែងរកសំណួរ', 'SEARCH QUESTIONS') }}</label>
      <div class="qa-search-row">
        <span class="qa-search-ico" :style="{ color: 'var(--ink-faint)' }">&#128269;</span>
        <input
          v-model="search"
          type="text"
          class="qa-search-input"
          :placeholder="t('វាយពាក្យជាភាសាខ្មែរ ឬ អង់គ្លេស…', 'Type a word in Khmer or English…')"
          :style="{ background: 'var(--bg-input)', color: 'var(--ink)', borderColor: 'var(--border-strong)' }"
        />
        <button
          v-if="searching"
          type="button"
          class="qa-search-clear"
          :title="t('ជម្រះ', 'Clear')"
          :style="{ color: 'var(--ink-muted)', borderColor: 'var(--border)' }"
          @click="search = ''"
        >&#10005;</button>
      </div>
      <p v-if="searching" class="qa-search-count" :style="{ color: 'var(--ink-muted)' }">
        {{ t('បានរកឃើញ ' + khNum(totalMatches) + ' សំណួរ', totalMatches + (totalMatches === 1 ? ' match found' : ' matches found')) }}
      </p>
    </div>

    <p v-if="searching && totalMatches === 0" class="mt-6 p-5 text-center card-paper" :style="{ color: 'var(--ink-muted)' }">
      {{ t('រកមិនឃើញសំណួរណាដែលត្រូវនឹងពាក្យនេះទេ។ សូមសាកល្បងពាក្យផ្សេងទៀត។', 'No questions match this word. Please try a different word.') }}
    </p>

    <!-- ===== Section 1: ថ្នាក់ដំបូង ===== -->
    <h2 v-if="!searching || filteredIntro.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ចេតសិក ថ្នាក់ដំបូង', 'Cetasika — Foundation (Lesson 1)') }}
    </h2>
    <div v-if="!searching || filteredIntro.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredIntro" :key="item.num" class="card-paper p-6 md:p-8" :open="!searching && i === 0">
        <summary class="select-none">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <h3 class="font-display text-lg md:text-xl leading-snug min-w-0" :style="{ color: 'var(--ink)' }">
              <span class="sutra-num mr-2 align-middle" :style="{ color: 'var(--accent-bright)' }">{{ khNum(item.num) }}</span>
              {{ t(item.qa.qK, item.qa.qE) }}
            </h3>
            <span class="caret shrink-0 mt-1" :style="{ color: 'var(--accent-bright)' }">&#9660;</span>
          </div>
        </summary>
        <div class="mt-5">
          <div class="mt-2 p-3 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
            <p class="text-[10px] font-bold tracking-widest uppercase" :style="{ color: 'var(--accent)' }">{{ t('ចម្លើយ', 'THE ANSWER') }}</p>
            <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(item.qa.aK, item.qa.aE) }}</p>
          </div>
        </div>
      </details>
    </div>

    <!-- ===== Section 2: ចេតសិក៥២ ===== -->
    <h2 v-if="!searching || filteredFiftyTwo.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ចេតសិក ៥២', 'The 52 Cetasikas (Lesson 2)') }}
    </h2>
    <div v-if="!searching || filteredFiftyTwo.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredFiftyTwo" :key="item.num" class="card-paper p-6 md:p-8">
        <summary class="select-none">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <h3 class="font-display text-lg md:text-xl leading-snug min-w-0" :style="{ color: 'var(--ink)' }">
              <span class="sutra-num mr-2 align-middle" :style="{ color: 'var(--accent-bright)' }">{{ khNum(item.num) }}</span>
              {{ t(item.qa.qK, item.qa.qE) }}
            </h3>
            <span class="caret shrink-0 mt-1" :style="{ color: 'var(--accent-bright)' }">&#9660;</span>
          </div>
        </summary>
        <div class="mt-5">
          <div class="mt-2 p-3 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
            <p class="text-[10px] font-bold tracking-widest uppercase" :style="{ color: 'var(--accent)' }">{{ t('ចម្លើយ', 'THE ANSWER') }}</p>
            <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(item.qa.aK, item.qa.aE) }}</p>
          </div>
        </div>
      </details>
    </div>

    <!-- ===== Section 3: ផស្សចេតសិក ===== -->
    <h2 v-if="!searching || filteredPhassa.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ផស្សចេតសិក', 'Phassa (Contact)') }}
    </h2>
    <div v-if="!searching || filteredPhassa.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredPhassa" :key="item.num" class="card-paper p-6 md:p-8">
        <summary class="select-none">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <h3 class="font-display text-lg md:text-xl leading-snug min-w-0" :style="{ color: 'var(--ink)' }">
              <span class="sutra-num mr-2 align-middle" :style="{ color: 'var(--accent-bright)' }">{{ khNum(item.num) }}</span>
              {{ t(item.qa.qK, item.qa.qE) }}
            </h3>
            <span class="caret shrink-0 mt-1" :style="{ color: 'var(--accent-bright)' }">&#9660;</span>
          </div>
        </summary>
        <div class="mt-5">
          <div class="mt-2 p-3 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
            <p class="text-[10px] font-bold tracking-widest uppercase" :style="{ color: 'var(--accent)' }">{{ t('ចម្លើយ', 'THE ANSWER') }}</p>
            <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(item.qa.aK, item.qa.aE) }}</p>
          </div>
        </div>
      </details>
    </div>

    <!-- ===== Section 4: វេទនាចេតសិក ===== -->
    <h2 v-if="!searching || filteredVedana.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('វេទនាចេតសិក', 'Vedanā (Feeling)') }}
    </h2>
    <div v-if="!searching || filteredVedana.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredVedana" :key="item.num" class="card-paper p-6 md:p-8">
        <summary class="select-none">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <h3 class="font-display text-lg md:text-xl leading-snug min-w-0" :style="{ color: 'var(--ink)' }">
              <span class="sutra-num mr-2 align-middle" :style="{ color: 'var(--accent-bright)' }">{{ khNum(item.num) }}</span>
              {{ t(item.qa.qK, item.qa.qE) }}
            </h3>
            <span class="caret shrink-0 mt-1" :style="{ color: 'var(--accent-bright)' }">&#9660;</span>
          </div>
        </summary>
        <div class="mt-5">
          <div class="mt-2 p-3 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
            <p class="text-[10px] font-bold tracking-widest uppercase" :style="{ color: 'var(--accent)' }">{{ t('ចម្លើយ', 'THE ANSWER') }}</p>
            <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(item.qa.aK, item.qa.aE) }}</p>
          </div>
        </div>
      </details>
    </div>

    <!-- ===== Section 5: សញ្ញាចេតសិក ===== -->
    <h2 v-if="!searching || filteredSanna.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('សញ្ញាចេតសិក', 'Saññā (Perception)') }}
    </h2>
    <div v-if="!searching || filteredSanna.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredSanna" :key="item.num" class="card-paper p-6 md:p-8">
        <summary class="select-none">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <h3 class="font-display text-lg md:text-xl leading-snug min-w-0" :style="{ color: 'var(--ink)' }">
              <span class="sutra-num mr-2 align-middle" :style="{ color: 'var(--accent-bright)' }">{{ khNum(item.num) }}</span>
              {{ t(item.qa.qK, item.qa.qE) }}
            </h3>
            <span class="caret shrink-0 mt-1" :style="{ color: 'var(--accent-bright)' }">&#9660;</span>
          </div>
        </summary>
        <div class="mt-5">
          <div class="mt-2 p-3 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
            <p class="text-[10px] font-bold tracking-widest uppercase" :style="{ color: 'var(--accent)' }">{{ t('ចម្លើយ', 'THE ANSWER') }}</p>
            <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(item.qa.aK, item.qa.aE) }}</p>
          </div>
        </div>
      </details>
    </div>

    <!-- ===== Section 6: ចេតនាចេតសិក ===== -->
    <h2 v-if="!searching || filteredCetana.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ចេតនាចេតសិក', 'Cetanā (Volition)') }}
    </h2>
    <div v-if="!searching || filteredCetana.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredCetana" :key="item.num" class="card-paper p-6 md:p-8">
        <summary class="select-none">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <h3 class="font-display text-lg md:text-xl leading-snug min-w-0" :style="{ color: 'var(--ink)' }">
              <span class="sutra-num mr-2 align-middle" :style="{ color: 'var(--accent-bright)' }">{{ khNum(item.num) }}</span>
              {{ t(item.qa.qK, item.qa.qE) }}
            </h3>
            <span class="caret shrink-0 mt-1" :style="{ color: 'var(--accent-bright)' }">&#9660;</span>
          </div>
        </summary>
        <div class="mt-5">
          <div class="mt-2 p-3 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
            <p class="text-[10px] font-bold tracking-widest uppercase" :style="{ color: 'var(--accent)' }">{{ t('ចម្លើយ', 'THE ANSWER') }}</p>
            <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(item.qa.aK, item.qa.aE) }}</p>
          </div>
        </div>
      </details>
    </div>

    <!-- ===== Section 7: ឯកគ្គតាចេតសិក ===== -->
    <h2 v-if="!searching || filteredEkaggata.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ឯកគ្គតាចេតសិក', 'Ekaggatā (One-pointedness)') }}
    </h2>
    <div v-if="!searching || filteredEkaggata.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredEkaggata" :key="item.num" class="card-paper p-6 md:p-8">
        <summary class="select-none">
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <h3 class="font-display text-lg md:text-xl leading-snug min-w-0" :style="{ color: 'var(--ink)' }">
              <span class="sutra-num mr-2 align-middle" :style="{ color: 'var(--accent-bright)' }">{{ khNum(item.num) }}</span>
              {{ t(item.qa.qK, item.qa.qE) }}
            </h3>
            <span class="caret shrink-0 mt-1" :style="{ color: 'var(--accent-bright)' }">&#9660;</span>
          </div>
        </summary>
        <div class="mt-5">
          <div class="mt-2 p-3 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
            <p class="text-[10px] font-bold tracking-widest uppercase" :style="{ color: 'var(--accent)' }">{{ t('ចម្លើយ', 'THE ANSWER') }}</p>
            <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(item.qa.aK, item.qa.aE) }}</p>
          </div>
        </div>
      </details>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  return String(n).split('').map(d => khDigits[Number(d)]).join('')
}

const search = ref('')
function normText(s) {
  return String(s || '').toLowerCase()
}
function matchesQuery(qa) {
  const q = search.value.trim().toLowerCase()
  if (!q) return true
  return (
    normText(qa.qK).includes(q) ||
    normText(qa.qE).includes(q) ||
    normText(qa.aK).includes(q) ||
    normText(qa.aE).includes(q)
  )
}

const indexed = (arr, offset) => arr.map((qa, i) => ({ qa, num: offset + i + 1 })).filter(x => matchesQuery(x.qa))

const libLen = () => introQas.length + fiftyTwoQas.length + phassaQas.length + vedanaQas.length + sannaQas.length + cetanaQas.length

const filteredIntro = computed(() => indexed(introQas, 0))
const filteredFiftyTwo = computed(() => indexed(fiftyTwoQas, introQas.length))
const filteredPhassa = computed(() => indexed(phassaQas, introQas.length + fiftyTwoQas.length))
const filteredVedana = computed(() => indexed(vedanaQas, introQas.length + fiftyTwoQas.length + phassaQas.length))
const filteredSanna = computed(() => indexed(sannaQas, introQas.length + fiftyTwoQas.length + phassaQas.length + vedanaQas.length))
const filteredCetana = computed(() => indexed(cetanaQas, introQas.length + fiftyTwoQas.length + phassaQas.length + vedanaQas.length + sannaQas.length))
const filteredEkaggata = computed(() => indexed(ekaggataQas, libLen()))

const totalMatches = computed(() =>
  filteredIntro.value.length + filteredFiftyTwo.value.length + filteredPhassa.value.length +
  filteredVedana.value.length + filteredSanna.value.length + filteredCetana.value.length +
  filteredEkaggata.value.length
)
const searching = computed(() => search.value.trim().length > 0)

const introQas = [
  {
    qK: 'ដូចម្តេចហៅថាព្រះអភិធម្ម?',
    qE: 'What is called the Abhidhamma?',
    aK: 'ព្រះអភិធម្មគឺធម៌មានសេចក្តីល្អិតក្រៃលែង ដែលបរិយាយពីបរមត្ថធម៌ ៤។',
    aE: 'The Abhidhamma is the Dhamma of extremely subtle and profound meaning, which expounds the four paramattha dhammas (ultimate realities).',
  },
  {
    qK: 'ដូចម្តេចហៅថាបរមត្ថធម៌?',
    qE: 'What is called paramattha-dhamma?',
    aK: 'បរមត្ថធម៌គឺធម៌មានសេចក្តីប្រសើរ ខ្ពង់ខ្ពស់ មិនវិបរិត។',
    aE: 'Paramattha-dhamma is the Dhamma that is supreme, exalted, and not subject to distortion (undergoing no change).',
  },
  {
    qK: 'តើបរមត្ថធម៌មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many paramattha-dhammas are there? Which are they?',
    aK: 'បរមត្ថធម៌មាន ៤ គឺ ៖ ចិត្តបរមត្ថ បានដល់ចិត្ត ៨៩ ដួងដោយសង្ខេប ឬ ១២១ ដួងដោយពិស្តារ ។ ចេតសិកបរមត្ថ បានដល់ចេតសិក ៥២ ។ រូបបរមត្ថ បានដល់រូប ២៨ ។ និព្វានបរមត្ថ បានដល់ព្រះនិព្វាន។',
    aE: 'There are four paramattha-dhammas: citta (consciousness) — 89 kinds in brief or 121 in detail; cetasika (mental factors) — 52; rūpa (matter) — 28; and nibbāna — Nibbāna.',
  },
  {
    qK: 'តើក្នុងខ្លួនយើងម្នាក់ៗ មានបរមត្ថធម៌ប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many paramattha-dhammas are found in each of our bodies? Which are they?',
    aK: 'ក្នុងខ្លួនយើងម្នាក់ៗ មានបរមត្ថធម៌ ៣ គឺ ចិត្តបរមត្ថ ចេតសិកបរមត្ថ និងរូបបរមត្ថ។',
    aE: 'In each of our bodies there are three paramattha-dhammas: citta, cetasika, and rūpa.',
  },
  {
    qK: 'តើក្នុងខ្លួនយើងម្នាក់ៗ មាននិព្វានដែរឬទេ? ហេតុអ្វី?',
    qE: 'Is there Nibbāna in each of our bodies? Why?',
    aK: 'ក្នុងខ្លួនយើងម្នាក់ៗ មិនមាននិព្វានទេ ព្រោះ ៖ ក្នុងខ្លួនយើងមានតែធម៌កើតរលត់ គឺសង្ខារធម៌ ចំណែកនិព្វានជាធម៌មិនកើតមិនរលត់ មិនមានបច្ច័យប្រជុំតាក់តែង និព្វានគ្រាន់តែជាអារម្មណ៍របស់លោកុត្តរចិត្តប៉ុណ្ណោះ ។ ក្នុងខ្លួនយើងម្នាក់ៗ មានខន្ធ ៥ ហើយនិព្វានជាខន្ធវិមុត្ត គឺមិនមានក្នុងខន្ធ ៥ ទេ។',
    aE: 'There is no Nibbāna in each of our bodies, because: within the body there is only the arising-and-perishing conditioned dhammas (saṅkhāra dhamma), whereas Nibbāna is an unconditioned dhamma, not born and not perishing, not fashioned by conditions — it is only the object of the supramundane consciousness. In each body there are the five aggregates, and Nibbāna is "khandha-vimutta" — free from (not included in) the five aggregates.',
  },
  {
    qK: 'ដូចម្តេចហៅថាចេតសិក?',
    qE: 'What is called a cetasika?',
    aK: 'ចេតសិកគឺជាធម៌ដែលកើត ឬអាស្រ័យនឹងចិត្ត។',
    aE: 'A cetasika is a dhamma that arises dependent on (in association with) consciousness.',
  },
  {
    qK: 'តើចេតសិកមានអាការសម្គាល់ប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'How many characteristic marks does a cetasika have? Which are they?',
    aK: 'ចេតសិកមានអាការសម្គាល់ ៤ យ៉ាង គឺ ៖ កើតព្រមជាមួយចិត្ត ។ រលត់ព្រមជាមួយចិត្ត ។ ដឹងអារម្មណ៍តែមួយ ដូចចិត្ត ។ អាស្រ័យវត្ថុតែមួយ ដូចចិត្ត។',
    aE: 'A cetasika has four characteristic marks: it arises together with consciousness; it ceases together with consciousness; it takes the same single object as consciousness; and it shares the same physical base (vatthu) as consciousness.',
  },
  {
    qK: 'តើចេតសិកមានលក្ខណៈយ៉ាងណា?',
    qE: 'What is the characteristic (lakkhaṇa) of a cetasika?',
    aK: 'ចេតសិកមានការអាស្រ័យនឹងចិត្ត ជាលក្ខណៈ។',
    aE: 'The cetasika has the characteristic of depending on (arising with) consciousness.',
  },
  {
    qK: 'តើចេតសិកមានកិច្ចយ៉ាងណា?',
    qE: 'What is the function (rasa) of a cetasika?',
    aK: 'ចេតសិកមានការកើតរួមនឹងចិត្ត ជាកិច្ច។',
    aE: 'The cetasika has the function of arising conjointly (together) with consciousness.',
  },
  {
    qK: 'តើចេតសិកមានអាការប្រាកដយ៉ាងណា?',
    qE: 'What is the manifestation (paccupaṭṭhāna) of a cetasika?',
    aK: 'ចេតសិកមានការដឹងអារម្មណ៍តែមួយនឹងចិត្ត ជាអាការប្រាកដ។',
    aE: 'The cetasika manifests as taking the same single object as consciousness.',
  },
  {
    qK: 'តើចេតសិកមានហេតុជិតយ៉ាងណា?',
    qE: 'What is the proximate cause (padaṭṭhāna) of a cetasika?',
    aK: 'ចេតសិកមានការកើតឡើងនៃចិត្ត ជាហេតុជិត។',
    aE: 'The cetasika has the arising of consciousness as its proximate cause.',
  },
  {
    qK: 'តើអារម្មណ៍ជាអ្វី?',
    qE: 'What is ārammaṇa (object)?',
    aK: 'អារម្មណ៍ជាចំណីរបស់ចិត្ត និងចេតសិក ឬជាទីដែលចិត្ត និងចេតសិកត្រូវដឹង។',
    aE: 'Ārammaṇa is the "food" (object) of consciousness and mental factors, or that which consciousness and mental factors come to know.',
  },
  {
    qK: 'តើអារម្មណ៍មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects (ārammaṇa) are there? Which are they?',
    aK: 'អារម្មណ៍មាន ៦ គឺ ៖ រូបារម្មណ៍ អារម្មណ៍គឺពណ៌ ។ សទ្ទារម្មណ៍ អារម្មណ៍គឺសំឡេង ។ គន្ធារម្មណ៍ អារម្មណ៍គឺក្លិន ។ រសារម្មណ៍ អារម្មណ៍គឺរស ។ ផោដ្ឋព្វារម្មណ៍ អារម្មណ៍គឺធាតុរឹង ទន់ ក្តៅ ត្រជាក់ តឹង កម្រើក ។ ធម្មារម្មណ៍ អារម្មណ៍គឺចិត្ត ចេតសិក រូប ២១ និព្វាន បញ្ញត្តិ។',
    aE: 'There are six objects: visible object (rūpārammaṇa, colour); sound (saddārammaṇa); odour (gandhārammaṇa); taste (rasārammaṇa); tangible object (phoṭṭhabbārammaṇa — the elements of hardness, softness, heat, cold, pressure, motion); and mental object (dhammārammaṇa — citta, cetasika, the 21 rūpas that are mind-object, Nibbāna, and concepts).',
  },
  {
    qK: 'តើអារម្មណ៍ប៉ុន្មានជារូបធម៌? អារម្មណ៍ប៉ុន្មានជានាមធម៌?',
    qE: 'How many objects are rūpa-dhamma (material), and how many are nāma-dhamma (mental)?',
    aK: 'អារម្មណ៍ ៦ ជារូបធម៌ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និងធម្មារម្មណ៍ដែលជារូប ២១ (វៀរចិត្ត ចេតសិក និព្វាន បញ្ញត្តិ) ។ អារម្មណ៍ ១ ជានាមធម៌ គឺ ធម្មារម្មណ៍ដែលជាចិត្ត ចេតសិក និព្វាន (វៀររូប ២១ និងបញ្ញត្តិ)។',
    aE: 'Six objects are material: the visible, sound, odour, taste and tangible objects, together with the mental object that is the 21 rūpas (excluding citta, cetasika, Nibbāna and concepts). One object is mental: the mental object that is citta, cetasika and Nibbāna (excluding the 21 rūpas and concepts).',
  },
  {
    qK: 'តើវត្ថុក្នុងបរមត្ថធម៌មានន័យដូចម្តេច?',
    qE: 'What does vatthu mean in the paramattha-dhamma?',
    aK: 'វត្ថុក្នុងបរមត្ថធម៌ មានន័យថា ជាទីអាស្រ័យនៃចិត្ត និងចេតសិកកើត។',
    aE: 'In the paramattha-dhamma, vatthu means the physical base upon which consciousness and mental factors depend for their arising.',
  },
  {
    qK: 'តើវត្ថុមានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many bases (vatthu) are there? Which are they?',
    aK: 'វត្ថុមាន ៦ គឺ ៖ ចក្ខុវត្ថុ ជាទីអាស្រ័យនៃចក្ខុវិញ្ញាណ ២ ដួង ។ សោតវត្ថុ ជាទីអាស្រ័យនៃសោតវិញ្ញាណ ២ ដួង ។ ឃានវត្ថុ ជាទីអាស្រ័យនៃឃានវិញ្ញាណ ២ ដួង ។ ជីវ្ហាវត្ថុ ជាទីអាស្រ័យនៃជីវ្ហាវិញ្ញាណ ២ ដួង ។ កាយវត្ថុ ជាទីអាស្រ័យនៃកាយវិញ្ញាណ ២ ដួង ។ ហទយវត្ថុ ជាទីអាស្រ័យនៃមនោធាតុ ៣ ដួង និងមនោវិញ្ញាណធាតុ ៧២ ដួង ឬ ១០៤ ដួង។',
    aE: 'There are six bases: the eye-base, base of the two eye-consciousnesses; ear-base, base of the two ear-consciousnesses; nose-base, base of the two nose-consciousnesses; tongue-base, base of the two tongue-consciousnesses; body-base, base of the two body-consciousnesses; and heart-base (hadaya-vatthu), base of the three mind-elements (mano-dhātu) and the 72 mind-consciousness-elements (or 104).',
  },
  {
    qK: 'ឧទាហរណ៍ចិត្តអាស្រ័យចក្ខុវត្ថុ តើចេតសិកអាស្រ័យនឹងអ្វីដែរ?',
    qE: 'For example, consciousness depends on the eye-base; on what do the cetasikas depend?',
    aK: 'បើចិត្តអាស្រ័យចក្ខុវត្ថុ ចេតសិកក៏អាស្រ័យចក្ខុវត្ថុដែរ។',
    aE: 'If consciousness depends on the eye-base, the cetasikas also depend on the very same eye-base.',
  },
  {
    qK: 'ឧទាហរណ៍ចិត្តដឹងរូបារម្មណ៍ តើចេតសិកដឹងអ្វីដែរ?',
    qE: 'For example, consciousness knows the visible object; what do the cetasikas know?',
    aK: 'បើចិត្តដឹងរូបារម្មណ៍ ចេតសិកក៏ដឹងរូបារម្មណ៍ដែរ។',
    aE: 'If consciousness knows the visible object, the cetasikas also know the same visible object.',
  },
  {
    qK: 'តើបរមត្ថធម៌ប៉ុន្មានជានាមធម៌?',
    qE: 'How many paramattha-dhammas are nāma-dhamma (mental)?',
    aK: 'បរមត្ថធម៌ ៣ ជានាមធម៌ គឺ ចិត្តបរមត្ថ ចេតសិកបរមត្ថ និងនិព្វានបរមត្ថ។',
    aE: 'Three paramattha-dhammas are mental: citta, cetasika and Nibbāna.',
  },
  {
    qK: 'បរមត្ថធម៌ប៉ុន្មានជារូបធម៌?',
    qE: 'How many paramattha-dhammas are rūpa-dhamma (material)?',
    aK: 'បរមត្ថធម៌ ១ ជារូបធម៌ គឺ រូបបរមត្ថ។',
    aE: 'One paramattha-dhamma is material, namely rūpa-paramattha.',
  },
]

const fiftyTwoQas = [
  {
    qK: 'ដូចម្តេចហៅថាចេតសិក?',
    qE: 'What is called a cetasika?',
    aK: 'ចេតសិកគឺជាធម្មជាតិកើតអាស្រ័យនឹងចិត្ត ឬប្រកបនឹងចិត្ត។',
    aE: 'A cetasika is a nature that arises dependent on consciousness, or is associated with consciousness.',
  },
  {
    qK: 'តើចេតសិកបរមត្ថមានប៉ុន្មានចេតសិក?',
    qE: 'How many cetasikas are there in cetasika-paramattha?',
    aK: 'ចេតសិកបរមត្ថ មាន ៥២ ចេតសិក។',
    aE: 'Cetasika-paramattha has 52 cetasikas.',
  },
  {
    qK: 'តើចេតសិក ៥២ ចែកជាប៉ុន្មានក្រុមធំៗ? ក្រុមអ្វីខ្លះ?',
    qE: 'Into how many great groups are the 52 cetasikas divided? Which are they?',
    aK: 'ចេតសិក ៥២ ចែកជា ៣ ក្រុមធំៗ គឺ ៖ អញ្ញសមានាចេតសិក អកុសលចេតសិក និងសោភណចេតសិក។',
    aE: 'The 52 cetasikas are divided into three great groups: the aññasamānā (ethically variable), the akusala (unwholesome), and the sobhaṇa (beautiful).',
  },
  {
    qK: 'ដូចម្តេចហៅថាអញ្ញសមានាចេតសិក?',
    qE: 'What is called aññasamānā cetasika?',
    aK: 'អញ្ញសមានាចេតសិក មានន័យថា ចេតសិកស្មើៗនឹងគេ។',
    aE: 'Aññasamānā cetasikas are the mental factors that are "common to others" — i.e. ethically variable, equal to either the wholesome or unwholesome side.',
  },
  {
    qK: 'តើអញ្ញសមានាចេតសិក ចែកជាប៉ុន្មានន័យ ឬពួក? អ្វីខ្លះ?',
    qE: 'Into how many classes is the aññasamānā group divided? Which are they?',
    aK: 'អញ្ញសមានាចេតសិក ចែកជា ២ ពួក គឺ ៖ សព្វចិត្តសាធារណចេតសិក និងបកិណ្ណកចេតសិក។',
    aE: 'The aññasamānā group is divided into two classes: the sabbacitta-sādhāraṇa (universals present in every consciousness) and the pakiṇṇaka (particulars).',
  },
  {
    qK: 'ដូចម្តេចហៅថាសព្វចិត្តសាធារណចេតសិក? មានប៉ុន្មានចេតសិក? អ្វីខ្លះ?',
    qE: 'What is called sabbacitta-sādhāraṇa cetasika? How many are there? Which are they?',
    aK: 'សព្វចិត្តសាធារណចេតសិក មានន័យថា ចេតសិកកើតទូទៅគ្រប់ចិត្តទាំងអស់ (៨៩ ដួង ឬ ១២១ ដួង)។ សព្វចិត្តសាធារណចេតសិកមាន ៧ គឺ ផស្សៈ វេទនា សញ្ញា ចេតនា ឯកគ្គតា ជីវិតិន្រ្ទិយ មនសិការ។',
    aE: 'Sabbacitta-sādhāraṇa cetasikas are the mental factors that arise in all consciousness (89 or 121). There are 7: contact (phassa), feeling (vedanā), perception (saññā), volition (cetanā), one-pointedness (ekaggatā), life-faculty (jīvitindriya), and attention (manasikāra).',
  },
  {
    qK: 'ដូចម្តេចហៅថាបកិណ្ណកចេតសិក? មានប៉ុន្មានចេតសិក? អ្វីខ្លះ?',
    qE: 'What is called pakiṇṇaka cetasika? How many are there? Which are they?',
    aK: 'បកិណ្ណកចេតសិក គឺជាចេតសិករាត់រាយ ខ្ចាត់ខ្ចាយ កើតតាមសមគួរក្នុងចិត្ត ៨៩ ដួង ឬ ១២១ ដួង។ បកិណ្ណកចេតសិក មានចេតសិក ៦ គឺ វិតក្កៈ វិចារ អធិមោក្ខៈ វីរិយៈ បីតិ ឆន្ទៈ។',
    aE: 'Pakiṇṇaka cetasikas are the scattered, particular mental factors that arise only as occasion requires among the 89 (or 121) consciousnesses. There are 6: applied thought (vitakka), sustained thought (vicāra), decision (adhimokkha), energy (vīriya), joy (pīti), and desire-to-do (chanda).',
  },
  {
    qK: 'ដូចម្តេចហៅថាអកុសលចេតសិក?',
    qE: 'What is called akusala cetasika?',
    aK: 'អកុសលចេតសិក គឺជាចេតសិកមិនល្អ ចេតសិកអាក្រក់ ចេតសិកផ្នែកបាប។',
    aE: 'Akusala cetasikas are the unwholesome mental factors — the bad ones, the evil ones.',
  },
  {
    qK: 'តើអកុសលចេតសិក មានប៉ុន្មានចេតសិក? ចែកជាប៉ុន្មានន័យ ឬពួក? អ្វីខ្លះ?',
    qE: 'How many akusala cetasikas are there? Into how many classes are they divided? Which are they?',
    aK: 'អកុសលចេតសិក មាន ១៤ ចែកជា ៥ ពួក គឺ មោចតុក្កៈ លោតិកៈ ទោចតុក្កៈ ថីទុកៈ ឯកវិចិកិច្ឆា។',
    aE: 'There are 14 akusala cetasikas, divided into 5 classes: the moha-catukka, the lobha-triple, the dosa-catukka, the thīna-duka, and the single vicikicchā.',
  },
  {
    qK: 'តើមោចតុក្កចេតសិកមានន័យដូចម្តេច? មានប៉ុន្មានចេតសិក? អ្វីខ្លះ?',
    qE: 'What does moha-catukka mean? How many cetasikas? Which are they?',
    aK: 'មោចតុក្កចេតសិក មានន័យថា ចេតសិកពួក ៤ ដែលមានមោហៈជាដើម មាន ៤ គឺ មោហៈ អហិរិកៈ អនោត្តប្បៈ ឧទ្ធច្ចៈ។',
    aE: 'Moha-catukka means the group of four mental factors headed by delusion (moha). There are 4: delusion (moha), shamelessness (ahirika), fearlessness of wrong-doing (anottappa), and restlessness (uddhacca).',
  },
  {
    qK: 'តើលោតិកចេតសិកមានន័យដូចម្តេច? មានប៉ុន្មានចេតសិក? អ្វីខ្លះ?',
    qE: 'What does lobha-triple mean? How many cetasikas? Which are they?',
    aK: 'លោតិកចេតសិក មានន័យថា ចេតសិកពួក ៣ ដែលមានលោភជាដើម។ លោតិកៈ មានចេតសិក ៣ គឺ លោភៈ ទិដ្ឋិ និងមានៈ។',
    aE: 'The lobha-triple means the group of three mental factors headed by greed (lobha). There are 3: greed (lobha), wrong view (diṭṭhi) and conceit (māna).',
  },
  {
    qK: 'តើទោចតុក្កចេតសិកមានន័យដូចម្តេច? មានប៉ុន្មានចេតសិក? អ្វីខ្លះ?',
    qE: 'What does dosa-catukka mean? How many cetasikas? Which are they?',
    aK: 'ទោចតុក្កចេតសិក មានន័យថា ចេតសិកពួក ៤ ដែលមានទោសៈជាដើម។ ទោចតុក្កៈ មានចេតសិក ៤ គឺ ទោសៈ ឥស្សា មច្ឆរិយៈ កុក្កុច្ចៈ។',
    aE: 'Dosa-catukka means the group of four mental factors headed by hatred (dosa). There are 4: hatred (dosa), envy (issā), stinginess (macchariya), and worry (kukkucca).',
  },
  {
    qK: 'តើថីទុកចេតសិកមានន័យដូចម្តេច? មានចេតសិកប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'What does thīna-duka mean? How many cetasikas? Which are they?',
    aK: 'ថីទុកចេតសិក មានន័យថា ចេតសិកពួក ២ ដែលមានថីនៈជាដើម។ ថីទុកៈ មានចេតសិក ២ គឺ ថីនៈ និងមិទ្ធៈ។',
    aE: 'Thīna-duka means the group of two mental factors headed by sloth (thīna). There are 2: sloth (thīna) and torpor (middha).',
  },
  {
    qK: 'តើឯកវិចិកិច្ឆាមានន័យដូចម្តេច? មានប៉ុន្មានចេតសិក? អ្វីខ្លះ?',
    qE: 'What does the single vicikicchā mean? How many cetasikas? Which are they?',
    aK: 'ឯកវិចិកិច្ឆាមានន័យថា ពួក ១ មានវិចិកិច្ឆា។ ឯកវិចិកិច្ឆា មានចេតសិក ១ គឺវិចិកិច្ឆា។',
    aE: 'The single vicikicchā means the one group headed by doubt. It has one cetasika, namely doubt (vicikicchā).',
  },
  {
    qK: 'តើសោភណចេតសិកមានន័យដូចម្តេច? មានប៉ុន្មានចេតសិក?',
    qE: 'What does sobhaṇa cetasika mean? How many are there?',
    aK: 'សោភណចេតសិក មានន័យថា ចេតសិកល្អ។ សោភណចេតសិក មាន ២៥។',
    aE: 'Sobhaṇa cetasikas are the beautiful (wholesome) mental factors. There are 25.',
  },
  {
    qK: 'តើសោភណចេតសិក ២៥ ចែកជាប៉ុន្មានន័យ ឬពួក? អ្វីខ្លះ?',
    qE: 'Into how many classes are the 25 sobhaṇa cetasikas divided? Which are they?',
    aK: 'សោភណចេតសិក ចែកជា ៤ ន័យ គឺ ៖ សព្វចិត្តសោភណសាធារណចេតសិក វិរតិចេតសិក អប្បមញ្ញាចេតសិក និងបញ្ញិន្រ្ទិយ។',
    aE: 'The sobhaṇa cetasikas are divided into four classes: the sabbacitta-sobhaṇa-sādhāraṇa (beautiful universals), the virati (abstinences), the appamaññā (illimitables), and paññindriya (wisdom faculty).',
  },
  {
    qK: 'តើសព្វចិត្តសោភណសាធារណចេតសិក មានន័យដូចម្តេច? មានប៉ុន្មានចេតសិក? អ្វីខ្លះ?',
    qE: 'What does sabbacitta-sobhaṇa-sādhāraṇa mean? How many cetasikas? Which are they?',
    aK: 'សព្វចិត្តសោភណសាធារណចេតសិក មានន័យថា ចេតសិកកើតទូទៅគ្រប់សោភណចិត្ត ៥៩ ដួង ឬ ៩១ ដួង។ សព្វចិត្តសោភណសាធារណចេតសិក មានចេតសិក ១៩ គឺ សទ្ធា សតិ ហិរិ ឱត្តប្បៈ អលោភៈ អទោសៈ តត្រមជ្ឈត្តតា កាយបស្សទ្ធិ ចិត្តបស្សទ្ធិ កាយលហុតា ចិត្តលហុតា កាយមុទុតា ចិត្តមុទុតា កាយកម្មញ្ញតា ចិត្តកម្មញ្ញតា កាយបាគុញ្ញតា ចិត្តបាគុញ្ញតា កាយុជុកតា ចិត្តុជុកតា។',
    aE: 'Sabbacitta-sobhaṇa-sādhāraṇa means the mental factors that arise in every beautiful consciousness (59 or 91 kinds). There are 19: faith (saddhā), mindfulness (sati), moral shame (hiri), fear of wrong-doing (ottappa), non-greed (alobha), non-hatred (adosa), equanimity (tatramajjhattatā), tranquillity of mental body (kāya-passaddhi), tranquillity of consciousness (citta-passaddhi), lightness of mental body (kāya-lahutā), lightness of consciousness (citta-lahutā), softness of mental body (kāya-mudutā), softness of consciousness (citta-mudutā), wieldiness of mental body (kāya-kammaññatā), wieldiness of consciousness (citta-kammaññatā), proficiency of mental body (kāya-pāguññatā), proficiency of consciousness (citta-pāguññatā), rectitude of mental body (kāyujukatā), and rectitude of consciousness (cittujukatā).',
  },
  {
    qK: 'តើវិរតិចេតសិក មានន័យដូចម្តេច? មានប៉ុន្មានចេតសិក? អ្វីខ្លះ?',
    qE: 'What does virati cetasika mean? How many cetasikas? Which are they?',
    aK: 'វិរតិចេតសិក មានន័យថា ចេតសិកខាងវៀរ ខាងទប់ ជាហ្វ្រាំង។ វិរតិចេតសិក មាន ៣ គឺ សម្មាវាចា សម្មាកម្មន្តៈ សម្មាអាជីវៈ។',
    aE: 'Virati cetasikas are the abstinences — the restraining, "brake-like" mental factors. There are 3: right speech (sammā-vācā), right action (sammā-kammanta), and right livelihood (sammā-ājīva).',
  },
  {
    qK: 'តើអប្បមញ្ញាចេតសិក មានន័យដូចម្តេច? មានប៉ុន្មានចេតសិក? អ្វីខ្លះ?',
    qE: 'What does appamaññā cetasika mean? How many cetasikas? Which are they?',
    aK: 'អប្បមញ្ញាចេតសិក មានន័យថា ចេតសិកមិនមានព្រំដែនកំណត់ មិនមានប្រមាណ។ អប្បមញ្ញាចេតសិក មាន ២ គឺ ករុណា និងមុទិតា។',
    aE: 'Appamaññā cetasikas are the illimitable mental factors without measure or boundary. There are 2: compassion (karuṇā) and appreciative joy (muditā).',
  },
  {
    qK: 'តើបញ្ញិន្រ្ទិយចេតសិក មានន័យដូចម្តេច? មានប៉ុន្មានចេតសិក? អ្វីខ្លះ?',
    qE: 'What does paññindriya mean? How many cetasikas? Which are they?',
    aK: 'បញ្ញិន្រ្ទិយ មានន័យថា ភាពជាធំរបស់បញ្ញា។ បញ្ញិន្រ្ទិយ មានចេតសិក ១ គឺបញ្ញា។',
    aE: 'Paññindriya means the predominance (faculty) of wisdom. It has one cetasika, namely wisdom (paññā).',
  },
]

const phassaQas = [
  {
    qK: 'តើផស្សចេតសិក មានអត្ថយ៉ាងណា?',
    qE: 'What is the meaning (attha) of phassa cetasika?',
    aK: 'ផស្សចេតសិក មានន័យថា ការប៉ះខ្ទប់។',
    aE: 'Phassa cetasika means "touching" or "impact" (contact).',
  },
  {
    qK: 'តើអាយតនៈមានន័យដូចម្តេច?',
    qE: 'What does āyatana mean?',
    aK: 'អាយតនៈ មានន័យថា អណ្តូង លំនៅ គ្រឿងតភ្ជាប់ គ្រឿងដែលធ្វើឱ្យសង្សារវដ្តយូរ។',
    aE: 'Āyatana means "well", "abode", "connecting link" — that which keeps the round of saṃsāra long.',
  },
  {
    qK: 'តើអាយតនៈមានប៉ុន្មាន? ចែកជាប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'How many āyatanas are there? Into how many kinds are they divided? Which are they?',
    aK: 'អាយតនៈ មាន ១២ ចែកជា ២ យ៉ាង គឺ ៖ អាយតនៈខាងក្នុង និងអាយតនៈខាងក្រៅ។',
    aE: 'There are 12 āyatanas, divided into 2 kinds: the internal and the external.',
  },
  {
    qK: 'តើអាយតនៈខាងក្នុងមានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many internal āyatanas are there? Which are they?',
    aK: 'អាយតនៈខាងក្នុងមាន ៦ គឺ ចក្ខាយតនៈ សោតាយតនៈ ឃានាយតនៈ ជិវ្ហាយតនៈ កាយាយតនៈ និងមនាយតនៈ។',
    aE: 'There are six internal āyatanas: the eye, ear, nose, tongue, body, and mind.',
  },
  {
    qK: 'តើអាយតនៈខាងក្រៅមានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many external āyatanas are there? Which are they?',
    aK: 'អាយតនៈខាងក្រៅ មាន ៦ គឺ រូបាយតនៈ សទ្ទាយតនៈ គន្ធាយតនៈ រសាយតនៈ ផោដ្ឋព្វាយតនៈ និងធម្មាយតនៈ។',
    aE: 'There are six external āyatanas: visible object, sound, odour, taste, tangible object, and mental object (dhammāyatana).',
  },
  {
    qK: 'តើផស្សចេតសិក មានលក្ខណៈយ៉ាងណា?',
    qE: 'What is the characteristic of phassa cetasika?',
    aK: 'ផស្សចេតសិក មានការប៉ះខ្ទប់ ជាលក្ខណៈ។',
    aE: 'Phassa has the characteristic of touching/impinging (contact).',
  },
  {
    qK: 'តើផស្សចេតសិកមានកិច្ចយ៉ាងណា?',
    qE: 'What is the function of phassa cetasika?',
    aK: 'ផស្សចេតសិក មានការធ្វើឱ្យចិត្ត និងអារម្មណ៍ប៉ះខ្ទប់គ្នា ជាកិច្ច។',
    aE: 'Phassa has the function of making consciousness and object impinge upon (meet) each other.',
  },
  {
    qK: 'តើផស្សចេតសិកមានអាការប្រាកដយ៉ាងណា?',
    qE: 'What is the manifestation of phassa cetasika?',
    aK: 'ផស្សចេតសិក មានការធ្វើឱ្យវត្ថុ អារម្មណ៍ ចិត្ត ប្រជុំគ្នា ជាអាការប្រាកដ។',
    aE: 'Phassa manifests as the coming together of base (vatthu), object, and consciousness.',
  },
  {
    qK: 'តើផស្សចេតសិកមានហេតុជិតយ៉ាងណា?',
    qE: 'What is the proximate cause of phassa cetasika?',
    aK: 'ផស្សចេតសិក មានអារម្មណ៍មកកាន់គន្លង ជាហេតុជិត។',
    aE: 'Phassa has the object that has come into its range as its proximate cause.',
  },
  {
    qK: 'តើផស្សចេតសិក ចាត់ជាខន្ធអ្វី?',
    qE: 'To which aggregate (khandha) is phassa classed?',
    aK: 'ផស្សចេតសិក ចាត់ជាសង្ខារក្ខន្ធ។',
    aE: 'Phassa is classed as the saṅkhāra-khandha (formations aggregate).',
  },
  {
    qK: 'តើផស្សចេតសិក កើតក្នុងចិត្តប៉ុន្មានដួង?',
    qE: 'In how many consciousnesses does phassa arise?',
    aK: 'ផស្សចេតសិក កើតក្នុងចិត្ត ៨៩ ដួង ឬ ១២១ ដួង។',
    aE: 'Phassa arises in 89 (or 121) consciousnesses.',
  },
  {
    qK: 'តើផស្សចេតសិក ស្ថិតក្នុងក្រុមណា? ពួកណា?',
    qE: 'In which group and class does phassa belong?',
    aK: 'ផស្សចេតសិក ស្ថិតក្នុងក្រុមអញ្ញសមានាចេតសិក ពួកសព្វចិត្តសាធារណចេតសិក។',
    aE: 'Phassa belongs to the aññasamānā group, in the sabbacitta-sādhāraṇa class.',
  },
  {
    qK: 'តើផស្សចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានជាតិ? ជាតិអ្វីខ្លះ?',
    qE: 'In how many jātis (natures) does phassa arise? Which are they?',
    aK: 'ផស្សចេតសិក កើតក្នុងចិត្តបាន ៤ ជាតិ គឺ អកុសលជាតិ កុសលជាតិ វិបាកជាតិ និងកិរិយាជាតិ។',
    aE: 'Phassa arises in all four jātis: the unwholesome, wholesome, resultant (vipāka), and functional (kiriya).',
  },
  {
    qK: 'តើផស្សចេតសិក ប្រព្រឹត្តតាមទ្វារប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'Through how many doors does phassa operate? Which are they?',
    aK: 'ផស្សចេតសិក ប្រព្រឹត្តតាមទ្វារវិមុត្ត និងទ្វារ ៦ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជីវ្ហាទ្វារ កាយទ្វារ មនោទ្វារ។',
    aE: 'Phassa operates through the door-free (dvāra-vimutta) consciousness and the six doors: eye, ear, nose, tongue, body, and mind.',
  },
  {
    qK: 'តើផស្សចេតសិក ដឹងអារម្មណ៍បានប៉ុន្មាន? អារម្មណ៍អ្វីខ្លះ?',
    qE: 'How many objects can phassa know? Which are they?',
    aK: 'ផស្សចេតសិក ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និងធម្មារម្មណ៍។',
    aE: 'Phassa can know six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើផស្សចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានប្រភេទ? អ្វីខ្លះ?',
    qE: 'In how many planes (types) of consciousness does phassa arise? Which are they?',
    aK: 'ផស្សចេតសិក កើតក្នុងចិត្តបាន ៤ ប្រភេទ គឺ កាមាវចរចិត្ត រូបាវចរចិត្ត អរូបាវចរចិត្ត និងលោកុត្តរចិត្ត។',
    aE: 'Phassa arises in four planes of consciousness: the sense-sphere, form-sphere, formless-sphere, and supramundane.',
  },
  {
    qK: 'តើផស្សចេតសិក អាស្រ័យវត្ថុបានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'On how many bases does phassa depend? Which are they?',
    aK: 'ផស្សចេតសិក អាស្រ័យវត្ថុ ៦ គឺ ចក្ខុវត្ថុ សោតវត្ថុ ឃានវត្ថុ ជីវ្ហាវត្ថុ កាយវត្ថុ និងហទយវត្ថុ។',
    aE: 'Phassa depends on six bases: eye, ear, nose, tongue, body, and heart-base.',
  },
  {
    qK: 'តើផស្សចេតសិក ជាហេតុ ឬនហេតុ?',
    qE: 'Is phassa a hetu (root) or a non-hetu?',
    aK: 'ផស្សចេតសិក ជានហេតុ។',
    aE: 'Phassa is a non-hetu (not one of the six roots).',
  },
  {
    qK: 'តើផស្សចេតសិក កើតក្នុងអសោភណចិត្ត ឬសោភណចិត្ត?',
    qE: 'Does phassa arise in non-beautiful or beautiful consciousness?',
    aK: 'ផស្សចេតសិក កើតក្នុងអសោភណចិត្តផង និងសោភណចិត្តផង។',
    aE: 'Phassa arises in both non-beautiful and beautiful consciousness.',
  },
  {
    qK: 'តើផស្សចេតសិក កើតក្នុងលោកិយចិត្ត ឬលោកុត្តរចិត្ត?',
    qE: 'Does phassa arise in worldly or supramundane consciousness?',
    aK: 'ផស្សចេតសិក កើតក្នុងលោកិយចិត្តផង និងលោកុត្តរចិត្តផង។',
    aE: 'Phassa arises in both worldly and supramundane consciousness.',
  },
  {
    qK: 'តើផស្សចេតសិក ជារូបធម៌ ឬនាមធម៌?',
    qE: 'Is phassa a rūpa-dhamma or a nāma-dhamma?',
    aK: 'ផស្សចេតសិក ជានាមធម៌។',
    aE: 'Phassa is a nāma-dhamma (mental phenomenon).',
  },
  {
    qK: 'តើខណៈការប៉ះគ្នារវាងញញួរ និងដែកគោល ជាលក្ខណៈរបស់ផស្សចេតសិកដែរឬទេ? ហេតុអ្វី?',
    qE: 'Is the moment of impact between a hammer and a nail the characteristic of phassa? Why?',
    aK: 'ខណៈការប៉ះគ្នារវាងញញួរ និងដែកគោល មិនមែនជាលក្ខណៈរបស់ផស្សចេតសិកទេ ព្រោះញញួរជារូបធម៌ប៉ះ និងដែកគោលជារូបធម៌ មិនមានវិញ្ញាណប្រាកដឡើងទេ ហើយផស្សចេតសិកជានាមធម៌ កើតអាស្រ័យវិញ្ញាណ ឬចិត្ត មិនកើតក្នុងរូបធម៌ទេ។',
    aE: 'The impact between a hammer and a nail is not the characteristic of phassa, because the hammer (material) striking the nail (material) involves no arising of consciousness; and phassa is a nāma-dhamma that arises dependent on consciousness, never arising in material dhammas.',
  },
  {
    qK: 'ដៃកាន់ញញួរ វិញ្ញាណត្រង់ដៃក៏ប្រាកដឡើងដឹងសុខទុក្ខ តើការប៉ះគ្នារវាងដៃ ញញួរ កាយវិញ្ញាណ ជាលក្ខណៈរបស់ផស្សចេតសិកដែរឬទេ? ហេតុអ្វី?',
    qE: 'When a hand grips a hammer and consciousness at the hand arises knowing pleasure and pain, is the contact among hand, hammer and body-consciousness the characteristic of phassa? Why?',
    aK: 'ការប៉ះគ្នារវាង ដៃ ញញួរ កាយវិញ្ញាណ ក៏ប្រាកដឡើង ជាលក្ខណៈរបស់ផស្សចេតសិក ព្រោះផស្សចេតសិក ជានាមធម៌ កើតក្នុងកាយវិញ្ញាណ ហើយផស្សចេតសិកធ្វើឱ្យកាយវិញ្ញាណ និងញញួរ ប៉ះគ្នា ជាកិច្ច។',
    aE: 'When hand, hammer and body-consciousness come together, that is the characteristic of phassa, because phassa is a nāma-dhamma arising in body-consciousness, and it is phassa\'s function to make body-consciousness and the hammer come into contact.',
  },
]

const vedanaQas = [
  {
    qK: 'តើវេទនាចេតសិក មានអត្ថយ៉ាងណា?',
    qE: 'What is the meaning (attha) of vedanā cetasika?',
    aK: 'វេទនាចេតសិក មានន័យថា ធម្មជាតិសោយអារម្មណ៍។',
    aE: 'Vedanā cetasika means the nature that experiences (tastes) the object.',
  },
  {
    qK: 'តើវេទនាមានប៉ុន្មានន័យ? ន័យអ្វីខ្លះ?',
    qE: 'How many senses (meanings) does vedanā have? Which are they?',
    aK: 'វេទនាមាន ២ ន័យ គឺ ៖ អារម្មណានុភវនលក្ខណៈន័យ ឬតាមលក្ខណៈនៃការសោយអារម្មណ៍ ។ ឥន្រ្ទិយភេទន័យ ឬភាពជាធំក្នុងការសោយអារម្មណ៍។',
    aE: 'Vedanā has two senses: (1) the sense of the characteristic of experiencing the object (ārammaṇānubhavana-lakkhaṇa); and (2) the sense of the division of the faculties, i.e. its predominance in experiencing (indriya-bheda).',
  },
  {
    qK: 'បើពោលតាមលក្ខណៈនៃការសោយអារម្មណ៍ តើវេទនាមានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'Speaking by the characteristic of experiencing the object, how many kinds of vedanā are there? Which are they?',
    aK: 'បើតាមលក្ខណៈនៃការសោយអារម្មណ៍ វេទនាមាន ៣ ប្រភេទ គឺ សុខវេទនា ទុក្ខវេទនា អទុក្ខមសុខវេទនា ឬឧបេក្ខាវេទនា។',
    aE: 'By the characteristic of experiencing, there are three kinds of feeling: pleasant (sukha), painful (dukkha), and neither-pleasant-nor-painful (adukkhamasukhā, i.e. upekkhā).',
  },
  {
    qK: 'បើពោលដោយឥន្រ្ទិយភេទន័យ ឬភាពជាធំក្នុងការសោយអារម្មណ៍ តើវេទនាមានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'By the faculty-division sense, how many kinds of vedanā are there? Which are they?',
    aK: 'បើពោលដោយឥន្រ្ទិយភេទន័យ វេទនាចែកជា ៥ ប្រភេទ គឺ សុខវេទនា ទុក្ខវេទនា សោមនស្សវេទនា ទោមនស្សវេទនា អទុក្ខមសុខវេទនា ឬឧបេក្ខាវេទនា។',
    aE: 'By the faculty-division sense, feeling is divided into five kinds: pleasant bodily feeling (sukha), painful bodily feeling (dukkha), pleasant mental feeling (somanassa), displeasure or painful mental feeling (domanassa), and indifferent feeling (adukkhamasukhā, upekkhā).',
  },
  {
    qK: 'តើសុខវេទនា អង្គធម៌បានដល់អ្វី?',
    qE: 'What dhamma constitutes sukha-vedanā?',
    aK: 'សុខវេទនា អង្គធម៌បានដល់ វេទនាចេតសិក។',
    aE: 'Sukha-vedanā is constituted by the vedanā cetasika.',
  },
  {
    qK: 'តើទុក្ខវេទនា អង្គធម៌បានដល់អ្វី?',
    qE: 'What dhamma constitutes dukkha-vedanā?',
    aK: 'ទុក្ខវេទនា អង្គធម៌បានដល់ វេទនាចេតសិក។',
    aE: 'Dukkha-vedanā is constituted by the vedanā cetasika.',
  },
  {
    qK: 'តើសោមនស្សវេទនា អង្គធម៌បានដល់អ្វី?',
    qE: 'What dhamma constitutes somanassa-vedanā?',
    aK: 'សោមនស្សវេទនា អង្គធម៌បានដល់ វេទនាចេតសិក។',
    aE: 'Somanassa-vedanā is constituted by the vedanā cetasika.',
  },
  {
    qK: 'តើទោមនស្សវេទនា អង្គធម៌បានដល់អ្វី?',
    qE: 'What dhamma constitutes domanassa-vedanā?',
    aK: 'ទោមនស្សវេទនា អង្គធម៌បានដល់ វេទនាចេតសិក។',
    aE: 'Domanassa-vedanā is constituted by the vedanā cetasika.',
  },
  {
    qK: 'តើឧបេក្ខាវេទនា អង្គធម៌បានដល់អ្វី?',
    qE: 'What dhamma constitutes upekkhā-vedanā?',
    aK: 'ឧបេក្ខាវេទនា អង្គធម៌បានដល់ វេទនាចេតសិក។',
    aE: 'Upekkhā-vedanā is constituted by the vedanā cetasika.',
  },
  {
    qK: 'តើវេទនាចេតសិក ចាត់ជាខន្ធអ្វី?',
    qE: 'To which aggregate is vedanā classed?',
    aK: 'វេទនាចេតសិក ចាត់ជាវេទនាខន្ធ។',
    aE: 'Vedanā is classed as the vedanā-khandha (feeling aggregate).',
  },
  {
    qK: 'ហេតុអ្វីចែកវេទនាចេតសិក ជាវេទនាខន្ធ ដាច់ដោយឡែកតែឯង?',
    qE: 'Why is vedanā classed as a separate aggregate of its own?',
    aK: 'បានជាចាត់វេទនាចេតសិក ជាវេទនាខន្ធ ដាច់ដោយឡែកតែឯង ព្រោះវេទនាចេតសិក ក្នុងសម្បយុត្តធម៌ មានតួនាទីយ៉ាងសំខាន់ ខ្លាំងជាងគេខាងសោយអារម្មណ៍ ជាសុខ ទុក្ខ ឧបេក្ខា ដូច្នោះហើយទើបលោកចែកវេទនាចេតសិក ជាវេទនាខន្ធ ដាច់ដោយឡែកតែឯង។',
    aE: 'Vedanā is classed as a separate aggregate because, within its associated dhammas (sampayutta dhamma), the vedanā cetasika has the foremost, most powerful role in experiencing the object as pleasant, painful or indifferent; therefore the teachers set it apart as its own aggregate.',
  },
  {
    qK: 'តើវេទនាចេតសិក មានលក្ខណៈដូចម្តេច?',
    qE: 'What is the characteristic of vedanā cetasika?',
    aK: 'វេទនាចេតសិក មានការសោយអារម្មណ៍ ជាលក្ខណៈ។',
    aE: 'Vedanā has the characteristic of experiencing the object.',
  },
  {
    qK: 'តើវេទនាចេតសិក មានកិច្ចដូចម្តេច?',
    qE: 'What is the function of vedanā cetasika?',
    aK: 'វេទនាចេតសិក មានការបរិភោគរសនៃអារម្មណ៍ ជាកិច្ច។',
    aE: 'Vedanā has the function of enjoying the flavour (taste) of the object.',
  },
  {
    qK: 'តើវេទនាចេតសិក មានអាការប្រាកដដូចម្តេច?',
    qE: 'What is the manifestation of vedanā cetasika?',
    aK: 'វេទនាចេតសិក មានសុខ និងទុក្ខ ជាអាការប្រាកដ។',
    aE: 'Vedanā manifests as pleasure and pain.',
  },
  {
    qK: 'តើវេទនាចេតសិក មានអ្វីជាហេតុជិត?',
    qE: 'What is the proximate cause of vedanā cetasika?',
    aK: 'វេទនាចេតសិក មានផស្សៈ ជាហេតុជិត។',
    aE: 'Vedanā has contact (phassa) as its proximate cause.',
  },
  {
    qK: 'ចូររៀបរាប់លក្ខណាទិចតុក្កៈរបស់សុខវេទនា ជាភាសាបាលី និងសម្រាយ?',
    qE: 'Set out the fourfold characteristic (lakkhaṇādi-catukka) of sukha-vedanā in Pāli with explanation.',
    aK: 'លក្ខណាទិចតុក្កៈរបស់សុខវេទនា គឺ ៖ ឥដ្ឋផោដ្ឋព្វានុភវនលក្ខណា មានការសោយនូវផោដ្ឋព្វៈគួរជាទីប្រាថ្នា ជាលក្ខណៈ ។ សម្បយុត្តានំ ព្រោហនរសា មានការធ្វើឱ្យសម្បយុត្តធម៌ចម្រើន ជាកិច្ច ។ កាយិកអស្សាទបច្ចុប្បដ្ឋានា មានការត្រេកអរផ្លូវកាយ ជាអាការប្រាកដ ។ កាយិន្រ្ទិយបទដ្ឋានា មានកាយបសាទ ជាហេតុជិត។',
    aE: 'The fourfold characteristic of sukha-vedanā: (lakkhaṇa) it experiences a desirable tangible object (iṭṭha-phoṭṭhabbānubhavana); (rasa) it brings growth to its associated dhammas (sampayuttānaṃ brūhanā); (paccupaṭṭhāna) it manifests as bodily delight (kāyikā assāda); (padaṭṭhāna) its proximate cause is the body-sensitivity (kāyindriya-padaṭṭhānā).',
  },
  {
    qK: 'ចូររៀបរាប់លក្ខណាទិចតុក្កៈរបស់ទុក្ខវេទនា ជាភាសាបាលី និងសម្រាយ?',
    qE: 'Set out the fourfold characteristic of dukkha-vedanā in Pāli with explanation.',
    aK: 'លក្ខណាទិចតុក្កៈរបស់ទុក្ខវេទនា គឺ ៖ អនិដ្ឋផោដ្ឋព្វានុភវនលក្ខណា មានការសោយផោដ្ឋព្វៈមិនគួរជាទីប្រាថ្នា ជាលក្ខណៈ ។ សម្បយុត្តានំ មិលាបនរសា មានការធ្វើសម្បយុត្តធម៌សៅហ្មង ជាកិច្ច ។ កាយិកាពាធបច្ចុប្បដ្ឋានា មានអាពាធផ្លូវកាយ ជាអាការប្រាកដ ។ កាយិន្រ្ទិយបទដ្ឋានា មានកាយបសាទ ជាហេតុជិត។',
    aE: 'The fourfold characteristic of dukkha-vedanā: (lakkhaṇa) it experiences an undesirable tangible object (aniṭṭha-phoṭṭhabbānubhavana); (rasa) it brings decline to its associated dhammas (sampayuttānaṃ milāpanā); (paccupaṭṭhāna) it manifests as bodily affliction (kāyikā ābādha); (padaṭṭhāna) its proximate cause is the body-sensitivity (kāyindriya-padaṭṭhānā).',
  },
  {
    qK: 'ចូររៀបរាប់លក្ខណាទិចតុក្កៈរបស់សោមនស្សវេទនា ជាភាសាបាលី និងសម្រាយ?',
    qE: 'Set out the fourfold characteristic of somanassa-vedanā in Pāli with explanation.',
    aK: 'លក្ខណាទិចតុក្កៈរបស់សោមនស្សវេទនា គឺ ៖ ឥដ្ឋារម្មណានុភវនលក្ខណា មានការសោយអារម្មណ៍ ជាទីប្រាថ្នា ជាលក្ខណៈ ។ ឥដ្ឋាការសម្ភោគរសា មានការប្រសព្វនឹងអារម្មណ៍ ដែលជាទីប្រាថ្នា ជាកិច្ច ។ ចេតសិកអស្សាទបច្ចុប្បដ្ឋានា មានការត្រេកអរផ្លូវចិត្ត ជាអាការប្រាកដ ។ បស្សទ្ធិបទដ្ឋានា មានការស្ងប់កាយ ជាហេតុជិត។',
    aE: 'The fourfold characteristic of somanassa-vedanā: (lakkhaṇa) it experiences a desirable object (iṭṭhārammaṇānubhavana); (rasa) it partakes of the desirable object appropriately (iṭṭhākāra-sambhoga); (paccupaṭṭhāna) it manifests as mental delight (cetasikā assāda); (padaṭṭhāna) its proximate cause is tranquillity (passaddhi).',
  },
  {
    qK: 'ចូររៀបរាប់លក្ខណាទិចតុក្កៈរបស់ទោមនស្សវេទនា ជាភាសាបាលី និងសម្រាយ?',
    qE: 'Set out the fourfold characteristic of domanassa-vedanā in Pāli with explanation.',
    aK: 'លក្ខណាទិចតុក្កៈរបស់ទោមនស្សវេទនា គឺ ៖ អនិដ្ឋារម្មណានុភវនលក្ខណា មានការសោយអារម្មណ៍ មិនគួរជាទីប្រាថ្នា ជាលក្ខណៈ ។ អនិដ្ឋាការសម្ភោគរសា មានការប្រសព្វនឹងអារម្មណ៍ដែលមិនគួរជាទីប្រាថ្នា ជាកិច្ច ។ ចេតសិកាពាធបច្ចុប្បដ្ឋានា មានអាពាធផ្លូវចិត្ត ជាអាការប្រាកដ ។ ឯកន្តេយេវហទយវត្ថុបទដ្ឋានា មានហទយវត្ថុតែមួយ ជាហេតុជិត។',
    aE: 'The fourfold characteristic of domanassa-vedanā: (lakkhaṇa) it experiences an undesirable object (aniṭṭhārammaṇānubhavana); (rasa) it partakes of the undesirable object (aniṭṭhākāra-sambhoga); (paccupaṭṭhāna) it manifests as mental affliction (cetasikā ābādha); (padaṭṭhāna) its proximate cause is the heart-base alone (ekantena eva hadaya-vatthu).',
  },
  {
    qK: 'ចូររៀបរាប់លក្ខណាទិចតុក្កៈរបស់ឧបេក្ខាវេទនា ជាភាសាបាលី និងសម្រាយ?',
    qE: 'Set out the fourfold characteristic of upekkhā-vedanā in Pāli with explanation.',
    aK: 'លក្ខណាទិចតុក្កៈរបស់ឧបេក្ខាវេទនា គឺ ៖ មជ្ឈត្តវេទយិតលក្ខណា មានការសោយអារម្មណ៍ជាកណ្តាល ជាលក្ខណៈ ។ សម្បយុត្តានំ នាតិឧបព្រូហនមិលាបនរសា មានការរក្សាសម្បយុត្តធម៌ឱ្យចម្រើន និងមិនសាបសូន្យ ជាកិច្ច ។ សន្តភាវបច្ចុប្បដ្ឋានា មានការស្ងប់ ជាអាការប្រាកដ ។ និប្បីតិកចិត្តបទដ្ឋានា មានចិត្តដែលមិនប្រកបដោយបីតិ ជាហេតុជិត។',
    aE: 'The fourfold characteristic of upekkhā-vedanā: (lakkhaṇa) it experiences the object with a neutral (middle) attitude (majjhatta-vedayita); (rasa) it neither excessively increases nor declines its associated dhammas, preserving them in balance (sampayuttānaṃ nātibṛūhana-milāpana); (paccupaṭṭhāna) it manifests as peace/tranquillity (santa-bhāva); (padaṭṭhāna) its proximate cause is the consciousness without joy (nippītika-citta).',
  },
  {
    qK: 'តើវេទនាចេតសិក ស្ថិតក្នុងក្រុមណា? ពួកណា?',
    qE: 'In which group and class does vedanā belong?',
    aK: 'វេទនាចេតសិក ស្ថិតក្នុងក្រុមអញ្ញសមានាចេតសិក ពួកសព្វចិត្តសាធារណចេតសិក។',
    aE: 'Vedanā belongs to the aññasamānā group, in the sabbacitta-sādhāraṇa class.',
  },
]

const sannaQas = [
  {
    qK: 'តើសញ្ញាចេតសិកមានអត្ថយ៉ាងណា?',
    qE: 'What is the meaning (attha) of saññā cetasika?',
    aK: 'សញ្ញាចេតសិក មានន័យថា ធម្មជាតិចងចាំអារម្មណ៍។',
    aE: 'Saññā cetasika means the nature that perceives/remembers the object.',
  },
  {
    qK: 'តើសញ្ញាចេតសិក ចាត់ជាខន្ធអ្វី?',
    qE: 'To which aggregate is saññā classed?',
    aK: 'សញ្ញាចេតសិក ចាត់ជាសញ្ញាខន្ធ។',
    aE: 'Saññā is classed as the saññā-khandha (perception aggregate).',
  },
  {
    qK: 'ហេតុអ្វីបានជាចាត់សញ្ញាចេតសិក ជាសញ្ញាខន្ធ ដាច់ដោយឡែកតែឯង?',
    qE: 'Why is saññā classed as a separate aggregate of its own?',
    aK: 'សញ្ញាចេតសិក មានតួនាទីយ៉ាងសំខាន់ ក្នុងការចងចាំអារម្មណ៍ខ្លាំងជាងគេ ក្នុងសម្បយុត្តធម៌ ដូច្នេះហើយ ទើបលោកចាត់សញ្ញាចេតសិក ជាខន្ធ ដាច់ដោយឡែកតែឯង។',
    aE: 'The saññā cetasika has the foremost role in remembering the object within its associated dhammas, so the teachers set it apart as its own separate aggregate.',
  },
  {
    qK: 'តើសញ្ញាចេតសិកមានលក្ខណៈដូចម្តេច?',
    qE: 'What is the characteristic of saññā cetasika?',
    aK: 'សញ្ញាចេតសិក មានការចងចាំ ឬសម្គាល់ ជាលក្ខណៈ។',
    aE: 'Saññā has the characteristic of perceiving/recognising (marking) the object.',
  },
  {
    qK: 'តើសញ្ញាចេតសិកមានកិច្ចដូចម្តេច?',
    qE: 'What is the function of saññā cetasika?',
    aK: 'សញ្ញាចេតសិក មានការស្គាល់ និងធ្វើនូវការសម្គាល់ទុក ជាកិច្ច។',
    aE: 'Saññā has the function of recognising and making a sign (mark) for recall.',
  },
  {
    qK: 'តើសញ្ញាចេតសិកមានអាការប្រាកដដូចម្តេច?',
    qE: 'What is the manifestation of saññā cetasika?',
    aK: 'សញ្ញាចេតសិក មានការអាស្រ័យនូវនិមិត្ត តាមដែលបានកំណត់ទុក ឬចាំទុក ជាអាការប្រាកដ។',
    aE: 'Saññā manifests as the reliance on the sign (nimitta) that has been defined or remembered.',
  },
  {
    qK: 'តើហេតុជិតរបស់សញ្ញាចេតសិកជាអ្វី?',
    qE: 'What is the proximate cause of saññā cetasika?',
    aK: 'សញ្ញាចេតសិក មានអារម្មណ៍ដែលប្រាកដ ជាហេតុជិត។',
    aE: 'Saññā has the appearing object as its proximate cause.',
  },
  {
    qK: 'តើសញ្ញាចេតសិក ស្ថិតក្នុងក្រុមណា? ពួកណា?',
    qE: 'In which group and class does saññā belong?',
    aK: 'សញ្ញាចេតសិក ស្ថិតក្នុងក្រុមអញ្ញសមានាចេតសិក ពួកសព្វចិត្តសាធារណចេតសិក។',
    aE: 'Saññā belongs to the aññasamānā group, in the sabbacitta-sādhāraṇa class.',
  },
  {
    qK: 'តើសញ្ញាចេតសិក កើតក្នុងចិត្តប៉ុន្មានដួង?',
    qE: 'In how many consciousnesses does saññā arise?',
    aK: 'សញ្ញាចេតសិក កើតក្នុងចិត្ត ៨៩ ដួង ឬ ១២១ ដួង។',
    aE: 'Saññā arises in 89 (or 121) consciousnesses.',
  },
  {
    qK: 'តើសញ្ញាចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានជាតិ? អ្វីខ្លះ?',
    qE: 'In how many jātis does saññā arise? Which are they?',
    aK: 'សញ្ញាចេតសិក កើតក្នុងចិត្តបាន ៤ ជាតិ គឺ អកុសលជាតិ កុសលជាតិ វិបាកជាតិ និងកិរិយាជាតិ។',
    aE: 'Saññā arises in all four jātis: the unwholesome, wholesome, resultant, and functional.',
  },
  {
    qK: 'តើសញ្ញាចេតសិក ប្រព្រឹត្តទៅតាមទ្វារប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'Through how many doors does saññā operate? Which are they?',
    aK: 'សញ្ញាចេតសិក ប្រព្រឹត្តទៅតាមទ្វារវិមុត្ត និងទ្វារ ៦ មាន ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជីវ្ហាទ្វារ កាយទ្វារ និងមនោទ្វារ។',
    aE: 'Saññā operates through the door-free consciousness and the six doors: eye, ear, nose, tongue, body, and mind.',
  },
  {
    qK: 'តើសញ្ញាចេតសិក ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can saññā know? Which are they?',
    aK: 'សញ្ញាចេតសិក ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និងធម្មារម្មណ៍។',
    aE: 'Saññā can know six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើសញ្ញាចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានប្រភេទ? អ្វីខ្លះ?',
    qE: 'In how many planes of consciousness does saññā arise? Which are they?',
    aK: 'សញ្ញាចេតសិក កើតក្នុងចិត្ត ៤ ប្រភេទ គឺ កាមាវចរចិត្ត រូបាវចរចិត្ត អរូបាវចរចិត្ត និងលោកុត្តរចិត្ត។',
    aE: 'Saññā arises in four planes of consciousness: the sense-sphere, form-sphere, formless-sphere, and supramundane.',
  },
  {
    qK: 'តើសញ្ញាចេតសិក កើតអាស្រ័យវត្ថុប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'On how many bases does saññā arise? Which are they?',
    aK: 'សញ្ញាចេតសិក កើតអាស្រ័យវត្ថុ ៦ គឺ ចក្ខុវត្ថុ សោតវត្ថុ ឃានវត្ថុ ជីវ្ហាវត្ថុ កាយវត្ថុ និងហទយវត្ថុ។',
    aE: 'Saññā arises dependent on six bases: eye, ear, nose, tongue, body, and heart-base.',
  },
  {
    qK: 'តើសញ្ញាចេតសិក ជាហេតុ ឬនហេតុ?',
    qE: 'Is saññā a hetu or a non-hetu?',
    aK: 'សញ្ញាចេតសិក ជានហេតុ។',
    aE: 'Saññā is a non-hetu.',
  },
  {
    qK: 'តើសញ្ញាចេតសិក កើតក្នុងអសោភណចិត្ត ឬសោភណចិត្ត?',
    qE: 'Does saññā arise in non-beautiful or beautiful consciousness?',
    aK: 'សញ្ញាចេតសិក កើតក្នុងអសោភណចិត្តផង និងសោភណចិត្តផង។',
    aE: 'Saññā arises in both non-beautiful and beautiful consciousness.',
  },
  {
    qK: 'តើសញ្ញាចេតសិក កើតក្នុងលោកិយចិត្ត ឬលោកុត្តរចិត្ត?',
    qE: 'Does saññā arise in worldly or supramundane consciousness?',
    aK: 'សញ្ញាចេតសិក កើតក្នុងលោកិយចិត្តផង និងលោកុត្តរចិត្តផង។',
    aE: 'Saññā arises in both worldly and supramundane consciousness.',
  },
  {
    qK: 'តើសញ្ញាចេតសិក ជារូបធម៌ ឬនាមធម៌?',
    qE: 'Is saññā a rūpa-dhamma or a nāma-dhamma?',
    aK: 'សញ្ញាចេតសិក ជានាមធម៌។',
    aE: 'Saññā is a nāma-dhamma.',
  },
  {
    qK: 'ខណៈភ្លេចភ្លាំង តើមានសញ្ញាចេតសិកកើតក្នុងខណៈនោះទេ?',
    qE: 'At the moment of forgetfulness, is there a saññā cetasika arising in that moment?',
    aK: 'ខណៈភ្លេចភ្លាំង ក៏មានសញ្ញាចេតសិកកើតក្នុងចិត្តនោះដែរ គ្រាន់តែសញ្ញាចេតសិកមានកម្លាំងខ្សោយ មិនអាចចាំរឿងរ៉ាវបានច្បាស់។',
    aE: 'Even at the moment of forgetfulness, saññā still arises in that mind, only its strength is weak, so it cannot remember events clearly.',
  },
  {
    qK: 'ខណៈចងចាំរឿងអ្វីមួយច្បាស់ តើមានសញ្ញាចេតសិកប្រកបក្នុងចិត្តនោះដែរឬទេ?',
    qE: 'At the moment of clearly remembering something, is saññā present in that mind?',
    aK: 'ខណៈចាំរឿងអ្វីមួយច្បាស់ គឺមានសញ្ញាចេតសិកប្រកបក្នុងចិត្តនោះ ហើយសញ្ញាចេតសិកមានតួនាទីធំ ក្នុងសម្បយុត្តធម៌នោះ។',
    aE: 'When one clearly remembers something, saññā is indeed present in that mind, and it plays the major role within those associated dhammas.',
  },
  {
    qK: 'ចូររកឧទាហរណ៍អំពីសញ្ញាចេតសិកដែលកើតក្នុងចិត្ត?',
    qE: 'Give examples of saññā arising in consciousness.',
    aK: 'ឧទាហរណ៍សញ្ញាចេតសិកដែលកើតក្នុងចិត្ត ៖ ចងចាំមុខមាត់ខ្លួនឯង ។ ចងចាំញាតិសន្តាន ។ ចងចាំផ្ទះខ្លួនឯង ។ ចងចាំលុយកាក់។',
    aE: 'Examples of saññā arising in consciousness: remembering one\'s own face, remembering one\'s relatives, remembering one\'s own home, remembering one\'s money.',
  },
]

const cetanaQas = [
  {
    qK: 'តើចេតនាចេតសិក មានន័យដូចម្តេច?',
    qE: 'What does cetanā cetasika mean?',
    aK: 'ចេតនាចេតសិក មានន័យថា ធម្មជាតិផ្គងចិត្ត គឺដាស់តឿនសម្បយុត្តធម៌ដែលកើតព្រមនឹងខ្លួន ឱ្យធ្វើកិច្ចរបស់ខ្លួន។',
    aE: 'Cetanā cetasika means the nature that directs consciousness — it urges its co-arisen dhammas to perform their own functions.',
  },
  {
    qK: 'តើចេតនាចេតសិក មានលក្ខណៈយ៉ាងណា?',
    qE: 'What is the characteristic of cetanā cetasika?',
    aK: 'ចេតនាចេតសិក មានការផ្គងចិត្ត ជាលក្ខណៈ។',
    aE: 'Cetanā has the characteristic of directing (willing) consciousness.',
  },
  {
    qK: 'តើចេតនាចេតសិក មានកិច្ចយ៉ាងណា?',
    qE: 'What is the function of cetanā cetasika?',
    aK: 'ចេតនាចេតសិក មានការប្រមូលមក ជាកិច្ច។',
    aE: 'Cetanā has the function of accumulating (gathering) the associated dhammas.',
  },
  {
    qK: 'តើចេតនាចេតសិក មានអាការប្រាកដយ៉ាងណា?',
    qE: 'What is the manifestation of cetanā cetasika?',
    aK: 'ចេតនាចេតសិក មានការចាត់ចែង ជាអាការប្រាកដ។',
    aE: 'Cetanā manifests as organising/arranging.',
  },
  {
    qK: 'តើចេតនាចេតសិក មានហេតុជិតយ៉ាងណា?',
    qE: 'What is the proximate cause of cetanā cetasika?',
    aK: 'ចេតនាចេតសិក មានខន្ធ ៣ (វេទនាខន្ធ សញ្ញាខន្ធ វិញ្ញាណក្ខន្ធ) ដែលនៅសល់ ជាហេតុជិត។',
    aE: 'Cetanā has the remaining three aggregates (feeling, perception and consciousness aggregates) as its proximate cause.',
  },
  {
    qK: 'ចូររកឧទាហរណ៍អំពីចេតនាចេតសិកដែលកើតក្នុងចិត្ត?',
    qE: 'Give examples of cetanā arising in consciousness.',
    aK: 'ឧទាហរណ៍ចេតនាចេតសិកដែលកើតក្នុងចិត្ត ៖ ចេតនាក្នុងអកុសលចិត្ត ៖ ផ្គងចិត្តនឹងលួចលុយគេដែលទុកក្នុងទូរសម្ងាត់ ។ ចេតនាក្នុងអកុសលចិត្ត ៖ ផ្គងចិត្តនឹងសម្លាប់សត្វដើម្បីធ្វើម្ហូប ។ ចេតនាក្នុងមហាកុសលចិត្ត ៖ ផ្គងចិត្តនឹងជួយក្មេងកំព្រាដែលមិនមានទីពឹង ឱ្យបានជម្រក និងសាលារៀន ។ ចេតនាក្នុងមហាកុសលចិត្ត ៖ ផ្គងចិត្តនឹងរក្សាសីល ៥ ឱ្យបានជាប់លាប់ល្អ ដោយការវៀរចាកមិនសម្លាប់សត្វជាដើម។',
    aE: 'Examples of cetanā arising in consciousness: cetanā in an unwholesome mind — directing the mind to steal another\'s money kept in a safe; cetanā in an unwholesome mind — directing the mind to kill an animal to make food; cetanā in a great wholesome mind — directing the mind to help orphaned children who have no refuge, providing them shelter and school; cetanā in a great wholesome mind — directing the mind to keep the five precepts firmly and well, by abstaining from killing living beings and so on.',
  },
  {
    qK: 'ឧទាហរណ៍ ស្តេចគ្រប់គ្រងនគរ និងឧបរាជដែលចាត់ចែងការងារក្នុងវាំង តើមួយណាប្រៀបដូចជាចិត្ត? មួយណាប្រៀបដូចជាចេតនាចេតសិក?',
    qE: 'In the example of a king ruling the kingdom and a viceroy managing the palace affairs, which is like consciousness, and which is like cetanā?',
    aK: 'ស្តេចគ្រប់គ្រងនគរ ប្រៀបដូចជាចិត្ត រីឯឧបរាជដែលចាត់ចែងការងារក្នុងរាជវាំង ប្រៀបដូចចេតនាចេតសិក។',
    aE: 'The king ruling the kingdom is like consciousness, while the viceroy managing the palace affairs is like the cetanā cetasika.',
  },
  {
    qK: 'តើចេតនាចេតសិក កើតក្នុងចិត្តប៉ុន្មានដួង?',
    qE: 'In how many consciousnesses does cetanā arise?',
    aK: 'ចេតនាចេតសិក កើតក្នុងចិត្ត ៨៩ ដួង ឬ ១២១ ដួង។',
    aE: 'Cetanā arises in 89 (or 121) consciousnesses.',
  },
  {
    qK: 'តើចេតនាចេតសិក ចាត់ចូលជាខន្ធអ្វី?',
    qE: 'To which aggregate is cetanā classed?',
    aK: 'ចេតនាចេតសិក ចាត់ចូលជាសង្ខារក្ខន្ធ។',
    aE: 'Cetanā is classed as the saṅkhāra-khandha.',
  },
  {
    qK: 'តើចេតនាចេតសិក ស្ថិតក្នុងក្រុមណា? ពួកណា?',
    qE: 'In which group and class does cetanā belong?',
    aK: 'ចេតនាចេតសិក ស្ថិតក្នុងក្រុមអញ្ញសមានាចេតសិក ពួកសព្វចិត្តសាធារណចេតសិក។',
    aE: 'Cetanā belongs to the aññasamānā group, in the sabbacitta-sādhāraṇa class.',
  },
  {
    qK: 'តើចេតនាចេតសិក ជារូបធម៌ ឬនាមធម៌?',
    qE: 'Is cetanā a rūpa-dhamma or a nāma-dhamma?',
    aK: 'ចេតនាចេតសិក ជានាមធម៌។',
    aE: 'Cetanā is a nāma-dhamma.',
  },
  {
    qK: 'តើចេតនាចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានជាតិ? ជាតិអ្វីខ្លះ?',
    qE: 'In how many jātis does cetanā arise? Which are they?',
    aK: 'ចេតនាចេតសិក កើតក្នុងចិត្តបាន ៤ ជាតិ គឺ អកុសលជាតិ កុសលជាតិ វិបាកជាតិ និងកិរិយាជាតិ។',
    aE: 'Cetanā arises in all four jātis: the unwholesome, wholesome, resultant, and functional.',
  },
  {
    qK: 'តើចេតនាចេតសិក ប្រព្រឹត្តតាមទ្វារប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'Through how many doors does cetanā operate? Which are they?',
    aK: 'ចេតនាចេតសិក ប្រព្រឹត្តតាមទ្វារវិមុត្ត និងទ្វារ ៦ មាន ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជីវ្ហាទ្វារ កាយទ្វារ មនោទ្វារ។',
    aE: 'Cetanā operates through the door-free consciousness and the six doors: eye, ear, nose, tongue, body, and mind.',
  },
  {
    qK: 'តើចេតនាចេតសិក ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can cetanā know? Which are they?',
    aK: 'ចេតនាចេតសិក ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និងធម្មារម្មណ៍។',
    aE: 'Cetanā can know six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើចេតនាចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានប្រភេទ? អ្វីខ្លះ?',
    qE: 'In how many planes of consciousness does cetanā arise? Which are they?',
    aK: 'ចេតនាចេតសិក កើតក្នុងចិត្តបាន ៤ ប្រភេទ គឺ កាមាវចរចិត្ត រូបាវចរចិត្ត អរូបាវចរចិត្ត និងលោកុត្តរចិត្ត។',
    aE: 'Cetanā arises in four planes of consciousness: the sense-sphere, form-sphere, formless-sphere, and supramundane.',
  },
  {
    qK: 'តើចេតនាចេតសិក កើតអាស្រ័យវត្ថុប៉ុន្មាន ក្នុងចំណោមវត្ថុទាំង ៦? អ្វីខ្លះ?',
    qE: 'On how many of the six bases does cetanā arise? Which are they?',
    aK: 'ចេតនាចេតសិក កើតអាស្រ័យវត្ថុ ៦ គឺ ចក្ខុវត្ថុ សោតវត្ថុ ឃានវត្ថុ ជីវ្ហាវត្ថុ កាយវត្ថុ និងហទយវត្ថុ។',
    aE: 'Cetanā arises dependent on six bases: eye, ear, nose, tongue, body, and heart-base.',
  },
  {
    qK: 'តើចេតនាចេតសិក ជាហេតុ ឬនហេតុ?',
    qE: 'Is cetanā a hetu or a non-hetu?',
    aK: 'ចេតនាចេតសិក ជានហេតុ។',
    aE: 'Cetanā is a non-hetu.',
  },
  {
    qK: 'តើចេតនាចេតសិក កើតក្នុងអសោភណចិត្ត ឬសោភណចិត្ត?',
    qE: 'Does cetanā arise in non-beautiful or beautiful consciousness?',
    aK: 'ចេតនាចេតសិក កើតក្នុងអសោភណចិត្តផង និងសោភណចិត្តផង។',
    aE: 'Cetanā arises in both non-beautiful and beautiful consciousness.',
  },
  {
    qK: 'តើចេតនាចេតសិក កើតក្នុងលោកិយចិត្ត ឬលោកុត្តរចិត្ត?',
    qE: 'Does cetanā arise in worldly or supramundane consciousness?',
    aK: 'ចេតនាចេតសិក កើតក្នុងលោកិយចិត្តផង និងលោកុត្តរចិត្តផង។',
    aE: 'Cetanā arises in both worldly and supramundane consciousness.',
  },
  {
    qK: 'តើចេតនាចេតសិក កើតក្នុងអហេតុកចិត្ត ឬសហេតុកចិត្ត?',
    qE: 'Does cetanā arise in rootless or rooted consciousness?',
    aK: 'ចេតនាចេតសិក កើតក្នុងអហេតុកចិត្តផង និងសហេតុកចិត្តផង។',
    aE: 'Cetanā arises in both rootless (ahetuka) and rooted (sahetuka) consciousness.',
  },
  {
    qK: 'ដូចម្តេចហៅថាអហេតុកចិត្ត?',
    qE: 'What is called ahetuka citta (rootless consciousness)?',
    aK: 'អហេតុកចិត្ត មានន័យថា ចិត្តដែលមិនមានហេតុ ៦ ណាមួយប្រកបជាមួយ។',
    aE: 'Ahetuka citta means consciousness not accompanied by any of the six roots.',
  },
  {
    qK: 'ដូចម្តេចហៅថាសហេតុកចិត្ត?',
    qE: 'What is called sahetuka citta (rooted consciousness)?',
    aK: 'សហេតុកចិត្ត មានន័យថា ចិត្តដែលមានហេតុ ៦ ណាមួយប្រកបជាមួយ។',
    aE: 'Sahetuka citta means consciousness accompanied by any of the six roots.',
  },
  {
    qK: 'ដូចម្តេចហៅថាអសោភណចិត្ត?',
    qE: 'What is called asobhaṇa citta (unbeautiful consciousness)?',
    aK: 'អសោភណចិត្ត មានន័យថា ចិត្តដែលមិនមានសោភណចេតសិកណាមួយប្រកបជាមួយ។',
    aE: 'Asobhaṇa citta means consciousness not accompanied by any sobhaṇa (beautiful) cetasika.',
  },
  {
    qK: 'ដូចម្តេចហៅថាសោភណចិត្ត?',
    qE: 'What is called sobhaṇa citta (beautiful consciousness)?',
    aK: 'សោភណចិត្ត មានន័យថា ចិត្តដែលមានសោភណចេតសិកប្រកបជាមួយ តាមសមគួរ។',
    aE: 'Sobhaṇa citta means consciousness accompanied by the sobhaṇa (beautiful) cetasikas, as occasion requires.',
  },
  {
    qK: 'ដូចម្តេចហៅថាលោកិយចិត្ត?',
    qE: 'What is called lokiya citta (worldly consciousness)?',
    aK: 'លោកិយចិត្ត មានន័យថា ចិត្តដែលដឹងអារម្មណ៍ក្នុងលោក (អារម្មណ៍ ៦ ដ៏ច្រើន)។',
    aE: 'Lokiya citta means consciousness that knows objects within the world (the many sense objects).',
  },
  {
    qK: 'ដូចម្តេចហៅថាលោកុត្តរចិត្ត?',
    qE: 'What is called lokuttara citta (supramundane consciousness)?',
    aK: 'លោកុត្តរចិត្ត មានន័យថា ចិត្តដែលដឹងព្រះនិព្វានជាអារម្មណ៍។',
    aE: 'Lokuttara citta means consciousness that knows Nibbāna as its object.',
  },
]

const ekaggataQas = [
  {
    qK: 'ដូចម្តេចហៅថាធម្មជាតិ?',
    qE: 'What is called "dhammatā" (nature)?',
    aK: 'ធម្មជាតិ មានន័យថា អ្វីៗដែលកើតមានធម្មតា។',
    aE: 'Dhammatā (nature) means whatever arises as a matter of natural course.',
  },
  {
    qK: 'ដូចម្តេចហៅថាសម្បយុត្តធម៌?',
    qE: 'What is called sampayutta dhamma (associated dhammas)?',
    aK: 'សម្បយុត្តធម៌ មានន័យថា ធម៌ដែលកើតរួមគ្នា មិនបែកគ្នា នៃចិត្ត និងចេតសិក។',
    aE: 'Sampayutta dhamma means the dhammas that arise together without separation — consciousness together with its mental factors.',
  },
  {
    qK: 'តើឯកគ្គតាចេតសិក មានអត្ថដូចម្តេចខ្លះ?',
    qE: 'What is the meaning of ekaggatā cetasika?',
    aK: 'ឯកគ្គតាចេតសិក មានន័យថា ធម្មជាតិស្ងប់ និងធ្វើឱ្យសម្បយុត្តធម៌ តាំងនៅក្នុងអារម្មណ៍តែមួយដូចគ្នា។',
    aE: 'Ekaggatā cetasika means the nature that is calm and that settles the associated dhammas upon one single object.',
  },
  {
    qK: 'តើឯកគ្គតាចេតសិក ស្ថិតក្នុងក្រុមណា? ពួកណា?',
    qE: 'In which group and class does ekaggatā belong?',
    aK: 'ឯកគ្គតាចេតសិក ស្ថិតក្នុងក្រុមអញ្ញសមានាចេតសិក ពួកសព្វចិត្តសាធារណចេតសិក។',
    aE: 'Ekaggatā belongs to the aññasamānā group, in the sabbacitta-sādhāraṇa class.',
  },
  {
    qK: 'តើឯកគ្គតាចេតសិក ចាត់ជាខន្ធអ្វី?',
    qE: 'To which aggregate is ekaggatā classed?',
    aK: 'ឯកគ្គតាចេតសិក ជាសង្ខារក្ខន្ធ។',
    aE: 'Ekaggatā is classed as the saṅkhāra-khandha.',
  },
  {
    qK: 'តើឯកគ្គតាចេតសិក ជារូបធម៌ ឬនាមធម៌?',
    qE: 'Is ekaggatā a rūpa-dhamma or a nāma-dhamma?',
    aK: 'ឯកគ្គតាចេតសិក ជានាមធម៌។',
    aE: 'Ekaggatā is a nāma-dhamma.',
  },
  {
    qK: 'តើឯកគ្គតាចេតសិក មានលក្ខណៈដូចម្តេច?',
    qE: 'What is the characteristic of ekaggatā cetasika?',
    aK: 'ឯកគ្គតាចេតសិក មានការមិនរវើរវាយ ជាលក្ខណៈ។',
    aE: 'Ekaggatā has the characteristic of non-scattering (undistractedness).',
  },
  {
    qK: 'តើឯកគ្ឡតាចេតសិក មានកិច្ចដូចម្តេច?',
    qE: 'What is the function of ekaggatā cetasika?',
    aK: 'ឯកគ្គតាចេតសិក មានការប្រមូលសហជាតធម៌មក ជាកិច្ច។',
    aE: 'Ekaggatā has the function of gathering together the co-arisen (sahajāta) dhammas.',
  },
  {
    qK: 'តើឯកគ្គតាចេតសិក មានអាការប្រាកដដូចម្តេច?',
    qE: 'What is the manifestation of ekaggatā cetasika?',
    aK: 'ឯកគ្គតាចេតសិក មានការចូលទៅស្ងប់ ជាអាការប្រាកដ។',
    aE: 'Ekaggatā manifests as entering into peace (calm).',
  },
  {
    qK: 'តើឯកគ្គតាចេតសិក មានហេតុជិតដូចម្តេច?',
    qE: 'What is the proximate cause of ekaggatā cetasika?',
    aK: 'ឯកគ្គតាចេតសិក មានសុខវេទនា ជាហេតុជិត។',
    aE: 'Ekaggatā has pleasant feeling (sukha-vedanā) as its proximate cause.',
  },
  {
    qK: 'តើសមាធិ អង្គធម៌បានដល់អ្វី?',
    qE: 'What dhamma constitutes samādhi (concentration)?',
    aK: 'សមាធិ អង្គធម៌បានដល់ ឯកគ្គតាចេតសិក។',
    aE: 'Samādhi is constituted by the ekaggatā cetasika.',
  },
  {
    qK: 'តើសមាធិមានប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'How many kinds of samādhi are there? Which are they?',
    aK: 'សមាធិ មាន ២ យ៉ាង គឺ ៖ មិច្ឆាសមាធិ សមាធិខុស ។ សម្មាសមាធិ សមាធិត្រូវ។',
    aE: 'Samādhi has two kinds: wrong concentration (micchā-samādhi) and right concentration (sammā-samādhi).',
  },
  {
    qK: 'ខណៈខឹងច្រលោត តើមានឯកគ្គតាចេតសិកដែរឬទេ?',
    qE: 'At the moment of anger/agitation, is there ekaggatā present?',
    aK: 'ខណៈខឹងច្រលោត មានឯកគ្គតាចេតសិក គឺធ្វើតួនាទីផ្តោតចិត្តឱ្យនៅក្នុងអារម្មណ៍តែមួយ។',
    aE: 'Even at the moment of anger/agitation, ekaggatā is present, performing the role of focusing the mind upon one single object.',
  },
  {
    qK: 'ខណៈចិត្តស្ងប់ក្នុងអារម្មណ៍តែមួយ តើមានឯកគ្គតាចេតសិកដែរឬទេ?',
    qE: 'At the moment the mind is calm upon one object, is there ekaggatā present?',
    aK: 'ខណៈចិត្តស្ងប់ក្នុងអារម្មណ៍តែមួយ គឺមានឯកគ្គតាចេតសិក ធ្វើតួនាទីនាំសម្បយុត្តធម៌ឱ្យស្ងប់ក្នុងអារម្មណ៍តែមួយ ដូចខ្លួនដែរ។',
    aE: 'When the mind is calm upon one object, ekaggatā is present, leading the associated dhammas to settle upon one object just as itself.',
  },
  {
    qK: 'ខណៈចិត្តរវើរវាយ តើមានឯកគ្គតាចេតសិកដែរឬទេ? ហើយមានកម្លាំងខ្លាំងដែរឬទេ?',
    qE: 'At the moment the mind is distracted, is ekaggatā present? And is it strong?',
    aK: 'ខណៈចិត្តរវើរវាយ គឺមានឯកគ្គតាចេតសិកប្រកបក្នុងចិត្តនោះដែរ ឯកគ្គតាមានកម្លាំងខ្សោយ ប៉ុន្តែវានៅតែបំពេញតួនាទីនាំសម្បយុត្តធម៌ឱ្យតាំងក្នុងអារម្មណ៍តែមួយ។',
    aE: 'At the moment the mind is distracted, ekaggatā is indeed present in that mind, but its strength is weak; nevertheless it still performs its role of leading the associated dhammas to settle upon one object.',
  },
  {
    qK: 'តើសហជាតិធម៌មានន័យដូចម្តេច?',
    qE: 'What does sahajāta dhamma mean?',
    aK: 'សហជាតិធម៌ មានន័យថា ធម៌សហការគ្នា រវាងចេតសិក និងចេតសិក រវាងចេតសិក និងចិត្ត រវាងចិត្ត និងរូប។',
    aE: 'Sahajāta dhamma means the mutually co-operating dhammas: cetasika with cetasika, cetasika with consciousness, and consciousness with matter.',
  },
  {
    qK: 'តើឯកគ្គតាចេតសិក កើតក្នុងចិត្តប៉ុន្មានដួង?',
    qE: 'In how many consciousnesses does ekaggatā arise?',
    aK: 'ឯកគ្គតាចេតសិក កើតក្នុងចិត្ត ៨៩ ដួង ឬ ១២១ ដួង។',
    aE: 'Ekaggatā arises in 89 (or 121) consciousnesses.',
  },
  {
    qK: 'តើឯកគ្គតាចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានជាតិ? អ្វីខ្លះ?',
    qE: 'In how many jātis does ekaggatā arise? Which are they?',
    aK: 'ឯកគ្គតាចេតសិក កើតក្នុងចិត្តបាន ៤ ជាតិ គឺ អកុសលជាតិ កុសលជាតិ វិបាកជាតិ និងកិរិយាជាតិ។',
    aE: 'Ekaggatā arises in all four jātis: the unwholesome, wholesome, resultant, and functional.',
  },
  {
    qK: 'តើឯកគ្គតាចេតសិក ប្រព្រឹត្តតាមទ្វារប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'Through how many doors does ekaggatā operate? Which are they?',
    aK: 'ឯកគ្គតាចេតសិក ប្រព្រឹត្តតាមទ្វារវិមុត្ត និងទ្វារ ៦ មាន ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជីវ្ហាទ្វារ កាយទ្វារ មនោទ្វារ។',
    aE: 'Ekaggatā operates through the door-free consciousness and the six doors: eye, ear, nose, tongue, body, and mind.',
  },
  {
    qK: 'តើឯកគ្គតាចេតសិក ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can ekaggatā know? Which are they?',
    aK: 'ឯកគ្គតាចេតសិក ដឹងអារម្មណ៍ ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និងធម្មារម្មណ៍។',
    aE: 'Ekaggatā knows six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើឯកគ្គតាចេតសិក កើតអាស្រ័យវត្ថុបានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'On how many bases does ekaggatā arise? Which are they?',
    aK: 'ឯកគ្គតាចេតសិក កើតអាស្រ័យវត្ថុបាន ៦ គឺ ចក្ខុវត្ថុ សោតវត្ថុ ឃានវត្ថុ ជីវ្ហាវត្ថុ កាយវត្ថុ និងហទយវត្ថុ។',
    aE: 'Ekaggatā arises dependent on six bases: eye, ear, nose, tongue, body, and heart-base.',
  },
  {
    qK: 'តើឯកគ្គតាចេតសិក ជាហេតុ ឬនហេតុ?',
    qE: 'Is ekaggatā a hetu or a non-hetu?',
    aK: 'ឯកគ្គតាចេតសិក ជា នហេតុ។',
    aE: 'Ekaggatā is a non-hetu.',
  },
  {
    qK: 'តើឯកគ្គតាចេតសិក កើតក្នុងអសោភណចិត្ត ឬសោភណចិត្ត?',
    qE: 'Does ekaggatā arise in non-beautiful or beautiful consciousness?',
    aK: 'ឯកគ្គតាចេតសិក កើតក្នុងអសោភណចិត្តផង និងសោភណចិត្តផង។',
    aE: 'Ekaggatā arises in both non-beautiful and beautiful consciousness.',
  },
  {
    qK: 'តើឯកគ្គតាចេតសិក កើតក្នុងលោកិយចិត្ត ឬលោកុត្តរចិត្ត?',
    qE: 'Does ekaggatā arise in worldly or supramundane consciousness?',
    aK: 'ឯកគ្គតាចេតសិក កើតក្នុងលោកិយចិត្តផង និងលោកុត្តរចិត្តផង។',
    aE: 'Ekaggatā arises in both worldly and supramundane consciousness.',
  },
]
</script>