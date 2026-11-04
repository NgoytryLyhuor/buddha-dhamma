<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៤៩ — អាការៈ ៣២ & អសុភ ១០', 'GATHA 49 — 32 BODY PARTS & 10 ASUBHA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('អាការៈ ៣២ & អសុភ ១០ ៖ កាយគតាសតិ', '32 Parts of the Body & 10 Stages of Asubha') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('កាយគតាសតិ (សតិកំណត់ដឹងក្នុងកាយ) គឺជាកំពូលកម្មដ្ឋានមួយក្នុងមហាសតិបដ្ឋានសូត្រ ដែលព្រះសម្មាសម្ពុទ្ធតែងតែត្រាស់សរសើរ និងជាមេរៀនដំបូងបង្អស់ «តចបញ្ចកកម្មដ្ឋាន» ដែលព្រះឧបជ្ឈាយ៍បង្រៀនដល់កុលបុត្រគ្រប់រូបពេលបួស។ ការពិចារណាអាការៈ ៣២ នៃរាងកាយ និងអសុភ ១០ ជួយទម្លុះការបំភាន់នៃរូបសម្រស់ បន្សាបរាគតណ្ហា បំបាត់មានះអំនួត និងដាស់តឿនឱ្យឃើញការពិតថា រូបកាយគ្រាន់តែជាធាតុធម្មជាតិដែលមិនស្ថិតស្ថេរ មិនស្អាត និងមិនមែនជារបស់ខ្លួនឡើយ។', 'Kāyagatāsati (Mindfulness of the Body) is one of the crowning meditation practices celebrated by the Buddha in the Mahāsatipaṭṭhāna Sutta, taught as the very first lesson (Tacapañcaka Kammaṭṭhāna) to every novice upon monastic ordination. Contemplating the 32 constituent parts and the 10 stages of decomposing foulness cuts through superficial vanity, dispels lustful illusions, and awakens direct insight into the truth: the physical body is merely an impermanent, impersonal, organic composite of natural elements.') }}
    </p>

    <!-- Tab Selector: 32 Parts vs 10 Asubha -->
    <div class="flex items-center gap-2 mt-8">
      <button
        type="button"
        @click="activeTab = 'parts'"
        class="h-10 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center gap-2"
        :style="activeTab === 'parts'
          ? { background: 'var(--accent)', color: 'var(--accent-ink, #ffffff)', borderColor: 'var(--accent)' }
          : { background: 'var(--bg-card)', color: 'var(--ink-muted)', borderColor: 'var(--border)' }"
      >
        <span>🧬</span>
        <span>{{ t('អាការៈ ៣២ (ទ្វត្តិំសាកា)', '32 Constituent Parts') }}</span>
      </button>

      <button
        type="button"
        @click="activeTab = 'asubha'"
        class="h-10 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center gap-2"
        :style="activeTab === 'asubha'
          ? { background: 'var(--accent)', color: 'var(--accent-ink, #ffffff)', borderColor: 'var(--accent)' }
          : { background: 'var(--bg-card)', color: 'var(--ink-muted)', borderColor: 'var(--border)' }"
      >
        <span>💀</span>
        <span>{{ t('អសុភ ១០ (ដំណាក់កាលសាកសព)', '10 Stages of Asubha') }}</span>
      </button>
    </div>

    <!-- TAB 1: 32 PARTS -->
    <div v-if="activeTab === 'parts'" class="mt-6 space-y-6">
      <!-- Tacapancaka Highlight -->
      <div class="card-paper p-5 sm:p-6 rounded-xl border-l-4" :style="{ borderLeftColor: 'var(--accent)' }">
        <div class="flex items-center gap-2">
          <span class="text-amber-500 font-mono font-bold text-xs uppercase tracking-wider">កម្មដ្ឋានគ្រឹះដំបូងពេលបួស</span>
        </div>
        <h3 class="font-display text-xl font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
          {{ t('តចបញ្ចកកម្មដ្ឋាន (អាការៈ ៥ ដំបូង)', 'Tacapañcaka Kammaṭṭhāna — The 5 Skin Elements') }}
        </h3>
        <p class="text-xs sm:text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ព្រះឧបជ្ឈាយ៍តែងបង្រៀនដល់សាមណេរ និងភិក្ខុថ្មីក្នុងពេលបួស ឱ្យសូត្របញ្រ្ចាសចុះឡើង ទាំងបាលី និងន័យ ៖', 'Taught at monastic ordination to meditate forward and reverse upon the 5 outer elements:') }}
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mt-4">
          <div v-for="t in tacapancaka" :key="t.pali" class="p-3 rounded-lg border text-center" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <span class="text-xl sm:text-2xl">{{ t.icon }}</span>
            <p class="font-display font-bold text-sm mt-1 text-amber-500">{{ t.pali }}</p>
            <p class="text-xs font-bold mt-0.5" :style="{ color: 'var(--ink)' }">{{ t.km }}</p>
            <p class="text-[10px] text-stone-500 mt-0.5">{{ t.en }}</p>
          </div>
        </div>
        <p class="text-center text-xs mt-3 text-stone-500 font-mono">
          «កេសា លោមា នខា ទន្តា តចោ — តចោ ទន្តា នខា លោមា កេសា»
        </p>
      </div>

      <!-- 20 Earth Elements (Pathavi Dhatu) -->
      <div class="card-paper p-6 md:p-8 rounded-xl border">
        <div class="flex items-center justify-between gap-2 flex-wrap">
          <div>
            <span class="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
              ធាតុដី (បឋវីធាតុ)
            </span>
            <h3 class="font-display text-xl font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
              {{ t('អាការៈរឹង ២០ យ៉ាង', '20 Solid Elements (Paṭhavī Dhātu)') }}
            </h3>
          </div>
          <span class="text-xs font-mono font-bold opacity-60">២០ កោដ្ឋាស</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 mt-4">
          <div
            v-for="(p, i) in earthParts"
            :key="p.pali"
            class="p-3 rounded-xl border flex items-center gap-2.5"
            :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }"
          >
            <span class="w-6 h-6 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
              {{ i + 1 }}
            </span>
            <div class="min-w-0">
              <strong class="text-xs font-bold block truncate" :style="{ color: 'var(--ink)' }">{{ p.km }}</strong>
              <span class="text-[10px] font-mono text-stone-500 block truncate">{{ p.pali }} ({{ p.en }})</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 12 Water Elements (Apo Dhatu) -->
      <div class="card-paper p-6 md:p-8 rounded-xl border">
        <div class="flex items-center justify-between gap-2 flex-wrap">
          <div>
            <span class="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/30">
              ធាតុទឹក (អាបោធាតុ)
            </span>
            <h3 class="font-display text-xl font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
              {{ t('អាការៈរាវ ១២ យ៉ាង', '12 Liquid Elements (Āpo Dhātu)') }}
            </h3>
          </div>
          <span class="text-xs font-mono font-bold opacity-60">១២ កោដ្ឋាស</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 mt-4">
          <div
            v-for="(w, i) in waterParts"
            :key="w.pali"
            class="p-3 rounded-xl border flex items-center gap-2.5"
            :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }"
          >
            <span class="w-6 h-6 rounded-full bg-sky-500/15 text-sky-600 dark:text-sky-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
              {{ i + 21 }}
            </span>
            <div class="min-w-0">
              <strong class="text-xs font-bold block truncate" :style="{ color: 'var(--ink)' }">{{ w.km }}</strong>
              <span class="text-[10px] font-mono text-stone-500 block truncate">{{ w.pali }} ({{ w.en }})</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 2: 10 ASUBHA -->
    <div v-else class="mt-6 space-y-4">
      <div class="card-paper p-5 sm:p-6 rounded-xl border-l-4" :style="{ borderLeftColor: '#ef4444' }">
        <h3 class="font-display text-xl font-bold" :style="{ color: 'var(--ink)' }">
          {{ t('អសុភ ១០ ប្រការ ៖ ដំណាក់កាលនៃការរលួយនៃសាកសព', 'The 10 Stages of Foulness (Asubha Kammaṭṭhāna)') }}
        </h3>
        <p class="text-xs sm:text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ការចម្រើនអសុភ មិនមែនដើម្បីឱ្យកើតសេចក្តីស្អប់ខ្ពើមជីវិត ឬអស់សង្ឃឹមឡើយ តែជាថ្នាំបន្សាបដ៏ស័ក្តិសិទ្ធិបំផុតសម្រាប់រំលត់កាមរាគៈ និងការវង្វេងស្រឡាញ់រូបកាយដែលជាហេតុនៃសេចក្តីទុក្ខ ៖', 'Asubha meditation is not practiced to induce morbidity or depression, but as a potent antidote to extinguish lustful obsessions and bodily conceit:') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div
          v-for="(a, i) in asubhaList"
          :key="a.pali"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between gap-2">
              <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                អសុភទី {{ i + 1 }} · {{ a.pali }}
              </span>
              <span class="text-2xl">{{ a.icon }}</span>
            </div>
            <h4 class="font-display text-base sm:text-lg font-bold mt-2" :style="{ color: 'var(--ink)' }">
              {{ t(a.km, a.en) }}
            </h4>
            <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(a.descKm, a.descEn) }}
            </p>
          </div>

          <div class="mt-4 pt-3 border-t text-[11px] text-stone-500" :style="{ borderColor: 'var(--border)' }">
            <strong>{{ t('អានិសង្ស ៖ ', 'Antidote : ') }}</strong>
            <span>{{ t(a.benefitKm, a.benefitEn) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Practical Meditation Guidance -->
    <div class="card-paper p-6 md:p-8 mt-8 border-t-4" :style="{ borderTopColor: 'var(--accent)' }">
      <p class="chapter-label">{{ t('វិធីអនុវត្តប្រចាំថ្ងៃ', 'HOW TO PRACTICE') }}</p>
      <h3 class="font-display text-xl mt-1.5" :style="{ color: 'var(--ink)' }">
        {{ t('របៀបចម្រើនកាយគតាសតិក្នុងជីវិតរស់នៅ', 'Integrating Mindfulness of the Body into Daily Life') }}
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-5">
        <div class="p-4 rounded-xl border text-center" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-2xl">🚿</span>
          <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t('ពេលងូតទឹក និងសម្អាតកាយ', 'During Daily Bathing') }}</h4>
          <p class="text-xs mt-1.5 text-stone-500 leading-relaxed">
            {{ t('ពិចារណាឃើញថា ខ្លួនយើងត្រូវដុសខាត់ជារាល់ថ្ងៃ ព្រោះតែកាយនេះតែងហូរចេញនូវរបស់មិនស្អាត។', 'Notice how the body constantly excretes impurities, requiring ceaseless cleaning.') }}
          </p>
        </div>

        <div class="p-4 rounded-xl border text-center" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-2xl">🪞</span>
          <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t('ពេលឆ្លុះកញ្ចក់', 'Looking in the Mirror') }}</h4>
          <p class="text-xs mt-1.5 text-stone-500 leading-relaxed">
            {{ t('ឃើញសម្រស់ខាងក្រៅគ្រាន់តែជាស្រទាប់ស្បែកស្តើងបិទបាំងសាច់ ឆ្អឹង ឈាម និងសរសៃប៉ុណ្ណោះ។', 'Reflect that beauty is only skin-deep, cloaking bones, blood, and decaying tissue.') }}
          </p>
        </div>

        <div class="p-4 rounded-xl border text-center" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-2xl">🕊️</span>
          <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t('ពេលកើតរាគៈ ឬតណ្ហា', 'When Lust Arises') }}</h4>
          <p class="text-xs mt-1.5 text-stone-500 leading-relaxed">
            {{ t('រឭកឃើញអសុភ ១០ ឬរាងឆ្អឹងភ្លាមៗ នោះចិត្តរាគៈនឹងរលត់ស្ងប់ស្ងាត់ទៅវិញដោយស្វ័យប្រវត្តិ។', 'Recall the internal skeleton or decomposing forms to extinguish passion instantly.') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeTab = ref('parts')

const tacapancaka = [
  { pali: 'កេសា', km: 'សក់', en: 'Head hair', icon: '💇' },
  { pali: 'លោមា', km: 'រោម', en: 'Body hair', icon: '🌿' },
  { pali: 'នខា', km: 'ក្រចក', en: 'Nails', icon: '💅' },
  { pali: 'ទន្តា', km: 'ធ្មេញ', en: 'Teeth', icon: '🦷' },
  { pali: 'តចោ', km: 'ស្បែក', en: 'Skin', icon: '✋' }
]

const earthParts = [
  { pali: 'កេសា', km: 'សក់លើក្បាល', en: 'Head hair' },
  { pali: 'លោមា', km: 'រោមលើខ្លួន', en: 'Body hair' },
  { pali: 'នខា', km: 'ក្រចកដៃជើង', en: 'Nails' },
  { pali: 'ទន្តា', km: 'ធ្មេញ', en: 'Teeth' },
  { pali: 'តចោ', km: 'ស្បែកពាសពេញកាយ', en: 'Skin' },
  { pali: 'មំសំ', km: 'សាច់ដុំ', en: 'Flesh' },
  { pali: 'ន្ហារុ', km: 'សរសៃតូចធំ', en: 'Sinews / Tendons' },
  { pali: 'អដ្ឋិ', km: 'ឆ្អឹងទាំងអស់ ៣០០ កំណាត់', en: 'Bones' },
  { pali: 'អដ្ឋិមិញ្ជំ', km: 'ខួរក្នុងឆ្អឹង', en: 'Bone marrow' },
  { pali: 'វក្កំ', km: 'តម្រងនោម (ក្រលៀន)', en: 'Kidneys' },
  { pali: 'ហទយំ', km: 'បេះដូង', en: 'Heart' },
  { pali: 'យកនំ', km: 'ថ្លើម', en: 'Liver' },
  { pali: 'កិលោមភំ', km: 'វាស (សន្ទះដើមទ្រូង)', en: 'Diaphragm' },
  { pali: 'បិហកំ', km: 'ក្រពះ (អណ្តាតព្រលិត)', en: 'Spleen' },
  { pali: 'បប្ផាសំ', km: 'សួតទាំងសងខាង', en: 'Lungs' },
  { pali: 'អន្តំ', km: 'ពោះវៀនធំ', en: 'Large intestine' },
  { pali: 'អន្តគុណំ', km: 'ពោះវៀនតូច', en: 'Small intestine' },
  { pali: 'ឧទរិយំ', km: 'អាហារថ្មីក្នុងក្រពះ', en: 'Undigested food' },
  { pali: 'ករីសំ', km: 'អាហារចាស់ (លាមក)', en: 'Feces' },
  { pali: 'មត្ថលុង្គំ', km: 'ខួរក្បាលក្នុងលលាដ៍ក្បាល', en: 'Brain' }
]

const waterParts = [
  { pali: 'បិត្តំ', km: 'ទឹកប្រមាត់', en: 'Bile' },
  { pali: 'សេម្ហំ', km: 'ស្លេស្ម (កំហាក)', en: 'Phlegm' },
  { pali: 'បុព្វោ', km: 'ទឹកខ្ទុះ', en: 'Pus' },
  { pali: 'លោហិតំ', km: 'ឈាមរត់ក្នុងខ្លួន', en: 'Blood' },
  { pali: 'សេទោ', km: 'ញើសហូរតាមរន្ធរោម', en: 'Sweat' },
  { pali: 'មេទោ', km: 'ខ្លាញ់ខាប់', en: 'Fat' },
  { pali: 'អស្សុ', km: 'ទឹកភ្នែក', en: 'Tears' },
  { pali: 'វសា', km: 'ខ្លាញ់រាវ', en: 'Grease / Oil' },
  { pali: 'ខេឡោ', km: 'ទឹកមាត់ក្នុងមាត់', en: 'Saliva' },
  { pali: 'សិង្ឃាណិកា', km: 'ទឹកសម្បោរក្នុងច្រមុះ', en: 'Mucus' },
  { pali: 'លសិកា', km: 'ទឹករំអិលតាមសន្លាក់ឆ្អឹង', en: 'Synovial fluid' },
  { pali: 'មុត្តំ', km: 'ទឹកមូត្រ (ទឹកនោម)', en: 'Urine' }
]

const asubhaList = [
  {
    pali: 'ឧទ្ធុមាតកៈ',
    icon: '🎈',
    km: '១. សាកសពហើមឡើងប៉ោង',
    en: '1. The Bloated Corpse',
    descKm: 'សាកសពដែលស្លាប់ ១ ទៅ ២ ថ្ងៃ ត្រូវខ្យល់ក្នុងខ្លួនរុញច្រានឱ្យហើមឡើងដូចថង់ខ្យល់ គ្មានសម្រស់ដើមសេសសល់ឡើយ។',
    descEn: 'A corpse swollen and bloated like a bellows, disfigured beyond recognition.',
    benefitKm: 'បន្សាបការស្រឡាញ់រូបរាងកាយដែលតែងប្រាថ្នារាងស្អាត សង្ហា។',
    benefitEn: 'Cures infatuation with physical contours, proportions, and shape.'
  },
  {
    pali: 'វិនិលកៈ',
    icon: '🟣',
    km: '២. សាកសពខៀវស្អុយ',
    en: '2. The Discolored Corpse',
    descKm: 'សាកសពប្រែពណ៌ទៅជាខៀវ ក្រហម និងខ្មៅ លាយឡំដោយសារធាតុពុករលួយ។',
    descEn: 'A corpse turning blue, black, and patchy with decay.',
    benefitKm: 'បន្សាបការជាប់ជំពាក់នឹងសម្បុរស្បែក ស ខ្មៅ ស្រស់ស្អាត។',
    benefitEn: 'Cures obsession with fair complexion and skin beauty.'
  },
  {
    pali: 'វិបុព្វកៈ',
    icon: '💧',
    km: '៣. សាកសពមានខ្ទុះហូរ',
    en: '3. The Festering Corpse',
    descKm: 'សាកសពដែលធ្លាយស្បែក ហូរខ្ទុះ និងទឹករងៃតាមទ្វារផ្សេងៗគួរឱ្យខ្ពើមរអើម។',
    descEn: 'A corpse oozing pus and foul putrid fluids from wounds and orifices.',
    benefitKm: 'បន្សាបការជាប់ជំពាក់នឹងក្លិនក្រអូប ទឹកអប់ និងគ្រឿងលម្អកាយ។',
    benefitEn: 'Cures attachment to scents, perfumes, and bodily hygiene illusions.'
  },
  {
    pali: 'វិច្ឆិទ្ទកៈ',
    icon: '✂️',
    km: '៤. សាកសពដាច់ជាពីរកំណាត់',
    en: '4. The Fissured Corpse',
    descKm: 'សាកសពដែលដាច់កណ្តាលខ្លួនជាពីរកំណាត់ បង្ហាញសរីរាង្គខាងក្នុង។',
    descEn: 'A corpse cut in half at the torso, exposing internal organs.',
    benefitKm: 'បន្សាបការយល់ខុសថារូបកាយជារបស់រឹងមាំ ឬជាដុំតែមួយ (ឃនសញ្ញា)។',
    benefitEn: 'Breaks the compact illusion of bodily wholeness and solidity.'
  },
  {
    pali: 'វិក្ខាយិតកៈ',
    icon: '🦅',
    km: '៥. សាកសពសត្វចឹកស៊ី',
    en: '5. The Gnawed Corpse',
    descKm: 'សាកសពដែលត្រូវត្មាត ក្អែក ឆ្កែព្រៃ ឬដង្កូវរោមចឹកស៊ីជាចំណីយ៉ាងខ្ចាត់ខ្ចាយ។',
    descEn: 'A corpse mangled and eaten by crows, vultures, and wolves.',
    benefitKm: 'បន្សាបការស្រឡាញ់សាច់ទ្រលុកទ្រលន់ និងការមោទនភាពចំពោះកាយ។',
    benefitEn: 'Cures infatuation with plump, youthful flesh.'
  },
  {
    pali: 'វិក្ខិត្តកៈ',
    icon: '🦴',
    km: '៦. សាកសពខ្ចាត់ខ្ចាយ',
    en: '6. The Scattered Corpse',
    descKm: 'សាកសពដែលដៃ ជើង ក្បាល និងដងខ្លួនបាក់បែកខ្ចាត់ខ្ចាយនៅតាមទីផ្សេងៗ។',
    descEn: 'A corpse with severed limbs and torso scattered in different directions.',
    benefitKm: 'បន្សាបការជាប់ជំពាក់នឹងកាយវិការ ឥរិយាបថ និងការដើរឈរអង្គុយ។',
    benefitEn: 'Cures attachment to graceful physical posture and movement.'
  },
  {
    pali: 'ហតវិក្ខិត្តកៈ',
    icon: '⚔️',
    km: '៧. សាកសពគេកាប់ចិញ្ច្រាំ',
    en: '7. The Hacked Corpse',
    descKm: 'សាកសពដែលត្រូវគេកាប់ចិញ្ច្រាំដោយអាវុធ ធ្លាយចេញឆ្អឹង និងសរសៃ។',
    descEn: 'A corpse slashed and mutilated by weapons.',
    benefitKm: 'បន្សាបការជាប់ជំពាក់នឹងសន្លាក់ និងការផ្គុំនៃរាងកាយ។',
    benefitEn: 'Destroys the perception of bodily symmetry and elegance.'
  },
  {
    pali: 'លោហិតកៈ',
    icon: '🩸',
    km: '៨. សាកសពប្រឡាក់ឈាម',
    en: '8. The Bleeding Corpse',
    descKm: 'សាកសពដែលប្រឡាក់ស្រោចស្រពដោយឈាមស្រស់ហូរស្រក់គ្រប់កន្លែង។',
    descEn: 'A corpse covered and trickling with fresh crimson blood.',
    benefitKm: 'បន្សាបការជាប់ចិត្តនឹងការតុបតែងលម្អសម្លៀកបំពាក់ និងពណ៌សម្បុរ។',
    benefitEn: 'Dispels infatuation with physical vitality and glowing looks.'
  },
  {
    pali: 'បុលុវកៈ',
    icon: '🐛',
    km: '៩. សាកសពដង្កូវជុះជុំជិត',
    en: '9. The Worm-Infested Corpse',
    descKm: 'សាកសពដែលដង្កូវរាប់ម៉ឺនចុះស៊ីរូងក្នុងក្បាល ភ្នែក ច្រមុះ មាត់ និងសាច់។',
    descEn: 'A corpse swarming with thousands of maggots and parasitic worms.',
    benefitKm: 'បន្សាបគំនិតអាត្មានិយម (Ego) ថារូបកាយនេះជារបស់យើងផ្តាច់មុខ។',
    benefitEn: 'Cures egoistic ownership; the body belongs to parasites as a meal.'
  },
  {
    pali: 'អដ្ឋិកៈ',
    icon: '💀',
    km: '១០. សាកសពនៅសល់តែឆ្អឹង',
    en: '10. The Skeleton',
    descKm: 'សាកសពដែលសាច់ ឈាម ស្បែករលួយអស់ នៅសល់តែគ្រោងឆ្អឹងសក្បុសកណ្តាលវាល។',
    descEn: 'A white bleached skeleton lying bare on the cemetery soil.',
    benefitKm: 'បន្សាបការជាប់ជំពាក់នឹងធ្មេញស្អាត ម្រាមដៃស្អាត និងរចនាសម្ព័ន្ធកាយទាំងមូល។',
    benefitEn: 'Cures infatuation with teeth, bone structure, and physical form permanently.'
  }
]
</script>
