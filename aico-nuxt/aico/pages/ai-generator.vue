<template>
  <div>
    <LayoutNavbarStyleThree />
    <AIGenerateMainBanner />
    <div class="section-bg-area">
      <AIGenerateHowToGenerateImage />
      <div class="generate-image-area pb-100">
        <div class="container demo-four-container">
          <AIGenerateTextToImageGenerator />
          <AIGenerateTextToVideoGenerator />
          <AIGenerateTextToChatGenerator />
        </div>
      </div>
      <AIGenerateOmnichannelConversationalChatbot />
    </div>
    <AIGenerateGlobalBrands />
    <AIGenerateTopFeatures />
    <AIGeneratePricingPlans />
    <AIGenerateTextSlider />
    <AIGenerateTestimonialContent />
    <AIGenerateDownloadApp />
    <AIGenerateFAQ />
    <AIGenerateOurBlog />
    <AIGenerateFollowUs />
    <AIGenerateInstagramPost />
    <LayoutMainFooter class="demo-four-footer pt-100 pb-75" />
    <LayoutCopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
  name: "AIGeneratePage",
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
