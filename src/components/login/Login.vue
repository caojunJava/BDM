<template>
  <el-form ref="form" :model="form" class="form">
    <h3 class="title">后台管理系统</h3>
    <el-form-item>
      <el-input v-model="form.name" placeholder="用户名" auto-complete="off" prefix-icon="el-icon-user"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="form.password" type="password" prefix-icon="el-icon-lock" placeholder="密   码" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="title" :loading="isLogin" @click="login" :disabled="isDisable">{{loginMsg}}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      isLogin: false,
      isDisable: false,
      loginMsg: '登录',
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.loginMsg = '登陆中'
      this.isLogin = true
      setTimeout(() => {
        this.loginMsg = '登陆成功'
        this.isLogin = false
        this.isDisable = true
        setTimeout(() => {
          window.location.href = 'http://www.baidu.com'
        }, 500)
      }, 2000)
    }
  }
}
</script>

<style>
  .form{
    width: 350px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .title{
    width: 100%;
    text-align: center;
  }
</style>
