<template>
  <button
    class="flex items-center w-full rounded-[10px] gap-4 py-[13px] pl-4 pr-2 active:bg-background-secondary active:text-blue-link hover:bg-background-light hover:text-blue-link duration-200"
    type="button"
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
