<template>
  <div class="fade-up space-y-8">
    <!-- Chapter Header -->
    <div class="space-y-3">
      <p class="chapter-label">{{ t('មាតិកាធម៌ជាន់ខ្ពស់ — បដិច្ចសមុប្បាទ', 'PROFOUND FOUNDATIONS — PAṬICCASAMUPPĀDA') }}</p>
      <h2 class="font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
        {{ t('បដិច្ចសមុប្បាទ ១២ — ខ្សែសង្វាក់នៃហេតុ និងផល', 'The 12 Links of Dependent Origination') }}
      </h2>
      <div class="ornament">&#9784;</div>
      <p class="drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
        {{ t('«អ្នកណាឃើញបដិច្ចសមុប្បាទ អ្នកនោះឃើញព្រះធម៌ អ្នកណាឃើញព្រះធម៌ អ្នកនោះឃើញបដិច្ចសមុប្បាទ» (មជ្ឈិមនិកាយ មហាហត្ថិបទោបមសូត្រ)។ បដិច្ចសមុប្បាទ គឺជាបេះដូងនៃពុទ្ធទស្សនវិជ្ជា ដែលពន្យល់ពីច្បាប់ធម្មជាតិដ៏ជ្រាលជ្រៅបំផុត ថាតើជីវិតនិងកងទុក្ខកើតឡើងយ៉ាងដូចម្តេចតាមខ្សែសង្វាក់នៃហេតុបច្ច័យ ១២ តំណាក់កាល ដោយគ្មានអាទិទេព ឬព្រហ្មលិខិតជាអ្នកបង្កើតឡើយ ហើយរបៀបរំលត់ខ្សែសង្វាក់នេះដើម្បីសម្រេចព្រះនិព្វាន។', '"Whoever sees Dependent Origination sees the Dhamma; whoever sees the Dhamma sees Dependent Origination" (MN 28). This core doctrine reveals the natural law of conditioned reality: how suffering arises link by link without any divine creator or fatalistic destiny, and how that very chain is broken through liberating wisdom.') }}
      </p>
    </div>

    <!-- 1. The Fundamental Universal Law (Idappaccayatā Formula) -->
    <div class="verse-box p-6 rounded-2xl text-center space-y-3 border">
      <span class="text-xs font-bold uppercase tracking-wider block" :style="{ color: 'var(--accent-bright)' }">
        ☸ {{ t('ច្បាប់ធម្មជាតិសកល — ឥទប្បច្ចយតា (Idappaccayatā Law)', 'The Universal Law of Conditionality') }}
      </span>
      <p class="paali text-base sm:text-lg font-semibold leading-relaxed" :style="{ color: 'var(--ink)' }">
        «ឥមស្មឹ សតិ ឥទំ ហោតិ, ឥមស្សុប្បាទា ឥទំ ឧប្បជ្ជតិ ។<br/>
        ឥមស្មឹ អសតិ ឥទំ ន ហោតិ, ឥមស្ស និរោធា ឥទំ និរុជ្ឈតិ ។»
      </p>
      <div class="max-w-2xl mx-auto pt-2 text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        <p class="font-medium">
          {{ t('«កាលបើរបស់នេះមាន របស់នោះទើបមាន, ព្រោះរបស់នេះកើតឡើង ទើបរបស់នោះកើតឡើង។<br/>កាលបើរបស់នេះគ្មាន របស់នោះក៏គ្មាន, ព្រោះរបស់នេះរលត់ទៅ ទើបរបស់នោះក៏រលត់ទៅ»។', 'When this exists, that comes to be; with the arising of this, that arises.<br/>When this does not exist, that does not come to be; with the cessation of this, that ceases.') }}
        </p>
        <p class="mt-2 text-[11px] opacity-80">
          {{ t('ពុទ្ធសាសនាមិនជឿលើ «អហេតុកវាទ» (កើតឡើងដោយចៃដន្យគ្មានហេតុ) ឬ «ឥស្សរនិម្មិតវាទ» (ព្រះអាទិទេពជាអ្នកបង្កើត) ឡើយ គឺអ្វីៗកើតឡើងដោយសារបច្ច័យតាក់តែង។', 'Buddhism rejects chance without causes (ahetukavāda) and creator deities (issaranimmātavāda); all phenomena arise dependent on specific causal conditions.') }}
        </p>
      </div>
    </div>

    <!-- 2. The 3 Cyclic Wheels of Samsara (វដ្ត ៣) -->
    <div class="card-paper p-5 sm:p-7 rounded-2xl border space-y-5">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0" :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          🔄
        </div>
        <div>
          <h3 class="font-display font-bold text-lg sm:text-xl" :style="{ color: 'var(--ink)' }">
            {{ t('វដ្ត ៣ — យន្តការវិលជុំនៃវាលវដ្តសង្សារ', 'The 3 Cyclic Wheels of Saṃsāra (Vaṭṭa 3)') }}
          </h3>
          <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
            {{ t('បដិច្ចសមុប្បាទចែកជា ៣ កង់វិលដែលរុញច្រានគ្នាទៅវិញទៅមកឥតឈប់ឈរ', 'The 12 links form three self-sustaining feedback cycles that keep beings reborn.') }}
          </p>
        </div>
      </div>

      <!-- 3 Wheels Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Kilesa Vatta -->
        <div class="p-4 rounded-xl border space-y-2 flex flex-col justify-between" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded text-amber-700 bg-amber-100 dark:text-amber-300 dark:bg-amber-950/60">
                {{ t('វដ្តទី ១', 'Cycle 1') }}
              </span>
              <span class="text-lg">🔥</span>
            </div>
            <h4 class="font-display font-bold text-base mt-2" :style="{ color: 'var(--ink)' }">
              {{ t('កិលេសវដ្ត (Kilesa-vaṭṭa)', 'Round of Defilements') }}
            </h4>
            <p class="text-xs font-semibold mt-1" :style="{ color: 'var(--accent)' }">
              {{ t('អវិជ្ជា • តណ្ហា • ឧបាទាន', 'Avijjā • Taṇhā • Upādāna') }}
            </p>
            <p class="text-xs leading-relaxed mt-2" :style="{ color: 'var(--ink-soft)' }">
              {{ t('ជាឫសគល់មេរោគក្នុងចិត្ត៖ សេចក្តីមិនដឹងពិត (អវិជ្ជា) បង្កើតសេចក្តីស្រេកឃ្លាន (តណ្ហា) និងការតោងប្រកាន់មាំ (ឧបាទាន) ជំរុញឱ្យសត្វលោកធ្វើសកម្មភាព។', 'The root mental impurities: Spiritual blindness (Avijjā) breeds insatiable thirst (Taṇhā) and attachment (Upādāna), driving all actions.') }}
            </p>
          </div>
          <div class="pt-2 border-t text-[11px] font-medium text-amber-600 dark:text-amber-400" :style="{ borderColor: 'var(--border)' }">
            {{ t('ជំរុញឱ្យកើត ⟶ កម្មវដ្ត', 'Drives ⟶ Round of Action') }}
          </div>
        </div>

        <!-- Kamma Vatta -->
        <div class="p-4 rounded-xl border space-y-2 flex flex-col justify-between" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded text-purple-700 bg-purple-100 dark:text-purple-300 dark:bg-purple-950/60">
                {{ t('វដ្តទី ២', 'Cycle 2') }}
              </span>
              <span class="text-lg">⚡</span>
            </div>
            <h4 class="font-display font-bold text-base mt-2" :style="{ color: 'var(--ink)' }">
              {{ t('កម្មវដ្ត (Kamma-vaṭṭa)', 'Round of Action (Kamma)') }}
            </h4>
            <p class="text-xs font-semibold mt-1" :style="{ color: 'var(--accent)' }">
              {{ t('សង្ខារ • ភព (កម្មភព)', 'Saṅkhāra • Bhava (Kammabhava)') }}
            </p>
            <p class="text-xs leading-relaxed mt-2" :style="{ color: 'var(--ink-soft)' }">
              {{ t('ការសាងអំពើ៖ ចេតនាកម្មទាំងល្អនិងអាក្រក់ តាមផ្លូវកាយ វាចា ចិត្ត ដែលសន្សំជាកម្លាំងទំនាញកម្មសម្រាប់ជីវិតនេះនិងជាតិបន្ទាប់។', 'Intentional action: Volitional deeds (good or bad) through body, speech, and mind that generate karmic momentum.') }}
            </p>
          </div>
          <div class="pt-2 border-t text-[11px] font-medium text-purple-600 dark:text-purple-400" :style="{ borderColor: 'var(--border)' }">
            {{ t('តាក់តែងឱ្យកើត ⟶ វិបាកវដ្ត', 'Ripens into ⟶ Round of Results') }}
          </div>
        </div>

        <!-- Vipaka Vatta -->
        <div class="p-4 rounded-xl border space-y-2 flex flex-col justify-between" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded text-blue-700 bg-blue-100 dark:text-blue-300 dark:bg-blue-950/60">
                {{ t('វដ្តទី ៣', 'Cycle 3') }}
              </span>
              <span class="text-lg">🌱</span>
            </div>
            <h4 class="font-display font-bold text-base mt-2" :style="{ color: 'var(--ink)' }">
              {{ t('វិបាកវដ្ត (Vipāka-vaṭṭa)', 'Round of Karmic Results') }}
            </h4>
            <p class="text-xs font-semibold mt-1" :style="{ color: 'var(--accent)' }">
              {{ t('វិញ្ញាណ • នាមរូប • សឡាយតនៈ • ផស្សៈ • វេទនា • ជាតិ • ជរាមរណៈ', 'Viññāṇa • Nāmarūpa • Saḷāyatana • Phassa • Vedanā • Jāti • Jarāmaraṇa') }}
            </p>
            <p class="text-xs leading-relaxed mt-2" :style="{ color: 'var(--ink-soft)' }">
              {{ t('ផលវិបាកដែលត្រូវទទួលរង៖ ការចាប់កំណើត រូបកាយ វិញ្ញាណដឹង ការប៉ះទង្គិច និងអារម្មណ៍សុខទុក្ខ។', 'The ripening results: Rebirth, physical body, cognitive faculties, sensory contact, and felt pleasure or pain.') }}
            </p>
          </div>
          <div class="pt-2 border-t text-[11px] font-medium text-blue-600 dark:text-blue-400" :style="{ borderColor: 'var(--border)' }">
            {{ t('ពេលវេទនាកើតឡើង ដាស់ ⟶ កិលេសវដ្ត ជាថ្មី', 'Re-ignites ⟶ Round of Defilements') }}
          </div>
        </div>
      </div>

      <!-- Feedback Loop Summary Callout -->
      <div class="p-3.5 rounded-xl border text-xs leading-relaxed flex items-center gap-3" :style="{ background: 'var(--accent-soft)', borderColor: 'var(--border-strong)' }">
        <span class="text-xl">🔁</span>
        <p :style="{ color: 'var(--ink)' }">
          <strong>{{ t('រង្វង់វិលជុំគ្មានទីបញ្ចប់៖', 'The Perpetual Loop:') }}</strong>
          {{ t(' កិលេស បង្កើត កម្ម ⟶ កម្ម បង្កើត វិបាក ⟶ ពេលវិបាក (វេទនា) កើតឡើង បើខ្វះសតិដឹងទាន់ ក៏បង្កើត កិលេស ថ្មីទៀត! នេះជាមូលហេតុដែលសត្វលោកវិលវល់ក្នុងសង្សារវដ្តរាប់កោដិជាតិ។', ' Defilements drive Kamma ⟶ Kamma produces Results ⟶ Results (feelings) ignite new Defilements if mindfulness is absent! This is why beings wander endlessly through lifetimes.') }}
        </p>
      </div>
    </div>

    <!-- 3. THE ESCAPE POINT / ចំណុចកាត់ផ្តាច់ខ្សែសង្វាក់ (The Matrix Exit) -->
    <div class="card-paper p-5 sm:p-7 rounded-2xl border space-y-4" :style="{ borderColor: 'var(--accent)' }">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 bg-emerald-500/15 text-emerald-600">
          ✂️
        </div>
        <div>
          <span class="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block">
            {{ t('គន្លឹះរំដោះខ្លួន — ច្រកចេញពីវាលវដ្តសង្សារ', 'THE LIBERATING ESCAPE ROUTE — EXITING THE MATRIX') }}
          </span>
          <h3 class="font-display font-bold text-lg sm:text-xl" :style="{ color: 'var(--ink)' }">
            {{ t('ចំណុចកាត់ផ្តាច់ខ្សែសង្វាក់៖ «វេទនា ❌ តណ្ហា» ដោយសតិ និងបញ្ញា', 'Breaking the Chain: Severing Feeling from Craving via Sati') }}
          </h3>
        </div>
      </div>

      <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('តើយើងគួរកាត់ផ្តាច់ខ្សែសង្វាក់នេះនៅត្រង់ណា? ព្រះសម្មាសម្ពុទ្ធទ្រង់បានបង្ហាញពីទីតាំងយុទ្ធសាស្ត្រតែមួយគត់ដែលមនុស្សយើងអាចធ្វើអន្តរាគមន៍បានក្នុងជីវិតជាក់ស្តែង៖', 'Where can we practically sever this chain? The Buddha pinpointed the exact strategic junction in everyday human experience:') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
        <!-- Why cannot cut at Phassa -> Vedana -->
        <div class="p-4 rounded-xl border space-y-2" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="text-red-500 font-bold text-sm">❌</span>
            <h4 class="font-bold text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
              {{ t('មិនអាចកាត់ត្រង់ «ផស្សៈ ⟶ វេទនា» បានឡើយ', 'Cannot Sever at Contact ⟶ Feeling') }}
            </h4>
          </div>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ដរាបណាយើងនៅរស់ ភ្នែកនៅតែឃើញរូប ត្រចៀកនៅតែឮសំឡេង។ កាលណាមានផស្សៈ វេទនា (សុខ ទុក្ខ ឬកណ្តាល) ត្រូវតែកើតឡើងជាធម្មជាតិនៃខន្ធ ៥។ សូម្បីព្រះសម្មាសម្ពុទ្ធ និងព្រះអរហន្ត ក៏នៅតែមានទុក្ខវេទនាផ្លូវកាយពេលទ្រង់ព្រះអាពាធ មិនអាចហាមឃាត់បានឡើយ។', 'As long as we live, eyes see and ears hear. Sense contact inevitably produces feelings (pleasure, pain, neutral). Even the Buddha and Arahants experienced bodily pain when ill — nature cannot be suppressed.') }}
          </p>
        </div>

        <!-- The exact cut point: Vedana -> Tanha -->
        <div class="p-4 rounded-xl border space-y-2 border-emerald-500/50 bg-emerald-500/5">
          <div class="flex items-center gap-2">
            <span class="text-emerald-500 font-bold text-sm">✅</span>
            <h4 class="font-bold text-xs sm:text-sm text-emerald-700 dark:text-emerald-300">
              {{ t('ចំណុចកាត់ផ្តាច់គឺត្រង់ «វេទនា ⟶ តណ្ហា»', 'The Exact Point: Feeling ⟶ Craving') }}
            </h4>
          </div>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('នៅពេលវេទនាកើតឡើង (សុខ ឬទុក្ខ) មនុស្សសាមញ្ញតែងមានប្រតិកម្មដោយ តណ្ហា (ចង់បានសុខ, ខឹងស្អប់ទុក្ខ)។ ប៉ុន្តែបើមាន «សតិ និង វិបស្សនាបញ្ញា» ដឹងទាន់ថា «វេទនាគ្រាន់តែជាវេទនា កើតឡើងហើយរលត់ទៅ» នោះតណ្ហាមិនអាចដុះពន្លកបានឡើយ!', 'When feeling arises, the uninstructed reacts blindly with Craving (attachment to pleasure, anger at pain). But with Mindfulness (Sati) and Insight (Vipassanā), seeing feeling as merely transient, CRAVING CANNOT ARISE!') }}
          </p>
        </div>
      </div>

      <!-- Result of cutting -->
      <div class="p-4 rounded-xl border font-mono text-xs sm:text-sm leading-relaxed text-center space-y-1.5" :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
        <p class="font-bold" :style="{ color: 'var(--accent)' }">
          {{ t('វេទនា (មានសតិដឹងទាន់) ⟶ [កាត់ផ្តាច់ ❌] ⟶ តណ្ហាមិនកើត ⟶ ឧបាទានមិនកើត ⟶ ភពមិនកើត ⟶ ជាតិរលត់ ⟶ ទុក្ខទាំងពួងរលត់ស្ងប់!', 'Vedanā (with Mindfulness) ⟶ [CUT ❌] ⟶ No Craving ⟶ No Clinging ⟶ No Becoming ⟶ Rebirth ceases ⟶ Complete Cessation of Suffering!') }}
        </p>
        <p class="text-xs opacity-80 font-sans" :style="{ color: 'var(--ink)' }">
          {{ t('នេះជាដំណើរនៃ «វិបស្សនាកម្មដ្ឋាន» ក្នុងជីវិតប្រចាំថ្ងៃ — ដឹងអារម្មណ៍ដោយស្ងប់ មិនប្រតិកម្មដោយលោភៈ ឬទោសៈ។', 'This is the direct practice of Vipassanā in daily life: observing sensations objectively without grasping or aversion.') }}
        </p>
      </div>
    </div>

    <!-- 4. Grouping by 3 Times (កាល ៣) & 4 Connections (សន្ធិ ៤) Overview -->
    <div class="card-paper p-5 sm:p-6 rounded-2xl border space-y-4">
      <h3 class="font-display font-bold text-base sm:text-lg flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>⏳</span>
        <span>{{ t('កាល ៣ និងចំណាត់ថ្នាក់អង្គទាំង ១២', 'The 3 Times & Structural Division') }}</span>
      </h3>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
        <div class="p-3 rounded-xl border space-y-1" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-[10px] font-bold uppercase tracking-wider block text-amber-600 dark:text-amber-400">
            {{ t('អតីតហេតុ (២)', 'Past Causes (2)') }}
          </span>
          <p class="font-bold text-sm" :style="{ color: 'var(--ink)' }">អវិជ្ជា • សង្ខារ</p>
          <p class="text-[10px] opacity-75">Ignorance & Formations</p>
        </div>

        <div class="p-3 rounded-xl border space-y-1" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-[10px] font-bold uppercase tracking-wider block text-blue-600 dark:text-blue-400">
            {{ t('បច្ចុប្បន្នផល (៥)', 'Present Results (5)') }}
          </span>
          <p class="font-bold text-sm" :style="{ color: 'var(--ink)' }">វិញ្ញាណ • នាមរូប • សឡាយតនៈ • ផស្សៈ • វេទនា</p>
          <p class="text-[10px] opacity-75">Consciousness to Feeling</p>
        </div>

        <div class="p-3 rounded-xl border space-y-1" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-[10px] font-bold uppercase tracking-wider block text-purple-600 dark:text-purple-400">
            {{ t('បច្ចុប្បន្នហេតុ (៣)', 'Present Causes (3)') }}
          </span>
          <p class="font-bold text-sm" :style="{ color: 'var(--ink)' }">តណ្ហា • ឧបាទាន • ភព</p>
          <p class="text-[10px] opacity-75">Craving, Clinging, Becoming</p>
        </div>

        <div class="p-3 rounded-xl border space-y-1" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-[10px] font-bold uppercase tracking-wider block text-rose-600 dark:text-rose-400">
            {{ t('អនាគតផល (២)', 'Future Results (2)') }}
          </span>
          <p class="font-bold text-sm" :style="{ color: 'var(--ink)' }">ជាតិ • ជរាមរណៈ</p>
          <p class="text-[10px] opacity-75">Birth, Aging & Death</p>
        </div>
      </div>
    </div>

    <!-- 5. Toggle: Forward (Arising) vs Reverse (Cessation) -->
    <div class="card-paper p-4 sm:p-5 rounded-2xl flex items-center justify-between gap-3 flex-wrap border">
      <div>
        <h3 class="font-display font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
          {{ t('ទិសដៅនៃការពិចារណាធម៌ (Anuloma / Paṭiloma)', 'Mode of Contemplation') }}
        </h3>
        <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
          {{ activeMode === 'arising' ? t('អនុលោម៖ ដំណើរនៃការកើតឡើងនៃកងទុក្ខ', 'Forward: How suffering arises link by link') : t('បដិលោម៖ ដំណើរនៃការរំលត់កងទុក្ខជាលំដាប់', 'Reverse: How suffering ceases through wisdom') }}
        </p>
      </div>

      <div class="flex items-center gap-2">
        <button
          @click="activeMode = 'arising'"
          class="lang-pick px-3 sm:px-4 py-2 text-xs font-semibold rounded-xl cursor-pointer transition-all"
          :class="{ 'on': activeMode === 'arising' }"
        >
          ⛓️ {{ t('អនុលោម (កើតទុក្ខ)', 'Arising') }}
        </button>
        <button
          @click="activeMode = 'cessation'"
          class="lang-pick px-3 sm:px-4 py-2 text-xs font-semibold rounded-xl cursor-pointer transition-all"
          :class="{ 'on': activeMode === 'cessation' }"
        >
          🕊️ {{ t('បដិលោម (រលត់ទុក្ខ)', 'Cessation') }}
        </button>
      </div>
    </div>

    <!-- 6. The 12 Links Cards Grid -->
    <div class="space-y-3 sm:space-y-4">
      <div
        v-for="(link, idx) in links"
        :key="link.pali"
        class="card-paper card-paper-hover p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5 border"
      >
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-start gap-3">
            <span class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0" :style="{ background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid var(--border)' }">
              {{ khNum(idx + 1) }}
            </span>
            <div class="space-y-1">
              <div class="flex items-center gap-2 flex-wrap">
                <h4 class="font-display font-bold text-base sm:text-lg" :style="{ color: 'var(--ink)' }">
                  {{ t(link.nameKm, link.nameEn) }}
                </h4>
                <span class="paali text-xs font-semibold px-2 py-0.5 rounded" :style="{ background: 'var(--bg-card-2)', color: 'var(--accent)' }">
                  {{ link.pali }}
                </span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded uppercase" :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)' }">
                  {{ t(link.periodKm, link.periodEn) }}
                </span>
                <span
                  v-if="idx === 6"
                  class="text-[10px] font-bold px-2 py-0.5 rounded uppercase bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                >
                  ⚡ {{ t('ច្រកកាត់ផ្តាច់', 'Escape Junction') }}
                </span>
              </div>

              <!-- Condition Statement -->
              <p class="text-xs sm:text-sm font-medium leading-relaxed" :style="{ color: activeMode === 'arising' ? 'var(--ink)' : 'var(--accent)' }">
                {{ activeMode === 'arising' ? link.conditionKm : link.cessationKm }}
              </p>

              <!-- Short summary -->
              <p class="text-xs line-clamp-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                {{ t(link.descKm, link.descEn) }}
              </p>
            </div>
          </div>

          <div class="shrink-0 flex items-center gap-2 text-xs font-bold mt-1">
            <button
              type="button"
              @click="toggleExpand(idx)"
              class="lang-pick px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1"
              :class="expandedId === idx ? 'on' : ''"
            >
              <span>{{ expandedId === idx ? t('បិទ ▲', 'Hide ▲') : t('អានលម្អិត ▼', 'Read More ▼') }}</span>
            </button>
          </div>
        </div>

        <!-- Slide-down Inline Expansion -->
        <SlideDown>
          <div v-if="expandedId === idx" class="pt-3 border-t mt-3 space-y-3 text-xs leading-relaxed" :style="{ borderColor: 'var(--border)' }">
            <!-- Formula -->
            <div class="p-3.5 rounded-xl border-l-4 font-serif space-y-1" :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
              <span class="text-[10px] uppercase font-bold block" :style="{ color: 'var(--accent)' }">
                📖 {{ t('ពុទ្ធវចនៈបាលី (Pāli Formula)', 'Canonical Pāli Formula') }}
              </span>
              <p class="font-bold leading-relaxed font-mono">«{{ link.formulaPali }}»</p>
              <p class="text-xs opacity-80">{{ activeMode === 'arising' ? link.conditionKm : link.cessationKm }}</p>
            </div>

            <!-- Deep detail -->
            <div class="p-3.5 rounded-xl border space-y-1" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
              <h5 class="font-bold text-[11px] uppercase tracking-wider flex items-center gap-1.5" :style="{ color: 'var(--accent)' }">
                <span>🔍</span>
                <span>{{ t('អត្ថន័យ និងយន្តការនៃហេតុបច្ច័យ', 'Detailed Cause & Effect Mechanism') }}</span>
              </h5>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(link.detailKm, link.detailEn) }}</p>
            </div>

            <!-- Practical Daily Life Reflection -->
            <div class="p-3.5 rounded-xl border space-y-1" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
              <h5 class="font-bold text-[11px] uppercase tracking-wider flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <span>🧘</span>
                <span>{{ t('ការពិចារណាក្នុងជីវិតប្រចាំថ្ងៃ (ការកាត់ផ្តាច់ខ្សែសង្វាក់)', 'Mindful Practical Application') }}</span>
              </h5>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(link.practicalKm, link.practicalEn) }}</p>
            </div>

            <button
              type="button"
              @click="expandedId = null"
              class="w-full py-1.5 rounded-lg text-center text-xs opacity-70 hover:opacity-100 cursor-pointer"
              :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)' }"
            >
              {{ t('បិទព័ត៌មានលម្អិត ▲', 'Close Details ▲') }}
            </button>
          </div>
        </SlideDown>
      </div>
    </div>

    <!-- 7. Summary & Canonical Epilogue -->
    <div class="verse-box p-6 rounded-2xl text-center space-y-3 border">
      <span class="text-xs font-bold uppercase tracking-wider block" :style="{ color: 'var(--accent-bright)' }">
        🕊️ {{ t('សេចក្តីសន្និដ្ឋាននៃបដិច្ចសមុប្បាទ (Canonical Epilogue)', 'Summary & Liberation') }}
      </span>
      <p class="text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto" :style="{ color: 'var(--ink)' }">
        {{ t('«កាលណាសត្វលោកយល់ច្បាស់នូវបដិច្ចសមុប្បាទ ការសង្ស័យទាំងឡាយអំពីអតីតជាតិ អនាគតជាតិ និងបច្ចុប្បន្នជាតិ រមែងសាបសូន្យទៅ។ មិនមានតួខ្លួនអញជាអ្នកកើត មិនមានតួខ្លួនអញជាអ្នកស្លាប់ មានតែធម៌ជាហេតុ និងធម៌ជាផលកើតរលត់បន្តគ្នាតែប៉ុណ្ណោះ»។', '"When one thoroughly comprehends Dependent Origination, all doubts regarding past lives, future existences, and the present moment vanish entirely. There is no enduring self that is born, nor a self that dies; there are only causal conditions and conditioned phenomena arising and passing away."') }}
      </p>
      <p class="text-xs font-semibold" :style="{ color: 'var(--accent)' }">
        {{ t('សាធុ! សាធុ! សាធុ!', 'Sādhu! Sādhu! Sādhu!') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  if (n === null || n === undefined) return ''
  return String(n).split('').map(d => khDigits[Number(d)] ?? d).join('')
}

const activeMode = ref('arising')
const expandedId = ref(null)
function toggleExpand(id) { expandedId.value = expandedId.value === id ? null : id }

const links = [
  {
    pali: 'Avijjā',
    nameKm: '១. អវិជ្ជា (សេចក្តីមិនដឹងពិត)', nameEn: '1. Ignorance (Avijjā)',
    periodKm: 'អតីតហេតុ (Past Cause)', periodEn: 'Past Cause',
    conditionKm: 'ព្រោះអវិជ្ជាជាបច្ច័យ ទើបកើតមានសង្ខារ',
    cessationKm: 'ព្រោះការរលត់ទៅដោយមិនសេសសល់នៃអវិជ្ជា ទើបសង្ខាររលត់',
    formulaPali: 'Avijjāpaccayā saṅkhārā',
    descKm: 'ការមិនយល់ដឹងច្បាស់នូវអរិយសច្ច ៤ មិនស្គាល់ទុក្ខ ហេតុនៃទុក្ខ ការរលត់ទុក្ខ និងផ្លូវប្រតិបត្តិ។',
    descEn: 'Fundamental blindness to the Four Noble Truths, causality, and reality.',
    detailKm: 'អវិជ្ជា មិនមែនជាការខ្វះចំណេះដឹងទូទៅទេ ប៉ុន្តែជាភាពងងឹតនៃចិត្ត ដែលយល់ច្រឡំថា អ្វីដែលមិនទៀងថាទៀង អ្វីដែលជាទុក្ខថាសុខ អ្វីដែលមិនមែនខ្លួនថាជាខ្លួន។ វាជាឬសគល់នៃកិលេសទាំងអស់។',
    detailEn: 'Ignorance is spiritual unawareness: seeing permanence in impermanence, pleasure in suffering, and self in what is selfless.',
    practicalKm: 'វិធីកម្ចាត់៖ ចម្រើនបញ្ញា សិក្សាព្រះធម៌ និងប្រតិបត្តិវិបស្សនាដើម្បីឱ្យចិត្តឃើញសច្ចធម៌ជាក់ស្តែង។',
    practicalEn: 'Antidote: Deep contemplation and insight meditation to penetrate the true nature of phenomena.'
  },
  {
    pali: 'Saṅkhāra',
    nameKm: '២. សង្ខារ (ការតាក់តែងកម្ម)', nameEn: '2. Volitional Formations (Saṅkhāra)',
    periodKm: 'អតីតហេតុ (Past Cause)', periodEn: 'Past Cause',
    conditionKm: 'ព្រោះសង្ខារជាបច្ច័យ ទើបកើតមានវិញ្ញាណ',
    cessationKm: 'ព្រោះសង្ខាររលត់ ទើបវិញ្ញាណរលត់',
    formulaPali: 'Saṅkhārapaccayā viññāṇaṃ',
    descKm: 'ចេតនាតាក់តែងអំពើ ទាំងបុញ្ញាភិសង្ខារ (កុសល), អបុញ្ញាភិសង្ខារ (អកុសល), និងអានេញ្ជាភិសង្ខារ (អរូបជ្ឈាន)។',
    descEn: 'Karmic formations of body, speech, and mind driving future rebirth.',
    detailKm: 'សង្ខារក្នុងទីនេះសំដៅលើ «ចេតនាកម្ម» ទាំងផ្លូវកាយ វាចា ចិត្ត ដែលបុគ្គលបានប្រព្រឹត្តកាលពីអតីតជាតិ ដឹកនាំដោយអវិជ្ជា ដែលបានសន្សំកម្លាំងកម្មរង់ចាំឱ្យផល។',
    detailEn: 'Karmic momentum generated by intentional choices shaped by past ignorance.',
    practicalKm: 'វិធីកម្ចាត់៖ តម្កល់ចិត្តក្នុងកុសលធម៌ មិនបង្កើតអកុសលកម្មថ្មីៗ និងចម្រើនមគ្គដើម្បីឈានទៅរំលត់កម្មទាំងស្រុង។',
    practicalEn: 'Practice: Refrain from unwholesome deeds; orient intention towards liberation.'
  },
  {
    pali: 'Viññāṇa',
    nameKm: '៣. វិញ្ញាណ (បដិសន្ធិវិញ្ញាណ)', nameEn: '3. Consciousness (Viññāṇa)',
    periodKm: 'បច្ចុប្បន្នផល (Present Result)', periodEn: 'Present Result',
    conditionKm: 'ព្រោះវិញ្ញាណជាបច្ច័យ ទើបកើតមាននាមរូប',
    cessationKm: 'ព្រោះវិញ្ញាណរលត់ ទើបនាមរូបរលត់',
    formulaPali: 'Viññāṇapaccayā nāmarūpaṃ',
    descKm: 'វិញ្ញាណដំបូងដែលចាប់កំណើតក្នុងភពថ្មី (បដិសន្ធិចិត្ត) និងវិញ្ញាណដឹងអារម្មណ៍ប្រចាំជីវិត (វិបាកវិញ្ញាណ)។',
    descEn: 'Relinking rebirth-consciousness and the stream of cognitive awareness.',
    detailKm: 'បដិសន្ធិចិត្តជាស្ពានភ្ជាប់រវាងជាតិមុន និងជាតិនេះ អាស្រ័យដោយកម្លាំងកម្មពីអតីត។ បន្ទាប់មក វិញ្ញាណនេះក៏បង្កើតឱ្យមានចរន្តជីវិតបន្តទៅមុខ។',
    detailEn: 'Rebirth consciousness connecting lives, carrying the karmic potentials.',
    practicalKm: 'វិធីកម្ចាត់៖ សង្កេតវិញ្ញាណដឹងអារម្មណ៍ថាជាគ្រាន់តែជាលំហូរនៃចិត្តដែលកើត-រលត់រាល់ខណៈ មិនមែនជាព្រលឹងអមតៈឡើយ។',
    practicalEn: 'Practice: See consciousness as a rapidly changing process, not an eternal soul.'
  },
  {
    pali: 'Nāmarūpa',
    nameKm: '៤. នាមរូប (ចិត្ត និងកាយ)', nameEn: '4. Name and Form (Nāmarūpa)',
    periodKm: 'បច្ចុប្បន្នផល (Present Result)', periodEn: 'Present Result',
    conditionKm: 'ព្រោះនាមរូបជាបច្ច័យ ទើបកើតមានសឡាយតនៈ',
    cessationKm: 'ព្រោះនាមរូបរលត់ ទើបសឡាយតនៈរលត់',
    formulaPali: 'Nāmarūpapaccayā saḷāyatanaṃ',
    descKm: 'នាមធម៌ (វេទនា សញ្ញា ចេតនា ផស្សៈ មនសិការ) និង រូបធម៌ (មហាភូតរូប ៤ និងឧបាទាយរូប)។',
    descEn: 'Mental factors (feeling, perception, volition, contact, attention) and physical form.',
    detailKm: 'កាលណាមានវិញ្ញាណចាប់បដិសន្ធិ កាយសម្បត្តិ និងចិត្តចេតសិកទាំងឡាយក៏ចាប់បដិសន្ធិព្រមគ្នា ប្រៀបដូចជាឈើពីរដើមច្រត់គ្នាទៅវិញទៅមក។',
    detailEn: 'Mind and matter co-arising and mutually supporting each other like two leaning reeds.',
    practicalKm: 'វិធីកម្ចាត់៖ រៀនបែងចែកនាម និងរូបក្នុងកាយចិត្ត ដើម្បីបំបាត់ការប្រកាន់ថា «ខ្លួនអញ»។',
    practicalEn: 'Practice: Dissect existence into mind and body to dissolve personal identity.'
  },
  {
    pali: 'Saḷāyatana',
    nameKm: '៥. សឡាយតនៈ (ទ្វារវិញ្ញាណទាំង ៦)', nameEn: '5. Six Sense Bases (Saḷāyatana)',
    periodKm: 'បច្ចុប្បន្នផល (Present Result)', periodEn: 'Present Result',
    conditionKm: 'ព្រោះសឡាយតនៈជាបច្ច័យ ទើបកើតមានផស្សៈ',
    cessationKm: 'ព្រោះសឡាយតនៈរលត់ ទើបផស្សៈរលត់',
    formulaPali: 'Saḷāyatanapaccayā phasso',
    descKm: 'ទ្វារទទួលដឹងទាំង ៦៖ ភ្នែក ត្រចៀក ច្រមុះ អណ្តាត កាយ និង មនោ (ចិត្ត)។',
    descEn: 'The six internal sense faculties: eye, ear, nose, tongue, body, and intellect.',
    detailKm: 'ជាបង្អួចសម្រាប់ទាក់ទងនឹងពិភពខាងក្រៅ។ បើគ្មានទ្វារទាំង ៦ នេះទេ ការដឹងអារម្មណ៍ផ្សេងៗក៏មិនអាចប្រព្រឹត្តទៅបានដែរ។',
    detailEn: 'The six portals through which we interface with the external universe.',
    practicalKm: 'វិធីកម្ចាត់៖ រក្សាឥន្ទ្រិយសំវរៈ — គ្រប់គ្រងទ្វារភ្នែក ត្រចៀក កុំឱ្យកិលេសហូរចូល។',
    practicalEn: 'Practice: Sense restraint — guarding sense doors from greed and aversion.'
  },
  {
    pali: 'Phassa',
    nameKm: '៦. ផស្សៈ (ការប៉ះខ្ទប់នៃអារម្មណ៍)', nameEn: '6. Sense Contact (Phassa)',
    periodKm: 'បច្ចុប្បន្នផល (Present Result)', periodEn: 'Present Result',
    conditionKm: 'ព្រោះផស្សៈជាបច្ច័យ ទើបកើតមានវេទនា',
    cessationKm: 'ព្រោះផស្សៈរលត់ ទើបវេទនារលត់',
    formulaPali: 'Phassapaccayā vedanā',
    descKm: 'ការជួបជុំគ្នារវាងទ្វារវិញ្ញាណ អារម្មណ៍ខាងក្រៅ និងវិញ្ញាណដឹង (ឧ. ភ្នែក + រូប + ចក្ខុវិញ្ញាណ = ចក្ខុសម្ផស្ស)។',
    descEn: 'The meeting of sense base, sense object, and consciousness.',
    detailKm: 'ផស្សៈជាចំណុចផ្តើមនៃការដឹងពិភពលោក។ បើគ្មានការប៉ះទង្គិចគ្នាទេ សេចក្តីរីករាយ ឬការឈឺចាប់ក៏មិនអាចកើតមានដែរ។',
    detailEn: 'Contact is the spark that ignites every feeling and reaction.',
    practicalKm: 'វិធីកម្ចាត់៖ ដឹងទាន់រាល់ពេលមានការប៉ះទង្គិចអារម្មណ៍ ដោយមិនបង្កើតរឿងរ៉ាវបន្ត។',
    practicalEn: 'Practice: Mindful awareness at the very instant of contact without emotional elaboration.'
  },
  {
    pali: 'Vedanā',
    nameKm: '៧. វេទនា (អារម្មណ៍ទទួលដឹង)', nameEn: '7. Feeling (Vedanā)',
    periodKm: 'បច្ចុប្បន្នផល (Present Result)', periodEn: 'Present Result',
    conditionKm: 'ព្រោះវេទនាជាបច្ច័យ ទើបកើតមានតណ្ហា',
    cessationKm: 'ព្រោះវេទនារលត់ ទើបតណ្ហារលត់',
    formulaPali: 'Vedanāpaccayā taṇhā',
    descKm: 'អារម្មណ៍ ៣ យ៉ាង៖ សុខវេទនា (ស្រួល), ទុក្ខវេទនា (ពិបាក), និង អទុក្ខមសុខវេទនា (កណ្តាល/ឧបេក្ខា)។',
    descEn: 'Affective tone: pleasant, painful, or neutral feeling.',
    detailKm: 'មនុស្សទូទៅតែងជាប់ជំពាក់នឹងសុខវេទនា (ចង់បានទៀត) និងខឹងនឹងទុក្ខវេទនា (ចង់កម្ចាត់ចោល)។ នេះជាកន្លែងដែលនាំទៅរកតណ្ហា។',
    detailEn: 'Every contact yields feeling; humans react instinctively with craving or aversion.',
    practicalKm: 'វិធីកម្ចាត់៖ ចម្រើនវេទនានុបស្សនាសតិបដ្ឋាន — មើលវេទនាគ្រាន់តែជាវេទនា កើតហើយរលត់ មិនមែនយើងសុខ ឬយើងទុក្ខឡើយ។',
    practicalEn: 'Practice: Vedanānupassanā — observing feeling objectively without clinging.'
  },
  {
    pali: 'Taṇhā',
    nameKm: '៨. តណ្ហា (សេចក្តីស្រេកឃ្លាន)', nameEn: '8. Craving (Taṇhā)',
    periodKm: 'បច្ចុប្បន្នហេតុ (Present Cause)', periodEn: 'Present Cause',
    conditionKm: 'ព្រោះតណ្ហាជាបច្ច័យ ទើបកើតមានឧបាទាន',
    cessationKm: 'ព្រោះតណ្ហារលត់ ទើបឧបាទានរលត់',
    formulaPali: 'Taṇhāpaccayā upādānaṃ',
    descKm: 'កាមតណ្ហា (ស្រេកឃ្លានកាមគុណ), ភវតណ្ហា (ស្រេកឃ្លានការកើតមាន), និង វិភវតណ្ហា (ស្រេកឃ្លានការវិនាសសាបសូន្យ)។',
    descEn: 'Thirst for sensual pleasure, for existence/becoming, and for non-existence.',
    detailKm: 'តណ្ហាជា «សមុទយសច្ច» (ប្រភពនៃទុក្ខ)។ កាលណាចិត្តកើតតណ្ហា វានឹងស្វែងរកអារម្មណ៍មកបំពេញឥតឈប់ឈរ ដូចមនុស្សស្រេកផឹកទឹកអំបិល។',
    detailEn: 'The prime architect of Samsara: an insatiable thirst that creates new karmic bonds.',
    practicalKm: 'វិធីកម្ចាត់៖ អប់រំចិត្តឱ្យស្កប់ស្កល់ (សន្តោស) និងដឹងថាអារម្មណ៍លោកិយមិនអាចបំពេញតណ្ហាឱ្យពេញបានឡើយ។',
    practicalEn: 'Practice: Contentment, renunciation, and seeing the trap of sensory addiction.'
  },
  {
    pali: 'Upādāna',
    nameKm: '៩. ឧបាទាន (ការតោងប្រកាន់មាំ)', nameEn: '9. Clinging / Attachment (Upādāna)',
    periodKm: 'បច្ចុប្បន្នហេតុ (Present Cause)', periodEn: 'Present Cause',
    conditionKm: 'ព្រោះឧបាទានជាបច្ច័យ ទើបកើតមានភព',
    cessationKm: 'ព្រោះឧបាទានរលត់ ទើបភពរលត់',
    formulaPali: 'Upādānapaccayā bhavo',
    descKm: 'ការប្រកាន់ ៤ ប្រការ៖ កាមុបាទាន (កាម), ទិដ្ឋុបាទាន (ទស្សនៈ), សីលព្វតុបាទាន (ពិធីសក្ការៈខុស), និង អត្តវាទុបាទាន (តួខ្លួន)។',
    descEn: 'Intense clinging to senses, views, superstitious rites, and the ego illusion.',
    detailKm: 'បើប្រៀបធៀប តណ្ហាដូចជាការលូកដៃចង់ចាប់ផ្លែឈើ រីឯឧបាទាន គឺការក្តាប់ផ្លែឈើនោះជាប់ក្នុងដៃមិនព្រមលែង។',
    detailEn: 'If craving is reaching for the fruit, clinging is grasping it tightly and refusing to let go.',
    practicalKm: 'វិធីកម្ចាត់៖ បដិបត្តិចិត្តលះបង់ មិនប្រកាន់គំនិតខ្លួនឯងជាធំ និងរៀនព្រលែងការគ្រប់គ្រងអ្វីៗ។',
    practicalEn: 'Practice: Radical letting go; seeing that nothing belongs to "me" or is "mine".'
  },
  {
    pali: 'Bhava',
    nameKm: '១០. ភព (ដំណើរនៃការបង្កើតជាតិថ្មី)', nameEn: '10. Becoming (Bhava)',
    periodKm: 'បច្ចុប្បន្នហេតុ (Present Cause)', periodEn: 'Present Cause',
    conditionKm: 'ព្រោះភពជាបច្ច័យ ទើបកើតមានជាតិ',
    cessationKm: 'ព្រោះភពរលត់ ទើបជាតិរលត់',
    formulaPali: 'Bhavapaccayā jāti',
    descKm: 'កម្មភព (កម្លាំងកម្មដែលសន្សំសម្រាប់ជាតិថ្មី) និង ឧបបត្តិភព (ភពកំណើតដែលត្រូវទៅកើត ក្នុងកាមភព រូបភព ឬអរូបភព)។',
    descEn: 'Karmic becoming (kammabhava) and the realm of rebirth (upapattibhava).',
    detailKm: 'អាស្រ័យការតោងប្រកាន់ ថាមពលកម្មក៏ប្រមូលផ្តុំបង្កើតជាកម្លាំងទំនាញសម្រាប់អនាគតជាតិ។',
    detailEn: 'The karmic energetic charge ready to materialize into a new lifetime.',
    practicalKm: 'វិធីកម្ចាត់៖ រំលត់កិលេសក្នុងចិត្ត ដើម្បីកុំឱ្យមានថាមពលកម្មតាក់តែងភពកំណើតថ្មីទៀត។',
    practicalEn: 'Practice: Extinguish mental defilements so no karmic seed remains to sprout.'
  },
  {
    pali: 'Jāti',
    nameKm: '១១. ជាតិ (ការចាប់កំណើត)', nameEn: '11. Birth (Jāti)',
    periodKm: 'អនាគតផល (Future Result)', periodEn: 'Future Result',
    conditionKm: 'ព្រោះជាតិជាបច្ច័យ ទើបកើតមានជរា និងមរណៈ',
    cessationKm: 'ព្រោះជាតិរលត់ ទើបជរា និងមរណៈរលត់',
    formulaPali: 'Jātipaccayā jarāmaraṇaṃ',
    descKm: 'ការលេចឡើងនៃខន្ធ ៥ ក្នុងភពថ្មី ការធ្លាក់ចុះក្នុងគភ៌ ការដុះពន្លកនៃជីវិតថ្មី។',
    descEn: 'The manifestation of the aggregates in a new existence; birth into Samsara.',
    detailKm: 'កាលណាមានជាតិ កងទុក្ខទាំងអស់ក៏ត្រូវបាននាំមកជាមួយភ្លាម ព្រោះជាតិជាច្រកទ្វារបើកផ្លូវឱ្យជរា ព្យាធិ និងមរណៈចូលមក។',
    detailEn: 'Birth is the gateway through which all subsequent suffering enters.',
    practicalKm: 'វិធីកម្ចាត់៖ យល់ថាការកើតជាទុក្ខ ហើយតាំងចិត្តបដិបត្តិធម៌ដើម្បីសម្រេចអរហត្តផលដែលជាការ «អស់ជាតិ» (ខីណា ជាតិ)។',
    practicalEn: 'Practice: Aspire to the end of rebirth (Khīṇā jāti) through complete awakening.'
  },
  {
    pali: 'Jarāmaraṇa',
    nameKm: '១២. ជរា និងមរណៈ (ភាពចាស់ និងសេចក្តីស្លាប់)', nameEn: '12. Aging & Death (Jarāmaraṇa)',
    periodKm: 'អនាគតផល (Future Result)', periodEn: 'Future Result',
    conditionKm: 'ព្រមទាំងសោកៈ (សោកស្តាយ) បរិទេវៈ (យំសោក) ទុក្ខ (ទុក្ខកាយ) ទោមនស្ស (ទុក្ខចិត្ត) ឧបាយាស (អស់សង្ឃឹម)',
    cessationKm: 'កងទុក្ខទាំងអស់ក៏រលត់ទៅដោយស្ថាពរ',
    formulaPali: 'Jarāmaraṇaṃ sokaparidevadukkhadomanassupāyāsā sambhavanti',
    descKm: 'ការសាបសូន្យនៃឥន្ទ្រិយ ការបែកធ្លាយនៃរូបកាយ និងសេចក្តីស្លាប់ ដែលនាំមកនូវទុក្ខគ្រប់បែបយ៉ាង។',
    descEn: 'Aging, death, sorrow, lamentation, pain, distress, and despair.',
    detailKm: 'នេះជាទីបញ្ចប់នៃខ្សែសង្វាក់បដិច្ចសមុប្បាទ ដែលបង្ហាញថាកងទុក្ខទាំងមូលត្រូវបានប្រមូលផ្តុំមកយ៉ាងដូច្នេះឯង។',
    detailEn: 'The full culmination of suffering inherent in conditioned existence.',
    practicalKm: 'វិធីកម្ចាត់៖ ពិចារណាមរណស្សតិជាប្រចាំ កុំធ្វេសប្រហែសក្នុងជីវិត ហើយខិតខំដុសខាត់ចិត្តឱ្យផុតពីកិលេស។',
    practicalEn: 'Practice: Mindfulness of mortality; living with urgency and non-attachment.'
  }
]
</script>
