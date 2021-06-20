<template>
  <div class="app app-backround">
    <HamburgerMenu />
    <img
        class="cart-icon"
        :src="require('@/assets/images/general/cart_icon.png')"
      />
    <div class="app-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import HamburgerMenu from '@components/General/HamburgerMenu'
export default {
  name: 'App',
  components: {
    HamburgerMenu
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
.cart-icon {
  position: fixed;
  top: 20px;
  right: 20px;
  height: 30px;
  z-index: 8;
}
</style>
