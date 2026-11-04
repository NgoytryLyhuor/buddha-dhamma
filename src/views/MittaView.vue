<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🤝 {{ t('ទីឃនិកាយ បាដិកវគ្គ · សិង្គាលកសូត្រ (DN 31)', 'Dīgha Nikāya 31 · Sigālovāda Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('មិត្ត ៨ ជំពូក ៖ ៤ មិត្តពិត & ៤ មិត្តក្លែងក្លាយ', 'The 8 Friends: 4 True Allies & 4 False Companions') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ក្នុងសិង្គាលកសូត្រ ព្រះសម្មាសម្ពុទ្ធទ្រង់បានបង្រៀនយុវជនសិង្គាលកៈ ឱ្យចេះបែងចែកមនុស្សជាពីរប្រភេទធំៗ៖ «អមិត្ត» ៤ ពួក ដែលតែងតែពាក់ស្រោមមុខជាមិត្ត (មិត្តក្លែងក្លាយ) និង «សុហទមិត្ត» ៤ ពួក ដែលជាមិត្តពិតប្រាកដ មានទឹកចិត្តស្មោះសរ រួមសុខរួមទុក្ខ។',
            'In the Sigālovāda Sutta, the Buddha delivered timeless social wisdom on discerning genuine allies from predatory hypocrites. He outlined 4 False Friends masquerading as allies, contrasted against 4 Warm-Hearted True Friends who safeguard your life, property, and moral growth.'
          ) }}
        </p>
      </div>
    </section>

    <!-- Side-by-Side Summary Banner -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card-paper p-4 border" :style="{ background: 'var(--bg-card-2)', borderColor: '#dc2626' }">
        <div class="flex items-center gap-2 mb-1.5">
          <span class="text-xl">🦊</span>
          <h4 class="font-bold text-sm text-red-500">
            {{ t('មិត្តក្លែងក្លាយ ៤ ពួក (អមិត្តពាក់ស្រោមមុខ)', '4 False Friends (Wolves in Sheep’s Clothing)') }}
          </h4>
        </div>
        <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('យកតែប្រយោជន៍ខ្លួន, ល្អតែមាត់, ផ្គាប់ផ្គុនអែបអប, និងបបួលចូលអបាយមុខ។ គួរជៀសវាងដូចជៀសផ្លូវដែលមានបន្លា។', 'Selfish opportunists, sweet talkers, flatterers, and ruinous companions. Shun them like dangerous poisoned paths.') }}
        </p>
      </div>

      <div class="card-paper p-4 border" :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
        <div class="flex items-center gap-2 mb-1.5">
          <span class="text-xl">🛡️</span>
          <h4 class="font-bold text-sm" :style="{ color: 'var(--accent)' }">
            {{ t('មិត្តពិត ៤ ពួក (កល្យាណមិត្តមានចិត្តស្មោះ)', '4 True Friends (Noble Life Shields)') }}
          </h4>
        </div>
        <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink)' }">
          {{ t('ជួយឧបត្ថម្ភការពារ, រួមសុខរួមទុក្ខមិនបោះបង់, ណែនាំផ្លូវល្អ, និងមានចិត្តអាណិតអាសូរ។ គួររាប់អានដូចម្តាយថ្នាក់ថ្នមកូន។', 'Helping protectors, steadfast through crises, moral counselors, and empathetic allies. Cherish them like a mother cherishing her only child.') }}
        </p>
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

    <!-- TAB 1: 4 True Friends -->
    <section v-if="activeTab === 'true'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(item, idx) in trueFriends"
          :key="item.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--accent)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--accent-soft)' }">
                {{ item.icon }}
              </span>
              <span class="text-xs px-2 py-0.5 rounded-full font-mono font-bold"
                    :style="{ background: 'var(--accent)', color: '#fff' }">
                {{ t('មិត្តពិតទី', 'True Friend') }} {{ khNum(idx + 1) }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-0.5" :style="{ color: 'var(--ink)' }">
              {{ t(item.titleK, item.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-3" :style="{ color: 'var(--accent)' }">
              {{ item.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(item.shortDescK, item.shortDescE) }}
            </p>

            <!-- 4 Specific Behaviors -->
            <div class="p-3 rounded-xl mb-4 text-xs space-y-1.5" :style="{ background: 'var(--bg-card-2)' }">
              <span class="font-bold block" :style="{ color: 'var(--accent)' }">
                🌟 {{ t('លក្ខណៈសម្គាល់ ៤ យ៉ាង៖', '4 Hallmark Behaviors:') }}
              </span>
              <ul class="list-disc pl-4 space-y-1" :style="{ color: 'var(--ink-soft)' }">
                <li v-for="(b, bIdx) in item.behaviors" :key="bIdx">{{ t(b.k, b.e) }}</li>
              </ul>
            </div>
          </div>

          <div>
            <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold"
                 :style="{ borderColor: 'var(--border)', color: 'var(--accent)' }">
              <span>{{ t('អានព្រះសូត្រ និងការអនុវត្ត', 'Read Sutta & Insights') }}</span>
              <button
                type="button"
                @click="toggleExpand(item.id)"
                class="lang-pick px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1"
                :class="expandedId === item.id ? 'on' : ''"
              >
                <span>{{ expandedId === item.id ? t('បិទ ▲', 'Hide ▲') : t('អានលម្អិត ▼', 'Read More ▼') }}</span>
              </button>
            </div>

            <!-- Slide-down Inline Expansion -->
            <SlideDown>
              <div v-if="expandedId === item.id" class="pt-4 border-t mt-3 space-y-4 text-xs sm:text-sm leading-relaxed" :style="{ borderColor: 'var(--border)' }">
                <!-- Canonical Verse -->
                <div class="p-3.5 rounded-xl border-l-4 font-serif text-xs leading-relaxed"
                     :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
                  <p class="italic mb-1 font-bold">« {{ item.canonicalPali }} »</p>
                  <p class="text-xs opacity-80">— {{ t(item.canonicalK, item.canonicalE) }}</p>
                </div>

                <!-- Full Breakdown -->
                <div class="space-y-1.5">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>📖</span>
                    <span>{{ t('អត្ថន័យ និងការបកស្រាយលម្អិត', 'Deep Behavioral Breakdown') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(item.fullExplanationK, item.fullExplanationE) }}
                  </p>
                </div>

                <!-- Modern Situations -->
                <div class="p-3.5 rounded-xl border space-y-1.5"
                     :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>💡</span>
                    <span>{{ t('ឧទាហរណ៍ក្នុងជីវិតសម័យទំនើប', 'Modern Day Example') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
                    {{ t(item.modernExampleK, item.modernExampleE) }}
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
            </SlideDown>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 2: 4 False Friends -->
    <section v-if="activeTab === 'false'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(item, idx) in falseFriends"
          :key="item.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: '#dc2626', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ item.icon }}
              </span>
              <span class="text-xs px-2 py-0.5 rounded-full font-mono font-bold text-red-500 bg-red-100 dark:bg-red-950/40">
                {{ t('មិត្តក្លែងក្លាយទី', 'False Friend') }} {{ khNum(idx + 1) }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-0.5" :style="{ color: 'var(--ink)' }">
              {{ t(item.titleK, item.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-3 text-red-500">
              {{ item.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(item.shortDescK, item.shortDescE) }}
            </p>

            <!-- 4 Toxic Signs -->
            <div class="p-3 rounded-xl mb-4 text-xs space-y-1.5" :style="{ background: 'var(--bg-card-2)' }">
              <span class="font-bold block text-red-500">
                ⚠️ {{ t('សញ្ញាព្រមាន ៤ យ៉ាង៖', '4 Red Flag Signs:') }}
              </span>
              <ul class="list-disc pl-4 space-y-1" :style="{ color: 'var(--ink-soft)' }">
                <li v-for="(b, bIdx) in item.behaviors" :key="bIdx">{{ t(b.k, b.e) }}</li>
              </ul>
            </div>
          </div>

          <div>
            <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold text-red-500"
                 :style="{ borderColor: 'var(--border)' }">
              <span>{{ t('អានការវិភាគគម្ពីរពិស្តារ', 'Read Deep Analysis') }}</span>
              <button
                type="button"
                @click="toggleExpand(item.id)"
                class="lang-pick px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1"
                :class="expandedId === item.id ? 'on' : ''"
              >
                <span>{{ expandedId === item.id ? t('បិទ ▲', 'Hide ▲') : t('អានលម្អិត ▼', 'Read More ▼') }}</span>
              </button>
            </div>

            <!-- Slide-down Inline Expansion -->
            <SlideDown>
              <div v-if="expandedId === item.id" class="pt-4 border-t mt-3 space-y-4 text-xs sm:text-sm leading-relaxed" :style="{ borderColor: 'var(--border)' }">
                <!-- Canonical Verse -->
                <div class="p-3.5 rounded-xl border-l-4 font-serif text-xs leading-relaxed"
                     :style="{ background: '#fee2e2', borderColor: '#dc2626' }">
                  <p class="italic mb-1 font-bold">« {{ item.canonicalPali }} »</p>
                  <p class="text-xs opacity-80">— {{ t(item.canonicalK, item.canonicalE) }}</p>
                </div>

                <!-- Full Breakdown -->
                <div class="space-y-1.5">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 text-red-500">
                    <span>📖</span>
                    <span>{{ t('អត្ថន័យ និងការបកស្រាយលម្អិត', 'Deep Behavioral Breakdown') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(item.fullExplanationK, item.fullExplanationE) }}
                  </p>
                </div>

                <!-- Modern Situations -->
                <div class="p-3.5 rounded-xl border space-y-1.5"
                     :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                  <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
                      :style="{ color: 'var(--accent)' }">
                    <span>💡</span>
                    <span>{{ t('ឧទាហរណ៍ក្នុងជីវិតសម័យទំនើប', 'Modern Day Example') }}</span>
                  </h4>
                  <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
                    {{ t(item.modernExampleK, item.modernExampleE) }}
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
            </SlideDown>
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

const activeTab = ref('true')
const expandedId = ref(null)
function toggleExpand(id) { expandedId.value = expandedId.value === id ? null : id }

const tabs = [
  { id: 'true', icon: '🛡️', titleK: 'មិត្តពិត ៤ ពួក', titleE: '4 True Friends' },
  { id: 'false', icon: '🦊', titleK: 'មិត្តក្លែងក្លាយ ៤ ពួក', titleE: '4 False Friends' }
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

const trueFriends = [
  {
    id: 'upakaraka',
    isTrue: true,
    icon: '🛡️',
    titleK: '១. ឧបការកមិត្ត (មិត្តមានឧបការៈច្រើន)',
    titleE: '1. The Helping & Protective Friend',
    pali: 'Upakāraka-mitta',
    shortDescK: 'មិត្តដែលតែងតែជួយការពារពេលយើងធ្វេសប្រហែស ការពារទ្រព្យសម្បត្តិ និងជាទីពឹងពេលជួបគ្រោះថ្នាក់។',
    shortDescE: 'The staunch protector who shields you when vulnerable, guards your property, and stands as a fortress in emergencies.',
    canonicalPali: 'Pamattaṁ rakkhati, pamattassa bhogaṁ rakkhati, bhītassa saraṇaṁ hoti...',
    canonicalK: 'រមែងរក្សាមិត្តដែលប្រហែស រក្សាទ្រព្យរបស់មិត្តដែលប្រហែស ជាទីពឹងកាលបើមានភ័យ...',
    canonicalE: 'He guards you when you are careless; guards your property; provides shelter when you are afraid; gives twice what was asked.',
    behaviors: [
      { k: 'ជួយមើលថែរក្សាមិត្ត កាលបើមិត្តភ្លេចខ្លួន ឬស្រវឹង។', e: 'Guards you when you are off-guard or intoxicated.' },
      { k: 'ជួយការពារទ្រព្យសម្បត្តិរបស់មិត្ត កុំឱ្យបាត់បង់។', e: 'Protects your assets and belongings when you are heedless.' },
      { k: 'ជាទីពឹងពាក់ដ៏កក់ក្តៅ កាលបើមានអាសន្ន ឬគ្រោះថ្នាក់។', e: 'Acts as a reliable refuge during crises and distress.' },
      { k: 'កាលបើត្រូវខ្ចីប្រាក់ ជួយផ្ដល់លើសពីសេចក្ដីត្រូវការ។', e: 'Supplies twice what you need when real trouble strikes.' }
    ],
    fullExplanationK: 'ឧបការកមិត្ត មិនមែនជាមនុស្សដែលនិយាយច្រើននោះទេ តែជាមនុស្សដែលធ្វើសកម្មភាពភ្លាមៗពេលយើងត្រូវការជំនួយ។ ពេលយើងដេកពេទ្យ ឬជួបគ្រោះថ្នាក់ គាត់ជាអ្នករត់ការជួយដោយមិនគិតពីការនឿយហត់។',
    fullExplanationE: 'A friend of deed rather than empty rhetoric. When illness or accident occurs, they step forward unbidden to handle emergencies and shield your interests.',
    modernExampleK: 'មិត្តដែលដាស់តឿនយើងមិនឱ្យបើកបរពេលស្រវឹង និងជួយមើលការខុសត្រូវទ្រព្យសម្បត្តិយើងកាលយើងជួបវិបត្តិ។',
    modernExampleE: 'A friend who takes away your car keys when intoxicated and quietly guards your business during family emergencies.'
  },
  {
    id: 'samanasukhadukkha',
    isTrue: true,
    icon: '🤝',
    titleK: '២. សមានសុខទុក្ខមិត្ត (មិត្តរួមសុខរួមទុក្ខ)',
    titleE: '2. The Friend through Thick & Thin',
    pali: 'Samānasukhadukkha-mitta',
    shortDescK: 'មិត្តដែលស្មោះត្រង់ ហ៊ានប្រាប់ការសម្ងាត់ លាក់ការសម្ងាត់ មិនបោះបង់ចោលកាលមានទុក្ខ សូម្បីជីវិតក៏ហ៊ានលះបង់។',
    shortDescE: 'The loyal confidant who shares secrets, keeps your confidential matters safe, never deserts you in poverty, and risks their own safety.',
    canonicalPali: 'Guyhamassa ācikkhati, guyhamassa nigūhati, āpadāsu na vijahati...',
    canonicalK: 'រមែងប្រាប់ការសម្ងាត់ដល់មិត្ត រមែងលាក់ការសម្ងាត់របស់មិត្ត មិនលះបង់ចោលក្នុងគ្រាមានវិបត្តិ...',
    canonicalE: 'He tells you secrets; keeps your secrets secure; does not abandon you in misfortune; sacrifices even his life.',
    behaviors: [
      { k: 'ហ៊ានប្រាប់រឿងសម្ងាត់ក្នុងចិត្តដោយទុកចិត្ត។', e: 'Entrusts you with personal confidential secrets.' },
      { k: 'ជួយលាក់ការសម្ងាត់របស់មិត្ត មិនដើរប្រាប់គេឡើយ។', e: 'Safeguards your vulnerabilities; never leaks your secrets.' },
      { k: 'មិនដែលរត់ចោលមិត្ត កាលបើមិត្តធ្លាក់ខ្លួនក្រ ឬជួបទុក្ខ។', e: 'Stands beside you when you go broke or face scandal.' },
      { k: 'ហ៊ានលះបង់ផលប្រយោជន៍ ឬសូម្បីជីវិតដើម្បីមិត្ត។', e: 'Willing to make huge personal sacrifices to defend you.' }
    ],
    fullExplanationK: 'មនុស្សភាគច្រើនរាប់អានយើងតែពេលយើងមានបាន តែដល់ពេលយើងក្ស័យធន គេរត់ចោលអស់។ សមានសុខទុក្ខមិត្ត គឺជាមាសទឹកដប់ដែលនៅក្បែរយើងក្នុងថ្ងៃងងឹតបំផុតនៃជីវិត។',
    fullExplanationE: 'Fair-weather friends vanish the second money runs out. This rare noble ally remains anchored beside you in bankruptcy, hospital wards, and defamation.',
    modernExampleK: 'មិត្តភក្តិដែលមិនដែលក្បត់យើងយកទៅនិយាយដើមលើបណ្តាញសង្គម ហើយនៅតែជាមិត្តល្អពេលយើងធ្លាក់កូដ។',
    modernExampleE: 'A friend who refuses to join public smear campaigns against you and stays loyal through career downfalls.'
  },
  {
    id: 'atthakkhayi',
    isTrue: true,
    icon: '🧭',
    titleK: '៣. អត្ថក្ខាយីមិត្ត (មិត្តណែនាំប្រយោជន៍)',
    titleE: '3. The Wise Counselor Friend',
    pali: 'Atthakkhāyī-mitta',
    shortDescK: 'មិត្តដែលហ៊ានឃាត់ឃាំងកុំឱ្យធ្វើបាប ជួយណែនាំឱ្យធ្វើអំពើល្អ បង្រៀនចំណេះថ្មីៗ និងប្រាប់ផ្លូវទៅកាន់សេចក្ដីសុខ។',
    shortDescE: 'The mentor-friend who restrains you from foolish vices, guides you into wholesome actions, and shares profound life wisdom.',
    canonicalPali: 'Pāpā nivāreti, kalyāṇe niveseti, asutaṁ sāveti, saggassa maggaṁ ācikkhati...',
    canonicalK: 'រមែងឃាត់ឃាំងចាកអំពើបាប ដឹកនាំឱ្យតម្កល់ក្នុងអំពើល្អ ឱ្យស្តាប់នូវអ្វីដែលមិនធ្លាប់ឮ ប្រាប់ផ្លូវសួគ៌...',
    canonicalE: 'He restrains you from evil; establishes you in virtue; informs you of wise things; shows the path to heaven.',
    behaviors: [
      { k: 'ហ៊ានហាមឃាត់ត្រង់ៗ ពេលឃើញយើងដើរផ្លូវខុស។', e: 'Courageously intervenes when you are heading toward disaster.' },
      { k: 'លើកទឹកចិត្ត និងជំរុញឱ្យយើងធ្វើរឿងត្រឹមត្រូវ។', e: 'Inspires and encourages you in productive, moral pursuits.' },
      { k: 'ចែករំលែកគតិបណ្ឌិត និងចំណេះដឹងថ្មីៗដែលមានប្រយោជន៍។', e: 'Shares books, wisdom, and life perspectives you haven’t heard.' },
      { k: 'ណែនាំផ្លូវទៅកាន់សេចក្ដីសុខសាន្តទាំងផ្លូវលោក និងផ្លូវធម៌។', e: 'Illuminates spiritual values leading to long-term peace.' }
    ],
    fullExplanationK: 'មិត្តបែបនេះប្រៀបដូចជាត្រីវិស័យ។ គាត់មិនមែនជាមនុស្សដែលចេះតែយល់ស្របតាមយើងគ្រប់រឿងនោះទេ តែហ៊ានទាស់ចិត្តយើងដើម្បីជួយសង្គ្រោះអនាគតយើង។ ព្រះពុទ្ធបានត្រាស់ថា មិត្តដែលចង្អុលបង្ហាញកំហុស ដូចជាអ្នកប្រាប់កំណប់ទ្រព្យ។',
    fullDescE: 'Like an internal compass. They refuse to indulge your foolish whims, risking temporary awkwardness to save your long-term future. Pointing out flaws is presenting buried gold.',
    modernExampleK: 'មិត្តដែលហ៊ានទាញស្មាយើងប្រាប់ថា «ឯងកំពុងធ្វើរឿងខុសច្បាប់ ឬផិតក្បត់ហើយ ឈប់ភ្លាម!»។',
    modernExampleE: 'A friend who shakes your shoulders and says: “You are cheating on your spouse / doing illegal accounting; stop immediately!”'
  },
  {
    id: 'anukampaka',
    isTrue: true,
    icon: '💖',
    titleK: '៤. អនុកម្បកមិត្ត (មិត្តមានសេចក្ដីអាណិត)',
    titleE: '4. The Compassionate & Empathetic Friend',
    pali: 'Anukampaka-mitta',
    shortDescK: 'មិត្តដែលមិនដែលត្រេកអរលើការធ្លាក់ចុះរបស់យើង រីករាយលើជោគជ័យរបស់យើង ការពារកិត្តិយស និងសរសើរអ្នកសរសើរយើង។',
    shortDescE: 'The genuinely empathetic ally who weeps with your sorrow, rejoices in your triumphs, and defends your name against gossip.',
    canonicalPali: 'Bhavenassa na nandati, vibhavena nandati, avaṇṇaṁ bhaṇamānaṁ nivāreti...',
    canonicalK: 'មិនត្រេកអរនឹងសេចក្ដីវិនាសរបស់មិត្ត ត្រេកអរនឹងសេចក្ដីចម្រើនរបស់មិត្ត ឃាត់ឃាំងអ្នកដែលនិយាយបង្ខូច...',
    canonicalE: 'He does not rejoice in your misfortune; rejoices in your prosperity; silences those who slander you; praises those who praise you.',
    behaviors: [
      { k: 'កើតទុក្ខ និងអាណិតអាសូរ ពេលឃើញយើងរងទុក្ខ។', e: 'Feels genuine sorrow and empathy when you face sorrow.' },
      { k: 'ត្រេកអរដោយចិត្តស្មោះ (មុទិតា) ពេលឃើញយើងជោគជ័យ គ្មានការច្រណែន។', e: 'Rejoices without a shred of envy when you win or succeed.' },
      { k: 'ហ៊ានចេញមុខការពារ និងតវ៉ាជំនួស ពេលគេនិយាយបង្ខូចកេរ្តិ៍ឈ្មោះយើង។', e: 'Speaks up to defend your honor when you are slandered.' },
      { k: 'សរសើរ និងគាំទ្រអ្នកណាដែលមើលឃើញគុណសម្បត្តិរបស់យើង។', e: 'Applauds those who recognize and uplift your authentic virtues.' }
    ],
    fullExplanationK: 'ក្នុងលោកនេះ មនុស្សដែលត្រេកអរនឹងជោគជ័យរបស់យើងដោយគ្មានការច្រណែន គឺកម្រណាស់។ អនុកម្បកមិត្ត មានទឹកចិត្តដូចឪពុកម្តាយ តែងតែចង់ឱ្យយើងបានសុខ និងការពារកិត្តិយសយើងកំបាំងមុខ។',
    fullExplanationE: 'In a world poisoned by secret envy, finding someone who genuinely celebrates your promotions without resentment is rare gold. They defend your integrity behind your back.',
    modernExampleK: 'មិត្តដែលការពារយើងក្នុងក្រុមជជែក (Group Chat) ពេលអ្នកដទៃកំពុងនិន្ទាយើងកំបាំងមុខ។',
    modernExampleE: 'A colleague who shuts down malicious workplace gossip in conference rooms when you are absent.'
  }
]

const falseFriends = [
  {
    id: 'annadatthuhara',
    isTrue: false,
    icon: '🦊',
    titleK: '១. អញ្ញទត្ថុហរមិត្ត (មិត្តយកតែប្រយោជន៍ខ្លួន)',
    titleE: '1. The Rapacious Opportunist',
    pali: 'Aññadatthuhara-amitta',
    shortDescK: 'មិត្តដែលរាប់អានយើងតែពេលគេចង់បានផលប្រយោជន៍ ផ្ដល់ឱ្យបន្តិចបន្តួចតែចង់បានត្រឡប់មកវិញច្រើនលើសលប់។',
    shortDescE: 'The predatory parasite who gives a crumb only to extract a feast, associating strictly when they need something.',
    canonicalPali: 'Aññadatthuharo mitto, appena bahumicchati...',
    canonicalK: 'អមិត្តដែលនាំយកតែប្រយោជន៍ខ្លួន រមែងចង់បានច្រើនដោយការផ្ដល់ឱ្យតិចតួច...',
    canonicalE: 'The rapacious false friend gives little to demand much; does their duty only out of fear; pursues selfish profit.',
    behaviors: [
      { k: 'រាប់អានតែពេលត្រូវការជំនួយ ឬចង់ខ្ចីប្រាក់។', e: 'Contacts you only when demanding loans or favors.' },
      { k: 'ឱ្យរបស់តិចតួច តែរំពឹងចង់បានការតបស្នងវិញច្រើនលើសលប់។', e: 'Gives a tiny token expecting massive reciprocal favors.' },
      { k: 'ធ្វើកិច្ចការជាមួយយើង លុះត្រាតែមានការភ័យខ្លាច ឬខានមិនបាន។', e: 'Cooperates only under duress or when trapped.' },
      { k: 'គិតតែពីផលប្រយោជន៍ផ្ទាល់ខ្លួន មិនខ្វល់ពីការខូចខាតរបស់យើងឡើយ។', e: 'Ruthlessly prioritizes self-interest at your expense.' }
    ],
    fullExplanationK: 'មនុស្សប្រភេទនេះមើលឃើញមនុស្សជុំវិញខ្លួនដូចជាឧបករណ៍ជណ្តើរសម្រាប់ជាន់ឡើង។ ពេលយើងមានលុយ ឬមានអំណាច គេរត់មករក តែដល់ពេលយើងអស់ប្រយោជន៍ គេនឹងរលាយបាត់ភ្លាម។',
    fullExplanationE: 'Treats human relationships as transaction spreadsheets. They show up when you have influence or money, draining your resources like a tick.',
    modernExampleK: 'មនុស្សដែលខលមកយើងតែពេលចង់ខ្ចីលុយ ឬចង់ឱ្យយើងជួយរត់ការការងារ តែពេលយើងខលទៅមិនដែលលើក។',
    modernExampleE: 'An acquaintance who calls exclusively to ask for loans or introductions, but ignores your messages when you reach out.'
  },
  {
    id: 'vaciparama',
    isTrue: false,
    icon: '🦜',
    titleK: '២. វចីបរមមិត្ត (មិត្តល្អតែមាត់)',
    titleE: '2. The Lip-Service Talker',
    pali: 'Vacīparama-amitta',
    shortDescK: 'មិត្តដែលពូកែនិយាយផ្អែមល្ហែម តែសន្យាខ្យល់ រំឭកតែរឿងអតីត ឬអនាគត តែដល់ពេលត្រូវជួយជាក់ស្តែងបែរជាគេចវេះ។',
    shortDescE: 'The hypocritical promiser who oozes sweet words about past and future favors, but manifests excuses the moment real help is needed.',
    canonicalPali: 'Atītena paṭisantharati, anāgatena paṭisantharati, niratthakena saṅgaṇhāti...',
    canonicalK: 'រមែងរាក់ទាក់ដោយរឿងកន្លងហួស រាក់ទាក់ដោយរឿងមិនទាន់មកដល់ សង្គ្រោះដោយរបស់ឥតប្រយោជន៍...',
    canonicalE: 'He welcomes with the past; promises the future; flatters with empty words; makes excuses when help is required.',
    behaviors: [
      { k: 'លើកយករឿងអតីតមកនិយាយ៖ «កាលមុនបងដឹង ម៉្លេះសមបងជួយឯងហើយ!»។', e: 'Invokes past regrets: “Oh, if only I had known yesterday, I would have paid it all!”' },
      { k: 'សន្យារឿងអនាគតខ្យល់៖ «ចាំលើកក្រោយបងជួយ ធានាថាមិនឱ្យខកបំណង!»។', e: 'Promises future fantasies: “Next week I’ll hook you up with huge cash, don’t worry!”' },
      { k: 'រាក់ទាក់តែពាក្យសម្តីឥតប្រយោជន៍ គ្មានទង្វើជាក់ស្តែង។', e: 'Floods interactions with sugary, hollow pleasantries.' },
      { k: 'ដល់ពេលត្រូវជួយជាក់ស្តែង បែរជាមានលេសរវល់រាប់ពាន់ជំពូក។', e: 'Fabricates intricate emergencies the moment assistance is requested.' }
    ],
    fullExplanationK: 'មិត្តល្អតែមាត់ ជាអ្នកជំនាញខាងសន្យាខ្យល់។ មាត់និយាយដូចចង់លើកភ្នំឱ្យយើង តែពេលយើងត្រូវការជំនួយបន្ទាន់ បែរជាបិទទូរសព្ទ ឬឆ្លើយថារវល់ភ្លាមៗ។',
    fullExplanationE: 'Masters of performative affection. They promise the moon and stars verbally, but when reality calls for a five-dollar loan or a lift to the hospital, their phone is suddenly turned off.',
    modernExampleK: 'មនុស្សដែលតែងតែ Comment ថា «ស្រឡាញ់បងណាស់ បើមានការអីប្រាប់ខ្ញុំ!» តែដល់ពេលពឹងពិតប្រាកដ បែរជាមើលសារហើយមិនតប។',
    modernExampleE: 'People leaving glowing “Love you bro, anything you need I got you!” comments, but leaving urgent DMs on “Read”.'
  },
  {
    id: 'anuppiyabhani',
    isTrue: false,
    icon: '🎭',
    titleK: '៣. អនុប្បិយភាណីមិត្ត (មិត្តផ្គាប់ផ្គុន អែបអប)',
    titleE: '3. The Sycophantic Flatterer',
    pali: 'Anuppiyabhāṇī-amitta',
    shortDescK: 'មិត្តដែលយល់ស្របតាមយើងគ្រប់រឿង ធ្វើខុសក៏សរសើរ ធ្វើត្រូវក៏សរសើរ តែនៅពីក្រោយខ្នងបែរជានិន្ទាយើង។',
    shortDescE: 'The yes-man sycophant who validates your toxic mistakes, praises you to your face, and shreds your reputation behind your back.',
    canonicalPali: 'Pāpampi’ssa anujānāti, kalyāṇampi’ssa anujānāti, sammukhā vaṇṇaṁ bhāsati...',
    canonicalK: 'រមែងយល់ព្រមទាំងអំពើអាក្រក់ យល់ព្រមទាំងអំពើល្អ សរសើរនៅចំពោះមុខ និន្ទានៅកំបាំងមុខ...',
    canonicalE: 'He assents to your bad deeds; assents to your good deeds; praises you to your face; slanders you behind your back.',
    behaviors: [
      { k: 'ពេលយើងធ្វើរឿងខុស ជេរគេ ឬបំពានគេ ក៏អើអើតាម និងលើកទឹកចិត្ត។', e: 'Egging you on when you commit cruel or unethical blunders.' },
      { k: 'ពេលយើងធ្វើរឿងល្អ ក៏អែបអបសរសើរដើម្បីបានចិត្ត។', e: 'Superficially praises good deeds merely to stay in your favor.' },
      { k: 'នៅចំពោះមុខ និយាយលើកជើង បញ្ចើចបញ្ចើដូចទេវតា។', e: 'Showers you with excessive, nauseating flattery in person.' },
      { k: 'ពេលក្រោយខ្នង ដើរនិយាយដើម បង្អាប់ និងសើចចំអកកំហុសរបស់យើង។', e: 'Mocks your shortcomings and leaks your embarrassments to rivals.' }
    ],
    fullExplanationK: 'មិត្តប្រភេទនេះមានគ្រោះថ្នាក់ខ្លាំង ព្រោះគេមិនដែលប្រាប់ការពិតឱ្យយើងដឹងខ្លួនឡើយ។ គេចិញ្ចឹមអំនួត (Ego) របស់យើងឱ្យកាន់តែធំ រហូតដល់យើងធ្លាក់ក្នុងជ្រោះមហន្តរាយ ទើបគេសើចចំអកពីក្រោយខ្នង។',
    fullExplanationE: 'Extremely dangerous because they act as mirrorless yes-men. They feed your pride and encourage toxic addictions until you crash, then gleefully recount your downfall to peers.',
    modernExampleK: 'បុគ្គលិក ឬមិត្តភក្តិដែលមិនដែលហ៊ានរិះគន់ស្ថាបនា តែដើរនិយាយដើមចៅហ្វាយនាយ ឬមិត្តភក្តិក្នុងបន្ទប់ទឹក។',
    modernExampleE: 'Yes-men who enthusiastically applaud every disastrous CEO decision in boardrooms, then roast him mercilessly on anonymous forums.'
  },
  {
    id: 'apayasahaya',
    isTrue: false,
    icon: '🍻',
    titleK: '៤. អបាយសហាយមិត្ត (មិត្តនាំចូលអបាយមុខ)',
    titleE: '4. The Reckless & Ruinous Companion',
    pali: 'Apāyasahāya-amitta',
    shortDescK: 'មិត្តដែលចូលចិត្តបបួលតែផឹកស៊ី ដើរលេងយប់ លេងល្បែងស៊ីសង និងសេពគ្រឿងញៀន នាំជីវិតឱ្យវិនាសអន្តរាយ។',
    shortDescE: 'The partner in ruin who drags you into binge drinking, street brawls, gambling, and nightlife addictions until ruin consumes you.',
    canonicalPali: 'Surāmerayamajjapamādaṭṭhāyānuyoge sahāyo hoti, vikālavisikhācariyāyānuyoge sahāyo hoti...',
    canonicalK: 'ជាមិត្តក្នុងការផឹកទឹកស្រវឹង ជាមិត្តក្នុងការដើរលេងតាមច្រកល្ហកក្នុងវេលាយប់ ជាមិត្តក្នុងការដើរមើលការកម្សាន្ត...',
    canonicalE: 'He is a friend in drinking intoxicants; a friend in roaming streets at night; a friend in frequenting shows; a friend in gambling.',
    behaviors: [
      { k: 'ជាមិត្តជើងឯកក្នុងការបបួលផឹកស្រា គ្រឿងញៀន និងអបាយមុខ។', e: 'Always the first to invite you to binge drinking and clubbing.' },
      { k: 'ជាដៃគូដើរលេងយប់អធ្រាត្រ មិនខ្វល់ពីសុវត្ថិភាព ឬការងារ។', e: 'Pushes you to stay out all night, sabotaging work and family.' },
      { k: 'បបួលតែរឿងមើលការកម្សាន្ត និងល្បែងស៊ីសងគ្រប់ប្រភេទ។', e: 'Instigates gambling bets, casinos, and reckless speculation.' },
      { k: 'ពេលយើងចង់ទៅវត្ត ឬចង់រៀនសូត្រ បែរជាសើចចំអក ឬទាញទម្លាក់។', e: 'Ridicules you when you try to read, study, or go to temples.' }
    ],
    fullExplanationK: 'មិត្តប្រភេទនេះជាច្រកទ្វារនៃសេចក្ដីវិនាស។ គេសប្បាយជាមួយយើងតែពេលចាយលុយផឹកស៊ី តែពេលយើងធ្លាក់ខ្លួនញៀនថ្នាំ ជាប់គុក ឬគ្រួសារបែកបាក់ គេនឹងលែងស្គាល់យើងភ្លាម។',
    fullExplanationE: 'The direct highway to catastrophe. They are jubilant drinking buddies while your wallet is fat; but when liver cirrhosis, jail, or domestic breakdown hits, they disappear into the night.',
    modernExampleK: 'មិត្តភក្តិដែលបបួលទៅក្លឹប លេងល្បែងអនឡាញ ហើយបន្ទោសយើងថា «អន់» ឬ «កំសាក» ពេលយើងបដិសេធ។',
    modernExampleE: 'Friends who peer-pressure you into betting and substance abuse, mocking you as “boring” or “cowardly” when you decline.'
  }
]



function handleKeydown(e) {
  if (e.key === 'Escape' && selectedMitta.value) {
    expandedId.value = null
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
