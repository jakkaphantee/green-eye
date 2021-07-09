<template>
  <div class="result-page" ref="resultPage">
    <ResultTop
      id="resultTop"
      @scrollToElement="scrollToElement"
    />
    <ResultBottom id="resultBottom" :isAnimationPlay="isAnimationPlay" />
  </div>
</template>

<script>
import ResultTop from '@components/Result/ResultTop'
import ResultBottom from '@components/Result/ResultBottom'

export default {
  name: 'Result',
  components: {
    ResultTop,
    ResultBottom,
  },
  data: () => ({
    isAnimationPlay: false
  }),
  mounted() {
    this.$refs.resultPage.addEventListener('scroll', this.srollListener)
  },
  methods: {
    scrollToElement(elementId) {
      document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' })
    },
    srollListener() {
      const resultBottomRect = document.getElementById('resultBottom').getBoundingClientRect()
      if (resultBottomRect.top < 40) this.isAnimationPlay = true
    }
  },
  beforeDestroy() {
    this.$refs.resultPage.removeEventListener('scroll', this.srollListener)
  }
}
</script>

<style lang="scss" scoped>
.result-page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  #resultTop,
  #resultBottom {
    scroll-snap-align: start;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
