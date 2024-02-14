<template>
  <div class="card-pj-container">
    <div>
        <ImagesCarousel />
    </div>
    <div class="row p-2">
      <div class="col-8">
        {{ projectName }} <br>
        {{ projectDes }}
      </div>
      <div class="col-4 d-flex align-items-center">
        <button class="btn-view ">
            View
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['projectName','projectDes','projectImageList','projectStack']
}
</script>

<style>
.card-pj-container {
  width: 90%;
  height: fit-content;
  border-radius: 5px;
  background-color: aqua;
}
.btn-view{
    width: 100%;
    height: 30px;
    border-radius: 7px;
    border: none;
}
</style>
