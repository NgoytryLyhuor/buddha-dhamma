<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៦៥ — មង្គល ៣៨ ប្រការ', 'GATHA 65 — THE 38 HIGHEST BLESSINGS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('មង្គល ៣៨ ប្រការ (មង្គលសូត្រ) ៖ ជណ្តើរជីវិតឆ្ពោះទៅរកសិរីសួស្តី', 'The 38 Blessings (Maṅgala Sutta) — Stepping Stones to Freedom') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('មង្គល ៣៨ ប្រការ គឺជាមាគ៌ានៃការអភិវឌ្ឍជីវិតដ៏ឧត្តមបំផុត ដែលព្រះសម្មាសម្ពុទ្ធទ្រង់ត្រាស់សម្ដែងដល់ទេវតាមួយអង្គនៅវត្តជេតពន នាពេលរាត្រីស្ងាត់ បន្ទាប់ពីមនុស្សនិងទេវតាទូទាំងជម្ពូទ្វីបបានជជែកដេញដោលគ្នាអស់ ១២ ឆ្នាំ អំពីអ្វីទៅជា «មង្គល» ពិតប្រាកដ។ ព្រះពុទ្ធទ្រង់បានបដិសេធជំនឿអរូបិយដែលថាមង្គលកើតចេញពីការឃើញរបស់ប្លែក ឮសំឡេងសត្វយំ ឬការទស្សន៍ទាយ ហើយទ្រង់បានចង្អុលបង្ហាញថា មង្គលពិតប្រាកដ គឺកើតចេញពីសកម្មភាពជាក់ស្តែង ៣៨ ប្រការ ដែលរៀបចំឡើងដូចជណ្តើរ ១០ កម្រិត ចាប់ពីការជ្រើសរើសមិត្ត រហូតដល់ការសម្រេចព្រះនិព្វាន។', 'The Thirty-Eight Blessings constitute the supreme blueprint for human flourishment, revealed by the Buddha to an incandescent deity at Jetavana Monastery after humans and devas had argued inconclusively for twelve years about the true nature of "blessing" (maṅgala). Dismantling superstitious notions tied to omens, auspicious sightings, or astrology, the Buddha taught thirty-eight practical, verifiable deeds arranged in ten ascending tiers—from selecting wise friends up to the unshakeable liberation of Nibbāna.') }}
    </p>

    <!-- Pali Gatha Box -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ពហូ ទេវា មនុស្សា ច មង្គលានិ អចិន្តយុំ អាកង្ខមានា សោត្ថraw ព្រូហិ មង្គលមុត្តមំ។»', '"Many deities and humans, yearning for prosperity, have contemplated blessings. Please speak of the supreme blessing." — Maṅgala Sutta (Khuddakapāṭha 5)') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— មង្គលសូត្រ ខុទ្ទកនិកាយ ខុទ្ទកបាឋ', '— Maṅgala Sutta, Khuddaka Nikāya') }}
      </p>
    </div>

    <!-- Tier Filter Tabs -->
    <div class="mt-8 flex items-center justify-between gap-2 flex-wrap">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🪜</span>
        <span>{{ t('ជណ្តើរមង្គលទាំង ១០ ថ្នាក់ (៣៨ ប្រការ)', 'The 10 Ascending Tiers of 38 Blessings') }}</span>
      </h3>
      <div class="flex items-center gap-1.5 text-xs overflow-x-auto max-w-full pb-1 scrollbar-none touch-pan-x sm:flex-wrap">
        <button
          type="button"
          class="px-2.5 py-1 rounded-lg border font-bold cursor-pointer transition shrink-0 whitespace-nowrap"
          :class="activeTier === 'all' ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30' : 'border-stone-300 dark:border-stone-700'"
          @click="activeTier = 'all'"
        >
          {{ t('ទាំងអស់ (៣៨)', 'All (38)') }}
        </button>
        <button
          type="button"
          class="px-2.5 py-1 rounded-lg border font-bold cursor-pointer transition shrink-0 whitespace-nowrap"
          :class="activeTier === 'foundation' ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30' : 'border-stone-300 dark:border-stone-700'"
          @click="activeTier = 'foundation'"
        >
          {{ t('គ្រឹះជីវិត', 'Foundation') }}
        </button>
        <button
          type="button"
          class="px-2.5 py-1 rounded-lg border font-bold cursor-pointer transition shrink-0 whitespace-nowrap"
          :class="activeTier === 'spiritual' ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30' : 'border-stone-300 dark:border-stone-700'"
          @click="activeTier = 'spiritual'"
        >
          {{ t('ផ្លូវចិត្តខ្ពស់', 'Spiritual') }}
        </button>
      </div>
    </div>

    <!-- Tiers List -->
    <div class="mt-4 space-y-4">
      <div
        v-for="tier in filteredTiers"
        :key="tier.id"
        class="card-paper p-5 rounded-xl border"
      >
        <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2.5">
            <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
              {{ tier.num }}
            </span>
            <div>
              <h4 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
                {{ t(tier.tierTitleKm, tier.tierTitleEn) }}
              </h4>
              <p class="text-[11px] font-mono text-stone-500">{{ tier.paliVerse }}</p>
            </div>
          </div>
          <span class="text-2xl">{{ tier.icon }}</span>
        </div>

        <p class="text-xs mt-2.5 italic text-stone-600 dark:text-stone-400">
          {{ t(tier.summaryKm, tier.summaryEn) }}
        </p>

        <!-- Blessings inside this tier -->
        <div class="mt-4 space-y-2">
          <div
            v-for="b in tier.blessings"
            :key="b.num"
            class="p-3 rounded-lg border bg-stone-500/5 border-stone-500/15 flex items-start gap-3"
          >
            <span class="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 shrink-0">
              {{ b.num }}
            </span>
            <div class="min-w-0 flex-1">
              <div class="flex items-center justify-between flex-wrap gap-1">
                <strong class="text-xs sm:text-sm font-bold" :style="{ color: 'var(--ink)' }">
                  {{ t(b.km, b.en) }}
                </strong>
                <span class="text-[10px] font-mono text-stone-500">{{ b.pali }}</span>
              </div>
              <p class="text-xs mt-1 text-stone-600 dark:text-stone-300 leading-relaxed">
                {{ t(b.descKm, b.descEn) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Final Verse / Supreme Protection -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🏆</span>
        <span>{{ t('អានិសង្សចុងក្រោយនៃមង្គលសូត្រ', 'The Final Guarantee of Mangala Sutta') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('«ឯតាទិសានិ កត្វាន សព្វត្ថមបរាជិតា សព្វត្ថ សោត្ថឹ គច្ឆន្តិ តន្តេសំ មង្គលមុត្តមន្តិ» ៖ មនុស្សនិងទេវតាណាដែលបានអនុវត្តតាមមង្គលទាំង ៣៨ ប្រការនេះហើយ នឹងមិនចាញ់នរណាឡើយក្នុងទីគ្រប់ស្ថាន មានតែសេចក្តីសុខក្សេមក្សាន្តគ្រប់ទិសទី។ នេះហើយជាសិរីសួស្តីដ៏ឧត្តមបំផុត!', '"Those who have accomplished these things are undefeated everywhere, and everywhere they walk in safety. This is their highest blessing." — Mangala Sutta Concluding Stanza.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeTier = ref('all')

const tiers = [
  {
    id: 1,
    category: 'foundation',
    num: 'ថ្នាក់ទី ១',
    tierTitleKm: 'ការរៀបចំគ្រឹះនៃជីវិត (មង្គល ១-៣)',
    tierTitleEn: 'Foundation of Life (Blessings 1-3)',
    paliVerse: 'អសេវនា ច ពាលានំ បណ្ឌិតានញ្ច សេវនា...',
    icon: '🌱',
    summaryKm: 'ការរើសបរិស្ថានមនុស្សជុំវិញខ្លួនជាជំហានដំបូងបំផុតនៃភាពជោគជ័យ។',
    summaryEn: 'Choosing one\'s social environment wisely is the bedrock of all virtue.',
    blessings: [
      { num: '០១', km: 'ការមិនសេពគប់បុគ្គលពាល', en: 'Not associating with the foolish', pali: 'Asevanā ca bālānaṃ', descKm: 'ជៀសវាងមនុស្សគំនិតអាក្រក់ អ្នកបំផ្លាញសីលធម៌ និងអ្នកអូសទាញឱ្យប្រព្រឹត្តខុស។', descEn: 'Staying clear of malicious influences that corrode moral character.' },
      { num: '០២', km: 'ការសេពគប់បណ្ឌិត', en: 'Associating with the wise', pali: 'Paṇḍitānañca sevanā', descKm: 'រាប់អានអ្នកមានប្រាជ្ញា មានធម៌ក្នុងចិត្ត ដែលចង្អុលបង្ហាញផ្លូវត្រូវ និងផ្តល់គំនិតល្អ។', descEn: 'Surrounding oneself with virtuous mentors who guide toward nobility.' },
      { num: '០៣', km: 'ការបូជាដល់បុគ្គលដែលគួរជាទីបូជា', en: 'Honoring those worthy of honor', pali: 'Pūjā ca pūjanīyānaṃ', descKm: 'គោរពដឹងគុណព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ មាតាបិតា គ្រូបាធ្យាយ និងអ្នកមានគុណ។', descEn: 'Showing deep respect to the Buddha, teachers, elders, and benefactors.' },
    ],
  },
  {
    id: 2,
    category: 'foundation',
    num: 'ថ្នាក់ទី ២',
    tierTitleKm: 'ការរៀបចំទីលំនៅ & ខ្លួនឯង (មង្គល ៤-៦)',
    tierTitleEn: 'Environment & Self-Direction (Blessings 4-6)',
    paliVerse: 'បដិរូបទេសវាសោ ច បុព្វេ ច កតបុញ្ញតា...',
    icon: '🏡',
    summaryKm: 'ការស្ថិតនៅក្នុងបរិយាកាសល្អ ការមានបុណ្យចាស់ និងការតម្រង់ទិសជីវិត។',
    summaryEn: 'Dwelling in a supportive place, drawing on prior merit, and upright self-guidance.',
    blessings: [
      { num: '០៤', km: 'ការរស់នៅក្នុងប្រទេសដ៏សមរម្យ', en: 'Living in a suitable land', pali: 'Patirūpadesavāso ca', descKm: 'រស់នៅកន្លែងមានសន្តិភាព មានសីលធម៌ សំបូរធម៌ទេសនា និងឱកាសការងារល្អ។', descEn: 'Living where Dhamma thrives, law is respected, and opportunities abound.' },
      { num: '០៥', km: 'ការបានសាងបុណ្យទុកពីមុន', en: 'Having made merits in the past', pali: 'Pubbe ca katapuññatā', descKm: 'អំពើល្អដែលបានសាងពីអតីត តែងតាមមកជួយជ្រោមជ្រែងឱ្យជួបតែលាភ និងឱកាស។', descEn: 'Benefiting from seeds of wholesome deeds planted in previous endeavors.' },
      { num: '០៦', km: 'ការតម្កល់ខ្លួនទុកឱ្យត្រូវ', en: 'Directing oneself rightly', pali: 'Attasammāpaṇidhi ca', descKm: 'ដឹកនាំកាយ វាចា ចិត្ត ឱ្យដើរលើគន្លងសច្ចធម៌ មិនរអិលធ្លាក់ក្នុងអបាយភូមិ។', descEn: 'Steering one\'s intentions, speech, and conduct resolutely on the righteous track.' },
    ],
  },
  {
    id: 3,
    category: 'foundation',
    num: 'ថ្នាក់ទី ៣',
    tierTitleKm: 'ការសិក្សា & វិជ្ជាជីវៈ (មង្គល ៧-១០)',
    tierTitleEn: 'Knowledge & Vocational Skill (Blessings 7-10)',
    paliVerse: 'ពាហុសច្ចញ្ច សិប្បញ្ច វិនយោ ច សុសិក្ខិតោ...',
    icon: '📚',
    summaryKm: 'ការអភិវឌ្ឍជំនាញ ចំណេះដឹង វិន័យរៀបរយ និងការនិយាយស្តីពិរោះពិសា។',
    summaryEn: 'Mastery of knowledge, refined craft, disciplined conduct, and gracious speech.',
    blessings: [
      { num: '០៧', km: 'ការចេះដឹងច្រើន (ពហុសូត្រ)', en: 'Great learning', pali: 'Bāhusaccañca', descKm: 'ឧស្សាហ៍រៀនសូត្រ ស្តាប់ច្រើន អានច្រើន យល់ដឹងទាំងផ្លូវលោក និងផ្លូវធម៌។', descEn: 'Broad study and keen intellectual absorption across secular and spiritual fields.' },
      { num: '០៨', km: 'ការមានសិល្បៈចំណេះវិជ្ជា', en: 'Proficiency in skills & arts', pali: 'Sippañca', descKm: 'មានជំនាញពិតប្រាកដក្នុងវិជ្ជាជីវៈ អាចយកទៅចិញ្ចឹមជីវិតដោយថ្លៃថ្នូរ។', descEn: 'Practical mastery of professions and technical skills to earn an honest livelihood.' },
      { num: '០៩', km: 'ការមានវិន័យដែលបានរៀនត្រឹមត្រូវ', en: 'Highly trained discipline', pali: 'Vinayo ca susikkhito', descKm: 'គោរពច្បាប់ គោរពសីល និងមានរបៀបរៀបរយក្នុងការរស់នៅ។', descEn: 'Adherence to ethical standards, lawfulness, and personal etiquette.' },
      { num: '១០', km: 'វាចាដែលពោលត្រឹមត្រូវ (សុភាសិត)', en: 'Well-spoken speech', pali: 'Subhāsitā ca yā vācā', descKm: 'និយាយពាក្យពិត មានប្រយោជន៍ ពិរោះពិសា និងចេញពីចិត្តស្មោះត្រង់។', descEn: 'Speech that is truthful, gentle, affectionate, and spoken at the right time.' },
    ],
  },
  {
    id: 4,
    category: 'foundation',
    num: 'ថ្នាក់ទី ៤',
    tierTitleKm: 'កាតព្វកិច្ចគ្រួសារ (មង្គល ១១-១៤)',
    tierTitleEn: 'Family Obligations & Focus (Blessings 11-14)',
    paliVerse: 'មាតាបិតុឧបដ្ឋានំ បុត្តទារស្ស សង្គហោ...',
    icon: '👨‍👩‍👦',
    summaryKm: 'ការសងគុណឪពុកម្តាយ ការថែរក្សាគ្រួសារ និងការធ្វើការងារឱ្យបានសម្រេច។',
    summaryEn: 'Honoring parents, cherishing family, and focused, unconfused labor.',
    blessings: [
      { num: '១១', km: 'ការចិញ្ចឹមបីបាច់មាតាបិតា', en: 'Caring for mother and father', pali: 'Mātāpitu-upaṭṭhānaṃ', descKm: 'បម្រើផ្គត់ផ្គង់ឪពុកម្តាយទាំងផ្លូវកាយ និងជួយដាស់សតិឱ្យលោកមានសីលធម៌។', descEn: 'Supporting aging parents materially and nurturing their spiritual peace.' },
      { num: '១២', km: 'ការសង្គ្រោះបុត្រនិងភរិយា/ស្វាមី', en: 'Cherishing spouse and children', pali: 'Puttadārassa saṅgaho', descKm: 'ផ្តល់ក្តីស្រឡាញ់ ការអប់រំ និងសេចក្តីស្មោះត្រង់ចំពោះដៃគូជីវិត និងកូនៗ។', descEn: 'Providing education, love, and unwavering fidelity to spouse and children.' },
      { num: '១៣', km: 'ការងារមិនច្របូកច្របល់', en: 'Peaceful, unconfused work', pali: 'Anākulā ca kammantā', descKm: 'ធ្វើការងារដោយមានផែនការ មិនទុកចោលពាក់កណ្តាលផ្លូវ ធ្វើឱ្យចប់សព្វគ្រប់។', descEn: 'Engaging in clear, organized activities completed with diligent dedication.' },
    ],
  },
  {
    id: 5,
    category: 'foundation',
    num: 'ថ្នាក់ទី ៥',
    tierTitleKm: 'គុណធម៌សង្គម & មិត្តភាព (មង្គល ១៤-១៧)',
    tierTitleEn: 'Social Benevolence & Kinship (Blessings 14-17)',
    paliVerse: 'ទានញ្ច ធម្មចរិយា ច ញាតកានញ្ច សង្គហោ...',
    icon: '🤝',
    summaryKm: 'ការចែករំលែកទាន ការរស់នៅប្រកបដោយធម៌ ការជួយញាតិ និងការងារស្អាតស្អំ។',
    summaryEn: 'Generosity, living the Dhamma, aiding relatives, and blameless endeavors.',
    blessings: [
      { num: '១៤', km: 'ការឱ្យទាន (ការចែករំលែក)', en: 'Generosity and giving', pali: 'Dānañca', descKm: 'លះបង់ទ្រព្យសម្បត្តិ ចំណេះដឹង និងក្តីករុណាដល់ជនទន់ខ្សោយ និងសង្គម។', descEn: 'Liberating the heart from stinginess by sharing resources and knowledge.' },
      { num: '១៥', km: 'ការប្រព្រឹត្តធម៌', en: 'Living in accordance with Dhamma', pali: 'Dhammacariyā ca', descKm: 'រស់នៅដោយមានយុត្តិធម៌ សីលធម៌ និងមិនបំពានសិទ្ធិអ្នកដទៃ។', descEn: 'Guiding one\'s everyday conduct strictly by upright moral righteousness.' },
      { num: '១៦', km: 'ការសង្គ្រោះញាតិសន្តាន', en: 'Supporting kin and relatives', pali: 'Ñātakānañca saṅgaho', descKm: 'ជួយជ្រោមជ្រែងសាច់ញាតិពេលមានអាសន្ន ឬខ្វះខាតដោយស្មោះស។', descEn: 'Extending a helping hand to extended family members in times of hardship.' },
      { num: '១៧', km: 'ការងារដែលមិនមានទោស', en: 'Blameless actions', pali: 'Anavajjāni kammāni', descKm: 'ធ្វើកិច្ចការទាំងឡាយណាដែលមិនខុសច្បាប់ មិនខុសធម៌ និងជាប្រយោជន៍ដល់ជាតិ។', descEn: 'Undertaking noble social projects and vocations free of harm and reproach.' },
    ],
  },
  {
    id: 6,
    category: 'spiritual',
    num: 'ថ្នាក់ទី ៦',
    tierTitleKm: 'ការបន្សុទ្ធចិត្ត & វៀរចាកបាប (មង្គល ១៨-២០)',
    tierTitleEn: 'Mental Restraint & Sobriety (Blessings 18-20)',
    paliVerse: 'អារតី វិរតី បាបា មជ្ជបានា ច សញ្ញមោ...',
    icon: '🛡️',
    summaryKm: 'ការការពារចិត្តកុំឱ្យប្រឡាក់ដោយបាប និងការរក្សាស្មារតីឱ្យភ្លឺស្វាងជានិច្ច។',
    summaryEn: 'Abstinence from wrongdoing, sobriety, and diligence in wholesome living.',
    blessings: [
      { num: '១៨', km: 'ការចៀសវាង និងវៀរចាកបាប', en: 'Refraining and abstaining from evil', pali: 'Āratī viratī pāpā', descKm: 'មិនត្រឹមតែមិនធ្វើបាបទេ សូម្បីគំនិតចង់ធ្វើបាប ក៏មិនឱ្យកើតក្នុងចិត្តដែរ។', descEn: 'Renouncing misdeeds both in subtle mental intention and overt bodily act.' },
      { num: '១៩', km: 'ការវៀរចាកការសេពគ្រឿងស្រវឹង', en: 'Abstaining from intoxicants', pali: 'Majjapānā ca saññamo', descKm: 'មិនផឹកស្រា ឬសេពគ្រឿងញៀនដែលបំផ្លាញសតិ និងបញ្ញា។', descEn: 'Total abstinence from alcohol and drugs that destroy mindfulness and judgment.' },
      { num: '២០', km: 'ការមិនធ្វេសប្រហែសក្នុងធម៌', en: 'Diligence in wholesome qualities', pali: 'Appamādo ca dhammesu', descKm: 'មានសតិរឭកដឹងខ្លួនជានិច្ច មិនទុកឱ្យពេលវេលាកន្លងផុតទៅដោយឥតប្រយោជន៍។', descEn: 'Vigilant heedfulness, never taking life or spiritual cultivation for granted.' },
    ],
  },
  {
    id: 7,
    category: 'spiritual',
    num: 'ថ្នាក់ទី ៧',
    tierTitleKm: 'គុណធម៌នៃបុគ្គលថ្លៃថ្នូរ (មង្គល ២១-២៥)',
    tierTitleEn: 'Qualities of Noble Character (Blessings 21-25)',
    paliVerse: 'គារវោ ច និវាតោ ច សន្តុដ្ឋី ច កតញ្ញុតា...',
    icon: '💎',
    summaryKm: 'សេចក្តីគោរព សុភាពរាបសារ ភាពសន្តោស កតញ្ញូ និងការស្តាប់ធម៌។',
    summaryEn: 'Reverence, humility, contentment, gratitude, and timely Dhamma study.',
    blessings: [
      { num: '២១', km: 'សេចក្តីគោរព', en: 'Reverence and respect', pali: 'Gāravo ca', descKm: 'មានការគោរពចំពោះអ្នកមានគុណ ច្បាប់ទម្លាប់ និងសច្ចធម៌។', descEn: 'Treating the sacred and the venerable with deep inner reverence.' },
      { num: '២២', km: 'សេចក្តីសុភាពរាបសារ (និវាតធម៌)', en: 'Humility and lowliness of ego', pali: 'Nivāto ca', descKm: 'មិនវាយឫកពារ មិនលើកតម្កើងខ្លួន មិនមើលងាយអ្នកដទៃ។', descEn: 'Subduing conceit, arrogance, and vanity; embracing modest grace.' },
      { num: '២៣', km: 'សេចក្តីសន្តោស (ត្រេកអរតាមមាន)', en: 'Contentment', pali: 'Santuṭṭhī ca', descKm: 'រីករាយនឹងអ្វីដែលខ្លួនរកបានដោយសុចរិត មិនលោភលន់ចង់បានរបស់គេ។', descEn: 'Finding deep satisfaction in what one honestly has, free from insatiable craving.' },
      { num: '២៤', km: 'សេចក្តីដឹងគុណ (កតញ្ញុតា)', en: 'Gratitude', pali: 'Kataññutā', descKm: 'ចងចាំគុណបំណាច់របស់អ្នកដទៃ ហើយរកឱកាសសងគុណវិញជានិច្ច។', descEn: 'Remembering kindness rendered and actively seeking opportunities to reciprocate.' },
      { num: '២៥', km: 'ការស្តាប់ធម៌តាមកាលវេលា', en: 'Hearing the Dhamma in due season', pali: 'Kālena dhammassavanaṃ', descKm: 'ឆ្លៀតពេលស្តាប់ធម៌ និងដំបូន្មានល្អៗ ដើម្បីដាស់សតិឱ្យភ្លឺថ្លា។', descEn: 'Listening regularly to spiritual teachings to rejuvenate inner clarity.' },
    ],
  },
  {
    id: 8,
    category: 'spiritual',
    num: 'ថ្នាក់ទី ៨',
    tierTitleKm: 'ការអត់ធន់ & សន្ទនាធម៌ (មង្គល ២៦-២៩)',
    tierTitleEn: 'Patience & Spiritual Dialogue (Blessings 26-29)',
    paliVerse: 'ខន្តី ច សោវចស្សតា សមណានញ្ច ទស្សនំ...',
    icon: '🕯️',
    summaryKm: 'ការអត់ធ្មត់ ងាយប្រដៅ ការជួបព្រះសង្ឃ និងការពិភាក្សាធម៌។',
    summaryEn: 'Patience, coachability, seeing contemplatives, and timely Dhamma discussions.',
    blessings: [
      { num: '២៦', km: 'សេចក្តីអត់ធន់ (ខន្តី)', en: 'Patience and forbearance', pali: 'Khantī ca', descKm: 'អត់ធន់នឹងការឈឺចាប់ អាកាសធាតុក្តៅត្រជាក់ និងពាក្យនិន្ទារិះគន់។', descEn: 'Bearing hardship, harsh criticism, and physical discomfort without retaliating.' },
      { num: '២៧', km: 'ភាពជាអ្នកងាយប្រដៅ', en: 'Obedience and openness to advice', pali: 'Sovaccassatā', descKm: 'បើកចិត្តទទួលយកពាក្យរិះគន់ស្ថាបនា មិនរឹងរូសចចេស។', descEn: 'Approachable, coachable, accepting corrective guidance with gratitude.' },
      { num: '២៨', km: 'ការបានជួបប្រទះសមណៈ', en: 'Sight of tranquil contemplatives', pali: 'Samaṇānañca dassanaṃ', descKm: 'ជួបអ្នកបួស ឬអ្នកបដិបត្តិធម៌ស្ងប់ស្ងាត់ ដើម្បីទទួលបានគំរូល្អ។', descEn: 'Visiting and associating with genuine monks and ascetics of tranquil demeanor.' },
      { num: '២៩', km: 'ការសន្ទនាធម៌តាមកាលវេលា', en: 'Dhamma discussion at the proper time', pali: 'Kālena dhammasākacchā', descKm: 'ពិភាក្សាដោះដូរយោបល់ធម៌ ដើម្បីបំបាត់មន្ទិលសង្ស័យក្នុងចិត្ត។', descEn: 'Engaging in thoughtful dialogue on scriptures to resolve philosophical doubts.' },
    ],
  },
  {
    id: 9,
    category: 'spiritual',
    num: 'ថ្នាក់ទី ៩',
    tierTitleKm: 'ការបដិបត្តិជាន់ខ្ពស់ (មង្គល ៣០-៣៤)',
    tierTitleEn: 'High Spiritual Penetration (Blessings 30-34)',
    paliVerse: 'តបោ ច ព្រហ្មចរិយញ្ច អរិយសច្ចាន ទស្សនំ...',
    icon: '🔥',
    summaryKm: 'ការដុតកម្តៅកិលេស ការប្រព្រឹត្តព្រហ្មចរិយធម៌ ការឃើញអរិយសច្ច និងសម្រេចនិព្វាន។',
    summaryEn: 'Austerity, spiritual celibacy, seeing the Noble Truths, and realizing Nibbāna.',
    blessings: [
      { num: '៣០', km: 'ការដុតកម្តៅកិលេស (តបធម៌)', en: 'Spiritual austerity', pali: 'Tapo ca', descKm: 'ការតស៊ូប្រយុទ្ធទប់ទល់នឹងសេចក្តីខ្ជិលច្រអូស និងចំណង់តណ្ហា។', descEn: 'Rigorous self-discipline to burn away deep-seated passions and defilements.' },
      { num: '៣១', km: 'ការប្រព្រឹត្តព្រហ្មចរិយធម៌', en: 'Leading a holy, chaste life', pali: 'Brahmacariyañca', descKm: 'ការរស់នៅស្អាតស្អំ បរិសុទ្ធ ផុតចាកកាមគុណ ដូចជាព្រះសង្ឃ ឬការរក្សាសីល ៨។', descEn: 'Living a life of pure chastity and refined simplicity dedicated to liberation.' },
      { num: '៣២', km: 'ការឃើញនូវអរិយសច្ចទាំងឡាយ', en: 'Perception of the Noble Truths', pali: 'Ariyasaccāna dassanaṃ', descKm: 'ទម្លុះទម្លាយយល់ច្បាស់នូវទុក្ខ សមុទយ និរោធ មគ្គ ដោយបញ្ញាវិបស្សនា។', descEn: 'Penetrating the Four Noble Truths directly through experiential insight.' },
      { num: '៣៣', km: 'ការធ្វើឱ្យជាក់ច្បាស់នូវព្រះនិព្វាន', en: 'Realization of Nibbāna', pali: 'Nibbānasacchikiriyā ca', descKm: 'ការសម្រេចនូវអរិយមគ្គ-អរិយផល រំលត់ទុក្ខទាំងស្រុង។', descEn: 'Attaining the fruition of liberation, extinguishing the fires of greed, hatred, and delusion.' },
    ],
  },
  {
    id: 10,
    category: 'spiritual',
    num: 'ថ្នាក់ទី ១០',
    tierTitleKm: 'ចិត្តស្ងប់នៃព្រះអរហន្ត (មង្គល ៣៥-៣៨)',
    tierTitleEn: 'Unshakable Mind of the Arahant (Blessings 35-38)',
    paliVerse: 'ផុដ្ឋស្ស លោកធម្មេហិ ចិត្តំ យស្ស ន កម្បតិ...',
    icon: '🪷',
    summaryKm: 'ចិត្តមិនរំជើបរំជួលនឹងលោកធម៌ គ្មានសោក គ្មានកិលេស និងក្សេមក្សាន្ត។',
    summaryEn: 'Mind untouched by worldly conditions, sorrowless, stainless, and utterly secure.',
    blessings: [
      { num: '៣៤', km: 'ចិត្តមិនញាប់ញ័រដោយលោកធម៌', en: 'Mind unshaken by worldly winds', pali: 'Phuṭṭhassa lokadhammehi cittaṃ yassa na kampati', descKm: 'ត្រូវលាភ យស សរសើរ សុខ ឬបាត់បង់ទៅវិញ ក៏ចិត្តនៅតែរឹងមាំដូចថ្មភ្នំ។', descEn: 'Remaining completely balanced through gain and loss, praise and blame.' },
      { num: '៣៥', km: 'ចិត្តមិនមានសេចក្តីសោក', en: 'A mind free from sorrow', pali: 'Asokaṃ', descKm: 'ផុតស្រឡះពីទុក្ខសោក ការយំសោក និងការព្រួយបារម្ភចំពោះការព្រាត់ប្រាស។', descEn: 'Liberated from grief, sorrow, and lamentation when encountering parting.' },
      { num: '៣៦', km: 'ចិត្តគ្មានធូលីកិលេស', en: 'Stainless and unstained mind', pali: 'Virajaṃ', descKm: 'ចិត្តបរិសុទ្ធស្អាត គ្មានធូលីរាគៈ ទោសៈ មោហៈ ជាប់នៅឡើយ។', descEn: 'Free from the subtlest dust of lust, hostility, and delusion.' },
      { num: '៣៧', km: 'ចិត្តក្សេមក្សាន្ត (សន្តិភាពកំពូល)', en: 'Utter security and supreme peace', pali: 'Khemaṃ', descKm: 'សុវត្ថិភាពខ្ពស់បំផុត គ្មានភ័យខ្លាចចំពោះសង្សារវដ្តទៀតឡើយ។', descEn: 'Absolute spiritual immunity and safe harbor beyond all mundane rebirths.' },
      { num: '៣៨', km: 'មង្គលដ៏ឧត្តមទាំងពួង (សរុប)', en: 'The Supreme Blessing Fulfillment', pali: 'Etam-maṅgalam-uttamaṃ', descKm: 'ការប្រមូលផ្តុំនៃគុណធម៌ទាំងអស់ ដែលជាជ័យជម្នះខ្ពស់បំផុតនៃជីវិត។', descEn: 'The full culimination of spiritual triumph and universal auspiciousness.' },
    ],
  },
]

const filteredTiers = computed(() => {
  if (activeTier.value === 'all') return tiers
  return tiers.filter(t => t.category === activeTier.value)
})
</script>
