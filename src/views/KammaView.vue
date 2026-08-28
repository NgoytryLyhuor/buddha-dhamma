<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ០៤ — កម្មផល', 'GATHA 04 — KAMMA & REBIRTH') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('កម្មជាកេរដំណែល ផលជាការត្រឡប់', 'Kamma is the Legacy, Vipāka the Return') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('កម្ម គឺចេតនា គឺស្មារតីគិតហើយធ្វើ។ ព្រះពុទ្ធបរមគ្រូត្រាស់ទេសនាថា៖ «កម្មពីរ គឺចេតនា និងសេចក្តីប្រឹងប្រែង»។ ទង្វើល្អឲ្យផលល្អ ទង្វើអាក្រក់ឲ្យផលអាក្រក់ — មិនមែនព្រះជាអ្នកវិនិច្ឆ័យ គឺច្បាប់ធម្មជាតិនៃហេតុផល។', 'Kamma is intention — willing and acting. The Buddha said: «It is volition that I call kamma.» Good deeds ripen as good result, bad deeds as bad — no judge is needed; it is the natural law of cause and effect.') }}
    </p>

    <!-- kusala vs akusala -->
    <div class="grid md:grid-cols-2 gap-6 mt-8">
      <div class="card-paper p-6">
        <p class="chapter-label" style="color: var(--sage)">KUSALA</p>
        <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('កុសលកម្មបថ ១០', '10 Wholesome Courses') }}</h3>
        <ul class="tick-list mt-3">
          <li v-for="k in kusala" :key="k.en">
            <strong :style="{ color: 'var(--ink)' }">{{ t(k.km, k.en) }}</strong>
            <span class="text-xs" :style="{ color: 'var(--ink-muted)' }"> — {{ k.pl }}</span>
          </li>
        </ul>
      </div>
      <div class="card-paper p-6">
        <p class="chapter-label" style="color: var(--red)">AKUSALA</p>
        <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('អកុសលកម្មបថ ១០', '10 Unwholesome Courses') }}</h3>
        <ul class="tick-list mt-3">
          <li v-for="k in akusala" :key="k.en">
            <strong :style="{ color: 'var(--ink)' }">{{ t(k.km, k.en) }}</strong>
            <span class="text-xs" :style="{ color: 'var(--ink-muted)' }"> — {{ k.pl }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- roots -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">MŪLA — 6</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ឫសគល់ ៦ នៃចិត្ត', 'The Six Roots of Mind') }}</h3>
      <div class="grid md:grid-cols-3 gap-4 mt-5">
        <div v-for="r in roots" :key="r.en" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid ' + r.color }">
          <p class="font-display" :style="{ color: r.color }">{{ t(r.km, r.en) }} <span class="text-xs font-bold">{{ r.pl }}</span></p>
          <p class="text-xs mt-2" :style="{ color: 'var(--ink-muted)' }">{{ t(r.kmBody, r.enBody) }}</p>
        </div>
      </div>
    </div>

    <!-- 31 planes -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">BHUMMI — 31</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ភូមិ ៣១ នៃសង្សារ', '31 Planes of Existence') }}</h3>
      <div class="grid md:grid-cols-2 gap-4 mt-5">
        <div v-for="p in planes" :key="p.en" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <p class="font-bold" :style="{ color: p.color }">{{ t(p.km, p.en) }} <span class="paali ml-1">{{ p.n }}</span></p>
          <p class="text-xs mt-1" :style="{ color: 'var(--ink-muted)' }">{{ t(p.kmBody, p.enBody) }}</p>
        </div>
      </div>
      <div class="verse-box p-3 mt-5">
        <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t('ឱកាសកើតជាមនុស្សមានតម្លៃណាស់ — បានជួបធម៌ អាចបដិបត្តិ អាចរួចផុតពីវដ្ដ។', 'To be born human and meet the Dhamma is precious — one can practise and escape the round.') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()

const kusala = [
  { km: 'បាណាតិបាតា វេរមណី', en: 'Nothing that breathes', pl: 'not killing' },
  { km: 'អទិន្នាទានា វេរមណី', en: 'Nothing that is not given', pl: 'not stealing' },
  { km: 'កាមេសុមិច្ឆាចារា វេរមណី', en: 'Pure in love', pl: 'no sexual misconduct' },
  { km: 'មុសាវាទា វេរមណី', en: 'True in speech', pl: 'not lying' },
  { km: 'បេសុញ្ញាវាចា វេរមណី', en: 'Words that unite', pl: 'not slandering' },
  { km: 'ផរុសវាចា វេរមណី', en: 'Gentle words', pl: 'not speaking harshly' },
  { km: 'សម្ផប្បលាបា វេរមណី', en: 'Timely and useful', pl: 'not idle chatter' },
  { km: 'អនភិជ្ឈា វេរមណី', en: 'An open hand', pl: 'non-covetousness' },
  { km: 'អព្យាបាទ វេរមណី', en: 'Goodwill to all', pl: 'non-ill-will' },
  { km: 'សម្មាទិដ្ឋិ', en: 'Right view', pl: 'seeing the truth' },
]

const akusala = [
  { km: 'បាណាតិបាត', en: 'Killing', pl: 'taking breath' },
  { km: 'អទិន្នាទាន', en: 'Stealing', pl: 'taking what is not given' },
  { km: 'កាមេសុមិច្ឆាចារ', en: 'Sexual misconduct', pl: 'wrong in love' },
  { km: 'មុសាវាទ', en: 'Lying', pl: 'false speech' },
  { km: 'បេសុញ្ញាវាចា', en: 'Slander', pl: 'divisive speech' },
  { km: 'ផរុសវាចា', en: 'Harsh speech', pl: 'abusive words' },
  { km: 'សម្ផប្បលាប', en: 'Idle chatter', pl: 'gossip, vain talk' },
  { km: 'អភិជ្ឈា', en: 'Covetousness', pl: 'greedy longing' },
  { km: 'ព្យាបាទ', en: 'Ill-will', pl: 'wishing harm' },
  { km: 'មិច្ឆាទិដ្ឋិ', en: 'Wrong view', pl: 'denying the Dhamma' },
]

const roots = [
  { km: 'លោភៈ', en: 'Greed', pl: 'lobha', color: 'var(--red)', kmBody: 'ចង់បាន តោងតាមអារម្មណ៍', enBody: 'clinging desire' },
  { km: 'ទោសៈ', en: 'Aversion', pl: 'dosa', color: 'var(--red)', kmBody: 'ខឹងឆេវឆាវ ស្អប់', enBody: 'anger and hatred' },
  { km: 'មោហៈ', en: 'Delusion', pl: 'moha', color: 'var(--red)', kmBody: 'វង្វេង មិនយល់ពិត', enBody: 'blind confusion' },
  { km: 'អលោភៈ', en: 'Non-greed', pl: 'alobha', color: 'var(--sage)', kmBody: 'ចំណាយដាច់ ថ្វាយចែក', enBody: 'generosity, letting go' },
  { km: 'អទោសៈ', en: 'Non-aversion', pl: 'adosa', color: 'var(--sage)', kmBody: 'មេត្តា អត់ឱន', enBody: 'loving-kindness, patience' },
  { km: 'អមោហៈ', en: 'Non-delusion', pl: 'amoha', color: 'var(--sage)', kmBody: 'បញ្ញាដឹងសេចក្តីពិត', enBody: 'wisdom seeing the truth' },
]

const planes = [
  { km: 'អបាយភូមិ ៤', en: '4 Woeful Planes', n: '4', color: 'var(--red)', kmBody: 'នរក តិរច្ឆាន ប្រេត អសុរកាយ', enBody: 'hell, animals, ghosts, demons' },
  { km: 'កាមសុគតិភូមិ ៧', en: '7 Happy Sense Planes', n: '7', color: 'var(--accent)', kmBody: 'មនុស្ស និង ទេវលោក ៦', enBody: 'humans and six deva heavens' },
  { km: 'រូបាវចរព្រហ្មភូមិ ១៦', en: '16 Fine-material Brahma Planes', n: '16', color: 'var(--blue)', kmBody: 'ព្រហ្មមានរូបឈាន', enBody: 'brahmā realms of jhāna' },
  { km: 'អរូបាវចរព្រហ្មភូមិ ៤', en: '4 Formless Brahma Planes', n: '4', color: 'var(--purple)', kmBody: 'ព្រហ្មគ្មានរូប', enBody: 'formless spheres' },
]
</script>