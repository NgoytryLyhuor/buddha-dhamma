<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៥០ — ពិធីបុណ្យខ្មែរ & ក្បួនប្រគេនទាន', 'GATHA 50 — KHMER CEREMONIES & OFFERING PROTOCOLS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ពិធីបុណ្យខ្មែរ & ក្បួនប្រគេនទាន', 'Khmer Buddhist Festivals & Proper Offering Protocols') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ពិធីបុណ្យប្រពៃណីពុទ្ធសាសនាខ្មែរ គឺជាមរតកវប្បធម៌ដ៏ពិសិដ្ឋដែលផ្សារភ្ជាប់សេចក្តីជំនឿ កតញ្ញូធម៌ មេត្តាធម៌ និងការសាមគ្គីភាពក្នុងសង្គម។ ទន្ទឹមនឹងការចូលរួមបុណ្យទាន ការយល់ដឹងអំពី «ក្បួនប្រគេនទានតាមព្រះវិន័យ» គឺជាកត្តាសំខាន់បំផុត ដើម្បីឱ្យទាយកទាយិកាធ្វើបុណ្យបានបុណ្យបរិសុទ្ធ មិនបង្កទោសអាបត្តិដល់ព្រះសង្ឃ និងទទួលបានអានិសង្សពេញលេញ។', 'Khmer Buddhist ceremonies are sacred cultural milestones weaving together spiritual devotion, filial gratitude, communal solidarity, and generosity. Alongside participating in these festivals, understanding the vinaya rules for offerings (Dāna Vinaya) ensures that our generosity yields pure merit, protects the monastic order from disciplinary infractions, and bears boundless spiritual fruit.') }}
    </p>

    <!-- Main Navigation Tabs: Festivals vs Offering Vinaya -->
    <div class="flex items-center gap-2 mt-8">
      <button
        type="button"
        @click="activeSection = 'festivals'"
        class="h-10 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center gap-2"
        :style="activeSection === 'festivals'
          ? { background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' }
          : { background: 'var(--bg-card)', color: 'var(--ink-muted)', borderColor: 'var(--border)' }"
      >
        <span>🏮</span>
        <span>{{ t('ពិធីបុណ្យធំៗទាំង ៦', '6 Great Festivals') }}</span>
      </button>

      <button
        type="button"
        @click="activeSection = 'protocols'"
        class="h-10 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center gap-2"
        :style="activeSection === 'protocols'
          ? { background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' }
          : { background: 'var(--bg-card)', color: 'var(--ink-muted)', borderColor: 'var(--border)' }"
      >
        <span>🙏</span>
        <span>{{ t('ក្បួនប្រគេនទានតាមវិន័យ', 'Offering Protocols (Vinaya)') }}</span>
      </button>
    </div>

    <!-- SECTION 1: 6 GREAT FESTIVALS -->
    <div v-if="activeSection === 'festivals'" class="mt-6 space-y-5">
      <div
        v-for="(f, idx) in festivals"
        :key="f.id"
        class="card-paper p-6 md:p-8 rounded-xl border border-l-4 transition-all"
        :style="{ borderLeftColor: f.color }"
      >
        <div class="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <span class="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold text-white shadow-xs" :style="{ background: f.color }">
                {{ f.season }}
              </span>
              <span class="text-xs font-mono font-bold" :style="{ color: f.color }">
                {{ f.timing }}
              </span>
            </div>
            <h3 class="font-display text-xl sm:text-2xl font-bold mt-2" :style="{ color: 'var(--ink)' }">
              {{ t(f.km, f.en) }}
            </h3>
            <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
              {{ t(f.subtitleKm, f.subtitleEn) }}
            </p>
          </div>
          <span class="text-3xl sm:text-4xl">{{ f.icon }}</span>
        </div>

        <!-- Description -->
        <p class="text-xs sm:text-sm mt-4 leading-loose" :style="{ color: 'var(--ink-soft)' }">
          {{ t(f.descKm, f.descEn) }}
        </p>

        <!-- Highlights & Benefits -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-5">
          <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5" :style="{ color: f.color }">
              <span>✨</span>
              <span>{{ t('អត្ថន័យ និងអានិសង្សសំខាន់', 'Key Significance & Benefits') }}</span>
            </h4>
            <ul class="space-y-1.5 text-xs" :style="{ color: 'var(--ink-soft)' }">
              <li v-for="(b, i) in f.benefits" :key="i" class="flex items-start gap-1.5">
                <span class="text-amber-500 font-bold">•</span>
                <span>{{ t(b.km, b.en) }}</span>
              </li>
            </ul>
          </div>

          <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <h4 class="font-bold text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5" :style="{ color: 'var(--accent)' }">
              <span>💡</span>
              <span>{{ t('ការប្រតិបត្តិឱ្យត្រូវគន្លងធម៌', 'Right Practice Guidelines') }}</span>
            </h4>
            <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(f.practiceKm, f.practiceEn) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION 2: OFFERING PROTOCOLS (VINAYA) -->
    <div v-else class="mt-6 space-y-6">
      <!-- The 3 States of Mind for Pure Merit -->
      <div class="card-paper p-6 md:p-8 rounded-xl border-l-4" :style="{ borderLeftColor: 'var(--accent)' }">
        <p class="chapter-label">{{ t('ចេតនា ៣ កាល', 'THE THREEFOLD VOLITION') }}</p>
        <h3 class="font-display text-xl font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
          {{ t('ចេតនា ៣ កាល ៖ គន្លឹះដើម្បីឱ្យទានមានផលធំ', 'The 3 Phases of Volition for Supreme Fruit') }}
        </h3>
        <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ព្រះសម្មាសម្ពុទ្ធសម្ដែងថា ទានដែលផ្តល់ផលអស្ចារ្យ ត្រូវប្រកបដោយចិត្តជ្រះថ្លាក្នុងកាលទាំង ៣ ៖', 'Generosity yields limitless merit when the donor’s mind is pure and joyful across all three stages:') }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-5">
          <div class="p-4 rounded-xl border text-center" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <span class="w-8 h-8 rounded-full bg-amber-500/15 text-amber-500 font-bold flex items-center justify-center mx-auto mb-2 text-sm">១</span>
            <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">{{ t('បុព្វចេតនា', 'Pubba-cetanā') }}</h4>
            <p class="text-xs mt-1.5 text-stone-500 leading-relaxed">
              {{ t('ចិត្តរីករាយជ្រះថ្លាមុនពេលធ្វើទាន គ្មានការបង្ខិតបង្ខំ ឬអាក់អន់ចិត្តឡើយ។', 'Joyful and willing anticipation prior to offering.') }}
            </p>
          </div>

          <div class="p-4 rounded-xl border text-center" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <span class="w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-500 font-bold flex items-center justify-center mx-auto mb-2 text-sm">២</span>
            <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">{{ t('មុញ្ចនចេតនា', 'Muñcana-cetanā') }}</h4>
            <p class="text-xs mt-1.5 text-stone-500 leading-relaxed">
              {{ t('ចិត្តជ្រះថ្លាបរិសុទ្ធក្នុងខណៈកំពុងលើកប្រគេន ដោយការគោរពបំផុត។', 'Serene, respectful focus at the exact moment of giving.') }}
            </p>
          </div>

          <div class="p-4 rounded-xl border text-center" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <span class="w-8 h-8 rounded-full bg-sky-500/15 text-sky-500 font-bold flex items-center justify-center mx-auto mb-2 text-sm">៣</span>
            <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">{{ t('អបរចេតនា', 'Apara-cetanā') }}</h4>
            <p class="text-xs mt-1.5 text-stone-500 leading-relaxed">
              {{ t('ចិត្តរីករាយរឭកឃើញទានជានិច្ច គ្មានការស្តាយក្រោយ ឬរអ៊ូរទាំឡើយ។', 'Enduring delight afterward without a single regret.') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Money & Monastic Vinaya: Kappiya vs Akappiya -->
      <div class="card-paper p-6 md:p-8 rounded-xl border-l-4" :style="{ borderLeftColor: '#ef4444' }">
        <div class="flex items-center gap-2">
          <span class="text-rose-500 text-lg">⚠️</span>
          <p class="chapter-label text-rose-500 m-0">{{ t('វិន័យសង្ឃស្តីពីលុយកាក់', 'MONASTIC VINAYA ON MONEY') }}</p>
        </div>
        <h3 class="font-display text-xl font-bold mt-2" :style="{ color: 'var(--ink)' }">
          {{ t('របៀបប្រគេនបច្ច័យ (លុយកាក់) ឱ្យត្រូវវិន័យ', 'How to Offer Funds Without Causing Vinaya Infractions') }}
        </h3>
        <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ក្នុងព្រះវិន័យសិក្ខាបទ «រូបិយសិក្ខាបទ» ព្រះភិក្ខុសង្ឃមិនអាចកាន់ កាត់ ឬទទួលយកប្រាក់កាសផ្ទាល់ដៃបានឡើយ (ជាអាបត្តិនិស្សគ្គិយបាចិត្តិយ)។ វិធីប្រគេនត្រឹមត្រូវ ៖', 'Under the Rūpiya Sikkhāpada, monastics cannot accept, hold, or store physical currency directly. Correct procedure:') }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div class="p-4 rounded-xl border bg-rose-500/5 border-rose-500/20">
            <h4 class="font-bold text-xs sm:text-sm text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
              <span>❌</span>
              <span>{{ t('ទម្លាប់ខុសដែលគួរជៀសវាង', 'Improper Practices to Avoid') }}</span>
            </h4>
            <ul class="space-y-2 mt-2.5 text-xs text-stone-600 dark:text-stone-300">
              <li>• ហុចក្រដាសប្រាក់ ឬស្រោមសំបុត្រមានលុយដាក់លើដៃព្រះសង្ឃផ្ទាល់។</li>
              <li>• ដាក់លុយក្នុងបាត្រ ឬលើចីវរព្រះសង្ឃ។</li>
              <li>• និយាយថា «ខ្ញុំប្រគេនលុយនេះជូនលោកម្ចាស់»។</li>
            </ul>
          </div>

          <div class="p-4 rounded-xl border bg-emerald-500/5 border-emerald-500/20">
            <h4 class="font-bold text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <span>✓</span>
              <span>{{ t('វិធីប្រគេនត្រឹមត្រូវតាមពុទ្ធវចនៈ', 'Right Canonical Protocol') }}</span>
            </h4>
            <ul class="space-y-2 mt-2.5 text-xs text-stone-600 dark:text-stone-300">
              <li>• ប្រគល់ប្រាក់ឱ្យ <strong>«កប្បិយការក»</strong> (អ្នកទំនុកបម្រុងវត្ត ឬគណៈកម្មការ)។</li>
              <li>• សរសេរ <strong>«បច្ច័យប័ត្រ»</strong> (ក្រដាសបញ្ជាក់ថាបានតម្កល់ប្រាក់... ដើម្បីជាបច្ច័យ ៤) ប្រគេនព្រះសង្ឃ។</li>
              <li>• វារចារប្រគេនថា ៖ <em>«ខ្ញុំករុណាបានតម្កល់បច្ច័យ... ទុកជាមួយកប្បិយការក បើព្រះតេជព្រះគុណត្រូវការបច្ច័យ ៤ ណាមួយ សូមនិមន្តទាមទារពីកប្បិយការកចុះ»</em>។</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 10 Forbidden Meats (Mamsa 10) -->
      <div class="card-paper p-6 md:p-8 rounded-xl border">
        <p class="chapter-label">{{ t('វិន័យចង្ហាន់', 'FOOD VINAYA') }}</p>
        <h3 class="font-display text-xl font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
          {{ t('សាច់ ១០ យ៉ាងដែលព្រះសង្ឃហាមឆាន់ដាច់ខាត', '10 Prohibited Meats in Theravāda Vinaya') }}
        </h3>
        <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ទាយកទាយិកាមិនត្រូវយកសាច់ទាំង ១០ ប្រភេទនេះមកធ្វើជាចង្ហាន់ប្រគេនព្រះសង្ឃឡើយ ៖', 'Lay devotees must never prepare or offer these 10 types of meat to the Sangha:') }}
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mt-4">
          <div v-for="m in forbiddenMeats" :key="m.pali" class="p-3 rounded-lg border text-center" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <span class="text-2xl">{{ m.icon }}</span>
            <p class="font-bold text-xs mt-1" :style="{ color: 'var(--ink)' }">{{ m.km }}</p>
            <p class="text-[10px] font-mono text-stone-500">{{ m.pali }}</p>
          </div>
        </div>

        <div class="mt-4 p-3.5 rounded-xl border bg-amber-500/5 border-amber-500/20 text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
          <strong>{{ t('សាច់ ៣ ប្រការដែលបរិសុទ្ធ (ត្រីកោដិបារិសុទ្ធសីល) ៖ ', '3 Conditions for Pure Meat : ') }}</strong>
          {{ t('ព្រះសង្ឃអាចឆាន់សាច់ធម្មតាបាន លុះត្រាតែ ៖ ១. មិនបានឃើញគេសម្លាប់ចំពោះខ្លួន, ២. មិនបានឮថាគេសម្លាប់ចំពោះខ្លួន, និង ៣. មិនមានការសង្ស័យថាគេសម្លាប់សត្វនោះដើម្បីធ្វើម្ហូបជូនខ្លួន។', 'Meat is allowable only when it is not seen, not heard, and not suspected to have been slaughtered specifically for the monastic.') }}
        </div>
      </div>

      <!-- Proper Offering Posture: Hattha-pasa -->
      <div class="card-paper p-6 md:p-8 rounded-xl border">
        <p class="chapter-label">{{ t('កិរិយាលើកប្រគេន', 'PHYSICAL OFFERING DEMEANOR') }}</p>
        <h3 class="font-display text-xl font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
          {{ t('ចម្ងាយហត្ថបាស & កាយវិការពេលប្រគេន', 'The Hattha-pāsa Distance & Proper Posture') }}
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-5">
          <div class="p-4 rounded-xl border text-center" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <span class="text-2xl">📏</span>
            <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t('ចម្ងាយហត្ថបាស (២ ចំអាម)', 'Hattha-pāsa Distance') }}</h4>
            <p class="text-xs mt-1.5 text-stone-500 leading-relaxed">
              {{ t('ចូលទៅជិតព្រះសង្ឃក្នុងចម្ងាយប្រមាណ ២ ចំអាម ឬកន្លះម៉ែត្រ មិនត្រូវឈរឆ្ងាយពេកឡើយ។', 'Position yourself within forearm distance (~2 spans) of the monk.') }}
            </p>
          </div>

          <div class="p-4 rounded-xl border text-center" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <span class="text-2xl">🤲</span>
            <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t('លើកប្រគេនដោយដៃទាំងពីរ', 'Hold with Both Hands') }}</h4>
            <p class="text-xs mt-1.5 text-stone-500 leading-relaxed">
              {{ t('លើកវត្ថុឡើងដោយដៃទាំងពីរដោយការគោរព មិនត្រូវរុញ ឬបោះវត្ថុទៅលើកម្រាលឡើយ។', 'Lift the offering respectfully with both hands; never slide or toss it.') }}
            </p>
          </div>

          <div class="p-4 rounded-xl border text-center" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
            <span class="text-2xl">✋</span>
            <h4 class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">{{ t('លែងដៃឱ្យដាច់ស្រឡះ', 'Release Completely') }}</h4>
            <p class="text-xs mt-1.5 text-stone-500 leading-relaxed">
              {{ t('ពេលព្រះសង្ឃចាប់កាន់វត្ថុហើយ ត្រូវលែងដៃឱ្យដាច់ និងមិនត្រូវប៉ះពាល់វត្ថុនោះវិញឡើយ។', 'Let go cleanly; once received, do not touch the food or vessel again.') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const activeSection = ref('festivals')

const forbiddenMeats = [
  { km: 'សាច់មនុស្ស', pali: 'Manussa', icon: '👤' },
  { km: 'សាច់ដំរី', pali: 'Hatthi', icon: '🐘' },
  { km: 'សាច់សេះ', pali: 'Assa', icon: '🐎' },
  { km: 'សាច់ឆ្កែ', pali: 'Sona', icon: '🐕' },
  { km: 'សាច់ពស់', pali: 'Ahi', icon: '🐍' },
  { km: 'សាច់តោ', pali: 'Sīha', icon: '🦁' },
  { km: 'សាច់ខ្លាធំ', pali: 'Vyaggha', icon: '🐅' },
  { km: 'សាច់ខ្លារខិន', pali: 'Dīpi', icon: '🐆' },
  { km: 'សាច់ខ្លាឃ្មុំ', pali: 'Accha', icon: '🐻' },
  { km: 'សាច់ឆ្កែព្រៃ', pali: 'Taraccha', icon: '🐺' }
]

const festivals = [
  {
    id: 'kathina',
    color: '#d97706',
    icon: '🪡',
    km: 'បុណ្យកឋិនទាន (កឋិនចីវរ)',
    en: 'Kathina Civara Festival',
    season: 'កាលទាន ១ ខែគត់',
    timing: '១ រោច ខែអស្សុជ ដល់ ១៥ កើត ខែកត្តិក',
    subtitleKm: 'កំពូលទានប្រចាំឆ្នាំដែលព្រះសម្មាសម្ពុទ្ធទ្រង់ពុទ្ធានុញ្ញាតដោយផ្ទាល់',
    subtitleEn: 'The supreme annual robe offering sanctioned directly by the Buddha',
    descKm: 'បុណ្យកឋិនទាន ជាកាលទានដ៏វិសេសវិសាលបំផុត ព្រោះក្នុងមួយឆ្នាំ វត្តនីមួយៗអាចទទួលកឋិនបានតែម្តងគត់ ហើយភិក្ខុដែលក្រាលគ្រងកឋិនបានត្រូវតែគង់ចាំវស្សាគ្រប់ ៣ ខែដោយមិនដាច់វស្សា។ ព្រះពុទ្ធទ្រង់អនុញ្ញាតឱ្យភិក្ខុសង្ឃក្រាលកឋិន ដើម្បីសម្រាលវិន័យមួយចំនួន ជួយឱ្យការស្វែងរកចីវរ និងការរស់នៅរបស់សង្ឃមានភាពងាយស្រួល។',
    descEn: 'Kathina is a unique time-bound offering where each temple can receive only one robe offering per year, given solely to monks who have observed the 3-month Rains Retreat without breach.',
    benefits: [
      { km: 'អានិសង្ស ៥ យ៉ាងរបស់សង្ឃ ៖ ត្រាច់ទៅណាឥតបាច់លាភិក្ខុផងគ្នា, មិនបាច់យកត្រៃចីវរគ្រប់, ឆាន់គណភោជនបាន...', en: '5 monastic privileges: traveling without notice, not carrying full robes, communal meals...' },
      { km: 'អានិសង្ស ៥ យ៉ាងរបស់ទាយក ៖ ជាមនុស្សមានរូបស្អាត សម្បុរភ្លឺថ្លា មានយសស័ក្តិខ្ពស់ មានទ្រព្យស្តុកស្តម្ភ...', en: '5 donor fruits: beauty, radiant complexion, great prestige, abundant wealth, quick insight.' }
    ],
    practiceKm: 'រៀបចំអង្គកឋិនទានដោយចិត្តស្អាតស្អំ មិនត្រូវប្រជែងអួតទ្រព្យសម្បត្តិឡើយ។ ចីវរដែលប្រគេនត្រូវស្អាត បរិសុទ្ធ ហើយការហែអង្គកឋិនត្រូវប្រព្រឹត្តទៅដោយសេចក្តីស្ងប់រម្ងាប់ និងសទ្ធាជ្រះថ្លា។',
    practiceEn: 'Offer Kathina with pure motivation rather than vanity. Robes must be spotless, and processions should reflect dignity, tranquility, and faith.'
  },
  {
    id: 'pchum-ben',
    color: '#0284c7',
    icon: '🍚',
    km: 'បុណ្យភ្ជុំបិណ្ឌ & កាន់បិណ្ឌ (១៥ ថ្ងៃ)',
    en: 'Pchum Ben & Kan Ben (Ancestors Day)',
    season: 'រដូវស្លឹកឈើជ្រុះ (១៥ ថ្ងៃ)',
    timing: '១ ដល់ ១៥ រោច ខែភទ្របទ',
    subtitleKm: 'ពិធីបុណ្យឧទ្ទិសកុសលដល់បុព្វការីជន និងញាតិទាំង ៧ សន្តាន',
    subtitleEn: 'Ceremony of merit transfer to deceased ancestors across 7 generations',
    descKm: 'បុណ្យភ្ជុំបិណ្ឌ ជាបុណ្យប្រពៃណីដ៏ធំបំផុតមួយរបស់ជាតិខ្មែរ ដែលប្រារព្ធឡើងក្នុងរដូវភ្លៀងធ្លាក់មេឃងងឹត។ ក្នុងគម្ពីរតិរោកុឌ្ឌសូត្រ ព្រះសម្មាសម្ពុទ្ធបានសម្ដែងថា ពួកប្រេតដែលឃ្លាន តែងរង់ចាំទទួលបុណ្យពីញាតិមិត្ត។ ទាយកទាយិកាបាននាំយកចង្ហាន់ និងទេយ្យទានមកប្រគេនព្រះសង្ឃក្នុងវត្ត រួចធ្វើកិច្ច «បង្សុកូល» ឧទ្ទិសបុណ្យឱ្យញាតិដែលបានចែកឋាន។',
    descEn: 'Observed over 15 days, Khmer Buddhists visit pagodas to offer alms and perform merit dedication (Pattidāna) to departed relatives based on the Tirokuḍḍa Sutta.',
    benefits: [
      { km: 'សងគុណមាតាបិតា និងបុព្វការីជនដែលចែកឋានទៅកាន់លោកខាងមុខ។', en: 'Fulfilling filial gratitude toward departed parents and ancestors.' },
      { km: 'សន្សំបុណ្យកុសលដ៏ធំធេង និងរំឭកដល់សេចក្តីស្លាប់ដែលមិនអាចជៀសផុត (មរណានុស្សតិ)។', en: 'Accumulating great merit while reflecting upon mortality (Maraṇānussati).' }
    ],
    practiceKm: 'ការបោះបាយបិណ្ឌ គួរធ្វើដោយសតិ និងស្មារតីជ្រះថ្លា មិនត្រូវបោះចោលខ្ជះខ្ជាយឡើយ។ ខ្លឹមសារពិតគឺការប្រគេនចង្ហាន់ដល់ព្រះសង្ឃដែលមានសីលបរិសុទ្ធ រួចឧទ្ទិសកុសលទៅទើបដល់ប្រេត។',
    practiceEn: 'Bay Ben offerings should be performed mindfully without wasteful scattering. True merit reaches petas when gifts are offered cleanly to virtuous monks and dedicated.'
  },
  {
    id: 'visakha',
    color: '#16a34a',
    icon: '🪷',
    km: 'បុណ្យវិសាខបូជា',
    en: 'Visākha Būjā Day',
    season: 'ទិវាពុទ្ធសាសនាអន្តរជាតិ',
    timing: '១៥ កើត ខែពិសាខ (ពេញបូណ៌មី)',
    subtitleKm: 'ទិវាអភិលក្ខិតសម័យ ៣ ព្រឹត្តិការណ៍ ៖ ប្រសូត, ត្រាស់ដឹង, និងបរិនិព្វាន',
    subtitleEn: 'The Triple Blessed Day: Birth, Enlightenment, and Parinibbāna of the Buddha',
    descKm: 'ទិវាវិសាខបូជា ជាទិវាដ៏ពិសិដ្ឋបំផុតក្នុងពិភពលោក ដែលត្រូវបានអង្គការសហប្រជាជាតិ (UN) ទទួលស្គាល់ជាទិវាបុណ្យអន្តរជាតិ។ ក្នុងថ្ងៃពេញបូណ៌មីខែពិសាខ ព្រឹត្តិការណ៍អស្ចារ្យ ៣ បានកើតឡើងចំពោះព្រះសម្មាសម្ពុទ្ធ ៖ ១. ទ្រង់ប្រសូតនៅឧទ្យានលុម្ពិនី, ២. ទ្រង់ត្រាស់ដឹងនូវអនុត្តរសម្មាសម្ពោធិញាណនៅពុទ្ធគយា, និង ៣. ទ្រង់យាងចូលបរិនិព្វាននៅនគរកុសិនារា។',
    descEn: 'Celebrated globally and recognized by the UN, Visakha Bochea marks the three pivotal milestones occurring on the same full moon day: Prince Siddhattha’s birth, Awakening, and Parinibbāna.',
    benefits: [
      { km: 'រំឭកដល់ព្រះគុណដ៏បរិសុទ្ធ ព្រះបញ្ញាគុណ និងព្រះមហាករុណាគុណរបស់ព្រះពុទ្ធ។', en: 'Recalling the supreme purity, wisdom, and boundless compassion of the Buddha.' },
      { km: 'ការចម្រើនពុទ្ធានុស្សតិ បណ្តុះសទ្ធាជ្រះថ្លា និងការដើរប្រទក្សិណបូជាទៀនធូប។', en: 'Cultivating mindfulness of the Buddha (Buddhānussati) and circumambulating sacred shrines.' }
    ],
    practiceKm: 'សមាទានសីល ៥ ឬសីល ៨, ស្ដាប់ព្រះធម៌ទេសនា, ចម្រើនសមាធិ, បរិច្ចាគទាន, និងចូលរួមពិធីដង្ហែប្រទក្សិណ ៣ ជុំជុំវិញព្រះវិហារដោយកាន់ទៀន ធូប និងផ្កាឈូក។',
    practiceEn: 'Observe the 5 or 8 precepts, listen to sermons, meditate, give charity, and join the 3-round circumambulation holding lotus flowers, candles, and incense.'
  },
  {
    id: 'magha',
    color: '#9333ea',
    icon: '🌕',
    km: 'បុណ្យមាឃបូជា',
    en: 'Māgha Būjā Day',
    season: 'ទិវាចតុរង្គសន្និបាត',
    timing: '១៥ កើត ខែមាឃ (ពេញបូណ៌មី)',
    subtitleKm: 'ការប្រកាសឱវាទបាដិមោក្ខ និងការដាក់អាយុសង្ខាររបស់ព្រះពុទ្ធ',
    subtitleEn: 'The Ovadapātimokkha Proclamation & The Renunciation of Life-Principle',
    descKm: 'បុណ្យមាឃបូជា ប្រារព្ធឡើងដើម្បីរំឭកដល់ការជួបជុំ «ចតុរង្គសន្និបាត» នៃព្រះអរហន្ត ១,២៥០ អង្គ ដែលសុទ្ធតែជាឯហិភិក្ខុឧបសម្បទា និងបានត្រាស់ដឹងអភិញ្ញា ៦ ដោយមិនបានណាត់គ្នាជាមុន នៅវត្តវេឡុវ័ន។ ក្នុងឱកាសនោះ ព្រះពុទ្ធបានប្រទាន «ឱវាទបាដិមោក្ខ» ដែលជាបេះដូងនៃពាក្យបង្រៀន ៖ កុំធ្វើបាបទាំងពួង, បំពេញកុសលឱ្យបរិបូណ៌, និងជម្រះចិត្តឱ្យស្អាតបរិសុទ្ធ។ ម្យ៉ាងទៀត ថ្ងៃនេះក៏ជាថ្ងៃដែលព្រះអង្គដាក់អាយុសង្ខារ ៣ ខែមុនបរិនិព្វានផងដែរ។',
    descEn: 'Commemorates the spontaneous assembly of 1,250 Arahants at Veluvana Monastery where the Buddha delivered the fundamental ethical charter: Avoid evil, cultivate good, purify the mind.',
    benefits: [
      { km: 'រៀនយល់ពីគោលការណ៍គ្រឹះទាំង ៣ នៃពុទ្ធសាសនា ៖ មិនធ្វើបាប, ធ្វើបុណ្យ, ជម្រះចិត្ត។', en: 'Grasping the threefold heart of Dhamma: refrain from harm, practice good, cleanse the mind.' },
      { km: 'ដាស់តឿនសតិកុំឱ្យធ្វេសប្រហែសក្នុងជីវិត តាមរយៈការរឭកដល់ការដាក់អាយុសង្ខារ។', en: 'Awakening diligence (Appamāda) through reflecting on the Buddha’s relinquishment of life.' }
    ],
    practiceKm: 'ជួបជុំគ្នានៅវត្តដើម្បីសមាទានសីល ស្ដាប់ធម៌ស្តីពីឱវាទបាដិមោក្ខ និងពិចារណាដកកិលេសចេញពីចិត្តកាយ។',
    practiceEn: 'Gather at shrines to observe precepts, reflect on the Ovādapātimokkha, and purify thought, word, and deed.'
  },
  {
    id: 'asalha',
    color: '#eab308',
    icon: '☸️',
    km: 'បុណ្យអាសាឡ្ហបូជា',
    en: 'Āsāḷha Būjā Day',
    season: 'ទិវាព្រះធម្មចក្រ & ព្រះរតនត្រ័យ',
    timing: '១៥ កើត ខែអាសាឡ្ហ (ពេញបូណ៌មី)',
    subtitleKm: 'ការសម្ដែងបឋមទេសនា «ធម្មចក្កប្បវត្តនសូត្រ» និងការកើតឡើងនៃព្រះសង្ឃដំបូង',
    subtitleEn: 'The First Sermon (Turning the Wheel of Dhamma) & Birth of the Sangha',
    descKm: 'ថ្ងៃពេញបូណ៌មីខែអាសាឡ្ហ គឺជាថ្ងៃប្រវត្តិសាស្ត្រដែលព្រះសម្មាសម្ពុទ្ធបានសម្ដែងព្រះធម្មទេសនាដំបូងបង្អស់ «ធម្មចក្កប្បវត្តនសូត្រ» ដល់បញ្ចវគ្គិយទាំង ៥ នៅព្រៃឥសិបតនមិគទាយវ័ន ក្រុងពារាណសី។ ព្រះអញ្ញាកោណ្ឌញ្ញត្ថេរបានត្រាស់ដឹងធម្មចក្ខុ និងបានបួសជាព្រះភិក្ខុដំបូងបង្អស់ក្នុងលោក ធ្វើឱ្យ «ព្រះរតនត្រ័យទាំង ៣» (ព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ) កើតឡើងពេញលេញបរិបូណ៌ក្នុងថ្ងៃនេះ។',
    descEn: 'Celebrates the proclamation of the Four Noble Truths and Noble Eightfold Path in the First Discourse, yielding the first stream-enterer and establishing the Holy Triple Gem.',
    benefits: [
      { km: 'រំឭកដល់ការកើតឡើងនៃពន្លឺព្រះធម៌ និងអរិយសច្ច ៤ ដែលជាផ្លូវរំលត់ទុក្ខ។', en: 'Honoring the arising of the Four Noble Truths delivering humanity from suffering.' },
      { km: 'អបអរសាទរការកកើតឡើងនៃព្រះសង្ឃរតនៈដំបូងក្នុងលោក។', en: 'Rejoicing in the founding of the monastic Sangha preserving the Dhamma.' }
    ],
    practiceKm: 'សូត្រធម្មចក្កប្បវត្តនសូត្រ, ពិចារណាលើមជ្ឈិមាបដិបទា (មាគ៌ាកណ្តាល វៀរចាកកាមសុខល្លិកានុយោគ និងអត្តកិលមថានុយោគ)។',
    practiceEn: 'Chant the Dhammacakkappavattana Sutta and contemplate the Middle Way avoiding luxury and self-mortification.'
  },
  {
    id: 'vassa',
    color: '#0d9488',
    icon: '🕯️',
    km: 'បុណ្យចូលវស្សា & ចេញវស្សា (ត្រីមាស)',
    en: 'Vassa (Rains Retreat) Entry & Exit',
    season: 'រដូវវស្សា ៣ ខែគត់',
    timing: 'ចូល ៖ ១ រោច ខែអាសាឡ្ហ | ចេញ ៖ ១៥ កើត ខែអស្សុជ',
    subtitleKm: 'រដូវចាំវស្សារបស់ភិក្ខុសង្ឃ និងការប្រគេនទៀនព្រះវស្សា',
    subtitleEn: 'The 3-Month Monastic Retreat and Raindrop Candle Offerings',
    descKm: 'ពិធីចូលវស្សា ត្រូវបានព្រះពុទ្ធទ្រង់បញ្ញត្តិឡើង ដើម្បីឱ្យភិក្ខុសង្ឃគង់ចាំនៅមួយកន្លែងរយៈពេល ៣ ខែក្នុងរដូវវស្សា មិននិមន្តត្រាច់ចរទៅមកដែលនាំឱ្យជាន់ឈ្លីសត្វល្អិត ឬដំណាំស្រែចម្ការរបស់កសិករ។ នេះជារដូវដ៏វិសេសសម្រាប់ព្រះសង្ឃចម្រើនសមថវិបស្សនា និងរៀនធម៌វិន័យ។ ពុទ្ធសាសនិកខ្មែរតែងនាំយកទៀនព្រះវស្សា ប្រេងកាត ស្បង់ចីវរ និងគ្រឿងឧបភោគបរិភោគមកប្រគេនព្រះសង្ឃ។',
    descEn: 'Mandated by the Buddha to prevent damage to crops during the monsoon, the 3-month Vassa retreat is an intensive period of monastic meditation and study accompanied by lay candle offerings.',
    benefits: [
      { km: 'ការប្រគេនទៀនវស្សា និងប្រេងបំភ្លឺ នាំឱ្យកើតមានបញ្ញាភ្លឺថ្លាដូចពន្លឺប្រទីប។', en: 'Offering Vassa candles brings radiant clarity of wisdom and mental illumination.' },
      { km: 'ឱកាសមាសសម្រាប់ឧបាសក-ឧបាសិកាក្នុងការតាំងចិត្តរក្សាសីល ឬតមគ្រឿងស្រវឹង ៣ ខែ។', en: 'Golden opportunity for laypersons to adopt special vows or abstain from alcohol for 3 months.' }
    ],
    practiceKm: 'ចូលរួមដង្ហែទៀនព្រះវស្សាទៅកាន់វត្តអារាម, តាំងចិត្តសមាទានសីល ៥ ឬ ៨ ឱ្យខ្ជាប់ខ្ជួនពេញមួយរដូវវស្សា។ ពេលចេញវស្សា មានពិធីបវារណា (ការបើកឱកាសឱ្យគ្នាស្តីបន្ទោសដោយមេត្តា)។',
    practiceEn: 'Offer giant Vassa candles to pagodas. Lay devotees often make seasonal vows of moral restraint, culminating in Pavāraṇā (mutual correction).'
  }
]
</script>
