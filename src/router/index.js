import Vue from 'vue'
import VueRouter from 'vue-router'

import User from '../views/User'
import Role from '../views/Role'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/user',
      name: '用户管理',
      component: User
    },
    {
      path: '/role',
      name: '角色管理',
      component: Role
    }]
})
