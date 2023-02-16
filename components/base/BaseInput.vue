<template>
  <div>
    <label
      class="text-sm leading-none text-gray-dark block"
      :for="`${name}-input`"
      >{{ label }}</label
    >
    <input
      :id="`${name}-input`"
      ref="input"
      v-mask="mask"
      class="text-gray bg-background-primary mt-[6px] px-[15px] py-[18px] h-[52px] border w-full border-border-gray rounded-[10px]"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="value"
      :name="`${name}-input`"
      :readonly="readOnly"
      :autocomplete="autocomplete"
      :type="inputType"
      @input="onInput($event.target.value)"
      @focus="onFocus"
      @blur="onBlur"
    />
    <div class="text-red-300 text-sm leading-none mt-[3px] h-[14px]">
      <template v-if="errorMessages.length">{{ errorMessages[0] }}</template>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { HtmlInput } from '~/config/types'
type InputType = 'text' | 'password' | 'number'

export default Vue.extend({
  name: 'BaseInput',
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String as PropType<InputType>,
      default: 'text',
    },
    errorMessages: {
      type: Array,
      required: false,
      default: () => [],
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String],
      default: '',
    },
    mask: {
      type: String,
      default: null,
    },
    autocomplete: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showPassword: false,
      inputType: this.type as InputType,
      isFocus: false,
    }
  },
  computed: {
    hasError(): boolean {
      return !!this.errorMessages.length
    },
    inputRef(): any {
      return this.$refs.input as HtmlInput
    },
  },
  methods: {
    onInput(value: string): void {
      this.$emit('input', value)
    },
    setFocus() {
      this.inputRef.focus()
      this.isFocus = true
    },
    onFocus() {
      this.isFocus = true
    },
    onBlur() {
      this.isFocus = false
    },
    changePasswordVisibility(): void {
      if (this.showPassword) {
        this.inputType = 'password'
      } else {
        this.inputType = 'text'
      }
      this.showPassword = !this.showPassword
    },
  },
})
</script>

<style lang="scss" scoped></style>
