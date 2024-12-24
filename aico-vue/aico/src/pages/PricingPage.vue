<template>
  <div>
    <MainNavbar />
    <PageBanner pageTitle="Pricing" />
    <PricingPlans />
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
import PricingPlans from "../components/Pricing/PricingPlans.vue";
import GlobalBrands from "../components/Common/GlobalBrands.vue";
import InstagramPost from "../components/Common/InstagramPost.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";
import CopyRight from "../components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "PricingPage",
  components: {
    MainNavbar,
    PageBanner,
    PricingPlans,
    GlobalBrands,
    InstagramPost,
    MainFooter,
    CopyRight,
  },
});
</script>
