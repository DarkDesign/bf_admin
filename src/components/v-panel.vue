<template>
  <div class="v-panel">
    <div class="panel" @click="$emit('click', $event);">
      <div class="panel__icon" v-if="icon">
        <i class="bi" :class="icon"></i>
      </div>
      <div class="panel__text">
        <div>
          <p v-text="text"></p>
          <p class="panel__text-sub" v-if="subText" v-text="subText"></p>
        </div>
      </div>
      <div class="panel__action" v-if="isLink">
        <i class="bi bi-arrow-right-short"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-panel",
  props:{
    icon:{
      type:String,
      default: ''
    },
    text:{
      type:String,
      default: ''
    },
    subText:{
      type:String,
      default:''
    },
    isLink:{
      type:Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.v-panel{
  .panel{
    @apply
    flex
    bg-white
    dark:bg-gray-800
    rounded-md
    w-full
    text-gray-600
    dark:text-gray-400
    hover:text-purple-600
    dark:hover:text-purple-600
    cursor-pointer
    transition-colors
    duration-500;
    &__icon{
      @apply
      text-5xl
      mr-3
      p-3;
    }
    &__text{
      @apply
      text-xl
      flex-grow
      flex
      items-center;
      &-sub{
        @apply
        text-xs
        text-gray-400;
      }
    }
    &__action{
      @apply
      text-3xl
      text-white
      bg-purple-600
      h-auto flex
      items-center
      p-3
      rounded-r-md;
      i{
        @apply animate-pulse;
      }
    }
  }
}
</style>