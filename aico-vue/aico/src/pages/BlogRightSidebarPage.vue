<template>
  <div>
    <MainNavbar />
    <PageBanner pageTitle="Blog Right Sidebar" />
    <BlogRightSidebar />
    <GlobalBrands class="pb-100" />
    <InstagramPost />
    <MainFooter class="pt-100 pb-75" />
    <CopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import PageBanner from "../components/Common/PageBanner.vue";
import BlogRightSidebar from "../components/BlogRightSidebar/BlogRightSidebar.vue";
import GlobalBrands from "../components/Common/GlobalBrands.vue";
import InstagramPost from "../components/Common/InstagramPost.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";
import CopyRight from "../components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "BlogRightSidebarPage",
  components: {
    MainNavbar,
    PageBanner,
    BlogRightSidebar,
    GlobalBrands,
    InstagramPost,
    MainFooter,
    CopyRight,
  },
});
</script>
