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

const events = [
  { year: '623 BCE', km: 'ប្រសូត្រនៅលុម្ពិនី', en: 'Birth at Lumbini', kmBody: 'បុត្រព្រះនាមសិទ្ធត្ថ — អ្នកដែលបំពេញគោលបំណង។', enBody: 'Prince Siddhattha — "he whose purpose is accomplished" — is born.' },
  { year: '594 BCE', km: 'កាលៈ ៤ ប្រឡាក់ចិត្ត', en: 'The Four Sights', kmBody: 'ឃើញអ្នកចាស់ អ្នកឈឺ សព អ្នកបួស — ដឹងច្បាស់ថាលោកពោរពេញដោយទុក្ខ។', enBody: 'An old man, a sick man, a corpse, a recluse — he sees the world\'s suffering.' },
  { year: '594 BCE', km: 'មហាបព្វជ្ជា', en: 'The Great Renunciation', kmBody: 'លះបង់រាជ្យបល្ល័ង្ក ចេញទៅតាមផ្ទះអ្នកគ្មានផ្ទះ ដោយសេះកន្ថក និងសំណាក់ឆន្នៈ។', enBody: 'He leaves palace and kingdom on the horse Kanthaka with the servant Channa.' },
  { year: '588 BCE', km: 'ត្រាស់ដឹងនៅក្រោមពោធិព្រឹក្ស', en: 'Enlightenment under the Bodhi Tree', kmBody: 'ក្រោយប្រឹងប្រែងអស់ ៦ វស្សា ក្នុងបូណ៌មីវិសាខ ត្រង់ពោធិព្រឹក្ស ស្ថានពោធិមណ្ឌល ប្រទេសឥណ្ឌា ព្រះអង្គក៏ត្រាស់ដឹង។', enBody: 'After six years of striving, on the Vesak full moon at Bodh Gaya in India, he awakens beneath the Bodhi tree.' },
  { year: '588 BCE', km: 'ធម្មចក្កប្បវត្តនសូត្រ', en: 'The First Sermon', kmBody: 'ត្រាស់ទេសនាដំបូងដល់ពួកបញ្ចវគ្គិយ នៅឥសិបតនៈ — កុណ្ឌញ្ញបានភ្ញាក់ដឹង។', enBody: 'The first discourse to the five ascetics at Isipatana — Kondañña sees the truth.' },
  { year: '588–543 BCE', km: 'បង្រៀនធម៌ ៤៥ វស្សា', en: '45 Years of Teaching', kmBody: 'ធ្វើដំណើរបង្រៀនទូទាំងជនបទឥណ្ឌា ទាំងបព្វជិត ទាំងគ្រហស្ថ ឥតឈប់ឈរ។', enBody: 'He walks all of India teaching both monastics and laypeople without pause.' },
  { year: '543 BCE', km: 'បរិនិព្វាននៅកុសិនារា', en: 'Parinibbāna at Kusinārā', kmBody: 'អាយុ ៨០ វស្សា ត្រង់ចន្លោះដើមសាលពីរ ពោលព្រះបន្ទូលចុងក្រោយស្តីពីការប្រុងប្រយ័ត្ន។', enBody: 'At 80, between two sal trees, he breathes his last with a final word on diligence.' },
]

const councils = [
  { ref: '1st · Rājagaha', km: 'សង្គាយនាទី ១', en: 'First Council', kmBody: 'ក្រោយបរិនិព្វាន មហាកស្សបប្រមូលព្រះអរហន្ត ៥០០ អង្គ សូត្រតម្កល់វិន័យ និងធម៌។', enBody: 'After the parinibbāna, Ven. Mahākassapa leads 500 arahants to rehearse the Vinaya and Dhamma.' },
  { ref: '2nd · Vesāli', km: 'សង្គាយនាទី ២', en: 'Second Council', kmBody: 'រាប់រយឆ្នាំក្រោយ ដោះស្រាយវិវាទស្តីពីវិន័យ ១០ ប្រការ។', enBody: 'About 100 years later, settling a dispute over ten points of discipline.' },
  { ref: '3rd · Pāṭaliputta', km: 'សង្គាយនាទី ៣', en: 'Third Council', kmBody: 'ក្នុងរាជស្តេចអសោក — បញ្ចប់ការចងក្រងអភិធម្មបិដក បេសកជនជញ្ជូនធម៌ទៅក្រៅប្រទេស។', enBody: 'Under King Asoka — completing the Abhidhamma and sending missionaries abroad.' },
]
</script>