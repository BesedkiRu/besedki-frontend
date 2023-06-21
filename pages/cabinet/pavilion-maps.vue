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
    <div v-if="maps.length" class="flex flex-col gap-5 items-center">
      <div class="flex gap-[54px] flex-wrap">
        <pavilion-map v-for="(map, index) in maps" :key="index" :map="map" />
      </div>
    </div>
    <div v-else class="flex gap-[124px] items-center justify-center">
      <div class="flex flex-col gap-9 items-center">
        <div class="flex flex-col gap-5 items-center font-medium">
          <div class="text-4xl">У вас пока нет карт беседок</div>
          <div class="text-[32px] text-gray">Пора это исправить :)</div>
        </div>
        <nuxt-link to="/pavilion/map/create">
          <base-button button-style="secondary" size="large"
            >Создать карту беседок</base-button
          >
        </nuxt-link>
      </div>
      <i-empty-bills :size="303"></i-empty-bills>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BaseButton from '~/components/base/BaseButton.vue'
import PavilionMap from '~/components/partials/pavilion/PavilionMap.vue'
import IPlus from '~/components/icons/IPlus.vue'
import { PavilionMapEntity } from '~/config/swagger'
import IEmptyBills from '~/components/icons/IEmptyBills.vue'

export default Vue.extend({
  name: 'PavilionMapsPage',
  components: {
    BaseButton,
    PavilionMap,
    IPlus,
    IEmptyBills,
  },
  layout: 'cabinetLayout',
  data: () => ({
    maps: [] as PavilionMapEntity[],
  }),
})
</script>

<style lang="scss" scoped></style>
