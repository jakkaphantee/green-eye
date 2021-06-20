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
      <CheckoutProductCard />
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
  padding: 20% 20px 0 20px;
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
</style>
