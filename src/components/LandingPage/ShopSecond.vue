<template>
  <div class="app-page shop-second-page app-background">
    <div class="page-title">
      <strong>HOT OF ENVY</strong>
    </div>
    <div class="gradient-tab shop-second-gradient-animation" />
    <div class="shop-second-product-list">
      <b-row>
        <b-col
          v-for="product in productList"
          :key="product.name"
          cols="12">
          <ShopSecondProductCard
            :productId="product.id"
            :name="product.name"
            :imageName="product.imageName"
            :description="product.description" />
        </b-col>
      </b-row>
    </div>
    <div
      class="to-contact-page-box"
      @click="$emit('scrollToComponent', 'contact')">
      <div class="shop-text">
        <strong>Contact</strong>
      </div>
      <div class="my-2">
        <img
          class="arrow"
          :src="require('@/assets/images/general/down_arrow.png')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ShopSecondProductCard from '@components/ShopSecond/ShopSecondProductCard'

export default {
  name: 'ShopSecond',
  components: {
    ShopSecondProductCard
  },
  data: () => ({
    productList: [
      {
        id: '6',
        name: 'Match',
        imageName: 'match_home',
        description: 'belief that you can do things well'
      },
      {
        id: '7',
        name: 'Zippo',
        imageName: 'zippo_home',
        description: 'belief that you can do things well'
      },
      {
        id: '5',
        name: 'Fire gun',
        imageName: 'fire_gun_home',
        description: 'belief that you can do things well'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

.shop-second-page {
  display: flex;
  flex-direction: column;
}
.gradient-tab {
  position: absolute;
  top: 20%;
  left: 10%;
  width: 30px;
  height: 65%;
  border-radius: 9999px;
  background-image: linear-gradient(to top, $primary-color, transparent);
}
.shop-second-product-list {
  position: relative;
  width: 100%;
  flex-grow: .5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.to-contact-page-box {
  position: absolute;
  width: 100%;
  bottom: 0;
  font-size: 18px;
  font-family: 'DidotLTStd';
  z-index: 5;
  .show-text {
    position: relative;
  }
  .arrow {
    position: relative;
    height: 45px;
  }
}
</style>
