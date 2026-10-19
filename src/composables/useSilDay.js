import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { toKhmerLunarDate } from 'khmer-chhankitek-calendar'

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
export function toKhmerDigits(n) {
  return String(n).split('').map(d => khDigits[Number(d)] ?? d).join('')
}

export function useSilDay() {
  const now = ref(new Date())
  let timer = null

  onMounted(() => {
    // Refresh date at midnight / every minute
    timer = setInterval(() => {
      now.value = new Date()
    }, 60000)
  })

  onBeforeUnmount(() => {
    if (timer) clearInterval(timer)
  })

  const todayLunar = computed(() => {
    try {
      return toKhmerLunarDate(now.value)
    } catch (e) {
      return null
    }
  })

  const isTodaySil = computed(() => Boolean(todayLunar.value?.isSilDay))

  // Find next Sīl day starting from tomorrow
  const nextSilInfo = computed(() => {
    const today = now.value
    for (let i = 1; i <= 32; i++) {
      const d = new Date(today)
      d.setDate(d.getDate() + i)
      try {
        const l = toKhmerLunarDate(d)
        if (l && l.isSilDay) {
          return {
            daysAway: i,
            date: d,
            lunar: l,
          }
        }
      } catch (e) {
        // continue
      }
    }
    return null
  })

  const isTomorrowSil = computed(() => nextSilInfo.value?.daysAway === 1)

  return {
    now,
    todayLunar,
    isTodaySil,
    isTomorrowSil,
    nextSilInfo,
    toKhmerDigits,
  }
}
