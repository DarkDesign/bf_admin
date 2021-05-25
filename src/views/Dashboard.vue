<template>
  <div class="dashboard">
    <div class="card-deck">
      <v-card v-for="card in cards" :info="card.info">
        <template v-slot:body>
          <h1 v-text="card.body"></h1>
        </template>
        <template v-slot:footer>
          <h1 v-text="card.footer"></h1>
        </template>
      </v-card>
    </div>
  </div>
</template>

<script>

import VCard from "../components/v-card";
export default {
  name: 'Home',
  components: {VCard},
  data:function (){
    return {
      cards:[]
    }
  },
  created() {
    for(let i = 1; i < 101; i++){
      this.cards.push({
        info:{
          title: `Карточка #${i}`,
          number: i * 30,
          text: `Количество`
        },
        body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque blanditiis dicta distinctio esse, exercitationem explicabo illum ipsa ipsum iusto laborum nostrum nulla perferendis porro repellat saepe tempore unde voluptatum.',
        footer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.card-deck{
  @apply
  grid
  grid-cols-1
  gap-3
  sm:grid-cols-1
  lg:grid-cols-2
  xl:grid-cols-3
  2xl:grid-cols-4;
}
</style>
