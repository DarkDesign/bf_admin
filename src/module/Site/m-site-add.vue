<template>
  <div class="m-site-add">
    <v-card :info="{title: 'Добавить сайт для тестирования'}">
      <template v-slot:body>
        <v-tab :tabs="optionalValue.tabs">
          <template #tab1>
            <v-input class="my-2" placeholder="Url сайта"
                     v-model="url.text"
                     v-bind="url.option"
            ></v-input>
            <v-input class="my-2" placeholder="Описание" v-model="description" ></v-input>
            <v-textarea class="my-2"
                        placeholder="Список ключей"
                        v-model.lazy="keyList"
                        :left-text="keyLength"
                        :right-text="output.keyList ? `Ключи: ${output.keyList.length}` : ' '"
            ></v-textarea>
          </template>
          <template #tab2>
            <v-range v-for="item of Object.keys(theme.number)"
                     v-model="theme.number[item]"
                     :number="`${theme.percent[item]}%`"
                     :title="themeName[item].name"
            ></v-range>
          </template>
        </v-tab>
        <div class="flex flex-row my-2 w-full">
          <div class="w-full mr-1" v-if="optionalValue.calcButton.is">
            <v-button title="Рассчитать"
                      :is-loading="optionalValue.calcButton.isLoad"
                      @click="buttonParseTextarea()"
            ></v-button>
          </div>
          <div class="w-full">
            <v-button title="Отправить"></v-button>
          </div>
        </div>
      </template>
    </v-card>
  </div>
</template>

<script>
import VInput from "../../components/v-input";
import VTextarea from "../../components/v-textarea";
import VTooltips from "../../components/v-tooltips";
import VButton from "../../components/v-button";
import VRange from "../../components/v-range";
import VTab from "../../components/v-tab";
import VCard from "../../components/v-card";
import { normalizeNumber, theme } from "../../function/transformVariables";
import { isValidUrl, parseUri } from "../../function/url";
import { percentageCalculationObject } from "../../function/function";

export default {
  name: "m-site-add",
  components: {VCard, VTab, VRange, VButton, VTooltips, VTextarea, VInput},
  data:function (){
    return{
      url:{
        text:'',
        option:{
          isError: false,
          isComplete: false
        }
      },
      description: '',
      keyList:'',
      theme:{
        number:{
          auto: 0,
          finance: 0,
          fun: 0,
          work: 0,
          sport: 0
        },
        percent: {
          auto: 0,
          finance: 0,
          fun: 0,
          work: 0,
          sport: 0
        }
      },
      themeName:{},
      optionalValue:{
        timer:{},
        calcButton: {
          is: false,
          isLoad: false
        },
        tabs:[
          {id: "tab1", name: "Загрузка ключей"},
          {id: "tab2", name: "Настройка тематик"},
        ]
      },
      output:{
        domain: '',
        description: '',
        keyList:[]
      },
    }
  },
  created() {
    this.themeName = theme
    this.theme.percent = percentageCalculationObject(this.theme.number)
  },
  methods:{
    buttonParseTextarea(){
      this.optionalValue.calcButton.isLoad = true
      setTimeout(() => {
        this.parseTextarea().then(() => {
          this.optionalValue.calcButton.isLoad = false
        })
      },300)
    },
    async parseTextarea(){
      let outArray = this.keyList
          .replace(/[\n]{2,}/gm, "\n")
          .replace(/[ \t]{2,}/gm, " ")
      if(outArray.length > 0 && outArray !== '\n'){
        this.keyList = [
            ...new Set(
                outArray
                    .split('\n')
                    .map(i => i.trim())
            )
        ].join('\n')
        outArray = outArray
            .trim()
            .split('\n')
            .filter((i) => {
          let number = i.split('|');
          if(number.length === 1){
            if(number[0].length > 4){
              return i
            }
          }else{
            if(number[0].length > 4 && parseInt(number[1]) > 0){
              return i
            }
          }
        })
        let outMap = new Map()
        outArray.forEach(i => {
          let split = i.split('|')
          if(split.length > 1) outMap.set(split[0].trim(), parseInt(split[1]))
          else outMap.set(split[0].trim(), 1)
        })
        outArray = [...outMap]
        this.output.keyList = outArray
      }else{
        this.output.keyList = []
      }
    },
    domainInputStatus(isError = false, isComplete = false){
      this.url.option.isError = isError
      this.url.option.isComplete = isComplete && !isError
    }
  },
  computed:{
    keyLength(){
      let text = ''
      if(this.output.domain) text += this.output.domain
      if(this.output.keyList.length > 0){
        let outLen = 0
        this.output.keyList.forEach(i => {
          outLen+=i[1]
        })
        text.length === 0 ? text += 'Заходов: ' + normalizeNumber(outLen) :  text += ', заходов: ' + normalizeNumber(outLen)
      }
      return text
    },
  },
  watch:{
    'theme.number':{
      handler: function (){
        this.theme.percent = percentageCalculationObject(this.theme.number)
      },
      deep: true
    },
    'url.text':function (){
      if(this.url.text.length > 4){
        const validationCheck = isValidUrl(parseUri(this.url.text).host)
        if(validationCheck){
          this.output.domain = parseUri(this.url.text).host
        } else {
          this.output.domain = ''
        }
      }else{
        this.domainInputStatus()
        this.output.domain = ''
      }
    },
    'keyList':function (){
      if(this.optionalValue.timer) clearTimeout(this.optionalValue.timer)
      const averageLineSize = 40
      if(this.keyList.length < averageLineSize * 2000){
        this.optionalValue.calcButton.is = false
        this.optionalValue.timer = setTimeout(() => {
          this.parseTextarea()
        }, 500)
      }else{
        this.optionalValue.calcButton.is = true
      }
    }
  }
}
</script>