<template>
  <span class="typewrite" ref="typewriteElement">
    <span class="wrap">{{ text }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Typewriter",
  props: {
    toRotate: {
      type: Array as () => string[],
      required: true,
    },
    period: {
      type: Number,
      default: 2000,
    },
  },
  setup(props) {
    const text = ref("");
    const isDeleting = ref(false);
    const loopNum = ref(0);

    const tick = () => {
      const i = loopNum.value % props.toRotate.length;
      const fullTxt = props.toRotate[i];

      if (isDeleting.value) {
        text.value = fullTxt.substring(0, text.value.length - 1);
      } else {
        text.value = fullTxt.substring(0, text.value.length + 1);
      }

      let delta = 200 - Math.random() * 100;
      if (isDeleting.value) {
        delta /= 2;
      }

      if (!isDeleting.value && text.value === fullTxt) {
        delta = props.period;
        isDeleting.value = true;
      } else if (isDeleting.value && text.value === "") {
        isDeleting.value = false;
        loopNum.value++;
        delta = 500;
      }

      setTimeout(tick, delta);
    };

    onMounted(() => {
      tick();
    });

    return {
      text,
    };
  },
});
</script>

<style scoped>
.typewrite > .wrap {
  border-right: 1px solid #ffffff;
}
</style>
