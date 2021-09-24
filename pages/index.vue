<template>
  <div>
    <h2>Seja bem vindo!</h2>
    <a href="#" @click="logout">Logout</a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted: () => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      window.location.replace("/login");
    }
  },
  methods: {
    logout() {
      sessionStorage.removeItem("token");
      window.location.replace("/login");
    },
  },
};
</script>
