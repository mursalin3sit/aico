<template>
  <div
    class="instagram-area demo-four-instagram bg-color position-relative z-1"
  >
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div
          class="col"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          v-for="post in posts"
          :key="post.id"
          :data-aos-delay="post.dataDelay"
        >
          <div class="instagram-post text-center position-relative z-1">
            <img :src="post.image" alt="instagram-image" />
            <i class="flaticon-instagram-1"></i>
            <a
              href="https://www.instagram.com/"
              class="link-btn d-block position-absolute start-0 end-0 top-0 bottom-0 z-2"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InstagramPost",
  data() {
    return {
      posts: [
        {
          id: 1,
          image: require("../../assets/img/instagrams/instagram1.jpg"),
          dataDelay: "200",
        },
        {
          id: 2,
          image: require("../../assets/img/instagrams/instagram2.jpg"),
          dataDelay: "200",
        },
        {
          id: 3,
          image: require("../../assets/img/instagrams/instagram3.jpg"),
          dataDelay: "200",
        },
        {
          id: 4,
          image: require("../../assets/img/instagrams/instagram4.jpg"),
          dataDelay: "200",
        },
        {
          id: 5,
          image: require("../../assets/img/instagrams/instagram5.jpg"),
          dataDelay: "200",
        },
        {
          id: 6,
          image: require("../../assets/img/instagrams/instagram6.jpg"),
          dataDelay: "200",
        },
        {
          id: 7,
          image: require("../../assets/img/instagrams/instagram7.jpg"),
          dataDelay: "200",
        },
        {
          id: 8,
          image: require("../../assets/img/instagrams/instagram8.jpg"),
          dataDelay: "200",
        },
        {
          id: 9,
          image: require("../../assets/img/instagrams/instagram9.jpg"),
          dataDelay: "200",
        },
        {
          id: 10,
          image: require("../../assets/img/instagrams/instagram10.jpg"),
          dataDelay: "200",
        },
        {
          id: 11,
          image: require("../../assets/img/instagrams/instagram11.jpg"),
          dataDelay: "200",
        },
        {
          id: 12,
          image: require("../../assets/img/instagrams/instagram12.jpg"),
          dataDelay: "200",
        },
        {
          id: 13,
          image: require("../../assets/img/instagrams/instagram13.jpg"),
          dataDelay: "200",
        },
      ],
    };
  },
});
</script>
