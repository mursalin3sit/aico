<template>
  <div>
    <LayoutPreLoader v-if="isLoading" />
    <LayoutSearchModal />
    <LayoutResponsiveNavbar />
    <NuxtPage />
    <LayoutBackToTop />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
});
</script>
