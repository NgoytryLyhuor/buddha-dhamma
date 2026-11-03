<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៦៦ — សង្គហវត្ថុ ៤ ប្រការ', 'GATHA 66 — 4 BASES OF SOLIDARITY') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('សង្គហវត្ថុ ៤ ៖ សិល្បៈចងចិត្តមនុស្ស & កសាងសាមគ្គីភាពក្នុងសង្គម', 'The 4 Bases of Social Harmony (Saṅgahavatthu)') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('សង្គហវត្ថុ ៤ ប្រការ គឺជាធម៌សម្រាប់សង្គ្រោះ និងចងក្រងទឹកចិត្តមនុស្សក្នុងសង្គម ឱ្យរស់នៅជាមួយគ្នាដោយក្តីស្រឡាញ់ ភាពសុខដុមរមនា និងសាមគ្គីភាពរឹងមាំ។ នៅក្នុងសង្គហសូត្រ (AN 4.32) ព្រះសម្មាសម្ពុទ្ធទ្រង់ត្រាស់ប្រៀបធៀបសង្គហវត្ថុទាំង ៤ នេះ ទៅនឹង «គន្លឹះអ័ក្សកង់រទេះ» ដែលទ្រទ្រង់កង់រទេះមិនឱ្យរបូតចេញពេលរទេះកំពុងរត់។ ប្រសិនបើគ្មានសង្គហវត្ថុទាំង ៤ នេះទេ មាតាបិតានឹងមិនទទួលបានការគោរពពីកូន សង្គមនឹងបែកបាក់ ហើយមនុស្សនឹងរស់នៅប្រកបដោយភាពអាត្មានិយម និងការឈ្លោះប្រកែកគ្នាជានិច្ច។', 'Saṅgahavatthu constitutes the four foundational principles of interpersonal bonding and social solidarity taught by the Buddha to unify families, workplaces, and nations. In the Saṅgaha Sutta (AN 4.32), the Buddha compared these four qualities to the linchpin that secures the wheel of a moving chariot. Without this linchpin, the wheel flies off and the chariot crashes. Likewise, without these four virtues, neither parents receive respect nor society achieves harmony.') }}
    </p>

    <!-- Pali Gatha Box -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ទានញ្ច បេយ្យវជ្ជញ្ច អត្ថចរិយា ច យា ឥធ, សមានត្តតា ច ធម្មេសុ តត្ថ តត្ថ យថារហំ។ ឯតេ ខោ សង្គហា លោកេ រថស្សាណីវ យាយតោ។»', '"Giving, kindly speech, beneficial conduct, and impartiality in worldly life—these four bonds of fellowship hold the world together, just as the linchpin holds the rolling chariot." — Aṅguttara Nikāya 4.32') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— សង្គហសូត្រ អង្គុត្តរនិកាយ ចតុក្កនិបាត', '— Saṅgaha Sutta, Aṅguttara Nikāya') }}
      </p>
    </div>

    <!-- 4 Bases Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🤝</span>
        <span>{{ t('សសរស្តម្ភទាំង ៤ នៃសង្គហវត្ថុ', 'The 4 Pillars of Fellowship') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="item in bases"
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
                    {{ t(item.titleKm, item.titleEn) }}
                  </h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ item.pali }}</p>
                </div>
              </div>
              <span class="text-2xl">{{ item.icon }}</span>
            </div>

            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(item.descKm, item.descEn) }}
            </p>

            <!-- Examples in daily life -->
            <div class="mt-3 p-3 rounded-lg bg-stone-500/5 border border-stone-500/15 text-xs">
              <strong class="text-stone-700 dark:text-stone-300 block mb-1 font-bold">
                🌱 {{ t('ការអនុវត្តជាក់ស្តែងក្នុងជីវិត ៖', 'Practical Application:') }}
              </strong>
              <p class="text-stone-600 dark:text-stone-400 leading-relaxed">{{ t(item.actionKm, item.actionEn) }}</p>
            </div>
          </div>

          <!-- Workplace & Leadership fruit -->
          <div class="mt-3 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <span class="font-bold text-amber-700 dark:text-amber-300 block mb-0.5">
                👑 {{ t('ឥទ្ធិពលចំពោះការដឹកនាំ & ការងារ ៖', 'Leadership & Teamwork Value:') }}
              </span>
              <span class="text-stone-600 dark:text-stone-300">{{ t(item.leadershipKm, item.leadershipEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Comparative Table / Modern Psychology Connection -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>💡</span>
        <span>{{ t('សង្គហវត្ថុ និងចិត្តវិទ្យានៃការកសាងទំនាក់ទំនង', 'Psychological Synergy of the 4 Bonds') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('សង្គហវត្ថុ ៤ មិនត្រឹមតែជាទ្រឹស្តីសាសនាទេ ប៉ុន្តែជាក្បួនចិត្តវិទ្យាទំនាក់ទំនងដ៏អស្ចារ្យ ៖ ទាន (ទាក់ទាញដោយការបើកចិត្ត), បិយវាចា (បង្កើតទំនុកចិត្តដោយសំដីស្មោះ), អត្ថចរិយា (បង្កើតតម្លៃដោយការជួយជ្រោមជ្រែង), និង សមានត្តតា (បង្កើតភាពស្មោះត្រង់ដោយការមិនប្រកាន់ខ្លួន)។ បើអ្នកដឹកនាំ ឬសមាជិកគ្រួសារអនុវត្តបាន ទាំង ៤ នេះ នឹងគ្មាននរណាម្នាក់ចង់ចាកចេញពីអ្នកឡើយ។', 'The four bases provide a complete emotional matrix: Giving creates openness, kindly words cultivate psychological safety, service demonstrates concrete commitment, and equality fosters enduring loyalty. When mastered, harmony naturally blossoms.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const bases = [
  {
    id: 1,
    num: '១',
    titleKm: 'ទាន (ការចែករំលែក & ចិត្តទូលាយ)',
    titleEn: 'Giving & Generosity (Dāna)',
    pali: 'Dāna — ការលះបង់ ចែករំលែកទ្រព្យ ចំណេះដឹង និងការអភ័យទោស',
    icon: '🎁',
    descKm: 'ការចែករំលែកដោយសេចក្តីស្មោះត្រង់ មិនកំណាញ់ស្វិតស្វាញ។ មិនមែនសំដៅតែលើលុយកាក់ទេ តែរាប់បញ្ចូលទាំងការចែករំលែកចំណេះដឹង (ធម្មទាន), ការផ្តល់ស្នាមញញឹម ការលើកទឹកចិត្ត និងការអភ័យទោស (អភយទាន)។',
    descEn: 'Sharing generously without stinginess. Encompasses material aid (Āmisadāna), sharing wisdom and knowledge (Dhammadāna), and extending unconditional forgiveness (Abhayadāna).',
    actionKm: 'ចែករំលែកអាហារ ជួយឧបត្ថម្ភអ្នកខ្វះខាត បង្រៀនជំនាញដល់មិត្តរួមការងារ និងមិនគុំកួនពេលគេធ្វើខុស។',
    actionEn: 'Sharing food, supporting teammates, freely mentoring newcomers, and choosing forgiveness over grudge.',
    leadershipKm: 'មេដឹកនាំដែលមានចិត្តទូលាយ ចែករំលែកផលប្រយោជន៍ និងការកោតសរសើរ តែងតែទទួលបានការស្រឡាញ់ស្មោះពីកូនចៅ។',
    leadershipEn: 'A leader who shares credit, resources, and bonuses commands profound loyalty and devotion from their team.',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'បិយវាចា (ពាក្យសំដីផ្អែមល្ហែម & ស្ថាបនា)',
    titleEn: 'Kindly & Constructive Speech (Piyavācā)',
    pali: 'Piyavācā — វាចាគួរជាទីស្រឡាញ់ ពិត ពីរោះ មិនប្រមាថ',
    icon: '🗣️',
    descKm: 'ការនិយាយពាក្យពិត មានប្រយោជន៍ ពិរោះពិសា ចេញពីទឹកចិត្តមេត្តាពិតប្រាកដ។ មិននិយាយដើម មិនជេរប្រទេច មិននិយាយមើលងាយ ឬពាក្យផ្លែផ្កាដែលធ្វើឱ្យអ្នកដទៃឈឺចាប់។',
    descEn: 'Speaking truthful, benevolent, pleasant words born of genuine goodwill. Avoiding gossip, sarcasm, insults, and harsh criticisms that demoralize the spirit.',
    actionKm: 'ប្រើពាក្យអរគុណ សុំទោស និយាយលើកទឹកចិត្តអ្នកដទៃពេលគេបាក់ទឹកចិត្ត និងផ្តល់យោបល់កែលម្អដោយទន់ភ្លន់។',
    actionEn: 'Using genuine thank-yous, graceful apologies, praising effort, and framing critiques constructively with gentleness.',
    leadershipKm: 'សំដីទន់ភ្លន់តែម៉ឺងម៉ាត់ អាចរំលាយកំហឹងក្នុងក្រុមការងារ និងជំរុញទឹកចិត្តមនុស្សឱ្យខិតខំទ្វេដងដោយក្តីរីករាយ។',
    leadershipEn: 'Gentle yet principled communication defuses friction, resolves misunderstandings, and inspires voluntary excellence.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'អត្ថចរិយា (ការធ្វើអំពើជាប្រយោជន៍)',
    titleEn: 'Beneficial Conduct & Service (Atthacariyā)',
    pali: 'Atthacariyā — ការប្រព្រឹត្តអំពើដែលមានផលប្រយោជន៍ដល់អ្នកដទៃ',
    icon: '🛠️',
    descKm: 'ការយកកម្លាំងកាយ ចិត្ត ឬចំណេះដឹង ទៅជួយសម្រាលទុក្ខលំបាក និងជួយជ្រោមជ្រែងអ្នកដទៃឱ្យមានសេចក្តីចម្រើន ដោយមិនគិតតែពីផលប្រយោជន៍ផ្ទាល់ខ្លួន។',
    descEn: 'Devoting time, energy, and expertise to assist others, solving mutual problems, and promoting community welfare selflessly.',
    actionKm: 'ជួយកិច្ចការងារស្ម័គ្រចិត្ត ជួយការងារមិត្តភក្តិពេលគេជួបការលំបាក និងចូលរួមថែរក្សាបរិស្ថានរួម។',
    actionEn: 'Volunteering in communal projects, lending a hand to burdened colleagues, and safeguarding public spaces.',
    leadershipKm: 'មេដឹកនាំដែលហ៊ានលះបង់ ចុះជួយកូនចៅផ្ទាល់ដៃ មិនមែនគ្រាន់តែបញ្ជា តែងជាទីពឹងដ៏កក់ក្តៅរបស់ក្រុម។',
    leadershipEn: 'Servant leadership: Rolling up sleeves to support team challenges on the ground creates deep mutual trust.',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'សមានត្តតា (ការតម្កល់ខ្លួនឱ្យស្មើ & មិនប្រកាន់)',
    titleEn: 'Impartiality & Equality (Samānattatā)',
    pali: 'Samānattatā — ការមានចិត្តស្មើ ចូលរួមសុខទុក្ខ និងស្មោះត្រង់',
    icon: '⚖️',
    descKm: 'ការប្រព្រឹត្តចំពោះអ្នកដទៃដោយស្មើភាព មិនរើសអើងវណ្ណៈ មិនវាយឫកលើកតម្កើងខ្លួន មិនផ្លាស់ប្តូរឫកពារពេលមានលាភយស និងរួមសុខរួមទុក្ខជាមួយគ្នា។',
    descEn: 'Treating all individuals with consistent dignity and respect regardless of rank or wealth; remaining humble and sharing both hardships and joy equally.',
    actionKm: 'គោរពអ្នកសម្អាត អ្នកយាមទ្វារ ដូចគោរពថ្នាក់ដឹកនាំ មិនប្រកាន់ខ្លួន និងនៅក្បែរមិត្តភក្តិទាំងពេលសប្បាយនិងពេលទុក្ខ។',
    actionEn: 'Treating janitors and executives with equal warmth, avoiding haughtiness, and standing faithfully by friends in sorrow.',
    leadershipKm: 'មេដឹកនាំដែលយុត្តិធម៌ មិនលម្អៀង មិនបង្កើតបក្ខពួក តែងទទួលបានការគោរពប្រតិបត្តិពិតប្រាកដចេញពីបេះដូង។',
    leadershipEn: 'A leader free of favoritism and arrogance creates an inclusive culture where every contributor feels valued.',
  },
]
</script>
