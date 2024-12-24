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
          :modules="[SwiperAutoplay, SwiperNavigation]"
          class="popularArticlesSwiper"
        >
          <SwiperSlide v-for="article in popularArticle" :key="article.id">
            <div class="single-popular-article-post">
              <h3>
                <NuxtLink to="/blog-details" class="text-decoration-none">
                  {{ article.title }}
                </NuxtLink>
              </h3>
              <ul class="meta ps-0 list-unstyled d-flex align-items-center">
                <li>
                  <div class="author d-flex align-items-center">
                    <img :src="article.image" alt="user-image" />
                    by
                    <NuxtLink to="/blog-grid" class="text-decoration-none">
                      {{ article.name }}
                    </NuxtLink>
                  </div>
                </li>
                <li>{{ article.date }}</li>
              </ul>
              <p>
                {{ article.description }}
              </p>
              <NuxtLink to="/blog-details" class="default-btn two">
                Read More
                <i class="flaticon-next"></i>
              </NuxtLink>
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

import image1 from "~/assets/img/users/user4.jpg";
import image2 from "~/assets/img/users/user6.jpg";
import image3 from "~/assets/img/users/user2.jpg";

export default defineComponent({
  name: "PopularAIArticles",
  data() {
    return {
      popularArticle: [
        {
          id: 1,
          title:
            "Cheat Sheets for AI, Neural Networks, Machine Learning, Deep Learning & Data",
          image: image1,
          name: "John_Anderson",
          date: "September 24, 2024",
          description:
            "The Most Complete List of Best AI Cheat Sheets — Over the past few months, I have been collecting AI cheat sheets. From time to time I...",
        },
        {
          id: 2,
          title:
            "Study: AI models fail to reproduce human judgement about rule violations",
          image: image2,
          name: "Jane_Ronan",
          date: "September 23, 2024",
          description:
            "The Most Complete List of Best AI Cheat Sheets — Over the past few months, I have been collecting AI cheat sheets. From time to time I...",
        },
        {
          id: 3,
          title: "Self-service AI chatbots with a human element Aico",
          image: image3,
          name: "Alina_Smith",
          date: "September 22, 2024",
          description:
            "The Most Complete List of Best AI Cheat Sheets — Over the past few months, I have been collecting AI cheat sheets. From time to time I...",
        },
        {
          id: 4,
          title: "Codeless drag-and-drop chatbot builder study: AI models",
          image: image1,
          name: "James_Smith",
          date: "September 21, 2024",
          description:
            "The Most Complete List of Best AI Cheat Sheets — Over the past few months, I have been collecting AI cheat sheets. From time to time I...",
        },
      ],
    };
  },
});
</script>
