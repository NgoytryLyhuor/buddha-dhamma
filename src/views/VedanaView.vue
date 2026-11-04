<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🌊 {{ t('សំយុត្តនិកាយ សឡាយតនវគ្គ · វេទនាសំយុត្ត (SN 36)', 'Saṁyutta Nikāya 36 · Vedanā Saṁyutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('វេទនា ៥ និង វិជ្ជាគ្រប់គ្រងអារម្មណ៍', 'Vedanā 5 & Emotional Mastery') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'វេទនា គឺជាការទទួលអារម្មណ៍ (រសជាតិនៃអារម្មណ៍)។ មនុស្សភាគច្រើនក្លាយជាទាសករនៃអារម្មណ៍៖ ពេលសប្បាយចិត្ត កើតក្ដីលោភស្អិតជាប់; ពេលពិបាកចិត្ត កើតកំហឹងមួម៉ៅ; ពេលស្មើៗ ធ្លាក់ក្នុងសេចក្តីវង្វេង។ ព្រះពុទ្ធបានបង្រៀនឱ្យយក «សតិ» មកកាត់ចន្លោះរវាងវេទនានិងតណ្ហា ដើម្បីកុំឱ្យអារម្មណ៍គ្រប់គ្រងជីវិតយើងបានទៀត។',
            'Vedanā is the affective feeling-tone of experience. Most mortals are helpless puppets of their feelings: craving pleasant feelings, rebelling against unpleasant feelings, and ignoring neutral ones. By inserting mindful awareness between feeling and reaction, we cut the root of emotional suffering.'
          ) }}
        </p>
      </div>
    </section>

    <!-- 5 Feelings Grid -->
    <section class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="v in vedanaList"
          :key="v.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ v.icon }}
              </span>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold"
                    :class="v.badgeClass">
                {{ t(v.domainK, v.domainE) }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ t(v.titleK, v.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-2" :style="{ color: 'var(--accent)' }">
              {{ v.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(v.descK, v.descE) }}
            </p>

            <div class="p-3 rounded-xl mb-3 text-xs space-y-1" :style="{ background: 'var(--bg-card-2)' }">
              <span class="font-semibold text-red-500">⚠️ {{ t('អន្ទាក់កិលេសលាក់មុខ៖', 'Latent Trap:') }}</span>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(v.trapK, v.trapE) }}</p>
            </div>
          </div>

          <div class="pt-3 border-t text-xs font-semibold text-emerald-600 flex items-center gap-1"
               :style="{ borderColor: 'var(--border)' }">
            <span>💡 {{ t('វិធីសង្កេតដោយសតិ៖ ', 'Mindful Observation: ') }}</span>
            <span>{{ t(v.mindfulK, v.mindfulE) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Formula of Freedom: Breaking the Link -->
    <section class="card-paper p-6 space-y-4 border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
      <div class="text-center max-w-xl mx-auto space-y-2">
        <span class="text-3xl">🔗</span>
        <h3 class="text-lg font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('រូបមន្តរំដោះខ្លួន៖ កាត់ផ្ដាច់ច្រវាក់វេទនា និងតណ្ហា', 'The Liberation Formula: Severing Feeling from Craving') }}
        </h3>
        <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ក្នុងបដិច្ចសមុប្បាទ៖ ផស្សៈ → វេទនា → តណ្ហា (សេចក្ដីស្រេកឃ្លាន) → ទុក្ខ។ កាលណាភ្នែកឃើញ រឺត្រចៀកឮ វេទនាតែងតែកើតឡើងជាធម្មតាជៀសមិនរួច។ ប៉ុន្តែបើយើងមាន «សតិ» ដឹងទាន់ថា «អារម្មណ៍កើតឡើងហើយ រលត់ទៅវិញជាធម្មតា» នោះតណ្ហានឹងមិនអាចកើតឡើងបានឡើយ ទុក្ខក៏ត្រូវបានរំលត់!',
            'In Dependent Origination: Contact → Feeling → Craving → Suffering. Sensory contact inevitably produces feeling. But when mindfulness steps in, recognizing "Feeling is just feeling—impermanent, transient, empty of self," craving cannot take root, and suffering dissolves at its threshold!'
          ) }}
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const vedanaList = [
  {
    id: 'sukha',
    icon: '💆',
    domainK: 'អារម្មណ៍ផ្លូវកាយ',
    domainE: 'Physical Feeling',
    badgeClass: 'text-amber-600 bg-amber-100 dark:bg-amber-950/40',
    titleK: '១. សុខវេទនា (ស្រួលកាយ)',
    titleE: '1. Sukha (Physical Pleasure)',
    pali: 'Kāyikā sukhā vedanā',
    descK: 'ការដឹងនូវភាពស្រណុកសុខស្រួលខាងសរីរាង្គកាយ ដូចជាការងូតទឹកត្រជាក់ គេងលើពូកទន់ ឬខ្យល់បក់ត្រជាក់។',
    descE: 'Pleasurable bodily sensations resulting from comfortable touch, warmth, rest, or agreeable sensory stimulation.',
    trapK: 'រាគានុស័យ (រុញឱ្យកើតក្ដីលោភ ជាប់ជំពាក់ ចង់បានទៀត និងមិនចង់ឱ្យបាត់បង់)។',
    trapE: 'Ignites latent lust and addiction (Rāgānusaya); panic when comfort ends.',
    mindfulK: 'ដឹងថាកាយស្រួល តែមិនស្អិតជាប់ ដឹងថាវាគ្រាន់តែជាអារម្មណ៍បណ្ដោះអាសន្ន។',
    mindfulE: 'Notice the sensation neutrally without craving its continuation.'
  },
  {
    id: 'dukkha',
    icon: '🤕',
    domainK: 'អារម្មណ៍ផ្លូវកាយ',
    domainE: 'Physical Feeling',
    badgeClass: 'text-red-600 bg-red-100 dark:bg-red-950/40',
    titleK: '២. ទុក្ខវេទនា (ឈឺកាយ)',
    titleE: '2. Dukkha (Physical Pain)',
    pali: 'Kāyikā dukkhā vedanā',
    descK: 'ការដឹងនូវការឈឺចាប់ខាងសរីរាង្គកាយ ដូចជាការឈឺក្បាល ឈឺធ្មេញ ត្រូវកម្ដៅក្ដៅខ្លាំង ឬរបួសស្នាម។',
    descE: 'Painful, distressing physical bodily sensations from injury, illness, heat, or exhaustion.',
    trapK: 'បដិឃានុស័យ (រុញឱ្យកើតកំហឹង មួម៉ៅ ត្អូញត្អែរ និងស្អប់ខ្ពើម)។',
    trapE: 'Triggers latent resentment and rage (Paṭighānusaya); desperate panic.',
    mindfulK: 'បំបែកការឈឺកាយចេញពីការឈឺចិត្ត៖ «កាយឈឺ តែចិត្តកុំឈឺតាម!»',
    mindfulE: 'Detach mental anguish from somatic pain: the body aches, but the heart stays calm.'
  },
  {
    id: 'somanassa',
    icon: '😊',
    domainK: 'អារម្មណ៍ផ្លូវចិត្ត',
    domainE: 'Mental Feeling',
    badgeClass: 'text-emerald-600 bg-emerald-100 dark:bg-emerald-950/40',
    titleK: '៣. សោមនស្សវេទនា (សប្បាយចិត្ត)',
    titleE: '3. Somanassa (Mental Joy)',
    pali: 'Cetasikā sukhā vedanā',
    descK: 'ការរីករាយ សប្បាយចិត្ត ត្រេកអរ ពេញចិត្តនឹងអ្វីមួយ ដូចជាការជួបមនុស្សស្រឡាញ់ ឬការជោគជ័យ។',
    descE: 'Mental gladness, joy, pleasure, and emotional satisfaction arising from pleasant experiences.',
    trapK: 'ភ្លើតភ្លើន ភ្លេចខ្លួន គិតថាសេចក្តីសប្បាយនេះនឹងនៅរហូត ក្លាយជាមនុស្សអំនួត។',
    trapE: 'Intoxication, pride, and compulsive clinging to euphoria.',
    mindfulK: 'ញញឹមដឹងច្បាស់ថា «ចិត្តកំពុងរីករាយ» ហើយដឹងថាវាក៏មិនទៀងដែរ។',
    mindfulE: 'Enjoy joy mindfully without possessing it; observe its natural fading.'
  },
  {
    id: 'domanassa',
    icon: '😢',
    domainK: 'អារម្មណ៍ផ្លូវចិត្ត',
    domainE: 'Mental Feeling',
    badgeClass: 'text-violet-600 bg-violet-100 dark:bg-violet-950/40',
    titleK: '៤. ទោមនស្សវេទនា (ពិបាកចិត្ត & កើតទុក្ខ)',
    titleE: '4. Domanassa (Mental Grief)',
    pali: 'Cetasikā dukkhā vedanā',
    descK: 'ការព្រួយបារម្ភ ស្រងាកចិត្ត ពិបាកចិត្ត ខូចចិត្ត ធ្លាក់ទឹកចិត្ត និងក្ដីអស់សង្ឃឹមក្នុងជីវិត។',
    descE: 'Depression, sorrow, grief, anxiety, despair, and mental anguish over unmet desires.',
    trapK: 'គិតអវិជ្ជមាន ធ្វើបាបខ្លួនឯង ចង់សងសឹក ឬធ្លាក់ក្នុងវិប្បដិសារី។',
    trapE: 'Spirals into depression, victimhood, self-harm, or resentful bitterness.',
    mindfulK: 'មើលវាដូចជាពពកខ្មៅបក់កាត់មេឃ មិនមែនជាយើងទេ កុំទៅរុញច្រានវា គង់តែនឹងរលត់ទៅវិញ។',
    mindfulE: 'View sadness like passing storm clouds; do not fight it, allow it to pass.'
  },
  {
    id: 'upekkha',
    icon: '⚖️',
    domainK: 'អារម្មណ៍កណ្ដាល',
    domainE: 'Neutral Feeling',
    badgeClass: 'text-sky-600 bg-sky-100 dark:bg-sky-950/40',
    titleK: '៥. ឧបេក្ខាវេទនា (អារម្មណ៍ស្មើៗ)',
    titleE: '5. Upekkhā (Neutral Feeling)',
    pali: 'Adukkhamasukhā vedanā',
    descK: 'អារម្មណ៍មិនសុខមិនទុក្ខ មិនសប្បាយមិនពិបាក ដូចជាការដើរធម្មតា ឬអារម្មណ៍ស្ងប់ស្ងាត់ទូទៅ។',
    descE: 'Neutral, neither-painful-nor-pleasant feeling that characterizes ordinary baseline awareness.',
    trapK: 'អវិជ្ជានុស័យ (ការវង្វេង ភ្លេចខ្លួន ងងុយដេក ព្រោះគិតថាគ្មានអ្វីកើតឡើង)។',
    trapE: 'Latent ignorance (Avijjānusaya); dullness, boredom, and lethargy.',
    mindfulK: 'បង្កើនការផ្ចង់ស្មារតីដឹងទាន់សភាពស្ងប់កណ្ដាលនេះ ដើម្បីចម្រើនបញ្ញាជ្រៅជ្រះ។',
    mindfulE: 'Anchor keen mindfulness onto subtle neutral states to develop profound insight.'
  }
]
</script>
