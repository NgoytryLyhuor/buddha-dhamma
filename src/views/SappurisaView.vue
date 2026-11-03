<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ១០៤ — សប្បុរិសធម៌ ៧', 'GATHA 104 — 7 QUALITIES OF AN UPRIGHT PERSON') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('សប្បុរិសធម៌ ៧ ៖ គុណធម៌នៃមនុស្សថ្លៃថ្នូរ ស្គាល់ហេតុ ផល ខ្លួន កាល & សង្គម', 'The 7 Qualities of a Noble Person (Sappurisa Dhamma, AN 7.68)') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('សប្បុរិសធម៌ ៧ សំដៅលើគុណធម៌ដ៏វិសេសវិសាល ៧ ប្រការរបស់ «សប្បុរស» គឺមនុស្សថ្លៃថ្នូរ មនុស្សល្អបរិសុទ្ធ ដែលមានប្រាជ្ញាវាងវៃ និងមានការយល់ដឹងស៊ីជម្រៅអំពីការរស់នៅក្នុងសង្គម។ នៅក្នុងសប្បុរិសសូត្រ (AN 7.68) ព្រះសម្មាសម្ពុទ្ធទ្រង់បានត្រាស់សម្តែងថា បុគ្គលណាដែលប្រកបដោយធម៌ទាំង ៧ នេះ រមែងជាទីស្រឡាញ់រាប់អាននៃមនុស្សនិងទេវតា ជាអ្នកដឹកនាំដ៏ឆ្នើម មិនដែលធ្វើឱ្យខ្លួនឯងនិងអ្នកដទៃក្តៅក្រហាយឡើយ ហើយតែងតែនាំមកនូវសេចក្តីសុខសន្តិភាពដល់ពិភពលោក។ ធម៌ទាំង ៧ នេះគឺជាត្រីវិស័យដឹកនាំជីវិតដ៏ពេញលេញបំផុត។', 'Sappurisa Dhamma designates the seven essential qualities that define a truly noble, upright, and wise human being (Sappurisa). In the Sappurisa Sutta (AN 7.68), the Buddha revealed that an individual endowed with these seven virtues becomes a magnetic beacon of peace, respected by both humans and deities, an exemplary leader who neither harms themselves nor others, and an architect of social harmony. These seven comprehensive criteria form a master moral compass for modern leadership, ethical communication, and daily discernment.') }}
    </p>

    <!-- Pali Gatha Box from Sappurisa Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«សត្តហិ ភិក្ខវេ ធម្មេហិ សមន្នាគតោ ភិក្ខុ សប្បុរិសោ ហោតិ។ កតមេហិ សត្តហិ? ធម្មញ្ញូ ច ហោតិ, អត្ថញ្ញូ ច ហោតិ, អត្តញ្ញូ ច ហោតិ, មត្តញ្ញូ ច ហោតិ, កាលញ្ញូ ច ហោតិ, បរិសញ្ញូ ច ហោតិ, បុគ្គលញ្ញូ ច ហោតិ។»', '"Monks, endowed with seven qualities a monk is a good person. Which seven? He knows the principles (Dhammaññū), knows the goals (Atthaññū), knows himself (Attaññū), knows moderation (Mattaññū), knows the proper time (Kālaññū), knows the assembly (Parisaññū), and knows individuals (Puggalaññū)." — Aṅguttara Nikāya 7.68') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— សប្បុរិសសូត្រ សត្តកនិបាត អង្គុត្តរនិកាយ', '— Sappurisa Sutta, Sattakanipāta, Aṅguttara Nikāya') }}
      </p>
    </div>

    <!-- The 7 Qualities Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🌟</span>
        <span>{{ t('គុណធម៌ទាំង ៧ ប្រការរបស់សប្បុរសពិស្តារ', 'The 7 Virtues of a Noble Person') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="q in qualities"
          :key="q.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
          :class="q.id === 7 ? 'md:col-span-2' : ''"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                  {{ q.num }}
                </span>
                <div>
                  <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">{{ t(q.titleKm, q.titleEn) }}</h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ q.pali }}</p>
                </div>
              </div>
              <span class="text-2xl">{{ q.icon }}</span>
            </div>

            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(q.descKm, q.descEn) }}
            </p>
          </div>

          <!-- Wisdom in Action -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2.5 rounded-lg bg-stone-500/5 border border-stone-500/15">
              <span class="font-bold text-amber-700 dark:text-amber-300 block mb-0.5">
                💎 {{ t('ការអនុវត្តជាក់ស្តែង ៖', 'Practical Wisdom:') }}
              </span>
              <span class="text-stone-600 dark:text-stone-400">{{ t(q.actionKm, q.actionEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- The Universal Leader Section -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>👑</span>
        <span>{{ t('សប្បុរស ៖ មនុស្សគំរូនៃសកលលោក', 'The Noble Person: Global Archetype of Wisdom & Integrity') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('សប្បុរិសធម៌ ៧ មិនមែនសម្រាប់តែអ្នកបួសនោះទេ ប៉ុន្តែជាក្បួនខ្នាតសម្រាប់អ្នកដឹកនាំ អ្នកគ្រប់គ្រង មាតាបិតា និងពលរដ្ឋគ្រប់រូប។ កាលណាយើងស្គាល់ហេតុ ស្គាល់ផល ស្គាល់ខ្លួនឯង ស្គាល់ប្រមាណ ស្គាល់កាលវេលា ស្គាល់សង្គម និងស្គាល់ចិត្តមនុស្ស នោះយើងនឹងមិនដែលដើរផ្លូវខុសឡើយ ហើយជីវិតរមែងពោរពេញដោយសន្តិភាព និងកិត្តិយសដ៏រុងរឿង។', 'Sappurisa Dhamma transcends monastic walls: it is the quintessential standard for statespersons, executives, teachers, parents, and citizens alike. Knowing principles, consequences, self, moderation, timing, society, and people ensures one never strays onto destructive paths, illuminating human existence with unshakable integrity, peace, and noble honor.') }}
      </p>
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
    titleKm: 'ធម្មញ្ញុតា (ភាពជាអ្នកស្គាល់ហេតុ)',
    titleEn: 'Dhammaññutā (Knowing Principles / Causes)',
    pali: 'Dhammaññū — ស្គាល់ហេតុ',
    icon: '🧭',
    descKm: 'ការស្គាល់ហេតុ ស្គាល់គោលការណ៍ ច្បាប់ទម្លាប់ និងឫសគល់នៃបញ្ហា។ ដឹងច្បាស់ថាអំពើបែបណាជាហេតុនៃសេចក្តីសុខ និងអំពើបែបណាជាហេតុនៃសេចក្តីទុក្ខ។',
    descEn: 'Understanding root principles, moral laws, and causes: discerning accurately which causes produce happiness and which causes generate suffering.',
    actionKm: 'មុននឹងធ្វើអ្វីមួយ ត្រូវពិចារណាឱ្យច្បាស់ពីមូលហេតុ និងគោលការណ៍ត្រឹមត្រូវ។',
    actionEn: 'Always investigate the underlying root causes before initiating any action.',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'អត្ថញ្ញុតា (ភាពជាអ្នកស្គាល់ផល)',
    titleEn: 'Atthaññutā (Knowing Outcomes / Goals)',
    pali: 'Atthaññū — ស្គាល់ផល',
    icon: '🎯',
    descKm: 'ការស្គាល់ផល ស្គាល់គោលដៅ ស្គាល់អត្ថន័យ និងផលវិបាកដែលនឹងកើតឡើងពីសកម្មភាពនីមួយៗ មិនធ្វើការដោយខ្វាក់ភ្នែកឡើយ។',
    descEn: 'Understanding the ultimate consequence, meaning, and goal of every endeavor, anticipating long-term impact with strategic vision.',
    actionKm: 'មើលឃើញផលវិបាកវែងឆ្ងាយ មិនលោភលន់ចង់បានតែផលប្រយោជន៍ខ្លីៗនៅចំពោះមុខ។',
    actionEn: 'Anticipate long-term consequences, rejecting short-sighted immediate gains.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'អត្តញ្ញុតា (ភាពជាអ្នកស្គាល់ខ្លួនឯង)',
    titleEn: 'Attaññutā (Knowing Oneself)',
    pali: 'Attaññū — ស្គាល់ខ្លួនឯង',
    icon: '🪞',
    descKm: 'ការស្គាល់ខ្លួនឯង ស្គាល់កម្លាំង សមត្ថភាព ចំណេះដឹង គុណធម៌ និងចំណុចខ្វះខាតរបស់ខ្លួន មិនអួតអាងលើសការពិត និងមិនបាក់ទឹកចិត្ត។',
    descEn: 'Deep self-awareness of one’s own strengths, limitations, knowledge, morality, and shortcomings—neither arrogant nor defeated.',
    actionKm: 'ស្គាល់សមត្ថភាពពិតរបស់ខ្លួន ប្រឹងអភិវឌ្ឍចំណុចខ្សោយ និងមិនប្រៀបធៀបខ្លួនឯងនឹងអ្នកដទៃ។',
    actionEn: 'Cultivate candid self-honesty, refining flaws without unhealthy comparison.',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'មត្តញ្ញុតា (ភាពជាអ្នកស្គាល់ប្រមាណ)',
    titleEn: 'Mattaññutā (Knowing Moderation)',
    pali: 'Mattaññū — ស្គាល់កម្រិតល្មម',
    icon: '⚖️',
    descKm: 'ការស្គាល់ប្រមាណ ស្គាល់កម្រិតល្មម ក្នុងការបរិភោគអាហារ ការចាយវាយ ការនិយាយស្តី និងការធ្វើការងារ មិនឱ្យជ្រុលហួសហេតុ។',
    descEn: 'Mastery of moderation and balance: in eating, spending, speaking, resting, and working, avoiding harmful extremes.',
    actionKm: 'រស់នៅតាមក្បួន «ល្មម» មិនលោភលន់ មិនចាយវាយខ្ជះខ្ជាយ មិនធ្វើការងាររហូតខូចសុខភាព។',
    actionEn: 'Practice the golden mean in lifestyle, preserving bodily health and balance.',
  },
  {
    id: 5,
    num: '៥',
    titleKm: 'កាលញ្ញុតា (ភាពជាអ្នកស្គាល់កាលវេលា)',
    titleEn: 'Kālaññutā (Knowing the Proper Time)',
    pali: 'Kālaññū — ស្គាល់ពេលវេលា',
    icon: '⏳',
    descKm: 'ការស្គាល់កាលវេលា ដឹងថាពេលណាគួរធ្វើ ពេលណាគួរឈប់ ពេលណាគួរនិយាយ ពេលណាគួរស្ងៀម និងការគោរពពេលវេលាជានិច្ច។',
    descEn: 'Understanding the right timing: knowing when to act, when to wait, when to speak, when to keep silent, and honoring punctuality.',
    actionKm: 'មិនពន្យារពេលការងារ និងចេះជ្រើសរើសពេលវេលាត្រឹមត្រូវក្នុងការដោះស្រាយបញ្ហា។',
    actionEn: 'Never procrastinate essential duties, timing crucial conversations prudently.',
  },
  {
    id: 6,
    num: '៦',
    titleKm: 'បរិសញ្ញុតា (ភាពជាអ្នកស្គាល់បរិស័ទ/សង្គម)',
    titleEn: 'Parisaññutā (Knowing the Assembly / Social Context)',
    pali: 'Parisaññū — ស្គាល់សង្គម',
    icon: '👥',
    descKm: 'ការស្គាល់សង្គម មជ្ឈដ្ឋាន និងបរិស័ទ ដឹងពីវប្បធម៌ របៀបរៀបចំខ្លួន កាយវិការ និងការសន្ទនាឱ្យសមរម្យតាមកាលៈទេសៈ។',
    descEn: 'Understanding social dynamics, cultural norms, and community contexts: adapting posture, conduct, and language appropriately.',
    actionKm: 'ចូលស្ទឹងតាមបត់ ចូលស្រុកតាមទេស គោរពទំនៀមទម្លាប់ល្អនៃសង្គមដែលខ្លួនកំពុងរស់នៅ។',
    actionEn: 'Respect cultural nuances, adapting respectfully to diverse environments.',
  },
  {
    id: 7,
    num: '៧',
    titleKm: 'បុគ្គលញ្ញុតា (ភាពជាអ្នកស្គាល់បុគ្គល)',
    titleEn: 'Puggalaññutā (Knowing Individuals)',
    pali: 'Puggalaññū — ស្គាល់មនុស្ស',
    icon: '🤝',
    descKm: 'ការស្គាល់ចិត្តមនុស្ស ស្គាល់អត្តចរិត ដឹងថាអ្នកណាជាបណ្ឌិត អ្នកណាជាពាល អ្នកណាគួរគប់រក និងអ្នកណាគួរចៀសវាង។',
    descEn: 'Discerning human character and temperaments: knowing who is wise, who is foolish, who is trustworthy, and who should be avoided.',
    actionKm: 'សេពគប់តែកល្យាណមិត្ត ចៀសវាងមិត្តបាប និងចេះប្រើមនុស្សឱ្យត្រូវតាមសមត្ថភាព។',
    actionEn: 'Associate closely with virtuous friends (Kalyāṇamitta) and place people according to talent.',
  },
]
</script>
