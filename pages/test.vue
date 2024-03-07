<template>
  <div ref="pageEl" class="page-display">
    <section class="welcome-page" id="welcome">
      <!-- <button @click="moveToProjectSection()">test</button> -->
      <Welcome />
      <div class="welcome-btn" @click="moveToProjectSection()">
        <ButtonNavigate />
      </div>
    </section>
    <section id="project">
      <div>
        <div class="project-head">
          <h1 class="mt-2 font-victor">My project</h1>
        </div>
        <!-- :style="`visibility: ${scrollingToView == true ? 'hidden' : 'visible'}`" -->
        <div class=" font-victor mt-5 container-md" >
          <div class="row m-0">
            
            <div
              class="col-12 col-sm-6 col-lg-4 col-xl-3"
              v-for="(item, index) in projectInformation"
              :key="index"
            >
              <CardProject
                :projectName="item.projectName"
                :projectDes="item.projectDes"
                :projectImageList="item.projectImageList"
                :projectStack="item.projectStack"
                :projectColorRGB="item.projectColorRGB"
                class="my-2"
                :style="`animation:  slideToUp ${
                  2 + (index/4)
                }s ease-in-out, fadeIn ${2 + (index/3)}s ease-in-out`"
              />
              <!-- :style="`animation: slideToUp ${
                  2 + (index/2)
                }s ease-in-out, fadeIn ${2 + (index/2)}s ease-in`" -->
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
import { ref, onMounted, watchEffect, computed, watch } from "vue";
import { useScroll } from "@vueuse/core";

const projectInformation = ref([]);
const pageEl = ref(null);
// let scrollingToView = ref(true);
let scrollingToView = true
// let mouseScrollingBh = mouseScrolling(pageEl.value)
// const { x, y, isScrolling } = useScroll(pageEl);
const handleProjectInfo = (projectList) => {
  for (let i = 0; i < projectList.length; i++) {
    projectInformation.value.push({
      projectName: projectList[i].name,
      projectDes: projectList[i].des,
      projectImageList: getImageUrl(projectList[i].images),
      projectStack: projectList[i].stack,
      projectColorRGB: projectList[i].colorRGB
    });
  }
};

const getImageUrl = (image) => {  
  let imagesListUrl = [];
  for (let i = 0; i < image.length; i++) {
    imagesListUrl.push(new URL(`/assets/images/${image[i]}`, import.meta.url).href);
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
  console.log('projectInformation => ',projectInformation.value);
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
.welcome-btn{
  position: absolute;
  width: fit-content;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: auto;
}
#project {
  min-height: 90dvh;
}
.card-animate{
  animation-name: slideToUp;
  animation-duration: 5s;
  animation-timing-function: ease-in;
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

</style>
