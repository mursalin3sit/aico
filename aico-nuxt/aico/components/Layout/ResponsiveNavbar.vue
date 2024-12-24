<template>
  <client-only>
    <div
      :class="[
        'responsive-navbar offcanvas offcanvas-end border-0',
        { show: stateStoreInstance.navbar },
      ]"
    >
      <div class="offcanvas-header">
        <NuxtLink to="/" class="logo d-inline-block">
          <img src="~/assets/img/white-logo.svg" alt="logo" />
        </NuxtLink>
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
                <NuxtLink to="/" @click="handleClick">
                  AI Image Generator
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/ai-chatbot" @click="handleClick">
                  AI Chatbot
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/ai-chatbot-dark" @click="handleClick">
                  AI Chatbot - Dark
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/ai-news" @click="handleClick">
                  AI News
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/ai-news-dark" @click="handleClick">
                  AI News - Dark
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/ai-generator" @click="handleClick">
                  AI Generate
                </NuxtLink>
              </li>
            </ul>
          </BAccordionItem>
          <BAccordionItem title="Pages">
            <ul>
              <li>
                <NuxtLink to="/about" @click="handleClick"> About Us </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/team" @click="handleClick">Team</NuxtLink>
              </li>
              <BAccordion>
                <BAccordionItem title="Services">
                  <ul>
                    <li>
                      <NuxtLink to="/services" @click="handleClick">
                        Services
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/service-details" @click="handleClick">
                        Service Details
                      </NuxtLink>
                    </li>
                  </ul>
                </BAccordionItem>
              </BAccordion>
              <li>
                <NuxtLink to="/portfolio" @click="handleClick">
                  Portfolio
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/faq" @click="handleClick">FAQ</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/profile-authentication" @click="handleClick">
                  My Account
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/privacy-policy" @click="handleClick">
                  Privacy Policy
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/terms-conditions" @click="handleClick">
                  Terms & Conditions
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/coming-soon" @click="handleClick">
                  Coming Soon
                </NuxtLink>
              </li>
            </ul>
          </BAccordionItem>
          <li class="accordion-item">
            <NuxtLink
              to="/pricing"
              class="accordion-button without-icon collapsed"
              @click="handleClick"
            >
              Pricing
            </NuxtLink>
          </li>
          <BAccordionItem title="Shop">
            <ul>
              <li>
                <NuxtLink to="/shop" @click="handleClick">Shop</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/product-details" @click="handleClick">
                  Product Details
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/cart" @click="handleClick">Cart</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/checkout" @click="handleClick">
                  Checkout
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/wishlist" @click="handleClick">
                  Wishlist
                </NuxtLink>
              </li>
            </ul>
          </BAccordionItem>
          <BAccordionItem title="Blog">
            <ul>
              <li>
                <NuxtLink to="/blog-grid" @click="handleClick">
                  Blog Grid
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blog-right-sidebar" @click="handleClick">
                  Blog Right Sidebar
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blog-details" @click="handleClick">
                  Blog Details
                </NuxtLink>
              </li>
            </ul>
          </BAccordionItem>
          <li class="accordion-item">
            <NuxtLink
              to="/contact"
              class="accordion-button without-icon collapsed"
              @click="handleClick"
            >
              Contact Us
            </NuxtLink>
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
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stateStore from "~/utils/store";

export default defineComponent({
  name: "ResponsiveNavbar",
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
