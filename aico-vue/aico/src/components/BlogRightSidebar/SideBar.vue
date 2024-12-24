<template>
  <div class="search-box position-relative">
    <form>
      <input
        type="text"
        class="form-control rounded-0 shadow-none"
        placeholder="Search article"
      />
      <button type="submit" class="p-0 bg-transparent border-0">
        <i class="flaticon-search"></i>
      </button>
    </form>
  </div>
  <span class="trending-title d-block position-relative fw-bold">
    <i class="flaticon-lightning"></i> Trending Posts
  </span>
  <div class="featured-trending-posts ms-0">
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
              >John_Anderson</router-link
            >
          </div>
        </li>
        <li>July 27, 2023</li>
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
              >James_Andy</router-link
            >
          </div>
        </li>
        <li>July 28, 2023</li>
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
              >John_Anderson</router-link
            >
          </div>
        </li>
        <li>July 29, 2023</li>
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
              >James_Andy</router-link
            >
          </div>
        </li>
        <li>July 30, 2023</li>
      </ul>
    </div>
  </div>
  <div class="featured-ads-box ms-0">
    <h3>Aico The Most Powerful Image Generator Tool</h3>
    <a href="#" class="default-btn two">
      Try Now
      <i class="flaticon-next"></i>
    </a>
    <div class="text-end">
      <img src="../../assets/img/chatbot/chatbot3.png" alt="chatbot-image" />
    </div>
    <span class="d-block">Ads 424x294</span>
  </div>
  <div class="popular-tags-box">
    <h3>Popular Tags</h3>
    <div class="tags">
      <router-link to="/blog-grid" class="text-decoration-none d-inline-block">
        Artificial Intelligence
      </router-link>
      <router-link to="/blog-grid" class="text-decoration-none d-inline-block">
        Networking
      </router-link>
      <router-link to="/blog-grid" class="text-decoration-none d-inline-block">
        ChatGPT
      </router-link>
      <router-link to="/blog-grid" class="text-decoration-none d-inline-block">
        Image Generator
      </router-link>
      <router-link to="/blog-grid" class="text-decoration-none d-inline-block">
        AI Chatbot
      </router-link>
      <router-link to="/blog-grid" class="text-decoration-none d-inline-block">
        Web
      </router-link>
      <router-link to="/blog-grid" class="text-decoration-none d-inline-block">
        Technology
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>
