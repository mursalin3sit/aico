import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "swiper/css",
    "swiper/css/pagination",
    "swiper/css/navigation",
    "/assets/css/remixicon.css",
    "/assets/fonts/flaticon.css",
    "/assets/css/style.css",
    "/assets/css/responsive.css",
  ],
  modules: ["@bootstrap-vue-next/nuxt", "nuxt-swiper", "nuxt-aos"],
  aos: {
    duration: 1000,
    once: true,
  },
  ssr: true,
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.toLowerCase() === "script",
    },
  },

  components: true,
});
