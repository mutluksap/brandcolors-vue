<template>
  <router-view></router-view>
  <Header />
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
