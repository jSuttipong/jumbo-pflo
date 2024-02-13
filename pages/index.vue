<template>
  <div>
    <div v-if="showWelcomePage">
      <Welcome />
      <ButtonControl angle="right" class="btn-next" @click="goToNext('next')" />
    </div>
    <div v-else-if="showDisplayPage">
      <ButtonControl angle="left" class="btn-back" @click="goToNext('back')" />
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
  methods: {
    goToNext(btnValue) {
      if (btnValue === "next") {
        this.showWelcomePage = false;
        this.showDisplayPage = true;
      } else if (btnValue === "back") {
        this.showWelcomePage = true;
        this.showDisplayPage = false;
      }
    },
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
