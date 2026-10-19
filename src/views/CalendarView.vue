<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('បដិទិនពុទ្ធសាសនា & ថ្ងៃសីល', 'BUDDHIST LUNAR CALENDAR & SĪL DAYS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('បដិទិនចន្ទគតិខ្មែរ', 'Khmer Buddhist Lunar Calendar') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('បដិទិនចន្ទគតិខ្មែរ រៀបចំឡើងតាមចលនានៃព្រះចន្ទ ដោយរាប់ថ្ងៃកើត (ចន្ទកើន) និងថ្ងៃរោច (ចន្ទថយ)។ ក្នុងមួយខែមានថ្ងៃសីល ៤ ដង គឺ ៨ កើត, ១៥ កើត (ពេញបូណ៌មី), ៨ រោច និង ១៤ ឬ ១៥ រោច (ដាច់ខែ)។ ទំព័រនេះជួយឱ្យលោកអ្នកពិនិត្យថ្ងៃសីល និងថ្ងៃបុណ្យពុទ្ធសាសនាពេញមួយឆ្នាំ បានយ៉ាងងាយស្រួល។', 'The Khmer lunar calendar follows the lunar phases — waxing (Koeut) and waning (Roch). Each month contains four Uposatha (Sīl) observance days: 8th waxing, 15th waxing (Full Moon), 8th waning, and 14th/15th waning (New Moon). Easily track all Sīl days and Buddhist festivals year-round.') }}
    </p>

    <!-- Month & Year Selector -->
    <div class="card-paper p-5 md:p-6 mt-8">
      <div class="flex items-center justify-between gap-4 flex-wrap">
        <div class="flex items-center gap-2">
          <button class="font-btn px-3 py-1.5" @click="prevMonth" :title="t('ខែមុន', 'Previous month')">&#8592; {{ t('ខែមុន', 'Prev') }}</button>
          <button class="font-btn px-3 py-1.5" @click="goToCurrentMonth" :title="t('ខែបច្ចុប្បន្ន', 'Current month')">{{ t('ខែនេះ', 'This Month') }}</button>
          <button class="font-btn px-3 py-1.5" @click="nextMonth" :title="t('ខែបន្ទាប់', 'Next month')">{{ t('ខែបន្ទាប់', 'Next') }} &#8594;</button>
        </div>

        <div class="text-right">
          <p class="font-display text-xl md:text-2xl" :style="{ color: 'var(--accent)' }">
            {{ monthNamesKm[selectedMonth] }} {{ khNum(selectedYear) }}
          </p>
          <p class="text-xs mt-0.5" :style="{ color: 'var(--ink-muted)' }">
            {{ monthNamesEn[selectedMonth] }} {{ selectedYear }}
          </p>
        </div>
      </div>

      <!-- Quick legend -->
      <div class="flex items-center gap-4 mt-5 pt-3 flex-wrap text-xs" :style="{ borderTop: '1px dashed var(--border)' }">
        <span class="flex items-center gap-1.5">
          <span class="inline-block w-3 h-3 rounded-full" :style="{ background: 'var(--accent-bright)' }"></span>
          <span :style="{ color: 'var(--ink-soft)' }">{{ t('ថ្ងៃសីល (ឧបោសថ)', 'Sīl Day') }}</span>
        </span>
        <span class="flex items-center gap-1.5">
          <span class="text-sm">🌕</span>
          <span :style="{ color: 'var(--ink-soft)' }">{{ t('ពេញបូណ៌មី (១៥ កើត)', 'Full Moon (15K)') }}</span>
        </span>
        <span class="flex items-center gap-1.5">
          <span class="text-sm">🌑</span>
          <span :style="{ color: 'var(--ink-soft)' }">{{ t('ដាច់ខែ (១៤/១៥ រោច)', 'New Moon') }}</span>
        </span>
        <span class="flex items-center gap-1.5">
          <span class="inline-block w-2.5 h-2.5 rounded-xs" style="background: #eab308"></span>
          <span :style="{ color: 'var(--ink-soft)' }">{{ t('ថ្ងៃនេះ', 'Today') }}</span>
        </span>
      </div>
    </div>

    <!-- Calendar Grid -->
    <div class="card-paper p-3 md:p-6 mt-6 overflow-x-auto">
      <!-- Weekday headers -->
      <div class="grid grid-cols-7 gap-1 md:gap-2 text-center text-xs font-bold py-2" :style="{ borderBottom: '1px solid var(--border)' }">
        <span v-for="(w, idx) in weekHeaders" :key="idx" :style="{ color: idx === 0 ? 'var(--accent-bright)' : 'var(--ink-soft)' }">
          {{ t(w.km, w.en) }}
        </span>
      </div>

      <!-- Month days grid -->
      <div class="grid grid-cols-7 gap-1 md:gap-2 mt-2">
        <!-- Empty slots before month start -->
        <div v-for="b in emptyDaysBefore" :key="'blank-' + b" class="p-2 md:p-3 min-h-[75px] md:min-h-[90px] rounded-sm opacity-20"></div>

        <!-- Month calendar cells -->
        <div v-for="day in monthDays" :key="day.dateStr"
          class="p-1.5 md:p-2.5 min-h-[75px] md:min-h-[90px] rounded-sm flex flex-col justify-between cursor-pointer transition relative"
          :class="{
            'border-2': day.isToday,
            'shadow-sm': day.lunar?.isSilDay
          }"
          :style="getDayStyle(day)"
          @click="selectDay(day)">
          
          <div class="flex items-start justify-between">
            <span class="text-xs md:text-sm font-bold" :style="{ color: day.isToday ? 'var(--accent-bright)' : 'var(--ink)' }">
              {{ day.dayNum }}
            </span>
            <span v-if="day.lunar?.isSilDay" class="text-xs" :title="t('ថ្ងៃសីល', 'Sīl Day')">
              {{ day.lunar.moonDay === 15 && day.lunar.moonStatus === 'កើត' ? '🌕' : (day.lunar.moonDay >= 14 && day.lunar.moonStatus === 'រោច' ? '🌑' : '🌓') }}
            </span>
          </div>

          <div class="mt-1">
            <p class="text-[10px] md:text-[11px] leading-tight font-medium truncate"
              :style="{ color: day.lunar?.isSilDay ? 'var(--accent)' : 'var(--ink-muted)' }">
              {{ day.lunar ? `${day.lunar.moonDayKhmer} ${day.lunar.moonStatus}` : '' }}
            </p>
            <p v-if="day.festival" class="text-[9px] md:text-[10px] font-bold text-amber-600 truncate mt-0.5">
              {{ t(day.festival.km, day.festival.en) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Selected Day Detail Modal / Box -->
    <div v-if="selectedDayDetail" class="card-paper p-6 md:p-8 mt-6">
      <div class="flex items-start justify-between gap-3">
        <div>
          <span v-if="selectedDayDetail.lunar?.isSilDay" class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold mb-2"
            :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)', border: '1px solid var(--accent-bright)' }">
            ● {{ t('ថ្ងៃនេះជាថ្ងៃសីល', 'Sīl Day') }}
          </span>
          <span v-if="selectedDayDetail.festival" class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold mb-2 ml-2"
            :style="{ background: '#fef3c7', color: '#b45309', border: '1px solid #f59e0b' }">
            ★ {{ t(selectedDayDetail.festival.km, selectedDayDetail.festival.en) }}
          </span>
          <h3 class="font-display text-xl md:text-2xl" :style="{ color: 'var(--ink)' }">
            {{ selectedDayDetail.lunar?.lunarDateText }}
          </h3>
          <p class="text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
            {{ t(`ត្រូវនឹង ${selectedDayDetail.lunar?.gregorianDateText}`, `Gregorian: ${selectedDayDetail.lunar?.gregorianDate}`) }}
          </p>
        </div>

        <button class="font-btn px-2 py-1 text-sm" @click="selectedDayDetail = null" :aria-label="t('បិទ', 'Close')">&#10005;</button>
      </div>

      <div class="grid md:grid-cols-3 gap-3 mt-4 pt-4" :style="{ borderTop: '1px dashed var(--border)' }">
        <div class="p-3 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
          <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('ខែចន្ទគតិ', 'Lunar Month') }}</p>
          <p class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">ខែ{{ selectedDayDetail.lunar?.khmerMonth }} ({{ selectedDayDetail.lunar?.moonDayKhmer }} {{ selectedDayDetail.lunar?.moonStatus }})</p>
        </div>
        <div class="p-3 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
          <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('ឆ្នាំ & ស័ក', 'Animal Year & Sak') }}</p>
          <p class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">ឆ្នាំ{{ selectedDayDetail.lunar?.animalYear }} {{ selectedDayDetail.lunar?.sak }}</p>
        </div>
        <div class="p-3 rounded-sm" :style="{ background: 'var(--bg-card-2)' }">
          <p class="text-[10px] uppercase font-bold tracking-wider" :style="{ color: 'var(--ink-faint)' }">{{ t('ពុទ្ធសករាជ', 'Buddhist Era') }}</p>
          <p class="font-bold text-sm mt-1" :style="{ color: 'var(--ink)' }">ព.ស. {{ selectedDayDetail.lunar?.buddhistEraYearKhmer }}</p>
        </div>
      </div>

      <div v-if="selectedDayDetail.lunar?.isSilDay" class="mt-4 p-4 rounded-sm flex items-center justify-between gap-4 flex-wrap"
        :style="{ background: 'var(--accent-soft)', border: '1px solid var(--accent)' }">
        <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
          {{ t('ថ្ងៃសីល ជាឱកាសសន្សំបុណ្យកុសល ថ្វាយបង្គំព្រះ សមាទានសីល ៥ ឬ សីល ៨ និងចម្រើនសមាធិភាវនា។', 'Observance day is a precious opportunity to keep the 5 or 8 precepts, chant, and meditate.') }}
        </p>
        <div class="flex items-center gap-2">
          <router-link to="/chanting#chant-2" class="share-btn text-xs px-3 py-1 font-bold" style="color: var(--accent-bright)">
            {{ t('សូត្រសីល ៥', '5 Precepts') }}
          </router-link>
          <router-link to="/chanting#chant-3" class="share-btn text-xs px-3 py-1 font-bold" style="color: var(--accent); border-color: var(--accent)">
            {{ t('សមាទានសីល ៨', '8 Precepts') }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- List of All Sīl Days in Selected Month -->
    <div class="card-paper p-6 md:p-8 mt-6">
      <p class="chapter-label">{{ t('បញ្ជីថ្ងៃសីលក្នុងខែនេះ', 'SĪL DAYS THIS MONTH') }}</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">
        {{ t(`ថ្ងៃសីលទាំងអស់ ក្នុងខែ${monthNamesKm[selectedMonth]}`, `All Observance Days in ${monthNamesEn[selectedMonth]}`) }}
      </h3>
      <div class="grid md:grid-cols-2 gap-3 mt-4">
        <div v-for="s in silDaysInMonth" :key="s.dateStr"
          class="p-4 rounded-sm flex items-center justify-between gap-3 cursor-pointer hover:opacity-90"
          :style="{ background: 'var(--bg-card-2)', border: '1px solid var(--border)' }"
          @click="selectDay(s)">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-base">{{ s.lunar?.moonDay === 15 && s.lunar?.moonStatus === 'កើត' ? '🌕' : (s.lunar?.moonDay >= 14 && s.lunar?.moonStatus === 'រោច' ? '🌑' : '🌓') }}</span>
              <strong :style="{ color: 'var(--ink)' }">
                {{ s.lunar?.moonDayKhmer }} {{ s.lunar?.moonStatus }} ខែ{{ s.lunar?.khmerMonth }}
              </strong>
            </div>
            <p class="text-xs mt-1" :style="{ color: 'var(--ink-muted)' }">
              {{ s.lunar?.gregorianDateText }} ({{ s.lunar?.dayOfWeek }})
            </p>
          </div>
          <span class="text-xs font-bold px-2 py-0.5 rounded-full" :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
            {{ s.lunar?.observanceText || t('ថ្ងៃសីល', 'Sīl Day') }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { toKhmerLunarDate } from 'khmer-chhankitek-calendar'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const today = new Date()
const selectedYear = ref(today.getFullYear())
const selectedMonth = ref(today.getMonth())
const selectedDayDetail = ref(null)

const monthNamesKm = ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ']
const monthNamesEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const weekHeaders = [
  { km: 'អាទិត្យ', en: 'Sun' },
  { km: 'ចន្ទ', en: 'Mon' },
  { km: 'អង្គារ', en: 'Tue' },
  { km: 'ពុធ', en: 'Wed' },
  { km: 'ព្រហស្បតិ៍', en: 'Thu' },
  { km: 'សុក្រ', en: 'Fri' },
  { km: 'សៅរ៍', en: 'Sat' },
]

const khDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩']
function khNum(n) {
  return String(n).split('').map(d => khDigits[Number(d)] ?? d).join('')
}

function prevMonth() {
  if (selectedMonth.value === 0) {
    selectedMonth.value = 11
    selectedYear.value--
  } else {
    selectedMonth.value--
  }
}

function nextMonth() {
  if (selectedMonth.value === 11) {
    selectedMonth.value = 0
    selectedYear.value++
  } else {
    selectedMonth.value++
  }
}

function goToCurrentMonth() {
  selectedYear.value = today.getFullYear()
  selectedMonth.value = today.getMonth()
}

// Major annual Buddhist festivals identifier
function checkFestival(l) {
  if (!l) return null
  if (l.moonStatus === 'កើត' && l.moonDay === 15 && l.khmerMonth === 'មាឃ') return { km: 'មាឃបូជា', en: 'Māgha Pūjā' }
  if (l.moonStatus === 'កើត' && l.moonDay === 15 && l.khmerMonth === 'ពិសាខ') return { km: 'វិសាខបូជា', en: 'Vesākha Pūjā' }
  if (l.moonStatus === 'កើត' && l.moonDay === 15 && (l.khmerMonth === 'ទុតិយាសាឍ' || l.khmerMonth === 'អាសាឍ')) return { km: 'អាសាឡ្ហបូជា', en: 'Āsāḷha Pūjā' }
  if (l.moonStatus === 'រោច' && l.moonDay === 1 && (l.khmerMonth === 'ទុតិយាសាឍ' || l.khmerMonth === 'អាសាឍ')) return { km: 'ចូលព្រះវស្សា', en: 'Vassa Begins' }
  if (l.moonStatus === 'រោច' && l.moonDay === 15 && l.khmerMonth === 'ភទ្របទ') return { km: 'ភ្ជុំបិណ្ឌ', en: 'Pchum Ben' }
  if (l.moonStatus === 'កើត' && l.moonDay === 15 && l.khmerMonth === 'អស្សុជ') return { km: 'ចេញព្រះវស្សា', en: 'Pavāraṇā (End of Vassa)' }
  if (l.moonStatus === 'រោច' && l.moonDay === 1 && l.khmerMonth === 'អស្សុជ') return { km: 'ចាប់ផ្តើមរដូវកឋិន', en: 'Kaṭhina Season Starts' }
  return null
}

const emptyDaysBefore = computed(() => {
  const firstDay = new Date(selectedYear.value, selectedMonth.value, 1)
  return firstDay.getDay()
})

const monthDays = computed(() => {
  const daysInMonth = new Date(selectedYear.value, selectedMonth.value + 1, 0).getDate()
  const list = []

  for (let d = 1; d <= daysInMonth; d++) {
    const dateObj = new Date(selectedYear.value, selectedMonth.value, d)
    let lunar = null
    try {
      lunar = toKhmerLunarDate(dateObj)
    } catch (e) {
      // fallback
    }

    const isToday =
      dateObj.getFullYear() === today.getFullYear() &&
      dateObj.getMonth() === today.getMonth() &&
      dateObj.getDate() === today.getDate()

    list.push({
      dayNum: d,
      dateObj,
      dateStr: `${selectedYear.value}-${selectedMonth.value + 1}-${d}`,
      lunar,
      isToday,
      festival: checkFestival(lunar),
    })
  }

  return list
})

const silDaysInMonth = computed(() => {
  return monthDays.value.filter(d => d.lunar && d.lunar.isSilDay)
})

function getDayStyle(day) {
  if (day.isToday) {
    return {
      borderColor: 'var(--accent-bright)',
      background: 'var(--accent-soft)',
    }
  }
  if (day.lunar?.isSilDay) {
    return {
      background: 'var(--bg-card-2)',
      border: '1px solid var(--accent)',
    }
  }
  return {
    background: 'var(--bg-card-2)',
    border: '1px solid var(--border)',
  }
}

function selectDay(day) {
  selectedDayDetail.value = day
}
</script>
