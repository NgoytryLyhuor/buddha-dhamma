<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៨០ — ពោជ្ឈង្គ ៧ ប្រការ', 'GATHA 80 — 7 FACTORS OF ENLIGHTENMENT') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ពោជ្ឈង្គ ៧ ៖ កត្តានៃការត្រាស់ដឹង & ឱសថធម៌ព្យាបាលរោគាពាធ', 'Bojjhaṅga — 7 Factors of Awakening & Spiritual Healing') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ពោជ្ឈង្គ សំដៅលើធម៌ជាអង្គ ឬជាកត្តានៃការត្រាស់ដឹង ៧ យ៉ាង ដែលដឹកនាំចិត្តឱ្យទម្លុះទម្លាយអវិជ្ជា និងសម្រេចនូវព្រះនិព្វាន។ ធម៌ទាំង ៧ នេះ មិនត្រឹមតែជាកម្លាំងរុញច្រានផ្លូវចិត្តក្នុងវិបស្សនាប៉ុណ្ណោះទេ ថែមទាំងជា «ឱសថធម៌ដ៏ស័ក្តិសិទ្ធិ» ដែលធ្លាប់បានព្យាបាលជំងឺអាពាធធ្ងន់ធ្ងររបស់ព្រះមហាកស្សបត្ថេរ, ព្រះមហាមោគ្គល្លានត្ថេរ និងសូម្បីតែព្រះសម្មាសម្ពុទ្ធផ្ទាល់ ឱ្យជាសះស្បើយភ្លាមៗនៅពេលស្តាប់ និងចម្រើនធម៌នេះ។ នៅក្នុងពោជ្ឈង្គសូត្រ ព្រះអង្គបានបង្រៀនក្បួនថ្លឹងកម្លាំងធម៌ទាំង ៧ នេះ ឱ្យមានតុល្យភាពរវាងភាពស្វាហាប់ និងភាពស្ងប់ស្ងាត់។', 'Bojjhaṅga designates the seven constitutive factors of spiritual awakening that dissolve the crust of delusion and deliver transcendent liberation. Far beyond mere theoretical concepts, these seven luminous factors constitute a supreme spiritual healing medicine: in the Bojjhaṅga Suttas, when Ven. Mahākassapa, Ven. Mahāmoggallāna, and the Buddha Himself were stricken with severe illness, hearing and reflecting on these seven factors caused their afflictions to evaporate instantly. Balancing these factors between dynamic energy and peaceful stillness brings unshakeable harmony.') }}
    </p>

    <!-- Pali Gatha Box from Bojjhaṅga Paritta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ពោជ្ឈង្គោ សតិសង្ខាតោ ធម្មានំ វិចយោ តថា, វីរិយម្បីតិ បស្សទ្ធិ ពោជ្ឈង្គា ច តថាបរេ, សមាធុបេក្ខា ពោជ្ឈង្គា សត្តេតេ សព្វទស្សិនា, មុនិនា សម្មទក្ខាតា ភាវិតា ពហុលីកតា...»', '"The factors of awakening: mindfulness, investigation of phenomena, energy, rapture, tranquility, concentration, and equanimity: these seven factors, clearly taught and cultivated by the All-Seeing Sage, lead to higher knowledge, awakening, and Nibbāna." — Bojjhaṅga Paritta') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— គាថាពោជ្ឈង្គបរិត្ត សំយុត្តនិកាយ មហាវារវគ្គ', '— Bojjhaṅga Paritta, Saṃyutta Nikāya') }}
      </p>
    </div>

    <!-- The 7 Factors of Awakening Grid -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>✨</span>
        <span>{{ t('កត្តាត្រាស់ដឹងទាំង ៧ ប្រការ', 'The 7 Awakening Factors') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="b in factors"
          :key="b.id"
          class="card-paper p-5 rounded-xl border flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
              <div class="flex items-center gap-2">
                <span class="w-7 h-7 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-xs font-mono font-bold">
                  {{ b.num }}
                </span>
                <div>
                  <h4 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
                    {{ t(b.nameKm, b.nameEn) }}
                  </h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ b.pali }}</p>
                </div>
              </div>
              <span class="text-2xl">{{ b.icon }}</span>
            </div>

            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(b.descKm, b.descEn) }}
            </p>
          </div>

          <!-- Functional Balance Role -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2 rounded-lg bg-stone-500/5 border border-stone-500/15">
              <span class="font-bold text-amber-700 dark:text-amber-300 block mb-0.5">
                ⚖️ {{ t('តួនាទីក្នុងតុល្យភាពចិត្ត ៖', 'Balancing Function:') }}
              </span>
              <span class="text-stone-600 dark:text-stone-400">{{ t(b.roleKm, b.roleEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- The Art of Balancing Energetic vs Calming Factors -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🛡️</span>
        <span>{{ t('សិល្បៈនៃការថ្លឹងពោជ្ឈង្គ ៖ ស្វាហាប់ vs ស្ងប់ស្ងាត់', 'The Dynamic Balance: Arousing vs Calming Factors') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ព្រះពុទ្ធបានបង្រៀនថា ពេលចិត្តស្រពន់ ងងុយគេង ឬស្ពឹក (Sloth/Torpor) កុំចម្រើនបស្សទ្ធិ សមាធិ ឬឧបេក្ខា ព្រោះវានឹងធ្វើឱ្យរឹតតែងងុយ! ត្រូវចម្រើន ធម្មវិចយៈ វីរិយៈ និងបីតិ ដើម្បីដាស់ចិត្តឱ្យភ្ញាក់។ ផ្ទុយទៅវិញ ពេលចិត្តរវើរវាយ អន្ទះអន្ទែង (Restlessness) កុំចម្រើនវីរិយៈ ត្រូវចម្រើន បស្សទ្ធិ សមាធិ និងឧបេក្ខា ដើម្បីរំងាប់ចិត្តឱ្យត្រជាក់។ រីឯ «សតិ» វិញ ត្រូវមានគ្រប់ពេលវេលា គ្មានកាលណាដែលសតិលើសឡើយ!', 'When the mind is sluggish or drowsy, do not cultivate tranquility, concentration, or equanimity, as they will deepen sleepiness. Instead, stimulate the mind with Investigation (Dhammavicaya), Energy (Viriya), and Rapture (Pīti). Conversely, when the mind is agitated and restless, do not add energy; cool it with Tranquility (Passaddhi), Concentration (Samādhi), and Equanimity (Upekkhā). Meanwhile, Mindfulness (Sati) is needed in all seasons!') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const factors = [
  {
    id: 1,
    num: '១',
    nameKm: 'សតិសម្ពោជ្ឈង្គ (សតិដឹងខ្លួនជាប់ជានិច្ច)',
    nameEn: 'Mindfulness (Sati-sambojjhaṅga)',
    pali: 'Sati — ការរឭកដឹងក្នុងបច្ចុប្បន្ន មិនភ្លេចខ្លួន',
    icon: '👁️',
    descKm: 'សតិរឭកដឹងគ្រប់ឥរិយាបថ ដង្ហើមចេញចូល និងអារម្មណ៍ដែលកើតឡើងក្នុងចិត្ត។ សតិជាមេដឹកនាំនៃពោជ្ឈង្គទាំងអស់ ដែលចាំមើលខុសត្រូវ និងថ្លឹងតុល្យភាពរវាងធម៌ស្វាហាប់ និងធម៌ស្ងប់ស្ងាត់។',
    descEn: 'Constant, lucid recollection anchored in the present moment. Sati acts as the universal governor supervising and balancing all other awakening factors.',
    roleKm: 'ចាំបាច់គ្រប់កាលៈទេសៈ (សព្វត្ថិកា) — មិនដែលលើស មិនដែលខុសឡើយ។',
    roleEn: 'Universally required at all times—never superfluous, never excessive.',
  },
  {
    id: 2,
    num: '២',
    nameKm: 'ធម្មវិចយសម្ពោជ្ឈង្គ (ការពិចារណាវិភាគធម៌)',
    nameEn: 'Investigation of Dhamma (Dhammavicaya)',
    pali: 'Dhammavicaya — ការស្រាវជ្រាវ វែកញែកសច្ចភាពនៃកុសល និងអកុសល',
    icon: '🔬',
    descKm: 'ប្រាជ្ញាវែកញែកមើលថា តើអារម្មណ៍នេះជាកុសល ឬអកុសល? មានប្រយោជន៍ ឬគ្មានប្រយោជន៍? ការពិនិត្យឃើញអនិច្ចំ ទុក្ខំ អនត្តា ក្នុងកាយនិងចិត្ត។',
    descEn: 'The penetrating analytical faculty dissecting experience into wholesome vs unwholesome, cause vs effect, investigating impermanence and non-self.',
    roleKm: 'ជាធម៌ខាងស្វាហាប់ — ជួយដាស់ចិត្តដែលស្ពឹកស្រពន់ឱ្យភ្លឺស្វាងឡើងវិញ។',
    roleEn: 'Arousing factor—ignites inquiry and awakens a dull or sleepy mind.',
  },
  {
    id: 3,
    num: '៣',
    nameKm: 'វីរិយសម្ពោជ្ឈង្គ (ការព្យាយាមមុតមាំ)',
    nameEn: 'Energy & Effort (Viriya-sambojjhaṅga)',
    pali: 'Viriya — ការប្រឹងប្រែងតស៊ូ មិនចុះចាញ់ឧបសគ្គ',
    icon: '⚡',
    descKm: 'កម្លាំងចិត្តក្លាហានក្នុងការទប់ទល់បាបធម៌មិនឱ្យកើត លះបង់បាបដែលកើតហើយ បណ្តុះបុណ្យថ្មី និងរក្សាបុណ្យចាស់ឱ្យរីកចម្រើន (សម្មប្បធាន ៤)។',
    descEn: 'Courageous spiritual energy driving relentless exertion: preventing unwholesome states, abandoning defilements, cultivating and sustaining virtues.',
    roleKm: 'ជាធម៌ខាងស្វាហាប់ — បំបាត់ភាពខ្ជិលច្រអូស និងការបាក់ទឹកចិត្ត។',
    roleEn: 'Arousing factor—overcomes discouragement, laziness, and mental paralysis.',
  },
  {
    id: 4,
    num: '៤',
    nameKm: 'បីតិសម្ពោជ្ឈង្គ (សេចក្តីឆ្អែតចិត្ត & រីករាយក្នុងធម៌)',
    nameEn: 'Spiritual Joy & Rapture (Pīti-sambojjhaṅga)',
    pali: 'Pīti — ភាពត្រជាក់ត្រជុំ និងរំភើបរីករាយកើតពីសេចក្តីស្ងប់',
    icon: '🌸',
    descKm: 'សេចក្តីត្រេកអរ និងឆ្អែតចិត្តខាងផ្លូវវិញ្ញាណដែលកើតចេញពីការមិនមានកិលេស មិនមែនជាការសប្បាយបែបកាមគុណលោកិយឡើយ តែជាអំណរដ៏បរិសុទ្ធ។',
    descEn: 'Sublime spiritual refreshment and joy arising from purity and meditative peace, completely detached from worldly sensual excitation.',
    roleKm: 'ជាធម៌ខាងស្វាហាប់ — ធ្វើឱ្យចិត្តស្រស់ស្រាយ មានកម្លាំងបន្តភាវនា។',
    roleEn: 'Arousing factor—infuses zest and upliftment, refreshing exhausted practitioners.',
  },
  {
    id: 5,
    num: '៥',
    nameKm: 'បស្សទ្ធិសម្ពោជ្ឈង្គ (សេចក្តីស្ងប់រម្ងាប់កាយ & ចិត្ត)',
    nameEn: 'Tranquility (Passaddhi-sambojjhaṅga)',
    pali: 'Passaddhi — ភាពស្ងប់រម្ងាប់នៃចេតសិក (កាយបស្សទ្ធិ) និងចិត្ត (ចិត្តបស្សទ្ធិ)',
    icon: '🕊️',
    descKm: 'សភាពស្ងប់ស្រួល គ្មានការតានតឹង គ្មានការអន្ទះអន្ទែង សរសៃប្រសាទនិងរាងកាយទាំងមូលបានសម្រាកយ៉ាងជ្រាលជ្រៅដូចនៅក្នុងទឹកត្រជាក់។',
    descEn: 'Profound bodily and mental serenity; the calming of emotional turbulence and nervous tension, like resting immersed in a cool forest pool.',
    roleKm: 'ជាធម៌ខាងស្ងប់ស្ងាត់ — បន្សាបភាពតានតឹង និងការរវើរវាយ។',
    roleEn: 'Calming factor—cools agitation, high anxiety, and nervous excitability.',
  },
  {
    id: 6,
    num: '៦',
    nameKm: 'សមាធិសម្ពោជ្ឈង្គ (ចិត្តតម្កល់មាំលើអារម្មណ៍តែមួយ)',
    nameEn: 'Concentration (Samādhi-sambojjhaṅga)',
    pali: 'Samādhi — ឯកគ្គតាចិត្ត ភាពមូលមាំ មិនរាយមាយ',
    icon: '🕯️',
    descKm: 'ការប្រមូលផ្តុំថាមពលចិត្តឱ្យមូលលើអារម្មណ៍កម្មដ្ឋានតែមួយ មិនរត់លោតទៅអតីត ឬអនាគត ដូចជាអណ្តាតភ្លើងទៀនក្នុងបន្ទប់គ្មានខ្យល់បក់។',
    descEn: 'Unification of mind focused steadfastly on a single wholesome meditation object, like a candle flame burning undisturbed in a windless room.',
    roleKm: 'ជាធម៌ខាងស្ងប់ស្ងាត់ — បង្កើតស្ថិរភាព និងភាពមុតស្រួចដល់បញ្ញា។',
    roleEn: 'Calming factor—provides absolute stillness and focus for penetrative insight.',
  },
  {
    id: 7,
    num: '៧',
    nameKm: 'ឧបេក្ខាសម្ពោជ្ឈង្គ (ចិត្តកណ្តាល & រឹងមាំ)',
    nameEn: 'Equanimity (Upekkhā-sambojjhaṅga)',
    pali: 'Upekkhā — ការតម្កល់ចិត្តជាកណ្តាល មិនលម្អៀង មិនជ្រួលច្របល់',
    icon: '⚖️',
    descKm: 'ចិត្តដែលសម្លឹងមើលគ្រប់បាតុភូតដោយភាពស្មើ មិនត្រេកអរពេលជួបសុខ មិនថ្នាំងថ្នាក់ពេលជួបទុក្ខ ដូចជាអ្នកមើលល្ខោនដែលមិនលោតទៅលើឆាក។',
    descEn: 'Supreme balance of mind that observes worldly fluctuations without clutching pleasant outcomes or shrinking from painful ones.',
    roleKm: 'ជាធម៌ខាងស្ងប់ស្ងាត់ — ការពារចិត្តមិនឱ្យញាប់ញ័រនឹងលោកធម៌។',
    roleEn: 'Calming factor—safeguards unshakeable equanimity in the midst of change.',
  },
]
</script>
