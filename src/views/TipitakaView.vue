<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៤៥ — ព្រះត្រៃបិដក ១១០ ភាគ', 'GATHA 45 — THE 110-VOLUME TIPITAKA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('រចនាសម្ព័ន្ធព្រះត្រៃបិដក ១១០ ភាគ', 'The Complete 110-Volume Tipitaka Structure') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ព្រះត្រៃបិដក ជាឃ្លាំងផ្ទុកនូវព្រះធម្មវិន័យទាំង ៨៤,០០០ ធម្មក្ខន្ធ របស់ព្រះសម្មាសម្ពុទ្ធ។ នៅក្នុងប្រទេសកម្ពុជា គណៈកម្មការប្រែព្រះត្រៃបិដកនៃវិទ្យាស្ថានពុទ្ធសាសនបណ្ឌិត្យ (ដឹកនាំដោយសម្ដេចព្រះសង្ឃរាជ ជួន ណាត និងព្រះថេរានុត្ថេរៈជាន់ខ្ពស់) បានប្រែគម្ពីរបាលីមកជាភាសាខ្មែរសម្រេចជាស្ថាពរ ចែកចេញជា ១១០ ភាគ ៖ វិនយបិដក ១៣ ភាគ, សុត្តន្តបិដក ៦៤ ភាគ, និងអភិធម្មបិដក ៣៣ ភាគ។', 'The Tipitaka (Three Baskets) holds the 84,000 teachings of the Buddha. In Cambodia, the Tipitaka Translation Commission of the Buddhist Institute (led by Supreme Patriarch Chuon Nath and eminent scholars) translated the complete Pali canon into Khmer across 110 volumes: Vinaya Pitaka (13 volumes), Sutta Pitaka (64 volumes), and Abhidhamma Pitaka (33 volumes).') }}
    </p>

    <!-- 3 Baskets Overview Stats -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
      <div
        class="card-paper p-5 rounded-xl border text-center cursor-pointer transition-all"
        :class="{ 'ring-2 ring-amber-500': activeBasket === 'vinaya' }"
        @click="activeBasket = 'vinaya'"
      >
        <span class="text-2xl text-amber-500">📜</span>
        <h3 class="font-display text-lg font-bold mt-2" :style="{ color: 'var(--ink)' }">{{ t('វិនយបិដក', 'Vinaya Pitaka') }}</h3>
        <p class="font-display text-2xl font-black text-amber-500 my-1">១៣ <span class="text-xs font-normal text-stone-500">ភាគ</span></p>
        <p class="text-[11px] text-stone-500">{{ t('ភាគ ០១ ដល់ ១៣ (វិន័យ និងសីលសង្ឃ)', 'Vols 01–13 (Monastic Discipline)') }}</p>
      </div>

      <div
        class="card-paper p-5 rounded-xl border text-center cursor-pointer transition-all"
        :class="{ 'ring-2 ring-sky-500': activeBasket === 'sutta' }"
        @click="activeBasket = 'sutta'"
      >
        <span class="text-2xl text-sky-500">📖</span>
        <h3 class="font-display text-lg font-bold mt-2" :style="{ color: 'var(--ink)' }">{{ t('សុត្តន្តបិដក', 'Sutta Pitaka') }}</h3>
        <p class="font-display text-2xl font-black text-sky-500 my-1">៦៤ <span class="text-xs font-normal text-stone-500">ភាគ</span></p>
        <p class="text-[11px] text-stone-500">{{ t('ភាគ ១៤ ដល់ ៧៧ (ព្រះសូត្រ ៥ និកាយ)', 'Vols 14–77 (Discourses & Parables)') }}</p>
      </div>

      <div
        class="card-paper p-5 rounded-xl border text-center cursor-pointer transition-all"
        :class="{ 'ring-2 ring-emerald-500': activeBasket === 'abhidhamma' }"
        @click="activeBasket = 'abhidhamma'"
      >
        <span class="text-2xl text-emerald-500">🧠</span>
        <h3 class="font-display text-lg font-bold mt-2" :style="{ color: 'var(--ink)' }">{{ t('អភិធម្មបិដក', 'Abhidhamma Pitaka') }}</h3>
        <p class="font-display text-2xl font-black text-emerald-500 my-1">៣៣ <span class="text-xs font-normal text-stone-500">ភាគ</span></p>
        <p class="text-[11px] text-stone-500">{{ t('ភាគ ៧៨ ដល់ ១១០ (៧ មហាគម្ពីរ)', 'Vols 78–110 (Ultimate Analysis)') }}</p>
      </div>
    </div>

    <!-- Search & Filter Controls -->
    <div class="card-paper p-4 sm:p-5 mt-6">
      <div class="flex items-center gap-2 px-3 py-2 rounded-xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }">
        <span class="text-sm opacity-60">🔍</span>
        <input
          v-model="searchQuery"
          type="text"
          :placeholder="t('ស្វែងរកភាគ ឬឈ្មោះគម្ពីរ (ឧ. ភាគ ៥៤, ទីឃនិកាយ, បដ្ឋាន, បារាជិក)...', 'Search volume or title (e.g. 54, Digha, Patthana)...')"
          class="w-full bg-transparent border-none text-xs sm:text-sm focus:outline-none"
          :style="{ color: 'var(--ink)' }"
        />
        <button
          v-if="searchQuery"
          type="button"
          @click="searchQuery = ''"
          class="text-xs px-2 py-1 rounded bg-stone-200 dark:bg-stone-700 font-bold"
        >
          ✕
        </button>
      </div>

      <!-- Filter tabs -->
      <div class="flex items-center gap-2 mt-3 flex-wrap">
        <button
          v-for="b in filterTabs"
          :key="b.id"
          @click="activeBasket = b.id"
          class="h-8 px-3 rounded-lg text-xs font-bold border transition cursor-pointer"
          :style="activeBasket === b.id
            ? { background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' }
            : { background: 'var(--bg-card)', color: 'var(--ink-muted)', borderColor: 'var(--border)' }"
        >
          {{ t(b.km, b.en) }}
        </button>
      </div>
    </div>

    <!-- Volumes List -->
    <div class="space-y-3 mt-6">
      <div
        v-for="v in filteredVolumes"
        :key="v.vol"
        class="card-paper p-4 sm:p-5 rounded-xl border transition-all"
      >
        <div class="flex items-start justify-between gap-3 flex-wrap">
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-2 flex-wrap">
              <span
                class="px-2 py-0.5 rounded text-[11px] font-mono font-bold"
                :class="getBasketBadgeClass(v.basket)"
              >
                {{ v.vol }}
              </span>
              <span class="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded border" :style="{ borderColor: 'var(--border)', color: 'var(--ink-faint)' }">
                {{ v.group }}
              </span>
            </div>
            <h4 class="font-display text-base sm:text-lg font-bold mt-2" :style="{ color: 'var(--ink)' }">
              {{ t(v.titleKm, v.titleEn) }}
            </h4>
            <p class="text-xs sm:text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
              {{ t(v.descKm, v.descEn) }}
            </p>
          </div>
          <div class="text-right shrink-0">
            <span class="text-xs font-mono font-bold opacity-60">បិដកខ្មែរ</span>
          </div>
        </div>
      </div>

      <div v-if="filteredVolumes.length === 0" class="card-paper p-10 text-center">
        <p class="text-stone-500 text-sm">{{ t('រកមិនឃើញភាគដែលត្រូវនឹងការស្វែងរកឡើយ', 'No volumes match your search query') }}</p>
      </div>
    </div>

    <!-- History of Cambodian Tipitaka -->
    <div class="card-paper p-6 md:p-8 mt-8 border-t-4" :style="{ borderTopColor: 'var(--accent)' }">
      <p class="chapter-label">{{ t('ប្រវត្តិសាស្ត្រ', 'HISTORICAL CONTEXT') }}</p>
      <h3 class="font-display text-xl mt-1.5" :style="{ color: 'var(--ink)' }">
        {{ t('ប្រវត្តិនៃការប្រែព្រះត្រៃបិដកខ្មែរ ១១០ ភាគ', 'The Historic Translation of the Khmer Tipitaka') }}
      </h3>
      <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('កិច្ចការប្រែគម្ពីរព្រះត្រៃបិដកជាភាសាខ្មែរ បានចាប់ផ្តើមជាផ្លូវការនៅថ្ងៃទី ១៤ ខែធ្នូ ឆ្នាំ ១៩២៩ ក្រោមព្រះរាជកិច្ចឧបត្ថម្ភ និងការបង្កើតពុទ្ធសាសនបណ្ឌិត្យ។ សម្តេចព្រះសង្ឃរាជ ជួន ណាត (កាលនៅជាព្រះគ្រូសង្ឃសត្ថា) ព្រមទាំងសម្តេចព្រះសង្ឃរាជ ហួត តាត និងគណៈកម្មការបណ្ឌិត្យសង្ឃ បានលះបង់កម្លាំងកាយចិត្តស្រាវជ្រាវផ្ទៀងផ្ទាត់អត្ថបទបាលីរហូតដល់បញ្ចប់ការបោះពុម្ពផ្សាយទាំងស្រុងក្នុងឆ្នាំ ១៩៦៩ (ចំណាយពេលអស់ ៤០ ឆ្នាំគត់)។ នេះជាកេរដំណែលវប្បធម៌ និងដួងព្រលឹងព្រះពុទ្ធសាសនាដ៏ឧត្តុង្គឧត្តមបំផុតរបស់ប្រជាជាតិខ្មែរ។', 'The translation began on December 14, 1929 under the patronage of the Buddhist Institute. Supreme Patriarch Chuon Nath, Supreme Patriarch Huot Tath, and scholar monks dedicated 40 full years of meticulous linguistic verification until complete publication in 1969. It stands as the crowning intellectual and spiritual treasure of the Cambodian people.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeBasket = ref('all')
const searchQuery = ref('')

const filterTabs = [
  { id: 'all', km: 'ទាំងអស់ (១១០ ភាគ)', en: 'All 110 Volumes' },
  { id: 'vinaya', km: 'វិនយបិដក (១៣)', en: 'Vinaya (13)' },
  { id: 'sutta', km: 'សុត្តន្តបិដក (៦៤)', en: 'Sutta (64)' },
  { id: 'abhidhamma', km: 'អភិធម្មបិដក (៣៣)', en: 'Abhidhamma (33)' },
]

function getBasketBadgeClass(basket) {
  if (basket === 'vinaya') return 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30'
  if (basket === 'sutta') return 'bg-sky-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/30'
  return 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
}

const volumes = [
  // Vinaya (1-13)
  { vol: 'ភាគ ០១', basket: 'vinaya', group: 'មហាវិភង្គ បឋមភាគ', titleKm: 'វិនយបិដក ភាគ ១ — បារាជិកកណ្ឌ', titleEn: 'Vinaya Vol 01 — Pārājika Kaṇḍa', descKm: 'សិក្ខាបទធ្ងន់បំផុតរបស់ភិក្ខុសង្ឃ ៤ ប្រការ (សេពមេថុន, លួចទ្រព្យ, សម្លាប់មនុស្ស, អួតឧត្តរិមនុស្សធម្ម)។', descEn: 'The 4 gravest offenses leading to immediate expulsion from the Sangha.' },
  { vol: 'ភាគ ០២', basket: 'vinaya', group: 'មហាវិភង្គ ទុតិយភាគ', titleKm: 'វិនយបិដក ភាគ ២ — សង្ឃាទិសេស', titleEn: 'Vinaya Vol 02 — Saṅghādisesa', descKm: 'សិក្ខាបទកម្រិតមធ្យម ១៣ ប្រការ អនិយត ២ និងនិស្សគ្គិយបាចិត្តិយ ៣០ ប្រការ។', descEn: 'The 13 offenses requiring formal Sangha meetings and 30 Nissaggiya rules.' },
  { vol: 'ភាគ ០៣', basket: 'vinaya', group: 'មហាវិភង្គ តតិយភាគ', titleKm: 'វិនយបិដក ភាគ ៣ — សុទ្ធិកបាចិត្តិយ', titleEn: 'Vinaya Vol 03 — Suddhika Pācittiya', descKm: 'សិក្ខាបទបាចិត្តិយសុទ្ធ ៩២ ប្រការ ដែលភិក្ខុសង្ឃត្រូវសំដែងទោស (អាបត្តិ)។', descEn: '92 Pācittiya rules requiring confession.' },
  { vol: 'ភាគ ០៤', basket: 'vinaya', group: 'មហាវិភង្គ ចតុត្ថភាគ', titleKm: 'វិនយបិដក ភាគ ៤ — បាដិទេសនីយៈ & សេក្ខិយវត្ត', titleEn: 'Vinaya Vol 04 — Pāṭidesanīya & Sekhiya', descKm: 'បាដិទេសនីយៈ ៤ និងសេក្ខិយវត្ត ៧៥ ប្រការ ស្តីពីសុជីវធម៌ របៀបឆាន់ ដើរ ឈរ អង្គុយ។', descEn: 'Rules of training for polite monastic demeanor and table manners.' },
  { vol: 'ភាគ ០៥', basket: 'vinaya', group: 'ភិក្ខុនីវិភង្គ', titleKm: 'វិនយបិដក ភាគ ៥ — ភិក្ខុនីវិភង្គ', titleEn: 'Vinaya Vol 05 — Bhikkhunī Vibhaṅga', descKm: 'សិក្ខាបទ ៣១១ ប្រការរបស់ភិក្ខុនីសង្ឃ និងគរុធម៌ ៨ ប្រការ។', descEn: 'Disciplinary code of 311 rules governing the order of Buddhist nuns.' },
  { vol: 'ភាគ ០៦-០៨', basket: 'vinaya', group: 'មហាវគ្គ', titleKm: 'វិនយបិដក ភាគ ៦-៨ — មហាវគ្គ', titleEn: 'Vinaya Vols 06-08 — Mahāvagga', descKm: 'ពិធីឧបសម្បទា កិច្ចឧបោសថ ការចូលវស្សា បវារណា កឋិនទាន និងកិច្ចសង្ឃកម្ម។', descEn: 'Ordination procedures, Uposatha observance, Rains Retreat, and Kathina.' },
  { vol: 'ភាគ ០៩-១១', basket: 'vinaya', group: 'ចុល្លវគ្គ', titleKm: 'វិនយបិដក ភាគ ៩-១១ — ចុល្លវគ្គ', titleEn: 'Vinaya Vols 09-11 — Cullavagga', descKm: 'វិន័យស្តីពីទីសេនាសនៈ ទំនាស់សង្ឃ កិច្ចសង្គាយនាលើកទី ១ និងទី ២។', descEn: 'Dwellings, schisms, and accounts of the 1st and 2nd Buddhist Councils.' },
  { vol: 'ភាគ ១២-១៣', basket: 'vinaya', group: 'បរិវារ', titleKm: 'វិនយបិដក ភាគ ១២-១៣ — បរិវារ', titleEn: 'Vinaya Vols 12-13 — Parivāra', descKm: 'សេចក្តីសង្ខេបវិភាគ និងសំណួរ-ចម្លើយក្បួនវិន័យទូទៅទាំងអស់។', descEn: 'Manual and catechism summarizing the entire Vinaya Piṭaka.' },

  // Sutta (14-77)
  { vol: 'ភាគ ១៤-១៩', basket: 'sutta', group: 'ទីឃនិកាយ (៦ ភាគ)', titleKm: 'សុត្តន្តបិដក — ទីឃនិកាយ (៣៤ សូត្រវែង)', titleEn: 'Sutta Vols 14-19 — Dīgha Nikāya (Long Discourses)', descKm: 'ព្រហ្មជាលសូត្រ (ទិដ្ឋិ ៦២), សាមញ្ញផលសូត្រ, មហាបរិនិព្វានសូត្រ, សិង្គាលកសូត្រ (ទិស ៦)។', descEn: '34 long discourses: Brahmajāla (62 views), Sāmaññaphala, Mahāparinibbāna, Sigālovāda.' },
  { vol: 'ភាគ ២០-២៨', basket: 'sutta', group: 'មជ្ឈិមនិកាយ (៩ ភាគ)', titleKm: 'សុត្តន្តបិដក — មជ្ឈិមនិកាយ (១៥២ សូត្រមធ្យម)', titleEn: 'Sutta Vols 20-28 — Majjhima Nikāya (Middle Discourses)', descKm: 'មូលបរិយាយសូត្រ, សតិបដ្ឋានសូត្រ, អានាបានសតិសូត្រ, រដ្ឋបាលសូត្រ, អង្គុលីមាលសូត្រ។', descEn: '152 medium discourses: Satipaṭṭhāna, Ānāpānasati, Aṅgulimāla, Raṭṭhapāla.' },
  { vol: 'ភាគ ២៩-៣៩', basket: 'sutta', group: 'សំយុត្តនិកាយ (១១ ភាគ)', titleKm: 'សុត្តន្តបិដក — សំយុត្តនិកាយ (៧,៧៦២ សូត្រប្រមូលជាក្រុម)', titleEn: 'Sutta Vols 29-39 — Saṁyutta Nikāya (Connected Discourses)', descKm: 'ធម្មចក្កប្បវត្តនសូត្រ, អនត្តលក្ខណសូត្រ, ខន្ធសំយុត្ត, ឥន្ទ្រិយសំយុត្ត, មគ្គសំយុត្ត។', descEn: 'Grouped by subject: Khandha, Salāyatana, Sacca (Four Truths), Magga (Path).' },
  { vol: 'ភាគ ៤០-៥១', basket: 'sutta', group: 'អង្គុត្ដរនិកាយ (១២ ភាគ)', titleKm: 'សុត្តន្តបិដក — អង្គុត្ដរនិកាយ (៩,៥៥៧ សូត្រតាមលំដាប់លេខ)', titleEn: 'Sutta Vols 40-51 — Aṅguttara Nikāya (Numbered Discourses)', descKm: 'ធម្មទេសនារៀបតាមចំនួនលេខ ពីធម៌ពួក ១ (ឯកកនិបាត) រហូតដល់ធម៌ពួក ១១ (ឯកាទសកនិបាត)។', descEn: 'Discourses arranged numerically from ones (Ekaka) to elevens (Ekādasaka).' },
  { vol: 'ភាគ ៥២-៧៧', basket: 'sutta', group: 'ខុទ្ទកនិកាយ (២៦ ភាគ)', titleKm: 'សុត្តន្តបិដក — ខុទ្ទកនិកាយ (គម្ពីរតូចៗ ១៥ មុខ)', titleEn: 'Sutta Vols 52-77 — Khuddaka Nikāya (Minor Collection)', descKm: 'ធម្មបទ (គាថា ២៦ វគ្គ), ឧទាន, ឥតិវុត្តក, សុត្តនិបាត, ថេរគាថា-ថេរីគាថា, ជាតក (រឿងអតីតជាតិ ៥៤៧)។', descEn: 'Dhammapada, Udāna, Itivuttaka, Sutta Nipāta, Theragāthā, and 547 Jātaka tales.' },

  // Abhidhamma (78-110)
  { vol: 'ភាគ ៧៨-៧៩', basket: 'abhidhamma', group: 'ធម្មសង្គណី', titleKm: 'អភិធម្មបិដក ភាគ ៧៨-៧៩ — ធម្មសង្គណី', titleEn: 'Abhidhamma Vols 78-79 — Dhammasaṅgaṇī', descKm: 'ការប្រមូលចាត់ក្រុមបរមត្ថធម៌ (កុសលធម៌, អកុសលធម៌, អព្យាកតធម៌) តាមមាតិកា ២២ តិកៈ និង ១០០ ទុកៈ។', descEn: 'Enumeration of phenomena into wholesome, unwholesome, and neutral realities.' },
  { vol: 'ភាគ ៨០-៨១', basket: 'abhidhamma', group: 'វិភង្គ', titleKm: 'អភិធម្មបិដក ភាគ ៨០-៨១ — វិភង្គ', titleEn: 'Abhidhamma Vols 80-81 — Vibhaṅga', descKm: 'ការបែងចែកពិស្តារលើ ខន្ធ ១៨, អាយតនៈ, ធាតុ, សច្ចៈ, ឥន្ទ្រិយ, បដិច្ចសមុប្បាទ។', descEn: '18 detailed treatises analyzing aggregates, sense bases, elements, and faculties.' },
  { vol: 'ភាគ ៨២', basket: 'abhidhamma', group: 'ធាតុកថា & បុគ្គលបញ្ញត្តិ', titleKm: 'អភិធម្មបិដក ភាគ ៨២ — ធាតុកថា & បុគ្គលបញ្ញត្តិ', titleEn: 'Abhidhamma Vol 82 — Dhātukathā & Puggalapaññatti', descKm: 'ការពិភាក្សាធាតុ និងការបញ្ញត្តិប្រភេទបុគ្គលផ្សេងៗក្នុងវដ្តសង្សារ។', descEn: 'Discourse on elements and classification of human personality types.' },
  { vol: 'ភាគ ៨៣-៨៤', basket: 'abhidhamma', group: 'កថាវត្ថុ', titleKm: 'អភិធម្មបិដក ភាគ ៨៣-៨៤ — កថាវត្ថុ', titleEn: 'Abhidhamma Vols 83-84 — Kathāvatthu', descKm: 'ការជជែកដេញដោលទស្សនវិជ្ជា ២១៨ ចំណុចដោយព្រះមោគ្គលីបុត្តតិស្សត្ថេរ កំឡុងសង្គាយនាលើកទី ៣។', descEn: '218 philosophical debate points refuting heresy at the 3rd Buddhist Council.' },
  { vol: 'ភាគ ៨៥-៩១', basket: 'abhidhamma', group: 'យមក (៧ ភាគ)', titleKm: 'អភិធម្មបិដក ភាគ ៨៥-៩១ — យមក (គម្ពីរគូ)', titleEn: 'Abhidhamma Vols 85-91 — Yamaka (The Book of Pairs)', descKm: 'ការប្រើតក្កវិទ្យាសួរឆ្លើយជាគូៗ ៖ មូលយមក, ខន្ធយមក, អាយតនយមក, ធាតុយមក, សច្ចយមក, ចិត្តយមក។', descEn: 'Rigorous Buddhist dialectic using pairs of questions resolving mental realities.' },
  { vol: 'ភាគ ៩២-១១០', basket: 'abhidhamma', group: 'មហាបដ្ឋាន (១៩ ភាគ)', titleKm: 'អភិធម្មបិដក ភាគ ៩២-១១០ — បដ្ឋាន (មហាគម្ពីរ ២៤ បច្ច័យ)', titleEn: 'Abhidhamma Vols 92-110 — Paṭṭhāna (The Great Book of Causal Relations)', descKm: 'គម្ពីរធំបំផុតក្នុងពុទ្ធសាសនា វិភាគលម្អិតអំពីច្បាប់ហេតុបច្ច័យ ២៤ (ហេតុបច្ចយោ, អារម្មណបច្ចយោ...) គ្មានទីបំផុត។', descEn: 'The supreme pinnacle of Abhidhamma: 24 conditional relations governing all phenomena.' }
]

const filteredVolumes = computed(() => {
  let list = volumes
  if (activeBasket.value !== 'all') {
    list = list.filter(v => v.basket === activeBasket.value)
  }
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return list
  return list.filter(v => {
    return v.vol.toLowerCase().includes(q) ||
      v.titleKm.toLowerCase().includes(q) ||
      v.titleEn.toLowerCase().includes(q) ||
      v.descKm.toLowerCase().includes(q) ||
      v.group.toLowerCase().includes(q)
  })
})
</script>
