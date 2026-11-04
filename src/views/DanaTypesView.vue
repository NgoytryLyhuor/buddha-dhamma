<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🎁 {{ t('ឥតិវុត្តក តិកនិបាត · ធម្មបទគាថា (Dhp 354)', 'Itivuttaka 98 · Dhammapada Verse 354') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('ទាន ៣ ជំពូក និង បុណ្យ ៣ ជាន់', 'The 3 Forms of Giving: Material, Safety & Truth') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ព្រះសម្មាសម្ពុទ្ធទ្រង់ត្រាស់ថា «សព្វទានំ ធម្មទានំ ជិនាតិ» — ការឱ្យធម្មទាន តែងឈ្នះអស់ទានទាំងពួង។ ការធ្វើទានមិនមែនមានត្រឹមតែការចំណាយលុយកាក់ ឬម្ហូបអាហារប៉ុណ្ណោះទេ (អាមិសទាន)។ ការអត់ទោស និងការមិនបៀតបៀនគេ (អភ័យទាន) មានតម្លៃខ្ពស់ជាងលុយកាក់រាប់លាន; ហើយការចែករំលែកពន្លឺបញ្ញាធម៌ (ធម្មទាន) គឺជាកំពូលនៃទានទាំងអស់ក្នុងលោក។',
            'The Buddha proclaimed: "The gift of Dhamma excels all gifts." Generosity transcends material donations (Āmisa-dāna). Giving emotional safety and forgiveness (Abhaya-dāna) surpasses fortunes in gold, while sharing liberating wisdom (Dhamma-dāna) is the supreme blessing in the cosmos.'
          ) }}
        </p>
      </div>
    </section>

    <!-- 3 Forms of Dana Grid -->
    <section class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="d in danaList"
          :key="d.id"
          class="card-paper p-6 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ d.icon }}
              </span>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold"
                    :class="d.badgeClass">
                {{ t(d.levelK, d.levelE) }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ t(d.titleK, d.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-3" :style="{ color: 'var(--accent)' }">
              {{ d.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(d.descK, d.descE) }}
            </p>

            <div class="p-3.5 rounded-2xl border space-y-1.5 text-xs mb-3"
                 :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
              <span class="font-semibold" :style="{ color: 'var(--accent)' }">📌 {{ t('ទម្រង់នៃការឱ្យ៖', 'Expressions:') }}</span>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(d.examplesK, d.examplesE) }}</p>
            </div>
          </div>

          <div class="pt-3 border-t text-xs font-semibold"
               :class="d.fruitClass"
               :style="{ borderColor: 'var(--border)' }">
            <span>✨ {{ t('អានិសង្ស៖ ', 'Karmic Fruit: ') }}</span>
            <span>{{ t(d.fruitK, d.fruitE) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- The 3 Pure Intentions (ចេតនា ៣ កាល) -->
    <section class="card-paper p-6 space-y-4 border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
      <div class="text-center max-w-xl mx-auto space-y-2">
        <span class="text-3xl">💎</span>
        <h3 class="text-lg font-bold font-serif" :style="{ color: 'var(--ink)' }">
          {{ t('ចេតនា ៣ កាល ដើម្បីឱ្យទានមានផលធំធេង', 'The 3 Purities of Volition for Maximum Fruit') }}
        </h3>
        <p class="text-xs sm:text-sm" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ការធ្វើទានមួយ ទោះជាតិចឬច្រើន នឹងផ្ដល់ផលវិបាកជាមហាកុសល លុះត្រាតែមានចេតនាបរិសុទ្ធទាំង ៣ ដំណាក់កាលនេះ៖', 'A gift, small or large, yields immeasurable noble fruit when adorned by pure volition at all three stages:') }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
        <div class="p-4 rounded-2xl border space-y-1.5" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="font-bold text-amber-600">១. បុព្វចេតនា (មុនពេលឱ្យ)</span>
          <p :style="{ color: 'var(--ink-muted)' }">
            {{ t('មានចិត្តជ្រះថ្លារីករាយ ត្រេកអរក្នុងការលះបង់ គ្មានការបង្ខិតបង្ខំ ឬអាក់អន់ស្រពន់ចិត្តឡើយ។', 'Joyful anticipation and genuine gladness before the act of giving.') }}
          </p>
        </div>

        <div class="p-4 rounded-2xl border space-y-1.5" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="font-bold text-emerald-600">២. មុញ្ចនចេតនា (កំពុងតែឱ្យ)</span>
          <p :style="{ color: 'var(--ink-muted)' }">
            {{ t('ក្នុងខណៈកំពុងប្រគល់ទាន មានចិត្តស្ងប់ស្អាត មិនស្ដាយស្រណោះ គោរពដល់អ្នកទទួលទាន។', 'Serene mental clarity and reverence in the very moment of handing over the gift.') }}
          </p>
        </div>

        <div class="p-4 rounded-2xl border space-y-1.5" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="font-bold text-violet-600">៣. អបរចេតនា (ក្រោយពេលឱ្យរួច)</span>
          <p :style="{ color: 'var(--ink-muted)' }">
            {{ t('នឹកឃើញទានកាលណា តែងមានចិត្តសប្បាយរីករាយ មិនរអ៊ូរទាំ មិនទារគុណស្រឡាញ់ ឬអួតអាងឡើយ។', 'Enduring joy whenever remembering the gift, free from regret, strings attached, or bragging.') }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const danaList = [
  {
    id: 'amisa',
    icon: '🍲',
    levelK: 'ទានកម្រិតទី ១',
    levelE: 'Level 1: Material Gift',
    badgeClass: 'text-amber-600 bg-amber-100 dark:bg-amber-950/40',
    titleK: '១. អាមិសទាន (ការឱ្យវត្ថុសម្ភារៈ)',
    titleE: '1. Āmisa-Dāna (Material Giving)',
    pali: 'Āmisadānaṁ',
    descK: 'ការបរិច្ចាគបាយ ទឹក ម្ហូបអាហារ សម្លៀកបំពាក់ ទីស្នាក់អាស្រ័យ ថ្នាំសង្កូវ ឬប្រាក់កាសដល់ព្រះសង្ឃ អ្នកក្រខ្សត់ និងសង្គម។',
    descE: 'Giving material resources: food, clean water, clothing, shelter, medicines, books, and financial aid to monks and society.',
    examplesK: 'ប្រគេនចង្ហាន់ដល់ព្រះសង្ឃ ជួយសាងសង់មន្ទីរពេទ្យ ឧបត្ថម្ភអាហារូបករណ៍ដល់សិស្សក្រីក្រ ចែកអំណោយជនចាស់ជរា។',
    examplesE: 'Offering almsfood, building shelters, funding scholarships, sponsoring orphanages.',
    fruitK: 'សម្បូរទ្រព្យសម្បត្តិ កើតជាតិណាៗមិនដែលអត់ឃ្លាន រូបកាយរឹងមាំ។',
    fruitE: 'Abundant material prosperity, freedom from starvation, physical vitality.',
    fruitClass: 'text-amber-600'
  },
  {
    id: 'abhaya',
    icon: '🕊️',
    levelK: 'ទានកម្រិតទី ២',
    levelE: 'Level 2: Safety & Forgiveness',
    badgeClass: 'text-emerald-600 bg-emerald-100 dark:bg-emerald-950/40',
    titleK: '២. អភ័យទាន (ការឱ្យក្ដីសុខ និងការអត់ទោស)',
    titleE: '2. Abhaya-Dāna (Gift of Fearlessness & Forgiveness)',
    pali: 'Abhayadānaṁ',
    descK: 'ការរក្សាសីល ៥ មិនបៀតបៀនជីវិតសត្វ មិនសម្លាប់ មិនលួច មិនបំភ័យគេ និងការលះបង់កំហឹង អត់ឱនទោសឱ្យអ្នកដែលធ្លាប់ធ្វើបាបយើង។',
    descE: 'Giving safety to all living beings through ethical restraint (5 Precepts), saving lives from slaughter, and genuinely forgiving enemies.',
    examplesK: 'លែងសត្វពីការសម្លាប់ អត់ទោសឱ្យអ្នកដែលនិយាយអាក្រក់ពីយើង មិនសងសឹក ធ្វើជាទីពឹងដែលផ្ដល់ភាពកក់ក្ដៅ។',
    examplesE: 'Rescuing animals from butchering, pardoning offenses without retaliation, being a safe harbor.',
    fruitK: 'គ្មានសត្រូវបៀតបៀន គេងលក់ស្រួល ទៅទីណាក៏មានទេវតានិងមនុស្សស្រឡាញ់ការពារ។',
    fruitE: 'Invulnerability to enemies, peaceful sleep, cherished and guarded by devas and humans.',
    fruitClass: 'text-emerald-600'
  },
  {
    id: 'dhamma',
    icon: '💡',
    levelK: 'កំពូលនៃទានទាំងអស់',
    levelE: 'Supreme: Gift of Truth',
    badgeClass: 'text-violet-600 bg-violet-100 dark:bg-violet-950/40',
    titleK: '៣. ធម្មទាន (ការឱ្យពន្លឺបញ្ញាធម៌)',
    titleE: '3. Dhamma-Dāna (The Gift of Truth)',
    pali: 'Dhammadānaṁ (Sabbadānaṁ jināti)',
    descK: 'ការបង្រៀនធម៌ ពន្យល់សច្ចធម៌ បោះពុម្ពសៀវភៅធម៌ ចែករំលែកកម្មវិធីធម៌ និងណែនាំមនុស្សឱ្យដើរលើផ្លូវត្រូវ រំលត់ទុក្ខ។',
    descE: 'Sharing spiritual wisdom, explaining the Noble Path, distributing scriptures, and illuminating minds toward awakening.',
    examplesK: 'ពន្យល់ធម៌ដល់មិត្តភក្តិ បោះពុម្ពសៀវភៅព្រះត្រៃបិដក បង្កើតគេហទំព័រធម៌ឱ្យគេអានរៀន ជួយមនុស្សឱ្យឈប់ធ្វើបាប។',
    examplesE: 'Teaching meditation, funding scriptural translations, maintaining open Dhamma apps.',
    fruitK: 'កើតមានបញ្ញាភ្លឺថ្លា យល់ធម៌បានឆាប់រហ័ស ឆ្ពោះទៅកាន់ការត្រាស់ដឹង និងព្រះនិព្វាន។',
    fruitE: 'Brilliant wisdom, sharp intellect, rapid spiritual awakening culminating in Nibbāna.',
    fruitClass: 'text-violet-600'
  }
]
</script>
