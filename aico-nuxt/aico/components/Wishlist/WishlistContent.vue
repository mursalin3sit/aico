<template>
  <div class="wishlist-area ptb-100">
    <div class="container">
      <div
        class="wishlist-table table-responsive"
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
              <th scope="col">Availability</th>
              <th scope="col">Add To Cart</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <NuxtLink
                  to="/product-details"
                  class="product d-flex align-items-center text-decoration-none fw-bold"
                >
                  <img
                    src="~/assets/img/products/product1.jpg"
                    alt="product-image"
                  />
                  Bot Illustration
                </NuxtLink>
              </td>
              <td class="price">$5.00</td>
              <td class="instock">Instock</td>
              <td>
                <button type="button" class="default-btn two border-0">
                  Add To Cart
                  <i class="flaticon-shopping-bag"></i>
                </button>
              </td>
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
                <NuxtLink
                  to="/product-details"
                  class="product d-flex align-items-center text-decoration-none fw-bold"
                >
                  <img
                    src="~/assets/img/products/product2.jpg"
                    alt="product-image"
                  />
                  Cute Baby Bot Image
                </NuxtLink>
              </td>
              <td class="price">$7.00</td>
              <td class="out-of-stock">Out Of Stock</td>
              <td>
                <button type="button" class="default-btn two border-0">
                  Add To Cart
                  <i class="flaticon-shopping-bag"></i>
                </button>
              </td>
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
                <NuxtLink
                  to="/product-details"
                  class="product d-flex align-items-center text-decoration-none fw-bold"
                >
                  <img
                    src="~/assets/img/products/product3.jpg"
                    alt="product-image"
                  />
                  Futuristic Bot
                </NuxtLink>
              </td>
              <td class="price">$10.00</td>
              <td class="instock">Instock</td>
              <td>
                <button type="button" class="default-btn two border-0">
                  Add To Cart
                  <i class="flaticon-shopping-bag"></i>
                </button>
              </td>
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
      <NuxtLink
        to="/shop"
        class="continue-shopping-btn d-inline-block position-relative text-decoration-none fw-medium"
      >
        Continue Shopping
        <i class="flaticon-next"></i>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "WishlistContent",
};
</script>
