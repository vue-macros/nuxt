import VueMacros from 'unplugin-vue-macros/vite'

export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  vite: {
    plugins: [VueMacros()],
  },
})
