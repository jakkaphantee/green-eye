<template>
  <div class="app-page">
    <img
      width="100%"
      height="100%"
      :src="require('@/assets/images/quiz/intro_3_background.jpeg')"
    />
    <div class="content-container">
      <img
        width="100%"
        :src="require('@/assets/images/quiz/character_background.png')"
      />
      <img
        class="character character-1"
        :src="require('@/assets/images/quiz/character_1.png')"
        @click="introPopUpId = '1'; isModalOpen = true;"
      />
      <img
        class="character character-2"
        :src="require('@/assets/images/quiz/character_2.png')"
        @click="introPopUpId = '2'; isModalOpen = true;"
      />
      <img
        class="character character-3"
        :src="require('@/assets/images/quiz/character_3.png')"
        @click="introPopUpId = '3'; isModalOpen = true;"
      />
      <img
        class="character character-4"
        :src="require('@/assets/images/quiz/character_4.png')"
        @click="introPopUpId = '4'; isModalOpen = true;"
      />
    </div>
    <QuizIntro3PopUp
      v-if="isModalOpen"
      :introId="introPopUpId"
      @closeModal="isModalOpen = false"
    />
    <div class="start-quiz-container">
      <button class="green-eye-button white-button" @click="$emit('nextStep')">
        Start Quiz
      </button>
    </div>
  </div>
</template>

<script>
import QuizIntro3PopUp from '@components/Quiz/QuizIntro3PopUp'

export default {
  name: 'QuizIntro3',
  components: {
    QuizIntro3PopUp
  },
  data: () => ({
    isModalOpen: false,
    introPopUpId: ''
  })
}
</script>

<style lang="scss" scoped>
.start-quiz-container {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
}
.content-container {
  position: absolute;
  top: 10%;
  width: 100%;
}
.character {
  position: absolute;
  &.character-1 {
    top: 0;
    left: 18%;
    width: 30%;
  }
  &.character-2 {
    width: 35%;
    top: 28%;
    right: 7%;
  }
  &.character-3 {
    width: 27%;
    bottom: 20%;
    left: 7%;
  }
  &.character-4 {
    width: 32%;
    bottom: -5%;
    right: 20%;
  }
}
</style>
