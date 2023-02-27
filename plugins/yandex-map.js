import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'
const settings = {
    apiKey: '99d76ffb-aab6-489b-a6b8-b4851f4d00c8',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1'
}

Vue.use(YmapPlugin, settings)
