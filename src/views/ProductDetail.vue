<template>
  <div class="app-page produt-detail-page">
    <div class="product-title-container">
      <img class="back-icon" :src="require('@/assets/images/general/down_arrow.png')" />
      <div class="title-text">
        {{ currentProduct.name }}
      </div>
    </div>
    <div class="product-image-wrapper mt-4">
      <img class="arrow-indicator left" :src="require('@/assets/images/general/arrow_left.png')" />
      <img class="arrow-indicator right" :src="require('@/assets/images/general/arrow_right.png')" />
      <div class="product-image-box">
        <img class="product-image" :src="require('@/assets/images/product/bergamot_01.jpeg')" />
      </div>
    </div>
    <div class="product-image-index-container mt-2">
      <div
        v-for="index in totalImageCount"
        :key="index"
        class="product-image-marker"
      />
    </div>
    <div class="product-detail-container mt-4">
      <div class="product-price">
        {{ currentProduct.priceTag }}
      </div>
      <div class="product-description">
        {{ currentProduct.description }}
      </div>
    </div>
    <div class="product-buy-wrapper">
      <button class="green-eye-button" @click="addProductToCart()">
        Add cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropductDetail',
  data: () => ({
    productList: [
      {
        id: '1',
        name: 'Patchouli candle',
        description: 'belief that you can do things well : patchouli scent',
        imageList: [
          'patchouli_01',
          'patchouli_02',
          'patchouli_03'
        ],
        priceTag: '3.00$'
      },
      {
        id: '2',
        name: 'Bergamot candle',
        description: 'becoming calm after angry : bergamot scent',
        imageList: [
          'bergamot_01',
          'bergamot_02',
          'bergamot_03'
        ],
        priceTag: '3.00$'
      },
      {
        id: '3',
        name: 'Vanilla candle',
        description: 'delight of love : vanilla scent',
        imageList: [
          'vanilla_01',
          'vanilla_02',
          'vanilla_03'
        ],
        priceTag: '3.00$'
      },
      {
        id: '4',
        name: 'Mint candle',
        description: 'understand and solve something : mint scent',
        imageList: [
          'mint_01',
          'mint_02',
          'mint_03'
        ],
        priceTag: '3.00$'
      }
    ],
    productId: ''
  }),
  computed: {
    currentProduct() {
      return this.productList.find(product => product.id === this.productId)
    },
    totalImageCount() {
      return this.currentProduct.imageList.length || 0
    },
  },
  created() {
    this.productId = this.$route.params.id
  },
  methods: {
    addProductToCart() {
      // add to cart
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';

.produt-detail-page {
  overflow-x: hidden;
  overflow-y: scroll;
  @media (max-width: 576px) {
    padding: 0 20px;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
      display: none;
    }
}
.product-title-container {
  position: relative;
  padding-top: 20%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .title-text {
    position: relative;
    color: $primary-color;
    font-family: 'Didot';
    flex-grow: 1;
    text-align: end;
    @media (max-width: 576px) {
      font-size: 8vw;
    }
    @media (min-width: 576px) {
      font-size: 32px;
    }
  }
  .back-icon {
    position: relative;
    width: 20px;
    transform: rotate(90deg);
    margin: 0 10px;
    cursor: pointer;
  }
}
.product-image-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  .arrow-indicator {
    position: absolute;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    z-index: 5;
    &.right {
      right: 20px;
    }
    &.left {
      left: 20px;
    }
  }
}
.product-image-box {
  position: relative;
  width: 90%;
  max-width: 350px;
  height: calc(90vw - 40px);
  max-height: 350px;
  border: 1px solid $primary-color;
  .product-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.product-image-index-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .product-image-marker {
    position: relative;
    width: 5px;
    height: 5px;
    margin: 0 2px;
    border-radius: 9999px;
    border: 1px solid $primary-color;
    &.active {
      background-color: $primary-color;
    }
  }
}
.product-detail-container {
  position: relative;
  padding: 0 20px;
  margin-bottom: 100px;
  text-align: left;
  .product-price {
    font-family: 'DidotLTStd';
    font-size: 28px;
    color: $primary-color;
  }
  .product-description {
    font-size: 14px;
  }
}
.product-buy-wrapper {
  position: fixed;
  left: 0;
  bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
