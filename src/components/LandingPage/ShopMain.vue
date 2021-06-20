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
            :id="product.id"
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
        id: '1',
        name: 'Patchouli candle',
        imageName: 'patchouli',
        description: 'belief that you can do things well',
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
      {
        id: '4',
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
