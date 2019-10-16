<template>
  <div id="app">
    <Header msg="Welcome to Your Vue.js Calculator App" />
    <Display v-bind:counter="counter" />
    <Pad
      v-bind:displayBtnValue="displayBtnValue"
      v-bind:clearDisplay="clearDisplay"
      v-bind:makeDecimal="makeDecimal"
      v-bind:makeNegativePositive="makeNegativePositive"
      v-bind:makePercent="makePercent"
      v-bind:division="division" 
    />
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
      counter: 0,
      counter2: 0
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
    },
    makeDecimal: function() {
      let stringifiedCounter = String(this.counter);
      stringifiedCounter.includes(".")
        ? true
        : (this.counter = this.counter + ".");
    },
    makeNegativePositive: function() {
      let stringifiedCounter = String(this.counter);
      stringifiedCounter.includes("-")
        ? (this.counter = stringifiedCounter.replace("-", ""))
        : (this.counter = "-" + this.counter);
    },
    makePercent: function() {
      this.counter = this.counter / 100;
    },
    division: function() {
      let num1 = this.counter;
      this.counter = ""
      
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
