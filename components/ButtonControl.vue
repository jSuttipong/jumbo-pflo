<template>
  <div
    class="button-next-container d-flex justify-content-center"
  >
  <!-- <div
    class="button-next-container d-flex justify-content-center align-items-center"
  > -->
    <!-- <span>{{arrowAngle}}</span> -->

    <!-- <span class="icon arrow"></span>
    <span class="btn-text font-victor">My project</span> -->
    <button
        class="play-button square"
      >
        <span class="icon arrow " :class="angle"></span>
        <span class="btn-text font-victor">{{btnText? btnText : "BTN"}}</span>
      </button>
  </div>
</template>

<script>
export default {
  props: ["angle","btnText"],
};
</script>
<style>
.button-next-container {
  width: 110px;
  /* height: 50px; */
  /* background-color: blue; */
  color: #fff;
  border-radius: 5px;
}
.circle {
  /* position: relative; */
  width: 3rem;
  height: 3rem;
  /* background: linear-gradient(-45deg, transparent 0%, rgba(0, 0, 255, 0.5) 10%); */
  background: #0000ff;
  border-radius: 1.625rem;
  /* border: 0; */
  border: none;
  transition: 0.45s ease-in-out;
  box-shadow: 0px 0px 1px 3px rgb(0, 0, 255);
  /* box-shadow: 0px 0px 5px 1px rgb(0, 0, 255); */
}

button.square {
  width: 3rem;
  height: 3rem;
  background: #0000ff;
  border: none;
  transition: 0.45s ease-in-out;
  box-shadow: 0px 0px 1px 3px rgb(0, 0, 255);
}
.btn-text {
  position: absolute;
  top: 0.95rem;
  left: 1.8rem;
  right: 0;
  bottom: 0;
  color: #ffff00;
  opacity: 0;
  transition: opacity ease-in-out;
  transition-duration: 0.3s;
  width: 5rem;
  font-size: 12px;
  margin: auto;
}

button.icon {
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}

button .icon.arrow {
  transition: transform 0.45s ease-in-out ;
  top: 0;
  position: absolute;
  content: "";
  top: 1.25rem;
  left: 3rem;
  width: 0.625rem;
  height: 0.625rem;
  border-top: 0.125rem solid #ffff00;
  border-right: 0.125rem solid #ffff00;
  /* transform: rotate(45deg); */
}
button .icon.right{
  transform: rotate(45deg);
}
button .icon.left{
  transform: rotate(225deg);
}

button:hover.square {
  width: 9rem;
}

button:hover.square .icon.arrow.right {
  transform: translate(-2.7rem, 0) rotate(45deg);
}
button:hover.square .icon.arrow.left {
  transform: translate(-2.7rem, 0) rotate(225deg);
}



button:hover.circle {
  width: 9rem;
}
button:hover .btn-text {
  opacity: 1;
}
button:hover.circle .icon.arrow {
  background: #ffff00;
  transform: translate(-1rem, 0);
}
</style>
