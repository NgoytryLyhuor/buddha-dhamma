<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ០៨ — ជីវប្រវត្តិ', 'GATHA 08 — THE BUDDHA\'S LIFE') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('ព្រះជន្មរបស់ព្រះសម្មាសម្ពុទ្ធ', 'The Life of the Awakened One') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('សិទ្ធត្ថគោត្មៈ កើតក្នុងត្រកូលសក្យ ក្នុងសួនលុម្ពិនី ប្រទេសនេប៉ាល់សព្វថ្ងៃ។ មាតាព្រះនាមមហាមាយា បិតាព្រះនាមសុទ្ធោទនៈ។ ពិតប្រាកដ ៗ — ជាមនុស្ស មិនមែនទេវតា ដូចយើងដែរ ទើបធម៌របស់ព្រះអង្គអាចសម្រេចបាន។', 'Siddhattha Gotama was born into the Sakya clan in the Lumbini grove, in today\'s Nepal, of Queen Mahāmāyā and King Suddhodana. He was truly human — not a god — which is why his path can be walked by us too.') }}
    </p>

    <!-- key facts -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      <div v-for="f in facts" :key="f.lbl" class="card-paper p-4 text-center">
        <p class="font-display text-lg" :style="{ color: 'var(--accent)' }">{{ f.val }}</p>
        <p class="text-[10px] font-bold tracking-[0.15em] uppercase mt-1" :style="{ color: 'var(--ink-muted)' }">{{ t(f.lbl, f.lblEn) }}</p>
      </div>
    </div>

    <!-- timeline -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">LIFE TIMELINE</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ដំណាក់ដំណើរ', 'Journey of the Awakening') }}</h3>
      <div class="mt-6 space-y-0">
        <div v-for="(e, i) in events" :key="e.en" class="relative pl-8 pb-8" :style="{ borderLeft: i === events.length - 1 ? 'none' : '1px solid var(--border-strong)' }">
          <span class="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full"
            :style="{ background: i % 2 === 0 ? 'var(--accent)' : 'var(--gold)', border: '2px solid var(--bg-card)' }"></span>
          <div class="flex flex-wrap items-center gap-2">
            <span class="paali">{{ e.year }}</span>
            <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
          </div>
          <h4 class="font-display text-lg mt-1" :style="{ color: 'var(--ink)' }">{{ t(e.km, e.en) }}</h4>
          <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(e.kmBody, e.enBody) }}</p>
        </div>
      </div>

      <div class="verse-box p-4 mt-2">
        <p class="text-sm italic" :style="{ color: 'var(--ink-muted)' }">វយធម្មា សង្ខារា អប្បមាទេន សម្បាទេថ ។</p>
        <p class="text-sm mt-1 font-bold" :style="{ color: 'var(--ink-soft)' }">{{ t('«អ្វីៗកើតហើយត្រូវបាត់ទៅ — អ្នកទាំងឡាយ ចូរព្យាយាមកុំប្រហែសធ្វេស»', '"All things pass away — strive on with diligence."') }}</p>
        <p class="text-[10px] tracking-widest uppercase mt-1" :style="{ color: 'var(--ink-faint)' }">{{ t('ព្រះបន្ទូលចុងក្រោយ មុនបរិនិព្វាន', 'Last words before Parinibbāna') }}</p>
      </div>
    </div>

    <!-- birth & royal prince -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">A ROYAL BIRTH</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ព្រះរាជកុមារសិទ្ធត្ថ', 'Prince Siddhattha is Born') }}</h3>
      <div class="mt-4 space-y-3">
        <p class="text-sm leading-loose" :style="{ color: 'var(--ink-soft)' }">{{ t('រាជនគរ កបិលព័ស្តុ រាជធានីនៃស្តេចសុទ្ធោទនៈ (ខ្មែរជាទូទៅហៅ ព្រះបាទសុទ្ធោទនៈ)។ មហេសីព្រះនាម មហាមាយា (បាលី៖ Mahāmāyā)។ រាត្រីមួយ ព្រះនាងមានសុបិននិមិត្តឃើញដំរីស ចូលមកក្នុងព្រះឧទរ។ កាលដល់ពេលសម្រាល ព្រះនាងធ្វើដំណើរទៅស្រុកកំណើត ប្រទេសទេវទាហៈ; នៅតាមផ្លូវ ក្នុងសួនលុម្ពិនី ក្រោមដើមសាល ព្រះនាងក៏ប្រសូត្រព្រះរាជបុត្រ។', 'The royal capital was Kapilavatthu, seat of King Suddhodana. His chief queen was Mahāmāyā. One night she dreamt of a white elephant entering her womb. When her time came she travelled toward her homeland of Devadaha; on the way, in the Lumbini grove beneath a sal tree, she gave birth.') }}</p>
        <p class="text-sm leading-loose" :style="{ color: 'var(--ink-soft)' }">{{ t('ព្រះនាម «សិទ្ធត្ថ» មានន័យថា «អ្នកសម្រេចនូវសេចក្តីប្រាថ្នា» ឬ «ទាំងអស់ដែលប្រាថ្នាបានសម្រេច»។ បុរសជំនាញលក្ខណៈ បានបញ្ជាក់ថា កុមារានេះ ទោះនៅផ្ទះ នឹងបានត្រាស់ជាស្តេចចក្រពត្តិ; បើចេញបួស នឹងបានត្រាស់ជាព្រះពុទ្ធ។ ព្រះនាងមហាមាយា សោយទិវង្គត បន្ទាប់ពីប្រសូត បាន ៧ ថ្ងៃ; ព្រះនាងបជាបតិគោតមី (ម្ចាស់បង) ជាអ្នកចិញ្ចឹមតម្កល់ព្រះកុមារ។', '"Siddhattha" means "he whose purpose is accomplished" or "all wishes fulfilled." The brahmin soothsayers declared this child, if he stayed at home, would become a universal monarch; if he went forth, a fully awakened Buddha. Queen Mahāmāyā died seven days after the birth, and her sister Mahāpajāpatī Gotamī raised the prince.') }}</p>
      </div>
    </div>

    <!-- life at the palace -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">THE PALACE YEARS</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ក្នុងព្រះរាជវាំង', 'A Life of Every Luxury') }}</h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t('ស្តេចសុទ្ធោទនៈ ខ្លាចបាត់បង់ព្រះរាជបុត្រ ទៅក្នុងផ្លូវបព្វជ្ជា ក៏បំពាក់បំប៉នព្រះអង្គ ឲ្យត្រេកអរក្នុងកាម ហើយវៀរកុំឲ្យឃើញទុក្ខ។', 'Fearing he would lose his son to the homeless life, King Suddhodana heaped every pleasure on the prince and kept the sight of suffering from him.') }}</p>
      <ul class="tick-list mt-4">
        <li v-for="p in palace" :key="p.en"><strong :style="{ color: 'var(--ink)' }">{{ t(p.km, p.en) }}</strong><br><span class="text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t(p.kmBody, p.enBody) }}</span></li>
      </ul>
    </div>

    <!-- the four sights -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label" style="color: var(--red)">THE FOUR SIGHTS</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ទេវទូតទាំង ៤', 'The Four Heavenly Messengers') }}</h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t('ព្រះអង្គចូលទៅក្នុងនគរ លើរទេះ បួនដង។ រាល់ដង ព្រះអង្គឃើញទិដ្ឋភាពមួយ ដែលរន្ធត់ចិត្ត ហើយសួរអស្សរោជឆន្នៈ។ ទាំង ៤ នេះ លោកហៅថា ទេវទូត — ដូចជាអ្នកនាំសាររបស់ទេវតា មកដាស់ស្តេចឲ្យភ្ញាក់ពីសុបិនកាម។', 'Four times he drove out into the city. Each time he saw a sight that shook him and questioned his charioteer Channa. These are called the devadūta — the heavenly messengers sent to wake a prince from a dream of pleasure.') }}</p>
      <div class="grid md:grid-cols-4 gap-3 mt-5">
        <div v-for="(s, i) in sights" :key="s.en" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
          <p class="font-display text-base mt-1" :style="{ color: 'var(--ink)' }">{{ t(s.km, s.en) }}</p>
          <p class="text-[11px] mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(s.kmBody, s.enBody) }}</p>
        </div>
      </div>
    </div>

    <!-- timeline -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">LIFE TIMELINE</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ដំណាក់ដំណើរ', 'Journey of the Awakening') }}</h3>
      <div class="mt-6 space-y-0">
        <div v-for="(e, i) in events" :key="e.en" class="relative pl-8 pb-8" :style="{ borderLeft: i === events.length - 1 ? 'none' : '1px solid var(--border-strong)' }">
          <span class="absolute -left-[7px] top-1 w-3.5 h-3.5 rounded-full"
            :style="{ background: i % 2 === 0 ? 'var(--accent)' : 'var(--gold)', border: '2px solid var(--bg-card)' }"></span>
          <div class="flex flex-wrap items-center gap-2">
            <span class="paali">{{ e.year }}</span>
            <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">{{ khNum(i + 1) }}</span>
          </div>
          <h4 class="font-display text-lg mt-1" :style="{ color: 'var(--ink)' }">{{ t(e.km, e.en) }}</h4>
          <p class="text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">{{ t(e.kmBody, e.enBody) }}</p>
          <div v-if="e.details" class="mt-2 space-y-1.5">
            <p v-for="d in e.details" :key="d.en" class="text-[13px] leading-relaxed" :style="{ color: 'var(--ink-muted)' }">• {{ t(d.km, d.en) }}</p>
          </div>
        </div>
      </div>

      <div class="verse-box p-4 mt-2">
        <p class="text-sm italic" :style="{ color: 'var(--ink-muted)' }">វយធម្មា សង្ខារា អប្បមាទេន សម្បាទេថ ។</p>
        <p class="text-sm mt-1 font-bold" :style="{ color: 'var(--ink-soft)' }">{{ t('«អ្វីៗកើតហើយត្រូវបាត់ទៅ — អ្នកទាំងឡាយ ចូរព្យាយាមកុំប្រហែសធ្វេស»', '"All things pass away — strive on with diligence."') }}</p>
        <p class="text-[10px] tracking-widest uppercase mt-1" :style="{ color: 'var(--ink-faint)' }">{{ t('ព្រះបន្ទូលចុងក្រោយ មុនបរិនិព្វាន', 'Last words before Parinibbāna') }}</p>
      </div>
    </div>

    <!-- after enlightenment -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">THE TEACHING BEGINS</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ក្រោយត្រាស់ដឹង', 'The First Steps of the Dhamma') }}</h3>
      <ul class="tick-list mt-4">
        <li v-for="a in after" :key="a.en"><strong :style="{ color: 'var(--ink)' }">{{ t(a.km, a.en) }}</strong><br><span class="text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t(a.kmBody, a.enBody) }}</span></li>
      </ul>
    </div>

    <!-- history -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">COUNCILS & TIPITAKA</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ការចងក្រងព្រះត្រៃបិដក', 'How the Tipitaka Was Compiled') }}</h3>
      <div class="grid md:grid-cols-3 gap-4 mt-5">
        <div v-for="c in councils" :key="c.en" class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="paali">{{ c.ref }}</span>
          <h4 class="font-bold mt-2" :style="{ color: 'var(--ink)' }">{{ t(c.km, c.en) }}</h4>
          <p class="text-xs mt-1" :style="{ color: 'var(--ink-muted)' }">{{ t(c.kmBody, c.enBody) }}</p>
        </div>
      </div>
      <p class="text-xs mt-4" :style="{ color: 'var(--ink-muted)' }">{{ t('បើតាមប្រពៃណី ព្រះត្រៃបិដកបានសូត្រប្រគំ និងតម្កល់ទុកដោយមាត់មួយជំនាន់ មុននឹងកត់ត្រាជាអក្សរ។ អភិធម្មបិដកត្រូវបានប្រគល់បន្ត ដល់ថ្នាក់វិសេស។', 'By tradition the Tipitaka was recited orally for generations before being written down; the Abhidhamma was transmitted to the élite of the Sangha.') }}</p>
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

const facts = [
  { val: '623', lbl: 'ប្រសូត (មុនគ.ស.)', lblEn: 'Born BCE' },
  { val: '២៩', lbl: 'អាយុចេញបួស', lblEn: 'Years at Renunciation' },
  { val: '៣៥', lbl: 'អាយុត្រាស់ដឹង', lblEn: 'Years at Enlightenment' },
  { val: '៤៥', lbl: 'វស្សាបង្រៀន', lblEn: 'Years Teaching' },
]

const palace = [
  { km: 'ព្រះរាជវាំង ៣ រដូវ', en: 'Three seasonal palaces', kmBody: 'រាំមួយសម្រាប់ រដូវក្តៅ រដូវវស្សា និងរដូវរងារ — បំពេញកាមសុខគ្រប់រដូវ។', enBody: 'One for the hot, the rainy, and the cold seasons — every comfort in every season.' },
  { km: 'អាពាហ៍ពិពាហ៍ជាមួយព្រះនាងភទ្ទា កច្ចានា', en: 'Marriage to Yasodharā', kmBody: 'ព្រះអង្គរៀបអភិសេកជាមួយកូនស្តេច សុប្បពុទ្ធ ព្រះនាងភទ្ទា កច្ចានា (យសោធរា)។', enBody: 'He marries Princess Bhaddā Kaccānā (Yasodharā), daughter of King Suppabuddha.' },
  { km: 'បុត្រ រាហុល', en: 'Son Rāhula', kmBody: 'ព្រះនាងយសោធរា ប្រសូត្រព្រះបុត្រ រាហុល — «ទំពក់» ដែលជាប់រាជបុត្រឲ្យនៅផ្ទះ។', enBody: 'Yasodharā bears a son, Rāhula — "a fetter" — tying the prince to home.' },
  { km: 'លំហែរកម្សាន្តក្នុងនគរ', en: 'Drives into the city', kmBody: 'ព្រះអង្គចេញលំហែររាល់ដង ធ្វើដំណើរលើរទេះ ជួបទិដ្ឋភាពដែលប្រែចិត្ត ព្រះបុត្រ។', enBody: 'On each ride through the city he meets a sight that turns his heart.' },
]

const sights = [
  { km: 'មនុស្សចាស់', en: 'An Old Man', kmBody: 'ឃើញបុរសចំណាស់ សក់ស្កូវ ខ្នងកោង — «យើងក៏នឹងចាស់ ដូច្នេះដែរ»។', enBody: 'A grey-haired, bent old man — "I too will grow old in this way."' },
  { km: 'មនុស្សឈឺ', en: 'A Sick Man', kmBody: 'ឃើញអ្នកជំងឺ ឈឺចាប់ ក្រៀមក្រំ — យល់ថាជំងឺ ជារឿងគ្រប់គ្នា ។', enBody: 'A sick, suffering person — sickness comes to everyone.' },
  { km: 'សព', en: 'A Corpse', kmBody: 'ឃើញសព ដែលគេយកទៅបញ្ចុះ មនុស្សយំសោក — ឃើញសេចក្តីស្លាប់ ។', enBody: 'A corpse borne to burial, mourners weeping — he meets death.' },
  { km: 'អ្នកបួស', en: 'A Wandering Ascetic', kmBody: 'ឃើញសមណៈ មុខស្ងប់ ឥតកាម — ផ្តើមគិតពីផ្លូវរំលត់ទុក្ខ ។', enBody: 'A serene renunciant, free of craving — the seed of the homeless life is sown.' },
]

const events = [
  { year: '623 BCE', km: 'ប្រសូត្រនៅលុម្ពិនី', en: 'Birth at Lumbini', kmBody: 'បុត្រព្រះនាមសិទ្ធត្ថ — អ្នកដែលបំពេញគោលបំណង។', enBody: 'Prince Siddhattha — "he whose purpose is accomplished" — is born.',
    details: [
      { km: 'ប្រកាសអស្ចារ្យ ៧ ជំហាន ក្រោយប្រសូត្រ', en: 'Tradition says he took seven steps at birth' },
      { km: 'គ្រូលក្ខណៈ ប្រកាសវាសនាពីរ គឺស្តេចចក្រពត្តិ ឬ ព្រះពុទ្ធ', en: 'Soothsayers foresee emperor or Buddha' },
      { km: 'ព្រះនាងមហាមាយា សោយទិវង្គត ៧ ថ្ងៃក្រោយ', en: 'Queen Mahāmāyā passes seven days later' },
    ] },
  { year: '594 BCE', km: 'កាលៈ ៤ ប្រឡាក់ចិត្ត', en: 'The Four Sights', kmBody: 'ឃើញអ្នកចាស់ អ្នកឈឺ សព អ្នកបួស — ដឹងច្បាស់ថាលោកពោរពេញដោយទុក្ខ។', enBody: 'An old man, a sick man, a corpse, a recluse — he sees the world\'s suffering.' },
  { year: '594 BCE', km: 'មហាបព្វជ្ជា', en: 'The Great Renunciation', kmBody: 'លះបង់រាជ្យបល្ល័ង្ក ចេញទៅតាមផ្ទះអ្នកគ្មានផ្ទះ ដោយសេះកន្ថក និងសំណាក់ឆន្នៈ។', enBody: 'He leaves palace and kingdom on the horse Kanthaka with the servant Channa.',
    details: [
      { km: 'អាយុ ២៩ វស្សា រាត្រីពេញបូណ៌មី ចេញ ដោយគ្មានអ្នកណាដឹង', en: 'At 29, on the full moon night, he slips away unseen' },
      { km: 'កាត់សក់ ដោះគ្រឿងអលង្ការ ប្រគល់ឲ្យឆន្នៈ វិលទៅវិញ', en: 'He cuts his hair and sends Channa back with his jewellery' },
      { km: 'ដោះដូរសំពត់រាជ យកសំពត់អ្នកប្រមាញ់ — លះភាពជាក្សត្រ', en: 'He exchanges his royal robes for the rough cloth of a hunter' },
    ] },
  { year: '588 BCE', km: 'ត្រាស់ដឹងនៅក្រោមពោធិព្រឹក្ស', en: 'Enlightenment under the Bodhi Tree', kmBody: 'ក្រោយប្រឹងប្រែងអស់ ៦ វស្សា ក្នុងបូណ៌មីវិសាខ ត្រង់ពោធិព្រឹក្ស ស្ថានពោធិមណ្ឌល ប្រទេសឥណ្ឌា ព្រះអង្គក៏ត្រាស់ដឹង។', enBody: 'After six years of striving, on the Vesak full moon at Bodh Gaya in India, he awakens beneath the Bodhi tree.',
    details: [
      { km: 'ពីមុន សាកល្បងផ្លូវតបៈអត់ធ្មត់ធ្ងន់ធ្ងរ ៦ វស្សា — មិនបានសម្រេច', en: 'First he tries severe asceticism for six years — without success' },
      { km: 'នឹកឃើញសមាធិកាលនៅកុមារ ក្រោមដើមឈើខ្ទុំ', en: 'He recalls the calm of his childhood jhāna under a rose-apple tree' },
      { km: 'ទទួលបាយទន្សាយពីសុជាតា បរិភោគ ហើយតាំងសមាធិ', en: 'He accepts Sujātā\'s offering of milk-rice, then sits in resolve' },
      { km: 'វាយរំលំមារ ត្រាស់ដឹងបច្ច័យ ៣ យាម (កាលកន្លង អនាគត បច្ចុប្បន្ន)', en: 'He overcomes Māra and realises the three watches of the night' },
    ] },
  { year: '588 BCE', km: 'ធម្មចក្កប្បវត្តនសូត្រ', en: 'The First Sermon', kmBody: 'ត្រាស់ទេសនាដំបូងដល់ពួកបញ្ចវគ្គិយ នៅឥសិបតនៈ — កុណ្ឌញ្ញបានភ្ញាក់ដឹង។', enBody: 'The first discourse to the five ascetics at Isipatana — Kondañña sees the truth.',
    details: [
      { km: 'សម្រេចព្រះទ័យបង្រៀន ក្រោយព្រះព្រហ្មអារាធនា', en: 'He decides to teach after Brahma Sahampati\'s request' },
      { km: 'រកអាឡារៈ និង ឧទកៈ មុន — ស្លាប់បាត់ទៅហើយ', en: 'He seeks his two old teachers — both have already passed away' },
      { km: 'ប្រកាសអរិយសច្ច ៤ និង មជ្ឈិមបដិបទា', en: 'He proclaims the Four Truths and the Middle Way' },
    ] },
  { year: '588–543 BCE', km: 'បង្រៀនធម៌ ៤៥ វស្សា', en: '45 Years of Teaching', kmBody: 'ធ្វើដំណើរបង្រៀនទូទាំងជនបទឥណ្ឌា ទាំងបព្វជិត ទាំងគ្រហស្ថ ឥតឈប់ឈរ។', enBody: 'He walks all of India teaching both monastics and laypeople without pause.',
    details: [
      { km: 'បង្កើតព្រះសង្ឃ ព្រះភិក្ខុនី — ស្ត្រី និងបុរស គ្រប់វណ្ណៈ', en: 'He establishes the Saṅgha of monks and, later, nuns — open to every class' },
      { km: 'អ្នកមាន អ្នកក្រ ស្តេច ចោរ សត្វគ្រប់ពួក ប្រែចិត្ត', en: 'Rich and poor, kings and thieves alike are transformed' },
      { km: 'ត្រឡប់ទៅកបិលព័ស្តុ ប្រែចិត្តគ្រួសារព្រះអង្គ', en: 'He returns to Kapilavatthu and wins over his own family' },
      { km: 'ភិក្ខុសាវ័កដ៏ល្បី សារីបុត្ត មោគ្គល្លាន អានន្ទ ជាដើម', en: 'Great disciples arise: Sāriputta, Moggallāna, Ānanda and many more' },
    ] },
  { year: '543 BCE', km: 'បរិនិព្វាននៅកុសិនារា', en: 'Parinibbāna at Kusinārā', kmBody: 'អាយុ ៨០ វស្សា ត្រង់ចន្លោះដើមសាលពីរ ពោលព្រះបន្ទូលចុងក្រោយស្តីពីការប្រុងប្រយ័ត្ន។', enBody: 'At 80, between two sal trees, he breathes his last with a final word on diligence.',
    details: [
      { km: 'ភិក្ខុសុភទ្ទ ជាភិក្ខុសាវ័កចុងក្រោយ', en: 'Subhadda is his last disciple' },
      { km: 'ព្រះបន្ទូលចុងក្រោយ ស្តីពីអប្បមាទៈ', en: 'His last words urge diligence (appamāda)' },
      { km: 'ដង្ហើមចុងក្រោយ ក្នុងចតុត្ថឈាន រួចផុតពីសង្សារ', en: 'He passes in the fourth jhāna, freed from saṃsāra' },
    ] },
]

const after = [
  { km: 'ព្រះអង្គទ្រង់រំលឹកគុណម្ចាស់ដើមរបស់ព្រះអង្គ', en: 'He remembers his former teachers', kmBody: 'ត្រឡប់ទៅកបិលព័ស្តុ បន្ទាប់ពីត្រាស់ដឹង — ប្រែចិត្តស្តេចសុទ្ធោទនៈ ព្រះនាងយសោធរា និងរាហុល។', enBody: 'He goes home to Kapilavatthu — winning over Suddhodana, Yasodharā and Rāhula.' },
  { km: 'ព្រះរាជស្តេច ប៊ីម្ពិសារ ថ្វាយវត្តវេឡុវ័ន', en: 'King Bimbisāra offers Veluvana', kmBody: 'ស្តេចប៊ីម្ពិសារ នៃរាជគ្រហៈ ថ្វាយសួនឫស្សី — ជាអារាមដំបូងបង្អស់។', enBody: 'King Bimbisāra of Rājagaha gifts the Bamboo Grove — the first monastery.' },
  { km: 'អ្នកជំនួញ អនាថបិណ្ឌិក ថ្វាយវត្តជេតពន', en: 'Anāthapiṇḍika builds Jetavana', kmBody: 'អ្នកមានសប្បុរស ធ្វើបុណ្យ ព័ទ្ធដីដោយមាស ថ្វាយសួនជេតពន នៅសាវត្ថី។', enBody: 'The wealthy benefactor covers the ground with gold to offer the Jetavana park at Sāvatthī.' },
  { km: 'ព្រះបាទអសោក ក្រោយៗមក ជួយផ្សព្វផ្សាយធម៌', en: 'Later, King Asoka spreads the Dhamma', kmBody: 'ស្តេចអសោក បែរចិត្តមកកាន់ធម៌ ផ្សព្វផ្សាយសាសនា នៅក្រៅឥណ្ឌា — ទៅដល់ស្រីលង្កា សៀម ខ្មែរ។', enBody: 'King Asoka turns to the Dhamma and sends the teaching beyond India — to Sri Lanka, Thailand and Cambodia.' },
]

const councils = [
  { ref: '1st · Rājagaha', km: 'សង្គាយនាទី ១', en: 'First Council', kmBody: 'ក្រោយបរិនិព្វាន មហាកស្សបប្រមូលព្រះអរហន្ត ៥០០ អង្គ សូត្រតម្កល់វិន័យ និងធម៌។', enBody: 'After the parinibbāna, Ven. Mahākassapa leads 500 arahants to rehearse the Vinaya and Dhamma.' },
  { ref: '2nd · Vesāli', km: 'សង្គាយនាទី ២', en: 'Second Council', kmBody: 'រាប់រយឆ្នាំក្រោយ ដោះស្រាយវិវាទស្តីពីវិន័យ ១០ ប្រការ។', enBody: 'About 100 years later, settling a dispute over ten points of discipline.' },
  { ref: '3rd · Pāṭaliputta', km: 'សង្គាយនាទី ៣', en: 'Third Council', kmBody: 'ក្នុងរាជស្តេចអសោក — បញ្ចប់ការចងក្រងអភិធម្មបិដក បេសកជនជញ្ជូនធម៌ទៅក្រៅប្រទេស។', enBody: 'Under King Asoka — completing the Abhidhamma and sending missionaries abroad.' },
]
</script>