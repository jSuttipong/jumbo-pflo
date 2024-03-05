<template>
  <div>
    <div class="card-pj-container">
      <div class="card-linebar" :style="`background: rgba(${projectColorRGB},0.5)`"></div>
      <div>
        <ImagesCarousel
          :imagesList="projectImageList"
          :imagesBg="true"
          :paginationPosition="'top'"
          class="card-carousel"
        />
      </div>
      <div class="row p-2 card-short-info position-relative">
        <div class="col-12 card-title mb-3">
          <span class="card-title-underline"></span>
          <h5>{{ projectName }}</h5>
        </div>
        <div class="col-6 card-des">
          <p>{{ projectDes }}</p>
        </div>
        <div class="col-6 d-flex align-items-center">
          <button class="btn-view" @click="handleFullImages(true)">View</button>
        </div>
        <div class="stack-container d-flex align-items-center">
          <div v-for="item in projectStack"
            :key="item" class="stack-items">
            <Tooltip class="stack-tooltip" :tooltipText="item"/>
            <TechStack
            :stackName="item"
            class="tech"
          />
          </div>
        </div>
      </div>
    </div>

    <div class="full-images" v-if="showFullImages">
      <Fullimages
        :images="projectImageList"
        @handleFullImages="handleFullImages"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["projectName", "projectDes", "projectImageList", "projectStack", "projectColorRGB"],
  data() {
    return {
      showFullImages: false,
    };
  },
  mounted() {
    // console.log(this.projectStack);
  },
  methods: {
    handleFullImages(value) {
      this.showFullImages = value;
      if (value) {
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
      } else {
        document.getElementsByTagName("html")[0].style.overflowY = "scroll";
      }
    },
  },
};
</script>

<style>
.card-pj-container {
  width: 90%;
  height: fit-content;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.074);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  top: 0;
  left: 0;
  margin: auto;
  /* background-color: aqua; */
}
.card-linebar{
  position: absolute;
  width: 35%;
  height: 100%;
  left: 30px;
  /* background: rgb(0, 0, 255, 0.3); */
  filter: blur(20px);
}
.btn-view {
  width: 100%;
  height: 40px;
  border-radius: 15px;
  border: 1px solid #fff;
  color: #fff;
  background: none;
}

.btn-view:hover{
  background: #fff;
  color: #000;
}

.card-short-info {
  width: auto;
  margin: auto;
  /* background-color: rgba(0, 0, 255); */
  /* background-color: rgba(255, 255, 255, 0.074); */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.card-title {
  color: #fff;
  height: 2rem;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.card-title h5 {
  margin: 0;
}
.card-title-underline {
  position: absolute;
  width: 75%;
  bottom: 0;
  border-bottom: 1px solid #fff;
}

.card-des {
  color: #fff;
  margin: auto;
}

.card-des p {
  margin: 0;
}

.card-carousel .carousel__item {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.stack-container {
  width: fit-content;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  position: absolute;
  top: -40px;
  left: 5px;
  height: 2rem;
  /* padding: 0; */
}

.stack-container .tech {
  width: 30px;
  /* float: left; */
  /* margin-right: 5px; */
}

.stack-tooltip{
  visibility: hidden;
}
.stack-items:hover .stack-tooltip{
  visibility: visible;
}
</style>
