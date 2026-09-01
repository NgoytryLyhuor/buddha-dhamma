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

    <!-- ===== Section 8: ជីវិតិន្រ្ទិយចេតសិក ===== -->
    <h2 v-if="!searching || filteredJivitindriya.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ជីវិតិន្រ្ទិយចេតសិក', 'Jīvitindriya (Life Faculty)') }}
    </h2>
    <div v-if="!searching || filteredJivitindriya.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredJivitindriya" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 9: មនសិការចេតសិក ===== -->
    <h2 v-if="!searching || filteredManasikara.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('មនសិការចេតសិក', 'Manasikāra (Attention)') }}
    </h2>
    <div v-if="!searching || filteredManasikara.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredManasikara" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 10: ចែកសព្វចិត្តសាធារណៈ ដោយខន្ធ និងដោយជាតិ ===== -->
    <h2 v-if="!searching || filteredSabbaByKhandhaJati.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ចែកសព្វចិត្តសាធារណៈ ដោយខន្ធ និងដោយជាតិ', 'Dividing the Universals by Aggregates and by Jāti') }}
    </h2>
    <div v-if="!searching || filteredSabbaByKhandhaJati.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredSabbaByKhandhaJati" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 11: ចែកសព្វចិត្តសាធារណៈ ដោយទ្វារ ===== -->
    <h2 v-if="!searching || filteredSabbaByDvara.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ចែកសព្វចិត្តសាធារណៈ ដោយទ្វារ', 'Dividing the Universals by Door') }}
    </h2>
    <div v-if="!searching || filteredSabbaByDvara.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredSabbaByDvara" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 12: ចែកសព្វចិត្តសាធារណៈ ដោយអារម្មណ៍ ===== -->
    <h2 v-if="!searching || filteredSabbaByArammana.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ចែកសព្វចិត្តសាធារណៈ ដោយអារម្មណ៍', 'Dividing the Universals by Object') }}
    </h2>
    <div v-if="!searching || filteredSabbaByArammana.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredSabbaByArammana" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 13: ចែកសព្វចិត្តសាធារណៈ ដោយភូមិ ===== -->
    <h2 v-if="!searching || filteredSabbaByBhumi.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ចែកសព្វចិត្តសាធារណៈ ដោយភូមិ', 'Dividing the Universals by Plane') }}
    </h2>
    <div v-if="!searching || filteredSabbaByBhumi.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredSabbaByBhumi" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 14: ចែកសព្វចិត្តសាធារណៈ ដោយវត្ថុ ===== -->
    <h2 v-if="!searching || filteredSabbaByVatthu.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ចែកសព្វចិត្តសាធារណៈ ដោយវត្ថុ', 'Dividing the Universals by Base') }}
    </h2>
    <div v-if="!searching || filteredSabbaByVatthu.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredSabbaByVatthu" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 15: ចែកសព្វចិត្តសាធារណៈ ដោយហេតុ ===== -->
    <h2 v-if="!searching || filteredSabbaByHetu.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ចែកសព្វចិត្តសាធារណៈ ដោយហេតុ', 'Dividing the Universals by Root (Hetu)') }}
    </h2>
    <div v-if="!searching || filteredSabbaByHetu.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredSabbaByHetu" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 16: ចែកសព្វចិត្តសាធារណៈ ដោយសោភណ ===== -->
    <h2 v-if="!searching || filteredSabbaBySobhana.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ចែកសព្វចិត្តសាធារណៈ ដោយសោភណ', 'Dividing the Universals by Sobhana (Beauty)') }}
    </h2>
    <div v-if="!searching || filteredSabbaBySobhana.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredSabbaBySobhana" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 17: ចែកសព្វចិត្តសាធារណៈ ដោយលោកិយ និងលោកុត្តរ ===== -->
    <h2 v-if="!searching || filteredSabbaByLoka.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ចែកសព្វចិត្តសាធារណៈ ដោយលោកិយ និងលោកុត្តរ', 'Dividing the Universals by Worldly and Supramundane') }}
    </h2>
    <div v-if="!searching || filteredSabbaByLoka.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredSabbaByLoka" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 18: វិតក្កចេតសិក ===== -->
    <h2 v-if="!searching || filteredVitakka.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('វិតក្កចេតសិក', 'Vitakka (Applied Thought)') }}
    </h2>
    <div v-if="!searching || filteredVitakka.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredVitakka" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 19: វិចារចេតសិក ===== -->
    <h2 v-if="!searching || filteredVicara.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('វិចារចេតសិក', 'Vicāra (Sustained Thought)') }}
    </h2>
    <div v-if="!searching || filteredVicara.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredVicara" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 20: អធិមោក្ខចេតសិក ===== -->
    <h2 v-if="!searching || filteredAdhimokkha.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('អធិមោក្ខចេតសិក', 'Adhimokkha (Decision)') }}
    </h2>
    <div v-if="!searching || filteredAdhimokkha.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredAdhimokkha" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 21: វីរិយចេតសិក ===== -->
    <h2 v-if="!searching || filteredViriya.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('វីរិយចេតសិក', 'Viriya (Energy)') }}
    </h2>
    <div v-if="!searching || filteredViriya.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredViriya" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 22: បីតិចេតសិក ===== -->
    <h2 v-if="!searching || filteredPiti.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('បីតិចេតសិក', 'Pīti (Joy)') }}
    </h2>
    <div v-if="!searching || filteredPiti.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredPiti" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 23: ឆន្ទៈចេតសិក ===== -->
    <h2 v-if="!searching || filteredChanda.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ឆន្ទៈចេតសិក', 'Chanda (Intention/Will)') }}
    </h2>
    <div v-if="!searching || filteredChanda.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredChanda" :key="item.num" class="card-paper p-6 md:p-8">
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

const libLen = () =>
  introQas.length + fiftyTwoQas.length + phassaQas.length + vedanaQas.length + sannaQas.length +
  cetanaQas.length + ekaggataQas.length + jivitindriyaQas.length + manasikaraQas.length +
  sabbaByKhandhaJatiQas.length + sabbaByDvaraQas.length + sabbaByArammanaQas.length +
  sabbaByBhumiQas.length + sabbaByVatthuQas.length + sabbaByHetuQas.length +
  sabbaBySobhanaQas.length + sabbaByLokaQas.length + vitakkaQas.length +
  vicaraQas.length + adhimokkhaQas.length + viriyaQas.length + pitiQas.length + chandaQas.length

const filteredIntro = computed(() => indexed(introQas, 0))
const filteredFiftyTwo = computed(() => indexed(fiftyTwoQas, introQas.length))
const filteredPhassa = computed(() => indexed(phassaQas, introQas.length + fiftyTwoQas.length))
const filteredVedana = computed(() => indexed(vedanaQas, introQas.length + fiftyTwoQas.length + phassaQas.length))
const filteredSanna = computed(() => indexed(sannaQas, introQas.length + fiftyTwoQas.length + phassaQas.length + vedanaQas.length))
const filteredCetana = computed(() => indexed(cetanaQas, introQas.length + fiftyTwoQas.length + phassaQas.length + vedanaQas.length + sannaQas.length))
const filteredEkaggata = computed(() => indexed(ekaggataQas, introQas.length + fiftyTwoQas.length + phassaQas.length + vedanaQas.length + sannaQas.length + cetanaQas.length))
const filteredJivitindriya = computed(() => indexed(jivitindriyaQas, libLen() - jivitindriyaQas.length - manasikaraQas.length - sabbaByKhandhaJatiQas.length - sabbaByDvaraQas.length - sabbaByArammanaQas.length - sabbaByBhumiQas.length - sabbaByVatthuQas.length - sabbaByHetuQas.length - sabbaBySobhanaQas.length - sabbaByLokaQas.length - vitakkaQas.length))
const filteredManasikara = computed(() => indexed(manasikaraQas, libLen() - manasikaraQas.length - sabbaByKhandhaJatiQas.length - sabbaByDvaraQas.length - sabbaByArammanaQas.length - sabbaByBhumiQas.length - sabbaByVatthuQas.length - sabbaByHetuQas.length - sabbaBySobhanaQas.length - sabbaByLokaQas.length - vitakkaQas.length))
const filteredSabbaByKhandhaJati = computed(() => indexed(sabbaByKhandhaJatiQas, libLen() - sabbaByKhandhaJatiQas.length - sabbaByDvaraQas.length - sabbaByArammanaQas.length - sabbaByBhumiQas.length - sabbaByVatthuQas.length - sabbaByHetuQas.length - sabbaBySobhanaQas.length - sabbaByLokaQas.length - vitakkaQas.length))
const filteredSabbaByDvara = computed(() => indexed(sabbaByDvaraQas, sabbaByDvaraOffset()))
const filteredSabbaByArammana = computed(() => indexed(sabbaByArammanaQas, sabbaByArammanaOffset()))
const filteredSabbaByBhumi = computed(() => indexed(sabbaByBhumiQas, sabbaByBhumiOffset()))
const filteredSabbaByVatthu = computed(() => indexed(sabbaByVatthuQas, sabbaByVatthuOffset()))
const filteredSabbaByHetu = computed(() => indexed(sabbaByHetuQas, sabbaByHetuOffset()))
const filteredSabbaBySobhana = computed(() => indexed(sabbaBySobhanaQas, sabbaBySobhanaOffset()))
const filteredSabbaByLoka = computed(() => indexed(sabbaByLokaQas, sabbaByLokaOffset()))
const filteredVitakka = computed(() => indexed(vitakkaQas, libLen() - vitakkaQas.length - vicaraQas.length - adhimokkhaQas.length - viriyaQas.length - pitiQas.length - chandaQas.length))
const filteredVicara = computed(() => indexed(vicaraQas, libLen() - vicaraQas.length - adhimokkhaQas.length - viriyaQas.length - pitiQas.length - chandaQas.length))
const filteredAdhimokkha = computed(() => indexed(adhimokkhaQas, libLen() - adhimokkhaQas.length - viriyaQas.length - pitiQas.length - chandaQas.length))
const filteredViriya = computed(() => indexed(viriyaQas, libLen() - viriyaQas.length - pitiQas.length - chandaQas.length))
const filteredPiti = computed(() => indexed(pitiQas, libLen() - pitiQas.length - chandaQas.length))
const filteredChanda = computed(() => indexed(chandaQas, libLen() - chandaQas.length))

const baseOffset = () =>
  introQas.length + fiftyTwoQas.length + phassaQas.length + vedanaQas.length + sannaQas.length +
  cetanaQas.length + ekaggataQas.length + jivitindriyaQas.length + manasikaraQas.length +
  sabbaByKhandhaJatiQas.length
const sabbaByDvaraOffset = () => baseOffset()
const sabbaByArammanaOffset = () => baseOffset() + sabbaByDvaraQas.length
const sabbaByBhumiOffset = () => baseOffset() + sabbaByDvaraQas.length + sabbaByArammanaQas.length
const sabbaByVatthuOffset = () => baseOffset() + sabbaByDvaraQas.length + sabbaByArammanaQas.length + sabbaByBhumiQas.length
const sabbaByHetuOffset = () => baseOffset() + sabbaByDvaraQas.length + sabbaByArammanaQas.length + sabbaByBhumiQas.length + sabbaByVatthuQas.length
const sabbaBySobhanaOffset = () => baseOffset() + sabbaByDvaraQas.length + sabbaByArammanaQas.length + sabbaByBhumiQas.length + sabbaByVatthuQas.length + sabbaByHetuQas.length
const sabbaByLokaOffset = () => baseOffset() + sabbaByDvaraQas.length + sabbaByArammanaQas.length + sabbaByBhumiQas.length + sabbaByVatthuQas.length + sabbaByHetuQas.length + sabbaBySobhanaQas.length

const totalMatches = computed(() =>
  filteredIntro.value.length + filteredFiftyTwo.value.length + filteredPhassa.value.length +
  filteredVedana.value.length + filteredSanna.value.length + filteredCetana.value.length +
  filteredEkaggata.value.length + filteredJivitindriya.value.length + filteredManasikara.value.length +
  filteredSabbaByKhandhaJati.value.length + filteredSabbaByDvara.value.length +
  filteredSabbaByArammana.value.length + filteredSabbaByBhumi.value.length + filteredSabbaByVatthu.value.length +
  filteredSabbaByHetu.value.length + filteredSabbaBySobhana.value.length + filteredSabbaByLoka.value.length +
  filteredVitakka.value.length + filteredVicara.value.length + filteredAdhimokkha.value.length +
  filteredViriya.value.length + filteredPiti.value.length + filteredChanda.value.length
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

const jivitindriyaQas = [
  {
    qK: 'តើជីវិតិន្រ្ទិយចេតសិក មានអត្ថដូចម្តេចខ្លះ?',
    qE: 'What is the meaning (attha) of jīvitindriya cetasika?',
    aK: 'ជីវិតិន្រ្ទិយចេតសិក មានន័យថា ធម៌រក្សាសម្បយុត្តធម៌ គឺធ្វើឱ្យសម្បយុត្តធម៌តាំងនៅ និងប្រព្រឹត្តទៅ។',
    aE: 'The jīvitindriya cetasika means the dhamma that sustains the associated dhammas, keeping them established and operating.',
  },
  {
    qK: 'តើជីវិតិន្រ្ទិយ អង្គធម៌បានដល់សភាវធម៌ប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'How many kinds of dhamma does the life-faculty (jīvitindriya) comprise? Which are they?',
    aK: 'ជីវិតិន្រ្ទិយ អង្គធម៌បានដល់សភាវធម៌ ២ យ៉ាង គឺ ជីវិតិន្រ្ទិយចេតសិក និង ជីវិតរូប។',
    aE: 'The life-faculty comprises two kinds of dhamma: the jīvitindriya cetasika and the jīvita-rūpa (material life-faculty).',
  },
  {
    qK: 'តើឥន្រ្ទិយ មានន័យដូចម្តេច?',
    qE: 'What does indriya mean?',
    aK: 'ឥន្រ្ទិយ មានន័យថា ភាពជាធំ។',
    aE: 'Indriya means lordship or dominance (to be chief).',
  },
  {
    qK: 'តើក្នុងបរមត្ថធម៌ ៤ មានឥន្រ្ទិយសរុបប៉ុន្មាន?',
    qE: 'In the four paramattha dhammas, how many indriyas are there in total?',
    aK: 'ក្នុងបរមត្ថធម៌ ៤ មានឥន្រ្ទិយសរុប ២២ ។',
    aE: 'In the four paramattha dhammas, there are 22 indriyas in total.',
  },
  {
    qK: 'តើជីវិតិន្រ្ទិយចេតសិក ចាត់ជាខន្ធអ្វី?',
    qE: 'To which aggregate is the jīvitindriya cetasika classed?',
    aK: 'ជីវិតិន្រ្ទិយចេតសិក ចាត់ជា សង្ខារក្ខន្ធ។',
    aE: 'The jīvitindriya cetasika is classed as the saṅkhāra-khandha.',
  },
  {
    qK: 'តើជីវិតិន្រ្ទិយចេតសិក ជារូបធម៌ ឬនាមធម៌?',
    qE: 'Is the jīvitindriya cetasika a rūpa-dhamma or a nāma-dhamma?',
    aK: 'ជីវិតិន្រ្ទិយចេតសិក ជា នាមធម៌។',
    aE: 'The jīvitindriya cetasika is a nāma-dhamma.',
  },
  {
    qK: 'តើជីវិតិន្រ្ទិយចេតសិក មានលក្ខណៈដូចម្តេច?',
    qE: 'What is the characteristic of the jīvitindriya cetasika?',
    aK: 'ជីវិតិន្រ្ទិយចេតសិក មានការតាមរក្សាសហជាតធម៌ ជាលក្ខណៈ ប្រៀបដូចទឹករក្សាផ្កាឈូក ជាដើម។',
    aE: 'The jīvitindriya cetasika has the characteristic of maintaining the co-arisen dhammas, like water that keeps the lotus flowers alive.',
  },
  {
    qK: 'តើជីវិតិន្រ្ទិយចេតសិក មានកិច្ចដូចម្តេច?',
    qE: 'What is the function of the jīvitindriya cetasika?',
    aK: 'ជីវិតិន្រ្ទិយចេតសិក មានការញាំងសម្បយុត្តធម៌ឱ្យប្រព្រឹត្តទៅ ជាកិច្ច។',
    aE: 'The jīvitindriya cetasika has the function of making the associated dhammas occur.',
  },
  {
    qK: 'តើជីវិតិន្រ្ទិយចេតសិក មានអាការប្រាកដដូចម្តេច?',
    qE: 'What is the manifestation of the jīvitindriya cetasika?',
    aK: 'ជីវិតិន្រ្ទិយចេតសិក មានការតាំងនៅនៃសហជាតធម៌ ជាអាការប្រាកដ។',
    aE: 'The jīvitindriya cetasika manifests as the continued existence of the co-arisen dhammas.',
  },
  {
    qK: 'តើជីវិតិន្រ្ទិយចេតសិក មានហេតុជិតដូចម្តេច?',
    qE: 'What is the proximate cause of the jīvitindriya cetasika?',
    aK: 'ជីវិតិន្រ្ទិយ មានខន្ធ ៣ (វេទនាខន្ធ សញ្ញាខន្ធ វិញ្ញាណក្ខន្ធ) ដែលនៅសល់ ជាហេតុជិត។',
    aE: 'The jīvitindriya has the three remaining aggregates (vedanā, saññā, viññāṇa) as its proximate cause.',
  },
  {
    qK: 'តើរុក្ខជាតិ ដូចជា ព្រៃឈើ មានជីវិតិន្រ្ទិយដែរឬទេ? ហេតុអ្វី?',
    qE: 'Do plants, such as forests, have a life-faculty (jīvitindriya)? Why?',
    aK: 'រុក្ខជាតិ ដូចជា ព្រៃឈើ មិនមានជីវិតិន្រ្ទិយទេ ព្រោះរុក្ខជាតិទាំងអស់ មិនមានវិញ្ញាណ ហើយកើតពីឧតុ (អាកាសធាតុ)។',
    aE: 'Plants, such as forests, do not have a life-faculty, because all plants have no consciousness (viññāṇa) and arise from season/climate (utu).',
  },
  {
    qK: 'តើការកាប់ព្រៃឈើ ដាច់បាណាតិបាតដែរឬទេ?',
    qE: 'Does cutting down a forest incur pāṇātipāta (killing)?',
    aK: 'ការកាប់ព្រៃឈើ មិនដាច់បាណាតិបាតទេ ព្រោះព្រៃឈើ មិនមានវិញ្ញាណ ហើយកើតពីឧតុ (អាកាសធាតុ)។',
    aE: 'Cutting down a forest does not incur pāṇātipāta, because forests have no consciousness and arise from season (utu).',
  },
  {
    qK: 'តើជីវិតិន្រ្ទិយចេតសិក កើតក្នុងចិត្តប៉ុន្មានដួង?',
    qE: 'In how many consciousnesses does the jīvitindriya cetasika arise?',
    aK: 'ជីវិតិន្រ្ទិយចេតសិក កើតក្នុងចិត្ត ៨៩ ដួង ឬ ១២១ ដួង។',
    aE: 'The jīvitindriya cetasika arises in 89 (or 121) consciousnesses.',
  },
  {
    qK: 'តើជីវិតិន្រ្ទិយចេតសិក ស្ថិតក្នុងក្រុមណា? ពួកណា?',
    qE: 'In which group and class does the jīvitindriya cetasika belong?',
    aK: 'ជីវិតិន្រ្ទិយចេតសិក ស្ថិតក្នុងក្រុមអញ្ញសមានាចេតសិក ពួកសព្វចិត្តសាធារណចេតសិក។',
    aE: 'The jīvitindriya cetasika belongs to the aññasamānā group, the sabba-citta-sādhāraṇa class.',
  },
  {
    qK: 'តើជីវិតិន្រ្ទិយចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានជាតិ? អ្វីខ្លះ?',
    qE: 'In how many jātis does the jīvitindriya cetasika arise? Which are they?',
    aK: 'ជីវិតិន្រ្ទិយចេតសិក កើតក្នុងចិត្តបាន ៤ ជាតិ គឺ អកុសលជាតិ កុសលជាតិ វិបាកជាតិ និងកិរិយាជាតិ។',
    aE: 'The jīvitindriya cetasika arises in all four jātis: the unwholesome, wholesome, resultant, and functional.',
  },
  {
    qK: 'តើជីវិតិន្រ្ទិយចេតសិក ប្រព្រឹត្តតាមទ្វារប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'Through how many doors does the jīvitindriya cetasika operate? Which are they?',
    aK: 'ជីវិតិន្រ្ទិយចេតសិក ប្រព្រឹត្តតាមទ្វារវិមុត្ត និងទ្វារ ៦ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជីវ្ហាទ្វារ កាយទ្វារ មនោទ្វារ។',
    aE: 'The jīvitindriya cetasika operates through the door-free consciousness and the six doors: eye, ear, nose, tongue, body, and mind.',
  },
  {
    qK: 'តើជីវិតិន្រ្ទិយចេតសិក ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can the jīvitindriya cetasika know? Which are they?',
    aK: 'ជីវិតិន្រ្ទិយចេតសិក ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និងធម្មារម្មណ៍។',
    aE: 'The jīvitindriya cetasika knows six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើជីវិតិន្រ្ទិយចេតសិក កើតអាស្រ័យវត្ថុប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'On how many bases does the jīvitindriya cetasika arise? Which are they?',
    aK: 'ជីវិតិន្រ្ទិយចេតសិក កើតអាស្រ័យវត្ថុ ៦ គឺ ចក្ខុវត្ថុ សោតវត្ថុ ឃានវត្ថុ ជីវ្ហាវត្ថុ កាយវត្ថុ និងហទយវត្ថុ។',
    aE: 'The jīvitindriya cetasika arises dependent on six bases: eye, ear, nose, tongue, body, and heart-base.',
  },
  {
    qK: 'តើជីវិតិន្រ្ទិយចេតសិក កើតក្នុងចិត្តប៉ុន្មានប្រភេទ ក្នុងចំណោមចិត្ត ៤ ប្រភេទ?',
    qE: 'In how many of the four classes of consciousness does the jīvitindriya cetasika arise?',
    aK: 'ជីវិតិន្រ្ទិយចេតសិក កើតក្នុងចិត្ត ៤ ប្រភេទ គឺ កាមាវចរចិត្ត រូបាវចរចិត្ត អរូបាវចរចិត្ត និងលោកុត្តរចិត្ត។',
    aE: 'The jīvitindriya cetasika arises in all four classes: sense-sphere, form-sphere, formless-sphere, and supramundane consciousness.',
  },
  {
    qK: 'តើជីវិតិន្រ្ទិយចេតសិក ជាហេតុ ឬនហេតុ?',
    qE: 'Is the jīvitindriya cetasika a hetu or a non-hetu?',
    aK: 'ជីវិតិន្រ្ទិយចេតសិក ជា នហេតុ។',
    aE: 'The jīvitindriya cetasika is a non-hetu.',
  },
  {
    qK: 'តើជីវិតិន្រ្ទិយចេតសិក កើតក្នុងអសោភណចិត្ត ឬសោភណចិត្ត?',
    qE: 'Does the jīvitindriya cetasika arise in non-beautiful or beautiful consciousness?',
    aK: 'ជីវិតិន្រ្ទិយចេតសិក កើតក្នុងអសោភណចិត្តផង និងសោភណចិត្តផង។',
    aE: 'The jīvitindriya cetasika arises in both non-beautiful and beautiful consciousness.',
  },
  {
    qK: 'តើជីវិតិន្រ្ទិយចេតសិក កើតក្នុងលោកិយចិត្ត ឬលោកុត្តរចិត្ត?',
    qE: 'Does the jīvitindriya cetasika arise in worldly or supramundane consciousness?',
    aK: 'ជីវិតិន្រ្ទិយចេតសិក កើតក្នុងលោកិយចិត្តផង និងលោកុត្តរចិត្តផង។',
    aE: 'The jīvitindriya cetasika arises in both worldly and supramundane consciousness.',
  },
  {
    qK: 'តើខណៈបដិសន្ធិ មានជីវិតិន្រ្ទិយចេតសិកដែរឬទេ? ហេតុអ្វី?',
    qE: 'At the moment of rebirth-linking (paṭisandhi), is there the jīvitindriya cetasika? Why?',
    aK: 'ខណៈបដិសន្ធិ គឺមានជីវិតិន្រ្ទិយចេតសិក ព្រោះបដិសន្ធិជាកិច្ចរបស់ចិត្ត ហើយជីវិតិន្រ្ទិយចេតសិក កើតគ្រប់ចិត្តទាំងអស់។',
    aE: 'At the moment of rebirth-linking, there is the jīvitindriya cetasika, because rebirth-linking is a function of consciousness and the jīvitindriya cetasika arises in all consciousnesses.',
  },
  {
    qK: 'តើខណៈចុតិចិត្តចុងក្រោយ មានជីវិតិន្រ្ទិយចេតសិកដែរឬទេ? ហេតុអ្វី?',
    qE: 'At the moment of the last death-consciousness (cuti), is there the jīvitindriya cetasika? Why?',
    aK: 'ខណៈចុតិចិត្តចុងក្រោយ គឺមានជីវិតិន្រ្ទិយចេតសិកប្រកបក្នុងចុតិចិត្តនោះ ព្រោះជីវិតិន្រ្ទិយចេតសិក ជាសព្វចិត្តសាធារណចេតសិក គឺកើតគ្រប់ចិត្តទាំងអស់។',
    aE: 'At the moment of the last death-consciousness, the jīvitindriya cetasika is present in that cuti-citta, because it is a sabba-citta-sādhāraṇa cetasika that arises in all consciousnesses.',
  },
]

const manasikaraQas = [
  {
    qK: 'តើមនសិការចេតសិក មានអត្ថដូចម្តេច?',
    qE: 'What is the meaning (attha) of manasikāra cetasika?',
    aK: 'មនសិការចេតសិក មានន័យថា ធម្មជាតិនាំសម្បយុត្តធម៌ទៅកាន់អារម្មណ៍។',
    aE: 'The manasikāra cetasika means the nature that directs the associated dhammas towards the object.',
  },
  {
    qK: 'តើមនសិការចេតសិក មានលក្ខណៈដូចម្តេច?',
    qE: 'What is the characteristic of the manasikāra cetasika?',
    aK: 'មនសិការចេតសិក មានការធ្វើឱ្យសម្បយុត្តធម៌ត្រាច់ទៅ ជាលក្ខណៈ។',
    aE: 'The manasikāra cetasika has the characteristic of impelling the associated dhammas to go (towards the object).',
  },
  {
    qK: 'តើមនសិការចេតសិក មានកិច្ចដូចម្តេច?',
    qE: 'What is the function of the manasikāra cetasika?',
    aK: 'មនសិការចេតសិក មានការញាំងសម្បយុត្តធម៌ឱ្យប្រកបក្នុងអារម្មណ៍ ជាកិច្ច។',
    aE: 'The manasikāra cetasika has the function of joining the associated dhammas to the object.',
  },
  {
    qK: 'តើមនសិការចេតសិក មានអាការប្រាកដដូចម្តេច?',
    qE: 'What is the manifestation of the manasikāra cetasika?',
    aK: 'មនសិការចេតសិក មានការធ្វើឱ្យសម្បយុត្តធម៌តម្រង់មុខឆ្ពោះទៅទល់នឹងអារម្មណ៍ ជាអាការប្រាកដ។',
    aE: 'The manasikāra cetasika manifests as facing the associated dhammas directly towards the object.',
  },
  {
    qK: 'តើមនសិការចេតសិក មានហេតុជិតដូចម្តេច?',
    qE: 'What is the proximate cause of the manasikāra cetasika?',
    aK: 'មនសិការចេតសិក មានអារម្មណ៍ ជាហេតុជិត។',
    aE: 'The manasikāra cetasika has the object as its proximate cause.',
  },
  {
    qK: 'តើមនសិការចេតសិក និងចេតនាចេតសិក ខុសគ្នា ឬដូចគ្នា? ចូរពន្យល់?',
    qE: 'Are the manasikāra and cetanā cetasikas different or the same? Explain.',
    aK: 'មនសិការចេតសិក និងចេតនាចេតសិក មិនដូចគ្នាទេ សភាវធម៌ខុសគ្នា តួនាទីខុសគ្នា គឺមនសិការ មានតួនាទីដឹកនាំសម្បយុត្តធម៌ ដែលកើតនឹងខ្លួន ឱ្យទៅកាន់អារម្មណ៍ ចំណែកចេតនាចេតសិក មានតួនាទីផ្គងចិត្ត គឺដាស់តឿនសម្បយុត្តធម៌ ដែលកើតនឹងខ្លួន ឱ្យធ្វើកិច្ចរបស់ខ្លួន។',
    aE: 'The manasikāra and cetanā cetasikas are not the same; their natures differ and their roles differ. Manasikāra has the role of guiding its co-arisen dhammas towards the object, while cetanā has the role of focusing the mind, urging its co-arisen dhammas to do their own tasks.',
  },
  {
    qK: 'តើមនសិការចេតសិក កើតក្នុងចិត្តប៉ុន្មានដួង?',
    qE: 'In how many consciousnesses does the manasikāra cetasika arise?',
    aK: 'មនសិការចេតសិក កើតក្នុងចិត្ត ៨៩ ដួង ឬ ១២១ ដួង។',
    aE: 'The manasikāra cetasika arises in 89 (or 121) consciousnesses.',
  },
  {
    qK: 'ហេតុអ្វីបានជាមនសិការចេតសិក កើតក្នុងចិត្តបាន ៨៩ ដួង ឬ ១២១ ដួង?',
    qE: 'Why does the manasikāra cetasika arise in 89 (or 121) consciousnesses?',
    aK: 'បានជាមនសិការចេតសិក កើតក្នុងចិត្ត ៨៩ ដួង ឬ ១២១ ដួង ព្រោះមនសិការចេតសិក ស្ថិតក្នុងពួកសព្វចិត្តសាធារណចេតសិក (ចេតសិកដែលកើតទូទៅដល់ចិត្តទាំងអស់)។',
    aE: 'The manasikāra cetasika arises in 89 (or 121) consciousnesses because it belongs to the sabba-citta-sādhāraṇa class, the cetasikas that arise commonly in all consciousnesses.',
  },
  {
    qK: 'តើមនសិការចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានជាតិ? អ្វីខ្លះ?',
    qE: 'In how many jātis does the manasikāra cetasika arise? Which are they?',
    aK: 'មនសិការចេតសិក កើតក្នុងចិត្តបាន ៤ ជាតិ គឺ អកុសលជាតិ កុសលជាតិ វិបាកជាតិ និងកិរិយាជាតិ។',
    aE: 'The manasikāra cetasika arises in all four jātis: the unwholesome, wholesome, resultant, and functional.',
  },
  {
    qK: 'តើមនសិការចេតសិក ចាត់ជាខន្ធអ្វី ក្នុងចំណោមខន្ធទាំង ៥?',
    qE: 'To which of the five aggregates is the manasikāra cetasika classed?',
    aK: 'មនសិការចេតសិក ចាត់ជា សង្ខារក្ខន្ធ ក្នុងចំណោមខន្ធទាំង ៥។',
    aE: 'The manasikāra cetasika is classed as the saṅkhāra-khandha, among the five aggregates.',
  },
  {
    qK: 'តើមនសិការចេតសិក ប្រព្រឹត្តតាមទ្វារប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'Through how many doors does the manasikāra cetasika operate? Which are they?',
    aK: 'មនសិការចេតសិក ប្រព្រឹត្តតាមទ្វារវិមុត្ត និងទ្វារ ៦ មាន ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជីវ្ហាទ្វារ កាយទ្វារ មនោទ្វារ។',
    aE: 'The manasikāra cetasika operates through the door-free consciousness and the six doors: eye, ear, nose, tongue, body, and mind.',
  },
  {
    qK: 'តើមនសិការចេតសិក ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can the manasikāra cetasika know? Which are they?',
    aK: 'មនសិការចេតសិក ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និងធម្មារម្មណ៍។',
    aE: 'The manasikāra cetasika knows six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើមនសិការចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានប្រភេទ ឬភូមិ?',
    qE: 'In how many classes or planes of consciousness does the manasikāra cetasika arise?',
    aK: 'មនសិការចេតសិក កើតក្នុងចិត្តបាន ៤ ប្រភេទ ឬ ៤ ភូមិ គឺ ៖ កាមាវចរចិត្ត ឬកាមាវចរភូមិ ។ រូបាវចរចិត្ត ឬរូបាវចរភូមិ ។ អរូបាវចរចិត្ត ឬអរូបាវចរភូមិ ។ លោកុត្តរចិត្ត ឬលោកុត្តរភូមិ។',
    aE: 'The manasikāra cetasika arises in four classes or planes: sense-sphere, form-sphere, formless-sphere, and supramundane.',
  },
  {
    qK: 'តើមនសិការចេតសិក អាស្រ័យវត្ថុបានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'On how many bases does the manasikāra cetasika depend? Which are they?',
    aK: 'មនសិការចេតសិក អាស្រ័យវត្ថុ ៦ គឺ ចក្ខុវត្ថុ សោតវត្ថុ ឃានវត្ថុ ជីវ្ហាវត្ថុ កាយវត្ថុ និងហទយវត្ថុ។',
    aE: 'The manasikāra cetasika depends on six bases: eye, ear, nose, tongue, body, and heart-base.',
  },
  {
    qK: 'តើមនសិការចេតសិក ជាហេតុ ឬនហេតុ?',
    qE: 'Is the manasikāra cetasika a hetu or a non-hetu?',
    aK: 'មនសិការចេតសិក ជា នហេតុ (មិនមែនហេតុ)។',
    aE: 'The manasikāra cetasika is a non-hetu (not a root).',
  },
  {
    qK: 'តើមនសិការចេតសិក កើតក្នុងអសោភណចិត្ត ឬសោភណចិត្ត? ហេតុអ្វី?',
    qE: 'Does the manasikāra cetasika arise in non-beautiful or beautiful consciousness? Why?',
    aK: 'មនសិការចេតសិក កើតក្នុងអសោភណចិត្តផង និងសោភណចិត្តផង ព្រោះមនសិការចេតសិក ជាសព្វចិត្តសាធារណចេតសិក ដែលកើតគ្រប់ចិត្តទាំងអស់។',
    aE: 'The manasikāra cetasika arises in both non-beautiful and beautiful consciousness, because it is a sabba-citta-sādhāraṇa cetasika that arises in all consciousnesses.',
  },
  {
    qK: 'តើមនសិការចេតសិក កើតក្នុងលោកិយចិត្ត ឬលោកុត្តរចិត្ត? ហេតុអ្វី?',
    qE: 'Does the manasikāra cetasika arise in worldly or supramundane consciousness? Why?',
    aK: 'មនសិការចេតសិក កើតក្នុងលោកិយចិត្តផង និងលោកុត្តរចិត្តផង ព្រោះមនសិការចេតសិក ជាសព្វចិត្តសាធារណចេតសិក ដែលកើតគ្រប់ចិត្តទាំងអស់។',
    aE: 'The manasikāra cetasika arises in both worldly and supramundane consciousness, because it is a sabba-citta-sādhāraṇa cetasika that arises in all consciousnesses.',
  },
]

const sabbaByKhandhaJatiQas = [
  {
    qK: 'តើខន្ធសរុបមានប៉ុន្មាន? ខន្ធអ្វីខ្លះ?',
    qE: 'How many aggregates (khandhas) are there in total? Which are they?',
    aK: 'ខន្ធសរុបមាន ៥ គឺ វិញ្ញាណក្ខន្ធ វេទនាខន្ធ សញ្ញាខន្ធ សង្ខារក្ខន្ធ និងរូបក្ខន្ធ។',
    aE: 'There are five aggregates in total: viññāṇa, vedanā, saññā, saṅkhāra, and rūpa.',
  },
  {
    qK: 'តើចិត្ត ៨៩ ដួង ឬ ១២១ ដួង មានប៉ុន្មានខន្ធ? ខន្ធអ្វីខ្លះ?',
    qE: 'How many aggregates do the 89 (or 121) consciousnesses have? Which are they?',
    aK: 'ចិត្ត ៨៩ ដួង ឬ ១២១ ដួង មានខន្ធ ១ គឺ វិញ្ញាណក្ខន្ធ។',
    aE: 'The 89 (or 121) consciousnesses have one aggregate, the viññāṇa-khandha.',
  },
  {
    qK: 'តើចេតសិក ៥២ មានប៉ុន្មានខន្ធ? ខន្ធអ្វីខ្លះ?',
    qE: 'How many aggregates do the 52 cetasikas have? Which are they?',
    aK: 'ចេតសិក ៥២ មានខន្ធ ៣ គឺ ៖ វេទនាចេតសិក ជាវេទនាខន្ធ ។ សញ្ញាចេតសិក ជាសញ្ញាខន្ធ ។ ចេតសិកនៅសល់ ៥០ ទៀត ជាសង្ខារក្ខន្ធ។',
    aE: 'The 52 cetasikas have three aggregates: the vedanā cetasika is the vedanā-khandha, the saññā cetasika is the saññā-khandha, and the remaining 50 cetasikas form the saṅkhāra-khandha.',
  },
  {
    qK: 'តើរូប ២៨ មានប៉ុន្មានខន្ធ? ខន្ធអ្វីខ្លះ?',
    qE: 'How many aggregates do the 28 rūpas have? Which are they?',
    aK: 'រូប ២៨ មាន ១ ខន្ធ គឺ រូបក្ខន្ធ។',
    aE: 'The 28 rūpas have one aggregate, the rūpa-khandha.',
  },
  {
    qK: 'តើនិព្វាន ចាត់ជាខន្ធអ្វី?',
    qE: 'To which aggregate is Nibbāna classed?',
    aK: 'និព្វាន ចាត់ជា ខន្ធវិមុត្ត ឬផុតស្រលះពីខន្ធ។',
    aE: 'Nibbāna is classed as beyond the aggregates (khandha-vimutta), free from the aggregates.',
  },
  {
    qK: 'បើចែកដោយខន្ធ តើសព្វចិត្តសាធារណចេតសិក ៧ បានខន្ធប៉ុន្មាន? ខន្ធអ្វីខ្លះ?',
    qE: 'Dividing by aggregate, how many aggregates do the seven sabba-citta-sādhāraṇa cetasikas yield? Which are they?',
    aK: 'បើចែកដោយខន្ធ សព្វចិត្តសាធារណចេតសិក ៧ បានខន្ធ ៣ គឺ ៖ វេទនាចេតសិក ជាវេទនាខន្ធ ។ សញ្ញាចេតសិក ជាសញ្ញាខន្ធ ។ ផស្សៈ ចេតនា ឯកគ្គតា ជីវិតិន្រ្ទិយ មនសិការ ជាសង្ខារក្ខន្ធ។',
    aE: 'Dividing by aggregate, the seven sabba-citta-sādhāraṇa cetasikas yield three aggregates: vedanā is the vedanā-khandha, saññā is the saññā-khandha, and phassa, cetanā, ekaggatā, jīvitindriya, and manasikāra form the saṅkhāra-khandha.',
  },
  {
    qK: 'តើចិត្ត ៨៩ ដួង ឬ ១២១ ដួង មានប៉ុន្មានជាតិ? ជាតិអ្វីខ្លះ?',
    qE: 'How many jātis do the 89 (or 121) consciousnesses have? Which are they?',
    aK: 'ចិត្ត ៨៩ ដួង ឬ ១២១ ដួង មាន ៤ ជាតិ គឺ ៖ អកុសលជាតិ ការកើតឡើងនៃធម៌មិនល្អ ។ កុសលជាតិ ការកើតឡើងនៃធម៌ជាកុសល ។ វិបាកជាតិ ការកើតឡើងនៃធម៌ជាវិបាក ។ កិរិយាជាតិ ការកើតឡើងនៃធម៌ជាកិរិយា។',
    aE: 'The 89 (or 121) consciousnesses have four jātis: unwholesome (akusala), wholesome (kusala), resultant (vipāka), and functional (kiriya).',
  },
  {
    qK: 'បើចែកដោយជាតិ តើសព្វចិត្តសាធារណចេតសិក ៦ (វៀរវេទនា) មានប៉ុន្មានជាតិ? ជាតិអ្វីខ្លះ?',
    qE: 'Dividing by jāti, how many jātis do the six sabba-citta-sādhāraṇa cetasikas (excluding vedanā) have? Which are they?',
    aK: 'បើចែកដោយជាតិ សព្វចិត្តសាធារណចេតសិក ៦ (វៀរវេទនា) មាន ៤ ជាតិ គឺ អកុសលជាតិ កុសលជាតិ វិបាកជាតិ និងកិរិយាជាតិ។',
    aE: 'Dividing by jāti, the six sabba-citta-sādhāraṇa cetasikas (excluding vedanā) have four jātis: unwholesome, wholesome, resultant, and functional.',
  },
  {
    qK: 'តាមឥន្រ្ទិយភេទន័យ តើសុខ និងទុក្ខ មានជាតិជាអ្វី? ហេតុអ្វី?',
    qE: 'According to the indriya-classification, what jāti do sukha and dukkha have? Why?',
    aK: 'តាមឥន្រ្ទិយភេទន័យ សុខ និងទុក្ខ មានជាតិជា វិបាកជាតិ។ ព្រោះតាមឥន្រ្ទិយភេទន័យ សុខវេទនា និងទុក្ខវេទនា កើតតែក្នុងកាយវិញ្ញាណចិត្ត ២ ដួង ដែលមានជាតិជាវិបាកជាតិ។',
    aE: 'According to the indriya-classification, sukha and dukkha are of the vipāka (resultant) jāti, because sukha-vedanā and dukkha-vedanā arise only in the two body-consciousness (kāya-viññāṇa) cittas, which are of the vipāka jāti.',
  },
  {
    qK: 'តាមឥន្រ្ទិយភេទន័យ តើសោមនស្សវេទនា មានប៉ុន្មានជាតិ? អ្វីខ្លះ?',
    qE: 'According to the indriya-classification, how many jātis does somanassa (pleasant mental feeling) have? Which are they?',
    aK: 'តាមឥន្រ្ទិយភេទន័យ សោមនស្សវេទនា មាន ៤ ជាតិ គឺ ៖ អកុសលជាតិ កុសលជាតិ វិបាកជាតិ និងកិរិយាជាតិ។',
    aE: 'According to the indriya-classification, somanassa-vedanā has four jātis: unwholesome, wholesome, resultant, and functional.',
  },
  {
    qK: 'តាមឥន្រ្ទិយភេទន័យ តើទោមនស្សវេទនា មានជាតិជាអ្វី? ហេតុអ្វី?',
    qE: 'According to the indriya-classification, what jāti does domanassa (painful mental feeling) have? Why?',
    aK: 'តាមឥន្រ្ទិយភេទន័យ ទោមនស្សវេទនា មានជាតិជា អកុសលជាតិ ព្រោះទោមនស្សវេទនា កើតតែក្នុងទោសមូលចិត្ត ២ ដួងប៉ុណ្ណោះ ហើយទោសមូលចិត្ត គឺជាចិត្តអាក្រក់ ចិត្តអកុសល ដែលមានអកុសលធម៌ប្រកបជាមួយ ដូច្នេះហើយទើបទោមនស្សវេទនា មានជាតិជា អកុសលជាតិ។',
    aE: 'According to the indriya-classification, domanassa-vedanā is of the akusala (unwholesome) jāti, because it arises only in the two dosa-mūla cittas; those are evil, unwholesome consciousnesses accompanied by unwholesome dhammas, and therefore domanassa-vedanā is of the unwholesome jāti.',
  },
  {
    qK: 'តាមឥន្រ្ទិយភេទន័យ តើឧបេក្ខាវេទនា មានប៉ុន្មានជាតិ? អ្វីខ្លះ?',
    qE: 'According to the indriya-classification, how many jātis does upekkhā (neutral mental feeling) have? Which are they?',
    aK: 'តាមឥន្រ្ទិយភេទន័យ ឧបេក្ខាវេទនា មាន ៤ ជាតិ គឺ អកុសលជាតិ កុសលជាតិ វិបាកជាតិ និងកិរិយាជាតិ។',
    aE: 'According to the indriya-classification, upekkhā-vedanā has four jātis: unwholesome, wholesome, resultant, and functional.',
  },
  {
    qK: 'ហេតុអ្វីបានជាឧបេក្ខាវេទនា មាន ៤ ជាតិ?',
    qE: 'Why does upekkhā-vedanā have four jātis?',
    aK: 'បានជាឧបេក្ខាវេទនា មាន ៤ ជាតិ ព្រោះឧបេក្ខាវេទនា ប្រកបក្នុងចិត្ត ៥៥ ដួង ដែលចិត្ត ៥៥ ដួងនេះ មាន ៤ ជាតិ ដូច្នេះហើយទើបឧបេក្ខាវេទនា ក៏មាន ៤ ជាតិ ដូចឧបេក្ខាសហគតចិត្តដែរ។',
    aE: 'Upekkhā-vedanā has four jātis because it accompanies the 55 cittas (upekkhā-sahagata cittas), and those 55 cittas have four jātis; therefore upekkhā-vedanā follows the same four jātis.',
  },
]

const sabbaByDvaraQas = [
  {
    qK: 'ដូចម្តេចហៅថា ទ្វារ ក្នុងបរមត្ថធម៌?',
    qE: 'What is meant by "door" (dvāra) in the paramattha dhammas?',
    aK: 'ទ្វារ មានន័យថា ច្រកប្រព្រឹត្តទៅនៃវិថីចិត្តទាំងឡាយ ដែលដឹងអារម្មណ៍ទាំងឡាយ។',
    aE: 'Door (dvāra) means the passageway through which the cognitive processes (vīthi cittas) that know the objects operate.',
  },
  {
    qK: 'តើទ្វារនៃវិថីចិត្ត មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many doors of the cognitive processes are there? Which are they?',
    aK: 'ទ្វារចិត្តមាន ៦ គឺ ៖ ចក្ខុទ្វារ គឺទ្វារភ្នែក អង្គធម៌បានដល់ ចក្ខុបសាទរូប ។ សោតទ្វារ គឺទ្វារត្រចៀក អង្គធម៌បានដល់ សោតបសាទរូប ។ ឃានទ្វារ គឺទ្វារច្រមុះ អង្គធម៌បានដល់ ឃានបសាទរូប ។ ជីវ្ហាទ្វារ គឺទ្វារអណ្តាត អង្គធម៌បានដល់ ជីវ្ហាបសាទរូប ។ កាយទ្វារ គឺទ្វារកាយ អង្គធម៌បានដល់ កាយបសាទរូប ។ មនោទ្វារ គឺទ្វារចិត្ត អង្គធម៌បានដល់ ភវង្គុប្បច្ឆេទ ១៩ (ភវង្គុប្បច្ឆេទ កើតក្នុង អកុសលវិបាកចិត្តដួងទី ៧ (១ ដួង) អហេតុកកុសលវិបាកចិត្តដួងទី ៨ (១ ដួង) មហាវិបាកចិត្ត ៨ ដួង មហគ្គវិបាកចិត្ត ៩ ដួង)។',
    aE: 'There are six doors of the cognitive process: the eye-door (eye-sensitivity), ear-door (ear-sensitivity), nose-door (nose-sensitivity), tongue-door (tongue-sensitivity), body-door (body-sensitivity), and mind-door (the 19 bhavaṅgupaccheda).',
  },
  {
    qK: 'តើសព្វចិត្តសាធារណចេតសិក ៦ (វៀរវេទនា) ប្រព្រឹត្តតាមទ្វារបានប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'Through how many doors do the six sabba-citta-sādhāraṇa cetasikas (excluding vedanā) operate? Which are they?',
    aK: 'សព្វចិត្តសាធារណចេតសិក ៦ (វៀរវេទនា) ប្រព្រឹត្តតាមទ្វារវិមុត្ត និងទ្វារ ៦ មាន ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជីវ្ហាទ្វារ កាយទ្វារ មនោទ្វារ។',
    aE: 'The six sabba-citta-sādhāraṇa cetasikas (excluding vedanā) operate through the door-free consciousness and the six doors: eye, ear, nose, tongue, body, and mind.',
  },
  {
    qK: 'ហេតុអ្វីបានជាមិនរាប់វេទនាចូលក្នុងសព្វចិត្តសាធារណចេតសិក ៦ ទៀត ក្នុងការចែកដោយជាតិ និងទ្វារ?',
    qE: 'Why is vedanā not counted among the six sabba-citta-sādhāraṇa cetasikas in the division by jāti and by door?',
    aK: 'បានជាមិនរាប់វេទនាចូលក្នុងការចែកសព្វចិត្តសាធារណចេតសិក ៦ ទៀត ដោយជាតិ និងទ្វារ ព្រោះចេតសិក ៦ មិនមានចែកជាអ្វីទៀតទេ ចំណែកវេទនា មានចែកជា ៣ ឬ ៥ ដូច្នេះទុកវេទនា ចែកពេលក្រោយ។',
    aE: 'Vedanā is not counted among the six in the division by jāti and by door because the six cetasikas have no further divisions, whereas vedanā is divided into three or five; therefore vedanā is left to be divided later.',
  },
  {
    qK: 'តើសុខវេទនា និងទុក្ខវេទនា តាមឥន្រ្ទិយភេទន័យ កើតត្រង់ទ្វារណា?',
    qE: 'At which door do sukha- and dukkha-vedanā (according to the indriya-classification) arise?',
    aK: 'សុខវេទនា និងទុក្ខវេទនា តាមឥន្រ្ទិយភេទន័យ កើតត្រង់ កាយទ្វារ។',
    aE: 'Sukha- and dukkha-vedanā, according to the indriya-classification, arise at the body-door.',
  },
  {
    qK: 'តើទោមនស្សវេទនា ប្រព្រឹត្តតាមទ្វារប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'Through how many doors does domanassa-vedanā operate? Which are they?',
    aK: 'ទោមនស្សវេទនា ប្រព្រឹត្តតាមទ្វារ ៦ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជីវ្ហាទ្វារ កាយទ្វារ និងមនោទ្វារ។',
    aE: 'Domanassa-vedanā operates through the six doors: eye, ear, nose, tongue, body, and mind.',
  },
  {
    qK: 'តើសោមនស្សវេទនា ប្រព្រឹត្តតាមទ្វារប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'Through how many doors does somanassa-vedanā operate? Which are they?',
    aK: 'សោមនស្សវេទនា ប្រព្រឹត្តតាមទ្វារ ៦ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជីវ្ហាទ្វារ កាយទ្វារ មនោទ្វារ និងទ្វារវិមុត្ត។',
    aE: 'Somanassa-vedanā operates through the six doors and the door-free consciousness: eye, ear, nose, tongue, body, and mind.',
  },
  {
    qK: 'តើឧបេក្ខាវេទនា ប្រព្រឹត្តតាមទ្វារណាខ្លះ?',
    qE: 'Through which doors does upekkhā-vedanā operate?',
    aK: 'ឧបេក្ខាវេទនា ប្រព្រឹត្តតាមទ្វារ ៦ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជីវ្ហាទ្វារ កាយទ្វារ មនោទ្វារ និងទ្វារវិមុត្ត។',
    aE: 'Upekkhā-vedanā operates through the six doors and the door-free consciousness: eye, ear, nose, tongue, body, and mind.',
  },
  {
    qK: 'តើទ្វារវិមុត្ត មានន័យដូចម្តេច?',
    qE: 'What does "door-free" (dvāra-vimutta) mean?',
    aK: 'ទ្វារវិមុត្ត មានន័យថា ផុតស្រលះចាកទ្វារ ៦ ឬ មិនប្រព្រឹត្តតាមទ្វារ ៦។',
    aE: 'Door-free (dvāra-vimutta) means free from the six doors, or not operating through the six doors.',
  },
  {
    qK: 'តើកិច្ចប៉ុន្មានប្រភេទ ដែលធ្វើនៅទ្វារវិមុត្ត? កិច្ចណាខ្លះ?',
    qE: 'How many kinds of function are performed at the door-free consciousness? Which are they?',
    aK: 'កិច្ចនៃចិត្ត ៣ ប្រភេទ ដែលធ្វើនៅទ្វារវិមុត្ត គឺ បដិសន្ធិកិច្ច ភវង្គកិច្ច និងចុតិកិច្ច។',
    aE: 'Three functions of consciousness are performed at the door-free consciousness: rebirth-linking (paṭisandhi), life-continuum (bhavaṅga), and death (cuti).',
  },
]

const sabbaByArammanaQas = [
  {
    qK: 'តើអារម្មណ៍ មានន័យដូចម្តេច?',
    qE: 'What does ārammaṇa (object) mean?',
    aK: 'អារម្មណ៍ មានន័យថា ៖ ទីតោងនៃចិត្ត និងចេតសិក ។ ឬ ជាទីត្រាច់ទៅនៃចិត្ត និងចេតសិក ។ ឬ ជាចំណីរបស់ចិត្ត និងចេតសិក។',
    aE: 'Ārammaṇa (object) means: the support of consciousness and mental factors; or the place where the mind and cetasikas travel; or the nutriment of the mind and cetasikas.',
  },
  {
    qK: 'តើអារម្មណ៍ ជាធាតុដឹងដែរឬទេ?',
    qE: 'Is the object (ārammaṇa) a knowing element?',
    aK: 'អារម្មណ៍ ជាធាតុមិនដឹងទេ ៖ បើជាចិត្ត និងចេតសិក គឺបានរលត់ទៅហើយ ឬទើបនឹងរលត់ ។ បើជានិព្វាន គឺគ្រាន់តែជាអារម្មណ៍របស់លោកុត្តរចិត្ត ។ បើជារូបធម៌ ជាធាតុមិនដឹងស្រាប់។',
    aE: 'The object is a non-knowing element: if it is the mind and cetasikas, it has already ceased or is about to cease; if it is Nibbāna, it is only the object of supramundane consciousness; if it is rūpa-dhamma, it is inherently not a knowing element.',
  },
  {
    qK: 'តើអារម្មណ៍ មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects (ārammaṇa) are there? Which are they?',
    aK: 'អារម្មណ៍ មាន ៦ គឺ ៖ រូបារម្មណ៍ អារម្មណ៍គឺពណ៌ ។ សទ្ទារម្មណ៍ អារម្មណ៍គឺសំឡេង ។ គន្ធារម្មណ៍ អារម្មណ៍គឺក្លិន ។ រសារម្មណ៍ អារម្មណ៍គឺរស ។ ផោដ្ឋព្វារម្មណ៍ អារម្មណ៍គឺធាតុក្តៅត្រជាក់ រឹងទន់ តឹងក្រៀក ។ ធម្មារម្មណ៍ អារម្មណ៍គឺធម៌ (ក្រៅពីអារម្មណ៍ ៥ ដែលជាបច្ចប្បន្នខាងលើ)។',
    aE: 'There are six objects: visible object (colour), sound, odour, taste, tangible object (heat/cold, hardness/softness, pressure), and mental object (dhamma, other than the five present objects above).',
  },
  {
    qK: 'តើផស្សចេតសិក ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can the phassa cetasika know? Which are they?',
    aK: 'ផស្សចេតសិក ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និងធម្មារម្មណ៍។',
    aE: 'The phassa cetasika can know six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើសញ្ញាចេតសិក ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can the saññā cetasika know? Which are they?',
    aK: 'សញ្ញាចេតសិក ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និងធម្មារម្មណ៍។',
    aE: 'The saññā cetasika can know six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើចេតនាចេតសិក ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can the cetanā cetasika know? Which are they?',
    aK: 'ចេតនាចេតសិក ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និងធម្មារម្មណ៍។',
    aE: 'The cetanā cetasika can know six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើឯកគ្គតាចេតសិក ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can the ekaggatā cetasika know? Which are they?',
    aK: 'ឯកគ្គតាចេតសិក ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និងធម្មារម្មណ៍។',
    aE: 'The ekaggatā cetasika can know six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើជីវិតិន្រ្ទិយចេតសិក ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can the jīvitindriya cetasika know? Which are they?',
    aK: 'ជីវិតិន្រ្ទិយចេតសិក ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និងធម្មារម្មណ៍។',
    aE: 'The jīvitindriya cetasika can know six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើមនសិការចេតសិក ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can the manasikāra cetasika know? Which are they?',
    aK: 'មនសិការចេតសិក ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និងធម្មារម្មណ៍។',
    aE: 'The manasikāra cetasika can know six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើសុខវេទនា តាមឥន្រ្ទិយភេទន័យ ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'According to the indriya-classification, how many objects can sukha-vedanā know? Which are they?',
    aK: 'សុខវេទនា តាមឥន្រ្ទិយភេទន័យ ដឹងអារម្មណ៍ ១ គឺ ផោដ្ឋព្វារម្មណ៍។',
    aE: 'According to the indriya-classification, sukha-vedanā can know one object, the tangible object.',
  },
  {
    qK: 'តើទុក្ខវេទនា តាមឥន្រ្ទិយភេទន័យ ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'According to the indriya-classification, how many objects can dukkha-vedanā know? Which are they?',
    aK: 'ទុក្ខវេទនា តាមឥន្រ្ទិយភេទន័យ ដឹងអារម្មណ៍ ១ គឺ ផោដ្ឋព្វារម្មណ៍។',
    aE: 'According to the indriya-classification, dukkha-vedanā can know one object, the tangible object.',
  },
  {
    qK: 'តើទោមនស្សវេទនា ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can domanassa-vedanā know? Which are they?',
    aK: 'ទោមនស្សវេទនា ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និងធម្មារម្មណ៍។',
    aE: 'Domanassa-vedanā can know six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើសោមនស្សវេទនា ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can somanassa-vedanā know? Which are they?',
    aK: 'សោមនស្សវេទនា ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និងធម្មារម្មណ៍។',
    aE: 'Somanassa-vedanā can know six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើឧបេក្ខាវេទនា ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can upekkhā-vedanā know? Which are they?',
    aK: 'ឧបេក្ខាវេទនា ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និងធម្មារម្មណ៍។',
    aE: 'Upekkhā-vedanā can know six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
]

const sabbaByBhumiQas = [
  {
    qK: 'តើចិត្ត ៨៩ ដួង ឬ ១២១ ដួង ចែកជាភូមិចិត្តបានប៉ុន្មានភូមិ? ភូមិណាខ្លះ?',
    qE: 'How many planes (bhūmis) do the 89 (or 121) consciousnesses divide into? Which are they?',
    aK: 'ចិត្ត ៨៩ ដួង ឬ ១២១ ដួង ចែកជាភូមិចិត្តបាន ៤ គឺ ៖ កាមាវចរភូមិ បានដល់ កាមាវចរចិត្ត ៥៤ ដួង ។ រូបាវចរភូមិ បានដល់ រូបាវចរចិត្ត ១៥ ដួង ។ អរូបាវចរភូមិ បានដល់ អរូបាវចរចិត្ត ១២ ដួង ។ លោកុត្តរភូមិ បានដល់ លោកុត្តរចិត្ត ៨ ដួង ឬ ៤០ ដួង។',
    aE: 'The 89 (or 121) consciousnesses divide into four planes: the sense-sphere plane (54 cittas), the form-sphere plane (15 cittas), the formless-sphere plane (12 cittas), and the supramundane plane (8 or 40 cittas).',
  },
  {
    qK: 'តើភូមិសត្វទាំងអស់ មានប៉ុន្មានភូមិធំៗ? ភូមិណាខ្លះ?',
    qE: 'How many great planes (bhūmis) are there in all? Which are they?',
    aK: 'ភូមិសត្វទាំងអស់ មាន ៣ ភូមិធំៗ ឬ ៣១ ភូមិតូច គឺ ៖ កាមាវចរភូមិ ឬកាមភូមិ បានដល់ភូមិ ១១ គឺ អបាយភូមិ ៤ មនុស្ស ១ ទេវតា ៦ ។ រូបាវចរភូមិ ឬរូបភូមិ បានដល់រូបភូមិ ១៦ ។ អរូបាវចរភូមិ ឬអរូបភូមិ បានដល់អរូបភូមិ ៤។',
    aE: 'There are three great planes (or thirty-one minor planes): the sense-sphere plane (11: four woeful, one human, six celestial), the form-sphere plane (16), and the formless-sphere plane (4).',
  },
  {
    qK: 'តើសព្វចិត្តសាធារណចេតសិក ៦ (វៀរវេទនា) កើតក្នុងភូមិចិត្តបានប៉ុន្មានភូមិ? ភូមិណាខ្លះ?',
    qE: 'In how many planes do the six sabba-citta-sādhāraṇa cetasikas (excluding vedanā) arise? Which are they?',
    aK: 'សព្វចិត្តសាធារណចេតសិក ៦ (វៀរវេទនា) កើតក្នុងភូមិចិត្តបាន ៤ គឺ កាមាវចរភូមិ រូបាវចរភូមិ អរូបាវចរភូមិ និងលោកុត្តរភូមិ។',
    aE: 'The six sabba-citta-sādhāraṇa cetasikas (excluding vedanā) arise in all four planes: the sense-sphere, form-sphere, formless-sphere, and supramundane.',
  },
  {
    qK: 'តើសព្វចិត្តសាធារណចេតសិក ៦ (វៀរវេទនា) កើតក្នុងភូមិសត្វបានប៉ុន្មានភូមិ? ភូមិណាខ្លះ?',
    qE: 'In how many planes of beings do the six sabba-citta-sādhāraṇa cetasikas (excluding vedanā) arise? Which are they?',
    aK: 'សព្វចិត្តសាធារណចេតសិក ៦ (វៀរវេទនា) កើតក្នុងភូមិសត្វ ៣០ ភូមិ (វៀរអសញ្ញីសត្តាភូមិ) គឺ អបាយភូមិ ៤ មនុស្ស ១ ទេវតា ៦ រូបភូមិ ១៥ អរូបភូមិ ៤។',
    aE: 'The six sabba-citta-sādhāraṇa cetasikas (excluding vedanā) arise in thirty planes of beings (excluding the asaññasatta plane): four woeful, one human, six celestial, fifteen form-sphere, and four formless.',
  },
  {
    qK: 'តើសុខវេទនា ទុក្ខវេទនា ទោមនស្សវេទនា កើតក្នុងភូមិចិត្តបានប៉ុន្មានភូមិ? ភូមិណាខ្លះ?',
    qE: 'In how many planes do sukha-, dukkha-, and domanassa-vedanā arise? Which are they?',
    aK: 'សុខវេទនា ទុក្ខវេទនា ទោមនស្សវេទនា កើតក្នុងភូមិចិត្ត ១ គឺ កាមាវចរភូមិ។',
    aE: 'Sukha-, dukkha-, and domanassa-vedanā arise in one plane, the sense-sphere plane.',
  },
  {
    qK: 'តើសុខវេទនា ទុក្ខវេទនា ទោមនស្សវេទនា ប្រព្រឹត្តក្នុងភូមិសត្វបានប៉ុន្មានភូមិ? ភូមិណាខ្លះ?',
    qE: 'In how many planes of beings do sukha-, dukkha-, and domanassa-vedanā operate? Which are they?',
    aK: 'សុខវេទនា ទុក្ខវេទនា ទោមនស្សវេទនា ប្រព្រឹត្តក្នុងភូមិសត្វ ១១ ភូមិ គឺ អបាយភូមិ ៤ មនុស្ស ១ ទេវតា ៦។',
    aE: 'Sukha-, dukkha-, and domanassa-vedanā operate in eleven planes of beings: four woeful, one human, and six celestial.',
  },
  {
    qK: 'តើសោមនស្សវេទនា ប្រព្រឹត្តទៅក្នុងភូមិចិត្តបានប៉ុន្មានភូមិ? ភូមិណាខ្លះ?',
    qE: 'In how many planes does somanassa-vedanā operate? Which are they?',
    aK: 'សោមនស្សវេទនា ប្រព្រឹត្តទៅក្នុងភូមិចិត្តបាន ៣ ភូមិ តាមសមគួរ គឺ កាមាវចរភូមិ រូបាវចរភូមិ លោកុត្តរភូមិ (វៀរអរូបាវចរភូមិ)។',
    aE: 'Somanassa-vedanā operates in three planes as appropriate: the sense-sphere, form-sphere, and supramundane planes (excluding the formless-sphere).',
  },
  {
    qK: 'តើសោមនស្សវេទនា ប្រព្រឹត្តទៅក្នុងភូមិសត្វបានប៉ុន្មានភូមិ? ភូមិណាខ្លះ?',
    qE: 'In how many planes of beings does somanassa-vedanā operate? Which are they?',
    aK: 'សោមនស្សវេទនា ប្រព្រឹត្តទៅក្នុងភូមិសត្វបាន ៣០ ភូមិ (វៀរអសញ្ញីសត្តាភូមិ) គឺ អបាយភូមិ ៤ មនុស្ស ១ ទេវតា ៦ រូបភូមិ ១៥ អរូបភូមិ ៤។',
    aE: 'Somanassa-vedanā operates in thirty planes of beings (excluding the asaññasatta plane): four woeful, one human, six celestial, fifteen form-sphere, and four formless.',
  },
  {
    qK: 'តើឧបេក្ខាវេទនា ប្រព្រឹត្តទៅក្នុងភូមិចិត្ត បានប៉ុន្មានភូមិ? ភូមិណាខ្លះ?',
    qE: 'In how many planes of consciousness does upekkhā-vedanā operate? Which are they?',
    aK: 'ឧបេក្ខាវេទនា ប្រព្រឹត្តក្នុងភូមិចិត្ត បាន ៤ ភូមិ តាមសមគួរ គឺ កាមាវចរភូមិ រូបាវចរភូមិ អរូបាវចរភូមិ និងលោកុត្តរភូមិ។',
    aE: 'Upekkhā-vedanā operates in all four planes as appropriate: the sense-sphere, form-sphere, formless-sphere, and supramundane planes.',
  },
  {
    qK: 'តើឧបេក្ខាវេទនា ប្រព្រឹត្តទៅក្នុងភូមិសត្វបានប៉ុន្មានភូមិ? ភូមិណាខ្លះ?',
    qE: 'In how many planes of beings does upekkhā-vedanā operate? Which are they?',
    aK: 'ឧបេក្ខាវេទនា ប្រព្រឹត្តទៅក្នុងភូមិសត្វ ៣០ (វៀរអសញ្ញីសត្តាភូមិ) គឺ អបាយភូមិ ៤ មនុស្ស ១ ទេវតា ៦ រូបភូមិ ១៥ អរូបភូមិ ៤។',
    aE: 'Upekkhā-vedanā operates in thirty planes of beings (excluding the asaññasatta plane): four woeful, one human, six celestial, fifteen form-sphere, and four formless.',
  },
]

const sabbaByVatthuQas = [
  {
    qK: 'តើវត្ថុ មានន័យដូចម្តេច?',
    qE: 'What does vatthu (base) mean?',
    aK: 'វត្ថុ មានន័យថា ទីអាស្រ័យឱ្យចិត្ត និងចេតសិកកើត។',
    aE: 'Vatthu (base) means the support upon which the consciousness and mental factors arise.',
  },
  {
    qK: 'តើវត្ថុ មានប៉ុន្មាន? ជារូបធម៌ ឬនាមធម៌? អ្វីខ្លះ?',
    qE: 'How many bases (vatthu) are there? Are they rūpa or nāma? Which are they?',
    aK: 'វត្ថុ មាន ៦ ជារូបធម៌។ វត្ថុ ៦ មាន ចក្ខុវត្ថុ សោតវត្ថុ ឃានវត្ថុ ជីវ្ហាវត្ថុ កាយវត្ថុ និងហទយវត្ថុ។',
    aE: 'There are six bases, which are rūpa-dhammas: eye-base, ear-base, nose-base, tongue-base, body-base, and heart-base.',
  },
  {
    qK: 'តើចិត្តសរុបប៉ុន្មានដួង ដែលអាស្រ័យវត្ថុ ៦?',
    qE: 'How many consciousnesses in total depend upon the six bases?',
    aK: 'ចិត្តសរុប ៨៥ ដួង ឬ ១១៧ ដួង (វៀរអរូបាវចរវិបាកចិត្ត ៤ ដួង) ដែលអាស្រ័យវត្ថុ ៦ នៅបញ្ចវោការភូមិ (ភូមិដែលមានខន្ធ ៥)។',
    aE: 'Eighty-five (or 117) consciousnesses (excluding the four formless-sphere resultant cittas) depend upon the six bases in the five-aggregate plane.',
  },
  {
    qK: 'តើសព្វចិត្តសាធារណចេតសិក ៦ (វៀរវេទនា) កើតអាស្រ័យវត្ថុបានប៉ុន្មាន ក្នុងចំណោមវត្ថុទាំង ៦? អ្វីខ្លះ?',
    qE: 'On how many of the six bases do the six sabba-citta-sādhāraṇa cetasikas (excluding vedanā) depend? Which are they?',
    aK: 'សព្វចិត្តសាធារណចេតសិក ៦ (វៀរវេទនា) អាស្រ័យវត្ថុ ៦ គឺ ចក្ខុវត្ថុ សោតវត្ថុ ឃានវត្ថុ ជីវ្ហាវត្ថុ កាយវត្ថុ និងហទយវត្ថុ។',
    aE: 'The six sabba-citta-sādhāraṇa cetasikas (excluding vedanā) depend upon all six bases: eye, ear, nose, tongue, body, and heart.',
  },
  {
    qK: 'តើសុខ និងទុក្ខ តាមឥន្រ្ទិយភេទន័យ កើតអាស្រ័យវត្ថុណា?',
    qE: 'On which base do sukha and dukkha (according to the indriya-classification) depend?',
    aK: 'សុខ និងទុក្ខ តាមឥន្រ្ទិយភេទន័យ អាស្រ័យ កាយវត្ថុ។',
    aE: 'Sukha and dukkha, according to the indriya-classification, depend upon the body-base.',
  },
  {
    qK: 'តើទោមនស្សវេទនា អាស្រ័យវត្ថុណា?',
    qE: 'On which base does domanassa-vedanā depend?',
    aK: 'ទោមនស្សវេទនា អាស្រ័យ ហទយវត្ថុ។',
    aE: 'Domanassa-vedanā depends upon the heart-base.',
  },
  {
    qK: 'តើសោមនស្សវេទនា អាស្រ័យវត្ថុណា?',
    qE: 'On which base does somanassa-vedanā depend?',
    aK: 'សោមនស្សវេទនា អាស្រ័យ ហទយវត្ថុ។',
    aE: 'Somanassa-vedanā depends upon the heart-base.',
  },
  {
    qK: 'តើឧបេក្ខាវេទនា អាស្រ័យវត្ថុបានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'On how many bases does upekkhā-vedanā depend? Which are they?',
    aK: 'ឧបេក្ខាវេទនា មិនកើតត្រង់កាយវត្ថុទេ ដូច្នេះអាស្រ័យវត្ថុបាន ៥ គឺ ចក្ខុវត្ថុ សោតវត្ថុ ឃានវត្ថុ ជីវ្ហាវត្ថុ និងហទយវត្ថុ។',
    aE: 'Upekkhā-vedanā does not arise at the body-base, so it depends upon five bases: eye, ear, nose, tongue, and heart.',
  },
  {
    qK: 'តើចេតសិកប៉ុន្មាន អាស្រ័យចក្ខុវត្ថុ? អ្វីខ្លះ?',
    qE: 'How many cetasikas depend upon the eye-base? Which are they?',
    aK: 'ចេតសិក ៧ គឺសព្វចិត្តសាធារណចេតសិក អាស្រ័យចក្ខុវត្ថុ គឺ ផស្សៈ វេទនា (ឧបេក្ខាវេទនា) សញ្ញា ចេតនា ឯកគ្គតា ជីវិតិន្រ្ទិយ មនសិការ។',
    aE: 'Seven cetasikas (the sabba-citta-sādhāraṇa cetasikas) depend upon the eye-base: phassa, vedanā (upekkhā), saññā, cetanā, ekaggatā, jīvitindriya, and manasikāra.',
  },
  {
    qK: 'តើចេតសិកប៉ុន្មាន អាស្រ័យសោតវត្ថុ? អ្វីខ្លះ?',
    qE: 'How many cetasikas depend upon the ear-base? Which are they?',
    aK: 'ចេតសិក ៧ គឺសព្វចិត្តសាធារណចេតសិក អាស្រ័យសោតវត្ថុ គឺ ផស្សៈ វេទនា (ឧបេក្ខាវេទនា) សញ្ញា ចេតនា ឯកគ្គតា ជីវិតិន្រ្ទិយ មនសិការ។',
    aE: 'Seven cetasikas (the sabba-citta-sādhāraṇa cetasikas) depend upon the ear-base: phassa, vedanā (upekkhā), saññā, cetanā, ekaggatā, jīvitindriya, and manasikāra.',
  },
  {
    qK: 'តើចេតសិកប៉ុន្មាន អាស្រ័យឃានវត្ថុ? អ្វីខ្លះ?',
    qE: 'How many cetasikas depend upon the nose-base? Which are they?',
    aK: 'ចេតសិក ៧ គឺសព្វចិត្តសាធារណចេតសិក ដែលអាស្រ័យឃានវត្ថុ គឺ ផស្សៈ វេទនា (ឧបេក្ខាវេទនា) សញ្ញា ចេតនា ឯកគ្គតា ជីវិតិន្រ្ទិយ មនសិការ។',
    aE: 'Seven cetasikas (the sabba-citta-sādhāraṇa cetasikas) depend upon the nose-base: phassa, vedanā (upekkhā), saññā, cetanā, ekaggatā, jīvitindriya, and manasikāra.',
  },
  {
    qK: 'តើចេតសិកប៉ុន្មាន អាស្រ័យជីវ្ហាវត្ថុ? អ្វីខ្លះ?',
    qE: 'How many cetasikas depend upon the tongue-base? Which are they?',
    aK: 'ចេតសិក ៧ អាស្រ័យជីវ្ហាវត្ថុ គឺសព្វចិត្តសាធារណចេតសិក មាន ផស្សៈ វេទនា (ឧបេក្ខាវេទនា) សញ្ញា ចេតនា ឯកគ្គតា ជីវិតិន្រ្ទិយ មនសិការ។',
    aE: 'Seven cetasikas (the sabba-citta-sādhāraṇa cetasikas) depend upon the tongue-base: phassa, vedanā (upekkhā), saññā, cetanā, ekaggatā, jīvitindriya, and manasikāra.',
  },
  {
    qK: 'តើចេតសិកប៉ុន្មាន អាស្រ័យកាយវត្ថុ? អ្វីខ្លះ?',
    qE: 'How many cetasikas depend upon the body-base? Which are they?',
    aK: 'ចេតសិក ៧ គឺសព្វចិត្តសាធារណចេតសិក ដែលអាស្រ័យកាយវត្ថុ គឺ ផស្សៈ វេទនា (សុខវេទនា និងទុក្ខវេទនា) សញ្ញា ចេតនា ឯកគ្គតា ជីវិតិន្រ្ទិយ មនសិការ។',
    aE: 'Seven cetasikas (the sabba-citta-sādhāraṇa cetasikas) depend upon the body-base: phassa, vedanā (sukha and dukkha), saññā, cetanā, ekaggatā, jīvitindriya, and manasikāra.',
  },
  {
    qK: 'តើចេតសិកប៉ុន្មាន អាស្រ័យហទយវត្ថុ?',
    qE: 'How many cetasikas depend upon the heart-base?',
    aK: 'ចេតសិក ៥១ (វៀរវេទនាចេតសិក) អាស្រ័យហទយវត្ថុ ចំណែកវេទនាចេតសិក ចែកជា ៥ អាស្រ័យហទយវត្ថុតាមសមគួរ។',
    aE: 'Fifty-one cetasikas (excluding the vedanā cetasika) depend upon the heart-base, while the vedanā cetasika, divided into five, depends upon the heart-base as appropriate.',
  },
]

const sabbaByHetuQas = [
  {
    qK: 'តើហេតុ មានន័យដូចម្តេច?',
    qE: 'What does hetu (root) mean?',
    aK: 'ហេតុ មានន័យថា មូល ឫសគល់ ដើមចម។',
    aE: 'Hetu (root) means foundation, root, or origin.',
  },
  {
    qK: 'តើហេតុប្បច្ច័យ មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many hetu-paccayas (root conditions) are there? Which are they?',
    aK: 'ហេតុប្បច្ច័យ មាន ៦ គឺ លោភហេតុ ទោសហេតុ មោហហេតុ អលោភហេតុ អទោសហេតុ និងអមោហហេតុ ឬបញ្ញា។',
    aE: 'There are six hetu-paccayas: lobha (greed), dosa (hatred), moha (delusion), alobha (non-greed), adosa (non-hatred), and amoha (non-delusion) or paññā (wisdom).',
  },
  {
    qK: 'តើហេតុ ៦ ចែកជាប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'Into how many divisions are the six hetus divided? Which are they?',
    aK: 'ហេតុប្បច្ច័យ ៦ ចែកជា ២ ប្រភេទ គឺ អកុសលហេតុ និងសោភណហេតុ។',
    aE: 'The six hetu-paccayas divide into two kinds: the unwholesome roots and the beautiful (wholesome) roots.',
  },
  {
    qK: 'តើអកុសលហេតុ មានន័យដូចម្តេច? មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'What do the unwholesome roots mean? How many are there? Which are they?',
    aK: 'អកុសលហេតុ មានន័យថា ហេតុនៃអកុសលធម៌ មាន ៣ គឺ លោភហេតុ ទោសហេតុ និងមោហហេតុ។',
    aE: 'The unwholesome roots are the roots of unwholesome dhammas; there are three: lobha, dosa, and moha.',
  },
  {
    qK: 'តើអកុសលហេតុ កើតក្នុងចិត្តប៉ុន្មានដួង?',
    qE: 'In how many consciousnesses do the unwholesome roots arise?',
    aK: 'អកុសលហេតុ កើតក្នុងអកុសលចិត្ត ១២ ដួង តាមសមគួរ។',
    aE: 'The unwholesome roots arise in the twelve unwholesome consciousnesses, as appropriate.',
  },
  {
    qK: 'ដូចម្តេចហៅថា សោភណហេតុ? មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'What are the beautiful roots? How many are there? Which are they?',
    aK: 'សោភណហេតុ មានន័យថា ហេតុនៃសោភណធម៌ មាន ៣ គឺ អលោភហេតុ អទោសហេតុ និងអមោហហេតុ ឬបញ្ញា។',
    aE: 'The beautiful roots are the roots of beautiful dhammas; there are three: alobha, adosa, and amoha or paññā.',
  },
  {
    qK: 'តើសោភណហេតុ កើតក្នុងចិត្តប៉ុន្មានដួង?',
    qE: 'In how many consciousnesses do the beautiful roots arise?',
    aK: 'សោភណហេតុ កើតក្នុងសោភណចិត្ត ៥៩ ដួង ឬ ៩១ ដួង។',
    aE: 'The beautiful roots arise in the 59 (or 91) beautiful consciousnesses.',
  },
  {
    qK: 'តើនហេតុ មានន័យដូចម្តេច?',
    qE: 'What does na-hetu (non-root) mean?',
    aK: 'នហេតុ មានន័យថា មិនមែនហេតុ មិនមែនមូល មិនមែនឫសគល់ មិនមែនដើមចម។',
    aE: 'Na-hetu (non-root) means not a root, not a foundation, not a root-cause, not an origin.',
  },
  {
    qK: 'តើចេតសិក ៥២ មានហេតុប៉ុន្មាន? នហេតុប៉ុន្មាន?',
    qE: 'Among the 52 cetasikas, how many are hetus and how many are na-hetus?',
    aK: 'ចេតសិក ៥២ មានហេតុ ៦ ចេតសិក និង នហេតុ ៤៦ ចេតសិក។',
    aE: 'Among the 52 cetasikas, six are hetus and forty-six are na-hetus.',
  },
  {
    qK: 'តើចិត្ត ៨៩ ដួង ឬ ១២១ ដួង ជាហេតុ ឬនហេតុ?',
    qE: 'Are the 89 (or 121) consciousnesses hetus or na-hetus?',
    aK: 'ចិត្ត ៨៩ ដួង ឬ ១២១ ដួង ជា នហេតុ។',
    aE: 'The 89 (or 121) consciousnesses are na-hetus.',
  },
  {
    qK: 'តើរូប ២៨ ជាហេតុ ឬនហេតុ?',
    qE: 'Are the 28 rūpas hetus or na-hetus?',
    aK: 'រូប ២៨ ជា នហេតុ។',
    aE: 'The 28 rūpas are na-hetus.',
  },
  {
    qK: 'តើព្រះនិព្វាន ជាហេតុ ឬនហេតុ?',
    qE: 'Is Nibbāna a hetu or a na-hetu?',
    aK: 'ព្រះនិព្វាន ជា នហេតុ។',
    aE: 'Nibbāna is a na-hetu.',
  },
  {
    qK: 'តើសព្វចិត្តសាធារណចេតសិក ៧ ជាហេតុ ឬនហេតុ?',
    qE: 'Are the seven sabba-citta-sādhāraṇa cetasikas hetus or na-hetus?',
    aK: 'សព្វចិត្តសាធារណចេតសិក ៧ ជា នហេតុ។',
    aE: 'The seven sabba-citta-sādhāraṇa cetasikas are na-hetus.',
  },
  {
    qK: 'តើបកិណ្ណកចេតសិក ៦ ជាហេតុ ឬនហេតុ?',
    qE: 'Are the six pakiṇṇaka cetasikas hetus or na-hetus?',
    aK: 'បកិណ្ណកចេតសិក ៦ ជា នហេតុ។',
    aE: 'The six pakiṇṇaka cetasikas are na-hetus.',
  },
  {
    qK: 'តើអកុសលចេតសិក ១៤ ជាហេតុ ឬនហេតុ? ចូររៀបរាប់?',
    qE: 'Among the 14 unwholesome cetasikas, which are hetus and which are na-hetus? Explain.',
    aK: 'អកុសលចេតសិក ១៤ មាន ៖ ចេតសិក ៣ ជាហេតុ គឺ លោភចេតសិក ទោសចេតសិក និងមោហចេតសិក ។ នហេតុ ១១ ចេតសិក គឺ អហិរិកៈ អនោត្តប្បៈ ឧទ្ធច្ចៈ ទិដ្ឋិ មានៈ ឥស្សា មច្ឆរិយៈ កុក្កច្ចៈ ថីនៈ មិទ្ធៈ និងវិចិកិច្ឆា។',
    aE: 'Of the 14 unwholesome cetasikas: three are hetus (lobha, dosa, moha); eleven are na-hetus (ahirika, anottappa, uddhacca, diṭṭhi, māna, issā, macchariya, kukkucca, thīna, middha, vicikicchā).',
  },
  {
    qK: 'តើសោភណចេតសិក ២៥ ជាហេតុ ឬនហេតុ? ចូររៀបរាប់?',
    qE: 'Among the 25 beautiful cetasikas, which are hetus and which are na-hetus? Explain.',
    aK: 'សោភណចេតសិក ២៥ មាន ៖ ចេតសិក ៣ ជាហេតុ គឺ អលោភចេតសិក អទោសចេតសិក និងបញ្ញាចេតសិក ។ នហេតុ ២២ ចេតសិក គឺ សទ្ធា សតិ ហិរិ ឱត្តប្បៈ តត្រមជ្ឈត្តតា កាយបស្សទ្ធិ ចិត្តបស្សទ្ធិ កាយលហុតា ចិត្តលហុតា កាយមុទុតា ចិត្តមុទុតា កាយកម្មញ្ញតា ចិត្តកម្មញ្ញតា កាយបាគុញ្ញតា ចិត្តបាគុញ្ញតា កាយុជុកតា ចិត្តុជុកតា សម្មាវាចា សម្មាកម្មន្តៈ សម្មាអាជីវៈ ករុណា មុទិតា។',
    aE: 'Of the 25 beautiful cetasikas: three are hetus (alobha, adosa, paññā); twenty-two are na-hetus (saddhā, sati, hiri, ottappa, tatramajjhattatā, kāya-passaddhi, citta-passaddhi, kāya-lahutā, citta-lahutā, kāya-mudutā, citta-mudutā, kāya-kammaññatā, citta-kammaññatā, kāya-pāguññatā, citta-pāguññatā, kāyujukatā, cittujukatā, sammā-vācā, sammā-kammanta, sammā-ājīva, karuṇā, muditā).',
  },
]

const sabbaBySobhanaQas = [
  {
    qK: 'តើចិត្ត ៨៩ ដួង ឬ ១២១ ដួង បើចែកដោយអសោភណ និងសោភណ មានប៉ុន្មានប្រភេទ? អ្វីខ្លះ?',
    qE: 'Divided by asobhana (non-beautiful) and sobhana (beautiful), how many kinds are the 89 (or 121) consciousnesses? Which are they?',
    aK: 'ចិត្ត ៨៩ ដួង ឬ ១២១ ដួង បើចែកដោយសោភណ និងអសោភណ មាន ២ ប្រភេទ គឺ ៖ អសោភណចិត្ត ៣០ ដួង ។ សោភណចិត្ត ៥៩ ដួង ឬ ៩១ ដួង។',
    aE: 'Divided by sobhana and asobhana, the 89 (or 121) consciousnesses are of two kinds: 30 asobhana (non-beautiful) and 59 (or 91) sobhana (beautiful).',
  },
  {
    qK: 'តើអសោភណចិត្ត មានន័យដូចម្តេច?',
    qE: 'What does asobhana-citta (non-beautiful consciousness) mean?',
    aK: 'អសោភណចិត្ត មានន័យថា ចិត្តដែលមិនមានសោភណចេតសិកប្រកបជាមួយ។',
    aE: 'Asobhana-citta means the consciousness not accompanied by beautiful cetasikas.',
  },
  {
    qK: 'តើសោភណចិត្ត មានន័យដូចម្តេច?',
    qE: 'What does sobhana-citta (beautiful consciousness) mean?',
    aK: 'សោភណចិត្ត មានន័យថា ចិត្តដែលមានសោភណចេតសិកប្រកបជាមួយ។',
    aE: 'Sobhana-citta means the consciousness accompanied by beautiful cetasikas.',
  },
  {
    qK: 'តើសព្វចិត្តសាធារណចេតសិក មានន័យដូចម្តេច?',
    qE: 'What does sabba-citta-sādhāraṇa cetasika mean?',
    aK: 'សព្វចិត្តសាធារណចេតសិក មានន័យថា ចេតសិកដែលកើតទូទៅក្នុងចិត្តទាំង ៨៩ ដួង ឬ ១២១ ដួង។',
    aE: 'Sabba-citta-sādhāraṇa cetasika means the cetasika that arises commonly in all 89 (or 121) consciousnesses.',
  },
  {
    qK: 'តើសព្វចិត្តសាធារណចេតសិក ៦ (វៀរវេទនា) កើតក្នុងអសោភណចិត្ត ឬសោភណចិត្ត?',
    qE: 'Do the six sabba-citta-sādhāraṇa cetasikas (excluding vedanā) arise in non-beautiful or beautiful consciousness?',
    aK: 'សព្វចិត្តសាធារណចេតសិក ៦ (វៀរវេទនា) កើតក្នុងអសោភណចិត្តផង និងសោភណចិត្តផង។',
    aE: 'The six sabba-citta-sādhāraṇa cetasikas (excluding vedanā) arise in both non-beautiful and beautiful consciousness.',
  },
  {
    qK: 'តើសុខវេទនា តាមឥន្រ្ទិយភេទន័យ កើតក្នុងអសោភណចិត្ត ឬសោភណចិត្ត?',
    qE: 'According to the indriya-classification, does sukha-vedanā arise in non-beautiful or beautiful consciousness?',
    aK: 'សុខវេទនា តាមឥន្រ្ទិយភេទន័យ កើតក្នុងអសោភណចិត្តតាមសមគួរ មិនកើតក្នុងសោភណចិត្តទេ។',
    aE: 'According to the indriya-classification, sukha-vedanā arises in non-beautiful consciousness as appropriate, and not in beautiful consciousness.',
  },
  {
    qK: 'តើទុក្ខវេទនា តាមឥន្រ្ទិយភេទន័យ កើតក្នុងអសោភណចិត្ត ឬសោភណចិត្ត?',
    qE: 'According to the indriya-classification, does dukkha-vedanā arise in non-beautiful or beautiful consciousness?',
    aK: 'ទុក្ខវេទនា តាមឥន្រ្ទិយភេទន័យ កើតក្នុងអសោភណចិត្តតាមសមគួរ មិនកើតក្នុងសោភណចិត្តទេ។',
    aE: 'According to the indriya-classification, dukkha-vedanā arises in non-beautiful consciousness as appropriate, and not in beautiful consciousness.',
  },
  {
    qK: 'តើទោមនស្សវេទនា កើតក្នុងអសោភណចិត្ត ឬសោភណចិត្ត?',
    qE: 'Does domanassa-vedanā arise in non-beautiful or beautiful consciousness?',
    aK: 'ទោមនស្សវេទនា កើតក្នុងអសោភណចិត្តតាមសមគួរ មិនកើតក្នុងសោភណចិត្តទេ។',
    aE: 'Domanassa-vedanā arises in non-beautiful consciousness as appropriate, and not in beautiful consciousness.',
  },
  {
    qK: 'តើសោមនស្សវេទនា កើតក្នុងអសោភណចិត្ត ឬសោភណចិត្ត?',
    qE: 'Does somanassa-vedanā arise in non-beautiful or beautiful consciousness?',
    aK: 'សោមនស្សវេទនា កើតក្នុងអសោភណចិត្តតាមសមគួរផង និងសោភណចិត្តតាមសមគួរផង។',
    aE: 'Somanassa-vedanā arises in non-beautiful consciousness as appropriate and in beautiful consciousness as appropriate.',
  },
  {
    qK: 'តើឧបេក្ខាវេទនា កើតក្នុងអសោភណចិត្ត ឬសោភណចិត្ត?',
    qE: 'Does upekkhā-vedanā arise in non-beautiful or beautiful consciousness?',
    aK: 'ឧបេក្ខាវេទនា កើតក្នុងអសោភណចិត្តតាមសមគួរផង និងសោភណចិត្តតាមសមគួរផង។',
    aE: 'Upekkhā-vedanā arises in non-beautiful consciousness as appropriate and in beautiful consciousness as appropriate.',
  },
]

const sabbaByLokaQas = [
  {
    qK: 'តើចិត្ត ៨៩ ដួង ឬ ១២១ ដួង បើចែកដោយលោកិយ និងលោកុត្តរ មានប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'Divided by lokiya (worldly) and lokuttara (supramundane), how many kinds are the 89 (or 121) consciousnesses? Which are they?',
    aK: 'ចិត្ត ៨៩ ដួង ឬ ១២១ ដួង បើចែកដោយលោកិយ និងលោកុត្តរ មាន ២ យ៉ាង គឺ ៖ លោកិយចិត្ត មាន ៨១ ដួង ។ លោកុត្តរចិត្ត មាន ៨ ដួង ឬ ៤០ ដួង។',
    aE: 'Divided by lokiya and lokuttara, the 89 (or 121) consciousnesses are of two kinds: 81 lokiya (worldly) and 8 (or 40) lokuttara (supramundane).',
  },
  {
    qK: 'តើលោកិយចិត្ត មានន័យដូចម្តេច?',
    qE: 'What does lokiya-citta (worldly consciousness) mean?',
    aK: 'លោកិយចិត្ត មានន័យថា ចិត្តដែលដឹងរឿងរ៉ាវក្នុងលោក។',
    aE: 'Lokiya-citta means the consciousness that knows the things of the world.',
  },
  {
    qK: 'តើលោកុត្តរចិត្ត មានន័យដូចម្តេច?',
    qE: 'What does lokuttara-citta (supramundane consciousness) mean?',
    aK: 'លោកុត្តរចិត្ត មានន័យថា ចិត្តដែលដឹងនូវព្រះនិព្វានជាអារម្មណ៍។',
    aE: 'Lokuttara-citta means the consciousness that knows Nibbāna as its object.',
  },
  {
    qK: 'តើទ្វារ មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many doors (dvāra) are there? Which are they?',
    aK: 'ទ្វារ មាន ៦ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជីវ្ហាទ្វារ កាយទ្វារ និងមនោទ្វារ។',
    aE: 'There are six doors: the eye-door, ear-door, nose-door, tongue-door, body-door, and mind-door.',
  },
  {
    qK: 'តើបញ្ចទ្វារ មានន័យដូចម្តេច?',
    qE: 'What does pañca-dvāra (five doors) mean?',
    aK: 'បញ្ចទ្វារ មានន័យថា ទ្វារ ៥ ។',
    aE: 'Pañca-dvāra means the five doors.',
  },
  {
    qK: 'តើបញ្ចារម្មណ៍ មានន័យដូចម្តេច?',
      qE: 'What does pañcārammaṇa (five objects) mean?',
      aK: 'បញ្ចារម្មណ៍ មានន័យថា អារម្មណ៍ ៥ ។',
      aE: 'Pañcārammaṇa means the five sense objects.',
  },
  {
    qK: 'តើអារម្មណ៍ មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects (ārammaṇa) are there? Which are they?',
    aK: 'អារម្មណ៍ មាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និងធម្មារម្មណ៍។',
    aE: 'There are six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើចិត្តដែលប្រព្រឹត្តតាមចក្ខុទ្វារ ដឹងអារម្មណ៍មួយណា?',
    qE: 'Which object does the consciousness operating through the eye-door know?',
    aK: 'ចិត្តដែលប្រព្រឹត្តតាមចក្ខុទ្វារ ដឹង រូបារម្មណ៍។',
    aE: 'The consciousness operating through the eye-door knows the visible object.',
  },
  {
    qK: 'តើចិត្តដែលប្រព្រឹត្តតាមសោតទ្វារ ដឹងអារម្មណ៍មួយណា?',
    qE: 'Which object does the consciousness operating through the ear-door know?',
    aK: 'ចិត្តដែលប្រព្រឹត្តតាមសោតទ្វារ ដឹង សទ្ទារម្មណ៍។',
    aE: 'The consciousness operating through the ear-door knows the sound object.',
  },
  {
    qK: 'តើចិត្តដែលប្រព្រឹត្តតាមឃានទ្វារ ដឹងអារម្មណ៍មួយណា?',
    qE: 'Which object does the consciousness operating through the nose-door know?',
    aK: 'ចិត្តដែលប្រព្រឹត្តតាមឃានទ្វារ ដឹងនូវ គន្ធារម្មណ៍។',
    aE: 'The consciousness operating through the nose-door knows the odour object.',
  },
  {
    qK: 'តើចិត្តដែលប្រព្រឹត្តតាមជីវ្ហាទ្វារ ដឹងអារម្មណ៍មួយណា?',
    qE: 'Which object does the consciousness operating through the tongue-door know?',
    aK: 'ចិត្តដែលប្រព្រឹត្តតាមជីវ្ហាទ្វារ ដឹងនូវ រសារម្មណ៍។',
    aE: 'The consciousness operating through the tongue-door knows the taste object.',
  },
  {
    qK: 'តើចិត្តដែលប្រព្រឹត្តតាមកាយទ្វារ ដឹងអារម្មណ៍មួយណា?',
    qE: 'Which object does the consciousness operating through the body-door know?',
    aK: 'ចិត្តដែលប្រព្រឹត្តតាមកាយទ្វារ ដឹង ផោដ្ឋព្វារម្មណ៍។',
    aE: 'The consciousness operating through the body-door knows the tangible object.',
  },
  {
    qK: 'តើចិត្តដែលប្រព្រឹត្តតាមមនោទ្វារ ដឹងអារម្មណ៍បានប៉ុន្មាន?',
    qE: 'How many objects can the consciousness operating through the mind-door know?',
    aK: 'ចិត្តដែលប្រព្រឹត្តតាមមនោទ្វារ ដឹងអារម្មណ៍បានទាំង ៦ ។',
    aE: 'The consciousness operating through the mind-door can know all six objects.',
  },
  {
    qK: 'តើសព្វចិត្តសាធារណចេតសិក ៦ (វៀរវេទនា) កើតក្នុងលោកិយចិត្ត ឬលោកុត្តរចិត្ត?',
    qE: 'Do the six sabba-citta-sādhāraṇa cetasikas (excluding vedanā) arise in worldly or supramundane consciousness?',
    aK: 'សព្វចិត្តសាធារណចេតសិក ៦ (វៀរវេទនា) កើតក្នុងលោកិយចិត្តផង និងលោកុត្តរចិត្តផង។',
    aE: 'The six sabba-citta-sādhāraṇa cetasikas (excluding vedanā) arise in both worldly and supramundane consciousness.',
  },
  {
    qK: 'តើសុខវេទនា តាមឥន្រ្ទិយភេទន័យ កើតក្នុងលោកិយចិត្ត ឬលោកុត្តរចិត្ត?',
    qE: 'According to the indriya-classification, does sukha-vedanā arise in worldly or supramundane consciousness?',
    aK: 'សុខវេទនា តាមឥន្រ្ទិយភេទន័យ កើតក្នុងលោកិយចិត្តតាមសមគួរ មិនកើតក្នុងលោកុត្តរចិត្តទេ។',
    aE: 'According to the indriya-classification, sukha-vedanā arises in worldly consciousness as appropriate, and not in supramundane consciousness.',
  },
  {
    qK: 'តើទុក្ខវេទនា តាមឥន្រ្ទិយភេទន័យ កើតក្នុងលោកិយចិត្ត ឬលោកុត្តរចិត្ត?',
    qE: 'According to the indriya-classification, does dukkha-vedanā arise in worldly or supramundane consciousness?',
    aK: 'ទុក្ខវេទនា តាមឥន្រ្ទិយភេទន័យ កើតក្នុងលោកិយចិត្តតាមសមគួរ មិនកើតក្នុងលោកុត្តរចិត្តទេ។',
    aE: 'According to the indriya-classification, dukkha-vedanā arises in worldly consciousness as appropriate, and not in supramundane consciousness.',
  },
  {
    qK: 'តើសោមនស្សវេទនា កើតក្នុងលោកិយចិត្ត ឬលោកុត្តរចិត្ត?',
    qE: 'Does somanassa-vedanā arise in worldly or supramundane consciousness?',
    aK: 'សោមនស្សវេទនា កើតក្នុងលោកិយចិត្តតាមសមគួរ និងលោកុត្តរចិត្តតាមសមគួរ។',
    aE: 'Somanassa-vedanā arises in worldly consciousness as appropriate and in supramundane consciousness as appropriate.',
  },
  {
    qK: 'តើទោមនស្សវេទនា កើតក្នុងលោកិយចិត្ត ឬលោកុត្តរចិត្ត?',
    qE: 'Does domanassa-vedanā arise in worldly or supramundane consciousness?',
    aK: 'ទោមនស្សវេទនា កើតក្នុងលោកិយចិត្តតាមសមគួរ មិនកើតក្នុងលោកុត្តរចិត្តទេ។',
    aE: 'Domanassa-vedanā arises in worldly consciousness as appropriate, and not in supramundane consciousness.',
  },
  {
    qK: 'តើឧបេក្ខាវេទនា កើតក្នុងលោកិយចិត្ត ឬលោកុត្តរចិត្ត?',
    qE: 'Does upekkhā-vedanā arise in worldly or supramundane consciousness?',
    aK: 'ឧបេក្ខាវេទនា កើតក្នុងលោកិយចិត្តតាមសមគួរ និងលោកុត្តរចិត្តតាមសមគួរ។',
    aE: 'Upekkhā-vedanā arises in worldly consciousness as appropriate and in supramundane consciousness as appropriate.',
  },
]

const vitakkaQas = [
  {
    qK: 'តើបកិណ្ណកចេតសិក មានន័យដូចម្តេច?',
    qE: 'What does pakiṇṇaka cetasika mean?',
    aK: 'បកិណ្ណកចេតសិក មានន័យថា ចេតសិកដែលរាត់រាយ ខ្ចាត់ខ្ចាយ។',
    aE: 'Pakiṇṇaka cetasika means the "scattered" or "particular" mental factors.',
  },
  {
    qK: 'តើបកិណ្ណកចេតសិក អាចកើតគ្រប់ចិត្ត ៨៩ ឬ ១២១ ដួងបានទេ?',
    qE: 'Can the pakiṇṇaka cetasikas arise in all 89 (or 121) consciousnesses?',
    aK: 'បកិណ្ណកចេតសិក មិនអាចកើតគ្រប់ចិត្ត ៨៩ ដួង ឬ ១២១ ដួងបានទេ។',
    aE: 'The pakiṇṇaka cetasikas cannot arise in all 89 (or 121) consciousnesses.',
  },
  {
    qK: 'តើបកិណ្ណកចេតសិក អាចកើតក្នុងចិត្តបានប៉ុន្មានជាតិ? អ្វីខ្លះ?',
    qE: 'In how many jātis can the pakiṇṇaka cetasikas arise? Which are they?',
    aK: 'បកិណ្ណកចេតសិក អាចកើតក្នុងចិត្តបាន ៤ ជាតិ តាមសមគួរ គឺ អកុសលជាតិ កុសលជាតិ វិបាកជាតិ និងកិរិយាជាតិ។',
    aE: 'The pakiṇṇaka cetasikas can arise in four jātis as appropriate: unwholesome, wholesome, resultant, and functional.',
  },
  {
    qK: 'តើធម្មជាតិត្រិះរិះអារម្មណ៍ បានដល់ចេតសិកណា?',
    qE: 'Which cetasika is the nature that reflects upon the object?',
    aK: 'ធម្មជាតិត្រិះរិះអារម្មណ៍ បានដល់ វិតក្កចេតសិក។',
    aE: 'The nature that reflects upon the object is the vitakka cetasika.',
  },
  {
    qK: 'តើវិតក្កចេតសិក មានលក្ខណាទិចតុក្កៈដូចម្តេចខ្លះ? ចូររៀបរាប់?',
    qE: 'What is the fourfold characteristic (lakkhaṇādi-catukka) of the vitakka cetasika? Explain.',
    aK: 'លក្ខណាទិចតុក្កៈ របស់វិតក្កចេតសិក ៖ មានការលើកចិត្តឡើងកាន់អារម្មណ៍ ជាលក្ខណៈ ។ មានការធ្វើចិត្តឱ្យប៉ះខ្ទប់អារម្មណ៍ ជារឿយៗ ជាកិច្ច ។ មានការនាំចិត្តទៅក្នុងអារម្មណ៍ ជាអាការប្រាកដ ។ មានអារម្មណ៍ក្នុងវិថី ជាហេតុជិត។',
    aE: 'The fourfold characteristic of vitakka: its characteristic is lifting the mind onto the object; its function is repeatedly striking the mind upon the object; its manifestation is leading the mind into the object; its proximate cause is the object in the cognitive process.',
  },
  {
    qK: 'តើវិតក្កចេតសិក ចាត់ជាខន្ធអ្វី ក្នុងចំណោមខន្ធ ៥?',
    qE: 'To which of the five aggregates is the vitakka cetasika classed?',
    aK: 'វិតក្កចេតសិក ចាត់ជា សង្ខារក្ខន្ធ ក្នុងចំណោមខន្ធទាំង ៥។',
    aE: 'The vitakka cetasika is classed as the saṅkhāra-khandha, among the five aggregates.',
  },
  {
    qK: 'តើវិតក្កចេតសិក អាស្រ័យវត្ថុប៉ុន្មាន ក្នុងចំណោមវត្ថុទាំង ៦?',
    qE: 'On how many of the six bases does the vitakka cetasika depend?',
    aK: 'វិតក្កចេតសិក កើតអាស្រ័យវត្ថុ ១ ក្នុងចំណោមវត្ថុទាំង ៦ គឺ ហទយវត្ថុ។',
    aE: 'The vitakka cetasika arises depending upon one of the six bases, the heart-base.',
  },
  {
    qK: 'តើវិតក្កចេតសិក អាចប្រព្រឹត្តតាមទ្វារប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'Through how many doors can the vitakka cetasika operate? Which are they?',
    aK: 'វិតក្កចេតសិក អាចប្រព្រឹត្តបានតាមទ្វារវិមុត្ត និងទ្វារទាំង ៦ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជីវ្ហាទ្វារ កាយទ្វារ មនោទ្វារ។',
    aE: 'The vitakka cetasika can operate through the door-free consciousness and the six doors: eye, ear, nose, tongue, body, and mind.',
  },
  {
    qK: 'តើវិតក្កចេតសិក អាចដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can the vitakka cetasika know? Which are they?',
    aK: 'វិតក្កចេតសិក អាចដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និងធម្មារម្មណ៍។',
    aE: 'The vitakka cetasika can know six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើវិតក្កចេតសិក អាចកើតក្នុងចិត្តបានប៉ុន្មានដួង ក្នុងចំណោមចិត្ត ១២១ ដួង?',
    qE: 'In how many of the 121 consciousnesses can the vitakka cetasika arise?',
    aK: 'វិតក្កចេតសិក អាចកើតក្នុងចិត្តបាន ៥៥ ដួង ក្នុងចំណោមចិត្ត ១២១ ដួង។',
    aE: 'The vitakka cetasika can arise in 55 of the 121 consciousnesses.',
  },
  {
    qK: 'តើវិតក្កចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានជាតិ? អ្វីខ្លះ?',
    qE: 'In how many jātis does the vitakka cetasika arise? Which are they?',
    aK: 'វិតក្កចេតសិក កើតក្នុងចិត្តបាន ៤ ជាតិ តាមសមគួរ គឺ អកុសលជាតិ កុសលជាតិ វិបាកជាតិ និងកិរិយាជាតិ។',
    aE: 'The vitakka cetasika arises in four jātis as appropriate: unwholesome, wholesome, resultant, and functional.',
  },
  {
    qK: 'តើវិតក្កចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានប្រភេទ? អ្វីខ្លះ?',
    qE: 'In how many classes of consciousness does the vitakka cetasika arise? Which are they?',
    aK: 'វិតក្កចេតសិក កើតក្នុងចិត្តបាន ៣ ប្រភេទ តាមសមគួរ គឺ កាមាវចរភូមិ រូបាវចរភូមិ និងលោកុត្តរភូមិ។',
    aE: 'The vitakka cetasika arises in three classes as appropriate: the sense-sphere, form-sphere, and supramundane planes.',
  },
  {
    qK: 'តើវិតក្កចេតសិក កើតក្នុងភូមិសត្វបានប៉ុន្មានភូមិ? ភូមិណាខ្លះ?',
    qE: 'In how many planes of beings does the vitakka cetasika arise? Which are they?',
    aK: 'វិតក្កចេតសិក កើតក្នុងភូមិសត្វបាន ៣០ ភូមិ (វៀរអសញ្ញីសត្តាភូមិ) គឺ អបាយភូមិ ៤ មនុស្ស ១ ទេវតា ៦ រូបភូមិ ១៥ អរូបភូមិ ៤។',
    aE: 'The vitakka cetasika arises in thirty planes of beings (excluding the asaññasatta plane): four woeful, one human, six celestial, fifteen form-sphere, and four formless.',
  },
  {
    qK: 'តើវិតក្កចេតសិក ជាហេតុ ឬនហេតុ?',
    qE: 'Is the vitakka cetasika a hetu or a na-hetu?',
    aK: 'វិតក្កចេតសិក ជា នហេតុ។',
    aE: 'The vitakka cetasika is a na-hetu.',
  },
  {
    qK: 'តើវិតក្កចេតសិក កើតក្នុងអសោភណចិត្ត ឬសោភណចិត្ត?',
    qE: 'Does the vitakka cetasika arise in non-beautiful or beautiful consciousness?',
    aK: 'វិតក្កចេតសិក កើតក្នុងអសោភណចិត្តតាមសមគួរផង និងសោភណចិត្តតាមសមគួរផង។',
    aE: 'The vitakka cetasika arises in non-beautiful consciousness as appropriate and in beautiful consciousness as appropriate.',
  },
  {
    qK: 'តើវិតក្កចេតសិក កើតក្នុងលោកិយចិត្ត ឬលោកុត្តរចិត្ត?',
    qE: 'Does the vitakka cetasika arise in worldly or supramundane consciousness?',
    aK: 'វិតក្កចេតសិក កើតក្នុងលោកិយចិត្តតាមសមគួរផង និងលោកុត្តរចិត្តតាមសមគួរផង។',
    aE: 'The vitakka cetasika arises in worldly consciousness as appropriate and in supramundane consciousness as appropriate.',
  },
  {
    qK: 'តើការត្រិះរិះខុស មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many kinds of wrong thought (micchā-vitakka) are there? Which are they?',
    aK: 'ការត្រិះរិះខុស មាន ៣ គឺ ៖ កាមវិតក្កៈ ការត្រិះរិះក្នុងកាម ។ ព្យាបាទវិតក្កៈ ការត្រិះរិះក្នុងការព្យាបាទ ។ វិហឹសាវិតក្កៈ ការត្រិះរិះក្នុងការបៀតបៀន។',
    aE: 'There are three kinds of wrong thought: kāma-vitakka (sensual thought), byāpāda-vitakka (thought of ill-will), and vihiṃsā-vitakka (thought of harming).',
  },
  {
    qK: 'តើការត្រិះរិះត្រូវ មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many kinds of right thought (sammā-vitakka) are there? Which are they?',
    aK: 'ការត្រិះរិះត្រូវ មាន ៣ គឺ ៖ នេក្ខម្មវិតក្កៈ ការត្រិះរិះចេញចាកកាម ។ អព្យាបាទវិតក្កៈ ការត្រិះរិះមិនព្យាបាទ ។ អវិហឹសាវិតក្កៈ ការត្រិះរិះមិនបៀតបៀន។',
    aE: 'There are three kinds of right thought: nekkhamma-vitakka (thought of renunciation), abyāpāda-vitakka (thought of non-ill-will), and avihiṃsā-vitakka (thought of non-harming).',
  },
]

const vicaraQas = [
  {
    qK: 'តើវិចារចេតសិក ស្ថិតនៅក្នុងក្រុមណា? ពួកណា?',
    qE: 'In which group and division does the vicāra cetasika belong?',
    aK: 'វិចារចេតសិក ស្ថិតនៅក្នុងក្រុម អញ្ញសមានាចេតសិក ពួកបកិណ្ណកចេតសិក។',
    aE: 'The vicāra cetasika belongs to the aññasamānā cetasikas group, the pakiṇṇaka division.',
  },
  {
    qK: 'តើវិចារចេតសិក មានន័យដូចម្តេច?',
    qE: 'What does the vicāra cetasika mean?',
    aK: 'វិចារចេតសិក មានន័យថា ជាធម្មជាតិត្រាច់ទៅក្នុងអារម្មណ៍ ឬពិចារណាក្នុងអារម្មណ៍។',
    aE: 'The vicāra cetasika means the nature that moves within the object or examines the object.',
  },
  {
    qK: 'ចូររៀបរាប់លក្ខណាទិចតុក្កៈ របស់វិចារចេតសិក?',
    qE: 'Explain the fourfold characteristic of the vicāra cetasika.',
    aK: 'លក្ខណាទិចតុក្កៈ របស់វិចារចេតសិក ៖ មានការពិចារណាក្នុងអារម្មណ៍ ជាលក្ខណៈ។ មានការប្រកបសហជាតធម៌ទុកក្នុងអារម្មណ៍ ជាកិច្ច។ មានការចងចិត្តទុកក្នុងអារម្មណ៍ ជាអាការប្រាកដ។ មានអារម្មណ៍ ជាហេតុជិត។',
    aE: 'The fourfold characteristic of vicāra: its characteristic is examining the object; its function is keeping the co-nascent states in the object; its manifestation is binding the mind in the object; its proximate cause is the object.',
  },
  {
    qK: 'តើវិចារចេតសិក ប្រព្រឹត្តតាមទ្វារណាខ្លះ?',
    qE: 'Through which doors does the vicāra cetasika operate?',
    aK: 'វិចារចេតសិក ប្រព្រឹត្តតាមទ្វារវិមុត្ត និង ទ្វារ ៦ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជីវ្ហាទ្វារ កាយទ្វារ និង មនោទ្វារ។',
    aE: 'The vicāra cetasika operates through the door-free (vimutti) and the six doors: eye, ear, nose, tongue, body, and mind.',
  },
  {
    qK: 'តើវិចារចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានដួង ក្នុងចំណោមចិត្ត ១២១ ដួង?',
    qE: 'In how many of the 121 consciousnesses does the vicāra cetasika arise?',
    aK: 'វិចារចេតសិក កើតបានក្នុងចិត្ត ៦៦ ដួង ក្នុងចំណោមចិត្ត ១២១ ដួង។',
    aE: 'The vicāra cetasika arises in 66 of the 121 consciousnesses.',
  },
  {
    qK: 'តើវិចារចេតសិក កើតបានក្នុងចិត្តប៉ុន្មានប្រភេទ? អ្វីខ្លះ?',
    qE: 'In how many classes of consciousness does the vicāra cetasika arise? Which are they?',
    aK: 'វិចារចេតសិក កើតបានក្នុងចិត្ត ៣ ប្រភេទ តាមសមគួរ គឺ កាមាវចរចិត្ត រូបាវចរចិត្ត និងលោកុត្តរចិត្ត។',
    aE: 'The vicāra cetasika arises in three classes as appropriate: sense-sphere, form-sphere, and supramundane consciousness.',
  },
  {
    qK: 'តើវិចារចេតសិក ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can the vicāra cetasika know? Which are they?',
    aK: 'វិចារចេតសិក ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'The vicāra cetasika can know six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើវិចារចេតសិក អាស្រ័យវត្ថុប៉ុន្មាន ក្នុងចំណោមវត្ថុទាំង ៦ ក្នុងបញ្ចវោការភូមិ? អាស្រ័យវត្ថុណា នៅចតុវោការភូមិ?',
    qE: 'Upon how many of the six bases does the vicāra cetasika depend in the five-aggregate plane? And which base in the four-aggregate plane?',
    aK: 'វិចារចេតសិក អាស្រ័យហទយវត្ថុ ក្នុងចំណោមវត្ថុទាំង ៦ នៅបញ្ចវោការភូមិ។ មិនអាស្រ័យវត្ថុ នៅចតុវោការភូមិ។',
    aE: 'The vicāra cetasika depends upon the heart-base, among the six bases, in the five-aggregate plane; and does not depend upon any base in the four-aggregate plane.',
  },
  {
    qK: 'តើបញ្ចវោការភូមិ មានន័យដូចម្តេច?',
    qE: 'What does pañcavokāra-bhūmi mean?',
    aK: 'បញ្ចវោការភូមិ មានន័យថា ភូមិដែលមានខន្ធ ៥ គឺ រូបក្ខន្ធ វេទនាខន្ធ សញ្ញាខន្ធ សង្ខារក្ខន្ធ និង វិញ្ញាណក្ខន្ធ។',
    aE: 'Pañcavokāra-bhūmi means the plane that has five aggregates: rūpa, vedanā, saññā, saṅkhāra, and viññāṇa.',
  },
  {
    qK: 'តើបញ្ចវោការភូមិ មានប៉ុន្មានភូមិសត្វ? ភូមិណាខ្លះ?',
    qE: 'How many planes of beings are in the five-aggregate plane? Which are they?',
    aK: 'បញ្ចវោការភូមិ មាន ២៦ ភូមិ គឺ អបាយភូមិ ៤ មនុស្ស ១ ទេវតា ៦ រូបភូមិ ១៥ (វៀរអសញ្ញីសត្តា និង អរូបភូមិ ៤)។',
    aE: 'The five-aggregate plane has 26 planes: four woeful, one human, six celestial, and fifteen form-sphere (excluding the asaññasatta and the four formless).',
  },
  {
    qK: 'តើចតុវោការភូមិ មានន័យដូចម្តេច?',
    qE: 'What does catuvokāra-bhūmi mean?',
    aK: 'ចតុវោការភូមិ មានន័យថា ភូមិដែលមាននាមខន្ធ ៤ គឺ វេទនាខន្ធ សញ្ញាខន្ធ សង្ខារក្ខន្ធ និង វិញ្ញាណក្ខន្ធ។',
    aE: 'Catuvokāra-bhūmi means the plane that has four mental aggregates: vedanā, saññā, saṅkhāra, and viññāṇa.',
  },
  {
    qK: 'តើចតុវោការភូមិ មានប៉ុន្មានភូមិសត្វ? ភូមិណាខ្លះ?',
    qE: 'How many planes of beings are in the four-aggregate plane? Which are they?',
    aK: 'ចតុវោការភូមិ មាន ៤ ភូមិសត្វ គឺ អរូបភូមិ ៤។',
    aE: 'The four-aggregate plane has four planes of beings: the four formless planes.',
  },
  {
    qK: 'តើវិចារចេតសិក កើតក្នុងភូមិសត្វប៉ុន្មានភូមិ? ភូមិណាខ្លះ?',
    qE: 'In how many planes of beings does the vicāra cetasika arise? Which are they?',
    aK: 'វិចារចេតសិក កើតក្នុងភូមិសត្វ ៣០ ភូមិ គឺ អបាយភូមិ ៤ មនុស្ស ១ ទេវតា ៦ រូបភូមិ ១៥ អរូបភូមិ ៤ (វៀរអសញ្ញីសត្តាភូមិ)។',
    aE: 'The vicāra cetasika arises in thirty planes of beings (excluding the asaññasatta plane): four woeful, one human, six celestial, fifteen form-sphere, and four formless.',
  },
  {
    qK: 'តើវិចារចេតសិក ជាហេតុ ឬ នហេតុ?',
    qE: 'Is the vicāra cetasika a hetu or a na-hetu?',
    aK: 'វិចារចេតសិក ជា នហេតុ។',
    aE: 'The vicāra cetasika is a na-hetu.',
  },
  {
    qK: 'តើវិចារចេតសិក កើតក្នុងអសោភណចិត្ត ឬ សោភណចិត្ត?',
    qE: 'Does the vicāra cetasika arise in non-beautiful or beautiful consciousness?',
    aK: 'វិចារចេតសិក កើតក្នុងអសោភណចិត្តតាមសមគួរផង និង សោភណចិត្តតាមសមគួរផង។',
    aE: 'The vicāra cetasika arises in non-beautiful consciousness as appropriate and in beautiful consciousness as appropriate.',
  },
  {
    qK: 'តើវិចារចេតសិក ចាត់ជាខន្ធអ្វី ក្នុងចំណោមខន្ធទាំង ៥?',
    qE: 'To which of the five aggregates is the vicāra cetasika classed?',
    aK: 'វិចារចេតសិក ចាត់ជា សង្ខារក្ខន្ធ ក្នុងចំណោមខន្ធទាំង ៥។',
    aE: 'The vicāra cetasika is classed as the saṅkhāra-khandha, among the five aggregates.',
  },
  {
    qK: 'តើវិចារចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានជាតិ? អ្វីខ្លះ?',
    qE: 'In how many jātis does the vicāra cetasika arise? Which are they?',
    aK: 'វិចារចេតសិក កើតក្នុងចិត្តបាន ៤ ជាតិ គឺ អកុសលជាតិ កុសលជាតិ វិបាកជាតិ និង កិរិយាជាតិ។',
    aE: 'The vicāra cetasika arises in four jātis: unwholesome, wholesome, resultant, and functional.',
  },
  {
    qK: 'ហេតុអ្វីបានជាវិចារចេតសិក មិនកើតក្នុងអរូបាវចរចិត្ត?',
    qE: 'Why does the vicāra cetasika not arise in the formless-sphere consciousness?',
    aK: 'បានជាវិចារចេតសិក មិនកើតក្នុងអរូបាវចរចិត្ត ព្រោះវិចារចេតសិកជាតួអង្គឈាន កើតតែក្នុងបឋមជ្ឈានចិត្ត ១១ ដួង និង ទុតិយជ្ឈានចិត្ត ១១ ដួង តែប៉ុណ្ណោះ។ ចំណែកអរូបាវចរចិត្ត ជាបញ្ចមជ្ឈានចិត្ត ដែលមានអង្គឈាន ២ គឺ ឧបេក្ខា និង ឯកគ្គតា មិនមានវិចារចេតសិកជាអង្គឈានទេ។',
    aE: 'The vicāra cetasika does not arise in the formless-sphere consciousness because, as a factor of jhāna, it arises only in the eleven first-jhāna and eleven second-jhāna consciousnesses, whereas the formless-sphere is fifth-jhāna consciousness having only two jhāna factors — upekkhā and ekaggatā — without vicāra.',
  },
  {
    qK: 'តើវិចារចេតសិក កើតក្នុងលោកិយចិត្ត ឬ លោកុត្តរចិត្ត?',
    qE: 'Does the vicāra cetasika arise in worldly or supramundane consciousness?',
    aK: 'វិចារចេតសិក កើតក្នុងលោកិយចិត្តតាមសមគួរផង និង លោកុត្តរចិត្តតាមសមគួរផង។',
    aE: 'The vicāra cetasika arises in worldly consciousness as appropriate and in supramundane consciousness as appropriate.',
  },
  {
    qK: 'តើលក្ខណាទិចតុក្កៈ មានន័យដូចម្តេច? មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'What does lakkhaṇādi-catukka mean? How many are there? Which are they?',
    aK: 'លក្ខណាទិចតុក្កៈ មានន័យថា ពួកធម៌ ៤ ដែលមានលក្ខណៈជាដើម។ មាន ៤ គឺ លក្ខណៈ កិច្ច អាការប្រាកដ និង ហេតុជិត។',
    aE: 'Lakkhaṇādi-catukka means the fourfold group beginning with characteristic. There are four: characteristic, function, manifestation, and proximate cause.',
  },
  {
    qK: 'តើសហជាតិធម៌ មានន័យដូចម្តេច?',
    qE: 'What does sahajāta-dhamma mean?',
    aK: 'សហជាតិធម៌ មានន័យថា ធម៌ដែលកើតដំណាលគ្នា សហការគ្នា បានដល់ចេតសិក និង ចេតសិក ចិត្ត និង រូប។',
    aE: 'Sahajāta-dhamma means dhammas that arise simultaneously and cooperate: cetasika with cetasika, and consciousness with matter.',
  },
]

const adhimokkhaQas = [
  {
    qK: 'តើអធិមោក្ខចេតសិក មានន័យដូចម្តេច?',
    qE: 'What does the adhimokkha cetasika mean?',
    aK: 'អធិមោក្ខចេតសិក មានន័យថា បង្អោនចិត្តទៅ ឬ ជឿយ៉ាងស៊ប់។',
    aE: 'The adhimokkha cetasika means bending the mind toward (the object) or believing firmly.',
  },
  {
    qK: 'តើអធិមោក្ខចេតសិក ស្ថិតនៅក្រុមណា? ពួកណា?',
    qE: 'In which group and division does the adhimokkha cetasika belong?',
    aK: 'អធិមោក្ខចេតសិក ស្ថិតនៅក្នុងក្រុម អញ្ញសមានាចេតសិក ពួកបកិណ្ណកចេតសិក។',
    aE: 'The adhimokkha cetasika belongs to the aññasamānā cetasikas, the pakiṇṇaka division.',
  },
  {
    qK: 'តើអធិមោក្ខចេតសិក ចាត់ជាខន្ធអ្វី ក្នុងចំណោមខន្ធទាំង ៥?',
    qE: 'To which of the five aggregates is the adhimokkha cetasika classed?',
    aK: 'អធិមោក្ខចេតសិក ចាត់ជា សង្ខារក្ខន្ធ ក្នុងចំណោមខន្ធទាំង ៥។',
    aE: 'The adhimokkha cetasika is classed as the saṅkhāra-khandha, among the five aggregates.',
  },
  {
    qK: 'តើអធិមោក្ខចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានជាតិ? អ្វីខ្លះ?',
    qE: 'In how many jātis does the adhimokkha cetasika arise? Which are they?',
    aK: 'អធិមោក្ខចេតសិក កើតក្នុងចិត្តបាន ៤ ជាតិ គឺ អកុសលជាតិ កុសលជាតិ វិបាកជាតិ និង កិរិយាជាតិ។',
    aE: 'The adhimokkha cetasika arises in four jātis: unwholesome, wholesome, resultant, and functional.',
  },
  {
    qK: 'តើអធិមោក្ខចេតសិក ប្រព្រឹត្តតាមទ្វារប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'Through how many doors does the adhimokkha cetasika operate? Which are they?',
    aK: 'អធិមោក្ខចេតសិក ប្រព្រឹត្តតាមទ្វារវិមុត្ត និង ទ្វារ ៦ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជីវ្ហាទ្វារ កាយទ្វារ និង មនោទ្វារ។',
    aE: 'The adhimokkha cetasika operates through the door-free and the six doors: eye, ear, nose, tongue, body, and mind.',
  },
  {
    qK: 'តើអធិមោក្ខចេតសិក ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can the adhimokkha cetasika know? Which are they?',
    aK: 'អធិមោក្ខចេតសិក ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'The adhimokkha cetasika can know six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើអធិមោក្ខចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានប្រភេទ? អ្វីខ្លះ?',
    qE: 'In how many classes of consciousness does the adhimokkha cetasika arise? Which are they?',
    aK: 'អធិមោក្ខចេតសិក កើតក្នុងចិត្តបាន ៤ ប្រភេទ គឺ កាមាវចរចិត្តតាមសមគួរ រូបាវចរចិត្ត អរូបាវចរចិត្ត និង លោកុត្តរចិត្ត។',
    aE: 'The adhimokkha cetasika arises in four classes: sense-sphere as appropriate, form-sphere, formless-sphere, and supramundane.',
  },
  {
    qK: 'តើអធិមោក្ខចេតសិក អាស្រ័យវត្ថុប៉ុន្មាន ក្នុងចំណោមវត្ថុទាំង ៦ នៅបញ្ចវោការភូមិ? អាស្រ័យវត្ថុណា នៅចតុវោការភូមិ?',
    qE: 'Upon how many of the six bases does the adhimokkha cetasika depend in the five-aggregate plane? And which base in the four-aggregate plane?',
    aK: 'អធិមោក្ខចេតសិក អាស្រ័យបាន ហទយវត្ថុ តែម្យ៉ាងប៉ុណ្ណោះ នៅបញ្ចវោការភូមិ។ មិនអាស្រ័យវត្ថុ នៅចតុវោការភូមិ។',
    aE: 'The adhimokkha cetasika depends only upon the heart-base in the five-aggregate plane, and does not depend upon any base in the four-aggregate plane.',
  },
  {
    qK: 'តើអធិមោក្ខចេតសិក ជាហេតុ ឬ ជានហេតុ?',
    qE: 'Is the adhimokkha cetasika a hetu or a na-hetu?',
    aK: 'អធិមោក្ខចេតសិក ជា នហេតុ។',
    aE: 'The adhimokkha cetasika is a na-hetu.',
  },
  {
    qK: 'តើអធិមោក្ខចេតសិក កើតក្នុងអសោភណចិត្ត ឬ សោភណចិត្ត?',
    qE: 'Does the adhimokkha cetasika arise in non-beautiful or beautiful consciousness?',
    aK: 'អធិមោក្ខចេតសិក អាចកើតបានទាំងក្នុង អសោភណចិត្តតាមសមគួរផង និង សោភណចិត្តតាមសមគួរផង។',
    aE: 'The adhimokkha cetasika can arise in both non-beautiful consciousness as appropriate and beautiful consciousness as appropriate.',
  },
  {
    qK: 'តើអធិមោក្ខចេតសិក កើតក្នុងលោកិយចិត្ត ឬ លោកុត្តរចិត្ត?',
    qE: 'Does the adhimokkha cetasika arise in worldly or supramundane consciousness?',
    aK: 'អធិមោក្ខចេតសិក អាចកើតបានទាំងក្នុង លោកិយចិត្តតាមសមគួរផង និង លោកុត្តរចិត្តផង។',
    aE: 'The adhimokkha cetasika can arise in both worldly consciousness as appropriate and supramundane consciousness.',
  },
  {
    qK: 'តើអធិមោក្ខចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានដួង?',
    qE: 'In how many consciousnesses does the adhimokkha cetasika arise?',
    aK: 'អធិមោក្ខចេតសិក កើតក្នុងចិត្តបាន ៧៨ ដួង ឬ ១១០ ដួង។',
    aE: 'The adhimokkha cetasika arises in 78 (or 110) consciousnesses.',
  },
  {
    qK: 'តើអធិមោក្ខចេតសិក មិនកើតក្នុងចិត្តប៉ុន្មានដួង? ដួងណាខ្លះ?',
    qE: 'In how many consciousnesses does the adhimokkha cetasika not arise? Which are they?',
    aK: 'អធិមោក្ខចេតសិក មិនកើតក្នុងចិត្ត ១១ ដួង គឺ មោហមូលចិត្តដួងទី ១ ឬ វិចិកិច្ឆាសម្បយុត្តចិត្ត ១ និង ទ្វិបញ្ចវិញ្ញាណ ១០ ដួង គឺ ចក្ខុវិញ្ញាណ ២ សោតវិញ្ញាណ ២ ឃានវិញ្ញាណ ២ ជីវ្ហាវិញ្ញាណ ២ កាយវិញ្ញាណ ២។',
    aE: 'The adhimokkha cetasika does not arise in 11 consciousnesses: the first moha-mūla (vicikicchā-sampayutta) citta and the ten double sense consciousnesses (two eye, two ear, two nose, two tongue, and two body consciousness).',
  },
  {
    qK: 'ចូររៀបរាប់លក្ខណាទិចតុក្កៈ របស់អធិមោក្ខចេតសិក?',
    qE: 'Explain the fourfold characteristic of the adhimokkha cetasika.',
    aK: 'លក្ខណាទិចតុក្កៈ របស់អធិមោក្ខចេតសិក គឺ ៖ មានការដាក់ចិត្តស៊ប់ ឬ សម្រេច (សន្និដ្ឋាន) ជាលក្ខណៈ។ មានការមិនសង្ស័យ ឬ មិនឃ្លេងឃ្លោង ជាកិច្ច។ មានការចុះចិត្តស៊ប់ ឬ កាត់សេចក្តី ជាអាការប្រាកដ។ មានធម៌ដែលគប្បីសម្រេច ឬ សន្និដ្ឋាន ជាហេតុជិត។',
    aE: 'The fourfold characteristic of adhimokkha: placing the mind firmly (deciding) as characteristic; non-doubt or non-hesitation as function; firm resolve or conclusion as manifestation; the dhammas suitable for decision as proximate cause.',
  },
  {
    qK: 'តើអធិមោក្ខចេតសិក បដិបក្ខនឹងចេតសិកណា?',
    qE: 'Which cetasika is the opposite of the adhimokkha cetasika?',
    aK: 'អធិមោក្ខចេតសិក បដិបក្ខនឹង វិចិកិច្ឆាចេតសិក។',
    aE: 'The adhimokkha cetasika is opposed to the vicikicchā (doubt) cetasika.',
  },
  {
    qK: 'ខណៈបង្អោនចិត្តជឿស៊ប់ក្នុងរឿងមង្គលភ្ញាក់ផ្អើល តើជាលក្ខណៈរបស់ចេតសិកណា?',
    qE: 'The moment of firmly believing in exciting superstitious events — which cetasika is this a characteristic of?',
    aK: 'ខណៈបង្អោនចិត្តជឿស៊ប់ក្នុងរឿងមង្គលភ្ញាក់ផ្អើល ជាលក្ខណៈរបស់ អធិមោក្ខចេតសិក។',
    aE: 'The moment of firmly believing in exciting superstitious events is a characteristic of the adhimokkha cetasika.',
  },
  {
    qK: 'ខណៈបង្អោនចិត្តជឿស៊ប់ក្នុងគុណព្រះរតនត្រៃ តើជាលក្ខណៈរបស់ចេតសិកណា?',
    qE: 'The moment of firmly believing in the virtues of the Triple Gem — which cetasika is this a characteristic of?',
    aK: 'ខណៈបង្អោនចិត្តជឿស៊ប់ ក្នុងគុណព្រះរតនត្រៃ ជាលក្ខណៈរបស់ អធិមោក្ខចេតសិក។',
    aE: 'The moment of firmly believing in the virtues of the Triple Gem is a characteristic of the adhimokkha cetasika.',
  },
  {
    qK: 'តើខណៈឃើញរូបជាទីប្រាថ្នា មានការបង្អោនចិត្តជឿស៊ប់ក្នុងខណៈនេះទេ? ហេតុអ្វី?',
    qE: 'When seeing a desirable visible object, is there firm belief in that moment? Why?',
    aK: 'ខណៈឃើញរូបជាទីប្រាថ្នា មិនមានការបង្អោនចិត្តជឿស៊ប់ទេ ព្រោះខណៈចិត្តឃើញរូប មានតែសព្វចិត្តសាធារណចេតសិក ៧ ប្រកបជាមួយប៉ុណ្ណោះ។',
    aE: 'When seeing a desirable visible object, there is no firm belief, because the eye-consciousness is accompanied only by the seven universal mental factors.',
  },
  {
    qK: 'តើខណៈឮសំឡេងគេជេរ មានការបង្អោនចិត្តជឿស៊ប់ដែរឬទេ? ហេតុអ្វី?',
    qE: 'When hearing someone scolding, is there firm belief as well? Why?',
    aK: 'ខណៈឮសំឡេងគេជេរ មិនមានការបង្អោនចិត្តជឿស៊ប់ទេ ព្រោះចិត្តឮសំឡេង មានតែសព្វចិត្តសាធារណចេតសិក ៧ ប្រកបជាមួយប៉ុណ្ណោះ។',
    aE: 'When hearing someone scolding, there is no firm belief, because the ear-consciousness is accompanied only by the seven universal mental factors.',
  },
  {
    qK: 'ខណៈឮសំឡេងធម៌ពីរោះៗ តើមានការបង្អោនចិត្តជឿស៊ប់ដែរឬទេ? ហេតុអ្វី?',
    qE: 'When hearing the pleasant sound of Dhamma, is there firm belief? Why?',
    aK: 'ខណៈឮសំឡេងធម៌ពីរោះៗ មិនមានការបង្អោនចិត្តជឿស៊ប់ទេ ព្រោះចិត្តឮសំឡេង មានតែសព្វចិត្តសាធារណចេតសិក ៧ ប្រកបជាមួយប៉ុណ្ណោះ។',
    aE: 'When hearing the pleasant sound of Dhamma, there is no firm belief, because the ear-consciousness is accompanied only by the seven universal mental factors.',
  },
]

const viriyaQas = [
  {
    qK: 'តើវីរិយចេតសិក មានន័យដូចម្តេច?',
    qE: 'What does the viriya cetasika mean?',
    aK: 'វីរិយចេតសិក មានន័យថា ធម្មជាតិ ឧស្សាហ៍ ព្យាយាម អង់អាច។',
    aE: 'The viriya cetasika means the nature of effort, exertion, and courage.',
  },
  {
    qK: 'តើវីរិយចេតសិក ចាត់ចូលក្នុងក្រុមណា? ពួកណា?',
    qE: 'In which group and division is the viriya cetasika classed?',
    aK: 'វីរិយចេតសិក ចាត់ចូលក្រុម អញ្ញសមានាចេតសិក ពួកបកិណ្ណកចេតសិក។',
    aE: 'The viriya cetasika is classed in the aññasamānā group, the pakiṇṇaka division.',
  },
  {
    qK: 'តើវីរិយចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានជាតិ? អ្វីខ្លះ?',
    qE: 'In how many jātis does the viriya cetasika arise? Which are they?',
    aK: 'វីរិយចេតសិក កើតក្នុងចិត្តបាន ៤ ជាតិ គឺ អកុសលជាតិ កុសលជាតិ វិបាកជាតិ និង កិរិយាជាតិ។',
    aE: 'The viriya cetasika arises in four jātis: unwholesome, wholesome, resultant, and functional.',
  },
  {
    qK: 'តើវីរិយចេតសិក ប្រព្រឹត្តតាមទ្វារបានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'Through how many doors does the viriya cetasika operate? Which are they?',
    aK: 'វីរិយចេតសិក ប្រព្រឹត្តតាមទ្វារវិមុត្ត និង ទ្វារ ៦ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជីវ្ហាទ្វារ កាយទ្វារ មនោទ្វារ។',
    aE: 'The viriya cetasika operates through the door-free and the six doors: eye, ear, nose, tongue, body, and mind.',
  },
  {
    qK: 'តើវីរិយចេតសិក ដឹងអារម្មណ៍ប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can the viriya cetasika know? Which are they?',
    aK: 'វីរិយចេតសិក ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'The viriya cetasika can know six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើវីរិយចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានប្រភេទ? អ្វីខ្លះ?',
    qE: 'In how many classes of consciousness does the viriya cetasika arise? Which are they?',
    aK: 'វីរិយចេតសិក កើតក្នុងចិត្តបាន ៤ ប្រភេទ គឺ កាមាវចរចិត្តតាមសមគួរ រូបាវចរចិត្ត អរូបាវចរចិត្ត និង លោកុត្តរចិត្ត។',
    aE: 'The viriya cetasika arises in four classes: sense-sphere as appropriate, form-sphere, formless-sphere, and supramundane.',
  },
  {
    qK: 'តើសំវេគវត្ថុ មានន័យដូចម្តេច? មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'What does saṃvega-vatthu mean? How many are there? Which are they?',
    aK: 'សំវេគវត្ថុ មានន័យថា ទីតាំងនៃសេចក្តីសង្វេគ មាន ៨ គឺ ការពិចារណាដល់ជាតិទុក្ខ ១ ជរាទុក្ខ ១ ព្យាធិទុក្ខ ១ មរណទុក្ខ ១ អបាយិកទុក្ខ ១ អតីតវដ្ដមូលកទុក្ខ ១ អនាគតវដ្ដមូលកទុក្ខ ១ និង ទុក្ខក្នុងការស្វែងរកអាហារក្នុងបច្ចុប្បន្ន ១។',
    aE: 'Saṃvega-vatthu means the grounds of urgency; there are eight: reflection on the suffering of birth, aging, illness, death, the woeful destinies, the suffering rooted in the past round, the suffering rooted in the future round, and the suffering of seeking food in the present.',
  },
  {
    qK: 'តើវីរិយចេតសិក អាស្រ័យវត្ថុណាខ្លះ ក្នុងចំណោមវត្ថុ ៦ នៅបញ្ចវោការភូមិ? អាស្រ័យវត្ថុណា នៅចតុវោការភូមិ?',
    qE: 'Upon which of the six bases does the viriya cetasika depend in the five-aggregate plane? And which in the four-aggregate plane?',
    aK: 'វីរិយចេតសិក អាស្រ័យហទយវត្ថុ នៅក្នុងភូមិដែលមានខន្ធ ៥ (បញ្ចវោការភូមិ)។ មិនអាស្រ័យហទយវត្ថុ ក្នុងភូមិដែលមានខន្ធ ៤ (ចតុវោការភូមិ)។',
    aE: 'The viriya cetasika depends upon the heart-base in the five-aggregate plane, and does not depend upon the heart-base in the four-aggregate plane.',
  },
  {
    qK: 'តើវីរិយចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានដួង? មិនកើតក្នុងចិត្តប៉ុន្មានដួង?',
    qE: 'In how many consciousnesses does the viriya cetasika arise, and in how many not?',
    aK: 'វីរិយចេតសិក កើតក្នុងចិត្តបាន ៧៣ ដួង ឬ ១០៥ ដួង។ មិនកើតក្នុងចិត្ត ១៦ ដួង។',
    aE: 'The viriya cetasika arises in 73 (or 105) consciousnesses and does not arise in 16.',
  },
  {
    qK: 'តើវីរិយចេតសិក កើតក្នុងអសោភណចិត្ត ឬ សោភណចិត្ត?',
    qE: 'Does the viriya cetasika arise in non-beautiful or beautiful consciousness?',
    aK: 'វីរិយចេតសិក កើតក្នុងអសោភណតាមសមគួរផង និង សោភណចិត្តផង។',
    aE: 'The viriya cetasika arises in non-beautiful consciousness as appropriate and in beautiful consciousness.',
  },
  {
    qK: 'តើវីរិយចេតសិក មានកិច្ចដូចម្តេច?',
    qE: 'What is the function of the viriya cetasika?',
    aK: 'វីរិយចេតសិក មានការឧបត្ថម្ភដល់សហជាតធម៌ ជាកិច្ច។',
    aE: 'The viriya cetasika has the function of supporting the co-nascent dhammas.',
  },
  {
    qK: 'តើវីរិយចេតសិក មានអ្វីជាហេតុជិត?',
    qE: 'What is the proximate cause of the viriya cetasika?',
    aK: 'វីរិយចេតសិក មាន សំវេគវត្ថុ ជាហេតុជិត។',
    aE: 'The viriya cetasika has saṃvega-vatthu (the grounds of urgency) as its proximate cause.',
  },
  {
    qK: 'តើវីរិយចេតសិក ជានហេតុ ឬ តួហេតុ?',
    qE: 'Is the viriya cetasika a na-hetu or a hetu?',
    aK: 'វីរិយចេតសិក ជា នហេតុ (មិនមែនជាតួហេតុ)។',
    aE: 'The viriya cetasika is a na-hetu (not a hetu).',
  },
  {
    qK: 'តើវីរិយចេតសិក ជាខន្ធអ្វី ក្នុងចំណោមខន្ធ ៥?',
    qE: 'To which of the five aggregates is the viriya cetasika classed?',
    aK: 'វីរិយចេតសិក ជា សង្ខារក្ខន្ធ ក្នុងចំណោមខន្ធ ៥។',
    aE: 'The viriya cetasika is classed as the saṅkhāra-khandha, among the five aggregates.',
  },
  {
    qK: 'តើវីរិយចេតសិក មានលក្ខណៈដូចម្តេច?',
    qE: 'What is the characteristic of the viriya cetasika?',
    aK: 'វីរិយចេតសិក មានការឧស្សាហ៍ ជាលក្ខណៈ។',
    aE: 'The viriya cetasika has effort (ussāha) as its characteristic.',
  },
  {
    qK: 'តើវីរិយចេតសិក មានអ្វីជាអាការប្រាកដ?',
    qE: 'What is the manifestation of the viriya cetasika?',
    aK: 'វីរិយចេតសិក មិនមានការរាថយ ជាអាការប្រាកដ។',
    aE: 'The viriya cetasika has non-withdrawal (steadfastness) as its manifestation.',
  },
  {
    qK: 'តើវីរិយចេតសិក កើតក្នុងភូមិសត្វប៉ុន្មានភូមិ? ភូមិណាខ្លះ?',
    qE: 'In how many planes of beings does the viriya cetasika arise? Which are they?',
    aK: 'វីរិយចេតសិក កើតក្នុងភូមិសត្វ ៣០ ភូមិ គឺ អបាយភូមិ ៤ មនុស្ស ១ ទេវតា ៦ រូបភូមិ ១៥ អរូបភូមិ ៤ (វៀរអសញ្ញីសត្តាភូមិ)។',
    aE: 'The viriya cetasika arises in thirty planes of beings (excluding the asaññasatta plane): four woeful, one human, six celestial, fifteen form-sphere, and four formless.',
  },
  {
    qK: 'តើវីរិយចេតសិក កើតក្នុងលោកិយចិត្ត ឬ លោកុត្តរចិត្ត?',
    qE: 'Does the viriya cetasika arise in worldly or supramundane consciousness?',
    aK: 'វីរិយចេតសិក កើតក្នុងលោកិយចិត្តតាមសមគួរផង និង លោកុត្តរចិត្តផង។',
    aE: 'The viriya cetasika arises in worldly consciousness as appropriate and in supramundane consciousness.',
  },
  {
    qK: 'តើវីរិយចេតសិក ជានាមធម៌ ឬ រូបធម៌?',
    qE: 'Is the viriya cetasika a nāma-dhamma or a rūpa-dhamma?',
    aK: 'វីរិយចេតសិក ជា នាមធម៌។',
    aE: 'The viriya cetasika is a nāma-dhamma.',
  },
  {
    qK: 'តើវីរិយចេតសិក ចាត់ជាបរមត្ថធម៌ណា ក្នុងចំណោមបរមត្ថធម៌ ៤?',
    qE: 'As which paramattha-dhamma, among the four, is the viriya cetasika classed?',
    aK: 'វីរិយចេតសិក ចាត់ជា ចេតសិកបរមត្ថ ក្នុងចំណោមបរមត្ថធម៌ ៤។',
    aE: 'The viriya cetasika is classed as a cetasika paramattha, among the four paramattha-dhammas.',
  },
  {
    qK: 'ខណៈព្យាយាមលួចទ្រព្យគេ តើជាលក្ខណៈរបស់ចេតសិកណា?',
    qE: 'The moment of striving to steal another wealth — which cetasika is this a characteristic of?',
    aK: 'ខណៈព្យាយាមលួចទ្រព្យគេ ជាលក្ខណៈរបស់ វីរិយចេតសិក នៅក្នុងអកុសលចិត្ត។',
    aE: 'The moment of striving to steal another wealth is a characteristic of the viriya cetasika, in the unwholesome consciousness.',
  },
  {
    qK: 'ខណៈព្យាយាមសរសេរអក្សរឱ្យត្រូវ តើជាលក្ខណៈរបស់ចេតសិកណា?',
    qE: 'The moment of striving to write letters correctly — which cetasika is this a characteristic of?',
    aK: 'ខណៈព្យាយាមសរសេរអក្សរឱ្យត្រូវ ជាលក្ខណៈរបស់ វីរិយចេតសិក។',
    aE: 'The moment of striving to write letters correctly is a characteristic of the viriya cetasika.',
  },
  {
    qK: 'ខណៈព្យាយាមរៀបចំផ្ទះឱ្យមានសណ្តាប់ធ្នាប់ តើជាលក្ខណៈរបស់ចេតសិកណា?',
    qE: 'The moment of striving to tidy up the house — which cetasika is this a characteristic of?',
    aK: 'ខណៈព្យាយាមរៀបចំផ្ទះឱ្យមានសណ្តាប់ធ្នាប់ ជាលក្ខណៈរបស់ វីរិយចេតសិក។',
    aE: 'The moment of striving to tidy up the house is a characteristic of the viriya cetasika.',
  },
  {
    qK: 'ខណៈព្យាយាមស្តាប់ធម៌ ដើម្បីបានយល់ តើជាលក្ខណៈរបស់ចេតសិកណា?',
    qE: 'The moment of striving to listen to the Dhamma in order to understand — which cetasika is this a characteristic of?',
    aK: 'ខណៈព្យាយាមស្តាប់ធម៌ ដើម្បីបានយល់ ជាលក្ខណៈរបស់ វីរិយចេតសិក។',
    aE: 'The moment of striving to listen to the Dhamma in order to understand is a characteristic of the viriya cetasika.',
  },
]

const pitiQas = [
  {
    qK: 'តើបីតិចេតសិក មានន័យដូចម្តេច?',
    qE: 'What does the pīti cetasika mean?',
    aK: 'បីតិចេតសិក មានន័យថា ធម្មជាតិត្រេកអររីករាយ ស្រស់ស្រាយ។',
    aE: 'The pīti cetasika means the nature that is delighted, joyful, and refreshed.',
  },
  {
    qK: 'តើបីតិចេតសិក ប្រកបជាមួយទោមនស្សវេទនាដែរឬទេ? ហេតុអ្វី?',
    qE: 'Is the pīti cetasika accompanied by domanassa-vedanā? Why?',
    aK: 'បីតិចេតសិក មិនប្រកបជាមួយទោមនស្សវេទនាទេ ព្រោះមានលក្ខណៈខុសគ្នា ៖ បីតិ មានការញាំងសម្បយុត្តធម៌ឱ្យរីករាយ ចំណែកទោមនស្សវេទនា មានការសោយអារម្មណ៍មិនជាទីប្រាថ្នា គឺមិនសុខផ្លូវចិត្ត។',
    aE: 'The pīti cetasika is not accompanied by domanassa-vedanā because their characteristics differ: pīti makes its concomitant dhammas glad, whereas domanassa-vedanā experiences an undesirable object — mental displeasure.',
  },
  {
    qK: 'តើបីតិចេតសិក ស្ថិតនៅក្នុងក្រុមណា? ពួកណា?',
    qE: 'In which group and division does the pīti cetasika belong?',
    aK: 'បីតិចេតសិក ស្ថិតនៅក្នុងក្រុម អញ្ញសមានាចេតសិក ពួកបកិណ្ណកចេតសិក។',
    aE: 'The pīti cetasika belongs to the aññasamānā group, the pakiṇṇaka division.',
  },
  {
    qK: 'តើបីតិចេតសិក មានលក្ខណាទិចតុក្កៈដូចម្តេចខ្លះ?',
    qE: 'What is the fourfold characteristic of the pīti cetasika?',
    aK: 'បីតិចេតសិក មានលក្ខណាទិចតុក្កៈ ដូចជា ៖ មានការស្រស់ស្រាយ សប្បាយពេញចិត្ត ជាលក្ខណៈ។ មានការធ្វើឱ្យកាយ និង ចិត្តឆ្អែត ជាកិច្ច។ មានការត្រេកអររីករាយ ជាអាការប្រាកដ។ មាននាមខន្ធ ៣ (វេទនាខន្ធ សញ្ញាខន្ធ និង វិញ្ញាណក្ខន្ធ) ដែលនៅសល់ ជាហេតុជិត។',
    aE: 'The fourfold characteristic of pīti: gladdening and delighting as characteristic; making body and mind full (satiated) as function; delighting (ravishing) as manifestation; the remaining three mental aggregates as proximate cause.',
  },
  {
    qK: 'តើបីតិចេតសិក មានប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'How many kinds is the pīti cetasika? Which are they?',
    aK: 'បីតិចេតសិក មាន ៥ យ៉ាង គឺ ខុទ្ទកាបីតិ (ត្រេកអរតិចៗ ត្រឹមព្រឺរោម ព្រឺស្បែក កើតម្តងម្កាល) ខណិកាបីតិ (ត្រេកអរមួយខណៈៗ ដូចផ្លេកបន្ទោរ) អោក្កន្តិកាបីតិ (ត្រេកអរមួយស្របក់ ដូចទឹករលកបោកខ្ទប់ច្រាំង) ឧប្បេក្កាបីតិ (ត្រេកអរខ្លាំង អាចញាំងកាយឱ្យអណ្តែតឡើង) និង ផរណាបីតិ (ត្រេកអរធ្វើឱ្យផ្សព្វផ្សាយជ្រួតជ្រាបទូទៅក្នុងកាយ ដូចសំឡីជប់ទឹក)។',
    aE: 'The pīti cetasika has five kinds: khuddakā pīti (slight joy raising the hairs), khaṇikā pīti (momentary joy, like a flash of lightning), okkantikā pīti (showering joy, like waves breaking on the shore), ubbegā pīti (elevating joy, lifting the body upward), and pharaṇā pīti (diffusing joy, pervading the whole body like a filled cotton sponge).',
  },
  {
    qK: 'តើបីតិចេតសិក ចាត់ជាខន្ធអ្វី ក្នុងចំណោមខន្ធទាំង ៥?',
    qE: 'To which of the five aggregates is the pīti cetasika classed?',
    aK: 'បីតិចេតសិក ចាត់ជា សង្ខារក្ខន្ធ ក្នុងចំណោមខន្ធទាំង ៥។',
    aE: 'The pīti cetasika is classed as the saṅkhāra-khandha, among the five aggregates.',
  },
  {
    qK: 'តើបីតិចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានជាតិ? អ្វីខ្លះ?',
    qE: 'In how many jātis does the pīti cetasika arise? Which are they?',
    aK: 'បីតិចេតសិក កើតក្នុងចិត្តបាន ៤ ជាតិ គឺ អកុសលជាតិ កុសលជាតិ វិបាកជាតិ និង កិរិយាជាតិ។',
    aE: 'The pīti cetasika arises in four jātis: unwholesome, wholesome, resultant, and functional.',
  },
  {
    qK: 'តើបីតិចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានដួង? ក្នុងចំណោមចិត្ត ១២១ ដួង?',
    qE: 'In how many of the 121 consciousnesses does the pīti cetasika arise?',
    aK: 'បីតិចេតសិក កើតក្នុងចិត្តបាន ៥១ ដួង ក្នុងចំណោមចិត្ត ១២១ ដួង។',
    aE: 'The pīti cetasika arises in 51 of the 121 consciousnesses.',
  },
  {
    qK: 'តើបីតិចេតសិក អាចប្រព្រឹត្តបានទ្វារប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'Through how many doors can the pīti cetasika operate? Which are they?',
    aK: 'បីតិចេតសិក អាចប្រព្រឹត្តបានទ្វារវិមុត្ត និង ទ្វារទាំង ៦ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជីវ្ហាទ្វារ កាយទ្វារ មនោទ្វារ។',
    aE: 'The pīti cetasika can operate through the door-free and the six doors: eye, ear, nose, tongue, body, and mind.',
  },
  {
    qK: 'តើបីតិចេតសិក ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can the pīti cetasika know? Which are they?',
    aK: 'បីតិចេតសិក ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'The pīti cetasika can know six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើបីតិចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានប្រភេទ? អ្វីខ្លះ?',
    qE: 'In how many classes of consciousness does the pīti cetasika arise? Which are they?',
    aK: 'បីតិចេតសិក កើតក្នុងចិត្តបាន ៣ ប្រភេទ តាមសមគួរ គឺ កាមាវចរចិត្ត រូបាវចរចិត្ត និង លោកុត្តរចិត្ត (វៀរអរូបាវចរចិត្ត)។',
    aE: 'The pīti cetasika arises in three classes as appropriate: sense-sphere, form-sphere, and supramundane (excluding formless-sphere).',
  },
  {
    qK: 'ហេតុអ្វីបានបីតិចេតសិក មិនកើតក្នុងអរូបាវចរចិត្ត?',
    qE: 'Why does the pīti cetasika not arise in the formless-sphere consciousness?',
    aK: 'បានជាបីតិចេតសិក មិនកើតក្នុងអរូបាវចរចិត្ត ព្រោះអរូបាវចរចិត្ត ជាបញ្ចមជ្ឈានចិត្ត ប្រកបជាមួយឧបេក្ខាវេទនា ហើយបីតិ មិនអាចកើតរួមគ្នាជាមួយឧបេក្ខាវេទនាបានទេ។',
    aE: 'The pīti cetasika does not arise in the formless-sphere consciousness because it is fifth-jhāna consciousness accompanied by upekkhā-vedanā, and pīti cannot arise together with upekkhā-vedanā.',
  },
  {
    qK: 'តើបីតិចេតសិក អាស្រ័យវត្ថុណា ក្នុងចំណោមវត្ថុទាំង ៦? អាស្រ័យវត្ថុណា នៅចតុវោការភូមិ?',
    qE: 'Upon which of the six bases does the pīti cetasika depend? And which in the four-aggregate plane?',
    aK: 'បីតិចេតសិក អាស្រ័យហទយវត្ថុ ក្នុងចំណោមវត្ថុទាំង ៦ ក្នុងភូមិដែលមានខន្ធ ៥ (បញ្ចវោការភូមិ)។ មិនអាស្រ័យវត្ថុ នៅចតុវោការភូមិ។',
    aE: 'The pīti cetasika depends upon the heart-base, among the six bases, in the five-aggregate plane; and does not depend upon any base in the four-aggregate plane.',
  },
  {
    qK: 'តើបីតិចេតសិក ជា ហេតុ ឬ នហេតុ?',
    qE: 'Is the pīti cetasika a hetu or a na-hetu?',
    aK: 'បីតិចេតសិក ជា នហេតុ។',
    aE: 'The pīti cetasika is a na-hetu.',
  },
  {
    qK: 'តើបីតិចេតសិក កើតក្នុងអសោភណចិត្ត ឬ សោភណចិត្ត?',
    qE: 'Does the pīti cetasika arise in non-beautiful or beautiful consciousness?',
    aK: 'បីតិចេតសិក កើតក្នុងអសោភណចិត្តតាមសមគួរផង និង សោភណចិត្តតាមសមគួរផង។',
    aE: 'The pīti cetasika arises in non-beautiful consciousness as appropriate and in beautiful consciousness as appropriate.',
  },
  {
    qK: 'តើបីតិចេតសិក កើតក្នុងលោកិយចិត្ត ឬ លោកុត្តរចិត្ត?',
    qE: 'Does the pīti cetasika arise in worldly or supramundane consciousness?',
    aK: 'បីតិចេតសិក កើតក្នុងលោកិយចិត្តតាមសមគួរផង និង លោកុត្តរចិត្តតាមសមគួរផង។',
    aE: 'The pīti cetasika arises in worldly consciousness as appropriate and in supramundane consciousness as appropriate.',
  },
  {
    qK: 'តើបីតិចេតសិក កើតក្នុងភូមិសត្វប៉ុន្មានភូមិ? ភូមិណាខ្លះ?',
    qE: 'In how many planes of beings does the pīti cetasika arise? Which are they?',
    aK: 'បីតិចេតសិក កើតក្នុងភូមិសត្វ ៣០ ភូមិ គឺ អបាយភូមិ ៤ មនុស្ស ១ ទេវតា ៦ រូបភូមិ ១៥ (វៀរអសញ្ញីសត្តាភូមិ) និង អរូបភូមិ ៤។',
    aE: 'The pīti cetasika arises in thirty planes of beings: four woeful, one human, six celestial, fifteen form-sphere (excluding the asaññasatta plane), and four formless.',
  },
  {
    qK: 'តើបីតិចេតសិក ជានាមធម៌ ឬ រូបធម៌?',
    qE: 'Is the pīti cetasika a nāma-dhamma or a rūpa-dhamma?',
    aK: 'បីតិចេតសិក ជា នាមធម៌។',
    aE: 'The pīti cetasika is a nāma-dhamma.',
  },
  {
    qK: 'តើបីតិចេតសិក ចាត់ជាបរមត្ថធម៌ណា ក្នុងចំណោមបរមត្ថធម៌ ៤?',
    qE: 'As which paramattha-dhamma, among the four, is the pīti cetasika classed?',
    aK: 'បីតិចេតសិក ចាត់ជា ចេតសិកបរមត្ថ ក្នុងចំណោមបរមត្ថធម៌ ៤។',
    aE: 'The pīti cetasika is classed as a cetasika paramattha, among the four paramattha-dhammas.',
  },
  {
    qK: 'ខណៈត្រេកអរក្នុងការរៀនពូកែ តើការត្រេកអរនេះ ជាលក្ខណៈរបស់ចេតសិកណា?',
    qE: 'The moment of delight in learning well — which cetasika is this delight a characteristic of?',
    aK: 'ខណៈត្រេកអរក្នុងការរៀនពូកែ ជាលក្ខណៈរបស់ បីតិចេតសិក។',
    aE: 'The moment of delight in learning well is a characteristic of the pīti cetasika.',
  },
  {
    qK: 'ខណៈត្រេកអរក្នុងការឱ្យទានដល់ព្រះសង្ឃ តើជាលក្ខណៈរបស់ចេតសិកណា?',
    qE: 'The moment of delight in giving alms to the Saṅgha — which cetasika is this a characteristic of?',
    aK: 'ខណៈត្រេកអរក្នុងការឱ្យទានដល់ព្រះសង្ឃ ជាលក្ខណៈរបស់ បីតិចេតសិក។',
    aE: 'The moment of delight in giving alms to the Saṅgha is a characteristic of the pīti cetasika.',
  },
  {
    qK: 'ខណៈត្រេកអរក្នុងការជាសះស្បើយពីជំងឺ តើជាលក្ខណៈរបស់ចេតសិកណា?',
    qE: 'The moment of delight in recovering from illness — which cetasika is this a characteristic of?',
    aK: 'ខណៈត្រេកអរក្នុងការជាសះស្បើយពីជំងឺ ជាលក្ខណៈរបស់ បីតិចេតសិក។',
    aE: 'The moment of delight in recovering from illness is a characteristic of the pīti cetasika.',
  },
  {
    qK: 'ខណៈត្រេកអរព្រោះជិតបានចូលរួមក្នុងពិធីឆ្លងបទុមចេតិយ តើជាលក្ខណៈរបស់ចេតសិកណា?',
    qE: 'The moment of delight at soon attending the Paduma-cetiya consecration — which cetasika is this a characteristic of?',
    aK: 'ខណៈត្រេកអរព្រោះជិតបានចូលរួមក្នុងពិធីបុណ្យឆ្លងបទុមចេតិយ ជាលក្ខណៈរបស់ បីតិចេតសិក។',
    aE: 'The moment of delight at soon attending the Paduma-cetiya consecration festival is a characteristic of the pīti cetasika.',
  },
]

const chandaQas = [
  {
    qK: 'តើឆន្ទៈចេតសិក មានន័យដូចម្តេច?',
    qE: 'What does the chanda cetasika mean?',
    aK: 'ឆន្ទៈចេតសិក មានន័យថា សេចក្តីពេញចិត្ត ឬ ការប្រាថ្នាដើម្បីធ្វើ។',
    aE: 'The chanda cetasika means satisfaction or the desire to act.',
  },
  {
    qK: 'តើឆន្ទៈចេតសិក កើតក្នុងចិត្តប៉ុន្មានដួង?',
    qE: 'In how many consciousnesses does the chanda cetasika arise?',
    aK: 'ឆន្ទៈចេតសិក កើតក្នុងចិត្តបាន ៦៩ ដួង ឬ ១០១ ដួង។',
    aE: 'The chanda cetasika arises in 69 (or 101) consciousnesses.',
  },
  {
    qK: 'តើឆន្ទៈចេតសិក មិនកើតក្នុងចិត្តប៉ុន្មានដួង? ដួងណាខ្លះ?',
    qE: 'In how many consciousnesses does the chanda cetasika not arise? Which are they?',
    aK: 'ឆន្ទៈចេតសិក មិនកើតក្នុងចិត្ត ២០ ដួង គឺ មោហមូលចិត្ត ២ ដួង និង អហេតុកចិត្ត ១៨ ដួង។',
    aE: 'The chanda cetasika does not arise in 20 consciousnesses: the two moha-mūla and the eighteen ahetuka consciousnesses.',
  },
  {
    qK: 'តើឆន្ទៈចេតសិក ចាត់ជាខន្ធអ្វី ក្នុងចំណោមខន្ធ ៥?',
    qE: 'To which of the five aggregates is the chanda cetasika classed?',
    aK: 'ឆន្ទៈចេតសិក ចាត់ជា សង្ខារក្ខន្ធ ក្នុងចំណោមខន្ធទាំង ៥។',
    aE: 'The chanda cetasika is classed as the saṅkhāra-khandha, among the five aggregates.',
  },
  {
    qK: 'តើឆន្ទៈចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានជាតិ? ជាតិអ្វីខ្លះ?',
    qE: 'In how many jātis does the chanda cetasika arise? Which are they?',
    aK: 'ឆន្ទៈចេតសិក កើតក្នុងចិត្តបាន ៤ ជាតិ គឺ អកុសលជាតិ កុសលជាតិ វិបាកជាតិ និង កិរិយាជាតិ។',
    aE: 'The chanda cetasika arises in four jātis: unwholesome, wholesome, resultant, and functional.',
  },
  {
    qK: 'តើឆន្ទៈចេតសិក ប្រព្រឹត្តតាមទ្វារប៉ុន្មាន? ទ្វារអ្វីខ្លះ?',
    qE: 'Through how many doors does the chanda cetasika operate? Which doors are they?',
    aK: 'ឆន្ទៈចេតសិក ប្រព្រឹត្តតាមទ្វារវិមុត្ត និង ទ្វារ ៦ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជីវ្ហាទ្វារ កាយទ្វារ មនោទ្វារ។',
    aE: 'The chanda cetasika operates through the door-free and the six doors: eye, ear, nose, tongue, body, and mind.',
  },
  {
    qK: 'តើឆន្ទៈចេតសិក ដឹងអារម្មណ៍បានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many objects can the chanda cetasika know? Which are they?',
    aK: 'ឆន្ទៈចេតសិក ដឹងអារម្មណ៍បាន ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'The chanda cetasika can know six objects: visible, sound, odour, taste, tangible, and mental object.',
  },
  {
    qK: 'តើឆន្ទៈចេតសិក អាស្រ័យវត្ថុណា ក្នុងចំណោមវត្ថុទាំង ៦ ក្នុងបញ្ចវោការភូមិ? អាស្រ័យវត្ថុណា នៅចតុវោការភូមិ?',
    qE: 'Upon which of the six bases does the chanda cetasika depend in the five-aggregate plane? And which in the four-aggregate plane?',
    aK: 'ឆន្ទៈចេតសិក អាស្រ័យហទយវត្ថុ នៅក្នុងបញ្ចវោការភូមិ។ មិនអាស្រ័យវត្ថុ នៅចតុវោការភូមិ។',
    aE: 'The chanda cetasika depends upon the heart-base in the five-aggregate plane, and does not depend upon any base in the four-aggregate plane.',
  },
  {
    qK: 'តើឆន្ទៈចេតសិក កើតក្នុងចិត្តបានប៉ុន្មានភូមិចិត្ត? ភូមិណាខ្លះ?',
    qE: 'In how many planes of consciousness does the chanda cetasika arise? Which are they?',
    aK: 'ឆន្ទៈចេតសិក កើតក្នុងចិត្តបាន ៤ ភូមិចិត្ត គឺ កាមាវចរភូមិតាមសមគួរ រូបាវចរភូមិ អរូបាវចរភូមិ និង លោកុត្តរភូមិ។',
    aE: 'The chanda cetasika arises in four planes of consciousness: sense-sphere as appropriate, form-sphere, formless-sphere, and supramundane.',
  },
  {
    qK: 'តើឆន្ទៈចេតសិក កើតក្នុងអសោភណចិត្ត ឬ សោភណចិត្ត?',
    qE: 'Does the chanda cetasika arise in non-beautiful or beautiful consciousness?',
    aK: 'ឆន្ទៈចេតសិក កើតក្នុងអសោភណចិត្តតាមសមគួរផង និង សោភណចិត្តផង។',
    aE: 'The chanda cetasika arises in non-beautiful consciousness as appropriate and in beautiful consciousness.',
  },
  {
    qK: 'តើឆន្ទៈចេតសិក ជាហេតុ ឬ នហេតុ?',
    qE: 'Is the chanda cetasika a hetu or a na-hetu?',
    aK: 'ឆន្ទៈចេតសិក ជា នហេតុ (មិនមែនហេតុ)។',
    aE: 'The chanda cetasika is a na-hetu (not a hetu).',
  },
  {
    qK: 'តើឆន្ទៈចេតសិក កើតក្នុងលោកិយចិត្ត ឬ លោកុត្តរចិត្ត?',
    qE: 'Does the chanda cetasika arise in worldly or supramundane consciousness?',
    aK: 'ឆន្ទៈចេតសិក កើតក្នុងលោកិយចិត្តតាមសមគួរផង និង លោកុត្តរចិត្តផង។',
    aE: 'The chanda cetasika arises in worldly consciousness as appropriate and in supramundane consciousness.',
  },
  {
    qK: 'តើឆន្ទៈចេតសិក មានលក្ខណៈដូចម្តេចខ្លះ?',
    qE: 'What is the characteristic of the chanda cetasika?',
    aK: 'ឆន្ទៈចេតសិក មានការប្រាថ្នាដើម្បីធ្វើ ជាលក្ខណៈ។',
    aE: 'The chanda cetasika has the desire to act as its characteristic.',
  },
  {
    qK: 'តើឆន្ទៈចេតសិក មានកិច្ចដូចម្តេចខ្លះ?',
    qE: 'What is the function of the chanda cetasika?',
    aK: 'ឆន្ទៈចេតសិក មានការស្វែងរកអារម្មណ៍ ជាកិច្ច។',
    aE: 'The chanda cetasika has the function of searching for the object.',
  },
  {
    qK: 'តើឆន្ទៈចេតសិក មានអាការប្រាកដដូចម្តេចខ្លះ?',
    qE: 'What is the manifestation of the chanda cetasika?',
    aK: 'ឆន្ទៈចេតសិក មានសេចក្តីប្រាថ្នា ត្រូវការអារម្មណ៍ ជាអាការប្រាកដ។',
    aE: 'The chanda cetasika has the desire and need for the object as its manifestation.',
  },
  {
    qK: 'តើឆន្ទៈចេតសិក មានហេតុជិតដូចម្តេចខ្លះ?',
    qE: 'What is the proximate cause of the chanda cetasika?',
    aK: 'ឆន្ទៈចេតសិក មាន អារម្មណ៍ ជាហេតុជិត។',
    aE: 'The chanda cetasika has the object as its proximate cause.',
  },
  {
    qK: 'តើការពេញចិត្តក្នុងរូប សំឡេង ក្លិន រស ផោដ្ឋព្វៈ ចាត់ជាឆន្ទៈចេតសិកដែរឬទេ?',
    qE: 'Is satisfaction in visible form, sound, odour, taste, and tangible objects classed as the chanda cetasika?',
    aK: 'ការពេញចិត្តក្នុងរូប សំឡេង ក្លិន រស ផោដ្ឋព្វៈ ចាត់ជា ឆន្ទៈចេតសិក។',
    aE: 'Satisfaction in visible form, sound, odour, taste, and tangible objects is classed as the chanda cetasika.',
  },
  {
    qK: 'តើការជាប់ជំពាក់នឹងអារម្មណ៍ ជាឆន្ទៈចេតសិកដែរឬទេ?',
    qE: 'Is attachment to the object the chanda cetasika as well?',
    aK: 'ការជាប់ជំពាក់នឹងអារម្មណ៍ មិនមែនជាឆន្ទៈចេតសិកទេ គឺជា លោភចេតសិក។',
    aE: 'Attachment to the object is not the chanda cetasika, but the lobha (greed) cetasika.',
  },
  {
    qK: 'តើឆន្ទៈចេតសិក ស្ថិតក្នុងក្រុមណា? ពួកណា?',
    qE: 'In which group and division does the chanda cetasika belong?',
    aK: 'ឆន្ទៈចេតសិក ស្ថិតក្នុងក្រុម អញ្ញសមានាចេតសិក ពួកបកិណ្ណកចេតសិក។',
    aE: 'The chanda cetasika belongs to the aññasamānā group, the pakiṇṇaka division.',
  },
  {
    qK: 'តើឆន្ទៈចេតសិក ជានាមធម៌ ឬ រូបធម៌?',
    qE: 'Is the chanda cetasika a nāma-dhamma or a rūpa-dhamma?',
    aK: 'ឆន្ទៈចេតសិក ជា នាមធម៌។',
    aE: 'The chanda cetasika is a nāma-dhamma.',
  },
  {
    qK: 'តើឆន្ទៈចេតសិក ចាត់ជាបរមត្ថធម៌ណា ក្នុងចំណោមបរមត្ថធម៌ ៤?',
    qE: 'As which paramattha-dhamma, among the four, is the chanda cetasika classed?',
    aK: 'ឆន្ទៈចេតសិក ចាត់ជា ចេតសិកបរមត្ថ ក្នុងចំណោមបរមត្ថធម៌ ៤។',
    aE: 'The chanda cetasika is classed as a cetasika paramattha, among the four paramattha-dhammas.',
  },
  {
    qK: 'ខណៈពេញចិត្តក្នុងរូបស្អាត តើជាលក្ខណៈរបស់ចេតសិកណា?',
    qE: 'The moment of satisfaction in a beautiful visible form — which cetasika is this a characteristic of?',
    aK: 'ខណៈពេញចិត្តក្នុងរូបស្អាត ជាលក្ខណៈរបស់ ឆន្ទៈចេតសិក។',
    aE: 'The moment of satisfaction in a beautiful visible form is a characteristic of the chanda cetasika.',
  },
  {
    qK: 'ខណៈពេញចិត្តក្នុងការសម្លាប់សត្វ តើជាលក្ខណៈរបស់ចេតសិកណា?',
    qE: 'The moment of satisfaction in killing an animal — which cetasika is this a characteristic of?',
    aK: 'ខណៈពេញចិត្តក្នុងការសម្លាប់សត្វ ជាលក្ខណៈរបស់ ឆន្ទៈចេតសិក។',
    aE: 'The moment of satisfaction in killing an animal is a characteristic of the chanda cetasika.',
  },
  {
    qK: 'ខណៈពេញចិត្តក្នុងការសិក្សាព្រះធម៌ តើជាលក្ខណៈរបស់ចេតសិកណា?',
    qE: 'The moment of satisfaction in studying the Dhamma — which cetasika is this a characteristic of?',
    aK: 'ខណៈពេញចិត្តក្នុងការសិក្សាព្រះធម៌ ជាលក្ខណៈរបស់ ឆន្ទៈចេតសិក។',
    aE: 'The moment of satisfaction in studying the Dhamma is a characteristic of the chanda cetasika.',
  },
]



</script>