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
  props: {
    msg: String
  }
};
</script>


<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}

.calculator-title {
  display: flex;
  padding-right: 5%;
}

h1,
h4 {
  color: #42b983;
}

img {
  height: 100px;
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
  background: #42b983;
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
  background: #556884;
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
