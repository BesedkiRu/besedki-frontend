import Vue from 'vue'
import VueLodash from 'vue-lodash'
import debounce from 'lodash/debounce'

Vue.use(VueLodash, { lodash: { debounce } })