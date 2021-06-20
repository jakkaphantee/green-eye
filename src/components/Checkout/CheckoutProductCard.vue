<template>
  <div
    class="checkout-product-card-wrapper"
    :class="isLast ? '' : 'card-border'"
  >
    <div class="checkout-product-image-container">
      <img :src="require(`@/assets/images/product/${coverImageName}.jpeg`)" />
    </div>
    <div class="checkout-product-detail-container">
      <div class="product-name">
        {{ productData.name }}
      </div>
      <div class="product-description">
        {{ productData.description }}
      </div>
      <div class="product-dropdown-wrapper">
        <button
          :id="dropdownId"
          class="green-eye-button"
          @click="isDropdownOpen = !isDropdownOpen"
        >
          <div :id="dropdownId" class="button-icon-content">
            <strong :id="dropdownId">{{ productData.amount }}</strong>
            <img :id="dropdownId" :src="require('@/assets/images/general/arrow_right.png')" />
          </div>
        </button>
        <div
          :id="dropdownId"
          class="product-dropdown-container"
          :class="isDropdownOpen ? 'show-menu' : ''"
        >
          <button
            v-for="amount in amountMenuList"
            :key="`amount-${amount}`"
            class="green-eye-dropdown-button"
            @click="changeAmount(amount)"
          >
            <strong>
              {{ amount }}
            </strong>
          </button>
        </div>
      </div>
      <div class="product-price">
        ${{ totalPrice }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'CheckoutProductCard',
  props: {
    productData: {
      type: Object,
      default: () => ({})
    },
    isLast: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isDropdownOpen: false,
    amountMenuList: [
      1,
      2,
      3,
      4,
      5
    ]
  }),
  computed: {
    coverImageName() {
      return this.productData.imageList[0]
    },
    totalPrice() {
      return parseFloat(this.productData.amount * this.productData.price)
    },
    dropdownId() {
      return `dropdown-${this.coverImageName}`
    }
  },
  mounted() {
    document.addEventListener('mouseup', this.dropdownListener)
  },
  methods: {
    ...mapMutations('checkout', {
      changeItemAmount: 'changeItemAmount'
    }),
    changeAmount(amount) {
      this.changeItemAmount({ itemId: this.productData.id, amount })
      this.isDropdownOpen = false
    },
    dropdownListener($event) {
      const { id } = $event.target
      if (id !== this.dropdownId) {
        this.isDropdownOpen = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

.checkout-product-card-wrapper {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  width: 100%;
  padding: 16px 0;
  &.card-border {
    border-bottom: 1px solid $primary-color;
  }
}
.checkout-product-image-container {
  position: relative;
  width: 25vw;
  height: 25vw;
  max-width: 90px;
  max-height: 90px;
  border: 1px solid $primary-color;
  img {
    width: 100%;
  }
}
.checkout-product-detail-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  flex-grow: 1;
  padding-left: 8px;
  color: $primary-color;
  .product-name {
    width: 100%;
    font-family: 'Didot';
    font-size: 18px;
    text-align: left;
  }
  .product-description {
    width: 100%;
    font-size: 14px;
    text-align: left;
  }
  .product-price {
    position: absolute;
    bottom: 0;
    left: 8px;
    font-family: 'Didot';
    font-size: 18px;
    text-align: left;
  }
}
.product-dropdown-wrapper {
  position: relative;
  width: fit-content;
  .product-dropdown-container {
    position: absolute;
    top: 100%;
    width: 100%;
    max-height: 150px;
    margin-top: 4px;
    background-color: $app-background-color;
    border: 1px solid $primary-color;
    border-radius: 8px;
    visibility: hidden;
    z-index: 5;
    &.show-menu {
      visibility: visible;
    }
  }
}
.green-eye-button {
  min-width: 60px;
  font-family: 'THSarabunNew';
  font-size: 18px;
}
.button-icon-content {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 10px;
    margin-left: 8px;
    transform: rotate(90deg);
  }
}
.green-eye-dropdown-button {
  position: relative;
  width: 100%;
  border: none;
  background-color: transparent;
  color: $primary-color;
}
</style>
