<template>
  <div class="app app-backround">
    <HamburgerMenu />
    <CheckoutTab />
    <div class="app-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import HamburgerMenu from '@components/General/HamburgerMenu'
import CheckoutTab from '@components/General/CheckoutTab'
export default {
  name: 'App',
  components: {
    HamburgerMenu,
    CheckoutTab
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
