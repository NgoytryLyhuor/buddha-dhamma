<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៩៦ — វាចា ៦ ប្រភេទ', 'GATHA 96 — 6 CLASSES OF SPEECH (MN 58)') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('វាចា ៦ ប្រភេទរបស់ព្រះពុទ្ធ ៖ សិល្បៈនៃការជ្រើសរើសពាក្យសំដី & កាលវេលា', 'The 6 Classes of Speech: The Buddha’s Art of Timely Communication') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('វាចា ៦ ប្រភេទ គឺជាក្បួនខ្នាតគំរូដ៏ល្អឥតខ្ចោះនៃការប្រើប្រាស់វាចា ដែលព្រះសម្មាសម្ពុទ្ធទ្រង់បានសម្តែងប្រាប់អភយរាជកុមារ ក្នុង «អភយរាជកុមារសូត្រ» (MN 58)។ ព្រះពុទ្ធបានបែងចែកពាក្យសំដីទាំងអស់លើលោកជា ៦ ប្រភេទ ដោយផ្អែកលើលក្ខណៈវិនិច្ឆ័យ ៣ យ៉ាង ៖ (១) ពិត ឬមិនពិត (២) មានប្រយោជន៍ ឬឥតប្រយោជន៍ និង (៣) គាប់ចិត្ត ឬមិនគាប់ចិត្តអ្នកស្តាប់។ អ្វីដែលអស្ចារ្យបំផុតនោះគឺ ក្នុងចំណោមវាចាទាំង ៦ នេះ ព្រះសម្មាសម្ពុទ្ធទ្រង់ជ្រើសរើសត្រាស់សម្តែងតែ ២ ប្រភេទប៉ុណ្ណោះ ហើយទ្រង់តែងតែរង់ចាំ «កាលវេលាដ៏សមគួរ» ទើបត្រាស់ចេញមកក្រៅ។', 'The Six Classes of Speech represent the Buddha’s consummate paradigm of ethical and skillful communication, expounded to Prince Abhaya in the Abhayarājakumāra Sutta (MN 58). The Buddha classified all human speech across three exacting criteria: (1) Is it true or untrue? (2) Is it beneficial or unbeneficial? (3) Is it pleasing or displeasing to the listener? Remarkably, out of the six logical permutations, the Blessed One only speaks two categories—and even then, only with profound mastery of the appropriate timing.') }}
    </p>

    <!-- Pali Gatha Box from Abhayarajakumara Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«យំ តថាគតោ ជានាតិ ភូតំ តច្ឆំ អត្ថសំហិតំ, តញ្ច បរេសំ អប្បិយំ អមនាបំ, តត្របិ កាលញ្ញូ តថាគតោ ហោតិ តស្ស វាចាយ វេយ្យាករណាយ។»', '"Such speech as the Tathāgata knows to be true, real, and beneficial, but which is unwelcoming and displeasing to others: in that case the Tathāgata knows the proper time to speak." — Majjhima Nikāya 58') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— អភយរាជកុមារសូត្រ មជ្ឈិមនិកាយ មជ្ឈិមបណ្ណាសក', '— Abhayarājakumāra Sutta, Majjhima Nikāya') }}
      </p>
    </div>

    <!-- The 6 Speeches Grid -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🗣️</span>
        <span>{{ t('វិភាគវាចាទាំង ៦ ប្រភេទលម្អិត', 'The 6 Categories of Speech Analyzed') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="s in speeches"
          :key="s.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
          :class="s.actionType === 'speak' ? 'ring-2 ring-emerald-500/50' : 'opacity-85'"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <div class="flex items-center gap-2">
                <span
                  class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold"
                  :class="s.actionType === 'speak' ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300' : 'bg-rose-500/20 text-rose-700 dark:text-rose-300'"
                >
                  {{ s.num }}
                </span>
                <div>
                  <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">{{ t(s.titleKm, s.titleEn) }}</h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ s.criteria }}</p>
                </div>
              </div>
              <span class="text-2xl">{{ s.icon }}</span>
            </div>

            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(s.descKm, s.descEn) }}
            </p>
          </div>

          <!-- Buddha's Practice -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div
              class="p-2.5 rounded-lg border font-bold"
              :class="s.actionType === 'speak' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300' : 'bg-rose-500/10 border-rose-500/30 text-rose-700 dark:text-rose-300'"
            >
              {{ t(s.verdictKm, s.verdictEn) }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- The Baby & Pebble Parable -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>👶</span>
        <span>{{ t('ឧបមាទារកស្លាក់គ្រួស ៖ មូលហេតុដែលត្រូវនិយាយពាក្យមិនគាប់ចិត្ត', 'The Parable of the Choking Infant: Compassionate Tough Love') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រះពុទ្ធបានសួរអភយរាជកុមារថា ៖ បើកូនតូចរបស់អ្នកលេបដុំក្រួសចូលបំពង់ក តើអ្នកនឹងធ្វើដូចម្តេច? ព្រះរាជកុមារទូលថា ៖ ខ្ញុំនឹងយកម្រាមដៃខ្វេចយកដុំក្រួសនោះចេញ ទោះបីជាកូនឈឺយំ ឬហូរឈាមក៏ដោយ ព្រោះតែសេចក្តីអាណិតសង្គ្រោះជីវិតកូន។ ព្រះពុទ្ធទ្រង់ត្រាស់ថា ៖ ព្រះតថាគតក៏យ៉ាងនោះដែរ កាលបើពាក្យណាជាការពិត និងមានប្រយោជន៍ដល់សត្វលោក ទោះបីជាពាក្យនោះមិនគាប់ចិត្ត ឬស្តាប់ទៅរអាក់រអួល ក៏ព្រះអង្គជ្រើសរើសពេលវេលាសមគួរដើម្បីត្រាស់ដាស់តឿន ដោយសារតែមេត្តាធម៌ដ៏បរិសុទ្ធ។', 'The Buddha asked Prince Abhaya: "If your infant son swallowed a pebble that stuck in his throat, what would you do?" The prince replied: "I would use my finger to hook it out, even if he cried in pain or bled, purely out of compassion to save his life." The Buddha answered: "Exactly so. When words are true and beneficial, even if they displease or sting the listener, the Tathāgata speaks them at the proper time, motivated entirely by compassionate love to save beings from delusion."') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const speeches = [
  {
    id: 1,
    num: '១',
    actionType: 'reject',
    titleKm: 'មិនពិត + ឥតប្រយោជន៍ + មិនគាប់ចិត្ត',
    titleEn: 'Untrue + Unbeneficial + Displeasing',
    criteria: 'អភូតំ + អនត្ថសំហិតំ + អប្បិយំ',
    icon: '🚫',
    descKm: 'ពាក្យកុហក ពាក្យបង្កាច់បង្ខូច ឬពាក្យប្រមាថ ដែលគ្មានការពិត គ្មានប្រយោជន៍ ហើយធ្វើឱ្យអ្នកដទៃឈឺចាប់ខឹងសម្បារ។',
    descEn: 'Lies, false accusations, and malicious insults devoid of factual basis or practical benefit.',
    verdictKm: '❌ ព្រះពុទ្ធមិនដែលត្រាស់ពាក្យនេះដាច់ខាត',
    verdictEn: '❌ The Buddha never speaks such speech.',
  },
  {
    id: 2,
    num: '២',
    actionType: 'reject',
    titleKm: 'ពិត + ឥតប្រយោជន៍ + មិនគាប់ចិត្ត',
    titleEn: 'True + Unbeneficial + Displeasing',
    criteria: 'ភូតំ + អនត្ថសំហិតំ + អប្បិយំ',
    icon: '⚠️',
    descKm: 'រឿងពិត តែជាការជីកកកាយកំហុសអតីតកាល ឬរឿងដែលគ្មានប្រយោជន៍ ហើយនាំឱ្យអ្នកដទៃក្តៅក្រហាយឈឺចាប់។',
    descEn: 'Facts that are technically true, yet unhelpful and purely hurtful, raking up past shame.',
    verdictKm: '❌ ព្រះពុទ្ធមិនដែលត្រាស់ពាក្យនេះដាច់ខាត',
    verdictEn: '❌ The Buddha never speaks such speech.',
  },
  {
    id: 3,
    num: '៣',
    actionType: 'speak',
    titleKm: 'ពិត + មានប្រយោជន៍ + មិនគាប់ចិត្ត',
    titleEn: 'True + Beneficial + Displeasing',
    criteria: 'ភូតំ + អត្ថសំហិតំ + អប្បិយំ',
    icon: '🩺',
    descKm: 'ពាក្យពិត និងមានប្រយោជន៍ធំធេងក្នុងការកែតម្រង់ជីវិត ប៉ុន្តែស្តាប់ទៅចាក់ដោត ពិបាកទទួលយក (ដូចជាថ្នាំជូរ ឬការដាស់តឿនកំហុស)។',
    descEn: 'Truth that is profoundly beneficial and life-saving, though unpleasant to hear (like bitter healing medicine).',
    verdictKm: '✅ ព្រះពុទ្ធដឹងកាលវេលាសមគួរទើបត្រាស់',
    verdictEn: '✅ The Buddha speaks only when the time is right.',
  },
  {
    id: 4,
    num: '៤',
    actionType: 'reject',
    titleKm: 'មិនពិត + ឥតប្រយោជន៍ + គាប់ចិត្ត',
    titleEn: 'Untrue + Unbeneficial + Pleasing',
    criteria: 'អភូតំ + អនត្ថសំហិតំ + បិយំ',
    icon: '🎭',
    descKm: 'ពាក្យបញ្ចើចបញ្ចើរ កុហកបោកប្រាស់ លើកជើង ដែលស្តាប់ទៅពិរោះស្តាប់ តែបង្កប់ដោយពិសពុលនិងការខាតបង់។',
    descEn: 'Deceitful sweet-talk, deceitful flattery, and hollow promises that caress the ego but poison the spirit.',
    verdictKm: '❌ ព្រះពុទ្ធមិនដែលត្រាស់ពាក្យនេះដាច់ខាត',
    verdictEn: '❌ The Buddha never speaks such speech.',
  },
  {
    id: 5,
    num: '៥',
    actionType: 'reject',
    titleKm: 'ពិត + ឥតប្រយោជន៍ + គាប់ចិត្ត',
    titleEn: 'True + Unbeneficial + Pleasing',
    criteria: 'ភូតំ + អនត្ថសំហិតំ + បិយំ',
    icon: '🗣️',
    descKm: 'រឿងពិត ស្តាប់ទៅសប្បាយរីករាយ តែជារឿងឥតប្រយោជន៍ (តិរច្ឆានកថា) ដូចជារឿងដើរលេង ជជែកកម្សាន្តឥតខ្លឹមសារ។',
    descEn: 'Factual gossip or entertainment trivia: entertaining to talk about, but spiritually empty and time-wasting.',
    verdictKm: '❌ ព្រះពុទ្ធមិនដែលត្រាស់ពាក្យនេះដាច់ខាត',
    verdictEn: '❌ The Buddha never speaks such speech.',
  },
  {
    id: 6,
    num: '៦',
    actionType: 'speak',
    titleKm: 'ពិត + មានប្រយោជន៍ + គាប់ចិត្ត',
    titleEn: 'True + Beneficial + Pleasing',
    criteria: 'ភូតំ + អត្ថសំហិតំ + បិយំ',
    icon: '🌟',
    descKm: 'ពាក្យពិត មានប្រយោជន៍រុងរឿង ហើយជាទីស្រឡាញ់គាប់ចិត្តរបស់អ្នកស្តាប់ ដូចជាធម្មកថា ការសរសើរគុណធម៌ និងការលើកទឹកចិត្ត។',
    descEn: 'Truth that is deeply wholesome, transformative, and delightful to hear: Dhamma discourses and virtuous praise.',
    verdictKm: '✅ ព្រះពុទ្ធជ្រើសរើសកាលវេលាសមគួរដើម្បីត្រាស់',
    verdictEn: '✅ The Buddha speaks with masterful timing.',
  },
]
</script>
