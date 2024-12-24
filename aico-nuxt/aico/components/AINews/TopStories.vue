<template>
  <div class="top-stories-area pb-80">
    <div class="container">
      <div class="section-title text-center mb-30">
        <h2 class="mb-0 mw-100">Top Stories</h2>
      </div>
      <div
        class="topStoriesSwiper position-relative"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <Swiper
          :loop="true"
          :freemode="true"
          :grabCursor="true"
          :spaceBetween="25"
          :autoplay="{
            delay: 4500,
            disableOnInteraction: false,
          }"
          :navigation="{
            nextEl: '.ts-swiper-button-next',
            prevEl: '.ts-swiper-button-prev',
          }"
          :breakpoints="{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            },
          }"
          :modules="[SwiperAutoplay, SwiperNavigation]"
        >
          <SwiperSlide v-for="storie in stories" :key="storie.id">
            <div class="single-top-story-post">
              <div class="image position-relative">
                <NuxtLink to="/blog-details" class="d-block">
                  <img :src="storie.image" alt="top-story-image" />
                </NuxtLink>
                <span class="category">
                  {{ storie.category }}
                </span>
              </div>
              <div class="content">
                <h3>
                  <NuxtLink to="/blog-details" class="text-decoration-none">
                    {{ storie.title }}
                  </NuxtLink>
                </h3>
                <ul
                  class="meta ps-0 mb-0 list-unstyled d-flex align-items-center"
                >
                  <li>
                    <div class="author d-flex align-items-center">
                      <img :src="storie.userImage" alt="user-image" />
                      by
                      <NuxtLink
                        to="/blog-grid"
                        class="text-decoration-none fw-semibold"
                      >
                        {{ storie.name }}
                      </NuxtLink>
                    </div>
                  </li>
                  <li>{{ storie.date }}</li>
                </ul>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div class="ts-swiper-button-prev">
          <i class="flaticon-left-arrow-1"></i>
        </div>
        <div class="ts-swiper-button-next">
          <i class="flaticon-right-arrow-1"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/img/top-stories/top-story1.jpg";
import image2 from "~/assets/img/top-stories/top-story2.jpg";
import image3 from "~/assets/img/top-stories/top-story3.jpg";
import image4 from "~/assets/img/top-stories/top-story4.jpg";
import userImage1 from "~/assets/img/users/user4.jpg";
import userImage2 from "~/assets/img/users/user6.jpg";
import userImage3 from "~/assets/img/users/user2.jpg";
import userImage4 from "~/assets/img/users/user3.jpg";

export default defineComponent({
  name: "TopStories",
  data() {
    return {
      stories: [
        {
          id: 1,
          image: image1,
          category: "Featured",
          title: "The AI takeover of Google search starts now",
          userImage: userImage1,
          name: "John_Andy",
          date: "September 24, 2024",
        },
        {
          id: 2,
          image: image2,
          category: "Popular",
          title: "Machine learning with ChatGPT cheat sheet",
          userImage: userImage2,
          name: "Alina_Smith",
          date: "September 23, 2024",
        },
        {
          id: 3,
          image: image3,
          category: "New",
          title: "AutoGPT: Everything you need to know in 2023",
          userImage: userImage3,
          name: "Sarah_Taylor",
          date: "September 22, 2024",
        },
        {
          id: 4,
          image: image4,
          category: "Featured",
          title: "8 Open-source alternative to ChatGPT and Bard",
          userImage: userImage4,
          name: "David_John",
          date: "September 21, 2024",
        },
        {
          id: 5,
          image: image1,
          category: "Featured",
          title: "The AI takeover of Google search starts now",
          userImage: userImage1,
          name: "John_Andy",
          date: "September 24, 2024",
        },
        {
          id: 6,
          image: image2,
          category: "Popular",
          title: "Machine learning with ChatGPT cheat sheet",
          userImage: userImage2,
          name: "Alina_Smith",
          date: "September 23, 2024",
        },
        {
          id: 7,
          image: image3,
          category: "New",
          title: "AutoGPT: Everything you need to know in 2023",
          userImage: userImage3,
          name: "Sarah_Taylor",
          date: "September 22, 2024",
        },
        {
          id: 8,
          image: image4,
          category: "Featured",
          title: "8 Open-source alternative to ChatGPT and Bard",
          userImage: userImage4,
          name: "David_John",
          date: "September 21, 2024",
        },
      ],
    };
  },
});
</script>
