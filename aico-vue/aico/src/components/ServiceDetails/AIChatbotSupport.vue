<template>
  <div class="chatbot-area ptb-100">
    <div class="container">
      <div
        class="chatbot-inner-box"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="content">
              <span class="sub-title d-block fw-medium">
                TRY OTHER PRODUCTS
              </span>
              <h2>We also have AI Chatbot support system for you</h2>
              <router-link to="/service-details" class="default-btn two">
                Try Now
                <i class="flaticon-plus-1"></i>
              </router-link>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="image text-center text-md-end position-relative">
              <img
                src="../../assets/img/chatbot/chatbot1.png"
                alt="chatbot-image"
              />
              <div class="typewriter text-start">
                <img
                  src="../../assets/img/users/user1.jpg"
                  class="rounded-circle"
                  alt="user-image"
                />
                <span class="d-block">Hello! I’m Aico.</span>
                <Typewriter
                  :toRotate="['How can I help you?', 'How can I help you?']"
                  :period="2000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Typewriter from "../Common/Typewriter.vue";

export default defineComponent({
  name: "AIChatbotSupport",
  components: {
    Typewriter,
  },
});
</script>
