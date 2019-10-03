<template>
  <section class="pad">
    <article class="buttons">
      <FirstRowButtons />
      <SecondRowButtons />
    </article>
  </section>
</template>

<script>
import FirstRowButtons from "../FirstRowButtons/FirstRowButtons";
import SecondRowButtons from "../SecondRowButtons/SecondRowButtons";

export default {
  name: "Pad",
  components: {
    FirstRowButtons,
    SecondRowButtons
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
  height: 400px;
  background-color: #556884;
  border-radius: 5px;
}
</style>