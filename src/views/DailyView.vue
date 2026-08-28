<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('ធម៌បន្ថែម ១៦ — បដិបត្តិប្រចាំថ្ងៃ', 'EXTRA 16 — DAILY PRACTICE') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('បដិបត្តិប្រចាំថ្ងៃ', 'A Simple Daily Practice') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ព្រះធម៌ មិនមែនសម្រាប់ទុកតែក្នុងវត្ត ឬសម្រាប់ត្រិះរិះតែប៉ុណ្ណោះ ។ អ្នកផ្ទះអាចអនុវត្តបាន រាល់ថ្ងៃ ក្នុងជីវិតប្រចាំថ្ងៃ ដោយចាប់ផ្តើមពីការតាំងចិត្ត កាន់សីល ៥ ធ្វើទាន និងពិចារណាខ្លួន នៅពេលព្រឹក ពេលថ្ងៃ និងពេលល្ងាច ។', 'The Dhamma is not meant to stay only in the temple, nor only for quiet thought. Lay people can practise every single day in ordinary life — by making a resolve, keeping the five precepts, giving, and reflecting on oneself in the morning, during the day, and in the evening.') }}
    </p>

    <!-- early morning -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('ពេលព្រឹក', 'MORNING') }}</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ពេលភ្ញាក់ពីដេក', 'On Waking') }}</h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ពេលព្រឹក ជាពេលដ៏សំខាន់ ព្រោះការតាំងចិត្តនៅពេលព្រឹក នឹងកំណត់ពេញមួយថ្ងៃ ។ ធ្វើបីយ៉ាងនេះ រៀងរាល់ព្រឹក ។', 'Morning is a very important time, because the resolve you make then shapes the whole day. Do these three things each morning.') }}
      </p>
      <ul class="tick-list mt-4">
        <li>
          <strong :style="{ color: 'var(--ink)' }">{{ t('តាំងចិត្តល្អ', 'Make a good resolve') }}</strong>
          <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t('ភ្ញាក់ពីដេក តាំងចិត្តថា ថ្ងៃនេះនឹងប្រព្រឹត្តល្អ កាន់សីល ធ្វើបុណ្យ នឹកដល់ប្រយោជន៍អ្នកដទៃ ។', 'On waking, resolve: today I will act well, keep the precepts, make merit, and think of the welfare of others.') }}
          </p>
        </li>
        <li>
          <strong :style="{ color: 'var(--ink)' }">{{ t('ថ្វាយបង្គំព្រះរតនត្រ័យ', 'Honour the Three Jewels') }}</strong>
          <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t('រំលឹកដល់ព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ ដោយគោរពវន្ទា បីដង ដើម្បីឲ្យចិត្តជ្រះថ្លា កើតសទ្ធា ។', 'Recall the Buddha, the Dhamma, and the Saṅgha with a respectful bow three times, so the mind becomes clear and faith arises.') }}
          </p>
        </li>
        <li>
          <strong :style="{ color: 'var(--ink)' }">{{ t('បាច់ទឹក ឬឲ្យទានបាយ', 'Offer water or rice') }}</strong>
          <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t('បាច់ទឹកព្រឹក ឬឲ្យទានបាយ ក្នុងបំណងបដិបត្តិត្រឹមត្រូវ និងសង្ឃដល់បុណ្យដល់អ្នកមានគុណ និងអ្នកចែកឋាន ។', 'Offer morning water or rice, dedicating it to right practice and sharing the merit with benefactors and the departed.') }}
          </p>
        </li>
      </ul>
    </div>

    <!-- five precepts, detailed -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">PAÑCASĪLA — សីល ៥</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('សីល ៥ ជាគ្រឹះនៃការកាន់រាល់ថ្ងៃ', 'The Five Precepts, the Daily Foundation') }}</h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('សីល ៥ ជាគ្រឹះរបស់អ្នកផ្ទះ ជាមូលដ្ឋាននៃសេចក្តីសុខ ការពារខ្លួន កុំឲ្យទៅជាអ្នកនាំទុក្ខដល់អ្នកដទៃ ។ សីលនីមួយៗ គ្រាន់តែបានដឹងច្បាស់ ទើបកាន់បានរឹងមាំ ។', 'The five precepts are the foundation of lay life and of peace. They protect you from becoming a source of suffering for others. When you clearly understand each precept, you can keep it firmly.') }}
      </p>
      <div v-for="(s, i) in sila" :key="s.en" class="mt-4 pb-4" :style="{ borderBottom: i < sila.length - 1 ? '1px solid var(--border)' : 'none' }">
        <div class="flex items-baseline gap-3">
          <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
          <strong :style="{ color: 'var(--ink)' }">{{ t(s.km, s.en) }}</strong>
        </div>
        <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(s.kmBody, s.enBody) }}</p>
      </div>
      <div class="verse-box p-4 mt-5">
        <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">
          {{ t('ការកាន់សីល គឺការការពារខ្លួនឯង មិនឲ្យទៅជាអ្នកនាំទុក្ខដល់អ្នកដទៃ និងជាគ្រឹះនៃសមាធិ និងបញ្ញា ។', 'Keeping the precepts protects you from becoming a source of suffering for others; they are the foundation of concentration and wisdom.') }}
        </p>
      </div>
    </div>

    <!-- throughout the day -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('ពេលថ្ងៃ', 'THROUGH THE DAY') }}</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ការអនុវត្តក្នុងការងារ និងការរស់នៅ', 'Practice at Work and in Daily Life') }}</h3>
      <div class="grid md:grid-cols-3 gap-5 mt-5">
        <div class="rounded-sm p-4" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <p class="font-display" :style="{ color: 'var(--accent)' }">{{ t('កាយ', 'Body') }}</p>
          <ul class="tick-list mt-3 text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            <li>{{ t('ប្រកបការងារដោយសុច្ចរិត ឥតបៀតបៀនអ្នកដទៃ ។', 'Work honestly and harm nobody.') }}</li>
            <li>{{ t('កាន់សីល ឥតសម្លាប់ ឥតលួច ឥតប្រព្រឹត្តខុសក្នុងកាម ។', 'Keep the precepts — no killing, stealing, or misconduct.') }}</li>
          </ul>
        </div>
        <div class="rounded-sm p-4" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <p class="font-display" :style="{ color: 'var(--accent)' }">{{ t('វាចា', 'Speech') }}</p>
          <ul class="tick-list mt-3 text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            <li>{{ t('និយាយពាក្យពិត ពាក្យផ្អែម ពាក្យមានប្រយោជន៍ ។', 'Speak truth, kindly, and to the point.') }}</li>
            <li>{{ t('កុំនិយាយកុហក ញុះញង់ ជេរ និយាយឥតប្រយោជន៍ ។', 'Avoid lying, slander, harsh words, and idle talk.') }}</li>
          </ul>
        </div>
        <div class="rounded-sm p-4" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <p class="font-display" :style="{ color: 'var(--accent)' }">{{ t('ចិត្ត', 'Mind') }}</p>
          <ul class="tick-list mt-3 text-sm leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            <li>{{ t('ដឹងខ្លួនជានិច្ច ក្នុងការធ្វើ ក្នុងការនិយាយ ។', 'Stay mindful in what you do and say.') }}</li>
            <li>{{ t('ដាំមេត្តា ក្នុងចិត្ត ចំពោះអ្នកជិតខាង ។', 'Cultivate loving-kindness toward those around you.') }}</li>
          </ul>
        </div>
      </div>
      <div class="verse-box p-4 mt-5">
        <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">
          {{ t('បដិបត្តិល្អ ឥតបណ្តោយពេល; កាលអ្នកដឹងខ្លួន គឺអ្នកកំពុងបដិបត្តិហើយ ។', 'Practise well without delay; when you are mindful, you are already practising.') }}
        </p>
      </div>
    </div>

    <!-- evening -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('ពេលល្ងាច', 'EVENING') }}</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('មុនចូលដេក', 'Before Sleep') }}</h3>
      <ul class="tick-list mt-4">
        <li>
          <strong :style="{ color: 'var(--ink)' }">{{ t('ពិចារណាកុសល', 'Reflect on the good') }}</strong>
          <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t('រំលឹកពិចារណា នូវកុសលដែលបានធ្វើក្នុងថ្ងៃនេះ ដើម្បីឲ្យចិត្តត្រេកអរ ហើយសង្ឃដល់បុណ្យ ។', 'Recall the good deeds of the day, so the mind rejoices, and dedicate the merit.') }}
          </p>
        </li>
        <li>
          <strong :style="{ color: 'var(--ink)' }">{{ t('ទទួលស្គាល់កំហុស', 'Acknowledge faults') }}</strong>
          <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t('បើមានកំហុស ទទួលស្គាល់ ហើយតាំងចិត្តកែតម្រង់ នៅថ្ងៃស្អែក គឺជាបញ្ញានៃអ្នកបដិបត្តិ ។', 'If there were faults, acknowledge them and resolve to correct them tomorrow — that is the wisdom of one who practises.') }}
          </p>
        </li>
        <li>
          <strong :style="{ color: 'var(--ink)' }">{{ t('ថ្វាយបង្គំ ហើយចូលដេក', 'Pay homage, then rest') }}</strong>
          <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t('រំលឹកដល់ព្រះត្រៃរតនៈ ហើយចូលដេកដោយចិត្តស្ងប់ ដោយមេត្តា ដោយសេចក្តីល្អ ។', 'Recall the Three Jewels and fall asleep with a calm heart, with kindness and goodness.') }}
          </p>
        </li>
      </ul>
    </div>

    <!-- eight precepts -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">AṬṬHASĪLA — អដ្ឋសីល</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('សីល ៨ នៅថ្ងៃសីល', 'The Eight Precepts on Observance Days') }}</h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ថ្ងៃសីល (ថ្ងៃសីល ៤ ថ្ងៃ ក្នុងមួយខែ) អ្នកកាន់សីល ៨ បាន ទៅវត្ត ស្តាប់ធម៌ បដិបត្តិឲ្យធ្ងន់ជាងធម្មតា ។ សីល ៨ គឺ សីល ៥ បន្ថែម ៣ ទៀត ។', 'On uposatha (observance) days, four times a month, those who can keep the eight precepts go to the temple, hear the Dhamma, and practise more strictly than usual. The eight precepts are the five, plus three more.') }}
      </p>
      <ul class="tick-list mt-4">
        <li v-for="(e, i) in athasila" :key="e.en">
          <strong :style="{ color: 'var(--ink)' }">{{ khNum(i + 1) }}. {{ t(e.km, e.en) }}</strong>
          <span v-if="e.kmBody" class="text-sm" :style="{ color: 'var(--ink-muted)' }"> — {{ t(e.kmBody, e.enBody) }}</span>
        </li>
      </ul>
      <div class="verse-box p-4 mt-5">
        <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">
          {{ t('ការកាន់សីល ៨ ជួយឲ្យចិត្តស្ងប់ កៀកនឹងបដិបត្តិរបស់ព្រះសង្ឃ ក្នុងថ្ងៃសីល ។', 'Keeping the eight precepts calms the mind and brings lay people close to the practice of the monks on observance days.') }}
        </p>
      </div>
    </div>

    <!-- festivals -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('ពិធីបុណ្យរាល់ឆ្នាំ', 'ANNUAL FESTIVALS') }}</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ថ្ងៃបុណ្យសំខាន់ៗ', 'The Great Festivals of the Year') }}</h3>
      <ul class="tick-list mt-4">
        <li v-for="f in festivals" :key="f.en">
          <strong :style="{ color: 'var(--ink)' }">{{ t(f.km, f.en) }}</strong>
          <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(f.kmBody, f.enBody) }}</p>
        </li>
      </ul>
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
  { km: 'មិនសម្លាប់សត្វ', en: 'Not to take life', kmBody: 'ការកាន់សីល ១ ធ្វើឲ្យចិត្តមានមេត្តា ករុណា នឹងសត្វលោកទាំងពួង ។', enBody: 'Refraining from killing all creatures cultivates kindness and compassion.' },
  { km: 'មិនលួចទ្រព្យអ្នកដទៃ', en: 'Not to take what is not given', kmBody: 'ការមិនលួច ធ្វើឲ្យជីវិតមានសុវត្ថិភាព និងសេចក្តីទុកចិត្ត ។', enBody: 'Refraining from stealing brings security and trust in life.' },
  { km: 'មិនប្រព្រឹត្តខុសក្នុងកាម', en: 'Not to commit sexual misconduct', kmBody: 'ការមានសីលក្នុងកាម រក្សាសុខ និងសេចក្តីសុខសាន្តរបស់គ្រួសារ ។', enBody: 'Sexual restraint protects the happiness and harmony of families.' },
  { km: 'មិននិយាយកុហក', en: 'Not to speak falsely', kmBody: 'ការនិយាយពិត ធ្វើឲ្យគេទុកចិត្ត និងឲ្យចិត្តខ្លួនឯងស្ងប់ ។', enBody: 'Speaking truth brings the trust of others and peace to one\u2019s own mind.' },
  { km: 'មិនផឹកស្រា គ្រឿងញៀន ដែលធ្វើឲ្យវង្វេងស្មារតី', en: 'Not to take intoxicants that cloud the mind', kmBody: 'ការមិនផឹកស្រា ការពារកុំឲ្យសីល ៤ មុន ខូច និងរក្សាសតិ ។', enBody: 'Refraining from intoxicants protects the other precepts and preserves mindfulness.' },
]

const athasila = [
  { km: 'សីល ៥ ទាំងអស់', en: 'The five precepts', kmBody: 'សីល ១–៥ ដូចរៀងរាល់ថ្ងៃ ។', enBody: 'the same first five precepts as daily.' },
  { km: 'មិនបរិភោគអាហារពេលក្រោយថ្ងៃត្រង់', en: 'Not to eat after midday', kmBody: 'អាហារមួយពេល មុនថ្ងៃត្រង់ ដូចព្រះសង្ឃ ។', enBody: 'eating only before noon, like the monks.' },
  { km: 'មិនរាំ ប្រគំ ច្រៀង ប្រដាប់តាក់តែងខ្លួន', en: 'Not to dance, sing, or adorn the body', kmBody: 'ចៀសវាងការលេងសប្បាយ និងការតាក់តែង ដើម្បីឲ្យចិត្តស្ងប់ ។', enBody: 'avoiding amusement and adornment to calm the mind.' },
  { km: 'មិនអង្គុយលើកន្លែងខ្ពស់ កន្លែងវិសេស', en: 'Not to use lofty or luxurious seats', kmBody: 'អង្គុយលើទីធម្មតា ប្រុងប្រៀបរាងកាយ សម្រាប់បដិបត្តិ ។', enBody: 'sitting on simple seats, ready for practice.' },
]

const festivals = [
  { km: 'មាឃបូជា (ថ្ងៃពេញបូណ៌មី ខែមាឃ)', en: 'Māgha Pūjā', kmBody: 'រំលឹកថ្ងៃព្រះសង្ឃ ១២៥០ អង្គ មកជួបព្រះពុទ្ធដោយឥតភ្ចាក់ ហើយព្រះអង្គប្រកាសឱវាទបាតិមោក្ខ ថា «កុំធ្វើបាប ចម្រើនកុសល សម្អាតចិត្ត» ។', enBody: 'recalling the day 1,250 arahants gathered before the Buddha, who proclaimed the ovāda-pātimokkha: "Do no evil, do good, purify the mind."' },
  { km: 'វិសាខបូជា (ខែពិសាខ)', en: 'Vesākha Pūjā', kmBody: 'រំលឹក ៣ ថ្ងៃសំខាន់ ក្នុងមួយថ្ងៃតែមួយ៖ ព្រះពុទ្ធប្រសូត ត្រាស់ដឹង និងបរិនិព្វាន ។', enBody: 'the one day recalling the Buddha\u2019s birth, enlightenment, and final passing.' },
  { km: 'អាសាឡ្ហបូជា (ខែអាសាឍ)', en: 'Āsāḷha Pūjā', kmBody: 'រំលឹកថ្ងៃព្រះពុទ្ធប្រកាសធម្មចក្កប្បវត្តនសូត្រ ជាលើកដំបូង ដល់បញ្ចវគ្គិយ ។ ហើយជាថ្ងៃចាប់ផ្តើមព្រះវស្សា ។', enBody: 'recalling the first sermon of the Dhamma-cakka to the five ascetics; it also begins the rainy retreat.' },
  { km: 'ព្រះវស្សា (បីខែរដូវភ្លៀង)', en: 'Vassa — the Rainy Retreat', kmBody: 'ព្រះសង្ឃស្នាក់នៅក្នុងវត្ត បីខែ ចម្រើនបដិបត្តិ; អ្នកផ្ទះជួយធ្វើទាន ។', enBody: 'monks stay in the temple for three months devoting themselves to practice; lay people supports them.' },
  { km: 'កឋិនទាន (ចុងព្រះវស្សា)', en: 'Kaṭhina — Robe Offering', kmBody: 'អ្នកផ្ទះថ្វាយចីវរកឋិន ដល់ព្រះសង្ឃ បន្ទាប់ពីព្រះវស្សា ជាបុណ្យធំទូលាយ ។', enBody: 'lay people offer the kaṭhina robe to the monks after the retreat — a great and joyful merit.' },
]
</script>
