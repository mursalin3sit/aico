<template>
  <div class="product-details-area pt-100">
    <div class="container">
      <div class="row align-items-center" data-cues="slideInUp">
        <div class="col-lg-5 col-md-12">
          <div class="product-details-image position-relative">
            <Swiper
              :slidesPerView="1"
              :loop="true"
              :grabCursor="true"
              :autoplay="{
                delay: 4500,
                disableOnInteraction: false,
              }"
              :thumbs="{ swiper: thumbsSwiper }"
              :modules="[SwiperAutoplay, SwiperFreeMode, SwiperThumbs]"
              class="productDetailsImageSlider2"
            >
              <SwiperSlide v-for="product in productsImage" :key="product.id">
                <img :src="product.image" alt="product-image" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              :loop="true"
              :freeMode="true"
              :slidesPerView="5"
              :spaceBetween="20"
              :grabCursor="true"
              :autoplay="{
                delay: 4500,
                disableOnInteraction: false,
              }"
              :watchSlidesProgress="true"
              @swiper="setThumbsSwiper"
              :modules="[SwiperAutoplay, SwiperFreeMode, SwiperThumbs]"
              class="productDetailsImageSlider"
            >
              <SwiperSlide v-for="product in productsImage" :key="product.id">
                <img :src="product.image" alt="product-image" />
              </SwiperSlide>
            </Swiper>

            <span class="d-inline-block discount z-1">-20%</span>
            <button
              type="button"
              class="fav rounded-circle z-1 p-0 d-inline-block border-0 text-center"
            >
              <i class="flaticon-heart"></i>
            </button>
          </div>
        </div>
        <div class="col-lg-7 col-md-12">
          <div class="product-details-content">
            <div class="rating">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <span class="fw-semibold">4.9</span>
              (2 reviews)
            </div>
            <h3>Cute Bot AI Image</h3>
            <div class="price">
              <span>$5.00</span>
              <span>$7.00</span>
            </div>
            <p>
              Id elit phasellus blandit mattis est arcu in nam. Arcu feugiat
              ullamcorper nam pulvinar pharetra aliquam magna urna congue. Sed
              scelerisque a dictum.
            </p>
            <p>
              Sid velit nec id tempus non. Accumsan ac amet vestibulum
              consectetur eu integer.
            </p>
            <ul class="features-list ps-0 list-unstyled">
              <li>
                <span>Category:</span>
                <NuxtLink to="/shop" class="text-decoration-none">
                  Image
                </NuxtLink>
              </li>
              <li>
                <span>Tags:</span>
                <NuxtLink to="/shop" class="text-decoration-none">
                  AI
                </NuxtLink>
                <NuxtLink to="/shop" class="text-decoration-none">
                  Image
                </NuxtLink>
                <NuxtLink to="/shop" class="text-decoration-none">
                  Illustration
                </NuxtLink>
              </li>
              <li>
                <span>Product ID:</span>
                #Ig3214
              </li>
              <li>
                <span>Availability:</span>
                In stock (7 items)
              </li>
            </ul>
            <div class="input-counter d-flex align-items-center">
              <div class="number-counter position-relative">
                <button
                  type="button"
                  class="bg-transparent p-0 border-0"
                  @click="decrementQuantity"
                >
                  <i class="ri-subtract-line"></i>
                </button>
                <input
                  type="number"
                  class="bg-transparent border-0"
                  v-model="quantity"
                  min="1"
                  max="10"
                />
                <button
                  type="button"
                  class="bg-transparent p-0 border-0"
                  @click="incrementQuantity"
                >
                  <i class="ri-add-line"></i>
                </button>
              </div>
              <button type="button" class="default-btn two border-0">
                Add To Cart
                <i class="flaticon-shopping-bag"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProductDetailsTabs />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import "swiper/css/free-mode";
import "swiper/css/thumbs";

import ProductDetailsTabs from "./ProductDetailsTabs.vue";

import image1 from "~/assets/img/products/product1.jpg";
import image2 from "~/assets/img/products/product2.jpg";
import image3 from "~/assets/img/products/product3.jpg";
import image4 from "~/assets/img/products/product4.jpg";
import image5 from "~/assets/img/products/product5.jpg";
import image6 from "~/assets/img/products/product6.jpg";
import image7 from "~/assets/img/products/product7.jpg";
import image8 from "~/assets/img/products/product8.jpg";

interface ProductImage {
  id: number;
  image: string;
}

export default defineComponent({
  name: "ProductDetails",
  components: {
    ProductDetailsTabs,
  },
  setup() {
    const thumbsSwiper = ref(null);
    const quantity = ref(1);

    const productsImage = ref<ProductImage[]>([
      {
        id: 1,
        image: image1,
      },
      {
        id: 2,
        image: image2,
      },
      {
        id: 3,
        image: image3,
      },
      {
        id: 4,
        image: image4,
      },
      {
        id: 5,
        image: image5,
      },
      {
        id: 6,
        image: image6,
      },
      {
        id: 7,
        image: image7,
      },
      {
        id: 8,
        image: image8,
      },
    ]);

    const setThumbsSwiper = (swiper: null) => {
      thumbsSwiper.value = swiper;
    };

    const incrementQuantity = () => {
      if (quantity.value < 10) {
        quantity.value++;
      }
    };

    const decrementQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--;
      }
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      productsImage,
      quantity,
      incrementQuantity,
      decrementQuantity,
    };
  },
});
</script>
