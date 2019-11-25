<template>
  <section class="header">
    <nav role="navigation">
      <div id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <h4 class="user-name">Your Recent Calculations</h4>
          <section class="recent-box" v-for="recent in recents">
            <p class="recent">
              <button class="specific-calc">{{recent}}</button>
              <br>
              <p class="timeStamp">{{timeStamp}}</p>
               <button
                v-on:click="clearSpecificCalculation(recent)"
                class="clear-specific"
              >delete</button>
            </p>
          </section>
          <button v-on:click="clearRecentCalculations()" class="clear-calcs">Clear All Calculations</button>
        </ul>
      </div>
    </nav>
    <section class="calculator-title">
      <img alt="Vue logo" src="../../assets/logo.png" />
      <h1>Calculator</h1>
    </section>
  </section>
</template>

<script>
export default {
  name: "Header",
  props: ["recents", "clearRecentCalculations", "clearSpecificCalculation", "timeStamp"]
};
</script>


<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}

.recent-box {
  border-bottom: 1px solid black;
  height: 50px;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px 0 0 10px;
}

.calculator-title {
  display: flex;
  padding-right: 5%;
}

.timeStamp {
  color: cornsilk;
  font-size: 11px;
  margin: 0;
  padding: 0;
  text-align: left;
}

.recent {
  color: black;
  margin: 0;
  text-align: left;
}

.specific-calc {
  width: 150px;
  height: 25px;
  font-size: 16px;
  background-color: #42b983;
  border: none;
  margin-bottom: 0;
  text-align: left;
}

h1 {
  color: cornsilk;
  font-size: 2rem;
}

h4 {
  color: black;
  text-decoration: underline;
}

img {
  height: 100px;
}

.clear-calcs {
  background: #2c3e50;
  border: none;
  color: white;
  font-size: 1rem;
  height: 30px;
  width: 180px;
}

.clear-calcs:hover {
  background: #f8f7db;
  color: #42b983;
}

.clear-specific {
  background: cornsilk;
  border-radius: 0px;
  border: none;
  bottom: 15px;
  font-size: .7rem;
  height: 0px;
  left: 100px;
  margin-bottom: 0;
  padding: 0;
  position: relative;
  width: 0px;
}

.clear-specific:hover {
  color: red;
}

#menuToggle {
  display: block;
  position: relative;
  top: 20px;
  left: 20px;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none;
}

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #42b983;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: black;
}

#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

#menu {
  position: absolute;
  height: 580px;
  width: 250px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background: #42b983;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

#menu li {
  padding: 20px 0;
  font-size: 30px;
  margin-right: 25px;
}

#menuToggle input:checked ~ ul {
  transform: none;
}
</style>
