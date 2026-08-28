<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('គាថា ០៩ — បណ្តុះសតិដោយគាថា', 'GATHA 09 — VERSE MEMORY') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('គាថាព្រះធម៌', 'Famous Verses (Gāthā)') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('គាថា គឺជាព្រះវាចា ដែលព្រះពុទ្ធ សម្តែងជាកាព្យបាលី មានចំនួនព្យាង្គត្រឹមត្រូវ ងាយនឹងចងចាំ។ ព្រះអង្គ តែងបញ្ចប់សេចក្តីធម៌ ដោយគាថាពិរោះៗ ឲ្យអ្នកស្តាប់ នាំយកទៅរំពឹងនៅផ្ទះ ឲ្យចិត្តស្ងប់។ ទំព័រនេះ ប្រមូលគាថាល្បីៗ ដែលគ្រហស្ថគួរចងចាំ ដោយបកស្រាយពាក្យមួយៗ ជាភាសាខ្មែរ។', 'A gāthā is a verse of the Buddha words in Pali, shaped with fixed syllables so it is easy to memorise. He often closed his teaching with a lovely verse so listeners could carry the Dhamma home and quiet the mind. This page gathers the most loved verses, unpacking each word in Khmer.') }}
    </p>

    <!-- how to use the verses -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">HOW TO REMEMBER</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('របៀបប្រើគាថាឲ្យបានផល', 'How to Make a Verse Stick') }}</h3>
      <ul class="tick-list mt-4">
        <li v-for="u in tips" :key="u.en"><span class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t(u.km, u.en) }}</span></li>
      </ul>
    </div>

    <!-- the verses -->
    <div class="mt-8">
      <p class="chapter-label">{{ t('គាថាជម្រើស ៨ — អាន រំពឹង បដិបត្តិ', 'EIGHT LOVED VERSES — READ, PONDER, PRACTISE') }}</p>
    </div>

    <div class="mt-4 space-y-4">
      <article v-for="(g, i) in gathas" :key="g.en" :id="'gatha-' + i" class="card-paper p-6 md:p-8 scroll-mt-24">
        <div class="flex items-start justify-between gap-3 flex-wrap">
          <div class="min-w-0">
            <p class="chapter-label">{{ g.src }}</p>
            <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t(g.km, g.en) }}</h3>
            <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(g.noteK, g.noteE) }}</p>
          </div>
          <span class="sutra-num mt-1" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
        </div>

        <div class="verse-box p-4 md:p-5 mt-4">
          <p v-for="l in g.lines" :key="l" class="text-center text-lg md:text-xl leading-loose">{{ l }}</p>
          <p class="mt-3 text-center"><span class="paali">{{ g.roman }}</span></p>
        </div>

        <div class="grid md:grid-cols-2 gap-2 mt-4">
          <div v-for="w in g.gloss" :key="w.w" class="flex items-baseline gap-2 px-3 py-2 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
            <span class="paali shrink-0">{{ w.w }}</span>
            <span class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t(w.km, w.en) }}</span>
          </div>
        </div>

        <p class="mt-4 leading-loose text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t(g.meanK, g.meanE) }}</p>

        <div class="mt-4 p-3 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--border-strong)' }">
          <p class="text-[10px] font-bold tracking-widest uppercase" :style="{ color: 'var(--accent)' }">{{ t('អនុវត្តក្នុងជីវិត', 'APPLY IT TODAY') }}</p>
          <p class="text-sm mt-1" :style="{ color: 'var(--ink-soft)' }">{{ t(g.applyK, g.applyE) }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
import { useRoute } from 'vue-router'
const { t } = useLanguage()
const route = useRoute()
const isTarget = (prefix, idx) => route.hash === '#' + prefix + idx

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  return String(n).split('').map(d => khDigits[Number(d)]).join('')
}

const tips = [
  { km: 'ចាំគាថាឲ្យស្ទាត់ អានឲ្យបានសំឡេងត្រឹមត្រូវ។', en: 'Memorise the verse until it flows correctly from the tongue.' },
  { km: 'ដឹងន័យពាក្យមួយៗ មិនមែនអានតែសំឡេងទេ។', en: 'Know the meaning of each word, not just the sound.' },
  { km: 'ពេលចិត្តរំជួល សូត្រគាថាក្នុងចិត្ត ឲ្យសតិត្រលប់មកវិញ។', en: 'When the mind is stirred, recite a verse within to bring mindfulness back.' },
  { km: 'អនុវត្តតាមសេចក្តីក្នុងជីវិត ទើបគាថាផ្តល់ផលពិត។', en: 'Live the meaning — that is when a verse truly bears fruit.' },
]

const gathas = [
  {
    src: 'DN 16 · MAHĀPARINIBBĀNA',
    km: 'គាថាអនិច្ចា — សេចក្តីមិនទៀង', en: 'The Verse of Impermanence (Anicca)',
    noteK: 'គាថានេះ ស្តែងឡើង ក្នុងឱកាសព្រះពុទ្ធបរិនិព្វាន នៅព្រៃសាលវ័ន ក្រុងកុសិនារា — រំពឹងឃើញថា អ្វីៗកើតហើយត្រូវរលត់ទៅ។', en: 'Sung as the Buddha passed away beneath the sal trees at Kusinārā — awakening to the truth that all that arises must cease.',
    lines: [
      'អនិច្ចា វត សង្ខារា ឧប្បាទវយធម្មិនោ',
      'ឧប្បាជ្ជិត្វា និរុជ្ឈន្តិ តេសំ វូបសមោ សុខោ',
    ],
    roman: 'aniccā vata saṅkhārā, uppādavayadhammino · uppajjitvā nirujjhanti, tesaṃ vūpasamo sukho',
    gloss: [
      { w: 'អនិច្ចា', km: 'មិនទៀង', en: 'impermanent' },
      { w: 'វត', km: 'ក្រែងហើយ (មែនពិត)', en: 'indeed' },
      { w: 'សង្ខារា', km: 'សង្ខារទាំងឡាយ — អ្វីៗដែលសន្សំកើត', en: 'conditioned things' },
      { w: 'ឧប្បាទវយធម្មិនោ', km: 'មានធម្មតា គឺកើតហើយរលត់', en: 'arising then passing away' },
      { w: 'ឧប្បាជ្ជិត្វា', km: 'កើតឡើងហើយ', en: 'having arisen' },
      { w: 'និរុជ្ឈន្តិ', km: 'ក៏រលត់ទៅវិញ', en: 'they cease' },
      { w: 'វូបសមោ', km: 'ការរំងាប់', en: 'the stilling' },
      { w: 'សុខោ', km: 'ទើបជាសេចក្តីសុខ', en: 'is happiness' },
    ],
    meanK: 'អ្វីៗ ដែលកើតអំពីសេចក្តីសន្សំបង្កើត (ដូចជាកាយ អារម្មណ៍ គំនិត) សុទ្ធតែមិនទៀង មានធម្មតាកើតហើយរលត់។ កើតឡើងហើយ ក៏រលត់ទៅវិញ រាល់ខណៈ។ ការរំងាប់សង្ខារទាំងនោះបាន គឺព្រះនិព្វាន ទើបជាសុខពិតប្រាកដ។',
    meanE: 'Everything produced by conditions — the body, feelings, thoughts — is impermanent, by nature arising and ceasing. Having arisen, it passes away each moment. The stilling of those conditions (Nibbāna) alone is true happiness.',
    applyK: 'ពេលជួបការប្រែប្រួល បាត់បង់ — រំឮកគាថានេះ ថាអ្វីក៏រលត់ទៅ កុំប្រកាន់ជ្រុល។',
    applyE: 'When things change or are lost, recall this verse — all is passing, so hold lightly.',
  },
  {
    src: 'DHP 1-2',
    km: 'មនោបុព្វង្គមា — ចិត្តឈានមុខ', en: 'Mind Leads All States (Manopubbaṅgamā)',
    noteK: 'ជាគាថាដំបូងបង្អស់នៃធម្មបទ រៀបរាប់ថា ចិត្តល្អ ចិត្តអាក្រក់ កំណត់ខ្លឹមជីវិតរបស់មនុស្ស។', en: 'The very first verses of the Dhammapada — the mind, good or bad, sets the course of life.',
    lines: [
      'មនោបុព្វង្គមា ធម្មា មនោសេដ្ឋា មនោមយា',
      'មនសា ចេ បទុដ្ឋេន ភាសតិ វា ករតិ វា',
      'តតោ នំ ទុក្ខមន្វេតិ ចក្កំ វ វហតោ បទំ',
    ],
    roman: 'manopubbaṅgamā dhammā, manoseṭṭhā manomayā · manasā ce paduṭṭhena, bhāsati vā karoti vā · tato naṃ dukkhamanveti, cakkaṃ va vahato padaṃ',
    gloss: [
      { w: 'មនោ', km: 'ចិត្ត', en: 'mind' },
      { w: 'បុព្វង្គមា', km: 'ឈានមុខ ទៅមុនគេ', en: 'the forerunner' },
      { w: 'ធម្មា', km: 'ធម៌ទាំងឡាយ — អាការៈចិត្តសមាការ', en: 'all mental states' },
      { w: 'មនោសេដ្ឋា', km: 'មានចិត្តជាធំបំផុត', en: 'mind is chief' },
      { w: 'មនោមយា', km: 'សម្រេចមកពីចិត្ត', en: 'made of mind' },
      { w: 'បទុដ្ឋេន', km: 'ដោយចិត្តដែលប្រឡាក់', en: 'with a corrupt mind' },
      { w: 'ភាសតិ វា ករតិ វា', km: 'ពោលក្តី ធ្វើក្តី', en: 'whether speaking or acting' },
      { w: 'ទុក្ខមន្វេតិ', km: 'ទុក្ខក៏ដល់ព្រមជាប់តាម', en: 'suffering follows' },
      { w: 'ចក្កំ វ វហតោ បទំ', km: 'ដូចកង់ ជាប់នឹងជើងគោអូស', en: 'as the wheel follows the ox foot' },
    ],
    meanK: 'អាការៈចិត្ត និងអ្វីៗដែលសម្រេច សុទ្ធតែមានចិត្តឈានមុខមកមុន មានចិត្តជាធំ សម្រេចមកពីចិត្ត។ បុគ្គលណា និយាយ ឬ ធ្វើ ដោយចិត្តប្រឡាក់ហើយ ទុក្ខក៏ដល់ជាប់តាមខ្លួន ដូចកង់រទេះ ជាប់តាមជើងគោដែលអូស។ (ព្រះពុទ្ធទ្រង់សម្តែងគាថាគូទៀត អំពីចិត្តល្អ ដែលនាំសុខមកដល់ដូចគ្នា។)',
    meanE: 'Mind precedes all mental states; mind is their chief; they are all mind-made. If with a corrupt mind one speaks or acts, suffering follows like the wheel follows the ox foot. (Its twin verse tells how a pure mind brings happiness the same way.)',
    applyK: 'ព្រឹកឡើង តាំងចិត្តល្អ មុនធ្វើកិច្ចការ — ព្រោះចិត្តនេះហើយ ដែលបង្កើតវាសនា។',
    applyE: 'Set a wholesome mind first thing in the morning — this is what shapes your day.',
  },
  {
    src: 'DHP 21',
    km: 'អប្បមាទោ — សេចក្តីមិនប្រមាទ', en: 'Diligence, the Path to the Deathless',
    noteK: 'គាថាដែលព្រះពុទ្ធ ទុកជាមរកត ជំនួសព្រះអង្គ ពេលស្ទើរបាត់បង់ព្រះជន្ម។', en: 'The verse the Buddha pointed to in place of himself when his life was almost lost.',
    lines: [
      'អប្បមាទោ អមតំ បទំ បមាទោ មច្ចុនោ បទំ',
      'អប្បមត្តា ន មីយន្តិ យេ បមត្តា យថា មតា',
    ],
    roman: 'appamādo amataṃ padaṃ, pamādo maccuno padaṃ · appamattā na mīyanti, ye pamattā yathā matā',
    gloss: [
      { w: 'អប្បមាទោ', km: 'សេចក្តីមិនប្រមាទ — សតិដឹងខ្លួនគ្រប់ពេល', en: 'diligence, carefulness' },
      { w: 'អមតំ បទំ', km: 'ផ្លូវទៅរកអមតៈ គឺនិព្វាន', en: 'the path to the deathless' },
      { w: 'បមាទោ', km: 'ការប្រមាទ — លើសទុកការងារសិន', en: 'heedlessness' },
      { w: 'មច្ចុនោ បទំ', km: 'ផ្លូវរបស់សេចក្តីស្លាប់', en: 'the path of death' },
      { w: 'អប្បមត្តា ន មីយន្តិ', km: 'អ្នកមិនប្រមាទ ឈ្មោះថាមិនស្លាប់', en: 'the diligent do not perish' },
      { w: 'យេ បមត្តា យថា មតា', km: 'អ្នកប្រមាទ ដូចជាអ្នកស្លាប់ហើយ', en: 'the heedless are as if dead' },
    ],
    meanK: 'សេចក្តីមិនប្រមាទ ជាផ្លូវនាំទៅរកអមតៈ គឺព្រះនិព្វាន ទីឥតស្លាប់។ ការប្រមាទ ជាផ្លូវរបស់សេចក្តីស្លាប់។ អ្នកប្រុងប្រយ័ត្ន មិនប្រមាទ ឈ្មោះថា មិនស្លាប់។ អ្នកប្រមាទ លើសទុកការងារ ដូចជាមនុស្សស្លាប់បាត់បង់ជីវិតហើយ ព្រោះឥតធ្វើអ្វី ដែលមានប្រយោជន៍។',
    meanE: 'Carefulness is the path to the deathless; carelessness is the path to death. The diligent do not perish; the heedless are as though already dead.',
    applyK: 'ធ្វើអ្វីៗ ដោយការប្រុងប្រយ័ត្ន កុំលើសធ្វេសប្រហែស — នេះជាផ្លូវទៅកាន់អមតៈ។',
    applyE: 'Do everything with careful attention, never carelessly — this is the road to the deathless.',
  },
  {
    src: 'DHP 5',
    km: 'នហិ វេរេន — ពៀររលត់ដោយក្តីមេត្តា', en: 'Only Kindness Ends Hatred',
    noteK: 'គាថាសម្រាប់ពេលកំពុងក្តៅក្រហាយ ដល់អ្នកដែលធ្វើអាក្រក់ដាក់ខ្លួន។', en: 'The verse for the moment anger flares toward someone who has wronged you.',
    lines: [
      'ន ហិ វេរេន វេរានិ សម្មន្តីធ កុទាចនំ',
      'អវេរេន ច សម្មន្តិ ឯស ធម្មោ សនន្តនោ',
    ],
    roman: 'na hi verena verāni sammantīdha kudācanaṃ · averena ca sammanti, esa dhammo sanantano',
    gloss: [
      { w: 'វេរេន', km: 'ដោយសេចក្តីពៀរ', en: 'by hatred' },
      { w: 'វេរានិ', km: 'ពៀរទាំងឡាយ', en: 'enmities' },
      { w: 'សម្មន្តិ', km: 'រលត់បាន', en: 'are appeased' },
      { w: 'កុទាចនំ', km: 'ម្តងណាក៏ដោយ', en: 'ever, at any time' },
      { w: 'អវេរេន', km: 'ដោយការឥតពៀរ (ក្តីមេត្តា)', en: 'by non-hatred' },
      { w: 'ឯស ធម្មោ សនន្តនោ', km: 'សេចក្តីនេះ ជាធម៌បុរាណ', en: 'this is an eternal law' },
    ],
    meanK: 'ពៀរវេរាទាំងឡាយ ក្នុងលោកនេះ មិនដែលរលត់បានដោយពៀរទេ ម្តងណាក៏ដោយ។ តែរលត់បាន ដោយការឥតពៀរ គឺក្តីមេត្តា។ សេចក្តីនេះ ជាធម៌បុរាណ មិនចាស់ មិនខុសកាល។',
    meanE: 'Never in this world is hatred appeased by hatred — only by non-hatred is it appeased. This is an eternal law.',
    applyK: 'ពេលគេធ្វើអាក្រក់ដាក់ កុំសងសឹកវិញ — ញ៉ាំងចិត្តឲ្យត្រជាក់ ដោយមេត្តា ទើបរលត់។',
    applyE: 'When someone harms you, do not strike back — cool the heart with mettā; that is how it ends.',
  },
  {
    src: 'DHP 160',
    km: 'អត្តា ហិ អត្តនោ នាថោ — ខ្លួនឯងទើបជាទីពឹង', en: 'Self Is One Own Refuge',
    noteK: 'ពន្យល់ថា ការឈ្នះ ឬ ចាញ់ក្នុងជីវិត អាស្រ័យលើការហ្វឹកហាត់ខ្លួនឯង មិនមែនប្រគល់ឲ្យតែគេ។', en: 'Success or failure in life depends on training yourself, not on handing over to others.',
    lines: [
      'អត្តា ហិ អត្តនោ នាថោ កោ ហិ នាថោ បរោ សិយា',
      'អត្តនា ហិ សុទន្តេន នាថំ លភតិ ទុល្លភំ',
    ],
    roman: 'attā hi attano nātho, ko hi nātho paro siyā · attanā hi sudantena, nāthaṃ labhati dullabhaṃ',
    gloss: [
      { w: 'អត្តា', km: 'ខ្លួនឯង', en: 'self' },
      { w: 'អត្តនោ នាថោ', km: 'ជាទីពឹងរបស់ខ្លួន', en: 'is the master of self' },
      { w: 'បរោ', km: 'អ្នកដទៃ', en: 'another' },
      { w: 'សុទន្តេន', km: 'ព្រោះបុគ្គល ទូន្មានខ្លួនល្អហើយ', en: 'with a self well tamed' },
      { w: 'នាថំ លភតិ ទុល្លភំ', km: 'រមែងបានទីពឹង ដែលបានដោយកម្រ', en: 'one gains a refuge rarely found' },
    ],
    meanK: 'ខ្លួនឯង ទើបជាទីពឹងរបស់ខ្លួន — នរណាទៀត អាចជាទីពឹងបាន? ព្រោះបុគ្គលណា ហ្វឹកហាត់ ទូន្មានខ្លួនឯងបានល្អហើយ បុគ្គលនោះ រមែងបាននូវទីពឹង ដែលរកបានដោយកម្រផង។',
    meanE: 'Self is the master of self; what other master could there be? With the self well tamed, one gains a refuge rarely found.',
    applyK: 'មើលខ្លួនឯងជាមុន កុំចោទតែគេ ឬ ប្រគល់វាសនាឲ្យអ្នកដទៃ — ហ្វឹកហាត់ខ្លួន ទើបជាទីពឹងពិត។',
    applyE: 'Look to yourself first, do not blame others or hand your fate away — train yourself, that is the true refuge.',
  },
  {
    src: 'DHP 204',
    km: 'អារោគ្យបរមា — សុខភាពល្អ ប្រសើរជាងលាភ', en: 'Four Supreme Treasures',
    noteK: 'គាថាបួនប្រការប្រៀបធៀប នឹកឃើញទាន់ពេល គ្រាន់តែដឹងគុណជីវិត។', en: 'Four comparisons to recall in time — enough to be grateful for life.',
    lines: [
      'អារោគ្យបរមា លាភា សន្តុដ្ឋិ បរមំ ធនំ',
      'វិស្សាសា បរមា ញាតិ និព្វានំ បរមំ សុខំ',
    ],
    roman: 'ārogyaparamā lābhā, santuṭṭhi paramaṃ dhanaṃ · vissāsā paramā ñāti, nibbānaṃ paramaṃ sukhaṃ',
    gloss: [
      { w: 'អារោគ្យបរមា លាភា', km: 'ការមិនឈឺ ជាលាភប្រសើរបំផុត', en: 'health is the supreme gain' },
      { w: 'សន្តុដ្ឋិ បរមំ ធនំ', km: 'ការសន្តោស ជាទ្រព្យប្រសើរបំផុត', en: 'contentment is the supreme wealth' },
      { w: 'វិស្សាសា បរមា ញាតិ', km: 'ការទុកចិត្តគ្នា ជាញាតិប្រសើរបំផុត', en: 'trust is the best kin' },
      { w: 'និព្វានំ បរមំ សុខំ', km: 'ព្រះនិព្វាន ជាសុខប្រសើរបំផុត', en: 'Nibbāna is the supreme bliss' },
    ],
    meanK: 'ការមិនឈឺ ជាលាភប្រសើរជាងលាភទាំងអស់។ ការសន្តោស ស្កប់ស្កល់ ជាទ្រព្យប្រសើរជាងទ្រព្យ។ ការទុកចិត្តគ្នាទៅវិញទៅមក ជាញាតិប្រសើរជាងញាតិ។ ព្រះនិព្វាន ជាសុខប្រសើរជាងសុខទាំងអស់។',
    meanE: 'Health is the best gain; contentment is the best wealth; trust is the best relative; Nibbāna is the greatest bliss.',
    applyK: 'ដឹងគុណសុខភាពរាល់ថ្ងៃ ស្កប់ស្កល់នឹងអ្វីដែលមាន — នេះជាទ្រព្យមិនចេះបាត់។',
    applyE: 'Be grateful for your health and content with what you have — a treasure that cannot be lost.',
  },
  {
    src: 'VINAYA · MAHĀVAGGA',
    km: 'យេ ធម្មា ហេតុប្បភវា — អ្វីកើតអំពីហេតុ', en: 'Whatever Arises from a Cause',
    noteK: 'គាថាដែលលោកសារីបុត្ត បានឮពីព្រះអស្សជិ មុនពេលទ្រង់ចេញបួស — គេចាត់ទុកជាចំណុចកណ្តាល នៃព្រះពុទ្ធសាសនា។', en: 'Heard by Sāriputta from the Elder Assaji before his ordination — regarded as the heart of the Buddha teaching.',
    lines: [
      'យេ ធម្មា ហេតុប្បភវា តេសំ ហេតុំ តថាគតោ អាហ',
      'តេសញ្ច យោ និរោធោ ឯវំវាទី មហាសមណោ',
    ],
    roman: 'ye dhammā hetuppabhavā, tesaṃ hetuṃ tathāgato āha · tesañca yo nirodho, evaṃvādī mahāsamano',
    gloss: [
      { w: 'យេ ធម្មា ហេតុប្បភវា', km: 'ធម៌ទាំងឡាយណា កើតអំពីហេតុ', en: 'whatever states arise from a cause' },
      { w: 'តេសំ ហេតុំ តថាគតោ អាហ', km: 'ព្រះតថាគត ទ្រង់សម្តែងនូវហេតុរបស់ធម៌ទាំងនោះ', en: 'the Tathāgata declares their cause' },
      { w: 'តេសញ្ច យោ និរោធោ', km: 'និងការរលត់នូវធម៌ទាំងនោះ', en: 'and their cessation' },
      { w: 'ឯវំវាទី មហាសមណោ', km: 'ព្រះមហាសមណៈ ទ្រង់ពោលដូច្នេះ', en: 'thus speaks the Great Ascetic' },
    ],
    meanK: 'អ្វីៗដែលកើតមាន សុទ្ធតែកើតអំពីហេតុ។ ព្រះតថាគត ទ្រង់សម្តែងនូវហេតុរបស់អ្វីៗទាំងនោះ ព្រមទាំងការរលត់នូវអ្វីៗទាំងនោះ។ នេះជាចំណុចស្នូលនៃព្រះពុទ្ធសាសនា — អ្វីៗកើតពីហេតុ កាលហេតុរលត់ ផលក៏រលត់។',
    meanE: 'Whatever states arise from a cause, the Tathāgata tells their cause, and the cessation of those states — so declares the Great Ascetic. This is the heart of Buddhism: nothing arises without a cause, and when the cause ceases, so does the effect.',
    applyK: 'ពេលមានទុក្ខ រកហេតុមើលខ្លួនឯង — កែហេតុ ទើបផ្លាស់ប្តូរផល។',
    applyE: 'When you suffer, seek the cause within yourself — change the cause, and the effect will change.',
  },
  {
    src: 'METTĀ BHĀVANĀ',
    km: 'សព្វេ សត្តា សុខី ហោន្តុ — សត្វទាំងឡាយបានសុខ', en: 'May All Beings Be Happy',
    noteK: 'ឃ្លាបួនបន្ទាត់ សម្រាប់សូត្របណ្តុះមេត្តា មុនធ្វើសមាធិ ឬ ពេលចិត្តមិនស្ងប់។', en: 'Four lines of loving-kindness, recited before meditation or whenever the heart is restless.',
    lines: [
      'សព្វេ សត្តា អវេរា ហោន្តុ',
      'សព្វេ សត្តា អព្យាបជ្ឈា ហោន្តុ',
      'សព្វេ សត្តា អនីឃា ហោន្តុ',
      'សព្វេ សត្តា សុខី អត្តានំ បរិហរន្តុ',
    ],
    roman: 'sabbe sattā averā hontu · sabbe sattā abyāpajjhā hontu · sabbe sattā anīghā hontu · sabbe sattā sukhī attānaṃ pariharantu',
    gloss: [
      { w: 'សព្វេ សត្តា', km: 'សត្វទាំងឡាយ ទាំងអស់', en: 'all beings' },
      { w: 'អវេរា', km: 'ឥតពៀរ ឥតសត្រូវ', en: 'free from enmity' },
      { w: 'អព្យាបជ្ឈា', km: 'ឥតព្យាបាទ ឥតចង្អៀតចង្អល់ចិត្ត', en: 'free from ill will' },
      { w: 'អនីឃា', km: 'ឥតក្តៅក្រហាយ ឥតទុក្ខ', en: 'free from distress' },
      { w: 'សុខី អត្តានំ បរិហរន្តុ', km: 'ចូររក្សាខ្លួន ឲ្យបានសុខ', en: 'may they keep themselves at ease' },
    ],
    meanK: 'សត្វទាំងអស់ ចូរគ្មានពៀរសត្រូវ។ សត្វទាំងអស់ ចូរគ្មានព្យាបាទ ចង្អៀតចង្អល់ចិត្ត។ សត្វទាំងអស់ ចូរឥតក្តៅក្រហាយ ឥតទុក្ខ។ សត្វទាំងអស់ ចូរចេះថែរក្សាខ្លួនឯង រៀងរាល់ខ្លួន ឲ្យបានសុខ។ ផ្សាយមេត្តាទៅកាន់ខ្លួនឯង គ្រួសារ មិត្ត អ្នកជិតខាង និងសត្វទាំងអស់។',
    meanE: 'May all beings be free from enmity. May all beings be free from ill will. May all beings be free from distress. May all beings look after themselves and live at ease. Radiate this wish to yourself, your family, friends, neighbours and all beings.',
    applyK: 'បីដង ៖ ផ្សាយមេត្តាឲ្យខ្លួនឯង គ្រួសារ អ្នកជិតខាង សត្វទាំងអស់ — ចិត្តស្ងប់ ជាចំណេរ។',
    applyE: 'Recite three times to yourself, your family, your neighbours and all beings — a calm mind is the gain.',
  },
]
</script>