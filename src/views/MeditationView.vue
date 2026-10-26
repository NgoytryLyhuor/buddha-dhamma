<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ០៦ — សមាធិ', 'GATHA 06 — MEDITATION') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('ភាវនា ទូន្មានចិត្ត', 'Bhāvanā: Cultivating the Mind') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ភាវនា ប្រែថា ការធ្វើឲ្យរីកចម្រើន ការហ្វឹកហាត់ចិត្ត។ ចិត្តដែលបានហ្វឹកហាត់ល្អ នាំមកនូវសុខ; ចិត្តមិនបានហ្វឹកហាត់ នាំមកនូវទុក្ខ។', 'Bhāvanā means making-to-grow — training the mind. A well-trained mind brings happiness; an untrained mind brings suffering.') }}
    </p>
    <p class="mt-3 text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
      {{ t('អ្នកចាប់ផ្តើមតែងយល់ច្រឡំថា សមាធិគឺបំបាត់គំនិតឲ្យអស់។ ការពិត សមាធិគឺហ្វឹកហាត់ឲ្យចិត្តស្គាល់ផ្ទះរបស់ខ្លួនឯង ៖ ដឹងថាចិត្តកំពុងធ្វើអ្វី កំពុងរីករាយ ឬ កំពុងឈឺចាប់ — ដើម្បីយល់ចិត្តខ្លួនឯង មិនមែនដើម្បីលុបបំបាត់អ្វីមួយ។', 'Beginners often think meditation means emptying the mind of all thought. In truth, meditation trains the mind to feel at home with itself — knowing what it is doing, whether it is happy or hurting — in order to understand the mind, not to erase it.') }}
    </p>

    <!-- Samatha vs Vipassana -->
    <div class="grid md:grid-cols-2 gap-6 mt-8">
      <div class="card-paper p-6">
        <p class="chapter-label" style="color: var(--blue)">SAMATHA</p>
        <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('សមថភាវនា', 'Tranquility Meditation') }}</h3>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t('តម្កល់ចិត្តឲ្យនៅនឹងអារម្មណ៍តែមួយ ដូចជាដង្ហើម រហូតដល់ចិត្តស្ងប់ កន្លងផុតគំនិតរាយមាយ ហើយឈានទៅកាន់ឈាន។', 'Holds the mind on a single object, such as the breath, until the mind settles, goes beyond scattered thinking, and reaches jhāna.') }}</p>
        <div class="verse-box p-3 my-3">
          <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('ប្រៀបដូចធ្វើទឹកកំបុរឲ្យស្ងប់ — កាលណាស្ងប់ ទើបឃើញអ្វីៗបានច្បាស់លាស់។', 'Like stilling murky water — only when it settles can you see clearly.') }}</p>
        </div>
        <ul class="tick-list mt-3">
          <li v-for="s in samatha" :key="s.en"><strong :style="{ color: 'var(--ink)' }">{{ t(s.km, s.en) }}</strong><span class="text-xs" :style="{ color: 'var(--ink-muted)' }"> — {{ s.pl }}</span></li>
        </ul>
      </div>
      <div class="card-paper p-6">
        <p class="chapter-label" style="color: var(--accent)">VIPASSANĀ</p>
        <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('វិបស្សនាភាវនា', 'Insight Meditation') }}</h3>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t('កាលណាចិត្តស្ងប់ ទើបពិនិត្យមើលកាយ អារម្មណ៍ ចិត្ត និងធម៌ ដែលកើតហើយរលត់ ដឹងថាអ្វីៗមិនទៀង ជាទុក្ខ គ្មានខ្លួនពិត — លែងតោងជាប់ ទើបរួចផុត។', 'Once the mind is calm, it investigates body, feeling, mind and dhammas as they arise and pass away, seeing that all things are impermanent, unsatisfactory and not-self — clinging loosens, and freedom is reached.') }}</p>
        <div class="verse-box p-3 my-3">
          <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('ប្រៀបដូចពិនិត្យត្រីក្នុងទឹកថ្លា ដែលស្ងប់ — ឃើញច្បាស់ ទើបយល់ការពិត។', 'Like watching the fish in clear, still water — seeing clearly is understanding the truth.') }}</p>
        </div>
        <ul class="tick-list mt-3">
          <li v-for="s in vipassana" :key="s.en"><strong :style="{ color: 'var(--ink)' }">{{ t(s.km, s.en) }}</strong><span class="text-xs" :style="{ color: 'var(--ink-muted)' }"> — {{ s.pl }}</span></li>
        </ul>
      </div>
    </div>

    <!-- Comprehensive Jhāna Section -->
    <div id="jhana-deep" class="card-paper p-6 md:p-8 mt-8 scroll-mt-24">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <p class="chapter-label">JHĀNA — 8 ABSORPTIONS</p>
        <span class="text-xs px-2.5 py-0.5 rounded-full font-bold" :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          {{ t('សមាធិកម្រិតខ្ពស់ (អប្បនា)', 'High Absorption Samādhi') }}
        </span>
      </div>

      <h3 class="font-display text-2xl md:text-3xl mt-2" :style="{ color: 'var(--ink)' }">
        {{ t('ឈាន (Jhāna)៖ អត្ថន័យ កម្រិតទាំង ៨ វិធីបដិបត្តិ និងភពកំណើត', 'Jhāna: Meaning, 8 Stages, Practice & Post-Mortem Destiny') }}
      </h3>
      <p class="mt-3 text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('«ឈាន» គឺជាស្ថានភាពនៃ «សមាធិកម្រិតខ្ពស់បំផុត (អប្បនាសមាធិ)» ដែលចិត្តប្រមូលផ្តុំមូលមាំលើអារម្មណ៍តែមួយយ៉ាងមុតស្រួច រហូតកាត់ផ្តាច់ការរំខានពីពិភពខាងក្រៅ និងដុតកម្ទេចនូវរាល់កិលេសរារាំង (នីវរណធម៌) ឱ្យស្ងប់រលត់ទាំងស្រុង។', 'Jhāna in Buddhist philosophy is the state of full meditative absorption (appanā-samādhi) where consciousness fuses single-pointedly onto a meditation object, severing sensory distractions and incinerating the five mental hindrances (nīvaraṇa).') }}
      </p>

      <!-- 1. Meaning of Jhāna -->
      <div class="mt-6 p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
        <p class="text-xs font-bold uppercase tracking-wider" :style="{ color: 'var(--accent)' }">
          {{ t('១. អត្ថន័យពិតនៃពាក្យ «ឈាន» (២ ធាតុ)', '1. Etymological Roots of "Jhāna" (Two Meanings)') }}
        </p>
        <div class="grid md:grid-cols-2 gap-3 mt-3 text-xs">
          <div class="p-3 rounded bg-[var(--bg-card)] border border-[var(--border)]">
            <p class="font-bold text-sm text-[var(--ink)]">១. ឈាយតិ (ការសញ្ជឹងគិត)</p>
            <p class="mt-1 text-[var(--ink-soft)] leading-relaxed">
              {{ t('ចិត្តតម្កល់នៅនឹងថ្កល់ ផ្ដោតយ៉ាងជ្រៅទៅលើអារម្មណ៍កម្មដ្ឋានតែមួយ (ឯកគ្គតាចិត្ត) មិនរំជើបរំជួលដោយគំនិតខាងក្រៅឡើយ។', 'The mind fixes firmly, meditating with unshakeable absorption upon a single object.') }}
            </p>
          </div>
          <div class="p-3 rounded bg-[var(--bg-card)] border border-[var(--border)]">
            <p class="font-bold text-sm text-[var(--ink)]">២. ឈាបេតិ (ការដុតកម្ទេច)</p>
            <p class="mt-1 text-[var(--ink-soft)] leading-relaxed">
              {{ t('ការដុតបំផ្លាញ ឬសង្កត់កម្ទេចនូវ «នីវរណធម៌ទាំង ៥» (កាមច្ឆន្ទៈ, ព្យាបាទ, ថីនមិទ្ធ, ឧទ្ធច្ច, វិចិកិច្ឆា) មិនឱ្យងើបឡើងបំពានចិត្តបាន។', 'Incinerating or suppressing the five mental hindrances (sensual desire, ill-will, torpor, restlessness, doubt).') }}
            </p>
          </div>
        </div>
      </div>

      <!-- 2. Rūpa-jhāna 4 -->
      <div class="mt-6">
        <p class="text-xs font-bold uppercase tracking-wider" :style="{ color: 'var(--accent)' }">
          {{ t('២. រូបឈាន ៤ (Rūpa-jhāna — អង្គឈានទាំង ៥)', '2. Four Form Jhānas (5 Factors of Absorption)') }}
        </p>
        <div class="flex flex-wrap gap-2 mt-2">
          <span v-for="f in jhanaFactors" :key="f.pl" class="paali">{{ f.pl }} · {{ t(f.km, f.en) }}</span>
        </div>
        <div class="grid md:grid-cols-4 gap-3 mt-4">
          <div v-for="(j, i) in jhanas" :key="j.en" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
            <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
            <p class="font-display text-base mt-1" :style="{ color: 'var(--ink)' }">{{ t(j.km, j.en) }}</p>
            <p class="text-[11px] mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(j.kmBody, j.enBody) }}</p>
          </div>
        </div>
      </div>

      <!-- 3. Arūpa-jhāna 4 -->
      <div class="mt-6">
        <p class="text-xs font-bold uppercase tracking-wider" :style="{ color: 'var(--accent)' }">
          {{ t('៣. អរូបឈាន ៤ (Arūpa-jhāna — ឈានអរូបី)', '3. Four Formless Jhānas (Immaterial Absorptions)') }}
        </p>
        <p class="text-xs mt-1" :style="{ color: 'var(--ink-muted)' }">
          {{ t('អភិវឌ្ឍបន្តពីចតុត្ថជ្ឈាន ដោយលះបង់អារម្មណ៍ដែលមានរូបរាងចោលទាំងអស់ បែរទៅចាប់យកភាពអរូបីសុទ្ធសាធ៖', 'Advanced beyond the 4th Jhāna by relinquishing all perception of physical form:') }}
        </p>
        <div class="grid md:grid-cols-4 gap-3 mt-3">
          <div v-for="(aj, i) in arupaJhanas" :key="aj.en" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
            <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 5) }}</span>
            <p class="font-display text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t(aj.km, aj.en) }}</p>
            <p class="text-[10px] paali mt-0.5" :style="{ color: 'var(--accent)' }">{{ aj.pl }}</p>
            <p class="text-[11px] mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(aj.kmBody, aj.enBody) }}</p>
          </div>
        </div>
      </div>

      <!-- 4. How to achieve Jhāna: 3 Nimittas to Appanā -->
      <div class="mt-6">
        <p class="text-xs font-bold uppercase tracking-wider" :style="{ color: 'var(--accent)' }">
          {{ t('៤. របៀបបដិបត្តិដើម្បីសម្រេចឈាន (ដំណើរនៃនិមិត្ត ៣ ដល់ អប្បនា)', '4. How to Attain Jhāna: 3 Signs to Full Absorption') }}
        </p>
        <p class="text-xs mt-1" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ត្រូវមានគ្រឹះសីលបរិសុទ្ធ (សីល ៥ ឬ សីល ៨) ជ្រើសរើសកម្មដ្ឋាន (ដូចជា អានាបានសតិ ឬ កសិណ) រួចឆ្លងកាត់ការវិវត្តនៃនិមិត្ត៖', 'Based on purified virtue (5 or 8 precepts) and a meditation object (breath or kasiṇa), consciousness develops through three signs:') }}
        </p>
        <div class="grid md:grid-cols-4 gap-3 mt-3">
          <div v-for="n in nimittas" :key="n.stepE" class="p-3.5 rounded-sm" :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)' }">
            <p class="font-bold text-xs" :style="{ color: 'var(--accent)' }">{{ t(n.stepK, n.stepE) }}</p>
            <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(n.descK, n.descE) }}</p>
          </div>
        </div>
      </div>

      <!-- 5. Rebirth in Brahma Realm -->
      <div class="mt-6">
        <p class="text-xs font-bold uppercase tracking-wider" :style="{ color: 'var(--accent)' }">
          {{ t('៥. ពេលស្លាប់ទៅ តើអ្នកសម្រេចឈាននឹងទៅកើតនៅឯណា? (មហគ្គតកុសល / គរុកម្ម)', '5. Post-Mortem Destiny: Where Jhāna Attainers Are Reborn') }}
        </p>
        <p class="text-xs mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ឈានជា «គរុកម្ម» (Weighty Kamma) ខាងបុណ្យ ដែលមានអានុភាពខ្លាំងបំផុត រារាំងកម្មដទៃទាំងអស់។ ប្រសិនបើរៀបចំរក្សាឈានមិនឱ្យសាបសូន្យរហូតដល់ដង្ហើមចុងក្រោយ នឹងទៅកើតនៅ «ឋានព្រហ្មលោក» ភ្លាមៗ៖', 'Jhāna constitutes heavy wholesome kamma (garuka-kusala) surpassing all minor karma. Maintained to the final breath, it catapults rebirth directly into the Brahma Realms:') }}
        </p>

        <div class="space-y-2.5 mt-3">
          <div v-for="r in jhanaRebirth" :key="r.jhanaE" class="p-3 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-2" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
            <div class="min-w-0 md:w-1/3">
              <span class="font-bold text-xs" :style="{ color: 'var(--accent)' }">{{ t(r.jhanaK, r.jhanaE) }}</span>
            </div>
            <div class="min-w-0 md:w-1/2">
              <p class="text-xs font-semibold" :style="{ color: 'var(--ink)' }">{{ t(r.realmK, r.realmE) }}</p>
              <p class="text-[11px] mt-0.5" :style="{ color: 'var(--ink-muted)' }">{{ t(r.featureK, r.featureE) }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 6. Buddha's Essential Warning: Samatha vs. Vipassanā -->
      <div class="mt-6 p-4 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
        <p class="text-xs font-bold uppercase tracking-wider" :style="{ color: 'var(--accent)' }">
          {{ t('៦. ការដាស់តឿនរបស់ព្រះពុទ្ធ៖ ឈានគ្រាន់តែជាសមថៈ មិនមែនជាទីដៅចុងក្រោយឡើយ', '6. The Buddha’s Warning: Jhāna is Serenity, Not the Ultimate Goal') }}
        </p>
        <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
          • <strong>{{ t('ឈានគ្រាន់តែជា «ថ្មសង្កត់ស្មៅ»៖', 'Jhāna is only "a stone suppressing grass":') }}</strong> {{ t('កិលេសគ្រាន់តែត្រូវសង្កត់ឱ្យស្ងប់មួយគ្រា មិនទាន់ដកឫសសូន្យឡើយ។ អស់បុណ្យពីឋានព្រហ្ម នៅតែអាចធ្លាក់មកកើតជាមនុស្ស ឬធ្លាក់នរកដដែល។', 'Defilements are merely suppressed into dormancy; their latent roots (anusaya) remain unsevered. When brahma lifespan exhausts, one can still fall back to human realms or lower worlds.') }}<br/>
          • <strong>{{ t('ត្រូវបង្វែរមកចម្រើន «វិបស្សនាបញ្ញា»៖', 'Must pivot to Insight Wisdom (Vipassanā):') }}</strong> {{ t('ព្រះពុទ្ធបង្រៀនឱ្យយកថាមពលស្ងប់ដ៏មុតស្រួចនៃឈាន មកធ្វើជាគ្រឹះ រួចបង្វែរចិត្តមកសង្កេតការកើត-រលត់នៃរូប-នាម (ត្រៃលក្ខណ៍) ទើបអាចកម្ចាត់អវិជ្ជា និងសម្រេចព្រះនិព្វានបានពិតប្រាកដ។', 'The Buddha instructs us to use the unshakable stability of Jhāna as a launching pad to inspect the arising and ceasing of mind and matter (impermanence, suffering, non-self) to uproot defilements and attain Nibbāna.') }}
        </p>
      </div>
    </div>

    <!-- 4 satipatthana -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">SATIPAṬṬHĀNA</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('សតិប្បដ្ឋាន ៤', 'The Four Foundations of Mindfulness') }}</h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t('វិបស្សនា មានទីតាំងសតិ ៤ កន្លែងដើម្បីអង្គុយមើល — កាយ វេទនា ចិត្ត ធម៌ — ដោយមិនប្រកាន់ថាជារបស់ខ្លួន។', 'Insight practice has four places where mindfulness sits and watches — body, feeling, mind and dhammas — without claiming them as mine.') }}</p>
      <div class="grid md:grid-cols-4 gap-3 mt-5">
        <div v-for="(sf, i) in sati" :key="sf.en" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
          <p class="font-display text-base mt-1" :style="{ color: 'var(--ink)' }">{{ t(sf.km, sf.en) }}</p>
          <p class="text-[11px] mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(sf.kmBody, sf.enBody) }}</p>
        </div>
      </div>
    </div>

    <!-- 5 hindrances + 7 factors -->
    <div class="grid lg:grid-cols-2 gap-6 mt-8">
      <div class="card-paper p-6">
        <p class="chapter-label" style="color: var(--red)">NĪVARAṆA</p>
        <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('នីវរណៈ ៥', 'Five Hindrances') }}</h3>
        <p class="text-sm mt-2" :style="{ color: 'var(--ink-muted)' }">{{ t('ទាំងនេះជាសត្រូវសំខាន់នៃសមាធិ — ដឹងថាវាម្ដងម្កាល ហើយមានមធ្យោបាយដោះស្រាយ ទើបចេះទប់វា។', 'These are the chief enemies of meditation — knowing them by name and knowing their antidote helps you hold them at bay.') }}</p>
        <ul class="tick-list mt-3">
          <li v-for="h in hindrances" :key="h.en">
            <strong :style="{ color: 'var(--ink)' }">{{ t(h.km, h.en) }}</strong>
            <span class="text-xs" :style="{ color: 'var(--ink-muted)' }"> — {{ h.pl }} · {{ t(h.whatK, h.whatE) }}</span>
            <br>
            <span class="text-[11px]" :style="{ color: 'var(--sage)' }">→ {{ t(h.fixK, h.fixE) }}</span>
          </li>
        </ul>
      </div>
      <div class="card-paper p-6">
        <p class="chapter-label" style="color: var(--sage)">SAMBOJJHAṄGA</p>
        <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ពោជ្ឈង្គ ៧', 'Seven Factors of Awakening') }}</h3>
        <p class="text-sm mt-2" :style="{ color: 'var(--ink-muted)' }">{{ t('នេះជាគុណធម៌ ៧ ដែលព្រះពុទ្ធទ្រង់លើកសរសើរថា ជាក្រុមគ្រឿងនាំទៅរកការភ្ញាក់ដឹង — ចិញ្ចឹមវាដោយប្រតិបត្តិ។', 'These are the seven qualities the Buddha praised as the factors that lead to awakening — feed them with practice.') }}</p>
        <ul class="tick-list mt-3">
          <li v-for="f in factors" :key="f.en">
            <strong :style="{ color: 'var(--ink)' }">{{ t(f.km, f.en) }}</strong>
            <span class="text-xs" :style="{ color: 'var(--ink-muted)' }"> — {{ f.pl }} · {{ t(f.kmBody, f.enBody) }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- practical steps -->
    <div id="patipada" class="card-paper p-6 md:p-8 mt-8 scroll-mt-24">
      <p class="chapter-label">PAṬIPADĀ</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('របៀបចាប់ផ្តើម ដោយរាប់ដង្ហើម', 'How to Begin: Counting the Breath') }}</h3>
      <p class="text-sm mt-2" :style="{ color: 'var(--ink-muted)' }">{{ t('វិធីសាមញ្ញបំផុតសម្រាប់អ្នកចាប់ផ្តើម — ធ្វើតាមលំដាប់ ៥ ជំហានខាងក្រោម។', 'The simplest method for a beginner — follow the five steps below.') }}</p>
      <ol class="tick-list mt-4">
        <li v-for="(s, i) in steps" :key="s.en">
          <span class="font-bold" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}.</span>
          <span class="text-sm" :style="{ color: 'var(--ink-soft)' }"> {{ t(s.km, s.en) }}</span>
        </li>
      </ol>
      <div class="verse-box p-3 mt-5">
        <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t('ចិត្តំ ទន្តំ សុខាវហំ — ចិត្តដែលបានហ្វឹកហាត់ល្អ ជាមូល នាំសុខមកឲ្យមនុស្ស។', 'A mind well tamed brings happiness to a human being.') }}</p>
        <p class="text-[10px] tracking-widest uppercase mt-1" :style="{ color: 'var(--ink-faint)' }">Dhammapada 35</p>
      </div>
    </div>

    <!-- mistakes -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label" style="color: var(--red)">OBSTACLES IN PRACTICE — 4</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('កំហុសញឹកញាប់របស់អ្នកចាប់ផ្តើម', 'Common Mistakes of Beginners') }}</h3>
      <ul class="tick-list mt-4">
        <li v-for="m in mistakes" :key="m.en"><span class="font-display" :style="{ color: 'var(--ink)' }">{{ t(m.km, m.en) }}</span></li>
      </ul>
    </div>

    <!-- benefits -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label" style="color: var(--sage)">FIRST FRUITS</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('សញ្ញានៃការរីកចម្រើន', 'Signs of Progress') }}</h3>
      <p class="text-sm mt-2" :style="{ color: 'var(--ink-muted)' }">{{ t('ហាត់ទៀងទាត់ ២-៤ សប្តាហ៍ អ្នកអាចសម្គាល់ឃើញសញ្ញាតូចៗទាំងនេះ។', 'With two to four weeks of steady practice, you may notice these small signs.') }}</p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
        <div v-for="(b, i) in benefits" :key="b.en" class="p-4 rounded-sm text-center" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
          <p class="text-[11px] mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(b.km, b.en) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  return String(n).split('').map(d => khDigits[Number(d)]).join('')
}

const samatha = [
  { km: 'កម្មដ្ឋាន (ទីតាំងសម្រាប់តម្កល់ចិត្ត) ៤០ — អារម្មណ៍ដែលគួរតម្កល់ចិត្ត មាន ៤០ យ៉ាង សម្រាប់មនុស្សផ្សេងៗគ្នា', en: '40 subjects — the forty meditation objects suited to different temperaments', pl: 'kammaṭṭhāna' },
  { km: 'អានាបានៈ — ដង្ហើមចូល-ចេញ ជាអារម្មណ៍ដើម ងាយស្រួលបំផុត និងព្រះពុទ្ធទ្រង់ផ្តល់អនុសាសន៍', en: 'Ānāpāna — the in-and-out breath, the easiest object and the one the Buddha himself recommended', pl: 'ānāpāna' },
  { km: 'ឈាន ៤ — សេចក្តីស្ងប់ជ្រៅឡើងៗ ៤ ដំណាក់', en: 'The four jhānas — four deepening levels of stillness', pl: 'jhāna' },
]

const vipassana = [
  { km: 'ត្រៃលក្ខណ៍ (លក្ខណៈបីយ៉ាង) — ឃើញអារម្មណ៍នីមួយៗ ជាអនិច្ចំ (មិនទៀង) ទុក្ខំ (ជាទុក្ខ) អនត្តា (គ្មានខ្លួន)', en: 'Three marks — seeing each object as impermanent, unsatisfactory, not-self', pl: 'tilakkhaṇa' },
  { km: 'កើត-រលត់ — ដឹងថាអ្វីដែលកើត រមែងរលត់ រាល់ខណៈ', en: 'Arising & vanishing — knowing that whatever arises must cease, moment by moment', pl: 'udayabbaya' },
  { km: 'នឿយណាយ (ខ្ពើមឆ្អេះ) — ចិត្តផុតពីការតោងតាមតណ្ហា (សេចក្តីប្រាថ្នា) ដេញតាមអារម្មណ៍តិចឡើងៗ', en: 'Disenchantment — the heart lets go of craving and chases objects less and less', pl: 'nibbidā' },
]

const jhanaFactors = [
  { pl: 'vitakka', km: 'វិតក្កៈ — គិតដល់អារម្មណ៍', en: 'applied thought' },
  { pl: 'vicāra', km: 'វិចារៈ — រក្សាអារម្មណ៍', en: 'sustained thought' },
  { pl: 'pīti', km: 'បីតិ — រីករាយផូរផង់ក្នុងចិត្ត', en: 'rapture' },
  { pl: 'sukha', km: 'សុខៈ — សេចក្តីសុខស្រួល', en: 'happiness' },
  { pl: 'ekaggatā', km: 'ឯកគ្គតា — ចិត្តតម្កល់មួយ', en: 'one-pointedness' },
]

const jhanas = [
  { km: 'ឈានទី ១', en: '1st Jhāna', kmBody: 'ចិត្តស្ងប់ ប៉ុន្តែនៅមាន វិតក្កៈ វិចារៈ (គិត និងរក្សាអារម្មណ៍) បីតិ (រីករាយ) សុខៈ (សុខ) — ដូចទឹកស្ងប់ តែនៅរអាក់បន្តិច។', enBody: 'The mind is still, yet applied & sustained thought, rapture and happiness remain — like water that has settled but still ripples.' },
  { km: 'ឈានទី ២', en: '2nd Jhāna', kmBody: 'រលត់ វិតក្កៈ វិចារៈ — នៅសល់ បីតិ សុខៈ — ដូចទឹកឥតរលក។', enBody: 'Applied and sustained thought drop away; rapture and happiness remain — water with no waves.' },
  { km: 'ឈានទី ៣', en: '3rd Jhāna', kmBody: 'រលត់បីតិ — នៅតែ សុខៈ ដ៏ជ្រៅ — ដូចទឹកដែលស្ងប់ស្រាប់។', enBody: 'Rapture fades; a deep, refined happiness remains — water at perfect rest.' },
  { km: 'ឈានទី ៤', en: '4th Jhāna', kmBody: 'រលត់សុខៈផង — នៅតែ ឧបេក្ខា ឯកគ្គតា ស្ងប់បំផុត — ដូចបឹងឥតរលក ឥតខ្យល់បក់។', enBody: 'Even happiness is let go; equanimity and one-pointedness alone remain — like a windless, rippleless lake.' },
]

const arupaJhanas = [
  { km: 'អាកាសានញ្ចាយតនៈ', en: 'Boundless Space', pl: 'Ākāsānañcāyatana', kmBody: 'កំណត់យក «លំហអាកាសគ្មានទីបញ្ចប់» ជាអារម្មណ៍ លះបង់រូបរាងកាយទាំងស្រុង។', enBody: 'Focuses on "infinite space", transcending all perceptions of material form.' },
  { km: 'វិញ្ញាណញ្ចាយតនៈ', en: 'Boundless Consciousness', pl: 'Viññāṇañcāyatana', kmBody: 'កំណត់យក «វិញ្ញាណដឹងគ្មានទីបញ្ចប់» ដែលដឹងលំហអាកាសនោះជាអារម្មណ៍។', enBody: 'Focuses on "infinite consciousness" that experiences boundless space.' },
  { km: 'អាកិញ្ចញ្ញាយតនៈ', en: 'Nothingness', pl: 'Ākiñcaññāyatana', kmBody: 'កំណត់យក «ភាពទទេស្អាត គ្មានអ្វីសូម្បីតែបន្តិច» (នត្ថិ កិញ្ចិ) ជាអារម្មណ៍។', enBody: 'Focuses on "there is nothing whatsoever" — the utter absence of awareness-objects.' },
  { km: 'នេវសញ្ញានាសញ្ញាយតនៈ', en: 'Neither Perception Nor Non-Perception', pl: 'Nevasaññānāsaññāyatana', kmBody: 'ស្ថានភាពចិត្តល្អិតបំផុត ស្ទើរតែគ្មានការចងចាំ មិនមែនមានសញ្ញា មិនមែនគ្មានសញ្ញា (កំពូលឈានលោកិយ)។', enBody: 'The subtlest mental state — perception is so refined it can neither be said to exist nor not exist.' },
]

const jhanaRebirth = [
  {
    jhanaK: 'បឋមជ្ឈាន (ឈានទី ១)', jhanaE: '1st Jhāna',
    realmK: 'ព្រហ្មជាន់ទី ១ ដល់ ទី ៣ (ព្រហ្មបរិសជ្ជា, ព្រហ្មបុរោហិតា, មហាព្រហ្មា)', realmE: 'Brahma Parisajjā, Purohitā, Mahābrahmā (Tiers 1–3)',
    featureK: 'មានរូបរាងពន្លឺរស្មី រស់នៅបានរាប់កប្ប (១/៣ កប្ប ដល់ ១ មហាកប្ប)', featureE: 'Luminous bodies, lifespan spans up to 1 Asankhyeyya / Mahākappa'
  },
  {
    jhanaK: 'ទុតិយជ្ឈាន (ឈានទី ២)', jhanaE: '2nd Jhāna',
    realmK: 'ព្រហ្មជាន់ទី ៤ ដល់ ទី ៦ (បរិត្តាភា, អប្បមាណាភា, អាភស្សរា)', realmE: 'Parittābhā, Appamāṇābhā, Ābhassarā (Tiers 4–6)',
    featureK: 'មានពន្លឺរស្មីភ្លឺរុងរឿងចែងចាំងខ្លាំង រស់នៅពី ២ ដល់ ៨ មហាកប្ប', featureE: 'Radiant brilliance, lifespan of 2 to 8 Mahākappas'
  },
  {
    jhanaK: 'តតិយជ្ឈាន (ឈានទី ៣)', jhanaE: '3rd Jhāna',
    realmK: 'ព្រហ្មជាន់ទី ៧ ដល់ ទី ៩ (បរិត្តសុភា, អប្បមាណសុភា, សុភកិណ្ហកា)', realmE: 'Parittasubhā, Appamāណasubhā, Subhakiṇṇakā (Tiers 7–9)',
    featureK: 'សោយសេចក្តីសុខស្ងប់ដ៏ជ្រាលជ្រៅបំផុតក្នុងលោកិយ រស់នៅពី ១៦ ដល់ ៦៤ មហាកប្ប', featureE: 'Sublime peaceful bliss, lifespan of 16 to 64 Mahākappas'
  },
  {
    jhanaK: 'ចតុត្ថជ្ឈាន (ឈានទី ៤)', jhanaE: '4th Jhāna',
    realmK: 'ព្រហ្មជាន់ទី ១០ ដល់ ទី ១១ (វេហប្ផលា, អសញ្ញសត្វ) + សុទ្ធាវាស ៥ (សម្រាប់តែអនាគាមី)', realmE: 'Vehapphalā, Asaññasatta (Tiers 10–11) & Suddhāvāsa 5 (Anāgāmī only)',
    featureK: 'ចិត្តស្ងប់ក្នុងឧបេក្ខា មានអាយុកាល ៥០០ មហាកប្ប (អសញ្ញសត្វមានតែរូប គ្មានចិត្ត)', featureE: 'Immaculate equanimity; 500 Mahākappas (Asaññasatta has form without mind)'
  },
  {
    jhanaK: 'អរូបឈានទាំង ៤', jhanaE: '4 Formless Jhānas',
    realmK: 'អរូបព្រហ្ម ៤ ជាន់ (អាកាសា, វិញ្ញាណា, អាកិញ្ចញ្ញា, នេវសញ្ញា)', realmE: '4 Immaterial Brahma Realms (Ākāsā... to Nevasaññā)',
    featureK: 'គ្មានរូបកាយទាល់តែសោះ មានតែចិត្ត រស់នៅពី ២០,០០០ ដល់ ៨៤,០០០ មហាកប្ប', featureE: 'Utterly formless mind-only realms, lifespan from 20,000 to 84,000 Mahākappas'
  },
]

const nimittas = [
  {
    stepK: '១. បរិកម្មនិមិត្ត', stepE: '1. Parikamma-nimitta (Preparatory Sign)',
    descK: 'ការផ្ចង់ដឹងអារម្មណ៍ធម្មជាតិ ដូចជាខ្យល់ដង្ហើមប៉ះនឹងចុងច្រមុះ ឬបបូរមាត់ខាងលើ។ ចិត្តចាប់ផ្តើមប្រមូលផ្តុំ មិនរាយមាយ។',
    descE: 'Noting the natural physical touch of the breath at the nose-tip or upper lip. Mind gathers stillness.'
  },
  {
    stepK: '២. ឧគ្គហនិមិត្ត', stepE: '2. Uggaha-nimitta (Acquired / Mental Sign)',
    descK: 'ពេលចិត្តស្ងប់ជ្រៅ ស្រាប់តែមានរូបភាព ឬពន្លឺផុសឡើងក្នុងចិត្ត បើកភ្នែកក្តី បិទភ្នែកក្តី ក៏ឃើញច្បាស់ដូចគ្នា។ នីវរណៈចាប់ផ្តើមចុះខ្សោយ។',
    descE: 'As concentration deepens, a mental duplicate or inner light appears, seen equally with eyes open or closed.'
  },
  {
    stepK: '៣. បដិភាគនិមិត្ត', stepE: '3. Paṭibhāga-nimitta (Counterpart Sign)',
    descK: 'ពន្លឺនោះប្រែជាថ្លាឈ្វេង ភ្លឺដូចកែវមណី ឬព្រះចន្ទពេញវង់ គ្មានទម្ងន់។ នីវរណធម៌ទាំង ៥ ត្រូវបានកម្ចាត់ចេញអស់ពីចិត្ត។',
    descE: 'The light transforms into an immaculate, luminous, translucent sphere like the full moon. The 5 hindrances are completely quelled.'
  },
  {
    stepK: '៤. អប្បនាសមាធិ (ឈាន)', stepE: '4. Appanā-samādhi (Full Absorption / Jhāna)',
    descK: 'ចិត្តទម្លាក់ខ្លួនចូលទៅក្នុងបដិភាគនិមិត្តនោះទាំងស្រុង កាត់ផ្តាច់ការដឹងតាមទ្វារ ៥ ខាងក្រៅ លិចចុះក្នុងសេចក្តីស្ងប់សុទ្ធសាធ ឈានក៏កើតឡើងភ្លាម។',
    descE: 'The mind drops wholly into the counterpart sign, transcending 5-door sense awareness into unified absorption — Jhāna arises.'
  },
]

const sati = [
  { km: 'កាយានុបស្សនា', en: 'Contemplating Body', kmBody: 'ដង្ហើម ឥរិយាបថ (អង្គុយ ឈរ ដើរ ដេក) និងសមាសភាគកាយ — ដូចអ្នកក្រៅសម្លឹងមើល។', enBody: 'breath, postures (sitting, standing, walking, lying down) and body parts — observed as from outside.' },
  { km: 'វេទនានុបស្សនា', en: 'Contemplating Feeling', kmBody: 'សម្គាល់វេទនា សុខ ទុក្ខ ឬ កណ្តាល — ដឹង តែមិនចាប់ថា «របស់អញ»។', enBody: 'noting feelings as pleasant, painful or neutral — known, but not owned as mine.' },
  { km: 'ចិត្តានុបស្សនា', en: 'Contemplating Mind', kmBody: 'មើលសភាពចិត្ត — មានលោភ ឬ គ្មាន; រាយមាយ ឬ ស្ងប់ — ដឹងដោយមិនវិនិច្ឆ័យ។', enBody: 'watching states of mind — greedy or free, scattered or steady — known without judging.' },
  { km: 'ធម្មានុបស្សនា', en: 'Contemplating Dhammas', kmBody: 'ពិនិត្យនីវរណៈ ៥ (អវយវៈបិទបាំងចិត្ត), ពោជ្ឈង្គ ៧ (ធម៌ជាគ្រឿងត្រាស់ដឹង), ខន្ធ ៥ (ក្រុមរបស់ដែលតាក់តែងរូប-ចិត្ត) — ឃើញកើត-រលត់ មិនប្រកាន់។', enBody: 'investigating the five hindrances, seven factors, five aggregates — seen as they pass without clinging.' },
]

const hindrances = [
  { km: 'កាមច្ឆន្ទៈ', en: 'Sense Desire', pl: 'kāmacchanda', whatK: 'ចិត្តលោតទៅស្រឡាញ់រូប សំឡេង ក្លិន រស សម្ផស្ស — ពិបាកនឹងស្ងប់', whatE: 'the mind leaps after sights, sounds, smells, tastes, touches — and cannot settle', fixK: 'ដោះស្រាយ៖ ពិចារណាអសុភ (ភាពស្អុយរលួយនៃកាយ) ឬ អនិច្ចំ', fixE: 'Antidote: contemplate the unattractive nature of the body, or impermanence' },
  { km: 'ព្យាបាទៈ', en: 'Ill-will', pl: 'byāpāda', whatK: 'ចិត្តខឹង ស្អប់ ចង់បៀតបៀនអ្នកដទៃ', whatE: 'anger, hatred, the wish to harm others', fixK: 'ដោះស្រាយ៖ បណ្តុះមេត្តា ផ្សាយសេចក្តីស្រឡាញ់ដល់សត្វទាំងឡាយ', fixE: 'Antidote: cultivate loving-kindness and radiate goodwill to all' },
  { km: 'ថីនមិទ្ធៈ', en: 'Sloth & Torpor', pl: 'thīnamiddha', whatK: 'ចិត្តងងុយ ស្រពាប់ ដូចទម្លាក់ខ្លួន', whatE: 'dullness and drowsiness, the mind drooping', fixK: 'ដោះស្រាយ៖ បណ្តុះសញ្ញាពន្លឺ (អាលោកសញ្ញា) កៀរស្មារតី ហាត់ពេលភ្ញាក់ព្រើស', fixE: 'Antidote: rouse the perception of light, gather energy, practise when alert' },
  { km: 'ឧទ្ធច្ចកុក្កុច្ចៈ', en: 'Restlessness & Remorse', pl: 'uddhaccakukkucca', whatK: 'ចិត្តរាយមាយ គិតវៀនវង់ ស្តាយក្រោយ', whatE: 'a scattered, worried mind full of regrets', fixK: 'ដោះស្រាយ៖ តម្កល់ចិត្តនឹងដង្ហើម ស្ងប់ កុំដេញតាមគំនិត', fixE: 'Antidote: settle on the breath, stay calm, do not chase thoughts' },
  { km: 'វិចិកិច្ឆា', en: 'Sceptical Doubt', pl: 'vicikicchā', whatK: 'សង្ស័យ ស្ទាក់ស្ទើរ មិនជឿផ្លូវ មិនទុកចិត្តដំណើរ', whatE: 'wavering and uncertainty about the path and about progress', fixK: 'ដោះស្រាយ៖ សួរអ្នកចេះដឹង រៀនសេចក្តីពន្យល់ ពិចារណាដោយបញ្ញា', fixE: 'Antidote: ask the experienced, study the explanations, reflect with wisdom' },
]

const factors = [
  { km: 'សតិ', en: 'Mindfulness', pl: 'sati', kmBody: 'ចាំអារម្មណ៍ កុំភ្លេច', enBody: 'remembering the object' },
  { km: 'ធម្មវិចយៈ', en: 'Investigation', pl: 'dhammavicaya', kmBody: 'ពិនិត្យធម៌ដោយបញ្ញា', enBody: 'examining the dhammas wisely' },
  { km: 'វិរិយៈ', en: 'Energy', pl: 'viriya', kmBody: 'ព្យាយាមឥតបន្ថយ', enBody: 'sustained effort' },
  { km: 'បីតិ', en: 'Rapture', pl: 'pīti', kmBody: 'ភាពរីករាយស្រស់ស្រាយ ពេញបំពេញក្នុងចិត្ត និងកាយ', enBody: 'joy that fills and refreshes' },
  { km: 'បស្សទ្ធិ', en: 'Tranquility', pl: 'passaddhi', kmBody: 'កាយ ចិត្ត ស្ងប់ស្រាល', enBody: 'calm ease of body and mind' },
  { km: 'សមាធិ', en: 'Concentration', pl: 'samādhi', kmBody: 'ចិត្តតម្កល់មួយម៉ាត់', enBody: 'one-pointed, unified focus' },
  { km: 'ឧបេក្ខា', en: 'Equanimity', pl: 'upekkhā', kmBody: 'ចិត្តរាបស្មើ មិនញាប់ញ័រ', enBody: 'a balanced, unmoved heart' },
]

const steps = [
  { km: 'អង្គុយឲ្យស្រួល ខ្នងត្រង់ បន្ធូរកាយស្រាលៗ — បិទភ្នែក ឬ មើលចុះម្តងម្កាលក៏បាន។', en: 'Sit comfortably, back straight, body relaxed — eyes may close, or open now and then.' },
  { km: 'តម្កល់សតិលើដង្ហើម៖ មានអារម្មណ៍ខ្យល់ត្រជាក់ចូលត្រង់ច្រមុះ និងក្តៅចេញមកវិញ។', en: 'Rest attention on the breath: feel the cool air entering the nostrils and the warm air leaving.' },
  { km: 'រាប់ដង្ហើមដើម្បីកំណត់ចិត្ត៖ ចូលរាប់ ១ ចេញរាប់ ២ … រហូតដល់ ១០ ហើយចាប់ផ្តើមពី ១ ម្តងទៀត។ វង្វេងភ្លេច រាប់ពីថ្មី។', en: 'Count to steady the mind: in = 1, out = 2, up to 10, then begin again. If you lose count, simply start over.' },
  { km: 'ពេលចិត្តរវើយ កុំខឹងនឹងខ្លួនឯង — ឃើញហើយដឹង ស្នាមញញឹមបន្តិច ទើបត្រឡប់មកដង្ហើមវិញ។ រាល់ពេលត្រឡប់មក គឺជាការហាត់។', en: 'When the mind wanders, do not scold yourself — notice, smile a little, and return to the breath. Every return is the practice.' },
  { km: 'ចប់ដោយផ្សាយមេត្តា ២-៣ នាទី ដល់ខ្លួនឯង និងសត្វទាំងឡាយ ទើបបើកភ្នែកស្រាលៗ — ហាត់ ៥-១០ នាទី រាល់ថ្ងៃ ស្ថិរភាពសំខាន់ជាងចំនួនច្រើន។', en: 'Finish with two or three minutes of loving-kindness to yourself and to all beings, then open the eyes gently — practise five to ten minutes daily; consistency matters more than length.' },
]

const mistakes = [
  { km: 'គិតថា ហាត់ល្អ ត្រូវគ្មានគំនិតទាល់តែសោះ — ពិតគឺហ្វឹកហាត់ឲ្យដឹងគំនិត មិនមែនលុបបំបាត់គំនិត។', en: 'Thinking that a good sit means having no thoughts at all — really you train to notice thoughts, not erase them.' },
  { km: 'រំពឹងលទ្ធផលភ្លាមៗ — ចិត្តប្រែបន្តិចម្តងៗ ដូចដើមឈើធំ មើលមិនឃើញក្នុងមួយថ្ងៃ។', en: 'Expecting instant results — the mind changes slowly, like a great tree you cannot watch grow in a day.' },
  { km: 'ជេរបន្ទោសខ្លួនឯង ពេលចិត្តរវើយ — ចិត្តរវើយជារឿងធម្មតា រាល់ការត្រឡប់មកដង្ហើម គឺជាជ័យជំនះតូចម្តងៗ។', en: 'Scolding yourself when the mind wanders — wandering is normal; each return to the breath is a small victory.' },
  { km: 'ឈប់ហាត់ ព្រោះអផ្សុក — អផ្សុកជាដំណាក់មួយនៃប្រតិបត្តិ កន្លងវាបាន ទើបរីកចម្រើនតទៅ។', en: 'Quitting because you feel bored — boredom is a stage of practice; pass through it and you grow.' },
]

const benefits = [
  { km: 'ចិត្តស្ងប់វិញបានលឿន ពេលខឹង ឬតានតឹង', en: 'The mind settles faster in anger or stress' },
  { km: 'ដឹងខ្លួនច្បាស់ ពីគំនិត ពាក្យសម្តី ទង្វើ', en: 'Clearer awareness of thoughts, words and deeds' },
  { km: 'គេងលក់ស្រួល មុខភ្លឺថ្លា', en: 'Better sleep and a brighter face' },
  { km: 'បញ្ហាធំៗ ឃើញតូចទៅវិញ', en: 'Big problems seem smaller' },
]
</script>