<template>
  <div class="shop-product-card">
    <div class="shop-product-image-container">
      <img width="100%" :src="require(`@/assets/images/product/${imageName}_home.png`)" />
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
</style>
