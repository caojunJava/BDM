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
      {id: 1, path: '/system', iconClass: 'el-icon-s-tools', name: '系统管理', children: [{id: 11, path: '/system/user', iconClass: 'el-icon-s-custom', name: '用户管理', children: []}, {id: 12, path: '/system/role', iconClass: 'el-icon-user', name: '角色管理', children: []}, {id: 13, path: '/system/menu', iconClass: 'el-icon-s-order', name: '菜单管理', children: []}]},
      {id: 2, path: '/plan', iconClass: 'el-icon-s-flag', name: '计划管理', children: []},
      {id: 3, path: '/project', iconClass: 'el-icon-s-finance', name: '项目管理', children: []}
    ] // 模拟请求后的数
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
