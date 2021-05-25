<template>
  <div class="m-bot-dashboard">
    <div class="m-3 flex flex-wrap" >
      <vs-bot-view class="mr-1 mb-1"
                   v-for="item in botInfo"
                   :icon="theme[item.theme].icon"
                   :indicator="action[item.action].color"
                   :level = "Number(item.level)"
      >{{item}}</vs-bot-view>
    </div>
    <v-table :items="botInfoNormalize"
             :headers="['#', 'Действие', 'Уровень', 'Тематика', 'Прокси']"
    ></v-table>

  </div>
</template>

<script>
import VsBotView from "../../components/specific/vs-bot-view";
import {theme, action} from "../../function/transformVariables";
import VTable from "../../components/v-table";
import {mapState} from "vuex";

export default {
  name: "m-bot-dashboard",
  components: {VTable, VsBotView},
  data:function (){
    return{
      theme:{},
      action:{}
    }
  },
  created() {
    this.theme = theme
    this.action = action
  },
  computed:{
    ...mapState({
      botInfo: state => state.Bots.data
    }),
    botInfoNormalize(){
      return this.botInfo.map(item => ({
          id:item.id,
          action:this.action[item.action].name,
          level:item.level,
          theme:this.theme[item.theme].name,
          proxy:item.proxy
        })
      )
    }
  }
}
</script>

<style scoped lang="scss">
.m-bot-dashboard{
  @apply mt-2;
}
</style>