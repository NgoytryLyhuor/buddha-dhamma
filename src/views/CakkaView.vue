<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>☸️ {{ t('អង្គុត្តរនិកាយ ចតុក្កនិបាត · ចក្កសូត្រ', 'Aṅguttara Nikāya 4.31 · Cakka Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('ចក្ក ៤ ៖ កង់នៃភាពចម្រើនរុងរឿង', 'Cakka 4: The Four Wheels of Prosperity') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ដូចរទេះដែលត្រូវការកង់ទាំងបួនទើបអាចវិលរំកិលទៅមុខបានយ៉ាងរលូនយ៉ាងណា មនុស្សយើងក៏ត្រូវការធម៌ចក្កទាំងបួននេះ ដើម្បីបង្វិលជីវិតឆ្ពោះទៅរកភាពជោគជ័យ សេចក្ដីសុខសាន្ត ទាំងក្នុងផ្លូវលោក (លោ Frontend) និងផ្លូវធម៌ (លោ Lokuttara) យ៉ាងនោះដែរ។',
            'Just as a carriage relies on all four wheels to roll smoothly forward, an individual depends on these 4 Cakkas to drive life toward triumph, peace, and spiritual realization in both mundane society and transcendental liberation.'
          ) }}
        </p>
      </div>
    </section>

    <!-- Carriage Analogy Graphic Banner -->
    <div class="card-paper p-5 border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="space-y-1 text-center sm:text-left">
          <span class="text-xs font-bold uppercase tracking-wider" :style="{ color: 'var(--accent)' }">
            {{ t('ឧបមាដូចរទេះវិលឆ្ពោះទៅមុខ', 'Carriage of Life Metaphor') }}
          </span>
          <h3 class="font-bold text-base" :style="{ color: 'var(--ink)' }">
            {{ t('តើកង់ជីវិតទាំង ៤ របស់អ្នកមានតុល្យភាពហើយឬនៅ?', 'Are the 4 wheels of your life balanced?') }}
          </h3>
          <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
            {{ t('បើខ្វះកង់ណាមួយ រទេះជីវិតនឹងរលាក់ ឬក្រឡាប់ មិនអាចឈានដល់គោលដៅកំពូលឡើយ។', 'If any wheel is broken or missing, the vehicle of life rattles or overturns before reaching its destination.') }}
          </p>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <div v-for="(c, cIdx) in cakkaList" :key="c.id"
               class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 cursor-pointer transition-transform hover:scale-110"
               :style="{ borderColor: 'var(--accent)', background: 'var(--bg-card)', color: 'var(--accent)' }"
               :title="t(c.titleK, c.titleE)"
               @click="openModal(c)">
            {{ khNum(cIdx + 1) }}
          </div>
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

    <!-- TAB 1: 4 Cakka Cards -->
    <section v-if="activeTab === 'wheels'" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="(item, idx) in cakkaList"
        :key="item.id"
        class="card-paper p-5 transition-all duration-200 hover:shadow-md cursor-pointer border flex flex-col justify-between"
        :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        @click="openModal(item)"
      >
        <div>
          <div class="flex items-start justify-between gap-3 mb-3">
            <div class="flex items-center gap-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ item.icon }}
              </span>
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-xs font-bold font-mono px-2 py-0.5 rounded-full"
                        :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                    {{ t('កង់ទី', 'Wheel') }} {{ khNum(idx + 1) }}
                  </span>
                  <span class="text-xs font-mono font-medium" :style="{ color: 'var(--ink-faint)' }">
                    {{ item.pali }}
                  </span>
                </div>
                <h3 class="font-bold text-base sm:text-lg mt-1" :style="{ color: 'var(--ink)' }">
                  {{ t(item.titleK, item.titleE) }}
                </h3>
              </div>
            </div>
          </div>

          <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
            {{ t(item.descrK, item.descrE) }}
          </p>

          <!-- Core practical takeaway -->
          <div class="p-3 rounded-xl mb-4 text-xs space-y-1" :style="{ background: 'var(--bg-card-2)' }">
            <div class="font-semibold flex items-center gap-1.5" :style="{ color: 'var(--ink)' }">
              <span>🎯</span>
              <span>{{ t('សារៈសំខាន់ក្នុងការអនុវត្ត៖', 'Core Application:') }}</span>
            </div>
            <p :style="{ color: 'var(--ink-soft)' }">{{ t(item.takeawayK, item.takeawayE) }}</p>
          </div>
        </div>

        <div class="pt-3 border-t flex items-center justify-between text-xs font-semibold"
             :style="{ borderColor: 'var(--border)', color: 'var(--accent)' }">
          <span>{{ t('អានការវិភាគលម្អិត និងគតិបណ្ឌិត', 'Read Deep Analysis & Sutta Insight →') }}</span>
          <span>→</span>
        </div>
      </div>
    </section>

    <!-- TAB 2: Self-Audit Balance Check -->
    <section v-if="activeTab === 'audit'" class="card-paper p-6 space-y-6">
      <div class="text-center max-w-xl mx-auto space-y-2">
        <h2 class="text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('ការពិនិត្យតុល្យភាពកង់ជីវិតទាំង ៤', 'Life Wheels Balance Self-Audit') }}
        </h2>
        <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
          {{ t('វាយតម្លៃពិន្ទុពី ១ ដល់ ៥ លើកង់នីមួយៗ ដើម្បីដឹងថាតើអ្នកត្រូវពង្រឹងផ្នែកណាដើម្បីឱ្យជីវិតរត់ទៅមុខដោយសុវត្ថិភាព។', 'Rate each wheel from 1 to 5 to discover which dimension of your life needs reinforcement.') }}
        </p>
      </div>

      <div class="space-y-4 max-w-2xl mx-auto">
        <div
          v-for="(wheel, wIdx) in cakkaList"
          :key="wheel.id"
          class="p-4 rounded-xl border space-y-3"
          :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-xl">{{ wheel.icon }}</span>
              <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">
                {{ khNum(wIdx + 1) }}. {{ t(wheel.titleK, wheel.titleE) }}
              </h4>
            </div>
            <span class="text-sm font-bold font-mono px-2 py-0.5 rounded-lg"
                  :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
              {{ khNum(auditScores[wheel.id] || 3) }}/៥
            </span>
          </div>

          <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
            {{ t(wheel.auditQuestionK, wheel.auditQuestionE) }}
          </p>

          <!-- Range slider -->
          <div class="flex items-center gap-3 pt-1">
            <span class="text-xs font-mono" :style="{ color: 'var(--ink-faint)' }">១</span>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              v-model.number="auditScores[wheel.id]"
              class="w-full accent-amber-600 cursor-pointer"
            />
            <span class="text-xs font-mono" :style="{ color: 'var(--ink-faint)' }">៥</span>
          </div>
        </div>

        <!-- Audit Summary -->
        <div class="card-paper p-5 border-2 text-center space-y-3" :style="{ borderColor: 'var(--accent)' }">
          <h4 class="font-bold text-base" :style="{ color: 'var(--accent)' }">
            {{ t('ពិន្ទុសរុប៖', 'Total Balance Score:') }} {{ khNum(totalAuditScore) }} / ២០
          </h4>
          <p class="text-xs sm:text-sm max-w-md mx-auto" :style="{ color: 'var(--ink-soft)' }">
            {{ auditEvaluation }}
          </p>
        </div>
      </div>
    </section>

    <!-- Detail Drawer Modal -->
    <Transition name="modal-pop">
      <div
        v-if="selectedCakka"
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
                {{ selectedCakka.icon }}
              </span>
              <div>
                <span class="text-xs px-2 py-0.5 rounded-full font-mono font-medium"
                      :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                  {{ selectedCakka.pali }}
                </span>
                <h3 class="font-bold text-base sm:text-lg mt-0.5" :style="{ color: 'var(--ink)' }">
                  {{ t(selectedCakka.titleK, selectedCakka.titleE) }}
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
              <p class="italic mb-1 font-bold">« {{ selectedCakka.suttaVersePali }} »</p>
              <p class="text-xs opacity-80">— {{ t(selectedCakka.suttaVerseK, selectedCakka.suttaVerseE) }}</p>
            </div>

            <!-- Deep Definition & Commentary -->
            <div class="space-y-2">
              <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                  :style="{ color: 'var(--accent)' }">
                <span>📖</span>
                <span>{{ t('អត្ថន័យតាមគម្ពីរអដ្ឋកថា', 'Commentarial Exposition') }}</span>
              </h4>
              <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                {{ t(selectedCakka.commentaryK, selectedCakka.commentaryE) }}
              </p>
            </div>

            <!-- Practical Pillars -->
            <div class="space-y-2 p-4 rounded-xl border"
                 :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
              <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                  :style="{ color: 'var(--accent)' }">
                <span>🛡️</span>
                <span>{{ t('សសរស្តម្ភអនុវត្តជាក់ស្ដែង', 'Practical Pillars') }}</span>
              </h4>
              <ul class="text-xs sm:text-sm space-y-2 list-disc pl-5" :style="{ color: 'var(--ink)' }">
                <li v-for="(p, pIdx) in selectedCakka.pillars" :key="pIdx">
                  <strong :style="{ color: 'var(--accent)' }">{{ t(p.titleK, p.titleE) }}៖</strong>
                  <span class="ml-1" :style="{ color: 'var(--ink-muted)' }">{{ t(p.descK, p.descE) }}</span>
                </li>
              </ul>
            </div>

            <!-- Danger of Lacking this Wheel -->
            <div class="space-y-2 p-4 rounded-xl" :style="{ background: 'var(--bg-card-2)' }">
              <h4 class="font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                  :style="{ color: '#dc2626' }">
                <span>⚠️</span>
                <span>{{ t('គ្រោះថ្នាក់ប្រសិនបើខ្វះកង់នេះ', 'Risk if this Wheel is Missing') }}</span>
              </h4>
              <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
                {{ t(selectedCakka.riskK, selectedCakka.riskE) }}
              </p>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="px-5 py-3 border-t flex items-center justify-between shrink-0"
               :style="{ borderColor: 'var(--border)' }">
            <span class="text-xs font-mono" :style="{ color: 'var(--ink-faint)' }">
              Aṅguttara Nikāya 4.31 · Cakka Sutta
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

const activeTab = ref('wheels')
const selectedCakka = ref(null)

const tabs = [
  { id: 'wheels', icon: '☸️', titleK: 'កង់ទាំង ៤', titleE: 'The 4 Wheels' },
  { id: 'audit', icon: '⚖️', titleK: 'វាយតម្លៃជីវិតផ្ទាល់ខ្លួន', titleE: 'Life Audit' }
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

const cakkaList = [
  {
    id: 'patirupa',
    icon: '🏡',
    titleK: 'បដិរូបទេសវាសៈ',
    titleE: 'Living in a Suitable Locality',
    pali: 'Patirūpadesavāsa',
    descrK: 'ការស្ថិតនៅក្នុងភូមិស្រុក តំបន់ ឬបរិស្ថានដែលសមរម្យ មានសន្តិភាព មានច្បាប់ទម្លាប់ល្អ មានការអប់រំ និងសម្បូរដោយធម៌វិន័យ។',
    descrE: 'Residing in a conducive environment blessed with peace, rule of law, opportunities for learning, and spiritual nourishment.',
    takeawayK: 'ជ្រើសរើសបរិស្ថានជុំវិញខ្លួនទាំងកន្លែងរស់នៅ និងកន្លែងធ្វើការដែលលើកកម្ពស់គុណធម៌ មិនមែនជាទីសម្បូរដោយអបាយមុខ។',
    takeawayE: 'Actively choose living and working environments that cultivate virtues rather than vice and conflict.',
    suttaVersePali: 'Patirūpadesavāso ca, pubbe ca katapuññatā...',
    suttaVerseK: 'ការនៅក្នុងប្រទេសដ៏សមគួរ ១ ការជាអ្នកមានបុណ្យបានធ្វើទុកហើយក្នុងកាលមុន ១... (មង្គលសូត្រ)',
    suttaVerseE: 'Living in a suitable region, having made merit in past times... This is the highest blessing (Mangala Sutta).',
    commentaryK: 'ពាក្យថា «ទេសដ៏សមគួរ» តាមគម្ពីរអដ្ឋកថា សំដៅលើទីកន្លែងដែលមានបរិស័ទ ៤ ពួក (ភិក្ខុ ភិក្ខុនី ឧបាសក ឧបាសិកា) មានវត្តអារាម គ្រូអាចារ្យពូកែ និងគ្មានសង្គ្រាម ឬចោរកម្ម។ ក្នុងសម័យបច្ចុប្បន្ន រួមបញ្ចូលទាំងប្រទេសដែលមាននីតិរដ្ឋ សន្តិសុខ និងសេរីភាពក្នុងការប្រតិបត្តិធម៌។',
    commentaryE: 'In the commentaries, a suitable land is one endowed with virtuous teachers, religious practitioners, order, and physical safety. In modern times, it encompasses regions governed by justice, educational abundance, and moral liberty.',
    pillars: [
      { titleK: 'សុវត្ថិភាពសង្គម', titleE: 'Social Safety', descK: 'ទីកន្លែងដែលគ្មានអំពើហិង្សា និងការគាបសង្កត់។', descE: 'Freedom from violence and systemic oppression.' },
      { titleK: 'បរិស្ថានចំណេះដឹង', titleE: 'Intellectual Environment', descK: 'ងាយស្រួលស្វែងរកសាលារៀន បណ្ណាល័យ និងបណ្តាញអប់រំ។', descE: 'Accessible schools, books, and noble knowledge hubs.' },
      { titleK: 'បរិយាកាសធម៌', titleE: 'Dhammic Sanctuary', descK: 'មានវត្តអារាម និងសហគមន៍ដែលចម្រើនសមាធិ។', descE: 'Proximity to temples and mindful communities.' }
    ],
    riskK: 'បើរស់នៅក្នុងកន្លែងសម្បូរអបាយមុខ ល្បែងស៊ីសង គ្រឿងញៀន និងអំពើពុករលួយ ទោះបីជាមនុស្សល្អក៏ងាយនឹងធ្លាក់ចុះខូចខាតដែរ ដូចដើមឈើដុះលើដីគ្មានជីជាតិ។',
    riskE: 'Living among rampant gambling, crime, and corruption degrades even a well-intentioned person over time, like a seed planted in toxic soil.',
    auditQuestionK: 'តើបរិស្ថានរស់នៅ និងកន្លែងធ្វើការបច្ចុប្បន្នរបស់អ្នក ជួយលើកកម្ពស់សុខភាពផ្លូវចិត្ត និងគុណធម៌របស់អ្នកកម្រិតណា?',
    auditQuestionE: 'How supportive is your current environment in fostering mental peace, growth, and moral integrity?'
  },
  {
    id: 'sappurisa',
    icon: '🤝',
    titleK: 'សប្បុរិសូបស្សយៈ',
    titleE: 'Associating with Noble People',
    pali: 'Sappurisūpassaya',
    descrK: 'ការសេពគប់ និងជ្រកកោនក្រោមម្លប់នៃសប្បុរស ឬកល្យាណមិត្ត ដែលជាអ្នកមានសីលធម៌ បញ្ញា និងការណែនាំដ៏ត្រឹមត្រូវ។',
    descrE: 'Relying on and associating with the wise, virtuous mentors, and ethical companions who guide one away from wrongdoing.',
    takeawayK: 'រាប់អានមិត្តដែលនាំទៅរកការចម្រើន ស្ដាប់ដំបូន្មានរបស់គ្រូល្អ និងជៀសវាងមិត្តបាបដែលទាញទម្លាក់។',
    takeawayE: 'Surround yourself with ethical mentors and peers who encourage wisdom; cut off harmful toxic associations.',
    suttaVersePali: 'Sappurisūpassayo vāpi, sotāpattiyaṅgaṁ pavuccati.',
    suttaVerseK: 'ការសេពគប់សប្បុរស គឺជាអង្គនៃសោតាបត្តិផលដ៏សំខាន់ទីមួយ (សំយុត្តនិកាយ)',
    suttaVerseE: 'Association with virtuous people is the very first factor leading to Stream-Entry (Saṁyutta Nikāya).',
    commentaryK: 'សប្បុរស សំដៅលើព្រះពុទ្ធ ព្រះអរហន្ត ឬបុគ្គលដែលមានសីល ៥ បរិសុទ្ធ មានហិរិ-ឱត្តប្បៈ (ខ្មាសបាប-ខ្លាចបាប)។ ការបានជួបមនុស្សបែបនេះ ជួយដាស់សតិឱ្យយើងមិនហ៊ានប្រព្រឹត្តអាក្រក់ និងរៀនសូត្រគតិបណ្ឌិតពីរាល់កាយវិការរបស់ពួកគាត់។',
    commentaryE: 'Sappurisa denotes the Buddha, enlightened disciples, and individuals grounded in moral conscience (Hiri-Ottappa). Associating with them acts as a mirror that dissolves careless conduct.',
    pillars: [
      { titleK: 'គ្រូអាចារ្យល្អ', titleE: 'Noble Teachers', descK: 'គ្រូដែលបង្រៀនទាំងចំណេះដឹង និងសីលធម៌ផ្ទាល់ខ្លួន។', descE: 'Mentors embodying both practical skill and genuine character.' },
      { titleK: 'មិត្តភក្តិល្អ (កល្យាណមិត្ត)', titleE: 'True Friends', descK: 'មិត្តដែលជួយកាលមានអាសន្ន មិននាំចូលអបាយមុខ។', descE: 'Companions who stand by during hardship and dissuade bad deeds.' },
      { titleK: 'ការចេះស្ដាប់ដំបូន្មាន', titleE: 'Open Receptivity', descK: 'មានសេចក្ដីសុភាពរាបសារ ហ៊ានទទួលការរិះគន់ស្ថាបនា។', descE: 'Humble readiness to accept constructive critique from elders.' }
    ],
    riskK: 'ការសេពគប់មនុស្សពាល ដូចស្លឹកឈើខ្ចប់ត្រីស្អុយ រមែងឆ្លងក្លិនស្អុយតាមគ្នា ទោះមិនចង់ក៏ត្រូវគេមើលឃើញថាជាមនុស្សអាក្រក់ដែរ។',
    riskE: 'Associating with unwholesome friends is like wrapping rotten fish in clean leaves; the stench inevitably transfers, ruining reputation and character.',
    auditQuestionK: 'តើមិត្តភក្តិជិតស្និទ្ធបំផុត ៥ នាក់របស់អ្នក ជាមនុស្សដែលលើកទឹកចិត្តអ្នកឱ្យធ្វើរឿងល្អ ឬនាំអ្នកទៅរកអបាយមុខ?',
    auditQuestionE: 'Do your 5 closest companions inspire you to pursue wisdom and honesty, or distract you with harmful habits?'
  },
  {
    id: 'attasamma',
    icon: '🧭',
    titleK: 'អត្តសម្មាបណិធិ',
    titleE: 'Setting Oneself on the Right Path',
    pali: 'Attasammāpaṇidhi',
    descrK: 'ការតម្កល់ខ្លួនឱ្យត្រូវផ្លូវ ទាំងផ្លូវកាយ វាចា ចិត្ត ការកែប្រែទម្លាប់អាក្រក់ និងការកំណត់គោលដៅជីវិតឱ្យច្បាស់លាស់។',
    descrE: 'Directing oneself rightly: cultivating self-discipline, sound moral values, goal-setting, and reforming unwholesome habits.',
    takeawayK: 'កុំរង់ចាំព្រហ្មលិខិត ឬពឹងផ្អែកតែលើអ្នកដទៃ ចូរយកឈ្នះចិត្តខ្លួនឯង និងរៀបចំជីវិតឱ្យដើរលើផ្លូវសុចរិត។',
    takeawayE: 'Do not passively blame destiny; take radical ownership of your conduct, discipline, and ethical direction.',
    suttaVersePali: 'Attā hi attano nātho, ko hi nātho paro siyā...',
    suttaVerseK: 'ខ្លួនជាទីពឹងនៃខ្លួន អ្នកដទៃឯណាជាទីពឹងបាន... (ធម្មបទ. ១៦០)',
    suttaVerseE: 'One is one’s own refuge; what other refuge could there be? (Dhammapada 160).',
    commentaryK: 'អត្តសម្មាបណិធិ ជាកង់ដែលសំខាន់បំផុត ព្រោះទោះបីជានៅក្នុងប្រទេសល្អ និងមានគ្រូល្អយ៉ាងណា បើខ្លួនឯងមិនព្រមកែទម្លាប់ មិនព្រមតម្កល់ចិត្តក្នុងសីល ធានាថានឹងមិនអាចសម្រេចអ្វីបានឡើយ។ ដូចពាក្យបុរាណពោលថា «នាំសេះទៅមាត់ទឹកបាន តែមិនអាចបង្ខំឱ្យសេះផឹកទឹកបានឡើយ»។',
    commentaryE: 'Self-direction is the driving master-wheel. Even in the finest country under the greatest teacher, without personal grit and moral self-discipline, no lasting attainment is possible.',
    pillars: [
      { titleK: 'ការកែទម្លាប់', titleE: 'Habit Transformation', descK: 'លះបង់ទម្លាប់ខ្ជិល ច្រណែន មួម៉ៅ មកជាការអត់ធ្មត់។', descE: 'Actively weeding out procrastination and resentment.' },
      { titleK: 'ការរក្សាសីល', titleE: 'Moral Integrity', descK: 'ប្រកាន់ខ្ជាប់សីល ៥ មិនបំពានអ្នកដទៃដើម្បីផលប្រយោជន៍ខ្លួន។', descE: 'Holding the 5 Precepts firmly regardless of temptation.' },
      { titleK: 'គោលដៅជីវិតខ្ពស់', titleE: 'Noble Life Goals', descK: 'កំណត់គោលដៅដើម្បីប្រយោជន៍ខ្លួន និងប្រយោជន៍សង្គម។', descE: 'Setting meaningful milestones that benefit self and humanity.' }
    ],
    riskK: 'បើខ្វះកង់នេះ មនុស្សនឹងក្លាយជាទូកគ្មានចង្កូត រសាត់តាមខ្យល់តណ្ហា ងាយធ្លាក់ចូលក្នុងវិប្បដិសារី (ការស្ដាយក្រោយ) ពេលចាស់ជរា។',
    riskE: 'Lacking self-direction leaves a person like a rudderless ship drifting into whirlpools of regret when youth fades.',
    auditQuestionK: 'តើអ្នកមានវិន័យលើខ្លួនឯងកម្រិតណា ក្នុងការទប់ចិត្តមិនឱ្យធ្វើរឿងខុស និងរក្សាការប្រឹងប្រែងដើម្បីគោលដៅល្អ?',
    auditQuestionE: 'How strongly can you restrain impulses, uphold personal discipline, and stay committed to your ethical goals?'
  },
  {
    id: 'pubbe',
    icon: '✨',
    titleK: 'បុព្វេកតបុញ្ញតា',
    titleE: 'Having Past Meritorious Foundations',
    pali: 'Pubbekatapuññatā',
    descrK: 'ការបានសន្សំបុណ្យកុសលទុកពីមុនមក ទាំងពីអតីតជាតិ និងអំពើល្អដែលបានប្រព្រឹត្តកាលពីក្មេង ដែលផ្ដល់ផលជាឱកាសល្អក្នុងបច្ចុប្បន្ន។',
    descrE: 'Having accumulated wholesome merits and spiritual potentials in the past, yielding fertile opportunities and wisdom today.',
    takeawayK: 'កុំចាំបាច់ទាល់តែមានរឿងអាក្រក់កើតឡើងទើបធ្វើបុណ្យ ចូរបង្កើតបុណ្យថ្មីៗរាល់ថ្ងៃ ដើម្បីជាទុនសម្រាប់អនាគត។',
    takeawayE: 'Do not wait for crises to cultivate goodness; generate continuous merit daily as karmic capital for tomorrow.',
    suttaVersePali: 'Puññaṁ ce puriso kayirā, kayirāth’etaṁ punappunaṁ...',
    suttaVerseK: 'បើបុគ្គលធ្វើបុណ្យ គប្បីធ្វើបុណ្យនោះរឿយៗ គប្បីធ្វើសេចក្ដីពេញចិត្តក្នុងបុណ្យនោះ... (ធម្មបទ. ១១៨)',
    suttaVerseE: 'If a person does good, let them do it again and again, finding delight in it... (Dhp 118).',
    commentaryK: 'បុណ្យពីមុន មិនមែនគ្រាន់តែជាសំណាងចៃដន្យនោះទេ តែជាលទ្ធផលនៃទាន សីល និងភាវនា ដែលធ្លាប់បានបដិបត្តិកន្លងមក។ វាក្លាយជាឧបនិស្ស័យនាំឱ្យយើងកើតមកមានបញ្ញាភ្លឺថ្លា មានរូបសម្បត្តិសមរម្យ និងបានជួបព្រះពុទ្ធសាសនា។ យ៉ាងណាក្តី បុណ្យចាស់ត្រូវបន្ថែមដោយបុណ្យថ្មីជានិច្ច កុំឱ្យរលត់អស់។',
    commentaryE: 'Past merit is the harvest of past generous, ethical, and meditative seeds. It manifests as quick intuition, good health, and opportune meetings, but must be continuously topped up with fresh virtue.',
    pillars: [
      { titleK: 'ការដឹងគុណបុណ្យចាស់', titleE: 'Gratitude for Past Fortune', descK: 'មិនភ្លេចខ្លួនពេលមានបាន យល់ថាជាផលនៃបុណ្យ។', descE: 'Humility during prosperity, recognizing karmic ripening.' },
      { titleK: 'ការសន្សំបុណ្យថ្មី', titleE: 'Planting New Merit', descK: 'ធ្វើទាន រក្សាសីល និងចម្រើនសមាធិជាប្រចាំ។', descE: 'Daily generosity, moral boundaries, and meditation.' },
      { titleK: 'ការប្រើប្រាស់បុណ្យត្រឹមត្រូវ', titleE: 'Wise Use of Wealth', descK: 'ប្រើប្រាស់ទ្រព្យសម្បត្តិ និងអំណាចដើម្បីជួយសង្គម។', descE: 'Channelling influence and capital to relieve suffering.' }
    ],
    riskK: 'អ្នកដែលរំពឹងតែកុសលចាស់ដោយមិនព្រមសាងកុសលថ្មី ប្រៀបដូចមនុស្សដកលុយពីធនាគារចាយរាល់ថ្ងៃដោយមិនរកចំណូលបន្ថែម មិនយូរប៉ុន្មាននឹងក្ស័យធន។',
    riskE: 'Living solely on past merit without accumulating new virtues is like constantly withdrawing savings without depositing—bankruptcy is certain.',
    auditQuestionK: 'តើអ្នកបានឆ្លៀតឱកាសធ្វើអំពើល្អ ចែករំលែកទាន និងចម្រើនសតិក្នុងជីវិតប្រចាំថ្ងៃបានទៀងទាត់កម្រិតណា?',
    auditQuestionE: 'How consistently do you practice daily generosity, helpful service, and mental purification to deposit new merit?'
  }
]

const auditScores = ref({
  patirupa: 4,
  sappurisa: 4,
  attasamma: 4,
  pubbe: 4
})

const totalAuditScore = computed(() => {
  return Object.values(auditScores.value).reduce((a, b) => a + b, 0)
})

const auditEvaluation = computed(() => {
  const score = totalAuditScore.value
  if (score >= 18) {
    return t('អស្ចារ្យណាស់! កង់ជីវិតទាំង ៤ របស់អ្នកកំពុងវិលទៅមុខដោយរលូន និងមានតុល្យភាពរឹងមាំបំផុត។ ចូរបន្តថែរក្សាកង់ទាំងនេះកុំឱ្យធ្លាក់ចុះ។', 'Magnificent! Your 4 wheels are rolling forward with robust balance and high momentum. Maintain this trajectory.')
  } else if (score >= 13) {
    return t('ល្អបង្គួរ! កង់ជីវិតរបស់អ្នកដើរទៅមុខបាន ប៉ុន្តែមានកង់ខ្លះអាចទន់ ឬរលាក់បន្តិច។ សូមពិនិត្យមើលចំណុចណាដែលពិន្ទុទាបដើម្បីពង្រឹងបន្ថែម។', 'Solid foundation! Your wheels are functional, but some wobble may occur under stress. Strengthen the lower-scoring dimensions.')
  } else {
    return t('គួរប្រុងប្រយ័ត្ន! កង់ជីវិតមួយចំនួនកំពុងរងការខូចខាត ឬខ្វះតុល្យភាព ដែលអាចធ្វើឱ្យរទេះជីវិតរបស់អ្នករអាក់រអួល។ សូមផ្ដោតលើការកែទម្លាប់ និងជ្រើសរើសមិត្តឱ្យបានល្អ។', 'Attention needed! Some wheels are misaligned, risking breakdown during life crises. Prioritize self-discipline and noble company.')
  }
})

function openModal(item) {
  selectedCakka.value = item
  lockBodyScroll()
}

function closeModal() {
  selectedCakka.value = null
  unlockBodyScroll()
}

function lockBodyScroll() {
  document.body.style.overflow = 'hidden'
}

function unlockBodyScroll() {
  document.body.style.overflow = ''
}

function handleKeydown(e) {
  if (e.key === 'Escape' && selectedCakka.value) {
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
