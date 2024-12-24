<template>
  <div class="why-choose-area pb-100 bg-2d0e34">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6 col-md-12"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="why-choose-left-content">
            <div class="image position-relative">
              <img
                src="../../assets/img/why-choose-us/why-choose1.jpg"
                alt="why-choose-image"
              />
              <img
                src="../../assets/img/why-choose-us/why-choose2.jpg"
                alt="why-choose-image"
              />
            </div>
            <div class="content">
              <h2>You will also get prompt suggestion from our Ai</h2>
              <p>
                Aico is an AI system that can create realistic images and art
                from a description in natural language.
              </p>
              <router-link to="/" class="default-btn two">
                Try Aico Now
                <i class="flaticon-plus-1"></i>
              </router-link>
            </div>
          </div>
        </div>
        <div
          class="col-lg-6 col-md-12"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class="why-choose-right-content">
            <div class="content">
              <span class="sub-title d-block fw-medium">WHY AICO</span>
              <h2>
                You will get lots of variations in Aico AI image generator
              </h2>
              <p>
                Aico is an AI system that can create realistic images and art
                from a description in natural language.
              </p>
            </div>
            <div class="image position-relative">
              <img
                src="../../assets/img/why-choose-us/why-choose3.jpg"
                alt="why-choose-image"
              />
              <div class="box">
                <span class="d-block fw-medium">YOUR PROMPT SUGGESTION</span>
                <p>
                  Two bikers motocyclists, beautiful sunset landscape with
                  mountains, trees and a waterfall, cartoon artstyle
                </p>
                <a
                  href="#"
                  class="copy-btn fw-medium d-inline-block position-relative text-decoration-none"
                >
                  <i class="flaticon-copy"></i>
                  Copy Prompt
                  <i class="flaticon-next"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhyChooseUs",
};
</script>
