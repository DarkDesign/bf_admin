<template>
  <div class="v-textarea">
    <label>
      <span v-if="title" v-text="title"></span>
      <textarea class="textarea"
                :placeholder="placeholder"
                :value="modelValue"
                :disabled="isDisabled"
                @input="emitValue"
      ></textarea>
    </label>
    <div class="textarea__info" v-if="rightText || leftText">
      <div v-text="leftText"></div>
      <div v-text="rightText"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-textarea",
  emits: ['update:modelValue'],
  props:{
    modelValue: String,
    title:{
      type: String,
      default: ''
    },
    placeholder:{
      type: String,
      default:''
    },
    rightText:{
      default: ''
    },
    leftText:{
      default: ''
    },
    isDisabled:{
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitValue(e) {
      let value = e.target.value
      this.$emit('update:modelValue', value)
    }
  }
}
</script>

<style scoped lang="scss">
.v-textarea{
  @apply text-gray-400;
  .textarea{
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
    &__info{
      @apply
      flex
      justify-between
      text-xs;
    }
  }
}
</style>