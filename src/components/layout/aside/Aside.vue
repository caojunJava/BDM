<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    mode="vertical"
    text-color="#fff"
    router
    :collapse-transition="true"
    @select="selectMenu"
    active-text-color="#1890ff"
    backgroundColor="#001529">
    <template v-for="(item,index) in $store.getters.menus">
      <el-submenu v-if="item.children.length>0" :key="item.id" :index="index+''">
        <template slot="title">
          <span slot="title">{{item.name}}</span>
        </template>
        <template v-for="child in item.children">
          <el-menu-item :index="child.path" :key="child.id">
            <span slot="title">{{ child.name }}</span>
          </el-menu-item>
        </template>
      </el-submenu>
      <el-menu-item :index="item.path" v-else :key="item.id">
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </template>

  </el-menu>
</template>

<script>
export default {
  name: 'Aside',
  mounted () {
    this.$store.dispatch('getMenus')
  },
  methods: {
    selectMenu (path) {
      console.log(path)
    }
  }
}
</script>

<style scoped>

</style>
