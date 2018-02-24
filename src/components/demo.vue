<template>
  <div>
    <add-demo></add-demo>
  <div class='column is-9'>
    <div class='columns'>
      <div class='column is-5'>
        <div class='card events-card'>
          <header class='card-header'>
            <p class='card-header-title'>
              Awesome stuff you presented
            </p>
          </header>
          <div class='card-table'>
            <div class='content'>
              <table class='table is-fullwidth is-striped'>
                <tbody v-for='demo in pastDemos'>
                  <tr>
                    <td width='5%'><i class='fa fa-bell-o' /></td>
                    <td v-on:click='dispDetails(demo)'><big v-text='demo.title'></big>
                    </td>
                  </tr>
               </tbody>
             </table>
           </div>
         </div>
       </div>
     </div>
     <div v-if='display' class='column is-7 is-pulled-right'>
       <div class='card'>
         <header class='card-header'>
           <p class='card-header-title' v-text='currSel.title'></p>
         </header>
         <div class='card-content'>
           <div class='content'>
             <div class='control has-icons-left has-icons-right' v-text='currSel.contents'></div>
           </div>
         </div>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import addDemo from './addDemo'
import Vue from 'vue'
import appState from '../appData.js'

Vue.component('add-demo', addDemo)
export default {
  name: 'Report',
  data () {
    return {
      pastDemos: appState.demo.past,
      display: false,
      currSel: null
    }
  },
  methods: {
    dispDetails(demo) {
      this.display = true
      this.currSel = demo
    }
  }
}
</script>