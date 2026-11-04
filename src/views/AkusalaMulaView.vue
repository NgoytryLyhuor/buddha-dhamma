<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🌿 {{ t('អង្គុត្តរនិកាយ តិកនិបាត · មូលសូត្រ (AN 3.69)', 'Aṅguttara Nikāya 3.69 · Mūla Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('អកុសលមូល ៣ និងកុសលមូល ៣', 'The 3 Unwholesome & 3 Wholesome Roots') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'គ្រប់សេចក្ដីគិត ពាក្យសម្ដី និងទង្វើទាំងអស់របស់មនុស្សលោក សុទ្ធតែកើតចេញពីមេឫសគល់ធំៗ ៦ យ៉ាងនេះ។ បើឫសជាអកុសល ផលចេញមកជាទុក្ខនិងវិប្បដិសារី។ បើឫសជាកុសល ផលចេញមកជាសន្តិភាព សេចក្តីចម្រើន និងសេរីភាពផ្លូវចិត្ត។',
            'Every thought, word, and deed stems from these six master roots. When rooted in unwholesomeness, sorrow and remorse inevitably follow. When anchored in wholesomeness, enduring peace, inner nobility, and mental freedom arise.'
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

    <!-- TAB 1: 3 Unwholesome Roots (អកុសលមូល ៣) -->
    <section v-if="activeTab === 'akusala'" class="space-y-4">
      <div class="p-4 rounded-2xl border text-xs sm:text-sm" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
        <p class="font-serif leading-relaxed" :style="{ color: 'var(--ink)' }">
          {{ t('« ម្នាលភិក្ខុទាំងឡាយ អកុសលមូល ៣ យ៉ាងនេះ គឺលោភៈជាអកុសលមូល ១ ទោសៈជាអកុសលមូល ១ មោហៈជាអកុសលមូល ១។ អំពើដែលកើតពីឫសទាំង ៣ នេះ តែងនាំមកនូវទុក្ខ និងមានផលជាទុក្ខ។ » — មូលសូត្រ', '"Bhikkhus, there are these three roots of unwholesomeness: greed, hatred, and delusion. Whatever action is performed through these three roots ripens in suffering and regret." — Mūla Sutta') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="root in akusalaRoots"
          :key="root.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ root.icon }}
              </span>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold text-red-600 bg-red-100 dark:bg-red-950/40">
                {{ t('ឫសអកុសល', 'Poison Root') }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ t(root.titleK, root.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-2" :style="{ color: 'var(--accent)' }">
              {{ root.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(root.descK, root.descE) }}
            </p>

            <div class="p-3 rounded-xl mb-3 text-xs space-y-1.5" :style="{ background: 'var(--bg-card-2)' }">
              <div class="font-semibold flex items-center gap-1.5 text-red-600">
                <span>⚠️</span>
                <span>{{ t('អាការៈក្នុងជីវិត៖', 'Symptom in Life:') }}</span>
              </div>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(root.symptomK, root.symptomE) }}</p>
            </div>
          </div>

          <div>
            <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold"
                 :style="{ borderColor: 'var(--border)', color: 'var(--accent)' }">
              <span>{{ t('ឱសថ៖ ', 'Antidote: ') }}{{ root.antidoteK }}</span>
              <button
                type="button"
                @click="toggleExpand(root.id)"
                class="lang-pick px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1"
                :class="expandedId === root.id ? 'on' : ''"
              >
                <span>{{ expandedId === root.id ? t('បិទ ▲', 'Hide ▲') : t('អានលម្អិត ▼', 'Read More ▼') }}</span>
              </button>
            </div>

            <transition name="slide-down">
              <div v-if="expandedId === root.id" class="pt-3 border-t mt-3 space-y-2.5 text-xs leading-relaxed" :style="{ borderColor: 'var(--border)' }">
                <div class="p-3 rounded-xl border space-y-1" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                  <h4 class="font-bold text-[11px] uppercase tracking-wider" :style="{ color: 'var(--accent)' }">
                    {{ t('លក្ខណៈសម្គាល់តាមគម្ពីរអភិធម្ម', 'Abhidhamma Characteristic') }}
                  </h4>
                  <p :style="{ color: 'var(--ink)' }">{{ t(root.deepK, root.deepE) }}</p>
                </div>

                <div class="p-3 rounded-xl border space-y-1" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                  <h4 class="font-bold text-[11px] uppercase tracking-wider text-emerald-600">
                    {{ t('ការអនុវត្តជាក់ស្ដែងក្នុងជីវិត', 'Practical Application') }}
                  </h4>
                  <p :style="{ color: 'var(--ink)' }">{{ t(root.practiceK, root.practiceE) }}</p>
                </div>

                <button
                  type="button"
                  @click="expandedId = null"
                  class="w-full py-1.5 rounded-lg text-center text-xs opacity-70 hover:opacity-100 cursor-pointer"
                  :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)' }"
                >
                  {{ t('បិទព័ត៌មានលម្អិត ▲', 'Close Details ▲') }}
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 2: 3 Wholesome Roots (កុសលមូល ៣) -->
    <section v-if="activeTab === 'kusala'" class="space-y-4">
      <div class="p-4 rounded-2xl border text-xs sm:text-sm" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
        <p class="font-serif leading-relaxed" :style="{ color: 'var(--ink)' }">
          {{ t('« ម្នាលភិក្ខុទាំងឡាយ កុសលមូល ៣ យ៉ាងនេះ គឺអលោភៈជាកុសលមូល ១ អទោសៈជាកុសលមូល ១ អមោហៈជាកុសលមូល ១។ អំពើដែលកើតពីឫសទាំង ៣ នេះ តែងនាំមកនូវសេចក្តីស្ងប់កាយ ស្ងប់ចិត្ត និងមិនមានការក្ដៅក្រហាយឡើយ។ »', '"Bhikkhus, there are these three wholesome roots: non-greed, non-hatred, and non-delusion. Deeds undertaken without greed, without hatred, and without delusion ripen in peace, security, and liberation."') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="root in kusalaRoots"
          :key="root.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ root.icon }}
              </span>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-950/40">
                {{ t('ឫសកុសល', 'Wholesome Root') }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ t(root.titleK, root.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-2" :style="{ color: 'var(--accent)' }">
              {{ root.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(root.descK, root.descE) }}
            </p>

            <div class="p-3 rounded-xl mb-3 text-xs space-y-1.5" :style="{ background: 'var(--bg-card-2)' }">
              <div class="font-semibold flex items-center gap-1.5 text-emerald-600">
                <span>🌱</span>
                <span>{{ t('ផ្លែផ្កាក្នុងចិត្ត៖', 'Mental Fruit:') }}</span>
              </div>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(root.fruitK, root.fruitE) }}</p>
            </div>
          </div>

          <div>
            <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold"
                 :style="{ borderColor: 'var(--border)', color: 'var(--accent)' }">
              <span>{{ t('ការអនុវត្តជាក់ស្ដែង', 'Daily Practice') }}</span>
              <button
                type="button"
                @click="toggleExpand(root.id)"
                class="lang-pick px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1"
                :class="expandedId === root.id ? 'on' : ''"
              >
                <span>{{ expandedId === root.id ? t('បិទ ▲', 'Hide ▲') : t('អានលម្អិត ▼', 'Read More ▼') }}</span>
              </button>
            </div>

            <transition name="slide-down">
              <div v-if="expandedId === root.id" class="pt-3 border-t mt-3 space-y-2.5 text-xs leading-relaxed" :style="{ borderColor: 'var(--border)' }">
                <div class="p-3 rounded-xl border space-y-1" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                  <h4 class="font-bold text-[11px] uppercase tracking-wider" :style="{ color: 'var(--accent)' }">
                    {{ t('លក្ខណៈសម្គាល់តាមគម្ពីរអភិធម្ម', 'Abhidhamma Characteristic') }}
                  </h4>
                  <p :style="{ color: 'var(--ink)' }">{{ t(root.deepK, root.deepE) }}</p>
                </div>

                <div class="p-3 rounded-xl border space-y-1" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                  <h4 class="font-bold text-[11px] uppercase tracking-wider text-emerald-600">
                    {{ t('ការអនុវត្តជាក់ស្ដែងក្នុងជីវិត', 'Practical Application') }}
                  </h4>
                  <p :style="{ color: 'var(--ink)' }">{{ t(root.practiceK, root.practiceE) }}</p>
                </div>

                <button
                  type="button"
                  @click="expandedId = null"
                  class="w-full py-1.5 rounded-lg text-center text-xs opacity-70 hover:opacity-100 cursor-pointer"
                  :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)' }"
                >
                  {{ t('បិទព័ត៌មានលម្អិត ▲', 'Close Details ▲') }}
                </button>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 3: Daily Antidotes & Practice -->
    <section v-if="activeTab === 'antidotes'" class="space-y-4">
      <div class="card-paper p-6 space-y-5">
        <h2 class="text-lg font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('តារាងផ្គូផ្គង៖ ឫសពិស និងឱសថព្យាបាល', 'Matching Matrix: Root Poison vs Antidote') }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div class="p-4 rounded-2xl border space-y-2" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <div class="flex items-center gap-2 text-red-500 font-bold">
              <span>🔥</span>
              <span>{{ t('លោភៈ (សេចក្ដីស្រេកឃ្លាន)', 'Lobha (Greed / Addiction)') }}</span>
            </div>
            <p :style="{ color: 'var(--ink-muted)' }">
              {{ t('ស្រឡាញ់ ជាប់ជំពាក់ ចង់បានរបស់គេ មិនចេះឆ្អែតឆ្អន់នឹងទ្រព្យ។', 'Clinging, grasping, excessive attachment, and insatiable material thirst.') }}
            </p>
            <div class="pt-2 border-t font-semibold text-emerald-600 flex items-center gap-1" :style="{ borderColor: 'var(--border)' }">
              <span>💊 {{ t('ឱសថ៖ ទាន & អសុភភាវនា', 'Antidote: Generosity & Impurity contemplation') }}</span>
            </div>
          </div>

          <div class="p-4 rounded-2xl border space-y-2" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <div class="flex items-center gap-2 text-amber-500 font-bold">
              <span>⚡</span>
              <span>{{ t('ទោសៈ (កំហឹង & មួម៉ៅ)', 'Dosa (Anger / Resentment)') }}</span>
            </div>
            <p :style="{ color: 'var(--ink-muted)' }">
              {{ t('មិនពេញចិត្ត ច្រណែន មួម៉ៅ ចងគំនុំ និងចង់បំផ្លាញអ្នកដទៃ។', 'Irritation, aversion, bitter resentment, and urge to hurt or retaliate.') }}
            </p>
            <div class="pt-2 border-t font-semibold text-emerald-600 flex items-center gap-1" :style="{ borderColor: 'var(--border)' }">
              <span>💊 {{ t('ឱសថ៖ មេត្តា & អំណត់ខន្តី', 'Antidote: Loving-kindness & Patient forbearance') }}</span>
            </div>
          </div>

          <div class="p-4 rounded-2xl border space-y-2" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <div class="flex items-center gap-2 text-violet-500 font-bold">
              <span>🌫️</span>
              <span>{{ t('មោហៈ (ការវង្វេង & អវិជ្ជា)', 'Moha (Delusion / Blindness)') }}</span>
            </div>
            <p :style="{ color: 'var(--ink-muted)' }">
              {{ t('ងងឹតស្លុប មិនដឹងខុសត្រូវ ជឿស៊ប់ដោយគ្មានការពិចារណា។', 'Spiritual fog, ignorance of cause and effect, and unexamined blind beliefs.') }}
            </p>
            <div class="pt-2 border-t font-semibold text-emerald-600 flex items-center gap-1" :style="{ borderColor: 'var(--border)' }">
              <span>💊 {{ t('ឱសថ៖ ស្ដាប់ធម៌ & យោនិសោមនសិការ', 'Antidote: Wise inquiry & Learning Dhamma') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Antidotes Tab also cleaned -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
const activeTab = ref('akusala')
const expandedId = ref(null)

function toggleExpand(id) {
  expandedId.value = expandedId.value === id ? null : id
}

const tabs = [
  { id: 'akusala', icon: '🔥', titleK: 'ឫសអកុសល ៣ (Poison Roots)', titleE: '3 Unwholesome Roots' },
  { id: 'kusala', icon: '🌱', titleK: 'ឫសកុសល ៣ (Healing Roots)', titleE: '3 Wholesome Roots' },
  { id: 'antidotes', icon: '💊', titleK: 'ឱសថព្យាបាល (Antidotes)', titleE: 'Practical Antidotes' }
]

const akusalaRoots = [
  {
    id: 'lobha',
    icon: '🧲',
    titleK: 'លោភៈ (សេចក្ដីជាប់ជំពាក់)',
    titleE: 'Lobha (Greed & Clinging)',
    pali: 'Lobha-akusalamūla',
    descK: 'សភាពចិត្តស្អិតជាប់នឹងអារម្មណ៍ ស្រេកឃ្លានចង់បាន មិនចេះឆ្អែតឆ្អន់ ប្រៀបដូចស្ករស្អិតជាប់នឹងម្រាមដៃ។',
    descE: 'Mental stickiness and grasping thirst that clings to sensory objects, like tar sticking to a bird’s wings.',
    symptomK: 'ទិញរបស់មិនចេះចប់ មិនហ៊ានចែករំលែក ខ្លាចបាត់បង់ទ្រព្យ ឈឺចាប់ពេលគេមានជាង។',
    symptomE: 'Compulsive accumulation, hoarding, anxiety over loss, jealousy when others prosper.',
    antidoteK: 'ទាន (ការបរិច្ចាគ)',
    deepK: 'លក្ខណៈរបស់លោភៈគឺការចាប់យកអារម្មណ៍ (លព្ភនលក្ខណោ), កិច្ចរបស់វាគឺការស្អិតជាប់ (អភិសង្គរសោ), ហេតុជិតរបស់វាគឺការឃើញអារម្មណ៍ជាទីគាប់ចិត្តដោយគ្មានការពិចារណា។',
    deepE: 'Its characteristic is grasping objects; its function is clinging; its proximate cause is regarding things as delightfully permanent.',
    practiceK: 'ចាប់ផ្ដើមចែករំលែករបស់របរដែលលើសតម្រូវការដល់អ្នកខ្វះខាត បង្ហាត់ចិត្តឱ្យស្គាល់សេចក្តីស្កប់ស្កល់ (សន្តុដ្ឋី)។',
    practiceE: 'Practice giving away surplus items regularly, consciously cultivating contentment with what is sufficient.'
  },
  {
    id: 'dosa',
    icon: '⚡',
    titleK: 'ទោសៈ (កំហឹង & ការប្រឆាំង)',
    titleE: 'Dosa (Hatred & Aversion)',
    pali: 'Dosa-akusalamūla',
    descK: 'សភាពចិត្តរឹងត្អឹង មួម៉ៅ ក្ដៅក្រហាយ ប្រឆាំងនឹងការពិត និងចង់បំផ្លាញអារម្មណ៍ដែលខ្លួនមិនចូលចិត្ត។',
    descE: 'Mental hostility, burning resentment, and violent resistance toward unwanted realities.',
    symptomK: 'ឆាប់ខឹង មួម៉ៅនឹងរឿងតូចតាច និយាយពាក្យទ្រគោះបោះបោក ចងគំនុំសងសឹក គេងមិនលក់ព្រោះស្អប់គេ។',
    symptomE: 'Short temper, snapping at colleagues, nursing grudges, sleeplessness fueled by anger.',
    antidoteK: 'មេត្តា (សេចក្ដីស្រឡាញ់)',
    deepK: 'លក្ខណៈរបស់ទោសៈគឺការកាចសាហាវ (ចណ្ឌិក្កលក្ខណោ), កិច្ចរបស់វាគឺការដុតកម្ដៅខ្លួនឯងនិងអ្នកដទៃ (វិស្សន្ទនរសោ), ហេតុជិតគឺអារម្មណ៍ដែលមិនគាប់ចិត្ត។',
    deepE: 'Its characteristic is fierceness; its function is burning oneself and others; its proximate cause is encountering unpleasant stimuli.',
    practiceK: 'ដកដង្ហើមវែងៗពេលកំហឹងមកដល់ ចម្រើនមេត្តាភាវនាជូនដល់មនុស្សដែលយើងមិនចូលចិត្ត ដើម្បីរំលាយពិសក្នុងបេះដូង។',
    practiceE: 'Pause and take three deep breaths when irritated; intentionally radiate goodwill to disarm internal tension.'
  },
  {
    id: 'moha',
    icon: '🌫️',
    titleK: 'មោហៈ (ការវង្វេង & អវិជ្ជា)',
    titleE: 'Moha (Delusion & Ignorance)',
    pali: 'Moha-akusalamūla',
    descK: 'សភាពចិត្តងងឹតស្លុប មិនដឹងខុសមិនដឹងត្រូវ មិនស្គាល់កម្មផល ប្រៀបដូចមនុស្សដើរក្នុងព្រៃអ័ព្ទក្រាស់កណ្ដាលរាត្រី។',
    descE: 'Spiritual blindness and delusion that obscures cause, effect, and reality like dense fog at midnight.',
    symptomK: 'ជឿពាក្យចចាមអារ៉ាមងាយៗ ធ្វើបាបដោយមិនដឹងថាជាបាប ស្ទាក់ស្ទើរក្នុងការធ្វើអំពើល្អ គិតថាស្លាប់ទៅសូន្យ។',
    symptomE: 'Falling for scams and superstition, engaging in harmful actions unawares, chronic indecision.',
    antidoteK: 'បញ្ញា (ការយល់ដឹង)',
    deepK: 'លក្ខណៈរបស់មោហៈគឺការងងឹតភ្នែកនៃចិត្ត (អវិញ្ញាណលក្ខណោ), កិច្ចរបស់វាគឺការបិទបាំងសច្ចធម៌ (ឆាទនរសោ), ហេតុជិតគឺអយោនិសោមនសិការ (ការគិតមិនត្រឹមត្រូវ)។',
    deepE: 'Its characteristic is blind unawareness; its function is concealing truth; its proximate cause is unwise attention.',
    practiceK: 'អាននិងស្ដាប់ធម៌ជាប្រចាំ សាកសួរលោកអ្នកចេះដឹង ពិចារណារាល់រឿងរ៉ាវដោយហេតុនិងផល។',
    practiceE: 'Listen to insightful Dhamma teachings, discuss philosophy with wise mentors, and critically investigate causes.'
  }
]

const kusalaRoots = [
  {
    id: 'alobha',
    icon: '🎁',
    titleK: 'អលោភៈ (ការមិនលោភ & ការលះ)',
    titleE: 'Alobha (Generosity & Renunciation)',
    pali: 'Alobha-kusalamūla',
    descK: 'សភាពចិត្តមិនស្អិតជាប់ មិនស្រេកឃ្លាន ងាយនឹងលះបង់ ប្រៀបដូចដំណក់ទឹកមិនជាប់លើស្លឹកឈូក។',
    descE: 'Detached purity of mind that lets go effortlessly, like water rolling off a lotus leaf.',
    fruitK: 'ចិត្តស្រាលស្រឡះ មិនបារម្ភរឿងទ្រព្យហួសហេតុ រីករាយនឹងការចែករំលែកដល់អ្នកដទៃ។',
    fruitE: 'Lightness of heart, peaceful freedom from possessiveness, genuine joy in giving.',
    deepK: 'លក្ខណៈគឺការមិនស្អិតជាប់ក្នុងអារម្មណ៍ (អលគ្គលក្ខណោ), កិច្ចគឺការលះបង់ (អបរិគ្គហរសោ)។ ជាមូលដ្ឋានគ្រឹះនៃទានបារមី។',
    deepE: 'Its characteristic is non-attachment; its function is renunciation. It serves as the foundation for Dāna Pāramī.',
    practiceK: 'បរិច្ចាគជារៀងរាល់ថ្ងៃ ទោះជាតិចតួចក្ដី ដើម្បីបង្ហាត់ចិត្តឱ្យធ្លាប់តែលះបង់។',
    practiceE: 'Perform small acts of generosity daily to train the mind in habitual detachment and joy.'
  },
  {
    id: 'adosa',
    icon: '🌸',
    titleK: 'អទោសៈ (មេត្តា & សេចក្ដីស្លូតបូត)',
    titleE: 'Adosa (Loving-Kindness & Good Will)',
    pali: 'Adosa-kusalamūla',
    descK: 'សភាពចិត្តទន់ភ្លន់ ត្រជាក់ត្រជុំ មិនប្រទូសរ៉ាយ ប្រាថ្នាឱ្យសត្វលោកទាំងអស់បានសុខ និងគ្មានទុក្ខ។',
    descE: 'Gentle, soothing state of heart that harbors no enmity, wishing all living beings happiness and peace.',
    fruitK: 'ផ្ទៃមុខស្រស់ថ្លា គេងលក់ស្រួល គ្មានសត្រូវ ទៅទីណាក៏មានមនុស្សស្រឡាញ់រាប់អាន។',
    fruitE: 'Radiant complexion, restful sleep, absence of enemies, respected wherever one goes.',
    deepK: 'លក្ខណៈគឺការមិនកាចសាហាវ (អចណ្ឌិក្កលក្ខណោ), កិច្ចគឺការកម្ចាត់កំហឹងនិងការដុតកម្ដៅ (ទោសវិនយរសោ)។ ជាមូលដ្ឋាននៃមេត្តាព្រហ្មវិហារ។',
    deepE: 'Its characteristic is gentleness; its function is soothing anger and tension. It anchors the Brahmavihāra of Mettā.',
    practiceK: 'ផ្សាយមេត្តាដល់មនុស្សជុំវិញខ្លួនរៀងរាល់ព្រឹក និងអត់ទោសឱ្យអ្នកដទៃមុនពេលចូលគេង។',
    practiceE: 'Send compassionate wishes to family, colleagues, and difficult people each morning and night.'
  },
  {
    id: 'amoha',
    icon: '💡',
    titleK: 'អមោហៈ (បញ្ញា & ការដឹងច្បាស់)',
    titleE: 'Amoha (Wisdom & Clear Comprehension)',
    pali: 'Amoha-kusalamūla',
    descK: 'សភាពចិត្តភ្លឺថ្លា យល់ច្បាស់នូវការពិតនៃធម្មជាតិ ស្គាល់ខុសត្រូវ ស្គាល់បុណ្យបាប និងស្គាល់អរិយសច្ច។',
    descE: 'Luminous discernment that perceives reality as it is—comprehending kamma, impermanence, and liberation.',
    fruitK: 'មិនងាយចាញ់បោកគេ ដោះស្រាយវិបត្តិជីវិតដោយភាពស្ងប់ស្ងៀម កសាងសុភមង្គលពិតប្រាកដ។',
    fruitE: 'Resilience in crisis, clarity of judgment, freedom from anxiety and superstitious fear.',
    deepK: 'លក្ខណៈគឺការដឹងច្បាស់នូវសភាវធម៌ (អសម្មោហលក្ខណោ), កិច្ចគឺការបំភ្លឺអារម្មណ៍ដូចប្រទីប (ឱភាសនរសោ)។ ជាកំពូលនៃកុសលធម៌។',
    deepE: 'Its characteristic is unconfused insight; its function is illuminating the truth like a lamp in the dark.',
    practiceK: 'ចម្រើនសមាធិ និងវិបស្សនាជាប្រចាំ ដើម្បីដឹងទាន់នូវការកើតរលត់នៃរូបនិងចិត្ត។',
    practiceE: 'Practice mindfulness and vipassanā meditation daily to directly witness the arising and passing of phenomena.'
  }
]
</script>

