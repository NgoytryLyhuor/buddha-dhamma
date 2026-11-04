<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🕯️ {{ t('អង្គុត្តរនិកាយ ចតុក្កនិបាត · បុគ្គលសូត្រ (AN 4.85)', 'Aṅguttara Nikāya 4.85 · Puggala Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('បុគ្គល ៤ ជំពូកក្នុងលោក (ដំណើរពីងងឹតទៅពន្លឺ)', 'The 4 Types of Persons: From Darkness to Light') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ព្រះសម្មាសម្ពុទ្ធទ្រង់ចែកមនុស្សលោកជា ៤ ជំពូក តាមដំណើរជីវិត និងជម្រើសនៃកម្ម៖ អ្នកខ្លះកើតមកលំបាក ហើយស្លាប់ទៅអាក្រក់វិញ; អ្នកខ្លះកើតមកលំបាក តែសាងខ្លួនរហូតភ្លឺស្វាង; អ្នកខ្លះកើតមកស្រួល បែរជាធ្លាក់ខ្លួនព្រោះសេចក្តីប្រហែស; ហើយអ្នកខ្លះកើតមកស្រួល ហើយកាន់តែរុងរឿង។ ជោគវាសនាមិនអាស្រ័យលើត្រកូលកំណើតទេ គឺអាស្រ័យលើអំពើដែលយើងជ្រើសរើសធ្វើរាល់ថ្ងៃ។',
            'The Buddha categorized human destiny into four paths based on moral choices: some move from darkness to darkness; some rise from darkness to radiant light; some squander privilege from light into ruin; and some travel from light to even higher light. Destiny is not dictated by birth, but forged by present deeds.'
          ) }}
        </p>
      </div>
    </section>

    <!-- 4 Types Grid -->
    <section class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="p in puggalaList"
          :key="p.id"
          class="card-paper p-6 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ p.icon }}
              </span>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold"
                    :class="p.badgeClass">
                {{ t(p.trajectoryK, p.trajectoryE) }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ t(p.titleK, p.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-3" :style="{ color: 'var(--accent)' }">
              {{ p.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(p.descK, p.descE) }}
            </p>

            <div class="p-3.5 rounded-2xl border space-y-2 text-xs" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
              <div class="font-semibold" :style="{ color: 'var(--accent)' }">
                {{ t('ដំណើរជីវិត៖', 'Life Path:') }}
              </div>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(p.storyK, p.storyE) }}</p>
            </div>
          </div>

          <div class="pt-4 mt-4 border-t text-xs font-semibold flex items-center gap-1.5"
               :class="p.moralClass"
               :style="{ borderColor: 'var(--border)' }">
            <span>💡 {{ t('មេរៀនជីវិត៖ ', 'Life Lesson: ') }}</span>
            <span>{{ t(p.moralK, p.moralE) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Summary Reflection Box -->
    <section class="card-paper p-6 sm:p-8 space-y-4 text-center max-w-2xl mx-auto border"
             :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
      <span class="text-3xl">☸️</span>
      <h3 class="text-lg font-bold font-serif" :style="{ color: 'var(--ink)' }">
        {{ t('សារដាស់តឿនពីព្រះសម្មាសម្ពុទ្ធ', 'The Buddha’s Inspiring Message') }}
      </h3>
      <p class="text-xs sm:text-sm leading-relaxed italic font-serif" :style="{ color: 'var(--ink-muted)' }">
        {{ t(
          '« មនុស្សយើងមិនអាចជ្រើសរើសកន្លែងកើតបានទេ តែយើងអាចជ្រើសរើសរបៀបរស់នៅ និងរបៀបស្លាប់បាន។ បើកើតមកក្នុងភាពងងឹត ចូរកុំបន្ទោសវាសនា ចូរយកសីលធម៌ ការព្យាយាម និងបញ្ញា ធ្វើជាចង្កៀងបំភ្លឺផ្លូវ នោះយើងនឹងក្លាយជាអ្នកដើរពី «ងងឹត ទៅរកពន្លឺ» ដ៏ឧត្តុង្គឧត្តម។ »',
          '"We cannot choose where we are born, but we can fully choose how we live and how we leave this world. Even if born in darkness, blame not fate. Pick up virtue, diligence, and wisdom as your guiding lamp, and you will walk nobly from darkness into enduring light."'
        ) }}
      </p>
    </section>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const puggalaList = [
  {
    id: 'tamo-tamo',
    icon: '🌑',
    trajectoryK: 'ងងឹត ទៅ ងងឹត',
    trajectoryE: 'Dark to Dark',
    badgeClass: 'text-red-600 bg-red-100 dark:bg-red-950/40',
    titleK: '១. តមោតមបរាយនោ (កើតមកងងឹត ស្លាប់ទៅងងឹត)',
    titleE: '1. Tamotamo (Darkness to Darkness)',
    pali: 'Tamo tamaparāyano puggalo',
    descK: 'កើតមកក្នុងត្រកូលក្រីក្រ លំបាក តោកយ៉ាក ឬមានពិការភាពខ្វះមុខខ្វះក្រោយ ហើយបែរជាប្រព្រឹត្តអំពើទុច្ចរិត លួចប្លន់ កុហក ឆបោក និងផឹកស៊ីបំផ្លាញខ្លួន។',
    descE: 'Born into poverty, deprivation, or physical hardship, yet chooses to engage in dishonesty, theft, hostility, and harmful habits.',
    storyK: 'ព្រោះតែភាពក្រខ្សត់ គេគិតខ្លី បង្កើតទោសកំហុសលើសង្គម ធ្វើឱ្យជីវិតបច្ចុប្បន្នកាន់តែធ្លាក់ដុនដាប ហើយស្លាប់ទៅត្រូវរងទុក្ខក្នុងទុគ្គតិភពទៀត។',
    storyE: 'Reacting bitterly to hardship, they surrender to crime and anger, drowning their present life in misery and plunging into lower realms.',
    moralK: 'កុំឱ្យភាពក្រក្រីខាងសម្ភារៈ មកបង្ខំឱ្យយើងក្លាយជាមនុស្សក្រសីលធម៌ឡើយ។',
    moralE: 'Never allow material hardship to become an excuse for spiritual bankruptcy.',
    moralClass: 'text-red-500'
  },
  {
    id: 'tamo-joti',
    icon: '🌅',
    trajectoryK: 'ងងឹត ទៅ ភ្លឺ',
    trajectoryE: 'Dark to Light',
    badgeClass: 'text-emerald-600 bg-emerald-100 dark:bg-emerald-950/40',
    titleK: '២. តមោជោតិបរាយនោ (កើតមកងងឹត ស្លាប់ទៅភ្លឺស្វាង)',
    titleE: '2. Tamojotī (Darkness to Radiant Light)',
    pali: 'Tamo jotiparāyano puggalo',
    descK: 'កើតមកក្នុងត្រកូលទ័លក្រ លំបាកវេទនា ឬគ្មានឱកាសល្អពីកំណើត តែជាមនុស្សមានសីលធម៌ ស្មោះត្រង់ ឧស្សាហ៍ព្យាយាម ចេះចែករំលែក និងរៀនសូត្រធម៌។',
    descE: 'Born into humble poverty or acute disadvantage, yet chooses unshakeable integrity, diligence, kindness, patience, and learning.',
    storyK: 'គេយកការលំបាកធ្វើជាគ្រូបង្រៀន កសាងគុណធម៌ និងចំណេះដឹងរហូតទទួលបានការគោរពស្រឡាញ់ ជីវិតរុងរឿង ហើយស្លាប់ទៅកើតក្នុងសុគតិភព។',
    storyE: 'They use hardship as fuel for spiritual growth, earning widespread love and respect, and departing this world into noble heavenly rebirth.',
    moralK: 'ជាគំរូវីរភាពដ៏ប្រសើរបំផុត មិនចុះចាញ់ព្រហ្មលិខិត កសាងពន្លឺដោយកម្លាំងកុសលផ្ទាល់ខ្លួន។',
    moralE: 'The supreme hero of life who conquers circumstance with moral courage and wisdom.',
    moralClass: 'text-emerald-600'
  },
  {
    id: 'joti-tamo',
    icon: '📉',
    trajectoryK: 'ភ្លឺ ទៅ ងងឹត',
    trajectoryE: 'Light to Dark',
    badgeClass: 'text-amber-600 bg-amber-100 dark:bg-amber-950/40',
    titleK: '៣. ជោតិតមបរាយនោ (កើតមកភ្លឺ ស្លាប់ទៅងងឹត)',
    titleE: '3. Jotitamo (Light to Darkness)',
    pali: 'Joti tamaparāyano puggalo',
    descK: 'កើតមកក្នុងត្រកូលអភិជន អ្នកមានទ្រព្យសម្បត្តិ រូបសម្បត្តិស្អាត និងមានឱកាសខ្ពស់ តែភ្លើតភ្លើននឹងទ្រព្យ ប្រមាទ ក្រអឺតក្រទម មើលងាយអ្នកដទៃ និងប្រព្រឹត្តល្បែងស៊ីសង។',
    descE: 'Blessed with wealth, beauty, prestige, and family privilege, yet becomes intoxicated with pride, arrogance, deceit, and reckless indulgence.',
    storyK: 'គេបំផ្លាញកេរ្តិ៍ឈ្មោះ និងទ្រព្យសម្បត្តិដែលឪពុកម្តាយខំសន្សំ ចុងក្រោយធ្លាក់ខ្លួនឯកោ មានវិប្បដិសារី ហើយស្លាប់ទៅរងកម្មធ្ងន់។',
    storyE: 'Squandering inherited merits, they alienate loved ones, ruin their health, and depart this life in deep regret and spiritual poverty.',
    moralK: 'បុណ្យចាស់ដែលសោយមិនចេះបំពេញបន្ថែម គង់តែនឹងរលាយអស់នៅថ្ងៃណាមួយ។',
    moralE: 'Old merit without new virtue is a spent candle burning out into dark ruin.',
    moralClass: 'text-amber-600'
  },
  {
    id: 'joti-joti',
    icon: '☀️',
    trajectoryK: 'ភ្លឺ ទៅ ភ្លឺ',
    trajectoryE: 'Light to Light',
    badgeClass: 'text-amber-500 bg-amber-50 dark:bg-amber-950/30',
    titleK: '៤. ជោតិជោតិបរាយនោ (កើតមកភ្លឺ ស្លាប់ទៅរឹតតែភ្លឺ)',
    titleE: '4. Jotijotī (Radiant Light to Higher Light)',
    pali: 'Joti jotiparāyano puggalo',
    descK: 'កើតមកមានទ្រព្យ មានរូបស្អាត មានសេចក្ដីសុខស្រាប់ ហើយមិនភ្លើតភ្លើនឡើយ បែរជាមានចិត្តទន់ភ្លន់ យកទ្រព្យមកធ្វើទាន ជួយសង្គម រក្សាសីល និងចម្រើនភាវនា។',
    descE: 'Endowed with fortunate birth and worldly abundance, yet remains humble, using resources to help society, observe precepts, and cultivate wisdom.',
    storyK: 'ជីវិតរបស់គេជាម្លប់ត្រជាក់ដល់មនុស្សជុំវិញខ្លួន គេជាគំរូដ៏ថ្លៃថ្នូរក្នុងសង្គម រស់នៅដោយសេចក្តីស្ងប់ ហើយស្លាប់ទៅកើតក្នុងស្ថានសួគ៌ដ៏ខ្ពង់ខ្ពស់។',
    storyE: 'Their life is a refreshing shade for community, an inspiring beacon of humility, departing into ever-higher celestial liberation.',
    moralK: 'ជាកំពូលបុគ្គលគំរូដែលចេះប្រើប្រាស់សំណាង និងបុណ្យចាស់ ដើម្បីកសាងបុណ្យថ្មីមិនចេះអស់។',
    moralE: 'The master of fortune who transmutes temporal blessing into eternal treasure.',
    moralClass: 'text-amber-500'
  }
]
</script>
