import { Plugin } from '@nuxt/types'
import { UtilsService } from '~/services/utils/utils.service'

declare module 'vue/types/vue' {
  interface Vue {
    $utils: UtilsService
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $utils: UtilsService
  }

  interface Context {
    $utils: UtilsService
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $utils: UtilsService
  }
}

const utils: Plugin = (_, inject) => {
  inject('utils', new UtilsService())
}

export default utils