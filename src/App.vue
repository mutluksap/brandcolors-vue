<template>
  <router-view></router-view>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getAllColors");
  },
};
</script>

<style>
@import "./assets/style/main.css";
</style>
