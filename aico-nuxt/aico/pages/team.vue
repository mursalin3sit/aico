<template>
  <div>
    <LayoutMainNavbar />
    <CommonPageBanner pageTitle="Team" />
    <TeamOurTeam />
    <CommonGlobalBrands class="bg-2d0e34 ptb-100" />
    <CommonInstagramPost />
    <LayoutMainFooter class="pt-100 pb-75" />
    <LayoutCopyRight />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TeamPage",
});
</script>
