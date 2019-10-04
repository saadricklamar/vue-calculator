<template>
  <section class="first-row-buttons">
    <button class="ac">AC</button>
    <button class="plus-minus">+/-</button>
    <button class="percent">%</button>
    <button class="divide">/</button>
  </section>
</template>

<script>
export default {
  name: "FirstRowButtons"
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
 background-color: rgb(79,142,191);
 color: white;
}

.divide {
  background-color: #42b983;
  color: white;
}

.first-row-buttons {
  margin-top: 3%;
}
</style>