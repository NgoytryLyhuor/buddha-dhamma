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
