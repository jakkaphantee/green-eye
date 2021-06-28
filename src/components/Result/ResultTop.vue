<template>
  <div class="app-page result-top">
    <img
      width="25%"
      :src="require('@/assets/images/general/brand_logo_text.png')"
    />
    <img
      class="result-product-image"
      width="25%"
      :src="require(`@/assets/images/product/${itemResult}_home.png`)"
    />
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.down-arrow-image {
  position: absolute;
  left: 50%;
  bottom: 25px;
  width: 8%;
  transform: translateX(-50%);
  cursor: pointer;
}
</style>
