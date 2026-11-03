<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៨២ — រូបឈាន ៤ & ឈានង្គ ៥', 'GATHA 82 — THE 4 RUPA JHANAS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('រូបឈាន ៤ ពិស្តារ ៖ កម្រិតសមាធិកំពូល & ឧបមាទាំង ៤ ក្នុងបិដក', 'The 4 Rūpa Jhānas — Depths of Meditative Absorption') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('រូបឈាន សំដៅលើកម្រិតនៃសមាធិដ៏ជ្រាលជ្រៅបំផុតខាងផ្លូវចិត្ត ដែលកើតឡើងពីការស្ងប់រម្ងាប់នៃនីវរណធម៌ទាំង ៥ និងការតម្កល់ចិត្តមូលមាំលើអារម្មណ៍កម្មដ្ឋានតែមួយ។ នៅក្នុងសាមញ្ញផលសូត្រ (DN 2) ព្រះសម្មាសម្ពុទ្ធទ្រង់បានត្រាស់សម្ដែងដំណាក់កាលនៃរូបឈានទាំង ៤ កម្រិត ព្រមទាំងឧបមាដ៏រស់រវើក ៤ បែប ដើម្បីបង្ហាញពីសភាពនៃសេចក្តីស្ងប់ និងសេចក្តីសុខដ៏បរិសុទ្ធដែលកាយនិងចិត្តបានជ្រួតជ្រាប។ ឈាន មិនត្រឹមតែជាទីពឹងនៃសេចក្តីស្ងប់ក្នុងបច្ចុប្បន្ន (ទិដ្ឋធម្មសុខវិហារ) ប៉ុណ្ណោះទេ ថែមទាំងជាគ្រឹះដ៏រឹងមាំសម្រាប់ចម្រើនវិបស្សនាទម្លុះទម្លាយកិលេសទៀតផង។', 'Rūpa Jhānas designate the four profound progressive levels of meditative absorption realized when consciousness completely subdues the five hindrances and unifies single-pointedly upon the meditation object. In the Sāmaññaphala Sutta (DN 2), the Buddha illustrated each absorption through four magnificent similes depicting how pure spiritual bliss and serenity thoroughly saturate every fiber of the physical body. Far from mere trance, the Jhānas provide a pristine, radiant platform of mental stillness from which liberating insight (Vipassanā) directly operates.') }}
    </p>

    <!-- Pali Gatha Box from Sāmaññaphala Sutta (DN 2) -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«វិវិច្ចេវ កាមេហិ វិវិច្ច អកុសលេហិ ធម្មេហិ, សវិតក្កំ សវិចារំ វិវេកជំ បីតិសុខំ បឋមំ ឈានំ ឧបសម្បជ្ជ វិហរតិ។»', '"Quite secluded from sensual pleasures, secluded from unwholesome states, one enters and abides in the first jhāna, accompanied by applied and sustained thought, with rapture and pleasure born of seclusion." — Dīgha Nikāya 2') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— សាមញ្ញផលសូត្រ សីលក្ខន្ធវគ្គ ទីឃនិកាយ', '— Sāmaññaphala Sutta, Dīgha Nikāya') }}
      </p>
    </div>

    <!-- The 5 Factors of Jhāna -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>⚡</span>
        <span>{{ t('ឈានង្គ ៥ ៖ គ្រឿងផ្សំនៃសមាធិជាន់ខ្ពស់', 'The 5 Jhāna Factors (Jhānaṅga)') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('កាលណាចិត្តស្ងប់ចាកនីវរណៈ ឈានង្គទាំង ៥ នេះនឹងផុសឡើងប្រជុំគ្នា ៖', 'When the five hindrances are pacified, these five sublime factors coalesce:') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mt-4 text-xs">
        <div class="p-3 rounded-xl border bg-amber-500/5 border-amber-500/20 text-center">
          <div class="font-bold text-amber-700 dark:text-amber-300">១. វិតក្កៈ (Vitakka)</div>
          <div class="text-[11px] mt-1 text-stone-500">{{ t('ការលើកចិត្តឡើងកាន់អារម្មណ៍កម្មដ្ឋាន', 'Applied thought anchoring to object') }}</div>
        </div>
        <div class="p-3 rounded-xl border bg-emerald-500/5 border-emerald-500/20 text-center">
          <div class="font-bold text-emerald-700 dark:text-emerald-300">២. វិចារៈ (Vicāra)</div>
          <div class="text-[11px] mt-1 text-stone-500">{{ t('ការត្រដុសផ្ចង់ចិត្តជាប់នឹងអារម្មណ៍នោះ', 'Sustained examination of object') }}</div>
        </div>
        <div class="p-3 rounded-xl border bg-sky-500/5 border-sky-500/20 text-center">
          <div class="font-bold text-sky-700 dark:text-sky-300">៣. បីតិ (Pīti)</div>
          <div class="text-[11px] mt-1 text-stone-500">{{ t('សេចក្តីឆ្អែតចិត្ត និងរំភើបត្រជាក់', 'Rapture and spiritual delight') }}</div>
        </div>
        <div class="p-3 rounded-xl border bg-rose-500/5 border-rose-500/20 text-center">
          <div class="font-bold text-rose-700 dark:text-rose-300">៤. សុខ (Sukha)</div>
          <div class="text-[11px] mt-1 text-stone-500">{{ t('សេចក្តីស្រណុកសុខស្រួលកាយនិងចិត្ត', 'Sublime tranquil bliss and ease') }}</div>
        </div>
        <div class="p-3 rounded-xl border bg-purple-500/5 border-purple-500/20 text-center">
          <div class="font-bold text-purple-700 dark:text-purple-300">៥. ឯកគ្គតា (Ekaggatā)</div>
          <div class="text-[11px] mt-1 text-stone-500">{{ t('ការតម្កល់ចិត្តមូលមាំលើចំណុចតែមួយ', 'Unified one-pointedness of mind') }}</div>
        </div>
      </div>
    </div>

    <!-- The 4 Rūpa Jhānas Detailed Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>☸️</span>
        <span>{{ t('លំដាប់នៃរូបឈានទាំង ៤ & ឧបមាព្រះពុទ្ធ', 'The 4 Absorptions & The Buddha\'s Similes') }}</span>
      </h3>

      <div
        v-for="j in jhanas"
        :key="j.id"
        class="card-paper p-5 sm:p-6 rounded-xl border flex flex-col justify-between"
      >
        <div>
          <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
            <div class="flex items-center gap-2.5">
              <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                {{ j.num }}
              </span>
              <div>
                <h4 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
                  {{ t(j.titleKm, j.titleEn) }}
                </h4>
                <p class="text-[11px] font-mono text-stone-500">{{ j.factorsPali }}</p>
              </div>
            </div>
            <span class="text-3xl">{{ j.icon }}</span>
          </div>

          <!-- Description -->
          <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t(j.descKm, j.descEn) }}
          </p>

          <!-- Simile Box -->
          <div class="mt-3.5 p-3.5 rounded-xl border bg-stone-500/5 border-stone-500/15 text-xs">
            <strong class="text-amber-700 dark:text-amber-300 block mb-1 font-bold">
              📜 {{ t(j.simileTitleKm, j.simileTitleEn) }}
            </strong>
            <p class="text-stone-600 dark:text-stone-300 leading-relaxed">{{ t(j.simileDescKm, j.simileDescEn) }}</p>
          </div>
        </div>

        <!-- Mind state -->
        <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
          <div class="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <strong class="text-emerald-700 dark:text-emerald-300 font-bold block mb-0.5">
              💡 {{ t('សភាពចិត្តជាក់ស្តែង ៖', 'Internal Mental State:') }}
            </strong>
            <span class="text-stone-700 dark:text-stone-200">{{ t(j.stateKm, j.stateEn) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const jhanas = [
  {
    id: 1,
    num: '១',
    titleKm: 'បឋមជ្ឈាន (ឈានទី ១ — ស្ងប់ចាកកាម)',
    titleEn: 'First Jhāna (Born of Seclusion)',
    factorsPali: 'អង្គ ៥ ៖ វិតក្កៈ, វិចារៈ, បីតិ, សុខ, ឯកគ្គតា',
    icon: '🧼',
    descKm: 'ចិត្តស្ងប់ផុតស្រឡះពីកាមគុណ ៥ និងនីវរណធម៌ ៥។ ចិត្តនៅមានការគិតលើអារម្មណ៍ (វិតក្កៈ) និងការត្រដុសពិនិត្យ (វិចារៈ) អមដោយសេចក្តីឆ្អែតចិត្ត (បីតិ) និងសេចក្តីសុខ (សុខ) ដែលកើតចេញពីវិវេក។',
    descEn: 'Secluded from sensual pleasures and unwholesome states, entering absorption accompanied by applied and sustained thought, with rapture and bliss born of seclusion.',
    simileTitleKm: 'ឧបមាដុំសាប៊ូទឹកក្នុងអាងងូតទឹក (Bathman Simile)',
    simileTitleEn: 'Like a skilled bath attendant kneading soap powder',
    simileDescKm: 'ដូចជាអ្នកងូតទឹកដ៏ជំនាញ ចាក់ម្សៅសាប៊ូក្នុងចានស្ពាន់ រួចប្រោះទឹកច្របល់ញី រហូតដុំសាប៊ូនោះជ្រាបសំណើមទឹកជោកជាំសព្វសាច់ គ្មានសល់កន្លែងស្ងួត យ៉ាងណាមិញ បីតិនិងសុខក៏ជ្រួតជ្រាបពេញរាងកាយដូច្នោះដែរ។',
    simileDescEn: 'Like an attendant sprinkling water over soap powder, kneading it into a ball until the moisture permeates the entire mass inside and out.',
    stateKm: 'កាយទាំងមូលញាប់ញ័រដោយរលកនៃបីតិ និងសេចក្តីសុខស្រួលដែលមិនធ្លាប់ជួបក្នុងកាមគុណ។',
    stateEn: 'Every nerve fiber is soaked with exquisite rapture and contentment born of radical sensory stillness.',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'ទុតិយជ្ឈាន (ឈានទី ២ — ស្ងប់រម្ងាប់ការគិត)',
    titleEn: 'Second Jhāna (Born of Stillness)',
    factorsPali: 'អង្គ ៣ ៖ បីតិ, សុខ, ឯកគ្គតា (រលត់វិតក្កៈ និងវិចារៈ)',
    icon: '🏞️',
    descKm: 'ការគិតនិងការត្រដុសពិនិត្យ (វិតក្កៈ វិចារៈ) ត្រូវបានរលត់ទៅដោយស្វ័យប្រវត្តិក្លាយជាភាពស្ងប់ស្ងៀមខាងក្នុង (អជ្ឈត្តំ សម្បសាទនំ)។ ចិត្តមានសភាពថ្លាឆ្វង់ មូលមាំតែមួយ អមដោយបីតិនិងសុខដែលកើតពីសមាធិ។',
    descEn: 'With the stilling of applied and sustained thought, internal confidence and single-minded stillness arise, with rapture and bliss born of concentration (Samādhija).',
    simileTitleKm: 'ឧបមាបឹងទឹកជ្រៅមានប្រភពទឹកផុសពីបាត (Spring Lake)',
    simileTitleEn: 'Like a deep lake fed by internal subterranean springs',
    simileDescKm: 'ដូចជាបឹងទឹកដ៏ជ្រៅមួយ គ្មានទឹកហូរចូលពីទិសខាងកើត ខាងលិច ខាងជើង ឬខាងត្បូងឡើយ ហើយមេឃក៏មិនបង្អុរភ្លៀងដែរ ប៉ុន្តែមានប្រភពទឹកត្រជាក់ផុសឡើងពីបាតបឹង រហូតទឹកត្រជាក់គ្របដណ្តប់បឹងទាំងមូល។',
    simileDescEn: 'Like a lake with no inlet streams and no seasonal rainfall, yet a cool underground spring bubbles up from below, suffusing the entire body of water with pristine coolness.',
    stateKm: 'គ្មានសំឡេងគិតក្នុងក្បាលសូម្បីមួយម៉ាត់ ចិត្តមូលស្ងប់ដូចកញ្ចក់ទឹកថ្លា មានតែសេចក្តីសុខជ្រាលជ្រៅ។',
    stateEn: 'Total cessation of inner dialogue; profound internal unification bubbling with joyous spiritual fullness.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'តតិយជ្ឈាន (ឈានទី ៣ — ស្ងប់ចាកបីតិ ចូលដល់សុខសុទ្ធ)',
    titleEn: 'Third Jhāna (Equanimous Bliss)',
    factorsPali: 'អង្គ ២ ៖ សុខ, ឯកគ្គតា (រលត់បីតិ + មានសតិ & ឧបេក្ខា)',
    icon: '🪷',
    descKm: 'សេចក្តីរំភើបឆ្អែតចិត្ត (បីតិ) ដែលមានសភាពរំជើបរំជួលត្រូវបានលះបង់ចោល។ ចិត្តតម្កល់នៅក្នុងឧបេក្ខា មានសតិសម្បជញ្ញៈពេញលេញ និងទទួលនូវសេចក្តីសុខសុទ្ធសាធតាមកាយ ដែលព្រះអរិយៈតែងសរសើរថា «អ្នកមានឧបេក្ខា មានសតិ តែងរស់នៅជាសុខ»។',
    descEn: 'With the fading away of rapture, dwelling in equanimity, mindful and clearly comprehending, experiencing that physical ease of which the Noble Ones declare: "One dwells happily with equanimity and mindfulness."',
    simileTitleKm: 'ឧបមាផ្កាឈូកលិចលង់ក្នុងទឹកត្រជាក់ (Submerged Lotuses)',
    simileTitleEn: 'Like lotuses submerged completely in cool pond water',
    simileDescKm: 'ដូចជាផ្កាឈូកខៀវ ឈូកក្រហម ឬឈូកស ក្នុងស្រះបឹង ដែលដុះធំធាត់លិចលង់ទាំងស្រុងក្នុងទឹក គ្មានផ្នែកណាលូតផុតពីទឹកឡើយ ផ្កាឈូកនោះត្រូវទឹកត្រជាក់ជ្រួតជ្រាបតាំងពីគល់ រហូតដល់ចុងផ្កា។',
    simileDescEn: 'Like blue, red, or white lotuses born in water, growing in water, remaining entirely submerged beneath the surface, bathed and saturated with cool water from roots to petals.',
    stateKm: 'សេចក្តីសុខស្ងប់ស្ងាត់ បរិសុទ្ធ ទន់ភ្លន់ គ្មានការរំជើបរំជួលនៃបីតិទៀតឡើយ។',
    stateEn: 'Exquisite, sublime, motionless bodily well-being, free from all excitement or ecstatic tremor.',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'ចតុត្ថជ្ឈាន (ឈានទី ៤ — បរិសុទ្ធដោយសតិ & ឧបេក្ខា)',
    titleEn: 'Fourth Jhāna (Pure Mindfulness & Equanimity)',
    factorsPali: 'អង្គ ២ ៖ ឧបេក្ខា, ឯកគ្គតា (រលត់សុខនិងទុក្ខ — ឧបេក្ខាសតិបារិសុទ្ធិ)',
    icon: '🕊️',
    descKm: 'ការលះបង់នូវសេចក្តីសុខ និងសេចក្តីទុក្ខទាំងស្រុង គ្មានសោមនស្ស គ្មានទោមនស្សឡើយ។ ដង្ហើមចេញចូលស្ទើរតែរលត់ស្ងប់ទាំងស្រុង (អស្សាសបស្សាសា និរុទ្ធា ហោន្តិ)។ ចិត្តមានសភាពបរិសុទ្ធ ភ្លឺស្វាងស្អាតស្អំ ដោយសារអំណាចនៃឧបេក្ខា និងសតិ។',
    descEn: 'With the abandoning of pleasure and pain, and with the previous disappearance of joy and grief, entering the fourth jhāna: neither-painful-nor-pleasant, with purification of mindfulness through equanimity (Upekkhāsatipārisuddhi).',
    simileTitleKm: 'ឧបមាមនុស្សគ្របដណ្តប់ដោយសំពត់សបរិសុទ្ធ (White Cloth)',
    simileTitleEn: 'Like a person draped completely in spotless white cloth',
    simileDescKm: 'ដូចជាបុរសម្នាក់អង្គុយគ្របដណ្តប់ខ្លួនដោយសំពត់ពណ៌សស្អាតបរិសុទ្ធ តាំងពីក្បាលរហូតដល់ចុងជើង គ្មានផ្នែកណាមួយនៃរាងកាយដែលសំពត់សមិនបានគ្របដណ្តប់ឡើយ យ៉ាងណាមិញ ចិត្តបរិសុទ្ធស្អាតស្អំគ្របដណ្តប់សព្វរាងកាយដូច្នោះដែរ។',
    simileDescEn: 'Like a person sitting draped from head to foot in a pristine clean white cloth, not a single part of their body left uncovered by the bright, luminous fabric.',
    stateKm: 'ចិត្តរឹងមាំដូចភ្នំព្រះសុមេរុ ភ្លឺស្វាងដូចព្រះអាទិត្យ ត្រៀមរួចជាស្រេចដើម្បីទម្លុះទម្លាយអរិយសច្ច និងសម្រេចអភិញ្ញា។',
    stateEn: 'Mind unshakeable like diamond, luminous, unblemished, ready to penetrate the ultimate nature of reality.',
  },
]
</script>
