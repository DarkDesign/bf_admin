<template>
  <div class="v-table">
    <!-- v-table code  -->
    <div class="cs-table">
      <div class="cs-table__column" v-for="column in table">
        <div class="cs-table__header" v-text="column.header"></div>
        <div class="cs-table__item" v-for="item in column.data" v-text="item"></div>
      </div>
    </div>
    <!-- /v-table code -->
  </div>
</template>

<script>
export default {
  name: "v-table",
  props: {
    headers: {
      type: Array,
      default: []
    },
    items: {
      type: Array,
      default: []
    }
  },
  data:function (){
    return{
      table:[],
    }
  },
  created() {
    this.table = this.tableConstructor(this.headers, this.items)
  },
  methods:{
    getUniqueCellArray(data){
      let cellSet = new Set()
      data.forEach(value => {
        Object.keys(value).forEach(k => {
          cellSet.add(k)
        })
      })
      return [...cellSet]
    },
    getFillColumnArray(uniqueCell, data){
      let columnMap = new Map()
      uniqueCell.forEach((kSet) => {
        data.forEach(value => {
          const element = columnMap.get(kSet) || []
          const addValue = value[kSet] || []
          if(element.length > 0 || addValue.length > 0) columnMap.set(kSet, [...element, addValue])
        })
      })
      return [...columnMap]
    },
    tableConstructor(headers, data){
      const cellNameSet = this.getUniqueCellArray(data)
      const columnMap = this.getFillColumnArray(cellNameSet, data)
      let completeTable = []
      columnMap.forEach((value, key) => {
        let obj = {
          header: headers[key] || '',
          data: value[1]
        }
        completeTable.push(obj)
      })
      return completeTable
    }
  },
  watch:{
    headers:function (){
      this.table = this.tableConstructor(this.headers, this.items)
    },
    items:function (){
      this.table = this.tableConstructor(this.headers, this.items)
    }
  }
}
/* * * * * * * * *
* Project: bf
* Create: 21.04.2021 
*/
</script>

<style scoped lang="scss">
.v-table {
  @apply
  text-gray-600
  dark:text-white
  transition-colors
  duration-500;
  .cs-table{
    @apply
    flex
    flex-wrap
    w-full;
    &__column{
      @apply
      flex-1;
    }
    &__header{
      @apply
      uppercase
      p-1
      font-bold
      dark:bg-gray-800
      bg-gray-200;
    }
    &__item{
      @apply
      h-8
      whitespace-nowrap
      overflow-hidden;
    }
  }
}

</style>