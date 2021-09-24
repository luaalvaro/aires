<script>
name: "Login";
import LeftPanel from "../components/Login/LeftPanel.vue";
import RightPanel from "../components/Login/RightPanel.vue";

export default {
  components: { LeftPanel, RightPanel },
};
</script>

<template>
  <div class="c">
    <LeftPanel />
    <RightPanel />
  </div>
</template>

<style src="../components/styles/style.scss" lang="scss">
</style>