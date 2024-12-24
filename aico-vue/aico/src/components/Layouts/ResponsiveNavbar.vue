<template>
  <div
    :class="[
      'responsive-navbar offcanvas offcanvas-end border-0',
      { show: stateStoreInstance.navbar },
    ]"
  >
    <div class="offcanvas-header">
      <router-link to="/" class="logo d-inline-block">
        <img src="../../assets/img/white-logo.svg" alt="logo" />
      </router-link>
      <button
        type="button"
        class="close-btn bg-transparent position-relative lh-1 p-0 border-0"
        @click="stateStoreInstance.onMobileNavbarShow"
      >
        <i class="flaticon-close"></i>
      </button>
    </div>
    <div class="offcanvas-body">
      <BAccordion>
        <BAccordionItem title="Home" visible>
          <ul>
            <li>
              <router-link to="/" @click="handleClick">
                AI Image Generator
              </router-link>
            </li>
            <li>
              <router-link to="/ai-chatbot" @click="handleClick">
                AI Chatbot
              </router-link>
            </li>
            <li>
              <router-link to="/ai-chatbot-dark" @click="handleClick">
                AI Chatbot - Dark
              </router-link>
            </li>
            <li>
              <router-link to="/ai-news" @click="handleClick">
                AI News
              </router-link>
            </li>
            <li>
              <router-link to="/ai-news-dark" @click="handleClick">
                AI News - Dark
              </router-link>
            </li>
            <li>
              <router-link to="/ai-generator" @click="handleClick">
                AI Generate
              </router-link>
            </li>
          </ul>
        </BAccordionItem>
        <BAccordionItem title="Pages">
          <ul>
            <li>
              <router-link to="/about" @click="handleClick">
                About Us
              </router-link>
            </li>
            <li>
              <router-link to="/team" @click="handleClick">Team</router-link>
            </li>
            <BAccordion>
              <BAccordionItem title="Services">
                <ul>
                  <li>
                    <router-link to="/services" @click="handleClick">
                      Services
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/service-details" @click="handleClick">
                      Service Details
                    </router-link>
                  </li>
                </ul>
              </BAccordionItem>
            </BAccordion>
            <li>
              <router-link to="/portfolio" @click="handleClick">
                Portfolio
              </router-link>
            </li>
            <li>
              <router-link to="/faq" @click="handleClick">FAQ</router-link>
            </li>
            <li>
              <router-link to="/profile-authentication" @click="handleClick">
                My Account
              </router-link>
            </li>
            <li>
              <router-link to="/privacy-policy" @click="handleClick">
                Privacy Policy
              </router-link>
            </li>
            <li>
              <router-link to="/terms-conditions" @click="handleClick">
                Terms & Conditions
              </router-link>
            </li>
            <li>
              <router-link to="/coming-soon" @click="handleClick">
                Coming Soon
              </router-link>
            </li>
          </ul>
        </BAccordionItem>
        <li class="accordion-item">
          <router-link
            to="/pricing"
            class="accordion-button without-icon collapsed"
            @click="handleClick"
          >
            Pricing
          </router-link>
        </li>
        <BAccordionItem title="Shop">
          <ul>
            <li>
              <router-link to="/shop" @click="handleClick">Shop</router-link>
            </li>
            <li>
              <router-link to="/product-details" @click="handleClick">
                Product Details
              </router-link>
            </li>
            <li>
              <router-link to="/cart" @click="handleClick">Cart</router-link>
            </li>
            <li>
              <router-link to="/checkout" @click="handleClick">
                Checkout
              </router-link>
            </li>
            <li>
              <router-link to="/wishlist" @click="handleClick">
                Wishlist
              </router-link>
            </li>
          </ul>
        </BAccordionItem>
        <BAccordionItem title="Blog">
          <ul>
            <li>
              <router-link to="/blog-grid" @click="handleClick">
                Blog Grid
              </router-link>
            </li>
            <li>
              <router-link to="/blog-right-sidebar" @click="handleClick">
                Blog Right Sidebar
              </router-link>
            </li>
            <li>
              <router-link to="/blog-details" @click="handleClick">
                Blog Details
              </router-link>
            </li>
          </ul>
        </BAccordionItem>
        <li class="accordion-item">
          <router-link
            to="/contact"
            class="accordion-button without-icon collapsed"
            @click="handleClick"
          >
            Contact Us
          </router-link>
        </li>
      </BAccordion>

      <div class="others-option d-md-flex align-items-center">
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stateStore from "../../utils/store";
import { BAccordion, BAccordionItem } from "bootstrap-vue-next";

export default defineComponent({
  name: "ResponsiveNavbar",
  components: {
    BAccordion,
    BAccordionItem,
  },
  setup() {
    const stateStoreInstance = stateStore;

    const handleClick = () => {
      stateStoreInstance.navbar = false;
    };

    return {
      stateStoreInstance,
      handleClick,
    };
  },
});
</script>
