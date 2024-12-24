<template>
  <div class="main-banner-area position-relative z-1 pt-100 pb-120">
    <div class="container-fluid">
      <div class="row align-items-center align-items-xl-end">
        <div class="col-lg-5 col-md-12">
          <div
            class="main-banner-image text-center position-relative"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img
              src="~/assets/img/banners/banner21.jpg"
              alt="main-banner-image"
            />
            <div class="box d-flex align-items-center text-start">
              <img
                src="~/assets/img/users/user1.jpg"
                class="rounded-circle"
                alt="user-image"
              />
              <span class="d-block">Hello! I’m Aico.</span>
            </div>
            <div class="typewriter text-start">
              <CommonTypewriter
                :toRotate="[
                  'Your AI assistant. How can I help you?',
                  'Your AI assistant. How can I help you?',
                ]"
                :period="2000"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-12">
          <div class="main-banner-content">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              A Comprehensive AI Chatbot Solution to Meet Your Requirements
            </h1>
            <div>
              <p
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                Aico Chatbot is a complete customer service platform that
                delights your customers and fuels your sales.
              </p>
              <NuxtLink
                to="/contact"
                class="default-btn two"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                View Demo
                <i class="flaticon-next"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shape3 position-absolute z-n1">
      <img src="~/assets/img/shapes/shape3.png" alt="shape3" />
    </div>
    <div class="shape4 position-absolute z-n1">
      <img src="~/assets/img/shapes/shape4.png" alt="shape4" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainBanner",
});
</script>
