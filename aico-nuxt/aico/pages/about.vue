<template>
  <div>
    <LayoutMainNavbar />
    <CommonPageBanner pageTitle="About Us" />
    <AboutUsWhatWeDo />
    <AboutUsRangeOfServices />
    <AboutUsTextSlider />
    <AboutUsPortfolioContent />
    <AboutUsSubscribeOurNewsletter />
    <AboutUsFunFacts />
    <AboutUsWhyChooseUs />
    <AboutUsOurTeam />
    <CommonGlobalBrands class="bg-2d0e34 pb-100" />
    <CommonInstagramPost />
    <LayoutMainFooter class="pt-100 pb-75" />
    <LayoutCopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutUsPage",
});
</script>
