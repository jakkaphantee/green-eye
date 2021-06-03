<template>
  <div class="landing-page">
    <Home
      id="home"
      @scrollToComponent="scrollToComponent"
    />
    <ShopMain
      id="shop"
      @scrollToComponent="scrollToComponent"
    />
    <ShopSecond
      id="shopSecond"
      @scrollToComponent="scrollToComponent"
    />
    <Contact
      id="contact"
      @scrollToComponent="scrollToComponent"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Home from '@components/LandingPage/Home'
import ShopMain from '@components/LandingPage/ShopMain'
import ShopSecond from '@components/LandingPage/ShopSecond'
import Contact from '@components/LandingPage/Contact'

export default {
  name: 'LandingPage',
  components: {
    Home,
    ShopMain,
    ShopSecond,
    Contact
  },
  computed: {
    ...mapState('user', {
      currentLandingPageComponent: state => state.currentLandingPageComponent
    })
  },
  watch: {
    currentLandingPageComponent(newValue) {
      if (newValue !== '') {
        this.scrollToComponent(newValue)
      }
    }
  },
  mounted() {
    if (this.currentLandingPageComponent !== '') {
      this.scrollToComponent(this.currentLandingPageComponent)
    }
  },
  methods: {
    ...mapMutations('user', {
      setCurrentLandingPageComponent: 'setCurrentLandingPageComponent'
    }),
    scrollToComponent(elementId) {
      document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' })
      this.setCurrentLandingPageComponent('')
    }
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
