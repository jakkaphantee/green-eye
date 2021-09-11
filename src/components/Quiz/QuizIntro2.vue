<template>
  <div class="app-page">
    <img
      width="100%"
      height="100%"
      :src="require('@/assets/images/quiz/intro2/intro_2_background_white.gif')"
      @click="isPopUpShow = true"
    />
    <div v-if="isPopUpShow" class="pop-up-container" @click="isPopUpShow = false">
      <img
        class="pop-up-text"
        width="100%"
        :src="require('@/assets/images/quiz/intro_2_popup_text.png')"
      />
      <img
        class="pop-up-background"
        :src="require('@/assets/images/quiz/intro_2_popup_background.png')"
      />
    </div>
    <div
      v-if="isNextPopUpShow"
      class="pop-up-container"
      @click="$emit('nextStep')"
    >
      <img
        class="pop-up-text"
        width="100%"
        :src="require('@/assets/images/quiz/intro2/next_pop_up_text.png')"
      />
      <img
        class="pop-up-background background-next"
        :src="require('@/assets/images/quiz/intro2/next_pop_up_background.png')"
      />
    </div>
    <div class="next-button">
      <button class="green-eye-button white-button" @click="isNextPopUpShow = true">
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizIntro2',
  data: () => ({
    isPopUpShow: false,
    isNextPopUpShow: false
  })
}
</script>

<style lang="scss" scoped>
.next-button {
  position: absolute !important;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
  z-index: 5;
}
.pop-up-container {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  .pop-up-text {
    position: absolute;
    width: 55%;
    z-index: 6;
  }
  .pop-up-background {
    position: relative;
    width: 120%;
    transform: scale(1.2);
  }
  .background-next {
    width: 80%;
    transform: none;
  }
}
.background-with-mark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
