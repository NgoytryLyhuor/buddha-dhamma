<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៦៨ — ធម៌នៅកន្លែងធ្វើការ & វិធីទប់ទល់មនុស្សពុល', 'GATHA 68 — MINDFUL WORK & COPING WITH TOXICITY') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ធម៌នៅកន្លែងធ្វើការ ៖ សិល្បៈនៃការចម្រើនសតិ & វិធីទប់ទល់មនុស្សពុល', 'Mindful Work & Coping with Toxic Colleagues') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('កន្លែងធ្វើការ គឺជាសមរភូមិជាក់ស្តែងបំផុតនៃការបដិបត្តិធម៌ ព្រោះវាជាទីកន្លែងដែលយើងត្រូវប្រឈមមុខនឹងសម្ពាធ ពេលវេលាកំណត់ ការប្រកួតប្រជែង និងជាពិសេសគឺការប៉ះទង្គិចអារម្មណ៍ជាមួយមនុស្សជុំវិញខ្លួន។ ព្រះពុទ្ធសាសនាមិនដែលបង្រៀនឱ្យយើងរត់គេចពីការងារ ឬគេចចេញពីសង្គមឡើយ តែបង្រៀនឱ្យយើងយកការងារធ្វើជា «អារម្មណ៍កម្មដ្ឋាន» និងបំពាក់អាវក្រោះផ្លូវចិត្ត ដើម្បីទប់ទល់នឹងបរិយាកាសពុល (Toxic Environment) និងមនុស្សពុល ដោយមិនធ្វើឱ្យចិត្តខ្លួនឯងក្តៅក្រហាយ ឬបាត់បង់សន្តិភាពខាងក្នុង។', 'The workplace is the most vital living testing ground for Dhamma practice. It is where deadlines, organizational politics, stressful workloads, and abrasive personalities test our character. Buddhism does not advise escaping worldly responsibility; rather, it transforms work itself into dynamic meditation, equipping the practitioner with psychological armor to handle toxic coworkers with unshakeable calm and compassionate boundaries.') }}
    </p>

    <!-- The Buddha's Famous Simile of the Meal (Akkosa Sutta, SN 7.2) -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«កាលណាអ្នកឯងជេរប្រទេច ត្មះតិះដៀលយើងដែលមិនជេរតប យើងមិនទទួលយកពាក្យនោះឡើយ ពាក្យទាំងអស់នោះរមែងត្រឡប់ទៅអ្នកវិញ ដូចជាភ្ញៀវមិនទទួលទានអាហារដែលម្ចាស់ផ្ទះរៀបចំ អាហារនោះរមែងជារបស់ម្ចាស់ផ្ទះដដែល។»', '"When you revile me who does not revile, when you insult me who does not insult, I do not accept it from you. It remains with you alone, just as uneaten food prepared for a guest returns to the host." — Akkosa Sutta (SN 7.2)') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— អក្កោសសូត្រ សំយុត្តនិកាយ ព្រាហ្មណសំយុត្ត', '— Akkosa Sutta, Saṃyutta Nikāya') }}
      </p>
    </div>

    <!-- 5 Toxic Coworker Archetypes & Buddhist Antidotes -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🛡️</span>
        <span>{{ t('យុទ្ធសាស្ត្រទប់ទល់មនុស្សពុល ៥ ប្រភេទ នៅកន្លែងធ្វើការ', '5 Toxic Archetypes & Buddhist Antidotes') }}</span>
      </h3>

      <div
        v-for="item in archetypes"
        :key="item.id"
        class="card-paper p-5 rounded-xl border flex flex-col justify-between"
      >
        <div>
          <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
            <div class="flex items-center gap-2.5">
              <span class="w-7 h-7 rounded-full bg-rose-500/20 text-rose-700 dark:text-rose-300 flex items-center justify-center text-xs font-mono font-bold">
                {{ item.num }}
              </span>
              <div>
                <h4 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
                  {{ t(item.titleKm, item.titleEn) }}
                </h4>
                <p class="text-[11px] font-mono text-stone-500">{{ item.tag }}</p>
              </div>
            </div>
            <span class="text-2xl">{{ item.icon }}</span>
          </div>

          <!-- Behavior -->
          <div class="mt-3 text-xs sm:text-sm">
            <strong class="text-rose-600 dark:text-rose-400 font-bold block mb-1">
              ⚠️ {{ t('ចរិតលក្ខណៈ ៖', 'Typical Behavior:') }}
            </strong>
            <p class="text-stone-600 dark:text-stone-300 leading-relaxed">{{ t(item.behaviorKm, item.behaviorEn) }}</p>
          </div>
        </div>

        <!-- Strategy -->
        <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
          <div class="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <strong class="font-bold text-emerald-700 dark:text-emerald-300 block mb-1">
              🧘 {{ t('យុទ្ធសាស្ត្រដោះស្រាយតាមធម៌ ៖', 'Buddhist Psychological Shield:') }}
            </strong>
            <p class="text-stone-700 dark:text-stone-200 leading-relaxed">{{ t(item.strategyKm, item.strategyEn) }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 4 Mindful Micro-Practices at the Desk -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>⏰</span>
        <span>{{ t('លំហាត់ចម្រើនសតិ ៤ យ៉ាង នៅតុធ្វើការ', '4 Desk Mindfulness Micro-Practices') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('មិនចាំបាច់ទៅដល់ព្រៃស្ងាត់ទេ អ្នកអាចហ្វឹកហាត់ចិត្តបានរាល់ម៉ោងនៅកន្លែងធ្វើការ ៖', 'You do not need a monastery to cultivate peace. Practice these right at your desk:') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs">
        <div class="p-3.5 rounded-xl border bg-amber-500/5 border-amber-500/20">
          <strong class="font-bold text-amber-700 dark:text-amber-300 block mb-1">១. ដកដង្ហើម ៣ ដង មុនឆ្លើយ Email/សារ</strong>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
            {{ t('ពេលឃើញសារខឹងសម្បារ កុំតបភ្លាម! ដកដង្ហើមវែងៗ ៣ ដង ឱ្យអារម្មណ៍ត្រជាក់សិន ចាំវាយអក្សរឆ្លើយតប។', 'When receiving an infuriating email, pause. Take 3 deep breaths to let cortisol drop before typing.') }}
          </p>
        </div>
        <div class="p-3.5 rounded-xl border bg-emerald-500/5 border-emerald-500/20">
          <strong class="font-bold text-emerald-700 dark:text-emerald-300 block mb-1">២. សតិលើកែវទឹក ឬការដើរទៅបន្ទប់ទឹក</strong>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
            {{ t('ពេលក្រោកដើរទៅបន្ទប់ទឹក ឬលើកកែវទឹកញ៉ាំ ផ្ចង់ស្មារតីលើជំហានជើង និងការលេបទឹក មិនគិតរឿងការងារ។', 'Use coffee refills or restroom walks as walking meditation—feel feet contacting the floor.') }}
          </p>
        </div>
        <div class="p-3.5 rounded-xl border bg-sky-500/5 border-sky-500/20">
          <strong class="font-bold text-sky-700 dark:text-sky-300 block mb-1">៣. ផ្តោតលើការងារម្តងមួយ (Monotasking)</strong>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
            {{ t('បិទផ្ទាំងកុំព្យូទ័រដែលមិនចាំបាច់ ធ្វើការងារមួយឱ្យចប់សិន ទើបប្តូរទៅមួយទៀត ចិត្តនឹងមិនហត់នឿយ។', 'Close redundant browser tabs. Anchor full attention to one task until completion.') }}
          </p>
        </div>
        <div class="p-3.5 rounded-xl border bg-purple-500/5 border-purple-500/20">
          <strong class="font-bold text-purple-700 dark:text-purple-300 block mb-1">៤. ផ្សាយមេត្តាស្ងាត់ៗដល់មិត្តរួមការងារពិបាក</strong>
          <p class="text-stone-600 dark:text-stone-400 leading-relaxed">
            {{ t('ពេលឃើញអ្នកណាម្នាក់ធ្វើឫកពារមិនសមរម្យ គិតក្នុងចិត្តថា «គេប្រហែលជាកំពុងមានទុក្ខផ្ទាល់ខ្លួនខ្លាំង សូមឱ្យគេបានស្ងប់»។', 'Mentally send goodwill to an agitated boss: "They are under heavy stress; may they find peace."') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const archetypes = [
  {
    id: 1,
    num: '១',
    titleKm: 'អ្នកចូលចិត្តនិយាយដើម & ចាក់រុក (The Office Gossip)',
    titleEn: 'The Office Gossip & Instigator',
    tag: 'វចីទុច្ចរិត — ពិសាបុណ្យ',
    icon: '🐍',
    behaviorKm: 'តែងតែដើរប្រាប់រឿងអាក្រក់របស់អ្នកនេះប្រាប់អ្នកនោះ បំបែកបំបាក់សាមគ្គីភាព និងបង្កើតបរិយាកាសមិនទុកចិត្តគ្នាក្នុងក្រុម។',
    behaviorEn: 'Constantly spreads rumors, divides alliances, pries into private lives, and stokes factional distrust.',
    strategyKm: 'អនុវត្ត «សិល្បៈនៃការនៅស្ងៀម» (អរិយតុណ្ហីភាវ) ៖ កុំចូលរួមជជែក កុំបន្ថែមគំនិត បើគេចាប់ផ្តើមនិយាយដើមអ្នកដទៃ ចូរផ្លាស់ប្តូរប្រធានបទមករឿងការងារវិញ ឬសុំខ្លួនទៅធ្វើការងារ។ ភ្លើងដែលគ្មានអុស វានឹងរលត់ដោយឯកឯង។',
    strategyEn: 'Practice "Noble Silence". Never validate or repeat gossip. Politely redirect conversation back to project deliverables. A fire starved of firewood naturally dies out.',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'អ្នកលួចស្នាដៃ & ទម្លាក់កំហុស (The Credit Stealer)',
    titleEn: 'The Credit Stealer & Blame Shifter',
    tag: 'អទិន្នាទាន — កិលេសលោភៈ',
    icon: '🎭',
    behaviorKm: 'ពេលការងារជោគជ័យ ចេញមុខទទួលការសរសើរតែម្នាក់ឯង ប៉ុន្តែពេលមានកំហុស រកវិធីទម្លាក់កំហុសឱ្យសមាជិកផ្សេងក្នុងក្រុម។',
    behaviorEn: 'Absorbs praise for team successes while eagerly pointing fingers and scapegoating colleagues when issues emerge.',
    strategyKm: 'អនុវត្ត «សច្ចៈ & ការកត់ត្រាច្បាស់លាស់» ៖ ធ្វើការប្រាស្រ័យទាក់ទងតាម Email ឬកំណត់ហេតុប្រជុំដែលមានភស្តុតាងច្បាស់លាស់។ តម្កល់ចិត្តក្នុងឧបេក្ខា កុំតបតដោយកំហឹង តែបង្ហាញការពិតដោយតួលេខ និងឯកសារជាក់ស្តែង។',
    strategyEn: 'Rely on transparent documentation and written summaries. Keep calm, speak purely from objective logs and emails, and let factual reality refute misrepresentation.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'អ្នកចូលចិត្តបន្ទាបបន្ថោក & ជាន់ពន្លិច (The Belittler)',
    titleEn: 'The Constant Critic & Micromanager',
    tag: 'មានៈ & ទោសាគតិ',
    icon: '🔨',
    behaviorKm: 'ចូលចិត្តរិះគន់ដៀមដាម មើលងាយសមត្ថភាព និយាយបំផ្លាញទំនុកចិត្តរបស់អ្នកដទៃ ដើម្បីលើកកម្ពស់អំនួតរបស់ខ្លួនឯង។',
    behaviorEn: 'Undermines confidence with condescending sarcasm, dismissive remarks, and relentless fault-finding to inflate their own fragile ego.',
    strategyKm: 'អនុវត្ត «ឧបមាម្ហូបក្នុងអក្កោសសូត្រ» ៖ ពាក្យរិះគន់អាក្រក់របស់គេប្រៀបដូចជាកាដូពុល បើយើងមិនទទួលយកទេ ពិសនោះនៅជាប់នឹងដៃគេដដែល។ ញែកយកតែចំណុចណាដែលមានប្រយោជន៍មកកែលម្អ រីឯពាក្យមើលងាយ ចូរចាត់ទុកដូចជាខ្យល់បក់កាត់ស្លឹកឈើ។',
    strategyEn: 'Apply the Akkosa Sutta meal simile: Their insult is unaccepted poison that stays with them. Extract only actionable lessons to improve; let emotional disdain blow away like wind through leaves.',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'អ្នកកេងចំណេញ & ទម្លាក់ការងារ (The Slacker Free-rider)',
    titleEn: 'The Chronic Slacker & Work Evader',
    tag: 'កោសជ្ជៈ — សេចក្តីខ្ជិល',
    icon: '🦥',
    behaviorKm: 'គេចវេះពីការងារពិបាក ធ្វើពុតជារវល់ តែតាមពិតគ្មានលទ្ធផល ហើយតែងពឹងពាក់អ្នកដទៃឱ្យធ្វើជំនួសរហូតដល់ក្លាយជាទម្លាប់។',
    behaviorEn: 'Master of looking busy while dodging difficult tasks, leaving conscientious teammates to shoulder their burden.',
    strategyKm: 'អនុវត្ត «ព្រំដែនច្បាស់លាស់ & ការបដិសេធប្រកបដោយមេត្តា» ៖ កំណត់ទំនួលខុសត្រូវការងារឱ្យដាច់ស្រឡះតាំងពីដំបូង។ រៀននិយាយពាក្យថា «ទេ» ដោយសុភាព តែម៉ឺងម៉ាត់ ដើម្បីកុំឱ្យគេយកប្រៀបលើភាពសប្បុរសរបស់អ្នក។',
    strategyEn: 'Establish explicit boundaries and compassionate refusal. Delineate deliverables clearly upfront. Learn to say "no" graciously yet firmly to prevent chronic exploitation.',
  },
  {
    id: 5,
    num: '៥',
    titleKm: 'អ្នកចង់តែឈ្នះគ្រប់រឿង (The Aggressive Fighter)',
    titleEn: 'The Aggressive Competitor',
    tag: 'ទោសៈ & វិវាទធម៌',
    icon: '🥊',
    behaviorKm: 'ចូលចិត្តបង្កើតជម្លោះ និយាយតម្លើងសំឡេង មិនព្រមស្តាប់យោបល់អ្នកណាឡើយ និងចាត់ទុកមិត្តរួមការងារជាសត្រូវដែលត្រូវតែយកឈ្នះ។',
    behaviorEn: 'Turns every meeting into an arena, raises voice, interrupts aggressively, viewing colleagues as rivals to defeat.',
    strategyKm: 'អនុវត្ត «ខន្តី & ការមិនលោតចូលភ្លើង» ៖ កុំប្រកួតប្រជែងខាងអារម្មណ៍ជាមួយគេ។ រង់ចាំឱ្យគេបញ្ចេញកំហឹងចប់សិន ចាំនិយាយដោយសំឡេងស្មើ និងផ្អែកលើគោលដៅរួមនៃក្រុមហ៊ុន។ ភាពស្ងប់ស្ងៀមរបស់អ្នក គឺជាអាវុធដ៏ខ្លាំងបំផុត។',
    strategyEn: 'Exercise patience (Khantī). Do not match aggression with heat. Wait until the outburst finishes, then respond in measured tones focusing on shared goals. Your calm defuses their charge.',
  },
]
</script>
