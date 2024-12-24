<template>
  <div class="widget-one pb-100">
    <div class="row align-items-center">
      <div
        class="col-lg-6"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div class="generate-image">
          <img
            src="~/assets/img/new-images/generate-image1.jpg"
            class="generate"
            alt="image"
          />
        </div>
      </div>
      <div
        class="col-lg-6"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div class="generate-image-content">
          <span class="title"> IMAGE GENERATOR </span>
          <h2>Text to Image Generator</h2>
          <p>
            Aico is an AI system that can create realistic images and art from a
            description in natural language.
          </p>
          <ul>
            <li>
              <i class="ri-checkbox-circle-line"></i>
              60 day chat history
            </li>
            <li>
              <i class="ri-checkbox-circle-line"></i>
              Basic widget customization
            </li>
          </ul>

          <NuxtLink to="/about" class="default-btn">
            Generate Image
            <i class="flaticon-plus-1"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextToImageGenerator",
};
</script>
