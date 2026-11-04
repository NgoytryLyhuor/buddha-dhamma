import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'prompt',
      injectRegister: false,
      includeAssets: ['buddha.jpg', 'favicon.ico', 'icons/favicon.svg', 'icons/apple-touch-icon.png', 'icons/safari-pinned-tab.svg'],
      manifest: {
        name: 'ព្រះធម៌ Buddha Dhamma',
        short_name: 'Buddha Dhamma',
        description: 'ពន្យល់ពាក្យព្រះសម្មាសម្ពុទ្ធ ជាខ្មែរ និងអង់គ្លេស។ The Buddha\'s teachings in Khmer and English.',
        theme_color: '#f5efe0',
        background_color: '#f5efe0',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        lang: 'km',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{css,html,png,jpg,svg,ico,woff2,ttf}', 'assets/index-*.js', 'assets/_plugin-vue_*.js'],
        globIgnores: ['**/assets/*View-*.js', '**/assets/*QaView-*.js'],
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api\//],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'google-fonts-stylesheets' },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'google-fonts-webfonts', expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 } },
          },
          {
            urlPattern: /\/assets\/.*(?:View|QaView)-.*\.js$/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'dhamma-views-cache',
              expiration: { maxEntries: 150, maxAgeSeconds: 60 * 60 * 24 * 30 }
            }
          }
        ],
      },
    }),
  ],
})
