const state = {
  menus: []
}
const mutations = {
  getMenus (state) {
    return state.menus
  }
}
const actions = {
  getMenus ({commit}) {
    const temp = [
      {id: 1, path: '/system', name: '系统管理', children: [{id: 11, path: '/system/user', name: '用户管理', children: []}, {id: 12, path: '/system/role', name: '角色管理', children: []}, {id: 13, path: '/system/menu', name: '菜单管理', children: []}]},
      {id: 2, path: '/plan', name: '计划管理', children: []},
      {id: 3, path: '/project', name: '项目管理', children: []}
    ] // 模拟请求后的数据
    state.menus = temp
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
