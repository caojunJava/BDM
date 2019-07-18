<template>
  <div>
    <div style="height: 45px;line-height: 45px;">
      <el-row>
        <el-col :span="4"><div><i class="el-icon-s-fold" style="font-size:25px;line-height: 40px;"></i></div></el-col>
        <el-col :span="2" :offset="18"><div>admin</div></el-col>
      </el-row>
    </div>
    <el-tabs style="width: 100%;" v-model="editableTabsValue" type="card" closable @tab-remove="removeTab" @tab-click="tabClick">
      <el-tab-pane
        v-for="(item) in editableTabs"
        :key="item.id"
        :label="item.name"
        :name="item.path"
      >
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      editableTabsValue: '',
      editableTabs: [{
        name: '用户管理',
        id: '1',
        path: '/user'
      }, {
        name: '角色管理',
        id: '2',
        path: '/role'
      }],
      tabIndex: 2
    }
  },
  methods: {
    tabClick (tab) {
      this.$router.push(tab.name)
    },
    removeTab (tab) {
    }
  },
  mounted () {
    this.editableTabsValue = this.$route.path
  },
  watch: {
    '$route.path': function (val) {
      this.editableTabsValue = val
    }
  }
}
</script>

<style>
  .el-row-4{
    height: 35px;
    line-height: 35px;
  }
  .el-icon-s-fold{
    width:30px;
    height: 30px;
  }
  .el-divider--horizontal {
    display: block;
    height: 1px;
    width: 100%;
    margin: 0px 0;
  }
</style>
