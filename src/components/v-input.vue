<template>
  <div class="v-input">
    <label>
      <span v-if="title" v-text="title"></span>
      <input type="text" class="input"
             :class="inputStyle"
             :placeholder="placeholder"
             :value="modelValue"
             :disabled="isDisabled"
             @input="emitValue"
      >
    </label>
  </div>
</template>

<script>
export default {
  name: "v-input",
  emits: ['update:modelValue'],
  props:{
    title:{
      type: String,
      default: ''
    },
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    isDisabled:{
      type: Boolean,
      default: false
    },
    isError:{
      type: Boolean,
      default: false
    },
    isComplete:{
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitValue(e) {
      let value = e.target.value
      this.$emit('update:modelValue', value)
    }
  },
  computed:{
    inputStyle(){
      return {
        'input-error' : this.isError,
        'input-complete': this.isComplete && !this.isError
      }
    }
  }
}
</script>

<style scoped lang="scss">
.v-input{
  @apply text-gray-400;
  .input{
    @apply
    resize-y
    border-2
    p-1
    rounded-md
    bg-purple-100
    text-gray-800
    dark:bg-purple-900
    dark:border-gray-600
    dark:text-gray-300
    w-full
    outline-none
    transition-colors
    duration-500
    whitespace-pre;
    &:disabled{
      @apply
      dark:bg-gray-600
      bg-gray-200
      dark:text-gray-700
      text-gray-500
      transition-colors
      duration-500;
    }
    &-error{
      @apply
      dark:border-red-700
      border-red-400
      dark:text-red-600
      text-red-500
      transition-colors
      duration-500;
    }
    &-complete{
      @apply
      dark:border-green-700
      border-green-400
      dark:text-green-600
      text-green-500
      transition-colors
      duration-500;
    }
  }
}
</style>