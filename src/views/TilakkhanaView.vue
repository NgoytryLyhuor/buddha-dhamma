<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៧៥ — ទិលក្ខណៈ ៣ យ៉ាង', 'GATHA 75 — THE 3 UNIVERSAL CHARACTERISTICS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ទិលក្ខណៈ ៣ ៖ អនិច្ចំ ទុក្ខំ អនត្តា — កំពូលសច្ចធម៌នៃធម្មជាតិ', 'Tilakkhaṇa — The 3 Universal Characteristics of Existence') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ទិលក្ខណៈ សំដៅលើលក្ខណៈរួមជាសកល ៣ យ៉ាងរបស់សង្ខារធម៌ទាំងពួងក្នុងលោក ដែលព្រះសម្មាសម្ពុទ្ធទ្រង់បានត្រាស់ដឹង និងយកមកបើកបង្ហាញដល់សត្វលោក។ មិនថាជាវត្ថុមានជីវិត ឬគ្មានជីវិត មិនថាជាផ្កាយលើមេឃ ឬជាកោសិកាក្នុងរាងកាយ សុទ្ធតែស្ថិតនៅក្រោមក្រឹត្យក្រមធម្មជាតិទាំង ៣ នេះទាំងអស់ គឺ ៖ ភាពមិនទៀងទាត់ (អនិច្ចំ), ភាពទ្រាំនៅដដែលមិនបាន នាំមកនូវសេចក្តីទុក្ខ (ទុក្ខំ), និងភាពមិនមែនជារបស់ខ្លួន គ្មានអត្តាពិតប្រាកដ (អនត្តា)។ ការយល់ធ្លុះនូវទិលក្ខណៈ គឺជាគន្លឹះតែមួយគត់ដែលរំដោះចិត្តឱ្យរួចផុតពីការជាប់ជំពាក់ទាំងពួង។', 'Tilakkhaṇa defines the three universal characteristics governing all conditioned phenomena across the cosmos. Discovered and illuminated by the Buddha, every mental and physical event—from galactic rotations to subatomic pulses—is marked inherently by three cosmic laws: impermanence (Anicca), unsatisfactoriness/stress (Dukkha), and non-self/insubstantiality (Anattā). Directly piercing these three truths through insight meditation is the singular doorway that dissolves clinging and delivers liberation.') }}
    </p>

    <!-- Pali Gatha Box from Dhammapada -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«សព្វេ សង្ខារា អនិច្ចាតិ យទា បញ្ញាយ បស្សតិ, អថ និព្វិន្ទតិ ទុក្ខេ ឯស មគ្គោ វិសុទ្ធិយា។ សព្វេ ធម្មា អនត្តាតិ...»', '"When one perceives with wisdom that all conditioned formations are impermanent, then one turns away from suffering. This is the path to purity... When one perceives that all phenomena are non-self..." — Dhammapada 277-279') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— ព្រះធម្មបទ គាថា ២៧៧-២៧៩ មគ្គវគ្គ', '— Dhammapada, Maggavagga, Verses 277-279') }}
      </p>
    </div>

    <!-- The 3 Marks Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>☸️</span>
        <span>{{ t('លក្ខណៈធំៗទាំង ៣ នៃទិលក្ខណៈ', 'The 3 Universal Marks in Detail') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="item in characteristics"
          :key="item.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                {{ item.num }}
              </span>
              <span class="text-3xl">{{ item.icon }}</span>
            </div>

            <div class="mt-3">
              <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">
                {{ t(item.titleKm, item.titleEn) }}
              </h4>
              <p class="text-[11px] font-mono text-stone-500">{{ item.pali }}</p>
              <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                {{ t(item.descKm, item.descEn) }}
              </p>
            </div>
          </div>

          <!-- Insight for Meditation -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2.5 rounded-lg bg-stone-500/5 border border-stone-500/15">
              <strong class="font-bold text-amber-700 dark:text-amber-300 block mb-0.5">
                💡 {{ t('វិធីសង្កេតក្នុងសមាធិ ៖', 'Insight Observation:') }}
              </strong>
              <span class="text-stone-600 dark:text-stone-400">{{ t(item.insightKm, item.insightEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- The Profound Semantic Difference: Sankhara vs Dhamma -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>✨</span>
        <span>{{ t('ចំណុចដ៏ជ្រាលជ្រៅ ៖ សព្វេ សង្ខារា vs សព្វេ ធម្មា', 'Subtle Distinction: Sabbe Saṅkhārā vs Sabbe Dhammā') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រះពុទ្ធទ្រង់ត្រាស់ថា «សព្វេ សង្ខារា អនិច្ចា» (សង្ខារទាំងពួងមិនទៀង), «សព្វេ សង្ខារា ទុក្ខា» (សង្ខារទាំងពួងជាទុក្ខ) ប៉ុន្តែចំពោះអនត្តា ទ្រង់ត្រាស់ថា «សព្វេ ធម្មា អនត្តា» (ធម៌ទាំងពួងមិនមែនជារបស់ខ្លួន)។ ហេតុអ្វីបានជាទ្រង់ប្រើពាក្យ ធម្មា? ពីព្រោះពាក្យ ធម្មា នេះ រាប់បញ្ចូលទាំង «ព្រះនិព្វាន» ផងដែរ។ ព្រះនិព្វានទៀងទាត់ (និច្ចំ) និងជាសុខកំពូល (បរមំ សុខំ) តែព្រះនិព្វានក៏ជា «អនត្តា» មិនមែនជាតួខ្លួន ឬព្រលឹងរបស់នរណាម្នាក់ឡើយ!', 'Notice the Buddha\'s precise terminology: "Sabbe saṅkhārā aniccā" (all formations are impermanent), "Sabbe saṅkhārā dukkhā" (all formations are suffering), BUT "Sabbe dhammā anattā" (all DHAMMA are non-self). Why the word "Dhammā"? Because "Dhammā" encompasses Nibbāna! Nibbāna is permanent (Niccaṃ) and supreme peace (Paramam sukhaṃ), yet even Nibbāna is Anattā—it is not an ego, an eternal cosmic soul, or a personal self.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const characteristics = [
  {
    id: 1,
    num: '១',
    titleKm: 'អនិច្ចំ (ភាពមិនទៀងទាត់ & ប្រែប្រួល)',
    titleEn: 'Impermanence (Anicca)',
    pali: 'Aniccā — កើតឡើង តាំងនៅមួយរំពេច រលត់ទៅវិញ',
    icon: '🌊',
    descKm: 'អ្វីៗទាំងអស់ដែលកើតចេញពីការផ្សំផ្គុំ (សង្ខារ) គ្មានអ្វីមួយស្ថិតស្ថេររហូតឡើយ។ អារម្មណ៍សប្បាយ ទុក្ខព្រួយ កោសិកា រាងកាយ ទ្រព្យសម្បត្តិ សុទ្ធតែកើតឡើងហើយរលត់ទៅវិញរាល់វិនាទី។',
    descEn: 'All compounded phenomena arise, persist momentarily, and dissolve. Pleasant emotions, grief, biological cells, and empires are in a ceaseless flux of perpetual arising and vanishing.',
    insightKm: 'ពេលដកដង្ហើមចូលហើយដកដង្ហើមចេញ ចូរមើលការកើតរលត់នៃអារម្មណ៍ មិនតោងទាមសូម្បីតែសេចក្តីស្ងប់។',
    insightEn: 'In meditation, observe the swift arising and passing away of bodily sensations and thoughts without holding on.',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'ទុក្ខំ (ភាពទ្រាំនៅដដែលមិនបាន & នាំមកនូវទុក្ខ)',
    titleEn: 'Unsatisfactoriness / Stress (Dukkha)',
    pali: 'Dukkha — ការត្រូវកិលេសនិងធម្មជាតិបៀតបៀនជានិច្ច',
    icon: '🔥',
    descKm: 'ដោយសារតែអ្វីៗមិនទៀង ទើបយើងមិនអាចបង្ខំវាឱ្យនៅតែល្អដដែលបានឡើយ។ ការប្រឹងតោងទាមរបស់ដែលត្រូវបែកបាក់ គឺជាប្រភពនៃសេចក្តីទុក្ខ ដូចជាជរា ព្យាធិ មរណៈ និងការព្រាត់ប្រាស។',
    descEn: 'Because conditioned things are impermanent, they cannot provide lasting security. Clinging to unstable phenomena inevitably breeds distress, grief, decay, and disappointment.',
    insightKm: 'មើលឃើញថា រូបកាយ និងចិត្ត មិនមែនជាកន្លែងសុខស្ងប់ដាច់ខាតទេ វាជាដុំទុក្ខដែលផ្លាស់ប្តូរឥតឈប់។',
    insightEn: 'Realize that clinging to feelings as "me" or "mine" creates strain; letting go reveals immediate release.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'អនត្តា (ភាពគ្មានខ្លឹមសារអត្តា & មិនមែនរបស់ខ្លួន)',
    titleEn: 'Non-Self / Insubstantiality (Anattā)',
    pali: 'Anattā — មិនមែនជាតួខ្លួន គ្មានអ្នកបញ្ជាពិតប្រាកដ',
    icon: '🪞',
    descKm: 'កំពូលនៃទស្សនវិជ្ជាពុទ្ធសាសនា ៖ គ្មាន «ព្រលឹងអមតៈ» គ្មាន «អាត្ម័ន» ឬ «អញ» នៅពីក្រោយខន្ធ ៥ ឡើយ។ រូបនិងចិត្តដំណើរការតាមខ្សែចង្វាក់ហេតុផល (បដិច្ចសមុប្បាទ) បើយើងបញ្ជាវាបាន យើងមុខជាមិនឱ្យវាឈឺ ឬចាស់ឡើយ។',
    descEn: 'The hallmark of Buddhist insight: there is no permanent soul, self, or independent agent behind the aggregates. Phenomena unfold via causal networks. If body were self, you could order it never to age or fall ill.',
    insightKm: 'សង្កេតឃើញគំនិតកើតឡើងដោយសារហេតុ មិនមែនជា «ខ្ញុំគិត» ទេ គ្រាន់តែជា «ធម្មជាតិដឹងអារម្មណ៍»។',
    insightEn: 'Deconstruct the illusion of an inner commander. See that thoughts arise by conditions, not as a personal "I".',
  },
]
</script>
