<template>
  <v-card :info="{title: 'Настройка задач'}">
    <template v-slot:body>
      <div v-for="item in Object.keys(action.number)">
        <v-range v-model="action.number[item]" :number="`${action.percent[item]}%`" :title="fieldName[item].name"></v-range>
      </div>
    </template>
  </v-card>
</template>

<script>
import VCard from "../../components/v-card";
import VRange from "../../components/v-range";
import {percentageCalculationObject} from "../../function/function";
import {action} from "../../function/transformVariables";

export default {
  name: "m-bot-change-action",
  components: {VRange, VCard},
  data:function (){
    return{
      fieldName:{},
      action:{
        number:{
          create:0,
          update:0,
          bypasses:0
        },
        percent:{
          create:0,
          update:0,
          bypasses:0,
        }
      }
    }
  },
  created() {
    this.fieldName = action
  },
  watch:{
    'action.number':{
      handler: function (){
        this.action.percent = percentageCalculationObject(this.action.number)
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>