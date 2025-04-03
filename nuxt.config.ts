// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  telemetry: false,
  ssr: true,

  runtimeConfig: {
    UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY,
    NO_DANGER: process.env.NO_DANGER
  },

  vite: {
    server:{
      allowedHosts: true
    }
  },

  nitro: {
    preset: "cloudflare_pages",
    esbuild: {
      options: {
        target: 'esnext'
      }
    }
  },

  css: [
      '@/assets/css/main.css',
  ],
  compatibilityDate: '2025-04-03',
  modules: ['usebootstrap']
})