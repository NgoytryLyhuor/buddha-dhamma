import { ref, computed, onBeforeUnmount, onMounted } from 'vue'
import { toKhmerLunarDate } from 'khmer-chhankitek-calendar'

// Khmer festivals follow the lunar calendar, so Gregorian dates shift yearly.
// Instead of hardcoding (which drifts and is easy to get wrong), we compute the
// full/dark-moon days for the relevant Khmer months using the
// khmer-chhankitek-calendar lunisolar algorithm, which is accurate for any year.
//
// Festival rules (per official Khmer practice, cross-checked against the
// Ministry's public-holiday calendar):
//   - Meak Bochea  : full moon (15 កើត) of month មាឃ
//   - Visak Bochea : full moon (15 កើត) of month ពិសាខ
//   - Asalha Bochea: full moon (15 កើត) of the LAST Asadha month
//                    (ទុតិយាសាឍ in leap years, else អាសាឍ)
//   - Vassa start  : the day after Asalha Bochea
//   - Pchum Ben    : dark moon (15 រោច) of month ភទ្របទ
//   - Kathina      : season opens the day after Pavāraṇā (full moon កត្តិក)

const FESTIVALS = [
  {
    key: 'meak',
    km: 'មាឃបូជា',
    en: 'Meak Bochea',
    find(l) { return l.moonStatus === 'កើត' && l.moonDay === 15 && l.khmerMonth === 'មាឃ' },
  },
  {
    key: 'visak',
    km: 'វិសាខបូជា',
    en: 'Visak Bochea',
    find(l) { return l.moonStatus === 'កើត' && l.moonDay === 15 && l.khmerMonth === 'ពិសាខ' },
  },
  {
    key: 'asalha',
    km: 'អាសាឡ្ហបូជា',
    en: 'Asalha Bochea',
    // last Asadha of the year: ទុតិយាសាឍ (leap) else អាសាឍ
    find(l) { return l.moonStatus === 'កើត' && l.moonDay === 15 && (l.khmerMonth === 'ទុតិយាសាឍ' || l.khmerMonth === 'អាសាឍ') },
  },
  {
    key: 'vassa',
    km: 'ចូលព្រះវស្សា',
    en: 'Vassa (Rains retreat)',
    offset: 1,
    find(l) { return l.moonStatus === 'កើត' && l.moonDay === 15 && (l.khmerMonth === 'ទុតិយាសាឍ' || l.khmerMonth === 'អាសាឍ') },
  },
  {
    key: 'pchum',
    km: 'ភ្ជុំបិណ្ឌ',
    en: 'Pchum Ben',
    find(l) { return l.moonStatus === 'រោច' && l.moonDay === 15 && l.khmerMonth === 'ភទ្របទ' },
  },
  {
    key: 'kathina',
    km: 'កឋិនទាន',
    en: 'Kaṭhina season',
    offset: 1,
    find(l) { return l.moonStatus === 'កើត' && l.moonDay === 15 && l.khmerMonth === 'កត្តិក' },
  },
]

function isoFromD(d) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

// Scan each day for the given year and the following year, returning matching
// festivals (a festival may appear twice across the two-year window; we keep
// both and sort later — the countdown just picks the next upcoming one).
function computeYear(year) {
  const out = []
  const start = new Date(year, 0, 1)
  const totalDays = 366 + 31 // scan through end of the following year
  for (let i = 0; i < totalDays; i++) {
    const d = new Date(start.getTime() + i * 86400000)
    const iso = isoFromD(d)
    const l = toKhmerLunarDate(iso)
    for (const f of FESTIVALS) {
      if (f.find(l)) out.push({ key: f.key, iso })
    }
  }
  return out
}

function allFestivals() {
  const now = new Date()
  const thisYear = now.getFullYear()
  const found = new Map()
  for (const year of [thisYear - 1, thisYear, thisYear + 1]) {
    for (const ev of computeYear(year)) {
      found.set(ev.key + ev.iso, ev)
    }
  }
  const list = []
  for (const ev of found.values()) {
    const f = FESTIVALS.find((x) => x.key === ev.key)
    if (!f) continue
    const dateObj = new Date(ev.iso + 'T00:00:00')
    if (f.offset) dateObj.setDate(dateObj.getDate() + f.offset)
    const date = isoFromD(dateObj)
    list.push({ km: f.km, en: f.en, date, ts: dateObj.getTime() })
  }
  return list.sort((a, b) => a.ts - b.ts)
}

function startOfToday() {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d
}

export function useFestivalCountdown() {
  const now = ref(Date.now())
  let timer = null

  function update() { now.value = startOfToday().getTime() }
  function start() {
    update()
    timer = setInterval(update, 3600 * 1000)
  }
  function stop() { if (timer) { clearInterval(timer); timer = null } }

  onMounted(start)
  onBeforeUnmount(stop)

  const countdown = computed(() => {
    const t0 = now.value
    for (const f of allFestivals()) {
      if (f.ts >= t0) {
        const days = Math.round((f.ts - t0) / 86400000)
        return { km: f.km, en: f.en, date: f.date, days, today: days === 0, ts: f.ts }
      }
    }
    return null
  })

  return { countdown }
}
