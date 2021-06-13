<template>
  <div class="landing-page">
    <Home
      id="home"
      @scrollToComponent="scrollToComponent"
    />
    <ShopMain
      id="shopMain"
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

<style lang="scss" scoped>
.landing-page {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
  #home,
  #shopMain,
  #shopSecond,
  #contact {
    scroll-snap-align: start;
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
