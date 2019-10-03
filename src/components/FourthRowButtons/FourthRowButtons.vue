<template>
  <section class="fourth-row-buttons">
    <button class="one">1</button>
    <button class="two">2</button>
    <button class="three">3</button>
    <button class="add">+</button>
  </section>
</template>

<script>
export default {
  name: "FourthRowButtons"
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

.add {
  background-color: #42b983;
  color: white;
}
</style>