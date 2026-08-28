import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { inject } from '@vercel/analytics'
import App from './App.vue'
import './style.css'
import { getSavedScroll, saveScroll, SCROLL_THRESHOLD } from './composables/useReadingProgress'

inject()

const routes = [
  { path: '/', name: 'home', component: () => import('./views/HomeView.vue'), meta: { titleK: 'ព្រះធម៌', titleE: 'Buddha Dhamma' } },
  { path: '/core', name: 'core', component: () => import('./views/CoreView.vue'), meta: { titleK: 'ធម៌មូលដ្ឋាន', titleE: 'Core Teachings' } },
  { path: '/abhidhamma', name: 'abhidhamma', component: () => import('./views/AbhidhammaView.vue'), meta: { titleK: 'អភិធម្ម', titleE: 'Abhidhamma' } },
  { path: '/kamma', name: 'kamma', component: () => import('./views/KammaView.vue'), meta: { titleK: 'កម្ម និងផល', titleE: 'Kamma & Result' } },
  { path: '/ethics', name: 'ethics', component: () => import('./views/EthicsView.vue'), meta: { titleK: 'សីល និងបារមី', titleE: 'Ethics & Perfections' } },
  { path: '/meditation', name: 'meditation', component: () => import('./views/MeditationView.vue'), meta: { titleK: 'សមាធិ', titleE: 'Meditation' } },
  { path: '/suttas', name: 'suttas', component: () => import('./views/SuttasView.vue'), meta: { titleK: 'ព្រះសូត្រ', titleE: 'Suttas' } },
  { path: '/life', name: 'life', component: () => import('./views/LifeView.vue'), meta: { titleK: 'ជីវប្រវត្តិ', titleE: 'Life of the Buddha' } },
  { path: '/gathas', name: 'gathas', component: () => import('./views/GathaView.vue'), meta: { titleK: 'គាថាព្រះធម៌', titleE: 'Gāthā' } },
  { path: '/chanting', name: 'chanting', component: () => import('./views/ChantingView.vue'), meta: { titleK: 'សូត្រ ១០', titleE: 'Chanting' } },
  { path: '/glossary', name: 'glossary', component: () => import('./views/GlossaryView.vue'), meta: { titleK: 'វចនានុក្រមធម៌', titleE: 'Glossary' } },
  { path: '/stories', name: 'stories', component: () => import('./views/StoriesView.vue'), meta: { titleK: 'រឿងល្បីៗ', titleE: 'Stories' } },
  { path: '/questions', name: 'questions', component: () => import('./views/QuestionsView.vue'), meta: { titleK: 'សំណួរ–ចម្លើយ', titleE: 'Q&A' } },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: () => import('./views/NotFoundView.vue'), meta: { titleK: '404', titleE: '404' } },
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
