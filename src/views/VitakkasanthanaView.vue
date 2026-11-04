<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🧠 {{ t('មជ្ឈិមនិកាយ មូលបណ្ណាសក · វិតក្កសណ្ឋានសូត្រ (MN 20)', 'Majjhima Nikāya 20 · Vitakkasaṇṭhāna Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('វិធីរម្ងាប់គំនិតអាក្រក់ និងការគិតច្រើន ៥ យ៉ាង', '5 Steps to Stop Intrusive & Negative Thoughts') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'នៅពេលចិត្តត្រូវបានយាយីដោយគំនិតអវិជ្ជមាន ការគិតច្រើនហួសហេតុ (Overthinking) គំនិតខឹងស្អប់ ឬគំនិតស្រើបស្រាលដែលពិបាកនឹងបញ្ឈប់ ព្រះពុទ្ធបានប្រទាននូវក្បួនចិត្តសាស្ត្រលំដាប់លំដោយ ៥ ជំហាន ដើម្បីដកគំនិតអាក្រក់ទាំងនោះចេញពីចិត្តឱ្យបានស្ងប់ស្រឡះ។',
            'When the mind is hijacked by obsessive negative thoughts, overthinking, anxiety, or bitter resentment, the Buddha taught this sequential 5-step cognitive framework to master your mind and restore immediate mental calm.'
          ) }}
        </p>
      </div>
    </section>

    <!-- 5 Steps List -->
    <section class="space-y-4">
      <div
        v-for="(s, idx) in steps"
        :key="s.id"
        class="card-paper p-6 transition-all duration-200 border space-y-4"
        :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
      >
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0"
                  :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
              {{ idx + 1 }}
            </span>
            <div>
              <h3 class="font-bold text-base sm:text-lg" :style="{ color: 'var(--ink)' }">
                {{ t(s.titleK, s.titleE) }}
              </h3>
              <span class="text-xs font-mono font-medium" :style="{ color: 'var(--accent)' }">
                {{ s.pali }}
              </span>
            </div>
          </div>
          <span class="text-2xl">{{ s.icon }}</span>
        </div>

        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(s.descK, s.descE) }}
        </p>

        <!-- Buddha's Classic Simile -->
        <div class="p-3.5 rounded-2xl border text-xs space-y-1.5"
             :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="font-semibold flex items-center gap-1.5 text-amber-600">
            <span>🪵</span>
            <span>{{ t('ឧបមាក្នុងព្រះសូត្រ៖', 'The Buddha’s Simile:') }}</span>
          </div>
          <p class="italic font-serif" :style="{ color: 'var(--ink)' }">« {{ t(s.simileK, s.simileE) }} »</p>
        </div>

        <!-- Actionable Tip -->
        <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 text-xs flex items-center gap-2">
          <span>💡</span>
          <div>
            <strong>{{ t('វិធីអនុវត្ត៖ ', 'Action: ') }}</strong>
            <span>{{ t(s.actionK, s.actionE) }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const steps = [
  {
    id: 'step1',
    icon: '🔄',
    titleK: 'ជំហានទី ១៖ ប្ដូរគំនិត (យកគំនិតល្អមកជំនួសភ្លាម)',
    titleE: 'Step 1: Replace with Wholesome Object (Peg Substitution)',
    pali: 'Aññaṁ nimittaṁ manasikaroti',
    descK: 'កាលណាគំនិតអាក្រក់កើតឡើង ត្រូវដកចិត្តចេញពីអារម្មណ៍នោះជាបន្ទាន់ ហើយយកគំនិតកុសល ដូចជាការនឹកគុណព្រះពុទ្ធ ចម្រើនមេត្តា ឬការរាប់ខ្យល់ដង្ហើមមកជំនួសភ្លាម។',
    descE: 'Immediately switch focus from the unwholesome object to an inspiring wholesome theme—such as the virtues of the Buddha, loving-kindness, or mindful breathing.',
    simileK: 'ឧបមាដូចជាងឈើដ៏ប៉ិនប្រសប់ យកស្នៀតឈើតូចថ្មី មកដេញបណ្ដេញស្នៀតឈើចាស់ដែលទ្រុឌទ្រោមចេញ។',
    simileE: 'Like an experienced carpenter knocking out a coarse wooden peg using a fine, sharp peg.',
    actionK: 'ពេលចិត្តចាប់ផ្ដើមខឹង ឬលោភ ចូរស្ដាប់ធម៌ ឬសូត្រធម៌រំឭកគុណភ្លាមៗ ដើម្បីបង្វែរខ្សែគំនិត។',
    actionE: 'Listen to a chant or switch to reciting the Buddha’s virtues to abruptly deflect the train of thought.'
  },
  {
    id: 'step2',
    icon: '⚠️',
    titleK: 'ជំហានទី ២៖ ពិចារណាទោសនៃគំនិតនោះ (សម្លឹងមើលវិបត្តិ)',
    titleE: 'Step 2: Scrutinize the Dangers & Consequences',
    pali: 'Tesaṁ vitakkānaṁ ādīnavaṁ samanupassati',
    descK: 'បើនៅតែគិតមិនឈប់ ចូរពិចារណាទោសថា «គំនិតនេះជាអកុសល នាំឱ្យក្ដៅក្រហាយ នាំឱ្យបាត់បង់ការងារ បំផ្លាញសុខភាព និងនាំឱ្យធ្លាក់នរក»។',
    descE: 'If the thought persists, inspect its inevitable toxicity: "This thought breeds distress, ruins relationships, weakens my mind, and leads to regret."',
    simileK: 'ឧបមាដូចបុរសឬស្ត្រីដែលស្រឡាញ់ភាពស្អាតបាត ស្រាប់តែត្រូវគេយកសាកសពពស់ ឬសាកសពឆ្កែស្អុយរលួយ មកបំពាក់លើកញ្ចឹងក តែងខ្ពើមរអើមហើយប្រញាប់ដោះចេញជាបន្ទាន់។',
    simileE: 'Like a person fond of cleanliness who finds the rotting carcass of a snake or dog hung around their neck—instantly repulsed, tearing it off.',
    actionK: 'រំឭកខ្លួនឯងថា «បើខ្ញុំនៅតែបន្តគិតរឿងនេះ តើអ្នកណាខាតបង់? គឺខ្លួនខ្ញុំជាអ្នកដេកមិនលក់!»',
    actionE: 'Confront yourself: "Who actually loses if I keep ruminating? I am the only one losing sleep and peace!"'
  },
  {
    id: 'step3',
    icon: '🙈',
    titleK: 'ជំហានទី ៣៖ មិនយកចិត្តទុកដាក់ (បំភ្លេច និងមិនខ្វល់)',
    titleE: 'Step 3: Intentional Non-Attention (Look Away)',
    pali: 'Asati amanasi-kāro āpajjitabbo',
    descK: 'កុំទៅដេញដោល កុំទៅរកខុសត្រូវ ធ្វើដូចជាវាមិនមានអត្ថន័យអ្វីសោះ។ ចិត្តដែលគ្មានចំណី គង់តែនឹងរលត់ទៅដោយខ្លួនឯង។',
    descE: 'Refuse to dialogue with the thought. Treat it as background white noise; do not energize it with analysis or emotional resistance.',
    simileK: 'ឧបមាដូចមនុស្សមានភ្នែកភ្លឺ ឃើញទិដ្ឋភាពមិនស្អាត ឬគួរឱ្យខ្ពើម ក៏បិទភ្នែក ឬបែរមុខចេញមិនមើល។',
    simileE: 'Like someone with good eyesight who encounters an ugly sight and simply closes their eyes or looks away.',
    actionK: 'ក្រោកដើរទៅកន្លែងផ្សេង ផឹកទឹកមួយកែវ ឬបោកខោអាវ ធ្វើការងារផ្ទះ ដើម្បីបំភ្លេចវា។',
    actionE: 'Change physical posture—get up, drink cold water, wash your face, or tackle chores.'
  },
  {
    id: 'step4',
    icon: '🧘',
    titleK: 'ជំហានទី ៤៖ បន្ថយល្បឿនគំនិតសន្សឹមៗ (សម្រួលសង្ខារចិត្ត)',
    titleE: 'Step 4: Gradually Decelerate the Cognitive Velocity',
    pali: 'Vitakkasaṅkhārasaṇṭhānaṁ manasikaroti',
    descK: 'សួរសម្គាល់ចិត្តខ្លួនឯងថា «ហេតុអ្វីបានជាចិត្តខ្ញុំកំពុងរត់លឿនម្ល៉េះ? បន្ធូរអារម្មណ៍ចុះ!» ធ្វើឱ្យគំនិតរលត់សន្សឹមៗដូចរថយន្តបន្ថយល្បឿន។',
    descE: 'Calm the thought-momentum: "Why am I racing frantically in my head? Let me slow down, let me breathe, let me relax."',
    simileK: 'ឧបមាដូចមនុស្សដើរលឿន សួរខ្លួនឯងថា ហេតុអ្វីត្រូវដើរលឿន? ក៏បន្ថយមកដើរយឺត; រួចសួរទៀតថា ហេតុអ្វីត្រូវដើរ? ក៏ឈប់ឈរ; រួចសួរទៀតថា ហេតុអ្វីត្រូវឈរ? ក៏អង្គុយ; រួចក៏ដេកសម្រាក។',
    simileE: 'Like a person walking fast who asks "Why rush?", so he slows down; then stops and stands; then sits; and finally lies down comfortably.',
    actionK: 'អង្គុយចុះ ផ្អែកខ្នង ទម្លាក់ស្មា សម្រួលសាច់ដុំមុខ ហើយដកដង្ហើមវែងៗ គំនិតនឹងស្ងប់ចុះ។',
    actionE: 'Drop your shoulders, unclench your jaw, loosen stomach muscles, and breathe deeply.'
  },
  {
    id: 'step5',
    icon: '⚡',
    titleK: 'ជំហានទី ៥៖ សង្កៀតធ្មេញទប់ចិត្ត (ការផ្ដាច់ចិត្តជាជំហានចុងក្រោយ)',
    titleE: 'Step 5: Clench the Teeth and Crush with Willpower',
    pali: 'Dantehidantamādhāya jivhāya tāluṁ āhacca',
    descK: 'បើគំនិតអាក្រក់នៅតែមកលងបន្លាចខ្លាំង ត្រូវសង្កៀតធ្មេញ សង្កត់អណ្ដាតលើក្រអូមមាត់ យកកម្លាំងស្មារតីសង្កត់កម្ចាត់ចិត្តបាបនោះចោលភ្លាម!',
    descE: 'As the ultimate shield, clench the teeth, press the tongue against the roof of the mouth, and fiercely overpower the mental impulse.',
    simileK: 'ឧបមាដូចបុរសខ្លាំងពូកែម្នាក់ ចាប់សង្កត់ក្បាលមនុស្សខ្សោយជាង ឱ្យជាប់នឹងដីមិនឱ្យងើបរួច។',
    simileE: 'Like a strong wrestler grasping a weaker man by the head and pinning him down completely to the ground.',
    actionK: 'និយាយពាក្យថា «ឈប់!» ខ្លាំងៗក្នុងចិត្ត ហើយផ្ដាច់ចោលទាំងស្រុង មិនបណ្ដោយឱ្យវាគ្រប់គ្រងយើងឡើយ។',
    actionE: 'Firmly declare "STOP!" internally with unshakeable resolve, refusing to be a slave to mental impulses.'
  }
]
</script>
