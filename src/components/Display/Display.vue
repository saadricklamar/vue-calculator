<template>
  <section class="Display">
    <input type="text" value="0" />
  </section>
</template>

<script>
export default {
  name: "Display"
};
</script>

<style scoped>
.Display {
  display: flex;
  justify-content: center;
}
input {
  height: 100px;
  width: 500px;
  background-color: black;
  color: white;
  font-size: 3rem;
  padding-right: 2%;
  text-align: right;
  margin-top: 5%;
}
</style>