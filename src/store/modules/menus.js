const menus = [
  {'id': 1, 'path': '/user', 'name': '用户管理'},
  {'id': 2, 'path': '/role', 'name': '角色管理'},
  {'id': 3, 'path': '/menu', 'name': '菜单管理'}
]
const state = {
  menus: []
}
const mutations = {
  getMenus (state, {menus}) {
    state.menus = menus
  }
}
const actions = {
  getMenus ({commit}, menus) {
    commit('getMenus', {menus})
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
