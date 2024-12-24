<template>
  <div class="follow-us-area pb-100">
    <div class="container demo-four-container">
      <div class="inner-follow-us">
        <div class="follow-content">
          <span class="title">FOLLOW US</span>
          <h2>Follow Us on Discord</h2>
          <p>
            Connect and share innovative ideas with over 63K+ creative like
            minded people
          </p>
          <router-link to="/contact" class="default-btn">
            Follow Now
            <img
              src="../../assets/img/new-images/follow.svg"
              class="follow-icon"
              alt="Icon"
            />
          </router-link>
        </div>
        <img
          src="../../assets/img/new-images/follow-image1.png"
          class="follow-image1"
          alt="Image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FollowUs",
};
</script>
