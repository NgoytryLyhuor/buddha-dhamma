<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🕊️ {{ t('ឥតិវុត្តក ទុកនិបាត · និព្វានធាតុសូត្រ (Itivuttaka 44)', 'Itivuttaka 44 · Dve Nibbānadhātuyo Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('ព្រះនិព្វាន ២ យ៉ាង (សឧបាទិសេស & អនុបាទិសេស)', 'The Two Nibbāna Realities: With & Without Residue') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ព្រះសម្មាសម្ពុទ្ធទ្រង់សម្ដែងថា ព្រះនិព្វានធាតុមាន ២ ប្រការ៖ ទី១ គឺ «សឧបាទិសេសនិព្វាន» (ព្រះនិព្វានពេលអស់កិលេស តែខន្ធ ៥ នៅរស់ ដូចព្រះពុទ្ធក្រោយត្រាស់ដឹង); និងទី២ គឺ «អនុបាទិសេសនិព្វាន» (ព្រះនិព្វានពេលរលត់ខន្ធទាំងស្រុង គ្មានការកើតក្នុងភពណាទៀត ពេលចូលបរិនិព្វាន)។ ការយល់ដឹងនេះជួយដោះស្រាយការយល់ច្រឡំថា ព្រះនិព្វានជាឋានសួគ៌អមតៈ ឬជាការសូន្យបាត់។',
            'The Buddha revealed that Nibbāna is experienced in two stages: Saupādisesa-nibbāna (extinction of all defilements while the physical aggregates remain alive); and Anupādisesa-nibbāna (the total cessation of all conditioned aggregates at Parinibbāna). Comprehending both dispels the two extremes of eternalism and nihilism.'
          ) }}
        </p>
      </div>
    </section>

    <!-- Side-by-Side Comparison -->
    <section class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Saupadisesa -->
        <div class="card-paper p-6 space-y-4 border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-3">
            <span class="text-3xl p-3 rounded-2xl" :style="{ background: 'var(--bg-card-2)' }">🌸</span>
            <div>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-950/40">
                ដំណាក់កាលទី ១ (នៅរស់)
              </span>
              <h3 class="font-bold text-lg font-serif" :style="{ color: 'var(--ink)' }">
                {{ t('សឧបាទិសេសនិព្វាន (កិលេសបរិនិព្វាន)', 'Saupādisesa-Nibbāna (With Residue)') }}
              </h3>
            </div>
          </div>

          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(
              'សភាពដែលព្រះអរហន្តបានរំលត់អស់នូវរាគៈ ទោសៈ និងមោហៈទាំងស្រុង ចិត្តស្អាតបរិសុទ្ធផុតទុក្ខផ្លូវចិត្ត ១០០% ប៉ុន្តែរូបកាយ និងខន្ធ ៥ ដែលជាផលនៃកម្មចាស់នៅមានជីវិតនៅឡើយ។',
              'The living Arahant who has eradicated every trace of greed, hatred, and delusion. Mental suffering is permanently extinguished, though biological aggregates produced by past kamma remain active.'
            ) }}
          </p>

          <div class="p-4 rounded-2xl border space-y-2 text-xs" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold text-emerald-600">📌 {{ t('លក្ខណៈជាក់ស្ដែង៖', 'Living Reality:') }}</h4>
            <ul class="list-disc list-inside space-y-1" :style="{ color: 'var(--ink-soft)' }">
              <li>{{ t('ព្រះអរហន្តនៅតែឃ្លានបាយ ស្រេកទឹក ដឹងត្រជាក់ ក្ដៅ និងមានជំងឺកាយ', 'Still experiences physical hunger, thirst, heat, cold, and bodily illnesses.') }}</li>
              <li>{{ t('ឧទាហរណ៍៖ ព្រះពុទ្ធមានជំងឺឈឺខ្នង ឬជំងឺកាយ តែព្រះទ័យរបស់ទ្រង់គ្មានការថប់បារម្ភសោះឡើយ', 'The Buddha experienced bodily back pain, but his mind remained entirely untouched by distress.') }}</li>
              <li>{{ t('ចិត្តមានតែសេចក្ដីមេត្តា ករុណា និងបញ្ញាពេញលេញ ដើរប្រោសសត្វលោក', 'Dwells in boundless compassion and wisdom, actively teaching beings.') }}</li>
            </ul>
          </div>
        </div>

        <!-- Anupadisesa -->
        <div class="card-paper p-6 space-y-4 border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <div class="flex items-center gap-3">
            <span class="text-3xl p-3 rounded-2xl" :style="{ background: 'var(--bg-card-2)' }">✨</span>
            <div>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold text-violet-600 bg-violet-100 dark:bg-violet-950/40">
                ដំណាក់កាលទី ២ (បរិនិព្វាន)
              </span>
              <h3 class="font-bold text-lg font-serif" :style="{ color: 'var(--ink)' }">
                {{ t('អនុបាទិសេសនិព្វាន (ខន្ធបរិនិព្វាន)', 'Anupādisesa-Nibbāna (Without Residue)') }}
              </h3>
            </div>
          </div>

          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(
              'សភាពដែលព្រះអរហន្តអស់អាយុសង្ខារ ហើយចូលបរិនិព្វាន។ រូបកាយ និងខន្ធ ៥ ទាំងឡាយបានរលត់ទៅវិញទាំងអស់ គ្មានការកើតឡើងនៃភពថ្មីទៀតឡើយ ប្រៀបដូចអណ្ដាតភ្លើងរលត់ព្រោះអស់ប្រេង។',
              'The final Parinibbāna at the end of the Arahant’s lifespan. All five physical and mental aggregates cease without remainder. Rebirth in any realm is forever extinguished, like a flame going out when fuel is exhausted.'
            ) }}
          </p>

          <div class="p-4 rounded-2xl border space-y-2 text-xs" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold text-violet-600">📌 {{ t('លក្ខណៈជាក់ស្ដែង៖', 'Ultimate Reality:') }}</h4>
            <ul class="list-disc list-inside space-y-1" :style="{ color: 'var(--ink-soft)' }">
              <li>{{ t('គ្មានទុក្ខនៃការកើត ចាស់ ឈឺ ស្លាប់ ក្នុងភពណាទៀតឡើយ (ផុតពីវដ្តសង្សារ)', 'Zero rebirth, aging, sickness, or death across any realm forever.') }}</li>
              <li>{{ t('មិនមែនជាការសូន្យបាត់ឡើយ តែជាការរំលត់នៃសេចក្ដីទុក្ខនិងបច្ច័យសង្ខារ', 'Not annihilation of a self, but the cessation of conditioned suffering.') }}</li>
              <li>{{ t('ជាសន្តិភាពដ៏បរិសុទ្ធ អមតៈ (អសង្ខតធម៌) មិនប្រែប្រួលទៀតឡើយ', 'The unconditioned, changeless deathless peace beyond time and space.') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- The Fire Simile (ឧបមាអណ្ដាតភ្លើង) -->
    <section class="card-paper p-6 sm:p-8 space-y-3 border text-center max-w-2xl mx-auto"
             :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
      <span class="text-3xl">🔥</span>
      <h3 class="text-lg font-bold font-serif" :style="{ color: 'var(--ink)' }">
        {{ t('ឧបមាអណ្ដាតភ្លើងក្នុងគម្ពីរមជ្ឈិមនិកាយ', 'The Simile of the Extinguished Flame (MN 72)') }}
      </h3>
      <p class="text-xs sm:text-sm leading-relaxed italic font-serif" :style="{ color: 'var(--ink-muted)' }">
        {{ t(
          '« ព្រះពុទ្ធសួរវច្ឆគោត្តតាបសថា៖ អណ្ដាតភ្លើងដែលកំពុងឆេះនៅពីមុខអ្នក កាលណាអស់ប្រេង និងអស់ប្រឆេះហើយ រលត់ទៅ តើអណ្ដាតភ្លើងនោះរត់ទៅទិសខាងកើត ខាងលិច ខាងជើង ឬខាងត្បូង? វច្ឆគោត្តឆ្លើយថា៖ មិនអាចនិយាយដូច្នោះបានទេ ព្រោះកាលណាអស់ហេតុបច្ច័យ ភ្លើងនោះគ្រាន់តែរលត់ស្ងប់ទៅវិញប៉ុណ្ណោះ។ យ៉ាងណាមិញ ព្រះអរហន្តដែលចូលបរិនិព្វាន ក៏រលត់ទុក្ខយ៉ាងដូច្នោះដែរ ព្រោះអស់តណ្ហាដែលជាប្រេងចាក់ដុត។ »',
          '"The Buddha asked Vacchagotta: When a fire burning before you goes out because fuel and wick are exhausted, in which direction did the fire go—east, west, north, or south? Vacchagotta replied: It cannot be said to go anywhere; it is simply extinguished because the cause is spent. Just so, the Arahant after Parinibbāna is liberated beyond all designations of existence or non-existence, because the fuel of craving is entirely extinguished."'
        ) }}
      </p>
    </section>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
</script>
