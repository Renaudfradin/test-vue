<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld2/>
    <contenu/>
    <headerTop/>
    <headerTop/>-->
    <Headers></Headers>
    <router-view></router-view>
  </div>
</template>

<script>
/*
import HelloWorld from './components/HelloWorld.vue';
import HelloWorld2 from './components/HelloWorld2.vue';
import contenu from './components/contenue.vue';
import headerTop from './components/headerTop.vue';
*/
import Headers from './components/Header.vue'

export default {
  name: 'App',
  components: {
    /*HelloWorld,
    HelloWorld2,
    contenu,
    headerTop*/
    Headers
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
