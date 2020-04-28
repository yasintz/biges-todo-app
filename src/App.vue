<template>
  <div id="app">
    <ul class="sidebar">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
html {
  --vue-green-color: #42b983;
  --vue-dark-green-color: #319266;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 24px;
}
.sidebar {
  list-style-type: none;
  padding: 0;
  text-align: center;
}
.sidebar li {
  margin: 0 10px;
  display: inline-block;
}
.sidebar li a {
  color: var(--vue-green-color);
}
.page-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.page-title {
  text-align: center;
}
</style>
