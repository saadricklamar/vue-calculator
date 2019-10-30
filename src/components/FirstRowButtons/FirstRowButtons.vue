<template>
  <section class="first-row-buttons">
    <button v-on:click="clearDisplay()" class="ac">AC</button>
    <button v-on:click="makeNegativePositive()" class="plus-minus">+/-</button>
    <button v-on:click="makePercent()" class="percent">%</button>
    <button v-on:click="division($event)" class="divide" value="/">/</button>
  </section>
</template>

<script>
export default {
  name: "FirstRowButtons",
  props: ["clearDisplay", "makeNegativePositive", "makePercent", "division"]
};
</script>

<style>
button {
  height: 75px;
  width: 75px;
  margin: 2%;
  font-size: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(243, 241, 213);
}

button:hover {
  background-color: rgb(79, 142, 191);
  color: white;
}

.divide {
  background-color: #42b983;
  color: white;
}

.first-row-buttons {
  margin-top: 3%;
}

@media (max-width: 1120px) {
  button {
    height: 50px;
    width: 50px;
  }
}
</style>