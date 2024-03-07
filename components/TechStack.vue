<template>
    <div class="tech-box text-center">
      <img :src="iconUrl" class="stack-icon" />
      <!-- {{ iconName }} -->
      <!-- <img src="../assets/svgs/database.svg" class="stack-icon" /> -->
    </div>
  </template>
  
  <script>
  export default {
    props: ["stackName"],
    data() {
      return {
        // stackName: this.stackName ? this.stackName : "none",
        iconUrl: "",
      };
    },
    mounted() {
      this.iconUrl = this.getIconUrl(this.handelStackIcon(this.stackName));
    },
    methods: {
      getIconUrl(stack) {
        const iconUrl = new URL(`/assets/svgs/${stack}.svg`, import.meta.url)
          .href;
        return iconUrl;
      },
      handelStackIcon(stack) {
        if (stack === "Vue") {
          return "vue";
        } else if (stack === "Nuxt") {
          return "nuxt";
        } else if (stack === "Node") {
          return "node-js";
        } else if (stack === "Boostrap") {
          return "bootstrap";
        } else if (stack === "Apexchart") {
          return "chart";
        } else if (stack === "API") {
          return "api";
        } else if (stack === "SQL") {
          return "database";
        } else if (stack === "Fullpage") {
          return "slider";
        } else if (stack === "Google API") {
          return "google-dev";
        }
      },
    },
  };
  </script>
  <style>
  .tech-box {
    /* background: rgba(255, 255, 255, 0.29);
    backdrop-filter: blur(9.5px);
    border-radius: 10px; */
    position: relative;
    
  }
  .tech-box .stack-icon {
    width: 100%;
    height: 20px;
    filter: invert(1) saturate(0) brightness(2) contrast(1)
      drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
    position: absolute;
    left: 0;
    top: -10px;
  }
  </style>
  