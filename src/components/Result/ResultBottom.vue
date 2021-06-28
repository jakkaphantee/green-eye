<template>
  <div class="app-page result-bottom">
    <img
      width="60%"
      :src="require(`@/assets/images/result/result_${candleName}.png`)"
    />
    <img
      class="result-candle mt-3"
      :src="require(`@/assets/images/product/${candleName}_home.png`)"
    />
    <button
      class="green-eye-button next-button mt-4"
      @click="changePage('ProductDetail')"
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
        this.productId = 3
        break
      }
      case 'group2': {
        this.productId = 1
        break
      }
      case 'group3': {
        this.productId = 2
        break
      }
      case 'group4': {
        this.productId = 4
        break
      }
    }
  },
  methods: {
    changePage(pageName) {
      this.$router.push({ name: pageName, params: { id: this.productId } })
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
.next-button {
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
}
</style>
