<template>
  <div class="popular-articles-area ptb-80">
    <div class="container-fluid">
      <div class="section-title mb-30">
        <h2 class="mb-0 mw-100">Popular AI Articles</h2>
      </div>
    </div>
    <div
      class="container-fluid"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div class="popular-articles-inner">
        <Swiper
          :loop="true"
          :freemode="true"
          :grabCursor="true"
          :spaceBetween="0"
          :autoHeight="true"
          :autoplay="{
            delay: 4500,
            disableOnInteraction: false,
          }"
          :navigation="{
            nextEl: '.pa-swiper-button-next',
            prevEl: '.pa-swiper-button-prev',
          }"
          :breakpoints="{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 2,
            },
          }"
          :modules="modules"
          class="popularArticlesSwiper"
        >
          <SwiperSlide v-for="article in popularArticle" :key="article.id">
            <div class="single-popular-article-post">
              <h3>
                <router-link to="/blog-details" class="text-decoration-none">
                  {{ article.title }}
                </router-link>
              </h3>
              <ul class="meta ps-0 list-unstyled d-flex align-items-center">
                <li>
                  <div class="author d-flex align-items-center">
                    <img :src="article.image" alt="user-image" />
                    by
                    <router-link to="/blog-grid" class="text-decoration-none">
                      {{ article.name }}
                    </router-link>
                  </div>
                </li>
                <li>{{ article.date }}</li>
              </ul>
              <p>
                {{ article.description }}
              </p>
              <router-link to="/blog-details" class="default-btn two">
                Read More
                <i class="flaticon-next"></i>
              </router-link>
            </div>
          </SwiperSlide>
        </Swiper>

        <div class="pa-swiper-button-prev">
          <i class="flaticon-left-arrow-1"></i>
        </div>
        <div class="pa-swiper-button-next">
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
  name: "PopularAIArticles",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      popularArticle: [
        {
          id: 1,
          title:
            "Cheat Sheets for AI, Neural Networks, Machine Learning, Deep Learning & Data",
          image: require("../../assets/img/users/user4.jpg"),
          name: "John_Anderson",
          date: "September 24, 2024",
          description:
            "The Most Complete List of Best AI Cheat Sheets — Over the past few months, I have been collecting AI cheat sheets. From time to time I...",
        },
        {
          id: 2,
          title:
            "Study: AI models fail to reproduce human judgement about rule violations",
          image: require("../../assets/img/users/user6.jpg"),
          name: "Jane_Ronan",
          date: "September 23, 2024",
          description:
            "The Most Complete List of Best AI Cheat Sheets — Over the past few months, I have been collecting AI cheat sheets. From time to time I...",
        },
        {
          id: 3,
          title: "Self-service AI chatbots with a human element Aico",
          image: require("../../assets/img/users/user2.jpg"),
          name: "Alina_Smith",
          date: "September 22, 2024",
          description:
            "The Most Complete List of Best AI Cheat Sheets — Over the past few months, I have been collecting AI cheat sheets. From time to time I...",
        },
        {
          id: 4,
          title: "Codeless drag-and-drop chatbot builder study: AI models",
          image: require("../../assets/img/users/user4.jpg"),
          name: "James_Smith",
          date: "September 21, 2024",
          description:
            "The Most Complete List of Best AI Cheat Sheets — Over the past few months, I have been collecting AI cheat sheets. From time to time I...",
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
