<template>
  <div class="instagram-area bg-2d0e34 bg-color position-relative z-1">
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

import image1 from "~/assets/img/instagrams/instagram1.jpg";
import image2 from "~/assets/img/instagrams/instagram2.jpg";
import image3 from "~/assets/img/instagrams/instagram3.jpg";
import image4 from "~/assets/img/instagrams/instagram4.jpg";
import image5 from "~/assets/img/instagrams/instagram5.jpg";
import image6 from "~/assets/img/instagrams/instagram6.jpg";
import image7 from "~/assets/img/instagrams/instagram7.jpg";
import image8 from "~/assets/img/instagrams/instagram8.jpg";
import image9 from "~/assets/img/instagrams/instagram9.jpg";
import image10 from "~/assets/img/instagrams/instagram10.jpg";
import image11 from "~/assets/img/instagrams/instagram11.jpg";
import image12 from "~/assets/img/instagrams/instagram12.jpg";
import image13 from "~/assets/img/instagrams/instagram13.jpg";

export default defineComponent({
  name: "InstagramPost",
  data() {
    return {
      posts: [
        {
          id: 1,
          image: image1,
          dataDelay: "200",
        },
        {
          id: 2,
          image: image2,
          dataDelay: "200",
        },
        {
          id: 3,
          image: image3,
          dataDelay: "200",
        },
        {
          id: 4,
          image: image4,
          dataDelay: "200",
        },
        {
          id: 5,
          image: image5,
          dataDelay: "200",
        },
        {
          id: 6,
          image: image6,
          dataDelay: "200",
        },
        {
          id: 7,
          image: image7,
          dataDelay: "200",
        },
        {
          id: 8,
          image: image8,
          dataDelay: "200",
        },
        {
          id: 9,
          image: image9,
          dataDelay: "200",
        },
        {
          id: 10,
          image: image10,
          dataDelay: "200",
        },
        {
          id: 11,
          image: image11,
          dataDelay: "200",
        },
        {
          id: 12,
          image: image12,
          dataDelay: "200",
        },
        {
          id: 13,
          image: image13,
          dataDelay: "200",
        },
      ],
    };
  },
});
</script>
