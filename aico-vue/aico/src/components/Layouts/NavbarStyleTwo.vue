<template>
  <nav
    :class="[
      'navbar navbar-style-three navbar-expand-lg',
      { sticky: isSticky },
    ]"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand d-lg-none" to="/">
        <img src="../../assets/img/logo.svg" alt="logo" />
      </router-link>
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
                <router-link to="/" class="nav-link">
                  AI Image Generator
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/ai-chatbot" class="nav-link">
                  AI Chatbot
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/ai-chatbot-dark" class="nav-link">
                  AI Chatbot - Dark
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/ai-news" class="nav-link">
                  AI News
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/ai-news-dark" class="nav-link">
                  AI News - Dark
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/ai-generator" class="nav-link">
                  AI Generator
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)" class="dropdown-toggle nav-link">
              Pages
            </a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <router-link to="/about" class="nav-link">
                  About Us
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/team" class="nav-link"> Team </router-link>
              </li>
              <li class="nav-item">
                <a href="javascript:void(0)" class="dropdown-toggle nav-link">
                  Services
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/services" class="nav-link">
                      Services
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/service-details" class="nav-link">
                      Service Details
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/portfolio" class="nav-link">
                  Portfolio
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/faq" class="nav-link"> FAQ </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/profile-authentication" class="nav-link">
                  My Account
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/privacy-policy" class="nav-link">
                  Privacy Policy
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/terms-conditions" class="nav-link">
                  Terms & Conditions
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/coming-soon" class="nav-link">
                  Coming Soon
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/pricing" class="nav-link"> Pricing </router-link>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)" class="dropdown-toggle nav-link">
              Shop
            </a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <router-link to="/shop" class="nav-link"> Shop </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/product-details" class="nav-link">
                  Product Details
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/cart" class="nav-link"> Cart </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/checkout" class="nav-link">
                  Checkout
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/wishlist" class="nav-link">
                  Wishlist
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)" class="dropdown-toggle nav-link">
              Blog
            </a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <router-link to="/blog-grid" class="nav-link">
                  Blog Grid
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/blog-right-sidebar" class="nav-link">
                  Blog Right Sidebar
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/blog-details" class="nav-link">
                  Blog Details
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">
              Contact Us
            </router-link>
          </li>
        </ul>

        <router-link class="navbar-brand d-none d-lg-block" to="/">
          <img src="../../assets/img/logo.svg" alt="logo" />
        </router-link>

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
            <router-link
              to="/cart"
              class="cart-btn position-relative text-decoration-none d-inline-block"
            >
              <i class="flaticon-shopping-bag"></i>
              <span class="fw-bold">2</span>
            </router-link>
          </div>
          <div class="option-item">
            <router-link
              to="/profile-authentication"
              class="link-btn fw-medium text-decoration-none"
            >
              Login
            </router-link>
          </div>
          <div class="option-item">
            <router-link to="/contact" class="default-btn">
              <span>Get Started</span>
              <i class="flaticon-plus-1"></i>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import stateStore from "../../utils/store";

export default defineComponent({
  name: "NavbarStyleTwo",
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
