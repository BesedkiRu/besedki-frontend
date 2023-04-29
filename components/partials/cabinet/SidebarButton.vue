<template>
  <button type="button" class="flex gap-4">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SidebarButton',
  props: {
    description: {
      type: String,
      required: true,
    },
  },
})
</script>
