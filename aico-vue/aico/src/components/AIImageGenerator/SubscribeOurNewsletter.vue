<template>
  <div class="subscribe-area bg-2d0e34 position-relative z-1">
    <div class="container">
      <div class="subscribe-inner-box">
        <div
          class="row align-items-center"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="col-lg-6 col-md-12">
            <div class="content">
              <span class="sub-title d-block fw-medium">
                SUBSCRIBE NEWSLETTER
              </span>
              <h2 class="mb-0">Subscribe our newsletter for more updates</h2>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <form class="newsletter-form">
              <div class="form-group position-relative">
                <input
                  type="email"
                  class="input-newsletter d-block w-100 bg-transparent"
                  placeholder="Enter your email address"
                />
                <button type="submit" class="button d-inline-block border-0">
                  <i class="flaticon-paper-plane"></i>
                </button>
              </div>
              <div class="form-check mb-0 position-relative">
                <input
                  type="checkbox"
                  class="form-check-input shadow-none"
                  id="agreeWithUs"
                />
                <label class="form-check-label" for="agreeWithUs">
                  I agree all
                  <router-link to="/terms-conditions">
                    Terms & Conditions
                  </router-link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="shape1 position-absolute z-n1" id="shape1">
      <img src="../../assets/img/shapes/shape1.png" alt="shape1" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SubscribeOurNewsletter",
};
</script>
