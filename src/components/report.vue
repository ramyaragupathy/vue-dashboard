
<template>
<div class='column is-9'>
  <section class='hero is-info welcome is-small'>
    <div class='hero-body'>
      <div class='container'>
        <h1 class='title'>
                          Daily Report
                        </h1>
        <h2 class='subtitle'>
                          Hope you are having a great day!
                        </h2>
      </div>
    </div>
  </section>

  <textarea id='text-input' class='textarea is-primary' placeholder='Enter your report here...' oninput='this.editor.update()' rows='6' cols='60' />
  <div id='preview'> TEST</div>
  <div class='field is-grouped is-grouped-right'>
    <p class='control'>
      <a class='button is-primary'>
                                Submit
                              </a>
    </p>
  </div>
  <div class='card'>
    <header class='card-header'>
      <p class='card-header-title'>
        23-02-2018 8:50 AM
      </p>

    </header>
    <div class='card-content'>
      <div class='content'>
        <div class='control has-icons-left has-icons-right'>
          - worked on code editor for the app - fixed some css for code mirror - progress bar for challenge increases when solved any problem - app flow now works properly - evaluating code type still remains https://github.com/sumitkumar15/kyurious

        </div>
      </div>
    </div>
  </div>
  <div class='card'>
    <header class='card-header'>
      <p class='card-header-title'>
        22-02-2018 8:50 AM
      </p>

    </header>
    <div class='card-content'>
      <div class='content'>
        <div class='control has-icons-left has-icons-right'>
          - Tested the app and realised I wasn't reflecting the changes when a client disconnects on the front end. - Removed the disconnected client from the client list and from every room - Took @mukeshm’s help in fixing the login issue. - Tested it out and
          now it works - Replaced saving socket ids with client ids to identify clients - Tested out group chat. It works. Tested out group calls. It doesn't work. Will look into group calls today and try to get it working before the demo

        </div>
      </div>
    </div>
  </div>
  <div class='card'>
    <header class='card-header'>
      <p class='card-header-title'>
        21-02-2018 8:50 AM
      </p>

    </header>
    <div class='card-content'>
      <div class='content'>
        <div class='control has-icons-left has-icons-right'>
          - Fixed recursion bug - Found even more bugs - lambdas within lambdas not working - Immediately invoked lambdas are also not working https://github.com/rammmukul/lispInterpreter

        </div>
      </div>
    </div>
  </div>
  <div class='card'>
    <header class='card-header'>
      <p class='card-header-title'>
        20-02-2018 8:50 AM
      </p>

    </header>
    <div class='card-content'>
      <div class='content'>
        <div class='control has-icons-left has-icons-right'>
          - Continued with HTML Sections - Topics covered ○ Forms ○ Tables

        </div>
      </div>
    </div>
  </div>
  <div class='card'>
    <header class='card-header'>
      <p class='card-header-title'>
        19-02-2018 8:50 AM
      </p>

    </header>
    <div class='card-content'>
      <div class='content'>
        <div class='control has-icons-left has-icons-right'>
          1. Brushed up on a. algorithms (dynamic programming) b. Reactjs c. Javascript scopes and `this` 2. Went for Goibito interview and got back

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import app-state from '../main.js'
export default {
  name: 'Report',
  data: {
      repArr = appstate.dreport.reports
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
