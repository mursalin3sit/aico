<template>
  <div class="service-details-area ptb-100 position-relative z-1">
    <div class="container">
      <div class="row align-items-center">
        <div
          class="col-lg-6 col-md-12"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="what-we-do-img text-center z-1 position-relative">
            <img src="../../assets/img/about/about1.jpg" alt="what-we-do-img" />
            <img src="../../assets/img/about/about2.jpg" alt="what-we-do-img" />
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

        <div
          class="col-lg-6 col-md-12"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class="what-we-do-content">
            <span class="sub-title d-block fw-medium">AI IMAGE GENERATOR</span>
            <h2>
              Aico can create original, realistic images and art from a text
              description. It can combine concepts, attributes, and styles.
            </h2>
            <p>
              Aico is an AI system that can create realistic images and art from
              a description in natural language.
            </p>
            <a href="#" class="default-btn">
              Open Editor
              <i class="flaticon-plus-1"></i>
            </a>
          </div>
        </div>
      </div>

      <div
        class="service-details-text ms-auto me-auto pt-100"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <p>
          Aico is an AI system that can create realistic images and art from a
          description in natural language. Lorem ipsum dolor sit amet
          consectetur. Tortor facilisis viverra in sed ut purus luctus morbi
          porta. Magna eros tellus vestibulum consectetur eu mauris porttitor
          suscipit in.Itu Quam proin massa nunc mattis nisl posuere. Lectus eget
          sodales lobortis tellus.
        </p>
        <p>
          Id elit phasellus blandit mattis est arcu in nam. Arcu feugiat
          ullamcorper nam pulvinar pharetra aliquam magna urna congue. Sed
          scelerisque a dictum id velit nec id tempus non. Accumsan ac amet
          vestibulum consectetur eu integer.
        </p>
      </div>

      <div
        class="pt-75"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div class="row justify-content-center">
          <div class="col-lg-3 col-6 col-md-4">
            <div class="mt-25 text-center">
              <img
                src="../../assets/img/services/service16.jpg"
                alt="service-image"
              />
            </div>
          </div>
          <div class="col-lg-3 col-6 col-md-4">
            <div class="mt-25 text-center">
              <img
                src="../../assets/img/services/service17.jpg"
                alt="service-image"
              />
            </div>
          </div>
          <div class="col-lg-3 col-6 col-md-4">
            <div class="mt-25 text-center">
              <img
                src="../../assets/img/services/service18.jpg"
                alt="service-image"
              />
            </div>
          </div>
          <div class="col-lg-3 col-6 col-md-4">
            <div class="mt-25 text-center">
              <img
                src="../../assets/img/services/service19.jpg"
                alt="service-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shape6 position-absolute z-n1">
      <img src="../../assets/img/shapes/shape6.png" alt="shape6" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Typewriter from "../Common/Typewriter.vue";

export default defineComponent({
  name: "ServiceDetails",
  components: {
    Typewriter,
  },
});
</script>
