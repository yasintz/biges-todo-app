<template>
  <div :class="theme">
    <div id="app">
      <Header />
      <div class="page-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  computed: {
    ...mapGetters(['theme']),
  },
  components: { Header },
};
</script>

<style>
*,
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  --light: white;
  --vue-green-color: #42b983;
  --vue-dark-green-color: #319266;
  --dark: #2c3e50;
}
.light {
  --text-color: var(--dark);
  --input-background-color: var(--light);
  min-height: 100vh;
  background-color: var(--light);
}

.dark {
  min-height: 100vh;
  --text-color: var(--light);
  --input-background-color: var(--dark);
  caret-color: white;
  background-color: var(--dark);
}
.dropdown-toggle {
  color: var(--text-color) !important;
}

.dark .dropdown-toggle:hover {
  background-color: transparent !important ;
}

h3 {
  margin: 8px 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text-color);
  padding-top: 24px;
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
    width: 900px;
  }
}

.page-container {
  width: 100%;
  padding-bottom: 16px;
}
.page-title {
  text-align: center;
}
</style>
