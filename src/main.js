import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'
import App from './App.vue'
import './style.css'
import { getSavedScroll, saveScroll, SCROLL_THRESHOLD } from './composables/useReadingProgress'

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
  { path: '/paccaya', name: 'paccaya', component: lazyView(() => import('./views/PaccayaView.vue')), meta: { titleK: 'បដិច្ចសមុប្បាទ', titleE: 'Dependent Origination' } },
  { path: '/sangha', name: 'sangha', component: lazyView(() => import('./views/SanghaView.vue')), meta: { titleK: 'ជីវិតព្រះសង្ឃ', titleE: 'Monastic Life' } },
  { path: '/daily', name: 'daily', component: lazyView(() => import('./views/DailyView.vue')), meta: { titleK: 'បដិបត្តិប្រចាំថ្ងៃ', titleE: 'Daily Practice' } },
  { path: '/recollections', name: 'recollections', component: lazyView(() => import('./views/RecollectionView.vue')), meta: { titleK: 'អនុស្សតិ', titleE: 'Recollections' } },
  { path: '/ariya', name: 'ariya', component: lazyView(() => import('./views/AriyaView.vue')), meta: { titleK: 'អរិយបុគ្គល', titleE: 'Noble Persons' } },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: lazyView(() => import('./views/NotFoundView.vue')), meta: { titleK: '404', titleE: '404' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (from.matched.length) saveScroll(from.path, window.scrollY || 0)
    const saved = getSavedScroll()[to.path]
    if (saved > SCROLL_THRESHOLD && from.matched.length) {
      return { top: saved, behavior: 'auto' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
