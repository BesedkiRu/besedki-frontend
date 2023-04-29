<template>
  <button
    class="flex items-center w-full gap-4 py-[13px] pl-4 pr-2 active:bg-background-secondary hover:bg-background-light"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SidebarButton',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped></style>
