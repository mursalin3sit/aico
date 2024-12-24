<template>
  <div>
    <NavbarStyleTwo class="atar-white" />
    <BannerPosts class="atar-white" />
    <PopularAIArticles class="atar-white" />
    <TopStories class="atar-white" />
    <FeaturedPosts class="atar-white" />
    <RecentPosts class="atar-white" />
    <AIChatbotSupport class="atar-white" />
    <MostPopularNews class="atar-white" />
    <SubscribeOurNewsletter class="atar-white" />
    <RegularAIUpdates class="atar-white" />
    <MainFooter class="pt-80 pb-55" />
    <CopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavbarStyleTwo from "../components/Layouts/NavbarStyleTwo.vue";
import BannerPosts from "../components/AINews/BannerPosts.vue";
import PopularAIArticles from "../components/AINews/PopularAIArticles.vue";
import TopStories from "../components/AINews/TopStories.vue";
import FeaturedPosts from "../components/AINews/FeaturedPosts.vue";
import RecentPosts from "../components/AINews/RecentPosts.vue";
import AIChatbotSupport from "../components/AINews/AIChatbotSupport.vue";
import MostPopularNews from "../components/AINews/MostPopularNews.vue";
import SubscribeOurNewsletter from "../components/AINews/SubscribeOurNewsletter.vue";
import RegularAIUpdates from "../components/AINews/RegularAIUpdates.vue";
import MainFooter from "../components/Layouts/MainFooter.vue";
import CopyRight from "../components/Layouts/CopyRight.vue";

export default defineComponent({
  name: "AINewsPage",
  components: {
    NavbarStyleTwo,
    BannerPosts,
    TopStories,
    PopularAIArticles,
    FeaturedPosts,
    RecentPosts,
    AIChatbotSupport,
    MostPopularNews,
    SubscribeOurNewsletter,
    RegularAIUpdates,
    MainFooter,
    CopyRight,
  },
});
</script>
