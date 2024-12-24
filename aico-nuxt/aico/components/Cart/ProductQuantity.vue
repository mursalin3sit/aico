<template>
  <div class="number-counter position-relative">
    <button
      type="button"
      class="bg-transparent p-0 border-0"
      @click="decrementQuantity"
    >
      <i class="ri-subtract-line"></i>
    </button>
    <input
      type="number"
      class="bg-transparent border-0"
      v-model="quantity"
      min="1"
      max="10"
    />
    <button
      type="button"
      class="bg-transparent p-0 border-0"
      @click="incrementQuantity"
    >
      <i class="ri-add-line"></i>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProductQuantity",
  setup() {
    const quantity = ref(1);

    const incrementQuantity = () => {
      if (quantity.value < 10) {
        quantity.value++;
      }
    };

    const decrementQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--;
      }
    };

    return {
      quantity,
      incrementQuantity,
      decrementQuantity,
    };
  },
});
</script>
