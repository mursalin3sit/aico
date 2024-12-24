<template>
  <div class="profile-authentication-area ptb-100">
    <div class="container">
      <div
        class="profile-authentication-tabs ms-auto me-auto"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <BTabs>
          <BTab title="Login" active>
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Password"
                />
              </div>
              <div class="form-check position-relative">
                <input
                  type="checkbox"
                  class="form-check-input shadow-none"
                  id="agreeWithUs"
                />
                <label class="form-check-label" for="agreeWithUs">
                  Remember Me
                </label>
              </div>
              <button
                type="submit"
                class="default-btn d-block w-100 border-0 two"
              >
                Login Now
                <i class="flaticon-next"></i>
              </button>
            </form>
          </BTab>
          <BTab title="Register">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control rounded-0 shadow-none"
                  placeholder="Confirm Password"
                />
              </div>
              <button
                type="submit"
                class="default-btn d-block w-100 border-0 two"
              >
                Register Now
                <i class="flaticon-next"></i>
              </button>
              <p>
                The password should be at least eight characters long. To make
                it stronger, use upper and lower case letters, numbers, and
                symbols like ! " ? $ % ^ & )
              </p>
            </form>
          </BTab>
        </BTabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileAuthentication",
});
</script>
