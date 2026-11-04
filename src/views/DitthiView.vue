<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🧭 {{ t('មហាចត្តារីសកសូត្រ · មជ្ឈិមនិកាយ ឧបរិបណ្ណាសក', 'Majjhima Nikāya 117 · Mahācattārīsaka Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('សម្មាទិដ្ឋិ ១០ និងមិច្ឆាទិដ្ឋិវិនាសកម្ម ៣', 'Right View 10 & 3 Toxic Wrong Views') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'សម្មាទិដ្ឋិ គឺជាប្រធាននៃមគ្គទាំង ៨ និងជាគ្រឹះនៃសេចក្ដីចម្រើនទាំងអស់។ ព្រះពុទ្ធបានបែងចែកសម្មាទិដ្ឋិជាពីរថ្នាក់ គឺលោកិយ (ទសវត្ថុកសម្មាទិដ្ឋិ ១០) និងលោកុត្តរ (ការដឹងចតុរារិយសច្ច)។ ផ្ទុយទៅវិញ នត្ថិកទិដ្ឋិ, អហេតុកទិដ្ឋិ, និងអកិរិយទិដ្ឋិ គឺជាពិសពុលផ្លូវគំនិតដ៏កាចសាហាវបំផុតដែលបិទទ្វារសួគ៌ និងនិព្វាន។',
            'Sammādiṭṭhi (Right View) is the forerunner of the Noble Eightfold Path. The Buddha classified Right View into Mundane (the 10 ethical convictions) and Supramundane (penetration of the 4 Noble Truths). In contrast, the 3 Incurable Wrong Views (Nihilism, Fatalism, and Moral Absurdism) are the deadliest spiritual poisons, shutting the doors to heaven and liberation.'
          ) }}
        </p>
      </div>
    </section>

    <!-- Contrast Callout -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="card-paper p-4 border" :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-xl">✨</span>
          <h4 class="font-bold text-sm" :style="{ color: 'var(--accent)' }">
            {{ t('សម្មាទិដ្ឋិ ៖ ពន្លឺបំភ្លឺជីវិត', 'Right View: Beacon of Moral Elevation') }}
          </h4>
        </div>
        <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink)' }">
          {{ t('ជឿលើកម្មផល, ជឿលើជាតិមុខ, ស្គាល់គុណម្តាយឪពុក, នាំឱ្យមិនហ៊ានធ្វើបាប និងខិតខំសាងកុសល។', 'Trust in karmic causality, moral consequence, filial gratitude, and rebirth—anchoring unwavering ethical conduct.') }}
        </p>
      </div>

      <div class="card-paper p-4 border" :style="{ background: 'var(--bg-card-2)', borderColor: '#dc2626' }">
        <div class="flex items-center gap-2 mb-1">
          <span class="text-xl">☠️</span>
          <h4 class="font-bold text-sm text-red-500">
            {{ t('និយតមិច្ឆាទិដ្ឋិ ៣ ៖ ទ្វារធ្លាក់នរកជាទៀងទាត់', '3 Incurable Views: Direct Descent to Hell') }}
          </h4>
        </div>
        <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('បដិសេធកម្មផល, បដិសេធបុណ្យបាប, គិតថាស្លាប់ទៅសូន្យ ឬគ្មានហេតុផល, នាំឱ្យហ៊ានប្រព្រឹត្តអំពើឃោរឃៅ។', 'Denies karma, denies moral agency, asserts death ends all—giving license to reckless cruelty and sociopathy.') }}
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

    <!-- TAB 1: 10 Mundane Right Views -->
    <section v-if="activeTab === 'sammaditthi'" class="space-y-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        <div
          v-for="(item, idx) in tenRightViews"
          :key="item.id"
          class="card-paper p-4 transition-all duration-200 hover:shadow-md cursor-pointer border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
          @click="openModal(item)"
        >
          <div>
            <div class="flex items-center justify-between gap-2 mb-2">
              <span class="text-2xl">{{ item.icon }}</span>
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                    :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                #{{ khNum(idx + 1) }}
              </span>
            </div>

            <h4 class="font-bold text-sm mb-1" :style="{ color: 'var(--ink)' }">
              {{ t(item.titleK, item.titleE) }}
            </h4>
            <span class="text-xs font-mono block mb-2" :style="{ color: 'var(--accent)' }">{{ item.pali }}</span>

            <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
              {{ t(item.descK, item.descE) }}
            </p>
          </div>

          <div class="pt-2.5 mt-3 border-t flex items-center justify-between text-xs font-semibold"
               :style="{ borderColor: 'var(--border)', color: 'var(--accent)' }">
            <span>{{ t('អានអត្ថន័យពិស្តារ', 'Deep Meaning →') }}</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 2: The 3 Toxic Incurable Wrong Views -->
    <section v-if="activeTab === 'micchaditthi'" class="space-y-4">
      <div class="card-paper p-6 space-y-3">
        <h2 class="text-lg sm:text-xl font-bold font-serif" :style="{ color: '#dc2626' }">
          {{ t('និយតមិច្ឆាទិដ្ឋិ ៣ ៖ ទស្សនវិជ្ជាពុលក្នុងសម័យពុទ្ធកាល និងបច្ចុប្បន្ន', 'The 3 Niyata Micchādiṭṭhis: Toxic Materialist Philosophies') }}
        </h2>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ក្នុងគម្ពីរអដ្ឋកថាបានបញ្ជាក់ថា មិច្ឆាទិដ្ឋិទាំង ៣ នេះ ជាទិដ្ឋិដ៏ធ្ងន់បំផុត (គរុកម្ម) ដែលនាំឱ្យធ្លាក់នរកអវីចីជាទៀងទាត់ ប្រសិនបើមិនព្រមកែប្រែទាន់ពេលមុននឹងស្លាប់៖',
            'Commentaries emphasize that these 3 extreme views constitute fatal mental karma, guaranteeing descent into Avīci Hell if held obstinately until death:'
          ) }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="w in wrongViews" :key="w.id"
             class="card-paper p-5 border space-y-3 flex flex-col justify-between"
             :style="{ borderColor: '#dc2626', background: 'var(--bg-card)' }">
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-2xl">{{ w.icon }}</span>
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full text-red-500 bg-red-100 dark:bg-red-950/40">
                {{ w.doctrine }}
              </span>
            </div>
            <h3 class="font-bold text-base" :style="{ color: 'var(--ink)' }">
              {{ t(w.titleK, w.titleE) }}
            </h3>
            <span class="text-xs font-mono block text-red-500">{{ w.pali }}</span>
            <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
              {{ t(w.descK, w.descE) }}
            </p>
          </div>

          <div class="p-3 rounded-xl text-xs space-y-1.5" :style="{ background: 'var(--bg-card-2)' }">
            <strong class="block text-red-500">{{ t('គ្រោះថ្នាក់ក្នុងសង្គម៖', 'Social Hazard:') }}</strong>
            <p :style="{ color: 'var(--ink-soft)' }">{{ t(w.hazardK, w.hazardE) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Detail Drawer Modal -->
    <Transition name="modal-pop">
      <div
        v-if="selectedDitthi"
        class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm"
        @click.self="closeModal"
      >
        <div
          class="card-paper w-full max-w-2xl max-h-[90vh] sm:max-h-[85vh] flex flex-col rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          :style="{ background: 'var(--bg-card)' }"
        >
          <!-- Drawer handle for mobile -->
          <div class="sm:hidden flex justify-center pt-3 pb-1">
            <div class="w-12 h-1.5 rounded-full" :style="{ background: 'var(--border-strong)' }"></div>
          </div>

          <!-- Modal Header -->
          <div class="px-5 py-4 border-b flex items-start justify-between gap-3 shrink-0"
               :style="{ borderColor: 'var(--border)' }">
            <div class="flex items-center gap-3">
              <span class="text-3xl p-2.5 rounded-xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ selectedDitthi.icon }}
              </span>
              <div>
                <span class="text-xs px-2 py-0.5 rounded-full font-mono font-medium"
                      :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                  {{ selectedDitthi.pali }}
                </span>
                <h3 class="font-bold text-base sm:text-lg mt-0.5" :style="{ color: 'var(--ink)' }">
                  {{ t(selectedDitthi.titleK, selectedDitthi.titleE) }}
                </h3>
              </div>
            </div>

            <!-- Controls -->
            <div class="flex items-center gap-1.5 shrink-0">
              <button
                @click="toggleReaderFontSize"
                class="lang-pick px-2 py-1 text-xs shrink-0 whitespace-nowrap"
                :title="t('ប្តូរទំហំអក្សរ', 'Change font size')"
              >
                {{ readerFontSizes[readerFontSizeIdx].label }}
              </button>
              <button
                @click="closeModal"
                class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-transform active:scale-90"
                :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)' }"
                :aria-label="t('បិទ', 'Close')"
              >
                ✕
              </button>
            </div>
          </div>

          <!-- Modal Body -->
          <div
            class="p-5 sm:p-6 overflow-y-auto space-y-5 leading-relaxed"
            :class="readerFontSizes[readerFontSizeIdx].class"
            :style="{ color: 'var(--ink)' }"
          >
            <!-- Canonical Sutta Verse -->
            <div class="p-4 rounded-xl border-l-4 font-serif text-xs sm:text-sm"
                 :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
              <p class="italic mb-1 font-bold">« {{ selectedDitthi.canonicalPali }} »</p>
              <p class="text-xs opacity-80">— {{ t(selectedDitthi.canonicalK, selectedDitthi.canonicalE) }}</p>
            </div>

            <!-- Detailed Exposition -->
            <div class="space-y-2">
              <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                  :style="{ color: 'var(--accent)' }">
                <span>📖</span>
                <span>{{ t('អត្ថន័យតាមគម្ពីរអដ្ឋកថា', 'Doctrinal Meaning') }}</span>
              </h4>
              <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                {{ t(selectedDitthi.fullDescK, selectedDitthi.fullDescE) }}
              </p>
            </div>

            <!-- Practical Everyday Reflection -->
            <div class="p-4 rounded-xl space-y-2" :style="{ background: 'var(--bg-card-2)' }">
              <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                  :style="{ color: 'var(--accent)' }">
                <span>💡</span>
                <span>{{ t('សារៈសំខាន់ក្នុងការរក្សាចិត្តប្រចាំថ្ងៃ', 'Daily Ethical Significance') }}</span>
              </h4>
              <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
                {{ t(selectedDitthi.significanceK, selectedDitthi.significanceE) }}
              </p>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="px-5 py-3 border-t flex items-center justify-between shrink-0"
               :style="{ borderColor: 'var(--border)' }">
            <span class="text-xs font-mono" :style="{ color: 'var(--ink-faint)' }">
              Majjhima Nikāya 117 · Mahācattārīsaka Sutta
            </span>
            <button
              @click="closeModal"
              class="lang-pick px-4 py-2 text-xs font-semibold on shrink-0 whitespace-nowrap"
            >
              {{ t('យល់ព្រម / បិទ', 'Understood / Close') }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
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

const activeTab = ref('sammaditthi')
const selectedDitthi = ref(null)

const tabs = [
  { id: 'sammaditthi', icon: '✨', titleK: 'សម្មាទិដ្ឋិ ១០', titleE: '10 Right Views' },
  { id: 'micchaditthi', icon: '☠️', titleK: 'មិច្ឆាទិដ្ឋិ ៣ ជំពូកធំ', titleE: '3 Toxic Views' }
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

const tenRightViews = [
  {
    id: 'dinna',
    icon: '🎁',
    titleK: '១. ទានដែលឱ្យហើយមានផល',
    titleE: '1. Charity Bears Tangible Fruit',
    pali: 'Atthi dinnaṁ',
    descK: 'ជឿថា ការបរិច្ចាគទានជួយអ្នកដទៃ មិនមែនជាការបាត់បង់ឥតប្រយោជន៍ឡើយ តែបង្កើតផលជាកុសល។',
    descE: 'Confidence that selfless generosity bears positive karmic fruit, clearing greed from the heart.',
    canonicalPali: 'Atthi dinnaṁ, atthi yiṭṭhaṁ, atthi hutaṁ...',
    canonicalK: 'ទានដែលបុគ្គលបានឱ្យហើយមានផល ការបូជាធំមានផល ការសំពះគោរពមានផល...',
    canonicalE: 'There is what is given; there is what is sacrificed; there is what is offered...',
    fullDescK: 'ការជឿថាទានមានផល គឺជាគ្រឹះដំបូងនៃសីលធម៌សង្គម។ បើគ្មានជំនឿនេះ មនុស្សនឹងកំណាញ់ស្វិតស្វាញ គិតតែពីផលប្រយោជន៍ផ្ទាល់ខ្លួន ហើយសង្គមនឹងពោរពេញដោយការកេងប្រវ័ញ្ច។',
    fullDescE: 'Recognizing charity as fruitful forms the cornerstone of civil society, preventing pathological selfishness.',
    significanceK: 'ជំរុញទឹកចិត្តឱ្យចេះចែករំលែក និងជួយសង្គ្រោះជនក្រីក្រដោយសេចក្ដីរីករាយ។',
    significanceE: 'Inspires joyful altruism and generous support for vulnerable beings.'
  },
  {
    id: 'yittha',
    icon: '🕯️',
    titleK: '២. ការបូជាមានផល',
    titleE: '2. Offerings & Ceremonies Bear Fruit',
    pali: 'Atthi yiṭṭhaṁ',
    descK: 'ជឿថា ការបូជាផ្កា ធូប ទៀន ចំពោះព្រះរតនត្រ័យ ឬអ្នកមានគុណ ផ្ដល់ផលជាសេចក្ដីសុខស្ងប់។',
    descE: 'Confidence that respectful offerings to the Triple Gem cultivate reverence and merit.',
    canonicalPali: 'Atthi yiṭṭhaṁ ti mahādānam pi saphalanti passati...',
    canonicalK: 'ការបូជាធំ មិនមែនជាការឥតប្រយោជន៍ឡើយ...',
    canonicalE: 'Major acts of dedicated sacrifice and offerings generate vast merit...',
    fullDescK: 'យិដ្ឋៈ សំដៅលើការបូជាធំៗ ឬពិធីបុណ្យកុសលដែលធ្វើឡើងដោយសទ្ធាជ្រះថ្លា មិនមែនជាការសម្លាប់សត្វបូជាយញ្ញឡើយ។',
    fullDescE: 'Refers to sincere, non-violent offerings made with pure reverence to noble exemplars.',
    significanceK: 'លើកកម្ពស់វប្បធម៌ដឹងគុណ និងសន្តិភាពក្នុងសហគមន៍។',
    significanceE: 'Elevates cultural gratitude and social harmony.'
  },
  {
    id: 'huta',
    icon: '🙏',
    titleK: '៣. ការគួរសម និងបដិសណ្ឋារកិច្ចមានផល',
    titleE: '3. Hospitality & Respect Bear Fruit',
    pali: 'Atthi hutaṁ',
    descK: 'ជឿថា ការទទួលភ្ញៀវដោយសេចក្ដីគោរព និងការសម្តែងការគួរសមចំពោះអ្នកដទៃ ផ្ដល់ផលជាមិត្តភាព និងកុសល។',
    descE: 'Confidence that humble hospitality, politeness, and honoring guests generate wholesome results.',
    canonicalPali: 'Atthi hutaṁ ti āvāhanavivāhādīsu pūjāvidhānaṁ...',
    canonicalK: 'ការបដិសណ្ឋារកិច្ច និងការគួរសមមានផលពិតប្រាកដ...',
    canonicalE: 'Generous hospitality, greeting with kindness, and polite etiquette bear spiritual fruit...',
    fullDescK: 'ហ៊ុតៈ គឺការស្វាគមន៍ភ្ញៀវ ឬមនុស្សដែលមកដល់ផ្ទះយើងដោយទឹកមុខញញឹម និងការគោរព។',
    fullDescE: 'Warm reception of travelers and guests without condescension breeds goodwill and trust.',
    significanceK: 'បំបាត់អំនួត និងបង្កើតបរិយាកាសកក់ក្តៅក្នុងសង្គម។',
    significanceE: 'Cultivates humility and builds warmth in communities.'
  },
  {
    id: 'kammavipaka-view',
    icon: '⚖️',
    titleK: '៤. ផលនៃកម្មល្អ និងអាក្រក់មានពិត',
    titleE: '4. Moral Karma Produces Inevitable Fruit',
    pali: 'Atthi kammānaṁ phalaṁ vipāko',
    descK: 'ជឿជាក់ថា អំពើល្អរមែងផ្ដល់ផលល្អ អំពើអាក្រក់រមែងផ្ដល់ផលអាក្រក់ គ្មានអំពើណាដែលធ្វើហើយបាត់ស្ងាត់នោះឡើយ។',
    descE: 'Unerring certainty that good deeds yield happiness, while evil deeds inexorably yield suffering.',
    canonicalPali: 'Atthi sukatadukkaṭānaṁ kammānaṁ phalaṁ vipāko...',
    canonicalK: 'ផល និងវិបាកនៃកម្មដែលបុគ្គលធ្វើល្អហើយ និងធ្វើអាក្រក់ហើយ មានពិតប្រាកដ...',
    canonicalE: 'There is fruit and result of good and bad deeds...',
    fullDescK: 'នេះជាចំណុចកណ្តាលនៃសម្មាទិដ្ឋិទាំងអស់។ អ្នកដែលជឿលើកម្មផល នឹងមិនហ៊ានធ្វើបាប សូម្បីក្នុងទីស្ងាត់គ្មានមនុស្សឃើញក៏ដោយ ព្រោះដឹងថាកម្មផលកំពុងតាមកត់ត្រា។',
    fullDescE: 'The absolute bedrock of ethics. Believers in karma refrain from vice even in pitch darkness with no witness.',
    significanceK: 'ជាឆ្មាំការពារសីលធម៌ផ្ទាល់ខ្លួន មិនឱ្យប្រព្រឹត្តអំពើពុករលួយ ឬបៀតបៀនគេ។',
    significanceE: 'Incorruptible personal moral police restraining secret wrongdoing.'
  },
  {
    id: 'ayam-loko',
    icon: '🌍',
    titleK: '៥. លោកនេះមានពិត (ការមកកាន់ជាតិនេះ)',
    titleE: '5. This World Exists (Rebirth from Past)',
    pali: 'Atthi ayaṁ loko',
    descK: 'ជឿថា ការកើតមកក្នុងជាតិនេះ មិនមែនកើតឡើងឯងៗឡើយ គឺមកពីជាតិមុនដែលបានសាងហេតុមក។',
    descE: 'Understanding that current existence is conditioned by past lives, not born from nothingness.',
    canonicalPali: 'Atthi ayaṁ loko ti paralokato idha uppannānaṁ atthibhāvo...',
    canonicalK: 'លោកនេះមានពិត គឺមានសត្វដែលឆ្លងមកពីលោកខាងមុខ...',
    canonicalE: 'This world exists, meaning beings journeyed here from previous existences...',
    fullDescK: 'កម្ចាត់ទស្សនៈដែលយល់ថាមនុស្សកើតមកដោយចៃដន្យគ្មានឬសគល់។',
    fullDescE: 'Destroys random biological accidentalism, tracing consciousness across lives.',
    significanceK: 'យល់ដឹងពីមូលហេតុនៃភាពមិនស្មើគ្នានៃមនុស្ស (ខ្លះកើតមកមាន ខ្លះក្រ)។',
    significanceE: 'Explains human inequalities via diverse karmic trajectories.'
  },
  {
    id: 'paro-loko',
    icon: '🌌',
    titleK: '៦. លោកខាងមុខមានពិត (ជាតិក្រោយ)',
    titleE: '6. Future Worlds Exist (Life After Death)',
    pali: 'Atthi paro loko',
    descK: 'ជឿថា ស្លាប់ទៅមិនមែនសូន្យឡើយ ដរាបណានៅមានកិលេស វិញ្ញាណនឹងត្រូវបន្តទៅកើតក្នុងភពថ្មីទៀត។',
    descE: 'Confidence that consciousness does not terminate at clinical death; rebirth continues as long as craving remains.',
    canonicalPali: 'Atthi paro loko ti ito paralokaṁ gantabbabhāvo...',
    canonicalK: 'លោកខាងមុខមានពិត គឺមានដំណើរទៅកាន់ភពថ្មីបន្ទាប់ពីស្លាប់...',
    canonicalE: 'The other world exists, meaning the journey continues after bodily demise...',
    fullDescK: 'កម្ចាត់ឧច្ឆេទទិដ្ឋិ (ការជឿថាស្លាប់ទៅរលត់សូន្យ) ដែលជាមូលហេតុធ្វើឱ្យមនុស្សហ៊ានប្រព្រឹត្តអំពើឃោរឃៅដើម្បីប្រយោជន៍តែមួយជាតិនេះ។',
    fullDescE: 'Demolishes nihilism which tempts people into hedonistic cruelty under the motto “you only live once”.',
    significanceK: 'ការរៀបចំទុនជីវិតសម្រាប់អនាគតវែងឆ្ងាយ មិនមែនគិតត្រឹមតែមួយជាតិនេះឡើយ។',
    significanceE: 'Promotes long-term spiritual stewardship spanning beyond this single lifetime.'
  },
  {
    id: 'mata',
    icon: '🤱',
    titleK: '៧. គុណម្តាយមានពិត',
    titleE: '7. Motherhood Carries Special Karmic Weight',
    pali: 'Atthi mātā',
    descK: 'ជឿថា ម្តាយជាអ្នកមានគុណដ៏ធំធេង ការតបគុណម្តាយបានបុណ្យធំ រីឯការធ្វើបាបម្តាយមានទោសធ្ងន់ធ្ងរ។',
    descE: 'Recognition of maternal debt: honoring mother yields immense merit, while harming her constitutes grave heinous karma.',
    canonicalPali: 'Atthi mātā ti māturupaṭṭhāne phalaṁ atthi...',
    canonicalK: 'គុណម្តាយមានពិត គឺការបម្រើម្តាយរមែងផ្ដល់ផលបុណ្យដ៏ធំធេង...',
    canonicalE: 'There is mother, meaning filial care toward mothers yields profound blessings...',
    fullDescK: 'ម្តាយជាអ្នកទ្រទ្រង់គភ៌ ៩ ខែ និងលះបង់ឈាមសាច់ដើម្បីកូន។ ការដឹងគុណម្តាយជាសញ្ញានៃសប្បុរស។',
    fullDescE: 'Mothers sacrifice health and blood to nurture offspring; honoring maternal devotion is foundational virtue.',
    significanceK: 'សេចក្ដីកតញ្ញូចំពោះម្តាយ ជាប្រភពនៃភាពចម្រើនរុងរឿងក្នុងជីវិត។',
    significanceE: 'Filial piety toward mothers attracts blessings and protective forces.'
  },
  {
    id: 'pita',
    icon: '👨‍👧',
    titleK: '៨. គុណឪពុកមានពិត',
    titleE: '8. Fatherhood Carries Special Karmic Weight',
    pali: 'Atthi pitā',
    descK: 'ជឿថា ឪពុកជាអ្នកមានគុណក្នុងការចិញ្ចឹមបីបាច់ និងការពារកូន ការតបគុណឪពុកជាបុណ្យកុសលដ៏ប្រសើរ។',
    descE: 'Recognition of paternal debt: caring for fathers brings deep moral integrity and karmic blessing.',
    canonicalPali: 'Atthi pitā ti piturupaṭṭhāne phalaṁ atthi...',
    canonicalK: 'គុណឪពុកមានពិត គឺការបម្រើឪពុករមែងផ្ដល់ផលជាសុខ...',
    canonicalE: 'There is father, meaning serving fathers generates noble merit...',
    fullDescK: 'ឪពុកជាអ្នកខិតខំរកស៊ីដើម្បីទ្រទ្រង់គ្រួសារ និងជាម្លប់ដ៏កក់ក្តៅ។',
    fullDescE: 'Fathers bear hardships to shield families; reciprocating their devotion anchors ethical character.',
    significanceK: 'ការដឹងគុណឪពុក ការពារមិនឱ្យកូនក្លាយជាមនុស្សរមិលគុណ។',
    significanceE: 'Immunizes offspring against moral ingratitude.'
  },
  {
    id: 'opapatika',
    icon: '👼',
    titleK: '៩. សត្វដែលកើតឡើងឯកឯងមានពិត (ឱបបាតិកៈ)',
    titleE: '9. Spontaneously Arising Beings Exist',
    pali: 'Atthi sattā opapātikā',
    descK: 'ជឿថា មានសត្វដែលកើតឡើងដោយមិនបាច់ឆ្លងកាត់ផ្ទៃម្តាយ ដូចជា ទេវតា ព្រហ្ម នរក និងប្រេត។',
    descE: 'Belief in spontaneously appearing beings inhabiting other realms: devas, brahmas, ghosts, and hell denizens.',
    canonicalPali: 'Atthi sattā opapātikā ti devā nerayikā ca atthi...',
    canonicalK: 'ពួកសត្វដែលជាឱបបាតិកៈមានពិត គឺពួកទេវតា និងពួកសត្វនរក...',
    canonicalE: 'There are spontaneously reborn beings, including heavenly gods and infernal creatures...',
    fullDescK: 'ភ្នែកមនុស្សសាមញ្ញមិនអាចមើលឃើញទេវតា ឬប្រេតបានឡើយ តែមិនមែនមានន័យថាពួកគេមិនមាននោះទេ។ វិញ្ញាណក្នុងចក្រវាលមានច្រើនកម្រិត។',
    fullDescE: 'The limitation of the human optical spectrum does not disprove multidimensional realities attested by meditators.',
    significanceK: 'ដាស់សតិកុំឱ្យប្រហែស ព្រោះសត្វនរក និងទេវតាជាលទ្ធផលនៃកម្មជាក់ស្តែង។',
    significanceE: 'Instills solemn awe regarding cosmic dimensions of karmic ripening.'
  },
  {
    id: 'samana-brahmana',
    icon: '🧘',
    titleK: '១០. មានសមណៈព្រាហ្មណ៍ដែលត្រាស់ដឹងពិត',
    titleE: '10. Enlightened Masters Truly Exist',
    pali: 'Atthi loke samaṇabrāhmaṇā...',
    descK: 'ជឿថា ក្នុងលោកនេះមានព្រះពុទ្ធ និងព្រះអរហន្ត ដែលបានបដិបត្តិចំផ្លូវ ត្រាស់ដឹងសច្ចធម៌ដោយខ្លួនឯង ហើយអាចបង្រៀនអ្នកដទៃបាន។',
    descE: 'Confidence that fully awakened recluses exist who have directly realized truth and teach it authentically.',
    canonicalPali: 'Atthi loke samaṇabrāhmaṇā sammaggatā sammāpaṭipannā...',
    canonicalK: 'ក្នុងលោកនេះ មានសមណៈ និងព្រាហ្មណ៍ទាំងឡាយ ដែលដើរទៅកាន់ផ្លូវប្រពៃ ប្រតិបត្តិប្រពៃ...',
    canonicalE: 'There are recluses who have attained rightly, practiced rightly, and proclaim this world and the beyond...',
    fullDescK: 'នេះជាជំនឿលើលទ្ធភាពនៃការរួចទុក្ខរបស់មនុស្សជាតិ។ យើងមិនមែនជាទាសករនៃជោគវាសនាទេ មនុស្សគ្រប់រូបអាចអភិវឌ្ឍបញ្ញារហូតដល់ត្រាស់ដឹងដូចព្រះពុទ្ធបាន។',
    fullDescE: 'The crowning faith in human perfectibility: that suffering can be totally conquered by human effort and wisdom.',
    significanceK: 'ផ្ដល់ក្តីសង្ឃឹម និងការលើកទឹកចិត្តក្នុងការចម្រើនសមាធិ និងវិបស្សនា។',
    significanceE: 'Provides boundless optimism that liberation is achievable right here.'
  }
]

const wrongViews = [
  {
    id: 'natthika',
    icon: '☠️',
    doctrine: 'Ajita Kesakambalī',
    titleK: '១. នត្ថិកទិដ្ឋិ (គ្មានអ្វីទាំងអស់ / Nihilism)',
    titleE: '1. Natthika-diṭṭhi (Nihilism)',
    pali: 'Natthika-diṭṭhi',
    descK: 'ការបដិសេធទាំងស្រុងលើបុណ្យបាប កម្មផល ជាតិមុន ជាតិក្រោយ និងគុណម្តាយឪពុក។ ជឿថាមនុស្សកើតមកពីធាតុ ៤ ស្លាប់ទៅរលាយសូន្យ។',
    descE: 'Total moral nihilism denying karma, afterlife, and virtues. Believes humans dissolve into 4 elements at death with zero consequences.',
    hazardK: 'នាំឱ្យមនុស្សហ៊ានប្រព្រឹត្តអំពើឃាតកម្ម បោកប្រាស់ និងអំពើអាក្រក់គ្រប់បែបយ៉ាងឱ្យតែខ្លួនមានក្តីសុខក្នុងជាតិនេះ ព្រោះគិតថាស្លាប់ទៅរួចខ្លួន។',
    hazardE: 'Gives green light to sociopathic exploitation, crime, and cruelty under the delusion that death cancels all accounts.'
  },
  {
    id: 'ahetuka',
    icon: '🎲',
    doctrine: 'Makkhali Gosāla',
    titleK: '២. អហេតុកទិដ្ឋិ (គ្មានហេតុគ្មានបច្ច័យ / Fatalism)',
    titleE: '2. Ahetuka-diṭṭhi (Fatalism / Accidentalism)',
    pali: 'Ahetuka-diṭṭhi',
    descK: 'ជឿថាសត្វលោកបរិសុទ្ធ ឬសៅហ្មងដោយគ្មានហេតុផល មិនមែនព្រោះតែកម្មរបស់ខ្លួនឡើយ គឺត្រូវកំណត់ដោយព្រហ្មលិខិត ឬជោគវាសនារួចជាស្រេច។',
    descE: 'Denies conditionality and moral responsibility. Asserts beings are corrupted or purified strictly by deterministic fate without personal cause.',
    hazardK: 'បំផ្លាញការព្យាយាមរបស់មនុស្ស នាំឱ្យខ្ជិលច្រអូស បន្ទោសព្រហ្មលិខិត មិនព្រមអភិវឌ្ឍខ្លួន ឬកែប្រែទម្លាប់អាក្រក់។',
    hazardE: 'Paralyzes human agency and initiative, breeding fatalistic resignation and passivity.'
  },
  {
    id: 'akiriya',
    icon: '🛑',
    doctrine: 'Pūraṇa Kassapa',
    titleK: '៣. អកិរិយទិដ្ឋិ (គ្មានអំពើជាបុណ្យបាប / Moral Inefficacy)',
    titleE: '3. Akiriya-diṭṭhi (Inefficacy of Action)',
    pali: 'Akiriya-diṭṭhi',
    descK: 'ជឿថា ទោះបីជាសម្លាប់គេ លួចទ្រព្យគេ ឬធ្វើទាន ជួយសង្គ្រោះគេ ក៏មិនឈ្មោះថាធ្វើបាប ឬធ្វើបុណ្យដែរ គឺគ្មានផលកម្មអ្វីទាំងអស់។',
    descE: 'Denies the ethical reality of actions. Claims slaughtering living beings incurs no evil, and massive charity incurs no merit.',
    hazardK: 'បំផ្លាញច្បាប់សីលធម៌ទាំងស្រុង ធ្វើឱ្យមនុស្សលែងស្គាល់ខុសត្រូវ ស្មើនឹងការបង្វែរមនុស្សឱ្យទៅជាសត្វព្រៃ។',
    hazardE: 'Utterly dismantles human conscience, degrading humanity into predatory beast-like brutality.'
  }
]

function openModal(item) {
  selectedDitthi.value = item
  lockBodyScroll()
}

function closeModal() {
  selectedDitthi.value = null
  unlockBodyScroll()
}

function lockBodyScroll() {
  document.body.style.overflow = 'hidden'
}

function unlockBodyScroll() {
  document.body.style.overflow = ''
}

function handleKeydown(e) {
  if (e.key === 'Escape' && selectedDitthi.value) {
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
