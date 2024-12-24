<template>
  <div class="not-found-area text-center ptb-100">
    <div class="container">
      <img
        src="../assets/img/error.png"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="200"
        alt="error-image"
      />
      <h3>Oops! That page can't be found</h3>
      <p class="ms-auto me-auto">
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <router-link to="/" class="default-btn two">
        Back to Home
        <i class="flaticon-plus-1"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style lang="scss" scoped>
.not-found-area {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
</style>
