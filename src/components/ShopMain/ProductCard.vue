<template>
  <div class="shop-product-card" @click="changePage(name)">
    <div class="shop-product-image-container">
      <img
        class="product-image-transition"
        :class="isAnimationPlay ? 'show-image' : ''"
        width="100%"
        :src="require(`@/assets/images/product/${imageName}_home.png`)" />
    </div>
    <div class="shop-product-description-box">
      <div class="shop-product-name">
        <strong>{{ name }}</strong>
      </div>
      <div class="shop-product-description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'Product Title',
    },
    imageName: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: 'description long text',
    },
    isAnimationPlay: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changePage() {
      this.$router.push({ name: 'ProductDetail', params: { id: this.id } })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

.shop-product-card {
  position: relative;
  width: 100%;
  margin-top: 20px;
}
.shop-product-image-container {
  position: relative;
  width: 100%;
}
.shop-product-description-box {
  border-top: none;
}
</style>
