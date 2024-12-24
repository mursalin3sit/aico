<template>
  <div class="services-area pt-100 pb-75">
    <div class="container">
      <div class="section-title text-center">
        <span class="sub-title d-block fw-medium">SERVICES</span>
        <h2 class="mb-0 ms-auto me-auto">
          We create the most realistic images than ever
        </h2>
      </div>
      <div class="row justify-content-center">
        <div
          class="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="single-service-box mb-25">
            <router-link
              to="/service-details"
              class="image d-block text-decoration-none"
            >
              <img
                src="../../assets/img/services/service13.jpg"
                alt="service-image"
              />
            </router-link>
            <h3 class="mb-0">
              <router-link to="/service-details" class="text-decoration-none">
                AI Image Generator
              </router-link>
            </h3>
          </div>
        </div>
        <div
          class="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class="single-service-box mb-25">
            <router-link
              to="/service-details"
              class="image d-block text-decoration-none"
            >
              <img
                src="../../assets/img/services/service14.jpg"
                alt="service-image"
              />
            </router-link>
            <h3 class="mb-0">
              <router-link to="/service-details" class="text-decoration-none">
                AI Chatbot Support
              </router-link>
            </h3>
          </div>
        </div>
        <div
          class="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div class="single-service-box mb-25">
            <router-link
              to="/service-details"
              class="image d-block text-decoration-none"
            >
              <img
                src="../../assets/img/services/service15.jpg"
                alt="service-image"
              />
            </router-link>
            <h3 class="mb-0">
              <router-link to="/service-details" class="text-decoration-none">
                AI News & Articles
              </router-link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesContent",
};
</script>
