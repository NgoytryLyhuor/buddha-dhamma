<template>
  <div class="space-y-6 pb-12">
    <!-- Hero Banner -->
    <section class="card-paper p-6 sm:p-8 relative overflow-hidden" :style="{ background: 'var(--bg-card)' }">
      <div class="relative z-10 max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3"
             :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
          <span>🌟 {{ t('អង្គុត្តរនិកាយ ទសកនិបាត · ចុន្ទកសូត្រ (AN 10.176)', 'Aṅguttara Nikāya 10.176 · Cunda Sutta') }}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-bold font-serif mb-2" :style="{ color: 'var(--ink)' }">
          {{ t('កុសលកម្មបថ ១០ ប្រការ (មាគ៌ាកុសលពេញលេញ)', 'The 10 Wholesome Courses of Action') }}
        </h1>
        <p class="text-sm sm:text-base leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t(
            'កុសលកម្មបថ ១០ គឺជាមាគ៌ានៃការកសាងអំពើល្អយ៉ាងពេញលេញទាំងផ្លូវកាយ (៣), ផ្លូវវាចា (៤), និងផ្លូវចិត្ត (៣)។ មិនត្រឹមតែជាការវៀរចាកអំពើបាបប៉ុណ្ណោះទេ ថែមទាំងជាការសាបព្រោះនូវសេចក្តីល្អ ភាពស្មោះត្រង់ ការផ្សះផ្សា និងមេត្តាធម៌ដល់មនុស្សជុំវិញខ្លួន។',
            'The 10 Wholesome Courses of Action form the complete practical blueprint for noble human life: 3 of body, 4 of speech, and 3 of mind. Beyond merely abstaining from evil, they represent active kindness, radiant integrity, reconciliatory harmony, and pure wisdom.'
          ) }}
        </p>
      </div>
    </section>

    <!-- Navigation Tabs -->
    <div class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none touch-pan-x">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="activeTab = tab.id"
        class="lang-pick px-3.5 py-1.5 text-xs font-semibold shrink-0 whitespace-nowrap"
        :class="activeTab === tab.id ? 'on' : ''"
      >
        <span>{{ tab.icon }}</span>
        <span>{{ t(tab.titleK, tab.titleE) }}</span>
      </button>
    </div>

    <!-- Active Tab Items -->
    <section class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="item in currentItems"
          :key="item.id"
          class="card-paper p-5 transition-all duration-200 hover:shadow-md border flex flex-col justify-between"
          :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }"
        >
          <div>
            <div class="flex items-start justify-between gap-3 mb-3">
              <span class="text-3xl p-3 rounded-2xl flex items-center justify-center shrink-0"
                    :style="{ background: 'var(--bg-card-2)' }">
                {{ item.icon }}
              </span>
              <span class="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-950/40">
                {{ item.num }}
              </span>
            </div>

            <h3 class="font-bold text-base sm:text-lg mb-1" :style="{ color: 'var(--ink)' }">
              {{ t(item.titleK, item.titleE) }}
            </h3>
            <span class="text-xs font-mono font-medium block mb-2" :style="{ color: 'var(--accent)' }">
              {{ item.pali }}
            </span>

            <p class="text-xs sm:text-sm leading-relaxed mb-4" :style="{ color: 'var(--ink-muted)' }">
              {{ t(item.descK, item.descE) }}
            </p>

            <div class="p-3 rounded-xl mb-3 text-xs space-y-1" :style="{ background: 'var(--bg-card-2)' }">
              <span class="font-semibold text-emerald-600">🌱 {{ t('ការអនុវត្តវិជ្ជមាន៖', 'Active Positive Action:') }}</span>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(item.positiveK, item.positiveE) }}</p>
            </div>
          </div>

          <div class="pt-3 border-t text-xs font-semibold text-amber-600 flex items-center gap-1"
               :style="{ borderColor: 'var(--border)' }">
            <span>✨ {{ t('អានិសង្ស៖ ', 'Blessing: ') }}</span>
            <span>{{ t(item.fruitK, item.fruitE) }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()
const activeTab = ref('kaya')

const tabs = [
  { id: 'kaya', icon: '🚶', titleK: 'កាយកម្ម ៣ (អំពើផ្លូវកាយ)', titleE: 'Bodily Actions (3)' },
  { id: 'vaci', icon: '🗣️', titleK: 'វចីកម្ម ៤ (ពាក្យសម្ដី)', titleE: 'Verbal Actions (4)' },
  { id: 'mano', icon: '🧠', titleK: 'មនោកម្ម ៣ (ការគិតផ្លូវចិត្ត)', titleE: 'Mental Actions (3)' }
]

const kayaItems = [
  {
    id: 'k1',
    num: '១',
    icon: '🕊️',
    titleK: '១. វៀរចាកការសម្លាប់ + មេត្តាការពារជីវិត',
    titleE: '1. Abstaining from Killing & Protecting Life',
    pali: 'Pāṇātipātā veramaṇī',
    descK: 'មិនសម្លាប់ មិនធ្វើទារុណកម្មសត្វ ដាក់ដំបងនិងគ្រឿងសស្ត្រាវុធចុះ មានការខ្មាសបាប និងករុណាអាណិតដល់ជីវិតសត្វទាំងអស់។',
    descE: 'Laying down the rod and weapon; scrupulous, compassionate, and trembling for the welfare of all living beings.',
    positiveK: 'ជួយសង្គ្រោះសត្វរងគ្រោះ ផ្ដល់ចំណី និងការពារជីវិតដែលទន់ខ្សោយ។',
    positiveE: 'Actively rescue animals in distress and protect vulnerable life.',
    fruitK: 'មានអាយុយឺនយូរ គ្មានរោគាព្យាធិបៀតបៀន។',
    fruitE: 'Longevity, vitality, and freedom from severe illnesses.'
  },
  {
    id: 'k2',
    num: '២',
    icon: '🎁',
    titleK: '២. វៀរចាកការលួច + គោរពទ្រព្យនិងឱ្យទាន',
    titleE: '2. Abstaining from Stealing & Generosity',
    pali: 'Adinnādānā veramaṇī',
    descK: 'មិនយកទ្រព្យសម្បត្តិដែលម្ចាស់គេមិនបានឱ្យ មិនកេងប្រវ័ញ្ច មិនស៊ីសំណូក និងគោរពកម្មសិទ្ធិស្របច្បាប់របស់អ្នកដទៃ។',
    descE: 'Never taking what is not given; honest, fair in business, repudiating theft, extortion, and bribery.',
    positiveK: 'ចេះឱ្យទាន ចែករំលែកទ្រព្យដល់អ្នកខ្វះខាត និងរកស៊ីដោយសុចរិត។',
    positiveE: 'Generous sharing with the needy and practicing ethical commerce.',
    fruitK: 'ទ្រព្យសម្បត្តិគង់វង្ស គ្មានសត្រូវ ឬគ្រោះធម្មជាតិបំផ្លាញបានឡើយ។',
    fruitE: 'Secure wealth untouched by fire, floods, rulers, or thieves.'
  },
  {
    id: 'k3',
    num: '៣',
    icon: '💍',
    titleK: '៣. វៀរចាកការខុសក្នុងកាម + ស្មោះត្រង់គូស្រករ',
    titleE: '3. Abstaining from Sexual Misconduct & Fidelity',
    pali: 'Kāmesumicchācārā veramaṇī',
    descK: 'មិនលួចលាក់មានសហាយស្មន់ មិនបំពានលើកូនប្រពន្ធប្តីអ្នកដទៃ មានភក្តីភាព និងគោរពកិត្តិយសគ្រួសារ។',
    descE: 'Honoring relational boundaries; faithful to one\'s spouse and never violating others\' sacred trust.',
    positiveK: 'ថែរក្សាសុភមង្គលក្នុងគ្រួសារ ស្មោះមួយនឹងមួយ និងផ្ដល់តម្លៃឱ្យគ្នាទៅវិញទៅមក។',
    positiveE: 'Deep fidelity, emotional safety, and mutual respect in marriage.',
    fruitK: 'គ្រួសារមានសេចក្ដីសុខ កូនចៅស្ដាប់បង្គាប់ គ្មានសត្រូវក្នុងផ្ទះ។',
    fruitE: 'Harmonious domestic peace and filial, trustworthy children.'
  }
]

const vaciItems = [
  {
    id: 'v1',
    num: '៤',
    icon: '📜',
    titleK: '៤. វៀរចាកពាក្យកុហក + និយាយពាក្យពិត',
    titleE: '4. Abstaining from False Speech & Truthfulness',
    pali: 'Musāvādā veramaṇī',
    descK: 'មិននិយាយបំផ្លើស មិនកុហកភូតភរ និយាយតែការពិតដែលគួរឱ្យទុកចិត្តបាន មិនក្បត់ពាក្យសន្យា។',
    descE: 'Speaking the truth reliably and firmly; trustworthy, dependable, not a deceiver of the world.',
    positiveK: 'និយាយការពិតដោយកាលៈទេសៈសមរម្យ រក្សាពាក្យសន្យាឱ្យបានម៉ត់ចត់។',
    positiveE: 'Keeping promises faithfully and upholding transparency.',
    fruitK: 'សម្ដីមានទម្ងន់ មនុស្សគ្រប់គ្នាជឿជាក់ និងមានកេរ្តិ៍ឈ្មោះល្បីល្បាញ។',
    fruitE: 'Authoritative voice, revered integrity, and trusted leadership.'
  },
  {
    id: 'v2',
    num: '៥',
    icon: '🤝',
    titleK: '៥. វៀរចាកពាក្យញុះញង់ + និយាយផ្សះផ្សា',
    titleE: '5. Abstaining from Malicious Speech & Peacemaking',
    pali: 'Pisuṇāya vācāya veramaṇī',
    descK: 'មិនយកសម្ដីពីខាងនេះទៅប្រាប់ខាងនោះដើម្បីបំបែកបំបាក់ តែងនិយាយផ្សះផ្សាអ្នកដែលបែកបាក់គ្នាឱ្យត្រូវរ៉ូវវិញ។',
    descE: 'Never repeating here what was heard there to divide people; a reconciler of factions and builder of unity.',
    positiveK: 'ពោលសរសើរចំណុចល្អរបស់អ្នកដទៃ ជួយសម្រុះសម្រួលទំនាស់ឱ្យមានសន្តិភាព។',
    positiveE: 'Mediating conflicts patiently and voicing mutual appreciations.',
    fruitK: 'មានមិត្តភក្តិច្រើន គ្មានអ្នកណាអាចបំបែកបំបាក់ចំណងមិត្តភាពបានឡើយ។',
    fruitE: 'Surrounded by unshakeable, loyal friendships and harmony.'
  },
  {
    id: 'v3',
    num: '៦',
    icon: '🌸',
    titleK: '៦. វៀរចាកពាក្យទ្រគោះ + និយាយពាក្យពិរោះ',
    titleE: '6. Abstaining from Harsh Speech & Gentle Words',
    pali: 'Pharusāya vācāya veramaṇī',
    descK: 'មិនជេរប្រទេច មិនដៀមដាម មិននិយាយពាក្យចាក់ដោត និយាយតែពាក្យទន់ភ្លន់ គួរឱ្យស្រឡាញ់ ត្រជាក់ដល់ត្រចៀក។',
    descE: 'Speaking words that are gentle, pleasing to the ear, affectionate, touching the heart, urbane and courteous.',
    positiveK: 'ប្រើសម្ដីគួរសម អរគុណ សុំទោស និងលើកទឹកចិត្តដល់មនុស្សជុំវិញខ្លួន។',
    positiveE: 'Using polite, uplifting speech with sincere gratitude and apology.',
    fruitK: 'មានសំឡេងពិរោះ ទាក់ទាញទឹកចិត្តមនុស្ស និងទៅទីណាក៏មានគេស្វាគមន៍។',
    fruitE: 'Beloved voice, warm reception everywhere, and deep emotional charisma.'
  },
  {
    id: 'v4',
    num: '៧',
    icon: '💡',
    titleK: '៧. វៀរចាកពាក្យឥតប្រយោជន៍ + និយាយពាក្យមានន័យ',
    titleE: '7. Abstaining from Idle Chatter & Meaningful Speech',
    pali: 'Samphappalāpā veramaṇī',
    descK: 'មិននិយាយរឿងអត់ប្រយោជន៍ ចចាមអារាម និយាយតែពាក្យត្រូវកាល ត្រូវការពិត មានហេតុផល និងមានប្រយោជន៍ដល់ជីវិត។',
    descE: 'Speaking at the right time, in accordance with fact, speaking what is useful, reasoned, and well-grounded.',
    positiveK: 'និយាយអំពីរឿងការងារ ធម៌ និងចំណេះដឹងដែលបង្កើនគុណភាពជីវិត។',
    positiveE: 'Engaging in discussions on constructive work, Dhamma, and knowledge.',
    fruitK: 'សម្ដីមានតម្លៃ អ្នកដទៃយកចិត្តទុកដាក់ស្ដាប់ និងចាត់ទុកជាអ្នកប្រាជ្ញ។',
    fruitE: 'Words treasured like jewels, consulted for wise advice.'
  }
]

const manoItems = [
  {
    id: 'm1',
    num: '៨',
    icon: '🌾',
    titleK: '៨. មិនរំពៃចង់បានទ្រព្យគេ (អនភិជ្ឈា)',
    titleE: '8. Non-Covetousness (Anabhijjhā)',
    pali: 'Anabhijjhālu hoti',
    descK: 'មិនសម្លឹងមើលទ្រព្យរបស់អ្នកដទៃដោយគំនិតចង់បានជារបស់ខ្លួន ត្រេកអរនឹងអ្វីដែលខ្លួនខិតខំរកបានដោយកម្លាំងញើសឈាម។',
    descE: 'Not coveting others’ possessions, thinking "Oh, that what is theirs were mine!", deeply content with one’s own honest share.',
    positiveK: 'អបអរសាទរចំពោះភាពជោគជ័យរបស់អ្នកដទៃ (មុទិតា) និងស្កប់ស្កល់នឹងទ្រព្យខ្លួន។',
    positiveE: 'Rejoicing in others’ prosperity (Muditā) and cultivating simplicity.',
    fruitK: 'ចិត្តស្ងប់ស្រាល គ្មានការច្រណែន គ្មានការភ័យខ្លាចបាត់បង់។',
    fruitE: 'A relaxed mind free from toxic comparison and envy.'
  },
  {
    id: 'm2',
    num: '៩',
    icon: '❤️',
    titleK: '៩. មិនគុំកួនព្យាបាទ (អព្យាបាទ)',
    titleE: '9. Non-Ill Will & Good Will (Abyāpāda)',
    pali: 'Abyāpannacitto hoti',
    descK: 'មិនចងគំនុំ មិនប្រាថ្នាឱ្យអ្នកដទៃវិនាស ឬរងគ្រោះថ្នាក់ មានបេះដូងពោរពេញដោយមេត្តា ប្រាថ្នាឱ្យសត្វលោកទាំងអស់បានសុខ។',
    descE: 'Harboring no hate: "May these beings live free from hostility, affliction, and anxiety, and live happily!"',
    positiveK: 'អត់ទោសឱ្យអ្នកដែលធ្លាប់ធ្វើខុសលើយើង និងផ្សាយមេត្តាជាប្រចាំ។',
    positiveE: 'Quickly forgiving transgressions and radiating peace to enemies.',
    fruitK: 'គេងលក់ស្រួល ផ្ទៃមុខស្រស់ថ្លា និងមានអារម្មណ៍ស្រស់បំព្រងជានិច្ច។',
    fruitE: 'Restful sleep, luminous aura, and emotional invulnerability.'
  },
  {
    id: 'm3',
    num: '១០',
    icon: '☸️',
    titleK: '១០. ការយល់ត្រូវតាមធម៌ (សម្មាទិដ្ឋិ)',
    titleE: '10. Right View (Sammādiṭṭhi)',
    pali: 'Sammādiṭṭhiko hoti aviparītadassano',
    descK: 'មានការយល់ឃើញត្រឹមត្រូវ ជឿជាក់ថាកម្មមានផលពិត ធ្វើល្អបានល្អ ធ្វើអាក្រក់បានអាក្រក់ មាតាបិតាមានគុណ និងព្រះនិព្វានមានពិត។',
    descE: 'Clear understanding that actions bear fruit, moral causes produce effects, gratitude is due to parents, and liberation is real.',
    positiveK: 'សិក្សាស្វែងយល់សច្ចធម៌ ពិចារណារាល់រឿងរ៉ាវដោយបញ្ញា និងដឹកនាំជីវិតលើផ្លូវត្រឹមត្រូវ។',
    positiveE: 'Studying Dhamma deeply and orienting life around wisdom and virtue.',
    fruitK: 'មិនវង្វេងក្នុងលោកីយ កសាងអនាគតដ៏ភ្លឺស្វាង និងដើរលើមាគ៌ារំលត់ទុក្ខ។',
    fruitE: 'Immunity to superstitious dread, ascending to noble awakening.'
  }
]

const currentItems = computed(() => {
  if (activeTab.value === 'kaya') return kayaItems
  if (activeTab.value === 'vaci') return vaciItems
  return manoItems
})
</script>
