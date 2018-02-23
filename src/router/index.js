import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/components/Profile'
import Report from '@/components/Report'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/report',
      name: 'report',
      component: Report
    }
  ]
})
