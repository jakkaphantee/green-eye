<template>
  <div class="landing-page">
    <Home />
  </div>
</template>

<script>
import Home from './Home'

export default {
  name: 'LandingPage',
  components: {
    Home
  }
}
</script>

<style lang="scss">
.landing-page {
  position: relative;
  width: 100vw;
  height: 100%;
  overflow: auto;
  scroll-snap-type: y mandatory;
  div {
    scroll-snap-align: start;
  }
}
</style>
