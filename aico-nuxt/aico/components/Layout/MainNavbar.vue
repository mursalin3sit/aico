<template>
  <div :class="['navbar navbar-expand-lg', { sticky: isSticky }]">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">
        <img src="~/assets/img/white-logo.svg" class="white-logo" alt="logo" />
        <img src="~/assets/img/logo.svg" class="black-logo" alt="logo" />
      </NuxtLink>
      <a
        class="navbar-toggler text-decoration-none"
        @click="stateStoreInstance.onMobileNavbarShow"
      >
        <span class="burger-menu">
          <span class="top-bar"></span>
          <span class="middle-bar"></span>
          <span class="bottom-bar"></span>
        </span>
      </a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="javascript:void(0)" class="dropdown-toggle nav-link">
              Home
            </a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <NuxtLink to="/" class="nav-link">
                  AI Image Generator
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/ai-chatbot" class="nav-link">
                  AI Chatbot
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/ai-chatbot-dark" class="nav-link">
                  AI Chatbot - Dark
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/ai-news" class="nav-link"> AI News </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/ai-news-dark" class="nav-link">
                  AI News - Dark
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/ai-generator" class="nav-link">
                  AI Generator
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)" class="dropdown-toggle nav-link">
              Pages
            </a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <NuxtLink to="/about" class="nav-link"> About Us </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/team" class="nav-link"> Team </NuxtLink>
              </li>
              <li class="nav-item">
                <a href="javascript:void(0)" class="dropdown-toggle nav-link">
                  Services
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <NuxtLink to="/services" class="nav-link">
                      Services
                    </NuxtLink>
                  </li>
                  <li class="nav-item">
                    <NuxtLink to="/service-details" class="nav-link">
                      Service Details
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NuxtLink to="/portfolio" class="nav-link">
                  Portfolio
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/faq" class="nav-link"> FAQ </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/profile-authentication" class="nav-link">
                  My Account
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/privacy-policy" class="nav-link">
                  Privacy Policy
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/terms-conditions" class="nav-link">
                  Terms & Conditions
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/coming-soon" class="nav-link">
                  Coming Soon
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <NuxtLink to="/pricing" class="nav-link"> Pricing </NuxtLink>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)" class="dropdown-toggle nav-link">
              Shop
            </a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <NuxtLink to="/shop" class="nav-link"> Shop </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/product-details" class="nav-link">
                  Product Details
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/cart" class="nav-link"> Cart </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/checkout" class="nav-link"> Checkout </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/wishlist" class="nav-link"> Wishlist </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)" class="dropdown-toggle nav-link">
              Blog
            </a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <NuxtLink to="/blog-grid" class="nav-link">
                  Blog Grid
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/blog-right-sidebar" class="nav-link">
                  Blog Right Sidebar
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/blog-details" class="nav-link">
                  Blog Details
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <NuxtLink to="/contact" class="nav-link"> Contact Us </NuxtLink>
          </li>
        </ul>

        <div class="others-option d-flex align-items-center">
          <div class="option-item">
            <button
              type="button"
              class="search-btn bg-transparent border-0 lh-1 p-0 position-relative"
              @click="stateStoreInstance.onSearchbarShow"
            >
              <i class="flaticon-search"></i>
            </button>
          </div>
          <div class="option-item">
            <NuxtLink
              to="/cart"
              class="cart-btn position-relative text-decoration-none d-inline-block"
            >
              <i class="flaticon-shopping-bag"></i>
              <span class="fw-bold">2</span>
            </NuxtLink>
          </div>
          <div class="option-item">
            <NuxtLink
              to="/profile-authentication"
              class="link-btn fw-medium text-decoration-none"
            >
              Login
            </NuxtLink>
          </div>
          <div class="option-item">
            <NuxtLink to="/contact" class="default-btn">
              <span>Get Started</span>
              <i class="flaticon-plus-1"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import stateStore from "~/utils/store";

export default defineComponent({
  name: "MainNavbar",
  setup() {
    const isSticky = ref(false);
    const stateStoreInstance = stateStore;

    onMounted(() => {
      window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY;
        isSticky.value = scrollPos >= 100;
      });
    });

    return {
      isSticky,
      stateStoreInstance,
    };
  },
});
</script>
