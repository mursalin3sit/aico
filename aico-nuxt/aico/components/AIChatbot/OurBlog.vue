<template>
  <div class="blog-area pt-120 pb-70 position-relative z-1">
    <div class="container">
      <div class="section-title text-center">
        <span class="sub-title d-block fw-medium">BLOG & ARTICLE</span>
        <h2 class="mb-0 ms-auto me-auto">Read our news & article about AI</h2>
      </div>
      <div class="row justify-content-center blog-items">
        <div
          class="col-lg-4 col-sm-6 col-md-6"
          v-for="blog in blogs"
          :key="blog.id"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          :data-aos-delay="blog.dataDelay"
        >
          <div class="single-blog-post">
            <NuxtLink to="/blog-details" class="image d-block">
              <img :src="blog.image" alt="blog-image" />
            </NuxtLink>
            <div class="content">
              <ul class="meta ps-0 list-unstyled">
                <li
                  class="d-inline-block position-relative fw-medium"
                  v-for="tag in blog.tags"
                  :key="tag.id"
                >
                  <NuxtLink to="/blog-grid" class="text-decoration-none">
                    {{ tag.tag }}
                  </NuxtLink>
                </li>
              </ul>
              <h3>
                <NuxtLink to="/blog-details" class="text-decoration-none">
                  {{ blog.title }}
                </NuxtLink>
              </h3>
              <span class="date d-block">
                {{ blog.date }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import image1 from "~/assets/img/blogs/blog1.jpg";
import image2 from "~/assets/img/blogs/blog2.jpg";
import image3 from "~/assets/img/blogs/blog3.jpg";

export default defineComponent({
  name: "OurBlog",
  data() {
    return {
      blogs: [
        {
          id: 1,
          image: image1,
          tags: [
            {
              id: 1,
              tag: "AI",
            },
            {
              id: 2,
              tag: "RESEARCH",
            },
          ],
          title: "How AI helps in space research in this era",
          date: "September 28, 2024",
          dataDelay: "200",
        },
        {
          id: 2,
          image: image2,
          tags: [
            {
              id: 1,
              tag: "AI",
            },
            {
              id: 2,
              tag: "TECH",
            },
          ],
          title: "Creating digital art with the help of AI is a new trend",
          date: "September 27, 2024",
          dataDelay: "300",
        },
        {
          id: 3,
          image: image3,
          tags: [
            {
              id: 1,
              tag: "ART",
            },
            {
              id: 2,
              tag: "TECH",
            },
          ],
          title: "Art are now linked with best AI technology to explore",
          date: "September 26, 2024",
          dataDelay: "400",
        },
      ],
    };
  },
});
</script>
