<template>
  <div>
    <div class="project-head">
      <NuxtLink to="/"
        ><ButtonControl angle="left" btnText="Back" class="btn-back"
      /></NuxtLink>
      <h1 class="mt-2 font-victor">My project</h1>
    </div>
    <div class="project-display font-victor mt-5">
      <div class="row m-0">
        <div
          class="col-12 col-sm-6 col-lg-4 col-xl-3"
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
    <footer>&copy; Copyright 2024 Suttipong</footer>

  </div>
</template>

<script>
import folioData from "../json/folio.json";
export default {
  data() {
    return {
      projectInformation: [],
    };
  },
  mounted() {
    console.log("working...");
    this.handleProjectInfo(folioData);
  },
  methods: {
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
  },
};
</script>

<style>
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
</style>
