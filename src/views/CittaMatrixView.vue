<script setup>
import { ref, computed } from 'vue'

// --- View State ---
const activeTab = ref('citta') // 'citta' | 'cetasika' | 'matrix'
const isExpanded121 = ref(false) // false = 89, true = 121
const selectedCittaFilter = ref('all') // 'all', 'akusala', 'ahetuka', 'kamavacara-sobhana', 'rupavacara', 'arupavacara', 'lokuttara'
const selectedJatiFilter = ref('all') // 'all', 'kusala', 'akusala', 'vipaka', 'kiriya'
const selectedCetasikaGroup = ref('all') // 'all', 'sabbacitta', 'pakinna', 'akusala', 'sobhana-sadharana', 'virati', 'appamanna', 'panna'
const searchQuery = ref('')
const selectedItem = ref(null) // For modal inspector (either citta or cetasika)
const modalType = ref('citta') // 'citta' | 'cetasika'

// --- 89/121 Citta Master Data ---
const cittaList = [
  // Akusala 12
  {
    id: 'c1',
    code: 'LOB-1',
    pali: 'Somanassa-sahagataṁ diṭṭhigata-sampayuttaṁ asaṅkhārikaṁ',
    km: 'ចិត្តត្រេកអរ រីករាយ ប្រកបដោយទិដ្ឋិខុស មិនបាច់មានការជម្រុញ',
    category: 'akusala',
    groupKm: 'លោភមូលចិត្ត ៨ (ចិត្តលោភលន់)',
    groupEn: 'Lobha-mūla Cittas (8)',
    jati: 'akusala',
    jatiKm: 'អកុសល',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'somanassa',
    feelingKm: 'សោមនស្ស (សប្បាយរីករាយ)',
    hetu: ['lobha', 'moha'],
    hetuKm: 'លោភៈ, មោហៈ',
    prompted: 'asaṅkhārika (កើតឯកឯង ដោយកម្លាំងខ្លាំងក្លា)',
    cetasikaCount: 19,
    functionKm: 'ជវនៈ (សោយអារម្មណ៍ និងសន្សំកម្មអកុសល)',
    practicalNote: 'កើតឡើងពេលឃើញ ឬជួបវត្ថុដែលពេញចិត្តខ្លាំង រីករាយនឹងកាមគុណ ដោយយល់ខុសថាជាទៀង ឬជាតួខ្លួន (ដូចជាការស្រឡាញ់ទ្រព្យសម្បត្តិដោយយល់ថាជារបស់អញពិតប្រាកដ)។',
    cure: 'ចម្រើនអសុភកុសល និងអនិច្ចានុបស្សនា ដើម្បីផ្តាច់ការជាប់ជំពាក់'
  },
  {
    id: 'c2',
    code: 'LOB-2',
    pali: 'Somanassa-sahagataṁ diṭṭhigata-sampayuttaṁ sasaṅkhārikaṁ',
    km: 'ចិត្តត្រេកអរ រីករាយ ប្រកបដោយទិដ្ឋិខុស ដោយមានការជម្រុញ',
    category: 'akusala',
    groupKm: 'លោភមូលចិត្ត ៨',
    groupEn: 'Lobha-mūla Cittas',
    jati: 'akusala',
    jatiKm: 'អកុសល',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'somanassa',
    feelingKm: 'សោមនស្ស (សប្បាយរីករាយ)',
    hetu: ['lobha', 'moha'],
    hetuKm: 'លោភៈ, មោហៈ',
    prompted: 'sasaṅkhārika (កើតដោយមានការទាក់ទាញ ឬជម្រុញ)',
    cetasikaCount: 21,
    functionKm: 'ជវនៈ (សោយអារម្មណ៍)',
    practicalNote: 'កើតឡើងដោយមានការបបួល ឬការគិតពិចារណាយូរទើបកើតសេចក្តីលោភលន់ និងយល់ខុស។',
    cure: 'ពិចារណាទោសនៃកាមគុណ និងចៀសវាងមិត្តអាក្រក់'
  },
  {
    id: 'c3',
    code: 'LOB-3',
    pali: 'Somanassa-sahagataṁ diṭṭhigata-vippayuttaṁ asaṅkhārikaṁ',
    km: 'ចិត្តត្រេកអរ មិនប្រកបដោយទិដ្ឋិខុស មិនបាច់មានការជម្រុញ',
    category: 'akusala',
    groupKm: 'លោភមូលចិត្ត ៨',
    groupEn: 'Lobha-mūla Cittas',
    jati: 'akusala',
    jatiKm: 'អកុសល',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'somanassa',
    feelingKm: 'សោមនស្ស',
    hetu: ['lobha', 'moha'],
    hetuKm: 'លោភៈ, មោហៈ',
    prompted: 'asaṅkhārika',
    cetasikaCount: 19,
    functionKm: 'ជវនៈ',
    practicalNote: 'រីករាយនឹងតណ្ហាធម្មជាតិ តែដឹងខុសត្រូវ (មិនប្រកែកកម្មផល) ដូចជាការស្តាប់ភ្លេង ញ៉ាំអាហារឆ្ងាញ់ដោយរីករាយ។',
    cure: 'ចម្រើនសតិដឹងទាន់នូវវេទនា និងអនិច្ចលក្ខណៈ'
  },
  {
    id: 'c4',
    code: 'LOB-4',
    pali: 'Somanassa-sahagataṁ diṭṭhigata-vippayuttaṁ sasaṅkhārikaṁ',
    km: 'ចិត្តត្រេកអរ មិនប្រកបដោយទិដ្ឋិខុស ដោយមានការជម្រុញ',
    category: 'akusala',
    groupKm: 'លោភមូលចិត្ត ៨',
    groupEn: 'Lobha-mūla Cittas',
    jati: 'akusala',
    jatiKm: 'អកុសល',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'somanassa',
    feelingKm: 'សោមនស្ស',
    hetu: ['lobha', 'moha'],
    hetuKm: 'លោភៈ, មោហៈ',
    prompted: 'sasaṅkhārika',
    cetasikaCount: 21,
    functionKm: 'ជវនៈ',
    practicalNote: 'ជាប់ចិត្តត្រេកអរនឹងរូប សំឡេង ក្លិន រស ដោយសារការជម្រុញ ឬទាក់ទាញពីបរិយាកាស។',
    cure: 'ឥន្ទ្រីយសំវរៈ សង្រួមភ្នែក ត្រចៀក ច្រមុះ អណ្តាត កាយ ចិត្ត'
  },
  {
    id: 'c5',
    code: 'LOB-5',
    pali: 'Upekkhā-sahagataṁ diṭṭhigata-sampayuttaṁ asaṅkhārikaṁ',
    km: 'ចិត្តស្មើៗ (មិនសប្បាយ មិនទុក្ខ) ប្រកបដោយទិដ្ឋិខុស មិនបាច់ជម្រុញ',
    category: 'akusala',
    groupKm: 'លោភមូលចិត្ត ៨',
    groupEn: 'Lobha-mūla Cittas',
    jati: 'akusala',
    jatiKm: 'អកុសល',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'upekkha',
    feelingKm: 'ឧបេក្ខា (អារម្មណ៍ស្មើៗ)',
    hetu: ['lobha', 'moha'],
    hetuKm: 'លោភៈ, មោហៈ',
    prompted: 'asaṅkhārika',
    cetasikaCount: 18,
    functionKm: 'ជវនៈ',
    practicalNote: 'មានចិត្តស្ងប់បែបមិនដឹងអី តែបង្កប់នូវជំនឿខុសឆ្គង ឬប្រកាន់មាំ។',
    cure: 'ស្តាប់ព្រះធម៌ឱ្យយល់ច្បាស់ពីយថាកម្ម និងអនត្តា'
  },
  {
    id: 'c6',
    code: 'LOB-6',
    pali: 'Upekkhā-sahagataṁ diṭṭhigata-sampayuttaṁ sasaṅkhārikaṁ',
    km: 'ចិត្តស្មើៗ ប្រកបដោយទិដ្ឋិខុស ដោយមានការជម្រុញ',
    category: 'akusala',
    groupKm: 'លោភមូលចិត្ត ៨',
    groupEn: 'Lobha-mūla Cittas',
    jati: 'akusala',
    jatiKm: 'អកុសល',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'upekkha',
    feelingKm: 'ឧបេក្ខា',
    hetu: ['lobha', 'moha'],
    hetuKm: 'លោភៈ, មោហៈ',
    prompted: 'sasaṅkhārika',
    cetasikaCount: 20,
    functionKm: 'ជវនៈ',
    practicalNote: 'ការទទួលយកទស្សនៈខុសឆ្គងដោយសារគេបញ្ចុះបញ្ចូល។',
    cure: 'ចម្រើនយោនិសោមនសិការ (ការពិចារណាដោយឧបាយប្រាជ្ញា)'
  },
  {
    id: 'c7',
    code: 'LOB-7',
    pali: 'Upekkhā-sahagataṁ diṭṭhigata-vippayuttaṁ asaṅkhārikaṁ',
    km: 'ចិត្តស្មើៗ មិនប្រកបដោយទិដ្ឋិខុស មិនបាច់ជម្រុញ',
    category: 'akusala',
    groupKm: 'លោភមូលចិត្ត ៨',
    groupEn: 'Lobha-mūla Cittas',
    jati: 'akusala',
    jatiKm: 'អកុសល',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'upekkha',
    feelingKm: 'ឧបេក្ខា',
    hetu: ['lobha', 'moha'],
    hetuKm: 'លោភៈ, មោហៈ',
    prompted: 'asaṅkhārika',
    cetasikaCount: 18,
    functionKm: 'ជវនៈ',
    practicalNote: 'ការប្រាថ្នាឬជាប់ចិត្តលើវត្ថុធម្មតាៗ មិនសប្បាយខ្លាំង តែជាចំណង់ស្ងាត់ៗ។',
    cure: 'ការមានស្មារតីដឹងទាន់នូវចលនានៃចិត្ត'
  },
  {
    id: 'c8',
    code: 'LOB-8',
    pali: 'Upekkhā-sahagataṁ diṭṭhigata-vippayuttaṁ sasaṅkhārikaṁ',
    km: 'ចិត្តស្មើៗ មិនប្រកបដោយទិដ្ឋិខុស ដោយមានការជម្រុញ',
    category: 'akusala',
    groupKm: 'លោភមូលចិត្ត ៨',
    groupEn: 'Lobha-mūla Cittas',
    jati: 'akusala',
    jatiKm: 'អកុសល',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'upekkha',
    feelingKm: 'ឧបេក្ខា',
    hetu: ['lobha', 'moha'],
    hetuKm: 'លោភៈ, មោហៈ',
    prompted: 'sasaṅkhārika',
    cetasikaCount: 20,
    functionKm: 'ជវនៈ',
    practicalNote: 'ចំណង់ដែលទាមទារការជម្រុញ និងមិនមានការរំភើបខ្លាំង។',
    cure: 'ការតាំងចិត្តក្នុងសីល'
  },
  // Dosa 2
  {
    id: 'c9',
    code: 'DOS-1',
    pali: 'Domanassa-sahagataṁ paṭigha-sampayuttaṁ asaṅkhārikaṁ',
    km: 'ចិត្តកើតទុក្ខ ប្រកបដោយកំហឹងក្រោធ មិនបាច់ជម្រុញ',
    category: 'akusala',
    groupKm: 'ទោសមូលចិត្ត ២ (ចិត្តខឹងក្រោធ)',
    groupEn: 'Dosa-mūla Cittas (2)',
    jati: 'akusala',
    jatiKm: 'អកុសល',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'domanassa',
    feelingKm: 'ទោមនស្ស (ក្តៅក្រហាយ មិនសប្បាយចិត្ត)',
    hetu: ['dosa', 'moha'],
    hetuKm: 'ទោសៈ, មោហៈ',
    prompted: 'asaṅkhārika (ផ្ទុះឡើងភ្លាមៗ ដោយកម្លាំងខ្លាំង)',
    cetasikaCount: 18,
    functionKm: 'ជវនៈ',
    practicalNote: 'កំហឹងឆួលភ្លាមៗពេលជួបអារម្មណ៍អាក្រក់ ឬការប្រមាថ។ អាចដុតរោលរូបកាយ និងបង្កកម្មធ្ងន់ធ្ងរ។',
    cure: 'ចម្រើនមេត្តាភាវនា (ការផ្សាយចិត្តស្រឡាញ់រាប់អានដល់សព្វសត្វ)'
  },
  {
    id: 'c10',
    code: 'DOS-2',
    pali: 'Domanassa-sahagataṁ paṭigha-sampayuttaṁ sasaṅkhārikaṁ',
    km: 'ចិត្តកើតទុក្ខ ប្រកបដោយកំហឹងក្រោធ ដោយមានការជម្រុញ',
    category: 'akusala',
    groupKm: 'ទោសមូលចិត្ត ២',
    groupEn: 'Dosa-mūla Cittas',
    jati: 'akusala',
    jatiKm: 'អកុសល',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'domanassa',
    feelingKm: 'ទោមនស្ស',
    hetu: ['dosa', 'moha'],
    hetuKm: 'ទោសៈ, មោហៈ',
    prompted: 'sasaṅkhārika (ខឹងដោយការរំឭកគុំគួន ឬមានអ្នកញុះញង់)',
    cetasikaCount: 20,
    functionKm: 'ជវនៈ',
    practicalNote: 'ការចងគំនុំ គិតច្រើនទើបកើតក្តៅក្រហាយក្នុងចិត្ត។',
    cure: 'ចម្រើនខន្តី (សេចក្តីអត់ធន់) និងការให้อភ័យ'
  },
  // Moha 2
  {
    id: 'c11',
    code: 'MOH-1',
    pali: 'Upekkhā-sahagataṁ vicikicchā-sampayuttaṁ',
    km: 'ចិត្តស្មើៗ ប្រកបដោយសេចក្តីសង្ស័យស្ទាក់ស្ទើរ',
    category: 'akusala',
    groupKm: 'មោហមូលចិត្ត ២ (ចិត្តវង្វេង)',
    groupEn: 'Moha-mūla Cittas (2)',
    jati: 'akusala',
    jatiKm: 'អកុសល',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'upekkha',
    feelingKm: 'ឧបេក្ខា',
    hetu: ['moha'],
    hetuKm: 'មោហៈ សុទ្ធសាធ',
    prompted: 'មិនបែងចែកសង្ខារិក',
    cetasikaCount: 15,
    functionKm: 'ជវនៈ',
    practicalNote: 'សង្ស័យក្នុងព្រះពុទ្ធ ព្រះធម៌ ព្រះសង្ឃ បដិបត្តិធម៌ ឬកម្មផល ធ្វើឱ្យរារែកមិនអាចបោះជំហានទៅមុខបាន។',
    cure: 'ការសិក្សាព្រះធម៌ និងសាកសួរអ្នកចេះដឹងដើម្បីកម្ចាត់មន្ទិល'
  },
  {
    id: 'c12',
    code: 'MOH-2',
    pali: 'Upekkhā-sahagataṁ uddhacca-sampayuttaṁ',
    km: 'ចិត្តស្មើៗ ប្រកបដោយសេចក្តីរាយមាយ អណ្តែតអណ្តូង',
    category: 'akusala',
    groupKm: 'មោហមូលចិត្ត ២',
    groupEn: 'Moha-mūla Cittas',
    jati: 'akusala',
    jatiKm: 'អកុសល',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'upekkha',
    feelingKm: 'ឧបេក្ខា',
    hetu: ['moha'],
    hetuKm: 'មោហៈ សុទ្ធសាធ',
    prompted: 'មិនបែងចែកសង្ខារិក',
    cetasikaCount: 15,
    functionKm: 'ជវនៈ',
    practicalNote: 'ចិត្តរវើរវាយ មិនស្ងប់ ចាប់អារម្មណ៍នេះអារម្មណ៍នោះ គ្មានលំនឹងពេលធ្វើការងារ ឬអង្គុយសមាធិ។',
    cure: 'ចម្រើនអានាបានសតិ ឬសមថភាវនាដើម្បីប្រមូលអារម្មណ៍ឱ្យមូល'
  },

  // Ahetuka 18
  {
    id: 'c13',
    code: 'AHET-AKU-1',
    pali: 'Cakkhuviññāṇaṁ akusala-vipākaṁ',
    km: 'ចក្ខុវិញ្ញាណ ជាផលនៃអកុសលកម្ម (ភ្នែកឃើញរូបមិនល្អ)',
    category: 'ahetuka',
    groupKm: 'អកុសលវិបាកចិត្ត ៧',
    groupEn: 'Akusala-vipāka Ahetuka (7)',
    jati: 'vipaka',
    jatiKm: 'វិបាក',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'upekkha',
    feelingKm: 'ឧបេក្ខា',
    hetu: [],
    hetuKm: 'គ្មានហេតុ (អហេតុក)',
    prompted: 'ធម្មជាតិ',
    cetasikaCount: 7,
    functionKm: 'ទស្សនកិច្ច (ការឃើញ)',
    practicalNote: 'ភ្នែកប៉ះទង្គិចនឹងរូបរាងមិនគាប់ភ្នែក (អនិដ្ឋារម្មណ៍) គឺជាផលកម្មអកុសលពីអតីត មិនមែនជាបាបថ្មីទេ។',
    cure: 'មានសតិកុំបង្កើតកំហឹងលើរូបដែលមិនគាប់ភ្នែកនោះ'
  },
  {
    id: 'c14',
    code: 'AHET-AKU-2',
    pali: 'Sotaviññāṇaṁ akusala-vipākaṁ',
    km: 'សោតវិញ្ញាណ ជាផលនៃអកុសល (ត្រចៀកឮសំឡេងមិនពីរោះ)',
    category: 'ahetuka',
    groupKm: 'អកុសលវិបាកចិត្ត ៧',
    groupEn: 'Akusala-vipāka Ahetuka',
    jati: 'vipaka',
    jatiKm: 'វិបាក',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'upekkha',
    feelingKm: 'ឧបេក្ខា',
    hetu: [],
    hetuKm: 'គ្មានហេតុ',
    prompted: 'ធម្មជាតិ',
    cetasikaCount: 7,
    functionKm: 'សវនកិច្ច (ការឮ)',
    practicalNote: 'ការឮសំឡេងជេរប្រមាថ សំឡេងក្ឌុងក្តាំងរំខាន ជាផលវិបាកចាស់។',
    cure: 'អត់ធន់ និងពិចារណាថាជាធម្មជាតិរបស់ត្រចៀក'
  },
  {
    id: 'c15',
    code: 'AHET-AKU-5',
    pali: 'Kāyaviññāṇaṁ akusala-vipākaṁ',
    km: 'កាយវិញ្ញាណ ជាផលនៃអកុសល (កាយប៉ះត្រូវទុក្ខវេទនា ឈឺចាប់)',
    category: 'ahetuka',
    groupKm: 'អកុសលវិបាកចិត្ត ៧',
    groupEn: 'Akusala-vipāka Ahetuka',
    jati: 'vipaka',
    jatiKm: 'វិបាក',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'dukkha',
    feelingKm: 'ទុក្ខ (ការឈឺចាប់លើរាងកាយ)',
    hetu: [],
    hetuKm: 'គ្មានហេតុ',
    prompted: 'ធម្មជាតិ',
    cetasikaCount: 7,
    functionKm: 'ផុសនកិច្ច (ការប៉ះពាល់)',
    practicalNote: 'ការឈឺក្បាល របួស រលាក ក្តៅ ត្រជាក់ខ្លាំង គឺចិត្តនេះជាអ្នកដឹងអារម្មណ៍ផ្ទាល់។',
    cure: 'កំណត់ដឹង «ទុក្ខវេទនា» ដោយឧបេក្ខា មិនត្អូញត្អែរ'
  },
  {
    id: 'c16',
    code: 'AHET-KUS-5',
    pali: 'Kāyaviññāṇaṁ kusala-vipākaṁ',
    km: 'កាយវិញ្ញាណ ជាផលនៃកុសល (កាយប៉ះត្រូវសុខវេទនា ស្រួលខ្លួន)',
    category: 'ahetuka',
    groupKm: 'កុសលវិបាកអហេតុក ៨',
    groupEn: 'Kusala-vipāka Ahetuka (8)',
    jati: 'vipaka',
    jatiKm: 'វិបាក',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'sukha',
    feelingKm: 'សុខ (ស្រួលខ្លួន)',
    hetu: [],
    hetuKm: 'គ្មានហេតុ',
    prompted: 'ធម្មជាតិ',
    cetasikaCount: 7,
    functionKm: 'ផុសនកិច្ច',
    practicalNote: 'ការប៉ះពូកទន់ ខ្យល់ត្រជាក់ស្រួល ឬស្ទាបអង្អែលដោយក្តីស្រឡាញ់។',
    cure: 'ដឹងទាន់កុំឱ្យក្លាយជាលោភៈជាប់ជំពាក់'
  },
  {
    id: 'c17',
    code: 'AHET-KIR-1',
    pali: 'Pañcadvārāvajjana citta',
    km: 'បញ្ចទ្វារាវជ្ជនចិត្ត (ចិត្តពិចារណាអារម្មណ៍តាមទ្វារទាំង ៥)',
    category: 'ahetuka',
    groupKm: 'អហេតុកកិរិយាចិត្ត ៣',
    groupEn: 'Ahetuka Kiriya (3)',
    jati: 'kiriya',
    jatiKm: 'កិរិយា (មិនបង្កើតកម្ម)',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'upekkha',
    feelingKm: 'ឧបេក្ខា',
    hetu: [],
    hetuKm: 'គ្មានហេតុ',
    prompted: 'ធម្មជាតិ',
    cetasikaCount: 10,
    functionKm: 'អាវជ្ជនកិច្ច (ការបើកទ្វារទទួលអារម្មណ៍)',
    practicalNote: 'ចិត្តដំបូងបំផុតដែលដាស់វិថីចិត្តឱ្យងាកមករក រូប សំឡេង ក្លិន រស ឬសម្ផស្ស។',
    cure: 'ជាយន្តការធម្មជាតិនៃខួរក្បាល/ចិត្ត'
  },
  {
    id: 'c18',
    code: 'AHET-KIR-2',
    pali: 'Manodvārāvajjana citta',
    km: 'មនោទ្វារាវជ្ជនចិត្ត (ចិត្តពិចារណាអារម្មណ៍តាមផ្លូវចិត្ត / វុដ្ឋបនៈ)',
    category: 'ahetuka',
    groupKm: 'អហេតុកកិរិយាចិត្ត ៣',
    groupEn: 'Ahetuka Kiriya',
    jati: 'kiriya',
    jatiKm: 'កិរិយា',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'upekkha',
    feelingKm: 'ឧបេក្ខា',
    hetu: [],
    hetuKm: 'គ្មានហេតុ',
    prompted: 'ធម្មជាតិ',
    cetasikaCount: 11,
    functionKm: 'អាវជ្ជនកិច្ច និងវុដ្ឋបនកិច្ច (ការកាត់សេចក្តីកំណត់អារម្មណ៍)',
    practicalNote: 'ជាចំណុចរបត់ផ្លូវបំបែក! បើពិចារណាត្រូវ (យោនិសោមនសិការ) ជវនៈនឹងក្លាយជាកុសល។ បើពិចារណាខុស នឹងក្លាយជាអកុសល។',
    cure: 'បណ្តុះស្មារតីយោនិសោមនសិការឱ្យមុតស្រួច'
  },

  // Kamavacara Sobhana 24 (Mahakusala 8, Mahavipaka 8, Mahakiriya 8)
  {
    id: 'c19',
    code: 'MKUS-1',
    pali: 'Somanassa-sahagataṁ ñāṇasampayuttaṁ asaṅkhārikaṁ',
    km: 'មហាកុសលចិត្តទី ១: រីករាយ ប្រកបដោយបញ្ញា កើតឯកឯងដោយកម្លាំងមុតស្រួច',
    category: 'kamavacara-sobhana',
    groupKm: 'មហាកុសលចិត្ត ៨ (ចិត្តល្អបរិសុទ្ធក្នុងកាមលោក)',
    groupEn: 'Mahā-kusala Cittas (8)',
    jati: 'kusala',
    jatiKm: 'កុសល (បង្កើតបុណ្យដ៏ខ្ពង់ខ្ពស់)',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'somanassa',
    feelingKm: 'សោមនស្ស',
    hetu: ['alobha', 'adosa', 'amoha'],
    hetuKm: 'ត្រៃហេតុ (អលោភៈ, អទោសៈ, អមោហៈ/បញ្ញា)',
    prompted: 'asaṅkhārika',
    cetasikaCount: 38,
    functionKm: 'ជវនៈ (បង្កើតបុណ្យពេញលេញ)',
    practicalNote: 'ជាកុសលចិត្តដ៏មានអានុភាពខ្ពស់បំផុតក្នុងកាមលោក! កើតពេលធ្វើទាន រក្សាសីល ឬចម្រើនភាវនាដោយសេចក្តីជ្រះថ្លារីករាយ និងដឹងច្បាស់ពីផលនៃកម្ម។ បង្កើតបដិសន្ធិជាមនុស្ស ឬទេវតាត្រៃហេតុ (អាចសម្រេចឈាន និងមគ្គផលបាន)។',
    cure: 'គួរចម្រើនចិត្តនេះឱ្យកើតឡើងញឹកញាប់ក្នុងជីវិតប្រចាំថ្ងៃ'
  },
  {
    id: 'c20',
    code: 'MKUS-2',
    pali: 'Somanassa-sahagataṁ ñāṇasampayuttaṁ sasaṅkhārikaṁ',
    km: 'មហាកុសលចិត្តទី ២: រីករាយ ប្រកបដោយបញ្ញា ដោយមានការជម្រុញ',
    category: 'kamavacara-sobhana',
    groupKm: 'មហាកុសលចិត្ត ៨',
    groupEn: 'Mahā-kusala Cittas',
    jati: 'kusala',
    jatiKm: 'កុសល',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'somanassa',
    feelingKm: 'សោមនស្ស',
    hetu: ['alobha', 'adosa', 'amoha'],
    hetuKm: 'ត្រៃហេតុ (អលោភៈ, អទោសៈ, អមោហៈ)',
    prompted: 'sasaṅkhārika (មានការបបួល ឬពិចារណាយូរ)',
    cetasikaCount: 38,
    functionKm: 'ជវនៈ',
    practicalNote: 'ធ្វើបុណ្យដោយរីករាយ និងមានបញ្ញា ប៉ុន្តែទាល់តែមានអ្នកដាស់តឿន ឬជម្រុញ។',
    cure: 'បង្កើនការផ្តួចផ្តើមធ្វើសេចក្តីល្អដោយខ្លួនឯង'
  },
  {
    id: 'c21',
    code: 'MKUS-3',
    pali: 'Somanassa-sahagataṁ ñāṇavippayuttaṁ asaṅkhārikaṁ',
    km: 'មហាកុសលចិត្តទី ៣: រីករាយ មិនប្រកបដោយបញ្ញា កើតឯកឯង',
    category: 'kamavacara-sobhana',
    groupKm: 'មហាកុសលចិត្ត ៨',
    groupEn: 'Mahā-kusala Cittas',
    jati: 'kusala',
    jatiKm: 'កុសល (ទ្វិហេតុក)',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'somanassa',
    feelingKm: 'សោមនស្ស',
    hetu: ['alobha', 'adosa'],
    hetuKm: 'ទ្វិហេតុ (អលោភៈ, អទោសៈ - គ្មានបញ្ញា)',
    prompted: 'asaṅkhārika',
    cetasikaCount: 37,
    functionKm: 'ជវនៈ',
    practicalNote: 'ធ្វើបុណ្យដោយសេចក្តីស្មោះស្ម័គ្រ និងរីករាយ តែមិនបានយល់ដឹងពីច្បាប់កម្មផលស៊ីជម្រៅ (ដូចជាកូនក្មេងឃើញគេសំពះព្រះ ក៏សំពះតាមដោយសប្បាយចិត្ត)។',
    cure: 'បន្ថែមការរៀនសូត្រព្រះធម៌ដើម្បីឱ្យមានបញ្ញាសម្បយុត្ត'
  },
  {
    id: 'c22',
    code: 'MVIP-1',
    pali: 'Mahāvipāka Citta 1 (Somanassa ñāṇasampayutta asaṅkhārika)',
    km: 'មហាវិបាកចិត្តទី ១ (បដិសន្ធិចិត្ត មនុស្ស-ទេវតាត្រៃហេតុដ៏ឧត្តម)',
    category: 'kamavacara-sobhana',
    groupKm: 'មហាវិបាកចិត្ត ៨',
    groupEn: 'Mahā-vipāka Cittas (8)',
    jati: 'vipaka',
    jatiKm: 'វិបាក (ផលនៃមហាកុសល)',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'somanassa',
    feelingKm: 'សោមនស្ស',
    hetu: ['alobha', 'adosa', 'amoha'],
    hetuKm: 'ត្រៃហេតុ',
    prompted: 'asaṅkhārika',
    cetasikaCount: 33,
    functionKm: 'បដិសន្ធិ, ភវង្គ, ចុតិ',
    practicalNote: 'ជាចិត្តដែលនាំកំណើតមកជាមនុស្សមានប្រាជ្ញាវាងវៃ មានរូបសម្បត្តិស្អាត និងមានឧបនិស្ស័យអាចសម្រេចឈាន ឬមគ្គផលក្នុងជាតិនេះ! ក៏ជាភវង្គរក្សាជីវិតរាល់ពេលយើងគេងលក់។',
    cure: 'សរសើរគុណបុណ្យកុសលពីអតីត និងប្រឹងប្រែងបដិបត្តិធម៌បន្ត'
  },
  {
    id: 'c23',
    code: 'MKIR-1',
    pali: 'Mahākiriya Citta 1 (Somanassa ñāṇasampayutta asaṅkhārika)',
    km: 'មហាកិរិយាចិត្តទី ១ (ចិត្តធ្វើកុសលរបស់ព្រះអរហន្ត)',
    category: 'kamavacara-sobhana',
    groupKm: 'មហាកិរិយាចិត្ត ៨',
    groupEn: 'Mahā-kiriya Cittas (8)',
    jati: 'kiriya',
    jatiKm: 'កិរិយា (មិនបង្កើតកម្មទៀតឡើយ)',
    plane: 'kama',
    planeKm: 'កាមាវចរភូមិ',
    feeling: 'somanassa',
    feelingKm: 'សោមនស្ស',
    hetu: ['alobha', 'adosa', 'amoha'],
    hetuKm: 'ត្រៃហេតុ',
    prompted: 'asaṅkhārika',
    cetasikaCount: 35,
    functionKm: 'ជវនៈ',
    practicalNote: 'កើតឡើងចំពោះព្រះអរហន្តពេលព្រះអង្គធ្វើសកម្មភាពល្អៗ បង្រៀនធម៌ ឬជួយសង្គ្រោះសត្វលោក។ មិនបន្សល់ទុកផលកម្មទៅជាតិមុខឡើយ (ដូចផ្កាឈូកមិនជាប់ទឹក)។',
    cure: 'ជាគំរូនៃចិត្តបរិសុទ្ធផុតស្រឡះពីកម្ម'
  },

  // Rupavacara 15
  {
    id: 'c24',
    code: 'RUP-KUS-1',
    pali: 'Paṭhamajjhāna-kusala citta',
    km: 'រូបាវចរកុសល បឋមជ្ឈានចិត្ត (ឈានទី ១ ប្រកបដោយអង្គ ៥: វិតក្ក វិចារ បីតិ សុខ ឯកគ្គតា)',
    category: 'rupavacara',
    groupKm: 'រូបាវចរចិត្ត ១៥ (រូបព្រហ្ម)',
    groupEn: 'Rūpāvacara Cittas (15)',
    jati: 'kusala',
    jatiKm: 'កុសលឈាន',
    plane: 'rupa',
    planeKm: 'រូបភូមិ (រូបព្រហ្ម ១៦ ជាន់)',
    feeling: 'somanassa',
    feelingKm: 'សោមនស្ស',
    hetu: ['alobha', 'adosa', 'amoha'],
    hetuKm: 'ត្រៃហេតុ',
    prompted: 'ឈាន',
    cetasikaCount: 35,
    functionKm: 'ជវនៈ (ឈានសមាបត្តិ)',
    practicalNote: 'ចិត្តស្ងប់ផុតចាកនីវរណៈទាំង ៥ (កាមច្ឆន្ទៈ ព្យាបាទ ថីនមិទ្ធ ឧទ្ធច្ចកុក្កុច្ច វិចិកិច្ឆា) ចូលកាន់បឋមជ្ឈាន មានកម្លាំងចិត្តស្ងប់ជ្រាលជ្រៅខ្លាំង។ បើនាំបដិសន្ធិ នឹងទៅកើតក្នុងព្រហ្មលោក ៣ ជាន់ដំបូង (ព្រហ្មបារិសជ្ជា, ព្រហ្មបុរោហិតា, មហាព្រហ្ម)។',
    cure: 'ចម្រើនកសិណ ឬអានាបានសតិឱ្យដល់អប្បនាសមាធិ'
  },
  {
    id: 'c25',
    code: 'RUP-KUS-5',
    pali: 'Pañcamajjhāna-kusala citta',
    km: 'រូបាវចរកុសល បញ្ចមជ្ឈានចិត្ត (ឈានទី ៥ អង្គ ២: ឧបេក្ខា និងឯកគ្គតា)',
    category: 'rupavacara',
    groupKm: 'រូបាវចរចិត្ត ១៥',
    groupEn: 'Rūpāvacara Cittas',
    jati: 'kusala',
    jatiKm: 'កុសលឈាន',
    plane: 'rupa',
    planeKm: 'រូបភូមិ',
    feeling: 'upekkha',
    feelingKm: 'ឧបេក្ខា (ស្ងប់ស្ងៀមបរិសុទ្ធបំផុត)',
    hetu: ['alobha', 'adosa', 'amoha'],
    hetuKm: 'ត្រៃហេតុ',
    prompted: 'ឈាន',
    cetasikaCount: 31,
    functionKm: 'ជវនៈ',
    practicalNote: 'ចិត្តស្ងប់លែងរំជើបរំជួលនឹងបីតិ ឬសុខសូម្បីបន្តិចឡើយ តម្កល់លើឧបេក្ខាបរិសុទ្ធ ជាមូលដ្ឋានបង្កើតអភិញ្ញា ៦។ នាំកំណើតទៅកាន់វេហប្ផលា ឬសុទ្ធាវាសព្រហ្ម។',
    cure: 'ចម្រើនសមាធិកម្រិតខ្ពស់'
  },

  // Arupavacara 12
  {
    id: 'c26',
    code: 'ARUP-KUS-1',
    pali: 'Ākāsānañcāyatana-kusala citta',
    km: 'អរូបាវចរកុសល អាកាសានញ្ចាយតនចិត្ត (កំណត់អារម្មណ៍លើអាកាសគ្មានទីបំផុត)',
    category: 'arupavacara',
    groupKm: 'អរូបាវចរចិត្ត ១២ (អរូបព្រហ្ម)',
    groupEn: 'Arūpāvacara Cittas (12)',
    jati: 'kusala',
    jatiKm: 'កុសលអរូបឈាន',
    plane: 'arupa',
    planeKm: 'អរូបភូមិ ៤ ជាន់',
    feeling: 'upekkha',
    feelingKm: 'ឧបេក្ខា',
    hetu: ['alobha', 'adosa', 'amoha'],
    hetuKm: 'ត្រៃហេតុ',
    prompted: 'អរូបឈាន',
    cetasikaCount: 31,
    functionKm: 'ជវនៈ',
    practicalNote: 'ចិត្តដែលឆ្លងផុតរូបសញ្ញាទាំងស្រុង កំណត់យកអាកាសទទេស្អាតគ្មានទីបញ្ចប់ជាអារម្មណ៍។ នាំកំណើតទៅអរូបភូមិ មានតែចិត្ត គ្មានរូបកាយ អាយុ ២០,០០០ មហាកប្ប។',
    cure: 'លះបង់រូបសញ្ញា ហើយកំណត់អាកាសជាអារម្មណ៍'
  },
  {
    id: 'c27',
    code: 'ARUP-KUS-4',
    pali: 'Nevasaññānāsaññāyatana-kusala citta',
    km: 'អរូបាវចរកុសល នេវសញ្ញានាសញ្ញាយតនចិត្ត (មានសញ្ញាក៏មិនមែន គ្មានសញ្ញាក៏មិនមែន)',
    category: 'arupavacara',
    groupKm: 'អរូបាវចរចិត្ត ១២',
    groupEn: 'Arūpāvacara Cittas',
    jati: 'kusala',
    jatiKm: 'កុសលអរូបឈាន',
    plane: 'arupa',
    planeKm: 'អរូបភូមិ',
    feeling: 'upekkha',
    feelingKm: 'ឧបេក្ខា',
    hetu: ['alobha', 'adosa', 'amoha'],
    hetuKm: 'ត្រៃហេតុ',
    prompted: 'អរូបឈាន',
    cetasikaCount: 31,
    functionKm: 'ជវនៈ',
    practicalNote: 'កំពូលនៃលោកិយសមាធិ! សញ្ញាល្អិតបំផុតស្ទើរតែរលត់។ អាយុកាលក្នុងភពនេះ ៨៤,០០០ មហាកប្ប។ ជាជំហានចុងក្រោយមុនចូលនិរោធសមាបត្តិ។',
    cure: 'ចម្រើនអាកិញ្ចញ្ញាយតនៈជាបាតដ្ឋាន'
  },

  // Lokuttara 8 (or 40)
  {
    id: 'c28',
    code: 'LOK-MAG-1',
    pali: 'Sotāpatti-magga citta',
    km: 'សោតាបត្តិមគ្គចិត្ត (ចិត្តកាត់ផ្តាច់សញ្ញោជនៈ ៣ ដំបូង និងទ្វារអបាយភូមិ)',
    category: 'lokuttara',
    groupKm: 'លោកុត្តរមគ្គចិត្ត ៤',
    groupEn: 'Lokuttara Magga Cittas (4)',
    jati: 'kusala',
    jatiKm: 'លោកុត្តរកុសល (កម្ចាត់កិលេសជាស្ថាពរ)',
    plane: 'lokuttara',
    planeKm: 'លោកុត្តរ (ផុតចាកត្រៃភព)',
    feeling: 'somanassa / upekkha',
    feelingKm: 'សោមនស្ស ឬ ឧបេក្ខា',
    hetu: ['alobha', 'adosa', 'amoha'],
    hetuKm: 'ត្រៃហេតុលោកុត្តរ',
    prompted: 'វិបស្សនាបញ្ញាពេញលេញ',
    cetasikaCount: 36,
    functionKm: 'មគ្គកិច្ច (ប្រហារកិលេស និងឃើញព្រះនិព្វានជាអារម្មណ៍)',
    practicalNote: 'កើតឡើងតែ ១ ខណៈចិត្តគត់ក្នុងមួយសង្សារវដ្ត! កម្ចាត់សក្កាយទិដ្ឋិ (ការយល់ថាមានអត្តា), វិចិកិច្ឆា (សេចក្តីសង្ស័យ), និងសីលព្វតបរាមាស (ការស្ទាបអង្អែលសីលវត្តខុស) យ៉ាងដាច់ស្រឡះ។ បិទទ្វារនរក ប្រេត អសុរកាយ តិរច្ឆាន ជាស្ថាពរ!',
    cure: 'ចម្រើនសតិប្បដ្ឋាន ៤ និងអរិយមគ្គប្រកបដោយអង្គ ៨'
  },
  {
    id: 'c29',
    code: 'LOK-PHA-1',
    pali: 'Sotāpatti-phala citta',
    km: 'សោតាបត្តិផលចិត្ត (ចិត្តសោយសេចក្តីស្ងប់នៃព្រះនិព្វានភ្លាមៗបន្ទាប់ពីមគ្គ)',
    category: 'lokuttara',
    groupKm: 'លោកុត្តរផលចិត្ត ៤',
    groupEn: 'Lokuttara Phala Cittas (4)',
    jati: 'vipaka',
    jatiKm: 'លោកុត្តរវិបាក (ផលនៃអរិយមគ្គ)',
    plane: 'lokuttara',
    planeKm: 'លោកុត្តរ',
    feeling: 'somanassa / upekkha',
    feelingKm: 'សោមនស្ស ឬ ឧបេក្ខា',
    hetu: ['alobha', 'adosa', 'amoha'],
    hetuKm: 'ត្រៃហេតុលោកុត្តរ',
    prompted: 'ផលសមាបត្តិ',
    cetasikaCount: 36,
    functionKm: 'ផលកិច្ច (សោយសន្តិសុខព្រះនិព្វាន)',
    practicalNote: 'កើតឡើងតៗពីសោតាបត្តិមគ្គ ២ ឬ ៣ ខណៈភ្លាមៗដោយគ្មានចន្លោះ (អកាលិកោ)។ ព្រះសោតាបន្នអាចចូលផលសមាបត្តិនេះជាថ្មីម្តងទៀតរាប់ម៉ោងដើម្បីសោយសុខស្ងប់នៃព្រះនិព្វាន។',
    cure: 'ចម្រើនវិបស្សនាបន្ថែមឆ្ពោះទៅកាន់សកទាគាមី'
  },
  {
    id: 'c30',
    code: 'LOK-MAG-4',
    pali: 'Arahatta-magga citta',
    km: 'អរហត្តមគ្គចិត្ត (ចិត្តកម្ចាត់កិលេស និងអវិជ្ជាទាំងអស់គ្មានសេសសល់)',
    category: 'lokuttara',
    groupKm: 'លោកុត្តរមគ្គចិត្ត ៤',
    groupEn: 'Lokuttara Magga Cittas (4)',
    jati: 'kusala',
    jatiKm: 'លោកុត្តរកុសលកំពូល',
    plane: 'lokuttara',
    planeKm: 'លោកុត្តរ',
    feeling: 'somanassa / upekkha',
    feelingKm: 'សោមនស្ស ឬ ឧបេក្ខា',
    hetu: ['alobha', 'adosa', 'amoha'],
    hetuKm: 'ត្រៃហេតុលោកុត្តរបរិសុទ្ធ',
    prompted: 'វិបស្សនាបញ្ញាកំពូល',
    cetasikaCount: 36,
    functionKm: 'មគ្គកិច្ច (កម្ចាត់អវិជ្ជា ឫសគល់នៃសង្សារវដ្ត)',
    practicalNote: 'កម្ចាត់សញ្ញោជនៈជាន់ខ្ពស់ ៥ ចុងក្រោយ: រូបរាគៈ, អរូបរាគៈ, មានៈ, ឧទ្ធច្ចៈ, និងអវិជ្ជា! ធ្វើឱ្យបុគ្គលនោះក្លាយជាព្រះអរហន្តខីណាស្រព អស់ភពថ្មី ចប់ព្រហ្មចារ្យ គ្មានទុក្ខសោកទៀតឡើយ។',
    cure: 'កំពូលនៃផ្លូវប្រតិបត្តិក្នុងព្រះពុទ្ធសាសនា'
  },
  {
    id: 'c31',
    code: 'LOK-PHA-4',
    pali: 'Arahatta-phala citta',
    km: 'អរហត្តផលចិត្ត (ចិត្តរបស់ព្រះអរហន្តសោយសន្តិសុខព្រះនិព្វានជាបរមសុខ)',
    category: 'lokuttara',
    groupKm: 'លោកុត្តរផលចិត្ត ៤',
    groupEn: 'Lokuttara Phala Cittas (4)',
    jati: 'vipaka',
    jatiKm: 'លោកុត្តរវិបាកកំពូល',
    plane: 'lokuttara',
    planeKm: 'លោកុត្តរ',
    feeling: 'somanassa / upekkha',
    feelingKm: 'សោមនស្ស ឬ ឧបេក្ខា',
    hetu: ['alobha', 'adosa', 'amoha'],
    hetuKm: 'ត្រៃហេតុលោកុត្តរ',
    prompted: 'ផលសមាបត្តិ',
    cetasikaCount: 36,
    functionKm: 'ផលកិច្ច',
    practicalNote: 'ចិត្តសោយបរមសន្តិសុខនៃព្រះនិព្វានរបស់ព្រះអរហន្ត រហូតដល់ថ្ងៃចូលបរិនិព្វាន (អនុបាទិសេសនិព្វានធាតុ)។',
    cure: 'បរមសុខដែលសត្វលោកទាំងឡាយគួរស្វែងរក'
  }
]

// --- 52 Cetasika Master Data ---
const cetasikaList = [
  // 7 Sabbacitta-sadharana (Every single thought-moment)
  {
    id: 'cet-1',
    pali: 'Phassa',
    km: 'ផស្សៈ (ការប៉ះខ្ទប់អារម្មណ៍)',
    group: 'sabbacitta',
    groupKm: 'សព្វចិត្តសាធារណៈ ៧ (មានក្នុងចិត្តគ្រប់ដួង)',
    lakkhana: 'ផុសនលក្ខណៈ (មានការប៉ះខ្ទប់រវាងទ្វារ អារម្មណ៍ និងវិញ្ញាណ ជាលក្ខណៈ)',
    rasa: 'សង្ឃដ្តនរស (មានការប្រជុំគ្នានៃធម៌ ៣ ជាកិច្ច)',
    paccupatthana: 'សន្និបាតបច្ចុបដ្ឋាន (មានការជួបជុំគ្នាជាផលប្រាកដ)',
    padatthana: 'អាបាតគតវិសយបទដ្ឋាន (មានអារម្មណ៍មកកាន់គន្លងទ្វារជាហេតុជិត)',
    associatedCitta: 'ចិត្តទាំងអស់ ៨៩ ឬ ១២១ ដួង',
    practicalApplication: 'បើគ្មានផស្សៈទេ វិញ្ញាណមិនអាចដឹងអារម្មណ៍បានឡើយ។ ការគ្រប់គ្រងទ្វារ ៦ មិនឱ្យផស្សៈបង្កជាតណ្ហា គឺជាគន្លឹះនៃសមាធិ។'
  },
  {
    id: 'cet-2',
    pali: 'Vedanā',
    km: 'វេទនា (ការសោយរសអារម្មណ៍)',
    group: 'sabbacitta',
    groupKm: 'សព្វចិត្តសាធារណៈ ៧',
    lakkhana: 'អនុភវនលក្ខណៈ (មានការសោយរសអារម្មណ៍ជាលក្ខណៈ)',
    rasa: 'វិសយរសសម្ភោគរស (មានការទាញយករសអារម្មណ៍ជាកិច្ច)',
    paccupatthana: 'ចេតសិកស្សាទបច្ចុបដ្ឋាន (មានការរីករាយ ឬការក្តៅក្រហាយជាផលប្រាកដ)',
    padatthana: 'ផស្សបទដ្ឋាន (មានផស្សៈជាហេតុជិត)',
    associatedCitta: 'ចិត្តទាំងអស់ ៨៩ ឬ ១២១ ដួង',
    practicalApplication: 'បែងចែកជា សុខ ទុក្ខ និងឧបេក្ខា។ ចំណុចកាត់ផ្តាច់សង្សារវដ្តគឺនៅត្រង់វេទនានេះឯង៖ កុំឱ្យវេទនាក្លាយជាតណ្ហា!'
  },
  {
    id: 'cet-3',
    pali: 'Saññā',
    km: 'សញ្ញា (ការចាំចំណាំ និងកំណត់អារម្មណ៍)',
    group: 'sabbacitta',
    groupKm: 'សព្វចិត្តសាធារណៈ ៧',
    lakkhana: 'សញ្ជាននលក្ខណៈ (មានការចាំចំណាំសញ្ញាណជាលក្ខណៈ)',
    rasa: 'តទភិជាននសញ្ញាករណរស (មានការធ្វើគ្រឿងសម្គាល់ជាកិច្ច)',
    paccupatthana: 'យថាគហិតនិមិត្តវសេន អភិនិវេសបច្ចុបដ្ឋាន (មានការយល់តាមសញ្ញាដែលបានកត់ចំណាំទុកជាផល)',
    padatthana: 'យថាឧបដ្ឋិតវិសយបទដ្ឋាន (មានអារម្មណ៍ដែលប្រាកដតាមទ្វារជាហេតុជិត)',
    associatedCitta: 'ចិត្តទាំងអស់ ៨៩ ឬ ១២១ ដួង',
    practicalApplication: 'សញ្ញាអាចចាំខុស (វិបល្លាស) ដូចជាយល់ថារូបមិនស្អាតជាស្អាត។ ត្រូវបណ្តុះ អនិច្ចសញ្ញា និងអនត្តាសញ្ញា។'
  },
  {
    id: 'cet-4',
    pali: 'Cetanā',
    km: 'ចេតនា (ការដឹកនាំ ផ្តួចផ្តើម និងចាត់ចែងអារម្មណ៍ - តួកម្ម)',
    group: 'sabbacitta',
    groupKm: 'សព្វចិត្តសាធារណៈ ៧',
    lakkhana: 'ចេតយិតលក្ខណៈ (មានការដឹកនាំសម្បយុត្តធម៌ជាលក្ខណៈ)',
    rasa: 'អាយូហនរស (មានការខ្នះខ្នែងប្រមូលធម៌ទាំងឡាយជាកិច្ច)',
    paccupatthana: 'សំវិធានបច្ចុបដ្ឋាន (មានការចាត់ចែងកិច្ចការជាផលប្រាកដ)',
    padatthana: 'សេសសម្បយុត្តកធម្មបទដ្ឋាន (មានសម្បយុត្តធម៌ដទៃជាហេតុជិត)',
    associatedCitta: 'ចិត្តទាំងអស់ ៨៩ ឬ ១២១ ដួង',
    practicalApplication: '«ចេតនាហំ ភិក្ខវេ កម្មំ វទាមិ» ម្នាលភិក្ខុទាំងឡាយ តថាគតហៅចេតនាថាតួកម្ម! ចេតនាល្អជាបុណ្យ ចេតនាអាក្រក់ជាបាប។'
  },
  {
    id: 'cet-5',
    pali: 'Ekaggatā',
    km: 'ឯកគ្គតា (ការតម្កល់ចិត្តលើអារម្មណ៍តែមួយ - ឫសសមាធិ)',
    group: 'sabbacitta',
    groupKm: 'សព្វចិត្តសាធារណៈ ៧',
    lakkhana: 'អវិក្ខេបលក្ខណៈ (មានការមិនរាយមាយជាលក្ខណៈ)',
    rasa: 'សហជាតានំ សម្បិណ្ឌនរស (មានការចងសម្បយុត្តធម៌ឱ្យមូលលើអារម្មណ៍តែមួយជាកិច្ច)',
    paccupatthana: 'ឧបសមបច្ចុបដ្ឋាន (មានការស្ងប់រម្ងាប់ជាផល)',
    padatthana: 'វិសេសតោ សុខបទដ្ឋាន (មានសុខវេទនាជាហេតុជិត - សុខិនោ ចិត្តំ សមាធិយតិ)',
    associatedCitta: 'ចិត្តទាំងអស់ ៨៩ ឬ ១២១ ដួង',
    practicalApplication: 'មានក្នុងចិត្តគ្រប់ដួង តែបើចម្រើនឱ្យមានកម្លាំងខ្លាំងក្លា នឹងក្លាយជា «សម្មាសមាធិ» ចូលកាន់ឈាន និងមគ្គផល។'
  },
  {
    id: 'cet-6',
    pali: 'Jīvitindriya',
    km: 'ជីវិតិន្ទ្រិយ (ការថែរក្សាជីវិតនាមធម៌ឱ្យរស់នៅ)',
    group: 'sabbacitta',
    groupKm: 'សព្វចិត្តសាធារណៈ ៧',
    lakkhana: 'សម្បយុត្តធម្មានុបាលនលក្ខណៈ (មានការរក្សាសម្បយុត្តធម៌ជាលក្ខណៈ)',
    rasa: 'តេសំ បវត្តនរស (មានការញ៉ាំងសម្បយុត្តធម៌ឱ្យប្រព្រឹត្តទៅជាកិច្ច)',
    paccupatthana: 'តេសំយេវ ឋបនបច្ចុបដ្ឋាន (មានការតម្កល់សម្បយុត្តធម៌នោះទុកជាផល)',
    padatthana: 'យាបយិតព្វធម្មបទដ្ឋាន (មានធម៌ដែលត្រូវថែរក្សាជាហេតុជិត)',
    associatedCitta: 'ចិត្តទាំងអស់ ៨៩ ឬ ១២១ ដួង',
    practicalApplication: 'ដូចជាទឹកដែលចិញ្ចឹមផ្កាឈូក ជីវិតិន្ទ្រិយចិញ្ចឹមចិត្ត និងចេតសិកឱ្យកើតរលត់បន្តជាប់គ្នាជាសន្តតិ។'
  },
  {
    id: 'cet-7',
    pali: 'Manasikāra',
    km: 'មនសិការ (ការធ្វើទុកក្នុងចិត្ត ការនាំចិត្តឆ្ពោះទៅកាន់អារម្មណ៍)',
    group: 'sabbacitta',
    groupKm: 'សព្វចិត្តសាធារណៈ ៧',
    lakkhana: 'សារណលក្ខណៈ (មានការដាស់សម្បយុត្តធម៌ឆ្ពោះទៅរកអារម្មណ៍ជាលក្ខណៈ)',
    rasa: 'សម្បយុត្តានំ អារម្មណេ សំយោជនរស (មានការភ្ជាប់សម្បយុត្តធម៌នឹងអារម្មណ៍ជាកិច្ច)',
    paccupatthana: 'អារម្មណាភិមុខីភាវបច្ចុបដ្ឋាន (មានការបែរមុខឆ្ពោះទៅរកអារម្មណ៍ជាផល)',
    padatthana: 'អារម្មណបទដ្ឋាន (មានអារម្មណ៍ជាហេតុជិត)',
    associatedCitta: 'ចិត្តទាំងអស់ ៨៩ ឬ ១២១ ដួង',
    practicalApplication: 'ដូចចង្កូតទូក! បើជា «យោនិសោមនសិការ» នាំចិត្តទៅរកកុសល បើជា «អយោនិសោមនសិការ» នាំចិត្តធ្លាក់ក្នុងអកុសល។'
  },

  // 6 Pakinnaka (Particulars)
  {
    id: 'cet-8',
    pali: 'Vitakka',
    km: 'វិតក្កៈ (ការលើកចិត្តឡើងកាន់អារម្មណ៍ - អង្គឈានទី ១)',
    group: 'pakinna',
    groupKm: 'បកិណ្ណកចេតសិក ៦ (កើតលាយឡំក្នុងចិត្តខ្លះ)',
    lakkhana: 'ចេតសោ អភិនិរោបនលក្ខណៈ (មានការលើកចិត្តឡើងកាន់អារម្មណ៍ជាលក្ខណៈ)',
    rasa: 'អាហននរស (មានការវាយ ឬប៉ះពាល់អារម្មណ៍ជាកិច្ច)',
    paccupatthana: 'អារម្មណេ ចិត្តស្ស អានយនបច្ចុបដ្ឋាន (មានការនាំចិត្តទៅកាន់អារម្មណ៍ជាផល)',
    padatthana: 'អារម្មណបទដ្ឋាន',
    associatedCitta: 'ចិត្ត ៥៥ ដួង (កាមាវចរ, បឋមជ្ឈាន)',
    practicalApplication: 'ក្នុងការសមាធិ គឺការលើកចិត្តដាក់លើដង្ហើមចេញចូល ឬកសិណ។ កាលណាជាកុសល ហៅថា «សម្មាសង្កប្បៈ»។'
  },
  {
    id: 'cet-9',
    pali: 'Vicāra',
    km: 'វិចារៈ (ការត្រដុស ស្ទាបអង្អែល ឬពិនិត្យអារម្មណ៍ឱ្យជាប់ - អង្គឈានទី ២)',
    group: 'pakinna',
    groupKm: 'បកិណ្ណកចេតសិក ៦',
    lakkhana: 'អារម្មណានុមជ្ជនលក្ខណៈ (មានការស្ទាបអង្អែលអារម្មណ៍ជាលក្ខណៈ)',
    rasa: 'តត្ថ សហជាតានុយោជនរស (មានការផ្សារភ្ជាប់សម្បយុត្តធម៌ឱ្យជ្រួតជ្រាបក្នុងអារម្មណ៍ជាកិច្ច)',
    paccupatthana: 'អារម្មណេ ចិត្តស្ស អនុពន្ធនបច្ចុបដ្ឋាន (មានការចងចិត្តជាប់នឹងអារម្មណ៍ជាផល)',
    padatthana: 'អារម្មណបទដ្ឋាន',
    associatedCitta: 'ចិត្ត ៦៦ ដួង',
    practicalApplication: 'ប្រៀបដូចឃ្មុំហើរមកទំលើផ្កា (វិតក្កៈ) ហើយក្រេបជញ្ជក់លម្អងផ្កា (វិចារៈ)។ ធ្វើឱ្យចិត្តនៅនឹងលើអារម្មណ៍កម្មដ្ឋាន។'
  },
  {
    id: 'cet-10',
    pali: 'Pīti',
    km: 'បីតិ (សេចក្តីឆ្អែតចិត្ត កាយត្រជាក់ស្រួល រីករាយ - អង្គឈានទី ៣)',
    group: 'pakinna',
    groupKm: 'បកិណ្ណកចេតសិក ៦',
    lakkhana: 'សម្បិយាយនលក្ខណៈ (មានការឆ្អែតរីករាយជាលក្ខណៈ)',
    rasa: 'កាយចិត្តបិននរស (មានការញ៉ាំងកាយ និងចិត្តឱ្យស្រស់ស្រាយជាកិច្ច)',
    paccupatthana: 'ឧទគ្គភាវបច្ចុបដ្ឋាន (មានការជ្រះថ្លាអណ្តែតអណ្តូងជាផល)',
    padatthana: 'នាមរូបបទដ្ឋាន',
    associatedCitta: 'ចិត្ត ៥១ ដួង (សោមនស្សចិត្ត)',
    practicalApplication: 'កើតឡើងពេលធ្វើបុណ្យជ្រះថ្លា ឬអង្គុយសមាធិជិតដល់ឈាន (ឧបចារសមាធិ) ធ្វើឱ្យរោមក្រោក ស្រាលកាយ ទឹកភ្នែកហូរដោយសទ្ធា។'
  },
  {
    id: 'cet-11',
    pali: 'Vīriya',
    km: 'វីរិយៈ (សេចក្តីព្យាយាម ក្លាហាន មិនរួញរា - សម្មាវាយាមៈ)',
    group: 'pakinna',
    groupKm: 'បកិណ្ណកចេតសិក ៦',
    lakkhana: 'ឧស្សាហនលក្ខណៈ (មានការប្រឹងប្រែងខ្នះខ្នែងជាលក្ខណៈ)',
    rasa: 'សហជាតានំ ឧបត្ថម្ភនរស (មានការទ្រទ្រង់សម្បយុត្តធម៌មិនឱ្យដួលចុះជាកិច្ច)',
    paccupatthana: 'អសំសីទនបច្ចុបដ្ឋាន (មានការមិនរួញរាជាផល)',
    padatthana: 'សំវេគបទដ្ឋាន (មានសេចក្តីសង្វេគជាហេតុជិត)',
    associatedCitta: 'ចិត្ត ៧៣ ដួង',
    practicalApplication: 'ជាកម្លាំងរុញច្រានការបដិបត្តិ ដូចសសរទ្រផ្ទះមិនឱ្យរលំ។ ប្រឹងប្រែងលះបាបចាស់ ការពារបាបថ្មី បង្កើតបុណ្យថ្មី រក្សាបុណ្យចាស់។'
  },

  // 14 Akusala Cetasika (Unwholesome)
  {
    id: 'cet-12',
    pali: 'Moha',
    km: 'មោហៈ (សេចក្តីវង្វេង អវិជ្ជា មិនស្គាល់សច្ចធម៌)',
    group: 'akusala',
    groupKm: 'អកុសលចេតសិក ១៤ (ចេតសិកអាក្រក់)',
    lakkhana: 'អារម្មណស្ស អយថាវសារាវពោធលក្ខណៈ (មានការមិនដឹងសភាវៈពិតនៃអារម្មណ៍ជាលក្ខណៈ)',
    rasa: 'អារម្មណសភាវច្ឆាទនរស (មានការបិទបាំងសច្ចធម៌ជាកិច្ច)',
    paccupatthana: 'អសម្មាបដិបត្តិបច្ចុបដ្ឋាន (មានការយល់ខុស ធ្វើខុសជាផល)',
    padatthana: 'អយោនិសោមនសិការបទដ្ឋាន (មានការមិនពិចារណាដោយឧបាយប្រាជ្ញាជាហេតុជិត)',
    associatedCitta: 'អកុសលចិត្តទាំង ១២ ដួង',
    practicalApplication: 'ជាមេដឹកនាំបាបទាំងអស់! បើកម្ចាត់មោហៈបាន កិលេសដទៃក៏មិនអាចតាំងនៅបានឡើយ។'
  },
  {
    id: 'cet-13',
    pali: 'Lobha',
    km: 'លោភៈ (សេចក្តីជាប់ជំពាក់ ប្រាថ្នា ចង់បាន - តណ្ហា)',
    group: 'akusala',
    groupKm: 'អកុសលចេតសិក ១៤',
    lakkhana: 'អារម្មណគ្គហណលក្ខណៈ (មានការចាប់យកអារម្មណ៍ជាលក្ខណៈ)',
    rasa: 'អភិសង្គរស (មានការស្អិតជាប់ដូចជ័រស្អិតជាកិច្ច)',
    paccupatthana: 'អបរិច្ចាគបច្ចុបដ្ឋាន (មានការមិនព្រមលះបង់ជាផល)',
    padatthana: 'សំយោជនីយធម្មេសុ អស្សាទទស្សនបទដ្ឋាន (មានការឃើញកាមគុណថាជាទីត្រេកអរជាហេតុជិត)',
    associatedCitta: 'លោភមូលចិត្ត ៨ ដួង',
    practicalApplication: 'ជាឫសគល់នៃទុក្ខសច្ច (សមុទយសច្ច)។ លះបង់ដោយការធ្វើទាន ចម្រើនអនិច្ចសញ្ញា និងអសុភភាវនា។'
  },
  {
    id: 'cet-14',
    pali: 'Dosa',
    km: 'ទោសៈ (សេចក្តីក្រេវក្រោធ ប្រទូស្ត កាចសាហាវ - ភ្លើងកំហឹង)',
    group: 'akusala',
    groupKm: 'អកុសលចេតសិក ១៤',
    lakkhana: 'ចណ្ឌិក្កលក្ខណៈ (មានភាពកាចសាហាវក្តៅក្រហាយជាលក្ខណៈ)',
    rasa: 'វិស្សម្ភនរស (មានការដុតកម្ទេចទីពឹង និងសេចក្តីសុខរបស់ខ្លួនជាកិច្ច)',
    paccupatthana: 'ទុស្សនបច្ចុបដ្ឋាន (មានការប្រទូស្តបំផ្លិចបំផ្លាញជាផល)',
    padatthana: 'អាឃាតវត្ថុបទដ្ឋាន (មានរឿងនាំឱ្យខឹង ១០ យ៉ាងជាហេតុជិត)',
    associatedCitta: 'ទោសមូលចិត្ត ២ ដួង',
    practicalApplication: 'ដូចភ្លើងព្រៃដែលឆេះដុតខ្លួនឯងមុនគេបង្អស់។ ត្រូវពន្លត់ភ្លាមៗដោយ «មេត្តាភាវនា» និងការអត់ធន់។'
  },
  {
    id: 'cet-15',
    pali: 'Māna',
    km: 'មានៈ (សេចក្តីប្រកាន់ខ្លួន ប្រៀបធៀប ក្រអឺតក្រទម)',
    group: 'akusala',
    groupKm: 'អកុសលចេតសិក ១៤',
    lakkhana: 'ឧណ្ណតិលក្ខណៈ (មានការលើកតម្កើងខ្លួនជាលក្ខណៈ)',
    rasa: 'សម្បគ្គហនរស (មានការលើកខ្លួនប្រៀបធៀបនឹងអ្នកដទៃជាកិច្ច)',
    paccupatthana: 'កេតុកម្យតាភាវបច្ចុបដ្ឋាន (មានការចង់បានមុខមាត់កិត្តិយសជាផល)',
    padatthana: 'ទិដ្ឋិវិប្បយុត្តលោភបទដ្ឋាន (មានលោភៈមិនប្រកបដោយទិដ្ឋិជាហេតុជិត)',
    associatedCitta: 'លោភមូលចិត្តទិដ្ឋិវិប្បយុត្ត ៤ ដួង',
    practicalApplication: 'គិតថាខ្លួន «ប្រសើរជាងគេ», «ស្មើគេ», ឬ «អន់ជាងគេ» សុទ្ធតែជាមានៈ។ កម្ចាត់បានទាំងស្រុងដោយអរហត្តមគ្គ។'
  },
  {
    id: 'cet-16',
    pali: 'Issā & Macchariya',
    km: 'ឥស្សា (ច្រណែនឈ្នានីស) និង មច្ឆរិយៈ (កំណាញ់ស្វិតស្វាញ)',
    group: 'akusala',
    groupKm: 'អកុសលចេតសិក ១៤',
    lakkhana: 'បរសម្បត្តីនំ ឧយ្យានលក្ខណៈ (មិនសប្បាយចិត្តនឹងទ្រព្យសម្បត្តិអ្នកដទៃ) / អត្តសម្បត្តិគុហនលក្ខណៈ (លាក់ទ្រព្យខ្លួន)',
    rasa: 'តត្ថេវ អនភិរតិរស / សហសម្បត្តិវិភវនរស',
    paccupatthana: 'តតោ វិមុខភាវបច្ចុបដ្ឋាន / សង្កោចនបច្ចុបដ្ឋាន',
    padatthana: 'បរសម្បត្តិបទដ្ឋាន / អត្តសម្បត្តិបទដ្ឋាន',
    associatedCitta: 'ទោសមូលចិត្ត ២ ដួង',
    practicalApplication: 'ឥស្សាកម្ចាត់ដោយ «មុទិតា» (ត្រេកអរពេលឃើញគេបានល្អ)។ មច្ឆរិយៈកម្ចាត់ដោយ «ទាន» (ការបរិច្ចាគចែករំលែក)។'
  },
  {
    id: 'cet-17',
    pali: 'Thīna & Middha',
    km: 'ថីនៈ (សេចក្តីរួញរានៃចិត្ត) និង មិទ្ធៈ (សេចក្តីងងុយដេក សន្លឹមសន្លៃនៃកាយ)',
    group: 'akusala',
    groupKm: 'អកុសលចេតសិក ១៤',
    lakkhana: 'ឧស្សាហវិគមលក្ខណៈ (បាត់បង់សេចក្តីព្យាយាម) / អកម្មញ្ញតាលក្ខណៈ (មិនគួរដល់ការងារ)',
    rasa: 'វីរិយវិទ្ធំសនរស (កម្ទេចសេចក្តីព្យាយាម) / ឱណាហនរស (បិទបាំងចិត្ត)',
    paccupatthana: 'សំសីទនបច្ចុបដ្ឋាន / លីនតាភាវបច្ចុបដ្ឋាន (ស្ពឹកស្រពន់)',
    padatthana: 'អយោនិសោមនសិការបទដ្ឋាន',
    associatedCitta: 'អកុសលចិត្តសសង្ខារិក ៥ ដួង',
    practicalApplication: 'ជាឧបសគ្គធំបំផុតពេលអង្គុយសមាធិ។ ដោះស្រាយដោយ៖ លុបមុខ ដើរចង្ក្រម ឬពិចារណាលើពន្លឺ (អាលោកសញ្ញា)។'
  },

  // 19 Sobhana-sadharana (Beautiful factors)
  {
    id: 'cet-18',
    pali: 'Saddhā',
    km: 'សទ្ធា (សេចក្តីជឿជាក់ជ្រះថ្លាក្នុងព្រះរតនត្រ័យ និងកម្មផល)',
    group: 'sobhana-sadharana',
    groupKm: 'សោភណសាធារណៈ ១៩ (មានក្នុងចិត្តល្អគ្រប់ដួង)',
    lakkhana: 'សទ្ធហនលក្ខណៈ ឬ បសាទនលក្ខណៈ (មានការជឿជាក់ ឬជ្រះថ្លាស្អាតបរិសុទ្ធជាលក្ខណៈ)',
    rasa: 'ឱក្កន្ធនរស (មានការលោតចុះទៅកាន់សេចក្តីល្អជាកិច្ច ដូចទឹកថ្លាស្អាត)',
    paccupatthana: 'អកាលុស្សិយបច្ចុបដ្ឋាន (មានការមិនល្អក់កករជាផល)',
    padatthana: 'សទ្ធម្មស្សវនបទដ្ឋាន (មានការស្តាប់ព្រះធម៌ជាហេតុជិត)',
    associatedCitta: 'សោភណចិត្ត ៥៩ ឬ ៩១ ដួង',
    practicalApplication: 'ដូចមេដីកែទឹកល្អក់ឱ្យថ្លា! សទ្ធាជម្រះចិត្តឱ្យស្អាតបរិសុទ្ធ ជាឫសគល់នៃបុណ្យកុសលទាំងអស់។'
  },
  {
    id: 'cet-19',
    pali: 'Sati',
    km: 'សតិ (ការរឭកដឹងទាន់នូវអារម្មណ៍បច្ចុប្បន្ន មិនភ្លេចភ្លាំង)',
    group: 'sobhana-sadharana',
    groupKm: 'សោភណសាធារណៈ ១៩',
    lakkhana: 'អបិលាបនលក្ខណៈ (មានការមិនអណ្តែតចេញពីអារម្មណ៍ជាលក្ខណៈ)',
    rasa: 'អសម្មោសរស (មានការមិនភ្លេចភ្លាំងជាកិច្ច)',
    paccupatthana: 'អារក្ខបច្ចុបដ្ឋាន (មានការការពារចិត្តជាផល)',
    padatthana: 'ថិរសញ្ញាបទដ្ឋាន (មានសញ្ញាដ៏មាំទាំជាហេតុជិត ឬសតិប្បដ្ឋាន ៤)',
    associatedCitta: 'សោភណចិត្តទាំងអស់',
    practicalApplication: 'ដូចឆ្មាំយាមទ្វារក្រុង! សតិការពារមិនឱ្យអកុសលធម៌ហូរចូលក្នុងចិត្តបានឡើយ។ ជាធម៌ចាំបាច់គ្រប់កាល (សព្វត្ថិកា)។'
  },
  {
    id: 'cet-20',
    pali: 'Hiri & Ottappa',
    km: 'ហិរិ (សេចក្តីខ្មាសបាប) និង ឱត្តប្បៈ (សេចក្តីខ្លាចបាប)',
    group: 'sobhana-sadharana',
    groupKm: 'សោភណសាធារណៈ ១៩',
    lakkhana: 'បាបតោ ជិគុច្ឆនលក្ខណៈ (ខ្ពើមរអើមបាប) / ឧត្តាសនលក្ខណៈ (ខ្លាចទោសនៃបាប)',
    rasa: 'អករណរស (មិនព្រមធ្វើអំពើអាក្រក់ជាកិច្ច)',
    paccupatthana: 'បាបតោ សង្កោចនបច្ចុបដ្ឋាន (ការរួញថយចាកបាបជាផល)',
    padatthana: 'អត្តគារវបទដ្ឋាន (គោរពខ្លួនឯង) / បរគារវបទដ្ឋាន (គោរពអ្នកដទៃ)',
    associatedCitta: 'សោភណចិត្តទាំងអស់',
    practicalApplication: 'ហៅថា «លោកបាលធម៌» (ធម៌រក្សាពិភពលោក)! បើមនុស្សលោកមានហិរិ និងឱត្តប្បៈ ពិភពលោកនឹងមានសន្តិភាព គ្មានអំពើចោរកម្ម និងសង្គ្រាម។'
  },
  {
    id: 'cet-21',
    pali: 'Tatramajjhattatā',
    km: 'តត្រមជ្ឈត្តតា (ភាពជាកណ្តាលនៃចិត្ត មិនលម្អៀង ឧបេក្ខាក្នុងសោភណៈ)',
    group: 'sobhana-sadharana',
    groupKm: 'សោភណសាធារណៈ ១៩',
    lakkhana: 'ចិត្តចេតសិកានំ សមវាហិតាលក្ខណៈ (មានការប្រព្រឹត្តទៅស្មើគ្នានៃចិត្តនិងចេតសិកជាលក្ខណៈ)',
    rasa: 'អនូនានធិកតារស (មានការមិនឱ្យខ្វះឬលើសជាកិច្ច)',
    paccupatthana: 'មជ្ឈត្តភាវបច្ចុបដ្ឋាន (មានភាពជាកណ្តាលជាផល)',
    padatthana: 'សម្បយុត្តធម្មបទដ្ឋាន',
    associatedCitta: 'សោភណចិត្តទាំងអស់',
    practicalApplication: 'ដូចអ្នកបររទេះដែលចេះសម្រួលសេះឱ្យរត់ស្មើ! ធ្វើឱ្យចិត្តស្ងប់នឹងនរពេលជួបលោកធម៌ ៨ (លាភ យស សរសើរ សុខ ទុក្ខ...)។'
  },

  // 3 Virati (Abstinences)
  {
    id: 'cet-22',
    pali: 'Sammā-vācā, Kammanta, Ājīva',
    km: 'វិរតី ៣ (វាចាល្អ, ការងារល្អ, ការចិញ្ចឹមជីវិតល្អ)',
    group: 'virati',
    groupKm: 'វិរតីចេតសិក ៣ (ការវៀរចាកបាប)',
    lakkhana: 'វីតិក្កមនតោ វារណលក្ខណៈ (មានការវៀរចាកកាយទុច្ចរិត និងវចីទុច្ចរិតជាលក្ខណៈ)',
    rasa: 'ទុច្ចរិតវិគមនរស (មានការមិនប្រព្រឹត្តអាក្រក់ជាកិច្ច)',
    paccupatthana: 'អករណភាវបច្ចុបដ្ឋាន (មានការមិនធ្វើបាបជាផល)',
    padatthana: 'សទ្ធា ហិរិ ឱត្តប្បបទដ្ឋាន',
    associatedCitta: 'មហាកុសល ៨, លោកុត្តរ ៨/៤០',
    practicalApplication: 'ជាអង្គនៃសីលក្ខន្ធក្នុងអរិយមគ្គ។ វៀរចាកការកុហក សម្លាប់សត្វ លួចទ្រព្យ និងរបរចិញ្ចឹមជីវិតខុសច្បាប់ធម៌។'
  },

  // 2 Appamanna (Illimitables)
  {
    id: 'cet-23',
    pali: 'Karuṇā & Muditā',
    km: 'ករុណា (អាណិតជួយអ្នករងទុក្ខ) និង មុទិតា (ត្រេកអរជាមួយអ្នកបានសុខ)',
    group: 'appamanna',
    groupKm: 'អប្បមញ្ញាចេតសិក ២ (ព្រហ្មវិហារធម៌)',
    lakkhana: 'ទុក្ខាបនយនាកាលក្ខណៈ (ចង់ដកស្រង់សត្វចេញពីទុក្ខ) / បមោទនលក្ខណៈ (រីករាយនឹងសេចក្តីសុខគេ)',
    rasa: 'បរទុក្ខាសហនរស (ទ្រាំមិនបាននឹងការរងទុក្ខរបស់គេ) / អនីសូយនរស (មិនច្រណែនគេ)',
    paccupatthana: 'អវិហិង្សាបច្ចុបដ្ឋាន / អរតិវិគមនបច្ចុបដ្ឋាន',
    padatthana: 'ទុក្ខាភិភូតសត្តបទដ្ឋាន / សម្បត្តិកសត្តបទដ្ឋាន',
    associatedCitta: 'មហាកុសល, មហាកិរិយា, រូបាវចរឈាន ១-៤',
    practicalApplication: 'ផ្សាយចិត្តទៅកាន់សព្វសត្វគ្មានព្រំដែន កម្ចាត់វិហិង្សា (ការបៀតបៀន) និងឥស្សា (ការច្រណែន)។'
  },

  // 1 Pannindriya (Wisdom)
  {
    id: 'cet-24',
    pali: 'Paññindriya (Amoha)',
    km: 'បញ្ញិន្ទ្រិយ ឬ អមោហៈ (ប្រាជ្ញាដឹងច្បាស់នូវសច្ចធម៌ ត្រៃលក្ខណ៍ និងបដិច្ចសមុប្បាទ)',
    group: 'panna',
    groupKm: 'បញ្ញិន្ទ្រិយចេតសិក ១ (កំពូលនៃសោភណៈ)',
    lakkhana: 'ធម្មសភាវប្បដិវេធលក្ខណៈ (មានការចាក់ធ្លុះនូវសភាវពិតនៃធម៌ជាលក្ខណៈ ដូចព្រួញមុត)',
    rasa: 'វិសយោភាសនរស (មានការបំភ្លឺអារម្មណ៍ដូចប្រទីបបំភ្លឺទីងងឹតជាកិច្ច)',
    paccupatthana: 'អសម្មោហបច្ចុបដ្ឋាន (មានការមិនវង្វេងស្មោះត្រង់ជាផល)',
    padatthana: 'សមាធិបទដ្ឋាន (មានសមាធិជាហេតុជិត - សមាហិតោ យថាភូតំ បជានាតិ)',
    associatedCitta: 'ញាណសម្បយុត្តចិត្ត ៤៧ ឬ ៧៩ ដួង',
    practicalApplication: 'ជាកាំបិតកាត់ផ្តាច់សង្សារវដ្ត! បញ្ញាដឹងយថាភូតញាណ (ឃើញតាមពិត) នាំឱ្យកើតនិព្វិទា (ការធុញទ្រាន់) វិរាគៈ (ការលះបង់) និងវិមុត្តិ (ការរួចផុតទុក្ខ)។'
  }
]

// Filtered Citta Computed
const filteredCittas = computed(() => {
  return cittaList.filter(c => {
    // category filter
    if (selectedCittaFilter.value !== 'all' && c.category !== selectedCittaFilter.value) {
      return false
    }
    // jati filter
    if (selectedJatiFilter.value !== 'all' && c.jati !== selectedJatiFilter.value) {
      return false
    }
    // search query
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase().trim()
      const matchPali = c.pali.toLowerCase().includes(q)
      const matchKm = c.km.toLowerCase().includes(q)
      const matchCode = c.code.toLowerCase().includes(q)
      const matchGrp = c.groupKm.toLowerCase().includes(q)
      if (!matchPali && !matchKm && !matchCode && !matchGrp) return false
    }
    return true
  })
})

// Filtered Cetasika Computed
const filteredCetasikas = computed(() => {
  return cetasikaList.filter(cet => {
    if (selectedCetasikaGroup.value !== 'all' && cet.group !== selectedCetasikaGroup.value) {
      return false
    }
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.toLowerCase().trim()
      const matchPali = cet.pali.toLowerCase().includes(q)
      const matchKm = cet.km.toLowerCase().includes(q)
      const matchGrp = cet.groupKm.toLowerCase().includes(q)
      if (!matchPali && !matchKm && !matchGrp) return false
    }
    return true
  })
})

function openInspector(item, type) {
  selectedItem.value = item
  modalType.value = type
}

function closeModal() {
  selectedItem.value = null
}

function getJatiBadgeColor(jati) {
  switch (jati) {
    case 'akusala':
      return 'bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/30'
    case 'kusala':
      return 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30'
    case 'vipaka':
      return 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30'
    case 'kiriya':
      return 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-400 border-indigo-500/30'
    default:
      return 'bg-stone-500/15 text-stone-700 dark:text-stone-300 border-stone-500/30'
  }
}
</script>

<template>
  <div class="w-full space-y-6 sm:space-y-8">
    <!-- Header -->
    <header class="text-center space-y-3 sm:space-y-4">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20">
        <span>☸</span>
        <span>អភិធម្មបិដក • Abhidhamma Matrix</span>
      </div>
      <h1 class="text-2xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-800 via-rose-700 to-amber-900 dark:from-amber-200 dark:via-rose-200 dark:to-amber-400 bg-clip-text text-transparent leading-snug">
        ផែនទីចិត្ត ៨៩/១២១ និងចេតសិក ៥២
      </h1>
      <p class="text-xs sm:text-base text-stone-600 dark:text-stone-300 max-w-3xl mx-auto leading-relaxed">
        ស្វែងយល់អំពីរចនាសម្ព័ន្ធនៃចិត្ត (Consciousness) ទាំង ៨៩ ឬ ១២១ ដួង និងចេតសិក (Mental Factors) ទាំង ៥២ តាមក្បួនអភិធម្ម ដើម្បីដឹងទាន់នូវរាល់ខណៈចិត្តដែលកើតឡើងក្នុងខ្លួនយើង។
      </p>

      <!-- View Switcher Tabs -->
      <div class="flex items-center gap-2 pt-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center scrollbar-none touch-pan-x -mx-2 px-2 sm:mx-0 sm:px-0">
        <button
          @click="activeTab = 'citta'"
          :class="[
            'px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 sm:gap-2 shadow-sm shrink-0',
            activeTab === 'citta'
              ? 'bg-amber-600 text-white shadow-amber-600/30 scale-[1.02]'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
          ]"
        >
          <span>🧠</span>
          <span>ចិត្ត ៨៩/១២១ (Citta)</span>
        </button>

        <button
          @click="activeTab = 'cetasika'"
          :class="[
            'px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 sm:gap-2 shadow-sm shrink-0',
            activeTab === 'cetasika'
              ? 'bg-amber-600 text-white shadow-amber-600/30 scale-[1.02]'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
          ]"
        >
          <span>🌿</span>
          <span>ចេតសិក ៥២ (Cetasika)</span>
        </button>

        <button
          @click="activeTab = 'matrix'"
          :class="[
            'px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-medium text-xs sm:text-sm whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 sm:gap-2 shadow-sm shrink-0',
            activeTab === 'matrix'
              ? 'bg-amber-600 text-white shadow-amber-600/30 scale-[1.02]'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
          ]"
        >
          <span>📊</span>
          <span>ការប្រកបគ្នា (Sampayoga)</span>
        </button>
      </div>
    </header>

    <!-- Search & Quick Filters Bar -->
    <div class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
      <div class="flex flex-col sm:flex-row items-center gap-3">
        <div class="relative w-full flex-1">
          <span class="absolute inset-y-0 left-3 flex items-center text-stone-400">🔍</span>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="ស្វែងរកតាមឈ្មោះបាលី ឈ្មោះខ្មែរ ឬលក្ខណៈ..."
            class="w-full pl-9 pr-4 py-2.5 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          />
          <button
            v-if="searchQuery"
            @click="searchQuery = ''"
            class="absolute inset-y-0 right-3 flex items-center text-stone-400 hover:text-stone-600 text-xs"
          >
            ✕
          </button>
        </div>

        <!-- 89 vs 121 toggle for Citta -->
        <div v-if="activeTab === 'citta'" class="flex items-center gap-1.5 sm:gap-2 text-xs font-medium w-full sm:w-auto justify-center sm:justify-start bg-stone-100 dark:bg-stone-800 p-1 sm:p-1.5 rounded-xl border border-stone-200 dark:border-stone-700">
          <button
            @click="isExpanded121 = false"
            :class="['px-2.5 sm:px-3 py-1 rounded-lg transition text-xs', !isExpanded121 ? 'bg-amber-600 text-white shadow-xs' : 'text-stone-600 dark:text-stone-300']"
          >
            ៨៩ ដួង (សង្ខេប)
          </button>
          <button
            @click="isExpanded121 = true"
            :class="['px-2.5 sm:px-3 py-1 rounded-lg transition text-xs', isExpanded121 ? 'bg-amber-600 text-white shadow-xs' : 'text-stone-600 dark:text-stone-300']"
          >
            ១២១ ដួង (ពិស្តារតាមឈាន)
          </button>
        </div>
      </div>

      <!-- Citta Sub-Filters -->
      <div v-if="activeTab === 'citta'" class="flex items-center gap-1.5 overflow-x-auto pb-1 pt-2 border-t border-stone-100 dark:border-stone-800/60 text-xs scrollbar-none touch-pan-x sm:flex-wrap">
        <span class="text-stone-400 shrink-0 mr-1">ប្រភេទភូមិ:</span>
        <button
          @click="selectedCittaFilter = 'all'"
          :class="['px-2.5 py-1 rounded-lg transition border shrink-0', selectedCittaFilter === 'all' ? 'bg-stone-800 text-white dark:bg-stone-100 dark:text-stone-900 border-transparent font-medium' : 'bg-transparent text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-700']"
        >
          ទាំងអស់
        </button>
        <button
          @click="selectedCittaFilter = 'akusala'"
          :class="['px-2.5 py-1 rounded-lg transition border shrink-0', selectedCittaFilter === 'akusala' ? 'bg-red-600 text-white border-transparent font-medium' : 'text-red-700 dark:text-red-400 border-red-200 dark:border-red-900/40']"
        >
          អកុសល ១២
        </button>
        <button
          @click="selectedCittaFilter = 'ahetuka'"
          :class="['px-2.5 py-1 rounded-lg transition border shrink-0', selectedCittaFilter === 'ahetuka' ? 'bg-stone-700 text-white border-transparent font-medium' : 'text-stone-700 dark:text-stone-400 border-stone-200 dark:border-stone-700']"
        >
          អហេតុក ១៨
        </button>
        <button
          @click="selectedCittaFilter = 'kamavacara-sobhana'"
          :class="['px-2.5 py-1 rounded-lg transition border shrink-0', selectedCittaFilter === 'kamavacara-sobhana' ? 'bg-emerald-600 text-white border-transparent font-medium' : 'text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/40']"
        >
          កាមាវចរសោភណៈ ២៤
        </button>
        <button
          @click="selectedCittaFilter = 'rupavacara'"
          :class="['px-2.5 py-1 rounded-lg transition border shrink-0', selectedCittaFilter === 'rupavacara' ? 'bg-cyan-600 text-white border-transparent font-medium' : 'text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-900/40']"
        >
          រូបាវចរ ១៥
        </button>
        <button
          @click="selectedCittaFilter = 'arupavacara'"
          :class="['px-2.5 py-1 rounded-lg transition border shrink-0', selectedCittaFilter === 'arupavacara' ? 'bg-purple-600 text-white border-transparent font-medium' : 'text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-900/40']"
        >
          អរូបាវចរ ១២
        </button>
        <button
          @click="selectedCittaFilter = 'lokuttara'"
          :class="['px-2.5 py-1 rounded-lg transition border shrink-0', selectedCittaFilter === 'lokuttara' ? 'bg-amber-600 text-white border-transparent font-medium' : 'text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-900/40']"
        >
          លោកុត្តរ ៨ / ៤០
        </button>
      </div>

      <!-- Cetasika Sub-Filters -->
      <div v-if="activeTab === 'cetasika'" class="flex items-center gap-1.5 overflow-x-auto pb-1 pt-2 border-t border-stone-100 dark:border-stone-800/60 text-xs scrollbar-none touch-pan-x sm:flex-wrap">
        <span class="text-stone-400 shrink-0 mr-1">ក្រុមចេតសិក:</span>
        <button
          @click="selectedCetasikaGroup = 'all'"
          :class="['px-2.5 py-1 rounded-lg transition border shrink-0', selectedCetasikaGroup === 'all' ? 'bg-stone-800 text-white dark:bg-stone-100 dark:text-stone-900 border-transparent font-medium' : 'bg-transparent text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-700']"
        >
          ទាំងអស់ ៥២
        </button>
        <button
          @click="selectedCetasikaGroup = 'sabbacitta'"
          :class="['px-2.5 py-1 rounded-lg transition border shrink-0', selectedCetasikaGroup === 'sabbacitta' ? 'bg-blue-600 text-white border-transparent font-medium' : 'text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-900/40']"
        >
          សព្វចិត្តសាធារណៈ ៧
        </button>
        <button
          @click="selectedCetasikaGroup = 'pakinna'"
          :class="['px-2.5 py-1 rounded-lg transition border shrink-0', selectedCetasikaGroup === 'pakinna' ? 'bg-indigo-600 text-white border-transparent font-medium' : 'text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900/40']"
        >
          បកិណ្ណកៈ ៦
        </button>
        <button
          @click="selectedCetasikaGroup = 'akusala'"
          :class="['px-2.5 py-1 rounded-lg transition border shrink-0', selectedCetasikaGroup === 'akusala' ? 'bg-red-600 text-white border-transparent font-medium' : 'text-red-700 dark:text-red-400 border-red-200 dark:border-red-900/40']"
        >
          អកុសលចេតសិក ១៤
        </button>
        <button
          @click="selectedCetasikaGroup = 'sobhana-sadharana'"
          :class="['px-2.5 py-1 rounded-lg transition border shrink-0', selectedCetasikaGroup === 'sobhana-sadharana' ? 'bg-emerald-600 text-white border-transparent font-medium' : 'text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/40']"
        >
          សោភណសាធារណៈ ១៩
        </button>
        <button
          @click="selectedCetasikaGroup = 'virati'"
          :class="['px-2.5 py-1 rounded-lg transition border shrink-0', selectedCetasikaGroup === 'virati' ? 'bg-teal-600 text-white border-transparent font-medium' : 'text-teal-700 dark:text-teal-400 border-teal-200 dark:border-teal-900/40']"
        >
          វិរតី ៣
        </button>
        <button
          @click="selectedCetasikaGroup = 'appamanna'"
          :class="['px-2.5 py-1 rounded-lg transition border shrink-0', selectedCetasikaGroup === 'appamanna' ? 'bg-amber-600 text-white border-transparent font-medium' : 'text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-900/40']"
        >
          អប្បមញ្ញា ២
        </button>
        <button
          @click="selectedCetasikaGroup = 'panna'"
          :class="['px-2.5 py-1 rounded-lg transition border shrink-0', selectedCetasikaGroup === 'panna' ? 'bg-rose-600 text-white border-transparent font-medium' : 'text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-900/40']"
        >
          បញ្ញិន្ទ្រិយ ១
        </button>
      </div>
    </div>

    <!-- TAB 1: CITTA EXPLORER -->
    <section v-if="activeTab === 'citta'" class="space-y-4 sm:space-y-6">
      <div class="flex items-center justify-between">
        <h2 class="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <span>🧠</span>
          <span>តារាងពិនិត្យចិត្ត ({{ filteredCittas.length }} ដួង)</span>
        </h2>
        <span class="text-[11px] sm:text-xs text-stone-500">ចុចលើផ្ទាំងដើម្បីមើលលម្អិត</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <div
          v-for="citta in filteredCittas"
          :key="citta.id"
          @click="openInspector(citta, 'citta')"
          class="group bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500/50 dark:hover:border-amber-500/50 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 sm:space-y-4"
        >
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono font-bold text-amber-700 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md">
                {{ citta.code }}
              </span>
              <span :class="['text-[11px] font-medium px-2 py-0.5 rounded-full border', getJatiBadgeColor(citta.jati)]">
                {{ citta.jatiKm }}
              </span>
            </div>

            <h3 class="text-base font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              {{ citta.km }}
            </h3>

            <p class="text-xs font-mono italic text-stone-500 dark:text-stone-400 line-clamp-2">
              {{ citta.pali }}
            </p>
          </div>

          <div class="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
            <div class="flex items-center gap-1.5">
              <span>វេទនា:</span>
              <span class="font-medium text-stone-700 dark:text-stone-300">{{ citta.feelingKm }}</span>
            </div>
            <div class="text-amber-600 dark:text-amber-400 font-medium group-hover:translate-x-1 transition-transform">
              ពិនិត្យ →
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 2: CETASIKA EXPLORER -->
    <section v-if="activeTab === 'cetasika'" class="space-y-4 sm:space-y-6">
      <div class="flex items-center justify-between">
        <h2 class="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <span>🌿</span>
          <span>តារាងចេតសិក ({{ filteredCetasikas.length }} ពួក)</span>
        </h2>
        <span class="text-[11px] sm:text-xs text-stone-500">ចុចលើចេតសិកដើម្បីមើលលក្ខណៈ</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <div
          v-for="cet in filteredCetasikas"
          :key="cet.id"
          @click="openInspector(cet, 'cetasika')"
          class="group bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 sm:space-y-4"
        >
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                {{ cet.pali }}
              </span>
              <span class="text-[11px] font-medium text-stone-500 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded-md">
                {{ cet.groupKm }}
              </span>
            </div>

            <h3 class="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {{ cet.km }}
            </h3>

            <p class="text-xs text-stone-600 dark:text-stone-400 line-clamp-2">
              <strong class="text-stone-700 dark:text-stone-300">លក្ខណៈ:</strong> {{ cet.lakkhana }}
            </p>
          </div>

          <div class="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
            <span class="truncate max-w-[180px] sm:max-w-[200px] text-[11px]">{{ cet.associatedCitta }}</span>
            <span class="text-emerald-600 dark:text-emerald-400 font-medium group-hover:translate-x-1 transition-transform">
              លម្អិត →
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- TAB 3: SAMPAYOGA MATRIX SUMMARY -->
    <section v-if="activeTab === 'matrix'" class="space-y-6 sm:space-y-8">
      <!-- Intro Card -->
      <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-stone-900 dark:to-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 rounded-2xl p-4 sm:p-6 space-y-3">
        <h2 class="text-lg sm:text-xl font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2">
          <span>📊</span>
          <span>គោលការណ៍ប្រកបគ្នានៃចិត្ត និងចេតសិក (Sampayoga & Saṅgaha Naya)</span>
        </h2>
        <p class="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          ចិត្ត និងចេតសិកត្រូវតែកើតឡើងព្រមគ្នា <strong>(ឯកុប្បាទោ)</strong>, រលត់ទៅវិញព្រមគ្នា <strong>(ឯកនិរោធោ)</strong>, មានអារម្មណ៍តែមួយ <strong>(ឯការម្មណោ)</strong>, និងអាស្រ័យវត្ថុតែមួយ <strong>(ឯកវត្ថុកោ)</strong>។ មិនដែលមានចិត្តកើតឡើងដោយគ្មានចេតសិក ឬចេតសិកកើតឡើងដោយគ្មានចិត្តឡើយ។
        </p>
      </div>

      <!-- Key Rules Breakdown -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <!-- Rule 1: Seven Universals -->
        <div class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-base sm:text-lg">7</span>
            <div>
              <h3 class="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">សព្វចិត្តសាធារណៈ ៧</h3>
              <p class="text-xs text-stone-500">មាននៅក្នុងចិត្តគ្រប់ដួងទាំងអស់ (៨៩ ឬ ១២១)</p>
            </div>
          </div>
          <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            ទោះបីជាចិត្តបាប ចិត្តបុណ្យ ចិត្តព្រះអរហន្ត ឬចិត្តសត្វតិរច្ឆានក៏ដោយ ត្រូវតែមានចេតសិក ៧ នេះជានិច្ច៖ <strong>ផស្សៈ, វេទនា, សញ្ញា, ចេតនា, ឯកគ្គតា, ជីវិតិន្ទ្រិយ, និងមនសិការ</strong>។ បើគ្មាន ៧ នេះ ចិត្តមិនអាចដឹងអារម្មណ៍បានឡើយ។
          </p>
        </div>

        <!-- Rule 2: Unwholesome Core -->
        <div class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-base sm:text-lg">4</span>
            <div>
              <h3 class="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">មោហចតុក្កៈ ៤ (ស្នូលនៃបាប)</h3>
              <p class="text-xs text-stone-500">មាននៅក្នុងអកុសលចិត្តទាំង ១២ ដួងជានិច្ច</p>
            </div>
          </div>
          <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            រាល់ពេលដែលចិត្តកើតបាប (លោភៈ ខឹងក្រោធ ឬរាយមាយ) ត្រូវតែមានចេតសិក ៤ នេះកំដរជានិច្ច៖ <strong>មោហៈ (ភាពវង្វេង), អហិរិកៈ (មិនខ្មាសបាប), អនោត្តប្បៈ (មិនខ្លាចបាប), និងឧទ្ធច្ចៈ (រាយមាយ)</strong>។
          </p>
        </div>

        <!-- Rule 3: Beautiful Core -->
        <div class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-base sm:text-lg">19</span>
            <div>
              <h3 class="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">សោភណសាធារណៈ ១៩</h3>
              <p class="text-xs text-stone-500">មានក្នុងចិត្តល្អបរិសុទ្ធគ្រប់ដួង (៥៩ ឬ ៩១)</p>
            </div>
          </div>
          <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            រាល់ពេលដែលយើងធ្វើបុណ្យ ចិត្តស្ងប់ ឬចម្រើនភាវនា ចេតសិកល្អ ១៩ រូបនេះនឹងកើតឡើងព្រមគ្នា រួមមាន <strong>សទ្ធា, សតិ, ហិរិ, ឱត្តប្បៈ, អលោភៈ, អទោសៈ, តត្រមជ្ឈត្តតា</strong> និងគូស្ងប់ស្ងាត់ទាំង ៦ គូ។
          </p>
        </div>

        <!-- Rule 4: Wisdom Distinction -->
        <div class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-base sm:text-lg">1</span>
            <div>
              <h3 class="font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">បញ្ញិន្ទ្រិយ (វត្តមាននៃប្រាជ្ញា)</h3>
              <p class="text-xs text-stone-500">កើតក្នុងញាណសម្បយុត្តចិត្ត ៤៧ ឬ ៧៩ ដួង</p>
            </div>
          </div>
          <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            បុណ្យខ្លះកើតឡើងដោយគ្មានបញ្ញា (ញាណវិប្បយុត្ត) ដូចជាការជួយដោយស្មោះតែមិនយល់ហេតុផល។ តែបើជា <strong>«ញាណសម្បយុត្ត»</strong> ទើបមានបញ្ញិន្ទ្រិយចេតសិកនេះចូលរួម ដែលអាចចម្រើនរហូតដល់មគ្គផលនិព្វានបាន។
          </p>
        </div>
      </div>
    </section>

    <!-- POP-UP MODAL INSPECTOR -->
    <Teleport to="body">
      <div
        v-if="selectedItem"
        class="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-stone-950/70 backdrop-blur-sm transition-opacity"
        @click.self="closeModal"
      >
        <div
          class="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-t-3xl sm:rounded-3xl max-w-2xl w-full max-h-[88vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl p-4 sm:p-7 space-y-5 sm:space-y-6 animate-in slide-in-from-bottom sm:zoom-in-95 duration-200"
        >
          <!-- Modal Header -->
          <div class="flex items-start justify-between gap-4 border-b border-stone-100 dark:border-stone-800 pb-4">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-md">
                  {{ modalType === 'citta' ? selectedItem.code : selectedItem.pali }}
                </span>
                <span class="text-xs text-stone-500 font-medium">
                  {{ modalType === 'citta' ? selectedItem.groupKm : selectedItem.groupKm }}
                </span>
              </div>
              <h3 class="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                {{ selectedItem.km }}
              </h3>
            </div>
            <button
              @click="closeModal"
              class="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 flex items-center justify-center transition"
            >
              ✕
            </button>
          </div>

          <!-- CITTA MODAL BODY -->
          <div v-if="modalType === 'citta'" class="space-y-5 text-sm">
            <div class="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/60 dark:border-stone-800">
              <span class="text-xs text-stone-400 block font-mono">PĀLI FORMULA</span>
              <p class="font-mono text-stone-800 dark:text-stone-200 text-sm font-semibold mt-0.5">
                {{ selectedItem.pali }}
              </p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              <div class="p-2.5 sm:p-3 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-100 dark:border-stone-800">
                <span class="text-[11px] sm:text-xs text-stone-400 block">ជាតិ (Jāti)</span>
                <span class="text-xs sm:text-sm font-semibold text-stone-800 dark:text-stone-200">{{ selectedItem.jatiKm }}</span>
              </div>
              <div class="p-2.5 sm:p-3 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-100 dark:border-stone-800">
                <span class="text-[11px] sm:text-xs text-stone-400 block">ភូមិ (Plane)</span>
                <span class="text-xs sm:text-sm font-semibold text-stone-800 dark:text-stone-200">{{ selectedItem.planeKm }}</span>
              </div>
              <div class="p-2.5 sm:p-3 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-100 dark:border-stone-800">
                <span class="text-[11px] sm:text-xs text-stone-400 block">វេទនា (Feeling)</span>
                <span class="text-xs sm:text-sm font-semibold text-stone-800 dark:text-stone-200">{{ selectedItem.feelingKm }}</span>
              </div>
              <div class="p-2.5 sm:p-3 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-100 dark:border-stone-800">
                <span class="text-[11px] sm:text-xs text-stone-400 block">ហេតុ (Roots)</span>
                <span class="text-xs sm:text-sm font-semibold text-stone-800 dark:text-stone-200">{{ selectedItem.hetuKm }}</span>
              </div>
              <div class="p-2.5 sm:p-3 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-100 dark:border-stone-800">
                <span class="text-[11px] sm:text-xs text-stone-400 block">ចេតសិកប្រកប</span>
                <span class="text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400">{{ selectedItem.cetasikaCount }} រូប</span>
              </div>
              <div class="p-2.5 sm:p-3 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-100 dark:border-stone-800">
                <span class="text-[11px] sm:text-xs text-stone-400 block">កិច្ចនៃចិត្ត (Function)</span>
                <span class="text-xs sm:text-sm font-semibold text-stone-800 dark:text-stone-200">{{ selectedItem.functionKm }}</span>
              </div>
            </div>

            <div class="space-y-2">
              <h4 class="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <span>💡</span>
                <span>ការប្រាកដឡើងក្នុងជីវិតជាក់ស្តែង (Practical Experience):</span>
              </h4>
              <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed bg-amber-500/5 p-3.5 sm:p-4 rounded-2xl border border-amber-500/15">
                {{ selectedItem.practicalNote }}
              </p>
            </div>

            <div class="space-y-2">
              <h4 class="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <span>🛡️</span>
                <span>វិធីដោះស្រាយ / ការបណ្តុះចម្រើន (Remedy / Cultivation):</span>
              </h4>
              <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed bg-emerald-500/5 p-3.5 sm:p-4 rounded-2xl border border-emerald-500/15">
                {{ selectedItem.cure }}
              </p>
            </div>
          </div>

          <!-- CETASIKA MODAL BODY -->
          <div v-if="modalType === 'cetasika'" class="space-y-5 text-sm">
            <div class="space-y-3">
              <h4 class="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2 text-sm sm:text-base">
                <span>📜</span>
                <span>លក្ខណាទិចតុក្កៈ ៤ (The 4 Characteristics):</span>
              </h4>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div class="p-3 sm:p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/60 space-y-1">
                  <span class="text-xs font-bold text-amber-700 dark:text-amber-400">១. លក្ខណៈ (Characteristic)</span>
                  <p class="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">{{ selectedItem.lakkhana }}</p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/60 space-y-1">
                  <span class="text-xs font-bold text-emerald-700 dark:text-emerald-400">២. រស (Function / Duty)</span>
                  <p class="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">{{ selectedItem.rasa }}</p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/60 space-y-1">
                  <span class="text-xs font-bold text-cyan-700 dark:text-cyan-400">៣. បច្ចុបដ្ឋាន (Manifestation)</span>
                  <p class="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">{{ selectedItem.paccupatthana }}</p>
                </div>
                <div class="p-3 sm:p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/60 space-y-1">
                  <span class="text-xs font-bold text-purple-700 dark:text-purple-400">៤. បទដ្ឋាន (Proximate Cause)</span>
                  <p class="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">{{ selectedItem.padatthana }}</p>
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <h4 class="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <span>🔗</span>
                <span>ការប្រកបក្នុងចិត្ត (Associated Cittas):</span>
              </h4>
              <p class="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-semibold bg-stone-100 dark:bg-stone-800 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl">
                {{ selectedItem.associatedCitta }}
              </p>
            </div>

            <div class="space-y-2">
              <h4 class="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <span>🧘</span>
                <span>ការអនុវត្តក្នុងការបដិបត្តិ និងជីវិតប្រចាំថ្ងៃ:</span>
              </h4>
              <p class="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed bg-amber-500/5 p-3.5 sm:p-4 rounded-2xl border border-amber-500/15">
                {{ selectedItem.practicalApplication }}
              </p>
            </div>
          </div>

          <!-- Close Button -->
          <div class="pt-2 flex justify-end">
            <button
              @click="closeModal"
              class="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:text-stone-900 text-xs sm:text-sm font-medium transition text-center"
            >
              បិទផ្ទាំង (Close)
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
