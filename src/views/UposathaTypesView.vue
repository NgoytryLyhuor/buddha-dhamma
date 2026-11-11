<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៨៨ — ឧបោសថ ៣ ប្រភេទ', 'GATHA 88 — 3 TYPES OF UPOSATHA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ឧបោសថ ៣ ប្រភេទ ៖ គោបាលក និគ្គន្ថ & អរិយឧបោសថ', 'The 3 Kinds of Uposatha Observance (AN 3.70)') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ឧបោសថសីល គឺជាក្បួនហាត់ពត់លត់ដំកាយវាចាចិត្តដ៏ឧត្តុង្គឧត្តមរបស់ពុទ្ធបរិស័ទក្នុងថ្ងៃសីល (៨ កើត ៨ រោច ១៥ កើត និង ១៤ ឬ ១៥ រោច)។ ក៏ប៉ុន្តែ នៅក្នុងឧបោសថសូត្រ ឬវិសាខាសូត្រ (AN 3.70) ព្រះសម្មាសម្ពុទ្ធទ្រង់បានត្រាស់សម្តែងប្រាប់នាងវិសាខាថា ការរក្សាឧបោសថរបស់មនុស្សលោកមាន ៣ ប្រភេទខុសៗគ្នា គឺខ្លះរក្សាដូចជាអ្នកគង្វាលគោ ខ្លះរក្សាដូចជាពួកនិគ្គន្ថអ្នកបួសក្រៅពុទ្ធសាសនា និងខ្លះរក្សាជាអរិយឧបោសថ។ មានតែអរិយឧបោសថតែមួយគត់ ដែលជាការលាងជម្រះចិត្តឱ្យស្អាតបរិសុទ្ធដោយពិតប្រាកដ និងមានអានិសង្សធំធេងឥតគណនា។', 'Uposatha observance is a sacred day of spiritual renewal and moral refinement observed on the quarters of the moon. In the celebrated Visākhā Uposatha Sutta (AN 3.70), the Buddha explained to the noble lay disciple Visākhā that people undertake the observance in three distinct ways: like a cowherd (Gopālaka), like a Jain ascetic (Nigaṇṭha), and like a Noble Disciple (Ariya Uposatha). Only the Ariya Uposatha—which purifies the stained mind through systematic recollective meditation—yields immense fruit and glorious spiritual radiance.') }}
    </p>

    <!-- Pali Gatha Box from Visakha Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«តយោ ខោ វិសាខេ ឧបោសថា។ កតមេ តយោ? គោបាលកឧបោសថោ, និគ្គន្ថឧបោសថោ, អរិយឧបោសថោ។»', '"There are, Visākhā, three kinds of Uposatha. Which three? The Cowherd’s Uposatha, the Nigaṇṭha’s Uposatha, and the Noble Disciple’s Uposatha." — Aṅguttara Nikāya 3.70') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— វិសាខាសូត្រ តិកនិបាត អង្គុត្តរនិកាយ', '— Visākhā Sutta, Tikanipāta, Aṅguttara Nikāya') }}
      </p>
    </div>

    <!-- The 3 Types Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🕯️</span>
        <span>{{ t('ការប្រៀបធៀបឧបោសថទាំង ៣ ប្រភេទ', 'The 3 Distinct Uposathas Compared') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="u in uposathas"
          :key="u.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
          :class="u.highlight ? 'ring-2 ring-amber-500/50' : ''"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <div>
                <span class="text-xs font-mono font-bold px-2 py-0.5 rounded-full" :class="u.badgeClass">
                  {{ u.badge }}
                </span>
                <h4 class="font-bold text-base mt-2" :style="{ color: 'var(--ink)' }">{{ t(u.titleKm, u.titleEn) }}</h4>
                <p class="text-[11px] font-mono text-stone-500">{{ u.pali }}</p>
              </div>
              <span class="text-3xl">{{ u.icon }}</span>
            </div>

            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(u.descKm, u.descEn) }}
            </p>
          </div>

          <!-- Outcome / Quality -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2.5 rounded-lg" :class="u.resultClass">
              <span class="font-bold block mb-0.5">{{ t(u.resultLabelKm, u.resultLabelEn) }}</span>
              <span class="text-stone-600 dark:text-stone-400">{{ t(u.resultKm, u.resultEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- The 5 Purifications of Ariya Uposatha -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>✨</span>
        <span>{{ t('អនុស្សតិ ៥ ប្រការក្នុងការជម្រះចិត្តនៃអរិយឧបោសថ', 'The 5 Contemplations That Cleanse the Mind in Ariya Uposatha') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រះពុទ្ធទ្រង់ប្រៀបធៀបថា ដូចក្បាលកខ្វក់ត្រូវលាងដោយសាប៊ូ ដូចកាយកខ្វក់ត្រូវលាងដោយទឹកក្តៅ យ៉ាងណាមិញ ចិត្តដែលសៅហ្មងដោយកិលេស ត្រូវតែលាងជម្រះដោយអនុស្សតិធម៌ទាំង ៥ នេះ ៖', 'Just as a soiled head is cleansed with cleansing paste, and a stained body is cleansed with warm water, so the defiled mind is washed clean through these five noble meditative recollections:') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mt-4 text-xs">
        <div v-for="c in cleansings" :key="c.id" class="p-3 rounded-lg border bg-stone-500/5 text-center" :style="{ borderColor: 'var(--border)' }">
          <span class="text-2xl block mb-1">{{ c.icon }}</span>
          <span class="font-bold text-amber-700 dark:text-amber-300 block mb-0.5">{{ t(c.titleKm, c.titleEn) }}</span>
          <p class="text-stone-600 dark:text-stone-400 text-[11px] leading-tight">{{ t(c.descKm, c.descEn) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const uposathas = [
  {
    id: 1,
    badge: 'អានិសង្សទាប',
    badgeClass: 'bg-rose-500/20 text-rose-700 dark:text-rose-300',
    titleKm: 'គោបាលកឧបោសថ (ឧបោសថដូចអ្នកឃ្វាលគោ)',
    titleEn: 'Gopālaka (The Cowherd\'s Uposatha)',
    pali: 'Gopālaka Uposatha',
    icon: '🐂',
    descKm: 'ដូចអ្នកឃ្វាលគោល្ងាចឡើងប្រគល់គោឱ្យម្ចាស់ គិតតែពីស្អែករកស្មៅឯណាឱ្យស៊ី។ អ្នករក្សាសីលប្រភេទនេះ ចូលវត្តរក្សាសីលតែរូបកាយ តែចិត្តគិតតែពីម្ហូបអាហារ បង្អែមចង្អាប និងការងាររកស៊ីផ្ទះសម្បែង។',
    descEn: 'Like a hired cowherd who returns the cows at dusk and thinks only of tomorrow\'s pastures, the practitioner guards bodily form while their mind is absorbed in food, home affairs, and worldly desires.',
    resultLabelKm: '⚠️ ផលវិបាក ៖',
    resultLabelEn: '⚠️ Outcome:',
    resultKm: 'គ្មានផលធំ គ្មានអានិសង្សរុងរឿងឡើយ ព្រោះកិលេសមិនត្រូវបានជម្រះបន្តិចសោះ។',
    resultEn: 'Yields little fruit, as the defilements of mind remain completely unpurified.',
    resultClass: 'bg-rose-500/5 border border-rose-500/20 text-rose-700 dark:text-rose-300',
    highlight: false,
  },
  {
    id: 2,
    badge: 'សំបកក្រៅ',
    badgeClass: 'bg-amber-500/20 text-amber-700 dark:text-amber-300',
    titleKm: 'និគ្គន្ថឧបោសថ (ឧបោសថពួកនិគ្គន្ថ)',
    titleEn: 'Nigaṇṭha (The Sectarian\'s Uposatha)',
    pali: 'Nigaṇṭha Uposatha',
    icon: '🎭',
    descKm: 'ឧបោសថរបស់ពួកតបៈក្រៅពុទ្ធសាសនា ដែលតាំងចិត្តថាមិនបៀតបៀនសត្វក្នុងចម្ងាយ ១០០ យោជន៍ តែទុកឱ្យសត្វក្រៅពីនោះបៀតបៀនបាន។ បង្គាប់ឱ្យស្រាតសម្លៀកបំពាក់ តែចិត្តនៅពោរពេញដោយការប្រកាន់ខ្លួន។',
    descEn: 'The outward observance practiced by Jain sectarians: imposing artificial geographical limits on harmlessness while mind remains entangled in conceit, sectarian bias, and false views.',
    resultLabelKm: '⚠️ ផលវិបាក ៖',
    resultLabelEn: '⚠️ Outcome:',
    resultKm: 'ជាការក្លែងបន្លំ និងជាសីលបាតផ្កាប់មុខ មិនអាចរំដោះចិត្តចេញពីទុក្ខវដ្តសង្សារបានឡើយ។',
    resultEn: 'A mere superficial performance that fails to deliver true inner liberation.',
    resultClass: 'bg-amber-500/5 border border-amber-500/20 text-amber-700 dark:text-amber-300',
    highlight: false,
  },
  {
    id: 3,
    badge: 'កំពូលអានិសង្ស',
    badgeClass: 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300',
    titleKm: 'អរិយឧបោសថ (ឧបោសថនៃព្រះអរិយៈ)',
    titleEn: 'Ariya Uposatha (The Noble Uposatha)',
    pali: 'Ariya Uposatha',
    icon: '🪷',
    descKm: 'ការរក្សាសីល ៨ យ៉ាងខ្ជាប់ខ្ជួន ព្រមទាំងយកពេលទាំងថ្ងៃទាំងយប់មកជម្រះចិត្តឱ្យស្អាតបរិសុទ្ធ ចាករាគៈ ទោសៈ មោហៈ ដោយការចម្រើនអនុស្សតិធម៌ទាំង ៥ ប្រការ។',
    descEn: 'Undertaking the 8 precepts while dedicating day and night to cleansing the mind of greed, hatred, and delusion through the five sublime recollective meditations.',
    resultLabelKm: '🌟 មហាអានិសង្ស ៖',
    resultLabelEn: '🌟 Supreme Fruit:',
    resultKm: 'មានផលរាប់មិនអស់ បើប្រៀបធៀបនឹងស្តេចចក្រពត្តិដែលគ្រងផែនដី ក៏មិនស្មើនឹងមួយភាគដប់ប្រាំមួយឡើយ។',
    resultEn: 'Inestimable merit far surpassing the sovereignty of a universal wheel-turning monarch.',
    resultClass: 'bg-emerald-500/5 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300',
    highlight: true,
  },
]

const cleansings = [
  { id: 1, icon: '☸️', titleKm: 'ពុទ្ធានុស្សតិ', titleEn: 'Buddhānussati', descKm: 'រឭកគុណព្រះពុទ្ធ ចិត្តជ្រះថ្លាស្អាតដូចកែវ។', descEn: 'Recollecting the Buddha’s virtues to purify the mind.' },
  { id: 2, icon: '📜', titleKm: 'ធម្មានុស្សតិ', titleEn: 'Dhammānussati', descKm: 'រឭកគុណព្រះធម៌ដែលនាំឱ្យចេញផុតទុក្ខ។', descEn: 'Recollecting the Dhamma well-expounded and visible here-now.' },
  { id: 3, icon: '🙏', titleKm: 'សង្ឃានុស្សតិ', titleEn: 'Saṅghānussati', descKm: 'រឭកគុណព្រះសង្ឃជាស្រែបុណ្យនៃលោក។', descEn: 'Recollecting the Noble Saṅgha as the unexcelled field of merit.' },
  { id: 4, icon: '🛡️', titleKm: 'សីលានុស្សតិ', titleEn: 'Sīlānussati', descKm: 'ពិចារណាសីលរបស់ខ្លួនដែលមិនដាច់ មិនធ្លុះធ្លាយ។', descEn: 'Recollecting one’s own pristine, unbroken virtue.' },
  { id: 5, icon: '⭐', titleKm: 'ទេវតានុស្សតិ', titleEn: 'Devatānussati', descKm: 'រឭកគុណធម៌ សទ្ធា សីល បញ្ញា ដូចទេវតា។', descEn: 'Recollecting the godly virtues: faith, virtue, learning, and wisdom.' },
]
</script>
