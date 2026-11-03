<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៧៤ — ឧបាសក-ឧបាសិកាឆ្នើមសម័យពុទ្ធកាល', 'GATHA 74 — GREAT LAY DISCIPLES') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ឧបាសក-ឧបាសិកាឆ្នើមសម័យពុទ្ធកាល ៖ គំរូនៃជីវិតគ្រហស្ថបដិបត្តិធម៌', 'Great Lay Disciples (Upāsaka & Upāsikā) — Masters of Household Dhamma') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ឧបាសក និងឧបាសិកា គឺជាសសរស្តម្ភដ៏រឹងមាំមួយក្នុងចំណោមពុទ្ធបរិស័ទទាំង ៤ ពួក (ភិក្ខុ, ភិក្ខុនី, ឧបាសក, ឧបាសិកា) ដែលបានទ្រទ្រង់ព្រះពុទ្ធសាសនាឱ្យស្ថិតស្ថេរគង់វង្សរហូតមកដល់សព្វថ្ងៃ។ នៅក្នុងសម័យពុទ្ធកាល មានគ្រហស្ថជាច្រើនរូប មិនត្រឹមតែជាអ្នកមានទ្រព្យសម្បត្តិស្តុកស្តម្ភប៉ុណ្ណោះទេ ប៉ុន្តែថែមទាំងជាអ្នកបដិបត្តិធម៌យ៉ាងមុតមាំ រហូតដល់សម្រេចអរិយផលជាន់ខ្ពស់ដូចជា សោតាបន្ន, សកទាគាមី និងអនាគាមី ទាំងដែលកំពុងរស់នៅគ្រប់គ្រងផ្ទះសម្បែង និងប្រកបរបរអាជីវកម្ម។ ពួកគាត់គឺជាគំរូដ៏អស្ចារ្យសម្រាប់មនុស្សសម័យថ្មី ក្នុងការរួមបញ្ចូលធម៌ និងការងារជីវិត។', 'Upāsakas and Upāsikās form two indispensable pillars of the fourfold Buddhist assembly, sustaining the sasana from its inception to the modern day. In the Buddha\'s era, numerous lay practitioners managed thriving households, businesses, and kingdoms while attaining advanced noble attainments—such as Stream-entry (Sotāpatti), Once-returning (Sakadāgāmī), and Non-returning (Anāgāmī). They shatter the myth that enlightenment is reserved solely for forest recluses, serving as sublime templates for contemporary lay practitioners.') }}
    </p>

    <!-- Pali Gatha Box -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ឯតទគ្គំ ភិក្ខវេ មម សាវកានំ ឧបាសកានំ ទាយកានំ យទិទំ សុទត្តោ គហបតិ អនាថបិណ្ឌិកោ...»', '"Chief among my lay disciples who are givers of alms is the householder Sudatta Anāthapiṇḍika; chief among female benefactors is Visākhā Migāramātā." — Aṅguttara Nikāya, Etadagga Vagga') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— ឯតទគ្គវគ្គ អង្គុត្តរនិកាយ ឯកកនិបាត', '— Etadagga Vagga, Aṅguttara Nikāya') }}
      </p>
    </div>

    <!-- The Great Lay Disciples Grid -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>👑</span>
        <span>{{ t('កម្រងជីវប្រវត្តិឧបាសក-ឧបាសិកាឆ្នើមទាំង ៦ រូប', '6 Master Lay Disciples of the Buddha') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="disciple in disciples"
          :key="disciple.id"
          class="card-paper p-5 sm:p-6 rounded-xl border flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <div class="flex items-center gap-2.5">
                <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                  {{ disciple.num }}
                </span>
                <div>
                  <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">
                    {{ t(disciple.nameKm, disciple.nameEn) }}
                  </h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ disciple.paliTitle }}</p>
                </div>
              </div>
              <span class="text-3xl">{{ disciple.icon }}</span>
            </div>

            <!-- Etadagga Honor -->
            <div class="mt-3 p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-700 dark:text-amber-300">
              🏅 {{ t(disciple.etadaggaKm, disciple.etadaggaEn) }}
            </div>

            <!-- Bio & Contribution -->
            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(disciple.descKm, disciple.descEn) }}
            </p>

            <!-- Spiritual Attainment -->
            <div class="mt-3 text-xs">
              <strong class="text-stone-700 dark:text-stone-300 font-bold block mb-0.5">
                🪷 {{ t('កម្រិតធម៌ដែលសម្រេច ៖', 'Spiritual Attainment:') }}
              </strong>
              <span class="text-emerald-600 dark:text-emerald-400 font-semibold">{{ t(disciple.attainmentKm, disciple.attainmentEn) }}</span>
            </div>
          </div>

          <!-- Life Inspiration for Modern People -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2.5 rounded-lg bg-stone-500/5 border border-stone-500/15">
              <strong class="font-bold text-stone-700 dark:text-stone-300 block mb-0.5">
                💡 {{ t('មេរៀនសម្រាប់ជីវិតបច្ចុប្បន្ន ៖', 'Lesson for Modern Life:') }}
              </strong>
              <span class="text-stone-600 dark:text-stone-400">{{ t(disciple.lessonKm, disciple.lessonEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Concluding Inspiration -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>✨</span>
        <span>{{ t('សារដាស់តឿន ៖ គ្រហស្ថក៏អាចសម្រេចធម៌បាន!', 'Key Insight: Laypersons Can Attain Liberation!') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('កុំគិតថាទាល់តែទៅបួសក្នុងព្រៃទើបអាចបដិបត្តិធម៌បាន។ គំរូនៃអនាថបិណ្ឌិកសេដ្ឋី នាងវិសាខា និងគិហិបតិចិត្ត បានបញ្ជាក់យ៉ាងច្បាស់ថា ដរាបណាយើងមាន «សតិ» «សីល» និង «បញ្ញា» ក្នុងពេលធ្វើការ រកស៊ី និងរស់នៅជាមួយគ្រួសារ នោះយើងកំពុងដើរលើមាគ៌ារបស់ព្រះអរិយៈហើយ។', 'Do not assume that Dhamma cultivation requires ascetic withdrawal to remote mountain caves. The luminous lives of Anāthapiṇḍika, Visākhā, and Citta Gahapati prove that weaving mindfulness, ethical trade, and meditation into ordinary working life walks directly in the footsteps of the Noble Ones.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const disciples = [
  {
    id: 1,
    num: '១',
    nameKm: 'អនាថបិណ្ឌិកសេដ្ឋី (សុទត្ត)',
    nameEn: 'Anāthapiṇḍika (Sudatta)',
    paliTitle: 'Sudatta Anāthapiṇḍika Gahapati',
    icon: '🏛️',
    etadaggaKm: 'ឯតទគ្គៈខាងការឱ្យទាន (ទាយកឆ្នើម)',
    etadaggaEn: 'Foremost in Generosity & Giving (Chief Almsgiver)',
    descKm: 'មហាសេដ្ឋីនៃក្រុងសាវត្ថី ដែលមានចិត្តករុណា តែងចែកបាយទឹកដល់ជនកំព្រានិងកម្សត់ទុរគត។ លោកជាអ្នកទិញសួនឧទ្យានរបស់ព្រះរាជបុត្រជេត ដោយក្រាលកាក់មាសពេញផ្ទៃដី ដើម្បីកសាងវត្តជេតពនមហាវិហារ ថ្វាយព្រះពុទ្ធ និងព្រះសង្ឃ។ សូម្បីតែពេលជួបវិបត្តិសេដ្ឋកិច្ចក្ស័យធន ក៏លោកនៅតែមិនបោះបង់ការធ្វើទានឡើយ។',
    descEn: 'Wealthy banker of Savatthi renowned as "provider of alms to the destitute". He famously purchased Prince Jeta\'s park by covering the entire grounds in gold coins to construct Jetavana Monastery. Even when financial crises struck, his unwavering generosity never faltered.',
    attainmentKm: 'ព្រះសោតាបន្ន (Stream-Enterer) — ស្លាប់ទៅកើតនៅឋានតុសិតទេវលោក',
    attainmentEn: 'Sotāpanna (Stream-enterer) — Reborn in Tusita heaven',
    lessonKm: 'ទ្រព្យសម្បត្តិដែលរកបាន ត្រូវបង្វែរជាស្បៀងកុសលសម្រាប់មនុស្សជាតិ និងសាសនា។',
    lessonEn: 'Channel business wealth into lasting social upliftment and spiritual light.',
  },
  {
    id: 2,
    num: '២',
    nameKm: 'នាងវិសាខា មហាឧបាសិកា (មិគារមាតា)',
    nameEn: 'Visākhā Migāramātā',
    paliTitle: 'Visākhā Mahā-upāsikā',
    icon: '🌸',
    etadaggaKm: 'ឯតទគ្គៈខាងទាយិកា (អ្នកឧបត្ថម្ភសង្ឃឆ្នើម)',
    etadaggaEn: 'Foremost Female Benefactor of the Sangha',
    descKm: 'ស្ត្រីគំរូដ៏ឆ្នើម ដែលសម្រេចសោតាបន្នតាំងពីអាយុ ៧ ឆ្នាំ។ នាងបានសាងវត្តបុព្វារាម ដ៏ធំស្កឹមស្កៃ និងបានសុំពរ ៨ ប្រការពីព្រះពុទ្ធ ដើម្បីឧបត្ថម្ភសំពត់ទឹកភ្លៀង ថ្នាំសង្កូវ អាហារសម្រាប់ភិក្ខុឈឺ និងភិក្ខុធ្វើដំណើរ។ នាងមានប្រាជ្ញាវាងវៃ អាចទូន្មានឪពុកក្មេក (មិគារសេដ្ឋី) ឱ្យងាកមកគោរពព្រះពុទ្ធវិញ។',
    descEn: 'Attained stream-entry at just age seven. She commissioned Pubbārāma Monastery and requested eight lifelong boons from the Buddha to supply bathing robes, medicine, and food to traveling and sick monastics. Her wisdom converted her wealthy skeptical father-in-law to the Dhamma.',
    attainmentKm: 'ព្រះសោតាបន្ន (Stream-Enterer) — ស្លាប់ទៅកើតនៅឋាននិម្មានរតី',
    attainmentEn: 'Sotāpanna (Stream-enterer) — Reborn in Nimmānarati heaven',
    lessonKm: 'ភាពជាអ្នកដឹកនាំរបស់ស្ត្រីក្នុងការផ្សះផ្សាគ្រួសារ និងការឧបត្ថម្ភសង្គមដោយបញ្ញា។',
    lessonEn: 'Exemplifies graceful female leadership, domestic diplomacy, and strategic philanthropy.',
  },
  {
    id: 3,
    num: '៣',
    nameKm: 'គ្រូពេទ្យជីវក កោមារភត្ម',
    nameEn: 'Dr. Jīvaka Komārabhacca',
    paliTitle: 'Jīvaka Komārabhacca',
    icon: '🌿',
    etadaggaKm: 'ឯតទគ្គៈខាងបុគ្គលជ្រះថ្លាក្នុងសង្ឃ & គ្រូពេទ្យគំរូ',
    etadaggaEn: 'Foremost in Devotion to the Sangha & Supreme Physician',
    descKm: 'កំពូលគ្រូពេទ្យវៃឆ្លាតបំផុតសម័យពុទ្ធកាល ដែលព្យាបាលជំងឺដ៏កាចសាហាវរបស់ស្តេចពិម្ពិសារ ស្តេចចណ្ឌបជ្ជោត និងជាគ្រូពេទ្យផ្ទាល់ថែរក្សាព្រះសម្មាសម្ពុទ្ធ និងព្រះសង្ឃ។ លោកបានប្រគេនសួនស្វាយរបស់ខ្លួនធ្វើជាវត្តអារាម (ជីវកម្ពវន) និងបានទូលសុំឱ្យព្រះពុទ្ធអនុញ្ញាតការប្រើសំពត់ត្រីចីវរដែលឧបាសកប្រគេន។',
    descEn: 'The most celebrated physician in ancient India who treated King Bimbisāra, King Caṇḍapajjota, and served as personal physician to the Buddha and the monastic Sangha. He donated his mango grove as a monastery and advocated for monastics to accept lay robe offerings.',
    attainmentKm: 'ព្រះសោតាបន្ន (Stream-Enterer)',
    attainmentEn: 'Sotāpanna (Stream-enterer)',
    lessonKm: 'ការយកជំនាញវិជ្ជាជីវៈ (វេជ្ជសាស្ត្រ) មកបម្រើមនុស្សជាតិ និងព្រះសាសនាដោយទឹកចិត្តបរិសុទ្ធ។',
    lessonEn: 'Dedicate professional medical skill to alleviate suffering with compassionate ethics.',
  },
  {
    id: 4,
    num: '៤',
    nameKm: 'គិហិបតិចិត្ត (ចិត្តគហបតី)',
    nameEn: 'Citta the Householder',
    paliTitle: 'Citta Gahapati of Macchikāsaṇḍa',
    icon: '📜',
    etadaggaKm: 'ឯតទគ្គៈខាងធម្មកថិក (ពូកែទេសនាធម៌ក្នុងចំណោមគ្រហស្ថ)',
    etadaggaEn: 'Foremost Lay Disciple in Expounding the Dhamma',
    descKm: 'សេដ្ឋីនៃក្រុងមច្ឆិកាសណ្ឌ ដែលមានចំណេះដឹងព្រះធម៌ជ្រៅជ្រះរហូតដល់ព្រះពុទ្ធលើកតម្កើងថា បើភិក្ខុចង់យកគំរូគ្រហស្ថ ចូរយកគំរូគិហិបតិចិត្ត! លោកអាចបកស្រាយធម៌ និងដោះស្រាយសំណួរទស្សនវិជ្ជាជ្រាលជ្រៅដល់ព្រះថេរៈជាច្រើនអង្គ និងអាចទូន្មាននិគ្រន្ថនាដបុត្តបានយ៉ាងអស្ចារ្យ។',
    descEn: 'A master scholar of Macchikāsaṇḍa praised by the Buddha: "If a lay disciple aspires rightly, let them aspire to be like Citta the Householder." Renowned for his penetrating discourses answering intricate philosophical questions even for senior monks.',
    attainmentKm: 'ព្រះអនាគាមី (Non-Returner) — សម្រេចឈាន និងអភិញ្ញា',
    attainmentEn: 'Anāgāmī (Non-returner) — Endowed with Jhānas and higher knowledges',
    lessonKm: 'គ្រហស្ថក៏អាចសិក្សាធម៌ឱ្យស៊ីជម្រៅដល់កម្រិតកំពូល និងអាចបង្រៀនធម៌បានយ៉ាងស្ទាត់ជំនាញ។',
    lessonEn: 'A householder can penetrate the deepest Dhamma scholarship and teach with effortless mastery.',
  },
  {
    id: 5,
    num: '៥',
    nameKm: 'នាងខុជ្ជុត្តរា (Khujjuttarā)',
    nameEn: 'Khujjuttarā the Royal Maid',
    paliTitle: 'Khujjuttarā Bahussuta',
    icon: '💡',
    etadaggaKm: 'ឯតទគ្គៈខាងពហុស្សូតក្នុងចំណោមឧបាសិកា (អ្នកចាំធម៌ច្រើន)',
    etadaggaEn: 'Foremost Female Lay Disciple in Learned Erudition (Bahussuta)',
    descKm: 'នាងជាស្រីបម្រើមានខ្នងគមរបស់ព្រះនាងសាមាវតី។ រាល់ពេលចេញទៅទិញផ្កា នាងតែងលួចឆ្លៀតទៅស្តាប់ព្រះពុទ្ធទេសនាផ្ទាល់ រួចចងចាំធម៌ទាំងអស់គ្មានភ្លេចមួយម៉ាត់ យកមកទេសនាឡើងវិញដល់ព្រះនាងសាមាវតី និងស្រីស្នំ ៥០០ នាក់ រហូតសម្រេចសោតាបន្នទាំងអស់គ្នា។ ធម្មទេសនារបស់នាងត្រូវបានចារទុកក្នុងគម្ពីរ «ឥតិវុត្តកៈ»។',
    descEn: 'A hunchbacked maidservant in Queen Sāmāvatī\'s palace. Sent daily to purchase flowers, she attended the Buddha\'s sermons and memorized them with photographic recall, repeating every discourse word-for-word to 500 royal ladies who all attained stream-entry. Her recitations formed the Itivuttaka.',
    attainmentKm: 'ព្រះសោតាបន្ន (Stream-Enterer) & អ្នកចាំព្រះត្រៃបិដក',
    attainmentEn: 'Sotāpanna (Stream-enterer) with perfect photographic recall of scriptures',
    lessonKm: 'វណ្ណៈ និងរូបរាងកាយមិនមែនជាឧបសគ្គនៃបញ្ញាឡើយ។ នរណាក៏អាចក្លាយជាអ្នកប្រាជ្ញធម៌បាន។',
    lessonEn: 'Physical disadvantage and low birth cannot hinder immense wisdom and spiritual genius.',
  },
  {
    id: 6,
    num: '៦',
    nameKm: 'ព្រះបាទពិម្ពិសារ (ស្តេចមាគធ)',
    nameEn: 'King Bimbisāra of Magadha',
    paliTitle: 'Rājā Bimbisāra Māgadha',
    icon: '🏰',
    etadaggaKm: 'ព្រះមហាក្សត្រគំរូនៃពុទ្ធសាសនា & ឧបដ្ឋាកធំដំបូង',
    etadaggaEn: 'Exemplary Buddhist Monarch & First Royal Patron',
    descKm: 'ស្តេចនៃនគរមគធៈ ដែលបានស្តាប់ធម៌ព្រះពុទ្ធលើកដំបូង រួមជាមួយប្រជាជន ១២ ម៉ឺននាក់ ហើយសម្រេចសោតាបន្នភ្លាមៗ។ ព្រះអង្គបានថ្វាយសួនឫស្សីធ្វើជាវត្តវេឡុវន ដែលជាវត្តអារាមដំបូងបង្អស់ក្នុងប្រវត្តិសាស្ត្រពុទ្ធសាសនា។ ព្រះអង្គដឹកនាំនគរដោយទសពិធរាជធម៌ រហូតដល់ចុងបញ្ចប់នៃជីវិត ទោះត្រូវរងទុក្ខវេទនាក៏នៅតែតម្កល់ចិត្តក្នុងធម៌។',
    descEn: 'Ruler of Magadha who attained stream-entry upon hearing his very first sermon alongside 120,000 subjects. He dedicated the Bamboo Grove (Veḷuvana), creating the first Buddhist monastery in history. Governed by righteous ethics, maintaining meditative equanimity even during tragic imprisonment.',
    attainmentKm: 'ព្រះសោតាបន្ន (Stream-Enterer) — កើតជាទេវបុត្រឈ្មោះជនវសភៈ',
    attainmentEn: 'Sotāpanna (Stream-enterer) — Reborn as the deva Janavasabha',
    lessonKm: 'ការប្រើប្រាស់អំណាច និងតំណែងកំពូលដើម្បីការពារយុត្តិធម៌ និងទ្រទ្រង់សន្តិភាពសង្គម។',
    lessonEn: 'Utilizing sovereign state power solely to foster civic justice, nonviolence, and spiritual enlightenment.',
  },
]
</script>
