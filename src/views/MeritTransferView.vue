<template>
  <div class="fade-up">
    <!-- Header -->
    <header class="text-center max-w-2xl mx-auto">
      <p class="chapter-label">{{ t('ធម្មវិទ្យានៃការចែករំលែកបុណ្យ & បុណ្យភ្ជុំបិណ្ឌ', 'The Mechanics of Merit Dedication & Ancestral Rites') }}</p>
      <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
        {{ t('យន្តការឧទ្ទិសកុសល & បរទត្តូបជីវីប្រេត', 'Merit Transfer (Pattidāna) & Paradattūpajīvī Petas') }}
      </h2>
      <div class="ornament mt-4">&#9784;</div>
      <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
        {{ t('តើការឧទ្ទិសបុណ្យដល់ញាតិដែលចែកឋានទៅដំណើរការយ៉ាងដូចម្តេច? ហេតុអ្វីបានជាមានតែប្រេតមួយពួកគត់ដែលអាចទទួលបុណ្យបាន? និងវិធីធ្វើបុណ្យឧទ្ទិសឱ្យចំគោលដៅ ១០០% តាមគម្ពីរពុទ្ធសាសនា។', 'How does merit transference work? Why can only one specific class of Petas receive shared merits? Canonical guide from the Jāṇussoṇī and Tirokuḍḍa Suttas.') }}
      </p>

      <!-- Section Navigation Pills (Uniform height, touch scroll) -->
      <div class="flex items-center gap-2 mt-6 overflow-x-auto pb-2 pt-1 scrollbar-none touch-pan-x sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
        <button
          v-for="sec in sections"
          :key="sec.id"
          @click="activeSection = sec.id"
          class="lang-pick px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 inline-flex items-center justify-center gap-1.5"
          :class="activeSection === sec.id ? 'on' : ''"
        >
          <span>{{ sec.icon }}</span>
          <span>{{ t(sec.km, sec.en) }}</span>
        </button>
      </div>
    </header>

    <!-- Quick Stat Highlights -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-6">
      <div class="card-paper p-3 text-center">
        <span class="text-xl block">🕯️</span>
        <strong class="text-xs sm:text-sm block mt-1" :style="{ color: 'var(--ink)' }">{{ t('បដិទាន', 'Pattidāna') }}</strong>
        <span class="text-[10px] sm:text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('ការចែករំលែកបុណ្យ', 'Merit dedication') }}</span>
      </div>
      <div class="card-paper p-3 text-center">
        <span class="text-xl block">👻</span>
        <strong class="text-xs sm:text-sm block mt-1" :style="{ color: 'var(--ink)' }">{{ t('បរទត្តូបជីវី', 'Paradattūpajīvī') }}</strong>
        <span class="text-[10px] sm:text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('ប្រេតទទួលបុណ្យបាន', 'Only recipient class') }}</span>
      </div>
      <div class="card-paper p-3 text-center">
        <span class="text-xl block">✨</span>
        <strong class="text-xs sm:text-sm block mt-1" :style="{ color: 'var(--ink)' }">{{ t('ចេតនា ៣ កាល', '3 Volitions') }}</strong>
        <span class="text-[10px] sm:text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('មុន កំពុង & ក្រោយធ្វើ', 'Before, during, after') }}</span>
      </div>
      <div class="card-paper p-3 text-center">
        <span class="text-xl block">📜</span>
        <strong class="text-xs sm:text-sm block mt-1" :style="{ color: 'var(--ink)' }">{{ t('តិរោកុឌ្ឌសូត្រ', 'Tirokuḍḍa Sutta') }}</strong>
        <span class="text-[10px] sm:text-xs" :style="{ color: 'var(--ink-muted)' }">{{ t('សូត្រឧទ្ទិសញាតិ', 'Dedication discourse') }}</span>
      </div>
    </div>

    <!-- SECTION 1: HOW MERIT TRANSFER WORKS -->
    <section v-if="activeSection === 'mechanism' || activeSection === 'all'" class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">🕯️</span>
          <h3 class="font-display text-lg sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
            {{ t('យន្តការចិត្ត និងកម្មផលនៃការឧទ្ទិសបុណ្យ (The Mechanics of Pattidāna)', 'Psychological & Karmic Mechanics of Merit Transfer') }}
          </h3>
        </div>
      </div>
      <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('មនុស្សជាច្រើនយល់ច្រឡំថា ការឧទ្ទិសបុណ្យធ្វើឱ្យបុណ្យរបស់ខ្លួនថយចុះ។ ព្រះពុទ្ធបានពន្យល់ថា បុណ្យមិនដូចជាប្រាក់ដែលចាយហើយអស់នោះទេ តែដូចជាអណ្តាតភ្លើងទៀន។', 'Merit is not diminished by sharing. Like lighting another lamp from your flame, your own light never decreases; instead, the whole room becomes twice as bright!') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div class="card-paper p-4 sm:p-5 space-y-2 h-full flex flex-col justify-between">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🔥</span>
            <div>
              <h4 class="font-display font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
                {{ t('ឧបមាអំពីអណ្តាតប្រទីប (The Flame Analogy)', 'The Flame Analogy') }}
              </h4>
              <span class="paali text-[11px]" :style="{ color: 'var(--accent)' }">Milinda-Pañhā</span>
            </div>
          </div>
          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('បុរសម្នាក់កាន់ចន្លុះភ្លើងភ្លឺចិញ្ចាច។ មនុស្ស ១០០ នាក់ផ្សេងទៀតកាន់ចន្លុះរលត់ មកសុំតភ្លើងពីចន្លុះរបស់គាត់។ អណ្តាតភ្លើងនៃចន្លុះដើម មិនត្រឹមតែមិនថយចុះពន្លឺប៉ុណ្ណោះទេ ថែមទាំងធ្វើឱ្យពន្លឺកាន់តែភ្លឺខ្លាំងទ្វេឡើងរាប់រយដង។ ការចែកបុណ្យ (បដិទាន) ក៏ដូច្នោះដែរ!', 'A person holds a burning torch. A hundred others bring unlit torches to borrow fire from it. The original flame does not diminish in the slightest; instead, the darkness is dispersed with hundredfold brilliance. Such is Pattidāna!') }}
          </p>
        </div>

        <div class="card-paper p-4 sm:p-5 space-y-2 h-full flex flex-col justify-between">
          <div class="flex items-center gap-2">
            <span class="text-2xl">🧠</span>
            <div>
              <h4 class="font-display font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
                {{ t('តើអ្នកទទួល ប្តូរទុក្ខជាសុខដោយរបៀបណា?', 'How Does the Recipient Transform Suffering?') }}
              </h4>
              <span class="paali text-[11px]" :style="{ color: 'var(--accent)' }">Abhidhamma Analysis</span>
            </div>
          </div>
          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('អ្នកទទួលមិនមែនចាប់យកបាយ ទឹក ឬសំពត់ពីអ្នករស់នៅដោយផ្ទាល់នោះទេ។ តែនៅពេលដឹងថាញាតិបានធ្វើទានឧទ្ទិសមក ចិត្តរបស់គេកើត «បដ្តានុមោទនាម័យកុសលចិត្ត» (សោមនស្សសហគតំ) ពោលពាក្យ «សាធុ!»។ កុសលចិត្តនោះឯងជាអ្នកបង្កើតរូបទិព្វ បាយទិព្វ និងសម្លៀកបំពាក់ទិព្វជំនួសភ្លាមៗ!', 'The ghost does not consume gross physical rice. Rather, upon perceiving the dedication, their mind generates wholesome joy (Pattānumodanā-citta) and utters "Sādhu!". That wholesome mental state instantly manifests celestial food and garments!') }}
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 2: WHO CAN AND CANNOT RECEIVE MERIT -->
    <section v-if="activeSection === 'paradattupa' || activeSection === 'all'" class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">👻</span>
          <h3 class="font-display text-lg sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
            {{ t('តើអ្នកណាខ្លះអាចទទួលបុណ្យឧទ្ទិសបាន? (ជាណុស្សោណិសូត្រ)', 'Who Can Receive Transferred Merit? (Jāṇussoṇī Sutta)') }}
          </h3>
        </div>
        <span class="paali text-xs" :style="{ color: 'var(--accent)' }">Aṅguttara Nikāya AN 10.177</span>
      </div>
      <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រាហ្មណ៍ឈ្មោះ ជាណុស្សោណិ បានទូលសួរព្រះពុទ្ធថា «តើទានដែលខ្ញុំឧទ្ទិសដល់ញាតិដែលចែកឋានទៅ ពួកគេបានទទួលទាំងអស់ដែរឬទេ?»។ ព្រះពុទ្ធត្រាស់តបថា មិនមែនទាំងអស់ទេ មានតែស្ថានដែលសមស្រប (ឋាន) ប៉ុណ្ណោះ៖', 'The Brahmin Jāṇussoṇī asked the Buddha if departed kin always receive gifts. The Buddha explained that it only reaches beings in appropriate conditions (Ṭhāna):') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div class="card-paper p-4 space-y-1.5 opacity-80">
          <div class="flex items-center justify-between">
            <h4 class="font-display font-bold text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">🔥 {{ t('សត្វនរក (Niraya)', 'Hell Beings') }}</h4>
            <span class="sutra-num text-[10px] font-bold" :style="{ color: 'var(--accent-bright)' }">{{ t('មិនបានទទួល', 'Cannot receive') }}</span>
          </div>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('រងទុក្ខវេទនាខ្លាំងគ្រប់វិនាទី ចិត្តជាប់ជំពាក់នឹងការឈឺចាប់ គ្មានឱកាសនឹកឃើញអនុមោទនាបុណ្យឡើយ។', 'Overwhelmed by ceaseless torment every millisecond; incapable of redirecting mind to rejoice.') }}
          </p>
        </div>

        <div class="card-paper p-4 space-y-1.5 opacity-80">
          <div class="flex items-center justify-between">
            <h4 class="font-display font-bold text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">🐾 {{ t('សត្វតិរច្ឆាន (Tiracchāna)', 'Animals') }}</h4>
            <span class="sutra-num text-[10px] font-bold" :style="{ color: 'var(--accent-bright)' }">{{ t('មិនបានទទួល', 'Cannot receive') }}</span>
          </div>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('រស់នៅដោយមោហៈ ស្វែងរកចំណីតាមសភាវគតិ មិនដឹងពីការឧទ្ទិសបុណ្យរបស់មនុស្សឡើយ។', 'Governed by instinct and delusion; unable to comprehend merit dedications.') }}
          </p>
        </div>

        <div class="card-paper p-4 space-y-1.5 opacity-80">
          <div class="flex items-center justify-between">
            <h4 class="font-display font-bold text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">🧍 {{ t('មនុស្សលោក (Manussa)', 'Human Realm') }}</h4>
            <span class="text-[10px] px-2 py-0.5 rounded" :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)' }">{{ t('រស់តាមកម្មខ្លួន', 'Self-karma') }}</span>
          </div>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('បើតាប់ជាតិជាមនុស្សរួចហើយ គេរស់នៅដោយអាហាររបស់មនុស្ស មិនអាចទទួលបាយទឹកតាមរយៈការឧទ្ទិសឡើយ។', 'Reborn as humans, they nourish on worldly sustenance through their own karma.') }}
          </p>
        </div>

        <div class="card-paper p-4 space-y-1.5">
          <div class="flex items-center justify-between">
            <h4 class="font-display font-bold text-xs sm:text-sm" :style="{ color: 'var(--ink)' }">🪷 {{ t('ទេវតា & ព្រហ្ម (Devas)', 'Devas & Brahmas') }}</h4>
            <span class="text-[10px] px-2 py-0.5 rounded font-bold" :style="{ background: 'var(--bg-card-2)', color: 'var(--accent)' }">{{ t('អនុមោទនាបាន', 'Can rejoice') }}</span>
          </div>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('មានសម្បត្តិទិព្វស្រាប់ហើយ តែបើដឹងថាញាតិធ្វើបុណ្យឧទ្ទិសមក អាចអនុមោទនាបង្កើនរស្មី និងសេចក្តីសុខទ្វេឡើង។', 'Already possess celestial abundance, but rejoicing increases their celestial radiance.') }}
          </p>
        </div>

        <!-- THE SPECIAL RECIPIENT -->
        <div class="card-paper p-4 sm:p-5 sm:col-span-2 space-y-2" :style="{ borderColor: 'var(--accent)' }">
          <div class="flex items-center justify-between">
            <h4 class="font-display font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">👑 {{ t('បរទត្តូបជីវីប្រេត (Paradattūpajīvī Peta)', 'Paradattūpajīvī Petas') }}</h4>
            <span class="lang-pick px-2.5 py-0.5 text-xs font-bold on">
              {{ t('ទទួលបុណ្យបាន ១០០%', 'Direct 100% Recipient') }}
            </span>
          </div>
          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ជាពួកប្រេតតែមួយគត់ក្នុងចំណោមប្រេតទាំងអស់ ដែល «រស់នៅដោយសារការឲ្យរបស់អ្នកដទៃ» (បរ = អ្នកដទៃ, ទត្ត = ការឲ្យ, ឧបជីវី = ចិញ្ចឹមជីវិត)។ ពួកនេះគ្មានដីស្រែ គ្មានជំនួញជួញដូរឡើយ ត្រូវរង់ចាំតែញាតិឧទ្ទិសកុសលមកប៉ុណ្ណោះ។ នៅពេលញាតិឧទ្ទិស ហើយខ្លួនជ្រះថ្លាថា «សាធុ!» នោះទើបរួចផុតពីទុក្ខភ្លាមៗ!', 'The ONLY class of ghosts that survive solely on merits dedicated by human relatives. They have no agriculture, trade, or cattle; they depend entirely on dedicated gifts. When relatives dedicate merits and they utter "Sādhu!", their torment ends instantly!') }}
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 3: THE 3 CONDITIONS FOR SUCCESSFUL TRANSFER -->
    <section v-if="activeSection === 'conditions' || activeSection === 'all'" class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">🎯</span>
          <h3 class="font-display text-lg sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
            {{ t('លក្ខខណ្ឌ ៣ យ៉ាង ដើម្បីឱ្យការឧទ្ទិសបុណ្យបានផលពេញលេញ', 'The 3 Factors for Fully Effective Merit Transfer') }}
          </h3>
        </div>
      </div>
      <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ដើម្បីឱ្យបុណ្យជ្រាបទៅដល់ញាតិដែលចែកឋានទៅបាន ១០០% ត្រូវមានកត្តាផ្សំ ៣ យ៉ាងជួបជុំគ្នា៖', 'In Milindapañhā, the venerable Nāgasena explains that merit transference is only actualized when three conditions intersect:') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div
          v-for="cond in threeConditions"
          :key="cond.num"
          class="card-paper p-4 sm:p-5 space-y-2 h-full flex flex-col justify-between"
        >
          <div class="flex items-center gap-2">
            <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">
              #{{ cond.num }}
            </span>
            <h4 class="font-display font-bold text-sm" :style="{ color: 'var(--ink)' }">
              {{ t(cond.titleKm, cond.titleEn) }}
            </h4>
          </div>

          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t(cond.descKm, cond.descEn) }}
          </p>
        </div>
      </div>
    </section>

    <!-- SECTION 4: TIROKUDDA SUTTA -->
    <section v-if="activeSection === 'tirokudda' || activeSection === 'all'" class="mt-6 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-lg sm:text-xl">📜</span>
          <h3 class="font-display text-lg sm:text-xl font-bold" :style="{ color: 'var(--ink)' }">
            {{ t('តិរោកុឌ្ឌសូត្រ៖ ធម៌ទេសនាប្រោសប្រេតញាតិព្រះបាទពិម្ពិសារ', 'Tirokuḍḍa Sutta: Discourse on Ancestral Kin Beyond the Walls') }}
          </h3>
        </div>
        <span class="paali text-xs" :style="{ color: 'var(--accent)' }">Khuddakapāṭha Kp 7</span>
      </div>
      <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('គម្ពីរពុទ្ធសាសនាដ៏ល្បីល្បាញបំផុតដែលព្រះពុទ្ធសម្តែងក្នុងបុណ្យភ្ជុំបិណ្ឌ/ឧទ្ទិសកុសល។ ព្រះបាទពិម្ពិសារបានថ្វាយទានដល់ព្រះសង្ឃ ហើយច្រូចទឹកឧទ្ទិសថា៖ «ឥទំ វោ ញាតីនំ ហោតុ សុខិតា ហោន្តុ ញាតយោ» ស្រាប់តែប្រេតញាតិដែលស្រេកឃ្លានរាប់កប្ប បានក្លាយជាទេវតាភ្លាមៗ!', 'The canonical root text of ancestral dedications. When King Bimbisāra offered food and poured water reciting "Idaṁ vo ñātīnaṁ hotu...", his starved kin instantly transformed into radiant devas.') }}
      </p>

      <div class="space-y-3">
        <div
          v-for="(verse, idx) in tirokuddaVerses"
          :key="idx"
          class="verse-box p-4 sm:p-5 space-y-2"
        >
          <div class="flex items-center justify-between">
            <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">
              {{ t('គាថាទី ', 'Stanza ') }}{{ verse.verse }}
            </span>
          </div>

          <p class="paali font-serif italic text-xs sm:text-sm font-semibold leading-relaxed" :style="{ color: 'var(--ink)' }">
            « {{ verse.pali }} »
          </p>

          <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t(verse.km, verse.en) }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeSection = ref('mechanism')

const sections = [
  { id: 'mechanism', icon: '🕯️', km: 'យន្តការឧទ្ទិសបុណ្យ', en: 'How Transfer Works' },
  { id: 'paradattupa', icon: '👻', km: 'បរទត្តូបជីវីប្រេត & ពួកប្រេត', en: 'Paradattūpajīvī Petas' },
  { id: 'conditions', icon: '⚖️', km: 'លក្ខខណ្ឌ ៣ ប្រការ', en: '3 Essential Pillars' },
  { id: 'cetana', icon: '✨', km: 'ចេតនា ៣ កាល', en: '3 Pure Volitions' },
  { id: 'guide', icon: '📜', km: 'វិធីឧទ្ទិសជាក់ស្តែង & បាលី', en: 'Dedication Guide & Pali' },
  { id: 'all', icon: '📜', km: 'បង្ហាញទាំងអស់', en: 'Show All' }
]
</script>
