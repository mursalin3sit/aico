<template>
  <div>
    <MainNavbar />
    <MainBanner />
    <WhatWeDo />
    <RangeOfServices />
    <TextSlider />
    <PortfolioContent />
    <SubscribeOurNewsletter />
    <FunFacts />
    <WhyChooseUs />
    <GlobalBrands class="bg-2d0e34" />
    <FAQ />
    <AIChatbotSupport />
    <OurBlog />
    <InstagramPost />
    <MainFooter class="pt-100 pb-75" />
    <CopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import MainBanner from "../components/AIImageGenerator/MainBanner.vue";
import WhatWeDo from "../components/AIImageGenerator/WhatWeDo.vue";
import RangeOfServices from "../components/AIImageGenerator/RangeOfServices.vue";
import TextSlider from "../components/AIImageGenerator/TextSlider.vue";
import PortfolioContent from "../components/AIImageGenerator/PortfolioContent.vue";
import SubscribeOurNewsletter from "../components/AIImageGenerator/SubscribeOurNewsletter.vue";
import FunFacts from "../components/AIImageGenerator/FunFacts.vue";
import WhyChooseUs from "../components/AIImageGenerator/WhyChooseUs.vue";
import GlobalBrands from "../components/Common/GlobalBrands.vue";
import FAQ from "../components/AIImageGenerator/FAQ.vue";
import AIChatbotSupport from "../components/AIImageGenerator/AIChatbotSupport.vue";
import OurBlog from "../components/AIImageGenerator/OurBlog.vue";
import InstagramPost from "../components/Common/InstagramPost.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";
import CopyRight from "../components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "AIImageGeneratorPage",
  components: {
    MainNavbar,
    MainBanner,
    WhatWeDo,
    RangeOfServices,
    TextSlider,
    PortfolioContent,
    SubscribeOurNewsletter,
    FunFacts,
    WhyChooseUs,
    GlobalBrands,
    FAQ,
    AIChatbotSupport,
    OurBlog,
    InstagramPost,
    MainFooter,
    CopyRight,
  },
});
</script>
