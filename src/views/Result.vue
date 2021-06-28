<template>
  <div class="result-page app-background">
    <ResultTop
      id="resultTop"
      @scrollToElement="scrollToElement"
    />
    <ResultBottom id="resultBottom" />
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
  methods: {
    scrollToElement(elementId) {
      document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' })
    }
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
