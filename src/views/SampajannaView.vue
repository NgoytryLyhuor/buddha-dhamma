<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🎯 {{ t('អដ្ឋកថាសតិប្បដ្ឋាន & វិសុទ្ធិមគ្គ · សម្បជញ្ញបព្វ', 'Satipaṭṭhāna Commentary & Visuddhimagga · Sampajañña') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('សម្បជញ្ញៈ ៤ ប្រការក្នុងជីវិតការងារ និងការរស់នៅ', 'The 4 Clear Comprehensions in Daily Life') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'សតិ គឺជាការដឹងខ្លួន; ចំណែក សម្បជញ្ញៈ គឺជាបញ្ញាដឹងច្បាស់នូវកាលៈទេសៈ ផលប្រយោជន៍ និងការពិត។ សម្បជញ្ញៈ ៤ ប្រការនេះ គឺជាស្ពានចម្លងសមាធិចេញពីកន្លែងអង្គុយ មកកាន់តុធ្វើការ ការប្រាស្រ័យទាក់ទង និងការរស់នៅជាក់ស្ដែងរាល់ថ្ងៃ ដើម្បីធ្វើការងារប្រកបដោយប្រសិទ្ធភាពខ្ពស់ និងគ្មានការធ្វេសប្រហែស។',
            'While Sati is bare presence, Sampajañña is situational wisdom—the dynamic intelligence that guides action. These four clear comprehensions bridge meditation with office desks, family meals, and difficult negotiations, ensuring optimal effectiveness, poise, and freedom from blunder.'
          ) }}
        </p>
      </div>
    </section>

    <!-- 4 Clear Comprehensions Grid -->
    <section class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="(s, idx) in list"
          :key="s.id"
          class="card-paper p-6 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ s.icon }}
              </span>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold"
                    :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                {{ t('សម្បជញ្ញៈទី', 'Level') }} {{ idx + 1 }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ t(s.titleK, s.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-2" :style="{ color: 'var(--accent)' }">
              {{ s.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(s.descK, s.descE) }}
            </p>

            <div class="p-3.5 rounded-2xl border space-y-1.5 text-xs mb-3"
                 :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
              <div class="font-semibold text-amber-600">
                ❓ {{ t('សំណួរពិចារណាមុនធ្វើ៖', 'Checkpoint Question:') }}
              </div>
              <p class="italic font-serif" :style="{ color: 'var(--ink)' }">« {{ t(s.questionK, s.questionE) }} »</p>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 text-xs">
            <strong>💼 {{ t('ការអនុវត្តជាក់ស្ដែង៖ ', 'Practical Workplace Drill: ') }}</strong>
            <span>{{ t(s.practiceK, s.practiceE) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Daily Routine Integration -->
    <section class="card-paper p-6 space-y-4 border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
      <h3 class="text-lg font-bold font-serif" :style="{ color: 'var(--ink)' }">
        {{ t('អនុវត្តសម្បជញ្ញៈក្នុងការងារប្រចាំថ្ងៃ', 'Integrating Clear Comprehension Into Daily Routine') }}
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
        <div class="p-4 rounded-2xl border space-y-1.5" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="font-bold text-amber-600">📧 {{ t('ការឆ្លើយតបអ៊ីមែល & សារ', 'Replying Emails & Messages') }}</span>
          <p :style="{ color: 'var(--ink-muted)' }">
            {{ t('មុនចុចផ្ញើ ផ្អាក ៣ វិនាទី ពិនិត្យមើលសាត្ថកៈ (តើមានប្រយោជន៍ទេ?) និងសប្បាយៈ (តើសម្ដីនេះសមរម្យទេ?)។', 'Pause 3 seconds before hitting send: is this truly necessary, and is the tone respectful and appropriate?') }}
          </p>
        </div>

        <div class="p-4 rounded-2xl border space-y-1.5" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="font-bold text-emerald-600">🍲 {{ t('ការបរិភោគអាហារ', 'Eating Meals') }}</span>
          <p :style="{ color: 'var(--ink-muted)' }">
            {{ t('ដឹងច្បាស់នូវរសជាតិ ទំពារយឺតៗ មិនមើលទូរស័ព្ទបណ្ដើរញ៉ាំបណ្ដើរ ពិចារណាឃើញថាអាហារគ្រាន់តែចិញ្ចឹមកាយ។', 'Chew slowly without screens; observe taste, swallowing, and bodily nourishment without gluttonous distraction.') }}
          </p>
        </div>

        <div class="p-4 rounded-2xl border space-y-1.5" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="font-bold text-violet-600">🚶 {{ t('ការដើរ និងផ្លាស់ប្ដូរឥរិយាបថ', 'Walking Between Meetings') }}</span>
          <p :style="{ color: 'var(--ink-muted)' }">
            {{ t('ពេលដើរទៅបន្ទប់ទឹក ឬជួបភ្ញៀវ ដឹងច្បាស់នូវជំហានជើង ដកដង្ហើមស្ងប់ រក្សាស្មារតីមូលជាប់ជានិច្ច។', 'Feel soles touching floor between meetings; breathe calmly to reset mental posture.') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const list = [
  {
    id: 'satthaka',
    icon: '🎯',
    titleK: '១. សាត្ថកសម្បជញ្ញៈ (ដឹងច្បាស់នូវផលប្រយោជន៍)',
    titleE: '1. Sātthaka-Sampajañña (Purposefulness)',
    pali: 'Sātthakasampajaññaṁ',
    descK: 'ការដឹងច្បាស់ថា កិច្ចការដែលរៀបនឹងធ្វើ ពាក្យដែលរៀបនឹងនិយាយ ឬប្រាក់ដែលរៀបនឹងចំណាយ មានផលប្រយោជន៍ពិតប្រាកដ ឬគ្រាន់តែធ្វើតាមតែអារម្មណ៍ចង់ឈ្នះ ចង់អួត។',
    descE: 'Comprehending whether an intended action, purchase, or spoken word serves a noble, beneficial purpose, or is merely an impulsive ego reaction.',
    questionK: 'តើទង្វើឬពាក្យសម្ដីនេះ មានផលប្រយោជន៍ពិតប្រាកដដល់ខ្ញុំ និងអ្នកដទៃដែរឬទេ?',
    questionE: 'Does this action or speech bring genuine wholesome benefit to myself and others?',
    practiceK: 'មុននឹងទិញអីវ៉ាន់ ឬមុននឹងនិយាយរឿងអ្នកដទៃ សួរខ្លួនឯងថា «តើវាចាំបាច់ទេ?» បើគ្មានប្រយោជន៍ ត្រូវលះបង់ភ្លាម។',
    practiceE: 'Before shopping online or gossiping, ask "Is this truly necessary?" If useless, discard it instantly.'
  },
  {
    id: 'sappaya',
    icon: '⏳',
    titleK: '២. សប្បាយសម្បជញ្ញៈ (ដឹងច្បាស់នូវកាលៈទេសៈសមរម្យ)',
    titleE: '2. Sappāya-Sampajañña (Suitability & Timing)',
    pali: 'Sappāyasampajaññaṁ',
    descK: 'ទោះបីកិច្ចការនោះមានប្រយោជន៍ក៏ពិតមែន តែត្រូវដឹងច្បាស់ថា តើពេលវេលានេះ ទីកន្លែងនេះ និងបុគ្គលនេះ សមរម្យនឹងនិយាយ ឬធ្វើដែរឬទេ? កុំឱ្យខុសកាលៈទេសៈ។',
    descE: 'Discerning whether a beneficial action is appropriate for this specific moment, place, emotional climate, and audience.',
    questionK: 'តើពេលវេលានេះ និងកន្លែងនេះ សមរម្យនឹងនិយាយ ឬធ្វើដែរឬទេ?',
    questionE: 'Even if true and good, is this the right time, setting, and psychological atmosphere?'
  },
  {
    id: 'gocara',
    icon: '🧘',
    titleK: '៣. គោចរសម្បជញ្ញៈ (ដឹងច្បាស់នូវដែនអារម្មណ៍នៃសតិ)',
    titleE: '3. Gocara-Sampajañña (Anchored in Mindfulness)',
    pali: 'Gocarasampajaññaṁ',
    descK: 'ការមិនលះបង់ចោលនូវសតិនិងធម៌ ពេលកំពុងបំពេញកិច្ចការងារប្រចាំថ្ងៃ។ ដៃធ្វើការ តែចិត្តនៅតែដឹងទាន់ខ្យល់ដង្ហើម និងរក្សាភាពស្ងប់ក្នុងចិត្តជានិច្ច។',
    descE: 'Maintaining continuous contact with your spiritual anchor (breath, bodily posture, or mettā) while actively engaged in professional duties.',
    questionK: 'តើចិត្តរបស់ខ្ញុំកំពុងរសាត់អណ្ដែត ឬកំពុងមានសតិដឹងទាន់បច្ចុប្បន្នកាល?',
    questionE: 'Is my mind scattered in frantic hurry, or remains grounded in poised awareness?'
  },
  {
    id: 'asammoha',
    icon: '💡',
    titleK: '៤. អសម្មោហសម្បជញ្ញៈ (ដឹងច្បាស់មិនវង្វេងក្នុងតួខ្លួន)',
    titleE: '4. Asammoha-Sampajañña (Non-Delusion)',
    pali: 'Asammohasampajaññaṁ',
    descK: 'ការដឹងច្បាស់នូវការពិតនៃធម្មជាតិថា រាល់ចលនាកាយវិការ និងគំនិតទាំងអស់ គ្រាន់តែជាដំណើរការនៃរូបនិងនាម គ្មាន «តួខ្លួនខ្ញុំ» នៅពីក្រោយឡើយ (អនត្តា)។',
    descE: 'Penetrating beyond the illusion of a personal ego: recognizing that movements, feelings, and decisions are impersonal causal interactions.',
    questionK: 'តើមាន «ខ្ញុំ» មួយនៅពីក្រោយ ឬគ្រាន់តែជាដំណើរការធម្មជាតិនៃរូបនិងចិត្ត?',
    questionE: 'Is there an autonomous "I" suffering, or merely impersonal phenomena rolling on according to causes?'
  }
]
</script>
