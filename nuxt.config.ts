// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  image: {
    fakestoreapi: {
      baseURL: "",
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vee-validate/nuxt",
    "@invictus.codes/nuxt-vuetify",
    "nuxt-icon",
  ],
  app: {
    head:{
      title: 'Nuxt msbnet',
      meta: [
        { name: 'description', content: 'Estudo Nuxt 3'}
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }
})