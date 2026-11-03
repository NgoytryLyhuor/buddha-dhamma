<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៦៣ — នីវរណធម៌ ៥ យ៉ាង', 'GATHA 63 — THE 5 HINDRANCES') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('នីវរណធម៌ ៥ ៖ ឧបសគ្គរារាំងចិត្តក្នុងសមាធិ & វិធីកម្ចាត់', 'The 5 Hindrances (Nīvaraṇa) & Practical Antidotes') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('នីវរណធម៌ សំដៅលើធម៌គ្រឿងរារាំងចិត្ត ឬស្បៃអន្ធការដែលគ្របដណ្តប់សន្តានចិត្ត ធ្វើឱ្យចិត្តងងឹតងងល់ មិនអាចសម្រេចនូវសេចក្តីស្ងប់ (សមថៈ) និងមិនអាចចម្រើននូវបញ្ញាដឹងការពិត (វិបស្សនា) បានឡើយ។ ព្រះសម្មាសម្ពុទ្ធទ្រង់ត្រាស់ប្រៀបធៀបនីវរណធម៌ទៅនឹងបំណុល ជំងឺ គុក ភាពជាទាសករ និងផ្លូវកាត់វាលខ្សាច់ដាច់ស្រយាល។ កាលណាអ្នកបដិបត្តិកម្ចាត់នីវរណៈទាំង ៥ បាន ចិត្តនឹងភ្លឺថ្លា បរិសុទ្ធ ទន់ភ្លន់ និងគួរដល់ការងារភាវនាជាទីបំផុត។', 'Nīvaraṇa refers to the five mental hindrances that veil, obstruct, and corrupt the mind, preventing it from attaining tranquil stillness (Samatha) and penetrating insight (Vipassanā). In the discourses, the Buddha compared the abandonment of these hindrances to being freed from debt, recovering from disease, release from prison, liberation from servitude, and crossing a hazardous desert safely.') }}
    </p>

    <!-- Verse Box from Sutta Nipata / Samyutta Nikaya -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«បញ្ចេតេ ភិក្ខវេ អាវរណា នីវរណា ចេតសោ ឧបក្កិលេសា បញ្ញាយ ទុព្វលីករណា។»', '"Monks, there are these five obstructions, hindrances that overwhelm awareness and weaken wisdom." — Saṃyutta Nikāya 46.37') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— សំយុត្តនិកាយ មហាវារវគ្គ នីវរណសូត្រ', '— Saṃyutta Nikāya, Mahāvāravagga, Nīvaraṇa Sutta') }}
      </p>
    </div>

    <!-- The Buddha's Famous Simile of the Water Pot (Sangārava Sutta, SN 46.55) -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>💧</span>
        <span>{{ t('ឧបមាទឹក ៥ បែប ក្នុងសង្គារវសូត្រ (SN 46.55)', 'The 5 Water Similes in Sangārava Sutta') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ដូចជាឆ្នាំងទឹកថ្លាមួយ បើទឹកនោះលាយដោយពណ៌ល័ក្ខ រំពុះពុះកញ្ជ្រោល កកដោយស្លែ រញ្ជួយដោយខ្យល់បក់ ឬល្អក់ដោយភក់ក្នុងទីងងឹត មនុស្សមិនអាចឆ្លុះឃើញមុខឯងបានឡើយ យ៉ាងណាមិញ ចិត្តដែលគ្របដោយនីវរណៈទាំង ៥ ក៏មិនអាចដឹងការខុសត្រូវ និងអរិយសច្ចបានយ៉ាងនោះដែរ ៖', 'Just as one cannot see one\'s own reflection in water mixed with dye, boiling, covered in moss, agitated by wind, or muddy in darkness, so too a mind clouded by hindrances cannot discern truth.') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mt-4 text-xs">
        <div class="p-3 rounded-xl border bg-amber-500/5 border-amber-500/20 text-center">
          <div class="text-2xl mb-1">🎨</div>
          <div class="font-bold text-amber-700 dark:text-amber-300">{{ t('ទឹកលាយល័ក្ខ', 'Dyed Water') }}</div>
          <div class="text-[11px] mt-1 text-stone-500">{{ t('កាមច្ឆន្ទៈ (ចិត្តជាប់ជំពាក់)', 'Kāmacchanda (Lust)') }}</div>
        </div>
        <div class="p-3 rounded-xl border bg-rose-500/5 border-rose-500/20 text-center">
          <div class="text-2xl mb-1">♨️</div>
          <div class="font-bold text-rose-700 dark:text-rose-300">{{ t('ទឹករំពុះក្តៅ', 'Boiling Water') }}</div>
          <div class="text-[11px] mt-1 text-stone-500">{{ t('ព្យាបាទ (ចិត្តខឹងក្រោធ)', 'Vyāpāda (Ill-will)') }}</div>
        </div>
        <div class="p-3 rounded-xl border bg-emerald-500/5 border-emerald-500/20 text-center">
          <div class="text-2xl mb-1">🌿</div>
          <div class="font-bold text-emerald-700 dark:text-emerald-300">{{ t('ទឹកកកស្លែចក', 'Mossy Water') }}</div>
          <div class="text-[11px] mt-1 text-stone-500">{{ t('ថីនមិទ្ធ (ងងុយ ស្ពឹក)', 'Thīna-middha (Sloth)') }}</div>
        </div>
        <div class="p-3 rounded-xl border bg-sky-500/5 border-sky-500/20 text-center">
          <div class="text-2xl mb-1">💨</div>
          <div class="font-bold text-sky-700 dark:text-sky-300">{{ t('ទឹកត្រូវខ្យល់បក់', 'Wind-blown Water') }}</div>
          <div class="text-[11px] mt-1 text-stone-500">{{ t('ឧទ្ធច្ចកុក្កុច្ច (រវើរវាយ)', 'Restlessness & Remorse') }}</div>
        </div>
        <div class="p-3 rounded-xl border bg-purple-500/5 border-purple-500/20 text-center">
          <div class="text-2xl mb-1">🌑</div>
          <div class="font-bold text-purple-700 dark:text-purple-300">{{ t('ទឹកល្អក់ក្នុងងងឹត', 'Muddy in Dark') }}</div>
          <div class="text-[11px] mt-1 text-stone-500">{{ t('វិចិកិច្ឆា (សង្ស័យស្ទាក់ស្ទើរ)', 'Vicikicchā (Doubt)') }}</div>
        </div>
      </div>
    </div>

    <!-- The 5 Hindrances Detailed Cards & Antidotes -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>⚔️</span>
        <span>{{ t('នីវរណធម៌ទាំង ៥ & ឱសថកម្ចាត់ជាក់ស្តែង', 'The 5 Hindrances & Specific Buddhist Antidotes') }}</span>
      </h3>

      <div
        v-for="item in hindrances"
        :key="item.id"
        class="card-paper p-5 rounded-xl border flex flex-col justify-between"
      >
        <div>
          <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
            <div class="flex items-center gap-2.5">
              <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                {{ item.num }}
              </span>
              <div>
                <h4 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
                  {{ t(item.nameKm, item.nameEn) }}
                </h4>
                <p class="text-[11px] font-mono text-stone-500">{{ item.pali }}</p>
              </div>
            </div>
            <span class="text-2xl">{{ item.icon }}</span>
          </div>

          <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t(item.descKm, item.descEn) }}
          </p>

          <!-- Problem & Simile -->
          <div class="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div class="p-2.5 rounded-lg bg-rose-500/5 border border-rose-500/20">
              <strong class="text-rose-600 dark:text-rose-400 font-bold block mb-1">
                ⚠️ {{ t('ទោសនៃឧបសគ្គនេះ ៖', 'Harm / Manifestation:') }}
              </strong>
              <p class="text-stone-600 dark:text-stone-300 leading-relaxed">{{ t(item.harmKm, item.harmEn) }}</p>
            </div>
            <div class="p-2.5 rounded-lg bg-amber-500/5 border border-amber-500/20">
              <strong class="text-amber-700 dark:text-amber-300 font-bold block mb-1">
                📜 {{ t('ឧបមាព្រះពុទ្ធ ៖', 'Buddha\'s Simile:') }}
              </strong>
              <p class="text-stone-600 dark:text-stone-300 leading-relaxed">{{ t(item.simileKm, item.simileEn) }}</p>
            </div>
          </div>
        </div>

        <!-- Direct Antidote -->
        <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
          <div class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
            <div class="flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-300 mb-1">
              <span>🛡️</span>
              <span>{{ t('វិធីកម្ចាត់ក្នុងពេលសមាធិ (ឱសថធម៌) ៖', 'Direct Meditation Antidote:') }}</span>
            </div>
            <p class="text-stone-700 dark:text-stone-200 leading-relaxed">
              {{ t(item.antidoteKm, item.antidoteEn) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Practical Summary -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>💡</span>
        <span>{{ t('គន្លឹះដាស់តឿនចិត្តសម្រាប់អ្នកចម្រើនសមាធិ', 'Key Takeaway for Practitioners') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('កុំខឹង ឬអស់សង្ឃឹមនៅពេលនីវរណៈកើតឡើងក្នុងពេលអង្គុយសមាធិ ព្រោះវាជាធម្មជាតិរបស់ចិត្តដែលធ្លាប់ត្រាំក្នុងកិលេស។ គ្រាន់តែមានសតិដឹងទាន់ថា «កាមច្ឆន្ទៈកំពុងកើត», «កំហឹងកំពុងកើត», «ភាពងងុយស្ពឹកកំពុងកើត» ដោយមិនតាមទ្រទ្រង់វា មិនបណ្តោយតាមវា ហើយប្តូរមកពិនិត្យដង្ហើមចេញចូល ឬចម្រើនមេត្តាវិញ នោះនីវរណៈនឹងរលត់ទៅដោយឯកឯង។', 'Do not feel frustrated or discouraged when hindrances arise during meditation. They are normal tendencies of an untrained mind. Simply recognize them clearly with mindfulness—"lust has arisen", "restlessness has arisen"—without identifying with them or fueling them. Re-anchor your awareness gently on the breath or loving-kindness.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const hindrances = [
  {
    id: 1,
    num: '១',
    nameKm: 'កាមច្ឆន្ទៈ (សេចក្តីជាប់ជំពាក់ក្នុងកាមគុណ ៥)',
    nameEn: 'Sensual Desire (Kāmacchanda)',
    pali: 'Kāmacchanda — ចិត្តប្រាថ្នារូប សំឡេង ក្លិន រស និងសម្ផស្សជាទីគាប់ចិត្ត',
    icon: '🌸',
    descKm: 'ចិត្តរត់ទៅរកអារម្មណ៍សប្បាយត្រេកត្រអាល ចង់បានវត្ថុខាងក្រៅ មនុស្សជាទីស្រឡាញ់ ឬអនុស្សាវរីយ៍ផ្អែមល្ហែម ដែលធ្វើឱ្យចិត្តបែកខ្ញែកចេញពីអារម្មណ៍សមាធិ។',
    descEn: 'The longing for pleasant sensual experiences—sight, sound, smell, taste, touch—that scatters mental focus and pulls awareness away from the meditation object.',
    harmKm: 'ធ្វើឱ្យចិត្តរវើរវាយ គ្មានសន្តិភាព ប្រៀបដូចសត្វស្វាជាប់ជ័រ មិនអាចស្ងប់ក្នុងបច្ចុប្បន្នភាពបាន។',
    harmEn: 'Leaves the mind restless and unsatisfied, like a monkey caught in tar pitch, unable to remain still.',
    simileKm: 'ដូចជាបុគ្គលជំពាក់បំណុលគេ តែងតែមានការភ័យខ្លាច និងខ្វះឯករាជ្យភាពក្នុងចិត្ត។',
    simileEn: 'Like being heavily in debt, continually harassed and lacking inward freedom.',
    antidoteKm: 'ចម្រើនអសុភកម្មដ្ឋាន (ពិចារណាភាពមិនស្អាត មិនទៀងនៃសរីរៈ), គ្រប់គ្រងឥន្ទ្រិយទ្វារ (ឥន្ទ្រិយសំវរៈ), និងដឹងកម្រិតក្នុងការបរិភោគអាហារ។',
    antidoteEn: 'Practice Asubha (contemplation of the unglamorous nature of the body), guard the sense doors, and maintain moderation in eating.',
  },
  {
    id: 2,
    num: '២',
    nameKm: 'ព្យាបាទ (សេចក្តីខឹងក្រោធ និងគំនុំគុំកួន)',
    nameEn: 'Ill-will & Resentment (Vyāpāda)',
    pali: 'Vyāpāda — ចិត្តទាស់ទែង មិនពេញចិត្ត ចង់បំផ្លាញ ឬប្រទុស្តរ៉ាយ',
    icon: '🔥',
    descKm: 'កំហឹង ការថ្នាំងថ្នាក់ចិត្ត គិតឃើញមុខអ្នកដែលធ្លាប់មើលងាយខ្លួន ឬគិតដល់រឿងអយុត្តិធម៌ដែលធ្លាប់ជួប ធ្វើឱ្យចិត្តក្តៅក្រហាយ ឆេះឆួល។',
    descEn: 'Aversion, bitterness, resentment, and hostility toward people, events, or discomforts that burn the heart and agitate calm reflection.',
    harmKm: 'ដុតរោលចិត្តខ្លួនឯងមុនគេ បំផ្លាញសេចក្តីសុខក្នុងចិត្ត និងរុញឱ្យបង្កើតអកុសលកម្មបន្តទៀត។',
    harmEn: 'Burns oneself first, obliterating peace and driving unwholesome speech and actions.',
    simileKm: 'ដូចជាបុគ្គលមានរោគាពាធធ្ងន់ធ្ងរ ក្តៅខ្លួនរោលរាល មិនអាចទទួលទានអាហារឆ្ងាញ់បាន។',
    simileEn: 'Like a person afflicted by burning fever, unable to taste sweetness or rest peacefully.',
    antidoteKm: 'ចម្រើនមេត្តាភាវនា (ផ្សាយក្តីស្រឡាញ់ និងសន្តិភាពដល់ខ្លួនឯង និងមនុស្សទាំងអស់), ពិចារណាលើកម្មសកតា (គ្រប់គ្នាសុទ្ធតែជាម្ចាស់កម្មរបស់ខ្លួន)។',
    antidoteEn: 'Cultivate Mettā (loving-kindness meditation) toward yourself and others, reflecting on Kamma as each being\'s true ownership.',
  },
  {
    id: 3,
    num: '៣',
    nameKm: 'ថីនមិទ្ធ (សេចក្តីស្ពឹកស្រពន់ ងងុយ និងខ្ជិលច្រអូស)',
    nameEn: 'Sloth & Torpor (Thīna-middha)',
    pali: 'Thīna-middha — ថីនៈ ភាពស្រពន់នៃចិត្ត + មិទ្ធៈ ភាពងោកងុយនៃកាយចេតសិក',
    icon: '😴',
    descKm: 'អារម្មណ៍ធ្ងន់ក្បាល ងងុយដេក ចង់តែផ្តួលខ្លួន ស្មារតីស្រអាប់ គ្មានកម្លាំងចិត្តបន្តភាវនា អារម្មណ៍ហាក់ដូចធ្លាក់ក្នុងអ័ព្ទក្រាស់។',
    descEn: 'Heaviness of mind, bodily lethargy, drowsiness, dullness, and inertia that shroud clarity like a thick descending fog.',
    harmKm: 'ធ្វើឱ្យការបដិបត្តិធ្លាក់ចុះ ខ្ជះខ្ជាយពេលវេលាដ៏មានតម្លៃ និងមិនអាចបង្កើតបញ្ញាដឹងរឿងរ៉ាវបាន។',
    harmEn: 'Paralyzes spiritual progress, wastes precious moments, and prevents any emergence of penetrating clarity.',
    simileKm: 'ដូចជាបុគ្គលជាប់នៅក្នុងគុកងងឹត គ្មានសេរីភាព មិនអាចធ្វើដំណើរទៅណារួច។',
    simileEn: 'Like being locked in a dark, claustrophobic dungeon unable to move freely.',
    antidoteKm: 'ធ្វើការដើរចង្ក្រម, យកទឹកត្រជាក់លុបមុខ, បើកភ្នែកសម្លឹងពន្លឺឬផ្កាយលើមេឃ, ពិចារណាមរណស្សតិ (សេចក្តីស្លាប់អាចមកដល់គ្រប់វិនាទី) ដើម្បីដាស់ស្មារតី។',
    antidoteEn: 'Switch to walking meditation, splash cool water on the face, focus on bright light or open sky, and reflect on the urgency of death (Maraṇassati).',
  },
  {
    id: 4,
    num: '៤',
    nameKm: 'ឧទ្ធច្ចកុក្កុច្ច (សេចក្តីរវើរវាយ អន្ទះអន្ទែង & ក្តីវិប្បដិសារី)',
    nameEn: 'Restlessness & Remorse (Uddhacca-kukkucca)',
    pali: 'Uddhacca-kukkucca — ឧទ្ធច្ចៈ ចិត្តរាយមាយ + កុក្កុច្ចៈ សោកស្តាយកំហុសចាស់ៗ',
    icon: '🌪️',
    descKm: 'ចិត្តរត់លោតចុះឡើងដូចស្វា គិតពីគម្រោងការងារ គិតរឿងអនាគត និងក្តីវិប្បដិសារីសោកស្តាយនូវកំហុសដែលខ្លួនធ្លាប់បានធ្វើ ឬបុណ្យដែលខ្លួនខកខានមិនបានធ្វើ។',
    descEn: 'Mental agitation, inner restlessness jumping from thought to thought, intertwined with regret or guilt over past misdeeds or missed opportunities.',
    harmKm: 'ធ្វើឱ្យចិត្តហត់នឿយ តានតឹង សរសៃប្រសាទមិនបានសម្រាក និងមិនអាចតម្កល់លើអារម្មណ៍មួយបាន។',
    harmEn: 'Exhausts the nervous system, produces chronic anxiety, and blocks the mind from settling into single-pointed stillness.',
    simileKm: 'ដូចជាទាសករដែលត្រូវគេបង្ខិតបង្ខំឱ្យរត់ធ្វើការឥតឈប់ឈរ គ្មានសិទ្ធិឈប់សម្រាក។',
    simileEn: 'Like an enslaved laborer driven without respite under harsh compulsion.',
    antidoteKm: 'តាំងចិត្តនៅក្នុងសីលឱ្យបរិសុទ្ធដើម្បីកុំឱ្យមានវិប្បដិសារី, តម្កល់ចិត្តលើដង្ហើមចេញចូលដោយទន់ភ្លន់, សិក្សាព្រះធម៌ជាមួយកល្យាណមិត្ត។',
    antidoteEn: 'Purify morality (Sīla) to remove regret, anchor gently into the steady rhythm of breathing, and converse on Dhamma with wise companions.',
  },
  {
    id: 5,
    num: '៥',
    nameKm: 'វិចិកិច្ឆា (សេចក្តីសង្ស័យ ស្ទាក់ស្ទើរ មិនដាច់ស្រេច)',
    nameEn: 'Doubt & Indecision (Vicikicchā)',
    pali: 'Vicikicchā — សង្ស័យលើព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ សិក្ខា និងអតីត-អនាគតជាតិ',
    icon: '❓',
    descKm: 'ចិត្តស្ទាក់ស្ទើរ មិនទុកចិត្តផ្លូវបដិបត្តិ សង្ស័យថា «តើព្រះពុទ្ធត្រាស់ដឹងពិតទេ?», «តើខ្ញុំអាចធ្វើសមាធិសម្រេចទេ?», «តើកម្មផលពិតជាមានមែនឬ?» ធ្វើឱ្យឈប់ដំណើរពាក់កណ្តាលផ្លូវ។',
    descEn: 'Paralyzing skepticism and wavering about the Triple Gem, the training, rebirth, and one\'s own capacity to walk the Path.',
    harmKm: 'រារាំងមិនឱ្យចាប់ផ្តើម ឬធ្វើឱ្យបោះបង់ការបដិបត្តិចោលនៅចំពោះមុខឧបសគ្គបន្តិចបន្តួច។',
    harmEn: 'Stalls all earnest practice and prompts surrender at the slightest hurdle.',
    simileKm: 'ដូចជាអ្នកដំណើរវង្វេងផ្លូវកណ្តាលវាលខ្សាច់ដាច់ស្រយាល គ្មានត្រីវិស័យ និងមានចោរព្រៃចាំលបលួច។',
    simileEn: 'Like a traveler lost in a trackless desert infested with hidden dangers, unsure which path to take.',
    antidoteKm: 'សិក្សាស្វែងយល់ព្រះធម៌ឱ្យស៊ីជម្រៅ, សាកសួរលោកគ្រូអាចារ្យដែលមានចំណេះដឹងច្បាស់លាស់, និងសង្កេតលទ្ធផលជាក់ស្តែងនៃសេចក្តីស្ងប់ដោយខ្លួនឯង (បច្ចត្តំ)។',
    antidoteEn: 'Deepen study of the scriptures, consult experienced Dhamma teachers, and verify the transformative effects of peace directly in personal experience.',
  },
]
</script>
