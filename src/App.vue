<template>
  <div class="app">
    <HamburgerMenu v-if="isShowHamburger && isIntroEnd && isHamburgerShow" />
    <CheckoutTab v-if="isShowCart && isIntroEnd" />
    <Intro
      v-if="!isIntroEnd"
      @introEnd="isIntroEnd = true"
    />
    <div v-else class="app-wrapper">
      <router-view />
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
      'Quiz'
    ],
    isIntroEnd: true
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
</style>
