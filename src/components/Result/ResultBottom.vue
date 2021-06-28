<template>
  <div class="app-page result-bottom">
    <img
      width="70%"
      :src="require(`@/assets/images/result/result_${candleName}.png`)"
    />
    <img
      class="result-candle mt-3"
      :src="require(`@/assets/images/product/${candleName}_home.png`)"
    />
    <img
      class="result-candle-background"
      :src="require(`@/assets/images/result/result_${candleName}_background.jpeg`)"
    />
    <button
      class="green-eye-button next-button mt-4"
      @click="changePage('Home')"
    >
      Next
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ResultBottom',
  data: () => ({
    productId: 0
  }),
  computed: {
    ...mapGetters('quiz', {
      maxScoreGroup: 'maxScoreGroup'
    }),
    candleName() {
      switch (this.maxScoreGroup) {
        case 'group1': {
          return 'vanilla'
        }
        case 'group2': {
          return 'patchouli'
        }
        case 'group3': {
          return 'bergamot'
        }
        case 'group4': {
          return 'mint'
        }
      }
      return ''
    }
  },
  mounted() {
    switch (this.maxScoreGroup) {
      case 'group1': {
        this.productId = '3'
        break
      }
      case 'group2': {
        this.productId = '1'
        break
      }
      case 'group3': {
        this.productId = '2'
        break
      }
      case 'group4': {
        this.productId = '4'
        break
      }
    }
  },
  methods: {
    changePage(pageName) {
      this.$router.push({ name: pageName })
    }
  }
}
</script>

<style lang="scss" scoped>
.result-bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow: hidden;
}
.result-candle {
  position: relative;
  width: 40%;
}
.result-candle-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.next-button {
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  color: white;
  border-color: white;
  &:hover {
    background-color: white;
    color: black;
  }
}
</style>
