<template>
  <div>
    <Layout/>
  </div>
</template>

<script>
import Login from './components/login/Login'
import Layout from './components/layout/Layout'
export default {
  name: 'App',
  components: {
    Layout,
    Login
  }
}
</script>

<style>
  body{
    margin: 0px;
    overflow-y: hidden
  }
</style>
