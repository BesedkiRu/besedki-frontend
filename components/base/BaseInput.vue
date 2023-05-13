<template>
  <div>
    <label
      class="text-sm leading-none text-gray-dark block"
      :for="`${name}-input`"
      >{{ label }}</label
    >
    <div
      class="relative text-gray bg-background-primary border border-border-gray rounded-[10px] min-h-[52px] mt-[6px] px-[15px] flex justify-between items-center gap-1.5"
    >
      <input
        :id="`${name}-input`"
        ref="input"
        v-model="inputValue"
        v-mask="mask"
        class="w-full bg-background-primary"
        :placeholder="placeholder"
        :disabled="disabled"
        :name="`${name}-input`"
        :readonly="readOnly"
        :autocomplete="autocomplete"
        :type="inputType"
        @focus="onFocus"
        @blur="onBlur"
        @keydown.down="handleArrowDown"
        @keydown.up="handleArrowUp"
        @keydown.enter.self.prevent="handleEnter"
      />
      <div v-if="measure" class="text-center min-w-[50px]">
        {{ measure }}
      </div>
      <ul
        v-if="suggestions.length && isFocus && activeIndex >= 0"
        class="absolute py-2.5 px-1 bottom-0 -left-0.5 translate-y-full bg-white w-[calc(100%+3px)] border border-t-0 border-border-gray rounded-[10px]"
      >
        <li
          v-for="(option, index) in sliceSuggestions"
          :key="index"
          class="text-black leading-none text-sm py-2.5 px-2 rounded-[10px] cursor-pointer duration-200 hover:bg-background-suggestionHover/30"
          :class="{ activeSuggestion: index === activeIndex }"
          @mousedown="chooseSuggestion(index)"
        >
          {{ option.value }}
        </li>
      </ul>
    </div>

    <div class="text-red-300 text-sm leading-none mt-[3px] h-[14px]">
      <template v-if="errorMessages.length">{{ errorMessages[0] }}</template>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
import { DadataSuggestion, HtmlInput } from '~/config/types'
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
    measure: {
      type: String,
      default: '',
    },
    suggestions: {
      type: Array as PropType<DadataSuggestion[]>,
      default: () => [] as DadataSuggestion[],
    },
  },
  data() {
    return {
      inputValue: '',
      showPassword: false,
      inputType: this.type as InputType,
      isFocus: false,
      activeIndex: 0,
    }
  },
  computed: {
    hasError(): boolean {
      return !!this.errorMessages.length
    },
    inputRef(): any {
      return this.$refs.input as HtmlInput
    },
    sliceSuggestions(): any[] {
      return this.suggestions.slice(0, 5)
    },
  },
  watch: {
    inputValue(newValue) {
      this.$emit('input', newValue)
    },
  },
  created() {
    this.inputValue = this.value
  },
  methods: {
    setFocus() {
      this.inputRef.focus()
      this.isFocus = true
    },
    onFocus() {
      this.isFocus = true
      this.activeIndex = 0
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
    handleArrowDown() {
      if (this.activeIndex === 4) {
        this.activeIndex = 0
        return
      }
      if (this.activeIndex < this.suggestions.length - 1) {
        this.activeIndex++
      }
    },
    handleArrowUp() {
      if (this.activeIndex > 0) {
        this.activeIndex--
      }
    },
    handleEnter() {
      if (this.activeIndex >= 0) {
        this.inputValue = this.suggestions[this.activeIndex].value
        this.activeIndex = -1
      }
      this.$emit('choose-suggestion', this.suggestions[this.activeIndex])
    },
    chooseSuggestion(index: number) {
      if (this.activeIndex >= 0) {
        this.inputValue = this.suggestions[index].value
        this.activeIndex = -1
      }
      this.$emit('choose-suggestion', this.suggestions[index])
    },
  },
})
</script>

<style lang="scss" scoped>
.activeSuggestion {
  @apply bg-background-suggestionHover;
}
</style>
