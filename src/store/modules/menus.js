const state = {
  menus: [
    {'id': 1, 'path': '/user', 'leaf': true, 'name': '用户管理'},
    {'id': 2, 'path': '/role', 'leaf': true, 'name': '角色管理'},
    {'id': 3, 'path': '/menu', 'leaf': true, 'name': '菜单管理'}
  ]
}
const mutations = {
  getMenus (state) {
    return state.menus
  }
}
const actions = {
  getMenus ({commit}) {
    commit('getMenus')
  }
}
const getters = {
  menus (state) {
    return state.menus
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
