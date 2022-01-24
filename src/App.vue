<template>
  <div class="container">
    <Header/>
    <Main/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
export default {
  name: 'App',
  components: {
    Header,
    Main
  }
}
</script>

<style>
@import "./assets/style/main.css";
</style>
