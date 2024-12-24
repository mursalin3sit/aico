<template>
  <div class="coming-soon-area">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="coming-soon-content text-center">
            <router-link to="/" class="logo">
              <img src="../assets/img/white-logo.svg" alt="logo" />
            </router-link>
            <h1>Coming Soon</h1>
            <p>Find, Apply And Chat. It's That Simple!</p>
            <div id="countdown" class="position-relative ms-auto me-auto">
              <div class="fw-medium position-relative">
                <span id="days" class="fw-bold">{{ countdown.days }}</span>
                Days
              </div>
              <div class="fw-medium position-relative d-inline-block">
                <span id="hours" class="fw-bold">{{ countdown.hours }}</span>
                H
              </div>
              <div class="fw-medium position-relative d-inline-block">
                <span id="minutes" class="fw-bold">
                  {{ countdown.minutes }}
                </span>
                M
              </div>
              <div class="fw-medium position-relative d-inline-block">
                <span id="seconds" class="fw-bold">
                  {{ countdown.seconds }}
                </span>
                S
              </div>
            </div>
            <form class="position-relative ms-auto me-auto">
              <input
                type="email"
                class="input-newsletter d-block w-100 bg-transparent"
                placeholder="Enter your email address"
              />
              <button type="submit" class="button d-inline-block border-0">
                <i class="flaticon-paper-plane"></i>
              </button>
            </form>
            <ul class="socials-link mb-0 list-unstyled">
              <li class="d-inline-block">
                <a
                  href="#"
                  class="d-block text-decoration-none rounded-circle"
                  target="_blank"
                >
                  <i class="ri-facebook-fill"></i>
                </a>
              </li>
              <li class="d-inline-block">
                <a
                  href="#"
                  class="d-block text-decoration-none rounded-circle"
                  target="_blank"
                >
                  <i class="ri-twitter-fill"></i>
                </a>
              </li>
              <li class="d-inline-block">
                <a
                  href="#"
                  class="d-block text-decoration-none rounded-circle"
                  target="_blank"
                >
                  <i class="ri-instagram-line"></i>
                </a>
              </li>
            </ul>
            <a
              href="#"
              class="more-info text-decoration-none d-inline-block position-relative"
            >
              More Information
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref } from "vue";

export default defineComponent({
  name: "ComingSoonPage",
  data: () => ({
    tab: null,
  }),
  setup() {
    const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    let countdownInterval: ReturnType<typeof setInterval> | undefined;

    const startCountdown = () => {
      const targetDate = new Date("2026-12-31T23:59:59").getTime();

      countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeDifference = targetDate - now;

        if (timeDifference > 0) {
          countdown.value.days = Math.floor(
            timeDifference / (1000 * 60 * 60 * 24)
          );
          countdown.value.hours = Math.floor(
            (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          countdown.value.minutes = Math.floor(
            (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
          );
          countdown.value.seconds = Math.floor(
            (timeDifference % (1000 * 60)) / 1000
          );
        } else {
          countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
          clearInterval(countdownInterval);
        }
      }, 1000);
    };

    onMounted(() => {
      startCountdown();
    });

    onBeforeUnmount(() => {
      clearInterval(countdownInterval);
    });

    return {
      countdown,
    };
  },
});
</script>
