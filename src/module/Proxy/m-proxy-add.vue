<template>
  <div>
    <v-textarea v-model="proxyList"
                :is-disabled="loading"
                :right-text="proxyInfo"
    ></v-textarea>
    <v-button class="my-2"
              @click="sendProxy"
              :is-loading="loading"
              title="Добавить"
    ></v-button>
  </div>
</template>

<script>
import VTextarea from "../../components/v-textarea";
import VButton from "../../components/v-button";
export default {
  name: "m-proxy-add",
  components: {VButton, VTextarea},
  data:function (){
    return{
      loading: false,
      proxyList:''
    }
  },
  methods:{
    sendProxy(){
      this.loading = true
      setTimeout(() => {
        this.successSand()
      },5000)
    },
    successSand(){
      this.loading = false
      this.proxyList = ''
    }
  },
  computed:{
    proxyInfo(){
      return this.proxyList ? 'Количество прокси: ' + this.proxyList.trim().split('\n').length : ' '
    }
  }
}
</script>

<style scoped>

</style>