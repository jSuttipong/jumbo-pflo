// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  components: {
    dirs: ["~/components"],
  },
  // devServer: { 
  //   host: "192.168.100.69",
  //   port: 3000
  // },
  css: [
    "~/assets/css/global.css",
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/font.css",
    "vue3-carousel/dist/carousel.css",
    "~/assets/css/animate.css"
  ],
});
