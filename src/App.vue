<template>
  <router-view></router-view>
</template>

<script>
import colors from "./colors.json";
export default {
  created() {
    this.$store.commit("setColors", colors[0]);
  },
};
</script>
