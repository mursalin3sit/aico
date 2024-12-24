<template>
  <div>
    <MainNavbar class="navbar-style-two atar-white" />
    <MainBanner class="atar-white" />
    <WhyChooseUs class="atar-white" />
    <GlobalBrands class="atar-white" />
    <AutomationContent class="atar-white" />
    <TopFeatures class="atar-white" />
    <WatchVideo className="atar-white" />
    <FunFacts class="atar-white" />
    <TestimonialsContent class="atar-white" />
    <ConversationalChatbot class="atar-white" />
    <PricingPlans class="atar-white" />
    <ImageGenerator class="atar-white" />
    <OurBlog class="atar-white" />
    <MainFooter class="pt-120 pb-95" />
    <CopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNavbar from "../components/Layouts/MainNavbar.vue";
import MainBanner from "../components/AIChatbot/MainBanner.vue";
import WhyChooseUs from "../components/AIChatbot/WhyChooseUs.vue";
import GlobalBrands from "../components/AIChatbot/GlobalBrands.vue";
import AutomationContent from "../components/AIChatbot/AutomationContent.vue";
import TopFeatures from "../components/AIChatbot/TopFeatures.vue";
import WatchVideo from "../components/AIChatbot/WatchVideo.vue";
import FunFacts from "../components/AIChatbot/FunFacts.vue";
import TestimonialsContent from "../components/AIChatbot/TestimonialsContent.vue";
import ConversationalChatbot from "../components/AIChatbot/ConversationalChatbot.vue";
import PricingPlans from "../components/AIChatbot/PricingPlans.vue";
import ImageGenerator from "../components/AIChatbot/ImageGenerator.vue";
import OurBlog from "../components/AIChatbot/OurBlog.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";
import CopyRight from "../components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "AIChatbotPage",
  components: {
    MainNavbar,
    MainBanner,
    GlobalBrands,
    WhyChooseUs,
    AutomationContent,
    TopFeatures,
    WatchVideo,
    FunFacts,
    TestimonialsContent,
    ConversationalChatbot,
    PricingPlans,
    ImageGenerator,
    OurBlog,
    MainFooter,
    CopyRight,
  },
});
</script>
