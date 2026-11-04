<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('សូត្រមាត្រា ៨១ — កល្យាណមិត្ត & មិត្ត ៤ ពួក', 'GATHA 81 — TRUE VS FALSE FRIENDS') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl leading-snug" :style="{ color: 'var(--ink)' }">
      {{ t('កល្យាណមិត្ត ៖ មិត្តពិត ៤ ពួក vs មិត្តក្លែងក្លាយ ៤ ពួក (សិង្គាលកសូត្រ)', 'Kalyāṇamitta — 4 True Friends vs 4 False Friends (Sigālovāda Sutta)') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>

    <p class="mt-5 text-[15px] md:text-base drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('កល្យាណមិត្ត សំដៅលើមិត្តល្អ មិត្តស្មោះត្រង់ ដែលនាំមកនូវសេចក្តីចម្រើនទាំងផ្លូវលោក និងផ្លូវធម៌។ ព្រះអានន្ទធ្លាប់បានចូលទៅទូលព្រះពុទ្ធថា «ការមានមិត្តល្អ គឺស្មើនឹងពាក់កណ្តាលនៃជីវិតបរិសុទ្ធ (ព្រហ្មចរិយៈ) ហើយព្រះអង្គ!»។ ប៉ុន្តែ ព្រះសម្មាសម្ពុទ្ធទ្រង់បានកែតម្រង់ភ្លាមៗថា «កុំពោលដូច្នោះឡើយ អានន្ទ! ការមានមិត្តល្អ មិនមែនពាក់កណ្តាលទេ គឺស្មើនឹងជីវិតបរិសុទ្ធទាំងមូលតែម្តង!»។ នៅក្នុងសិង្គាលកសូត្រ (DN 31) ព្រះអង្គបានបើកកកាយយ៉ាងច្បាស់អំពី «មិត្តក្លែងក្លាយ ៤ ពួក» ដែលត្រូវជៀសឱ្យឆ្ងាយ និង «មិត្តពិត ៤ ពួក» ដែលគួរតែឱបក្រសោបទុកក្នុងជីវិត។', 'Kalyāṇamitta signifies true, noble spiritual friendship that guides the heart toward virtue and wisdom. Ven. Ānanda once approached the Buddha and exclaimed: "Venerable Lord, good spiritual friendship is half of the holy life!" The Buddha immediately corrected him: "Do not say so, Ānanda! Spiritual friendship is not merely half—it is the WHOLE of the holy life!" In the Sigālovāda Sutta (DN 31), the Buddha dissected human social interactions with razor clarity, contrasting four parasitic false friends against four noble guardians of the heart.') }}
    </p>

    <!-- Pali Gatha Box from Upaddha Sutta (SN 45.2) & Sigalovada Sutta -->
    <div class="verse-box p-4 sm:p-5 mt-6 border-l-4" :style="{ borderColor: 'var(--accent)' }">
      <p class="font-serif text-xs sm:text-sm italic leading-loose" :style="{ color: 'var(--ink)' }">
        {{ t('«សកលមេវ ហិទំ អានន្ទ ព្រហ្មចរិយំ យទិទំ កល្យាណមិត្តតា កល្យាណសហាយតា កល្យាណសម្បវង្កតា។»', '"Spiritual friendship, spiritual companionship, spiritual camaraderie—this, Ānanda, is indeed the entire holy life." — Saṃyutta Nikāya 45.2') }}
      </p>
      <p class="text-[11px] mt-1.5 font-bold" :style="{ color: 'var(--accent-bright)' }">
        {{ t('— ឧបឌ្ឍសូត្រ សំយុត្តនិកាយ មគ្គសំយុត្ត', '— Upaddha Sutta, Saṃyutta Nikāya') }}
      </p>
    </div>

    <!-- Toggle Filter for Friends -->
    <div class="mt-8 flex items-center justify-between gap-2 flex-wrap">
      <h3 class="font-display text-xl font-bold flex items-center gap-2" :style="{ color: 'var(--ink)' }">
        <span>👥</span>
        <span>{{ t('ក្បួនពិនិត្យមនុស្ស ៨ ពួក ក្នុងសង្គម', 'The 8 Archetypes of Companionship') }}</span>
      </h3>
      <div class="flex items-center gap-1.5 text-xs overflow-x-auto max-w-full pb-1 scrollbar-none touch-pan-x sm:flex-wrap">
        <button
          type="button"
          class="px-2.5 py-1 rounded-lg border font-bold cursor-pointer transition shrink-0 whitespace-nowrap"
          :class="friendTab === 'all' ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30' : 'border-stone-300 dark:border-stone-700'"
          @click="friendTab = 'all'"
        >
          {{ t('ទាំងអស់ (៨)', 'All (8)') }}
        </button>
        <button
          type="button"
          class="px-2.5 py-1 rounded-lg border font-bold cursor-pointer transition shrink-0 whitespace-nowrap"
          :class="friendTab === 'fake' ? 'bg-rose-500/20 text-rose-700 dark:text-rose-300 border-rose-500/30' : 'border-stone-300 dark:border-stone-700'"
          @click="friendTab = 'fake'"
        >
          {{ t('មិត្តក្លែងក្លាយ (៤)', 'False Friends (4)') }}
        </button>
        <button
          type="button"
          class="px-2.5 py-1 rounded-lg border font-bold cursor-pointer transition shrink-0 whitespace-nowrap"
          :class="friendTab === 'true' ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/30' : 'border-stone-300 dark:border-stone-700'"
          @click="friendTab = 'true'"
        >
          {{ t('មិត្តពិត (៤)', 'True Friends (4)') }}
        </button>
      </div>
    </div>

    <!-- Friends Cards -->
    <div class="mt-4 space-y-4">
      <div
        v-for="f in filteredFriends"
        :key="f.id"
        class="card-paper p-5 rounded-xl border flex flex-col justify-between"
      >
        <div>
          <div class="flex items-center justify-between pb-3 border-b" :style="{ borderColor: 'var(--border)' }">
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold"
                :class="f.isTrue ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300' : 'bg-rose-500/20 text-rose-700 dark:text-rose-300'">
                {{ f.num }}
              </span>
              <div>
                <h4 class="font-bold text-sm sm:text-base" :style="{ color: 'var(--ink)' }">
                  {{ t(f.nameKm, f.nameEn) }}
                </h4>
                <p class="text-[11px] font-mono text-stone-500">{{ f.pali }}</p>
              </div>
            </div>
            <span class="text-3xl">{{ f.icon }}</span>
          </div>

          <!-- Description -->
          <p class="text-xs sm:text-sm mt-3 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
            {{ t(f.descKm, f.descEn) }}
          </p>

          <!-- 4 Specific Signs -->
          <div class="mt-3 p-3 rounded-lg border text-xs"
            :class="f.isTrue ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-rose-500/5 border-rose-500/20'">
            <strong class="block mb-1.5 font-bold" :class="f.isTrue ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300'">
              {{ f.isTrue ? t('💎 ចរិតលក្ខណៈ ៤ យ៉ាង ៖', '4 Noble Hallmarks:') : t('⚠️ សញ្ញាគ្រោះថ្នាក់ ៤ យ៉ាង ៖', '4 Toxic Signs:') }}
            </strong>
            <ul class="space-y-1 text-stone-600 dark:text-stone-300 list-disc list-inside">
              <li v-for="(sign, idx) in f.signs" :key="idx">{{ t(sign.km, sign.en) }}</li>
            </ul>
          </div>
        </div>

        <!-- Practical Advice -->
        <div class="mt-4 pt-3 border-t text-xs" :style="{ borderColor: 'var(--border)' }">
          <strong class="font-bold block mb-0.5" :style="{ color: 'var(--ink)' }">
            💡 {{ t('ដំបូន្មានរបស់ព្រះពុទ្ធ ៖', 'The Buddha\'s Advice:') }}
          </strong>
          <span class="text-stone-600 dark:text-stone-400">{{ t(f.adviceKm, f.adviceEn) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t } = useLanguage()

const friendTab = ref('all')

const friends = [
  // 4 Fake Friends
  {
    id: 1,
    isTrue: false,
    num: '១',
    nameKm: 'មិត្តចាំតែយក (អញ្ញទត្ថុហរ)',
    nameEn: 'The Selfish Taker (Aññadatthuhara)',
    pali: 'Aññadatthuhara — មិត្តដែលគិតតែពីប្រយោជន៍ផ្ទាល់ខ្លួន',
    icon: '🦹',
    descKm: 'មិត្តដែលរាប់អានយើងដើម្បីតែផលប្រយោជន៍ ឱ្យតិចតែចង់បានច្រើន ពេលខ្លួនមានអាសន្នទើបមកជួប និងរាប់អានដោយសារតែការភ័យខ្លាច។',
    descEn: 'A predatory companion who associates only for personal gain, gives little hoping for much, shows up only in times of danger, and serves out of self-interest.',
    signs: [
      { km: 'យកតែប្រយោជន៍របស់គេជាធំ', en: 'Always seeks personal profit from you' },
      { km: 'ឱ្យបន្តិចបន្តួច តែប្រាថ្នាចង់បានមកវិញច្រើន', en: 'Gives little expecting immense reciprocation' },
      { km: 'ជួយកិច្ចការយើង លុះត្រាតែខ្លួនមានការភ័យខ្លាច', en: 'Helps only under compulsion or fear' },
      { km: 'រាប់អានយើង ព្រោះតែផលប្រយោជន៍ផ្ទាល់ខ្លួន', en: 'Associates purely for mercenary gain' },
    ],
    adviceKm: 'ដឹងច្បាស់ថាជាសត្រូវក្លែងខ្លួនមកជាមិត្ត ត្រូវដកខ្លួនថយចេញឱ្យឆ្ងាយ។',
    adviceEn: 'Recognize as an enemy in friend\'s disguise; steer clear of entanglement.',
  },
  {
    id: 2,
    isTrue: false,
    num: '២',
    nameKm: 'មិត្តល្អតែមាត់ (វចីបរម)',
    nameEn: 'The Smooth Talker (Vacīparama)',
    pali: 'Vacīparama — មិត្តដែលពូកែខាងនិយាយ តែគ្មានទង្វើ',
    icon: '🦜',
    descKm: 'មិត្តដែលនិយាយផ្អែមល្ហែមណាស់ តែពូកែយករឿងអតីតកាលដែលកន្លងផុត ឬរឿងអនាគតដែលមិនទាន់មកដល់ មកធ្វើជាលេស ប៉ុន្តែពេលយើងត្រូវការជំនួយជាក់ស្តែង បែរជាគេចវេះ។',
    descEn: 'A smooth conversationalist who makes lavish promises about past favors or future windfalls, but manufactures excuses the moment actual support is required.',
    signs: [
      { km: 'រំលឹកតែរឿងអតីតកាលដែលកន្លងហួសទៅហើយ', en: 'Entertains you with talks of past pasts' },
      { km: 'សន្យាតែរឿងអនាគតដែលមើលមិនឃើញ', en: 'Promises great assistance in an unseen future' },
      { km: 'ព្យាយាមយកចិត្តដោយពាក្យសម្តីឥតប្រយោជន៍', en: 'Curries favor with empty flattery' },
      { km: 'ពេលមានកិច្ចការបន្ទាន់ជាក់ស្តែង បែរជារកលេសគេចវេះ', en: 'Invents lame excuses whenever practical help is needed' },
    ],
    adviceKm: 'កុំផ្ញើវាសនាលើពាក្យសន្យាខ្យល់ ចូរពិនិត្យលើទង្វើជាក់ស្តែង។',
    adviceEn: 'Never stake well-being on airy vows; weigh people by conduct, not words.',
  },
  {
    id: 3,
    isTrue: false,
    num: '៣',
    nameKm: 'មិត្តបញ្ជោរ (អនុប្បិយភាណី)',
    nameEn: 'The Sycophant Flatterer (Anuppiyabhāṇī)',
    pali: 'Anuppiyabhāṇī — មិត្តដែលយល់ស្របគ្រប់រឿង សូម្បីរឿងខុស',
    icon: '🎭',
    descKm: 'មិត្តដែលនៅចំពោះមុខ លើកតម្កើងសរសើរមិនដាច់ពីមាត់ ទោះយើងធ្វើខុសក៏អែបអបយល់ស្រប ប៉ុន្តែនៅកំបាំងមុខ បែរជានាំគ្នានិយាយដើមបង្ខូចកេរ្តិ៍ឈ្មោះ។',
    descEn: 'The agreeable hypocrite: applauds you when you do wrong, encourages harmful behavior, praises you to your face, and slanders you behind your back.',
    signs: [
      { km: 'យើងធ្វើអាក្រក់ ក៏យល់ព្រមតាមយើង', en: 'Consents when you engage in wrongdoing' },
      { km: 'យើងធ្វើល្អ ក៏យល់ព្រមតាមយើង (មិនខ្វល់ខុសត្រូវ)', en: 'Consents when you do good without genuine care' },
      { km: 'សរសើរយើងនៅចំពោះមុខយ៉ាងលើសលប់', en: 'Praises you extravagantly to your face' },
      { km: 'និយាយនិន្ទាបង្អាប់យើងនៅកំបាំងមុខ', en: 'Backbites and mocks you behind your back' },
    ],
    adviceKm: 'ជៀសវាងមនុស្សគ្មានឆ្អឹងខ្នង ដែលនាំយើងធ្លាក់ក្នុងសេចក្តីវិនាស។',
    adviceEn: 'Dismantle reliance on sycophants who validate your delusions for social access.',
  },
  {
    id: 4,
    isTrue: false,
    num: '៤',
    nameKm: 'មិត្តបបួលវិនាស (អបាយសហាយ)',
    nameEn: 'The Ruinous Companion (Apāyasahāya)',
    pali: 'Apāyasahāya — មិត្តដែលនាំចូលទៅកាន់អបាយមុខ',
    icon: '🍺',
    descKm: 'មិត្តដែលតែងតែបបួលដើរលេងយប់ ផឹកស៊ីស្រវឹង មើលល្បែងគងត្រែ និងលេងល្បែងស៊ីសង ដែលជាផ្លូវនាំទៅរកភាពក្រីក្រ និងវិនាសអន្តរាយ។',
    descEn: 'The party accomplice who invites you to carouse into the night, get drunk, gamble, and frequent dissolute venues that drain your wealth and health.',
    signs: [
      { km: 'ជាមិត្តកំដរពេលផឹកទឹកស្រវឹង', en: 'Companion in alcohol drinking and intoxicants' },
      { km: 'ជាមិត្តកំដរដើរលេងតាមផ្លូវពេលរាត្រី', en: 'Companion roaming streets at unseasonable night hours' },
      { km: 'ជាមិត្តកំដរដើរមើលល្បែងគងត្រែ', en: 'Companion frequenting theatrical spectacles' },
      { km: 'ជាមិត្តកំដរលេងល្បែងស៊ីសងភ្នាល់គ្នា', en: 'Companion engaging in addictive gambling' },
    ],
    adviceKm: 'កាត់ផ្តាច់ឱ្យដាច់ស្រឡះ ប្រសិនបើមិនចង់ឱ្យអនាគត និងគ្រួសារត្រូវរលាយ។',
    adviceEn: 'Cut ties decisively if you wish to safeguard your wealth, health, and family.',
  },

  // 4 True Friends
  {
    id: 5,
    isTrue: true,
    num: '៥',
    nameKm: 'មិត្តមានឧបការៈ (ឧបការក)',
    nameEn: 'The Helpful Guardian (Upakāraka)',
    pali: 'Upakāraka — មិត្តដែលចាំជួយទំនុកបម្រុង និងការពារ',
    icon: '🛡️',
    descKm: 'មិត្តដែលចាំការពារយើងពេលយើងភ្លេចខ្លួន ឬស្រវឹង ការពារទ្រព្យសម្បត្តិរបស់យើង ជាទីពឹងពាក់ពេលមានភ័យ និងផ្តល់ជំនួយលើសពីអ្វីដែលយើងស្នើសុំ។',
    descEn: 'The steadfast protector: guards you when heedless or incapacitated, protects your assets, acts as a sanctuary in crises, and offers more than asked.',
    signs: [
      { km: 'ការពារមិត្តដែលកំពុងស្រវឹង ឬធ្វេសប្រហែស', en: 'Protects you when you are vulnerable or heedless' },
      { km: 'ការពារទ្រព្យសម្បត្តិរបស់មិត្ត', en: 'Guards your property and possessions faithfully' },
      { km: 'ជាទីពឹងពាក់ដ៏កក់ក្តៅពេលមានភ័យអាសន្ន', en: 'Serves as an unshakable refuge in emergency' },
      { km: 'ពេលមានការចាំបាច់ ជួយឧបត្ថម្ភលើសពីការសុំ', en: 'Provides twice the resources needed in times of stress' },
    ],
    adviceKm: 'ជាកល្យាណមិត្តដ៏កម្រ ត្រូវថែរក្សាចំណងមិត្តភាពនេះឱ្យបានល្អបំផុត។',
    adviceEn: 'A priceless spiritual guardian; treasure this friendship with deep loyalty.',
  },
  {
    id: 6,
    isTrue: true,
    num: '៦',
    nameKm: 'មិត្តរួមសុខរួមទុក្ខ (សមានសុខទុក្ខ)',
    nameEn: 'The Friend in Weal and Woe (Samānasukhadukkha)',
    pali: 'Samānasukhadukkha — មិត្តដែលស្មោះត្រង់ មិនរត់ចោលពេលមានអាសន្ន',
    icon: '🤝',
    descKm: 'មិត្តដែលហ៊ានប្រាប់ការសម្ងាត់ដល់យើង ជួយលាក់ការសម្ងាត់របស់យើង មិនបោះបង់យើងចោលពេលយើងធ្លាក់ខ្លួនក្រ និងហ៊ានលះបង់ជីវិតដើម្បីការពារយើង។',
    descEn: 'The confidant through storms: reveals their secrets to you, guards your private confidences, stands by you in ruin, and would sacrifice life for you.',
    signs: [
      { km: 'ហ៊ានប្រាប់រឿងសម្ងាត់របស់ខ្លួនដល់មិត្ត', en: 'Shares deep personal secrets with you' },
      { km: 'ជួយរក្សាការសម្ងាត់របស់មិត្តមិនឱ្យធ្លាយចេញ', en: 'Guards your confidences with absolute fidelity' },
      { km: 'មិនបោះបង់មិត្តចោលពេលមិត្តធ្លាក់ខ្លួនក្រលំបាក', en: 'Never abandons you when financial or social ruin hits' },
      { km: 'ហ៊ានលះបង់សូម្បីតែជីវិតដើម្បីការពារមិត្ត', en: 'Willing to risk life itself for your protection' },
    ],
    adviceKm: 'ជាមិត្តស្លាប់រស់ គួររក្សាទុកដូចកែវភ្នែកទាំងសងខាង។',
    adviceEn: 'A soulmate of virtue; cherish them as you cherish your own eyes.',
  },
  {
    id: 7,
    isTrue: true,
    num: '៧',
    nameKm: 'មិត្តណែនាំប្រយោជន៍ (អត្ថក្ខាយី)',
    nameEn: 'The Mentor of Goodness (Atthakkhāyī)',
    pali: 'Atthakkhāyī — មិត្តដែលចង្អុលបង្ហាញផ្លូវត្រូវ',
    icon: '🧭',
    descKm: 'មិត្តដែលហ៊ានឃាត់ឃាំងយើងមិនឱ្យធ្វើអំពើបាប ដឹកនាំយើងឱ្យធ្វើអំពើល្អ បង្រៀននូវអ្វីដែលយើងមិនធ្លាប់ដឹង និងប្រាប់ផ្លូវទៅកាន់ស្ថានសួគ៌។',
    descEn: 'The wise mentor: restrains you from evil, encourages noble conduct, shares wisdom you have never heard before, and points out the path to heaven.',
    signs: [
      { km: 'ឃាត់ឃាំងមិត្តមិនឱ្យប្រព្រឹត្តអំពើអាក្រក់', en: 'Restrains you from descending into vice' },
      { km: 'ដាស់តឿនឱ្យមិត្តតម្កល់នៅក្នុងអំពើល្អ', en: 'Encourages and guides you toward virtue' },
      { km: 'បង្រៀនធម៌ និងចំណេះដឹងដែលមិនធ្លាប់ឮ', en: 'Shares inspiring teachings you never heard' },
      { km: 'ប្រាប់មាគ៌ាទៅកាន់សេចក្តីសុខ និងសួគ៌', en: 'Points out the direct road to heavenly peace' },
    ],
    adviceKm: 'ជាគ្រូផង ជាមិត្តផង គួរគោរពស្តាប់ដំបូន្មានដោយការដឹងគុណ។',
    adviceEn: 'Both teacher and brother; listen to their corrective counsel with humble gratitude.',
  },
  {
    id: 8,
    isTrue: true,
    num: '៨',
    nameKm: 'មិត្តមានទឹកចិត្តមេត្តា (អនុកម្បក)',
    nameEn: 'The Compassionate Well-Wisher (Anukampaka)',
    pali: 'Anukampaka — មិត្តដែលមានចិត្តអាណិតអាសូរស្មោះស្ម័គ្រ',
    icon: '❤️',
    descKm: 'មិត្តដែលមិនដែលត្រេកអរពេលឃើញយើងជួបគ្រោះថ្នាក់ រីករាយស្មោះសរពេលឃើញយើងជោគជ័យ ឃាត់ឃាំងអ្នកដទៃមិនឱ្យនិយាយដើមយើង និងសរសើរអ្នកដែលនិយាយល្អពីយើង។',
    descEn: 'The compassionate ally: sorrows at your misfortunes, rejoices wholeheartedly in your successes, restrains detractors, and praises those who defend your honor.',
    signs: [
      { km: 'មិនត្រេកអរពេលឃើញមិត្តជួបក្តីវិនាសអន្តរាយ', en: 'Does not gloat or rejoice over your misfortunes' },
      { km: 'ត្រេកអររីករាយពេលឃើញមិត្តបានសេចក្តីចម្រើន', en: 'Delights sincerely in your prosperity and triumphs' },
      { km: 'ហាមឃាត់អ្នកដទៃដែលកំពុងនិយាយបង្អាប់មិត្ត', en: 'Defends your reputation against those who speak ill' },
      { km: 'កោតសរសើរអ្នកដែលនិយាយសរសើរមិត្ត', en: 'Praises and affirms those who speak well of you' },
    ],
    adviceKm: 'ជាបង្អែកផ្លូវចិត្តដ៏កក់ក្តៅបំផុត ដែលធ្វើឱ្យជីវិតមានសេចក្តីសុខ។',
    adviceEn: 'An emotional haven of unconditional warmth that makes life a joy.',
  },
]

const filteredFriends = computed(() => {
  if (friendTab.value === 'fake') return friends.filter(f => !f.isTrue)
  if (friendTab.value === 'true') return friends.filter(f => f.isTrue)
  return friends
})
</script>
