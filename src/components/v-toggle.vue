<template>
  <div class="v-toggle">
    <div class="v-toggle__wrap">
      <input type="checkbox" name="toggle" class="v-toggle__input"
             v-model="modelValue"
             :id="uid"
      />
      <label :for="uid" class="v-toggle__label"></label>
    </div>
    <span class="v-toggle__title">
      <slot></slot>
    </span>
  </div>
</template>

<script>
let uid = 0
export default {
  name: "v-toggle",
  emits: ['update:modelValue'],
  props:{
    modelValue:{
      type: Boolean,
      default: false
    }
  },
  data:function (){
    uid += 1
    return {
      uid: `v-toggle-${uid}`
    }
  },
  watch:{
   modelValue:function (){
     this.$emit('update:modelValue', this.modelValue)
   }
  }
}
</script>

<style scoped lang="scss">
.v-toggle{
  @apply
  mb-3
  z-0;
  &__wrap{
    @apply
    relative
    inline-block
    w-10
    mr-3
    align-middle
    select-none;
  }
  &__input{
    @apply
    checked:bg-purple-500
    outline-none
    focus:outline-none
    right-4
    checked:right-0
    duration-200
    ease-in
    absolute
    block
    w-6
    h-6
    rounded-full
    bg-gray-400
    border-4
    appearance-none
    cursor-pointer;
  }
  &__label{
    @apply
    block
    overflow-hidden
    h-6
    rounded-full
    bg-gray-300
    dark:bg-gray-800
    cursor-pointer
    transition-colors
    duration-500;
  }
  &__title{
    @apply
    text-gray-400
    font-medium;
  }
}
</style>