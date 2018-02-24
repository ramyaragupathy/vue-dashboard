<template>
<div>
  <section class="hero is-info welcome is-small">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
              Hello, Sumit.
            </h1>
        <h2 class="subtitle">
              Hope you are having a great day!
            </h2>
      </div>
    </div>
  </section>
  <section class="info-tiles">
    <div class="tile is-ancestor has-text-centered">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">{{stats.projects}}</p>
          <p class="subtitle">Projects</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">{{stats.leaves}}</p>
          <p class="subtitle">Vacation</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">{{stats.since}}</p>
          <p class="subtitle">Days in geekskool</p>
        </article>
      </div>
    </div>
  </section>
  <div class="columns">
    <div class="column is-6">
      <div class="card events-card">
        <header class="card-header">
          <p class="card-header-title">
            Latest activities
          </p>
        </header>
        <div class="card-table">
          <div class="content">
            <table class="table is-fullwidth is-striped">
              <tbody v-html="activitylist">

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-6">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Daily Report
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="control has-icons-left has-icons-right">
              <div class='content'>
                <div class='control has-icons-left has-icons-right'>
                  <p v-html='dailyreport.content'></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            Upcoming Demo
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <div class="control has-icons-left has-icons-right">
              {{upcoming}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import appState from '../appData.js'
import marked from 'marked'
import _ from 'lodash'
export default {
  name: 'Dashboard',
  data() {
    return {
      stats: appState.dashboard.stats,
      activity: appState.dashboard.activity,
      dailyreport: appState.dashboard.dailyreport,
      upcoming: appState.demo.curr.title
    }
  },
  computed: {
    activitylist: function() {
      return this.activity
        .map(p => '<tr> <td width = "5%" > <i class = "fa fa-bell-o"> </i></td ><td >'+ p +' </td></tr>')
        .join(' ')
    },
    compiledMarkdown: function () {
      return marked(this.dailyreport.content, { sanitize: true })
    }
  },
  created: function () {
    console.log(this.dailyreport.content)
    this.dailyreport.content = marked(this.dailyreport.content, { sanitize: true })
    console.log(this.dailyreport.content)
  }
}
</script>
