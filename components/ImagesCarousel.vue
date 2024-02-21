<template>
  <div class="carousel-container">
    <Carousel :wrap-around="true">
      <Slide v-for="slide in imagesList" :key="slide">
        <!-- <div class="carousel__item" @click="slideClick(slide)">{{ slide }}</div> -->
        <div class="carousel__item" @click="slideClick(slide)">
          <div :style="`background: url( _nuxt/assets/images/${slide}); filter: blur(2px); background-repeat: no-repeat;background-size: cover;border-top-left-radius: 20px; border-top-right-radius: 20px;`" class="w-100 h-100" ></div>
          <img :src="`_nuxt/assets/images/${slide}`" alt="project image" >

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
  props: ["imagesList"],
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  mounted(){
    console.log(this.imagesList);
  },
  methods:{
    slideClick(item){
      console.log('slide click',item);
    }
  }
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
.carousel__item img{
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
}

.carousel__pagination {
  position: absolute;
  top: 10px;
    /* bottom: 5px; */
    left: 0;
    right: 0;
    margin: auto;
    padding-inline-start: 0;
}

.carousel__pagination-button::after {
  border-radius: 5px;
  background-color: var(--vc-pgn-background-color);
  width: 40px;
}

.carousel__pagination-button:hover::after, .carousel__pagination-button--active::after {
    background-color: var(--vc-pgn-active-color);
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
