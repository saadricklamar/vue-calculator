<template>
  <section class="fifth-row-buttons">
    <button v-on:click="displayBtnValue($event)" class="zero" value="0">0</button>
    <button class="decimal">.</button>
    <button class="equals">=</button>
  </section>
</template>

<script>
export default {
  name: "FifthRowButtons",
  props: ["displayBtnValue"]
};
</script>

<style>
.equals {
  background-color: #42b983;
  color: white;
}

.zero {
  width: 170px;
}
</style>