<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៩១ — មហាវេស្សន្តរ & មហាទាន ៥', 'GATHA 91 — VESSANTARA & 5 GREAT SACRIFICES') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ព្រះវេស្សន្តរ & មហាទាន ៥ យ៉ាង ៖ កំពូលទានបារមីនៃព្រះពោធិសត្វ', 'Vessantara Jātaka & The 5 Supreme Gifts (Mahāpariccāga)') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('មហាវេស្សន្តរជាតក គឺជាកំពូលជាតកទី ១០ ក្នុងចំណោមទសជាតក ដែលពិពណ៌នាអំពីអតីតជាតិចុងក្រោយបង្អស់របស់ព្រះសម្មាសម្ពុទ្ធកាលនៅជាព្រះពោធិសត្វ មុននឹងទ្រង់យាងចុះមកប្រសូតជាព្រះសិទ្ធត្ថរាជកុមារ។ ក្នុងជាតិនេះ ព្រះវេស្សន្តរបានបំពេញ «ទានបរមត្ថបារមី» ដល់កម្រិតកំពូល ដោយទ្រង់ហ៊ានលះបង់នូវអ្វីៗគ្រប់យ៉ាងដែលមនុស្សសាមញ្ញមិនអាចលះបង់បាន រួមទាំងរាជសម្បត្តិ ដំរីមង្គល កូនប្រុស កូនស្រី និងព្រះមហេសីជាទីស្រឡាញ់ស្មើបេះដូង ដើម្បីជាថ្នូរនឹងការត្រាស់ដឹងនូវសព្វញ្ញុតញ្ញាណ ស្រោចស្រង់សត្វលោកចាកសង្សារវដ្ត។ ការលះបង់ដ៏អស្ចារ្យនេះហៅថា «មហាទាន ៥ យ៉ាង» ឬ មហាបរិច្ចាគ ៥។', 'The Mahā Vessantara Jātaka is the crowning narrative of the Ten Great Jātakas, depicting the final earthly life of the Bodhisatta before his rebirth as Prince Siddhattha. In this lifetime, King Vessantara perfected Dana Paramattha Parami (the ultimate perfection of giving) to its sublime zenith. He relinquished treasures, sacred elephants, his beloved children, and his devoted queen Maddī—sacrificing the dearest bonds of human affection solely to attain Supreme Enlightenment and deliver humanity across the ocean of suffering. These acts are celebrated as the Five Great Sacrifices (Mahāpariccāga).') }}
    </p>

    <!-- Pali Gatha Box from Vessantara Jataka -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ន មេ ទេស្សា ឧភោ បុត្តា មទ្ទី ទេវី ន ទេស្សិយា សព្វញ្ញុតំ បិយំ មយ្ហំ តស្មា បិយេ អទាសហន្តិ។»', '"Neither of my two children was disliked by me, nor was Queen Maddī disliked. But Omniscient Buddhahood was dearer to me: therefore gave I away that which was dearest." — Khuddaka Nikāya, Cariyāpiṭaka') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— ចរិយាបិដក ខុទ្ទកនិកាយ ព្រះត្រៃបិដក', '— Cariyāpiṭaka, Khuddaka Nikāya') }}
      </p>
    </div>

    <!-- The 5 Mahapariccaga Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>👑</span>
        <span>{{ t('មហាទានទាំង ៥ យ៉ាង (មហាបរិច្ចាគ ៥)', 'The 5 Great Sacrifices (Mahāpariccāga)') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="d in gifts"
          :key="d.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
          :class="d.span ? 'md:col-span-2 lg:col-span-1' : ''"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                  {{ d.num }}
                </span>
                <div>
                  <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">{{ t(d.titleKm, d.titleEn) }}</h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ d.pali }}</p>
                </div>
              </div>
              <span class="text-2xl">{{ d.icon }}</span>
            </div>

            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(d.descKm, d.descEn) }}
            </p>
          </div>

          <!-- Bodhisatta Intent -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/20">
              <span class="font-bold text-amber-700 dark:text-amber-300 block mb-0.5">
                💎 {{ t('អត្ថន័យធម៌ ៖', 'Spiritual Signification:') }}
              </span>
              <span class="text-stone-600 dark:text-stone-400">{{ t(d.meaningKm, d.meaningEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- The Moral Lesson Section -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🌏</span>
        <span>{{ t('មហាកក្រើកផែនដី ៖ ធម្មទេសនាសម្រាប់ជីវិតប្រចាំថ្ងៃ', 'When the Earth Trembled: Practical Lessons for Daily Life') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('រាល់ពេលដែលព្រះវេស្សន្តរទ្រង់ប្រទានមហាទានម្តងៗ ផែនដីកម្រាស់ ២ សែន ៤ ម៉ឺនយោជន៍បានកក្រើករំពើកជាសក្ខីភាពនៃអានុភាពបារមី។ ធម៌នេះបង្រៀនយើងថា ៖ ការលះបង់ភាពអាត្មានិយម ការចេះចែករំលែកដោយមិនស្តាយក្រោយ និងការតម្កល់គោលដៅឧត្តមលើសផលប្រយោជន៍ផ្ទាល់ខ្លួន គឺជាកម្លាំងដ៏មហិមាដែលអាចកែប្រែជោគវាសនារបស់មនុស្សលោកបាន។', 'Each time Vessantara made these immense sacrifices, the vast earth trembled in reverent homage to the power of pure virtue. This timeless narrative teaches us that overcoming selfish greed, practicing detachment without remorse, and elevating noble ideals above personal comfort are the supreme spiritual forces capable of transforming human destiny.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const gifts = [
  {
    id: 1,
    num: '១',
    titleKm: 'ធនបរិច្ចាគ (ការលះបង់ទ្រព្យ)',
    titleEn: 'Dhana-pariccāga (Sacrifice of Wealth)',
    pali: 'Dhana-pariccāga',
    icon: '🪙',
    descKm: 'ការប្រទានរាជសម្បត្តិ មាស ប្រាក់ កែវកង និងដំរីបច្ច័យនាគេន្ទ្រដែលជាដំរីមង្គលនាំទឹកភ្លៀង ដល់ពួកព្រាហ្មណ៍កលិង្គរដ្ឋ រហូតត្រូវបណ្តេញចេញពីនគរ។',
    descEn: 'Relinquishing vast royal riches and the sacred rain-bringing white elephant to suffering Brahmins, accepting exile into the wild forest.',
    meaningKm: 'លះបង់សេចក្តីស្វិតស្វាញ និងការជាប់ជំពាក់នឹងវត្ថុក្រៅខ្លួន។',
    meaningEn: 'Uproots greed and material possessiveness completely.',
    span: false,
  },
  {
    id: 2,
    num: '២',
    titleKm: 'អង្គបរិច្ចាគ (ការលះបង់អវយវៈ)',
    titleEn: 'Aṅga-pariccāga (Sacrifice of Limbs)',
    pali: 'Aṅga-pariccāga',
    icon: '🩸',
    descKm: 'ការលះបង់សាច់ ឈាម ភ្នែក និងអវយវៈរាងកាយដល់អ្នកដទៃ (ដូចកាលជាតិជាស្តេចសិវិរាជដែលទ្រង់បានខ្វេះព្រះនេត្រទាំងពីរថ្វាយព្រាហ្មណ៍)។',
    descEn: 'Willingness to sacrifice flesh, blood, eyes, or limbs to relieve the suffering of another living being without malice.',
    meaningKm: 'លះបង់ការស្រឡាញ់រាងកាយ ឃើញកាយគ្រាន់តែជាធាតុប្រជុំ។',
    meaningEn: 'Shatters attachment to the physical body and beauty.',
    span: false,
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'ជីវិតបរិច្ចាគ (ការលះបង់ជីវិត)',
    titleEn: 'Jīvita-pariccāga (Sacrifice of Life)',
    pali: 'Jīvita-pariccāga',
    icon: '🕊️',
    descKm: 'ការហ៊ានបូជាជីវិតខ្លួនឯង ដើម្បីរក្សាសច្ចធម៌ ឬសង្គ្រោះជីវិតសត្វដទៃ (ដូចកាលជាតិជាមេស្វា ឬពោធិសត្វដែលលោតឱ្យមេខ្លាឃ្លានស៊ីជាអាហារ)។',
    descEn: 'Readiness to surrender life itself for the preservation of Dhamma and compassion for fragile beings.',
    meaningKm: 'លះបង់សេចក្តីភ័យខ្លាចចំពោះសេចក្តីស្លាប់ ឈានដល់អមតធម៌។',
    meaningEn: 'Conquers the ultimate primal fear—death itself.',
    span: false,
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'បុត្តបរិច្ចាគ (ការលះបង់កូនជាទីស្រឡាញ់)',
    titleEn: 'Putta-pariccāga (Sacrifice of Children)',
    pali: 'Putta-pariccāga',
    icon: '👶',
    descKm: 'ការប្រទានព្រះរាជបុត្រ ជាលី និងកណ្ហាជិនា ដល់ជូជកព្រាហ្មណ៍។ ទោះបីបេះដូងឈឺចាប់ស្ទើរប្រេះធ្លាយ ក៏ទ្រង់សង្កត់ចិត្តដើម្បីបំពេញពោធិញ្ញាណ។',
    descEn: 'Giving his beloved royal son Jāli and daughter Kaṇhā to the Brahmin Jūjaka, triumphing over paternal attachment for cosmic awakening.',
    meaningKm: 'កាត់ផ្តាច់ចំណងស្នេហាគ្រួសារដែលជាចំណងស្វិតបំផុតរបស់មនុស្សលោក។',
    meaningEn: 'Dissolves the strongest human bond: parental clinging.',
    span: false,
  },
  {
    id: 5,
    num: '៥',
    titleKm: 'ភរិយាបរិច្ចាគ (ការលះបង់ភរិយា)',
    titleEn: 'Bhariyā-pariccāga (Sacrifice of Wife)',
    pali: 'Bhariyā-pariccāga',
    icon: '💍',
    descKm: 'ការប្រទានព្រះនាងមទ្រី ដែលជាព្រះមហេសីដ៏ស្មោះស្ម័គ្រ ដល់ព្រាហ្មណ៍ (ដែលជាព្រះឥន្ទ្រក្លែងកាយមកសាកល្បងព្រះទ័យ) ដោយចិត្តជ្រះថ្លាឥតស្តាយ។',
    descEn: 'Offering Queen Maddī, his faithful lifelong companion, to a Brahmin seeker (Sakka in disguise), achieving unsurpassable detachment.',
    meaningKm: 'កំពូលនៃទានបរមត្ថបារមី គ្មានអ្វីសេសសល់ដែលមិនអាចលះបង់បានឡើយ។',
    meaningEn: 'The ultimate summit of renunciation: nothing kept back.',
    span: true,
  },
]
</script>
