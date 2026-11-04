<template>
  <div class="fade-up">
    <!-- Chapter Header -->
    <p class="chapter-label">{{ t('បរមត្ថធម្មទេសនា — ធាតុ ១៨', 'ULTIMATE REALITIES — DHĀTU 18') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('ធាតុ ១៨ — ធម្មជាតិពិតឥតមានតួខ្លួន', 'The 18 Elements of Reality') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ព្រះសម្មាសម្ពុទ្ធទ្រង់សម្តែង «ធាតុ ១៨» (Bahudhātuka Sutta, MN 115) ដើម្បីរំលាយសេចក្តីយល់ខុសថាមាន «ព្រលឹង តួខ្លួន អញ ឬអ្នកដទៃ»។ ក្នុងលោកនេះ ជីវិតពុំមានអ្វីក្រៅពីបណ្តុំនៃ «ធាតុ» ទាំង ១៨ ដែលកើតឡើងដោយអាស្រ័យបច្ច័យ ដំណើរការទៅតាមច្បាប់ធម្មជាតិ រួចរលត់ទៅវិញរាល់វិនាទី។', 'The Buddha expounded the 18 Dhātu (MN 115) to dismantle the persistent illusion of a permanent "self", "soul", or "agent". In truth, all experiential reality consists purely of 18 elemental components arising dependently, functioning naturally, and dissolving instantly.') }}
    </p>

    <!-- Visual Triad Law Box -->
    <div class="verse-box p-5 sm:p-6 mt-6 rounded-2xl text-center space-y-2 border">
      <span class="text-xs font-bold uppercase tracking-wider block" :style="{ color: 'var(--accent-bright)' }">
        👁️ 👂 👃 👅 🖐️ 🧠 {{ t('រូបមន្តនៃការដឹងអារម្មណ៍ទាំង ៦ គូ', 'The Triad Formula of Perception') }}
      </span>
      <p class="text-xs sm:text-sm md:text-base font-semibold leading-relaxed" :style="{ color: 'var(--ink)' }">
        {{ t('ទ្វារទទួល (ធាតុខាងក្នុង) + វត្ថុប៉ះ (ធាតុខាងក្រៅ) + ចិត្តដឹង (វិញ្ញាណធាតុ) = ការដឹងអារម្មណ៍ (ផស្សៈ)', 'Internal Base + External Object + Sense Consciousness = Perception (Phassa)') }}
      </p>
      <p class="text-xs mt-1" :style="{ color: 'var(--ink-soft)' }">
        {{ t('គ្មានបុគ្គលណាជា «អ្នកមើល» ទេ មានតែ «ចក្ខុធាតុ» ប៉ះនឹង «រូបធាតុ» បង្កើតជា «ចក្ខុវិញ្ញាណធាតុ» ប៉ុណ្ណោះ!', 'There is no "seer" inside; there is only eye-element meeting form-element generating eye-consciousness!') }}
      </p>
    </div>

    <!-- Category Filter Tabs -->
    <div class="flex items-center gap-2 mt-8 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
      <button
        v-for="cat in categories"
        :key="cat.id"
        @click="activeCat = cat.id"
        class="lang-pick px-4 py-2 text-xs font-semibold whitespace-nowrap shrink-0 h-9 rounded-xl flex items-center gap-1.5"
        :class="{ 'on': activeCat === cat.id }"
      >
        <span>{{ cat.icon }}</span>
        <span>{{ t(cat.km, cat.en) }}</span>
        <span class="text-[10px] opacity-75">({{ cat.count }})</span>
      </button>
    </div>

    <!-- 18 Elements Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mt-5">
      <div
        v-for="(d, idx) in filteredDhatu"
        :key="d.pali"
        
        class="card-paper card-paper-hover p-4 sm:p-5 rounded-2xl cursor-pointer flex flex-col justify-between space-y-3 border transition-all duration-200 hover:-translate-y-0.5"
      >
        <div class="space-y-2">
          <div class="flex items-center justify-between gap-2">
            <span class="text-2xl">{{ d.icon }}</span>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)', color: 'var(--accent)' }">
              {{ t(d.groupKm, d.groupEn) }}
            </span>
          </div>

          <div>
            <h4 class="font-display font-bold text-base" :style="{ color: 'var(--ink)' }">
              {{ t(d.nameKm, d.nameEn) }}
            </h4>
            <p class="paali text-xs mt-0.5" :style="{ color: 'var(--accent)' }">
              {{ d.pali }}
            </p>
          </div>

          <p class="text-xs line-clamp-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t(d.descKm, d.descEn) }}
          </p>
        </div>

        <div>
          <div class="pt-2 flex items-center justify-between gap-2 text-xs border-t" :style="{ borderColor: 'var(--border)' }">
            <span class="text-[11px] font-mono" :style="{ color: 'var(--ink-muted)' }">#{{ khNum(d.id) }} / ១៨</span>
            <button
              type="button"
              @click="toggleExpand(d.id)"
              class="lang-pick px-2.5 py-1 text-xs font-bold rounded-lg cursor-pointer flex items-center gap-1"
              :class="expandedId === d.id ? 'on' : ''"
            >
              <span>{{ expandedId === d.id ? t('បិទ ▲', 'Hide ▲') : t('អានលម្អិត ▼', 'Read More ▼') }}</span>
            </button>
          </div>

          <!-- Slide-down Inline Expansion -->
          <SlideDown>
            <div v-if="expandedId === d.id" class="pt-3 border-t mt-3 space-y-3 text-xs leading-relaxed" :style="{ borderColor: 'var(--border)' }">
              <!-- Type & Role pills -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div class="p-2.5 rounded-xl border space-y-0.5" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                  <span class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-muted)' }">{{ t('ប្រភេទធាតុ', 'Element Type') }}</span>
                  <p class="font-semibold" :style="{ color: 'var(--ink)' }">{{ t(d.typeKm, d.typeEn) }}</p>
                </div>
                <div class="p-2.5 rounded-xl border space-y-0.5" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                  <span class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-muted)' }">{{ t('តួនាទីក្នុងវិញ្ញាណ', 'Perceptual Role') }}</span>
                  <p class="font-semibold" :style="{ color: 'var(--ink)' }">{{ t(d.roleKm, d.roleEn) }}</p>
                </div>
              </div>

              <!-- Deep Explanation -->
              <div class="p-3 rounded-xl border space-y-1" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                <h5 class="font-bold text-[11px] uppercase tracking-wider flex items-center gap-1.5" :style="{ color: 'var(--accent)' }">
                  <span>📖</span>
                  <span>{{ t('អត្ថន័យតាមគម្ពីរអភិធម្ម', 'Abhidhamma Analysis') }}</span>
                </h5>
                <p :style="{ color: 'var(--ink-soft)' }">{{ t(d.detailKm, d.detailEn) }}</p>
              </div>

              <!-- Meditative Insight -->
              <div class="p-3 rounded-xl border space-y-1" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
                <h5 class="font-bold text-[11px] uppercase tracking-wider flex items-center gap-1.5 text-emerald-600">
                  <span>🧘</span>
                  <span>{{ t('ការពិចារណាក្នុងវិបស្សនា (អនត្តា)', 'Insight Contemplation (Anattā)') }}</span>
                </h5>
                <p :style="{ color: 'var(--ink-soft)' }">{{ t(d.insightKm, d.insightEn) }}</p>
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
    </div>

    <!-- The 6 Perceptual Channels (Triads of Experience) -->
    <div class="card-paper p-5 sm:p-7 rounded-2xl mt-8 space-y-4 border">
      <h3 class="font-display font-bold text-lg sm:text-xl" :style="{ color: 'var(--ink)' }">
        {{ t('ខ្សែចរន្តដឹងអារម្មណ៍ទាំង ៦ គូ (The 6 Triads of Perception)', 'The 6 Triads of Perception') }}
      </h3>
      <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('រាល់បទពិសោធន៍នៃជីវិត ត្រូវបានបង្កើតឡើងដោយការផ្គុំគ្នានៃធាតុ ៣ ក្នុងគូនីមួយៗ៖', 'Every moment of human experience is composed of the synergy between three elements in each channel:') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
        <div v-for="ch in channels" :key="ch.name" class="p-3.5 rounded-xl border space-y-1.5" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold" :style="{ color: 'var(--accent)' }">{{ ch.icon }} {{ t(ch.nameKm, ch.nameEn) }}</span>
            <span class="text-[10px] font-mono opacity-70">{{ ch.sense }}</span>
          </div>
          <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            <strong>{{ ch.triadKm }}</strong>
          </p>
          <p class="text-[11px] leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t(ch.insightKm, ch.insightEn) }}
          </p>
        </div>
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

const activeCat = ref('all')
const expandedId = ref(null)
function toggleExpand(id) { expandedId.value = expandedId.value === id ? null : id }

const categories = [
  { id: 'all', km: 'ធាតុទាំង ១៨', en: 'All 18 Elements', icon: '☸', count: 18 },
  { id: 'internal', km: 'ទ្វារក្នុង (៦)', en: 'Internal (6)', icon: '👁️', count: 6 },
  { id: 'external', km: 'អារម្មណ៍ក្រៅ (៦)', en: 'External (6)', icon: '🎨', count: 6 },
  { id: 'consciousness', km: 'វិញ្ញាណ (៦)', en: 'Consciousness (6)', icon: '🧠', count: 6 }
]

const dhatus = [
  // Internal 6
  { id: 1, group: 'internal', groupKm: 'ទ្វារក្នុង', groupEn: 'Internal Base', icon: '👁️', pali: 'Cakkhu-dhātu', nameKm: '១. ចក្ខុធាតុ (ធាតុភ្នែក)', nameEn: '1. Eye Element', descKm: 'ប្រសាទភ្នែកដែលថ្លា អាចចាប់យកពន្លឺនិងរូបារម្មណ៍។', descEn: 'Sensitive visual matter capable of receiving light and color.', typeKm: 'រូបធម៌ (ឧបាទាយរូប)', typeEn: 'Physical matter (Pasāda Rūpa)', roleKm: 'ជាទ្វារ និងជាទីតាំងអាស្រ័យនៃចក្ខុវិញ្ញាណ', roleEn: 'Base and door for eye-consciousness', detailKm: 'ចក្ខុធាតុ មិនមែនគ្រាប់ភ្នែកសាច់ទាំងមូលទេ តែជាកោសិកាប្រសាទភ្នែកដ៏ល្អិតដែលទទួលពន្លឺ។ វាកើតឡើងដោយកម្លាំងកម្មពីអតីតជាតិ។', detailEn: 'Refers specifically to the subtle sensitive eye-translucency that responds to visual stimuli.', insightKm: 'ពិចារណាថា ភ្នែកមិនមែនជាយើង មិនមែនជារបស់យើង កើតពីធាតុ ៤ និងកម្មចាស់ មិនទៀងទាត់ឡើយ។', insightEn: 'Contemplate: The eye is not me, not mine; conditioned by past karma and impermanent.' },
  { id: 2, group: 'internal', groupKm: 'ទ្វារក្នុង', groupEn: 'Internal Base', icon: '👂', pali: 'Sota-dhātu', nameKm: '២. សោតធាតុ (ធាតុត្រចៀក)', nameEn: '2. Ear Element', descKm: 'ប្រសាទត្រចៀកដែលថ្លា អាចចាប់យកសំឡេងនិងរលកសូរសព្ទ។', descEn: 'Sensitive auditory matter responsive to sound waves.', typeKm: 'រូបធម៌ (ឧបាទាយរូប)', typeEn: 'Physical matter (Pasāda Rūpa)', roleKm: 'ជាទ្វារ និងជាទីតាំងអាស្រ័យនៃសោតវិញ្ញាណ', roleEn: 'Base and door for ear-consciousness', detailKm: 'ជាធាតុធម្មជាតិដែលអនុញ្ញាតឱ្យការឮប្រព្រឹត្តទៅបាន។ កាលណាខូចសោតធាតុ ការឮក៏ត្រូវរលត់។', detailEn: 'The auditory sensitivity in the ear-canal enabling sound reception.', insightKm: 'សោតធាតុជាគ្រាន់តែជាឧបករណ៍ទទួលរលកសូរសព្ទ គ្មានអ្នកណាជាម្ចាស់ត្រចៀកពិតប្រាកដឡើយ។', insightEn: 'The ear is merely an organic receiver for sound waves, devoid of any soul.' },
  { id: 3, group: 'internal', groupKm: 'ទ្វារក្នុង', groupEn: 'Internal Base', icon: '👃', pali: 'Ghāna-dhātu', nameKm: '៣. ឃានធាតុ (ធាតុច្រមុះ)', nameEn: '3. Nose Element', descKm: 'ប្រសាទច្រមុះដែលថ្លា អាចស្រូបយកក្លិនគ្រប់បែបយ៉ាង។', descEn: 'Sensitive olfactory matter responsive to airborne odorants.', typeKm: 'រូបធម៌ (ឧបាទាយរូប)', typeEn: 'Physical matter', roleKm: 'ជាទ្វារ និងជាទីតាំងអាស្រ័យនៃឃានវិញ្ញាណ', roleEn: 'Base and door for nose-consciousness', detailKm: 'ប្រសាទដែលផ្សាយក្នុងរន្ធច្រមុះសម្រាប់ចាប់ក្លិនក្រអូប ក្លិនស្អុយជាដើម។', detailEn: 'Olfactory translucency lining the nasal cavities.', insightKm: 'ក្លិន និងច្រមុះកើតឡើងព្រមគ្នា ហើយរលត់ទៅវិញ គ្មានតួខ្លួនស្ថិតស្ថេរឡើយ។', insightEn: 'Nose and odor arise conditioned and dissolve without permanence.' },
  { id: 4, group: 'internal', groupKm: 'ទ្វារក្នុង', groupEn: 'Internal Base', icon: '👅', pali: 'Jivhā-dhātu', nameKm: '៤. ជិវ្ហាធាតុ (ធាតុអណ្តាត)', nameEn: '4. Tongue Element', descKm: 'ប្រសាទអណ្តាតដែលថ្លា អាចដឹងរសជាតិផ្អែម ជូរ ប្រៃ ល្វីង។', descEn: 'Sensitive gustatory matter responsive to chemical tastes.', typeKm: 'រូបធម៌ (ឧបាទាយរូប)', typeEn: 'Physical matter', roleKm: 'ជាទ្វារ និងជាទីតាំងអាស្រ័យនៃជិវ្ហាវិញ្ញាណ', roleEn: 'Base and door for tongue-consciousness', detailKm: 'ប្រសាទល្អិតៗនៅលើផ្ទៃអណ្តាតដែលទទួលដឹងរសអាហារ។', detailEn: 'Gustatory sensitivity on the surface of the tongue.', insightKm: 'រសជាតិគ្រាន់តែជាការប្តូរគីមី មិនមែនជាសេចក្តីសុខពិតប្រាកដដែលគួរលោភលន់ឡើយ។', insightEn: 'Taste is transient chemical interaction, unworthy of obsessive attachment.' },
  { id: 5, group: 'internal', groupKm: 'ទ្វារក្នុង', groupEn: 'Internal Base', icon: '🖐️', pali: 'Kāya-dhātu', nameKm: '៥. កាយធាតុ (ធាតុកាយ)', nameEn: '5. Body Element', descKm: 'ប្រសាទកាយដែលសាយភាយពេញសព្វសារពាង្គកាយទទួលដឹងការប៉ះពាល់។', descEn: 'Sensitive tactile matter pervading the entire physical frame.', typeKm: 'រូបធម៌ (ឧបាទាយរូប)', typeEn: 'Physical matter', roleKm: 'ជាទ្វារ និងជាទីតាំងអាស្រ័យនៃកាយវិញ្ញាណ', roleEn: 'Base and door for body-consciousness', detailKm: 'ប្រសាទទទួលដឹងកម្តៅ ត្រជាក់ រឹង ទន់ តឹង ធូរ ដែលមានពេញកាយ លើកលែងតែចុងសក់ ចុងក្រចក។', detailEn: 'Tactile sensitivity dispersed through the whole bodily system.', insightKm: 'កាយនេះជាកន្លែងកើតទុក្ខវេទនា គ្រាន់តែជាបណ្តុំកោសិកា មិនមែនជារបស់យើងឡើយ។', insightEn: 'The body is a vessel for feelings, an organic collection of cells, not "mine".' },
  { id: 6, group: 'internal', groupKm: 'ទ្វារក្នុង', groupEn: 'Internal Base', icon: '🧘', pali: 'Mano-dhātu', nameKm: '៦. មនោធាតុ (ធាតុមនោ)', nameEn: '6. Mind Element', descKm: 'ចិត្តដំបូងដែលទទួលអារម្មណ៍ (បញ្ចទ្វារាវជ្ជនៈ និងសម្បដិច្ឆន្នចិត្ត)។', descEn: 'Early mental receiving and turning-towards processes.', typeKm: 'នាមធម៌ (វិបាក និងកិរិយាចិត្ត ៣ ដួង)', typeEn: 'Mental phenomena', roleKm: 'បើកទ្វារទទួលដឹងអារម្មណ៍ទាំង ៥', roleEn: 'Adverting and receiving sense impressions', detailKm: 'មនោធាតុរួមមាន បញ្ចទ្វារាវជ្ជនចិត្ត ១ និង សម្បដិច្ឆន្នចិត្ត ២ ដែលជាដំណាក់កាលដំបូងនៃការរៀបចំទទួលអារម្មណ៍។', detailEn: 'Comprises five-door adverting consciousness and two receiving consciousnesses.', insightKm: 'ចិត្តនេះកើតឡើងដោយស្វ័យប្រវត្តិតាមលំដាប់វីថិចិត្ត គ្មានអ្នកបញ្ជាពីក្រោយឡើយ។', insightEn: 'This mind element functions autonomously through cognitive series without a controller.' },

  // External 6
  { id: 7, group: 'external', groupKm: 'អារម្មណ៍ក្រៅ', groupEn: 'External Object', icon: '🎨', pali: 'Rūpa-dhātu', nameKm: '៧. រូបធាតុ (ធាតុពណ៌/ពន្លឺ)', nameEn: '7. Visible Form Element', descKm: 'ពណ៌ និងរូបភាពដែលភ្នែកអាចមើលឃើញ។', descEn: 'Visible light, color, and visual forms.', typeKm: 'រូបធម៌ (វណ្ណរូប)', typeEn: 'Physical object', roleKm: 'ជាអារម្មណ៍របស់ចក្ខុវិញ្ញាណ', roleEn: 'Object of eye-consciousness', detailKm: 'ពណ៌ខៀវ លឿង ក្រហម ស ពន្លឺ ស្រមោល ដែលជាវត្ថុប៉ះទង្គិចនឹងប្រសាទភ្នែក។', detailEn: 'Colors, brightness, and shapes that reflect into the retina.', insightKm: 'រូបភាពគ្រាន់តែជាពន្លឺឆ្លុះ មិនគួរឱ្យចិត្តកើតរាគៈ ឬទោសៈតាមឡើយ។', insightEn: 'Visual forms are merely reflected light; do not cling with greed or aversion.' },
  { id: 8, group: 'external', groupKm: 'អារម្មណ៍ក្រៅ', groupEn: 'External Object', icon: '🎵', pali: 'Sadda-dhātu', nameKm: '៨. សទ្ទធាតុ (ធាតុសំឡេង)', nameEn: '8. Sound Element', descKm: 'សំឡេងគ្រប់បែបយ៉ាងដែលត្រចៀកអាចឮ។', descEn: 'Auditory vibrations and sounds.', typeKm: 'រូបធម៌ (សទ្ទរូប)', typeEn: 'Physical object', roleKm: 'ជាអារម្មណ៍របស់សោតវិញ្ញាណ', roleEn: 'Object of ear-consciousness', detailKm: 'សំឡេងមនុស្ស សត្វ ភ្លេង ខ្យល់ សំឡេងពិរោះ ឬមិនពិរោះ ដែលកើតហើយរលត់ទៅវិញភ្លាមៗ។', detailEn: 'Natural or articulate vocal sounds, music, and noise.', insightKm: 'ពាក្យជេរ ឬពាក្យសរសើរគ្រាន់តែជារលកសំឡេងប៉ះត្រចៀករួចរលត់សូន្យ កុំយកមកដុតចិត្ត។', insightEn: 'Praise and blame are fleeting vibrations hitting the ear and vanishing.' },
  { id: 9, group: 'external', groupKm: 'អារម្មណ៍ក្រៅ', groupEn: 'External Object', icon: '🌸', pali: 'Gandha-dhātu', nameKm: '៩. គន្ធធាតុ (ធាតុក្លិន)', nameEn: '9. Odor Element', descKm: 'ក្លិនគ្រប់បែបយ៉ាងដែលច្រមុះអាចស្រូបយក។', descEn: 'Molecules generating smell sensations.', typeKm: 'រូបធម៌ (គន្ធរូប)', typeEn: 'Physical object', roleKm: 'ជាអារម្មណ៍របស់ឃានវិញ្ញាណ', roleEn: 'Object of nose-consciousness', detailKm: 'ក្លិនក្រអូប ស្អុយ ឆ្អាប ក្រពុល ដែលសាយភាយក្នុងខ្យល់។', detailEn: 'Airborne scents and fragrances.', insightKm: 'ក្លិនកើតឡើងមួយរំពេចហើយរលត់ទៅ គ្មានអ្វីជាខ្លឹមសារដែលគួរជាប់ជំពាក់។', insightEn: 'Scents arise momentarily and dissipate, devoid of lasting essence.' },
  { id: 10, group: 'external', groupKm: 'អារម្មណ៍ក្រៅ', groupEn: 'External Object', icon: '🍯', pali: 'Rasa-dhātu', nameKm: '១០. រសធាតុ (ធាតុរស)', nameEn: '10. Taste Element', descKm: 'រសជាតិដែលអណ្តាតទទួលដឹង។', descEn: 'Chemical tastes experienced on the tongue.', typeKm: 'រូបធម៌ (រសរូប)', typeEn: 'Physical object', roleKm: 'ជាអារម្មណ៍របស់ជិវ្ហាវិញ្ញាណ', roleEn: 'Object of tongue-consciousness', detailKm: 'រសផ្អែម ជូរ ចត់ ហិរ ប្រៃ ផ្អែម ឆ្ងាញ់ ឬមិនឆ្ងាញ់។', detailEn: 'Sweetness, sourness, saltiness, bitterness, and umami.', insightKm: 'ឆ្ងាញ់ត្រឹមតែក កន្លងផុតកទៅ អ្វីៗក៏ក្លាយជាធាតុដដែល។', insightEn: 'Deliciousness exists only at the palate; once swallowed, it is mere matter.' },
  { id: 11, group: 'external', groupKm: 'អារម្មណ៍ក្រៅ', groupEn: 'External Object', icon: '🪨', pali: 'Phoṭṭhabba-dhātu', nameKm: '១១. ផោដ្ឋព្វធាតុ (ធាតុប៉ះពាល់)', nameEn: '11. Tangible Element', descKm: 'ធាតុដី (រឹង-ទន់), ធាតុភ្លើង (ក្តៅ-ត្រជាក់), និងធាតុខ្យល់ (តឹង-ធូរ)។', descEn: 'Earth (hardness), Fire (temperature), and Wind (pressure) elements.', typeKm: 'រូបធម៌ (មហាភូតរូប ៣ លើកលែងធាតុទឹក)', typeEn: 'Physical object (3 Great Elements)', roleKm: 'ជាអារម្មណ៍របស់កាយវិញ្ញាណ', roleEn: 'Object of body-consciousness', detailKm: 'ការប៉ះពាល់ផ្ទាល់នៃធាតុរឹង កម្តៅ និងសម្ពាធ ដែលកាយអាចដឹងបាន។ (ធាតុទឹកល្អិតពេក កាយមិនអាចប៉ះដឹងត្រង់ៗទេ)។', detailEn: 'Hardness, heat, cold, and motion directly felt through contact.', insightKm: 'ភាពស្រណុកសុខស្រួលខាងកាយគ្រាន់តែជាការប្តូរធាតុ កុំលង់ក្នុងកាមសុខ។', insightEn: 'Bodily comforts are momentary elemental balances; do not become addicted.' },
  { id: 12, group: 'external', groupKm: 'អារម្មណ៍ក្រៅ', groupEn: 'External Object', icon: '📚', pali: 'Dhamma-dhātu', nameKm: '១២. ធម្មធាតុ (ធាតុអារម្មណ៍នៃចិត្ត)', nameEn: '12. Mental Object Element', descKm: 'ចេតសិក ៥២, សុខុមរូប ១៦, និងព្រះនិព្វាន ដែលចិត្តអាចដឹងបាន។', descEn: 'Mental factors (52 Cetasikas), subtle matters (16), and Nibbāna.', typeKm: 'នាមធម៌ និងរូបធម៌ល្អិត និងអសង្ខតធម៌', typeEn: 'Subtle mental and physical phenomena, and Nibbāna', roleKm: 'ជាអារម្មណ៍របស់មនោវិញ្ញាណ', roleEn: 'Object of intellect/mind-consciousness', detailKm: 'ជាអារម្មណ៍ដែលកើតឡើងក្នុងគំនិត ការចងចាំ សេចក្តីស្រមើស្រមៃ ចេតសិក និងសច្ចធម៌និព្វាន។', detailEn: 'Thoughts, ideas, mental factors, mental imagery, and the unconditioned.', insightKm: 'គំនិតទាំងឡាយគ្រាន់តែជាធម្មធាតុ មិនមែនជា «ខ្ញុំគិត» ឡើយ។', insightEn: 'Thoughts are merely mental elements; there is no permanent "thinker".' },

  // Consciousness 6
  { id: 13, group: 'consciousness', groupKm: 'វិញ្ញាណដឹង', groupEn: 'Sense Consciousness', icon: '👀', pali: 'Cakkhu-viññāṇa-dhātu', nameKm: '១៣. ចក្ខុវិញ្ញាណធាតុ (វិញ្ញាណភ្នែក)', nameEn: '13. Eye-Consciousness Element', descKm: 'ចិត្តដែលដឹងរូបភាពតាមរយៈភ្នែក (២ ដួង៖ កុសលវិបាក និងអកុសលវិបាក)។', descEn: 'Visual consciousness arising dependent on eye and form.', typeKm: 'នាមធម៌ (ទ្វិបញ្ចវិញ្ញាណ)', typeEn: 'Consciousness (Citta)', roleKm: 'ដឹងគ្រាន់តែជាការឃើញសុទ្ធសាធ', roleEn: 'Pure visual registration without conceptualization', detailKm: 'ចិត្តដែលឃើញរូប កើតឡើងមួយខណៈ រួចរលត់ភ្លាមៗ។ វាមិនទាន់ដឹងថារូបនោះស្អាតឬអាក្រក់នៅឡើយទេ។', detailEn: 'Bare visual awareness lasting a split microsecond.', insightKm: '«ឃើញ គ្រាន់តែឃើញ» — កុំបន្តឱ្យចិត្តបង្កើតរឿងរ៉ាវស្រលាញ់ឬស្អប់។', insightEn: '"In the seen, let there be only the seen" — stop conceptual proliferation.' },
  { id: 14, group: 'consciousness', groupKm: 'វិញ្ញាណដឹង', groupEn: 'Sense Consciousness', icon: '🎧', pali: 'Sota-viññāṇa-dhātu', nameKm: '១៤. សោតវិញ្ញាណធាតុ (វិញ្ញាណត្រចៀក)', nameEn: '14. Ear-Consciousness Element', descKm: 'ចិត្តដែលដឹងសំឡេងតាមរយៈត្រចៀក (២ ដួង)។', descEn: 'Auditory consciousness arising dependent on ear and sound.', typeKm: 'នាមធម៌', typeEn: 'Consciousness', roleKm: 'ដឹងគ្រាន់តែជាការឮសុទ្ធសាធ', roleEn: 'Pure auditory registration', detailKm: 'ការដឹងនូវសូរសព្ទដែលប៉ះនឹងត្រចៀក កើតឡើងដោយគ្មានចេតនារារាំងបានឡើយ។', detailEn: 'Bare sound awareness arising automatically upon contact.', insightKm: '«ឮ គ្រាន់តែឮ» — ការមិនជាប់នឹងពាក្យសម្តីនាំមកនូវសេចក្តីស្ងប់។', insightEn: '"In the heard, let there be only the heard" — detachment brings peace.' },
  { id: 15, group: 'consciousness', groupKm: 'វិញ្ញាណដឹង', groupEn: 'Sense Consciousness', icon: '🌿', pali: 'Ghāna-viññāṇa-dhātu', nameKm: '១៥. ឃានវិញ្ញាណធាតុ (វិញ្ញាណច្រមុះ)', nameEn: '15. Nose-Consciousness Element', descKm: 'ចិត្តដែលដឹងក្លិនតាមរយៈច្រមុះ (២ ដួង)។', descEn: 'Olfactory consciousness arising dependent on nose and odor.', typeKm: 'នាមធម៌', typeEn: 'Consciousness', roleKm: 'ដឹងគ្រាន់តែជាក្លិនសុទ្ធសាធ', roleEn: 'Bare olfactory awareness', detailKm: 'ចិត្តដឹងក្លិនមួយរំពេច រួចរលត់បាត់ទៅក្នុងអតីតកាល។', detailEn: 'Instantaneous awareness of odors, dissolving immediately.', insightKm: 'ក្លិនមិនអាចធ្វើបាបយើងទេ គឺចិត្តយើងទេដែលជាប់ជំពាក់នឹងក្លិន។', insightEn: 'Odors cannot harm; it is our craving and reaction that ensnare us.' },
  { id: 16, group: 'consciousness', groupKm: 'វិញ្ញាណដឹង', groupEn: 'Sense Consciousness', icon: '🍲', pali: 'Jivhā-viññāṇa-dhātu', nameKm: '១៦. ជិវ្ហាវិញ្ញាណធាតុ (វិញ្ញាណអណ្តាត)', nameEn: '16. Tongue-Consciousness Element', descKm: 'ចិត្តដែលដឹងរសតាមរយៈអណ្តាត (២ ដួង)។', descEn: 'Gustatory consciousness arising dependent on tongue and taste.', typeKm: 'នាមធម៌', typeEn: 'Consciousness', roleKm: 'ដឹងគ្រាន់តែជារសសុទ្ធសាធ', roleEn: 'Bare taste awareness', detailKm: 'ការដឹងរសដែលកើតឡើងនៅពេលអាហារប៉ះអណ្តាត មិនមែនជាអត្តនោម័តិរបស់អ្នកណាឡើយ។', detailEn: 'The cognition of taste arising naturally upon ingestion.', insightKm: 'បរិភោគអាហារដើម្បីទ្រទ្រង់ជីវិត កុំបរិភោគដោយតណ្ហានិងការស្រវឹងនឹងរស។', insightEn: 'Eat to sustain the body for practice, not for drunken sensory indulgence.' },
  { id: 17, group: 'consciousness', groupKm: 'វិញ្ញាណដឹង', groupEn: 'Sense Consciousness', icon: '⚡', pali: 'Kāya-viññāṇa-dhātu', nameKm: '១៧. កាយវិញ្ញាណធាតុ (វិញ្ញាណកាយ)', nameEn: '17. Body-Consciousness Element', descKm: 'ចិត្តដែលដឹងការប៉ះពាល់តាមកាយ (២ ដួង៖ សុខសហគត និងទុក្ខសហគត)។', descEn: 'Tactile consciousness feeling bodily pleasure and pain.', typeKm: 'នាមធម៌', typeEn: 'Consciousness', roleKm: 'ដឹងការប៉ះពាល់ផ្លូវកាយ', roleEn: 'Tactile perception', detailKm: 'ជាវិញ្ញាណតែមួយគត់ក្នុងចំណោមវិញ្ញាណ ៥ ដំបូង ដែលកើតរួមជាមួយ «សុខវេទនា» ឬ «ទុក្ខវេទនា» ច្បាស់ៗ (ឯ ៤ ទៀតកើតជាមួយឧបេក្ខា)។', detailEn: 'The only primary sense consciousness associated with direct bodily pleasure or pain.', insightKm: 'ទុក្ខវេទនាលើកាយគ្រាន់តែជាកាយវិញ្ញាណ កុំឱ្យចិត្តរងទុក្ខតាមកាយ។', insightEn: 'Physical pain is merely body-consciousness; do not let the mind suffer with it.' },
  { id: 18, group: 'consciousness', groupKm: 'វិញ្ញាណដឹង', groupEn: 'Sense Consciousness', icon: '💎', pali: 'Mano-viññāṇa-dhātu', nameKm: '១៨. មនោវិញ្ញាណធាតុ (វិញ្ញាណចិត្ត)', nameEn: '18. Mind-Consciousness Element', descKm: 'ចិត្តដឹងគំនិត វិភាគ សញ្ជឹងគិត សមាធិ និងបញ្ញា (ចិត្ត ៧៦ ដួងដែលនៅសល់)។', descEn: 'Intellectual, introspective, reflective, and meditative consciousness.', typeKm: 'នាមធម៌ (ចិត្តភាគច្រើនក្នុង ៨៩/១២១ ដួង)', typeEn: 'Higher cognitive consciousness', roleKm: 'ដឹងគំនិត វិភាគ សម្រេច និងដឹងព្រះនិព្វាន', roleEn: 'Cognitive processing, reasoning, deep meditation, awakening', detailKm: 'ជាវិញ្ញាណដ៏ទូលំទូលាយបំផុត ដែលអាចដឹងអតីត អនាគត បច្ចុប្បន្ន អាចចម្រើនឈាន និងអាចសម្រេចមគ្គផលនិព្វាន។', detailEn: 'The vast realm of mental consciousness capable of wisdom, meditation, and Nibbāna.', insightKm: 'ចិត្តទាំងមូលជាអនត្តា កើតតាមហេតុ រលត់តាមបច្ច័យ គ្មានម្ចាស់ឡើយ។', insightEn: 'All mental consciousness is not-self, arising by conditions, ownerless.' }
]

const channels = [
  { icon: '👁️', nameKm: 'ខ្សែចក្ខុ (ការមើលឃើញ)', nameEn: 'Visual Channel', sense: 'Eye', triadKm: 'ចក្ខុធាតុ + រូបធាតុ + ចក្ខុវិញ្ញាណធាតុ', insightKm: 'មានតែពន្លឺនិងប្រសាទប៉ះគ្នា កើតជាការឃើញ គ្មានមនុស្សណាអង្គុយមើលក្នុងភ្នែកឡើយ។', insightEn: 'Pure visual process devoid of an internal viewer.' },
  { icon: '👂', nameKm: 'ខ្សែសោតៈ (ការឮសូរ)', nameEn: 'Auditory Channel', sense: 'Ear', triadKm: 'សោតធាតុ + សទ្ទធាតុ + សោតវិញ្ញាណធាតុ', insightKm: 'មានតែរលកសំឡេងប៉ះប្រសាទ គ្មានអ្នកស្តាប់ដែលជាអមតៈឡើយ។', insightEn: 'Sound meeting ear-sensitivity without an immortal listener.' },
  { icon: '👃', nameKm: 'ខ្សែឃានៈ (ការស្រូបក្លិន)', nameEn: 'Olfactory Channel', sense: 'Nose', triadKm: 'ឃានធាតុ + គន្ធធាតុ + ឃានវិញ្ញាណធាតុ', insightKm: 'ក្លិនកើតឡើងមួយរំពេចហើយរលត់ទៅជាធម្មជាតិ។', insightEn: 'Scent molecules interacting and dissolving.' },
  { icon: '👅', nameKm: 'ខ្សែជិវ្ហា (ការដឹងរស)', nameEn: 'Gustatory Channel', sense: 'Tongue', triadKm: 'ជិវ្ហាធាតុ + រសធាតុ + ជិវ្ហាវិញ្ញាណធាតុ', insightKm: 'រសជាតិគ្រាន់តែជាការប៉ះពាល់លើអណ្តាត កុំជាប់ជំពាក់។', insightEn: 'Chemical contact on taste buds without a permanent self.' },
  { icon: '🖐️', nameKm: 'ខ្សែសរីរៈ (ការប៉ះពាល់)', nameEn: 'Tactile Channel', sense: 'Body', triadKm: 'កាយធាតុ + ផោដ្ឋព្វធាតុ + កាយវិញ្ញាណធាតុ', insightKm: 'រឹង ក្តៅ ត្រជាក់ កើតឡើងលើកាយធាតុ ចិត្តត្រូវរក្សាឧបេក្ខា។', insightEn: 'Pressure, heat, and cold registered with equanimity.' },
  { icon: '🧠', nameKm: 'ខ្សែមនោ (ការគិតពិចារណា)', nameEn: 'Mental Channel', sense: 'Mind', triadKm: 'មនោធាតុ + ធម្មធាតុ + មនោវិញ្ញាណធាតុ', insightKm: 'គំនិតកើតឡើងដោយអាស្រ័យការចងចាំ គ្មាន «ខ្ញុំ» ណាជាអ្នកគិតឡើយ។', insightEn: 'Thoughts conditioned by memory without an ego-thinker.' }
]

const filteredDhatu = computed(() => {
  if (activeCat.value === 'all') return dhatus
  return dhatus.filter(d => d.group === activeCat.value)
})

const activeDhatuIndex = computed(() => {
  if (!activeDhatu.value) return 0
  const idx = filteredDhatu.value.findIndex(d => d.id === activeDhatu.value.id)
  return idx !== -1 ? idx : 0
})

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
