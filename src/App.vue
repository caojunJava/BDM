<template>
  <div>
    <Layout/>
  </div>
</template>

<script>
import Login from './components/login/Login'
import Layout from './views/layout/Layout'
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
    overflow-y: hidden;
    background-color: #f2f2f2;
  }
</style>
