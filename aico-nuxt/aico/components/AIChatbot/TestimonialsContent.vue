<template>
  <div class="testimonials-area position-relative z-1">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6"></div>
        <div class="col-lg-6">
          <div class="section-title">
            <span class="sub-title d-block fw-medium">TESTIMONIALS</span>
            <h2 class="mb-0">Our customers say it the best</h2>
          </div>
        </div>
      </div>

      <Swiper
        :loop="true"
        :freemode="true"
        :grabCursor="true"
        :spaceBetween="25"
        :autoplay="{
          delay: 1000,
          disableOnInteraction: false,
        }"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :breakpoints="{
          0: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 35,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 55,
          },
        }"
        :modules="[SwiperAutoplay, SwiperNavigation]"
        class="testimonialsSwiper"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <SwiperSlide v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="single-testimonial-box position-relative z-1">
            <div class="client-info d-flex align-items-center">
              <img :src="testimonial.image" alt="user-image" />
              <div>
                <h3>{{ testimonial.name }}</h3>
                <span class="d-block">
                  {{ testimonial.designation }}
                </span>
              </div>
            </div>
            <p class="fw-semibold">
              {{ testimonial.description }}
            </p>
          </div>
        </SwiperSlide>

        <div class="text-center">
          <div class="swiper-button-prev">
            <i class="ri-arrow-left-line"></i>
          </div>
          <div class="swiper-button-next">
            <i class="ri-arrow-right-line"></i>
          </div>
        </div>
      </Swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/img/users/user2.jpg";
import image2 from "~/assets/img/users/user3.jpg";
import image3 from "~/assets/img/users/user4.jpg";
import image4 from "~/assets/img/users/user5.jpg";

export default defineComponent({
  name: "TestimonialsContent",
  data() {
    return {
      testimonials: [
        {
          id: 1,
          image: image1,
          name: "Angela Carter",
          designation: "CEO, 3S Solution",
          description:
            "I use Aico on my domain landing pages and ❤️ their service! Much better than having a phone number that prospects can call, while still providing the instant response.",
        },
        {
          id: 2,
          image: image2,
          name: "Jonathon Ronan",
          designation: "CEO, Solit IT Solution",
          description:
            "The Aico chatbot facility on our website makes it even easier to gain the information you need, rapidly. If you have any questions, just ask our agents for an instant response.",
        },
        {
          id: 3,
          image: image3,
          name: "Victor James",
          designation: "Project Manager, Varn",
          description:
            "If your company is growing fast and you have great website traffic. Don’t neglect your website chat. It’s a great way to engage prospects and qualify them without having to get on a call.",
        },
        {
          id: 4,
          image: image4,
          name: "Alina Smith",
          designation: "Web Developer, Eidev",
          description:
            "I use Aico on my domain landing pages and ❤️ their service! Much better than having a phone number that prospects can call, while still providing the instant response.",
        },
        {
          id: 5,
          image: image2,
          name: "Jonathon Ronan",
          designation: "CEO, Solit IT Solution",
          description:
            "The Aico chatbot facility on our website makes it even easier to gain the information you need, rapidly. If you have any questions, just ask our agents for an instant response.",
        },
        {
          id: 6,
          image: image3,
          name: "Victor James",
          designation: "Project Manager, Varn",
          description:
            "If your company is growing fast and you have great website traffic. Don’t neglect your website chat. It’s a great way to engage prospects and qualify them without having to get on a call.",
        },
      ],
    };
  },
});
</script>
