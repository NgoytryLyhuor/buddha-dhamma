<template>
  <div class="max-w-6xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
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
      <!-- Studio Header -->
      <div class="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b pb-4 sm:pb-6" :style="{ borderColor: 'var(--border)' }">
        <div>
          <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold mb-1"
            :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)', border: '1px solid var(--accent)' }">
            <span>✨ Gemini 3.8 Flash</span>
            <span>•</span>
            <span>@escape_the_matrix</span>
          </div>
          <h1 class="text-xl sm:text-2xl md:text-3xl font-display font-bold leading-tight" :style="{ color: 'var(--ink)' }">
            TikTok AI Content Studio
          </h1>
          <p class="text-xs sm:text-sm mt-0.5" :style="{ color: 'var(--ink-muted)' }">
            បង្កើតកម្រង Slide TikTok ស្វ័យប្រវត្តិតាមទម្រង់ «ពន្យល់ធម៌ពិតស៊ីជម្រៅ» ចម្លងយកទៅផុសបានភ្លាមៗ
          </p>
        </div>

        <div class="flex items-center justify-between sm:justify-end gap-2">
          <div class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold border"
            :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--accent-bright)' }">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-[11px]">Key រួចរាល់</span>
          </div>

          <button
            type="button"
            @click="handleLogout"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer hover:bg-red-500/10 hover:text-red-400"
            :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--ink-muted)' }"
            title="ចាកចេញ / ចាក់សោ"
          >
            🔒 ចាកចេញ
          </button>
        </div>
      </div>

      <!-- Mobile Segmented Tabs Navigation (Visible ONLY on mobile screens < 1024px) -->
      <div class="lg:hidden sticky top-14 z-30 mb-4 p-1 rounded-2xl border shadow-sm flex items-center justify-between gap-1 backdrop-blur-md"
        :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
        <button
          type="button"
          @click="mobileTab = 'create'"
          class="flex-1 py-2 px-1.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer"
          :style="{
            background: mobileTab === 'create' ? 'var(--accent)' : 'transparent',
            color: mobileTab === 'create' ? 'var(--accent-ink, #ffffff)' : 'var(--ink-muted)'
          }"
        >
          <span>✍️ បង្កើត AI</span>
        </button>

        <button
          type="button"
          @click="mobileTab = 'preview'"
          class="flex-1 py-2 px-1.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer relative"
          :style="{
            background: mobileTab === 'preview' ? 'var(--accent)' : 'transparent',
            color: mobileTab === 'preview' ? 'var(--accent-ink, #ffffff)' : 'var(--ink-muted)'
          }"
        >
          <span>📱 Slide (9:16)</span>
          <span v-if="activePost?.isNew" class="w-2 h-2 rounded-full bg-emerald-400 absolute top-1.5 right-1.5 animate-ping"></span>
        </button>

        <button
          type="button"
          @click="mobileTab = 'library'"
          class="flex-1 py-2 px-1.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1 cursor-pointer"
          :style="{
            background: mobileTab === 'library' ? 'var(--accent)' : 'transparent',
            color: mobileTab === 'library' ? 'var(--accent-ink, #ffffff)' : 'var(--ink-muted)'
          }"
        >
          <span>📚 បណ្ណាល័យ ({{ allPosts.length + savedHistory.length }})</span>
        </button>
      </div>

      <!-- Main Workspace (Grid 2 columns on Desktop, Tabbed on Mobile) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        <!-- Left Column (Desktop 7 cols): Generator, 1-Click Tools, and Library -->
        <div class="lg:col-span-7 space-y-5">

          <!-- 1. Generator Card (Shown in 'create' tab on mobile, always on desktop) -->
          <div
            class="p-4 sm:p-6 rounded-2xl shadow-sm border space-y-4"
            :class="{ 'hidden lg:block': mobileTab !== 'create' }"
            :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }"
          >
            <div class="flex items-center justify-between">
              <label class="text-sm font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
                <span>✨ បញ្ចូលសំណួរ ឬប្រធានបទធម៌ ៖</span>
              </label>
              <button
                v-if="inputQuestion"
                type="button"
                @click="inputQuestion = ''"
                class="text-xs font-bold px-2 py-0.5 rounded-md hover:text-red-400 transition cursor-pointer"
                :style="{ color: 'var(--ink-muted)' }"
              >
                ✕ លុបអត្ថបទ
              </button>
            </div>

            <!-- Main Input Textarea (Tailored for mobile typing) -->
            <div class="relative">
              <textarea
                v-model="inputQuestion"
                rows="4"
                class="w-full p-3.5 rounded-xl border text-sm sm:text-base leading-relaxed transition focus:outline-none focus:ring-2 font-body"
                :style="{
                  background: 'var(--bg-input)',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--ink)',
                  '--tw-ring-color': 'var(--accent)'
                }"
                placeholder="ឧ. ហេតុអ្វីបានជាមនុស្សកាន់តែមានលុយ ឬជោគជ័យ កាន់តែមានអារម្មណ៍ថាឯកោ និងទទេស្អាត? (ឬវាយសំណួរធម៌ជីវិតផ្សេងៗ...)"
              ></textarea>
            </div>

            <div class="text-xs leading-relaxed" :style="{ color: 'var(--ink-faint)' }">
              💡 វាយសំណួរធម៌ ជីវិត ឬចិត្តសាស្ត្រណាមួយរួចចុច «បង្កើត Slide ថ្មីដោយ AI»។ ប្រព័ន្ធនឹងរៀបចំកម្រង Slide លម្អិតស៊ីជម្រៅ (៥ Slide) និង Caption ស្វ័យប្រវត្តិតាមទម្រង់ TikTok ធម៌ពិតស៊ីជម្រៅ!
            </div>

            <!-- Generate Action Button (Big & Thumb-friendly for Mobile) -->
            <div class="pt-1">
              <button
                type="button"
                @click="handleGenerate"
                :disabled="isGenerating || !inputQuestion.trim()"
                class="w-full min-h-[48px] sm:min-h-[50px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm sm:text-base text-white transition shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
                :style="{ background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-bright) 100%)' }"
              >
                <svg v-if="isGenerating" class="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                </svg>
                <span>{{ isGenerating ? 'កំពុងគិត និងរៀបចំ Slide... (Gemini)' : '✨ បង្កើត Slide ថ្មីដោយ AI' }}</span>
              </button>
            </div>

            <!-- Error Alert -->
            <div v-if="errorMessage" class="p-3 rounded-xl text-xs flex items-start gap-2 bg-red-900/20 border border-red-500/40 text-red-300">
              <span class="font-bold">⚠️ កំហុស ៖</span>
              <span>{{ errorMessage }}</span>
            </div>

            <!-- Mobile Quick Banner to jump to active post preview -->
            <div
              v-if="activePost"
              class="lg:hidden pt-2 border-t flex items-center justify-between gap-2"
              :style="{ borderColor: 'var(--border)' }"
            >
              <div class="min-w-0">
                <span class="text-[11px] block truncate" :style="{ color: 'var(--ink-muted)' }">
                  ផុសបច្ចុប្បន្ន ៖ <strong :style="{ color: 'var(--ink)' }">{{ activePost.title }}</strong>
                </span>
              </div>
              <button
                type="button"
                @click="mobileTab = 'preview'"
                class="shrink-0 px-3 py-1.5 rounded-xl border text-xs font-bold cursor-pointer transition flex items-center gap-1"
                :style="{ background: 'var(--accent-soft)', borderColor: 'var(--accent)', color: 'var(--accent-bright)' }"
              >
                <span>📱 មើល Slide</span>
                <span>→</span>
              </button>
            </div>
          </div>

          <!-- 2. 1-Click Copy Master Bar (Shown in 'preview' tab on mobile, always on desktop) -->
          <div
            v-if="activePost"
            class="p-4 sm:p-5 rounded-2xl border shadow-sm"
            :class="{ 'hidden lg:block': mobileTab !== 'preview' }"
            :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }"
          >
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-sm font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
                <span>🚀 ឧបករណ៍ចម្លងរហ័ស (1-Click Copy)</span>
              </h3>
              <span class="text-[11px] px-2 py-0.5 rounded-full font-bold" :style="{ background: 'var(--accent-soft)', color: 'var(--accent-bright)' }">
                ប៉ះដើម្បីចម្លងភ្លាមៗ
              </span>
            </div>

            <!-- Responsive Copy Buttons Grid (Dynamically adapts to 3 or 5+ slides) -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <button
                v-for="(slide, idx) in currentSlides"
                :key="idx"
                type="button"
                @click="copyPill(slide, `ចម្លង Slide ${idx + 1}`, `slide_${idx}`)"
                class="copy-pill"
              >
                <span>{{ copiedKey === `slide_${idx}` ? '✓ បានចម្លង!' : `📋 Slide ${idx + 1}` }}</span>
              </button>

              <button
                type="button"
                @click="copyPill(getAllSlidesText(activePost), 'ចម្លងគ្រប់ Slide', 'all')"
                class="copy-pill font-bold col-span-2 sm:col-span-1"
                :style="{ borderColor: 'var(--accent)', color: 'var(--accent-bright)' }"
              >
                <span>{{ copiedKey === 'all' ? '✓ ចម្លងគ្រប់ Slide!' : '📑 ចម្លងគ្រប់ Slide' }}</span>
              </button>

              <button
                type="button"
                @click="copyPill(activePost.caption, 'ចម្លង Caption & Hashtags', 'caption')"
                class="copy-pill"
              >
                <span>{{ copiedKey === 'caption' ? '✓ បានចម្លង!' : '🏷️ Caption & Tags' }}</span>
              </button>

              <button
                type="button"
                @click="copyPill(activePost.imagePrompt, 'ចម្លង Midjourney Prompt', 'prompt')"
                class="copy-pill"
              >
                <span>{{ copiedKey === 'prompt' ? '✓ បានចម្លង!' : '🎨 Image Prompt' }}</span>
              </button>
            </div>
          </div>

          <!-- 3. Post Selection & Library Card (Shown in 'library' tab on mobile, always on desktop) -->
          <div
            class="p-4 sm:p-5 rounded-2xl border shadow-sm"
            :class="{ 'hidden lg:block': mobileTab !== 'library' }"
            :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }"
          >
            <!-- Sub-tabs: Curated vs AI History -->
            <div class="flex items-center justify-between border-b pb-3 mb-3" :style="{ borderColor: 'var(--border)' }">
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
                  📚 គំរូផ្សាយរួច ({{ allPosts.length }})
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
                  💾 ប្រវត្តិ AI ({{ savedHistory.length }})
                </button>
              </div>
            </div>

            <!-- Quick Search Input -->
            <div class="mb-3">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="🔍 ស្វែងរកតាមចំណងជើង ឬប្រធានបទ..."
                class="w-full px-3 py-2 rounded-xl border text-xs transition focus:outline-none focus:ring-1"
                :style="{
                  background: 'var(--bg-input)',
                  borderColor: 'var(--border)',
                  color: 'var(--ink)',
                  '--tw-ring-color': 'var(--accent)'
                }"
              />
            </div>

            <!-- Post Cards List (Scrollable, tactile) -->
            <div class="space-y-2 max-h-[420px] overflow-y-auto pr-1">
              <div
                v-for="post in filteredPosts"
                :key="post.id"
                @click="selectPost(post)"
                class="p-3 rounded-xl border transition cursor-pointer flex items-center justify-between gap-3 group active:scale-[0.99]"
                :style="{
                  background: activePost?.id === post.id ? 'var(--bg-card-2)' : 'transparent',
                  borderColor: activePost?.id === post.id ? 'var(--accent)' : 'var(--border)'
                }"
              >
                <div class="min-w-0 flex-1">
                  <div class="flex items-center gap-1.5 mb-1">
                    <span v-if="post.isNew" class="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold">ថ្មី</span>
                    <span v-if="post.views" class="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-bold">{{ post.views }}</span>
                    <span class="text-[10px] truncate" :style="{ color: 'var(--ink-faint)' }">{{ post.category || 'TikTok' }}</span>
                  </div>
                  <h4 class="text-xs font-bold truncate" :style="{ color: 'var(--ink)' }">
                    {{ post.title }}
                  </h4>
                </div>

                <div class="flex items-center gap-2 shrink-0">
                  <button
                    v-if="activeTab === 'history'"
                    type="button"
                    @click="deleteSavedPost(post.id, $event)"
                    class="p-1 text-xs text-red-400 hover:text-red-300 transition cursor-pointer"
                    title="លុបចេញ"
                  >
                    🗑️
                  </button>
                  <span class="text-xs font-bold" :style="{ color: 'var(--accent-bright)' }">
                    មើល →
                  </span>
                </div>
              </div>

              <div v-if="filteredPosts.length === 0" class="text-center py-8 text-xs" :style="{ color: 'var(--ink-faint)' }">
                មិនមានទិន្នន័យត្រូវនឹងការស្វែងរកទេ។
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column (Desktop 5 cols): 9:16 Smartphone Preview & Caption/Prompt details -->
        <div
          id="preview-phone"
          class="lg:col-span-5 lg:sticky lg:top-20 space-y-4 scroll-mt-20"
          :class="{ 'hidden lg:block': mobileTab !== 'preview' }"
        >
          <!-- Active Post Title & Slide Indicator -->
          <div class="p-3 rounded-2xl border shadow-sm flex items-center justify-between"
            :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
            <div class="min-w-0 flex-1 pr-2">
              <div class="text-[10px] uppercase font-bold tracking-wider mb-0.5" :style="{ color: 'var(--accent-bright)' }">
                {{ activePost?.category || 'TIKTOK SLIDE' }}
              </div>
              <h3 class="text-xs font-bold truncate" :style="{ color: 'var(--ink)' }">
                {{ activePost?.title || 'Slide Preview' }}
              </h3>
            </div>

            <!-- Slide Selector Pills (Dynamic for 1..N slides) -->
            <div class="flex items-center gap-1 shrink-0 flex-wrap justify-end">
              <button
                v-for="(slide, idx) in currentSlides"
                :key="idx"
                type="button"
                @click="currentSlideIndex = idx"
                class="w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition cursor-pointer"
                :style="{
                  background: currentSlideIndex === idx ? 'var(--accent)' : 'var(--bg-card-2)',
                  color: currentSlideIndex === idx ? '#ffffff' : 'var(--ink-muted)',
                  border: '1px solid ' + (currentSlideIndex === idx ? 'var(--accent)' : 'var(--border)')
                }"
              >
                {{ idx + 1 }}
              </button>
            </div>
          </div>

          <!-- 9:16 Smartphone Mockup Frame -->
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
              <!-- Top Bar: Channel Branding & Progress -->
              <div class="flex items-center justify-between text-xs pt-1 z-10">
                <div class="flex items-center gap-1.5">
                  <div class="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-[10px] font-bold text-black">☸</div>
                  <span class="font-bold text-amber-400 text-xs tracking-wide">@escape_the_matrix</span>
                </div>
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/90 font-mono font-bold">
                  {{ currentSlideIndex + 1 }} / {{ currentSlides.length || 1 }}
                </span>
              </div>

              <!-- Slide Content Area (Center) -->
              <div class="my-auto py-2 z-10 w-full flex-1 flex flex-col justify-center">
                <!-- Slide Title Badge -->
                <div class="text-center mb-2">
                  <span class="inline-block px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                    {{ getSlideBadge(currentSlideIndex, currentSlides.length) }}
                  </span>
                </div>

                <!-- Slide Text Content -->
                <div
                  class="leading-relaxed text-amber-50 whitespace-pre-line break-words [overflow-wrap:anywhere] font-body drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] max-h-[380px] sm:max-h-[410px] overflow-y-auto pr-1"
                  :class="currentSlideIndex === 0 ? 'font-display font-black text-lg sm:text-xl text-center text-amber-200' : 'text-xs sm:text-[13px] text-left'"
                >
                  {{ currentSlides[currentSlideIndex] || 'សូមជ្រើសរើស ឬបង្កើត Post ជាមុនសិន' }}
                </div>

                <!-- Next Slide Hint or CTA -->
                <div v-if="currentSlideIndex < currentSlides.length - 1" class="pt-2 text-[10px] text-amber-400/80 font-bold text-center animate-pulse">
                  អូសទៅ Slide បន្ទាប់ ({{ currentSlideIndex + 2 }}/{{ currentSlides.length }}) →
                </div>
                <div v-else class="pt-2 text-[10px] text-amber-300/80 font-bold text-center">
                  រៀនធម៌ពិតបន្ថែមលើ Bio : buddha-dhamma.vercel.app
                </div>
              </div>

              <!-- Bottom Navigation Bar inside Phone -->
              <div class="flex items-center justify-between gap-1.5 text-xs pt-2 border-t border-white/10 z-10">
                <button
                  type="button"
                  @click="currentSlideIndex = Math.max(0, currentSlideIndex - 1)"
                  :disabled="currentSlideIndex === 0"
                  class="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[10px] font-bold disabled:opacity-30 cursor-pointer shrink-0"
                >
                  ← ថយ
                </button>

                <button
                  type="button"
                  @click="copyCurrentSlide"
                  class="flex-1 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black text-[10px] font-bold cursor-pointer transition shadow text-center"
                >
                  {{ copiedKey === 'current_slide' ? '✓ បានចម្លង!' : `📋 ចម្លង Slide ${currentSlideIndex + 1}` }}
                </button>

                <button
                  type="button"
                  @click="currentSlideIndex = Math.min(currentSlides.length - 1, currentSlideIndex + 1)"
                  :disabled="currentSlideIndex >= currentSlides.length - 1"
                  class="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[10px] font-bold disabled:opacity-30 cursor-pointer shrink-0"
                >
                  បន្ទាប់ →
                </button>
              </div>
            </div>
          </div>

          <!-- Caption & Hashtags Readable Card -->
          <div
            v-if="activePost?.caption"
            class="p-4 rounded-2xl border shadow-sm space-y-2"
            :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }"
          >
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold flex items-center gap-1.5" :style="{ color: 'var(--ink)' }">
                <span>🏷️ Caption & Hashtags</span>
              </span>
              <button
                type="button"
                @click="copyPill(activePost.caption, 'ចម្លង Caption & Hashtags', 'caption_card')"
                class="px-2.5 py-1 rounded-lg text-xs font-bold border transition cursor-pointer"
                :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)', color: 'var(--accent-bright)' }"
              >
                <span>{{ copiedKey === 'caption_card' ? '✓ បានចម្លង!' : '📋 ចម្លង Caption' }}</span>
              </button>
            </div>
            <p class="text-xs leading-relaxed whitespace-pre-line font-body p-3 rounded-xl border max-h-[140px] overflow-y-auto"
              :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)', color: 'var(--ink-soft)' }">
              {{ activePost.caption }}
            </p>
          </div>

          <!-- Midjourney Image Prompt Card -->
          <div
            v-if="activePost?.imagePrompt"
            class="p-4 rounded-2xl border shadow-sm space-y-2"
            :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }"
          >
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold flex items-center gap-1.5" :style="{ color: 'var(--ink)' }">
                <span>🎨 Midjourney Image Prompt</span>
              </span>
              <button
                type="button"
                @click="copyPill(activePost.imagePrompt, 'ចម្លង Image Prompt', 'prompt_card')"
                class="px-2.5 py-1 rounded-lg text-xs font-bold border transition cursor-pointer"
                :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)', color: 'var(--accent-bright)' }"
              >
                <span>{{ copiedKey === 'prompt_card' ? '✓ បានចម្លង!' : '🎨 ចម្លង Prompt' }}</span>
              </button>
            </div>
            <p class="text-xs leading-relaxed font-mono p-3 rounded-xl border select-all max-h-[120px] overflow-y-auto"
              :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)', color: 'var(--ink-soft)' }">
              {{ activePost.imagePrompt }}
            </p>
          </div>

          <!-- Mobile Bottom Switchers -->
          <div class="lg:hidden flex items-center justify-between gap-2 pt-2 pb-6">
            <button
              type="button"
              @click="mobileTab = 'create'"
              class="flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold text-center transition cursor-pointer"
              :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--ink-muted)' }"
            >
              ✍️ បង្កើតសំណួរថ្មី
            </button>
            <button
              type="button"
              @click="mobileTab = 'library'"
              class="flex-1 py-2.5 px-3 rounded-xl border text-xs font-bold text-center transition cursor-pointer"
              :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)', color: 'var(--accent-bright)' }"
            >
              📚 ប្តូរផុសផ្សេង →
            </button>
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { PUBLISHED_AND_CURATED_POSTS } from '../data/tiktokPosts.js'
import { useGeminiTikTok } from '../composables/useGeminiTikTok.js'

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

// PIN Screen State
const pinInput = ref('')
const pinError = ref(false)
const isShaking = ref(false)

// Studio State
const mobileTab = ref('create') // 'create' | 'preview' | 'library'
const inputQuestion = ref('')
const activeTab = ref('curated')
const searchQuery = ref('')
const copiedKey = ref('')

const allPosts = ref(PUBLISHED_AND_CURATED_POSTS)
const activePost = ref(PUBLISHED_AND_CURATED_POSTS[0] || null)
const currentSlideIndex = ref(0)
const savedHistory = ref([])

const currentSlides = computed(() => {
  if (!activePost.value) return []
  if (Array.isArray(activePost.value.slides) && activePost.value.slides.length > 0) {
    return activePost.value.slides
  }
  return [
    activePost.value.slide1,
    activePost.value.slide2,
    activePost.value.slide3,
    activePost.value.slide4,
    activePost.value.slide5
  ].filter(Boolean)
})

function getSlideBadge(idx, total) {
  if (idx === 0) return 'Slide 1 : The Hook (សំណួរចាក់ដោត)'
  if (idx === total - 1) return `Slide ${idx + 1} : មេរៀនជីវិត & CTA`
  return `Slide ${idx + 1} : ការពន្យល់ធម៌ពិត (ភាគ ${idx})`
}

const filteredPosts = computed(() => {
  const list = activeTab.value === 'curated' ? allPosts.value : savedHistory.value
  if (!searchQuery.value.trim()) return list
  const q = searchQuery.value.toLowerCase()
  return list.filter(p =>
    (p.title || '').toLowerCase().includes(q) ||
    (p.category || '').toLowerCase().includes(q) ||
    (p.slide1 || '').toLowerCase().includes(q)
  )
})

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

function copyPill(text, label, key) {
  if (!text) return
  copyToClipboard(text, label)
  copiedKey.value = key
  setTimeout(() => {
    if (copiedKey.value === key) copiedKey.value = ''
  }, 1400)
}

function selectPost(post) {
  activePost.value = post
  currentSlideIndex.value = 0
  mobileTab.value = 'preview'
  showToast('📱 បានជ្រើសរើស ៖ ' + post.title)
}

function deleteSavedPost(id, event) {
  if (event) event.stopPropagation()
  const saved = getSavedPosts().filter(p => p.id !== id)
  localStorage.setItem('buddha_tiktok_saved_posts', JSON.stringify(saved))
  savedHistory.value = saved
  if (activePost.value?.id === id) {
    activePost.value = allPosts.value[0] || null
  }
  showToast('🗑️ បានលុបផុសចេញពីប្រវត្តិ')
}

async function handleGenerate() {
  if (!inputQuestion.value.trim()) return
  const result = await generatePost(inputQuestion.value)
  if (result) {
    const formatted = {
      id: 'ai-' + Date.now(),
      title: result.title || inputQuestion.value.substring(0, 45),
      category: 'AI Generated',
      isNew: true,
      ...result
    }
    activePost.value = formatted
    currentSlideIndex.value = 0
    savedHistory.value = getSavedPosts()
    activeTab.value = 'history'
    mobileTab.value = 'preview'
    showToast('✨ បានបង្កើត Slide ដោយជោគជ័យ!')
  }
}

function copyCurrentSlide() {
  if (!activePost.value) return
  const slideText = currentSlides.value[currentSlideIndex.value] || ''
  copyPill(slideText, `ចម្លង Slide ${currentSlideIndex.value + 1}`, 'current_slide')
}

function getAllSlidesText(post) {
  if (!post) return ''
  const slides = Array.isArray(post.slides) && post.slides.length > 0
    ? post.slides
    : [post.slide1, post.slide2, post.slide3, post.slide4, post.slide5].filter(Boolean)
  const slideParts = slides.map((s, idx) => `=== SLIDE ${idx + 1} ===\n${s}`).join('\n\n')
  return `${slideParts}\n\n=== CAPTION ===\n${post.caption || ''}`
}
</script>

<style scoped>
.copy-pill {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.65rem 0.8rem;
  min-height: 44px;
  border-radius: 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  border: 1px solid var(--border);
  background: var(--bg-card-2);
  color: var(--ink);
  transition: all 0.15s ease;
  cursor: pointer;
  touch-action: manipulation;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.copy-pill:hover {
  border-color: var(--accent);
  color: var(--accent-bright);
}

.copy-pill:active {
  transform: scale(0.96);
  background: var(--accent-soft);
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
  touch-action: manipulation;
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
