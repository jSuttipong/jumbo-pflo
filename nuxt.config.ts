// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  app:{
    baseURL: '/jumbo-pflo/',
    buildAssetsDir: 'assets',
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: "/favicon.ico" }]
    }
  },
  components: {
    dirs: ["~/components"],
  },
  modules: [
    '@vueuse/nuxt',
  ],
  // devServer: { 
  //   host: "172.20.10.2",
  //   port: 3000
  // },
  css: [
    "~/assets/css/global.css",
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/font.css",
    "vue3-carousel/dist/carousel.css",
    "~/assets/css/animate.css",
    "~/assets/icons/close.css"
  ],
});
