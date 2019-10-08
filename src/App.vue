<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js Calculator App" />
    <Display v-bind:counter="counter" />
    <Pad :displayBtnValue="displayBtnValue" v-bind:clearDisplay="clearDisplay" />
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
  },
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    displayBtnValue: function(e) {
      if (this.counter === 0) {
        this.counter = "";
        this.counter = this.counter + e.target.value;
      } else {
        this.counter = this.counter + e.target.value;
      }
    },
    clearDisplay: function() {
      this.counter = 0;
    }
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
