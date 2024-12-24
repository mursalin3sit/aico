<template>
  <div>
    <MainNavbar class="navbar-style-two" />
    <MainBanner />
    <WhyChooseUs />
    <GlobalBrands />
    <AutomationContent />
    <TopFeatures />
    <WatchVideo />
    <FunFacts />
    <TestimonialsContent />
    <ConversationalChatbot />
    <PricingPlans />
    <ImageGenerator />
    <OurBlog />
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
  name: "AIChatbotDarkPage",
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
