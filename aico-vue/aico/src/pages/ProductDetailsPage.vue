<template>
  <div>
    <MainNavbar />
    <PageBanner pageTitle="Product Details" />
    <ProductDetails />
    <RelatedItems />
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
import ProductDetails from "../components/ProductDetails/ProductDetails.vue";
import RelatedItems from "../components/ProductDetails/RelatedItems.vue";
import GlobalBrands from "../components/Common/GlobalBrands.vue";
import InstagramPost from "../components/Common/InstagramPost.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";
import CopyRight from "../components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "ProductDetailsPage",
  components: {
    MainNavbar,
    PageBanner,
    ProductDetails,
    RelatedItems,
    GlobalBrands,
    InstagramPost,
    MainFooter,
    CopyRight,
  },
});
</script>
