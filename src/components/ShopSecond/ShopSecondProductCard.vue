<template>
  <div class="shop-second-product-card mt-2">
    <div id="product-image">
      <img :src="require(`@/assets/images/product/${imageName}.png`)" />
    </div>
    <div
      id="product-desc"
      :class="name === 'Fire gun' ? 'fire-gun-text' : ''">
      <div class="shop-product-description-box">
        <div class="shop-product-name">
          <strong>{{ name }}</strong>
        </div>
        <div class="shop-product-description">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopSecondProductCard',
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
.shop-second-product-card {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px 15px;
  #product-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: .5;
    img {
      width: 75%;
      max-width: 120px;
    }
  }
  #product-desc {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
}
.shop-product-description-box {
  position: relative;
  width: 100%;
  height: fit-content;
  margin: 0px;
}
.fire-gun-text {
  align-items: flex-start !important;
}
</style>
