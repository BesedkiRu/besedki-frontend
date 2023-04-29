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
    DADATA_TOKEN: process.env.DADATA_TOKEN 
  },

  css: ['~/assets/scss/global.scss'],

  alias: {
    assets: resolve(__dirname, './assets/'),
  },

  plugins: [
    { src: '~/plugins/vee-validate.js' },
    { src: '~/plugins/v-mask.js' },
    {src: '~/plugins/yandex-map.js', mode: 'client'} ,
    {src: '~/plugins/servicePlugins/utils.ts'},
    {src: '~/plugins/lodash.js'}
  ],

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

  router: {
    middleware: ['auth']
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'access_token',
          global: true,
          type: 'Bearer',
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh',
          tokenRequired: true,
        },
        user: {
          property: false,
        },
        endpoints: {
          login: { url: '/api/auth/login/', method: 'post' },
          refresh: { url: '/api/auth/refresh/', method: 'post' },
          user: { url: '/api/user/me/', method: 'get' },
          logout: false,
        },
      },
    },
    redirect: {
      login: '/login',
      logout: '/', 
      home: '/cabinet',
    },
    resetOnError: true,
  },

  colorMode: {
    classSuffix: '',
  },

  axios: {
    proxy: true,
    credentials: true,
  },
  proxy: {
    '/api': {
      target: process.env.API_URL,
      changeOrigin: true,
    },
  },

  pwa: {},

  build: {
    transpile: [
      'vee-validate/dist/rules',
      'vue-final-modal',
      'vue-loading-overlay',
    ],
  },
}
