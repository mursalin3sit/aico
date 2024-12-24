<template>
  <div class="subscribe-area">
    <div class="container">
      <div
        class="subscribe-inner-box position-relative z-1 style-two"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-12">
            <div class="content">
              <h2 class="mb-0">Subscribe our newsletter for more updates</h2>
            </div>
          </div>
          <div class="col-lg-6 col-md-12">
            <form class="newsletter-form">
              <div class="form-group mb-0 position-relative">
                <input
                  type="email"
                  class="input-newsletter d-block w-100 bg-transparent"
                  placeholder="Enter your email address"
                />
                <button type="submit" class="default-btn border-0 two">
                  Subscribe Now
                  <i class="flaticon-next"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="shape position-absolute z-n1">
          <img src="../../assets/img/shapes/shape6.png" alt="shape" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubscribeOurNewsletter",
};
</script>
