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
        :modules="modules"
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
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

export default defineComponent({
  name: "GlobalBrands",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      globalBrands: [
        {
          id: 1,
          image: require("../../assets/img/brands/brand1.png"),
        },
        {
          id: 2,
          image: require("../../assets/img/brands/brand2.png"),
        },
        {
          id: 3,
          image: require("../../assets/img/brands/brand3.png"),
        },
        {
          id: 4,
          image: require("../../assets/img/brands/brand4.png"),
        },
        {
          id: 5,
          image: require("../../assets/img/brands/brand5.png"),
        },
        {
          id: 6,
          image: require("../../assets/img/brands/brand6.png"),
        },
        {
          id: 7,
          image: require("../../assets/img/brands/brand7.png"),
        },
        {
          id: 8,
          image: require("../../assets/img/brands/brand3.png"),
        },
        {
          id: 9,
          image: require("../../assets/img/brands/brand4.png"),
        },
        {
          id: 10,
          image: require("../../assets/img/brands/brand5.png"),
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
