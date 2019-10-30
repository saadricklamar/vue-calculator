<template>
  <section class="third-row-buttons">
    <button v-on:click="displayBtnValue($event)" class="four" value="4">4</button>
    <button v-on:click="displayBtnValue($event)" class="five" value="5">5</button>
    <button v-on:click="displayBtnValue($event)" class="six" value="6">6</button>
    <button v-on:click="subtract($event)" class="subtract" value="-">-</button>
  </section>
</template>

<script>
export default {
  name: "ThirdRowButtons",
  props: ["displayBtnValue", "subtract"]
};
</script>

<style>
.subtract {
  background-color: #42b983;
  color: white;
}
</style>