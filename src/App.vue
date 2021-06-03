<template>
  <div class="app">
    <div class="app-wrapper">
      <HamburgerMenu />
      <img
        class="cart-icon"
        :src="require('@/assets/images/general/cart_icon.png')"
      />
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
@import './assets/styles/variables';

.app {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $app-background-color;
}
.app-wrapper {
  position: relative;
  width: 100%;
  max-width: 576px;
  height: 100%;
}
.cart-icon {
  position: fixed;
  top: 20px;
  right: 20px;
  height: 30px;
}
</style>
