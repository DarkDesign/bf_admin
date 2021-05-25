<template>
  <div>
    <v-top-menu :route-name="$route.meta.menu.parent || $route.name"></v-top-menu>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import VTopMenu from "../components/v-top-menu";

export default {
name: "Bot",
  components: {VTopMenu},
}
</script>

<style scoped>

</style>