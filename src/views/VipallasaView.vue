<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🌀 {{ t('អង្គុត្តរនិកាយ ចតុក្កនិបាត · វិបល្លាសសូត្រ (AN 4.49)', 'Aṅguttara Nikāya 4.49 · Vipallāsa Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('វិបល្លាស ១២ (ការភ័ន្តច្រឡំនៃចិត្ត សញ្ញា និងទិដ្ឋិ)', 'The 12 Cognitive Distortions (Vipallāsa)') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'វិបល្លាស គឺជាការយល់ភ័ន្តច្រឡំ ក្រឡាប់ចាក់ ឃើញខុសពីការពិតនៃធម្មជាតិ។ ដូចមនុស្សស្រវឹងឃើញផ្ទះវិល ឬមនុស្សវង្វេងក្នុងវាលខ្សាច់ឃើញស្រមោលទឹកខ្យល់ មនុស្សលោកតែងយល់ច្រឡំ ៤ យ៉ាងធំៗ (មិនទៀងថាទៀង, ទុក្ខថាសុខ, មិនមែនខ្លួនថាជារបស់ខ្លួន, មិនស្អាតថាស្អាត) ដែលជ្រាបចូលទៅក្នុងសញ្ញា ចិត្ត និងទិដ្ឋិ (៤ × ៣ = ១២ វិបល្លាស)។',
            'Vipallāsa denotes the cognitive distortions that invert reality. Like a traveler chasing a desert mirage, the untrained mind projects permanence onto the transient, happiness onto the unsatisfactory, a fixed self onto the selfless, and beauty onto the decomposing. Spanning perception, thought, and view, these form the 12 master illusions of Saṁsāra.'
          ) }}
        </p>
      </div>
    </section>

    <!-- The 4 Core Distortions Grid -->
    <section class="space-y-4">
      <h2 class="text-lg font-bold font-serif px-1" :style="{ color: 'var(--ink)' }">
        {{ t('ការភ័ន្តច្រឡំធំៗទាំង ៤ (The 4 Inversions of Reality)', 'The 4 Inversions of Reality') }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="v in fourInversions"
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
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold text-red-600 bg-red-100 dark:bg-red-950/40">
                {{ t('ការយល់ច្រឡំ', 'Illusion') }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ t(v.titleK, v.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-2" :style="{ color: 'var(--accent)' }">
              {{ v.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-3" :style="{ color: 'var(--ink-muted)' }">
              {{ t(v.descK, v.descE) }}
            </p>

            <div class="p-3 rounded-xl mb-3 text-xs space-y-1.5" :style="{ background: 'var(--bg-card-2)' }">
              <div class="font-semibold text-red-500">
                ⚠️ {{ t('វិបត្តិក្នុងជីវិត៖ ', 'Suffering Result: ') }}
              </div>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(v.dangerK, v.dangerE) }}</p>
            </div>
          </div>

          <div class="p-3 rounded-xl text-xs bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200">
            <strong>💡 {{ t('ការពិតនៃធម្មជាតិ (សច្ចៈ)៖ ', 'Truth Revealed by Vipassanā: ') }}</strong>
            <span>{{ t(v.truthK, v.truthE) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- The 3 Levels: Saññā, Citta, Diṭṭhi -->
    <section class="card-paper p-6 space-y-5 border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
      <h3 class="text-lg font-bold font-serif" :style="{ color: 'var(--ink)' }">
        {{ t('កម្រិតទាំង ៣ នៃវិបល្លាស (៣ × ៤ = ១២)', 'The 3 Cognitive Layers (3 × 4 = 12)') }}
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
        <div class="p-4 rounded-2xl border space-y-2" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2 font-bold text-amber-600">
            <span>👁️</span>
            <span>{{ t('១. សញ្ញាវិបល្លាស (ការចាំច្រឡំ)', '1. Saññā-Vipallāsa (Perceptual)') }}</span>
          </div>
          <p :style="{ color: 'var(--ink-muted)' }">
            {{ t('ការសម្គាល់ភ័ន្តច្រឡំនៅត្រង់ទ្វារវិញ្ញាណ ដូចជាឃើញស្រមោលខ្សែពួរ ច្រឡំស្មានថាជាសត្វពស់។', 'Immediate sensory misapprehension, like mistaking a coiled rope in the dark for a deadly snake.') }}
          </p>
        </div>

        <div class="p-4 rounded-2xl border space-y-2" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2 font-bold text-red-600">
            <span>💭</span>
            <span>{{ t('២. ចិត្តវិបល្លាស (គំនិតច្រឡំ)', '2. Citta-Vipallāsa (Psychological)') }}</span>
          </div>
          <p :style="{ color: 'var(--ink-muted)' }">
            {{ t('ចិត្តយកការសម្គាល់ខុសនោះ មកគិតស្រមើស្រមៃ បង្កើតជាសេចក្ដីភ័យខ្លាច ស្រឡាញ់ ឬស្អប់យ៉ាងងប់ងល់។', 'Obsessive mental elaboration that emotionally reacts to the misperception with terror, lust, or grief.') }}
          </p>
        </div>

        <div class="p-4 rounded-2xl border space-y-2" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2 font-bold text-violet-600">
            <span>🧱</span>
            <span>{{ t('៣. ទិដ្ឋិវិបល្លាស (ជំនឿច្រឡំស៊ប់)', '3. Diṭṭhi-Vipallāsa (Dogmatic View)') }}</span>
          </div>
          <p :style="{ color: 'var(--ink-muted)' }">
            {{ t('ការជឿស៊ប់រឹងត្អឹង បង្កើតជាទ្រឹស្ដី ឬទស្សនវិជ្ជាខុសឆ្គង មិនព្រមស្ដាប់ហេតុផលអ្នកដទៃឡើយ។', 'Hardening the delusion into an ideological conviction, dogma, or stubborn belief immune to reason.') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const fourInversions = [
  {
    id: 'nicca',
    icon: '⏳',
    titleK: '១. ច្រឡំថារបស់មិនទៀង ថាទៀង',
    titleE: '1. Inverting Impermanence into Permanence',
    pali: 'Anicce niccasaññā',
    descK: 'គិតថារូបកាយ យុវវ័យ ទ្រព្យសម្បត្តិ និងជីវិតនឹងនៅស្ថិតស្ថេររហូត មិនងាយស្លាប់ មិនងាយព្រាត់ប្រាស។',
    descE: 'Presuming that health, youth, relationships, and wealth will endure forever without sudden end.',
    dangerK: 'នាំឱ្យកើតទុក្ខខ្លោចផ្សា យំសោកសង្រេង និងតក់ស្លុតជាទីបំផុត ពេលសេចក្តីស្លាប់ ឬការបាត់បង់មកដល់។',
    dangerE: 'Crushing despair and existential shock when sickness, aging, or sudden loss inevitably strikes.',
    truthK: 'អ្វីៗទាំងអស់ដែលកើតឡើង សុទ្ធតែកំពុងផ្លាស់ប្ដូររាល់វិនាទី និងត្រូវតែរលត់ទៅវិញជាធម្មតា។',
    truthE: 'All conditioned phenomena are in constant flux, subject to relentless decay and cessation.'
  },
  {
    id: 'sukha',
    icon: '🔥',
    titleK: '២. ច្រឡំថារបស់នាំទុក្ខ ថានាំសុខ',
    titleE: '2. Inverting Suffering into Happiness',
    pali: 'Dukkhe sukhasaññā',
    descK: 'គិតថាកាមគុណ សម្ភារៈនិយម និងការសប្បាយលោកីយ ជាប្រភពនៃសេចក្តីសុខពិតប្រាកដ។',
    descE: 'Believing that indulging worldly cravings and sensory pleasures leads to genuine lasting happiness.',
    dangerK: 'រត់ដេញតាមចំណង់មិនចេះចប់មិនចេះហើយ ក្លាយជាទាសករនៃតណ្ហា ដូចអ្នកស្រេកទឹកផឹកទឹកប្រៃសមុទ្រ។',
    dangerE: 'Trapped on a consumerist treadmill; drinking sensory saltwater that only intensifies burning thirst.',
    truthK: 'សេចក្ដីសុខលោកីយគ្រាន់តែជាការបំបាត់ទុក្ខមួយភ្លែតប៉ុណ្ណោះ សេចក្ដីស្ងប់នៃចិត្តទើបជាសុខពិត។',
    truthE: 'Sensory pleasure is merely the temporary relief of irritation; mental stillness is true peace.'
  },
  {
    id: 'atta',
    icon: '👤',
    titleK: '៣. ច្រឡំថាមិនមែនខ្លួន ថាជាខ្លួន',
    titleE: '3. Inverting Non-Self into an Autonomous Self',
    pali: 'Anattani attasaññā',
    descK: 'គិតថារូបកាយ និងចិត្តនេះជា «អញ» ជារបស់ «អញ» អាចបញ្ជាឱ្យនៅក្មេង កុំឱ្យឈឺ ឬកុំឱ្យចាស់បាន។',
    descE: 'Believing that the body or mind constitutes a permanent "I", a soul, or an ego that one can control.',
    dangerK: 'កើតមានអញ មានគេ ប្រកាន់ពូជសាសន៍ មានអំនួត ឆាប់អន់ចិត្ត និងឈឺចាប់ពេលគេជេរប្រមាថ។',
    dangerE: 'Hypersensitive ego, narcissistic vulnerability, taking offense easily, racial/tribal arrogance.',
    truthK: 'កាយនិងចិត្តជាធម្មជាតិកើតឡើងតាមបច្ច័យ គ្មាននរណាជាម្ចាស់ ឬអាចបញ្ជាវាបានឡើយ (អនត្តា)។',
    truthE: 'Mind and matter are interdependent causal processes devoid of an intrinsic controller (Anattā).'
  },
  {
    id: 'subha',
    icon: '🎭',
    titleK: '៤. ច្រឡំថារបស់មិនស្អាត ថាស្អាតអស្ចារ្យ',
    titleE: '4. Inverting the Foul into Pure Beauty',
    pali: 'Asubhe subhasaññā',
    descK: 'គិតថារូបរាងកាយនេះស្អាតឥតខ្ចោះ គួរឱ្យស្រឡាញ់ គួរឱ្យត្រេកត្រអាល ដោយមើលឃើញតែស្បែកក្រៅ។',
    descE: 'Infatuated with superficial outer skin, ignoring the 32 biological impurities functioning beneath.',
    dangerK: 'លង់ក្នុងតណ្ហារហូតហ៊ានប្រព្រឹត្តខុសក្នុងកាម ក្បត់ចិត្តប្តីប្រពន្ធ បំផ្លាញកិត្តិយសគ្រួសារ។',
    dangerE: 'Blinded by lust into sexual misconduct, broken families, and emotional enslavement.',
    truthK: 'រាងកាយគ្រាន់តែជាកញ្ចប់ស្បែករុំសាច់ ឈាម ឆ្អឹង និងកាកសំណល់ ដែលត្រូវងូតទឹកលាងរាល់ថ្ងៃ។',
    truthE: 'The body is a marvel of biological engineering wrapped in skin, sustained by daily cleansing.'
  }
]
</script>
