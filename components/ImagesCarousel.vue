<template>
  <div class="carousel-container">
    <!-- :class="imagesList.langth > 3 ? `more-slide` : ``" -->
    <Carousel :wrap-around="true" :class="[isMorePagination == true ? 'more-slide' : '', paginationPos ]">
      <!-- :class="index >= 3 ? `more-slide` : ``" -->
      <Slide v-for="(slide, index) in imagesList" :key="index">
        <!-- <div class="carousel__item" @click="slideClick(slide)">{{ slide }}</div> -->
        <div class="carousel__item" @click="slideClick(slide)">
          <div
            v-if="imagesBg"
            :style="`background: url( _nuxt/assets/images/${slide})`"
            class="w-100 h-100 carousel-slide-background "
          ></div>
          <img :src="`_nuxt/assets/images/${slide}`" alt="project image" />
        </div>
      </Slide>

      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

export default defineComponent({
  props: ["imagesList","imagesBg", "paginationPosition"],
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data() {
    return {
      isMorePagination: false,
      paginationPos: 'top'
    }
  },
  mounted() {
    if (this.imagesList.length > 5) {
      this.isMorePagination = true
    }
    console.log('this.paginationPosition', this.paginationPosition);
    if (this.paginationPosition == 'top') {
      this.paginationPos = 'pagination-top'
    }else if (this.paginationPosition == 'bottom') {
      this.paginationPos = 'pagination-bottom'
    }

    console.log('this.paginationPos', this.paginationPos);
    // console.log('paginationPosition', this.paginationPosition);
    // console.log(this.imagesList);
  },
  methods: {
    slideClick(item) {
      // console.log("slide click", item);
    },
  },
});
</script>

<style>
.carousel-container {
  /* position: relative; */
  /* height: 200px; */
}
.carousel__item {
  height: 200px;
  width: 100%;
  /* background-color: #258; */
  /* background-image: url(); */
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* filter: blur(8px); */
}
.carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
}

.carousel__pagination {
  position: absolute;
  /* top: 1rem; */
  /* bottom: 5px; */
  left: 0;
  right: 0;
  margin: auto;
  padding-inline-start: 0;
}

.pagination-top .carousel__pagination{
  top: 1rem;
  /* bottom: unset; */
}

.pagination-bottom .carousel__pagination{
  top: unset;
  bottom: 1rem !important;
}

.carousel__pagination-button::after {
  border-radius: 5px;
  /* background-color: rgba(0, 0, 255); */
  background-color: rgba(0, 0, 0, 0.3);
  width: 40px;
}
.more-slide .carousel__pagination-button::after{
  width: 30px ;
}

.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  /* background-color: rgb(255, 255, 0); */
  background-color: rgba(0, 0, 255);
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.carousel-slide-background {
  filter: blur(20px);
  /* background-color: rgba(255, 255, 255, 0.175); */
  /* -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px); */
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
</style>
