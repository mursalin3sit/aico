<template>
  <div class="features-area pb-95">
    <div class="container">
      <div
        class="section-title text-center"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <span class="sub-title d-block fw-medium">TOP FEATURES</span>
        <h2 class="mb-0 ms-auto me-auto">
          Special features of Aico that make it unique
        </h2>
      </div>
      <div class="row">
        <div
          class="col-lg-6 col-md-12"
          v-for="feature in features"
          :key="feature.id"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          :data-aos-delay="feature.dataDelay"
        >
          <div class="single-feature-box position-relative mb-25">
            <img :src="feature.image" alt="feature-image" />
            <h3>{{ feature.title }}</h3>
            <p>
              {{ feature.shortDesc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/img/features/feature1.png";
import image2 from "~/assets/img/features/feature2.png";
import image3 from "~/assets/img/features/feature3.png";
import image4 from "~/assets/img/features/feature4.png";

export default defineComponent({
  name: "TopFeatures",
  data() {
    return {
      features: [
        {
          id: 1,
          image: image1,
          title: "Responsible AI from day one",
          shortDesc:
            "Reduce risk of bias by partnering with the best founders, spearheading standards and certifications for AI.",
          dataDelay: "200",
        },
        {
          id: 2,
          image: image2,
          title: "Human optimization at scale",
          shortDesc:
            "Keep conversations grounded, factual, and relevant to your industry with over 350K skilled humans in the loop.",
          dataDelay: "300",
        },
        {
          id: 3,
          image: image3,
          title: "Impactful insights made easy",
          shortDesc:
            "Accelerate better decision making with access to enterprise-level analytics and reporting the insights automatically.",
          dataDelay: "400",
        },
        {
          id: 4,
          image: image4,
          title: "Unrivaled data at your fingertips",
          shortDesc:
            "Augment large language models with the world’s largest enterprise data set for more precise natural language processing.",
          dataDelay: "500",
        },
      ],
    };
  },
});
</script>
