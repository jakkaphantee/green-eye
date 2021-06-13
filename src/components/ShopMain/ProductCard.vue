<template>
  <div class="shop-product-card">
    <div class="shop-product-image-container">
      <img width="100%" :src="require(`@/assets/images/product/${imageName}_01.jpeg`)" />
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
  margin-top: 8px;
}
.shop-product-image-container {
  position: relative;
  width: 100%;
}
.shop-product-description-box {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 7px;
  border-width: 1px;
  border-style: solid;
  border-color: $app-border-color;
  border-left: none;
  border-right: none;
  padding: 5px 10px;
  .shop-product-name {
    font-family: 'Didot';
    font-size: 14px;
    text-align: left;
  }
  .shop-product-description {
    font-size: 13px;
    text-align: left;
  }
}
</style>
