<template>
  <section class="pad">
    <article class="buttons">
      <FirstRowButtons
        v-bind:clearDisplay="clearDisplay"
        v-bind:makeNegativePositive="makeNegativePositive"
        v-bind:makePercent="makePercent"
        v-bind:arithmeticClicked="arithmeticClicked"
      />
      <SecondRowButtons
        v-bind:displayBtnValue="displayBtnValue"
        v-bind:arithmeticClicked="arithmeticClicked"
      />
      <ThirdRowButtons
        v-bind:displayBtnValue="displayBtnValue"
        v-bind:arithmeticClicked="arithmeticClicked"
      />
      <FourthRowButtons
        v-bind:displayBtnValue="displayBtnValue"
        v-bind:arithmeticClicked="arithmeticClicked"
      />
      <FifthRowButtons
        v-bind:displayBtnValue="displayBtnValue"
        v-bind:makeDecimal="makeDecimal"
        v-bind:result="result"
      />
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
  props: [
    "displayBtnValue",
    "counter",
    "clearDisplay",
    "makeDecimal",
    "makeNegativePositive",
    "makePercent",
    "arithmeticClicked",
    "result"
  ]
};
</script>

<style scoped>
.pad {
  display: flex;
  justify-content: center;
}

article {
  width: 33%;
  height: 490px;
  background-color: #556884;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid black;
}

@media (max-width: 1120px) {
  article {
    height: 350px;
  }
}
</style>