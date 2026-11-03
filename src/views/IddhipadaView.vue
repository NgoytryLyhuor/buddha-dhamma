<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៩៤ — ឥទ្ធិបាទ ៤', 'GATHA 94 — 4 BASES OF POWER & SUCCESS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('ឥទ្ធិបាទ ៤ ៖ ក្បួនសម្រេចជោគជ័យដ៏កំពូល & អំណាចផ្លូវចិត្តអស្ចារ្យ', 'The 4 Bases of Success (Iddhipāda): Formula for Supreme Achievement') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ឥទ្ធិបាទ ៤ សំដៅលើធម៌ជាមូលដ្ឋានគ្រឹះ ៤ ប្រការដែលនាំទៅរកការសម្រេចបាននូវសេចក្តីប្រាថ្នា ជោគជ័យ និងអំណាចផ្លូវចិត្តដ៏អស្ចារ្យ។ ពាក្យថា «ឥទ្ធិ» ប្រែថា ភាពសម្រេច ជោគជ័យ ឬឫទ្ធិអំណាច; ចំណែកពាក្យថា «បាទ» ប្រែថា ជើងទម្រ ឬមូលដ្ឋានគ្រឹះ។ នៅក្នុងឥទ្ធិបាទសំយុត្ត (SN 51) ព្រះសម្មាសម្ពុទ្ធទ្រង់បានត្រាស់ថា បុគ្គលណាដែលបានចម្រើននិងធ្វើឱ្យស្ទាត់ជំនាញនូវឥទ្ធិបាទទាំង ៤ នេះ មិនត្រឹមតែអាចសម្រេចកិច្ចការគ្រប់យ៉ាងក្នុងលោកិយប៉ុណ្ណោះទេ ថែមទាំងអាចសម្រេចអភិញ្ញា និងការត្រាស់ដឹងនូវលោកុត្តរធម៌រំលត់ទុក្ខទៀតផង។', 'Iddhipāda designates the Four Bases of Spiritual Power and Success, functioning as the foundational pillars that elevate human intention into extraordinary accomplishment. "Iddhi" signifies success, spiritual mastery, or transcendent potency; "Pāda" denotes base, foundation, or footing. In the Iddhipāda Saṃyutta (SN 51), the Buddha proclaimed that whoever cultivates and frequently develops these four bases unlocks boundless capacity—not only mastering every noble endeavor in worldly life, but actualizing supreme higher knowledges (abhiññā) and final enlightenment.') }}
    </p>

    <!-- Pali Gatha Box from Iddhipada Samyutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«ចត្តារោ ឥមេ ភិក្ខវេ ឥទ្ធិបាទា។ កតមេ ចត្តារោ? ឥធ ភិក្ខវេ ភិក្ខុ ឆន្ទសមាធិបធានសង្ខារសមន្នាគតំ ឥទ្ធិបាទំ ភាវេតិ, វីរិយសមាធិ..., ចិត្តសមាធិ..., វិមំសាសមាធិបធានសង្ខារសមន្នាគតំ ឥទ្ធិបាទំ ភាវេតិ។»', '"There are, monks, these four bases of spiritual power. Which four? Here a monk develops the base consisting of concentration founded on enthusiasm (chanda), energy (viriya), consciousness (citta), and inquiry (vīmaṃsā)." — Saṃyutta Nikāya 51.13') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— ឆន្ទសមាធិសូត្រ ឥទ្ធិបាទសំយុត្ត មហាវារវគ្គ', '— Chanda Samādhi Sutta, Iddhipāda Saṃyutta, Mahāvāravagga') }}
      </p>
    </div>

    <!-- The 4 Bases Cards -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🏆</span>
        <span>{{ t('ឥទ្ធិបាទទាំង ៤ ប្រការពិស្តារ', 'The 4 Bases of Success') }}</span>
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          v-for="b in bases"
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
                  <h4 class="font-bold text-base" :style="{ color: 'var(--ink)' }">{{ t(b.titleKm, b.titleEn) }}</h4>
                  <p class="text-[11px] font-mono text-stone-500">{{ b.pali }}</p>
                </div>
              </div>
              <span class="text-3xl">{{ b.icon }}</span>
            </div>

            <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(b.descKm, b.descEn) }}
            </p>
          </div>

          <!-- Application Box -->
          <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
            <div class="p-2.5 rounded-lg bg-stone-500/5 border border-stone-500/15">
              <span class="font-bold text-amber-700 dark:text-amber-300 block mb-0.5">
                💼 {{ t('ការអនុវត្តជាក់ស្តែង ៖', 'Real-world Application:') }}
              </span>
              <span class="text-stone-600 dark:text-stone-400">{{ t(b.appKm, b.appEn) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- The 4 Gears Integration Note -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>⚙️</span>
        <span>{{ t('កង់ប្រអប់លេខទាំង ៤ ៖ យន្តការសហការគ្នានាំទៅរកកំពូលជោគជ័យ', 'The 4 Interlocking Gears of Peak Mastery') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ឥទ្ធិបាទទាំង ៤ ត្រូវតែដើរទន្ទឹមគ្នាដូចកង់រថយន្ត ៖ បើមានតែ «ឆន្ទៈ» តែគ្មាន «វីរិយៈ» ក៏បានត្រឹមតែយល់សប្តិ; បើមានតែ «វីរិយៈ» តែគ្មាន «ចិត្តៈ» ការងារនឹងខ្វះគុណភាព; បើមាន «ឆន្ទៈ វីរិយៈ ចិត្តៈ» តែខ្វះ «វិមំសា» នោះនឹងដើរផ្លូវកាត់ខុស ឬប្រឹងប្រែងខុសគោលដៅ។ លុះត្រាតែប្រជុំដោយធម៌ទាំង ៤ ទើបកិច្ចការគ្រប់យ៉ាងសម្រេចបានផ្លែផ្កាដ៏អស្ចារ្យ។', 'The four bases operate like four interlocked gears: passion (Chanda) without energy (Viriya) remains wishful dreaming; effort without focus (Citta) produces superficial mediocrity; enthusiasm, effort, and focus without critical evaluation (Vīmaṃsā) end up running tirelessly in the wrong direction. Only when all four combine harmoniously does human potential blossom into effortless transcendence.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const bases = [
  {
    id: 1,
    num: '១',
    titleKm: 'ឆន្ទៈ (សេចក្តីស្រឡាញ់ពេញចិត្ត)',
    titleEn: 'Chanda (Enthusiasm / Passion)',
    pali: 'Chanda-iddhipāda — បេះដូងស្រឡាញ់ការងារ',
    icon: '❤️',
    descKm: 'សេចក្តីពេញចិត្ត ស្រឡាញ់ ចូលចិត្ត និងស្រេកឃ្លានក្នុងការធ្វើកិច្ចការនោះឱ្យបានសម្រេច។ មិនមែនធ្វើដោយសារគេបង្ខំ ឬទ្រាំធ្វើនោះទេ គឺធ្វើចេញពីចិត្តស្រឡាញ់ពិតប្រាកដ។',
    descEn: 'Passionate enthusiasm and love for the noble task at hand; inner zeal that finds joy in the process rather than working under reluctant coercion.',
    appKm: 'ស្វែងរកក្តីស្រឡាញ់ និងអត្ថន័យជ្រាលជ្រៅក្នុងអ្វីដែលខ្លួនកំពុងធ្វើ ដើម្បីកុំឱ្យធុញទ្រាន់។',
    appEn: 'Discover deep intrinsic purpose and love in your pursuit to sustain lifelong motivation.',
  },
  {
    id: 2,
    num: '២',
    titleKm: 'វីរិយៈ (សេចក្តីព្យាយាមមុតមាំ)',
    titleEn: 'Viriya (Steadfast Energy / Resilience)',
    pali: 'Viriya-iddhipāda — ព្យាយាមមិនរួញរា',
    icon: '🔥',
    descKm: 'ការពុះពារ ព្យាយាម ឧស្សាហ៍មិនខ្ជិលច្រអូស មិនបោះបង់ពាក់កណ្តាលទីពេលជួបឧបសគ្គ ទោះបីហត់នឿយយ៉ាងណាក៏នៅតែបន្តដំណើរឆ្ពោះទៅមុខជានិច្ច។',
    descEn: 'Relentless persistence and resilient energy that refuses to waver or surrender halfway when confronted by adversity or fatigue.',
    appKm: 'ប្តេជ្ញាចិត្តប្រឹងប្រែងធ្វើម្តងបន្តិចៗជារៀងរាល់ថ្ងៃ មិនបោះបង់ទោះលំបាកប៉ុណ្ណាក៏ដោយ។',
    appEn: 'Maintain consistent daily disciplined action without surrender.',
  },
  {
    id: 3,
    num: '៣',
    titleKm: 'ចិត្តៈ (ការយកចិត្តទុកដាក់ផ្ចិតផ្ចង់)',
    titleEn: 'Citta (Deep Focus / Dedication)',
    pali: 'Citta-iddhipāda — ផ្ចង់ស្មារតីលើការងារ',
    icon: '🎯',
    descKm: 'ការយកចិត្តទុកដាក់ តម្កល់ស្មារតីលើកិច្ចការនោះយ៉ាងផ្ចិតផ្ចង់ មិនឱ្យចិត្តរសាត់អណ្តែត មិនធ្វេសប្រហែស ធ្វើដោយក្តីគោរព និងប្រុងប្រយ័ត្នខ្ពស់បំផុត។',
    descEn: 'Single-minded concentration and total immersion in the endeavor, guarding against distraction and delivering meticulous devotion.',
    appKm: 'កម្ចាត់ការរំខានខាងក្រៅ ផ្ចង់អារម្មណ៍ធ្វើការងារម្តងមួយមុខឱ្យបានល្អឥតខ្ចោះ។',
    appEn: 'Eliminate modern digital distractions; immerse fully in deep focused flow.',
  },
  {
    id: 4,
    num: '៤',
    titleKm: 'វិមំសា (ការត្រិះរិះពិចារណាវាងវៃ)',
    titleEn: 'Vīmaṃsā (Critical Investigation / Wisdom)',
    pali: 'Vīmaṃsā-iddhipāda — បញ្ញាត្រិះរិះកែសម្រួល',
    icon: '💡',
    descKm: 'ការប្រើប្រាស់បញ្ញាពិចារណា រកហេតុផល តាមដានលទ្ធផល ស្វែងរកចំណុចខ្វះខាត និងកែច្នៃវិធីសាស្ត្រថ្មីៗដើម្បីឱ្យការងារកាន់តែមានប្រសិទ្ធភាពខ្ពស់។',
    descEn: 'Analytical inquiry and critical discernment, reviewing errors, refining strategies, and innovating smarter solutions.',
    appKm: 'ឧស្សាហ៍ពិនិត្យមើលលទ្ធផលការងារ រៀនពីកំហុស និងកែសម្រួលវិធីសាស្ត្រជានិច្ច។',
    appEn: 'Routinely audit results, learn from setbacks, and iterate methodology iteratively.',
  },
]
</script>
