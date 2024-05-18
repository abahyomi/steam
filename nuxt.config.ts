// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  modules: [
    "nuxt-icon",
    '@nuxtjs/google-fonts',
    'nuxt-aos',
    '@formkit/auto-animate/nuxt',
    "@nuxt/ui"
  ],

  googleFonts: {
    families: {
      Poppins: true
    }
  },

  routeRules: { 
    '/web/v1/**': { 
        proxy: { 
          to: "http://localhost:9300/web/v1/**"
        }, 
    } 
  }

})