<template>
  <div class="vs-bot-view">
    <div class="bot">
      <div class="bot__wrap">
        <img v-if="icon" :src="icon" alt="">
        <div class="bot__info" v-text="level"></div>
      </div>
      <div class="bot__indicator" :class="indicator"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vs-bot-view",
  props:{
    icon:{
      type:String,
      default:''
    },
    indicator:{
      type:String,
      default: 'dark:bg-white bg-black'
    },
    level:{
      type: Number,
      default: 0
    }
  }
}
/* * * * * * * * *
* Project: bf
* Create: 20.04.2021 
*/
</script>

<style scoped lang="scss">
.bot{
  @apply
  bg-gray-300
  dark:bg-gray-500
  rounded-l-3xl
  rounded-br-3xl
  rounded-tr-md
  h-12
  w-12
  p-1
  cursor-pointer
  relative
  transition-colors
  duration-500;
  &__wrap{
    @apply
    h-full
    w-full
    rounded-full
    bg-white
    dark:bg-gray-700
    p-1.5
    transition-colors
    duration-500;
  }
  &__indicator{
    @apply
    h-2
    w-2
    rounded-full
    absolute
    right-0.5
    top-0.5
    transition-colors
    duration-500;
  }
  &__info{
    @apply
    absolute
    top-1
    left-1
    h-10
    w-10
    bg-black
    bg-opacity-75
    rounded-full
    text-gray-50
    hidden
    items-center
    justify-center;
  }
  &:hover &__info{
    @apply flex;
  }
}
</style>