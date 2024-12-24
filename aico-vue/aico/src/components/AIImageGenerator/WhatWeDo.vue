<template>
  <div class="what-we-do-area ptb-100">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div
            class="what-we-do-image text-center position-relative"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img src="../../assets/img/what-we-do.png" alt="what-we-do-image" />
            <div class="typewriter">
              <Typewriter
                :toRotate="[
                  'Detailed isometric working room, pixel art, unreal engine voxel render...',
                  'Detailed isometric working room, pixel art, unreal engine voxel render...',
                ]"
                :period="2000"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="what-we-do-content">
            <span
              class="sub-title d-block fw-medium"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              WHAT CAN AICO DO
            </span>
            <h2
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Aico can create original, realistic images and art from a text
              description. It can combine concepts, attributes, and styles.
            </h2>
            <p
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Aico is an AI system that can create realistic images and art from
              a description in natural language.
            </p>
            <router-link
              to="/"
              class="default-btn"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              Open Editor
              <i class="flaticon-plus-1"></i>
            </router-link>
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
  name: "WhatWeDo",
  components: {
    Typewriter,
  },
});
</script>
