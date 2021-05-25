<template>
  <div class="v-header">
    <div class="v-header__title" v-text="headTitle"></div>
    <div class="v-header__icon" @click="setDarkMode(!isDark)">
      <i class="bi" :class="icon"></i>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";

export default {
  name: "v-header",
  props: {
    headTitle: {
      type: String,
      default: ''
    }
  },
  methods:{
    ...mapMutations('Settings', {
      setDarkMode:'setDarkMode'
    })
  },
  computed: {
    ...mapState({
      isDark: state => state.Settings.darkMode
    }),
    icon(){
     return {
       'bi-sun': this.isDark,
       'bi-brightness-low': !this.isDark
     }
    }
  }
}
</script>

<style scoped lang="scss">
.v-header{
  @apply
  flex
  w-full
  h-10
  md:h-16
  items-center
  bg-white
  dark:bg-gray-800
  transition-colors
  duration-500
  p-5;
  &__title{
    @apply
    flex-grow
    text-purple-800
    dark:text-purple-400
    md:text-xl
    transition-colors
    duration-500;
  }
  &__icon{
    @apply
    flex-none
    text-xl
    text-pink-500
    cursor-pointer;
  }
}
</style>