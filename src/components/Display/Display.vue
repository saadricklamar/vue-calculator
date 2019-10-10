<template>
  <section class="display">
    <input type="text" :value="counter" disabled />
  </section>
</template>

<script>
export default {
  name: "Display",
  props: ["counter"]
};
</script>

<style scoped>
.display {
  display: flex;
  justify-content: center;
}
input {
  height: 80px;
  width: 31%;
  background-color: #42b983;
  color: white;
  font-size: 3rem;
  padding-right: 2%;
  text-align: right;
  margin-top: 1%;
  border-radius: 5px;
}
</style>