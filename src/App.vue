<template>
  <Header></Header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
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

  .route-enter-from {
    opacity: 0;
    transform: translateY(-30px);
  }

  .route-enter-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .route-enter-active {
    transition: all 0.3s easy-out;
  }

  .route-leave-active {
    transition: all 0.3s easy-in;
  }

  .route-enter-to 
  .route-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
</style>

