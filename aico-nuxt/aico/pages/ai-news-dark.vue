<template>
  <div>
    <LayoutNavbarStyleTwo />
    <AINewsBannerPosts />
    <AINewsPopularAIArticles />
    <AINewsTopStories />
    <AINewsFeaturedPosts />
    <AINewsRecentPosts />
    <AINewsAIChatbotSupport />
    <AINewsMostPopularNews />
    <AINewsSubscribeOurNewsletter />
    <AINewsRegularAIUpdates />
    <LayoutMainFooter class="pt-80 pb-55" />
    <LayoutCopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AINewsDarkPage",
});
</script>
