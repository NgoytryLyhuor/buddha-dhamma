<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៩៥ — ករណីយមេត្តាសូត្រ & អានិសង្ស ១១', 'GATHA 95 — METTĀ SUTTA & 11 BLESSINGS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('មេត្តាសូត្រ & អានិសង្សមេត្តា ១១ យ៉ាង ៖ កម្លាំងចិត្តស្រឡាញ់ឥតព្រំដែន', 'The Mettā Sutta & 11 Blessings: Boundless Loving-Kindness') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ករណីយមេត្តាសូត្រ គឺជាព្រះសូត្រដ៏ស័ក្តិសិទ្ធិនិងល្បីល្បាញបំផុតមួយក្នុងព្រះពុទ្ធសាសនា ដែលព្រះសម្មាសម្ពុទ្ធទ្រង់បានសម្តែងដល់ព្រះភិក្ខុសង្ឃ ៥០០ អង្គដែលទៅគង់ភាវនាក្នុងព្រៃជ្រៅ ហើយត្រូវពួកទេវតានិងរុក្ខទេវតាបំភ័យ។ ព្រះពុទ្ធមិនបានឱ្យភិក្ខុទាំងនោះរត់គេច ឬប្រើអំណាចកម្ចាត់ទេ តែទ្រង់បានប្រទានព្រះសូត្រនេះជាអាវុធមេត្តាធម៌ ផ្សាយសេចក្តីស្រឡាញ់ដ៏បរិសុទ្ធ គ្មានកំហឹង គ្មានការស្អប់ខ្ពើម ទៅកាន់សព្វសត្វទាំងអស់ ដូចម្តាយដែលថ្នាក់ថ្នមការពារកូនបង្កើតតែមួយគត់ដោយអាយុជីវិត។ នៅក្នុងអង្គុត្តរនិកាយ (AN 11.16) ព្រះអង្គបានបញ្ជាក់បន្ថែមនូវអានិសង្សដ៏អស្ចារ្យ ១១ យ៉ាងនៃចិត្តមេត្តានេះ។', 'The Karanīya Mettā Sutta is one of Buddhism’s most sacred and beloved chants, delivered by the Buddha to five hundred monks who had retreated into deep wilderness and were terrified by tree deities. Instead of counseling flight or defensive hostility, the Buddha gifted them the sublime weapon of universal loving-kindness—urging them to radiate unconditional goodwill toward all sentient beings without boundary, just as a mother would protect her only child at the peril of her own life. In the Aṅguttara Nikāya (AN 11.16), the Buddha detailed the eleven profound blessings that reward this peaceful mind.') }}
    </p>

    <!-- Pali Gatha Box from Karaniya Metta Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«មាតា យថា និយំ បុត្តំ អាយុសា ឯកបុត្តមនុរក្ខេ, ឯវម្បិ សព្វភូតេសុ មានសម្ភាវយេ អបរិមាណំ។»', '"Even as a mother protects with her life her child, her only child, so with a boundless heart should one cherish all living beings." — Khuddakapāṭha 9') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— ករណីយមេត្តាសូត្រ ខុទ្ទកបាឋ & សុត្តនិបាត', '— Karanīya Mettā Sutta, Khuddakapāṭha & Sutta Nipāta') }}
      </p>
    </div>

    <!-- 11 Blessings Grid -->
    <div class="mt-8 space-y-4">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🕊️</span>
        <span>{{ t('អានិសង្សនៃការចម្រើនមេត្តា ១១ យ៉ាង (AN 11.16)', 'The 11 Blessings of Loving-Kindness (AN 11.16)') }}</span>
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <div
          v-for="b in blessings"
          :key="b.id"
          class="card-paper p-4 rounded-xl border flex items-start gap-3"
        >
          <span class="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
            {{ b.num }}
          </span>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-lg">{{ b.icon }}</span>
              <h4 class="font-bold text-sm" :style="{ color: 'var(--ink)' }">{{ t(b.titleKm, b.titleEn) }}</h4>
            </div>
            <p class="text-xs mt-1 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
              {{ t(b.descKm, b.descEn) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Practical Meditation Guide -->
    <div class="mt-8 p-5 rounded-2xl border" :style="{ borderColor: 'var(--border)', background: 'var(--bg-card)' }">
      <h3 class="font-display text-base sm:text-lg font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>🧘</span>
        <span>{{ t('វិធីផ្សាយមេត្តាចិត្ត ៤ ទិស ៖ ជំហានអនុវត្តប្រចាំថ្ងៃ', 'How to Radiate Mettā: Practical Daily Exercise') }}</span>
      </h3>
      <p class="text-xs sm:text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('មុនចូលគេង និងពេលភ្ញាក់ពីព្រលឹម ចូរអង្គុយឱ្យស្រួល រួចតាំងចិត្តផ្សាយមេត្តា ៖ (១) ផ្សាយដល់ខ្លួនឯង «សូមឱ្យខ្ញុំបានសុខ ផុតចាកទុក្ខ» (២) ផ្សាយដល់មនុស្សជាទីស្រឡាញ់ និងមាតាបិតា (៣) ផ្សាយដល់មនុស្សធម្មតា និង (៤) ផ្សាយដល់មនុស្សដែលធ្លាប់ស្អប់ ឬធ្វើបាបយើង ព្រមទាំងសត្វលោកទាំងអស់ក្នុងទិសទាំង ១០ ដោយចិត្តទន់ភ្លន់ គ្មានព្រំដែន។', 'Morning upon waking and evening before sleep, sit comfortably and radiate loving-kindness progressively: (1) To oneself: "May I be well, peaceful, and free from suffering"; (2) To mentors and beloved parents; (3) To neutral strangers; (4) To adversaries who wronged you; and finally to all living beings throughout all ten directions without reservation.') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const blessings = [
  { id: 1, num: '១', icon: '😴', titleKm: 'ដេកលក់ជាសុខ', titleEn: 'Sleeps in Peace', descKm: 'ដេកលក់ស្រួល គ្មានការរសាប់រសល់ មិនតប់ប្រមល់។', descEn: 'Sleeps serenely without agitation or insomnia.' },
  { id: 2, num: '២', icon: '🌅', titleKm: 'ភ្ញាក់ឡើងជាសុខ', titleEn: 'Wakes in Peace', descKm: 'ភ្ញាក់ឡើងដោយភាពស្រស់ស្រាយ គ្មានការធុញថប់។', descEn: 'Wakes up refreshed with clear, joy-filled mind.' },
  { id: 3, num: '៣', icon: '✨', titleKm: 'មិនយល់សប្តិអាក្រក់', titleEn: 'No Nightmares', descKm: 'មិនដែលយល់សប្តិឃើញខ្មោច ឬរឿងគួរឱ្យខ្លាចឡើយ។', descEn: 'Free from distressing or terrifying dreams.' },
  { id: 4, num: '៤', icon: '🤝', titleKm: 'មនុស្សទាំងឡាយស្រឡាញ់', titleEn: 'Loved by Humans', descKm: 'ទៅទីណា មនុស្សផងគ្នាតែងគោរព ស្រឡាញ់ រាប់អាន។', descEn: 'Endeared to and respected by all human beings.' },
  { id: 5, num: '៥', icon: '🧚', titleKm: 'អមនុស្សទាំងឡាយស្រឡាញ់', titleEn: 'Loved by Non-Humans', descKm: 'ពួកទេវតា ខ្មោច ព្រាយ បិសាច មិនបៀតបៀន តែចូលចិត្តរាប់អាន។', descEn: 'Beloved by non-human beings, spirits, and deities.' },
  { id: 6, num: '៦', icon: '🛡️', titleKm: 'ទេវតាតែងតាមថែរក្សា', titleEn: 'Guarded by Devas', descKm: 'ទេវតាមានឫទ្ធិតែងឃ្លាំមើលការពារគ្រប់ជំហាន។', descEn: 'Protected continuously by divine celestial guardians.' },
  { id: 7, num: '៧', icon: '🔥', titleKm: 'ភ្លើង ពិស អាវុធ មិនប៉ះពាល់', titleEn: 'Harm Immunity', descKm: 'អំណាចមេត្តាការពារមិនឱ្យភ្លើង ថ្នាំពិស អាវុធ មកយាយី។', descEn: 'Fire, poisons, and weapons cannot harm the practitioner.' },
  { id: 8, num: '៨', icon: '🧘', titleKm: 'ចិត្តឆាប់ស្ងប់ជាសមាធិ', titleEn: 'Swift Concentration', descKm: 'ចិត្តឆាប់ចូលដល់សមាធិ មិនរសាត់អណ្តែត។', descEn: 'Mind enters tranquil samādhi with effortless ease.' },
  { id: 9, num: '៩', icon: '🌸', titleKm: 'ទឹកមុខស្រស់ថ្លាជានិច្ច', titleEn: 'Radiant Demeanor', descKm: 'ផ្ទៃមុខភ្លឺថ្លា មានសិរីសួស្តី គ្មានស្នាមជ្រួញនៃកំហឹង។', descEn: 'Facial complexion is serene, radiant, and luminous.' },
  { id: 10, num: '១០', icon: '🕊️', titleKm: 'មិនវង្វេងស្មារតីពេលស្លាប់', titleEn: 'Dies Without Confusion', descKm: 'ពេលជិតផុតដង្ហើម មានសតិស្ងប់ស្ងាត់ មិនភ័យខ្លាច។', descEn: 'Passes away with clear, unclouded mindfulness.' },
  { id: 11, num: '១១', icon: '🌌', titleKm: 'ទៅកើតក្នុងព្រហ្មលោក', titleEn: 'Rebirth in Brahma Realm', descKm: 'បើមិនទាន់សម្រេចអរហត្ត រមែងទៅកើតក្នុងព្រហ្មលោកដ៏ខ្ពង់ខ្ពស់។', descEn: 'If not attaining Arahantship, born into the high Brahma world.' },
]
</script>
