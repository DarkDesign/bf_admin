<template>
  <div class="site">
    <v-top-menu :route-name="$route.meta.parent || $route.name"></v-top-menu>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import VTopMenu from "../components/v-top-menu";
export default {
  name: "Site",
  components: {VTopMenu},
  methods:{

  }
}
</script>

<style scoped>

</style>