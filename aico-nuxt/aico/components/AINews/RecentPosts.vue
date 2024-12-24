<template>
  <div class="recent-posts-area pt-80 pb-55">
    <div class="container">
      <div class="section-title mb-30">
        <h2 class="mb-0 mw-100">Recent Posts</h2>
      </div>
      <div class="row justify-content-center">
        <div
          class="col-xxl-4 col-lg-6 col-md-6"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="single-recent-post position-relative mb-25">
            <NuxtLink
              to="/blog-details"
              class="image d-block text-decoration-none"
            >
              <img
                src="~/assets/img/recent-posts/recent-post1.jpg"
                alt="post-image"
              />
            </NuxtLink>
            <div class="content">
              <div class="meta">
                <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                  <li>September 24, 2023</li>
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
              <h3 class="mb-0">
                <NuxtLink to="/blog-details" class="text-decoration-none">
                  3 ways to access GPT-4 for fully free
                </NuxtLink>
              </h3>
            </div>
          </div>
          <div class="single-recent-post position-relative mb-25">
            <NuxtLink
              to="/blog-details"
              class="image d-block text-decoration-none"
            >
              <img
                src="~/assets/img/recent-posts/recent-post2.jpg"
                alt="post-image"
              />
            </NuxtLink>
            <div class="content">
              <div class="meta">
                <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                  <li>September 25, 2023</li>
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
              <h3 class="mb-0">
                <NuxtLink to="/blog-details" class="text-decoration-none">
                  Heavy research on AI can be effective in the future
                </NuxtLink>
              </h3>
            </div>
          </div>
        </div>
        <div
          class="col-xxl-4 col-lg-6 col-md-6"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class="single-recent-post position-relative mb-25">
            <NuxtLink
              to="/blog-details"
              class="image d-block text-decoration-none"
            >
              <img
                src="~/assets/img/recent-posts/recent-post3.jpg"
                alt="post-image"
              />
            </NuxtLink>
            <div class="content">
              <div class="meta">
                <ul class="ps-0 mb-0 list-unstyled d-flex align-items-center">
                  <li>September 26, 2023</li>
                  <li>
                    <div class="author d-flex align-items-center">
                      <img
                        src="~/assets/img/users/user2.jpg"
                        alt="user-image"
                      />
                      by
                      <NuxtLink
                        to="/blog-grid"
                        class="text-decoration-none fw-semibold"
                      >
                        Alina_Smith
                      </NuxtLink>
                    </div>
                  </li>
                </ul>
              </div>
              <h3 class="mb-0">
                <NuxtLink to="/blog-details" class="text-decoration-none">
                  Baby AGI: The Birth of a Fully Autonomous AI
                </NuxtLink>
              </h3>
            </div>
            <span class="category">Popular</span>
          </div>
        </div>
        <div
          class="col-xxl-4 col-lg-6 col-md-12"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div class="recent-posts-list">
            <div class="box">
              <div class="row align-items-center">
                <div class="col-lg-3 col-sm-3">
                  <NuxtLink
                    to="/blog-details"
                    class="image d-block text-decoration-none"
                  >
                    <img
                      src="~/assets/img/recent-posts/recent-post4.jpg"
                      alt="post-image"
                    />
                  </NuxtLink>
                </div>
                <div class="col-lg-9 col-sm-9">
                  <div class="content">
                    <h3>
                      <NuxtLink to="/blog-details" class="text-decoration-none">
                        LangChain 101: Build your own GPT-Powered applications
                      </NuxtLink>
                    </h3>
                    <ul
                      class="meta ps-0 mb-0 list-unstyled d-flex align-items-center"
                    >
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
                            John_Smith
                          </NuxtLink>
                        </div>
                      </li>
                      <li>September 24, 2023</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="row align-items-center">
                <div class="col-lg-3 col-sm-3">
                  <NuxtLink
                    to="/blog-details"
                    class="image d-block text-decoration-none"
                  >
                    <img
                      src="~/assets/img/recent-posts/recent-post5.jpg"
                      alt="post-image"
                    />
                  </NuxtLink>
                </div>
                <div class="col-lg-9 col-sm-9">
                  <div class="content">
                    <h3>
                      <NuxtLink to="/blog-details" class="text-decoration-none">
                        Mastering Generative AI and Prompt Engineering
                      </NuxtLink>
                    </h3>
                    <ul
                      class="meta ps-0 mb-0 list-unstyled d-flex align-items-center"
                    >
                      <li>
                        <div class="author d-flex align-items-center">
                          <img
                            src="~/assets/img/users/user2.jpg"
                            alt="user-image"
                          />
                          by
                          <NuxtLink
                            to="/blog-grid"
                            class="text-decoration-none fw-semibold"
                          >
                            Alina_Smith
                          </NuxtLink>
                        </div>
                      </li>
                      <li>September 25, 2023</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="row align-items-center">
                <div class="col-lg-3 col-sm-3">
                  <NuxtLink
                    to="/blog-details"
                    class="image d-block text-decoration-none"
                  >
                    <img
                      src="~/assets/img/recent-posts/recent-post6.jpg"
                      alt="post-image"
                    />
                  </NuxtLink>
                </div>
                <div class="col-lg-9 col-sm-9">
                  <div class="content">
                    <h3>
                      <NuxtLink to="/blog-details" class="text-decoration-none">
                        5 Free Tools For Detecting ChatGPT, GPT3, and GPT2
                      </NuxtLink>
                    </h3>
                    <ul
                      class="meta ps-0 mb-0 list-unstyled d-flex align-items-center"
                    >
                      <li>
                        <div class="author d-flex align-items-center">
                          <img
                            src="~/assets/img/users/user3.jpg"
                            alt="user-image"
                          />
                          by
                          <NuxtLink
                            to="/blog-grid"
                            class="text-decoration-none fw-semibold"
                          >
                            David_John
                          </NuxtLink>
                        </div>
                      </li>
                      <li>September 26, 2023</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="row align-items-center">
                <div class="col-lg-3 col-sm-3">
                  <NuxtLink
                    to="/blog-details"
                    class="image d-block text-decoration-none"
                  >
                    <img
                      src="~/assets/img/recent-posts/recent-post7.jpg"
                      alt="post-image"
                    />
                  </NuxtLink>
                </div>
                <div class="col-lg-9 col-sm-9">
                  <div class="content">
                    <h3>
                      <NuxtLink to="/blog-details" class="text-decoration-none">
                        4 Ways to Generate Passive Income Using AI
                      </NuxtLink>
                    </h3>
                    <ul
                      class="meta ps-0 mb-0 list-unstyled d-flex align-items-center"
                    >
                      <li>
                        <div class="author d-flex align-items-center">
                          <img
                            src="~/assets/img/users/user1.jpg"
                            alt="user-image"
                          />
                          by
                          <NuxtLink
                            to="/blog-grid"
                            class="text-decoration-none fw-semibold"
                          >
                            ChatBot
                          </NuxtLink>
                        </div>
                      </li>
                      <li>September 27, 2023</li>
                    </ul>
                  </div>
                </div>
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
  name: "RecentPosts",
};
</script>
