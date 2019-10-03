<template>
  <section class="pad">
    <article class="buttons">
      <FirstRowButtons />
      <SecondRowButtons />
      <ThirdRowButtons />
    </article>
  </section>
</template>

<script>
import FirstRowButtons from "../FirstRowButtons/FirstRowButtons";
import SecondRowButtons from "../SecondRowButtons/SecondRowButtons";
import ThirdRowButtons from "../ThirdRowButtons/ThirdRowButtons";

export default {
  name: "Pad",
  components: {
    FirstRowButtons,
    SecondRowButtons,
    ThirdRowButtons
  }
};
</script>

<style scoped>
.pad {
  display: flex;
  justify-content: center;
}

article {
  width: 425px;
  height: 450px;
  background-color: #556884;
  border-radius: 5px;
}
</style>