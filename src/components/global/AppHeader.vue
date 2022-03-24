<template>
  <div class="header">
    <div class="logo">clickhouse欢迎您</div>
    <ul>
      <router-link
        to="/"
        tag="li"
        exact
      ><a>全量任务</a></router-link>
      <router-link
        to="/about"
        tag="li"
      ><a>增量任务</a></router-link>
      <router-link
        to="/blog"
        tag="li"
      ><a>博客</a></router-link>
      <router-link
        to="/help"
        tag="li"
      ><a>用户管理</a></router-link>
      <router-link
        to="/login"
        tag="li"
      ><a>登录</a></router-link>
      <router-link
        to="/help"
        tag="li"
        replace
      ><a>注销</a></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data: {
    clicked: false,
  },
};
</script>
<style scoped>
.header {
  background-color: #333;
  color: #fff;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  align-items: center;
}
ul {
  margin: 0;
}
.logo {
  font-size: 18px;
  padding: 18px;
  width: 200px;
}
li {
  padding: 20px;
  display: inline-block;
  font-size: 18px;
}
a {
  color: #fff;
  text-decoration: none;
}
a:hover {
  color: green;
}
</style>