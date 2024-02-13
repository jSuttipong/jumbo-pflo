<template>
  <div
    class="button-next-container d-flex justify-content-center align-items-center"
  >
    <span>{{arrowAngle}}</span>
  </div>
</template>

<script>
export default {
  props: ["angle"],
  data() {
    return {
      arrowAngle: ">",
    };
  },
  mounted() {
    switch (this.angle) {
      case "left":
        this.arrowAngle = "<";
        break;

      case "right":
        this.arrowAngle = ">";
        break;
      default:
        this.arrowAngle = ">";
        break;
    }
  },
};
</script>
<style>
.button-next-container {
  width: 50px;
  height: 50px;
  background-color: blue;
  color: #fff;
  border-radius: 5px;

}
</style>
