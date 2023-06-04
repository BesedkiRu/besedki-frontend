<template>
  <div class="flex flex-col gap-10">
    <div class="font-rubik font-medium text-[36px] leading-none">
      История броней
    </div>
    <div
      v-if="billsHistory"
      class="flex flex-col gap-5 items-center justify-center"
    >
      <div class="flex gap-[54px] flex-wrap">
        <pavilion-map v-for="(map, index) in maps" :key="index" :map="map" />
      </div>
    </div>
    <div v-else class="flex gap-[124px] items-center justify-center">
      <div class="flex flex-col gap-9 items-center">
        <div class="flex flex-col gap-5 items-center font-medium">
          <div class="text-4xl leading-none">У вас пока нет броней</div>
          <div class="text-[32px] text-gray leading-none">
            Пора это исправить :)
          </div>
        </div>
        <nuxt-link to="/">
          <base-button button-style="secondary" size="large"
            >Посмотреть беседки</base-button
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
import IEmptyBills from '~/components/icons/IEmptyBills.vue'
import { PavilionMapEntity } from '~/config/swagger'

export default Vue.extend({
  name: 'BookingsPage',
  components: {
    BaseButton,
    PavilionMap,
    IEmptyBills,
  },
  layout: 'cabinetLayout',
  data: () => ({
    billsHistory: false,
    maps: [
      {
        id: 1,
        name: 'Беседка',
        address: 'г. Бавлы, Ленина, 16',
      },
      {
        id: 2,
        name: 'Домик',
        address: 'тестовый адрес 116',
      },
      {
        id: 3,
        name: 'Бомик',
        address: 'тестовый адрес 116',
      },
    ] as PavilionMapEntity[],
  }),
})
</script>

<style scoped>
* {
  font-family: 'Roboto', sans-serif;
}
</style>
