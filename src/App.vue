<template>
    <div class="container">
      <div class="columns">
        <div id="leftnav" class="column is-3">
          <left-nav></left-nav>
        </div>
        <div id="content-div" class="column is-9">
          <content-div></content-div>
        </div>
      </div>
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
