<template>
  <div class="products-area pt-100 pb-75">
    <div class="container">
      <div class="section-title">
        <h2 class="mb-0">Related Items</h2>
      </div>
      <div class="row" data-cues="slideInUp">
        <div
          class="col-xxl-3 col-md-6"
          v-for="product in products"
          :key="product.id"
        >
          <div class="single-product-box">
            <div class="image position-relative">
              <img :src="product.image" alt="product-image" />
              <span class="d-inline-block discount z-1" v-if="product.discount">
                -{{ product.discount }}%
              </span>
              <div class="cart-btn">
                <button type="button" class="default-btn two border-0">
                  Add To Cart
                  <i class="flaticon-shopping-bag"></i>
                </button>
              </div>
              <button
                type="button"
                class="fav rounded-circle z-1 p-0 d-inline-block border-0 text-center"
              >
                <i class="flaticon-heart"></i>
              </button>
            </div>

            <div class="content">
              <h3>
                <router-link to="/product-details" class="text-decoration-none">
                  {{ product.title }}
                </router-link>
              </h3>
              <div class="price">
                <span>${{ product.price }}</span>
                <span v-if="product.oldPrice">${{ product.oldPrice }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RelatedItems",
  data() {
    return {
      products: [
        {
          id: 1,
          image: require("../../assets/img/products/product1.jpg"),
          discount: "20",
          title: "Bot Illustration",
          price: "5.00",
          oldPrice: "5.005.00",
        },
        {
          id: 2,
          image: require("../../assets/img/products/product2.jpg"),
          discount: "",
          title: "Child Art",
          price: "15.00",
          oldPrice: "",
        },
        {
          id: 3,
          image: require("../../assets/img/products/product3.jpg"),
          discount: "25",
          title: "Model Portrait",
          price: "25.00",
          oldPrice: "37.00",
        },
        {
          id: 4,
          image: require("../../assets/img/products/product4.jpg"),
          discount: "",
          title: "Green Bot",
          price: "5.00",
          oldPrice: "",
        },
      ],
      length: 9,
    };
  },
  methods: {
    loadMore() {
      if (this.length > this.products.length) return;
      this.length = this.length + 3;
    },
  },
  computed: {
    productsLoaded() {
      return this.products.slice(0, this.length);
    },
  },
});
</script>
