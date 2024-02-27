<template>
  <div >
    <section class="welcome-page" id="welcome" @scroll="onScroll()">
        <button @click="movetoproject()">test</button>
      <Welcome />
    </section>
    <section id="project">
      <div>
        <div class="project-head">
          <h1 class="mt-2 font-victor">My project</h1>
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

<script>
import folioData from "../json/folio.json";
export default {
  data() {
    return {
      showWelcomePage: true,
      showDisplayPage: false,
      projectInformation: [],
    };
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted() {
    console.log("working...");
    this.handleProjectInfo(folioData);
    this.scrollEventActive()
  },
  methods: {
    handleScroll(){
        console.log('scrollscrollscroll');
    },
    onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
      console.log("scroll"); // I don't get "scroll" in console.
      if (scrollTop + clientHeight >= scrollHeight) {
        console.log("bottom");
      }
    },
    goToNext(btnValue) {
      if (btnValue === "next") {
        this.showWelcomePage = false;
        this.showDisplayPage = true;
      } else if (btnValue === "back") {
        this.showWelcomePage = true;
        this.showDisplayPage = false;
      }
    },
    handleProjectInfo(projectList) {
      for (let i = 0; i < projectList.length; i++) {
        this.projectInformation.push({
          projectName: projectList[i].name,
          projectDes: projectList[i].des,
          projectImageList: projectList[i].images,
          projectStack: projectList[i].stack,
        });
      }
    },
    getImageUrl(image) {
      let imagesListUrl = [];
      for (let i = 0; i < image.length; i++) {
        imagesListUrl.push(
          new URL(`~/assets/images/${image[i]}`, import.meta.url)
        );
      }
      return imagesListUrl;
    },
    movetoproject(){
        document
        .getElementsByTagName("section")
        ['project'].scrollIntoView({ behavior: "smooth" });
    },
    scrollEventActive() {
      window.addEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
      window.addEventListener("mousewheel", this.handleMouseWheel, {
        passive: false,
      }); // Other browsers

      window.addEventListener("touchstart", this.touchStart, {
        passive: false,
      }); // mobile devices
      window.addEventListener("touchmove", this.touchMove, { passive: false }); // mobile devices

      console.log('scrollEventActive');
    },
    scrollEventUnActive() {
      window.removeEventListener("resize", this.onResize);
      window.removeEventListener("mousewheel", this.handleMouseWheel, {
        passive: false,
      }); // Other browsers
      window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox

      window.removeEventListener("touchstart", this.touchStart); // mobile devices
      window.removeEventListener("touchmove", this.touchMove); // mobile devices
    },
  },
};
</script>

<style>
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
.project-head{
  height: 3rem;
  width: 100%;
  padding-top: 20px;
}

.project-head h1{
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
