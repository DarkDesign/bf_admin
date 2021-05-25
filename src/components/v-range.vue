<template>
  <div class="v-range">
    <div>
      <input type="range" class="slider"
             :min="min"
             :max="max"
             :value="modelValue"
             @input="emitValue">
      <div class="slider__info">
        <div v-text="title"></div>
        <div v-text="value"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-range",
  emits: ['update:modelValue'],
  props:{
    modelValue: Number,
    max:{
      type: Number,
      default: 100
    },
    min:{
      type: Number,
      default: 0
    },
    title:{
      type:String,
      default: ''
    },
    number: {
      default:null
    }
  },
  methods: {
    emitValue(e) {
      let value = parseInt(e.target.value)
      this.$emit('update:modelValue', value)
    }
  },
  computed:{
    value(){
      return this.number != null ? this.number : this.modelValue
    }
  }
}
</script>

<style scoped lang="scss">
.v-range{
  .slider {
    width: 100%;
    border-radius: 15px;
    outline: none;
    @apply
    bg-gray-300
    dark:bg-black
    focus:bg-purple-300
    dark:focus:bg-purple-800
    h-2
    appearance-none
    cursor-pointer
    transition-colors
    duration-500;
    &__info {
      @apply
      flex
      justify-between
      text-gray-400
      font-medium
      my-2;
    }
  }
}
@mixin sliderThumb() {
  border-radius: 50%;
  cursor: pointer;
  @apply
  bg-gray-500
  hover:bg-purple-500
  border-4
  dark:border-white
  border-gray-200
  appearance-none
  w-4
  h-4
  transition-colors
  duration-500;
}
.slider::-webkit-slider-thumb{
  @include sliderThumb()
}
.slider::-moz-range-thumb{
  @include sliderThumb()
}
.slider::-ms-thumb {
  @include sliderThumb()
}
</style>