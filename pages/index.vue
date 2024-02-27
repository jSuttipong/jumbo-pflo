<template>
  <div>
    <div v-if="showWelcomePage">
      <div class="welcome-page">
        <Welcome />
      </div>
      <!-- <ButtonControl angle="right" class="btn-next" @click="goToNext('next')" /> -->
      <!-- <NuxtLink to="/project"><ButtonControl angle="right" btnText="My Project" class="btn-next"/></NuxtLink> -->
      
    </div>
    <div v-else-if="showDisplayPage">
      <!-- <ButtonControl angle="left" class="btn-back" @click="goToNext('back')" /> -->
      <h1>My project</h1>
      <div class="mt-5">
        <div class="row m-0">
          <div
            class="col-12"
            v-for="item in projectInformation"
            :key="item.projectName"
          >
            <CardProject
              :projectName="item.projectName"
              :projectDes="item.projectDes"
              :projectImageList="item.projectImageList"
              :projectStack="item.projectStack"
              class="my-2 card-distance"
            />
          </div>
        </div>
      </div>
    </div>
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
  mounted() {
    console.log("working...");
    this.handleProjectInfo(folioData);
  },
  methods: {
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
      // for (let i = 0; i < projectList.length; i++) {
      //   this.projectInformation.push({
      //     projectName: projectList[i].name,
      //     projectDes: projectList[i].des,
      //     projectImageList: this.getImageUrl(projectList[i].images),
      //     projectStack: projectList[i].stack,
      //   });
      // }
    },
    getImageUrl(image){
      let imagesListUrl = []
      for (let i = 0; i < image.length; i++) {
        imagesListUrl.push(new URL(`~/assets/images/${image[i]}`, import.meta.url))
      }
      return imagesListUrl
    }
  },
};
</script>

<style>
.welcome-page{
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
/* .btn-back {
  position: absolute;
  top: 2%;
  left: 3%;
}
.card-distance{
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

} */
</style>
