<template>
  <div class="app">
    <div v-if="isCouldEnter" class="app">
      <HamburgerMenu v-if="isShowHamburger && isIntroEnd && isHamburgerShow" />
      <CheckoutTab v-if="isShowCart && isIntroEnd" />
      <Intro
        v-if="!isIntroEnd"
        @introEnd="isIntroEnd = true; playAudio();"
      />
      <div v-else class="app-wrapper">
        <router-view />
      </div>
      <audio
        ref="webBackgroundMusic"
        :src="require('@/assets/sound/web_background_music.mp3')"
        loop
      />
    </div>
    <div v-else class="no-enter app-background">
      <h4>
        <strong>โปรดเข้าจากโทรศัพท์มือถือ</strong>
      </h4>
    </div>
  </div>
</template>

<script>
import HamburgerMenu from '@components/General/HamburgerMenu'
import CheckoutTab from '@components/General/CheckoutTab'
import Intro from '@components/Intro'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    HamburgerMenu,
    CheckoutTab,
    Intro
  },
  data: () => ({
    notAllowHamburger: [
      'Purchase'
    ],
    notAllowCart: [
      'Purchase',
      'About',
      'Quiz',
      'Result'
    ],
    isIntroEnd: true,
    isCouldEnter: true,
  }),
  computed: {
    ...mapState('user', {
      currentLandingPageComponent: state => state.currentLandingPageComponent,
      isHamburgerShow: state => state.isHamburgerShow
    }),
    currentPage() {
      return this.$route.name
    },
    isShowHamburger() {
      return !this.notAllowHamburger.includes(this.currentPage)
    },
    isShowCart() {
      return !this.notAllowCart.includes(this.currentPage)
    }
  },
  created() {
    if (window.innerWidth > 480) {
      this.isCouldEnter = false
    }
  },
  methods: {
    playAudio() {
      this.$refs.webBackgroundMusic.play()
      this.$refs.webBackgroundMusic.loop = true
    }
  }
}
</script> 

<style lang="scss" scoped>
.app {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.app-wrapper {
  position: relative;
  width: 100%;
  max-width: 576px;
  height: 100%;
  padding-bottom: env(safe-area-inset-bottom);
}
.no-enter {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
