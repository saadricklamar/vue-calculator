<template>
  <section class="header">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <h1>Calculator</h1>
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
  justify-content: center;
}

h1 {
  color: #42b983;
  margin-top: 2%;
}

img {
  height: 100px;
}
</style>
