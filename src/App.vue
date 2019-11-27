<template>
  <div id="app">
    <Header
      msg="Welcome to Your Vue.js Calculator App"
      v-bind:recents="recents"
      v-bind:clearRecentCalculations="clearRecentCalculations"
      v-bind:clearSpecificCalculation="clearSpecificCalculation"
      v-bind:captureCalculation="captureCalculation"
    />
    <Display v-bind:counter="counter" />
    <Pad
      v-bind:displayBtnValue="displayBtnValue"
      v-bind:clearDisplay="clearDisplay"
      v-bind:makeDecimal="makeDecimal"
      v-bind:makeNegativePositive="makeNegativePositive"
      v-bind:makePercent="makePercent"
      v-bind:arithmeticClicked="arithmeticClicked"
      v-bind:result="result"
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
      operator: "",
      isOperatorClicked: false,
      num1: 0,
      num2: 0,
      recents: [],
      capturedCalculation: [],
      recentResult: ""
    };
  },
  methods: {
    displayBtnValue: function(e) {
      if (this.isOperatorClicked === true) {
        this.num2 = this.counter + e.target.value;
      }
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
    arithmeticClicked: function(e) {
      this.num1 = this.counter;
      this.isOperatorClicked = true;
      this.counter = "";
      this.operator = e.target.value;
    },
    result: function() {
      let num1 = Number(this.num1);
      let num2 = Number(this.num2);
      if (this.operator === "/") {
        this.counter = num1 / num2;
        this.recentCalculations(num1, num2);
      }
      if (this.operator === "x") {
        this.counter = num1 * num2;
        this.recentCalculations(num1, num2);
      }
      if (this.operator === "-") {
        this.counter = num1 - num2;
        this.recentCalculations(num1, num2);
      }
      if (this.operator === "+") {
        this.counter = num1 + num2;
        this.recentCalculations(num1, num2);
      }
    },
    recentCalculations: function(num1, num2) {
      let string1 = num1.toString();
      let string2 = num2.toString();
      let final = string1
        .concat(" ", this.operator, " ", string2)
        .concat(" = ", this.counter);
      this.recents.push(final);
    },
    clearRecentCalculations: function() {
      this.recents = [];
    },
    clearSpecificCalculation: function(event) {
      let result = this.recents.filter(recent => {
        return recent !== event;
      });
      this.recents = result;
    },
    captureCalculation: function(event) {
      this.capturedCalculation = event.split(" ").filter(item => {
        if (
          item !== "=" &&
          item !== "x" &&
          item !== "/" &&
          item !== "+" &&
          item !== "-"
        ) {
          return true;
        }
      });
      this.counter = Number(this.capturedCalculation[2]);
    }
  }
};
</script>

<style>
body {
  margin: 0 auto;
  background-color: #2c3e50;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
