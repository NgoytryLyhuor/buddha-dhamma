<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🗝️ {{ t('អភិធម្មត្ថសង្គហៈ & មិលិន្ទប្បញ្ហា · សច្ចធម៌ ២ ថ្នាក់', 'Abhidhammattha Saṅgaha & Milindapañhā · The Two Truths') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('សម្មុតិសច្ចៈ និង បរមត្ថសច្ចៈ', 'Conventional Truth vs Ultimate Truth') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'សច្ចធម៌ក្នុងព្រះពុទ្ធសាសនាចែកចេញជា ២ កម្រិត៖ សម្មុតិសច្ចៈ គឺជាការពិតតាមការសន្មតរបស់លោក (មានមនុស្ស សត្វ ផ្ទះ ឡាន ឪពុក ម្តាយ); ចំណែក បរមត្ថសច្ចៈ គឺជាសច្ចធម៌ពិតនៃធម្មជាតិ (មានតែចិត្ត ចេតសិក រូប និងព្រះនិព្វាន)។ ការយល់ច្បាស់នូវសច្ចៈទាំង ២ នេះ គឺជាកូនសោរដោះស្រាយចម្ងល់ធំៗទាំងអស់ក្នុងព្រះធម៌។',
            'Buddhism reveals two levels of truth: Conventional Truth (Sammuti-Sacca), which designates everyday social realities (people, animals, cars, parents, names); and Ultimate Truth (Paramattha-Sacca), which describes fundamental irreducible realities (consciousness, mental factors, matter, and Nibbāna). Comprehending both resolves the central paradoxes of Dhamma.'
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

    <!-- TAB 1: Comparison of the 2 Truths -->
    <section v-if="activeTab === 'comparison'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Sammuti Sacca -->
        <div class="card-paper p-6 space-y-4 border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-3">
            <span class="text-3xl p-3 rounded-2xl" :style="{ background: 'var(--bg-card-2)' }">🏷️</span>
            <div>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold" :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                កម្រិតទី ១
              </span>
              <h3 class="font-bold text-lg font-serif" :style="{ color: 'var(--ink)' }">
                {{ t('សម្មុតិសច្ចៈ (ការពិតតាមការសន្មត)', 'Sammuti-Sacca (Conventional Truth)') }}
              </h3>
            </div>
          </div>

          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(
              'ជាការពិតដែលមនុស្សលោកបង្កើតឡើងសម្រាប់ទំនាក់ទំនងគ្នា ប្រាស្រ័យទាក់ទងគ្នា និងចាត់ចែងសង្គម។ បើគ្មានសម្មុតិទេ មនុស្សមិនអាចនិយាយគ្នាយល់ឡើយ។',
              'Valid agreements established by society for mutual communication and moral order. Without conventions, societal coherence would dissolve.'
            ) }}
          </p>

          <div class="p-4 rounded-2xl border space-y-2 text-xs" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold text-amber-600">📌 {{ t('ឧទាហរណ៍ជាក់ស្ដែង៖', 'Examples:') }}</h4>
            <ul class="list-disc list-inside space-y-1" :style="{ color: 'var(--ink-soft)' }">
              <li>{{ t('ឈ្មោះមនុស្ស៖ សុខ, ចាន់, នារី, លោកគ្រូ, ព្រះសង្ឃ', 'Social designations: Teacher, monk, doctor, child, citizen') }}</li>
              <li>{{ t('វត្ថុសម្ភារៈ៖ ឡាន, ផ្ទះ, លុយ, ទូរស័ព្ទ, ប្រទេសកម្ពុជា', 'Composite objects: Car, smartphone, house, money, nations') }}</li>
              <li>{{ t('ឋានៈតួនាទី៖ ម្តាយកត្តញ្ញូ, ឪពុកចិញ្ចឹមកូន, មេដឹកនាំ', 'Relational roles: Filial duty, parental love, citizenship') }}</li>
            </ul>
          </div>

          <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 text-xs">
            <strong>⚠️ {{ t('ការអនុវត្តត្រឹមត្រូវ៖ ', 'Application: ') }}</strong>
            <span>{{ t('ត្រូវគោរពសម្មុតិ កុំមើលងាយឪពុកម្តាយ ឬច្បាប់សង្គម ដោយអាងថាគ្មានតួខ្លួនឡើយ។', 'Honor conventional duties fully; never shirk family or civic responsibilities under the guise of emptiness.') }}</span>
          </div>
        </div>

        <!-- Paramattha Sacca -->
        <div class="card-paper p-6 space-y-4 border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-3">
            <span class="text-3xl p-3 rounded-2xl" :style="{ background: 'var(--bg-card-2)' }">💎</span>
            <div>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-950/40">
                កម្រិតទី ២
              </span>
              <h3 class="font-bold text-lg font-serif" :style="{ color: 'var(--ink)' }">
                {{ t('បរមត្ថសច្ចៈ (ការពិតនៃធាតុពិត)', 'Paramattha-Sacca (Ultimate Reality)') }}
              </h3>
            </div>
          </div>

          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(
              'ជាសភាវធម៌ដែលមានពិតប្រាកដដោយខ្លួនឯង ទោះបីគ្មានមនុស្សហៅឈ្មោះក៏ដោយ។ ពេលបំបែកវត្ថុទាំងអស់ដល់ទីបំផុត សល់តែធាតុ ៤ យ៉ាងនេះគត់៖',
              'Irreducible natural realities that exist objectively whether words name them or not. When all labels are stripped away, only 4 realities exist:'
            ) }}
          </p>

          <div class="p-4 rounded-2xl border space-y-2 text-xs" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold text-emerald-600">📌 {{ t('បរមត្ថធម៌ទាំង ៤ យ៉ាង៖', 'The 4 Ultimate Realities:') }}</h4>
            <ul class="list-disc list-inside space-y-1" :style="{ color: 'var(--ink-soft)' }">
              <li><strong>{{ t('ចិត្ត (Citta ៨៩/១២១)៖', 'Citta (Consciousness):') }}</strong> {{ t('ធម្មជាតិដឹងអារម្មណ៍', 'Pure knowing of the object') }}</li>
              <li><strong>{{ t('ចេតសិក (Cetasika ៥២)៖', 'Cetasika (Mental Factors):') }}</strong> {{ t('អារម្មណ៍ជ្រលក់ចិត្ត (មេត្តា ខឹង ស្រឡាញ់...)', 'Qualities coloring the mind (love, anger, wisdom)') }}</li>
              <li><strong>{{ t('រូប (Rūpa ២៨)៖', 'Rūpa (Materiality):') }}</strong> {{ t('ធាតុដី ទឹក ភ្លើង ខ្យល់ រូបរាងកាយ', 'Physical elements and sense faculties') }}</li>
              <li><strong>{{ t('និព្វាន (Nibbāna)៖', 'Nibbāna:') }}</strong> {{ t('សភាពស្ងប់រំលត់ទុក្ខផុតផុតពីកិលេស', 'The unconditioned state beyond suffering') }}</li>
            </ul>
          </div>

          <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 text-xs">
            <strong>💡 {{ t('ការអនុវត្តត្រឹមត្រូវ៖ ', 'Application: ') }}</strong>
            <span>{{ t('ប្រើប្រាស់បរមត្ថដើម្បីកុំឱ្យជាប់ជំពាក់ មិនកើតទុក្ខខ្លាំងពេលបាត់បង់រូបកាយ និងទ្រព្យ។', 'Use ultimate insight to detach from ego, eliminating grief and despair over impermanence.') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 2: The Chariot Simile (ឧបមារទេះរបស់ព្រះនាគសេន) -->
    <section v-if="activeTab === 'chariot'" class="card-paper p-6 space-y-5">
      <div class="max-w-2xl mx-auto space-y-4">
        <div class="text-center space-y-2">
          <span class="text-3xl">🛞</span>
          <h2 class="text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
            {{ t('ឧបមារទេះក្នុងគម្ពីរមិលិន្ទប្បញ្ហា (Simile of the Chariot)', 'Venerable Nāgasena’s Chariot Simile') }}
          </h2>
          <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
            {{ t(
              'ព្រះបាទមិលិន្ទសួរព្រះនាគសេនថា៖ «ចុះបើលោកម្ចាស់ថា គ្មានតួខ្លួននាគសេនពិតប្រាកដទេ តើនរណាជាអ្នកស្លៀកចីវរ នរណាជាអ្នកឆាន់ចង្ហាន់?» ព្រះនាគសេនបានដោះស្រាយដោយឧបមារទេះយ៉ាងអស្ចារ្យ៖',
              'King Milinda asked Venerable Nāgasena: "If there is no true self, who wears the robe? Who eats almsfood?" The elder answered with the timeless chariot dialogue:'
            ) }}
          </p>
        </div>

        <div class="space-y-3 text-xs sm:text-sm">
          <div class="p-4 rounded-2xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <p class="font-serif italic leading-relaxed" :style="{ color: 'var(--ink)' }">
              « បពិត្រមហារាជ! តើភ្លៅរទេះជារទេះឬ? កង់ជារទេះឬ? ទូកង់ជារទេះឬ? ដំបូលជារទេះឬ? ព្រះបាទមិលិន្ទឆ្លើយថា៖ មិនមែនឡើយ! <br><br>
              ព្រះនាគសេនបន្តថា៖ ដូច្នោះហើយ ពាក្យថា «រទេះ» គ្រាន់តែជាឈ្មោះសន្មតសម្រាប់ហៅការផ្គុំគ្នានៃគ្រឿងបន្លាស់ទាំងអស់ប៉ុណ្ណោះ។ យ៉ាងណាមិញ ពាក្យថា «ខ្ញុំ», «អ្នក», «នាគសេន» ក៏គ្រាន់តែជាឈ្មោះសន្មតសម្រាប់ហៅការផ្គុំគ្នានៃរូប និងនាម (ខន្ធ ៥) ដូច្នោះដែរ គ្មានតួខ្លួនកណ្តាលណាមួយនៅពីក្រោយឡើយ! »
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 3: Resolving Buddhist Paradoxes -->
    <section v-if="activeTab === 'paradox'" class="card-paper p-6 space-y-5">
      <h2 class="text-lg font-bold font-serif" :style="{ color: 'var(--ink)' }">
        {{ t('ដោះស្រាយចម្ងល់ធំៗក្នុងព្រះធម៌ (Resolving Dhamma Paradoxes)', 'Resolving Central Paradoxes') }}
      </h2>

      <div class="space-y-3 text-xs sm:text-sm">
        <div class="p-4 rounded-2xl border space-y-2" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <h4 class="font-bold text-red-600">
            ❓ {{ t('សំណួរ៖ «បើគ្មានខ្លួន (អនត្តា) តើនរណាជាអ្នកទទួលផលកម្ម?»', 'Q: "If there is no self, who experiences karma?"') }}
          </h4>
          <p :style="{ color: 'var(--ink-muted)' }">
            <strong>{{ t('ចម្លើយ៖', 'Answer:') }}</strong>
            {{ t('តាមសម្មុតិ យើងហៅថា «បុគ្គល» នោះទទួលកម្ម; ប៉ុន្តែតាមបរមត្ថ គឺ «ខ្សែទឹកចិត្ត និងនាមរូប» ជាអ្នកសាងហេតុ ហើយផលវិបាកក៏កើតឡើងបន្តក្នុងខ្សែទឹកចិត្តនោះឯង ដូចផ្លែស្វាយដែលកើតចេញពីគ្រាប់ស្វាយ មិនបាច់មានម្ចាស់អ្វីនៅក្នុងផ្លែនោះឡើយ។', 'Conventionally, we say "that person" receives karma. In ultimate truth, it is the continuous causal stream of mental-physical processes that experiences the fruit, just as a ripe mango emerges from an earlier seed without needing an inner "mango soul."') }}
          </p>
        </div>

        <div class="p-4 rounded-2xl border space-y-2" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <h4 class="font-bold text-red-600">
            ❓ {{ t('សំណួរ៖ «ចុះពាក្យថា ខ្លួនជាទីពឹងខ្លួន (អត្តា ហិ អត្តនោ នាថោ) មានន័យដូចម្ដេច?»', 'Q: "What about the Buddha saying: Self is one\'s own refuge?"') }}
          </h4>
          <p :style="{ color: 'var(--ink-muted)' }">
            <strong>{{ t('ចម្លើយ៖', 'Answer:') }}</strong>
            {{ t('ពាក្យថា «ខ្លួន» នៅត្រង់នេះជា សម្មុតិសច្ចៈ ដែលសំដៅលើការទទួលខុសត្រូវលើអំពើរបស់ខ្លួន មិនបាច់បួងសួងពឹងអាទិទេពខាងក្រៅឡើយ។ ព្រះពុទ្ធប្រើពាក្យសន្មតដើម្បីបង្រៀនមនុស្ស តែទ្រង់មិនដែលវង្វេងជាប់ក្នុងសន្មតឡើយ។', 'Here "self" is conventional language denoting moral personal agency and self-discipline, warning against relying on external deities. The Buddha uses conventional terms skillfully without falling into delusion.') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
const activeTab = ref('comparison')

const tabs = [
  { id: 'comparison', icon: '⚖️', titleK: 'ប្រៀបធៀបសច្ចៈទាំង ២ (The 2 Truths)', titleE: 'Comparison of 2 Truths' },
  { id: 'chariot', icon: '🛞', titleK: 'ឧបមារទេះ (Chariot Simile)', titleE: 'Chariot Simile' },
  { id: 'paradox', icon: '💡', titleK: 'ដោះស្រាយចម្ងល់ (Paradoxes)', titleE: 'Resolving Paradoxes' }
]
</script>
