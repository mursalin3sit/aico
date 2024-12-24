<template>
  <div class="works-area position-relative z-1 ptb-100">
    <div class="container demo-four-container">
      <div
        class="section-warp"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <div class="content">
          <span class="title">HOW IT WORKS</span>
          <h2>How to Generate Image</h2>
        </div>
        <div class="content">
          <p>
            Aico is an AI system that can create realistic images and art from a
            description in natural language.
          </p>
        </div>
      </div>
      <div class="row g-4 justify-content-center">
        <div
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="works-card">
            <div class="image">
              <img
                src="../../assets/img/new-images/works1.jpg"
                class="work-image"
                alt="Image"
              />
            </div>
            <router-link to="/service-details">
              <h3>Enter a Prompt Above</h3>
            </router-link>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam velit viverra sed
              consequat aliquam nullam.
            </p>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class="works-card">
            <div class="image">
              <img
                src="../../assets/img/new-images/works2.jpg"
                class="work-image"
                alt="Image"
              />
            </div>
            <router-link to="/service-details">
              <h3>Make Image with Text</h3>
            </router-link>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam velit viverra sed
              consequat aliquam nullam.
            </p>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div class="works-card">
            <div class="image">
              <img
                src="../../assets/img/new-images/works3.jpg"
                class="work-image"
                alt="Image"
              />
            </div>
            <router-link to="/service-details">
              <h3>Download Quality Image</h3>
            </router-link>
            <p>
              Lorem ipsum dolor sit amet consectetur. Aliquam velit viverra sed
              consequat aliquam nullam.
            </p>
          </div>
        </div>
      </div>
      <div class="text-center mt-50">
        <router-link to="/services" class="default-btn">
          Enter Your Prompt
          <i class="flaticon-plus-1"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowToGenerateImage",
};
</script>
