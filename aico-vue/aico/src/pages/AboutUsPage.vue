<template>
  <div>
    <MainNavbar />
    <PageBanner pageTitle="About Us" />
    <WhatWeDo />
    <RangeOfServices />
    <TextSlider />
    <PortfolioContent />
    <SubscribeOurNewsletter />
    <FunFacts />
    <WhyChooseUs />
    <OurTeam />
    <GlobalBrands class="bg-2d0e34 pb-100" />
    <InstagramPost />
    <MainFooter class="pt-100 pb-75" />
    <CopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import PageBanner from "../components/Common/PageBanner.vue";
import WhatWeDo from "../components/AboutUs/WhatWeDo.vue";
import RangeOfServices from "../components/AboutUs/RangeOfServices.vue";
import TextSlider from "../components/AboutUs/TextSlider.vue";
import PortfolioContent from "../components/AboutUs/PortfolioContent.vue";
import SubscribeOurNewsletter from "../components/AboutUs/SubscribeOurNewsletter.vue";
import FunFacts from "../components/AboutUs/FunFacts.vue";
import WhyChooseUs from "../components/AboutUs/WhyChooseUs.vue";
import OurTeam from "../components/AboutUs/OurTeam.vue";
import GlobalBrands from "../components/Common/GlobalBrands.vue";
import InstagramPost from "../components/Common/InstagramPost.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";
import CopyRight from "../components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "AboutUsPage",
  components: {
    MainNavbar,
    PageBanner,
    WhatWeDo,
    RangeOfServices,
    TextSlider,
    PortfolioContent,
    SubscribeOurNewsletter,
    FunFacts,
    WhyChooseUs,
    OurTeam,
    GlobalBrands,
    InstagramPost,
    MainFooter,
    CopyRight,
  },
});
</script>
