import Vue from 'vue'
import VueRouter from 'vue-router'

import User from '../views/User'
import Role from '../views/Role'
import Plan from '../views/plan/Plan'
import Project from '../views/project/Project'
import Menu from '../views/Menu'
import System from '../views/System'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/system',
      component: System,
      children: [
        {path: 'user', component: User},
        {path: 'role', component: Role},
        {path: 'menu', component: Menu}
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
