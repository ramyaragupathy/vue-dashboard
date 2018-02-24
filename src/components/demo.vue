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
                <tbody>
                  <tr>
                    <td width='5%'><i class='fa fa-bell-o' /></td>
                    <td>Created an issue in JSON parser</td>
                  </tr>
                  <tr>
                    <td width='5%'><i class='fa fa-bell-o' /></td>
                    <td>Commited into lisp-interpreter</td>
                  </tr>
                  <tr>
                    <td width='5%'><i class='fa fa-bell-o' /></td>
                    <td>Created a JSON parser</td>
                  </tr>
                  <tr>
                    <td width='5%'><i class='fa fa-bell-o' /></td>
                    <td>Created a JSON parser</td>
                  </tr>
                  <tr>
                    <td width='5%'><i class='fa fa-bell-o' /></td>
                    <td>Created a JSON parser</td>
                  </tr>
                  <tr>
                    <td width='5%'><i class='fa fa-bell-o' /></td>
                    <td>Created a JSON parser</td>
                  </tr>
                  <tr>
                   <td width='5%'><i class='fa fa-bell-o' /></td>
                   <td>Created a JSON parser</td>
                 </tr>
                 <tr>
                   <td width='5%'><i class='fa fa-bell-o' /></td>
                   <td>Created a JSON parser</td>
                 </tr>
                 <tr>
                   <td width='5%'><i class='fa fa-bell-o' /></td>
                   <td>Created a JSON parser</td>
                 </tr>
               </tbody>
             </table>
           </div>
         </div>

       </div>
     </div>
     <div class='column is-7 is-pulled-right'>
       <div class='card'>
         <header class='card-header'>
           <p class='card-header-title'>
                  Json Parser
                </p>
         </header>
         <div class='card-content'>
           <div class='content'>
             <div class='control has-icons-left has-icons-right'>
                    Completed 2 modules
                    Code restructuring

                  </div>
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

Vue.component('add-demo', addDemo)
export default {
  name: 'Report',
  data () {
    return {
    }
  }
}
</script>