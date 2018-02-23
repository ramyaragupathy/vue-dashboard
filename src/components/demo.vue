<template>
 <div class='column is-9'>
   <section class='hero is-info welcome is-small'>
     <div class='hero-body'>
       <div class='container'>
         <h1 class='title'>
                Demo
              </h1>
         <h2 class='subtitle'>
                Awesome stuff you presented!
              </h2>
       </div>
     </div>
   </section>
   <section class='section'>
     <div class='field is-horizontal'>
       <div class='field-label is-normal'>
         <label class='label'>Title</label>
       </div>
       <div class='field-body'>
         <div class='field'>
           <div class='control'>
             <input class='input is-danger' type='text' placeholder='eg: My Portfolio Website' />
           </div>
           <p class='help is-danger'>
                  This field is required
                </p>
         </div>
       </div>
     </div>
     <div class='field is-horizontal'>
       <div class='field-label is-normal'>
         <label class='label'>Goals</label>
       </div>
       <div class='field-body'>
         <div class='field'>
           <div class='control'>
             <textarea class='textarea' placeholder='Explain about your project' />
           </div>
         </div>
       </div>
     </div>
     <div class='control is-pulled-right'>
       <button class='button is-link'>Update</button>
     </div>
   </section>
   <section>
     <div class='card'>
       <header class='card-header'>
         <p class='card-header-title'>
                Upcoming Demo &nbsp
                <span class='subtitle is-7'>
                  <small>23/12/2025</small>
                </span>
         </p>

         <a href='#' class='card-header-icon' aria-label='more options'>
           <span class='icon'>
             <i class='fa fa-pencil-square-o' aria-hidden='true' />
           </span>
         </a>
       </header>
       <div class='card-content'>
         <div class='content'>
           <article class='media'>
             <div class='media-content'>
               <div class='content'>
                 <p>
                   <big><strong>Lisp Interpreter</strong></big>
                   <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</br>
                 </p>
               </div>
             </div>
           </article>
         </div>
       </div>
     </div>
   </section>

   <div class='columns'>
     <div class='column is-5'>
       <div class='card events-card'>
         <header class='card-header'>
           <p class='card-header-title'>
                  Past Demos
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
</template>

<script>
export default {
  name: 'Report',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

