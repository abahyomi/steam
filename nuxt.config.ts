// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

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
  }

})