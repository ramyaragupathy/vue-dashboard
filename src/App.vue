<template>
  <div id="app">
    <left-nav></left-nav>
    <content-div></content-div>
  </div>
</template>

<script>
import Vue from 'vue'
import leftNav from './components/leftNav.vue'
import contentDiv from './components/contentDiv.vue'
Vue.component('left-nav', leftNav)
Vue.component('content-div', contentDiv)

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
