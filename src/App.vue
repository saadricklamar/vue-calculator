<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js Calculator App" />
    <Display />
    <Pad />
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import Display from "./components/Display/Display";
import Pad from "./components/Pad/Pad";

export default {
  name: "app",
  components: {
    Header,
    Display,
    Pad
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
