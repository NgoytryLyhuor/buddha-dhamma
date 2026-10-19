<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('ភូមិ ៣១ — ចក្រវាឡវិទ្យា & ជីវិតក្នុងសង្សារវដ្ដ', 'BHŪMI 31 — BUDDHIST COSMOLOGY & SAMSĀRA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('ស្ថានទាំង ៣១ ភព នៃសង្សារវដ្ដ', 'The Thirty-One Realms of Existence') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ក្នុងព្រះពុទ្ធសាសនា សត្វលោកទាំងឡាយដែលមិនទាន់កម្ចាត់កិលេសអស់ តែងតែវិលវល់កើតស្លាប់ឥតឈប់ឈរក្នុងភូមិទាំង ៣១ នេះ ទៅតាមកម្លាំងនៃកម្ម (កុសលកម្ម និងអកុសលកម្ម) ដែលខ្លួនបានសាង។ គ្មានព្រះអាទិទេព ឬអ្នកណាជាអ្នកបង្កើត ឬកំណត់វាសនាឡើយ គឺកម្មជារបស់ខ្លួន កម្មជាកេរដំណែល កម្មជាកំណើត។ ការយល់ដឹងពីភូមិទាំង ៣១ ញ៉ាំងឱ្យកើតសេចក្តីសង្វេគ មិនធ្វេសប្រហែសក្នុងជីវិត និងឃើញតម្លៃនៃការបានកើតជាមនុស្ស។', 'In Buddhist cosmology, all unenlightened beings wander endlessly through these 31 realms propelled solely by the force of their volition (kamma). No divine creator designs these realms or assigns souls to them — beings are owners and heirs of their deeds. Understanding the 31 realms cultivates spiritual urgency (saṃvega), curbs moral heedlessness, and reveals the priceless rarity of human rebirth.') }}
    </p>

    <!-- The Blind Turtle Simile Highlight -->
    <div class="card-paper p-6 md:p-8 mt-8" :style="{ borderColor: 'var(--accent)', background: 'var(--accent-soft)' }">
      <div class="flex items-center gap-2">
        <span class="text-xl" :style="{ color: 'var(--accent-bright)' }">🐢</span>
        <p class="chapter-label m-0">CHIGGALA SUTTA — SN 56.48</p>
      </div>
      <h3 class="font-display text-xl md:text-2xl mt-2" :style="{ color: 'var(--ink)' }">
        {{ t('មនុស្សត្តភាវោ ទុល្លភោ — ការកើតជាមនុស្សកម្រក្រៃលែង', 'The Unfathomable Rarity of Human Rebirth') }}
      </h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រះពុទ្ធទ្រង់ប្រៀបធៀបថា៖ ឧបមាដូចជាមាននឹមនង្គ័លឈើមួយ មានប្រហោងតែមួយ អណ្តែតលើមហាសមុទ្រដ៏ធំល្វឹងល្វើយដែលត្រូវខ្យល់បក់រសាត់ចុះឡើង ហើយមានសត្វអណ្តើកខ្វាក់ភ្នែកទាំងសងខាងមួយ កន្លងទៅ ១០០ ឆ្នាំ ទើបងើបក្បាលឡើងមកផ្ទៃទឹកម្តង។ ការដែលអណ្តើកខ្វាក់នោះ ងើបក្បាលចំប្រហោងនឹមនង្គ័លដែលរសាត់អណ្តែត គឺជារឿងកម្របំផុតយ៉ាងណា ការដែលសត្វស្លាប់ពីអបាយភូមិ ឬពីភពដទៃ ហើយបានត្រឡប់មកកើតជាមនុស្សវិញ គឺរឹតតែកម្រជាងនោះរាប់ពាន់ដង! ដូច្នេះ ពេលបានកើតជាមនុស្សហើយ គប្បីខិតខំសាងកុសល និងបដិបត្តិធម៌ កុំឱ្យខាតបង់ជីវិត។', 'The Buddha gave the famous simile of the blind sea turtle: suppose a single-holed yoke drifted upon the boundless ocean, tossed east and west by gales, and a blind turtle surfaced once every hundred years. The chance of that blind turtle poking its neck through the hole is minuscule — yet gaining human rebirth is far rarer still! Having won this precious human birth, one must not squander it in heedlessness.') }}
      </p>
    </div>

    <!-- Time Units in Buddhist Cosmology (Kappa & Antarakappa) -->
    <div class="card-paper p-6 md:p-8 mt-6">
      <p class="chapter-label">{{ t('កាលវេលាក្នុងចក្រវាឡ', 'UNITS OF COSMIC TIME') }}</p>
      <h3 class="font-display text-xl mt-1" :style="{ color: 'var(--ink)' }">
        {{ t('តើ «មហាកប្ប» និង «អន្តរកប្ប» មានរយៈពេលវែងប៉ុនណា?', 'How Long is a Mahākappa (Great Aeon)?') }}
      </h3>
      <div class="grid md:grid-cols-2 gap-4 mt-4">
        <div class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <strong class="text-sm" :style="{ color: 'var(--ink)' }">{{ t('ឧបមាភ្នំថ្ម ១ យោជន៍ (Sāsapa Sutta)', 'Simile of the Granite Mountain') }}</strong>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ឧបមាដូចជាមានភ្នំថ្មរឹងមាំមួយ កម្ពស់ ១ យោជន៍ (ប្រហែល ១៦ គ.ម) បណ្តោយ ១ យោជន៍ ទទឹង ១ យោជន៍ គ្មានប្រហោង។ រៀងរាល់ ១០០ ឆ្នាំម្តង មានទេវតាម្នាក់យកកន្សែងសូត្រដ៏ស្តើងមកបោសភ្នំនោះម្តង។ ភ្នំថ្មដ៏ធំនោះរឹលរាបស្មើដល់ដីហើយ ក៏កាលវេលា ១ មហាកប្ប មិនទាន់អស់ផង!', 'Suppose there were a solid granite mountain one yojana (approx. 16 km) high, long, and wide. Once every century, a celestial being strokes it with a delicate silk scarf. That mountain would be worn flat to the ground sooner than a single Mahākappa would elapse!') }}
          </p>
        </div>
        <div class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <strong class="text-sm" :style="{ color: 'var(--ink)' }">{{ t('ឧបមាគ្រាប់ស្ពៃពេញក្រុង (Pabbata Sutta)', 'Simile of the Mustard Seeds') }}</strong>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ឧបមាដូចជាមានកំផែងក្រុងដែកមួយ កម្ពស់ ១ យោជន៍ ទទឹង ១ យោជន៍ បណ្តោយ ១ យោជន៍ ផ្ទុកពេញដោយគ្រាប់ស្ពៃណែនក្តន់។ រៀងរាល់ ១០០ ឆ្នាំម្តង មនុស្សម្នាក់ដកគ្រាប់ស្ពៃចេញ ១ គ្រាប់។ គ្រាប់ស្ពៃក្នុងក្រុងនោះត្រូវដកអស់រលីងហើយ ក៏កាលវេលា ១ មហាកប្ប មិនទាន់កន្លងផុតឡើយ!', 'Suppose a walled fortress one yojana high, long, and wide were packed to the brim with mustard seeds. If a person took out a single mustard seed once every hundred years, that heap would be exhausted before a single Mahākappa ended!') }}
          </p>
        </div>
      </div>
      <p class="text-xs mt-3 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
        {{ t('កាលវេលានៃការវិលវល់ក្នុងសង្សារវដ្ដ គឺរាប់មិនអស់រាប់សែនកោដិកប្ប។ ពេលលោកធាតុត្រូវវិនាស៖ វិនាសដោយភ្លើង (ឆេះដល់អាភស្សរា ជាន់ទី ៦ រូបភូមិ), វិនាសដោយទឹក (ជន់ដល់សុភកិណ្ហា ជាន់ទី ៩), វិនាសដោយខ្យល់ (បោកបក់ដល់វេហប្ផលា ជាន់ទី ១០)។', 'The cycle of rebirth has wandered through millions of such aeons. When the physical cosmos dissolves: fire destroys up to the 2nd Jhāna (Ābhassarā), water dissolves up to the 3rd Jhāna (Subhakiṇhā), and wind shatters up to the 4th Jhāna (Vehapphala).') }}
      </p>
    </div>

    <!-- Search & Filter Controls -->
    <div class="card-paper p-5 md:p-6 mt-8">
      <div class="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p class="text-[10px] font-bold tracking-wider uppercase" :style="{ color: 'var(--ink-muted)' }">
            {{ t('តម្រងស្វែងរកភូមិទាំង ៣១', 'EXPLORE 31 REALMS') }}
          </p>
          <div class="flex items-center gap-1.5 mt-2 flex-wrap">
            <button v-for="cat in categories" :key="cat.id"
              class="lang-pick px-3 py-1 text-xs"
              :class="activeCategory === cat.id ? 'on' : ''"
              @click="activeCategory = cat.id">
              {{ t(cat.km, cat.en) }}
            </button>
          </div>
        </div>

        <div class="w-full md:w-64">
          <input v-model="searchQuery" type="text"
            :placeholder="t('ស្វែងរកឈ្មោះភូមិ ឬកម្ម...', 'Search realm or kamma...')"
            class="feedback-area w-full text-xs py-2 px-3 rounded-sm"
            :style="{ background: 'var(--bg-card-2)', color: 'var(--ink)', border: '1px solid var(--border)' }" />
        </div>
      </div>

      <!-- Quick Action Controls & Counters -->
      <div class="flex items-center justify-between gap-3 mt-4 pt-3 flex-wrap" :style="{ borderTop: '1px dashed var(--border)' }">
        <div class="text-xs flex items-center gap-2" :style="{ color: 'var(--ink-muted)' }">
          <span>{{ t('បង្ហាញ៖', 'Showing:') }}</span>
          <span class="font-bold px-2 py-0.5 rounded-sm" :style="{ background: 'var(--bg-card-2)', color: 'var(--ink)' }">
            {{ filteredRealms.length }} / ៣១ {{ t('ភព', 'realms') }}
          </span>
          <span v-if="expandedRealms.size > 0" class="text-[11px] font-medium" :style="{ color: 'var(--accent)' }">
            • {{ t('កំពុងបើកមើល', 'Expanded:') }} {{ expandedRealms.size }}
          </span>
        </div>

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="font-btn px-2.5 py-1 text-xs inline-flex items-center gap-1.5 transition"
            @click="expandAll"
            :title="t('បើកពិនិត្យលម្អិតគ្រប់ភព', 'Expand all realms to read full details')"
          >
            <span>⊞</span>
            <span>{{ t('ពង្រីកទាំងអស់', 'Expand All') }}</span>
          </button>
          <button
            type="button"
            class="font-btn px-2.5 py-1 text-xs inline-flex items-center gap-1.5 transition"
            @click="collapseAll"
            :title="t('បង្រួមគ្រប់ភពទាំងអស់វិញ', 'Collapse all realms')"
          >
            <span>⊟</span>
            <span>{{ t('បង្រួមទាំងអស់', 'Collapse All') }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Realm Cards List (Grouped or Filtered) -->
    <div class="mt-8 space-y-8">
      
      <!-- 1. Four Woeful States (អបាយភូមិ ៤) -->
      <div v-if="filteredApaya.length" class="space-y-4">
        <div class="flex items-center gap-2">
          <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">១–៤</span>
          <h3 class="font-display text-2xl" :style="{ color: 'var(--ink)' }">
            {{ t('អបាយភូមិ ៤ (ភពរងទុក្ខវេទនា)', 'The 4 Woeful States (Apāya Bhūmi)') }}
          </h3>
        </div>
        <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ភពកើតឡើងដោយអកុសលកម្មធ្ងន់ធ្ងរ គ្មានឱកាសបានសាងបុណ្យឡើយ — ព្រះអរិយបុគ្គល (សោតាបន្នឡើងទៅ) លែងធ្លាក់មកភពនេះជារៀងរហូត។ (ចុចលើកាត ឬប៊ូតុងដើម្បីរំលាយព័ត៌មានលម្អិត)', 'Realms of acute misery born of unwholesome kamma — Noble disciples (Sotāpannas and above) are permanently freed from falling here. Click any card or button to slide down full details.') }}
        </p>

        <div class="grid items-start md:grid-cols-2 gap-4">
          <div v-for="r in filteredApaya" :key="r.num"
            class="card-paper p-5 transition-all duration-200"
            :style="isExpanded(r.num) ? { borderColor: 'var(--accent-bright)', background: 'var(--accent-soft)' } : {}">
            
            <!-- Clickable Card Header to Toggle -->
            <div class="cursor-pointer select-none" @click="toggleRealm(r.num)">
              <div class="flex items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="sutra-num font-bold" :style="{ color: 'var(--accent-bright)' }">#{{ khNum(r.num) }}</span>
                  <span class="text-[10px] px-2 py-0.5 rounded-full font-medium"
                    :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)', border: '1px solid var(--border)' }">
                    {{ t(r.planeKm, r.planeEn) }}
                  </span>
                </div>
                <span class="paali">{{ r.pl }}</span>
              </div>

              <h4 class="font-display text-lg md:text-xl mt-2 flex items-center justify-between gap-2" :style="{ color: 'var(--ink)' }">
                <span>{{ t(r.km, r.en) }}</span>
                <span
                  class="text-xs p-1 rounded-full transition-transform duration-300 inline-block shrink-0"
                  :class="isExpanded(r.num) ? 'rotate-180 text-amber-700' : 'text-stone-400'"
                >
                  ▼
                </span>
              </h4>

              <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(r.shortDescKm, r.shortDescEn) }}</p>

              <!-- Footer Strip with Lifespan & Explicit Toggle Button -->
              <div class="mt-3 pt-2 text-xs flex items-center justify-between gap-2" :style="{ borderTop: '1px dashed var(--border)', color: 'var(--ink-muted)' }">
                <span class="truncate"><strong>{{ t('អាយុកាល៖ ', 'Span: ') }}</strong>{{ t(r.spanKm, r.spanEn) }}</span>
                
                <button
                  type="button"
                  class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full shrink-0 transition-all duration-200 shadow-sm"
                  :style="isExpanded(r.num)
                    ? { background: 'var(--accent-bright)', color: '#ffffff' }
                    : { background: 'var(--bg-card-2)', color: 'var(--accent)', border: '1px solid var(--border)' }"
                  @click.stop="toggleRealm(r.num)">
                  <span>{{ isExpanded(r.num) ? t('បង្រួមវិញ', 'Collapse') : t('មើលលម្អិត', 'View Details') }}</span>
                  <span
                    class="inline-block transition-transform duration-300 text-[10px]"
                    :class="isExpanded(r.num) ? 'rotate-180' : ''">
                    ▼
                  </span>
                </button>
              </div>
            </div>

            <!-- Slide-down Expandable Drawer -->
            <transition name="slide-down">
              <div v-if="isExpanded(r.num)" class="mt-4 pt-4 border-t border-dashed" :style="{ borderColor: 'var(--border)' }">
                <!-- Attributes Grid -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                  <div class="p-2.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                    <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('អាយុកាល', 'Lifespan') }}</p>
                    <p class="font-bold text-xs mt-1" :style="{ color: 'var(--ink)' }">{{ t(r.spanKm, r.spanEn) }}</p>
                  </div>
                  <div class="p-2.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                    <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('ខន្ធដែលមាន', 'Aggregates') }}</p>
                    <p class="font-bold text-xs mt-1" :style="{ color: 'var(--ink)' }">{{ t(r.aggregatesKm, r.aggregatesEn) }}</p>
                  </div>
                  <div class="p-2.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                    <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('ចិត្តបដិសន្ធិ', 'Rebirth Mind') }}</p>
                    <p class="font-bold text-xs mt-1 leading-snug" :style="{ color: 'var(--ink)' }">{{ t(r.cittaKm, r.cittaEn) }}</p>
                  </div>
                  <div class="p-2.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                    <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('ព្រះអរិយបុគ្គល', 'Ariya / Bodhisatta') }}</p>
                    <p class="font-bold text-xs mt-1" :style="{ color: 'var(--ink)' }">{{ t(r.ariyaKm, r.ariyaEn) }}</p>
                  </div>
                </div>

                <!-- Long Description -->
                <div class="mt-3 p-3.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                  <p class="text-[10px] font-bold uppercase tracking-wider mb-1" :style="{ color: 'var(--accent)' }">
                    {{ t('សភាពនៃជីវិត និងបរិស្ថានក្នុងភពនេះ', 'Realm Life & Environment') }}
                  </p>
                  <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(r.longDescKm, r.longDescEn) }}
                  </p>
                </div>

                <!-- Specific Kamma Cause -->
                <div class="mt-2.5 p-3.5 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--accent)' }">
                  <p class="text-[10px] font-bold uppercase tracking-wider mb-1" :style="{ color: 'var(--accent-bright)' }">
                    ⚖️ {{ t('ហេតុនៃកម្មជាក់លាក់ដែលនាំឱ្យទៅកើត', 'Specific Kamma Cause') }}
                  </p>
                  <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(r.kammaDetailKm, r.kammaDetailEn) }}
                  </p>
                </div>

                <!-- Bottom collapse button -->
                <div class="mt-3 flex justify-end">
                  <button
                    type="button"
                    class="text-xs py-1 px-3 rounded-full font-medium inline-flex items-center gap-1 transition"
                    :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)', border: '1px solid var(--border)' }"
                    @click.stop="toggleRealm(r.num)"
                  >
                    <span>▲</span>
                    <span>{{ t('បង្រួមភពនេះវិញ', 'Collapse this realm') }}</span>
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Detail of the 8 Great Hells Reactive Accordion -->
        <div class="card-paper p-5 mt-4">
          <button
            type="button"
            class="w-full flex items-center justify-between text-left font-bold text-base select-none cursor-pointer"
            :style="{ color: 'var(--accent)' }"
            @click="showEightHells = !showEightHells"
          >
            <span class="flex items-center gap-2">
              <span>🔥</span>
              <span>{{ t('ពិស្តារអំពីមហានរកទាំង ៨ ជាន់ (The 8 Great Hells in Niraya)', 'Details of the 8 Great Hells in Niraya') }}</span>
            </span>
            <span
              class="inline-block transition-transform duration-300 text-xs px-2.5 py-1 rounded-full font-medium"
              :class="showEightHells ? 'rotate-180' : ''"
              :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }"
            >
              ▼
            </span>
          </button>
          
          <transition name="slide-down">
            <div v-if="showEightHells" class="grid md:grid-cols-2 gap-3 mt-4 pt-4" :style="{ borderTop: '1px solid var(--border)' }">
              <div v-for="h in eightHells" :key="h.name" class="p-3.5 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
                <div class="flex items-baseline justify-between">
                  <strong class="text-sm font-bold" :style="{ color: 'var(--ink)' }">{{ h.num }}. {{ t(h.nameKm, h.nameEn) }}</strong>
                  <span class="paali text-xs">{{ h.pl }}</span>
                </div>
                <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(h.descKm, h.descEn) }}</p>
                <p class="text-[11px] mt-2 font-medium" :style="{ color: 'var(--accent)' }">
                  {{ t('អាយុ៖ ', 'Lifespan: ') }}{{ t(h.spanKm, h.spanEn) }}
                </p>
              </div>
            </div>
          </transition>
        </div>

        <!-- Detail of Pretas and Paradattūpajīvī Peta Reactive Accordion -->
        <div class="card-paper p-5 mt-3">
          <button
            type="button"
            class="w-full flex items-center justify-between text-left font-bold text-base select-none cursor-pointer"
            :style="{ color: 'var(--accent)' }"
            @click="showPretasInfo = !showPretasInfo"
          >
            <span class="flex items-center gap-2">
              <span>👻</span>
              <span>{{ t('ពួកប្រេត និងលក្ខខណ្ឌដែលប្រេតអាចទទួលផលបុណ្យបាន (The Pretas & Sharing Merit)', 'Types of Pretas & How Merits are Received') }}</span>
            </span>
            <span
              class="inline-block transition-transform duration-300 text-xs px-2.5 py-1 rounded-full font-medium"
              :class="showPretasInfo ? 'rotate-180' : ''"
              :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }"
            >
              ▼
            </span>
          </button>

          <transition name="slide-down">
            <div v-if="showPretasInfo" class="mt-4 pt-3 text-sm leading-relaxed" :style="{ borderTop: '1px solid var(--border)', color: 'var(--ink-soft)' }">
              <p>
                {{ t('ក្នុងចំណោមប្រេតទាំងអស់ មានតែប្រេតប្រភេទមួយគត់ គឺ «បរទត្តូបជីវីប្រេត» (ប្រេតដែលរស់នៅដោយសារផលបុណ្យដែលអ្នកដទៃឧទ្ទិសឱ្យ) ទើបអាចទទួលផលបុណ្យកុសលពីញាតិបាន ក្នុងលក្ខខណ្ឌ ៣ ប្រការ៖', 'Among all types of pretas, ONLY ONE type — the Paradattūpajīvī Peta (beings living off gifts dedicated by others) — can partake of merits transferred by living relatives, provided three conditions are met:') }}
              </p>
              <ul class="tick-list mt-3 text-xs">
                <li><strong>{{ t('១. ញាតិឧទ្ទិសចំឈ្មោះ និងមានចិត្តស្អាតស្អំ', '1. Relatives dedicate with pure intention specifically') }}</strong></li>
                <li><strong>{{ t('២. ទាននោះជាទក្ខិណាទានថ្វាយដល់ព្រះសង្ឃ ឬអ្នកមានសីលបរិសុទ្ធ', '2. The gift is offered to the virtuous Sangha') }}</strong></li>
                <li><strong>{{ t('៣. ប្រេតនោះបានដឹង និងបានលើកដៃអនុមោទនា «សាធុ!» ដោយខ្លួនឯង', '3. The peta is aware and rejoices with "Sādhu!"') }}</strong></li>
              </ul>
            </div>
          </transition>
        </div>
      </div>

      <!-- 2. Seven Sensuous Blissful Realms (កាមសុគតិភូមិ ៧) -->
      <div v-if="filteredSugati.length" class="space-y-4">
        <div class="flex items-center gap-2">
          <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">៥–១១</span>
          <h3 class="font-display text-2xl" :style="{ color: 'var(--ink)' }">
            {{ t('កាមសុគតិភូមិ ៧ (មនុស្ស ១ & ឋានសួគ៌ ៦)', 'The 7 Sensuous Blissful Realms (Kāmasugati)') }}
          </h3>
        </div>
        <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ភពនៃសេចក្តីសុខខាងកាមគុណទិព្វ កើតឡើងដោយអំណាចនៃទាន សីល ៥ និងកុសលកម្មបថ ១០។', 'Realms of sensuous delight and virtue born of moral restraint (sīla), charity (dāna), and goodwill.') }}
        </p>

        <div class="grid items-start md:grid-cols-2 gap-4">
          <div v-for="r in filteredSugati" :key="r.num"
            class="card-paper p-5 transition-all duration-200"
            :style="isExpanded(r.num) ? { borderColor: 'var(--accent-bright)', background: 'var(--accent-soft)' } : {}">
            
            <div class="cursor-pointer select-none" @click="toggleRealm(r.num)">
              <div class="flex items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="sutra-num font-bold" :style="{ color: 'var(--accent-bright)' }">#{{ khNum(r.num) }}</span>
                  <span class="text-[10px] px-2 py-0.5 rounded-full font-medium"
                    :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)', border: '1px solid var(--border)' }">
                    {{ t(r.planeKm, r.planeEn) }}
                  </span>
                </div>
                <span class="paali">{{ r.pl }}</span>
              </div>

              <h4 class="font-display text-lg md:text-xl mt-2 flex items-center justify-between gap-2" :style="{ color: 'var(--ink)' }">
                <span>{{ t(r.km, r.en) }}</span>
                <span
                  class="text-xs p-1 rounded-full transition-transform duration-300 inline-block shrink-0"
                  :class="isExpanded(r.num) ? 'rotate-180 text-amber-700' : 'text-stone-400'"
                >
                  ▼
                </span>
              </h4>

              <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(r.shortDescKm, r.shortDescEn) }}</p>

              <div class="mt-3 pt-2 text-xs flex items-center justify-between gap-2" :style="{ borderTop: '1px dashed var(--border)', color: 'var(--ink-muted)' }">
                <span class="truncate"><strong>{{ t('អាយុកាល៖ ', 'Span: ') }}</strong>{{ t(r.spanKm, r.spanEn) }}</span>
                
                <button
                  type="button"
                  class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full shrink-0 transition-all duration-200 shadow-sm"
                  :style="isExpanded(r.num)
                    ? { background: 'var(--accent-bright)', color: '#ffffff' }
                    : { background: 'var(--bg-card-2)', color: 'var(--accent)', border: '1px solid var(--border)' }"
                  @click.stop="toggleRealm(r.num)">
                  <span>{{ isExpanded(r.num) ? t('បង្រួមវិញ', 'Collapse') : t('មើលលម្អិត', 'View Details') }}</span>
                  <span
                    class="inline-block transition-transform duration-300 text-[10px]"
                    :class="isExpanded(r.num) ? 'rotate-180' : ''">
                    ▼
                  </span>
                </button>
              </div>
            </div>

            <!-- Slide-down Expandable Drawer -->
            <transition name="slide-down">
              <div v-if="isExpanded(r.num)" class="mt-4 pt-4 border-t border-dashed" :style="{ borderColor: 'var(--border)' }">
                <!-- Attributes Grid -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                  <div class="p-2.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                    <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('អាយុកាល', 'Lifespan') }}</p>
                    <p class="font-bold text-xs mt-1" :style="{ color: 'var(--ink)' }">{{ t(r.spanKm, r.spanEn) }}</p>
                  </div>
                  <div class="p-2.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                    <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('ខន្ធដែលមាន', 'Aggregates') }}</p>
                    <p class="font-bold text-xs mt-1" :style="{ color: 'var(--ink)' }">{{ t(r.aggregatesKm, r.aggregatesEn) }}</p>
                  </div>
                  <div class="p-2.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                    <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('ចិត្តបដិសន្ធិ', 'Rebirth Mind') }}</p>
                    <p class="font-bold text-xs mt-1 leading-snug" :style="{ color: 'var(--ink)' }">{{ t(r.cittaKm, r.cittaEn) }}</p>
                  </div>
                  <div class="p-2.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                    <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('ព្រះអរិយបុគ្គល', 'Ariya / Bodhisatta') }}</p>
                    <p class="font-bold text-xs mt-1" :style="{ color: 'var(--ink)' }">{{ t(r.ariyaKm, r.ariyaEn) }}</p>
                  </div>
                </div>

                <!-- Long Description -->
                <div class="mt-3 p-3.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                  <p class="text-[10px] font-bold uppercase tracking-wider mb-1" :style="{ color: 'var(--accent)' }">
                    {{ t('សភាពនៃជីវិត និងបរិស្ថានក្នុងភពនេះ', 'Realm Life & Environment') }}
                  </p>
                  <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(r.longDescKm, r.longDescEn) }}
                  </p>
                </div>

                <!-- Specific Kamma Cause -->
                <div class="mt-2.5 p-3.5 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--accent)' }">
                  <p class="text-[10px] font-bold uppercase tracking-wider mb-1" :style="{ color: 'var(--accent-bright)' }">
                    ⚖️ {{ t('ហេតុនៃកម្មជាក់លាក់ដែលនាំឱ្យទៅកើត', 'Specific Kamma Cause') }}
                  </p>
                  <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(r.kammaDetailKm, r.kammaDetailEn) }}
                  </p>
                </div>

                <div class="mt-3 flex justify-end">
                  <button
                    type="button"
                    class="text-xs py-1 px-3 rounded-full font-medium inline-flex items-center gap-1 transition"
                    :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)', border: '1px solid var(--border)' }"
                    @click.stop="toggleRealm(r.num)"
                  >
                    <span>▲</span>
                    <span>{{ t('បង្រួមភពនេះវិញ', 'Collapse this realm') }}</span>
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- 3. Sixteen Fine-Material Realms (រូបភូមិ ១៦) -->
      <div v-if="filteredRupa.length" class="space-y-4">
        <div class="flex items-center gap-2">
          <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">១២–២៧</span>
          <h3 class="font-display text-2xl" :style="{ color: 'var(--ink)' }">
            {{ t('រូបភូមិ ១៦ (ភពនៃរូបព្រហ្ម តាមកម្រិតឈាន)', 'The 16 Fine-Material Brahma Realms (Rūpa Bhūmi)') }}
          </h3>
        </div>
        <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ភពនៃព្រហ្មដែលមានរូបកាយល្អិតបរិសុទ្ធ គ្មានកាមរាគៈ កើតឡើងដោយសមថភាវនា សម្រេចរូបឈានទាំង ៤ រួមទាំងសុទ្ធាវាស ៥ ជាន់។', 'Radiant, sublime planes attained through mastering the fine-material jhānas; free of sensual desire and malice.') }}
        </p>

        <div class="grid items-start md:grid-cols-2 gap-4">
          <div v-for="r in filteredRupa" :key="r.num"
            class="card-paper p-5 transition-all duration-200"
            :style="isExpanded(r.num) ? { borderColor: 'var(--accent-bright)', background: 'var(--accent-soft)' } : {}">
            
            <div class="cursor-pointer select-none" @click="toggleRealm(r.num)">
              <div class="flex items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="sutra-num font-bold" :style="{ color: 'var(--accent-bright)' }">#{{ khNum(r.num) }}</span>
                  <span class="text-[10px] px-2 py-0.5 rounded-full font-medium"
                    :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)', border: '1px solid var(--border)' }">
                    {{ t(r.planeKm, r.planeEn) }}
                  </span>
                </div>
                <span class="paali">{{ r.pl }}</span>
              </div>

              <h4 class="font-display text-lg md:text-xl mt-2 flex items-center justify-between gap-2" :style="{ color: 'var(--ink)' }">
                <span>{{ t(r.km, r.en) }}</span>
                <span
                  class="text-xs p-1 rounded-full transition-transform duration-300 inline-block shrink-0"
                  :class="isExpanded(r.num) ? 'rotate-180 text-amber-700' : 'text-stone-400'"
                >
                  ▼
                </span>
              </h4>

              <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(r.shortDescKm, r.shortDescEn) }}</p>

              <div class="mt-3 pt-2 text-xs flex items-center justify-between gap-2" :style="{ borderTop: '1px dashed var(--border)', color: 'var(--ink-muted)' }">
                <span class="truncate"><strong>{{ t('កម្រិតឈាន៖ ', 'Jhāna: ') }}</strong>{{ t(r.jhanaKm, r.jhanaEn) }}</span>
                
                <button
                  type="button"
                  class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full shrink-0 transition-all duration-200 shadow-sm"
                  :style="isExpanded(r.num)
                    ? { background: 'var(--accent-bright)', color: '#ffffff' }
                    : { background: 'var(--bg-card-2)', color: 'var(--accent)', border: '1px solid var(--border)' }"
                  @click.stop="toggleRealm(r.num)">
                  <span>{{ isExpanded(r.num) ? t('បង្រួមវិញ', 'Collapse') : t('មើលលម្អិត', 'View Details') }}</span>
                  <span
                    class="inline-block transition-transform duration-300 text-[10px]"
                    :class="isExpanded(r.num) ? 'rotate-180' : ''">
                    ▼
                  </span>
                </button>
              </div>
            </div>

            <!-- Slide-down Expandable Drawer -->
            <transition name="slide-down">
              <div v-if="isExpanded(r.num)" class="mt-4 pt-4 border-t border-dashed" :style="{ borderColor: 'var(--border)' }">
                <!-- Attributes Grid -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                  <div class="p-2.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                    <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('អាយុកាល', 'Lifespan') }}</p>
                    <p class="font-bold text-xs mt-1" :style="{ color: 'var(--ink)' }">{{ t(r.spanKm, r.spanEn) }}</p>
                  </div>
                  <div class="p-2.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                    <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('ខន្ធដែលមាន', 'Aggregates') }}</p>
                    <p class="font-bold text-xs mt-1" :style="{ color: 'var(--ink)' }">{{ t(r.aggregatesKm, r.aggregatesEn) }}</p>
                  </div>
                  <div class="p-2.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                    <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('ចិត្តបដិសន្ធិ', 'Rebirth Mind') }}</p>
                    <p class="font-bold text-xs mt-1 leading-snug" :style="{ color: 'var(--ink)' }">{{ t(r.cittaKm, r.cittaEn) }}</p>
                  </div>
                  <div class="p-2.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                    <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('ព្រះអរិយបុគ្គល', 'Ariya / Bodhisatta') }}</p>
                    <p class="font-bold text-xs mt-1" :style="{ color: 'var(--ink)' }">{{ t(r.ariyaKm, r.ariyaEn) }}</p>
                  </div>
                </div>

                <div v-if="r.jhanaKm" class="mt-2.5 p-2.5 rounded-sm text-xs" :style="{ background: 'var(--bg-card-2)', color: 'var(--ink)' }">
                  <strong :style="{ color: 'var(--accent)' }">{{ t('កម្រិតឈាន៖ ', 'Jhāna Level: ') }}</strong>
                  {{ t(r.jhanaKm, r.jhanaEn) }}
                </div>

                <!-- Long Description -->
                <div class="mt-3 p-3.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                  <p class="text-[10px] font-bold uppercase tracking-wider mb-1" :style="{ color: 'var(--accent)' }">
                    {{ t('សភាពនៃជីវិត និងបរិស្ថានក្នុងភពនេះ', 'Realm Life & Environment') }}
                  </p>
                  <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(r.longDescKm, r.longDescEn) }}
                  </p>
                </div>

                <!-- Specific Kamma Cause -->
                <div class="mt-2.5 p-3.5 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--accent)' }">
                  <p class="text-[10px] font-bold uppercase tracking-wider mb-1" :style="{ color: 'var(--accent-bright)' }">
                    ⚖️ {{ t('ហេតុនៃកម្មជាក់លាក់ដែលនាំឱ្យទៅកើត', 'Specific Kamma Cause') }}
                  </p>
                  <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(r.kammaDetailKm, r.kammaDetailEn) }}
                  </p>
                </div>

                <div class="mt-3 flex justify-end">
                  <button
                    type="button"
                    class="text-xs py-1 px-3 rounded-full font-medium inline-flex items-center gap-1 transition"
                    :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)', border: '1px solid var(--border)' }"
                    @click.stop="toggleRealm(r.num)"
                  >
                    <span>▲</span>
                    <span>{{ t('បង្រួមភពនេះវិញ', 'Collapse this realm') }}</span>
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- 4. Four Immaterial Realms (អរូបភូមិ ៤) -->
      <div v-if="filteredArupa.length" class="space-y-4">
        <div class="flex items-center gap-2">
          <span class="sutra-num" :style="{ color: 'var(--accent-bright)' }">២៨–៣១</span>
          <h3 class="font-display text-2xl" :style="{ color: 'var(--ink)' }">
            {{ t('អរូបភូមិ ៤ (ភពនៃអរូបព្រហ្ម — មានតែចិត្ត គ្មានរូប)', 'The 4 Immaterial Realms (Arūpa Bhūmi)') }}
          </h3>
        </div>
        <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
          {{ t('កំពូលភពខ្ពស់បំផុតក្នុងលោកិយ ដែលគ្មានរូបរាងកាយសូម្បីតែបន្តិច មានតែនាមធម៌ (ចិត្ត និង ចេតសិក) អាយុកាលរាប់ម៉ឺនមហាកប្ប។', 'The highest formless spheres where mind alone exists without physical form, lasting up to 84,000 Mahākappas.') }}
        </p>

        <div class="grid items-start md:grid-cols-2 gap-4">
          <div v-for="r in filteredArupa" :key="r.num"
            class="card-paper p-5 transition-all duration-200"
            :style="isExpanded(r.num) ? { borderColor: 'var(--accent-bright)', background: 'var(--accent-soft)' } : {}">
            
            <div class="cursor-pointer select-none" @click="toggleRealm(r.num)">
              <div class="flex items-baseline justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="sutra-num font-bold" :style="{ color: 'var(--accent-bright)' }">#{{ khNum(r.num) }}</span>
                  <span class="text-[10px] px-2 py-0.5 rounded-full font-medium"
                    :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)', border: '1px solid var(--border)' }">
                    {{ t(r.planeKm, r.planeEn) }}
                  </span>
                </div>
                <span class="paali">{{ r.pl }}</span>
              </div>

              <h4 class="font-display text-lg md:text-xl mt-2 flex items-center justify-between gap-2" :style="{ color: 'var(--ink)' }">
                <span>{{ t(r.km, r.en) }}</span>
                <span
                  class="text-xs p-1 rounded-full transition-transform duration-300 inline-block shrink-0"
                  :class="isExpanded(r.num) ? 'rotate-180 text-amber-700' : 'text-stone-400'"
                >
                  ▼
                </span>
              </h4>

              <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(r.shortDescKm, r.shortDescEn) }}</p>

              <div class="mt-3 pt-2 text-xs flex items-center justify-between gap-2" :style="{ borderTop: '1px dashed var(--border)', color: 'var(--ink-muted)' }">
                <span class="truncate"><strong>{{ t('អាយុកាល៖ ', 'Span: ') }}</strong>{{ t(r.spanKm, r.spanEn) }}</span>
                
                <button
                  type="button"
                  class="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full shrink-0 transition-all duration-200 shadow-sm"
                  :style="isExpanded(r.num)
                    ? { background: 'var(--accent-bright)', color: '#ffffff' }
                    : { background: 'var(--bg-card-2)', color: 'var(--accent)', border: '1px solid var(--border)' }"
                  @click.stop="toggleRealm(r.num)">
                  <span>{{ isExpanded(r.num) ? t('បង្រួមវិញ', 'Collapse') : t('មើលលម្អិត', 'View Details') }}</span>
                  <span
                    class="inline-block transition-transform duration-300 text-[10px]"
                    :class="isExpanded(r.num) ? 'rotate-180' : ''">
                    ▼
                  </span>
                </button>
              </div>
            </div>

            <!-- Slide-down Expandable Drawer -->
            <transition name="slide-down">
              <div v-if="isExpanded(r.num)" class="mt-4 pt-4 border-t border-dashed" :style="{ borderColor: 'var(--border)' }">
                <!-- Attributes Grid -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                  <div class="p-2.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                    <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('អាយុកាល', 'Lifespan') }}</p>
                    <p class="font-bold text-xs mt-1" :style="{ color: 'var(--ink)' }">{{ t(r.spanKm, r.spanEn) }}</p>
                  </div>
                  <div class="p-2.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                    <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('ខន្ធដែលមាន', 'Aggregates') }}</p>
                    <p class="font-bold text-xs mt-1" :style="{ color: 'var(--ink)' }">{{ t(r.aggregatesKm, r.aggregatesEn) }}</p>
                  </div>
                  <div class="p-2.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                    <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('ចិត្តបដិសន្ធិ', 'Rebirth Mind') }}</p>
                    <p class="font-bold text-xs mt-1 leading-snug" :style="{ color: 'var(--ink)' }">{{ t(r.cittaKm, r.cittaEn) }}</p>
                  </div>
                  <div class="p-2.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                    <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('ព្រះអរិយបុគ្គល', 'Ariya / Bodhisatta') }}</p>
                    <p class="font-bold text-xs mt-1" :style="{ color: 'var(--ink)' }">{{ t(r.ariyaKm, r.ariyaEn) }}</p>
                  </div>
                </div>

                <!-- Long Description -->
                <div class="mt-3 p-3.5 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
                  <p class="text-[10px] font-bold uppercase tracking-wider mb-1" :style="{ color: 'var(--accent)' }">
                    {{ t('សភាពនៃជីវិត និងបរិស្ថានក្នុងភពនេះ', 'Realm Life & Environment') }}
                  </p>
                  <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(r.longDescKm, r.longDescEn) }}
                  </p>
                </div>

                <!-- Specific Kamma Cause -->
                <div class="mt-2.5 p-3.5 rounded-sm" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--accent)' }">
                  <p class="text-[10px] font-bold uppercase tracking-wider mb-1" :style="{ color: 'var(--accent-bright)' }">
                    ⚖️ {{ t('ហេតុនៃកម្មជាក់លាក់ដែលនាំឱ្យទៅកើត', 'Specific Kamma Cause') }}
                  </p>
                  <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                    {{ t(r.kammaDetailKm, r.kammaDetailEn) }}
                  </p>
                </div>

                <div class="mt-3 flex justify-end">
                  <button
                    type="button"
                    class="text-xs py-1 px-3 rounded-full font-medium inline-flex items-center gap-1 transition"
                    :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)', border: '1px solid var(--border)' }"
                    @click.stop="toggleRealm(r.num)"
                  >
                    <span>▲</span>
                    <span>{{ t('បង្រួមភពនេះវិញ', 'Collapse this realm') }}</span>
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeCategory = ref('all')
const searchQuery = ref('')
const expandedRealms = ref(new Set())
const showEightHells = ref(false)
const showPretasInfo = ref(false)

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  return String(n).split('').map(d => khDigits[Number(d)] ?? d).join('')
}

function isExpanded(num) {
  return expandedRealms.value.has(num)
}

function toggleRealm(num) {
  const next = new Set(expandedRealms.value)
  if (next.has(num)) {
    next.delete(num)
  } else {
    next.add(num)
  }
  expandedRealms.value = next
}

function expandAll() {
  expandedRealms.value = new Set(allRealms.map(r => r.num))
}

function collapseAll() {
  expandedRealms.value = new Set()
}

const categories = [
  { id: 'all', km: 'ទាំងអស់ (៣១ ភព)', en: 'All 31 Realms' },
  { id: 'apaya', km: 'អបាយភូមិ ៤', en: '4 Woeful' },
  { id: 'sugati', km: 'កាមសុគតិ ៧', en: '7 Blissful Sensuous' },
  { id: 'rupa', km: 'រូបភូមិ ១៦', en: '16 Fine-Material' },
  { id: 'suddhavasa', km: 'សុទ្ធាវាស ៥', en: '5 Pure Abodes' },
  { id: 'arupa', km: 'អរូបភូមិ ៤', en: '4 Formless' },
]

// The 8 Great Hells in Niraya
const eightHells = [
  {
    num: '១',
    pl: 'Sañjīva Niraya',
    nameKm: 'សញ្ជីវនរក (នរកកាប់ចិញ្ច្រាំហើយរស់ឡើងវិញ)',
    nameEn: 'Sañjīva Hell (Reviving Hell)',
    descKm: 'សត្វនរកត្រូវយមបាលយកអាវុធមុតកាប់ចិញ្ច្រាំជាបំណែកៗ រួចមានខ្យល់កម្មបក់មកឱ្យសាច់ដុះជាខ្លួនឡើងវិញ ហើយត្រូវកាប់បន្តឥតឈប់ឈរ។',
    descEn: 'Beings are chopped into pieces; an icy karmic wind blows over them, reviving their flesh to undergo the same torment perpetually.',
    spanKm: '៥០០ ឆ្នាំនរក (ស្មើនឹង ៩ លានឆ្នាំមនុស្ស)',
    spanEn: '500 hell years (= 9 million human years)',
  },
  {
    num: '២',
    pl: 'Kālasutta Niraya',
    nameKm: 'កាឡសុត្តនរក (នរកបន្ទាត់ខ្មៅអារច្រៀក)',
    nameEn: 'Kālasutta Hell (Black Thread Hell)',
    descKm: 'សត្វនរកត្រូវគេយកខ្សែបន្ទាត់ដែកខ្មៅឆេះក្រហមមកគូសវាស់លើខ្លួន រួចយកពូថៅ និងរណារដែកភ្លើងច្រៀកកាត់តាមបន្ទាត់នោះ។',
    descEn: 'Wardens snap glowing black cords onto victims\' bodies to mark lines, then saw and hack along the cords with flaming blades.',
    spanKm: '១,០០០ ឆ្នាំនរក (ស្មើនឹង ៣៦ លានឆ្នាំមនុស្ស)',
    spanEn: '1,000 hell years (= 36 million human years)',
  },
  {
    num: '៣',
    pl: 'Sanghāta Niraya',
    nameKm: 'សង្ឃាតនរក (នរកភ្នំដែកកិនកម្ទេច)',
    nameEn: 'Sanghāta Hell (Crushing Mountains Hell)',
    descKm: 'ភ្នំដែកភ្លើងធំៗឆេះសន្ធោសន្ធៅរមៀលបុកគ្នាពីទិសទាំង ៤ កិនកម្ទេចសត្វនរកឱ្យបែកខ្ទេចដូចគ្រាប់ស្ពៃ ឈាមហូរដូចស្ទឹង។',
    descEn: 'Gigantic flaming iron mountains roll in from the four cardinal directions, grinding multitudes of beings to dust.',
    spanKm: '២,០០០ ឆ្នាំនរក (ស្មើនឹង ១៤៤ លានឆ្នាំមនុស្ស)',
    spanEn: '2,000 hell years (= 144 million human years)',
  },
  {
    num: '៤',
    pl: 'Roruva Niraya',
    nameKm: 'រោរុវនរក / ជលរោរុវ (នរកផ្សែងភ្លើងចូលតាមទ្វារទាំង ៩)',
    nameEn: 'Roruva Hell (Screaming Smoke Hell)',
    descKm: 'ផ្សែងភ្លើងក្តៅគគុកបាញ់ទម្លុះចូលតាមទ្វាររាងកាយទាំង ៩ (ភ្នែក ច្រមុះ មាត់ ត្រចៀក...) ធ្វើឱ្យសត្វនរកស្រែកទ្រហោយំយ៉ាងខ្លាំង។',
    descEn: 'Dense, caustic smoke blasts through the nine bodily apertures, causing unbearable burning and ceaseless screaming.',
    spanKm: '៤,០០០ ឆ្នាំនរក (ស្មើនឹង ៥៧៦ លានឆ្នាំមនុស្ស)',
    spanEn: '4,000 hell years (= 576 million human years)',
  },
  {
    num: '៥',
    pl: 'Mahāroruva Niraya',
    nameKm: 'មហារោរុវនរក / ធូមរោរុវ (នរកអណ្តាតភ្លើងឆេះទម្លុះ)',
    nameEn: 'Mahāroruva Hell (Great Screaming Fire Hell)',
    descKm: 'អណ្តាតភ្លើងដ៏ក្លៀវក្លាឆេះសន្ធោសន្ធៅទម្លុះចូលក្នុងទ្វារទាំង ៩ ស្រែកខ្លាំងជាងរោរុវនរកដប់ដង វេទនាលើសលប់។',
    descEn: 'Blazing torrents of fire penetrate the bodily cavities; the agony and screams surpass Roruva tenfold.',
    spanKm: '៨,០០០ ឆ្នាំនរក (ស្មើនឹង ២,៣០៤ លានឆ្នាំមនុស្ស)',
    spanEn: '8,000 hell years (= 2.3 billion human years)',
  },
  {
    num: '៦',
    pl: 'Tāpana Niraya',
    nameKm: 'តាបននរក (នរកដោតឆ្កាងលើដែកស្រួច)',
    nameEn: 'Tāpana Hell (Tormenting Stake Hell)',
    descKm: 'សត្វនរកត្រូវគេដោតដោលលើចម្រូងដែកភ្លើងទំហំប៉ុនដើមត្នោត ឆេះសន្ធោសន្ធៅរោលខ្លោចសាច់។',
    descEn: 'Beings are impaled upon red-hot iron spikes as massive as palm trees while roaring flames burn them day and night.',
    spanKm: '១៦,០០០ ឆ្នាំនរក (ស្មើនឹង ៩,២១៦ លានឆ្នាំមនុស្ស)',
    spanEn: '16,000 hell years (= 9.2 billion human years)',
  },
  {
    num: '៧',
    pl: 'Mahātāpana Niraya',
    nameKm: 'មហាតាបននរក (នរកភ្នំដែកស្រួច)',
    nameEn: 'Mahātāpana Hell (Great Torment Hell)',
    descKm: 'សត្វនរកត្រូវយមបាលដេញវាយឱ្យឡើងលើភ្នំដែកឆេះក្រហម ហើយត្រូវខ្យល់បោកធ្លាក់មកក្រោមលើចម្រូងលំពែងស្រួចៗ។',
    descEn: 'Victims are forced up blistering iron cliffs at whip-point, only to be blown off onto beds of razor-sharp pikes below.',
    spanKm: 'កន្លះអន្តរកប្ប (Half an Antarakappa)',
    spanEn: 'Half an Antarakappa of cosmic time',
  },
  {
    num: '៨',
    pl: 'Avīci Mahāniraya',
    nameKm: 'អវិចីមហានរក (នរកគ្មានចន្លោះ / ជ្រៅបំផុត)',
    nameEn: 'Avīci Great Hell (Uninterrupted Hell)',
    descKm: 'កំពូលមហានរកដ៏ធ្ងន់បំផុត អណ្តាតភ្លើងឆេះណែនក្តន់រកចន្លោះគ្មាន ទុក្ខវេទនាមិនមានការសម្រាកសូម្បីមួយប៉ប្រិចភ្នែក សម្រាប់អ្នកប្រព្រឹត្តអនន្តរិយកម្ម ៥ (សម្លាប់ម្តាយ ឪពុក អរហន្ត ធ្វើឱ្យព្រះពុទ្ធចេញឈាម បំបែកសង្ឃ) ដូចជាទេវទត្ត។',
    descEn: 'The deepest, most relentless abyss of fire where torment is continuous without a millisecond of gap. Reserved for heinous crimes (Anantariya-kamma) like matricide, patricide, wounding a Buddha, or creating a schism in the Sangha.',
    spanKm: '១ អន្តរកប្បពេញ (One Full Antarakappa)',
    spanEn: 'One full Antarakappa of cosmic time',
  },
]

// All 31 Individual Realms Master Dataset
const allRealms = [
  // 1-4 Woeful
  {
    num: 1,
    cat: 'apaya',
    pl: 'Niraya',
    km: 'និរយភូមិ (មហានរក ៨ ជាន់ & ឧស្សទនរក)',
    en: 'Hell Realms (Niraya)',
    planeKm: 'អបាយភូមិ', planeEn: 'Woeful State',
    spanKm: 'រហូតដល់ ១ អន្តរកប្ប (ក្នុងអវិចី)', spanEn: 'Up to 1 full Antarakappa in Avīci',
    aggregatesKm: '៥ ខន្ធ (មានរូបកាយដែលត្រូវភ្លើងដុតមិនចេះស្លាប់)', aggregatesEn: '5 aggregates (refined physical body that feels agony)',
    cittaKm: 'អហេតុកអកុសលវិបាក ឧបេក្ខាសហគត សន្តីរណចិត្ត (១ ដួង)', cittaEn: '1 Unwholesome Resultant Investigating Mind',
    ariyaKm: 'គ្មានព្រះអរិយបុគ្គលឡើយ (ព្រះសោតាបន្នផុតពីនរក)', ariyaEn: 'No Ariyas (Sotapannas are free from hell)',
    shortDescKm: 'ទីកន្លែងដែលសត្វត្រូវរងទុក្ខវេទនាឥតឈប់ឈរដោយភ្លើងនរក អាវុធ និងការធ្វើទណ្ឌកម្ម។',
    shortDescEn: 'Realms of ceaseless agony under flames and torture, with 8 Great Hells and 16 satellite hells.',
    longDescKm: 'នរកស្ថិតនៅខាងក្រោមកម្រាស់ដីនៃជម្ពូទ្វីបនេះ។ មហានរកទាំង ៨ ជាន់មានជញ្ជាំងដែកក្រាស់ឆេះសន្ធោសន្ធៅ។ ក្រៅពីមហានរក ៨ មានឧស្សទនរក ១៦ ព័ទ្ធជុំវិញ ដូចជា ព្រៃដែកស្លឹកជាដាវ (អសិបត្តវ័ន), ដើមរកាមានបន្លាដែក (សិម្ពលីវ័ន), និងស្ទឹងទឹកដែកក្តៅ (វេតរណី)។',
    longDescEn: 'Located deep below the earth. Surrounded by 16 satellite hells (Ussada Niraya) including the forest of sword-bladed leaves, the iron-thorned silk-cotton trees, and the caustic river Vetaranī.',
    kammaDetailKm: 'កម្មដែលនាំឱ្យធ្លាក់នរក គឺអកុសលកម្មធ្ងន់ៗដែលប្រកបដោយ «ទោសៈ» កំហឹង គំនុំ ការសម្លាប់ជីវិត ការធ្វើទារុណកម្ម និងអនន្តរិយកម្ម ៥ (សម្លាប់ម្តាយ ឪពុក ព្រះអរហន្ត បំបែកសង្ឃ ធ្វើឱ្យព្រះពុទ្ធចេញឈាម)។',
    kammaDetailEn: 'Heavy unwholesome actions dominated by hatred (dosa), cruelty, torture, violence, and the 5 heinous crimes (Anantariya-kamma).',
  },
  {
    num: 2,
    cat: 'apaya',
    pl: 'Pettivisaya',
    km: 'បេត្តិវិស័យ (ប្រេតភូមិ)',
    en: 'Ghost Realm (Peta)',
    planeKm: 'អបាយភូមិ', planeEn: 'Woeful State',
    spanKm: 'រាប់រយដល់រាប់ម៉ឺនឆ្នាំមនុស្ស (តាមកម្លាំងកម្ម)', spanEn: 'Hundreds to thousands of human years',
    aggregatesKm: '៥ ខន្ធ (រូបរាងកាយស្គមស្គាំងអាក្រក់មើល)', aggregatesEn: '5 aggregates (frail phantom bodies)',
    cittaKm: 'អហេតុកអកុសលវិបាក ឧបេក្ខាសហគត សន្តីរណចិត្ត', cittaEn: 'Unwholesome resultant rebirth consciousness',
    ariyaKm: 'គ្មានព្រះអរិយបុគ្គលឡើយ', ariyaEn: 'No Ariyas present',
    shortDescKm: 'សត្វស្រេកឃ្លានជាប្រចាំ ស្រេកទឹកស្រេកបាយ វេទនារាប់ពាន់ឆ្នាំ។',
    shortDescEn: 'Beings subjected to chronic starvation, intense thirst, and physical torment.',
    longDescKm: 'ពួកប្រេតរស់នៅតាមព្រៃ ភ្នំ មហាសមុទ្រ ឬក្បែរលំនៅដ្ឋានមនុស្ស។ ប្រេតចែកជាច្រើនពួក ដូចជា សូចិមុខប្រេត (មាត់ប៉ុនម្ជុល ពោះប៉ុនភ្នំ), អគ្គិជាលមុខប្រេត (ភ្លើងឆេះមាត់), គូថខាទកប្រេត (ស៊ីលាមក)។ មានតែ «បរទត្តូបជីវីប្រេត» ប៉ុណ្ណោះដែលអាចទទួលបុណ្យដែលញាតិឧទ្ទិសឱ្យបាន។',
    longDescEn: 'Pretas wander hills, forests, and remote wastelands. Types include needle-mouthed pretas with mountain bellies, vomit-eaters, and flame-mouthed pretas. Only Paradattūpajīvī pretas can receive transferred merits.',
    kammaDetailKm: 'កម្មដែលនាំឱ្យកើតជាប្រេត គឺអកុសលកម្មដែលកើតពី «លោភៈ» សេចក្តីកំណាញ់ស្វិតស្វាញ មិនព្រមធ្វើទាន លួចបន្លំទ្រព្យសម្បត្តិអ្នកដទៃ ឬទ្រព្យសង្ឃ និងការជាប់ជំពាក់ទ្រព្យធនខ្លាំងនៅពេលជិតស្លាប់។',
    kammaDetailEn: 'Actions rooted in intense greed (lobha), extreme stinginess, embezzlement of public or religious property, and intense material attachment at death.',
  },
  {
    num: 3,
    cat: 'apaya',
    pl: 'Asurakāya',
    km: 'អសុរកាយភូមិ',
    en: 'Demon Realm (Asura)',
    planeKm: 'អបាយភូមិ', planeEn: 'Woeful State',
    spanKm: 'រាប់ពាន់ឆ្នាំមនុស្ស', spanEn: 'Thousands of human years',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'អហេតុកអកុសលវិបាក ឧបេក្ខាសហគត សន្តីរណចិត្ត', cittaEn: 'Unwholesome resultant rebirth consciousness',
    ariyaKm: 'គ្មានព្រះអរិយបុគ្គលឡើយ', ariyaEn: 'No Ariyas present',
    shortDescKm: 'ពួកអសុររងទុក្ខដូចជាប្រេតដែរ តែមានកាយវិការកាចសាហាវ លាក់ពួនតាមជ្រលងភ្នំ និងសមុទ្រ។',
    shortDescEn: 'Tormented phantom beings driven by pride, jealousy, and fear, dwelling in crevices and sea depths.',
    longDescKm: 'អសុរក្នុងអបាយភូមិសំដៅលើ «កាលកញ្ជិកាសុរ» ដែលមានរូបរាងស្គមស្គាំងរងទុក្ខវេទនាស្រេកឃ្លានដូចជាប្រេតដែរ តែមានចិត្តកាចសាហាវ និងខ្លាចពន្លឺថ្ងៃ ចូលចិត្តលាក់ខ្លួនតាមជ្រលងភ្នំ និងបាតសមុទ្រ។',
    longDescEn: 'Refers specifically to Kālakañjika Asuras who resemble pretas with immense hunger and grotesque bodies, hiding in dark ravines and abysses.',
    kammaDetailKm: 'កម្មដែលនាំឱ្យកើតជាអសុរ គឺការរស់នៅដោយអំនួត ឆ្មើងឆ្មៃ គំនុំកាចសាហាវ ច្រណែនឈ្នានីស និងការបោកប្រាស់អ្នកដទៃ។',
    kammaDetailEn: 'Caused by jealousy, boasting, deceitful aggression, vanity, and hostility towards others.',
  },
  {
    num: 4,
    cat: 'apaya',
    pl: 'Tiracchānayoni',
    km: 'តិរច្ឆានភូមិ (សត្វតិរច្ឆាន)',
    en: 'Animal Realm (Tiracchāna)',
    planeKm: 'អបាយភូមិ', planeEn: 'Woeful State',
    spanKm: 'ប៉ុន្មានថ្ងៃ ដល់រាប់រយឆ្នាំ (តាមប្រភេទសត្វ)', spanEn: 'A few days to hundreds of years',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'អហេតុកអកុសលវិបាក ឧបេក្ខាសហគត សន្តីរណចិត្ត', cittaEn: 'Unwholesome resultant rebirth consciousness',
    ariyaKm: 'គ្មានព្រះអរិយបុគ្គលឡើយ (ព្រះពោធិសត្វធ្លាប់កើត)', ariyaEn: 'No Ariyas (Bodhisattas were born as animals in Jātakas)',
    shortDescKm: 'សត្វដែលរស់នៅជាមួយមនុស្ស ត្រូវរងទុក្ខដោយការស៊ីសាច់គ្នា ការស្រេកឃ្លាន និងការជិះជាន់។',
    shortDescEn: 'The animal world sharing the human realm, dominated by instinct, fear, and predation.',
    longDescKm: 'សត្វតិរច្ឆានចែកជា ៤ ប្រភេទ៖ អបទៈ (ឥតជើង ដូចជាពស់), ទ្វិបទៈ (ជើងពីរ ដូចសត្វស្លាប), ចតុប្បទៈ (ជើងបួន), ពហុប្បទៈ (ជើងច្រើន ដូចជាក្អែប)។ ពួកវាត្រូវរងទុក្ខ ៣ យ៉ាង៖ ការភ័យខ្លាចការស៊ីសាច់គ្នា, ទុក្ខដោយអាកាសធាតុនិងអត់ឃ្លាន, និងការត្រូវគេវាយដំជិះជាន់។',
    longDescEn: 'Divided into footless, two-footed, four-footed, and many-footed creatures. They endure three primary miseries: mutual predation, severe elemental exposure, and servitude under humans.',
    kammaDetailKm: 'កម្មដែលនាំឱ្យកើតជាសត្វតិរច្ឆាន គឺ «មោហៈ» សេចក្តីល្ងង់ខ្លៅ វង្វេងក្នុងកាម ការមិនដឹងខុសត្រូវ និងការរស់នៅបម្រើតែសភាវគតិស៊ីដេកដូចសត្វ។',
    kammaDetailEn: 'Driven primarily by delusion (moha), blind instinctive desire, moral ignorance, and living entirely for base physical appetites.',
  },

  // 5-11 Sensuous Blissful (Kāmasugati)
  {
    num: 5,
    cat: 'sugati',
    pl: 'Manussa Loka',
    km: 'មនុស្សភូមិ (ពិភពមនុស្ស)',
    en: 'Human Realm (Manussa)',
    planeKm: 'កាមសុគតិភូមិ', planeEn: 'Sensuous Blissful',
    spanKm: 'ប្រហែល ១០០ ឆ្នាំ (ប្រែប្រួលតាមយុគ)', spanEn: 'Around 100 years in our era',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'មហាកុសលវិបាក ៨ ឬ អហេតុកកុសលវិបាក ១', cittaEn: 'Great Wholesome Resultant Consciousness',
    ariyaKm: 'មានអរិយបុគ្គលគ្រប់ថ្នាក់ & ព្រះពុទ្ធគ្រប់អង្គ', ariyaEn: 'All Ariyas & all Buddhas arise here',
    shortDescKm: 'ភូមិដ៏ប្រសើរបំផុតសម្រាប់បដិបត្តិធម៌ មានទាំងសុខនិងទុក្ខ ញ៉ាំងឱ្យកើតបញ្ញា។',
    shortDescEn: 'The premier realm for spiritual awakening, balancing suffering and happiness.',
    longDescKm: 'មនុស្សលោកចែកជា ៤ ទ្វីបធំៗ៖ ជម្ពូទ្វីប (ទ្វីបខាងត្បូង គឺពិភពលោកយើងនេះ), ឧត្តរកុរុទ្វីប (ខាងជើង), បុព្វវិទេហទ្វីប (ខាងកើត), អបរគោយានទ្វីប (ខាងលិច)។ ជម្ពូទ្វីបជាកន្លែងតែមួយគត់ដែលព្រះពុទ្ធគ្រប់ព្រះអង្គ និងព្រះបច្ចេកពុទ្ធទ្រង់ត្រាស់ដឹង ព្រោះមនុស្សជម្ពូទ្វីបមានលក្ខណៈពិសេស ៣ យ៉ាងលើសទេវតា៖ សូរភាព (សេចក្តីក្លាហាន), សតិមន្តភាព (សតិរឹងមាំ), និង ព្រហ្មចរិយវាស (ការប្រព្រឹត្តធម៌បរិសុទ្ធ)។',
    longDescEn: 'Four major continents surround Mount Meru: Jambudīpa (our world), Uttarakuru, Pubbavideha, and Aparagoyāna. Jambudīpa is unique: only here do Sammāsambuddhas arise, because human beings possess unique moral courage, clarity of mindfulness, and capability for the holy life.',
    kammaDetailKm: 'កម្មដែលនាំឱ្យកើតជាមនុស្ស គឺការរក្សាបញ្ចសីល (សីល ៥) ឱ្យបរិសុទ្ធ និងការបំពេញកុសលកម្មបថ ១០ ប្រការ។',
    kammaDetailEn: 'Attained through the observance of the Five Precepts and the practice of the Ten Wholesome Courses of Action (Kusalakammapatha).',
  },
  {
    num: 6,
    cat: 'sugati',
    pl: 'Cātumahārājikā',
    km: 'ចាតុម្មហារាជិកា (ឋានសួគ៌ជាន់ទី ១)',
    en: 'Four Great Kings (Cātumahārājikā)',
    planeKm: 'កាមសុគតិភូមិ (សួគ៌ជាន់ទី ១)', planeEn: '1st Deva Heaven',
    spanKm: '៥០០ ឆ្នាំទិព្វ (ស្មើនឹង ៩ លានឆ្នាំមនុស្ស)', spanEn: '500 celestial yrs (= 9 million human yrs)',
    aggregatesKm: '៥ ខន្ធ (កាយទិព្វ)', aggregatesEn: '5 aggregates (ethereal radiant body)',
    cittaKm: 'មហាកុសលវិបាក ៨', cittaEn: 'Great Wholesome Resultant Consciousness',
    ariyaKm: 'មានព្រះសោតាបន្ន, សកទាគាមី, អនាគាមី', ariyaEn: 'Sotapanna, Sakadagami, Anagami',
    shortDescKm: 'ឋានសួគ៌គ្រប់គ្រងដោយមហារាជទាំង ៤ ការពារទិសទាំងបួនលើជម្រាលភ្នំព្រះសុមេរុ។',
    shortDescEn: 'The first celestial plane situated on the lower slopes of Mount Meru, guarded by the 4 Heavenly Kings.',
    longDescKm: 'គ្រប់គ្រងដោយស្ដេចមហារាជ ៤ អង្គ៖ ធតរដ្ឋ (ម្ចាស់ទិសខាងកើត គ្រប់គ្រងពួកគន្ធព្វ), វិរុឡ្ហក (ម្ចាស់ទិសខាងត្បូង គ្រប់គ្រងពួកកុម្ភណ្ឌ), វិរូបក្ខ (ម្ចាស់ទិសខាងលិច គ្រប់គ្រងពួកនាគ), និង វេស្សវ័ណ/កុវេរៈ (ម្ចាស់ទិសខាងជើង គ្រប់គ្រងពួកយក្ស)។ ១ ថ្ងៃទិព្វក្នុងជាន់នេះ ស្មើនឹង ៥០ ឆ្នាំមនុស្ស។',
    longDescEn: 'Ruled by the 4 Great Kings: Dhataraṭṭha (East, Gandhabba lords), Viruḷhaka (South, Kumbhaṇḍa lords), Virūpakkha (West, Nāga lords), and Vessavaṇa (North, Yakkha lords). One day equals 50 human years.',
    kammaDetailKm: 'ការធ្វើទាន សីល និងការជួយទំនុកបម្រុងការពារព្រះពុទ្ធសាសនា មាតាបិតា និងអ្នកមានគុណ។',
    kammaDetailEn: 'Charity, keeping precepts, and devoted protection of the Dhamma, monks, and virtuous people.',
  },
  {
    num: 7,
    cat: 'sugati',
    pl: 'Tāvatiṃsa',
    km: 'តាវត្តិង្ស (ឋានសួគ៌ជាន់ទី ២ — ឋានត្រៃត្រិង្ស)',
    en: 'Realm of the Thirty-Three (Tāvatiṃsa)',
    planeKm: 'កាមសុគតិភូមិ (សួគ៌ជាន់ទី ២)', planeEn: '2nd Deva Heaven',
    spanKm: '១,០០០ ឆ្នាំទិព្វ (ស្មើនឹង ៣៦ លានឆ្នាំមនុស្ស)', spanEn: '1,000 cel. yrs (= 36 million human yrs)',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'មហាកុសលវិបាក ៨', cittaEn: 'Great Wholesome Resultant Consciousness',
    ariyaKm: 'មានអរិយបុគ្គលច្រើន (ព្រះឥន្ទ្រជាព្រះសោតាបន្ន)', ariyaEn: 'Many Ariyas (Sakka is a Sotapanna)',
    shortDescKm: 'ស្ថានសួគ៌របស់សម្តេចសក្កទេវរាជ (ព្រះឥន្ទ្រ) លើកំពូលភ្នំព្រះសុមេរុ។',
    shortDescEn: 'The heaven of Sakka atop Mount Meru, home of Cūḷāmaṇī Cetiya where the Buddha preached Abhidhamma.',
    longDescKm: 'មានទេវតាជាធំ ៣៣ អង្គដែលធ្លាប់បានធ្វើផ្លូវ ជីកស្រះ សាងសាលាសាធារណៈរួមគ្នាពីជាតិមុន។ ជាទីតាំងនៃ «ព្រះចូឡាមណីចេតិយ» ដែលតម្កល់ព្រះកេសា និងព្រះទាឋាធាតុនៃព្រះពុទ្ធ, ដើមបារិឆត្រ, និងសាលាសុធម្មា។ ១ ថ្ងៃទិព្វស្មើនឹង ១០០ ឆ្នាំមនុស្ស។ ព្រះពុទ្ធធ្លាប់យាងមកគង់ចាំវស្សាទី ៧ នៅទីនេះដើម្បីសម្តែងអភិធម្មប្រោសព្រះមាតា។',
    longDescEn: 'Governed by Sakka and his 32 companions who performed collective public service in past lives. Houses the sacred Cūḷāmaṇī Stūpa enshrining the Buddha\'s hair and tooth relics, the Pāricchattaka heavenly tree, and the Sudhammā Hall.',
    kammaDetailKm: 'វត្តបទ ៧ ប្រការរបស់មាឃមាណព (ព្រះឥន្ទ្រ)៖ ចិញ្ចឹមមាតាបិតា, គោរពចាស់ទុំ, ពោលពាក្យផ្អែមល្ហែម, មិននិយាយញុះញង់, លះបង់សេចក្តីកំណាញ់, ពោលពាក្យពិត, និងមិនខឹងក្រោធ។',
    kammaDetailEn: 'The 7 vows of Sakka: caring for parents, honoring elders, gentle speech, non-slander, generous sharing, truthfulness, and controlling anger.',
  },
  {
    num: 8,
    cat: 'sugati',
    pl: 'Yāmā',
    km: 'យាមា (ឋានសួគ៌ជាន់ទី ៣)',
    en: 'The Yāmā Devas (Free of Strife)',
    planeKm: 'កាមសុគតិភូមិ (សួគ៌ជាន់ទី ៣)', planeEn: '3rd Deva Heaven',
    spanKm: '២,០០០ ឆ្នាំទិព្វ (ស្មើនឹង ១៤៤ លានឆ្នាំមនុស្ស)', spanEn: '2,000 cel. yrs (= 144 million human yrs)',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'មហាកុសលវិបាក ៨', cittaEn: 'Great Wholesome Resultant Consciousness',
    ariyaKm: 'មានព្រះអរិយបុគ្គល', ariyaEn: 'Ariyas present',
    shortDescKm: 'ឋានសួគ៌អាកាសផុតពីកំពូលភ្នំព្រះសុមេរុ គ្មានកង្វល់ និងមានសេចក្តីស្ងប់ស្ងៀម។',
    shortDescEn: 'Aerial heaven suspended above Mount Meru, free from conflicts, filled with tranquil bliss.',
    longDescKm: 'គ្រប់គ្រងដោយស្ដេចទេវតាព្រះនាម «សុយាម»។ ឋាននេះស្ថិតនៅលើអាកាស ផុតពីកំពូលភ្នំព្រះសុមេរុ ដូច្នេះគ្មានពន្លឺព្រះអាទិត្យនិងព្រះចន្ទឡើយ តែភ្លឺដោយរស្មីកាយទេវតា ហើយដឹងពេលថ្ងៃយប់ដោយសារផ្កាឈូកទិព្វរីកនិងក្រពុំ។ ១ ថ្ងៃទិព្វស្មើនឹង ២០០ ឆ្នាំមនុស្ស។',
    longDescEn: 'Ruled by King Suyama. Floating in the sky beyond Meru; day and night are measured not by the sun, but by the blooming and closing of celestial lotus blossoms. 1 celestial day equals 200 human years.',
    kammaDetailKm: 'ការរក្សាសីលយ៉ាងរឹងមាំបរិសុទ្ធ និងការចូលចិត្តភាពស្ងប់ស្ងាត់ ចម្រើនសមាធិបឋម។',
    kammaDetailEn: 'Exemplary moral virtue, preference for tranquility, and basic meditation practice.',
  },
  {
    num: 9,
    cat: 'sugati',
    pl: 'Tusita',
    km: 'តុសិត (ឋានសួគ៌ជាន់ទី ៤ — ឋានដុះសិត)',
    en: 'The Contented Realm (Tusita)',
    planeKm: 'កាមសុគតិភូមិ (សួគ៌ជាន់ទី ៤)', planeEn: '4th Deva Heaven',
    spanKm: '៤,០០០ ឆ្នាំទិព្វ (ស្មើនឹង ៥៧៦ លានឆ្នាំមនុស្ស)', spanEn: '4,000 cel. yrs (= 576 million human yrs)',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'មហាកុសលវិបាក ៨', cittaEn: 'Great Wholesome Resultant Consciousness',
    ariyaKm: 'ទីគង់នៅនៃព្រះពោធិសត្វ & អរិយបុគ្គល', ariyaEn: 'Abode of Bodhisattas & Ariyas',
    shortDescKm: 'ភពនៃសេចក្តីសន្តោស រីករាយក្នុងធម៌ ជាទីគង់នៅនៃព្រះពោធិសត្វគ្រប់អង្គមុនត្រាស់ដឹង។',
    shortDescEn: 'The heaven of joyful contentment where all Bodhisattas reside before their final human rebirth.',
    longDescKm: 'គ្រប់គ្រងដោយស្ដេចទេវតា «សន្តុសិត»។ ទេវតាក្នុងជាន់នេះមិនវង្វេងក្នុងកាមទេ តែរីករាយក្នុងការស្តាប់ធម៌។ ជាទីគង់នៅរបស់ព្រះពោធិសត្វដែលត្រូវចុះមកត្រាស់ដឹងជាព្រះពុទ្ធ (បច្ចុប្បន្ន ព្រះសិអារ្យមេត្រី គង់នៅទីនេះ) និងជាទីកើតនៃព្រះពុទ្ធមាតា (មាយាទេវី ដែលកើតជាសន្តុសិតទេវបុត្រ)។ ១ ថ្ងៃទិព្វស្មើនឹង ៤០០ ឆ្នាំមនុស្ស។',
    longDescEn: 'Ruled by King Santusita. Devas here delight in Dhamma sermons rather than sense indulgence. Current residence of Maitreya Bodhisatta (the next Buddha) and Queen Māyā (reborn as a deva). 1 celestial day equals 400 human years.',
    kammaDetailKm: 'ការបំពេញបារមី ១០ យ៉ាងបរិបូណ៌ ការស្រឡាញ់ចូលចិត្តការសិក្សាព្រះធម៌ និងការសន្តោសក្នុងគុណធម៌។',
    kammaDetailEn: 'Fulfillment of the Ten Perfections (Pāramī), boundless joy in Dhamma study, and noble contentment.',
  },
  {
    num: 10,
    cat: 'sugati',
    pl: 'Nimmānaratī',
    km: 'និម្មានរតី (ឋានសួគ៌ជាន់ទី ៥)',
    en: 'Delighting in Creation (Nimmānaratī)',
    planeKm: 'កាមសុគតិភូមិ (សួគ៌ជាន់ទី ៥)', planeEn: '5th Deva Heaven',
    spanKm: '៨,០០០ ឆ្នាំទិព្វ (ស្មើនឹង ២,៣០៤ លានឆ្នាំមនុស្ស)', spanEn: '8,000 cel. yrs (= 2.3 billion human yrs)',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'មហាកុសលវិបាក ៨', cittaEn: 'Great Wholesome Resultant Consciousness',
    ariyaKm: 'មានព្រះអរិយបុគ្គល', ariyaEn: 'Ariyas present',
    shortDescKm: 'ទេវតាដែលត្រេកអរក្នុងការនិម្មិតគ្រឿងកាមគុណទិព្វដោយខ្លួនឯងតាមបំណងប្រាថ្នាភ្លាមៗ។',
    shortDescEn: 'Devas who rejoice in instantly creating their own sensory pleasures at will by mental power.',
    longDescKm: 'គ្រប់គ្រងដោយស្ដេចទេវតា «សុនិម្មិត»។ ទេវតាក្នុងជាន់នេះមានបារមីខ្ពស់ ពេលចង់បានគ្រឿងទិព្វអ្វីមួយ (វិមាន សម្លៀកបំពាក់ ផ្កា ភ្លេងទិព្វ) គ្រាន់តែនឹកគិត ក៏និម្មិតកើតឡើងភ្លាមៗតាមចិត្តប្រាថ្នា។ ១ ថ្ងៃទិព្វស្មើនឹង ៨០០ ឆ្នាំមនុស្ស។',
    longDescEn: 'Ruled by King Sunimmita. When devas desire any palace, adornment, garden, or celestial delight, they effortlessly manifest it instantly through mental creation. 1 celestial day equals 800 human years.',
    kammaDetailKm: 'កុសលកម្មដ៏ឧត្តម ការធ្វើទានដោយសេចក្តីជ្រះថ្លាខ្ពស់បំផុត និងការរក្សាសីលយ៉ាងម៉ឺងម៉ាត់។',
    kammaDetailEn: 'Tremendous moral purity, immense generosity characterized by supreme devotion, and moral self-mastery.',
  },
  {
    num: 11,
    cat: 'sugati',
    pl: 'Paranimmitavasavattī',
    km: 'បរនិម្មិតវសវត្តី (ឋានសួគ៌ជាន់ទី ៦ — កំពូលកាមភូមិ)',
    en: 'Wielding Power over Others\' Creations',
    planeKm: 'កាមសុគតិភូមិ (សួគ៌ជាន់ទី ៦)', planeEn: '6th Deva Heaven (Summit of Sense Sphere)',
    spanKm: '១៦,០០០ ឆ្នាំទិព្វ (ស្មើនឹង ៩,២១៦ លានឆ្នាំមនុស្ស)', spanEn: '16,000 cel. yrs (= 9.2 billion human yrs)',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'មហាកុសលវិបាក ៨', cittaEn: 'Great Wholesome Resultant Consciousness',
    ariyaKm: 'មានព្រះអរិយបុគ្គល', ariyaEn: 'Ariyas present',
    shortDescKm: 'កំពូលនៃឋានសួគ៌កាមភូមិ ជាកន្លែងដែលទេវតាដទៃនិម្មិតគ្រឿងទិព្វថ្វាយដើម្បីសោយសុខ។',
    shortDescEn: 'The pinnacle of the sensuous heavens; other devas anticipate their desires and create delights for them.',
    longDescKm: 'គ្រប់គ្រងដោយស្ដេចទេវតា «វសវត្តី»។ ជាជាន់ខ្ពស់បំផុតនៃកាមលោក។ ទេវតាជាន់នេះមិនបាច់និម្មិតខ្លួនឯងទេ គឺមានទេវតាដទៃដឹងចិត្តហើយនិម្មិតថ្វាយជាស្រេច។ ក្នុងជាន់នេះមានផ្នែកមួយជាទីគង់នៅរបស់ «មារាធិរាជ» (ស្តេចមារ)។ ១ ថ្ងៃទិព្វស្មើនឹង ១,៦០០ ឆ្នាំមនុស្ស។',
    longDescEn: 'Ruled by King Vasavattī. The highest plane of the sensual world. They do not need to create delights themselves; attendant devas intuitively create what they wish. In one sector of this heaven lies the domain of Māra. 1 day equals 1,600 human years.',
    kammaDetailKm: 'ការដឹកនាំគេក្នុងការធ្វើបុណ្យកុសល មហាទានដ៏មហិមា និងការកសាងកិត្តិយសកុសលធម៌ខ្ពង់ខ្ពស់។',
    kammaDetailEn: 'Leadership in massive meritorious works, inspiring countless people to virtue, and supreme ethical charity.',
  },

  // 12-27 Fine-Material (Rūpāvacara)
  {
    num: 12,
    cat: 'rupa',
    pl: 'Brahmapārisajjā',
    km: 'ព្រហ្មបរិសជ្ជា (បរិស័ទព្រហ្ម)',
    en: 'Retinue of Brahma',
    planeKm: 'រូបភូមិ (បឋមឈាន)', planeEn: '1st Jhāna Plane',
    spanKm: '១/៣ អសង្ខេយ្យកប្ប', spanEn: '1/3 of an Asankhyeyya-kappa',
    aggregatesKm: '៥ ខន្ធ (រូបព្រហ្មដ៏បរិសុទ្ធ ឥតមានកាមតណ្ហា)', aggregatesEn: '5 aggregates (refined non-sensual matter)',
    cittaKm: 'រូបាវចរបឋមឈានវិបាកចិត្ត', cittaEn: '1st Jhāna Resultant Consciousness',
    ariyaKm: 'មានព្រះអរិយបុគ្គល', ariyaEn: 'Ariyas present',
    jhanaKm: 'បឋមឈាន (កម្រិតទន់)', jhanaEn: '1st Jhāna (minor)',
    shortDescKm: 'កើតដោយអំណាចបឋមឈានកម្រិតស្រាល ជាបរិវារបស់មហាព្រហ្ម។',
    shortDescEn: 'Attained by those who cultivate the first jhāna to a minor degree; retinue of the Great Brahma.',
    longDescKm: 'ព្រហ្មក្នុងជាន់នេះគ្មានភេទប្រុសស្រី គ្មានការរួមរក្សកាមគុណ គ្មានការស៊ីបាយទឹក តែសោយបីតិនិងសេចក្តីស្ងប់ជាអាហារ។',
    longDescEn: 'Devas here are genderless, free from sensual lust and physical food, nourished purely by meditative rapture (pīti).',
    kammaDetailKm: 'ការចម្រើនសមថកម្មដ្ឋានសម្រេច «បឋមឈាន» (ប្រកបដោយ វិតក្ក វិចារ បីតិ សុខ ឯកគ្គតា) កម្រិតស្រាល។',
    kammaDetailEn: 'Attaining the First Jhāna (with initial thought, sustained thought, rapture, happiness, one-pointedness) to a modest degree.',
  },
  {
    num: 13,
    cat: 'rupa',
    pl: 'Brahmapurohitā',
    km: 'ព្រហ្មបុរោហិតា (ទីប្រឹក្សាព្រហ្ម)',
    en: 'Ministers of Brahma',
    planeKm: 'រូបភូមិ (បឋមឈាន)', planeEn: '1st Jhāna Plane',
    spanKm: '១/២ អសង្ខេយ្យកប្ប', spanEn: '1/2 of an Asankhyeyya-kappa',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'រូបាវចរបឋមឈានវិបាកចិត្ត', cittaEn: '1st Jhāna Resultant Consciousness',
    ariyaKm: 'មានព្រះអរិយបុគ្គល', ariyaEn: 'Ariyas present',
    jhanaKm: 'បឋមឈាន (កម្រិតមធ្យម)', jhanaEn: '1st Jhāna (medium)',
    shortDescKm: 'កើតដោយបឋមឈានកម្រិតមធ្យម ជាអ្នកបំពេញកិច្ចប្រឹក្សារបស់មហាព្រហ្ម។',
    shortDescEn: 'Attained by cultivating the first jhāna to a medium degree; advisors to the Great Brahma.',
    longDescKm: 'មានរស្មីភ្លឺថ្លា និងអាយុកាលវែងជាងព្រហ្មបរិសជ្ជា។',
    longDescEn: 'More radiant and longer-lived than the retinue of Brahma, dwelling in serene absorption.',
    kammaDetailKm: 'ការចម្រើនបឋមឈានបានស្ទាត់ជំនាញកម្រិតមធ្យម។',
    kammaDetailEn: 'Cultivating the First Jhāna to a medium, stable degree.',
  },
  {
    num: 14,
    cat: 'rupa',
    pl: 'Mahābrahmā',
    km: 'មហាព្រហ្មា (មហាព្រហ្ម)',
    en: 'Great Brahmas',
    planeKm: 'រូបភូមិ (បឋមឈាន)', planeEn: '1st Jhāna Plane',
    spanKm: '១ អសង្ខេយ្យកប្បពេញ', spanEn: '1 full Asankhyeyya-kappa',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'រូបាវចរបឋមឈានវិបាកចិត្ត', cittaEn: '1st Jhāna Resultant Consciousness',
    ariyaKm: 'មានព្រះអរិយបុគ្គល (ព្រះសហម្បតិព្រហ្ម)', ariyaEn: 'Sahampati Brahma was an Ariya here',
    jhanaKm: 'បឋមឈាន (កម្រិតឧត្តម)', jhanaEn: '1st Jhāna (superior)',
    shortDescKm: 'កើតដោយបឋមឈានកម្រិតខ្ពស់បំផុត មានរស្មីភ្លឺថ្លាគ្របដណ្តប់លោកធាតុ។',
    shortDescEn: 'Supreme ruler of the First Jhāna plane, possessing vast radiance and majestic power.',
    longDescKm: 'មហាព្រហ្មជាអ្នកមានអាយុវែង និងមានរស្មីភ្លឺរុងរឿងជាងគេក្នុងបឋមឈាន (ដូចជាព្រះសហម្បតិព្រហ្ម ដែលបានអារាធនាព្រះពុទ្ធឱ្យសម្តែងធម៌)។',
    longDescEn: 'Sahampati Mahābrahmā, who requested the newly awakened Buddha to turn the Wheel of Dhamma, dwelled here.',
    kammaDetailKm: 'ការចម្រើនបឋមឈានដល់កម្រិតកំពូលស្ទាត់ជំនាញទាំង ៥ យ៉ាង (វសី ៥)។',
    kammaDetailEn: 'Mastering the First Jhāna with supreme mastery (vasī).',
  },
  {
    num: 15,
    cat: 'rupa',
    pl: 'Parittābhā',
    km: 'បរិត្តាភា (ព្រហ្មមានរស្មីតិច)',
    en: 'Minor Radiance (Parittābhā)',
    planeKm: 'រូបភូមិ (ទុតិយឈាន)', planeEn: '2nd Jhāna Plane',
    spanKm: '២ មហាកប្ប', spanEn: '2 Mahākappas',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'រូបាវចរទុតិយឈានវិបាកចិត្ត', cittaEn: '2nd Jhāna Resultant Consciousness',
    ariyaKm: 'មានព្រះអរិយបុគ្គល', ariyaEn: 'Ariyas present',
    jhanaKm: 'ទុតិយឈាន (កម្រិតទន់)', jhanaEn: '2nd Jhāna (minor)',
    shortDescKm: 'កើតដោយអំណាចទុតិយឈានកម្រិតស្រាល មានពន្លឺរស្មីស្រាលៗ។',
    shortDescEn: 'Brahmas with gentle radiance, born of the Second Jhāna (free of vitakka and vicāra).',
    longDescKm: 'ក្នុងទុតិយឈាន ចិត្តលះបង់នូវវិតក្កៈ និងវិចារៈ នៅសល់តែបីតិ សុខ និងឯកគ្គតា។',
    longDescEn: 'Free from initial and sustained thought; mind rests in rapture, happiness, and unification.',
    kammaDetailKm: 'ការចម្រើនទុតិយឈានកម្រិតស្រាល។',
    kammaDetailEn: 'Cultivating the Second Jhāna to a minor degree.',
  },
  {
    num: 16,
    cat: 'rupa',
    pl: 'Appamāṇābhā',
    km: 'អប្បមាណាភា (ព្រហ្មមានរស្មីរកប្រមាណគ្មាន)',
    en: 'Boundless Radiance (Appamāṇābhā)',
    planeKm: 'រូបភូមិ (ទុតិយឈាន)', planeEn: '2nd Jhāna Plane',
    spanKm: '៤ មហាកប្ប', spanEn: '4 Mahākappas',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'រូបាវចរទុតិយឈានវិបាកចិត្ត', cittaEn: '2nd Jhāna Resultant Consciousness',
    ariyaKm: 'មានព្រះអរិយបុគ្គល', ariyaEn: 'Ariyas present',
    jhanaKm: 'ទុតិយឈាន (កម្រិតមធ្យម)', jhanaEn: '2nd Jhāna (medium)',
    shortDescKm: 'កើតដោយទុតិយឈានកម្រិតមធ្យម មានពន្លឺរស្មីភ្លឺរុងរឿងរកប្រមាណមិនបាន។',
    shortDescEn: 'Brahmas whose luminosity shines without measurable boundaries.',
    longDescKm: 'ពន្លឺរស្មីភ្លឺថ្លាឆ្ងាយជាងជាន់បរិត្តាភាទ្វេដង។',
    longDescEn: 'Radiating immense light across world systems, twice as long-lived as Parittābhā.',
    kammaDetailKm: 'ការចម្រើនទុតិយឈានកម្រិតមធ្យម។',
    kammaDetailEn: 'Cultivating the Second Jhāna to a medium degree.',
  },
  {
    num: 17,
    cat: 'rupa',
    pl: 'Ābhassarā',
    km: 'អាភស្សរា (ព្រហ្មមានរស្មីរន្ទាលច្រាលចេញ)',
    en: 'Streaming Radiance (Ābhassarā)',
    planeKm: 'រូបភូមិ (ទុតិយឈាន)', planeEn: '2nd Jhāna Plane',
    spanKm: '៨ មហាកប្ប', spanEn: '8 Mahākappas',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'រូបាវចរទុតិយឈានវិបាកចិត្ត', cittaEn: '2nd Jhāna Resultant Consciousness',
    ariyaKm: 'មានព្រះអរិយបុគ្គល', ariyaEn: 'Ariyas present',
    jhanaKm: 'ទុតិយឈាន (កម្រិតឧត្តម)', jhanaEn: '2nd Jhāna (superior)',
    shortDescKm: 'រស្មីច្រាលចេញពីរាងកាយដូចផ្លេកបន្ទោរ សោយបីតិជាអាហារ។',
    shortDescEn: 'Devas of blinding radiance whose joy feeds their existence; refuge when the lower world burns.',
    longDescKm: 'ពេលលោកធាតុត្រូវវិនាសដោយភ្លើង ភ្លើងឆេះបំផ្លាញត្រឹមតែជាន់បឋមឈានប៉ុណ្ណោះ រីឯជាន់អាភស្សរានេះមិនត្រូវភ្លើងឆេះឡើយ។ សត្វលោកទាំងឡាយកាលលោកត្រូវឆេះ តែងតែមកចាប់បដិសន្ធិនៅទីនេះ។',
    longDescEn: 'When the world is destroyed by fire, flames reach up to Mahābrahmā but spare Ābhassarā. Lower world beings are reborn here during cosmic dissolution.',
    kammaDetailKm: 'ការចម្រើនទុតិយឈានដល់កម្រិតខ្ពស់បំផុត។',
    kammaDetailEn: 'Mastering the Second Jhāna to supreme perfection.',
  },
  {
    num: 18,
    cat: 'rupa',
    pl: 'Parittasubhā',
    km: 'បរិត្តសុភា (ព្រហ្មមានសិរីរស្មីស្ងប់តិច)',
    en: 'Minor Aura (Parittasubhā)',
    planeKm: 'រូបភូមិ (តតិយឈាន)', planeEn: '3rd Jhāna Plane',
    spanKm: '១៦ មហាកប្ប', spanEn: '16 Mahākappas',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'រូបាវចរតតិយឈានវិបាកចិត្ត', cittaEn: '3rd Jhāna Resultant Consciousness',
    ariyaKm: 'មានព្រះអរិយបុគ្គល', ariyaEn: 'Ariyas present',
    jhanaKm: 'តតិយឈាន (កម្រិតទន់)', jhanaEn: '3rd Jhāna (minor)',
    shortDescKm: 'លះបង់បីតិ សោយសុខស្ងប់ស្ងៀមបរិសុទ្ធ។',
    shortDescEn: 'Brahmas dwelling in serene bodily happiness free from the excitement of rapture (pīti).',
    longDescKm: 'ក្នុងតតិយឈាន ចិត្តលះបង់បីតិ (សេចក្តីឆ្អែតកាយចិត្ត) នៅសល់តែសុខវេទនា និងឯកគ្គតា។',
    longDescEn: 'Rapture fades; the mind dwells in unshakeable, refined, blissful stillness.',
    kammaDetailKm: 'ការចម្រើនតតិយឈានកម្រិតស្រាល។',
    kammaDetailEn: 'Cultivating the Third Jhāna to a minor degree.',
  },
  {
    num: 19,
    cat: 'rupa',
    pl: 'Appamāṇasubhā',
    km: 'អប្បមាណសុភា (ព្រហ្មមានសិរីរស្មីស្ងប់ឥតប្រមាណ)',
    en: 'Boundless Aura (Appamāṇasubhā)',
    planeKm: 'រូបភូមិ (តតិយឈាន)', planeEn: '3rd Jhāna Plane',
    spanKm: '៣២ មហាកប្ប', spanEn: '32 Mahākappas',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'រូបាវចរតតិយឈានវិបាកចិត្ត', cittaEn: '3rd Jhāna Resultant Consciousness',
    ariyaKm: 'មានព្រះអរិយបុគ្គល', ariyaEn: 'Ariyas present',
    jhanaKm: 'តតិយឈាន (កម្រិតមធ្យម)', jhanaEn: '3rd Jhāna (medium)',
    shortDescKm: 'សិរីរស្មីស្ងប់ស្ងៀមភ្លឺត្រចះត្រចង់រកប្រមាណគ្មាន។',
    shortDescEn: 'Brahmas with boundless serene aura, enjoying refined, tranquil bliss.',
    longDescKm: 'សោយសុខវេទនាដ៏ប្រណីត អាយុកាល ៣២ មហាកប្ប។',
    longDescEn: 'Experiencing sublime spiritual happiness lasting 32 Mahākappas.',
    kammaDetailKm: 'ការចម្រើនតតិយឈានកម្រិតមធ្យម។',
    kammaDetailEn: 'Cultivating the Third Jhāna to a medium degree.',
  },
  {
    num: 20,
    cat: 'rupa',
    pl: 'Subhakiṇhā',
    km: 'សុភកិណ្ហា (ព្រហ្មមានសិរីរស្មីស្ងប់ជ្រួតជ្រាបពេញ)',
    en: 'Steady Glory (Subhakiṇhā)',
    planeKm: 'រូបភូមិ (តតិយឈាន)', planeEn: '3rd Jhāna Plane',
    spanKm: '៦៤ មហាកប្ប', spanEn: '64 Mahākappas',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'រូបាវចរតតិយឈានវិបាកចិត្ត', cittaEn: '3rd Jhāna Resultant Consciousness',
    ariyaKm: 'មានព្រះអរិយបុគ្គល', ariyaEn: 'Ariyas present',
    jhanaKm: 'តតិយឈាន (កម្រិតឧត្តម)', jhanaEn: '3rd Jhāna (superior)',
    shortDescKm: 'កំពូលតតិយឈាន សិរីរស្មីស្ងប់ជ្រាលជ្រៅពាសពេញសព្វកាយ។',
    shortDescEn: 'Peak of the Third Jhāna planes; peaceful aura completely saturates the body.',
    longDescKm: 'ពេលលោកធាតុត្រូវវិនាសដោយទឹក ទឹកជន់លិចបំផ្លាញដល់ត្រឹមជាន់នេះ។ ជាន់ខាងលើផុតពីគ្រោះទឹក។',
    longDescEn: 'When the cosmos dissolves by water, corrosive floods reach up to Subhakiṇhā, sparing the Fourth Jhāna realms above.',
    kammaDetailKm: 'ការចម្រើនតតិយឈានដល់កម្រិតខ្ពស់បំផុត។',
    kammaDetailEn: 'Mastering the Third Jhāna to supreme perfection.',
  },
  {
    num: 21,
    cat: 'rupa',
    pl: 'Vehapphala',
    km: 'វេហប្ផលា (ព្រហ្មមានផលធំទូលាយ)',
    en: 'Great Fruit (Vehapphala)',
    planeKm: 'រូបភូមិ (ចតុត្ថឈាន)', planeEn: '4th Jhāna Plane',
    spanKm: '៥០០ មហាកប្ប', spanEn: '500 Mahākappas',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'រូបាវចរចតុត្ថឈានវិបាកចិត្ត', cittaEn: '4th Jhāna Resultant Consciousness',
    ariyaKm: 'មានព្រះអរិយបុគ្គល (សោតាបន្ន, សកទាគាមី)', ariyaEn: 'Sotapanna, Sakadagami, ordinary beings',
    jhanaKm: 'ចតុត្ថឈាន', jhanaEn: '4th Jhāna',
    shortDescKm: 'កើតដោយចតុត្ថឈានបរិសុទ្ធ មានឧបេក្ខាវេទនាស្ងប់ជ្រៅ ផុតចាកការវិនាសដោយភ្លើង ទឹក ខ្យល់។',
    shortDescEn: 'Born of the pure Fourth Jhāna with purified equanimity; immune to destruction by fire, water, and wind.',
    longDescKm: 'ជាទីកន្លែងដែលបុថុជ្ជន និងព្រះអរិយបុគ្គលដែលបានចតុត្ថឈានកើត។ មិនត្រូវវិនាសដោយគ្រោះមហន្តរាយទាំង ៣ ឡើយ។',
    longDescEn: 'Home to both ordinary practitioners and noble disciples who perfected the Fourth Jhāna with pure equanimity (upekkhā).',
    kammaDetailKm: 'ការចម្រើនចតុត្ថឈាន (លះបង់សុខវេទនា សល់តែឧបេក្ខា និងឯកគ្គតា)។',
    kammaDetailEn: 'Mastering the Fourth Jhāna (purified by equanimity and one-pointedness).',
  },
  {
    num: 22,
    cat: 'rupa',
    pl: 'Asaññasatta',
    km: 'អសញ្ញសត្វ (ព្រហ្មរូបឥតចិត្ត / ព្រហ្មរូបចម្លាក់)',
    en: 'Mindless Beings (Asaññasatta)',
    planeKm: 'រូបភូមិ (ចតុត្ថឈាន)', planeEn: '4th Jhāna Plane',
    spanKm: '៥០០ មហាកប្ប', spanEn: '500 Mahākappas',
    aggregatesKm: '១ ខន្ធប៉ុណ្ណោះ (រូបក្ខន្ធ — គ្មានចិត្ត គ្មានចេតសិក)', aggregatesEn: 'Only 1 aggregate (Rūpa — NO mind or mental factors)',
    cittaKm: 'គ្មានចិត្តបដិសន្ធិឡើយ (បដិសន្ធិដោយជីវិតនវកកលាបរូប)', cittaEn: 'No rebirth consciousness (reborn purely as physical matter)',
    ariyaKm: 'គ្មានព្រះអរិយបុគ្គលឡើយ (បុថុជ្ជនដែលយល់ច្រឡំថាចិត្តជាដើមហេតុនៃទុក្ខ)', ariyaEn: 'Strictly ordinary beings; no Ariyas',
    jhanaKm: 'ចតុត្ថឈាន (សញ្ញាវិរាគភាវនា)', jhanaEn: '4th Jhāna with revulsion toward perception',
    shortDescKm: 'ភពចម្លែកបំផុតដែលមានតែរូបកាយ គ្មានចិត្ត ឈរ អង្គុយ ឬដេកដូចរូបចម្លាក់ ៥០០ មហាកប្ប។',
    shortDescEn: 'The unique realm where beings exist with physical matter only, devoid of consciousness like stone statues.',
    longDescKm: 'កើតចេញពីការយល់ខុសរបស់អ្នកបដិបត្តិដែលគិតថា «ចិត្តជាប្រភពនៃទុក្ខ បើគ្មានចិត្តទើបផុតទុក្ខ» ក៏តាំងចិត្តសង្កត់ចិត្តឱ្យរលត់។ ពេលកើតនៅទីនេះ បើពេលស្លាប់ស្ថិតក្នុងឥរិយាបថណា (ឈរ អង្គុយ ឬដេក) ក៏នៅស្ងៀមបែបនោះរហូតដល់អស់ ៥០០ មហាកប្ប ទើបចិត្តកើតឡើងវិញ។',
    longDescEn: 'Attained by yogis who saw perception as the cause of suffering and cultivated revulsion towards consciousness. They remain frozen in whatever posture they died in for 500 Mahākappas until a perception stirs again.',
    kammaDetailKm: 'ការចម្រើនចតុត្ថឈានដោយសញ្ញាវិរាគភាវនា (ការប្រាថ្នាមិនឱ្យមានចិត្ត)។',
    kammaDetailEn: 'Fourth Jhāna meditation cultivated with deliberate revulsion toward mental activity.',
  },

  // 23-27 Five Pure Abodes (Suddhāvāsa) - EXCLUSIVELY FOR ANĀGĀMĪS
  {
    num: 23,
    cat: 'suddhavasa',
    pl: 'Avihā',
    km: 'អវិហា (សុទ្ធាវាសទី ១)',
    en: 'Not Falling Away (Avihā)',
    planeKm: 'សុទ្ធាវាសភូមិ (ចតុត្ថឈាន)', planeEn: '1st Pure Abode (Anāgāmī only)',
    spanKm: '១,០០០ មហាកប្ប', spanEn: '1,000 Mahākappas',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'រូបាវចរចតុត្ថឈានវិបាកចិត្ត', cittaEn: '4th Jhāna Resultant Consciousness',
    ariyaKm: 'សម្រាប់តែព្រះអនាគាមីប៉ុណ្ណោះ (គ្មានបុថុជ្ជន)', ariyaEn: 'Strictly Non-Returners (Anāgāmī) only',
    jhanaKm: 'ចតុត្ថឈាន + សទ្ធិន្ទ្រិយដ៏លើសលប់', jhanaEn: '4th Jhāna + Dominant Faith (Saddhā)',
    shortDescKm: 'មិនសាបសូន្យពីទីកន្លែងខ្លួនរហូតដល់អស់អាយុ ឬសម្រេចអរហត្តផល។',
    shortDescEn: 'Brahmas who do not fall away from their attainment; reborn here through dominant faith.',
    longDescKm: 'សុទ្ធាវាសទាំង ៥ ជាន់ជាទីកន្លែងពិសិដ្ឋបំផុត ដែលគ្មានបុថុជ្ជនណាអាចកើតបានឡើយ កើតបានតែព្រះអនាគាមីបុគ្គលប៉ុណ្ណោះ។ ពួកលោកនឹងសម្រេចព្រះអរហត្ត និងបរិនិព្វាននៅទីនោះ មិនវិលត្រឡប់មកវិញឡើយ។ ជាន់អវិហានេះ កើតឡើងដោយអំណាចនៃសទ្ធិន្ទ្រិយដ៏លើសលប់។',
    longDescEn: 'The 5 Pure Abodes are exclusive to Non-Returners (Anāgāmīs). They attain Arahantship and Parinibbāna here without ever returning to lower realms. Rebirth in Avihā is guided by paramount spiritual conviction (Saddhā).',
    kammaDetailKm: 'ការសម្រេចអនាគាមិផល + ចតុត្ថឈាន ដោយមានសទ្ធិន្ទ្រិយខ្លាំងជាងគេ។',
    kammaDetailEn: 'Realizing Anāgāmī fruit + 4th Jhāna with dominant faculty of Faith (Saddhā).',
  },
  {
    num: 24,
    cat: 'suddhavasa',
    pl: 'Atappā',
    km: 'អតប្បា (សុទ្ធាវាសទី ២)',
    en: 'Untormented (Atappā)',
    planeKm: 'សុទ្ធាវាសភូមិ (ចតុត្ថឈាន)', planeEn: '2nd Pure Abode (Anāgāmī only)',
    spanKm: '២,០០០ មហាកប្ប', spanEn: '2,000 Mahākappas',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'រូបាវចរចតុត្ថឈានវិបាកចិត្ត', cittaEn: '4th Jhāna Resultant Consciousness',
    ariyaKm: 'សម្រាប់តែព្រះអនាគាមីប៉ុណ្ណោះ', ariyaEn: 'Strictly Non-Returners (Anāgāmī) only',
    jhanaKm: 'ចតុត្ថឈាន + វិរិយិន្ទ្រិយដ៏លើសលប់', jhanaEn: '4th Jhāna + Dominant Energy (Viriya)',
    shortDescKm: 'មិនក្តៅក្រហាយដោយកិលេស សោយសេចក្តីស្ងប់បរិសុទ្ធ។',
    shortDescEn: 'Serene Brahmas untouched by the fires of defilements; born through dominant energy.',
    longDescKm: 'ព្រះអនាគាមីដែលចម្រើនវិរិយិន្ទ្រិយ (សេចក្តីព្យាយាម) ខ្លាំងក្លាជាងគេ តែងមកកើតក្នុងជាន់អតប្បានេះ។',
    longDescEn: 'Non-Returners who cultivated dominant spiritual energy (viriya) in their practice are reborn in this serene haven.',
    kammaDetailKm: 'ការសម្រេចអនាគាមិផល + ចតុត្ថឈាន ដោយមានវិរិយិន្ទ្រិយខ្លាំងជាងគេ។',
    kammaDetailEn: 'Realizing Anāgāmī fruit + 4th Jhāna with dominant faculty of Energy (Viriya).',
  },
  {
    num: 25,
    cat: 'suddhavasa',
    pl: 'Sudassā',
    km: 'សុទស្សា (សុទ្ធាវាសទី ៣)',
    en: 'Clearly Visible / Beautiful (Sudassā)',
    planeKm: 'សុទ្ធាវាសភូមិ (ចតុត្ថឈាន)', planeEn: '3rd Pure Abode (Anāgāmī only)',
    spanKm: '៤,០០០ មហាកប្ប', spanEn: '4,000 Mahākappas',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'រូបាវចរចតុត្ថឈានវិបាកចិត្ត', cittaEn: '4th Jhāna Resultant Consciousness',
    ariyaKm: 'សម្រាប់តែព្រះអនាគាមីប៉ុណ្ណោះ', ariyaEn: 'Strictly Non-Returners (Anāgāmī) only',
    jhanaKm: 'ចតុត្ថឈាន + សតិន្ទ្រិយដ៏លើសលប់', jhanaEn: '4th Jhāna + Dominant Mindfulness (Sati)',
    shortDescKm: 'ឃើញច្បាស់នូវធម៌បរិសុទ្ធ មានទស្សនវិស័យភ្លឺថ្លា។',
    shortDescEn: 'Discerning Brahmas endowed with clear insight; born through dominant mindfulness.',
    longDescKm: 'ព្រះអនាគាមីដែលចម្រើនសតិន្ទ្រិយ (សតិស្មារតី) មុតស្រួចជាងគេ តែងមកកើតក្នុងជាន់សុទស្សានេះ។',
    longDescEn: 'Non-Returners who developed exceptional mindfulness (sati) take rebirth in Sudassā.',
    kammaDetailKm: 'ការសម្រេចអនាគាមិផល + ចតុត្ថឈាន ដោយមានសតិន្ទ្រិយខ្លាំងជាងគេ។',
    kammaDetailEn: 'Realizing Anāgāmī fruit + 4th Jhāna with dominant faculty of Mindfulness (Sati).',
  },
  {
    num: 26,
    cat: 'suddhavasa',
    pl: 'Sudassī',
    km: 'សុទស្សី (សុទ្ធាវាសទី ៤)',
    en: 'Clear-Sighted (Sudassī)',
    planeKm: 'សុទ្ធាវាសភូមិ (ចតុត្ថឈាន)', planeEn: '4th Pure Abode (Anāgāmī only)',
    spanKm: '៨,០០០ មហាកប្ប', spanEn: '8,000 Mahākappas',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'រូបាវចរចតុត្ថឈានវិបាកចិត្ត', cittaEn: '4th Jhāna Resultant Consciousness',
    ariyaKm: 'សម្រាប់តែព្រះអនាគាមីប៉ុណ្ណោះ', ariyaEn: 'Strictly Non-Returners (Anāgāmī) only',
    jhanaKm: 'ចតុត្ថឈាន + សមាធិន្ទ្រិយដ៏លើសលប់', jhanaEn: '4th Jhāna + Dominant Concentration (Samādhi)',
    shortDescKm: 'ឃើញច្បាស់នូវធម៌យ៉ាងវិសេសអស្ចារ្យ បរិបូណ៌ដោយសមាធិ។',
    shortDescEn: 'Brahmas endowed with profound vision and concentrated absorption.',
    longDescKm: 'ព្រះអនាគាមីដែលចម្រើនសមាធិន្ទ្រិយ (ការតម្កល់ចិត្តមូល) ស្ទាត់ជំនាញជាងគេ តែងមកកើតក្នុងជាន់សុទស្សីនេះ។',
    longDescEn: 'Non-Returners who perfected the faculty of concentration (samādhi) are reborn here.',
    kammaDetailKm: 'ការសម្រេចអនាគាមិផល + ចតុត្ថឈាន ដោយមានសមាធិន្ទ្រិយខ្លាំងជាងគេ។',
    kammaDetailEn: 'Realizing Anāgāmī fruit + 4th Jhāna with dominant faculty of Concentration (Samādhi).',
  },
  {
    num: 27,
    cat: 'suddhavasa',
    pl: 'Akaniṭṭhā',
    km: 'អកនិដ្ឋា (សុទ្ធាវាសទី ៥ — កំពូលរូបភូមិ)',
    en: 'Peerless Summit (Akaniṭṭhā)',
    planeKm: 'សុទ្ធាវាសភូមិ (កំពូលរូបភូមិ)', planeEn: 'Highest Pure Abode (Summit of Form Sphere)',
    spanKm: '១៦,០០០ មហាកប្ប', spanEn: '16,000 Mahākappas',
    aggregatesKm: '៥ ខន្ធ', aggregatesEn: '5 aggregates',
    cittaKm: 'រូបាវចរចតុត្ថឈានវិបាកចិត្ត', cittaEn: '4th Jhāna Resultant Consciousness',
    ariyaKm: 'សម្រាប់តែព្រះអនាគាមី (ជាទីបរិនិព្វាននៃអនាគាមី)', ariyaEn: 'Supreme Non-Returners who attain Parinibbāna here',
    jhanaKm: 'ចតុត្ថឈាន + បញ្ញិន្ទ្រិយដ៏លើសលប់', jhanaEn: '4th Jhāna + Dominant Wisdom (Paññā)',
    shortDescKm: 'កំពូលខ្ពស់បំផុតនៃរូបភូមិ គ្មានអ្នកណាប្រសើរជាង កន្លែងបរិនិព្វាននៃព្រះអរហន្ត។',
    shortDescEn: 'The highest summit of the Form Sphere; abounding in supreme wisdom where final Parinibbāna is realized.',
    longDescKm: 'ជាភពខ្ពស់បំផុតនៃរូបភូមិទាំង ១៦។ ព្រះអនាគាមីដែលចម្រើនបញ្ញិន្ទ្រិយ (ប្រាជ្ញា) មុតស្រួចបំផុត តែងមកកើតនៅទីនេះ។ ពួកលោកនឹងចម្រើនវិបស្សនាទម្លុះទម្លាយកិលេសទាំងអស់ សម្រេចព្រះអរហត្ត និងបរិនិព្វាននៅជាន់អកនិដ្ឋាដ៏ឧត្តមនេះ។',
    longDescEn: 'The supreme pinnacle of the 16 form realms. Non-Returners with dominant wisdom (paññā) arise here, realize final Arahantship, and pass into Parinibbāna.',
    kammaDetailKm: 'ការសម្រេចអនាគាមិផល + ចតុត្ថឈាន ដោយមានបញ្ញិន្ទ្រិយខ្លាំងជាងគេបំផុត។',
    kammaDetailEn: 'Realizing Anāgāmī fruit + 4th Jhāna with paramount faculty of Wisdom (Paññā).',
  },

  // 28-31 Immaterial (Arūpāvacara)
  {
    num: 28,
    cat: 'arupa',
    pl: 'Ākāsānañcāyatana',
    km: 'អាកាសានញ្ចាយតនភូមិ (អរូបភូមិទី ១)',
    en: 'Infinite Space Sphere',
    planeKm: 'អរូបភូមិ', planeEn: 'Immaterial Sphere',
    spanKm: '២០,០០០ មហាកប្ប', spanEn: '20,000 Mahākappas',
    aggregatesKm: '៤ ខន្ធ (មានតែនាមធម៌ វេទនា សញ្ញា សង្ខារ វិញ្ញាណ — គ្មានរូបកាយឡើយ)', aggregatesEn: '4 aggregates (Nāma only — NO physical body)',
    cittaKm: 'អរូបាវចរបឋមឈានវិបាកចិត្ត', cittaEn: '1st Immaterial Jhāna Resultant Mind',
    ariyaKm: 'មានព្រះអរិយបុគ្គល (សោតាបន្ន, សកទាគាមី, អនាគាមី)', ariyaEn: 'Sotapanna, Sakadagami, Anagami',
    shortDescKm: 'ភពដែលតម្កល់ចិត្តលើអាកាសមិនមានទីបំផុត គ្មានរូបកាយសូម្បីតែបន្តិច។',
    shortDescEn: 'Realms attained by dwelling on boundless, unobstructed space; completely free of matter.',
    longDescKm: 'អរូបព្រហ្មគ្មានរូបកាយ គ្មានភ្នែក ត្រចៀក ច្រមុះ អណ្តាត កាយឡើយ មានតែចិត្ត និងចេតសិកសុទ្ធសាធ។ ពួកលោកមិនអាចស្តាប់ព្រះធម៌របស់ព្រះពុទ្ធបានទេក្នុងជាតិនោះ ព្រោះគ្មានសោតប្បសាទ (ត្រចៀក)។ អាយុកាលវែងរហូតដល់ ២០,០០០ មហាកប្ប។',
    longDescEn: 'Devoid of physical form, eyes, or ears; exists purely as immaterial mental continuum. Unable to hear the Buddha\'s voice during this rebirth.',
    kammaDetailKm: 'ការចម្រើនអរូបកម្មដ្ឋាន ដោយដកកសិណរូបចេញ ហើយតម្កល់ចិត្តលើអាកាសមិនមានទីបំផុត (អនន្តោ អាកាសោ)។',
    kammaDetailEn: 'Attaining the first formless absorption by contemplating boundless space.',
  },
  {
    num: 29,
    cat: 'arupa',
    pl: 'Viññāṇañcāyatana',
    km: 'វិញ្ញាណញ្ចាយតនភូមិ (អរូបភូមិទី ២)',
    en: 'Infinite Consciousness Sphere',
    planeKm: 'អរូបភូមិ', planeEn: 'Immaterial Sphere',
    spanKm: '៤០,០០០ មហាកប្ប', spanEn: '40,000 Mahākappas',
    aggregatesKm: '៤ ខន្ធ (មានតែនាមធម៌)', aggregatesEn: '4 aggregates (Nāma only)',
    cittaKm: 'អរូបាវចរទុតិយឈានវិបាកចិត្ត', cittaEn: '2nd Immaterial Jhāna Resultant Mind',
    ariyaKm: 'មានព្រះអរិយបុគ្គល', ariyaEn: 'Ariyas present',
    shortDescKm: 'ភពដែលតម្កល់ចិត្តលើវិញ្ញាណមិនមានទីបំផុត។',
    shortDescEn: 'Formless plane where consciousness takes infinite consciousness itself as object.',
    longDescKm: 'តម្កល់ចិត្តលើវិញ្ញាណដែលដឹងនូវអាកាសនោះថាគ្មានទីបំផុត (អនន្តំ វិញ្ញាណំ)។ អាយុកាល ៤០,០០០ មហាកប្ប។',
    longDescEn: 'Meditative absorption that takes the consciousness of infinite space as its boundless object.',
    kammaDetailKm: 'ការសម្រេចទុតិយអរូបឈាន (វិញ្ញាណញ្ចាយតនឈាន)។',
    kammaDetailEn: 'Mastering the second formless absorption of boundless consciousness.',
  },
  {
    num: 30,
    cat: 'arupa',
    pl: 'Ākiñcaññāyatana',
    km: 'អាកិញ្ចញ្ញាយតនភូមិ (អរូបភូមិទី ៣)',
    en: 'Nothingness Sphere',
    planeKm: 'អរូបភូមិ', planeEn: 'Immaterial Sphere',
    spanKm: '៦០,០០០ មហាកប្ប', spanEn: '60,000 Mahākappas',
    aggregatesKm: '៤ ខន្ធ (មានតែនាមធម៌)', aggregatesEn: '4 aggregates (Nāma only)',
    cittaKm: 'អរូបាវចរតតិយឈានវិបាកចិត្ត', cittaEn: '3rd Immaterial Jhāna Resultant Mind',
    ariyaKm: 'មានព្រះអរិយបុគ្គល', ariyaEn: 'Ariyas present',
    shortDescKm: 'ភពដែលតម្កល់ចិត្តលើភាពមិនមានអ្វីសូម្បីបន្តិច (នត្ថិ កិញ្ចិ)។',
    shortDescEn: 'Subtle formless plane taking the non-existence or absence of anything as object.',
    longDescKm: 'តម្កល់ចិត្តលើភាពទទេស្អាត គ្មានអ្វីសូម្បីតែបន្តិច (នត្ថិ កិញ្ចិ)។ អាយុកាល ៦០,០០០ មហាកប្ប (អាចារ្យអាឡារកាលាម ធ្លាប់បានកើតនៅទីនេះ)។',
    longDescEn: 'Contemplating utter nothingness ("there is nothing"). The ascetic Āḷāra Kālāma was reborn here after death.',
    kammaDetailKm: 'ការសម្រេចតតិយអរូបឈាន (អាកិញ្ចញ្ញាយតនឈាន)។',
    kammaDetailEn: 'Mastering the third formless absorption of nothingness.',
  },
  {
    num: 31,
    cat: 'arupa',
    pl: 'Nevasaññānāsaññāyatana',
    km: 'នេវសញ្ញានាសញ្ញាយតនភូមិ (អរូបភូមិទី ៤ — កំពូលនៃត្រៃភព)',
    en: 'Neither Perception Nor Non-Perception',
    planeKm: 'អរូបភូមិ (កំពូលត្រៃភព)', planeEn: 'Pinnacle of Samsāra (Bhava-agga)',
    spanKm: '៨៤,០០០ មហាកប្ប', spanEn: '84,000 Mahākappas',
    aggregatesKm: '៤ ខន្ធ (សញ្ញាល្អិតដល់ទីបំផុត)', aggregatesEn: '4 aggregates (perception refined to vanishing point)',
    cittaKm: 'អរូបាវចរចតុត្ថឈានវិបាកចិត្ត', cittaEn: '4th Immaterial Jhāna Resultant Mind',
    ariyaKm: 'មានព្រះអរិយបុគ្គល (ភពកំពូលនៃសង្សារវដ្ដ)', ariyaEn: 'Highest peak of conditioned existence',
    shortDescKm: 'កំពូលភពខ្ពស់បំផុតក្នុងលោកទាំងមូល សញ្ញាល្អិតដល់កម្រិតថាមិនមែនមាន ក៏មិនមែនឥត។',
    shortDescEn: 'The absolute summit of the 31 planes; perception is so refined it neither exists nor does not exist.',
    longDescKm: 'ជាកំពូលភពខ្ពស់បំផុតក្នុងសង្សារវដ្ដ (ភវគ្គ)។ សញ្ញាមានសភាពល្អិតល្អន់បំផុតរហូតដល់មិនអាចហៅថាមានសញ្ញា ក៏មិនអាចហៅថាគ្មានសញ្ញា។ អាយុកាលយូរបំផុតរហូតដល់ ៨៤,០០០ មហាកប្ប (អាចារ្យឧទ្ទក រាមបុត្ត ធ្លាប់កើតនៅទីនេះ)។ ទោះបីជាមានអាយុយូរយ៉ាងណា ពេលអស់កម្ម ក៏នៅតែត្រូវវិលត្រឡប់មកកើតក្នុងភពខាងក្រោមវិញ ប្រសិនបើមិនទាន់បានសម្រេចអរិយមគ្គ។',
    longDescEn: 'The cosmic summit of Samsāra (Bhavagga). Perception is so gossamer-thin it cannot be deemed present nor entirely absent. Lasts 84,000 Mahākappas (where ascetic Uddaka Rāmaputta was reborn). Yet even this supreme realm remains subject to impermanence and kamma.',
    kammaDetailKm: 'ការសម្រេចចតុត្ថអរូបឈាន ដែលជាកម្រិតឈានខ្ពស់បំផុតក្នុងលោកិយ។',
    kammaDetailEn: 'Mastering the fourth formless absorption of neither-perception-nor-non-perception.',
  },
]

// Computed Filters
const filteredRealms = computed(() => {
  let list = allRealms
  if (activeCategory.value === 'apaya') list = list.filter(r => r.cat === 'apaya')
  else if (activeCategory.value === 'sugati') list = list.filter(r => r.cat === 'sugati')
  else if (activeCategory.value === 'rupa') list = list.filter(r => r.cat === 'rupa' || r.cat === 'suddhavasa')
  else if (activeCategory.value === 'suddhavasa') list = list.filter(r => r.cat === 'suddhavasa')
  else if (activeCategory.value === 'arupa') list = list.filter(r => r.cat === 'arupa')

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim()
    list = list.filter(r =>
      r.km.toLowerCase().includes(q) ||
      r.en.toLowerCase().includes(q) ||
      r.pl.toLowerCase().includes(q) ||
      r.kammaDetailKm.toLowerCase().includes(q)
    )
  }
  return list
})

const filteredApaya = computed(() => filteredRealms.value.filter(r => r.cat === 'apaya'))
const filteredSugati = computed(() => filteredRealms.value.filter(r => r.cat === 'sugati'))
const filteredRupa = computed(() => filteredRealms.value.filter(r => r.cat === 'rupa' || r.cat === 'suddhavasa'))
const filteredArupa = computed(() => filteredRealms.value.filter(r => r.cat === 'arupa'))
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.32s cubic-bezier(0.25, 1, 0.5, 1);
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-8px);
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  max-height: 2500px;
  transform: translateY(0);
}
</style>
