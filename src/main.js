import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

const routes = [
  { path: '/', name: 'home', component: () => import('./views/HomeView.vue') },
  { path: '/core', name: 'core', component: () => import('./views/CoreView.vue') },
  { path: '/abhidhamma', name: 'abhidhamma', component: () => import('./views/AbhidhammaView.vue') },
  { path: '/kamma', name: 'kamma', component: () => import('./views/KammaView.vue') },
  { path: '/ethics', name: 'ethics', component: () => import('./views/EthicsView.vue') },
  { path: '/meditation', name: 'meditation', component: () => import('./views/MeditationView.vue') },
  { path: '/suttas', name: 'suttas', component: () => import('./views/SuttasView.vue') },
  { path: '/life', name: 'life', component: () => import('./views/LifeView.vue') },
  { path: '/gathas', name: 'gathas', component: () => import('./views/GathaView.vue') },
  { path: '/chanting', name: 'chanting', component: () => import('./views/ChantingView.vue') },
  { path: '/glossary', name: 'glossary', component: () => import('./views/GlossaryView.vue') },
  { path: '/stories', name: 'stories', component: () => import('./views/StoriesView.vue') },
  { path: '/questions', name: 'questions', component: () => import('./views/QuestionsView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')