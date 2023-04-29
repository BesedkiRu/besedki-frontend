<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.9243 4C13.4766 4 13.9243 4.44772 13.9243 5V11L19.9243 11C20.4766 11 20.9243 11.4477 20.9243 12C20.9243 12.5523 20.4766 13 19.9243 13L13.9243 13L13.9243 19C13.9243 19.5523 13.4766 20 12.9243 20C12.372 20 11.9243 19.5523 11.9243 19L11.9233 13L5.92432 13C5.37203 13 4.92432 12.5523 4.92432 12C4.92432 11.4477 5.37203 11 5.92432 11L11.9233 11L11.9243 5C11.9243 4.44772 12.372 4 12.9243 4Z"
      :fill="iconColor"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IPlus',
  props: {
    size: {
      type: [Number, String],
      default: 18,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
  },
  computed: {
    iconColor(): string {
      return this.$utils.getColor(this.color)
    },
  },
})
</script>

<style lang="scss" scoped></style>
