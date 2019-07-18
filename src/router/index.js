import Vue from 'vue'
import VueRouter from 'vue-router'

import User from '../views/User'
import Role from '../views/Role'
import Plan from '../views/plan/Plan'
import Project from '../views/project/Project'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/system',
      children: [
        {path: 'user', component: User},
        {path: 'role', component: Role}
      ]
    },
    {
      path: '/plan',
      component: Plan
    },
    {
      path: '/project',
      component: Project
    },
    {
      path: '/system/user',
      component: User
    }]
})
