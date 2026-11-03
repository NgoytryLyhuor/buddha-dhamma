<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៨៣ — ធម្មគុណ ៦ & សង្ឃគុណ ៩', 'GATHA 83 — VIRTUES OF DHAMMA & SANGHA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ធម្មគុណ ៦ & សង្ឃគុណ ៩ ៖ បំពេញកម្រងរតនត្រ័យគុណ (រតនានុស្សតិ)', 'The 6 Qualities of Dhamma & 9 Qualities of Sangha') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ព្រះរតនត្រ័យ គឺជាទីពឹងទីរឭកដ៏ឧត្តមបំផុតក្នុងលោក ដែលរួមមាន ព្រះពុទ្ធរតនៈ ព្រះធម្មរតនៈ និងព្រះសង្ឃរតនៈ។ បន្ទាប់ពីបានយល់ដឹងពីពុទ្ធគុណ ៩ ប្រការរួចហើយ ការស្វែងយល់ពី «ធម្មគុណ ៦ ប្រការ» និង «សង្ឃគុណ ៩ ប្រការ» នឹងជួយបំពេញសទ្ធា និងបញ្ញារបស់ពុទ្ធបរិស័ទឱ្យកាន់តែរឹងមាំពេញលេញ។ ព្រះធម៌ជាត្រីវិស័យចង្អុលបង្ហាញផ្លូវ រីឯព្រះសង្ឃជាគំរូនៃអ្នកដើរលើផ្លូវរហូតដល់សម្រេចគោលដៅ។ ការសូត្ររឭកគុណទាំងពីរនេះ ជួយជម្រះចិត្តឱ្យបរិសុទ្ធ និងបង្កើតនូវថាមពលកុសលដ៏មហិមា។', 'The Triple Gem represents the supreme, unshakable refuge: the Buddha, the Dhamma, and the Sangha. Having explored the Nine Virtues of the Buddha, examining the Six Virtues of the Dhamma and Nine Virtues of the Sangha completes the sacred trinity of Buddhist recollection (Ratanānussati). The Dhamma serves as the infallible cosmic roadmap, while the Sangha exemplifies the community of travelers who successfully walked the path to liberation.') }}
    </p>

    <!-- Tab Filter -->
    <div class="mt-8 flex items-center justify-between gap-2 flex-wrap">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>💎</span>
        <span>{{ activeGunaTab === 'dhamma' ? t('ធម្មគុណ ៦ ប្រការ (Dhammānussati)', 'The 6 Virtues of Dhamma') : t('សង្ឃគុណ ៩ ប្រការ (Saṅghānussati)', 'The 9 Virtues of Sangha') }}</span>
      </h3>
      <div class="flex items-center gap-1.5 text-xs">
        <button
          type="button"
          class="px-3 py-1.5 rounded-lg border font-bold cursor-pointer transition"
          :class="activeGunaTab === 'dhamma' ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30' : 'border-stone-300 dark:border-stone-700'"
          @click="activeGunaTab = 'dhamma'"
        >
          📜 {{ t('ធម្មគុណ (៦)', 'Dhamma (6)') }}
        </button>
        <button
          type="button"
          class="px-3 py-1.5 rounded-lg border font-bold cursor-pointer transition"
          :class="activeGunaTab === 'sangha' ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30' : 'border-stone-300 dark:border-stone-700'"
          @click="activeGunaTab = 'sangha'"
        >
          🪷 {{ t('សង្ឃគុណ (៩)', 'Sangha (9)') }}
        </button>
      </div>
    </div>

    <!-- Dhamma Section -->
    <div v-if="activeGunaTab === 'dhamma'" class="mt-4 space-y-4">
      <!-- Pali Verse -->
      <div class="verse-box p-4 sm:p-5 border-l-4" :style="{ borderColor: 'var(--accent)' }">
        <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
          {{ t('«ស្វាក្ខាតោ ភគវតា ធម្មោ, សន្ទិដ្ឋិកោ, អកាលិកោ, ឯហិបស្សិកោ, ឱបនយិកោ, បច្ចត្តំ វេទិតព្វោ វិញ្ញូហីតិ។»', '"The Dhamma is well-expounded by the Blessed One, to be seen here and now, timeless, inviting inspection, leading onward, to be personally experienced by the wise." — Dhajagga Sutta') }}
        </p>
        <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
          {{ t('— បទនមស្ការព្រះធម៌ ព្រះត្រៃបិដក', '— Hymn to the Dhamma, Tipitaka') }}
        </p>
      </div>

      <!-- 6 Dhamma Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="d in dhammaQualities"
          :key="d.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                  {{ d.num }}
                </span>
                <div>
                  <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">{{ d.pali }}</h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ d.enTitle }}</p>
                </div>
              </div>
              <span class="text-2xl">{{ d.icon }}</span>
            </div>
            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(d.descKm, d.descEn) }}
            </p>
          </div>
          <div class="mt-3 pt-3 border-t text-xs text-stone-600 dark:text-stone-400">
            💡 <strong>{{ t('អត្ថន័យជាក់ស្តែង ៖', 'Insight:') }}</strong> {{ t(d.insightKm, d.insightEn) }}
          </div>
        </div>
      </div>
    </div>

    <!-- Sangha Section -->
    <div v-else class="mt-4 space-y-4">
      <!-- Pali Verse -->
      <div class="verse-box p-4 sm:p-5 border-l-4" :style="{ borderColor: 'var(--accent)' }">
        <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
          {{ t('«សុបដិបន្នោ ភគវតោ សាវកសង្ឃោ, ឧជុបដិបន្នោ... ញាយបដិបន្នោ... សាមីចិបដិបន្នោ... យទិទំ ចត្តារិ បុរិសយុគានិ អដ្ឋ បុរិសបុគ្គលា... អនុត្តរំ បុញ្ញក្ខេត្តំ លោកស្សាតិ។»', '"The Sangha of the Blessed One\'s disciples has practiced well... practiced directly... practiced insightfully... practiced properly. That is the four pairs of persons, the eight kinds of individuals... the supreme field of merit for the world." — Dhajagga Sutta') }}
        </p>
        <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
          {{ t('— បទនមស្ការព្រះសង្ឃ ព្រះត្រៃបិដក', '— Hymn to the Sangha, Tipitaka') }}
        </p>
      </div>

      <!-- 9 Sangha Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="s in sanghaQualities"
          :key="s.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                  {{ s.num }}
                </span>
                <div>
                  <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">{{ s.pali }}</h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ s.enTitle }}</p>
                </div>
              </div>
              <span class="text-2xl">{{ s.icon }}</span>
            </div>
            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(s.descKm, s.descEn) }}
            </p>
          </div>
          <div class="mt-3 pt-3 border-t text-xs text-stone-600 dark:text-stone-400">
            🪷 <strong>{{ t('សារៈសំខាន់ ៖', 'Significance:') }}</strong> {{ t(s.insightKm, s.insightEn) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeGunaTab = ref('dhamma')

const dhammaQualities = [
  {
    id: 1,
    num: '១',
    pali: 'ស្វាក្ខាតោ (Svākkhāto)',
    enTitle: 'Well-Expounded by the Blessed One',
    icon: '📜',
    descKm: 'ព្រះធម៌ដែលព្រះពុទ្ធទ្រង់សម្តែងទុកមក គឺល្អបរិសុទ្ធឥតខ្ចោះ ទាំងខាងដើម (សីល), ទាំងកណ្តាល (សមាធិ), និងទាំងខាងចុង (បញ្ញា) គ្មានកន្លែងណាខ្វះចន្លោះ ឬលើសលស់ឡើយ។',
    descEn: 'The Dhamma is articulated flawlessly from beginning to end—pure in phrasing and spirit, consistent, complete, and lacking nothing.',
    insightKm: 'ព្រះធម៌ជាច្បាប់ធម្មជាតិដែលពិតជានិច្ច មិនមែនកើតពីការស្រមើស្រមៃរបស់មនុស្សឡើយ។',
    insightEn: 'Objective cosmic truth discovered by direct insight, completely free of flaw.',
  },
  {
    id: 2,
    num: '២',
    pali: 'សន្ទិដ្ឋិកោ (Sandiṭṭhiko)',
    enTitle: 'Directly Visible Here and Now',
    icon: '👁️',
    descKm: 'អ្នកបដិបត្តិតាមព្រះធម៌ អាចឃើញលទ្ធផលជាក់ស្តែងដោយខ្លួនឯងក្នុងជាតិនេះ ពេលនេះ មិនបាច់រង់ចាំដល់ជាតិក្រោយ ឬជឿតាមតែពាក្យចចាមអារ៉ាមឡើយ។',
    descEn: 'Directly verifiable in one\'s own immediate experience here and now; empirical and self-evident rather than speculative belief.',
    insightKm: 'ពេលរំលត់កំហឹងបានមួយវិនាទី ចិត្តត្រជាក់ភ្លាមៗក្នុងវិនាទីនោះឯង។',
    insightEn: 'When anger is relinquished, serene coolness is experienced instantaneously.',
  },
  {
    id: 3,
    num: '៣',
    pali: 'អកាលិកោ (Akāliko)',
    enTitle: 'Timeless & Immediate in Fruit',
    icon: '⏳',
    descKm: 'ព្រះធម៌ផ្តល់ផលភ្លាមៗដោយគ្មានរង់ចាំកាលវេលា (កាលណាមគ្គកើតឡើង ផលក៏កើតឡើងភ្លាមមិនបង្អង់) ហើយជាសច្ចធម៌មិនចេះហួសសម័យ មិនថា ២៥០០ ឆ្នាំមុន ឬ ១ លានឆ្នាំក្រោយឡើយ។',
    descEn: 'Timeless efficacy: results immediately follow noble fruition without time gap. Furthermore, moral truths remain eternally valid across eras.',
    insightKm: 'កម្មផល និងអរិយសច្ច នៅតែពិតជានិច្ច ទោះបីបច្ចេកវិទ្យា និងសម័យកាលជឿនលឿនយ៉ាងណាក៏ដោយ។',
    insightEn: 'Karmic truth and the Four Truths apply equally in the ancient forest and modern space age.',
  },
  {
    id: 4,
    num: '៤',
    pali: 'ឯហិបស្សិកោ (Ehipassiko)',
    enTitle: 'Inviting Inspection (Come and See)',
    icon: '🚪',
    descKm: 'ព្រះធម៌បើកចំហ ហ៊ានអញ្ជើញមនុស្សគ្រប់គ្នាឱ្យ «មកមើល មកពិសោធន៍ និងមកអនុវត្តជាក់ស្តែង» មិនមែនបង្ខំឱ្យជឿដោយខ្វាក់ខ្វល់ឡើយ។',
    descEn: '"Come and see for yourself!" Open to objective verification, challenging seekers to test and investigate before believing.',
    insightKm: 'ពុទ្ធសាសនាជាសាសនានៃការសាកល្បង និងវិទ្យាសាស្ត្រផ្លូវចិត្ត មិនមែនជំនឿអរូបីទេ។',
    insightEn: 'The Dhamma is empirical scientific inquiry of consciousness, not blind dogma.',
  },
  {
    id: 5,
    num: '៥',
    pali: 'ឱបនយិកោ (Opanayiko)',
    enTitle: 'Leading Inward to Practice',
    icon: '🧘',
    descKm: 'ជាធម៌ដែលគប្បីបង្អោនចូលមកក្នុងខ្លួន យកមកកែលម្អចិត្តគំនិត និងអាកប្បកិរិយារបស់ខ្លួន មិនមែនរៀនដើម្បីតែយកទៅជជែកដេញដោលជាមួយគេឡើយ។',
    descEn: 'Worthy of being brought inward into one\'s own mind, serving as personal spiritual medicine rather than abstract external debate.',
    insightKm: 'រៀនធម៌ដើម្បីឆ្លុះកញ្ចក់មើលកំហុសខ្លួនឯង មិនមែនឆ្លុះមើលកំហុសអ្នកដទៃ។',
    insightEn: 'Study the teaching as a mirror to purify oneself, not a microscope on others.',
  },
  {
    id: 6,
    num: '៦',
    pali: 'បច្ចត្តំ វេទិតព្វោ វិញ្ញូហិ (Paccattaṃ Veditabbo Viññūhi)',
    enTitle: 'Personally Experienced by the Wise',
    icon: '💎',
    descKm: 'ព្រះធម៌ជាអ្វីដែលអ្នកប្រាជ្ញត្រូវដឹងជាក់ច្បាស់ក្នុងចិត្តខ្លួនឯង ម្នាក់ៗត្រូវញ៉ាំបាយខ្លួនឯងទើបឆ្អែត គ្មាននរណាអាចសម្រេចធម៌ជំនួសនរណាបានឡើយ។',
    descEn: 'Directly known by the wise in personal awareness. Like tasting food yourself, no one can digest or awaken to liberation on your behalf.',
    insightKm: 'សេចក្តីស្ងប់ និងព្រះនិព្វាន ជាបទពិសោធន៍ផ្ទាល់ខ្លួន មិនអាចផ្ទេរតាមរយៈពាក្យសម្តីបានឡើយ។',
    insightEn: 'Enlightenment is non-transferable direct knowledge, tasted by individual effort.',
  },
]

const sanghaQualities = [
  {
    id: 1,
    num: '១',
    pali: 'សុបដិបន្នោ (Supaṭipanno)',
    enTitle: 'Practicing Well',
    icon: '🌱',
    descKm: 'ព្រះសង្ឃសាវ័កនៃព្រះពុទ្ធ ប្រតិបត្តិល្អតាមគន្លងព្រះធម៌វិន័យ ដើរតាមផ្លូវមជ្ឈិមបដិបទា មិនតឹងពេក មិនធូរពេក។',
    descEn: 'Disciples of the Blessed One practice well, guided strictly by moral discipline and the Middle Way.',
    insightKm: 'ជាគំរូនៃជីវិតសាមញ្ញ ស្អាតស្អំ និងមានវិន័យរៀបរយ។',
    insightEn: 'Model of an upright, disciplined, and morally pure monastic life.',
  },
  {
    id: 2,
    num: '២',
    pali: 'ឧជុបដិបន្នោ (Ujupaṭipanno)',
    enTitle: 'Practicing Directly & Uprightly',
    icon: '📏',
    descKm: 'ប្រតិបត្តិដោយត្រង់ មិនបត់បែន គ្មានពុតត្បុត មិនបោកប្រាស់ ដើរលើមាគ៌ាត្រង់ឆ្ពោះទៅកាន់ព្រះនិព្វាន។',
    descEn: 'Practicing uprightly and straightforwardly, free of deception, hypocrisy, or pretension.',
    insightKm: 'ចិត្តស្មោះត្រង់ គ្មានកលល្បិច ជាសញ្ញានៃបព្វជិតពិតប្រាកដ។',
    insightEn: 'Radical honesty and transparency in intention and practice.',
  },
  {
    id: 3,
    num: '៣',
    pali: 'ញាយបដិបន្នោ (Ñāyapaṭipanno)',
    enTitle: 'Practicing Insightfully for Freedom',
    icon: '🧭',
    descKm: 'ប្រតិបត្តិដើម្បីយល់ដឹងនូវសច្ចធម៌ និងដើម្បីចេញផុតចាកសេចក្តីទុក្ខ មិនមែនដើម្បីលាភសក្ការៈ ឬយសសក្តិឡើយ។',
    descEn: 'Practicing insightfully for the true method leading to the cessation of suffering, not for fame or donations.',
    insightKm: 'មានគោលដៅតែមួយគត់ គឺការរំលត់ទុក្ខរបស់សត្វលោក។',
    insightEn: 'Uncompromising orientation toward the supreme goal of ending distress.',
  },
  {
    id: 4,
    num: '៤',
    pali: 'សាមីចិបដិបន្នោ (Sāmīcipaṭipanno)',
    enTitle: 'Practicing Properly & Masterfully',
    icon: '🕯️',
    descKm: 'ប្រតិបត្តិគួរដល់ការគោរព សមរម្យ គួរដល់ការសរសើរ ឥតមានទាស់ភ្នែកក្នុងគ្រប់ឥរិយាបថ។',
    descEn: 'Practicing impeccably with refined etiquette, worthy of highest social veneration.',
    insightKm: 'កាយវិការ សំដី និងឥរិយាបថ បង្កើនសេចក្តីជ្រះថ្លាដល់អ្នកបានឃើញ។',
    insightEn: 'Comportment and speech naturally inspire tranquility in onlookers.',
  },
  {
    id: 5,
    num: '៥',
    pali: 'អាហុនេយ្យោ (Āhuneyyo)',
    enTitle: 'Worthy of Hospitality & Distant Gifts',
    icon: '🎁',
    descKm: 'គួរទទួលនូវគ្រឿងសក្ការៈ និងបច្ច័យ ៤ ដែលគេនាំមកពីចម្ងាយ ដើម្បីថ្វាយដល់បុគ្គលមានសីល។',
    descEn: 'Worthy of hospitality and offerings carried from afar to honor virtuous practitioners.',
    insightKm: 'ជាអ្នកទទួលទានដោយចិត្តបរិសុទ្ធ ធ្វើឱ្យទាននោះមានផលធំធេង។',
    insightEn: 'Receiving offerings with pure conscience amplifies the giver\'s merit.',
  },
  {
    id: 6,
    num: '៦',
    pali: 'បាហុនេយ្យោ (Pāhuneyyo)',
    enTitle: 'Worthy of Entertaining as Honored Guests',
    icon: '🏠',
    descKm: 'គួរទទួលនូវវត្ថុដែលម្ចាស់ផ្ទះរៀបចំទុកសម្រាប់ទទួលភ្ញៀវកិត្តិយសខ្ពស់បំផុត។',
    descEn: 'Worthy of offerings reserved for the most cherished and eminent guests.',
    insightKm: 'ព្រះសង្ឃជាភ្ញៀវដ៏ខ្ពង់ខ្ពស់បំផុតនៃគ្រប់ក្រុមគ្រួសារ។',
    insightEn: 'Welcomed as the most noble visitor a household could ever host.',
  },
  {
    id: 7,
    num: '៧',
    pali: 'ទក្ខិណេយ្យោ (Dakkhiṇeyyo)',
    enTitle: 'Worthy of Religious Offerings (Dakkhiṇā)',
    icon: '🤲',
    descKm: 'គួរទទួលនូវទក្ខិណាទាន ដែលគេធ្វើឡើងដោយជំនឿលើបរលោក និងច្បាប់កម្មផល។',
    descEn: 'Worthy of offerings made with faith in the fruition of moral kamma.',
    insightKm: 'ទានដែលប្រគេនដល់ព្រះសង្ឃ តែងផ្តល់វិបាកជាសុខឆ្លងជាតិ។',
    insightEn: 'Offerings placed in their hands bear abundant future fruits of peace.',
  },
  {
    id: 8,
    num: '៨',
    pali: 'អញ្ជលិករណីយោ (Añjalikaraṇīyo)',
    enTitle: 'Worthy of Reverential Salutation',
    icon: '🙏',
    descKm: 'គួរដល់ការលើកដៃសំពះគោរព ពីសំណាក់មនុស្ស ទេវតា និងព្រហ្មទូទាំងចក្រវាឡ។',
    descEn: 'Worthy of having hands clasped together in reverent salutation (añjali) by devas and humans.',
    insightKm: 'ការលើកដៃសំពះព្រះសង្ឃ បង្កើតនូវនិវាតធម៌ (ការបន្ទាបខ្លួន) និងកុសលធំ។',
    insightEn: 'Bowing to virtue subdues pride and instills wholesome humility.',
  },
  {
    id: 9,
    num: '៩',
    pali: 'អនុត្តរំ បុញ្ញក្ខេត្តំ លោកស្ស (Anuttaraṃ Puññakkhettaṃ)',
    enTitle: 'Supreme Field of Merit for the World',
    icon: '🌾',
    descKm: 'ជាស្រែបុណ្យដ៏ប្រសើរបំផុតក្នុងលោក គ្មានស្រែបុណ្យណាស្មើឡើយ។ ដូចជាកសិករសាបព្រោះគ្រាប់ពូជលើដីមានជីជាតិ តែងទទួលបានផលផ្លែផ្កាជាអនេក។',
    descEn: 'The incomparable field of merit for the cosmos. Like seeds sown into fertile, stone-free soil, charity given to the Sangha yields immense harvest.',
    insightKm: 'ជាកន្លែងដែលពុទ្ធបរិស័ទអាចសន្សំស្បៀងបុណ្យសម្រាប់ឆ្លងវដ្តសង្សារ។',
    insightEn: 'The fertile sanctuary where spiritual provisions for eternity are planted.',
  },
]
</script>
