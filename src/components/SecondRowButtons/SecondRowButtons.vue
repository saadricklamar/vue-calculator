<template>
  <section class="second-row-buttons">
    <button v-on:click="displayBtnValue($event)" class="seven" value="7">7</button>
    <button v-on:click="displayBtnValue($event)" class="eight" value="8">8</button>
    <button class="nine">9</button>
    <button class="multiply">x</button>
  </section>
</template>

<script>
export default {
  name: "SecondRowButtons",
  props: ["displayBtnValue"]
};
</script>

<style>
p {
  color: white;
}
.multiply {
  background-color: #42b983;
  color: white;
}
</style>