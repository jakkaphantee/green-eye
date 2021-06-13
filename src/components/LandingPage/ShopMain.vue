<template>
  <div class="app-page shop-main-page">
    <div class="page-title">
      candle
    </div>
    <div class="shop-product-list">
      <b-row>
        <b-col
          v-for="product in productData"
          :key="product.name"
          cols="6">
          <ProductCard
            :name="product.name"
            :imageName="product.imageName"
            :description="product.description" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import ProductCard from '@components/ShopMain/ProductCard'

export default {
  name: 'ShopMain',
  components: {
    ProductCard,
  },
  data: () => ({
    productData: [
      {
        name: 'Patchouli candle',
        imageName: 'patchouli',
        description: 'belief that you can do things well',
      },
      {
        name: 'Bergamot candle',
        imageName: 'bergamot',
        description: 'becoming calm after being angry',
      },
      {
        name: 'Vanilla candle',
        imageName: 'vanilla',
        description: 'delight of love',
      },
      {
        name: 'Mint candle',
        imageName: 'mint',
        description: 'understand and solve something',
      },
    ],
  })
}
</script>

<style lang="scss" scoped>
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
</style>
