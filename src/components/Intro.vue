<template>
  <div class="app-page intro-page">
    <img
      ref="introOpening"
      class="intro-opening-img"
      :class="currentStep !== 'intro-opening' ? 'fade-out' : ''"
      src="https://firebasestorage.googleapis.com/v0/b/green-eye-46944.appspot.com/o/intro_opening.gif?alt=media&token=920d6597-fd52-4868-a351-487d60747efd"
    />
    <img
      v-if="isStartButtonShow"
      class="intro-start-button"
      :src="require('@/assets/images/intro/start_button.png')"
      @click="$emit('introEnd'); changePage('Quiz')"
    />
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data: () => ({
    currentStep: 'intro-opening',
    isStartButtonShow: false
  }),
  mounted() {
    setTimeout(() => {
      this.changeStep('intro-start')
      this.$refs.introOpening.addEventListener('transitionend', () => {
        this.isStartButtonShow = true
      })
    }, 7000)
  },
  methods: {
    changeStep(step) {
      this.currentStep = step
    },
    changePage() {
      this.$router.push({ name: 'Quiz' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
.intro-page {
  background-color: $app-background-color;
}
.intro-opening-img {
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 3s;
  &.fade-out {
    opacity: 0;
  }
}
.intro-start-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  animation: start-button-fade-in 2s forwards;
  @keyframes start-button-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
