<template>
  <div class="quiz-intro-pop-up-container">
    <img
      class="pop-up-close-button"
      :src="require('@/assets/images/general/cross_white.png')"
      @click="$emit('closeModal')"
    />
    <img
      class="pop-up-background"
      :src="require(`@/assets/images/quiz/intro3/pop_up_background_${introId}.png`)"
    />
    <img
      class="pop-up-text"
      :src="require(`@/assets/images/quiz/intro3/pop_up_text_${introId}.png`)"
    />
  </div>
</template>

<script>
export default {
  name: 'QuizIntro3PopUp',
  props: {
    introId: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.quiz-intro-pop-up-container {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  width: 100%;
  z-index: 5;
}
.pop-up-background {
  position: relative;
  width: 90%;
}
.pop-up-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55%;
}
.pop-up-close-button {
  position: absolute;
  top: 7%;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  z-index: 6;
}
</style>
