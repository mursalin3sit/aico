<template>
  <div :class="['automation-area ptb-120 position-relative z-1']">
    <div class="container">
      <div class="row">
        <div
          class="col-xl-3 col-lg-3 col-md-12"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="automation-content">
            <span class="sub-title d-block fw-medium">AUTOMATION</span>
            <h2>Automate the conversations with the power of AI</h2>
            <a href="#" class="default-btn two">
              Try Aico Chatbot
              <i class="flaticon-next"></i>
            </a>
          </div>
        </div>
        <div
          class="col-xl-6 col-lg-5 col-md-12"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class="automation-image text-center">
            <video autoplay loop muted playsinline>
              <source src="../../assets/img/automation.mp4" type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
        <div
          class="col-xl-3 col-lg-4 col-md-12"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="automation-text">
            <div class="shape5">
              <img src="../../assets/img/shapes/shape5.png" alt="shape5" />
            </div>
            <p>
              Aico Chatbot is a complete customer service platform that delights
              your customers and fuels your sales.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Suspendisse quam nisl enim
              vitae elementum. Tellus tincidunt in congue.
            </p>
            <a
              href="#"
              class="link-btn d-inline-block position-relative fw-medium text-decoration-none"
            >
              Explore More
              <i class="flaticon-next"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="shape7 position-absolute z-n1">
      <img src="../../assets/img/shapes/shape7.png" alt="shape7" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AutomationContent",
};
</script>
