<template>
  <div class="v-tab">
    <div class="v-tab__list">
      <div class="v-tab__item"
           v-for="(tab,idx) in tabsData"
           :key="tab.id"
           :class="{'v-tab__item-active': tab.open}"
           @click="switchTab(idx)"
      >
        <span class="v-tab__text" v-text="tab.name"></span>
      </div>
    </div>
    <div class="v-tab__content">
      <div v-for="tab in tabsData"
           :key="tab.id"
           v-show="tab.open"
      >
        <slot :name="tab.id"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-tab",
  props:{
    tabs:{
      type: Object,
      required: true
    }
  },
  data:function (){
    return {
      tabsData: []
    }
  },
  created() {
    this.buildTabs()
  },
  methods:{
    buildTabs(){
      let isTabOpen = false
      this.tabs.forEach(tab => {
        const createTab = {
          id: tab.id,
          name: tab.name,
          open: false
        }
        if(isTabOpen === false && tab.isOpen){
            createTab.open = tab.isOpen
            isTabOpen = true
        }
        this.tabsData.push(createTab)
      })
      if(!isTabOpen) this.tabsData[0].open = true
    },
    switchTab(idx){
      if(!this.tabsData[idx].open){
        this.tabsData.forEach(i => i.open = false)
        this.tabsData[idx].open = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.v-tab{
  &__list{
    @apply
    flex
    space-x-1;
  }
  &__item{
    @apply
    bg-gray-300
    dark:bg-gray-900
    p-3
    w-full
    cursor-pointer
    rounded-t-md
    transition-colors
    duration-500;
    &-active{
      @apply
      bg-gray-50
      border-t-2
      border-purple-700
      dark:bg-gray-800
      transition-colors
      duration-500;
    }
  }
  &__text{
    @apply
    text-gray-600
    dark:text-gray-400
    transition-colors
    duration-500;
  }
  &__content{
    @apply
    rounded-b-md
    bg-gray-50
    dark:bg-gray-800
    dark:text-gray-400
    p-2
    transition-colors
    duration-500;
  }
}
</style>