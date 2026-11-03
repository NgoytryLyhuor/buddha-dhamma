<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៧៣ — កំពូលឧបមាធម៌ទាំង ៦ ក្នុងព្រះត្រៃបិដក', 'GATHA 73 — 6 MASTER SIMILES IN THE TIPITAKA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('កំពូលឧបមាធម៌ទាំង ៦ ៖ សិល្បៈនៃការប្រៀបធៀបក្នុងព្រះត្រៃបិដក', 'The 6 Master Similes in the Tipitaka — Pedagogical Art of Awakening') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ឧបមាធម៌ គឺជាសិល្បៈនៃការបង្រៀនដ៏អស្ចារ្យបំផុតរបស់ព្រះសម្មាសម្ពុទ្ធ ដែលទ្រង់យកវត្ថុជិតខ្លួន ធម្មជាតិ និងជីវភាពប្រចាំថ្ងៃរបស់មនុស្ស មកប្រៀបធៀបជាមួយធម៌បរមត្ថដ៏ជ្រាលជ្រៅ ដើម្បីឱ្យមនុស្សគ្រប់វណ្ណៈ ទាំងអ្នកប្រាជ្ញ ទាំងអ្នកស្រែ អាចយល់បានភ្លាមៗដោយងាយស្រួល។ ក្នុងចំណោមឧបមារាប់រយក្នុងព្រះត្រៃបិដក មានឧបមាធំៗ ៦ ដែលល្បីល្បាញបំផុត រួមមាន ៖ ឧបមាព្រួញបំពុលពិស, ក្បូនឆ្លងទឹក, អំបិលមួយក្តាប់, អណ្តើកខ្វាក់, ផ្ទះឆេះ និងផ្កាឈូក ៤ ជាន់។ ឧបមាទាំងនេះបន្សល់ទុកនូវពន្លឺបំភ្លឺជីវិតរហូតមកដល់បច្ចុប្បន្ន។', 'The similes of the Tipitaka represent the pinnacle of the Buddha\'s pedagogical brilliance. Drawing on ordinary daily encounters, natural elements, and artisan crafts, the Buddha illustrated the subtlest metaphysical truths so that kings and illiterate farmers alike could directly grasp reality. Among hundreds of parables across the Pali Canon, six stand as peerless classics: The Poisoned Arrow, The Raft, The Lump of Salt, The Blind Sea Turtle, The Burning Fire, and The Four Stages of the Lotus.') }}
    </p>

    <!-- Pali Gatha Box -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ឧបមាយបិធេកច្ចេ វិញ្ញូ បុរិសា ភាសិតស្ស អត្ថំ អាជានន្តិ។»', '"Even by a simile some wise persons understand the meaning of what has been spoken." — Majjhima Nikāya (MN 23)') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— វម្មិកសូត្រ មជ្ឈិមនិកាយ មូលបណ្ណាសក', '— Vammika Sutta, Majjhima Nikāya') }}
      </p>
    </div>

    <!-- The 6 Master Similes Detailed Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🏺</span>
        <span>{{ t('កម្រងកំពូលឧបមាទាំង ៦ ពិស្តារ', 'Detailed Exposition of the 6 Master Similes') }}</span>
      </h3>

      <div
        v-for="item in similes"
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
                <p class="text-[11px] font-mono text-stone-500">{{ item.source }}</p>
              </div>
            </div>
            <span class="text-3xl">{{ item.icon }}</span>
          </div>

          <!-- Story / Parable -->
          <div class="mt-4 p-3.5 rounded-xl border bg-stone-500/5 border-stone-500/15 text-xs sm:text-sm leading-relaxed">
            <strong class="font-bold text-amber-700 dark:text-amber-300 block mb-1">
              📜 {{ t('ដំណើររឿងឧបមា ៖', 'The Parable Story:') }}
            </strong>
            <p :style="{ color: 'var(--ink-soft)' }">{{ t(item.storyKm, item.storyEn) }}</p>
          </div>

          <!-- Core Meaning -->
          <div class="mt-3 text-xs sm:text-sm leading-relaxed">
            <strong class="text-stone-700 dark:text-stone-300 font-bold block mb-1">
              💡 {{ t('អត្ថន័យធម៌ប្រៀបធៀប ៖', 'Spiritual Realization:') }}
            </strong>
            <p class="text-stone-600 dark:text-stone-300">{{ t(item.meaningKm, item.meaningEn) }}</p>
          </div>
        </div>

        <!-- Life Application -->
        <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
          <div class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <strong class="font-bold text-emerald-700 dark:text-emerald-300 block mb-1">
              🌱 {{ t('ការអនុវត្តជាក់ស្តែងក្នុងជីវិតបច្ចុប្បន្ន ៖', 'Practical Life Takeaway:') }}
            </strong>
            <p class="text-stone-700 dark:text-stone-200 leading-relaxed">{{ t(item.takeawayKm, item.takeawayEn) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const similes = [
  {
    id: 1,
    num: '១',
    titleKm: 'ឧបមាព្រួញបំពុលពិស (The Poisoned Arrow)',
    titleEn: 'The Parable of the Poisoned Arrow',
    source: 'ចូឡមាលុង្ក្យសូត្រ (MN 63)',
    icon: '🏹',
    storyKm: 'ព្រះមាលុង្ក្យបុត្ត ចង់ចាកចេញពីសាសនា បើព្រះពុទ្ធមិនព្រមឆ្លើយសំណួរថា «តើចក្រវាឡទៀងឬមិនទៀង? ព្រះពុទ្ធស្លាប់ទៅកើតទៀតឬទេ?»។ ព្រះពុទ្ធទ្រង់ប្រៀបធៀបថា បុរសម្នាក់ត្រូវព្រួញបំពុលពិសបាញ់ចំទ្រូង ពេទ្យប្រញាប់មកជួយដកព្រួញ តែបុរសនោះរារាំងថា «កុំអាលដក! ខ្ញុំត្រូវដឹងសិនថា អ្នកបាញ់នោះជាជាតិអម្បូរអ្វី ឈ្មោះអី ព្រួញនោះធ្វើពីឈើអ្វី ស្លាបព្រួញធ្វើពីស្លាបសត្វអ្វី?»។ បុរសនោះច្បាស់ជាស្លាប់មុននឹងដឹងចម្លើយទាំងអស់នោះ!',
    storyEn: 'Ven. Mālunkyaputta demanded answers to speculative metaphysical riddles: Is the cosmos eternal or not? Does an Awakened One exist after death? The Buddha compared him to a man pierced through by a toxic arrow who refuses medical extraction until he knows the shooter\'s caste, clan, height, and arrow feather wood. That foolish man will perish before getting answers!',
    meaningKm: 'ការស្វែងរកចម្លើយទស្សនវិជ្ជាឥតប្រយោជន៍ មិនជួយរំលត់ទុក្ខឡើយ។ ព្រះពុទ្ធបង្រៀនតែរឿង ទុក្ខ និងការរំលត់ទុក្ខប៉ុណ្ណោះ។ កិច្ចការបន្ទាន់បំផុតគឺ «ដកព្រួញពិសនៃកិលេស» ចេញពីចិត្តក្នុងពេលនេះ។',
    meaningEn: 'Metaphysical speculation does not liberate. The Buddha teaches only suffering and the cessation of suffering. The absolute urgency is removing the poisoned arrow of greed, hatred, and delusion immediately.',
    takeawayKm: 'កុំខ្ជះខ្ជាយពេលវេលាជជែកវែកញែករឿងអតីតជាតិ ឬរឿងឥតប្រយោជន៍ដែលមិនអាចកែប្រែបាន។ ចូរផ្តោតលើការដោះស្រាយបញ្ហាជាក់ស្តែង និងរំងាប់ទុក្ខក្នុងបច្ចុប្បន្នកាល។',
    takeawayEn: 'Stop wasting precious hours obsessing over unverifiable theories. Focus directly on managing present distress and calming the heart right here, right now.',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'ឧបមាក្បូនឆ្លងទឹក (The Raft Simile)',
    titleEn: 'The Parable of the Raft',
    source: 'អលគទ្ទូបមសូត្រ (MN 22)',
    icon: '🛶',
    storyKm: 'បុរសម្នាក់ធ្វើដំណើរកាត់ស្ទឹងធំមួយដែលទឹកហូរកួចខ្លាំង ដោយគ្មានស្ពាន គ្មានទូកចម្លង។ គាត់បានប្រមូលមែកឈើ ស្មៅ និងវល្លិ ចងធ្វើជាក្បូនមួយ រួចអុំឆ្លងទៅដល់ត្រើយម្ខាងដោយសុវត្ថិភាព។ ពេលដល់ត្រើយហើយ គាត់គិតថា «ក្បូននេះមានគុណលើខ្ញុំខ្លាំងណាស់ ខ្ញុំត្រូវតែលើកលីក្បូននេះលើក្បាលដើរទៅមុខទៀត»។ ព្រះពុទ្ធសួរថា «តើបុរសនោះធ្វើបែបនេះត្រឹមត្រូវទេ?» ច្បាស់ជាមិនត្រូវឡើយ គាត់គួរតែចតក្បូនទុកនៅមាត់ច្រាំង ហើយដើរទៅមុខដោយខ្លួនទទេ!',
    storyEn: 'A traveler reaches a turbulent river with dangerous currents. Gathering branches and reeds, he fashions a raft to paddle safely across to the safe shore. Once across, he thinks: "This raft was so useful, I will hoist it onto my head and carry it with me forever!" The Buddha asked: Would that be wise? Clearly not! The raft should be left at the shore so he continues unburdened.',
    meaningKm: 'ព្រះធម៌ប្រៀបដូចជា «ក្បូនសម្រាប់ឆ្លង» មិនមែនសម្រាប់តោងទាម ឬយកមកប្រកាន់ខ្ជាប់ដើម្បីប្រកែកឈ្លោះជាមួយអ្នកដទៃឡើយ (កុល្លូបមំ វោ ភិក្ខវេ ធម្មំ ទេសិស្សាមិ និត storeណត្ថាយ ន គហណត្ថាយ)។',
    meaningEn: 'The Dhamma is a practical vehicle for crossing over to freedom, not a doctrine to be dogmatically grasped, debated aggressively, or worshipped as an identity ornament.',
    takeawayKm: 'កុំយកព្រះធម៌ទៅជជែកឈ្នះចាញ់ ឬវាយប្រហារសាសនាដទៃ។ ត្រូវយកធម៌មកអនុវត្តដើម្បីរំដោះចិត្តខ្លួនឯងចេញពីទុក្ខ ហើយចេះលះបង់ការប្រកាន់តឹងតែង។',
    takeawayEn: 'Never weaponize spiritual knowledge to posture superiority or attack others. Use it as medicine to cross over suffering, then dwell in effortless freedom.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'ឧបមាអំបិលមួយក្តាប់ (The Lump of Salt)',
    titleEn: 'The Parable of the Lump of Salt',
    source: 'លោណផលសូត្រ (AN 3.99)',
    icon: '🧂',
    storyKm: 'ព្រះពុទ្ធត្រាស់សួរភិក្ខុថា ប្រសិនបើគេបោះអំបិលមួយក្តាប់ចូលទៅក្នុងកែវទឹកតូចមួយ តើទឹកនោះប្រៃដែរឬទេ? ភិក្ខុឆ្លើយថា «ប្រៃខ្លាំងរហូតផឹកមិនកើតឡើយ»។ ចុះប្រសិនបើគេបោះអំបិលមួយក្តាប់ដដែលនោះ ចូលទៅក្នុងទន្លេគង្គាដ៏ធំធេង តើទឹកទន្លេគង្គាប្រៃផឹកមិនកើតដែរឬទេ? ភិក្ខុឆ្លើយថា «មិនប្រៃទាល់តែសោះ ព្រោះទឹកទន្លេធំធេងពេក»។',
    storyEn: 'The Buddha asked: If someone drops a fistful of salt into a tiny cup of water, does the water become salty? The monks replied: "Extremely salty, completely undrinkable!" But what if that same fistful of salt is dropped into the mighty River Ganges? "Not salty at all, because the body of water is vast."',
    meaningKm: 'អំបិលប្រៀបដូចជា «កម្មអាក្រក់តូចតាច»។ កែវទឹកតូចប្រៀបដូចជា «ចិត្តចង្អៀត គ្មានសីល គ្មានភាវនា»។ ចំណែកទន្លេគង្គាប្រៀបដូចជា «ចិត្តធំទូលាយ បរិបូរណ៍ដោយសីល ទាន និងមេត្តាភាវនា»។ កាលណាយើងសាងកុសលច្រើន កម្មអាក្រក់តូចតាចនឹងមិនអាចផ្តល់ផលធ្ងន់ធ្ងរបានឡើយ។',
    meaningEn: 'The salt represents minor unwholesome deeds. The tiny cup represents a narrow, stingy mind lacking virtue. The mighty river represents an expansive mind cultivated through limitless loving-kindness, generosity, and meditation. Merits dilute bad karma.',
    takeawayKm: 'កុំភ័យខ្លាចនឹងកំហុសអតីតកាលដែលមិនអាចកែប្រែបាន។ ចូរពង្រីកចិត្តឱ្យធំដូចទន្លេគង្គា ដោយការសាងបុណ្យទាន រក្សាសីល និងចម្រើនមេត្តាធម៌ជាប្រចាំ។',
    takeawayEn: 'Do not stay paralyzed by past missteps. Broaden your mental reservoir like the Ganges through boundless generosity, moral purity, and deep meditation.',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'ឧបមាអណ្តើកខ្វាក់ក្នុងមហាសមុទ្រ (The Blind Sea Turtle)',
    titleEn: 'The Parable of the Blind Sea Turtle',
    source: 'ឆិគ្គឡសូត្រ (SN 56.48)',
    icon: '🐢',
    storyKm: 'ក្នុងមហាសមុទ្រដ៏ធំល្វឹងល្វើយ មាននឹមរទេះឈើមួយដែលមានប្រហោងតែមួយ អណ្តែតរសាត់តាមខ្យល់បក់ពីកើតទៅលិច ពីជើងទៅត្បូង។ ក្នុងបាតសមុទ្រនោះ មានសត្វអណ្តើកខ្វាក់ភ្នែកទាំងសងខាងមួយក្បាល ក្នុងរយៈពេល ១០០ ឆ្នាំ ទើបវាហែលងើបក្បាលឡើងលើផ្ទៃទឹកម្តង។ ព្រះពុទ្ធត្រាស់សួរថា «តើមានឱកាសទេ ដែលក្បាលអណ្តើកខ្វាក់នោះ នឹងលូកចំប្រហោងនឹមឈើអណ្តែតនោះ?» ភិក្ខុទូលថា «កម្របំផុត ស្ទើរតែមិនអាចកើតឡើងបានឡើយ!»។',
    storyEn: 'In a vast boundless ocean, a single wooden yoke with one hole drifts with changing winds. At the sea bottom lives a blind turtle who surfaces just once every hundred years. The Buddha asked: How likely is it that the blind turtle, rising once in a century, sticks its head directly through that single yoke hole? The monks answered: "It would be an astounding, almost impossible occurrence!"',
    meaningKm: 'ព្រះពុទ្ធបញ្ជាក់ថា ឱកាសដែលអណ្តើកខ្វាក់លូកក្បាលចូលនឹមឈើនោះ នៅតែងាយជាង «ឱកាសដែលសត្វលោកបានកើតមកជាមនុស្ស និងបានជួបព្រះពុទ្ធសាសនា» ទៅទៀត! ជាតិជាមនុស្សពិតជាកម្ររកបានណាស់ (កិច្ឆោ មនុស្សប្បដិលាភោ)។',
    meaningEn: 'Yet, the Buddha declared, that improbable event is faster than the staggering rarity of gaining human birth and encountering the Buddha\'s timeless Dhamma! Human life is a cosmic privilege.',
    takeawayKm: 'កុំបណ្តោយឱ្យជីវិតជាមនុស្សដ៏កម្រនេះ កន្លងផុតទៅដោយការស្រវឹងនឹងកាមគុណ ឬខ្ជះខ្ជាយពេលវេលាឡើយ។ ចូរឆ្លៀតសាងអំពើល្អ និងបដិបត្តិធម៌ឱ្យអស់ពីសមត្ថភាព។',
    takeawayEn: 'Never squander this extraordinarily rare human birth in frivolous distraction or heedlessness. Use every breath to cultivate awakening and genuine virtue.',
  },
  {
    id: 5,
    num: '៥',
    titleKm: 'ឧបមាភ្លើងឆេះផ្ទះ (The Burning House Simile)',
    titleEn: 'The Parable of the Burning House',
    source: 'អាទិត្តបរិយាយសូត្រ (SN 35.28)',
    icon: '🔥',
    storyKm: 'ព្រះពុទ្ធទ្រង់សម្តែងដល់ភិក្ខុ ១០០០ អង្គ នៅគយាសីសៈ ថា ភ្នែក ច្រមុះ អណ្តាត កាយ និងចិត្ត ព្រមទាំងអារម្មណ៍ទាំងអស់ កំពុងតែឆេះសន្ធោសន្ធៅ។ ឆេះដោយសារអ្វី? គឺឆេះដោយភ្លើងរាគៈ (តណ្ហា), ភ្លើងទោសៈ (កំហឹង), និងភ្លើងមោហៈ (ភាពល្ងង់ខ្លៅ) ព្រមទាំងភ្លើងនៃជាតិ ជរា ព្យាធិ និងមរណៈ។ សត្វលោកប្រៀបដូចជាមនុស្សកំពុងរាំច្រៀងសប្បាយនៅក្នុងផ្ទះដែលភ្លើងកំពុងឆេះសន្ធោសន្ធៅជុំវិញខ្លួន។',
    storyEn: 'Teaching a thousand newly ordained ascetics at Gayāsīsa, the Buddha proclaimed: All senses—eye, ear, nose, tongue, body, mind—are burning! Burning with what? Burning with the fire of lust, the fire of hatred, the fire of delusion, birth, aging, illness, and death. Unenlightened beings are like partygoers laughing inside a blazing mansion.',
    meaningKm: 'សេចក្តីសុខក្នុងលោកិយគ្រាន់តែជាការបំភ័ន្តភ្នែក។ ភាពតណ្ហានិងកំហឹងដែលយើងឱបក្រសោប តាមពិតជាភ្លើងដុតរោលចិត្តខ្លួនឯងរាល់វិនាទី។ ការពន្លត់ភ្លើងកិលេស គឺជាការសម្រេចព្រះនិព្វាន (Nibbāna ប្រែថា ត្រជាក់ / រលត់ភ្លើង)។',
    meaningEn: 'Sensual satisfaction is a fleeting smoke screen. The passions we cling to are actually fires scorching consciousness. Nibbāna literally signifies the extinguishing of this internal fire.',
    takeawayKm: 'កុំបណ្តោយឱ្យកំហឹង និងចំណង់ដុតឆេះចិត្តអ្នក។ នៅពេលចិត្តក្តៅក្រហាយ ចូរប្រញាប់ដកថយមកសង្កេតដង្ហើម និងចម្រើនមេត្តា ដើម្បីពន្លត់ភ្លើងក្នុងចិត្តភ្លាមៗ។',
    takeawayEn: 'When anger or compulsive lust erupts, realize the mansion of your heart is on fire. Step back, breathe deeply, and cool the flame with mindful restraint.',
  },
  {
    id: 6,
    num: '៦',
    titleKm: 'ឧបមាផ្កាឈូក ៤ ជាន់ (The 4 Stages of the Lotus)',
    titleEn: 'The Parable of the 4 Lotuses',
    source: 'អរិយបរិយេសនសូត្រ (MN 26)',
    icon: '🪷',
    storyKm: 'ក្រោយត្រាស់ដឹង ព្រះពុទ្ធទ្រង់ទតមើលពិភពលោកដោយពុទ្ធចក្ខុ ទ្រង់ទតឃើញសត្វលោកប្រៀបដូចជាផ្កាឈូកក្នុងស្រះបឹង ៤ ជាន់ ៖ ១. ឈូកដែលលូតផុតពីទឹក រង់ចាំតែពន្លឺព្រះអាទិត្យរះមកដើម្បីរីក, ២. ឈូកស្មើនឹងផ្ទៃទឹក នឹងរីកនៅថ្ងៃស្អែក, ៣. ឈូកនៅក្រោមទឹក នឹងរីកនៅថ្ងៃខាងមុខ, និង ៤. ឈូកកប់ក្នុងភក់ជ្រាំ ជាចំណីរបស់ត្រីនិងអណ្តើក។',
    storyEn: 'Immediately after awakening, the Buddha surveyed the world with His spiritual eye, seeing humanity like lotuses in a lotus pond: 1. Those risen above water waiting for dawn to blossom (Ugghaṭitaññū), 2. Those level with the water blossoming tomorrow (Vipacitaññū), 3. Those submerged waiting to rise (Neyya), and 4. Those mired in deep mud as food for fish and turtles (Padaparama).',
    meaningKm: 'មនុស្សម្នាក់ៗមានកម្រិតបញ្ញា និស្ស័យ និងពេលវេលាត្រាស់ដឹងខុសៗគ្នា។ អ្នកខ្លះស្តាប់តែមួយគាថាក៏យល់ អ្នកខ្លះត្រូវការពន្យល់លម្អិត អ្នកខ្លះត្រូវហ្វឹកហាត់យូរ ហើយអ្នកខ្លះទៀតមិនទាន់អាចទទួលយកបាននៅឡើយក្នុងជាតិនេះ។',
    meaningEn: 'Human beings possess differing capacities, temperaments, and spiritual timing. Some grasp truth instantly; others require systematic coaching; some must practice for decades; and some are not yet ready.',
    takeawayKm: 'រៀនយល់ចិត្តអ្នកដទៃ និងមិនត្រូវខកចិត្តពេលគេមិនយល់ពីយើង។ បង្រៀននិងណែនាំមនុស្សតាមកម្រិតសមត្ថភាពរបស់គេ ដោយមិនបង្ខិតបង្ខំ ឬបាក់ទឹកចិត្តឡើយ។',
    takeawayEn: 'Meet people where they are without frustration. Share wisdom patiently according to individual capacity without demanding instant transformation.',
  },
]
</script>
