<template>
  <div class="v-button">
    <div v-if="loaded"  class="loader">
      <svg v-if="icon === 'load'" xmlns="http://www.w3.org/2000/svg" width="23" height="23"  fill="currentColor" class="bi bi-arrow-repeat animate-spin" viewBox="0 0 16 16">
        <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
        <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
      </svg>
      <svg v-if="icon === 'ok'" xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
      </svg>
    </div>
    <button type="button" class="btn"
            :disabled="disabled"
            @click="$emit('click', $event)"
            v-text="title"
    ></button>
  </div>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    title:{
      type: String,
      default: 'Это кнопка'
    },
    isLoading:{
      type: Boolean,
      default: false
    }
  },
  data: function (){
    return {
      loaded: false,
      disabled: false,
      icon: 'load'
    }
  },
  created() {
    this.disabled = this.isLoading
    this.loaded = this.isLoading
  },
  watch:{
    isLoading: function (){
      if(this.isLoading){
        this.disabled = this.isLoading
        this.loaded = this.isLoading
        return
      }
      this.icon = 'ok'
      this.disabled = this.isLoading
      setTimeout(() => {
        this.loaded = this.isLoading
        this.icon = 'load'
      }, 1000)

    }
  }
}
</script>

<style scoped lang="scss">
.v-button{
  @apply
  flex
  justify-center
  items-center
  w-full
  rounded-lg
  overflow-hidden;
  .btn{
    @apply
    p-1
    h-14
    md:h-12
    lg:h-10
    justify-center
    items-center
    bg-purple-600
    text-gray-200
    outline-none
    w-full
    whitespace-nowrap
    uppercase
    text-xs
    transition-colors
    duration-500;
    &:hover{
      @apply bg-purple-700;
    }
    &:disabled{
      @apply
      bg-gray-400
      dark:bg-gray-600
      transition-colors
      duration-500
      cursor-not-allowed;
    }
  }
  .loader{
    @apply
    h-14
    md:h-12
    lg:h-10
    w-14
    md:w-12
    lg:w-10
    flex
    justify-center
    items-center
    bg-gray-200
    dark:bg-gray-800
    text-purple-800
    dark:text-purple-200
    transition-colors
    duration-500;
  }
}
</style>
