<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('អភិធម្ម & ជីវិត — ដំណើរនៃការស្លាប់ និងការបដិសន្ធិ', 'ABHIDHAMMA & LIFE — THE PROCESS OF DEATH & REBIRTH') }}</p>
    <h2 class="mt-3 font-display text-2xl sm:text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ដំណើរនៃការស្លាប់ និងការបដិសន្ធិ (មរណាសន្នវិថី)', 'The Death-Proximate Mind & Rebirth Process (Maraṇāsanna Vīthi)') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif italic text-sm sm:text-base md:text-lg leading-relaxed text-center" :style="{ color: 'var(--ink)' }">
        {{ t('«យថា មុទ្ទិកាយ ឆាយា, យថា វា បដិឃោសកោ; ន ច ឥធ ឧដ្ឋិតោ គន្ត្វា, ឥធ សម្បដិបជ្ជតិ»', '«Just as an impression is made by a seal upon wax, or as an echo reverberates, rebirth occurs without any soul migrating.»') }}
      </p>
      <p class="text-xs md:text-sm mt-2 text-center" :style="{ color: 'var(--ink-muted)' }">
        {{ t('— គម្ពីរវិសុទ្ធិមគ្គ (Visuddhimagga — ដំណើរនៃចុតិ និងបដិសន្ធិ)', '— Visuddhimagga (The Continuity of Death and Rebirth Consciousness)') }}
      </p>
    </div>

    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('សេចក្តីស្លាប់ មិនមែនជាទីបញ្ចប់នៃជីវិត ហើយក៏មិនមែនជាការរសាត់អណ្តែតនៃវិញ្ញាណ ឬព្រលឹងទៅរកភពថ្មីដូចជំនឿខុសឆ្គងមួយចំនួននោះឡើយ។ នៅក្នុងពុទ្ធសាសនាថេរវាទ សេចក្តីស្លាប់ គឺគ្រាន់តែជាការរលត់ទៅនៃ «ចុតិចិត្ត» (ចិត្តចុងក្រោយក្នុងជាតិនេះ) ហើយភ្លាមៗនោះ «បដិសន្ធិចិត្ត» (ចិត្តដំបូងនៃជាតិថ្មី) ក៏កើតឡើងតភ្ជាប់គ្នាមិនដាច់ ដោយគ្មានចន្លោះពេលសូម្បីតែមួយវិនាទី (គ្មានអន្តរាភព) ទៅតាមកម្លាំងនៃកម្មដែលបានសាង។ ការយល់ដឹងពីដំណើរនេះ ជួយឱ្យយើងលែងភ័យខ្លាចសេចក្តីស្លាប់ និងចេះរៀបចំចិត្តឱ្យស្ងប់បរិសុទ្ធមុនពេលចាកលោក។', 'Death is neither the total annihilation of existence nor the migration of an immortal soul (attā) wandering through a limbo state. In Theravāda Abhidhamma, death is merely the cessation of the Death Consciousness (Cuti Citta), followed instantaneously and uninterruptedly by the Rebirth-linking Consciousness (Paṭisandhi Citta) in the next plane, powered by karma. Understanding this precise mental process dispels superstitious dread and equips us to cultivate a calm, luminous mind at life’s frontier.') }}
    </p>

    <!-- 1. The 4 Causes of Death (Maraṇuppatti 4) -->
    <div class="card-paper p-4 sm:p-6 md:p-8 mt-6 sm:mt-8">
      <div class="flex items-center gap-2">
        <span class="text-xl">🕯️</span>
        <p class="chapter-label m-0">{{ t('ហេតុនៃការស្លាប់ ៤ យ៉ាង', 'THE 4 CAUSES OF DEATH') }}</p>
      </div>
      <h3 class="font-display text-lg sm:text-xl md:text-2xl mt-2" :style="{ color: 'var(--ink)' }">
        {{ t('តើមនុស្ស និងសត្វស្លាប់ដោយសារអ្វីខ្លះ? (Maraṇuppatti 4)', 'The 4 Modes of Dying (Maraṇuppatti)') }}
      </h3>
      <p class="text-xs md:text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រះអដ្ឋកថាចារ្យបានប្រៀបធៀបជីវិតសត្វលោកទៅនឹង «អណ្តាតភ្លើងនៃចង្កៀងប្រេង» ដែលអាចរលត់ទៅដោយសារហេតុ ៤ ប្រការ៖', 'Ancient masters compared human life to the flame of an oil lamp, which can be extinguished by four causes:') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-5">
        <div class="p-4 rounded-lg" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="text-xl">⏳</span>
            <strong class="text-sm" :style="{ color: 'var(--accent)' }">{{ t('១. អាវុក្ខយៈ (Exhaustion of Lifespan)', '1. Āyukkhaya') }}</strong>
          </div>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ការស្លាប់ព្រោះអស់អាយុធម្មជាតិនៃមនុស្សក្នុងសម័យនោះ (ដូចជាមនុស្សសម័យនេះមានអាយុប្រហែល ៧៥ ទៅ ១០០ ឆ្នាំ ក៏ចាស់ស្លាប់)។ ឧបមាដូចជា ចង្កៀងដែលឆេះអស់ប្រឆេះ។', 'Death due to the exhaustion of the natural human lifespan of that era (e.g. 75-100 years today). Like an oil lamp dying because its wick is completely burnt out.') }}
          </p>
        </div>

        <div class="p-4 rounded-lg" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="text-xl">⚡</span>
            <strong class="text-sm" :style="{ color: 'var(--accent)' }">{{ t('២. កម្មក្ខយៈ (Exhaustion of Kamma)', '2. Kammakkhaya') }}</strong>
          </div>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ការស្លាប់ព្រោះអស់កម្លាំងនៃជនកកម្ម (កម្មដែលនាំឱ្យកើត) ទោះបីអាយុខៃនៅសល់ក៏ដោយ ក៏ស្លាប់មុនអាយុ។ ឧបមាដូចជា ចង្កៀងដែលអស់ប្រេង ទោះប្រឆេះនៅសល់ក៏រលត់។', 'Death due to the exhaustion of the reproductive karmic energy that projected this birth, even if natural lifespan remains. Like an oil lamp running out of oil while the wick remains.') }}
          </p>
        </div>

        <div class="p-4 rounded-lg" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="text-xl">🍂</span>
            <strong class="text-sm" :style="{ color: 'var(--accent)' }">{{ t('៣. ឧភយក្ខយៈ (Exhaustion of Both)', '3. Ubhayakkhaya') }}</strong>
          </div>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ការស្លាប់ព្រោះអស់ទាំងអាយុខៃផង និងអស់ទាំងកម្លាំងកម្មផង ក្នុងពេលតែមួយ។ ឧបមាដូចជា ចង្កៀងដែលអស់ទាំងប្រេង និងអស់ទាំងប្រឆេះព្រមគ្នា។', 'Death due to the simultaneous exhaustion of both lifespan and reproductive karma. Like an oil lamp where both oil and wick run dry together.') }}
          </p>
        </div>

        <div class="p-4 rounded-lg" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="text-xl">🌪️</span>
            <strong class="text-sm" :style="{ color: 'var(--accent)' }">{{ t('៤. ឧបច្ឆេទកកម្ម (Destructive Kamma)', '4. Upacchedaka-kamma') }}</strong>
          </div>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ការស្លាប់ដោយសារកម្មកាត់ផ្តាច់ភ្លាមៗ (ឧបឃាតកកម្ម) ដូចជា គ្រោះថ្នាក់ចរាចរណ៍ គេសម្លាប់ ជំងឺបេះដូងភ្លាមៗ ទោះអាយុនិងកម្មនៅសល់ក៏ដោយ។ ឧបមាដូចជា ចង្កៀងត្រូវខ្យល់បោកបក់រលត់។', 'Premature death caused by a sudden, forceful opposing karma interrupting life (accidents, murder, sudden heart attack). Like a sudden gust of wind blowing out an oil lamp that still had oil and wick.') }}
          </p>
        </div>
      </div>
    </div>

    <!-- 2. The Death-Proximate Thought Process (Maraṇāsanna Vīthi) -->
    <div class="card-paper p-4 sm:p-6 md:p-8 mt-6 sm:mt-8">
      <div class="flex items-center gap-2">
        <span class="text-xl">🧠</span>
        <p class="chapter-label m-0">{{ t('វិថីចិត្តជិតស្លាប់ (MARAṆĀSANNA VĪTHI)', 'DEATH-PROXIMATE THOUGHT PROCESS') }}</p>
      </div>
      <h3 class="font-display text-lg sm:text-xl md:text-2xl mt-2" :style="{ color: 'var(--ink)' }">
        {{ t('តើចិត្តដំណើរការយ៉ាងណា នៅខណៈពេលចុងក្រោយនៃជីវិត?', 'How Does Consciousness Transition at the Moment of Death?') }}
      </h3>
      <p class="text-xs md:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('នៅពេលកាយវិការ និងដង្ហើមចាប់ផ្តើមខ្សោយទៅៗ ចិត្តនឹងរត់ចូលទៅក្នុង «មរណាសន្នវិថី» (វិថីចិត្តជិតស្លាប់) ដែលមានដំណើរលំដាប់លំដោយដូចខាងក្រោម៖', 'As breathing fades and bodily faculties dissolve, the mind enters the Maraṇāsanna Vīthi (Death-proximate Thought Process) comprising the following exact stages:') }}
      </p>

      <!-- Visual Step-by-Step Vīthi Pipeline -->
      <div class="space-y-3 mt-4 sm:mt-5">
        <div class="p-3.5 rounded-lg flex items-start gap-3" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="sutra-num font-bold text-sm shrink-0">១</span>
          <div>
            <strong class="text-sm" :style="{ color: 'var(--ink)' }">{{ t('ភវង្គចលនៈ & ភវង្គុបច្ឆេទ (Bhavanga Vibration & Arrest)', 'Bhavaṅga Calana & Upaccheda') }}</strong>
            <p class="text-xs mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
              {{ t('ចរន្តនៃភវង្គចិត្ត (ចិត្តដែលរក្សាខ្សែជីវិត) ញាប់ញ័រ ហើយដាច់ស្រឡះ ដើម្បីបើកផ្លូវឱ្យវិថីចិត្តថ្មីទទួលអារម្មណ៍ចុងក្រោយ។', 'The stream of life-continuum vibrates and cuts off, readying the mental door to apprehend the final karmic object.') }}
            </p>
          </div>
        </div>

        <div class="p-3.5 rounded-lg flex items-start gap-3" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="sutra-num font-bold text-sm shrink-0">២</span>
          <div>
            <strong class="text-sm" :style="{ color: 'var(--ink)' }">{{ t('មនោទ្វារាវជ្ជនៈ (Mind-Door Adverting)', 'Mano-dvārāvajjana') }}</strong>
            <p class="text-xs mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
              {{ t('ចិត្តបែរឆ្ពោះទៅកាន់អារម្មណ៍ចុងក្រោយ (កម្ម, កម្មនិមិត្ត, ឬគតិនិមិត្ត) ដែលមកបង្ហាញតាមទ្វារចិត្ត។', 'Consciousness adverts to the terminal object (the kamma, sign of kamma, or sign of destiny) manifesting at the mind-door.') }}
            </p>
          </div>
        </div>

        <div class="p-3.5 rounded-lg flex items-start gap-3" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--accent)' }">
          <span class="sutra-num font-bold text-sm shrink-0 text-amber-700">៣</span>
          <div>
            <strong class="text-sm" :style="{ color: 'var(--accent-bright)' }">
              ⭐ {{ t('មរណាសន្នជវនៈ ៥ ខណៈ (The 5 Death Javana Moments)', '5 Death-Proximate Javana Moments') }}
            </strong>
            <p class="text-xs mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t('ធម្មតាជវនចិត្តរត់ ៧ ខណៈ ប៉ុន្តែនៅពេលជិតស្លាប់ ដោយសារបេះដូង និងកម្លាំងកាយទន់ខ្សោយខ្លាំង ជវនចិត្តរត់បានត្រឹមតែ **៥ ខណៈប៉ុណ្ណោះ!** ៥ ខណៈនេះហើយជាអ្នកកំណត់ជោគវាសនាថា ជាតិថ្មីត្រូវទៅសុគតិភព ឬអបាយភូមិ!', 'Normally, Javana (active volitional cognition) runs for 7 moments; but at death, due to bodily feebleness, **it runs for only 5 moments!** These 5 critical moments formulate the karmic imprint dictating immediate rebirth!') }}
            </p>
          </div>
        </div>

        <div class="p-3.5 rounded-lg flex items-start gap-3" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <span class="sutra-num font-bold text-sm shrink-0">៤</span>
          <div>
            <strong class="text-sm" :style="{ color: 'var(--ink)' }">{{ t('ចុតិចិត្ត (Cuti Citta — Death Consciousness)', 'Cuti Citta (Death Mind)') }}</strong>
            <p class="text-xs mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
              {{ t('ជាចិត្តចុងក្រោយបង្អស់ក្នុងជាតិនេះ។ ពេលចុតិចិត្តរលត់ ជីវិតក្នុងជាតិនេះត្រូវបានបញ្ចប់ជាស្ថាពរ! ខ្យល់ដង្ហើម និងកម្តៅកាយរលត់អស់។', 'The very last consciousness of this lifetime. When Cuti Citta expires, this physical existence terminates permanently.') }}
            </p>
          </div>
        </div>

        <div class="p-3.5 rounded-lg flex items-start gap-3" :style="{ background: 'var(--accent-soft)', border: '2px solid var(--accent)' }">
          <span class="sutra-num font-bold text-sm shrink-0 text-emerald-700">៥</span>
          <div>
            <strong class="text-sm" :style="{ color: 'var(--accent)' }">
              ⚡ {{ t('បដិសន្ធិចិត្ត (Paṭisandhi Citta — Rebirth Consciousness)', 'Paṭisandhi Citta (Rebirth Mind)') }}
            </strong>
            <p class="text-xs mt-1 leading-relaxed" :style="{ color: 'var(--ink)' }">
              {{ t('**ភ្លាមៗបន្ទាប់ពីចុតិចិត្តរលត់ ដោយគ្មានចន្លោះពេលសូម្បីមួយប៉ប្រិចភ្នែក (អនន្តរបច្ច័យ)** បដិសន្ធិចិត្តក៏កើតឡើងភ្លាមក្នុងភពថ្មី! គ្មានវិញ្ញាណអណ្តែតត្រសែត គ្មានការដើររកផ្ទៃពោះ ៧ ថ្ងៃ ឬ ៤៩ ថ្ងៃដូចជំនឿក្រៅសាសនាឡើយ។ ដូចជាការយកត្រាមកបោះលើដុំក្រមួន ពេលដកត្រាចេញ រូបស្នាមក៏កើតឡើងភ្លាម!', '**Instantly after Cuti Citta ceases, with ZERO gap of time (anantara-paccaya)**, Paṭisandhi Citta arises in the new realm! No wandering ghost, no 49-day bardo limbo. Like a brass seal pressed upon warm wax: the instant the stamp lifts, the impression is fully born!') }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. The 3 Signs at Death (Kamma, Kamma Nimitta, Gati Nimitta) -->
    <div class="card-paper p-4 sm:p-6 md:p-8 mt-6 sm:mt-8">
      <div class="flex items-center gap-2">
        <span class="text-xl">🔮</span>
        <p class="chapter-label m-0">{{ t('និមិត្ត ៣ ប្រការ', 'THE 3 TERMINAL SIGNS') }}</p>
      </div>
      <h3 class="font-display text-lg sm:text-xl md:text-2xl mt-2" :style="{ color: 'var(--ink)' }">
        {{ t('និមិត្ត ៣ យ៉ាងដែលលេចឡើងក្នុងចិត្តជិតស្លាប់', 'The 3 Signs Manifesting at the Death-Door') }}
      </h3>
      <p class="text-xs md:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('នៅខណៈពេលជិតស្លាប់ ចិត្តនឹងចាប់យកអារម្មណ៍មួយក្នុងចំណោម ៣ យ៉ាងនេះជាអារម្មណ៍ចុងក្រោយ៖', 'At the death threshold, the mind involuntarily grasps one of these three objects as its final terminal impression:') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 mt-4 sm:mt-5">
        <!-- 1. Kamma -->
        <div class="p-4 rounded-lg" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="text-xl">📜</span>
            <strong class="text-sm" :style="{ color: 'var(--ink)' }">{{ t('១. កម្ម (Kamma)', '1. Kamma (Action)') }}</strong>
          </div>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ការចងចាំនូវអំពើល្អ ឬអំពើអាក្រក់ដែលខ្លួនធ្លាប់បានធ្វើក្នុងអតីតកាល លេចឡើងច្បាស់ក្រឡែតក្នុងចិត្តដូចទើបនឹងធ្វើកាលពីម្សិលមិញ (ដូចជា ការធ្លាប់ធ្វើទាន ការសម្លាប់សត្វ ការជួយសង្គ្រោះអ្នកដទៃ)។', 'The direct memory of past deeds (good or bad) flashing across the mind with overwhelming vividness, as if performed just moments ago.') }}
          </p>
        </div>

        <!-- 2. Kamma Nimitta -->
        <div class="p-4 rounded-lg" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="text-xl">🪷</span>
            <strong class="text-sm" :style="{ color: 'var(--ink)' }">{{ t('២. កម្មនិមិត្ត (Kamma Nimitta)', '2. Kamma Nimitta (Sign of Action)') }}</strong>
          </div>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ការឃើញនូវវត្ថុ ឬឧបករណ៍ដែលទាក់ទងនឹងអំពើនោះ៖ បើធ្លាប់ធ្វើបុណ្យ ឃើញស្បង់ជីវរ ព្រះពុទ្ធរូប ផ្កាឈូក វត្តអារាម; បើធ្លាប់ធ្វើបាប ឃើញកាំបិត សាច់ឈាម អាវុធ សំណាញ់ ឬលុយកាក់ដែលធ្លាប់លួច។', 'Visions of physical objects, instruments, or people associated with the deed: robes, stūpas, monks for merit; or knives, blood, hunting rifles, and stolen wealth for demerit.') }}
          </p>
        </div>

        <!-- 3. Gati Nimitta -->
        <div class="p-4 rounded-lg" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <div class="flex items-center gap-2">
            <span class="text-xl">🏰</span>
            <strong class="text-sm" :style="{ color: 'var(--ink)' }">{{ t('៣. គតិនិមិត្ត (Gati Nimitta)', '3. Gati Nimitta (Sign of Destiny)') }}</strong>
          </div>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ការឃើញនូវសញ្ញា ឬរូបភាពនៃភពដែលខ្លួនត្រូវទៅកើត៖ ឃើញភ្លើងនរក ឆ្នាំងខ្ទះ (ធ្លាក់នរក); ឃើញព្រៃឈើជ្រលងភ្នំ (សត្វ); ឃើញផ្ទៃពោះម្តាយ ផ្ទះស្អាត (មនុស្ស); ឃើញវិមានទិព្វ ទេវតា រទេះទិព្វ (សួគ៌)!', 'Visions foreshadowing the destination realm: dark fires and cauldrons (hell); desolate ravines (pretas); forests (animals); a mother’s womb (human); radiant celestial mansions and chariots (devaloka)!') }}
          </p>
        </div>
      </div>

      <!-- Can Gati Nimitta Be Changed? -->
      <div class="mt-5 p-4 rounded-lg" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--accent)' }">
        <p class="text-xs font-bold uppercase tracking-wider mb-1" :style="{ color: 'var(--accent-bright)' }">
          💡 {{ t('តើអាចប្តូរគតិនិមិត្តអាក្រក់ឱ្យក្លាយជាល្អនៅនាទីចុងក្រោយបានទេ?', 'Can a Bad Destiny Sign Be Changed at the Last Minute?') }}
        </p>
        <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
          {{ t('**អាចប្តូរបាន!** ក្នុងអដ្ឋកថាមានរឿងព្រានព្រៃម្នាក់ឈ្មោះ សោណៈ ជិតស្លាប់ស្រែកថា «ឆ្កែនរកមកខាំខ្ញុំហើយ!» (គតិនិមិត្តនរក)។ កូនប្រុសរបស់គាត់ដែលជាព្រះថេរៈ បានយកផ្កាឈូកមកឱ្យឪពុកថ្វាយព្រះពុទ្ធរូប រួចនិមន្តព្រះសង្ឃសូត្រធម៌ ហើយដាស់តឿនឪពុកឱ្យអនុមោទនាបុណ្យ។ ចិត្តរបស់ព្រានព្រៃក៏ស្ងប់ ហើយបន្លឺថា «ឆ្កែនរកទៅបាត់ហើយ ឥឡូវឃើញវិមានសួគ៌ និងទេពអប្សរមកទទួលខ្ញុំវិញ!» រួចក៏ស្លាប់ទៅកើតឋានសួគ៌ភ្លាម!', '**YES, IT CAN!** The commentaries recount the hunter Soṇa whose father near death screamed: "Hell hounds are coming to tear me apart!" His monk son swiftly gathered lotus flowers, offered them before the Buddha statue in his father’s name, gathered monks to chant, and urged his father to rejoice. The dying man’s mind softened into faith; he smiled: "The hounds are gone; beautiful celestial nymphs and golden chariots have arrived!" and passed away peacefully to heaven.') }}
        </p>
      </div>
    </div>

    <!-- 4. Practical Bedside Guide for the Dying (អាសន្នកុសល) -->
    <div class="card-paper p-4 sm:p-6 md:p-8 mt-6 sm:mt-8">
      <div class="flex items-center gap-2">
        <span class="text-xl">🤝</span>
        <p class="chapter-label m-0">{{ t('មគ្គុទ្ទេសក៍ជាក់ស្តែង', 'PRACTICAL BEDSIDE GUIDE') }}</p>
      </div>
      <h3 class="font-display text-lg sm:text-xl md:text-2xl mt-2" :style="{ color: 'var(--ink)' }">
        {{ t('៧ វិធីជួយដាស់តឿនស្មារតីមនុស្សជិតស្លាប់ (Compassionate Bedside Assistance)', '7 Steps to Support a Dying Loved One with Dhamma') }}
      </h3>
      <p class="text-xs md:text-sm mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('កាតព្វកិច្ចដ៏ឧត្តមបំផុតរបស់កូនចៅ និងញាតិមិត្ត គឺជួយឱ្យអ្នកជំងឺជិតស្លាប់មានចិត្តបរិសុទ្ធ មិនភ័យខ្លាច៖', 'The highest debt of gratitude children and friends can repay is steering a dying relative’s mind toward tranquility and virtue:') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mt-4">
        <div class="p-3.5 rounded-lg flex items-start gap-2.5" :style="{ background: 'var(--bg-card-2)' }">
          <span class="text-base">🤫</span>
          <div class="text-xs leading-relaxed">
            <strong :style="{ color: 'var(--ink)' }">{{ t('១. រក្សាបរិយាកាសស្ងប់ស្ងាត់ (Quiet Space)', '1. Calm Environment') }}</strong>
            <p class="mt-1" :style="{ color: 'var(--ink-muted)' }">{{ t('ហាមយំសោក ទ្រហោយំ ឬទាស់ទែងគ្នានៅក្បែរអ្នកជំងឺ ព្រោះធ្វើឱ្យគាត់កើតទោសៈ ឬអាឡោះអាល័យ។', 'Forbid loud weeping, wailing, or arguments near the bed; negative emotional outbursts agitate the dying mind into aversion or sorrow.') }}</p>
          </div>
        </div>

        <div class="p-3.5 rounded-lg flex items-start gap-2.5" :style="{ background: 'var(--bg-card-2)' }">
          <span class="text-base">💎</span>
          <div class="text-xs leading-relaxed">
            <strong :style="{ color: 'var(--ink)' }">{{ t('២. រឭកគុណបុណ្យកុសល (Recalling Merits)', '2. Recalling Life Virtues') }}</strong>
            <p class="mt-1" :style="{ color: 'var(--ink-muted)' }">{{ t('ខ្សឹបប្រាប់ថ្នមៗនូវបុណ្យដែលគាត់ធ្លាប់បានធ្វើកន្លងមក (បានសាងវត្ត បានបួសកូន រក្សាសីល ធ្វើទាន)។', 'Gently whisper into their ear the good deeds they performed in life (alms given, pagodas supported, precepts kept, love shown).') }}</p>
          </div>
        </div>

        <div class="p-3.5 rounded-lg flex items-start gap-2.5" :style="{ background: 'var(--bg-card-2)' }">
          <span class="text-base">📿</span>
          <div class="text-xs leading-relaxed">
            <strong :style="{ color: 'var(--ink)' }">{{ t('៣. ចាក់ ឬសូត្រធម៌បរិត្ត (Sacred Chanting)', '3. Chanting Parittas') }}</strong>
            <p class="mt-1" :style="{ color: 'var(--ink-muted)' }">{{ t('សូត្រធម៌ថ្នមៗ ដូចជា ឥតិបិសោ, ករណីយមេត្តសូត្រ, ឬពោជ្ឈង្គសូត្រ ដើម្បីឱ្យសម្លេងធម៌ជ្រួតជ្រាបក្នុងចិត្ត។', 'Chant softly or play gentle recordings of the Itipiso, Metta Sutta, or Bojjhanga Paritta to envelop them in peaceful sacred resonance.') }}</p>
          </div>
        </div>

        <div class="p-3.5 rounded-lg flex items-start gap-2.5" :style="{ background: 'var(--bg-card-2)' }">
          <span class="text-base">🌸</span>
          <div class="text-xs leading-relaxed">
            <strong :style="{ color: 'var(--ink)' }">{{ t('៤. ដាក់ផ្កា ឬព្រះពុទ្ធរូបក្នុងគំហើញ (Holy Objects)', '4. Sacred Sights') }}</strong>
            <p class="mt-1" :style="{ color: 'var(--ink-muted)' }">{{ t('ដាក់ផ្កាឈូក ឬព្រះពុទ្ធរូបនៅទីតាំងដែលគាត់ងាយមើលឃើញ ដើម្បីញ៉ាំងឱ្យកើតកម្មនិមិត្តល្អ។', 'Place fresh lotus flowers or a serene Buddha statue within their line of sight to stimulate wholesome kamma-nimittas.') }}</p>
          </div>
        </div>

        <div class="p-3.5 rounded-lg flex items-start gap-2.5" :style="{ background: 'var(--bg-card-2)' }">
          <span class="text-base">🕊️</span>
          <div class="text-xs leading-relaxed">
            <strong :style="{ color: 'var(--ink)' }">{{ t('៥. ដាស់តឿនឱ្យលះបង់ការជាប់ជំពាក់ (Release Attachment)', '5. Letting Go') }}</strong>
            <p class="mt-1" :style="{ color: 'var(--ink-muted)' }">{{ t('ប្រាប់គាត់កុំឱ្យបារម្ភពីកូនចៅ ឬទ្រព្យសម្បត្តិ គ្រួសាររៀបចំបានល្អហើយ សូមឱ្យគាត់តម្កល់ចិត្តលើព្រះត្រៃរតន៍។', 'Reassure them that family and assets are well cared for; encourage complete relinquishment of worldly anxiety.') }}</p>
          </div>
        </div>

        <div class="p-3.5 rounded-lg flex items-start gap-2.5" :style="{ background: 'var(--bg-card-2)' }">
          <span class="text-base">🧘</span>
          <div class="text-xs leading-relaxed">
            <strong :style="{ color: 'var(--ink)' }">{{ t('៦. ភាវនា «ពុទ្ធោ» ឬដង្ហើមចេញចូល (Breath Contemplation)', '6. Mindful Breathing') }}</strong>
            <p class="mt-1" :style="{ color: 'var(--ink-muted)' }">{{ t('ណែនាំឱ្យគាត់នឹកពាក្យ «ពុទ្ធោ» តាមខ្យល់ដង្ហើម ឬដឹងដង្ហើមចេញចូលរហូតដល់ដង្ហើមចុងក្រោយ។', 'Invite them to recite "Buddho" mentally with each breath or remain calmly anchored in the touch of breathing.') }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 5. How to Prepare Ourselves Everyday -->
    <div class="card-paper p-4 sm:p-6 md:p-8 mt-6 sm:mt-8" :style="{ borderColor: 'var(--accent)', background: 'var(--accent-soft)' }">
      <div class="flex items-center gap-2">
        <span class="text-xl">☸️</span>
        <p class="chapter-label m-0">{{ t('ការត្រៀមខ្លួនរាល់ថ្ងៃ', 'DAILY PREPARATION') }}</p>
      </div>
      <h3 class="font-display text-lg sm:text-xl md:text-2xl mt-2" :style="{ color: 'var(--ink)' }">
        {{ t('អភិណ្ហបច្ចវេក្ខណៈ — ពិចារណាលើសេចក្តីស្លាប់ជាប្រចាំ', 'Abhiṇhapaccavekkhaṇa — The 5 Daily Recollections') }}
      </h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រះពុទ្ធទ្រង់ត្រាស់ឱ្យពុទ្ធបរិស័ទគ្រប់រូប ទាំងបព្វជិត ទាំងគ្រហស្ថ គប្បីរឭកពិចារណាជារៀងរាល់ថ្ងៃថា៖', 'The Buddha instructed all disciples, monastic and lay alike, to reflect daily upon these five unavoidable facts:') }}
      </p>
      <ul class="tick-list mt-3 text-xs leading-relaxed">
        <li><strong>{{ t('១. ជរាធម្មោមិ ជរំ អនតីតោ — អាត្មាអញមានសេចក្តីចាស់ជាធម្មតា មិនកន្លងសេចក្តីចាស់ទៅបានឡើយ។', '1. I am of the nature to age; I have not gone beyond aging.') }}</strong></li>
        <li><strong>{{ t('២. ព្យាធិធម្មោមិ ព្យាធិំ អនតីតោ — អាត្មាអញមានសេចក្តីឈឺជាធម្មតា មិនកន្លងសេចក្តីឈឺទៅបានឡើយ។', '2. I am of the nature to sicken; I have not gone beyond illness.') }}</strong></li>
        <li><strong>{{ t('៣. មរណធម្មោមិ មរណំ អនតីតោ — អាត្មាអញមានសេចក្តីស្លាប់ជាធម្មតា មិនកន្លងសេចក្តីស្លាប់ទៅបានឡើយ។', '3. I am of the nature to die; I have not gone beyond death.') }}</strong></li>
        <li><strong>{{ t('៤. សព្វេហិ មេ បិយេហិ មនាបេហិ នានាភាវោ វិនាភាវោ — អាត្មាអញគង់ព្រាត់ប្រាសពីសត្វនិងសង្ខារជាទីស្រឡាញ់ទាំងអស់។', '4. All that is dear and delightful to me will change and vanish.') }}</strong></li>
        <li><strong>{{ t('៥. កម្មស្សកោមិ កម្មទាយាទោ — អាត្មាអញមានកម្មជារបស់ខ្លួន មានកម្មជាកេរដំណែល កម្មល្អក្តី អាក្រក់ក្តី អាត្មាអញនឹងទទួលផលនៃកម្មនោះ។', '5. I am owner of my kamma, heir to my kamma; whatever deed I do, good or bad, to that I shall be heir.') }}</strong></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()
</script>
