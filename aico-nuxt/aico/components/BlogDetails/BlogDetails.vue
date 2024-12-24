<template>
  <div class="blog-details-area ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="blog-details-header">
            <ul class="meta ps-0 list-unstyled d-flex align-items-center">
              <li>
                <div class="author d-flex align-items-center">
                  <img src="~/assets/img/users/user2.jpg" alt="user-image" />
                  by
                  <NuxtLink
                    to="/blog-grid"
                    class="text-decoration-none fw-semibold"
                  >
                    Alina_Smith
                  </NuxtLink>
                </div>
              </li>
              <li>July 26, 2023</li>
              <li>4 mins read</li>
            </ul>
            <h2 class="mb-0">
              I want to learn Artificial Intelligence and Machine Learning.
              Where can I start?
            </h2>
          </div>
          <div class="blog-details-image">
            <img
              src="~/assets/img/blogs/blog-details1.jpg"
              alt="blog-details-image"
            />
          </div>
          <div class="blog-details-content">
            <p>
              Aico is an AI system that can create realistic images and art from
              a description in nature language. Lorem ipsum dolor sit amet
              consectetur. Tortor facilisis viverra in sed ut purustid luctus
              morbi porta. Magna eros tellus vestibulum consectet.
            </p>
            <p>
              Id elit phasellus blandit mattis est arcu in nam. Arcu feugiat
              ullamcorper nam pulvinar pharetra aliquam magna urna congue. Sed
              scelerisque a dictum id velit nec id tempus non. Accumsan ac amet
              vestibulum consectetur eu integer.
            </p>
            <blockquote>
              <p>
                “And the day came when the risk to remain tight in a bud was
                more painful than the risk it took to blossom.
              </p>
              <cite>- John Anderson</cite>
            </blockquote>
            <p>
              Id elit phasellus blandit mattis est arcu in nam. Arcu feugiat
              ullamcorper nam pulvinar pharetra aliquam magna urna congue. Sed
              scelerisque a dictum id velit nec id tempus non. Accumsan ac amet
              vestibulum consectetur eu integer.
            </p>
            <ul class="features-list ps-0 list-unstyled">
              <li class="position-relative">
                Steampunk architecture may not be for everyone.
              </li>
              <li class="position-relative">
                Offer a one-of-a-kind aesthetic that is sure to delight and
                inspire.
              </li>
              <li class="position-relative">
                So whether you’re a die-hard steampunk fan or just curious about
                this wacky world.
              </li>
              <li class="position-relative">
                Here’s no denying the unique appeal of steampunk buildings
              </li>
            </ul>
            <p>
              Aico is an AI system that can create realistic images and art from
              a description in nature language. Lorem ipsum dolor sit amet
              consectetur. Tortor facilisis viverra in sed ut purustid luctus
              morbi porta. Magna eros tellus vestibulum consectet.
            </p>
            <p>
              Id elit phasellus blandit mattis est arcu in nam. Arcu feugiat
              ullamcorper nam pulvinar pharetra aliquam magna urna congue. Sed
              scelerisque a dictum id velit nec id tempus non. Accumsan ac amet
              vestibulum consectetur eu integer.
            </p>
            <div class="images row">
              <div class="col-6">
                <img
                  src="~/assets/img/blogs/blog-details2.jpg"
                  alt="blog-details-image"
                />
              </div>
              <div class="col-6">
                <img
                  src="~/assets/img/blogs/blog-details3.jpg"
                  alt="blog-details-image"
                />
              </div>
            </div>
            <p>
              Id elit phasellus blandit mattis est arcu in nam. Arcu feugiat
              ullamcorper nam pulvinar pharetra aliquam magna urna congue. Sed
              scelerisque a dictum id velit nec id tempus non. Accumsan ac amet
              vestibulum consectetur eu integer.
            </p>
          </div>
          <div class="blog-details-info">
            <div class="row align-items-center">
              <div class="col-xl-7 col-lg-8 col-md-7">
                <div class="tags">
                  <span class="fw-medium">Tags:</span>
                  <NuxtLink to="/blog-grid" class="text-decoration-none">
                    Artificial Intelligence
                  </NuxtLink>
                  <NuxtLink to="/blog-grid" class="text-decoration-none">
                    Networking
                  </NuxtLink>
                </div>
              </div>
              <div class="col-xl-5 col-lg-4 col-md-5">
                <div class="socials-link">
                  <span class="fw-medium">Share:</span>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    class="text-decoration-none d-inline-block fw-medium"
                  >
                    Fb
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    class="text-decoration-none d-inline-block fw-medium"
                  >
                    In
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    class="text-decoration-none d-inline-block fw-medium"
                  >
                    Li
                  </a>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    class="text-decoration-none d-inline-block fw-medium"
                  >
                    Tw
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="blog-details-prev-next">
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <span class="d-block position-relative fw-semibold sub-title">
                  <i class="flaticon-left-arrow-1"></i>
                  PREVIOUS ARTICLE
                </span>
                <div class="box position-relative">
                  <img
                    src="~/assets/img/blogs/prev-post.jpg"
                    alt="prev-post-image"
                  />
                  <span class="d-block">JULY 21, 2023</span>
                  <h3 class="mb-0">Best 15 App For Digital Transformation</h3>
                  <a
                    href="#"
                    class="link-btn position-absolute start-0 top-0 bottom-0 end-0 z-1 d-block text-decoration-none"
                  ></a>
                </div>
              </div>
              <div class="col-lg-6 col-md-12 text-end">
                <span class="d-block position-relative fw-semibold sub-title">
                  <i class="flaticon-right-arrow-1"></i>
                  NEXT ARTICLE
                </span>
                <div class="box position-relative">
                  <img
                    src="~/assets/img/blogs/next-post.jpg"
                    alt="prev-post-image"
                  />
                  <span class="d-block">JUL 20, 2023</span>
                  <h3 class="mb-0">A Simple Social Media Marketing Can Do</h3>
                  <a
                    href="#"
                    class="link-btn position-absolute start-0 top-0 bottom-0 end-0 z-1 d-block text-decoration-none"
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="blog-details-comments-area">
            <h2>Comments</h2>
            <p class="no-comments">No comments yet!</p>
          </div>
          <div class="blog-details-post-comment">
            <h2>Post a comment</h2>
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Your name"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Email address"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Phone no"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Subject"
                />
              </div>
              <div class="form-group">
                <textarea
                  cols="30"
                  rows="4"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button type="submit" class="default-btn border-0 two">
                Post Comment Now
                <i class="flaticon-next"></i>
              </button>
            </form>
          </div>
        </div>
        <div class="col-lg-4 col-md-12">
          <SideBar />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "./SideBar.vue";

export default defineComponent({
  name: "BlogDetails",
  components: {
    SideBar,
  },
});
</script>
