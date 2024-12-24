<template>
  <div>
    <PreLoader v-if="isLoading" />
    <router-view />
    <SearchModal />
    <ResponsiveNavbar />
    <BackToTop />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PreLoader from "./components/Layouts/PreLoader.vue";
import SearchModal from "./components/Layouts/SearchModal.vue";
import ResponsiveNavbar from "./components/Layouts/ResponsiveNavbar.vue";
import BackToTop from "./components/Layouts/BackToTop.vue";

export default defineComponent({
  components: {
    PreLoader,
    SearchModal,
    ResponsiveNavbar,
    BackToTop,
  },
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
