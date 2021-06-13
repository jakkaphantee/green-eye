<template>
  <div class="app-page">
    <div class="contact-head">
      <img :src="require('@/assets/images/contact/contact_head.png')" />
    </div>
    <div class="contact-description">
      <img width="110px" height="110px" />
      <div class="mt-2">
        Paparwarin Leangbunlertchai
      </div>
      <div>
        +66 90 415 4226
      </div>
    </div>
    <div class="contact-form-container">
      <div align="left">
        <label for="name">Name</label>
        <input id="name" class="green-eye-input block" />
      </div>
      <div class="mt-3" align="left">
        <label for="note">Note</label>
        <textarea id="note" class="green-eye-input block green-eye-textarea" />
      </div>
    </div>
    <div class="mt-4 text-center">
      <button class="green-eye-button">
        Send
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

.contact-head {
  position: relative;
  width: 100%;
  padding-top: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 40%;
  }
}
.contact-description {
  font-size: 22px;
  color: $primary-color;
}
.contact-form-container {
  position: relative;
  width: 100%;
  padding: 0 30px;
  label {
    font-size: 22px;
    font-family: 'Didot';
  }
}
</style>
