<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js Calculator App" />
    <Display />
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import Display from "./components/Display/Display";

export default {
  name: "app",
  components: {
    Header,
    Display
  }
};
</script>

<style>
body {
  margin: 0 auto;
  background-color: #d8e9dc;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
