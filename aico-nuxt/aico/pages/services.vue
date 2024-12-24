<template>
  <div>
    <LayoutMainNavbar />
    <CommonPageBanner pageTitle="Services" />
    <ServicesContent />
    <ServicesRangeOfServices />
    <CommonGlobalBrands class="pb-100" />
    <CommonInstagramPost />
    <LayoutMainFooter class="pt-100 pb-75" />
    <LayoutCopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServicesPage",
});
</script>
