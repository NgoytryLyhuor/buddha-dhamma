<template>
  <div class="w-full space-y-6 sm:space-y-8">
    <!-- Header -->
    <header class="text-center space-y-3 sm:space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20">
        <span>🍚</span>
        <span>{{ t('ធម្មវិទ្យានៃការចែករំលែកបុណ្យ & បុណ្យភ្ជុំបិណ្ឌ', 'The Mechanics of Merit Dedication & Ancestral Rites') }}</span>
      </div>
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900 dark:from-amber-200 dark:via-orange-200 dark:to-amber-400 bg-clip-text text-transparent leading-snug">
        {{ t('យន្តការឧទ្ទិសកុសល & បរទត្តូបជីវីប្រេត', 'Merit Transfer (Pattidāna) & Paradattūpajīvī Petas') }}
      </h1>
      <p class="text-xs sm:text-base text-stone-600 dark:text-stone-300 max-w-3xl mx-auto leading-relaxed">
        {{ t('តើការឧទ្ទិសបុណ្យដល់ញាតិដែលចែកឋានទៅដំណើរការយ៉ាងដូចម្តេច? ហេតុអ្វីបានជាមានតែប្រេតមួយពួកគត់ដែលអាចទទួលបុណ្យបាន? និងវិធីធ្វើបុណ្យឧទ្ទិសឱ្យចំគោលដៅ ១០០% តាមគម្ពីរពុទ្ធសាសនា។', 'How does merit transference work? Why can only one specific class of Petas receive shared merits? Canonical guide from the Jāṇussoṇī and Tirokuḍḍa Suttas.') }}
      </p>

      <!-- Section Navigation Pills (Horizontal swipe on mobile) -->
      <div class="flex items-center gap-1.5 sm:gap-2 pt-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center scrollbar-none touch-pan-x -mx-2 px-2 sm:mx-0 sm:px-0">
        <button
          v-for="sec in sections"
          :key="sec.id"
          @click="activeSection = sec.id"
          :class="[
            'px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shrink-0 border',
            activeSection === sec.id
              ? 'bg-amber-600 text-white border-amber-600 shadow-sm shadow-amber-600/30 scale-[1.02]'
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
      <div class="p-3 sm:p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center">
        <span class="text-xl sm:text-2xl block">🕯️</span>
        <span class="text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-200 block mt-1">{{ t('បដិទាន', 'Pattidāna') }}</span>
        <span class="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400">{{ t('ការចែករំលែកបុណ្យ', 'Merit dedication') }}</span>
      </div>
      <div class="p-3 sm:p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-center">
        <span class="text-xl sm:text-2xl block">👻</span>
        <span class="text-xs sm:text-sm font-bold text-orange-900 dark:text-orange-200 block mt-1">{{ t('បរទត្តូបជីវី', 'Paradattūpajīvī') }}</span>
        <span class="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400">{{ t('ប្រេតទទួលបុណ្យបាន', 'Only recipient class') }}</span>
      </div>
      <div class="p-3 sm:p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
        <span class="text-xl sm:text-2xl block">✨</span>
        <span class="text-xs sm:text-sm font-bold text-emerald-900 dark:text-emerald-200 block mt-1">{{ t('ចេតនា ៣ កាល', '3 Volitions') }}</span>
        <span class="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400">{{ t('មុន កំពុង & ក្រោយធ្វើ', 'Before, during, after') }}</span>
      </div>
      <div class="p-3 sm:p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-center">
        <span class="text-xl sm:text-2xl block">📜</span>
        <span class="text-xs sm:text-sm font-bold text-blue-900 dark:text-blue-200 block mt-1">{{ t('តិរោកុឌ្ឌសូត្រ', 'Tirokuḍḍa Sutta') }}</span>
        <span class="text-[10px] sm:text-xs text-stone-500 dark:text-stone-400">{{ t('សូត្រឧទ្ទិសញាតិ', 'Dedication discourse') }}</span>
      </div>
    </div>

    <!-- SECTION 1: HOW MERIT TRANSFER WORKS -->
    <section v-if="activeSection === 'mechanism' || activeSection === 'all'" class="space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">🕯️</span>
          <h2 class="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
            {{ t('យន្តការចិត្ត និងកម្មផលនៃការឧទ្ទិសបុណ្យ (The Mechanics of Pattidāna)', 'Psychological & Karmic Mechanics of Merit Transfer') }}
          </h2>
        </div>
      </div>
      <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
        {{ t('មនុស្សជាច្រើនយល់ច្រឡំថា ការឧទ្ទិសបុណ្យធ្វើឱ្យបុណ្យរបស់ខ្លួនថយចុះ។ ព្រះពុទ្ធបានពន្យល់ថា បុណ្យមិនដូចជាប្រាក់ដែលចាយហើយអស់នោះទេ តែដូចជាអណ្តាតភ្លើងទៀន។', 'Merit is not diminished by sharing. Like lighting another lamp from your flame, your own light never decreases; instead, the whole room becomes twice as bright!') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🔥</span>
            <div>
              <h3 class="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                {{ t('ឧបមាអំពីអណ្តាតប្រទីប (The Flame Analogy)', 'The Flame Analogy') }}
              </h3>
              <span class="text-[11px] font-mono text-amber-600 dark:text-amber-400">Milinda-Pañhā</span>
            </div>
          </div>
          <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ t('បុរសម្នាក់កាន់ចន្លុះភ្លើងភ្លឺចិញ្ចាច។ មនុស្ស ១០០ នាក់ផ្សេងទៀតកាន់ចន្លុះរលត់ មកសុំតភ្លើងពីចន្លុះរបស់គាត់។ អណ្តាតភ្លើងនៃចន្លុះដើម មិនត្រឹមតែមិនថយចុះពន្លឺប៉ុណ្ណោះទេ ថែមទាំងធ្វើឱ្យពន្លឺកាន់តែភ្លឺខ្លាំងទ្វេឡើងរាប់រយដង។ ការចែកបុណ្យ (បដិទាន) ក៏ដូច្នោះដែរ!', 'A person holds a burning torch. A hundred others bring unlit torches to borrow fire from it. The original flame does not diminish in the slightest; instead, the darkness is dispersed with hundredfold brilliance. Such is Pattidāna!') }}
          </p>
        </div>

        <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🧠</span>
            <div>
              <h3 class="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                {{ t('តើអ្នកទទួល ប្តូរទុក្ខជាសុខដោយរបៀបណា?', 'How Does the Recipient Transform Suffering?') }}
              </h3>
              <span class="text-[11px] font-mono text-amber-600 dark:text-amber-400">Abhidhamma Analysis</span>
            </div>
          </div>
          <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ t('អ្នកទទួលមិនមែនចាប់យកបាយ ទឹក ឬសំពត់ពីអ្នករស់នៅដោយផ្ទាល់នោះទេ។ តែនៅពេលដឹងថាញាតិបានធ្វើទានឧទ្ទិសមក ចិត្តរបស់គេកើត «បដ្តានុមោទនាម័យកុសលចិត្ត» (សោមនស្សសហគតំ) ពោលពាក្យ «សាធុ!»។ កុសលចិត្តនោះឯងជាអ្នកបង្កើតរូបទិព្វ បាយទិព្វ និងសម្លៀកបំពាក់ទិព្វជំនួសភ្លាមៗ!', 'The ghost does not consume gross physical rice. Rather, upon perceiving the dedication, their mind generates wholesome joy (Pattānumodanā-citta) and utters "Sādhu!". That wholesome mental state instantly manifests celestial food and garments!') }}
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 2: WHO CAN AND CANNOT RECEIVE MERIT -->
    <section v-if="activeSection === 'paradattupa' || activeSection === 'all'" class="space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">👻</span>
          <h2 class="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
            {{ t('តើអ្នកណាខ្លះអាចទទួលបុណ្យឧទ្ទិសបាន? (ជាណុស្សោណិសូត្រ)', 'Who Can Receive Transferred Merit? (Jāṇussoṇī Sutta)') }}
          </h2>
        </div>
        <span class="text-xs text-orange-700 dark:text-orange-300 font-mono">Aṅguttara Nikāya AN 10.177</span>
      </div>
      <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
        {{ t('ព្រាហ្មណ៍ឈ្មោះ ជាណុស្សោណិ បានទូលសួរព្រះពុទ្ធថា «តើទានដែលខ្ញុំឧទ្ទិសដល់ញាតិដែលចែកឋានទៅ ពួកគេបានទទួលទាំងអស់ដែរឬទេ?»។ ព្រះពុទ្ធត្រាស់តបថា មិនមែនទាំងអស់ទេ មានតែស្ថានដែលសមស្រប (ឋាន) ប៉ុណ្ណោះ៖', 'The Brahmin Jāṇussoṇī asked the Buddha if departed kin always receive gifts. The Buddha explained that it only reaches beings in appropriate conditions (Ṭhāna):') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div class="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1.5 opacity-75">
          <div class="flex items-center justify-between">
            <span class="font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100">🔥 {{ t('សត្វនរក (Niraya)', 'Hell Beings') }}</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-600 font-bold">{{ t('មិនបានទទួល', 'Cannot receive') }}</span>
          </div>
          <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
            {{ t('រងទុក្ខវេទនាខ្លាំងគ្រប់វិនាទី ចិត្តជាប់ជំពាក់នឹងការឈឺចាប់ គ្មានឱកាសនឹកឃើញអនុមោទនាបុណ្យឡើយ។', 'Overwhelmed by ceaseless torment every millisecond; incapable of redirecting mind to rejoice.') }}
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1.5 opacity-75">
          <div class="flex items-center justify-between">
            <span class="font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100">🐾 {{ t('សត្វតិរច្ឆាន (Tiracchāna)', 'Animals') }}</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-600 font-bold">{{ t('មិនបានទទួល', 'Cannot receive') }}</span>
          </div>
          <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
            {{ t('រស់នៅដោយមោហៈ ស្វែងរកចំណីតាមសភាវគតិ មិនដឹងពីការឧទ្ទិសបុណ្យរបស់មនុស្សឡើយ។', 'Governed by instinct and delusion; unable to comprehend merit dedications.') }}
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1.5 opacity-75">
          <div class="flex items-center justify-between">
            <span class="font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100">🧍 {{ t('មនុស្សលោក (Manussa)', 'Human Realm') }}</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 font-bold">{{ t('រស់តាមកម្មខ្លួន', 'Self-karma') }}</span>
          </div>
          <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
            {{ t('បើតាប់ជាតិជាមនុស្សរួចហើយ គេរស់នៅដោយអាហាររបស់មនុស្ស មិនអាចទទួលបាយទឹកតាមរយៈការឧទ្ទិសឡើយ។', 'Reborn as humans, they nourish on worldly sustenance through their own karma.') }}
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100">🪷 {{ t('ទេវតា & ព្រហ្ម (Devas)', 'Devas & Brahmas') }}</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 font-bold">{{ t('អនុមោទនាបាន', 'Can rejoice') }}</span>
          </div>
          <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
            {{ t('មានសម្បត្តិទិព្វស្រាប់ហើយ តែបើដឹងថាញាតិធ្វើបុណ្យឧទ្ទិសមក អាចអនុមោទនាបង្កើនរស្មី និងសេចក្តីសុខទ្វេឡើង។', 'Already possess celestial abundance, but rejoicing increases their celestial radiance.') }}
          </p>
        </div>

        <!-- THE SPECIAL RECIPIENT -->
        <div class="p-4 rounded-2xl bg-gradient-to-br from-orange-500/15 to-transparent border-2 border-orange-500/40 sm:col-span-2 space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="font-bold text-sm text-orange-950 dark:text-orange-200">👑 {{ t('បរទត្តូបជីវីប្រេត (Paradattūpajīvī Peta)', 'Paradattūpajīvī Petas') }}</span>
            <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-500/30">
              {{ t('ទទួលបុណ្យបាន ១០០%', 'Direct 100% Recipient') }}
            </span>
          </div>
          <p class="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
            {{ t('ជាពួកប្រេតតែមួយគត់ក្នុងចំណោមប្រេតទាំងអស់ ដែល «រស់នៅដោយសារការឲ្យរបស់អ្នកដទៃ» (បរ = អ្នកដទៃ, ទត្ត = ការឲ្យ, ឧបជីវី = ចិញ្ចឹមជីវិត)។ ពួកនេះគ្មានដីស្រែ គ្មានជំនួញជួញដូរឡើយ ត្រូវរង់ចាំតែញាតិឧទ្ទិសកុសលមកប៉ុណ្ណោះ។ នៅពេលញាតិឧទ្ទិស ហើយខ្លួនជ្រះថ្លាថា «សាធុ!» នោះទើបរួចផុតពីទុក្ខភ្លាមៗ!', 'The ONLY class of ghosts that survive solely on merits dedicated by human relatives. They have no agriculture, trade, or cattle; they depend entirely on dedicated gifts. When relatives dedicate merits and they utter "Sādhu!", their torment ends instantly!') }}
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 3: THE 3 CONDITIONS FOR SUCCESSFUL TRANSFER -->
    <section v-if="activeSection === 'conditions' || activeSection === 'all'" class="space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">⚖️</span>
          <h2 class="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
            {{ t('លក្ខខណ្ឌ ៣ ប្រការ ដើម្បីឱ្យការឧទ្ទិសបុណ្យបានផលពេញលេញ', 'The 3 Crucial Pillars for Successful Transfer') }}
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2">
          <div class="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-800 dark:text-amber-300 font-bold text-sm flex items-center justify-center border border-amber-500/20">
            ១
          </div>
          <h3 class="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
            {{ t('ទាយក (អ្នកឲ្យទាន)', 'The Donor (Dāyaka)') }}
          </h3>
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ t('ត្រូវមានចិត្តជ្រះថ្លា បរិសុទ្ធ មិនស្តាយក្រោយ និងតាំងចិត្តឧទ្ទិសចំពោះញាតិជាក់លាក់ (ឬញាតិទាំងអស់)។', 'Must possess pure volition, no regret, and specifically designate the merit dedication.') }}
          </p>
        </div>

        <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2">
          <div class="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-800 dark:text-amber-300 font-bold text-sm flex items-center justify-center border border-amber-500/20">
            ២
          </div>
          <h3 class="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
            {{ t('បេត (អ្នកទទួលបុណ្យ)', 'The Recipient (Peta)') }}
          </h3>
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ t('ត្រូវតែកើតជាបរទត្តូបជីវីប្រេត ស្ថិតនៅទីជិតល្មមអាចដឹង និងមានចិត្តជ្រះថ្លាពោលពាក្យ «សាធុ!»។', 'Must be a Paradattūpajīvī Peta, aware of the dedication, and consciously joyful to express "Sādhu!".') }}
          </p>
        </div>

        <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-2">
          <div class="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-800 dark:text-amber-300 font-bold text-sm flex items-center justify-center border border-amber-500/20">
            ៣
          </div>
          <h3 class="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
            {{ t('បដិគ្គាហក (អ្នកទទួលទាន)', 'The Field of Merit (Saṅgha)') }}
          </h3>
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ t('អ្នកទទួលទានត្រូវជាអ្នកមានសីលធម៌ ពិសេសគឺព្រះសង្ឃ (សង្ឃទាន មានអានិសង្សធំជាងបុគ្គលិកទាន)។', 'The recipient must be endowed with virtue, ideally the Sangha (Saṅghadāna yields vastly superior fruits).') }}
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 4: 3 VOLITIONS (CETANĀ) -->
    <section v-if="activeSection === 'cetana' || activeSection === 'all'" class="space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">✨</span>
          <h2 class="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
            {{ t('ចេតនា ៣ កាល ដើម្បីបានបុណ្យអានិសង្សខ្ពស់បំផុត', 'The 3 Volitions for Maximum Merit (Tividha Cetanā)') }}
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
          <span class="text-xs font-bold text-amber-800 dark:text-amber-200 block">១. បុព្វចេតនា (Pubba-cetanā)</span>
          <h4 class="font-semibold text-xs text-stone-800 dark:text-stone-200">{{ t('ចិត្តរីករាយមុនពេលធ្វើទាន', 'Joy before giving') }}</h4>
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ t('ពេលរៀបចំបាយសម្ល ទេយ្យទាន មានចិត្តត្រេកអរ រីករាយចង់ចែករំលែក គ្មានការត្អូញត្អែរ ឬធុញទ្រាន់ឡើយ។', 'Preparing the food and gifts with eager delight, without grumbling about costs or effort.') }}
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 space-y-1.5">
          <span class="text-xs font-bold text-orange-800 dark:text-orange-200 block">២. មុញ្ចនចេតនា (Muñcana-cetanā)</span>
          <h4 class="font-semibold text-xs text-stone-800 dark:text-stone-200">{{ t('ចិត្តបរិសុទ្ធពេលកំពុងប្រគល់ទាន', 'Pure clarity during giving') }}</h4>
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ t('ពេលកំពុងប្រគល់ចង្ហាន់ដល់ព្រះសង្ឃ ចិត្តមូល ជ្រះថ្លា គោរពចំពោះព្រះរតនត្រ័យ គ្មានចិត្តស្តាយស្រណោះ។', 'At the very moment of offering, mind remains focused, serene, and reverent without second thoughts.') }}
          </p>
        </div>

        <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1.5">
          <span class="text-xs font-bold text-emerald-800 dark:text-emerald-200 block">៣. អបរចេតនា (Apara-cetanā)</span>
          <h4 class="font-semibold text-xs text-stone-800 dark:text-stone-200">{{ t('ចិត្តត្រេកអរក្រោយពេលធ្វើទានរួច', 'Delight after giving (No regret)') }}</h4>
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ t('ក្រោយធ្វើទានរួច នឹកឃើញពេលណា ក៏នៅតែញញឹមរីករាយ មិនដែលស្តាយទ្រព្យ ឬគិតថា «ខាតលុយ» ឡើយ។', 'Days, months, and years later, recollecting the deed brings pure joy, never lamenting spent wealth.') }}
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 5: TIROKUDDA SUTTA & PRACTICAL GUIDE -->
    <section v-if="activeSection === 'guide' || activeSection === 'all'" class="space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">📜</span>
          <h2 class="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
            {{ t('វិធីឧទ្ទិសបុណ្យត្រឹមត្រូវ & បទសូត្របាលី (Tirokuḍḍa Sutta)', 'Practical Dedication & Canonical Pali Formula') }}
          </h2>
        </div>
      </div>

      <!-- Pali Formula Card -->
      <div class="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-500/15 via-stone-50 to-amber-500/5 dark:from-stone-900 dark:via-stone-900 dark:to-amber-950/20 border border-amber-500/30 space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-amber-800 dark:text-amber-300 font-mono">PALI FORMULA FOR MERIT DEDICATION</span>
          <span class="text-xs text-stone-500">Khuddakapāṭha</span>
        </div>
        <div class="p-3 sm:p-4 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-center space-y-1">
          <p class="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 font-serif">
            « ឥទំ វោ ញាតីនំ ហោតុ សុខិតា ហោន្តុ ញាតយោ »
          </p>
          <p class="text-xs text-stone-500 dark:text-stone-400 font-mono">
            Idaṃ vo ñātīnaṃ hotu, sukhitā hontu ñātayo.
          </p>
          <p class="text-xs text-amber-800 dark:text-amber-300 pt-1">
            {{ t('«សូមផលទាននេះ សម្រេចដល់ញាតិទាំងឡាយ សូមញាតិទាំងឡាយ បានដល់នូវសេចក្តីសុខ!»', '"May this merit reach our relatives; may our relatives be happy and peaceful!"') }}
          </p>
        </div>

        <!-- Clarifying Misconceptions -->
        <div class="space-y-2 pt-2">
          <h4 class="font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
            <span>💡</span>
            <span>{{ t('ការកែតម្រូវការយល់ច្រឡំទូទៅក្នុងការធ្វើបុណ្យ', 'Common Misconceptions Debunked') }}</span>
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div class="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-stone-700 dark:text-stone-300">
              <span class="text-red-700 dark:text-red-400 font-bold block mb-0.5">❌ {{ t('ដុតលុយក្លែងក្លាយ ផ្ទះក្រដាស រថយន្តក្រដាស', 'Burning fake paper money/cars') }}</span>
              <span>{{ t('គ្មានក្នុងពុទ្ធសាសនាឡើយ។ ព្រលឹង ឬប្រេត មិនអាចចាយលុយក្រដាស ឬជិះឡានក្រដាសបានទេ មានតែបុណ្យកុសលមួយគត់ដែលប្រែក្លាយជារបស់ទិព្វ។', 'Has zero basis in Dhamma. Spirits cannot spend burned paper; only dedicated merits manifest celestial relief.') }}</span>
            </div>
            <div class="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-stone-700 dark:text-stone-300">
              <span class="text-emerald-700 dark:text-emerald-400 font-bold block mb-0.5">✅ {{ t('ធ្វើសង្ឃទាន & រក្សាសីលឧទ្ទិស', 'Saṅghadāna & Sīla dedication') }}</span>
              <span>{{ t('ការប្រគេនចង្ហាន់ដល់សង្ឃ ការរក្សាសីល ការស្តាប់ធម៌ និងការសមាធិ រួចឧទ្ទិសកុសល ផ្តល់អានិសង្សពិតប្រាកដដល់ញាតិ។', 'Offering alms to the monastic community, observing precepts, and meditating create pure merit.') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER SUTTA QUOTE -->
    <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-center space-y-1">
      <span class="text-lg">🍚</span>
      <p class="text-xs sm:text-sm font-semibold text-amber-950 dark:text-amber-200">
        {{ t('«ទឹកភ្លៀងធ្លាក់លើទីទួល រមែងហូរធ្លាក់ទៅកាន់ទីទំនាបយ៉ាងណា ទានដែលបុគ្គលឲ្យហើយក្នុងលោកនេះ រមែងសម្រេចផលដល់ប្រេតទាំងឡាយ យ៉ាងនោះដែរ។»', '"Just as rain falling on high ground flows down to the low valleys, even so does what is given here in this world benefit the departed spirits."') }}
      </p>
      <span class="text-[11px] text-stone-500 dark:text-stone-400 font-mono">Tirokuḍḍa Sutta — Khuddakapāṭha Kp 7</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeSection = ref('mechanism')

const sections = [
  { id: 'mechanism', icon: '🕯️', km: 'យន្តការឧទ្ទិសបុណ្យ', en: 'How Transfer Works' },
  { id: 'paradattupa', icon: '👻', km: 'បរទត្តូបជីវីប្រេត & ពួកប្រេត', en: 'Paradattūpajīvī Petas' },
  { id: 'conditions', icon: '⚖️', km: 'លក្ខខណ្ឌ ៣ ប្រការ', en: '3 Essential Pillars' },
  { id: 'cetana', icon: '✨', km: 'ចេតនា ៣ កាល', en: '3 Pure Volitions' },
  { id: 'guide', icon: '📜', km: 'វិធីឧទ្ទិសជាក់ស្តែង & បាលី', en: 'Dedication Guide & Pali' },
  { id: 'all', icon: '📜', km: 'បង្ហាញទាំងអស់', en: 'Show All' }
]
</script>
