<template>
  <div class="proxy">
    <div>
      <v-card :info="{title: 'Добавить прокси'}">
        <template v-slot:body>
          <m-proxy-add></m-proxy-add>
        </template>
      </v-card>
    </div>
  </div>
</template>

<script>
import VCard from "../components/v-card";
import MProxyAdd from "../module/Proxy/m-proxy-add";
export default {
  name: "Proxy",
  components: {MProxyAdd, VCard},
  data:function (){
    return{

    }
  }
}
</script>

<style scoped>

</style>