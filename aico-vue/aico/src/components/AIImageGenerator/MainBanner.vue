<template>
  <div class="banner-area position-relative z-1">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="banner-content">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Aico is <br />Free AI Image Generator
            </h1>
            <p
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Aico is an AI system that can create realistic images and art from
              a description in natural language.
            </p>
            <router-link
              to="/"
              class="default-btn two"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Start Creating Now
              <i class="flaticon-next"></i>
            </router-link>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="banner-search">
            <form
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <input
                type="text"
                class="d-block w-100 input-search"
                placeholder="Enter your prompt"
              />
              <button type="submit" class="d-inline-block fw-semibold border-0">
                Generate
              </button>
            </form>
            <ul
              class="search-list ps-0 mb-0 list-unstyled"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <li class="d-inline-block">
                <span>Popular Prompt:</span>
              </li>
              <li class="d-inline-block">
                <div class="position-relative">
                  <router-link
                    to="/"
                    class="text-decoration-none d-inline-block"
                  >
                    Closeup portrait of a clown
                  </router-link>
                  <button
                    type="button"
                    class="d-inline-block bg-transparent border-0 p-0"
                  >
                    <i class="flaticon-close-1"></i>
                  </button>
                </div>
              </li>
              <li class="d-inline-block">
                <div class="position-relative">
                  <router-link
                    to="/"
                    class="text-decoration-none d-inline-block"
                  >
                    Chat Bot
                  </router-link>
                  <button
                    type="button"
                    class="d-inline-block bg-transparent border-0 p-0"
                  >
                    <i class="flaticon-close-1"></i>
                  </button>
                </div>
              </li>
              <li class="d-inline-block">
                <div class="position-relative">
                  <router-link
                    to="/"
                    class="text-decoration-none d-inline-block"
                  >
                    My pet as a king
                  </router-link>
                  <button
                    type="button"
                    class="d-inline-block bg-transparent border-0 p-0"
                  >
                    <i class="flaticon-close-1"></i>
                  </button>
                </div>
              </li>
              <li class="d-inline-block">
                <div class="position-relative">
                  <router-link
                    to="/"
                    class="text-decoration-none d-inline-block"
                  >
                    A tiny bird on a tree
                  </router-link>
                  <button
                    type="button"
                    class="d-inline-block bg-transparent border-0 p-0"
                  >
                    <i class="flaticon-close-1"></i>
                  </button>
                </div>
              </li>
              <li class="d-inline-block">
                <div class="position-relative">
                  <router-link
                    to="/"
                    class="text-decoration-none d-inline-block"
                  >
                    Hiking on galaxy
                  </router-link>
                  <button
                    type="button"
                    class="d-inline-block bg-transparent border-0 p-0"
                  >
                    <i class="flaticon-close-1"></i>
                  </button>
                </div>
              </li>
              <li class="d-inline-block">
                <div class="position-relative">
                  <router-link
                    to="/"
                    class="text-decoration-none d-inline-block"
                  >
                    Cute chubby kitten with long neck
                  </router-link>
                  <button
                    type="button"
                    class="d-inline-block bg-transparent border-0 p-0"
                  >
                    <i class="flaticon-close-1"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <ImageSlider />
    <ImageSliderTwo />
  </div>
</template>

<script lang="ts">
import ImageSlider from "./ImageSlider.vue";
import ImageSliderTwo from "./ImageSliderTwo.vue";

export default {
  name: "MainBanner",
  components: {
    ImageSlider,
    ImageSliderTwo,
  },
};
</script>
