<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ០២ — ធម៌មូលដ្ឋាន', 'GATHA 02 — CORE TEACHINGS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('អរិយសច្ចៈ ៤ & ឫសគល់នៃទុក្ខ', 'The Four Noble Truths & Roots of Suffering') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ធម៌ទាំងអស់របស់ព្រះសម្មាសម្ពុទ្ធ មានមូលដ្ឋានលើអរិយសច្ចៈ ៤ គឺដូចជាគ្រូពេទ្យពិនិត្យជំងឺ៖ (១) ដឹងជំងឺ (២) ដឹងហេតុ (៣) ដឹងការជាសះស្បើយ (៤) ដឹងថ្នាំ ។ ស្វែងយល់យ៉ាងស៊ីជម្រៅនូវឫសគល់នៃទុក្ខ និងវិធីរំលត់កិលេសតាមត្រៃសិក្ខា។', 'All the teachings of the Buddha rest on the Four Noble Truths — like the method of a physician: (1) know the disease, (2) know its cause, (3) know the cure, (4) know the medicine. Explore the root causes of suffering and the gradual cessation of defilements through the Threefold Training.') }}
    </p>

    <!-- Quick Jump Sub-Navigation (Uniform h-9, smooth touch scroll on mobile) -->
    <div class="flex items-center gap-2 mt-6 overflow-x-auto pb-2 pt-1 scrollbar-none touch-pan-x sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
      <a href="#dukkha" class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center gap-1.5">
        <span>☸️</span>
        <span>{{ t('អរិយសច្ចៈ ៤', 'Four Noble Truths') }}</span>
      </a>
      <a href="#roots-of-suffering" class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center gap-1.5 on">
        <span>🔥</span>
        <span>{{ t('ឫសគល់នៃទុក្ខ & រំលត់កិលេស', 'Roots & Defilements') }}</span>
      </a>
      <a href="#eightfold-path" class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center gap-1.5">
        <span>🛣️</span>
        <span>{{ t('មគ្គ ៨ ក្នុងត្រៃសិក្ខា', 'Eightfold Path') }}</span>
      </a>
      <a href="#tilakkhana-khandha" class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center gap-1.5">
        <span>🪷</span>
        <span>{{ t('ត្រៃលក្ខណ៍ & ខន្ធ ៥', 'Tilakkhana & Khandha') }}</span>
      </a>
    </div>

    <!-- 4 Noble Truths -->
    <div id="dukkha" class="grid md:grid-cols-2 gap-4 mt-8 scroll-mt-24">
      <div v-for="(tr, i) in truths" :key="tr.en" class="card-paper card-paper-hover p-5 h-full flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-3">
            <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ '១២៣៤'[i] }}</span>
            <div>
              <h3 class="font-display text-base" :style="{ color: 'var(--ink)' }">{{ t(tr.km, tr.en) }}</h3>
              <span class="paali">{{ tr.paali }}</span>
            </div>
          </div>
          <p class="text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(tr.kmBody, tr.enBody) }}</p>
        </div>
      </div>
    </div>

    <!-- ========================================================================= -->
    <!-- MASTER LESSON: ឫសគល់នៃទុក្ខ និងវិធីរំលត់កិលេស (The Roots & Extinction) -->
    <!-- ========================================================================= -->
    <section id="roots-of-suffering" class="card-paper p-5 sm:p-7 md:p-8 mt-10 scroll-mt-24 border-2" :style="{ borderColor: 'var(--accent)' }">
      <div class="flex items-center gap-2">
        <span class="text-2xl">🔥</span>
        <div>
          <p class="chapter-label m-0" :style="{ color: 'var(--accent)' }">
            {{ t('មេរៀនស៊ីជម្រៅ — បេះដូងពុទ្ធធម៌', 'DEEP ESSENCE — HEART OF DHAMMA') }}
          </p>
          <h3 class="font-display text-xl sm:text-2xl mt-1" :style="{ color: 'var(--ink)' }">
            {{ t('ឫសគល់នៃទុក្ខ និងវិធីរំលត់កិលេស', 'The Roots of Suffering & Eradication of Defilements') }}
          </h3>
        </div>
      </div>

      <p class="mt-4 text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ឫសគល់នៃទុក្ខ និងវិធីរំលត់កិលេស គឺជាបេះដូងនៃទ្រឹស្តីព្រះពុទ្ធសាសនា ដែលត្រូវបានសង្ខេបនៅក្នុង អរិយសច្ច ៤ (ទុក្ខ, សមុទយ, និរោធ, មគ្គ) និង បដិច្ចសមុប្បាទ (ច្បាប់នៃហេតុ និងផល)។ ទុក្ខមិនមែនកើតឡើងដោយចៃដន្យ ឬព្រះអាទិទេពបង្កើតឡើយ ប៉ុន្តែមានខ្សែសង្វាក់ហេតុផលច្បាស់លាស់ក្នុងចិត្តសត្វលោក។', 'The root cause of suffering and the cessation of defilements represent the very core of Buddhist doctrine, synthesized across the Four Noble Truths and Dependent Origination (Paṭiccasamuppāda). Suffering never arises by chance or divine creation, but follows an unbroken chain of causes within the mind.') }}
      </p>

      <!-- Section Tabs (Uniform height, touch scroll) -->
      <div class="flex items-center gap-2 mt-6 overflow-x-auto pb-2 pt-1 scrollbar-none touch-pan-x sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
        <button
          @click="activeLessonTab = 'roots'"
          class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center gap-1.5"
          :class="activeLessonTab === 'roots' ? 'on' : ''"
        >
          <span>🔍</span>
          <span>{{ t('ផ្នែកទី ១៖ ឫសគល់នៃទុក្ខ', 'Part 1: Roots of Suffering') }}</span>
        </button>
        <button
          @click="activeLessonTab = 'eradication'"
          class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center gap-1.5"
          :class="activeLessonTab === 'eradication' ? 'on' : ''"
        >
          <span>⚖️</span>
          <span>{{ t('ផ្នែកទី ២៖ វិធីរំលត់កិលេស (ត្រៃសិក្ខា)', 'Part 2: 3-Tier Eradication') }}</span>
        </button>
        <button
          @click="activeLessonTab = 'ariya'"
          class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center gap-1.5"
          :class="activeLessonTab === 'ariya' ? 'on' : ''"
        >
          <span>🪷</span>
          <span>{{ t('កម្រិតកាត់ផ្តាច់ ៤ ថ្នាក់ (អរិយបុគ្គល)', '4 Noble Stages & Severed Fetters') }}</span>
        </button>
      </div>

      <!-- TAB 1: ផ្នែកទី ១៖ ឫសគល់នៃទុក្ខ (តើទុក្ខកើតចេញពីអ្វី?) -->
      <div v-if="activeLessonTab === 'roots'" class="mt-6 space-y-5 fade-up">
        <div class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <h4 class="font-display text-base font-bold flex items-center gap-2" :style="{ color: 'var(--accent)' }">
            <span>💡</span>
            <span>{{ t('តើទុក្ខកើតចេញពីអ្វី? (The Genesis of Dukkha)', 'Where Does Suffering Originate?') }}</span>
          </h4>
          <p class="text-xs sm:text-sm mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t('ទុក្ខមិនមែនកើតឡើងដោយចៃដន្យ ឬដោយការបង្កើតរបស់ព្រះអាទិទេពណាមួយឡើយ ប៉ុន្តែវាមានឫសគល់ច្បាស់លាស់ជាខ្សែសង្វាក់ក្នុងចិត្តរបស់សត្វលោក តាមលំដាប់ ៤ យ៉ាងធំៗ៖', 'Suffering does not arise by chance nor through divine decree; it has precise root mechanisms operating as a mental chain through four key factors:') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- 1. Taṇhā -->
          <div class="card-paper p-4 sm:p-5 h-full flex flex-col justify-between" :style="{ background: 'var(--bg-card)' }">
            <div>
              <div class="flex items-center justify-between gap-2 mb-2">
                <span class="text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wider" :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)' }">
                  {{ t('អ្នកបង្កើតទុក្ខផ្ទាល់', 'Direct Cause') }}
                </span>
                <span class="paali">Taṇhā</span>
              </div>
              <h4 class="font-display text-base font-bold" :style="{ color: 'var(--ink)' }">
                {{ t('១. តណ្ហា (សេចក្តីស្រេកឃ្លាន ឬការចង់បាន)', '1. Taṇhā (Craving & Thirst)') }}
              </h4>
              <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                {{ t('ព្រះពុទ្ធបានចង្អុលបង្ហាញថា តណ្ហា គឺជាអ្នកបង្កើតទុក្ខផ្ទាល់ (ទុក្ខសមុទយ) ដោយចែកចេញជា ៣ កម្រិត៖', 'The Buddha identified craving as the direct architect of suffering (Samudaya), manifesting at three distinct levels:') }}
              </p>
              <ul class="tick-list text-xs mt-3 space-y-2" :style="{ color: 'var(--ink-muted)' }">
                <li>
                  <strong :style="{ color: 'var(--ink)' }">{{ t('កាមតណ្ហា (Kāma-taṇhā)៖', 'Kāma-taṇhā:') }}</strong>
                  {{ t('ការស្រេកឃ្លានក្នុងកាមគុណទាំង ៥ (ចង់ឃើញរូបស្អាត ស្តាប់សំឡេងពិរោះ ស្រង់ក្លិនក្រអូប ភ្លក្សរសឆ្ងាញ់ ប៉ះពាល់ផាសុកភាព)។ កាលណាមិនបានដូចចិត្ត ក៏កើតទុក្ខ។', 'Thirst for the 5 sense pleasures (sight, sound, smell, taste, touch). Frustration when unmet breeds acute distress.') }}
                </li>
                <li>
                  <strong :style="{ color: 'var(--ink)' }">{{ t('ភវតណ្ហា (Bhava-taṇhā)៖', 'Bhava-taṇhā:') }}</strong>
                  {{ t('ការចង់បាន ចង់មាន ចង់ក្លាយជានេះជានោះ និងចង់ឱ្យរបស់ដែលខ្លួនស្រឡាញ់នៅគង់វង្សជាអមតៈ (មិនចង់ឱ្យខ្លួនឯងចាស់ ឈឺ ឬស្លាប់)។', 'Craving to be, to become, to exist endlessly, longing for loved ones and oneself to never grow old, sick, or die.') }}
                </li>
                <li>
                  <strong :style="{ color: 'var(--ink)' }">{{ t('វិភវតណ្ហា (Vibhava-taṇhā)៖', 'Vibhava-taṇhā:') }}</strong>
                  {{ t('ការចង់បំផ្លាញចោល ឬការមិនចង់ជួបប្រទះនូវសភាពដែលខ្លួនស្អប់ខ្ពើម (ដូចជា ការចង់កម្ចាត់ជំងឺ ចង់រត់គេចពីការបរាជ័យ ឬការចង់សម្លាប់ខ្លួនដើម្បីបញ្ចប់បញ្ហា)។', 'Craving for non-existence or annihilation — wanting to destroy unpleasant realities, escape failures, or suicide.') }}
                </li>
              </ul>
            </div>
          </div>

          <!-- 2. Avijjā -->
          <div class="card-paper p-4 sm:p-5 h-full flex flex-col justify-between" :style="{ background: 'var(--bg-card)' }">
            <div>
              <div class="flex items-center justify-between gap-2 mb-2">
                <span class="text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wider" :style="{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }">
                  {{ t('ឫសគល់ជ្រៅបំផុត', 'Deepest Root') }}
                </span>
                <span class="paali">Avijjā</span>
              </div>
              <h4 class="font-display text-base font-bold" :style="{ color: 'var(--ink)' }">
                {{ t('២. អវិជ្ជា (ភាពងងឹតវង្វេង ឬការមិនដឹងពិត)', '2. Avijjā (Ignorance & Delusion)') }}
              </h4>
              <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                {{ t('នៅពីក្រោយតណ្ហា គឺ អវិជ្ជា ដែលជាឫសគល់ជ្រៅបំផុត។ អវិជ្ជា គឺជាការមិនដឹងអំពីការពិតនៃជីវិត (មិនដឹងអរិយសច្ច ៤) បង្កឱ្យចិត្តភ័ន្តច្រឡំធំ ៣ យ៉ាង៖', 'Lying behind craving is Avijjā, the deepest root of all samsaric delusion — ignorance of the Four Noble Truths, distorting perception in three ways:') }}
              </p>
              <ul class="tick-list text-xs mt-3 space-y-2" :style="{ color: 'var(--ink-muted)' }">
                <li>
                  <strong :style="{ color: 'var(--ink)' }">{{ t('ឃើញរបស់ មិនទៀង (អនិច្ចំ) ថាជា របស់ទៀង៖', 'Seeing Impermanence (Anicca) as Permanent:') }}</strong>
                  {{ t('គិតថាទ្រព្យសម្បត្តិ កិត្តិយស និងរូបកាយ នឹងនៅជាមួយយើងរហូត មិនងាយបាត់បង់។', 'Believing wealth, beauty, and physical vitality will endure forever.') }}
                </li>
                <li>
                  <strong :style="{ color: 'var(--ink)' }">{{ t('ឃើញរបស់ ជាទុក្ខ (ទុក្ខំ) ថាជា សេចក្តីសុខ៖', 'Seeing Unsatisfactoriness (Dukkha) as Pleasure:') }}</strong>
                  {{ t('វង្វេងនឹងការសប្បាយបណ្តោះអាសន្ន ទាំងមិនដឹងថាវាគ្រាន់តែជាការបិទបាំងទុក្ខប៉ុណ្ណោះ។', 'Mistaking temporary sensory titillation for genuine lasting happiness.') }}
                </li>
                <li>
                  <strong :style="{ color: 'var(--ink)' }">{{ t('ឃើញរបស់ មិនមែនជារបស់យើង (អនត្តា) ថាជា "តួខ្លួនអញ ឬរបស់អញ"៖', 'Seeing Non-Self (Anattā) as “Me” or “Mine”:') }}</strong>
                  {{ t('វង្វេងថាមានព្រលឹង ឬតួខ្លួនដែលស្ថិតស្ថេរជាអមតៈ អាចបញ្ជាបានតាមចិត្ត។', 'Clinging to a permanent ego-identity or soul that can be permanently controlled.') }}
                </li>
              </ul>
            </div>
          </div>

          <!-- 3. Upādāna -->
          <div class="card-paper p-4 sm:p-5 h-full flex flex-col justify-between" :style="{ background: 'var(--bg-card)' }">
            <div>
              <div class="flex items-center justify-between gap-2 mb-2">
                <span class="text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wider" :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)' }">
                  {{ t('ចំណងតោងស្អិត', 'Attachment') }}
                </span>
                <span class="paali">Upādāna</span>
              </div>
              <h4 class="font-display text-base font-bold" :style="{ color: 'var(--ink)' }">
                {{ t('៣. ឧបាទាន (ការតោងប្រកាន់មាំ)', '3. Upādāna (Clinging & Grasping)') }}
              </h4>
              <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
                {{ t('កាលណាមានតណ្ហា វានាំឱ្យកើត ឧបាទាន គឺការតោងស្អិតជាប់នឹង «រូបកាយ និងចិត្ត» (បញ្ចក្ខន្ធ) ថាជារបស់យើងពិតប្រាកដ។ ពេលរូបកាយទ្រុឌទ្រោម ឈឺថ្កាត់ ឬបែកបាក់ ចិត្តដែលតោងស្អិតក៏រងការឈឺចាប់យ៉ាងធ្ងន់ធ្ងរដូចព្រួញបាញ់ត្រូវបេះដូង។', 'When craving intensifies, it congeals into Upādāna — relentless grasping onto the five aggregates (body and mind) as "my self". When the body ages, falls ill, or perishes, the clinging mind suffers agonies akin to being pierced by poisoned arrows.') }}
              </p>
            </div>
          </div>

          <!-- 4. Akusala-mūla -->
          <div class="card-paper p-4 sm:p-5 h-full flex flex-col justify-between" :style="{ background: 'var(--bg-card)' }">
            <div>
              <div class="flex items-center justify-between gap-2 mb-2">
                <span class="text-xs px-2 py-0.5 rounded font-bold uppercase tracking-wider" :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)' }">
                  {{ t('មូលធម៌ ៣', '3 Mental Roots') }}
                </span>
                <span class="paali">Akusala-mūla</span>
              </div>
              <h4 class="font-display text-base font-bold" :style="{ color: 'var(--ink)' }">
                {{ t('៤. មូលធម៌នៃកិលេសទាំង ៣ (អកុសលមូល)', '4. The Three Unwholesome Roots') }}
              </h4>
              <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                {{ t('ឫសគល់ផ្លូវចិត្តដែលជម្រុញឱ្យធ្វើអំពើបាប និងបង្កើតទុក្ខ គឺ៖', 'The primary psychological poisons driving immoral action and churning the cycle of suffering:') }}
              </p>
              <ul class="tick-list text-xs mt-3 space-y-1.5" :style="{ color: 'var(--ink-muted)' }">
                <li>
                  <strong :style="{ color: 'var(--ink)' }">{{ t('លោភៈ (Lobha — Greed)៖', 'Lobha (Greed):') }}</strong>
                  {{ t('ចង់បានរបស់គេមកជារបស់ខ្លួន នាំឱ្យកើតការលួចប្លន់ កេងប្រវ័ញ្ច និងការមិនស្កប់ស្កល់។', 'Covetous thirst, leading to robbery, exploitation, hoarding, and restless dissatisfaction.') }}
                </li>
                <li>
                  <strong :style="{ color: 'var(--ink)' }">{{ t('ទោសៈ (Dosa — Anger/Aversion)៖', 'Dosa (Hatred):') }}</strong>
                  {{ t('ការខឹងសម្បា ច្រណែន គុំកួន នាំឱ្យកើតជម្លោះ ការបៀតបៀន និងការបំផ្លាញគ្នា។', 'Ill-will, malice, jealousy, and destructive rage that harms oneself and the world.') }}
                </li>
                <li>
                  <strong :style="{ color: 'var(--ink)' }">{{ t('មោហៈ (Moha — Delusion)៖', 'Moha (Delusion):') }}</strong>
                  {{ t('ភាពភ័ន្តច្រឡំ វង្វេង ងងឹតសូន្យឈឹង មិនស្គាល់ខុសត្រូវ គុណទោស ឬកម្មផល។', 'Spiritual blindness and confusion, unable to discern right from wrong or cause from effect.') }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 2: ផ្នែកទី ២៖ វិធីរំលត់កិលេស និងរំលត់ទុក្ខ (ត្រៃសិក្ខា) -->
      <div v-if="activeLessonTab === 'eradication'" class="mt-6 space-y-5 fade-up">
        <!-- Hierarchy Stepper Visualization -->
        <div class="card-paper p-4 sm:p-5" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <p class="chapter-label text-center m-0">{{ t('យន្តការកាត់ផ្តាច់ ៣ ដំណាក់កាល', '3-TIER ERADICATION ARCHITECTURE') }}</p>
          <h4 class="font-display text-center text-sm sm:text-base font-bold mt-1" :style="{ color: 'var(--ink)' }">
            {{ t('វិធីកម្ចាត់កិលេសពីក្រៅចូលក្នុង តាម ត្រៃសិក្ខា (សីល, សមាធិ, បញ្ញា)', 'Clearing Defilements from Surface to Depth via Tisikkhā') }}
          </h4>
          
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            <div class="p-3 text-center rounded border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
              <span class="text-xs block font-bold" :style="{ color: 'var(--ink-muted)' }">{{ t('កិលេសគ្រោតគ្រាត (កាយ/វាចា)', 'Gross Defilements (Body/Speech)') }}</span>
              <span class="text-lg block my-1">🛡️</span>
              <strong class="text-xs sm:text-sm block" :style="{ color: 'var(--accent-bright)' }">{{ t('រំងាប់ដោយ «សីល»', 'Calmed by Sīla') }}</strong>
            </div>
            <div class="p-3 text-center rounded border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
              <span class="text-xs block font-bold" :style="{ color: 'var(--ink-muted)' }">{{ t('កិលេសកម្រិតមធ្យម (ចិត្ត/អារម្មណ៍)', 'Medium Defilements (Emotions)') }}</span>
              <span class="text-lg block my-1">🧘</span>
              <strong class="text-xs sm:text-sm block" :style="{ color: 'var(--accent-bright)' }">{{ t('រំងាប់ដោយ «សមាធិ»', 'Subdued by Samādhi') }}</strong>
            </div>
            <div class="p-3 text-center rounded border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
              <span class="text-xs block font-bold" :style="{ color: 'var(--ink-muted)' }">{{ t('កិលេសដេកសម្ងំ (ឫសកិលេស/អនុស័យ)', 'Latent Roots (Anusaya)') }}</span>
              <span class="text-lg block my-1">⚔️</span>
              <strong class="text-xs sm:text-sm block" :style="{ color: '#ef4444' }">{{ t('កាត់ផ្តាច់ដោយ «បញ្ញា»', 'Severed by Paññā') }}</strong>
            </div>
          </div>
        </div>

        <!-- 3 Detailed Steps -->
        <div class="space-y-4">
          <!-- Step 1: Sila -->
          <div class="card-paper p-4 sm:p-5 h-full flex flex-col justify-between" :style="{ background: 'var(--bg-card)' }">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">១</span>
                <h4 class="font-display text-base font-bold" :style="{ color: 'var(--ink)' }">
                  {{ t('ជំហានទី ១ — សីលសិក្ខា (កម្ចាត់កិលេសគ្រោតគ្រាតតាមកាយ និងវាចា)', 'Step 1 — Sīla-sikkhā (Eradicating Gross Bodily & Verbal Defilements)') }}
                </h4>
              </div>
              <div class="grid sm:grid-cols-3 gap-3 text-xs mt-3">
                <div class="p-2.5 rounded" :style="{ background: 'var(--bg-card-2)' }">
                  <strong class="block mb-1" :style="{ color: 'var(--accent)' }">{{ t('អង្គមគ្គ (Path Factors)', 'Path Factors') }}</strong>
                  <span>{{ t('សម្មាវាចា (សំដីត្រូវ), សម្មាកម្មន្ត (ការងារត្រូវ), សម្មាអាជីវ (ការចិញ្ចឹមជីវិតត្រូវ)។', 'Right Speech, Right Action, Right Livelihood.') }}</span>
                </div>
                <div class="p-2.5 rounded" :style="{ background: 'var(--bg-card-2)' }">
                  <strong class="block mb-1" :style="{ color: 'var(--accent)' }">{{ t('យន្តការ (Mechanism)', 'Mechanism') }}</strong>
                  <span>{{ t('បង្ការកុំឱ្យភ្លើងកិលេសផ្ទុះចេញមកក្រៅតាមរយៈការរក្សាសីល ៥ (មិនសម្លាប់ មិនលួច មិនផិតក្បត់ មិនកុហក មិនសេពគ្រឿងស្រវឹង)។', 'Restrains outbursts through the 5 Precepts (no killing, stealing, sexual misconduct, false speech, or intoxicants).') }}</span>
                </div>
                <div class="p-2.5 rounded" :style="{ background: 'var(--bg-card-2)' }">
                  <strong class="block mb-1" :style="{ color: 'var(--accent)' }">{{ t('លទ្ធផល (Result)', 'Result') }}</strong>
                  <span>{{ t('កាលណាកាយ និងវាចាស្អាតស្អំ គ្មានការបៀតបៀនអ្នកដទៃ ចិត្តនឹងមិនមានវិប្បដិសារី (ការស្តាយក្រោយ ឬក្តៅក្រហាយដោយសារអំពើបាប) ធ្វើឱ្យចិត្តងាយស្ងប់។', 'Pure bodily and verbal action eliminates remorse (vippaṭisāra), rendering the mind serene and calm.') }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Samadhi -->
          <div class="card-paper p-4 sm:p-5 h-full flex flex-col justify-between" :style="{ background: 'var(--bg-card)' }">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">២</span>
                <h4 class="font-display text-base font-bold" :style="{ color: 'var(--ink)' }">
                  {{ t('ជំហានទី ២ — សមាធិសិក្ខា (កម្ចាត់កិលេសកម្រិតមធ្យមក្នុងចិត្ត)', 'Step 2 — Samādhi-sikkhā (Subduing Medium Emotional Defilements)') }}
                </h4>
              </div>
              <div class="grid sm:grid-cols-3 gap-3 text-xs mt-3">
                <div class="p-2.5 rounded" :style="{ background: 'var(--bg-card-2)' }">
                  <strong class="block mb-1" :style="{ color: 'var(--accent)' }">{{ t('អង្គមគ្គ (Path Factors)', 'Path Factors') }}</strong>
                  <span>{{ t('សម្មាវាយាម (ព្យាយាមត្រូវ), សម្មាសតិ (រលឹកដឹងត្រូវ), សម្មាសមាធិ (តម្កល់ចិត្តត្រូវ)។', 'Right Effort, Right Mindfulness, Right Concentration.') }}</span>
                </div>
                <div class="p-2.5 rounded" :style="{ background: 'var(--bg-card-2)' }">
                  <strong class="block mb-1" :style="{ color: 'var(--accent)' }">{{ t('យន្តការ (Mechanism)', 'Mechanism') }}</strong>
                  <span>{{ t('ប្រើការហាត់ពត់ចិត្តតាមរយៈ សមថកម្មដ្ឋាន (ដូចជា ការតាមដានដង្ហើមចេញចូល អានាបានស្សតិ) ដើម្បីទប់ស្កាត់ នីវរណធម៌ ៥ (កាមច្ឆន្ទៈ, ព្យាបាទ, ថីនមិទ្ធ, ឧទ្ធច្ចកុក្កុច្ច, វិចិកិច្ឆា)។', 'Cultivates Samatha (e.g. Ānāpānasati breath meditation) to suppress the 5 Hindrances (nīvaraṇa).') }}</span>
                </div>
                <div class="p-2.5 rounded" :style="{ background: 'var(--bg-card-2)' }">
                  <strong class="block mb-1" :style="{ color: 'var(--accent)' }">{{ t('លទ្ធផល (Result)', 'Result') }}</strong>
                  <span>{{ t('ចិត្តប្រែជាស្ងប់ ភ្លឺថ្លា មិនរវើរវាយ ប្រៀបដូចជាទឹកដែលបានច្រោះកករថ្លាឈ្វេង ត្រៀមខ្លួនជាស្រេចដើម្បីចម្រើនបញ្ញា។', 'The mind turns serene, bright, and still like filtered crystal water, primed for insight.') }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3: Panna -->
          <div class="card-paper p-4 sm:p-5 h-full flex flex-col justify-between" :style="{ background: 'var(--bg-card)' }">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">៣</span>
                <h4 class="font-display text-base font-bold" :style="{ color: 'var(--ink)' }">
                  {{ t('ជំហានទី ៣ — បញ្ញាសិក្ខា (កាត់ផ្តាច់ឫសគល់កិលេសដែលដេកសម្ងំ)', 'Step 3 — Paññā-sikkhā (Uprooting Latent Defilements Forever)') }}
                </h4>
              </div>
              <div class="grid sm:grid-cols-3 gap-3 text-xs mt-3">
                <div class="p-2.5 rounded" :style="{ background: 'var(--bg-card-2)' }">
                  <strong class="block mb-1" :style="{ color: 'var(--accent)' }">{{ t('អង្គមគ្គ (Path Factors)', 'Path Factors') }}</strong>
                  <span>{{ t('សម្មាទិដ្ឋិ (ការយល់ឃើញត្រូវ), សម្មាសង្កប្ប (ការត្រិះរិះត្រូវ)។', 'Right View, Right Intention.') }}</span>
                </div>
                <div class="p-2.5 rounded" :style="{ background: 'var(--bg-card-2)' }">
                  <strong class="block mb-1" :style="{ color: 'var(--accent)' }">{{ t('យន្តការ (Mechanism)', 'Mechanism') }}</strong>
                  <span>{{ t('ប្រើចិត្តដែលមានសមាធិរឹងមាំ មកចម្រើន វិបស្សនាកម្មដ្ឋាន (សតិបដ្ឋាន ៤) សង្កេតកាយ អារម្មណ៍ ចិត្ត ធម៌ ឃើញត្រៃលក្ខណ៍ពិត៖ អនិច្ចំ (មិនទៀង) ទុក្ខំ (ជាទុក្ខ) អនត្តា (គ្មានខ្លួនអញ)។', 'Leverages deep samādhi for Vipassanā (4 Satipaṭṭhāna), seeing body, feelings, mind, and dhammas as impermanent, unsatisfactory, and non-self.') }}</span>
                </div>
                <div class="p-2.5 rounded" :style="{ background: 'var(--bg-card-2)' }">
                  <strong class="block mb-1" :style="{ color: 'var(--accent)' }">{{ t('លទ្ធផល (Result)', 'Result') }}</strong>
                  <span>{{ t('ចិត្តកើតការនឿយណាយ (និព្វិទា) លែងប្រកាន់ស្អិត (វិរាគៈ) កាត់ផ្តាច់អវិជ្ជា និងតណ្ហាទាំងស្រុង សម្រេចព្រះនិព្វាន (សភាពដែលភ្លើងកិលេសបានរលត់អស់ឥតមានសេសសល់)។', 'Awakens disenchantment (nibbidā) and dispassion (virāga), cutting avijjā and taṇhā to attain Nibbāna.') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 3: កម្រិតកាត់ផ្តាច់ ៤ ថ្នាក់ នៃអរិយបុគ្គល -->
      <div v-if="activeLessonTab === 'ariya'" class="mt-6 space-y-4 fade-up">
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('សង្ខេបកម្រិតនៃការកាត់ផ្តាច់កិលេស និងចំណងសញ្ញោជនៈជាស្ថាពរតាមថ្នាក់អរិយបុគ្គលទាំង ៤៖', 'Summary of permanent eradication of fetters (saṅyojana) across the four stages of noble attainment:') }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <!-- Sotapanna -->
          <div class="card-paper p-4 sm:p-5 h-full flex flex-col justify-between" :style="{ background: 'var(--bg-card)' }">
            <div>
              <div class="flex items-center justify-between gap-2 mb-2">
                <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">ថ្នាក់ទី ១</span>
                <span class="paali">Sotāpanna</span>
              </div>
              <h4 class="font-display text-base font-bold" :style="{ color: 'var(--ink)' }">
                {{ t('១. ព្រះសោតាបន្ន (Stream-Enterer)', '1. Sotāpanna (Stream-Enterer)') }}
              </h4>
              <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                <strong :style="{ color: 'var(--accent)' }">{{ t('កិលេសដែលកាត់ផ្តាច់៖', 'Fetters Abandoned:') }}</strong>
                {{ t('កាត់ផ្តាច់ សក្កាយទិដ្ឋិ (ការយល់ថាមានអញ), វិចិកិច្ឆា (ការសង្ស័យលើព្រះរតនត្រ័យ), និង សីលព្វតបរាមាស (ការប្រកាន់ពិធីកម្មខុស)។', 'Cuts Personality View (sakkāya-diṭṭhi), Doubt (vicikicchā), and Clinging to Rites & Rituals (sīlabbata-parāmāsa).') }}
              </p>
            </div>
            <div class="mt-3 pt-2 text-[11px] font-semibold flex items-center gap-1.5" :style="{ borderTop: '1px dashed var(--border)', color: 'var(--accent-bright)' }">
              <span>🛡️</span>
              <span>{{ t('បិទទ្វារអបាយភូមិ ៤ ទាំងស្រុង មិនធ្លាក់នរកទៀតឡើយ (កើតយ៉ាងច្រើន ៧ ជាតិ)។', 'Four lower realms closed forever; at most 7 rebirths remaining.') }}</span>
            </div>
          </div>

          <!-- Sakadagami -->
          <div class="card-paper p-4 sm:p-5 h-full flex flex-col justify-between" :style="{ background: 'var(--bg-card)' }">
            <div>
              <div class="flex items-center justify-between gap-2 mb-2">
                <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">ថ្នាក់ទី ២</span>
                <span class="paali">Sakadāgāmī</span>
              </div>
              <h4 class="font-display text-base font-bold" :style="{ color: 'var(--ink)' }">
                {{ t('២. ព្រះសកទាគាមី (Once-Returner)', '2. Sakadāgāmī (Once-Returner)') }}
              </h4>
              <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                <strong :style="{ color: 'var(--accent)' }">{{ t('កិលេសដែលកាត់ផ្តាច់៖', 'Fetters Weakened:') }}</strong>
                {{ t('ធ្វើឱ្យ កាមរាគៈ (ចំណង់កាមគុណ) និង បដិឃៈ (កំហឹងទាស់ចិត្ត) ថយចុះស្តើងស្លេស។', 'Significantly attenuates sensual desire (kāma-rāga) and ill-will/aversion (paṭigha).') }}
              </p>
            </div>
            <div class="mt-3 pt-2 text-[11px] font-semibold flex items-center gap-1.5" :style="{ borderTop: '1px dashed var(--border)', color: 'var(--accent-bright)' }">
              <span>🌟</span>
              <span>{{ t('ត្រឡប់មកកើតក្នុងកាមភពនេះតែ ១ ជាតិទៀតប៉ុណ្ណោះ នឹងសម្រេចនិព្វាន។', 'Returns to this sense sphere only once more before complete liberation.') }}</span>
            </div>
          </div>

          <!-- Anagami -->
          <div class="card-paper p-4 sm:p-5 h-full flex flex-col justify-between" :style="{ background: 'var(--bg-card)' }">
            <div>
              <div class="flex items-center justify-between gap-2 mb-2">
                <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">ថ្នាក់ទី ៣</span>
                <span class="paali">Anāgāmī</span>
              </div>
              <h4 class="font-display text-base font-bold" :style="{ color: 'var(--ink)' }">
                {{ t('៣. ព្រះអនាគាមី (Non-Returner)', '3. Anāgāmī (Non-Returner)') }}
              </h4>
              <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                <strong :style="{ color: 'var(--accent)' }">{{ t('កិលេសដែលកាត់ផ្តាច់៖', 'Fetters Abandoned:') }}</strong>
                {{ t('កាត់ផ្តាច់ កាមរាគៈ និង បដិឃៈ បាន ១០០% (លែងខឹង និងលែងមានចំណង់ផ្លូវភេទដាច់ខាត)។', 'Completely cuts 100% of Sensual Desire (kāma-rāga) and Ill-will (paṭigha) — zero anger and zero lust.') }}
              </p>
            </div>
            <div class="mt-3 pt-2 text-[11px] font-semibold flex items-center gap-1.5" :style="{ borderTop: '1px dashed var(--border)', color: 'var(--accent-bright)' }">
              <span>🕊️</span>
              <span>{{ t('មិនត្រឡប់មកកាមភពឡើយ កើតក្នុងសុទ្ធាវាសព្រហ្ម រួចបរិនិព្វានលើភពនោះ។', 'Never returns to sensory realms; attains Arahantship in the Pure Abodes.') }}</span>
            </div>
          </div>

          <!-- Arahant -->
          <div class="card-paper p-4 sm:p-5 h-full flex flex-col justify-between" :style="{ background: 'var(--bg-card)' }">
            <div>
              <div class="flex items-center justify-between gap-2 mb-2">
                <span class="sutra-num font-bold text-xs" :style="{ color: '#ef4444' }">ថ្នាក់ទី ៤</span>
                <span class="paali">Arahant</span>
              </div>
              <h4 class="font-display text-base font-bold" :style="{ color: 'var(--ink)' }">
                {{ t('៤. ព្រះអរហន្ត (The Fully Awakened)', '4. Arahant (The Fully Awakened)') }}
              </h4>
              <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                <strong :style="{ color: '#ef4444' }">{{ t('កិលេសដែលកាត់ផ្តាច់៖', 'All Fetters Severed:') }}</strong>
                {{ t('កាត់ផ្តាច់កិលេសទាំងអស់ដែលនៅសល់ រួមទាំង រូបរាគៈ, អរូបរាគៈ, មានៈ (អំនួត), ឧទ្ធច្ចៈ (រវើរវាយ), និង អវិជ្ជា (ការមិនដឹងពិត) បានទាំងស្រុង។', 'Uproots all 5 higher fetters: Rūpa-rāga, Arūpa-rāga, Māna (conceit), Uddhacca (restlessness), and Avijjā (ignorance).') }}
              </p>
            </div>
            <div class="mt-3 pt-2 text-[11px] font-semibold flex items-center gap-1.5" :style="{ borderTop: '1px dashed var(--border)', color: '#ef4444' }">
              <span>🪷</span>
              <span>{{ t('សម្រេចភាពបរិសុទ្ធផុតទុក្ខទាំងស្រុង (អរហត្តផល) បរិនិព្វានឥតមានកំណើតទៀតឡើយ។', 'Attains full purity, extinguishing all suffering; no future rebirth.') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 8-fold path -->
    <div id="eightfold-path" class="card-paper p-6 md:p-8 mt-10 scroll-mt-24">
      <p class="chapter-label">{{ t('មគ្គ ៨', 'THE EIGHTFOLD PATH') }}</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('មាគ៌ាប្រពៃ ៨ យ៉ាង (អរិយដ្ឋង្គិកមគ្គ) ចែកជាបីពួក', 'The Noble Eightfold Path in Three Groups') }}</h3>
      <div class="grid md:grid-cols-3 gap-5 mt-5">
        <div v-for="g in pathGroups" :key="g.en" class="rounded-sm p-4 h-full flex flex-col justify-between" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <div>
            <p class="font-display font-bold" :style="{ color: 'var(--accent)' }">{{ t(g.km, g.en) }}</p>
            <ul class="tick-list mt-3 space-y-2">
              <li v-for="p in g.items" :key="p.en">
                <strong :style="{ color: 'var(--ink)' }">{{ t(p.km, p.en) }}</strong>
                <br>
                <span class="text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t(p.kmBody, p.enBody) }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 3 marks + 5 aggregates -->
    <div id="tilakkhana-khandha" class="grid lg:grid-cols-2 gap-6 mt-10 scroll-mt-24">
      <div class="card-paper p-6 h-full flex flex-col justify-between">
        <div>
          <p class="chapter-label">TILAKKHANA</p>
          <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ត្រៃលក្ខណ៍', 'Three Marks of Existence') }}</h3>
          <div v-for="m in marks" :key="m.en" class="mt-4 pb-4" :style="{ borderBottom: '1px solid var(--border)' }">
            <p class="font-display" :style="{ color: 'var(--accent)' }">{{ m.paali }} <span class="text-sm font-bold" :style="{ color: 'var(--ink)' }">— {{ t(m.km, m.en) }}</span></p>
            <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(m.kmBody, m.enBody) }}</p>
          </div>
        </div>
      </div>

      <div class="card-paper p-6 h-full flex flex-col justify-between">
        <div>
          <p class="chapter-label">PANCAKKHANDHĀ</p>
          <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ខន្ធ ៥', 'The Five Aggregates') }}</h3>
          <p class="text-sm mt-2" :style="{ color: 'var(--ink-muted)' }">{{ t('អ្វីដែលយើងហៅថា «ខ្លួនយើង» គឺប្រជុំនៃខន្ធ ៥ (ក្រុមរបស់ដែលតាក់តែងរូប-ចិត្ត) ដែលប្រែប្រួលរាល់ខណៈ។', 'What we call "my self" is a flux of five aggregates changing every moment.') }}</p>
          <ul class="tick-list mt-4 space-y-1.5">
            <li v-for="a in aggregates" :key="a.en">
              <strong :style="{ color: 'var(--ink)' }">{{ t(a.km, a.en) }}</strong>
              <span class="text-xs" :style="{ color: 'var(--ink-muted)' }"> — {{ t(a.kmBody, a.enBody) }}</span>
            </li>
          </ul>
        </div>
        <div class="verse-box p-3 mt-4">
          <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t('អ្វីៗទាំងអស់ (សព្វវត្ថុ) មិនមែនជាខ្លួន មិនមែនរបស់ខ្លួន។', 'All these things are not "I", not "mine".') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeLessonTab = ref('roots') // 'roots', 'eradication', 'ariya'

const truths = [
  { paali: 'DUKKHA', km: 'ទុក្ខ', en: 'Suffering', kmBody: 'កើត ចាស់ ស្លាប់ (ជាតិ ជរា មរណៈ) សោកស្តាយ ខ្សឹកខ្សួល ឈឺចាប់ ចង្អៀតចង្អល់; បែកព្រាត់ពីអ្វីដែលស្រឡាញ់; ជួបជុំជាមួយអ្វីដែលស្អប់; ចង់បានមិនបាន — សរុប ការប្រកាន់ខន្ធ ៥ ជាទុក្ខ។', enBody: 'Birth, ageing, death; sorrow, lamentation, pain, grief, despair; separation from the loved, union with the hated, not getting what one wants — in short, clinging to the five aggregates is suffering.' },
  { paali: 'SAMUDAYA', km: 'សមុទយៈ', en: 'Origin', kmBody: 'ហេតុនៃទុក្ខ គឺតណ្ហា (សេចក្តីប្រាថ្នាស្រេកឃ្លាន) ៣ យ៉ាង ៖ កាមតណ្ហា (ចង់បានកាម) ភវតណ្ហា (ចង់កើតទៀត) វិភវតណ្ហា (ចង់រលត់)។', enBody: 'The cause of suffering is craving — thirst for sense pleasures, for existence, and for non-existence.' },
  { paali: 'NIRODHA', km: 'និរោធៈ', en: 'Cessation', kmBody: 'កាលណាតណ្ហារលត់ មន្ទិល (សេចក្តីកខ្វក់របស់ចិត្ត) ក៏អស់ ទើបដល់និព្វាន ដែលមិនកើត មិនចាស់ មិនស្លាប់។', enBody: 'The utter fading of craving leads to Nibbāna — the unborn, unageing, undying.' },
  { paali: 'MAGGA', km: 'មគ្គៈ', en: 'Path', kmBody: 'ផ្លូវដែលនាំទៅរកទីកណ្តាល មិនបណ្តោយ មិនខំហួស — គឺអរិយដ្ឋង្គិកមគ្គ ទាំង ៨។', enBody: 'The middle way between indulgence and austerity — the Noble Eightfold Path.' },
]

const pathGroups = [
  {
    km: 'បញ្ញា', en: 'Wisdom',
    items: [
      { km: 'សម្មាទិដ្ឋិ', en: 'Right View', kmBody: 'យល់ឃើញត្រឹមត្រូវ — យល់ច្បាស់នូវទុក្ខ ហេតុ ការរលត់ មគ្គ។', enBody: 'Seeing the four truths aright.' },
      { km: 'សម្មាសង្កប្បៈ', en: 'Right Intention', kmBody: 'ចេតនាត្រឹមត្រូវ — គិតចេញពីទុក្ខ មិនគិតបៀតបៀន។', enBody: 'Resolve for renunciation, goodwill, harmlessness.' },
    ]
  },
  {
    km: 'សីល', en: 'Conduct',
    items: [
      { km: 'សម្មាវាចា', en: 'Right Speech', kmBody: 'មិននិយាយកុហក ញុះញង់ ជេរ ពាក្យឥតប្រយោជន៍។', enBody: 'No lying, slander, harsh or idle speech.' },
      { km: 'សម្មាកម្មន្តៈ', en: 'Right Action', kmBody: 'មិនសម្លាប់ មិនលួច មិនប្រព្រឹត្តិខុសក្នុងកាម។', enBody: 'No killing, stealing, sexual misconduct.' },
      { km: 'សម្មាអាជីវៈ', en: 'Right Livelihood', kmBody: 'ចិញ្ចឹមជីវិតដោយផ្លូវសុច្ចរិត។', enBody: 'Earning by a harmless, honest trade.' },
    ]
  },
  {
    km: 'សមាធិ', en: 'Concentration',
    items: [
      { km: 'សម្មាវាយាមៈ', en: 'Right Effort', kmBody: 'បង្កើតកុសល លះបង់អកុសល។', enBody: 'Cultivating the good, abandoning the bad.' },
      { km: 'សម្មាសតិ', en: 'Right Mindfulness', kmBody: 'ដឹងខ្លួនលើកាយ លើអារម្មណ៍ (វេទនា) លើគំនិត និងលើអ្វីដែលកើតក្នុងចិត្ត (ធម៌)។', enBody: 'Mindful of body, feeling, mind, dhammas.' },
      { km: 'សម្មាសមាធិ', en: 'Right Concentration', kmBody: 'ដាក់ចិត្តឲ្យស្ងប់ នៅនឹងអារម្មណ៍តែមួយ ឥតរាយមាយ។', enBody: 'Unifying the mind in one-pointed steadiness.' },
    ]
  },
]

const marks = [
  { paali: 'ANICCAṂ', km: 'អនិច្ចំ', en: 'Impermanence', kmBody: 'មិនទៀង — សង្ខារទាំងអស់ កើត រលត់ ប្រែប្រួលមិនឈប់។', enBody: 'All formations arise, cease, and change without pause.' },
  { paali: 'DUKKHAṂ', km: 'ទុក្ខំ', en: 'Suffering', kmBody: 'ជាទុក្ខ — អ្វីដែលមិនទៀង រមែងជាទីតាំងនៃទុក្ខ។', enBody: 'Whatever is impermanent is unsatisfactory.' },
  { paali: 'ANATTĀ', km: 'អនត្តា', en: 'Non-self', kmBody: 'គ្មានខ្លួន — គ្មានខ្លួន គ្មានរបស់ខ្លួន នៅក្នុងសង្ខារទាំងឡាយ។', enBody: 'In all formations, there is no lasting "I" to own.' },
]

const aggregates = [
  { km: 'រូប', en: 'Form', kmBody: 'កាយ និង វត្ថុផ្សេងៗ', enBody: 'body and materiality' },
  { km: 'វេទនា', en: 'Feeling', kmBody: 'សុខ ទុក្ខ និងអារម្មណ៍មិនល្អមិនអាក្រក់ (អព្យាក្រឹត)', enBody: 'pleasant, painful, neutral' },
  { km: 'សញ្ញា', en: 'Perception', kmBody: 'ចំណាំសម្គាល់អារម្មណ៍', enBody: 'marking and recognition' },
  { km: 'សង្ខារ', en: 'Formations', kmBody: 'ការគិតប្រុងប្រាប់ (ចេតនា) និងគំនិតផ្សំផ្គុំផ្សេងៗ', enBody: 'volitions and mental fabrications' },
  { km: 'វិញ្ញាណ', en: 'Consciousness', kmBody: 'ការដឹងអារម្មណ៍', enBody: 'bare knowing of an object' },
]
</script>
