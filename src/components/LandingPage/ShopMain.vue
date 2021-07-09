<template>
  <div class="app-page shop-main-page app-background">
    <!-- <img
      class="shop-main-background"
      :src="require('@/assets/images/shop/shop_background.jpeg')"
    /> -->
    <div class="page-title">
      <strong>
        CANDLE
      </strong>
    </div>
    <div class="shop-product-list">
      <b-row>
        <b-col
          v-for="(product, index) in productData"
          :key="product.name"
          class="product-container"
          :class="index > 1 ? 'mt-4':''"
          cols="6">
          <ProductCard
            :id="product.id"
            :name="product.name"
            :imageName="product.imageName"
            :description="product.description"
            :isAnimationPlay="isAnimationPlay" />
          <img
            v-if="false"
            class="product-person-image"
            :class="`${product.imageName}-person`"
            :src="require(`@/assets/images/shop/${product.imageName}_person.png`)"
          />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import ProductCard from '@components/ShopMain/ProductCard'

export default {
  name: 'ShopMain',
  props: {
    isAnimationPlay: {
      type: Boolean,
      default: false,
    }
  },
  components: {
    ProductCard,
  },
  data: () => ({
    productData: [
      {
        id: '1',
        name: 'Patchouli candle',
        imageName: 'patchouli',
        description: 'belief that you can do things well',
      },
      {
        id: '4',
        name: 'Mint candle',
        imageName: 'mint',
        description: 'understand and solve something',
      },
      {
        id: '2',
        name: 'Bergamot candle',
        imageName: 'bergamot',
        description: 'becoming calm after being angry',
      },
      {
        id: '3',
        name: 'Vanilla candle',
        imageName: 'vanilla',
        description: 'delight of love',
      },
    ],
  })
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

.shop-main-page {
  display: flex;
  flex-direction: column;
}
.shop-product-list {
  position: relative;
  flex-grow: .7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
}
.shop-main-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}
.product-container {
  position: relative;
  .product-person-image {
    position: absolute;
    width: 40%;
    z-index: -1;
    &.patchouli-person {
      width: 90%;
      top: -30%;
      left: -20%;
    }
    &.mint-person {
      width: 65%;
      top: -30%;
      right: -5%;
    }
    &.bergamot-person {
      width: 60%;
      top: -8%;
      left: -20%;
    }
    &.vanilla-person {
      width: 40%;
      top: -8%;
      right: -10%;
    }
  }
}
.shop-main-title {
  color: white;
}
</style>
