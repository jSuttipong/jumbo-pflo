<template>
  <div class="tooltip-container">
    <span>{{ tooltipText ? tooltipText : "tooltip" }}</span>
  </div>
</template>

<script>
export default {
    props: ["tooltipText"]
}
</script>

<style>
.tooltip-container{
    position: absolute;
    width: fit-content;
    height: fit-content;
    border-radius: 5px;
    backdrop-filter: blur(20px);
    top: -25px;
    padding: 5px;
    font-size: 14px;
    color: #ffff00;
}
</style>