<template>
  <label
    v-if="fileInputId.length"
    class="base-button !inline-flex cursor-pointer"
    :class="[getModifiers, { active: isActive }]"
    :for="fileInputId"
    @click="$emit('click')"
    ><slot
  /></label>
  <button
    v-else
    :type="type"
    class="base-button"
    :disabled="disabled"
    :class="[getModifiers, { active: isActive }]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ClassModifier } from '~/config/types'

type ButtonSize = 'medium' | 'large' | 'small'
type ButtonType = 'button' | 'submit' | 'reset'
type ButtonStyle = 'primary' | 'secondary' | 'outline' | 'flat'
export default Vue.extend({
  name: 'BaseButton',
  props: {
    size: {
      type: String as PropType<ButtonSize>,
      default: 'medium',
    },
    type: {
      type: String as PropType<ButtonType>,
      default: 'button',
    },
    buttonStyle: {
      type: String as PropType<ButtonStyle>,
      default: 'primary',
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    fileInputId: {
      type: String,
      default: '',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getModifiers(): ClassModifier {
      return {
        'base-button_size_medium': this.size === 'medium',
        'base-button_size_large': this.size === 'large',
        'base-button_size_small': this.size === 'small',
        'base-button_primary': this.buttonStyle === 'primary',
        'base-button_secondary': this.buttonStyle === 'secondary',
        'base-button_outline': this.buttonStyle === 'outline',
        'base-button_flat': this.buttonStyle === 'flat',
      }
    },
  },
})
</script>

<style lang="scss" scoped>
.base-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: 0.2s;
  font-weight: 500;
  gap: 6px;
  &_primary {
    @apply bg-button-primary text-white;
    &:hover {
      @apply bg-button-primary;
      box-shadow: 0 4px 13px 0 rgba(#1d4784, 0.32);
    }
    &:active {
      @apply bg-button-primary;
    }
    &.active {
      @apply bg-button-primary;
    }
  }
  &_secondary {
    @apply bg-button-primary text-white;
    &:hover {
      @apply bg-button-primary text-white;
    }
    &:active {
      @apply bg-button-primary text-white;
    }
    &.active {
      @apply bg-button-primary text-white;
    }
  }
  &_outline {
    @apply border border-button-primary;
    &:hover {
      @apply bg-button-primary;
    }
    &:active {
      @apply bg-button-primary text-white;
    }
    &.active {
      @apply bg-button-primary text-white;
    }
  }
  &_flat {
    &:hover {
      @apply bg-button-primary;
    }
    &:active {
      @apply bg-button-primary text-white;
    }
    &.active {
      @apply bg-button-primary text-white;
    }
  }
  &_size {
    &_large {
      height: 44px;
      font-size: 16px;
      padding: 10px 16px;
    }
    &_medium {
      height: 36px;
      font-size: 14px;
      padding: 6px 12px;
    }
    &_small {
      height: 30px;
      font-size: 14px;
      padding: 5px 12px;
    }
  }
}
</style>
