<template>
  <div v-if="countdown" class="card-paper p-6 md:p-8 mt-8">
    <p class="chapter-label">{{ t('ថ្ងៃបុណ្យបន្ទាប់', 'NEXT FESTIVAL') }}</p>
    <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">
      {{ t('រាប់ថយក្រោយ ដល់ថ្ងៃបុណ្យ', 'Countdown to the Next Festival') }}
    </h3>

    <div class="flex items-center justify-between gap-4 mt-5 flex-wrap">
      <div>
        <p class="font-display text-2xl" :style="{ color: 'var(--accent)' }">{{ t(countdown.km, countdown.en) }}</p>
        <p v-if="!countdown.today" class="mt-1 text-sm" :style="{ color: 'var(--ink-soft)' }">
          {{ t(remainingKm, remainingEn) }}
        </p>
        <p v-else class="mt-1 text-sm font-bold" :style="{ color: 'var(--accent-bright)' }">
          {{ t('ថ្ងៃនេះ!', 'Today!') }}
        </p>
      </div>

      <div class="text-right">
        <p class="text-2xl md:text-3xl font-display" :style="{ color: 'var(--accent-bright)' }">
          {{ countdown.today ? t('ថ្ងៃនេះ', 'Today') : daysKh }}
        </p>
        <p v-if="!countdown.today" class="text-[10px] font-bold tracking-[0.18em] uppercase mt-1" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ថ្ងៃទៀត', 'DAYS TO GO') }}
        </p>
      </div>
    </div>

    <p class="text-[11px] mt-4 leading-relaxed" :style="{ color: 'var(--ink-faint)' }">
      {{ t('បុណ្យទាំងនេះ កំណត់តាមថ្ងៃពេញបូណ៌មី នៃបដិទិនចន្ទគតិ — កាលបរិច្ឆេទជាការប៉ាន់ស្មាន។', 'These festivals follow the lunar full moon; the exact date may shift slightly each year.') }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'
import { useFestivalCountdown } from '../composables/useFestivalCountdown'

const { t } = useLanguage()
const { countdown } = useFestivalCountdown()

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  return String(n).split('').map(d => khDigits[Number(d)]).join('')
}

const daysKh = computed(() => khNum(countdown.value ? countdown.value.days : 0))

const remainingKm = computed(() => {
  const d = countdown.value ? countdown.value.days : 0
  return `នៅសល់ ${khNum(d)} ថ្ងៃទៀត`
})
const remainingEn = computed(() => {
  const d = countdown.value ? countdown.value.days : 0
  return `${d} day${d === 1 ? '' : 's'} to go`
})
</script>
