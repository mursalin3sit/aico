<template>
  <div class="page-banner-area position-relative z-1">
    <div class="container">
      <div class="page-banner-content text-center">
        <h1>{{ pageTitle }}</h1>
        <ul class="ps-0 mb-0 list-unstyled">
          <li class="d-inline-block position-relative fw-medium">
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li class="d-inline-block position-relative fw-medium">
            {{ pageTitle }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageBanner",
  props: ["pageTitle"],
});
</script>
