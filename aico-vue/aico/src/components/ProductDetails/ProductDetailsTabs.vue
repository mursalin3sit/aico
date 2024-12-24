<template>
  <div
    class="product-details-tabs ms-auto me-auto"
    data-aos="fade-up"
    data-aos-once="true"
    data-aos-duration="1000"
    data-aos-delay="200"
  >
    <BTabs>
      <BTab title="Description" active>
        <p>
          Aico is an AI system that can create realistic images and art from a
          description in nature language. Lorem ipsum dolor sit amet
          consectetur. Tortor facilisis viverra in sed ut purustid at luctus
          morbi porta. Magna eros tellus vestibulum consectet.
        </p>
        <p>
          Id elit phasellus blandit mattis est arcu in nam. Arcu feugiat
          ullamcorper nam pulvinar pharetra aliquam magna urna congue. Sed
          scelerisque a dictum id velit nec id tempus non. Accumsan ac amet
          vestibulum consectetur eu integer.
        </p>
      </BTab>
      <BTab title="Reviews">
        <div class="reviews-list">
          <div class="review-item position-relative">
            <img
              src="../../assets/img/users/user7.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <h3 class="fw-medium">Angela Carter</h3>
            <span class="date d-block">Jun 20, 2023 - 12:30 PM</span>
            <div class="rating">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tortor facilisis viverra
              in sed ut purustid at luctus morbi porta. Magna eros tellus
              vestibulum consectet.
            </p>
          </div>
          <div class="review-item position-relative">
            <img
              src="../../assets/img/users/user8.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <h3 class="fw-medium">Jacky Anderson</h3>
            <span class="date d-block">Jun 21, 2023 - 09:23 PM</span>
            <div class="rating">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-half-line"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tortor facilisis viverra
              in sed ut purustid at luctus morbi porta. Magna eros tellus
              vestibulum consectet.
            </p>
          </div>
          <div class="review-item position-relative">
            <img
              src="../../assets/img/users/user9.jpg"
              class="rounded-circle"
              alt="user-image"
            />
            <h3 class="fw-medium">Jane Ronan</h3>
            <span class="date d-block">Jun 22, 2023 - 11:00 AM</span>
            <div class="rating">
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-fill"></i>
              <i class="ri-star-line"></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tortor facilisis viverra
              in sed ut purustid at luctus morbi porta. Magna eros tellus
              vestibulum consectet.
            </p>
          </div>
        </div>
        <div class="review-form">
          <h2>Add A Review</h2>
          <div
            class="ratings d-flex align-items-center justify-content-between"
          >
            <span class="d-block fw-medium">Add Ratings</span>
            <div class="rating">
              <input type="radio" id="star5" name="rating" value="5" /><label
                for="star5"
              ></label>
              <input type="radio" id="star4" name="rating" value="4" /><label
                for="star4"
              ></label>
              <input type="radio" id="star3" name="rating" value="3" /><label
                for="star3"
              ></label>
              <input type="radio" id="star2" name="rating" value="2" /><label
                for="star2"
              ></label>
              <input type="radio" id="star1" name="rating" value="1" /><label
                for="star1"
              ></label>
            </div>
          </div>
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control rounded-0 shadow-none"
                placeholder="Your name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control rounded-0 shadow-none"
                placeholder="Email address"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control rounded-0 shadow-none"
                placeholder="Phone no"
              />
            </div>
            <div class="form-group">
              <textarea
                cols="30"
                rows="4"
                class="form-control rounded-0 shadow-none"
                placeholder="Write your review here"
              ></textarea>
            </div>
            <button type="submit" class="default-btn border-0 two">
              Post Review Now
              <i class="flaticon-next"></i>
            </button>
          </form>
        </div>
      </BTab>
    </BTabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BTabs, BTab } from "bootstrap-vue-next";

export default defineComponent({
  name: "ProductDetailsTabs",
  components: {
    BTabs,
    BTab,
  },
});
</script>
