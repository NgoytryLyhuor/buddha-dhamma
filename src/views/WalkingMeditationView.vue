<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៥៦ — ការដើរចង្ក្រម & ឥរិយាបថ ៤', 'GATHA 56 — WALKING MEDITATION & 4 POSTURES') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ក្បួនដើរចង្ក្រម & ការបណ្តុះសតិក្នុងឥរិយាបថទាំង ៤', 'Walking Meditation (Caṅkama) & Mindfulness in 4 Postures') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('សមាធិមិនមែនធ្វើឡើងតែពេលអង្គុយបត់ជើងធ្មេចភ្នែកនោះឡើយ។ ព្រះសម្មាសម្ពុទ្ធទ្រង់បង្រៀនឱ្យបណ្តុះសតិក្នុងគ្រប់ឥរិយាបថទាំង ៤ គឺ «ដើរ ឈរ អង្គុយ ដេក»។ ក្នុងនោះ «ការដើរចង្ក្រម» (Caṅkama) គឺជាបច្ចេកទេសសមាធិដ៏អស្ចារ្យ ជួយបំបាត់សេចក្តីងងុយដេក បង្កើនថាមពលរាងកាយ ជំនួយការរំលាយអាហារ និងធ្វើឱ្យសមាធិតម្កល់នៅបានយូរអង្វែង។', 'Meditation is by no means limited to sitting cross-legged with closed eyes. The Buddha taught the establishment of continuous mindfulness across all four bodily postures: walking, standing, sitting, and lying down. Walking Meditation (Caṅkama) is a supreme dynamic practice that shatters lethargy, boosts physical vitality, aids digestion, and produces concentration that endures with remarkable stability.') }}
    </p>

    <!-- 5 Benefits of Walking Meditation (AN 5.29) -->
    <div class="card-paper p-6 md:p-8 rounded-2xl border mt-8">
      <div class="flex items-center gap-2">
        <span class="text-amber-500 text-xl">✨</span>
        <h3 class="font-display text-lg sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
          {{ t('អានិសង្ស ៥ យ៉ាងនៃការដើរចង្ក្រម (ចង្កមសូត្រ AN 5.29)', '5 Sublime Benefits of Walking Meditation (AN 5.29)') }}
        </h3>
      </div>
      <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ព្រះពុទ្ធទ្រង់ត្រាស់សម្ដែងអានិសង្សដ៏ប្រសើរ ៥ យ៉ាងដែលបានមកពីការដើរចង្ក្រម ៖', 'The Buddha praised five practical fruits gained by the disciplined practitioner of Caṅkama:') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 mt-5">
        <div v-for="(b, idx) in walkingBenefits" :key="idx" class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-2xl">{{ b.icon }}</span>
          <h4 class="font-bold text-xs sm:text-sm mt-2" :style="{ color: 'var(--ink)' }">{{ idx + 1 }}. {{ t(b.km, b.en) }}</h4>
          <p class="text-xs mt-1 text-stone-500 leading-relaxed">{{ t(b.descKm, b.descEn) }}</p>
        </div>
      </div>
    </div>

    <!-- Practical Step-by-Step Walking Technique -->
    <div class="card-paper p-6 md:p-8 rounded-2xl border mt-8">
      <p class="chapter-label">{{ t('ក្បួនអនុវត្តជាក់ស្តែង', 'STEP-BY-STEP TECHNIQUE') }}</p>
      <h3 class="font-display text-xl font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
        {{ t('របៀបរៀបចំផ្លូវចង្ក្រម & ដំណាក់កាលកំណត់សតិ', 'Setting the Path & Stages of Mindfulness While Walking') }}
      </h3>

      <div class="space-y-4 mt-5 text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        <div class="p-4 rounded-xl border bg-amber-500/5 border-amber-500/20">
          <strong class="text-amber-600 dark:text-amber-400 block mb-1">១. ការរៀបចំផ្លូវដើរ និងកាយវិការ ៖</strong>
          • រកផ្លូវដើរត្រង់ ប្រវែងប្រហែល ២០ ទៅ ៣០ ជំហាន (ប្រមាណ ៨ ទៅ ១២ ម៉ែត្រ)។<br/>
          • ឈរត្រង់ខ្លួន ដាក់ដៃស្តាំក្តាប់ដៃឆ្វេងពីមុខ ឬដាក់ដៃទាំងពីរខាងក្រោយខ្នងដោយការគោរព។<br/>
          • ទម្លាក់ភ្នែកចុះក្រោមប្រមាណ ២ ម៉ែត្រខាងមុខ (មិនត្រូវសម្លឹងឆ្ងាយ ឬបិទភ្នែកឡើយ)។
        </div>

        <!-- Stages of Walking Labeling -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-4">
          <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <span class="font-mono font-bold text-xs text-sky-500">កម្រិតទី ១ (សម្រាប់អ្នកទើបហាត់)</span>
            <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">ដើរធម្មតា — ដឹង ២ ដំណាក់</h4>
            <p class="text-xs mt-1.5 text-stone-500 leading-relaxed">
              ពេលបោះជំហានស្តាំ កំណត់ដឹងថា <strong>«ស្តាំ...»</strong>, ពេលបោះជំហានឆ្វេង កំណត់ដឹងថា <strong>«ឆ្វេង...»</strong>។
            </p>
          </div>

          <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <span class="font-mono font-bold text-xs text-amber-500">កម្រិតទី ២ (កម្រិតមធ្យម)</span>
            <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">លើក និងដាក់ — ដឹង ២ ខណៈ</h4>
            <p class="text-xs mt-1.5 text-stone-500 leading-relaxed">
              ពេលកែងជើងលើកឡើង កំណត់ដឹងថា <strong>«លើក...»</strong>, ពេលបាតជើងជាន់ប៉ះកម្រាល កំណត់ដឹងថា <strong>«ដាក់...»</strong>។
            </p>
          </div>

          <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <span class="font-mono font-bold text-xs text-emerald-500">កម្រិតទី ៣ (វិបស្សនាញាណ)</span>
            <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">លើក ឈាន ដាក់ — ដឹង ៣ ចលនា</h4>
            <p class="text-xs mt-1.5 text-stone-500 leading-relaxed">
              ពេលលើកជើង <strong>«លើក»</strong> (ធាតុភ្លើង), ពេលរុញជើងទៅមុខ <strong>«ឈាន»</strong> (ធាតុខ្យល់), ពេលប៉ះដី <strong>«ដាក់»</strong> (ធាតុដី-ទឹក)។
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Mindfulness in 4 Postures (សម្បជញ្ញៈ ៤) -->
    <div class="card-paper p-6 md:p-8 rounded-2xl border mt-8">
      <p class="chapter-label">{{ t('មហាសតិបដ្ឋាន', 'GREAT SATIPATTHANA') }}</p>
      <h3 class="font-display text-xl font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
        {{ t('សតិក្នុងឥរិយាបថធំទាំង ៤ & សម្បជញ្ញៈ ៤ ក្នុងការងាររស់នៅ', 'Mindfulness in 4 Postures & The 4 Clear Comprehensions') }}
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
        <div v-for="samp in sampajannaList" :key="samp.pali" class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-xs font-mono font-bold text-amber-500">{{ samp.pali }}</span>
          <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t(samp.km, samp.en) }}</h4>
          <p class="text-xs mt-1.5 text-stone-500 leading-relaxed">{{ t(samp.descKm, samp.descEn) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const walkingBenefits = [
  {
    icon: '🛣️',
    km: 'អត់ធន់នឹងការធ្វើដំណើរផ្លូវឆ្ងាយ',
    en: 'Endurance on Long Journeys',
    descKm: 'ជួយឱ្យរាងកាយរឹងមាំ ជើងរឹងប៉ឹង មិនងាយអស់កម្លាំងពេលធ្វើដំណើរ។',
    descEn: 'Builds physical stamina and lower body strength for extended travels.'
  },
  {
    icon: '💪',
    km: 'អត់ធន់នឹងការព្យាយាមបដិបត្តិ',
    en: 'Stamina for Exertion',
    descKm: 'ជួយបណ្តុះវីរិយៈ ធ្វើឱ្យចិត្តអត់ធន់នឹងការប្រឹងប្រែងបដិបត្តិធម៌យូរៗ។',
    descEn: 'Develops robust persevering energy to sustain long hours of meditation.'
  },
  {
    icon: '🌿',
    km: 'រាងកាយមានអាពាធតិច (សុខភាពល្អ)',
    en: 'Freedom from Illness',
    descKm: 'ចលនារាងកាយរំញោចចរន្តឈាមរត់ស្រួល កាត់បន្ថយជំងឺតម្កាត់។',
    descEn: 'Stimulates cardiovascular flow, reduces stiffness, and fosters radiant health.'
  },
  {
    icon: '🍲',
    km: 'ជំនួយដល់ការរំលាយអាហារ',
    en: 'Healthy Digestion',
    descKm: 'អាហារដែលបរិភោគរួច ងាយរំលាយបានល្អ មិនធ្វើឱ្យឆ្អល់ពោះ ឬតឹងទ្រូង។',
    descEn: 'Ensures wholesome digestion of meals without bloating or gastric distress.'
  },
  {
    icon: '🧘',
    km: 'សមាធិតម្កល់នៅបានយូរអង្វែង',
    en: 'Enduring Concentration',
    descKm: 'សមាធិដែលកើតឡើងដោយការដើរចង្ក្រម មានភាពរឹងមាំ និងស្ថិតនៅបានយូរ។',
    descEn: 'Concentration acquired through dynamic walking endures long without slipping.'
  }
]

const sampajannaList = [
  {
    pali: 'Sātthaka-sampajañña',
    km: '១. សាត្ថកសម្បជញ្ញៈ (ដឹងពីប្រយោជន៍)',
    en: '1. Comprehension of Purpose (Sātthaka)',
    descKm: 'មុននឹងធ្វើ ឬនិយាយអ្វីមួយ ត្រូវដឹងជាមុនថា តើទង្វើនេះមានប្រយោជន៍ដល់ខ្លួន និងអ្នកដទៃដែរឬទេ? បើឥតប្រយោជន៍ ត្រូវបញ្ឈប់។',
    descEn: 'Assessing before action whether the intended physical or verbal deed serves genuine spiritual or practical purpose.'
  },
  {
    pali: 'Sappāya-sampajañña',
    km: '២. សប្បាយសម្បជញ្ញៈ (ដឹងពីភាពសមរម្យ)',
    en: '2. Comprehension of Suitability (Sappāya)',
    descKm: 'ដឹងថាទង្វើនោះសមរម្យនឹងកាលៈទេសៈ ពេលវេលា និងទីកន្លែងដែរឬទេ? ជៀសវាងទង្វើដែលនាំឱ្យគេទាស់ចិត្ត។',
    descEn: 'Discerning whether an action, though beneficial, is appropriate for the current time, place, and environmental context.'
  },
  {
    pali: 'Gocara-sampajañña',
    km: '៣. គោចរសម្បជញ្ញៈ (ដឹងក្នុងដែនកម្មដ្ឋាន)',
    en: '3. Comprehension of Meditation Domain (Gocara)',
    descKm: 'មិនថាពេលកំពុងហូបចុក បត់ដៃ លាដៃ ឬបត់ជើងធំតូចឡើយ ចិត្តមិនចោលអារម្មណ៍សតិកម្មដ្ឋានឡើយ។',
    descEn: 'Maintaining constant mindfulness anchored to the meditation subject throughout mundane bodily motions.'
  },
  {
    pali: 'Asammoha-sampajañña',
    km: '៤. អសម្មោហសម្បជញ្ញៈ (ដឹងដោយមិនវង្វេងក្នុងអត្តា)',
    en: '4. Comprehension of Non-Delusion (Asammoha)',
    descKm: 'ដឹងច្បាស់ថា មានតែចលនារូបធាតុកំពុងផ្លាស់ប្តូរ និងចិត្តកំពុងដឹងប៉ុណ្ណោះ គ្មាន «ខ្ញុំ» ឬ «បុរស-ស្ត្រី» ណាម្នាក់កំពុងដើរឡើយ។',
    descEn: 'Penetrative realization that there is no static self or person walking, merely physical elements animated by mental intent.'
  }
]
</script>
