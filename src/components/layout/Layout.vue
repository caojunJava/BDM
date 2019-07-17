<template>
    <el-container :style="height">
      <el-aside width="230px">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          text-color="#fff"
          router
          @select="selectMenu"
          active-text-color="#1890ff"
          active-background-color="#fff"
          backgroundColor="#001529">
          <template v-for="item in $router.options.router">
            <el-menu-item :index="item.path" :key="item.path">
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header height="80px">
          <Header/>
        </el-header>
        <el-main>
          <transition name="main" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import Header from './header/Header'
export default {
  name: 'Layout',
  data () {
    return {
      height: {
        height: window.innerHeight + 'px'
      }
    }
  },
  components: {
    Header
  },
  mounted () {
    console.log(this.$router.options.router)
  },
  methods: {
    selectMenu (path) {
      console.log(path)
    }
  }
}
</script>

<style scoped>
  .el-header{
    background-color: #fff;
  }
  .el-aside{
    background-color: #001529;
  }
  .el-main::-webkit-scrollbar {
    width: 4px;
  }
  .el-aside::-webkit-scrollbar {
    width: 1px;
  }
  .el-menu {
    border-right: solid 0px #e6e6e6;
  }
  .el-main::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
  }
  .el-main::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);

  }
</style>
