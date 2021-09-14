export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FlashFootball | Scouting, actu, e-sport, votre nouveau média 100% foot',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.png'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/transition.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      theme_color: '#212529',
      name: 'FlashFootball',
      author: 'FlashFootball',
      description: 'AJOUTER UNE DESCRIPTION',
      lang: 'fr',

    },
    manifest: {
      name: 'FlashFootball',
      short_name: 'FlashFootball',
      description: 'AJOUTER UNE DESCRIPTION',
      lang: 'fr',
      theme_color: "#212529",
      background_color: "#212529",
      display: "standalone",
      orientation: "portrait",
      start_url: "/?utm_source=pwa"
    },
    workbox: {

    },
  },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    build: {},
    generate: {
      fallback: true
    },
    layoutTransition: {
      name: 'layout-transition',
      mode: 'out-in'
    },
    pageTransition: {
      name: 'page-transition',
      mode: 'out-in',
    },
}