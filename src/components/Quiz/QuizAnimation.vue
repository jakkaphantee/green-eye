<template>
  <div class="quiz-animation-box">
    <img
      class="quiz-animate q1_2-1"
      width="35%"
      :src="require('@/assets/images/quiz/heart.png')"
    />
    <img
      class="quiz-animate q1_2-2"
      width="70%"
      :src="require('@/assets/images/quiz/q1_2-2.png')"
    />
    <Quiz1 />
    <Quiz2 />
  </div>
</template>

<script>
export default {
  name: 'QuizAnimation',
  components: {
    Quiz1: () => import('@/components/Quiz/Quiz1.vue'),
    Quiz2: () => import('@/components/Quiz/Quiz2.vue')
  },
  data: () => ({
    imageList: [
      {
        name: 'heart',
        className: 'q1_2-1',
        width: '35%'
      },
      {
        name: 'q1_2-2',
        className: 'q1_2-2',
        width: '70%'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.quiz-animation-box {
  position: relative;
  width: 80%;
  min-height: 60vw;
  overflow: hidden;
}
.quiz-animate {
  &.q1_1-1 {
    opacity: .7;
    animation: scaling-animate 2s;
    animation-iteration-count: infinite;
    
  }
  &.q1_1-2 {
  }
  &.q1_2-1 {
    position: absolute;
    top: 5%;
    left: 10%;
    opacity: .7;
    animation: scaling-animate 2s;
    animation-iteration-count: infinite;
    z-index: 2;
  }
  &.q1_2-2 {
    position: absolute;
    bottom: -25%;
    right: 10%;
    animation: q1_2-2-animate 2s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
    @keyframes q1_2-2-animate {
      0% {
        transform: rotate(-90deg);
      }
      25% {
        transform: rotate(15deg);
      }
      55% {
        transform: rotate(0deg);
      }
      75% {
        transform: rotate(15deg);
      }
      100% {
        transform: rotate(-90deg);
      }
    }
  }
}
</style>
