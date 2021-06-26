<template>
  <div class="app-page quiz-page">
    <div class="quiz-answer-container">
      <div class="quiz-answer-box-wrapper">
        <div class="quiz-answer-background" />
        <QuizAnswerBox
          v-for="(answer, index) in answerList"
          :key="index"
          :answerId="answer.id"
          :isSelected="answer.isSelected"
          @selectAnswer="selectAnswer(answer)"
        />
      </div>
      <div class="quiz-answer-description-container">
        <div>
          น้อย
        </div>
        <div>
          มาก
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuizAnswerBox from '@components/Quiz/QuizAnswerBox'

export default {
  name: 'Quiz',
  components: {
    QuizAnswerBox
  },
  data: () => ({
    answerList: [
      {
        id: '1',
        point: 1,
        isSelected: false
      },
      {
        id: '2',
        point: 2,
        isSelected: false
      },
      {
        id: '3',
        point: 3,
        isSelected: false
      },
      {
        id: '4',
        point: 4,
        isSelected: false
      },
      {
        id: '5',
        point: 5,
        isSelected: false
      }
    ]
  }),
  methods: {
    selectAnswer(answer) {
      const currentSelectedAnswer = this.answerList.map((ans) => {
        if (answer.id === ans.id) {
          return {
            ...ans,
            isSelected: true
          }
        }
        return {
          ...ans,
          isSelected: false
        }
      })
      this.answerList = [...currentSelectedAnswer]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
.quiz-page {
  padding: 20% 20px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
}
.quiz-answer-container {
  position: relative;
  width: 70%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  .quiz-answer-background {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
    background-color: $primary-color;
    z-index: 0;
  }
  .quiz-answer-box-wrapper,
  .quiz-answer-description-container {
    position: relative;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
