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

    <!-- ===== Section 24: អកុសលចេតសិក ១៤ ===== -->
    <h2 v-if="!searching || filteredAkusala.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('អកុសលចេតសិក ១៤', 'The 14 Unwholesome Cetasikas') }}
    </h2>
    <div v-if="!searching || filteredAkusala.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredAkusala" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 25: មោហចេតសិក ===== -->
    <h2 v-if="!searching || filteredMoha.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('មោហចេតសិក', 'Moha (Delusion)') }}
    </h2>
    <div v-if="!searching || filteredMoha.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredMoha" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 26: អហិរិកៈចេតសិក ===== -->
    <h2 v-if="!searching || filteredAhirika.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('អហិរិកៈចេតសិក', 'Ahirika (Shamelessness)') }}
    </h2>
    <div v-if="!searching || filteredAhirika.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredAhirika" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 27: ឯកគ្គតា លក្ខណាទិចតុក្កៈ ===== -->
    <h2 v-if="!searching || filteredEkaggataLakkhana.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ឯកគ្គតា លក្ខណាទិចតុក្កៈ', 'Ekaggatā Lakkhana-ādi-catukka') }}
    </h2>
    <div v-if="!searching || filteredEkaggataLakkhana.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredEkaggataLakkhana" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 28: ឯកគ្គតា តួនាទីឧទាហរណ៍ ===== -->
    <h2 v-if="!searching || filteredEkaggataKicca.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ឯកគ្គតា តួនាទីឧទាហរណ៍', 'Ekaggatā Kicca (Function) Examples') }}
    </h2>
    <div v-if="!searching || filteredEkaggataKicca.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredEkaggataKicca" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 29: ជីវិតិន្រ្ទិយ លក្ខណាទិចតុក្កៈ ===== -->
    <h2 v-if="!searching || filteredJiviLakkhana.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ជីវិតិន្រ្ទិយ លក្ខណាទិចតុក្កៈ', 'Jīvitindriya Lakkhana-ādi-catukka') }}
    </h2>
    <div v-if="!searching || filteredJiviLakkhana.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredJiviLakkhana" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 30: ជីវិតិន្រ្ទិយ តួនាទីឧទាហរណ៍ ===== -->
    <h2 v-if="!searching || filteredJiviKicca.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ជីវិតិន្រ្ទិយ តួនាទីឧទាហរណ៍', 'Jīvitindriya Kicca (Function) Examples') }}
    </h2>
    <div v-if="!searching || filteredJiviKicca.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredJiviKicca" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 31: ហិរិ និង ឱត្តប្ប ===== -->
    <h2 v-if="!searching || filteredHiriOttappa.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ហិរិ និង ឱត្តប្ប', 'Hiri and Ottappa') }}
    </h2>
    <div v-if="!searching || filteredHiriOttappa.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredHiriOttappa" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 32: អលោភចេតសិក ===== -->
    <h2 v-if="!searching || filteredAlobha.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('អលោភចេតសិក', 'Alobha (Non-greed)') }}
    </h2>
    <div v-if="!searching || filteredAlobha.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredAlobha" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 33: អទោសចេតសិក ===== -->
    <h2 v-if="!searching || filteredAdosa.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('អទោសចេតសិក', 'Adosa (Non-aversion / Loving-kindness)') }}
    </h2>
    <div v-if="!searching || filteredAdosa.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredAdosa" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 34: តត្រមជ្ឈត្តតាចេតសិក ===== -->
    <h2 v-if="!searching || filteredTatramajjhattata.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('តត្រមជ្ឈត្តតាចេតសិក', 'Tatramajjhattatā (Equanimity)') }}
    </h2>
    <div v-if="!searching || filteredTatramajjhattata.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredTatramajjhattata" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 35: បស្សទ្ធិចេតសិក ===== -->
    <h2 v-if="!searching || filteredPassaddhi.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('បស្សទ្ធិចេតសិក', 'Passaddhi (Tranquillity)') }}
    </h2>
    <div v-if="!searching || filteredPassaddhi.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredPassaddhi" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 36: លហុតាចេតសិក ===== -->
    <h2 v-if="!searching || filteredLahuta.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('លហុតាចេតសិក', 'Lahutā (Lightness)') }}
    </h2>
    <div v-if="!searching || filteredLahuta.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredLahuta" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 37: មុទុតាចេតសិក ===== -->
    <h2 v-if="!searching || filteredMuduta.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('មុទុតាចេតសិក', 'Mudutā (Softness / Gentleness)') }}
    </h2>
    <div v-if="!searching || filteredMuduta.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredMuduta" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 38: កម្មញ្ញតាចេតសិក ===== -->
    <h2 v-if="!searching || filteredKammannata.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('កម្មញ្ញតាចេតសិក', 'Kammaññatā (Wieldiness / Adaptability)') }}
    </h2>
    <div v-if="!searching || filteredKammannata.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredKammannata" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 39: បាគុញ្ញតាចេតសិក ===== -->
    <h2 v-if="!searching || filteredPagunnata.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('បាគុញ្ញតាចេតសិក', 'Pāguññatā (Proficiency / Skillfulness)') }}
    </h2>
    <div v-if="!searching || filteredPagunnata.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredPagunnata" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 40: ឧជុកតាចេតសិក ===== -->
    <h2 v-if="!searching || filteredUjukata.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ឧជុកតាចេតសិក', 'Ujukatā (Uprightness / Straightness)') }}
    </h2>
    <div v-if="!searching || filteredUjukata.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredUjukata" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 41: វិរតិចេតសិក ===== -->
    <h2 v-if="!searching || filteredVirati.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('វិរតិចេតសិក', 'Virati (Abstinence)') }}
    </h2>
    <div v-if="!searching || filteredVirati.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredVirati" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 42: សម្មាអាជីវៈ និងវិរតិប្រភេទ ===== -->
    <h2 v-if="!searching || filteredSamajiva.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('សម្មាអាជីវៈ និងវិរតិប្រភេទ', 'Sammā-ājīva & Kinds of Virati') }}
    </h2>
    <div v-if="!searching || filteredSamajiva.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredSamajiva" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 43: ករុណាចេតសិក ===== -->
    <h2 v-if="!searching || filteredKaruna.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ករុណាចេតសិក', 'Karuṇā Cetasika') }}
    </h2>
    <div v-if="!searching || filteredKaruna.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredKaruna" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 44: មុទិតា និងព្រហ្មវិហារ ===== -->
    <h2 v-if="!searching || filteredMudita.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('មុទិតា និងព្រហ្មវិហារ', 'Muditā & Brahmavihāra') }}
    </h2>
    <div v-if="!searching || filteredMudita.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredMudita" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 45: បញ្ញាចេតសិក ===== -->
    <h2 v-if="!searching || filteredPanna.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('បញ្ញាចេតសិក', 'Paññā Cetasika') }}
    </h2>
    <div v-if="!searching || filteredPanna.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredPanna" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 46: បរមត្ថ និងចេតសិកទូទៅ ===== -->
    <h2 v-if="!searching || filteredParamattha.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('បរមត្ថ និងចេតសិកទូទៅ', 'Paramattha & Cetasika Overview') }}
    </h2>
    <div v-if="!searching || filteredParamattha.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredParamattha" :key="item.num" class="card-paper p-6 md:p-8">
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

    <!-- ===== Section 47: ចែកចេតសិក (ការចាត់ក្រុម) ===== -->
    <h2 v-if="!searching || filteredPart2.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ការចែកចេតសិក ៥២', 'Classification of the 52 Cetasikas') }}
    </h2>
    <div v-if="!searching || filteredPart2.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredPart2" :key="item.num" class="card-paper p-6 md:p-8">
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

  <section id="part3" class="mt-10">
    <h2 v-if="!searching || filteredPart3.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ផស្សចេតសិក (ភាគ ៣)', 'Phassa Cetasika (Part 3)') }}
    </h2>
    <div v-if="!searching || filteredPart3.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredPart3" :key="item.num" class="card-paper p-6 md:p-8">
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
  </section>

  <section id="part4" class="mt-10">
    <h2 v-if="!searching || filteredPart4.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('វេទនាចេតសិក (ភាគ ៤)', 'Vedanā Cetasika (Part 4)') }}
    </h2>
    <div v-if="!searching || filteredPart4.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredPart4" :key="item.num" class="card-paper p-6 md:p-8">
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
  </section>

  <section id="part5" class="mt-10">
    <h2 v-if="!searching || filteredPart5.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('សញ្ញាចេតសិក និងចេតនាចេតសិក (ភាគ ៥)', 'Saññā & Cetanā Cetasikas (Part 5)') }}
    </h2>
    <div v-if="!searching || filteredPart5.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredPart5" :key="item.num" class="card-paper p-6 md:p-8">
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
  </section>

  <section id="part6" class="mt-10">
    <h2 v-if="!searching || filteredPart6.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ឯកគ្គតា ជីវិតិន្រ្ទិយ មនសិការ (ភាគ ៦)', 'Ekaggatā, Jīvitindriya, Manasikāra (Part 6)') }}
    </h2>
    <div v-if="!searching || filteredPart6.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredPart6" :key="item.num" class="card-paper p-6 md:p-8">
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
  </section>

  <section id="part7" class="mt-10">
    <h2 v-if="!searching || filteredPart7.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ការពិនិត្យឡើងវិញ សព្វចិត្តសាធារណចេតសិក (ភាគ ៧)', 'Sabbacitta-sādhāraṇa Review (Part 7)') }}
    </h2>
    <div v-if="!searching || filteredPart7.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredPart7" :key="item.num" class="card-paper p-6 md:p-8">
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
  </section>

  <section id="part8" class="mt-10">
    <h2 v-if="!searching || filteredPart8.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ទ្វារ អារម្មណ៍ វត្ថុ ភូមិ (ភាគ ៨)', 'Doors, Objects, Bases, Planes (Part 8)') }}
    </h2>
    <div v-if="!searching || filteredPart8.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredPart8" :key="item.num" class="card-paper p-6 md:p-8">
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
  </section>
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
  vicaraQas.length + adhimokkhaQas.length + viriyaQas.length + pitiQas.length + chandaQas.length +
  akusalaQas.length + mohaQas.length + ahirikaQas.length + ekaggataLakkhanaQas.length +
  ekaggataKiccaQas.length + jiviLakkhanaQas.length + jiviKiccaQas.length + hiriOttappaQas.length +
  alobhaQas.length + adosaQas.length + tatramajjhattataQas.length + passaddhiQas.length + lahutaQas.length +
  mudutaQas.length + kammannataQas.length + pagunnataQas.length + ujukataQas.length + viratiQas.length +
  samajivaQas.length + karunaQas.length + muditaQas.length + pannaQas.length + paramatthaQas.length + part2Qas.length +
  part3Qas.length + part4Qas.length + part5Qas.length + part6Qas.length + part7Qas.length + part8Qas.length

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
const filteredChanda = computed(() => indexed(chandaQas, libLen() - chandaQas.length - akusalaQas.length - mohaQas.length - ahirikaQas.length))
const filteredAkusala = computed(() => indexed(akusalaQas, libLen() - akusalaQas.length - mohaQas.length - ahirikaQas.length))
const filteredMoha = computed(() => indexed(mohaQas, libLen() - mohaQas.length - ahirikaQas.length))
const filteredAhirika = computed(() => indexed(ahirikaQas, libLen() - ahirikaQas.length - ekaggataLakkhanaQas.length - ekaggataKiccaQas.length - jiviLakkhanaQas.length - jiviKiccaQas.length - hiriOttappaQas.length))
const filteredEkaggataLakkhana = computed(() => indexed(ekaggataLakkhanaQas, libLen() - ekaggataLakkhanaQas.length - ekaggataKiccaQas.length - jiviLakkhanaQas.length - jiviKiccaQas.length - hiriOttappaQas.length))
const filteredEkaggataKicca = computed(() => indexed(ekaggataKiccaQas, libLen() - ekaggataKiccaQas.length - jiviLakkhanaQas.length - jiviKiccaQas.length - hiriOttappaQas.length))
const filteredJiviLakkhana = computed(() => indexed(jiviLakkhanaQas, libLen() - jiviLakkhanaQas.length - jiviKiccaQas.length - hiriOttappaQas.length))
const filteredJiviKicca = computed(() => indexed(jiviKiccaQas, libLen() - jiviKiccaQas.length - hiriOttappaQas.length))
const filteredHiriOttappa = computed(() => indexed(hiriOttappaQas, libLen() - hiriOttappaQas.length - alobhaQas.length - adosaQas.length - tatramajjhattataQas.length - passaddhiQas.length - lahutaQas.length))
const filteredAlobha = computed(() => indexed(alobhaQas, libLen() - alobhaQas.length - adosaQas.length - tatramajjhattataQas.length - passaddhiQas.length - lahutaQas.length))
const filteredAdosa = computed(() => indexed(adosaQas, libLen() - adosaQas.length - tatramajjhattataQas.length - passaddhiQas.length - lahutaQas.length))
const filteredTatramajjhattata = computed(() => indexed(tatramajjhattataQas, libLen() - tatramajjhattataQas.length - passaddhiQas.length - lahutaQas.length))
const filteredPassaddhi = computed(() => indexed(passaddhiQas, libLen() - passaddhiQas.length - lahutaQas.length))
const filteredLahuta = computed(() => indexed(lahutaQas, libLen() - lahutaQas.length - mudutaQas.length - kammannataQas.length - pagunnataQas.length - ujukataQas.length - viratiQas.length))
const filteredMuduta = computed(() => indexed(mudutaQas, libLen() - mudutaQas.length - kammannataQas.length - pagunnataQas.length - ujukataQas.length - viratiQas.length))
const filteredKammannata = computed(() => indexed(kammannataQas, libLen() - kammannataQas.length - pagunnataQas.length - ujukataQas.length - viratiQas.length))
const filteredPagunnata = computed(() => indexed(pagunnataQas, libLen() - pagunnataQas.length - ujukataQas.length - viratiQas.length))
const filteredUjukata = computed(() => indexed(ujukataQas, libLen() - ujukataQas.length - viratiQas.length))
const filteredVirati = computed(() => indexed(viratiQas, libLen() - viratiQas.length))

const filteredSamajiva = computed(() => indexed(samajivaQas, libLen() - samajivaQas.length - karunaQas.length - muditaQas.length - pannaQas.length - paramatthaQas.length))
const filteredKaruna = computed(() => indexed(karunaQas, libLen() - karunaQas.length - muditaQas.length - pannaQas.length - paramatthaQas.length))
const filteredMudita = computed(() => indexed(muditaQas, libLen() - muditaQas.length - pannaQas.length - paramatthaQas.length))
const filteredPanna = computed(() => indexed(pannaQas, libLen() - pannaQas.length - paramatthaQas.length))
const filteredParamattha = computed(() => indexed(paramatthaQas, libLen() - paramatthaQas.length - part2Qas.length))
const filteredPart2 = computed(() => indexed(part2Qas, libLen() - part2Qas.length))
const filteredPart3 = computed(() => indexed(part3Qas, libLen() - part3Qas.length - part4Qas.length - part5Qas.length - part6Qas.length - part7Qas.length - part8Qas.length))
const filteredPart4 = computed(() => indexed(part4Qas, libLen() - part4Qas.length - part5Qas.length - part6Qas.length - part7Qas.length - part8Qas.length))
const filteredPart5 = computed(() => indexed(part5Qas, libLen() - part5Qas.length - part6Qas.length - part7Qas.length - part8Qas.length))
const filteredPart6 = computed(() => indexed(part6Qas, libLen() - part6Qas.length - part7Qas.length - part8Qas.length))
const filteredPart7 = computed(() => indexed(part7Qas, libLen() - part7Qas.length - part8Qas.length))
const filteredPart8 = computed(() => indexed(part8Qas, libLen() - part8Qas.length))

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
  filteredViriya.value.length + filteredPiti.value.length + filteredChanda.value.length +
  filteredAkusala.value.length + filteredMoha.value.length + filteredAhirika.value.length +
  filteredEkaggataLakkhana.value.length + filteredEkaggataKicca.value.length + filteredJiviLakkhana.value.length +
  filteredJiviKicca.value.length + filteredHiriOttappa.value.length +
  filteredAlobha.value.length + filteredAdosa.value.length + filteredTatramajjhattata.value.length +
  filteredPassaddhi.value.length + filteredLahuta.value.length +
  filteredMuduta.value.length + filteredKammannata.value.length + filteredPagunnata.value.length +
  filteredUjukata.value.length + filteredVirati.value.length +
  filteredSamajiva.value.length + filteredKaruna.value.length + filteredMudita.value.length +
  filteredPanna.value.length + filteredParamattha.value.length + filteredPart2.value.length +
  filteredPart3.value.length + filteredPart4.value.length + filteredPart5.value.length +
  filteredPart6.value.length + filteredPart7.value.length + filteredPart8.value.length
)
const searching = computed(() => search.value.trim().length > 0)

import {
  introQas, fiftyTwoQas, phassaQas, vedanaQas, sannaQas,
  cetanaQas, ekaggataQas, jivitindriyaQas, manasikaraQas, sabbaByKhandhaJatiQas,
  sabbaByDvaraQas, sabbaByArammanaQas, sabbaByBhumiQas, sabbaByVatthuQas, sabbaByHetuQas,
  sabbaBySobhanaQas, sabbaByLokaQas, vitakkaQas, vicaraQas, adhimokkhaQas,
  viriyaQas, pitiQas, chandaQas, akusalaQas, mohaQas,
  ahirikaQas, ekaggataLakkhanaQas, ekaggataKiccaQas, jiviLakkhanaQas, jiviKiccaQas,
  hiriOttappaQas, alobhaQas, adosaQas, tatramajjhattataQas, passaddhiQas,
  lahutaQas, mudutaQas, kammannataQas, pagunnataQas, ujukataQas,
  viratiQas, samajivaQas, karunaQas, muditaQas, pannaQas,
  paramatthaQas, part2Qas, part3Qas, part4Qas, part5Qas,
  part6Qas, part7Qas, part8Qas
} from '../data/cetasikaQaData'
</script>