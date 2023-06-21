<template>
  <client-only>
    <div
      class="w-full h-full rounded-[10px] shadow-main overflow-hidden relative"
    >
      <div class="absolute z-[1] right-0">
        <div class="flex gap-5 justify-end pr-5 pt-5">
          <base-button
            class="max-w-[167px] w-full"
            size="large"
            button-style="primary"
          >
            <nuxt-link to="/cabinet/">Личный кабинет</nuxt-link>
          </base-button>
          <base-button class="w-[170px]" size="large" button-style="primary">
            <span>Сохранить карту</span>
          </base-button>
        </div>
      </div>
      <yandex-map
        :controls="['zoomControl']"
        :coords="coords"
        :zoom="17"
        @click="addPavilion"
      >
        <ymap-marker
          v-for="(pavilionCoords, index) in pavilionsCoords"
          :key="index"
          :coords="pavilionCoords"
          :icon="markerIcon"
          :marker-id="index"
        />
      </yandex-map>
    </div>
  </client-only>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseButton from '~/components/base/BaseButton.vue'

export default Vue.extend({
  name: 'PavilionsYandexMap',
  components: { BaseButton },
  data() {
    return {
      pavilionsCoords: [] as any,
      coords: [],
      markerIcon: {
        layout: 'default#image',
        imageSize: [30, 30],
        imageOffset: [-10, -20],
        imageHref: require('~/assets/icons/i-home.svg'),
      },
    }
  },
  created() {
    if (process.client) {
      const pavilionMap = JSON.parse(localStorage.pavilionMap)
      this.coords = pavilionMap.coords
    }
  },
  methods: {
    addPavilion(e: any) {
      const coords = e.get('coords')
      this.pavilionsCoords.push(coords)
      this.$emit('add-pavilion', coords)
    },
  },
})
</script>

<style lang="scss" scoped>
.ymap-container {
  height: 100%;
}
</style>
