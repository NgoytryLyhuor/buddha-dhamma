<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('កម្មដ្ឋាន & វិបស្សនា — អានាបានសតិ ១៦ ដំណាក់កាល', 'MEDITATION & INSIGHT — 16 STEPS OF MINDFUL BREATHING') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('អានាបានសតិ ១៦ ដំណាក់កាល (MN 118)', 'The Sixteen Steps of Ānāpānasati (Mindfulness of Breathing)') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <div class="verse-box p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif italic text-base md:text-lg leading-relaxed text-center" :style="{ color: 'var(--ink)' }">
        {{ t('«អានាបានសតិ, ភិក្ខវេ, ភាវិតា ពហុលីកតា ចត្តារោ សតិបដ្ឋានេ បរិបូរេតិ...»', '«Mindfulness of breathing, bhikkhus, when developed and cultivated, fulfills the four foundations of mindfulness...»') }}
      </p>
      <p class="text-xs md:text-sm mt-2 text-center" :style="{ color: 'var(--ink-muted)' }">
        {{ t('— អានាបានសតិសូត្រ (Majjhima Nikāya 118)', '— Ānāpānasati Sutta (Majjhima Nikāya 118)') }}
      </p>
    </div>

    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('អានាបានសតិ គឺជាកម្មដ្ឋានរាជ (ស្តេចនៃកម្មដ្ឋាន) ដែលព្រះសម្មាសម្ពុទ្ធគ្រប់ព្រះអង្គទ្រង់ប្រើប្រាស់ដើម្បីសម្រេចអនុត្តរសម្មាសម្ពោធិញាណក្រោមគល់ពោធិព្រឹក្ស។ ព្រះពុទ្ធទ្រង់ត្រាស់ថា អានាបានសតិដែលបានចម្រើនឱ្យបរិបូរណ៍ រមែងបំពេញនូវ «សតិបដ្ឋាន ៤», សតិបដ្ឋាន ៤ បំពេញនូវ «ពោជ្ឈង្គ ៧», ហើយពោជ្ឈង្គ ៧ បំពេញនូវ «វិជ្ជា និងវិមុត្តិ (ការត្រាស់ដឹង និងការរួចផុតទុក្ខ)»។ ខាងក្រោមនេះជាឧបករណ៍ចលនាដង្ហើមតាមចង្វាក់ និងសេចក្តីពន្យល់ពិស្ដារនៃដំណាក់កាលទាំង ១៦។', 'Mindfulness of breathing is the crown jewel of Buddhist meditation, the vehicle through which all Buddhas attained awakening beneath the Bodhi tree. The Buddha taught that mindfulness of breathing fulfills the 4 Foundations of Mindfulness (Satipaṭṭhāna), which fulfill the 7 Factors of Awakening (Bojjhaṅga), which in turn bring about True Knowledge and Final Liberation (Vijjā-Vimutti). Explore the interactive breathing guide and the 16 progressive stages below.') }}
    </p>

    <!-- 1. Interactive Guided Breath Pacer Console -->
    <div class="card-paper p-6 md:p-8 mt-8 max-w-xl mx-auto text-center border-2"
      :style="{ borderColor: isPacing ? 'var(--accent-bright)' : 'var(--border)' }">
      
      <div class="flex items-center justify-between gap-2 text-xs mb-4 flex-wrap">
        <span class="chapter-label m-0 font-bold">{{ t('ឧបករណ៍ហាត់ដកដង្ហើមតាមចង្វាក់', 'BREATH PACER') }}</span>
        <button class="font-btn px-2.5 py-1 text-xs flex items-center gap-1.5" @click="soundEnabled = !soundEnabled">
          <span>{{ soundEnabled ? '🔔' : '🔕' }}</span>
          <span>{{ soundEnabled ? t('ជួង៖ បើក', 'Chime: ON') : t('ជួង៖ បិទ', 'Chime: OFF') }}</span>
        </button>
      </div>

      <!-- Animated Breathing Visual Circle -->
      <div class="my-6 flex flex-col items-center justify-center">
        <div
          class="w-48 h-48 sm:w-56 sm:h-56 rounded-full flex flex-col items-center justify-center transition-all duration-1000 select-none shadow-inner"
          :style="breathingCircleStyle"
        >
          <span class="text-base sm:text-lg font-display font-bold tracking-wide" :style="{ color: 'var(--ink)' }">
            {{ t(breathPhaseKm, breathPhaseEn) }}
          </span>
          <span class="text-2xl sm:text-3xl font-light mt-1 font-mono" :style="{ color: 'var(--accent)' }">
            {{ breathSecondsLeft }}s
          </span>
          <span class="text-[10px] mt-1 uppercase tracking-widest" :style="{ color: 'var(--ink-muted)' }">
            {{ isPacing ? t('សូមតាមដានខ្យល់ដង្ហើម', 'Be mindful of breath') : t('ចុចដើម្បីចាប់ផ្តើម', 'Press Start') }}
          </span>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex items-center justify-center gap-3 mt-4">
        <button
          type="button"
          class="install-btn px-6 py-2.5 text-sm font-bold shadow-md"
          @click="togglePacer"
        >
          {{ isPacing ? t('ផ្អាក', 'Pause') : t('ចាប់ផ្តើមចលនាដង្ហើម', 'Start Breath Pacer') }}
        </button>
        <button
          type="button"
          class="font-btn px-4 py-2.5 text-xs font-semibold"
          @click="resetPacer"
        >
          {{ t('កំណត់ឡើងវិញ', 'Reset') }}
        </button>
      </div>

      <!-- Rhythm Presets -->
      <div class="mt-6 pt-4 border-t border-dashed" :style="{ borderColor: 'var(--border)' }">
        <p class="text-[10px] font-bold tracking-wider uppercase mb-2" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ជ្រើសរើសចង្វាក់ដង្ហើម (Rhythm Preset)', 'Select Breathing Rhythm') }}
        </p>
        <div class="flex items-center justify-center gap-2 flex-wrap">
          <button
            v-for="preset in presets"
            :key="preset.id"
            class="lang-pick px-3 py-1 text-xs"
            :class="selectedPresetId === preset.id ? 'on' : ''"
            @click="selectPreset(preset)"
          >
            {{ t(preset.km, preset.en) }}
          </button>
        </div>
      </div>
    </div>

    <!-- 2. The 4 Tetrads and 16 Stages Explorer -->
    <div class="mt-10 space-y-8">
      <div class="flex items-center justify-between gap-3">
        <div>
          <h3 class="font-display text-2xl md:text-3xl" :style="{ color: 'var(--ink)' }">
            {{ t('ចតុក្កៈទាំង ៤ និង ១៦ ដំណាក់កាល', 'The 4 Tetrads & 16 Progressive Stages') }}
          </h3>
          <p class="text-xs mt-1" :style="{ color: 'var(--ink-muted)' }">
            {{ t('រៀបតាមលំដាប់លំដោយពីកម្រិតដំបូង (សមថៈ) រហូតដល់ការត្រាស់ដឹង (វិបស្សនា)។ ចុចលើដំណាក់កាលណាមួយដើម្បីពិនិត្យលម្អិត។', 'Structured systematically from basic calming absorption to transcendent insight. Tap any step to inspect.') }}
          </p>
        </div>
      </div>

      <!-- Loop through 4 Tetrads -->
      <div v-for="tetrad in tetrads" :key="tetrad.id" class="card-paper p-5 md:p-6 space-y-4">
        <div class="flex items-center justify-between gap-2 border-b pb-3 flex-wrap" :style="{ borderColor: 'var(--border)' }">
          <div class="flex items-center gap-2.5">
            <span class="text-2xl">{{ tetrad.icon }}</span>
            <div>
              <span class="text-[10px] font-bold tracking-wider uppercase" :style="{ color: 'var(--accent)' }">
                {{ t(tetrad.pali, tetrad.paliEn) }}
              </span>
              <h4 class="font-display text-lg md:text-xl font-bold" :style="{ color: 'var(--ink)' }">
                {{ t(tetrad.km, tetrad.en) }}
              </h4>
            </div>
          </div>
          <span class="text-xs font-mono px-2 py-0.5 rounded" :style="{ background: 'var(--bg-card-2)', color: 'var(--ink-muted)' }">
            {{ t(tetrad.satipatthanaKm, tetrad.satipatthanaEn) }}
          </span>
        </div>

        <!-- 4 Steps in this Tetrad -->
        <div class="grid sm:grid-cols-2 gap-3 pt-1">
          <div
            v-for="step in tetrad.steps"
            :key="step.num"
            class="p-4 rounded-lg cursor-pointer transition hover:border-amber-600 hover:shadow-md flex flex-col justify-between"
            :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }"
            @click="openModal(step)"
          >
            <div>
              <div class="flex items-baseline justify-between gap-2">
                <span class="sutra-num font-bold text-xs" :style="{ color: 'var(--accent-bright)' }">
                  #{{ khNum(step.num) }}
                </span>
                <span class="paali text-xs font-serif">{{ step.plShort }}</span>
              </div>

              <h5 class="font-display text-base font-bold mt-1.5" :style="{ color: 'var(--ink)' }">
                {{ t(step.km, step.en) }}
              </h5>

              <p class="text-xs mt-1.5 leading-relaxed line-clamp-2" :style="{ color: 'var(--ink-soft)' }">
                {{ t(step.shortKm, step.shortEn) }}
              </p>
            </div>

            <div class="mt-3 pt-2 text-[11px] flex items-center justify-between border-t border-dashed"
              :style="{ borderColor: 'var(--border)', color: 'var(--ink-muted)' }">
              <span>{{ t(step.focusKm, step.focusEn) }}</span>
              <span class="font-bold text-amber-700">{{ t('ពិនិត្យលម្អិត', 'Details') }} →</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. The Grand Chain: Anapanasati -> Satipatthana -> Bojjhanga -> Nibbana -->
    <div class="card-paper p-6 md:p-8 mt-8" :style="{ borderColor: 'var(--accent)', background: 'var(--accent-soft)' }">
      <div class="flex items-center gap-2">
        <span class="text-xl">🏆</span>
        <p class="chapter-label m-0">{{ t('ខ្សែចង្វាក់នៃការត្រាស់ដឹង', 'THE CULMINATION OF THE PRACTICE') }}</p>
      </div>
      <h3 class="font-display text-xl md:text-2xl mt-2" :style="{ color: 'var(--ink)' }">
        {{ t('តើអានាបានសតិនាំទៅដល់ការរួចផុតទុក្ខយ៉ាងដូចម្តេច?', 'How Ānāpānasati Leads to Ultimate Liberation') }}
      </h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រះពុទ្ធទ្រង់សម្តែងយ៉ាងច្បាស់លាស់ថា មិនចាំបាច់រៀនកម្មដ្ឋានរាប់រយប្រភេទទេ ត្រឹមតែអានាបានសតិមួយ គឺគ្រប់គ្រាន់ក្នុងការសម្រេចព្រះនិព្វាន ដោយឆ្លងកាត់ ៤ ដំណាក់កាលធំៗ៖', 'The Buddha made it indisputable that one need not master hundreds of different methods: mindfulness of breathing alone is completely sufficient to attain full Nibbāna through these four master fulfillments:') }}
      </p>

      <div class="grid sm:grid-cols-4 gap-3 mt-4">
        <div class="p-3.5 rounded-lg text-center" :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)' }">
          <p class="text-xs font-bold" :style="{ color: 'var(--accent)' }">១. អានាបានសតិ</p>
          <p class="text-[11px] mt-1" :style="{ color: 'var(--ink-muted)' }">ដង្ហើម ១៦ ដំណាក់កាល</p>
        </div>
        <div class="p-3.5 rounded-lg text-center" :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)' }">
          <p class="text-xs font-bold" :style="{ color: 'var(--accent)' }">២. សតិបដ្ឋាន ៤</p>
          <p class="text-[11px] mt-1" :style="{ color: 'var(--ink-muted)' }">កាយ វេទនា ចិត្ត ធម៌</p>
        </div>
        <div class="p-3.5 rounded-lg text-center" :style="{ background: 'var(--bg-card)', border: '1px solid var(--border)' }">
          <p class="text-xs font-bold" :style="{ color: 'var(--accent)' }">៣. ពោជ្ឈង្គ ៧</p>
          <p class="text-[11px] mt-1" :style="{ color: 'var(--ink-muted)' }">អង្គនៃការត្រាស់ដឹង</p>
        </div>
        <div class="p-3.5 rounded-lg text-center" :style="{ background: 'var(--accent-bright)', color: '#ffffff' }">
          <p class="text-xs font-bold">៤. វិជ្ជា និងវិមុត្តិ</p>
          <p class="text-[11px] mt-1 opacity-90">ព្រះនិព្វានបរមសុខ</p>
        </div>
      </div>
    </div>

    <!-- Modal Pop-up for Detailed Step Inspection -->
    <Teleport to="body">
      <transition name="modal-pop">
        <div
          v-if="activeModalStep"
          class="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5"
          style="background: rgba(0, 0, 0, 0.65); backdrop-filter: blur(4px);"
          @click.self="closeModal"
          role="dialog"
          aria-modal="true"
        >
          <div
            class="card-paper relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-xl overflow-hidden shadow-2xl border-2"
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
                  #{{ khNum(activeModalStep.num) }}
                </span>
                <span class="paali text-sm font-serif">{{ activeModalStep.plShort }}</span>
                <span
                  class="text-[11px] px-2.5 py-0.5 rounded-full font-medium"
                  :style="{ background: 'var(--bg-card)', color: 'var(--ink-muted)', border: '1px solid var(--border)' }"
                >
                  {{ t(activeModalStep.tetradKm, activeModalStep.tetradEn) }}
                </span>
              </div>

              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold px-2 py-0.5 rounded" :style="{ background: 'var(--bg-card)', color: 'var(--ink-muted)' }">
                  {{ activeModalStep.num }} / 16
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

            <!-- Modal Content -->
            <div class="p-5 sm:p-6 overflow-y-auto space-y-4">
              <div>
                <h3 class="font-display text-2xl sm:text-3xl" :style="{ color: 'var(--ink)' }">
                  {{ t(activeModalStep.km, activeModalStep.en) }}
                </h3>
                <p class="paali text-sm mt-1" :style="{ color: 'var(--accent)' }">
                  «{{ activeModalStep.paliFormula }}»
                </p>
              </div>

              <!-- Explanation & Meaning -->
              <div class="p-4 rounded-lg" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
                <p class="text-[11px] font-bold uppercase tracking-wider mb-1" :style="{ color: 'var(--accent)' }">
                  {{ t('អត្ថន័យ និងគោលបំណង (Meaning & Purpose)', 'Explanation & Sutta Meaning') }}
                </p>
                <p class="text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                  {{ t(activeModalStep.longKm, activeModalStep.longEn) }}
                </p>
              </div>

              <!-- Practical Meditation Instruction -->
              <div class="p-4 rounded-lg" :style="{ background: 'var(--accent-soft)', border: '1px dashed var(--accent)' }">
                <p class="text-[11px] font-bold uppercase tracking-wider mb-1.5" :style="{ color: 'var(--accent-bright)' }">
                  🧘 {{ t('របៀបអនុវត្តជាក់ស្តែងក្នុងចិត្ត (Practical Mental Instruction)', 'Practical Meditation Guide') }}
                </p>
                <p class="text-xs leading-relaxed font-medium" :style="{ color: 'var(--ink)' }">
                  {{ t(activeModalStep.instructionKm, activeModalStep.instructionEn) }}
                </p>
              </div>

              <!-- Samatha vs Vipassana Shift -->
              <div class="p-3.5 rounded-lg" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
                <p class="text-[10px] font-bold uppercase tracking-wider mb-1" :style="{ color: 'var(--ink-muted)' }">
                  ⚖️ {{ t('ការផ្លាស់ប្តូរពីសមថៈ ទៅវិបស្សនា (Samatha to Vipassanā)', 'Samatha & Vipassanā Aspect') }}
                </p>
                <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
                  {{ t(activeModalStep.shiftKm, activeModalStep.shiftEn) }}
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
                @click="prevStep"
              >
                <span>‹</span>
                <span>{{ t('ដំណាក់កាលមុន', 'Previous') }}</span>
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
                @click="nextStep"
              >
                <span>{{ t('ដំណាក់កាលបន្ទាប់', 'Next') }}</span>
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

// Pacer state
const isPacing = ref(false)
const soundEnabled = ref(true)
const breathPhase = ref('inhale') // 'inhale', 'hold', 'exhale', 'rest'
const breathSecondsLeft = ref(4)
const selectedPresetId = ref('balance')
let pacerTimer = null

const presets = [
  { id: 'balance', km: 'ធម្មតា (៤s ចូល - ៤s ចេញ)', en: 'Equal (4s in - 4s out)', inhale: 4, hold: 0, exhale: 4, rest: 0 },
  { id: 'box', km: 'ការ៉េ ៤-៤-៤ (Box 4s)', en: 'Box (4s in - 4s hold - 4s out)', inhale: 4, hold: 4, exhale: 4, rest: 0 },
  { id: 'relax', km: 'ស្ងប់ជ្រៅ (៤s ចូល - ៦s ចេញ)', en: 'Relax (4s in - 2s hold - 6s out)', inhale: 4, hold: 2, exhale: 6, rest: 0 },
]

const currentPreset = computed(() => presets.find(p => p.id === selectedPresetId.value) || presets[0])

const breathPhaseKm = computed(() => {
  if (breathPhase.value === 'inhale') return 'ដកដង្ហើមចូល... (Inhale)'
  if (breathPhase.value === 'hold') return 'រក្សាដង្ហើម... (Hold)'
  if (breathPhase.value === 'exhale') return 'ដកដង្ហើមចេញ... (Exhale)'
  return 'សម្រាក... (Rest)'
})

const breathPhaseEn = computed(() => {
  if (breathPhase.value === 'inhale') return 'Breathe in slowly...'
  if (breathPhase.value === 'hold') return 'Hold gently...'
  if (breathPhase.value === 'exhale') return 'Breathe out slowly...'
  return 'Rest...'
})

const breathingCircleStyle = computed(() => {
  if (!isPacing.value) {
    return {
      transform: 'scale(1)',
      background: 'var(--bg-card)',
      border: '4px solid var(--border)',
    }
  }
  if (breathPhase.value === 'inhale') {
    return {
      transform: 'scale(1.15)',
      background: 'var(--accent-soft)',
      border: '4px solid var(--accent)',
    }
  } else if (breathPhase.value === 'hold') {
    return {
      transform: 'scale(1.15)',
      background: 'var(--accent-soft)',
      border: '4px dashed var(--accent-bright)',
    }
  } else if (breathPhase.value === 'exhale') {
    return {
      transform: 'scale(0.92)',
      background: 'var(--bg-card-2)',
      border: '4px solid var(--border)',
    }
  }
  return {
    transform: 'scale(0.92)',
    background: 'var(--bg-card-2)',
    border: '4px solid var(--border)',
  }
})

// Web Audio API Gentle Chime
function playChime() {
  if (!soundEnabled.value) return
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    if (!AudioCtx) return
    const ctx = new AudioCtx()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(528, ctx.currentTime) // 528Hz peaceful chime
    gain.gain.setValueAtTime(0.2, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 1.2)
  } catch (err) {
    console.warn('Audio chime error:', err)
  }
}

function selectPreset(preset) {
  selectedPresetId.value = preset.id
  resetPacer()
}

function togglePacer() {
  if (isPacing.value) {
    pausePacer()
  } else {
    startPacer()
  }
}

function startPacer() {
  isPacing.value = true
  if (breathSecondsLeft.value <= 0) {
    breathPhase.value = 'inhale'
    breathSecondsLeft.value = currentPreset.value.inhale
  }
  playChime()
  runPacerTick()
}

function pausePacer() {
  isPacing.value = false
  if (pacerTimer) clearInterval(pacerTimer)
}

function resetPacer() {
  pausePacer()
  breathPhase.value = 'inhale'
  breathSecondsLeft.value = currentPreset.value.inhale
}

function runPacerTick() {
  if (pacerTimer) clearInterval(pacerTimer)
  pacerTimer = setInterval(() => {
    if (!isPacing.value) return
    breathSecondsLeft.value--
    if (breathSecondsLeft.value <= 0) {
      advanceBreathPhase()
    }
  }, 1000)
}

function advanceBreathPhase() {
  const p = currentPreset.value
  if (breathPhase.value === 'inhale') {
    if (p.hold > 0) {
      breathPhase.value = 'hold'
      breathSecondsLeft.value = p.hold
    } else {
      breathPhase.value = 'exhale'
      breathSecondsLeft.value = p.exhale
      playChime()
    }
  } else if (breathPhase.value === 'hold') {
    breathPhase.value = 'exhale'
    breathSecondsLeft.value = p.exhale
    playChime()
  } else if (breathPhase.value === 'exhale') {
    if (p.rest > 0) {
      breathPhase.value = 'rest'
      breathSecondsLeft.value = p.rest
    } else {
      breathPhase.value = 'inhale'
      breathSecondsLeft.value = p.inhale
      playChime()
    }
  } else {
    breathPhase.value = 'inhale'
    breathSecondsLeft.value = p.inhale
    playChime()
  }
}

// Modal Inspector State
const activeModalStep = ref(null)

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  return String(n).split('').map(d => khDigits[Number(d)] ?? d).join('')
}

function openModal(step) {
  activeModalStep.value = step
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

function closeModal() {
  activeModalStep.value = null
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

const allSteps = computed(() => tetrads.flatMap(t => t.steps))

function nextStep() {
  if (!activeModalStep.value) return
  const list = allSteps.value
  const idx = list.findIndex(s => s.num === activeModalStep.value.num)
  if (idx !== -1) {
    activeModalStep.value = list[(idx + 1) % list.length]
  }
}

function prevStep() {
  if (!activeModalStep.value) return
  const list = allSteps.value
  const idx = list.findIndex(s => s.num === activeModalStep.value.num)
  if (idx !== -1) {
    activeModalStep.value = list[(idx - 1 + list.length) % list.length]
  }
}

function handleKeyDown(e) {
  if (!activeModalStep.value) return
  if (e.key === 'Escape') closeModal()
  else if (e.key === 'ArrowRight') nextStep()
  else if (e.key === 'ArrowLeft') prevStep()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  if (pacerTimer) clearInterval(pacerTimer)
  window.removeEventListener('keydown', handleKeyDown)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})

// 16 Stages Master Dataset
const tetrads = [
  {
    id: 'kaya',
    icon: '🧘',
    pali: 'បឋមចតុក្កៈ — កាយានុបស្សនា',
    paliEn: 'FIRST TETRAD — CONTEMPLATION OF BODY',
    km: 'កាយានុបស្សនា (ដំណាក់កាល ១–៤)',
    en: 'Contemplation of the Body (Steps 1–4)',
    satipatthanaKm: 'កាយានុបស្សនាសតិបដ្ឋាន',
    satipatthanaEn: 'Body Mindfulness',
    steps: [
      {
        num: 1,
        plShort: 'Dīghaṃ Assasāmi',
        km: '១. ដង្ហើមវែង (Long Breath)',
        en: '1. Breathing In & Out Long',
        tetradKm: 'កាយានុបស្សនា',
        tetradEn: '1st Tetrad: Body',
        focusKm: 'សមថៈ (ការស្ងប់)',
        focusEn: 'Samatha (Calming)',
        paliFormula: 'ទីឃំ វា អស្សសន្តោ «ទីឃំ អស្សសាមី»តិ បជានាតិ...',
        shortKm: 'ដកដង្ហើមចេញចូលវែង ដឹងច្បាស់ថា «ដកដង្ហើមវែង»។',
        shortEn: 'Breathing in or out long, discerning clearly: "I am breathing long."',
        longKm: 'នៅពេលទើបចាប់ផ្តើមអង្គុយសមាធិ ដង្ហើមច្រើនតែវែង ធ្ងន់ ឬជ្រៅ។ ព្រះពុទ្ធទ្រង់ណែនាំឱ្យ «ដឹងច្បាស់» នូវសភាពដង្ហើមតាមធម្មជាតិ កុំបង្ខំ កុំទប់ គ្រាន់តែដឹងថាដង្ហើមវែង។ ឧបមាដូចជាជាងក្រឡឹងឈើ បើក្រឡឹងវែង ក៏ដឹងថាវែង។',
        longEn: 'When sitting begins, breathing is naturally deep, long, or coarse. The instruction is purely to discern and know it as it naturally is, without forcing or altering. Like a skilled turner making a long turn knows: "I make a long turn."',
        instructionKm: 'តម្កល់ស្មារតីនៅត្រង់ចុងច្រមុះ ឬបបូរមាត់ខាងលើ។ តាមដានខ្យល់ដង្ហើមតាំងពីដើម កណ្តាល រហូតដល់ចុងបញ្ចប់នៃដង្ហើមវែង។',
        instructionEn: 'Anchor attention at the nostril tip or upper lip. Follow the entire passage from inception through middle to conclusion of the long breath.',
        shiftKm: 'ជាការបណ្តុះស្មារតីឱ្យមូលលើអារម្មណ៍តែមួយ (ឯកគ្គតា) បណ្តេញគំនិតរាយមាយ។',
        shiftEn: 'Fosters one-pointedness (ekaggatā), dissolving outer wandering thoughts.',
      },
      {
        num: 2,
        plShort: 'Rassaṃ Assasāmi',
        km: '២. ដង្ហើមខ្លី (Short Breath)',
        en: '2. Breathing In & Out Short',
        tetradKm: 'កាយានុបស្សនា',
        tetradEn: '1st Tetrad: Body',
        focusKm: 'សមថៈ (ការស្ងប់)',
        focusEn: 'Samatha (Calming)',
        paliFormula: 'រស្សំ វា អស្សសន្តោ «រស្សំ អស្សសាមី»តិ បជានាតិ...',
        shortKm: 'ដកដង្ហើមចេញចូលខ្លី ដឹងច្បាស់ថា «ដកដង្ហើមខ្លី»។',
        shortEn: 'Breathing in or out short, discerning clearly: "I am breathing short."',
        longKm: 'កាលណាសម្រាកកាយ និងចិត្តបានយូរបន្តិច ដង្ហើមនឹងចាប់ផ្តើមខ្លីទៅៗ ល្អិតទៅៗដោយឯកឯង។ អ្នកបដិបត្តិក៏ដឹងច្បាស់នូវសភាពខ្លីនោះ។ មិនមែនជាការដកដង្ហើមដង្ហក់ទេ តែជាដង្ហើមដ៏ស្រទន់ និងស្ងប់។',
        longEn: 'As body and mind settle, respiration becomes naturally shorter, softer, and subtler. The practitioner simply acknowledges this refined brevity without grasping.',
        instructionKm: 'ដឹងច្បាស់នូវចន្លោះពេលខ្លីៗនៃដង្ហើមចេញចូល។ ចិត្តកាន់តែមូល កាន់តែស្ងប់។',
        instructionEn: 'Discerning the gentle short rhythm. The mind becomes progressively stiller.',
        shiftKm: 'ចិត្តចាប់ផ្តើមរលាស់ចាកកាមច្ឆន្ទៈ និងព្យាបាទ ចូលទៅកាន់ឧបចារសមាធិ។',
        shiftEn: 'Shedding sensual desire and restlessness, moving toward access concentration.',
      },
      {
        num: 3,
        plShort: 'Sabbakāyapaṭisaṃvedī',
        km: '៣. ដឹងច្បាស់កាយទាំងមូល (Experiencing Whole Body)',
        en: '3. Experiencing the Entire Breath Body',
        tetradKm: 'កាយានុបស្សនា',
        tetradEn: '1st Tetrad: Body',
        focusKm: 'សមថៈ + វិបស្សនា',
        focusEn: 'Samatha + Vipassanā',
        paliFormula: '«សព្វកាយបដិសំវេទី អស្សសិស្សាមី»តិ សិក្ខតិ...',
        shortKm: 'ហ្វឹកហាត់ដឹងច្បាស់នូវកាយនៃដង្ហើមទាំងមូល តាំងពីដើម កណ្តាល និងចុង។',
        shortEn: 'Training: "Experiencing the entire breath-body, I shall breathe in and out."',
        longKm: '«សព្វកាយ» ក្នុងទីនេះ អដ្ឋកថាពន្យល់ថា សំដៅលើ «កាយនៃដង្ហើមទាំងមូល» (អស្សាសបស្សាសកាយ) គឺដឹងច្បាស់នូវចំណុចចាប់ផ្តើម (ដើមដង្ហើម), ចំណុចកណ្តាល (កណ្តាលដង្ហើម), និងចំណុចបញ្ចប់ (ចុងដង្ហើម) ដោយស្មារតីពេញលេញ ឥតដាច់ចន្លោះ។',
        longEn: 'Commentaries explain "sabbakāya" as the complete cycle of the breath body: clearly discerning the beginning, middle, and culmination of each in-and-out breath without gap.',
        instructionKm: 'ចិត្តមិនរត់ចេញទៅក្រៅសូម្បីមួយប៉ប្រិចភ្នែក ដឹងខ្សែដង្ហើមដូចជាខ្សែអំបោះដែលមិនដាច់។',
        instructionEn: 'Mind does not stray for a microsecond; perceiving the continuous thread of breath.',
        shiftKm: 'ការតភ្ជាប់រវាងរូបកាយ និងដង្ហើម ក្លាយជាមូលដ្ឋានគ្រឹះនៃរូបបរមត្ថ។',
        shiftEn: 'The interrelation of body and breath manifests as ultimate materiality (rūpa paramattha).',
      },
      {
        num: 4,
        plShort: 'Passambhayaṃ Kāyasaṅkhāraṃ',
        km: '៤. រម្ងាប់កាយសង្ខារ (Calming Bodily Formation)',
        en: '4. Calming Bodily Formations',
        tetradKm: 'កាយានុបស្សនា',
        tetradEn: '1st Tetrad: Body',
        focusKm: 'ចូលឈាន (Jhāna)',
        focusEn: 'Jhāna Absorption',
        paliFormula: '«បស្សម្ភយំ កាយសង្ខារំ អស្សសិស្សាមី»តិ សិក្ខតិ...',
        shortKm: 'ហ្វឹកហាត់រម្ងាប់កាយសង្ខារ (ដង្ហើមដ៏ល្អិត) ឱ្យកាន់តែស្ងប់រម្ងាប់ឡើងៗ។',
        shortEn: 'Training: "Calming the bodily formation (breath), I shall breathe in and out."',
        longKm: 'កាយសង្ខារ គឺខ្យល់ដង្ហើមចេញចូល។ ក្នុងដំណាក់កាលនេះ ដង្ហើមរឹតតែល្អិតឆ្មាររហូតដល់សឹងតែមិនមានអារម្មណ៍ថាដកដង្ហើម។ រាងកាយធូរស្រាល ស្ងប់ស្ងាត់ឥតកម្រើក។ និមិត្ត (ឧគ្គហនិមិត្ត / បដិភាគនិមិត្ត) ដូចជាពន្លឺផ្កាយ ពន្លឺព្រះច័ន្ទ ឬកែវមណី អាចនឹងលេចឡើង។',
        longEn: 'Bodily formation is breathing itself. Here respiration becomes so sublimely still it feels non-existent. The body is weightless; meditation nimittas (luminous signs like white clouds, pearl or star) arise.',
        instructionKm: 'កុំស្វែងរកដង្ហើមខ្លាំងពេក រក្សាចិត្តឱ្យនៅស្ងៀមត្រង់ពន្លឺនិមិត្តនោះ ចិត្តនឹងចូលដល់បឋមជ្ឈាន។',
        instructionEn: 'Do not chase after breath; rest serene attention upon the luminous nimitta into Jhāna.',
        shiftKm: 'សម្រេចបឋមជ្ឈាន ដែលប្រកបដោយ វិតក្ក វិចារ បីតិ សុខ ឯកគ្គតា។',
        shiftEn: 'Attaining the 1st Jhāna endowed with vitakka, vicāra, pīti, sukha, ekaggatā.',
      },
    ],
  },
  {
    id: 'vedana',
    icon: '✨',
    pali: 'ទុតិយចតុក្កៈ — វេទនានុបស្សនា',
    paliEn: 'SECOND TETRAD — CONTEMPLATION OF FEELINGS',
    km: 'វេទនានុបស្សនា (ដំណាក់កាល ៥–៨)',
    en: 'Contemplation of Feelings (Steps 5–8)',
    satipatthanaKm: 'វេទនានុបស្សនាសតិបដ្ឋាន',
    satipatthanaEn: 'Feeling Mindfulness',
    steps: [
      {
        num: 5,
        plShort: 'Pītipaṭisaṃvedī',
        km: '៥. ដឹងច្បាស់នូវបីតិ (Experiencing Rapture)',
        en: '5. Experiencing Spiritual Rapture',
        tetradKm: 'វេទនានុបស្សនា',
        tetradEn: '2nd Tetrad: Feeling',
        focusKm: 'បីតិក្នុងឈាន & វិបស្សនា',
        focusEn: 'Pīti in Jhāna & Insight',
        paliFormula: '«បីតិបដិសំវេទី អស្សសិស្សាមី»តិ សិក្ខតិ...',
        shortKm: 'ហ្វឹកហាត់ដឹងច្បាស់នូវបីតិ (សេចក្តីឆ្អែតកាយឆ្អែតចិត្ត) ពេលដកដង្ហើមចេញចូល។',
        shortEn: 'Training: "Experiencing rapture (pīti), I shall breathe in and out."',
        longKm: 'នៅពេលសម្រេចបឋមជ្ឈាន ឬទុតិយជ្ឈាន បីតិ (សេចក្តីឆ្អែតកាយ រំភើបញាប់ញ័រ រោមក្រោក) នឹងកើតឡើងពេញបរិបូណ៌។ អ្នកបដិបត្តិដឹងច្បាស់នូវបីតិនោះ តែមិនវង្វេងជាប់ជំពាក់ក្នុងបីតិឡើយ។',
        longEn: 'Emerging from or abiding in the 1st or 2nd Jhāna, spiritual rapture (pīti) saturates the entire nervous system. The practitioner clearly experiences rapture without craving it.',
        instructionKm: 'កំណត់ដឹងបីតិថាជាសភាវធម៌ដែលកើតពីសមាធិ មិនមែនជា «យើង» ទេ។',
        instructionEn: 'Discerning pīti as a conditioned mental factor born of stillness, not "me" or "mine".',
        shiftKm: 'ពិចារណាបីតិដោយវិបស្សនា ឃើញថាបីតិក៏ជាអនិច្ចំ កើតហើយរលត់ទៅវិញ។',
        shiftEn: 'Contemplating pīti with insight: seeing that even ecstatic rapture is impermanent.',
      },
      {
        num: 6,
        plShort: 'Sukhapaṭisaṃvedī',
        km: '៦. ដឹងច្បាស់នូវសុខ (Experiencing Pleasure)',
        en: '6. Experiencing Subtle Bliss',
        tetradKm: 'វេទនានុបស្សនា',
        tetradEn: '2nd Tetrad: Feeling',
        focusKm: 'សុខវេទនា',
        focusEn: 'Sukha Vedanā',
        paliFormula: '«សុខបដិសំវេទី អស្សសិស្សាមី»តិ សិក្ខតិ...',
        shortKm: 'ហ្វឹកហាត់ដឹងច្បាស់នូវសុខ (សេចក្តីស្ងប់ស្រួលយ៉ាងក្រៃលែង) ពេលដកដង្ហើមចេញចូល។',
        shortEn: 'Training: "Experiencing bliss/pleasure (sukha), I shall breathe in and out."',
        longKm: 'ពេលបីតិស្ងប់រម្ងាប់ទៅ សេចក្តីសុខដ៏ជ្រាលជ្រៅ (សុខវេទនា) ក្នុងតតិយជ្ឈាន នឹងចូលមកជំនួស។ ជាសុខដែលកើតចេញពីការស្ងប់កិលេស គ្មានការរំខាន។ អ្នកបដិបត្តិដឹងច្បាស់នូវសុខនេះ។',
        longEn: 'As bubbling rapture subsides into the 3rd Jhāna, profound tranquility and bliss (sukha) permeate the mind. A spiritual joy untouched by worldly agitation.',
        instructionKm: 'ទទួលដឹងនូវសេចក្តីសុខស្រួលទូទាំងកាយ និងចិត្ត តែរក្សាសតិដឹងថាវាគ្រាន់តែជាវេទនា។',
        instructionEn: 'Experiencing the gentle bliss bathing every pore, anchoring in bare mindfulness.',
        shiftKm: 'មិនលោភក្នុងសុខ (លះបង់កាមសុខល្លិកានុយោគ) ឃើញសុខជាទុក្ខព្រោះវាត្រូវប្រែប្រួល។',
        shiftEn: 'Free of addiction to bliss, realizing that whatever is impermanent is fundamentally dukkha.',
      },
      {
        num: 7,
        plShort: 'Cittasaṅkhārapaṭisaṃvedī',
        km: '៧. ដឹងច្បាស់នូវចិត្តសង្ខារ (Experiencing Mental Formations)',
        en: '7. Experiencing Mental Formations',
        tetradKm: 'វេទនានុបស្សនា',
        tetradEn: '2nd Tetrad: Feeling',
        focusKm: 'សញ្ញា និង វេទនា',
        focusEn: 'Saññā & Vedanā',
        paliFormula: '«ចិត្តសង្ខារបដិសំវេទី អស្សសិស្សាមី»តិ សិក្ខតិ...',
        shortKm: 'ហ្វឹកហាត់ដឹងច្បាស់នូវចិត្តសង្ខារ (សញ្ញា និងវេទនា ដែលតាក់តែងចិត្ត)។',
        shortEn: 'Training: "Experiencing mental formations, I shall breathe in and out."',
        longKm: '«ចិត្តសង្ខារ» គឺធម៌ដែលតាក់តែងចិត្ត សំដៅលើ សញ្ញា (ការចាំ) និង វេទនា (ការសោយអារម្មណ៍)។ ពេលសញ្ញានិងវេទនាកើតឡើង ពួកវាជាអ្នកញ៉ាំងឱ្យចិត្តកម្រើក ដូចជាគិត សប្បាយ ឬសោកសៅ។',
        longEn: 'Mental formations (cittasaṅkhāra) are perception (saññā) and feeling (vedanā) that mold mental states. Perceiving how feelings paint and condition thoughts.',
        instructionKm: 'សង្កេតឃើញទំនាក់ទំនងរវាង វេទនា-សញ្ញា និងចិត្ត ថាតើវាជំរុញចិត្តឱ្យប្រែប្រួលយ៉ាងណា។',
        instructionEn: 'Observing how perceptions and feelings color the background state of the mind.',
        shiftKm: 'ឃើញច្បាស់នូវនាមក្ខន្ធ ៣ (វេទនា សញ្ញា សង្ខារ) ថាមិនមែនជាខ្លួន។',
        shiftEn: 'Direct insight into the 3 mental aggregates as impersonal processes.',
      },
      {
        num: 8,
        plShort: 'Passambhayaṃ Cittasaṅkhāraṃ',
        km: '៨. រម្ងាប់ចិត្តសង្ខារ (Calming Mental Formations)',
        en: '8. Calming Mental Formations',
        tetradKm: 'វេទនានុបស្សនា',
        tetradEn: '2nd Tetrad: Feeling',
        focusKm: 'ឧបេក្ខាវេទនា (៤th Jhāna)',
        focusEn: 'Equanimity (4th Jhāna)',
        paliFormula: '«បស្សម្ភយំ ចិត្តសង្ខារំ អស្សសិស្សាមី»តិ សិក្ខតិ...',
        shortKm: 'ហ្វឹកហាត់រម្ងាប់សញ្ញា និងវេទនា ឱ្យចិត្តចូលដល់ឧបេក្ខាដ៏បរិសុទ្ធ។',
        shortEn: 'Training: "Calming mental formations, I shall breathe in and out."',
        longKm: 'រម្ងាប់វេទនាគ្រោតគ្រាត (សុខ និងទុក្ខ) ចូលទៅកាន់ «ឧបេក្ខាវេទនា» (អារម្មណ៍កណ្តាលស្មើ) ក្នុងចតុត្ថជ្ឈាន ដែលសតិមានសភាពបរិសុទ្ធស្អាតបំផុត (ឧបេក្ខាសតិបារិសុទ្ធិ)។',
        longEn: 'Quieting even subtle joyful feelings into pure, unshakeable equanimity (upekkhā) of the 4th Jhāna, where mindfulness is purified by balance.',
        instructionKm: 'លះបង់ទាំងសុខ ទាំងទុក្ខ ចិត្តតម្កល់នៅកណ្តាល ស្ងប់ស្ងាត់ឥតរំញ័រដូចកញ្ចក់ថ្លា។',
        instructionEn: 'Surpassing both pleasure and pain, the mind stands clear and immovable like still water.',
        shiftKm: 'ចិត្តក្លាយជាឧបករណ៍ដ៏មុតស្រួច បរិសុទ្ធ ត្រៀមរួចជាស្រេចសម្រាប់វិបស្សនា។',
        shiftEn: 'Mind becomes pliant, malleable, and primed for penetrating insight.',
      },
    ],
  },
  {
    id: 'citta',
    icon: '💡',
    pali: 'តតិយចតុក្កៈ — ចិត្តានុបស្សនា',
    paliEn: 'THIRD TETRAD — CONTEMPLATION OF MIND',
    km: 'ចិត្តានុបស្សនា (ដំណាក់កាល ៩–១២)',
    en: 'Contemplation of the Mind (Steps 9–12)',
    satipatthanaKm: 'ចិត្តានុបស្សនាសតិបដ្ឋាន',
    satipatthanaEn: 'Mind Mindfulness',
    steps: [
      {
        num: 9,
        plShort: 'Cittapaṭisaṃvedī',
        km: '៩. ដឹងច្បាស់នូវចិត្ត (Experiencing the Mind)',
        en: '9. Experiencing the Mind Directly',
        tetradKm: 'ចិត្តានុបស្សនា',
        tetradEn: '3rd Tetrad: Mind',
        focusKm: 'ការដឹងសភាពចិត្ត',
        focusEn: 'Knowing State of Mind',
        paliFormula: '«ចិត្តបដិសំវេទី អស្សសិស្សាមី»តិ សិក្ខតិ...',
        shortKm: 'ហ្វឹកហាត់ដឹងច្បាស់នូវសភាពចិត្ត (មានរាគៈ/ឥតរាគៈ, ចង្អៀត/ទូលាយ...)។',
        shortEn: 'Training: "Experiencing the mind, I shall breathe in and out."',
        longKm: 'ដឹងច្បាស់នូវសភាពចិត្តគ្រប់ខណៈ៖ ចិត្តមានរាគៈ ក៏ដឹងថាមានរាគៈ; ចិត្តឥតរាគៈ ក៏ដឹងថាឥតរាគៈ; ចិត្តមានទោសៈ ឬឥតទោសៈ; ចិត្តតូចចង្អៀត ឬចិត្តទូលាយ (មហគ្គតចិត្ត)។ គ្រាន់តែដឹង មិនវិនិច្ឆ័យ មិនបន្ទោស។',
        longEn: 'Discerning the quality of consciousness directly: mind with lust or without lust; mind with hatred or without hatred; constricted or expansive; concentrated or scattered. Pure bare observation.',
        instructionKm: 'ឈរមើលចិត្តដូចជាអ្នកឈរមើលផ្លូវ ឃើញគំនិតឆ្លងកាត់ តែមិនរត់តាមគំនិត។',
        instructionEn: 'Stand like an observer on a road, watching mental states pass by without boarding them.',
        shiftKm: 'ឃើញថាចិត្តគ្រាន់តែជាធាតុដឹងមួយ មិនមែនជា «ខ្ញុំ» ឡើយ។',
        shiftEn: 'Recognizing that consciousness is merely an observed phenomenon, not a personal self.',
      },
      {
        num: 10,
        plShort: 'Abhippamodayaṃ Cittaṃ',
        km: '១០. ធ្វើចិត្តឱ្យរីករាយ (Gladdening the Mind)',
        en: '10. Gladdening the Mind',
        tetradKm: 'ចិត្តានុបស្សនា',
        tetradEn: '3rd Tetrad: Mind',
        focusKm: 'បាមោជ្ជៈ (សេចក្តីជ្រះថ្លា)',
        focusEn: 'Pāmojja (Spiritual Gladness)',
        paliFormula: '«អភិប្បមោទយំ ចិត្តំ អស្សសិស្សាមី»តិ សិក្ខតិ...',
        shortKm: 'ហ្វឹកហាត់ធ្វើចិត្តឱ្យរីករាយស្រស់ស្រាយក្នុងធម៌ ពេលដកដង្ហើមចេញចូល។',
        shortEn: 'Training: "Gladdening the mind, I shall breathe in and out."',
        longKm: 'នៅពេលចិត្តស្រពោន ខ្ជិលច្រអូស ឬធុញថប់ អ្នកបដិបត្តិដឹងវិធីលើកចិត្តឱ្យស្រស់ស្រាយរីករាយឡើងវិញ ដោយការរឭកដល់គុណព្រះពុទ្ធ (ពុទ្ធានុស្សតិ) ទានដែលបានធ្វើ ឬភាពអស្ចារ្យនៃធម៌។',
        longEn: 'When the mind is sluggish, drowsy, or dry, the yogi knows how to uplift and gladden it through recollecting the Buddha, past virtues, or the beauty of freedom.',
        instructionKm: 'ដាស់សេចក្តីជ្រះថ្លា (បាមោជ្ជៈ) ឱ្យចិត្តភ្លឺស្វាង មិនស្រអាប់ មិនលង់ក្នុងងងុយ។',
        instructionEn: 'Arouse joyful spiritual inspiration (pāmojja), brightening the mind away from sloth.',
        shiftKm: 'បំបាត់ថីនមិទ្ធៈ (សេចក្តីងងុយងក់) នាំចិត្តទៅកាន់បីតិសម្ពោជ្ឈង្គ។',
        shiftEn: 'Countering sloth and torpor, fueling the Awakening Factor of Joy (Pīti-bojjhaṅga).',
      },
      {
        num: 11,
        plShort: 'Samādahaṃ Cittaṃ',
        km: '១១. តម្កល់ចិត្តឱ្យមូល (Concentrating the Mind)',
        en: '11. Concentrating the Mind',
        tetradKm: 'ចិត្តានុបស្សនា',
        tetradEn: '3rd Tetrad: Mind',
        focusKm: 'សមាធិ (Samādhi)',
        focusEn: 'Samādhi (One-Pointedness)',
        paliFormula: '«សមាទហំ ចិត្តំ អស្សសិស្សាមី»តិ សិក្ខតិ...',
        shortKm: 'ហ្វឹកហាត់តម្កល់ចិត្តឱ្យនឹងធឹង មូលលើអារម្មណ៍កម្មដ្ឋានឥតរំញ័រ។',
        shortEn: 'Training: "Concentrating the mind, I shall breathe in and out."',
        longKm: 'នៅពេលចិត្តស្រស់ស្រាយហើយ ក៏តម្កល់ចិត្តឱ្យមូលយ៉ាងរឹងមាំលើដង្ហើម ឬនិមិត្ត ឱ្យចូលដល់កម្រិតសមាធិខ្ពស់ (ឧបចារសមាធិ ឬ អប្បនាសមាធិ) មិនឱ្យរំជួលដោយអារម្មណ៍ខាងក្រៅ។',
        longEn: 'Anchoring the uplifted mind deeply onto the breath or luminous object, unifying it into unwavering absorption (Upacāra or Appanā Samādhi).',
        instructionKm: 'ប្រមូលអារម្មណ៍ទាំងអស់មកចំណុចកណ្តាល ដូចជាកែវពង្រីកដែលប្រមូលពន្លឺព្រះអាទិត្យ។',
        instructionEn: 'Gathering all dispersed attention into a laser-sharp focal point of concentration.',
        shiftKm: 'ពង្រឹងសមាធិសម្ពោជ្ឈង្គ ធ្វើឱ្យចិត្តមានកម្លាំងខ្លាំងក្លាបំផុត។',
        shiftEn: 'Solidifying the Awakening Factor of Concentration (Samādhi-bojjhaṅga).',
      },
      {
        num: 12,
        plShort: 'Vimocayaṃ Cittaṃ',
        km: '១២. ដោះលែងចិត្ត (Liberating the Mind)',
        en: '12. Liberating the Mind from Hindrances',
        tetradKm: 'ចិត្តានុបស្សនា',
        tetradEn: '3rd Tetrad: Mind',
        focusKm: 'តទង្គវិមុត្តិ',
        focusEn: 'Freeing from Defilements',
        paliFormula: '«វិមោចយំ ចិត្តំ អស្សសិស្សាមី»តិ សិក្ខតិ...',
        shortKm: 'ហ្វឹកហាត់ដោះលែងចិត្តឱ្យរួចផុតចាកនីវរណៈ និងការជាប់ជំពាក់ទាំងពួង។',
        shortEn: 'Training: "Liberating the mind, I shall breathe in and out."',
        longKm: 'ដោះលែងចិត្តឱ្យរួចផុតចាក «នីវរណធម៌ ៥» (កាមច្ឆន្ទៈ ព្យាបាទ ថីនមិទ្ធ ឧទ្ធច្ចកុក្កុច្ច វិចិកិច្ឆា) ក្នុងសមថៈ និងដោះលែងចិត្តឱ្យរួចផុតចាកសេចក្តីប្រកាន់ថា «ទៀង សុខ ខ្លួន» ក្នុងវិបស្សនា។',
        longEn: 'Temporarily freeing consciousness from the 5 Hindrances through Jhāna, and liberating it from the illusions of permanence and selfhood through initial insight.',
        instructionKm: 'បើកទូលាយចិត្ត មិនជាប់ជំពាក់នឹងសូម្បីតែសមាធិ ឬពន្លឺនិមិត្ត ដោះលែងឱ្យចិត្តមានសេរីភាព។',
        instructionEn: 'Releasing attachment even to stillness or light, liberating the mind into pristine awareness.',
        shiftKm: 'ឈានជើងចេញពីដែនសមថៈ ចូលទៅកាន់ដែនវិបស្សនាសុទ្ធសាធក្នុងចតុក្កៈទី ៤។',
        shiftEn: 'Transitioning from the domain of serenity into transcendent insight in the 4th Tetrad.',
      },
    ],
  },
  {
    id: 'dhamma',
    icon: '☸️',
    pali: 'ចតុត្ថចតុក្កៈ — ធម្មានុបស្សនា',
    paliEn: 'FOURTH TETRAD — CONTEMPLATION OF DHAMMA',
    km: 'ធម្មានុបស្សនា (ដំណាក់កាល ១៣–១៦ — វិបស្សនាសុទ្ធ)',
    en: 'Contemplation of Dhammas (Steps 13–16 — Pure Insight)',
    satipatthanaKm: 'ធម្មានុបស្សនាសតិបដ្ឋាន',
    satipatthanaEn: 'Phenomena Mindfulness',
    steps: [
      {
        num: 13,
        plShort: 'Aniccānupassī',
        km: '១៣. ពិចារណាឃើញអនិច្ចំ (Contemplating Impermanence)',
        en: '13. Contemplating Impermanence',
        tetradKm: 'ធម្មានុបស្សនា',
        tetradEn: '4th Tetrad: Dhamma',
        focusKm: 'អនិច្ចានុបស្សនា (វិបស្សនា)',
        focusEn: 'Aniccānupassanā',
        paliFormula: '«អនិច្ចានុបស្សី អស្សសិស្សាមី»តិ សិក្ខតិ...',
        shortKm: 'ហ្វឹកហាត់ពិចារណាឃើញការកើត–រលត់នៃខន្ធ ៥ និងដង្ហើមថា «មិនទៀង»។',
        shortEn: 'Training: "Contemplating impermanence, I shall breathe in and out."',
        longKm: 'ប្រើចិត្តដែលស្ងប់ក្នុងសមាធិ មកពិនិត្យមើលដង្ហើមចេញចូល រូបកាយ និងចិត្ត៖ ឃើញការកើតឡើង និងការរលត់ទៅយ៉ាងលឿននៃខន្ធទាំងឡាយ។ គ្មានអ្វីនៅស្ថិតស្ថេរសូម្បីមួយវិនាទី! ការឃើញច្បាស់នូវការរលត់នេះ ហៅថា «ឧទយព្វយញាណ»។',
        longEn: 'Directing the still mind to inspect breathing, body, and feelings: directly perceiving their ceaseless arising and vanishing. Nothing endures for a second. The insight knowledge of rise and fall (udayabbaya-ñāṇa).',
        instructionKm: 'ឃើញដង្ហើមចូល កើតហើយរលត់; ដង្ហើមចេញ កើតហើយរលត់; គំនិតកើតហើយរលត់ គ្មានអ្វីជាអមតៈ។',
        instructionEn: 'Watch breath arise and vanish; watch thoughts arise and dissolve like bubbles on water.',
        shiftKm: 'កម្ចាត់ «និច្ចសញ្ញា» (ការយល់ច្រឡំថាជីវិតទៀងទាត់) ឱ្យរលាយបាត់អស់។',
        shiftEn: 'Eradicates the deep illusion of permanence (nicca-saññā).',
      },
      {
        num: 14,
        plShort: 'Virāgānupassī',
        km: '១៤. ពិចារណាការប្រាសចាកតម្រេក (Fading of Desire)',
        en: '14. Contemplating Fading of Desire',
        tetradKm: 'ធម្មានុបស្សនា',
        tetradEn: '4th Tetrad: Dhamma',
        focusKm: 'វិរាគានុបស្សនា (លះតណ្ហា)',
        focusEn: 'Dispassion (Virāga)',
        paliFormula: '«វិរាគានុបស្សី អស្សសិស្សាមី»តិ សិក្ខតិ...',
        shortKm: 'ហ្វឹកហាត់ពិចារណាឃើញការសាបសូន្យនៃតម្រេកក្នុងលោកិយ។',
        shortEn: 'Training: "Contemplating dispassion/fading away, I shall breathe in and out."',
        longKm: 'កាលណាឃើញច្បាស់នូវអនិច្ចំ ចិត្តនឹងកើតសេចក្តីនឿយណាយ (និព្វិទា) មិនត្រេកអរក្នុងរូប សំឡេង ក្លិន រស សម្ផស្ស ឬក្នុងភពណាមួយឡើយ។ តម្រេក (រាគៈ) ក៏រសាត់សាបសូន្យទៅដូចជាទឹកថ្នាំដែលត្រូវពន្លឺថ្ងៃ។',
        longEn: 'Seeing ceaseless decay, spiritual disillusionment (nibbidā) sets in. The heart loses taste for worldly sights and sensory pleasures. Craving fades like dye bleaching under the sun.',
        instructionKm: 'សង្កេតការរសាត់បាត់ទៅនៃសេចក្តីស្រេកឃ្លាន។ ចិត្តត្រជាក់ មិនរត់តាមកាមគុណ។',
        instructionEn: 'Witnessing the natural cooling of longing; the heart cools and steps back from enchantment.',
        shiftKm: 'កម្ចាត់ «សុខសញ្ញា» (ការយល់ច្រឡំថាកាមគុណជាសុខ) ឈានចូលភង្គញាណ និងភយញាណ។',
        shiftEn: 'Dispels the illusion of pleasure in conditioned things (sukha-saññā).',
      },
      {
        num: 15,
        plShort: 'Nirodhānupassī',
        km: '១៥. ពិចារណាការរលត់ (Contemplating Cessation)',
        en: '15. Contemplating Cessation',
        tetradKm: 'ធម្មានុបស្សនា',
        tetradEn: '4th Tetrad: Dhamma',
        focusKm: 'និរោធ (ការរលត់ទុក្ខ / និព្វាន)',
        focusEn: 'Cessation / Nibbāna',
        paliFormula: '«និរោធានុបស្សី អស្សសិស្សាមី»តិ សិក្ខតិ...',
        shortKm: 'ហ្វឹកហាត់ពិចារណាឃើញការរលត់ទៅនៃទុក្ខ និងកិលេស ឆ្ពោះទៅកាន់ព្រះនិព្វាន។',
        shortEn: 'Training: "Contemplating cessation, I shall breathe in and out."',
        longKm: 'ឃើញការរលត់ទៅនៃសង្ខារធម៌ទាំងពួង និងបង្អោនចិត្តឆ្ពោះទៅកាន់ «និរោធធាតុ» គឺព្រះនិព្វាន ដែលជាសភាពស្ងប់រលត់នៃភ្លើងកិលេស ភ្លើងទុក្ខ ភ្លើងកំណើត ភ្លើងជរា និងភ្លើងមរណៈ។',
        longEn: 'Contemplating the total cessation of conditioned formations and inclining the mind toward the Unconditioned Cessation Element (Nirodha-dhātu) — Nibbāna, the snuffing out of all suffering.',
        instructionKm: 'ឃើញសភាពរលត់នៃបាតុភូតទាំងពួង ចិត្តតម្រង់ទៅរកសេចក្តីស្ងប់ផុតទុក្ខដ៏ឧត្តម។',
        instructionEn: 'Directing the purified consciousness toward the peaceful cessation of all becoming.',
        shiftKm: 'ឈានដល់សង្ខារុបេក្ខាញាណ (ការតម្កល់ចិត្តស្មើក្នុងសង្ខារ) និងអនុលោមញាណ។',
        shiftEn: 'Attaining Saṅkhārupekkhā-ñāṇa (equanimity toward all formations).',
      },
      {
        num: 16,
        plShort: 'Paṭinissaggānupassī',
        km: '១៦. ពិចារណាការលះបង់ទាំងស្រុង (Relinquishment)',
        en: '16. Contemplating Complete Relinquishment',
        tetradKm: 'ធម្មានុបស្សនា',
        tetradEn: '4th Tetrad: Dhamma',
        focusKm: 'អរហត្តផល (ការរួចផុតទុក្ខ)',
        focusEn: 'Arahantship / Liberation',
        paliFormula: '«បដិនិស្សគ្គានុបស្សី អស្សសិស្សាមី»តិ សិក្ខតិ...',
        shortKm: 'ហ្វឹកហាត់ពិចារណាឃើញការលះបង់កិលេស និងការប្រគល់ខន្ធ ៥ ត្រឡប់ទៅធម្មជាតិវិញ។',
        shortEn: 'Training: "Contemplating total relinquishment, I shall breathe in and out."',
        longKm: 'ជាកំពូលនៃអានាបានសតិ! «បដិនិស្សគ្គ» មាន ២ ប្រការ៖ ១. បរិច្ចាគបដិនិស្សគ្គ (ការលះបង់កិលេសទាំងអស់ដោយអរិយមគ្គ), ២. បក្ខន្ទនបដិនិស្សគ្គ (ការលោតផ្លោះចិត្តចូលទៅកាន់ព្រះនិព្វាន)។ លះបង់ទាំងស្រុងនូវការប្រកាន់ខន្ធ ៥ សម្រេចជាព្រះអរហន្ត!',
        longEn: 'The supreme summit of Ānāpānasati! Twofold relinquishment: 1. Giving up all defilements through the Noble Paths, 2. Plunging into Nibbāna. Relinquishing all clinging to the 5 aggregates forever — realizing final Arahantship!',
        instructionKm: 'លះបង់អ្វីៗទាំងអស់ គ្មានសល់អ្វីជា «ខ្ញុំ» ឬ «របស់ខ្ញុំ» ទៀតឡើយ ចិត្តដាច់ស្រឡះក្នុងវិមុត្តិសុខ។',
        instructionEn: 'Letting go of everything without remnant; resting in the supreme peace of total liberation.',
        shiftKm: 'សម្រេចព្រះអរហត្តផល — កិច្ចដែលត្រូវធ្វើបានធ្វើចប់ហើយ គ្មានភពថ្មីទៀតឡើយ!',
        shiftEn: 'Full realization of Arahantship — the holy life is fulfilled, there is no more rebirth!',
      },
    ],
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
