<template>
  <div class="home-page">
    <img
      class="home-brand-logo"
      :src="require('@/assets/images/home/home_brand_logo.png')"
    />
    <img
      class="home-text start-text"
      :src="require('@/assets/images/home/start_text.png')"
    />
    <img
      class="home-text quiz-text"
      :src="require('@/assets/images/home/quiz_text.png')"
    />
    <img
      class="start-quiz-button"
      :src="require('@/assets/images/home/quiz_start_button.png')"
      @click="console.log('click')"
    />
    <img
      class="home-start-background"
      :src="require('@/assets/images/home/home_background.png')"
    />
    <div class="to-shop-box">
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
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home-page {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
}
.home-brand-logo {
  position: absolute;
  top: 12%;
  width: 30%;
  max-width: 110px;
}
.home-text {
  position: absolute;
  top: 36%;
  z-index: 5;
  &.start-text {
    width: 50%;
    max-width: 150px;
  }
  &.quiz-text {
    margin-top: 50px;
    left: 50%;
    width: 40%;
    max-width: 130px;
  }
}
.start-quiz-button {
  position: absolute;
  top: 46%;
  left: 5%;
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
