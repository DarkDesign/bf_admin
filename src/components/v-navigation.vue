<template>
  <div class="v-navigation">
    <div class="nav">
      <div class="nav__container">
        <div class="nav__list">
          <template v-for="(item,idx) in items" :key="idx">
            <router-link class="navLink" :to="item.push">
              <span class="navLink__icon"><i class="bi" :class="'bi-' + item.icon"></i></span>
              <span class="navLink__title" v-text="item.name"></span>
              <span v-if="linkCount[item.count]" class="navLink__title" v-text="linkCount[item.count]"></span>
              <span class="navLink__mobileTitle" v-text="item.name"></span>
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "v-navigation",
  props: {
    items: {
      type: Array,
      default() {
        return [
          {
            name: 'Link',
            icon: 'bi-dot',
            push: {},
            count: ''
          }
        ]
      }
    }
  },
  computed:{
    ...mapState({
      linkCount: state => state.count
    })
  }
}
</script>

<style scoped lang="scss">
.v-navigation{
  @apply
  min-h-screen
  h-full
  bg-white
  dark:bg-gray-800
  transition-colors
  duration-500;
}
.nav{
  @apply
  relative
  w-14
  md:w-auto;
  &__container{
    @apply flex;
  }
  &__list{
    @apply
    fixed
    md:static
    mt-5
    md:mt-10
    px-2
    md:px-6;
  }
}
.navLink{
  @apply
  hover:text-gray-800
  hover:bg-gray-100
  flex
  items-center
  p-2
  my-3
  transition-colors
  duration-500
  dark:hover:text-white
  dark:hover:bg-gray-600
  text-gray-600
  dark:text-gray-400
  rounded-lg;
  &:hover > &__mobileTitle{
    @apply inline md:hidden;
  }
  i{
    @apply text-2xl;
  }
  &__icon{
    @apply text-left;
  }
  &__title{
    @apply
    mx-4
    font-normal
    hidden
    md:inline;
  }
  &__counter{
    @apply
    w-full
    text-right
    hidden
    md:inline;
  }
  &__mobileTitle{
    @apply
    mx-4
    font-normal
    absolute
    left-12
    z-50
    hidden
    p-2
    my-3
    text-gray-800
    dark:text-gray-200
    bg-gray-200
    dark:bg-gray-800
    rounded-lg
    items-center
    transition-colors
    duration-500;
  }
  .is-active{
    @apply
    hover:text-gray-800
    hover:bg-gray-100
    flex
    items-center
    p-2
    my-3
    transition-colors
    dark:hover:text-white
    dark:hover:bg-gray-600
    duration-500
    text-gray-800
    dark:text-gray-100
    rounded-lg
    bg-purple-100
    dark:bg-purple-900;
    i{
      @apply
      text-purple-700
      dark:text-purple-300;
    }
  }
}
</style>