<template>
  <div class="flex flex-col gap-[50px]">
    <div class="flex gap-10 items-center">
      <div class="text-5xl font-medium">Карты беседок</div>
      <base-button size="large">
        <nuxt-link class="flex gap-1 items-center" to="/pavilion/map/create">
          <i-plus :size="24" />
          <div class="text-base">Создать карту беседок</div>
        </nuxt-link>
      </base-button>
    </div>
    <div class="flex flex-col gap-5 items-center">
      <div class="flex gap-[54px] flex-wrap">
        <pavilion-map v-for="(map, index) in maps" :key="index" :map="map" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseButton from '~/components/base/BaseButton.vue'
import PavilionMap from '~/components/partials/pavilion/PavilionMap.vue'
import IPlus from '~/components/icons/IPlus.vue'
import { PavilionMapEntity } from '~/config/swagger'

export default Vue.extend({
  name: 'PavilionMapsPage',
  components: {
    BaseButton,
    PavilionMap,
    IPlus,
  },
  layout: 'cabinetLayout',
  data: () => ({
    maps: [] as PavilionMapEntity[],
  }),
})
</script>

<style lang="scss" scoped></style>
