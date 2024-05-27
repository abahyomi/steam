export default defineAppConfig({
    ui: {
      primary: 'blue',
      gray: 'cool',
      notifications: {
        position: 'top-40 bottom-auto'
      },
      overlay: {
        background: 'bg-black',
      }
    },

    nuxtIcon: {
      size: '24px', // default <Icon> size applied
      class: 'icon', // default <Icon> class applied
      aliases: {
        'nuxt': 'logos:nuxt-icon',
      }
    }

    
  })
  