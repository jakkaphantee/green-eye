<template>
  <div class="home-page app-background">
    <div class="home-brand-logo">
      GREEN EYE
    </div>
    <div class="character-woman-container">
      <div class="home-white-circle woman" />
      <img :src="require('@/assets/images/home/woman_character.png')" />
    </div>
    <div class="character-demon-container">
      <div class="home-white-circle lg demon" />
      <img :src="require('@/assets/images/home/demon_character.png')" />
    </div>
    <img
      class="home-text"
      :src="require('@/assets/images/home/start_quiz_text.png')"
    />
    <img
      class="start-quiz-button"
      :src="require('@/assets/images/home/quiz_start_button.png')"
      @click="changePage('Quiz')"
    />
    <img
      class="home-start-background"
      :src="require('@/assets/images/home/home_background.png')"
    />
    <div
      class="to-shop-box"
      @click="$emit('scrollToComponent', 'shopMain')"
    >
      <div class="shop-text">
        <strong>Shop</strong>
      </div>
      <div class="my-3">
        <img
          class="arrow"
          :src="require('@/assets/images/general/down_arrow.png')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    changePage(routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
.home-page {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-brand-logo {
  position: absolute;
  top: 12%;
  font-size: 24px;
  font-family: 'DIDOT';
  color: $primary-color;
}
.home-white-circle {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0;
  border-radius: 9999px;
  background-color: rgba($color: white, $alpha: .5);
  &.lg {
    width: 80px;
    height: 80px;
  }
  &.woman {
    left: 32%;
  }
  &.demon {
    top: -15%;
    right: -10%;
  }
}
.character-woman-container {
  position: absolute;
  top: 20%;
  right: 15%;
  img {
    width: 120px;
    animation: woman-animation 1s ease-out forwards;
    @keyframes woman-animation {
      from {
        opacity: 0;
        transform: translateX(150%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
}
.character-demon-container {
  position: absolute;
  top: 42%;
  left: 8%;
  z-index: 5;
  img {
    width: 140px;
    animation: demon-animation 1s ease-out;
    @keyframes demon-animation {
      from {
        opacity: 0;
        transform: translateX(-120%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
}
.home-text {
  position: absolute;
  top: 32%;
  width: 60%;
  z-index: 5;
  animation: home-text-animation 1s ease-out;
  @keyframes home-text-animation {
    from {
      transform: translateX(150%);
    }
    to {
      transform: translateX(0);
    }
  }
}
.start-quiz-button {
  position: absolute;
  top: 54%;
  right: 10%;
  width: 55%;
  max-width: 165px;
  z-index: 5;
  &:hover {
    cursor: pointer;
  }
}
.home-start-background {
  position: absolute;
  top: 35%;
  left: 0;
  width: 70%;
  z-index: 1;
}
.to-shop-box {
  position: absolute;
  bottom: 0;
  font-size: 22px;
  font-family: 'DidotLTStd';
  .show-text {
    position: relative;
  }
  .arrow {
    position: relative;
    width: 30px;
  }
}
</style>
