<template>
  <div :class="['modal fade searchModal', { show: stateStoreInstance.search }]">
    <div class="modal-dialog">
      <div class="modal-content">
        <form class="position-relative">
          <input
            type="text"
            class="input-search d-block w-100 bg-transparent"
            placeholder="Search here...."
          />
          <button type="submit" class="border-0 p-0">
            <i class="flaticon-search"></i>
          </button>
        </form>
        <button
          type="button"
          class="btn-close rounded-0 p-0 w-auto h-auto"
          @click="stateStoreInstance.onSearchbarShow"
        >
          <i class="flaticon-close-1"></i>
        </button>
      </div>
    </div>
  </div>
  <div
    :class="['modal-backdrop', { show: stateStoreInstance.search }]"
    @click="stateStoreInstance.onSearchbarShow"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import stateStore from "~/utils/store";

export default defineComponent({
  name: "SearchModal",
  setup() {
    const stateStoreInstance = stateStore;
    return {
      stateStoreInstance,
    };
  },
});
</script>
