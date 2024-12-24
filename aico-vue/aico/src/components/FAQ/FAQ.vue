<template>
  <div class="faq-area ptb-100">
    <div class="container">
      <div class="section-title text-center">
        <span class="sub-title d-block fw-medium">FAQ</span>
        <h2 class="mb-0 ms-auto me-auto">
          Know more about Aico from the unknown
        </h2>
      </div>
      <div class="row justify-content-center">
        <div
          class="col-lg-4 col-md-6 order-md-1 order-lg-1"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div class="faq-accordion">
            <BAccordion>
              <BAccordionItem title="How I generate image?" visible>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam velit viverra
                  consequat aliquam nullam tortor mauris. Leo lectus non.
                </p>
              </BAccordionItem>
              <BAccordionItem title="How many images can I generate per day?">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam velit viverra
                  consequat aliquam nullam tortor mauris. Leo lectus non.
                </p>
              </BAccordionItem>
              <BAccordionItem title="Can I use the generated image?">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam velit viverra
                  consequat aliquam nullam tortor mauris. Leo lectus non.
                </p>
              </BAccordionItem>
              <BAccordionItem
                title="How to pay for Aico?
"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam velit viverra
                  consequat aliquam nullam tortor mauris. Leo lectus non.
                </p>
              </BAccordionItem>
            </BAccordion>
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 order-md-3 order-lg-2"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class="faq-image text-center">
            <img src="../../assets/img/faq-image.jpg" alt="faq-image" />
          </div>
        </div>
        <div
          class="col-lg-4 col-md-6 order-md-2 order-lg-3"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div class="faq-accordion">
            <BAccordion>
              <BAccordionItem title="How to increase image quality?">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam velit viverra
                  consequat aliquam nullam tortor mauris. Leo lectus non.
                </p>
              </BAccordionItem>
              <BAccordionItem title="Is it legal to use commercially?">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam velit viverra
                  consequat aliquam nullam tortor mauris. Leo lectus non.
                </p>
              </BAccordionItem>
              <BAccordionItem title="How to register?">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam velit viverra
                  consequat aliquam nullam tortor mauris. Leo lectus non.
                </p>
              </BAccordionItem>
              <BAccordionItem title="How to get prompt suggestion?">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam velit viverra
                  consequat aliquam nullam tortor mauris. Leo lectus non.
                </p>
              </BAccordionItem>
              <BAccordionItem title="How to save image?">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Aliquam velit viverra
                  consequat aliquam nullam tortor mauris. Leo lectus non.
                </p>
              </BAccordionItem>
            </BAccordion>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BAccordion, BAccordionItem } from "bootstrap-vue-next";

export default defineComponent({
  name: "FAQ",
  components: {
    BAccordion,
    BAccordionItem,
  },
});
</script>
