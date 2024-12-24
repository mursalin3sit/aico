<template>
  <div class="featured-trending-posts">
    <div class="box">
      <h3>
        <router-link to="/blog-details" class="text-decoration-none">
          LangChain 101: Build your own GPT-Powered applications
        </router-link>
      </h3>
      <ul class="meta mb-0 ps-0 list-unstyled d-flex align-items-center">
        <li>
          <div class="author d-flex align-items-center">
            <img src="../../assets/img/users/user4.jpg" alt="user-image" />
            <router-link
              to="/blog-grid"
              class="text-decoration-none fw-semibold"
            >
              John_Anderson
            </router-link>
          </div>
        </li>
        <li>September 27, 2023</li>
      </ul>
    </div>
    <div class="box">
      <h3>
        <router-link to="/blog-details" class="text-decoration-none">
          10 Websites to Get Amazing Data for Data Science
        </router-link>
      </h3>
      <ul class="meta mb-0 ps-0 list-unstyled d-flex align-items-center">
        <li>
          <div class="author d-flex align-items-center">
            <img src="../../assets/img/users/user6.jpg" alt="user-image" />
            <router-link
              to="/blog-grid"
              class="text-decoration-none fw-semibold"
            >
              James_Andy
            </router-link>
          </div>
        </li>
        <li>September 28, 2023</li>
      </ul>
    </div>
    <div class="box">
      <h3>
        <router-link to="/blog-details" class="text-decoration-none">
          4 Ways to Generate Passive Income Using ChatGPT
        </router-link>
      </h3>
      <ul class="meta mb-0 ps-0 list-unstyled d-flex align-items-center">
        <li>
          <div class="author d-flex align-items-center">
            <img src="../../assets/img/users/user4.jpg" alt="user-image" />
            <router-link
              to="/blog-grid"
              class="text-decoration-none fw-semibold"
            >
              John_Anderson
            </router-link>
          </div>
        </li>
        <li>September 29, 2023</li>
      </ul>
    </div>
    <div class="box">
      <h3>
        <router-link to="/blog-details" class="text-decoration-none">
          5 Free Tools For Detecting ChatGPT, GPT3, and GPT2
        </router-link>
      </h3>
      <ul class="meta mb-0 ps-0 list-unstyled d-flex align-items-center">
        <li>
          <div class="author d-flex align-items-center">
            <img src="../../assets/img/users/user6.jpg" alt="user-image" />
            <router-link
              to="/blog-grid"
              class="text-decoration-none fw-semibold"
            >
              James_Andy
            </router-link>
          </div>
        </li>
        <li>September 30, 2023</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrendingPosts",
};
</script>
