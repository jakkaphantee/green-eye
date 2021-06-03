<template>
  <div class="hamburger-menu">
    <img
      class="menu-icon"
      :src="require(`@/assets/images/menu/${menuIconName}.png`)"
      @click="isMenuOpen = !isMenuOpen"
    />
    <div
      class="menu-container"
      :class="isMenuOpen ? 'show-menu' : ''"
    >
      men
    </div>
  </div>
</template>

<script>
export default {
  name: 'HamburgerMenu',
  data: () => ({
    isMenuOpen: false,
    menuIconName: 'menu_icon'
  }),
  watch: {
    isMenuOpen(newValue) {
      console.log('in')
      this.menuIconName = newValue ? 'close_menu' : 'menu_icon'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

.hamburger-menu {
  position: fixed;
  z-index: 10;
}
.menu-icon {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
  width: 35px;
  &:hover {
    cursor: pointer;
  }
}
.menu-container {
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 60px;
  width: 100vw;
  height: 100vh;
  background-color: $app-background-color;
  z-index: 9;
  opacity: 0;
  visibility: hidden;
  transition: all .2s;
  &.show-menu {
    visibility: visible;
    opacity: 1;
  }
}
</style>
