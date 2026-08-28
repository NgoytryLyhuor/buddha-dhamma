<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('ធម៌បន្ថែម ១៧ — អនុស្សតិ', 'EXTRA 17 — RECOLLECTIONS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('អនុស្សតិ ១០', 'The Ten Recollections') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('អនុស្សតិ ប្រែថា ការរឭកដល់ ។ ធម៌សម្រាប់នាំចិត្តទៅរករបស់ល្អ ជាអាហារនៃចិត្ត ធ្វើឲ្យចិត្តស្ងប់ កើតសទ្ធា និងសេចក្តីអស់បារម្ភ ។ ក្នុងធម៌ មានអនុស្សតិ ១០ ដែលគេរំលឹកបានរាល់ថ្ងៃ។', 'Anussati means "recollection". These are dhammas that turn the mind toward what is good — food for the heart, calming it and giving rise to faith and a sense of release. There are ten recollections that one may recall daily.') }}
    </p>

    <div class="card-paper p-6 md:p-8 mt-8">
      <ul class="tick-list mt-2">
        <li v-for="(a, i) in anussati" :key="a.pl">
          <div class="flex items-baseline gap-3">
            <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
            <div class="min-w-0">
              <span class="paali">{{ a.pl }}</span>
              <strong class="ml-2" :style="{ color: 'var(--ink)' }">{{ t(a.km, a.en) }}</strong>
              <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(a.kmBody, a.enBody) }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- key ones -->
    <div class="grid md:grid-cols-2 gap-6 mt-8">
      <div class="card-paper p-6">
        <p class="chapter-label">BUDDHĀNUSSATI</p>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t('រឭកដល់ព្រះពុទ្ធ', 'Recollection of the Buddha') }}</h3>
        <div class="verse-box p-3 mt-3">
          <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">Namo tassa bhagavato arahato sammāsambuddhassa</p>
        </div>
        <p class="text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ពេលចិត្តមិនស្ងប់ ចូររឭកដល់គុណព្រះពុទ្ធ ដោយថា «ព្រះអង្គបរិសុទ្ធ ត្រាស់ដឹងដោយខ្លួនឯង» — ចិត្តនឹងស្ងប់ កើតសទ្ធា។', 'When the mind is disturbed, recollect the Buddha&rsquo;s qualities, thinking &ldquo;He is pure and self-awakened&rdquo; — the mind calms and faith arises.') }}
        </p>
      </div>
      <div class="card-paper p-6">
        <p class="chapter-label">MARANĀNUSSATI</p>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t('រឭកដល់សេចក្តីស្លាប់', 'Recollection of Death') }}</h3>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ការរឭកដល់មរណៈ មិនមែនដើម្បីឲ្យសោកស្តាយ តែដើម្បីដាស់ខ្លួន កុំឲ្យខ្ជិលធ្វើល្អ កុំឲ្យចំណាយពេលឥតប្រយោជន៍។', 'Recollecting death is not for sorrow but to wake oneself — not to be lazy in doing good, not to waste time.') }}
        </p>
        <div class="verse-box p-3 mt-3">
          <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t('កុំប្រមាទ ក្នុងការធ្វើល្អ; ស្លាប់ណាមួយពេល មិនដឹង។', 'Do not be heedless in doing good; death comes at any time, we do not know when.') }}</p>
        </div>
      </div>
    </div>

    <!-- daily reflections -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('ពិចារណាប្រចាំថ្ងៃ', 'DAILY REFLECTIONS') }}</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('វេទនា ៅក្នុងជីវិត', 'The Five Recollections of the Precariousness of Life') }}</h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រះពុទ្ធទ្រង់ប្រៀនប្រដៅឲ្យពិចារណាប្រចាំថ្ងៃ នូវសេចក្តីពិត ៥ ប្រការនេះ ដើម្បីកុំឲ្យចិត្តប្រមាទ។', 'The Buddha taught these five truths to be reflected on daily so that the mind does not become heedless.') }}
      </p>
      <ul class="tick-list mt-4">
        <li v-for="r in five" :key="r.en">
          <strong :style="{ color: 'var(--ink)' }">{{ t(r.km, r.en) }}</strong>
          <span class="text-sm" :style="{ color: 'var(--ink-muted)' }"> — {{ t(r.kmBody, r.enBody) }}</span>
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

const anussati = [
  { pl: 'BUDDHĀNUSSATI', km: 'រឭកដល់ព្រះពុទ្ធ', en: 'Recollection of the Buddha', kmBody: 'រឭកនូវគុណរបស់ព្រះពុទ្ធ ឲ្យកើតសទ្ធា ចិត្តស្ងប់។', enBody: 'Recalling the Buddha&rsquo;s qualities to rouse faith and calm the mind.' },
  { pl: 'DHAMMĀNUSSATI', km: 'រឭកដល់ព្រះធម៌', en: 'Recollection of the Dhamma', kmBody: 'ព្រះធម៌ប្រកាសដោយព្រះពុទ្ធ ប្រកបដោយប្រយោជន៍ បរិសុទ្ធ ។', enBody: 'The Dhamma is well-proclaimed, beneficial, and pure.' },
  { pl: 'SAṄGHĀNUSSATI', km: 'រឭកដល់ព្រះសង្ឃ', en: 'Recollection of the Saṅgha', kmBody: 'រឭកដល់គុណព្រះសង្ឃ ជាអ្នកបដិបត្តិល្អ។', enBody: 'Recalling the Saṅgha as followers of the good practice.' },
  { pl: 'SĪLĀNUSSATI', km: 'រឭកដល់សីល', en: 'Recollection of Virtue', kmBody: 'រឭកនូវសីលដែលខ្លួនកាន់ ឲ្យកើតសេចក្តីត្រេកអរក្នុងល្អ។', enBody: 'Recalling the virtue one keeps, rejoicing in the good.' },
  { pl: 'CĀGĀNUSSATI', km: 'រឭកដល់ភាពហួសវត្ថុ', en: 'Recollection of Generosity', kmBody: 'រឭកនូវទានដែលបានឲ្យ ឲ្យកើតអំណរ និងស្មារតីឲ្យ។', enBody: 'Recalling one&rsquo;s gifts, gladdening and strengthening the spirit of giving.' },
  { pl: 'DEVATĀNUSSATI', km: 'រឭកដល់ទេវតា', en: 'Recollection of the Devas', kmBody: 'រឭកនូវគុណ កុសល ដែលទេវតាមាន ហើយបណ្តុះគុណនោះក្នុងខ្លួន។', enBody: 'Recalling the good qualities of devas and cultivating them in oneself.' },
  { pl: 'UPASAMĀNUSSATI', km: 'រឭកដល់សេចក្តីស្ងប់', en: 'Recollection of Peace', kmBody: 'រឭកដល់និព្វាន ជាទីរំលត់ ទីស្ងប់។', enBody: 'Recalling Nibbāna, the stilling and the peace.' },
  { pl: 'MARANĀNUSSATI', km: 'រឭកដល់សេចក្តីស្លាប់', en: 'Recollection of Death', kmBody: 'រឭកថា ជីវិតមិនទៀង នឹងស្លាប់ ដើម្បីដាស់ខ្លួនធ្វើល្អ។', enBody: 'Reflecting that life is impermanent and ends in death, to rouse diligence.' },
  { pl: 'KĀYAGATĀSATI', km: 'រឭកក្នុងកាយ', en: 'Mindfulness of the Body', kmBody: 'ពិចារណានូវកាយ ឃើញសភាពពិត មិនស្អាត មិនទៀង។', enBody: 'Contemplating the body to see its real, impermanent nature.' },
  { pl: 'ĀNĀPĀNĀNUSSATI', km: 'រឭកនឹងខ្យល់ដកដង្ហើម', en: 'Mindfulness of Breathing', kmBody: 'ដកដង្ហើមដឹងខ្លួន ជាធម៌សម្រាប់ធ្វើសមាធិ។', enBody: 'Mindful breathing, a basis for concentration.' },
]

const five = [
  { km: 'ខ្ញុំមានសភាពចាស់ទៅជាមិនរួច', en: 'I am subject to ageing', kmBody: 'វ័យចំណាស់ មកមិនរួចពីអ្នកណាឡើយ។', enBody: 'ageing cannot be escaped by anyone.' },
  { km: 'ខ្ញុំមានសភាពឈឺទៅជាមិនរួច', en: 'I am subject to sickness', kmBody: 'ជំងឺ ជាធម្មតារបស់កាយ។', enBody: 'sickness is natural to the body.' },
  { km: 'ខ្ញុំមានសភាពស្លាប់ទៅជាមិនរួច', en: 'I am subject to death', kmBody: 'ជីវិត បញ្ចប់ដោយសេចក្តីស្លាប់។', enBody: 'life ends in death.' },
  { km: 'អ្វីៗដែលជាទីស្រឡាញ់ ជាទីគាប់ចិត្ត មានការបែកព្រាត់ជាធម្មតា', en: 'All I love must part', kmBody: 'របស់ស្រឡាញ់ ចេះតែបែកព្រាត់។', enBody: 'what is loved is bound to separate.' },
  { km: 'ខ្ញុំជាកម្មសិទ្ធិរបស់កម្ម', en: 'I am the owner of my deeds', kmBody: 'កម្មល្អ កម្មអាក្រក់ តាមខ្លួនទៅ ។', enBody: 'good and bad deeds follow me.' },
]
</script>
