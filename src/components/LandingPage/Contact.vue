<template>
  <div class="app-page contact-page app-background">
    <div class="contact-head">
      <img :src="require('@/assets/images/contact/contact_head.png')" />
    </div>
    <div class="contact-description">
      <div class="contact-profile-image">
        <img :src="require('@/assets/images/general/owner.png')" @click="openProfile()" />
      </div>
      <div class="mt-2">
        Paparwarin Leangbunlertchai
      </div>
      <div>
        +66 90 415 4226
      </div>
    </div>
    <div class="contact-form-container">
      <div class="contact-name" align="left">
        <label for="name">Name</label>
        <input id="name" class="green-eye-input block" />
      </div>
      <div class="contact-description mt-2" align="left">
        <label for="note">Note</label>
        <textarea id="note" class="green-eye-input block green-eye-textarea" />
      </div>
      <div class="contact-submit pt-2">
        <button class="green-eye-button">
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  methods: {
    openProfile() {
      window.open('https://www.instagram.com/bom_leang', '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';

.contact-page {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
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
.contact-profile-image {
  position: relative;
  width: 100%;
  img {
    width: 70%;
    max-width: 170px;
  }
}
.contact-form-container {
  position: relative;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  label {
    font-size: 22px;
    font-family: 'Didot';
  }
  div {
    width: 100%;
  }
  .contact-name {
    flex-grow: .5;
  }
  .contact-description {
    flex-grow: 2;
  }
  .contact-submit {
    flex-grow: 1;
  }
}
.green-eye-textarea {
  height: 70%;
}
</style>
