<template>
  <div class="shop-second-product-card mt-2" @click="changePage('ProductDetail')">
    <div id="product-image">
      <img
        class="product-image-transition"
        :class="isAnimationPlay ? 'show-image' : ''"
        :src="require(`@/assets/images/product/${imageName}.png`)"
      />
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
    <img
      class="product-arrow"
      :class="[name === 'Zippo' ? 'zippo-arrow' : '', name === 'Fire gun' ? 'fire-gun-arrow' : '']"
      :src="require(`@/assets/images/general/${name === 'Fire gun' ? 'arrow_right' : 'right_arrow'}.png`)"
    />
  </div>
</template>

<script>
export default {
  name: 'ShopSecondProductCard',
  props: {
    productId: {
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
    changePage(pageName) {
      this.$router.push({ name: pageName, params: { id: this.productId } })
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
.product-arrow {
  position: absolute;
  top: 90%;
  right: 15px;
  width: 35px;
  &.zippo-arrow {
    top: 70%;
  }
  &.fire-gun-arrow {
    top: 40%;
    width: 12px;
  }
}
</style>
