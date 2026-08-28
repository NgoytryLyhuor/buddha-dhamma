<template>
  <div class="fade-up">
    <p class="chapter-label">{{ t('ធម៌បន្ថែម ១៥ — ជីវិតព្រះសង្ឃ', 'EXTRA 15 — MONASTIC LIFE') }}</p>
    <h2 class="mt-3 font-display text-3xl md:text-4xl" :style="{ color: 'var(--ink)' }">
      {{ t('ជីវិតព្រះសង្ឃ និងវិន័យ', 'Monastic Life and the Vinaya') }}
    </h2>
    <div class="ornament mt-4">&#9784;</div>
    <p class="mt-5 drop-cap leading-loose" :style="{ color: 'var(--ink-soft)' }">
      {{ t('ព្រះសង្ឃ ជាស្តូបបន្តនៃព្រះពុទ្ធសាសនា ។ សម្រាប់អ្នកកាន់ឧបាសក–ឧបាសិកា ការយល់អំពីការរស់នៅរបស់ព្រះសង្ឃ ជួយឲ្យដឹងពីរបៀបគាំទ្របដិបត្តិ និងចូលរួមធ្វើបុណ្យ ដោយត្រូវតាមផ្លូវធម៌។', 'The Saṅgha is the living continuation of the Buddha&rsquo;s teaching. For lay men and women, understanding how monks live helps one know how to support their practice and take part in merit-making in a proper way.') }}
    </p>

    <!-- Three refuges / lay-monial -->
    <div class="grid md:grid-cols-2 gap-6 mt-8">
      <div class="card-paper p-6">
        <p class="chapter-label">{{ t('ដានដំណែង', 'ROLES') }}</p>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t('ឧបាសក–ឧបាសិកា', 'The Lay Supporters') }}</h3>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ពុទ្ធបរិស័ទ មាន ៤ ពួក៖ ភិក្ខុ ភិក្ខុនី ឧបាសក (បុរសកាច) ឧបាសិកា (ស្ត្រីកាច)។ អ្នកផ្ទះធ្វើបុណ្យទាន កាន់សីល ៥ ហើយជួយគាំទ្រព្រះសង្ឃ។', 'There are four assemblies: monks, nuns, lay men and lay women. Lay people give dāna, keep the five precepts, and support the monks.') }}
        </p>
        <div class="verse-box p-3 mt-4">
          <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t('អ្នកដែលកាន់សីល ៥ ឥតខ្ចោះ ទើបបានឈ្មោះថា ឧបាសក ឧបាសិកា ពិតប្រាកដ។', 'One who keeps the five precepts unbroken is truly called a lay disciple.') }}</p>
        </div>
      </div>
      <div class="card-paper p-6">
        <p class="chapter-label">VINAYA</p>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t('វិន័យភិក្ខុ', 'The Monastic Discipline') }}</h3>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ភិក្ខុកាន់សីលវិន័យ ២២៧ សិក្ខាបទ ។ គោលធំៗ៖ លះកាម មិនកាន់ប្រាក់ មិនបរិភោគពេលក្រោយថ្ងៃត្រង់ មិនរៀបចំអាហារខ្លួនឯង។', 'A monk keeps 227 training rules. The main points: renounce sensual life, do not handle money, do not eat after midday, do not prepare one&rsquo;s own food.') }}
        </p>
        <div class="verse-box p-3 mt-4">
          <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">{{ t('វិន័យជាអាយុរបស់សាសនា; ពេលវិន័យនៅ សាសនានៅ។', 'The discipline is the life of the teaching; so long as the Vinaya stands, the Dhamma stands.') }}</p>
        </div>
      </div>
    </div>

    <!-- alms round -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">PIṆḌAPĀTA</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('ការបិណ្ឌបាត', 'The Alms Round') }}</h3>
      <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-soft)' }">
        {{ t('ពេលព្រឹក ព្រះសង្ឃត្រឡប់ទៅភូមិ/ក្រុង ដើម្បីបិណ្ឌបាត ដោយមិនស្រែកហៅ មិនសួរ តែឈរស្ងៀម ទទួលយកតាមសទ្ធារបស់ពុទ្ធបរិស័ទ។ ការបិណ្ឌបាត ជាស្ពាននៃបុណ្យទានរវាងផ្ទះនិងវត្ត។', 'In the morning the monks go into town or village on alms round, without calling out or asking — they stand silently and receive whatever devotees freely offer. Alms round is the bridge of merit between home and temple.') }}
      </p>
    </div>

    <!-- lay ways to support -->
    <div class="card-paper p-6 md:p-8 mt-8">
      <p class="chapter-label">{{ t('អ្នកផ្ទះគួរដឹង', 'FOR LAY PEOPLE') }}</p>
      <h3 class="font-display text-xl mt-2" :style="{ color: 'var(--ink)' }">{{ t('របៀបធ្វើបុណ្យទាន ឲ្យបានត្រឹមត្រូវ', 'How to Make Meritorious Offerings Properly') }}</h3>
      <ul class="tick-list mt-4">
        <li v-for="g in lohaka" :key="g.en">
          <strong :style="{ color: 'var(--ink)' }">{{ t(g.km, g.en) }}</strong>
          <span class="text-sm" :style="{ color: 'var(--ink-muted)' }"> — {{ t(g.kmBody, g.enBody) }}</span>
        </li>
      </ul>
      <div class="verse-box p-4 mt-5">
        <p class="text-sm" :style="{ color: 'var(--ink-soft)' }">
          {{ t('ទាននោះ ត្រូវឲ្យដោយចិត្តសទ្ធា ដោយដៃខ្លួនឯង ដោយវត្ថុសមស្រប ដល់ជនសមស្រប — នេះហៅថា ទក្ខិណេយ្យទក្ខិណា បុណ្យដ៏ប្រសើរ។', 'A gift should be given with faith, with one&rsquo;s own hand, with suitable material, to a suitable recipient — this is called the best of gifts.') }}
        </p>
      </div>
    </div>

    <!-- merit -->
    <div class="grid md:grid-cols-2 gap-6 mt-8">
      <div class="card-paper p-6">
        <p class="chapter-label">DĀNA — បុណ្យទាន</p>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t('បុណ្យទាន', 'Dāna') }}</h3>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ការឲ្យទាន ជាដើមនៃកុសល ។ ព្រះពុទ្ធទ្រង់សរសើរទាន ដែលឲ្យដោយការគោរព ដោយចិត្តស្អាត ឥតមានអ្វីមកប៉ះពាល់។', 'Giving is the beginning of merit. The Buddha praised gifts given with respect, with a pure heart, without anything clinging to them.') }}
        </p>
      </div>
      <div class="card-paper p-6">
        <p class="chapter-label">SĪLA — សីល</p>
        <h3 class="font-display text-lg mt-2" :style="{ color: 'var(--ink)' }">{{ t('សីល', 'Sīla') }}</h3>
        <p class="text-sm mt-2 leading-relaxed" :style="{ color: 'var(--ink-muted)' }">
          {{ t('ការកាន់សីលឲ្យបរិសុទ្ធ ធំជាងការឲ្យទាន ។ សីលជាគ្រឹះនៃសមាធិ និងបញ្ញា។', 'Keeping pure sīla is greater than giving. Sīla is the foundation of concentration and wisdom.') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()

const lohaka = [
  { km: 'ឲ្យបាយទានពេលព្រឹក', en: 'Offer morning food', kmBody: 'រៀបចំម្ហូបពីពេលព្រឹក សម្រាប់ព្រះសង្ឃ ព្រមទាំងភាជនៈ។', enBody: 'Prepare food in the morning for the monks, along with bowls.' },
  { km: 'ឲ្យបច្ច័យ ៤', en: 'Offer the four requisites', kmBody: 'ចីវរ បាយ សេនាសនៈ ថ្នាំ ។', enBody: 'Robes, food, lodging, and medicine.' },
  { km: 'ថែរក្សាវត្តអារាម', en: 'Maintain the temple', kmBody: 'លាងជូត បោសសម្អាត ជួសជុល ទាំងដឹងកាតព្វកិច្ចជនវត្ត។', enBody: 'Clean, repair, and know one&rsquo;s duties to the temple.' },
  { km: 'ការពារព្រះសង្ឃ', en: 'Protect the monks', kmBody: 'កាលព្រះសង្ឃមានទុក្ខ ទៅជួយរំលែក ការពារគ្រោះថ្នាក់។', enBody: 'Help and guard them when they are in trouble or danger.' },
  { km: 'បណ្តុះសទ្ធាក្នុងកូនចៅ', en: 'Nurture faith in children', kmBody: 'បង្រៀនកូនចៅឲ្យចេះគោរព និងធ្វើបុណ្យតាំងពីតូច។', enBody: 'Teach children to respect and make merit from a young age.' },
]
</script>
