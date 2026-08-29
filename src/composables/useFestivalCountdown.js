import { ref, computed, onBeforeUnmount, onMounted } from 'vue'

// Khmer festivals follow the lunar full-moon, so Gregorian dates shift yearly.
// These are the observed/expected full-moon dates for the upcoming cycles.
// Index: [Māgha, Vesākha, Āsāḷha, Vassa start, Kaṭhina]
const FESTIVAL_DATES = [
  { year: 2026, map: [
    { km: 'មាឃបូជា', en: 'Māgha Pūjā', date: '2026-03-03' },
    { km: 'វិសាខបូជា', en: 'Vesākha Pūjā', date: '2026-05-01' },
    { km: 'អាសាឡ្ហបូជា', en: 'Āsāḷha Pūjā', date: '2026-07-29' },
    { km: 'ព្រះវស្សា', en: 'Vassa (Rains)', date: '2026-07-30' },
    { km: 'កឋិនទាន', en: 'Kaṭhina', date: '2026-10-26' },
  ]},
  { year: 2027, map: [
    { km: 'មាឃបូជា', en: 'Māgha Pūjā', date: '2027-02-22' },
    { km: 'វិសាខបូជា', en: 'Vesākha Pūjā', date: '2027-05-20' },
    { km: 'អាសាឡ្ហបូជា', en: 'Āsāḷha Pūjā', date: '2027-07-19' },
    { km: 'ព្រះវស្សា', en: 'Vassa (Rains)', date: '2027-07-20' },
    { km: 'កឋិនទាន', en: 'Kaṭhina', date: '2027-10-16' },
  ]},
]

function parse(d) {
  return new Date(d + 'T00:00:00')
}

function startOfToday() {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d
}

function allFestivals() {
  const out = []
  const nowYear = new Date().getFullYear()
  for (const { year, map } of FESTIVAL_DATES) {
    if (year < nowYear - 1 || year > nowYear + 1) continue
    for (const f of map) out.push({ ...f, ts: parse(f.date).getTime() })
  }
  return out.sort((a, b) => a.ts - b.ts)
}

export function useFestivalCountdown() {
  const now = ref(Date.now())
  let timer = null

  function update() { now.value = startOfToday().getTime() }
  function start() {
    update()
    timer = setInterval(() => {
      // re-check every hour; day boundary is enough but cheap to run
      update()
    }, 3600 * 1000)
  }
  function stop() { if (timer) { clearInterval(timer); timer = null } }

  onMounted(start)
  onBeforeUnmount(stop)

  const countdown = computed(() => {
    const t0 = startOfToday().getTime()
    const list = allFestivals()
    let next = null
    for (const f of list) {
      if (f.ts >= t0) { next = f; break }
    }
    if (!next) return null
    const days = Math.round((next.ts - t0) / 86400000)
    const today = days === 0
    return { km: next.km, en: next.en, date: next.date, days, today, ts: next.ts }
  })

  return { countdown }
}
