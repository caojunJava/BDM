<template>
  <el-container>
    <el-header>
      <Header/>
    </el-header>
    <el-container>
      <el-aside>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
          <el-menu-item index="5" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航五</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-setting"></i>
            <span slot="title">导航六</span>
          </el-menu-item>
          <el-menu-item index="7" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航七</span>
          </el-menu-item>
          <el-menu-item index="8">
            <i class="el-icon-setting"></i>
            <span slot="title">导航八</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './header/Header'
export default {
  name: 'Layout',
  components: {Header}
}
</script>

<style>
  body{
    margin: 0px;
  }
  .el-header {
    background-color: #409EFF;
    color: #fff;
    font-weight: 600;
    font-size: 24px;
    line-height: 60px;
  }

  .el-aside {
    background-color: #fff;
    position: absolute;
    left: 0px;
    top: 60px;
    width: 230px !important;
    bottom: 0px;
    overflow-y: auto;
    border-right: solid 1px #e6e6e6;
  }
  .el-main {
    position: absolute;
    top: 60px;
    left: 230px;
    right: 0px;
    bottom: 0px;
  }
  .el-aside::-webkit-scrollbar {
    width: 1px;
  }
  .el-menu {
    border-right: solid 0px #e6e6e6;
  }
  .el-aside::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
  }
  .el-aside::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);

  }
</style>
