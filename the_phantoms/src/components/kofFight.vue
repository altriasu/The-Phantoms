<template>
  <div id="kof"></div>
</template>

<script>
import { KOF } from "../assets/js/fight.js";
export default {
    name:"KofFight",
    mounted() {
    new KOF('kof');
    }
}
</script>

<style scoped>
@import url('../assets/css/fight.css');
#kof{
  margin-top: 10px;
  
  position: relative;
  display: block;
  margin: 10px auto; 
}
</style>