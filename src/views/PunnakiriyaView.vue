<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៦៩ — បុណ្យកិរិយាវត្ថុ ១០ ប្រការ', 'GATHA 69 — 10 BASES OF MERIT ACTION') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('បុណ្យកិរិយាវត្ថុ ១០ ៖ វិធីសាងបុណ្យ ១០ បែប ដោយមិនចាំបាច់មានលុយច្រើន', '10 Bases of Meritorious Action (Puññakiriyavatthu)') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('បុណ្យកិរិយាវត្ថុ ១០ ប្រការ គឺជាមាគ៌ានៃការកសាងកុសលធម៌ដ៏ទូលំទូលាយបំផុតក្នុងព្រះពុទ្ធសាសនា ដែលបង្ហាញថា «បុណ្យ» មិនមែនទាល់តែមានប្រាក់កាសរាប់ម៉ឺនដុល្លារមកធ្វើទានទើបបានបុណ្យនោះឡើយ។ ព្រះសម្មាសម្ពុទ្ធទ្រង់ត្រាស់សម្ដែងវិធីសាងបុណ្យរហូតដល់ ១០ យ៉ាង ដែលក្នុងនោះ មានរហូតដល់ ៧ យ៉ាង មិនចាំបាច់ចំណាយប្រាក់សូម្បីមួយកាក់មួយសេន ដូចជាការឱនលំទោនគោរពចាស់ទុំ, ការជួយកម្លាំងកាយ, ការត្រេកអរនឹងអំពើល្អរបស់អ្នកដទៃ, និងការតម្រង់ការយល់ឃើញឱ្យត្រឹមត្រូវ។ នរណាក៏អាចសាងបុណ្យបានគ្រប់វិនាទីនៃជីវិត។', 'Puññakiriyavatthu reveals the profound, democratic scope of merit-making in Buddhism, completely dismantling the illusion that merit requires vast wealth. The Buddha taught ten distinct avenues of wholesome deed. In fact, seven of these ten cost not a single coin—such as humility, volunteering physical effort, rejoicing in others\' goodness, and rectifying one\'s view. Every living being can generate supreme merit throughout daily life.') }}
    </p>

    <!-- Verse Box from Itivuttaka -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«បុញ្ញមេវ សោ សិក្ខេយ្យ អាយតគ្គំ សុខុទ្រយំ, ទានញ្ច សមចរិយញ្ច មេត្តចិត្តញ្ច ភាវយេ។»', '"One should train in wholesome merit that brings lasting future happiness: cultivate generosity, peaceful conduct, and a heart brimming with loving-kindness." — Itivuttaka 22') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— ឥតិវុត្តកៈ ទុកនិបាត បុញ្ញសូត្រ', '— Itivuttaka, Dukanipāta, Puñña Sutta') }}
      </p>
    </div>

    <!-- Free Merits Highlight -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <div class="flex items-center gap-2 font-display text-base font-bold" :style="{ color: 'var(--ink)' }">
        <span>💡</span>
        <span>{{ t('ចំណុចភ្ញាក់រឭក ៖ បុណ្យ ៧ យ៉ាង ដែលមិនអស់លុយសូម្បីតែមួយរៀល', 'Insight: 7 Merits That Cost Zero Money') }}</span>
      </div>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('មនុស្សជាច្រើនគិតថា «ខ្ញុំក្រ គ្មានលុយ ធ្វើបុណ្យមិនកើតទេ»។ នេះជាការយល់ខុសស្រឡះ! ព្រះពុទ្ធទ្រង់បញ្ជាក់ថា បុណ្យកើតចេញពី «ចេតនាស្អាតស្អំ» មិនមែនកើតពីទំហំទឹកប្រាក់ឡើយ។ គ្រាន់តែអ្នកឃើញគេធ្វើបុណ្យហើយញញឹមត្រេកអរ (អនុមោទនា) អ្នកក៏ទទួលបានកុសលស្មើនឹងអ្នកធ្វើដែរ!', 'Many believe: "I am poor, so I cannot make merit." This is a profound misconception. Merit springs from wholesome volition (Cetanā), not monetary scale. Sincerely rejoicing in another\'s good deeds generates magnificent karmic fruit.') }}
      </p>
    </div>

    <!-- The 10 Merits Grid -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>☸️</span>
        <span>{{ t('បុណ្យកិរិយាវត្ថុទាំង ១០ ប្រការ', 'The 10 Avenues of Wholesome Action') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="item in merits"
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
                    {{ t(item.titleKm, item.titleEn) }}
                  </h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ item.pali }}</p>
                </div>
              </div>
              <span class="text-2xl">{{ item.icon }}</span>
            </div>

            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(item.descKm, item.descEn) }}
            </p>
          </div>

          <!-- Practical Action & Category Tag -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2.5 rounded-lg bg-stone-500/5 border border-stone-500/15">
              <div class="flex items-center justify-between mb-1">
                <span class="font-bold text-amber-700 dark:text-amber-300">🌱 {{ t('សកម្មភាពជាក់ស្តែង ៖', 'Daily Practice:') }}</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold"
                  :class="item.costFree ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300' : 'bg-amber-500/15 text-amber-700 dark:text-amber-300'">
                  {{ item.costFree ? t('ឥតគិតថ្លៃ', 'Zero Cost') : t('ការចែករំលែកទ្រព្យ', 'Sharing') }}
                </span>
              </div>
              <p class="text-stone-600 dark:text-stone-400 leading-relaxed">{{ t(item.actionKm, item.actionEn) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const merits = [
  {
    id: 1,
    num: '០១',
    titleKm: 'ទានម័យ (បុណ្យកើតពីការឱ្យទាន)',
    titleEn: 'Giving (Dānamaya)',
    pali: 'Dānamaya — ការបរិច្ចាគលះបង់ទ្រព្យសម្បត្តិ',
    icon: '🎁',
    costFree: false,
    descKm: 'ការលះបង់នូវវត្ថុទ្រព្យ អាហារ សំលៀកបំពាក់ ថ្នាំសង្កូវ ដល់ព្រះសង្ឃ អ្នកក្រីក្រ ឬសត្វធាតុ ដើម្បីបំបាត់សេចក្តីកំណាញ់ស្វិតស្វាញចេញពីចិត្ត។',
    descEn: 'Sharing food, clothing, medicine, or resources with monastics, needy people, or animals to purge the heart of stinginess.',
    actionKm: 'ប្រគេនចង្ហាន់ដល់ព្រះសង្ឃ ចែកអាហារដល់ជនអនាថា ជួយឧបត្ថម្ភមន្ទីរពេទ្យកុមារ។',
    actionEn: 'Offering meals to monks, feeding stray animals, supporting charity programs.',
  },
  {
    id: 2,
    num: '០២',
    titleKm: 'សីលម័យ (បុណ្យកើតពីការរក្សាសីល)',
    titleEn: 'Moral Virtue (Sīlamaya)',
    pali: 'Sīlamaya — ការសង្រួមកាយ វាចា ឱ្យបរិសុទ្ធ',
    icon: '🛡️',
    costFree: true,
    descKm: 'ការសង្រួមកាយនិងវាចាមិនឱ្យបៀតបៀនដល់ជីវិត ទ្រព្យសម្បត្តិ និងសិទ្ធិសេរីភាពរបស់អ្នកដទៃ តាមរយៈការរក្សាសីល ៥ ឬសីល ៨។',
    descEn: 'Refraining from harming life, theft, misconduct, falsehood, and intoxication, preserving pure bodily and verbal conduct.',
    actionKm: 'មិនសម្លាប់សត្វ មិនកុហកបោកប្រាស់ មិនផឹកស្រា រក្សាសីលឱ្យស្អាតក្នុងជីវិតប្រចាំថ្ងៃ។',
    actionEn: 'Practicing the 5 or 8 precepts diligently in daily transactions.',
  },
  {
    id: 3,
    num: '០៣',
    titleKm: 'ភាវនាម័យ (បុណ្យកើតពីការចម្រើនសមាធិ)',
    titleEn: 'Mental Cultivation (Bhāvanāmaya)',
    pali: 'Bhāvanāmaya — ការអប់រំចិត្តឱ្យស្ងប់ និងមានបញ្ញា',
    icon: '🧘',
    costFree: true,
    descKm: 'ការហ្វឹកហាត់ចិត្តឱ្យស្ងប់ចាកនីវរណធម៌ (សមថៈ) និងការពិចារណាឃើញការពិតនៃអនិច្ចំ ទុក្ខំ អនត្តា (វិបស្សនា) ដើម្បីរំលត់កិលេស។',
    descEn: 'Cultivating tranquil stillness (Samatha) and penetrating insight into impermanence and non-self (Vipassanā).',
    actionKm: 'ឆ្លៀតពេល ១៥-៣០ នាទីរាល់ថ្ងៃ អង្គុយតាមដានដង្ហើមចេញចូល និងចម្រើនមេត្តា។',
    actionEn: 'Spending 15-30 minutes daily practicing breath awareness and loving-kindness.',
  },
  {
    id: 4,
    num: '០៤',
    titleKm: 'អបចាយនម័យ (បុណ្យកើតពីការគោរពឱនលំទោន)',
    titleEn: 'Reverence & Humility (Apacāyanamaya)',
    pali: 'Apacāyanamaya — ការបង្ហាញការគោរពចំពោះអ្នកមានគុណ',
    icon: '🙏',
    costFree: true,
    descKm: 'ការលើកដៃសំពះ ឱនលំទោន ផ្តល់កិត្តិយស និងគោរពចំពោះព្រះរតនត្រ័យ មាតាបិតា គ្រូអាចារ្យ និងព្រឹទ្ធាចារ្យដែលមានវ័យចំណាស់ជាងខ្លួន។',
    descEn: 'Expressing genuine humility, reverence, and deference to the Triple Gem, parents, mentors, and the elderly.',
    actionKm: 'សំពះឪពុកម្តាយ ក្រោកឈររៀបចំកន្លែងអង្គុយជូនមនុស្សចាស់ មិនវាយឫកពារមើលងាយអ្នកដទៃ។',
    actionEn: 'Bowing to parents, offering seats to the elderly on transit, shedding condescension.',
  },
  {
    id: 5,
    num: '០៥',
    titleKm: 'វេយ្យាវច្ចម័យ (បុណ្យកើតពីការជួយការងារល្អ)',
    titleEn: 'Helpful Service (Veyyāvaccamaya)',
    pali: 'Veyyāvaccamaya — ការជួយកម្លាំងកាយក្នុងកិច្ចការបុណ្យ',
    icon: '🧹',
    costFree: true,
    descKm: 'ការយកកម្លាំងកាយទៅជួយកិច្ចការវត្តអារាម ជួយបោសសម្អាតទីធ្លាសាធារណៈ ជួយលើកទឹកចិត្ត ឬជួយសម្រាលការងារអ្នកដទៃដោយស្មោះត្រង់។',
    descEn: 'Rendering dedicated voluntary physical service for monasteries, communal needs, or assisting the frail.',
    actionKm: 'ជួយលាងចានបោសសំរាមក្នុងពិធីបុណ្យ ជួយការងារមនុស្សចាស់ ជួយដឹកមនុស្សឆ្លងថ្នល់។',
    actionEn: 'Washing dishes at the temple, cleaning public grounds, assisting a struggling neighbor.',
  },
  {
    id: 6,
    num: '០៦',
    titleKm: 'បត្តិទានម័យ (បុណ្យកើតពីការចែករំលែកបុណ្យ)',
    titleEn: 'Dedication of Merit (Pattidānamaya)',
    pali: 'Pattidānamaya — ការឧទ្ទិសចំណែកបុណ្យដល់អ្នកដទៃ',
    icon: '🕊️',
    costFree: true,
    descKm: 'ការតាំងចិត្តឧទ្ទិសចំណែកកុសលដែលខ្លួនបានធ្វើ ជូនដល់មាតាបិតា បុព្វការីជនដែលចែកឋាន ទេវតា និងសព្វសត្វទាំងអស់ឱ្យបានទទួលក្តីសុខ។',
    descEn: 'Selflessly dedicating the fruits of one\'s wholesome deeds to departed ancestors, guardian devas, and all sentient beings.',
    actionKm: 'ក្រោយធ្វើបុណ្យ ភាវនាក្នុងចិត្តថា «សូមចែកបុណ្យនេះដល់ពុកម៉ែ ញាតិទាំង ៧ សន្តាន និងសត្វទាំងអស់»។',
    actionEn: 'Reciting merit-sharing verses wishing peace and liberation for all beings after spiritual actions.',
  },
  {
    id: 7,
    num: '០៧',
    titleKm: 'បត្តានុមោទនាម័យ (បុណ្យកើតពីការត្រេកអរបុណ្យគេ)',
    titleEn: 'Rejoicing in Others\' Merit (Pattānumodanāmaya)',
    pali: 'Pattānumodanāmaya — ការសប្បាយចិត្តនឹងអំពើល្អរបស់អ្នកដទៃ',
    icon: '👏',
    costFree: true,
    descKm: 'ការមានចិត្តរីករាយ មិនច្រណែនឈ្នានីស ពេលឃើញអ្នកដទៃបានធ្វើអំពើល្អ បានឡើងបុណ្យសក្តិ ឬទទួលបានជោគជ័យ ដោយពោលពាក្យថា «សាធុ សាធុ»។',
    descEn: 'Feeling genuine joy (Muditā) devoid of envy when witnessing others perform good deeds, exclaiming heartfelt "Sādhu".',
    actionKm: 'ពេលឃើញគេសង់វត្ត គេចែកទាន ឬគេប្រឡងជាប់ ញញឹមត្រេកអរជាមួយគេចេញពីបេះដូង។',
    actionEn: 'Rejoicing warmly when friends succeed or donate, without a trace of jealousy.',
  },
  {
    id: 8,
    num: '០៨',
    titleKm: 'ធម្មស្សវនម័យ (បុណ្យកើតពីការស្តាប់ធម៌)',
    titleEn: 'Listening to the Dhamma (Dhammassavanamaya)',
    pali: 'Dhammassavanamaya — ការស្តាប់ដំបូន្មាននិងសច្ចធម៌',
    icon: '🎧',
    costFree: true,
    descKm: 'ការយកចិត្តទុកដាក់ស្តាប់ព្រះធម៌ទេសនា អានសៀវភៅធម៌ ឬស្តាប់ការណែនាំល្អៗ ដើម្បីបណ្តុះពុទ្ធិ និងជម្រះមន្ទិលសង្ស័យចេញពីចិត្ត។',
    descEn: 'Attentive listening to Dhamma discourses and reading scriptures to cultivate wisdom and clarify ethical doubts.',
    actionKm: 'បើកសំឡេងធម៌ទេសនាស្តាប់ពេលធ្វើដំណើរ ឬមុនពេលចូលគេងជាប្រចាំ។',
    actionEn: 'Listening attentively to Dhamma podcasts during commutes or before sleep.',
  },
  {
    id: 9,
    num: '០៩',
    titleKm: 'ធម្មទេសនាម័យ (បុណ្យកើតពីការសម្តែងធម៌ & ចែកចំណេះ)',
    titleEn: 'Teaching the Dhamma (Dhammadesanāmaya)',
    pali: 'Dhammadesanāmaya — ការចែករំលែកសច្ចធម៌ដល់អ្នកដទៃ',
    icon: '📖',
    costFree: true,
    descKm: 'ការបង្រៀន ចែករំលែក ឬពន្យល់ធម៌ល្អៗ និងចំណេះដឹងមានប្រយោជន៍ដល់អ្នកដទៃ ដោយបំណងចង់ឱ្យគេរួចផុតពីទុក្ខ មិនមែនដើម្បីលាភយសឡើយ។',
    descEn: 'Teaching, explaining, or writing about the Dhamma with pure altruistic motivation to guide others out of ignorance.',
    actionKm: 'ពន្យល់ធម៌ដល់កូនៗ ចែករំលែកអត្ថបទធម៌ល្អៗលើបណ្តាញសង្គម ឬបង្រៀនសីលធម៌ដល់យុវជន។',
    actionEn: 'Sharing Dhamma insights with family or writing ethical essays online.',
  },
  {
    id: 10,
    num: '១០',
    titleKm: 'ទិដ្ឋុជ្ជុកម្ម (ការកែសម្រួលទស្សនៈឱ្យត្រង់)',
    titleEn: 'Straightening One\'s Views (Diṭṭhujjukamma)',
    pali: 'Diṭṭhujjukamma — ការតម្កល់ការយល់ឃើញលើសម្មាទិដ្ឋិ',
    icon: '👁️',
    costFree: true,
    descKm: 'ការកែប្រែទស្សនៈខុសឆ្គង (មិច្ឆាទិដ្ឋិ) ឱ្យត្រឡប់មកជាត្រូវ (សម្មាទិដ្ឋិ) ជឿជាក់លើច្បាប់កម្មផល ជឿលើបុណ្យបាប និងជឿលើការត្រាស់ដឹងរបស់ព្រះពុទ្ធ។',
    descEn: 'Aligning worldview with Right View (Sammādiṭṭhi): understanding Kamma, moral accountability, and dependent arising.',
    actionKm: 'ពិចារណាគ្រប់រឿងតាមហេតុនិងផល មិនងប់ងុលនឹងជំនឿផ្តេសផ្តាស ជឿលើអំពើល្អនិងអាក្រក់របស់ខ្លួន។',
    actionEn: 'Rooting out superstitious bias and evaluating life through clear cause and effect.',
  },
]
</script>
