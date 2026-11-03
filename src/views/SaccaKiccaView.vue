<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៧៨ — អរិយសច្ច ៤ & កិច្ច ១២ ប្រការ', 'GATHA 78 — 4 NOBLE TRUTHS & 12 TASKS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('អរិយសច្ច ៤ ពិស្តារ & កិច្ច ១២ ប្រការ ៖ រង្វង់ ៣ នៃពុទ្ធបញ្ញា (តិបរិវដ្តំ)', 'The 4 Noble Truths & The 12 Dynamic Tasks (Tiparivaṭṭa)') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('អរិយសច្ច ៤ គឺជាបេះដូងនៃពុទ្ធសាសនា ប៉ុន្តែការយល់ដឹងត្រឹមតែឈ្មោះថា «ទុក្ខ, សមុទយ, និរោធ, មគ្គ» មិនទាន់គ្រប់គ្រាន់ក្នុងការរំលត់ទុក្ខឡើយ។ នៅក្នុងធម្មចក្កប្បវត្តនសូត្រ (SN 56.11) ព្រះសម្មាសម្ពុទ្ធទ្រង់បញ្ជាក់ថា ព្រះអង្គបានសម្រេចនូវការត្រាស់ដឹងពិតប្រាកដ លុះត្រាតែញាណទស្សនៈរបស់ព្រះអង្គបានវិលជុំវិញអរិយសច្ចទាំង ៤ នេះ គ្រប់ ៣ ជុំ (តិបរិវដ្តំ) និងមានអាការៈ ១២ យ៉ាង (ទ្វាទសាកា រំ)។ សច្ចធម៌នីមួយៗ មាន «ភារកិច្ចជាក់លាក់» ផ្សេងៗគ្នា ដែលអ្នកបដិបត្តិត្រូវធ្វើឱ្យចំគោលដៅ មិនអាចច្រឡំគ្នាបានឡើយ។', 'The Four Noble Truths form the luminous core of the Buddha\'s awakening. Yet memorizing their titles—Suffering, Origin, Cessation, and the Path—is insufficient for freedom. In the Dhammacakkappavattana Sutta (SN 56.11), the Buddha proclaimed that His full awakening was confirmed only when His direct vision rotated through these four truths in three rounds (Tiparivaṭṭa) and twelve aspects (Dvādasākāra). Crucially, each Truth demands a distinct, non-interchangeable functional duty (Kicca).') }}
    </p>

    <!-- Pali Gatha Box from Dhammacakkappavattana Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ឥទំ ទុក្ខំ អរិយសច្ចន្តិ... តំ ខោ បនិទំ ទុក្ខំ អរិយសច្ចំ បរិញ្ញេយ្យន្តិ... បរិញ្ញាតន្តិ មេ ភិក្ខវេ... ញាណំ ឧទបាទិ។»', '"This is the noble truth of suffering: thus arose vision... This noble truth of suffering is to be fully understood... It has been fully understood: thus arose vision, knowledge, wisdom, light." — SN 56.11') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— ធម្មចក្កប្បវត្តនសូត្រ មហាវារវគ្គ សំយុត្តនិកាយ', '— Dhammacakkappavattana Sutta, Saṃyutta Nikāya') }}
      </p>
    </div>

    <!-- The 3 Rounds Matrix (Tiparivaṭṭa) -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🔄</span>
        <span>{{ t('រង្វង់ទាំង ៣ នៃពុទ្ធបញ្ញា (តិបរិវដ្តំ)', 'The 3 Rounds of Realization (Tiparivaṭṭa)') }}</span>
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-xs">
        <div class="p-3.5 rounded-xl border bg-amber-500/5 border-amber-500/20">
          <strong class="font-bold text-amber-700 dark:text-amber-300 block mb-1">១. សច្ចញាណ (Sacca-ñāṇa)</strong>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
            {{ t('ការដឹងច្បាស់នូវសច្ចភាពនៃធម៌នីមួយៗថា នេះជាទុក្ខពិត, នេះជាហេតុនៃទុក្ខពិត, នេះជានិរោធពិត, នេះជាមគ្គពិត។', 'Recognizing each Truth as objective reality: This is suffering; this is its origin; this is its cessation; this is the path.') }}
          </p>
        </div>
        <div class="p-3.5 rounded-xl border bg-emerald-500/5 border-emerald-500/20">
          <strong class="font-bold text-emerald-700 dark:text-emerald-300 block mb-1">២. កិច្ចញាណ (Kicca-ñāṇa)</strong>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
            {{ t('ការដឹងច្បាស់នូវ «ភារកិច្ចដែលត្រូវធ្វើ» ចំពោះសច្ចធម៌នីមួយៗ មិនច្រឡំគ្នា មិនធ្វើខុសទិសដៅ។', 'Understanding the distinct operational duty required for each Truth: understand, abandon, realize, develop.') }}
          </p>
        </div>
        <div class="p-3.5 rounded-xl border bg-purple-500/5 border-purple-500/20">
          <strong class="font-bold text-purple-700 dark:text-purple-300 block mb-1">៣. កតញាណ (Kata-ñāṇa)</strong>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
            {{ t('ការដឹងច្បាស់ថា ភារកិច្ចចំពោះសច្ចធម៌នោះ «ត្រូវបានខ្លួនធ្វើរួចរាល់ហើយ» មិនមានកិច្ចអ្វីត្រូវធ្វើទៀតឡើយ។', 'Confirming the completion of each task: It has been fully understood, abandoned, realized, and developed.') }}
          </p>
        </div>
      </div>
    </div>

    <!-- The 4 Functional Duties Matrix -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>⚙️</span>
        <span>{{ t('ភារកិច្ចជាក់លាក់ទាំង ៤ ក្នុងអរិយសច្ច (កិច្ច ៤)', 'The 4 Specific Duties in Practice') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="task in tasks"
          :key="task.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                  {{ task.num }}
                </span>
                <span class="font-bold text-base" :style="{ color: 'var(--ink)' }">
                  {{ t(task.truthKm, task.truthEn) }}
                </span>
              </div>
              <span class="text-2xl">{{ task.icon }}</span>
            </div>

            <!-- The Specific Task -->
            <div class="mt-3 p-3 rounded-lg border text-xs" :class="task.themeClass">
              <div class="flex items-center justify-between">
                <strong class="text-xs sm:text-sm font-bold">{{ t(task.kiccaKm, task.kiccaEn) }}</strong>
                <span class="font-mono text-[10px]">{{ task.paliTerm }}</span>
              </div>
              <p class="mt-1 text-stone-600 dark:text-stone-300 leading-relaxed">{{ t(task.kiccaDescKm, task.kiccaDescEn) }}</p>
            </div>

            <!-- Common Mistake -->
            <div class="mt-3 text-xs">
              <strong class="text-rose-600 dark:text-rose-400 font-bold block mb-1">
                ⚠️ {{ t('កំហុសឆ្គងដែលមនុស្សទូទៅតែងច្រឡំ ៖', 'Common Practice Mistake:') }}
              </strong>
              <p class="text-stone-600 dark:text-stone-400 leading-relaxed">{{ t(task.mistakeKm, task.mistakeEn) }}</p>
            </div>
          </div>

          <!-- Antidote -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <strong class="text-emerald-700 dark:text-emerald-300 font-bold block mb-0.5">
              💡 {{ t('ការអនុវត្តត្រូវ ៖', 'Right Application:') }}
            </strong>
            <span class="text-stone-600 dark:text-stone-400">{{ t(task.rightAppKm, task.rightAppEn) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const tasks = [
  {
    id: 1,
    num: '១',
    truthKm: 'ទុក្ខអរិយសច្ច (Dukkha)',
    truthEn: 'Truth of Suffering',
    icon: '🌧️',
    paliTerm: 'Pariññeyyaṃ',
    themeClass: 'bg-amber-500/10 border-amber-500/20 text-amber-800 dark:text-amber-200',
    kiccaKm: 'ភារកិច្ច ៖ ត្រូវកំណត់ដឹង (បរិញ្ញេយ្យំ)',
    kiccaEn: 'Task: To be fully understood (Pariññeyya)',
    kiccaDescKm: 'ទុក្ខមិនមែនសម្រាប់រត់គេច ឬសម្រាប់លះបង់ចោលទេ តែត្រូវយកសតិទៅ «សង្កេត និងកំណត់ដឹង» ឱ្យឃើញការពិតរបស់វា ដូចជាវេទនាឈឺចាប់ ឬទុក្ខនៃខន្ធ ៥។',
    kiccaDescEn: 'Suffering is not to be fled or resisted, but mindfully observed, dissected, and comprehended down to its roots.',
    mistakeKm: 'មនុស្សជាច្រើនប្រឹងប្រយុទ្ធប្រឆាំងនឹងទុក្ខ ព្យាយាមរត់គេចពីការឈឺចាប់ ឬស្អប់ខ្ពើមទុក្ខ ដែលកាន់តែធ្វើឱ្យទុក្ខរីកធំ។',
    mistakeEn: 'People fight suffering, hate pain, or run away from discomfort, which only multiplies anguish.',
    rightAppKm: 'នៅពេលមានទុក្ខ កុំភ័យ! គ្រាន់តែអង្គុយសង្កេតដឹងវាដោយចិត្តស្ងប់ «នេះជាទុក្ខ» ដោយមិនប្រកាន់។',
    rightAppEn: 'When physical or mental pain arises, gently sit and recognize it: "This is suffering" without reacting.',
  },
  {
    id: 2,
    num: '២',
    truthKm: 'សមុទយអរិយសច្ច (Samudaya)',
    truthEn: 'Truth of the Origin of Suffering',
    icon: '🔥',
    paliTerm: 'Pahātabbaṃ',
    themeClass: 'bg-rose-500/10 border-rose-500/20 text-rose-800 dark:text-rose-200',
    kiccaKm: 'ភារកិច្ច ៖ ត្រូវលះបង់ចោល (បហាតព្វំ)',
    kiccaEn: 'Task: To be abandoned (Pahātabba)',
    kiccaDescKm: 'តណ្ហា ៣ យ៉ាង (កាមតណ្ហា, ភវតណ្ហា, វិភវតណ្ហា) គឺជាដើមហេតុនៃទុក្ខ។ ភារកិច្ចចំពោះតណ្ហា គឺត្រូវ «កាត់ផ្តាច់ និងលះបង់ចោល» ដោយបញ្ញា។',
    kiccaDescEn: 'Craving (Taṇhā) in its three modes is the sole generator of suffering. The task is to cut off and abandon it through insight.',
    mistakeKm: 'មនុស្សបែរជាលះបង់របស់ផ្សេង តែទៅឱបក្រសោបតណ្ហា ស្រឡាញ់ចំណង់ និងបណ្តោយតាមសេចក្តីលោភលន់ទៅវិញ។',
    mistakeEn: 'Practitioners cling tightly to desire while mistakenly trying to forcefully suppress natural feelings.',
    rightAppKm: 'ឃើញចំណង់ចង់បានអ្វីមួយ ដឹងទាន់ថា «តណ្ហានេះជាមេបង្កើតទុក្ខ» រួចដកចិត្តថយចេញ។',
    rightAppEn: 'When craving flares, identify it as the culprit and let it starve by withholding mental fuel.',
  },
  {
    id: 3,
    num: '៣',
    truthKm: 'និរោធអរិយសច្ច (Nirodha)',
    truthEn: 'Truth of the Cessation of Suffering',
    icon: '🪷',
    paliTerm: 'Sacchikātabbaṃ',
    themeClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-800 dark:text-emerald-200',
    kiccaKm: 'ភារកិច្ច ៖ ត្រូវធ្វើឱ្យជាក់ច្បាស់ (សច្ឆិកាតព្វំ)',
    kiccaEn: 'Task: To be directly realized (Sacchikātabba)',
    kiccaDescKm: 'ព្រះនិព្វាន គឺជាសភាពរំលត់ស្ងប់ស្ងាត់នៃភ្លើងកិលេសទាំងអស់។ ភារកិច្ចចំពោះនិរោធ គឺត្រូវ «ធ្វើឱ្យជាក់ច្បាស់ក្នុងចិត្ត» តាមរយៈការសម្រេចមគ្គផល។',
    kiccaDescEn: 'Nibbāna is the ultimate cessation of greed, hatred, and delusion. The task is direct experiential realization.',
    mistakeKm: 'មនុស្សជាច្រើនព្យាយាម «គិត» ឬស្រមើស្រមៃពីព្រះនិព្វាន ដោយទ្រឹស្តីខួរក្បាល ជំនួសឱ្យការបដិបត្តិជាក់ស្តែង។',
    mistakeEn: 'Overthinking and philosophizing conceptually about Nibbāna instead of tasting inward stillness.',
    rightAppKm: 'នៅពេលកិលេសរលត់ក្នុងចិត្តមួយរំពេច ចូរដឹងច្បាស់នូវសន្តិភាពនៃសេចក្តីស្ងប់នោះ។',
    rightAppEn: 'Notice micro-moments of peace when craving ceases; taste the tranquility of non-attachment directly.',
  },
  {
    id: 4,
    num: '៤',
    truthKm: 'មគ្គអរិយសច្ច (Magga)',
    truthEn: 'Truth of the Path to Cessation',
    icon: '🧭',
    paliTerm: 'Bhāvetabbaṃ',
    themeClass: 'bg-sky-500/10 border-sky-500/20 text-sky-800 dark:text-sky-200',
    kiccaKm: 'ភារកិច្ច ៖ ត្រូវចម្រើនឱ្យរីកធំធាត់ (ភាវេតព្វំ)',
    kiccaEn: 'Task: To be cultivated and developed (Bhāvetabba)',
    kiccaDescKm: 'អរិយមគ្គមានអង្គ ៨ (សីល សមាធិ បញ្ញា) គឺជាផ្លូវដំណើរ។ ភារកិច្ចចំពោះមគ្គ គឺត្រូវ «ហ្វឹកហាត់ បណ្តុះបណ្តាល និងចម្រើនឱ្យពេញបរិបូរណ៍» ក្នុងជីវិត។',
    kiccaDescEn: 'The Noble Eightfold Path is the practical training. The task is continuous cultivation, refinement, and mastery.',
    mistakeKm: 'រង់ចាំឱ្យការត្រាស់ដឹងធ្លាក់មកពីលើមេឃ ដោយមិនព្រមសមាទានសីល ឬមិនព្រមហ្វឹកហាត់សមាធិប្រចាំថ្ងៃ។',
    mistakeEn: 'Wishing for awakening passively without diligently cultivating the daily disciplines of morality, sati, and samadhi.',
    rightAppKm: 'សមាទានសីល ៥ រាល់ថ្ងៃ ចម្រើនសតិរាល់ដង្ហើមចេញចូល និងបណ្តុះសម្មាទិដ្ឋិឱ្យកាន់តែភ្លឺស្វាង។',
    rightAppEn: 'Integrate the 8 Path factors into daily decisions: ethical speech, mindful presence, and focused meditation.',
  },
]
</script>
