export default defineNuxtConfig({
  modules: ['@vue-macros/nuxt', '@vueuse/nuxt', '@nuxt/devtools'],
  macros: {
    setupSFC: true,
  },
})
