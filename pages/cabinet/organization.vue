<template>
  <div class="flex flex-col gap-[95px]">
    <div class="flex gap-[75px]">
      <div class="w-[262px] h-[249px] bg-gray rounded-full"></div>
      <div class="flex flex-col gap-[30px]">
        <div class="text-[60px] leading-none font-medium">
          {{ $auth.user.organization.name }}
        </div>
        <div class="flex flex-col gap-5 text-[24px] leading-none">
          <div class="flex gap-[15px] items-center">
            <i-phone :size="30" />
            {{ $auth.user.organization.phone }}
          </div>
          <div class="flex gap-[15px] items-center">
            <i-mail :size="30" />
            {{ $auth.user.organization.email }}
          </div>
        </div>
        <nuxt-link to="/organization/settings">
          <base-button size="large" button-style="primary"
            >Редактировать организацию</base-button
          >
        </nuxt-link>
      </div>
    </div>
    <div class="flex flex-col gap-10">
      <div class="font-rubik font-medium text-[36px] leading-none">
        Карты беседок
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IPhone from '~/components/icons/IPhone.vue'
import IMail from '~/components/icons/IMail.vue'
import BaseButton from '~/components/base/BaseButton.vue'
import PavilionMap from '~/components/partials/pavilion/PavilionMap.vue'
import IEmptyBills from '~/components/icons/IEmptyBills.vue'
import { PavilionMapEntity } from '~/config/swagger'

export default Vue.extend({
  name: 'CabinetPage',
  components: {
    IPhone,
    IMail,
    BaseButton,
    PavilionMap,
    IEmptyBills,
  },
  layout: 'cabinetLayout',
  data: () => ({
    maps: [] as PavilionMapEntity[],
  }),
})
</script>

<style scoped>
* {
  font-family: 'Roboto', sans-serif;
}
</style>
