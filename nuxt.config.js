import { resolve } from 'path'

export default {
  head: {
    title: 'besedki-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  server: {
    port: 5050, // default: 3000
  },

  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:5050',
  },

  css: ['~/assets/scss/global.scss'],

  alias: {
    assets: resolve(__dirname, './assets/'),
  },

  plugins: [],

  components: false,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    '@nuxtjs/i18n',
    'cookie-universal-nuxt',
  ],

  toast: {
    position: 'top-right',
    duration: 4000,
  },

  moment: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'access',
          global: true,
          type: 'Bearer',
        },
        refreshToken: {
          property: 'refresh',
          data: 'refresh',
          tokenRequired: true,
        },
        user: {
          property: false,
        },
        endpoints: {
          login: { url: '/api/v1/token/', method: 'post' },
          refresh: { url: '/api/v1/token/refresh/', method: 'post' },
          user: { url: '/api/v1/users/me/', method: 'get' },
          logout: false,
        },
      },
    },
    redirect: {
      login: '/',
      logout: '/',
      home: '/calendar',
    },
    resetOnError: true,
  },

  colorMode: {
    classSuffix: '',
  },

  axios: {
    proxy: true,
  },

  proxy: {},

  pwa: {},

  build: {
    transpile: [
      'vee-validate/dist/rules',
      'vue-final-modal',
      'vue-loading-overlay',
    ],
  },
}
