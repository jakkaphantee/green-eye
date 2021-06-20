<template>
  <div class="app-page purchase-page">
    <img
      class="back-icon"
      :src="require('@/assets/images/general/back_icon.png')"
      @click="changePage('LandingPage')"
    />
    <img
      class="transfer-detail"
      :src="require('@/assets/images/purchase/transfer_detail.png')"
    />
    <img
      class="transfer-email mt-4"
      :src="require('@/assets/images/purchase/transfer_email.png')"
    />
    <div class="transfer-form">
      <div align="left">
        <label for="name">Name</label>
        <input id="name" class="green-eye-input block" autocomplete="off" />
      </div>
      <div class="mt-2" align="left">
        <label for="address">Address</label>
        <textarea id="address" class="green-eye-input green-eye-textarea block" autocomplete="off" />
      </div>
      <div class="mt-2" align="left">
        <label for="email">Email</label>
        <input id="email" class="green-eye-input block" autocomplete="off" />
      </div>
      <div class="transfer-form-button">
        <button class="green-eye-button" @click="isModalOpen = true">
          Send
        </button>
      </div>
    </div>
    <PurchaseSuccessModal
      :isModalOpen="isModalOpen"
      @closeModal="isModalOpen = false"
    />
  </div>
</template>

<script>
import PurchaseSuccessModal from '@components/Purchase/PurchaseSuccessModal'

export default {
  name: 'Purchase',
  components: {
    PurchaseSuccessModal
  },
  data: () => ({
    isModalOpen: false
  }),
  methods: {
    changePage(pageName) {
      this.$router.push({ name: pageName })
    }
  }
}
</script>

<style lang="scss" scoped>
.back-icon {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
}
.purchase-page {
  padding: 20% 20px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
}
.transfer-detail {
  position: relative;
  width: 75%;
}
.transfer-email {
  position: relative;
  width: 75%;
}
.transfer-form {
  position: relative;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  div {
    flex-grow: .3;
  }
  label {
    font-family: 'Didot';
  }
}
.transfer-form-button {
  padding: 20px 0;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
</style>
