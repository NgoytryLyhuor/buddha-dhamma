<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🛡️ {{ t('អង្គុត្តរនិកាយ ទសកនិបាត · នាថករណសូត្រ (AN 10.17)', 'Aṅguttara Nikāya 10.17 · Nāthakaraṇa Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('ធម៌ជាទីពឹង ១០ ប្រការ (នាថករណធម៌)', '10 Virtues of True Self-Reliance') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ព្រះសម្មាសម្ពុទ្ធទ្រង់ត្រាស់ថា «អត្តា ហិ អត្តនោ នាថោ កោ ហិ នាថោ បរោ សិយា» — ខ្លួនជាទីពឹងរបស់ខ្លួន តើអ្នកដទៃឯណាជាទីពឹងបាន? ដើម្បីពឹងលើខ្លួនឯងបានរឹងមាំ ដោយមិនបាច់ភ័យខ្លាចការប្រែប្រួលនៃលោក ឬបួងសួងសុំលាភពីអ្នកណា មនុស្សគ្រប់រូបត្រូវកសាង «នាថករណធម៌» ទាំង ១០ ប្រការនេះទុកក្នុងបេះដូង។',
            'The Buddha declared: "Oneself is one\'s own refuge; what other refuge could there be?" To stand unshakeable in an unpredictable world—without dependency or superstitious fear—cultivate these ten master qualities of self-reliance.'
          ) }}
        </p>
      </div>
    </section>

    <!-- 10 Virtues Grid -->
    <section class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(item, idx) in virtues"
          :key="item.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ item.icon }}
              </span>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold"
                    :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                {{ t('ធម៌ទី', 'Virtue') }} {{ idx + 1 }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ t(item.titleK, item.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-2" :style="{ color: 'var(--accent)' }">
              {{ item.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(item.descK, item.descE) }}
            </p>
          </div>

          <div class="p-3 rounded-xl text-xs space-y-1 bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200">
            <span class="font-bold">✨ {{ t('ផលប្រយោជន៍ជាទីពឹង៖ ', 'Self-Reliance Power: ') }}</span>
            <span>{{ t(item.benefitK, item.benefitE) }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const virtues = [
  {
    id: 'sila',
    icon: '🛡️',
    titleK: '១. មានសីលបរិសុទ្ធ (សីលវន្ត)',
    titleE: '1. Moral Purity (Sīlavā)',
    pali: 'Sīlavā hoti pātimokkhasaṁvarasaṁvuto',
    descK: 'មានកាយវិការ និងវាចាស្អាតស្អំ មិនបៀតបៀនគេ មិនលួចប្លន់ មិនកុហក មិនផឹកគ្រឿងស្រវឹង។',
    descE: 'Impeccable ethical conduct—harmless in speech and action, free from deceit, violence, and intoxicants.',
    benefitK: 'ធ្វើឱ្យរស់នៅដោយគ្មានការភ័យខ្លាច គ្មានវិប្បដិសារី ដើរទៅទីណាក៏មានកិត្តិយសថ្លៃថ្នូរ។',
    benefitE: 'Guarantees freedom from guilt, fear of authority, and remorse, commanding natural respect.'
  },
  {
    id: 'bahussuta',
    icon: '📚',
    titleK: '២. មានចំណេះដឹងទូលំទូលាយ (ពហុស្សូត)',
    titleE: '2. Broad Learning & Wisdom (Bahussuto)',
    pali: 'Bahussuto hoti sutadharo sutasannicayo',
    descK: 'ជាអ្នកចេះដឹងច្រើន ចងចាំធម៌ល្អៗ យល់ច្បាស់ពីសច្ចធម៌ និងក្បួនច្បាប់ក្នុងការរស់នៅ។',
    descE: 'Extensively educated, retaining profound Dhamma principles and life wisdom.',
    benefitK: 'មិនងាយចាញ់បោកគេ មានគំនិតឆ្លាតវៃដោះស្រាយវិបត្តិជីវិត និងជាទីប្រឹក្សាដ៏ល្អដល់អ្នកដទៃ។',
    benefitE: 'Shields against deception, unlocks creative solutions, and provides solid counsel.'
  },
  {
    id: 'kalyanamitta',
    icon: '🤝',
    titleK: '៣. មានមិត្តល្អកល្យាណមិត្ត (កល្យាណមិត្តតា)',
    titleE: '3. Noble Companionship (Kalyāṇamitto)',
    pali: 'Kalyāṇamitto hoti kalyāṇasahāyo',
    descK: 'ចេះជ្រើសរើសសេពគប់មនុស្សមានគុណធម៌ ស្មោះត្រង់ មិនសេពគប់មនុស្សពាលនាំឱ្យវិនាស។',
    descE: 'Deliberately choosing uplifting, honest, virtuous companions while avoiding corrupt influences.',
    benefitK: 'មានមនុស្សជួយទាញពេលជួបគ្រោះអាសន្ន ជួយដាស់តឿនពេលភ្លាត់ស្នៀត និងជួយលើកទឹកចិត្តជានិច្ច។',
    benefitE: 'Surrounds you with an authentic safety net that catches you when you stumble.'
  },
  {
    id: 'suvaco',
    icon: '👂',
    titleK: '៤. ងាយប្រដៅ និងស្ដាប់ហេតុផល (សុវចោ)',
    titleE: '4. Receptive & Humble (Suvaco)',
    pali: 'Suvaco hoti sovacassakaraṇehi dhammehi samannāgato',
    descK: 'មានចិត្តទន់ភ្លន់ មិនរឹងត្អឹង ចេះទទួលយកការរិះគន់ស្ថាបនា មិនខឹងពេលគេប្រាប់ចំណុចខ្វះខាត។',
    descE: 'Open-minded and coachable; welcomes constructive feedback with grace rather than defensive ego.',
    benefitK: 'អភិវឌ្ឍខ្លួនបានលឿនជាងគេ ព្រោះចេះរៀនពីកំហុស និងងាយស្រួលធ្វើការជាមួយមនុស្សគ្រប់គ្នា។',
    benefitE: 'Accelerates personal growth exponentially by learning rapidly from every mistake.'
  },
  {
    id: 'dakkha',
    icon: '🛠️',
    titleK: '៥. ប៉ិនប្រសប់ និងឧស្សាហ៍ក្នុងកិច្ចការ (ទក្ខោ)',
    titleE: '5. Diligent & Capable (Kiṅkaraṇīyesu dakkho)',
    pali: 'Yāni tāni sabrahmacārīnaṁ kiṅkaraṇīyāni tattha dakkho hoti analaso',
    descK: 'មានស្នាដៃក្នុងការងារ ឧស្សាហ៍ព្យាយាម មិនខ្ជិលច្រអូស ចេះរិះរកមធ្យោបាយធ្វើកិច្ចការឱ្យជោគជ័យ។',
    descE: 'Skilled, productive, and hardworking; takes initiative to master tasks without procrastination.',
    benefitK: 'ទៅដល់ទីណាក៏មានគេត្រូវការ មិនដែលអត់ឃ្លាន និងបង្កើតផលប្រយោជន៍ធំធេងដល់សង្គម។',
    benefitE: 'Ensures economic resilience and indispensable value wherever you work.'
  },
  {
    id: 'dhammakama',
    icon: '📖',
    titleK: '៦. ស្រឡាញ់ និងត្រេកអរក្នុងធម៌ (ធម្មកាមោ)',
    titleE: '6. Love of Dhamma (Dhammakāmo)',
    pali: 'Dhammakāmo hoti piyasamudāhāro abhidhamme',
    descK: 'មានចិត្តស្រឡាញ់សច្ចធម៌ ចូលចិត្តស្ដាប់ធម៌ ពិភាក្សាធម៌ និងស្វែងរកការពិតនៃជីវិត។',
    descE: 'Passionate devotion to spiritual truth, eager to listen, inquire, and live by higher principles.',
    benefitK: 'ចិត្តតែងស្រស់ស្រាយ មិនលង់ក្នុងទុក្ខព្រួយលោកីយ និងមានពន្លឺបញ្ញាជាប្រចាំ។',
    benefitE: 'Infuses life with higher purpose and deep resilience against worldly vanity.'
  },
  {
    id: 'viriya',
    icon: '⚡',
    titleK: '៧. មានសេចក្ដីព្យាយាមមុតមាំ (អារទ្ធវិរិយោ)',
    titleE: '7. Persistent Energy (Āraddhavīriyo)',
    pali: 'Āraddhavīriyo viharati akusalānaṁ dhammānaṁ pahānāya',
    descK: 'តស៊ូមិនចុះចាញ់ ព្យាយាមលះបង់អំពើអាក្រក់ និងព្យាយាមកសាងអំពើល្អឱ្យកាន់តែចម្រើនឡើង។',
    descE: 'Unyielding resolve to abandon harmful habits and steadfastly cultivate goodness.',
    benefitK: 'អាចជំនះឧបសគ្គធំៗទាំងអស់ក្នុងជីវិត សម្រេចបាននូវរាល់គោលដៅដែលបានគ្រោងទុក។',
    benefitE: 'Overcomes every obstacle and transforms visionary aspirations into living reality.'
  },
  {
    id: 'santutthi',
    icon: '🌾',
    titleK: '៨. ចេះស្កប់ស្កល់នឹងរបស់ដែលមាន (សន្តុដ្ឋោ)',
    titleE: '8. Contentment (Santuṭṭho)',
    pali: 'Santuṭṭho hoti itarītarena cīvarapiṇḍapātasenāsanagilānappaccayabhesajjaparikkhārena',
    descK: 'ចេះពេញចិត្តនឹងអ្វីដែលខ្លួនរកបានដោយសុចរិត មិនលោភលន់ហួសមាឌ មិនច្រណែននឹងអ្នកដទៃ។',
    descE: 'Content with what is righteously earned; free from envy, debt, and the treadmill of greed.',
    benefitK: 'មានសេចក្ដីសុខភ្លាមៗក្នុងបច្ចុប្បន្ន មិនរងសម្ពាធសម្ភារៈនិយម និងមានសេរីភាពហិរញ្ញវត្ថុពិត។',
    benefitE: 'Instant peace of mind in the present moment, unfazed by consumerist competition.'
  },
  {
    id: 'sati',
    icon: '🧘',
    titleK: '៩. មានស្មារតីសតិរឭកដឹង (សតិមា)',
    titleE: '9. Mindfulness & Presence (Satimā)',
    pali: 'Satimā hoti paramena satinepakkena samannāgato',
    descK: 'មានស្មារតីដឹងខ្លួនជានិច្ច មិនភ្លេចខ្លួន ចងចាំនូវអំពើល្អនិងពាក្យល្អៗដែលធ្លាប់បានធ្វើពីមុន។',
    descE: 'Continuous mindful presence; alert, vigilant, and anchored in the here and now.',
    benefitK: 'មិនភ្លាត់ធ្វើខុសពេលមានអាសន្ន គ្រប់គ្រងអារម្មណ៍បានល្អ និងមានការផ្ចង់ស្មារតីមុតស្រួច។',
    benefitE: 'Prevents reckless blunders under stress and maintains calm clarity of decision.'
  },
  {
    id: 'panna',
    icon: '💡',
    titleK: '១០. មានបញ្ញាដឹងច្បាស់ (បញ្ញវា)',
    titleE: '10. Penetrating Wisdom (Paññavā)',
    pali: 'Paññavā hoti udayatthagāminiyā paññāya samannāgato',
    descK: 'យល់ច្បាស់នូវការកើតឡើងនិងរលត់ទៅនៃធម្មជាតិ ឃើញច្បាស់នូវអរិយសច្ចទាំង ៤ ផុតទុក្ខពិត។',
    descE: 'Deep insight into the arising and passing of phenomena, liberating the heart from suffering.',
    benefitK: 'ជាកំពូលនៃទីពឹងទាំងអស់ គ្មានទុក្ខសោកណាអាចរុះរើចិត្តអ្នកមានបញ្ញាបានឡើយ។',
    benefitE: 'The crown jewel of refuges—an enlightened sanctuary untouched by grief or despair.'
  }
]
</script>
