<template>
  <section class="display">
    <input type="text" value="0" />
  </section>
</template>

<script>
export default {
  name: "Display"
};
</script>

<style scoped>
.display {
  display: flex;
  justify-content: center;
}
input {
  height: 100px;
  width: 400px;
  background-color: #42b983;
  color: white;
  font-size: 3rem;
  padding-right: 2%;
  text-align: right;
  margin-top: 5%;
  border-radius: 5px;
}
</style>