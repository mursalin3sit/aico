<template>
  <div class="products-sidebar">
    <div class="search-box position-relative">
      <form>
        <input
          type="text"
          class="form-control rounded-0 shadow-none"
          placeholder="Search products"
        />
        <button type="submit" class="p-0 bg-transparent border-0">
          <i class="flaticon-search"></i>
        </button>
      </form>
    </div>

    <div class="categories-box">
      <h3>Categories</h3>
      <ul class="ps-0 mb-0 list-unstyled">
        <li>
          <NuxtLink
            to="/shop"
            class="d-flex align-items-center justify-content-between text-decoration-none"
          >
            Creative
            <span>(142)</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/shop"
            class="d-flex align-items-center justify-content-between text-decoration-none"
          >
            Design
            <span>(34)</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/shop"
            class="d-flex align-items-center justify-content-between text-decoration-none"
          >
            AI Photos
            <span>(1024)</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/shop"
            class="d-flex align-items-center justify-content-between text-decoration-none"
          >
            Illustrations
            <span>(100)</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/shop"
            class="d-flex align-items-center justify-content-between text-decoration-none"
          >
            Logos
            <span>(13)</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/shop"
            class="d-flex align-items-center justify-content-between text-decoration-none"
          >
            Ideas
            <span>(234)</span>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="colors-box">
      <h3>Color</h3>
      <div class="colors">
        <div class="form-check d-inline-block ps-0 mb-0">
          <input
            class="form-check-input white shadow-none rounded-circle position-relative ms-0 mt-0"
            type="checkbox"
          />
        </div>
        <div class="form-check d-inline-block ps-0 mb-0">
          <input
            class="form-check-input purple shadow-none rounded-circle position-relative ms-0 mt-0"
            type="checkbox"
          />
        </div>
        <div class="form-check d-inline-block ps-0 mb-0">
          <input
            class="form-check-input red shadow-none rounded-circle position-relative ms-0 mt-0"
            type="checkbox"
          />
        </div>
        <div class="form-check d-inline-block ps-0 mb-0">
          <input
            class="form-check-input blue shadow-none rounded-circle position-relative ms-0 mt-0"
            type="checkbox"
          />
        </div>
        <div class="form-check d-inline-block ps-0 mb-0">
          <input
            class="form-check-input pink shadow-none rounded-circle position-relative ms-0 mt-0"
            type="checkbox"
          />
        </div>
      </div>
    </div>

    <div class="price-range-slider">
      <h3>Price</h3>
      <div class="range-slider" id="rangeSlider">
        <input type="range" :min="minValue" :max="maxValue" v-model="from" />
        <input type="range" :min="minValue" :max="maxValue" v-model="to" />
        <span class="d-block title">
          Price:
          <span class="rangeValues">${{ from }} - ${{ to }}</span>
        </span>
      </div>
    </div>

    <div class="featured-ads-box ms-0">
      <h3>Aico The Most Powerful Image Generator Tool</h3>
      <a href="#" class="default-btn two">
        Try Now
        <i class="flaticon-next"></i>
      </a>
      <div class="text-end">
        <img src="~/assets/img/chatbot/chatbot3.png" alt="chatbot-image" />
      </div>
      <span class="d-block">Ads 424x294</span>
    </div>

    <div class="popular-tags-box">
      <h3>Popular Tags</h3>
      <div class="tags">
        <NuxtLink to="/shop" class="text-decoration-none d-inline-block">
          AI
        </NuxtLink>
        <NuxtLink to="/shop" class="text-decoration-none d-inline-block">
          Networking
        </NuxtLink>
        <NuxtLink to="/shop" class="text-decoration-none d-inline-block">
          AI Chatbot
        </NuxtLink>
        <NuxtLink to="/shop" class="text-decoration-none d-inline-block">
          ChatGPT
        </NuxtLink>
        <NuxtLink to="/shop" class="text-decoration-none d-inline-block">
          Image Generator
        </NuxtLink>
        <NuxtLink to="/shop" class="text-decoration-none d-inline-block">
          Web
        </NuxtLink>
        <NuxtLink to="/shop" class="text-decoration-none d-inline-block">
          Technology
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProductsSidebar",
  setup() {
    const minValue = 0;
    const maxValue = 1000;
    const from = ref(40);
    const to = ref(700);

    return {
      minValue,
      maxValue,
      from,
      to,
    };
  },
});
</script>
