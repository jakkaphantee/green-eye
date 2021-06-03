<template>
  <div class="app">
    <Intro />
  </div>
</template>

<script>
import Intro from '@components/Intro'

export default {
  name: 'App',
  components: {
    Intro
  }
}
</script>

<style lang="scss" scoped>
@import './assets/styles/variables';

.app {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: $app-background-color;
}

</style>
