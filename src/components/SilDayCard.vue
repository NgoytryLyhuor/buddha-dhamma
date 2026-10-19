<template>
  <div v-if="todayLunar" class="card-paper p-5 md:p-6 mt-6 transition-all"
    :style="isTodaySil ? { borderColor: 'var(--accent-bright)', boxShadow: '0 0 0 1px var(--accent-soft)' } : {}">
    <div class="flex items-center justify-between gap-3 flex-wrap">
      <div class="flex items-center gap-2">
        <span class="text-xl" :style="{ color: 'var(--accent-bright)' }">☸</span>
        <p class="chapter-label m-0">{{ t('បដិទិនចន្ទគតិ & ថ្ងៃសីល', 'KHMER LUNAR CALENDAR & SĪL DAY') }}</p>
      </div>

      <!-- Sīl status badge -->
      <span v-if="isTodaySil"
        class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
        :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)', border: '1px solid var(--accent-bright)' }">
        <span class="animate-pulse">●</span>
        {{ t('ថ្ងៃនេះជាថ្ងៃសីល', 'Today is Sīl Day') }}
      </span>
      <span v-else-if="isTomorrowSil"
        class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold"
        :style="{ background: 'var(--accent-soft)', color: 'var(--accent)' }">
        {{ t('ស្អែកជាថ្ងៃសីល', 'Tomorrow is Sīl Day') }}
      </span>
      <span v-else-if="nextSilInfo" class="text-xs" :style="{ color: 'var(--ink-muted)' }">
        {{ t(`នៅសល់ ${toKhmerDigits(nextSilInfo.daysAway)} ថ្ងៃទៀតដល់ថ្ងៃសីល`, `${nextSilInfo.daysAway} days to next Sīl`) }}
      </span>
    </div>

    <!-- Today lunar date text -->
    <div class="mt-3">
      <p class="font-display text-lg md:text-xl leading-snug" :style="{ color: 'var(--ink)' }">
        {{ todayLunar.lunarDateText }}
      </p>
      <p class="text-xs mt-1" :style="{ color: 'var(--ink-muted)' }">
        {{ t(`ត្រូវនឹង ${todayLunar.gregorianDateText}`, `Corresponding to ${todayLunar.gregorianDate}`) }}
        <span v-if="todayLunar.observanceText" class="ml-2 font-medium" :style="{ color: 'var(--accent)' }">
          — {{ todayLunar.observanceText }}
        </span>
      </p>
    </div>

    <!-- Quick advice and action links for Sīl day -->
    <div v-if="isTodaySil" class="mt-4 pt-3 flex items-center justify-between gap-3 flex-wrap"
      :style="{ borderTop: '1px dashed var(--border)' }">
      <p class="text-xs leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ថ្ងៃឧបោសថសីល ជាថ្ងៃដ៏ពិសិដ្ឋសម្រាប់សមាទានសីល ៥ ឬសីល ៨ ធ្វើទាន និងចម្រើនសមាធិ។', 'Uposatha day is auspicious for observing the 5 or 8 precepts, giving alms, and meditation.') }}
      </p>
      <div class="flex items-center gap-2">
        <router-link to="/chanting#chant-2" class="share-btn text-xs px-2.5 py-1" style="color: var(--ink)">
          {{ t('សូត្រសីល ៥', '5 Precepts') }}
        </router-link>
        <router-link to="/chanting#chant-3" class="share-btn text-xs px-2.5 py-1 font-bold" style="color: var(--accent-bright); border-color: var(--accent)">
          {{ t('សមាទានសីល ៨', '8 Precepts') }}
        </router-link>
      </div>
    </div>

    <!-- Notice for next Sīl day if today is not -->
    <div v-else-if="nextSilInfo" class="mt-3 pt-2 text-xs flex items-center justify-between gap-2 flex-wrap"
      :style="{ borderTop: '1px dashed var(--border)', color: 'var(--ink-muted)' }">
      <span>
        {{ t('ថ្ងៃសីលបន្ទាប់៖', 'Next Sīl day:') }}
        <strong :style="{ color: 'var(--ink)' }">
          {{ nextSilInfo.lunar.moonDayKhmer }} {{ nextSilInfo.lunar.moonStatus }} ខែ{{ nextSilInfo.lunar.khmerMonth }}
        </strong>
        ({{ nextSilInfo.lunar.gregorianDateText }})
      </span>
      <router-link to="/daily" class="hover:underline" :style="{ color: 'var(--accent)' }">
        {{ t('មើលបដិបត្តិប្រចាំថ្ងៃ →', 'Daily practice →') }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
import { useSilDay } from '../composables/useSilDay'

const { t } = useLanguage()
const {
  todayLunar,
  isTodaySil,
  isTomorrowSil,
  nextSilInfo,
  toKhmerDigits,
} = useSilDay()
</script>
