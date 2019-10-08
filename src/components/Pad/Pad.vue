<template>
  <section class="pad">
    <article class="buttons">
      <FirstRowButtons />
      <SecondRowButtons v-bind:displayBtnValue="displayBtnValue" />
      <ThirdRowButtons v-bind:displayBtnValue="displayBtnValue" />
      <FourthRowButtons />
      <FifthRowButtons />
    </article>
  </section>
</template>

<script>
import FirstRowButtons from "../FirstRowButtons/FirstRowButtons";
import SecondRowButtons from "../SecondRowButtons/SecondRowButtons";
import ThirdRowButtons from "../ThirdRowButtons/ThirdRowButtons";
import FourthRowButtons from "../FourthRowButtons/FourthRowButtons";
import FifthRowButtons from "../FifthRowButtons/FifthRowButtons";

export default {
  name: "Pad",
  components: {
    FirstRowButtons,
    SecondRowButtons,
    ThirdRowButtons,
    FourthRowButtons,
    FifthRowButtons
  },
  props: ["displayBtnValue", "counter"]
};
</script>

<style scoped>
.pad {
  display: flex;
  justify-content: center;
}

article {
  width: 425px;
  height: 475px;
  background-color: #556884;
  border-radius: 5px;
}
</style>