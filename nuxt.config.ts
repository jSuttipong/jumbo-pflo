// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  components: {
    dirs: ["~/components"],
  },
  modules: [
    '@vueuse/nuxt',
  ],
  // devServer: { 
  //   host: "172.27.244.244",
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
