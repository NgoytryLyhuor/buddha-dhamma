<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <!-- 1. PIN Lock Screen (Shown when not logged in) -->
    <div v-if="!isAuthenticated" class="min-h-[70vh] flex items-center justify-center py-6">
      <div
        class="w-full max-w-sm p-5 sm:p-8 rounded-3xl border shadow-2xl text-center space-y-5 transition-all"
        :class="{ 'animate-shake': isShaking }"
        :style="{ background: 'var(--bg-card)', borderColor: pinError ? 'var(--red)' : 'var(--border)' }"
      >
        <!-- Lock Icon Header -->
        <div class="relative w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl shadow-inner transition-transform duration-300 hover:scale-105"
          :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)', border: '1px solid var(--accent)' }">
          🔒
        </div>

        <div>
          <h2 class="text-xl sm:text-2xl font-bold font-display" :style="{ color: 'var(--ink)' }">
            TikTok Studio Login
          </h2>
          <p class="text-xs mt-1 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            តំបន់គ្រប់គ្រងផ្ទាល់ខ្លួនសម្រាប់ម្ចាស់ប៉ុស្តិ៍ @escape_the_matrix
          </p>
        </div>

        <!-- 4-Digit Indicator Dots -->
        <div class="flex items-center justify-center gap-3.5 py-1">
          <div
            v-for="idx in 4"
            :key="idx"
            class="w-4 h-4 rounded-full border-2 transition-all duration-200"
            :style="{
              borderColor: pinError ? 'var(--red)' : (pinInput.length >= idx ? 'var(--accent)' : 'var(--border-strong)'),
              background: pinError ? 'var(--red)' : (pinInput.length >= idx ? 'var(--accent-bright)' : 'transparent'),
              transform: pinInput.length >= idx ? 'scale(1.2)' : 'scale(1)',
              boxShadow: pinInput.length >= idx ? '0 0 10px var(--halo)' : 'none'
            }"
          ></div>
        </div>

        <!-- Error Message or Helper -->
        <div v-if="pinError" class="text-xs font-bold text-red-500 animate-pulse">
          ❌ លេខកូដសម្ងាត់មិនត្រឹមត្រូវទេ! សូមចុចម្ដងទៀត
        </div>
        <div v-else class="text-[11px] font-medium" :style="{ color: 'var(--ink-faint)' }">
          ចុចប៊ូតុងលេខខាងក្រោម (PIN ៤ ខ្ទង់) ៖
        </div>

        <!-- Number Keypad Grid (3 columns x 4 rows) -->
        <div class="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-[260px] sm:max-w-[270px] mx-auto pt-1">
          <button
            v-for="num in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
            :key="num"
            type="button"
            @click="pressKey(String(num))"
            class="keypad-btn"
          >
            <span class="text-xl font-bold font-mono">{{ num }}</span>
          </button>

          <!-- Bottom Row: Clear (C), 0, Backspace (⌫) -->
          <button
            type="button"
            @click="clearPin"
            class="keypad-btn text-xs font-bold"
            :style="{ color: 'var(--ink-muted)' }"
            title="សម្អាតទាំងអស់ (Clear)"
          >
            <span>C</span>
          </button>

          <button
            type="button"
            @click="pressKey('0')"
            class="keypad-btn"
          >
            <span class="text-xl font-bold font-mono">0</span>
          </button>

          <button
            type="button"
            @click="backspacePin"
            class="keypad-btn text-lg"
            :style="{ color: 'var(--ink-muted)' }"
            title="លុបថយក្រោយ (Delete)"
          >
            <span>⌫</span>
          </button>
        </div>

        <!-- Submit Button -->
        <div class="pt-2">
          <button
            type="button"
            @click="handlePinSubmit"
            :disabled="pinInput.length < 4"
            class="w-full py-3.5 rounded-xl font-bold text-sm text-white transition shadow-md cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-95"
            :style="{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)' }"
          >
            🔓 ចូលប្រើប្រាស់
          </button>
        </div>
      </div>
    </div>

    <!-- 2. Authenticated Studio Workspace -->
    <div v-else>
      <!-- Header -->
      <div class="mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-6" :style="{ borderColor: 'var(--border)' }">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-2"
            :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)', border: '1px solid var(--accent)' }">
            <span>✨ Gemini 3.8 Flash Active</span>
            <span>•</span>
            <span>@escape_the_matrix</span>
          </div>
          <h1 class="text-xl sm:text-2xl md:text-3xl font-display font-bold leading-tight" :style="{ color: 'var(--ink)' }">
            TikTok AI Content Studio
          </h1>
          <p class="text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
            បង្កើតកម្រង Slide TikTok ស្វ័យប្រវត្តិតាមទម្រង់ «វះកាត់ធម៌ពិត» ចម្លងយកទៅផុសបានភ្លាមៗ
          </p>
        </div>

        <div class="flex items-center justify-center gap-2">
          <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border"
            :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--accent-bright)' }">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Key រួចរាល់ស្វ័យប្រវត្តិ</span>
          </div>

          <button
            type="button"
            @click="handleLogout"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition cursor-pointer hover:bg-red-500/10 hover:text-red-400"
            :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--ink-muted)' }"
            title="ចាកចេញ / ចាក់សោ"
          >
            🔒 ចាកចេញ
          </button>
        </div>
      </div>

      <!-- Main Workspace (Grid 2 columns on Desktop) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Left Column: AI Prompt & Generator (7 cols) -->
        <div class="lg:col-span-7 space-y-6">
          <!-- Generator Card -->
          <div class="p-5 sm:p-6 rounded-2xl shadow-sm border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
            <label class="block text-sm font-bold mb-2 flex items-center justify-between" :style="{ color: 'var(--ink)' }">
              <span>បញ្ចូលសំណួរ ឬប្រធានបទធម៌ដែលចង់បង្កើត ៖</span>
              <span class="text-xs font-normal" :style="{ color: 'var(--ink-faint)' }">អាចសួរជាភាសាខ្មែរ ឬអង់គ្លេស</span>
            </label>

            <textarea
              v-model="inputQuestion"
              rows="3"
              class="w-full p-3.5 rounded-xl border text-sm transition focus:outline-none focus:ring-2 font-body"
              :style="{
                background: 'var(--bg-input)',
                borderColor: 'var(--border-strong)',
                color: 'var(--ink)',
                '--tw-ring-color': 'var(--accent)'
              }"
              placeholder="ឧ. ហេតុអ្វីបានព្រះពុទ្ធសម្តែងថារូបនេះជា «អនត្តា - មិនមែនជារបស់ខ្លួន» ? យើងមកវះកាត់មើល..."
            ></textarea>

            <!-- Preset Question Pills -->
            <div class="mt-4">
              <p class="text-xs font-bold mb-2" :style="{ color: 'var(--ink-muted)' }">
                💡 សំណួរគំរូដែលល្បីៗ (ចុចដើម្បីជ្រើសរើសភ្លាមៗ) ៖
              </p>
              <div class="flex flex-wrap gap-2">
                <button
                  v-for="preset in PRESET_QUESTIONS"
                  :key="preset.id"
                  type="button"
                  @click="selectPreset(preset)"
                  class="text-xs px-2.5 py-1.5 rounded-lg border transition text-left cursor-pointer hover:border-accent"
                  :style="{
                    background: inputQuestion === preset.question ? 'var(--accent-soft)' : 'var(--bg-card-2)',
                    borderColor: inputQuestion === preset.question ? 'var(--accent)' : 'var(--border)',
                    color: inputQuestion === preset.question ? 'var(--accent-bright)' : 'var(--ink-soft)'
                  }"
                >
                  {{ preset.title }}
                </button>
              </div>
            </div>

            <!-- Generate Action Button -->
            <div class="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                @click="handleGenerate"
                :disabled="isGenerating || !inputQuestion.trim()"
                class="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-95"
                :style="{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)' }"
              >
                <svg v-if="isGenerating" class="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                <svg v-else width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                </svg>
                <span>{{ isGenerating ? 'កំពុងគិត និងបង្កើតតាមទម្រង់... (Gemini 3.8 Flash)' : '✨ បង្កើត Slide ថ្មីដោយ AI' }}</span>
              </button>

              <button
                v-if="inputQuestion"
                type="button"
                @click="inputQuestion = ''"
                class="px-4 py-3 rounded-xl border text-xs font-bold cursor-pointer transition"
                :style="{ borderColor: 'var(--border)', color: 'var(--ink-muted)', background: 'var(--bg-card-2)' }"
              >
                សម្អាត
              </button>
            </div>

            <!-- Error Alert -->
            <div v-if="errorMessage" class="mt-4 p-3 rounded-xl text-xs flex items-start gap-2 bg-red-900/20 border border-red-500/40 text-red-300">
              <span class="font-bold">⚠️ កំហុស ៖</span>
              <span>{{ errorMessage }}</span>
            </div>
          </div>

          <!-- 1-Click Copy Master Bar -->
          <div v-if="activePost" class="p-5 rounded-2xl border shadow-sm" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-sm font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
                <span>🚀 ឧបករណ៍ចម្លងរហ័ស (1-Click Copy Tools)</span>
              </h3>
              <span class="text-xs px-2 py-0.5 rounded-full font-bold" :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)' }">
                Ready to Paste
              </span>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <button
                type="button"
                @click="copyToClipboard(activePost.slide1, 'ចម្លង Slide 1 (Hook)')"
                class="copy-pill"
              >
                <span>📋 Slide 1 (Hook)</span>
              </button>
              <button
                type="button"
                @click="copyToClipboard(activePost.slide2, 'ចម្លង Slide 2 (Dissection)')"
                class="copy-pill"
              >
                <span>📋 Slide 2 (Dissection)</span>
              </button>
              <button
                type="button"
                @click="copyToClipboard(activePost.slide3, 'ចម្លង Slide 3 (Takeaway)')"
                class="copy-pill"
              >
                <span>📋 Slide 3 (Takeaway)</span>
              </button>
              <button
                type="button"
                @click="copyAllSlides(activePost)"
                class="copy-pill font-bold"
                :style="{ borderColor: 'var(--accent)', color: 'var(--accent-bright)' }"
              >
                <span>📑 ចម្លងគ្រប់ Slide</span>
              </button>
              <button
                type="button"
                @click="copyToClipboard(activePost.caption, 'ចម្លង Caption & Hashtags')"
                class="copy-pill"
              >
                <span>🏷️ Caption & Tags</span>
              </button>
              <button
                type="button"
                @click="copyToClipboard(activePost.imagePrompt, 'ចម្លង Midjourney Prompt')"
                class="copy-pill"
              >
                <span>🎨 Image Prompt</span>
              </button>
            </div>

            <!-- Mobile Quick Jump to 9:16 Preview -->
            <a
              href="#preview-phone"
              class="lg:hidden mt-3 w-full py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition text-center"
              :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)', color: 'var(--accent-bright)' }"
            >
              <span>📱 មើល Slide Preview (9:16) ខាងក្រោម</span>
              <span>↓</span>
            </a>
          </div>

          <!-- Post Selection & Library Tabs -->
          <div class="p-5 rounded-2xl border shadow-sm" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
            <div class="flex items-center justify-between border-b pb-3 mb-4" :style="{ borderColor: 'var(--border)' }">
              <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <button
                  type="button"
                  @click="activeTab = 'curated'"
                  class="px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer"
                  :style="{
                    background: activeTab === 'curated' ? 'var(--accent-soft)' : 'transparent',
                    color: activeTab === 'curated' ? 'var(--accent-bright)' : 'var(--ink-muted)'
                  }"
                >
                  📚 កម្រងផុសគំរូ ({{ allPosts.length }})
                </button>
                <button
                  type="button"
                  @click="activeTab = 'history'"
                  class="px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer"
                  :style="{
                    background: activeTab === 'history' ? 'var(--accent-soft)' : 'transparent',
                    color: activeTab === 'history' ? 'var(--accent-bright)' : 'var(--ink-muted)'
                  }"
                >
                  💾 ផុសដែលបង្កើតដោយ AI ({{ savedHistory.length }})
                </button>
              </div>
            </div>

            <!-- Post Cards List -->
            <div class="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              <div
                v-for="post in (activeTab === 'curated' ? allPosts : savedHistory)"
                :key="post.id"
                @click="activePost = post; currentSlideIndex = 0"
                class="p-3.5 rounded-xl border transition cursor-pointer flex items-center justify-between gap-3 group"
                :style="{
                  background: activePost?.id === post.id ? 'var(--bg-card-2)' : 'transparent',
                  borderColor: activePost?.id === post.id ? 'var(--accent)' : 'var(--border)'
                }"
              >
                <div class="min-w-0">
                  <div class="flex items-center gap-2 mb-1">
                    <span v-if="post.isNew" class="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold">ថ្មី</span>
                    <span v-if="post.views" class="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-bold">{{ post.views }} views</span>
                    <span class="text-[10px]" :style="{ color: 'var(--ink-faint)' }">{{ post.category || 'TikTok' }}</span>
                  </div>
                  <h4 class="text-xs font-bold truncate" :style="{ color: 'var(--ink)' }">
                    {{ post.title }}
                  </h4>
                </div>

                <span class="text-xs font-bold shrink-0 opacity-60 group-hover:opacity-100" :style="{ color: 'var(--accent-bright)' }">
                  មើល & ចម្លង →
                </span>
              </div>

              <div v-if="activeTab === 'history' && savedHistory.length === 0" class="text-center py-8 text-xs" :style="{ color: 'var(--ink-faint)' }">
                មិនទាន់មានផុសដែលបានរក្សាទុកទេ។ វាយសំណួរខាងលើរួចចុច «បង្កើត Slide ថ្មីដោយ AI» ដើម្បីសាកល្បង!
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: 9:16 Interactive Mobile Carousel Preview (5 cols) -->
        <div id="preview-phone" class="lg:col-span-5 lg:sticky lg:top-20 space-y-2 scroll-mt-20">
          <div class="text-center mb-2 flex items-center justify-between">
            <span class="text-xs font-bold flex items-center gap-1.5" :style="{ color: 'var(--ink-muted)' }">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              <span>ទិដ្ឋភាពជាក់ស្តែងលើ TikTok (9:16 Preview)</span>
            </span>

            <!-- Slide Tabs Indicator -->
            <div class="flex items-center gap-1">
              <button
                v-for="i in 3"
                :key="i"
                type="button"
                @click="currentSlideIndex = i - 1"
                class="w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center transition cursor-pointer"
                :style="{
                  background: currentSlideIndex === (i - 1) ? 'var(--accent)' : 'var(--bg-card)',
                  color: currentSlideIndex === (i - 1) ? '#fff' : 'var(--ink-muted)',
                  border: '1px solid ' + (currentSlideIndex === (i - 1) ? 'var(--accent)' : 'var(--border)')
                }"
              >
                {{ i }}
              </button>
            </div>
          </div>

          <!-- 9:16 Smartphone Frame -->
          <div class="phone-frame relative mx-auto rounded-[32px] p-3 shadow-2xl border-4"
            :style="{
              background: '#0d0d0f',
              borderColor: '#2d2417',
              maxWidth: '340px',
              width: '100%'
            }">
            <!-- Notch / Camera bar -->
            <div class="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-3 bg-black/80 rounded-full z-20"></div>

            <!-- TikTok Screen Content -->
            <div class="relative w-full h-[540px] sm:h-[570px] rounded-[24px] overflow-hidden flex flex-col justify-between p-4 sm:p-5 text-white"
              :style="{
                background: 'linear-gradient(180deg, #111116 0%, #1a1612 50%, #0d0a07 100%)'
              }">
              <!-- Top Bar: Channel Branding -->
              <div class="flex items-center justify-between text-xs pt-1 z-10">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-[10px] font-bold text-black">☸</div>
                  <span class="font-bold text-amber-400 text-xs tracking-wide">@escape_the_matrix</span>
                </div>
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/80 font-mono">
                  {{ currentSlideIndex + 1 }} / 3
                </span>
              </div>

              <!-- Slide Content Area (Center) -->
              <div class="my-auto py-4 z-10">
                <!-- Slide 1: Hook -->
                <div v-if="currentSlideIndex === 0" class="text-center space-y-4">
                  <div class="inline-block px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider mb-1">
                    Slide 1 : The Hook
                  </div>
                  <div class="font-display font-black text-lg sm:text-xl leading-relaxed text-amber-200 whitespace-pre-line break-words [overflow-wrap:anywhere] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    {{ activePost?.slide1 || 'សូមជ្រើសរើស ឬបង្កើត Post ជាមុនសិន' }}
                  </div>
                </div>

                <!-- Slide 2: Dissection -->
                <div v-else-if="currentSlideIndex === 1" class="space-y-3">
                  <div class="text-center">
                    <span class="inline-block px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider mb-1">
                      Slide 2 : ការវះកាត់ធម៌ពិត
                    </span>
                  </div>
                  <div class="text-xs leading-relaxed text-amber-50 whitespace-pre-line break-words [overflow-wrap:anywhere] font-body drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] max-h-[420px] overflow-y-auto pr-1">
                    {{ activePost?.slide2 }}
                  </div>
                </div>

                <!-- Slide 3: Takeaway & CTA -->
                <div v-else-if="currentSlideIndex === 2" class="space-y-3 text-center">
                  <div class="inline-block px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider mb-1">
                    Slide 3 : មេរៀនជីវិត & CTA
                  </div>
                  <div class="text-xs leading-relaxed text-amber-100 whitespace-pre-line break-words [overflow-wrap:anywhere] font-body drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] max-h-[420px] overflow-y-auto pr-1">
                    {{ activePost?.slide3 }}
                  </div>
                </div>
              </div>

              <!-- Bottom Navigation Bar inside Phone -->
              <div class="flex items-center justify-between gap-1 sm:gap-1.5 text-xs pt-2 border-t border-white/10 z-10">
                <button
                  type="button"
                  @click="currentSlideIndex = Math.max(0, currentSlideIndex - 1)"
                  :disabled="currentSlideIndex === 0"
                  class="px-2 sm:px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[9px] sm:text-[10px] font-bold disabled:opacity-30 cursor-pointer shrink-0"
                >
                  ← ថយក្រោយ
                </button>

                <button
                  type="button"
                  @click="copyCurrentSlide"
                  class="px-2.5 sm:px-3 py-1 rounded bg-amber-500 hover:bg-amber-400 text-black text-[9px] sm:text-[10px] font-bold cursor-pointer transition shadow shrink-0"
                >
                  📋 ចម្លង Slide នេះ
                </button>

                <button
                  type="button"
                  @click="currentSlideIndex = Math.min(2, currentSlideIndex + 1)"
                  :disabled="currentSlideIndex === 2"
                  class="px-2 sm:px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[9px] sm:text-[10px] font-bold disabled:opacity-30 cursor-pointer shrink-0"
                >
                  បន្ទាប់ →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        <!-- Toast Notification -->
    <Teleport to="body">
      <transition name="toast">
        <div
          v-if="toastMessage"
          class="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-[150] px-4 py-2.5 rounded-xl shadow-2xl border text-xs font-bold flex items-center gap-2 bg-emerald-900/95 border-emerald-500 text-emerald-100 backdrop-blur max-w-[calc(100vw-2rem)]"
        >
          {{ toastMessage }}
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { PUBLISHED_AND_CURATED_POSTS } from '../data/tiktokPosts.js'
import { PRESET_QUESTIONS, useGeminiTikTok } from '../composables/useGeminiTikTok.js'

const {
  isGenerating,
  errorMessage,
  toastMessage,
  showToast,
  copyToClipboard,
  generatePost,
  getSavedPosts,
  isAuthenticated,
  verifyPin,
  logout
} = useGeminiTikTok()

const pinInput = ref('')
const pinError = ref(false)
const isShaking = ref(false)

const inputQuestion = ref('')
const activeTab = ref('curated')
const allPosts = ref(PUBLISHED_AND_CURATED_POSTS)
const activePost = ref(PUBLISHED_AND_CURATED_POSTS[0])
const currentSlideIndex = ref(0)
const savedHistory = ref([])

onMounted(() => {
  savedHistory.value = getSavedPosts()
  window.addEventListener('keydown', handleGlobalKeyDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleGlobalKeyDown)
})

function pressKey(digit) {
  if (pinInput.value.length >= 4) return
  pinError.value = false
  pinInput.value += digit
  if (pinInput.value.length === 4) {
    setTimeout(() => {
      handlePinSubmit()
    }, 120)
  }
}

function clearPin() {
  pinInput.value = ''
  pinError.value = false
}

function backspacePin() {
  pinError.value = false
  if (pinInput.value.length > 0) {
    pinInput.value = pinInput.value.slice(0, -1)
  }
}

function handlePinSubmit() {
  pinError.value = false
  if (verifyPin(pinInput.value)) {
    showToast('🔓 ចូលប្រើប្រាស់បានជោគជ័យ!')
    pinInput.value = ''
  } else {
    pinError.value = true
    isShaking.value = true
    setTimeout(() => {
      isShaking.value = false
      pinInput.value = ''
    }, 550)
  }
}

function handleGlobalKeyDown(e) {
  if (isAuthenticated.value) return
  if (e.key >= '0' && e.key <= '9') {
    pressKey(e.key)
  } else if (e.key === 'Backspace') {
    backspacePin()
  } else if (e.key === 'Enter') {
    handlePinSubmit()
  } else if (e.key === 'Escape' || e.key === 'c' || e.key === 'C') {
    clearPin()
  }
}

function handleLogout() {
  logout()
  showToast('🔒 បានចាកចេញ')
}

function selectPreset(preset) {
  inputQuestion.value = preset.question
}

async function handleGenerate() {
  if (!inputQuestion.value.trim()) return
  const result = await generatePost(inputQuestion.value)
  if (result) {
    const formatted = {
      id: 'ai-' + Date.now(),
      title: result.title || inputQuestion.value.substring(0, 40),
      category: 'AI Generated',
      isNew: true,
      ...result
    }
    activePost.value = formatted
    currentSlideIndex.value = 0
    savedHistory.value = getSavedPosts()
    activeTab.value = 'history'
    showToast('✨ បានបង្កើត Slide ដោយជោគជ័យ!')
  }
}

function copyCurrentSlide() {
  if (!activePost.value) return
  const texts = [activePost.value.slide1, activePost.value.slide2, activePost.value.slide3]
  copyToClipboard(texts[currentSlideIndex.value] || '', `ចម្លង Slide ${currentSlideIndex.value + 1}`)
}

function copyAllSlides(post) {
  if (!post) return
  const fullText = `=== SLIDE 1 ===\n${post.slide1}\n\n=== SLIDE 2 ===\n${post.slide2}\n\n=== SLIDE 3 ===\n${post.slide3}\n\n=== CAPTION ===\n${post.caption || ''}`
  copyToClipboard(fullText, 'ចម្លងគ្រប់ Slide ទាំងអស់')
}
</script>

<style scoped>
.copy-pill {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 0.8rem;
  border-radius: 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  border: 1px solid var(--border);
  background: var(--bg-card-2);
  color: var(--ink);
  transition: all 0.15s ease;
  cursor: pointer;
}

.copy-pill:hover {
  border-color: var(--accent);
  color: var(--accent-bright);
  transform: translateY(-1px);
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.25s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.keypad-btn {
  height: 50px;
  min-height: 50px;
  border-radius: 1rem;
  border: 1px solid var(--border);
  background: var(--bg-card-2);
  color: var(--ink);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}
@media (min-width: 640px) {
  .keypad-btn {
    height: 56px;
    min-height: 56px;
  }
}

.keypad-btn:hover {
  background: var(--accent-soft);
  border-color: var(--accent);
  color: var(--accent-bright);
}

.keypad-btn:active {
  transform: scale(0.92);
  background: var(--accent);
  color: #ffffff;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-8px); }
  40%, 80% { transform: translateX(8px); }
}

.animate-shake {
  animation: shake 0.4s ease-in-out;
}

</style>
