<template>
  <section class="third-row-buttons">
    <button class="four">4</button>
    <button class="five">5</button>
    <button class="six">6</button>
    <button class="subtract">-</button>
  </section>
</template>

<script>
export default {
  name: "ThirdRowButtons"
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

.subtract {
  background-color: #42b983;
  color: white;
}
</style>