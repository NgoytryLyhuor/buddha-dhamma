<template>
  <div class="fade-up">
    <!-- Chapter & Hero Header -->
    <div class="text-center max-w-2xl mx-auto pt-2 pb-4">
      <p class="chapter-label text-xs sm:text-sm tracking-[0.25em] uppercase font-bold text-amber-600 dark:text-amber-400">
        {{ t('សូត្រមាត្រា ០១ — ធម្មរតនៈ', 'GATHA 01 — THE DHAMMA SANCTUARY') }}
      </p>
      <h1 class="mt-2.5 font-display text-3xl sm:text-4xl md:text-5xl leading-tight font-bold" :style="{ color: 'var(--ink)' }">
        {{ t('ព្រះធម៌ ជាប្រភពនៃសេចក្តីស្ងប់ និងបញ្ញា', 'The Dhamma: Wellspring of Peace & Wisdom') }}
      </h1>
      <div class="ornament my-3 text-xl opacity-75">&#9784;</div>
      <p class="text-sm sm:text-base leading-relaxed px-2" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ពន្លឺនៃព្រះសម្មាសម្ពុទ្ធ បង្រៀនឱ្យស្គាល់ទុក្ខ ហេតុនៃទុក្ខ ការរលត់ទុក្ខ និងមាគ៌ាអនុវត្តជាក់ស្តែងក្នុងជីវិតប្រចាំថ្ងៃ។ រៀបចំឡើងយ៉ាងស្អាត និងមានលំដាប់លំដោយ ដើម្បីជាទីជ្រកកោនផ្លូវចិត្តរបស់មនុស្សគ្រប់រូប។', 'The Blessed One\'s timeless guidance on understanding suffering, its cessation, and the clear practical path to peace in everyday life. Curated cleanly as a serene sanctuary for the human mind.') }}
      </p>
    </div>

    <!-- Quick Action Launchpad (4 Essential Daily Destinations) -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-4">
      <router-link
        to="/timer"
        class="card-paper card-paper-hover p-3.5 sm:p-4 rounded-2xl flex flex-col items-center text-center group transition-all"
        :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)' }"
      >
        <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-xl mb-2 transition-transform group-hover:scale-110"
          :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          🧘
        </div>
        <strong class="text-xs sm:text-sm font-bold truncate max-w-full" :style="{ color: 'var(--ink)' }">
          {{ t('នាឡិកាសមាធិ', 'Meditation Timer') }}
        </strong>
        <span class="text-[11px] mt-0.5 line-clamp-1" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ដង្ហើម & ជួងស្ងប់', 'Breathing & Bell') }}
        </span>
      </router-link>

      <router-link
        to="/chanting"
        class="card-paper card-paper-hover p-3.5 sm:p-4 rounded-2xl flex flex-col items-center text-center group transition-all"
        :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)' }"
      >
        <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-xl mb-2 transition-transform group-hover:scale-110"
          :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          📿
        </div>
        <strong class="text-xs sm:text-sm font-bold truncate max-w-full" :style="{ color: 'var(--ink)' }">
          {{ t('ធម៌សូត្រប្រចាំថ្ងៃ', 'Daily Chanting') }}
        </strong>
        <span class="text-[11px] mt-0.5 line-clamp-1" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ថ្វាយបង្គំព្រះ & សីល', 'Homage & Precepts') }}
        </span>
      </router-link>

      <router-link
        to="/calendar"
        class="card-paper card-paper-hover p-3.5 sm:p-4 rounded-2xl flex flex-col items-center text-center group transition-all"
        :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)' }"
      >
        <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-xl mb-2 transition-transform group-hover:scale-110"
          :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          📅
        </div>
        <strong class="text-xs sm:text-sm font-bold truncate max-w-full" :style="{ color: 'var(--ink)' }">
          {{ t('ថ្ងៃសីល & បដិទិន', 'Sīl & Calendar') }}
        </strong>
        <span class="text-[11px] mt-0.5 line-clamp-1" :style="{ color: 'var(--ink-muted)' }">
          {{ t('៨/១៥ កើត-រោច', 'Lunar Holy Days') }}
        </span>
      </router-link>

      <router-link
        to="/my-gems"
        class="card-paper card-paper-hover p-3.5 sm:p-4 rounded-2xl flex flex-col items-center text-center group transition-all"
        :style="{ background: 'var(--bg-card)', border: '1.5px solid var(--accent)' }"
      >
        <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center text-xl mb-2 transition-transform group-hover:scale-110"
          :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          💎
        </div>
        <strong class="text-xs sm:text-sm font-bold truncate max-w-full" :style="{ color: 'var(--accent)' }">
          {{ t('ធម៌រតនៈផ្ទាល់ខ្លួន', 'My Gems') }}
        </strong>
        <span class="text-[11px] mt-0.5 line-clamp-1" :style="{ color: 'var(--ink-muted)' }">
          {{ t('កំពូលសំណួរជ្រៅៗ', 'Curated Wisdom') }}
        </span>
      </router-link>
    </div>

    <!-- Today's Sanctuary Status (Lunar Sīl Day & Next Festival in 2 Columns) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-5">
      <SilDayCard />
      <FestivalCountdownCard />
    </div>

    <!-- Curated Pathways: 3 Structured Levels of Dhamma (Organizes the 145 pages logically) -->
    <div class="mt-8">
      <div class="flex items-center justify-between mb-4 px-1">
        <div>
          <h2 class="font-display text-xl sm:text-2xl font-bold" :style="{ color: 'var(--ink)' }">
            {{ t('ផ្លូវរៀនធម៌ ៣ កម្រិត', 'Three Structured Learning Pathways') }}
          </h2>
          <p class="text-xs sm:text-sm mt-0.5" :style="{ color: 'var(--ink-muted)' }">
            {{ t('ជ្រើសរើសផ្លូវដែលត្រូវនឹងគោលដៅសិក្សារបស់អ្នក ៖ សាមញ្ញ ច្បាស់លាស់ និងជាប្រព័ន្ធ', 'Choose the path matching your focus: structured, clear, and serene') }}
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Pathway 1: Daily Practice & Living -->
        <div
          class="card-paper p-5 rounded-2xl flex flex-col justify-between border transition-all hover:shadow-md"
          :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }"
        >
          <div>
            <div class="flex items-center justify-between gap-2">
              <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                :style="{ background: 'rgba(34, 197, 94, 0.12)', color: '#16a34a' }">
                {{ t('កម្រិត ១ · បដិបត្តិ', 'Level 1 · Practice') }}
              </span>
              <span class="text-xl">🌿</span>
            </div>
            <h3 class="font-display text-lg font-bold mt-3" :style="{ color: 'var(--ink)' }">
              {{ t('ជីវិតប្រចាំថ្ងៃ & សេចក្តីស្ងប់', 'Daily Peace & Practice') }}
            </h3>
            <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
              {{ t('គ្រឹះដំបូងនៃសេចក្តីសុខ ៖ ការរក្សាសីល ៥, អានាបានសតិដង្ហើមចេញចូល, ធម៌ពិចារណាប្រចាំថ្ងៃ និងវិន័យគ្រហស្ថ។', 'Cultivating everyday mental clarity: 5 Precepts, mindfulness of breath, daily contemplations, and lay ethics.') }}
            </p>

            <ul class="mt-3.5 space-y-1.5 text-xs" :style="{ color: 'var(--ink-soft)' }">
              <li class="flex items-center gap-2">
                <span class="text-emerald-500 font-bold">•</span>
                <router-link to="/ethics" class="hover:underline">{{ t('សីល ៥ — គ្រឹះនៃសុវត្ថិភាពជីវិត', 'The 5 Precepts (Sīla)') }}</router-link>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-emerald-500 font-bold">•</span>
                <router-link to="/anapanasati" class="hover:underline">{{ t('អានាបានសតិ ១៦ ដំណាក់កាល', 'Ānāpānasati (16 Steps)') }}</router-link>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-emerald-500 font-bold">•</span>
                <router-link to="/daily" class="hover:underline">{{ t('ធម៌ពិចារណា ៥ ប្រការរាល់ថ្ងៃ', '5 Daily Reflections (Abhiṇha)') }}</router-link>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-emerald-500 font-bold">•</span>
                <router-link to="/wealth" class="hover:underline">{{ t('កិលេសបំផ្លាញទ្រព្យ & សុភមង្គល', 'Wealth & Lay Prosperity') }}</router-link>
              </li>
            </ul>
          </div>

          <div class="mt-5 pt-3 border-t" :style="{ borderColor: 'var(--border)' }">
            <router-link
              to="/meditation"
              class="w-full py-2 px-3 rounded-xl text-xs font-bold inline-flex items-center justify-center gap-1.5 transition"
              :style="{ background: 'var(--bg-card-2)', color: 'var(--ink)' }"
            >
              <span>{{ t('ចូលទៅកាន់ផ្នែកបដិបត្តិ', 'Open Practice Hub') }}</span>
              <span>→</span>
            </router-link>
          </div>
        </div>

        <!-- Pathway 2: Core Foundations & Suttas -->
        <div
          class="card-paper p-5 rounded-2xl flex flex-col justify-between border transition-all hover:shadow-md"
          :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }"
        >
          <div>
            <div class="flex items-center justify-between gap-2">
              <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                :style="{ background: 'rgba(217, 136, 19, 0.12)', color: '#d98813' }">
                {{ t('កម្រិត ២ · ធម៌គ្រឹះ', 'Level 2 · Foundations') }}
              </span>
              <span class="text-xl">🪷</span>
            </div>
            <h3 class="font-display text-lg font-bold mt-3" :style="{ color: 'var(--ink)' }">
              {{ t('ការពិតនៃជីវិត & ព្រះសូត្រ', 'Truth of Reality & Suttas') }}
            </h3>
            <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
              {{ t('ស្វែងយល់ហេតុ និងផលនៃទុក្ខ ៖ អរិយសច្ច ៤, អដ្ឋង្គិកមគ្គ ៨, កម្ម និងផល, បដិច្ចសមុប្បាទ និងព្រះសូត្រទេសនា។', 'Understanding why we suffer: Four Noble Truths, Eightfold Path, Kamma, Dependent Origination, and Great Suttas.') }}
            </p>

            <ul class="mt-3.5 space-y-1.5 text-xs" :style="{ color: 'var(--ink-soft)' }">
              <li class="flex items-center gap-2">
                <span class="text-amber-500 font-bold">•</span>
                <router-link to="/core" class="hover:underline">{{ t('អរិយសច្ច ៤ & មគ្គ ៨', 'Four Noble Truths & Eightfold Path') }}</router-link>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-amber-500 font-bold">•</span>
                <router-link to="/kamma" class="hover:underline">{{ t('កម្ម និងផល — ច្បាប់ធម្មជាតិពិត', 'Kamma & Its Repercussions') }}</router-link>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-amber-500 font-bold">•</span>
                <router-link to="/paticcasamuppada" class="hover:underline">{{ t('បដិច្ចសមុប្បាទ ១២ តំណាក់កាល', 'Dependent Origination (12 Links)') }}</router-link>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-amber-500 font-bold">•</span>
                <router-link to="/suttas" class="hover:underline">{{ t('កំពូលព្រះសូត្រ (ធម្មចក្រ, មង្គល...)', 'Key Discourses (Sutta Pitaka)') }}</router-link>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-amber-500 font-bold">•</span>
                <router-link to="/milinda-qa" class="hover:underline">{{ t('មិលិន្ទប្បញ្ហា ២៤៥ បញ្ហា & ឧបមា', 'Milindapañhā (245 Lessons & Similes)') }}</router-link>
              </li>
            </ul>
          </div>

          <div class="mt-5 pt-3 border-t" :style="{ borderColor: 'var(--border)' }">
            <router-link
              to="/core"
              class="w-full py-2 px-3 rounded-xl text-xs font-bold inline-flex items-center justify-center gap-1.5 transition"
              :style="{ background: 'var(--bg-card-2)', color: 'var(--ink)' }"
            >
              <span>{{ t('ចូលទៅកាន់ធម៌គ្រឹះ', 'Open Core Foundations') }}</span>
              <span>→</span>
            </router-link>
          </div>
        </div>

        <!-- Pathway 3: Deep Abhidhamma & Insight -->
        <div
          class="card-paper p-5 rounded-2xl flex flex-col justify-between border transition-all hover:shadow-md"
          :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }"
        >
          <div>
            <div class="flex items-center justify-between gap-2">
              <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                :style="{ background: 'rgba(99, 102, 241, 0.12)', color: '#6366f1' }">
                {{ t('កម្រិត ៣ · អភិធម្ម', 'Level 3 · Abhidhamma') }}
              </span>
              <span class="text-xl">🧠</span>
            </div>
            <h3 class="font-display text-lg font-bold mt-3" :style="{ color: 'var(--ink)' }">
              {{ t('ព្រះអភិធម្ម & បញ្ញាជ្រៅ', 'Higher Abhidhamma & Insight') }}
            </h3>
            <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
              {{ t('ការវះកាត់ចិត្តដល់កម្រិតបរមត្ថ ៖ ចិត្ត ៨៩, ចេតសិក ៥២, បច្ច័យ ២៤, រូប ២៨ និងវិបស្សនាញាណ ១៦។', 'Profound micro-analysis of consciousness: 89 Citta, 52 Mental Factors, 24 Conditional Relations, and 16 Insight Knowledges.') }}
            </p>

            <ul class="mt-3.5 space-y-1.5 text-xs" :style="{ color: 'var(--ink-soft)' }">
              <li class="flex items-center gap-2">
                <span class="text-indigo-500 font-bold">•</span>
                <router-link to="/abhidhamma" class="hover:underline">{{ t('ចិត្ត ៨៩ & ចេតសិក ៥២', '89 Citta & 52 Cetasika') }}</router-link>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-indigo-500 font-bold">•</span>
                <router-link to="/paccaya" class="hover:underline">{{ t('បច្ច័យ ២៤ (បដ្ឋាន)', '24 Conditions (Paṭṭhāna)') }}</router-link>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-indigo-500 font-bold">•</span>
                <router-link to="/vipassana-nana" class="hover:underline">{{ t('វិបស្សនាញាណ ១៦ ជាន់', '16 Vipassanā Insight Knowledges') }}</router-link>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-indigo-500 font-bold">•</span>
                <router-link to="/realms" class="hover:underline">{{ t('ស្ថានទាំង ៣១ ភពនៃវដ្តសង្សារ', '31 Planes of Existence') }}</router-link>
              </li>
            </ul>
          </div>

          <div class="mt-5 pt-3 border-t" :style="{ borderColor: 'var(--border)' }">
            <router-link
              to="/abhidhamma"
              class="w-full py-2 px-3 rounded-xl text-xs font-bold inline-flex items-center justify-center gap-1.5 transition"
              :style="{ background: 'var(--bg-card-2)', color: 'var(--ink)' }"
            >
              <span>{{ t('ចូលទៅកាន់ព្រះអភិធម្ម', 'Open Abhidhamma Hub') }}</span>
              <span>→</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured Highlights: Milindapañhā 245, Personal Gems & TikTok Studio -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <!-- Milindapañhā 245 Card -->
      <router-link
        to="/milinda-qa"
        class="card-paper card-paper-hover p-5 rounded-2xl border flex items-center justify-between gap-4 group transition-all"
        :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }"
      >
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              DHAMMA SŪTRA
            </span>
            <span class="text-xs font-mono font-bold text-amber-500">#២៤៥ មេរៀន</span>
          </div>
          <h3 class="font-display text-base sm:text-lg font-bold mt-1.5 group-hover:text-amber-500 transition truncate" :style="{ color: 'var(--ink)' }">
            {{ t('គម្ពីរមិលិន្ទប្បញ្ហា ២៤៥ មេរៀន', 'Milindapañhā 245 Lessons') }}
          </h3>
          <p class="text-xs mt-1 line-clamp-2" :style="{ color: 'var(--ink-muted)' }">
            {{ t('ការដេញដោលដ៏អស្ចារ្យរវាងព្រះបាទមិលិន្ទ & ព្រះនាគសេន ស្រាយគ្រប់ចម្ងល់ព្រះធម៌ ព្រមទាំងមានទាញយក PDF ពេញលេញ។', 'Great dialogues between King Milinda & Ven. Nāgasena with 114 vivid parables and PDF download.') }}
          </p>
        </div>
        <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-xl shrink-0 bg-amber-500/10 text-amber-500 border border-amber-500/20 group-hover:scale-110 transition-transform">
          📜
        </div>
      </router-link>

      <!-- Personal Gems Card -->
      <router-link
        to="/my-gems"
        class="card-paper card-paper-hover p-5 rounded-2xl border flex items-center justify-between gap-4 group transition-all"
        :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }"
      >
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              SANCTUARY
            </span>
            <span class="text-xs font-mono font-bold text-amber-500">#៤២</span>
          </div>
          <h3 class="font-display text-base sm:text-lg font-bold mt-1.5 group-hover:text-amber-500 transition truncate" :style="{ color: 'var(--ink)' }">
            {{ t('កម្រងសំណួរកំពូល & ធម៌រតនៈ (My Gems)', 'My Top Questions & Dhamma Gems') }}
          </h3>
          <p class="text-xs mt-1 line-clamp-2" :style="{ color: 'var(--ink-muted)' }">
            {{ t('ឧបមាព្រួញបំពុលពិស (MN 63), អាយុសត្វលោក (DN 26), ឫសគល់ទុក្ខ, បច្ច័យ ២៤ និងរូបកលាប...', 'Arrow Parable, Lifespan 10 to Asaṅkheyya, 24 Conditions, 8 Jhānas, and Rūpa-kalāpa...') }}
          </p>
        </div>
        <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-xl shrink-0 bg-amber-500/10 text-amber-500 border border-amber-500/20 group-hover:scale-110 transition-transform">
          💎
        </div>
      </router-link>

      <!-- TikTok Studio Card -->
      <router-link
        to="/tiktok-studio"
        class="card-paper card-paper-hover p-5 rounded-2xl border flex items-center justify-between gap-4 group transition-all"
        :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }"
      >
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
              AI CREATOR
            </span>
            <span class="text-xs font-mono font-bold text-rose-500">@_prove_them_wrong_</span>
          </div>
          <h3 class="font-display text-base sm:text-lg font-bold mt-1.5 group-hover:text-rose-500 transition truncate" :style="{ color: 'var(--ink)' }">
            {{ t('TikTok Studio ស្ទូឌីយោបង្កើតមាតិកា', 'TikTok Studio AI Generator') }}
          </h3>
          <p class="text-xs mt-1 line-clamp-2" :style="{ color: 'var(--ink-muted)' }">
            {{ t('បង្កើតអត្ថបទរូបភាព Carousel ៧ ស្លាយតាមរចនាបថផ្ទាល់ខ្លួន ដោយស្វ័យប្រវត្តិតាមព្រះធម៌ពិត។', 'Generate 7-slide carousel scripts tailored in your authentic deep philosophical style.') }}
          </p>
        </div>
        <div class="w-11 h-11 rounded-2xl flex items-center justify-center text-xl shrink-0 bg-rose-500/10 text-rose-500 border border-rose-500/20 group-hover:scale-110 transition-transform">
          🎬
        </div>
      </router-link>
    </div>

    <!-- Interactive Abhidhamma Doughnut Showcase (Harmonious & Integrated) -->
    <div class="card-paper p-5 sm:p-7 rounded-2xl border mt-6" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 border-b pb-4" :style="{ borderColor: 'var(--border)' }">
        <div>
          <p class="chapter-label text-xs tracking-wider uppercase font-bold" :style="{ color: 'var(--accent)' }">
            {{ t('ចិត្ត ៨៩ ដួង ក្នុងព្រះអភិធម្ម', 'THE 89 CITTA OF ABHIDHAMMA') }}
          </p>
          <h3 class="font-display text-lg sm:text-xl font-bold mt-1" :style="{ color: 'var(--ink)' }">
            {{ t('ការបែងចែកចិត្តតាមជាន់ថ្នាក់នៃភូមិ ៤', 'Consciousness Across the 4 Spheres') }}
          </h3>
        </div>
        <router-link
          to="/abhidhamma"
          class="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline shrink-0"
        >
          <span>{{ t('អានអភិធម្មពេញលេញ', 'Explore Full Abhidhamma') }}</span>
          <span>→</span>
        </router-link>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        <!-- Donut Chart -->
        <div class="md:col-span-5 flex flex-col items-center justify-center">
          <div class="relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] mx-auto flex items-center justify-center">
            <canvas ref="chartRef"></canvas>
            <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
              <span class="text-[9px] font-bold tracking-widest uppercase" :style="{ color: 'var(--ink-muted)' }">
                {{ t('ចិត្តសរុប', 'TOTAL') }}
              </span>
              <span class="font-display text-3xl font-black text-amber-500 leading-none my-0.5">
                89
              </span>
              <span class="text-[10px] font-bold" :style="{ color: 'var(--ink-faint)' }">
                {{ t('ដួង', 'CITTA') }}
              </span>
            </div>
          </div>
        </div>

        <!-- 4 Classes Cards -->
        <div class="md:col-span-7 space-y-2">
          <div
            v-for="(c, idx) in cittaGroups"
            :key="c.en"
            class="p-3 rounded-xl border flex items-center justify-between gap-3 transition-all"
            :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }"
          >
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full shrink-0" :style="{ background: cittaColors[idx] }"></span>
                <strong class="text-xs sm:text-sm font-bold leading-snug truncate" :style="{ color: 'var(--ink)' }">
                  {{ t(c.km, c.en) }}
                </strong>
              </div>
              <p class="text-[11px] mt-0.5 pl-4.5 truncate" :style="{ color: 'var(--ink-muted)' }">
                {{ t(c.kmBody, c.enBody) }}
              </p>
            </div>
            <span
              class="shrink-0 text-xs font-mono font-bold px-2 py-0.5 rounded-lg border text-center min-w-[34px]"
              :style="{ background: 'var(--bg-card)', borderColor: cittaColors[idx], color: cittaColors[idx] }"
            >
              {{ c.n }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Three Jewels & Tipitaka Foundational Heritage -->
    <div class="mt-8 pt-6 border-t" :style="{ borderColor: 'var(--border)' }">
      <div class="text-center max-w-xl mx-auto mb-6">
        <p class="chapter-label text-xs tracking-wider uppercase font-bold" :style="{ color: 'var(--accent)' }">
          {{ t('ព្រះត្រៃរតន៍ & ព្រះត្រៃបិដក', 'THE THREE JEWELS & TRIPITAKA') }}
        </p>
        <h3 class="font-display text-xl sm:text-2xl font-bold mt-1" :style="{ color: 'var(--ink)' }">
          {{ t('ទីពឹងដ៏ឧត្តមក្នុងលោក', 'The Ultimate Triple Refuge') }}
        </h3>
      </div>

      <!-- Three Jewels -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        <div v-for="j in jewels" :key="j.en" class="card-paper p-4 rounded-2xl text-center border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <p class="text-2xl">{{ j.icon }}</p>
          <h4 class="font-display text-base font-bold mt-2" :style="{ color: 'var(--ink)' }">{{ t(j.km, j.en) }}</h4>
          <p class="text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5" :style="{ color: 'var(--ink-faint)' }">{{ j.paali }}</p>
          <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(j.kmBody, j.enBody) }}</p>
        </div>
      </div>

      <!-- Tipitaka Baskets -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3.5">
        <div v-for="b in baskets" :key="b.en" class="p-3.5 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">{{ b.paali }}</span>
          <h5 class="font-bold text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t(b.km, b.en) }}</h5>
          <p class="text-[11px] mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(b.kmBody, b.enBody) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { Chart, registerables } from 'chart.js'
import { useTheme } from '../composables/useTheme'
import { useLanguage } from '../composables/useLanguage'
import FestivalCountdownCard from '../components/FestivalCountdownCard.vue'
import SilDayCard from '../components/SilDayCard.vue'

Chart.register(...registerables)
const { theme, getChartColors } = useTheme()
const { t, lang } = useLanguage()

const jewels = [
  { icon: '☸', paali: 'BUDDHO', km: 'ព្រះពុទ្ធ', en: 'The Buddha', kmBody: 'ព្រះអង្គជាអ្នកត្រាស់ដឹងនូវសេចក្តីពិតដោយព្រះប្រាជ្ញាញាណផ្ទាល់ខ្លួន។', enBody: 'The Awakened One who realised the truth by his own wisdom.' },
  { icon: '📜', paali: 'DHAMMO', km: 'ព្រះធម៌', en: 'The Dhamma', kmBody: 'ពាក្យប្រៀនប្រដៅដែលត្រាស់ទេសនា — គួរពិនិត្យពិចារណា និងបដិបត្តិតាម។', enBody: 'The teaching set forth — to be examined, verified, and practised.' },
  { icon: '🪷', paali: 'SAMGHO', km: 'ព្រះសង្ឃ', en: 'The Sangha', kmBody: 'សាវ័កអ្នកបដិបត្តិល្អត្រឹមត្រូវ ជាកុលសម្ពន្ធដ៏ប្រសើររបស់អ្នកស្វែងរកសេចក្តីស្ងប់។', enBody: 'The community of noble practitioners — a serene refuge for seekers.' },
]

const baskets = [
  { paali: 'VINAYA', km: 'វិនយបិដក', en: 'Vinaya Pitaka', kmBody: 'វិន័យសម្រាប់ព្រះសង្ឃ ដើម្បីឱ្យផ្លូវប្រតិបត្តិមានសីលបរិសុទ្ធ។', enBody: 'Monastic discipline preserving moral purity.' },
  { paali: 'SUTTANTA', km: 'សុត្តន្តបិដក', en: 'Sutta Pitaka', kmBody: 'ព្រះធម្មទេសនា ៨៤,០០០ ធម្មក្ខន្ធ ទេសនាទៅតាមចរិតអ្នកស្តាប់។', enBody: 'Discourses delivered according to listener temperaments.' },
  { paali: 'ABHIDHAMMA', km: 'អភិធម្មបិដក', en: 'Abhidhamma Pitaka', kmBody: 'វិភាគចិត្ត ចេតសិក រូប និងនិព្វាន ដោយសច្ចធម៌បរមត្ថដ៏ជ្រាលជ្រៅ។', enBody: 'Profound micro-analysis of mind, mental factors, matter and Nibbāna.' },
]

const cittaColors = ['#d98813', '#c99a2e', '#71539b', '#5f7d35']

const cittaGroups = [
  { n: '54', km: 'កាមាវចរចិត្ត (ចិត្តក្នុងលោកអារម្មណ៍ ៥)', en: 'Sense-sphere', kmBody: 'ចិត្តលោកិយកើតក្នុងលោកនៃអារម្មណ៍ទាំងប្រាំ', enBody: 'worldly consciousness bound to the five senses' },
  { n: '15', km: 'រូបាវចរចិត្ត (ចិត្តក្នុងរូបឈាន)', en: 'Fine-material', kmBody: 'ចិត្តក្នុងឈានរូប', enBody: 'consciousness of the five fine-material jhānas' },
  { n: '12', km: 'អរូបាវចរចិត្ត (ចិត្តក្នុងអរូបឈាន)', en: 'Formless', kmBody: 'ចិត្តក្នុងឈានអរូប', enBody: 'consciousness of the four formless spheres' },
  { n: '8', km: 'លោកុត្តរចិត្ត (ចិត្តនៃផ្លូវ-ផល)', en: 'Supramundane', kmBody: 'ចិត្តនៃមគ្គផល', enBody: 'path and fruition consciousness' },
]

const chartRef = ref(null)
let chartInstance = null

function renderChart() {
  if (chartInstance) chartInstance.destroy()
  if (!chartRef.value) return
  const cc = getChartColors()
  const km = t('កាមាវចរ', 'Sense')
  const en = t('រូបាវចរ', 'Fine')
  const form = t('អរូបាវចរ', 'Formless')
  const supra = t('លោកុត្តរ', 'Supra')
  chartInstance = new Chart(chartRef.value, {
    type: 'doughnut',
    data: {
      labels: [km, en, form, supra],
      datasets: [
        {
          data: [54, 15, 12, 8],
          backgroundColor: cittaColors,
          borderColor: cc.border,
          borderWidth: 2,
          hoverOffset: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      cutout: '70%',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return ` ${context.label}: ${context.raw} ដួង`
            }
          }
        }
      }
    }
  })
}

let resizeRaf = null
function onResize() {
  if (resizeRaf) return
  resizeRaf = requestAnimationFrame(() => { resizeRaf = null; renderChart() })
}

onMounted(() => { renderChart(); window.addEventListener('resize', onResize) })
onBeforeUnmount(() => window.removeEventListener('resize', onResize))
watch([theme, lang], renderChart)
</script>
