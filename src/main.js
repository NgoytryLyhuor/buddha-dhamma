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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')