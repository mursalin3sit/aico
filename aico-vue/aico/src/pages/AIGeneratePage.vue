<template>
  <div>
    <NavbarStyleThree />
    <MainBanner />
    <div class="section-bg-area">
      <HowToGenerateImage />
      <div class="generate-image-area pb-100">
        <div class="container demo-four-container">
          <TextToImageGenerator />
          <TextToVideoGenerator />
          <TextToChatGenerator />
        </div>
      </div>
      <OmnichannelConversationalChatbot />
    </div>
    <GlobalBrands />
    <TopFeatures />
    <PricingPlans />
    <TextSlider />
    <TestimonialContent />
    <DownloadApp />
    <FAQ />
    <OurBlog />
    <FollowUs />
    <InstagramPost />
    <MainFooter class="demo-four-footer pt-100 pb-75" />
    <CopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from "vue";
import NavbarStyleThree from "../components/Layouts/NavbarStyleThree.vue";
import MainBanner from "../components/AIGenerate/MainBanner.vue";
import HowToGenerateImage from "../components/AIGenerate/HowToGenerateImage.vue";
import TextToImageGenerator from "../components/AIGenerate/TextToImageGenerator.vue";
import TextToVideoGenerator from "../components/AIGenerate/TextToVideoGenerator.vue";
import TextToChatGenerator from "../components/AIGenerate/TextToChatGenerator.vue";
import OmnichannelConversationalChatbot from "../components/AIGenerate/OmnichannelConversationalChatbot.vue";
import GlobalBrands from "../components/AIGenerate/GlobalBrands.vue";
import TopFeatures from "../components/AIGenerate/TopFeatures.vue";
import PricingPlans from "../components/AIGenerate/PricingPlans.vue";
import TextSlider from "../components/AIGenerate/TextSlider.vue";
import TestimonialContent from "../components/AIGenerate/TestimonialContent.vue";
import DownloadApp from "../components/AIGenerate/DownloadApp.vue";
import FAQ from "../components/AIGenerate/FAQ.vue";
import OurBlog from "../components/AIGenerate/OurBlog.vue";
import FollowUs from "../components/AIGenerate/FollowUs.vue";
import InstagramPost from "../components/AIGenerate/InstagramPost.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";
import CopyRight from "../components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "AIGeneratePage",
  components: {
    NavbarStyleThree,
    MainBanner,
    HowToGenerateImage,
    TextToImageGenerator,
    TextToVideoGenerator,
    TextToChatGenerator,
    OmnichannelConversationalChatbot,
    GlobalBrands,
    TopFeatures,
    PricingPlans,
    TextSlider,
    TestimonialContent,
    DownloadApp,
    FAQ,
    OurBlog,
    FollowUs,
    InstagramPost,
    MainFooter,
    CopyRight,
  },
  setup() {
    onMounted(() => {
      document.body.classList.add("body-bg-color");
    });

    onBeforeUnmount(() => {
      document.body.classList.remove("body-bg-color");
    });
  },
});
</script>
