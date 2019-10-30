<template>
  <section class="fifth-row-buttons">
    <button v-on:click="displayBtnValue($event)" class="zero" value="0">0</button>
    <button v-on:click="makeDecimal()" class="decimal">.</button>
    <button v-on:click="result()" class="equals">=</button>
  </section>
</template>

<script>
export default {
  name: "FifthRowButtons",
  props: ["displayBtnValue", "makeDecimal", "result"]
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

@media (max-width: 1120px) {
  .zero {
    width: 112px;
  }
}
</style>