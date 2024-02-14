<template>
  <div class="carousel-container">
    <Carousel :wrap-around="true">
      <Slide v-for="slide in 6" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
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
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
});
</script>

<style>
.carousel-container {
  /* position: relative; */
  height: 200px;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: #258;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__pagination {
  position: absolute;
    bottom: 5px;
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

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
