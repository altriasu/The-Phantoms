<template>
  <div style="margin: 0; padding: 0;">
    <NavBar/>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import NavBar from './components/navBar.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
export default{
  name: 'App',
  components:{
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-image: url('./assets/images/bg.jpeg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: relative;
}

nav {
  padding: 30px;
  background-color: #222222;
}

nav a {
  font-weight: bold;
  color: #9D9D9D;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
