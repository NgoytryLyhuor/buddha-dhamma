import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'
import App from './App.vue'
import SlideDown from './components/SlideDown.vue'
import './style.css'

inject()
injectSpeedInsights()

let lazyReloading = false
function lazyView(loader) {
  return () =>
    loader().catch((err) => {
      console.error('Route chunk failed to load:', err)
      if (!lazyReloading) {
        lazyReloading = true
        window.location.reload()
      }
      return Promise.reject(err)
    })
}

const routes = [
  { path: '/', name: 'home', component: lazyView(() => import('./views/HomeView.vue')), meta: { titleK: 'ព្រះធម៌', titleE: 'Buddha Dhamma' } },
  { path: '/core', name: 'core', component: lazyView(() => import('./views/CoreView.vue')), meta: { titleK: 'ធម៌មូលដ្ឋាន', titleE: 'Core Teachings' } },
  { path: '/abhidhamma', name: 'abhidhamma', component: lazyView(() => import('./views/AbhidhammaView.vue')), meta: { titleK: 'អភិធម្ម', titleE: 'Abhidhamma' } },
  { path: '/kamma', name: 'kamma', component: lazyView(() => import('./views/KammaView.vue')), meta: { titleK: 'កម្ម និងផល', titleE: 'Kamma & Result' } },
  { path: '/ethics', name: 'ethics', component: lazyView(() => import('./views/EthicsView.vue')), meta: { titleK: 'សីល និងបារមី', titleE: 'Ethics & Perfections' } },
  { path: '/meditation', name: 'meditation', component: lazyView(() => import('./views/MeditationView.vue')), meta: { titleK: 'សមាធិ', titleE: 'Meditation' } },
  { path: '/suttas', name: 'suttas', component: lazyView(() => import('./views/SuttasView.vue')), meta: { titleK: 'ព្រះសូត្រ', titleE: 'Suttas' } },
  { path: '/life', name: 'life', component: lazyView(() => import('./views/LifeView.vue')), meta: { titleK: 'ជីវប្រវត្តិ', titleE: 'Life of the Buddha' } },
  { path: '/gathas', name: 'gathas', component: lazyView(() => import('./views/GathaView.vue')), meta: { titleK: 'គាថាព្រះធម៌', titleE: 'Gāthā' } },
  { path: '/chanting', name: 'chanting', component: lazyView(() => import('./views/ChantingView.vue')), meta: { titleK: 'សូត្រ ១០', titleE: 'Chanting' } },
  { path: '/glossary', name: 'glossary', component: lazyView(() => import('./views/GlossaryView.vue')), meta: { titleK: 'វចនានុក្រមធម៌', titleE: 'Glossary' } },
  { path: '/stories', name: 'stories', component: lazyView(() => import('./views/StoriesView.vue')), meta: { titleK: 'រឿងល្បីៗ', titleE: 'Stories' } },
  { path: '/questions', name: 'questions', component: lazyView(() => import('./views/QuestionsView.vue')), meta: { titleK: 'សំណួរ–ចម្លើយ', titleE: 'Q&A' } },
  { path: '/rupa-qa', name: 'rupa-qa', component: lazyView(() => import('./views/RupaQaView.vue')), meta: { titleK: 'សំណួររូបបរមត្ថ', titleE: 'Rūpa Q&A' } },
  { path: '/cetasika-qa', name: 'cetasika-qa', component: lazyView(() => import('./views/CetasikaQaView.vue')), meta: { titleK: 'សំណួរចេតសិកបរមត្ថ', titleE: 'Cetasika Q&A' } },
  { path: '/lobha-mula-citta', name: 'lobha-mula-citta', component: lazyView(() => import('./views/LobhaMulaCittaView.vue')), meta: { titleK: 'លោភមូលចិត្ត ៨ ដួង', titleE: 'Lobha Mūla Citta Q&A' } },
  { path: '/paccaya', name: 'paccaya', component: lazyView(() => import('./views/PaccayaView.vue')), meta: { titleK: 'បដិច្ចសមុប្បាទ', titleE: 'Dependent Origination' } },
  { path: '/sangha', name: 'sangha', component: lazyView(() => import('./views/SanghaView.vue')), meta: { titleK: 'ជីវិតព្រះសង្ឃ', titleE: 'Monastic Life' } },
  { path: '/daily', name: 'daily', component: lazyView(() => import('./views/DailyView.vue')), meta: { titleK: 'បដិបត្តិប្រចាំថ្ងៃ', titleE: 'Daily Practice' } },
  { path: '/recollections', name: 'recollections', component: lazyView(() => import('./views/RecollectionView.vue')), meta: { titleK: 'អនុស្សតិ', titleE: 'Recollections' } },
  { path: '/ariya', name: 'ariya', component: lazyView(() => import('./views/AriyaView.vue')), meta: { titleK: 'អរិយបុគ្គល', titleE: 'Noble Persons' } },
  { path: '/calendar', name: 'calendar', component: lazyView(() => import('./views/CalendarView.vue')), meta: { titleK: 'បដិទិនពុទ្ធសាសនា', titleE: 'Buddhist Calendar' } },
  { path: '/realms', name: 'realms', component: lazyView(() => import('./views/RealmsView.vue')), meta: { titleK: 'ស្ថានទាំង ៣១ ភព', titleE: '31 Realms' } },
  { path: '/bodhipakkhiya', name: 'bodhipakkhiya', component: lazyView(() => import('./views/BodhipakkhiyaView.vue')), meta: { titleK: 'ពោធិបក្ខិយធម៌ ៣៧', titleE: '37 Factors of Awakening' } },
  { path: '/timer', name: 'timer', component: lazyView(() => import('./views/MeditationTimerView.vue')), meta: { titleK: 'នាឡិកាសមាធិ', titleE: 'Meditation Timer' } },
  { path: '/quiz', name: 'quiz', component: lazyView(() => import('./views/QuizView.vue')), meta: { titleK: 'ល្បងប្រាជ្ញាធម៌', titleE: 'Dhamma Quiz' } },
  { path: '/death-and-rebirth', name: 'death-and-rebirth', component: lazyView(() => import('./views/DeathAndRebirthView.vue')), meta: { titleK: 'ដំណើរនៃការស្លាប់-បដិសន្ធិ', titleE: 'Death & Rebirth Process' } },
  { path: '/anapanasati', name: 'anapanasati', component: lazyView(() => import('./views/AnapanasatiView.vue')), meta: { titleK: 'អានាបានសតិ ១៦ ដំណាក់កាល', titleE: '16 Steps of Anapanasati' } },
  { path: '/citta-matrix', name: 'citta-matrix', component: lazyView(() => import('./views/CittaMatrixView.vue')), meta: { titleK: 'ផែនទីចិត្ត ៨៩/១២១ និងចេតសិក ៥២', titleE: 'Citta & Cetasika Matrix' } },
  { path: '/vipassana-nana', name: 'vipassana-nana', component: lazyView(() => import('./views/VipassanaNanaView.vue')), meta: { titleK: 'វិបស្សនាញាណ ១៦ ដំណាក់កាល', titleE: '16 Stages of Vipassana' } },
  { path: '/dhamma-aid', name: 'dhamma-aid', component: lazyView(() => import('./views/DhammaAidView.vue')), meta: { titleK: 'ឱសថធម៌សង្គ្រោះអារម្មណ៍', titleE: 'Dhamma Emotional First-Aid' } },
  { path: '/metta', name: 'metta', component: lazyView(() => import('./views/MettaView.vue')), meta: { titleK: 'មេត្តាភាវនា ១០ ទិស', titleE: 'Metta Bhavana 10 Directions' } },
  { path: '/citta-vithi', name: 'citta-vithi', component: lazyView(() => import('./views/CittaVithiView.vue')), meta: { titleK: 'ដំណើរវិថីចិត្ត តាមទ្វារទាំង ៦', titleE: 'Citta Vithi Simulator' } },
  { path: '/magga', name: 'magga', component: lazyView(() => import('./views/MaggaView.vue')), meta: { titleK: 'មគ្គ ៨ ជាក់ស្តែងក្នុងជីវិត', titleE: 'Noble Eightfold Path' } },
  { path: '/holy-sites', name: 'holy-sites', component: lazyView(() => import('./views/HolySitesView.vue')), meta: { titleK: 'ទីសក្ការៈបូជាសំខាន់ទាំង ៤', titleE: 'The 4 Sacred Holy Sites' } },
  { path: '/disciples', name: 'disciples', component: lazyView(() => import('./views/DisciplesView.vue')), meta: { titleK: 'ព្រះអរហន្តសាវ័ក & ឯតទគ្គៈ', titleE: 'Great Disciples & Etadagga' } },
  { path: '/dhutanga', name: 'dhutanga', component: lazyView(() => import('./views/DhutangaView.vue')), meta: { titleK: 'ធុតង្គ ១៣ ប្រការ', titleE: '13 Dhutanga Practices' } },
  { path: '/prophecy', name: 'prophecy', component: lazyView(() => import('./views/ProphecyView.vue')), meta: { titleK: 'ពុទ្ធព្យាករណ៍ ៥០០០ វស្សា & ព្រះមេត្រី', titleE: '5,000-Year Prophecy & Metteyya' } },
  { path: '/rajadhamma', name: 'rajadhamma', component: lazyView(() => import('./views/RajadhammaView.vue')), meta: { titleK: 'ទសពិធរាជធម៌ ១០ & អបរិហានិយធម៌ ៧', titleE: 'Buddhist Leadership & Governance' } },
  { path: '/cosmology', name: 'cosmology', component: lazyView(() => import('./views/CosmologyView.vue')), meta: { titleK: 'កប្ប ចក្រវាឡ & អគ្គញ្ញសូត្រ', titleE: 'Cosmology, Kalpas & Origin of Society' } },
  { path: '/merit-transfer', name: 'merit-transfer', component: lazyView(() => import('./views/MeritTransferView.vue')), meta: { titleK: 'យន្តការឧទ្ទិសកុសល & បរទត្តូបជីវីប្រេត', titleE: 'Merit Transference & Pattidāna' } },
  { path: '/my-gems', name: 'my-gems', component: lazyView(() => import('./views/MyGemsView.vue')), meta: { titleK: 'កម្រងសំណួរកំពូល & ធម៌រតនៈ', titleE: 'My Top Questions & Gems' } },
  { path: '/tiktok-studio', name: 'tiktok-studio', component: lazyView(() => import('./views/TikTokStudioView.vue')), meta: { titleK: 'TikTok AI Studio', titleE: 'TikTok AI Studio' } },
  { path: '/nibbana', name: 'nibbana', component: lazyView(() => import('./views/NibbanaView.vue')), meta: { titleK: 'ព្រះនិព្វានបរមត្ថ', titleE: 'Nibbāna Paramattha' } },
  { path: '/tipitaka', name: 'tipitaka', component: lazyView(() => import('./views/TipitakaView.vue')), meta: { titleK: 'រចនាសម្ព័ន្ធព្រះត្រៃបិដក ១១០ ភាគ', titleE: 'The 110-Volume Tipitaka' } },
  { path: '/jataka', name: 'jataka', component: lazyView(() => import('./views/JatakaView.vue')), meta: { titleK: 'ទសជាតក ព្រះមហាជាតកទាំង ១០', titleE: 'The 10 Great Jātakas' } },
  { path: '/family', name: 'family', component: lazyView(() => import('./views/FamilyView.vue')), meta: { titleK: 'គ្រួសារធម៌ & ទិសទាំង ៦', titleE: 'Family Dhamma & 6 Directions' } },
  { path: '/sangaha', name: 'sangaha', component: lazyView(() => import('./views/SangahaView.vue')), meta: { titleK: 'អភិធម្មត្ថសង្គហៈ ៩ បរិច្ឆេទ', titleE: 'Abhidhammattha Saṅgaha' } },
  { path: '/asubha', name: 'asubha', component: lazyView(() => import('./views/AsubhaView.vue')), meta: { titleK: 'អាការៈ ៣២ & អសុភ ១០', titleE: '32 Body Parts & 10 Asubha' } },
  { path: '/ceremonies', name: 'ceremonies', component: lazyView(() => import('./views/CeremoniesView.vue')), meta: { titleK: 'ពិធីបុណ្យខ្មែរ & ក្បួនប្រគេនទាន', titleE: 'Khmer Ceremonies & Offering Protocols' } },
  { path: '/wealth', name: 'wealth', component: lazyView(() => import('./views/WealthView.vue')), meta: { titleK: 'ទ្រព្យសម្បត្តិធម៌ & ទិដ្ឋធម្មិកត្ថ ៤', titleE: 'Buddhist Wealth & Success Dhamma' } },
  { path: '/lokadhamma', name: 'lokadhamma', component: lazyView(() => import('./views/LokadhammaView.vue')), meta: { titleK: 'លោកធម៌ ៨ ប្រការ', titleE: '8 Worldly Winds (Lokadhamma)' } },
  { path: '/apayamukha', name: 'apayamukha', component: lazyView(() => import('./views/ApayamukhaView.vue')), meta: { titleK: 'អបាយមុខ ៦ ប្រការ', titleE: '6 Paths to Ruin (Apāyamukha)' } },
  { path: '/kammatthana', name: 'kammatthana', component: lazyView(() => import('./views/KammatthanaView.vue')), meta: { titleK: 'កម្មដ្ឋាន ៤០ & ចរិត ៦', titleE: '40 Meditation Subjects & 6 Temperaments' } },
  { path: '/indriya', name: 'indriya', component: lazyView(() => import('./views/IndriyaView.vue')), meta: { titleK: 'ឥន្ទ្រិយ ៥ & ពល ៥', titleE: '5 Spiritual Faculties & 5 Powers' } },
  { path: '/walking-meditation', name: 'walking-meditation', component: lazyView(() => import('./views/WalkingMeditationView.vue')), meta: { titleK: 'ការដើរចង្ក្រម & ឥរិយាបថ ៤', titleE: 'Walking Meditation & 4 Postures' } },
  { path: '/brahmavihara', name: 'brahmavihara', component: lazyView(() => import('./views/BrahmaviharaView.vue')), meta: { titleK: 'ព្រហ្មវិហារធម៌ ៤ & សត្រូវជិត-ឆ្ងាយ', titleE: '4 Sublime States (Brahmavihāra)' } },
  { path: '/bedtime-dhamma', name: 'bedtime-dhamma', component: lazyView(() => import('./views/BedtimeDhammaView.vue')), meta: { titleK: 'ធម៌មុនចូលគេង & សមាធិលើគ្រែ', titleE: 'Bedtime Dhamma & Mindful Sleep' } },
  { path: '/barami', name: 'barami', component: lazyView(() => import('./views/BaramiView.vue')), meta: { titleK: 'ព្រះបារមី ៣០ ទស្ស', titleE: '30 Perfections (Pāramī)' } },
  { path: '/ayatana', name: 'ayatana', component: lazyView(() => import('./views/AyatanaView.vue')), meta: { titleK: 'អាយតនៈ ១២ & ធាតុ ១៨', titleE: '12 Sense Bases & 18 Elements' } },
  { path: '/sangayana', name: 'sangayana', component: lazyView(() => import('./views/SangayanaView.vue')), meta: { titleK: 'កិច្ចសង្គាយនាទាំង ៦ លើក', titleE: '6 Buddhist Councils (Saṅgāyanā)' } },
  { path: '/uposatha', name: 'uposatha', component: lazyView(() => import('./views/UposathaView.vue')), meta: { titleK: 'ឧបោសថសីល (សីល ៨) & សីល ១០', titleE: 'Uposatha 8 Precepts & 10 Precepts' } },
  { path: '/nivarana', name: 'nivarana', component: lazyView(() => import('./views/NivaranaView.vue')), meta: { titleK: 'នីវរណធម៌ ៥ យ៉ាង & វិធីកម្ចាត់', titleE: '5 Hindrances & Antidotes' } },
  { path: '/buddha-guna', name: 'buddha-guna', component: lazyView(() => import('./views/BuddhaGunaView.vue')), meta: { titleK: 'ពុទ្ធគុណ ៩ ប្រការ (ឥតិបិសោ)', titleE: '9 Qualities of the Buddha' } },
  { path: '/mangala', name: 'mangala', component: lazyView(() => import('./views/MangalaView.vue')), meta: { titleK: 'មង្គល ៣៨ ប្រការ (មង្គលសូត្រ)', titleE: '38 Blessings (Mangala Sutta)' } },
  { path: '/sangahavatthu', name: 'sangahavatthu', component: lazyView(() => import('./views/SangahavatthuView.vue')), meta: { titleK: 'សង្គហវត្ថុ ៤ ប្រការ (ធម៌ចងចិត្ត)', titleE: '4 Bases of Solidarity' } },
  { path: '/agati', name: 'agati', component: lazyView(() => import('./views/AgatiView.vue')), meta: { titleK: 'អគតិ ៤ យ៉ាង (មាគ៌ាលម្អៀង)', titleE: '4 Corrupt Biases (Agati)' } },
  { path: '/mindful-work', name: 'mindful-work', component: lazyView(() => import('./views/MindfulWorkView.vue')), meta: { titleK: 'ធម៌នៅកន្លែងធ្វើការ & មនុស្សពុល', titleE: 'Mindful Work & Toxic Colleagues' } },
  { path: '/punnakiriya', name: 'punnakiriya', component: lazyView(() => import('./views/PunnakiriyaView.vue')), meta: { titleK: 'បុណ្យកិរិយាវត្ថុ ១០ ប្រការ', titleE: '10 Bases of Merit Action' } },
  { path: '/ariyadhana', name: 'ariyadhana', component: lazyView(() => import('./views/AriyadhanaView.vue')), meta: { titleK: 'អរិយទ្រព្យ ៧ ប្រការ (ទ្រព្យឆ្លងភព)', titleE: '7 Noble Treasures' } },
  { path: '/katannu', name: 'katannu', component: lazyView(() => import('./views/KatannuView.vue')), meta: { titleK: 'កតញ្ញូតាធម៌ & គុណមាតាបិតា', titleE: 'Filial Piety & Parents' } },
  { path: '/kammpatha', name: 'kammpatha', component: lazyView(() => import('./views/KammpathaView.vue')), meta: { titleK: 'កុសលកម្មបថ ១០ & អកុសលកម្មបថ ១០', titleE: '10 Wholesome & Unwholesome Courses' } },
  { path: '/similes', name: 'similes', component: lazyView(() => import('./views/SimilesView.vue')), meta: { titleK: 'កំពូលឧបមាធម៌ទាំង ៦ ក្នុងព្រះត្រៃបិដក', titleE: '6 Master Similes in Tipitaka' } },
  { path: '/lay-disciples', name: 'lay-disciples', component: lazyView(() => import('./views/GreatLayDisciplesView.vue')), meta: { titleK: 'ឧបាសក-ឧបាសិកាឆ្នើមសម័យពុទ្ធកាល', titleE: 'Great Lay Disciples' } },
  { path: '/tilakkhana', name: 'tilakkhana', component: lazyView(() => import('./views/TilakkhanaView.vue')), meta: { titleK: 'ទិលក្ខណៈ ៣ (អនិច្ចំ ទុក្ខំ អនត្តា)', titleE: '3 Universal Characteristics' } },
  { path: '/khandha', name: 'khandha', component: lazyView(() => import('./views/KhandhaView.vue')), meta: { titleK: 'បញ្ចក្ខន្ធ ៥ & ឧបមាដុំពពុះទឹក', titleE: '5 Aggregates (Khandha)' } },
  { path: '/appamada', name: 'appamada', component: lazyView(() => import('./views/AppamadaView.vue')), meta: { titleK: 'អប្បមាទធម៌ & ព្រះបច្ឆិមវាចា', titleE: 'Appamada & Buddha Final Words' } },
  { path: '/sacca-kicca', name: 'sacca-kicca', component: lazyView(() => import('./views/SaccaKiccaView.vue')), meta: { titleK: 'អរិយសច្ច ៤ & កិច្ច ១២ ប្រការ', titleE: '4 Truths & 12 Tasks' } },
  { path: '/satipatthana', name: 'satipatthana', component: lazyView(() => import('./views/SatipatthanaView.vue')), meta: { titleK: 'មហាសតិបដ្ឋាន ៤ (ឯកាយនោ មគ្គោ)', titleE: '4 Foundations of Mindfulness' } },
  { path: '/bojjhanga', name: 'bojjhanga', component: lazyView(() => import('./views/BojjhangaView.vue')), meta: { titleK: 'ពោជ្ឈង្គ ៧ & ឱសថព្យាបាលរោគ', titleE: '7 Factors of Awakening' } },
  { path: '/kalyanamitta', name: 'kalyanamitta', component: lazyView(() => import('./views/KalyanamittaView.vue')), meta: { titleK: 'កល្យាណមិត្ត (មិត្តពិត ៤ vs ក្លែង ៤)', titleE: 'True vs False Friends' } },
  { path: '/jhana', name: 'jhana', component: lazyView(() => import('./views/JhanaView.vue')), meta: { titleK: 'រូបឈាន ៤ ពិស្តារ & ឧបមា ៤', titleE: '4 Rupa Jhanas' } },
  { path: '/triple-gem-guna', name: 'triple-gem-guna', component: lazyView(() => import('./views/DhammaSanghaGunaView.vue')), meta: { titleK: 'ធម្មគុណ ៦ & សង្ឃគុណ ៩', titleE: 'Virtues of Dhamma & Sangha' } },
  { path: '/abhinha', name: 'abhinha', component: lazyView(() => import('./views/AbhinhaView.vue')), meta: { titleK: 'អភិណ្ហបច្ចវេក្ខណៈ ៥ យ៉ាង', titleE: '5 Daily Contemplations' } },
  { path: '/arupa-jhana', name: 'arupa-jhana', component: lazyView(() => import('./views/ArupaJhanaView.vue')), meta: { titleK: 'អរូបឈាន ៤ & និរោធសមាបត្តិ', titleE: '4 Formless Absorptions & Nirodha' } },
  { path: '/vipassanupakkilesa', name: 'vipassanupakkilesa', component: lazyView(() => import('./views/VipassanupakkilesaView.vue')), meta: { titleK: 'វិបស្សនូបកិលេស ១០ យ៉ាង', titleE: '10 Corruptions of Insight' } },
  { path: '/asava', name: 'asava', component: lazyView(() => import('./views/AsavaView.vue')), meta: { titleK: 'អាសវធម៌ ៤ & មាគ៌ាខីណាស្រព', titleE: '4 Cankers (Āsava) & Freedom' } },
  { path: '/uposatha-types', name: 'uposatha-types', component: lazyView(() => import('./views/UposathaTypesView.vue')), meta: { titleK: 'ឧបោសថ ៣ ប្រភេទ (អរិយឧបោសថ)', titleE: '3 Types of Uposatha' } },
  { path: '/anusaya', name: 'anusaya', component: lazyView(() => import('./views/AnusayaView.vue')), meta: { titleK: 'អនុសយធម៌ ៧ (កិលេសដេកសម្ងំ)', titleE: '7 Latent Tendencies' } },
  { path: '/visuddhi', name: 'visuddhi', component: lazyView(() => import('./views/VisuddhiView.vue')), meta: { titleK: 'វិសុទ្ធិ ៧ ប្រការ (ឧបមារថ ៧ ផ្លាស់)', titleE: '7 Stages of Purification' } },
  { path: '/vessantara', name: 'vessantara', component: lazyView(() => import('./views/VessantaraView.vue')), meta: { titleK: 'ព្រះវេស្សន្តរ & មហាទាន ៥ យ៉ាង', titleE: 'Vessantara & 5 Great Gifts' } },
  { path: '/kalama-sutta', name: 'kalama-sutta', component: lazyView(() => import('./views/KalamaSuttaView.vue')), meta: { titleK: 'កាលាមសូត្រ & ជំនឿ ១០ យ៉ាង', titleE: 'Kālāma Sutta & Free Inquiry' } },
  { path: '/sammappadhana', name: 'sammappadhana', component: lazyView(() => import('./views/SammappadhanaView.vue')), meta: { titleK: 'សម្មប្បធាន ៤ (ព្យាយាមត្រូវ ៤)', titleE: '4 Right Strivings' } },
  { path: '/iddhipada', name: 'iddhipada', component: lazyView(() => import('./views/IddhipadaView.vue')), meta: { titleK: 'ឥទ្ធិបាទ ៤ (ក្បួនសម្រេចជោគជ័យ)', titleE: '4 Bases of Success' } },
  { path: '/metta-sutta', name: 'metta-sutta', component: lazyView(() => import('./views/MettaSuttaView.vue')), meta: { titleK: 'មេត្តាសូត្រ & អានិសង្ស ១១ យ៉ាង', titleE: 'Mettā Sutta & 11 Blessings' } },
  { path: '/six-speeches', name: 'six-speeches', component: lazyView(() => import('./views/SixSpeechesView.vue')), meta: { titleK: 'វាចា ៦ ប្រភេទរបស់ព្រះពុទ្ធ', titleE: '6 Classes of Speech' } },
  { path: '/dhammacakka', name: 'dhammacakka', component: lazyView(() => import('./views/DhammacakkaView.vue')), meta: { titleK: 'ធម្មចក្កប្បវត្តនសូត្រ (បឋមទេសនា)', titleE: 'First Discourse (Dhammacakka)' } },
  { path: '/anattalakkhana', name: 'anattalakkhana', component: lazyView(() => import('./views/AnattalakkhanaView.vue')), meta: { titleK: 'អនត្តលក្ខណសូត្រ (ព្រះអរហន្ត ៦ អង្គ)', titleE: 'Anattalakkhaṇa Sutta (Non-Self)' } },
  { path: '/sanghadana', name: 'sanghadana', component: lazyView(() => import('./views/SanghadanaView.vue')), meta: { titleK: 'សង្ឃទាន vs បុគ្គលិកទាន', titleE: 'Saṅghadāna & Individual Offerings' } },
  { path: '/upadana', name: 'upadana', component: lazyView(() => import('./views/UpadanaView.vue')), meta: { titleK: 'ឧបាទាន ៤ យ៉ាង (ចំណងតោងទាម ៤)', titleE: '4 Clingings (Upādāna)' } },
  { path: '/dhamma-hearing', name: 'dhamma-hearing', component: lazyView(() => import('./views/DhammaHearingView.vue')), meta: { titleK: 'អានិសង្សនៃការស្តាប់ធម៌ ៥ យ៉ាង', titleE: '5 Blessings of Hearing Dhamma' } },
  { path: '/gahi-sukha', name: 'gahi-sukha', component: lazyView(() => import('./views/GahiSukhaView.vue')), meta: { titleK: 'សុខ ៤ យ៉ាងរបស់គ្រហស្ថ', titleE: '4 Happinesses of Householders' } },
  { path: '/macchariya', name: 'macchariya', component: lazyView(() => import('./views/MacchariyaView.vue')), meta: { titleK: 'មច្ឆរិយៈ ៥ យ៉ាង (ភាពកំណាញ់ ៥)', titleE: '5 Kinds of Stinginess' } },
  { path: '/sappurisa', name: 'sappurisa', component: lazyView(() => import('./views/SappurisaView.vue')), meta: { titleK: 'សប្បុរិសធម៌ ៧ (មនុស្សថ្លៃថ្នូរ)', titleE: '7 Qualities of a Noble Person' } },
  { path: '/paticcasamuppada', name: 'paticcasamuppada', component: lazyView(() => import('./views/PaticcasamuppadaView.vue')), meta: { titleK: 'បដិច្ចសមុប្បាទ ១២ (ខ្សែចង្វាក់នៃទុក្ខ)', titleE: '12 Links of Dependent Origination' } },
  { path: '/dhatu', name: 'dhatu', component: lazyView(() => import('./views/DhatuView.vue')), meta: { titleK: 'ធាតុ ១៨ នៃសភាវពិត', titleE: '18 Elements of Reality' } },
  { path: '/niyama', name: 'niyama', component: lazyView(() => import('./views/NiyamaView.vue')), meta: { titleK: 'ធម្មនិយាម ៥ (ច្បាប់ចក្រវាល)', titleE: '5 Universal Cosmic Laws' } },
  { path: '/carita', name: 'carita', component: lazyView(() => import('./views/CaritaView.vue')), meta: { titleK: 'ចរិត ៦ & កម្មដ្ឋានសមគួរ', titleE: '6 Temperaments & Meditations' } },
  { path: '/cakka', name: 'cakka', component: lazyView(() => import('./views/CakkaView.vue')), meta: { titleK: 'ចក្ក ៤ (កង់នៃភាពចម្រើន)', titleE: '4 Wheels of Prosperity' } },
  { path: '/maranasanna', name: 'maranasanna', component: lazyView(() => import('./views/MaranasannaView.vue')), meta: { titleK: 'មរណាសន្នកាល & និមិត្ត ៣', titleE: 'Death-Proxy Process & 3 Signs' } },
  { path: '/devaduta', name: 'devaduta', component: lazyView(() => import('./views/DevadutaView.vue')), meta: { titleK: 'ទេវទូត ៥ (សារដាស់តឿនសតិ)', titleE: '5 Divine Messengers' } },
  { path: '/abhinna', name: 'abhinna', component: lazyView(() => import('./views/AbhinnaView.vue')), meta: { titleK: 'អភិញ្ញា ៦ & វិជ្ជា ៣', titleE: '6 Supernormal Knowledges' } },
  { path: '/dasabala', name: 'dasabala', component: lazyView(() => import('./views/DasabalaView.vue')), meta: { titleK: 'ទសពលញាណ ១០ (កម្លាំងព្រះពុទ្ធ)', titleE: '10 Powers of a Buddha' } },
  { path: '/caturarakkha', name: 'caturarakkha', component: lazyView(() => import('./views/CaturarakkhaView.vue')), meta: { titleK: 'ចតុរារក្ខធម៌ ៤ (អាវក្រោះការពារចិត្ត)', titleE: '4 Guardian Meditations' } },
  { path: '/vimokkha', name: 'vimokkha', component: lazyView(() => import('./views/VimokkhaView.vue')), meta: { titleK: 'វិមោក្ខ ៣ (ទ្វាររួចផុតទុក្ខ)', titleE: '3 Gateways to Liberation' } },
  { path: '/vipassana-bhumi', name: 'vipassana-bhumi', component: lazyView(() => import('./views/VipassanaBhumiView.vue')), meta: { titleK: 'វិបស្សនាភូមិ ៦ (ដីនៃបញ្ញា)', titleE: '6 Soils of Insight' } },
  { path: '/ariyavamsa', name: 'ariyavamsa', component: lazyView(() => import('./views/AriyavamsaView.vue')), meta: { titleK: 'អរិយវង្សធម៌ ៤ (វង្សព្រះអរិយៈ)', titleE: '4 Noble Lineage Virtues' } },
  { path: '/vuddhi', name: 'vuddhi', component: lazyView(() => import('./views/VuddhiView.vue')), meta: { titleK: 'វុឌ្ឍិធម៌ ៤ (ចម្រើនបញ្ញា)', titleE: '4 Factors of Spiritual Growth' } },
  { path: '/yonisomanasikara', name: 'yonisomanasikara', component: lazyView(() => import('./views/YonisomanasikaraView.vue')), meta: { titleK: 'យោនិសោមនសិការៈ (គិតដល់ឫសគល់)', titleE: 'Wise Attention & Reframing' } },
  { path: '/ditthi', name: 'ditthi', component: lazyView(() => import('./views/DitthiView.vue')), meta: { titleK: 'សម្មាទិដ្ឋិ ១០ & មិច្ឆាទិដ្ឋិ ៣', titleE: '10 Right Views & 3 Wrong Views' } },
  { path: '/garuka-kamma', name: 'garuka-kamma', component: lazyView(() => import('./views/GarukaKammaView.vue')), meta: { titleK: 'គរុកម្ម ៥ & កម្ម ៤ ជាន់', titleE: '5 Heinous Crimes & Karmic Order' } },
  { path: '/mitta', name: 'mitta', component: lazyView(() => import('./views/MittaView.vue')), meta: { titleK: 'មិត្ត ៨ ជំពូក (៤ ពិត & ៤ ក្លែងក្លាយ)', titleE: '4 True Friends & 4 False Friends' } },
  { path: '/paccaya-requisites', name: 'paccaya-requisites', component: lazyView(() => import('./views/PaccayaRequisitesView.vue')), meta: { titleK: 'បច្ច័យ ៤ & បច្ចវេក្ខណវិធី', titleE: '4 Requisites & Mindful Use' } },
  { path: '/samyojana', name: 'samyojana', component: lazyView(() => import('./views/SamyojanaView.vue')), meta: { titleK: 'សំយោជនៈ ១០ & អរិយបុគ្គល ៤', titleE: '10 Fetters & 4 Noble Stages' } },
  { path: '/akusala-mula', name: 'akusala-mula', component: lazyView(() => import('./views/AkusalaMulaView.vue')), meta: { titleK: 'អកុសលមូល ៣ & កុសលមូល ៣', titleE: '3 Unwholesome & 3 Wholesome Roots' } },
  { path: '/aghatapativinaya', name: 'aghatapativinaya', component: lazyView(() => import('./views/AghatapativinayaView.vue')), meta: { titleK: 'វិធីរម្ងាប់កំហឹង ៥ យ៉ាង', titleE: '5 Ways of Subduing Resentment' } },
  { path: '/ahara', name: 'ahara', component: lazyView(() => import('./views/AharaView.vue')), meta: { titleK: 'អាហារ ៤ យ៉ាងដែលចិញ្ចឹមសត្វលោក', titleE: '4 Nutriments Sustaining All Life' } },
  { path: '/paramattha-sacca', name: 'paramattha-sacca', component: lazyView(() => import('./views/ParamatthaSaccaView.vue')), meta: { titleK: 'សម្មុតិសច្ចៈ & បរមត្ថសច្ចៈ', titleE: 'Conventional vs Ultimate Truth' } },
  { path: '/puggala-4', name: 'puggala-4', component: lazyView(() => import('./views/PuggalaFourView.vue')), meta: { titleK: 'បុគ្គល ៤ ជំពូកក្នុងលោក', titleE: '4 Types of Persons (Dark to Light)' } },
  { path: '/vitakkasanthana', name: 'vitakkasanthana', component: lazyView(() => import('./views/VitakkasanthanaView.vue')), meta: { titleK: 'វិធីរម្ងាប់គំនិតអាក្រក់ ៥ យ៉ាង', titleE: '5 Steps to Stop Intrusive Thoughts' } },
  { path: '/natha-dhamma', name: 'natha-dhamma', component: lazyView(() => import('./views/NathaDhammaView.vue')), meta: { titleK: 'ធម៌ជាទីពឹង ១០ ប្រការ', titleE: '10 Virtues of True Self-Reliance' } },
  { path: '/kusala-kammapatha', name: 'kusala-kammapatha', component: lazyView(() => import('./views/KusalaKammapathaView.vue')), meta: { titleK: 'កុសលកម្មបថ ១០ ប្រការ', titleE: '10 Wholesome Courses of Action' } },
  { path: '/vipallasa', name: 'vipallasa', component: lazyView(() => import('./views/VipallasaView.vue')), meta: { titleK: 'វិបល្លាស ១២ (ការភ័ន្តច្រឡំ)', titleE: '12 Cognitive Distortions (Vipallāsa)' } },
  { path: '/sangha-vinaya-lay', name: 'sangha-vinaya-lay', component: lazyView(() => import('./views/SanghaVinayaLayView.vue')), meta: { titleK: 'វិន័យសង្ឃបឋមសម្រាប់គ្រហស្ថ', titleE: 'Lay Guide to Monastic Vinaya' } },
  { path: '/sampajanna', name: 'sampajanna', component: lazyView(() => import('./views/SampajannaView.vue')), meta: { titleK: 'សម្បជញ្ញៈ ៤ ប្រការក្នុងជីវិតការងារ', titleE: '4 Clear Comprehensions in Daily Life' } },
  { path: '/dana-types', name: 'dana-types', component: lazyView(() => import('./views/DanaTypesView.vue')), meta: { titleK: 'ទាន ៣ ជំពូក & បុណ្យ ៣ ជាន់', titleE: '3 Forms of Giving: Material, Safety & Truth' } },
  { path: '/puja-symbolism', name: 'puja-symbolism', component: lazyView(() => import('./views/PujaSymbolismView.vue')), meta: { titleK: 'អត្ថន័យគ្រឿងសក្ការៈបូជា', titleE: 'Symbolism of Buddhist Offerings' } },
  { path: '/vedana', name: 'vedana', component: lazyView(() => import('./views/VedanaView.vue')), meta: { titleK: 'វេទនា ៥ & វិជ្ជាគ្រប់គ្រងអារម្មណ៍', titleE: 'Vedanā 5 & Emotional Mastery' } },
  { path: '/ariya-vinaya', name: 'ariya-vinaya', component: lazyView(() => import('./views/AriyaVinayaView.vue')), meta: { titleK: 'អរិយវិន័យ vs ច្បាប់លោកីយ', titleE: 'Noble Discipline vs Worldly Law' } },
  { path: '/asoka-history', name: 'asoka-history', component: lazyView(() => import('./views/AsokaHistoryView.vue')), meta: { titleK: 'ព្រះបាទធម្មាសោក & ដែនដីសុវណ្ណភូមិ', titleE: 'Emperor Asoka & Mission to Suvaṇṇabhūmi' } },
  { path: '/sukha-levels', name: 'sukha-levels', component: lazyView(() => import('./views/SukhaLevelsView.vue')), meta: { titleK: 'សុខ ៤ ថ្នាក់ក្នុងព្រះពុទ្ធសាសនា', titleE: '4 Ascending Stages of Happiness' } },
  { path: '/saupadisesa-nibbana', name: 'saupadisesa-nibbana', component: lazyView(() => import('./views/SaupadisesaNibbanaView.vue')), meta: { titleK: 'ព្រះនិព្វាន ២ យ៉ាង', titleE: 'Two Nibbāna Realities (With & Without Residue)' } },
  { path: '/catummaharajika', name: 'catummaharajika', component: lazyView(() => import('./views/CatummaharajikaView.vue')), meta: { titleK: 'ចាតុម្មហារាជិកា & មហារាជ ៤ ទិស', titleE: '4 Heavenly Kings (Cātummahārājikā)' } },
  { path: '/citta-daily', name: 'citta-daily', component: lazyView(() => import('./views/CittaDailyView.vue')), meta: { titleK: 'កុសលចិត្ត & អកុសលចិត្តប្រចាំថ្ងៃ', titleE: 'Daily Wholesome vs Unwholesome Mind States' } },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: lazyView(() => import('./views/NotFoundView.vue')), meta: { titleK: '404', titleE: '404' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    // Always start from the top when navigating from another menu to another menu
    return { top: 0, left: 0 }
  }
})

const app = createApp(App)
app.component('SlideDown', SlideDown)
app.use(router)
app.mount('#app')
