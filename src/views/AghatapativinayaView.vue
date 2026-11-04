<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🕊️ {{ t('អង្គុត្តរនិកាយ បញ្ចកនិបាត · អាឃាតបដិវិនយសូត្រ (AN 5.161)', 'Aṅguttara Nikāya 5.161 · Āghātapaṭivinaya Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('វិធីរម្ងាប់កំហឹង ៥ យ៉ាង (អាឃាតបដិវិន័យ)', '5 Ways of Subduing Resentment & Anger') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'នៅពេលសេចក្ដីគុំកួន កំហឹង ឬការមិនពេញចិត្តកើតឡើងចំពោះបុគ្គលណាម្នាក់ ព្រះសារីបុត្តត្ថេរបានសម្ដែងនូវវិធីសាស្ត្រផ្លូវចិត្ត ៥ យ៉ាង ដើម្បីរំលត់ភ្លើងកំហឹងនោះភ្លាមៗ កុំឱ្យដុតបំផ្លាញសេចក្ដីសុខខ្លួនឯង។',
            'When anger, resentment, or ill-will arises toward someone who has wronged you, the Venerable Sāriputta taught these five proven psychological techniques to instantly extinguish the flame of anger before it burns down your own peace.'
          ) }}
        </p>
      </div>
    </section>

    <!-- Navigation Tabs -->
    <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none touch-pan-x">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        class="lang-pick px-3.5 py-1.5 text-xs font-semibold shrink-0 whitespace-nowrap"
        :class="activeTab === tab.id ? 'on' : ''"
      >
        <span>{{ tab.icon }}</span>
        <span>{{ t(tab.titleK, tab.titleE) }}</span>
      </button>
    </div>

    <!-- TAB 1: 5 Ways to Subdue Anger -->
    <section v-if="activeTab === 'methods'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(m, idx) in methods"
          :key="m.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ m.icon }}
              </span>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold"
                    :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                {{ t('វិធីទី', 'Method') }} {{ idx + 1 }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ t(m.titleK, m.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-2" :style="{ color: 'var(--accent)' }">
              {{ m.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(m.descK, m.descE) }}
            </p>

            <div class="p-3 rounded-xl mb-3 text-xs space-y-1.5" :style="{ background: 'var(--bg-card-2)' }">
              <div class="font-semibold flex items-center gap-1.5" :style="{ color: 'var(--accent)' }">
                <span>💭</span>
                <span>{{ t('គន្លឹះរំឭកចិត្ត៖', 'Mental Reframing Mantra:') }}</span>
              </div>
              <p class="italic font-serif" :style="{ color: 'var(--ink)' }">« {{ t(m.mantraK, m.mantraE) }} »</p>
            </div>
          </div>

          <div class="pt-3 border-t text-xs font-medium" :style="{ borderColor: 'var(--border)', color: 'var(--ink-soft)' }">
            {{ t(m.noteK, m.noteE) }}
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 2: The Cattle Footprint Simile (ឧបមាទឹកក្នុងស្នាមជើងគោ) -->
    <section v-if="activeTab === 'simile'" class="card-paper p-6 space-y-5">
      <div class="text-center max-w-xl mx-auto space-y-2">
        <span class="text-3xl">🐾</span>
        <h2 class="text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('ឧបមាទឹកក្នុងស្នាមជើងគោ (The Cattle-Footprint Simile)', 'The Cattle-Footprint Simile of AN 5.162') }}
        </h2>
        <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ព្រះសារីបុត្តពន្យល់ថា មនុស្សក្នុងលោកមាន ៥ ជំពូក។ គ្មាននរណាល្អឥតខ្ចោះទេ ដូច្នេះត្រូវចេះរើសមើលចំណុចល្អដែលគេនៅសល់ ប្រៀបដូចអ្នកស្រេកទឹកកណ្ដាលវាលខ្សាច់ ឃើញទឹកតិចតួចក្នុងស្នាមជើងគោក៏លុតជង្គង់ក្រេបយក។',
            'Venerable Sāriputta taught that people belong to five categories. No ordinary mortal is flawless; we must seek whatever wholesome virtue remains in them, like a parched traveler crouching down to sip clean rainwater from a cattle footprint.'
          ) }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
        <div v-for="person in personTypes" :key="person.id" class="p-4 rounded-2xl border space-y-2"
             :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2 font-bold" :style="{ color: 'var(--accent)' }">
            <span>{{ person.icon }}</span>
            <span>{{ t(person.titleK, person.titleE) }}</span>
          </div>
          <p :style="{ color: 'var(--ink-muted)' }">{{ t(person.descK, person.descE) }}</p>
          <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 font-medium">
            <span>💡 {{ t('វិធីដោះស្រាយ៖ ', 'Solution: ') }}</span>
            <span>{{ t(person.solutionK, person.solutionE) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 3: Emergency Anger Rescue Drill -->
    <section v-if="activeTab === 'drill'" class="card-paper p-6 space-y-6">
      <div class="max-w-2xl mx-auto space-y-4">
        <div class="text-center space-y-2">
          <span class="text-3xl">🧯</span>
          <h2 class="text-xl font-bold font-serif text-red-600">
            {{ t('ជំហានសង្គ្រោះបន្ទាន់ពេលកំហឹងផ្ទុះឡើង (Anger Emergency Drill)', 'Emergency 3-Step Anger Drill') }}
          </h2>
          <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
            {{ t('អនុវត្ត ៣ ជំហាននេះភ្លាមៗ ពេលអារម្មណ៍មួម៉ៅចាប់ផ្ដើមក្ដៅឡើងក្នុងទ្រូង៖', 'Apply these three instant actions the moment heat flares in your chest:') }}
          </p>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-2xl border flex items-start gap-3"
               :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <span class="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 bg-red-100 text-red-600 dark:bg-red-950/60">
              ១
            </span>
            <div class="text-xs sm:text-sm">
              <h4 class="font-bold mb-1" :style="{ color: 'var(--ink)' }">
                {{ t('បិទមាត់ភ្លាម (បញ្ឈប់ប្រតិកម្មវាចា)', 'Bite Your Tongue: Complete Verbal Silence') }}
              </h4>
              <p :style="{ color: 'var(--ink-muted)' }">
                {{ t('កុំតបតសារ ឬនិយាយអ្វីទាំងអស់ពេលកំពុងខឹង។ ពាក្យសម្ដីដែលចេញមកពេលខឹង ៩៩% គឺខុស និងបំផ្លាញទំនាក់ទំនង។', 'Never send a message or speak while angry. 99% of words spoken in rage cause devastating regret.') }}
              </p>
            </div>
          </div>

          <div class="p-4 rounded-2xl border flex items-start gap-3"
               :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <span class="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 bg-amber-100 text-amber-600 dark:bg-amber-950/60">
              ២
            </span>
            <div class="text-xs sm:text-sm">
              <h4 class="font-bold mb-1" :style="{ color: 'var(--ink)' }">
                {{ t('ដកដង្ហើមវែងៗ ៥ ដង (ដឹងអារម្មណ៍កាយ)', 'Take 5 Slow Breaths: Anchor to the Body') }}
              </h4>
              <p :style="{ color: 'var(--ink-muted)' }">
                {{ t('ផ្ដោតស្មារតីលើបាតជើង ឬខ្យល់ដង្ហើមចេញចូល ដើម្បីទាញថាមពលកម្ដៅចេញពីខួរក្បាល។', 'Feel the physical sensations in your chest or soles of your feet to draw reactive heat away from your head.') }}
              </p>
            </div>
          </div>

          <div class="p-4 rounded-2xl border flex items-start gap-3"
               :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <span class="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60">
              ៣
            </span>
            <div class="text-xs sm:text-sm">
              <h4 class="font-bold mb-1" :style="{ color: 'var(--ink)' }">
                {{ t('រំឭកខ្លួនឯងថា «តើខ្ញុំចង់ផឹកថ្នាំពុល ដើម្បីសង្ឃឹមឱ្យគេឈឺឬ?»', 'Ask: "Do I Drink Poison Expecting Them to Suffer?"') }}
              </h4>
              <p :style="{ color: 'var(--ink-muted)' }">
                {{ t('កំហឹងប្រៀបដូចការចាប់ធ្យូងកំពុងឆេះយកទៅគប់គេ អ្នកដែលរលាកមុនគេគឺដៃយើងផ្ទាល់។', 'Anger is like grasping a red-hot coal with bare hands to throw at someone—the one burned first is yourself.') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
const activeTab = ref('methods')

const tabs = [
  { id: 'methods', icon: '🕊️', titleK: 'វិធីរម្ងាប់ ៥ យ៉ាង (5 Methods)', titleE: '5 Ways to Subdue Anger' },
  { id: 'simile', icon: '🐾', titleK: 'ឧបមាទឹកស្នាមជើងគោ (The Simile)', titleE: 'Cattle Footprint Simile' },
  { id: 'drill', icon: '🧯', titleK: 'ជំហានសង្គ្រោះបន្ទាន់ (Anger Drill)', titleE: 'Emergency Drill' }
]

const methods = [
  {
    id: 'metta',
    icon: '🌸',
    titleK: '១. ចម្រើនមេត្តាភាវនា',
    titleE: '1. Cultivate Loving-Kindness (Mettā)',
    pali: 'Mettā tasmiṁ puggale bhāvetabbā',
    descK: 'ផ្សាយចិត្តមេត្តា ប្រាថ្នាឱ្យបុគ្គលនោះបានសុខ ផុតពីទុក្ខ និងក្ដីវង្វេង។ ទឹកត្រជាក់នៃមេត្តាតែងរំលត់ភ្លើងកំហឹង។',
    descE: 'Intentionally radiate wishes of peace and well-being toward that person. The cool water of goodwill extinguishes fire.',
    mantraK: 'សូមឱ្យអ្នកបានសេចក្ដីសុខ ផុតពីទុក្ខកង្វល់ និងមានស្មារតីភ្លឺស្វាង។',
    mantraE: 'May this person find true peace, be free from inner torment, and wake from confusion.',
    noteK: 'ប្រើនៅពេលយើងនៅមានកម្លាំងចិត្តគ្រប់គ្រាន់ដើម្បីផ្សាយក្តីមេត្តា។',
    noteE: 'Ideal when you still have enough inner calm to access genuine benevolence.'
  },
  {
    id: 'karuna',
    icon: '💧',
    titleK: '២. ចម្រើនករុណា (ក្ដីអាណិត)',
    titleE: '2. Cultivate Compassion (Karuṇā)',
    pali: 'Karuṇā tasmiṁ puggale bhāvetabbā',
    descK: 'ពិចារណាឃើញថា បុគ្គលដែលកំពុងធ្វើអាក្រក់មកលើយើង កំពុងតែសាងកម្មធ្ងន់ដែលនឹងនាំឱ្យគេធ្លាក់ក្នុងអបាយភូមិគួរឱ្យអាណិត។',
    descE: 'Reflect that by their cruel actions, they are blindly planting seeds of deep future misery for themselves.',
    mantraK: 'បុគ្គលនេះគួរឱ្យអាណិតណាស់ គេកំពុងដុតបំផ្លាញជីវិតខ្លួនឯងដោយសារអវិជ្ជា។',
    mantraE: 'This poor soul is severely wounded by ignorance, piling torment onto their own future.',
    noteK: 'ប្ដូរពីអារម្មណ៍ខឹងស្អប់ មកជាអារម្មណ៍សង្វេគអាណិតដល់ជនដែលល្ងង់ខ្លៅ។',
    noteE: 'Shifts perspective from victimhood to mature, compassionate pity.'
  },
  {
    id: 'upekkha',
    icon: '⚖️',
    titleK: '៣. ចម្រើនឧបេក្ខា (ការតាំងចិត្តជាកណ្ដាល)',
    titleE: '3. Cultivate Equanimity (Upekkhā)',
    pali: 'Upekkhā tasmiṁ puggale bhāvetabbā',
    descK: 'ដកចិត្តចេញពីអារម្មណ៍ជាប់ជំពាក់ មិនត្រេកអរ មិនខឹងសម្បារ ទុកឱ្យរឿងរ៉ាវកន្លងផុតទៅតាមដំណើរធម្មជាតិ។',
    descE: 'Step back emotionally. Maintain unshakeable neutrality, refusing to let another person dictate your mood.',
    mantraK: 'រឿងនេះបានកើតឡើងហើយ វានឹងកន្លងផុតទៅវិញ គ្មានអ្វីស្ថិតស្ថេរឡើយ។',
    mantraE: 'This event has arisen; it is conditioned; it will pass away. I remain centered.',
    noteK: 'ប្រើនៅពេលកំហឹងខ្លាំងពេក រហូតដល់មិនអាចផ្សាយមេត្តាបាន គឺត្រូវនៅស្ងៀម។',
    noteE: 'Crucial when emotional fire is too intense for mettā; stillness protects your boundaries.'
  },
  {
    id: 'asati',
    icon: '🍃',
    titleK: '៤. ការមិនយកចិត្តទុកដាក់ (បំភ្លេចចោល)',
    titleE: '4. Unmindfulness / Disregard (Asati)',
    pali: 'Asati amanasi-kāro āpajjitabbo',
    descK: 'មិនរំឭក មិនគិតសារឡើងវិញ មិនបន្តសាច់រឿង ធ្វើមិនដឹងមិនឮចំពោះទង្វើអាក្រក់របស់គេ។',
    descE: 'Refuse to replay the video in your head. Do not feed the grievance with mental repetition; ignore it totally.',
    mantraK: 'ខ្ញុំមិនយកសំរាមរបស់អ្នកដទៃ មកដាក់ក្នុងបន្ទប់បេះដូងរបស់ខ្ញុំឡើយ។',
    mantraE: 'I refuse to store someone else’s toxic trash inside the temple of my mind.',
    noteK: 'កាត់ផ្ដាច់ចំណីនៃកំហឹង ដោយការមិនគិតដល់វាទៀត។',
    noteE: 'Starves anger by denying it the fuel of obsessive mental rumination.'
  },
  {
    id: 'kammassakata',
    icon: '☸️',
    titleK: '៥. ពិចារណាកម្មសកតាបញ្ញា (កម្មជារបស់ខ្លួន)',
    titleE: '5. Reflect on Ownership of Kamma',
    pali: 'Kammassakatā tasmiṁ puggale adhiṭṭhātabbā',
    descK: 'ពិចារណាថា «គេជាម្ចាស់នៃកម្មរបស់គេ គេធ្វើអាក្រក់ គេនឹងទទួលផលអាក្រក់នោះដោយខ្លួនឯង ចំណែកខ្ញុំ បើខ្ញុំខឹង ខ្ញុំជាអ្នកទទួលផលបាបវិញ»។',
    descE: 'Contemplate: "They are the owner of their deeds, heir to their actions. If I react in anger, I become the owner of evil kamma myself."',
    mantraK: 'គេធ្វើអំពើណា គេនឹងទទួលផលនោះ ចំណែកខ្ញុំ ខ្ញុំជ្រើសរើសរក្សាចិត្តស្អាត។',
    mantraE: 'They inherit their deeds; I inherit mine. I choose virtue and peace.',
    noteK: 'នេះជាវិធីសាស្ត្រមុតស្រួចបំផុតដែលផ្អែកលើច្បាប់កម្មផលដ៏ពិតប្រាកដ។',
    noteE: 'The ultimate reality-anchor grounded in the iron law of cause and effect.'
  }
]

const personTypes = [
  {
    id: 'p1',
    icon: '🗣️',
    titleK: '១. មនុស្សកាយវិការមិនស្អាត តែសម្ដីល្អ',
    titleE: '1. Impure in actions, but pure in speech',
    descK: 'មនុស្សខ្លះធ្វើកិច្ចការឆ្គង តែសម្ដីផ្អែមល្ហែម សុភាពរាបសារ និងចេះគួរស្រឡាញ់។',
    descE: 'A person whose physical habits are flawed, but whose spoken words are kind, gentle, and courteous.',
    solutionK: 'កុំមើលទង្វើឆ្គងរបស់គេ ត្រូវមើលនិងស្ដាប់តែសម្ដីល្អរបស់គេ ដើម្បីកុំឱ្យកើតកំហឹង។',
    solutionE: 'Ignore their bodily clumsiness; focus on their gentle speech to extinguish irritation.'
  },
  {
    id: 'p2',
    icon: '🤝',
    titleK: '២. មនុស្សសម្ដីមិនល្អ តែទង្វើល្អស្អាតស្អំ',
    titleE: '2. Impure in speech, but pure in bodily actions',
    descK: 'មនុស្សខ្លះមាត់រឹង និយាយទ្រគោះបោះបោក តែចិត្តល្អ ឧស្សាហ៍ជួយយកអាសា និងស្មោះត្រង់។',
    descE: 'A person with rough, sharp speech who nonetheless performs selfless, generous, and reliable deeds.',
    solutionK: 'កុំយកទោសពៃរ៍នឹងសម្ដីអាក្រក់របស់គេ ត្រូវមើលអំពើល្អដែលគេបានជួយយើង។',
    solutionE: 'Disregard their blunt tone; appreciate their steadfast helpfulness and integrity.'
  },
  {
    id: 'p3',
    icon: '🌱',
    titleK: '៣. មនុស្សកាយសម្ដីមិនល្អ តែយូរៗម្ដងមានចិត្តស្ងប់',
    titleE: '3. Rough in body and speech, yet occasional inner calm',
    descK: 'មនុស្សខ្លះកាយវិការនិងសម្ដីសុទ្ធតែខ្វះខាត តែពេលខ្លះគេមានចិត្តជ្រះថ្លាធ្វើបុណ្យ ឬស្តាប់ធម៌។',
    descE: 'A person flawed in speech and action, yet who occasionally experiences moments of remorse and spiritual openness.',
    solutionK: 'ប្រៀបដូចអ្នកស្រេកទឹក ឃើញទឹកបន្តិចក្នុងស្នាមជើងគោ ត្រូវលុតជង្គង់ក្រេបយកកុំឱ្យកករ។',
    solutionE: 'Like sipping precious water from a footprint, focus on their rare moment of goodness.'
  },
  {
    id: 'p4',
    icon: '💎',
    titleK: '៤. មនុស្សល្អទាំងកាយ សម្ដី និងចិត្ត',
    titleE: '4. Pure in body, speech, and mind',
    descK: 'ជាកល្យាណមិត្តដ៏កម្រ មានសីលធម៌បរិសុទ្ធ និយាយពិរោះ និងចិត្តពោរពេញដោយមេត្តា។',
    descE: 'A rare noble soul possessing pure habits, uplifting speech, and an untainted heart.',
    solutionK: 'គួរចូលទៅជិត សេពគប់ រាប់អាន និងយកគំរូតាមដោយក្តីគោរព។',
    solutionE: 'Associate with them frequently, honor their presence, and emulate their noble conduct.'
  }
]
</script>
