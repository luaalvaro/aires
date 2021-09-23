<template>
  <div class="c">
    <left-panel />
    <right-panel />
  </div>
</template>

<script>
name: "Register";
import LeftPanel from "../components/Register/LeftPanel.vue";
import RightPanel from "../components/Register/RightPanel.vue";

export default {
  components: { LeftPanel, RightPanel },
  props: {
    email: "",
    pass: "",
  },
};
</script>

<style src="../components/styles/style.scss" lang="scss">
</style>