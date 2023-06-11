import { ActionTree } from 'vuex'
import { OAuthState } from './state'
import { RootState } from '~/store'

const actions: ActionTree<OAuthState, RootState> = {
  generateGoogleLink(_) {
    return `https://accounts.google.com/o/oauth2/v2/auth?client_id=${this.app.$config.GOOGLE_CLIENT_ID}&redirect_uri=${this.app.$config.BASE_URL}/callback/google&response_type=code&scope=openid profile email&prompt=consent&access_type=offline`
  },
}

export default actions
