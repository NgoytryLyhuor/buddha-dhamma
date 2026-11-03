import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'
import App from './App.vue'
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
  { path: '/:pathMatch(.*)*', name: 'notfound', component: lazyView(() => import('./views/NotFoundView.vue')), meta: { titleK: '404', titleE: '404' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    // Always start from the top when navigating from another menu to another menu
    return { top: 0, left: 0 }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
