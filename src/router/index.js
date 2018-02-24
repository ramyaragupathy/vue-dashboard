import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/components/Profile'
import Report from '@/components/report'
import Demo from '@/components/demo'
import EditInfo from '@/components/EditInfo'
import Dashboard from '@/components/dashboard'

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
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/EditInfo',
      name: 'EditInfo',
      component: EditInfo
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
