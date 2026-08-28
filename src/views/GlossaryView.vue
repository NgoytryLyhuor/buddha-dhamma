<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('វចនានុក្រមធម៌ ១១ — ពន្យល់ពាក្យគន្លឹះ', 'GLOSSARY 11 — KEY PALI WORDS EXPLAINED') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('វចនានុក្រមធម៌ខ្លី', 'A Small Glossary of the Dhamma') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ពាក្យបាលី ជាភាសាដើមនៃព្រះត្រៃបិដក។ ពេលយើងយល់ពាក្យ ដូចជា កម្ម និព្វាន អនិច្ចា ជាភាសាខ្មែរ យើងទើបស្តាប់ធម៌ បានស្គាល់ច្បាស់។ ទំព័រនេះ ប្រមូលពាក្យសំខាន់ៗ មកពន្យល់ ទាំងភាសាខ្មែរ និងអង់គ្លេស ដាក់តាមលំដាប់អក្សរ ឲ្យរកបានងាយ។', 'Pali is the original language of the Tipiṭaka. When we understand words like kamma, nibbāna and anicca, listening to the Dhamma becomes clear. This page gathers the key terms, explains each in plain English, and arranges them alphabetically for easy lookup.') }}
    </p>

    <!-- filter -->
    <div class="card-paper p-5 md:p-6 mt-8">
      <p class="chapter-label">FILTER</p>
      <input
        v-model="q"
        class="w-full mt-3 px-4 py-2.5 text-sm rounded-sm"
        :style="{ background: 'var(--bg-card-2)', color: 'var(--ink)', border: '1px solid var(--border-strong)' }"
        :placeholder="t('ស្វែងរកពាក្យ — ឧ. សទ្ធា បញ្ញា metta', 'Type a word — e.g. saddha panna metta')" />
      <p class="text-xs mt-2" :style="{ color: 'var(--ink-muted)' }">
        {{ t('បានរកឃើញ ' + foundCount + ' ពាក្យ', foundCount + ' terms found') }}
      </p>
    </div>

    <!-- letter groups -->
    <div v-for="g in grouped" :key="g.letter" class="mt-8">
      <p class="chapter-label">{{ g.letter.toUpperCase() }}</p>
      <div class="mt-3 space-y-3">
        <article v-for="it in g.items" :key="it.pl" class="card-paper p-5">
          <div class="flex items-baseline justify-between gap-3 flex-wrap">
            <h3 class="font-display text-lg" :style="{ color: 'var(--ink)' }">
              <span class="paali">{{ it.pl }}</span>
              <span class="ml-2 text-sm" :style="{ color: 'var(--accent)' }">{{ it.en }}</span>
            </h3>
          </div>
          <p class="mt-2 leading-loose text-sm" :style="{ color: 'var(--ink-soft)' }">{{ it.def }}</p>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()

const q = ref('')

const terms = [
  { pl: 'anicca', km: 'អនិច្ចា', en: 'impermanence', def: 'Not lasting — whatever is born by nature changes and passes away every moment; body, feelings, thoughts all ceaselessly changing.' },
  { pl: 'anattā', km: 'អនត្តា', en: 'not-self', def: 'Not a self — within the five aggregates there is nothing to control and no changeless owner to call truly "I" or "mine".' },
  { pl: 'arahant', km: 'អរហន្ត', en: 'worthy one', def: 'One who has reached arahantship — defilements exhausted, free from rebirth, with nothing to cling to and no delusion — worthy of offerings.' },
  { pl: 'avijjā', km: 'អវិជ្ជា', en: 'ignorance', def: 'Not seeing the Four Noble Truths clearly — mistaking as pleasant what is really suffering — the root of all dukkha.' },
  { pl: 'bhāvanā', km: 'ភាវនា', en: 'mental cultivation', def: 'Cultivation — training the mind well — of two kinds: samatha bhāvanā (practising calm) and vipassanā bhāvanā (cultivating insight).' },
  { pl: 'cetanā', km: 'ចេតនា', en: 'intention', def: 'The decisive act of willing — the Buddha taught that volition is what we call kamma, for a deed always begins from a mind that has chosen first.' },
  { pl: 'dāna', km: 'ទាន', en: 'generosity', def: 'Giving, letting go of greed — the first of the ten perfections, the gateway to merit. Giving with a pure heart brings happiness to giver and receiver alike.' },
  { pl: 'dukkha', km: 'ទុក្ខ', en: 'suffering, unsatisfactoriness', def: 'Suffering — of three kinds: dukkha-dukkhatā (bodily pain), vipariṇāma-dukkhatā (suffering through change and loss) and saṅkhāra-dukkhatā (the instability of all that is conditioned). It is the first noble truth.' },
  { pl: 'hiri', km: 'ហិរិ', en: 'moral shame', def: 'Moral shame — being ashamed of evil in oneself, paired with ottappa (fear of evil out of respect for others) — the Dhamma that guards the world.' },
  { pl: 'jhāna', km: 'ឈាន', en: 'absorption', def: 'The mind fixed on a single object — four stages: first, second, third and fourth jhāna — born of deep concentration, leading the mind to calm purity.' },
  { pl: 'kamma', km: 'កម្ម', en: 'action, deed', def: 'Action — of body, speech and mind, born of intention — good or bad; beings fare well or ill by their own kamma, with no one to decree it.' },
  { pl: 'kilesa', km: 'កិលេស', en: 'defilements', def: 'Stains that dirty the mind — such as greed, hatred and delusion — the destroyers of merit to be abandoned; they keep beings turning in saṃsāra.' },
  { pl: 'karuṇā', km: 'ករុណា', en: 'compassion', def: 'Compassion — caring tenderness toward beings in suffering — the chief of the four brahmavihāras (with mettā, muditā, upekkhā) — the opposite of harming living beings.' },
  { pl: 'lobha', km: 'លោភៈ', en: 'greed', def: 'Greed — craving and clinging to things — one of the three unwholesome roots along with aversion and delusion; its opposite alobha is wholesome.' },
  { pl: 'metta', km: 'មេត្តា', en: 'loving-kindness', def: 'Loving-kindness — goodwill and care toward all beings, radiated without limit — the opposite of ill-will; one who abides in mettā sleeps happily and wakes refreshed.' },
  { pl: 'muditā', km: 'មុទិតា', en: 'sympathetic joy', def: 'Joy in the welfare of others — the opposite of envy — the quality that keeps the mind cool even when others prosper.' },
  { pl: 'nibbāna', km: 'និព្វាន', en: 'extinction, the deathless', def: 'The end of suffering, the end of defilements — release from saṃsāra, from birth and death — the highest happiness, praised by the Buddha.' },
  { pl: 'paññā', km: 'បញ្ញា', en: 'wisdom, discernment', def: 'Clear knowing — seeing the truths, the five aggregates and the defilements as they truly are — the faculty that uproots delusion — the noblest knowledge in the Buddha-sāsana.' },
  { pl: 'pāramī', km: 'បារមី', en: 'perfections', def: 'The ten perfections to fulfil on the way to awakening: dāna, sīla, nekkhamma, paññā, viriya, khanti, sacca, adhiṭṭhāna, mettā, upekkhā.' },
  { pl: 'saddhā', km: 'សទ្ធា', en: 'faith, confidence', def: 'Faith — confidence in awakening, in kamma and its result — like a hand that gathers virtue — faith that is examined and confirmed by wisdom.' },
  { pl: 'samādhi', km: 'សមាធិ', en: 'concentration', def: 'The mind established on a single object without wavering — the basis for wisdom — in the practice path it is right concentration, the eighth factor of the eightfold path.' },
  { pl: 'saṃsāra', km: 'សង្សារ', en: 'the round of rebirth', def: 'The round of rebirth — being born, dying and being born again across the thirty-one planes, driven by kamma and defilements — without beginning or end — the suffering from which nibbāna is the escape.' },
  { pl: 'sīla', km: 'សីល', en: 'virtue, morality', def: 'Keeping body and speech virtuous — the five precepts for laypeople are the foundation of concentration and wisdom — one of pure conduct sleeps and wakes at ease, with no fear in the heart.' },
  { pl: 'taṇhā', km: 'តណ្ហា', en: 'craving', def: 'Craving — thirst for sense pleasures, for existence, for extinction — the cause of suffering (the second noble truth) — like water flowing in, never satisfied.' },
  { pl: 'upekkhā', km: 'ឧបេក្ខា', en: 'equanimity', def: 'Remaining even-minded — unshaken by pleasure or pain, gain or loss — born of wisdom — the culmination of the four brahmavihāras.' },
  { pl: 'viriya', km: 'វីរិយៈ', en: 'energy, effort', def: 'Energy — effort to abandon the bad, develop the good and complete the task — one of the five faculties together with saddhā, sati, samādhi, paññā.' },
]

const grouped = computed(() => {
  const s = q.value.trim().toLowerCase()
  const filtered = !s ? terms : terms.filter(i =>
    (i.pl + ' ' + i.km + ' ' + i.en).toLowerCase().includes(s))
  const map = {}
  for (const it of filtered) {
    const letter = it.pl[0].toUpperCase()
    ;(map[letter] = map[letter] || []).push(it)
  }
  return Object.keys(map).sort().map(letter => ({ letter, items: map[letter] }))
})

const foundCount = computed(() => grouped.value.reduce((n, g) => n + g.items.length, 0))
</script>