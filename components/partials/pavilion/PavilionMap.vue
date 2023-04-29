<template>
  <div class="flex flex-col gap-2.5">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import { PavilionMapEntity } from '~/config/swagger'
export default Vue.extend({
  name: 'PavilionMap',
  props: {
    map: {
      type: Object as PropType<PavilionMapEntity>,
      required: true,
    },
  },
})
</script>

<style></style>
