<template>
    <div>
    <div class='card'>
        <header class='card-header'>
            <p class='card-header-title'>
                {{reportData.date }} {{reportData.time}}
            </p>

        </header>
    </div class='card-content'>
    <div class='content'>
        <div class='control has-icons-left has-icons-right'>
           <p v-html='reportData.content'></p>
        </div>
    </div>
    </div>
</template>

<script>
import marked from 'marked'
import _ from 'lodash'
export default {
    props: ['reportData'],
    computed: {
        compiledMarkdown: function () {
        return marked(this.reportData.content, { sanitize: true })
        }
    },
    created: function() {
      console.log(this.reportData.content)
      this.reportData.content = marked(this.reportData.content, { sanitize: true })
      console.log(this.reportData.content)
   }
    
}
</script>
