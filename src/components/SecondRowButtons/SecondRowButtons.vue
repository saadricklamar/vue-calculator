<template>
  <section class="second-row-buttons">
    <button class="seven">7</button>
    <button class="eight">8</button>
    <button class="nine">9</button>
    <button class="multiply">x</button>
  </section>
</template>

<script>
export default {
  name: "SecondRowButtons"
};
</script>

<style scoped>
button {
  height: 75px;
  width: 75px;
  margin: 2%;
  font-size: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
}

.multiply {
  background-color: #42b983;
  color: white;
}
</style>