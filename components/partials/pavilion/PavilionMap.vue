<template>
  <div
    class="flex w-[460px] flex-shrink-0 flex-col gap-2.5 rounded-[20px] bg-white shadow-mapItem"
  >
    <div class="bg-black/40 h-[239px] relative rounded-[20px]">
      <nuxt-link
        class="absolute right-0 bg-background-primary mt-2.5 mr-3 rounded-[10px] py-[13px] px-[15px]"
        to="/pavilion/map/setting"
        ><i-settings :size="24"
      /></nuxt-link>
    </div>
    <div class="pl-[29px] pb-6 flex flex-col gap-2.5">
      <div class="text-2xl leading-7">{{ map.name }}</div>
      <div class="text-lg leading-[21px]">{{ map.address }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import { PavilionMapEntity } from '~/config/swagger'
import ISettings from '~/components/icons/ISettings.vue'
export default Vue.extend({
  name: 'PavilionMap',
  components: { ISettings },
  props: {
    map: {
      type: Object as PropType<PavilionMapEntity>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
