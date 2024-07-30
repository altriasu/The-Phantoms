<template>
  <div>
    <div class="shift"></div>
    <div id="kof">
      <audio :src="require('../assets/audios/Lyn - Life Will Change.mp3')" controls="controls" loop="loop" autoplay="autoplay" hidden="true" volume="0.3"></audio>
    </div>
  </div>
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
  position: relative;
  display: block;
  margin: 0px auto; 
}

.shift {
  height: 100px;
  width: auto;
}
</style>