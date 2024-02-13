<template>
  <div>
    <div v-if="showWelcomePage">
      <Welcome />
      <ButtonControl angle="right" class="btn-next" />
    </div>
    <div v-else-if="showDisplayPage">
        <ButtonControl angle="left" class="btn-back" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showWelcomePage: true,
      showDisplayPage: false,
    };
  },
  mounted() {
    console.log("process...");
  },
};
</script>

<style>
.btn-next {
  position: absolute;
  bottom: 7%;
  left: 0;
  right: 0;
  margin: auto;
}
.btn-back {
  position: absolute;
  top: 2%;
  left: 3%;
}
</style>
