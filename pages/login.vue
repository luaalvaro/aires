<template>
  <div class="c">
    <LeftPanel />
    <RightPanel />
  </div>
</template>

<script>
name: "Login";
import LeftPanel from "../components/Login/LeftPanel.vue";
import RightPanel from "../components/Login/RightPanel.vue";

export default {
  components: { LeftPanel, RightPanel },
};
</script>

<style src="../components/styles/style.scss" lang="scss">
</style>