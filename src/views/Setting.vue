<template>
  <div class="setting">
    <template v-for="(toggle, key) in toggles">
      <v-toggle v-model="toggles[key]">{{key}}: {{toggle}}</v-toggle>
    </template>
  </div>
</template>
<script>
import VToggle from "../components/v-toggle";
export default {
  components: {VToggle},
  data:function (){
    return {
      toggles:{
        one: true,
        two: false,
        three: true,
        four: false,
        five: true
      }
    }
  }
}
</script>