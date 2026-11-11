<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៧៦ — បញ្ចក្ខន្ធ ៥ ប្រការ', 'GATHA 76 — THE 5 AGGREGATES') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('បញ្ចក្ខន្ធ ៥ ៖ គ្រឿងផ្សំនៃជីវិត & ឧបមាដុំពពុះទឹកក្នុងបិដក', 'The 5 Aggregates (Khandha) & The Simile of River Foam') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('បញ្ចក្ខន្ធ សំដៅលើគំនរ ឬការប្រមូលផ្តុំនៃធម៌ ៥ យ៉ាងដែលផ្គុំគ្នាបង្កើតបានជា «មនុស្ស», «សត្វ» ឬ «ជីវិត» ដែលយើងសន្មតហៅរាល់ថ្ងៃ។ តាមពិត គ្មានមនុស្ស ឬព្រលឹងដាច់ដោយឡែកណាមួយឡើយ គឺមានតែគ្រឿងផ្សំ ៥ មុខនេះ ដែលកំពុងបម្រែបម្រួល និងទាក់ទងគ្នាទៅវិញទៅមកឥតឈប់ឈរ ៖ រូប (រូបកាយ), វេទនា (ការទទួលដឹងសុខទុក្ខ), សញ្ញា (ការចងចាំសម្គាល់), សង្ខារ (ការតាក់តែងចិត្ត), និងវិញ្ញាណ (ការដឹងអារម្មណ៍តាមទ្វារ)។ នៅក្នុងផេណបិណ្ឌូបមសូត្រ ព្រះពុទ្ធបានត្រាស់ឧបមាខន្ធទាំង ៥ យ៉ាងអស្ចារ្យបំផុត ដែលគ្មានទស្សនវិទូណាអាចប្រៀបបាន។', 'Pañcakkhandha represents the five aggregates or constituent heaps that assemble together to form the psycho-physical organism conventionally labeled "a person", "a being", or "myself". In ultimate reality, there is no monolithic soul; there are solely five fluctuating processes interacting continuously: Form (Rūpa), Feeling (Vedanā), Perception (Saññā), Mental Formations (Saṅkhāra), and Consciousness (Viññāṇa). In the Pheṇapiṇḍūpama Sutta, the Buddha delivered five breathtaking similes unveiling their empty, insubstantial core.') }}
    </p>

    <!-- Pali Gatha Box from Pheṇapiṇḍūpama Sutta (SN 22.95) -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ផេណបិណ្ឌូបមំ រូបំ, វេទនា បុព្វុឡូបមា, មរីចិកូបមា សញ្ញា, សង្ខារា កទលូបមា, មាយូបមញ្ច វិញ្ញាណំ, ទីបិតាច្ចន្តពន្ធុនា។»', '"Form is like a lump of river foam; feeling is like a water bubble; perception is like a mirage; formations are like a plantain trunk; consciousness is like a magical illusion: thus illuminated by the Kinsman of the Sun." — Saṃyutta Nikāya 22.95') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— ផេណបិណ្ឌូបមសូត្រ សំយុត្តនិកាយ ខន្ធវគ្គ', '— Pheṇapiṇḍūpama Sutta, Saṃyutta Nikāya') }}
      </p>
    </div>

    <!-- The 5 Aggregates Detailed Cards with the Buddha's Similes -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🧩</span>
        <span>{{ t('ខន្ធទាំង ៥ & ឧបមាដ៏មហស្ចារ្យទាំង ៥ ក្នុងបិដក', 'The 5 Aggregates & Their Master Similes') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="k in aggregates"
          :key="k.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <div class="flex items-center gap-2.5">
                <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                  {{ k.num }}
                </span>
                <div>
                  <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">
                    {{ t(k.titleKm, k.titleEn) }}
                  </h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ k.pali }}</p>
                </div>
              </div>
              <span class="text-3xl">{{ k.icon }}</span>
            </div>

            <!-- Definition -->
            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(k.descKm, k.descEn) }}
            </p>

            <!-- Simile Box -->
            <div class="mt-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs">
              <strong class="font-bold text-amber-700 dark:text-amber-300 block mb-1">
                🌊 {{ t(k.simileTitleKm, k.simileTitleEn) }}
              </strong>
              <p class="text-stone-600 dark:text-stone-300 leading-relaxed">{{ t(k.simileDescKm, k.simileDescEn) }}</p>
            </div>
          </div>

          <!-- Vipassana Contemplation -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2.5 rounded-lg bg-stone-500/5 border border-stone-500/15">
              <span class="font-bold text-stone-700 dark:text-stone-300 block mb-0.5">
                👁️ {{ t('ការពិចារណាវិបស្សនា ៖', 'Insight Reflection:') }}
              </span>
              <span class="text-stone-600 dark:text-stone-400">{{ t(k.contemplationKm, k.contemplationEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Upadanakkhandha / Source of Clinging -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>⚡</span>
        <span>{{ t('ឧបាទានក្ខន្ធ ៥ ៖ ឫសគល់នៃសេចក្តីទុក្ខទាំងអស់', 'Upādānakkhandha: The 5 Clinging-Aggregates') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ខន្ធទាំង ៥ ដោយខ្លួនឯងគ្រាន់តែជាបាតុភូតធម្មជាតិប៉ុណ្ណោះ វាមិនមែនជាទុក្ខដោយផ្ទាល់ឡើយ។ ប៉ុន្តែ «ការចូលទៅប្រកាន់មាំក្នុងខន្ធ ៥» (ឧបាទានក្ខន្ធ ៥) ដោយគិតថា «រូបជារបស់ខ្ញុំ, វេទនាជារបស់ខ្ញុំ, គំនិតជារបស់ខ្ញុំ» នេះហើយជាឫសគល់នៃទុក្ខពិតប្រាកដ។ ដូចពាក្យក្នុងធម្មចក្កប្បវត្តនសូត្រថា «សំខិត្តេន បញ្ចុបាទានក្ខន្ធា ទុក្ខា» — សង្ខេបមក ឧបាទានក្ខន្ធទាំង ៥ គឺជាតួទុក្ខ!', 'The five aggregates in themselves are merely natural flowing phenomena. The real agony arises from CLINGING to them (Upādāna)—grasping them with craving and delusion as "This is mine, this I am, this is my permanent self". As the Buddha summarized in the first discourse: "In brief, the five clinging-aggregates are suffering!" Letting go of ownership dissolves the weight of world.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const aggregates = [
  {
    id: 1,
    num: '១',
    titleKm: 'រូបក្ខន្ធ (គំនររូបកាយ & រូបធម៌)',
    titleEn: 'Aggregate of Form (Rūpa)',
    pali: 'Rūpakkhandha — មហាភូតរូប ៤ និងឧបាទាយរូប ២៤',
    icon: '🧘',
    descKm: 'រូបកាយសាច់ឈាម សរសៃ ឆ្អឹង ព្រមទាំងរូបធាតុខាងក្រៅ ដែលផ្សំឡើងពីធាតុ ៤ គឺ ដី (បឋវី), ទឹក (អាបោ), ភ្លើង (តេជោ), និងខ្យល់ (វាយោ)។',
    descEn: 'The physical body and material environment, constituted by the four primary elements (earth/solidity, water/cohesion, fire/temperature, wind/motion) and derived physical qualities.',
    simileTitleKm: 'ឧបមាដុំពពុះទឹកលើទន្លេគង្គា (Pheṇapiṇḍa)',
    simileTitleEn: 'Like a lump of river foam',
    simileDescKm: 'ដូចដុំពពុះទឹកដែលរសាត់តាមខ្សែទឹក បើមនុស្សយកដៃទៅចាប់ច្របាច់ នឹងឃើញថាខាងក្នុងប្រហោងធ្លុង គ្មានខ្លឹមសារអីបន្តិចឡើយ យ៉ាងណាមិញ រូបកាយក៏ទទេស្អាតដូច្នោះដែរ។',
    simileDescEn: 'Like a mass of foam floating down the river; examined closely, it is empty, hollow, and void of substantial essence.',
    contemplationKm: 'មើលឃើញរូបកាយត្រឹមតែជាធាតុដី ទឹក ភ្លើង ខ្យល់ ដែលត្រូវរលាយរលត់ មិនមែនជាសម្រស់អមតៈ។',
    contemplationEn: 'View the body as an organic assemblage of 4 changing elements destined to decay, completely devoid of an eternal self.',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'វេទនាក្ខន្ធ (គំនរការដឹងអារម្មណ៍សុខ-ទុក្ខ)',
    titleEn: 'Aggregate of Feeling (Vedanā)',
    pali: 'Vedanākkhandha — សុខវេទនា, ទុក្ខវេទនា, អទុក្ខមសុខវេទនា',
    icon: '💓',
    descKm: 'ការទទួលអារម្មណ៍ដែលកើតឡើងពេលវិញ្ញាណប៉ះខ្ទប់នឹងអារម្មណ៍ (ផស្សៈ) រួមមាន ៖ សេចក្តីសុខស្រួល (សុខ), សេចក្តីឈឺចាប់មិនស្រួល (ទុក្ខ), និងអារម្មណ៍កណ្តាលមិនសុខមិនទុក្ខ (ឧបេក្ខា)។',
    descEn: 'The affective tone experienced at sensory contact: pleasant (Sukha), painful/unpleasant (Dukkha), or neutral/neither-painful-nor-pleasant (Upekkhā).',
    simileTitleKm: 'ឧបមាពពុះទឹកភ្លៀងលើថ្លុក (Pubbuḷa)',
    simileTitleEn: 'Like a bubble on rain puddle',
    simileDescKm: 'ដូចជាពពុះទឹកដែលផុសឡើងពេលតំណក់ទឹកភ្លៀងធ្លាក់ប៉ះដី កើតឡើងមួយភ្លែតក៏បែកធ្លាយរលាយបាត់ភ្លាម រក្សាទុកមិនបានឡើយ វេទនាក៏រលត់លឿនដូច្នោះដែរ។',
    simileDescEn: 'Like bubbles forming on the water surface during heavy rain—bursting and dissolving the moment they touch the air.',
    contemplationKm: 'កុំលោភនឹងសុខ កុំខឹងនឹងទុក្ខ គ្រាន់តែដឹងថាវាជាពពុះទឹកដែលកើតហើយបែករលាយ។',
    contemplationEn: 'Do not chase pleasure or resist pain; see them both as fragile bubbles popping continuously in awareness.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'សញ្ញាក្ខន្ធ (គំនរការចងចាំ & កត់សម្គាល់)',
    titleEn: 'Aggregate of Perception (Saññā)',
    pali: 'Saññākkhandha — ការចាំរូប សំឡេង ក្លិន រស សម្ផស្ស ធម្មារម្មណ៍',
    icon: '🏷️',
    descKm: 'មុខងារនៃចិត្តក្នុងការកត់ត្រា និងសម្គាល់វត្ថុ ដូចជាសម្គាល់ថា «នេះពណ៌ខៀវ», «នេះសំឡេងពិរោះ», «នេះជាមនុស្សដែលធ្លាប់ស្គាល់»។',
    descEn: 'The cognitive faculty that labels, recognizes, and categorizes incoming impressions by matching sensory inputs with stored memory.',
    simileTitleKm: 'ឧបមាថ្ងៃបោកស្រមោលកណ្តាលវាល (Marīcikā)',
    simileTitleEn: 'Like a desert mirage',
    simileDescKm: 'ដូចជាថ្ងៃបោកស្រមោលកណ្តាលវាលខ្សាច់ មើលពីចម្ងាយស្មានតែបឹងទឹកថ្លា តែពេលដើរទៅដល់ គ្មានទឹកសូម្បីមួយតំណក់ សញ្ញាក៏តែងតែបញ្ឆោតភ្នែកដូច្នោះដែរ។',
    simileDescEn: 'Like a shimmering mirage on hot sand; from afar it deceives deer into seeing cool water, but approaching yields nothing real.',
    contemplationKm: 'ដឹងទាន់ថាការកត់សម្គាល់ និងស្លាកយីហោដែលចិត្តដាក់ឱ្យមនុស្សជុំវិញ គ្រាន់តែជាការសន្មតបញ្ឆោតភ្នែក។',
    contemplationEn: 'Recognize that mental labels and subjective interpretations are fragile perceptual mirages, not ultimate reality.',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'សង្ខារក្ខន្ធ (គំនរចេតនា & គំនិតតាក់តែងចិត្ត)',
    titleEn: 'Aggregate of Formations (Saṅkhāra)',
    pali: 'Saṅkhārakkhandha — ចេតសិក ៥០ ដួង (លោភៈ ទោសៈ មេត្តា បញ្ញា)',
    icon: '⚙️',
    descKm: 'កម្លាំងចេតនា និងគំនិតទាំងឡាយដែលជំរុញឱ្យចិត្តធ្វើអំពើ (កម្ម) រួមមាន គំនិតល្អ (កុសល) ដូចជាមេត្តា បញ្ញា សទ្ធា និងគំនិតអាក្រក់ (អកុសល) ដូចជាកំហឹង លោភលន់ ច្រណែន។',
    descEn: 'Volitional activities and psychological factors that condition action (Kamma)—encompassing wholesome states (compassion, wisdom) and unwholesome states (greed, anger, envy).',
    simileTitleKm: 'ឧបមាដើមចេកគ្មានខ្លឹម (Kadalī)',
    simileTitleEn: 'Like a hollow plantain trunk',
    simileDescKm: 'បុរសម្នាក់ចង់បានឈើខ្លឹម ទៅកាប់ដើមចេក រួចបកស្រទាប់ម្តងមួយៗ រហូតអស់ដើមចេក នៅតែរកខ្លឹមឈើមិនឃើញ យ៉ាងណាមិញ គំនិតសង្ខារក៏គ្មានខ្លឹមអមតៈឡើយ។',
    simileDescEn: 'Like an artisan peeling the layers of a banana trunk looking for solid heartwood; peeling to the end reveals zero core wood.',
    contemplationKm: 'មើលឃើញចេតនានិងគំនិតជាស្រទាប់ចេកដែលរសាត់កាត់ចិត្ត កុំចាត់ទុកគំនិតថាជា «ខ្ញុំ»។',
    contemplationEn: 'Observe intentional impulses as hollow sheath layers; see thoughts without identifying as the thinker.',
  },
  {
    id: 5,
    num: '៥',
    titleKm: 'វិញ្ញាណក្ខន្ធ (គំនរការដឹងអារម្មណ៍តាមទ្វារ ៦)',
    titleEn: 'Aggregate of Consciousness (Viññāṇa)',
    pali: 'Viññāṇakkhandha — ចក្ខុវិញ្ញាណ, សោត-, ឃាន-, ជិវ្ហា-, កាយ-, មនោវិញ្ញាណ',
    icon: '🔮',
    descKm: 'ធម្មជាតិដែលដឹងអារម្មណ៍តាមទ្វារទាំង ៦ ៖ ដឹងរូបតាមភ្នែក, ដឹងសំឡេងតាមត្រចៀក, ដឹងក្លិនតាមច្រមុះ, ដឹងរスタាមអណ្តាត, ដឹងសម្ផស្សតាមកាយ, និងដឹងគំនិតតាមចិត្ត។',
    descEn: 'The primary bare awareness operating through the six sense doors: eye-consciousness, ear-, nose-, tongue-, body-, and mind-consciousness.',
    simileTitleKm: 'ឧបមាល្បិចលេងប៉ាហ៊ីមន្តអាគម (Māyā)',
    simileTitleEn: 'Like a magician\'s conjuring trick',
    simileDescKm: 'ដូចជាអ្នកលេងប៉ាហ៊ីសម្តែងកលល្បិចកណ្តាលផ្លូវបួនខ្នែង បង្កើតរូបភាពឱ្យគេឃើញដូចពិត តែតាមពិតគ្មានអ្វីពិតឡើយ វិញ្ញាណក៏បង្កើតអារម្មណ៍បោកបញ្ឆោតដូច្នោះដែរ។',
    simileDescEn: 'Like a magician conjuring optical illusions at a crossroads—appearing dazzlingly concrete, yet vanishing upon close scrutiny.',
    contemplationKm: 'ដឹងថាវិញ្ញាណគ្រាន់តែជាការដឹងដែលកើតឡើងហើយរលត់ទៅវិញរាល់វិនាទី មិនមែនជាព្រលឹងអចិន្ត្រៃយ៍ឡើយ។',
    contemplationEn: 'Directly witness consciousness as momentary blips of cognizance flashing into being and perishing instantly.',
  },
]
</script>
