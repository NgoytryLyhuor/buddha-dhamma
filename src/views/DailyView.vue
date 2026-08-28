<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('ធម៌បន្ថែម ១៦ — បដិបត្តិប្រចាំថ្ងៃ', 'EXTRA 16 — DAILY PRACTICE') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('បដិបត្តិប្រចាំថ្ងៃ', 'A Simple Daily Practice') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ព្រះធម៌ មិនមែនសម្រាប់ទុកតែក្នុងវត្ត ឬសម្រាប់ត្រិះរិះតែប៉ុណ្ណោះ ។ អ្នកផ្ទះអាចអនុវត្តបាន រាល់ថ្ងៃ ក្នុងជីវិតប្រចាំថ្ងៃ ដោយចាប់ផ្តើមពីសីល ទាន ផ្សាំង និងការរំពឹងគិតបន្តិចៗ ។', 'The Dhamma is not meant to stay only in the temple or only for contemplation. Lay people can practise every day in daily life, starting from sīla, dāna, restraint, and a little reflection.') }}
    </p>

    <!-- early morning -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('ពេលព្រឹក', 'MORNING') }}</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ពេលភ្ញាក់ពីដេក', 'On Waking') }}</h3>
      <ul class="tick-list mt-4">
        <li>{{ t('ភ្ញាក់ពីដេក តាំងចិត្តថា ថ្ងៃនេះនឹងប្រព្រឹត្តល្អ កាន់សីល ធ្វើបុណ្យ។', 'On waking, resolve that today I will act well, keep the precepts, and make merit.') }}</li>
        <li>{{ t('រំលឹកដល់ព្រះរតនត្រ័យ ដោយគោរពវន្ទា បីដង។', 'Recall the Three Jewels with a respectful bow three times.') }}</li>
        <li>{{ t('បាច់ទឹកព្រឹក ឬឲ្យទានបាយ ក្នុងបំណងបដិបត្តិត្រឹមត្រូវ។', 'Offer morning rice or water, dedicating it to right practice.') }}</li>
      </ul>
    </div>

    <!-- five precepts -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">PAÑCASĪLA</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('សីល ៥ រាល់ថ្ងៃ', 'The Five Precepts Daily') }}</h3>
      <ul class="tick-list mt-4">
        <li v-for="(s, i) in sila" :key="s.en">
          <strong :style="{ color: 'var(--ink)' }">{{ khNum(i + 1) }}. {{ t(s.km, s.en) }}</strong>
        </li>
      </ul>
      <div class="verse-box p-4 mt-5">
        <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">
          {{ t('ការកាន់សីល គឺការការពារខ្លួនឯង មិនឲ្យទៅជាអ្នកនាំទុក្ខដល់អ្នកដទៃ។', 'Keeping the precepts is protecting oneself from becoming a source of suffering for others.') }}
        </p>
      </div>
    </div>

    <!-- throughout the day -->
    <div class="grid md:grid-cols-2 gap-6 mt-8">
      <div class="card-paper p-6">
        <p class="chapter-label">{{ t('ពេលថ្ងៃ', 'THROUGH THE DAY') }}</p>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t('កាយ វាចា ចិត្ត', 'Body, Speech, Mind') }}</h3>
        <ul class="tick-list mt-4 text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          <li>{{ t('និយាយពាក្យពិត ពាក្យផ្អែម ពាក្យមានប្រយោជន៍។', 'Speak truth, kindly, and to the point.') }}</li>
          <li>{{ t('ប្រកបការងារដោយសុច្ចរិត ឥតបៀតបៀនអ្នកដទៃ។', 'Work honestly, without harming others.') }}</li>
          <li>{{ t('ដឹងខ្លួនជានិច្ច ក្នុងការធ្វើ ក្នុងការនិយាយ។', 'Stay mindful in what one does and says.') }}</li>
        </ul>
      </div>
      <div class="card-paper p-6">
        <p class="chapter-label">{{ t('ពេលល្ងាច', 'EVENING') }}</p>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t('មុនចូលដេក', 'Before Sleep') }}</h3>
        <ul class="tick-list mt-4 text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          <li>{{ t('រំលឹកពិចារណា នូវកុសលដែលបានធ្វើក្នុងថ្ងៃនេះ។', 'Reflect on the good deeds done during the day.') }}</li>
          <li>{{ t('ទទួលស្គាល់កំហុស តាំងចិត្តកែតម្រង់ថ្ងៃស្អែក។', 'Acknowledge any faults and resolve to correct them.') }}</li>
          <li>{{ t('សាងសង្ឃដល់ព្រះត្រៃរតនៈ ហើយចូលដេកដោយចិត្តស្ងប់។', 'Sit with the Three Jewels and fall asleep with a calm heart.') }}</li>
        </ul>
      </div>
    </div>

    <!-- sabbath -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">UPOSATHA — ថ្ងៃសីល</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ថ្ងៃសីល និងពិធីបុណ្យ', 'Observance Days and Festivals') }}</h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ថ្ងៃសីល (ព្រះធំ) ៤ ថ្ងៃ ក្នុងមួយខែ ដល់ថ្ងៃទាំងនោះ គួរកាន់សីល ៨ ទៅវត្ត ស្តាប់ធម៌។ មួយឆ្នាំ មានថ្ងៃបុណ្យធំៗ ដូចជា មាឃបូជា វិសាខបូជា អាសាឡ្ហបូជា ព្រះវស្សា កឋិនទាន។', 'There are four observance days (uposatha) each month; on these one should keep the eight precepts, go to the temple, and listen to the Dhamma. Each year there are great festivals: Māgha Pūjā, Vesākha Pūjā, Āsāḷha Pūjā, the rainy retreat (Vassa), and the Kaṭhina robe offering.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  return String(n).split('').map(d => khDigits[Number(d)]).join('')
}

const sila = [
  { km: 'បរិវេណពីការសម្លាប់សត្វ', en: 'Not to take life' },
  { km: 'បរិវេណពីការលួចទ្រព្យអ្នកដទៃ', en: 'Not to take what is not given' },
  { km: 'បរិវេណពីការប្រព្រឹត្តខុសក្នុងកាម', en: 'Not to commit sexual misconduct' },
  { km: 'បរិវេណពីការនិយាយកុហក', en: 'Not to speak falsely' },
  { km: 'បរិវេណពីការផឹកស្រា គ្រឿងញៀន ដែលធ្វើឲ្យវង្វេងស្មារតី', en: 'Not to take intoxicants that cloud the mind' },
]
</script>
