<template>
  <div class="v-top-menu">
    <div class="top-menu">
      <div class="top-menu-item" v-for="item in children">
        <router-link class="nav-link" :to="{name: item.name}" >
          <v-panel :icon="'bi-' + item.meta.menu.icon"
                   :text="item.meta.menu.title"
                   :is-link="true"
                   @click="">
          </v-panel>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import VPanel from "./v-panel";
export default {
  name: "v-top-menu",
  components: {VPanel},
  props:{
    routeName:{
      type: String,
      default:''
    }
  },
  data:function (){
    return{
      children:[]
    }
  },
  created() {
    this.children = this.routeChildrenSearch(this.routeName)
  },
  methods:{
    routeChildrenSearch(name){
      if(!name) return []
      let children = this.$router.options.routes
          .find(item => item.name === name)
          .children
          .filter(item => item.meta.menu.type === 'side')
      return children
    }
  }
}
</script>

<style scoped lang="scss">
.v-top-menu{
  .top-menu{
    @apply grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2;
    &-item{

    }
  }
}
</style>