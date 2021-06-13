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
      <div
        v-for="(menu, index) in menuList"
        :key="menu.imageName"
        class="menu-section py-4"
        :class="index === 4 ? '' : 'menu-border'"
      >
        <img
          :class="menu.style"
          :src="require(`@/assets/images/menu/${menu.imageName}.png`)"
          @click="changePage(menu.routeName, menu.componentName)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'HamburgerMenu',
  data: () => ({
    isMenuOpen: false,
    menuIconName: 'menu_icon',
    menuList: [
      {
        imageName: 'menu_home',
        routeName: 'LandingPage',
        componentName: 'home',
        style: 'home-size'
      },
      {
        imageName: 'menu_about',
        routeName: 'About',
        componentName: '',
        style: 'about-size'
      },
      {
        imageName: 'menu_quiz',
        routeName: 'Quiz',
        componentName: '',
        style: 'quiz-size'
      },
      {
        imageName: 'menu_shop',
        routeName: 'LandingPage',
        componentName: 'shopMain',
        style: 'shop-size'
      },
      {
        imageName: 'menu_contact',
        routeName: 'LandingPage',
        componentName: 'contact',
        style: 'contact-size'
      },
    ]
  }),
  watch: {
    isMenuOpen(newValue) {
      this.menuIconName = newValue ? 'close_menu' : 'menu_icon'
    }
  },
  methods: {
    ...mapMutations('user', {
      setCurrentLandingPageComponent: 'setCurrentLandingPageComponent'
    }),
    changePage(routeName, componentName) {
      if (routeName === 'LandingPage') {
        this.setCurrentLandingPageComponent(componentName)
      }
      this.$router.push({ name: routeName })
      this.isMenuOpen = false
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0px 25px;
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
.menu-section {
  position: relative;
  display: block;
  width: 100%;
  &.menu-border {
    border-bottom: $app-border-color solid 0.025rem;
  }
  img {
    &:hover {
      cursor: pointer;
    }
  }
  .home-size {
    width: 100px;
  }
  .about-size {
    width: 110px;
  }
  .quiz-size {
    width: 160px;
  }
  .shop-size {
    width: 90px
  }
  .contact-size {
    width: 140px;
  }
}
</style>
