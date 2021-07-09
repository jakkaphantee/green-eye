<template>
  <div class="landing-page" ref="landingPage">
    <Home
      id="home"
      @scrollToComponent="scrollToComponent"
    />
    <ShopMain
      id="shopMain"
      @scrollToComponent="scrollToComponent"
      :isAnimationPlay="isShopMainAnimationPlay"
    />
    <ShopSecond
      id="shopSecond"
      @scrollToComponent="scrollToComponent"
      :isAnimationPlay="isShopSecondAnimationPlay"
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

// import { isEnterViewport } from '@/utils/scrollEventCheck'

export default {
  name: 'LandingPage',
  components: {
    Home,
    ShopMain,
    ShopSecond,
    Contact
  },
  data: () => ({
    isShopMainAnimationPlay: false,
    isShopSecondAnimationPlay: false,
  }),
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
    this.$refs.landingPage.addEventListener('scroll', this.scollListener)
  },
  methods: {
    ...mapMutations('user', {
      setCurrentLandingPageComponent: 'setCurrentLandingPageComponent'
    }),
    scrollToComponent(elementId) {
      document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' })
      this.setCurrentLandingPageComponent('')
    },
    scollListener() {
      const shopMainRect = document.getElementById('shopMain').getBoundingClientRect()
      const shopSecondRect = document.getElementById('shopSecond').getBoundingClientRect()
      if (shopMainRect.top < 40) this.isShopMainAnimationPlay = true
      if (shopSecondRect.top < 40) this.isShopSecondAnimationPlay = true
    }
  },
  beforeDestroy() {
    this.$refs.landingPage.removeEventListener('scroll', this.scollListener)
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
  #home,
  #shopMain,
  #shopSecond,
  #contact {
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
