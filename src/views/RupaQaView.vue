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
      {{ t('សំណួររូបបរមត្ថ ភាគ៤ — ៦ កុម្ភៈ ២០២៦', 'Rūpa Paramattha Part 4 — 6 Feb 2026') }}
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

import {
  qas, anindriyaQas, vatthuQas, ajjhattikaQas, dvaraQas,
  part1Qas, part2Qas, part3Qas, part4Qas, part5Qas, part6Qas, part7Qas, part9Qas
} from '../data/rupaQaData'
</script>
