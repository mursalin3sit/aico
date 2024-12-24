<template>
  <div class="demo-four-pricing-area pb-100">
    <div class="container demo-four-container">
      <div
        class="four-section-title"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <span class="title"> PRICING PLAN </span>
        <h2>Create without limits. Unlock PRO</h2>
      </div>

      <div class="row">
        <div
          class="col-lg-6 col-md-6 d-flex align-items-stretch"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="four-pricing-card d-flex flex-column">
            <h5>Premium Plan</h5>
            <h2>
              $20
              <span>/Month</span>
            </h2>
            <p>Billed annually</p>
            <p class="second-p">or <strong>$24</strong> month-to-month</p>
            <router-link to="/pricing" class="default-btn">
              Get Started PRO
              <i class="flaticon-plus-1"></i>
            </router-link>
            <ul>
              <li>
                <i class="ri-checkbox-circle-line"></i>
                PRO Access across aico.com
              </li>
              <li>
                <i class="ri-checkbox-circle-line"></i>
                Premium Access on iOS & Android Apps
              </li>
              <li>
                <i class="ri-checkbox-circle-line"></i>
                UNLIMITED AI Generations
              </li>
              <li>
                <i class="ri-checkbox-circle-line"></i>
                HIGH Resolution Downloads
              </li>
              <li>
                <i class="ri-checkbox-circle-line"></i>
                TOP PRIORITY Support on Chat
              </li>
              <li>
                <i class="ri-checkbox-circle-line"></i>
                BULK Editing for Select Tools
              </li>
              <li>
                <i class="ri-checkbox-circle-line"></i>
                Download without Watermark
              </li>
            </ul>
            <div class="new">Popular</div>
            <img
              src="../../assets/img/new-images/pricing-logo.svg"
              class="pricing-logo"
              alt="Logo"
            />
          </div>
        </div>
        <div
          class="col-lg-6 col-md-6 d-flex align-items-stretch"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class="four-pricing-card d-flex flex-column">
            <h5>Free Plan</h5>
            <h2>
              $00
              <span>/Month</span>
            </h2>
            <router-link to="/pricing" class="default-btn mt-auto">
              Get Started FREE
              <i class="flaticon-plus-1"></i>
            </router-link>
            <ul>
              <li>
                <i class="ri-checkbox-circle-line"></i>
                PRO Access across aico.com
              </li>
              <li>
                <i class="ri-checkbox-circle-line"></i>
                Premium Access on iOS & Android Apps
              </li>
              <li>
                <i class="ri-checkbox-circle-line"></i>
                UNLIMITED AI Generations
              </li>
              <li>
                <i class="ri-checkbox-circle-line"></i>
                HIGH Resolution Downloads
              </li>
              <li>
                <i class="ri-checkbox-circle-line"></i>
                TOP PRIORITY Support on Chat
              </li>
              <li>
                <i class="ri-checkbox-circle-line"></i>
                BULK Editing for Select Tools
              </li>
              <li>
                <i class="ri-checkbox-circle-line"></i>
                Download without Watermark
              </li>
            </ul>
            <img
              src="../../assets/img/new-images/pricing-logo.svg"
              class="pricing-logo"
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingPlans",
};
</script>
