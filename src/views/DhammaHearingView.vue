<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ១០១ — អានិសង្សនៃការស្តាប់ធម៌', 'GATHA 101 — 5 BLESSINGS OF HEARING DHAMMA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('អានិសង្សនៃការស្តាប់ធម៌ ៥ យ៉ាង ៖ សិល្បៈនៃការស្តាប់ឱ្យភ្លឺបញ្ញា', 'The 5 Blessings of Listening to Dhamma (Dhammassavana Sutta)') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ការស្តាប់ព្រះធម៌ (ធម្មស្សវនៈ) គឺជាទ្វារដំបូងបង្អស់ក្នុងការបើកពន្លឺបញ្ញា និងជាមង្គលដ៏ឧត្តមមួយក្នុងចំណោមមង្គលទាំង ៣៨ ប្រការ (កាលេន ធម្មស្សវនំ ឯតម្មង្គលមុត្តមំ)។ នៅក្នុងធម្មស្សវនសូត្រ (AN 5.202) ព្រះសម្មាសម្ពុទ្ធទ្រង់បានសម្តែងនូវអានិសង្សដ៏ប្រសើរ ៥ យ៉ាងដែលបុគ្គលនឹងទទួលបានពីការស្តាប់ធម៌ដោយយកចិត្តទុកដាក់។ ការស្តាប់ធម៌មិនត្រឹមតែជាការបំពេញបុណ្យកុសលប៉ុណ្ណោះទេ ប៉ុន្តែជាឱសថទិព្វសម្រាប់ព្យាបាលជំងឺផ្លូវចិត្ត កម្ចាត់ភាពមន្ទិលសង្ស័យ និងកែតម្រង់ទស្សនវិស័យជីវិតឱ្យដើរលើមាគ៌ាត្រឹមត្រូវ។', 'Listening to the Sublime Dhamma (Dhammassavana) is the foremost gateway to illuminating wisdom and is celebrated as a supreme blessing among the 38 Great Blessings (Kālena dhammassavanaṃ etaṃ maṅgalamuttamaṃ). In the Dhammassavana Sutta (AN 5.202), the Buddha expounded the five magnificent blessings reaped by those who listen attentively to the Dhamma. Far from being a passive traditional ritual, listening to Dhamma serves as divine medicine to heal mental anguish, extinguish inner doubt, and straighten one’s life compass toward ultimate peace.') }}
    </p>

    <!-- Pali Gatha Box from Dhammassavana Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«បញ្ចិមេ ភិក្ខវេ អានិសំសា ធម្មស្សវនេ។ កតមេ បញ្ច? អស្សុតំ សុណាតិ, សុតំ បរិយោទបេតិ, កង្ខំ វិហនតិ, ទិដ្ឋិំ ឧជុំ ករោតិ, ចិត្តមស្ស បសីទតិ។»', '"There are, monks, these five benefits of listening to the Dhamma. Which five? One hears what has not been heard; clarifies what has been heard; dispels perplexity; straightens one\'s views; and one\'s mind becomes serene." — Aṅguttara Nikāya 5.202') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— ធម្មស្សវនសូត្រ បញ្ចកនិបាត អង្គុត្តរនិកាយ', '— Dhammassavana Sutta, Pañcakanipāta, Aṅguttara Nikāya') }}
      </p>
    </div>

    <!-- The 5 Benefits Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>📜</span>
        <span>{{ t('អានិសង្សទាំង ៥ យ៉ាងនៃការស្តាប់ធម៌ពិស្តារ', 'The 5 Blessings of Listening to Dhamma') }}</span>
      </h3>

      <div class="space-y-3">
        <div
          v-for="b in benefits"
          :key="b.id"
          class="card-paper p-4 sm:p-5 rounded-xl border flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
        >
          <div class="flex items-start sm:items-center gap-3">
            <span class="w-8 h-8 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-sm font-mono font-bold shrink-0">
              {{ b.num }}
            </span>
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <span class="text-xl">{{ b.icon }}</span>
                <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">{{ t(b.titleKm, b.titleEn) }}</h4>
                <span class="text-xs font-mono text-stone-500">({{ b.pali }})</span>
              </div>
              <p class="text-xs sm:text-sm mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                {{ t(b.descKm, b.descEn) }}
              </p>
            </div>
          </div>

          <div class="sm:w-48 shrink-0 w-full p-2.5 rounded-lg bg-stone-500/5 border border-stone-500/15 text-xs text-center">
            <span class="font-bold text-amber-700 dark:text-amber-300 block mb-0.5">
              💎 {{ t('ផលសម្រេច ៖', 'Insight Fruit:') }}
            </span>
            <span class="text-stone-600 dark:text-stone-400">{{ t(b.fruitKm, b.fruitEn) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- The 3 Ways of Listening -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>👂</span>
        <span>{{ t('សិល្បៈនៃការស្តាប់ ៖ ឧបមាឆ្នាំង ៣ ប្រភេទ', 'The Art of Listening: The Parable of the 3 Pots') }}</span>
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4 text-xs">
        <div class="p-3 rounded-lg border border-rose-500/20 bg-rose-500/5">
          <span class="font-bold text-rose-700 dark:text-rose-300 block mb-1">១. ឆ្នាំងផ្កាប់មុខ (អវកុជ្ជបញ្ញោ)</span>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed">{{ t('ដូចឆ្នាំងដែលផ្កាប់ចុះ ទោះទឹកធ្លាក់យ៉ាងណាក៏មិនចូល។ ស្តាប់ធម៌ដោយចិត្តរឹងរូស បិទគំនិត មិនទទួលយកអ្វីទាំងអស់។', 'Like an overturned pot: no rain enters. The closed, stubborn listener who absorbs nothing.') }}</p>
        </div>
        <div class="p-3 rounded-lg border border-amber-500/20 bg-amber-500/5">
          <span class="font-bold text-amber-700 dark:text-amber-300 block mb-1">២. ឆ្នាំងធ្លុះបាត (ឧច្ឆង្គបញ្ញោ)</span>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed">{{ t('ដូចឆ្នាំងធ្លុះ ទឹកចូលបានតែហូរចេញអស់។ ស្តាប់ធម៌ពេលនៅក្នុងសាលាយល់ល្អណាស់ តែចេញផុតទ្វារភ្លេចអស់រលីង។', 'Like a pot with a leaky bottom: holds water temporarily, but drains out immediately upon leaving.') }}</p>
        </div>
        <div class="p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5">
          <span class="font-bold text-emerald-700 dark:text-emerald-300 block mb-1">៣. ឆ្នាំងផ្ងារស្អាត (បុថុបញ្ញោ)</span>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed">{{ t('ដូចឆ្នាំងស្អាតដែលផ្ងារឡើង ត្រងយកទឹកភ្លៀងបានបរិបូណ៌។ ស្តាប់ដោយសតិ យកទៅគិតពិចារណា និងប្រតិបត្តិតាម។', 'Like a clean, upright vessel that gathers every drop of sweet nectar, treasuring and practicing the Dhamma.') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const benefits = [
  {
    id: 1,
    num: '១',
    icon: '💡',
    titleKm: 'បានស្តាប់ឮនូវធម៌ដែលមិនធ្លាប់ឮ',
    titleEn: 'Hears What Has Not Been Heard',
    pali: 'Assutaṃ suṇāti',
    descKm: 'បានទទួលចំណេះដឹងថ្មីៗ គំនិតថ្មីៗ និងសច្ចធម៌ដ៏ជ្រាលជ្រៅដែលមិនធ្លាប់បានដឹងពីមុនមកក្នុងជីវិត។',
    descEn: 'Discovers fresh spiritual wisdom, noble perspectives, and profound truths never encountered before.',
    fruitKm: 'ពង្រីកវិសាលភាពបញ្ញា',
    fruitEn: 'Expands intellectual horizon',
  },
  {
    id: 2,
    num: '២',
    icon: '💎',
    titleKm: 'យល់ច្បាស់នូវធម៌ដែលធ្លាប់បានឮ',
    titleEn: 'Clarifies What Has Been Heard',
    pali: 'Sutaṃ pariyodapeti',
    descKm: 'ធម៌ខ្លះធ្លាប់ឮពីមុនតែយល់មិនទាន់ច្បាស់ ពេលស្តាប់ម្តងទៀតកាន់តែភ្លឺស្វាង យល់ន័យក្បោះក្បាយស៊ីជម្រៅ។',
    descEn: 'Deepens and polishes prior knowledge, dissolving ambiguities and uncovering nuanced depths.',
    fruitKm: 'ចម្រើនបញ្ញាជ្រាលជ្រៅ',
    fruitEn: 'Deepens spiritual clarity',
  },
  {
    id: 3,
    num: '៣',
    icon: '❓',
    titleKm: 'កម្ចាត់បង់នូវសេចក្តីសង្ស័យ',
    titleEn: 'Dispels Perplexity & Doubt',
    pali: 'Kaṅkhaṃ vihanati',
    descKm: 'រាល់ចម្ងល់ សេចក្តីសង្ស័យក្នុងកម្មផល ក្នុងព្រះរតនត្រ័យ និងក្នុងដំណើរជីវិត ត្រូវបានស្រាយបំភ្លឺ។',
    descEn: 'Eradicates lingering skepticism regarding kamma, the Triple Gem, and the purpose of life.',
    fruitKm: 'កើតសទ្ធាដ៏មុតមាំ',
    fruitEn: 'Instills unwavering conviction',
  },
  {
    id: 4,
    num: '៤',
    icon: '🧭',
    titleKm: 'ធ្វើឱ្យការយល់ឃើញត្រង់ត្រូវ',
    titleEn: 'Straightens One\'s Views',
    pali: 'Diṭṭhiṃ ujuṃ karoti',
    descKm: 'កែតម្រង់ទស្សនវិស័យជីវិតពី «មិច្ឆាទិដ្ឋិ» (យល់ខុស) ឱ្យក្លាយជា «សម្មាទិដ្ឋិ» (យល់ត្រូវតាមសច្ចធម៌)។',
    descEn: 'Realings one\'s mindset from distorted perceptions to Sammā Diṭṭhi (Right View).',
    fruitKm: 'ដើរលើមាគ៌ាត្រឹមត្រូវ',
    fruitEn: 'Embarks on the Noble Path',
  },
  {
    id: 5,
    num: '៥',
    icon: '🕊️',
    titleKm: 'ចិត្តរមែងជ្រះថ្លាស្ងប់កាយស្ងប់ចិត្ត',
    titleEn: 'Mind Becomes Serene & Joyous',
    pali: 'Cittamassa pasīdati',
    descKm: 'កំឡុងពេលស្តាប់ធម៌ កិលេសទាំងពួងស្ងប់ស្ងាត់ ចិត្តពោរពេញដោយបីតិ សុខ និងសេចក្តីស្ងប់កាយស្ងប់ចិត្ត។',
    descEn: 'During hearing, defilements subside; the heart fills with radiant joy, peace, and spiritual tranquility.',
    fruitKm: 'សេចក្តីសុខសាន្តបច្ចុប្បន្ន',
    fruitEn: 'Immediate inner tranquility',
  },
]
</script>
