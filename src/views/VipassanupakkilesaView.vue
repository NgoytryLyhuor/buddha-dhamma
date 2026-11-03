<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៨៦ — វិបស្សនូបកិលេស ១០ យ៉ាង', 'GATHA 86 — 10 CORRUPTIONS OF INSIGHT') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('វិបស្សនូបកិលេស ១០ ៖ ឧបសគ្គបញ្ឆោតភ្នែកក្នុងវិបស្សនាកម្មដ្ឋាន', 'The 10 Corruptions of Insight (Vipassanūpakkilesa)') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('វិបស្សនូបកិលេស សំដៅលើឧបសគ្គដ៏វិសេសវិសាលទាំង ១០ ប្រការដែលកើតឡើងដល់អ្នកចម្រើនវិបស្សនាកម្មដ្ឋានក្នុងដំណាក់កាល ឧទយព្វយញាណ (ការឃើញការកើតឡើងនិងរលត់ទៅនៃនាមរូប)។ ឧបកិលេសទាំងនេះមានសភាពល្អប្រណីត អស្ចារ្យ ដូចជាពន្លឺភ្លឺចិញ្ចែងចិញ្ចាច ឬសេចក្តីសុខស្ងប់ដែលមិនធ្លាប់ជួបប្រទះពីមុន រហូតធ្វើឱ្យអ្នកបដិបត្តិច្រឡំគិតថា ខ្លួនបានសម្រេចមគ្គផល ឬបានដល់ព្រះនិព្វានហើយ រួចក៏ជាប់ជំពាក់នឹងអារម្មណ៍ទាំងនោះ លែងចង់បន្តដំណើរទៅមុខទៀត។ ក្នុងគម្ពីរវិសុទ្ធិមគ្គ ព្រះពុទ្ធឃោសាចារ្យបានពន្យល់ថា បុគ្គលដែលឆ្លាតវៃគប្បីកំណត់ដឹងថា អារម្មណ៍ទាំងនេះគ្រាន់តែជាផលផ្លូវចិត្ត មិនមែនជាមាគ៌ារំលត់ទុក្ខឡើយ។', 'Vipassanūpakkilesa denotes the ten subtle imperfections or corruptions of insight that typically arise during the stage of Udayabbaya Ñāṇa (knowledge of arising and passing away). Because these phenomena—such as radiant aura, profound joy, and sublime tranquility—are extraordinarily pleasant, the meditator is easily deceived into believing they have attained Enlightenment or Nibbāna. Becoming attached to these sublime states halts further spiritual progression. The Visuddhimagga clarifies that a wise practitioner must recognize these experiences as mere natural milestones rather than the ultimate path.') }}
    </p>

    <!-- Pali Warning Box -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ឱភាសោ ញាណំ បីតិ ច បស្សទ្ធិ សុខមេវ ច អធិមោក្ខោ ច បគ្គហោ ឧបដ្ឋានំ ច ឧបេក្ខា និកន្តិ ចាតិ ឯតេ ទស វិបស្សនូបកិលេសា។»', '"Aura, knowledge, rapture, tranquility, bliss, conviction, exertion, mindfulness, equanimity, and subtle attachment: these are the ten corruptions of insight." — Visuddhimagga') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— វិសុទ្ធិមគ្គ មគ្គាមគ្គញាណទស្សនវិសុទ្ធិនិទ្ទេស', '— Visuddhimagga: Purification by Knowledge & Vision of What Is and What Is Not Path') }}
      </p>
    </div>

    <!-- 10 Corruptions Grid -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>✨</span>
        <span>{{ t('វិបស្សនូបកិលេសទាំង ១០ ប្រការពិស្តារ', 'The 10 Corruptions of Insight') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="item in corruptions"
          :key="item.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                  {{ item.num }}
                </span>
                <div>
                  <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">{{ t(item.titleKm, item.titleEn) }}</h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ item.pali }}</p>
                </div>
              </div>
              <span class="text-2xl">{{ item.icon }}</span>
            </div>

            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(item.descKm, item.descEn) }}
            </p>
          </div>

          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2.5 rounded-lg bg-rose-500/5 border border-rose-500/20">
              <span class="font-bold text-rose-700 dark:text-rose-300 block mb-0.5">
                ⚠️ {{ t('គ្រោះថ្នាក់នៃការជាប់ជំពាក់ ៖', 'Pitfall / Danger:') }}
              </span>
              <span class="text-stone-600 dark:text-stone-400">{{ t(item.pitfallKm, item.pitfallEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Remedy / Key Insight Section -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🧭</span>
        <span>{{ t('វិធីដោះស្រាយ ៖ ញែកស្គាល់ផ្លូវត្រូវ (មគ្គ) និងផ្លូវខុស (អមគ្គ)', 'The Solution: Discerning the Path from Non-Path') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('កាលបើវិបស្សនូបកិលេសណាមួយកើតឡើង អ្នកបដិបត្តិត្រូវមានសតិរឭកដឹងភ្លាមថា «របស់នេះកើតឡើងហើយ តែវាមិនទៀង មានបច្ច័យតាក់តែង និងត្រូវរលត់ទៅវិញជាធម្មតា»។ កុំចាប់ចិត្តត្រេកអរ កុំយកវាធ្វើជាទីពឹង។ ការដឹងច្បាស់ថា អារម្មណ៍អស្ចារ្យទាំងនេះមិនមែនជាមគ្គផលពិតប្រាកដ ហៅថា «មគ្គាមគ្គញាណទស្សនវិសុទ្ធិ» ដែលជាគន្លឹះរំដោះចិត្តឱ្យបន្តដំណើរឆ្ពោះទៅកាន់អរិយមគ្គជាន់ខ្ពស់។', 'Whenever any of these ten phenomena occur, the practitioner must immediately observe with mindfulness: "This has arisen, yet it is impermanent, conditioned, and subject to cessation." Do not delight in it; do not mistake it for Enlightenment. Knowing clearly what is the path and what is not the path is called Maggāmagga-ñāṇadassana-visuddhi, unlocking the gateway to true noble liberation.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const corruptions = [
  {
    id: 1,
    num: '១',
    titleKm: 'ឱភាស (ពន្លឺភ្លឺផ្លេក)',
    titleEn: 'Obhāsa (Aura / Radiance)',
    pali: 'Obhāsa — ឱភាសោ',
    icon: '💡',
    descKm: 'ពន្លឺភ្លឺថ្លាចិញ្ចែងចិញ្ចាចផុសចេញពីរាងកាយ ឬក្នុងចិត្ត ភ្លឺច្បាស់ដូចពន្លឺព្រះចន្ទពេញបូណ៌មី ឬរស្មីព្រះអាទិត្យ ធ្វើឱ្យឃើញទីងងឹតទាំងពួង។',
    descEn: 'Luminous radiance emanating from the meditator’s body or mind, illuminating the surroundings with intense brilliance.',
    pitfallKm: 'គិតស្មានថាខ្លួនបានសម្រេចទិព្វចក្ខុ ឬត្រាស់ដឹងហើយ ក៏អង្គុយសម្លឹងមើលពន្លឺនោះរហូតភ្លេចវិបស្សនា។',
    pitfallEn: 'Mistaking the aura for divine eye or enlightenment, clinging to the visual spectacle.',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'ញាណ (ការដឹងធម៌ជ្រាលជ្រៅ)',
    titleEn: 'Ñāṇa (Keen Insight / Knowledge)',
    pali: 'Ñāṇa — ញាណំ',
    icon: '🧠',
    descKm: 'បញ្ញាយល់ដឹងធម៌អាថ៌យ៉ាងមុតស្រួច រហ័សរហួន អាចបកស្រាយធម៌ ឬយល់រឿងពិបាកៗបានយ៉ាងងាយស្រួលអស្ចារ្យ។',
    descEn: 'Exceptionally sharp, effortless understanding of dhamma concepts, doctrine, and conditional relations.',
    pitfallKm: 'ជាប់ជំពាក់នឹងចំណេះដឹងរបស់ខ្លួន ក្លាយជាមានះ កើតមោទនភាពថាខ្លួនជាបណ្ឌិតកំពូល។',
    pitfallEn: 'Becoming intoxicated with intellectual clarity, developing subtle conceit as a great scholar.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'បីតិ (សេចក្តីឆ្អែតចិត្ត)',
    titleEn: 'Pīti (Sublime Rapture)',
    pali: 'Pīti — បីតិ',
    icon: '🌊',
    descKm: 'អារម្មណ៍ឆ្អែតកាយឆ្អែតចិត្តយ៉ាងខ្លាំង រោមក្រោកព្រឺព្រួច រាងកាយស្រាលដូចអណ្តែតលើអាកាស ពោរពេញដោយក្តីរំភើបឥតឧបមា។',
    descEn: 'Pervasive ecstatic thrill and lightness of body, feeling as if floating above the ground.',
    pitfallKm: 'លង់ក្នុងសេចក្តីរំភើបឆ្អែតចិត្ត ចង់តែសោយរសជាតិនៃបីតិ លែងចង់ពិនិត្យលក្ខណៈមិនទៀង។',
    pitfallEn: 'Craving the euphoric thrill and stalling the observation of impermanence.',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'បស្សទ្ធិ (ភាពស្ងប់រម្ងាប់)',
    titleEn: 'Passaddhi (Deep Tranquility)',
    pali: 'Passaddhi — បស្សទ្ធិ',
    icon: '🕊️',
    descKm: 'កាយនិងចិត្តស្ងប់រម្ងាប់ឥតខ្ចោះ គ្មានសេចក្តីក្តៅក្រហាយ គ្មានភាពធ្ងន់ធ្ងរ រាងកាយទន់ភ្លន់ស្រួលស្រឡះបំផុត។',
    descEn: 'Profound bodily serenity and mental peace, entirely free from agitation, stiffness, or heaviness.',
    pitfallKm: 'ច្រឡំថាភាពស្ងប់នេះជាព្រះនិព្វាន រួចអង្គុយសម្ងំក្នុងភាពស្ងប់ស្ងៀម លែងចម្រើនបញ្ញា។',
    pitfallEn: 'Confusing peace with final Nibbāna and resting passively without investigating phenomena.',
  },
  {
    id: 5,
    num: '៥',
    titleKm: 'សុខ (សេចក្តីសុខសាន្ត)',
    titleEn: 'Sukha (Sublime Bliss)',
    pali: 'Sukha — សុខំ',
    icon: '🌸',
    descKm: 'សេចក្តីសុខស្រួលដ៏ប្រណីតជ្រាលជ្រៅ ដែលសាយភាយពេញសព្វសព៌ាង្គកាយ គ្មានសុខលោកិយណាប្រៀបផ្ទឹមបានឡើយ។',
    descEn: 'Incomparably sweet, refined spiritual bliss saturating every fiber of body and mind.',
    pitfallKm: 'ស្រឡាញ់ជាប់ចិត្តនឹងសេចក្តីសុខនោះ រហូតក្លាយជាទាសករនៃសុខវេទនា។',
    pitfallEn: 'Developing craving for pleasant feeling, turning spiritual joy into a golden cage.',
  },
  {
    id: 6,
    num: '៦',
    titleKm: 'អធិមោក្ខ (សទ្ធាជឿជាក់មុតមាំ)',
    titleEn: 'Adhimokkha (Unshakable Faith / Conviction)',
    pali: 'Adhimokkha — អធិមោក្ខោ',
    icon: '💎',
    descKm: 'ជំនឿសទ្ធាលើព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ ផុសឡើងយ៉ាងខ្លាំងក្លាឥតរង្គោះរង្គើ ចង់តែបបួលមនុស្សលោកទាំងមូលឱ្យមកបួសរៀនធម៌។',
    descEn: 'Surging devotion and unwavering faith in the Triple Gem, accompanied by an urge to proselytize.',
    pitfallKm: 'សទ្ធាហួសកម្រិតខ្វះបញ្ញាគ្រប់គ្រង នាំឱ្យរំភើបជ្រុល ភ្លេចការតាមដឹងរូបនាមបច្ចុប្បន្ន។',
    pitfallEn: 'Faith overpowers wisdom, leading to over-zealous emotion and neglect of mindful analysis.',
  },
  {
    id: 7,
    num: '៧',
    titleKm: 'បគ្គហ (សេចក្តីព្យាយាមមោះមុត)',
    titleEn: 'Paggaha (Strenuous Exertion)',
    pali: 'Paggaha — បគ្គហោ',
    icon: '🔥',
    descKm: 'ការព្យាយាមដ៏អស្ចារ្យ មិនចេះនឿយហត់ មិនងងុយដេក អាចអង្គុយភាវនាពេញមួយយប់ទល់ភ្លឺដោយឥតធុញទ្រាន់។',
    descEn: 'Tireless, surge of energy where fatigue and sleepiness vanish, meditating easily through the night.',
    pitfallKm: 'ព្យាយាមតឹងតែងជ្រុល (ឧទ្ធច្ចៈ) រហូតធ្វើឱ្យចិត្តរំជើបរំជួល បាត់បង់តុល្យភាពនៃសមាធិ។',
    pitfallEn: 'Excessive striving creates restlessness and agitation, throwing the faculties out of harmony.',
  },
  {
    id: 8,
    num: '៨',
    titleKm: 'ឧបដ្ឋាន (សតិរឭកដឹងច្បាស់)',
    titleEn: 'Upaṭṭhāna (Keen Mindfulness)',
    pali: 'Upaṭṭhāna — ឧបដ្ឋានំ',
    icon: '👁️',
    descKm: 'សតិដឹងអារម្មណ៍រហ័សដូចរន្ទះ រឭកដឹងគ្រប់កិរិយា គ្រប់គំនិត គ្មានការភ្លេចភ្លាំងសូម្បីមួយប៉ប្រិចភ្នែក។',
    descEn: 'Lightning-fast mindfulness tracking every micro-movement and thought without the slightest lapse.',
    pitfallKm: 'គិតថាខ្លួនមានសតិពេញលេញរួចហើយ ក៏កើតសេចក្តីធ្វេសប្រហែសក្នុងការលះកិលេសជ្រៅៗ។',
    pitfallEn: 'Presuming mindfulness is already perfected, leading to complacency in root defilements.',
  },
  {
    id: 9,
    num: '៩',
    titleKm: 'ឧបេក្ខា (ចិត្តស្មើឥតរំជួល)',
    titleEn: 'Upekkhā (Equanimity in Insight)',
    pali: 'Upekkhā — ឧបេក្ខា',
    icon: '⚖️',
    descKm: 'ចិត្តតម្កល់នៅជាកណ្តាល ចំពោះអារម្មណ៍ទាំងពួង មិនត្រេកអរ មិនខឹងថ្នាំងថ្នាក់ ស្មើដូចជញ្ជីង។',
    descEn: 'Neutral, neutral detachment observing all phenomena without aversion or attraction.',
    pitfallKm: 'ច្រឡំឧបេក្ខាក្នុងវិបស្សនា ថាជាការរួចចាកទុក្ខស្រេចបាច់ ក៏បញ្ឈប់ការពិចារណាត្រៃលក្ខណ៍។',
    pitfallEn: 'Mistaking neutral insight detachment for final emancipation, abandoning deep inquiry.',
  },
  {
    id: 10,
    num: '១០',
    titleKm: 'និកន្តិ (ការត្រេកអរស្ងាត់ៗ)',
    titleEn: 'Nikanti (Subtle Attachment / Relish)',
    pali: 'Nikanti — និកន្តិ (មេក្លោងនៃឧបកិលេស)',
    icon: '🕸️',
    descKm: 'សេចក្តីតណ្ហាស្តើងល្អិត ដែលពេញចិត្ត ជាប់ចិត្ត និងស្រឡាញ់នូវឱភាស ញាណ បីតិ ជាដើមខាងលើនោះ។ នេះជាមេក្លោងពិតប្រាកដនៃឧបកិលេស! ',
    descEn: 'Subtle craving and delight clinging quietly to the radiance, joy, or tranquility above. This is the master coordinator of all corruptions!',
    pitfallKm: 'ការតោងទាមដ៏ស្ងប់ស្ងាត់នេះហើយ ដែលចងជើងអ្នកបដិបត្តិមិនឱ្យទៅមុខរួច។',
    pitfallEn: 'This silent clinging anchors the mind in delusion, effectively freezing spiritual awakening.',
  },
]
</script>
