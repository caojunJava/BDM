<template>
    <el-container :style="height">
      <el-aside width="200px">
        <Aside/>
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
import Header from '../../components/layout/header/Header'
import Aside from '../../components/layout/aside/Aside'
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
    Aside,
    Header
  },
  mounted () {
    // console.log(this.$route.path)
  },
  methods: {
  }
}
</script>

<style scoped>
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
