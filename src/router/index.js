import Vue from 'vue'
import Router from 'vue-router'

import User from '../views/User'

Vue.use(Router)

export default new Router({
  mode: 'history',
  router: [
    {
      path: '/user',
      name: '测试',
      component: User
    },
    {
      path: '/user22',
      name: '测试22',
      component: User
    }]
})
