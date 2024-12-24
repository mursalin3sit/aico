<template>
  <div class="brands-area">
    <div class="container">
      <div class="brands-section-title text-center">
        <span class="d-block fw-semibold">Trusted by 1000+ global brands</span>
      </div>
      <Swiper
        :loop="true"
        :speed="15000"
        :freemode="false"
        :spaceBetween="25"
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
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 6,
          },
          992: {
            slidesPerView: 7,
          },
          1200: {
            slidesPerView: 7,
          },
          1400: {
            slidesPerView: 7,
          },
        }"
        :modules="[SwiperAutoplay]"
        class="brandsSwiper"
      >
        <SwiperSlide v-for="brand in globalBrands" :key="brand.id">
          <div class="brand-item text-center">
            <img :src="brand.image" alt="brand-image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/img/brands/brand1.png";
import image2 from "~/assets/img/brands/brand2.png";
import image3 from "~/assets/img/brands/brand3.png";
import image4 from "~/assets/img/brands/brand4.png";
import image5 from "~/assets/img/brands/brand5.png";
import image6 from "~/assets/img/brands/brand6.png";
import image7 from "~/assets/img/brands/brand7.png";

export default defineComponent({
  name: "GlobalBrands",
  data() {
    return {
      globalBrands: [
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
          image: image3,
        },
        {
          id: 9,
          image: image4,
        },
        {
          id: 10,
          image: image5,
        },
      ],
    };
  },
});
</script>
