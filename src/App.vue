<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app-main",
  beforeCreate() {
    // Initializations
    this.$store.dispatch("getAccount");
  },
};
</script>
