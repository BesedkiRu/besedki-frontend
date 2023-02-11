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
        'w-full': this.fullWidth === true,
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
  gap: 5px;
  transition: 0.2s;
  &_primary {
    @apply bg-button-primary text-white;
    &:hover {
      @apply bg-blue-400;
      box-shadow: 0 4px 13px 0 rgba(#1d4784, 0.32);
    }
    &:active {
      @apply bg-blue-500;
    }
    &.active {
      @apply bg-blue-500;
    }
  }
  &_secondary {
    @apply bg-gray-250 text-blue;
    &:hover {
      @apply bg-button-hoverBlue text-white;
    }
    &:active {
      @apply bg-button-activeBlue text-white;
    }
    &.active {
      @apply bg-button-activeBlue text-white;
    }
  }
  &_outline {
    @apply border border-blue;
    &:hover {
      @apply bg-button-secondary;
    }
    &:active {
      @apply bg-button-activeBlue text-white;
    }
    &.active {
      @apply bg-button-activeBlue text-white;
    }
  }
  &_flat {
    &:hover {
      @apply bg-button-secondary;
    }
    &:active {
      @apply bg-button-activeBlue text-white;
    }
    &.active {
      @apply bg-button-activeBlue text-white;
    }
  }
  &_size {
    &_large {
      height: 56px;
      border-radius: 10px;
      font-size: 16px;
      &.base-button_content {
        &_text {
          padding: 0 20px;
        }
        &_icon-right {
          padding: 0 15px 0 20px;
          height: 54px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        &_icon-left {
          padding: 0 20px 0 15px;
          height: 54px;
          display: flex;
          align-items: center;
          gap: 2px;
        }
        &_icon {
          padding: 0 16px;
        }
      }
    }
    &_medium {
      height: 44px;
      border-radius: 10px;
      font-size: 14px;
      &.base-button_content {
        &_text {
          padding: 0 15px;
        }
        &_icon-right {
          padding: 0 15px 0 20px;
          height: 50px;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        &_icon-left {
          padding: 0 20px 0 15px;
          height: 52px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        &_icon {
          padding: 0 12px;
        }
      }
    }
    &_small {
      height: 32px;
      font-size: 14px;
      border-radius: 5px;
      &.base-button_content {
        &_text {
          padding: 0 10px;
        }
        &_icon-right {
          padding: 0 7px 0 10px;
          height: 40px;
          display: flex;
          align-items: center;
          gap: 2px;
        }
        &_icon-left {
          padding: 0 10px 0 7px;
          height: 38px;
          display: flex;
          align-items: center;
          gap: 2px;
        }
        &_icon {
          padding: 0 8px;
        }
      }
    }
  }
}
</style>
