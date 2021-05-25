<template>
  <div class="v-card">
    <div class="card">
      <div class="card-header" v-if="(info.number && info.text) || info.title">
        <div class="card-header-info" v-if="info.number && info.text">
          <div class="card-header-info-number" v-text="info.number"></div>
          <div class="card-header-info-text" v-text="info.text"></div>
        </div>
        <div class="card-header-title" v-if="info.title">
          <h1 v-text="info.title"></h1>
        </div>
      </div>
      <div class="card-body" v-if="$slots['body']">
        <slot name="body"></slot>
      </div>
      <div class="card-footer" v-if="$slots['footer']">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-card",
  props: {
    info:{
      type: Object,
      default(){
        return {
          number: 0,
          text: '',
          title: ''
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.v-card{
  .card{
    @apply
    bg-white
    rounded-md
    dark:bg-gray-700
    dark:text-gray-400
    my-3
    transition-colors
    duration-500;
    div:first-child{
      @apply rounded-t-md;
    }
    div:last-child{
      @apply rounded-b-md;
    }
    &-header{
      @apply
      flex
      items-center
      space-x-3
      p-3
      flex-none;
      &-info{
        @apply
        bg-purple-100
        dark:bg-purple-900
        p-3
        rounded-md
        flex-none
        text-center
        transition-colors
        duration-500;
        &-number{
          @apply
          font-bold
          text-purple-900
          dark:text-purple-400
          text-2xl
          transition-colors
          duration-500;
        }

        &-text{
          @apply
          text-gray-600
          dark:text-gray-400
          text-xs
          transition-colors
          duration-500;
        }
      }
      &-title{
        @apply text-2xl;
      }
    }
    &-body{
      @apply p-3;
    }
    &-footer{
      @apply
      bg-gray-200
      dark:bg-gray-800
      p-3
      transition-colors
      duration-500;
    }
  }
}

</style>