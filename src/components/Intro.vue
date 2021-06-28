<template>
  <div class="app-page intro-page">
    <!-- <video /> -->
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data: () => ({
    currentStep: 'intro-brief'
  }),
  methods: {
    changeStep(step) {
      this.currentStep = step
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
.intro-page {
  background-color: $app-background-color;
}
</style>
