<template>
  <div class="fade-up">
    <!-- Chapter Header -->
    <p class="chapter-label">{{ t('មាតិកាធម៌ជាន់ខ្ពស់ — បដិច្ចសមុប្បាទ', 'PROFOUND FOUNDATIONS — PAṬICCASAMUPPĀDA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('បដិច្ចសមុប្បាទ ១២ — ខ្សែសង្វាក់នៃហេតុ និងផល', 'The 12 Links of Dependent Origination') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('«អ្នកណាឃើញបដិច្ចសមុប្បាទ អ្នកនោះឃើញព្រះធម៌ អ្នកណាឃើញព្រះធម៌ អ្នកនោះឃើញបដិច្ចសមុប្បាទ» (មជ្ឈិមនិកាយ មហាហត្ថិបទោបមសូត្រ)។ បដិច្ចសមុប្បាទ គឺជាបេះដូងនៃពុទ្ធទស្សនវិជ្ជា ដែលពន្យល់ពីយន្តការធម្មជាតិ ថាតើទុក្ខកើតឡើងយ៉ាងដូចម្តេចតាមខ្សែសង្វាក់នៃហេតុបច្ច័យ ១២ តំណាក់កាល និងរបៀបរំលត់ខ្សែសង្វាក់នេះដើម្បីសម្រេចព្រះនិព្វាន។', '"Whoever sees Dependent Origination sees the Dhamma; whoever sees the Dhamma sees Dependent Origination" (MN 28). This core doctrine reveals the natural cycle of conditioned existence: how suffering arises link by link, and how it ceases through wisdom.') }}
    </p>

    <!-- Fundamental Law Box -->
    <div class="verse-box p-5 sm:p-6 mt-6 rounded-2xl text-center space-y-2 border">
      <span class="text-xs font-bold uppercase tracking-wider block" :style="{ color: 'var(--accent-bright)' }">
        ☸ {{ t('គោលការណ៍គ្រឹះនៃបដិច្ចសមុប្បាទ (Idappaccayatā Formula)', 'The Universal Principle of Conditionality') }}
      </span>
      <p class="paali text-sm sm:text-base font-semibold leading-relaxed" :style="{ color: 'var(--ink)' }">
        «ឥមស្មឹ សតិ ឥទំ ហោតិ, ឥមស្សុប្បាទា ឥទំ ឧប្បជ្ជតិ ។<br/>
        ឥមស្មឹ អសតិ ឥទំ ន ហោតិ, ឥមស្ស និរោធា ឥទំ និរុជ្ឈតិ ។»
      </p>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('កាលបើរបស់នេះមាន របស់នោះទើបមាន ព្រោះរបស់នេះកើតឡើង ទើបរបស់នោះកើតឡើង។ កាលបើរបស់នេះគ្មាន របស់នោះក៏គ្មាន ព្រោះរបស់នេះរលត់ទៅ ទើបរបស់នោះក៏រលត់ទៅ។', 'When this exists, that comes to be; with the arising of this, that arises. When this does not exist, that does not come to be; with the cessation of this, that ceases.') }}
      </p>
    </div>

    <!-- Toggle: Forward (Arising) vs Reverse (Cessation) -->
    <div class="mt-8 card-paper p-4 sm:p-5 rounded-2xl flex items-center justify-between gap-3 flex-wrap">
      <div>
        <h3 class="font-display font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
          {{ t('ទិសដៅនៃការពិចារណាធម៌', 'Mode of Contemplation') }}
        </h3>
        <p class="text-xs" :style="{ color: 'var(--ink-muted)' }">
          {{ activeMode === 'arising' ? t('អនុលោម៖ ដំណើរនៃការកើតឡើងនៃកងទុក្ខ', 'Forward: How suffering arises') : t('បដិលោម៖ ដំណើរនៃការរំលត់កងទុក្ខ', 'Reverse: How suffering ceases') }}
        </p>
      </div>

      <div class="flex items-center gap-2">
        <button
          @click="activeMode = 'arising'"
          class="lang-pick px-3 sm:px-4 py-2 text-xs font-semibold rounded-xl"
          :class="{ 'on': activeMode === 'arising' }"
        >
          ⛓️ {{ t('អនុលោម (កើតទុក្ខ)', 'Arising') }}
        </button>
        <button
          @click="activeMode = 'cessation'"
          class="lang-pick px-3 sm:px-4 py-2 text-xs font-semibold rounded-xl"
          :class="{ 'on': activeMode === 'cessation' }"
        >
          🕊️ {{ t('បដិលោម (រលត់ទុក្ខ)', 'Cessation') }}
        </button>
      </div>
    </div>

    <!-- The 12 Links Cards Grid -->
    <div class="space-y-3 sm:space-y-4 mt-6">
      <div
        v-for="(link, idx) in links"
        :key="link.pali"
        
        class="card-paper card-paper-hover p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-200 hover:-translate-y-0.5 border"
      >
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-start gap-3">
            <span class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0" :style="{ background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid var(--border)' }">
              {{ khNum(idx + 1) }}
            </span>
            <div class="space-y-1">
              <div class="flex items-center gap-2 flex-wrap">
                <h4 class="font-display font-bold text-base sm:text-lg" :style="{ color: 'var(--ink)' }">
                  {{ t(link.nameKm, link.nameEn) }}
                </h4>
                <span class="paali text-xs font-semibold px-2 py-0.5 rounded" :style="{ background: 'var(--bg-card-2)', color: 'var(--accent)' }">
                  {{ link.pali }}
                </span>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded uppercase" :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)' }">
                  {{ t(link.periodKm, link.periodEn) }}
                </span>
              </div>

              <!-- Condition Statement -->
              <p class="text-xs sm:text-sm font-medium leading-relaxed" :style="{ color: activeMode === 'arising' ? 'var(--ink)' : 'var(--accent)' }">
                {{ activeMode === 'arising' ? link.conditionKm : link.cessationKm }}
              </p>

              <!-- Short summary -->
              <p class="text-xs line-clamp-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                {{ t(link.descKm, link.descEn) }}
              </p>
            </div>
          </div>

          <div class="shrink-0 flex items-center gap-2 text-xs font-bold mt-1">
            <button
              type="button"
              @click="toggleExpand(idx)"
              class="lang-pick px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1"
              :class="expandedId === idx ? 'on' : ''"
            >
              <span>{{ expandedId === idx ? t('បិទ ▲', 'Hide ▲') : t('អានលម្អិត ▼', 'Read More ▼') }}</span>
            </button>
          </div>
        </div>

        <!-- Slide-down Inline Expansion -->
        <SlideDown>
          <div v-if="expandedId === idx" class="pt-3 border-t mt-3 space-y-3 text-xs leading-relaxed" :style="{ borderColor: 'var(--border)' }">
            <!-- Formula -->
            <div class="p-3.5 rounded-xl border-l-4 font-serif space-y-1" :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)' }">
              <span class="text-[10px] uppercase font-bold block" :style="{ color: 'var(--accent)' }">
                📖 {{ t('ពុទ្ធវចនៈបាលី (Pāli Formula)', 'Canonical Pāli Formula') }}
              </span>
              <p class="font-bold leading-relaxed">«{{ link.formulaPali }}»</p>
              <p class="text-xs opacity-80">{{ link.conditionKm }}</p>
            </div>

            <!-- Deep detail -->
            <div class="p-3.5 rounded-xl border space-y-1" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
              <h5 class="font-bold text-[11px] uppercase tracking-wider flex items-center gap-1.5" :style="{ color: 'var(--accent)' }">
                <span>🔍</span>
                <span>{{ t('អត្ថន័យ និងយន្តការនៃហេតុបច្ច័យ', 'Detailed Cause & Effect Mechanism') }}</span>
              </h5>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(link.detailKm, link.detailEn) }}</p>
            </div>

            <!-- Practical Daily Life Reflection -->
            <div class="p-3.5 rounded-xl border space-y-1" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
              <h5 class="font-bold text-[11px] uppercase tracking-wider flex items-center gap-1.5 text-emerald-600">
                <span>🧘</span>
                <span>{{ t('ការពិចារណាក្នុងជីវិតប្រចាំថ្ងៃ (ការកាត់ផ្តាច់ខ្សែសង្វាក់)', 'Mindful Practical Application') }}</span>
              </h5>
              <p :style="{ color: 'var(--ink-soft)' }">{{ t(link.practicalKm, link.practicalEn) }}</p>
            </div>

            <button
              type="button"
              @click="expandedId = null"
              class="w-full py-1.5 rounded-lg text-center text-xs opacity-70 hover:opacity-100 cursor-pointer"
              :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)' }"
            >
              {{ t('បិទព័ត៌មានលម្អិត ▲', 'Close Details ▲') }}
            </button>
          </div>
        </SlideDown>
      </div>
    </div>

    <!-- The 3 Rounds (Vaṭṭa 3) & How to Cut the Cycle -->
    <div class="card-paper p-5 sm:p-7 rounded-2xl mt-8 space-y-4 border">
      <div class="flex items-center gap-2">
        <span class="text-2xl">🔄</span>
        <h3 class="font-display font-bold text-lg sm:text-xl" :style="{ color: 'var(--ink)' }">
          {{ t('វដ្ត ៣ និងកន្លែងដែលយើងអាចកាត់ផ្តាច់ខ្សែសង្វាក់សង្សារវដ្ត', 'The 3 Rounds & How to Sever the Cycle') }}
        </h3>
      </div>
      <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('បដិច្ចសមុប្បាទ វិលជុំជា ៣ វដ្តឥតឈប់ឈរ៖ ១. កិលេសវដ្ត (អវិជ្ជា, តណ្ហា, ឧបាទាន) ជំរុញឱ្យកើត ២. កម្មវដ្ត (សង្ខារ, ភព) ហើយកម្មនាំឱ្យកើត ៣. វិបាកវដ្ត (វិញ្ញាណ, នាមរូប, សឡាយតនៈ, ផស្សៈ, វេទនា, ជាតិ, ជរាមរណៈ)។', 'The cycle spins via 3 rounds: 1. Defilements (Kilesa: Ignorance, Craving, Clinging) drive 2. Actions (Kamma: Formations, Becoming), which ripen into 3. Results (Vipāka: Consciousness, Form, Senses, Contact, Feeling, Birth, Death).') }}
      </p>

      <div class="p-4 rounded-xl border space-y-1.5" :style="{ background: 'var(--accent-soft)', borderColor: 'var(--border-strong)' }">
        <span class="text-xs font-bold uppercase tracking-wider block" :style="{ color: 'var(--accent)' }">
          💡 {{ t('ចំណុចគន្លឹះដើម្បីកាត់ផ្តាច់ (The Weakest Link to Break the Wheel):', 'The Crucial Breaking Point:') }}
        </span>
        <p class="text-xs sm:text-sm leading-relaxed font-medium" :style="{ color: 'var(--ink)' }">
          {{ t('យើងមិនអាចហាមឃាត់ភ្នែកកុំឱ្យឃើញរូប ឬត្រចៀកកុំឱ្យឮសំឡេងបានឡើយ (ផស្សៈ និង វេទនា កើតឡើងជាធម្មតា)។ ប៉ុន្តែនៅចន្លោះ «វេទនា (អារម្មណ៍សុខ-ទុក្ខ)» និង «តណ្ហា (ការស្រេកឃ្លាន/ចង់បាន)» យើងអាចយក «សតិ និង បញ្ញា» មកទប់ទល់បាន! កាលណាមានសតិដឹងទាន់ថាវេទនាគ្រាន់តែកើត-រលត់ តណ្ហាមិនអាចកើតឡើងបានឡើយ ខ្សែសង្វាក់នៃទុក្ខក៏ត្រូវដាច់ផ្ងារមួយរំពេច!', 'We cannot stop sense contact or feelings from arising. However, between FEELING (Vedanā) and CRAVING (Taṇhā), mindfulness (Sati) can intervene! By clearly seeing feelings as impermanent, craving does not arise — and the wheel of suffering shatters.') }}
        </p>
      </div>
    </div>

    
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  if (n === null || n === undefined) return ''
  return String(n).split('').map(d => khDigits[Number(d)] ?? d).join('')
}

const activeMode = ref('arising')
const expandedId = ref(null)
function toggleExpand(id) { expandedId.value = expandedId.value === id ? null : id }


const links = [
  {
    pali: 'Avijjā',
    nameKm: '១. អវិជ្ជា (សេចក្តីមិនដឹងពិត)', nameEn: '1. Ignorance (Avijjā)',
    periodKm: 'អតីតកាល (Past Cause)', periodEn: 'Past Cause',
    conditionKm: 'ព្រោះអវិជ្ជាជាបច្ច័យ ទើបកើតមានសង្ខារ',
    cessationKm: 'ព្រោះការរលត់ទៅដោយមិនសេសសល់នៃអវិជ្ជា ទើបសង្ខាររលត់',
    formulaPali: 'Avijjāpaccayā saṅkhārā',
    descKm: 'ការមិនយល់ដឹងច្បាស់នូវអរិយសច្ច ៤ មិនស្គាល់ទុក្ខ ហេតុនៃទុក្ខ ការរលត់ទុក្ខ និងផ្លូវប្រតិបត្តិ។',
    descEn: 'Fundamental blindness to the Four Noble Truths, causality, and reality.',
    detailKm: 'អវិជ្ជា មិនមែនជាការខ្វះចំណេះដឹងទូទៅទេ ប៉ុន្តែជាភាពងងឹតនៃចិត្ត ដែលយល់ច្រឡំថា អ្វីដែលមិនទៀងថាទៀង អ្វីដែលជាទុក្ខថាសុខ អ្វីដែលមិនមែនខ្លួនថាជាខ្លួន។ វាជាឬសគល់នៃកិលេសទាំងអស់។',
    detailEn: 'Ignorance is spiritual unawareness: seeing permanence in impermanence, pleasure in suffering, and self in what is selfless.',
    practicalKm: 'វិធីកម្ចាត់៖ ចម្រើនបញ្ញា សិក្សាព្រះធម៌ និងប្រតិបត្តិវិបស្សនាដើម្បីឱ្យចិត្តឃើញសច្ចធម៌ជាក់ស្តែង។',
    practicalEn: 'Antidote: Deep contemplation and insight meditation to penetrate the true nature of phenomena.'
  },
  {
    pali: 'Saṅkhāra',
    nameKm: '២. សង្ខារ (ការតាក់តែងកម្ម)', nameEn: '2. Volitional Formations (Saṅkhāra)',
    periodKm: 'អតីតកាល (Past Cause)', periodEn: 'Past Cause',
    conditionKm: 'ព្រោះសង្ខារជាបច្ច័យ ទើបកើតមានវិញ្ញាណ',
    cessationKm: 'ព្រោះសង្ខាររលត់ ទើបវិញ្ញាណរលត់',
    formulaPali: 'Saṅkhārapaccayā viññāṇaṃ',
    descKm: 'ចេតនាតាក់តែងអំពើ ទាំងបុញ្ញាភិសង្ខារ (កុសល), អបុញ្ញាភិសង្ខារ (អកុសល), និងអានេញ្ជាភិសង្ខារ (អរូបជ្ឈាន)។',
    descEn: 'Karmic formations of body, speech, and mind driving future rebirth.',
    detailKm: 'សង្ខារក្នុងទីនេះសំដៅលើ «ចេតនាកម្ម» ទាំងផ្លូវកាយ វាចា ចិត្ត ដែលបុគ្គលបានប្រព្រឹត្តកាលពីអតីតជាតិ ដឹកនាំដោយអវិជ្ជា ដែលបានសន្សំកម្លាំងកម្មរង់ចាំឱ្យផល។',
    detailEn: 'Karmic momentum generated by intentional choices shaped by past ignorance.',
    practicalKm: 'វិធីកម្ចាត់៖ តម្កល់ចិត្តក្នុងកុសលធម៌ មិនបង្កើតអកុសលកម្មថ្មីៗ និងចម្រើនមគ្គដើម្បីឈានទៅរំលត់កម្មទាំងស្រុង។',
    practicalEn: 'Practice: Refrain from unwholesome deeds; orient intention towards liberation.'
  },
  {
    pali: 'Viññāṇa',
    nameKm: '៣. វិញ្ញាណ (បដិសន្ធិវិញ្ញាណ)', nameEn: '3. Consciousness (Viññāṇa)',
    periodKm: 'បច្ចុប្បន្នផល (Present Result)', periodEn: 'Present Result',
    conditionKm: 'ព្រោះវិញ្ញាណជាបច្ច័យ ទើបកើតមាននាមរូប',
    cessationKm: 'ព្រោះវិញ្ញាណរលត់ ទើបនាមរូបរលត់',
    formulaPali: 'Viññāṇapaccayā nāmarūpaṃ',
    descKm: 'វិញ្ញាណដំបូងដែលចាប់កំណើតក្នុងភពថ្មី (បដិសន្ធិចិត្ត) និងវិញ្ញាណដឹងអារម្មណ៍ប្រចាំជីវិត។',
    descEn: 'Relinking rebirth-consciousness and the stream of cognitive awareness.',
    detailKm: 'បដិសន្ធិចិត្តជាស្ពានភ្ជាប់រវាងជាតិមុន និងជាតិនេះ អាស្រ័យដោយកម្លាំងកម្មពីអតីត។ បន្ទាប់មក វិញ្ញាណនេះក៏បង្កើតឱ្យមានចរន្តជីវិតបន្តទៅមុខ។',
    detailEn: 'Rebirth consciousness connecting lives, carrying the karmic potentials.',
    practicalKm: 'វិធីកម្ចាត់៖ សង្កេតវិញ្ញាណដឹងអារម្មណ៍ថាជាគ្រាន់តែជាលំហូរនៃចិត្តដែលកើត-រលត់រាល់ខណៈ មិនមែនជាព្រលឹងអមតៈឡើយ។',
    practicalEn: 'Practice: See consciousness as a rapidly changing process, not an eternal soul.'
  },
  {
    pali: 'Nāmarūpa',
    nameKm: '៤. នាមរូប (ចិត្ត និងកាយ)', nameEn: '4. Name and Form (Nāmarūpa)',
    periodKm: 'បច្ចុប្បន្នផល (Present Result)', periodEn: 'Present Result',
    conditionKm: 'ព្រោះនាមរូបជាបច្ច័យ ទើបកើតមានសឡាយតនៈ',
    cessationKm: 'ព្រោះនាមរូបរលត់ ទើបសឡាយតនៈរលត់',
    formulaPali: 'Nāmarūpapaccayā saḷāyatanaṃ',
    descKm: 'នាមធម៌ (វេទនា សញ្ញា ចេតនា ផស្សៈ មនសិការ) និង រូបធម៌ (មហាភូតរូប ៤ និងឧបាទាយរូប)។',
    descEn: 'Mental factors (feeling, perception, volition, contact, attention) and physical form.',
    detailKm: 'កាលណាមានវិញ្ញាណចាប់បដិសន្ធិ កាយសម្បត្តិ និងចិត្តចេតសិកទាំងឡាយក៏ចាប់បដិសន្ធិព្រមគ្នា ប្រៀបដូចជាឈើពីរដើមច្រត់គ្នាទៅវិញទៅមក។',
    detailEn: 'Mind and matter co-arising and mutually supporting each other like two leaning reeds.',
    practicalKm: 'វិធីកម្ចាត់៖ រៀនបែងចែកនាម និងរូបក្នុងកាយចិត្ត ដើម្បីបំបាត់ការប្រកាន់ថា «ខ្លួនអញ»។',
    practicalEn: 'Practice: Dissect existence into mind and body to dissolve personal identity.'
  },
  {
    pali: 'Saḷāyatana',
    nameKm: '៥. សឡាយតនៈ (ទ្វារវិញ្ញាណទាំង ៦)', nameEn: '5. Six Sense Bases (Saḷāyatana)',
    periodKm: 'បច្ចុប្បន្នផល (Present Result)', periodEn: 'Present Result',
    conditionKm: 'ព្រោះសឡាយតនៈជាបច្ច័យ ទើបកើតមានផស្សៈ',
    cessationKm: 'ព្រោះសឡាយតនៈរលត់ ទើបផស្សៈរលត់',
    formulaPali: 'Saḷāyatanapaccayā phasso',
    descKm: 'ទ្វារទទួលដឹងទាំង ៦៖ ភ្នែក ត្រចៀក ច្រមុះ អណ្តាត កាយ និង មនោ (ចិត្ត)។',
    descEn: 'The six internal sense faculties: eye, ear, nose, tongue, body, and intellect.',
    detailKm: 'ជាបង្អួចសម្រាប់ទាក់ទងនឹងពិភពខាងក្រៅ។ បើគ្មានទ្វារទាំង ៦ នេះទេ ការដឹងអារម្មណ៍ផ្សេងៗក៏មិនអាចប្រព្រឹត្តទៅបានដែរ។',
    detailEn: 'The six portals through which we interface with the external universe.',
    practicalKm: 'វិធីកម្ចាត់៖ រក្សាឥន្ទ្រិយសំវរៈ — គ្រប់គ្រងទ្វារភ្នែក ត្រចៀក កុំឱ្យកិលេសហូរចូល។',
    practicalEn: 'Practice: Sense restraint — guarding sense doors from greed and aversion.'
  },
  {
    pali: 'Phassa',
    nameKm: '៦. ផស្សៈ (ការប៉ះខ្ទប់នៃអារម្មណ៍)', nameEn: '6. Sense Contact (Phassa)',
    periodKm: 'បច្ចុប្បន្នផល (Present Result)', periodEn: 'Present Result',
    conditionKm: 'ព្រោះផស្សៈជាបច្ច័យ ទើបកើតមានវេទនា',
    cessationKm: 'ព្រោះផស្សៈរលត់ ទើបវេទនារលត់',
    formulaPali: 'Phassapaccayā vedanā',
    descKm: 'ការជួបជុំគ្នារវាងទ្វារវិញ្ញាណ អារម្មណ៍ខាងក្រៅ និងវិញ្ញាណដឹង (ឧ. ភ្នែក + រូប + ចក្ខុវិញ្ញាណ = ចក្ខុសម្ផស្ស)។',
    descEn: 'The meeting of sense base, sense object, and consciousness.',
    detailKm: 'ផស្សៈជាចំណុចផ្តើមនៃការដឹងពិភពលោក។ បើគ្មានការប៉ះទង្គិចគ្នាទេ សេចក្តីរីករាយ ឬការឈឺចាប់ក៏មិនអាចកើតមានដែរ។',
    detailEn: 'Contact is the spark that ignites every feeling and reaction.',
    practicalKm: 'វិធីកម្ចាត់៖ ដឹងទាន់រាល់ពេលមានការប៉ះទង្គិចអារម្មណ៍ ដោយមិនបង្កើតរឿងរ៉ាវបន្ត។',
    practicalEn: 'Practice: Mindful awareness at the very instant of contact without emotional elaboration.'
  },
  {
    pali: 'Vedanā',
    nameKm: '៧. វេទនា (អារម្មណ៍ទទួលដឹង)', nameEn: '7. Feeling (Vedanā)',
    periodKm: 'បច្ចុប្បន្នផល (Present Result)', periodEn: 'Present Result',
    conditionKm: 'ព្រោះវេទនាជាបច្ច័យ ទើបកើតមានតណ្ហា',
    cessationKm: 'ព្រោះវេទនារលត់ ទើបតណ្ហារលត់',
    formulaPali: 'Vedanāpaccayā taṇhā',
    descKm: 'អារម្មណ៍ ៣ យ៉ាង៖ សុខវេទនា (ស្រួល), ទុក្ខវេទនា (ពិបាក), និង អទុក្ខមសុខវេទនា (កណ្តាល/ឧបេក្ខា)។',
    descEn: 'Affective tone: pleasant, painful, or neutral feeling.',
    detailKm: 'មនុស្សទូទៅតែងជាប់ជំពាក់នឹងសុខវេទនា (ចង់បានទៀត) និងខឹងនឹងទុក្ខវេទនា (ចង់កម្ចាត់ចោល)។ នេះជាកន្លែងដែលនាំទៅរកតណ្ហា។',
    detailEn: 'Every contact yields feeling; humans react instinctively with craving or aversion.',
    practicalKm: 'វិធីកម្ចាត់៖ ចម្រើនវេទនានុបស្សនាសតិបដ្ឋាន — មើលវេទនាគ្រាន់តែជាវេទនា កើតហើយរលត់ មិនមែនយើងសុខ ឬយើងទុក្ខឡើយ។',
    practicalEn: 'Practice: Vedanānupassanā — observing feeling objectively without clinging.'
  },
  {
    pali: 'Taṇhā',
    nameKm: '៨. តណ្ហា (សេចក្តីស្រេកឃ្លាន)', nameEn: '8. Craving (Taṇhā)',
    periodKm: 'បច្ចុប្បន្នហេតុ (Present Cause)', periodEn: 'Present Cause',
    conditionKm: 'ព្រោះតណ្ហាជាបច្ច័យ ទើបកើតមានឧបាទាន',
    cessationKm: 'ព្រោះតណ្ហារលត់ ទើបឧបាទានរលត់',
    formulaPali: 'Taṇhāpaccayā upādānaṃ',
    descKm: 'កាមតណ្ហា (ស្រេកឃ្លានកាមគុណ), ភវតណ្ហា (ស្រេកឃ្លានការកើតមាន), និង វិភវតណ្ហា (ស្រេកឃ្លានការវិនាសសាបសូន្យ)។',
    descEn: 'Thirst for sensual pleasure, for existence/becoming, and for non-existence.',
    detailKm: 'តណ្ហាជា «សមុទយសច្ច» (ប្រភពនៃទុក្ខ)។ កាលណាចិត្តកើតតណ្ហា វានឹងស្វែងរកអារម្មណ៍មកបំពេញឥតឈប់ឈរ ដូចមនុស្សស្រេកផឹកទឹកអំបិល។',
    detailEn: 'The prime architect of Samsara: an insatiable thirst that creates new karmic bonds.',
    practicalKm: 'វិធីកម្ចាត់៖ អប់រំចិត្តឱ្យស្កប់ស្កល់ (សន្តោស) និងដឹងថាអារម្មណ៍លោកិយមិនអាចបំពេញតណ្ហាឱ្យពេញបានឡើយ។',
    practicalEn: 'Practice: Contentment, renunciation, and seeing the trap of sensory addiction.'
  },
  {
    pali: 'Upādāna',
    nameKm: '៩. ឧបាទាន (ការតោងប្រកាន់មាំ)', nameEn: '9. Clinging / Attachment (Upādāna)',
    periodKm: 'បច្ចុប្បន្នហេតុ (Present Cause)', periodEn: 'Present Cause',
    conditionKm: 'ព្រោះឧបាទានជាបច្ច័យ ទើបកើតមានភព',
    cessationKm: 'ព្រោះឧបាទានរលត់ ទើបភពរលត់',
    formulaPali: 'Upādānapaccayā bhavo',
    descKm: 'ការប្រកាន់ ៤ ប្រការ៖ កាមុបាទាន (កាម), ទិដ្ឋុបាទាន (ទស្សនៈ), សីលព្វតុបាទាន (ពិធីសក្ការៈខុស), និង អត្តវាទុបាទាន (តួខ្លួន)។',
    descEn: 'Intense clinging to senses, views, superstitious rites, and the ego illusion.',
    detailKm: 'បើប្រៀបធៀប តណ្ហាដូចជាការលូកដៃចង់ចាប់ផ្លែឈើ រីឯឧបាទាន គឺការក្តាប់ផ្លែឈើនោះជាប់ក្នុងដៃមិនព្រមលែង។',
    detailEn: 'If craving is reaching for the fruit, clinging is grasping it tightly and refusing to let go.',
    practicalKm: 'វិធីកម្ចាត់៖ បដិបត្តិចិត្តលះបង់ មិនប្រកាន់គំនិតខ្លួនឯងជាធំ និងរៀនព្រលែងការគ្រប់គ្រងអ្វីៗ។',
    practicalEn: 'Practice: Radical letting go; seeing that nothing belongs to "me" or is "mine".'
  },
  {
    pali: 'Bhava',
    nameKm: '១០. ភព (ដំណើរនៃការបង្កើតជាតិថ្មី)', nameEn: '10. Becoming (Bhava)',
    periodKm: 'បច្ចុប្បន្នហេតុ (Present Cause)', periodEn: 'Present Cause',
    conditionKm: 'ព្រោះភពជាបច្ច័យ ទើបកើតមានជាតិ',
    cessationKm: 'ព្រោះភពរលត់ ទើបជាតិរលត់',
    formulaPali: 'Bhavapaccayā jāti',
    descKm: 'កម្មភព (កម្លាំងកម្មដែលសន្សំសម្រាប់ជាតិថ្មី) និង ឧបបត្តិភព (ភពកំណើតដែលត្រូវទៅកើត ក្នុងកាមភព រូបភព ឬអរូបភព)។',
    descEn: 'Karmic becoming (kammabhava) and the realm of rebirth (upapattibhava).',
    detailKm: 'អាស្រ័យការតោងប្រកាន់ ថាមពលកម្មក៏ប្រមូលផ្តុំបង្កើតជាកម្លាំងទំនាញសម្រាប់អនាគតជាតិ។',
    detailEn: 'The karmic energetic charge ready to materialize into a new lifetime.',
    practicalKm: 'វិធីកម្ចាត់៖ រំលត់កិលេសក្នុងចិត្ត ដើម្បីកុំឱ្យមានថាមពលកម្មតាក់តែងភពកំណើតថ្មីទៀត។',
    practicalEn: 'Practice: Extinguish mental defilements so no karmic seed remains to sprout.'
  },
  {
    pali: 'Jāti',
    nameKm: '១១. ជាតិ (ការចាប់កំណើត)', nameEn: '11. Birth (Jāti)',
    periodKm: 'អនាគតផល (Future Result)', periodEn: 'Future Result',
    conditionKm: 'ព្រោះជាតិជាបច្ច័យ ទើបកើតមានជរា និងមរណៈ',
    cessationKm: 'ព្រោះជាតិរលត់ ទើបជរា និងមរណៈរលត់',
    formulaPali: 'Jātipaccayā jarāmaraṇaṃ',
    descKm: 'ការលេចឡើងនៃខន្ធ ៥ ក្នុងភពថ្មី ការធ្លាក់ចុះក្នុងគភ៌ ការដុះពន្លកនៃជីវិតថ្មី។',
    descEn: 'The manifestation of the aggregates in a new existence; birth into Samsara.',
    detailKm: 'កាលណាមានជាតិ កងទុក្ខទាំងអស់ក៏ត្រូវបាននាំមកជាមួយភ្លាម ព្រោះជាតិជាច្រកទ្វារបើកផ្លូវឱ្យជរា ព្យាធិ និងមរណៈចូលមក។',
    detailEn: 'Birth is the gateway through which all subsequent suffering enters.',
    practicalKm: 'វិធីកម្ចាត់៖ យល់ថាការកើតជាទុក្ខ ហើយតាំងចិត្តបដិបត្តិធម៌ដើម្បីសម្រេចអរហត្តផលដែលជាការ «អស់ជាតិ» (ខីណា ជាតិ)។',
    practicalEn: 'Practice: Aspire to the end of rebirth (Khīṇā jāti) through complete awakening.'
  },
  {
    pali: 'Jarāmaraṇa',
    nameKm: '១២. ជរា និងមរណៈ (ភាពចាស់ និងសេចក្តីស្លាប់)', nameEn: '12. Aging & Death (Jarāmaraṇa)',
    periodKm: 'អនាគតផល (Future Result)', periodEn: 'Future Result',
    conditionKm: 'ព្រមទាំងសោកៈ (សោកស្តាយ) បរិទេវៈ (យំសោក) ទុក្ខ (ទុក្ខកាយ) ទោមនស្ស (ទុក្ខចិត្ត) ឧបាយាស (អស់សង្ឃឹម)',
    cessationKm: 'កងទុក្ខទាំងអស់ក៏រលត់ទៅដោយស្ថាពរ',
    formulaPali: 'Jarāmaraṇaṃ sokaparidevadukkhadomanassupāyāsā sambhavanti',
    descKm: 'ការសាបសូន្យនៃឥន្ទ្រិយ ការបែកធ្លាយនៃរូបកាយ និងសេចក្តីស្លាប់ ដែលនាំមកនូវទុក្ខគ្រប់បែបយ៉ាង។',
    descEn: 'Aging, death, sorrow, lamentation, pain, distress, and despair.',
    detailKm: 'នេះជាទីបញ្ចប់នៃខ្សែសង្វាក់បដិច្ចសមុប្បាទ ដែលបង្ហាញថាកងទុក្ខទាំងមូលត្រូវបានប្រមូលផ្តុំមកយ៉ាងដូច្នេះឯង។',
    detailEn: 'The full culmination of suffering inherent in conditioned existence.',
    practicalKm: 'វិធីកម្ចាត់៖ ពិចារណាមរណស្សតិជាប្រចាំ កុំធ្វេសប្រហែសក្នុងជីវិត ហើយខិតខំដុសខាត់ចិត្តឱ្យផុតពីកិលេស។',
    practicalEn: 'Practice: Mindfulness of mortality; living with urgency and non-attachment.'
  }
]

function lockBodyScroll() {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

function unlockBodyScroll() {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

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
  transition: transform 0.26s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.22s ease;
}

.modal-pop-enter-from .card-paper {
  opacity: 0;
  transform: translateY(28px) scale(0.97);
}

.modal-pop-leave-to .card-paper {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

@media (max-width: 639px) {
  .modal-pop-enter-from .card-paper,
  .modal-pop-leave-to .card-paper {
    transform: translateY(100%);
  }
}
</style>
