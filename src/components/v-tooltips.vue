<template>
  <div @mouseenter="mouseenter" @mouseleave="mouseleave" class="v-tooltips">
    <div @click="visible = !visible"  class="item">
      <div>
        <i class="bi bi-lightbulb animate-pulse duration-500 text-yellow-500 m-1 text-xl"></i>
      </div>
      <div>
        <slot name="item"></slot>
      </div>
    </div>
    <div v-if="visible" class="tooltips">
        <div>
          <slot name="body"></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-tooltips",
  data:function (){
    return{
      visible: false,
      timer: null
    }
  },
  methods:{
    mouseleave(){
      if(this.timer) clearTimeout(this.timer)
      if(this.visible){
        this.timer = setTimeout(() => {
          this.visible = false
          clearTimeout(this.timer)
        }, 300)
      }
    },
    mouseenter(){
      if(this.timer) clearTimeout(this.timer)
      this.visible = true
    }
  }
}
</script>

<style scoped lang="scss">
.v-tooltips {
  @apply text-gray-400 relative;
  .item{
    @apply
    cursor-help
    flex
    items-center
  }
  .tooltips {
    @apply
    dark:bg-gray-700
    bg-white
    p-2
    rounded-md
    shadow-xl
    transition-colors
    duration-500
    border-2
    dark:border-gray-500
    border-gray-100
    absolute;
    div{
      @apply
      max-h-72
      overflow-y-auto
    }
  }
}
</style>