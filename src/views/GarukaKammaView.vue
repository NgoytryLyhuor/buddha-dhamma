<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>⚖️ {{ t('អភិធម្មត្ថសង្គហៈ · កម្មចតុក្កៈ និងអនន្តរិយកម្ម', 'Abhidhammattha Saṅgaha · Karmic Priority & Heinous Crimes') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('គរុកម្ម ៥ និងលំដាប់នៃកម្ម ៤ ជាន់', 'Garuka Kamma 5 & The 4 Tiers of Karmic Priority') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ច្បាប់កម្មផលមានលំដាប់អាទិភាពច្បាស់លាស់ក្នុងការផ្ដល់ផលបដិសន្ធិ។ ក្នុងនោះ «គរុកម្ម» (ទម្ងន់ធ្ងន់បំផុត) រមែងផ្ដល់ផលមុនគេបង្អស់ គ្មានកម្មណាអាចរារាំងបានឡើយ។ ខាងអកុសល គឺ «បញ្ចអនន្តរិយកម្ម ៥» ដែលទម្លាក់ទៅនរកអវីចីភ្លាមៗ រីឯខាងកុសល គឺ «រូបជ្ឈាន និងអរូបជ្ឈាន» ដែលនាំទៅកើតក្នុងព្រហ្មលោក។',
            'Karmic causality follows an unerring queue of priority when determining rebirth. Garuka Kamma (Heavy Karma) supersedes all other deeds without exception. On the dark side, the 5 Anantariya Crimes drag consciousness directly into Avīci Hell; on the bright side, the attainments of Jhāna elevate consciousness into Brahma realms.'
          ) }}
        </p>
      </div>
    </section>

    <!-- Queue Priority Banner -->
    <div class="card-paper p-5 border space-y-3" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
      <div class="text-center max-w-lg mx-auto space-y-1">
        <span class="text-xs font-bold uppercase tracking-wider" :style="{ color: 'var(--accent)' }">
          {{ t('លំដាប់ជួរអាទិភាពនៃការផ្ដល់ផល (Karmic Priority Queue)', 'Karmic Priority Queue at Death') }}
        </span>
        <h3 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
          {{ t('តើកម្មមួយណាផ្ដល់ផលជាបដិសន្ធិមុនគេ?', 'Which Action Triggers Rebirth First?') }}
        </h3>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2">
        <div v-for="(tier, tIdx) in karmicTiers" :key="tier.id"
             class="p-3.5 rounded-xl border text-center space-y-1.5"
             :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <div class="flex items-center justify-between text-xs font-mono">
            <span class="px-2 py-0.5 rounded-full font-bold"
                  :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
              {{ t('ជាន់ទី', 'Tier') }} {{ khNum(tIdx + 1) }}
            </span>
            <span>{{ tier.icon }}</span>
          </div>
          <h4 class="font-bold text-xs sm:text-sm pt-1" :style="{ color: 'var(--ink)' }">
            {{ t(tier.titleK, tier.titleE) }}
          </h4>
          <span class="text-[11px] font-mono block" :style="{ color: 'var(--accent)' }">{{ tier.pali }}</span>
          <p class="text-[11px] leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(tier.descK, tier.descE) }}
          </p>
        </div>
      </div>
    </div>

    <!-- Navigation Sub-Tabs -->
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

    <!-- TAB 1: 5 Anantariya Crimes Cards -->
    <section v-if="activeTab === 'anantariya'" class="space-y-4">
      <div class="card-paper p-5 border space-y-2" :style="{ borderColor: '#dc2626', background: 'var(--bg-card)' }">
        <div class="flex items-center gap-2">
          <span class="text-2xl">⚠️</span>
          <h3 class="font-bold text-base sm:text-lg text-red-500">
            {{ t('បញ្ចអនន្តរិយកម្ម ៥ ៖ អំពើបាបធ្ងន់បំផុតដែលបិទទ្វារសួគ៌ និងនិព្វាន', 'The 5 Heinous Anantariya Crimes') }}
          </h3>
        </div>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ពាក្យថា «អនន្តរិយៈ» មានន័យថា គ្មានចន្លោះពេល គឺបន្ទាប់ពីស្លាប់ភ្លាម នឹងត្រូវធ្លាក់ទៅនរកអវីចីភ្លាមៗដោយគ្មានកម្មណាផ្សេងអាចមកជួយបានឡើយ។ សូម្បីតែធ្វើបុណ្យធំប៉ុនភ្នំ ក៏មិនអាចរំលាយអនន្តរិយកម្មនេះបានដែរ។',
            'Anantariya means without interval: immediately upon physical death, the offender plummets directly into Avīci Hell without exemption. No amount of worldly merit can avert this retribution.'
          ) }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(c, idx) in anantariyaList"
          :key="c.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: '#dc2626', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ c.icon }}
              </span>
              <span class="text-xs px-2 py-0.5 rounded-full font-mono font-bold text-red-500 bg-red-100 dark:bg-red-950/40">
                #{{ khNum(idx + 1) }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-0.5" :style="{ color: 'var(--ink)' }">
              {{ t(c.titleK, c.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-3 text-red-500">
              {{ c.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(c.shortDescK, c.shortDescE) }}
            </p>

            <div class="p-3 rounded-xl mb-4 text-xs space-y-1" :style="{ background: 'var(--bg-card-2)' }">
              <strong class="block text-red-500">{{ t('រឿងរ៉ាវក្នុងពុទ្ធកាល៖', 'Canonical Case Study:') }}</strong>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(c.storyK, c.storyE) }}</p>
            </div>
          </div>

          <div>
            <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold text-red-500"
                 :style="{ borderColor: 'var(--border)' }">
              <span>{{ t('អានការវិភាគគម្ពីរពិស្តារ', 'Read Scriptural Analysis') }}</span>
              <button
                type="button"
                @click="toggleExpand(c.id)"
                class="lang-pick px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1"
                :class="expandedId === c.id ? 'on' : ''"
              >
                <span>{{ expandedId === c.id ? t('បិទ ▲', 'Hide ▲') : t('អានលម្អិត ▼', 'Read More ▼') }}</span>
              </button>
            </div>

            <!-- Slide-down Inline Expansion -->
            <transition name="slide-down">
              <div v-if="expandedId === c.id" class="pt-4 border-t mt-3 space-y-4 text-xs sm:text-sm leading-relaxed" :style="{ borderColor: 'var(--border)' }">
                <!-- Sutta / Vinaya Reference -->
                <div class="p-3.5 rounded-xl border-l-4 font-serif text-xs leading-relaxed"
                     :style="{ background: 'var(--accent-soft)', borderColor: '#dc2626' }">
                  <p class="italic mb-1 font-bold">« {{ c.canonicalPali }} »</p>
                  <p class="text-xs opacity-80">— {{ t(c.canonicalK, c.canonicalE) }}</p>
                </div>

                <!-- Detailed Exposition -->
                <div class="space-y-1.5">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 text-red-500">
                    <span>📖</span>
                    <span>{{ t('មូលហេតុដែលកម្មនេះមានទោសធ្ងន់ធ្ងរបំផុត', 'Why This Crime is Irrevocably Severe') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(c.fullExplanationK, c.fullExplanationE) }}
                  </p>
                </div>

                <!-- Spiritual Consequences -->
                <div class="p-3.5 rounded-xl border space-y-1.5"
                     :style="{ background: 'var(--bg-card-2)', borderColor: '#dc2626' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 text-red-500">
                    <span>🛑</span>
                    <span>{{ t('ផលវិបាកផ្លូវវិញ្ញាណ (បិទមគ្គផល)', 'Spiritual Obstruction (Magga-Phala Blocked)') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
                    {{ t(c.obstructionK, c.obstructionE) }}
                  </p>
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

    <!-- TAB 2: The 4 Tiers of Karma in Detail -->
    <section v-if="activeTab === 'tiers'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="tier in karmicTiers" :key="tier.id"
             class="card-paper p-5 border space-y-3 flex flex-col justify-between"
             :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-3xl">{{ tier.icon }}</span>
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                    :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                {{ t(tier.priorityK, tier.priorityE) }}
              </span>
            </div>
            <h3 class="font-bold text-base sm:text-lg" :style="{ color: 'var(--ink)' }">
              {{ t(tier.titleK, tier.titleE) }}
            </h3>
            <span class="text-xs font-mono block" :style="{ color: 'var(--accent)' }">{{ tier.pali }}</span>
            <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
              {{ t(tier.fullDescK, tier.fullDescE) }}
            </p>
          </div>

          <div class="p-3 rounded-xl text-xs space-y-1" :style="{ background: 'var(--bg-card-2)' }">
            <strong :style="{ color: 'var(--accent)' }">{{ t('ការត្រៀមខ្លួនជាក់ស្ដែង៖', 'Practical Readiness:') }}</strong>
            <p :style="{ color: 'var(--ink-soft)' }">{{ t(tier.practicalK, tier.practicalE) }}</p>
          </div>
        </div>
      </div>
    </section>

    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  if (n === null || n === undefined) return ''
  return String(n).split('').map(d => khDigits[Number(d)] ?? d).join('')
}

const activeTab = ref('anantariya')
const expandedId = ref(null)
function toggleExpand(id) { expandedId.value = expandedId.value === id ? null : id }

const tabs = [
  { id: 'anantariya', icon: '⚠️', titleK: 'បញ្ចអនន្តរិយកម្ម ៥', titleE: '5 Heinous Crimes' },
  { id: 'tiers', icon: '⚖️', titleK: 'កម្ម ៤ ជាន់តាមអាទិភាព', titleE: '4 Karmic Tiers' }
]

// Reader font sizes
const readerFontSizes = [
  { label: 'A', class: 'text-sm' },
  { label: 'A+', class: 'text-base' },
  { label: 'A++', class: 'text-lg' }
]
const readerFontSizeIdx = ref(0)
function toggleReaderFontSize() {
  readerFontSizeIdx.value = (readerFontSizeIdx.value + 1) % readerFontSizes.length
}

const anantariyaList = [
  {
    id: 'matughata',
    icon: '🤱',
    titleK: '១. មាតុឃាត (សម្លាប់ម្តាយបង្កើត)',
    titleE: '1. Matricide (Killing Mother)',
    pali: 'Mātughāta',
    shortDescK: 'ចេតនាសម្លាប់ម្តាយបង្កើតរបស់ខ្លួន ដែលជាអ្នកផ្ដល់កំណើត និងមានគុណដ៏ធំធេងលើសលប់។',
    shortDescE: 'Intentional murder of one’s biological mother who gave birth and nourished life.',
    storyK: 'ព្រះពុទ្ធបានបញ្ជាក់ថា ម្តាយជាព្រះព្រហ្មរបស់កូន ការផ្តាច់ជីវិតម្តាយជាការកម្ទេចគុណធម៌ដ៏ពិសិដ្ឋ។',
    storyE: 'The Buddha proclaimed mother is the supreme benefactor; destroying her life severs all moral foundation.',
    canonicalPali: 'Mātaraṁ jīvitā voropento ānantariyakammaṁ karoti...',
    canonicalK: 'បុគ្គលដែលផ្តាច់ជីវិតម្តាយបង្កើត ឈ្មោះថាធ្វើនូវអនន្តរិយកម្ម...',
    canonicalE: 'One who deprives their mother of life commits an Anantariya heinous crime...',
    fullExplanationK: 'ម្តាយបានលះបង់ឈាមសាច់ ទឹកដោះ និងសេចក្ដីសុខផ្ទាល់ខ្លួនដើម្បីចិញ្ចឹមកូន។ ទោះបីម្តាយខុសឆ្គងយ៉ាងណាក៏ដោយ ការសម្លាប់ម្តាយបង្កើតជាអំពើរមិលគុណធ្ងន់ធ្ងរបំផុតក្នុងចក្រវាល។',
    fullExplanationE: 'Mothers yield blood, milk, and health for offspring. Irrespective of dispute, terminating a biological mother’s life is the ultimate cosmic betrayal of gratitude.',
    obstructionK: 'បិទទ្វារសួគ៌ បិទទ្វារមគ្គផល មិនអាចសម្រេចសូម្បីតែសោតាបន្ន ត្រូវធ្លាក់នរកអវីចីមួយកប្ប។',
    obstructionE: 'Completely blocks all Jhānas and stream-entry; Avīci Hell is guaranteed for an entire eon.'
  },
  {
    id: 'pitughata',
    icon: '👨‍👧',
    titleK: '២. បិតុឃាត (សម្លាប់ឪពុកបង្កើត)',
    titleE: '2. Patricide (Killing Father)',
    pali: 'Pitughāta',
    shortDescK: 'ចេតនាសម្លាប់ឪពុកបង្កើតរបស់ខ្លួន ដែលជាអ្នកចិញ្ចឹមបីបាច់ និងការពារគ្រួសារ។',
    shortDescE: 'Intentional murder of one’s biological father, the family protector.',
    storyK: 'រឿងព្រះបាទអជាតសត្រូវ ដែលចាញ់ឧបាយកលទេវទត្ត បានធ្វើគត់ព្រះបាទពិម្ពិសារជាបិតាបង្កើត។',
    storyE: 'King Ajātasattu, manipulated by Devadatta, starved and murdered his father King Bimbisāra.',
    canonicalPali: 'Pitaraṁ jīvitā voropento mahantaṁ pāpaṁ pasavati...',
    canonicalK: 'បុគ្គលដែលផ្តាច់ជីវិតឪពុកបង្កើត រមែងសន្សំបាបដ៏ធំធេងក្រៃលែង...',
    canonicalE: 'One who deprives their father of life generates monumental, inescapable karmic ruin...',
    fullExplanationK: 'ព្រះបាទអជាតសត្រូវ ក្រោយពីបានស្តាប់សាមញ្ញផលសូត្រ មានសទ្ធាជ្រះថ្លាខ្លាំងរហូតដល់គួរតែបានសម្រេចជាព្រះសោតាបន្ន តែដោយសារបិតុឃាតកម្មរារាំង ទើបមិនអាចសម្រេចបាន ហើយត្រូវធ្លាក់នរកលោហកុម្ភី។',
    fullExplanationE: 'After hearing the Sāmaññaphala Sutta, Ajātasattu possessed the insight to attain Stream-Entry, but his patricide instantly barred him, plunging him into Lohakumbhī hell.',
    obstructionK: 'ទោះស្តាប់ព្រះធម៌ផ្ទាល់ពីព្រះសម្មាសម្ពុទ្ធ ក៏មិនអាចត្រាស់ដឹងបានឡើយ ព្រោះកម្មនេះជាថ្មរារាំងចិត្ត។',
    obstructionE: 'Even hearing the Dhamma from the Buddha in person cannot trigger awakening due to this psychic wall.'
  },
  {
    id: 'arahantaghata',
    icon: '🧘',
    titleK: '៣. អរហន្តឃាត (សម្លាប់ព្រះអរហន្ត)',
    titleE: '3. Murder of an Arahant',
    pali: 'Arahantaghāta',
    shortDescK: 'ការសម្លាប់ព្រះអរហន្ត ដែលជាបុគ្គលបរិសុទ្ធ គ្មានកិលេស និងជាស្រែបុណ្យដ៏វិសេសនៃលោក។',
    shortDescE: 'Killing a fully liberated Arahant—a being entirely devoid of greed, hatred, and delusion.',
    storyK: 'ពួកចោរ ៥០០ នាក់ដែលត្រូវគេជួលឱ្យទៅវាយសម្លាប់ព្រះមហាមោគ្គល្លានត្ថេរ។',
    storyE: 'The bandits hired by sectarian rivals to ambush and murder Venerable Mahāmoggallāna.',
    canonicalPali: 'Arahan’taṁ khīṇāsavaṁ jīvitā voropeti...',
    canonicalK: 'បុគ្គលដែលផ្តាច់ជីវិតព្រះអរហន្ត ដែលជាអ្នកអស់អាសវៈហើយ...',
    canonicalE: 'One who deprives a taintless Arahant of physical life...',
    fullExplanationK: 'ព្រះអរហន្តជាអ្នកគ្មានពៀរវេរានឹងនរណាឡើយ ចិត្តរបស់លោកពោរពេញដោយមេត្តា។ ការសម្លាប់បុគ្គលដែលគ្មានកិលេស ប្រៀបដូចជាការទម្លាក់ដុំថ្មដ៏ធំចូលក្នុងអណ្តូងជ្រៅ បង្កើតទម្ងន់បាបដ៏មហាសាល។',
    fullExplanationE: 'An Arahant harbors zero enmity, radiating pure benevolence. Destroying a stainless vessel of ultimate awakening incurs cosmic weight of horrifying magnitude.',
    obstructionK: 'បិទរាល់ការចម្រើនផ្លូវចិត្តទាំងអស់ ត្រូវធ្លាក់នរកអវីចីទទួលទារុណកម្មដ៏យូរអង្វែង។',
    obstructionE: 'Terminates all meditative progress; direct one-way descent to Avīci Hell.'
  },
  {
    id: 'lohituppada',
    icon: '🩸',
    titleK: '៤. លោហិតុប្បាទ (ធ្វើឱ្យព្រះពុទ្ធចេញព្រះលោហិត)',
    titleE: '4. Shedding the Blood of a Buddha',
    pali: 'Lohituppāda',
    shortDescK: 'ការមានចិត្តគុំកួន ចង់សម្លាប់ព្រះពុទ្ធ រហូតធ្វើឱ្យព្រះសរីរាង្គទ្រង់ចេញព្រះលោហិត (សូម្បីមួយដំណក់)។',
    shortDescE: 'Causing a Buddha’s blood to flow with malicious intent to injure or assassinate.',
    storyK: 'ព្រះទេវទត្តបានឡើងលើភ្នំគិជ្ឈកូដ រមៀលថ្មធំចុះមកបំណងសម្លាប់ព្រះពុទ្ធ បំណែកថ្មបានខ្ទាតប៉ះមេជើងព្រះអង្គចេញឈាម។',
    storyE: 'Devadatta rolled a boulder down Vulture Peak to murder the Buddha; a flying splinter drew blood from the Buddha’s foot.',
    canonicalPali: 'Duṭṭhena cittena tathāgatassa lohitaṁ uppādeti...',
    canonicalK: 'បុគ្គលដែលមានចិត្តប្រទូស្ត ធ្វើឱ្យព្រះលោហិតនៃព្រះតថាគតកើតឡើង...',
    canonicalE: 'One who with malicious mind causes the blood of a Tathāgata to flow...',
    fullExplanationK: 'គ្មានអ្នកណាអាចសម្លាប់ព្រះសម្មាសម្ពុទ្ធបានឡើយ ព្រោះបារមីរបស់ព្រះអង្គការពារជានិច្ច។ តែសូម្បីត្រឹមតែធ្វើឱ្យទ្រង់ចេញឈាមមួយដំណក់ដោយចេតនាអាក្រក់ ក៏គ្រប់គ្រាន់នឹងក្លាយជាអនន្តរិយកម្មដែរ។ ទេវទត្តត្រូវផែនដីស្រូបទាំងរស់ព្រោះតែកម្មនេះ។',
    fullExplanationE: 'No power can assassinate a Buddha; yet merely drawing a single drop of blood with malicious intent qualifies as Anantariya. Devadatta was swallowed alive by the earth for this.',
    obstructionK: 'រងទណ្ឌកម្មក្នុងនរកអវីចី ត្រូវភ្លើងឆេះដុតរាប់សែនឆ្នាំ។',
    obstructionE: 'Tormented in Avīci Hell by incinerating flames for vast cosmic cycles.'
  },
  {
    id: 'sanghabheda',
    icon: '⚡',
    titleK: '៥. សង្ឃភេទ (បំបែកសង្ឃ)',
    titleE: '5. Causing a Schism in the Saṅgha',
    pali: 'Saṅghabheda',
    shortDescK: 'ការបំបែកគណៈសង្ឃដែលកំពុងសាមគ្គីគ្នា ឱ្យបែកបាក់ជាពីរក្រុម លែងធ្វើឧបោសថកម្មជាមួយគ្នា។',
    shortDescE: 'Deliberately causing a schism in a united monastic order, severing communal harmony and Uposatha rites.',
    storyK: 'ព្រះទេវទត្តបានទាមទារវិន័យតឹងរ៉ឹង ៥ ប្រការ ហើយញុះញង់ភិក្ខុបួសថ្មី ៥០០ អង្គឱ្យបំបែកចេញពីព្រះសម្មាសម្ពុទ្ធ។',
    storyE: 'Devadatta demanded 5 ascetic extremes and misled 500 newly ordained monks away from the Buddha to form a rival sect.',
    canonicalPali: 'Samaggaṁ saṅghaṁ bhindati, taṁ kammaṁ garukaṁ...',
    canonicalK: 'បុគ្គលដែលបំបែកសង្ឃដែលកំពុងព្រមព្រៀងគ្នា កម្មនោះជាគរុកម្មធ្ងន់បំផុត...',
    canonicalE: 'One who fractures a concordant Saṅgha commits the most destructive karma of all...',
    fullExplanationK: 'ក្នុងចំណោមអនន្តរិយកម្មទាំង ៥ សង្ឃភេទគឺជាបាបធ្ងន់ជាងគេបំផុត ព្រោះវាបំផ្លាញគ្រឹះនៃព្រះពុទ្ធសាសនាទាំងមូល។ ពេលសង្ឃបែកបាក់ ធម្មវិន័យនឹងត្រូវរលាយ ការប្រោសសត្វលោកត្រូវរាំងស្ទះ។ ព្រះពុទ្ធបានត្រាស់ថា អ្នកបំបែកសង្ឃត្រូវនៅនរកអវីចីអស់ពេញមួយកប្ប។',
    fullDescE: 'Among the 5 crimes, Saṅghabheda is the gravest because it shatters the vessel of the Sasana itself. When the Saṅgha fractures, the Dhamma decays and humanity loses its refuge. The perpetrator suffers in Avīci for an entire cosmic eon.',
    obstructionK: 'ជាបាបកម្មធ្ងន់បំផុតក្នុងចំណោមអនន្តរិយកម្មទាំងអស់ ត្រូវរងទុក្ខក្នុងនរកពេញមួយកប្ប (Kappa)។',
    obstructionE: 'The absolute heaviest negative karma known to Buddhist cosmology, enduring an entire Kappa in Avīci.'
  }
]

const karmicTiers = [
  {
    id: 'garuka',
    icon: '⚡',
    titleK: '១. គរុកម្ម (កម្មធ្ងន់)',
    titleE: '1. Garuka Kamma (Heavy Karma)',
    pali: 'Garuka-kamma',
    priorityK: 'អាទិភាពទី ១ (ផ្ដល់ផលមុនគេបង្អស់)',
    priorityE: 'Priority #1 (Absolute Right of Way)',
    descK: 'កម្មធ្ងន់បំផុតដែលផ្ដល់ផលបដិសន្ធិភ្លាមៗ គ្មានកម្មណាអាចរារាំងបាន។',
    descE: 'Heavy karma taking instant precedence at death over all other actions.',
    fullDescK: 'ខាងអកុសល គឺបញ្ចអនន្តរិយកម្ម ៥ (សម្លាប់ម្តាយ ឪពុក ព្រះអរហន្ត ធ្វើឱ្យព្រះពុទ្ធចេញឈាម បំបែកសង្ឃ)។ ខាងកុសល គឺការសម្រេចសមាបត្តិ ឈាន ៤ ឬអរូបជ្ឈាន ៤ ដែលនាំទៅកើតក្នុងព្រហ្មលោក។',
    fullDescE: 'Negative: The 5 Anantariya crimes (direct to Avīci). Positive: Attaining Jhāna absorption (direct to Brahma realms).',
    practicalK: 'ចៀសវាងអំពើបាបទាំង ៥ នេះជាដាច់ខាត និងព្យាយាមចម្រើនសមាធិឱ្យដល់កម្រិតស្ងប់ជ្រៅ។',
    practicalE: 'Shun the 5 heinous crimes with terror; cultivate high-level meditative absorption.'
  },
  {
    id: 'asanna',
    icon: '🕯️',
    titleK: '២. អាសន្នកម្ម (កម្មជិតស្លាប់)',
    titleE: '2. Āsanna Kamma (Near-Death Karma)',
    pali: 'Āsanna-kamma',
    priorityK: 'អាទិភាពទី ២ (បើគ្មានគរុកម្ម)',
    priorityE: 'Priority #2 (If No Garuka Kamma)',
    descK: 'អំពើល្អ ឬអាក្រក់ដែលធ្វើ ឬនឹកឃើញនៅមាត់ទ្វារនៃសេចក្ដីស្លាប់។',
    descE: 'Wholesome or unwholesome actions done or remembered right on the deathbed.',
    fullDescK: 'បើគ្មានគរុកម្មទេ អាសន្នកម្មនឹងចូលមកផ្ដល់ផលជាបដិសន្ធិភ្លាមៗ។ ដូចរឿងឧបាសិកាមល្លិកា ដែលធ្វើបុណ្យពេញមួយជីវិត តែពេលជិតស្លាប់នឹកឃើញកំហុសបន្តិច ធ្លាក់នរក ៧ ថ្ងៃ រួចឡើងសួគ៌វិញ។ ដូច្នេះការថែទាំចិត្តអ្នកជិតស្លាប់មានសារៈសំខាន់ណាស់។',
    fullDescE: 'Queen Mallikā performed charity for decades, but recalled one moral lapse at her deathbed, experiencing 7 days in purgatory before ascending to heaven. The dying mindframe is crucial.',
    practicalK: 'ហាត់រៀនរំឭកដល់គុណព្រះពុទ្ធ និងការធ្វើបុណ្យជាប្រចាំ ដើម្បីឱ្យចិត្តទម្លាប់នឹកឃើញរឿងល្អពេលឈឺធ្ងន់។',
    practicalE: 'Train the mind daily in Buddho recollection so wholesome memories surface naturally at the deathbed.'
  },
  {
    id: 'acinna',
    icon: '🔄',
    titleK: '៣. អាចិណ្ណកម្ម / ពហុលកម្ម (កម្មទម្លាប់)',
    titleE: '3. Āciṇṇa Kamma (Habitual Karma)',
    pali: 'Āciṇṇa-kamma',
    priorityK: 'អាទិភាពទី ៣ (បើគ្មានអាសន្នកម្ម)',
    priorityE: 'Priority #3 (Default Momentum)',
    descK: 'អំពើដែលធ្វើជាទម្លាប់រាល់ថ្ងៃ ដដែលៗរហូតដល់ក្លាយជានិស្ស័យ។',
    descE: 'Habitual actions performed repeatedly throughout life until becoming second nature.',
    fullDescK: 'បើគ្មានគរុកម្ម និងគ្មានអាសន្នកម្មច្បាស់លាស់ទេ ចិត្តនឹងរសាត់ទៅតាមទម្លាប់ដែលខ្លួនធ្លាប់ធ្វើច្រើនជាងគេ។ អ្នកដែលទម្លាប់សូត្រធម៌ ធ្វើទាន ចិត្តនឹងទាញទៅរកសុគតិ។ អ្នកដែលទម្លាប់ជេរប្រទេច លេងល្បែង ចិត្តនឹងទាញទៅរកទុគ្គតិ។',
    fullDescE: 'In the absence of a distinct deathbed vision, habitual momentum takes over like a tilted tree falling in the direction of its lifelong lean.',
    practicalK: 'បង្កើតទម្លាប់ល្អជារៀងរាល់ថ្ងៃ៖ ធ្វើទាន រក្សាសីល និងអង្គុយសមាធិ មិនឱ្យដាច់។',
    practicalE: 'Build unbreakable wholesome daily habits: daily giving, moral boundaries, and meditation.'
  },
  {
    id: 'katatta',
    icon: '📦',
    titleK: '៤. កតត្តាកម្ម (កម្មស្រាល / កម្មបម្រុង)',
    titleE: '4. Kaṭattā Kamma (Residual Reserve Karma)',
    pali: 'Kaṭattā-kamma',
    priorityK: 'អាទិភាពទី ៤ (ជម្រើសចុងក្រោយ)',
    priorityE: 'Priority #4 (Final Reserve)',
    descK: 'អំពើល្អ ឬអាក្រក់បន្តិចបន្តួចដែលធ្វើដោយគ្មានចេតនាមុនមាំ ឬភ្លេចយូរហើយ។',
    descE: 'Minor wholesome or unwholesome deeds done lightly or forgotten long ago in the karmic vault.',
    fullDescK: 'ប្រៀបដូចជាគ្រាប់ព្រួញដែលបាញ់ចោលដោយគ្មានគោលដៅច្បាស់លាស់។ បើកម្មទាំង ៣ ខាងលើគ្មានទេ កម្មស្រាលដែលធ្លាប់បានធ្វើពីអតីតកាលនឹងចូលមកផ្ដល់ផលបដិសន្ធិជំនួសវិញ។',
    fullDescE: 'Like an arrow shot without aiming. When none of the top 3 categories are present, ancient forgotten karma from the vault steps forward.',
    practicalK: 'កុំមើលស្រាលបាប ឬបុណ្យតូចតាច ព្រោះទឹកមួយតំណក់ៗអាចពេញក្អមបាន។',
    practicalE: 'Never trivialize minor virtues or minor vices; drop by drop, the water pot is filled.'
  }
]



function handleKeydown(e) {
  if (e.key === 'Escape' && selectedCrime.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  unlockBodyScroll()
})
</script>
