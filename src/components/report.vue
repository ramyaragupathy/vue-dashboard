
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

  <textarea class='textarea is-primary'
  placeholder='Enter your report here... '
  :value="input" @input="update"
  rows='6' cols='60' />
  <div v-html="compiledMarkdown"></div>
  <div class='field is-grouped is-grouped-right'>
    <p class='control'>
      <a class='button is-primary'>
        Submit
      </a>
    </p>
  </div>
</div>
</template>

<script>
import marked from 'marked'
import _ from 'lodash'
import app-state from '../main.js'
export default {
  name: 'Report',
  data () {
    return {
      input: '# hello',
      repArr: app-state.dreport.reports
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value
    }, 300)
  }
}
</script>
