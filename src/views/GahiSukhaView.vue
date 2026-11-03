<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ១០២ — សុខ ៤ យ៉ាងរបស់គ្រហស្ថ', 'GATHA 102 — 4 HAPPINESSES OF HOUSEHOLDERS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('សុខ ៤ យ៉ាងរបស់គ្រហស្ថ ៖ សុភមង្គលពិតប្រាកដនៃជីវិតអ្នកគ្រប់គ្រងផ្ទះ', 'The 4 Kinds of Householder Happiness (Gahi Sukha, AN 4.62)') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('សុខ ៤ យ៉ាងរបស់គ្រហស្ថ (គិហិសុខ ឬ កាមភោគីសុខ) គឺជាការណែនាំដ៏ជាក់ស្តែងនិងកក់ក្តៅបំផុតរបស់ព្រះសម្មាសម្ពុទ្ធ ដែលទ្រង់បានសម្តែងប្រោសដល់អនាថបិណ្ឌិកសេដ្ឋី ក្នុង «អនណសូត្រ» (AN 4.62)។ ព្រះពុទ្ធសាសនាមិនដែលបដិសេធសេចក្តីសុខក្នុងលោកិយនោះឡើយ ផ្ទុយទៅវិញ ព្រះពុទ្ធទ្រង់បានចង្អុលបង្ហាញផ្លូវដល់គ្រហស្ថ (អ្នកនៅគ្រប់គ្រងផ្ទះ) ឱ្យចេះកសាងសុភមង្គលពិតប្រាកដក្នុងជីវិតរស់នៅប្រចាំថ្ងៃ។ សុខទាំង ៤ យ៉ាងនេះរួមមាន ៖ សុខពីការមានទ្រព្យ, សុខពីការចាយវាយទ្រព្យ, សុខពីការគ្មានបំណុលគេ និងសុខពីការប្រព្រឹត្តអំពើឥតទោស ដែលជាកំពូលសុខលើសគេបង្អស់។', 'The Four Kinds of Happiness for Householders (Gahi Sukha) represents the Buddha’s extraordinarily warm and practical guidance for lay disciples, expounded to the wealthy merchant Anāthapiṇḍika in the Anaṇa Sutta (AN 4.62). Buddhism does not disparage legitimate worldly well-being; on the contrary, the Buddha detailed how laypeople managing families and livelihoods can experience four grounded, progressive tiers of happiness: the joy of honest wealth, the joy of mindful spending, the joy of complete debtlessness, and the supreme joy of blameless living.') }}
    </p>

    <!-- Pali Gatha Box from Anana Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ចត្តារិមានិ គហបតិ សុខានិ អធិគមនីយានិ គិហិនា កាមភោគិនា កាលេន កាលំ សមយេន សមយំ ឧបាទាយ។ កតមានិ ចត្តារិ? អត្ថិសុខំ, ភោគសុខំ, អនណសុខំ, អនវជ្ជសុខំ។»', '"There are these four kinds of happiness, householder, that may be achieved by a layperson enjoying sensual pleasures from time to time: the happiness of ownership, the happiness of spending, the happiness of debtlessness, and the happiness of blamelessness." — Aṅguttara Nikāya 4.62') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— អនណសូត្រ ចតុក្កនិបាត អង្គុត្តរនិកាយ', '— Anaṇa Sutta, Catukkanipāta, Aṅguttara Nikāya') }}
      </p>
    </div>

    <!-- The 4 Kinds of Happiness Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🏡</span>
        <span>{{ t('សុខទាំង ៤ យ៉ាងរបស់គ្រហស្ថពិស្តារ', 'The 4 Kinds of Lay Happiness Analyzed') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="s in sukhas"
          :key="s.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
          :class="s.id === 4 ? 'ring-2 ring-emerald-500/50' : ''"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                  {{ s.num }}
                </span>
                <div>
                  <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">{{ t(s.titleKm, s.titleEn) }}</h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ s.pali }}</p>
                </div>
              </div>
              <span class="text-3xl">{{ s.icon }}</span>
            </div>

            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(s.descKm, s.descEn) }}
            </p>
          </div>

          <!-- Secret Key -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2.5 rounded-lg bg-stone-500/5 border border-stone-500/15">
              <span class="font-bold text-amber-700 dark:text-amber-300 block mb-0.5">
                🔑 {{ t('គន្លឹះសំខាន់ ៖', 'Core Foundation:') }}
              </span>
              <span class="text-stone-600 dark:text-stone-400">{{ t(s.keyKm, s.keyEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- The 1/16 Comparison Section -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>💎</span>
        <span>{{ t('អនវជ្ជសុខ ៖ កំពូលសុខដែលមិនអាចកាត់ថ្លៃបាន', 'Anavajja Sukha: The Priceless Crown of Blamelessness') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('នៅចុងបញ្ចប់នៃព្រះសូត្រ ព្រះសម្មាសម្ពុទ្ធទ្រង់បានត្រាស់សង្កត់ធ្ងន់ថា ៖ សុខកើតអំពីការមានទ្រព្យ, សុខកើតអំពីការចាយវាយ, និងសុខកើតអំពីការគ្មានបំណុល ទាំង ៣ នេះបូកបញ្ចូលគ្នា ក៏នៅមិនទាន់ស្មើនឹង «មួយចំណែកនៃ ១៦ ចំណែក» នៃ «អនវជ្ជសុខ» គឺសេចក្តីសុខដែលកើតចេញពីការប្រព្រឹត្តអំពើល្អ បរិសុទ្ធស្អាត គ្មានទោសពៃរ៍តាមផ្លូវកាយ វាចា ចិត្តឡើយ។ ទ្រព្យសម្បត្តិអាចផ្តល់សុខកាយ តែសីលធម៌បរិសុទ្ធទើបផ្តល់សុខចិត្តពិតប្រាកដ។', 'At the conclusion of the discourse, the Buddha emphasized that the happiness of wealth, spending, and debtlessness combined do not equal even a sixteenth part (1/16) of Anavajja Sukha—the sublime joy derived from flawless, blameless moral conduct of body, speech, and mind. Material wealth sustains the mortal body, but moral integrity anchors the immortal spirit in unshakable tranquility.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const sukhas = [
  {
    id: 1,
    num: '១',
    titleKm: 'អត្ថិសុខ (សុខកើតអំពីការមានទ្រព្យ)',
    titleEn: 'Atthi Sukha (Happiness of Ownership)',
    pali: 'Atthi-sukha — សុខពីការមាន',
    icon: '💰',
    descKm: 'សេចក្តីសុខស្កប់ស្កល់ដែលកើតឡើងដោយដឹងថា ខ្លួនមានទ្រព្យសម្បត្តិស្តុកស្តម្ភ ដែលរកបានមកដោយកម្លាំងញើសឈាម សុចរិត ស្របច្បាប់ និងត្រូវតាមធម៌។',
    descEn: 'The profound satisfaction and security that arises knowing one possesses righteous wealth earned through energetic labor, honesty, and right livelihood.',
    keyKm: 'ទ្រព្យត្រូវតែរកបានដោយយុត្តិធម៌ (ធម្មិយា) មិនមែនដោយការបោកប្រាស់ ឬកេងប្រវ័ញ្ចឡើយ។',
    keyEn: 'Wealth must be acquired purely through honest effort without exploitation or harm.',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'ភោគសុខ (សុខកើតអំពីការចាយទ្រព្យ)',
    titleEn: 'Bhoga Sukha (Happiness of Mindful Wealth Use)',
    pali: 'Bhoga-sukha — សុខពីការប្រើប្រាស់',
    icon: '🎁',
    descKm: 'សេចក្តីសុខដែលកើតឡើងពីការចេះប្រើប្រាស់ទ្រព្យនោះ ចិញ្ចឹមកូនប្រពន្ធ មាតាបិតា ជួយសង្គ្រោះញាតិមិត្ត និងធ្វើបុណ្យទានសង្កត់សង្កិនទុក្ខអ្នកដទៃ។',
    descEn: 'The joy of utilizing wealth wisely to nourish parents, family, and loved ones, while practicing philanthropy, generosity, and community support.',
    keyKm: 'មិនមែនជាការចាយខ្ជះខ្ជាយ តែជាការបែងចែកទ្រព្យជា ៤ ចំណែកតាមក្បួនធម៌។',
    keyEn: 'Not reckless indulgence, but purposeful, generous stewardship.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'អនណសុខ (សុខកើតអំពីការគ្មានបំណុលគេ)',
    titleEn: 'Anaṇa Sukha (Happiness of Debtlessness)',
    pali: 'Anaṇa-sukha — សុខឥតជំពាក់បំណុល',
    icon: '🕊️',
    descKm: 'សេចក្តីសុខផ្លូវចិត្តដ៏ធំធេងដែលកើតឡើងពីការមិនជំពាក់បំណុលគេ សូម្បីតែបន្តិចបន្តួច។ រស់នៅដោយសេរីភាព មិនភ័យខ្លាចម្ចាស់បំណុលតាមទារ។',
    descEn: 'The profound mental relief and inner sovereignty of being completely free from financial debt, never fearing the gaze of creditors.',
    keyKm: 'រស់នៅតាមលទ្ធភាពជាក់ស្តែង សន្សំសំចៃ និងមិនទិញរបស់លើសកម្លាំងខ្លួន។',
    keyEn: 'Live within realistic means, maintain fiscal discipline, and avoid compulsive borrowing.',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'អនវជ្ជសុខ (សុខកើតអំពីអំពើឥតទោស)',
    titleEn: 'Anavajja Sukha (Happiness of Blamelessness)',
    pali: 'Anavajja-sukha — កំពូលនៃសុខលោកិយ',
    icon: '🌟',
    descKm: 'សេចក្តីសុខដែលកើតឡើងដោយដឹងថា ខ្លួនបានប្រព្រឹត្តតែកាយកម្ម វចីកម្ម និងមនោកម្មដ៏បរិសុទ្ធ ឥតមានទោសពៃរ៍ គ្មានវិប្បដិសារី (ក្តៅក្រហាយចិត្ត)។',
    descEn: 'The supreme tranquility of living a morally flawless life, knowing one’s bodily, verbal, and mental conduct is blameless and unblemished.',
    keyKm: 'ជាកំពូលសុខ ព្រោះធ្វើឱ្យចិត្តស្ងប់ គេងលក់ស្រួល និងមិនភ័យខ្លាចសេចក្តីស្លាប់ឡើយ។',
    keyEn: 'The ultimate summit: produces deep peace, fearless confidence, and calm death.',
  },
]
</script>
