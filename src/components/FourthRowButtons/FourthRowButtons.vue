<template>
  <section class="fourth-row-buttons">
    <button v-on:click="displayBtnValue($event)" class="one" value="1">1</button>
    <button v-on:click="displayBtnValue($event)" class="two" value="2">2</button>
    <button v-on:click="displayBtnValue($event)" class="three" value="3">3</button>
    <button v-on:click="arithmeticClicked($event)" class="add" value="+">+</button>
  </section>
</template>

<script>
export default {
  name: "FourthRowButtons",
  props: ["displayBtnValue", "arithmeticClicked"]
};
</script>

<style>
.add {
  background-color: #42b983;
  color: white;
}
</style>