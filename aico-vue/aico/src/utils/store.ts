import { reactive } from "vue";

interface StateStore {
  open: boolean;
  search: boolean;
  navbar: boolean;
  onChange: () => void;
  onSearchbarShow: () => void;
  onMobileNavbarShow: () => void;
}

const stateStore: StateStore = reactive({
  open: false,
  search: false,
  navbar: false,
  onChange() {
    stateStore.open = !stateStore.open;
  },
  onSearchbarShow() {
    stateStore.search = !stateStore.search;
  },
  onMobileNavbarShow() {
    stateStore.navbar = !stateStore.navbar;
  },
});

export default stateStore;
