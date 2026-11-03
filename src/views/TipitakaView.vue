<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៤៥ — ព្រះត្រៃបិដក ១១០ ភាគ', 'GATHA 45 — THE 110-VOLUME TIPITAKA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('រចនាសម្ព័ន្ធ & របៀបតែងនិពន្ធព្រះត្រៃបិដក', 'Structure & Literary Anatomy of the Tipitaka') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ព្រះត្រៃបិដក (បិដក ៣ ឬ កញ្ជើ ៣) គឺជាឃ្លាំងផ្ទុកនូវព្រះធម្មវិន័យទាំង ៨៤,០០០ ធម្មក្ខន្ធ របស់ព្រះសម្មាសម្ពុទ្ធ។ បិដកនីមួយៗមានគោលបំណង កម្រិតសច្ចៈ និង «របៀបតែងនិពន្ធខាងក្នុង» ខុសប្លែកគ្នាទាំងស្រុង ៖ វិន័យសរសេរបែបក្រមច្បាប់កាត់ក្តី, សុត្តន្តៈសរសេរបែបទេសនាសន្ទនានិងរឿងនិទាន, រីឯអភិធម្មសរសេរបែបទស្សនវិជ្ជាវិភាគចិត្តបរមត្ថសុទ្ធសាធ។ នៅក្នុងប្រទេសកម្ពុជា គណៈកម្មការប្រែព្រះត្រៃបិដកដឹកនាំដោយសម្ដេចព្រះសង្ឃរាជ ជួន ណាត បានសម្រេចការប្រែជាភាសាខ្មែរចំនួន ១១០ ភាគបរិបូណ៌។', 'The Tipitaka (Three Baskets) preserves the 84,000 teachings of the Buddha. Each basket possesses a distinct purpose, ontological depth, and internal literary methodology: the Vinaya reads as systematic case-law, the Sutta as narrative sermons and dialogues, and the Abhidhamma as rigorous phenomenological analysis. In Cambodia, the monumental translation project led by Supreme Patriarch Chuon Nath produced the complete 110-volume Khmer Tipitaka.') }}
    </p>

    <!-- Main View Switcher (Tabs) -->
    <div class="flex items-center gap-2 mt-8 flex-wrap">
      <button
        type="button"
        @click="mainTab = 'style'"
        class="h-10 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center gap-2 shadow-xs"
        :style="mainTab === 'style'
          ? { background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' }
          : { background: 'var(--bg-card)', color: 'var(--ink-muted)', borderColor: 'var(--border)' }"
      >
        <span>✍️</span>
        <span>{{ t('របៀបតែងនិពន្ធខាងក្នុងបិដកនីមួយៗ', 'How Each Basket is Written') }}</span>
      </button>

      <button
        type="button"
        @click="mainTab = 'matrix'"
        class="h-10 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center gap-2 shadow-xs"
        :style="mainTab === 'matrix'
          ? { background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' }
          : { background: 'var(--bg-card)', color: 'var(--ink-muted)', borderColor: 'var(--border)' }"
      >
        <span>⚖️</span>
        <span>{{ t('តារាងប្រៀបធៀបបិដកទាំង ៣', 'Comparative Matrix') }}</span>
      </button>

      <button
        type="button"
        @click="mainTab = 'volumes'"
        class="h-10 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center gap-2 shadow-xs"
        :style="mainTab === 'volumes'
          ? { background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' }
          : { background: 'var(--bg-card)', color: 'var(--ink-muted)', borderColor: 'var(--border)' }"
      >
        <span>📚</span>
        <span>{{ t('រចនាសម្ព័ន្ធ ១១០ ភាគ (ស្វែងរក)', '110 Volumes Explorer') }}</span>
      </button>
    </div>

    <!-- ========================================== -->
    <!-- TAB 1: HOW EACH BASKET IS WRITTEN (DEEP)   -->
    <!-- ========================================== -->
    <div v-if="mainTab === 'style'" class="mt-8 space-y-8">
      <!-- 3 Basket Selector Pills -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div
          v-for="b in pitakaStyles"
          :key="b.id"
          @click="selectedStyle = b.id"
          class="card-paper p-4 sm:p-5 rounded-xl border cursor-pointer transition-all flex items-center gap-3.5"
          :class="{ 'ring-2': selectedStyle === b.id }"
          :style="{
            borderColor: selectedStyle === b.id ? b.accentColor : 'var(--border)',
            ringColor: b.accentColor
          }"
        >
          <span class="text-3xl shrink-0">{{ b.icon }}</span>
          <div class="min-w-0">
            <h3 class="font-display text-sm sm:text-base font-bold" :style="{ color: 'var(--ink)' }">
              {{ t(b.kmTitle, b.enTitle) }}
            </h3>
            <p class="text-[11px] font-bold mt-0.5" :style="{ color: b.accentColor }">
              {{ t(b.kmSubtitle, b.enSubtitle) }}
            </p>
          </div>
        </div>
      </div>

      <!-- Active Basket Detailed Literary Anatomy -->
      <div class="card-paper p-6 md:p-8 rounded-2xl border border-l-4 transition-all" :style="{ borderLeftColor: currentStyleData.accentColor }">
        <div class="flex items-start justify-between gap-4 flex-wrap pb-5 border-b" :style="{ borderColor: 'var(--border)' }">
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold text-white shadow-xs" :style="{ background: currentStyleData.accentColor }">
                {{ currentStyleData.volumesCount }}
              </span>
              <span class="text-xs font-mono font-bold" :style="{ color: currentStyleData.accentColor }">
                {{ currentStyleData.paliTag }}
              </span>
            </div>
            <h3 class="font-display text-2xl sm:text-3xl font-bold mt-2" :style="{ color: 'var(--ink)' }">
              {{ t(currentStyleData.fullKmTitle, currentStyleData.fullEnTitle) }}
            </h3>
            <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
              {{ t(currentStyleData.coreThemeKm, currentStyleData.coreThemeEn) }}
            </p>
          </div>
          <span class="text-4xl sm:text-5xl">{{ currentStyleData.icon }}</span>
        </div>

        <!-- 1. The Literary Architecture / Writing Formula -->
        <div class="mt-6">
          <h4 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
            <span>⚙️</span>
            <span>{{ t('រចនាសម្ព័ន្ធរូបមន្តនៃការសរសេរ (Writing Structure & Formula)', 'Narrative Architecture & Formulation Pattern') }}</span>
          </h4>
          <p class="text-xs sm:text-sm mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t(currentStyleData.formulaIntroKm, currentStyleData.formulaIntroEn) }}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-4">
            <div
              v-for="(step, sIdx) in currentStyleData.steps"
              :key="sIdx"
              class="p-4 rounded-xl border flex flex-col justify-between"
              :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }"
            >
              <div>
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white shrink-0" :style="{ background: currentStyleData.accentColor }">
                    {{ sIdx + 1 }}
                  </span>
                  <strong class="text-xs sm:text-sm font-bold" :style="{ color: 'var(--ink)' }">
                    {{ t(step.titleKm, step.titleEn) }}
                  </strong>
                </div>
                <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
                  {{ t(step.descKm, step.descEn) }}
                </p>
              </div>
              <div v-if="step.formula" class="mt-3 p-2 rounded bg-[var(--bg-card)] border border-[var(--border)] font-mono text-[11px] text-amber-600 dark:text-amber-400">
                {{ step.formula }}
              </div>
            </div>
          </div>
        </div>

        <!-- 2. Authentic Excerpt from Canon (សំណេរគំរូជាក់ស្តែងពីបិដក) -->
        <div class="mt-8 p-5 sm:p-6 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
            <span class="text-xs font-bold tracking-wider uppercase flex items-center gap-1.5" :style="{ color: currentStyleData.accentColor }">
              <span>📜</span>
              <span>{{ t('សំណេរគំរូពិតជាក់ស្តែងដកស្រង់ពីបិដក', 'Authentic Canonical Excerpt') }}</span>
            </span>
            <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border)]" :style="{ color: 'var(--ink-muted)' }">
              {{ currentStyleData.sampleSource }}
            </span>
          </div>

          <blockquote class="p-3.5 rounded-lg border-l-4 font-serif text-xs sm:text-sm leading-loose italic" :style="{ borderColor: currentStyleData.accentColor, background: 'var(--bg-card)', color: 'var(--ink)' }">
            {{ t(currentStyleData.sampleQuoteKm, currentStyleData.sampleQuoteEn) }}
          </blockquote>

          <p class="text-xs mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            <strong class="text-amber-500">{{ t('វិភាគរបៀបសរសេរ ៖ ', 'Analytical Insight : ') }}</strong>
            {{ t(currentStyleData.sampleAnalysisKm, currentStyleData.sampleAnalysisEn) }}
          </p>
        </div>

        <!-- 3. Key Distinguishing Characteristics -->
        <div class="mt-8">
          <h4 class="font-display text-base font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
            <span>✨</span>
            <span>{{ t('លក្ខណៈពិសេសចម្បងនៃសំណេរ (Unique Stylistic Hallmarks)', 'Key Stylistic Hallmarks') }}</span>
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
            <div
              v-for="(trait, tIdx) in currentStyleData.traits"
              :key="tIdx"
              class="p-3.5 rounded-xl border"
              :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }"
            >
              <p class="font-bold text-xs" :style="{ color: currentStyleData.accentColor }">
                {{ t(trait.kmLabel, trait.enLabel) }}
              </p>
              <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
                {{ t(trait.kmDesc, trait.enDesc) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- TAB 2: COMPARATIVE MATRIX (TABLE)          -->
    <!-- ========================================== -->
    <div v-else-if="mainTab === 'matrix'" class="mt-8 space-y-6">
      <div class="card-paper p-5 sm:p-7 rounded-2xl border">
        <p class="chapter-label">{{ t('ការប្រៀបធៀបស៊ីជម្រៅ', 'IN-DEPTH COMPARISON') }}</p>
        <h3 class="font-display text-xl sm:text-2xl font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
          {{ t('តារាងប្រៀបធៀបរបៀបសរសេរនៃបិដកទាំង ៣', 'Comparative Matrix of the Three Baskets') }}
        </h3>
        <p class="text-xs sm:text-sm mt-1 mb-5" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ប្រៀបធៀបភាពខុសគ្នារវាងទម្រង់សំណេរ កម្រិតសច្ចៈ ភាសា និងគោលដៅនៃព្រះត្រៃបិដកនីមួយៗ ៖', 'Side-by-side comparison of literary genre, ontological level, tone, and pedagogical objective:') }}
        </p>

        <!-- Overflow wrapper for smooth mobile scrolling -->
        <div class="overflow-x-auto -mx-2 sm:mx-0">
          <table class="w-full text-left text-xs border-collapse min-w-[620px]">
            <thead>
              <tr class="border-b" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }">
                <th class="p-3 font-bold uppercase tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('ចំណុចប្រៀបធៀប', 'Dimension') }}</th>
                <th class="p-3 font-bold text-amber-500 uppercase tracking-wider">{{ t('វិនយបិដក (១៣ ភាគ)', 'Vinaya (13 Vols)') }}</th>
                <th class="p-3 font-bold text-sky-500 uppercase tracking-wider">{{ t('សុត្តន្តបិដក (៦៤ ភាគ)', 'Sutta (64 Vols)') }}</th>
                <th class="p-3 font-bold text-emerald-500 uppercase tracking-wider">{{ t('អភិធម្មបិដក (៣៣ ភាគ)', 'Abhidhamma (33 Vols)') }}</th>
              </tr>
            </thead>
            <tbody class="divide-y" :style="{ borderColor: 'var(--border)' }">
              <tr v-for="(row, rIdx) in matrixRows" :key="rIdx" class="hover:bg-amber-500/5 transition">
                <td class="p-3 font-bold align-top" :style="{ color: 'var(--ink)' }">{{ t(row.dimensionKm, row.dimensionEn) }}</td>
                <td class="p-3 align-top leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(row.vinayaKm, row.vinayaEn) }}</td>
                <td class="p-3 align-top leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(row.suttaKm, row.suttaEn) }}</td>
                <td class="p-3 align-top leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(row.abhidhammaKm, row.abhidhammaEn) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- TAB 3: 110 VOLUMES EXPLORER & SEARCH       -->
    <!-- ========================================== -->
    <div v-else class="mt-8 space-y-6">
      <!-- 3 Baskets Overview Stats -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div
          class="card-paper p-5 rounded-xl border text-center cursor-pointer transition-all"
          :class="{ 'ring-2 ring-amber-500': activeBasket === 'vinaya' }"
          @click="activeBasket = 'vinaya'"
        >
          <span class="text-2xl text-amber-500">📜</span>
          <h3 class="font-display text-lg font-bold mt-2" :style="{ color: 'var(--ink)' }">{{ t('វិនយបិដក', 'Vinaya Pitaka') }}</h3>
          <p class="font-display text-2xl font-black text-amber-500 my-1">១៣ <span class="text-xs font-normal text-stone-500">ភាគ</span></p>
          <p class="text-[11px] text-stone-500">{{ t('ភាគ ០១ ដល់ ១៣ (វិន័យ និងសីលសង្ឃ)', 'Vols 01–13 (Monastic Discipline)') }}</p>
        </div>

        <div
          class="card-paper p-5 rounded-xl border text-center cursor-pointer transition-all"
          :class="{ 'ring-2 ring-sky-500': activeBasket === 'sutta' }"
          @click="activeBasket = 'sutta'"
        >
          <span class="text-2xl text-sky-500">📖</span>
          <h3 class="font-display text-lg font-bold mt-2" :style="{ color: 'var(--ink)' }">{{ t('សុត្តន្តបិដក', 'Sutta Pitaka') }}</h3>
          <p class="font-display text-2xl font-black text-sky-500 my-1">៦៤ <span class="text-xs font-normal text-stone-500">ភាគ</span></p>
          <p class="text-[11px] text-stone-500">{{ t('ភាគ ១៤ ដល់ ៧៧ (ព្រះសូត្រ ៥ និកាយ)', 'Vols 14–77 (Discourses & Parables)') }}</p>
        </div>

        <div
          class="card-paper p-5 rounded-xl border text-center cursor-pointer transition-all"
          :class="{ 'ring-2 ring-emerald-500': activeBasket === 'abhidhamma' }"
          @click="activeBasket = 'abhidhamma'"
        >
          <span class="text-2xl text-emerald-500">🧠</span>
          <h3 class="font-display text-lg font-bold mt-2" :style="{ color: 'var(--ink)' }">{{ t('អភិធម្មបិដក', 'Abhidhamma Pitaka') }}</h3>
          <p class="font-display text-2xl font-black text-emerald-500 my-1">៣៣ <span class="text-xs font-normal text-stone-500">ភាគ</span></p>
          <p class="text-[11px] text-stone-500">{{ t('ភាគ ៧៨ ដល់ ១១០ (៧ មហាគម្ពីរ)', 'Vols 78–110 (Ultimate Analysis)') }}</p>
        </div>
      </div>

      <!-- Search & Filter Controls -->
      <div class="card-paper p-4 sm:p-5">
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }">
          <span class="text-sm opacity-60">🔍</span>
          <input
            v-model="searchQuery"
            type="text"
            :placeholder="t('ស្វែងរកភាគ ឬឈ្មោះគម្ពីរ (ឧ. ភាគ ៥៤, ទីឃនិកាយ, បដ្ឋាន, បារាជិក)...', 'Search volume or title (e.g. 54, Digha, Patthana)...')"
            class="w-full bg-transparent border-none text-xs sm:text-sm focus:outline-none"
            :style="{ color: 'var(--ink)' }"
          />
          <button
            v-if="searchQuery"
            type="button"
            @click="searchQuery = ''"
            class="text-xs px-2 py-1 rounded bg-stone-200 dark:bg-stone-700 font-bold"
          >
            ✕
          </button>
        </div>

        <!-- Filter tabs -->
        <div class="flex items-center gap-2 mt-3 flex-wrap">
          <button
            v-for="b in filterTabs"
            :key="b.id"
            @click="activeBasket = b.id"
            class="h-8 px-3 rounded-lg text-xs font-bold border transition cursor-pointer"
            :style="activeBasket === b.id
              ? { background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' }
              : { background: 'var(--bg-card)', color: 'var(--ink-muted)', borderColor: 'var(--border)' }"
          >
            {{ t(b.km, b.en) }}
          </button>
        </div>
      </div>

      <!-- Volumes List -->
      <div class="space-y-3">
        <div
          v-for="v in filteredVolumes"
          :key="v.vol"
          class="card-paper p-4 sm:p-5 rounded-xl border transition-all"
        >
          <div class="flex items-start justify-between gap-3 flex-wrap">
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2 flex-wrap">
                <span
                  class="px-2 py-0.5 rounded text-[11px] font-mono font-bold"
                  :class="getBasketBadgeClass(v.basket)"
                >
                  {{ v.vol }}
                </span>
                <span class="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded border" :style="{ borderColor: 'var(--border)', color: 'var(--ink-faint)' }">
                  {{ v.group }}
                </span>
              </div>
              <h4 class="font-display text-base sm:text-lg font-bold mt-2" :style="{ color: 'var(--ink)' }">
                {{ t(v.titleKm, v.titleEn) }}
              </h4>
              <p class="text-xs sm:text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
                {{ t(v.descKm, v.descEn) }}
              </p>
            </div>
            <div class="text-right shrink-0">
              <span class="text-xs font-mono font-bold opacity-60">បិដកខ្មែរ</span>
            </div>
          </div>
        </div>

        <div v-if="filteredVolumes.length === 0" class="card-paper p-10 text-center">
          <p class="text-stone-500 text-sm">{{ t('រកមិនឃើញភាគដែលត្រូវនឹងការស្វែងរកឡើយ', 'No volumes match your search query') }}</p>
        </div>
      </div>
    </div>

    <!-- History of Cambodian Tipitaka -->
    <div class="card-paper p-6 md:p-8 mt-10 border-t-4" :style="{ borderTopColor: 'var(--accent)' }">
      <p class="chapter-label">{{ t('ប្រវត្តិសាស្ត្រ', 'HISTORICAL CONTEXT') }}</p>
      <h3 class="font-display text-xl mt-1.5" :style="{ color: 'var(--ink)' }">
        {{ t('ប្រវត្តិនៃការប្រែព្រះត្រៃបិដកខ្មែរ ១១០ ភាគ (១៩២៩ - ១៩៦៩)', 'The Historic 40-Year Translation of the Khmer Tipitaka') }}
      </h3>
      <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('កិច្ចការប្រែគម្ពីរព្រះត្រៃបិដកជាភាសាខ្មែរ បានចាប់ផ្តើមជាផ្លូវការនៅថ្ងៃទី ១៤ ខែធ្នូ ឆ្នាំ ១៩២៩ ក្រោមព្រះរាជកិច្ចឧបត្ថម្ភ និងការបង្កើតពុទ្ធសាសនបណ្ឌិត្យ។ សម្តេចព្រះសង្ឃរាជ ជួន ណាត (កាលនៅជាព្រះគ្រូសង្ឃសត្ថា) ព្រមទាំងសម្តេចព្រះសង្ឃរាជ ហួត តាត និងគណៈកម្មការបណ្ឌិត្យសង្ឃ បានលះបង់កម្លាំងកាយចិត្តស្រាវជ្រាវផ្ទៀងផ្ទាត់អត្ថបទបាលីរហូតដល់បញ្ចប់ការបោះពុម្ពផ្សាយទាំងស្រុងក្នុងឆ្នាំ ១៩៦៩ (ចំណាយពេលអស់ ៤០ ឆ្នាំគត់)។ នេះជាកេរដំណែលវប្បធម៌ និងដួងព្រលឹងព្រះពុទ្ធសាសនាដ៏ឧត្តុង្គឧត្តមបំផុតរបស់ប្រជាជាតិខ្មែរ។', 'The translation began on December 14, 1929 under the patronage of the Buddhist Institute. Supreme Patriarch Chuon Nath, Supreme Patriarch Huot Tath, and scholar monks dedicated 40 full years of meticulous linguistic verification until complete publication in 1969. It stands as the crowning intellectual and spiritual treasure of the Cambodian people.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const mainTab = ref('style')
const selectedStyle = ref('vinaya')
const activeBasket = ref('all')
const searchQuery = ref('')

const filterTabs = [
  { id: 'all', km: 'ទាំងអស់ (១១០ ភាគ)', en: 'All 110 Volumes' },
  { id: 'vinaya', km: 'វិនយបិដក (១៣)', en: 'Vinaya (13)' },
  { id: 'sutta', km: 'សុត្តន្តបិដក (៦៤)', en: 'Sutta (64)' },
  { id: 'abhidhamma', km: 'អភិធម្មបិដក (៣៣)', en: 'Abhidhamma (33)' },
]

function getBasketBadgeClass(basket) {
  if (basket === 'vinaya') return 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30'
  if (basket === 'sutta') return 'bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/30'
  return 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
}

// ----------------------------------------------------------------------
// TAB 1: DETAILED LITERARY & WRITING STYLES OF THE 3 BASKETS
// ----------------------------------------------------------------------
const pitakaStyles = [
  {
    id: 'vinaya',
    icon: '📜',
    accentColor: '#d97706',
    kmTitle: 'វិនយបិដក',
    enTitle: 'Vinaya Piṭaka',
    kmSubtitle: 'បែបក្រមច្បាប់ និងកាត់ក្តី',
    enSubtitle: 'Legal Code & Case Law',
    volumesCount: '១៣ ភាគ (បិដកខ្មែរ)',
    paliTag: 'VINAYA PITAKA',
    fullKmTitle: 'វិនយបិដក ៖ របៀបសរសេរបែបក្រមច្បាប់ និងនីតិវិធីតុលាការ',
    fullEnTitle: 'Vinaya Piṭaka: Jurisprudential Structure & Case-Law Precedents',
    coreThemeKm: 'ជាបណ្តុំនៃសិក្ខាបទ ២២៧ របស់ភិក្ខុ និង ៣១១ របស់ភិក្ខុនី បង្កើតឡើងដោយផ្អែកលើ «ករណីជាក់ស្តែង» ដែលកើតមានក្នុងសម័យពុទ្ធកាល។',
    coreThemeEn: 'Disciplinary code of 227 monk rules and 311 nun rules, established through empirical judicial cases during the Buddha’s ministry.',
    formulaIntroKm: 'រាល់ពេលបញ្ញត្តិសិក្ខាបទនីមួយៗ គម្ពីរវិន័យតែងប្រើរូបមន្តស្តង់ដារ ៥ ដំណាក់កាលយ៉ាងម៉ត់ចត់ ដូចច្បាប់ទំនើប ៖',
    formulaIntroEn: 'Every single vinaya rule follows a rigorous 5-stage legislative and jurisprudential formula:',
    steps: [
      {
        titleKm: '១. នទាន (Nidāna — សាច់រឿងដើមហេតុ)',
        titleEn: '1. Nidāna (Origin Story / Case Incident)',
        descKm: 'រៀបរាប់ដំណើរដើមទងពីទង្វើមិនគប្បីរបស់ភិក្ខុមួយរូប (ដូចជា ឆព្វគ្គិយ ឬសុទិន្ន) ដែលនាំឱ្យអ្នកស្រុក ឬភិក្ខុដទៃរិះគន់។',
        descEn: 'Sets the scene describing the inappropriate conduct by a specific monk that triggered public or monastic complaint.',
        formula: 'សមយំ ពុទ្ធោ ភគវា... (សម័យមួយ ព្រះមានព្រះភាគ ទ្រង់គង់នៅ...)'
      },
      {
        titleKm: '២. ការកោះប្រជុំ & សាកសួរចំពោះមុខ (Monastic Inquiry)',
        titleEn: '2. Formal Inquiry (Examination of the Accused)',
        descKm: 'ព្រះពុទ្ធទ្រង់ត្រាស់ឱ្យប្រជុំសង្ឃ រួចសួរចំៗចំពោះមុខភិក្ខុនោះដើម្បីសច្ចភាព ៖ «តើម្នាលភិក្ខុ ពិតជាអ្នកបានប្រព្រឹត្តទង្វើនេះមែនឬ?»។',
        descEn: 'The Buddha convenes the assembly and questions the accused monk directly to establish verifiable factual confession.',
        formula: 'សច្ចំ កិរ ត្វំ ភិក្ខុ... (តើពិតមែនឬ ដែលអ្នកបានធ្វើដូច្នេះ?)'
      },
      {
        titleKm: '៣. ការតិះដៀល & បញ្ញត្តិសិក្ខាបទ (Legislative Enactment)',
        titleEn: '3. Reprimand & Rule Promulgation',
        descKm: 'ព្រះពុទ្ធទ្រង់តិះដៀលទង្វើនោះថាមិនសមគួរ មិននាំមកនូវសេចក្តីជ្រះថ្លា រួចទ្រង់បញ្ញត្តិជាច្បាប់ច្បាស់លាស់សម្រាប់សង្ឃទូទៅ។',
        descEn: 'The Buddha rebukes the act as detrimental to faith and formally enacts the statutory prohibition with penalties.',
        formula: 'យោ បន ភិក្ខុ... (ភិក្ខុណាមួយ ប្រព្រឹត្តនូវ... ភិក្ខុនោះត្រូវអាបត្តិ...)'
      },
      {
        titleKm: '៤. បទភាជនីយ (Padabhājanīya — ការពន្យល់វាក្យសព្ទ)',
        titleEn: '4. Word-by-Word Statutory Commentary',
        descKm: 'ការពន្យល់អត្ថន័យនៃពាក្យនីមួយៗក្នុងច្បាប់យ៉ាងល្អិតល្អន់ (ពាក្យថា «ភិក្ខុ» សំដៅលើអ្នកណា, «ទ្រព្យ» កម្រិតណា, «ចេតនា» យ៉ាងណា)។',
        descEn: 'Microscopic analysis defining every single term in the text, defining scope of intent, boundary, and degree of offense.',
        formula: 'តត្ថ ភិក្ខូតិ... យំ ភិក្ខាតិ...'
      },
      {
        titleKm: '៥. អនាបត្តិ (Anāpatti — ករណីលើកលែងរួចផុតពីទោស)',
        titleEn: '5. Non-Offense Exceptions (Anāpatti)',
        descKm: 'បញ្ជាក់យ៉ាងម៉ត់ចត់នូវលក្ខខណ្ឌដែលភិក្ខុមិនត្រូវអាបត្តិ ដូចជា ៖ ភិក្ខុឆ្កួត (ឧម្មត្តកៈ), ភិក្ខុវង្វេងស្មារតី (ខិត្តចិត្តៈ), ឬអ្នកប្រព្រឹត្តដំបូង (អាទិកម្មិកៈ)។',
        descEn: 'Specifies explicit legal exceptions where the monk is entirely exempt from disciplinary infraction.',
        formula: 'អនាបត្តិ ឧម្មត្តកស្ស, ខិត្តចិត្តស្ស, អាទិកម្មិកស្ស...'
      }
    ],
    sampleSource: 'វិនយបិដក ភាគ ១ (បារាជិកកណ្ឌ)',
    sampleQuoteKm: '«សម័យនោះ ព្រះសម្មាសម្ពុទ្ធដ៏មានជោគ ទ្រង់គង់នៅវត្តជេតពន... លំដាប់នោះ ភិក្ខុសុទិន្ន... បានទៅសេពមេថុនធម្មជាមួយអតីតភរិយា... ព្រះមានព្រះភាគ ទ្រង់ត្រាស់សួរថា ៖ ម្នាលសុទិន្ន ឮថាអ្នកបានប្រព្រឹត្តមេថុនធម្ម ពិតមែនឬ? ភិក្ខុសុទិន្នក្រាបបង្គំទូលថា ៖ ពិតមែនហើយ ព្រះអង្គ!... ព្រះពុទ្ធទ្រង់បន្ទោស រួចទ្រង់បញ្ញត្តិសិក្ខាបទថា ៖ ភិក្ខុណាមួយ សេពមេថុនធម្ម ភិក្ខុនោះត្រូវអាបត្តិបារាជិក រកសំវាសគ្មានឡើយ... អនាបត្តិដល់ភិក្ខុឆ្កួត ភិក្ខុវង្វេងស្មារតី...»',
    sampleQuoteEn: '"At that time the Buddha was dwelling at Jetavana... then the venerable Sudinna committed sexual intercourse with his former wife... The Blessed One summoned him: Is it true, Sudinna, that you engaged in sexual intercourse? It is true, Lord... The Buddha rebuked him and enacted: Whosoever monk engages in sexual intercourse is defeated (Pārājika), no longer in communion... There is no offense for one who is insane, mentally deranged, or the first perpetrator..."',
    sampleAnalysisKm: 'នេះជាទម្រង់តុលាការ និងច្បាប់កាត់ក្តីសុទ្ធសាធ (Case Law)។ ការកាត់ទោសមិនផ្អែកលើការស្មានឡើយ ប៉ុន្តែផ្អែកលើអង្គហេតុ ភស្តុតាង និង «ចេតនា» (Criminal Intent) ជាធំ។ បើគ្មានចេតនា មិនត្រូវអាបត្តិឡើយ។',
    sampleAnalysisEn: 'Pure case-law jurisprudence: judgments rely upon concrete evidence, voluntary confession, and mens rea (intent). Without deliberate intent, no offense is incurred.',
    traits: [
      { kmLabel: 'ភាសាច្បាប់ច្បាស់ៗ', enLabel: 'Statutory Rigor', kmDesc: 'គ្មានការប្រើពាក្យប្រៀបធៀបកំណាព្យឡើយ គឺប្រើពាក្យកាត់សេចក្តី ម៉ឺងម៉ាត់ និងច្បាស់លាស់។', enDesc: 'Zero poetic ambiguity; dry, precise, unambiguous legal and judicial terminology.' },
      { kmLabel: 'ផ្អែកលើចេតនា', enLabel: 'Mens Rea (Intent)', kmDesc: 'គ្រប់សិក្ខាបទទាំងអស់ ពិនិត្យលើចេតនាជាគោល បើប្រព្រឹត្តដោយអចេតនា តែងរួចទោស។', enDesc: 'Judicial outcome hinges upon conscious mental intent rather than external accident.' },
      { kmLabel: 'ការលើកលែងទោស', enLabel: 'Clear Exemptions', kmDesc: 'មានចែងករណីលើកលែង (អនាបត្តិ) យ៉ាងច្បាស់លាស់ ការពារសង្ឃមិនឱ្យជាប់ទោសដោយអយុត្តិធម៌។', enDesc: 'Systematic inclusion of exceptions ensures fairness for the mentally ill and coerced.' }
    ]
  },
  {
    id: 'sutta',
    icon: '📖',
    accentColor: '#0284c7',
    kmTitle: 'សុត្តន្តបិដក',
    enTitle: 'Sutta Piṭaka',
    kmSubtitle: 'បែបទេសនា សន្ទនា និងរឿងនិទាន',
    enSubtitle: 'Dialogues, Sermons & Parables',
    volumesCount: '៦៤ ភាគ (បិដកខ្មែរ)',
    paliTag: 'SUTTA PITAKA',
    fullKmTitle: 'សុត្តន្តបិដក ៖ របៀបសរសេរបែបទេសនា សន្ទនាសួរឆ្លើយ និងរឿងនិទាន',
    fullEnTitle: 'Sutta Piṭaka: Narrative Dialogues, Didactic Sermons & Allegories',
    coreThemeKm: 'ជាកម្រងព្រះធម្មទេសនាដែលព្រះពុទ្ធសម្ដែងទៅតាមចរិត និស្ស័យ និងកម្រិតយល់ដឹងរបស់អ្នកស្តាប់ ប្រើពាក្យសាមញ្ញ ឧបមាប្រៀបធៀប និងរឿងរ៉ាវរស់រវើក។',
    coreThemeEn: 'Vast collection of tailored discourses adapted to the psychological disposition of diverse audiences, rich in similes, narratives, and poetic verses.',
    formulaIntroKm: 'ព្រះសូត្រស្ទើរតែទាំងអស់ តែងតែចាប់ផ្តើម និងបញ្ចប់ទៅតាមក្បួនប្រពៃណីរៀបរៀងដោយព្រះអានន្ទត្ថេរ ៖',
    formulaIntroEn: 'Virtually all suttas adhere to an iconic four-phase narrative framework recorded by Venerable Ānanda:',
    steps: [
      {
        titleKm: '១. សេចក្តីផ្តើមប្រពៃណីរបស់ព្រះអានន្ទ (Opening Formula)',
        titleEn: '1. Traditional Opening Attestation',
        descKm: 'ព្រះអានន្ទជាអ្នករៀបរាប់កាលបរិច្ឆេទ ទីកន្លែងគង់នៅ (វត្តជេតពន, វត្តវេឡុវ័ន...) និងអ្នកចូលរួមស្តាប់ ដើម្បីបញ្ជាក់ភាពពិតនៃព្រឹត្តិការណ៍។',
        descEn: 'Venerable Ānanda’s canonical eyewitness attestation establishing historical setting, location, and attending audience.',
        formula: 'ឯវម្មេ សុតំ ឯកំ សមយំ ភគវា... (ខ្ញុំបានស្តាប់មកយ៉ាងនេះ ៖ សម័យមួយ ព្រះមានព្រះភាគ...)'
      },
      {
        titleKm: '២. កាលៈទេសៈ & គូសន្ទនា (The Occasion & Dialogue)',
        titleEn: '2. Provocation & Dialectic Encounter',
        descKm: 'មានបុគ្គលចូលមកគាល់សាកសួរ (ស្តេច, ព្រាហ្មណ៍, ទេវតា, ឬកសិករ) ឬព្រះពុទ្ធទ្រង់ផ្តើមត្រាស់ហៅភិក្ខុទាំងឡាយដើម្បីសម្ដែងធម៌។',
        descEn: 'A questioner (king, ascetic, deity, or farmer) approaches with an existential inquiry, or the Buddha addresses the monks directly.',
        formula: 'ភិក្ខវេ! ... ភទន្តេតិ តេ ភិក្ខូ... (ម្នាលភិក្ខុទាំងឡាយ!... ព្រះករុណា ព្រះអង្គ!)'
      },
      {
        titleKm: '៣. វិធីសាស្ត្រទេសនាសម្បូរបែប (Upamā & Exposition)',
        titleEn: '3. Diverse Didactic Exposition & Similes',
        descKm: 'ព្រះពុទ្ធទ្រង់ប្រើ ឧបមា (Similes) ដូចជា ឧបមាព្រួញបំពុលពិស, ឧបមាក្បូនឆ្លងទឹក, ឧបមាភ្លើងឆេះក្បាល និងប្រើកំណាព្យគាថាពិរោះរណ្តំ។',
        descEn: 'The Master deploys brilliant similes (poisoned arrow, raft, burning house), analytical breakdowns, and concludes with poetic gāthās.',
        formula: 'សេយ្យថាបិ... ឯវមេវ ខោ... (ប្រៀបដូចជា... យ៉ាងណាមិញ...)'
      },
      {
        titleKm: '៤. សេចក្តីបញ្ចប់ & ការបូជាសទ្ធា (The Culmination)',
        titleEn: '4. Joyful Realization & Surrender',
        descKm: 'អ្នកស្តាប់មានសេចក្តីជ្រះថ្លា ឧទានសរសើរព្រះធម៌ ដូចជាការផ្ងាររបស់ដែលផ្កាប់ បើកបង្ហាញរបស់ដែលកំបាំង រួចសុំដល់ព្រះរតនត្រ័យជាទីពឹង។',
        descEn: 'Listeners rejoice, marveling that the Dhamma is like turning upright what was overturned, and profess lifelong refuge or attain awakening.',
        formula: 'អភិក្កន្តំ ភន្តេ! អភិក្កន្តំ ភន្តេ! (ពិរោះណាស់ ព្រះអង្គ! ពិរោះណាស់ ព្រះអង្គ!)'
      }
    ],
    sampleSource: 'សុត្តន្តបិដក សំយុត្តនិកាយ (ធម្មចក្កប្បវត្តនសូត្រ)',
    sampleQuoteKm: '«ខ្ញុំបានស្តាប់មកយ៉ាងនេះ ៖ សម័យមួយ ព្រះមានព្រះភាគ ទ្រង់គង់នៅឥសិបតនមិគទាយវ័ន ក្បែរក្រុងពារាណសី... ក្នុងទីនោះឯង ព្រះអង្គទ្រង់ត្រាស់ហៅបញ្ចវគ្គិយភិក្ខុថា ៖ ម្នាលភិក្ខុទាំងឡាយ អន្តធម៌ (ផ្លូវលាមក) ពីរបែបនេះ បព្វជិតមិនគប្បីសេពគប់ឡើយ... តថាគតបានត្រាស់ដឹងមជ្ឈិមាបដិបទា គឺអរិយមគ្គប្រកបដោយអង្គ ៨ នេះឯង... លុះព្រះពុទ្ធសម្ដែងចប់ ធម្មចក្ខុដ៏បរិសុទ្ធ បានកើតឡើងដល់ព្រះអញ្ញាកោណ្ឌញ្ញ...»',
    sampleQuoteEn: '"Thus have I heard: On one occasion the Blessed One was residing in the Deer Park at Isipatana near Benares... The Buddha addressed the group of five monks: Monks, these two extremes ought not to be cultivated by one who has gone forth... The Tathāgata has realized the Middle Way, namely the Noble Eightfold Path... When this discourse was spoken, the stainless eye of Dhamma arose in Venerable Koṇḍañña..."',
    sampleAnalysisKm: 'រចនាប័ទ្មសុត្តន្តបិដក ជាអក្សរសិល្ប៍រស់រវើក ពោរពេញដោយអារម្មណ៍ មនុស្សធម៌ និងបរិយាកាសជាក់ស្តែង។ ព្រះពុទ្ធប្រើ «វោហារសច្ចៈ» គឺនិយាយតាមភាសាមនុស្សធម្មតា (មនុស្ស, ព្រាហ្មណ៍, ស្តេច, សត្វ, ដើមឈើ) ដើម្បីងាយស្រួលយល់ និងអនុវត្ត។',
    sampleAnalysisEn: 'Narrative and deeply humanistic. Employs conventional truth (Vohāra-sacca) speaking of people, kings, ascetics, and animals to connect immediately with human experience.',
    traits: [
      { kmLabel: 'វោហារសច្ចៈ ងាយយល់', enLabel: 'Conventional Truth', kmDesc: 'និយាយតាមភាសាសាមញ្ញ ងាយយល់ សមស្របនឹងមនុស្សគ្រប់វណ្ណៈ។', enDesc: 'Communicated via accessible colloquial metaphors intelligible to all strata of society.' },
      { kmLabel: 'ឧបមាប្រៀបធៀបដ៏រស់រវើក', enLabel: 'Masterful Similes', kmDesc: 'ពោរពេញដោយឧបមាដ៏អស្ចារ្យ (ក្បូន, ព្រួញ, អំបិលមួយក្តាប់ក្នុងទន្លេ...) ធ្វើឱ្យធម៌ជ្រៅក្លាយជាងាយ។', enDesc: 'Hundreds of evocative similes make profound philosophical truths immediately practical.' },
      { kmLabel: 'កំណាព្យគាថាពិរោះរណ្តំ', enLabel: 'Lyrical Verses (Gāthā)', kmDesc: 'បញ្ចប់ដោយពាក្យកាព្យចួនពិរោះ ជួយឱ្យអ្នកស្តាប់ងាយទន្ទេញចាំទុកក្នុងចិត្ត។', enDesc: 'Metrical poetry summarizes doctrinal points for ease of oral memorization.' }
    ]
  },
  {
    id: 'abhidhamma',
    icon: '🧠',
    accentColor: '#10b981',
    kmTitle: 'អភិធម្មបិដក',
    enTitle: 'Abhidhamma Piṭaka',
    kmSubtitle: 'បែបបរមត្ថវិភាគ និងចិត្តវិទ្យាសុទ្ធសាធ',
    enSubtitle: 'Phenomenological Matrix & Ultimate Reality',
    volumesCount: '៣៣ ភាគ (បិដកខ្មែរ)',
    paliTag: 'ABHIDHAMMA PITAKA',
    fullKmTitle: 'អភិធម្មបិដក ៖ របៀបសរសេរបែបទស្សនវិជ្ជាបរមត្ថ និងចិត្តវិទ្យាវិភាគឥតមានបុគ្គល',
    fullEnTitle: 'Abhidhamma Piṭaka: Impersonal Phenomenological Axioms & Relational Matrix',
    coreThemeKm: 'ជាការវិភាគទម្លុះទម្លាយធម្មជាតិពិតកម្រិតបរមត្ថ (ចិត្ត ចេតសិក រូប និព្វាន) គ្មានរឿងរ៉ាវ គ្មានទីកន្លែង គ្មានមនុស្ស ឬសត្វឡើយ ដូចជាវិទ្យាសាស្ត្រ និងគណិតវិទ្យាផ្លូវចិត្ត។',
    coreThemeEn: 'Ultimate analysis of reality (Citta, Cetasika, Rūpa, Nibbāna) stripped entirely of persons, stories, or worldly narratives; functioning like pure psychology and spiritual mathematics.',
    formulaIntroKm: 'អភិធម្មគ្មាន «សម័យមួយ» ឬ «ខ្ញុំបានស្តាប់» ឡើយ។ សំណេរទាំងអស់រៀបចំតាមប្រព័ន្ធតារាង និងរូបមន្តគណិតវិទ្យាដ៏អស្ចារ្យ ៖',
    formulaIntroEn: 'The Abhidhamma dispenses entirely with origin narratives. It operates strictly through formal axiomatic indices and relational matrices:',
    steps: [
      {
        titleKm: '១. គ្មានរឿងរ៉ាវ គ្មានមនុស្ស (Impersonal Axioms)',
        titleEn: '1. Total Absence of Persons & Stories',
        descKm: 'មិននិយាយពី «ខ្ញុំ», «អ្នក», «បុរស», «ស្ត្រី» ឬ «សត្វ» ឡើយ។ និយាយសុទ្ធតែជា «បរមត្ថធម៌» (ចិត្ត ៨៩, ចេតសិក ៥២, រូប ២៨, និព្វាន ១)។',
        descEn: 'Zero references to conventional beings, genders, or events. Only ultimate realities (Paramattha Dhamma) are analyzed.',
        formula: 'កុសលា ធម្មា, អកុសលា ធម្មា, អព្យាកតា ធម្មា...'
      },
      {
        titleKm: '២. ប្រព័ន្ធ «មាតិកា» តិកៈ និង ទុកៈ (The Matrix Classification)',
        titleEn: '2. The Matrix Structure (Tika & Duka Mātikā)',
        descKm: 'ចាប់ផ្តើមដោយក្បាលមាតិកា ដូចជា តិកមាតិកា ២២ ពួក (ធម៌ពួក ៣) និង ទុកមាតិកា ១០០ ពួក (ធម៌ពួក ២) រួចបំបែករាល់បាតុភូតទាំងអស់ក្នុងលោកចូលក្នុងក្រឡានោះ។',
        descEn: 'Operates via 22 Triads (Tika) and 100 Dyads (Duka), mapping every conceivable mental and physical phenomenon into systemic matrices.',
        formula: 'តិកមាតិកា ២២ · ទុកមាតិកា ១០០'
      },
      {
        titleKm: '៣. តក្កវិទ្យាសួរដេញដោលជាគូៗ (Dialectical Pairs in Yamaka)',
        titleEn: '3. Rigorous Dialectical Pairs (Yamaka)',
        descKm: 'ប្រើតក្កវិជ្ជាស្រាវជ្រាវសួរឆ្លើយបកត្រឡប់ចុះឡើងជាគូៗ ៖ «តើរូបទាំងអស់ សុទ្ធតែជារូបក្ខន្ធមែនឬ? រីឯរូបក្ខន្ធទាំងអស់ សុទ្ធតែជារូបមែនឬ?»។',
        descEn: 'Exhaustive logical testing by pairs: "Are all matters physical aggregates? And are all physical aggregates matter?" leaving zero logical loopholes.',
        formula: 'យំ រូបំ សព្ពំ តំ រូបក្ខន្ធោតិ? យោ វា បន...'
      },
      {
        titleKm: '៤. បណ្តាញហេតុបច្ច័យ ២៤ (Infinite Network in Paṭṭhāna)',
        titleEn: '4. The 24 Conditional Network (Paṭṭhāna)',
        descKm: 'ក្នុងគម្ពីរបដ្ឋាន (១៩ ភាគ) វិភាគពីរបៀបដែលបាតុភូតមួយ ទាក់ទងទៅបាតុភូតមួយទៀតតាមបច្ច័យ ២៤ (ដូចជា ហេតុបច្ច័យ, អារម្មណបច្ច័យ...) គ្មានទីបញ្ចប់។',
        descEn: 'In the 19 volumes of Paṭṭhāna, reality is modeled as an infinite multidirectional nexus governed by 24 causal conditions.',
        formula: 'ហេតុបច្ចយោ, អារម្មណបច្ចយោ, អធិបតិបច្ចយោ...'
      }
    ],
    sampleSource: 'អភិធម្មបិដក ភាគ ៧៨ (ធម្មសង្គណី) & ភាគ ៩២ (បដ្ឋាន)',
    sampleQuoteKm: '«កុសលា ធម្មា, អកុសលា ធម្មា, អព្យាកតា ធម្មា... កតមេ ធម្មា កុសលា? យស្មឹ សមយេ កាមាវចរំ កុសលំ ចិត្តំ ឧប្បន្នំ ហោតិ សោមនស្សសហគតំ ញាណសម្បយុត្តំ... តស្មឹ សមយេ ផស្សោ ហោតិ, វេទនា ហោតិ, សញ្ញា ហោតិ, ចេតនា ហោតិ, ចិត្តំ ហោតិ... ឥមេ ធម្មា កុសលា...»',
    sampleQuoteEn: '"Wholesome states, unwholesome states, indeterminate states... Which states are wholesome? At whatever time a wholesome consciousness belonging to the sense-sphere has arisen, accompanied by joy, associated with knowledge... at that time there is contact, feeling, perception, volition, consciousness... these states are wholesome..."',
    sampleAnalysisKm: 'នេះជាទម្រង់វិទ្យាសាស្ត្រចិត្តវិទ្យាសុទ្ធសាធ (Pure Psychology)។ គ្មានការនិទានរឿង គ្មានអារម្មណ៍ផ្ទាល់ខ្លួន គឺរៀបរាប់កាតាឡុកនៃ «ចេតសិក» និង «ចិត្ត» ដែលកំពុងកើតឡើងដំណាលគ្នាក្នុងខណៈចិត្តនីមួយៗ ដូចការវិភាគសមាសធាតុគីមី ឬកូដកុំព្យូទ័រ។',
    sampleAnalysisEn: 'Pure spiritual computing and psychological taxonomy. Consciousness is resolved into discrete mental factors (Cetasika) co-arising at that micro-instant, free from subjective embellishment.',
    traits: [
      { kmLabel: 'បរមត្ថសច្ចៈ សុទ្ធសាធ', enLabel: 'Paramattha Sacca', kmDesc: 'មិននិយាយពីមនុស្ស សត្វឡើយ គឺនិយាយតែពីការពិតកម្រិតបរមត្ថ (ចិត្ត ចេតសិក រូប និព្វាន)។', enDesc: 'Completely transcends conventional fictions; describes pure existential data points.' },
      { kmLabel: 'គណិតវិទ្យានៃផ្លូវចិត្ត', enLabel: 'Mental Mathematics', kmDesc: 'វិភាគការផ្សំគ្នានៃចិត្ត ៨៩ និងចេតសិក ៥២ យ៉ាងម៉ត់ចត់ ដូចជារូបមន្តគណិតវិទ្យា។', enDesc: 'Calculates combinatorial permutations of 89 cittas and 52 cetasikas with algebraic precision.' },
      { kmLabel: 'បណ្តាញបច្ច័យ ២៤', enLabel: '24 Conditions (Paṭṭhāna)', kmDesc: 'ពន្យល់ពីច្បាប់ទំនាក់ទំនងនៃធម្មជាតិទាំងអស់ គ្មានអ្វីកើតឡើងដោយចៃដន្យឡើយ។', enDesc: 'The supreme doctrine that no phenomenon exists isolated; all are conditioned by the 24 Paccayas.' }
    ]
  }
]

const currentStyleData = computed(() => {
  return pitakaStyles.find(s => s.id === selectedStyle.value) || pitakaStyles[0]
})

// ----------------------------------------------------------------------
// TAB 2: COMPARATIVE MATRIX TABLE DATA
// ----------------------------------------------------------------------
const matrixRows = [
  {
    dimensionKm: 'ទម្រង់សំណេរ (Literary Genre)',
    dimensionEn: 'Literary Genre',
    vinayaKm: 'បែបក្រមច្បាប់ & កាត់ក្តី (Legal code & Case Law)',
    vinayaEn: 'Statutory Law & Case Jurisprudence',
    suttaKm: 'បែបទេសនា & សន្ទនារឿងនិទាន (Dialogues & Sermons)',
    suttaEn: 'Narrative Dialogues & Didactic Parables',
    abhidhammaKm: 'បែបវិភាគចិត្ត & តារាងបរមត្ថ (Phenomenological Matrix)',
    abhidhammaEn: 'Pure Phenomenological & Relational Matrix'
  },
  {
    dimensionKm: 'ពាក្យផ្តើមប្រពៃណី (Opening Formula)',
    dimensionEn: 'Traditional Opening',
    vinayaKm: '«សមយំ ពុទ្ធោ ភគវា...» (សម័យមួយ ព្រះមានព្រះភាគ...)',
    vinayaEn: '"At that time the Blessed One was dwelling..."',
    suttaKm: '«ឯវម្មេ សុតំ...» (ខ្ញុំបានស្តាប់មកយ៉ាងនេះ...)',
    suttaEn: '"Thus have I heard: on one occasion..."',
    abhidhammaKm: '«កុសលា ធម្មា, អកុសលា ធម្មា...» (គ្មានរឿងនិទានផ្តើមឡើយ)',
    abhidhammaEn: '"Wholesome states, unwholesome states..." (No story)'
  },
  {
    dimensionKm: 'តួអង្គក្នុងអត្ថបទ (Characters / Persons)',
    dimensionEn: 'Presence of Persons',
    vinayaKm: 'មាន (ភិក្ខុប្រព្រឹត្តខុស, ព្រះពុទ្ធសួរដេញដោល, សង្ឃ)',
    vinayaEn: 'Present (accused monks, Buddha examining, Sangha)',
    suttaKm: 'មាន (ស្តេច, ព្រាហ្មណ៍, ទេវតា, កសិករ, សត្វ...)',
    suttaEn: 'Vividly present (kings, brahmins, deities, farmers)',
    abhidhammaKm: 'គ្មានទាល់តែសោះ (គ្មានឈ្មោះមនុស្ស ឬសត្វឡើយ)',
    abhidhammaEn: 'Completely absent (zero persons, names, or beings)'
  },
  {
    dimensionKm: 'កម្រិតសច្ចៈ (Ontological Level)',
    dimensionEn: 'Level of Truth',
    vinayaKm: 'សម្មតិសច្ចៈ (វិន័យបញ្ញត្តិសម្រាប់សង្គមសង្ឃ)',
    vinayaEn: 'Sammuti-sacca (Conventional institutional rules)',
    suttaKm: 'សម្មតិសច្ចៈ (វោហារសច្ចៈ ងាយយល់)',
    suttaEn: 'Sammuti-sacca (Conventional didactic language)',
    abhidhammaKm: 'បរមត្ថសច្ចៈ (ការពិតកម្រិតបរមត្ថសុទ្ធសាធ)',
    abhidhammaEn: 'Paramattha-sacca (Ultimate, irreducible realities)'
  },
  {
    dimensionKm: 'ឧបករណ៍បង្រៀន (Instructional Tools)',
    dimensionEn: 'Instructional Devices',
    vinayaKm: 'បទបញ្ញត្តិ, បទភាជនីយ, អនាបត្តិ (ការលើកលែង)',
    vinayaEn: 'Statutory articles, word definitions, exceptions',
    suttaKm: 'ឧបមាប្រៀបធៀប, រឿងនិទានជាតក, កំណាព្យគាថា',
    suttaEn: 'Similes, allegories, Jātaka stories, poetic meters',
    abhidhammaKm: 'មាតិកា (តិកៈ-ទុកៈ), យមក (គូ), ២៤ បច្ច័យ',
    abhidhammaEn: 'Mātikā matrices, dialectical pairs, 24 conditions'
  },
  {
    dimensionKm: 'ភាសា និងរចនាប័ទ្ម (Linguistic Tone)',
    dimensionEn: 'Linguistic Tone',
    vinayaKm: 'ច្បាស់ៗ ម៉ឺងម៉ាត់ ផ្អែកលើចេតនា',
    vinayaEn: 'Judicial, authoritative, intent-focused',
    suttaKm: 'កក់ក្តៅ រស់រវើក ពិរោះរណ្តំ និងបត់បែនតាមអ្នកស្តាប់',
    suttaEn: 'Warm, vivid, accessible, psychologically adaptive',
    abhidhammaKm: 'អព្យាក្រឹត វិទ្យាសាស្ត្រ ដូចគណិតវិទ្យាផ្លូវចិត្ត',
    abhidhammaEn: 'Objective, clinical, computational, emotion-free'
  },
  {
    dimensionKm: 'គោលបំណងចម្បង (Primary Purpose)',
    dimensionEn: 'Primary Purpose',
    vinayaKm: 'ភាពបរិសុទ្ធនៃកាយវាចា & សណ្តាប់ធ្នាប់សង្ឃ',
    vinayaEn: 'Bodily and verbal purity; preservation of Sangha order',
    suttaKm: 'ការអប់រំចិត្ត, សីលធម៌រស់នៅ & សម្មាទិដ្ឋិ',
    suttaEn: 'Mental cultivation, day-to-day ethics, Right View',
    abhidhammaKm: 'ទម្លុះទម្លាយអវិជ្ជា យល់ឃើញសភាវធម៌ពិត ដើម្បីព្រះនិព្វាន',
    abhidhammaEn: 'Eradication of delusion; penetration of Ultimate Reality'
  }
]

// ----------------------------------------------------------------------
// TAB 3: 110 VOLUMES LIST DATA
// ----------------------------------------------------------------------
const volumes = [
  // Vinaya (1-13)
  { vol: 'ភាគ ០១', basket: 'vinaya', group: 'មហាវិភង្គ បឋមភាគ', titleKm: 'វិនយបិដក ភាគ ១ — បារាជិកកណ្ឌ', titleEn: 'Vinaya Vol 01 — Pārājika Kaṇḍa', descKm: 'សិក្ខាបទធ្ងន់បំផុតរបស់ភិក្ខុសង្ឃ ៤ ប្រការ (សេពមេថុន, លួចទ្រព្យ, សម្លាប់មនុស្ស, អួតឧត្តរិមនុស្សធម្ម)។', descEn: 'The 4 gravest offenses leading to immediate expulsion from the Sangha.' },
  { vol: 'ភាគ ០២', basket: 'vinaya', group: 'មហាវិភង្គ ទុតិយភាគ', titleKm: 'វិនយបិដក ភាគ ២ — សង្ឃាទិសេស', titleEn: 'Vinaya Vol 02 — Saṅghādisesa', descKm: 'សិក្ខាបទកម្រិតមធ្យម ១៣ ប្រការ អនិយត ២ និងនិស្សគ្គិយបាចិត្តិយ ៣០ ប្រការ។', descEn: 'The 13 offenses requiring formal Sangha meetings and 30 Nissaggiya rules.' },
  { vol: 'ភាគ ០៣', basket: 'vinaya', group: 'មហាវិភង្គ តតិយភាគ', titleKm: 'វិនយបិដក ភាគ ៣ — សុទ្ធិកបាចិត្តិយ', titleEn: 'Vinaya Vol 03 — Suddhika Pācittiya', descKm: 'សិក្ខាបទបាចិត្តិយសុទ្ធ ៩២ ប្រការ ដែលភិក្ខុសង្ឃត្រូវសំដែងទោស (អាបត្តិ)។', descEn: '92 Pācittiya rules requiring confession.' },
  { vol: 'ភាគ ០៤', basket: 'vinaya', group: 'មហាវិភង្គ ចតុត្ថភាគ', titleKm: 'វិនយបិដក ភាគ ៤ — បាដិទេសនីយៈ & សេក្ខិយវត្ត', titleEn: 'Vinaya Vol 04 — Pāṭidesanīya & Sekhiya', descKm: 'បាដិទេសនីយៈ ៤ និងសេក្ខិយវត្ត ៧៥ ប្រការ ស្តីពីសុជីវធម៌ របៀបឆាន់ ដើរ ឈរ អង្គុយ។', descEn: 'Rules of training for polite monastic demeanor and table manners.' },
  { vol: 'ភាគ ០៥', basket: 'vinaya', group: 'ភិក្ខុនីវិភង្គ', titleKm: 'វិនយបិដក ភាគ ៥ — ភិក្ខុនីវិភង្គ', titleEn: 'Vinaya Vol 05 — Bhikkhunī Vibhaṅga', descKm: 'សិក្ខាបទ ៣១១ ប្រការរបស់ភិក្ខុនីសង្ឃ និងគរុធម៌ ៨ ប្រការ។', descEn: 'Disciplinary code of 311 rules governing the order of Buddhist nuns.' },
  { vol: 'ភាគ ០៦-០៨', basket: 'vinaya', group: 'មហាវគ្គ', titleKm: 'វិនយបិដក ភាគ ៦-៨ — មហាវគ្គ', titleEn: 'Vinaya Vols 06-08 — Mahāvagga', descKm: 'ពិធីឧបសម្បទា កិច្ចឧបោសថ ការចូលវស្សា បវារណា កឋិនទាន និងកិច្ចសង្ឃកម្ម។', descEn: 'Ordination procedures, Uposatha observance, Rains Retreat, and Kathina.' },
  { vol: 'ភាគ ០៩-១១', basket: 'vinaya', group: 'ចុល្លវគ្គ', titleKm: 'វិនយបិដក ភាគ ៩-១១ — ចុល្លវគ្គ', titleEn: 'Vinaya Vols 09-11 — Cullavagga', descKm: 'វិន័យស្តីពីទីសេនាសនៈ ទំនាស់សង្ឃ កិច្ចសង្គាយនាលើកទី ១ និងទី ២។', descEn: 'Dwellings, schisms, and accounts of the 1st and 2nd Buddhist Councils.' },
  { vol: 'ភាគ ១២-១៣', basket: 'vinaya', group: 'បរិវារ', titleKm: 'វិនយបិដក ភាគ ១២-១៣ — បរិវារ', titleEn: 'Vinaya Vols 12-13 — Parivāra', descKm: 'សេចក្តីសង្ខេបវិភាគ និងសំណួរ-ចម្លើយក្បួនវិន័យទូទៅទាំងអស់។', descEn: 'Manual and catechism summarizing the entire Vinaya Piṭaka.' },

  // Sutta (14-77)
  { vol: 'ភាគ ១៤-១៩', basket: 'sutta', group: 'ទីឃនិកាយ (៦ ភាគ)', titleKm: 'សុត្តន្តបិដក — ទីឃនិកាយ (៣៤ សូត្រវែង)', titleEn: 'Sutta Vols 14-19 — Dīgha Nikāya (Long Discourses)', descKm: 'ព្រហ្មជាលសូត្រ (ទិដ្ឋិ ៦២), សាមញ្ញផលសូត្រ, មហាបរិនិព្វានសូត្រ, សិង្គាលកសូត្រ (ទិស ៦)។', descEn: '34 long discourses: Brahmajāla (62 views), Sāmaññaphala, Mahāparinibbāna, Sigālovāda.' },
  { vol: 'ភាគ ២០-២៨', basket: 'sutta', group: 'មជ្ឈិមនិកាយ (៩ ភាគ)', titleKm: 'សុត្តន្តបិដក — មជ្ឈិមនិកាយ (១៥២ សូត្រមធ្យម)', titleEn: 'Sutta Vols 20-28 — Majjhima Nikāya (Middle Discourses)', descKm: 'មូលបរិយាយសូត្រ, សតិបដ្ឋានសូត្រ, អានាបានសតិសូត្រ, រដ្ឋបាលសូត្រ, អង្គុលីមាលសូត្រ។', descEn: '152 medium discourses: Satipaṭṭhāna, Ānāpānasati, Aṅgulimāla, Raṭṭhapāla.' },
  { vol: 'ភាគ ២៩-៣៩', basket: 'sutta', group: 'សំយុត្តនិកាយ (១១ ភាគ)', titleKm: 'សុត្តន្តបិដក — សំយុត្តនិកាយ (៧,៧៦២ សូត្រប្រមូលជាក្រុម)', titleEn: 'Sutta Vols 29-39 — Saṁyutta Nikāya (Connected Discourses)', descKm: 'ធម្មចក្កប្បវត្តនសូត្រ, អនត្តលក្ខណសូត្រ, ខន្ធសំយុត្ត, ឥន្ទ្រិយសំយុត្ត, មគ្គសំយុត្ត។', descEn: 'Grouped by subject: Khandha, Salāyatana, Sacca (Four Truths), Magga (Path).' },
  { vol: 'ភាគ ៤០-៥១', basket: 'sutta', group: 'អង្គុត្ដរនិកាយ (១២ ភាគ)', titleKm: 'សុត្តន្តបិដក — អង្គុត្ដរនិកាយ (៩,៥៥៧ សូត្រតាមលំដាប់លេខ)', titleEn: 'Sutta Vols 40-51 — Aṅguttara Nikāya (Numbered Discourses)', descKm: 'ធម្មទេសនារៀបតាមចំនួនលេខ ពីធម៌ពួក ១ (ឯកកនិបាត) រហូតដល់ធម៌ពួក ១១ (ឯកាទសកនិបាត)។', descEn: 'Discourses arranged numerically from ones (Ekaka) to elevens (Ekādasaka).' },
  { vol: 'ភាគ ៥២-៧៧', basket: 'sutta', group: 'ខុទ្ទកនិកាយ (២៦ ភាគ)', titleKm: 'សុត្តន្តបិដក — ខុទ្ទកនិកាយ (គម្ពីរតូចៗ ១៥ មុខ)', titleEn: 'Sutta Vols 52-77 — Khuddaka Nikāya (Minor Collection)', descKm: 'ធម្មបទ (គាថា ២៦ វគ្គ), ឧទាន, ឥតិវុត្តក, សុត្តនិបាត, ថេរគាថា-ថេរីគាថា, ជាតក (រឿងអតីតជាតិ ៥៤៧)។', descEn: 'Dhammapada, Udāna, Itivuttaka, Sutta Nipāta, Theragāthā, and 547 Jātaka tales.' },

  // Abhidhamma (78-110)
  { vol: 'ភាគ ៧៨-៧៩', basket: 'abhidhamma', group: 'ធម្មសង្គណី', titleKm: 'អភិធម្មបិដក ភាគ ៧៨-៧៩ — ធម្មសង្គណី', titleEn: 'Abhidhamma Vols 78-79 — Dhammasaṅgaṇី', descKm: 'ការប្រមូលចាត់ក្រុមបរមត្ថធម៌ (កុសលធម៌, អកុសលធម៌, អព្យាកតធម៌) តាមមាតិកា ២២ តិកៈ និង ១០០ ទុកៈ។', descEn: 'Enumeration of phenomena into wholesome, unwholesome, and neutral realities.' },
  { vol: 'ភាគ ៨០-៨១', basket: 'abhidhamma', group: 'វិភង្គ', titleKm: 'អភិធម្មបិដក ភាគ ៨០-៨១ — វិភង្គ', titleEn: 'Abhidhamma Vols 80-81 — Vibhaṅga', descKm: 'ការបែងចែកពិស្តារលើ ខន្ធ ១៨, អាយតនៈ, ធាតុ, សច្ចៈ, ឥន្ទ្រិយ, បដិច្ចសមុប្បាទ។', descEn: '18 detailed treatises analyzing aggregates, sense bases, elements, and faculties.' },
  { vol: 'ភាគ ៨២', basket: 'abhidhamma', group: 'ធាតុកថា & បុគ្គលបញ្ញត្តិ', titleKm: 'អភិធម្មបិដក ភាគ ៨២ — ធាតុកថា & បុគ្គលបញ្ញត្តិ', titleEn: 'Abhidhamma Vol 82 — Dhātukathā & Puggalapaññatti', descKm: 'ការពិភាក្សាធាតុ និងការបញ្ញត្តិប្រភេទបុគ្គលផ្សេងៗក្នុងវដ្តសង្សារ។', descEn: 'Discourse on elements and classification of human personality types.' },
  { vol: 'ភាគ ៨៣-៨៤', basket: 'abhidhamma', group: 'កថាវត្ថុ', titleKm: 'អភិធម្មបិដក ភាគ ៨៣-៨៤ — កថាវត្ថុ', titleEn: 'Abhidhamma Vols 83-84 — Kathāvatthu', descKm: 'ការជជែកដេញដោលទស្សនវិជ្ជា ២១៨ ចំណុចដោយព្រះមោគ្គលីបុត្តតិស្សត្ថេរ កំឡុងសង្គាយនាលើកទី ៣។', descEn: '218 philosophical debate points refuting heresy at the 3rd Buddhist Council.' },
  { vol: 'ភាគ ៨៥-៩១', basket: 'abhidhamma', group: 'យមក (៧ ភាគ)', titleKm: 'អភិធម្មបិដក ភាគ ៨៥-៩១ — យមក (គម្ពីរគូ)', titleEn: 'Abhidhamma Vols 85-91 — Yamaka (The Book of Pairs)', descKm: 'ការប្រើតក្កវិទ្យាសួរឆ្លើយជាគូៗ ៖ មូលយមក, ខន្ធយមក, អាយតនយមក, ធាតុយមក, សច្ចយមក, ចិត្តយមក។', descEn: 'Rigorous Buddhist dialectic using pairs of questions resolving mental realities.' },
  { vol: 'ភាគ ៩២-១១០', basket: 'abhidhamma', group: 'មហាបដ្ឋាន (១៩ ភាគ)', titleKm: 'អភិធម្មបិដក ភាគ ៩២-១១០ — បដ្ឋាន (មហាគម្ពីរ ២៤ បច្ច័យ)', titleEn: 'Abhidhamma Vols 92-110 — Paṭṭhāna (The Great Book of Causal Relations)', descKm: 'គម្ពីរធំបំផុតក្នុងពុទ្ធសាសនា វិភាគលម្អិតអំពីច្បាប់ហេតុបច្ច័យ ២៤ (ហេតុបច្ចយោ, អារម្មណបច្ចយោ...) គ្មានទីបំផុត។', descEn: 'The supreme pinnacle of Abhidhamma: 24 conditional relations governing all phenomena.' }
]

const filteredVolumes = computed(() => {
  let list = volumes
  if (activeBasket.value !== 'all') {
    list = list.filter(v => v.basket === activeBasket.value)
  }
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return list
  return list.filter(v => {
    return v.vol.toLowerCase().includes(q) ||
      v.titleKm.toLowerCase().includes(q) ||
      v.titleEn.toLowerCase().includes(q) ||
      v.descKm.toLowerCase().includes(q) ||
      v.group.toLowerCase().includes(q)
  })
})
</script>
