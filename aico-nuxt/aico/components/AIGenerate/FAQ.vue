<template>
  <client-only>
    <div class="demo-for-question-area ptb-100">
      <div class="container demo-four-container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div
              class="demo-four-faq-content"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <span class="title"> FAQ </span>
              <h2>Know more about Aico from the unknown</h2>
              <p>
                Aico is an AI system that can create realistic images and art
                from a description in natural sed a language.
              </p>
              <p>
                Aico is an AI system that can create realistic images and art
                from a description in natural.
              </p>
              <NuxtLink to="/faq" class="default-btn">
                Contact With Us
                <i class="flaticon-plus-1"></i>
              </NuxtLink>
            </div>
          </div>
          <div class="col-lg-6">
            <div
              class="demo-four-accordion"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <BAccordion>
                <BAccordionItem title="How I generate image?" visible>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Aliquam velit
                    viverra consequat aliquam nullam tortor mauris. Leo lectus
                    non.
                  </p>
                </BAccordionItem>
                <BAccordionItem title="How many images can I generate per day?">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Aliquam velit
                    viverra consequat aliquam nullam tortor mauris. Leo lectus
                    non.
                  </p>
                </BAccordionItem>
                <BAccordionItem title="Can I use the generated image?">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Aliquam velit
                    viverra consequat aliquam nullam tortor mauris. Leo lectus
                    non.
                  </p>
                </BAccordionItem>
                <BAccordionItem title="How to pay for Aico?">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Aliquam velit
                    viverra consequat aliquam nullam tortor mauris. Leo lectus
                    non.
                  </p>
                </BAccordionItem>
                <BAccordionItem title="How to increase image quality?">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Aliquam velit
                    viverra consequat aliquam nullam tortor mauris. Leo lectus
                    non.
                  </p>
                </BAccordionItem>
                <BAccordionItem title="Is it legal to use commercially?">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Aliquam velit
                    viverra consequat aliquam nullam tortor mauris. Leo lectus
                    non.
                  </p>
                </BAccordionItem>
              </BAccordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FAQ",
});
</script>
