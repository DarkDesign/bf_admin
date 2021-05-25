<template>
  <div>
    <div :class="{'dark': isDark}">
      <div class="flex bg-gray-100 dark:bg-gray-900 h-full transition-colors duration-500">
        <div class="flex-none z-30">
          <v-navigation :items="menu"></v-navigation>
        </div>
        <div class="flex-grow">
          <v-header :head-title="`Заголовок страницы`"></v-header>
          <div class="w-full p-4 md:p-10 h-auto">
            <router-view :key="$route.path"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VNavigation from "@/components/v-navigation"
import VHeader from "@/components/v-header"
import {mapState} from 'vuex'

export default {
  components: {VHeader, VNavigation},
  data: function (){
    return {
      menu:[]
    }
  },
  created() {
    this.$nextTick(() => {
      this.menu = this.buildMenu()
    })
  },
  methods:{
    buildMenu(){
      let menu = []
      this.$router.getRoutes().forEach(item => {
        if(!item.meta.menu.type){
          menu.push({
            name: item.meta.menu.name,
            icon: item.meta.menu.icon,
            push: item.path,
            count: item.name,
            position: item.meta.menu.position
          })
        }
      })
      return menu.sort((a, b) => a.position > b.position ? 1 : -1)
    }
  },
  computed: {
    ...mapState({
      isDark: state => state.Settings.darkMode
    })
  }
}
</script>