<template>
  <div>
    <div class="logo-name">
      <h2>后台管理系统</h2>
    </div>
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
            <i :class="item.iconClass"></i>
            <span slot="title">{{item.name}}</span>
          </template>
          <template v-for="child in item.children">
            <el-menu-item :index="child.path" :key="child.id">
              <i :class="child.iconClass"></i>
              <span slot="title">{{ child.name }}</span>
            </el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item :index="item.path" v-else :key="item.id">
          <i :class="item.iconClass"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </template>

    </el-menu>
  </div>

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

  .logo-name {
    background-color: #03152A !important;
  @extend %w100;
    font-weight: 300;
    z-index: 999;
  }
  .logo-name h2 {
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    color: #fff;
  }

</style>
