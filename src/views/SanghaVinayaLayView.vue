<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>☸️ {{ t('វិន័យបិដក មហាវគ្គ & ចុល្លវគ្គ · មគ្គទេសក៍ពុទ្ធបរិស័ទ', 'Vinaya Piṭaka · Layperson’s Essential Handbook') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('វិន័យសង្ឃបឋមសម្រាប់គ្រហស្ថ (របៀបទំនុកបម្រុងត្រឹមត្រូវ)', 'Lay Guide to Monastic Vinaya & Protocols') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ពុទ្ធបរិស័ទជាអ្នកទំនុកបម្រុងព្រះពុទ្ធសាសនា។ ប៉ុន្តែបើមិនយល់ដឹងពីវិន័យរបស់ព្រះសង្ឃទេ ពេលខ្លះការប្រគេនទានរបស់យើងអាចធ្វើឱ្យលោកត្រូវអាបត្តិ (ដាច់វិន័យ) ដោយអចេតនា។ ការយល់ដឹងពីកាលវិភាគឆាន់ ភេសជ្ជៈ និងការមិនប្រគេនប្រាក់ផ្ទាល់ដៃ គឺជាការការពារព្រះសង្ឃ និងបង្កើតបុណ្យកុសលដ៏បរិសុទ្ធ។',
            'Lay disciples are the vital stewards of the Sangha. However, without basic knowledge of monastic Vinaya rules, well-intentioned offerings can inadvertently cause monks to commit infractions. Understanding meal schedules, permissible evening beverages, and how to donate without putting cash into a monk’s hands protects the purity of the Sangha.'
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

    <!-- TAB 1: Meal Timing & 4 Kalika Drinks -->
    <section v-if="activeTab === 'meal'" class="space-y-4">
      <div class="p-4 rounded-2xl border text-xs sm:text-sm" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
        <h3 class="font-bold mb-1 text-amber-600">⏰ {{ t('ពេលវេលាឆាន់ចង្ហាន់ (កាលភោជន)', 'Canonical Meal Timing') }}</h3>
        <p :style="{ color: 'var(--ink-muted)' }">
          {{ t('ព្រះសង្ឃឆាន់អាហាររឹងបានតែចាប់ពីពេលព្រលឹមស្រាងៗ (អរុណរះ) រហូតដល់ថ្ងៃត្រង់ (ម៉ោង ១២:០០) ប៉ុណ្ណោះ។ ក្រោយថ្ងៃត្រង់ (វិកាល) លោកមិនអាចឆាន់បាយ នំ ឬផ្លែឈើបានឡើយ។', 'Monks consume solid food strictly between dawn (solar sunrise) and midday (solar noon, ~12:00 PM). After midday (Vikāla), solid meals, fruits, and snacks are strictly prohibited.') }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="k in kalikaList" :key="k.id" class="card-paper p-5 border space-y-3"
             :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
          <div class="flex items-center justify-between">
            <span class="text-2xl p-2.5 rounded-2xl" :style="{ background: 'var(--bg-card-2)' }">{{ k.icon }}</span>
            <span class="text-xs px-2 py-0.5 rounded-full font-mono font-bold" :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
              {{ k.timeframe }}
            </span>
          </div>

          <div>
            <h4 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">{{ t(k.titleK, k.titleE) }}</h4>
            <span class="text-xs font-mono font-medium" :style="{ color: 'var(--accent)' }">{{ k.pali }}</span>
          </div>

          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(k.descK, k.descE) }}</p>

          <div class="p-2.5 rounded-xl border text-xs" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)', color: 'var(--ink-soft)' }">
            <strong>{{ t('ឧទាហរណ៍៖ ', 'Allowed Items: ') }}</strong>
            <span>{{ t(k.examplesK, k.examplesE) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 2: Money & The Kappiyakara System -->
    <section v-if="activeTab === 'money'" class="card-paper p-6 space-y-5">
      <div class="max-w-2xl mx-auto space-y-4">
        <div class="text-center space-y-2">
          <span class="text-3xl">🪙</span>
          <h2 class="text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
            {{ t('វិន័យរឿងប្រាក់កាស និងប្រព័ន្ធកប្បិយការក', 'Monks & Money: The Kappiyakāra System') }}
          </h2>
          <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
            {{ t(
              'តាមវិន័យសិក្ខាបទ (និស្សគ្គិយបាចិត្តិយ) ព្រះភិក្ខុសង្ឃមិនអាចកាន់ កាត់ ឬទទួលប្រាក់កាសផ្ទាល់ដៃបានឡើយ។ ដូច្នេះ ដើម្បីកុំឱ្យលោកត្រូវអាបត្តិ និងឱ្យការបរិច្ចាគបានបុណ្យបរិសុទ្ធ ត្រូវអនុវត្តដូចខាងក្រោម៖',
              'Under the Vinaya rule of Nissaggiya Pācittiya, monks are forbidden from holding, accepting, or trading physical money. To ensure legitimate monastic support without breaching precepts, follow the canonical protocol:'
            ) }}
          </p>
        </div>

        <div class="space-y-3 text-xs sm:text-sm">
          <div class="p-4 rounded-2xl border space-y-1.5" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold flex items-center gap-1.5 text-emerald-600">
              <span>✅</span>
              <span>{{ t('វិធីប្រគេនត្រឹមត្រូវ៖ តាមរយៈកប្បិយការក (អ្នកយាមវិន័យវត្ត)', 'Proper Way: Through the Kappiyakāra (Steward)') }}</span>
            </h4>
            <p :style="{ color: 'var(--ink-muted)' }">
              {{ t('ប្រគល់បច្ច័យ (ប្រាក់) ទៅឱ្យកប្បិយការក ឬគណៈកម្មការវត្ត ឬដាក់ក្នុងហិបបុណ្យវត្ត រួចប្រគេនជា «ប័ណ្ណបច្ច័យ / ក្រដាសបវាវរណា» ដល់ព្រះសង្ឃវិញ ដោយទូលលោកថា «ខ្ញុំព្រះករុណាបានតម្កល់បច្ច័យនេះចំពោះកប្បិយការកហើយ ពេលលោកម្ចាស់ត្រូវការថ្នាំសង្កូវ ឬសៀវភៅ អាចបង្គាប់ឱ្យកប្បិយការកជាវបាន»។', 'Hand the financial donation to the temple steward (Kappiyakāra) or drop it in the temple alms box, then present a voucher note to the monk: "Venerable Sir, I have deposited funds with the steward; whenever you need medicines, robes, or books, please request them through the steward."') }}
            </p>
          </div>

          <div class="p-4 rounded-2xl border space-y-1.5" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold flex items-center gap-1.5 text-red-500">
              <span>❌</span>
              <span>{{ t('កំហុសដែលគួរចៀសវាង៖', 'Common Mistakes to Avoid:') }}</span>
            </h4>
            <p :style="{ color: 'var(--ink-muted)' }">
              {{ t('កុំញាត់លុយក្នុងដៃព្រះសង្ឃ កុំដាក់ក្រដាសប្រាក់ក្នុងបាត្រចង្ហាន់ និងកុំបង្ខំឱ្យលោកកាន់ស្រោមសំបុត្រមានលុយ។', 'Never slip cash directly into a monk’s palm, never place banknotes inside the alms bowl with food, and never insist a monk hold an envelope containing money.') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 3: Etiquette & Respectful Conduct -->
    <section v-if="activeTab === 'etiquette'" class="card-paper p-6 space-y-5">
      <div class="max-w-2xl mx-auto space-y-4">
        <h3 class="text-lg font-bold font-serif text-center" :style="{ color: 'var(--ink)' }">
          {{ t('សុជីវធម៌ពេលចូលជួបព្រះសង្ឃ (Respectful Protocol)', 'Etiquette When Meeting Monks') }}
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-4 rounded-2xl border space-y-1" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold flex items-center gap-1.5" :style="{ color: 'var(--accent)' }">
              <span>🙏</span>
              <span>{{ t('ការសំពះ និងអង្គុយ', 'Greeting & Seating') }}</span>
            </h4>
            <p :style="{ color: 'var(--ink-muted)' }">
              {{ t('សំពះដោយលើកដៃប្រណម្យត្រឹមចិញ្ចើម អង្គុយនៅកន្លែងទាបជាងព្រះសង្ឃ មិនត្រូវអង្គុយលើកៅអីស្មើគ្នាឡើយ។', 'Bow with hands at brow level; sit on a mat or seat lower than the monk.') }}
            </p>
          </div>

          <div class="p-4 rounded-2xl border space-y-1" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold flex items-center gap-1.5" :style="{ color: 'var(--accent)' }">
              <span>👩</span>
              <span>{{ t('សុភាពនារី និងព្រះសង្ឃ', 'Protocols for Women') }}</span>
            </h4>
            <p :style="{ color: 'var(--ink-muted)' }">
              {{ t('ស្ត្រីមិនត្រូវប៉ះពាល់រូបកាយ ឬចីវរព្រះសង្ឃឡើយ។ ពេលប្រគេនរបស់របរ ត្រូវដាក់លើក្រណាត់ទទួលប្រគេន។', 'Women never touch a monk’s body or robes; place offerings onto a receiving cloth placed by the monk.') }}
            </p>
          </div>

          <div class="p-4 rounded-2xl border space-y-1" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold flex items-center gap-1.5" :style="{ color: 'var(--accent)' }">
              <span>🗣️</span>
              <span>{{ t('ពាក្យសម្ដីទូលព្រះសង្ឃ', 'Respectful Speech') }}</span>
            </h4>
            <p :style="{ color: 'var(--ink-muted)' }">
              {{ t('ប្រើពាក្យថា «ព្រះករុណាទាន, លោកម្ចាស់, ព្រះតេជព្រះគុណ» មិនត្រូវនិយាយលេងសើចឡើយ។', 'Use humble terms ("Karunā", "Bhante", "Venerable Sir"); avoid frivolous colloquial banter.') }}
            </p>
          </div>

          <div class="p-4 rounded-2xl border space-y-1" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold flex items-center gap-1.5" :style="{ color: 'var(--accent)' }">
              <span>🚶</span>
              <span>{{ t('ការដើរ និងផ្លូវដំណើរ', 'Walking Decorum') }}</span>
            </h4>
            <p :style="{ color: 'var(--ink-muted)' }">
              {{ t('ដើរខាងក្រោយ ឬខាងឆ្វេងព្រះសង្ឃ មិនត្រូវដើរទន្ទឹម ឬដើរកាត់មុខលោកដោយគ្មានការសំពះសុំការអនុញ្ញាតឡើយ។', 'Walk behind or to the left of monks; never stride ahead abruptly or walk over monks\' shadows disrespectfully.') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
const activeTab = ref('meal')

const tabs = [
  { id: 'meal', icon: '🍲', titleK: 'ម៉ោងឆាន់ & ភេសជ្ជៈ ៤ (Meals & Drinks)', titleE: 'Meals & Permitted Drinks' },
  { id: 'money', icon: '🪙', titleK: 'វិន័យប្រាក់កាស (Monks & Money)', titleE: 'Donation Protocol' },
  { id: 'etiquette', icon: '🙏', titleK: 'សុជីវធម៌ពេលជួបលោក (Etiquette)', titleE: 'Etiquette & Decorum' }
]

const kalikaList = [
  {
    id: 'yavakalika',
    icon: '🍚',
    timeframe: 'ព្រឹក → ថ្ងៃត្រង់',
    titleK: '១. យាវកាលិក (អាហាររឹង)',
    titleE: '1. Yāvakālika (Solid Food)',
    pali: 'Yāvakālikaṁ',
    descK: 'អាហារទូទៅសម្រាប់ទ្រទ្រង់កាយ ឆាន់បានតែពីព្រឹកព្រលឹមរហូតដល់ម៉ោង ១២ ថ្ងៃត្រង់ប៉ុណ្ណោះ។ ក្រោយថ្ងៃត្រង់ បើឆាន់នឹងត្រូវអាបត្តិបាចិត្តិយ។',
    descE: 'Solid meals, rice, soups, bread, and fruits; permitted strictly between dawn and solar noon.',
    examplesK: 'បាយ សម្ល មី បង្អែម ផ្លែឈើគ្រប់ប្រភេទ ទឹកដោះគោជូរ គ្រាប់ធញ្ញជាតិ។',
    examplesE: 'Rice, noodles, vegetables, desserts, yogurt, nuts, and fresh whole fruits.'
  },
  {
    id: 'yamakalika',
    icon: '🧃',
    timeframe: 'ឆាន់បានមួយរសៀលទល់ភ្លឺ',
    titleK: '២. យាមកាលិក (ទឹកផ្លែឈើត្រង)',
    titleE: '2. Yāmakālika (Juices / Refreshments)',
    pali: 'Yāmakālikaṁ',
    descK: 'ទឹកផ្លែឈើតូចៗដែលច្របាច់ និងត្រងយកកាកចេញស្អាត (មិនដាំឱ្យឆ្អិនលើភ្លើង) អាចឆាន់បានពេលរសៀល និងពេលយប់ ដើម្បីបំបាត់ការស្រេកឃ្លាន។',
    descE: 'Strained fresh juices made from small fruits (unheated), allowable in the afternoon and evening.',
    examplesK: 'ទឹកក្រូចឆ្មារ ទឹកអំពៅ ទឹកក្រូចពោធិ៍សាត់ (ត្រងកាកចេញគ្មានសាច់) ទឹកតែ ទឹកសុទ្ធ។',
    examplesE: 'Strained lime juice, sugarcane juice, clear orange juice without pulp, herbal tea, water.'
  },
  {
    id: 'sattahakalika',
    icon: '🍯',
    timeframe: 'ទុកឆាន់បាន ៧ ថ្ងៃ',
    titleK: '៣. សត្តាហកាលិក (ឱសថប៉ូវ ៥ យ៉ាង)',
    titleE: '3. Sattāhakālika (Tonic Medicines)',
    pali: 'Sattāhakālikaṁ (Bhesajja)',
    descK: 'ឱសថប៉ូវ ៥ ប្រភេទ ដែលព្រះសង្ឃអាចទទួលទុកឆាន់បានរយៈពេល ៧ ថ្ងៃ សម្រាប់ជំនួយសុខភាព និងព្យាបាលជំងឺ។',
    descE: 'Five tonic medicines that can be kept and consumed for seven days to sustain health.',
    examplesK: 'ទឹកឃ្មុំ (Madhu), ទឹកអំពៅ/ស្ករ (Pāṇita), ខ្លាញ់រាវ (Sappi), ខ្លាញ់ខាប់ (Tela), ខ្លាញ់សត្វ (Navanīta)។',
    examplesE: 'Pure honey, molasses/sugar, ghee, sesame oil, and butter.'
  },
  {
    id: 'yavajivika',
    icon: '🌿',
    timeframe: 'ឆាន់បានមួយជីវិត (ពេលឈឺ)',
    titleK: '៤. យាវជីវិក (ថ្នាំសង្កូវព្យាបាលជំងឺ)',
    titleE: '4. Yāvajīvika (Lifelong Medicine)',
    pali: 'Yāvajīvikaṁ',
    descK: 'ថ្នាំពេទ្យ និងឫសឈើឱសថ ដែលមិនមែនជាអាហារ ព្រះសង្ឃអាចរក្សាទុក និងឆាន់បានគ្រប់ពេលវេលាពេលមានជំងឺ។',
    descE: 'Non-nutritive medicines, pharmaceuticals, herbs, and roots permitted for sickness anytime.',
    examplesK: 'ថ្នាំពេទ្យទំនើប ឫសឈើ ខ្ញី រមៀត អំបិល ថ្នាំក្អក។',
    examplesE: 'Modern pharmaceuticals, ginger, turmeric, medicinal roots, salts, cough remedies.'
  }
]
</script>
