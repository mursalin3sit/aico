<template>
  <div class="banner-posts-area">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="single-banner-post position-relative">
            <NuxtLink
              to="/blog-details"
              class="image d-block text-decoration-none"
            >
              <img
                src="~/assets/img/banners/banner-post1.jpg"
                alt="post-image"
              />
            </NuxtLink>
            <div class="content">
              <div class="meta">
                <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                  <li>September 24, 2024</li>
                  <li>
                    <div class="author d-flex align-items-center">
                      <img
                        src="~/assets/img/users/user4.jpg"
                        alt="user-image"
                      />
                      by
                      <NuxtLink
                        to="/blog-grid"
                        class="text-decoration-none fw-semibold"
                      >
                        John_Anderson
                      </NuxtLink>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="d-block"></div>
              <h3 class="mb-0">
                <NuxtLink to="/blog-details" class="text-decoration-none">
                  The reason your AI design skills are not improving
                </NuxtLink>
              </h3>
            </div>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class="single-banner-post position-relative">
            <NuxtLink
              to="/blog-details"
              class="image d-block text-decoration-none"
            >
              <img
                src="~/assets/img/banners/banner-post2.jpg"
                alt="post-image"
              />
            </NuxtLink>
            <div class="content">
              <div class="meta">
                <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                  <li>September 25, 2024</li>
                  <li>
                    <div class="author d-flex align-items-center">
                      <img
                        src="~/assets/img/users/user6.jpg"
                        alt="user-image"
                      />
                      by
                      <NuxtLink
                        to="/blog-grid"
                        class="text-decoration-none fw-semibold"
                      >
                        Jane_Ronan
                      </NuxtLink>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="d-block"></div>
              <h3 class="mb-0">
                <NuxtLink to="/blog-details" class="text-decoration-none">
                  Meet Prompt Diffusion: An AI Framework For Enabling In-Context
                  Learning
                </NuxtLink>
              </h3>
            </div>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div class="single-banner-post position-relative">
            <NuxtLink
              to="/blog-details"
              class="image d-block text-decoration-none"
            >
              <img
                src="~/assets/img/banners/banner-post3.jpg"
                alt="post-image"
              />
            </NuxtLink>
            <div class="content">
              <div class="meta">
                <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                  <li>September 26, 2024</li>
                  <li>
                    <div class="author d-flex align-items-center">
                      <img
                        src="~/assets/img/users/user4.jpg"
                        alt="user-image"
                      />
                      by
                      <NuxtLink
                        to="/blog-grid"
                        class="text-decoration-none fw-semibold"
                      >
                        James_Andy
                      </NuxtLink>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="d-block"></div>
              <h3 class="mb-0">
                <NuxtLink to="/blog-details" class="text-decoration-none">
                  Meta AI Introduces IMAGEBIND: The First Open-Sourced AI
                  Project
                </NuxtLink>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerPosts",
};
</script>
