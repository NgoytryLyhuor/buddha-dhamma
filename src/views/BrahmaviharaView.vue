<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៥៧ — ព្រហ្មវិហារធម៌ ៤', 'GATHA 57 — THE 4 SUBLIME STATES (BRAHMAVIHĀRA)') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ព្រហ្មវិហារធម៌ ៤ & សិល្បៈផ្ចាញ់ «សត្រូវជិត-សត្រូវឆ្ងាយ»', 'The 4 Sublime States & Overcoming Near and Far Enemies') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('«ព្រហ្មវិហារធម៌» មានន័យថា ធម៌ជាទីនៅដ៏ប្រសើរ ឬចិត្តគំនិតដ៏ខ្ពង់ខ្ពស់ស្មើនឹងព្រហ្ម។ ព្រះសម្មាសម្ពុទ្ធទ្រង់បង្រៀនគុណធម៌ទាំង ៤ ប្រការនេះ (មេត្តា, ករុណា, មុទិតា, ឧបេក្ខា) គឺជាថ្នាំទិព្វសម្រាប់ព្យាបាលទំនាក់ទំនងក្នុងសង្គមមនុស្ស និងបង្កើតសន្តិភាពពិភពលោក។ ចំណុចសំខាន់បំផុតដែលអ្នកបដិបត្តិត្រូវយល់ដឹង គឺ «សត្រូវជិត និងសត្រូវឆ្ងាយ» នៃព្រហ្មវិហារធម៌នីមួយៗ ព្រោះសត្រូវជិតតែងក្លែងបន្លំធ្វើជាគុណធម៌ បោកបញ្ឆោតចិត្តយើងដោយមិនដឹងខ្លួន។', 'Brahmavihāra represents the Four Sublime Divine Abodes: Loving-Kindness (Mettā), Compassion (Karuṇā), Altruistic Joy (Muditā), and Equanimity (Upekkhā). They constitute the supreme universal balm for healing human relationships and cultivating boundless peace. The most profound psychological teaching within this practice is identifying the "Near and Far Enemies" of each virtue: while far enemies are blatantly opposing, near enemies subtly disguise themselves as virtue, deceiving the unvigilant mind.') }}
    </p>

    <!-- 4 Brahmavihara Grid Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      <div
        v-for="b in brahmaviharaList"
        :key="b.id"
        class="card-paper p-5 sm:p-6 rounded-xl border border-l-4 transition-all"
        :style="{ borderLeftColor: b.color }"
      >
        <div class="flex items-start justify-between gap-3">
          <div>
            <span class="text-xs font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white" :style="{ background: b.color }">
              {{ b.pali }}
            </span>
            <h3 class="font-display text-lg sm:text-xl font-bold mt-2" :style="{ color: 'var(--ink)' }">
              {{ t(b.km, b.en) }}
            </h3>
            <p class="text-xs font-bold mt-1" :style="{ color: b.color }">
              {{ t(b.mottoKm, b.mottoEn) }}
            </p>
          </div>
          <span class="text-3xl shrink-0">{{ b.icon }}</span>
        </div>

        <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
          {{ t(b.descKm, b.descEn) }}
        </p>

        <!-- Near & Far Enemies Matrix -->
        <div class="mt-4 p-3.5 rounded-xl border grid grid-cols-1 sm:grid-cols-2 gap-3" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="p-2.5 rounded-lg border bg-amber-500/5 border-amber-500/20">
            <span class="text-[11px] font-bold text-amber-600 dark:text-amber-400 block mb-1">
              ⚠️ សត្រូវជិត (ក្លែងបន្លំ ៖ ពិបាកដឹង)
            </span>
            <p class="text-xs font-bold" :style="{ color: 'var(--ink)' }">{{ t(b.nearEnemyKm, b.nearEnemyEn) }}</p>
            <p class="text-[11px] text-stone-500 mt-1 leading-relaxed">{{ t(b.nearEnemyDescKm, b.nearEnemyDescEn) }}</p>
          </div>

          <div class="p-2.5 rounded-lg border bg-rose-500/5 border-rose-500/20">
            <span class="text-[11px] font-bold text-rose-600 dark:text-rose-400 block mb-1">
              ❌ សត្រូវឆ្ងាយ (ផ្ទុយស្រឡះ ៖ ងាយដឹង)
            </span>
            <p class="text-xs font-bold" :style="{ color: 'var(--ink)' }">{{ t(b.farEnemyKm, b.farEnemyEn) }}</p>
            <p class="text-[11px] text-stone-500 mt-1 leading-relaxed">{{ t(b.farEnemyDescKm, b.farEnemyDescEn) }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Practical Daily Cultivation Guide -->
    <div class="card-paper p-6 md:p-8 rounded-2xl border mt-8 border-t-4" :style="{ borderTopColor: 'var(--accent)' }">
      <p class="chapter-label">{{ t('ការផ្សាយព្រហ្មវិហារធម៌', 'DAILY RADIATION PRACTICE') }}</p>
      <h3 class="font-display text-xl font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
        {{ t('របៀបចម្រើនព្រហ្មវិហារធម៌ក្នុងជីវិតរស់នៅប្រចាំថ្ងៃ', 'How to Radiate the 4 Sublime States Daily') }}
      </h3>

      <div class="space-y-3 mt-4 text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        <p>
          • <strong>ពេលជួបមនុស្សទូទៅ ៖</strong> បណ្តុះ **មេត្តា** ដោយគិតថា <em>«សូមឱ្យអ្នកទាំងអស់គ្នាបានជួបប្រទះសេចក្តីសុខសប្បាយ»</em>។<br/>
          • <strong>ពេលឃើញមនុស្សរងទុក្ខ ឈឺចាប់ ឬក្រីក្រ ៖</strong> បណ្តុះ **ករុណា** ដោយគិតថា <em>«តើខ្ញុំអាចជួយសង្គ្រោះ ឬសម្រាលទុក្ខគេដោយរបៀបណា?»</em>។<br/>
          • <strong>ពេលឃើញគេបានឡើងបុណ្យស័ក្តិ ឬជោគជ័យ ៖</strong> បណ្តុះ **មុទិតា** ដោយញញឹមត្រេកអរពីបេះដូង កុំឱ្យសេចក្តីច្រណែនឈ្នានីសចូលមកជ្រៀតជ្រែក។<br/>
          • <strong>ពេលជួបរឿងដែលកែប្រែមិនបាន (ដូចជាការស្លាប់ ឬព្រាត់ប្រាស) ៖</strong> បណ្តុះ **ឧបេក្ខា** ដោយដឹងថា <em>«សត្វលោកទាំងអស់សុទ្ធតែមានកម្មជារបស់ខ្លួន»</em>។
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const brahmaviharaList = [
  {
    id: 'metta',
    color: '#10b981',
    icon: '💚',
    pali: 'Mettā',
    km: '១. មេត្តា (Loving-Kindness)',
    en: '1. Mettā (Loving-Kindness)',
    mottoKm: '«បំណងល្អចង់ឱ្យសត្វលោកទាំងពួងបានសេចក្តីសុខ»',
    mottoEn: '"Wishing that all living beings dwell in happiness"',
    descKm: 'សេចក្តីស្រឡាញ់រាប់អានដោយបរិសុទ្ធ គ្មានលក្ខខណ្ឌ ដូចជាចិត្តម្តាយដែលស្រឡាញ់ថ្នាក់ថ្នមកូនទោសប្រុសតែមួយ។',
    descEn: 'Unconditional, universal goodwill and warmhearted benevolence wishing welfare to all beings without prejudice.',
    nearEnemyKm: 'រាគៈ & សេចក្តីស្រឡាញ់ជាប់ជំពាក់ (Pema / Tanha)',
    nearEnemyEn: 'Selfish Affection & Lust (Pema / Rāga)',
    nearEnemyDescKm: 'ការស្រឡាញ់ដែលមានការប្រច័ណ្ឌ ជាប់ជំពាក់ ឬចង់បានគេធ្វើជារបស់ខ្លួន ដែលតែងក្លែងខ្លួនជាមេត្តា។',
    nearEnemyDescEn: 'Possessive attachment disguised as care, leading to clinginess and jealousy.',
    farEnemyKm: 'ព្យាបាទ & កំហឹង (Byāpāda / Dosa)',
    farEnemyEn: 'Ill-will & Hatred (Byāpāda / Dosa)',
    farEnemyDescKm: 'គំនិតចងគំនុំ ចង់សងសឹក ឬស្អប់ខ្ពើមអ្នកដទៃ។',
    farEnemyDescEn: 'Direct hostility, resentment, malice, and aggressive anger.'
  },
  {
    id: 'karuna',
    color: '#0284c7',
    icon: '🤝',
    pali: 'Karuṇā',
    km: '២. ករុណា (Compassion)',
    en: '2. Karuṇā (Compassion)',
    mottoKm: '«សេចក្តីអាណិតចង់ជួយស្រោចស្រង់សត្វឱ្យរួចពីទុក្ខ»',
    mottoEn: '"The quivering of the heart moved to relieve suffering"',
    descKm: 'ចិត្តរំជួលក្តុកក្តួលអាណិតពេលឃើញអ្នកដទៃរងទុក្ខ និងមានសកម្មភាពលះបង់ដើម្បីជួយស្រោចស្រង់គេ។',
    descEn: 'Deep empathy that trembles at the anguish of others and actively moves to alleviate their pain.',
    nearEnemyKm: 'សេចក្តីសោកសៅ & ស្រងាកចិត្ត (Domanassa / Sorrow)',
    nearEnemyEn: 'Grief & Depressive Sorrow (Domanassa)',
    nearEnemyDescKm: 'ការយំសោក ខូចចិត្ត ធ្លាក់ទឹកចិត្តតាមគេ ដែលនាំឱ្យបាត់បង់កម្លាំងជួយសង្គ្រោះ។',
    nearEnemyDescEn: 'Despairing emotional breakdown that paralyzes beneficial action under the guise of pity.',
    farEnemyKm: 'វិហឹសា & ការបៀតបៀន (Vihiṁsā / Cruelty)',
    farEnemyEn: 'Cruelty & Violence (Vihiṁsā)',
    farEnemyDescKm: 'ការធ្វើបាប ជាន់ពន្លិច ឬសប្បាយលើទុក្ខលំបាករបស់អ្នកដទៃ។',
    farEnemyDescEn: 'Active malicious cruelty, schadenfreude, and inflicting harm upon the helpless.'
  },
  {
    id: 'mudita',
    color: '#f59e0b',
    icon: '🎉',
    pali: 'Muditā',
    km: '៣. មុទិតា (Altruistic Joy)',
    en: '3. Muditā (Altruistic Joy)',
    mottoKm: '«ចិត្តត្រេកអររីករាយពេលឃើញអ្នកដទៃបានល្អ»',
    mottoEn: '"Rejoicing unreservedly in the good fortune of others"',
    descKm: 'ការអបអរសាទរដោយស្មោះពីបេះដូង ពេលឃើញគេជោគជ័យ មានទ្រព្យសម្បត្តិ ឬមានសុភមង្គល។',
    descEn: 'Unreserved gladness celebrating the achievements, prosperity, and blessings of fellow beings.',
    nearEnemyKm: 'សេចក្តីសប្បាយបែបលោកិយ & ភ្លើតភ្លើន (Pahāsa)',
    nearEnemyEn: 'Superficial Exhilaration & Frivolity (Pahāsa)',
    nearEnemyDescKm: 'ការសើចសប្បាយបែបភ្លើតភ្លើន លោភលន់ ឬសប្បាយព្រោះបានផលប្រយោជន៍ចូលខ្លួន។',
    nearEnemyDescEn: 'Excited worldly pleasure fueled by personal gain, hedonism, or shallow amusement.',
    farEnemyKm: 'ឥស្សា & ការច្រណែនឈ្នានីស (Issā / Envy)',
    farEnemyEn: 'Jealousy & Envy (Issā)',
    farEnemyDescKm: 'សេចក្តីក្តៅក្រហាយក្នុងទ្រូងពេលឃើញគេបានល្អជាងខ្លួន និងចង់ឱ្យគេរលាយ។',
    farEnemyDescEn: 'Burning envy, bitterness, and resentment at another’s success or happiness.'
  },
  {
    id: 'upekkha',
    color: '#8b5cf6',
    icon: '⚖️',
    pali: 'Upekkhā',
    km: '៤. ឧបេក្ខា (Equanimity)',
    en: '4. Upekkhā (Equanimity)',
    mottoKm: '«ការតម្កល់ចិត្តកណ្តាល មិនលម្អៀង យល់ពីកម្មផល»',
    mottoEn: '"Serene balance of mind anchored in the truth of Kamma"',
    descKm: 'ចិត្តស្ងប់នឹងនរដូចជញ្ជីង មិនលម្អៀងដោយការស្រឡាញ់ ឬការស្អប់ យល់ច្បាស់ថាគ្រប់គ្នាសុទ្ធតែមានកម្មជារបស់ខ្លួន។',
    descEn: 'Unwavering psychological equilibrium, free from preference or prejudice, seeing that all beings are heirs to their deeds.',
    nearEnemyKm: 'អញ្ញាណុបេក្ខា & ការព្រងើយកន្តើយឥតមេត្តា (Ignorance)',
    nearEnemyEn: 'Apathetic Indifference (Aññāṇupekkhā)',
    nearEnemyDescKm: 'ការធ្វើព្រងើយកន្តើយ មិនខ្វល់ពីនរណា ព្រោះតែភាពល្ងង់ខ្លៅ ឬខ្ជិលជួយគេ។',
    nearEnemyDescEn: 'Callous apathy, cold aloofness, and selfish disengagement masquerading as peace.',
    farEnemyKm: 'រាគៈ & បដិឃៈ (Greed & Resentment)',
    farEnemyEn: 'Craving & Agitated Aversion (Rāga & Paṭigha)',
    farEnemyDescKm: 'ចិត្តដែលលម្អៀងខ្លាំងទៅខាងស្រឡាញ់ ឬខាងស្អប់ រសាប់រសល់។',
    farEnemyDescEn: 'Restless turbulence driven by lustful grasping or hostile rejection.'
  }
]
</script>
