<template>
  <div ref="pageEl" class="page-display">
    <section class="welcome-page" id="welcome" @scroll="onScroll()">
      <button @click="movetoproject()">test</button>
      <Welcome />
    </section>
    <section id="project">
      <div>
        <div class="project-head">
          <h1 class="mt-2 font-victor">My project {{ isScrolling }}</h1>
        </div>
        <div class="project-display font-victor mt-5">
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
                class="my-2 card-distance"
                :style="`animation: slideToUp 0.${
                  5 + index
                }s ease-in-out, fadeIn 0.${5 + index}s ease-in`"
              />
              <!-- </transition> -->
            </div>
          </div>
        </div>
        <footer>&copy; Copyright 2024 Suttipong</footer>
      </div>
    </section>
  </div>
</template>

<script setup>
import folioData from "../json/folio.json";
import { ref, onMounted, watchEffect, computed } from "vue";
import { useScroll } from "@vueuse/core";

// const showWelcomePage = ref(true)
// const showDisplayPage = ref(false)
const projectInformation = ref([]);
// let pagesSrolling = ref(null);
const pageEl = ref(null);
const { x, y, isScrolling } = useScroll(pageEl);

// const scrollings = computed({
//   get(){
//     return isScrolling
//   }
// })
// console.log('sssss',showWelcomePage.value);

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

function movetoproject() {
  // console.log("sss", document.getElementsByTagName("section"));
//   setTimeout(() => {
//     document
//     .getElementsByTagName("section")
//     ["project"].scrollIntoView({ behavior: "smooth" });
// }, 500)
  // window.location.href = "#project"
  document
    .getElementsByTagName("section")
    ["project"].scrollIntoView({ behavior: "smooth" });
}
onMounted(() => {
  handleProjectInfo(folioData);
  // console.log('projectInformation =>',projectInformation);
  // testFunction()
  const element = pageEl.value;
  // element.addEventListener('mousemove', (e) => {
  //   console.log(e.pageX, e.pageY)
  // })
  // const element = pageEl.value
  element.addEventListener("mousewheel", (e) => {
    if (e.deltaY < 0) {
      console.log("scrolling up");
    } else if (e.deltaY > 0) {
      // movetoproject();
      console.log("scrolling down");
      // console.log(document.getElementsByTagName("html")[0].style.overflow = 'scroll');
      // document.getElementsByTagName("html")[0].style.overflow = 'scroll';
    }
  });
  let touchStartPosX = 0;
  element.addEventListener('touchmove', (e) => {
    // Different devices give different values with different decimal percentages.
    const currentPageX = Math.round(e.changedTouches[0].screenY);
    if (touchStartPosX === currentPageX) return;

    if (touchStartPosX - currentPageX > 0) {
      console.log("down");
    } else {
      console.log("up");
    }
    touchStartPosX = currentPageX;
  });
});
</script>

<script>
export default {
  methods: {
    handleScroll() {
      console.log("scrollscrollscroll");
    },
    onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      console.log("scroll"); // I don't get "scroll" in console.
      if (scrollTop + clientHeight >= scrollHeight) {
        console.log("bottom");
      }
    },
    // movetoproject() {
    // document
    //   .getElementsByTagName("section")
    //   ["project"].scrollIntoView({ behavior: "smooth" });
    // },
  },
};
</script>

<style>
.page-display{
  background-color: aqua;
  overflow: scroll;
  height: auto;
  width: auto;
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
.card-distance {
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
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
