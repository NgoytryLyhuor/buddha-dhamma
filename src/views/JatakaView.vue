<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៤៦ — ព្រះមហាជាតកទាំង ១០', 'GATHA 46 — THE TEN GREAT JĀTAKAS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ទសជាតក ៖ ព្រះមហាជាតកទាំង ១០', 'Dasa Jātaka : The Ten Great Lives of the Bodhisatta') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ទសជាតក ឬមហាជាតកទាំង ១០ គឺជាដំណើររឿងនៃការសន្សំបារមី ១០ ប្រការយ៉ាងឧត្តុង្គឧត្តមបំផុតរបស់ព្រះពោធិសត្វ ក្នុង ១០ ជាតិចុងក្រោយ មុននឹងព្រះអង្គបានត្រាស់ដឹងជាព្រះសម្មាសម្ពុទ្ធ។ ពុទ្ធសាសនិកខ្មែរគ្រប់ជំនាន់តែងចងចាំតាមពាក្យកាត់ «តែ-ជ-សុ-នេ-ម-ភូ-ច-នា-វិ-វេ» ដែលបង្កប់នូវតម្លៃអប់រំចិត្ត ប្រាជ្ញា សេចក្តីព្យាយាម សីលធម៌ និងការលះបង់ដ៏អស្ចារ្យ។', 'The Ten Great Jātakas chronicle the final ten incarnations of the Bodhisatta, perfecting each of the Ten Supreme Perfections (Pāramīs) prior to attaining Supreme Buddhahood. Remembered through the traditional Khmer mnemonic «Te-Ja-Su-Ne-Ma-Bhu-Ca-Na-Vi-Ve», these masterpieces instill profound resilience, boundless compassion, moral integrity, and wisdom.') }}
    </p>

    <!-- Mnemonic Pill Strip -->
    <div class="card-paper p-4 sm:p-6 mt-8">
      <p class="chapter-label text-center">{{ t('ពាក្យកាត់ទសជាតក ទាំង ១០ ជាតិ', 'THE 10-SYLLABLE SACRED MNEMONIC') }}</p>
      <div class="flex items-center justify-center gap-1.5 sm:gap-2.5 mt-3 flex-wrap">
        <button
          v-for="(j, idx) in jatakas"
          :key="j.code"
          type="button"
          @click="selectJataka(idx)"
          class="w-10 h-10 sm:w-11 sm:h-11 rounded-xl font-display font-black text-sm sm:text-base border transition-all flex items-center justify-center cursor-pointer shadow-xs"
          :style="selectedIndex === idx
            ? { background: 'var(--accent)', color: 'var(--accent-ink, #ffffff)', borderColor: 'var(--accent)', transform: 'scale(1.1)' }
            : { background: 'var(--bg-card-2)', color: 'var(--ink)', borderColor: 'var(--border)' }"
        >
          {{ j.code }}
        </button>
      </div>
      <p class="text-center text-xs mt-3 text-stone-500 font-mono">
        {{ t('ចុចលើអក្សរកាត់នីមួយៗ ដើម្បីអានដំណើររឿង និងបារមី', 'Tap any letter above to explore the story & perfection') }}
      </p>
    </div>

    <!-- Active Jataka Detailed Showcase -->
    <div class="card-paper p-6 md:p-8 mt-6 border-l-4 transition-all" :style="{ borderLeftColor: currentJataka.color }">
      <div class="flex items-start justify-between gap-3 flex-wrap">
        <div>
          <span class="px-2.5 py-1 rounded-full text-xs font-mono font-bold text-white shadow-xs" :style="{ background: currentJataka.color }">
            {{ currentJataka.num }} · {{ currentJataka.code }}
          </span>
          <h3 class="font-display text-2xl sm:text-3xl font-bold mt-2.5" :style="{ color: 'var(--ink)' }">
            {{ t(currentJataka.km, currentJataka.en) }}
          </h3>
          <p class="text-xs sm:text-sm font-bold mt-1" :style="{ color: currentJataka.color }">
            {{ t(`បារមីបំពេញ ៖ ${currentJataka.paramiKm}`, `Perfection : ${currentJataka.paramiEn}`) }}
          </p>
        </div>
        <div class="text-3xl sm:text-4xl">
          {{ currentJataka.icon }}
        </div>
      </div>

      <!-- Story Synopsis -->
      <div class="mt-5 p-4 sm:p-5 rounded-xl border leading-relaxed text-sm sm:text-base" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)', color: 'var(--ink-soft)' }">
        <p class="font-semibold text-xs tracking-wider uppercase mb-1.5" :style="{ color: 'var(--ink-faint)' }">
          {{ t('សង្ខេបដំណើររឿង', 'SYNOPSIS') }}
        </p>
        <p class="leading-loose">{{ t(currentJataka.storyKm, currentJataka.storyEn) }}</p>
      </div>

      <!-- Moral Lesson & Real Life Application -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-4">
        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <p class="text-xs font-bold uppercase tracking-wider text-amber-500 mb-1">
            {{ t('គតិធម៌ដាស់តឿនសតិ', 'MORAL WISDOM') }}
          </p>
          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t(currentJataka.lessonKm, currentJataka.lessonEn) }}
          </p>
        </div>

        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <p class="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-1">
            {{ t('ការអនុវត្តក្នុងជីវិតរស់នៅសព្វថ្ងៃ', 'DAILY APPLICATION') }}
          </p>
          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t(currentJataka.applyKm, currentJataka.applyEn) }}
          </p>
        </div>
      </div>

      <!-- Navigation buttons between Jatakas -->
      <div class="flex items-center justify-between gap-3 mt-6 pt-4 border-t" :style="{ borderColor: 'var(--border)' }">
        <button
          type="button"
          @click="prevJataka"
          class="h-9 px-3 rounded-lg border text-xs font-bold inline-flex items-center gap-1 cursor-pointer"
          :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--ink)' }"
        >
          ← {{ t('ជាតិមុន', 'Previous') }}
        </button>
        <span class="text-xs font-mono font-bold" :style="{ color: 'var(--ink-faint)' }">
          {{ selectedIndex + 1 }} / 10
        </span>
        <button
          type="button"
          @click="nextJataka"
          class="h-9 px-3 rounded-lg border text-xs font-bold inline-flex items-center gap-1 cursor-pointer"
          :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--ink)' }"
        >
          {{ t('ជាតិបន្ទាប់', 'Next') }} →
        </button>
      </div>
    </div>

    <!-- Complete 10 Jatakas Grid Table -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('តារាងសង្ខេបទសជាតក', 'THE 10 JĀTAKAS AT A GLANCE') }}</p>
      <div class="space-y-3 mt-4">
        <div
          v-for="(j, idx) in jatakas"
          :key="j.code"
          @click="selectJataka(idx)"
          class="p-3.5 rounded-xl border flex items-center justify-between gap-3 cursor-pointer transition-all hover:border-amber-500"
          :style="selectedIndex === idx
            ? { background: 'var(--accent-soft)', borderColor: 'var(--accent)' }
            : { background: 'var(--bg-card-2)', borderColor: 'var(--border)' }"
        >
          <div class="flex items-center gap-3 min-w-0">
            <span class="w-8 h-8 rounded-lg font-display font-bold text-sm text-white flex items-center justify-center shrink-0" :style="{ background: j.color }">
              {{ j.code }}
            </span>
            <div class="min-w-0">
              <strong class="text-xs sm:text-sm font-bold block truncate" :style="{ color: 'var(--ink)' }">
                {{ t(j.km, j.en) }}
              </strong>
              <span class="text-[11px] text-stone-500 block truncate">
                {{ t(`បារមី ៖ ${j.paramiKm}`, `Perfection: ${j.paramiEn}`) }}
              </span>
            </div>
          </div>
          <span class="text-xs font-mono font-bold shrink-0 opacity-60">
            {{ j.num }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const selectedIndex = ref(0)
const currentJataka = computed(() => jatakas[selectedIndex.value])

function selectJataka(idx) {
  selectedIndex.value = idx
}

function nextJataka() {
  selectedIndex.value = (selectedIndex.value + 1) % jatakas.length
}

function prevJataka() {
  selectedIndex.value = (selectedIndex.value - 1 + jatakas.length) % jatakas.length
}

const jatakas = [
  {
    num: 'ជាតិទី ០១',
    code: 'តែ',
    color: '#d97706',
    icon: '🧘',
    km: 'ព្រះតេមិយៈ (តេមិយជាតក)',
    en: 'Temiya Jātaka (Mūgapakkha)',
    paramiKm: 'នេក្ខម្មបារមី (ការលះបង់ចេញសាងផ្នួស)',
    paramiEn: 'Nekkhamma Pāramī (Renunciation)',
    storyKm: 'ព្រះពោធិសត្វប្រសូតជាព្រះរាជបុត្រា តែបានឃើញបិតាកាត់ទោសប្រហារជីវិតចោរ ធ្វើឱ្យព្រះអង្គភ័យខ្លាចការសោយរាជ្យដែលនាំឱ្យធ្លាក់នរក។ ព្រះអង្គទ្រាំធ្វើជាមនុស្សគ-ថ្លង់-ខ្វិន អស់រយៈពេល ១៦ ឆ្នាំ ទោះបីត្រូវគេល្បងដោយចំណីអាហារ ដំរីភ្លុក ភ្លើង និងស្រីរបាំក៏មិនកម្រើក រហូតដល់ពេជ្ឈឃាដយកទៅកប់ ទើបព្រះអង្គសម្ដែងកម្លាំងយករទេះបង្វិលលើអាកាស ហើយចេញសាងផ្នួស។',
    storyEn: 'Seeing his royal father sentence criminals to death, Prince Temiya feigned muteness, deafness, and paralysis for 16 years to avoid ruling and descending into hell. When ordered buried alive, he displayed colossal strength and renounced all worldly royalty for the forest.',
    lessonKm: 'ការហ៊ានលះបង់យសស័ក្តិ និងទ្រព្យសម្បត្តិដែលជាអន្ទាក់នៃបាបកម្ម ដើម្បីរក្សាភាពបរិសុទ្ធនៃដួងចិត្ត។',
    lessonEn: 'The courage to renounce worldly power and wealth that lead to unwholesome deeds in order to preserve spiritual purity.',
    applyKm: 'ហ៊ានដើរចេញពីទីកន្លែង ឬមុខរបរដែលទាក់ទាញដោយលុយកាក់ តែបង្ខំឱ្យយើងក្បត់សីលធម៌ និងបំផ្លាញអ្នកដទៃ។',
    applyEn: 'Walking away from lucrative opportunities or environments that compromise your conscience and ethics.'
  },
  {
    num: 'ជាតិទី ០២',
    code: 'ជ',
    color: '#0284c7',
    icon: '🌊',
    km: 'ព្រះមហាជនក (មហាជនកជាតក)',
    en: 'Mahājanaka Jātaka',
    paramiKm: 'វីរិយបារមី (សេចក្ដីព្យាយាមឥតរាថយ)',
    paramiEn: 'Viriya Pāramī (Unflinching Perseverance)',
    storyKm: 'សំពៅរបស់ព្រះមហាជនកបានបែកធ្លាយកណ្តាលមហាសមុទ្រ មនុស្សរាប់រយនាក់ភ័យស្រែកយំរហូតត្រូវត្រីស៊ី។ ចំណែកព្រះមហាជនកបានសោយអាហារឆ្អែត លាបប្រេង រួចលោតហែលក្នុងមហាសមុទ្រ ៧ ថ្ងៃ ៧ យប់ មិនព្រមចុះចាញ់ រហូតទេវធីតាមេខលាឃើញសេចក្តីព្យាយាមដ៏អស្ចារ្យ ក៏ស្រង់យកព្រះអង្គទៅកាន់នគរមិថិលា។',
    storyEn: 'When his ship sank in the boundless ocean, while others wept helplessly and drowned, Mahājanaka ate nourishing food, covered himself in oil, and swam continuously for 7 days and nights until the goddess Maṇimekhalā rescued him in awe of his perseverance.',
    lessonKm: '«បុរសគប្បីព្យាយាមជានិច្ច កុំគប្បីនឿយណាយឡើយ ទោះមិនទាន់ឃើញច្រាំង ក៏ត្រូវតែហែល!»',
    lessonEn: '"A person must keep striving and never despond; even without sight of shore, keep swimming!"',
    applyKm: 'ពេលជួបវិបត្តិជីវិត មិនត្រូវអង្គុយយំស្តាយក្រោយឡើយ ចូរប្រឹងប្រែងធ្វើសកម្មភាពដោះស្រាយដោយស្មារតីរឹងមាំបំផុត។',
    applyEn: 'In deep life crises, refuse passive surrender; take active, relentless action to navigate the storm.'
  },
  {
    num: 'ជាតិទី ០៣',
    code: 'សុ',
    color: '#16a34a',
    icon: '🦌',
    km: 'ព្រះសុវណ្ណសាម (សុវណ្ណសាមជាតក)',
    en: 'Suvaṇṇasāma Jātaka',
    paramiKm: 'មេត្តាបារមី (មេត្តាធម៌ & កតញ្ញូធម៌កំពូល)',
    paramiEn: 'Mettā Pāramī (Loving-Kindness & Filial Piety)',
    storyKm: 'ព្រះពោធិសត្វបានបំពេញកតញ្ញូធម៌ចិញ្ចឹមបីបាច់មាតាបិតាពិការភ្នែកទាំងគូក្នុងព្រៃ។ ដោយសារអំណាចនៃមេត្តាចិត្តដ៏បរិសុទ្ធ សូម្បីសត្វព្រៃកាចសាហាវក៏ដើរតាមព្រះអង្គជាមិត្ត។ ពេលត្រូវព្រួញបំពុលរបស់ព្រះបាទបិលយក្ខរាជ ព្រះអង្គមិនខឹងក្រោធសូម្បីបន្តិច បែរជាបារម្ភពីឪពុកម្តាយដែលគ្មានអ្នកដងទឹកឱ្យទៅវិញ រហូតអំណាចសច្ចកិរិយារបស់មាតាបិតា និងទេវតាធ្វើឱ្យព្រះអង្គរស់ឡើងវិញ។',
    storyEn: 'Suvaṇṇasāma devoted his life caring for his blind hermit parents in the forest, surrounded peacefully by wild animals drawn to his boundless mettā. When mistakenly shot by a poisoned arrow by King Piliyakkha, he felt no hatred, worrying only for his parents.',
    lessonKm: 'មេត្តាធម៌អាចរំងាប់កំហឹង និងសេចក្ដីកាចសាហាវរបស់មនុស្ស និងសត្វទាំងពួងបាន។',
    lessonEn: 'Pure loving-kindness disarms cruelty and transforms hostility into profound harmony.',
    applyKm: 'មើលថែឪពុកម្តាយឱ្យបានល្អបំផុតពេលលោកនៅរស់ និងផ្សាយចិត្តមេត្តាចំពោះមនុស្សជុំវិញខ្លួនដោយគ្មានគំនុំ។',
    applyEn: 'Cherishing your parents with wholehearted dedication and radiating goodwill even to those who harm you.'
  },
  {
    num: 'ជាតិទី ០៤',
    code: 'នេ',
    color: '#9333ea',
    icon: '🪷',
    km: 'ព្រះនេមិរាជ (នេមិរាជជាតក)',
    en: 'Nemi Jātaka',
    paramiKm: 'អធិដ្ឋានបារមី (ការតាំងចិត្តមាំក្នុងការរក្សាសីល)',
    paramiEn: 'Adhiṭṭhāna Pāramī (Unyielding Resolution in Sīla)',
    storyKm: 'ព្រះបាទនេមិរាជ សព្វព្រះទ័យក្នុងការធ្វើទាន និងរក្សាសីលឧបោសថយ៉ាងខ្ជាប់ខ្ជួន រហូតកិត្តិសព្ទល្បីដល់ឋានសួគ៌។ ព្រះឥន្ទ្របានចាត់មាតលីទេវបុត្រឱ្យបររាជរថមកយាងព្រះអង្គទៅទស្សនាស្ថាននរក ឃើញទោសនៃបាបកម្ម និងទស្សនាស្ថានសួគ៌ ឃើញផលនៃបុណ្យ រួចយាងត្រឡប់មកដាស់តឿនមនុស្សលោកឱ្យភ័យខ្លាចបាប។',
    storyEn: 'King Nemi was revered across the cosmos for his unswerving adherence to the 8 precepts and boundless charity. Sakka dispatched Mātali with a celestial chariot to take him on a tour of the hell realms and heavenly palaces, inspiring millions to practice Dhamma.',
    lessonKm: 'ការតាំងចិត្តរក្សាសីលឱ្យបរិសុទ្ធ គឺជាគ្រឹះនៃសេចក្តីស្ងប់ និងជាស្ពាននាំទៅកាន់សុគតិភព។',
    lessonEn: 'Firm moral resolution in ethical precepts is the bedrock of peace and auspicious destiny.',
    applyKm: 'តាំងចិត្តថែរក្សាសីល ៥ ឱ្យបានខ្ជាប់ខ្ជួនក្នុងជីវិត ទោះបីមានការល្បួង ឬសម្ពាធពីសង្គមក៏ដោយ។',
    applyEn: 'Holding steadfast to moral principles even when social pressure or worldly gain tempts you to breach them.'
  },
  {
    num: 'ជាតិទី ០៥',
    code: 'ម',
    color: '#eab308',
    icon: '💡',
    km: 'ព្រះមហោសថ (មហោសថជាតក)',
    en: 'Mahosadha Jātaka',
    paramiKm: 'បញ្ញាបារមី (ប្រាជ្ញាដ៏មុតស្រួចក្នុងការដោះស្រាយបញ្ហា)',
    paramiEn: 'Paññā Pāramī (Supreme Practical Wisdom)',
    storyKm: 'ព្រះមហោសថបណ្ឌិត មានប្រាជ្ញាឈ្លាសវៃតាំងពីអាយុ ៧ ឆ្នាំ ដោះស្រាយប្រស្នាពិបាកៗជាច្រើនដូចជា ប្រស្នាក្បាលគោ ប្រស្នាកំណាត់ឈើ ប្រស្នាគូដណ្តឹង និងបានជួយសង្គ្រោះនគរមិថិលាពីការឡោមព័ទ្ធរបស់ស្តេចចុល្លនីព្រហ្មទត្ត តាមរយៈការកសាងផ្លូវរូងក្រោមដីដ៏អស្ចារ្យដោយមិនបាច់បង្ហូរឈាមទាហានសូម្បីម្នាក់។',
    storyEn: 'From age seven, wise Mahosadha solved insoluble riddles and protected his kingdom against the massive invading army of King Culani Brahmadatta through ingenious tunnel architecture and peaceful diplomacy, averting war without shedding blood.',
    lessonKm: 'ប្រាជ្ញា និងយុទ្ធសាស្ត្រទន់ភ្លន់ អាចយកឈ្នះកម្លាំងកងទ័ព និងសេចក្តីក្រោធដោយសន្តិវិធី។',
    lessonEn: 'Wisdom, foresight, and tactical diplomacy conquer raw brute force without bloodshed.',
    applyKm: 'ប្រើប្រាស់បញ្ញា ហេតុផល និងភាពស្ងប់ស្ងៀមដោះស្រាយបញ្ហាជីវិត មិនត្រូវប្រើកំហឹង ឬហិង្សាឡើយ។',
    applyEn: 'Relying on reasoned wisdom, patience, and non-violent communication to untangle workplace and personal conflicts.'
  },
  {
    num: 'ជាតិទី ០៦',
    code: 'ភូ',
    color: '#0d9488',
    icon: '🐍',
    km: 'ព្រះភូរិទត្ត (ភូរិទត្តជាតក)',
    en: 'Bhūridatta Jātaka',
    paramiKm: 'សីលបារមី (ការលះបង់ជីវិតដើម្បីរក្សាសីល)',
    paramiEn: 'Sīla Pāramī (Unyielding Moral Integrity)',
    storyKm: 'ព្រះពោធិសត្វកើតជាស្តេចនាគរាជភូរិទត្ត មានឫទ្ធិអំណាចខ្លាំងក្លា អាចដុតបំផ្លាញផែនដីបានដោយកំហឹង។ ប៉ុន្តែព្រះអង្គបានមកកោងកាយសមាទានសីលលើដំបូក ត្រូវព្រានអាលម្ពាយចាប់យកទៅធ្វើទារុណកម្ម ចាប់ច្របាច់មាត់ ចាក់ថ្នាំពិស និងបង្ខំឱ្យរាំកណ្តាលវាល តែព្រះអង្គទ្រាំរហូតមិនបញ្ចេញពិស ព្រោះខ្លាចដាច់សីល។',
    storyEn: 'As the majestic Nāga King Bhūridatta, endowed with venom that could incinerate mountains, he coiled upon an anthill to observe holy precepts. Captured and tortured by snake-charmer Ālambāyana, he refused to emit toxic breath to avoid breaking his moral vows.',
    lessonKm: 'ការអត់សង្កត់កំហឹង និងមិនប្រើអំណាចផ្តន្ទាបំពានលើអ្នកដទៃ ទោះជាខ្លួនមានសមត្ថភាពធ្វើបានក៏ដោយ។',
    lessonEn: 'Refusing to use destructive power against antagonists even under torment, honoring ethical integrity above all.',
    applyKm: 'ពេលមានអំណាច ឬមានប្រៀប កុំគាបសង្កត់អ្នកទន់ខ្សោយ ហើយចេះទប់កំហឹងមិនឱ្យធ្វើបាបគេ។',
    applyEn: 'Restraining the urge to strike back when wronged; practicing restraint when you possess power.'
  },
  {
    num: 'ជាតិទី ០៧',
    code: 'ច',
    color: '#f43f5e',
    icon: '🛡️',
    km: 'ព្រះចន្ទកុមារ (ចន្ទកុមារជាតក)',
    en: 'Candakumāra Jātaka',
    paramiKm: 'ខន្តីបារមី (សេចក្ដីអត់ធ្មត់នឹងការឈឺចាប់ និងអយុត្តិធម៌)',
    paramiEn: 'Khanti Pāramī (Sublime Forbearance)',
    storyKm: 'ព្រះចន្ទកុមារ ត្រូវបានអាមាត្យទុច្ចរិតឈ្មោះខណ្ឌហាលព្រាហ្មណ៍ បញ្ចុះបញ្ចូលព្រះរាជាដែលជាបិតា ឱ្យយកព្រះអង្គនិងញាតិវង្សទៅបូជាយញ្ញសម្លាប់ចោល។ ព្រះចន្ទកុមារអត់ធ្មត់ចំពោះការចោទប្រកាន់ និងសេចក្តីស្លាប់ដោយចិត្តស្ងប់ រហូតព្រះឥន្ទ្រចុះមកបំបែករណ្តៅបូជាយញ្ញសង្គ្រោះព្រះអង្គ។',
    storyEn: 'Prince Candakumāra faced execution when a corrupt court priest convinced the king to sacrifice his children to enter heaven. The prince endured wrongful judgment with steadfast forbearance until Sakka shattered the sacrificial altar.',
    lessonKm: 'ខន្តី គឺការអត់ទ្រាំនឹងការប្រមាថ ការយល់ច្រឡំ និងភាពអយុត្តិធម៌ក្នុងលោក។',
    lessonEn: 'Enduring slander, unfair treatment, and adversity without malice in the heart.',
    applyKm: 'អត់ធ្មត់ចំពោះពាក្យតិះដៀល ការច្រណែន និងការយល់ច្រឡំពីអ្នកដទៃ ដោយមិនបាច់តបតដោយកំហឹង។',
    applyEn: 'Enduring harsh criticism or unfair accusations patiently, allowing truth and time to vindicate you.'
  },
  {
    num: 'ជាតិទី ០៨',
    code: 'នា',
    color: '#8b5cf6',
    icon: '⚖️',
    km: 'ព្រះនារទព្រហ្ម (នារទជាតក)',
    en: 'Nārada Jātaka (Mahānāradakassapa)',
    paramiKm: 'ឧបេក្ខាបារមី (ចិត្តស្មើ & ការទម្លុះមិច្ឆាទិដ្ឋិ)',
    paramiEn: 'Upekkhā Pāramī (Equanimity & Demolishing Delusion)',
    storyKm: 'ព្រះបាទអង្គតិរាជ បានធ្លាក់ចូលទៅក្នុងមិច្ឆាទិដ្ឋិដ៏ធ្ងន់ធ្ងរ ជឿថាកម្មផលគ្មានទេ បុណ្យបាបគ្មានទេ រស់នៅដោយសប្បាយសេពកាម។ ព្រះពោធិសត្វដែលជាមហាព្រហ្មនារទ បានចុះមកពីព្រហ្មលោក ពន្យល់អំពីច្បាប់កម្មផល ស្ថាននរក និងស្ថានសួគ៌ ធ្វើឱ្យព្រះរាជាភ្ញាក់រឭក និងលះបង់សេចក្តីវង្វេង។',
    storyEn: 'When King Aṅgati embraced total nihilism, believing there is no karma, no afterlife, and no moral consequence, the Bodhisatta as Brahmā Nārada descended from high celestial realms to demonstrate the reality of cause and effect, converting the king to righteousness.',
    lessonKm: 'ការរក្សាចិត្តស្មើ និងការប្រើប្រាស់បញ្ញាជួយដាស់តឿនអ្នកដទៃឱ្យរួចផុតពីការយល់ខុស (មិច្ឆាទិដ្ឋិ)។',
    lessonEn: 'Equanimity grounded in objective cosmic reality, awakening souls trapped in destructive dogmas.',
    applyKm: 'រក្សាចិត្តឱ្យស្ងប់កណ្តាល មិនលម្អៀងដោយសារការស្រឡាញ់ ស្អប់ ភ័យ ឬវង្វេង។',
    applyEn: 'Holding an objective, balanced mindset free from prejudice, favoritism, and destructive ideologies.'
  },
  {
    num: 'ជាតិទី ០៩',
    code: 'វិ',
    color: '#6366f1',
    icon: '🤝',
    km: 'ព្រះវិធុរបណ្ឌិត (វិធុរជាតក)',
    en: 'Vidhura Paṇḍita Jātaka',
    paramiKm: 'សច្ចបារមី (ភាពស្មោះត្រង់ & សច្ចវាចា)',
    paramiEn: 'Sacca Pāramī (Uncompromising Truthfulness)',
    storyKm: 'ព្រះវិធុរបណ្ឌិត ត្រូវយក្សបុណ្ណកៈល្បងឈ្នះល្បែងបាស្កា យកព្រះអង្គទៅដើម្បីវះយកបេះដូងជូននាងនាគរាជ។ យក្សបានធ្វើទារុណកម្មព្រះអង្គ ទម្លាក់ពីលើកំពូលភ្នំ ក៏ព្រះអង្គមិនខ្លាច ថែមទាំងសម្ដែងធម៌ស្តីពី «សច្ចៈ និងកតញ្ញូ» ដល់យក្ស រហូតយក្សកើតសទ្ធា និងគោរពព្រះអង្គជាគ្រូ។',
    storyEn: 'Won as a prize in a dice game by yakkha Puṇṇaka who sought to kill him and tear out his heart, Vidhura displayed neither fear nor dishonesty. He taught the yakkha the sublime Dhamma of truth and gratitude, turning a demon into a reverent disciple.',
    lessonKm: '«សច្ចវាចា» ពាក្យពិតមិនស្លាប់ ភាពស្មោះត្រង់អាចយកឈ្នះចិត្តបិសាច និងគ្រោះកាចបាន។',
    lessonEn: 'Truthfulness and unwavering integrity command the respect of even the fiercest adversaries.',
    applyKm: 'និយាយពាក្យពិត មិនកុហកបោកប្រាស់ និងរក្សាការសន្យារបស់ខ្លួនឱ្យបានត្រឹមត្រូវបំផុត។',
    applyEn: 'Living with radical honesty, honoring commitments, and never compromising truth for convenience.'
  },
  {
    num: 'ជាតិទី ១០',
    code: 'វេ',
    color: '#dc2626',
    icon: '👑',
    km: 'ព្រះវេស្សន្តរ (វេស្សន្តរជាតក)',
    en: 'Vessantara Jātaka',
    paramiKm: 'ទានបារមី (ទានឧបបារមី & បរមត្ថទានកំពូល)',
    paramiEn: 'Dāna Pāramī (The Supreme Perfection of Giving)',
    storyKm: 'ព្រះវេស្សន្តរជាព្រះមហាពោធិសត្វក្នុងជាតិចុងក្រោយ បានបរិច្ចាគដំរីបច្ច័យនាគេន្ទ្រដែលជាកែវកែវនៃនគរ រហូតត្រូវបណ្តេញទៅនៅភ្នំវង្កត។ នៅទីនោះ ព្រះអង្គបានបរិច្ចាគរាជរថ សេះ រហូតដល់បុត្រទាំងពីរ (ជាលី និងក្រស្នា) ដល់ជូជក និងបរិច្ចាគព្រះនាងមទ្រីដល់ព្រះឥន្ទ្រក្លែងខ្លួន ដើម្បីបំពេញទានបារមីឱ្យដល់កម្រិតកំពូល ត្រៀមត្រាស់ដឹងជាព្រះពុទ្ធ។',
    storyEn: 'In his final human life as Prince Vessantara, he gave away the rain-bringing royal elephant, his chariot, and ultimately his beloved children Jāli and Kaṇhā to mendicant Jūjaka, followed by his devoted wife Maddī to disguised Sakka, perfecting supreme selflessness.',
    lessonKm: 'ការលះបង់អត្តទត្ថបុគ្គល (Ego) និងការជាប់ជំពាក់លើវត្ថុក្រៅខ្លួន ដើម្បីប្រយោជន៍ដ៏ខ្ពង់ខ្ពស់នៃការរំដោះសត្វលោក។',
    lessonEn: 'The absolute surrender of attachment to possessions, pride, and personal ego for the enlightenment of all beings.',
    applyKm: 'ចេះចែករំលែក ជួយសង្គ្រោះជនក្រីក្រ និងកាត់បន្ថយភាពកំណាញ់ស្វិតស្វាញក្នុងចិត្ត។',
    applyEn: 'Cultivating radical generosity, supporting those in need, and overcoming stinginess and greed.'
  }
]
</script>
