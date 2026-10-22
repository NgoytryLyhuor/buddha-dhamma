<template>
  <div class="fade-up">
    <!-- Header -->
    <header class="text-center max-w-2xl mx-auto">
      <p class="chapter-label">{{ t('ទស្សនវិជ្ជាដឹកនាំ & អភិបាលកិច្ចតាមបែបពុទ្ធសាសនា', 'Buddhist Governance & Moral Leadership') }}</p>
      <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
        {{ t('ទសពិធរាជធម៌ ១០ & អបរិហានិយធម៌ ៧', 'The 10 Royal Virtues & 7 Principles of Non-Decline') }}
      </h2>
      <div class="ornament mt-4">&#9784;</div>
      <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
        {{ t('គោលការណ៍ដឹកនាំរដ្ឋ ស្ថាប័ន ក្រុមហ៊ុន និងក្រុមគ្រួសារប្រកបដោយសុចរិតធម៌ យុត្តិធម៌ និងសេចក្តីស្ងប់ក្សេមក្សាន្ត ដែលព្រះសម្មាសម្ពុទ្ធទ្រង់បានសម្តែងចំពោះព្រះរាជា និងមេដឹកនាំសាធារណរដ្ឋវជ្ជី។', 'Ethical leadership principles for rulers, executives, team managers, and families to foster justice, non-corruption, social welfare, and sustainable prosperity.') }}
      </p>

      <!-- Section Navigation Pills (Uniform height, touch scroll) -->
      <div class="flex items-center gap-2 mt-6 overflow-x-auto pb-2 pt-1 scrollbar-none touch-pan-x sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
        <button
          v-for="sec in sections"
          :key="sec.id"
          @click="activeSection = sec.id"
          class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center gap-1.5"
          :class="activeSection === sec.id ? 'on' : ''"
        >
          <span>{{ sec.icon }}</span>
          <span>{{ t(sec.km, sec.en) }}</span>
        </button>
      </div>
    </header>

    <!-- Quick Overview Stats (Uniform equal heights) -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-6">
      <div class="card-paper p-3 text-center h-full flex flex-col justify-between items-center">
        <span class="text-xl block">👑</span>
        <strong class="text-xs sm:text-sm block mt-1" :style="{ color: 'var(--ink)' }">{{ t('ទសពិធរាជធម៌', 'Dasa Rājadhamma') }}</strong>
        <span class="text-[10px] sm:text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('ធម៌មេដឹកនាំ ១០ ប្រការ', '10 ruler virtues') }}</span>
      </div>
      <div class="card-paper p-3 text-center h-full flex flex-col justify-between items-center">
        <span class="text-xl block">🏛️</span>
        <strong class="text-xs sm:text-sm block mt-1" :style="{ color: 'var(--ink)' }">{{ t('អបរិហានិយធម៌', 'Aparihāniya') }}</strong>
        <span class="text-[10px] sm:text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('ធម៌មិនសាបសូន្យ ៧', '7 unity conditions') }}</span>
      </div>
      <div class="card-paper p-3 text-center h-full flex flex-col justify-between items-center">
        <span class="text-xl block">⚖️</span>
        <strong class="text-xs sm:text-sm block mt-1" :style="{ color: 'var(--ink)' }">{{ t('ចក្កវត្តិវត្ត', 'Cakkavatti-vatta') }}</strong>
        <span class="text-[10px] sm:text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('កាតព្វកិច្ចស្តេចចក្រ ១២', '12 sovereign duties') }}</span>
      </div>
      <div class="card-paper p-3 text-center h-full flex flex-col justify-between items-center">
        <span class="text-xl block">🤝</span>
        <strong class="text-xs sm:text-sm block mt-1" :style="{ color: 'var(--ink)' }">{{ t('សង្គហវត្ថុ', 'Saṅgahavatthu') }}</strong>
        <span class="text-[10px] sm:text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('ធម៌ចងចិត្តមនុស្ស ៤', '4 bonding virtues') }}</span>
      </div>
    </div>

    <!-- SECTION 1: DASA RAJADHAMMA (10 Virtues of a Ruler) -->
    <section v-if="activeSection === 'rajadhamma' || activeSection === 'all'" class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">👑</span>
          <h3 class="font-display text-lg sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
            {{ t('ទសពិធរាជធម៌ ១០ ប្រការ (Dasa Rājadhamma)', 'The 10 Virtues of a Righteous Ruler') }}
          </h3>
        </div>
        <span class="paali text-xs" :style="{ color: 'var(--accent)' }">Jātaka Khuddakanikāya</span>
      </div>
      <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('គុណធម៌ទាំង ១០ យ៉ាងដែលព្រះរាជា ឬមេដឹកនាំគ្រប់ជាន់ថ្នាក់ត្រូវប្រកាន់ខ្ជាប់ ដើម្បីនាំមកនូវសេចក្តីសុខក្សេមក្សាន្ត ភាពរុងរឿង និងលុបបំបាត់អំពើពុករលួយក្នុងសង្គម។', 'Ten ethical qualities that every leader must embody to ensure prosperity, fairness, justice, and the welfare of society.') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div
          v-for="item in rajadhammaList"
          :key="item.id"
          @click="openModal(item)"
          class="card-paper card-paper-hover p-4 sm:p-5 cursor-pointer flex flex-col justify-between h-full"
        >
          <div>
            <div class="flex items-start justify-between gap-2 mb-2">
              <div class="flex items-center gap-2">
                <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">
                  #{{ item.num }}
                </span>
                <div>
                  <h4 class="font-display font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
                    {{ t(item.nameKm, item.nameEn) }}
                  </h4>
                  <span class="paali text-[11px]" :style="{ color: 'var(--accent)' }">{{ item.pali }}</span>
                </div>
              </div>
              <span class="text-lg">{{ item.icon }}</span>
            </div>

            <p class="text-xs sm:text-sm line-clamp-2 mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(item.meaningKm, item.meaningEn) }}
            </p>
          </div>

          <div class="pt-3 mt-3 flex items-center justify-between text-[11px]" :style="{ borderTop: '1px solid var(--border)' }">
            <span class="flex items-center gap-1" :style="{ color: 'var(--ink-muted)' }">
              <span>💼</span>
              <span>{{ t(item.modernShortKm, item.modernShortEn) }}</span>
            </span>
            <span class="font-medium" :style="{ color: 'var(--accent-bright)' }">
              {{ t('មើលលម្អិត →', 'Details →') }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: APARIHANIYA DHAMMA 7 (Conditions of Non-Decline) -->
    <section v-if="activeSection === 'aparihaniya' || activeSection === 'all'" class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">🏛️</span>
          <h3 class="font-display text-lg sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
            {{ t('អបរិហានិយធម៌ ៧ ប្រការ (Satta Aparihāniya Dhamma)', '7 Conditions of Non-Decline for Nations') }}
          </h3>
        </div>
        <span class="paali text-xs" :style="{ color: 'var(--accent)' }">Dīgha Nikāya DN 16</span>
      </div>
      <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រះពុទ្ធទ្រង់បានប្រទានចំពោះរដ្ឋសភាវជ្ជី (លិច្ឆវី) នៃក្រុងវេសាលី ថា ដរាបណាប្រជាជាតិ ឬអង្គភាពមួយប្រកាន់ខ្ជាប់នូវធម៌ទាំង ៧ នេះ ភាពចម្រើនតែម៉្យាងគត់ដែលកើតមាន គ្មានការសាបសូន្យឡើយ ទោះជាស្តេចអជាតសត្តុលើកទ័ពធំយ៉ាងណាក៏មិនអាចយកជ័យជម្នះបានឡើយ។', 'Given by the Buddha to the Vajjian Republic; as long as a nation or community practices these 7 principles, growth alone is to be expected, not decline.') }}
      </p>

      <div class="space-y-3">
        <div
          v-for="(ap, idx) in aparihaniyaList"
          :key="idx"
          class="card-paper p-4 sm:p-5 space-y-2 h-full flex flex-col justify-between"
        >
          <div class="flex items-start gap-3">
            <span class="sutra-num font-bold text-xs shrink-0 mt-0.5" :style="{ color: 'var(--accent-bright)' }">
              #{{ ap.num }}
            </span>
            <div class="flex-1 space-y-1">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h4 class="font-display font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
                  {{ t(ap.titleKm, ap.titleEn) }}
                </h4>
                <span class="paali text-[11px]" :style="{ color: 'var(--accent)' }">{{ ap.pali }}</span>
              </div>
              <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                {{ t(ap.descKm, ap.descEn) }}
              </p>
              <div class="p-2.5 rounded-xl text-xs mt-2" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
                <span class="font-semibold" :style="{ color: 'var(--accent-bright)' }">{{ t('អនុវត្តក្នុងសម័យបច្ចុប្បន្ន៖ ', 'Modern Application: ') }}</span>
                <span :style="{ color: 'var(--ink-soft)' }">{{ t(ap.appKm, ap.appEn) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: CAKKAVATTI-VATTA 12 -->
    <section v-if="activeSection === 'cakkavatti' || activeSection === 'all'" class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">⚖️</span>
          <h3 class="font-display text-lg sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
            {{ t('ចក្កវត្តិវត្ត ១២ ប្រការ (Cakkavatti-vatta)', '12 Duties of a Righteous Universal Sovereign') }}
          </h3>
        </div>
        <span class="paali text-xs" :style="{ color: 'var(--accent)' }">Dīgha Nikāya DN 26</span>
      </div>
      <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('កាតព្វកិច្ចសំខាន់ៗរបស់ស្តេចចក្រពត្តិ ដែលចែងពីការការពារបរិស្ថាន ការលុបបំបាត់ភាពក្រីក្រ (ជាឬសគល់នៃឧក្រិដ្ឋកម្ម) និងការគាំពារប្រជានុរាស្ត្រគ្រប់ស្រទាប់វណ្ណៈ។', 'In the Cakkavatti-Sīhanāda Sutta, the Buddha famously pointed out that poverty is the root cause of crime, violence, and societal collapse.') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div
          v-for="vatta in cakkavattiList"
          :key="vatta.num"
          class="card-paper p-4 space-y-1.5 h-full flex flex-col justify-between"
        >
          <div class="flex items-center gap-2">
            <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">
              #{{ vatta.num }}
            </span>
            <h4 class="font-display font-bold text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
              {{ t(vatta.titleKm, vatta.titleEn) }}
            </h4>
          </div>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t(vatta.descKm, vatta.descEn) }}
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 4: SANGAHAVATTHU 4 -->
    <section v-if="activeSection === 'sangaha' || activeSection === 'all'" class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">🤝</span>
          <h3 class="font-display text-lg sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
            {{ t('សង្គហវត្ថុ ៤ ប្រការ (Saṅgaha-vatthu)', '4 Foundations of Social Harmony') }}
          </h3>
        </div>
        <span class="paali text-xs" :style="{ color: 'var(--accent)' }">Aṅguttara Nikāya AN 4.32</span>
      </div>
      <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ធម៌ជាគ្រឿងសង្គ្រោះ និងចងចិត្តមនុស្សក្នុងគ្រួសារ ស្ថាប័ន និងសង្គមជាតិ ប្រៀបដូចជា «ក្រឡាស់រទេះ» ដែលទ្រទ្រង់កង់រទេះឱ្យអាចវិលទៅមុខបាន។', 'The 4 cords of sympathy that bind society together, compared by the Buddha to the axle-pin of a moving chariot.') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div
          v-for="item in sangahaList"
          :key="item.id"
          class="card-paper p-4 sm:p-5 space-y-2 h-full flex flex-col justify-between"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="text-2xl">{{ item.icon }}</span>
              <div>
                <h4 class="font-display font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
                  {{ t(item.titleKm, item.titleEn) }}
                </h4>
                <span class="paali text-xs" :style="{ color: 'var(--accent)' }">{{ item.pali }}</span>
              </div>
            </div>
            <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">
              #{{ item.num }}
            </span>
          </div>

          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t(item.descKm, item.descEn) }}
          </p>

          <div class="p-3 rounded-xl text-xs space-y-1" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
            <strong class="block" :style="{ color: 'var(--accent-bright)' }">💡 {{ t('អនុវត្តក្នុងជីវិតជាក់ស្តែង៖', 'Practical Application:') }}</strong>
            <p :style="{ color: 'var(--ink-soft)' }">{{ t(item.practicalKm, item.practicalEn) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- POP-UP MODAL -->
    <Teleport to="body">
      <div
        v-if="selectedItem"
        class="menu-backdrop fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
        @click.self="closeModal"
      >
        <div
          class="card-paper relative w-full max-w-2xl max-h-[88vh] sm:max-h-[90vh] flex flex-col rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl"
          :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }"
        >
          <div class="p-4 sm:p-5 flex items-center justify-between gap-3 border-b shrink-0" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }">
            <div class="flex items-center gap-2.5">
              <span class="text-3xl">{{ selectedItem.icon }}</span>
              <div>
                <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">
                  #{{ selectedItem.num }}
                </span>
                <h3 class="font-display text-base sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
                  {{ t(selectedItem.nameKm, selectedItem.nameEn) }}
                </h3>
                <p class="paali text-xs" :style="{ color: 'var(--accent)' }">{{ selectedItem.pali }}</p>
              </div>
            </div>

            <button
              @click="closeModal"
              class="w-8 h-8 rounded-full flex items-center justify-center transition text-sm"
              :style="{ background: 'var(--bg-card)', color: 'var(--ink-soft)', border: '1px solid var(--border)' }"
            >
              ✕
            </button>
          </div>

          <div class="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed">
            <div class="verse-box p-4 rounded-xl space-y-1">
              <span class="text-xs font-bold uppercase block" :style="{ color: 'var(--accent-bright)' }">
                📜 {{ t('អត្ថន័យតាមក្បួនធម៌បុរាណ', 'Classical Buddhist Meaning') }}
              </span>
              <p class="font-medium" :style="{ color: 'var(--ink)' }">
                {{ t(selectedItem.meaningKm, selectedItem.meaningEn) }}
              </p>
            </div>

            <div class="p-3.5 sm:p-4 rounded-xl space-y-1" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
              <span class="text-xs font-bold uppercase block" :style="{ color: 'var(--accent)' }">
                💼 {{ t('ការអនុវត្តក្នុងការដឹកនាំស្ថាប័នសម័យថ្មី', 'Modern Leadership & Governance') }}
              </span>
              <p :style="{ color: 'var(--ink-soft)' }">
                {{ t(selectedItem.modernDetailKm, selectedItem.modernDetailEn) }}
              </p>
            </div>

            <div class="p-3.5 sm:p-4 rounded-xl space-y-1" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
              <span class="text-xs font-bold uppercase block" :style="{ color: 'var(--accent-bright)' }">
                ⚠️ {{ t('គ្រោះថ្នាក់នៃការខ្វះគុណធម៌នេះ (Consequences of Lack):', 'Consequences of Failure:') }}
              </span>
              <p :style="{ color: 'var(--ink-soft)' }">
                {{ t(selectedItem.dangerKm, selectedItem.dangerEn) }}
              </p>
            </div>
          </div>

          <div class="p-4 border-t flex justify-end shrink-0" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }">
            <button
              @click="closeModal"
              class="lang-pick px-5 py-2 text-xs font-semibold on"
            >
              {{ t('បិទផ្ទាំង', 'Close') }}
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeSection = ref('rajadhamma')
const selectedItem = ref(null)

const sections = [
  { id: 'rajadhamma', icon: '👑', km: 'ទសពិធរាជធម៌ ១០', en: '10 Royal Virtues' },
  { id: 'aparihaniya', icon: '🏛️', km: 'អបរិហានិយធម៌ ៧', en: '7 Conditions of Non-Decline' },
  { id: 'cakkavatti', icon: '⚖️', km: 'ចក្កវត្តិវត្ត ១២', en: '12 Sovereign Duties' },
  { id: 'sangaha', icon: '🤝', km: 'សង្គហវត្ថុ ៤', en: '4 Bases of Harmony' },
  { id: 'all', icon: '📜', km: 'បង្ហាញទាំងអស់', en: 'Show All' }
]

const rajadhammaList = [
  {
    id: 1,
    num: '១',
    nameKm: 'ទាន (Dāna)',
    nameEn: 'Dāna (Generosity & Sharing)',
    pali: 'Dānaṃ',
    icon: '🎁',
    meaningKm: 'ការចែករំលែក ឧបត្ថម្ភគាំទ្រសុខទុក្ខរបស់ប្រជានុរាស្ត្រ និងការផ្តល់មូលនិធិសង្គ្រោះអ្នកទុរគត។',
    meaningEn: 'Generosity, charitable welfare, and willingness to share national resources with citizens.',
    modernShortKm: 'សុខុមាលភាពសង្គម & ចែករំលែកធនធាន',
    modernShortEn: 'Social welfare & resource sharing',
    canonicalKm: 'ការបរិច្ចាគរាជទ្រព្យជាប្រយោជន៍សាធារណៈ សាងស្ពាន ថ្នល់ ស្រះទឹក មន្ទីរពេទ្យ និងការជួយឧបត្ថម្ភអ្នកក្រខ្សត់ ដើម្បីកុំឱ្យមានអ្នកអត់ឃ្លានក្នុងនគរ។',
    canonicalEn: 'Allocating national revenues for public infrastructure, poverty alleviation, healthcare, and humanitarian disaster relief.',
    modernDetailKm: 'មេដឹកនាំក្រុមហ៊ុន ឬស្ថាប័ន ត្រូវផ្តល់ប្រាក់បៀវត្សរ៍សមរម្យ អត្ថប្រយោជន៍លើកទឹកចិត្ត និងការវិនិយោគលើការអភិវឌ្ឍធនធានមនុស្ស មិនត្រូវកេងប្រវ័ញ្ចញើសឈាមកូនចៅឡើយ។',
    modernDetailEn: 'Fair compensation, employee benefits, profit sharing, and generous CSR initiatives rather than hoarding executive bonuses.',
    dangerKm: 'បើមេដឹកនាំកំណាញ់ កេងប្រវ័ញ្ចប្រជាជន ប្រជារាស្ត្រនឹងក្រីក្រ កើតចោរកម្ម និងបះបោរ។',
    dangerEn: 'Greedy leaders cause wealth polarization, citizen starvation, and eventual revolution.',
    source: 'Jātaka Maha-Haṃsa (No. 534)'
  },
  {
    id: 2,
    num: '២',
    nameKm: 'សីល (Sīla)',
    nameEn: 'Sīla (High Moral Character)',
    pali: 'Sīlaṃ',
    icon: '🛡️',
    meaningKm: 'ការរក្សាកាយ វាចា ឱ្យបរិសុទ្ធ ការប្រកាន់ខ្ជាប់នូវសីល ៥ ឬសីល ៨ ជាគំរូល្អដល់សង្គម។',
    meaningEn: 'High ethical standards, observing the precepts, avoiding corruption, and serving as a moral role model.',
    modernShortKm: 'សុចរិតភាព & គំរូសីលធម៌',
    modernShortEn: 'Integrity & ethical role-model',
    canonicalKm: 'ព្រះរាជាត្រូវរក្សាសីល ៥ ឬឧបោសថសីលជានិច្ច មិនសម្លាប់មនុស្សដោយអយុត្តិធម៌ មិនលួចបន្លំ មិនប្រព្រឹត្តខុសកាមគុណ មិនកុហកភូតភរ និងមិនសេពគ្រឿងស្រវឹង។',
    canonicalEn: 'Strict adherence to the 5 precepts: non-oppression, anti-corruption, sexual respect, truthful communication, and sobriety.',
    modernDetailKm: 'ការប្រកាន់ខ្ជាប់ក្រមសីលធម៌វិជ្ជាជីវៈ (Code of Ethics) គ្មានអំពើពុករលួយ គ្មានការស៊ីសំណូក មិនកេងចំណេញពីតួនាទីដើម្បីផលប្រយោជន៍ផ្ទាល់ខ្លួន។',
    modernDetailEn: 'Uncompromising corporate governance, zero tolerance for bribery, nepotism, and insider conflicts of interest.',
    dangerKm: 'បើមេដឹកនាំខ្វះសីលធម៌ ថ្នាក់ក្រោមនឹងយកតម្រាប់តាម បង្កឱ្យសង្គមរលួយពីខាងក្នុង។',
    dangerEn: 'When leaders act unethically, subordinates normalize corruption and moral decay spreads everywhere.',
    source: 'Jātaka Tesakuṇa (No. 521)'
  },
  {
    id: 3,
    num: '៣',
    nameKm: 'បរិច្ចាគ (Pariccāga)',
    nameEn: 'Pariccāga (Self-Sacrifice)',
    pali: 'Pariccāgo',
    icon: '🌟',
    meaningKm: 'ការលះបង់ប្រយោជន៍ផ្ទាល់ខ្លួន និងក្តីសុខស្រួល ដើម្បីបុព្វហេតុជាតិ និងសុភមង្គលរួម។',
    meaningEn: 'Sacrificing personal comfort, prestige, and private gain for the greater public good.',
    modernShortKm: 'លះបង់ផលប្រយោជន៍ផ្ទាល់ខ្លួនដើម្បីរួម',
    modernShortEn: 'Sacrificing ego for the team',
    canonicalKm: 'ការហ៊ានលះបង់សេចក្តីសុខផ្ទាល់ខ្លួន សូម្បីតែអាយុជីវិត ដើម្បីការពារអធិបតេយ្យភាពជាតិ និងសេចក្តីស្ងប់សុខរបស់ប្រជារាស្ត្រ។',
    canonicalEn: 'Readiness to surrender personal luxuries, honors, and even life itself for the preservation of peace and welfare.',
    modernDetailKm: 'មេដឹកនាំត្រូវហ៊ានលះបង់ពេលវេលា កម្លាំងកាយចិត្ត និងផលប្រយោជន៍ផ្ទាល់ខ្លួននៅពេលស្ថាប័នជួបវិបត្តិ មិនត្រូវគិតតែពីខ្លួនឯងមុនគេឡើយ។',
    modernDetailEn: 'Leaders eat last: putting frontline workers first during crises and taking personal accountability rather than scapegoating.',
    dangerKm: 'បើមេដឹកនាំគិតតែផលប្រយោជន៍ផ្ទាល់ខ្លួន និងបក្ខពួក នោះប្រជាជននឹងអស់ជំនឿចិត្ត។',
    dangerEn: 'Self-serving leaders breed deep cynicism and institutional collapse.',
    source: 'Jātaka Culla-Sutasoma (No. 525)'
  },
  {
    id: 4,
    num: '៤',
    nameKm: 'អាជ្ជវ (Ājjava)',
    nameEn: 'Ājjava (Honesty & Transparency)',
    pali: 'Ājjavaṃ',
    icon: '⚖️',
    meaningKm: 'សេចក្តីស្មោះត្រង់ ត្រង់ទៅត្រង់មក គ្មានពុតត្បុត គ្មានការបោកប្រាស់ភូតភរប្រជាជន។',
    meaningEn: 'Honesty, straightforwardness, sincerity, and absolute transparency in governance.',
    modernShortKm: 'តម្លាភាព & ភាពស្មោះត្រង់',
    modernShortEn: 'Transparency & sincerity',
    canonicalKm: 'ការប្រព្រឹត្តដោយត្រង់ទៅត្រង់មកចំពោះរាស្ត្រ ចំពោះមិត្ត និងចំពោះខ្លួនឯង គ្មានឧបាយកលកេងបន្លំ។',
    canonicalEn: 'Total truthfulness towards citizens and peers, rejecting deceitful propaganda or covert agendas.',
    modernDetailKm: 'ការគ្រប់គ្រងប្រកបដោយតម្លាភាព (Transparency) បង្ហាញរបាយការណ៍ហិរញ្ញវត្ថុច្បាស់លាស់ និយាយពាក្យពិតដល់បុគ្គលិក និងអតិថិជន។',
    modernDetailEn: 'Transparent reporting, honest investor communications, open book accounting, and clear feedback.',
    dangerKm: 'បើមេដឹកនាំប្រើតែពាក្យភូតភរ និងឧបាយកល នឹងគ្មាននរណាហ៊ានជឿទុកចិត្តទៀតឡើយ។',
    dangerEn: 'Duplicity destroys trust, leading to whistleblowers and total credibility loss.',
    source: 'Jātaka Nandiyamiga (No. 385)'
  },
  {
    id: 5,
    num: '៥',
    nameKm: 'មទ្ទវ (Maddava)',
    nameEn: 'Maddava (Gentleness & Humility)',
    pali: 'Maddavaṃ',
    icon: '🌸',
    meaningKm: 'ភាពទន់ភ្លន់ សុភាពរាបសារ មិនរឹងរូស មិនវាយឫកឆ្មើងឆ្មៃ មិនមើលងាយអ្នកតូចតាច។',
    meaningEn: 'Gentleness, approachable humility, and graciousness without arrogance or aloofness.',
    modernShortKm: 'សុភាពរាបសារ & មិនឆ្មើងឆ្មៃ',
    modernShortEn: 'Humility & approachability',
    canonicalKm: 'ទោះបីមានអំណាចពេញដៃ ក៏នៅតែទន់ភ្លន់ ស្តាប់យោបល់របស់អ្នកដទៃ មិនមើលងាយរាស្ត្រសាមញ្ញ។',
    canonicalEn: 'Remaining approachable, listening patiently to commoners, and treating every human being with dignity.',
    modernDetailKm: 'ការដឹកនាំបែបស្តាប់ (Active Listening) មិនកាន់ឫកជាចៅហ្វាយនាយ ទទួលយកការរិះគន់ស្ថាបនាពីកូនចៅដោយចិត្តទូលាយ។',
    modernDetailEn: 'Approachable leadership: open-door policy, empathy, psychological safety, and listening before speaking.',
    dangerKm: 'បើមេដឹកនាំក្រអឺតក្រទម មើលងាយគេ នឹងកាត់ផ្តាច់ខ្លួនចេញពីការពិត និងគ្មានមនុស្សស្មោះត្រង់នៅជិតឡើយ។',
    dangerEn: 'Arrogant leaders live in an echo chamber of sycophants, blinded to reality.',
    source: 'Jātaka Mahāsutasoma (No. 537)'
  },
  {
    id: 6,
    num: '៦',
    nameKm: 'តប (Tapa)',
    nameEn: 'Tapa (Self-Discipline & Austerity)',
    pali: 'Tapo',
    icon: '🔥',
    meaningKm: 'ការដុតបំផ្លាញកិលេស ការអត់ធ្មត់សង្កត់ចិត្ត មិនភ្លើតភ្លើនក្នុងកាមគុណ និងការរស់នៅសាមញ្ញ។',
    meaningEn: 'Self-control, burning away defilements, simplicity of lifestyle, and dedicated effort.',
    modernShortKm: 'វិន័យផ្ទាល់ខ្លួន & រស់នៅសាមញ្ញ',
    modernShortEn: 'Discipline & lean lifestyle',
    canonicalKm: 'ការមិនលង់ខ្លួនក្នុងស្រី ស្រា ល្បែងស៊ីសង និងភាពហ៊ឺហារហួសហេតុ ដែលនាំឱ្យខាតបង់ថវិកាជាតិ។',
    canonicalEn: 'Freedom from sensory addiction, hedonism, gambling, and vanity that squander public resources.',
    modernDetailKm: 'វិន័យការងារខ្ពស់ មកធ្វើការទៀងពេល មិនចំណាយខ្ជះខ្ជាយថវិកាក្រុមហ៊ុនដើម្បីភាពស៊ីវិល័យផ្ទាល់ខ្លួន។',
    modernDetailEn: 'High work ethic, frugality, eliminating unnecessary overhead, and leading by personal discipline.',
    dangerKm: 'បើមេដឹកនាំលង់ក្នុងកាមតណ្ហា នឹងភ្លេចកាតព្វកិច្ចការងារ បង្កឱ្យស្ថាប័នដួលរលំ។',
    dangerEn: 'Hedonistic leaders neglect governance, leading to corporate ruin or state collapse.',
    source: 'Jātaka Kuru-dhamma (No. 276)'
  },
  {
    id: 7,
    num: '៧',
    nameKm: 'អក្កោធ (Akkodha)',
    nameEn: 'Akkodha (Non-Anger & Composure)',
    pali: 'Akkodho',
    icon: '🌊',
    meaningKm: 'ការមិនខឹងក្រោធ មិនបញ្ចេញកំហឹងតាមទំនើងចិត្ត មិនសម្រេចក្តីដោយកំហឹង ឬការសងសឹក។',
    meaningEn: 'Freedom from anger, emotional serenity, non-retaliation, and objective decision making.',
    modernShortKm: 'ការគ្រប់គ្រងកំហឹង & ចិត្តត្រជាក់',
    modernShortEn: 'Emotional composure & calm mind',
    canonicalKm: 'ការរក្សាចិត្តឱ្យស្ងប់ពេលជួបរឿងអាក្រក់ មិនកាត់ក្តីផ្តន្ទាទោសរាស្ត្រដោយចិត្តខឹងក្រោធឡើយ។',
    canonicalEn: 'Remaining completely tranquil under provocation; never administering punishment or law in the heat of rage.',
    modernDetailKm: 'ភាពវៃឆ្លាតខាងអារម្មណ៍ (Emotional Intelligence / EQ) មិនជេរប្រមាថបុគ្គលិកនៅចំពោះមុខគេ ដោះស្រាយបញ្ហាដោយហេតុផល។',
    modernDetailEn: 'High emotional intelligence (EQ): psychological calmness, constructive mediation, and never making crucial calls when upset.',
    dangerKm: 'បើមេដឹកនាំកាចសាហាវ ឆេវឆាវ ប្រជាជននឹងរស់នៅទាំងភ័យខ្លាច និងស្អប់ខ្ពើម។',
    dangerEn: 'Angry leaders rule through terror, crushing initiative and sparking rebellion.',
    source: 'Jātaka Campeyya (No. 506)'
  },
  {
    id: 8,
    num: '៨',
    nameKm: 'អវិហឹសា (Avihiṃsā)',
    nameEn: 'Avihiṃsā (Non-Violence & Compassion)',
    pali: 'Avihiṃsā',
    icon: '🕊️',
    meaningKm: 'ការមិនបៀតបៀន មិនធ្វើបាបមនុស្សសត្វ មានមេត្តា ករុណា និងការលើកកម្ពស់សន្តិភាព។',
    meaningEn: 'Non-violence, compassion, protection of human rights, animal welfare, and seeking peaceful resolutions.',
    modernShortKm: 'អហិង្សា & មេត្តាធម៌ចំពោះមនុស្សសត្វ',
    modernShortEn: 'Non-violence & human rights',
    canonicalKm: 'ការមិនធ្វើទារុណកម្ម មិនកាប់សម្លាប់រាស្ត្រ និងការការពារសត្វធាតុក្នុងព្រៃមិនឱ្យគេបរបាញ់ដោយអយុត្តិធម៌។',
    canonicalEn: 'Prohibiting torture, avoiding unjust warfare, promoting reconciliation, and protecting wildlife and nature.',
    modernDetailKm: 'ការបង្កើតបរិយាកាសការងារប្រកបដោយសុវត្ថិភាព គ្មានការគំរាមកំហែង (Zero Harassment) និងការគោរពសិទ្ធិមនុស្ស។',
    modernDetailEn: 'Workplace safety, non-toxic culture, zero harassment tolerance, and environmentally sustainable operations.',
    dangerKm: 'បើមេដឹកនាំនិយមហិង្សា នឹងបង្កឱ្យមានសង្គ្រាមបង្ហូរឈាម និងវិនាសកម្មឥតឈប់ឈរ។',
    dangerEn: 'Violent governance breeds unending blood feuds, insurgencies, and devastation.',
    source: 'Jātaka Sīlavīmaṃsa (No. 362)'
  },
  {
    id: 9,
    num: '៩',
    nameKm: 'ខន្តី (Khanti)',
    nameEn: 'Khanti (Patience & Endurance)',
    pali: 'Khantī',
    icon: '🏔️',
    meaningKm: 'ការអត់ធន់ចំពោះពាក្យតិះដៀល ការលំបាកនឿយហត់ និងការស៊ូទ្រាំនឹងឧបសគ្គធំៗ។',
    meaningEn: 'Patience, endurance in hardship, tolerance of harsh criticism, and resilience.',
    modernShortKm: 'ការអត់ធ្មត់ចំពោះការរិះគន់ & ឧបសគ្គ',
    modernShortEn: 'Resilience & patience under pressure',
    canonicalKm: 'ការទ្រាំទ្រនឹងការនឿយហត់ក្នុងការបំពេញរាជកិច្ច និងការអត់ឱនចំពោះពាក្យរិះគន់របស់ប្រជារាស្ត្រ។',
    canonicalEn: 'Enduring exhaustion in public service, bearing insults with equanimity, and persevering through crises.',
    modernDetailKm: 'ភាពធន់នឹងសម្ពាធ (Resilience) មិនបោះបង់គោលដៅងាយៗ និងស្តាប់ពាក្យរិះគន់ដោយចិត្តត្រជាក់។',
    modernDetailEn: 'Leadership resilience: staying calm in PR storms, patiently executing long-term visions despite short-term flak.',
    dangerKm: 'បើមេដឹកនាំខ្វះការអត់ធន់ នឹងឆាប់បាក់ទឹកចិត្ត បោះបង់ការងារ និងខូចកិច្ចការធំ។',
    dangerEn: 'Impatient leaders give up prematurely or lash out under adversity.',
    source: 'Jātaka Khantivādī (No. 313)'
  },
  {
    id: 10,
    num: '១០',
    nameKm: 'អវិរោធន (Avirodhana)',
    nameEn: 'Avirodhana (Non-Opposition to Justice)',
    pali: 'Avirodhanaṃ',
    icon: '🏛️',
    meaningKm: 'ការមិនប្រព្រឹត្តប្រឆាំងនឹងច្បាប់យុត្តិធម៌ មិនប្រឆាំងនឹងឆន្ទៈប្រជាជន និងការគោរពនីតិរដ្ឋ។',
    meaningEn: 'Non-obstruction of the law, upholding justice, respecting democratic consensus, and non-tyranny.',
    modernShortKm: 'គោរពនីតិរដ្ឋ & ឆន្ទៈប្រជាជន',
    modernShortEn: 'Rule of law & consensus',
    canonicalKm: 'ការមិនធ្វើអ្វីដែលផ្ទុយនឹងច្បាប់ទម្លាប់ល្អ មិនបំពានយុត្តិធម៌ និងការគោរពមតិឯកភាពរបស់សភា និងប្រជាពលរដ្ឋ។',
    canonicalEn: 'Ruling strictly in accordance with Dhamma (cosmic moral law) and established righteous legal frameworks.',
    modernDetailKm: 'ការគោរពនីតិរដ្ឋ (Rule of Law) គ្មានបុគ្គលណានៅលើច្បាប់ ការសម្រេចចិត្តផ្អែកលើទិន្នន័យ និងកិច្ចព្រមព្រៀងត្រឹមត្រូវ។',
    modernDetailEn: 'Rule of law, constitutional compliance, data-driven governance, and honoring community agreements.',
    dangerKm: 'បើមេដឹកនាំតាំងខ្លួននៅពីលើច្បាប់ នោះនគរនឹងក្លាយជារដ្ឋផ្តាច់ការ និងអនាធិបតេយ្យ។',
    dangerEn: 'When leaders place themselves above the law, tyranny and anarchic breakdown inevitably follow.',
    source: 'Jātaka Mahāhaṃsa (No. 534)'
  }
]

const aparihaniyaList = [
  {
    num: '១',
    titleKm: 'បើកការប្រជុំឱ្យបានញឹកញាប់',
    titleEn: 'Hold frequent and regular assemblies',
    pali: 'Abhiṇhaṃ sannipātā bhavissanti',
    descKm: 'មេដឹកនាំ និងសមាជិកត្រូវជួបពិភាក្សាផ្លាស់ប្តូរយោបល់គ្នាជាប្រចាំ ដើម្បីដឹងពីបញ្ហាទាន់ពេល។',
    descEn: 'Assemble frequently to discuss governance, address grievances, and exchange views transparently.',
    appKm: 'ការប្រជុំ Stand-up Meeting ឬ Retrospective ជាប្រចាំក្នុងស្ថាប័នដើម្បីដោះស្រាយបញ្ហាភ្លាមៗ។',
    appEn: 'Regular operational syncs and retrospectives to catch roadblocks before they escalate.'
  },
  {
    num: '២',
    titleKm: 'ប្រជុំដោយព្រមព្រៀង និងបែកគ្នាដោយសាមគ្គី',
    titleEn: 'Meet in harmony and adjourn in harmony',
    pali: 'Samaggā sannipatissanti, samaggā vuṭṭhahissanti',
    descKm: 'ចូលរួមប្រជុំដោយស្មារតីសាមគ្គី ឯកភាពគ្នាលើកិច្ចការរួម និងអនុវត្តភារកិច្ចរួមគ្នាដោយស្មោះត្រង់។',
    descEn: 'Convene with united purpose, make decisions collaboratively, and execute resolutions with unified commitment.',
    appKm: 'យុទ្ធសាស្ត្រ «យល់ស្រប ឬមិនយល់ស្រប តែពេលសម្រេចហើយត្រូវរួមដៃគ្នាធ្វើ (Disagree and Commit)»។',
    appEn: 'Cultivating genuine psychological safety: vigorous healthy debate followed by unified execution.'
  },
  {
    num: '៣',
    titleKm: 'មិនបញ្ញត្តិច្បាប់តាមទំនើងចិត្ត & មិនលុបចោលច្បាប់ល្អ',
    titleEn: 'Do not enact arbitrary decrees or revoke sound laws',
    pali: 'Appaññattaṃ na paññāpessanti, paññattaṃ na samucchindissanti',
    descKm: 'មិនបង្កើតច្បាប់ផ្តេសផ្តាសដើម្បីតែផលប្រយោជន៍ខ្លួន និងមិនលុបចោលច្បាប់ល្អៗដែលមានស្រាប់។',
    descEn: 'Maintain legal stability; refrain from passing capricious rules or undermining time-tested ethical codes.',
    appKm: 'ការរក្សាគោលនយោបាយស្ថាប័នឱ្យមានស្ថិរភាព មិនផ្លាស់ប្តូរបទបញ្ជាតាមអារម្មណ៍មេដឹកនាំ។',
    appEn: 'Consistent policies and clear standard operating procedures (SOPs) rather than whimsical leadership edicts.'
  },
  {
    num: '៤',
    titleKm: 'គោរព ស្ដាប់បង្គាប់ និងផ្ដល់កិត្តិយសដល់ចាស់ទុំ',
    titleEn: 'Honor, respect, and listen to experienced elders',
    pali: 'Ye te Vajjīnaṃ Vajjimahallakā te sakkarissanti garu karissanti',
    descKm: 'ផ្តល់តម្លៃដល់អ្នកមានបទពិសោធន៍ ព្រឹទ្ធាចារ្យ និងយកគំនិតចាស់ទុំមកពិចារណា។',
    descEn: 'Seek counsel from veterans, scholars, and institutional elders, valuing wisdom over impetuous haste.',
    appKm: 'ការបង្កើតក្រុមប្រឹក្សាប្រឹក្សាយោបល់ (Advisory Board) និងការផ្តល់កិត្តិយសដល់បុគ្គលិកជើងចាស់។',
    appEn: 'Consulting subject-matter experts, senior mentors, and listening to institutional wisdom.'
  },
  {
    num: '៥',
    titleKm: 'ការពារកិត្តិយសស្ត្រី និងកុមារ មិនគៀបសង្កត់',
    titleEn: 'Protect women and vulnerable citizens from abuse',
    pali: 'Yā tā kulitthiyo kulakumāriyo tā na okkassa pasayha vāsettāro',
    descKm: 'មិនចាប់បង្ខំ មិនរំលោភបំពានសិទ្ធិស្ត្រី និងការពារសុវត្ថិភាពដល់ស្ត្រី និងកុមារក្នុងសង្គម។',
    descEn: 'Safeguard women and girls from harassment, forced marriage, and exploitation, upholding gender safety.',
    appKm: 'ការការពារសិទ្ធិស្មើគ្នា គ្មានការបៀតបៀនផ្លូវភេទនៅកន្លែងធ្វើការ និងការផ្តល់ឱកាសស្មើគ្នាដល់ស្ត្រី។',
    appEn: 'Gender equality, robust anti-harassment safeguards, safe working environments, and maternal support.'
  },
  {
    num: '៦',
    titleKm: 'គោរពបូជា និងថែរក្សាសក្ការៈបូជា និងវប្បធម៌ជាតិ',
    titleEn: 'Honor sacred sites, shrines, and cultural heritage',
    pali: 'Yāni tāni Vajjīnaṃ Vajjicetiyāni... tāni sakkarissanti',
    descKm: 'ថែរក្សាបេតិកភណ្ឌ វប្បធម៌ ប្រពៃណី និងទីសក្ការៈបូជាដែលជាព្រលឹងនៃជាតិឱ្យគង់វង្ស។',
    descEn: 'Preserve cultural sanctuaries, historical monuments, and moral landmarks that anchor community identity.',
    appKm: 'ការថែរក្សាគុណតម្លៃស្នូល (Core Values) វប្បធម៌អង្គភាព និងសីលធម៌ប្រពៃណីល្អ។',
    appEn: 'Fostering shared values, historical gratitude, and celebrating organizational culture.'
  },
  {
    num: '៧',
    titleKm: 'ផ្ដល់ការការពារ និងសេចក្តីស្វាគមន៍ដល់អ្នកមានសីលធម៌',
    titleEn: 'Provide righteous protection to holy and wise recluses',
    pali: 'Arahantesu dhammikaarakkhāvaraṇagutti susaṃvihitā bhavissati',
    descKm: 'ការពារ និងផ្គត់ផ្គង់ដល់បព្វជិត អ្នកប្រាជ្ញ និងអ្នកមានគុណធម៌ ឱ្យពួកលោកមកស្នាក់នៅប្រកបដោយសេចក្តីសុខ។',
    descEn: 'Ensure moral recluses and teachers feel safe and supported, welcoming righteous individuals from all directions.',
    appKm: 'ការគាំទ្រដល់អ្នកប្រាជ្ញ គ្រូបង្រៀន និងស្វាគមន៍អ្នកមានសមត្ថភាព និងសីលធម៌មកចូលរួមការងារ។',
    appEn: 'Attracting high-integrity talent, supporting educators, and fostering continuous learning.'
  }
]

const cakkavattiList = [
  { num: '១', icon: '👨‍👩‍👧', titleKm: 'ការពារគ្រួសារ និងបរិពារ', titleEn: 'Protect royal household', descKm: 'ផ្តល់ការការពារ និងអប់រំសីលធម៌ដល់សមាជិកគ្រួសារ និងអ្នកជិតដិត។', descEn: 'Ensure moral discipline and safety for one’s household.' },
  { num: '២', icon: '🛡️', titleKm: 'ការពារកងកម្លាំងប្រដាប់អាវុធ', titleEn: 'Care for armed forces', descKm: 'ផ្តល់ស្បៀង អាវុធ និងសុខុមាលភាពដល់កងទ័ពដោយយុត្តិធម៌។', descEn: 'Provide fair welfare and righteous leadership to defense forces.' },
  { num: '៣', icon: '👑', titleKm: 'ការពារមន្ត្រីរាជការ', titleEn: 'Support civil nobility', descKm: 'ផ្តល់ប្រាក់បៀវត្សរ៍ និងកិត្តិយសសមរម្យដល់មន្ត្រីដែលបម្រើការងារ។', descEn: 'Ensure dignity, fair compensation, and protection for administrators.' },
  { num: '៤', icon: '🌾', titleKm: 'ការពារកសិករ និងអាជីវករ', titleEn: 'Foster agriculture & trade', descKm: 'លើកកម្ពស់សេដ្ឋកិច្ចមូលដ្ឋាន ផ្តល់ពូជដំណាំ និងទុនដល់កសិករ។', descEn: 'Promote agriculture, industry, trade, and fair markets.' },
  { num: '៥', icon: '🏘️', titleKm: 'ការពារប្រជារាស្ត្រទូទៅ', titleEn: 'Protect townsfolk & rural folks', descKm: 'ផ្តល់សន្តិសុខសណ្តាប់ធ្នាប់ដល់ពលរដ្ឋគ្រប់ស្រុកភូមិ គ្មានការជិះជាន់។', descEn: 'Ensure civil safety and public infrastructure across all provinces.' },
  { num: '៦', icon: '🧘', titleKm: 'ការពារបព្វជិត និងអ្នកបួស', titleEn: 'Revere spiritual seekers', descKm: 'ការពារអ្នកប្រតិបត្តិធម៌គ្រប់និកាយដែលប្រព្រឹត្តត្រូវតាមសីលធម៌។', descEn: 'Respect and protect monks, ascetics, and spiritual seekers.' },
  { num: '៧', icon: '🦌', titleKm: 'ការពារសត្វធាតុ និងបរិស្ថាន', titleEn: 'Protect wildlife & nature', descKm: 'ការពារសត្វព្រៃ បក្សាបក្សី ព្រៃឈើ និងប្រភពទឹកធម្មជាតិ។', descEn: 'Preserve beasts, birds, forests, and natural ecosystems.' },
  { num: '៨', icon: '🚫', titleKm: 'ទប់ស្កាត់អំពើខុសឆ្គងក្នុងនគរ', titleEn: 'Prevent unlawful wrongdoing', descKm: 'កុំឱ្យមានការប្រព្រឹត្តល្មើសច្បាប់ និងអំពើអបាយមុខក្នុងសង្គម។', descEn: 'Eliminate systemic corruption, organized crime, and injustice.' },
  { num: '៩', icon: '💰', titleKm: 'លុបបំបាត់ភាពក្រីក្រ', titleEn: 'Eradicate poverty', descKm: 'ផ្តល់ទុន និងមុខរបរដល់អ្នកក្រខ្សត់ (ព្រោះភាពក្រីក្រជាឬសគល់នៃចោរកម្ម)។', descEn: 'Distribute capital to the destitute to eradicate root causes of theft.' },
  { num: '១០', icon: '💡', titleKm: 'សាកសួរយោបល់ពីអ្នកប្រាជ្ញ', titleEn: 'Seek counsel from the wise', descKm: 'ទៅពិគ្រោះជាមួយអ្នកមានប្រាជ្ញា អំពីអំពើណាជាកុសល អំពើណាជាអកុសល។', descEn: 'Regularly consult sages on what is wholesome and unwholesome.' },
  { num: '១១', icon: '❤️', titleKm: 'ទប់ស្កាត់ការលោភលន់', titleEn: 'Restrain unrighteous greed', descKm: 'មិនឱ្យការចង់បានហួសហេតុបំពានលើទ្រព្យសម្បត្តិរាស្ត្រ។', descEn: 'Prevent predatory monopolization and illegal wealth confiscation.' },
  { num: '១២', icon: '🕊️', titleKm: 'ដឹកនាំដោយធម៌ មិនមែនអំណាច', titleEn: 'Govern by Dhamma, not tyranny', descKm: 'យកព្រះធម៌ជាធំ មិនយកកម្លាំងទ័ពគាបសង្កត់ប្រជារាស្ត្រឡើយ។', descEn: 'Uphold the supremacy of righteousness over authoritarian brute force.' }
]

const sangahaList = [
  {
    name: 'dana',
    nameKm: 'ទាន (Dāna)',
    nameEn: 'Dāna (Generosity & Support)',
    pali: 'Dānaṃ',
    icon: '🎁',
    descKm: 'ការចែករំលែក ការជួយសង្គ្រោះដោយសម្ភារៈ ថវិកា និងចំណេះដឹងដល់អ្នកដទៃ។',
    descEn: 'Sharing resources, rewarding contributions, and supporting members in need.',
    actionKm: 'ផ្តល់រង្វាន់លើកទឹកចិត្ត បៀវត្សរ៍សមរម្យ និងការបណ្តុះបណ្តាលវិជ្ជាជីវៈដល់ក្រុមការងារ។',
    actionEn: 'Fair bonuses, educational sponsorships, and generous assistance during family emergencies.'
  },
  {
    name: 'piyavaca',
    nameKm: 'បិយវាចា (Piyavācā)',
    nameEn: 'Piyavācā (Kind & Inspiring Speech)',
    pali: 'Piyavācā',
    icon: '🗣️',
    descKm: 'ការនិយាយពាក្យពិរោះ ផ្អែមល្ហែម ពាក្យពិត មានប្រយោជន៍ និងលើកទឹកចិត្ត។',
    descEn: 'Gentle, encouraging, honest, and constructive communication without verbal abuse.',
    actionKm: 'សរសើរកូនចៅជាសាធារណៈ រិះគន់ស្ថាបនាក្នុងបន្ទប់ដាច់ដោយឡែក មិនជេរប្រមាថ។',
    actionEn: 'Praise publicly, critique constructively in private; avoid sarcastic put-downs.'
  },
  {
    name: 'atthacariya',
    nameKm: 'អត្ថចរិយា (Atthacariyā)',
    nameEn: 'Atthacariyā (Beneficial Action)',
    pali: 'Atthacariyā',
    icon: '🤝',
    descKm: 'ការធ្វើអំពើជាប្រយោជន៍ដល់អ្នកដទៃ ការជួយដោះស្រាយទុក្ខលំបាក និងសេវាសាធារណៈ។',
    descEn: 'Acting for the welfare of others, removing obstacles, and delivering selfless service.',
    actionKm: 'ចុះជួយដោះស្រាយបញ្ហាផ្ទាល់ ធ្វើជាខ្នងបង្អែកការពារកូនចៅពេលមានឧបសគ្គការងារ។',
    actionEn: 'Servant leadership: rolling up sleeves to solve operational bottlenecks alongside the team.'
  },
  {
    name: 'samanattata',
    nameKm: 'សមានត្តតា (Samānattatā)',
    nameEn: 'Samānattatā (Impartial Equality)',
    pali: 'Samānattatā',
    icon: '⚖️',
    descKm: 'ការតម្កល់ខ្លួនស្មើគ្នា មិនរើសអើង មិនលម្អៀង និងរួមសុខរួមទុក្ខជាមួយអ្នកដទៃ។',
    descEn: 'Treating all beings with equal respect, avoiding favoritism, and sharing joys and hardships.',
    actionKm: 'មិនលម្អៀងព្រោះស្រលាញ់ ស្អប់ ភ័យ ឬល្ងង់ (អគតិ ៤) ផ្តល់ឱកាសស្មើគ្នាចំពោះមនុស្សគ្រប់គ្នា។',
    actionEn: 'Zero nepotism, impartial meritocracy, walking the talk, and eating the same food as team members.'
  }
]

const checklist = ref([
  { virtue: 'ទាន', km: 'ខ្ញុំតែងចែករំលែកផលប្រយោជន៍ និងលើកទឹកចិត្តដល់អ្នកក្រោមបង្គាប់ដោយយុត្តិធម៌', en: 'I fairly share rewards and support subordinates', checked: false },
  { virtue: 'សីល', km: 'ខ្ញុំប្រកាន់ខ្ជាប់នូវភាពស្មោះត្រង់ គ្មានអំពើពុករលួយ និងមិនកេងបន្លំ', en: 'I maintain zero corruption and high moral standards', checked: false },
  { virtue: 'បរិច្ចាគ', km: 'ខ្ញុំហ៊ានលះបង់ផលប្រយោជន៍ផ្ទាល់ខ្លួន ដើម្បីជោគជ័យនៃក្រុមការងារ', en: 'I sacrifice ego and personal gains for collective success', checked: false },
  { virtue: 'អាជ្ជវ', km: 'ខ្ញុំរាយការណ៍ព័ត៌មានដោយតម្លាភាព មិនកុហក ឬបោកប្រាស់ក្រុមការងារ', en: 'I am transparent and straightforward with my team', checked: false },
  { virtue: 'មទ្ទវ', km: 'ខ្ញុំមានភាពសុភាពរាបសារ មិនវាយឫក និងស្តាប់មតិកែលម្អដោយបើកចំហ', en: 'I remain approachable and listen to constructive criticism', checked: false },
  { virtue: 'តប', km: 'ខ្ញុំមានវិន័យការងារខ្ពស់ មិនចំណាយខ្ជះខ្ជាយ និងមិនលង់ក្នុងអបាយមុខ', en: 'I practice frugality, discipline, and avoid addictions', checked: false },
  { virtue: 'អក្កោធ', km: 'ខ្ញុំចេះទប់កំហឹង មិនសម្រេចចិត្តពេលខឹង និងមិនជេរប្រមាថគេ', en: 'I control my temper and never manage through rage', checked: false },
  { virtue: 'អវិហឹសា', km: 'ខ្ញុំបង្កើតបរិយាកាសការងារសុវត្ថិភាព គ្មានការគាបសង្កត់ ឬធ្វើបាប', en: 'I foster a non-toxic, safe, and respectful environment', checked: false },
  { virtue: 'ខន្តី', km: 'ខ្ញុំអត់ធ្មត់ខ្ពស់ចំពោះសម្ពាធការងារ និងពាក្យរិះគន់អវិជ្ជមាន', en: 'I endure high stress and resiliently handle complaints', checked: false },
  { virtue: 'អវិរោធន', km: 'ខ្ញុំគោរពច្បាប់ គោរពកិច្ចព្រមព្រៀង និងមិនតម្កល់ខ្លួនលើសេចក្តីត្រូវ', en: 'I respect the rule of law and democratic agreements', checked: false }
])

const totalScore = computed(() => {
  return checklist.value.filter(c => c.checked).length
})

const scoreEvaluation = computed(() => {
  const s = totalScore.value
  if (s >= 9) return { km: '🌟 កំពូលមេដឹកនាំគំរូ! អ្នកមានគុណធម៌ស្មើនឹងធម្មរាជា ប្រជាជន និងក្រុមការងារនឹងស្រលាញ់គោរពអស់ពីដួងចិត្ត។', en: 'Exemplary Dhamma Leader! You govern with supreme integrity and your team deeply reveres you.' }
  if (s >= 7) return { km: '👍 មេដឹកនាំល្អប្រសើរ! អ្នកមានមូលដ្ឋានសីលធម៌រឹងមាំ សូមបន្តពង្រឹងចំណុចខ្វះខាតបន្តិចបន្តួចបន្ថែមទៀត។', en: 'Great Leader! Strong ethical core; keep polishing minor areas for perfection.' }
  if (s >= 4) return { km: '⚖️ កម្រិតមធ្យម! អ្នកមានការយល់ដឹងល្អ ប៉ុន្តែត្រូវប្រយ័ត្នបញ្ហាកំហឹង និងការលម្អៀងក្នុងស្ថាប័ន។', en: 'Moderate! Solid awareness, but beware of temper and unconscious bias.' }
  return { km: '🌱 ត្រូវការការអភិវឌ្ឍបន្ថែម! សូមសមាធិពិចារណាលើរាជធម៌ទាំង ១០ ដើម្បីកែប្រែទម្លាប់ដឹកនាំឡើងវិញ។', en: 'Needs development! Meditate on the 10 Rajadhammas to transform your leadership habit.' }
})

function resetChecklist() {
  checklist.value.forEach(c => (c.checked = false))
}

function openModal(item) {
  selectedItem.value = item
}

function closeModal() {
  selectedItem.value = null
}
</script>

<style scoped>
.modal-pop-enter-active,
.modal-pop-leave-active {
  transition: opacity 0.22s ease;
}

.modal-pop-enter-from,
.modal-pop-leave-to {
  opacity: 0;
}

.modal-pop-enter-active .card-paper,
.modal-pop-leave-active .card-paper {
  transition: transform 0.24s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.22s ease;
}

.modal-pop-enter-from .card-paper,
.modal-pop-leave-to .card-paper {
  opacity: 0;
  transform: translateY(20px);
}

.modal-pop-enter-to .card-paper,
.modal-pop-leave-from .card-paper {
  opacity: 1;
  transform: translateY(0);
}
</style>
