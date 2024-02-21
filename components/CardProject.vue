<template>
  <div class="card-pj-container">
    <div>
        <ImagesCarousel :imagesList="projectImageList" class="card-carousel"/>
    </div>
    <div class="row p-2 card-short-info position-relative">
      <div class="col-8">
        {{ projectName }} <br>
        {{ projectDes }}
      </div>
      <div class="col-4 d-flex align-items-center">
        <button class="btn-view " @click="handleFullImages(true)">
            View
        </button>
      </div>
      <div class="stack-container">
        <TechStack v-for="item in projectStack" :key="item" :stackName="item"  class="tech"/>
      </div>
    </div>
    <div class="full-images" v-if="showFullImages">
      <Fullimages @handleFullImages="handleFullImages" />
    </div>
  </div>
</template>

<script>
export default {
    props: ['projectName','projectDes','projectImageList','projectStack'],
    data() {
      return {
        showFullImages: false
      }
    },
    mounted(){
      // console.log(this.projectStack); 
    },
    methods:{
      handleFullImages(value){
        this.showFullImages = value
      }
    }
}
</script>

<style>
.card-pj-container {
  width: 90%;
  height: fit-content;
  border-radius: 20px;
  /* background-color: aqua; */
}
.btn-view{
    width: 100%;
    height: 30px;
    border-radius: 15px;
    border: none;
}
.card-short-info{
  width: auto;
  margin: auto;
  background-color: rgba(0, 0, 255);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  
}
.card-carousel .carousel__item{
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.stack-container{
  width: fit-content;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  position: absolute;
  top: -35px;
  left: 5px;
}

.stack-container .tech{
  width: 30px;
  float: left;
  margin-right: 5px;
}


</style>
