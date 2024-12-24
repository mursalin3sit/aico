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
          :modules="modules"
        >
          <SwiperSlide v-for="storie in stories" :key="storie.id">
            <div class="single-top-story-post">
              <div class="image position-relative">
                <router-link to="/blog-details" class="d-block">
                  <img :src="storie.image" alt="top-story-image" />
                </router-link>
                <span class="category">
                  {{ storie.category }}
                </span>
              </div>
              <div class="content">
                <h3>
                  <router-link to="/blog-details" class="text-decoration-none">
                    {{ storie.title }}
                  </router-link>
                </h3>
                <ul
                  class="meta ps-0 mb-0 list-unstyled d-flex align-items-center"
                >
                  <li>
                    <div class="author d-flex align-items-center">
                      <img :src="storie.userImage" alt="user-image" />
                      by
                      <router-link
                        to="/blog-grid"
                        class="text-decoration-none fw-semibold"
                      >
                        {{ storie.name }}
                      </router-link>
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
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

export default defineComponent({
  name: "TopStories",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      stories: [
        {
          id: 1,
          image: require("../../assets/img/top-stories/top-story1.jpg"),
          category: "Featured",
          title: "The AI takeover of Google search starts now",
          userImage: require("../../assets/img/users/user4.jpg"),
          name: "John_Andy",
          date: "September 24, 2024",
        },
        {
          id: 2,
          image: require("../../assets/img/top-stories/top-story2.jpg"),
          category: "Popular",
          title: "Machine learning with ChatGPT cheat sheet",
          userImage: require("../../assets/img/users/user6.jpg"),
          name: "Alina_Smith",
          date: "September 23, 2024",
        },
        {
          id: 3,
          image: require("../../assets/img/top-stories/top-story3.jpg"),
          category: "New",
          title: "AutoGPT: Everything you need to know in 2023",
          userImage: require("../../assets/img/users/user2.jpg"),
          name: "Sarah_Taylor",
          date: "September 22, 2024",
        },
        {
          id: 4,
          image: require("../../assets/img/top-stories/top-story4.jpg"),
          category: "Featured",
          title: "8 Open-source alternative to ChatGPT and Bard",
          userImage: require("../../assets/img/users/user3.jpg"),
          name: "David_John",
          date: "September 21, 2024",
        },
        {
          id: 5,
          image: require("../../assets/img/top-stories/top-story1.jpg"),
          category: "Featured",
          title: "The AI takeover of Google search starts now",
          userImage: require("../../assets/img/users/user4.jpg"),
          name: "John_Andy",
          date: "September 24, 2024",
        },
        {
          id: 6,
          image: require("../../assets/img/top-stories/top-story2.jpg"),
          category: "Popular",
          title: "Machine learning with ChatGPT cheat sheet",
          userImage: require("../../assets/img/users/user6.jpg"),
          name: "Alina_Smith",
          date: "September 23, 2024",
        },
        {
          id: 7,
          image: require("../../assets/img/top-stories/top-story3.jpg"),
          category: "New",
          title: "AutoGPT: Everything you need to know in 2023",
          userImage: require("../../assets/img/users/user2.jpg"),
          name: "Sarah_Taylor",
          date: "September 22, 2024",
        },
        {
          id: 8,
          image: require("../../assets/img/top-stories/top-story4.jpg"),
          category: "Featured",
          title: "8 Open-source alternative to ChatGPT and Bard",
          userImage: require("../../assets/img/users/user3.jpg"),
          name: "David_John",
          date: "September 21, 2024",
        },
      ],
    };
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
});
</script>
