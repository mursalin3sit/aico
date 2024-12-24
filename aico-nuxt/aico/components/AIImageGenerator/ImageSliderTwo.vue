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
    :modules="[SwiperAutoplay]"
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

import image1 from "~/assets/img/banners/banner13.jpg";
import image2 from "~/assets/img/banners/banner14.jpg";
import image3 from "~/assets/img/banners/banner15.jpg";
import image4 from "~/assets/img/banners/banner16.jpg";
import image5 from "~/assets/img/banners/banner17.jpg";
import image6 from "~/assets/img/banners/banner18.jpg";
import image7 from "~/assets/img/banners/banner19.jpg";
import image8 from "~/assets/img/banners/banner20.jpg";
import image9 from "~/assets/img/banners/banner9.jpg";
import image10 from "~/assets/img/banners/banner10.jpg";
import image11 from "~/assets/img/banners/banner11.jpg";
import image12 from "~/assets/img/banners/banner12.jpg";

export default defineComponent({
  name: "ImageSliderTwo",
  data() {
    return {
      imageSlider: [
        {
          id: 1,
          image: image1,
        },
        {
          id: 2,
          image: image2,
        },
        {
          id: 3,
          image: image3,
        },
        {
          id: 4,
          image: image4,
        },
        {
          id: 5,
          image: image5,
        },
        {
          id: 6,
          image: image6,
        },
        {
          id: 7,
          image: image7,
        },
        {
          id: 8,
          image: image8,
        },
        {
          id: 9,
          image: image9,
        },
        {
          id: 10,
          image: image10,
        },
        {
          id: 11,
          image: image11,
        },
        {
          id: 12,
          image: image12,
        },
      ],
    };
  },
});
</script>
