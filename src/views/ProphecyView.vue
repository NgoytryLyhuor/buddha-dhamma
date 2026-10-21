<template>
  <div class="w-full space-y-6 sm:space-y-8">
    <!-- Header -->
    <header class="text-center space-y-3 sm:space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20">
        <span>⏳</span>
        <span>{{ t('អនាគតវង្ស • ពុទ្ធព្យាករណ៍ ៥០០០ វស្សា', 'Anāgatavaṃsa • 5,000-Year Prophecy') }}</span>
      </div>
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-800 via-rose-700 to-amber-900 dark:from-amber-200 dark:via-rose-200 dark:to-amber-400 bg-clip-text text-transparent leading-snug">
        {{ t('ពុទ្ធព្យាករណ៍ និងព្រះសិរិអារ្យមេត្រីយ៍', 'The 5,000-Year Prophecy & Metteyya Buddha') }}
      </h1>
      <p class="text-xs sm:text-base text-stone-600 dark:text-stone-300 max-w-3xl mx-auto leading-relaxed">
        {{ t('ស្វែងយល់ពីដំណើរវិវឌ្ឍនៃព្រះពុទ្ធសាសនា ៥០០០ ព្រះវស្សា, ដំណាក់កាលសាបរលាបទាំង ៥ (អន្តរធាន ៥) និងប្រវត្តិព្រះសម្មាសម្ពុទ្ធអនាគត «ព្រះសិរិអារ្យមេត្រីយ៍» ព្រមទាំងវិធីសាងបុណ្យដើម្បីបានជួបសាសនារបស់ព្រះអង្គ។', 'Explore the 5,000-year destiny of the Buddha Sasana, the 5 stages of doctrinal disappearance (Antaradhāna), and the prophecy of Metteyya, the Future Buddha.') }}
      </p>

      <!-- View Switcher Tabs -->
      <div class="flex items-center gap-1.5 sm:gap-2 pt-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center scrollbar-none touch-pan-x -mx-2 px-2 sm:mx-0 sm:px-0">
        <button
          @click="activeTab = 'timeline'"
          :class="[
            'px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shrink-0 border',
            activeTab === 'timeline'
              ? 'bg-amber-600 text-white border-amber-600 shadow-sm shadow-amber-600/30 scale-[1.02]'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-700'
          ]"
        >
          <span>📜</span>
          <span>{{ t('យុគ ៥ ក្នុង ៥០០០ វស្សា', '5 Eras of 5,000 Yrs') }}</span>
        </button>

        <button
          @click="activeTab = 'antaradhana'"
          :class="[
            'px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shrink-0 border',
            activeTab === 'antaradhana'
              ? 'bg-amber-600 text-white border-amber-600 shadow-sm shadow-amber-600/30 scale-[1.02]'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-700'
          ]"
        >
          <span>🔥</span>
          <span>{{ t('អន្តរធាន ៥ ប្រការ', '5 Disappearances') }}</span>
        </button>

        <button
          @click="activeTab = 'metteyya'"
          :class="[
            'px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 shrink-0 border',
            activeTab === 'metteyya'
              ? 'bg-amber-600 text-white border-amber-600 shadow-sm shadow-amber-600/30 scale-[1.02]'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-700'
          ]"
        >
          <span>🪷</span>
          <span>{{ t('ព្រះសិរិអារ្យមេត្រីយ៍ (Metteyya)', 'Metteyya Buddha') }}</span>
        </button>
      </div>
    </header>

    <!-- SECTION 1: THE 5 ERAS OF 5,000 YEARS -->
    <section v-if="activeTab === 'timeline'" class="space-y-6">
      <div class="verse-box p-4 sm:p-5 border-l-4" :style="{ borderColor: 'var(--accent)' }">
        <p class="font-serif italic text-xs sm:text-sm md:text-base leading-relaxed text-center" :style="{ color: 'var(--ink)' }">
          {{ t('«សព្វបដិវេធោ ច បរិយត្តិ ច បវត្តតិ... ដរាបណាដែលការសិក្សាព្រះត្រៃបិដក (បរិយត្តិ) នៅតែមាន ការបដិបត្តិ និងការសម្រេចមគ្គផល (បដិវេធ) ក៏នៅតែមានក្នុងលោកដរាបនោះ»', '«As long as the study of the Tipiṭaka (Pariyatti) endures, holy practice and the attainment of awakening (Paṭivedha) remain alive in the world.»') }}
        </p>
        <p class="text-[11px] sm:text-xs mt-1.5 text-center font-mono text-stone-500">
          — គម្ពីរអដ្ឋកថាសមន្តបាសាទិកា (Samantapāsādikā)
        </p>
      </div>

      <!-- Current Era Alert Banner -->
      <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3">
        <span class="text-2xl shrink-0">📍</span>
        <div class="text-xs sm:text-sm leading-relaxed">
          <strong class="text-emerald-800 dark:text-emerald-300 block font-bold">
            {{ t('បច្ចុប្បន្នយើងស្ថិតក្នុង «យុគទី ៣ ឈានចូលយុគទី ៤» (ប្រហែល ២,៦០០ វស្សា)', 'Current Status: Era 3 transitioning into Era 4 (approx. 2,600 yrs)') }}
          </strong>
          <p class="text-stone-700 dark:text-stone-300 mt-1">
            {{ t('ព្រះពុទ្ធសាសនាកន្លងផុតទៅបានពាក់កណ្តាល (២៦០០ ឆ្នាំ)។ ថ្វីបើព្រះអរហន្តបដិសម្ភិទាពិបាកនឹងរក តែ**ឱកាសសម្រេចជាព្រះសោតាបន្ន ឬព្រះអរហន្តបែបសុក្ខវិបស្សក នៅតែមានយ៉ាងពេញលេញ** ប្រសិនបើខំប្រឹងបដិបត្តិតាមសតិបដ្ឋាន ៤!', 'Half of the 5,000 years has elapsed. While miraculous analytical Arahants are rare, the path to Stream-entry (Sotāpanna) and bare-insight Arahantship remains wide open for diligent practitioners!') }}
          </p>
        </div>
      </div>

      <!-- 5 Millennia Cards -->
      <div class="space-y-3.5">
        <div
          v-for="(era, index) in eras"
          :key="era.id"
          class="card-paper p-4 sm:p-6 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          :class="era.isCurrent ? 'ring-2 ring-emerald-500/50 bg-emerald-500/5' : ''"
        >
          <div class="flex items-start gap-3.5">
            <span class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold text-base sm:text-lg shrink-0">
              {{ index + 1 }}
            </span>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <span class="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                  {{ era.years }}
                </span>
                <span v-if="era.isCurrent" class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white">
                  {{ t('សម័យបច្ចុប្បន្នយើង', 'Current Era') }}
                </span>
              </div>
              <h3 class="font-display text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 mt-1">
                {{ t(era.titleKm, era.titleEn) }}
              </h3>
              <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
                {{ t(era.descKm, era.descEn) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: THE 5 DISAPPEARANCES (ANTARADHĀNA) -->
    <section v-if="activeTab === 'antaradhana'" class="space-y-6">
      <div class="p-4 rounded-2xl bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-xs sm:text-sm leading-relaxed text-stone-700 dark:text-stone-300">
        {{ t('គម្ពីរអដ្ឋកថាបានពន្យល់ថា ការសាបរលាបនៃព្រះពុទ្ធសាសនាក្នុងរយៈពេល ៥០០០ ឆ្នាំ នឹងកើតឡើងជាលំដាប់លំដោយតាម ៥ ដំណាក់កាលដូចខាងក្រោម៖', 'Ancient commentaries detail the gradual extinction of the Sasana in 5 irreversible chronological phases:') }}
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        <div
          v-for="ant in antaradhanas"
          :key="ant.id"
          class="card-paper p-4 sm:p-5 rounded-2xl border space-y-3 flex flex-col justify-between"
        >
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-2xl">{{ ant.icon }}</span>
              <span class="text-xs font-mono font-bold text-red-600 dark:text-red-400 bg-red-500/10 px-2.5 py-0.5 rounded-full border border-red-500/20">
                ដំណាក់កាលទី {{ ant.step }}
              </span>
            </div>

            <div>
              <h3 class="font-display text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
                {{ t(ant.nameKm, ant.nameEn) }}
              </h3>
              <p class="font-serif italic text-xs text-amber-700 dark:text-amber-400">
                {{ ant.pali }}
              </p>
            </div>

            <p class="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              {{ t(ant.descKm, ant.descEn) }}
            </p>
          </div>

          <div class="p-3 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/15 text-[11px] leading-relaxed">
            <strong class="text-amber-800 dark:text-amber-300 block">⚠️ {{ t('សញ្ញាសម្គាល់ជាក់ស្តែង:', 'Observable Manifestation:') }}</strong>
            <span class="text-stone-700 dark:text-stone-300">{{ t(ant.signKm, ant.signEn) }}</span>
          </div>
        </div>
      </div>

      <!-- The Grand Relic Miracle (Dhātu-antaradhāna) Box -->
      <div class="card-paper p-4 sm:p-6 md:p-8 rounded-2xl border-2" :style="{ borderColor: 'var(--accent)', background: 'var(--accent-soft)' }">
        <div class="flex items-center gap-2">
          <span class="text-2xl">🔥</span>
          <span class="chapter-label m-0">{{ t('អព្ភូតហេតុចុងក្រោយនៃព្រះសាសនា', 'THE FINAL DHATU MIRACLE') }}</span>
        </div>
        <h3 class="font-display text-lg sm:text-xl md:text-2xl mt-1.5" :style="{ color: 'var(--ink)' }">
          {{ t('ធាតុអន្តរធាន — ការប្រជុំធាតុចុងក្រោយនៃព្រះបរមសារីរិកធាតុ', 'The Grand Gathering of the Relics at Bodh Gaya') }}
        </h3>
        <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
          {{ t('នៅចុងបញ្ចប់នៃ ៥០០០ វស្សា ព្រះបរមសារីរិកធាតុទាំងអស់នៃព្រះពុទ្ធសមណគោតម ដែលគង់នៅក្នុងឋាននាគ ឋានទេវតា និងមនុស្សលោក នឹងហោះប្រមូលផ្តុំគ្នាមកកាន់គល់ពោធិព្រឹក្សឯពុទ្ធគយា។ ព្រះធាតុទាំងអស់នឹងផ្តុំជារូបព្រះសម្មាសម្ពុទ្ធយ៉ាងពេញលេញ បញ្ចេញរស្មីឆព្វណ្ណរង្សី ៦ ពណ៌ សម្តែងធម៌ទេសនាជាលើកចុងក្រោយបង្អស់ដល់ពពួកទេវតា និងព្រហ្មរាប់កោដិ ហើយភ្លើងតេជោធាតុនឹងឆេះរលត់ស្ងប់ស្ងាត់ទាំងស្រុង — នេះជាទីបញ្ចប់នៃសាសនាព្រះគោតម!', 'At the end of the 5,000 years, every relic across the cosmos will assemble under the Mahābodhi tree at Bodh Gaya. They will re-form into the full physical likeness of the Buddha, emanate the 6-colored halo, preach the Dhamma one last time to assembling devas and brahmas, and spontaneously dissolve into sacred self-generated flame!') }}
        </p>
      </div>
    </section>

    <!-- SECTION 3: METTEYYA BUDDHA (ព្រះសិរិអារ្យមេត្រីយ៍) -->
    <section v-if="activeTab === 'metteyya'" class="space-y-6">
      <div class="verse-box p-4 sm:p-5 border-l-4" :style="{ borderColor: 'var(--accent)' }">
        <p class="font-serif italic text-xs sm:text-sm md:text-base leading-relaxed text-center" :style="{ color: 'var(--ink)' }">
          {{ t('«អហំ ឯតរហិ សម្ពុទ្ធោ... មេត្តេយ្យោ ភវិស្សតិ»', '«Just as I am now the fully enlightened Buddha, so in the future will arise Metteyya, the Teacher of the World.»') }}
        </p>
        <p class="text-[11px] sm:text-xs mt-1.5 text-center font-mono text-stone-500">
          — ចក្កវត្តិសូត្រ (Dīgha Nikāya 26, Cakkavatti Sutta)
        </p>
      </div>

      <!-- Profile Cards of Metteyya Buddha -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        <div class="card-paper p-4 sm:p-5 rounded-2xl border space-y-2.5">
          <span class="text-2xl">👑</span>
          <h4 class="font-display text-base font-bold text-stone-900 dark:text-stone-100">{{ t('ទីកន្លែង និងកាលបរិច្ឆេទ', 'Era & Location') }}</h4>
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ t('បច្ចុប្បន្នទ្រង់គង់នៅឋានតុសិតជាព្រះសន្តុសិតទេវបុត្រ។ ទ្រង់នឹងចុះមកប្រសូតក្នុងនគរកេតុមតី នៅពេលដែលមនុស្សមានអាយុវែងរហូតដល់ ៨០,០០០ ឆ្នាំ។', 'Currently dwelling in Tusita Heaven as Santusita Deva, destined to descend in Ketumatī when human lifespan reaches 80,000 years.') }}
          </p>
        </div>

        <div class="card-paper p-4 sm:p-5 rounded-2xl border space-y-2.5">
          <span class="text-2xl">🌳</span>
          <h4 class="font-display text-base font-bold text-stone-900 dark:text-stone-100">{{ t('ដើមពោធិព្រឹក្ស & កាយសម្បទា', 'Bodhi Tree & Form') }}</h4>
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ t('ទ្រង់នឹងត្រាស់ដឹងក្រោមដើមខ្ទឹង (Nāgarukkha)។ ព្រះកាយមានកម្ពស់ ៨៨ ហត្ថ មានរស្មីភ្លឺត្រចះត្រចង់សព្វទិសដោយមិនបាច់ប្រើចង្កៀងឬភ្លើងឡើយ។', 'Attaining awakening under the Ironwood tree (Nāga), radiating natural golden aura obviating worldly torches.') }}
          </p>
        </div>

        <div class="card-paper p-4 sm:p-5 rounded-2xl border space-y-2.5">
          <span class="text-2xl">🕊️</span>
          <h4 class="font-display text-base font-bold text-stone-900 dark:text-stone-100">{{ t('ស្ថានភាពសង្គមសម័យនោះ', 'Social Utopia') }}</h4>
          <p class="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
            {{ t('ផែនដីរាបស្មើដូចផ្ទៃស្គរ មនុស្សទាំងអស់មានចិត្តមេត្តា គ្មានចោរ គ្មានសង្គ្រាម ដើមឈើកល្បព្រឹក្សដុះពាសពេញអាចបេះសម្លៀកបំពាក់និងអាហារតាមចិត្ត។', 'A utopian era free of war and theft; gentle climate and abundance where wish-fulfilling trees provide requisites.') }}
          </p>
        </div>
      </div>

      <!-- How to make merit to meet Metteyya Buddha -->
      <div class="card-paper p-4 sm:p-6 md:p-8 rounded-2xl border-2" :style="{ borderColor: 'var(--accent)', background: 'var(--accent-soft)' }">
        <div class="flex items-center gap-2">
          <span class="text-2xl">🪷</span>
          <span class="chapter-label m-0">{{ t('បុញ្ញកិរិយាដើម្បីជួបព្រះមេត្រី', 'KARMIC PATHWAY TO METTEYYA') }}</span>
        </div>
        <h3 class="font-display text-lg sm:text-xl md:text-2xl mt-1.5" :style="{ color: 'var(--ink)' }">
          {{ t('តើត្រូវសាងបុណ្យបែបណា ទើបអាចជួបសាសនាព្រះសិរិអារ្យមេត្រីយ៍?', 'How Can We Plant Merits to Meet Metteyya Buddha?') }}
        </h3>
        <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
          {{ t('ក្នុងគម្ពីរអនាគតវង្ស និងគម្ពីរមហាជាតិ ព្រះសម្មាសម្ពុទ្ធទ្រង់សម្តែងថា បុគ្គលដែលមានបំណងចង់ជួបសាសនាព្រះសិរិអារ្យមេត្រីយ៍ ត្រូវសាងកុសលទាំង ៥ នេះ៖', 'The Anāgatavaṃsa canonical texts describe 5 primary merits that condition rebirth in the golden age of Metteyya:') }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs sm:text-sm">
          <div class="p-3.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
            <strong class="text-amber-700 dark:text-amber-400 font-bold block">១. ស្តាប់ធម៌មហាជាតិ (Vessantara Jātaka)</strong>
            <p class="text-stone-600 dark:text-stone-300">
              {{ t('ស្តាប់គាថាពាន់ទាំង ១៣ កណ្ឌនៃរឿងព្រះវេស្សន្តរ ឱ្យចប់ត្រឹមតែមួយថ្ងៃបរិបូណ៌ ដោយសេចក្តីគោរពជ្រះថ្លា។', 'Listening to the complete 1,000 verses of the Vessantara Jātaka within one single day with unbroken devotion.') }}
            </p>
          </div>

          <div class="p-3.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
            <strong class="text-emerald-700 dark:text-emerald-400 font-bold block">២. រក្សាសីល ៥ និងសីល ៨ ឱ្យបរិសុទ្ធ</strong>
            <p class="text-stone-600 dark:text-stone-300">
              {{ t('មិនសម្លាប់សត្វ មិនលួចទ្រព្យ មិនផឹកស្រា ប្រព្រឹត្តតែអំពើសុចរិតក្នុងជីវិតប្រចាំថ្ងៃ។', 'Impeccable observance of the 5 and 8 precepts without breaking core moral covenants.') }}
            </p>
          </div>

          <div class="p-3.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
            <strong class="text-blue-700 dark:text-blue-400 font-bold block">៣. ចម្រើនមេត្តាភាវនាជាប្រចាំ</strong>
            <p class="text-stone-600 dark:text-stone-300">
              {{ t('ពាក្យថា «មេត្តេយ្យ» ប្រែថា មេត្តា។ អ្នកដែលមានចិត្តទន់ភ្លន់ មិនចងគំនុំ តែងផ្សាយមេត្តា រមែងមាននិស្ស័យជួបព្រះអង្គ។', 'Cultivating daily loving-kindness (Mettā) to harmonize one’s mindstream with Metteyya’s nature.') }}
            </p>
          </div>

          <div class="p-3.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-1">
            <strong class="text-purple-700 dark:text-purple-400 font-bold block">៤. ធ្វើមហាទាន (កឋិនទាន & សង្ឃទាន)</strong>
            <p class="text-stone-600 dark:text-stone-300">
              {{ t('ឧស្សាហ៍ទំនុកបម្រុងព្រះសង្ឃ សាងកុដិ វិហារ ស្រះទឹក ផ្លូវថ្នល់ និងជួយសង្គ្រោះជនក្រីក្រ។', 'Offering Sanghadāna, Kathina robes, and building public infrastructure with generous intent.') }}
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
