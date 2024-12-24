<template>
  <div class="demo-four-hero-area">
    <div class="container">
      <div class="demo-four-content">
        <span
          class="title"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img
            src="~/assets/img/new-images/title-text.png"
            class="title-text"
            alt="Image"
          />
          Create Anything - AI With Aico.
        </span>
        <h1
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          AI <span>Generate</span>
        </h1>
        <div
          class="search-input"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <form>
            <input
              type="text"
              class="form-control"
              placeholder="What would you like help with?"
            />
            <button class="input-button">
              <i class="ri-arrow-up-line"></i>
            </button>
          </form>
        </div>

        <BTabs>
          <BTab title="Chat" active> </BTab>
          <BTab title="Image"> </BTab>
          <BTab title="Video"> </BTab>
        </BTabs>

        <div class="banner-small-card">
          <div
            class="banner-card"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img
              src="~/assets/img/new-images/banner-icon1.svg"
              class="icon"
              alt="Image"
            />
            <h5>30+ million</h5>
            <p>Active Users</p>
            <img
              src="~/assets/img/new-images/banner-card-shape1.png"
              class="card-shape1"
              alt="Image"
            />
          </div>
          <div
            class="banner-card"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <img
              src="~/assets/img/new-images/banner-icon2.svg"
              class="icon"
              alt="Image"
            />
            <h5>8k+ Download</h5>
            <p>Download</p>
            <img
              src="~/assets/img/new-images/banner-card-shape1.png"
              class="card-shape1"
              alt="Image"
            />
          </div>
          <div
            class="banner-card"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <img
              src="~/assets/img/new-images/banner-icon3.svg"
              class="icon"
              alt="Image"
            />
            <h5>32 Thousands</h5>
            <p>Discord Members</p>
            <img
              src="~/assets/img/new-images/banner-card-shape1.png"
              class="card-shape1"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="all-shapes">
      <img
        src="~/assets/img/new-images/banner-shape1.png"
        class="banner-shape1"
        alt="Image"
      />
      <img
        src="~/assets/img/new-images/banner-shape2.png"
        class="banner-shape2"
        alt="Image"
      />
      <img
        src="~/assets/img/new-images/banner-color1.png"
        class="banner-color1"
        alt="Image"
      />
      <img
        src="~/assets/img/new-images/banner-color2.png"
        class="banner-color2"
        alt="Image"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainBanner",
});
</script>
