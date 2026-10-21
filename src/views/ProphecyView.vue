<template>
  <div class="fade-up">
    <!-- Header -->
    <header class="text-center max-w-2xl mx-auto">
      <p class="chapter-label">{{ t('អនាគតវង្ស • ពុទ្ធព្យាករណ៍ ៥០០០ វស្សា', 'Anāgatavaṃsa • 5,000-Year Prophecy') }}</p>
      <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
        {{ t('ពុទ្ធព្យាករណ៍ និងព្រះសិរិអារ្យមេត្រីយ៍', 'The 5,000-Year Prophecy & Metteyya Buddha') }}
      </h2>
      <div class="ornament mt-4">&#9784;</div>
      <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ស្វែងយល់ពីដំណើរវិវឌ្ឍនៃព្រះពុទ្ធសាសនា ៥០០០ ព្រះវស្សា, ដំណាក់កាលសាបរលាបទាំង ៥ (អន្តរធាន ៥) និងប្រវត្តិព្រះសម្មាសម្ពុទ្ធអនាគត «ព្រះសិរិអារ្យមេត្រីយ៍» ព្រមទាំងវិធីសាងបុណ្យដើម្បីបានជួបសាសនារបស់ព្រះអង្គ។', 'Explore the 5,000-year destiny of the Buddha Sasana, the 5 stages of doctrinal disappearance (Antaradhāna), and the prophecy of Metteyya, the Future Buddha.') }}
      </p>

      <!-- View Switcher Tabs -->
      <div class="flex items-center gap-1.5 sm:gap-2 mt-6 flex-wrap justify-center">
        <button
          @click="activeTab = 'timeline'"
          class="lang-pick px-3.5 py-1.5 text-xs font-semibold"
          :class="activeTab === 'timeline' ? 'on' : ''"
        >
          <span>📜</span>
          <span>{{ t('យុគ ៥ ក្នុង ៥០០០ វស្សា', '5 Eras of 5,000 Yrs') }}</span>
        </button>

        <button
          @click="activeTab = 'antaradhana'"
          class="lang-pick px-3.5 py-1.5 text-xs font-semibold"
          :class="activeTab === 'antaradhana' ? 'on' : ''"
        >
          <span>🔥</span>
          <span>{{ t('អន្តរធាន ៥ ប្រការ', '5 Disappearances') }}</span>
        </button>

        <button
          @click="activeTab = 'metteyya'"
          class="lang-pick px-3.5 py-1.5 text-xs font-semibold"
          :class="activeTab === 'metteyya' ? 'on' : ''"
        >
          <span>🪷</span>
          <span>{{ t('ព្រះសិរិអារ្យមេត្រីយ៍', 'Metteyya Buddha') }}</span>
        </button>
      </div>
    </header>

    <!-- SECTION 1: THE 5 ERAS TIMELINE (5,000 YEARS) -->
    <section v-if="activeTab === 'timeline'" class="mt-6 space-y-4">
      <div class="verse-box p-4 rounded-xl text-xs sm:text-sm leading-relaxed text-center">
        {{ t('តាមគម្ពីរអដ្ឋកថាសមន្តបាសាទិកា ព្រះសម្មាសម្ពុទ្ធបានព្យាករណ៍ថា ព្រះពុទ្ធសាសនានឹងតាំងនៅបាន ៥០០០ ព្រះវស្សា ដោយបែងចែកជា ៥ យុគធំៗ ក្នុងមួយយុគមានរយៈពេល ១០០០ ឆ្នាំ៖', 'According to ancient commentaries, the dispensation of Gotama Buddha endures 5,000 years, divided into 5 distinct millennia of progressive spiritual shifts:') }}
      </div>

      <div class="space-y-3">
        <div
          v-for="era in eras"
          :key="era.id"
          class="card-paper p-4 sm:p-5 transition"
          :style="era.isCurrent ? { borderColor: 'var(--accent-bright)' } : {}"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2" :style="{ borderBottom: '1px solid var(--border)' }">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">
                {{ era.years }}
              </span>
              <span
                v-if="era.isCurrent"
                class="lang-pick px-2 py-0.5 text-[10px] font-bold on"
              >
                ★ {{ t('សម័យបច្ចុប្បន្នយើង (Current Era)', 'Our Present Era') }}
              </span>
            </div>
            <h3 class="font-display text-base font-bold" :style="{ color: 'var(--ink)' }">
              {{ t(era.titleKm, era.titleEn) }}
            </h3>
          </div>

          <p class="text-xs sm:text-sm mt-2.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t(era.descKm, era.descEn) }}
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 2: THE 5 DISAPPEARANCES (ANTARADHĀNA) -->
    <section v-if="activeTab === 'antaradhana'" class="mt-6 space-y-4">
      <div class="card-paper p-4 text-xs sm:text-sm leading-relaxed" :style="{ background: 'var(--bg-card-2)' }">
        {{ t('គម្ពីរអដ្ឋកថាបានពន្យល់ថា ការសាបរលាបនៃព្រះពុទ្ធសាសនាក្នុងរយៈពេល ៥០០០ ឆ្នាំ នឹងកើតឡើងជាលំដាប់លំដោយតាម ៥ ដំណាក់កាលដូចខាងក្រោម៖', 'Ancient commentaries detail the gradual extinction of the Sasana in 5 irreversible chronological phases:') }}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        <div
          v-for="ant in antaradhanas"
          :key="ant.id"
          class="card-paper card-paper-hover p-4 sm:p-5 flex flex-col justify-between space-y-3"
        >
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-2xl">{{ ant.icon }}</span>
              <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">
                {{ t('ដំណាក់កាលទី ' + ant.step, 'Phase ' + ant.step) }}
              </span>
            </div>

            <div>
              <h3 class="font-display text-base sm:text-lg font-bold" :style="{ color: 'var(--ink)' }">
                {{ t(ant.nameKm, ant.nameEn) }}
              </h3>
              <p class="paali text-xs" :style="{ color: 'var(--accent)' }">
                {{ ant.pali }}
              </p>
            </div>

            <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(ant.descKm, ant.descEn) }}
            </p>
          </div>

          <div class="p-3 rounded-xl text-xs space-y-0.5" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
            <strong class="block" :style="{ color: 'var(--accent-bright)' }">⚠️ {{ t('សញ្ញាសម្គាល់ជាក់ស្តែង:', 'Observable Manifestation:') }}</strong>
            <span :style="{ color: 'var(--ink-soft)' }">{{ t(ant.signKm, ant.signEn) }}</span>
          </div>
        </div>
      </div>

      <!-- The Grand Relic Miracle Box -->
      <div class="verse-box p-5 sm:p-7 space-y-3">
        <div class="flex items-center gap-2">
          <span class="text-2xl">🔥</span>
          <h3 class="font-display text-lg sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
            {{ t('មហាអព្ភូតហេតុចុងក្រោយ៖ ធាតុអន្តរធាន (The Relic Miracle at Bodh Gaya)', 'Final Miracle: Dhātu-antaradhāna') }}
          </h3>
        </div>
        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink)' }">
          {{ t('នៅចុងបញ្ចប់នៃ ៥០០០ ឆ្នាំ ព្រះបរមសារីរិកធាតុទាំងអស់ទូទាំងចក្រវាឡ (ពីស្ថានសួគ៌ ស្ថាននាគ និងភពមនុស្ស) នឹងយាងមកជួបជុំគ្នាវិញនៅក្រោមដើមពោធិព្រឹក្សនាពុទ្ធគយា។ រួចហើយព្រះសារីរិកធាតុនឹងផ្គុំគ្នាឡើងវិញជារូបរាងព្រះពុទ្ធទ្រង់គង់លើបល្ល័ង្ក បញ្ចេញរស្មី ៦ ពណ៌ ទេសនាប្រោសទេវតាជាលើកចុងក្រោយ បន្ទាប់មកភ្លើងតេជោធាតុនឹងឆេះរលត់សូន្យទាំងស្រុង ជាការបិទបញ្ចប់នៃសាសនាព្រះសមណគោតម។', 'At the end of 5,000 years, all holy relics throughout the cosmos reassemble beneath the Bodhi tree at Bodh Gaya, reforming the Buddha in full aura to preach a final sermon before entering spontaneous combustive extinction.') }}
        </p>
      </div>
    </section>

    <!-- SECTION 3: METTEYYA BUDDHA -->
    <section v-if="activeTab === 'metteyya'" class="mt-6 space-y-5">
      <!-- Intro card -->
      <div class="card-paper p-5 sm:p-7 space-y-3">
        <div class="flex items-center gap-2">
          <span class="text-3xl">🪷</span>
          <div>
            <h3 class="font-display text-xl sm:text-2xl font-bold" :style="{ color: 'var(--ink)' }">
              {{ t('ព្រះសម្មាសម្ពុទ្ធអនាគត «ព្រះសិរិអារ្យមេត្រីយ៍» (Metteyya Buddha)', 'The Future Buddha: Metteyya') }}
            </h3>
            <p class="paali text-xs" :style="{ color: 'var(--accent)' }">
              Ajita Bodhisatta • The 5th and Final Buddha of Bhadda-kappa
            </p>
          </div>
        </div>

        <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
          {{ t('ព្រះសិរិអារ្យមេត្រីយ៍ គឺជាព្រះពុទ្ធទី ៥ និងជាព្រះពុទ្ធចុងក្រោយបង្អស់ក្នុងភទ្ទកប្បនេះ។ បច្ចុប្បន្ន ព្រះពោធិសត្វកំពុងគង់នៅស្ថានសួគ៌តុសិត (Tusita) មានព្រះនាមថា «សន្តុសិតទេវបុត្ត» ដើម្បីរង់ចាំពេលវេលាសមរម្យយាងចុះមកត្រាស់ដឹងជាព្រះពុទ្ធលើភពមនុស្ស។', 'Metteyya is the 5th and final Buddha of our fortunate aeon (Bhadda-kappa). The Bodhisatta currently resides in Tusita heaven as Santusita Deva awaiting the right era.') }}
        </p>
      </div>

      <!-- Key Prophecies Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        <div class="card-paper p-4 sm:p-5 space-y-2">
          <span class="text-2xl">⏳</span>
          <h4 class="font-display text-base font-bold" :style="{ color: 'var(--ink)' }">{{ t('ពេលវេលានៃការត្រាស់ដឹង', 'Time of Advent') }}</h4>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ពេលអាយុមនុស្សធ្លាក់ចុះដល់ ១០ ឆ្នាំ (យុគសត្វកាប់សម្លាប់គ្នា) រួចឡើងវិញដល់អសង្ខេយ្យឆ្នាំ ហើយថយចុះមកត្រឹម ៨០,០០០ ឆ្នាំ ទើបព្រះអង្គយាងចុះមកប្រសូត។', 'When human lifespan declines to 10 years, ascends to Asaṅkheyya, and descends back to 80,000 years, the Bodhisatta descends.') }}
          </p>
        </div>

        <div class="card-paper p-4 sm:p-5 space-y-2">
          <span class="text-2xl">👑</span>
          <h4 class="font-display text-base font-bold" :style="{ color: 'var(--ink)' }">{{ t('ព្រះរាជវង្សានុវង្ស', 'Noble Lineage') }}</h4>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ព្រះបិតាព្រះនាម «សុព្រហ្មព្រាហ្មណ៍» (បុរោហិត) ព្រះមាតាព្រះនាម «ព្រហ្មវតី» ក្នុងនគរកេតុមតីរាជធានី (បច្ចុប្បន្នគឺក្រុងពារាណសី) ដើមឈើត្រាស់ដឹងគឺ «ដើមកន្ទួតព្រៃ/មហាក្រឡាញ់» (Nāga Tree)។', 'Born to Brahmin parents Subrahma and Brahmavatī in Ketumatī city; achieves supreme enlightenment under the noble Nāga tree.') }}
          </p>
        </div>

        <div class="card-paper p-4 sm:p-5 space-y-2">
          <span class="text-2xl">🕊️</span>
          <h4 class="font-display text-base font-bold" :style="{ color: 'var(--ink)' }">{{ t('ស្ថានភាពសង្គមសម័យនោះ', 'Social Utopia') }}</h4>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ផែនដីរាបស្មើដូចផ្ទៃស្គរ មនុស្សទាំងអស់មានចិត្តមេត្តា គ្មានចោរ គ្មានសង្គ្រាម ដើមឈើកល្បព្រឹក្សដុះពាសពេញអាចបេះសម្លៀកបំពាក់និងអាហារតាមចិត្ត។', 'A utopian era free of war and theft; gentle climate and abundance where wish-fulfilling trees provide requisites.') }}
          </p>
        </div>
      </div>

      <!-- How to make merit to meet Metteyya Buddha -->
      <div class="card-paper p-5 sm:p-7 space-y-4">
        <div>
          <span class="chapter-label">{{ t('បុញ្ញកិរិយាដើម្បីជួបព្រះមេត្រី', 'Karmic Pathway to Metteyya') }}</span>
          <h3 class="font-display text-lg sm:text-xl md:text-2xl mt-1.5" :style="{ color: 'var(--ink)' }">
            {{ t('តើត្រូវសាងបុណ្យបែបណា ទើបអាចជួបសាសនាព្រះសិរិអារ្យមេត្រីយ៍?', 'How Can We Plant Merits to Meet Metteyya Buddha?') }}
          </h3>
          <p class="text-xs sm:text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ក្នុងគម្ពីរអនាគតវង្ស និងគម្ពីរមហាជាតិ ព្រះសម្មាសម្ពុទ្ធទ្រង់សម្តែងថា បុគ្គលដែលមានបំណងចង់ជួបសាសនាព្រះសិរិអារ្យមេត្រីយ៍ ត្រូវសាងកុសលទាំង ៥ នេះ៖', 'The Anāgatavaṃsa canonical texts describe 5 primary merits that condition rebirth in the golden age of Metteyya:') }}
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl space-y-1" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
            <strong class="font-bold block" :style="{ color: 'var(--accent-bright)' }">១. ស្តាប់ធម៌មហាជាតិ (Vessantara Jātaka)</strong>
            <p :style="{ color: 'var(--ink-soft)' }">
              {{ t('ស្តាប់គាថាពាន់ទាំង ១៣ កណ្ឌនៃរឿងព្រះវេស្សន្តរ ឱ្យចប់ត្រឹមតែមួយថ្ងៃបរិបូណ៌ ដោយសេចក្តីគោរពជ្រះថ្លា។', 'Listening to the complete 1,000 verses of the Vessantara Jātaka within one single day with unbroken devotion.') }}
            </p>
          </div>

          <div class="p-3.5 rounded-xl space-y-1" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
            <strong class="font-bold block" :style="{ color: 'var(--accent)' }">២. រក្សាសីល ៥ និងសីល ៨ ឱ្យបរិសុទ្ធ</strong>
            <p :style="{ color: 'var(--ink-soft)' }">
              {{ t('មិនសម្លាប់សត្វ មិនលួចទ្រព្យ មិនផឹកស្រា ប្រព្រឹត្តតែអំពើសុចរិតក្នុងជីវិតប្រចាំថ្ងៃ។', 'Impeccable observance of the 5 and 8 precepts without breaking core moral covenants.') }}
            </p>
          </div>

          <div class="p-3.5 rounded-xl space-y-1" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
            <strong class="font-bold block" :style="{ color: 'var(--accent-bright)' }">៣. ចម្រើនមេត្តាភាវនាជាប្រចាំ</strong>
            <p :style="{ color: 'var(--ink-soft)' }">
              {{ t('មានបេះដូងត្រជាក់ មិនគុំកួន ផ្សាយមេត្តាចិត្តដល់សព្វសត្វ (ឈ្មោះ «មេត្រី» មានន័យថាមេត្តា)។', 'Cultivating unconditional loving-kindness toward all living beings without animosity.') }}
            </p>
          </div>

          <div class="p-3.5 rounded-xl space-y-1" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
            <strong class="font-bold block" :style="{ color: 'var(--accent)' }">៤. ធ្វើទានដោយគោរព និងមិនប្រកាន់តួខ្លួន</strong>
            <p :style="{ color: 'var(--ink-soft)' }">
              {{ t('សាងកុសល ទាន វិហារទាន ជួយមនុស្សទុគ៌ត ដោយមិនរំពឹងផលកេរ្តិ៍ឈ្មោះ ឬអួតអាង។', 'Practicing generosity and building monastic or community welfare shelters without vanity.') }}
            </p>
          </div>

          <div class="p-3.5 rounded-xl space-y-1 sm:col-span-2" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
            <strong class="font-bold block" :style="{ color: 'var(--accent-bright)' }">៥. តាំងសច្ចាប្រណិធាន (Adhiṭṭhāna)</strong>
            <p :style="{ color: 'var(--ink-soft)' }">
              {{ t('រាល់ពេលធ្វើបុណ្យរួច តាំងចិត្តអធិដ្ឋានថា៖ «សូមអានុភាពនៃបុណ្យកុសលនេះ ជាបច្ច័យឱ្យខ្ញុំបានកើតទាន់ និងបានស្តាប់ធម៌ទេសនារបស់ព្រះសម្មាសម្ពុទ្ធព្រះនាមសិរិអារ្យមេត្រីយ៍ ហើយបានសម្រេចព្រះអរហត្តផលក្នុងកាលនោះហោង!»', 'Always dedicating merits with clear aspiration to meet and attain Arahantship under the dispensation of Metteyya Buddha.') }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeTab = ref('timeline')

const eras = [
  {
    id: 'era1',
    years: 'ឆ្នាំទី ១ – ១,០០០',
    titleKm: 'យុគព្រះអរហន្តបដិសម្ភិទា (Age of Analytical Arahants)',
    titleEn: 'Age of Analytical Arahants (Paṭisambhidā)',
    descKm: 'សម័យកាលដែលសំបូរទៅដោយព្រះអរហន្តមានបដិសម្ភិទាញាណ ៤ មានឫទ្ធិអភិញ្ញា ៦ ហោះហើរលើអាកាស និងចងចាំព្រះធម៌វិន័យបានយ៉ាងស្ទាត់ជំនាញ។',
    descEn: 'An era blessed with Arahants endowed with the 4 analytical knowledges and 6 supernatural powers.'
  },
  {
    id: 'era2',
    years: 'ឆ្នាំទី ១,០០១ – ២,០០០',
    titleKm: 'យុគព្រះអរហន្តសុក្ខវិបស្សក (Age of Bare Insight Arahants)',
    titleEn: 'Age of Bare Insight Arahants (Sukkhavipassaka)',
    descKm: 'ព្រះអរហន្តមានឫទ្ធិចាប់ផ្តើមកម្រ តែនៅសំបូរទៅដោយព្រះអរហន្តដែលសម្រេចដោយកម្លាំងវិបស្សនាសុទ្ធសាធ (សុក្ខវិបស្សក)។',
    descEn: 'Supernatural powers decline, but thousands attain liberation through dry-insight Vipassanā.'
  },
  {
    id: 'era3',
    years: 'ឆ្នាំទី ២,០០១ – ៣,០០០',
    titleKm: 'យុគព្រះអនាគាមិ & ព្រះសកទាគាមិ (Age of Non-Returners)',
    titleEn: 'Age of Anāgāmis & Sakadāgāmis',
    descKm: 'សម័យកាលបច្ចុប្បន្នយើង! ព្រះអរហន្តចាប់ផ្តើមកម្រទៅៗ ប៉ុន្តែអ្នកបដិបត្តិធម៌នៅតែអាចសម្រេចព្រះអនាគាមិ និងសកទាគាមិបានយ៉ាងច្រើន។',
    descEn: 'Our current era: full Arahants become rare, but attainments of Non-returner and Once-returner thrive.',
    isCurrent: true
  },
  {
    id: 'era4',
    years: 'ឆ្នាំទី ៣,០០១ – ៤,០០០',
    titleKm: 'យុគព្រះសោតាបន្ន (Age of Stream-Enterers)',
    titleEn: 'Age of Stream-Enterers (Sotāpanna)',
    descKm: 'កិលេសក្នុងសង្គមកើនឡើងខ្ពស់ ការសម្រេចធម៌ជាន់ខ្ពស់ថយចុះ តែអ្នកខំប្រឹងបដិបត្តិនឹងសម្រេចបានថ្នាក់សោតាបន្ន (បិទទ្វារនរកបាន)។',
    descEn: 'Defilements surge globally; highest attainments cease, but Stream-entry remains fully accessible.'
  },
  {
    id: 'era5',
    years: 'ឆ្នាំទី ៤,០០១ – ៥,០០០',
    titleKm: 'យុគសីលបរិសុទ្ធ & ធាតុអន្តរធាន (Age of Mere Precepts & Final Extinction)',
    titleEn: 'Age of Mere Precepts & Final Extinction',
    descKm: 'គ្មានអ្នកសម្រេចមគ្គផលទៀតឡើយ នៅសល់ត្រឹមតែអ្នករក្សាសីល ៥ ឬសីល ៨ ហើយនៅចុងបញ្ចប់ ព្រះសង្ឃសល់តែកន្សែងលឿងចងដៃ រហូតដល់ធាតុអន្តរធាន។',
    descEn: 'Noble fruits cease completely; simple moral virtue remains until the robes reduce to a yellow string.'
  }
]

const antaradhanas = [
  {
    id: 'ant1',
    step: 1,
    icon: '📚',
    nameKm: '១. បរិយត្តិអន្តរធាន (ការបាត់បង់ការរៀនសូត្រ)',
    nameEn: '1. Pariyatti-antaradhāna (Disappearance of Scripture)',
    pali: 'Pariyatti-antaradhāna',
    descKm: 'គម្ពីរអភិធម្មបិដកនឹងសាបសូន្យមុនគេ (ចាប់ផ្តើមពីគម្ពីរបដ្ឋាន), បន្ទាប់មកព្រះសូត្រ (ចាប់ផ្តើមពីជាតក), ហើយចុងក្រោយបង្អស់គឺព្រះវិន័យបិដក។',
    descEn: 'The Abhidhamma (starting with Paṭṭhāna) disappears first, followed by Suttas, and finally Vinaya.',
    signKm: 'មនុស្សលែងខ្វល់ពីរៀនបាលី លែងសិក្សាអភិធម្ម និងបកស្រាយធម៌តាមតែចិត្តចង់។',
    signEn: 'Loss of Pali scholarship and philosophical study of Abhidhamma.'
  },
  {
    id: 'ant2',
    step: 2,
    icon: '🧘',
    nameKm: '២. បដិបត្តិអន្តរធាន (ការបាត់បង់ការប្រតិបត្តិ)',
    nameEn: '2. Paṭipatti-antaradhāna (Disappearance of Practice)',
    pali: 'Paṭipatti-antaradhāna',
    descKm: 'មនុស្សលែងខ្វល់ខ្វាយក្នុងការចម្រើនសមាធិ និងវិបស្សនា។ ឈាន ៤ សាបសូន្យ សីលក៏ចាប់ផ្តើមធ្លាក់ចុះជាលំដាប់។',
    descEn: 'Meditation practice diminishes; absorption (Jhāna) and Vipassanā centers fade away.',
    signKm: 'សង្គមពោរពេញដោយភាពខ្ជិលច្រអូស ស្វែងរកតែលុយកាក់ និងភាពសប្បាយភ្លើតភ្លើន។',
    signEn: 'Obsession with material luxury displacing contemplative discipline.'
  },
  {
    id: 'ant3',
    step: 3,
    icon: '🏆',
    nameKm: '៣. បដិវេធអន្តរធាន (ការបាត់បង់ការសម្រេចមគ្គផល)',
    nameEn: '3. Paṭivedha-antaradhāna (Disappearance of Attainment)',
    pali: 'Paṭivedha-antaradhāna',
    descKm: 'លែងមានមនុស្សសម្រេចព្រះអរហន្ត ព្រះអនាគាមិ ព្រះសកទាគាមិ និងព្រះសោតាបន្នទៀតហើយក្នុងលោក។',
    descEn: 'Noble attainments cease sequentially from Arahant down to Sotāpanna.',
    signKm: 'ពាក្យថា «ព្រះអរហន្ត» ក្លាយជាគ្រាន់តែរឿងព្រេងក្នុងអតីតកាល។',
    signEn: 'Enlightenment becomes viewed purely as mythological ancient folklore.'
  },
  {
    id: 'ant4',
    step: 4,
    icon: '📿',
    nameKm: '៤. លិង្គអន្តរធាន (ការបាត់បង់ភេទបព្វជិត)',
    nameEn: '4. Liṅga-antaradhāna (Disappearance of Monastic Form)',
    pali: 'Liṅga-antaradhāna',
    descKm: 'ព្រះសង្ឃលែងគ្រងស្បង់ជីវរត្រឹមត្រូវ ក្លាយទៅជាអ្នកមានប្រពន្ធកូន ធ្វើស្រែចម្ការ សល់ត្រឹមតែកន្សែងលឿងចងដៃ ឬចងក (កាសាវកណ្ឌ)។',
    descEn: 'Monks cease wearing robes, marrying and farming with merely a yellow thread around the wrist.',
    signKm: 'ការលែងមានព្រះសង្ឃពិតប្រាកដក្នុងលោក សល់ត្រឹមតែនិមិត្តរូបតូចមួយ។',
    signEn: 'The disappearance of monastic vows and ordained Sangha communities.'
  },
  {
    id: 'ant5',
    step: 5,
    icon: '🔥',
    nameKm: '៥. ធាតុអន្តរធាន (ការរលត់ទៅនៃព្រះសារីរិកធាតុ)',
    nameEn: '5. Dhātu-antaradhāna (Disappearance of Relics)',
    pali: 'Dhātu-antaradhāna',
    descKm: 'ព្រះបរមសារីរិកធាតុទាំងអស់នៅលើពិភពលោក នឹងប្រមូលផ្តុំគ្នាក្រោមដើមពោធិព្រឹក្សនៅពុទ្ធគយា ហើយឆេះរលត់ស្ងប់ស្ងាត់ជាស្ថាពរ។',
    descEn: 'All relics across the universe convene at Bodh Gaya and combust in sacred fire.',
    signKm: 'ការបិទបញ្ចប់ជាស្ថាពរនៃពុទ្ធសាសនា ៥០០០ ឆ្នាំរបស់ព្រះសមណគោតម។',
    signEn: 'The definitive sunset of the Gotama Buddha dispensation.'
  }
]
</script>
