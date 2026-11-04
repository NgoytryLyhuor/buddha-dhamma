<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🍚 {{ t('សំយុត្តនិកាយ និទានវគ្គ · បុត្តមំសសូត្រ (SN 12.63)', 'Saṁyutta Nikāya 12.63 · Puttamansa Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('អាហារ ៤ យ៉ាងដែលចិញ្ចឹមសត្វលោក', 'The 4 Nutriments Sustaining All Life') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ព្រះសម្មាសម្ពុទ្ធទ្រង់ត្រាស់ថា «សព្វេ សត្តា អាហារដ្ឋិតិកា» — សត្វលោកទាំងអស់ស្ថិតនៅបានដោយសារអាហារ។ មិនត្រឹមតែបាយទឹកចិញ្ចឹមកាយប៉ុណ្ណោះទេ សត្វលោកថែមទាំងចិញ្ចឹមចិត្តដោយសារផស្សៈ (ការប៉ះខ្ទប់), ចេតនា (បំណងប្រាថ្នា), និងវិញ្ញាណ (ការដឹង)។ បើមិនចេះរើសអាហារចិត្ត នោះចិត្តនឹងពុលជាប្រចាំ។',
            'The Buddha taught: "All beings persist on nutriment." Human life is not nourished by edible food alone, but equally by sensory impressions (Phassa), mental intentions (Cetanā), and consciousness (Viññāṇa). Without mindful discernment, our minds consume toxic emotional fuel daily.'
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

    <!-- TAB 1: The 4 Nutriments Cards -->
    <section v-if="activeTab === 'nutriments'" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="a in aharaList"
          :key="a.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ a.icon }}
              </span>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold"
                    :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                {{ t(a.typeK, a.typeE) }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ t(a.titleK, a.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-2" :style="{ color: 'var(--accent)' }">
              {{ a.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(a.descK, a.descE) }}
            </p>

            <!-- Canonical Simile -->
            <div class="p-3 rounded-xl mb-3 text-xs space-y-1.5 border"
                 :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
              <div class="font-semibold flex items-center gap-1.5 text-amber-600">
                <span>📖</span>
                <span>{{ t('ឧបមាក្នុងព្រះត្រៃបិដក៖', 'Canonical Buddha Simile:') }}</span>
              </div>
              <p class="italic font-serif" :style="{ color: 'var(--ink)' }">« {{ t(a.simileK, a.simileE) }} »</p>
            </div>
          </div>

          <!-- Modern Application -->
          <div class="p-3 rounded-xl text-xs space-y-1 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200">
            <span class="font-bold">🌱 {{ t('ការអនុវត្តសម័យបច្ចុប្បន្ន៖', 'Modern Application:') }}</span>
            <p>{{ t(a.modernK, a.modernE) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 2: Mindful Digital Diet (ការគ្រប់គ្រងអាហារចិត្ត) -->
    <section v-if="activeTab === 'diet'" class="card-paper p-6 space-y-5">
      <div class="max-w-2xl mx-auto space-y-4">
        <div class="text-center space-y-2">
          <span class="text-3xl">📱</span>
          <h2 class="text-xl font-bold font-serif" :style="{ color: 'var(--ink)' }">
            {{ t('ការសន្សំអាហារចិត្តក្នុងយុគសម័យឌីជីថល', 'Digital Diet: Mindful Ingestion of Sensory Food') }}
          </h2>
          <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
            {{ t(
              'រាល់ពេលដែលយើងអូសមើលបណ្ដាញសង្គម ព័ត៌មានអវិជ្ជមាន និងការជជែកដេញដោល គឺយើងកំពុងបញ្ចុក «ផស្សាហារ» ពុលទៅក្នុងចិត្ត។ ចូររៀនការពារទ្វារទាំង ៦ ដូចខាងក្រោម៖',
              'Every minute spent scrolling toxic feeds, sensational news, and contentious outrage is feeding poison into your mind. Practice guarding your sense doors through this digital regimen:'
            ) }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-4 rounded-2xl border space-y-1.5" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold flex items-center gap-1.5" :style="{ color: 'var(--accent)' }">
              <span>🛡️</span>
              <span>{{ t('តម្រងភ្នែក និងត្រចៀក', 'Sensory Firewall') }}</span>
            </h4>
            <p :style="{ color: 'var(--ink-muted)' }">
              {{ t('ឈប់តាមដាន (Unfollow) គណនីដែលបង្ហោះរឿងជេរប្រទេច រឿងអាសអាភាស ឬរឿងនាំឱ្យកើតការច្រណែន។', 'Unfollow accounts that traffic in outrage, vulgarity, or boastful lifestyle vanity.') }}
            </p>
          </div>

          <div class="p-4 rounded-2xl border space-y-1.5" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold flex items-center gap-1.5" :style="{ color: 'var(--accent)' }">
              <span>⏳</span>
              <span>{{ t('កំណត់ម៉ោងដកដង្ហើមស្ងប់', 'Digital Fasting Window') }}</span>
            </h4>
            <p :style="{ color: 'var(--ink-muted)' }">
              {{ t('ផ្អាកប្រើទូរស័ព្ទយ៉ាងហោចណាស់ ៣០ នាទីមុនគេង និង ៣០ នាទីក្រោយភ្ញាក់ពីគេង ដើម្បីឱ្យវិញ្ញាណស្អាត។', 'Keep screens off 30 minutes before sleep and after waking to let consciousness rest in natural stillness.') }}
            </p>
          </div>

          <div class="p-4 rounded-2xl border space-y-1.5" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold flex items-center gap-1.5" :style="{ color: 'var(--accent)' }">
              <span>🥗</span>
              <span>{{ t('បញ្ចុកអាហារធម៌ល្អៗ', 'Nutritious Spiritual Diet') }}</span>
            </h4>
            <p :style="{ color: 'var(--ink-muted)' }">
              {{ t('ស្ដាប់ធម្មទេសនា អានព្រះសូត្រ ឬចម្រើនសមាធិ ១០ នាទីក្នុងមួយថ្ងៃ ជាអាហារបំប៉នបញ្ញាដ៏ពិសិដ្ឋ។', 'Feed the mind 10 minutes of Dhamma reading or breathing meditation daily as essential spiritual nutrition.') }}
            </p>
          </div>

          <div class="p-4 rounded-2xl border space-y-1.5" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold flex items-center gap-1.5" :style="{ color: 'var(--accent)' }">
              <span>🎯</span>
              <span>{{ t('ពិចារណាបំណងចិត្ត (ចេតនា)', 'Check Inner Intentions') }}</span>
            </h4>
            <p :style="{ color: 'var(--ink-muted)' }">
              {{ t('មុននឹងបង្ហោះសារ ឬបញ្ចេញមតិ សួរខ្លួនឯងថា «តើនេះជាពាក្យពិត មានប្រយោជន៍ និងកើតចេញពីមេត្តាដែរឬទេ?»', 'Before posting or replying, pause: "Is this speech truthful, necessary, and spoken with a heart of goodwill?"') }}
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
const activeTab = ref('nutriments')

const tabs = [
  { id: 'nutriments', icon: '🍚', titleK: 'អាហារ ៤ យ៉ាង (4 Nutriments)', titleE: 'The 4 Nutriments' },
  { id: 'diet', icon: '📱', titleK: 'ការសន្សំអាហារចិត្ត (Digital Diet)', titleE: 'Mindful Consumption' }
]

const aharaList = [
  {
    id: 'kabalinkara',
    icon: '🍲',
    titleK: '១. កវឡិង្ការាហារ (អាហាររូបកាយ)',
    titleE: '1. Kabaliṅkārāhāra (Physical Food)',
    pali: 'Kabaliṅkāro āhāro oḷāriko vā sukhumo vā',
    typeK: 'អាហាររូប',
    typeE: 'Physical Nutriment',
    descK: 'អាហារជាដុំៗដែលលេបចូលតាមមាត់ (បាយ ទឹក បន្លែ ផ្លែឈើ) សម្រាប់ទ្រទ្រង់រូបកាយធាតុ ៤ ឱ្យនៅរស់រានមានជីវិត។',
    descE: 'Gross or subtle material food ingested to sustain the four physical elements of the biological body.',
    simileK: 'ឧបមាដូចប្តីប្រពន្ធឆ្លងកាត់វាលខ្សាច់ដាច់ស្បៀង ចាំបាច់ត្រូវបរិភោគសាច់កូនជាទីស្រឡាញ់គ្រាន់តែដើម្បីឆ្លងឱ្យផុតវាលខ្សាច់ គ្មានការត្រេកត្រអាលឡើយ។',
    simileE: 'Like parents stranded in a desert eating the flesh of their child strictly for survival to reach safety, without greed or gluttony.',
    modernK: 'បរិភោគអាហារដើម្បីសុខភាព និងកម្លាំងចម្រើនធម៌ មិនមែនបរិភោគដើម្បីលម្អកាយ អួតសម្ញែង ឬលង់ក្នុងរសជាតិឡើយ។',
    modernE: 'Eat mindfully for physical endurance and mental clarity to practice virtue, free from emotional overeating or luxury vanity.'
  },
  {
    id: 'phassa',
    icon: '👀',
    titleK: '២. ផស្សាហារ (អាហារនៃការប៉ះខ្ទប់)',
    titleE: '2. Phassāhāra (Contact as Nutriment)',
    pali: 'Phasso dutiyo āhāro',
    typeK: 'អាហារចិត្ត',
    typeE: 'Sensory Nutriment',
    descK: 'ការប៉ះខ្ទប់រវាងទ្វារទាំង ៦ ជាមួយអារម្មណ៍ខាងក្រៅ (ភ្នែកឃើញរូប, ត្រចៀកឮសំឡេង, ច្រមុះធុំក្លិន, អណ្ដាតដឹងរស, កាយប៉ះពាល់, ចិត្តដឹងធម្មារម្មណ៍) ដែលបណ្ដាលឱ្យកើតវេទនា (សុខ ទុក្ខ)។',
    descE: 'Sensory contact through the six doors (eye, ear, nose, tongue, body, mind) that continually feeds feeling (Vedanā).',
    simileK: 'ឧបមាដូចមេគោដែលត្រូវគេបកស្បែកចេញ ទៅឈរត្រង់ណាក៏ត្រូវសត្វល្អិតរោមខាំត្រង់នោះ។',
    simileE: 'Like a flayed cow stripped of skin, mercilessly devoured by insects wherever she stands.',
    modernK: 'ការពារទ្វារភ្នែកនិងត្រចៀក កុំបណ្ដោយឱ្យព័ត៌មានអវិជ្ជមាន ភាពសាហាវយង់ឃ្នង និងការញុះញង់មកស៊ីចិត្តជារៀងរាល់ថ្ងៃ។',
    modernE: 'Guard the senses vigilantly; filter toxic drama, algorithmic rage-bait, and despairing headlines from your daily life.'
  },
  {
    id: 'manosancetana',
    icon: '🎯',
    titleK: '៣. មនោសញ្ចេតនាហារ (អាហារនៃបំណងប្រាថ្នា)',
    titleE: '3. Manosañcetanāhāra (Volitional Intention)',
    pali: 'Manosañcetanā tatiyo āhāro',
    typeK: 'អាហារកម្ម',
    typeE: 'Volitional Nutriment',
    descK: 'ចេតនានិងសេចក្ដីប្រាថ្នាខាងក្នុង ដែលរុញច្រានចិត្តឱ្យធ្វើសកម្មភាព សាងកម្ម និងជាកម្លាំងជំរុញឱ្យកើតក្នុងភពថ្មីៗ។',
    descE: 'Mental volition, ambition, and driving karmic intentions that propel action and sustain future rebirth in Saṁsāra.',
    simileK: 'ឧបមាដូចជង្ហុកធ្យូងកំពុងឆេះសន្ធោសន្ធៅ ដែលបុរសមាឌធំពីរនាក់អូសទាញមនុស្សម្នាក់ទម្លាក់ចូល។',
    simileE: 'Like a blazing pit of fiery coals, into which two strong men drag an unwilling person.',
    modernK: 'ពិនិត្យមើលចេតនាក្នុងការងារ៖ តើយើងធ្វើការដោយសារលោភលន់ចង់មានចង់ឈ្នះគេ ឬធ្វើដោយសារក្ដីស្រឡាញ់ និងការទទួលខុសត្រូវ?',
    modernE: 'Regularly audit career motives: are you driven by ego, status insecurity, or by genuine contribution and service?'
  },
  {
    id: 'vinnana',
    icon: '💡',
    titleK: '៤. វិញ្ញាណាហារ (អាហារនៃវិញ្ញាណដឹង)',
    titleE: '4. Viññāṇāhāra (Consciousness as Nutriment)',
    pali: 'Viññāṇaṁ catuttho āhāro',
    typeK: 'អាហារបដិសន្ធិ',
    typeE: 'Consciousness Nutriment',
    descK: 'វិញ្ញាណដែលដឹងនូវអារម្មណ៍ និងជាអ្នកទ្រទ្រង់នាមរូប (ចិត្តនិងកាយ) ឱ្យនៅបន្តដំណើរបដិសន្ធិក្នុងវដ្តសង្សារ។',
    descE: 'The underlying stream of consciousness that binds mind and matter, sustaining continuity from moment to moment and life to life.',
    simileK: 'ឧបមាដូចចោរដែលត្រូវគេយកលំពែង ៣០០ ដើម មកចាក់ទម្លុះរាល់ថ្ងៃ (ព្រឹក ១០០, ថ្ងៃត្រង់ ១០០, ល្ងាច ១០០)។',
    simileE: 'Like a condemned criminal pierced by 300 spears a day—100 at dawn, 100 at noon, and 100 at dusk.',
    modernK: 'ចម្រើនសតិដឹងទាន់វិញ្ញាណ កុំឱ្យចិត្តជាប់ជំពាក់នឹងអារម្មណ៍ដែលដឹង ដើម្បីកាត់ផ្ដាច់ចំណងនៃទុក្ខ។',
    modernE: 'Cultivate pure mindful observing of consciousness itself without clinging, untying the knot of existential anxiety.'
  }
]
</script>
