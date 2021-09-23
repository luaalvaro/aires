<template>
  <h1>dashboard</h1>
</template>

<script>
export default {
  mounted: () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      window.location.replace("/login");
    }
  },
  created: () => {},
};
</script>