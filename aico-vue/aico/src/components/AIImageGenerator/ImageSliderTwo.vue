<template>
  <Swiper
    dir="rtl"
    :loop="false"
    :speed="4000"
    :freemode="false"
    :spaceBetween="20"
    :simulateTouch="false"
    :autoplay="{
      delay: 1,
      disableOnInteraction: false,
    }"
    :breakpoints="{
      0: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 6,
      },
      1200: {
        slidesPerView: 7,
      },
      1400: {
        slidesPerView: 8,
      },
    }"
    :modules="modules"
    class="bannerSwiper2"
    data-aos="fade-up"
    data-aos-once="true"
    data-aos-duration="1000"
    data-aos-delay="200"
  >
    <SwiperSlide v-for="image in imageSlider" :key="image.id">
      <img :src="image.image" alt="banner-image" />
    </SwiperSlide>
  </Swiper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

export default defineComponent({
  name: "ImageSliderTwo",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      imageSlider: [
        {
          id: 1,
          image: require("../../assets/img/banners/banner13.jpg"),
        },
        {
          id: 2,
          image: require("../../assets/img/banners/banner14.jpg"),
        },
        {
          id: 3,
          image: require("../../assets/img/banners/banner15.jpg"),
        },
        {
          id: 4,
          image: require("../../assets/img/banners/banner16.jpg"),
        },
        {
          id: 5,
          image: require("../../assets/img/banners/banner17.jpg"),
        },
        {
          id: 6,
          image: require("../../assets/img/banners/banner18.jpg"),
        },
        {
          id: 7,
          image: require("../../assets/img/banners/banner19.jpg"),
        },
        {
          id: 8,
          image: require("../../assets/img/banners/banner20.jpg"),
        },
        {
          id: 9,
          image: require("../../assets/img/banners/banner9.jpg"),
        },
        {
          id: 10,
          image: require("../../assets/img/banners/banner10.jpg"),
        },
        {
          id: 11,
          image: require("../../assets/img/banners/banner11.jpg"),
        },
        {
          id: 12,
          image: require("../../assets/img/banners/banner12.jpg"),
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
});
</script>
