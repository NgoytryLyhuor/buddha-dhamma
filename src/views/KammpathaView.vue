<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៧២ — កុសលកម្មបថ ១០ & អកុសលកម្មបថ ១០', 'GATHA 72 — 10 COURSES OF ACTION') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('កម្មបថ ១០ ៖ មាគ៌ាកម្មស មាគ៌ាកម្មខ្មៅ & ផលវិបាកឆ្លងជាតិ', 'The 10 Wholesome & Unwholesome Courses of Action (Kammapatha)') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('កម្មបថ សំដៅលើផ្លូវនៃអំពើ ឬដំណើរនៃការប្រព្រឹត្តកម្មដែលពេញកម្រិត អាចនាំឱ្យសត្វលោកបដិសន្ធិក្នុងសុគតិភព ឬអបាយភូមិ និងទទួលផលវិបាកយ៉ាងជាក់ស្តែង។ នៅក្នុងចុន្ទកម្មារបុត្តសូត្រ (AN 10.176) ព្រះសម្មាសម្ពុទ្ធទ្រង់ត្រាស់ពន្យល់ដល់ជាងទងឈ្មោះចុន្ទ ថា ភាពស្អាតស្អំ ឬភាពសៅហ្មងនៃមនុស្ស មិនមែនកើតពីការចុះងូតទឹកលាងបាបក្នុងទន្លេគង្គាឡើយ តែស្ថិតនៅលើកម្មបថ ១០ ប្រការ ដែលប្រព្រឹត្តទៅតាមទ្វារទាំង ៣ គឺ កាយកម្ម ៣, វចីកម្ម ៤, និងមនោកម្ម ៣។', 'Kammapatha designates the ten definitive pathways of intentional action through which moral character is forged and rebirth in heavenly or woeful realms is determined. In the Cunda Kammaraputta Sutta (AN 10.176), the Buddha explained to Cunda the smith that spiritual purification does not arise from ritual bathing in sacred rivers, but from mastering the ten pathways of wholesome conduct across body (3), speech (4), and mind (3).') }}
    </p>

    <!-- Pali Gatha Box -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«តិវិធំ កាយេន អកុសលកម្មបថំ ហោតិ, ចតុព្វិធំ វាចាយ អកុសលកម្មបថំ ហោតិ, តិវិធំ មនសា អកុសលកម្មបថំ ហោតិ។»', '"Threefold is unwholesome action by body, fourfold by speech, and threefold by mind. Likewise threefold is wholesome action by body, fourfold by speech, and threefold by mind." — Aṅguttara Nikāya 10.176') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— ចុន្ទសូត្រ អង្គុត្តរនិកាយ ទសកនិបាត', '— Cunda Sutta, Aṅguttara Nikāya') }}
      </p>
    </div>

    <!-- Toggle / Side-by-Side Category Filter -->
    <div class="mt-8 flex items-center justify-between gap-2 flex-wrap">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>⚖️</span>
        <span>{{ t('កម្មបថទាំង ១០ តាមទ្វារទាំង ៣', 'The 10 Pathways Across 3 Doors') }}</span>
      </h3>
      <div class="flex items-center gap-1.5 text-xs">
        <button
          type="button"
          class="px-2.5 py-1 rounded-lg border font-bold cursor-pointer transition"
          :class="doorFilter === 'all' ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30' : 'border-stone-300 dark:border-stone-700'"
          @click="doorFilter = 'all'"
        >
          {{ t('ទាំងអស់ (១០)', 'All (10)') }}
        </button>
        <button
          type="button"
          class="px-2.5 py-1 rounded-lg border font-bold cursor-pointer transition"
          :class="doorFilter === 'body' ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30' : 'border-stone-300 dark:border-stone-700'"
          @click="doorFilter = 'body'"
        >
          {{ t('កាយកម្ម (៣)', 'Body (3)') }}
        </button>
        <button
          type="button"
          class="px-2.5 py-1 rounded-lg border font-bold cursor-pointer transition"
          :class="doorFilter === 'speech' ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30' : 'border-stone-300 dark:border-stone-700'"
          @click="doorFilter = 'speech'"
        >
          {{ t('វចីកម្ម (៤)', 'Speech (4)') }}
        </button>
        <button
          type="button"
          class="px-2.5 py-1 rounded-lg border font-bold cursor-pointer transition"
          :class="doorFilter === 'mind' ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30' : 'border-stone-300 dark:border-stone-700'"
          @click="doorFilter = 'mind'"
        >
          {{ t('មនោកម្ម (៣)', 'Mind (3)') }}
        </button>
      </div>
    </div>

    <!-- Comparative Actions Cards -->
    <div class="mt-4 space-y-4">
      <div
        v-for="item in filteredActions"
        :key="item.id"
        class="card-paper p-5 rounded-xl border flex flex-col justify-between"
      >
        <div>
          <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
            <div class="flex items-center gap-2">
              <span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                {{ item.num }}
              </span>
              <span class="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                {{ item.door }}
              </span>
            </div>
            <span class="text-2xl">{{ item.icon }}</span>
          </div>

          <!-- Dual Columns: Akusala vs Kusala -->
          <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
            <!-- Dark Karma -->
            <div class="p-3.5 rounded-xl border bg-rose-500/5 border-rose-500/20">
              <div class="flex items-center justify-between pb-1.5 border-b border-rose-500/20">
                <strong class="font-bold text-rose-600 dark:text-rose-400">
                  - {{ t('អកុសលកម្មបថ (ផ្លូវបាប)', 'Akusala Course') }}
                </strong>
                <span class="text-[10px] font-mono text-stone-500">{{ item.akusalaPali }}</span>
              </div>
              <p class="font-bold text-xs mt-2" :style="{ color: 'var(--ink)' }">
                {{ t(item.akusalaKm, item.akusalaEn) }}
              </p>
              <p class="text-stone-600 dark:text-stone-400 mt-1 leading-relaxed text-xs">
                {{ t(item.akusalaDescKm, item.akusalaDescEn) }}
              </p>
              <p class="text-[11px] text-rose-600 dark:text-rose-400 mt-2 font-medium">
                ⚠️ {{ t(item.akusalaVipakaKm, item.akusalaVipakaEn) }}
              </p>
            </div>

            <!-- Bright Karma -->
            <div class="p-3.5 rounded-xl border bg-emerald-500/5 border-emerald-500/20">
              <div class="flex items-center justify-between pb-1.5 border-b border-emerald-500/20">
                <strong class="font-bold text-emerald-600 dark:text-emerald-400">
                  + {{ t('កុសលកម្មបថ (ផ្លូវបុណ្យ)', 'Kusala Course') }}
                </strong>
                <span class="text-[10px] font-mono text-stone-500">{{ item.kusalaPali }}</span>
              </div>
              <p class="font-bold text-xs mt-2" :style="{ color: 'var(--ink)' }">
                {{ t(item.kusalaKm, item.kusalaEn) }}
              </p>
              <p class="text-stone-600 dark:text-stone-400 mt-1 leading-relaxed text-xs">
                {{ t(item.kusalaDescKm, item.kusalaDescEn) }}
              </p>
              <p class="text-[11px] text-emerald-600 dark:text-emerald-400 mt-2 font-medium">
                ✨ {{ t(item.kusalaVipakaKm, item.kusalaVipakaEn) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const doorFilter = ref('all')

const actions = [
  // Bodily (3)
  {
    id: 1,
    num: '១',
    doorType: 'body',
    door: 'កាយទ្វារ (Bodily Action)',
    icon: '🗡️',
    akusalaPali: 'Pāṇātipātā',
    akusalaKm: 'បាណាតិបាត (ការសម្លាប់ ឬបៀតបៀនជីវិតសត្វ)',
    akusalaEn: 'Taking Life (Pāṇātipāta)',
    akusalaDescKm: 'ការផ្តាច់ជីវិតសត្វដោយចេតនា មានកាំបិត អាវុធ ឬពិស។',
    akusalaDescEn: 'Intentionally destroying the life of any living being.',
    akusalaVipakaKm: 'វិបាក ៖ អាយុខ្លី មានជំងឺច្រើន និងធ្លាក់នរក។',
    akusalaVipakaEn: 'Fruit: Short life span, chronic diseases, rebirth in hell.',
    kusalaPali: 'Pāṇātipātā veramaṇī',
    kusalaKm: 'វៀរចាកការសម្លាប់ & មានក្តីមេត្តាជួយសង្គ្រោះជីវិត',
    kusalaEn: 'Abstaining from killing & protecting life',
    kusalaDescKm: 'ដាក់ចុះនូវអាវុធ មានចិត្តមេត្តាអាណិតអាសូរដល់សព្វសត្វ។',
    kusalaDescEn: 'Laying aside weapons, harboring compassionate protection for all.',
    kusalaVipakaKm: 'វិបាក ៖ អាយុយឺនយូរ រាងកាយរឹងមាំ សុខភាពល្អ។',
    kusalaVipakaEn: 'Fruit: Longevity, robust health, vitality.',
  },
  {
    id: 2,
    num: '២',
    doorType: 'body',
    door: 'កាយទ្វារ (Bodily Action)',
    icon: '💰',
    akusalaPali: 'Adinnādānā',
    akusalaKm: 'អទិន្នាទាន (ការលួចទ្រព្យ ឬកិបកេង)',
    akusalaEn: 'Stealing & Embezzlement (Adinnādāna)',
    akusalaDescKm: 'ការយកទ្រព្យដែលម្ចាស់គេមិនបានឱ្យ ដោយការលួច ប្លន់ ឬឆបោក។',
    akusalaDescEn: 'Taking what is not given by stealth, force, fraud, or bribery.',
    akusalaVipakaKm: 'វិបាក ៖ ក្រីក្រ ទ្រព្យវិនាសអន្តរាយដោយភ្លើង ទឹក ឬចោរ។',
    akusalaVipakaEn: 'Fruit: Poverty, loss of possessions through disaster.',
    kusalaPali: 'Adinnādānā veramaṇī',
    kusalaKm: 'វៀរចាកការលួច & ចែករំលែកទានដោយសុចរិត',
    kusalaEn: 'Abstaining from theft & practicing righteous giving',
    kusalaDescKm: 'គោរពទ្រព្យសម្បត្តិអ្នកដទៃ និងប្រកបរបរចិញ្ចឹមជីវិតដោយស្មោះត្រង់។',
    kusalaDescEn: 'Respecting others\' property and earning livelihood cleanly.',
    kusalaVipakaKm: 'វិបាក ៖ សម្បូរទ្រព្យសម្បត្តិ គ្មានអ្នកណាអាចបំផ្លាញបាន។',
    kusalaVipakaEn: 'Fruit: Abundant wealth, secure possessions.',
  },
  {
    id: 3,
    num: '៣',
    doorType: 'body',
    door: 'កាយទ្វារ (Bodily Action)',
    icon: '💍',
    akusalaPali: 'Kāmesumicchācārā',
    akusalaKm: 'កាមេសុមិច្ឆាចារ (ការផិតក្បត់ & ប្រព្រឹត្តខុសក្នុងកាម)',
    akusalaEn: 'Sexual Misconduct & Adultery (Kāmesumicchācāra)',
    akusalaDescKm: 'ការលួចលាក់មានស្នេហាផិតក្បត់នឹងប្តីប្រពន្ធអ្នកដទៃ ឬបុគ្គលហាមឃាត់។',
    akusalaDescEn: 'Violating boundaries, adultery, betraying family trust for sensual lust.',
    akusalaVipakaKm: 'វិបាក ៖ គ្រួសារបែកបាក់ គ្មានអ្នកស្រឡាញ់ពិត និងធ្លាក់នរក។',
    akusalaVipakaEn: 'Fruit: Bitter domestic division, unrequited love, rebirth in lower realms.',
    kusalaPali: 'Kāmesumicchācārā veramaṇī',
    kusalaKm: 'វៀរចាកកាមេសុ & ស្មោះត្រង់នឹងគូស្រករមួយនឹងមួយ',
    kusalaEn: 'Sexual fidelity & loyalty in marriage',
    kusalaDescKm: 'ពេញចិត្តនឹងស្វាមីភរិយាខ្លួនឯង មានភក្តីភាពរឹងមាំក្នុងគ្រួសារ។',
    kusalaDescEn: 'Contentment with one\'s spouse and steadfast moral integrity.',
    kusalaVipakaKm: 'វិបាក ៖ គ្រួសារកក់ក្តៅ មានបរិវារស្មោះត្រង់ និងកិត្តិយសថ្លៃថ្នូរ។',
    kusalaVipakaEn: 'Fruit: Harmonious family, trustworthy partners and allies.',
  },

  // Verbal (4)
  {
    id: 4,
    num: '៤',
    doorType: 'speech',
    door: 'វចីទ្វារ (Verbal Action)',
    icon: '🤥',
    akusalaPali: 'Musāvādā',
    akusalaKm: 'មុសាវាទ (ការភូតកុហក)',
    akusalaEn: 'Falsehood & Lying (Musāvāda)',
    akusalaDescKm: 'ការនិយាយបំភ្លៃការពិត បន្លំ ដើម្បីផលប្រយោជន៍ ឬគេចវេះពីកំហុស។',
    akusalaDescEn: 'Intentionally distorting facts, deceiving, or concealing truth.',
    akusalaVipakaKm: 'វិបាក ៖ បាត់បង់ការទុកចិត្ត គ្មាននរណាជឿពាក្យ និងមានក្លិនមាត់ស្អុយ។',
    akusalaVipakaEn: 'Fruit: Total loss of trust, being disbelieved, foul breath.',
    kusalaPali: 'Musāvādā veramaṇī',
    kusalaKm: 'វៀរចាកការកុហក & និយាយតែពាក្យពិត (សច្ចវាចា)',
    kusalaEn: 'Speaking truthful and reliable speech',
    kusalaDescKm: 'និយាយត្រង់ទៅត្រង់មក ពាក្យគួរជាទីទុកចិត្ត មិនបោកបញ្ឆោត។',
    kusalaDescEn: 'Speaking truthfully, dependably, transparently at all times.',
    kusalaVipakaKm: 'វិបាក ៖ ពាក្យសំដីមានទម្ងន់ មនុស្សទាំងអស់គោរពនិងទុកចិត្ត។',
    kusalaVipakaEn: 'Fruit: Authority of speech, universal credibility and respect.',
  },
  {
    id: 5,
    num: '៥',
    doorType: 'speech',
    door: 'វចីទ្វារ (Verbal Action)',
    icon: '🗣️',
    akusalaPali: 'Pisuṇāvācā',
    akusalaKm: 'បិសុណាវាចា (ការនិយាយចាក់រុក & បំបែកបំបាក់)',
    akusalaEn: 'Malicious Slander & Gossip (Pisuṇāvācā)',
    akusalaDescKm: 'យកសំដីពីអ្នកនេះទៅប្រាប់អ្នកនោះ ដើម្បីឱ្យគេស្អប់គ្នា និងបែកបាក់។',
    akusalaDescEn: 'Carrying tales between parties to divide friendships and stoke enmity.',
    akusalaVipakaKm: 'វិបាក ៖ ត្រូវគេក្បត់ ព្រាត់ប្រាសមិត្តភក្តិ និងឯកោក្នុងជីវិត។',
    akusalaVipakaEn: 'Fruit: Betrayal by companions, bitter isolation and loneliness.',
    kusalaPali: 'Pisuṇāvācā veramaṇī',
    kusalaKm: 'វៀរចាកការចាក់រុក & និយាយផ្សះផ្សាសាមគ្គី',
    kusalaEn: 'Promoting concord, unity, and healing reconciliations',
    kusalaDescKm: 'និយាយជួយសម្រុះសម្រួលឱ្យអ្នកឈ្លោះគ្នាបានត្រូវរ៉ូវគ្នាវិញ។',
    kusalaDescEn: 'Reconciling fractured parties and rejoicing in mutual harmony.',
    kusalaVipakaKm: 'វិបាក ៖ មានមិត្តភក្តិល្អៗស្មោះត្រង់ គ្មាននរណាអាចបំបែកបាន។',
    kusalaVipakaEn: 'Fruit: Enduring, unbreakable friendships and loyal companionship.',
  },
  {
    id: 6,
    num: '៦',
    doorType: 'speech',
    door: 'វចីទ្វារ (Verbal Action)',
    icon: '🤬',
    akusalaPali: 'Pharusāvācā',
    akusalaKm: 'ផរុសវាចា (ការជេរប្រទេច & សំដីទ្រគោះបោះបោក)',
    akusalaEn: 'Harsh, Cruel, & Abusive Speech (Pharusāvācā)',
    akusalaDescKm: 'ប្រើពាក្យគំរោះគំរើយ ជេរ មាក់ងាយ ដែលចាក់ដោតបេះដូងឱ្យគេឈឺចាប់។',
    akusalaDescEn: 'Scolding, cursing, sarcastic insults designed to wound and humiliate.',
    akusalaVipakaKm: 'វិបាក ៖ តែងឮតែពាក្យអាក្រក់ មានសត្រូវច្រើន និងមានសម្លេងស្អក។',
    akusalaVipakaEn: 'Fruit: Surrounded by hostile speech, numerous enemies, harsh voice.',
    kusalaPali: 'Pharusāvācā veramaṇī',
    kusalaKm: 'វៀរចាកសំដីអាក្រក់ & និយាយពាក្យផ្អែមល្ហែម ពិរោះពិសា',
    kusalaEn: 'Speaking gentle, pleasant, affectionate words',
    kusalaDescKm: 'ប្រើពាក្យទន់ភ្លន់ គួរឱ្យស្រឡាញ់ ជ្រួតជ្រាបដល់បេះដូងអ្នកស្តាប់។',
    kusalaDescEn: 'Using gentle, polite, soothing words that penetrate the heart sweetly.',
    kusalaVipakaKm: 'វិបាក ៖ មានសំឡេងពិរោះ នរណាក៏ចូលចិត្តស្តាប់ និងស្រឡាញ់រាប់អាន។',
    kusalaVipakaEn: 'Fruit: Melodious voice, warmth and love from everyone met.',
  },
  {
    id: 7,
    num: '៧',
    doorType: 'speech',
    door: 'វចីទ្វារ (Verbal Action)',
    icon: '🦜',
    akusalaPali: 'Samphappalāpā',
    akusalaKm: 'សម្ផប្បលាភ (ការនិយាយរោយរាយ & ឥតប្រយោជន៍)',
    akusalaEn: 'Idle Chatter & Frivolous Talk (Samphappalāpa)',
    akusalaDescKm: 'និយាយរឿងឥតប្រយោជន៍ គ្មានខ្លឹមសារ ខាតពេលវេលា និងរំខានសតិ។',
    akusalaDescEn: 'Aimless babbling, gossip, superficial banter that wastes valuable hours.',
    akusalaVipakaKm: 'វិបាក ៖ និយាយអ្វីគ្មាននរណាជឿ គ្មានឥទ្ធិពលក្នុងសង្គម។',
    akusalaVipakaEn: 'Fruit: Words carrying zero weight; ignored and dismissed by peers.',
    kusalaPali: 'Samphappalāpā veramaṇī',
    kusalaKm: 'វៀរចាកសំដីរោយរាយ & និយាយតែរឿងមានប្រយោជន៍ត្រូវកាល',
    kusalaEn: 'Timely, principled, purposeful speech',
    kusalaDescKm: 'និយាយមានគោលដៅ មានហេតុផល សមស្របតាមកាលវេលា។',
    kusalaDescEn: 'Speaking words that are meaningful, timely, reasoned, and grounded in truth.',
    kusalaVipakaKm: 'វិបាក ៖ ពាក្យសំដីមានតម្លៃ មនុស្សទទួលស្គាល់ជាអ្នកប្រាជ្ញ។',
    kusalaVipakaEn: 'Fruit: Respected counsel, esteemed as an insightful leader.',
  },

  // Mental (3)
  {
    id: 8,
    num: '៨',
    doorType: 'mind',
    door: 'មនោទ្វារ (Mental Action)',
    icon: '👁️‍🗨️',
    akusalaPali: 'Abhijjhā',
    akusalaKm: 'អភិជ្ឈា (សេចក្តីសម្លឹងរំពៃចង់បានទ្រព្យគេ)',
    akusalaEn: 'Covetousness & Coveting (Abhijjhā)',
    akusalaDescKm: 'ចិត្តសម្លឹងឃើញរបស់គេ ហើយគិតក្នុងចិត្តថា «ធ្វើម្តេចនឹងបានជារបស់អញ!»។',
    akusalaDescEn: 'Scheming greed eyeing others\' wealth, yearning to possess what is not ours.',
    akusalaVipakaKm: 'វិបាក ៖ កើតជាប្រេតឃ្លានជានិច្ច ចិត្តមិនដែលឆ្អែត គ្មានក្តីសុខ។',
    akusalaVipakaEn: 'Fruit: Rebirth as hungry ghost, insatiable psychological starvation.',
    kusalaPali: 'Anabhijjhā',
    kusalaKm: 'អនភិជ្ឈា (មិនលោភលន់ & សន្តោសក្នុងទ្រព្យខ្លួន)',
    kusalaEn: 'Non-covetousness & contented joy',
    kusalaDescKm: 'រីករាយនឹងទ្រព្យដែលខ្លួនរកបានដោយធម៌ មិនប៉ងទ្រព្យអ្នកដទៃ។',
    kusalaDescEn: 'Contentment with honest earnings, wishing prosperity upon others.',
    kusalaVipakaKm: 'វិបាក ៖ ចិត្តស្ងប់ សន្តោស គេងលក់ស្រួល គ្មានការក្តៅក្រហាយ។',
    kusalaVipakaEn: 'Fruit: Peaceful sleep, profound inner fullness and serenity.',
  },
  {
    id: 9,
    num: '៩',
    doorType: 'mind',
    door: 'មនោទ្វារ (Mental Action)',
    icon: '😡',
    akusalaPali: 'Byāpāda',
    akusalaKm: 'ព្យាបាទ (គំនុំគុំកួន ចង់ឱ្យគេវិនាស)',
    akusalaEn: 'Ill-will & Malice (Byāpāda)',
    akusalaDescKm: 'គិតស្អប់ ចងគំនុំ ប្រាថ្នាឱ្យអ្នកដទៃជួបគ្រោះថ្នាក់ ស្លាប់ ឬវិនាសហិនហោច។',
    akusalaDescEn: 'Harboring malice, wishing ruin, disease, or disaster upon adversaries.',
    akusalaVipakaKm: 'វិបាក ៖ មុខមាត់អាក្រក់ ចិត្តក្តៅក្រហាយ ធ្លាក់នរកអវិចី។',
    akusalaVipakaEn: 'Fruit: Ugly appearance, tormented mind, descent into painful realms.',
    kusalaPali: 'Abyāpāda',
    kusalaKm: 'អព្យាបាទ (មេត្តាធម៌ ប្រាថ្នាឱ្យសត្វទាំងអស់បានសុខ)',
    kusalaEn: 'Goodwill, loving-kindness, & forgiveness',
    kusalaDescKm: 'ផ្សាយក្តីស្រឡាញ់ និងការអាណិតដល់មនុស្សគ្រប់គ្នា សូម្បីសត្រូវ។',
    kusalaDescEn: 'Radiating unconditional friendliness and safety toward all living beings.',
    kusalaVipakaKm: 'វិបាក ៖ ទឹកមុខស្រស់ថ្លា ទេវតាស្រឡាញ់ការពារ ស្លាប់ទៅកើតសួគ៌។',
    kusalaVipakaEn: 'Fruit: Radiant countenance, protected by devas, rebirth in heavenly realms.',
  },
  {
    id: 10,
    num: '១០',
    doorType: 'mind',
    door: 'មនោទ្វារ (Mental Action)',
    icon: '🧭',
    akusalaPali: 'Micchādiṭṭhi',
    akusalaKm: 'មិច្ឆាទិដ្ឋិ (ការយល់ខុសថាកម្មផលគ្មាន ជាតិមុខគ្មាន)',
    akusalaEn: 'Wrong View (Micchādiṭṭhi)',
    akusalaDescKm: 'ជឿថាបុណ្យបាបគ្មានផល ការដឹងគុណឪពុកម្តាយគ្មានប្រយោជន៍ គ្មានអរិយបុគ្គល។',
    akusalaDescEn: 'Denying karmic cause and effect, denying moral duty and future rebirths.',
    akusalaVipakaKm: 'វិបាក ៖ ធ្លាក់ក្នុងអបាយភូមិយ៉ាងជ្រៅ ពិបាកងើបឡើងវិញជាទីបំផុត។',
    akusalaVipakaEn: 'Fruit: Deepest descent into hells; stubborn blindness across eons.',
    kusalaPali: 'Sammādiṭṭhi',
    kusalaKm: 'សម្មាទិដ្ឋិ (ការយល់ត្រូវតាមច្បាប់កម្មផល & អរិយសច្ច)',
    kusalaEn: 'Right View (Sammādiṭṭhi)',
    kusalaDescKm: 'យល់ច្បាស់ថា ធ្វើល្អបានល្អ ធ្វើអាក្រក់បានអាក្រក់ ជឿលើការត្រាស់ដឹង។',
    kusalaDescEn: 'Clear discernment of moral causality, intentional kamma, and liberating truth.',
    kusalaVipakaKm: 'វិបាក ៖ កើតជាមនុស្សមានប្រាជ្ញា ជួបព្រះពុទ្ធសាសនា និងសម្រេចព្រះនិព្វាន។',
    kusalaVipakaEn: 'Fruit: Rebirth with sharp intelligence, meeting the Dhamma, realizing Nibbāna.',
  },
]

const filteredActions = computed(() => {
  if (doorFilter.value === 'all') return actions
  return actions.filter(a => a.doorType === doorFilter.value)
})
</script>
