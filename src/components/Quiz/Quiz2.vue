<template>
  <div class="quiz-2">
    <img
      class="animation-1"
      width="35%"
      :src="require('@/assets/images/quiz/heart.png')"
    />
    <img
      class="quiz-animate q1_2-2"
      width="70%"
      :src="require('@/assets/images/quiz/q1_2-2.png')"
    />
  </div>
</template>

<script>
export default {
  name: 'Quiz2'
}
</script>

<style lang="scss" scoped>
.quiz-2 {
  position: relative;
  width: 100%;
  height: 100%;
}
.animation-1 {
  position: absolute;
  top: 5%;
  left: 10%;
  opacity: .7;
  animation: scaling-animate 2s;
  animation-iteration-count: infinite;
  z-index: 2;
}
</style>
