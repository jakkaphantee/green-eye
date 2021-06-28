<template>
  <div class="app-page">
    <div v-if="currentStep === 'intro-brief'" class="intro-brief-content">
      <img
        class="intro-brief-text"
        :src="require('@/assets/images/intro/intro_brief_text.png')"
        @click="currentStep = ''; setIsHamburgerShow(true)"
      />
      <img
        width="100%"
        height="100%"
        :src="require('@/assets/images/quiz/quiz_intro_background.jpeg')"
      />
    </div>
    <div class="app-page">
      <img
        class="quiz-video-background"
        :src="currentQuiz.mediaSource"
      />
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
            <div
              v-for="(answer, index) in answerList"
              :key="index"
            >
              <QuizAnswerBox
                :answerId="answer.id"
                :isSelected="answer.isSelected"
                @selectAnswer="selectAnswer(answer)"
              />
              <div v-if="index !== 4" class="quiz-answer-background" />
            </div>
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
    currentStep: 'intro-brief',
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
        this.$router.push({ name: 'Result' })
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
    this.setIsHamburgerShow(false)
  },
  methods: {
    ...mapMutations('quiz', {
      addScore: 'addScore',
      resetScore: 'resetScore'
    }),
    ...mapMutations('user', {
      setIsHamburgerShow: 'setIsHamburgerShow'
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
        this.addScore({ score: this.selectedAnswer.point, currentGroup: this.currentQuizGroup })
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
  color: white;
}
.quiz-text {
  width: 80%;
  font-size: 20px;
  color: white;
  word-wrap: break-word;
}
.quiz-answer-container {
  position: relative;
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  .quiz-answer-box-wrapper,
  .quiz-answer-description-container {
    position: relative;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }
  .quiz-answer-box-wrapper > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .quiz-answer-background {
    position: relative;
    width: 27px;
    height: 1px;
    background-color: white;
    z-index: 0;
  }
}
.quiz-next {
  margin-top: 20%;
  font-family: 'Didot';
  font-size: 14px;
  color: white;
}
.quiz-video-background {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: black;
}
.intro-brief-content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .intro-brief-text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 80%;
  }
}
</style>
