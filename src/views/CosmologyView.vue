<template>
  <div class="w-full space-y-6 sm:space-y-8">
    <!-- Header -->
    <header class="text-center space-y-3 sm:space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border border-indigo-500/20">
        <span>🌌</span>
        <span>{{ t('ចក្រវាឡវិទ្យា & ដើមកំណើតមនុស្សជាតិក្នុងព្រះត្រៃបិដក', 'Buddhist Cosmology & Origin of Society') }}</span>
      </div>
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-900 dark:from-indigo-200 dark:via-purple-200 dark:to-indigo-400 bg-clip-text text-transparent leading-snug">
        {{ t('កប្ប ចក្រវាឡ & អគ្គញ្ញសូត្រ', 'Cosmic Kalpas, Universes & Aggañña Sutta') }}
      </h1>
      <p class="text-xs sm:text-base text-stone-600 dark:text-stone-300 max-w-3xl mx-auto leading-relaxed">
        {{ t('ស្វែងយល់ពីមាត្រាពេលវេលាដ៏មហិមាក្នុងពុទ្ធសាសនា វដ្តនៃការកើតរលាយនៃចក្រវាឡ មហាវិនាសកម្មទាំង ៣ និងការវិវត្តនៃមនុស្សជាតិ និងរបៀបរបបសង្គមក្នុងអគ្គញ្ញសូត្រ។', 'Explore cosmic time scales (Kalpas), universal dissolution cycles, the 7 suns destruction, and the evolutionary origins of human society in the Aggañña Sutta.') }}
      </p>

      <!-- Section Pills -->
      <div class="flex items-center gap-1.5 sm:gap-2 pt-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center scrollbar-none touch-pan-x -mx-2 px-2 sm:mx-0 sm:px-0">
        <button
          v-for="sec in sections"
          :key="sec.id"
          @click="activeSection = sec.id"
          :class="[
            'px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shrink-0 border',
            activeSection === sec.id
              ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-600/30 scale-[1.02]'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-700'
          ]"
        >
          <span>{{ sec.icon }}</span>
          <span>{{ t(sec.km, sec.en) }}</span>
        </button>
      </div>
    </header>

    <!-- Quick Stat Highlights -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
      <div class="p-3 sm:p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-center">
        <span class="text-xl sm:text-2xl block">⏳</span>
        <span class="text-xs sm:text-sm font-bold text-indigo-900 dark:text-indigo-200 block mt-1">{{ t('មហាកប្ប', 'Mahā-kappa') }}</span>
        <span class="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400">{{ t('៤ អសង្ខេយ្យកប្ប', '4 cosmic epochs') }}</span>
      </div>
      <div class="p-3 sm:p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center">
        <span class="text-xl sm:text-2xl block">☀️</span>
        <span class="text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-200 block mt-1">{{ t('ព្រះអាទិត្យ ៧', '7 Cosmic Suns') }}</span>
        <span class="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400">{{ t('វិនាសកម្មដោយភ្លើង', 'Universal fire apocalypse') }}</span>
      </div>
      <div class="p-3 sm:p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
        <span class="text-xl sm:text-2xl block">🌱</span>
        <span class="text-xs sm:text-sm font-bold text-emerald-900 dark:text-emerald-200 block mt-1">{{ t('អគ្គញ្ញសូត្រ', 'Aggañña Sutta') }}</span>
        <span class="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400">{{ t('ដើមកំណើតសង្គម', 'Genesis of society & state') }}</span>
      </div>
      <div class="p-3 sm:p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center">
        <span class="text-xl sm:text-2xl block">🪷</span>
        <span class="text-xs sm:text-sm font-bold text-rose-900 dark:text-rose-200 block mt-1">{{ t('ភទ្ទកប្ប', 'Bhadda-kappa') }}</span>
        <span class="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400">{{ t('ព្រះពុទ្ធ ៥ ព្រះអង្គ', '5 Buddhas (Our era)') }}</span>
      </div>
    </div>

    <!-- SECTION 1: THE FOUR PHASES OF A MAHAKAPPA -->
    <section v-if="activeSection === 'timeline' || activeSection === 'all'" class="space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">🔄</span>
          <h2 class="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
            {{ t('ដំណាក់កាលទាំង ៤ នៃមហាកប្ប (៤ អសង្ខេយ្យកប្ប)', 'The 4 Cosmic Epochs of a Mahā-kappa') }}
          </h2>
        </div>
        <span class="text-xs text-indigo-700 dark:text-indigo-300 font-mono">Abhidhamma & Sutta</span>
      </div>
      <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
        {{ t('ចក្រវាឡមិនមែនកើតឡើងម្តងហើយចប់នោះឡើយ តែវិលវល់ក្នុងវដ្តដ៏មហិមា ៤ ដំណាក់កាល ហៅថា មហាកប្ប ១ ដែលមាន ៦៤ អន្តរកប្ប។', 'Universes expand, contract, collapse, and recreate in a ceaseless cyclic rhythm of 4 Asaṅkhyeyya-kappas.') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div
          v-for="(phase, idx) in mahakappaPhases"
          :key="idx"
          class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2 relative overflow-hidden"
        >
          <div class="flex items-center justify-between">
            <span class="text-2xl">{{ phase.icon }}</span>
            <span class="text-xs font-bold font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-700 dark:text-indigo-300">
              {{ phase.num }}
            </span>
          </div>
          <h3 class="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
            {{ t(phase.titleKm, phase.titleEn) }}
          </h3>
          <span class="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 block">{{ phase.pali }}</span>
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ t(phase.descKm, phase.descEn) }}
          </p>
          <div class="text-[11px] text-stone-500 dark:text-stone-400 pt-2 border-t border-stone-100 dark:border-stone-800">
            <strong>{{ t('ស្ថានភាព៖ ', 'Status: ') }}</strong>{{ t(phase.statusKm, phase.statusEn) }}
          </div>
        </div>
      </div>

      <!-- Two Analogies of Kalpa Duration -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
        <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-xl">🏔️</span>
            <h4 class="font-bold text-sm sm:text-base text-indigo-950 dark:text-indigo-200">
              {{ t('ឧបមាទី ១៖ ភ្នំថ្ម ១ យោជន៍ (Granite Mountain)', 'Analogy 1: The 16km Solid Granite Mountain') }}
            </h4>
          </div>
          <p class="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            {{ t('ភ្នំថ្មតាន់មួយដុំ មានបណ្តោយ ១ យោជន៍ ទទឹង ១ យោជន៍ កម្ពស់ ១ យោជន៍ (ប្រមាណ ១៦ គីឡូម៉ែត្រ)។ រៀងរាល់ ១០០ ឆ្នាំម្តង មានទេវតាយកសំពត់កាសីស្តើងដូចផ្សែងមកបោសភ្នំនោះម្តង។ បោសរហូតដល់ភ្នំថ្មដ៏មហិមានោះសឹករាបស្មើរនឹងដី ក៏កប្បមួយនៅមិនទាន់ចប់នៅឡើយ!', 'A solid block of granite mountain, 1 yojana high, long, and wide (approx. 16 km). Every 100 years, a celestial being strokes it gently with a sheer silk cloth. Even when that mountain is worn down completely flat, a single Kalpa has still not elapsed!') }}
          </p>
          <span class="text-[11px] font-mono text-stone-500 dark:text-stone-400 block">Samyutta Nikāya SN 15.5</span>
        </div>

        <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-xl">🌰</span>
            <h4 class="font-bold text-sm sm:text-base text-purple-950 dark:text-purple-200">
              {{ t('ឧបមាទី ២៖ ក្រុងគ្រាប់ស្ពៃដែក (Mustard Seed City)', 'Analogy 2: The Fortress of Mustard Seeds') }}
            </h4>
          </div>
          <p class="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            {{ t('បន្ទាយដែកមួយ មានកម្ពស់ ១ យោជន៍ ទទឹង ១ យោជន៍ ផ្ទុកទៅដោយគ្រាប់ស្ពៃដ៏តូចៗយ៉ាងណែនណាន់តាន់តាប់។ រៀងរាល់ ១០០ ឆ្នាំម្តង យកគ្រាប់ស្ពៃចេញមួយគ្រាប់។ ទោះបីជាគ្រាប់ស្ពៃរាប់ពាន់លានគ្រាប់នោះអស់រលីងពីបន្ទាយ ក៏កប្បមួយនៅមិនទាន់ចប់នៅឡើយ!', 'An iron city wall, 1 yojana long, wide, and high, packed solid with minuscule mustard seeds. Once every 100 years, someone removes one seed. All those seeds would be exhausted before a single Mahā-kappa is ended!') }}
          </p>
          <span class="text-[11px] font-mono text-stone-500 dark:text-stone-400 block">Samyutta Nikāya SN 15.6</span>
        </div>
      </div>
    </section>

    <!-- SECTION 2: THE 3 UNIVERSAL DESTRUCTIONS -->
    <section v-if="activeSection === 'destruction' || activeSection === 'all'" class="space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">💥</span>
          <h2 class="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
            {{ t('មហាវិនាសកម្មទាំង ៣ នៃលោកធាតុ (Universal Destructions)', 'The 3 Elements of Cosmic Dissolution') }}
          </h2>
        </div>
      </div>
      <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
        {{ t('នៅចុងបញ្ចប់នៃកប្ប លោកធាតុនឹងត្រូវបំផ្លាញទៅតាមអំណាចនៃកិលេសដែលក្រាស់ក្នុងចិត្តសត្វលោក (លោភៈ ទោសៈ ឬមោហៈ)៖', 'The mode of universal dissolution corresponds to the dominant mental defilement of beings in that cosmic era:') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div class="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🔥</span>
            <div>
              <h3 class="font-bold text-sm sm:text-base text-amber-950 dark:text-amber-200">
                {{ t('វិនាសដោយភ្លើង (តេជោ)', 'Destroyed by Fire (Tejo)') }}
              </h3>
              <span class="text-[11px] font-mono text-amber-700 dark:text-amber-300">{{ t('កើតឡើងពី៖ លោភៈ (Greed)', 'Caused by: Greed (Lobha)') }}</span>
            </div>
          </div>
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ t('នៅពេលសត្វលោកសម្បូរដោយការលោភលន់ហួសហេតុ ព្រះអាទិត្យ ៧ ដួងនឹងរះឡើងជាបន្តបន្ទាប់ បង្កើតជាភ្លើងឆេះបំផ្លាញតាំងពីស្ថាននរក រហូតដល់ស្ថានព្រហ្មជាន់ទី ១ (បឋមជ្ឈាន)។', 'When greed dominates beings, 7 suns emerge sequentially, incinerating everything from the lowest hell up to the 1st Jhana Brahma realms.') }}
          </p>
          <div class="text-[11px] text-amber-800 dark:text-amber-300 font-medium">
            {{ t('ឆេះដល់៖ ព្រហ្មលោកជាន់ទី ១-៣', 'Burns up to: 1st Jhana Brahma realms') }}
          </div>
        </div>

        <div class="p-4 sm:p-5 rounded-2xl bg-blue-500/10 border border-blue-500/20 space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🌊</span>
            <div>
              <h3 class="font-bold text-sm sm:text-base text-blue-950 dark:text-blue-200">
                {{ t('វិនាសដោយទឹក (អាបោ)', 'Destroyed by Acidic Water (Āpo)') }}
              </h3>
              <span class="text-[11px] font-mono text-blue-700 dark:text-blue-300">{{ t('កើតឡើងពី៖ ទោសៈ (Anger)', 'Caused by: Hatred (Dosa)') }}</span>
            </div>
          </div>
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ t('នៅពេលសត្វលោកក្រាស់ដោយគំនុំ កំហឹង និងការកាប់សម្លាប់គ្នា មហាមេឃនឹងបង្អុរទឹកអាស៊ីតដ៏ពុលខ្លាំង រលាយភ្នំព្រះសុមេរុ និងចក្រវាឡ រហូតដល់ស្ថានព្រហ្មទុតិយជ្ឈាន (អាភស្សរា)។', 'When hatred and violence dominate, toxic acidic rain dissolves Mount Meru and realms up to the 2nd Jhana Brahma realm (Ābhassara).') }}
          </p>
          <div class="text-[11px] text-blue-800 dark:text-blue-300 font-medium">
            {{ t('រលាយដល់៖ ព្រហ្មលោកជាន់ទី ៤-៦', 'Dissolves up to: 2nd Jhana Brahma realms') }}
          </div>
        </div>

        <div class="p-4 sm:p-5 rounded-2xl bg-purple-500/10 border border-purple-500/20 space-y-3">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🌪️</span>
            <div>
              <h3 class="font-bold text-sm sm:text-base text-purple-950 dark:text-purple-200">
                {{ t('វិនាសដោយខ្យល់ (វាយោ)', 'Destroyed by Cyclone Wind (Vāyo)') }}
              </h3>
              <span class="text-[11px] font-mono text-purple-700 dark:text-purple-300">{{ t('កើតឡើងពី៖ មោហៈ (Delusion)', 'Caused by: Delusion (Moha)') }}</span>
            </div>
          </div>
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ t('នៅពេលសត្វលោកងងឹតវង្វេងដោយមោហៈខ្លាំង មហាខ្យល់កំបុតត្បូងនឹងបក់បោកបំប៉ើងចក្រវាឡឱ្យធ្លាយខ្ចាត់ខ្ចាយ រហូតដល់ស្ថានព្រហ្មតតិយជ្ឈាន (សុភកិណ្ហា)។', 'When spiritual delusion dominates, catastrophic cosmic gales shatter and pulverize realms up to the 3rd Jhana Brahma realm (Subhakiṇhā).') }}
          </p>
          <div class="text-[11px] text-purple-800 dark:text-purple-300 font-medium">
            {{ t('បក់ខ្ចាត់ខ្ចាយដល់៖ ព្រហ្មលោកជាន់ទី ៧-៩', 'Pulverizes up to: 3rd Jhana Brahma realms') }}
          </div>
        </div>
      </div>

      <!-- Sattasūriya Sutta Breakdown (7 Suns) -->
      <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3">
        <h3 class="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <span>☀️</span>
          <span>{{ t('ដំណើរនៃព្រះអាទិត្យទាំង ៧ (សត្តសុរិយសូត្រ AN 7.66)', 'The Sequence of the 7 Suns (Sattasūriya Sutta AN 7.66)') }}</span>
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          <div v-for="sun in sevenSuns" :key="sun.num" class="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 space-y-1">
            <span class="text-xs font-bold text-amber-700 dark:text-amber-300">{{ sun.num }}. {{ t(sun.titleKm, sun.titleEn) }}</span>
            <p class="text-[11px] text-stone-600 dark:text-stone-300 leading-relaxed">{{ t(sun.descKm, sun.descEn) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: AGGANNA SUTTA (HUMAN GENESIS & SOCIETY) -->
    <section v-if="activeSection === 'agganna' || activeSection === 'all'" class="space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">🌱</span>
          <h2 class="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
            {{ t('អគ្គញ្ញសូត្រ៖ ដំណើរដើមកំណើតមនុស្សជាតិ និងរដ្ឋ (Aggañña Sutta)', 'Aggañña Sutta: Genesis of Human Beings & State') }}
          </h2>
        </div>
        <span class="text-xs text-emerald-700 dark:text-emerald-300 font-mono">Dīgha Nikāya DN 27</span>
      </div>
      <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
        {{ t('ព្រះសម្មាសម្ពុទ្ធបានបដិសេធជំនឿថា ព្រះព្រហ្មជាអ្នកបង្កើតមនុស្ស ឬវណ្ណៈ ៤ នៃពួកព្រាហ្មណ៍។ ផ្ទុយទៅវិញ ព្រះអង្គបានពន្យល់ពីការវិវត្តតាមធម្មជាតិនៃមនុស្សជាតិ និងការបង្កើតរដ្ឋដោយកិច្ចសន្យាសង្គមដំបូងបង្អស់ក្នុងលោក។', 'The Buddha rejected the myth of divine creation. Instead, he presented an evolutionary explanation of human physiology, gender differentiation, private property, and the democratic social contract.') }}
      </p>

      <!-- 6-Stage Timeline -->
      <div class="space-y-3">
        <div
          v-for="(stage, idx) in aggannaStages"
          :key="idx"
          class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-emerald-500/40 transition-all space-y-2"
        >
          <div class="flex items-start gap-3">
            <span class="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold text-sm flex items-center justify-center shrink-0 border border-emerald-500/20">
              {{ stage.step }}
            </span>
            <div class="flex-1 space-y-1">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 class="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <span>{{ stage.icon }}</span>
                  <span>{{ t(stage.titleKm, stage.titleEn) }}</span>
                </h3>
                <span class="text-xs font-mono text-emerald-600 dark:text-emerald-400">{{ stage.pali }}</span>
              </div>
              <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {{ t(stage.descKm, stage.descEn) }}
              </p>
              <div class="p-2.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/10 text-xs text-emerald-900 dark:text-emerald-200 mt-2">
                <strong>{{ t('សារៈសំខាន់ទស្សនវិជ្ជា៖ ', 'Philosophical insight: ') }}</strong>
                <span>{{ t(stage.insightKm, stage.insightEn) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: TYPES OF KALPAS (Suñña vs Asuñña) -->
    <section v-if="activeSection === 'types' || activeSection === 'all'" class="space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">🪷</span>
          <h2 class="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
            {{ t('ប្រភេទនៃកប្ប (Types of Kalpas in the Cosmos)', 'Classification of Cosmic Kalpas') }}
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-xl">🌑</span>
            <h3 class="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
              {{ t('សុញ្ញកប្ប (Suñña-kappa)', 'Suñña-kappa (Void Kalpas)') }}
            </h3>
          </div>
          <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ t('កប្បទទេស្អាត ដែលគ្មានព្រះសម្មាសម្ពុទ្ធ គ្មានព្រះបច្ចេកពុទ្ធ និងគ្មានព្រះស្តេចចក្រពត្តិត្រាស់ដឹង ឬឧបត្តិឡើងឡើយ។ សត្វលោកក្នុងកប្បនេះរសាត់អណ្តែតក្នុងសង្សារវដ្តដោយងងឹតសូន្យសុង រាប់លានកប្បបន្តបន្ទាប់គ្នា។', 'Cosmic periods devoid of Buddhas, Paccekabuddhas, or Universal Monarchs. Beings wander endlessly in spiritual darkness without the Dhamma.') }}
          </p>
        </div>

        <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border border-amber-500/30 space-y-2 bg-gradient-to-br from-amber-500/5 to-transparent">
          <div class="flex items-center gap-2">
            <span class="text-xl">🌕</span>
            <h3 class="font-bold text-sm sm:text-base text-amber-900 dark:text-amber-200">
              {{ t('អសុញ្ញកប្ប (Asuñña-kappa)', 'Asuñña-kappa (Blessed Kalpas)') }}
            </h3>
          </div>
          <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ t('កប្បដ៏កម្របំផុត ដែលមានព្រះសម្មាសម្ពុទ្ធត្រាស់ដឹង ដើម្បីដឹកនាំសត្វឆ្លងផុតសមុទ្រទុក្ខ។ ចែកចេញជា ៥ ប្រភេទ៖', 'Extremely rare eras blessed by the appearance of Fully Enlightened Buddhas:') }}
          </p>
          <ul class="text-xs space-y-1 text-stone-700 dark:text-stone-300 pt-1">
            <li>• <strong>សារកប្ប (Sāra-kappa)៖</strong> មានព្រះពុទ្ធ ១ ព្រះអង្គ</li>
            <li>• <strong>មណ្ឌកប្ប (Maṇḍa-kappa)៖</strong> មានព្រះពុទ្ធ ២ ព្រះអង្គ</li>
            <li>• <strong>វរកប្ប (Vara-kappa)៖</strong> មានព្រះពុទ្ធ ៣ ព្រះអង្គ</li>
            <li>• <strong>សារមណ្ឌកប្ប (Sāramaṇḍa-kappa)៖</strong> មានព្រះពុទ្ធ ៤ ព្រះអង្គ</li>
            <li>• <strong>ភទ្ទកប្ប (Bhadda-kappa)៖</strong> មានព្រះពុទ្ធ ៥ ព្រះអង្គ (កម្របំផុត និងជាកប្បដែលយើងកំពុងរស់នៅសព្វថ្ងៃ!)</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FOOTER DHAMMA NOTE -->
    <div class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-center space-y-1">
      <span class="text-lg">☸️</span>
      <p class="text-xs sm:text-sm font-semibold text-indigo-950 dark:text-indigo-200">
        {{ t('«សង្សារវដ្តនេះ មិនអាចរកទីផ្តើម និងទីបញ្ចប់ឃើញឡើយ។ ទឹកភ្នែក និងឈាមដែលអ្នកធ្លាប់ស្រក់ក្នុងសង្សារវដ្ត មានបរិមាណច្រើនជាងទឹកក្នុងមហាសមុទ្រទាំង ៤ ទៅទៀត។»', '"Inconceivable is the beginning of this Saṃsāra. The tears and blood you have shed in your infinite rebirths are far greater than the waters of all four oceans combined."') }}
      </p>
      <span class="text-[11px] text-stone-500 dark:text-stone-400 font-mono">Assu Sutta — Saṃyutta Nikāya SN 15.3</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeSection = ref('timeline')

const sections = [
  { id: 'timeline', icon: '⏳', km: 'មហាកប្ប ៤ ដំណាក់កាល', en: '4 Mahā-kappa Epochs' },
  { id: 'destruction', icon: '💥', km: 'មហាវិនាសកម្មទាំង ៣', en: '3 Universal Destructions' },
  { id: 'agganna', icon: '🌱', km: 'អគ្គញ្ញសូត្រ (កំណើតមនុស្ស)', en: 'Aggañña Sutta (Human Origins)' },
  { id: 'types', icon: '🪷', km: 'ប្រភេទនៃកប្ប', en: 'Classification of Kalpas' },
  { id: 'all', icon: '📜', km: 'បង្ហាញទាំងអស់', en: 'Show All' }
]

const mahakappaPhases = [
  {
    num: '១',
    icon: '🔥',
    titleKm: 'សំវដ្តកប្ប (កាលរលាយ)',
    titleEn: 'Saṃvaṭṭa-kappa (Dissolution)',
    pali: 'Saṃvaṭṭa-kappa',
    descKm: 'កាលវេលាដែលចក្រវាឡកំពុងត្រូវភ្លើង ទឹកអាស៊ីត ឬខ្យល់បំផ្លាញខ្ទេចខ្ទី។ គ្រប់រូបធាតុទាំងអស់រលាយបាត់បង់រូបរាង។',
    descEn: 'The period of dissolution when the cosmic system is incinerated, dissolved, or shattered.',
    statusKm: 'កំពុងរលាយបាត់បង់រូប',
    statusEn: 'Actively dissolving'
  },
  {
    num: '២',
    icon: '🌌',
    titleKm: 'សំវដ្តដ្ឋាយីកប្ប (កាលទទេស្អាត)',
    titleEn: 'Saṃvaṭṭaṭṭhāyī (Void Darkness)',
    pali: 'Saṃvaṭṭaṭṭhāyī-kappa',
    descKm: 'កាលវេលាដែលចក្រវាឡត្រូវរលាយអស់ គ្មានសល់អ្វីទាំងអស់ មានតែភាពងងឹតសូន្យសុង និងលំហទទេអាកាសដ៏ធំល្វឹងល្វើយ។',
    descEn: 'The cosmic resting state: an immense void of utter silence and darkness after destruction.',
    statusKm: 'លំហទទេស្អាត គ្មានភពផែនដី',
    statusEn: 'Cosmic void emptiness'
  },
  {
    num: '៣',
    icon: '✨',
    titleKm: 'វិវដ្តកប្ប (កាលកកើតឡើងវិញ)',
    titleEn: 'Vivaṭṭa-kappa (Reconstitution)',
    pali: 'Vivaṭṭa-kappa',
    descKm: 'មហាមេឃបង្អុរទឹកភ្លៀងធំបង្កើតជាទឹកកកក កកើតជាដី ភ្នំ និងចក្រវាឡឡើងវិញជាបណ្តើរៗ។',
    descEn: 'Cosmic clouds condense, primordial water solidifies into earth crust, realms and stars reform.',
    statusKm: 'កំពុងវិវត្តកកើតឡើងវិញ',
    statusEn: 'Reconstituting matter'
  },
  {
    num: '៤',
    icon: '🌍',
    titleKm: 'វិវដ្តដ្ឋាយីកប្ប (កាលតាំងនៅ)',
    titleEn: 'Vivaṭṭaṭṭhāyī (Habitable Era)',
    pali: 'Vivaṭṭaṭṭhāyī-kappa',
    descKm: 'កាលវេលាដែលភពផែនដីមានសត្វលោក និងមនុស្សរស់នៅប្រកបដោយស្ថិរភាព (ជាសម័យដែលយើងកំពុងរស់នៅសព្វថ្ងៃ)។',
    descEn: 'The stable habitable epoch where life thrives, civilizations rise, and Buddhas appear.',
    statusKm: 'សម័យកាលបច្ចុប្បន្នរបស់យើង',
    statusEn: 'Our current habitable era'
  }
]

const sevenSuns = [
  { num: '១', titleKm: 'ព្រះអាទិត្យទី ១', titleEn: 'First Sun', descKm: 'កម្ដៅឡើងខ្ពស់ គ្មានភ្លៀងធ្លាក់ រុក្ខជាតិតូចតាច ស្មៅ និងព្រៃឈើស្លាប់ក្រៀមស្វិត។', descEn: 'Severe drought, no rain; grass and vegetation wither away.' },
  { num: '២', titleKm: 'ព្រះអាទិត្យទី ២', titleEn: 'Second Sun', descKm: 'ព្រះអាទិត្យទី ២ រះឡើង គ្មានយប់ថ្ងៃ ស្ទឹង អូរ បឹងតូចៗ រីងស្ងួតអស់គ្មានសល់។', descEn: 'Day and night vanish; streams, small rivulets, and ponds evaporate.' },
  { num: '៣', titleKm: 'ព្រះអាទិត្យទី ៣', titleEn: 'Third Sun', descKm: 'មហានទីទាំង ៥ (គង្គា យមុនា សរភូ អចិរវតី មហី) រីងស្ងួតគ្មានសល់ទឹកមួយតំណក់។', descEn: 'The 5 great continental rivers dry up completely.' },
  { num: '៤', titleKm: 'ព្រះអាទិត្យទី ៤', titleEn: 'Fourth Sun', descKm: 'បឹងធំៗនៅជើងភ្នំហិមពាន្ត រួមទាំងបឹងអនោតត្ត រីងហួតហែងគ្មានសល់។', descEn: 'The great glacial lakes in the Himalayas dry up completely.' },
  { num: '៥', titleKm: 'ព្រះអាទិត្យទី ៥', titleEn: 'Fifth Sun', descKm: 'មហាសមុទ្រទាំងឡាយរីងស្ងួតជាបណ្តើរៗ រហូតសល់ទឹកមិនដល់មួយថ្នាំងដៃ។', descEn: 'The great oceans evaporate until not enough water wets a knuckle.' },
  { num: '៦', titleKm: 'ព្រះអាទិត្យទី ៦', titleEn: 'Sixth Sun', descKm: 'ផែនដី និងភ្នំព្រះសុមេរុ ចាប់ផ្តើមហុយផ្សែងខ្មួលខ្មាញ់ដូចគុកភ្លើងជាងស្មូនឆ្នាំង។', descEn: 'The earth crust and Mount Meru belch smoke like a kiln.' },
  { num: '៧', titleKm: 'ព្រះអាទិត្យទី ៧', titleEn: 'Seventh Sun', descKm: 'ផែនដីផ្ទុះឆេះជាសន្លឹកភ្លើងដ៏មហិមា កម្ទេចចក្រវាឡរាប់លាន ឆេះរាលដល់ព្រហ្មលោក! ផេះក៏គ្មានសល់!', descEn: 'The universe erupts into an inferno reaching the Brahma realm; zero ash remains!' }
]

const aggannaStages = [
  {
    step: '១',
    icon: '✨',
    titleKm: 'ពន្លឺស្វ័យប្រវត្តិនៃពួកព្រហ្ម (Self-Luminous Beings)',
    titleEn: 'Luminous Mind-Made Brahma Beings',
    pali: 'Sayamppabhā antalikkhacarā',
    descKm: 'ក្នុងកាលដែលផែនដីកកើតឡើងវិញ សត្វពីស្ថានអាភស្សរព្រហ្មបានចុះមកកើតលើផែនដី។ ពួកគេមានរូបកាយថ្លា មានពន្លឺរស្មីចេញពីរាងកាយ ហោះហើរក្នុងលំហអាកាស និងស៊ីបីតិ (សេចក្តីរីករាយ) ជាអាហារ គ្មានភេទប្រុសស្រីឡើយ។',
    descEn: 'Brahma beings descend from the radiant Ābhassara realm, floating through space with self-luminous bodies, nourished by sheer meditative bliss, genderless and free from hunger.',
    insightKm: 'មនុស្សដំបូងមិនមែនបង្កើតឡើងពីដីឥដ្ឋដោយព្រះអាទិទេពឡើយ តែជាការផ្លាស់ប្តូររូបភាពពីពួកព្រហ្ម។',
    insightEn: 'Human origins trace back to refined meditative beings descending from higher mental realms.'
  },
  {
    step: '២',
    icon: '🍯',
    titleKm: 'ការភ្លក់រសផែនដី & កំណើតនៃតណ្ហា (Tasting the Earth Sap)',
    titleEn: 'Tasting the Sweet Primordial Earth',
    pali: 'Rasapathavī pāturahosi',
    descKm: 'ផែនដីមានជាតិរសផ្អែមក្រអូបដូចទឹកឃ្មុំសុទ្ធ។ ព្រហ្មមួយអង្គមានចិត្តចង់ដឹង ក៏យកចុងម្រាមដៃទៅជ្រលក់ភ្លក់រសផែនដី។ រសជាតិនោះបានជ្រួតជ្រាបតាមសរសៃប្រសាទ កើតជាតណ្ហា (ការជាប់ជំពាក់ចិត្ត)។ ព្រហ្មឯទៀតក៏នាំគ្នាភ្លក់តាម។',
    descEn: 'The earth crust condenses with a sweet, fragrant essence resembling pure honey. Driven by curiosity, a being tastes it with a fingertip. Craving penetrates their consciousness, and others follow.',
    insightKm: 'តណ្ហា (សេចក្តីស្រេកឃ្លាន) គឺជាចំណុចចាប់ផ្តើមនៃការធ្លាក់ចុះនៃចិត្ត និងរូបកាយ។',
    insightEn: 'Sensory craving (Taṇhā) initiates the degradation of physical form and consciousness.'
  },
  {
    step: '៣',
    icon: '🌑',
    titleKm: 'ការបាត់បង់រស្មី & ការកើតព្រះអាទិត្យ-ព្រះចន្ទ (Loss of Radiance)',
    titleEn: 'Loss of Luminance & Dawn of Sun/Moon',
    pali: 'Suriya-Candimā pāturhesuṃ',
    descKm: 'នៅពេលតណ្ហាកាន់តែក្រាស់ រស្មីក្នុងខ្លួនរបស់ពួកគេក៏រលត់បាត់ទៅ ធ្វើឱ្យពិភពលោកធ្លាក់ក្នុងភាពងងឹត។ ដោយសារកម្មនៃសត្វលោក ព្រះចន្ទ ព្រះអាទិត្យ ផ្កាយ យប់ថ្ងៃ និងរដូវកាលក៏ចាប់ផ្តើមកើតឡើង។ រូបកាយចាប់ផ្តើមគ្រើមទៅៗ។',
    descEn: 'As craving solidifies, their inner radiance vanishes into darkness. In response to collective karma, the sun, moon, constellations, day, night, and seasons become manifest. Bodies become coarse.',
    insightKm: 'រូបរាងកាយផ្លាស់ប្តូរទៅតាមចំណីអាហារ និងគុណភាពនៃចិត្តគំនិត។',
    insightEn: 'Gross food transforms radiant subtle bodies into dense biological matter.'
  },
  {
    step: '៤',
    icon: '👥',
    titleKm: 'ការកើតភេទប្រុស-ស្រី & គ្រួសារ (Emergence of Gender & Sex)',
    titleEn: 'Gender Differentiation & Attraction',
    pali: 'Itthiliṅgañca purisaliṅgañca',
    descKm: 'រូបកាយរបស់មនុស្សចាប់ផ្តើមបែកចែកច្បាស់លាស់៖ អ្នកខ្លះមានលក្ខណៈជាស្ត្រី អ្នកខ្លះជាបុរស។ នៅពេលសម្លឹងមើលគ្នាយូរៗទៅ ក៏កើតតម្រេកកាមគុណ រួចរួមមេត្រីជាមួយគ្នា។ មនុស្សដទៃទៀតឃើញហើយ បានតិះដៀល និងគប់ដីដាក់ ទើបពួកគេនាំគ្នាសង់ផ្ទះបាំងដើម្បីលាក់បាំង។',
    descEn: 'Physical characteristics diverge into male and female faculties. Prolonged gaze sparks sexual desire, leading to cohabitation. Disapproving onlookers mock them, prompting them to build houses for privacy.',
    insightKm: 'ស្ថាប័នគ្រួសារ និងលំនៅឋានដំបូង កើតឡើងពីសេចក្តីអៀនខ្មាស និងតណ្ហាកាមគុណ។',
    insightEn: 'The institution of domestic housing evolved directly to conceal sexual intimacy.'
  },
  {
    step: '៥',
    icon: '🌾',
    titleKm: 'ការប្រមូលស្តុកស្រូវ & កម្មសិទ្ធិឯកជន (Hoarding & Private Property)',
    titleEn: 'Hoarding Wild Rice & Private Property',
    pali: 'Sālimaggahuṃ sannidhiṃ kariṃsu',
    descKm: 'ដើមឡើយ ស្រូវសាលីដុះឯកឯង គ្មានកន្ទក់ គ្មានអង្កាម ច្រូតពេលព្រឹក ល្ងាចដុះឡើងវិញ។ ក្រោយមក មានមនុស្សខ្ជិល ចាប់ផ្តើមច្រូតស្រូវស្តុកទុកច្រើនថ្ងៃ។ ស្រូវក៏ចាប់ផ្តើមមានអង្កាម និងឈប់ដុះឡើងវិញឯកឯង។ មនុស្សក៏នាំគ្នាបោះបង្គោលព្រំដែនដី ចែកស្រែគ្នាជាកម្មសិទ្ធិឯកជន។',
    descEn: 'Originally, fragrant hull-less rice grew spontaneously. An indolent person began hoarding portions for multiple days. The wild rice ceased auto-regrowing. Consequently, humans erected fences to demarcate private land.',
    insightKm: 'ភាពខ្ជិលច្រអូស និងការស្តុកទុក បានបង្កើតឱ្យមានកម្មសិទ្ធិឯកជន និងការខ្វះខាតធនធាន។',
    insightEn: 'Hoarding created scarcity, which birthed the concept of private property and land boundaries.'
  },
  {
    step: '៦',
    icon: '👑',
    titleKm: 'ការលួច & ការបោះឆ្នោតជ្រើសរើសមេដឹកនាំ «មហាសម្មត» (Social Contract)',
    titleEn: 'The First Democratic Social Contract (Mahāsammata)',
    pali: 'Mahājana-sammato ti Mahāsammato',
    descKm: 'នៅពេលមានដីស្រែរៀងៗខ្លួន មនុស្សម្នាក់បានលួចស្រូវរបស់អ្នកដទៃ បង្កឱ្យមានការឈ្លោះប្រកែក និងហិង្សា។ មនុស្សទាំងអស់ក៏បានប្រជុំគ្នា បោះឆ្នោតជ្រើសរើសបុរសម្នាក់ដែលមានប្រាជ្ញា រូបសម្បត្តិល្អ និងយុត្តិធម៌ ឱ្យធ្វើជាអ្នកកាត់សេចក្តី និងការពារច្បាប់ ដោយប្រជាជនព្រមបង់ចំណែកស្រូវជាពន្ធ (ស្តេចមហាសម្មត)។',
    descEn: 'Boundary violations sparked theft, deceit, and violence. The community assembled and democratically elected the wisest, most righteous individual to enforce justice and resolve disputes, compensated with a portion of their rice harvest (King Mahāsammata).',
    insightKm: 'ប្រភពដើមនៃរដ្ឋ និងស្តេច គឺកើតចេញពីការព្រមព្រៀងគ្នារបស់ប្រជាជន (Social Contract) មិនមែនកើតពីទេវតាប្រទានឡើយ។',
    insightEn: 'The State and governance originate from a popular democratic social contract, not divine right!'
  }
]
</script>
