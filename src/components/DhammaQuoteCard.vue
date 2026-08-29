<template>
  <div class="card-paper p-6 md:p-8 mt-8">
    <p class="chapter-label">{{ t('រីករាយនឹងពាក្យពិតរបស់ព្រះពុទ្ធ', 'WORDS OF THE BUDDHA') }}</p>
    <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">
      {{ t('ពាក្យពិត សម្រាប់ថ្ងៃនេះ', 'A Dhamma Thought for Today') }}
    </h3>

    <transition name="quote-fade" mode="out-in">
      <blockquote :key="quote.km" class="mt-5">
        <p class="quote-pali leading-relaxed" :style="{ color: 'var(--ink)' }">{{ quote.km }}</p>
        <p class="mt-3 text-[15px] leading-relaxed italic" :style="{ color: 'var(--ink-soft)' }">{{ quote.en }}</p>
        <footer class="mt-3 text-[11px] uppercase tracking-wide" :style="{ color: 'var(--accent)' }">
          — {{ quote.source }}
        </footer>
      </blockquote>
    </transition>

    <div class="quote-actions">
      <button class="quote-btn" type="button" @click="next">
        <span class="qi">&#127922;</span> <span>{{ t('មួយទៀត', 'Another') }}</span>
      </button>
      <button class="quote-btn" type="button" @click="copy">
        <span class="qi" v-if="copied">&#10003;</span>
        <span class="qi" v-else>&#128203;</span>
        <span>{{ t(copied ? 'ចម្លងរួច' : 'ចម្លង', copied ? 'Copied' : 'Copy') }}</span>
      </button>
      <button class="quote-btn" type="button" @click="share">
        <span class="qi">&#128229;</span> <span>{{ t('ចែករំលែក', 'Share') }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
import { useCopy } from '../composables/useCopy'
import { useRandomQuote } from '../composables/useRandomQuote'

const { t } = useLanguage()
const { copied, copyText } = useCopy()
const { quote, next, shareText } = useRandomQuote()

function copy() {
  copyText(shareText())
}

async function share() {
  const text = shareText()
  if (navigator.share) {
    try {
      await navigator.share({ title: 'Buddha Dhamma', text })
      return
    } catch (e) { /* user cancelled or failed; fall back to copy */ }
  }
  copyText(text)
}
</script>

<style scoped>
.quote-fade-enter-active,
.quote-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.quote-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.quote-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
.quote-pali {
  font-family: inherit;
}
.quote-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}
.quote-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  font-size: 13px;
  border: 1px solid var(--accent);
  border-radius: 4px;
  background: var(--bg-card);
  color: var(--ink-soft);
  cursor: pointer;
  transition: all 0.2s;
}
.quote-btn:hover {
  box-shadow: var(--shadow);
  color: var(--accent);
}
.quote-btn .qi {
  font-size: 15px;
  line-height: 1;
}
</style>
