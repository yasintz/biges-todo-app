<template>
  <div id="app">
    <Header />
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: { Header }
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
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  #app {
    width: 750px;
  }
}
@media (min-width: 992px) {
  #app {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  #app {
    width: 1170px;
  }
}

.page-container {
  width: 100%;
}
.page-title {
  text-align: center;
}
</style>
