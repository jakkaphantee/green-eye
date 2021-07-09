<template>
  <div class="app-page result-top">
    <img
      class="result-top-background"
      :src="require('@/assets/images/result/result_top_background.jpeg')"
    />
    <img
      class="fade-in-animation"
      width="25%"
      :src="require('@/assets/images/general/brand_logo_text.png')"
    />
    <img
      class="result-product-image fade-in-animation"
      :src="require(`@/assets/images/result/${itemResult}.png`)"
    />
    <div class="result-description-container fade-in-animation">
      <img
        class="description-background"
        :src="require('@/assets/images/result/result_description_background.png')"
      />
      <img
        class="description-text"
        :src="require(`@/assets/images/result/result_${itemResult}.png`)"
      />
    </div>
    <img
      class="down-arrow-image"
      :src="require('@/assets/images/general/down_arrow.png')"
      @click="$emit('scrollToElement', 'resultBottom')"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ResultTop',
  computed: {
    ...mapState('quiz', {
      userScore: state => state.userScore,
    }),
    itemResult() {
      if (this.userScore <= 20) {
        return 'match'
      } else if (this.userScore <= 40) {
        return 'zippo'
      } else {
        return 'fire_gun'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.result-top {
  padding: 20% 20px 0 20px;
  overflow: hidden;
}
.result-product-image {
  position: absolute;
  top: 23%;
  right: 15%;
  width: 25%;
  z-index: 3;
}
.down-arrow-image {
  position: absolute;
  left: 50%;
  bottom: 20px;
  width: 5%;
  transform: translateX(-50%);
  cursor: pointer;
}
.result-top-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.result-description-container {
  position: absolute;
  top: 28%;
  left: 10%;
  width: 75%;
  z-index: 2;
  .description-background {
    position: relative;
    width: 100%;
  }
  .description-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
  }
}
</style>
