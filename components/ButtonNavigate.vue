<template>
  <div class="btn-nav-container d-flex justify-content-center ">
    <div class="btn-nav-background"></div>
    <div class="btn-arrow">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.btn-nav-container{
    width: 50px;
    height: 50px;
    /* border-radius: 50px; */
    position: relative;
    /* background-color: #235; */
    cursor: pointer;

}
.btn-nav-background{
    position: absolute;
    width: 50px;
    height: 50px;
    background: #0000ff;
    border-radius: 50px;
    filter: blur(20px);
}
.btn-arrow{
    transition: transform 0.45s ease-in-out ;
  position: absolute;
  /* top: 5px; */
  width: 0.8rem;
  height: 0.8rem;
  border-top: 0.125rem solid #ffff00;
  border-right: 0.125rem solid #ffff00;
  transform: rotate(135deg);
    animation: arrowSlide 1.5s ease-in-out infinite;
}

 @keyframes arrowSlide{
    0% {top: 10px;}
    50% {top: 18px;}
    100% {top: 10px;}
 }
</style>