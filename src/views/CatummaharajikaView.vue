<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>👑 {{ t('ទីឃនិកាយ បាដិកវគ្គ · អាដានាដិយសូត្រ (DN 32)', 'Dīgha Nikāya 32 · Āṭānāṭiya Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('ចាតុម្មហារាជិកា និងស្ដេចមហារាជ ៤ ទិស', 'The 4 Heavenly Kings (Cātummahārājikā)') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ចាតុម្មហារាជិកា គឺជាឋានសួគ៌ជាន់ទី ១ ក្នុងកាមភព ដែលគ្រប់គ្រងដោយស្ដេចទេវតាធំៗ ៤ អង្គនៅទិសទាំង ៤ (ធតរដ្ឋ វិរុឡ្ហក វិរូបក្ខ វេស្សវ័ណ)។ ក្នុងគម្ពីរអាដានាដិយសូត្រ ស្ដេចទាំង ៤ បានថ្វាយនូវធម៌បរិត្តការពារសន្តិសុខដល់អ្នកប្រតិបត្តិធម៌។ ទេវតានឹងតាមថែរក្សាការពារ លុះត្រាតែមនុស្សនោះមានសីល ៥ បរិសុទ្ធ និងមានសេចក្តីកត្តញ្ញូចំពោះមាតាបិតា។',
            'Cātummahārājikā is the first celestial realm, governed by the Four Great Heavenly Kings protecting the cardinal directions. In the Āṭānāṭiya Sutta, they offered protective parittas for earnest practitioners. Celestial protection is not granted through superstitious rituals, but naturally shields those anchored in the 5 Precepts, filial piety, and loving-kindness.'
          ) }}
        </p>
      </div>
    </section>

    <!-- 4 Kings Grid -->
    <section class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="k in kings"
          :key="k.id"
          class="card-paper p-6 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ k.icon }}
              </span>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold"
                    :class="k.badgeClass">
                {{ t(k.directionK, k.directionE) }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ t(k.titleK, k.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-2" :style="{ color: 'var(--accent)' }">
              {{ k.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(k.descK, k.descE) }}
            </p>

            <div class="p-3.5 rounded-2xl border space-y-1.5 text-xs mb-3"
                 :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
              <span class="font-semibold text-amber-600">🛡️ {{ t('បរិវារ & អាណាខេត្ត៖', 'Retinue & Domain:') }}</span>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(k.retinueK, k.retinueE) }}</p>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 text-xs">
            <strong>✨ {{ t('គុណធម៌ដែលត្រូវការពារ៖ ', 'Protected Virtues: ') }}</strong>
            <span>{{ t(k.virtueK, k.virtueE) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Who Do the Devas Protect? -->
    <section class="card-paper p-6 space-y-4 border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
      <div class="text-center max-w-xl mx-auto space-y-2">
        <span class="text-3xl">🕊️</span>
        <h3 class="text-lg font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('តើទេវតាថែរក្សាមនុស្សបែបណា? (Who Do Devas Guard?)', 'Who Do Celestial Guardians Protect?') }}
        </h3>
        <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ព្រះសម្មាសម្ពុទ្ធទ្រង់សម្ដែងថា ទេវតាទាំងឡាយមិនមែនការពារអ្នកសែនព្រេន ឬអ្នកបួងសួងឡើយ តែលោកតាមរក្សាអ្នកដែលមានគុណធម៌ ៤ យ៉ាងនេះ៖', 'The Buddha explained that celestial beings do not protect people based on superstitious sacrifices, but naturally gravitate toward those living these 4 virtues:') }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
        <div class="p-4 rounded-2xl border space-y-1" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <span class="font-bold text-emerald-600">១. អ្នកមានសីល ៥ បរិសុទ្ធ</span>
          <p :style="{ color: 'var(--ink-muted)' }">
            {{ t('មិនសម្លាប់ មិនលួច មិនក្បត់ចិត្ត មិនកុហក មិនផឹកស្រា ទេវតាតែងចុះមកថ្វាយបង្គំព្រោះមានក្លិនសីលក្រអូប។', 'The 5 Precepts: Devas revere the fragrant moral aura of harmlessness and sobriety.') }}
          </p>
        </div>

        <div class="p-4 rounded-2xl border space-y-1" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <span class="font-bold text-amber-600">២. អ្នកមានកត្តញ្ញូចំពោះឪពុកម្តាយ</span>
          <p :style="{ color: 'var(--ink-muted)' }">
            {{ t('កូនដែលចិញ្ចឹមបីបាច់ថែរក្សាអ្នកមានគុណ ទេវតានឹងតាមជួយការពារគ្រប់ជំហាន មិនឱ្យធ្លាក់ក្នុងគ្រោះថ្នាក់។', 'Filial piety: Children caring for elderly parents are enveloped in protective celestial blessing.') }}
          </p>
        </div>

        <div class="p-4 rounded-2xl border space-y-1" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <span class="font-bold text-sky-600">៣. អ្នកចម្រើនមេត្តាភាវនា</span>
          <p :style="{ color: 'var(--ink-muted)' }">
            {{ t('អ្នកដែលផ្សាយក្ដីស្រឡាញ់ដល់មនុស្សនិងសត្វទាំងអស់ ទៅទីណាក៏មានមនុស្សស្រឡាញ់ និងទេវតាការពារ។', 'Radiating Loving-Kindness: Hearts filled with universal goodwill naturally disarm hostility.') }}
          </p>
        </div>

        <div class="p-4 rounded-2xl border space-y-1" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <span class="font-bold text-violet-600">៤. អ្នកចែករំលែកបុណ្យ (ឧទ្ទិសកុសល)</span>
          <p :style="{ color: 'var(--ink-muted)' }">
            {{ t('ក្រោយពេលធ្វើបុណ្យ តែងឧទ្ទិសបុណ្យជូនទេវតារក្សាផ្ទះ រក្សាស្រុក និងពពួកអមនុស្ស។', 'Pattidāna: Sharing merits with guardian spirits inspires them to guard your family diligently.') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const kings = [
  {
    id: 'dhatarattha',
    icon: '🎻',
    directionK: 'ទិសខាងកើត (បុរត្ថិមទិស)',
    directionE: 'East Direction',
    badgeClass: 'text-amber-600 bg-amber-100 dark:bg-amber-950/40',
    titleK: '១. ព្រះបាទធតរដ្ឋ (ស្ដេចគន្ធព្វ)',
    titleE: '1. King Dhataraṭṭha',
    pali: 'Dhataraṭṭho mahārājā puratthimadisāpati',
    descK: 'ជាស្ដេចធំគ្រប់គ្រងទិសបូព៌ា (ខាងកើត) ជាអធិបតីលើពពួកគន្ធព្វ (ទេវតាអ្នកចម្រៀង និងទេវតាក្លិនក្រអូបក្នុងព្រៃហេមពាន្ត)។',
    descE: 'Great King of the Eastern quarter; ruler over the Gandhabbas (celestial musicians and fragrant deities).',
    retinueK: 'ពពួកគន្ធព្វ ទេវតាអ្នកលេងតន្ត្រី និងអ្នកថែរក្សាព្រៃព្រឹក្សា។',
    retinueE: 'Gandhabba musicians and forest devas.',
    virtueK: 'ការពារអ្នកដែលមានពាក្យសម្ដីពិរោះ សុភាពរាបសារ និងមានសិល្បៈធម៌។',
    virtueE: 'Guards those endowed with gentle speech and harmonious goodwill.'
  },
  {
    id: 'virulhaka',
    icon: '🛡️',
    directionK: 'ទិសខាងត្បូង (ទក្ខិណទិស)',
    directionE: 'South Direction',
    badgeClass: 'text-sky-600 bg-sky-100 dark:bg-sky-950/40',
    titleK: '២. ព្រះបាទវិរុឡ្ហក (ស្ដេចកុម្ភណ្ឌ)',
    titleE: '2. King Virūḷhaka',
    pali: 'Virūḷhako mahārājā dakkhiṇamadisāpati',
    descK: 'ជាស្ដេចធំគ្រប់គ្រងទិសទក្សិណ (ខាងត្បូង) ជាអធិបតីលើពពួកកុម្ភណ្ឌ (ទេវតាអ្នកថែរក្សាផែនដី ទឹកដី និងភ្នំ)។',
    descE: 'Great King of the Southern quarter; sovereign over the Kumbhaṇḍa earth guardians.',
    retinueK: 'ពពួកកុម្ភណ្ឌ ទេវតារក្សាផែនដី និងធនធានធម្មជាតិ។',
    retinueE: 'Kumbhaṇḍa spirits safeguarding the soil and natural foundations.',
    virtueK: 'ការពារអ្នកដែលមានចិត្តស្មោះត្រង់ មិនកេងប្រវ័ញ្ចដីធ្លី និងថែរក្សាបរិស្ថាន។',
    virtueE: 'Guards those who act with environmental reverence and fairness in land.'
  },
  {
    id: 'virupakkha',
    icon: '🐉',
    directionK: 'ទិសខាងលិច (បច្ឆិមទិស)',
    directionE: 'West Direction',
    badgeClass: 'text-red-600 bg-red-100 dark:bg-red-950/40',
    titleK: '៣. ព្រះបាទវិរូបក្ខ (ស្ដេចនាគរាជ)',
    titleE: '3. King Virūpakkha',
    pali: 'Virūpakkho mahārājā pacchimamadisāpati',
    descK: 'ជាស្ដេចធំគ្រប់គ្រងទិសបស្ចិម (ខាងលិច) ជាអធិបតីលើពពួកនាគរាជ និងទេវតាអ្នកថែរក្សាទឹក សមុទ្រ និងបឹងបួរ។',
    descE: 'Great King of the Western quarter; lord over the Nāgas (dragons) and water realms.',
    retinueK: 'ពពួកនាគរាជទាំង ៤ ត្រកូល (វិរូបក្ខ, ឯរាបថ, ឆព្យាបុត្ត, កណ្ហគោតមក)។',
    retinueE: 'The four royal Nāga families governing water and atmospheric realms.',
    virtueK: 'ការពារអ្នកដែលមានចិត្តត្រជាក់ មិនមានពិសពុលកំហឹង និងចម្រើនមេត្តា។',
    virtueE: 'Guards those free from venomous rage and radiating cooling loving-kindness.'
  },
  {
    id: 'vessavana',
    icon: '👑',
    directionK: 'ទិសខាងជើង (ឧត្តរទិស)',
    directionE: 'North Direction',
    badgeClass: 'text-amber-500 bg-amber-50 dark:bg-amber-950/30',
    titleK: '៤. ព្រះបាទវេស្សវ័ណ ឬកុវេរបតិ (ស្ដេចយក្ខ)',
    titleE: '4. King Vessavaṇa (Kuvera)',
    pali: 'Vessavaṇo mahārājā uttaramadisāpati',
    descK: 'ជាស្ដេចធំគ្រប់គ្រងទិសឧត្តរ (ខាងជើង) ជាមេដឹកនាំកំពូលនៃស្ដេចទាំង ៤ ជាអ្នកថែរក្សាទ្រព្យសម្បត្តិពិភពលោក និងជាអធិបតីលើពពួកយក្ខ។',
    descE: 'Great King of the Northern quarter; paramount sovereign among the Four Kings and guardian of the world’s wealth.',
    retinueK: 'ពពួកយក្ខ ទេវតាអ្នកមានឫទ្ធិ និងអ្នកថែរក្សាកំណប់ទ្រព្យ។',
    retinueE: 'Mighty Yakkha hosts and divine protectors of material prosperity.',
    virtueK: 'ការពារអ្នកដែលចេះចែករំលែកទាន រកស៊ីសុចរិត និងគោរពព្រះសង្ឃ។',
    virtueE: 'Guards generous givers, honest business creators, and protectors of the Triple Gem.'
  }
]
</script>
