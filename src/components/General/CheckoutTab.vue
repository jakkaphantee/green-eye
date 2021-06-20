<template>
  <div class="checkout-tab">
    <img
      v-if="!isOpen"
      class="menu-icon"
      :src="require('@/assets/images/general/cart_icon.png')"
      @click="isOpen = true"
    />
    <img
      v-else
      class="menu-icon"
      :src="require('@/assets/images/general/cross_icon.png')"
      @click="isOpen = false"
    />
    <div
      class="checkout-content-container"
      :class="isOpen ? 'show-menu' : ''"
    >
      <div class="checkout-product-list">
        <CheckoutProductCard
          v-for="(item, index) in cartItems"
          :key="item.name"
          v-bind="{
            productData: item,
            isLast: index === cartItems.length - 1
          }"
        />
      </div>
      <div class="checkout-summary">
        <div class="checkout-total-price">
          <div>
            Total
          </div>
          <div>
            {{ totalCost }}.00 $
          </div>
        </div>
        <button class="green-eye-button checkout-purchase-button">
          Purchase
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import CheckoutProductCard from '../Checkout/CheckoutProductCard'

export default {
  name: 'CheckoutTab',
  components: {
    CheckoutProductCard
  },
  data: () => ({
    isOpen: false
  }),
  computed: {
    ...mapState('checkout', {
      cartItems: state => state.cart
    }),
    ...mapGetters('checkout', {
      totalCost: 'totalCost'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

.checkout-tab {
  position: fixed;
  z-index: 10;
}
.menu-icon {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 20px;
  z-index: 9;
  cursor: pointer;
}
.checkout-content-container {
  position: fixed;
  padding: 15% 20px 0 20px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $app-background-color;
  opacity: 0;
  visibility: hidden;
  transition: all .15s;
  &.show-menu {
    visibility: visible;
    opacity: 1;
  }
}
.checkout-product-list {
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  height: 73%;
  margin-bottom: 25%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
}
.checkout-summary {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 25%;
  max-height: 200px;
  padding: 10px 0 0 0;
  z-index: 2;
  .checkout-total-price {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    font-family: 'Didot';
    font-size: 20px;
    div {
      flex-grow: 1;
    }
  }
  .checkout-purchase-button {
    position: absolute;
    left: 50%;
    bottom: 30px;
    transform: translateX(-50%);
  }
}
</style>
