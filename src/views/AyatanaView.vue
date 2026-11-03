<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៦០ — អាយតនៈ ១២ & ធាតុ ១៨', 'GATHA 60 — 12 SENSE BASES & 18 ELEMENTS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('អាយតនៈ ១២ & ធាតុ ១៨ ៖ យន្តការនៃការដឹងពិភពលោក', 'The 12 Āyatanas & 18 Dhātus: Sensory Reality Mechanism') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('តើយើងដឹងពីពិភពលោកនេះដោយរបៀបណា? នៅក្នុងពុទ្ធសាសនា ការដឹងទាំងអស់កើតឡើងតាមរយៈ «អាយតនៈ ១២» (ទ្វារទទួល ៦ ខាងក្នុង ប៉ះនឹង អារម្មណ៍ ៦ ខាងក្រៅ)។ នៅពេលដែលទ្វារខាងក្នុង និងអារម្មណ៍ខាងក្រៅប៉ះទង្គិចគ្នា វានឹងបង្កើតជា «វិញ្ញាណធាតុ ៦» ដែលបូកបញ្ចូលគ្នាបង្កើតបានជា «ធាតុ ១៨»។ ការយល់ដឹងពីអាយតនៈ និងធាតុ គឺជាគន្លឹះកាត់ផ្តាច់នូវការយល់ច្រឡំថា មាន «យើង» ឬ «ព្រលឹងអត្តា» ពីព្រោះអ្វីៗសុទ្ធតែជាការប៉ះទង្គិចនៃធាតុធម្មជាតិដែលកើតហើយរលត់ទៅវិញប៉ុណ្ណោះ។', 'How do we perceive reality? In Buddhist phenomenology, all experience occurs through the 12 Sense Bases (Āyatana): 6 Internal Sense Organs meeting 6 External Sense Objects. When an internal base connects with an external object, sensory consciousness (Viññāṇa) sparks into being. Together (6 Organs + 6 Objects + 6 Consciousnesses), they constitute the 18 Elements (Dhātu). Penetrating this mechanism dismantles the illusion of an autonomous self, revealing reality as transient, conditioned causal streams.') }}
    </p>

    <!-- The 18 Elements Interactive Equation -->
    <div class="card-paper p-6 md:p-8 rounded-2xl border mt-8">
      <div class="text-center max-w-xl mx-auto">
        <span class="text-xs font-mono font-bold uppercase tracking-wider text-amber-500">
          {{ t('សមីការធាតុ ១៨ (THE 18 ELEMENTS FORMULA)', 'THE 18 ELEMENTS FORMULA') }}
        </span>
        <h3 class="font-display text-xl sm:text-2xl font-bold mt-1" :style="{ color: 'var(--ink)' }">
          {{ t('ទ្វារ ៦ (ខាងក្នុង) + អារម្មណ៍ ៦ (ខាងក្រៅ) + វិញ្ញាណ ៦ = ១៨ ធាតុ', '6 Internal Organs + 6 External Objects + 6 Consciousnesses = 18 Dhātus') }}
        </h3>
      </div>

      <!-- 6 Gateways Triads Table -->
      <div class="space-y-3 mt-6">
        <div
          v-for="(triad, idx) in sensoryTriads"
          :key="idx"
          class="p-4 rounded-xl border grid grid-cols-1 md:grid-cols-12 items-center gap-3 transition"
          :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }"
        >
          <!-- Gateway (Internal) -->
          <div class="md:col-span-4 flex items-center gap-2.5">
            <span class="text-2xl shrink-0">{{ triad.icon }}</span>
            <div>
              <p class="text-[10px] uppercase font-mono text-amber-500 font-bold">ទ្វារខាងក្នុង (Organ)</p>
              <h4 class="font-bold text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
                {{ idx + 1 }}. {{ t(triad.internalKm, triad.internalEn) }}
              </h4>
              <p class="text-[10px] font-mono text-stone-500">{{ triad.internalPali }}</p>
            </div>
          </div>

          <!-- Symbol plus -->
          <div class="hidden md:flex md:col-span-1 justify-center text-stone-400 font-bold">+</div>

          <!-- Object (External) -->
          <div class="md:col-span-3">
            <p class="text-[10px] uppercase font-mono text-sky-500 font-bold">អារម្មណ៍ខាងក្រៅ (Object)</p>
            <h4 class="font-bold text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">
              {{ t(triad.externalKm, triad.externalEn) }}
            </h4>
            <p class="text-[10px] font-mono text-stone-500">{{ triad.externalPali }}</p>
          </div>

          <!-- Symbol arrow -->
          <div class="hidden md:flex md:col-span-1 justify-center text-stone-400 font-bold">&rarr;</div>

          <!-- Consciousness (Result) -->
          <div class="md:col-span-3 p-2.5 rounded-lg border bg-emerald-500/5 border-emerald-500/20">
            <p class="text-[10px] uppercase font-mono text-emerald-600 dark:text-emerald-400 font-bold">វិញ្ញាណដឹង (Consciousness)</p>
            <h4 class="font-bold text-xs sm:text-sm text-emerald-700 dark:text-emerald-300">
              {{ t(triad.vinnanaKm, triad.vinnanaEn) }}
            </h4>
            <p class="text-[10px] font-mono text-stone-500">{{ triad.vinnanaPali }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Vipassana Insight from Ayatana -->
    <div class="card-paper p-6 md:p-8 rounded-2xl border mt-8 border-t-4" :style="{ borderTopColor: 'var(--accent)' }">
      <p class="chapter-label">{{ t('ការពិចារណាវិបស្សនា', 'VIPASSANA CONTEMPLATION') }}</p>
      <h3 class="font-display text-xl font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
        {{ t('ដំណើរវិវត្ត ៖ អាយតនៈ &rarr; ផស្សៈ &rarr; វេទនា &rarr; តណ្ហា', 'The Chain: Sense Base &rarr; Contact &rarr; Feeling &rarr; Craving') }}
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-4 gap-3 mt-5 text-center text-xs">
        <div class="p-3 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-xl">👁️</span>
          <h4 class="font-bold mt-1" :style="{ color: 'var(--ink)' }">១. អាយតនៈ</h4>
          <p class="text-[11px] text-stone-500 mt-1">ភ្នែកប៉ះនឹងរូប</p>
        </div>

        <div class="p-3 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-xl">⚡</span>
          <h4 class="font-bold mt-1" :style="{ color: 'var(--ink)' }">២. ផស្សៈ (Contact)</h4>
          <p class="text-[11px] text-stone-500 mt-1">ការប្រជុំគ្នាបង្កើតការប៉ះ</p>
        </div>

        <div class="p-3 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <span class="text-xl">🎭</span>
          <h4 class="font-bold mt-1" :style="{ color: 'var(--ink)' }">៣. វេទនា (Feeling)</h4>
          <p class="text-[11px] text-stone-500 mt-1">ដឹងថាស្រួល ឬមិនស្រួល</p>
        </div>

        <div class="p-3 rounded-xl border bg-rose-500/10 border-rose-500/30">
          <span class="text-xl">🔥</span>
          <h4 class="font-bold mt-1 text-rose-600 dark:text-rose-400">៤. តណ្ហា (Craving)</h4>
          <p class="text-[11px] text-stone-500 mt-1">បើស្រួលចង់បាន បើមិនស្រួលខឹង</p>
        </div>
      </div>

      <div class="mt-4 p-3.5 rounded-xl border bg-amber-500/5 border-amber-500/20 text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        💡 <strong>កន្លែងកាត់ផ្តាច់កិលេស ៖</strong> ព្រះពុទ្ធបង្រៀនឱ្យយក <strong>«សតិ»</strong> ទៅស្ទាក់នៅត្រង់ <strong>«ផស្សៈ»</strong> ឬ <strong>«វេទនា»</strong> គឺ <em>«គ្រាន់តែឃើញ ត្រឹមតែឃើញ; គ្រាន់តែឮ ត្រឹមតែឮ»</em> កុំឱ្យចិត្តរអិលធ្លាក់ចូលទៅក្នុង <strong>«តណ្ហា»</strong> ឡើយ។
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const sensoryTriads = [
  {
    icon: '👁️',
    internalKm: 'ភ្នែក (ចក្ខ្វាយតនៈ)',
    internalEn: 'Eye Base',
    internalPali: 'Cakkhāyatana',
    externalKm: 'រូបពណ៌ (រូបាយតនៈ)',
    externalEn: 'Visible Form',
    externalPali: 'Rūpāyatana',
    vinnanaKm: 'ចក្ខុវិញ្ញាណ (ការឃើញ)',
    vinnanaEn: 'Eye-Consciousness',
    vinnanaPali: 'Cakkhu-viññāṇa'
  },
  {
    icon: '👂',
    internalKm: 'ត្រចៀក (សោតាយតនៈ)',
    internalEn: 'Ear Base',
    internalPali: 'Sotāyatana',
    externalKm: 'សំឡេង (សទ្ទាយតនៈ)',
    externalEn: 'Sound Object',
    externalPali: 'Saddāyatana',
    vinnanaKm: 'សោតវិញ្ញាណ (ការឮ)',
    vinnanaEn: 'Ear-Consciousness',
    vinnanaPali: 'Sota-viññāṇa'
  },
  {
    icon: '👃',
    internalKm: 'ច្រមុះ (ឃានាយតនៈ)',
    internalEn: 'Nose Base',
    internalPali: 'Ghānāyatana',
    externalKm: 'ក្លិន (គន្ធាយតនៈ)',
    externalEn: 'Odor Object',
    externalPali: 'Gandhāyatana',
    vinnanaKm: 'ឃានវិញ្ញាណ (ការធុំក្លិន)',
    vinnanaEn: 'Nose-Consciousness',
    vinnanaPali: 'Ghāna-viññāṇa'
  },
  {
    icon: '👅',
    internalKm: 'អណ្តាត (ជិវ្ហាយតនៈ)',
    internalEn: 'Tongue Base',
    internalPali: 'Jivhāyatana',
    externalKm: 'រសជាតិ (រសាយតនៈ)',
    externalEn: 'Flavor Object',
    externalPali: 'Rasāyatana',
    vinnanaKm: 'ជិវ្ហាវិញ្ញាណ (ការដឹងរស)',
    vinnanaEn: 'Tongue-Consciousness',
    vinnanaPali: 'Jivhā-viññāṇa'
  },
  {
    icon: '✋',
    internalKm: 'កាយ (កាយាយតនៈ)',
    internalEn: 'Body Base',
    internalPali: 'Kāyāyatana',
    externalKm: 'ការប៉ះពាល់ (ផោដ្ឋព្វាយតនៈ)',
    externalEn: 'Tangible Object',
    externalPali: 'Phoṭṭhabbāyatana',
    vinnanaKm: 'កាយវិញ្ញាណ (ការដឹងប៉ះ)',
    vinnanaEn: 'Body-Consciousness',
    vinnanaPali: 'Kāya-viññāṇa'
  },
  {
    icon: '🧠',
    internalKm: 'ចិត្ត (មនាយតនៈ)',
    internalEn: 'Mind Base',
    internalPali: 'Manāyatana',
    externalKm: 'អារម្មណ៍ក្នុងចិត្ត (ធម្មាយតនៈ)',
    externalEn: 'Mental Object',
    externalPali: 'Dhammāyatana',
    vinnanaKm: 'មនោវិញ្ញាណ (ការគិតដឹង)',
    vinnanaEn: 'Mind-Consciousness',
    vinnanaPali: 'Mano-viññāṇa'
  }
]
</script>
