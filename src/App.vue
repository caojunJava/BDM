<template>
  <div>
    <Layout1/>
  </div>
</template>

<script>
import Login from './components/login/Login'
import Layout1 from './components/layout/Layout1'
export default {
  name: 'App',
  components: {
    Layout1,
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
