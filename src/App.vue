<template>
  <div class="app">
    <div class="app-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
@import './assets/styles/variables';

.app {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $app-background-color;
}
.app-wrapper {
  position: relative;
  width: 100%;
  max-width: 576px;
  height: 100%;
}
</style>
