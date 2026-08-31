<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សំណួរ–ចម្លើយ រូបបរមត្ថ ភាគ ៣៣ — ឱឡារិករូប និង សុខុមរូប', 'RŪPA PARAMATTHA PART 33 — GROSS & SUBTLE MATTER') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('ឱឡារិករូប និង សុខុមរូប', 'Oḷārika-rūpa & Sukhuma-rūpa') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ក្នុងរូប ២៨ ប្រភេទ ត្រូវបានចែកជា រូបក្រាស (ឱឡារិករូប) ១២ និង រូបម៉ត់ (សុខុមរូប) ១៦។ ទំព័រនេះប្រមូលសំណួរ-ចម្លើយ តាមគម្រោងរៀនរូបបរមត្ថ ភាគ ៣៣ ដើម្បីជួយប្រឡង និងរំឭកឡើងវិញ។', 'Of the 28 kinds of matter, twelve are gross (oḷārika) and sixteen are subtle (sukhuma). This page gathers the question-and-answers of Rūpa Paramattha part 33, for review and examination.') }}
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

    <div v-if="!searching || filteredQas.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredQas" :key="item.num" class="card-paper p-6 md:p-8" :open="searching ? false : i === 0">
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

    <h2 v-if="!searching || filteredAnindriya.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ឥន្រ្ទិយរូប និង អនិន្រ្ទិយរូប', 'Indriya-rūpa & Anindriya-rūpa') }}
    </h2>
    <p v-if="!searching || filteredAnindriya.length" class="mt-3 leading-loose text-sm" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ឥន្រ្ទិយរូប (រូបជាឥន្រ្ទិយៈ) មាន ៨ គឺ បសាទរូប ៥ ភាវរូប ២ ជីវិតរូប ១។ អនិន្រ្ទិយរូប (រូបដែលមិនមែនឥន្រ្ទិយៈ) មាន ២០។ រួមគ្នាជារូប ២៨ ទាំងអស់។', 'Indriya-rūpa (faculty matter) numbers 8: 5 sensitives, 2 sex-rūpas and life-faculty. Anindriya-rūpa (non-faculty matter) numbers 20. Together they make up all 28 rūpas.') }}
    </p>

    <div v-if="!searching || filteredAnindriya.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredAnindriya" :key="item.num" class="card-paper p-6 md:p-8">
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

    <h2 v-if="!searching || filteredVatthu.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('វត្ថុរូប និង អវត្ថុរូប', 'Vatthu-rūpa & Avatthu-rūpa') }}
    </h2>
    <p v-if="!searching || filteredVatthu.length" class="mt-3 leading-loose text-sm" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ដោយវត្ថុ រូប ២៨ ចែកជា វត្ថុរូប ៦ និង អវត្ថុរូប ២២។ វត្ថុរូប គឺរូបដែលជាទីអាស្រ័យនៃចិត្តចេតសិកកើតឡើង។', 'By way of physical base, the 28 rūpas divide into 6 vatthu-rūpas (bases) and 22 avatthu-rūpas (non-bases). Vatthu-rūpa is matter that serves as the base for consciousness and mental factors.') }}
    </p>

    <div v-if="!searching || filteredVatthu.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredVatthu" :key="item.num" class="card-paper p-6 md:p-8">
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

    <h2 v-if="!searching || filteredAjjhattika.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('អជ្ឈត្តិករូប និង ពាហិររូប', 'Ajjhattika-rūpa & Bāhira-rūpa') }}
    </h2>
    <p v-if="!searching || filteredAjjhattika.length" class="mt-3 leading-loose text-sm" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ដោយរូបសំខាន់ រូប ២៨ ចែកជា អជ្ឈត្តិករូប ៥ (បសាទរូប ៥) និង ពាហិររូប ២៣។', 'By important and less-important matter, the 28 rūpas divide into 5 ajjhattika-rūpas (internal, the 5 sensitives) and 23 bāhira-rūpas (external).') }}
    </p>

    <div v-if="!searching || filteredAjjhattika.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredAjjhattika" :key="item.num" class="card-paper p-6 md:p-8">
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

    <h2 v-if="!searching || filteredDvara.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('ទ្វាររូប និង អទ្វាររូប', 'Dvāra-rūpa & Advāra-rūpa') }}
    </h2>
    <p v-if="!searching || filteredDvara.length" class="mt-3 leading-loose text-sm" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ដោយទ្វារ រូប ២៨ ចែកជា ទ្វាររូប ៧ (បសាទរូប ៥ + វិញ្ញត្តិរូប ២) និង អទ្វាររូប ២១។', 'By way of door, the 28 rūpas divide into 7 dvāra-rūpas (5 sensitives + 2 intimations) and 21 advāra-rūpas.') }}
    </p>

    <div v-if="!searching || filteredDvara.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredDvara" :key="item.num" class="card-paper p-6 md:p-8">
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

    <h2 v-if="!searching || filteredPart1.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('សំណួររូបបរមត្ថ ភាគ១ — ២៩ មករា ២០២៦', 'Rūpa Paramattha Part 1 — 29 Jan 2026') }}
    </h2>
    <div v-if="!searching || filteredPart1.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredPart1" :key="item.num" class="card-paper p-6 md:p-8">
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

    <h2 v-if="!searching || filteredPart2.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('សំណួររូបបរមត្ថ ភាគ២ — ៣០ មករា ២០២៦', 'Rūpa Paramattha Part 2 — 30 Jan 2026') }}
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

    <h2 v-if="!searching || filteredPart3.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('សំណួររូបបរមត្ថ ភាគ៣ — ៥ កុម្ភៈ ២០២៦', 'Rūpa Paramattha Part 3 — 5 Feb 2026') }}
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

    <h2 v-if="!searching || filteredPart4.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('សំណួររូបបរមត្ថ ភាគ៤ — ៦ កុម្ភៈ ២០២៥', 'Rūpa Paramattha Part 4 — 6 Feb 2025') }}
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

    <h2 v-if="!searching || filteredPart5.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('សំណួររូបបរមត្ថ ភាគ៥ — ១២ កុម្ភៈ ២០២៦', 'Rūpa Paramattha Part 5 — 12 Feb 2026') }}
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

    <h2 v-if="!searching || filteredPart6.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('សំណួររូបបរមត្ថ ភាគ៦ — ១៣ កុម្ភៈ ២០២៦', 'Rūpa Paramattha Part 6 — 13 Feb 2026') }}
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

    <h2 v-if="!searching || filteredPart7.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('សំណួររូបបរមត្ថ ភាគ៧ — ២០ កុម្ភៈ ២០២៦', 'Rūpa Paramattha Part 7 — 20 Feb 2026') }}
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

    <h2 v-if="!searching || filteredPart9.length" class="mt-12 font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
      {{ t('សំណួររូបបរមត្ថ ភាគ៩ — ២៧ កុម្ភៈ ២០២៦', 'Rūpa Paramattha Part 9 — 27 Feb 2026') }}
    </h2>
    <div v-if="!searching || filteredPart9.length" class="mt-6 space-y-4">
      <details v-for="(item, i) in filteredPart9" :key="item.num" class="card-paper p-6 md:p-8">
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

function indexed(arr, offset) {
  return arr.map((qa, i) => ({ qa, num: offset + i + 1 })).filter(x => matchesQuery(x.qa))
}

const allBase = () => qas.length + anindriyaQas.length + vatthuQas.length + ajjhattikaQas.length + dvaraQas.length

const filteredQas = computed(() => indexed(qas, 0))
const filteredAnindriya = computed(() => indexed(anindriyaQas, qas.length))
const filteredVatthu = computed(() => indexed(vatthuQas, qas.length + anindriyaQas.length))
const filteredAjjhattika = computed(() => indexed(ajjhattikaQas, qas.length + anindriyaQas.length + vatthuQas.length))
const filteredDvara = computed(() => indexed(dvaraQas, qas.length + anindriyaQas.length + vatthuQas.length + ajjhattikaQas.length))
const filteredPart1 = computed(() => indexed(part1Qas, allBase()))
const filteredPart2 = computed(() => indexed(part2Qas, allBase() + part1Qas.length))
const filteredPart3 = computed(() => indexed(part3Qas, allBase() + part1Qas.length + part2Qas.length))
const filteredPart4 = computed(() => indexed(part4Qas, allBase() + part1Qas.length + part2Qas.length + part3Qas.length))
const filteredPart5 = computed(() => indexed(part5Qas, allBase() + part1Qas.length + part2Qas.length + part3Qas.length + part4Qas.length))
const filteredPart6 = computed(() => indexed(part6Qas, allBase() + part1Qas.length + part2Qas.length + part3Qas.length + part4Qas.length + part5Qas.length))
const filteredPart7 = computed(() => indexed(part7Qas, allBase() + part1Qas.length + part2Qas.length + part3Qas.length + part4Qas.length + part5Qas.length + part6Qas.length))
const filteredPart9 = computed(() => indexed(part9Qas, allBase() + part1Qas.length + part2Qas.length + part3Qas.length + part4Qas.length + part5Qas.length + part6Qas.length + part7Qas.length))
const totalMatches = computed(() =>
  filteredQas.value.length +
  filteredAnindriya.value.length +
  filteredVatthu.value.length +
  filteredAjjhattika.value.length +
  filteredDvara.value.length +
  filteredPart1.value.length +
  filteredPart2.value.length +
  filteredPart3.value.length +
  filteredPart4.value.length +
  filteredPart5.value.length +
  filteredPart6.value.length +
  filteredPart7.value.length +
  filteredPart9.value.length
)
const searching = computed(() => search.value.trim().length > 0)

const qas = [
  {
    qK: 'ដោយឱឡារិករូប តើរូប ២៨ ចែកជាប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'By oḷārika (gross) matter, into how many kinds are the 28 rūpas divided? What are they?',
    aK: 'ចែកជា ២ យ៉ាង គឺ ឱឡារិករូប (រូបគ្រោតគ្រាត) ១២ និង សុខុមរូប (រូបម៉ត់ចត់) ១៦។',
    aE: 'Into 2 kinds: oḷārika-rūpa (gross matter) 12, and sukhuma-rūpa (subtle matter) 16.',
  },
  {
    qK: 'តើឱឡារិករូប មានន័យដូចម្តេច?',
    qE: 'What does oḷārika-rūpa mean?',
    aK: 'ឱឡារិករូប គឺរូបដែលគ្រោតគ្រាត ងាយយល់ ជិតបញ្ញា និងអាចប៉ះទង្គិចគ្នាបាន (សប្បដិឃរូប) គឺបានដល់ បសាទរូប ៥ និង វិសយរូប ៧។',
    aE: 'Oḷārika-rūpa is coarse matter that is easy to understand, near to wisdom, and impinging (sappaṭigha) — namely the 5 sensitive rūpas and the 7 sense-object rūpas.',
  },
  {
    qK: 'តើឱឡារិករូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas, and which, are oḷārika?',
    aK: 'មាន ១២ គឺ បសាទរូប ៥ (ចក្ខុ សោត ឃាន ជិវ្ហា កាយ) និង វិសយរូប ៧ (រូប សទ្ទ គន្ធា រស ផោដ្ឋព្វៈ [បឋវី តេជោ វាយោ])។',
    aE: 'Twelve: the 5 sensitives (eye, ear, nose, tongue, body) and the 7 sense-objects (colour, sound, odour, taste, tangibility — earth, fire, air).',
  },
  {
    qK: 'តើឱឡារិករូប ជាសភាវរូប ឬអសភាវរូប?',
    qE: 'Is oḷārika-rūpa sabhāva-rūpa or asabhāva-rūpa?',
    aK: 'ជាសភាវរូប ទាំងអស់ ១២ (រូបដែលមានសភាពពិត ដោយខ្លួនឯង = និប្ផន្នរូប) ពុំមែនអសភាវរូបឡើយ។',
    aE: 'All 12 are sabhāva-rūpa (concretely produced matter with its own intrinsic nature); none is asabhāva-rūpa.',
  },
  {
    qK: 'តើសភាវរូបប៉ុន្មាន ជាឱឡារិករូប? រូបណាខ្លះ?',
    qE: 'How many sabhāva-rūpas are oḷārika? Which are they?',
    aK: 'មាន ១២ គឺ បសាទរូប ៥ និង វិសយរូប ៧ សុទ្ធតែជាសភាវរូប។',
    aE: 'All 12 (the 5 sensitives and the 7 sense objects) — every oḷārika rūpa is a sabhāva-rūpa.',
  },
  {
    qK: 'តើអសភាវរូបជាឱឡារិករូបដែរឬទេ?',
    qE: 'Are asabhāva-rūpas also oḷārika?',
    aK: 'មិនមែនទេ។ អសភាវរូប ១០ ទាំងអស់ជាសុខុមរូប ពុំមានមួយណា ជាឱឡារិករូបឡើយ។',
    aE: 'No. The 10 asabhāva-rūpas are all sukhuma; none of them is oḷārika.',
  },
  {
    qK: 'តើឱឡារិករូប ជាមហាភូតរូប ឬឧបាទាយរូប?',
    qE: 'Is oḷārika-rūpa mahābhūta-rūpa or upādāya-rūpa?',
    aK: 'មានទាំងពីរបែប ៖ បឋវី តេជោ វាយោ (ជាផោដ្ឋព្វ) ជាមហាភូតរូប ហើយបសាទរូប ៥ ជាមួយ រូប សទ្ទ គន្ធា រស ជាឧបាទាយរូប។',
    aE: 'Both kinds: earth, fire and air (as tangibility) are mahābhūta-rūpa; the 5 sensitives with colour, sound, odour and taste are upādāya-rūpa.',
  },
  {
    qK: 'តើឱឡារិករូបប៉ុន្មាន ជាមហាភូតរូប? រូបណាខ្លះ?',
    qE: 'How many oḷārika are mahābhūta-rūpa? Which are they?',
    aK: 'មាន ៣ គឺ បឋវី តេជោ វាយោ (ដែលរួមជាផោដ្ឋព្វារម្មណ៍)។',
    aE: 'Three: earth (paṭhavī), fire (tejo) and air (vāyo), which together form the tangible object.',
  },
  {
    qK: 'តើឧបាទាយរូបប៉ុន្មាន ជាឱឡារិករូប? រូបណាខ្លះ?',
    qE: 'How many upādāya-rūpas are oḷārika? Which are they?',
    aK: 'មាន ៩ គឺ បសាទរូប ៥ និង វិសយរូប ៤ (រូប សទ្ទ គន្ធា រស)។',
    aE: 'Nine: the 5 sensitives and the 4 sense-objects (colour, sound, odour, taste).',
  },
  {
    qK: 'តើឱឡារិករូប ចាត់ជាបរមត្ថធម៌ណា?',
    qE: 'To which paramattha-dhamma does oḷārika-rūpa belong?',
    aK: 'ចាត់ជា រូបបរមត្ថធម៌ (មួយក្នុងបរមត្ថធម៌ ៤ គឺ ចិត្ត ចេតសិក រូប និព្វាន)។',
    aE: 'It belongs to the rūpa-paramattha — one of the 4 ultimate realities (citta, cetasika, rūpa, nibbāna).',
  },
  {
    qK: 'តើវិសយរូបប៉ុន្មាន ជាឱឡារិករូប? រូបណាខ្លះ?',
    qE: 'How many visaya-rūpas are oḷārika? Which are they?',
    aK: 'វិសយរូប ៧ ទាំងអស់ជាឱឡារិករូប គឺ រូប សទ្ទ គន្ធា រស ផោដ្ឋព្វៈ (បឋវី តេជោ វាយោ)។',
    aE: 'All 7 sense-object rūpas are oḷārika: colour, sound, odour, taste and tangibility (earth, fire, air).',
  },
  {
    qK: 'តើមហាភូតរូបប៉ុន្មាន មិនមែនជាឱឡារិករូប? រូបណាខ្លះ?',
    qE: 'How many mahābhūta-rūpas are NOT oḷārika? Which are they?',
    aK: 'មាន ១ គឺ អាបោ (ធាតុទឹក) ដែលជាសុខុមរូប។',
    aE: 'One: āpo (the water element, cohesion), which is a sukhuma-rūpa.',
  },
  {
    qK: 'តើឱឡារិករូប ជាអកុសលធម៌ ឬកុសលធម៌?',
    qE: 'Is oḷārika-rūpa an akusala or kusala dhamma?',
    aK: 'មិនមែនទាំងពីរទេ ។ រូបទាំងអស់ជាអព្យាកតធម៌ (ធម៌មិនកំណត់ល្អ-អាក្រក់) ព្រោះរូបពុំមានចេតនាល្អ ឬអាក្រក់ឡើយ។',
    aE: 'Neither. All rūpas are abyākata (morally indeterminate), since matter has no wholesome or unwholesome volition.',
  },
  {
    qK: 'តើឱឡារិករូបប៉ុន្មាន ជាអព្យាកតធម៌? រូបណាខ្លះ?',
    qE: 'How many oḷārika are abyākata-dhamma? Which are they?',
    aK: 'ទាំង ១២ ជាអព្យាកតធម៌ ព្រោះរូបគ្រប់ប្រភេទលោកិយ សុទ្ធតែអព្យាកត។',
    aE: 'All 12 are abyākata-dhamma, because every mundane rūpa is morally indeterminate.',
  },
  {
    qK: 'តើឱឡារិករូប ជារូបធម៌ ឬអរូបធម៌?',
    qE: 'Is oḷārika-rūpa a rūpa-dhamma or an arūpa-dhamma?',
    aK: 'ជារូបធម៌ (ធម៌ជារូប/វត្ថុ) ពុំមែនអរូបធម៌ឡើយ ព្រោះជារូបបរមត្ថ។',
    aE: 'It is rūpa-dhamma (material dhamma), not arūpa-dhamma, because it is material ultimate reality.',
  },
  {
    qK: 'តើឱឡារិករូបប៉ុន្មាន ជាវិស័យរបស់ចក្ខុវិញ្ញាណ? រូបណាខ្លះ?',
    qE: 'How many oḷārika are the object of eye-consciousness? Which are they?',
    aK: 'មាន ១ គឺ រូបារម្មណ៍ (វណ្ណៈ/ពណ៌ ទាំងឡាយ) ដែលជាអារម្មណ៍របស់ចក្ខុវិញ្ញាណ។',
    aE: 'One: colour (rūpārammaṇa, visible object), which is the object of eye-consciousness.',
  },
  {
    qK: 'តើឱឡារិករូប ជាបរមត្ថធម៌ ឬបញ្ញត្តិ?',
    qE: 'Is oḷārika-rūpa paramattha or paññatti (concept)?',
    aK: 'ជាបរមត្ថធម៌ (សច្ចៈដាច់ខាត) ពុំមែនបញ្ញត្តិឡើយ ព្រោះឱឡារិករូបទាំង ១២ សុទ្ធតែជាសភាវរូប/និប្ផន្នរូប។',
    aE: 'It is paramattha (ultimate reality), not paññatti, because all 12 oḷārika rūpas are concretely produced matter.',
  },
  {
    qK: 'តើឱឡារិករូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍អ្វីខ្លះ?',
    qE: 'Acting as object, how many ārammaṇas can oḷārika-rūpa yield? Which are they?',
    aK: 'បានអារម្មណ៍ ៥ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ (អារម្មណ៍ទាំង ៥ ជាវិស័យញ្ញាណ ៥)។',
    aE: 'Five: colour, sound, odour, taste and tangibility — the five sense-objects of the five sense-consciousnesses.',
  },
  {
    qK: 'តើឱឡារិករូប ជាអារម្មណ៍ឲ្យចិត្តប្រព្រឹត្តតាមទ្វារបានប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'As object, through how many doors can oḷārika-rūpa let consciousness proceed? Which doors?',
    aK: 'បាន ៥ ទ្វារ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជិវ្ហាទ្វារ កាយទ្វារ (បញ្ចទ្វារ) ដែលជាទ្វារញ្ញាណ ៥។',
    aE: 'Through 5 doors: eye, ear, nose, tongue and body — the five sense-doors (pañcadvāra).',
  },
  {
    qK: 'តើឱឡារិករូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈអ្វីខ្លះ?',
    qE: 'Acting as āyatana (base), how many āyatanas does oḷārika-rūpa yield? Which are they?',
    aK: 'បានអាយតនៈ ១០ គឺ ខាងក្នុង ៥ (ចក្ខាយតនៈ សោតាយតនៈ ឃានាយតនៈ ជិវ្ហាយតនៈ កាយាយតនៈ) និង ខាងក្រៅ ៥ (រូបាយតនៈ សទ្ទាយតនៈ គន្ធាយតនៈ រសាយតនៈ ផោដ្ឋព្វាយតនៈ)។',
    aE: 'Ten: 5 internal bases (eye, ear, nose, tongue, body) and 5 external bases (colour, sound, odour, taste, tangibility).',
  },
  {
    qK: 'តើចក្ខុបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When eye-sensitivity acts as an āyatana, what is it called?',
    aK: 'ហៅថា ចក្ខាយតនៈ (អាយតនៈ គឺភ្នែក)។',
    aE: 'It is called cakkhāyatana (the eye-base).',
  },
  {
    qK: 'តើសោតបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When ear-sensitivity acts as an āyatana, what is it called?',
    aK: 'ហៅថា សោតាយតនៈ (អាយតនៈ គឺត្រចៀក)។',
    aE: 'It is called sotāyatana (the ear-base).',
  },
  {
    qK: 'តើឃានបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When nose-sensitivity acts as an āyatana, what is it called?',
    aK: 'ហៅថា ឃានាយតនៈ (អាយតនៈ គឺច្រមុះ)។',
    aE: 'It is called ghānāyatana (the nose-base).',
  },
  {
    qK: 'តើជិវ្ហាបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When tongue-sensitivity acts as an āyatana, what is it called?',
    aK: 'ហៅថា ជិវ្ហាយតនៈ (អាយតនៈ គឺអណ្តាត)។',
    aE: 'It is called jivhāyatana (the tongue-base).',
  },
  {
    qK: 'តើកាយបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When body-sensitivity acts as an āyatana, what is it called?',
    aK: 'ហៅថា កាយាយតនៈ (អាយតនៈ គឺកាយ)។',
    aE: 'It is called kāyāyatana (the body-base).',
  },
  {
    qK: 'តើមហាភូតរូប ៣ (វៀរអាបោ) បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When the 3 great essentials (excluding āpo) act as an āyatana, what is it called?',
    aK: 'ហៅថា ផោដ្ឋព្វាយតនៈ (អាយតនៈ គឺដែលត្រូវពាល់/ប៉ះ) ព្រោះបឋវី តេជោ វាយោ ប្រមូលជាផោដ្ឋព្វៈ។',
    aE: 'Phoṭṭhabbāyatana (the tangible base), because earth, fire and air together are the tangible object.',
  },
  {
    qK: 'តើវិសយរូប ៤ បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'When the 4 sense-objects act as āyatana, how many āyatanas do they yield? Which?',
    aK: 'បាន ៤ គឺ រូបាយតនៈ សទ្ទាយតនៈ គន្ធាយតនៈ រសាយតនៈ (សម្រាប់ រូប សទ្ទ គន្ធា រស)។',
    aE: 'Four: rūpa-, sadda-, gandha- and rasa-āyatana (colour, sound, odour and taste bases).',
  },
  {
    qK: 'តើឱឡារិករូប ជាអាយតនៈខាងក្នុង ឬអាយតនៈខាងក្រៅ?',
    qE: 'Is oḷārika-rūpa an internal or an external āyatana?',
    aK: 'មានទាំងពីរបែប ៖ បសាទរូប ៥ ជាអាយតនៈខាងក្នុង ហើយវិសយរូប ៧ ជាអាយតនៈខាងក្រៅ។',
    aE: 'Both: the 5 sensitives are internal bases, and the 7 sense-objects are external bases.',
  },
  {
    qK: 'តើឱឡារិករូបប៉ុន្មាន ជាអាយតនៈខាងក្នុង? រូបណាខ្លះ?',
    qE: 'How many oḷārika are internal āyatana? Which are they?',
    aK: 'មាន ៥ គឺ បសាទរូប ៥ (ចក្ខុ សោត ឃាន ជិវ្ហា កាយ) ជាអាយតនៈខាងក្នុង។',
    aE: 'Five: the 5 sensitives (eye, ear, nose, tongue, body), which are the internal bases.',
  },
  {
    qK: 'តើឱឡារិករូបប៉ុន្មាន ជាអាយតនៈខាងក្រៅ? រូបណាខ្លះ?',
    qE: 'How many oḷārika are external āyatana? Which are they?',
    aK: 'មាន ៧ គឺ រូប សទ្ទ គន្ធា រស ផោដ្ឋព្វៈ (បឋវី តេជោ វាយោ) ជាអាយតនៈខាងក្រៅ។',
    aE: 'Seven: colour, sound, odour, taste and tangibility (earth, fire, air), which are the external bases.',
  },
  {
    qK: 'តើសុខុមរូប មានន័យដូចម្តេច?',
    qE: 'What does sukhuma-rūpa mean?',
    aK: 'សុខុមរូប គឺរូបម៉ត់ចត់ ឆ្ងាយពីការយល់ងាយ និងមិនប៉ះទង្គិចគ្នា (អប្បដិឃរូប) គឺរូប ១៦ ដែលនៅសេសពីឱឡារិករូប។',
    aE: 'Sukhuma-rūpa is subtle matter that is far from easy understanding and non-impinging (appaṭigha) — the 16 rūpas other than the oḷārika ones.',
  },
  {
    qK: 'តើសុខុមរូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas, and which, are sukhuma?',
    aK: 'មាន ១៦ គឺ អាបោ ១ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ លក្ខណរូប ៤។',
    aE: 'Sixteen: water (1), sex (2), heart-base (1), life-faculty (1), nutriment (1), space (1), intimations (2), mutable (3) and characteristic rūpas (4).',
  },
  {
    qK: 'តើសុខុមរូប ជាសភាវរូប ឬអសភាវរូប?',
    qE: 'Is sukhuma-rūpa sabhāva-rūpa or asabhāva-rūpa?',
    aK: 'មានទាំងពីរបែប ៖ សភាវរូប ៦ និង អសភាវរូប ១០ ក្នុងចំណោមសុខុមរូប ១៦។',
    aE: 'Both: of the 16 subtlerūpas, 6 are sabhāva-rūpa and 10 are asabhāva-rūpa.',
  },
  {
    qK: 'តើសុខុមរូបប៉ុន្មាន ជាសភាវរូប? រូបណាខ្លះ?',
    qE: 'How many sukhuma are sabhāva-rūpa? Which are they?',
    aK: 'មាន ៦ គឺ អាបោ ១ ភាវរូប ២ (ឥត្ថិភាវ បុរិសភាវ) ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១។',
    aE: 'Six: water, 2 sex-rūpas (femininity, masculinity), heart-base, life-faculty and nutriment.',
  },
  {
    qK: 'តើសុខុមរូបប៉ុន្មាន ជាអសភាវរូប? រូបណាខ្លះ?',
    qE: 'How many sukhuma are asabhāva-rūpa? Which are they?',
    aK: 'មាន ១០ គឺ បរិច្ឆេទរូប ១ (អាកាស) វិញ្ញត្តិរូប ២ វិការរូប ៣ លក្ខណរូប ៤។',
    aE: 'Ten: space (1), intimations (2), mutable rūpas (3) and characteristic rūpas (4).',
  },
  {
    qK: 'តើសុខុមរូប ជាមហាភូតរូប ឬឧបាទាយរូប?',
    qE: 'Is sukhuma-rūpa mahābhūta-rūpa or upādāya-rūpa?',
    aK: 'ភាគច្រើនជាឧបាទាយរូប ៖ ក្នុងសុខុមរូប ១៦ មានតែអាបោ ១ ប៉ុណ្ណោះដែលជាមហាភូតរូប នៅសល់ ១៥ ជាឧបាទាយរូប។',
    aE: 'Mostly upādāya-rūpa: of the 16, only water (āpo) is a mahābhūta, the other 15 are derived (upādāya).',
  },
  {
    qK: 'តើសុខុមរូបប៉ុន្មាន ជាមហាភូតរូប? រូបណាខ្លះ?',
    qE: 'How many sukhuma are mahābhūta-rūpa? Which are they?',
    aK: 'មាន ១ គឺ អាបោ (ធាតុទឹក)។',
    aE: 'One: āpo (the water element).',
  },
  {
    qK: 'តើសុខុមរូបប៉ុន្មាន ជាឧបាទាយរូប? រូបណាខ្លះ?',
    qE: 'How many sukhuma are upādāya-rūpa? Which are they?',
    aK: 'មាន ១៥ គឺ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ លក្ខណរូប ៤។',
    aE: 'Fifteen: the remaining sukhuma rūpas other than āpo — sex (2), heart-base, life-faculty, nutriment, space, intimations (2), mutable (3) and characteristic (4).',
  },
  {
    qK: 'តើសុខុមរូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍អ្វីខ្លះ?',
    qE: 'Acting as object, how many ārammaṇas does sukhuma-rūpa yield? Which are they?',
    aK: 'បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍ (អារម្មណ៍របស់មនោវិញ្ញាណ) ព្រោះសុខុមរូបមិនមែនអារម្មណ៍ញ្ញាណ ៥ ទេ។',
    aE: 'One: dhammārammaṇa (the object of mind-consciousness), since subtle rūpas are not objects of the 5 sense-consciousnesses.',
  },
  {
    qK: 'តើអាបោ ១ បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'When water-element alone acts as object, how many ārammaṇas does it yield? Which?',
    aK: 'បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍ (ព្រោះអាបោមិនជាផោដ្ឋព្វារម្មណ៍នៃកាយទេ)។',
    aE: 'One: dhammārammaṇa (for water is not the tangible object of the body).',
  },
  {
    qK: 'តើភាវរូប ២ បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'When the 2 sex-rūpas act as objects, how many ārammaṇas do they yield? Which?',
    aK: 'បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍ (ទាំងឥត្ថិភាវ និងបុរិសភាវ)។',
    aE: 'One: dhammārammaṇa (both femininity and masculinity).',
  },
  {
    qK: 'តើហទយរូប ១ បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'When heart-base acts as object, how many ārammaṇas does it yield? Which?',
    aK: 'បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍។',
    aE: 'One: dhammārammaṇa (mind-object).',
  },
  {
    qK: 'តើជីវិតរូប ១ បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'When life-faculty acts as object, how many ārammaṇas does it yield? Which?',
    aK: 'បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍។',
    aE: 'One: dhammārammaṇa (mind-object).',
  },
  {
    qK: 'តើអាហាររូប ១ បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'When nutriment acts as object, how many ārammaṇas does it yield? Which?',
    aK: 'បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍ (អូជា/អាហាររូប)។',
    aE: 'One: dhammārammaṇa (ojā, nutrient essence).',
  },
  {
    qK: 'តើអសភាវរូប ១០ បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'When the 10 asabhāva-rūpas act as objects, how many ārammaṇas do they yield? Which?',
    aK: 'បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍ (អាកាស វិញ្ញត្តិ ២ វិការ ៣ លក្ខណ ៤)។',
    aE: 'One: dhammārammaṇa (space, 2 intimations, 3 mutable, 4 characteristic rūpas).',
  },
  {
    qK: 'តើសុខុមរូបប៉ុន្មាន ជាធម្មារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many sukhuma are dhammārammaṇa? Which are they?',
    aK: 'សុខុមរូប ១៦ ទាំងអស់ ជាធម្មារម្មណ៍។',
    aE: 'All 16 sukhuma rūpas are dhammārammaṇa (objects of mind-consciousness).',
  },
  {
    qK: 'តើសុខុមរូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈអ្វីខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas does sukhuma-rūpa yield? Which?',
    aK: 'បានអាយតនៈ ១ គឺ ធម្មាយតនៈ (អាយតនៈ គឺធម៌ជាអារម្មណ៍នៃមនោ) ព្រោះសុខុមរូបទាំងអស់ ប្រមូលក្នុងធម្មាយតនៈ។',
    aE: 'One: dhammāyatana (the mind-object base), because all subtle rūpas are included in it.',
  },
  {
    qK: 'តើសុខុមរូប ជាអាយតនៈខាងក្នុង ឬជាអាយតនៈខាងក្រៅ?',
    qE: 'Is sukhuma-rūpa an internal or an external āyatana?',
    aK: 'ជាអាយតនៈខាងក្រៅ (ធម្មាយតនៈ) ពុំមែនខាងក្នុងឡើយ ព្រោះអាយតនៈខាងក្នុងជាបសាទរូប ៥ ដែលជាឱឡារិករូប។',
    aE: 'External (dhammāyatana), never internal, for the internal bases are the 5 sensitives, which are oḷārika.',
  },
  {
    qK: 'តើសុខុមរូបប៉ុន្មាន ជាអាយតនៈខាងក្នុង? រូបណាខ្លះ?',
    qE: 'How many sukhuma are internal āyatana? Which are they?',
    aK: 'គ្មាន (សូន្យ) សោះ ព្រោះសុខុមរូបទាំងអស់ជាអាយតនៈខាងក្រៅ។',
    aE: 'None (zero), because all subtle rūpas are external bases.',
  },
  {
    qK: 'តើសុខុមរូបប៉ុន្មាន ជាអាយតនៈខាងក្រៅ? រូបណាខ្លះ?',
    qE: 'How many sukhuma are external āyatana? Which are they?',
    aK: 'សុខុមរូប ១៦ ទាំងអស់ ជាអាយតនៈខាងក្រៅ (ធម្មាយតនៈ)។',
    aE: 'All 16 sukhuma rūpas are external (included in the dhammāyatana).',
  },
  {
    qK: 'តើអាបោ ១ ចាត់ជាអាយតនៈបានប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Into how many āyatanas is the water-element classified? Which?',
    aK: 'ចាត់បាន ១ គឺ ធម្មាយតនៈ។',
    aE: 'One: dhammāyatana (mind-object base).',
  },
  {
    qK: 'តើភាវរូប ២ ចាត់ជាអាយតនៈបានប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Into how many āyatanas are the 2 sex-rūpas classified? Which?',
    aK: 'ចាត់បាន ១ គឺ ធម្មាយតនៈ (ឥត្ថិភាវ និងបុរិសភាវ)។',
    aE: 'One: dhammāyatana (femininity and masculinity).',
  },
  {
    qK: 'តើហទយរូប ១ ចាត់ជាអាយតនៈបានប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Into how many āyatanas is the heart-base classified? Which?',
    aK: 'ចាត់បាន ១ គឺ ធម្មាយតនៈ។',
    aE: 'One: dhammāyatana.',
  },
  {
    qK: 'តើជីវិតរូប ១ ចាត់ជាអាយតនៈបានប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Into how many āyatanas is the life-faculty classified? Which?',
    aK: 'ចាត់បាន ១ គឺ ធម្មាយតនៈ។',
    aE: 'One: dhammāyatana.',
  },
  {
    qK: 'តើអាហាររូប ១ ចាត់ជាអាយតនៈបានប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Into how many āyatanas is nutriment classified? Which?',
    aK: 'ចាត់បាន ១ គឺ ធម្មាយតនៈ (អូជា/អាហាររូប)។',
    aE: 'One: dhammāyatana (ojā, nutrient essence).',
  },
  {
    qK: 'តើអសភាវរូប ១០ ចាត់ជាអាយតនៈបានប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Into how many āyatanas are the 10 asabhāva-rūpas classified? Which?',
    aK: 'ចាត់បាន ១ គឺ ធម្មាយតនៈ (អាកាស វិញ្ញត្តិ ២ វិការ ៣ លក្ខណ ៤)។',
    aE: 'One: dhammāyatana (space, 2 intimations, 3 mutable, 4 characteristic rūpas).',
  },
  {
    qK: 'តើសុខុមរូបប៉ុន្មាន ជាធម្មាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many sukhuma are dhammāyatana? Which are they?',
    aK: 'សុខុមរូប ១៦ ទាំងអស់ ជាធម្មាយតនៈ។',
    aE: 'All 16 sukhuma rūpas are included in the dhammāyatana.',
  },
  {
    qK: 'តើឱឡារិករូប និងសុខុមរូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'Together how many rūpas do oḷārika and sukhuma cover? Which are they?',
    aK: 'រួមគ្នាបានដល់រូប ២៨ ទាំងអស់ គឺ ឱឡារិករូប ១២ + សុខុមរូប ១៦ = ២៨។',
    aE: 'Together they cover all 28 rūpas: 12 gross + 16 subtle = 28.',
  },
  {
    qK: 'តើសុខុមរូប ជារូបធម៌ ឬអរូបធម៌?',
    qE: 'Is sukhuma-rūpa a rūpa-dhamma or an arūpa-dhamma?',
    aK: 'ជារូបធម៌ (រូបបរមត្ថ) វៀរតែអសភាវរូប ១០ ជាគុណរូបរបស់រូប មិនមែនអរូបធម៌ឡើយ។',
    aE: 'It is rūpa-dhamma (rūpa-paramattha); the 10 asabhāva are qualities of matter, never arūpa-dhamma.',
  },
  {
    qK: 'តើឱឡារិករូប និងសុខុមរូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do oḷārika and sukhuma yield together? Which?',
    aK: 'រួមបានអារម្មណ៍ ៦ គឺ វិសយារម្មណ៍ ៥ (រូប សទ្ទ គន្ធា រស ផោដ្ឋព្វៈ) និង ធម្មារម្មណ៍ ១។',
    aE: 'Six in total: the 5 sense-objects (colour, sound, odour, taste, tangibility) and the dhammārammaṇa.',
  },
  {
    qK: 'តើឱឡារិករូប និងសុខុមរូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do oḷārika and sukhuma yield together? Which?',
    aK: 'រួមបានអាយតនៈ ១១ គឺ ឱឡារិករូប ១០ (អាយតនៈខាងក្នុង ៥ + ខាងក្រៅ ៥) និង សុខុមរូប ១ (ធម្មាយតនៈ)។',
    aE: 'Eleven in total: 10 from oḷārika (5 internal + 5 external) and 1 from sukhuma (dhammāyatana).',
  },
]

const anindriyaQas = [
  {
    qK: 'តើអនិន្រ្ទិយរូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas does anindriya-rūpa (non-faculty matter) comprise? Which?',
    aK: 'អនិន្រ្ទិយរូប បានដល់រូប ២០ គឺ មហាភូតរូប ៤ វិសយរូប ៤ ហទយរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Anindriya-rūpa comprises 20 rūpas: the 4 great essentials, 4 sense-object rūpas, heart-base (1), nutriment (1), element-space (1), intimations (2), mutable rūpas (3) and characteristic rūpas (4).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូប ជាសភាវរូប ឬអសភាវរូប?',
    qE: 'Is anindriya-rūpa sabhāva-rūpa (with own nature) or asabhāva-rūpa (without own nature)?',
    aK: 'អនិន្រ្ទិយរូប ជាសភាវរូបផង និងជាអសភាវរូបផង។',
    aE: 'It is both sabhāva-rūpa and asabhāva-rūpa.',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាសភាវរូប? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are sabhāva-rūpa? Which?',
    aK: 'អនិន្រ្ទិយរូប ១០ ជាសភាវរូប គឺ មហាភូតរូប ៤ វិសយរូប ៤ ហទយរូប ១ និង អាហាររូប ១។',
    aE: 'Ten: the 4 great essentials, 4 sense-object rūpas, heart-base and nutriment (10).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាអសភាវរូប? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are asabhāva-rūpa? Which?',
    aK: 'អនិន្រ្ទិយរូប ១០ ជាអសភាវរូប គឺ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Ten: element-space (1), intimations (2), mutable rūpas (3) and characteristic rūpas (4).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូប ជាមហាភូតរូប ឬឧបាទាយរូប?',
    qE: 'Is anindriya-rūpa mahābhūta-rūpa (primary) or upādāya-rūpa (derived)?',
    aK: 'អនិន្រ្ទិយរូប ជាមហាភូតរូបផង និងជាឧបាទាយរូបផង។',
    aE: 'It is both mahābhūta-rūpa and upādāya-rūpa.',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាមហាភូតរូប? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are mahābhūta-rūpa? Which?',
    aK: 'អនិន្រ្ទិយរូប ៤ ជាមហាភូតរូប គឺ បឋវីរូប ១ អាបោរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'Four: earth, water, fire and air (the 4 great essentials).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាឧបាទាយរូប? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are upādāya-rūpa? Which?',
    aK: 'អនិន្រ្ទិយរូប ១៦ ជាឧបាទាយរូប គឺ វិសយរូប ៤ ហទយរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Sixteen: 4 sense-object rūpas, heart-base, nutriment, element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍អ្វីខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do anindriya-rūpas yield? Which?',
    aK: 'អនិន្រ្ទិយរូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'Six: the visible object, sound, odour, taste, tangibility and dhammārammaṇa.',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជារូបារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are rūpārammaṇa (visible object)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១ ជារូបារម្មណ៍ គឺ វណ្ណរូប ១។',
    aE: 'One: colour (vaṇṇa-rūpa).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាសទ្ទារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are saddārammaṇa (sound)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១ ជាសទ្ទារម្មណ៍ គឺ សទ្ទរូប ១។',
    aE: 'One: sound (sadda-rūpa).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាគន្ធារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are gandhārammaṇa (odour)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១ ជាគន្ធារម្មណ៍ គឺ គន្ធរូប ១។',
    aE: 'One: odour (gandha-rūpa).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជារសារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are rasārammaṇa (taste)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១ ជារសារម្មណ៍ គឺ រសរូប ១។',
    aE: 'One: taste (rasa-rūpa).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាផោដ្ឋព្វារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are phoṭṭhabbārammaṇa (tangibility)? Which?',
    aK: 'អនិន្រ្ទិយរូប ៣ ជាផោដ្ឋព្វារម្មណ៍ គឺ បឋវីរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'Three: earth, fire and air (the tangible great essentials).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាធម្មារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are dhammārammaṇa (mind-object)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១៣ ជាធម្មារម្មណ៍ គឺ អាបោ ១ ហទយរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Thirteen: water (1), heart-base, nutriment, element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈអ្វីខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do anindriya-rūpas yield? Which?',
    aK: 'អនិន្រ្ទិយរូប បើដើរតួជាអាយតនៈ បានអាយតនៈ ៦ គឺ រូបាយតនៈ សទ្ទាយតនៈ គន្ធាយតនៈ រសាយតនៈ ផោដ្ឋព្វាយតនៈ និង ធម្មាយតនៈ។',
    aE: 'Six: the visible, sound, odour, taste, tangible and mind-object bases.',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូប ជាអាយតនៈខាងក្នុង ឬជាអាយតនៈខាងក្រៅ?',
    qE: 'Is anindriya-rūpa an internal or an external āyatana?',
    aK: 'អនិន្រ្ទិយរូប ជាអាយតនៈខាងក្រៅ។',
    aE: 'Anindriya-rūpa is an external āyatana.',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាអាយតនៈខាងក្នុង? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are internal āyatanas? Which?',
    aK: 'អនិន្រ្ទិយរូប មិនមែនជាអាយតនៈខាងក្នុងទេ។',
    aE: 'None; anindriya-rūpa is never an internal āyatana.',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាអាយតនៈខាងក្រៅ? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are external āyatanas? Which?',
    aK: 'អនិន្រ្ទិយរូប ២០ ជាអាយតនៈខាងក្រៅ គឺ មហាភូតរូប ៤ វិសយរូប ៤ ហទយរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'All 20: the 4 great essentials, 4 sense-object rūpas, heart-base, nutriment, element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជារូបាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are the visible base (rūpāyatana)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១ ជារូបាយតនៈ គឺ វណ្ណរូប ១។',
    aE: 'One: colour (vaṇṇa-rūpa).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាសទ្ទាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are the sound base (saddāyatana)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១ ជាសទ្ទាយតនៈ គឺ សទ្ទរូប ១។',
    aE: 'One: sound (sadda-rūpa).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាគន្ធាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are the odour base (gandhāyatana)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១ ជាគន្ធាយតនៈ គឺ គន្ធរូប ១។',
    aE: 'One: odour (gandha-rūpa).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជារសាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are the taste base (rasāyatana)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១ ជារសាយតនៈ គឺ រសរូប ១។',
    aE: 'One: taste (rasa-rūpa).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាផោដ្ឋព្វាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are the tangible base (phoṭṭhabbāyatana)? Which?',
    aK: 'អនិន្រ្ទិយរូប ៣ ជាផោដ្ឋព្វាយតនៈ គឺ បឋវីរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'Three: earth, fire and air (the tangible great essentials).',
  },
  {
    qK: 'តើអនិន្រ្ទិយរូបប៉ុន្មានជាធម្មាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many anindriya-rūpas are the mind-object base (dhammāyatana)? Which?',
    aK: 'អនិន្រ្ទិយរូប ១៣ ជាធម្មាយតនៈ គឺ អាបោ ១ ហទយរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Thirteen: water (1), heart-base, nutriment, element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើឥន្រ្ទិយរូប និងអនិន្រ្ទិយរូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'Together, how many rūpas do indriya-rūpa and anindriya-rūpa comprise? Which?',
    aK: 'ឥន្រ្ទិយរូប និងអនិន្រ្ទិយរូប បានដល់រូប ២៨ គឺ មហាភូតរូប ៤ បសាទរូប ៥ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Together they comprise all 28 rūpas: 4 great essentials, 5 sensitives, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើឥន្រ្ទិយរូប និងអនិន្រ្ទិយរូប ចាត់ជាបរមត្ថធម៌មួយណា?',
    qE: 'To which paramattha-dhamma do indriya-rūpa and anindriya-rūpa belong?',
    aK: 'ឥន្រ្ទិយរូប និងអនិន្រ្ទិយរូប ចាត់ជា រូបបរមត្ថធម៌។',
    aE: 'They belong to rūpa-paramattha (matter).',
  },
  {
    qK: 'តើឥន្រ្ទិយរូប និងអនិន្រ្ទិយរូប ជារូបធម៌ ឬអរូបធម៌?',
    qE: 'Are indriya-rūpa and anindriya-rūpa rūpa-dhamma or arūpa-dhamma?',
    aK: 'ឥន្រ្ទិយរូប និងអនិន្រ្ទិយរូប ចាត់ជារូបធម៌។',
    aE: 'They are rūpa-dhamma (matter), never arūpa-dhamma.',
  },
  {
    qK: 'តើឥន្រ្ទិយរូប និងអនិន្រ្ទិយរូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do indriya-rūpa and anindriya-rūpa yield together? Which?',
    aK: 'ឥន្រ្ទិយរូប និងអនិន្រ្ទិយរូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'Six in total: the visible object, sound, odour, taste, tangibility and dhammārammaṇa.',
  },
  {
    qK: 'តើឥន្ទ្រិយរូប និងអនិន្រ្ទិយរូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do indriya-rūpa and anindriya-rūpa yield together? Which?',
    aK: 'ឥន្ទ្រិយរូប និងអនិន្រ្ទិយរូប បើដើរតួជាអាយតនៈ បានអាយតនៈ ១១ គឺ អាយតនៈខាងក្នុង ៥ (បសាទ ៥) និង អាយតនៈខាងក្រៅ ៥ (វិសយ ៥) ហើយក៏រាប់បញ្ចូលធម្មាយតនៈទៀត។',
    aE: 'Eleven in total: 5 internal sense-bases (the 5 sensitives), 5 external sense-object bases (colour, sound, odour, taste, tangibility) and the dhammāyatana.',
  },
]

const vatthuQas = [
  {
    qK: 'ដោយវត្ថុ តើរូប ២៨ ចែកជាប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'By way of physical base, into how many kinds are the 28 rūpas divided? Which?',
    aK: 'ដោយវត្ថុ រូប ២៨ ចែកជា ២ យ៉ាង គឺ វត្ថុរូប និង អវត្ថុរូប។',
    aE: 'By way of physical base, the 28 rūpas divide into 2 kinds: vatthu-rūpa (base matter) and avatthu-rūpa (non-base matter).',
  },
  {
    qK: 'តើវត្ថុរូប មានន័យដូចម្តេច?',
    qE: 'What does vatthu-rūpa (base matter) mean?',
    aK: 'វត្ថុរូប មានន័យថា រូបដែលជាវត្ថុ ឬរូបដែលជាទីអាស្រ័យរបស់ចិត្តចេតសិកកើតឡើង។',
    aE: 'Vatthu-rūpa means matter that serves as the physical base upon which consciousness and mental factors arise.',
  },
  {
    qK: 'តើវត្ថុរូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas does vatthu-rūpa comprise? Which?',
    aK: 'វត្ថុរូប បានដល់រូប ៦ គឺ ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប កាយបសាទរូប និង ហទយរូប។',
    aE: 'Vatthu-rūpa comprises 6 rūpas: eye, ear, nose, tongue and body-sensitives, and the heart-base.',
  },
  {
    qK: 'តើវត្ថុរូបប៉ុន្មានជាសភាវរូប? រូបណាខ្លះ?',
    qE: 'How many vatthu-rūpas are sabhāva-rūpa? Which?',
    aK: 'វត្ថុរូប ៦ ជាសភាវរូប គឺ ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប កាយបសាទរូប និង ហទយរូប។',
    aE: 'All 6 vatthu-rūpas are sabhāva-rūpa: the 5 sensitives and the heart-base.',
  },
  {
    qK: 'តើសភាវរូបប៉ុន្មានជាវត្ថុរូប? រូបណាខ្លះ?',
    qE: 'How many sabhāva-rūpas are vatthu-rūpa? Which?',
    aK: 'សភាវរូប ៦ ជាវត្ថុរូប គឺ ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប កាយបសាទរូប និង ហទយរូប។',
    aE: 'Six sabhāva-rūpas are vatthu-rūpa: the 5 sensitives and the heart-base.',
  },
  {
    qK: 'តើអសភាវរូប ជាវត្ថុរូបដែរឬទេ?',
    qE: 'Is asabhāva-rūpa (matter without own nature) also vatthu-rūpa?',
    aK: 'អសភាវរូប មិនមែនជាវត្ថុរូបទេ។',
    aE: 'No; asabhāva-rūpa is never vatthu-rūpa.',
  },
  {
    qK: 'តើចក្ខុបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះដូចម្តេច?',
    qE: 'When the eye-sensitivity serves as a base, what is it called?',
    aK: 'ចក្ខុបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះថា ចក្ខុវត្ថុ។',
    aE: 'The eye-sensitivity as base is called cakkhu-vatthu (eye-base).',
  },
  {
    qK: 'តើសោតបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះដូចម្តេច?',
    qE: 'When the ear-sensitivity serves as a base, what is it called?',
    aK: 'សោតបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះថា សោតវត្ថុ។',
    aE: 'The ear-sensitivity as base is called sota-vatthu (ear-base).',
  },
  {
    qK: 'តើឃានបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះដូចម្តេច?',
    qE: 'When the nose-sensitivity serves as a base, what is it called?',
    aK: 'ឃានបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះថា ឃានវត្ថុ។',
    aE: 'The nose-sensitivity as base is called ghāna-vatthu (nose-base).',
  },
  {
    qK: 'តើជិវ្ហាបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះដូចម្តេច?',
    qE: 'When the tongue-sensitivity serves as a base, what is it called?',
    aK: 'ជិវ្ហាបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះថា ជិវ្ហាវត្ថុ។',
    aE: 'The tongue-sensitivity as base is called jivhā-vatthu (tongue-base).',
  },
  {
    qK: 'តើកាយបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះដូចម្តេច?',
    qE: 'When the body-sensitivity serves as a base, what is it called?',
    aK: 'កាយបសាទរូប បើដើរតួជាវត្ថុ មានឈ្មោះថា កាយវត្ថុ។',
    aE: 'The body-sensitivity as base is called kāya-vatthu (body-base).',
  },
  {
    qK: 'តើហទយរូប បើដើរតួជាវត្ថុ មានឈ្មោះដូចម្តេច?',
    qE: 'When the heart-base serves as a base, what is it called?',
    aK: 'ហទយរូប បើដើរតួជាវត្ថុ មានឈ្មោះថា ហទយវត្ថុ។',
    aE: 'The heart-base is called hadaya-vatthu.',
  },
  {
    qK: 'តើមហាភូតរូប ៤ ជាវត្ថុរូបដែរឬទេ?',
    qE: 'Are the 4 great essentials also vatthu-rūpa?',
    aK: 'មហាភូតរូប ៤ មិនមែនជាវត្ថុរូបទេ។',
    aE: 'No; the 4 great essentials are not vatthu-rūpa.',
  },
  {
    qK: 'តើវត្ថុរូបប៉ុន្មានជាឧបាទាយរូប? រូបណាខ្លះ?',
    qE: 'How many vatthu-rūpas are upādāya-rūpa? Which?',
    aK: 'វត្ថុរូប ៦ ជាឧបាទាយរូប គឺ ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប កាយបសាទរូប និង ហទយរូប។',
    aE: 'All 6 vatthu-rūpas are upādāya-rūpa: the 5 sensitives and the heart-base.',
  },
  {
    qK: 'តើឧបាទាយរូបប៉ុន្មានជាវត្ថុរូប? រូបណាខ្លះ?',
    qE: 'How many upādāya-rūpas are vatthu-rūpa? Which?',
    aK: 'ឧបាទាយរូប ៦ ជាវត្ថុរូប គឺ ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប កាយបសាទរូប និង ហទយរូប។',
    aE: 'Six upādāya-rūpas are vatthu-rūpa: the 5 sensitives and the heart-base.',
  },
  {
    qK: 'តើវត្ថុរូប ៦ បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do the 6 vatthu-rūpas yield? Which?',
    aK: 'វត្ថុរូប ៦ បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍។',
    aE: 'One: the dhammārammaṇa (mind-object).',
  },
  {
    qK: 'តើវត្ថុរូប ៦ ដើរតួជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបានប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'Through how many doors do the 6 vatthu-rūpas serve as objects for consciousness? Which?',
    aK: 'វត្ថុរូប ៦ ដើរតួជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបាន ១ គឺ មនោទ្វារ។',
    aE: 'One: the mind-door (mano-dvāra).',
  },
  {
    qK: 'តើវត្ថុរូប ៦ បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do the 6 vatthu-rūpas yield? Which?',
    aK: 'វត្ថុរូប ៦ បើដើរតួជាអាយតនៈ បានអាយតនៈ ៦ គឺ បសាទរូប ៥ ជាអាយតនៈ ៥ (ចក្ខ្វាយតនៈ សោតាយតនៈ ឃានាយតនៈ ជិវ្ហាយតនៈ កាយាយតនៈ) និង ហទយរូប ជាអាយតនៈ ១ (ធម្មាយតនៈ)។',
    aE: 'Six: the 5 sensitives are 5 āyatanas (eye, ear, nose, tongue and body-bases) and the heart-base is included in the dhammāyatana.',
  },
  {
    qK: 'តើវត្ថុរូប ៦ ចាត់ជាអាយតនៈខាងក្នុង ឬអាយតនៈខាងក្រៅ?',
    qE: 'Are the 6 vatthu-rūpas internal or external āyatanas?',
    aK: 'វត្ថុរូប ៦ ចាត់ជាអាយតនៈខាងក្នុងផង និងជាអាយតនៈខាងក្រៅផង។',
    aE: 'They are partly internal and partly external ayatanas: the 5 sensitives are internal, and the heart-base (in dhammāyatana) is external.',
  },
  {
    qK: 'តើអវត្ថុរូប មានន័យដូចម្តេច?',
    qE: 'What does avatthu-rūpa (non-base matter) mean?',
    aK: 'អវត្ថុរូប មានន័យថា រូបដែលមិនមែនជាវត្ថុ ឬរូបដែលមិនមែនជាទីអាស្រ័យរបស់ចិត្តចេតសិកកើតឡើងទេ។',
    aE: 'Avatthu-rūpa means matter that is not a base, that is not the support upon which consciousness and mental factors arise.',
  },
  {
    qK: 'តើអវត្ថុរូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas does avatthu-rūpa comprise? Which?',
    aK: 'អវត្ថុរូប បានដល់រូប ២២ គឺ មហាភូតរូប ៤ វិសយរូប ៤ ភាវរូប ២ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Avatthu-rūpa comprises 22 rūpas: 4 great essentials, 4 sense-object rūpas, 2 sex-rūpas, life-faculty, nutriment, element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើសភាវរូបប៉ុន្មានជាអវត្ថុរូប? សភាវរូបណាខ្លះ?',
    qE: 'How many sabhāva-rūpas are avatthu-rūpa? Which?',
    aK: 'សភាវរូប ១២ ជាអវត្ថុរូប គឺ មហាភូតរូប ៤ វិសយរូប ៤ ភាវរូប ២ ជីវិតរូប ១ និង អាហាររូប ១។',
    aE: 'Twelve sabhāva-rūpas are avatthu-rūpa: 4 great essentials, 4 sense-object rūpas, 2 sex-rūpas, life-faculty and nutriment.',
  },
  {
    qK: 'តើអសភាវរូបប៉ុន្មានជាអវត្ថុរូប? អសភាវរូបណាខ្លះ?',
    qE: 'How many asabhāva-rūpas are avatthu-rūpa? Which?',
    aK: 'អសភាវរូប ១០ ជាអវត្ថុរូប គឺ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Ten asabhāva-rūpas are avatthu-rūpa: element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើមហាភូតរូប ៤ ជាអវត្ថុរូបដែរឬទេ?',
    qE: 'Are the 4 great essentials also avatthu-rūpa?',
    aK: 'មហាភូតរូប ៤ ជាអវត្ថុរូប។',
    aE: 'Yes; the 4 great essentials are avatthu-rūpa.',
  },
  {
    qK: 'តើមហាភូតរូបប៉ុន្មាន ជាអវត្ថុរូប? រូបណាខ្លះ?',
    qE: 'How many great essentials are avatthu-rūpa? Which?',
    aK: 'មហាភូតរូប ៤ ជាអវត្ថុរូប គឺ បឋវីរូប ១ អាបោរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'All 4 great essentials are avatthu-rūpa: earth, water, fire and air.',
  },
  {
    qK: 'តើឧបាទាយរូបប៉ុន្មានជាអវត្ថុរូប? រូបណាខ្លះ?',
    qE: 'How many upādāya-rūpas are avatthu-rūpa? Which?',
    aK: 'ឧបាទាយរូប ១៨ ជាអវត្ថុរូប គឺ វិសយរូប ៤ ភាវរូប ២ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Eighteen upādāya-rūpas are avatthu-rūpa: 4 sense-object rūpas, 2 sex-rūpas, life-faculty, nutriment, element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើអវត្ថុរូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍អ្វីខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do avatthu-rūpas yield? Which?',
    aK: 'អវត្ថុរូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'Six: the visible object, sound, odour, taste, tangibility and dhammārammaṇa.',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជារូបារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are rūpārammaṇa? Which?',
    aK: 'អវត្ថុរូប ១ ជារូបារម្មណ៍ គឺ វណ្ណរូប ១។',
    aE: 'One: colour (vaṇṇa-rūpa).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាសទ្ទារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are saddārammaṇa? Which?',
    aK: 'អវត្ថុរូប ១ ជាសទ្ទារម្មណ៍ គឺ សទ្ទរូប ១។',
    aE: 'One: sound (sadda-rūpa).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាគន្ធារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are gandhārammaṇa? Which?',
    aK: 'អវត្ថុរូប ១ ជាគន្ធារម្មណ៍ គឺ គន្ធរូប ១។',
    aE: 'One: odour (gandha-rūpa).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជារសារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are rasārammaṇa? Which?',
    aK: 'អវត្ថុរូប ១ ជារសារម្មណ៍ គឺ រសរូប ១។',
    aE: 'One: taste (rasa-rūpa).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាផោដ្ឋព្វារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are phoṭṭhabbārammaṇa? Which?',
    aK: 'អវត្ថុរូប ៣ ជាផោដ្ឋព្វារម្មណ៍ គឺ បឋវីរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'Three: earth, fire and air (the tangible great essentials).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាធម្មារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are dhammārammaṇa? Which?',
    aK: 'អវត្ថុរូប ១៥ ជាធម្មារម្មណ៍ គឺ អាបោ ១ ភាវរូប ២ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Fifteen: water (1), 2 sex-rūpas, life-faculty, nutriment, element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើអវត្ថុរូប ជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបានប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'Through how many doors do avatthu-rūpas serve as objects for consciousness? Which?',
    aK: 'អវត្ថុរូប ជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបាន ៥ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជិវ្ហាទ្វារ និង កាយទ្វារ។',
    aE: 'Five: the eye, ear, nose, tongue and body-doors (the sense-organ doors through which the sense-object rūpas are cognised).',
  },
  {
    qK: 'តើអវត្ថុរូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do avatthu-rūpas yield? Which?',
    aK: 'អវត្ថុរូប បើដើរតួជាអាយតនៈ បានអាយតនៈ ៦ គឺ រូបាយតនៈ សទ្ទាយតនៈ គន្ធាយតនៈ រសាយតនៈ ផោដ្ឋព្វាយតនៈ និង ធម្មាយតនៈ។',
    aE: 'Six: the visible, sound, odour, taste and tangible bases, and the dhammāyatana.',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាអាយតនៈខាងក្នុង? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are internal āyatanas? Which?',
    aK: 'អវត្ថុរូប មិនមានជាអាយតនៈខាងក្នុងទេ។',
    aE: 'None; avatthu-rūpa is never an internal āyatana.',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាអាយតនៈខាងក្រៅ? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are external āyatanas? Which?',
    aK: 'អវត្ថុរូប ២២ ជាអាយតនៈខាងក្រៅ គឺ វិសយរូប ៥ (រូប សទ្ទ គន្ធា រស ផោដ្ឋព្វៈ) និង អ្វីដែលសង្គ្រោះក្នុងធម្មាយតនៈ។',
    aE: 'All 22 are external ayatanas: the 5 sense-object bases (colour, sound, odour, taste, tangibility) and those comprised in the dhammāyatana.',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជារូបាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are the visible base? Which?',
    aK: 'អវត្ថុរូប ១ ជារូបាយតនៈ គឺ វណ្ណរូប ១។',
    aE: 'One: colour (vaṇṇa-rūpa).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាសទ្ទាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are the sound base? Which?',
    aK: 'អវត្ថុរូប ១ ជាសទ្ទាយតនៈ គឺ សទ្ទរូប ១។',
    aE: 'One: sound (sadda-rūpa).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាគន្ធាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are the odour base? Which?',
    aK: 'អវត្ថុរូប ១ ជាគន្ធាយតនៈ គឺ គន្ធរូប ១។',
    aE: 'One: odour (gandha-rūpa).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជារសាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are the taste base? Which?',
    aK: 'អវត្ថុរូប ១ ជារសាយតនៈ គឺ រសរូប ១។',
    aE: 'One: taste (rasa-rūpa).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាផោដ្ឋព្វាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are the tangible base? Which?',
    aK: 'អវត្ថុរូប ៣ ជាផោដ្ឋព្វាយតនៈ គឺ បឋវីរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'Three: earth, fire and air (the tangible great essentials).',
  },
  {
    qK: 'តើអវត្ថុរូបប៉ុន្មានជាធម្មាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many avatthu-rūpas are the mind-object base? Which?',
    aK: 'អវត្ថុរូប ១៥ ជាធម្មាយតនៈ គឺ អាបោ ១ ភាវរូប ២ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Fifteen: water (1), 2 sex-rūpas, life-faculty, nutriment, element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើវត្ថុរូប និងអវត្ថុរូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'Together, how many rūpas do vatthu-rūpa and avatthu-rūpa comprise? Which?',
    aK: 'វត្ថុរូប និងអវត្ថុរូប បានដល់រូប ២៨ គឺ មហាភូតរូប ៤ បសាទរូប ៥ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Together they comprise all 28 rūpas: 4 great essentials, 5 sensitives, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 2 intimations, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើវត្ថុរូប និងអវត្ថុរូប ចាត់ជាបរមត្ថធម៌មួយណា?',
    qE: 'To which paramattha-dhamma do vatthu-rūpa and avatthu-rūpa belong?',
    aK: 'វត្ថុរូប និងអវត្ថុរូប ចាត់ជា រូបបរមត្ថធម៌។',
    aE: 'They belong to rūpa-paramattha (matter).',
  },
  {
    qK: 'តើវត្ថុរូប និងអវត្ថុរូប ចាត់ជារូបធម៌ ឬអរូបធម៌?',
    qE: 'Are vatthu-rūpa and avatthu-rūpa rūpa-dhamma or arūpa-dhamma?',
    aK: 'វត្ថុរូប និងអវត្ថុរូប ចាត់ជារូបធម៌។',
    aE: 'They are rūpa-dhamma (matter), never arūpa-dhamma.',
  },
  {
    qK: 'តើវត្ថុរូប និងអវត្ថុរូប ចាត់ជាអកុសលធម៌ ឬកុសលធម៌?',
    qE: 'Are vatthu-rūpa and avatthu-rūpa akusala or kusala dhamma?',
    aK: 'វត្ថុរូប និងអវត្ថុរូប មិនមែនជាទាំងកុសល ទាំងអកុសលទេ គឺចាត់ជាអព្យាកតធម៌។',
    aE: 'Neither; matter (rūpa) is abyākata (indeterminate) dhamma, not kusala or akusala.',
  },
  {
    qK: 'តើវត្ថុរូប និងអវត្ថុរូប ចាត់ជាខន្ធអ្វី?',
    qE: 'To which khandha do vatthu-rūpa and avatthu-rūpa belong?',
    aK: 'វត្ថុរូប និងអវត្ថុរូប ចាត់ជារូបក្ខន្ធ។',
    aE: 'They belong to the rūpakkhandha (aggregate of matter).',
  },
  {
    qK: 'តើវត្ថុរូប និងអវត្ថុរូប បើដើរតួជាអារម្មណ៍ បានដល់អារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do vatthu-rūpa and avatthu-rūpa yield together? Which?',
    aK: 'វត្ថុរូប និងអវត្ថុរូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'Six in total: the visible object, sound, odour, taste, tangibility and dhammārammaṇa.',
  },
  {
    qK: 'តើវត្ថុរូប និងអវត្ថុរូប បើដើរតួជាអាយតនៈ បានដល់អាយតនៈប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do vatthu-rūpa and avatthu-rūpa yield together? Which?',
    aK: 'វត្ថុរូប និងអវត្ថុរូប បើដើរតួជាអាយតនៈ បានអាយតនៈ ១១ គឺ អាយតនៈខាងក្នុង ៥ (បសាទរូប ៥) និង អាយតនៈខាងក្រៅ ៥ (វិសយរូប ៥) ហើយក៏រាប់បញ្ចូលធម្មាយតនៈទៀត។',
    aE: 'Eleven in total: 5 internal sense-bases (the 5 sensitives), 5 external sense-object bases (colour, sound, odour, taste, tangibility) and the dhammāyatana.',
  },
]

const ajjhattikaQas = [
  {
    qK: 'តើរូប ២៨ ចែកជាប៉ុន្មានប្រភេទធំៗ? អ្វីខ្លះ?',
    qE: 'Into how many main classes are the 28 rūpas divided? Which?',
    aK: 'រូប ២៨ ចែកជា ២ ប្រភេទធំៗ គឺ មហាភូតរូប ៤ និង ឧបាទាយរូប ២៤។',
    aE: 'The 28 rūpas divide into 2 main classes: 4 mahābhūta-rūpas (great essentials) and 24 upādāya-rūpas (derived matter).',
  },
  {
    qK: 'តើរូប ២៨ ចែកជាប៉ុន្មានពួក? ពួកអ្វីខ្លះ?',
    qE: 'Into how many groups are the 28 rūpas divided? Which?',
    aK: 'រូប ២៨ ចែកជា ១១ ពួក គឺ មហាភូតរូប ៤ បសាទរូប ៥ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'The 28 rūpas divide into 11 groups: 4 great essentials, 5 sensitives, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 2 intimations, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើមហាភូតរូប មានន័យដូចម្តេច?',
    qE: 'What does mahābhūta-rūpa mean?',
    aK: 'មហាភូតរូប មានន័យថា រូបដែលមានពិតធំ ទីជាអាស្រ័យនៃឧបាទាយរូប។',
    aE: 'Mahābhūta-rūpa means the great, primary matter that serves as the support of the derived (upādāya) rūpas.',
  },
  {
    qK: 'តើមហាភូតរូប មានរូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas are the great essentials? Which?',
    aK: 'មហាភូតរូប មានរូប ៤ គឺ បឋវី អាបោ តេជោ និង វាយោ។',
    aE: 'There are 4 great essentials: earth (pathavī), water (āpo), fire (tejo) and air (vāyo).',
  },
  {
    qK: 'តើឧបាទាយរូប មានន័យដូចម្តេច?',
    qE: 'What does upādāya-rūpa mean?',
    aK: 'ឧបាទាយរូប មានន័យថា រូបដែលកើតអាស្រ័យនឹងមហាភូតរូប ៤។',
    aE: 'Upādāya-rūpa means matter that arises dependent upon the 4 great essentials.',
  },
  {
    qK: 'តើឧបាទាយរូប មានរូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas are the derived matter? Which?',
    aK: 'ឧបាទាយរូប មានរូប ២៤ គឺ បសាទរូប ៥ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'There are 24 upādāya-rūpas: 5 sensitives, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 2 intimations, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើរូបប៉ុន្មាននៅក្នុងកាយសត្វមានវិញ្ញាណ ដែលមានអវយវៈគ្រប់គ្រាន់ ក្នុងម្នាក់ៗ?',
    qE: 'How many rūpas are in the body of a sentient being with complete faculties?',
    aK: 'នៅក្នុងកាយសត្វមានវិញ្ញាណ ដែលមានអវយវៈគ្រប់គ្រាន់ ក្នុងម្នាក់ៗ មានរូប ២៧។',
    aE: 'In the body of a sentient being with complete faculties there are 27 rūpas.',
  },
  {
    qK: 'តើរូបប៉ុន្មាននៅក្រៅកាយសត្វ ជាវត្ថុមិនមានវិញ្ញាណអាស្រ័យ? រូបណាខ្លះ?',
    qE: 'How many rūpas are outside the body, in non-sentient objects? Which?',
    aK: 'នៅក្រៅកាយសត្វ ជាវត្ថុមិនមានវិញ្ញាណអាស្រ័យ មានរូប ៨ គឺ អវិនិព្ភោគរូប ៨ មាន មហាភូតរូប ៤ វិសយរូប ៣ (វៀរសទ្ទ) និង អាហាររូប ១។',
    aE: 'In non-sentient external objects there are 8 rūpas, the inseparable (avinibbhoga) rūpas: 4 great essentials, 3 sense-object rūpas (excluding sound) and nutriment.',
  },
  {
    qK: 'តើរូបប៉ុន្មានកើតអាស្រ័យមហាភូតរូប ៤? រូបណាខ្លះ?',
    qE: 'How many rūpas arise dependent on the 4 great essentials? Which?',
    aK: 'ឧបាទាយរូប ២៤ កើតអាស្រ័យមហាភូតរូប ៤ គឺ បសាទរូប ៥ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'All 24 upādāya-rūpas arise dependent on the 4 great essentials: the 5 sensitives, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 2 intimations, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើរូប ២៨ មានឈ្មោះហៅតែមួយ ប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'Under how many single names are the 28 rūpas called? Which?',
    aK: 'រូប ២៨ មានឈ្មោះហៅតែមួយ ៨ យ៉ាង គឺ អហេតុកៈ សប្បច្ចយៈ សាសវៈ សង្ខតៈ លោកិយៈ កាមាវចរៈ អានារម្មណៈ និង អប្បហាតព្វៈ។',
    aE: 'The 28 rūpas are collectively called by 8 names: ahetuka, sappaccaya, sāsava, saṅkhata, lokiya, kāmāvacara, anārammaṇa and appahātabba.',
  },
  {
    qK: 'ហេតុអ្វីបានជារូប ២៨ មានឈ្មោះថា អហេតុកៈ?',
    qE: 'Why are the 28 rūpas called ahetuka (rootless)?',
    aK: 'បានជារូប ២៨ មានឈ្មោះថា អហេតុកៈ ព្រោះ រូប ២៨ មិនមានហេតុ ៦ ណាមួយកើតរួមជាមួយ។',
    aE: 'They are called ahetuka because no one of the 6 roots (lobha, dosa, moha, alobha, adosa, amoha) arises together with rūpa.',
  },
  {
    qK: 'ហេតុអ្វីបានជារូប ២៨ មានឈ្មោះថា សប្បច្ចយៈ?',
    qE: 'Why are the 28 rūpas called sappaccaya (conditioned)?',
    aK: 'បានជារូប ២៨ មានឈ្មោះថា សប្បច្ចយៈ ព្រោះ រូប ២៨ ជារូបដែលកើតពីសមុដ្ឋាន ៤ មានកម្មសមុដ្ឋានជាដើម។',
    aE: 'They are called sappaccaya because they arise from the 4 origins (samuṭṭhāna), beginning with kamma-originating rūpa.',
  },
  {
    qK: 'ហេតុអ្វីបានជារូប ២៨ មានឈ្មោះថា សាសវៈ?',
    qE: 'Why are the 28 rūpas called sāsava (with taints)?',
    aK: 'បានជារូប ២៨ មានឈ្មោះថា សាសវៈ ព្រោះ រូប ២៨ ប្រព្រឹត្តទៅជាមួយអាសវៈ គឺ ជាអារម្មណ៍ឱ្យអាសវធម៌។',
    aE: 'They are called sāsava because they go along with the taints (āsava), serving as objects for the taint-dhammas.',
  },
  {
    qK: 'ហេតុអ្វីបានជារូប ២៨ មានឈ្មោះថា សង្ខតៈ?',
    qE: 'Why are the 28 rūpas called saṅkhata (conditioned/compounded)?',
    aK: 'បានជារូប ២៨ មានឈ្មោះថា សង្ខតៈ ព្រោះ រូប ២៨ ជាធម៌ដែលមានបច្ច័យផ្សេងៗតាក់តែងឡើង ដូចជាក្នុងហេតុជិតរបស់រូបនីមួយៗជាដើម។',
    aE: 'They are called saṅkhata because they are dhammas fashioned by various conditions, as by the proximate causes of each rūpa.',
  },
  {
    qK: 'ហេតុអ្វីបានជារូប ២៨ មានឈ្មោះថា លោកិយៈ?',
    qE: 'Why are the 28 rūpas called lokiya (worldly)?',
    aK: 'បានជារូប ២៨ មានឈ្មោះថា លោកិយៈ ព្រោះ ជាធម៌សង្គ្រោះចូលក្នុងសង្ខារលោក នៃឧបាទានក្ខន្ធ មានការបែកធ្លាយជានិច្ច។',
    aE: 'They are called lokiya because they are comprised in the saṅkhāra-loka of the aggregates that are ever subject to breaking apart.',
  },
  {
    qK: 'ហេតុអ្វីបានជារូប ២៨ មានឈ្មោះថា កាមាវចរៈ?',
    qE: 'Why are the 28 rūpas called kāmāvacara (sense-sphere)?',
    aK: 'បានជារូប ២៨ មានឈ្មោះថា កាមាវចរៈ ព្រោះ ជាទីត្រាច់ទៅនៃកាមតណ្ហា។',
    aE: 'They are called kāmāvacara because they are the roaming-ground of sensual craving (kāma-taṇhā).',
  },
  {
    qK: 'ហេតុអ្វីបានជារូប ២៨ មានឈ្មោះថា អានារម្មណៈ?',
    qE: 'Why are the 28 rūpas called anārammaṇa (without object)?',
    aK: 'បានជារូប ២៨ មានឈ្មោះថា អានារម្មណៈ ព្រោះ ជាធម៌ដែលមិនដឹងអារម្មណ៍។',
    aE: 'They are called anārammaṇa because matter does not cognise any object.',
  },
  {
    qK: 'ហេតុអ្វីបានជារូប ២៨ មានឈ្មោះថា អប្បហាតព្វៈ?',
    qE: 'Why are the 28 rūpas called appahātabba (not to be abandoned)?',
    aK: 'បានជារូប ២៨ មានឈ្មោះថា អប្បហាតព្វៈ ព្រោះ ជាធម៌ដែលមិនត្រូវលះដោយតទង្គប្បហាន។',
    aE: 'They are called appahātabba because they are not to be abandoned by the abandoning of substitution of opposites (tadaṅga-pahāna).',
  },
  {
    qK: 'តើរូប ២៨ មានប៉ុន្មានគូ?',
    qE: 'How many pairs (kolāpa/duka) do the 28 rūpas have?',
    aK: 'រូប ២៨ មាន ១១ គូ។',
    aE: 'The 28 rūpas have 11 pairs (dukas).',
  },
  {
    qK: 'បើចែកដោយរូបសំខាន់ និងមិនសូវសំខាន់ តើរូប ២៨ ចែកជាប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'Divided by important and less-important matter, into how many kinds are the 28 rūpas divided? Which?',
    aK: 'បើចែកដោយរូបសំខាន់ និងមិនសូវសំខាន់ រូប ២៨ ចែកជា ២ យ៉ាង គឺ អជ្ឈត្តិករូប និង ពាហិររូប។',
    aE: 'Divided by important and less-important matter, the 28 rūpas divide into 2 kinds: ajjhattika-rūpa (internal) and bāhira-rūpa (external).',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប មានន័យដូចម្តេច?',
    qE: 'What does ajjhattika-rūpa mean?',
    aK: 'អជ្ឈត្តិករូប មានន័យថា រូបខាងក្នុង ឬរូបសំខាន់។',
    aE: 'Ajjhattika-rūpa means internal matter, or important matter.',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas does ajjhattika-rūpa comprise? Which?',
    aK: 'អជ្ឈត្តិករូប បានដល់រូប ៥ គឺ បសាទរូប ៥ មាន ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប និង កាយបសាទរូប។',
    aE: 'Ajjhattika-rūpa comprises 5 rūpas: the 5 sensitives (eye, ear, nose, tongue and body).',
  },
  {
    qK: 'ហេតុអ្វីបានជាចាត់បសាទរូប ៥ ជាអជ្ឈត្តិករូប?',
    qE: 'Why are the 5 sensitives classed as ajjhattika-rūpa?',
    aK: 'បានជាចាត់បសាទរូប ៥ ជាអជ្ឈត្តិករូប ព្រោះ ជារូបដែលប្រើប្រាស់បានច្រើន មានប្រយោជន៍ច្រើន ជារូបសំខាន់ ជាទីអាស្រ័យនៃចិត្តទាំងឡាយផង និងទីប្រព្រឹត្តទៅនៃចិត្តចេតសិកដឹងអារម្មណ៍ទាំងឡាយផង។',
    aE: 'Because the 5 sensitives are much used, very useful, important matter that is both the support of consciousness and the sphere through which consciousness and mental factors cognise objects.',
  },
  {
    qK: 'បើមិនបសាទរូប ៥ ទេ រាងកាយសត្វនៅបញ្ចវោការភូមិ ដូចជាអង្កត់ឧស រកប្រយោជន៍គ្មាន មែនដែរឬទេ?',
    qE: 'Without the 5 sensitives, is the body of a sentient being in the five-sense-sphere like a useless lump of wood?',
    aK: 'បើមិនបសាទរូប ៥ ទេ រាងកាយសត្វនៅបញ្ចវោការភូមិ ដូចជាអង្កត់ឧស រកប្រយោជន៍គ្មាន គឺពិតជាត្រឹមត្រូវណាស់។',
    aE: 'Yes, that is quite correct: without the 5 sensitives the body of a being in the five-sense-sphere would be utterly useless, like a lump of wood.',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប ជាសភាវរូប ឬអសភាវរូប?',
    qE: 'Is ajjhattika-rūpa sabhāva-rūpa or asabhāva-rūpa?',
    aK: 'អជ្ឈត្តិករូប ជាសភាវរូប។',
    aE: 'Ajjhattika-rūpa is sabhāva-rūpa.',
  },
  {
    qK: 'តើសភាវរូបប៉ុន្មានជាអជ្ឈត្តិករូប? រូបណាខ្លះ?',
    qE: 'How many sabhāva-rūpas are ajjhattika-rūpa? Which?',
    aK: 'សភាវរូប ៥ ជាអជ្ឈត្តិករូប គឺ បសាទរូប ៥ មាន ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប និង កាយបសាទរូប។',
    aE: 'Five sabhāva-rūpas are ajjhattika-rūpa: the 5 sensitives.',
  },
  {
    qK: 'តើអសភាវរូប ជាអជ្ឈត្តិករូបដែរឬទេ?',
    qE: 'Is asabhāva-rūpa also ajjhattika-rūpa?',
    aK: 'អសភាវរូប មិនមែនជាអជ្ឈត្តិករូបទេ។',
    aE: 'No; asabhāva-rūpa is never ajjhattika-rūpa.',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប ជាមហាភូតរូប ឬឧបាទាយរូប?',
    qE: 'Is ajjhattika-rūpa mahābhūta-rūpa or upādāya-rūpa?',
    aK: 'អជ្ឈត្តិករូប ជាឧបាទាយរូប។',
    aE: 'Ajjhattika-rūpa is upādāya-rūpa (derived matter).',
  },
  {
    qK: 'តើមហាភូតរូប ជាអជ្ឈត្តិករូបដែរឬទេ?',
    qE: 'Is mahābhūta-rūpa also ajjhattika-rūpa?',
    aK: 'មហាភូតរូប មិនមែនជាអជ្ឈត្តិករូបទេ។',
    aE: 'No; the great essentials are not ajjhattika-rūpa.',
  },
  {
    qK: 'តើឧបាទាយរូបប៉ុន្មាន ជាអជ្ឈត្តិករូប? រូបណាខ្លះ?',
    qE: 'How many upādāya-rūpas are ajjhattika-rūpa? Which?',
    aK: 'ឧបាទាយរូប ៥ ជាអជ្ឈត្តិករូប គឺ បសាទរូប ៥ មាន ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប និង កាយបសាទរូប។',
    aE: 'Five upādāya-rūpas are ajjhattika-rūpa: the 5 sensitives.',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do ajjhattika-rūpas yield? Which?',
    aK: 'អជ្ឈត្តិករូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍។',
    aE: 'One: the dhammārammaṇa (mind-object).',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប ជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបានប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'Through how many doors do ajjhattika-rūpas serve as objects for consciousness? Which?',
    aK: 'អជ្ឈត្តិករូប ជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបាន ១ គឺ មនោទ្វារ។',
    aE: 'One: the mind-door (mano-dvāra).',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do ajjhattika-rūpas yield? Which?',
    aK: 'អជ្ឈត្តិករូប បើដើរតួជាអាយតនៈ បានអាយតនៈ ៥ គឺ ចក្ខ្វាយតនៈ សោតាយតនៈ ឃានាយតនៈ ជិវ្ហាយតនៈ និង កាយាយតនៈ។',
    aE: 'Five: the eye, ear, nose, tongue and body sense-bases.',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប ជាអាយតនៈខាងក្នុង ឬអាយតនៈខាងក្រៅ?',
    qE: 'Are ajjhattika-rūpas internal or external āyatanas?',
    aK: 'អជ្ឈត្តិករូប ជាអាយតនៈខាងក្នុង។',
    aE: 'They are internal āyatanas.',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប ជារូបធម៌ ឬនាមធម៌?',
    qE: 'Are ajjhattika-rūpas rūpa-dhamma or nāma-dhamma?',
    aK: 'អជ្ឈត្តិករូប ជារូបធម៌។',
    aE: 'They are rūpa-dhamma (matter).',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប ចាត់ជាខន្ធអ្វី?',
    qE: 'To which khandha do ajjhattika-rūpas belong?',
    aK: 'អជ្ឈត្តិករូប ចាត់ជារូបក្ខន្ធ។',
    aE: 'They belong to the rūpakkhandha (aggregate of matter).',
  },
  {
    qK: 'តើអជ្ឈត្តិករូប ជាអកុសលធម៌ ឬកុសលធម៌?',
    qE: 'Are ajjhattika-rūpas akusala or kusala dhamma?',
    aK: 'អជ្ឈត្តិករូប មិនមែនជាទាំងកុសល ទាំងអកុសលទេ គឺជាអព្យាកតធម៌។',
    aE: 'Neither; matter is abyākata (indeterminate) dhamma, not kusala or akusala.',
  },
  {
    qK: 'តើពាហិររូប មានន័យដូចម្តេច?',
    qE: 'What does bāhira-rūpa mean?',
    aK: 'ពាហិររូប មានន័យថា រូបខាងក្រៅ ឬរូបមិនសូវសំខាន់។',
    aE: 'Bāhira-rūpa means external matter, or less-important matter.',
  },
  {
    qK: 'តើពាហិររូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas does bāhira-rūpa comprise? Which?',
    aK: 'ពាហិររូប បានដល់រូប ២៣ គឺ មហាភូតរូប ៤ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Bāhira-rūpa comprises 23 rūpas: 4 great essentials, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 2 intimations, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើពាហិររូប ជាសភាវរូប ឬអសភាវរូប?',
    qE: 'Is bāhira-rūpa sabhāva-rūpa or asabhāva-rūpa?',
    aK: 'ពាហិររូប ជាសភាវរូបផង និងជាអសភាវរូបផង។',
    aE: 'Bāhira-rūpa is both sabhāva-rūpa and asabhāva-rūpa.',
  },
  {
    qK: 'តើសភាវរូបប៉ុន្មាន ជាពាហិររូប? រូបណាខ្លះ?',
    qE: 'How many sabhāva-rūpas are bāhira-rūpa? Which?',
    aK: 'សភាវរូប ១៣ ជាពាហិររូប គឺ មហាភូតរូប ៤ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ និង អាហាររូប ១។',
    aE: 'Thirteen sabhāva-rūpas are bāhira-rūpa: 4 great essentials, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty and nutriment.',
  },
  {
    qK: 'តើអសភាវរូបប៉ុន្មាន ជាពាហិររូប? រូបណាខ្លះ?',
    qE: 'How many asabhāva-rūpas are bāhira-rūpa? Which?',
    aK: 'អសភាវរូប ១០ ជាពាហិររូប គឺ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Ten asabhāva-rūpas are bāhira-rūpa: element-space, 2 intimations, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើពាហិររូប ជាមហាភូតរូប ឬឧបាទាយរូប?',
    qE: 'Is bāhira-rūpa mahābhūta-rūpa or upādāya-rūpa?',
    aK: 'ពាហិររូប ជាមហាភូតរូបផង និងជាឧបាទាយរូបផង។',
    aE: 'Bāhira-rūpa is both mahābhūta-rūpa and upādāya-rūpa.',
  },
  {
    qK: 'តើមហាភូតរូបប៉ុន្មានជាពាហិររូប? រូបណាខ្លះ?',
    qE: 'How many great essentials are bāhira-rūpa? Which?',
    aK: 'មហាភូតរូប ៤ ជាពាហិររូប គឺ បឋវីរូប ១ អាបោរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'All 4 great essentials are bāhira-rūpa: earth, water, fire and air.',
  },
  {
    qK: 'តើឧបាទាយរូបប៉ុន្មានជាពាហិររូប? រូបណាខ្លះ?',
    qE: 'How many upādāya-rūpas are bāhira-rūpa? Which?',
    aK: 'ឧបាទាយរូប ១៩ ជាពាហិររូប គឺ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Nineteen upādāya-rūpas are bāhira-rūpa: 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 2 intimations, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើពាហិររូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do bāhira-rūpas yield? Which?',
    aK: 'ពាហិររូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'Six: the visible object, sound, odour, taste, tangibility and dhammārammaṇa.',
  },
  {
    qK: 'តើពាហិររូប ជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបានប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'Through how many doors do bāhira-rūpas serve as objects for consciousness? Which?',
    aK: 'ពាហិររូប ជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបាន ៥ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជិវ្ហាទ្វារ និង កាយទ្វារ។',
    aE: 'Five: the eye, ear, nose, tongue and body-doors (the sense-organ doors through which the sense-object rūpas are cognised).',
  },
  {
    qK: 'តើពាហិររូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do bāhira-rūpas yield? Which?',
    aK: 'ពាហិររូប បើដើរតួជាអាយតនៈ បានអាយតនៈ ៦ គឺ រូបាយតនៈ សទ្ទាយតនៈ គន្ធាយតនៈ រសាយតនៈ ផោដ្ឋព្វាយតនៈ និង ធម្មាយតនៈ។',
    aE: 'Six: the visible, sound, odour, taste and tangible bases, and the dhammāyatana.',
  },
  {
    qK: 'តើពាហិររូប ជាអាយតនៈខាងក្នុង ឬអាយតនៈខាងក្រៅ?',
    qE: 'Are bāhira-rūpas internal or external āyatanas?',
    aK: 'ពាហិររូប ជាអាយតនៈខាងក្រៅ។',
    aE: 'They are external āyatanas.',
  },
  {
    qK: 'តើពាហិររូប ជារូបធម៌ ឬនាមធម៌?',
    qE: 'Are bāhira-rūpas rūpa-dhamma or nāma-dhamma?',
    aK: 'ពាហិររូប ជារូបធម៌។',
    aE: 'They are rūpa-dhamma (matter).',
  },
  {
    qK: 'តើពាហិររូប ជាអកុសលធម៌ ឬកុសលធម៌?',
    qE: 'Are bāhira-rūpas akusala or kusala dhamma?',
    aK: 'ពាហិររូប មិនមែនជាទាំងកុសល ទាំងអកុសលទេ គឺជាអព្យាកតធម៌។',
    aE: 'Neither; matter is abyākata (indeterminate) dhamma.',
  },
  {
    qK: 'តើពាហិររូប ចាត់ជាខន្ធអ្វី?',
    qE: 'To which khandha do bāhira-rūpas belong?',
    aK: 'ពាហិររូប ចាត់ជារូបក្ខន្ធ។',
    aE: 'They belong to the rūpakkhandha (aggregate of matter).',
  },
]

const dvaraQas = [
  {
    qK: 'ដោយទ្វារ តើរូប ២៨ ចែកជាប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'By way of door, into how many kinds are the 28 rūpas divided? Which?',
    aK: 'ដោយទ្វារ រូប ២៨ ចែកជា ២ យ៉ាង គឺ ទ្វាររូប និង អទ្វាររូប។',
    aE: 'By way of door, the 28 rūpas divide into 2 kinds: dvāra-rūpa (door matter) and advāra-rūpa (non-door matter).',
  },
  {
    qK: 'តើទ្វាររូប មានន័យដូចម្តេច?',
    qE: 'What does dvāra-rūpa (door matter) mean?',
    aK: 'ទ្វាររូប មានន័យថា រូបដែលជាទ្វារ ឬជាទ្វារនៃចិត្តចេតសិកកើតឡើង និងសម្រេចកម្ម។',
    aE: 'Dvāra-rūpa means matter that serves as a door through which consciousness and mental factors arise and through which deeds are accomplished.',
  },
  {
    qK: 'តើទ្វាររូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas does dvāra-rūpa comprise? Which?',
    aK: 'ទ្វាររូប បានដល់រូប ៧ គឺ បសាទរូប ៥ (ចក្ខុ សោត ឃាន ជិវ្ហា កាយ) និង វិញ្ញត្តិរូប ២ (កាយវិញ្ញត្តិ វចីវិញ្ញត្តិ)។',
    aE: 'Dvāra-rūpa comprises 7 rūpas: the 5 sensitives (eye, ear, nose, tongue, body) and the 2 intimations (bodily and verbal).',
  },
  {
    qK: 'តើទ្វាររូប ជាសភាវរូប ឬអសភាវរូប?',
    qE: 'Is dvāra-rūpa sabhāva-rūpa or asabhāva-rūpa?',
    aK: 'ទ្វាររូប ជាសភាវរូបផង និងជាអសភាវរូបផង។',
    aE: 'Dvāra-rūpa is both sabhāva-rūpa and asabhāva-rūpa.',
  },
  {
    qK: 'តើសភាវរូបប៉ុន្មាន ជាទ្វាររូប? រូបណាខ្លះ?',
    qE: 'How many sabhāva-rūpas are dvāra-rūpa? Which?',
    aK: 'សភាវរូប ៥ ជាទ្វាររូប គឺ បសាទរូប ៥ មាន ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប និង កាយបសាទរូប។',
    aE: 'Five sabhāva-rūpas are dvāra-rūpa: the 5 sensitives.',
  },
  {
    qK: 'តើអសភាវរូបប៉ុន្មាន ជាទ្វាររូប? រូបណាខ្លះ?',
    qE: 'How many asabhāva-rūpas are dvāra-rūpa? Which?',
    aK: 'អសភាវរូប ២ ជាទ្វាររូប គឺ កាយវិញ្ញត្តិរូប និង វចីវិញ្ញត្តិរូប។',
    aE: 'Two asabhāva-rūpas are dvāra-rūpa: bodily intimation and verbal intimation.',
  },
  {
    qK: 'តើទ្វាររូប ជាមហាភូតរូប ឬឧបាទាយរូប?',
    qE: 'Is dvāra-rūpa mahābhūta-rūpa or upādāya-rūpa?',
    aK: 'ទ្វាររូប ជាឧបាទាយរូប។',
    aE: 'Dvāra-rūpa is upādāya-rūpa (derived matter).',
  },
  {
    qK: 'តើមហាភូតរូប ៤ ជាទ្វាររូបដែរឬទេ?',
    qE: 'Are the 4 great essentials also dvāra-rūpa?',
    aK: 'មហាភូតរូប ៤ មិនមែនជាទ្វាររូបទេ។',
    aE: 'No; the 4 great essentials are not dvāra-rūpa.',
  },
  {
    qK: 'តើឧបាទាយរូបប៉ុន្មានជាទ្វាររូប? រូបណាខ្លះ?',
    qE: 'How many upādāya-rūpas are dvāra-rūpa? Which?',
    aK: 'ឧបាទាយរូប ៧ ជាទ្វាររូប គឺ បសាទរូប ៥ និង វិញ្ញត្តិរូប ២។',
    aE: 'Seven upādāya-rūpas are dvāra-rūpa: the 5 sensitives and the 2 intimations.',
  },
  {
    qK: 'តើចក្ខុបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះដូចម្តេច?',
    qE: 'When the eye-sensitivity serves as a door, what is it called?',
    aK: 'ចក្ខុបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះថា ចក្ខុទ្វារ។',
    aE: 'The eye-sensitivity as door is called cakkhu-dvāra (eye-door).',
  },
  {
    qK: 'តើសោតបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះដូចម្តេច?',
    qE: 'When the ear-sensitivity serves as a door, what is it called?',
    aK: 'សោតបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះថា សោតទ្វារ។',
    aE: 'The ear-sensitivity as door is called sota-dvāra (ear-door).',
  },
  {
    qK: 'តើឃានបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះដូចម្តេច?',
    qE: 'When the nose-sensitivity serves as a door, what is it called?',
    aK: 'ឃានបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះថា ឃានទ្វារ។',
    aE: 'The nose-sensitivity as door is called ghāna-dvāra (nose-door).',
  },
  {
    qK: 'តើជិវ្ហាបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះដូចម្តេច?',
    qE: 'When the tongue-sensitivity serves as a door, what is it called?',
    aK: 'ជិវ្ហាបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះថា ជិវ្ហាទ្វារ។',
    aE: 'The tongue-sensitivity as door is called jivhā-dvāra (tongue-door).',
  },
  {
    qK: 'តើកាយបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះដូចម្តេច?',
    qE: 'When the body-sensitivity serves as a door, what is it called?',
    aK: 'កាយបសាទរូប បើដើរតួជាទ្វារ មានឈ្មោះថា កាយទ្វារ។',
    aE: 'The body-sensitivity as door is called kāya-dvāra (body-door).',
  },
  {
    qK: 'តើកាយវិញ្ញត្តិរូប បើដើរតួជាទ្វារ មានឈ្មោះដូចម្តេច?',
    qE: 'When bodily intimation serves as a door, what is it called?',
    aK: 'កាយវិញ្ញត្តិរូប បើដើរតួជាទ្វារ មានឈ្មោះថា កាយទ្វារ។',
    aE: 'Bodily intimation as door is called kāya-dvāra (door of bodily action).',
  },
  {
    qK: 'តើវចីវិញ្ញត្តិរូប បើដើរតួជាទ្វារ មានឈ្មោះដូចម្តេច?',
    qE: 'When verbal intimation serves as a door, what is it called?',
    aK: 'វចីវិញ្ញត្តិរូប បើដើរតួជាទ្វារ មានឈ្មោះថា វចីទ្វារ។',
    aE: 'Verbal intimation as door is called vacī-dvāra (door of verbal action).',
  },
  {
    qK: 'តើទ្វាររូប ជាបរមត្ថធម៌ ឬបញ្ញត្តិ?',
    qE: 'Is dvāra-rūpa paramattha-dhamma or paññatti (concept)?',
    aK: 'ទ្វាររូប ជាបរមត្ថធម៌ (រូបបរមត្ថ) គឺជាភាពពិត មិនមែនបញ្ញត្តិឡើយ។',
    aE: 'Dvāra-rūpa is paramattha-dhamma (rūpa-paramattha), real existence, not a concept (paññatti).',
  },
  {
    qK: 'តើទ្វាររូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍អ្វីខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do dvāra-rūpas yield? Which?',
    aK: 'ទ្វាររូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ១ គឺ ធម្មារម្មណ៍។',
    aE: 'One: the dhammārammaṇa (mind-object).',
  },
  {
    qK: 'តើទ្វាររូប ជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបានប៉ុន្មាន? ទ្វារណាខ្លះ?',
    qE: 'Through how many doors do dvāra-rūpas serve as organs for consciousness? Which?',
    aK: 'ទ្វាររូប ជាអារម្មណ៍ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារបាន ៥ គឺ ចក្ខុទ្វារ សោតទ្វារ ឃានទ្វារ ជិវ្ហាទ្វារ និង កាយទ្វារ។',
    aE: 'Through 5 doors: the eye, ear, nose, tongue and body-doors.',
  },
  {
    qK: 'តើទ្វាររូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈអ្វីខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do dvāra-rūpas yield? Which?',
    aK: 'ទ្វាររូប បើដើរតួជាអាយតនៈ បានអាយតនៈ ៥ គឺ ចក្ខ្វាយតនៈ សោតាយតនៈ ឃានាយតនៈ ជិវ្ហាយតនៈ និង កាយាយតនៈ។',
    aE: 'Five: the eye, ear, nose, tongue and body sense-bases.',
  },
  {
    qK: 'តើចក្ខុបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When the eye-sensitivity serves as an āyatana, what is it called?',
    aK: 'ចក្ខុបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះថា ចក្ខ្វាយតនៈ។',
    aE: 'It is called cakkhāyatana (eye-base).',
  },
  {
    qK: 'តើសោតបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When the ear-sensitivity serves as an āyatana, what is it called?',
    aK: 'សោតបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះថា សោតាយតនៈ។',
    aE: 'It is called sotāyatana (ear-base).',
  },
  {
    qK: 'តើឃានបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When the nose-sensitivity serves as an āyatana, what is it called?',
    aK: 'ឃានបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះថា ឃានាយតនៈ។',
    aE: 'It is called ghānāyatana (nose-base).',
  },
  {
    qK: 'តើជិវ្ហាបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When the tongue-sensitivity serves as an āyatana, what is it called?',
    aK: 'ជិវ្ហាបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះថា ជិវ្ហាយតនៈ។',
    aE: 'It is called jivhāyatana (tongue-base).',
  },
  {
    qK: 'តើកាយបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When the body-sensitivity serves as an āyatana, what is it called?',
    aK: 'កាយបសាទរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះថា កាយាយតនៈ។',
    aE: 'It is called kāyāyatana (body-base).',
  },
  {
    qK: 'តើកាយវិញ្ញត្តិរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When bodily intimation serves as an āyatana, what is it called?',
    aK: 'កាយវិញ្ញត្តិរូប មិនមែនជាអាយតនៈទេ ព្រោះវិញ្ញត្តិរូបមិនរាប់បញ្ចូលក្នុងអាយតនៈ ១២ ទេ។',
    aE: 'Bodily intimation is not an āyatana, for the viññatti-rūpas are not counted among the 12 āyatanas.',
  },
  {
    qK: 'តើវចីវិញ្ញត្តិរូប បើដើរតួជាអាយតនៈ បានអាយតនៈឈ្មោះអ្វី?',
    qE: 'When verbal intimation serves as an āyatana, what is it called?',
    aK: 'វចីវិញ្ញត្តិរូប មិនមែនជាអាយតនៈទេ ព្រោះវិញ្ញត្តិរូបមិនរាប់បញ្ចូលក្នុងអាយតនៈ ១២ ទេ។',
    aE: 'Verbal intimation is not an āyatana, for the viññatti-rūpas are not counted among the 12 āyatanas.',
  },
  {
    qK: 'តើទ្វាររូប ជាអាយតនៈខាងក្នុង ឬអាយតនៈខាងក្រៅ?',
    qE: 'Are dvāra-rūpas internal or external āyatanas?',
    aK: 'ទ្វាររូប ដែលជាអាយតនៈ ជាអាយតនៈខាងក្នុង។',
    aE: 'The dvāra-rūpas that are āyatanas are internal āyatanas.',
  },
  {
    qK: 'តើទ្វាររូបប៉ុន្មានជាអាយតនៈខាងក្នុង? រូបណាខ្លះ?',
    qE: 'How many dvāra-rūpas are internal āyatanas? Which?',
    aK: 'ទ្វាររូប ៥ ជាអាយតនៈខាងក្នុង គឺ បសាទរូប ៥ មាន ចក្ខុបសាទរូប សោតបសាទរូប ឃានបសាទរូប ជិវ្ហាបសាទរូប និង កាយបសាទរូប។',
    aE: 'Five dvāra-rūpas are internal āyatanas: the 5 sensitives.',
  },
  {
    qK: 'តើទ្វាររូបប៉ុន្មានជាអាយតនៈខាងក្រៅ? រូបណាខ្លះ?',
    qE: 'How many dvāra-rūpas are external āyatanas? Which?',
    aK: 'ទ្វាររូប មិនមានជាអាយតនៈខាងក្រៅទេ គឺវិញ្ញត្តិរូប ២ មិនរាប់បញ្ចូលជាអាយតនៈឡើយ។',
    aE: 'None; the dvāra-rūpas are never external āyatanas — the 2 intimations are not counted as āyatanas at all.',
  },
  {
    qK: 'តើអទ្វាររូប មានន័យដូចម្តេច?',
    qE: 'What does advāra-rūpa (non-door matter) mean?',
    aK: 'អទ្វាររូប មានន័យថា រូបដែលមិនមែនជាទ្វារ ឬរូបដែលមិនមែនជាទ្វារនៃចិត្តចេតសិក និងនៃកម្មឡើយ។',
    aE: 'Advāra-rūpa means matter that is not a door, not a door of consciousness and mental factors nor of kamma.',
  },
  {
    qK: 'តើអទ្វាររូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'How many rūpas does advāra-rūpa comprise? Which?',
    aK: 'អទ្វាររូប បានដល់រូប ២១ គឺ មហាភូតរូប ៤ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Advāra-rūpa comprises 21 rūpas: 4 great essentials, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើអទ្វាររូប ជាសភាវរូប ឬអសភាវរូប?',
    qE: 'Is advāra-rūpa sabhāva-rūpa or asabhāva-rūpa?',
    aK: 'អទ្វាររូប ជាសភាវរូបផង និងជាអសភាវរូបផង។',
    aE: 'Advāra-rūpa is both sabhāva-rūpa and asabhāva-rūpa.',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាសភាវរូប? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are sabhāva-rūpa? Which?',
    aK: 'អទ្វាររូប ១៣ ជាសភាវរូប គឺ មហាភូតរូប ៤ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ និង អាហាររូប ១។',
    aE: 'Thirteen advāra-rūpas are sabhāva-rūpa: 4 great essentials, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty and nutriment.',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាអសភាវរូប? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are asabhāva-rūpa? Which?',
    aK: 'អទ្វាររូប ៨ ជាអសភាវរូប គឺ បរិច្ឆេទរូប ១ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Eight advāra-rūpas are asabhāva-rūpa: element-space, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើអទ្វាររូប ជាមហាភូតរូប ឬឧបាទាយរូប?',
    qE: 'Is advāra-rūpa mahābhūta-rūpa or upādāya-rūpa?',
    aK: 'អទ្វាររូប ជាមហាភូតរូបផង និងជាឧបាទាយរូបផង។',
    aE: 'Advāra-rūpa is both mahābhūta-rūpa and upādāya-rūpa.',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាមហាភូតរូប? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are mahābhūta-rūpa? Which?',
    aK: 'អទ្វាររូប ៤ ជាមហាភូតរូប គឺ បឋវីរូប ១ អាបោរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'Four advāra-rūpas are mahābhūta-rūpa: earth, water, fire and air.',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាឧបាទាយរូប? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are upādāya-rūpa? Which?',
    aK: 'អទ្វាររូប ១៧ ជាឧបាទាយរូប គឺ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Seventeen advāra-rūpas are upādāya-rūpa: 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើអទ្វាររូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍អ្វីខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do advāra-rūpas yield? Which?',
    aK: 'អទ្វាររូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'Six: the visible object, sound, odour, taste, tangibility and dhammārammaṇa.',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជារូបារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are rūpārammaṇa? Which?',
    aK: 'អទ្វាររូប ១ ជារូបារម្មណ៍ គឺ វណ្ណរូប ១។',
    aE: 'One: colour (vaṇṇa-rūpa).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាសទ្ទារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are saddārammaṇa? Which?',
    aK: 'អទ្វាររូប ១ ជាសទ្ទារម្មណ៍ គឺ សទ្ទរូប ១។',
    aE: 'One: sound (sadda-rūpa).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាគន្ធារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are gandhārammaṇa? Which?',
    aK: 'អទ្វាររូប ១ ជាគន្ធារម្មណ៍ គឺ គន្ធរូប ១។',
    aE: 'One: odour (gandha-rūpa).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជារសារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are rasārammaṇa? Which?',
    aK: 'អទ្វាររូប ១ ជារសារម្មណ៍ គឺ រសរូប ១។',
    aE: 'One: taste (rasa-rūpa).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាផោដ្ឋព្វារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are phoṭṭhabbārammaṇa? Which?',
    aK: 'អទ្វាររូប ៣ ជាផោដ្ឋព្វារម្មណ៍ គឺ បឋវីរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'Three: earth, fire and air (the tangible great essentials).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាធម្មារម្មណ៍? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are dhammārammaṇa? Which?',
    aK: 'អទ្វាររូប ១៤ ជាធម្មារម្មណ៍ គឺ អាបោ ១ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Fourteen: water (1), 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើអទ្វាររូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈអ្វីខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do advāra-rūpas yield? Which?',
    aK: 'អទ្វាររូប បើដើរតួជាអាយតនៈ បានអាយតនៈ ៦ គឺ រូបាយតនៈ សទ្ទាយតនៈ គន្ធាយតនៈ រសាយតនៈ ផោដ្ឋព្វាយតនៈ និង ធម្មាយតនៈ។',
    aE: 'Six: the visible, sound, odour, taste and tangible bases, and the dhammāyatana.',
  },
  {
    qK: 'តើអទ្វាររូប ជាអាយតនៈខាងក្នុង ឬជាអាយតនៈខាងក្រៅ?',
    qE: 'Are advāra-rūpas internal or external āyatanas?',
    aK: 'អទ្វាររូប ជាអាយតនៈខាងក្រៅ។',
    aE: 'They are external āyatanas.',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាអាយតនៈខាងក្នុង? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are internal āyatanas? Which?',
    aK: 'អទ្វាររូប មិនមានជាអាយតនៈខាងក្នុងទេ។',
    aE: 'None; advāra-rūpa is never an internal āyatana.',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាអាយតនៈខាងក្រៅ? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are external āyatanas? Which?',
    aK: 'អទ្វាររូប ២១ ជាអាយតនៈខាងក្រៅ គឺ វិសយរូប ៥ (រូប សទ្ទ គន្ធា រស ផោដ្ឋព្វៈ) និង អ្វីដែលសង្គ្រោះក្នុងធម្មាយតនៈ។',
    aE: 'All 21 are external āyatanas: the 5 sense-object bases (colour, sound, odour, taste, tangibility) and those comprised in the dhammāyatana.',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជារូបាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are the visible base? Which?',
    aK: 'អទ្វាររូប ១ ជារូបាយតនៈ គឺ វណ្ណរូប ១។',
    aE: 'One: colour (vaṇṇa-rūpa).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាសទ្ទាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are the sound base? Which?',
    aK: 'អទ្វាររូប ១ ជាសទ្ទាយតនៈ គឺ សទ្ទរូប ១។',
    aE: 'One: sound (sadda-rūpa).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាគន្ធាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are the odour base? Which?',
    aK: 'អទ្វាររូប ១ ជាគន្ធាយតនៈ គឺ គន្ធរូប ១។',
    aE: 'One: odour (gandha-rūpa).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជារសាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are the taste base? Which?',
    aK: 'អទ្វាររូប ១ ជារសាយតនៈ គឺ រសរូប ១។',
    aE: 'One: taste (rasa-rūpa).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាផោដ្ឋព្វាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are the tangible base? Which?',
    aK: 'អទ្វាររូប ៣ ជាផោដ្ឋព្វាយតនៈ គឺ បឋវីរូប ១ តេជោរូប ១ និង វាយោរូប ១។',
    aE: 'Three: earth, fire and air (the tangible great essentials).',
  },
  {
    qK: 'តើអទ្វាររូបប៉ុន្មានជាធម្មាយតនៈ? រូបណាខ្លះ?',
    qE: 'How many advāra-rūpas are the mind-object base? Which?',
    aK: 'អទ្វាររូប ១៤ ជាធម្មាយតនៈ គឺ អាបោ ១ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Fourteen: water (1), 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើទ្វាររូប និងអទ្វាររូប បានដល់រូបប៉ុន្មាន? រូបណាខ្លះ?',
    qE: 'Together, how many rūpas do dvāra-rūpa and advāra-rūpa comprise? Which?',
    aK: 'ទ្វាររូប និងអទ្វាររូប បានដល់រូប ២៨ គឺ មហាភូតរូប ៤ បសាទរូប ៥ វិសយរូប ៤ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ និង លក្ខណរូប ៤។',
    aE: 'Together they comprise all 28 rūpas: 4 great essentials, 5 sensitives, 4 sense-object rūpas, 2 sex-rūpas, heart-base, life-faculty, nutriment, element-space, 2 intimations, 3 mutable and 4 characteristic rūpas.',
  },
  {
    qK: 'តើទ្វាររូប និងអទ្វាររូប ចាត់ជាបរមត្ថធម៌មួយណា?',
    qE: 'To which paramattha-dhamma do dvāra-rūpa and advāra-rūpa belong?',
    aK: 'ទ្វាររូប និងអទ្វាររូប ចាត់ជា រូបបរមត្ថធម៌។',
    aE: 'They belong to rūpa-paramattha (matter).',
  },
  {
    qK: 'តើទ្វាររូប និងអទ្វាររូប ជារូបធម៌ ឬអរូបធម៌?',
    qE: 'Are dvāra-rūpa and advāra-rūpa rūpa-dhamma or arūpa-dhamma?',
    aK: 'ទ្វាររូប និងអទ្វាររូប ចាត់ជារូបធម៌។',
    aE: 'They are rūpa-dhamma (matter), never arūpa-dhamma.',
  },
  {
    qK: 'តើទ្វាររូប និងអទ្វាររូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ប៉ុន្មាន? អារម្មណ៍ណាខ្លះ?',
    qE: 'Acting as objects, how many ārammaṇas do dvāra-rūpa and advāra-rūpa yield together? Which?',
    aK: 'ទ្វាររូប និងអទ្វាររូប បើដើរតួជាអារម្មណ៍ បានអារម្មណ៍ ៦ គឺ រូបារម្មណ៍ សទ្ទារម្មណ៍ គន្ធារម្មណ៍ រសារម្មណ៍ ផោដ្ឋព្វារម្មណ៍ និង ធម្មារម្មណ៍។',
    aE: 'Six in total: the visible object, sound, odour, taste, tangibility and dhammārammaṇa.',
  },
  {
    qK: 'តើទ្វាររូប និងអទ្វាររូប បើដើរតួជាអាយតនៈ បានអាយតនៈប៉ុន្មាន? អាយតនៈណាខ្លះ?',
    qE: 'Acting as āyatana, how many āyatanas do dvāra-rūpa and advāra-rūpa yield together? Which?',
    aK: 'ទ្វាររូប និងអទ្វាររូប បើដើរតួជាអាយតនៈ បានអាយតនៈ ១១ គឺ អាយតនៈខាងក្នុង ៥ (បសាទ ៥) និង អាយតនៈខាងក្រៅ ៥ (វិសយ ៥) ហើយក៏រាប់បញ្ចូលធម្មាយតនៈទៀត។',
    aE: 'Eleven in total: 5 internal sense-bases (the 5 sensitives), 5 external sense-object bases (colour, sound, odour, taste, tangibility) and the dhammāyatana.',
  },
]

const part1Qas = [
  {
    qK: 'តើបរមត្ថធម៌ មានន័យដូចម្តេច?',
    qE: 'What does paramattha-dhamma mean?',
    aK: 'បរមត្ថធម៌ ប្រែថា ធម៌ដ៏ប្រសើរ (បរម = ប្រសើរបំផុត, អត្ថ = អត្ថន័យ ដូចជាសភាវៈពិត, ធម៌ = សភាវៈ)។ គឺជាសភាវធម៌ដែលមានលក្ខណៈពិតប្រាកដដោយខ្លួនឯង (សភាវលក្ខណៈ) ប្រាកដក្នុងចិត្តរបស់អ្នកដែលពិចារណាឃើញ មិនមែនអាស្រ័យនឹងសេចក្តីសំគាល់ ដូចជាសម្មតិបញ្ញត្តិឡើយ។',
    aE: 'Paramattha-dhamma literally means "supreme reality" (parama = supreme, attha = meaning/true reality, dhamma = reality). It is a reality that has its own intrinsic nature (sabhāva-lakkhana) and is evident to the mind that discerns it, not depending on conceptual designation like paññatti (conventional reality).',
  },
  {
    qK: 'តើបរមត្ថធម៌មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many paramattha-dhammas are there? What are they?',
    aK: 'មាន ៤ គឺ ចិត្ត ចេតសិក រូប និព្វាន។ ក្នុង ៤ នោះ ចិត្ត ចេតសិក រូប ជាសង្ខតធម៌ និព្វាន ជាអសង្ខតធម៌។',
    aE: 'There are four: citta (consciousness), cetasika (mental factors), rūpa (matter) and nibbāna. Of these, citta, cetasika and rūpa are conditioned (saṅkhata) realities, while nibbāna is unconditioned (asaṅkhata).',
  },
  {
    qK: 'តើរូបមានន័យដូចម្តេច?',
    qE: 'What does rūpa mean?',
    aK: 'រូប ប្រែថា ការបែកធ្លាយ (រូប្បន) ឬសភាវៈដែលបែកធ្លាយ ដោយអាការៈផ្សេងៗ។ ឈ្មោះថារូប ព្រោះវាត្រូវបែកធ្លាយដោយត្រជាក់ ក្តៅ ឃ្លាន ស្រេក មូស រុយ ខ្យល់ ជាដើម។',
    aE: 'Rūpa means "to break up" (ruppana) — a reality that undergoes dissolution by various means. It is called rūpa because it is broken up by cold, heat, hunger, thirst, flies, mosquitoes, wind, and so on.',
  },
  {
    qK: 'ហេតុអ្វីបានជារូបបែកធ្លាយ?',
    qE: 'Why does rūpa (matter) break up?',
    aK: 'ព្រោះរូបត្រូវបែកធ្លាយដោយឧបទ្ទវៈ (កត្តាប្រឆាំង) ជាច្រើន គឺ ត្រជាក់ ក្តៅ ឃ្លាន ស្រេក មូស រុយ ពស់ ឬខ្យល់។ រូបដែលត្រូវឧបទ្ទវៈទាំងនោះបៀតបៀន ក៏រលួយ បាក់បែក វិនាសទៅ។',
    aE: 'Because rūpa is broken up by many afflictions (upaddava) — cold, heat, hunger, thirst, mosquitoes, flies, snakes, or wind. When matter is oppressed by these afflictions it rots, breaks and perishes.',
  },
  {
    qK: 'ក្នុងកាយមនុស្សប្រុសដែលមានអវយវៈគ្រប់គ្រាន់ មានរូបសរុបប៉ុន្មាន?',
    qE: 'In a complete male body, how many rūpas are present in total?',
    aK: 'មាន ២៧ រូប ព្រោះរូប ២៨ ដកឥត្ថិភាវរូប (ភាវរូបស្ត្រី) ១ ដែលពុំមានក្នុងកាយបុរស សល់ ២៧។',
    aE: 'Twenty-seven rūpas, because of the 28 kinds the femininity rūpa (itthibhāva) is absent in a male, leaving 27.',
  },
  {
    qK: 'ក្នុងកាយមនុស្សស្រីដែលមានអវយវៈគ្រប់គ្រាន់ មានរូបសរុបប៉ុន្មាន?',
    qE: 'In a complete female body, how many rūpas are present in total?',
    aK: 'មាន ២៧ រូប ព្រោះរូប ២៨ ដកបុរិសភាវរូប (ភាវរូបប្រុស) ១ ដែលពុំមានក្នុងកាយស្ត្រី សល់ ២៧។',
    aE: 'Twenty-seven rūpas, because of the 28 kinds the masculinity rūpa (purisabhāva) is absent in a female, leaving 27.',
  },
  {
    qK: 'តើបរមត្ថធម៌ប៉ុន្មានដែលមានក្នុងកាយមនុស្សមានជីវិត? អ្វីខ្លះ?',
    qE: 'How many paramattha-dhammas are found in a living human body? What are they?',
    aK: 'មាន ៣ បរមត្ថធម៌ គឺ ចិត្ត ចេតសិក រូប។ និព្វាន ពុំមានក្នុងកាយមនុស្សមានជីវិតឡើយ។',
    aE: 'Three paramattha-dhammas: citta, cetasika and rūpa. Nibbāna is not present in a living human body.',
  },
  {
    qK: 'តើលក្ខណាទិចតុក្កៈមានន័យដូចម្តេច?',
    qE: 'What does lakkhaṇādi-catukka mean?',
    aK: 'លក្ខណាទិចតុក្កៈ ប្រែថា ក្រុមសេចក្តី ៤ ដែលមានលក្ខណៈជាដើម គឺ លក្ខណៈ (ភាពពិតរបស់សភាវៈ) រស (កិច្ច ឬមុខងាររបស់សភាវៈ) បច្ចុប្បដ្ឋាន (អាការដែលសភាវៈប្រាកដឡើង) បទដ្ឋាន (ហេតុជិតបំផុតដែលបណ្តាលសភាវៈនោះ)។',
    aE: 'Lakkhaṇādi-catukka means "the group of four beginning with characteristic": (1) lakkhana (characteristic — the intrinsic mark of a reality), (2) rasa (function or task of that reality), (3) paccupaṭṭhāna (manifestation — how it appears), (4) padaṭṭhāna (proximate cause that gives rise to it).',
  },
  {
    qK: 'ចូររៀបរាប់លក្ខណាទិចតុក្កៈរបស់រូប?',
    qE: 'Describe the lakkhaṇādi-catukka of rūpa (matter).',
    aK: 'រូបមាន លក្ខណៈ គឺ ការបែកធ្លាយ (រូប្បនលក្ខណៈ)។ រស គឺ ការគ្របសង្កត់ចិត្តក្នុងអារម្មណ៍ (វិក្ខេបរស)។ បច្ចុប្បដ្ឋាន គឺ ការប្រាកដឡើងជាអវៈយវៈ ឬការប្រាកដតាមបញ្ញត្តិ (ជាទីតាំងនៃការកំណត់)។ បទដ្ឋាន គឺ មហាភូតរូប ៤។',
    aE: 'Rūpa has: characteristic — breaking up (ruppana). Function — to spread over and oppress consciousness through its object (vikkhepa-rasa). Manifestation — appearing as a mass of parts or as conventional designation. Proximate cause — the four great essentials (mahābhūta).',
  },
  {
    qK: 'តើរូបបរមត្ថ មានរូបប៉ុន្មាន?',
    qE: 'How many kinds of rūpa-paramattha are there?',
    aK: 'មាន ២៨ រូប។',
    aE: 'There are 28 kinds of rūpa.',
  },
  {
    qK: 'តើនិប្ផន្នរូប មានន័យដូចម្តេច?',
    qE: 'What does nipphanna-rūpa mean?',
    aK: 'និប្ផន្នរូប ប្រែថា រូបដែលកើតឡើង (សម្បូណ៌ដោយការកើតរួមគ្នា ទទួលបានសភាពដោយខ្លួនឯង) ដោយកម្ម ចិត្ត ឧតុ អាហារ ជាសភាវរូប ដែលមានលក្ខណៈពិតដោយខ្លួនឯង។',
    aE: 'Nipphanna-rūpa means "concretely produced matter" — matter produced by kamma, citta, utu (temperature) and āhāra (nutriment), being sabhāva-rūpa that possesses its own intrinsic nature.',
  },
  {
    qK: 'តើនិប្ផន្នរូប មានរូបប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many nipphanna-rūpas are there? What are they?',
    aK: 'មាន ១៨ គឺ មហាភូតរូប ៤ (បឋវី អាបោ តេជោ វាយោ) បសាទរូប ៥ (ចក្ខុ សោត ឃាន ជិវ្ហា កាយ) វិសយរូប ៤ (រូប សទ្ទ គន្ធា រស) ភាវរូប ២ (ឥត្ថិភាវ បុរិសភាវ) ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១។',
    aE: 'Eighteen: 4 great essentials (pathavī, āpo, tejo, vāyo), 5 sensitives (cakkhu, sota, ghāna, jivhā, kāya), 4 sense-object rūpas (colour, sound, odour, taste), 2 sex-rūpas (femininity, masculinity), heart-base, life-faculty and nutriment.',
  },
  {
    qK: 'តើអនិប្ផន្នរូប មានន័យដូចម្តេច?',
    qE: 'What does anipphanna-rūpa mean?',
    aK: 'អនិប្ផន្នរូប ប្រែថា រូបដែលមិនកើតឡើងដោយខ្លួនឯងជាសភាវៈពិត គឺជាអសភាវរូប កើតឡើងជាអាការៈ ឬលក្ខណៈកំណត់នៃនិប្ផន្នរូបទេ។',
    aE: 'Anipphanna-rūpa means "non-concretely produced matter" — it is asabhāva-rūpa that does not arise by itself as a separate intrinsic reality but arises as the modes or defining characteristics of nipphanna-rūpa.',
  },
  {
    qK: 'តើអនិប្ផន្នរូប មានរូបប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many anipphanna-rūpas are there? What are they?',
    aK: 'មាន ១០ គឺ បរិច្ឆេទរូប ១ (អាកាសធាតុ) វិញ្ញត្តិរូប ២ (កាយវិញ្ញត្តិ វចីវិញ្ញត្តិ) វិការរូប ៣ (លហុតា មុទុតា កម្មញ្ញតា) លក្ខណរូប ៤ (ឧបចយ សន្តតិ ជរតា អនិច្ចតា)។',
    aE: 'Ten: 1 element-space (pariccheda-rūpa), 2 intimations (kāya-viññatti, vacī-viññatti), 3 mutable rūpas (lahutā, mudutā, kammaññatā) and 4 characteristic rūpas (upacaya, santati, jaratā, aniccatā).',
  },
  {
    qK: 'តើជីវិតរូប ជានិប្ផន្នរូប ឬអនិប្ផន្នរូប?',
    qE: 'Is jīvita-rūpa nipphanna-rūpa or anipphanna-rūpa?',
    aK: 'ជីវិតរូប ជានិប្ផន្នរូប (សភាវរូប) ព្រោះវាកើតឡើងដោយខ្លួនវាផ្ទាល់ មានសភាវៈពិតដោយខ្លួនឯង។',
    aE: 'Jīvita-rūpa (life-faculty) is nipphanna-rūpa (sabhāva-rūpa), because it arises by itself and possesses an intrinsic nature of its own.',
  },
]

const part2Qas = [
  {
    qK: 'បើចែកជាប្រភេទធំៗ តើរូប ២៨ មានប៉ុន្មានប្រភេទ? អ្វីខ្លះ?',
    qE: 'When divided into broad categories, how many categories do the 28 rūpas have? What are they?',
    aK: 'ចែកជា ២ ប្រភេទធំៗ គឺ និប្ផន្នរូប ១៨ និង អនិប្ផន្នរូប ១០។',
    aE: 'Two broad categories: nipphanna-rūpa (18) and anipphanna-rūpa (10).',
  },
  {
    qK: 'បើចែកជាពួកតូចៗ តើរូប ២៨ មានប៉ុន្មានពួក?',
    qE: 'When divided into small groups, how many groups do the 28 rūpas have?',
    aK: 'មាន ១១ ពួក គឺ មហាភូតរូប ៤ បសាទរូប ៥ វិសយរូប ៧ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ លក្ខណរូប ៤។',
    aE: 'Eleven groups: 4 great essentials, 5 sensitives, 7 sense-objects, 2 sex-rūpas, 1 heart-base, 1 life-faculty, 1 nutriment, 1 element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើមហាភូតរូប មានរូបប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many mahābhūta-rūpas are there? What are they?',
    aK: 'មាន ៤ គឺ បឋវី អាបោ តេជោ វាយោ (ធាតុ ៤ គឺ ដី ទឹក ភ្លើង ខ្យល់)។',
    aE: 'Four: pathavī (earth), āpo (water), tejo (fire) and vāyo (air) — the four great essentials.',
  },
  {
    qK: 'តើបសាទរូប មានរូបប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many pasāda-rūpas are there? What are they?',
    aK: 'មាន ៥ គឺ ចក្ខុបសាទ សោតបសាទ ឃានបសាទ ជិវ្ហាបសាទ កាយបសាទ។',
    aE: 'Five: eye, ear, nose, tongue and body sensitivity (cakkhu, sota, ghāna, jivhā, kāya-pasāda).',
  },
  {
    qK: 'តើវិសយរូប មានរូបប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many visaya-rūpas (sense-objects) are there? What are they?',
    aK: 'មាន ៧ គឺ រូប (វណ្ណៈ) សទ្ទ គន្ធា រស ផោដ្ឋព្វៈ (បឋវី តេជោ វាយោ)។ ផោដ្ឋព្វៈ បានដល់ ៣ គឺ បឋវី តេជោ វាយោ។',
    aE: 'Seven: visible object (colour), sound, odour, taste and tangibility — where tangibility comprises earth, fire and air (3 elements).',
  },
  {
    qK: 'តើភាវរូប មានរូបប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many bhāva-rūpas (sex-rūpas) are there? What are they?',
    aK: 'មាន ២ គឺ ឥត្ថិភាវរូប (ភាវរូបស្ត្រី) និង បុរិសភាវរូប (ភាវរូបប្រុស)។',
    aE: 'Two: femininity (itthibhāva) and masculinity (purisabhāva).',
  },
  {
    qK: 'តើហទយរូប បានដល់វត្ថុណាក្នុងចំណោមវត្ថុ ៦?',
    qE: 'Among the six vatthus, which vatthu does hadaya-rūpa refer to?',
    aK: 'ហទយរូប បានដល់ ហទយវត្ថុ (វត្ថុទី ៦ ក្នុងចំណោមវត្ថុ ៦) ដែលជាទីតាំងអាស្រ័យនៃចិត្តមនោវិញ្ញាណធាតុ។',
    aE: 'Hadaya-rūpa refers to the heart-base (hadaya-vatthu), the 6th base, which serves as the physical support for mind-consciousness element (mano-viññāṇa-dhātu).',
  },
  {
    qK: 'តើជីវិតរូប បានដល់ឥន្រ្ទិយមួយណាក្នុងចំណោមឥន្រ្ទិយ ២២?',
    qE: 'Among the 22 indriyas, which indriya does jīvita-rūpa refer to?',
    aK: 'ជីវិតរូប បានដល់ ជីវិតិន្រ្ទិយ (ឥន្រ្ទិយទី ២២ ជាចុងក្រោយ) ដែលជាអ្នករក្សាប្រោសឱ្យរូបផងដែរ (ជា រូបជីវិតិន្រ្ទិយ)។',
    aE: 'Jīvita-rūpa refers to the vital faculty (jīvitindriya), the 22nd indriya, which maintains life and keeps matter alive (rūpa-jīvitindriya).',
  },
  {
    qK: 'តើអាហាររូប បានដល់អាហារឈ្មោះអ្វី?',
    qE: 'What is the name of the nutriment that āhāra-rūpa refers to?',
    aK: 'អាហាររូប បានដល់ កពឡីការាហារ (អាហារដែលលេបត្របាក់ គឺភោជនាហារ) ដែលជាអ្នកចិញ្ចឹមបីបាច់កាយរូបនេះ។',
    aE: 'Āhāra-rūpa refers to kabaliṅkārāhāra (edible/piece-food nutrition), which sustains and nourishes this material body.',
  },
  {
    qK: 'តើបរិច្ឆេទរូប បានដល់អ្វី?',
    qE: 'What does pariccheda-rūpa refer to?',
    aK: 'បរិច្ឆេទរូប បានដល់ អាកាសធាតុ (ធាតុទទេ ដែលញែកកំណត់ក្រុមរូបនីមួយៗឱ្យឃ្លាតពីគ្នា)។',
    aE: 'Pariccheda-rūpa refers to element-space (ākāsa-dhātu), the void that separates and delimits each group of material phenomena.',
  },
  {
    qK: 'តើវិញ្ញត្តិរូប បានដល់រូបប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many rūpas does viññatti-rūpa refer to? What are they?',
    aK: 'មាន ២ គឺ កាយវិញ្ញត្តិរូប និង វចីវិញ្ញត្តិរូប (ការបង្ហាញចេញដោយកាយ និង ដោយវាចា)។',
    aE: 'Two: bodily intimation (kāya-viññatti) and verbal intimation (vacī-viññatti) — expressing one\'s intention through body and speech.',
  },
  {
    qK: 'តើវិការរូប បានដល់រូបប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many rūpas does vikāra-rūpa refer to? What are they?',
    aK: 'មាន ៣ គឺ លហុតារូប (ភាពស្រាល) មុទុតារូប (ភាពទន់) កម្មញ្ញតារូប (ភាពគួរកិច្ច គឺអាចប្រតិបត្តិបាន)។',
    aE: 'Three: lightness (lahutā), softness (mudutā) and wieldiness/adaptability (kammaññatā).',
  },
  {
    qK: 'តើលក្ខណៈរូប បានដល់រូបប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many rūpas does characteristic-rūpa (lakkhaṇa) refer to? What are they?',
    aK: 'មាន ៤ គឺ ឧបចយរូប (ការកើតដំបូង) សន្តតិរូប (ការកើតជាបន្ត) ជរតារូប (ការចាស់ ឬសាបរសាយ) អនិច្ចតារូប (ការបាត់បង់ ឬវិនាស)។',
    aE: 'Four: genesis (upacaya), continuity (santati), decay (jaratā) and impermanence/dissolution (aniccatā).',
  },
  {
    qK: 'តើឧបាទាយរូប មានន័យដូចម្តេច?',
    qE: 'What does upādāya-rūpa mean?',
    aK: 'ឧបាទាយរូប ប្រែថា រូបដែលអាស្រ័យនឹងមហាភូតរូប ៤ កើតឡើងក្នុងក្រុមតែមួយជាមួយ ព្រោះមិនអាចកើតដោយឡែកពីមហាភូតបាន។ មាន ២៤ រូប។',
    aE: 'Upādāya-rūpa means "derived matter" — matter that arises dependent on the four great essentials within the same cluster, incapable of arising apart from them. There are 24 of them.',
  },
  {
    qK: 'ក្នុងបាលី តើរូប ២៨ ចែកជាប៉ុន្មានពួក? អ្វីខ្លះ?',
    qE: 'In Pāli, into how many groups are the 28 rūpas divided? What are they?',
    aK: 'ចែកជា ១១ ពួកគឺ មហាភូតរូប ៤ បសាទរូប ៥ វិសយរូប ៧ ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ លក្ខណរូប ៤។',
    aE: 'Into 11 groups: mahābhūta-rūpa 4, pasāda-rūpa 5, visaya-rūpa 7, bhāva-rūpa 2, hadaya-rūpa 1, jīvita-rūpa 1, āhāra-rūpa 1, pariccheda-rūpa 1, viññatti-rūpa 2, vikāra-rūpa 3, lakkhaṇa-rūpa 4.',
  },
  {
    qK: 'តើសភាវរូប បានដល់រូបប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many rūpas are sabhāva-rūpa? What are they?',
    aK: 'មាន ១៨ គឺ មហាភូតរូប ៤ បសាទរូប ៥ វិសយរូប ៤ (រូប សទ្ទ គន្ធា រស) ភាវរូប ២ ហទយរូប ១ ជីវិតរូប ១ អាហាររូប ១។',
    aE: 'Eighteen: 4 great essentials, 5 sensitives, 4 sense-object rūpas (colour, sound, odour, taste), 2 sex-rūpas, heart-base, life-faculty and nutriment.',
  },
  {
    qK: 'តើអសភាវរូប បានដល់រូបប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many rūpas are asabhāva-rūpa? What are they?',
    aK: 'មាន ១០ គឺ បរិច្ឆេទរូប ១ វិញ្ញត្តិរូប ២ វិការរូប ៣ លក្ខណរូប ៤។',
    aE: 'Ten: 1 element-space, 2 intimations, 3 mutable rūpas and 4 characteristic rūpas.',
  },
  {
    qK: 'តើរូប ១៨ មានឈ្មោះហៅប៉ុន្មានយ៉ាង? អ្វីខ្លះជាភាសាបាលី?',
    qE: 'How many names are given to the 18 (sabhāva) rūpas? What are they in Pāli?',
    aK: 'មានឈ្មោះ ៦ យ៉ាងជាភាសាបាលី គឺ សភាវរូប និប្ផន្នរូប សរូបរូប សលក្ខណរូប សម្មសនរូប និង រូបរូប។',
    aE: 'Six names in Pāli: sabhāva-rūpa, nipphanna-rūpa, sarūpa-rūpa, sa-lakkhaṇa-rūpa, sammasana-rūpa and rūpa-rūpa.',
  },
  {
    qK: 'តើសភាវរូប មានន័យដូចម្តេច?',
    qE: 'What does sabhāva-rūpa mean?',
    aK: 'សភាវរូប ប្រែថា រូបដែលមានសភាវៈពិតដោយខ្លួនឯង មានលក្ខណៈពិតដោយឡែកពីគេ ហើយអាចដើរតួជាអារម្មណ៍របស់បញ្ញាវិបស្សនាបាន។',
    aE: 'Sabhāva-rūpa means "matter having its own intrinsic nature" — it possesses its own distinct characteristic and can serve as an object of insight (vipassanā) wisdom.',
  },
  {
    qK: 'តើសលក្ខណៈរូប មានន័យដូចម្តេច?',
    qE: 'What does salakkhaṇa-rūpa mean?',
    aK: 'សលក្ខណរូប ប្រែថា រូបដែលមានលក្ខណៈ ព្រោះវាកើតរួមគ្នាជាមួយនឹងលក្ខណៈកើត-ចាស់-បែក (ឧប្បាទ ឋិតិ ភង្គ) គឺរូប ១៨ ដែលអមដោយលក្ខណរូបទាំង ៤។',
    aE: 'Salakkhaṇa-rūpa means "matter endowed with characteristics" — it arises together with the characteristics of arising, duration and dissolution (uppāda, ṭhiti, bhaṅga); it refers to the 18 sabhāva-rūpas accompanied by the 4 characteristic rūpas.',
  },
  {
    qK: 'តើនិប្ផន្នរូប មានន័យដូចម្តេច?',
    qE: 'What does nipphanna-rūpa mean?',
    aK: 'និប្ផន្នរូប ប្រែថា រូបដែលកើតដោយហេតុផ្សេងៗ (កម្ម ចិត្ត ឧតុ អាហារ) និងមានសភាវៈពិតដោយខ្លួនឯង ជារូបដែលកើតពេញរូបរាងច្បាស់លាស់ ដូចជាមហាភូត បសាទ ជាដើម។',
    aE: 'Nipphanna-rūpa means "concretely produced matter" — it arises by causes (kamma, citta, utu, āhāra) and possesses its own intrinsic nature, fully formed and distinct, such as the great essentials and the sensitives.',
  },
  {
    qK: 'តើរូបរូប មានន័យដូចម្តេច?',
    qE: 'What does rūpa-rūpa mean?',
    aK: 'រូបរូប ប្រែថា រូបដែលជារូបពិតប្រាកដ (មិនមែនជាបញ្ញត្តិ) ព្រោះវាត្រូវបែកធ្លាយដោយហេតុប្រឆាំង និងដោយការច្របាច់សង្កត់ គឺសំដៅដល់រូប ១៨ ដែលជាសភាវរូប មិនមែនសំដៅយកបញ្ញត្តិ។',
    aE: 'Rūpa-rūpa means "matter proper" (real, not conceptual) — because it is broken up by opposing causes and by squeezing; it denotes the 18 sabhāva-rūpas, not conceptual designations.',
  },
  {
    qK: 'តើសម្មសនរូប មានន័យដូចម្តេច?',
    qE: 'What does sammasana-rūpa mean?',
    aK: 'សម្មសនរូប ប្រែថា រូបដែលអាចកំណត់ពិចារណា (សម្មសិត) បាន គឺរូប ១៨ ដែលជាអារម្មណ៍របស់បញ្ញាវិបស្សនា ព្រោះវាអាចកំណត់ឃើញជាអនិច្ចំ ទុក្ខំ អនត្តា បាន។',
    aE: 'Sammasana-rūpa means "matter fit for comprehension" — the 18 sabhāva-rūpas that can be contemplated by insight wisdom (vipassanā) as impermanent, suffering and non-self.',
  },
]

const part3Qas = [
  {
    qK: 'តើបរមត្ថ បឋវី មានលក្ខណៈប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'How many defining aspects does paramattha pathavī (the earth element) have? What are they?',
    aK: 'បរមត្ថបឋវី មាន ៤ យ៉ាងគឺ លក្ខណៈ គឺ ភាពរឹង (កក្ខឡលក្ខណៈ) រស គឺ ការជើកទ្រទ្រង់របស់ដទៃ (បតិដ្ឋារស) បច្ចុប្បដ្ឋាន គឺ ការទទួល (សម្បដិច្ឆនបច្ចុប្បដ្ឋាន) បទដ្ឋាន គឺ អាបោ តេជោ វាយោ ដែលសល់។',
    aE: 'Paramattha pathavī has 4 aspects: characteristic — hardness (kakkhaḷa-lakkhaṇa); function — supporting others (patiṭṭhā-rasa); manifestation — receiving (sampaṭicchana-paccupaṭṭhāna); proximate cause — the remaining āpo, tejo and vāyo.',
  },
  {
    qK: 'តើបឋវី ដែលដើរតួជាអារម្មណ៍ បានអារម្មណ៍ណាក្នុងចំណោមអារម្មណ៍ ៦?',
    qE: 'When pathavī acts as an object, which of the 6 ārammaṇas does it yield?',
    aK: 'បឋវី ដែលដើរតួជាអារម្មណ៍ បាន ផោដ្ឋព្វារម្មណ៍ (អារម្មណ៍ត្រូវតែប៉ះពាល់ គឺអារម្មណ៍ទី ៥) ព្រោះបឋវីជាធាតុដែលត្រូវប៉ះដោយកាយបសាទ។',
    aE: 'Pathavī, when acting as object, yields the tangibility base (phoṭṭhabbārammaṇa, the 5th object), because it is tangibly experienced by the body-sensitivity.',
  },
  {
    qK: 'ចូររៀបរាប់លក្ខណាទិចតុក្កៈរបស់បឋវី?',
    qE: 'Describe the lakkhaṇādi-catukka of pathavī.',
    aK: 'បឋវីមាន លក្ខណៈ គឺ ភាពរឹង (កក្ខឡលក្ខណៈ) ដូចជាដីរឹង ឬថ្មរឹង។ រស គឺ ការជើកទ្រទ្រង់ (បតិដ្ឋារស) ដូចជាដីទ្រទ្រង់ឈើ ផ្ទះ សត្វ ជាដើម។ បច្ចុប្បដ្ឋាន គឺ ការទទួល ឬការជើកឱ្យច្បាស់ (សម្បដិច្ឆនបច្ចុប្បដ្ឋាន)។ បទដ្ឋាន គឺ អាបោ តេជោ វាយោ ដែលសល់ ៣ គឺ មហាភូតដែលនៅសល់ជាហេតុផ្តល់កំណើតដល់បឋវី។',
    aE: 'Pathavī\'s characteristic is hardness (kakkhaḷa), like hard earth or rock. Its function is supporting (patiṭṭhā), as the earth supports trees, houses and beings. Its manifestation is receiving or holding firm (sampaṭicchana). Its proximate cause is the remaining three great essentials (āpo, tejo, vāyo), which along with it arise together.',
  },
  {
    qK: 'តើលក្ខណាទិចតុក្កៈមានន័យដូចម្តេច?',
    qE: 'What does lakkhaṇādi-catukka mean?',
    aK: 'លក្ខណាទិចតុក្កៈ ប្រែថា សេចក្តី ៤ យ៉ាងដែលមានលក្ខណៈជាដើម គឺ លក្ខណៈ (ភាពពិត) រស (កិច្ច ឬមុខងារ) បច្ចុប្បដ្ឋាន (អាការប្រាកដ) បទដ្ឋាន (ហេតុជិតបំផុត)។ ជាវិធីរៀបរាប់ពិចារណាសភាវៈនិមួយៗដោយអាការៈ ៤ ។',
    aE: 'Lakkhaṇādi-catukka means "the group of four beginning with characteristic": characteristic (lakkhana), function (rasa), manifestation (paccupaṭṭhāna) and proximate cause (padaṭṭhāna). It is a method of analysing each reality through these four aspects.',
  },
  {
    qK: 'តើអជ្ឈត្តិកបឋវី មានន័យដូចម្តេច?',
    qE: 'What does ajjhattika-pathavī (internal earth) mean?',
    aK: 'អជ្ឈត្តិកបឋវី ប្រែថា បឋវីធាតុដែលមានក្នុងខ្លួនសត្វ គឺអង្គធាតុ ២០ ដែលមានសភាពរឹង ដូចជា សក់ រោម ក្រចក ធ្មេញ ស្បែក ជាដើម។',
    aE: 'Ajjhattika-pathavī means the earth element within a being\'s own body — the 20 bodily constituents that are hard in nature, such as hair, body-hair, nails, teeth and skin.',
  },
  {
    qK: 'តើសសម្ភារបឋវីក្នុងកាយសត្វ មានប៉ុន្មាន? ចែកជាប៉ុន្មានពួក?',
    qE: 'How many sambhāra-pathavī (earth-constituents) are in a being\'s body? Into how many groups are they divided?',
    aK: 'មាន ២០ អង្គ ចែកជា ៤ ពួក (បញ្ចកៈនិមួយៗមាន ៥) គឺ តចបញ្ចកៈ វក្កបញ្ចកៈ បប្ផាសបញ្ចកៈ និង មត្ថលុង្គបញ្ចកៈ។',
    aE: 'There are 20 constituents, divided into 4 groups (each pañcaka has 5): tacapañcaka, vakkapañcaka, papphāsapañcaka and matthaluṅgapañcaka.',
  },
  {
    qK: 'តើតចបញ្ចកៈ មានន័យដូចម្តេច?',
    qE: 'What does tacapañcaka mean?',
    aK: 'តចបញ្ចកៈ ប្រែថា ពួកអង្គធាតុ ៥ ដែលចែកដោយមានតចៈ (ស្បែក) ជាអង្គធំក្នុងពួក គឺ កេសា (សក់) លោមា (រោម) នខា (ក្រចក) ទន្តា (ធ្មេញ) តចោ (ស្បែក)។',
    aE: 'Tacapañcaka means "the group of five of which skin (taca) is the chief" — namely kesā (hair), lomā (body-hair), nakhā (nails), dantā (teeth) and taco (skin).',
  },
  {
    qK: 'តើតចបញ្ចកៈ មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many are in the tacapañcaka? What are they?',
    aK: 'មាន ៥ គឺ កេសា លោមា នខា ទន្តា តចោ (សក់ រោម ក្រចក ធ្មេញ ស្បែក)។',
    aE: 'Five: kesā (hair), lomā (body-hair), nakhā (nails), dantā (teeth) and taco (skin).',
  },
  {
    qK: 'តើវក្កបញ្ចកៈ មានន័យដូចម្តេច?',
    qE: 'What does vakkapañcaka mean?',
    aK: 'វក្កបញ្ចកៈ ប្រែថា ពួកអង្គធាតុ ៥ ដែលចែកដោយមានវក្កៈ ជាអង្គធំក្នុងពួក គឺ មំសៈ (សាច់) នហារុ (សរសៃ) អដ្ឋិ (ឆ្អឹង) អដ្ឋិមិញ្ច (ខួរក្នុងឆ្អឹង) វក្កៈ (តម្រងនោម)។',
    aE: 'Vakkapañcaka means "the group of five of which the kidney (vakka) is the representative" — namely maṁsa (flesh), nahāru (sinews), aṭṭhi (bones), aṭṭhimiñja (bone-marrow) and vakka (kidneys).',
  },
  {
    qK: 'តើវក្កបញ្ចកៈ មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many are in the vakkapañcaka? What are they?',
    aK: 'មាន ៥ គឺ មំសៈ នហារុ អដ្ឋិ អដ្ឋិមិញ្ច វក្កៈ (សាច់ សរសៃ ឆ្អឹង ខួរក្នុងឆ្អឹង តម្រងនោម)។',
    aE: 'Five: maṁsa (flesh), nahāru (sinews), aṭṭhi (bones), aṭṭhimiñja (bone-marrow) and vakka (kidneys).',
  },
]

const part4Qas = [
  {
    qK: 'តើបប្ផាសបញ្ចកៈ មានន័យដូចម្តេច?',
    qE: 'What does papphāsapañcaka mean?',
    aK: 'បប្ផាសបញ្ចកៈ ប្រែថា ពួកអង្គធាតុ ៥ ដែលចែកដោយមានបប្ផាសៈ (សួត) ជាអង្គធំក្នុងពួក គឺ ហទយៈ យកនៈ កិលោមកៈ បីហកៈ បប្ផាសៈ។',
    aE: 'Papphāsapañcaka means "the group of five of which the lungs (papphāsa) is the representative" — namely hadaya (heart), yakana (liver), kilomaka (pleura), pihaka (spleen) and papphāsa (lungs).',
  },
  {
    qK: 'តើបប្ផាសបញ្ចកៈ មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many are in the papphāsapañcaka? What are they?',
    aK: 'មាន ៥ គឺ ហទយៈ (បេះដូង) យកនៈ (ថ្លើម) កិលោមកៈ (ភ្នាសសួត ឬស្រោមបេះដូង) បីហកៈ (លំពែង) បប្ផាសៈ (សួត)។',
    aE: 'Five: hadaya (heart), yakana (liver), kilomaka (pleura), pihaka (spleen) and papphāsa (lungs).',
  },
  {
    qK: 'តើមត្ថលុង្គបញ្ចកៈ មានន័យដូចម្តេច?',
    qE: 'What does matthaluṅgapañcaka mean?',
    aK: 'មត្ថលុង្គបញ្ចកៈ ប្រែថា ពួកអង្គធាតុ ៥ ដែលចែកដោយមានមត្ថលុង្គៈ (ខួរក្បាល) ជាអង្គធំក្នុងពួក គឺ អន្តៈ អន្តគុណៈ ឧទរិយៈ ករីសៈ មត្ថលុង្គៈ។',
    aE: 'Matthaluṅgapañcaka means "the group of five of which the brain (matthaluṅga) is the representative" — namely anta (intestines), antaguṇa (mesentery), udariya (stomach content), karīsa (excrement) and matthaluṅga (brain).',
  },
  {
    qK: 'តើមត្ថលុង្គបញ្ចកៈ មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many are in the matthaluṅgapañcaka? What are they?',
    aK: 'មាន ៥ គឺ អន្តៈ (ពោះវៀន) អន្តគុណៈ (សរសៃស្តើងជាប់ពោះវៀន) ឧទរិយៈ (អាហារក្នុងពោះ) ករីសៈ (លាមក) មត្ថលុង្គៈ (ខួរក្បាល)។',
    aE: 'Five: anta (intestines), antaguṇa (mesentery), udariya (food in the stomach), karīsa (faeces) and matthaluṅga (brain).',
  },
  {
    qK: 'តើសសម្ភារបឋវី ចែកជាប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'Into how many is sambhāra-pathavī divided? What are they?',
    aK: 'សសម្ភារបឋវី ចែកជា ៤ ពួក (បញ្ចកៈ) គឺ តចបញ្ចកៈ វក្កបញ្ចកៈ បប្ផាសបញ្ចកៈ មត្ថលុង្គបញ្ចកៈ ដែលរួមមាន ២០ អង្គ។',
    aE: 'Sambhāra-pathavī is divided into 4 groups (pañcakas): tacapañcaka, vakkapañcaka, papphāsapañcaka and matthaluṅgapañcaka — totalling 20 constituents.',
  },
  {
    qK: 'តើសសម្ភារបឋវី នៅក្រៅកាយសត្វ បានដល់សសម្ភារៈអ្វីខ្លះ?',
    qE: 'What sambhāra (constituents) does sambhāra-pathavī outside a being\'s body refer to?',
    aK: 'សសម្ភារបឋវី នៅក្រៅកាយសត្វ (ពាហិរបឋវី) បានដល់ ដី ថ្ម ក្រួស ខ្សាច់ ភ្នំ ពំនូក ជាដើម ដែលមានធាតុរឹងស្ថិតនៅក្រៅខ្លួនសត្វ។',
    aE: 'Sambhāra-pathavī outside a being\'s body (external earth) refers to soil, rock, gravel, sand, mountains and hillocks — things with a hard nature existing outside the body.',
  },
  {
    qK: 'តើកសិណបឋវី ជាអារម្មណ៍របស់កម្មដ្ឋានណា?',
    qE: 'Which meditation object does kasina-pathavī serve as?',
    aK: 'កសិណបឋវី ជាអារម្មណ៍របស់ បឋវីកសិណសមាធិកម្មដ្ឋាន (កម្មដ្ឋានសមាធិជាគ្រឿងកំណត់ដី) ដែលអ្នកប្រតិបត្តិកំណត់យកដីជាអារម្មណ៍។',
    aE: 'Kasina-pathavī serves as the object of the earth-kasiṇa meditation (pathavī-kasiṇa samādhi kammaṭṭhāna), in which the meditator takes the earth as his object focus.',
  },
  {
    qK: 'តើសម្មតិបឋវី ឬបកតិបឋវី បានដល់អ្វីខ្លះ?',
    qE: 'What does sammuti-pathavī or natural pathavī refer to?',
    aK: 'សម្មតិបឋវី ឬបកតិបឋវី បានដល់ដីដែលស្ថិតក្នុងលោកតាមការសម្មតិ (តាមការសន្មតហៅ) ដូចជា ដីស្រែ ដីចម្ការ ដីភូមិ ដីផ្ទះ ជាដើម ដែលជាបញ្ញត្តិ មិនមែនជាបរមត្ថឡើយ។',
    aE: 'Sammuti-pathavī or natural pathavī refers to the earth as conventionally understood, such as paddy-field land, garden land, village land or house land — these are concepts (paññatti), not ultimate realities.',
  },
  {
    qK: 'តើបឋវី ដោយបរមត្ថ និងដោយបញ្ញត្តិ ចែកជាប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'By way of paramattha and paññatti, into how many kinds is pathavī divided? What are they?',
    aK: 'ចែកជា ២ យ៉ាង គឺ បរមត្ថបឋវី (បឋវីដែលជាបរមត្ថ មានលក្ខណៈរឹង ដូចជាបឋវីធាតុក្នុងកាយ) និង បញ្ញត្តិបឋវី (បឋវីដែលជាបញ្ញត្តិ គឺដីតាមការសម្មតិ ដូចជាដីស្រែ ដីចម្ការ)។',
    aE: 'It is divided into 2: paramattha-pathavī (the ultimate earth element having the characteristic of hardness, such as the earth element in the body) and paññatti-pathavī (conventional earth, such as paddy-field or garden land, which is a concept).',
  },
  {
    qK: 'តើបរមត្ថបឋវី ឬលក្ខណៈបឋវី សំដៅដល់បរមត្ថ ឬបញ្ញត្តិ?',
    qE: 'Do paramattha-pathavī or lakkhaṇa-pathavī refer to paramattha or paññatti?',
    aK: 'បរមត្ថបឋវី ឬលក្ខណៈបឋវី សំដៅដល់ បរមត្ថ គឺ បឋវីធាតុដែលមានលក្ខណៈរឹងជាសភាវៈពិតដោយខ្លួនឯង ពុំមែនជាបញ្ញត្តិឡើយ។',
    aE: 'Paramattha-pathavī or lakkhaṇa-pathavī refers to paramattha (ultimate reality) — the earth element possessing hardness as its own intrinsic nature, not a concept (paññatti).',
  },
]

const part5Qas = [
  {
    qK: 'តើបរមត្ថអាបោ មានលក្ខណៈប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'How many defining aspects does paramattha āpo (the water element) have? What are they?',
    aK: 'បរមត្ថអាបោ មាន ៤ យ៉ាងគឺ លក្ខណៈ គឺ ការហូរ ឬហៀរធ្លាក់ (បគ្ឃរណលក្ខណៈ) រស គឺ ការពង្រីក ឬឱ្យស្អិតជាប់ (ព្រូហនរស) បច្ចុប្បដ្ឋាន គឺ ការជាប់ស្អិត ឬការបន្តបន្ទាប់ (សន្ទនបច្ចុប្បដ្ឋាន) បទដ្ឋាន គឺ បឋវី តេជោ វាយោ ដែលសល់។',
    aE: 'Paramattha āpo has 4 aspects: characteristic — flowing or trickling (paggharaṇa-lakkhaṇa); function — strengthening or cohesion (brūhana-rasa); manifestation — holding together or extending (sandana-paccupaṭṭhāna); proximate cause — the remaining pathavī, tejo and vāyo.',
  },
  {
    qK: 'ចូររៀបរាប់លក្ខណាទិចតុក្កៈរបស់ អាបោ?',
    qE: 'Describe the lakkhaṇādi-catukka of āpo.',
    aK: 'អាបោមាន លក្ខណៈ គឺ ការហូរ ឬហៀរធ្លាក់ (បគ្ឃរណលក្ខណៈ) ដូចជាទឹកហូរ ឬញើសបែកហូរចេញ។ រស គឺ ការពង្រីក ឬឱ្យស្អិតជាប់ (ព្រូហនរស) ដូចជាទឹកធ្វើឱ្យគ្រឿងរសាត់យ៉ាងជាប់ស្អិត។ បច្ចុប្បដ្ឋាន គឺ ការជាប់ស្អិត ឬការសន្ទនា (សន្ទនបច្ចុប្បដ្ឋាន) ដូចជាកpplerដែលជាប់ស្អិតគ្នា។ បទដ្ឋាន គឺ បឋវី តេជោ វាយោ ដែលសល់ ជាមហាភូតដែលកើតរួមជាមួយគ្នា។',
    aE: 'Āpo\'s characteristic is flowing or trickling (paggharaṇa), like water flowing or sweat seeping out. Its function is strengthening or cohesion (brūhana), like water binding scattered materials together. Its manifestation is holding together or cohesion (sandana), like coagulating. Its proximate cause is the remaining pathavī, tejo and vāyo, which arise together with it.',
  },
  {
    qK: 'អាបោ បើដើរតួជាអារម្មណ៍ តើចាត់ជាអារម្មណ៍ណាក្នុងចំណោមអារម្មណ៍ ៦?',
    qE: 'When āpo acts as an object, which of the 6 ārammaṇas is it classed as?',
    aK: 'អាបោ បើដើរតួជាអារម្មណ៍ ចាត់ជា ធម្មារម្មណ៍ (អារម្មណ៍ទី ៦ ដែលជាអារម្មណ៍របស់ចិត្តមនោ) ព្រោះអាបោមិនមែនជាវត្ថុនៃវិញ្ញាណ ៥ ទេ គឺ គ្រាន់តែដឹងដោយមនោទ្វារ។',
    aE: 'When āpo acts as an object, it is classed as dhammārammaṇa (the 6th object, the object of mind-consciousness), because āpo is not an object of the five sense-consciousnesses but is known only through the mind-door.',
  },
  {
    qK: 'តើអាបោ ចាត់ជាខន្ធណាក្នុងចំណោមខន្ធ ៥?',
    qE: 'Among the 5 khandhas, which khandha is āpo classed as?',
    aK: 'អាបោ ចាត់ជា រូបក្ខន្ធ (ខន្ធទី ៤) ព្រោះអាបោជារូបធម៌។',
    aE: 'Āpo is classed as rūpakkhandha (the 4th khandha, the material aggregate), because āpo is matter.',
  },
  {
    qK: 'តើអាបោ ជាអព្យាកតធម៌ ឬ រូបធម៌?',
    qE: 'Is āpo abyākata-dhamma or rūpa-dhamma?',
    aK: 'អាបោ ជា ទាំងរូបធម៌ និង អព្យាកតធម៌ ព្រោះអាបោជារូប ហើយរូបទាំងអស់ជាអព្យាកតធម៌ (មិនមែនកុសល មិនមែនអកុសល មិនមែនកិរិយា)។',
    aE: 'Āpo is both rūpa-dhamma and abyākata-dhamma, because it is matter, and all matter is morally indeterminate (abyākata) — neither wholesome, nor unwholesome, nor functional.',
  },
  {
    qK: 'ដោយបរមត្ថ និងបញ្ញត្តិ តើអាបោ ចែកជាប៉ុន្មានយ៉ាងជាភាសាបាលី? អ្វីខ្លះ?',
    qE: 'By paramattha and paññatti, into how many kinds is āpo divided in Pāli? What are they?',
    aK: 'ចែកជា ២ យ៉ាងជាភាសាបាលី គឺ បរមត្ថអាបោ (អាបោដែលជាបរមត្ថ មានលក្ខណៈហូរ) និង បញ្ញត្តិអាបោ (អាបោដែលជាបញ្ញត្តិ ដូចជា សមុទ្ទ ស្ទឹង ទឹក)។',
    aE: 'It is divided into 2 in Pāli: paramattha-āpo (the ultimate water element having the characteristic of flowing) and paññatti-āpo (conventional water, such as ocean, river or lake).',
  },
  {
    qK: 'តើសសម្ភារអាបោ ចែកជាប៉ុន្មានប្រភេទ? អ្វីខ្លះ?',
    qE: 'Into how many types is sambhāra-āpo divided? What are they?',
    aK: 'សសម្ភារអាបោ ចែកជា ២ ប្រភេទ គឺ អជ្ឈត្តិកអាបោ (អាបោក្នុងកាយ) និង ពាហិរអាបោ (អាបោក្រៅកាយ)។',
    aE: 'Sambhāra-āpo is divided into 2 types: ajjhattika-āpo (internal water, in the body) and bāhira-āpo (external water, outside the body).',
  },
  {
    qK: 'តើអជ្ឈត្តិកអាបោ មានប៉ុន្មាន? ចែកជាប៉ុន្មានពួក?',
    qE: 'How many internal āpo parts are there? Into how many groups are they divided?',
    aK: 'អជ្ឈត្តិកអាបោ មាន ១២ អង្គ ចែកជា ២ ពួក (ឆក្កៈ) គឺ មេទឆក្កៈ និង មុត្តឆក្កៈ ដែលនិមួយៗមាន ៦។',
    aE: 'There are 12 internal āpo constituents, divided into 2 groups (chakkas): medo-chakka and mutta-chakka, each having 6.',
  },
  {
    qK: 'តើមេទឆក្កៈ មានន័យដូចម្តេច?',
    qE: 'What does medo-chakka mean?',
    aK: 'មេទឆក្កៈ ប្រែថា ពួកអង្គធាតុ ៦ ដែលមានមេទៈ (ខ្លាញ់) ជាអង្គចុងក្រោយ គឺ បិត្តៈ សេម្ហៈ ពុព្វោ លោហិតៈ សេទៈ មេទៈ។',
    aE: 'Medo-chakka means "the group of six whose last member is meda (fat)" — namely pitta (bile), semha (phlegm), pubbo (pus), lohita (blood), sedo (sweat) and medo (fat).',
  },
  {
    qK: 'តើមេទឆក្កៈ មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many are in the medo-chakka? What are they?',
    aK: 'មាន ៦ គឺ បិត្តៈ (ទឹកប្រមាត់) សេម្ហៈ (ប្រដាប់ ឬទឹករំអិល) ពុព្វោ (ខ្ទុះ) លោហិតៈ (ឈាម) សេទៈ (ញើស) មេទៈ (ខ្លាញ់)។',
    aE: 'Six: pitta (bile), semha (phlegm), pubbo (pus), lohita (blood), sedo (sweat) and medo (fat).',
  },
  {
    qK: 'តើមុត្តឆក្កៈ មានន័យដូចម្តេច?',
    qE: 'What does mutta-chakka mean?',
    aK: 'មុត្តឆក្កៈ ប្រែថា ពួកអង្គធាតុ ៦ ដែលមានមុត្តៈ (ទឹកនោម) ជាអង្គចុងក្រោយ គឺ អស្សុៈ វសា ខេឡៈ សិង្ឃាណិកា លសិកា មុត្តៈ។',
    aE: 'Mutta-chakka means "the group of six whose last member is mutta (urine)" — namely assu (tears), vasā (sweat/lymph), kheḷo (spittle), siṅghāṇikā (snot), lasikā (synovial fluid) and mutta (urine).',
  },
  {
    qK: 'តើមុត្តឆក្កៈ មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many are in the mutta-chakka? What are they?',
    aK: 'មាន ៦ គឺ អស្សុៈ (ទឹកភ្នែក) វសា (ស្លស ឬញើសខ្លាញ់) ខេឡៈ (ទឹកមាត់) សិង្ឃាណិកា (ទឹករំអិលច្រមុះ) លសិកា (ទឹករំអិលត្រង់សន្លាក់) មុត្តៈ (ទឹកនោម)។',
    aE: 'Six: assu (tears), vasā (lymph/sweat-oil), kheḷo (spittle), siṅghāṇikā (nasal mucus), lasikā (synovial fluid) and mutta (urine).',
  },
  {
    qK: 'ចូររកឧទាហរណ៍ លក្ខណៈហូររបស់ អាបោ នៅពេលដែលអាបោច្រើន បឋវីតិច?',
    qE: 'Give an example of āpo\'s flowing characteristic when āpo is abundant and pathavī is little.',
    aK: 'ឧទាហរណ៍ នៅពេលអាបោច្រើន បឋវីតិច អាបោរហូរហៀរធ្លាក់ចេញដូចជា ទឹកហូរច្រាលចេញពីក្អម ឬដូចទឹកក្នុងស្ទឹងដែលហូរលឿន នៅពេលមានទឹកច្រើន ដំណក់ទឹកក៏ហៀរចាក់ធ្លាក់ដោយមិនជាប់ស្អិត។',
    aE: 'Example: when āpo is abundant and pathavī little, āpo overflows and falls continuously, like water overflowing from a jar, or like a river rushing swiftly when full — the water trickles away rather than holding together.',
  },
  {
    qK: 'ចូររកឧទាហរណ៍ លក្ខណៈហូររបស់អាបោ នៅពេលដែលត្រូវតេជោដុត?',
    qE: 'Give an example of āpo\'s flowing characteristic when it is burnt by tejo (heat).',
    aK: 'ឧទាហរណ៍ នៅពេលអាបោត្រូវតេជោដុត អាបោក៏ហូរចេញដូចជា ក្រមួន ឬខ្លាញ់ដែលត្រូវភ្លើងដុត ក្តៅរលាយហូរចេញ ឬញើសដែលបែកចេញពីកាយពេលក្តៅ។',
    aE: 'Example: when āpo is burnt by tejo it flows out, like wax or fat that melts and runs out when exposed to fire, or like sweat that oozes from the body when hot.',
  },
  {
    qK: 'ចូររកឧទាហរណ៍ លក្ខណៈជាប់ស្អិតរបស់អាបោ នៅពេលអាបោតិច បឋវីច្រើនជាង?',
    qE: 'Give an example of āpo\'s cohesive characteristic when āpo is little and pathavī is more.',
    aK: 'ឧទាហរណ៍ នៅពេលអាបោតិច បឋវីច្រើន អាបោធ្វើឱ្យបឋវីជាប់ស្អិតគ្នាដូចជា ដូជាតិ ឬដីឥដ្ឋដែលលាយទឹកបន្តិចបន្តួច ពេលប្រឡាក់ អាចធ្វើជាក្អមជាប់ស្អិតមិនរបូត ឬខ្សាច់សើមដែលជាប់ស្អិតគ្នាបាន។',
    aE: 'Example: when āpo is little and pathavī more, āpo makes the earth cohere, like a little water mixed into clay that can be shaped into a pot and holds together, or like moist sand that sticks together.',
  },
  {
    qK: 'ចូររកឧទាហរណ៍ លក្ខណៈជាប់ស្អិតរបស់អាបោ នៅពេលតេជោធាតុតិច?',
    qE: 'Give an example of āpo\'s cohesive characteristic when the tejo element is little.',
    aK: 'ឧទាហរណ៍ នៅពេលតេជោធាតុតិច (ភ្លើងតិច ត្រជាក់) អាបោក៏ជាប់ស្អិតរឹងដូចជា ទឹកដោះដែលកកស្អិតជាប់គ្នា ឬទឹកកកដែលរឹងជាប់គ្នា ដោយសារភ្លើងតិច (ត្រជាក់)។',
    aE: 'Example: when the tejo element is little (little heat — cold), āpo becomes cohesive and firm, like milk that coagulates and clings together, or water that freezes and binds, because of the diminished heat.',
  },
]

const part6Qas = [
  {
    qK: 'តើបរមត្ថតេជោ មានលក្ខណៈប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'How many defining aspects does paramattha tejo (the heat element) have? What are they?',
    aK: 'បរមត្ថតេជោ មាន ៤ យ៉ាងគឺ លក្ខណៈ គឺ ភាពក្តៅ ឬត្រជាក់ (ឧណ្ហត្តលក្ខណៈ ឬសីតលក្ខណៈ) រស គឺ ការធ្វើឱ្យទុំ ឬចាស់ (បរិបាចនរស) បច្ចុប្បដ្ឋាន គឺ ការធ្វើឱ្យទន់ (មទ្ទវបច្ចុប្បដ្ឋាន) បទដ្ឋាន គឺ បឋវី អាបោ វាយោ ដែលសល់។',
    aE: 'Paramattha tejo has 4 aspects: characteristic — heat or cold (uṇhatta/sīta-lakkhana); function — ripening or maturing (paripācana-rasa); manifestation — softening (maddava-paccupaṭṭhāna); proximate cause — the remaining pathavī, āpo and vāyo.',
  },
  {
    qK: 'តើធម្មជាតិអ្វីដែលធ្វើឱ្យបឋវីក្តៅ?',
    qE: 'What nature makes pathavī hot?',
    aK: 'តេជោធាតុ (ដោយអាការៈក្តៅ ឧណ្ហត្តៈ) ជាអ្នកធ្វើឱ្យបឋវីក្តៅ។',
    aE: 'The tejo element (the hot aspect, uṇhatta) is what makes pathavī hot.',
  },
  {
    qK: 'តើធម្មជាតិអ្វីធ្វើឱ្យបឋវីត្រជាក់?',
    qE: 'What nature makes pathavī cold?',
    aK: 'តេជោធាតុ (ដោយអាការៈត្រជាក់ សីតៈ) ជាអ្នកធ្វើឱ្យបឋវីត្រជាក់ ព្រោះតេជោធាតុមានទាំងអាការៈក្តៅ និងត្រជាក់។',
    aE: 'The tejo element (the cold aspect, sīta) makes pathavī cold, because the tejo element has both hot and cold aspects.',
  },
  {
    qK: 'តើធម្មជាតិអ្វីធ្វើឱ្យអាបោក្តៅ?',
    qE: 'What nature makes āpo hot?',
    aK: 'តេជោធាតុ (ឧណ្ហត្តៈ ភាពក្តៅ) ជាអ្នកធ្វើឱ្យអាបោក្តៅ។',
    aE: 'The tejo element (the hot aspect, uṇhatta) makes āpo hot.',
  },
  {
    qK: 'តើធម្មជាតិអ្វីធ្វើឱ្យអាបោត្រជាក់?',
    qE: 'What nature makes āpo cold?',
    aK: 'តេជោធាតុ (សីតៈ ភាពត្រជាក់) ជាអ្នកធ្វើឱ្យអាបោត្រជាក់។',
    aE: 'The tejo element (the cold aspect, sīta) makes āpo cold.',
  },
  {
    qK: 'តើធម្មជាតិអ្វីធ្វើឱ្យវាយោក្តៅ?',
    qE: 'What nature makes vāyo hot?',
    aK: 'តេជោធាតុ (ឧណ្ហត្តៈ ភាពក្តៅ) ជាអ្នកធ្វើឱ្យវាយោក្តៅ។',
    aE: 'The tejo element (the hot aspect, uṇhatta) makes vāyo hot.',
  },
  {
    qK: 'តើធម្មជាតិអ្វីធ្វើឱ្យវាយោត្រជាក់?',
    qE: 'What nature makes vāyo cold?',
    aK: 'តេជោធាតុ (សីតៈ ភាពត្រជាក់) ជាអ្នកធ្វើឱ្យវាយោត្រជាក់។',
    aE: 'The tejo element (the cold aspect, sīta) makes vāyo cold.',
  },
  {
    qK: 'ចូររៀបរាប់លក្ខណាទិចតុក្កៈរបស់តេជោធាតុ?',
    qE: 'Describe the lakkhaṇādi-catukka of the tejo element.',
    aK: 'តេជោធាតុមាន លក្ខណៈ គឺ ភាពក្តៅ ឬត្រជាក់ (ឧណ្ហត្ត/សីតលក្ខណៈ) ដូចជាភ្លើងឬទឹកកក។ រស គឺ ការធ្វើឱ្យទុំ ឬចាស់រលួយ (បរិបាចនរស) ដូចជាផ្លែឈើទុំដោយកម្តៅថ្ងៃ ឬអាហារឆ្អិន។ បច្ចុប្បដ្ឋាន គឺ ការធ្វើឱ្យទន់ (មទ្ទវបច្ចុប្បដ្ឋាន) ដូចជាដំណាប់ទន់ដោយក្តៅ។ បទដ្ឋាន គឺ បឋវី អាបោ វាយោ ដែលសល់។',
    aE: 'The tejo element has: characteristic — heat or cold (uṇhatta/sīta), like fire or ice. Function — ripening and maturing (paripācana), as fruit ripens by the sun\'s heat or food is cooked. Manifestation — softening (maddava), as what is stiff becomes soft through warmth. Proximate cause — the remaining pathavī, āpo and vāyo.',
  },
  {
    qK: 'ដោយបរមត្ថ និងបញ្ញត្តិ តើតេជោមានប៉ុន្មានយ៉ាងជាភាសាបាលី? អ្វីខ្លះ?',
    qE: 'By paramattha and paññatti, into how many kinds is tejo divided in Pāli? What are they?',
    aK: 'មាន ២ យ៉ាងជាភាសាបាលី គឺ បរមត្ថតេជោ (តេជោដែលជាបរមត្ថ មានលក្ខណៈក្តៅ ឬត្រជាក់) និង បញ្ញត្តិតេជោ (តេជោដែលជាបញ្ញត្តិ ដូចជា ភ្លើង អគ្គី)។',
    aE: 'There are 2 kinds in Pāli: paramattha-tejo (the ultimate heat element having the characteristic of heat or cold) and paññatti-tejo (conventional fire, such as a blaze).',
  },
  {
    qK: 'តើសសម្ភារតេជោ ឬសុតន្តតេជោ ចែកជាប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'Into how many kinds is sambhāra-tejo (or Suttanta tejo) divided? What are they?',
    aK: 'សសម្ភារតេជោ ឬសុតន្តតេជោ ចែកជា ២ យ៉ាង គឺ អជ្ឈត្តិកតេជោ (តេជោក្នុងកាយ) និង ពាហិរតេជោ (តេជោក្រៅកាយ)។',
    aE: 'Sambhāra-tejo (or Suttanta tejo) is divided into 2 kinds: ajjhattika-tejo (internal fire, in the body) and bāhira-tejo (external fire, outside the body).',
  },
  {
    qK: 'តើអជ្ឈត្តិកតេជោ មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many kinds of internal tejo are there? What are they?',
    aK: 'អជ្ឈត្តិកតេជោ មាន ៤ គឺ សន្តាបនតេជោ (ធ្វើឱ្យក្តៅក្នុងកាយ) ទហនតេជោ (ធ្វើឱ្យឆាបឆេះ កំដៅដែលធ្វើឱ្យក្តៅខ្លាំងដល់កាយ) បចកតេជោ (ធ្វើឱ្យរំលាយអាហារឆ្អិន) បរិណាមកតេជោ (ធ្វើឱ្យរូបកាយចាស់ ទុំ ឬរលួយ)។',
    aE: 'Internal tejo has 4: santāpana-tejo (warming the body), dahana-tejo (burning/consuming), pācaka-tejo (digesting and cooking food) and pariṇāmaka-tejo (maturing, ageing or decomposing the body).',
  },
  {
    qK: 'តើពាហិរតេជោ មានអ្វីខ្លះ?',
    qE: 'What does external tejo include?',
    aK: 'ពាហិរតេជោ (តេជោក្រៅកាយ) មាន ដូចជា កម្តៅព្រះអាទិត្យ ភ្លើងឆាបឆេះ កម្តៅក្តៅ កម្តៅក្រហាយ ជាដើម ដែលមាននៅក្រៅខ្លួនសត្វ។',
    aE: 'External tejo (fire outside the body) includes such things as the heat of the sun, burning fire, the heat of summer and searing heat — heat existing outside a being\'s body.',
  },
  {
    qK: 'តើកសិណតេជោ ជាអារម្មណ៍របស់កម្មដ្ឋានណា?',
    qE: 'Which meditation object does kasina-tejo serve as?',
    aK: 'កសិណតេជោ ជាអារម្មណ៍របស់ តេជោកសិណសមាធិកម្មដ្ឋាន (កម្មដ្ឋានសមាធិជាគ្រឿងកំណត់ភ្លើង) ដែលអ្នកប្រតិបត្តិកំណត់យកភ្លើងជាអារម្មណ៍។',
    aE: 'Kasina-tejo serves as the object of the fire-kasiṇa meditation (tejo-kasiṇa samādhi kammaṭṭhāna), in which the meditator takes fire as his object focus.',
  },
  {
    qK: 'តើសម្មតិតេជោ ឬបកតិតេជោ បានដល់អ្វីខ្លះ?',
    qE: 'What does sammuti-tejo or natural tejo refer to?',
    aK: 'សម្មតិតេជោ ឬបកតិតេជោ បានដល់ភ្លើងតាមការសម្មតិ (តាមការសន្មតហៅ) ដូចជា ភ្លើង អគ្គី ភ្លើងឆេះផ្ទះ ភ្លើងចង្ក្រាន ជាដើម ដែលជាបញ្ញត្តិ មិនមែនបរមត្ថ។',
    aE: 'Sammuti-tejo or natural tejo refers to fire as conventionally understood, such as a blaze, a house fire or a stove fire — these are concepts (paññatti), not ultimate realities.',
  },
  {
    qK: 'តើតេជោដើរតួជាអារម្មណ៍ណាមួយក្នុងចំណោមអារម្មណ៍ ៦?',
    qE: 'Which of the 6 ārammaṇas does tejo act as?',
    aK: 'តេជោ ដើរតួជាអារម្មណ៍មួយក្នុងចំណោមអារម្មណ៍ ៦ គឺ ផោដ្ឋព្វារម្មណ៍ (អារម្មណ៍ត្រូវប៉ះពាល់) ព្រោះតេជោជាទីតាំងនៃការប៉ះរបស់កាយបសាទ រួមជាមួយបឋវី និងវាយោ។',
    aE: 'Tejo acts as one of the 6 objects, namely the tangibility base (phoṭṭhabbārammaṇa), because tejo is experienced by the body-sensitivity together with pathavī and vāyo.',
  },
  {
    qK: 'តើតេជោដើរតួជាអារម្មណ៍ ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារណា?',
    qE: 'Through which door does tejo act as an object for consciousness?',
    aK: 'តេជោ ដើរតួជាអារម្មណ៍ ឱ្យចិត្តប្រព្រឹត្តតាម កាយទ្វារ (ទ្វារទី ៥ នៃកាយ) ព្រោះតេជោជាផោដ្ឋព្វារម្មណ៍ដែលត្រូវដឹងដោយកាយវិញ្ញាណតាមកាយបសាទ។',
    aE: 'Tejo acts as an object for consciousness through the body-door (kāya-dvāra, the 5th door), because it is a tangible object known by body-consciousness through the body-sensitivity.',
  },
]

const part7Qas = [
  {
    qK: 'តើបរមត្ថវាយោ មានលក្ខណៈប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'How many defining aspects does paramattha vāyo (the air/wind element) have? What are they?',
    aK: 'បរមត្ថវាយោ មាន ៤ យ៉ាងគឺ លក្ខណៈ គឺ ការជើកទ្រទ្រង់ ឬព្រឺកម្រាប (វិត្ថម្ភនលក្ខណៈ ឬអត្ថម្ភនលក្ខណៈ) រស គឺ ការធ្វើឱ្យចលនា (សមុទីរណរស) បច្ចុប្បដ្ឋាន គឺ ការបញ្ជូន ឬបង្អោនទៅ (អភិនីហារបច្ចុប្បដ្ឋាន) បទដ្ឋាន គឺ បឋវី អាបោ តេជោ ដែលសល់។',
    aE: 'Paramattha vāyo has 4 aspects: characteristic — supporting or vibrating (vitthambhana/atthambhana-lakkhana); function — moving or propelling (samudīraṇa-rasa); manifestation — urging or conveying forward (abhinīhāra-paccupaṭṭhāna); proximate cause — the remaining pathavī, āpo and tejo.',
  },
  {
    qK: 'ចូររៀបរាប់លក្ខណាទិចតុក្កៈរបស់វាយោធាតុ?',
    qE: 'Describe the lakkhaṇādi-catukka of the vāyo element.',
    aK: 'វាយោធាតុមាន លក្ខណៈ គឺ ការជើកទ្រទ្រង់ ឬព្រឺកម្រាប (វិត្ថម្ភនលក្ខណៈ) ដូចជាខ្យល់ដែលជើកទ្រទ្រង់អ្វីៗឱ្យឈរបាន ឬធ្វើឱ្យព្រឺកម្រាបវិលវល់។ រស គឺ ការធ្វើឱ្យចលនា (សមុទីរណរស) ដូចជាខ្យល់បក់ធ្វើឱ្យដើមឈើត្រសៀលចលនា។ បច្ចុប្បដ្ឋាន គឺ ការបញ្ជូន ឬបង្អោនទៅ (អភិនីហារបច្ចុប្បដ្ឋាន) ដូចជាខ្យល់បក់បង្អោនអ្វីៗទៅមុខ។ បទដ្ឋាន គឺ បឋវី អាបោ តេជោ ដែលសល់ ដែលកើតរួមជាមួយគ្នា។',
    aE: 'The vāyo element has: characteristic — supporting or vibrating (vitthambhana), like wind that upholds things or sets them trembling in motion. Function — moving (samudīraṇa), as wind sways and moves trees. Manifestation — urging or conveying forward (abhinīhāra), as wind blows and carries things along. Proximate cause — the remaining pathavī, āpo and tejo, which arise together with it.',
  },
  {
    qK: 'វាយោ ដើរតួជាអារម្មណ៍ណាក្នុងចំណោមអារម្មណ៍ ៦?',
    qE: 'Which of the 6 ārammaṇas does vāyo act as?',
    aK: 'វាយោ ដើរតួជាអារម្មណ៍មួយក្នុងចំណោមអារម្មណ៍ ៦ គឺ ផោដ្ឋព្វារម្មណ៍ (អារម្មណ៍ទី ៥ ដែលត្រូវប៉ះពាល់) ព្រោះវាយោជាទីតាំងនៃការប៉ះរបស់កាយបសាទ រួមជាមួយបឋវី និងតេជោ។',
    aE: 'Vāyo acts as one of the 6 objects, namely the tangibility base (phoṭṭhabbārammaṇa, the 5th object), because it is experienced by the body-sensitivity together with pathavī and tejo.',
  },
  {
    qK: 'វាយោ ដើរតួជាអារម្មណ៍ ឱ្យចិត្តប្រព្រឹត្តតាមទ្វារណា?',
    qE: 'Through which door does vāyo act as an object for consciousness?',
    aK: 'វាយោ ដើរតួជាអារម្មណ៍ ឱ្យចិត្តប្រព្រឹត្តតាម កាយទ្វារ (ទ្វារទី ៥ នៃកាយ) ព្រោះវាយោជាផោដ្ឋព្វារម្មណ៍ដែលត្រូវដឹងដោយកាយវិញ្ញាណ តាមកាយបសាទ។',
    aE: 'Vāyo acts as an object for consciousness through the body-door (kāya-dvāra, the 5th door), because it is a tangible object known by body-consciousness through the body-sensitivity.',
  },
  {
    qK: 'ដោយបរមត្ថ និងបញ្ញត្តិ តើវាយោចែកជាប៉ុន្មានយ៉ាងជាភាសាបាលី? អ្វីខ្លះ?',
    qE: 'By paramattha and paññatti, into how many kinds is vāyo divided in Pāli? What are they?',
    aK: 'មាន ២ យ៉ាងជាភាសាបាលី គឺ បរមត្ថវាយោ (វាយោដែលជាបរមត្ថ មានលក្ខណៈជើកទ្រទ្រង់ ឬព្រឺកម្រាប) និង បញ្ញត្តិវាយោ (វាយោដែលជាបញ្ញត្តិ ដូចជា ខ្យល់ ខ្យល់ព្យុះ)។',
    aE: 'There are 2 kinds in Pāli: paramattha-vāyo (the ultimate air element having the characteristic of supporting or vibrating) and paññatti-vāyo (conventional wind, such as a breeze or storm).',
  },
  {
    qK: 'វាយោដោយសភាវៈលក្ខណៈ ចែកជាប៉ុន្មានយ៉ាង? អ្វីខ្លះ?',
    qE: 'By its intrinsic nature, into how many kinds is vāyo divided? What are they?',
    aK: 'វាយោ ដោយសភាវៈលក្ខណៈ (ដោយបរមត្ថលក្ខណៈ) ចែកជា ២ យ៉ាង គឺ អជ្ឈត្តិកវាយោ (ខ្យល់ក្នុងកាយសត្វ ដូចជាខ្យល់ដកដង្ហើម ខ្យល់ក្នុងពោះ) និង ពាហិរវាយោ (ខ្យល់ក្រៅកាយ ដូចជាខ្យល់បក់) ។',
    aE: 'Vāyo, by its intrinsic nature (paramattha characteristic), is divided into 2 kinds: ajjhattika-vāyo (internal wind in a being, such as the breath or wind in the belly) and bāhira-vāyo (external wind, such as a blowing breeze).',
  },
  {
    qK: 'តើអជ្ឈត្តិកវាយោ មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many kinds of internal vāyo are there? What are they?',
    aK: 'អជ្ឈត្តិកវាយោ មាន ៦ គឺ ឧទ្ធង្គមវាត (ខ្យល់ឡើងលើ គឺខ្យល់បកឡើង) អធរំគមវាត (ខ្យល់ចុះក្រោម) កុច្ឆិដ្ឋវាត (ខ្យល់ក្នុងពោះ) កោដ្ឋាសយវាត (ខ្យល់ក្នុងពោះវៀន) អង្គមង្គានុសារិវាត (ខ្យល់ដែលសាយទៅក្នុងអវយវៈទាំងឡាយ) អស្សាសបស្សាសវាត (ខ្យល់ដកដង្ហើមចូល-ចេញ)។',
    aE: 'Internal vāyo has 6: uddhaṅgama-vāta (wind that moves upward), adhogaṁgama-vāta (wind that moves downward), kucchisayā-vāta (wind in the belly), koṭṭhāsaya-vāta (wind in the bowels), aṅgamaṅgānusārinī-vāta (wind that courses through the limbs) and assāsapassāsa-vāta (wind of in-and-out breathing).',
  },
  {
    qK: 'តើអជ្ឈត្តិកវាយោ ចែកជាប៉ុន្មានពួក? អ្វីខ្លះ?',
    qE: 'Into how many groups is internal vāyo divided? What are they?',
    aK: 'អជ្ឈត្តិកវាយោ ៦ នេះ ចែកជា ២ ពួក គឺ វាយោដែលនៅស្ងៀមក្នុងកាយ ៤ (ឧទ្ធង្គមវាត អធរំគមវាត កុច្ឆិដ្ឋវាត កោដ្ឋាសយវាត) និង វាយោដែលធ្វើចលនា ២ (អង្គមង្គានុសារិវាត អស្សាសបស្សាសវាត)។',
    aE: 'These 6 internal winds are divided into 2 groups: the 4 winds abiding in the body (uddhaṅgama, adhogaṁgama, kucchisaya and koṭṭhāsaya) and the 2 winds of motion (aṅgamaṅgānusārin and assāsapassāsa).',
  },
  {
    qK: 'តើអស្សាសបស្សាសវាត មានន័យដូចម្តេច?',
    qE: 'What does assāsapassāsa-vāta mean?',
    aK: 'អស្សាសបស្សាសវាត ប្រែថា ខ្យល់ដកដង្ហើមចូល-ដកដង្ហើមចេញ គឺ វាយោដែលធ្វើឱ្យមានលំហូរដកដង្ហើមចូល និងចេញរបស់សត្វ។',
    aE: 'Assāsapassāsa-vāta means the wind of inhalation and exhalation — the vāyo that brings about the in-breathing and out-breathing of a being.',
  },
  {
    qK: 'តើអស្សាស និង បស្សាស មានន័យដូចម្តេច?',
    qE: 'What do assāsa and passāsa mean?',
    aK: 'អស្សាស ប្រែថា ដកដង្ហើមចូល (ការទាញខ្យល់ចូលក្នុងកាយ) និង បស្សាស ប្រែថា ដកដង្ហើមចេញ (ការបញ្ចេញខ្យល់ចេញពីកាយ)។',
    aE: 'Assāsa means inhalation (drawing the breath in), and passāsa means exhalation (breathing the breath out).',
  },
  {
    qK: 'តើអំណាចវាយោ មានន័យដូចម្តេច?',
    qE: 'What does the power (aṅgamangānusāri) of vāyo mean?',
    aK: 'អង្គមង្គានុសារិវាត ប្រែថា ខ្យល់ដែលមានអំណាចសាយចូលទៅគ្រប់អវយវៈ និងសន្លាក់ទាំងឡាយ ធ្វើឱ្យអាចលាត កន្ត្រាក់ ឈរ ដើរ អង្គុយ ដេក ងាកបត់ ជាដើម បាន។',
    aE: 'Aṅgamaṅgānusārinī-vāta means the wind that has the power to course through all the limbs and joints, enabling stretching, bending, standing, walking, sitting, lying down and turning around.',
  },
  {
    qK: 'ចូររកឧទាហរណ៍ លក្ខណៈព្រឺកម្រាបរបស់វាយោ នៅពេលវាយោច្រើន បឋវីតិច?',
    qE: 'Give an example of vāyo\'s vibrating characteristic when vāyo is abundant and pathavī is little.',
    aK: 'ឧទាហរណ៍ នៅពេលវាយោច្រើន បឋវីតិច វាយោធ្វើឱ្យព្រឺកម្រាបយ៉ាងខ្លាំងដូចជា ខ្យល់ព្យុះដ៏ខ្លាំងដែលធ្វើឱ្យដើមឈើស្រុតចាក់ឬស ឬធ្វើឱ្យអ្វីៗត្រសៀលវិលវល់ ដោយមិនអាចជាប់ស្ថិតស្ថេរឡើយ។',
    aE: 'Example: when vāyo is abundant and pathavī little, vāyo vibrates violently, like a fierce storm that uproots trees and sets things whirling about, so that nothing can remain stable.',
  },
  {
    qK: 'ចូររកឧទាហរណ៍ លក្ខណៈព្រឺកម្រាបរបស់វាយោ នៅពេលតេជោកាន់អំណាច?',
    qE: 'Give an example of vāyo\'s vibrating characteristic when tejo has power.',
    aK: 'ឧទាហរណ៍ នៅពេលតេជោកាន់អំណាច វាយោព្រឺកម្រាបដូចជា អណ្តាតភ្លើងដែលភ្លឹបភ្លែតត្រសៀលរាំដោយកម្តៅ ឬដូចចំហាយក្តៅដែលវិលកួចញាប់ឡើងលើដោយកម្តៅខ្លាំង។',
    aE: 'Example: when tejo has power, vāyo vibrates like a flame that flickers and dances from heat, or like hot vapour that swirls and rises rapidly because of great heat.',
  },
  {
    qK: 'ចូររកឧទាហរណ៍ លក្ខណៈអត្ថម្ភនៈរបស់វាយោ នៅពេលអាបោច្រើន បឋវីតិច?',
    qE: 'Give an example of vāyo\'s supporting (atthambhana) characteristic when āpo is abundant and pathavī is little.',
    aK: 'ឧទាហរណ៍ នៅពេលអាបោច្រើន បឋវីតិច វាយោជើកទ្រទ្រង់ដូចជា ខ្យល់ឬប្រហោងខ្យល់ដែលជើកទ្រនាវា ឬវត្ថុឱ្យអណ្តែតនៅលើទឹកបាន ដោយមិនលិច។',
    aE: 'Example: when āpo is abundant and pathavī little, vāyo supports like air or an air-pocket that buoys a ship or object up to float on the water so that it does not sink.',
  },
  {
    qK: 'ចូររកឧទាហរណ៍ លក្ខណៈអត្ថម្ភនៈរបស់វាយោ នៅពេលតេជោកាន់អំណាច?',
    qE: 'Give an example of vāyo\'s supporting characteristic when tejo has power.',
    aK: 'ឧទាហរណ៍ នៅពេលតេជោកាន់អំណាច វាយោជើកទ្រទ្រង់ដូចជា ខ្យល់ក្តៅដែលរីកធំឡើងក្នុងវត្ថុមានសភាពទន់ ធ្វើឱ្យវត្ថុនោះប៉ោង ឬរក្សារាងឱ្យរក្សាទ្រទ្រង់បាន ដូចជាស្បែកស្គរដែលប៉ោងឡើងដោយកម្តៅ។',
    aE: 'Example: when tejo has power, vāyo supports like expanding hot air inside a soft object that makes it swell up and keep its shape, such as a drum-skin that puffs up with heat.',
  },
  {
    qK: 'ចូររកឧទាហរណ៍ លក្ខណៈសមុទីរណៈរបស់វាយោ នៅពេលអាបោច្រើន បឋវីតិច?',
    qE: 'Give an example of vāyo\'s moving (samudīraṇa) characteristic when āpo is abundant and pathavī is little.',
    aK: 'ឧទាហរណ៍ នៅពេលអាបោច្រើន បឋវីតិច វាយោធ្វើចលនាដូចជា ខ្យល់ដែលបក់បោកធ្វើឱ្យផ្ទៃទឹករលកបក់បោកឡើង ឬធ្វើឱ្យរលករាលដាលវិលទៅមុខ ព្រោះទឹកដែលមានច្រើន ងាយនឹងចលនាដោយខ្យល់បក់។',
    aE: 'Example: when āpo is abundant and pathavī little, vāyo moves things like wind that whips up waves on the water\'s surface and drives them forward, because abundant water is easily moved by the wind.',
  },
  {
    qK: 'ចូររកឧទាហរណ៍ លក្ខណៈសមុទីរណៈរបស់វាយោ នៅពេលតេជោកាន់អំណាច?',
    qE: 'Give an example of vāyo\'s moving characteristic when tejo has power.',
    aK: 'ឧទាហរណ៍ នៅពេលតេជោកាន់អំណាច វាយោធ្វើចលនាដូចជា ខ្យល់ក្តៅដែលបក់ជំរុញផ្សែង ឬអណ្តាតភ្លើង ឱ្យចលនាវិលវល់ទៅមុខ ដូចជាកម្តៅភ្លើងដែលធ្វើឱ្យខ្យល់ក្តៅឡើងហើយបក់ជំរុញអ្វីៗឱ្យចលនា។',
    aE: 'Example: when tejo has power, vāyo moves things like hot air that drives smoke or flames to swirl and advance, much as fire\'s heat makes the air hot and drives things into motion.',
  },
]

const part9Qas = [
  {
    qK: 'តើបសាទរូប មានប៉ុន្មាន? អ្វីខ្លះ?',
    qE: 'How many pasāda rūpas are there? What are they?',
    aK: 'បសាទរូប មាន ៥ គឺ ចក្ខុបសាទ (បសាទភ្នែក សម្រាប់ឃើញរូប) សោតបសាទ (បសាទត្រចៀក សម្រាប់ឮសំឡេង) ឃានបសាទ (បសាទច្រមុះ សម្រាប់ធុំក្លិន) ជិវ្ហាបសាទ (បសាទអណ្តាត សម្រាប់ភ្លក់រស) កាយបសាទ (បសាទកាយ សម្រាប់ប៉ះពាល់)។',
    aE: 'There are 5 pasāda rūpas: cakkhu-pasāda (eye-sensitivity, for seeing forms), sota-pasāda (ear-sensitivity, for hearing sounds), ghāna-pasāda (nose-sensitivity, for smelling odours), jivhā-pasāda (tongue-sensitivity, for tasting flavours) and kāya-pasāda (body-sensitivity, for touching).',
  },
  {
    qK: 'តើចក្ខុបសាទរូប អាស្រ័យនៅទីណា?',
    qE: 'Where does the cakkhu-pasāda rūpa abide?',
    aK: 'ចក្ខុបសាទរូប អាស្រ័យនៅក្នុងទីដែលរូបារម្មណ៍ (អារម្មណ៍រូបដែលឃើញ) ធ្លាក់ប៉ះ គឺនៅលើស្វែងភ្នែក ក្នុងរង្វង់ភ្នែក ដែលមានមហាភូតទាំង ៤ ទ្រទ្រង់ ដូចជាដំណក់ប្រេងនៅលើសំឡី ឬដូចកញ្ចក់សម្លឹងរូប។',
    aE: 'Cakkhu-pasāda abides in the place where visible objects (rūpārammaṇa) strike — on the eyeball, within the eye, supported by the four great essentials, like a drop of oil on a piece of cotton or like a mirror for reflecting forms.',
  },
  {
    qK: 'តើចក្ខុបសាទ មានលក្ខណៈដូចម្តេច?',
    qE: 'What is the characteristic of cakkhu-pasāda?',
    aK: 'ចក្ខុបសាទ មានលក្ខណៈ គឺ រួចរៀបចំគ្រប់គ្រាន់ដើម្បីទទួលរូបារម្មណ៍ (អារម្មណ៍រូបដែលឃើញ) ដូចជាកញ្ចក់ដែលត្រៀមទទួលពន្លឺ ឬដូចផ្ទៃទឹកដែលរួចរាល់ដើម្បីទទួលរូបឆ្លុះ។',
    aE: 'Cakkhu-pasāda has the characteristic of being ready and fit to receive the visible object, like a mirror ready to receive light, or like a still water surface ready to receive a reflected image.',
  },
  {
    qK: 'តើអ្វីជាទីពឹងរបស់ចក្ខុបសាទ?',
    qE: 'What is the support (abode) of cakkhu-pasāda?',
    aK: 'ទីពឹងរបស់ចក្ខុបសាទ គឺ អាកាសធាតុ (ធាតុដែលជាហោង ឬប្រហោងក្នុងភ្នែក) ព្រោះចក្ខុបសាទត្រូវការទីទំនេរ (ហោង) ដើម្បីស្ថិតនៅ ទើបទទួលរូបារម្មណ៍បាន។',
    aE: 'The support of cakkhu-pasāda is the space element (ākāsa-dhātu — the hollow or cavity within the eye), because eye-sensitivity needs an empty space to abide in so that it can receive the visible object.',
  },
  {
    qK: 'តើអាកាសធាតុ មានន័យដូចម្តេច?',
    qE: 'What does ākāsa-dhātu (space element) mean?',
    aK: 'អាកាសធាតុ (អាកាសៈ) ប្រែថា ធាតុជាទីទំនេរ ឬហោង គឺ សភាវៈដែលបែងចែកកំណត់រូប និងរូបឱ្យដាច់ពីគ្នា ដោយធ្វើជាប្រហោង ឬចន្លោះរវាងរូប ដូចជារន្ធ ឬទីកន្លែងទំនេរក្នុងភ្នែក ត្រចៀក ជាដើម។',
    aE: 'Ākāsa-dhātu (ākāsa) means the element of empty space or cavity — a reality that delimits matter so that one rūpa is separate from another, acting as the hollow or gap between rūpas, such as the cavities within the eye and ear.',
  },
  {
    qK: 'តើអាកាសធាតុ ជារូបប្រភេទណា?',
    qE: 'What kind of rūpa is ākāsa-dhātu?',
    aK: 'អាកាសធាតុ ជា បរិច្ឆេទរូប (រូបដែលជាគ្រឿងកំណត់ ឬបែងចែករូបឱ្យដាច់ពីគ្នា) ដែលជាអនិប្ផន្នរូប (មិនមែនជារូបកើតពីកម្ម ចិត្ត ឧតុ អាហារ) ហើយជាអសភាវរូប (គ្មានលក្ខណៈពិតដោយខ្លួនឯង)។',
    aE: 'Ākāsa-dhātu is a pariccheda-rūpa (the delimiting rūpa that marks off rūpas from one another). It is an anipphanna-rūpa (not produced by kamma, citta, utu or āhāra) and an asabhāva-rūpa (without its own intrinsic characteristic).',
  },
  {
    qK: 'តើចក្ខុបសាទ ដើរតួជាអាយតនៈអ្វី?',
    qE: 'As which āyatana does cakkhu-pasāda act?',
    aK: 'ចក្ខុបសាទ ដើរតួជា ចក្ខាយតនៈ (អាយតនៈទី ១ ក្នុងចំណោមអាយតនៈទាំង ១២)។',
    aE: 'Cakkhu-pasāda acts as cakkhāyatana (the 1st of the 12 āyatanas).',
  },
  {
    qK: 'តើចក្ខុបសាទ ដើរតួជាឥន្រ្ទិយអ្វី?',
    qE: 'As which indriya does cakkhu-pasāda act?',
    aK: 'ចក្ខុបសាទ ដើរតួជា ចក្ខុន្រ្ទិយ (ឥន្រ្ទិយ គឺអំណាចធំក្នុងការឃើញរូប) ដែលជាឥន្រ្ទិយបញ្ច ក្នុងវិស័យនៃការមើលឃើញ។',
    aE: 'Cakkhu-pasāda acts as cakkhundriya (the eye faculty, dominant in seeing forms), one of the five sense faculties.',
  },
  {
    qK: 'តើចក្ខុបសាទ ដើរតួជាទ្វារអ្វី?',
    qE: 'As which door does cakkhu-pasāda act?',
    aK: 'ចក្ខុបសាទ ដើរតួជា ចក្ខុទ្វារ (ទ្វារភ្នែក ដែលជាទ្វារមួយក្នុងចំណោមទ្វារ ៦) ជាទីដែលចិត្តប្រព្រឹត្តទៅដើម្បីដឹងរូបារម្មណ៍។',
    aE: 'Cakkhu-pasāda acts as cakkhudvāra (the eye-door, one of the 6 doors), through which consciousness moves to know the visible object.',
  },
  {
    qK: 'តើសោតបសាទរូប អាស្រ័យនៅទីណា?',
    qE: 'Where does the sota-pasāda rūpa abide?',
    aK: 'សោតបសាទរូប អាស្រ័យនៅក្នុងទីដែលសទ្ធារម្មណ៍ (អារម្មណ៍សំឡេងដែលឮ) ធ្លាក់ប៉ះ គឺនៅក្នុងប្រហោងត្រចៀក ដែលមានមហាភូតទាំង ៤ ទ្រទ្រង់ ដូចជាដុំសំឡីដែលដោតនៅក្នុងរន្ធត្រចៀក។',
    aE: 'Sota-pasāda abides in the place where the sound object (saddārammaṇa) strikes — within the cavity of the ear, supported by the four great essentials, like a plug of cotton placed in the ear-hole.',
  },
  {
    qK: 'តើសោតបសាទ មានលក្ខណៈដូចម្តេច?',
    qE: 'What is the characteristic of sota-pasāda?',
    aK: 'សោតបសាទ មានលក្ខណៈ គឺ រួចរៀបចំគ្រប់គ្រាន់ដើម្បីទទួលសទ្ធារម្មណ៍ (អារម្មណ៍សំឡេង) ដូចជាត្រចៀកដែលរួចរាល់ទទួលសំឡេងពីគ្រប់ទិស ព្រោះសោតបសាទឮសំឡេងបានគ្រប់ទិសទាំងអស់ដែលសំឡេងមកដល់។',
    aE: 'Sota-pasāda has the characteristic of being ready and fit to receive the sound object, like an ear ready to receive sound from every direction, because ear-sensitivity hears sound coming from all directions.',
  },
  {
    qK: 'តើសោតបសាទ ដើរតួជាអាយតនៈអ្វី?',
    qE: 'As which āyatana does sota-pasāda act?',
    aK: 'សោតបសាទ ដើរតួជា សោតាយតនៈ (អាយតនៈទី ២ ក្នុងចំណោមអាយតនៈទាំង ១២)។',
    aE: 'Sota-pasāda acts as sotāyatana (the 2nd of the 12 āyatanas).',
  },
  {
    qK: 'តើសោតបសាទ ដើរតួជាឥន្រ្ទិយអ្វី?',
    qE: 'As which indriya does sota-pasāda act?',
    aK: 'សោតបសាទ ដើរតួជា សោតន្រ្ទិយ (ឥន្រ្ទិយ គឺអំណាចធំក្នុងការឮសំឡេង) ដែលជាឥន្រ្ទិយបញ្ច ក្នុងវិស័យនៃការស្តាប់ឮ។',
    aE: 'Sota-pasāda acts as sotindriya (the ear faculty, dominant in hearing sounds), one of the five sense faculties.',
  },
  {
    qK: 'តើសោតបសាទ ដើរតួជាទ្វារអ្វី?',
    qE: 'As which door does sota-pasāda act?',
    aK: 'សោតបសាទ ដើរតួជា សោតទ្វារ (ទ្វារត្រចៀក ដែលជាទ្វារមួយក្នុងចំណោមទ្វារ ៦) ជាទីដែលចិត្តប្រព្រឹត្តទៅដើម្បីដឹងសទ្ធារម្មណ៍។',
    aE: 'Sota-pasāda acts as sotadvāra (the ear-door, one of the 6 doors), through which consciousness moves to know the sound object.',
  },
  {
    qK: 'តើចក្ខុបសាទ និងសោតបសាទ ចាត់ជារូបណាខ្លះក្នុងរូប ២៨?',
    qE: 'Among the 28 rūpas, which kinds of rūpa are cakkhu-pasāda and sota-pasāda classed as?',
    aK: 'ចក្ខុបសាទ និងសោតបសាទ ជា និប្ផន្នរូប (រូបកើតពីកម្ម ចិត្ត ឧតុ អាហារ) ជាសភាវរូប (មានលក្ខណៈពិតដោយខ្លួនឯង) ជាឥន្រ្ទិយរូប និងជាវត្ថុរូប ដែលជាបសាទរូប។',
    aE: 'Cakkhu-pasāda and sota-pasāda are nipphanna-rūpa (produced matter), sabhāva-rūpa (with intrinsic characteristic), indriya-rūpa and vatthu-rūpa — they are pasāda rūpas.',
  },
  {
    qK: 'តើចក្ខុ និងសោត ដើរតួជាអារម្មណ៍អ្វី?',
    qE: 'As what objects do cakkhu and sota act?',
    aK: 'ចក្ខុ និងសោត (បសាទ) មិនមែនជាអារម្មណ៍ដោយខ្លួនឯងទេ ប៉ុន្តែ ចក្ខុបសាទ ជាទីប្រព្រឹត្តទទួល រូបារម្មណ៍ (អារម្មណ៍រូបដែលឃើញ) និង សោតបសាទ ជាទីប្រព្រឹត្តទទួល សទ្ធារម្មណ៍ (អារម្មណ៍សំឡេងដែលឮ)។',
    aE: 'Cakkhu and sota (the pasādas) are not themselves objects; rather, cakkhu-pasāda is the basis that receives the visible object (rūpārammaṇa) and sota-pasāda is the basis that receives the sound object (saddārammaṇa).',
  },
  {
    qK: 'តើរូបារម្មណ៍ មានន័យដូចម្តេច?',
    qE: 'What does rūpārammaṇa (visible object) mean?',
    aK: 'រូបារម្មណ៍ ប្រែថា អារម្មណ៍ជារូបដែលគប្បីឃើញ គឺ វណ្ណៈ (ពណ៌) និងអាការៈដែលជាទីតាំងនៃការឃើញរបស់ចក្ខុវិញ្ញាណ។',
    aE: 'Rūpārammaṇa means the visible object — the colour (vaṇṇa) and appearance that is the basis of seeing by eye-consciousness.',
  },
  {
    qK: 'តើសទ្ធារម្មណ៍ មានន័យដូចម្តេច?',
    qE: 'What does saddārammaṇa (sound object) mean?',
    aK: 'សទ្ធារម្មណ៍ ប្រែថា អារម្មណ៍ជាសំឡេងដែលគប្បីឮ គឺ សំឡេងដែលជាទីតាំងនៃការឮរបស់សោតវិញ្ញាណ។',
    aE: 'Saddārammaṇa means the sound object — the sound that is the basis of hearing by ear-consciousness.',
  },
  {
    qK: 'តើចក្ខុវិញ្ញាណ មានវត្ថុ និងអារម្មណ៍ដូចម្តេច?',
    qE: 'What are the base (vatthu) and object (ārammaṇa) of eye-consciousness?',
    aK: 'ចក្ខុវិញ្ញាណ មាន ចក្ខុបសាទ ជាទីតាំងប្រព្រឹត្ត និងជាទ្វារ ហើយមាន រូបារម្មណ៍ (វណ្ណៈ) ជាអារម្មណ៍។',
    aE: 'Eye-consciousness arises dependent on cakkhu-pasāda as its base and door, and takes the visible object (rūpārammaṇa — colour) as its object.',
  },
  {
    qK: 'តើចក្ខុបសាទ ជាបរមត្ថធម៌ ឬបញ្ញត្តិ?',
    qE: 'Is cakkhu-pasāda a paramattha dhamma or a paññatti?',
    aK: 'ចក្ខុបសាទ ជា បរមត្ថធម៌ (រូបបរមត្ថ) ព្រោះជាសភាវរូបដែលមានលក្ខណៈពិតដោយខ្លួនឯង ពុំមែនជាបញ្ញត្តិឡើយ។',
    aE: 'Cakkhu-pasāda is a paramattha dhamma (rūpa-paramattha), because it is a sabhāva-rūpa with its own real characteristic — not a concept (paññatti).',
  },
]
</script>
