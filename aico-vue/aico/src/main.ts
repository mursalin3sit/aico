import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import { createBootstrap } from "bootstrap-vue-next";

import "swiper/css";
import "swiper/css/bundle";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "aos/dist/aos.css";

import "./assets/custom.scss";

const app = createApp(App).use(router);
app.mixin({
  mounted() {
    AOS.init();
  },
});
app.use(createBootstrap());
app.mount("#app");
