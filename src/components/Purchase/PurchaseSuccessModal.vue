<template>
  <b-modal
    v-model="isModalOpen"
    centered
    hide-header
    hide-footer
    hide-backdrop
    no-close-on-backdrop
    no-fade
    size="md"
  >
    <div class="purchase-modal-content">
      <!-- <div align="left">
        <i>Thank you for your purchase</i>
      </div>
      <div align="left">
        <i>Enjoy your product</i>
      </div> -->
      <img
        width="100%"
        :src="require('@/assets/images/purchase/thanks_text.png')"
      />
      <img
        class="purchase-modal-close-icon"
        :src="require('@/assets/images/general/cross_icon.png')"
        @click="$emit('closeModal')"
      />
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'PurchaseSuccessModal',
  props: {
    isModalOpen: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/variables';
.modal-content {
  border-radius: 0 !important;
  border-left: 0 !important;
  border-right: 0 !important;
  // border-color: $primary-color !important;
  // background-color: $app-background-color !important;
  border-color: none !important;
  background-color: none !important;
  font-family: 'DidotLTStd';
}
.modal-body {
  padding: 0 !important;
}
.purchase-modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  font-size: 19px;
}
.purchase-modal-close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  cursor: pointer;
}
</style>
