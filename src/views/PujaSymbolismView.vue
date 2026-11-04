<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🪷 {{ t('ខុទ្ទកនិកាយ & ធម្មបទគាថា · សក្ការបូជា', 'Khuddaka Nikāya & Dhammapada · Sacred Offerings') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('អត្ថន័យគ្រឿងសក្ការៈបូជា (ផ្កា ទៀន ធូប និងទឹក)', 'Symbolism of Buddhist Shrine Offerings') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'ការថ្វាយគ្រឿងសក្ការៈលើអាសនៈព្រះ មិនមែនជាការសែនព្រេនដើម្បីសុំលាភសំណាង ឬសុំឱ្យព្រះជួយនោះឡើយ។ គ្រឿងបូជានីមួយៗ (ផ្កា ទៀន ធូប ទឹក) គឺជាឧបករណ៍អប់រំចិត្ត និងជាកញ្ចក់ឆ្លុះបញ្ចាំងសច្ចធម៌នៃធម្មជាតិ ដើម្បីដាស់តឿនស្មារតីអ្នកបូជាឱ្យចម្រើននូវសីល សមាធិ និងបញ្ញា។',
            'Altar offerings in Buddhism are neither superstitious transactions nor bribes to appease a deity. Every element—fresh flowers, candles, incense, and clear water—serves as a visual meditation device and reminder of Dhamma: impermanence, wisdom, ethical virtue, and mental purity.'
          ) }}
        </p>
      </div>
    </section>

    <!-- 4 Sacred Offerings Grid -->
    <section class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="item in offerings"
          :key="item.id"
          class="card-paper p-6 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ item.icon }}
              </span>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold" :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
                {{ t(item.symbolK, item.symbolE) }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ t(item.titleK, item.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-3" :style="{ color: 'var(--accent)' }">
              {{ item.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(item.descK, item.descE) }}
            </p>

            <div class="p-3.5 rounded-2xl border space-y-1.5 text-xs mb-3"
                 :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
              <span class="font-semibold text-amber-600">📜 {{ t('ពាក្យបាលីរំឭកពេលថ្វាយ៖', 'Canonical Recitation & Meaning:') }}</span>
              <p class="italic font-serif" :style="{ color: 'var(--ink)' }">« {{ item.verse }} »</p>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(item.meaningK, item.meaningE) }}</p>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-200 text-xs">
            <strong>🧘 {{ t('ការពិចារណាផ្លូវចិត្ត៖ ', 'Contemplation: ') }}</strong>
            <span>{{ t(item.reflectionK, item.reflectionE) }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Paṭipatti-Pūjā (The Supreme Worship) -->
    <section class="card-paper p-6 sm:p-8 space-y-4 border text-center max-w-2xl mx-auto"
             :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
      <span class="text-3xl">☸️</span>
      <h3 class="text-lg font-bold font-serif" :style="{ color: 'var(--ink)' }">
        {{ t('បដិបត្តិបូជា ៖ កំពូលនៃការបូជាទាំងពួង', 'Paṭipatti-Pūjā: The Supreme Worship') }}
      </h3>
      <p class="text-xs sm:text-sm leading-relaxed italic font-serif" :style="{ color: 'var(--ink-muted)' }">
        {{ t(
          '« ម្នាលអានន្ទ ការបូជាព្រះតថាគត ដោយផ្កា ទៀន ធូប និងគ្រឿងក្រអូប (អាមិសបូជា) មិនទាន់ឈ្មោះថាជាការបូជាយ៉ាងខ្ពង់ខ្ពស់ឡើយ។ លុះត្រាតែភិក្ខុ ភិក្ខុនី ឧបាសក ឧបាសិកា ប្រព្រឹត្តបដិបត្តិធម៌សមគួរដល់ធម៌ រក្សាសីល និងចម្រើនភាវនា (បដិបត្តិបូជា) ទើបឈ្មោះថាបានបូជាយ៉ាងឧត្តុង្គឧត្តមបំផុតចំពោះព្រះតថាគត។ » — មហាបរិនិព្វានសូត្រ',
          '"Ananda, not by flowers, scents, or candles is the Tathāgata truly honored. But whoever practices the Dhamma in accordance with the Dhamma, observing precepts and cultivating the mind—they honor and revere the Tathāgata with the supreme offering." — Mahāparinibbāna Sutta'
        ) }}
      </p>
    </section>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const offerings = [
  {
    id: 'flower',
    icon: '🪷',
    symbolK: 'តំណាងភាពមិនទៀង (អនិច្ចំ)',
    symbolE: 'Impermanence (Anicca)',
    titleK: '១. ការបូជាផ្កាឈូក & ផ្កាស្រស់ (បុប្ផបូជា)',
    titleE: '1. Fresh Flowers (Puppha-Pūjā)',
    pali: 'Pupphapūjā',
    descK: 'ផ្កាឈូកពេលព្រឹកមានពណ៌ស្រស់ស្អាត ក្លិនក្រអូប តែលុះដល់ពេលរសៀលក៏ស្រពោន ជ្រុះរុះរោយរលត់ទៅ។',
    descE: 'Fresh flowers bloom with radiant beauty and perfume at dawn, yet inevitably wither, brown, and decay by dusk.',
    verse: 'Pupphaṁ milāyāti yathā idaṁ me, kāyo tathā yāti vināsabhāvaṁ',
    meaningK: 'ដូចផ្កានេះស្រពោនរុះរោយយ៉ាងណា រូបកាយរបស់ខ្ញុំក៏នឹងត្រូវរលាយសាបសូន្យទៅយ៉ាងនោះដែរ។',
    meaningE: 'Just as this bloom withers away, so too this body marches toward inevitable decay and dissolution.',
    reflectionK: 'រំសាយការសប្បាយភ្លើតភ្លើនក្នុងយុវវ័យ កុំជាប់ជំពាក់នឹងសម្រស់ស្បែកក្រៅ ត្រូវប្រញាប់សាងអំពើល្អ។',
    reflectionE: 'Shatters vanity of youth and physical infatuation; urges urgent dedication to goodness.'
  },
  {
    id: 'candle',
    icon: '🕯️',
    symbolK: 'តំណាងពន្លឺបញ្ញា (បញ្ញា)',
    symbolE: 'Wisdom (Paññā)',
    titleK: '២. ការបូជាទៀន & ប្រទីបជ្វាលា (ទីបបូជា)',
    titleE: '2. Candle & Light (Dīpa-Pūjā)',
    pali: 'Dīpapūjā',
    descK: 'អណ្ដាតភ្លើងទៀនដុតរំលាយខ្លួនឯងដើម្បីផ្ដល់ពន្លឺ កម្ចាត់ភាពងងឹតសូន្យសុងនៃរាត្រីឱ្យភ្លឺច្បាស់។',
    descE: 'The flame consumes its own wax to radiate warmth and light, driving away dark ignorance.',
    verse: 'Ghanasārappadittena dīpena tamadhaṁsinā, tilokadīpaṁ sambuddhaṁ pūjayāmi tamonudaṁ',
    meaningK: 'ខ្ញុំព្រះករុណាសូមបូជាចំពោះព្រះសម្មាសម្ពុទ្ធ ដែលជាប្រទីបបំភ្លឺលោកទាំង ៣ ដោយពន្លឺប្រទីបកម្ចាត់ងងឹតនេះ។',
    meaningE: 'With this bright flame that dispels gloom, I venerate the Fully Enlightened One, the lamp of the three worlds.',
    reflectionK: 'បណ្ដេញសេចក្ដីល្ងង់ខ្លៅ (មោហៈ) ចេញពីបេះដូង ដាស់ពន្លឺបញ្ញាដឹងខុសត្រូវក្នុងជីវិត។',
    reflectionE: 'Ignites inner discernment, driving the shadows of ignorance and confusion from the heart.'
  },
  {
    id: 'incense',
    icon: '🪔',
    symbolK: 'តំណាងក្លិនក្រអូបនៃសីល (សីល)',
    symbolE: 'Fragrance of Virtue (Sīla)',
    titleK: '៣. ការបូជាធូប & គ្រឿងក្រអូប (ធូបបូជា)',
    titleE: '3. Incense & Fragrance (Dhūpa-Pūjā)',
    pali: 'Gandha / Dhūpapūjā',
    descK: 'ក្លិនផ្កា និងខ្លឹមចន្ទន៍ធម្មតា ក្រអូបបានតែតាមទិសខ្យល់បក់ តែ «ក្លិននៃសីល» តែងផ្សាយទៅគ្រប់ទិសទាំងច្រាសខ្យល់។',
    descE: 'Worldly perfumes travel only downwind, but the sublime fragrance of ethical virtue permeates all directions against the wind.',
    verse: 'Gandhasambhārasambhūtaṁ gandhaṁ uttamagandhinaṁ, vandāmi jinasāsaṇaṁ santikaraṁ varaṁ',
    meaningK: 'ខ្ញុំព្រះករុណាសូមបូជាចំពោះព្រះធម៌ដ៏ស្ងប់វិសេស ដោយគ្រឿងក្រអូបដ៏ឧត្តមនេះ។',
    meaningE: 'With this fragrant incense, I venerate the sublime calming Dhamma of the Victorious Conqueror.',
    reflectionK: 'តាំងចិត្តរក្សាសីល ៥ ឱ្យបរិសុទ្ធ ព្រោះកេរ្តិ៍ឈ្មោះនៃអ្នកមានសីល តែងក្រអូបសាយភាយរហូតដល់ទេវលោក។',
    reflectionE: 'Inspires dedication to the 5 Precepts, knowing moral integrity perfumes the cosmos with respect.'
  },
  {
    id: 'water',
    icon: '💧',
    symbolK: 'តំណាងចិត្តស្អាតត្រជាក់ (ចិត្តបរិសុទ្ធ)',
    symbolE: 'Purity & Cool Peace (Nibbāna)',
    titleK: '៤. ការបូជាទឹកស្អាតត្រជាក់ (ឧទកបូជា)',
    titleE: '4. Pure Water (Udaka-Pūjā)',
    pali: 'Udakapūjā',
    descK: 'ទឹកថ្លាស្អាត គ្មានកករកខ្វក់ ជួយរំលត់ការស្រេកឃ្លាន និងនាំមកនូវភាពត្រជាក់ស្រស់ស្រាយដល់ជីវិត។',
    descE: 'Clear, unpolluted water slakes burning thirst and brings revitalizing coolness to weary life.',
    verse: 'Sugandhaṁ sīthalaṁ kantaṁ pasannamadhuvaṁ jalaṁ, sugatassa naragassa samāpajjāmi dhīmato',
    meaningK: 'ខ្ញុំព្រះករុណាសូមថ្វាយនូវទឹកដ៏ត្រជាក់ ថ្លាស្អាត និងផ្អែមពិសារនេះ ចំពោះព្រះសម្មាសម្ពុទ្ធ។',
    meaningE: 'I offer this pure, cooling, serene water to the Supreme Sugata, the Teacher of gods and humans.',
    reflectionK: 'លាងជម្រះកំហឹង ក្ដីលោភលន់ និងភាពកខ្វក់នៃចិត្ត តាំងចិត្តឱ្យត្រជាក់ស្រេបដូចទឹកស្ទឹងធម៌។',
    reflectionE: 'Cools the burning fever of anger and greed, training the heart in stainless serenity.'
  }
]
</script>
