<template>
  <div
    class="checkout-product-card-wrapper"
    :class="isLast ? '' : 'card-border'"
  >
    Product
  </div>
</template>

<script>
export default {
  name: 'CheckoutProductCard',
  props: {
    productId: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    amount: {
      type: Number,
      default: 0
    },
    isLast: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

.checkout-product-card-wrapper {
  position: relative;
  width: 100%;
  padding: 5px 0;
  &.card-border {
    border-bottom: 1px solid $primary-color;
  }
}
</style>
