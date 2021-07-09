<template>
  <div class="app-page">
    <img
      width="100%"
      height="100%"
      :src="require('@/assets/images/quiz/intro_3_background.jpeg')"
    />
    <div class="content-container">
      <img
        class="character character-1"
        :src="require('@/assets/images/quiz/character_1.png')"
        @click="introPopUpId = '1'; isModalOpen = true;"
      />
      <img
        class="character-box-1"
        :src="require('@/assets/images/quiz/intro3/character_box_1.png')"
      />
      <img
        class="character character-2"
        :src="require('@/assets/images/quiz/character_2.png')"
        @click="introPopUpId = '2'; isModalOpen = true;"
      />
      <img
        class="character-box-2"
        :src="require('@/assets/images/quiz/intro3/character_box_4.png')"
      />
      <img
        class="character character-3"
        :src="require('@/assets/images/quiz/character_3.png')"
        @click="introPopUpId = '3'; isModalOpen = true;"
      />
      <img
        class="character-box-3"
        :src="require('@/assets/images/quiz/intro3/character_box_3.png')"
      />
      <img
        class="character character-4"
        :src="require('@/assets/images/quiz/character_4.png')"
        @click="introPopUpId = '4'; isModalOpen = true;"
      />
      <img
        class="character-box-4"
        :src="require('@/assets/images/quiz/intro3/character_box_4.png')"
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
  height: 60%;
}
.character {
  position: absolute;
  z-index: 2;
  &.character-1 {
    top: 0;
    left: 18%;
    width: 30%;
    animation: character-fade-in 1.5s linear forwards;
  }
  &.character-2 {
    width: 35%;
    top: 28%;
    right: 7%;
    animation: character-fade-in 1.5s linear forwards;
  }
  &.character-3 {
    width: 27%;
    bottom: 20%;
    left: 7%;
    animation: character-fade-in 1.5s ease-out forwards;
  }
  &.character-4 {
    width: 32%;
    bottom: -5%;
    right: 20%;
    animation: character-fade-in 1.5s ease-out forwards;
  }
}
.character-box-1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 55%;
  z-index: 1;
  animation: box-left-animate 1s ease-out;
}
.character-box-2 {
  position: absolute;
  top: 28%;
  right: 0;
  width: 52%;
  animation: box-right-animate 1s ease-out;
}
.character-box-3 {
  position: absolute;
  top: 50%;
  left: 0;
  width: 42%;
  animation: box-left-animate 1s ease-out;
}
.character-box-4 {
  position: absolute;
  bottom: -5%;
  right: 0;
  width: 52%;
  animation: box-right-animate 1s ease-out;
}
@keyframes box-left-animate {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes box-right-animate {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes character-fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
</style>
