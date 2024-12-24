<template>
  <div class="products-area ptb-100">
    <div class="container">
      <div class="row">
        <div
          class="col-xxl-9 col-lg-8 col-md-12"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="atar-grid-sorting row align-items-center">
            <div class="col-lg-6 col-md-6 result-count">
              <p>
                Showing
                <span class="fw-bold">1-{{ productsLoaded.length }}</span>
                out of {{ products.length }} results
              </p>
            </div>
            <div class="col-lg-6 col-md-6 ordering">
              <div class="select-box">
                <label class="d-inline-block">Sort By:</label>
                <select class="p-0 border-0 d-inline-block">
                  <option>Default</option>
                  <option>Popularity</option>
                  <option>Latest</option>
                  <option>Price: low to high</option>
                  <option>Price: high to low</option>
                </select>
              </div>
            </div>
          </div>

          <div class="row">
            <div
              class="col-xxl-4 col-md-6"
              v-for="product in productsLoaded"
              :key="product.id"
            >
              <div class="single-product-box">
                <div class="image position-relative">
                  <img :src="product.image" alt="product-image" />
                  <span
                    class="d-inline-block discount z-1"
                    v-if="product.discount"
                  >
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
                    <router-link
                      to="/product-details"
                      class="text-decoration-none"
                    >
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

            <div class="col-xxl-12 col-md-12">
              <div class="load-more-btn text-center">
                <button
                  type="button"
                  class="default-btn border-0"
                  @click="loadMore"
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-xxl-3 col-lg-4 col-md-12"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <ProductsSidebar />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductsSidebar from "./ProductsSidebar.vue";

export default defineComponent({
  name: "ProductsItem",
  components: {
    ProductsSidebar,
  },
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
        {
          id: 5,
          image: require("../../assets/img/products/product5.jpg"),
          discount: "20",
          title: "Bike AI Image",
          price: "5.00",
          oldPrice: "7.00",
        },
        {
          id: 6,
          image: require("../../assets/img/products/product6.jpg"),
          discount: "",
          title: "Retro Illustration",
          price: "5.00",
          oldPrice: "",
        },
        {
          id: 7,
          image: require("../../assets/img/products/product7.jpg"),
          discount: "20",
          title: "Magic Pillar",
          price: "5.00",
          oldPrice: "7.00",
        },
        {
          id: 8,
          image: require("../../assets/img/products/product8.jpg"),
          discount: "",
          title: "Moon Castle Illustration",
          price: "10.00",
          oldPrice: "",
        },
        {
          id: 9,
          image: require("../../assets/img/products/product9.jpg"),
          discount: "20",
          title: "Vending Machine",
          price: "5.00",
          oldPrice: "7.00",
        },
        {
          id: 10,
          image: require("../../assets/img/products/product1.jpg"),
          discount: "20",
          title: "Bot Illustration",
          price: "5.00",
          oldPrice: "5.005.00",
        },
        {
          id: 11,
          image: require("../../assets/img/products/product2.jpg"),
          discount: "",
          title: "Child Art",
          price: "15.00",
          oldPrice: "",
        },
        {
          id: 12,
          image: require("../../assets/img/products/product3.jpg"),
          discount: "25",
          title: "Model Portrait",
          price: "25.00",
          oldPrice: "37.00",
        },
        {
          id: 13,
          image: require("../../assets/img/products/product4.jpg"),
          discount: "",
          title: "Green Bot",
          price: "5.00",
          oldPrice: "",
        },
        {
          id: 14,
          image: require("../../assets/img/products/product5.jpg"),
          discount: "20",
          title: "Bike AI Image",
          price: "5.00",
          oldPrice: "7.00",
        },
        {
          id: 15,
          image: require("../../assets/img/products/product6.jpg"),
          discount: "",
          title: "Retro Illustration",
          price: "5.00",
          oldPrice: "",
        },
        {
          id: 16,
          image: require("../../assets/img/products/product7.jpg"),
          discount: "20",
          title: "Magic Pillar",
          price: "5.00",
          oldPrice: "7.00",
        },
        {
          id: 17,
          image: require("../../assets/img/products/product8.jpg"),
          discount: "",
          title: "Moon Castle Illustration",
          price: "10.00",
          oldPrice: "",
        },
        {
          id: 18,
          image: require("../../assets/img/products/product9.jpg"),
          discount: "20",
          title: "Vending Machine",
          price: "5.00",
          oldPrice: "7.00",
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
