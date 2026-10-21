<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('ធម៌គន្លឹះ — បដិច្ចសមុប្បាទ (ចក្រវាឡវិទ្យា & ហេតុផលនៃទុក្ខ)', 'KEY TEACHING — PAṬICCASAMUPPĀDA (DEPENDENT ORIGINATION)') }}</p>
    <h2 class="mt-3 font-display text-2xl sm:text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('បដិច្ចសមុប្បាទ — ខ្សែច្រវាក់នៃហេតុ និងផល ១២ អង្គ', 'Paṭiccasamuppāda — The Twelve Links of Dependent Origination') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif italic text-sm sm:text-base md:text-lg leading-relaxed text-center" :style="{ color: 'var(--ink)' }">
        {{ t('«យោ បដិច្ចសមុប្បាទំ បស្សតិ, សោ ធម្មំ បស្សតិ; យោ ធម្មំ បស្សតិ, សោ មំ បស្សតិ»', '«Yo paṭiccasamuppādaṃ passati, so dhammaṃ passati; yo dhammaṃ passati, so maṃ passati»') }}
      </p>
      <p class="text-xs md:text-sm mt-2 text-center" :style="{ color: 'var(--ink-muted)' }">
        {{ t('«អ្នកណាឃើញបដិច្ចសមុប្បាទ អ្នកនោះឈ្មោះថាឃើញធម៌; អ្នកណាឃើញធម៌ អ្នកនោះឈ្មោះថាឃើញតថាគត» (ម. ម. ២៨)', '«One who sees dependent origination sees the Dhamma; one who sees the Dhamma sees me.» (MN 28)') }}
      </p>
    </div>

    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('បដិច្ចសមុប្បាទ (Paṭicca = អាស្រ័យ + Samuppāda = ការកើតឡើងព្រម) គឺជាបេះដូងនៃពុទ្ធសាសនា ដែលពន្យល់ពីដំណើរធម្មជាតិពិតថា៖ គ្មានអ្វីកើតឡើងដោយចៃដន្យ ដោយព្រះអាទិទេពបង្កើត ឬដោយគ្មានហេតុឡើយ។ អ្វីៗទាំងអស់កើតឡើងអាស្រ័យលើបច្ច័យ បើហេតុមាន ផលទើបមាន; បើហេតុរលត់ ផលក៏រលត់។ នេះជាធម៌កណ្តាល (មជ្ឈិមទេសនា) ដែលបដិសេធសស្សតទិដ្ឋិ (ការជឿថាមិនស្លាប់/មានព្រលឹងទៀង) និងឧច្ឆេទទិដ្ឋិ (ការជឿថាស្លាប់ទៅសូន្យ)។', 'Paṭiccasamuppāda (Dependent Origination) is the profound heart of Buddhist philosophy. It demonstrates that nothing arises by divine whim, chance, or without cause. All physical and mental phenomena arise conditioned by antecedent factors: when this is, that comes to be; with the cessation of this, that ceases. It is the Middle Teaching that steers clear of Eternalism (Sassata-diṭṭhi) and Annihilationism (Uccheda-diṭṭhi).') }}
    </p>

    <!-- Mode Selector: Anuloma vs Patiloma -->
    <div class="card-paper p-4 sm:p-5 md:p-6 mt-6 sm:mt-8">
      <div class="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p class="text-[10px] font-bold tracking-wider uppercase" :style="{ color: 'var(--ink-muted)' }">
            {{ t('ទិសដៅនៃការពិចារណា (DIRECTION OF CONTEMPLATION)', 'DIRECTION OF CONTEMPLATION') }}
          </p>
          <div class="flex items-center gap-2 mt-2 flex-wrap">
            <button
              type="button"
              class="lang-pick px-3 py-1.5 text-xs font-bold transition flex items-center gap-1.5"
              :class="viewMode === 'anuloma' ? 'on' : ''"
              @click="viewMode = 'anuloma'"
            >
              <span>🌱</span>
              <span>{{ t('អនុលោម (កើតទុក្ខ)', 'Anuloma (Origin)') }}</span>
            </button>
            <button
              type="button"
              class="lang-pick px-3 py-1.5 text-xs font-bold transition flex items-center gap-1.5"
              :class="viewMode === 'patiloma' ? 'on' : ''"
              @click="viewMode = 'patiloma'"
            >
              <span>🕊️</span>
              <span>{{ t('បដិលោម (រលត់ទុក្ខ)', 'Paṭiloma (Cessation)') }}</span>
            </button>
          </div>
        </div>

        <div class="text-xs" :style="{ color: 'var(--ink-muted)' }">
          💡 {{ t('ចុចលើអង្គណាមួយ ដើម្បីបើកមើលការពន្យល់ពិស្ដារ (Pop-up)', 'Tap any link to inspect') }}
        </div>
      </div>

      <div class="p-3.5 rounded-sm mt-4 text-xs leading-relaxed"
        :style="viewMode === 'anuloma'
          ? { background: 'var(--bg-card-2)', border: '1px solid var(--border)' }
          : { background: 'var(--accent-soft)', border: '1px dashed var(--accent)' }">
        <strong :style="{ color: viewMode === 'anuloma' ? 'var(--ink)' : 'var(--accent-bright)' }">
          {{ viewMode === 'anuloma' ? t('ដំណើរអនុលោម (សមទយសច្ច)៖', 'Anuloma (Samudaya Sacca):') : t('ដំណើរបដិលោម (និរោធសច្ច / ព្រះនិព្វាន)៖', 'Paṭiloma (Nirodha Sacca / Nibbāna):') }}
        </strong>
        <p class="mt-1" :style="{ color: 'var(--ink-soft)' }">
          {{ viewMode === 'anuloma'
            ? t('អវិជ្ជាជាបច្ច័យនាំឱ្យកើតសង្ខារ -> សង្ខារនាំឱ្យកើតវិញ្ញាណ -> ... -> ជាតិ ជរា មរណៈ នាំឱ្យកើតគំនរទុក្ខទាំងមូលក្នុងសង្សារវដ្ត។', 'Conditioned by ignorance arise volitional formations -> conditioned by formations arises consciousness -> ... -> birth, aging and death lead to the entire mass of suffering.')
            : t('ការរលត់ទៅដោយមិនសេសសល់នៃអវិជ្ជា រមែងរលត់សង្ខារ -> រលត់វិញ្ញាណ -> ... -> រលត់តណ្ហា ឧបាទាន -> ការរលត់នៃគំនរទុក្ខទាំងមូល! នេះជាមាគ៌ានៃវិបស្សនា។', 'With the complete fading and cessation of ignorance, volitional formations cease -> consciousness ceases -> craving and clinging cease -> the whole mass of suffering ceases!') }}
        </p>
      </div>
    </div>

    <!-- The 12 Links Interactive Grid / Wheel -->
    <div class="mt-8 space-y-4">
      <div class="flex items-center justify-between gap-3">
        <h3 class="font-display text-2xl" :style="{ color: 'var(--ink)' }">
          {{ t('ខ្សែច្រវាក់អង្គ ១២ នៃបដិច្ចសមុប្បាទ', 'The 12 Links of the Chain') }}
        </h3>
        <span class="text-xs font-mono px-2 py-0.5 rounded" :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)' }">
          12 Nidānas
        </span>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        <div
          v-for="(link, i) in links"
          :key="link.pl"
          class="card-paper p-4 cursor-pointer transition hover:border-amber-600 hover:shadow-md flex flex-col justify-between relative group"
          :style="{ borderColor: activeModalLink?.num === link.num ? 'var(--accent-bright)' : 'var(--border)' }"
          @click="openModal(link)"
        >
          <div>
            <div class="flex items-center justify-between gap-2">
              <span class="sutra-num font-bold text-sm" :style="{ color: 'var(--accent-bright)' }">
                #{{ khNum(i + 1) }}
              </span>
              <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full"
                :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)', border: '1px solid var(--border)' }">
                {{ t(link.periodKm, link.periodEn) }}
              </span>
            </div>

            <div class="mt-2 flex items-center gap-2">
              <span class="text-2xl">{{ link.icon }}</span>
              <div>
                <h4 class="font-display text-base font-bold leading-tight" :style="{ color: 'var(--ink)' }">
                  {{ t(link.km, link.en) }}
                </h4>
                <p class="paali text-xs">{{ link.pl }}</p>
              </div>
            </div>

            <p class="text-xs mt-2.5 leading-relaxed line-clamp-2" :style="{ color: 'var(--ink-soft)' }">
              {{ t(link.shortKm, link.shortEn) }}
            </p>
          </div>

          <div class="mt-3 pt-2 text-[11px] flex items-center justify-between border-t border-dashed"
            :style="{ borderColor: 'var(--border)', color: 'var(--ink-muted)' }">
            <span class="truncate">{{ t(link.vaṭṭaKm, link.vaṭṭaEn) }}</span>
            <span class="font-bold text-amber-700 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
              {{ t('ពិស្ដារ', 'Details') }} →
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- The 4 Groups & 20 Modes (សង្ខេប ៤ & អាការ ២០) -->
    <div class="card-paper p-4 sm:p-6 md:p-8 mt-6 sm:mt-8">
      <div class="flex items-center gap-2">
        <span class="text-xl">📊</span>
        <p class="chapter-label m-0">{{ t('គម្ពីរអភិធម្មពិស្ដារ', 'ABHIDHAMMA SYNTHESIS') }}</p>
      </div>
      <h3 class="font-display text-lg sm:text-xl md:text-2xl mt-2" :style="{ color: 'var(--ink)' }">
        {{ t('សង្ខេប ៤, សន្ធិ ៣, វដ្ត ៣ និង អាការ ២០', 'The 4 Groups, 3 Connections, 3 Cycles & 20 Modes') }}
      </h3>
      <p class="text-xs md:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('គម្ពីរអភិធម្ម និងវិសុទ្ធិមគ្គ បានបែងចែកអង្គ ១២ នេះទៅតាមរចនាសម្ព័ន្ធវិទ្យាសាស្ត្រចិត្តយ៉ាងល្អិតល្អន់បំផុត ដែលធ្វើឱ្យឃើញដំណើរនៃកម្ម និងផលឆ្លងភពជាតិបានយ៉ាងជាក់ស្តែង៖', 'The Abhidhamma and Visuddhimagga structure the 12 links into an exact matrix illustrating how kamma and results operate across past, present, and future lifetimes.') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-4 sm:mt-5">
        <div class="p-3.5 sm:p-4 rounded-lg" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <p class="font-display font-bold text-sm" :style="{ color: 'var(--accent)' }">{{ t('១. អតីតហេតុ ៥', '1. Five Past Causes') }}</p>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t('អវិជ្ជា, សង្ខារ, តណ្ហា, ឧបាទាន, ភព (កម្មភពកន្លងទៅ)', 'Avijjā, Saṅkhāra, Taṇhā, Upādāna, Kammabhava') }}
          </p>
          <span class="inline-block mt-3 text-[10px] font-bold px-2 py-0.5 rounded" :style="{ background: 'var(--bg-card)', color: 'var(--ink)' }">
            {{ t('ជាហេតុកាលពីអតីត', 'Causes in past life') }}
          </span>
        </div>

        <div class="p-3.5 sm:p-4 rounded-lg" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <p class="font-display font-bold text-sm" :style="{ color: 'var(--accent)' }">{{ t('២. បច្ចុប្បន្នផល ៥', '2. Five Present Results') }}</p>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t('វិញ្ញាណ, នាមរូប, សឡាយតនៈ, ផស្សៈ, វេទនា', 'Viññāṇa, Nāmarūpa, Saḷāyatana, Phassa, Vedanā') }}
          </p>
          <span class="inline-block mt-3 text-[10px] font-bold px-2 py-0.5 rounded" :style="{ background: 'var(--bg-card)', color: 'var(--ink)' }">
            {{ t('ជាផលទទួលក្នុងជាតិនេះ', 'Results in present life') }}
          </span>
        </div>

        <div class="p-3.5 sm:p-4 rounded-lg" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <p class="font-display font-bold text-sm" :style="{ color: 'var(--accent)' }">{{ t('៣. បច្ចុប្បន្នហេតុ ៥', '3. Five Present Causes') }}</p>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t('តណ្ហា, ឧបាទាន, ភព (កម្មភព), អវិជ្ជា, សង្ខារ', 'Taṇhā, Upādāna, Kammabhava, Avijjā, Saṅkhāra') }}
          </p>
          <span class="inline-block mt-3 text-[10px] font-bold px-2 py-0.5 rounded" :style="{ background: 'var(--bg-card)', color: 'var(--ink)' }">
            {{ t('ជាហេតុសាងក្នុងជាតិនេះ', 'Causes built in present') }}
          </span>
        </div>

        <div class="p-3.5 sm:p-4 rounded-lg" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <p class="font-display font-bold text-sm" :style="{ color: 'var(--accent)' }">{{ t('៤. អនាគតផល ៥', '4. Five Future Results') }}</p>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t('វិញ្ញាណ, នាមរូប, សឡាយតនៈ, ផស្សៈ, វេទនា (ជាតិ & ជរាមរណៈ)', 'Viññāṇa to Vedanā (Jāti & Jarāmaraṇa)') }}
          </p>
          <span class="inline-block mt-3 text-[10px] font-bold px-2 py-0.5 rounded" :style="{ background: 'var(--bg-card)', color: 'var(--ink)' }">
            {{ t('ជាផលទទួលក្នុងជាតិមុខ', 'Results in future life') }}
          </span>
        </div>
      </div>

      <!-- The 3 Vaṭṭas (Cycles) -->
      <div class="mt-6 pt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-dashed" :style="{ borderColor: 'var(--border)' }">
        <div class="p-3.5 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px solid var(--accent)' }">
          <strong class="text-xs" :style="{ color: 'var(--accent-bright)' }">🔥 {{ t('កិលេសវដ្ត (Kilesa Cycle)', 'Kilesa-vaṭṭa') }}</strong>
          <p class="text-xs mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('អវិជ្ជា, តណ្ហា, ឧបាទាន — សេចក្តីសៅហ្មងនៃចិត្តដែលជាដើមហេតុជំរុញឱ្យធ្វើកម្ម។', 'Ignorance, craving, and clinging — mental defilements that provoke volitional actions.') }}
          </p>
        </div>
        <div class="p-3.5 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px solid var(--accent)' }">
          <strong class="text-xs" :style="{ color: 'var(--accent-bright)' }">⚡ {{ t('កម្មវដ្ត (Kamma Cycle)', 'Kamma-vaṭṭa') }}</strong>
          <p class="text-xs mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('សង្ខារ និង កម្មភព — អំពើល្អ ឬអាក្រក់ដែលត្រូវបានសាងឡើងតាមកម្លាំងចេតនា។', 'Volitional formations and becoming — wholesome or unwholesome deeds committed.') }}
          </p>
        </div>
        <div class="p-3.5 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px solid var(--accent)' }">
          <strong class="text-xs" :style="{ color: 'var(--accent-bright)' }">🌊 {{ t('វិបាកវដ្ត (Result Cycle)', 'Vipāka-vaṭṭa') }}</strong>
          <p class="text-xs mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('វិញ្ញាណ, នាមរូប, សឡាយតនៈ, ផស្សៈ, វេទនា — ផលវិបាកដែលត្រូវរងទទួល។', 'Consciousness, mentality-materiality, sense bases, contact, and feeling — the resultant fruits.') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Practical Insight: Cutting the Chain at Vedanā -> Taṇhā -->
    <div class="card-paper p-4 sm:p-6 md:p-8 mt-6" :style="{ borderColor: 'var(--accent)', background: 'var(--accent-soft)' }">
      <div class="flex items-center gap-2">
        <span class="text-xl">✂️</span>
        <p class="chapter-label m-0">{{ t('ចំណុចកាត់ផ្តាច់ខ្សែច្រវាក់ក្នុងវិបស្សនា', 'THE VIPASSANĀ CUTTING POINT') }}</p>
      </div>
      <h3 class="font-display text-lg sm:text-xl md:text-2xl mt-2" :style="{ color: 'var(--ink)' }">
        {{ t('តើគេកាត់ផ្តាច់បដិច្ចសមុប្បាទនៅត្រង់ណា?', 'Where Can We Break the Chain of Samsāra?') }}
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('យើងមិនអាចកាត់ផ្តាច់វិញ្ញាណ នាមរូប ឬផស្សៈបានទេ ព្រោះដរាបណានៅរស់ ភ្នែកនៅតែឃើញរូប ត្រចៀកនៅតែឮសំឡេង ហើយវេទនា (សុខ ទុក្ខ ឧបេក្ខា) នៅតែកើតមាន។ ប៉ុន្តែ **«ចំណុចគន្លឹះតែមួយគត់ដែលព្រះយោគាវចរអាចកាត់ផ្តាច់បាន គឺនៅចន្លោះ វេទនា និង តណ្ហា!»**', 'We cannot block consciousness or sense contact: as long as we are alive, eyes see forms, ears hear sounds, and feelings (pleasant, painful, neutral) inevitably arise. BUT **the sole point where the chain can be broken is right between FEELING (Vedanā) and CRAVING (Taṇhā)!**') }}
      </p>
      <div class="p-3.5 sm:p-4 rounded-sm mt-3" :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)' }">
        <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink)' }">
          {{ t('👉 ពេលមានអារម្មណ៍សុខកើតឡើង ប្រើ «សតិ» ដឹងទាន់ ហើយមិនកើត «តណ្ហា» ចង់បានជាប់ជំពាក់។<br>👉 ពេលមានអារម្មណ៍ទុក្ខកើតឡើង ប្រើ «សតិ» ដឹងទាន់ ហើយមិនកើត «ទោសៈ/វិភវតណ្ហា» រុញច្រានខឹងក្រោធ។<br>នៅពេលដែល **«វេទនា មិនបង្កឱ្យកើតតណ្ហា»** នោះខ្សែច្រវាក់នឹងដាច់ត្រង់នេះ ឧបាទានមិនកើត ភពថ្មីមិនកើត ជាតិថ្មីមិនកើត ទុក្ខទាំងពួងក៏រលត់សូន្យ!', '👉 When pleasant feeling arises, observe with Sati without generating craving (Taṇhā).<br>👉 When painful feeling arises, observe with Sati without generating aversion or aversion-craving (Vibhava-taṇhā).<br>When **feeling does not trigger craving**, the chain shatters right there: clinging ceases, becoming ceases, future birth ceases, and suffering is extinguished forever!') }}
        </p>
      </div>
    </div>

    <!-- Modal Pop-up (Dialog) for Individual Link Inspection -->
    <Teleport to="body">
      <transition name="modal-pop">
        <div
          v-if="activeModalLink"
          class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-5"
          style="background: rgba(0, 0, 0, 0.65); backdrop-filter: blur(4px);"
          @click.self="closeModal"
          role="dialog"
          aria-modal="true"
        >
          <div
            class="card-paper relative w-full max-w-2xl max-h-[88vh] sm:max-h-[90vh] flex flex-col rounded-t-2xl sm:rounded-xl overflow-hidden shadow-2xl border-t-2 sm:border-2"
            :style="{ borderColor: 'var(--accent)', background: 'var(--bg-card)' }"
            @click.stop
          >
            <!-- Modal Header -->
            <div
              class="p-4 sm:p-5 flex items-center justify-between gap-3 border-b shrink-0"
              :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }"
            >
              <div class="flex items-center gap-2 flex-wrap">
                <span
                  class="sutra-num font-bold text-base px-2.5 py-0.5 rounded-full"
                  :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)' }"
                >
                  #{{ khNum(activeModalLink.num) }}
                </span>
                <span class="paali text-sm font-serif">{{ activeModalLink.pl }}</span>
                <span
                  class="text-[11px] px-2.5 py-0.5 rounded-full font-medium"
                  :style="{ background: 'var(--bg-card)', color: 'var(--ink-muted)', border: '1px solid var(--border)' }"
                >
                  {{ t(activeModalLink.periodKm, activeModalLink.periodEn) }}
                </span>
              </div>

              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold px-2 py-0.5 rounded" :style="{ background: 'var(--bg-card)', color: 'var(--ink-muted)', border: '1px solid var(--border)' }">
                  {{ activeModalLink.num }} / 12
                </span>
                <button
                  type="button"
                  class="w-8 h-8 rounded-full flex items-center justify-center transition text-base"
                  :style="{ background: 'var(--bg-card)', color: 'var(--ink-soft)', border: '1px solid var(--border)' }"
                  @click="closeModal"
                  :aria-label="t('បិទ', 'Close')"
                >
                  &#10005;
                </button>
              </div>
            </div>

            <!-- Modal Scrollable Content -->
            <div class="p-5 sm:p-6 overflow-y-auto space-y-4">
              <div class="flex items-center gap-3">
                <span class="text-4xl">{{ activeModalLink.icon }}</span>
                <div>
                  <h3 class="font-display text-2xl sm:text-3xl" :style="{ color: 'var(--ink)' }">
                    {{ t(activeModalLink.km, activeModalLink.en) }}
                  </h3>
                  <p class="paali text-sm" :style="{ color: 'var(--accent)' }">{{ activeModalLink.pl }}</p>
                </div>
              </div>

              <!-- Meaning & Sutta Definition -->
              <div class="p-4 rounded-lg" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
                <p class="text-[11px] font-bold uppercase tracking-wider mb-1" :style="{ color: 'var(--accent)' }">
                  {{ t('និយមន័យ និងខ្លឹមសារពិត (Definition & Meaning)', 'Definition & Sutta Meaning') }}
                </p>
                <p class="text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                  {{ t(activeModalLink.detailKm, activeModalLink.detailEn) }}
                </p>
              </div>

              <!-- Cause & Effect Linkage -->
              <div class="grid sm:grid-cols-2 gap-3">
                <div class="p-3.5 rounded-lg" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
                  <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">
                    ⬅️ {{ t('កើតឡើងដោយសារបច្ច័យ (Conditioned by)', 'Conditioned by') }}
                  </p>
                  <p class="text-xs font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
                    {{ t(activeModalLink.conditionedByKm, activeModalLink.conditionedByEn) }}
                  </p>
                </div>
                <div class="p-3.5 rounded-lg" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
                  <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">
                    ➡️ {{ t('ជាបច្ច័យឱ្យកើតបន្ត (Conditions next)', 'Conditions in turn') }}
                  </p>
                  <p class="text-xs font-bold mt-1.5" :style="{ color: 'var(--accent)' }">
                    {{ t(activeModalLink.conditionsKm, activeModalLink.conditionsEn) }}
                  </p>
                </div>
              </div>

              <!-- Abhidhamma Specifics -->
              <div class="p-3.5 rounded-lg" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
                <p class="text-[10px] font-bold uppercase tracking-wider mb-1" :style="{ color: 'var(--ink-muted)' }">
                  🧠 {{ t('ចំណាត់ថ្នាក់តាមអភិធម្ម (Abhidhamma Classification)', 'Abhidhamma Analysis') }}
                </p>
                <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                  {{ t(activeModalLink.abhidhammaKm, activeModalLink.abhidhammaEn) }}
                </p>
              </div>

              <!-- How to Practice / Break this link -->
              <div class="p-4 rounded-lg" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--accent)' }">
                <p class="text-[11px] font-bold uppercase tracking-wider mb-1" :style="{ color: 'var(--accent-bright)' }">
                  🕊️ {{ t('ការអនុវត្តវិបស្សនាជាក់ស្តែង (Practical Insight Contemplation)', 'Vipassanā Practice') }}
                </p>
                <p class="text-xs leading-relaxed font-medium" :style="{ color: 'var(--ink)' }">
                  {{ t(activeModalLink.practiceKm, activeModalLink.practiceEn) }}
                </p>
              </div>
            </div>

            <!-- Modal Footer Navigation -->
            <div
              class="p-3 sm:p-4 flex items-center justify-between gap-3 border-t shrink-0"
              :style="{ borderColor: 'var(--border)', background: 'var(--bg-card-2)' }"
            >
              <button
                type="button"
                class="px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition hover:opacity-85"
                :style="{ background: 'var(--bg-card)', color: 'var(--ink)', border: '1px solid var(--border)' }"
                @click="prevLink"
              >
                <span>‹</span>
                <span>{{ t('អង្គមុន', 'Previous') }}</span>
              </button>

              <button
                type="button"
                class="px-4 py-1.5 text-xs font-bold rounded-lg transition hover:opacity-90"
                :style="{ background: 'var(--accent)', color: '#ffffff' }"
                @click="closeModal"
              >
                {{ t('បិទផ្ទាំងនេះ', 'Close') }}
              </button>

              <button
                type="button"
                class="px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition hover:opacity-85"
                :style="{ background: 'var(--bg-card)', color: 'var(--ink)', border: '1px solid var(--border)' }"
                @click="nextLink"
              >
                <span>{{ t('អង្គបន្ទាប់', 'Next') }}</span>
                <span>›</span>
              </button>
            </div>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const viewMode = ref('anuloma')
const activeModalLink = ref(null)

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  return String(n).split('').map(d => khDigits[Number(d)] ?? d).join('')
}

function openModal(link) {
  activeModalLink.value = link
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

function closeModal() {
  activeModalLink.value = null
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

function nextLink() {
  if (!activeModalLink.value) return
  const idx = links.findIndex(l => l.num === activeModalLink.value.num)
  if (idx !== -1) {
    activeModalLink.value = links[(idx + 1) % links.length]
  }
}

function prevLink() {
  if (!activeModalLink.value) return
  const idx = links.findIndex(l => l.num === activeModalLink.value.num)
  if (idx !== -1) {
    activeModalLink.value = links[(idx - 1 + links.length) % links.length]
  }
}

function handleKeyDown(e) {
  if (!activeModalLink.value) return
  if (e.key === 'Escape') closeModal()
  else if (e.key === 'ArrowRight') nextLink()
  else if (e.key === 'ArrowLeft') prevLink()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})

// Master dataset for 12 Links of Paṭiccasamuppāda
const links = [
  {
    num: 1,
    icon: '🌑',
    pl: 'Avijjā',
    km: 'អវិជ្ជា',
    en: 'Ignorance',
    periodKm: 'អតីតកាល (ហេតុ)',
    periodEn: 'Past Cause',
    vaṭṭaKm: 'កិលេសវដ្ត (ឫសគល់)',
    vaṭṭaEn: 'Kilesa Cycle (Root)',
    shortKm: 'សេចក្តីមិនដឹងច្បាស់នូវអរិយសច្ច ៤, អតីត, អនាគត និងបដិច្ចសមុប្បាទ។',
    shortEn: 'Non-comprehension of the Four Noble Truths, the past, the future, and dependent origination.',
    detailKm: 'អវិជ្ជា មិនមែនគ្រាន់តែមិនចេះអក្សរ ឬមិនដឹងវិទ្យាសាស្ត្រទេ តែជា «មោហចេតសិក» ដែលបិទបាំងចិត្តមិនឱ្យឃើញការពិត ៨ ប្រការ៖ មិនដឹងទុក្ខ, មិនដឹងហេតុនៃទុក្ខ, មិនដឹងការរលត់ទុក្ខ, មិនដឹងផ្លូវរលត់ទុក្ខ, មិនដឹងអតីត, មិនដឹងអនាគត, មិនដឹងទាំងពីរ, និងមិនដឹងបដិច្ចសមុប្បាទ។',
    detailEn: 'Avijjā is not mere worldly illiteracy, but the mental factor of delusion (moha) blinding consciousness to the 8 fundamentals: the 4 Noble Truths, past, future, both past and future, and dependent origination.',
    conditionedByKm: 'កើតឡើងដោយសារអាសវៈ ៤ (កាមាសវៈ, ភវាសវៈ, ទិដ្ឋាសវៈ, អវិជ្ជាសវៈ)',
    conditionedByEn: 'Conditioned by the 4 Asavas (taints of sensuality, becoming, views, ignorance)',
    conditionsKm: 'ជាបច្ច័យឱ្យកើត «សង្ខារ» (ចេតនាប្រព្រឹត្តកម្ម)',
    conditionsEn: 'Conditions Volitional Formations (Saṅkhāra)',
    abhidhammaKm: 'ត្រូវនឹង «មោហចេតសិក» ដែលកើតក្នុងអកុសលចិត្តទាំង ១២ ដួង។',
    abhidhammaEn: 'Identical to Moha Cetasika (delusion) arising in all 12 unwholesome minds.',
    practiceKm: 'ចម្រើនវិបស្សនាបញ្ញា ពិចារណាត្រៃលក្ខណ៍ (អនិច្ចំ ទុក្ខំ អនត្តា) ដើម្បីរំលាយអវិជ្ជា។ ពេលបញ្ញាកើត អវិជ្ជារលត់ដូចពន្លឺភ្លើងកម្ចាត់ងងឹត។',
    practiceEn: 'Cultivate insight into the 3 Marks of Existence (impermanence, suffering, non-self) to dismantle ignorance like a lamp dispelling darkness.',
  },
  {
    num: 2,
    icon: '⚙️',
    pl: 'Saṅkhāra',
    km: 'សង្ខារ',
    en: 'Volitional Formations',
    periodKm: 'អតីតកាល (ហេតុ)',
    periodEn: 'Past Cause',
    vaṭṭaKm: 'កម្មវដ្ត',
    vaṭṭaEn: 'Kamma Cycle',
    shortKm: 'ការតាក់តែងកម្មតាមផ្លូវកាយ វាចា ចិត្ត (បុញ្ញា, អបុញ្ញា, អានេញ្ជា)។',
    shortEn: 'Intentional karma shaping body, speech, and mind (meritorious, demeritorious, imperturbable).',
    detailKm: 'សង្ខារក្នុងទីនេះសំដៅលើ «ចេតនាកម្ម» ដែលតាក់តែងជីវិត ចែកជា ៣ យ៉ាង៖ ១. បុញ្ញាភិសង្ខារ (កុសលចេតនាក្នុងកាម និងរូបាវចរ នាំឱ្យកើតសុគតិ), ២. អបុញ្ញាភិសង្ខារ (អកុសលចេតនា ១២ នាំឱ្យធ្លាក់នរក អបាយ), ៣. អានេញ្ជាភិសង្ខារ (កុសលចេតនាក្នុងអរូបជ្ឈាន ៤)។',
    detailEn: 'Refers specifically to karmic volitions (cetanā) that condition future rebirth: 1. Puññābhisaṅkhāra (wholesome merits leading to human/celestial realms), 2. Apuññābhisaṅkhāra (unwholesome actions leading to states of woe), 3. Āneñjābhisaṅkhāra (formless meditative absorptions).',
    conditionedByKm: 'អាស្រ័យលើ «អវិជ្ជា» (ភាពវង្វេងធ្វើឱ្យប្រព្រឹត្តកម្ម)',
    conditionedByEn: 'Conditioned by Ignorance (Avijjā)',
    conditionsKm: 'ជាបច្ច័យឱ្យកើត «វិញ្ញាណ» (បដិសន្ធិចិត្ត)',
    conditionsEn: 'Conditions Rebirth-linking Consciousness (Viññāṇa)',
    abhidhammaKm: 'ត្រូវនឹង «ចេតនាចេតសិក» ក្នុងលោកិយកុសលចិត្ត ១៧ និង អកុសលចិត្ត ១២ (សរុប ២៩)។',
    abhidhammaEn: 'Cetanā cetasika in the 17 mundane wholesome and 12 unwholesome minds (29 volitions total).',
    practiceKm: 'ពិចារណាឃើញថា ទោះជាកុសលកម្មក៏នៅតែនាំឱ្យកើតស្លាប់ក្នុងវដ្ត។ បង្វែរចិត្តពីការធ្វើបុណ្យដើម្បីជាតិថ្មី មកជាការបំពេញបុណ្យដើម្បីព្រះនិព្វាន (វិវដ្តគាមិកុសល)។',
    practiceEn: 'Recognize that even mundane merits tie one to the cycle of rebirth; redirect all wholesome actions toward final liberation (Nibbāna).',
  },
  {
    num: 3,
    icon: '🧠',
    pl: 'Viññāṇa',
    km: 'វិញ្ញាណ',
    en: 'Consciousness',
    periodKm: 'បច្ចុប្បន្ន (ផល)',
    periodEn: 'Present Result',
    vaṭṭaKm: 'វិបាកវដ្ត',
    vaṭṭaEn: 'Vipāka Cycle',
    shortKm: 'បដិសន្ធិចិត្តដែលតភ្ជាប់ជាតិថ្មី និងការដឹងអារម្មណ៍ក្នុងវិថីចិត្ត។',
    shortEn: 'Rebirth-linking consciousness connecting lifetimes and moment-to-moment cognitive awareness.',
    detailKm: 'វិញ្ញាណក្នុងទីនេះ សំដៅលើ «វិបាកវិញ្ញាណ ៣២» ជាពិសេសគឺ «បដិសន្ធិចិត្ត» ដែលកើតឡើងភ្លាមៗបន្ទាប់ពីចុតិចិត្តរលត់ ដោយទទួលអំណាចពីសង្ខារ។ វិញ្ញាណនេះជាអ្នកដឹងអារម្មណ៍ និងជាអ្នកទ្រទ្រង់ជីវិតថ្មីតាំងពីចាប់កំណើតក្នុងផ្ទៃមាតា។',
    detailEn: 'Signifies the 32 mundane resultant consciousnesses, notably the Rebirth-linking Mind (Paṭisandhi Citta) that sparks the new lifetime the exact moment the previous death mind expires, propelled by past kamma.',
    conditionedByKm: 'អាស្រ័យលើ «សង្ខារ» (អំណាចកម្មពីអតីត)',
    conditionedByEn: 'Conditioned by Volitional Formations (Saṅkhāra)',
    conditionsKm: 'ជាបច្ច័យឱ្យកើត «នាមរូប» (ចិត្ត និងកាយថ្មី)',
    conditionsEn: 'Conditions Mentality-Materiality (Nāmarūpa)',
    abhidhammaKm: 'វិបាកចិត្ត ៣២ (អហេតុកវិបាក ១៥ + មហាវិបាក ៨ + មហគ្គតវិបាក ៩)។',
    abhidhammaEn: '32 Resultant Minds (15 Rootless Resultants + 8 Mahāvipāka + 9 Jhāna Resultants).',
    practiceKm: 'ពិចារណាឃើញថា វិញ្ញាណគ្រាន់តែជាធាតុដឹងដែលកើតរលត់រាល់វិនាទី គ្មានព្រលឹងអមតៈនៅពីក្រោយវិញ្ញាណឡើយ។',
    practiceEn: 'See clearly that consciousness is an evanescent, conditioned knowing process, devoid of an enduring soul or self.',
  },
  {
    num: 4,
    icon: '🌱',
    pl: 'Nāmarūpa',
    km: 'នាមរូប',
    en: 'Mentality-Materiality',
    periodKm: 'បច្ចុប្បន្ន (ផល)',
    periodEn: 'Present Result',
    vaṭṭaKm: 'វិបាកវដ្ត',
    vaṭṭaEn: 'Vipāka Cycle',
    shortKm: 'ចិត្ត-ចេតសិក (នាម) និងរូបកាយ (រូប) ដែលអាស្រ័យគ្នាទៅវិញទៅមក។',
    shortEn: 'Mental factors (nāma) and physical form (rūpa) supporting each other like sheaves of reeds.',
    detailKm: 'នាម គឺចេតសិក ៣៥ ដែលកើតជាមួយវិបាកចិត្ត; រូប គឺកម្មជរូប (រូបដែលកើតពីកម្ម) ដូចជា ហទយរូប (បេះដូង), ភាវរូប (ភេទ), និងរូបរាងកាយ។ ព្រះពុទ្ធទ្រង់ឧបមាដូចជា «ដើមត្រែងពីរបាច់ផ្អែកគ្នា» បើដកមួយចេញ មួយទៀតក៏ដួលរលំ។',
    detailEn: 'Nāma comprises the 35 mental factors accompanying resultant minds; Rūpa comprises karma-born physical matter (the heart base, sex faculty, and bodily faculties). Like two sheaves of reeds leaning against one another, neither can stand alone.',
    conditionedByKm: 'អាស្រ័យលើ «វិញ្ញាណ» (ការដឹងអារម្មណ៍)',
    conditionedByEn: 'Conditioned by Consciousness (Viññāṇa)',
    conditionsKm: 'ជាបច្ច័យឱ្យកើត «សឡាយតនៈ» (ទ្វារទាំង ៦)',
    conditionsEn: 'Conditions the Six Sense Bases (Saḷāyatana)',
    abhidhammaKm: 'នាម = វេទនាខន្ធ, សញ្ញាខន្ធ, សង្ខារខន្ធ; រូប = រូបក្ខន្ធ ២៨។',
    abhidhammaEn: 'Nāma = feeling, perception, formations; Rūpa = 28 material phenomena.',
    practiceKm: 'ញែកឱ្យឃើញថា ជីវិតនេះមានតែ «នាម» (អ្នកដឹង) និង «រូប» (អ្នកត្រូវដឹង) ប៉ុណ្ណោះ គ្មានមនុស្ស សត្វ ឬ «ខ្ញុំ» ពិតប្រាកដឡើយ។',
    practiceEn: 'Dissect lived experience into bare mentality and physical matter — dissolving the deep-seated illusion of "I", "me", or "person".',
  },
  {
    num: 5,
    icon: '👁️',
    pl: 'Saḷāyatana',
    km: 'សឡាយតនៈ',
    en: 'Six Sense Bases',
    periodKm: 'បច្ចុប្បន្ន (ផល)',
    periodEn: 'Present Result',
    vaṭṭaKm: 'វិបាកវដ្ត',
    vaṭṭaEn: 'Vipāka Cycle',
    shortKm: 'ទ្វារទទួលអារម្មណ៍ទាំង ៦ (ភ្នែក ត្រចៀក ច្រមុះ អណ្តាត កាយ និងមនោ)។',
    shortEn: 'The six internal sense doors: eye, ear, nose, tongue, body, and mind-base.',
    detailKm: 'អាយតនៈខាងក្នុង ៦ គឺ ចក្ខ្វាយតនៈ (ភ្នែក), សោតាយតនៈ (ត្រចៀក), ឃានាយតនៈ (ច្រមុះ), ជិវ្ហាយតនៈ (អណ្តាត), កាយាយតនៈ (កាយ), និង មនាយតនៈ (ចិត្ត)។ ទាំងនេះជាទ្វារសម្រាប់ភ្ជាប់ទំនាក់ទំនងរវាងពិភពខាងក្នុង និងពិភពខាងក្រៅ។',
    detailEn: 'The six internal faculties through which the world is experienced: eye-base, ear-base, nose-base, tongue-base, body-base, and mind-base.',
    conditionedByKm: 'អាស្រ័យលើ «នាមរូប» (ការលូតលាស់នៃកាយនិងចិត្ត)',
    conditionedByEn: 'Conditioned by Mentality-Materiality (Nāmarūpa)',
    conditionsKm: 'ជាបច្ច័យឱ្យកើត «ផស្សៈ» (ការប៉ះទង្គិចអារម្មណ៍)',
    conditionsEn: 'Conditions Sense Contact (Phassa)',
    abhidhammaKm: 'ប្បសាទរូប ៥ (ភ្នែក ត្រចៀក ច្រមុះ អណ្តាត កាយ) + មនាយតនៈ (វិញ្ញាណ)។',
    abhidhammaEn: '5 Sensitive Physical Bases (pasāda rūpa) + Mind Base (citta).',
    practiceKm: 'ចម្រើន «ឥន្ទ្រិយសំវរៈ» (ការសង្រួមភ្នែក ត្រចៀក...) មិនឱ្យកិលេសហូរចូលតាមទ្វារទាំង ៦ ពេលប៉ះអារម្មណ៍។',
    practiceEn: 'Guard the sense doors (indriya-saṃvara) with acute mindfulness so defilements do not flood through sight, sound, or thought.',
  },
  {
    num: 6,
    icon: '⚡',
    pl: 'Phassa',
    km: 'ផស្សៈ',
    en: 'Contact',
    periodKm: 'បច្ចុប្បន្ន (ផល)',
    periodEn: 'Present Result',
    vaṭṭaKm: 'វិបាកវដ្ត',
    vaṭṭaEn: 'Vipāka Cycle',
    shortKm: 'ការជួបប្រសព្វគ្នារវាង ទ្វារ (ឥន្ទ្រិយ) + អារម្មណ៍ + វិញ្ញាណ។',
    shortEn: 'The convergence of sense faculty, external object, and consciousness.',
    detailKm: 'ផស្សៈ គឺការប៉ះទង្គិចអារម្មណ៍។ ព្រះពុទ្ធទ្រង់ត្រាស់ថា៖ អាស្រ័យភ្នែក និងរូប កើតចក្ខុវិញ្ញាណ; ការជួបជុំនៃធម៌ទាំង ៣ នេះ ហៅថា «ផស្សៈ»។ ផស្សៈមាន ៦ ប្រភេទ តាមទ្វារទាំង ៦។ ឧបមាដូចជា មេគោដែលគ្មានស្បែក រមែងឈឺចាប់ពេលប៉ះនឹងខ្យល់ ឬសត្វល្អិត។',
    detailEn: 'The spark of contact: dependent on eye and sight arises visual consciousness; the confluence of the three is "contact". Six kinds of contact exist corresponding to the six senses.',
    conditionedByKm: 'អាស្រ័យលើ «សឡាយតនៈ» (ទ្វារទាំង ៦)',
    conditionedByEn: 'Conditioned by the Six Sense Bases (Saḷāyatana)',
    conditionsKm: 'ជាបច្ច័យឱ្យកើត «វេទនា» (ការទទួលអារម្មណ៍)',
    conditionsEn: 'Conditions Feeling (Vedanā)',
    abhidhammaKm: 'ត្រូវនឹង «ផស្សចេតសិក» ដែលជាសព្វចិត្តសាធារណៈ (កើតក្នុងចិត្តគ្រប់ដួង)។',
    abhidhammaEn: 'Phassa Cetasika (Universal Mental Factor present in every single mind).',
    practiceKm: 'តាមដានខណៈពេលដែលផស្សៈកើតឡើង៖ ឃើញគ្រាន់តែឃើញ ឮគ្រាន់តែឮ មិនប្រកាន់យកនិមិត្ត ឬរូបរាង។',
    practiceEn: 'Catch the moment of contact: in the seen let there be only the seen, in the heard only the heard, without fabricating stories.',
  },
  {
    num: 7,
    icon: '🌊',
    pl: 'Vedanā',
    km: 'វេទនា',
    en: 'Feeling',
    periodKm: 'បច្ចុប្បន្ន (ផល)',
    periodEn: 'Present Result',
    vaṭṭaKm: 'វិបាកវដ្ត',
    vaṭṭaEn: 'Vipāka Cycle',
    shortKm: 'ការសោយអារម្មណ៍ សុខ (ស្រួល), ទុក្ខ (ពិបាក), ឬ ឧបេក្ខា (កណ្តាល)។',
    shortEn: 'Affective experience: pleasant (sukha), painful (dukkha), or neutral (adukkham-asukha).',
    detailKm: 'វេទនា គឺជាការទទួលរសជាតិនៃអារម្មណ៍។ ចែកជា ៣ (សុខ, ទុក្ខ, អទុក្ខមសុខ) ឬ ៥ (សុខកាយ, ទុក្ខកាយ, សោមនស្សចិត្ត, ទោមនស្សចិត្ត, ឧបេក្ខាចិត្ត)។ វេទនាជាផលវិបាកសុទ្ធសាធពីកម្មចាស់ មិនមែនជាបាបឬបុណ្យនៅឡើយទេ តែជាស្ពានដែលងាយនឹងបង្កឱ្យកើតតណ្ហាបំផុត។',
    detailEn: 'The affective tone of experience. Classified as 3 (pleasant, unpleasant, neutral) or 5 (bodily pleasure, bodily pain, mental joy, mental sorrow, equanimity). Feeling is a passive karmic resultant, but acts as the immediate springboard for craving.',
    conditionedByKm: 'អាស្រ័យលើ «ផស្សៈ» (ការប៉ះទង្គិចអារម្មណ៍)',
    conditionedByEn: 'Conditioned by Contact (Phassa)',
    conditionsKm: 'ជាបច្ច័យឱ្យកើត «តណ្ហា» (សេចក្តីស្រេកឃ្លាន)',
    conditionsEn: 'Conditions Craving (Taṇhā)',
    abhidhammaKm: 'ត្រូវនឹង «វេទនាចេតសិក» (សព្វចិត្តសាធារណៈ)។',
    abhidhammaEn: 'Vedanā Cetasika (Universal Mental Factor).',
    practiceKm: '«ចំណុចកាត់ផ្តាច់សំខាន់បំផុត!» កំណត់ដឹងវេទនាដោយឧបេក្ខា៖ ពេលសុខ កុំលោភ; ពេលទុក្ខ កុំខឹង។ ឃើញវេទនាកើតហើយរលត់ មិនមែនជាយើងឡើយ។',
    practiceEn: '«THE SUPREME CUTTING POINT!» Meet all feelings with equanimous mindfulness: without greed in pleasure, without anger in pain. Watch feelings arise and cease.',
  },
  {
    num: 8,
    icon: '🔥',
    pl: 'Taṇhā',
    km: 'តណ្ហា',
    en: 'Craving',
    periodKm: 'បច្ចុប្បន្ន (ហេតុ)',
    periodEn: 'Present Cause',
    vaṭṭaKm: 'កិលេសវដ្ត (ឫសគល់)',
    vaṭṭaEn: 'Kilesa Cycle (Root)',
    shortKm: 'សេចក្តីស្រេកឃ្លានជាប់ជំពាក់ក្នុងកាម ក្នុងភព និងក្នុងសេចក្តីរលត់។',
    shortEn: 'The burning thirst for sensual pleasure (kāma), becoming (bhava), and non-existence (vibhava).',
    detailKm: 'តណ្ហា គឺជាមេក្លោងបង្កើតទុក្ខ (សមុទយសច្ច)។ ចែកជា ៣ ប្រភេទធំៗ៖ ១. កាមតណ្ហា (ស្រេកឃ្លានក្នុងរូប សំឡេង ក្លិន រស សម្ផស្ស), ២. ភវតណ្ហា (ប្រាថ្នាចង់រស់នៅ ចង់កើតទៀត ប្រកបដោយសស្សតទិដ្ឋិ), ៣. វិភវតណ្ហា (ប្រាថ្នាចង់ឱ្យវិនាស ចង់ស្លាប់បាត់សូន្យ ប្រកបដោយឧច្ឆេទទិដ្ឋិ)។ ពន្លាតតាមទ្វារ ៦ កាល ៣ ក្លាយជា ១០៨ យ៉ាង។',
    detailEn: 'The chief architect of suffering (Samudaya Sacca). Threefold: 1. Kāma-taṇhā (sensual thirst), 2. Bhava-taṇhā (craving for eternal existence), 3. Vibhava-taṇhā (craving for total annihilation). Multiplied across senses and time periods, it manifests as 108 modes of craving.',
    conditionedByKm: 'អាស្រ័យលើ «វេទនា» (សេចក្តីស្រួល/មិនស្រួល)',
    conditionedByEn: 'Conditioned by Feeling (Vedanā)',
    conditionsKm: 'ជាបច្ច័យឱ្យកើត «ឧបាទាន» (ការតោងប្រកាន់)',
    conditionsEn: 'Conditions Clinging (Upādāna)',
    abhidhammaKm: 'ត្រូវនឹង «លោភចេតសិក» (កើតក្នុងលោភមូលចិត្ត ៨)។',
    abhidhammaEn: 'Lobha Cetasika (Greed factor present in the 8 greed-rooted minds).',
    practiceKm: 'សង្កេតដឹងសេចក្តីប្រាថ្នាពេលកំពុងកើតឡើង កុំរត់តាមវា។ ឃើញថាទោះបីបានរបស់នោះមក ក៏នៅតែមិនឆ្អែត និងប្រែប្រួលជាទុក្ខដដែល។',
    practiceEn: 'Catch craving in the act without obeying its commands. Reflect that quenching craving with indulgence is like drinking saltwater.',
  },
  {
    num: 9,
    icon: '🪢',
    pl: 'Upādāna',
    km: 'ឧបាទាន',
    en: 'Clinging',
    periodKm: 'បច្ចុប្បន្ន (ហេតុ)',
    periodEn: 'Present Cause',
    vaṭṭaKm: 'កិលេសវដ្ត',
    vaṭṭaEn: 'Kilesa Cycle',
    shortKm: 'ការតោងទាមប្រកាន់យ៉ាងរឹងមាំ ៤ យ៉ាង (កាម ទិដ្ឋិ សីលព្វត អត្តវាទ)។',
    shortEn: 'Intense grasping/clinging: sensuality, false views, rites and rituals, and identity-view.',
    detailKm: 'ឧបាទាន គឺជាតណ្ហាដែលវិវត្តទៅជាកម្លាំងតោងស្អិតយ៉ាងរឹងមាំ។ ចែកជា ៤ ប្រការ៖ ១. កាមុបាទាន (ប្រកាន់កាមគុណ ៥), ២. ទិដ្ឋុបាទាន (ប្រកាន់ទស្សនៈខុស មិច្ឆាទិដ្ឋិ), ៣. សីលព្វតុបាទាន (ប្រកាន់ពិធីសក្ការៈ ធ្វើវត្តដូចឆ្កែគោ ដើម្បីឡើងសួគ៌), ៤. អត្តវាទុបាទាន (ប្រកាន់ថាមាន «ខ្លួនអញ» ក្នុងខន្ធ ៥)។',
    detailEn: 'The solidified, compulsive crystallization of craving into fourfold grasping: 1. Sensual clinging, 2. View clinging, 3. Clinging to rules and superstitious rites, 4. Identity clinging (clinging to a permanent "I" within the five aggregates).',
    conditionedByKm: 'អាស្រ័យលើ «តណ្ហា» (សេចក្តីស្រេកឃ្លាន)',
    conditionedByEn: 'Conditioned by Craving (Taṇhā)',
    conditionsKm: 'ជាបច្ច័យឱ្យកើត «ភព» (កម្មភព និងឧបបត្តិភព)',
    conditionsEn: 'Conditions Becoming (Bhava)',
    abhidhammaKm: 'ត្រូវនឹង «លោភចេតសិក» (កាមុបាទាន) និង «ទិដ្ឋិចេតសិក» (ឧបាទាន ៣ ទៀត)។',
    abhidhammaEn: 'Lobha Cetasika (for sensuality) + Diṭṭhi Cetasika (for the other 3 clingings).',
    practiceKm: 'ពិចារណា «អនត្តា» (ភាពមិនមែនជារបស់ខ្លួន) លើកាយ ចិត្ត និងទ្រព្យសម្បត្តិ។ លះបង់ទិដ្ឋិប្រកាន់ថា «នេះជារបស់ខ្ញុំ នេះជាខ្ញុំ នេះជាខ្លួនរបស់ខ្ញុំ»។',
    practiceEn: 'Contemplate Not-Self (Anattā) upon body, mind, and possessions: "This is not mine, this am I not, this is not my self."',
  },
  {
    num: 10,
    icon: '🌍',
    pl: 'Bhava',
    km: 'ភព',
    en: 'Becoming',
    periodKm: 'បច្ចុប្បន្ន (ហេតុ) / អនាគត',
    periodEn: 'Present Cause / Seed',
    vaṭṭaKm: 'កម្មវដ្ត & វិបាកវដ្ត',
    vaṭṭaEn: 'Kamma & Result',
    shortKm: 'ដំណើរនៃការសាងកម្មតាក់តែងភព (កម្មភព) និងភពដែលត្រូវកើត (ឧបបត្តិភព)។',
    shortEn: 'The karmic potency propelling future life (kammabhava) and the planes of existence (upapattibhava).',
    detailKm: 'ភពចែកជា ២ ផ្នែកសំខាន់៖ ១. កម្មភព (អំពើល្អអាក្រក់ដែលធ្វើឡើងដោយអំណាចឧបាទាន ជាថាមពលកម្មរុញច្រានទៅកើត), ២. ឧបបត្តិភព (ភពទាំង ៣១ ដែលសត្វត្រូវទៅកើត គឺ កាមភព រូបភព អរូបភព)។ កម្មភពជាហេតុ ឧបបត្តិភពជាផល។',
    detailEn: 'Two distinct aspects: 1. Kamma-bhava (the active karmic potency created by volitions that drives rebirth), 2. Upapatti-bhava (the 31 planes of existence — sensual, fine-material, immaterial — where rebirth actualizes).',
    conditionedByKm: 'អាស្រ័យលើ «ឧបាទាន» (ការតោងប្រកាន់)',
    conditionedByEn: 'Conditioned by Clinging (Upādāna)',
    conditionsKm: 'ជាបច្ច័យឱ្យកើត «ជាតិ» (កំណើតថ្មី)',
    conditionsEn: 'Conditions Birth (Jāti)',
    abhidhammaKm: 'កម្មភព = ចេតនា ២៩; ឧបបត្តិភព = វិបាកខន្ធ ៤ និងកម្មជរូប។',
    abhidhammaEn: 'Kammabhava = 29 karmic volitions; Upapattibhava = resultant aggregates.',
    practiceKm: 'បញ្ឈប់ការសាងកម្មភពថ្មី ដោយបដិបត្តិមគ្គមានអង្គ ៨។ ពេលគ្មានកម្មភព កំណើតថ្មីក៏មិនអាចកើតឡើងបានឡើយ។',
    practiceEn: 'Cease accumulating fresh karmic momentum by walking the Noble Eightfold Path to bring about the ending of becoming (bhava-nirodha).',
  },
  {
    num: 11,
    icon: '👶',
    pl: 'Jāti',
    km: 'ជាតិ',
    en: 'Birth',
    periodKm: 'អនាគតកាល (ផល)',
    periodEn: 'Future Result',
    vaṭṭaKm: 'វិបាកវដ្ត',
    vaṭṭaEn: 'Vipāka Cycle',
    shortKm: 'ការលេចឡើងនៃខន្ធទាំងឡាយ និងការចាប់កំណើតក្នុងភពថ្មី។',
    shortEn: 'The manifestation of the aggregates and taking conception in a new realm of existence.',
    detailKm: 'ជាតិ គឺការលេចឡើងនៃខន្ធទាំងឡាយក្នុងកំណើតថ្មី មិនថាកើតជាមនុស្ស ទេវតា សត្វ ឬធ្លាក់នរកឡើយ។ កំណើតមាន ៤ បែប៖ អណ្ឌជៈ (កើតពីស៊ុត), ជលព្វុជៈ (កើតពីផ្ទៃមាតុ), សំសេទជៈ (កើតពីញើសក្អែល/សើម), ឱបបាតិកៈ (កើតឡើងឯកឯង ដូចទេវតា នរក)។ ជាតិជាប្រភពនៃរាល់សេចក្តីទុក្ខទាំងអស់! បើគ្មានការកើត ក៏គ្មានការឈឺ ចាស់ ស្លាប់ឡើយ។',
    detailEn: 'The actualization of aggregates in a new existence across the four modes of birth: egg-born, womb-born, moisture-born, or spontaneously born (devas, hell beings). Birth is the fountainhead of all subsequent misery: without birth, decay and death cannot occur.',
    conditionedByKm: 'អាស្រ័យលើ «ភព» (កម្លាំងនៃកម្មភព)',
    conditionedByEn: 'Conditioned by Becoming (Bhava)',
    conditionsKm: 'ជាបច្ច័យឱ្យកើត «ជរាមរណៈ» (ចាស់ ឈឺ ស្លាប់)',
    conditionsEn: 'Conditions Aging and Death (Jarāmaraṇa)',
    abhidhammaKm: 'ការកើតឡើងដំបូងនៃវិបាកនាមក្ខន្ធ និងកម្មជរូបក្នុងភពថ្មី។',
    abhidhammaEn: 'The initial arising of resultant aggregates and kamma-produced matter.',
    practiceKm: 'កើតសេចក្តីសង្វេគ ឃើញថាការកើតក្នុងភពណាក៏ជាទុក្ខ (ជាតិបិ ទុក្ខា)។ តាំងចិត្តប្រតិបត្តិធម៌ដើម្បីសម្រេចអរហត្តផល ដែលព្រះពុទ្ធទ្រង់បន្លឺឧទានថា «ជាតិ ខីណា — ជាតិរលត់អស់ហើយ!»',
    practiceEn: 'Cultivate spiritual urgency (saṃvega) recognizing that all birth is suffering (jātipi dukkhā); strive for Arahantship where "birth is exhausted" (khīṇā jāti).',
  },
  {
    num: 12,
    icon: '🥀',
    pl: 'Jarāmaraṇa',
    km: 'ជរាមរណៈ',
    en: 'Aging and Death',
    periodKm: 'អនាគតកាល (ផល)',
    periodEn: 'Future Result',
    vaṭṭaKm: 'វិបាកវដ្ត',
    vaṭṭaEn: 'Vipāka Cycle',
    shortKm: 'សេចក្តីចាស់ ស្លាប់ ព្រមទាំងសោកៈ បរិទេវៈ ទុក្ខ ទោមនស្ស ឧបាយាស។',
    shortEn: 'Aging, death, sorrow, lamentation, physical pain, grief, and utter despair.',
    detailKm: 'ជរា គឺការចាស់ទ្រុឌទ្រោម សក់ស្កូវ ធ្មេញបាក់ ឥន្ទ្រិយចុះខ្សោយ; មរណៈ គឺការបែកធ្លាយនៃខន្ធ ការដាច់ជីវិតិន្ទ្រិយ និងការឈប់ដំណើរការនៃរូបកាយ។ បូករួមទាំង សោកៈ (សេចក្តីស្តាយស្រណោះ), បរិទេវៈ (ការយំទួញ), ទុក្ខ (ការឈឺចាប់), ទោមនស្ស (សេចក្តីអាក់អន់ចិត្ត), និង ឧបាយាស (សេចក្តីចង្អៀតចង្អល់អស់សង្ឃឹម)។ នេះជាទីបញ្ចប់នៃគំនរទុក្ខក្នុងខ្សែច្រវាក់បដិច្ចសមុប្បាទ។',
    detailEn: 'Aging (decay of organs, faculties, and vitality) and death (dissolution of aggregates and death consciousness). Followed by sorrow, lamentation, pain, grief, and despair — the culmination of the entire mass of suffering.',
    conditionedByKm: 'អាស្រ័យលើ «ជាតិ» (ការបានកើតមក)',
    conditionedByEn: 'Conditioned by Birth (Jāti)',
    conditionsKm: 'នាំឱ្យវិលត្រឡប់ទៅរក «អវិជ្ជា» វិលវល់ក្នុងសង្សារវដ្តឥតទីបញ្ចប់',
    conditionsEn: 'Fuels ignorance, restarting the wheel of Samsāra eternally until awakened',
    abhidhammaKm: 'ជរតារូប, អនិច្ចតារូប, និងចុតិចិត្ត នៃភពថ្មី។',
    abhidhammaEn: 'Decay, dissolution of matter, and the death consciousness (Cuti Citta).',
    practiceKm: 'ចម្រើន «មរណស្សតិ» (ការរឭកដល់សេចក្តីស្លាប់) រាល់ថ្ងៃ មិនធ្វេសប្រហែស ប្រឹងសាងកុសល និងចម្រើនបញ្ញាដើម្បីឆ្លងផុតពីសេចក្តីស្លាប់ ចូលកាន់អមតមហានិព្វាន។',
    practiceEn: 'Maintain daily mindfulness of death (maraṇassati), banishing complacency, and realizing the deathless element of Nibbāna.',
  },
]
</script>

<style scoped>
.modal-pop-enter-active,
.modal-pop-leave-active {
  transition: opacity 0.22s ease;
}

.modal-pop-enter-from,
.modal-pop-leave-to {
  opacity: 0;
}

.modal-pop-enter-active .card-paper,
.modal-pop-leave-active .card-paper {
  transition: transform 0.24s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.22s ease;
}

.modal-pop-enter-from .card-paper,
.modal-pop-leave-to .card-paper {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

.modal-pop-enter-to .card-paper,
.modal-pop-leave-from .card-paper {
  opacity: 1;
  transform: scale(1) translateY(0);
}
</style>
