<template>
  <Header></Header>
  <router-view></router-view>
</template>

<script>

import Header from './components/layout/Header.vue';

export default {
    name: "App",
    components: [
      Header
    ],
    components: { Header }
}

</script>

<style>
  * {
    box-sizing: border-box;
  }

  html {
    font-family: "Roboto", sans-serif;
  }

  body {
    margin: 0;
  }
</style>

