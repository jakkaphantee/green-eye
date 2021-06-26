<template>
  <div class="quiz-answer-box-container" @click="$emit('selectAnswer', answerId)">
    <div v-if="isSelected" class="checked-mark" />
  </div>
</template>

<script>
export default {
  name: 'QuizAnswerBox',
  props: {
    answerId: {
      type: String,
      default: ''
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables';
.quiz-answer-box-container {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 1px solid $primary-color;
  border-radius: 9999px;
  background-color: $app-background-color;
  .checked-mark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18px;
    height: 18px;
    border-radius: 9999px;
    background-color: $primary-color;
  }
}
</style>
