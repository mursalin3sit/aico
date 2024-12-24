<template>
  <div class="cart-area ptb-100">
    <div class="container">
      <div
        class="cart-table table-responsive"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <table class="table bg-transparent border-0 mb-0">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <router-link
                  to="/product-details"
                  class="product d-flex align-items-center text-decoration-none fw-bold"
                >
                  <img
                    src="../../assets/img/products/product1.jpg"
                    alt="product-image"
                  />
                  Bot Illustration
                </router-link>
              </td>
              <td class="price">$5.00</td>
              <td>
                <ProductQuantity />
              </td>
              <td class="price">$5.00</td>
              <td>
                <button
                  type="button"
                  class="p-0 bg-transparent remove border-0 lh-1"
                >
                  <i class="ri-close-line"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <router-link
                  to="/product-details"
                  class="product d-flex align-items-center text-decoration-none fw-bold"
                >
                  <img
                    src="../../assets/img/products/product2.jpg"
                    alt="product-image"
                  />
                  Cute Baby Bot Image
                </router-link>
              </td>
              <td class="price">$7.00</td>
              <td>
                <ProductQuantity />
              </td>
              <td class="price">$14.00</td>
              <td>
                <button
                  type="button"
                  class="p-0 bg-transparent remove border-0 lh-1"
                >
                  <i class="ri-close-line"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <router-link
                  to="/product-details"
                  class="product d-flex align-items-center text-decoration-none fw-bold"
                >
                  <img
                    src="../../assets/img/products/product3.jpg"
                    alt="product-image"
                  />
                  Futuristic Bot
                </router-link>
              </td>
              <td class="price">$10.00</td>
              <td>
                <ProductQuantity />
              </td>
              <td class="price">$10.00</td>
              <td>
                <button
                  type="button"
                  class="p-0 bg-transparent remove border-0 lh-1"
                >
                  <i class="ri-close-line"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="row align-items-center coupon-cart">
        <div class="col-xl-6 col-lg-7 col-md-8">
          <form>
            <input
              type="text"
              class="form-control rounded-0 shadow-none"
              placeholder="Add coupon code"
            />
            <button type="submit" class="default-btn border-0 two">
              Apply Coupon
              <i class="flaticon-next"></i>
            </button>
          </form>
        </div>
        <div class="col-xl-6 col-lg-5 col-md-4 text-md-end">
          <button type="button" class="border-0 update-cart-btn">
            Update Cart
          </button>
        </div>
      </div>

      <router-link
        to="/shop"
        class="continue-shopping-btn d-inline-block position-relative text-decoration-none fw-medium"
      >
        Continue Shopping
        <i class="flaticon-next"></i>
      </router-link>

      <div
        class="cart-totals-box ms-auto"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div class="box">
          <h3 class="mb-0">Cart Totals</h3>
          <div class="d-flex align-items-center justify-content-between">
            <span class="d-block">Subtotal</span>
            <span class="d-block">$15.00</span>
          </div>
          <div class="d-flex align-items-center justify-content-between">
            <span class="d-block">Total</span>
            <span class="d-block">$29.00</span>
          </div>
        </div>
        <router-link to="/checkout" class="default-btn">
          Proceed To Checkout
          <i class="flaticon-next"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductQuantity from "./ProductQuantity.vue";

export default defineComponent({
  name: "CartItem",
  components: {
    ProductQuantity,
  },
});
</script>
