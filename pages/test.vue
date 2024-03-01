<template>
  <div ref="pageEl" class="page-display">
    <section class="welcome-page" id="welcome">
      <!-- <button @click="moveToProjectSection()">test</button> -->
      <Welcome />
    </section>
    <section id="project">
      <div>
        <div class="project-head">
          <h1 class="mt-2 font-victor">My project {{ isScrolling }}</h1>
        </div>
        <div class=" font-victor mt-5 container-md">
          <div class="row m-0">
            <div
              class="col-12 col-sm-6 col-lg-4 col-xl-3"
              v-for="(item, index) in projectInformation"
              :key="index"
            >
              <!-- <transition name="fadeInUp" mode="out-in"> -->
              <CardProject
                :projectName="item.projectName"
                :projectDes="item.projectDes"
                :projectImageList="item.projectImageList"
                :projectStack="item.projectStack"
                class="my-2"
                :style="`animation: slideToUp 0.${
                  5 + index
                }s ease-in-out, fadeIn 0.${5 + index}s ease-in`"
              />
              <!-- </transition> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>&copy; Copyright 2024 Suttipong</footer>
  </div>
</template>

<script setup>
import folioData from "../json/folio.json";
import { ref, onMounted, watchEffect, computed } from "vue";
import { useScroll } from "@vueuse/core";

const projectInformation = ref([]);
const pageEl = ref(null);
const { x, y, isScrolling } = useScroll(pageEl);

let scrollingToView = true

const handleProjectInfo = (projectList) => {
  for (let i = 0; i < projectList.length; i++) {
    projectInformation.value.push({
      projectName: projectList[i].name,
      projectDes: projectList[i].des,
      projectImageList: projectList[i].images,
      projectStack: projectList[i].stack,
    });
  }
};

const getImageUrl = (image) => {
  let imagesListUrl = [];
  for (let i = 0; i < image.length; i++) {
    imagesListUrl.push(new URL(`~/assets/images/${image[i]}`, import.meta.url));
  }
  return imagesListUrl;
};

function moveToProjectSection() {
  scrollingToView = false
  // window.location.href = "#project"
  document
    .getElementsByTagName("section")
    ["project"].scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
    document.getElementsByTagName("html")[0].style.overflowY = 'scroll';
  }, 500)
}
onMounted(() => {
  handleProjectInfo(folioData);
  const element = pageEl.value;
  setTimeout(() => {
  document
    .getElementsByTagName("section")
    ["welcome"].scrollIntoView();
  })
  element.addEventListener("mousewheel", (e) => {
    if (scrollingToView === true) {
      if (e.deltaY < 0) {
      console.log("scrolling up");
    } else if (e.deltaY > 0) {
      moveToProjectSection();
      console.log("scrolling down");
    }
    }
  });
  let touchStartPosX = 0;
  element.addEventListener('touchmove', (e) => {
    if (scrollingToView === true) {
      // Different devices give different values with different decimal percentages.
    const currentPageX = Math.round(e.changedTouches[0].screenY);
    if (touchStartPosX === currentPageX) return;

    if (touchStartPosX - currentPageX > 0) {
      console.log("down");
      moveToProjectSection();
    } else {
      console.log("up");
    }
    touchStartPosX = currentPageX;
    }
  });
});
</script>

<style>
.page-display{
  /* background-color: aqua; */
  /* width: 100dvw; */
  /* background-color: aqua;
  overflow: scroll;
  height: auto;
  width: auto; */
}
.welcome-page {
  height: 100dvh;
  position: relative;
}
.btn-next {
  position: absolute;
  bottom: 7%;
  left: 0;
  right: 0;
  margin: auto;
}
.project-head {
  height: 3rem;
  width: 100%;
  padding-top: 20px;
}

.project-head h1 {
  text-align: center;
  color: #fff;
}

.btn-next {
  position: absolute;
  bottom: 7%;
  left: 0;
  right: 0;
  margin: auto;
}
.btn-back {
  position: absolute;
  top: 3%;
  left: 2.1%;
}

/* animate transition */
.fadeInUp-enter-active,
.fadeInUp-leave-active {
  transition: opacity 1.2s;
}

.fadeInUp-enter,
.fadeInUp-leave-to {
  animation: slideToUp 1s;
  opacity: 0;
}
</style>
