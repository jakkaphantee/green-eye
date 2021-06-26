<template>
  <div class="app-page">
    <div class="header-container">
      <div>
        {{ quizCount }} / 12
      </div>
      <div>
        GREEN EYE
      </div>
    </div>
    <div class="quiz-content-container">
      <div class="quiz-text">
        {{ currentQuiz.name }}
      </div>
      <div class="quiz-answer-container mt-4">
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
      <div class="quiz-next" @click="changeQuiz()">
        TAP TO CONTINUE
      </div>
    </div>
  </div>
</template>

<script>
import QuizAnswerBox from '@components/Quiz/QuizAnswerBox'
import { mapMutations, mapState } from 'vuex'

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
    ],
    answerType1: [
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
    ],
    answerType2: [
      {
        id: '1',
        point: 5,
        isSelected: false
      },
      {
        id: '2',
        point: 4,
        isSelected: false
      },
      {
        id: '3',
        point: 3,
        isSelected: false
      },
      {
        id: '4',
        point: 2,
        isSelected: false
      },
      {
        id: '5',
        point: 1,
        isSelected: false
      }
    ],
    currentQuizGroup: '1',
    quizCount: 1,
    quizIndexList: [
      0,
      1,
      2,
      3,
      4,
      5
    ],
    quizIndex: 1
  }),
  computed: {
    ...mapState('quiz', {
      allQuizList: state => state.quizList
    }),
    currentQuizList() {
      return this.allQuizList[`group${this.currentQuizGroup}`]
    },
    currentQuiz() {
      return this.currentQuizList[this.quizIndex]
    },
    quizType() {
      return this.currentQuiz.type
    },
    selectedAnswer() {
      return this.answerList.find(answer => answer.isSelected) || {}
    }
  },
  watch: {
    quizCount(newValue) {
      if (newValue > 12) {
        this.$router.push({ name: 'Home' })
      } else if (newValue > 9) {
        this.currentQuizGroup = '4'
      } else if (newValue > 6) {
        this.currentQuizGroup = '3'
      } else if (newValue > 3) {
        this.currentQuizGroup = '2'
      }
    },
    quizType() {
      this.resetAnswer()
    },
    currentQuizGroup() {
      this.quizIndexList = [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    }
  },
  created() {
    this.changeQuizIndex()
  },
  mounted() {
    this.resetAnswer()
    this.resetScore()
  },
  methods: {
    ...mapMutations('quiz', {
      addScore: 'addScore',
      resetScore: 'resetScore'
    }),
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
    },
    changeQuiz() {
      if (this.selectedAnswer.isSelected) {
        this.quizCount += 1
        this.addScore(this.selectedAnswer.point)
        this.changeQuizIndex()
        this.resetAnswer()
      }
    },
    changeQuizIndex() {
      const index = Math.floor(Math.random() * this.quizIndexList.length)
      const quizIndex = this.quizIndexList.splice(index, 1)
      this.quizIndex = quizIndex
    },
    resetAnswer() {
      if (this.quizType === '1') {
        this.answerList = this.answerType1
      } else {
        this.answerList =this.answerType2
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/variables';
.quiz-content-container {
  width: 100%;
  height: 80%;
  padding: 0 20px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
}
.header-container {
  position: relative;
  width: 100%;
  padding: 20% 20px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: $primary-color;
}
.quiz-text {
  width: 80%;
  font-size: 18px;
  color: $primary-color;
  word-wrap: break-word;
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
.quiz-next {
  margin-top: 20%;
  font-family: 'Didot';
  font-size: 14px;
  color: $primary-color;
}
</style>
