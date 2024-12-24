<template>
  <div>
    <div :class="['video-area position-relative z-1', className]">
      <div class="container">
        <div class="section-title">
          <span class="sub-title d-block fw-medium">WATCH VIDEO</span>
          <h2 class="mb-0 mw-820">
            We have the most easy no-code chatbot support, watch video
          </h2>
        </div>
        <div
          class="video-box text-center position-relative"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img src="../../assets/img/video.jpg" alt="video-image" />
          <div
            class="video-btn text-decoration-none"
            @click="toggler = !toggler"
          >
            <i class="flaticon-play-button-arrowhead"></i>
          </div>
        </div>
      </div>
      <div class="shape6 position-absolute z-n1" id="shape6">
        <img src="../../assets/img/shapes/shape6.png" alt="shape6" />
      </div>
    </div>
    <FsLightbox
      :toggler="toggler"
      :sources="['https://www.youtube.com/watch?v=u31qwQUeGuM']"
    />
  </div>
</template>

<script>
import FsLightbox from "fslightbox-vue/v3";

export default {
  name: "WatchVideo",
  props: ["className"],
  components: {
    FsLightbox,
  },
  data() {
    return {
      toggler: false,
    };
  },
};
</script>
