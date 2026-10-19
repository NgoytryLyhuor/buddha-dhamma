<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('ឧបករណ៍បដិបត្តិ — សមាធិ & អានាបានសតិ', 'PRACTICE TOOL — MEDITATION & MINDFUL BREATHING') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('នាឡិកាសមាធិ & អានាបានសតិ', 'Meditation Timer & Mindful Breathing') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('អានាបានសតិ គឺជាការតម្កល់ស្មារតីតាមដានដង្ហើមចេញចូល ដែលជាកម្មដ្ឋានដ៏ប្រសើរដែលព្រះពុទ្ធទ្រង់សរសើរ និងប្រើប្រាស់ជាញឹកញាប់បំផុត។ ឧបករណ៍នេះជួយកំណត់ពេលវេលាហាត់សមាធិ និងមានចលនាដង្ហើមជួយឱ្យចិត្តរបស់អ្នកស្ងប់បានយ៉ាងឆាប់រហ័ស។ អាចដំណើរការបានទោះគ្មានអ៊ីនធឺណិត (Offline)។', 'Anāpānasati — mindfulness of breathing — is the meditation practice praised most by the Buddha and through which he gained awakening. This interactive tool tracks your sitting sessions with gentle temple bowl chimes and rhythmic breathing guidance. Works 100% offline.') }}
    </p>

    <!-- Main Meditation Console -->
    <div class="card-paper p-6 md:p-10 mt-8 text-center max-w-xl mx-auto relative overflow-hidden"
      :style="{ borderColor: isRunning ? 'var(--accent-bright)' : 'var(--border)' }">
      
      <!-- Audio & Breathing Mode Switches -->
      <div class="flex items-center justify-between gap-3 text-xs mb-6 flex-wrap">
        <button class="font-btn px-2.5 py-1 flex items-center gap-1.5" @click="soundEnabled = !soundEnabled"
          :title="soundEnabled ? t('បិទសំឡេងជួង', 'Mute bell') : t('បើកសំឡេងជួង', 'Enable bell')">
          <span>{{ soundEnabled ? '🔔' : '🔕' }}</span>
          <span>{{ soundEnabled ? t('សំឡេងជួង៖ បើក', 'Bell: ON') : t('សំឡេងជួង៖ បិទ', 'Bell: OFF') }}</span>
        </button>

        <button class="font-btn px-2.5 py-1 flex items-center gap-1.5" @click="testBell"
          :title="t('សាកល្បងសំឡេងជួង', 'Test bell sound')">
          <span>🎵</span>
          <span>{{ t('សាកល្បងជួង', 'Test Bell') }}</span>
        </button>

        <button class="font-btn px-2.5 py-1 flex items-center gap-1.5" @click="showBreathingGuide = !showBreathingGuide">
          <span>🌬️</span>
          <span>{{ showBreathingGuide ? t('ចលនាដង្ហើម៖ បើក', 'Breathing: ON') : t('ចលនាដង្ហើម៖ បិទ', 'Breathing: OFF') }}</span>
        </button>
      </div>

      <!-- Breathing Animation Circle -->
      <div v-if="showBreathingGuide" class="my-8 flex flex-col items-center justify-center">
        <div class="w-48 h-48 md:w-56 md:h-56 rounded-full flex flex-col items-center justify-center transition-all duration-1000 select-none relative"
          :style="breathingCircleStyle">
          <span class="text-sm md:text-base font-display font-bold tracking-wider" :style="{ color: 'var(--ink)' }">
            {{ t(breathPhaseKm, breathPhaseEn) }}
          </span>
          <span class="text-xs mt-1" :style="{ color: 'var(--ink-muted)' }">
            {{ breathSeconds }}s
          </span>
        </div>
      </div>

      <!-- Timer Display -->
      <div class="my-6">
        <p class="font-display text-5xl md:text-7xl font-light tracking-wider" :style="{ color: 'var(--accent-bright)' }">
          {{ formattedTime }}
        </p>
        <p class="text-xs mt-2 uppercase tracking-widest" :style="{ color: 'var(--ink-faint)' }">
          {{ isCompleted ? t('បានបញ្ចប់ — សាធុ!', 'Completed — Sādhu!') : (isRunning ? t('កំពុងចម្រើនសមាធិ...', 'Meditating in progress...') : t('រួចរាល់សម្រាប់ចាប់ផ្តើម', 'Ready to begin')) }}
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center justify-center gap-3 mt-6">
        <button v-if="!isRunning" class="install-btn px-6 py-2.5 text-base font-bold" @click="startTimer">
          {{ timeLeft === totalDuration ? t('ចាប់ផ្តើមសមាធិ', 'Start Meditation') : t('បន្ត', 'Resume') }}
        </button>
        <button v-else class="font-btn px-6 py-2.5 text-base font-bold" :style="{ borderColor: 'var(--accent)' }" @click="pauseTimer">
          {{ t('ផ្អាក', 'Pause') }}
        </button>
        <button class="font-btn px-4 py-2.5 text-sm" @click="resetTimer" :disabled="!isRunning && timeLeft === totalDuration">
          {{ t('កំណត់ឡើងវិញ', 'Reset') }}
        </button>
      </div>

      <!-- Duration Presets -->
      <div v-if="!isRunning" class="mt-8 pt-6" :style="{ borderTop: '1px dashed var(--border)' }">
        <p class="text-[11px] font-bold tracking-wider uppercase mb-3" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ជ្រើសរើសរយៈពេល', 'Select Duration') }}
        </p>
        <div class="flex items-center justify-center gap-2 flex-wrap">
          <button v-for="preset in presets" :key="preset.mins"
            class="lang-pick px-3 py-1 text-xs"
            :class="selectedMins === preset.mins ? 'on' : ''"
            @click="setDuration(preset.mins)">
            {{ preset.mins }} {{ t('នាទី', 'min') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Post-Meditation Completion Card -->
    <div v-if="isCompleted" class="card-paper p-6 md:p-8 mt-6 text-center animate-fade"
      :style="{ borderColor: 'var(--accent)', background: 'var(--accent-soft)' }">
      <span class="text-3xl">☸</span>
      <h3 class="font-display text-2xl mt-2" :style="{ color: 'var(--ink)' }">
        {{ t('សាធុ! សាធុ! សាធុ!', 'Sādhu! Sādhu! Sādhu!') }}
      </h3>
      <p class="text-sm mt-2 leading-relaxed max-w-lg mx-auto" :style="{ color: 'var(--ink-soft)' }">
        {{ t('អ្នកបានបំពេញសមាធិភាវនាដោយជោគជ័យ។ ការតម្កល់ចិត្តស្ងប់សូម្បីតែមួយដង្ហើមចេញចូល មានអានិសង្សច្រើនក្រៃលែង។ គប្បីផ្សាយមេត្តាចិត្ត និងឧទ្ទិសកុសលដល់សព្វសត្វ។', 'You have completed this meditation sitting. Maintaining a calm and mindful breath bears immense wholesome fruit. Take a moment to radiate loving-kindness and dedicate the merits.') }}
      </p>
      <div class="mt-4 flex items-center justify-center gap-3">
        <router-link to="/chanting#chant-11" class="share-btn text-xs px-3 py-1.5 font-bold" style="color: var(--accent-bright)">
          {{ t('សូត្រឧទ្ទិសកុសល (បដិទាន) →', 'Dedication of Merit →') }}
        </router-link>
      </div>
    </div>

    <!-- Practical Meditation Tips -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">HOW TO SIT</p>
      <h3 class="font-display text-xl mt-1" :style="{ color: 'var(--ink)' }">
        {{ t('របៀបអង្គុយសមាធិបែបសាមញ្ញ', 'Simple Posture & Practice Guidelines') }}
      </h3>
      <div class="grid md:grid-cols-3 gap-4 mt-5">
        <div class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <p class="font-bold text-sm" :style="{ color: 'var(--ink)' }">{{ t('១. កាយវិការត្រង់', '1. Upright Posture') }}</p>
          <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('អង្គុយពត់ជើង ឬលើកៅអី ខ្នងឱ្យត្រង់ តែកុំឱ្យតានតឹងពេក។ ដាក់ដៃស្តាំលើដៃឆ្វេង លើភ្លៅ។', 'Sit cross-legged or upright on a chair with a straight spine without rigidity. Rest right hand gently on left.') }}
          </p>
        </div>
        <div class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <p class="font-bold text-sm" :style="{ color: 'var(--ink)' }">{{ t('២. តម្កល់ស្មារតីលើដង្ហើម', '2. Anchor on the Breath') }}</p>
          <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('ចាប់អារម្មណ៍ត្រង់ចុងច្រមុះ ឬបបូរមាត់ខាងលើ។ ដកដង្ហើមចូលវែង ដឹងថាចូលវែង។ ដកដង្ហើមចេញវែង ដឹងថាចេញវែង។', 'Focus at the tip of the nostrils or upper lip. When breathing in long, know it is long; breathing out, know it is out.') }}
          </p>
        </div>
        <div class="p-4 rounded-sm" :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }">
          <p class="font-bold text-sm" :style="{ color: 'var(--ink)' }">{{ t('៣. កុំប្រយុទ្ធនឹងគំនិត', '3. Release Distractions') }}</p>
          <p class="text-xs mt-1.5 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t('បើចិត្តរវើរវាយ គ្រាន់តែដឹងខ្លួនថារវើរវាយ រួចទាញស្មារតីត្រឡប់មករកដង្ហើមវិញថ្នមៗ មិនបន្ទោសខ្លួនឯងឡើយ។', 'When thoughts wander, simply notice without self-criticism and gently escort mindfulness back to the breath.') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const presets = [
  { mins: 3 },
  { mins: 5 },
  { mins: 10 },
  { mins: 15 },
  { mins: 20 },
  { mins: 30 },
]

const selectedMins = ref(10)
const totalDuration = ref(10 * 60)
const timeLeft = ref(10 * 60)
const isRunning = ref(false)
const isCompleted = ref(false)
const soundEnabled = ref(true)
const showBreathingGuide = ref(true)

let timerInterval = null
let breathingInterval = null
const breathPhaseIndex = ref(0) // 0: inhale (4s), 1: hold (2s), 2: exhale (5s)
const breathSeconds = ref(4)

// Singing Bowl Bell Synthesizer via Web Audio API (Zero external audio files needed)
function playSingingBowl(durationSec = 3.5) {
  if (!soundEnabled.value) return
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext
    if (!AudioCtx) return
    const ctx = new AudioCtx()
    if (ctx.state === 'suspended') ctx.resume()

    const now = ctx.currentTime
    const masterGain = ctx.createGain()
    masterGain.gain.setValueAtTime(0.7, now)
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec)
    masterGain.connect(ctx.destination)

    // Harmonics of a Tibetan bronze bowl: fundamental + overtone
    const frequencies = [261.63, 523.25, 784.88, 1046.5]
    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, now)

      const volume = 0.4 / (idx + 1)
      gain.gain.setValueAtTime(volume, now)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec)

      osc.connect(gain)
      gain.connect(masterGain)
      osc.start(now)
      osc.stop(now + durationSec)
    })
  } catch (e) {
    // Audio context not allowed or blocked
  }
}

function testBell() {
  playSingingBowl(3.0)
}

function setDuration(mins) {
  if (isRunning.value) pauseTimer()
  selectedMins.value = mins
  totalDuration.value = mins * 60
  timeLeft.value = mins * 60
  isCompleted.value = false
}

function startTimer() {
  if (isCompleted.value) {
    timeLeft.value = totalDuration.value
    isCompleted.value = false
  }
  isRunning.value = true
  playSingingBowl(3.5)

  timerInterval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    } else {
      completeSession()
    }
  }, 1000)

  startBreathingCycle()
}

function pauseTimer() {
  isRunning.value = false
  if (timerInterval) clearInterval(timerInterval)
  if (breathingInterval) clearInterval(breathingInterval)
}

function resetTimer() {
  pauseTimer()
  timeLeft.value = totalDuration.value
  isCompleted.value = false
  breathPhaseIndex.value = 0
  breathSeconds.value = 4
}

function completeSession() {
  pauseTimer()
  isCompleted.value = true
  playSingingBowl(5.0)
}

// Mindful breathing cycle loop: Inhale (4s) -> Hold (2s) -> Exhale (5s)
function startBreathingCycle() {
  if (breathingInterval) clearInterval(breathingInterval)
  breathPhaseIndex.value = 0
  breathSeconds.value = 4

  breathingInterval = setInterval(() => {
    if (!showBreathingGuide.value) return
    if (breathSeconds.value > 1) {
      breathSeconds.value--
    } else {
      if (breathPhaseIndex.value === 0) {
        // Inhale done -> Hold
        breathPhaseIndex.value = 1
        breathSeconds.value = 2
      } else if (breathPhaseIndex.value === 1) {
        // Hold done -> Exhale
        breathPhaseIndex.value = 2
        breathSeconds.value = 5
      } else {
        // Exhale done -> Inhale
        breathPhaseIndex.value = 0
        breathSeconds.value = 4
      }
    }
  }, 1000)
}

const breathPhaseKm = computed(() => {
  if (breathPhaseIndex.value === 0) return 'ដកដង្ហើមចូល...'
  if (breathPhaseIndex.value === 1) return 'ផ្អាកដង្ហើម...'
  return 'ដកដង្ហើមចេញ...'
})

const breathPhaseEn = computed(() => {
  if (breathPhaseIndex.value === 0) return 'Breathe In...'
  if (breathPhaseIndex.value === 1) return 'Hold...'
  return 'Breathe Out...'
})

const breathingCircleStyle = computed(() => {
  let scale = 'scale(0.85)'
  let border = '2px solid var(--border)'
  let bg = 'var(--bg-card-2)'

  if (breathPhaseIndex.value === 0) {
    scale = 'scale(1.08)'
    border = '3px solid var(--accent-bright)'
    bg = 'var(--accent-soft)'
  } else if (breathPhaseIndex.value === 1) {
    scale = 'scale(1.08)'
    border = '3px dashed var(--accent)'
    bg = 'var(--accent-soft)'
  } else {
    scale = 'scale(0.85)'
    border = '2px solid var(--border-strong)'
    bg = 'var(--bg-card-2)'
  }

  return {
    transform: scale,
    border,
    background: bg,
    transition: 'all 1s ease-in-out',
  }
})

const formattedTime = computed(() => {
  const m = Math.floor(timeLeft.value / 60)
  const s = timeLeft.value % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
})

onBeforeUnmount(() => {
  if (timerInterval) clearInterval(timerInterval)
  if (breathingInterval) clearInterval(breathingInterval)
})
</script>
