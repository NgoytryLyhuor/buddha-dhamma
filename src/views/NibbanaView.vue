<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៤៤ — ព្រះនិព្វានបរមត្ថ', 'GATHA 44 — NIBBĀNA PARAMATTHA') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ព្រះនិព្វាន ៖ ទីរំលត់ទុក្ខឥតសេសសល់', 'Nibbāna : The Ultimate Cessation of Suffering') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ក្នុងព្រះអភិធម្ម បរមត្ថធម៌ពិតមាន ៤ យ៉ាង គឺ ចិត្ត ចេតសិក រូប និងនិព្វាន។ ក្នុងចំណោមបរមត្ថទាំងបួននេះ និព្វានជា «អសង្ខតធម៌» តែមួយគត់ ពោលគឺធម៌ដែលឥតមានបច្ច័យតាក់តែង មិនកើត មិនស្លាប់ មិនប្រែប្រួល និងមិនស្ថិតនៅក្រោមឥទ្ធិពលនៃកាលវេលាឡើយ។ ព្រះនិព្វាន មិនមែនជាការរលត់សូន្យទទេគ្មានសល់ (Ucchedavāda) ហើយក៏មិនមែនជាទីស្ថានភពឋានសួគ៌អមតៈ (Sassatavāda) ដែរ តែជាសច្ចធម៌នៃការរលត់កិលេស និងទុក្ខទាំងពួង។', 'In the Abhidhamma, there are 4 Ultimate Realities: Citta (Mind), Cetasika (Mental Factors), Rūpa (Matter), and Nibbāna. Among these four, Nibbāna is the sole Unconditioned Reality (Asaṅkhata Dhamma) — unproduced by causes, unborn, undying, unchanging, and beyond the constraints of time. Nibbāna is neither mere annihilation (Ucchedavāda) nor an eternal cosmic heaven (Sassatavāda); it is the supreme truth of the total cessation of defilements and suffering.') }}
    </p>

    <!-- Key Definitions & Status Banner -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <div class="card-paper p-5 text-center">
        <span class="text-3xl text-amber-500">🕊️</span>
        <h3 class="font-display text-lg mt-3" :style="{ color: 'var(--ink)' }">{{ t('អសង្ខតធម៌', 'Asaṅkhata Dhamma') }}</h3>
        <p class="text-[10px] font-bold tracking-widest uppercase mt-1" :style="{ color: 'var(--ink-faint)' }">UNCONDITIONED</p>
        <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ធម៌ដែលឥតមានហេតុបច្ច័យ ៤ (កម្ម ចិត្ត ឧតុ អាហារ) មកប្រជុំតាក់តែងឡើយ។', 'Reality uncreated by any of the four causal factors (kamma, citta, climate, nutriment).') }}
        </p>
      </div>

      <div class="card-paper p-5 text-center">
        <span class="text-3xl text-emerald-500">✨</span>
        <h3 class="font-display text-lg mt-3" :style="{ color: 'var(--ink)' }">{{ t('អមតធាតុ', 'Amata Dhātu') }}</h3>
        <p class="text-[10px] font-bold tracking-widest uppercase mt-1" :style="{ color: 'var(--ink-faint)' }">DEATHLESS ELEMENT</p>
        <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ធម្មជាតិដែលមិនចេះស្លាប់ ព្រោះមិនដែលមានការកើតឡើងតាំងពីដំបូងមក។', 'The deathless realm, free from dying because it was never subject to birth in the first place.') }}
        </p>
      </div>

      <div class="card-paper p-5 text-center">
        <span class="text-3xl text-sky-500">💎</span>
        <h3 class="font-display text-lg mt-3" :style="{ color: 'var(--ink)' }">{{ t('បរមត្ថសុខ', 'Parama Sukha') }}</h3>
        <p class="text-[10px] font-bold tracking-widest uppercase mt-1" :style="{ color: 'var(--ink-faint)' }">SUPREME BLISS</p>
        <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('សេចក្ដីស្ងប់រម្ងាប់ផុតពីទុក្ខវេទនា និងកិលេសចាក់ដោតទាំងស្រុង។', 'The ultimate peace arising from the complete absence of agitation and suffering.') }}
        </p>
      </div>
    </div>

    <!-- Udana Canonical Discourse -->
    <div class="card-paper p-6 md:p-8 mt-8 border-l-4" :style="{ borderLeftColor: 'var(--accent)' }">
      <p class="chapter-label">{{ t('ពុទ្ធបន្ទូលក្នុងគម្ពីរឧទាន (ខុទ្ទកនិកាយ)', 'UDĀNA 8.3 — THE INSPIRED UTTERANCE') }}</p>
      <div class="verse-box p-4 mt-3">
        <p class="text-base sm:text-lg leading-loose italic text-center font-display" :style="{ color: 'var(--ink)' }">
          «អត្ថិ ភិក្ខវេ តទាយតនំ យត្ថ នេវ បឋវី ន អាបោ ន តេជោ ន វាយោ... ឯតមេវន្តោ ទុក្ខស្សាតិ។»
        </p>
        <p class="text-xs sm:text-sm mt-3 leading-relaxed text-center" :style="{ color: 'var(--ink-muted)' }">
          {{ t('«ម្នាលភិក្ខុទាំងឡាយ! ធម្មជាតនោះមានពិត ដែលក្នុងធម្មជាតនោះ មិនមែនជាដី ទឹក ភ្លើង ខ្យល់... មិនមែនជាលោកនេះ មិនមែនជាលោកដទៃ មិនមែនជាព្រះចន្ទ ព្រះអាទិត្យឡើយ។ តថាគតមិនហៅធម្មជាតនោះថាជាការមក ការទៅ ឬការតាំងនៅឡើយ... ធម្មជាតនោះហើយ ជាទីបំផុតនៃសេចក្ដីទុក្ខ!»', '"There is, monks, that realm where there is neither earth, nor water, nor fire, nor wind... neither this world nor the next, nor sun and moon. That, monks, I say is neither coming, nor going, nor staying... That alone is the end of suffering."') }}
        </p>
      </div>
    </div>

    <!-- Two Types of Nibbana -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('ព្រះនិព្វាន ២ ប្រភេទ', 'TWO ASPECTS OF NIBBĀNA') }}</p>
      <h3 class="font-display text-xl mt-1.5" :style="{ color: 'var(--ink)' }">
        {{ t('សឧបាទិសេសនិព្វាន & អនុបាទិសេសនិព្វាន', 'With Remainder & Without Remainder') }}
      </h3>
      <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ពុទ្ធសាសនាសម្ដែងនូវព្រះនិព្វានជា ២ ដំណាក់កាល ផ្អែកលើការនៅសល់ឬរលត់នៃរូបកាយខន្ធ ៥', 'The two phases of Nibbāna based on the continuation or dissolution of the five aggregates') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <!-- Saupadisesa -->
        <div class="p-5 rounded-xl border flex flex-col justify-between" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-amber-500 shrink-0"></span>
              <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">
                {{ t('១. សឧបាទិសេសនិព្វាន', '1. Saupādisesa Nibbāna') }}
              </h4>
            </div>
            <p class="text-xs font-mono mt-1 text-amber-500">
              {{ t('កិលេសបរិនិព្វាន (រលត់កិលេស តែនៅសល់រូបកាយ)', 'Extinction of Defilements with Aggregates Remaining') }}
            </p>
            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t('ការសម្រេចព្រះអរហត្តផល រលត់បង់នូវកិលេស តណ្ហា រាគៈ ទោសៈ មោហៈ ទាំងស្រុងក្នុងចិត្តសន្តាន តែរូបកាយ និងខន្ធ ៥ នៅបន្តរស់នៅតាមអាយុសង្ខារ ដូចព្រះសម្មាសម្ពុទ្ធកាលគង់នៅក្រោយត្រាស់ដឹងជាដើម។ ព្រះអង្គនៅដឹងក្តៅ ត្រជាក់ ស្រេក ឃ្លាន តែចិត្តឥតមានទុក្ខព្រួយឡើយ។', 'The attainment of Arahantship where greed, hatred, and delusion are completely uprooted, yet the physical body and five aggregates continue to function for the remaining lifespan — as the Buddha lived 45 years after Enlightenment.') }}
            </p>
          </div>
          <div class="mt-4 pt-3 border-t text-[11px] font-medium" :style="{ borderColor: 'var(--border)', color: 'var(--ink-faint)' }">
            {{ t('ប្រៀបដូច ៖ ភ្លើងរលត់ហើយ តែធ្យូងនៅមានកម្ដៅសេសសល់បន្តិច។', 'Simile: A fire extinguished, but glowing embers still warm.') }}
          </div>
        </div>

        <!-- Anupadisesa -->
        <div class="p-5 rounded-xl border flex flex-col justify-between" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-emerald-500 shrink-0"></span>
              <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">
                {{ t('២. អនុបាទិសេសនិព្វាន', '2. Anupādisesa Nibbāna') }}
              </h4>
            </div>
            <p class="text-xs font-mono mt-1 text-emerald-500">
              {{ t('ខន្ធបរិនិព្វាន (រលត់ខន្ធ ៥ ឥតមានបដិសន្ធិថ្មី)', 'Total Extinction of Both Defilements & Aggregates') }}
            </p>
            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t('ការរលត់រូបកាយ និងខន្ធ ៥ ទាំងស្រុងរបស់ព្រះអរហន្ត ក្រោយពេលអស់អាយុសង្ខារ។ គ្មានវិញ្ញាណបដិសន្ធិក្នុងភពថ្មីទៀតឡើយ គឺរលត់ផុតពីវដ្តសង្សារជាស្ថាពរ ដូចព្រះសម្មាសម្ពុទ្ធចូលបរិនិព្វានក្រោមដើមរាំងទាំងគូនៅកុសិនារា។', 'The passing away of an Arahant at the end of physical life. The five aggregates cease completely without rebirth in any of the 31 realms — the final cessation of cyclic existence, as the Buddha attained under the twin Sal trees.') }}
            </p>
          </div>
          <div class="mt-4 pt-3 border-t text-[11px] font-medium" :style="{ borderColor: 'var(--border)', color: 'var(--ink-faint)' }">
            {{ t('ប្រៀបដូច ៖ ធ្យូងរលត់ត្រជាក់អស់ គ្មានអណ្តាតភ្លើង និងផ្សែងទៀតឡើយ។', 'Simile: The embers have cooled completely; no flame, no smoke remains.') }}
          </div>
        </div>
      </div>
    </div>

    <!-- The 3 Doors to Liberation (Vimokkhamukha 3) -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('វិមោក្ខមុខ ៣', 'THE THREE GATEWAYS TO LIBERATION') }}</p>
      <h3 class="font-display text-xl mt-1.5" :style="{ color: 'var(--ink)' }">
        {{ t('ទ្វាររំលត់ទុក្ខទាំង ៣ តាមផ្លូវត្រៃលក្ខណ៍', 'Three Gateways Entering Nibbāna through Tilakkhaṇa') }}
      </h3>
      <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ព្រះយោគាវចរអាចសម្រេចព្រះនិព្វាន តាមរយៈការពិចារណាលក្ខណៈណាមួយក្នុងចំណោមត្រៃលក្ខណ៍ទាំង ៣', 'Practitioners enter Nibbāna by deeply discerning one of the Three Marks of Existence') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <span class="text-xs font-mono font-bold text-amber-500 uppercase">ទ្វារទី ១ (អនត្តា)</span>
          <h4 class="font-display text-base font-bold mt-1" :style="{ color: 'var(--ink)' }">{{ t('សុញ្ញតវិមោក្ខ', 'Suññatā Vimokkha') }}</h4>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t('ការរួចចាកទុក្ខ ដោយឃើញថាសង្ខារទាំងពួងជា «សុញ្ញតៈ» (ទទេ សូន្យចាកតួខ្លួន មិនមែនជារបស់យើង)។', 'Liberation through seeing all phenomena as empty of self or enduring essence (Anattā).') }}
          </p>
        </div>

        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <span class="text-xs font-mono font-bold text-sky-500 uppercase">ទ្វារទី ២ (អនិច្ចំ)</span>
          <h4 class="font-display text-base font-bold mt-1" :style="{ color: 'var(--ink)' }">{{ t('អនិមិត្តវិមោក្ខ', 'Animitta Vimokkha') }}</h4>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t('ការរួចចាកទុក្ខ ដោយឃើញថាសង្ខារទាំងពួង «គ្មាននិមិត្ត» (មិនទៀងទាត់ រលត់រលាយគ្មានទីពឹង)។', 'Liberation through seeing phenomena as signless, evanescent, and devoid of permanence (Anicca).') }}
          </p>
        </div>

        <div class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <span class="text-xs font-mono font-bold text-emerald-500 uppercase">ទ្វារទី ៣ (ទុក្ខំ)</span>
          <h4 class="font-display text-base font-bold mt-1" :style="{ color: 'var(--ink)' }">{{ t('អប្បណិហិតវិមោក្ខ', 'Appaṇihita Vimokkha') }}</h4>
          <p class="text-xs mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
            {{ t('ការរួចចាកទុក្ខ ដោយឃើញថាសង្ខារជា «ទុក្ខ» លែងមានការប្រាថ្នាតោងទាមក្នុងភពណាមួយទៀតឡើយ។', 'Liberation through seeing phenomena as suffering (Dukkha), abandoning all longing for worldly existence.') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Misconceptions vs Truth Matrix -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('ការយល់ច្រឡំ vs សច្ចធម៌ពិត', 'MISCONCEPTIONS VS TRUTH') }}</p>
      <h3 class="font-display text-xl mt-1.5" :style="{ color: 'var(--ink)' }">
        {{ t('កែតម្រូវការយល់ច្រឡំអំពីព្រះនិព្វាន', 'Clearing Doubts on Nibbāna') }}
      </h3>

      <div class="space-y-3 mt-5">
        <div v-for="m in misconceptions" :key="m.doubtK" class="p-4 rounded-xl border" :style="{ background: 'var(--bg-card-2)', borderColor: 'var(--border)' }">
          <div class="flex items-start gap-2">
            <span class="text-rose-500 font-bold text-sm shrink-0">❌</span>
            <div>
              <strong class="text-xs sm:text-sm font-bold" :style="{ color: 'var(--ink)' }">{{ t(m.doubtK, m.doubtE) }}</strong>
            </div>
          </div>
          <div class="flex items-start gap-2 mt-2 pt-2 border-t" :style="{ borderColor: 'var(--border)' }">
            <span class="text-emerald-500 font-bold text-sm shrink-0">✓</span>
            <div>
              <p class="text-xs sm:text-sm leading-relaxed" :style="{ color: 'var(--ink-soft)' }">{{ t(m.truthK, m.truthE) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Practical Pathway to Nibbana -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('ផ្លូវដំណើរ', 'THE PRACTICAL PATH') }}</p>
      <h3 class="font-display text-xl mt-1.5" :style="{ color: 'var(--ink)' }">
        {{ t('តើបុគ្គលម្នាក់ៗអាចដើរទៅកាន់ព្រះនិព្វានដោយរបៀបណា?', 'How Can We Walk Towards Nibbāna Today?') }}
      </h3>
      <p class="text-xs sm:text-sm mt-1" :style="{ color: 'var(--ink-muted)' }">
        {{ t('ព្រះនិព្វាន មិនមែនកើតឡើងដោយការបន់ស្រន់ឡើយ តែសម្រេចបានតាមរយៈការអនុវត្តត្រៃសិក្ខា ៖', 'Nibbāna cannot be attained through prayer alone; it is realised through the Threefold Training:') }}
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-5">
        <div class="p-4 rounded-xl border text-center" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <div class="w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 font-bold flex items-center justify-center mx-auto mb-2 text-sm">១</div>
          <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">{{ t('សីលសិក្ខា', 'Sīla') }}</h4>
          <p class="text-xs mt-1 text-stone-500">{{ t('រក្សាកាយ វាចា ឱ្យបរិសុទ្ធ តាមសីល ៥ ឬសីល ៨ កុំឱ្យមានវិប្បដិសារី។', 'Pure conduct of body and speech via 5 or 8 precepts.') }}</p>
        </div>

        <div class="p-4 rounded-xl border text-center" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <div class="w-8 h-8 rounded-full bg-sky-500/10 text-sky-500 font-bold flex items-center justify-center mx-auto mb-2 text-sm">២</div>
          <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">{{ t('ចិត្តសិក្ខា (សមាធិ)', 'Samādhi') }}</h4>
          <p class="text-xs mt-1 text-stone-500">{{ t('បង្ហាត់ចិត្តឱ្យស្ងប់ រឹងមាំ មាំទាំ និងមានអារម្មណ៍មូលមួយតាមរយៈសមាធិ។', 'Calming and steadying the mind through meditation.') }}</p>
        </div>

        <div class="p-4 rounded-xl border text-center" :style="{ background: 'var(--bg-card)', borderColor: 'var(--border)' }">
          <div class="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 font-bold flex items-center justify-center mx-auto mb-2 text-sm">៣</div>
          <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">{{ t('បញ្ញាសិក្ខា (វិបស្សនា)', 'Paññā') }}</h4>
          <p class="text-xs mt-1 text-stone-500">{{ t('ចម្រើនវិបស្សនា ឃើញច្បាស់នូវការកើត-រលត់នៃរូប-នាម រហូតទម្លុះដល់និព្វាន។', 'Insight knowledge penetrating arising and passing away.') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const misconceptions = [
  {
    doubtK: 'យល់ច្រឡំថា ព្រះនិព្វាន គឺជាការសូន្យទទេបាត់ស្រមោល (គ្មានសល់អ្វីទាំងអស់)',
    doubtE: 'Believing Nibbāna is total nihilistic nothingness or void.',
    truthK: 'សច្ចធម៌ ៖ អ្វីដែលរលត់ គឺការរលត់នៃកិលេស និងការរលត់នៃទុក្ខខន្ធ ៥។ និព្វានជា «សច្ចធាតុ» ពិតប្រាកដដែលមិនកើតមិនស្លាប់ ជាទីស្ងប់ដ៏បរម មិនមែនជាការបាត់បង់អត្ថិភាពដោយឥតន័យឡើយ។',
    truthE: 'Truth: What ceases is defilement and the painful five aggregates. Nibbāna is an authentic Unconditioned Reality of supreme peace, not sheer emptiness.'
  },
  {
    doubtK: 'យល់ច្រឡំថា ព្រះនិព្វាន គឺជាឋានសួគ៌ ភពថ្មី ឬទីក្រុងណាមួយនៅលើមេឃ',
    doubtE: 'Believing Nibbāna is a celestial heaven, paradise realm, or city in the sky.',
    truthK: 'សច្ចធម៌ ៖ ឋានសួគ៌ ឬព្រហ្មលោក ទាំងអស់សុទ្ធតែជា «សង្ខតធម៌» នៅមានការច្យុតិ (ស្លាប់) ទៅកើតក្នុងភពទាបវិញ។ និព្វានមិនមែនជាទីតាំងភូមិសាស្ត្រទេ តែជាធម៌កន្លងផុតពីស្ថានទាំង ៣១ ភព។',
    truthE: 'Truth: Heavens and Brahma realms are conditioned worlds subject to death. Nibbāna is beyond all 31 cosmic realms.'
  },
  {
    doubtK: 'យល់ច្រឡំថា ព្រះនិព្វានអាចសម្រេចបានតែព្រះសង្ឃប៉ុណ្ណោះ គ្រហស្ថមិនអាចទេ',
    doubtE: 'Believing only monastics can attain Nibbāna, while laypeople cannot.',
    truthK: 'សច្ចធម៌ ៖ គ្រហស្ថជាច្រើនរូបក្នុងពុទ្ធកាលដូចជា អនាថបណ្ឌិកសេដ្ឋី និងនាងវិសាខា បានសម្រេចសោតាបត្តិផល រីឯព្រះបាទសុទ្ធោទនៈ (ព្រះបិតា) ក៏បានសម្រេចព្រះអរហត្តផលក្នុងឋានៈជាគ្រហស្ថដែរ។',
    truthE: 'Truth: Numerous lay practitioners like Anāthapiṇḍika and Visākhā attained Sotāpanna, and King Suddhodana attained Arahantship as a layperson.'
  }
]
</script>
