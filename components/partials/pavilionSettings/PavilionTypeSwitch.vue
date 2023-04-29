<template>
  <div
    class="flex gap-2.5 p-2.5 border border-border-gray bg-background-primary rounded-[20px]"
  >
    <base-button
      class="w-1/2"
      size="large"
      :button-style="value === PavilionType.PAVILION ? 'primary' : 'secondary'"
      @click="$emit('input', PavilionType.PAVILION)"
    >
      Беседка
    </base-button>
    <base-button
      class="w-1/2"
      size="large"
      :button-style="value === PavilionType.HOUSE ? 'primary' : 'secondary'"
      @click="$emit('input', PavilionType.HOUSE)"
    >
      Домик
    </base-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropType } from 'vue/types/v3-component-props'
import BaseButton from '~/components/base/BaseButton.vue'
import { PavilionType } from '~/config/enums'
export default Vue.extend({
  name: 'PavilionTypeSwitch',
  components: {
    BaseButton,
  },
  props: {
    value: {
      type: String as PropType<PavilionType>,
      default: '',
    },
  },
  data() {
    return {
      PavilionType,
    }
  },
})
</script>

<style></style>
