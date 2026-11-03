<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៨៤ — អភិណ្ហបច្ចវេក្ខណៈ ៥ យ៉ាង', 'GATHA 84 — THE 5 DAILY CONTEMPLATIONS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('អភិណ្ហបច្ចវេក្ខណៈ ៥ ៖ ធម៌ពិចារណារាល់ថ្ងៃ ដើម្បីរំលាយការស្រវឹងក្នុងជីវិត', 'The 5 Daily Contemplations (Abhiṇha-paccavekkhaṇa)') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('អភិណ្ហបច្ចវេក្ខណៈ សំដៅលើសច្ចធម៌នៃជីវិត ៥ ប្រការ ដែលព្រះសម្មាសម្ពុទ្ធទ្រង់ត្រាស់បង្គាប់ឱ្យមនុស្សគ្រប់រូប — មិនថាជាភិក្ខុ ភិក្ខុនី ឧបាសក ឬឧបាសិកាឡើយ — គួរតែសូត្ររឭក និងពិចារណាជាប្រចាំរាល់ៗថ្ងៃ (អភិណ្ហំ បច្ចវេក្ខិតព្វំ)។ ធម្មជាតិនៃមនុស្សលោក តែងតែងងុយស្រវឹងនឹងភាពនៅក្មេង ស្រវឹងនឹងសុខភាពល្អ និងស្រវឹងនឹងជីវិតដែលកំពុងដកដង្ហើម រហូតដល់ភ្លេចខ្លួន ហ៊ានប្រព្រឹត្តអំពើអាក្រក់ និងកិបកេងអ្នកដទៃ។ នៅក្នុងឋានសូត្រ (AN 5.57) ព្រះពុទ្ធបានបញ្ជាក់ថា ការពិចារណាលើការពិតទាំង ៥ នេះ គឺជាកញ្ចក់ឆ្លុះបំភ្លឺស្មារតី ដែលកម្ចាត់ចោលនូវភាពក្រអឺតក្រទម និងរុញឱ្យមនុស្សប្រញាប់សាងអំពើល្អមុនពេលវាហួសពេល។', 'Abhiṇha-paccavekkhaṇa designates the five inescapable realities of human existence that the Buddha urged everyone—monk, nun, layman, or laywoman—to contemplate deliberately every single day. The human mind is chronically intoxicated by youth, health, and life itself, arrogantly presuming that vigor is eternal, thereby driving reckless cruelty and selfish grasping. In the Ṭhāna Sutta (AN 5.57), the Buddha taught that gazing into these five universal mirrors shatters complacency, restores lucid humility, and galvanizes urgent wholesome living.') }}
    </p>

    <!-- Pali Gatha Box from Ṭhāna Sutta (AN 5.57) -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ជរាធម្មោម្ហិ ជរំ អនតីតោ, ព្យាធិធម្មោម្ហិ ព្យាធឹ អនតីតោ, មរណធម្មោម្ហិ មរណំ អនតីតោ, សព្វេហិ មេ បិយេហិ មនាបេហិ នានាភាវោ វិនាភាវោ, កម្មស្សកោម្ហិ កម្មទាយាទោ កម្មយោនិ កម្មពន្ធុ កម្មប្បដិសរណោ...»', '"I am subject to aging, not exempt from aging. I am subject to illness, not exempt from illness. I am subject to death, not exempt from death. I will grow different and separate from all that is dear and appealing to me. I am the owner of my kamma, heir to my kamma..." — Aṅguttara Nikāya 5.57') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— ឋានសូត្រ បញ្ចកនិបាត អង្គុត្តរនិកាយ', '— Ṭhāna Sutta, Aṅguttara Nikāya') }}
      </p>
    </div>

    <!-- The 5 Daily Contemplations Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🪞</span>
        <span>{{ t('សច្ចធម៌ពិចារណាទាំង ៥ ប្រការ', 'The 5 Inescapable Realities') }}</span>
      </h3>

      <div
        v-for="item in contemplations"
        :key="item.id"
        class="card-paper p-5 sm:p-6 rounded-xl border flex flex-col justify-between"
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
            <span class="text-3xl">{{ item.icon }}</span>
          </div>

          <!-- Meaning -->
          <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t(item.descKm, item.descEn) }}
          </p>

          <!-- Poison it cures -->
          <div class="mt-3 p-3 rounded-lg bg-rose-500/5 border border-rose-500/20 text-xs">
            <strong class="text-rose-600 dark:text-rose-400 font-bold block mb-1">
              💊 {{ t('ឱសថបន្សាបការស្រវឹង ៖', 'Delusion it Dissolves:') }}
            </strong>
            <p class="text-stone-600 dark:text-stone-300 leading-relaxed">{{ t(item.cureKm, item.cureEn) }}</p>
          </div>
        </div>

        <!-- Life Application -->
        <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
          <div class="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <strong class="font-bold text-emerald-700 dark:text-emerald-300 block mb-0.5">
              🌱 {{ t('ការអនុវត្តផ្លូវចិត្ត ៖', 'Daily Psychological Practice:') }}
            </strong>
            <span class="text-stone-700 dark:text-stone-200">{{ t(item.practiceKm, item.practiceEn) }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Final Takeaway -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🕊️</span>
        <span>{{ t('ហេតុអ្វីបានជាការរឭករឿងស្លាប់ មិនមែនជាការទុទ្ទិដ្ឋិនិយម?', 'Why Is Contemplating Mortality Not Pessimism?') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('មនុស្សជាច្រើនភ័យខ្លាច មិនហ៊ាននិយាយពីរឿងចាស់ ឈឺ ស្លាប់ ព្រោះខ្លាច «ចង្រៃ»។ ប៉ុន្តែព្រះពុទ្ធបញ្ជាក់ថា ការគេចវេះពីការពិត មិនអាចធ្វើឱ្យយើងរួចផុតពីសេចក្តីស្លាប់បានឡើយ។ ការក្លាហានហ៊ានទទួលស្គាល់ការពិតទាំង ៥ នេះ នឹងបង្វែរការភ័យខ្លាចទៅជា «ភាពស្ងប់ស្ងាត់» «ការមិនប្រកាន់» និងជាកម្លាំងជំរុញឱ្យយើងស្រឡាញ់ និងគោរពពេលវេលាដែលយើងកំពុងមាននៅចំពោះមុខជាមួយមនុស្សជាទីស្រឡាញ់។', 'Many superstitious minds avoid mentioning aging, illness, or death, fearing it invites bad luck. Yet dodging reality cannot protect anyone from decay. Bravely meditating upon these five facts transforms subconscious dread into profound equanimity, tender appreciation for loved ones in the present, and urgent commitment to moral integrity.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const contemplations = [
  {
    id: 1,
    num: '១',
    titleKm: 'ពិចារណាលើសេចក្តីចាស់ (ជរាធម្មតា)',
    titleEn: 'Subject to Aging (Jarā-dhamma)',
    pali: 'Jarādhammomhi jaraṃ anatīto',
    icon: '⏳',
    descKm: '«អាត្មាអញមានសេចក្តីចាស់ជាធម្មតា មិនអាចកន្លងផុតសេចក្តីចាស់ឡើយ។» ស្បែកដែលធ្លាប់តែតឹង នឹងត្រូវជ្រីវជ្រួញ សក់ខ្មៅនឹងត្រូវស្កូវ កម្លាំងធ្លាប់តែខ្លាំង នឹងត្រូវទ្រុឌទ្រោម នេះជាច្បាប់ធម្មជាតិ។',
    descEn: '"I am subject to aging; I have not gone beyond aging." Firm skin wrinkles, dark hair grays, and physical vigor diminishes. This is the inescapable biological reality.',
    cureKm: 'បន្សាប «យោព្វនមទ» (ការស្រវឹងនឹងវ័យក្មេង) ៖ ឈប់មើលងាយមនុស្សចាស់ ឈប់វាយឫកលើកតម្កើងសម្រស់ខាងក្រៅ។',
    cureEn: 'Cures intoxication with youth (Yobbanamada); subdues cosmetic vanity and condescension toward the elderly.',
    practiceKm: 'ពេលឆ្លុះកញ្ចក់ ដឹងទាន់ថាសម្រស់គ្រាន់តែជារបស់បណ្តោះអាសន្ន ត្រូវប្រញាប់សាងសម្រស់គុណធម៌ខាងក្នុងវិញ។',
    practiceEn: 'Gazing in the mirror, see transient biological change; cultivate the lasting inner beauty of virtue.',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'ពិចារណាលើជំងឺរោគាពាធ (ព្យាធិធម្មតា)',
    titleEn: 'Subject to Illness (Byādhi-dhamma)',
    pali: 'Byādhidhammomhi byādhiṃ anatīto',
    icon: '🩹',
    descKm: '«អាត្មាអញមានជំងឺរោគាពាធជាធម្មតា មិនអាចកន្លងផុតជំងឺឡើយ។» រាងកាយនេះជាសម្បុកនៃរោគរាប់ពាន់ប្រភេទ គ្រាន់តែមេរោគ ឬកោសិកាប្រែប្រួលបន្តិច ក៏អាចដួលដេកពេទ្យបានគ្រប់វិនាទី។',
    descEn: '"I am subject to illness; I have not gone beyond illness." This body is a fragile ecosystem harboring myriad vulnerabilities, subject to collapse at any moment.',
    cureKm: 'បន្សាប «អារោគ្យមទ» (ការស្រវឹងនឹងភាពគ្មានជំងឺ) ៖ ឈប់អំនួតថារាងកាយខ្លួនមាំមួន មិនបំពានសុខភាព និងត្រៀមចិត្តពេលឈឺ។',
    cureEn: 'Cures intoxication with physical health (Ārogyamada); dissolves arrogance of physical invulnerability.',
    practiceKm: 'ពេលមានសុខភាពល្អ ត្រូវប្រញាប់យកកាយនេះទៅសាងបុណ្យទាន និងជួយសង្គម កុំរង់ចាំដល់ដេកដង្ហក់លើគ្រែពេទ្យ។',
    practiceEn: 'Utilize days of robust vitality to practice and serve others, rather than deferring practice until bedridden.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'ពិចារណាលើសេចក្តីស្លាប់ (មរណធម្មតា)',
    titleEn: 'Subject to Death (Maraṇa-dhamma)',
    pali: 'Maraṇadhammomhi maraṇaṃ anatīto',
    icon: '🕯️',
    descKm: '«អាត្មាអញមានសេចក្តីស្លាប់ជាធម្មតា មិនអាចកន្លងផុតសេចក្តីស្លាប់ឡើយ។» ដង្ហើមចេញហើយមិនចូល ដង្ហើមចូលហើយមិនចេញ គឺស្លាប់ភ្លាម! មិនថាស្តេច មហាសេដ្ឋី ឬអ្នកប្រាជ្ញ សុទ្ធតែត្រូវបិទភ្នែកចាកចោលលោកនេះ។',
    descEn: '"I am subject to death; I have not gone beyond death." Between one in-breath and out-breath lies the frontier of mortality. Kings and beggars depart equally empty-handed.',
    cureKm: 'បន្សាប «ជីវិតមទ» (ការស្រវឹងនឹងជីវិត) ៖ បំបាត់ភាពលោភលន់គរទ្រព្យហួសហេតុ និងការគិតថានឹងរស់នៅរាប់ពាន់ឆ្នាំ។',
    cureEn: 'Cures intoxication with living (Jīvitamada); uproots compulsive hoarding and delusion of immortality.',
    practiceKm: 'រស់នៅថ្ងៃនេះឱ្យដូចជាថ្ងៃចុងក្រោយនៃជីវិត អភ័យទោសឱ្យគ្នា មិនគុំកួន និងមានសតិស្អាតស្អំជានិច្ច។',
    practiceEn: 'Live each day with the serene clarity of your final afternoon: forgive swiftly, release grudges, walk lightly.',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'ពិចារណាលើការព្រាត់ប្រាស (វិនាភាវធម្មតា)',
    titleEn: 'Subject to Separation from the Beloved',
    pali: 'Sabbehi me piyehi manāpehi nānābhāvo vinābhāvo',
    icon: '🍂',
    descKm: '«អាត្មាអញគង់នឹងព្រាត់ប្រាស និរាសនិរាស្ត្រ ចាកចេញពីមនុស្ស និងវត្ថុជាទីស្រឡាញ់គាប់ចិត្តទាំងអស់។» ឪពុកម្តាយ ប្តីប្រពន្ធ កូនចៅ ទ្រព្យសម្បត្តិ និងផ្ទះសម្បែង គង់តែមានថ្ងៃត្រូវលាគ្នាជារៀងរហូត។',
    descEn: '"I will grow different and separate from all that is dear and appealing to me." Parents, spouses, children, homes, and accomplishments must inevitably be parted from.',
    cureKm: 'បន្សាប «សេចក្តីជាប់ជំពាក់ងប់ងុល» (ឆន្ទរាគៈ) ៖ ការពារចិត្តកុំឱ្យបែកបាក់ ឬធ្វើអត្តឃាតពេលជួបវិបត្តិព្រាត់ប្រាសស្នេហា ឬបាត់បង់ទ្រព្យ។',
    cureEn: 'Cures obsessive clinging and possessiveness; insulates against devastating despair when tragic parting occurs.',
    practiceKm: 'ស្រឡាញ់មនុស្សជុំវិញខ្លួនដោយក្តីមេត្តា ថែរក្សាគ្នាឱ្យបានល្អក្នុងពេលបច្ចុប្បន្ន តែមិនតោងទាមដោយសេចក្តីលោភលន់ឡើយ។',
    practiceEn: 'Love people around you with tender devotion right now while holding worldly attachments lightly in your palms.',
  },
  {
    id: 5,
    num: '៥',
    titleKm: 'ពិចារណាលើកម្មសកតា (ម្ចាស់នៃកម្មផ្ទាល់ខ្លួន)',
    titleEn: 'Owner and Heir to My Kamma',
    pali: 'Kammassakomhi kammadāyādo kammayoni kammapandhu...',
    icon: '⚖️',
    descKm: '«អាត្មាអញជាម្ចាស់នៃកម្ម ជាអ្នកទទួលផលនៃកម្ម មានកម្មជាកំណើត មានកម្មជាញាតិ មានកម្មជាទីពឹងពាក់ ធ្វើអំពើណាទុក ល្អក្តី អាក្រក់ក្តី គង់នឹងទទួលផលនៃអំពើនោះ។» ពេលស្លាប់ទៅ ទ្រព្យសម្បត្តិនិងសាច់ញាតិមិនអាចទៅតាមការពារយើងបានទេ មានតែបុណ្យនិងបាបប៉ុណ្ណោះជាមិត្តរួមដំណើរពិតប្រាកដ។',
    descEn: '"I am the owner of my kamma, heir to my kamma, born of my kamma, related through my kamma, having kamma as my refuge. Whatever kamma I do, for good or for evil, to that will I fall heir."',
    cureKm: 'បន្សាប «កាយទុច្ចរិត វចីទុច្ចរិត មនោទុច្ចរិត» ៖ បង្កើតសេចក្តីខ្មាសបាបនិងខ្លាចបាប (ហិរិ-ឱត្តប្បៈ) ឈប់បន្ទោសអ្នកដទៃ។',
    cureEn: 'Cures misconduct in body, speech, and mind; anchors total personal moral agency, ending blame of external scapegoats.',
    practiceKm: 'ទទួលខុសត្រូវ ១០០% លើជោគវាសនាខ្លួនឯង បង្កើតតែកុសលកម្មជាស្បៀងឆ្លងភព។',
    practiceEn: 'Assume full moral sovereignty over your trajectory; plant exclusively wholesome seeds as provisions for destiny.',
  },
]
</script>
