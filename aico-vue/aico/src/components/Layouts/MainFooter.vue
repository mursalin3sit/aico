<template>
  <div class="footer-area position-relative z-1">
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-5 col-lg-5 col-md-12">
          <div
            class="single-footer-widget mb-25"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <router-link
              to="/"
              class="logo d-inline-block text-decoration-none"
            >
              <img src="../../assets/img/white-logo.svg" alt="logo" />
            </router-link>
            <p>Your best AI assistant in creative & tech world.</p>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-7 col-lg-7 col-md-12">
          <div class="footer-items">
            <div class="d-flex justify-content-between">
              <div
                class="single-footer-widget mb-25"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <h3 class="fw-medium">Solutions</h3>
                <ul class="custom-links ps-0 list-unstyled mb-0">
                  <li>
                    <router-link
                      to="/service-details"
                      class="text-decoration-none"
                    >
                      AI Image Generator
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/service-details"
                      class="text-decoration-none"
                    >
                      AI Chatbot Assistant
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/service-details"
                      class="text-decoration-none"
                    >
                      AI News
                    </router-link>
                  </li>
                </ul>
              </div>
              <div
                class="single-footer-widget mb-25"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <h3 class="fw-medium">About Us</h3>
                <ul class="custom-links ps-0 list-unstyled mb-0">
                  <li>
                    <router-link to="/about" class="text-decoration-none">
                      About Aico
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/privacy-policy"
                      class="text-decoration-none"
                    >
                      Privacy Policy
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/faq" class="text-decoration-none">
                      Help Support
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/pricing" class="text-decoration-none">
                      Pricing
                    </router-link>
                  </li>
                </ul>
              </div>
              <div
                class="single-footer-widget mb-25"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <h3 class="fw-medium">Social</h3>
                <ul class="custom-links ps-0 list-unstyled mb-0">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      class="text-decoration-none"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      class="text-decoration-none"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      class="text-decoration-none"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      class="text-decoration-none"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shape2 position-absolute z-n1">
      <img src="../../assets/img/shapes/shape2.png" alt="shape2" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>
