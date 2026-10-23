<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ០៤ — កម្មផល', 'GATHA 04 — KAMMA & REBIRTH') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('កម្មជាកេរដំណែល ផលជាការត្រឡប់', 'Kamma is the Legacy, Vipāka the Return') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('កម្ម គឺចេតនា គឺស្មារតីគិតហើយធ្វើ។ ព្រះពុទ្ធបរមគ្រូត្រាស់ទេសនាថា៖ «ចេតនាហើយ ដែលតថាគតហៅថាកម្ម»។ ទង្វើល្អឲ្យផលល្អ ទង្វើអាក្រក់ឲ្យផលអាក្រក់ — មិនមែនព្រះជាអ្នកវិនិច្ឆ័យ គឺច្បាប់ធម្មជាតិនៃហេតុផល។', 'Kamma is intention — willing and acting. The Buddha said: «It is volition that I call kamma.» Good deeds ripen as good result, bad deeds as bad — no judge is needed; it is the natural law of cause and effect.') }}
    </p>

    <!-- Quick Jump Sub-Navigation (Uniform h-9, smooth touch scroll on mobile) -->
    <div class="flex items-center gap-2 mt-6 overflow-x-auto pb-2 pt-1 scrollbar-none touch-pan-x sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
      <a href="#kusala-akusala" class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center gap-1.5">
        <span>⚖️</span>
        <span>{{ t('កុសល & អកុសល ១០', '10 Courses of Action') }}</span>
      </a>
      <a href="#ahosi-kamma" class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center gap-1.5 on">
        <span>🕊️</span>
        <span>{{ t('យន្តការអហោសិកម្ម ៤', '4 Ahosi-Kamma Mechanisms') }}</span>
      </a>
      <a href="#mula-6" class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center gap-1.5">
        <span>🌱</span>
        <span>{{ t('ឫសគល់ ៦ នៃចិត្ត', '6 Roots of Mind') }}</span>
      </a>
      <a href="#31-plane" class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center gap-1.5">
        <span>🪐</span>
        <span>{{ t('ភូមិ ៣១ នៃសង្សារ', '31 Planes of Existence') }}</span>
      </a>
    </div>

    <!-- kusala vs akusala -->
    <div id="kusala-akusala" class="grid md:grid-cols-2 gap-6 mt-8 scroll-mt-24">
      <div class="card-paper p-6">
        <p class="chapter-label" style="color: var(--sage)">KUSALA</p>
        <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('សកម្មភាពល្អ ១០ ប្រភេទ (កុសលកម្មបថ)', '10 Wholesome Courses') }}</h3>
        <ul class="tick-list mt-3">
          <li v-for="k in kusala" :key="k.en">
            <strong :style="{ color: 'var(--ink)' }">{{ t(k.km, k.en) }}</strong>
            <span class="text-xs" :style="{ color: 'var(--ink-muted)' }"> — {{ k.pl }}</span>
            <p v-if="k.plain" class="text-xs mt-0.5" :style="{ color: 'var(--ink-muted)' }">{{ k.plain }}</p>
          </li>
        </ul>
      </div>
      <div class="card-paper p-6">
        <p class="chapter-label" style="color: var(--red)">AKUSALA</p>
        <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('អំពើអាក្រក់ ១០ ប្រភេទ (អកុសលកម្មបថ)', '10 Unwholesome Courses') }}</h3>
        <ul class="tick-list mt-3">
          <li v-for="k in akusala" :key="k.en">
            <strong :style="{ color: 'var(--ink)' }">{{ t(k.km, k.en) }}</strong>
            <span class="text-xs" :style="{ color: 'var(--ink-muted)' }"> — {{ k.pl }}</span>
            <p v-if="k.plain" class="text-xs mt-0.5" :style="{ color: 'var(--ink-muted)' }">{{ k.plain }}</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- roots -->
    <div id="mula-6" class="card-paper p-6 md:p-8 mt-8 scroll-mt-24">
      <p class="chapter-label">MŪLA — 6</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ឫសគល់ ៦ នៃចិត្ត', 'The Six Roots of Mind') }}</h3>
      <div class="grid md:grid-cols-3 gap-4 mt-5">
        <div v-for="r in roots" :key="r.en" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid ' + r.color }">
          <p class="font-display" :style="{ color: r.color }">{{ t(r.km, r.en) }} <span class="text-xs font-bold">{{ r.pl }}</span></p>
          <p class="text-xs mt-2" :style="{ color: 'var(--ink-muted)' }">{{ t(r.kmBody, r.enBody) }}</p>
        </div>
      </div>
    </div>

        <!-- ========================================================================= -->
    <!-- MASTER SECTION: យន្តការទាំង ៤ ដែលធ្វើឱ្យកម្មប្រែជា «អហោសិកម្ម» (អភិធម្ម) -->
    <!-- ========================================================================= -->
    <section id="ahosi-kamma" class="card-paper p-5 sm:p-7 md:p-8 mt-8 scroll-mt-24 border-2" :style="{ borderColor: 'var(--accent)' }">
      <div class="flex items-center gap-2">
        <span class="text-2xl">🕊️</span>
        <div>
          <p class="chapter-label m-0" :style="{ color: 'var(--accent)' }">
            {{ t('អភិធម្មពិស្តារ — យន្តការនៃកម្មផល', 'ABHIDHAMMA ANALYSIS — MECHANICS OF KARMIC FRUITION') }}
          </p>
          <h3 class="font-display text-xl sm:text-2xl mt-1" :style="{ color: 'var(--ink)' }">
            {{ t('យន្តការទាំង ៤ ដែលធ្វើឱ្យកម្មប្រែជា «អហោសិកម្ម» (កម្មអត់ផល/លុបចោល)', 'The 4 Mechanisms Transforming Karma into "Ahosi-Kamma" (Defunct Karma)') }}
          </h3>
        </div>
      </div>

      <p class="mt-4 text-xs sm:text-sm md:text-base leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('នៅក្នុងគម្ពីរអភិធម្ម និងគម្ពីរអដ្ឋកថា អហោសិកម្ម (Ahosi-kamma) មិនមែនជាប្រភេទកម្មដែលត្រូវបានអាទិទេព ឬបុគ្គលណាម្នាក់លុបលាងបាបកម្មឱ្យនោះឡើយ ប៉ុន្តែវាជា «កម្មដែលបានសាងរួចហើយ តែបានបាត់បង់សក្តានុពលក្នុងការឱ្យផល (Lapsed/Defunct Karma)» ដោយសារតែផុតកំណត់ពេលវេលា គ្មានបច្ច័យគាំទ្រគ្រប់គ្រាន់ ឬត្រូវបានកាត់ផ្តាច់ដោយកម្លាំងធម៌ជាន់ខ្ពស់។', 'In the Abhidhamma and Commentaries, Ahosi-kamma (defunct/lapsed karma) is not a supernatural absolution granted by a creator god or priest. It denotes committed karma that has lost its potency to mature into result, either because its temporal window expired, supporting conditions were lacking, or it was severed by supreme spiritual attainment.') }}
      </p>

      <!-- Section Tabs (Uniform h-9, smooth touch scroll on mobile) -->
      <div class="flex items-center gap-2 mt-6 overflow-x-auto pb-2 pt-1 scrollbar-none touch-pan-x sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
        <button
          type="button"
          @click="activeAhosiTab = 'javana'"
          class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center gap-1.5"
          :class="activeAhosiTab === 'javana' ? 'on' : ''"
        >
          <span>⏳</span>
          <span>{{ t('១. ផុតកាលកំណត់ជវនចិត្ត', '1. Javana Window Expiration') }}</span>
        </button>
        <button
          type="button"
          @click="activeAhosiTab = 'destructive'"
          class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center gap-1.5"
          :class="activeAhosiTab === 'destructive' ? 'on' : ''"
        >
          <span>⚔️</span>
          <span>{{ t('២. កាត់ដោយឧបឃាតកកម្ម', '2. Severed by Destructive Kamma') }}</span>
        </button>
        <button
          type="button"
          @click="activeAhosiTab = 'sampatti'"
          class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center gap-1.5"
          :class="activeAhosiTab === 'sampatti' ? 'on' : ''"
        >
          <span>🛡️</span>
          <span>{{ t('៣. រារាំងដោយ «សម្បត្តិ ៤»', '3. Suppressed by 4 Sampatti') }}</span>
        </button>
        <button
          type="button"
          @click="activeAhosiTab = 'nibbana'"
          class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center gap-1.5"
          :class="activeAhosiTab === 'nibbana' ? 'on' : ''"
        >
          <span>🪷</span>
          <span>{{ t('៤. រលត់ពេលចូលបរិនិព្វាន', '4. Extinguished at Parinibbāna') }}</span>
        </button>
      </div>

      <!-- TAB 1: ការផុតកាលកំណត់នៃ «ជវនចិត្ត» -->
      <div v-if="activeAhosiTab === 'javana'" class="mt-6 space-y-4 fade-up">
        <div class="card-paper p-4 sm:p-5" :style="{ background: 'var(--bg-card)' }">
          <div class="flex items-center justify-between gap-2 mb-2">
            <h4 class="font-display text-base font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
              <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">១</span>
              {{ t('ការផុតកាលកំណត់នៃ «ជវនចិត្ត» (Expiration of the Operational Window)', 'Expiration of the Operational Javana Window') }}
            </h4>
            <span class="paali text-xs">Javana 1 & 7</span>
          </div>

          <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('នៅពេលមនុស្សធ្វើអំពើល្អ ឬអាក្រក់ ចិត្តដែលបង្កើតកម្មនោះមានឈ្មោះថា «ជវនចិត្ត» (Javana-citta) ដែលរត់បន្តគ្នាជាទូទៅចំនួន ៧ ខណៈ។ ជវនចិត្តនីមួយៗមានកាលកំណត់ក្នុងការឱ្យផលខុសៗគ្នា៖', 'When an intentional deed is performed, the volitional impulse manifests as Javana-citta running sequentially for 7 moments. Each javana moment carries a strictly defined operational lifespan:') }}
          </p>

          <div class="grid sm:grid-cols-2 gap-3.5 mt-3 text-xs">
            <div class="p-3.5 rounded" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
              <div class="flex items-center justify-between mb-1">
                <strong class="text-amber-700 dark:text-amber-300 font-bold">
                  {{ t('ទិដ្ឋធម្មវេទនីយកម្ម (ជវនចិត្តទី ១)', 'Diṭṭhadhammavedanīya (1st Javana)') }}
                </strong>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-800 dark:text-amber-300 font-mono">{{ t('ជាតិនេះ', 'This Life') }}</span>
              </div>
              <p class="leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
                {{ t('ជាកម្មស្រាលខាងដើម ដែលត្រូវតែឱ្យផលនៅក្នុង ជាតិនេះជាកំហិត។ ប្រសិនបើកម្មនោះមិនមានឱកាស ឬខ្វះបច្ច័យសមស្របក្នុងការឱ្យផលរហូតដល់បុគ្គលនោះស្លាប់ចាកលោក កម្មនោះនឹង ផុតសុពលភាព ហើយប្រែទៅជា «អហោសិកម្ម» ភ្លាមៗ ដោយមិនអាចតាមទៅឱ្យផលក្នុងជាតិក្រោយៗទៀតបានឡើយ។', 'The initial javana impulse must ripen within this current lifetime without exception. If it finds no opportunity or lacks congruent conditions before death occurs, its mandate expires and it lapses into Ahosi-kamma forever.') }}
              </p>
            </div>

            <div class="p-3.5 rounded" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
              <div class="flex items-center justify-between mb-1">
                <strong class="text-amber-700 dark:text-amber-300 font-bold">
                  {{ t('ឧបបជ្ជវេទនីយកម្ម (ជវនចិត្តទី ៧)', 'Upapajjavedanīya (7th Javana)') }}
                </strong>
                <span class="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-800 dark:text-amber-300 font-mono">{{ t('ជាតិទី ២', 'Next Life') }}</span>
              </div>
              <p class="leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
                {{ t('ជាកម្មដែលមានកម្លាំងខ្លាំងនៅចុងក្រោយ ដែលត្រូវតែឱ្យផលនៅក្នុង ជាតិទី ២ (ជាតិបន្ទាប់ភ្លាមៗ) ដូចជាការចាប់បដិសន្ធិ។ ប្រសិនបើនៅក្នុងជាតិទី ២ នោះ កម្មនេះមិនបានឱ្យផល (ដោយសារមានកម្មផ្សេងទៀតដែលធ្ងន់ជាងដណ្តើមឱ្យផលមុន) ពេលឆ្លងផុតជាតិទី ២ ចូលដល់ជាតិទី ៣ កម្មនេះក៏នឹង ក្លាយជា «អហោសិកម្ម» ទាំងស្រុង ដូចគ្នា។', 'The final 7th javana impulse must mature specifically in the 2nd lifetime (immediate rebirth). If pre-empted by heavier karma in life 2, once the individual crosses into life 3, this karma lapses irrevocably into Ahosi-kamma.') }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 2: ការត្រូវកាត់ផ្តាច់ដោយ «ឧបឃាតកកម្ម» -->
      <div v-if="activeAhosiTab === 'destructive'" class="mt-6 space-y-4 fade-up">
        <div class="card-paper p-4 sm:p-5" :style="{ background: 'var(--bg-card)' }">
          <div class="flex items-center justify-between gap-2 mb-2">
            <h4 class="font-display text-base font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
              <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">២</span>
              {{ t('ការត្រូវកាត់ផ្តាច់ដោយ «ឧបឃាតកកម្ម» (Destructive Karma)', 'Termination by Destructive Karma (Upaghātaka-kamma)') }}
            </h4>
            <span class="paali text-xs">Upaghātaka</span>
          </div>

          <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('នៅក្នុងបច្ច័យនៃកម្ម មានកម្មមួយប្រភេទហៅថា ឧបឃាតកកម្ម (Upaghātaka-kamma — កម្មផ្តាច់ជីវិត ឬកម្មបំផ្លាញ)៖', 'In Abhidhamma karmic mechanics, Upaghātaka-kamma represents overwhelming destructive force:') }}
          </p>

          <div class="grid sm:grid-cols-2 gap-3.5 mt-3 text-xs">
            <div class="p-3.5 rounded" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
              <strong class="block mb-1 text-red-700 dark:text-red-400 font-bold">
                {{ t('យន្តការកាត់ផ្តាច់ (Annihilation Mechanism)', 'Severing Mechanism') }}
              </strong>
              <p class="leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
                {{ t('នៅពេលដែលកម្មតូចតាចមួយកំពុងតែរៀបចំឱ្យផល ឬកំពុងផ្តល់ផល ស្រាប់តែមាន កម្មថ្មីមួយទៀតដែលមានកម្លាំងធ្ងន់ធ្ងរមហិមា កើតឡើង។ កម្មធំនោះបានចូលទៅកម្ទេច ឬកាត់ផ្តាច់សក្តានុពលនៃកម្មចាស់នោះចោលតែម្តង។', 'While an ordinary karma is maturing or yielding mild results, a colossal opposing karma strikes, completely annihilating the trajectory and potential of the weaker karma.') }}
              </p>
            </div>

            <div class="p-3.5 rounded" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
              <strong class="block mb-1 text-red-700 dark:text-red-400 font-bold">
                {{ t('ឧទាហរណ៍ជាក់ស្តែង', 'Concrete Example') }}
              </strong>
              <p class="leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
                {{ t('បុគ្គលម្នាក់មានកម្មល្អរង់ចាំឱ្យផលរស់នៅសុខស្រួលរហូតដល់ចាស់ ប៉ុន្តែដោយសារមានអកុសលកម្មធ្ងន់ពីអតីតជាតិមកកាត់ផ្តាច់ជីវិតឱ្យស្លាប់តាំងពីក្មេង នោះរាល់ផលបុណ្យចាស់ៗដែលត្រូវទទួលក្នុងវ័យចំណាស់ ក៏ត្រូវរលត់ក្លាយជា អហោសិកម្ម ទាំងអស់ ព្រោះគ្មានរាងកាយសម្រាប់ទទួលផលតទៅទៀត។', 'A person has merit slated to provide wealth in old age. But an ancient destructive demerit abruptly cuts life short in youth; all future old-age boons instantly lapse into Ahosi-kamma because no physical vehicle remains to receive them.') }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB 3: ការរារាំងដោយ «សម្បត្តិ ៤» (Suppression by Favorable Conditions) -->
      <div v-if="activeAhosiTab === 'sampatti'" class="mt-6 space-y-4 fade-up">
        <div class="card-paper p-4 sm:p-5" :style="{ background: 'var(--bg-card)' }">
          <div class="flex items-center justify-between gap-2 mb-2">
            <h4 class="font-display text-base font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
              <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">៣</span>
              {{ t('ការរារាំងដោយ «សម្បត្តិ ៤» (Suppression by the 4 Favorable Conditions)', 'Suppression by the 4 Favorable Endowments (Sampatti 4)') }}
            </h4>
            <span class="paali text-xs">Sampatti 4</span>
          </div>

          <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ថាមពលកម្ម (Kamma-satti) មិនអាចឱ្យផលតាមចិត្តឯកឯងបានឡើយ គឺវាត្រូវការ បច្ច័យគាំទ្រ។ ប្រសិនបើបុគ្គលម្នាក់ពោរពេញដោយ «សម្បត្តិ ៤» នោះអកុសលកម្ម (បាបចាស់ៗ) នឹងមិនអាចរកចន្លោះជ្រៀតចូលមកឱ្យផលបានឡើយ៖', 'Karmic potency cannot ripen in a vacuum; it requires fertile conditions. When an individual is surrounded by the 4 Favorable Endowments, past demerits find zero opportunity to pierce through:') }}
          </p>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3 text-xs">
            <div class="p-3 rounded text-center" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
              <span class="text-lg block mb-1">🏰</span>
              <strong class="block text-amber-800 dark:text-amber-300 font-bold">{{ t('គតិសម្បត្តិ', 'Gati-sampatti') }}</strong>
              <span class="text-[11px] block mt-1" :style="{ color: 'var(--ink-muted)' }">{{ t('កើតក្នុងភពខ្ពង់ខ្ពស់ (សួគ៌ គ្រួសារល្អ)', 'Fortunate realm / noble birth') }}</span>
            </div>
            <div class="p-3 rounded text-center" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
              <span class="text-lg block mb-1">✨</span>
              <strong class="block text-amber-800 dark:text-amber-300 font-bold">{{ t('ឧបធិសម្បត្តិ', 'Upadhi-sampatti') }}</strong>
              <span class="text-[11px] block mt-1" :style="{ color: 'var(--ink-muted)' }">{{ t('រូបកាយស្រស់ស្អាត មាំមួន ឥតពិការ', 'Handsome, healthy, intact body') }}</span>
            </div>
            <div class="p-3 rounded text-center" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
              <span class="text-lg block mb-1">🕊️</span>
              <strong class="block text-amber-800 dark:text-amber-300 font-bold">{{ t('កាលសម្បត្តិ', 'Kāla-sampatti') }}</strong>
              <span class="text-[11px] block mt-1" :style="{ color: 'var(--ink-muted)' }">{{ t('សម័យសន្តិភាព សម្បូរសប្បាយ គ្មានសង្គ្រាម', 'Era of peace, justice, prosperity') }}</span>
            </div>
            <div class="p-3 rounded text-center" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
              <span class="text-lg block mb-1">💡</span>
              <strong class="block text-amber-800 dark:text-amber-300 font-bold">{{ t('បយោគសម្បត្តិ', 'Payoga-sampatti') }}</strong>
              <span class="text-[11px] block mt-1" :style="{ color: 'var(--ink-muted)' }">{{ t('ព្យាយាម ឆ្លាតវៃ សីលធម៌ខ្ពស់', 'Right effort, wisdom, integrity') }}</span>
            </div>
          </div>

          <!-- Lonaphala Sutta Analogy -->
          <div class="mt-3.5 p-3.5 rounded" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--accent)' }">
            <strong class="text-xs text-amber-900 dark:text-amber-200 block mb-1">
              🌊 {{ t('ឧបមាទឹកទន្លេគង្គា និងដុំអំបិល (លោណផលសូត្រ — Loṇaphala Sutta)', 'The River and Lump of Salt Analogy (Loṇaphala Sutta)') }}
            </strong>
            <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t('កាលបើបុគ្គលម្នាក់ខំសាងអំពើល្អ សមាធិ និងបញ្ញាពេញទំហឹង អំពើល្អនោះប្រៀបដូចជា ទឹកទន្លេដ៏ច្រើនសន្ធឹកសន្ធាប់។ ទោះបីជាមានដុំអំបិល (បាបកម្មចាស់ៗ) ធ្លាក់ចូលមក ក៏ទឹកទន្លេនោះមិនប្រែជាប្រៃដែរ។ អកុសលកម្មស្រាលៗដែលមិនអាចរកឱកាសទម្លុះរបាំងនៃបុណ្យបាន នៅទីបំផុតក៏សាបរលាបទៅជា អហោសិកម្ម ទៅវិញ។', 'When a practitioner cultivates vast virtue, meditation, and wisdom, merits swell like the vast Ganges river. A small lump of salt (past demerits) thrown in cannot make the river salty. Past minor demerits that find no opening against this shield of merit eventually dissolve into Ahosi-kamma.') }}
            </p>
          </div>
        </div>
      </div>

      <!-- TAB 4: ការរលត់សូន្យទាំងស្រុងនៅពេល «ចូលបរិនិព្វាន» -->
      <div v-if="activeAhosiTab === 'nibbana'" class="mt-6 space-y-4 fade-up">
        <div class="card-paper p-4 sm:p-5" :style="{ background: 'var(--bg-card)' }">
          <div class="flex items-center justify-between gap-2 mb-2">
            <h4 class="font-display text-base font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
              <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">៤</span>
              {{ t('ការរលត់សូន្យទាំងស្រុងនៅពេល «ចូលបរិនិព្វាន» (Ultimate Neutralization)', 'Ultimate Neutralization at Final Parinibbāna') }}
            </h4>
            <span class="paali text-xs">Parinibbāna</span>
          </div>

          <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ចំណែក អបរាបរិយវេទនីយកម្ម (កម្មកណ្តាលនៃជវនចិត្តទី ២ ដល់ទី ៦) គឺជាកម្មដែលមានឥទ្ធិពលវែងឆ្ងាយបំផុត អាចតាមឱ្យផលចាប់ពីជាតិទី ៣ រហូតដល់រាប់ពាន់កោដិកប្បខាងមុខ មិនចេះផុតកំណត់ដោយសារពេលវេលាឡើយ៖', 'Aparāpariyavedanīya kamma (the middle javanas 2 to 6) is the most enduring category, capable of tracking the individual from life 3 across billions of eons without any expiration date:') }}
          </p>

          <div class="p-3.5 rounded mt-3" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
            <ul class="tick-list text-xs space-y-2" :style="{ color: 'var(--ink-muted)' }">
              <li>
                <strong :style="{ color: 'var(--ink)' }">{{ t('យន្តការនៃព្រះនិព្វាន៖', 'The Mechanism of Nibbāna:') }}</strong>
                {{ t('មធ្យោបាយតែមួយគត់ដែលធ្វើឱ្យ អបរាបរិយវេទនីយកម្ម ក្លាយជាអហោសិកម្មបាន គឺ ការសម្រេចព្រះអរហត្ត និងចូលអនុបាទិសេសនិព្វាន។', 'The sole means to render indefinite karma into Ahosi-kamma is attaining Arahantship and entering Anupādisesa-nibbāna.') }}
              </li>
              <li>
                <strong :style="{ color: 'var(--ink)' }">{{ t('ការកាត់ផ្តាច់ខន្ធ ៥៖', 'Severing the Five Aggregates:') }}</strong>
                {{ t('នៅពេលព្រះអរហន្តចូលបរិនិព្វាន ចុតិចិត្តរលត់ផុតទៅ បដិសន្ធិចិត្តថ្មីមិនកើតឡើងឡើយ។ ខ្សែសង្វាក់នៃខន្ធ ៥ ត្រូវបានកាត់ផ្តាច់ទាំងស្រុង។ រាល់កម្មទាំងអស់ (ទាំងបុណ្យ ទាំងបាប) ដែលនៅសេសសល់រាប់លានជាតិក្នុងអតីតកាល ដែលមិនទាន់បានឱ្យផល សុទ្ធតែត្រូវ «រលត់សាបសូន្យ ក្លាយជាអហោសិកម្មព្រមៗគ្នាទាំងអស់» នៅក្នុងខណៈនោះ។', 'When an Arahant enters final Parinibbāna, Cuti-citta ceases and no Paṭisandhi-citta arises. The 5 aggregates dissolve permanently. Every unripened deed (both wholesome and unwholesome) across infinite past lifetimes collapses simultaneously into Ahosi-kamma.') }}
              </li>
              <li>
                <strong :style="{ color: 'var(--accent-bright)' }">{{ t('ឧបមាគ្រាប់ពូជដែលត្រូវភ្លើងឆេះខ្លោច៖', 'The Roasted Seed Parable:') }}</strong>
                {{ t('កម្មដែលបានសាង ប្រៀបដូចជាគ្រាប់ពូជស្រូវ។ ប្រសិនបើយើងយកគ្រាប់ពូជនោះទៅលីងលើខ្ទះក្តៅឱ្យឆេះខ្លោច (ការដុតកិលេសដោយអរិយមគ្គ) ទោះបីជាយកគ្រាប់ពូជនោះទៅកប់ក្នុងដី និងស្រោចទឹកយ៉ាងណាក៏ដោយ ក៏វាមិនអាចដុះពន្លកចេញជាដើមស្រូវ (វិបាក) បានទៀតឡើយ។', 'Committed karma resembles rice seeds. When roasted in a scorching pan until charred (defilements incinerated by the Noble Path), no matter how much soil or water is applied, they can never sprout into crops (vipāka).') }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 31 planes -->
    <div id="31-plane" class="card-paper p-6 md:p-8 mt-8 scroll-mt-24">
      <p class="chapter-label">BHUMMI — 31</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ភូមិ ៣១ នៃសង្សារ', '31 Planes of Existence') }}</h3>
      <p class="text-sm mt-2" :style="{ color: 'var(--ink-muted)' }">{{ t('កម្មនីមួយៗ នាំសត្វទៅកាន់ភូមិដែលសមនឹងផលរបស់ខ្លួន — ទាំងអាក្រក់ ទាំងល្អ។', 'Every kamma leads beings to the realm its fruit deserves — for good or ill.') }}</p>
      <div class="mt-5 space-y-3">
        <details v-for="g in planes" :key="g.en" class="rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid ' + g.color }">
          <summary class="flex items-center justify-between gap-2 px-4 py-3 cursor-pointer list-none" :style="{ color: 'var(--ink)' }">
            <span class="min-w-0">
              <span class="font-bold" :style="{ color: g.color }">{{ t(g.km, g.en) }}</span>
              <span class="text-xs ml-2" :style="{ color: 'var(--ink-muted)' }">{{ t(g.kmBody, g.enBody) }}</span>
            </span>
            <span class="flex items-center gap-2 shrink-0">
              <span class="paali">{{ g.n }}</span>
              <span class="caret" :style="{ color: 'var(--accent-bright)' }">&#9660;</span>
            </span>
          </summary>
          <div class="px-4 pb-4">
            <p class="text-xs flex gap-2 items-baseline mb-3" :style="{ color: 'var(--ink-muted)' }">
              <span class="font-bold" :style="{ color: 'var(--accent-bright)' }">✦</span>
              <span>{{ t(g.rootK, g.rootE) }}</span>
            </p>
            <ol class="space-y-2">
              <li v-for="(p, i) in g.list" :key="p.en" class="flex gap-2 text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                <span class="shrink-0" :style="{ color: 'var(--ink-faint)' }">{{ khNum(g.base + i + 1) }}.</span>
                <span class="min-w-0">
                  <strong :style="{ color: 'var(--ink)' }">{{ t(p.km, p.en) }}</strong>
                  <span class="ml-1" :style="{ color: 'var(--ink-faint)' }">{{ p.pl }}</span>
                  <br>
                  <span class="text-[11px]" :style="{ color: 'var(--ink-muted)' }">{{ t(p.cK, p.cE) }}</span>
                </span>
              </li>
            </ol>
          </div>
        </details>
      </div>
      <div class="verse-box p-3 mt-5">
        <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t('ឱកាសកើតជាមនុស្សមានតម្លៃណាស់ — បានជួបធម៌ អាចបដិបត្តិ អាចរួចផុតពីវដ្ដ (ការវិលវល់កើតស្លាប់)។', 'To be born human and meet the Dhamma is precious — one can practise and escape the round.') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeAhosiTab = ref('javana') // 'javana', 'destructive', 'sampatti', 'nibbana'

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  return String(n).split('').map(d => khDigits[Number(d)]).join('')
}

const kusala = [
  { km: 'មិនសម្លាប់សត្វ', en: 'Nothing that breathes', pl: 'បាណាតិបាតា វេរមណី · not killing', plain: 'ឈប់បៀតបៀនជីវិតអ្នកដទៃ — ចេះអាណិតមេត្តាសត្វដទៃ' },
  { km: 'មិនលួច', en: 'Nothing that is not given', pl: 'អទិន្នាទានា វេរមណី · not stealing', plain: 'មិនយករបស់ដែលគេមិនបានឲ្យ — ចេះគោរពទ្រព្យសម្បត្តិអ្នកដទៃ' },
  { km: 'មិនក្បត់ក្នុងស្នេហា', en: 'Pure in love', pl: 'កាមេសុមិច្ឆាចារា វេរមណី · no sexual misconduct', plain: 'មិនប្រព្រឹត្តខុសក្នុងកាម — រក្សាសេចក្តីស្មោះត្រង់ក្នុងគ្រួសារ' },
  { km: 'មិនភូតកុហក', en: 'True in speech', pl: 'មុសាវាទា វេរមណី · not lying', plain: 'ចេះនិយាយតែពាក្យពិត — ដោយស្ងប់ ឥតក្លែង' },
  { km: 'មិនញុះញង់', en: 'Words that unite', pl: 'បិសុណាវាចា វេរមណី · not slandering', plain: 'មិននិយាយដើមគេ ឲ្យបែកបាក់ — ចេះនិយាយភ្ជាប់មេត្រីភាព' },
  { km: 'មិននិយាយគ្រហឹម', en: 'Gentle words', pl: 'ផរុសវាចា វេរមណី · not speaking harshly', plain: 'ចេះនិយាយទន់ភ្លន់ — ឥតបន្ទោសបង្អាប់អ្នកដទៃ' },
  { km: 'មិននិយាយឥតប្រយោជន៍', en: 'Timely and useful', pl: 'សម្ផប្បលាបា វេរមណី · not idle chatter', plain: 'និយាយតែពេលសមគួរ — ពាក្យដែលមានប្រយោជន៍' },
  { km: 'មិនលោភលន់', en: 'An open hand', pl: 'អនភិជ្ឈា វេរមណី · non-covetousness', plain: 'មិនចង់បានរបស់គេ — ចិត្តរំសាយស្រេកឃ្លាន' },
  { km: 'មិនព្យាបាទ', en: 'Goodwill to all', pl: 'អព្យាបាទ វេរមណី · non-ill-will', plain: 'មានចិត្តមេត្តា ខន្តីចំពោះអ្នកដទៃ' },
  { km: 'គំនិតត្រឹមត្រូវ', en: 'Right view', pl: 'សម្មាទិដ្ឋិ · seeing the truth', plain: 'ឃើញថា ធ្វើល្អបានល្អ ធ្វើអាក្រក់បានអាក្រក់' },
]

const akusala = [
  { km: 'ការសម្លាប់សត្វ', en: 'Killing', pl: 'បាណាតិបាត · taking breath', plain: 'កាប់ សម្លាប់ បៀតបៀនជីវិតសត្វដទៃ' },
  { km: 'ការលួច', en: 'Stealing', pl: 'អទិន្នាទាន · taking what is not given', plain: 'យករបស់ដែលគេមិនបានឲ្យ — លួច ប្លន់ បោកបញ្ឆោត' },
  { km: 'ការប្រព្រឹត្តិខុសក្នុងកាម', en: 'Sexual misconduct', pl: 'កាមេសុមិច្ឆាចារ · wrong in love', plain: 'ក្បត់ស្នេហា ប្រព្រឹត្តផិតក្រៅ' },
  { km: 'ការភូតកុហក', en: 'Lying', pl: 'មុសាវាទ · false speech', plain: 'និយាយពាក្យមិនពិត — ប្រវ័ញ្ចភូតបំភាន់' },
  { km: 'ការញុះញង់', en: 'Slander', pl: 'បិសុណាវាចា · divisive speech', plain: 'និយាយដើមគេ ឲ្យបែកបាក់' },
  { km: 'ការជេរប្រទេច', en: 'Harsh speech', pl: 'ផរុសវាចា · abusive words', plain: 'និយាយពាក្យគ្រហឹម អាក្រក់ បន្ទោសបង្អាប់' },
  { km: 'ការនិយាយឥតប្រយោជន៍', en: 'Idle chatter', pl: 'សម្ផប្បលាប · gossip, vain talk', plain: 'និយាយពាក្យអសារឥតការ — ឥតអត្ថន័យ' },
  { km: 'ការលោភលន់', en: 'Covetousness', pl: 'អភិជ្ឈា · greedy longing', plain: 'ចង់បានរបស់គេ ឥតឆ្អែត' },
  { km: 'ការព្យាបាទ', en: 'Ill-will', pl: 'ព្យាបាទ · wishing harm', plain: 'ចិត្តខឹង ចង់ឲ្យអ្នកដទៃខូច' },
  { km: 'គំនិតយល់ខុស', en: 'Wrong view', pl: 'មិច្ឆាទិដ្ឋិ · denying the Dhamma', plain: 'មិនជឿផលកម្ម មិនជឿធម៌' },
]

const roots = [
  { km: 'លោភៈ', en: 'Greed', pl: 'lobha', color: 'var(--red)', kmBody: 'ចង់បាន តោងតាមអារម្មណ៍', enBody: 'clinging desire' },
  { km: 'ទោសៈ', en: 'Aversion', pl: 'dosa', color: 'var(--red)', kmBody: 'ខឹងឆេវឆាវ ស្អប់', enBody: 'anger and hatred' },
  { km: 'មោហៈ', en: 'Delusion', pl: 'moha', color: 'var(--red)', kmBody: 'វង្វេង មិនយល់ពិត', enBody: 'blind confusion' },
  { km: 'អលោភៈ', en: 'Non-greed', pl: 'alobha', color: 'var(--sage)', kmBody: 'ចិត្តមិនលោភ ចេះចែករំលែក និងឲ្យដោយស្ម័គ្រចិត្ត', enBody: 'generosity, letting go' },
  { km: 'អទោសៈ', en: 'Non-aversion', pl: 'adosa', color: 'var(--sage)', kmBody: 'មេត្តា អត់ឱន', enBody: 'loving-kindness, patience' },
  { km: 'អមោហៈ', en: 'Non-delusion', pl: 'amoha', color: 'var(--sage)', kmBody: 'បញ្ញាដឹងសេចក្តីពិត', enBody: 'wisdom seeing the truth' },
]

const planes = [
  {
    km: 'អបាយភូមិ', en: '4 Woeful Planes', n: '4', base: 0, color: 'var(--red)',
    kmBody: 'ភូមិអាក្រក់ ជាជម្រករបស់កម្មអកុសល', enBody: 'the unhappy worlds, home of evil kamma',
    rootK: 'ឫសគល់៖ កើតដោយកម្មអកុសល ដែលមានលោភៈ ទោសៈ មោហៈ ជាហេតុដើម។', rootE: 'Root: rebirth by unwholesome deeds rooted in greed, aversion and delusion.',
    list: [
      { km: 'នរក', en: 'Hell', pl: 'niraya', cK: 'កម្មអកុសលធ្ងន់ — សម្លាប់ បៀតបៀន កំហឹងខ្លាំង។', cE: 'heavy evil kamma — killing, cruelty, fierce hatred.' },
      { km: 'តិរច្ឆាន', en: 'Animals', pl: 'tiracchāna', cK: 'កម្មវង្វេងល្ងង់ — ធ្វើអំពើដោយមោហៈ និងកាមមិច្ឆាចារ។', cE: 'deluded conduct — acting on ignorance and sensual excess.' },
      { km: 'ប្រេត', en: 'Ghosts', pl: 'peta', cK: 'កម្មកំណាញ់ស្វិត — លោភៈ មិនចែករំលែក។', cE: 'stingy, grasping kamma — greed with no generosity.' },
      { km: 'អសុរកាយ', en: 'Demons (asuras)', pl: 'asurakāya', cK: 'កម្មអកុសលបន្ទាប់ — ព្យាបាទ ឥស្សា ប្រមាថ។', cE: 'lesser evil kamma — ill-will, envy, arrogance.' },
    ]
  },
  {
    km: 'កាមសុគតិភូមិ', en: '7 Happy Sense Planes', n: '7', base: 4, color: 'var(--accent)',
    kmBody: 'ភូមិល្អក្នុងកាមលោក ជាផលរបស់កុសលកម្ម', enBody: 'the happy sense-sphere worlds, fruit of wholesome deeds',
    rootK: 'ឫសគល់៖ កើតដោយកុសលកម្មកម្រិតផ្សេងៗ — ទាន សីល ភាវនា ដ៏ចម្រើនឡើងរៀងៗខ្លួន។', rootE: 'Root: rebirth by wholesome kamma at growing levels — giving, virtue, meditation.',
    list: [
      { km: 'មនុស្ស', en: 'Humans', pl: 'manussā', cK: 'កុសលកម្មកម្រិតមធ្យម គឺ ទាន និង សីល។', cE: 'moderate wholesome kamma — giving and virtue.' },
      { km: 'ចាតុមហារាជិកា', en: 'Four Great Kings', pl: 'cātummahārājikā', cK: 'សីលរឹងមាំ ជាមួយកុសលខ្ពស់ជាងមនុស្សបន្តិច។', cE: 'firm virtue with somewhat stronger wholesome kamma.' },
      { km: 'តាវតិង្សៈ', en: 'The Thirty-Three', pl: 'tāvatiṃsā', cK: 'កុសលខ្ពស់ថែមទៀត ប្រកបដោយគុណគាប់។', cE: 'yet higher wholesome kamma and gentle virtue.' },
      { km: 'យាមៈ', en: 'Yāma', pl: 'yāmā', cK: 'កុសលស្ងប់ស្ងៀម កាន់តែល្អិតល្អន់។', cE: 'still finer, tranquil wholesome kamma.' },
      { km: 'តុសិតៈ', en: 'Tusita', pl: 'tusitā', cK: 'កុសលដ៏រីករាយ — ស្ថានដែលព្រះពោធិសត្វគង់រង់ចាំ មុននឹងចុះមកកើតជាមនុស្ស។', cE: 'joyful wholesome kamma — the realm where the Bodhisatta waits before his last birth.' },
      { km: 'និម្មាណរតី', en: 'Delighting in Creation', pl: 'nimmānaratī', cK: 'កុសលខ្ពស់ ផ្សំជាមួយសេចក្តីស្ងប់ខាងក្នុង។', cE: 'exalted wholesome kamma with inner serenity.' },
      { km: 'បរនិម្មិតវសវត្តី', en: 'Wielding Power over Others', pl: 'paranimmitavasavattī', cK: 'កុសលដ៏ខ្ពស់បំផុត ក្នុងកាមលោកទាំងមូល។', cE: 'the highest wholesome kamma of the entire sense world.' },
    ]
  },
  {
    km: 'រូបាវចរព្រហ្មភូមិ', en: '16 Fine-material Brahma Planes', n: '16', base: 11, color: 'var(--blue)',
    kmBody: 'ភូមិព្រហ្មដែលនៅមានរូប ជាផលរបស់រូបជ្ឈានកុសល', enBody: 'fine-material realms, fruit of the rūpa-jhānas',
    rootK: 'ឫសគល់៖ កើតដោយរូបជ្ឈានកុសល តាមកម្រិតស្រាល-មធ្យម-ខ្ពស់នៃសមាបត្តិនីមួយៗ។ សុទ្ធាវាស ៥ (ឋានស្អាតសម្រាប់អ្នកបរិសុទ្ធ) កើតបានតែចំពោះព្រះអនាគាមី (អ្នកលែងវិលមកកើតក្នុងលោកកាមនេះ) ប៉ុណ្ណោះ។', rootE: 'Root: rebirth by the fine-material jhānas at each level of attainment. The 5 Pure Abodes arise only for non-returners.',
    list: [
      { km: 'ព្រហ្មបរិសជ្ជៈ', en: 'Assembly of Brahmā', pl: 'brahmaparisajjā', cK: 'ឈានទី ១ កម្រិតស្រាល។', cE: 'first jhāna, weak attainment.' },
      { km: 'ព្រហ្មបុរោហិតៈ', en: 'Ministers of Brahmā', pl: 'brahmapurohitā', cK: 'ឈានទី ១ កម្រិតកណ្តាល។', cE: 'first jhāna, medium attainment.' },
      { km: 'មហាព្រហ្ម', en: 'Great Brahmā', pl: 'mahābrahmā', cK: 'ឈានទី ១ កម្រិតខ្ពស់។', cE: 'first jhāna, strong attainment.' },
      { km: 'បរិត្តាភា', en: 'Of Little Radiance', pl: 'parittābha', cK: 'ឈានទី ២ កម្រិតស្រាល។', cE: 'second jhāna, weak attainment.' },
      { km: 'អប្បមាណាភា', en: 'Of Immeasurable Radiance', pl: 'appamāṇābha', cK: 'ឈានទី ២ កម្រិតកណ្តាល។', cE: 'second jhāna, medium attainment.' },
      { km: 'អាភស្សរា', en: 'Of Streaming Radiance', pl: 'ābhassarā', cK: 'ឈានទី ២ កម្រិតខ្ពស់។', cE: 'second jhāna, strong attainment.' },
      { km: 'បរិត្តសុភា', en: 'Of Little Beauty', pl: 'parittasubhā', cK: 'ឈានទី ៣ កម្រិតស្រាល។', cE: 'third jhāna, weak attainment.' },
      { km: 'អប្បមាណសុភា', en: 'Of Immeasurable Beauty', pl: 'appamāṇasubhā', cK: 'ឈានទី ៣ កម្រិតកណ្តាល។', cE: 'third jhāna, medium attainment.' },
      { km: 'សុភកិណ្ហៈ', en: 'Of Radiant Beauty', pl: 'subhakiṇha', cK: 'ឈានទី ៣ កម្រិតខ្ពស់។', cE: 'third jhāna, strong attainment.' },
      { km: 'វេហប្ផលៈ', en: 'Of Great Fruit', pl: 'vehapphala', cK: 'ឈានទី ៤ កម្រិតស្រាល ឬ កណ្តាល។', cE: 'fourth jhāna, weak or medium attainment.' },
      { km: 'អសញ្ញសត្ត', en: 'Unconscious Beings', pl: 'asaññasatta', cK: 'ឈានទី ៤ ដោយប្រាថ្នាឲ្យតែរូប ឥតចិត្តគិត។', cE: 'fourth jhāna willed as bare form without consciousness.' },
      { km: 'អវិហា', en: 'Aviha', pl: 'avihā', cK: 'សុទ្ធាវាស៖ កើតបានតែចំពោះព្រះអនាគាមី។', cE: 'Pure Abode — only for non-returners.' },
      { km: 'អតប្បា', en: 'Atappa', pl: 'atappā', cK: 'សុទ្ធាវាស៖ កើតបានតែចំពោះព្រះអនាគាមី។', cE: 'Pure Abode — only for non-returners.' },
      { km: 'សុទស្សៈ', en: 'Sudassa', pl: 'sudassā', cK: 'សុទ្ធាវាស៖ កើតបានតែចំពោះព្រះអនាគាមី។', cE: 'Pure Abode — only for non-returners.' },
      { km: 'សុទស្សី', en: 'Sudassī', pl: 'sudassī', cK: 'សុទ្ធាវាស៖ កើតបានតែចំពោះព្រះអនាគាមី។', cE: 'Pure Abode — only for non-returners.' },
      { km: 'អកនិដ្ឋៈ', en: 'Akaniṭṭha', pl: 'akaniṭṭha', cK: 'សុទ្ធាវាសខ្ពស់បំផុត៖ កើតបានតែចំពោះព្រះអនាគាមី។', cE: 'highest Pure Abode — only for non-returners.' },
    ]
  },
  {
    km: 'អរូបាវចរព្រហ្មភូមិ', en: '4 Formless Brahma Planes', n: '4', base: 27, color: 'var(--purple)',
    kmBody: 'ភូមិព្រហ្មឥតរូប ជាផលរបស់អរូបជ្ឈានកុសល', enBody: 'formless realms, fruit of the arūpa-jhānas',
    rootK: 'ឫសគល់៖ កើតដោយអរូបជ្ឈានកុសល ៤ តាមសមាបត្តិនីមួយៗ។', rootE: 'Root: rebirth by each of the four formless attainments.',
    list: [
      { km: 'អាកាសានញ្ចាយតនៈ', en: 'Base of Infinite Space', pl: 'ākāsānañcāyatana', cK: 'អរូបជ្ឈានទី ១ — ហួសពីកំណត់រូប ឃើញអាកាសឥតដែនកំណត់។', cE: '1st formless jhāna — passing beyond form, seeing space as boundless.' },
      { km: 'វិញ្ញាណញ្ចាយតនៈ', en: 'Base of Infinite Consciousness', pl: 'viññāṇañcāyatana', cK: 'អរូបជ្ឈានទី ២ — ដឹងវិញ្ញាណឥតព្រំដែន។', cE: '2nd formless jhāna — consciousness as boundless.' },
      { km: 'អាកិញ្ចញ្ញាយតនៈ', en: 'Base of Nothingness', pl: 'ākiñcaññāyatana', cK: 'អរូបជ្ឈានទី ៣ — យល់ឃើញថា «គ្មានអ្វីសោះ»។', cE: '3rd formless jhāna — seeing nothing there at all.' },
      { km: 'នេវសញ្ញានាសញ្ញាយតនៈ', en: 'Neither-Perception-Nor-Non-Perception', pl: 'nevasaññānāsaññāyatana', cK: 'អរូបជ្ឈានទី ៤ — ចិត្តដ៏ខ្ពស់បំផុត ក្នុងវដ្ដសង្សារ។', cE: '4th formless jhāna — the sublimest mind within saṃsāra.' },
    ]
  },
]
</script>