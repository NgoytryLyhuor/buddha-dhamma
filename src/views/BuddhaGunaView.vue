<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៦៤ — ព្រះពុទ្ធគុណ ៩ ប្រការ', 'GATHA 64 — 9 QUALITIES OF THE BUDDHA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ពុទ្ធគុណ ៩ ប្រការ (ឥតិបិសោ) ៖ គុណដ៏វិសេសនៃព្រះសម្មាសម្ពុទ្ធ', 'The 9 Supreme Qualities of the Buddha (Itipiso)') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ពុទ្ធគុណ ៩ ប្រការ គឺជាគុណសម្បត្តិដ៏វិសេសវិសាល និងបរិសុទ្ធស្អាតឥតខ្ចោះរបស់ព្រះបរមសាស្តា ដែលពុទ្ធបរិស័ទតែងសូត្ររំលឹកជាប្រចាំតាមរយៈបទ «ឥតិបិ សោ ភគវា...»។ គុណទាំង ៩ នេះ មិនមែនកើតឡើងដោយចៃដន្យឡើយ តែជាលទ្ធផលនៃការបំពេញបារមី ៣០ ទស្ស អស់កាលដ៏យូរអង្វែងរហូតដល់ ៤ អសង្ខេយ្យ និងមួយសែនកប្ប។ ការចម្រើនពុទ្ធានុស្សតិ ពិចារណាគុណទាំង ៩ នេះ ជាប្រចាំ អាចរំងាប់ការភ័យខ្លាច ការតក់ស្លុត និងធ្វើឱ្យចិត្តជ្រះថ្លា ត្រជាក់ត្រជុំដូចស្ថិតនៅក្រោមម្លប់នៃព្រះពុទ្ធផ្ទាល់។', 'The Nine Supreme Qualities of the Buddha represent the boundless, transcendent virtues of the Awakened One, universally chanted in the sacred hymn "Itipiso Bhagavā...". These virtues are not accidental; they are the fruition of thirty perfections fulfilled over four incalculable eras and a hundred thousand aeons. Recollecting these nine virtues (Buddhānussati) dispels dread, calms anxiety, and bathes the mind in supreme serenity.') }}
    </p>

    <!-- Pali Gatha Box -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ឥតិបិ សោ ភគវា អរហំ សម្មាសម្ពុទ្ធោ វិជ្ជាចរណសម្បន្នោ សុគតោ លោកវិទូ អនុត្តរោ បុរិសទម្មសារថិ សត្ថា ទេវមនុស្សានំ ពុទ្ធោ ភគវាតិ។»', '"Thus indeed is the Blessed One: Worthy and perfected, fully awakened, endowed with clear knowledge and conduct, sublime, knower of worlds, incomparable trainer of persons to be tamed, teacher of gods and humans, awakened, blessed." — Dhajagga Sutta (SN 11.3)') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— ធជគ្គសូត្រ សំយុត្តនិកាយ សក្កសំយុត្ត', '— Dhajagga Sutta, Saṃyutta Nikāya') }}
      </p>
    </div>

    <!-- The 9 Virtues Accordion / Grid -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>☸️</span>
        <span>{{ t('អត្ថន័យពិស្តារនៃពុទ្ធគុណទាំង ៩', 'Detailed Exposition of the 9 Buddha Qualities') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="item in qualities"
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
                  <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">
                    {{ item.paliTitle }}
                  </h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ item.enTitle }}</p>
                </div>
              </div>
              <span class="text-2xl">{{ item.icon }}</span>
            </div>

            <!-- Meaning in Khmer -->
            <div class="mt-3">
              <span class="text-xs font-bold text-amber-600 dark:text-amber-400 block mb-1">
                {{ t(item.kmHeading, item.enHeading) }}
              </span>
              <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                {{ t(item.descKm, item.descEn) }}
              </p>
            </div>
          </div>

          <!-- Deep insight highlight -->
          <div class="mt-3 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2.5 rounded-lg bg-stone-500/5 border border-stone-500/15">
              <strong class="text-stone-700 dark:text-stone-300 font-bold block mb-0.5">
                💡 {{ t('ចំណុចគន្លឹះ ៖', 'Key Insight:') }}
              </strong>
              <span class="text-stone-600 dark:text-stone-400 leading-relaxed">{{ t(item.insightKm, item.insightEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Power of Buddhānussati -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🛡️</span>
        <span>{{ t('អានិសង្ស នៃការចម្រើនពុទ្ធានុស្សតិ (រឭកគុណព្រះពុទ្ធ)', 'Benefits of Practicing Buddhānussati') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ក្នុងគម្ពីរវិសុទ្ធិមគ្គ បានបញ្ជាក់ថា បុគ្គលដែលឧស្សាហ៍រឭកដល់ពុទ្ធគុណ ៩ ប្រការ តែងទទួលបានអានិសង្សដ៏អស្ចារ្យជាច្រើនរួមមាន ៖', 'In the Visuddhimagga, it is taught that one devoted to recollecting the nine virtues enjoys immense spiritual fruits:') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-xs">
        <div class="p-3 rounded-xl border bg-amber-500/5 border-amber-500/20">
          <strong class="font-bold text-amber-700 dark:text-amber-300 block mb-1">១. រំងាប់ការភ័យខ្លាច</strong>
          <span class="text-stone-600 dark:text-stone-400">{{ t('ពេលជួបគ្រោះអាសន្ន ឬនៅកន្លែងស្ងាត់ ចិត្តមានទីពឹងមាំ មិនញាប់ញ័រ។', 'Overcomes fear and dread in dangerous or lonely places.') }}</span>
        </div>
        <div class="p-3 rounded-xl border bg-emerald-500/5 border-emerald-500/20">
          <strong class="font-bold text-emerald-700 dark:text-emerald-300 block mb-1">២. ខ្មាសបាបខ្លាចបាប</strong>
          <span class="text-stone-600 dark:text-stone-400">{{ t('មានអារម្មណ៍ដូចព្រះពុទ្ធគង់នៅចំពោះមុខ ធ្វើឱ្យហិរិនិងឱត្តប្បៈរឹងមាំជានិច្ច។', 'Instills noble shame and moral dread as if living in the Teacher\'s presence.') }}</span>
        </div>
        <div class="p-3 rounded-xl border bg-sky-500/5 border-sky-500/20">
          <strong class="font-bold text-sky-700 dark:text-sky-300 block mb-1">៣. ចិត្តជ្រះថ្លាក្នុងភាវនា</strong>
          <span class="text-stone-600 dark:text-stone-400">{{ t('ចិត្តឆាប់ស្ងប់ស្ងាត់ បណ្តេញនីវរណធម៌ និងឈានទៅកាន់ឧបចារសមាធិ។', 'Calms mental turbulence and acts as an immediate doorway to Upacāra Samādhi.') }}</span>
        </div>
        <div class="p-3 rounded-xl border bg-purple-500/5 border-purple-500/20">
          <strong class="font-bold text-purple-700 dark:text-purple-300 block mb-1">៤. ស្លាប់ទៅមិនវង្វេង</strong>
          <span class="text-stone-600 dark:text-stone-400">{{ t('ពេលជិតផុតដង្ហើម មានសតិភ្លឺស្វាង មិនធ្លាក់ក្នុងអបាយភូមិ ឆ្ពោះទៅកាន់សុគតិ។', 'Ensures clear mindfulness at death, preventing falling into lower realms.') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const qualities = [
  {
    id: 1,
    num: '១',
    paliTitle: 'អរហំ (Arahant)',
    enTitle: 'The Worthy One',
    icon: '✨',
    kmHeading: 'ឆ្ងាយចាកកិលេស & គួរដល់ការបូជាខ្ពស់បំផុត',
    enHeading: 'Far from defilements & worthy of supreme veneration',
    descKm: 'ព្រះអង្គបានកម្ចាត់កិលេសទាំងអស់ដោយឥតសេសសល់ គ្មានអំពើបាបជាកំបាំងកំបោលឡើយ សូម្បីក្នុងទីស្ងាត់កំបាំងភ្នែកមនុស្ស ក៏ព្រះអង្គនៅតែបរិសុទ្ធស្អាត។ ព្រះអង្គជាបុគ្គលគួរទទួលនូវការគោរពបូជាគ្រឿងសក្ការៈពីមនុស្ស និងទេវតាទូទាំងចក្រវាឡ។',
    descEn: 'He has utterly eradicated all mental defilements, never committing any unwholesome deed even in secret. Worthy of the highest reverence and offerings from gods and humans.',
    insightKm: 'ពាក្យថា អរហំ បកស្រាយ ៥ យ៉ាង ៖ ឆ្ងាយចាកកិលេស, សម្លាប់កិលេស, បំបែកកាំកង់សង្សារវដ្ត, គួរដល់បូជា, និងគ្មានអំពើអាក្រក់ក្នុងទីកំបាំង។',
    insightEn: 'Arhat entails five aspects: remote from defilements, destroyer of defilements, broken the spokes of rebirth\'s wheel, worthy of offerings, and pure even in secret.',
  },
  {
    id: 2,
    num: '២',
    paliTitle: 'សម្មាសម្ពុទ្ធោ (Sammāsambuddho)',
    enTitle: 'The Fully Enlightened One',
    icon: '☀️',
    kmHeading: 'ត្រាស់ដឹងនូវសច្ចធម៌ដោយព្រះអង្គឯងដោយត្រឹមត្រូវ',
    enHeading: 'Self-awakened to Ultimate Truth through direct discernment',
    descKm: 'ព្រះអង្គបានយល់ដឹងនូវចតុរារិយសច្ច (ទុក្ខ, សមុទយ, និរោធ, មគ្គ) ដោយព្រះប្រាជ្ញាញាណស្វ័យំបូ គ្មានគ្រូអាចារ្យណាម្នាក់បង្ហាញផ្លូវឡើយ ហើយការត្រាស់ដឹងនោះទៀតសោត គឺត្រឹមត្រូវឥតមានលម្អៀង ឬខុសឆ្គងឡើយ។',
    descEn: 'He discovered and realized the Four Noble Truths purely by His own transcendent wisdom without the guidance of any worldly teacher, and His realization is infallible.',
    insightKm: 'ព្រះអង្គជាម្ចាស់នៃសច្ចធម៌ មិនមែនបង្កើតការពិតទេ ប៉ុន្តែជាអ្នករកឃើញច្បាប់ធម្មជាតិដែលកប់បាត់រាប់លានឆ្នាំមកបង្ហាញដល់លោក។',
    insightEn: 'He does not invent the truth, but discovers the timeless cosmic law buried beneath ignorance and illuminates it for all beings.',
  },
  {
    id: 3,
    num: '៣',
    paliTitle: 'វិជ្ជាចរណសម្បន្នោ (Vijjācaraṇasampanno)',
    enTitle: 'Endowed with Knowledge & Conduct',
    icon: '📜',
    kmHeading: 'បរិបូណ៌ដោយវិជ្ជា និងចរិយាវត្តដ៏ខ្ពង់ខ្ពស់',
    enHeading: 'Perfect in transcendent knowledge and flawless conduct',
    descKm: 'ព្រះអង្គមានចំណេះដឹងកំពូល (វិជ្ជា ៣ ឬ វិជ្ជា ៨ រួមមាន ញាណដឹងអតីតជាតិ ញាណដឹងការស្លាប់កើតនៃសត្វ និងញាណកម្ចាត់អាសវៈ) ព្រមទាំងមានចរណៈ ១៥ ប្រការ (សីល សំវរៈ សមាធិ និងបញ្ញា) ប្រព្រឹត្តស្របតាមពាក្យដែលព្រះអង្គបង្រៀនជានិច្ច។',
    descEn: 'Endowed with supreme spiritual knowledges (Vijjā: recollection of past lives, divine eye, destruction of cankers) harmonized flawlessly with conduct (Caraṇa: virtue, mindfulness, and sensory restraint).',
    insightKm: 'ព្រះអង្គនិយាយយ៉ាងណា ធ្វើការងារយ៉ាងនោះ (យថាវាទី តថាការី) គ្មានការក្លែងបន្លំរវាងចំណេះដឹង និងការអនុវត្តឡើយ។',
    insightEn: 'He acts as He speaks, and speaks as He acts; an absolute unity of theoretical truth and lived moral perfection.',
  },
  {
    id: 4,
    num: '៤',
    paliTitle: 'សុគតោ (Sugato)',
    enTitle: 'The Sublime Well-Gone One',
    icon: '🕊️',
    kmHeading: 'យាងទៅកាន់ទីល្អ និងមានព្រះបន្ទូលប្រកបដោយប្រយោជន៍',
    enHeading: 'One who has walked well to Nibbāna and speaks truthfully and beneficially',
    descKm: 'ព្រះអង្គបានយាងទៅកាន់ទីដ៏ក្សេមក្សាន្ត គឺព្រះនិព្វាន ដោយមិនត្រឡប់មកកាន់វដ្តសង្សារនៃសេចក្តីទុក្ខវិញឡើយ។ ម្យ៉ាងទៀត ព្រះបន្ទូលរបស់ព្រះអង្គ តែងតែពិត ត្រឹមត្រូវ និងនាំមកនូវសេចក្តីចម្រើនដល់អ្នកស្តាប់ជានិច្ច។',
    descEn: 'He has traversed safely along the Noble Path straight to Nibbāna never to revert to suffering. Moreover, His speech is invariably true, gentle, and profoundly beneficial.',
    insightKm: 'ព្រះអង្គជ្រើសរើសសំដីតែ ៦ ប្រភេទ ប៉ុន្តែជ្រើសនិយាយតែសំដីដែលពិត មានប្រយោជន៍ និងត្រូវកាលវេលាសមរម្យប៉ុណ្ណោះ។',
    insightEn: 'Among six types of speech, He speaks only that which is true, beneficial, and delivered at the right timely moment.',
  },
  {
    id: 5,
    num: '៥',
    paliTitle: 'លោកវិទូ (Lokavidū)',
    enTitle: 'The Knower of the Worlds',
    icon: '🌍',
    kmHeading: 'ជ្រាបច្បាស់នូវលោកទាំង ៣ យ៉ាងជាក់ស្តែង',
    enHeading: 'Comprehensive knower of all cosmos and dimensions',
    descKm: 'ព្រះអង្គជ្រាបច្បាស់នូវ ៖ ១. សង្ខារលោក (លោកនៃខន្ធ ធាតុ អាយតនៈ), ២. សត្តលោក (លោកនៃពពួកសត្វ និស្ស័យ និងកម្ម), និង ៣. ឱកាសលោក (លោកនៃចក្រវាឡ ភពផែនដី និងលំហអាកាសគ្មានទីបញ្ចប់)។',
    descEn: 'He understands the cosmos in all dimensions: the world of formations (Saṅkhāraloka), the world of sentient beings and their karma (Sattaloka), and the physical space-time universe (Okāsaloka).',
    insightKm: 'គ្មានអាថ៌កំបាំងណាមួយនៃសកលលោក និងចិត្តវិទ្យារបស់សត្វលោក ដែលព្រះប្រាជ្ញាញាណរបស់ព្រះអង្គមិនបានទម្លុះទម្លាយនោះឡើយ។',
    insightEn: 'No psychological nuance or cosmic dimension remains obscure to His penetrating, unobstructed discernment.',
  },
  {
    id: 6,
    num: '៦',
    paliTitle: 'អនុត្តរោ បុរិសទម្មសារថិ (Anuttaro Purisadammasārathi)',
    enTitle: 'Incomparable Trainer of Tameable Beings',
    icon: '🏹',
    kmHeading: 'អ្នកបង្ហាត់ទូន្មានមនុស្សយ៉ាងពូកែ គ្មាននរណាស្មើ',
    enHeading: 'Peerless guide who tames difficult and wild minds with skill and compassion',
    descKm: 'ព្រះអង្គមានវិធីទូន្មានមនុស្សកាចសាហាវ និងអ្នកមានមានះក្រអឺតក្រទមឱ្យត្រឡប់មកជាស្លូតបូត និងសម្រេចធម៌បាន ដូចជា មេចោរអង្គុលីមាល, អាឡវកយក្ស, ដំរីចុះប្រេងនាឡាគិរី, និងសច្ចកនិគ្រន្ថជាដើម ដោយព្រះមេត្តា និងឧបាយកោសល្យ។',
    descEn: 'He guides and tames stubborn, aggressive, or arrogant individuals whom others find untameable—such as the killer Aṅgulimāla, the fierce demon Āḷavaka, the raging elephant Nālāgiri, and proud ascetics.',
    insightKm: 'ព្រះអង្គទូន្មានដោយការទន់ភ្លន់ផង ដោយការតឹងរ៉ឹងតាមធម៌វិន័យផង និងដោយការរួមបញ្ចូលទាំងពីរ ស្របតាមចរិតរបស់មនុស្សម្នាក់ៗ។',
    insightEn: 'He tames with gentleness, with firm discipline, and with skillful combinations matched uniquely to individual temperaments.',
  },
  {
    id: 7,
    num: '៧',
    paliTitle: 'សត្ថា ទេវមនុស្សានំ (Satthā Devamanussānaṃ)',
    enTitle: 'Teacher of Gods and Humans',
    icon: '👑',
    kmHeading: 'ជាគ្រូនៃទេវតា និងមនុស្សទាំងឡាយ',
    enHeading: 'The supreme spiritual master of both celestial beings and humankind',
    descKm: 'ព្រះអង្គជាគ្រូដឹកនាំផ្លូវចេញពីវាលរហោស្ថាននៃសង្សារវដ្ត។ មិនត្រឹមតែមនុស្សលោកទេ សូម្បីស្តេចទេវតា (ព្រះឥន្ទ្រ) និងមហាព្រហ្ម ក៏តែងចុះមកក្រាបបង្គំសួរធម៌ និងទទួលការណែនាំពីព្រះអង្គជានិច្ច។',
    descEn: 'He serves as the master caravan-leader navigating souls out of the perilous desert of Saṃsāra. Even deities like Sakka and Great Brahmās descend to receive His profound counsel.',
    insightKm: 'ព្រះអង្គបំពេញកិច្ចរៀងរាល់រាត្រីក្នុងយាមទី ៣ ដើម្បីទេសនាដោះស្រាយបញ្ហាធម៌ដល់ពួកទេវតា និងព្រហ្ម។',
    insightEn: 'During the middle watch of every night, the Buddha dedicated His time exclusively to answering inquiries and teaching the celestial deities.',
  },
  {
    id: 8,
    num: '៨',
    paliTitle: 'ពុទ្ធោ (Buddho)',
    enTitle: 'The Awakened One',
    icon: '🪷',
    kmHeading: 'ព្រះអង្គភ្ញាក់រឭក និងដាស់អ្នកដទៃឱ្យភ្ញាក់ដឹងខ្លួន',
    enHeading: 'Awakened from the slumber of delusion and awakening others',
    descKm: 'ព្រះអង្គភ្ញាក់រឭកផុតពីការដេកលក់ក្នុងអវិជ្ជា ដូចមនុស្សភ្ញាក់ពីសុបិន្តអាក្រក់ ហើយព្រះអង្គបានយកព្រះធម៌មកដាស់សត្វលោកទាំងឡាយឱ្យភ្ញាក់ដឹងខ្លួនតាមព្រះអង្គដែរ។ ព្រះអង្គជាផ្កាឈូកដែលរីកផុតពីទឹកភក់។',
    descEn: 'Having awakened from the deep slumber of ignorance like one opening their eyes from a nightmarish illusion, He actively awakens others to the reality of existence.',
    insightKm: 'ពាក្យថា ពុទ្ធ មិនមែនជាឈ្មោះកំណើតទេ តែជាគោរមងារនៃអ្នកដែលបានបំបែកសំបកនៃអវិជ្ជាបានជោគជ័យ។',
    insightEn: 'The title "Buddha" is not a personal birth name, but the highest honorific for one who has cracked through the shell of delusion.',
  },
  {
    id: 9,
    num: '៩',
    paliTitle: 'ភគវា (Bhagavā)',
    enTitle: 'The Blessed Lord',
    icon: '💎',
    kmHeading: 'ព្រះអង្គមានភ័ព្វ មានភោគធម៌ និងជាអ្នកបែងចែកធម៌',
    enHeading: 'The Blessed One endowed with spiritual fortunes who divides the Dhamma skillfully',
    descKm: 'ព្រះអង្គមានភ័ព្វសំណាងខ្ពស់បំផុតក្នុងលោក បរិបូណ៌ដោយគុណធម៌ ៦ យ៉ាង (ឥស្សរិយៈ ធម្មៈ យសៈ សិរី កាមៈ និងបយត្តៈ) ហើយជាអ្នកបំបែកធម៌ដ៏ជ្រាលជ្រៅឱ្យទៅជាមេរៀនងាយយល់ ដើម្បីចែករំលែកដល់មនុស្សលោក។',
    descEn: 'Endowed with the six supreme spiritual fortunes (lordship, virtue, fame, glory, wish-fulfillment, and exertion) and blessed with the peerless capability to analyze, parse, and elucidate subtle Dhamma for everyone.',
    insightKm: 'ពាក្យថា ភគវា មកពីពាក្យ ភគ្គ (ការបំបែក) គឺព្រះអង្គបំបែករាល់កិលេស និងបែងចែកព្រះធម៌ជា ៨៤,០០០ ធម្មក្ខន្ធ។',
    insightEn: 'Bhagavā shares etymological roots with "bhagga" (broken)—having shattered greed, hatred, and delusion, He analyzes the teaching into 84,000 distinct Dhamma topics.',
  },
]
</script>
